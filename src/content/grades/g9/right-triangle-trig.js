// Grade 9 · Theme 9: Trigonometry in the right triangle (April–June)
const alt = (al, en, de) => ({ al, en, de });

const TRIANGLE = {
  type: 'geoFigure', view: { xMin: -0.8, xMax: 5.6, yMin: -0.9, yMax: 3.8 }, height: 190,
  shapes: [
    { kind: 'polygon', points: [[0, 0], [4, 0], [4, 3]], fill: true, color: 'primary' },
    { kind: 'angle', vertex: [4, 0], from: [0, 0], to: [4, 3], right: true },
    { kind: 'angle', vertex: [0, 0], from: [4, 0], to: [4, 3], label: 'α', color: 'secondary', r: 30 },
    { kind: 'label', at: [2, -0.5], text: alt('afërt 4', 'adjacent 4', 'Ankathete 4') },
    { kind: 'label', at: [5, 1.5], text: alt('përballë 3', 'opposite 3', 'Gegenkathete 3') },
    { kind: 'label', at: [1.6, 2], text: alt('hipotenuza 5', 'hypotenuse 5', 'Hypotenuse 5') },
  ],
};

export default {
  id: 'g9-right-triangle-trig',
  i18n: {
    al: { title: 'Trigonometria në trekëndëshin kënddrejtë', description: 'sin, cos, tg dhe cotg i këndit të ngushtë, lidhjet ndërmjet tyre, këndet komplementare, vlerat për 30°, 45°, 60° dhe zgjidhja e trekëndëshit.' },
    en: { title: 'Right-triangle trigonometry', description: 'sin, cos, tan and cot of an acute angle, the relations between them, complementary angles, the values for 30°, 45°, 60° and solving triangles.' },
    de: { title: 'Trigonometrie im rechtwinkligen Dreieck', description: 'sin, cos, tan und cot eines spitzen Winkels, ihre Beziehungen, Komplementwinkel, die Werte für 30°, 45°, 60° und das Berechnen von Dreiecken.' },
  },
  lessons: [
    // ───────── 1. The ratios
    {
      slug: 'g9-right-triangle-trig-ratios',
      visuals: [{
        ...TRIANGLE,
        caption: alt('sin α = 3/5, cos α = 4/5, tg α = 3/4, cotg α = 4/3.', 'sin α = 3/5, cos α = 4/5, tan α = 3/4, cot α = 4/3.', 'sin α = 3/5, cos α = 4/5, tan α = 3/4, cot α = 4/3.'),
        alt: alt('Trekëndësh kënddrejtë 3, 4, 5 me këndin α, katetën përballë 3, katetën e afërt 4 dhe hipotenuzën 5.', 'A 3, 4, 5 right triangle with angle α, opposite leg 3, adjacent leg 4 and hypotenuse 5.', 'Rechtwinkliges Dreieck 3, 4, 5 mit Winkel α, Gegenkathete 3, Ankathete 4 und Hypotenuse 5.'),
      }],
      answers: {
        examples: [[['3/5', '3/5', 1e-9, '3/5'], ['4/5', '4/5', 1e-9, '4/5'], ['3/4', '3/4', 1e-9, '3/4']], [['sqrt(5^2 + 12^2)', 13], ['5/13', '5/13', 1e-9, '5/13']]],
        practice: [[['8/6', '4/3', 1e-9, '4/3']], [['12/13', '12/13', 1e-9, '12/13']], [['5/2', '5/2', 1e-9, '5/2']]],
      },
      al: {
        title: 'sin, cos, tg dhe cotg i këndit të ngushtë',
        objectives: ['Të përkufizoni raportet trigonometrike në trekëndëshin kënddrejtë.', 'T\'i llogaritni ato nga brinjët e trekëndëshit.'],
        theory: 'Për këndin e ngushtë α në trekëndëshin kënddrejtë: kateta përballë α, kateta e afërt (ngjitur me α) dhe hipotenuza.\n\nsin α = përballë / hipotenuzë; cos α = e afërt / hipotenuzë; tg α = përballë / e afërt; cotg α = e afërt / përballë.\n\nTe trekëndëshi 3, 4, 5: sin α = 3/5, cos α = 4/5, tg α = 3/4. Raportet varen vetëm nga këndi, jo nga madhësia e trekëndëshit (trekëndëshat me të njëjtin kënd janë të ngjashëm).',
        keyPoints: ['sin = përballë/hipotenuzë', 'cos = e afërt/hipotenuzë', 'tg = përballë/e afërt;  cotg = e afërt/përballë'],
        examples: [
          { example: 'Kateta përballë α është 3, e afërta 4, hipotenuza 5. Gjeni sin α, cos α, tg α.', solution: 'sin α = 3/5, cos α = 4/5, tg α = 3/4.' },
          { example: 'Katetet janë 5 dhe 12; α është përballë katetës 5. Gjeni sin α.', solution: 'Hipotenuza √(25 + 144) = 13; sin α = 5/13.' },
        ],
        commonMistakes: [
          { mistake: 'sin α = e afërt / hipotenuzë', fix: 'Ky është cos α; sin përdor katetën përballë.' },
          { mistake: 'Brinjët përcaktohen pa parë këndin.', fix: '"Përballë" dhe "e afërt" varen nga këndi që shqyrtohet.' },
        ],
        practice: [
          { problem: 'Kateta përballë α është 8, e afërta 6. Gjeni tg α.', solution: '4/3', steps: ['tg α = 8/6.', '= 4/3.'] },
          { problem: 'Kateta e afërt 12, hipotenuza 13. Gjeni cos α.', solution: '12/13', steps: ['cos α = e afërt/hipotenuzë.', '12/13.'] },
          { problem: 'Kateta përballë α është 2, e afërta 5. Gjeni cotg α.', solution: '5/2', steps: ['cotg α = e afërt/përballë.', '5/2.'] },
        ],
      },
      en: {
        title: 'sin, cos, tan and cot of an acute angle',
        objectives: ['Define the trigonometric ratios in a right triangle.', 'Work them out from the sides of the triangle.'],
        theory: 'For an acute angle α in a right triangle: the leg opposite α, the leg adjacent to α (next to it) and the hypotenuse.\n\nsin α = opposite / hypotenuse; cos α = adjacent / hypotenuse; tan α = opposite / adjacent; cot α = adjacent / opposite.\n\nFor the 3, 4, 5 triangle: sin α = 3/5, cos α = 4/5, tan α = 3/4. The ratios depend only on the angle, not on the size of the triangle (triangles with the same angle are similar).',
        keyPoints: ['sin = opposite/hypotenuse', 'cos = adjacent/hypotenuse', 'tan = opposite/adjacent;  cot = adjacent/opposite'],
        examples: [
          { example: 'The leg opposite α is 3, the adjacent leg 4, the hypotenuse 5. Find sin α, cos α, tan α.', solution: 'sin α = 3/5, cos α = 4/5, tan α = 3/4.' },
          { example: 'The legs are 5 and 12; α is opposite the leg 5. Find sin α.', solution: 'Hypotenuse √(25 + 144) = 13; sin α = 5/13.' },
        ],
        commonMistakes: [
          { mistake: 'sin α = adjacent / hypotenuse', fix: 'That is cos α; sin uses the opposite leg.' },
          { mistake: 'Naming the sides without looking at the angle.', fix: '"Opposite" and "adjacent" depend on the angle being used.' },
        ],
        practice: [
          { problem: 'The leg opposite α is 8, the adjacent leg 6. Find tan α.', solution: '4/3', steps: ['tan α = 8/6.', '= 4/3.'] },
          { problem: 'Adjacent leg 12, hypotenuse 13. Find cos α.', solution: '12/13', steps: ['cos α = adjacent/hypotenuse.', '12/13.'] },
          { problem: 'The leg opposite α is 2, the adjacent leg 5. Find cot α.', solution: '5/2', steps: ['cot α = adjacent/opposite.', '5/2.'] },
        ],
      },
      de: {
        title: 'sin, cos, tan und cot eines spitzen Winkels',
        objectives: ['Die trigonometrischen Verhältnisse im rechtwinkligen Dreieck definieren.', 'Sie aus den Dreiecksseiten berechnen.'],
        theory: 'Für einen spitzen Winkel α im rechtwinkligen Dreieck: die Gegenkathete (gegenüber α), die Ankathete (an α anliegend) und die Hypotenuse.\n\nsin α = Gegenkathete / Hypotenuse; cos α = Ankathete / Hypotenuse; tan α = Gegenkathete / Ankathete; cot α = Ankathete / Gegenkathete.\n\nIm Dreieck 3, 4, 5: sin α = 3/5, cos α = 4/5, tan α = 3/4. Die Verhältnisse hängen nur vom Winkel ab, nicht von der Größe des Dreiecks (Dreiecke mit gleichem Winkel sind ähnlich).',
        keyPoints: ['sin = Gegenkathete/Hypotenuse', 'cos = Ankathete/Hypotenuse', 'tan = Gegenkathete/Ankathete;  cot = Ankathete/Gegenkathete'],
        examples: [
          { example: 'Gegenkathete 3, Ankathete 4, Hypotenuse 5. Bestimmen Sie sin α, cos α, tan α.', solution: 'sin α = 3/5, cos α = 4/5, tan α = 3/4.' },
          { example: 'Die Katheten sind 5 und 12; α liegt der Kathete 5 gegenüber. Bestimmen Sie sin α.', solution: 'Hypotenuse √(25 + 144) = 13; sin α = 5/13.' },
        ],
        commonMistakes: [
          { mistake: 'sin α = Ankathete / Hypotenuse', fix: 'Das ist cos α; sin verwendet die Gegenkathete.' },
          { mistake: 'Die Seiten benennen, ohne auf den Winkel zu achten.', fix: '„Gegen“ und „An“ hängen vom betrachteten Winkel ab.' },
        ],
        practice: [
          { problem: 'Gegenkathete 8, Ankathete 6. Bestimmen Sie tan α.', solution: '4/3', steps: ['tan α = 8/6.', '= 4/3.'] },
          { problem: 'Ankathete 12, Hypotenuse 13. Bestimmen Sie cos α.', solution: '12/13', steps: ['cos α = Ankathete/Hypotenuse.', '12/13.'] },
          { problem: 'Gegenkathete 2, Ankathete 5. Bestimmen Sie cot α.', solution: '5/2', steps: ['cot α = Ankathete/Gegenkathete.', '5/2.'] },
        ],
      },
    },

    // ───────── 2. Relations between them
    {
      slug: 'g9-right-triangle-trig-relations',
      noVisual: 'The identities are derived from the 3, 4, 5 triangle shown in the previous lesson and worked through in the examples.',
      answers: {
        examples: [[['sqrt(1 - (3/5)^2)', '4/5', 1e-9, '4/5']], [['(3/5) / (4/5)', '3/4', 1e-9, '3/4']]],
        practice: [[['sqrt(1 - (5/13)^2)', '12/13', 1e-9, '12/13']], [['1 / 2', '1/2', 1e-9, '1/2']], [['sin(40 deg)^2 + cos(40 deg)^2', 1]]],
      },
      al: {
        title: 'Lidhjet ndërmjet raporteve',
        objectives: ['Të përdorni sin²α + cos²α = 1.', 'Të gjeni raportet e tjera kur njihet njëri prej tyre.'],
        theory: 'Nga teorema e Pitagorës (a² + b² = c², pjesëtuar me c²) del identiteti themelor: sin²α + cos²α = 1.\n\nGjithashtu tg α = sin α / cos α dhe cotg α = cos α / sin α = 1 / tg α, pra tg α · cotg α = 1.\n\nKur njohim një raport, gjejmë të tjerët: sin α = 3/5 → cos α = √(1 − 9/25) = 4/5 (për kënd të ngushtë cos > 0), tg α = 3/4.',
        keyPoints: ['sin²α + cos²α = 1', 'tg α = sin α / cos α', 'cotg α = 1 / tg α'],
        examples: [
          { example: 'sin α = 3/5 dhe α është i ngushtë. Gjeni cos α.', solution: 'cos α = √(1 − 9/25) = √(16/25) = 4/5.' },
          { example: 'Me sin α = 3/5 dhe cos α = 4/5, gjeni tg α.', solution: 'tg α = (3/5) : (4/5) = 3/4.' },
        ],
        commonMistakes: [
          { mistake: 'cos α = 1 − sin α', fix: 'Identiteti është me katrorë: cos²α = 1 − sin²α.' },
        ],
        practice: [
          { problem: 'cos α = 5/13 (α i ngushtë). Gjeni sin α.', solution: '12/13', steps: ['sin α = √(1 − 25/169).', '= √(144/169) = 12/13.'] },
          { problem: 'tg α = 2. Gjeni cotg α.', solution: '1/2', steps: ['cotg α = 1/tg α.', '= 1/2.'] },
          { problem: 'Llogaritni sin²40° + cos²40°.', solution: '1', steps: ['Identiteti vlen për çdo kënd.', '= 1.'] },
        ],
      },
      en: {
        title: 'Relations between the ratios',
        objectives: ['Use sin²α + cos²α = 1.', 'Find the other ratios when one of them is known.'],
        theory: 'Pythagoras (a² + b² = c², divided by c²) gives the basic identity: sin²α + cos²α = 1.\n\nAlso tan α = sin α / cos α and cot α = cos α / sin α = 1 / tan α, so tan α · cot α = 1.\n\nWhen one ratio is known, the others follow: sin α = 3/5 → cos α = √(1 − 9/25) = 4/5 (for an acute angle cos > 0), tan α = 3/4.',
        keyPoints: ['sin²α + cos²α = 1', 'tan α = sin α / cos α', 'cot α = 1 / tan α'],
        examples: [
          { example: 'sin α = 3/5 and α is acute. Find cos α.', solution: 'cos α = √(1 − 9/25) = √(16/25) = 4/5.' },
          { example: 'With sin α = 3/5 and cos α = 4/5, find tan α.', solution: 'tan α = (3/5) ÷ (4/5) = 3/4.' },
        ],
        commonMistakes: [
          { mistake: 'cos α = 1 − sin α', fix: 'The identity uses squares: cos²α = 1 − sin²α.' },
        ],
        practice: [
          { problem: 'cos α = 5/13 (α acute). Find sin α.', solution: '12/13', steps: ['sin α = √(1 − 25/169).', '= √(144/169) = 12/13.'] },
          { problem: 'tan α = 2. Find cot α.', solution: '1/2', steps: ['cot α = 1/tan α.', '= 1/2.'] },
          { problem: 'Work out sin²40° + cos²40°.', solution: '1', steps: ['The identity holds for every angle.', '= 1.'] },
        ],
      },
      de: {
        title: 'Beziehungen zwischen den Verhältnissen',
        objectives: ['sin²α + cos²α = 1 anwenden.', 'Die übrigen Verhältnisse bestimmen, wenn eines bekannt ist.'],
        theory: 'Aus dem Satz des Pythagoras (a² + b² = c², geteilt durch c²) folgt der trigonometrische Pythagoras: sin²α + cos²α = 1.\n\nAußerdem gilt tan α = sin α / cos α und cot α = cos α / sin α = 1 / tan α, also tan α · cot α = 1.\n\nIst ein Verhältnis bekannt, folgen die anderen: sin α = 3/5 → cos α = √(1 − 9/25) = 4/5 (bei spitzem Winkel ist cos > 0), tan α = 3/4.',
        keyPoints: ['sin²α + cos²α = 1', 'tan α = sin α / cos α', 'cot α = 1 / tan α'],
        examples: [
          { example: 'sin α = 3/5, α spitz. Bestimmen Sie cos α.', solution: 'cos α = √(1 − 9/25) = √(16/25) = 4/5.' },
          { example: 'Mit sin α = 3/5 und cos α = 4/5: Bestimmen Sie tan α.', solution: 'tan α = (3/5) : (4/5) = 3/4.' },
        ],
        commonMistakes: [
          { mistake: 'cos α = 1 − sin α', fix: 'Die Beziehung gilt für Quadrate: cos²α = 1 − sin²α.' },
        ],
        practice: [
          { problem: 'cos α = 5/13 (α spitz). Bestimmen Sie sin α.', solution: '12/13', steps: ['sin α = √(1 − 25/169).', '= √(144/169) = 12/13.'] },
          { problem: 'tan α = 2. Bestimmen Sie cot α.', solution: '1/2', steps: ['cot α = 1/tan α.', '= 1/2.'] },
          { problem: 'Berechnen Sie sin²40° + cos²40°.', solution: '1', steps: ['Die Beziehung gilt für jeden Winkel.', '= 1.'] },
        ],
      },
    },

    // ───────── 3. Complementary angles
    {
      slug: 'g9-right-triangle-trig-complementary',
      practiceVisuals: {
        0: { type: 'unitCircle', angle: 70, marks: [20], alt: { al: 'Rrethi njësi me një kënd që ndryshon me rrëshqitës; tregohen sin, cos dhe tg.', en: 'The unit circle with an angle on a slider; sin, cos and tan are shown.', de: 'Der Einheitskreis mit einem Winkel als Schieberegler; sin, cos und tan werden angezeigt.' } },
      },
      visuals: [{
        ...TRIANGLE,
        shapes: [
          ...TRIANGLE.shapes.filter((s) => s.kind !== 'label'),
          { kind: 'angle', vertex: [4, 3], from: [0, 0], to: [4, 0], label: '90° − α', color: 'success', r: 34 },
        ],
        caption: alt('Kateta përballë α është e afërta e këndit 90° − α: sin α = cos(90° − α).', 'The leg opposite α is adjacent to the angle 90° − α: sin α = cos(90° − α).', 'Die Gegenkathete von α ist die Ankathete von 90° − α: sin α = cos(90° − α).'),
        alt: alt('Trekëndësh kënddrejtë me këndet α dhe 90° − α.', 'A right triangle with the angles α and 90° − α.', 'Ein rechtwinkliges Dreieck mit den Winkeln α und 90° − α.'),
      }],
      answers: {
        examples: [[['sin(30 deg)', 0.5]], [['40 + 50', 90]]],
        practice: ['text', [['tan(25 deg) * tan(65 deg)', 1]], [['0.6', 0.6]]],
      },
      al: {
        title: 'Këndet komplementare',
        objectives: ['Të përdorni lidhjet ndërmjet raporteve të këndeve plotësuese.', 'Të thjeshtoni shprehje me kënde komplementare.'],
        theory: 'Në trekëndëshin kënddrejtë dy këndet e ngushta janë plotësuese: α + β = 90°. Kateta përballë α është e afërt për β, prandaj:\n\nsin α = cos(90° − α), cos α = sin(90° − α), tg α = cotg(90° − α).\n\nShembuj: sin 30° = cos 60° = 1/2; sin 40° = cos 50°; tg 25° · tg 65° = tg 25° · cotg 25° = 1.',
        keyPoints: ['sin α = cos(90° − α)', 'cos α = sin(90° − α)', 'tg α = cotg(90° − α)'],
        examples: [
          { example: 'Krahasoni sin 30° dhe cos 60°.', solution: 'Janë të barabartë: 30° + 60° = 90°; të dy janë 1/2 = 0,5.' },
          { example: 'Tregoni se sin 40° = cos 50°.', solution: '40° + 50° = 90°, pra sin 40° = cos(90° − 40°) = cos 50°.' },
        ],
        commonMistakes: [
          { mistake: 'sin 40° = sin 50°', fix: 'Kalimi te këndi plotësues ndërron sin me cos.' },
        ],
        practice: [
          { problem: 'Shkruani cos 70° si sinus të një këndi tjetër.', solution: 'sin 20°', steps: ['90° − 70° = 20°.', 'cos 70° = sin 20°.'] },
          { problem: 'Llogaritni tg 25° · tg 65°.', solution: '1', steps: ['tg 65° = cotg 25°.', 'tg 25° · cotg 25° = 1.'] },
          { problem: 'sin α = 0,6. Sa është cos(90° − α)?', solution: '0,6', steps: ['cos(90° − α) = sin α.', '= 0,6.'] },
        ],
      },
      en: {
        title: 'Complementary angles',
        objectives: ['Use the relations between the ratios of complementary angles.', 'Simplify expressions with complementary angles.'],
        theory: 'In a right triangle the two acute angles are complementary: α + β = 90°. The leg opposite α is adjacent to β, so:\n\nsin α = cos(90° − α), cos α = sin(90° − α), tan α = cot(90° − α).\n\nExamples: sin 30° = cos 60° = 1/2; sin 40° = cos 50°; tan 25° · tan 65° = tan 25° · cot 25° = 1.',
        keyPoints: ['sin α = cos(90° − α)', 'cos α = sin(90° − α)', 'tan α = cot(90° − α)'],
        examples: [
          { example: 'Compare sin 30° and cos 60°.', solution: 'They are equal: 30° + 60° = 90°; both are 1/2 = 0.5.' },
          { example: 'Show that sin 40° = cos 50°.', solution: '40° + 50° = 90°, so sin 40° = cos(90° − 40°) = cos 50°.' },
        ],
        commonMistakes: [
          { mistake: 'sin 40° = sin 50°', fix: 'Going to the complementary angle swaps sin and cos.' },
        ],
        practice: [
          { problem: 'Write cos 70° as the sine of another angle.', solution: 'sin 20°', steps: ['90° − 70° = 20°.', 'cos 70° = sin 20°.'] },
          { problem: 'Work out tan 25° · tan 65°.', solution: '1', steps: ['tan 65° = cot 25°.', 'tan 25° · cot 25° = 1.'] },
          { problem: 'sin α = 0.6. What is cos(90° − α)?', solution: '0.6', steps: ['cos(90° − α) = sin α.', '= 0.6.'] },
        ],
      },
      de: {
        title: 'Komplementwinkel',
        objectives: ['Die Beziehungen zwischen den Verhältnissen von Komplementwinkeln nutzen.', 'Terme mit Komplementwinkeln vereinfachen.'],
        theory: 'Im rechtwinkligen Dreieck ergänzen sich die beiden spitzen Winkel zu 90°: α + β = 90°. Die Gegenkathete von α ist die Ankathete von β, daher:\n\nsin α = cos(90° − α), cos α = sin(90° − α), tan α = cot(90° − α).\n\nBeispiele: sin 30° = cos 60° = 1/2; sin 40° = cos 50°; tan 25° · tan 65° = tan 25° · cot 25° = 1.',
        keyPoints: ['sin α = cos(90° − α)', 'cos α = sin(90° − α)', 'tan α = cot(90° − α)'],
        examples: [
          { example: 'Vergleichen Sie sin 30° und cos 60°.', solution: 'Sie sind gleich: 30° + 60° = 90°; beide sind 1/2 = 0,5.' },
          { example: 'Zeigen Sie, dass sin 40° = cos 50°.', solution: '40° + 50° = 90°, also sin 40° = cos(90° − 40°) = cos 50°.' },
        ],
        commonMistakes: [
          { mistake: 'sin 40° = sin 50°', fix: 'Beim Komplementwinkel tauschen sin und cos.' },
        ],
        practice: [
          { problem: 'Schreiben Sie cos 70° als Sinus eines anderen Winkels.', solution: 'sin 20°', steps: ['90° − 70° = 20°.', 'cos 70° = sin 20°.'] },
          { problem: 'Berechnen Sie tan 25° · tan 65°.', solution: '1', steps: ['tan 65° = cot 25°.', 'tan 25° · cot 25° = 1.'] },
          { problem: 'sin α = 0,6. Wie groß ist cos(90° − α)?', solution: '0,6', steps: ['cos(90° − α) = sin α.', '= 0,6.'] },
        ],
      },
    },

    // ───────── 4. Values for 30°, 45°, 60°
    {
      slug: 'g9-right-triangle-trig-special-values',
      practiceVisuals: {
        0: { type: 'unitCircle', angle: 60, marks: [30], alt: { al: 'Rrethi njësi me një kënd që ndryshon me rrëshqitës; tregohen sin, cos dhe tg.', en: 'The unit circle with an angle on a slider; sin, cos and tan are shown.', de: 'Der Einheitskreis mit einem Winkel als Schieberegler; sin, cos und tan werden angezeigt.' } },
      },
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'α', cells: ['30°', '45°', '60°'] },
          { head: 'sin α', cells: ['1/2', '√2/2', '√3/2'] },
          { head: 'cos α', cells: ['√3/2', '√2/2', '1/2'] },
          { head: alt('tg α', 'tan α', 'tan α'), cells: ['√3/3', '1', '√3'] },
        ],
        caption: alt('Vlerat dalin nga gjysma e trekëndëshit barabrinjës (30°, 60°) dhe gjysma e katrorit (45°).', 'The values come from half an equilateral triangle (30°, 60°) and half a square (45°).', 'Die Werte stammen vom halben gleichseitigen Dreieck (30°, 60°) und vom halben Quadrat (45°).'),
        alt: alt('Tabela e sin, cos dhe tg për 30°, 45° dhe 60°.', 'Table of sin, cos and tan for 30°, 45° and 60°.', 'Tabelle von sin, cos und tan für 30°, 45° und 60°.'),
      }],
      answers: {
        examples: [[['sin(30 deg) + cos(60 deg)', 1]], [['2 * sin(45 deg) * cos(45 deg)', 1]]],
        practice: [[['sin(60 deg) * cos(30 deg)', 0.75]], [['tan(60 deg) * tan(30 deg)', 1]], [['cos(45 deg)^2', '1/2', 1e-9, '1/2']]],
      },
      al: {
        title: 'Vlerat për 30°, 45° dhe 60°',
        objectives: ['Të mbani mend vlerat e sin, cos, tg për 30°, 45°, 60°.', 'Të llogaritni shprehje me këto vlera pa makinë llogaritëse.'],
        theory: 'Te trekëndëshi 30°–60°–90° me hipotenuzë 2, katetet janë 1 dhe √3: sin 30° = 1/2, cos 30° = √3/2, tg 30° = 1/√3 = √3/3; sin 60° = √3/2, cos 60° = 1/2, tg 60° = √3.\n\nTe trekëndëshi 45°–45°–90° me katete 1, hipotenuza është √2: sin 45° = cos 45° = 1/√2 = √2/2, tg 45° = 1.\n\nShembull: sin 30° + cos 60° = 1/2 + 1/2 = 1.',
        keyPoints: ['sin 30° = cos 60° = 1/2', 'sin 45° = cos 45° = √2/2;  tg 45° = 1', 'sin 60° = cos 30° = √3/2;  tg 60° = √3'],
        examples: [
          { example: 'Llogaritni sin 30° + cos 60°.', solution: '1/2 + 1/2 = 1.' },
          { example: 'Llogaritni 2 sin 45° · cos 45°.', solution: '2 · √2/2 · √2/2 = 2 · 2/4 = 1.' },
        ],
        commonMistakes: [
          { mistake: 'sin 60° = 1/2', fix: '1/2 është sin 30° (ose cos 60°); sin 60° = √3/2.' },
        ],
        practice: [
          { problem: 'Llogaritni sin 60° · cos 30°.', solution: '3/4', steps: ['√3/2 · √3/2.', '= 3/4 = 0,75.'] },
          { problem: 'Llogaritni tg 60° · tg 30°.', solution: '1', steps: ['√3 · √3/3.', '= 3/3 = 1.'] },
          { problem: 'Llogaritni cos²45°.', solution: '1/2', steps: ['(√2/2)² = 2/4.', '= 1/2.'] },
        ],
      },
      en: {
        title: 'Values for 30°, 45° and 60°',
        objectives: ['Remember the values of sin, cos, tan for 30°, 45°, 60°.', 'Evaluate expressions with these values without a calculator.'],
        theory: 'In the 30°–60°–90° triangle with hypotenuse 2 the legs are 1 and √3: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 = √3/3; sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.\n\nIn the 45°–45°–90° triangle with legs 1 the hypotenuse is √2: sin 45° = cos 45° = 1/√2 = √2/2, tan 45° = 1.\n\nExample: sin 30° + cos 60° = 1/2 + 1/2 = 1.',
        keyPoints: ['sin 30° = cos 60° = 1/2', 'sin 45° = cos 45° = √2/2;  tan 45° = 1', 'sin 60° = cos 30° = √3/2;  tan 60° = √3'],
        examples: [
          { example: 'Work out sin 30° + cos 60°.', solution: '1/2 + 1/2 = 1.' },
          { example: 'Work out 2 sin 45° · cos 45°.', solution: '2 · √2/2 · √2/2 = 2 · 2/4 = 1.' },
        ],
        commonMistakes: [
          { mistake: 'sin 60° = 1/2', fix: '1/2 is sin 30° (or cos 60°); sin 60° = √3/2.' },
        ],
        practice: [
          { problem: 'Work out sin 60° · cos 30°.', solution: '3/4', steps: ['√3/2 · √3/2.', '= 3/4 = 0.75.'] },
          { problem: 'Work out tan 60° · tan 30°.', solution: '1', steps: ['√3 · √3/3.', '= 3/3 = 1.'] },
          { problem: 'Work out cos²45°.', solution: '1/2', steps: ['(√2/2)² = 2/4.', '= 1/2.'] },
        ],
      },
      de: {
        title: 'Die Werte für 30°, 45° und 60°',
        objectives: ['Die Werte von sin, cos, tan für 30°, 45°, 60° kennen.', 'Terme mit diesen Werten ohne Taschenrechner berechnen.'],
        theory: 'Im 30°–60°–90°-Dreieck mit Hypotenuse 2 sind die Katheten 1 und √3: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 = √3/3; sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.\n\nIm 45°–45°–90°-Dreieck mit Katheten 1 ist die Hypotenuse √2: sin 45° = cos 45° = 1/√2 = √2/2, tan 45° = 1.\n\nBeispiel: sin 30° + cos 60° = 1/2 + 1/2 = 1.',
        keyPoints: ['sin 30° = cos 60° = 1/2', 'sin 45° = cos 45° = √2/2;  tan 45° = 1', 'sin 60° = cos 30° = √3/2;  tan 60° = √3'],
        examples: [
          { example: 'Berechnen Sie sin 30° + cos 60°.', solution: '1/2 + 1/2 = 1.' },
          { example: 'Berechnen Sie 2 sin 45° · cos 45°.', solution: '2 · √2/2 · √2/2 = 2 · 2/4 = 1.' },
        ],
        commonMistakes: [
          { mistake: 'sin 60° = 1/2', fix: '1/2 ist sin 30° (oder cos 60°); sin 60° = √3/2.' },
        ],
        practice: [
          { problem: 'Berechnen Sie sin 60° · cos 30°.', solution: '3/4', steps: ['√3/2 · √3/2.', '= 3/4 = 0,75.'] },
          { problem: 'Berechnen Sie tan 60° · tan 30°.', solution: '1', steps: ['√3 · √3/3.', '= 3/3 = 1.'] },
          { problem: 'Berechnen Sie cos²45°.', solution: '1/2', steps: ['(√2/2)² = 2/4.', '= 1/2.'] },
        ],
      },
    },

    // ───────── 5. Solving right triangles
    {
      slug: 'g9-right-triangle-trig-solving',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1.6, xMax: 4.4, yMin: -0.9, yMax: 5.8 }, height: 220,
        shapes: [
          { kind: 'segment', from: [-0.5, 0], to: [4, 0], color: 'muted' },
          { kind: 'segment', from: [0, 0], to: [0, 5.6], color: 'muted' },
          { kind: 'segment', from: [3, 0], to: [0, 5.196], color: 'primary', label: '6 m' },
          { kind: 'angle', vertex: [3, 0], from: [0, 0], to: [0, 5.196], label: '60°', color: 'secondary', r: 26 },
          { kind: 'angle', vertex: [0, 0], from: [3, 0], to: [0, 5.196], right: true },
          { kind: 'label', at: [-0.9, 2.6], text: 'h = ?', color: 'secondary' },
        ],
        caption: alt('Shkalla 6 m bën kënd 60° me tokën: h = 6 · sin 60° = 3√3 ≈ 5,2 m.', 'A 6 m ladder makes 60° with the ground: h = 6 · sin 60° = 3√3 ≈ 5.2 m.', 'Eine 6 m lange Leiter bildet mit dem Boden 60°: h = 6 · sin 60° = 3√3 ≈ 5,2 m.'),
        alt: alt('Shkallë 6 m e mbështetur në mur me kënd 60° me tokën; lartësia në mur e panjohur.', 'A 6 m ladder against a wall at 60° to the ground; the height on the wall unknown.', 'Eine 6 m lange Leiter an der Wand, 60° zum Boden; die Höhe an der Wand gesucht.'),
      }],
      answers: {
        examples: [[['6 * sin(60 deg)', 5.2, 0.05, '5.2']], [['atan(3/4) * 180 / pi', 36.9, 0.05, '36.9']]],
        practice: [[['10 * sin(30 deg)', 5]], [['8 * tan(45 deg)', 8]], [['20 * tan(30 deg)', 11.55, 0.005, '11.55']]],
      },
      al: {
        title: 'Zgjidhja e trekëndëshit kënddrejtë',
        objectives: ['Të gjeni brinjë të panjohura me sin, cos, tg.', 'Të gjeni një kënd nga dy brinjë.'],
        theory: 'Të zgjidhësh trekëndëshin kënddrejtë do të thotë të gjesh të gjitha brinjët dhe këndet. Zgjidhni raportin që lidh atë që dini me atë që kërkoni: përballë = hipotenuzë · sin α; e afërt = hipotenuzë · cos α; përballë = e afërt · tg α.\n\nShkalla 6 m me kënd 60° me tokën: lartësia është kateta përballë 60°, h = 6 · sin 60° = 3√3 ≈ 5,2 m.\n\nKëndi nga dy brinjë: nga tg α = 3/4 gjejmë α ≈ 36,9° me tastin tg⁻¹ (arctg). Këndi tjetër: 90° − α.',
        keyPoints: ['përballë = c · sin α;  e afërt = c · cos α', 'përballë = e afërt · tg α', 'Këndi: tg⁻¹, sin⁻¹, cos⁻¹ në makinë llogaritëse'],
        examples: [
          { example: 'Shkalla 6 m bën kënd 60° me tokën. Sa lart arrin?', solution: 'h = 6 · sin 60° = 6 · √3/2 = 3√3 ≈ 5,2 m.' },
          { example: 'Katetet janë 3 dhe 4. Gjeni këndin përballë katetës 3.', solution: 'tg α = 3/4 → α ≈ 36,9°.' },
        ],
        commonMistakes: [
          { mistake: 'h = 6 · cos 60° = 3 m', fix: 'Lartësia është përballë këndit 60°, prandaj përdoret sin.' },
          { mistake: 'Makina llogaritëse në radianë.', fix: 'Kontrolloni që të jetë në modalitetin DEG (gradë).' },
        ],
        practice: [
          { problem: 'Hipotenuza 10 cm, këndi 30°. Gjeni katetën përballë.', solution: '5 cm', steps: ['10 · sin 30°.', '= 5 cm.'] },
          { problem: 'Kateta e afërt 8 cm, këndi 45°. Gjeni katetën përballë.', solution: '8 cm', steps: ['8 · tg 45°.', '= 8 cm.'] },
          { problem: 'Hija e një kulle është 20 m kur dielli është 30° mbi horizont. Sa e lartë është kulla?', solution: '≈ 11,55 m', steps: ['h = 20 · tg 30°.', '≈ 11,55 m.'] },
        ],
      },
      en: {
        title: 'Solving right triangles',
        objectives: ['Find unknown sides with sin, cos, tan.', 'Find an angle from two sides.'],
        theory: 'Solving a right triangle means finding all its sides and angles. Choose the ratio that links what you know to what you need: opposite = hypotenuse · sin α; adjacent = hypotenuse · cos α; opposite = adjacent · tan α.\n\nA 6 m ladder at 60° to the ground: the height is the leg opposite 60°, h = 6 · sin 60° = 3√3 ≈ 5.2 m.\n\nAn angle from two sides: from tan α = 3/4 we get α ≈ 36.9° with the tan⁻¹ key. The other angle: 90° − α.',
        keyPoints: ['opposite = c · sin α;  adjacent = c · cos α', 'opposite = adjacent · tan α', 'Angle: tan⁻¹, sin⁻¹, cos⁻¹ on the calculator'],
        examples: [
          { example: 'A 6 m ladder makes 60° with the ground. How high does it reach?', solution: 'h = 6 · sin 60° = 6 · √3/2 = 3√3 ≈ 5.2 m.' },
          { example: 'The legs are 3 and 4. Find the angle opposite the leg 3.', solution: 'tan α = 3/4 → α ≈ 36.9°.' },
        ],
        commonMistakes: [
          { mistake: 'h = 6 · cos 60° = 3 m', fix: 'The height is opposite the 60° angle, so use sin.' },
          { mistake: 'The calculator is set to radians.', fix: 'Check that it is in DEG (degrees) mode.' },
        ],
        practice: [
          { problem: 'Hypotenuse 10 cm, angle 30°. Find the opposite leg.', solution: '5 cm', steps: ['10 · sin 30°.', '= 5 cm.'] },
          { problem: 'Adjacent leg 8 cm, angle 45°. Find the opposite leg.', solution: '8 cm', steps: ['8 · tan 45°.', '= 8 cm.'] },
          { problem: 'A tower\'s shadow is 20 m when the sun is 30° above the horizon. How tall is the tower?', solution: '≈ 11.55 m', steps: ['h = 20 · tan 30°.', '≈ 11.55 m.'] },
        ],
      },
      de: {
        title: 'Rechtwinklige Dreiecke berechnen',
        objectives: ['Unbekannte Seiten mit sin, cos, tan bestimmen.', 'Einen Winkel aus zwei Seiten bestimmen.'],
        theory: 'Ein rechtwinkliges Dreieck berechnen heißt, alle Seiten und Winkel zu bestimmen. Man wählt das Verhältnis, das Bekanntes mit Gesuchtem verbindet: Gegenkathete = Hypotenuse · sin α; Ankathete = Hypotenuse · cos α; Gegenkathete = Ankathete · tan α.\n\nEine 6 m lange Leiter unter 60° zum Boden: Die Höhe ist die Gegenkathete von 60°, h = 6 · sin 60° = 3√3 ≈ 5,2 m.\n\nEin Winkel aus zwei Seiten: Aus tan α = 3/4 folgt α ≈ 36,9° mit der Taste tan⁻¹. Der andere Winkel: 90° − α.',
        keyPoints: ['Gegenkathete = c · sin α;  Ankathete = c · cos α', 'Gegenkathete = Ankathete · tan α', 'Winkel: tan⁻¹, sin⁻¹, cos⁻¹ am Taschenrechner'],
        examples: [
          { example: 'Eine 6 m lange Leiter bildet mit dem Boden 60°. Wie hoch reicht sie?', solution: 'h = 6 · sin 60° = 6 · √3/2 = 3√3 ≈ 5,2 m.' },
          { example: 'Die Katheten sind 3 und 4. Bestimmen Sie den Winkel gegenüber der Kathete 3.', solution: 'tan α = 3/4 → α ≈ 36,9°.' },
        ],
        commonMistakes: [
          { mistake: 'h = 6 · cos 60° = 3 m', fix: 'Die Höhe liegt dem 60°-Winkel gegenüber, also sin verwenden.' },
          { mistake: 'Der Taschenrechner steht auf Bogenmaß.', fix: 'Prüfen, dass er im Modus DEG (Grad) ist.' },
        ],
        practice: [
          { problem: 'Hypotenuse 10 cm, Winkel 30°. Bestimmen Sie die Gegenkathete.', solution: '5 cm', steps: ['10 · sin 30°.', '= 5 cm.'] },
          { problem: 'Ankathete 8 cm, Winkel 45°. Bestimmen Sie die Gegenkathete.', solution: '8 cm', steps: ['8 · tan 45°.', '= 8 cm.'] },
          { problem: 'Der Schatten eines Turms ist 20 m lang, wenn die Sonne 30° über dem Horizont steht. Wie hoch ist der Turm?', solution: '≈ 11,55 m', steps: ['h = 20 · tan 30°.', '≈ 11,55 m.'] },
        ],
      },
    },
  ],
};
