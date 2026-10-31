// Grade 6 · Theme 4: Geometric figures (November–December)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g6-geometric-figures',
  i18n: {
    al: { title: 'Figurat gjeometrike', description: 'Trekëndëshat, katërkëndëshat dhe rrethi: llojet, vetitë, perimetri dhe ndërtimi me vizore e kompas.' },
    en: { title: 'Geometric figures', description: 'Triangles, quadrilaterals and the circle: types, properties, perimeter and constructions with ruler and compasses.' },
    de: { title: 'Geometrische Figuren', description: 'Dreiecke, Vierecke und der Kreis: Arten, Eigenschaften, Umfang und Konstruktionen mit Zirkel und Lineal.' },
  },
  lessons: [
    // ───────── 1. Triangles
    {
      slug: 'g6-geometric-figures-triangles',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.4, xMax: 15.4, yMin: -1.6, yMax: 4.4 },
        shapes: [
          { kind: 'polygon', points: [[0, 0], [4, 0], [2, 3.46]], fill: true, color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [4, 0], ticks: 1, color: 'primary' }, { kind: 'segment', from: [4, 0], to: [2, 3.46], ticks: 1, color: 'primary' }, { kind: 'segment', from: [2, 3.46], to: [0, 0], ticks: 1, color: 'primary' },
          { kind: 'label', at: [2, -0.9], text: alt('barabrinjës', 'equilateral', 'gleichseitig'), size: 11 },
          { kind: 'polygon', points: [[5.5, 0], [9, 0], [7.25, 3.8]], fill: true, color: 'secondary' },
          { kind: 'segment', from: [9, 0], to: [7.25, 3.8], ticks: 2, color: 'secondary' }, { kind: 'segment', from: [7.25, 3.8], to: [5.5, 0], ticks: 2, color: 'secondary' },
          { kind: 'label', at: [7.25, -0.9], text: alt('dybrinjënjishëm', 'isosceles', 'gleichschenklig'), size: 11 },
          { kind: 'polygon', points: [[10.5, 0], [15, 0], [10.5, 3]], fill: true, color: 'success' },
          { kind: 'angle', vertex: [10.5, 0], from: [15, 0], to: [10.5, 3], right: true, color: 'success' },
          { kind: 'label', at: [12.75, -0.9], text: alt('kënddrejtë', 'right-angled', 'rechtwinklig'), size: 11 },
        ],
        caption: alt('Vijëzat e njëjta tregojnë brinjë të barabarta; katrori i vogël tregon këndin e drejtë.', 'Equal tick marks show equal sides; the small square shows the right angle.', 'Gleiche Striche zeigen gleich lange Seiten; das kleine Quadrat zeigt den rechten Winkel.'),
        alt: alt('Tre trekëndësha: barabrinjës, dybrinjënjishëm dhe kënddrejtë.', 'Three triangles: equilateral, isosceles and right-angled.', 'Drei Dreiecke: gleichseitig, gleichschenklig und rechtwinklig.'),
      }],
      answers: {
        examples: [[['7 + 7 + 4', 18]], [['180 - 50 - 60', 70]]],
        practice: [[['27 / 3', 9]], [['180 - 90 - 35', 55]], [['5 + 6 + 7', 18]]],
      },
      al: {
        title: 'Trekëndëshi dhe llojet e tij',
        objectives: ['Të klasifikoni trekëndëshat sipas brinjëve dhe sipas këndeve.', 'Të llogaritni perimetrin dhe këndin e tretë të një trekëndëshi.'],
        theory: 'Trekëndëshi ka tri kulme, tri brinjë dhe tri kënde. Sipas brinjëve: barabrinjës (të tria brinjët të barabarta), dybrinjënjishëm (dy brinjë të barabarta) dhe brinjëndryshëm (asnjë brinjë e barabartë).\n\nSipas këndeve: këndngushtë (të tria këndet të ngushta), kënddrejtë (një kënd i drejtë) dhe këndgjerë (një kënd i gjerë). Shuma e këndeve të çdo trekëndëshi është 180°.\n\nPerimetri është shuma e gjatësive të brinjëve: P = a + b + c. Te trekëndëshi barabrinjës P = 3 · a.',
        keyPoints: ['Sipas brinjëve: barabrinjës, dybrinjënjishëm, brinjëndryshëm.', 'Sipas këndeve: këndngushtë, kënddrejtë, këndgjerë.', 'Shuma e këndeve = 180°.', 'P = a + b + c'],
        examples: [
          { example: 'Trekëndëshi ka brinjët 7 cm, 7 cm dhe 4 cm. Çfarë lloji është dhe sa është perimetri?', solution: 'Dy brinjë janë të barabarta, pra dybrinjënjishëm. P = 7 + 7 + 4 = 18 cm.' },
          { example: 'Dy kënde të një trekëndëshi janë 50° dhe 60°. Sa është i treti?', solution: '180° − 50° − 60° = 70°.' },
        ],
        commonMistakes: [
          { mistake: 'Mendohet se trekëndëshi kënddrejtë nuk mund të jetë dybrinjënjishëm.', fix: 'Mund të jetë: p.sh. me katete të barabarta dhe kënde 90°, 45°, 45°.' },
          { mistake: 'Shuma e këndeve merret 360°.', fix: '360° është shuma te katërkëndëshi; te trekëndëshi 180°.' },
        ],
        practice: [
          { problem: 'Trekëndëshi barabrinjës ka perimetër 27 cm. Sa është brinja?', solution: '9 cm', steps: ['P = 3 · a.', 'a = 27 : 3 = 9 cm.'] },
          { problem: 'Një trekëndësh ka kënde 90° dhe 35°. Sa është këndi i tretë dhe çfarë lloji është trekëndëshi?', solution: '55°, trekëndësh kënddrejtë', steps: ['180° − 90° − 35° = 55°.', 'Ka një kënd të drejtë → kënddrejtë.'] },
          { problem: 'Brinjët janë 5 cm, 6 cm dhe 7 cm. Gjeni perimetrin dhe llojin sipas brinjëve.', solution: 'P = 18 cm, brinjëndryshëm', steps: ['5 + 6 + 7 = 18 cm.', 'Asnjë brinjë nuk është e barabartë me tjetrën.'] },
        ],
      },
      en: {
        title: 'Triangles and their types',
        objectives: ['Classify triangles by their sides and by their angles.', 'Find the perimeter and the third angle of a triangle.'],
        theory: 'A triangle has three vertices, three sides and three angles. By sides: equilateral (all three sides equal), isosceles (two sides equal) and scalene (no equal sides).\n\nBy angles: acute (all three angles acute), right-angled (one right angle) and obtuse (one obtuse angle). The angles of every triangle add up to 180°.\n\nThe perimeter is the sum of the side lengths: P = a + b + c. For an equilateral triangle P = 3 · a.',
        keyPoints: ['By sides: equilateral, isosceles, scalene.', 'By angles: acute, right-angled, obtuse.', 'Angle sum = 180°.', 'P = a + b + c'],
        examples: [
          { example: 'A triangle has sides 7 cm, 7 cm and 4 cm. What type is it and what is its perimeter?', solution: 'Two sides are equal, so it is isosceles. P = 7 + 7 + 4 = 18 cm.' },
          { example: 'Two angles of a triangle are 50° and 60°. What is the third?', solution: '180° − 50° − 60° = 70°.' },
        ],
        commonMistakes: [
          { mistake: 'Thinking a right-angled triangle cannot be isosceles.', fix: 'It can: e.g. with equal legs and angles 90°, 45°, 45°.' },
          { mistake: 'Taking 360° as the angle sum.', fix: '360° is the sum for a quadrilateral; for a triangle it is 180°.' },
        ],
        practice: [
          { problem: 'An equilateral triangle has a perimeter of 27 cm. How long is a side?', solution: '9 cm', steps: ['P = 3 · a.', 'a = 27 ÷ 3 = 9 cm.'] },
          { problem: 'A triangle has angles 90° and 35°. What is the third angle and what type is the triangle?', solution: '55°, a right-angled triangle', steps: ['180° − 90° − 35° = 55°.', 'It has a right angle → right-angled.'] },
          { problem: 'The sides are 5 cm, 6 cm and 7 cm. Find the perimeter and the type by sides.', solution: 'P = 18 cm, scalene', steps: ['5 + 6 + 7 = 18 cm.', 'No two sides are equal.'] },
        ],
      },
      de: {
        title: 'Dreiecke und ihre Arten',
        objectives: ['Dreiecke nach Seiten und nach Winkeln einteilen.', 'Umfang und dritten Winkel eines Dreiecks berechnen.'],
        theory: 'Ein Dreieck hat drei Ecken, drei Seiten und drei Winkel. Nach den Seiten: gleichseitig (alle drei Seiten gleich lang), gleichschenklig (zwei Seiten gleich lang) und unregelmäßig (keine gleich langen Seiten).\n\nNach den Winkeln: spitzwinklig (alle drei Winkel spitz), rechtwinklig (ein rechter Winkel) und stumpfwinklig (ein stumpfer Winkel). Die Winkelsumme jedes Dreiecks beträgt 180°.\n\nDer Umfang ist die Summe der Seitenlängen: u = a + b + c. Beim gleichseitigen Dreieck ist u = 3 · a.',
        keyPoints: ['Nach Seiten: gleichseitig, gleichschenklig, unregelmäßig.', 'Nach Winkeln: spitzwinklig, rechtwinklig, stumpfwinklig.', 'Winkelsumme = 180°.', 'u = a + b + c'],
        examples: [
          { example: 'Ein Dreieck hat die Seiten 7 cm, 7 cm und 4 cm. Welche Art ist es, und wie groß ist der Umfang?', solution: 'Zwei Seiten sind gleich lang, also gleichschenklig. u = 7 + 7 + 4 = 18 cm.' },
          { example: 'Zwei Winkel eines Dreiecks sind 50° und 60°. Wie groß ist der dritte?', solution: '180° − 50° − 60° = 70°.' },
        ],
        commonMistakes: [
          { mistake: 'Glauben, ein rechtwinkliges Dreieck könne nicht gleichschenklig sein.', fix: 'Es kann: z. B. mit gleich langen Katheten und den Winkeln 90°, 45°, 45°.' },
          { mistake: 'Als Winkelsumme 360° nehmen.', fix: '360° ist die Winkelsumme im Viereck; im Dreieck sind es 180°.' },
        ],
        practice: [
          { problem: 'Ein gleichseitiges Dreieck hat den Umfang 27 cm. Wie lang ist eine Seite?', solution: '9 cm', steps: ['u = 3 · a.', 'a = 27 : 3 = 9 cm.'] },
          { problem: 'Ein Dreieck hat die Winkel 90° und 35°. Wie groß ist der dritte Winkel, und welche Art von Dreieck ist es?', solution: '55°, ein rechtwinkliges Dreieck', steps: ['180° − 90° − 35° = 55°.', 'Es hat einen rechten Winkel → rechtwinklig.'] },
          { problem: 'Die Seiten sind 5 cm, 6 cm und 7 cm. Bestimmen Sie Umfang und Art nach Seiten.', solution: 'u = 18 cm, unregelmäßig', steps: ['5 + 6 + 7 = 18 cm.', 'Keine zwei Seiten sind gleich lang.'] },
        ],
      },
    },

    // ───────── 2. Quadrilaterals
    {
      slug: 'g6-geometric-figures-quadrilaterals',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.4, xMax: 16.4, yMin: -5.4, yMax: 3.4 },
        shapes: [
          { kind: 'polygon', points: [[0, 0.8], [5, 0.8], [5, 3], [0, 3]], fill: true, color: 'primary' },
          { kind: 'label', at: [2.5, 0.1], text: alt('drejtkëndësh', 'rectangle', 'Rechteck'), size: 10 },
          { kind: 'polygon', points: [[6.6, 0.8], [8.8, 0.8], [8.8, 3], [6.6, 3]], fill: true, color: 'success' },
          { kind: 'label', at: [7.7, 0.1], text: alt('katror', 'square', 'Quadrat'), size: 10 },
          { kind: 'polygon', points: [[10.4, 0.8], [14, 0.8], [16, 3], [12.4, 3]], fill: true, color: 'secondary' },
          { kind: 'label', at: [13.2, 0.1], text: alt('paralelogram', 'parallelogram', 'Parallelogramm'), size: 10 },
          { kind: 'polygon', points: [[2.5, -4.2], [4.6, -2.7], [2.5, -1.2], [0.4, -2.7]], fill: true, color: 'purple' },
          { kind: 'label', at: [2.5, -4.9], text: alt('romb', 'rhombus', 'Raute'), size: 10 },
          { kind: 'polygon', points: [[7, -4.2], [15, -4.2], [13, -1.2], [9, -1.2]], fill: true, color: 'error' },
          { kind: 'label', at: [11, -4.9], text: alt('trapez', 'trapezium', 'Trapez'), size: 10 },
        ],
        alt: alt('Pesë katërkëndësha: drejtkëndësh, katror, paralelogram, romb dhe trapez.', 'Five quadrilaterals: rectangle, square, parallelogram, rhombus and trapezium.', 'Fünf Vierecke: Rechteck, Quadrat, Parallelogramm, Raute und Trapez.'),
      }],
      answers: {
        examples: ['text', [['2 * (8 + 5)', 26]]],
        practice: [[['4 * 6', 24]], [['36 / 4', 9]], [['360 - 90 - 90 - 120', 60]]],
      },
      al: {
        title: 'Katërkëndëshat',
        objectives: ['Të njihni trapezin, paralelogramin, drejtkëndëshin, rombin dhe katrorin.', 'Të llogaritni perimetrin dhe këndet e katërkëndëshave.'],
        theory: 'Katërkëndëshi ka katër brinjë dhe katër kënde; shuma e këndeve të tij është 360°. Trapezi ka të paktën një çift brinjësh paralele. Paralelogrami ka dy çifte brinjësh paralele; brinjët e kundërta janë të barabarta.\n\nDrejtkëndëshi është paralelogram me të katër këndet të drejta. Rombi është paralelogram me të katër brinjët të barabarta. Katrori është njëkohësisht drejtkëndësh dhe romb: brinjë të barabarta dhe kënde të drejta.\n\nPerimetri: drejtkëndëshi P = 2 · (a + b); katrori dhe rombi P = 4 · a.',
        keyPoints: ['Shuma e këndeve të katërkëndëshit = 360°.', 'Katrori = drejtkëndësh + romb.', 'Drejtkëndëshi: P = 2(a + b); katrori, rombi: P = 4a.'],
        examples: [
          { example: 'Cili katërkëndësh i ka të gjitha brinjët të barabarta, por këndet jo domosdoshmërisht të drejta?', solution: 'Rombi.' },
          { example: 'Sa është perimetri i drejtkëndëshit 8 cm × 5 cm?', solution: 'P = 2 · (8 + 5) = 2 · 13 = 26 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Mendohet se katrori nuk është drejtkëndësh.', fix: 'Katrori i ka të gjitha vetitë e drejtkëndëshit, pra është drejtkëndësh i veçantë.' },
        ],
        practice: [
          { problem: 'Sa është perimetri i katrorit me brinjë 6 cm?', solution: '24 cm', steps: ['P = 4 · a.', '4 · 6 = 24 cm.'] },
          { problem: 'Rombi ka perimetër 36 cm. Sa është brinja?', solution: '9 cm', steps: ['P = 4 · a.', 'a = 36 : 4 = 9 cm.'] },
          { problem: 'Tri kënde të një katërkëndëshi janë 90°, 90° dhe 120°. Sa është i katërti?', solution: '60°', steps: ['Shuma = 360°.', '360° − 90° − 90° − 120° = 60°.'] },
        ],
      },
      en: {
        title: 'Quadrilaterals',
        objectives: ['Recognise the trapezium, parallelogram, rectangle, rhombus and square.', 'Work out the perimeter and angles of quadrilaterals.'],
        theory: 'A quadrilateral has four sides and four angles; its angles add up to 360°. A trapezium (trapezoid) has at least one pair of parallel sides. A parallelogram has two pairs of parallel sides; opposite sides are equal.\n\nA rectangle is a parallelogram with four right angles. A rhombus is a parallelogram with four equal sides. A square is both a rectangle and a rhombus: equal sides and right angles.\n\nPerimeter: rectangle P = 2 · (a + b); square and rhombus P = 4 · a.',
        keyPoints: ['The angles of a quadrilateral add up to 360°.', 'Square = rectangle + rhombus.', 'Rectangle: P = 2(a + b); square, rhombus: P = 4a.'],
        examples: [
          { example: 'Which quadrilateral has all sides equal, but not necessarily right angles?', solution: 'The rhombus.' },
          { example: 'What is the perimeter of an 8 cm × 5 cm rectangle?', solution: 'P = 2 · (8 + 5) = 2 · 13 = 26 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Thinking a square is not a rectangle.', fix: 'A square has all the properties of a rectangle, so it is a special rectangle.' },
        ],
        practice: [
          { problem: 'What is the perimeter of a square with side 6 cm?', solution: '24 cm', steps: ['P = 4 · a.', '4 · 6 = 24 cm.'] },
          { problem: 'A rhombus has a perimeter of 36 cm. How long is a side?', solution: '9 cm', steps: ['P = 4 · a.', 'a = 36 ÷ 4 = 9 cm.'] },
          { problem: 'Three angles of a quadrilateral are 90°, 90° and 120°. What is the fourth?', solution: '60°', steps: ['Sum = 360°.', '360° − 90° − 90° − 120° = 60°.'] },
        ],
      },
      de: {
        title: 'Vierecke',
        objectives: ['Trapez, Parallelogramm, Rechteck, Raute und Quadrat erkennen.', 'Umfang und Winkel von Vierecken berechnen.'],
        theory: 'Ein Viereck hat vier Seiten und vier Winkel; seine Winkelsumme beträgt 360°. Ein Trapez hat mindestens ein Paar paralleler Seiten. Ein Parallelogramm hat zwei Paare paralleler Seiten; gegenüberliegende Seiten sind gleich lang.\n\nEin Rechteck ist ein Parallelogramm mit vier rechten Winkeln. Eine Raute ist ein Parallelogramm mit vier gleich langen Seiten. Ein Quadrat ist zugleich Rechteck und Raute: gleich lange Seiten und rechte Winkel.\n\nUmfang: Rechteck u = 2 · (a + b); Quadrat und Raute u = 4 · a.',
        keyPoints: ['Die Winkelsumme im Viereck beträgt 360°.', 'Quadrat = Rechteck + Raute.', 'Rechteck: u = 2(a + b); Quadrat, Raute: u = 4a.'],
        examples: [
          { example: 'Welches Viereck hat vier gleich lange Seiten, aber nicht unbedingt rechte Winkel?', solution: 'Die Raute.' },
          { example: 'Wie groß ist der Umfang eines Rechtecks mit 8 cm und 5 cm?', solution: 'u = 2 · (8 + 5) = 2 · 13 = 26 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Glauben, ein Quadrat sei kein Rechteck.', fix: 'Ein Quadrat hat alle Eigenschaften eines Rechtecks, ist also ein besonderes Rechteck.' },
        ],
        practice: [
          { problem: 'Wie groß ist der Umfang eines Quadrats mit der Seite 6 cm?', solution: '24 cm', steps: ['u = 4 · a.', '4 · 6 = 24 cm.'] },
          { problem: 'Eine Raute hat den Umfang 36 cm. Wie lang ist eine Seite?', solution: '9 cm', steps: ['u = 4 · a.', 'a = 36 : 4 = 9 cm.'] },
          { problem: 'Drei Winkel eines Vierecks sind 90°, 90° und 120°. Wie groß ist der vierte?', solution: '60°', steps: ['Summe = 360°.', '360° − 90° − 90° − 120° = 60°.'] },
        ],
      },
    },

    // ───────── 3. Circle
    {
      slug: 'g6-geometric-figures-circle',
      visuals: [{
        type: 'geoFigure', view: { xMin: -4.6, xMax: 4.6, yMin: -4.4, yMax: 4.4 }, height: 220,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 3.5, color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [3.5, 0], color: 'secondary', label: 'r' },
          { kind: 'segment', from: [-2.47, 2.47], to: [2.47, -2.47], color: 'success' },
          { kind: 'segment', from: [-3.1, -1.62], to: [-0.4, -3.48], color: 'purple' },
          { kind: 'point', at: [0, 0], label: 'O', labelPos: 'sw', color: 'primary' },
          { kind: 'point', at: [3.5, 0], label: 'A', labelPos: 'e', color: 'secondary' },
          { kind: 'point', at: [-2.47, 2.47], label: 'B', labelPos: 'nw', color: 'success' },
          { kind: 'point', at: [2.47, -2.47], label: 'C', labelPos: 'se', color: 'success' },
          { kind: 'point', at: [-3.1, -1.62], label: 'D', labelPos: 'w', color: 'purple' },
          { kind: 'point', at: [-0.4, -3.48], label: 'E', labelPos: 's', color: 'purple' },
        ],
        caption: alt('OA rreze, BC diametër (d = 2r), DE kordë.', 'OA radius, BC diameter (d = 2r), DE chord.', 'OA Radius, BC Durchmesser (d = 2r), DE Sehne.'),
        alt: alt('Rrethi me qendër O, rrezen OA, diametrin BC që kalon nëpër O dhe kordën DE.', 'A circle with centre O, radius OA, diameter BC through O and chord DE.', 'Ein Kreis mit Mittelpunkt O, Radius OA, Durchmesser BC durch O und Sehne DE.'),
      }],
      answers: {
        examples: [[['2 * 4', 8]], [['13 / 2', 6.5]]],
        practice: ['text', [['2 * 5', 10]], [['3 + 3', 6]]],
      },
      al: {
        title: 'Rrethi',
        objectives: ['Të njihni qendrën, rrezen, diametrin dhe kordën.', 'Të përdorni lidhjen d = 2 · r.'],
        theory: 'Rrethi është vija e mbyllur, pikat e së cilës janë të gjitha njësoj larg nga një pikë e quajtur qendër (O). Largësia nga qendra te çdo pikë e rrethit quhet rreze (r). Rrethin e vizatojmë me kompas: maja në qendër, hapja sa rrezja.\n\nSegmenti që bashkon dy pika të rrethit quhet kordë. Korda që kalon nëpër qendër quhet diametër (d) dhe është korda më e gjatë. Diametri përbëhet nga dy rreze: d = 2 · r.\n\nPjesa e rrethit ndërmjet dy pikave të tij quhet hark.',
        keyPoints: ['Të gjitha pikat e rrethit janë në largësinë r nga qendra.', 'd = 2 · r;  r = d : 2', 'Diametri është korda më e gjatë.'],
        examples: [
          { example: 'Rrezja e rrethit është 4 cm. Sa është diametri?', solution: 'd = 2 · 4 = 8 cm.' },
          { example: 'Diametri i një rrote është 13 cm. Sa është rrezja?', solution: 'r = 13 : 2 = 6,5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Çdo kordë quhet diametër.', fix: 'Diametër është vetëm korda që kalon nëpër qendër.' },
        ],
        practice: [
          { problem: 'Cila është korda më e gjatë e një rrethi?', solution: 'Diametri.', steps: ['Kordat afër qendrës janë më të gjata.', 'Korda që kalon nëpër qendër është diametri.'] },
          { problem: 'Rrezja është 5 cm. Sa është largësia më e madhe ndërmjet dy pikave të rrethit?', solution: '10 cm', steps: ['Largësia më e madhe është diametri.', 'd = 2 · 5 = 10 cm.'] },
          { problem: 'Dy rrathë me rreze 3 cm takohen në një pikë nga jashtë. Sa larg janë qendrat e tyre?', solution: '6 cm', steps: ['Qendrat dhe pika e takimit janë në një drejtëz.', '3 + 3 = 6 cm.'] },
        ],
      },
      en: {
        title: 'The circle',
        objectives: ['Recognise the centre, radius, diameter and chord.', 'Use the relation d = 2 · r.'],
        theory: 'A circle is the closed curve whose points are all the same distance from one point, the centre (O). The distance from the centre to any point of the circle is the radius (r). We draw a circle with compasses: point on the centre, opening equal to the radius.\n\nA segment joining two points of the circle is a chord. A chord through the centre is a diameter (d), the longest chord. A diameter is made of two radii: d = 2 · r.\n\nThe part of the circle between two of its points is an arc.',
        keyPoints: ['All points of the circle are at distance r from the centre.', 'd = 2 · r;  r = d ÷ 2', 'The diameter is the longest chord.'],
        examples: [
          { example: 'A circle has radius 4 cm. What is its diameter?', solution: 'd = 2 · 4 = 8 cm.' },
          { example: 'A wheel has a diameter of 13 cm. What is its radius?', solution: 'r = 13 ÷ 2 = 6.5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Calling every chord a diameter.', fix: 'Only a chord through the centre is a diameter.' },
        ],
        practice: [
          { problem: 'What is the longest chord of a circle?', solution: 'The diameter.', steps: ['Chords closer to the centre are longer.', 'The chord through the centre is the diameter.'] },
          { problem: 'The radius is 5 cm. What is the greatest distance between two points of the circle?', solution: '10 cm', steps: ['The greatest distance is the diameter.', 'd = 2 · 5 = 10 cm.'] },
          { problem: 'Two circles of radius 3 cm touch each other on the outside. How far apart are their centres?', solution: '6 cm', steps: ['The centres and the touching point lie on one line.', '3 + 3 = 6 cm.'] },
        ],
      },
      de: {
        title: 'Der Kreis',
        objectives: ['Mittelpunkt, Radius, Durchmesser und Sehne kennen.', 'Die Beziehung d = 2 · r anwenden.'],
        theory: 'Ein Kreis ist die geschlossene Linie, deren Punkte alle gleich weit von einem Punkt, dem Mittelpunkt (M oder O), entfernt sind. Der Abstand vom Mittelpunkt zu jedem Kreispunkt heißt Radius (r). Einen Kreis zeichnet man mit dem Zirkel: Spitze in den Mittelpunkt, Öffnung gleich dem Radius.\n\nEine Strecke, die zwei Kreispunkte verbindet, heißt Sehne. Eine Sehne durch den Mittelpunkt heißt Durchmesser (d); sie ist die längste Sehne. Der Durchmesser besteht aus zwei Radien: d = 2 · r.\n\nDer Teil des Kreises zwischen zwei seiner Punkte heißt Kreisbogen.',
        keyPoints: ['Alle Kreispunkte haben den Abstand r vom Mittelpunkt.', 'd = 2 · r;  r = d : 2', 'Der Durchmesser ist die längste Sehne.'],
        examples: [
          { example: 'Ein Kreis hat den Radius 4 cm. Wie groß ist der Durchmesser?', solution: 'd = 2 · 4 = 8 cm.' },
          { example: 'Ein Rad hat den Durchmesser 13 cm. Wie groß ist der Radius?', solution: 'r = 13 : 2 = 6,5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Jede Sehne Durchmesser nennen.', fix: 'Nur eine Sehne durch den Mittelpunkt ist ein Durchmesser.' },
        ],
        practice: [
          { problem: 'Welche ist die längste Sehne eines Kreises?', solution: 'Der Durchmesser.', steps: ['Sehnen näher am Mittelpunkt sind länger.', 'Die Sehne durch den Mittelpunkt ist der Durchmesser.'] },
          { problem: 'Der Radius ist 5 cm. Wie groß ist der größte Abstand zwischen zwei Kreispunkten?', solution: '10 cm', steps: ['Der größte Abstand ist der Durchmesser.', 'd = 2 · 5 = 10 cm.'] },
          { problem: 'Zwei Kreise mit Radius 3 cm berühren sich von außen. Wie weit sind ihre Mittelpunkte voneinander entfernt?', solution: '6 cm', steps: ['Mittelpunkte und Berührpunkt liegen auf einer Geraden.', '3 + 3 = 6 cm.'] },
        ],
      },
    },

    // ───────── 4. Constructions with ruler and compasses
    {
      slug: 'g6-geometric-figures-constructions',
      visuals: [{
        type: 'geoFigure', view: { xMin: -4.5, xMax: 8.5, yMin: -3.5, yMax: 4.6 }, height: 210,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 4, color: 'secondary', dashed: true },
          { kind: 'circle', center: [5, 0], r: 3, color: 'success', dashed: true },
          { kind: 'polygon', points: [[0, 0], [5, 0], [3.2, 2.4]], fill: true, color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [5, 0], color: 'primary', label: '5 cm', labelSide: 'right' },
          { kind: 'segment', from: [0, 0], to: [3.2, 2.4], color: 'secondary', label: '4 cm' },
          { kind: 'segment', from: [5, 0], to: [3.2, 2.4], color: 'success', label: '3 cm', labelSide: 'right' },
          { kind: 'point', at: [0, 0], label: 'A', labelPos: 'sw', color: 'primary' },
          { kind: 'point', at: [5, 0], label: 'B', labelPos: 'se', color: 'primary' },
          { kind: 'point', at: [3.2, 2.4], label: 'C', labelPos: 'n', color: 'primary' },
        ],
        caption: alt('Harku me qendër A (4 cm) dhe harku me qendër B (3 cm) priten në C.', 'The arc centred at A (4 cm) and the arc centred at B (3 cm) meet at C.', 'Der Bogen um A (4 cm) und der Bogen um B (3 cm) schneiden sich in C.'),
        alt: alt('Ndërtimi i trekëndëshit me brinjë 5, 4 dhe 3 cm: dy rrathë me qendër A dhe B priten në kulmin C.', 'Constructing a triangle with sides 5, 4 and 3 cm: two circles centred at A and B meet at vertex C.', 'Konstruktion eines Dreiecks mit den Seiten 5, 4 und 3 cm: zwei Kreise um A und B schneiden sich im Eckpunkt C.'),
      }],
      answers: {
        examples: ['text', [['3 + 4 > 8', false]]],
        practice: [[['5 + 5 > 10', false]], 'text', 'text'],
      },
      al: {
        title: 'Ndërtime me vizore dhe kompas',
        objectives: ['Të ndërtoni një trekëndësh kur njihen tri brinjët.', 'Të kontrolloni nëse tri gjatësi formojnë trekëndësh.'],
        theory: 'Me vizore vizatojmë vija të drejta, me kompas rrathë dhe harqe, dhe me to bartim gjatësi pa matur. Për të ndërtuar trekëndëshin me brinjë a, b, c: vizatojmë brinjën AB; me qendër A vizatojmë hark me rreze sa brinja e dytë; me qendër B hark me rreze sa brinja e tretë. Pika ku priten harqet është kulmi C.\n\nJo çdo tri gjatësi formojnë trekëndësh. Harqet priten vetëm kur shuma e çdo dy brinjëve është më e madhe se brinja e tretë (mosbarazimi i trekëndëshit).\n\nP.sh. 3, 4 dhe 8 nuk formojnë trekëndësh, sepse 3 + 4 = 7 < 8: harqet nuk takohen.',
        keyPoints: ['Ndërtimi: brinja e parë, pastaj dy harqe nga skajet e saj.', 'Kusht: a + b > c për çdo dy brinjë.', 'Mos e ndryshoni hapjen e kompasit gjatë një harku.'],
        examples: [
          { example: 'Përshkruani ndërtimin e trekëndëshit me brinjë 6 cm, 5 cm dhe 4 cm.', solution: 'Vizatoni AB = 6 cm. Harku me qendër A dhe rreze 5 cm; harku me qendër B dhe rreze 4 cm. Pika e prerjes është C; bashkoni A me C dhe B me C.' },
          { example: 'A formojnë trekëndësh gjatësitë 3 cm, 4 cm dhe 8 cm?', solution: 'Jo: 3 + 4 = 7, që nuk është më e madhe se 8, pra harqet nuk takohen.' },
        ],
        commonMistakes: [
          { mistake: 'Kontrollohet vetëm një çift brinjësh.', fix: 'Mjafton të kontrolloni dy brinjët më të shkurtra kundër më të gjatës.' },
        ],
        practice: [
          { problem: 'A mund të ndërtohet trekëndësh me brinjë 5 cm, 5 cm dhe 10 cm?', solution: 'Jo', steps: ['Dy më të shkurtrat: 5 + 5 = 10.', '10 nuk është më e madhe se 10: pikat do të ishin në një drejtëz.'] },
          { problem: 'Si e bartni një segment AB në një drejtëz tjetër pa e matur me vizore?', solution: 'Hapni kompasin sa AB, vendoseni majën në një pikë të drejtëzës së re dhe shënoni harkun mbi të.', steps: ['Maja në A, laps te B.', 'Pa e ndryshuar hapjen, maja në pikën e re.', 'Harku pret drejtëzën te skaji i dytë.'] },
          { problem: 'Shkruani hapat për të ndërtuar trekëndësh barabrinjës me brinjë 4 cm.', solution: 'AB = 4 cm; harqe me rreze 4 cm nga A dhe nga B; prerja është C.', steps: ['Vizatoni AB = 4 cm.', 'Kompas 4 cm: hark nga A.', 'Kompas 4 cm: hark nga B.', 'Bashkoni C me A dhe B.'] },
        ],
      },
      en: {
        title: 'Constructions with ruler and compasses',
        objectives: ['Construct a triangle when its three sides are known.', 'Check whether three lengths can form a triangle.'],
        theory: 'With a ruler we draw straight lines, with compasses circles and arcs, and with them we can copy lengths without measuring. To construct a triangle with sides a, b, c: draw side AB; with centre A draw an arc with radius equal to the second side; with centre B an arc with radius equal to the third side. The point where the arcs meet is vertex C.\n\nNot every three lengths make a triangle. The arcs meet only when any two sides together are longer than the third side (the triangle inequality).\n\nFor example 3, 4 and 8 do not make a triangle, because 3 + 4 = 7 < 8: the arcs do not meet.',
        keyPoints: ['Construction: first side, then two arcs from its ends.', 'Condition: a + b > c for every two sides.', 'Do not change the compass opening while drawing an arc.'],
        examples: [
          { example: 'Describe how to construct a triangle with sides 6 cm, 5 cm and 4 cm.', solution: 'Draw AB = 6 cm. Arc centred at A with radius 5 cm; arc centred at B with radius 4 cm. The crossing point is C; join A to C and B to C.' },
          { example: 'Can lengths 3 cm, 4 cm and 8 cm form a triangle?', solution: 'No: 3 + 4 = 7, which is not greater than 8, so the arcs do not meet.' },
        ],
        commonMistakes: [
          { mistake: 'Checking only one pair of sides.', fix: 'It is enough to check the two shorter sides against the longest one.' },
        ],
        practice: [
          { problem: 'Can a triangle with sides 5 cm, 5 cm and 10 cm be constructed?', solution: 'No', steps: ['The two shorter ones: 5 + 5 = 10.', '10 is not greater than 10: the points would lie on one line.'] },
          { problem: 'How do you copy a segment AB onto another line without measuring it with a ruler?', solution: 'Open the compasses to AB, put the point on a point of the new line and mark the arc on it.', steps: ['Point on A, pencil on B.', 'Without changing the opening, point on the new point.', 'The arc crosses the line at the second endpoint.'] },
          { problem: 'Write the steps to construct an equilateral triangle with side 4 cm.', solution: 'AB = 4 cm; arcs with radius 4 cm from A and from B; the crossing point is C.', steps: ['Draw AB = 4 cm.', 'Compasses 4 cm: arc from A.', 'Compasses 4 cm: arc from B.', 'Join C to A and B.'] },
        ],
      },
      de: {
        title: 'Konstruktionen mit Zirkel und Lineal',
        objectives: ['Ein Dreieck aus drei gegebenen Seiten konstruieren.', 'Prüfen, ob drei Längen ein Dreieck bilden.'],
        theory: 'Mit dem Lineal zeichnet man gerade Linien, mit dem Zirkel Kreise und Bögen; damit lassen sich Längen ohne Messen übertragen. Ein Dreieck mit den Seiten a, b, c konstruiert man so: Seite AB zeichnen; um A einen Bogen mit dem Radius der zweiten Seite; um B einen Bogen mit dem Radius der dritten Seite. Der Schnittpunkt der Bögen ist der Eckpunkt C.\n\nNicht alle drei Längen ergeben ein Dreieck. Die Bögen schneiden sich nur, wenn je zwei Seiten zusammen länger als die dritte sind (Dreiecksungleichung).\n\nZum Beispiel bilden 3, 4 und 8 kein Dreieck, denn 3 + 4 = 7 < 8: Die Bögen treffen sich nicht.',
        keyPoints: ['Konstruktion: erste Seite, dann zwei Bögen um ihre Endpunkte.', 'Bedingung: a + b > c für je zwei Seiten.', 'Die Zirkelöffnung beim Zeichnen eines Bogens nicht ändern.'],
        examples: [
          { example: 'Beschreiben Sie die Konstruktion eines Dreiecks mit den Seiten 6 cm, 5 cm und 4 cm.', solution: 'AB = 6 cm zeichnen. Bogen um A mit Radius 5 cm; Bogen um B mit Radius 4 cm. Der Schnittpunkt ist C; A mit C und B mit C verbinden.' },
          { example: 'Bilden die Längen 3 cm, 4 cm und 8 cm ein Dreieck?', solution: 'Nein: 3 + 4 = 7, das ist nicht größer als 8, die Bögen treffen sich nicht.' },
        ],
        commonMistakes: [
          { mistake: 'Nur ein Seitenpaar prüfen.', fix: 'Es reicht, die zwei kürzeren Seiten mit der längsten zu vergleichen.' },
        ],
        practice: [
          { problem: 'Kann man ein Dreieck mit den Seiten 5 cm, 5 cm und 10 cm konstruieren?', solution: 'Nein', steps: ['Die beiden kürzeren: 5 + 5 = 10.', '10 ist nicht größer als 10: Die Punkte lägen auf einer Geraden.'] },
          { problem: 'Wie überträgt man eine Strecke AB auf eine andere Gerade, ohne sie mit dem Lineal zu messen?', solution: 'Zirkel auf AB öffnen, Spitze auf einen Punkt der neuen Geraden setzen und den Bogen auf ihr markieren.', steps: ['Spitze auf A, Mine auf B.', 'Öffnung nicht ändern, Spitze auf den neuen Punkt.', 'Der Bogen schneidet die Gerade im zweiten Endpunkt.'] },
          { problem: 'Schreiben Sie die Schritte zur Konstruktion eines gleichseitigen Dreiecks mit der Seite 4 cm auf.', solution: 'AB = 4 cm; Bögen mit Radius 4 cm um A und um B; der Schnittpunkt ist C.', steps: ['AB = 4 cm zeichnen.', 'Zirkel 4 cm: Bogen um A.', 'Zirkel 4 cm: Bogen um B.', 'C mit A und B verbinden.'] },
        ],
      },
    },
  ],
};
