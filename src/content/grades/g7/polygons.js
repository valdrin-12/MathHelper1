// Grade 7 · Theme 5: Polygons (November–December)
const alt = (al, en, de) => ({ al, en, de });
const reg = (n, r = 3, start = 90) => Array.from({ length: n }, (_, i) => {
  const a = ((start + (360 / n) * i) * Math.PI) / 180;
  return [Number((r * Math.cos(a)).toFixed(3)), Number((r * Math.sin(a)).toFixed(3))];
});
const P5 = reg(5);
const P6 = reg(6, 3, 0);

export default {
  id: 'g7-polygons',
  i18n: {
    al: { title: 'Shumëkëndëshat', description: 'Shuma e këndeve, shumëkëndëshat e rregullt, diagonalet, sipërfaqet dhe rrethi.' },
    en: { title: 'Polygons', description: 'Angle sums, regular polygons, diagonals, areas and the circle.' },
    de: { title: 'Vielecke', description: 'Winkelsumme, regelmäßige Vielecke, Diagonalen, Flächeninhalte und der Kreis.' },
  },
  lessons: [
    // ───────── 1. Angle sum
    {
      slug: 'g7-polygons-angle-sum',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3.4, xMax: 3.4, yMin: -3, yMax: 3.4 }, height: 200,
        shapes: [
          { kind: 'polygon', points: P5, fill: true, color: 'primary' },
          { kind: 'segment', from: P5[0], to: P5[2], color: 'secondary', dashed: true },
          { kind: 'segment', from: P5[0], to: P5[3], color: 'secondary', dashed: true },
          { kind: 'label', at: [-1.5, 0.3], text: '1' }, { kind: 'label', at: [0, -1.3], text: '2' }, { kind: 'label', at: [1.5, 0.3], text: '3' },
        ],
        caption: alt('Pesëkëndëshi ndahet në 3 trekëndësha: shuma e këndeve 3 · 180° = 540°.', 'A pentagon splits into 3 triangles: angle sum 3 · 180° = 540°.', 'Ein Fünfeck zerfällt in 3 Dreiecke: Winkelsumme 3 · 180° = 540°.'),
        alt: alt('Pesëkëndësh i ndarë nga një kulm në tre trekëndësha.', 'A pentagon divided from one vertex into three triangles.', 'Ein Fünfeck, von einer Ecke aus in drei Dreiecke geteilt.'),
      }],
      answers: {
        examples: [[['(6 - 2) * 180', 720]], [['(5 - 2) * 180 - (100 + 110 + 120 + 90)', 120]]],
        practice: [[['(8 - 2) * 180', 1080]], [['1260 / 180 + 2', 9]], [['360 - (80 + 95 + 110)', 75]]],
      },
      al: {
        title: 'Shuma e këndeve të brendshme',
        objectives: ['Të llogaritni shumën e këndeve të brendshme të një shumëkëndëshi me n brinjë.', 'Të gjeni një kënd që mungon.'],
        theory: 'Nga një kulm i shumëkëndëshit mund të vizatojmë diagonale që e ndajnë në trekëndësha. Një shumëkëndësh me n brinjë ndahet në n − 2 trekëndësha.\n\nMeqë çdo trekëndësh ka shumën e këndeve 180°, shuma e këndeve të brendshme të shumëkëndëshit është S = (n − 2) · 180°. Katërkëndëshi: 2 · 180° = 360°; pesëkëndëshi: 540°; gjashtëkëndëshi: 720°.\n\nNëse dimë të gjitha këndet përveç njërit, e gjejmë atë duke zbritur shumën e të njohurave nga S.',
        keyPoints: ['S = (n − 2) · 180°', 'n brinjë → n − 2 trekëndësha', 'Këndi që mungon = S − shuma e të tjerëve'],
        examples: [
          { example: 'Sa është shuma e këndeve të brendshme të gjashtëkëndëshit?', solution: '(6 − 2) · 180° = 720°.' },
          { example: 'Katër kënde të një pesëkëndëshi janë 100°, 110°, 120° dhe 90°. Sa është i pesti?', solution: 'S = 540°. 540° − 420° = 120°.' },
        ],
        commonMistakes: [
          { mistake: 'S = n · 180°', fix: 'Shumëkëndëshi ndahet në n − 2 trekëndësha, jo në n.' },
        ],
        practice: [
          { problem: 'Sa është shuma e këndeve të tetëkëndëshit?', solution: '1080°', steps: ['n = 8.', '(8 − 2) · 180° = 1080°.'] },
          { problem: 'Shuma e këndeve të një shumëkëndëshi është 1260°. Sa brinjë ka?', solution: '9', steps: ['(n − 2) · 180 = 1260.', 'n − 2 = 7, n = 9.'] },
          { problem: 'Tri kënde të një katërkëndëshi janë 80°, 95° dhe 110°. Sa është i katërti?', solution: '75°', steps: ['S = 360°.', '360° − 285° = 75°.'] },
        ],
      },
      en: {
        title: 'Interior angle sum',
        objectives: ['Work out the sum of the interior angles of a polygon with n sides.', 'Find a missing angle.'],
        theory: 'From one vertex of a polygon we can draw diagonals that split it into triangles. A polygon with n sides splits into n − 2 triangles.\n\nSince each triangle has an angle sum of 180°, the interior angle sum of the polygon is S = (n − 2) · 180°. Quadrilateral: 2 · 180° = 360°; pentagon: 540°; hexagon: 720°.\n\nIf we know all the angles except one, we find it by subtracting the sum of the known angles from S.',
        keyPoints: ['S = (n − 2) · 180°', 'n sides → n − 2 triangles', 'Missing angle = S − sum of the others'],
        examples: [
          { example: 'What is the interior angle sum of a hexagon?', solution: '(6 − 2) · 180° = 720°.' },
          { example: 'Four angles of a pentagon are 100°, 110°, 120° and 90°. What is the fifth?', solution: 'S = 540°. 540° − 420° = 120°.' },
        ],
        commonMistakes: [
          { mistake: 'S = n · 180°', fix: 'The polygon splits into n − 2 triangles, not n.' },
        ],
        practice: [
          { problem: 'What is the angle sum of an octagon?', solution: '1080°', steps: ['n = 8.', '(8 − 2) · 180° = 1080°.'] },
          { problem: 'The angle sum of a polygon is 1260°. How many sides does it have?', solution: '9', steps: ['(n − 2) · 180 = 1260.', 'n − 2 = 7, n = 9.'] },
          { problem: 'Three angles of a quadrilateral are 80°, 95° and 110°. What is the fourth?', solution: '75°', steps: ['S = 360°.', '360° − 285° = 75°.'] },
        ],
      },
      de: {
        title: 'Innenwinkelsumme',
        objectives: ['Die Innenwinkelsumme eines n-Ecks berechnen.', 'Einen fehlenden Winkel bestimmen.'],
        theory: 'Von einer Ecke eines Vielecks aus kann man Diagonalen zeichnen, die es in Dreiecke zerlegen. Ein n-Eck zerfällt in n − 2 Dreiecke.\n\nDa jedes Dreieck die Winkelsumme 180° hat, beträgt die Innenwinkelsumme des Vielecks S = (n − 2) · 180°. Viereck: 2 · 180° = 360°; Fünfeck: 540°; Sechseck: 720°.\n\nKennt man alle Winkel bis auf einen, erhält man ihn, indem man die Summe der bekannten Winkel von S abzieht.',
        keyPoints: ['S = (n − 2) · 180°', 'n Ecken → n − 2 Dreiecke', 'Fehlender Winkel = S − Summe der anderen'],
        examples: [
          { example: 'Wie groß ist die Innenwinkelsumme eines Sechsecks?', solution: '(6 − 2) · 180° = 720°.' },
          { example: 'Vier Winkel eines Fünfecks sind 100°, 110°, 120° und 90°. Wie groß ist der fünfte?', solution: 'S = 540°. 540° − 420° = 120°.' },
        ],
        commonMistakes: [
          { mistake: 'S = n · 180°', fix: 'Das Vieleck zerfällt in n − 2 Dreiecke, nicht in n.' },
        ],
        practice: [
          { problem: 'Wie groß ist die Winkelsumme eines Achtecks?', solution: '1080°', steps: ['n = 8.', '(8 − 2) · 180° = 1080°.'] },
          { problem: 'Die Winkelsumme eines Vielecks ist 1260°. Wie viele Ecken hat es?', solution: '9', steps: ['(n − 2) · 180 = 1260.', 'n − 2 = 7, n = 9.'] },
          { problem: 'Drei Winkel eines Vierecks sind 80°, 95° und 110°. Wie groß ist der vierte?', solution: '75°', steps: ['S = 360°.', '360° − 285° = 75°.'] },
        ],
      },
    },

    // ───────── 2. Regular polygons
    {
      slug: 'g7-polygons-regular-polygons',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3.6, xMax: 3.6, yMin: -3, yMax: 3 }, height: 190,
        shapes: [
          { kind: 'polygon', points: P6, fill: true, color: 'primary' },
          { kind: 'angle', vertex: P6[0], from: P6[1], to: P6[5], label: '120°', color: 'secondary', r: 18 },
          ...P6.map((p, i) => ({ kind: 'segment', from: p, to: P6[(i + 1) % 6], ticks: 1, color: 'primary' })),
        ],
        caption: alt('Gjashtëkëndëshi i rregullt: brinjë të barabarta dhe çdo kënd 720° : 6 = 120°.', 'Regular hexagon: equal sides and each angle 720° ÷ 6 = 120°.', 'Regelmäßiges Sechseck: gleich lange Seiten und jeder Winkel 720° : 6 = 120°.'),
        alt: alt('Gjashtëkëndësh i rregullt me brinjë të barabarta dhe një kënd 120°.', 'A regular hexagon with equal sides and an angle of 120°.', 'Ein regelmäßiges Sechseck mit gleich langen Seiten und einem Winkel von 120°.'),
      }],
      answers: {
        examples: [[['(5 - 2) * 180 / 5', 108]], [['360 / 5', 72]]],
        practice: [[['(8 - 2) * 180 / 8', 135]], [['360 / 30', 12]], [['6 * 5', 30]]],
      },
      al: {
        title: 'Shumëkëndëshat e rregullt',
        objectives: ['Të dalloni shumëkëndëshat e rregullt.', 'Të llogaritni këndin e brendshëm dhe të jashtëm të tyre.'],
        theory: 'Shumëkëndëshi i rregullt ka të gjitha brinjët të barabarta dhe të gjitha këndet të barabarta: trekëndëshi barabrinjës, katrori, pesëkëndëshi i rregullt, gjashtëkëndëshi i rregullt …\n\nMeqë të n këndet janë të barabarta, secili kënd i brendshëm është (n − 2) · 180° : n. Pesëkëndëshi i rregullt: 540° : 5 = 108°.\n\nKëndi i jashtëm (ndërmjet një brinje dhe zgjatimit të brinjës fqinje) është shtues me këndin e brendshëm. Shuma e këndeve të jashtme të çdo shumëkëndëshi është 360°, prandaj te i rregullti secili është 360° : n.',
        keyPoints: ['Këndi i brendshëm = (n − 2) · 180° : n', 'Këndi i jashtëm = 360° : n', 'I brendshëm + i jashtëm = 180°'],
        examples: [
          { example: 'Sa është çdo kënd i brendshëm i pesëkëndëshit të rregullt?', solution: '(5 − 2) · 180° : 5 = 540° : 5 = 108°.' },
          { example: 'Sa është këndi i jashtëm i pesëkëndëshit të rregullt?', solution: '360° : 5 = 72° (dhe 108° + 72° = 180°).' },
        ],
        commonMistakes: [
          { mistake: 'Çdo shumëkëndësh me brinjë të barabarta quhet i rregullt (p.sh. rombi).', fix: 'Duhen edhe këndet të barabarta; rombi jo-katror nuk është i rregullt.' },
        ],
        practice: [
          { problem: 'Sa është çdo kënd i brendshëm i tetëkëndëshit të rregullt?', solution: '135°', steps: ['S = 6 · 180° = 1080°.', '1080° : 8 = 135°.'] },
          { problem: 'Këndi i jashtëm i një shumëkëndëshi të rregullt është 30°. Sa brinjë ka?', solution: '12', steps: ['360° : n = 30°.', 'n = 12.'] },
          { problem: 'Gjashtëkëndëshi i rregullt ka brinjë 5 cm. Sa është perimetri?', solution: '30 cm', steps: ['6 brinjë të barabarta.', '6 · 5 = 30 cm.'] },
        ],
      },
      en: {
        title: 'Regular polygons',
        objectives: ['Recognise regular polygons.', 'Work out their interior and exterior angles.'],
        theory: 'A regular polygon has all sides equal and all angles equal: the equilateral triangle, the square, the regular pentagon, the regular hexagon …\n\nSince all n angles are equal, each interior angle is (n − 2) · 180° ÷ n. Regular pentagon: 540° ÷ 5 = 108°.\n\nThe exterior angle (between one side and the extension of the next side) is supplementary to the interior angle. The exterior angles of any polygon add up to 360°, so for a regular polygon each one is 360° ÷ n.',
        keyPoints: ['Interior angle = (n − 2) · 180° ÷ n', 'Exterior angle = 360° ÷ n', 'Interior + exterior = 180°'],
        examples: [
          { example: 'What is each interior angle of a regular pentagon?', solution: '(5 − 2) · 180° ÷ 5 = 540° ÷ 5 = 108°.' },
          { example: 'What is the exterior angle of a regular pentagon?', solution: '360° ÷ 5 = 72° (and 108° + 72° = 180°).' },
        ],
        commonMistakes: [
          { mistake: 'Calling every polygon with equal sides regular (e.g. a rhombus).', fix: 'The angles must be equal too; a rhombus that is not a square is not regular.' },
        ],
        practice: [
          { problem: 'What is each interior angle of a regular octagon?', solution: '135°', steps: ['S = 6 · 180° = 1080°.', '1080° ÷ 8 = 135°.'] },
          { problem: 'The exterior angle of a regular polygon is 30°. How many sides does it have?', solution: '12', steps: ['360° ÷ n = 30°.', 'n = 12.'] },
          { problem: 'A regular hexagon has sides of 5 cm. What is its perimeter?', solution: '30 cm', steps: ['6 equal sides.', '6 · 5 = 30 cm.'] },
        ],
      },
      de: {
        title: 'Regelmäßige Vielecke',
        objectives: ['Regelmäßige Vielecke erkennen.', 'Ihre Innen- und Außenwinkel berechnen.'],
        theory: 'Ein regelmäßiges Vieleck hat lauter gleich lange Seiten und lauter gleich große Winkel: gleichseitiges Dreieck, Quadrat, regelmäßiges Fünfeck, regelmäßiges Sechseck …\n\nDa alle n Winkel gleich groß sind, ist jeder Innenwinkel (n − 2) · 180° : n. Regelmäßiges Fünfeck: 540° : 5 = 108°.\n\nDer Außenwinkel (zwischen einer Seite und der Verlängerung der Nachbarseite) ergänzt den Innenwinkel zu 180°. Die Außenwinkel jedes Vielecks ergeben zusammen 360°, beim regelmäßigen ist also jeder 360° : n.',
        keyPoints: ['Innenwinkel = (n − 2) · 180° : n', 'Außenwinkel = 360° : n', 'Innen- + Außenwinkel = 180°'],
        examples: [
          { example: 'Wie groß ist jeder Innenwinkel eines regelmäßigen Fünfecks?', solution: '(5 − 2) · 180° : 5 = 540° : 5 = 108°.' },
          { example: 'Wie groß ist der Außenwinkel eines regelmäßigen Fünfecks?', solution: '360° : 5 = 72° (und 108° + 72° = 180°).' },
        ],
        commonMistakes: [
          { mistake: 'Jedes Vieleck mit gleich langen Seiten regelmäßig nennen (z. B. eine Raute).', fix: 'Auch die Winkel müssen gleich sein; eine Raute, die kein Quadrat ist, ist nicht regelmäßig.' },
        ],
        practice: [
          { problem: 'Wie groß ist jeder Innenwinkel eines regelmäßigen Achtecks?', solution: '135°', steps: ['S = 6 · 180° = 1080°.', '1080° : 8 = 135°.'] },
          { problem: 'Der Außenwinkel eines regelmäßigen Vielecks ist 30°. Wie viele Ecken hat es?', solution: '12', steps: ['360° : n = 30°.', 'n = 12.'] },
          { problem: 'Ein regelmäßiges Sechseck hat Seiten von 5 cm. Wie groß ist sein Umfang?', solution: '30 cm', steps: ['6 gleich lange Seiten.', '6 · 5 = 30 cm.'] },
        ],
      },
    },

    // ───────── 3. Diagonals
    {
      slug: 'g7-polygons-diagonals',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3.4, xMax: 3.4, yMin: -3, yMax: 3.4 }, height: 200,
        shapes: [
          { kind: 'polygon', points: P5, color: 'primary' },
          ...[[0, 2], [0, 3], [1, 3], [1, 4], [2, 4]].map(([a, b]) => ({ kind: 'segment', from: P5[a], to: P5[b], color: 'secondary' })),
          ...P5.map((p) => ({ kind: 'point', at: p, color: 'primary' })),
        ],
        caption: alt('Pesëkëndëshi ka 5 · (5 − 3) : 2 = 5 diagonale.', 'A pentagon has 5 · (5 − 3) ÷ 2 = 5 diagonals.', 'Ein Fünfeck hat 5 · (5 − 3) : 2 = 5 Diagonalen.'),
        alt: alt('Pesëkëndësh me të pesë diagonalet e vizatuara.', 'A pentagon with all five diagonals drawn.', 'Ein Fünfeck mit allen fünf Diagonalen.'),
      }],
      answers: {
        examples: [[['5 * (5 - 3) / 2', 5]], [['6 * (6 - 3) / 2', 9]]],
        practice: [[['8 * (8 - 3) / 2', 20]], [['10 * (10 - 3) / 2', 35]], [['7 - 3', 4]]],
      },
      al: {
        title: 'Diagonalet',
        objectives: ['Të numëroni diagonalet nga një kulm dhe gjithsej.', 'Të përdorni formulën n(n − 3) : 2.'],
        theory: 'Diagonalja është segmenti që bashkon dy kulme jo fqinje të shumëkëndëshit.\n\nNga një kulm nuk mund të shkojmë te vetvetja dhe te dy kulmet fqinje, prandaj nga çdo kulm dalin n − 3 diagonale.\n\nNëse shumëzojmë n · (n − 3), çdo diagonale numërohet dy herë (një herë nga secili skaj). Prandaj numri i të gjitha diagonaleve është n(n − 3) : 2. Pesëkëndëshi: 5 · 2 : 2 = 5.',
        keyPoints: ['Nga një kulm: n − 3 diagonale.', 'Gjithsej: n(n − 3) : 2', 'Trekëndëshi nuk ka diagonale (n − 3 = 0).'],
        examples: [
          { example: 'Sa diagonale ka një pesëkëndësh?', solution: '5 · (5 − 3) : 2 = 5.' },
          { example: 'Sa diagonale ka një gjashtëkëndësh?', solution: '6 · 3 : 2 = 9.' },
        ],
        commonMistakes: [
          { mistake: 'Harrohet pjesëtimi me 2 (pesëkëndëshi: 10 diagonale).', fix: 'Çdo diagonale ka dy skaje, prandaj është numëruar dy herë.' },
        ],
        practice: [
          { problem: 'Sa diagonale ka një tetëkëndësh?', solution: '20', steps: ['8 · (8 − 3) = 40.', '40 : 2 = 20.'] },
          { problem: 'Sa diagonale ka një dhjetëkëndësh?', solution: '35', steps: ['10 · 7 = 70.', '70 : 2 = 35.'] },
          { problem: 'Sa diagonale dalin nga një kulm i shtatëkëndëshit?', solution: '4', steps: ['n − 3.', '7 − 3 = 4.'] },
        ],
      },
      en: {
        title: 'Diagonals',
        objectives: ['Count the diagonals from one vertex and in total.', 'Use the formula n(n − 3) ÷ 2.'],
        theory: 'A diagonal is a segment joining two non-neighbouring vertices of a polygon.\n\nFrom one vertex we cannot go to itself or to its two neighbours, so n − 3 diagonals leave each vertex.\n\nIf we multiply n · (n − 3), each diagonal is counted twice (once from each end). So the total number of diagonals is n(n − 3) ÷ 2. Pentagon: 5 · 2 ÷ 2 = 5.',
        keyPoints: ['From one vertex: n − 3 diagonals.', 'In total: n(n − 3) ÷ 2', 'A triangle has no diagonals (n − 3 = 0).'],
        examples: [
          { example: 'How many diagonals does a pentagon have?', solution: '5 · (5 − 3) ÷ 2 = 5.' },
          { example: 'How many diagonals does a hexagon have?', solution: '6 · 3 ÷ 2 = 9.' },
        ],
        commonMistakes: [
          { mistake: 'Forgetting to divide by 2 (pentagon: 10 diagonals).', fix: 'Each diagonal has two ends, so it was counted twice.' },
        ],
        practice: [
          { problem: 'How many diagonals does an octagon have?', solution: '20', steps: ['8 · (8 − 3) = 40.', '40 ÷ 2 = 20.'] },
          { problem: 'How many diagonals does a decagon have?', solution: '35', steps: ['10 · 7 = 70.', '70 ÷ 2 = 35.'] },
          { problem: 'How many diagonals leave one vertex of a heptagon?', solution: '4', steps: ['n − 3.', '7 − 3 = 4.'] },
        ],
      },
      de: {
        title: 'Diagonalen',
        objectives: ['Diagonalen von einer Ecke aus und insgesamt zählen.', 'Die Formel n(n − 3) : 2 anwenden.'],
        theory: 'Eine Diagonale verbindet zwei nicht benachbarte Ecken eines Vielecks.\n\nVon einer Ecke aus kann man nicht zu sich selbst und nicht zu den zwei Nachbarecken gehen, also gehen von jeder Ecke n − 3 Diagonalen aus.\n\nRechnet man n · (n − 3), wird jede Diagonale doppelt gezählt (von jedem Ende einmal). Die Anzahl aller Diagonalen ist daher n(n − 3) : 2. Fünfeck: 5 · 2 : 2 = 5.',
        keyPoints: ['Von einer Ecke: n − 3 Diagonalen.', 'Insgesamt: n(n − 3) : 2', 'Ein Dreieck hat keine Diagonalen (n − 3 = 0).'],
        examples: [
          { example: 'Wie viele Diagonalen hat ein Fünfeck?', solution: '5 · (5 − 3) : 2 = 5.' },
          { example: 'Wie viele Diagonalen hat ein Sechseck?', solution: '6 · 3 : 2 = 9.' },
        ],
        commonMistakes: [
          { mistake: 'Das Teilen durch 2 vergessen (Fünfeck: 10 Diagonalen).', fix: 'Jede Diagonale hat zwei Enden und wurde doppelt gezählt.' },
        ],
        practice: [
          { problem: 'Wie viele Diagonalen hat ein Achteck?', solution: '20', steps: ['8 · (8 − 3) = 40.', '40 : 2 = 20.'] },
          { problem: 'Wie viele Diagonalen hat ein Zehneck?', solution: '35', steps: ['10 · 7 = 70.', '70 : 2 = 35.'] },
          { problem: 'Wie viele Diagonalen gehen von einer Ecke eines Siebenecks aus?', solution: '4', steps: ['n − 3.', '7 − 3 = 4.'] },
        ],
      },
    },

    // ───────── 4. Perimeter and area
    {
      slug: 'g7-polygons-perimeter-area',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 10.5, yMin: -1.2, yMax: 5 }, grid: true, height: 170,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [10, 0], [8, 4], [2, 4]], fill: true, color: 'primary' },
          { kind: 'segment', from: [2, 4], to: [2, 0], color: 'secondary', dashed: true, label: 'h = 4' },
          { kind: 'label', at: [5, -0.7], text: 'a = 10 cm' },
          { kind: 'label', at: [5, 4.5], text: 'b = 6 cm' },
        ],
        caption: alt('Trapezi: S = (a + b) · h : 2 = (10 + 6) · 4 : 2 = 32 cm²', 'Trapezium: A = (a + b) · h ÷ 2 = (10 + 6) · 4 ÷ 2 = 32 cm²', 'Trapez: A = (a + c) · h : 2 = (10 + 6) · 4 : 2 = 32 cm²'),
        alt: alt('Trapez me baza 10 cm dhe 6 cm dhe lartësi 4 cm në rrjetë.', 'A trapezium with bases 10 cm and 6 cm and height 4 cm on a grid.', 'Ein Trapez mit den Grundseiten 10 cm und 6 cm und der Höhe 4 cm im Gitter.'),
      }],
      answers: {
        examples: [[['(10 + 6) * 4 / 2', 32]], [['10 * 7 / 2', 35]]],
        practice: [[['9 * 4', 36]], [['6 * 8 / 2', 24]], [['(12 + 8) * 5 / 2', 50]]],
      },
      al: {
        title: 'Perimetri dhe sipërfaqja',
        objectives: ['Të llogaritni sipërfaqen e trekëndëshit, paralelogramit, rombit dhe trapezit.', 'Të zgjidhni formulën e duhur për figurën.'],
        theory: 'Perimetri është shuma e gjatësive të brinjëve. Sipërfaqja matet në njësi katrore dhe ka formulë të veçantë për çdo figurë.\n\nParalelogrami: S = a · h (baza herë lartësia). Trekëndëshi është gjysma e një paralelogrami: S = a · h : 2. Rombi: S = d₁ · d₂ : 2 (prodhimi i diagonaleve, përgjysmë).\n\nTrapezi ka dy baza paralele a dhe b; e vendosim një kopje të kthyer pranë tij dhe marrim paralelogram me bazë a + b, prandaj S = (a + b) · h : 2. Lartësia matet gjithmonë pingul me bazën.',
        keyPoints: ['Paralelogrami: S = a · h', 'Trekëndëshi: S = a · h : 2', 'Trapezi: S = (a + b) · h : 2; rombi: S = d₁ · d₂ : 2'],
        examples: [
          { example: 'Gjeni sipërfaqen e trapezit me baza 10 cm dhe 6 cm dhe lartësi 4 cm.', solution: 'S = (10 + 6) · 4 : 2 = 32 cm².' },
          { example: 'Trekëndëshi ka bazë 10 cm dhe lartësi 7 cm. Sa është sipërfaqja?', solution: 'S = 10 · 7 : 2 = 35 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Si lartësi merret brinja e pjerrët.', fix: 'Lartësia është segmenti pingul me bazën.' },
          { mistake: 'Te trekëndëshi harrohet pjesëtimi me 2.', fix: 'Trekëndëshi është gjysma e paralelogramit me të njëjtën bazë dhe lartësi.' },
        ],
        practice: [
          { problem: 'Paralelogrami ka bazë 9 cm dhe lartësi 4 cm. Sa është sipërfaqja?', solution: '36 cm²', steps: ['S = a · h.', '9 · 4 = 36 cm².'] },
          { problem: 'Rombi ka diagonale 6 cm dhe 8 cm. Sa është sipërfaqja?', solution: '24 cm²', steps: ['S = d₁ · d₂ : 2.', '6 · 8 : 2 = 24 cm².'] },
          { problem: 'Trapezi ka baza 12 cm dhe 8 cm dhe lartësi 5 cm. Sa është sipërfaqja?', solution: '50 cm²', steps: ['(12 + 8) · 5 = 100.', '100 : 2 = 50 cm².'] },
        ],
      },
      en: {
        title: 'Perimeter and area',
        objectives: ['Work out the area of triangles, parallelograms, rhombuses and trapeziums.', 'Choose the right formula for the shape.'],
        theory: 'The perimeter is the sum of the side lengths. Area is measured in square units and has its own formula for each shape.\n\nParallelogram: A = a · h (base times height). A triangle is half a parallelogram: A = a · h ÷ 2. Rhombus: A = d₁ · d₂ ÷ 2 (half the product of the diagonals).\n\nA trapezium has two parallel bases a and b; placing a turned copy next to it gives a parallelogram with base a + b, so A = (a + b) · h ÷ 2. The height is always measured perpendicular to the base.',
        keyPoints: ['Parallelogram: A = a · h', 'Triangle: A = a · h ÷ 2', 'Trapezium: A = (a + b) · h ÷ 2; rhombus: A = d₁ · d₂ ÷ 2'],
        examples: [
          { example: 'Find the area of a trapezium with bases 10 cm and 6 cm and height 4 cm.', solution: 'A = (10 + 6) · 4 ÷ 2 = 32 cm².' },
          { example: 'A triangle has base 10 cm and height 7 cm. What is its area?', solution: 'A = 10 · 7 ÷ 2 = 35 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Taking a slanted side as the height.', fix: 'The height is the segment perpendicular to the base.' },
          { mistake: 'Forgetting to halve for a triangle.', fix: 'A triangle is half a parallelogram with the same base and height.' },
        ],
        practice: [
          { problem: 'A parallelogram has base 9 cm and height 4 cm. What is its area?', solution: '36 cm²', steps: ['A = a · h.', '9 · 4 = 36 cm².'] },
          { problem: 'A rhombus has diagonals of 6 cm and 8 cm. What is its area?', solution: '24 cm²', steps: ['A = d₁ · d₂ ÷ 2.', '6 · 8 ÷ 2 = 24 cm².'] },
          { problem: 'A trapezium has bases 12 cm and 8 cm and height 5 cm. What is its area?', solution: '50 cm²', steps: ['(12 + 8) · 5 = 100.', '100 ÷ 2 = 50 cm².'] },
        ],
      },
      de: {
        title: 'Umfang und Flächeninhalt',
        objectives: ['Den Flächeninhalt von Dreieck, Parallelogramm, Raute und Trapez berechnen.', 'Die passende Formel zur Figur wählen.'],
        theory: 'Der Umfang ist die Summe der Seitenlängen. Der Flächeninhalt wird in Flächeneinheiten gemessen und hat für jede Figur eine eigene Formel.\n\nParallelogramm: A = g · h (Grundseite mal Höhe). Ein Dreieck ist ein halbes Parallelogramm: A = g · h : 2. Raute: A = e · f : 2 (halbes Produkt der Diagonalen).\n\nEin Trapez hat zwei parallele Seiten a und c; legt man eine gedrehte Kopie daneben, entsteht ein Parallelogramm mit der Grundseite a + c, also A = (a + c) · h : 2. Die Höhe wird immer senkrecht zur Grundseite gemessen.',
        keyPoints: ['Parallelogramm: A = g · h', 'Dreieck: A = g · h : 2', 'Trapez: A = (a + c) · h : 2; Raute: A = e · f : 2'],
        examples: [
          { example: 'Berechnen Sie den Flächeninhalt eines Trapezes mit den parallelen Seiten 10 cm und 6 cm und der Höhe 4 cm.', solution: 'A = (10 + 6) · 4 : 2 = 32 cm².' },
          { example: 'Ein Dreieck hat die Grundseite 10 cm und die Höhe 7 cm. Wie groß ist sein Flächeninhalt?', solution: 'A = 10 · 7 : 2 = 35 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Eine schräge Seite als Höhe nehmen.', fix: 'Die Höhe steht senkrecht auf der Grundseite.' },
          { mistake: 'Beim Dreieck das Halbieren vergessen.', fix: 'Ein Dreieck ist ein halbes Parallelogramm mit gleicher Grundseite und Höhe.' },
        ],
        practice: [
          { problem: 'Ein Parallelogramm hat die Grundseite 9 cm und die Höhe 4 cm. Wie groß ist sein Flächeninhalt?', solution: '36 cm²', steps: ['A = g · h.', '9 · 4 = 36 cm².'] },
          { problem: 'Eine Raute hat Diagonalen von 6 cm und 8 cm. Wie groß ist ihr Flächeninhalt?', solution: '24 cm²', steps: ['A = e · f : 2.', '6 · 8 : 2 = 24 cm².'] },
          { problem: 'Ein Trapez hat die parallelen Seiten 12 cm und 8 cm und die Höhe 5 cm. Wie groß ist sein Flächeninhalt?', solution: '50 cm²', steps: ['(12 + 8) · 5 = 100.', '100 : 2 = 50 cm².'] },
        ],
      },
    },

    // ───────── 5. Circle: circumference and area
    {
      slug: 'g7-polygons-circle',
      visuals: [{
        type: 'geoFigure', view: { xMin: -4, xMax: 4, yMin: -3.6, yMax: 3.6 }, height: 190,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 3, color: 'primary', fill: true },
          { kind: 'segment', from: [0, 0], to: [3, 0], color: 'secondary', label: 'r = 5 cm' },
          { kind: 'point', at: [0, 0], label: 'O', labelPos: 'sw', color: 'primary' },
        ],
        caption: alt('C = 2πr = 10π ≈ 31,4 cm; S = πr² = 25π ≈ 78,5 cm²', 'C = 2πr = 10π ≈ 31.4 cm; A = πr² = 25π ≈ 78.5 cm²', 'u = 2πr = 10π ≈ 31,4 cm; A = πr² = 25π ≈ 78,5 cm²'),
        alt: alt('Rreth me qendër O dhe rreze 5 cm.', 'A circle with centre O and radius 5 cm.', 'Ein Kreis mit Mittelpunkt O und Radius 5 cm.'),
      }],
      answers: {
        examples: [[['2 * pi * 5', 31.4, 0.05]], [['pi * 5 * 5', 78.5, 0.05]]],
        practice: [[['pi * 14', 44.0, 0.05]], [['pi * 3 * 3', 28.3, 0.05]], [['pi * 4 * 4 / 2', 25.1, 0.05]]],
      },
      al: {
        title: 'Rrethi: perimetri dhe sipërfaqja',
        objectives: ['Të llogaritni gjatësinë e rrethit (perimetrin).', 'Të llogaritni sipërfaqen e qarkut.'],
        theory: 'Te çdo rreth, raporti i perimetrit me diametrin është i njëjti numër, π ≈ 3,14. Prandaj perimetri (gjatësia e rrethit) është C = π · d = 2πr.\n\nSipërfaqja e qarkut (pjesa brenda rrethit) është S = π · r · r = πr². Kujdes: perimetri matet në cm, sipërfaqja në cm².\n\nPërgjigjen mund ta japim të saktë me π (p.sh. 10π cm) ose të përafërt me π ≈ 3,14 (≈ 31,4 cm).',
        keyPoints: ['C = 2πr = πd', 'S = πr²', 'π ≈ 3,14'],
        examples: [
          { example: 'Rrezja e rrethit është 5 cm. Sa është perimetri?', solution: 'C = 2 · π · 5 = 10π ≈ 31,4 cm.' },
          { example: 'Sa është sipërfaqja e qarkut me rreze 5 cm?', solution: 'S = π · 5 · 5 = 25π ≈ 78,5 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Te sipërfaqja përdoret diametri në vend të rrezes: π · 10 · 10.', fix: 'Formula përdor rrezen: r = d : 2.' },
          { mistake: 'Ngatërrohen C = 2πr dhe S = πr².', fix: 'Perimetri është gjatësi (njësi të thjeshta); sipërfaqja ka r · r (njësi katrore).' },
        ],
        practice: [
          { problem: 'Diametri i një rrote është 14 cm. Sa është perimetri?', solution: '14π ≈ 44,0 cm', steps: ['C = π · d.', 'π · 14 ≈ 44,0 cm.'] },
          { problem: 'Sa është sipërfaqja e qarkut me rreze 3 cm?', solution: '9π ≈ 28,3 cm²', steps: ['S = π · 3 · 3.', '9π ≈ 28,3 cm².'] },
          { problem: 'Sa është sipërfaqja e gjysmëqarkut me rreze 4 cm?', solution: '8π ≈ 25,1 cm²', steps: ['Qarku: π · 16 = 16π.', 'Gjysma: 8π ≈ 25,1 cm².'] },
        ],
      },
      en: {
        title: 'The circle: circumference and area',
        objectives: ['Work out the circumference of a circle.', 'Work out the area of a circle.'],
        theory: 'For every circle, the ratio of the circumference to the diameter is the same number, π ≈ 3.14. So the circumference is C = π · d = 2πr.\n\nThe area of the circle (the region inside it) is A = π · r · r = πr². Careful: circumference is measured in cm, area in cm².\n\nWe can give the answer exactly with π (e.g. 10π cm) or approximately with π ≈ 3.14 (≈ 31.4 cm).',
        keyPoints: ['C = 2πr = πd', 'A = πr²', 'π ≈ 3.14'],
        examples: [
          { example: 'A circle has radius 5 cm. What is its circumference?', solution: 'C = 2 · π · 5 = 10π ≈ 31.4 cm.' },
          { example: 'What is the area of a circle with radius 5 cm?', solution: 'A = π · 5 · 5 = 25π ≈ 78.5 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Using the diameter instead of the radius for the area: π · 10 · 10.', fix: 'The formula uses the radius: r = d ÷ 2.' },
          { mistake: 'Mixing up C = 2πr and A = πr².', fix: 'Circumference is a length (plain units); area has r · r (square units).' },
        ],
        practice: [
          { problem: 'A wheel has a diameter of 14 cm. What is its circumference?', solution: '14π ≈ 44.0 cm', steps: ['C = π · d.', 'π · 14 ≈ 44.0 cm.'] },
          { problem: 'What is the area of a circle with radius 3 cm?', solution: '9π ≈ 28.3 cm²', steps: ['A = π · 3 · 3.', '9π ≈ 28.3 cm².'] },
          { problem: 'What is the area of a semicircle with radius 4 cm?', solution: '8π ≈ 25.1 cm²', steps: ['Full circle: π · 16 = 16π.', 'Half: 8π ≈ 25.1 cm².'] },
        ],
      },
      de: {
        title: 'Der Kreis: Umfang und Flächeninhalt',
        objectives: ['Den Umfang eines Kreises berechnen.', 'Den Flächeninhalt eines Kreises berechnen.'],
        theory: 'Bei jedem Kreis ist das Verhältnis von Umfang zu Durchmesser dieselbe Zahl, π ≈ 3,14. Der Umfang ist daher u = π · d = 2πr.\n\nDer Flächeninhalt der Kreisfläche ist A = π · r · r = πr². Achtung: Der Umfang wird in cm gemessen, der Flächeninhalt in cm².\n\nMan kann das Ergebnis genau mit π angeben (z. B. 10π cm) oder gerundet mit π ≈ 3,14 (≈ 31,4 cm).',
        keyPoints: ['u = 2πr = πd', 'A = πr²', 'π ≈ 3,14'],
        examples: [
          { example: 'Ein Kreis hat den Radius 5 cm. Wie groß ist sein Umfang?', solution: 'u = 2 · π · 5 = 10π ≈ 31,4 cm.' },
          { example: 'Wie groß ist der Flächeninhalt eines Kreises mit Radius 5 cm?', solution: 'A = π · 5 · 5 = 25π ≈ 78,5 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Für die Fläche den Durchmesser statt des Radius nehmen: π · 10 · 10.', fix: 'Die Formel verwendet den Radius: r = d : 2.' },
          { mistake: 'u = 2πr und A = πr² verwechseln.', fix: 'Der Umfang ist eine Länge; der Flächeninhalt enthält r · r (Flächeneinheiten).' },
        ],
        practice: [
          { problem: 'Ein Rad hat den Durchmesser 14 cm. Wie groß ist sein Umfang?', solution: '14π ≈ 44,0 cm', steps: ['u = π · d.', 'π · 14 ≈ 44,0 cm.'] },
          { problem: 'Wie groß ist der Flächeninhalt eines Kreises mit Radius 3 cm?', solution: '9π ≈ 28,3 cm²', steps: ['A = π · 3 · 3.', '9π ≈ 28,3 cm².'] },
          { problem: 'Wie groß ist der Flächeninhalt eines Halbkreises mit Radius 4 cm?', solution: '8π ≈ 25,1 cm²', steps: ['Ganzer Kreis: π · 16 = 16π.', 'Hälfte: 8π ≈ 25,1 cm².'] },
        ],
      },
    },
  ],
};
