// Grade 7 · Theme 2: Angles (September–October)
const alt = (al, en, de) => ({ al, en, de });
const d = (deg, r = 3, o = [0, 0]) => [o[0] + r * Math.cos((deg * Math.PI) / 180), o[1] + r * Math.sin((deg * Math.PI) / 180)];

export default {
  id: 'g7-angles',
  i18n: {
    al: { title: 'Këndet', description: 'Këndet plotësuese, shtuese dhe të kundërta në kulm, këndet te drejtëzat paralele, largësia e pikës nga drejtëza dhe projeksioni.' },
    en: { title: 'Angles', description: 'Complementary, supplementary and vertically opposite angles, angles at parallel lines, distance from a point to a line, and projection.' },
    de: { title: 'Winkel', description: 'Komplement-, Neben- und Scheitelwinkel, Winkel an Parallelen, Abstand eines Punktes von einer Geraden und Projektion.' },
  },
  lessons: [
    // ───────── 1. Special angle pairs
    {
      slug: 'g7-angles-special-angles',
      visuals: [{
        type: 'geoFigure', view: { xMin: -4, xMax: 4, yMin: -3, yMax: 3 }, height: 180,
        shapes: [
          { kind: 'line', through: [d(245), d(65)], color: 'primary' },
          { kind: 'line', through: [[-3, 0], [3, 0]], color: 'primary' },
          { kind: 'angle', vertex: [0, 0], from: [3, 0], to: d(65), label: '65°', color: 'secondary', r: 24 },
          { kind: 'angle', vertex: [0, 0], from: d(65), to: [-3, 0], label: '115°', color: 'success', r: 18 },
          { kind: 'angle', vertex: [0, 0], from: [-3, 0], to: d(245), label: '65°', color: 'secondary', r: 24 },
          { kind: 'point', at: [0, 0], color: 'primary' },
        ],
        caption: alt('Këndet e kundërta në kulm janë të barabarta (65° dhe 65°); dy kënde fqinje në një drejtëz janë shtuese (65° + 115° = 180°).', 'Vertically opposite angles are equal (65° and 65°); two neighbouring angles on a line are supplementary (65° + 115° = 180°).', 'Scheitelwinkel sind gleich groß (65° und 65°); zwei Nebenwinkel ergänzen sich zu 180° (65° + 115°).'),
        alt: alt('Dy drejtëza që priten, me këndet 65°, 115° dhe 65°.', 'Two crossing lines with angles of 65°, 115° and 65°.', 'Zwei sich schneidende Geraden mit Winkeln von 65°, 115° und 65°.'),
      }],
      answers: {
        examples: [[['90 - 47', 43]], [['180 - 65', 115]]],
        practice: [[['180 - 38', 142]], [['90 - 72', 18]], [['140 / 2', 70]]],
      },
      al: {
        title: 'Këndet e veçanta',
        objectives: ['Të njihni këndet plotësuese, shtuese dhe të kundërta në kulm.', 'Të gjeni një kënd të panjohur me ndihmën e tyre.'],
        theory: 'Dy kënde janë plotësuese kur shuma e tyre është 90°, dhe shtuese kur shuma e tyre është 180°. Dy kënde fqinje, krahët e jashtëm të të cilëve formojnë një drejtëz, janë gjithmonë shtuese.\n\nKur dy drejtëza priten, formohen katër kënde. Këndet përballë njëri-tjetrit quhen të kundërta në kulm dhe janë të barabarta.\n\nPrandaj, nëse dimë një kënd ku priten dy drejtëza, i gjejmë të gjithë: këndi i kundërt në kulm është i njëjtë, ndërsa fqinjët janë 180° minus ai.',
        keyPoints: ['Plotësuese: α + β = 90°', 'Shtuese: α + β = 180°', 'Të kundërta në kulm: të barabarta.'],
        examples: [
          { example: 'Dy kënde janë plotësuese. Njëri është 47°. Sa është tjetri?', solution: '90° − 47° = 43°.' },
          { example: 'Dy drejtëza priten dhe njëri kënd është 65°. Sa janë tre këndet e tjera?', solution: 'I kundërti në kulm: 65°. Fqinjët: 180° − 65° = 115° secili.' },
        ],
        commonMistakes: [
          { mistake: 'Ngatërrohen plotësuese (90°) dhe shtuese (180°).', fix: 'Plotësuese "plotësojnë" këndin e drejtë (90°); shtuese "shtojnë" deri në drejtëz (180°).' },
        ],
        practice: [
          { problem: 'Gjeni këndin shtues të 38°.', solution: '142°', steps: ['Shuma = 180°.', '180° − 38° = 142°.'] },
          { problem: 'Gjeni këndin plotësues të 72°.', solution: '18°', steps: ['Shuma = 90°.', '90° − 72° = 18°.'] },
          { problem: 'Dy kënde të kundërta në kulm kanë shumë 140°. Sa është secili?', solution: '70°', steps: ['Ato janë të barabarta.', '140° : 2 = 70°.'] },
        ],
      },
      en: {
        title: 'Special angle pairs',
        objectives: ['Recognise complementary, supplementary and vertically opposite angles.', 'Use them to find an unknown angle.'],
        theory: 'Two angles are complementary when they add up to 90°, and supplementary when they add up to 180°. Two neighbouring angles whose outer arms form a straight line are always supplementary.\n\nWhen two lines cross, four angles are formed. The angles opposite each other are called vertically opposite angles, and they are equal.\n\nSo if we know one angle where two lines cross, we know them all: the vertically opposite angle is the same, and the neighbours are 180° minus it.',
        keyPoints: ['Complementary: α + β = 90°', 'Supplementary: α + β = 180°', 'Vertically opposite: equal.'],
        examples: [
          { example: 'Two angles are complementary. One is 47°. What is the other?', solution: '90° − 47° = 43°.' },
          { example: 'Two lines cross and one angle is 65°. What are the other three?', solution: 'The vertically opposite angle: 65°. The neighbours: 180° − 65° = 115° each.' },
        ],
        commonMistakes: [
          { mistake: 'Mixing up complementary (90°) and supplementary (180°).', fix: 'Complementary completes a right angle (90°); supplementary makes a straight line (180°).' },
        ],
        practice: [
          { problem: 'Find the supplement of 38°.', solution: '142°', steps: ['Sum = 180°.', '180° − 38° = 142°.'] },
          { problem: 'Find the complement of 72°.', solution: '18°', steps: ['Sum = 90°.', '90° − 72° = 18°.'] },
          { problem: 'Two vertically opposite angles add up to 140°. What is each angle?', solution: '70°', steps: ['They are equal.', '140° ÷ 2 = 70°.'] },
        ],
      },
      de: {
        title: 'Besondere Winkelpaare',
        objectives: ['Komplementwinkel, Nebenwinkel und Scheitelwinkel erkennen.', 'Damit einen unbekannten Winkel bestimmen.'],
        theory: 'Zwei Winkel heißen Komplementwinkel, wenn ihre Summe 90° beträgt, und Supplementwinkel, wenn ihre Summe 180° beträgt. Zwei benachbarte Winkel, deren äußere Schenkel eine Gerade bilden, heißen Nebenwinkel; sie ergänzen sich immer zu 180°.\n\nWenn sich zwei Geraden schneiden, entstehen vier Winkel. Die gegenüberliegenden heißen Scheitelwinkel und sind gleich groß.\n\nKennt man also einen Winkel am Schnittpunkt zweier Geraden, kennt man alle: Der Scheitelwinkel ist gleich groß, die Nebenwinkel sind 180° minus diesen Winkel.',
        keyPoints: ['Komplementwinkel: α + β = 90°', 'Neben-/Supplementwinkel: α + β = 180°', 'Scheitelwinkel: gleich groß.'],
        examples: [
          { example: 'Zwei Winkel sind Komplementwinkel. Einer ist 47°. Wie groß ist der andere?', solution: '90° − 47° = 43°.' },
          { example: 'Zwei Geraden schneiden sich, ein Winkel ist 65°. Wie groß sind die anderen drei?', solution: 'Scheitelwinkel: 65°. Nebenwinkel: je 180° − 65° = 115°.' },
        ],
        commonMistakes: [
          { mistake: 'Komplementwinkel (90°) und Supplementwinkel (180°) verwechseln.', fix: 'Komplementwinkel ergänzen zum rechten Winkel (90°), Nebenwinkel zur Geraden (180°).' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Supplementwinkel von 38°.', solution: '142°', steps: ['Summe = 180°.', '180° − 38° = 142°.'] },
          { problem: 'Bestimmen Sie den Komplementwinkel von 72°.', solution: '18°', steps: ['Summe = 90°.', '90° − 72° = 18°.'] },
          { problem: 'Zwei Scheitelwinkel sind zusammen 140°. Wie groß ist jeder?', solution: '70°', steps: ['Sie sind gleich groß.', '140° : 2 = 70°.'] },
        ],
      },
    },

    // ───────── 2. Parallel lines and a transversal
    {
      slug: 'g7-angles-parallels-transversal',
      visuals: [{
        type: 'geoFigure', view: { xMin: -4.5, xMax: 4.5, yMin: -2.6, yMax: 2.6 }, height: 190,
        shapes: [
          { kind: 'line', through: [[-4, 1.3], [4, 1.3]], color: 'primary', label: 'a' },
          { kind: 'line', through: [[-4, -1.3], [4, -1.3]], color: 'primary', label: 'b' },
          { kind: 'line', through: [[-1.2, -2.6], [1.2, 2.6]], color: 'secondary' },
          { kind: 'angle', vertex: [0.6, 1.3], from: [3, 1.3], to: [1.2, 2.6], label: '65°', color: 'success', r: 20 },
          { kind: 'angle', vertex: [-0.6, -1.3], from: [3, -1.3], to: [0, 0], label: '65°', color: 'success', r: 20 },
          { kind: 'angle', vertex: [-0.6, -1.3], from: [0, 0], to: [-4, -1.3], label: '115°', color: 'purple', r: 14 },
        ],
        caption: alt('Prerëse që pret dy drejtëza paralele: këndet përkatëse janë të barabarta (65° dhe 65°).', 'A transversal crossing two parallel lines: corresponding angles are equal (65° and 65°).', 'Eine Gerade schneidet zwei Parallelen: Stufenwinkel sind gleich groß (65° und 65°).'),
        alt: alt('Dy drejtëza paralele a dhe b të prera nga një prerëse; këndet 65°, 65° dhe 115°.', 'Two parallel lines a and b crossed by a transversal; angles 65°, 65° and 115°.', 'Zwei Parallelen a und b, von einer Geraden geschnitten; Winkel 65°, 65° und 115°.'),
      }],
      answers: {
        examples: [[['180 - 65', 115]], [['180 - 70', 110]]],
        practice: [[['48', 48]], [['130', 130]], [['180 - 125', 55]]],
      },
      al: {
        title: 'Drejtëzat paralele dhe prerësja',
        objectives: ['Të njihni këndet përkatëse, alterne dhe të njëanshme.', 'Të gjeni të gjitha këndet kur një prerëse pret dy drejtëza paralele.'],
        theory: 'Kur një drejtëz (prerësja ose transversalja) pret dy drejtëza paralele, formohen tetë kënde, katër te secila pikëprerje.\n\nKëndet përkatëse (në të njëjtin pozicion te të dy pikëprerjet) janë të barabarta. Këndet alterne (në anë të kundërta të prerëses, ndërmjet paraleleve) janë të barabarta. Këndet e njëanshme (në të njëjtën anë të prerëses, ndërmjet paraleleve) janë shtuese: shuma e tyre është 180°.\n\nKështu, nga një kënd i vetëm i gjejmë të tetë: ata janë ose të barabartë me të, ose 180° minus ai.',
        keyPoints: ['Përkatëse: të barabarta.', 'Alterne: të barabarta.', 'Të njëanshme: shuma 180°.'],
        examples: [
          { example: 'Dy drejtëza paralele priten nga një prerëse. Një kënd është 65°. Sa janë këndet e tjera?', solution: 'Të gjitha këndet janë ose 65° ose 180° − 65° = 115°.' },
          { example: 'Njëri nga dy këndet e njëanshme është 70°. Sa është tjetri?', solution: 'Të njëanshmet janë shtuese: 180° − 70° = 110°.' },
        ],
        commonMistakes: [
          { mistake: 'Rregullat përdoren edhe kur drejtëzat nuk janë paralele.', fix: 'Këndet përkatëse dhe alterne janë të barabarta vetëm te drejtëzat paralele.' },
        ],
        practice: [
          { problem: 'Një kënd alterne është 48°. Sa është këndi alterne me të?', solution: '48°', steps: ['Këndet alterne janë të barabarta.', 'Pra 48°.'] },
          { problem: 'Një kënd është 130°. Sa është këndi përkatës i tij?', solution: '130°', steps: ['Këndet përkatëse janë të barabarta.', 'Pra 130°.'] },
          { problem: 'Njëri nga dy këndet e njëanshme është 125°. Sa është tjetri?', solution: '55°', steps: ['Shuma = 180°.', '180° − 125° = 55°.'] },
        ],
      },
      en: {
        title: 'Parallel lines and a transversal',
        objectives: ['Recognise corresponding, alternate and co-interior angles.', 'Find all the angles when a transversal crosses two parallel lines.'],
        theory: 'When a line (the transversal) crosses two parallel lines, eight angles are formed, four at each crossing.\n\nCorresponding angles (in the same position at both crossings) are equal. Alternate angles (on opposite sides of the transversal, between the parallels) are equal. Co-interior angles (on the same side of the transversal, between the parallels) are supplementary: they add up to 180°.\n\nSo from a single angle we find all eight: each is either equal to it or 180° minus it.',
        keyPoints: ['Corresponding: equal.', 'Alternate: equal.', 'Co-interior: sum 180°.'],
        examples: [
          { example: 'Two parallel lines are crossed by a transversal. One angle is 65°. What are the other angles?', solution: 'Every angle is either 65° or 180° − 65° = 115°.' },
          { example: 'One of two co-interior angles is 70°. What is the other?', solution: 'Co-interior angles are supplementary: 180° − 70° = 110°.' },
        ],
        commonMistakes: [
          { mistake: 'Using the rules when the lines are not parallel.', fix: 'Corresponding and alternate angles are equal only for parallel lines.' },
        ],
        practice: [
          { problem: 'An angle is 48°. What is the angle alternate to it?', solution: '48°', steps: ['Alternate angles are equal.', 'So 48°.'] },
          { problem: 'An angle is 130°. What is its corresponding angle?', solution: '130°', steps: ['Corresponding angles are equal.', 'So 130°.'] },
          { problem: 'One of two co-interior angles is 125°. What is the other?', solution: '55°', steps: ['Sum = 180°.', '180° − 125° = 55°.'] },
        ],
      },
      de: {
        title: 'Winkel an geschnittenen Parallelen',
        objectives: ['Stufenwinkel, Wechselwinkel und Nachbarwinkel erkennen.', 'Alle Winkel bestimmen, wenn eine Gerade zwei Parallelen schneidet.'],
        theory: 'Schneidet eine Gerade zwei parallele Geraden, entstehen acht Winkel, vier an jedem Schnittpunkt.\n\nStufenwinkel (an beiden Schnittpunkten in derselben Lage) sind gleich groß. Wechselwinkel (auf verschiedenen Seiten der schneidenden Geraden, zwischen den Parallelen) sind gleich groß. Nachbarwinkel (entgegengesetzte Winkel: auf derselben Seite der schneidenden Geraden, zwischen den Parallelen) ergänzen sich zu 180°.\n\nAus einem einzigen Winkel erhält man also alle acht: Jeder ist entweder gleich groß oder 180° minus diesen Winkel.',
        keyPoints: ['Stufenwinkel: gleich groß.', 'Wechselwinkel: gleich groß.', 'Nachbarwinkel (entgegengesetzte Winkel): Summe 180°.'],
        examples: [
          { example: 'Zwei Parallelen werden von einer Geraden geschnitten. Ein Winkel ist 65°. Wie groß sind die anderen?', solution: 'Jeder Winkel ist entweder 65° oder 180° − 65° = 115°.' },
          { example: 'Einer von zwei entgegengesetzten Winkeln ist 70°. Wie groß ist der andere?', solution: 'Sie ergänzen sich zu 180°: 180° − 70° = 110°.' },
        ],
        commonMistakes: [
          { mistake: 'Die Regeln anwenden, obwohl die Geraden nicht parallel sind.', fix: 'Stufen- und Wechselwinkel sind nur an Parallelen gleich groß.' },
        ],
        practice: [
          { problem: 'Ein Winkel ist 48°. Wie groß ist sein Wechselwinkel?', solution: '48°', steps: ['Wechselwinkel sind gleich groß.', 'Also 48°.'] },
          { problem: 'Ein Winkel ist 130°. Wie groß ist sein Stufenwinkel?', solution: '130°', steps: ['Stufenwinkel sind gleich groß.', 'Also 130°.'] },
          { problem: 'Einer von zwei entgegengesetzten Winkeln ist 125°. Wie groß ist der andere?', solution: '55°', steps: ['Summe = 180°.', '180° − 125° = 55°.'] },
        ],
      },
    },

    // ───────── 3. Distance from a point to a line
    {
      slug: 'g7-angles-point-line-distance',
      visuals: [{
        type: 'geoFigure', view: { xMin: -4.5, xMax: 4.5, yMin: -0.8, yMax: 3.8 }, height: 170,
        shapes: [
          { kind: 'line', through: [[-4, 0], [4, 0]], color: 'primary', label: 'a' },
          { kind: 'segment', from: [0, 3], to: [0, 0], color: 'success', label: 'd' },
          { kind: 'segment', from: [0, 3], to: [-3, 0], color: 'muted', dashed: true },
          { kind: 'segment', from: [0, 3], to: [2.5, 0], color: 'muted', dashed: true },
          { kind: 'angle', vertex: [0, 0], from: [3, 0], to: [0, 3], right: true, color: 'success' },
          { kind: 'point', at: [0, 3], label: 'P', color: 'secondary', labelPos: 'n' },
          { kind: 'point', at: [0, 0], label: 'H', color: 'success', labelPos: 's' },
        ],
        caption: alt('Segmenti pingul PH është më i shkurtri nga P te drejtëza; gjatësia e tij është largësia.', 'The perpendicular segment PH is the shortest from P to the line; its length is the distance.', 'Die Lotstrecke PH ist die kürzeste Verbindung von P zur Geraden; ihre Länge ist der Abstand.'),
        alt: alt('Pika P mbi drejtëzën a, segmenti pingul PH dhe dy segmente të pjerrëta më të gjata.', 'Point P above line a, the perpendicular segment PH and two longer slanted segments.', 'Punkt P über der Geraden a, die Lotstrecke PH und zwei längere schräge Strecken.'),
      }],
      answers: {
        examples: ['text', [['5', 5]]],
        practice: [[['abs(-3)', 3]], [['6 - 1', 5]], [['abs(-2)', 2]]],
      },
      al: {
        title: 'Largësia e pikës nga drejtëza',
        objectives: ['Të dini se largësia e pikës nga drejtëza matet në pingul.', 'Të gjeni largësinë në rrjetën koordinative.'],
        theory: 'Nga një pikë P jashtë drejtëzës a mund të vizatojmë shumë segmente deri te drejtëza. Më i shkurtri është segmenti pingul PH; pika H quhet këmba e pingules.\n\nLargësia e pikës nga drejtëza është gjatësia e këtij segmenti pingul. Çdo segment tjetër nga P te drejtëza është më i gjatë.\n\nNë rrjetën koordinative: largësia e pikës (x, y) nga boshti x është vlera e |y|, ndërsa nga boshti y është |x|. Largësia ndërmjet dy drejtëzave paralele është largësia e çdo pike të njërës nga tjetra.',
        keyPoints: ['Largësia = gjatësia e pingules.', 'Pingulja është segmenti më i shkurtër.', 'Nga boshti x: |y|; nga boshti y: |x|.'],
        examples: [
          { example: 'Nga pika P janë vizatuar tri segmente te drejtëza a. Cili tregon largësinë?', solution: 'Ai që është pingul me a (formon kënd 90°); ai është edhe më i shkurtri.' },
          { example: 'Sa është largësia e pikës P(2, 5) nga boshti x?', solution: 'Pingulja nga P bie te (2, 0); gjatësia është 5.' },
        ],
        commonMistakes: [
          { mistake: 'Largësia matet përgjatë një segmenti të pjerrët.', fix: 'Gjithmonë me pingulen, nën kënd 90° me drejtëzën.' },
        ],
        practice: [
          { problem: 'Sa është largësia e pikës (−3, 4) nga boshti y?', solution: '3', steps: ['Largësia nga boshti y është |x|.', '|−3| = 3.'] },
          { problem: 'Sa është largësia ndërmjet drejtëzave paralele y = 1 dhe y = 6?', solution: '5', steps: ['Të dyja janë horizontale.', '6 − 1 = 5.'] },
          { problem: 'Sa është largësia e pikës (4, −2) nga boshti x?', solution: '2', steps: ['Largësia nga boshti x është |y|.', '|−2| = 2.'] },
        ],
      },
      en: {
        title: 'Distance from a point to a line',
        objectives: ['Know that the distance from a point to a line is measured along the perpendicular.', 'Find distances on the coordinate grid.'],
        theory: 'From a point P not on line a we can draw many segments to the line. The shortest is the perpendicular segment PH; the point H is called the foot of the perpendicular.\n\nThe distance from the point to the line is the length of this perpendicular segment. Every other segment from P to the line is longer.\n\nOn the coordinate grid: the distance of the point (x, y) from the x-axis is |y|, and from the y-axis it is |x|. The distance between two parallel lines is the distance from any point of one to the other.',
        keyPoints: ['Distance = length of the perpendicular.', 'The perpendicular is the shortest segment.', 'From the x-axis: |y|; from the y-axis: |x|.'],
        examples: [
          { example: 'Three segments are drawn from point P to line a. Which one shows the distance?', solution: 'The one perpendicular to a (at 90°); it is also the shortest.' },
          { example: 'What is the distance of the point P(2, 5) from the x-axis?', solution: 'The perpendicular from P meets the axis at (2, 0); its length is 5.' },
        ],
        commonMistakes: [
          { mistake: 'Measuring the distance along a slanted segment.', fix: 'Always along the perpendicular, at 90° to the line.' },
        ],
        practice: [
          { problem: 'What is the distance of the point (−3, 4) from the y-axis?', solution: '3', steps: ['The distance from the y-axis is |x|.', '|−3| = 3.'] },
          { problem: 'What is the distance between the parallel lines y = 1 and y = 6?', solution: '5', steps: ['Both are horizontal.', '6 − 1 = 5.'] },
          { problem: 'What is the distance of the point (4, −2) from the x-axis?', solution: '2', steps: ['The distance from the x-axis is |y|.', '|−2| = 2.'] },
        ],
      },
      de: {
        title: 'Abstand eines Punktes von einer Geraden',
        objectives: ['Wissen, dass der Abstand eines Punktes von einer Geraden entlang des Lotes gemessen wird.', 'Abstände im Koordinatensystem bestimmen.'],
        theory: 'Von einem Punkt P außerhalb der Geraden a kann man viele Strecken zur Geraden zeichnen. Die kürzeste ist die Lotstrecke PH; der Punkt H heißt Lotfußpunkt.\n\nDer Abstand des Punktes von der Geraden ist die Länge dieser Lotstrecke. Jede andere Strecke von P zur Geraden ist länger.\n\nIm Koordinatensystem: Der Abstand des Punktes (x | y) von der x-Achse ist |y|, von der y-Achse |x|. Der Abstand zweier paralleler Geraden ist der Abstand irgendeines Punktes der einen von der anderen.',
        keyPoints: ['Abstand = Länge des Lotes.', 'Das Lot ist die kürzeste Strecke.', 'Von der x-Achse: |y|; von der y-Achse: |x|.'],
        examples: [
          { example: 'Von einem Punkt P sind drei Strecken zur Geraden a gezeichnet. Welche zeigt den Abstand?', solution: 'Die, die senkrecht auf a steht (90°); sie ist auch die kürzeste.' },
          { example: 'Wie groß ist der Abstand des Punktes P(2 | 5) von der x-Achse?', solution: 'Das Lot von P trifft die Achse in (2 | 0); seine Länge ist 5.' },
        ],
        commonMistakes: [
          { mistake: 'Den Abstand entlang einer schrägen Strecke messen.', fix: 'Immer entlang des Lotes, im rechten Winkel zur Geraden.' },
        ],
        practice: [
          { problem: 'Wie groß ist der Abstand des Punktes (−3 | 4) von der y-Achse?', solution: '3', steps: ['Der Abstand von der y-Achse ist |x|.', '|−3| = 3.'] },
          { problem: 'Wie groß ist der Abstand der Parallelen y = 1 und y = 6?', solution: '5', steps: ['Beide verlaufen waagerecht.', '6 − 1 = 5.'] },
          { problem: 'Wie groß ist der Abstand des Punktes (4 | −2) von der x-Achse?', solution: '2', steps: ['Der Abstand von der x-Achse ist |y|.', '|−2| = 2.'] },
        ],
      },
    },

    // ───────── 4. Projection
    {
      slug: 'g7-angles-projection',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 6.5, yMin: -1, yMax: 5 }, grid: true, axes: true, height: 200,
        shapes: [
          { kind: 'segment', from: [1, 4], to: [5, 1], color: 'primary' },
          { kind: 'segment', from: [1, 4], to: [1, 0], color: 'muted', dashed: true },
          { kind: 'segment', from: [5, 1], to: [5, 0], color: 'muted', dashed: true },
          { kind: 'segment', from: [1, 0], to: [5, 0], color: 'secondary' },
          { kind: 'point', at: [1, 4], label: 'A', color: 'primary' },
          { kind: 'point', at: [5, 1], label: 'B', color: 'primary' },
          { kind: 'point', at: [1, 0], label: "A'", color: 'secondary', labelPos: 'sw' },
          { kind: 'point', at: [5, 0], label: "B'", color: 'secondary', labelPos: 'se' },
        ],
        caption: alt("Projeksioni i AB në boshtin x është A'B', me gjatësi 5 − 1 = 4.", "The projection of AB onto the x-axis is A'B', of length 5 − 1 = 4.", "Die Projektion von AB auf die x-Achse ist A'B' mit der Länge 5 − 1 = 4."),
        alt: alt("Segmenti AB dhe projeksioni i tij A'B' në boshtin x, me pingule të ndërprera.", "Segment AB and its projection A'B' onto the x-axis, with dashed perpendiculars.", "Die Strecke AB und ihre Projektion A'B' auf die x-Achse, mit gestrichelten Loten."),
      }],
      answers: {
        examples: ['text', [['5 - 1', 4]]],
        practice: [[['3 - (-2)', 5]], [['7 - 3', 4]], 'text'],
      },
      al: {
        title: 'Projeksioni',
        objectives: ['Të gjeni projeksionin pingul të një pike dhe të një segmenti në një drejtëz.', 'Të llogaritni gjatësinë e projeksionit në boshtet koordinative.'],
        theory: 'Projeksioni (pingul) i pikës A në drejtëzën a është këmba A\' e pingules nga A te a. Është si hija e pikës kur drita bie pingul mbi drejtëzën.\n\nProjeksioni i segmentit AB është segmenti A\'B\' ndërmjet projeksioneve të skajeve. Kur AB është paralel me drejtëzën, projeksioni ka të njëjtën gjatësi; kur AB është pingul me drejtëzën, projeksioni është një pikë; përndryshe është më i shkurtër se AB.\n\nNë boshtin x, projeksioni i pikës (x, y) është (x, 0). Gjatësia e projeksionit të segmentit në boshtin x është ndryshesa e x-ve të skajeve.',
        keyPoints: ['Projeksioni i pikës = këmba e pingules.', 'Projeksioni i segmentit nuk është kurrë më i gjatë se segmenti.', 'Në boshtin x: (x, y) → (x, 0).'],
        examples: [
          { example: 'Si duket projeksioni i segmentit AB kur AB është pingul me drejtëzën?', solution: 'Të dy skajet bien në të njëjtën pikë, pra projeksioni është një pikë.' },
          { example: 'A(1, 4) dhe B(5, 1). Sa është gjatësia e projeksionit të AB në boshtin x?', solution: 'A\'(1, 0), B\'(5, 0); gjatësia 5 − 1 = 4.' },
        ],
        commonMistakes: [
          { mistake: 'Projeksioni vizatohet me vija të pjerrëta.', fix: 'Vijat nga pikat te drejtëza duhet të jenë pingule me të.' },
        ],
        practice: [
          { problem: 'Sa është gjatësia e projeksionit të segmentit nga (−2, 3) te (3, 7) në boshtin x?', solution: '5', steps: ['Projeksionet: (−2, 0) dhe (3, 0).', '3 − (−2) = 5.'] },
          { problem: 'Sa është gjatësia e projeksionit të të njëjtit segment në boshtin y?', solution: '4', steps: ['Projeksionet: (0, 3) dhe (0, 7).', '7 − 3 = 4.'] },
          { problem: 'Cili është projeksioni i pikës (6, −1) në boshtin x?', solution: '(6, 0)', steps: ['x mbetet 6.', 'y bëhet 0.'] },
        ],
      },
      en: {
        title: 'Projection',
        objectives: ['Find the orthogonal projection of a point and of a segment onto a line.', 'Work out the length of a projection onto the coordinate axes.'],
        theory: 'The (orthogonal) projection of point A onto line a is the foot A\' of the perpendicular from A to a. It is like the shadow of the point when light falls straight down onto the line.\n\nThe projection of segment AB is the segment A\'B\' between the projections of its endpoints. When AB is parallel to the line, the projection has the same length; when AB is perpendicular to the line, the projection is a single point; otherwise it is shorter than AB.\n\nOnto the x-axis, the projection of the point (x, y) is (x, 0). The length of a segment\'s projection onto the x-axis is the difference of the x-values of its endpoints.',
        keyPoints: ['Projection of a point = foot of the perpendicular.', 'The projection of a segment is never longer than the segment.', 'Onto the x-axis: (x, y) → (x, 0).'],
        examples: [
          { example: 'What does the projection of segment AB look like when AB is perpendicular to the line?', solution: 'Both endpoints land on the same point, so the projection is a single point.' },
          { example: 'A(1, 4) and B(5, 1). How long is the projection of AB onto the x-axis?', solution: 'A\'(1, 0), B\'(5, 0); length 5 − 1 = 4.' },
        ],
        commonMistakes: [
          { mistake: 'Drawing the projection with slanted lines.', fix: 'The lines from the points to the line must be perpendicular to it.' },
        ],
        practice: [
          { problem: 'How long is the projection of the segment from (−2, 3) to (3, 7) onto the x-axis?', solution: '5', steps: ['Projections: (−2, 0) and (3, 0).', '3 − (−2) = 5.'] },
          { problem: 'How long is the projection of the same segment onto the y-axis?', solution: '4', steps: ['Projections: (0, 3) and (0, 7).', '7 − 3 = 4.'] },
          { problem: 'What is the projection of the point (6, −1) onto the x-axis?', solution: '(6, 0)', steps: ['x stays 6.', 'y becomes 0.'] },
        ],
      },
      de: {
        title: 'Projektion',
        objectives: ['Die senkrechte Projektion eines Punktes und einer Strecke auf eine Gerade bestimmen.', 'Die Länge einer Projektion auf die Koordinatenachsen berechnen.'],
        theory: 'Die (senkrechte) Projektion des Punktes A auf die Gerade a ist der Lotfußpunkt A\' des Lotes von A auf a. Man kann sie sich als Schatten des Punktes vorstellen, wenn das Licht senkrecht auf die Gerade fällt.\n\nDie Projektion der Strecke AB ist die Strecke A\'B\' zwischen den Projektionen der Endpunkte. Ist AB parallel zur Geraden, ist die Projektion gleich lang; steht AB senkrecht auf der Geraden, ist die Projektion ein Punkt; sonst ist sie kürzer als AB.\n\nAuf die x-Achse projiziert wird der Punkt (x | y) zu (x | 0). Die Länge der Projektion einer Strecke auf die x-Achse ist die Differenz der x-Werte ihrer Endpunkte.',
        keyPoints: ['Projektion eines Punktes = Lotfußpunkt.', 'Die Projektion einer Strecke ist nie länger als die Strecke.', 'Auf die x-Achse: (x | y) → (x | 0).'],
        examples: [
          { example: 'Wie sieht die Projektion der Strecke AB aus, wenn AB senkrecht auf der Geraden steht?', solution: 'Beide Endpunkte fallen auf denselben Punkt, die Projektion ist also ein Punkt.' },
          { example: 'A(1 | 4) und B(5 | 1). Wie lang ist die Projektion von AB auf die x-Achse?', solution: 'A\'(1 | 0), B\'(5 | 0); Länge 5 − 1 = 4.' },
        ],
        commonMistakes: [
          { mistake: 'Die Projektion mit schrägen Linien zeichnen.', fix: 'Die Linien von den Punkten zur Geraden müssen senkrecht auf ihr stehen.' },
        ],
        practice: [
          { problem: 'Wie lang ist die Projektion der Strecke von (−2 | 3) bis (3 | 7) auf die x-Achse?', solution: '5', steps: ['Projektionen: (−2 | 0) und (3 | 0).', '3 − (−2) = 5.'] },
          { problem: 'Wie lang ist die Projektion derselben Strecke auf die y-Achse?', solution: '4', steps: ['Projektionen: (0 | 3) und (0 | 7).', '7 − 3 = 4.'] },
          { problem: 'Was ist die Projektion des Punktes (6 | −1) auf die x-Achse?', solution: '(6 | 0)', steps: ['x bleibt 6.', 'y wird 0.'] },
        ],
      },
    },
  ],
};
