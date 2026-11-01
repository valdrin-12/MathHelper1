// Grade 7 · Theme 10: Transformations and solids (March–April)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g7-transformations-solids',
  i18n: {
    al: { title: 'Shndërrimet dhe trupat gjeometrikë', description: 'Simetria, zhvendosja në sistemin koordinativ, prizmi, piramida dhe vëllimi i tyre.' },
    en: { title: 'Transformations and solids', description: 'Symmetry, translations on the coordinate grid, prisms, pyramids and their volume.' },
    de: { title: 'Abbildungen und Körper', description: 'Symmetrie, Verschiebungen im Koordinatensystem, Prisma, Pyramide und ihr Volumen.' },
  },
  lessons: [
    // ───────── 1. Symmetry
    {
      slug: 'g7-transformations-solids-symmetry',
      practiceVisuals: {
        0: {
        type: 'functionPlot', equal: true, view: { xMin: -7, xMax: 7, yMin: -7, yMax: 7 }, xStep: 1, yStep: 1,
        points: [{ at: ['p', 'q'], label: 'P({p}, {q})', color: 'primary' }, { at: ['p', '-q'], label: 'P′({p}, {-q})', color: 'secondary' }],
        segments: [{ from: ['p', 'q'], to: ['p', '-q'], color: 'muted', dashed: true }],
        sliders: [{ name: 'p', label: 'x', min: -6, max: 6, step: 1, value: -1 }, { name: 'q', label: 'y', min: -6, max: 6, step: 1, value: 4 }],
        readouts: [{ text: { al: 'Pasqyrimi ndaj boshtit x: (x, y) → (x, −y)', en: 'Reflection in the x-axis: (x, y) → (x, −y)', de: 'Spiegelung an der x-Achse: (x | y) → (x | −y)' } }],
        alt: { al: 'Një pikë P që lëviz me rrëshqitës dhe figura e saj P′.', en: 'A point P moved by sliders and its image P′.', de: 'Ein Punkt P, der mit Schiebereglern bewegt wird, und sein Bild P′.' },
      },
        1: {
        type: 'functionPlot', equal: true, view: { xMin: -7, xMax: 7, yMin: -7, yMax: 7 }, xStep: 1, yStep: 1,
        points: [{ at: ['p', 'q'], label: 'P({p}, {q})', color: 'primary' }, { at: ['-p', 'q'], label: 'P′({-p}, {q})', color: 'secondary' }],
        segments: [{ from: ['p', 'q'], to: ['-p', 'q'], color: 'muted', dashed: true }],
        sliders: [{ name: 'p', label: 'x', min: -6, max: 6, step: 1, value: 5 }, { name: 'q', label: 'y', min: -6, max: 6, step: 1, value: 2 }],
        readouts: [{ text: { al: 'Pasqyrimi ndaj boshtit y: (x, y) → (−x, y)', en: 'Reflection in the y-axis: (x, y) → (−x, y)', de: 'Spiegelung an der y-Achse: (x | y) → (−x | y)' } }],
        alt: { al: 'Një pikë P që lëviz me rrëshqitës dhe figura e saj P′.', en: 'A point P moved by sliders and its image P′.', de: 'Ein Punkt P, der mit Schiebereglern bewegt wird, und sein Bild P′.' },
      },
      },
      visuals: [{
        type: 'geoFigure', view: { xMin: -5, xMax: 5, yMin: -4, yMax: 4 }, grid: true, axes: true,
        shapes: [
          { kind: 'polygon', points: [[1, -1], [4, -1], [3, -3]], fill: true, color: 'primary' },
          { kind: 'polygon', points: [[1, 1], [4, 1], [3, 3]], fill: true, color: 'secondary', dashed: true },
          { kind: 'polygon', points: [[-1, 1], [-4, 1], [-3, 3]], fill: true, color: 'success', dashed: true },
          { kind: 'point', at: [3, -3], label: 'A', labelPos: 'se' },
          { kind: 'point', at: [3, 3], label: 'A₁', labelPos: 'ne', color: 'secondary' },
          { kind: 'point', at: [-3, 3], label: 'A₂', labelPos: 'nw', color: 'success' },
        ],
        caption: alt('Trekëndëshi blu pasqyrohet në boshtin x (portokalli); trekëndëshi i gjelbër është simetrik me të blunë ndaj qendrës O.', 'The blue triangle is reflected in the x-axis (orange); the green triangle is the image of the blue one under point symmetry about O.', 'Das blaue Dreieck wird an der x-Achse gespiegelt (orange); das grüne Dreieck ist sein Bild bei der Punktspiegelung an O.'),
        alt: alt('Rrjetë koordinative: trekëndësh me kulm A(3, −3), pasqyrimi i tij në boshtin x me A₁(3, 3) dhe simetria qendrore me A₂(−3, 3).', 'Coordinate grid: a triangle with vertex A(3, −3), its reflection in the x-axis with A₁(3, 3) and its point-symmetric image with A₂(−3, 3).', 'Koordinatengitter: Dreieck mit Ecke A(3 | −3), Spiegelung an der x-Achse mit A₁(3 | 3) und Punktspiegelung mit A₂(−3 | 3).'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', 'text'],
      },
      al: {
        title: 'Simetria',
        objectives: ['Të gjeni boshtet e simetrisë të figurave.', 'Të pasqyroni pika në boshtet koordinative dhe në origjinë.'],
        theory: 'Një figurë ka bosht simetrie kur, e palosur sipas tij, dy pjesët puthiten. Katrori ka 4 boshte simetrie, drejtkëndëshi 2, trekëndëshi barabrinjës 3, rrethi pafund shumë.\n\nNë sistemin koordinativ: pasqyrimi në boshtin x ndryshon shenjën e y-it: (x, y) → (x, −y). Pasqyrimi në boshtin y ndryshon shenjën e x-it: (x, y) → (−x, y).\n\nSimetria qendrore ndaj origjinës O (rrotullim 180°) ndryshon të dyja shenjat: (x, y) → (−x, −y). Figura dhe shëmbëllimi kanë gjithmonë të njëjtat brinjë dhe kënde.',
        keyPoints: ['Boshti x: (x, y) → (x, −y)', 'Boshti y: (x, y) → (−x, y)', 'Qendra O: (x, y) → (−x, −y)'],
        examples: [
          { example: 'Pasqyroni A(3, −2) në boshtin x.', solution: 'Ndryshon shenja e y: A₁(3, 2).' },
          { example: 'Gjeni simetriken e A(3, −2) ndaj origjinës.', solution: 'Ndryshojnë të dyja shenjat: A₂(−3, 2).' },
        ],
        commonMistakes: [
          { mistake: 'Pasqyrimi në boshtin x ndryshon x-in: (3, −2) → (−3, −2).', fix: 'Në boshtin x pika lëviz lart-poshtë, pra ndryshon y: (3, 2).' },
          { mistake: 'Drejtkëndëshi ka 4 boshte simetrie (edhe diagonalet).', fix: 'Diagonalet e drejtkëndëshit nuk janë boshte simetrie; ka vetëm 2.' },
        ],
        practice: [
          { problem: 'Pasqyroni B(−1, 4) në boshtin x.', solution: 'B₁(−1, −4)', steps: ['Ndryshon vetëm y.', '(−1, 4) → (−1, −4).'] },
          { problem: 'Pasqyroni C(5, 2) në boshtin y.', solution: 'C₁(−5, 2)', steps: ['Ndryshon vetëm x.', '(5, 2) → (−5, 2).'] },
          { problem: 'Gjeni simetriken e D(2, −6) ndaj origjinës.', solution: 'D₁(−2, 6)', steps: ['Ndryshojnë të dyja shenjat.', '(2, −6) → (−2, 6).'] },
        ],
      },
      en: {
        title: 'Symmetry',
        objectives: ['Find the lines of symmetry of shapes.', 'Reflect points in the axes and in the origin.'],
        theory: 'A shape has a line of symmetry when, folded along it, the two halves match exactly. A square has 4 lines of symmetry, a rectangle 2, an equilateral triangle 3, a circle infinitely many.\n\nOn the coordinate grid: reflecting in the x-axis changes the sign of y: (x, y) → (x, −y). Reflecting in the y-axis changes the sign of x: (x, y) → (−x, y).\n\nPoint symmetry about the origin O (a half-turn, 180°) changes both signs: (x, y) → (−x, −y). A shape and its image always have the same sides and angles.',
        keyPoints: ['x-axis: (x, y) → (x, −y)', 'y-axis: (x, y) → (−x, y)', 'Origin O: (x, y) → (−x, −y)'],
        examples: [
          { example: 'Reflect A(3, −2) in the x-axis.', solution: 'The sign of y changes: A₁(3, 2).' },
          { example: 'Find the image of A(3, −2) under point symmetry about the origin.', solution: 'Both signs change: A₂(−3, 2).' },
        ],
        commonMistakes: [
          { mistake: 'Reflecting in the x-axis changes x: (3, −2) → (−3, −2).', fix: 'In the x-axis the point moves up or down, so y changes: (3, 2).' },
          { mistake: 'A rectangle has 4 lines of symmetry (the diagonals too).', fix: 'The diagonals of a rectangle are not lines of symmetry; it has only 2.' },
        ],
        practice: [
          { problem: 'Reflect B(−1, 4) in the x-axis.', solution: 'B₁(−1, −4)', steps: ['Only y changes.', '(−1, 4) → (−1, −4).'] },
          { problem: 'Reflect C(5, 2) in the y-axis.', solution: 'C₁(−5, 2)', steps: ['Only x changes.', '(5, 2) → (−5, 2).'] },
          { problem: 'Find the image of D(2, −6) under point symmetry about the origin.', solution: 'D₁(−2, 6)', steps: ['Both signs change.', '(2, −6) → (−2, 6).'] },
        ],
      },
      de: {
        title: 'Symmetrie',
        objectives: ['Symmetrieachsen von Figuren finden.', 'Punkte an den Koordinatenachsen und am Ursprung spiegeln.'],
        theory: 'Eine Figur hat eine Symmetrieachse, wenn beim Falten entlang dieser Achse beide Hälften genau aufeinanderpassen. Ein Quadrat hat 4 Symmetrieachsen, ein Rechteck 2, ein gleichseitiges Dreieck 3, ein Kreis unendlich viele.\n\nIm Koordinatensystem: Die Spiegelung an der x-Achse ändert das Vorzeichen von y: (x | y) → (x | −y). Die Spiegelung an der y-Achse ändert das Vorzeichen von x: (x | y) → (−x | y).\n\nDie Punktspiegelung am Ursprung O (Drehung um 180°) ändert beide Vorzeichen: (x | y) → (−x | −y). Figur und Bild haben immer gleiche Seiten und Winkel.',
        keyPoints: ['x-Achse: (x | y) → (x | −y)', 'y-Achse: (x | y) → (−x | y)', 'Ursprung O: (x | y) → (−x | −y)'],
        examples: [
          { example: 'Spiegeln Sie A(3 | −2) an der x-Achse.', solution: 'Das Vorzeichen von y ändert sich: A₁(3 | 2).' },
          { example: 'Spiegeln Sie A(3 | −2) am Ursprung.', solution: 'Beide Vorzeichen ändern sich: A₂(−3 | 2).' },
        ],
        commonMistakes: [
          { mistake: 'Die Spiegelung an der x-Achse ändert x: (3 | −2) → (−3 | −2).', fix: 'An der x-Achse wandert der Punkt nach oben oder unten, also ändert sich y: (3 | 2).' },
          { mistake: 'Ein Rechteck hat 4 Symmetrieachsen (auch die Diagonalen).', fix: 'Die Diagonalen eines Rechtecks sind keine Symmetrieachsen; es hat nur 2.' },
        ],
        practice: [
          { problem: 'Spiegeln Sie B(−1 | 4) an der x-Achse.', solution: 'B₁(−1 | −4)', steps: ['Nur y ändert sich.', '(−1 | 4) → (−1 | −4).'] },
          { problem: 'Spiegeln Sie C(5 | 2) an der y-Achse.', solution: 'C₁(−5 | 2)', steps: ['Nur x ändert sich.', '(5 | 2) → (−5 | 2).'] },
          { problem: 'Spiegeln Sie D(2 | −6) am Ursprung.', solution: 'D₁(−2 | 6)', steps: ['Beide Vorzeichen ändern sich.', '(2 | −6) → (−2 | 6).'] },
        ],
      },
    },

    // ───────── 2. Coordinate system and translations
    {
      slug: 'g7-transformations-solids-coordinate-system',
      visuals: [{
        type: 'geoFigure', view: { xMin: -4, xMax: 7, yMin: -2, yMax: 5 }, grid: true, axes: true,
        shapes: [
          { kind: 'polygon', points: [[-3, 1], [-1, 1], [-1, 3]], fill: true, color: 'primary' },
          { kind: 'polygon', points: [[1, 0], [3, 0], [3, 2]], fill: true, color: 'secondary', dashed: true },
          { kind: 'segment', from: [-1, 3], to: [3, 2], color: 'muted', dashed: true, arrow: true },
          { kind: 'point', at: [-1, 3], label: 'B', labelPos: 'n' },
          { kind: 'point', at: [3, 2], label: 'B₁', labelPos: 'ne', color: 'secondary' },
        ],
        caption: alt('Zhvendosje: 4 njësi djathtas dhe 1 poshtë, pra (x, y) → (x + 4, y − 1). B(−1, 3) → B₁(3, 2).', 'Translation: 4 units right and 1 down, so (x, y) → (x + 4, y − 1). B(−1, 3) → B₁(3, 2).', 'Verschiebung: 4 Einheiten nach rechts und 1 nach unten, also (x | y) → (x + 4 | y − 1). B(−1 | 3) → B₁(3 | 2).'),
        alt: alt('Trekëndësh i zhvendosur 4 djathtas dhe 1 poshtë; shigjeta lidh B(−1, 3) me B₁(3, 2).', 'A triangle translated 4 right and 1 down; an arrow joins B(−1, 3) to B₁(3, 2).', 'Ein Dreieck, 4 nach rechts und 1 nach unten verschoben; ein Pfeil verbindet B(−1 | 3) mit B₁(3 | 2).'),
      }],
      answers: {
        examples: ['text', [['5 - (-2)', 7]]],
        practice: ['text', 'text', [['(5 - 1) * (4 - 1)', 12]]],
      },
      al: {
        title: 'Sistemi koordinativ dhe zhvendosja',
        objectives: ['Të përdorni të katër kuadrantet e sistemit koordinativ.', 'Të zhvendosni figura dhe të llogaritni largësi e sipërfaqe në rrjetë.'],
        theory: 'Boshtet x dhe y e ndajnë rrafshin në katër kuadrante: I (+, +), II (−, +), III (−, −), IV (+, −). Pika (x, y): x tregon sa majtas/djathtas, y sa lart/poshtë nga origjina.\n\nZhvendosja paralele (translacioni) lëviz çdo pikë të figurës njësoj: a njësi horizontalisht dhe b vertikalisht: (x, y) → (x + a, y + b). Figura nuk ndryshon formë as madhësi.\n\nLargësia ndërmjet dy pikave në të njëjtën vijë horizontale është ndryshimi i x-ve: (−2, 1) dhe (5, 1) janë 5 − (−2) = 7 njësi larg. Kështu llogaritet edhe sipërfaqja e drejtkëndëshave në rrjetë.',
        keyPoints: ['Kuadrantet: I (+, +), II (−, +), III (−, −), IV (+, −)', 'Zhvendosja: (x, y) → (x + a, y + b)', 'Largësi horizontale: x₂ − x₁'],
        examples: [
          { example: 'Zhvendosni A(2, 3) 4 njësi djathtas dhe 1 njësi poshtë.', solution: '(2 + 4, 3 − 1) = A₁(6, 2).' },
          { example: 'Sa larg janë pikat (−2, 1) dhe (5, 1)?', solution: 'Kanë të njëjtin y; largësia: 5 − (−2) = 7 njësi.' },
        ],
        commonMistakes: [
          { mistake: '"1 poshtë" shtohet te x.', fix: 'Lëvizja lart-poshtë ndryshon y; majtas-djathtas ndryshon x.' },
        ],
        practice: [
          { problem: 'Në cilin kuadrant ndodhet pika (−3, 4)?', solution: 'Kuadranti II', steps: ['x negativ, y pozitiv.', '(−, +) → kuadranti II.'] },
          { problem: 'Zhvendosni B(−1, 2) 3 njësi djathtas dhe 2 lart.', solution: 'B₁(2, 4)', steps: ['x: −1 + 3 = 2.', 'y: 2 + 2 = 4.'] },
          { problem: 'Drejtkëndëshi ka kulmet (1, 1), (5, 1), (5, 4), (1, 4). Sa është sipërfaqja?', solution: '12 njësi katrore', steps: ['Gjatësia 5 − 1 = 4, gjerësia 4 − 1 = 3.', 'S = 4 · 3 = 12.'] },
        ],
      },
      en: {
        title: 'The coordinate grid and translations',
        objectives: ['Use all four quadrants of the coordinate grid.', 'Translate shapes and work out distances and areas on the grid.'],
        theory: 'The x- and y-axes divide the plane into four quadrants: I (+, +), II (−, +), III (−, −), IV (+, −). In the point (x, y), x tells how far left/right and y how far up/down from the origin.\n\nA translation moves every point of a shape in the same way: a units across and b units up or down: (x, y) → (x + a, y + b). The shape keeps its shape and size.\n\nThe distance between two points on the same horizontal line is the difference of the x-values: (−2, 1) and (5, 1) are 5 − (−2) = 7 units apart. Areas of rectangles on the grid are found the same way.',
        keyPoints: ['Quadrants: I (+, +), II (−, +), III (−, −), IV (+, −)', 'Translation: (x, y) → (x + a, y + b)', 'Horizontal distance: x₂ − x₁'],
        examples: [
          { example: 'Translate A(2, 3) 4 units right and 1 unit down.', solution: '(2 + 4, 3 − 1) = A₁(6, 2).' },
          { example: 'How far apart are the points (−2, 1) and (5, 1)?', solution: 'They have the same y; distance: 5 − (−2) = 7 units.' },
        ],
        commonMistakes: [
          { mistake: '"1 down" is added to x.', fix: 'Moving up or down changes y; moving left or right changes x.' },
        ],
        practice: [
          { problem: 'In which quadrant is the point (−3, 4)?', solution: 'Quadrant II', steps: ['x negative, y positive.', '(−, +) → quadrant II.'] },
          { problem: 'Translate B(−1, 2) 3 units right and 2 up.', solution: 'B₁(2, 4)', steps: ['x: −1 + 3 = 2.', 'y: 2 + 2 = 4.'] },
          { problem: 'A rectangle has vertices (1, 1), (5, 1), (5, 4), (1, 4). What is its area?', solution: '12 square units', steps: ['Length 5 − 1 = 4, width 4 − 1 = 3.', 'A = 4 · 3 = 12.'] },
        ],
      },
      de: {
        title: 'Koordinatensystem und Verschiebungen',
        objectives: ['Alle vier Quadranten des Koordinatensystems nutzen.', 'Figuren verschieben und Abstände und Flächen im Gitter berechnen.'],
        theory: 'Die x- und die y-Achse teilen die Ebene in vier Quadranten: I (+ | +), II (− | +), III (− | −), IV (+ | −). Im Punkt (x | y) gibt x an, wie weit links/rechts, und y, wie weit oben/unten er vom Ursprung liegt.\n\nEine Verschiebung bewegt jeden Punkt einer Figur gleich: um a Einheiten waagerecht und b senkrecht: (x | y) → (x + a | y + b). Form und Größe bleiben gleich.\n\nDer Abstand zweier Punkte auf derselben waagerechten Linie ist die Differenz der x-Werte: (−2 | 1) und (5 | 1) liegen 5 − (−2) = 7 Einheiten auseinander. So berechnet man auch Rechtecksflächen im Gitter.',
        keyPoints: ['Quadranten: I (+ | +), II (− | +), III (− | −), IV (+ | −)', 'Verschiebung: (x | y) → (x + a | y + b)', 'Waagerechter Abstand: x₂ − x₁'],
        examples: [
          { example: 'Verschieben Sie A(2 | 3) um 4 Einheiten nach rechts und 1 nach unten.', solution: '(2 + 4 | 3 − 1) = A₁(6 | 2).' },
          { example: 'Wie weit liegen die Punkte (−2 | 1) und (5 | 1) auseinander?', solution: 'Sie haben dasselbe y; Abstand: 5 − (−2) = 7 Einheiten.' },
        ],
        commonMistakes: [
          { mistake: '„1 nach unten“ wird bei x verrechnet.', fix: 'Nach oben/unten ändert y; nach links/rechts ändert x.' },
        ],
        practice: [
          { problem: 'In welchem Quadranten liegt der Punkt (−3 | 4)?', solution: 'Quadrant II', steps: ['x negativ, y positiv.', '(− | +) → Quadrant II.'] },
          { problem: 'Verschieben Sie B(−1 | 2) um 3 nach rechts und 2 nach oben.', solution: 'B₁(2 | 4)', steps: ['x: −1 + 3 = 2.', 'y: 2 + 2 = 4.'] },
          { problem: 'Ein Rechteck hat die Ecken (1 | 1), (5 | 1), (5 | 4), (1 | 4). Wie groß ist seine Fläche?', solution: '12 Flächeneinheiten', steps: ['Länge 5 − 1 = 4, Breite 4 − 1 = 3.', 'A = 4 · 3 = 12.'] },
        ],
      },
    },

    // ───────── 3. Prism
    {
      slug: 'g7-transformations-solids-prism',
      visuals: [{
        type: 'solid', kind: 'cuboid', a: 5, b: 3, c: 2, labels: { a: '5 cm', b: '3 cm', c: '2 cm' },
        caption: alt('Kuboidi është prizëm katërkëndor: S = 2(5 · 3 + 3 · 2 + 5 · 2) = 62 cm².', 'A cuboid is a rectangular prism: S = 2(5 · 3 + 3 · 2 + 5 · 2) = 62 cm².', 'Ein Quader ist ein vierseitiges Prisma: O = 2(5 · 3 + 3 · 2 + 5 · 2) = 62 cm².'),
        alt: alt('Kuboid me përmasa 5 cm, 3 cm dhe 2 cm.', 'A cuboid measuring 5 cm, 3 cm and 2 cm.', 'Ein Quader mit 5 cm, 3 cm und 2 cm.'),
      }],
      answers: {
        examples: [[['2 * (5*3 + 3*2 + 5*2)', 62]], [['3 + 2', 5], ['3 * 3', 9], ['2 * 3', 6]]],
        practice: [[['6 * 4^2', 96]], [['6 + 2', 8], ['3 * 6', 18], ['2 * 6', 12]], [['2 * (6*4 + 4*3 + 6*3)', 108]]],
      },
      al: {
        title: 'Prizmi',
        objectives: ['Të dalloni elementet e prizmit: bazat, faqet anësore, brinjët, kulmet.', 'Të njehsoni sipërfaqen e prizmit.'],
        theory: 'Prizmi ka dy baza të barabarta dhe paralele (shumëkëndësha) dhe faqe anësore drejtkëndëshe. Prizmi merr emrin nga baza: prizëm trekëndor, katërkëndor (kuboidi), gjashtëkëndor.\n\nNëse baza ka n brinjë, prizmi ka n + 2 faqe, 3n brinjë dhe 2n kulme. Prizmi trekëndor: 5 faqe, 9 brinjë, 6 kulme.\n\nSipërfaqja e prizmit = 2 · sipërfaqja e bazës + sipërfaqja anësore (perimetri i bazës · lartësia). Për kuboidin a × b × c: S = 2(ab + bc + ac).',
        keyPoints: ['Baza me n brinjë: n + 2 faqe, 3n brinjë, 2n kulme.', 'S = 2B + P_bazës · h', 'Kuboidi: S = 2(ab + bc + ac)'],
        examples: [
          { example: 'Gjeni sipërfaqen e kuboidit 5 cm × 3 cm × 2 cm.', solution: 'S = 2(15 + 6 + 10) = 2 · 31 = 62 cm².' },
          { example: 'Sa faqe, brinjë dhe kulme ka prizmi trekëndor?', solution: 'n = 3: 3 + 2 = 5 faqe, 3 · 3 = 9 brinjë, 2 · 3 = 6 kulme.' },
        ],
        commonMistakes: [
          { mistake: 'S e kuboidit = ab + bc + ac (pa 2).', fix: 'Çdo faqe ka një çift përballë; S = 2(ab + bc + ac).' },
        ],
        practice: [
          { problem: 'Gjeni sipërfaqen e kubit me brinjë 4 cm.', solution: '96 cm²', steps: ['Një faqe: 4 · 4 = 16 cm².', '6 · 16 = 96 cm².'] },
          { problem: 'Sa faqe, brinjë dhe kulme ka prizmi gjashtëkëndor?', solution: '8 faqe, 18 brinjë, 12 kulme', steps: ['n = 6.', '6 + 2 = 8 faqe, 3 · 6 = 18 brinjë, 2 · 6 = 12 kulme.'] },
          { problem: 'Gjeni sipërfaqen e kuboidit 6 cm × 4 cm × 3 cm.', solution: '108 cm²', steps: ['ab + bc + ac = 24 + 12 + 18 = 54.', 'S = 2 · 54 = 108 cm².'] },
        ],
      },
      en: {
        title: 'The prism',
        objectives: ['Name the parts of a prism: bases, lateral faces, edges, vertices.', 'Work out the surface area of a prism.'],
        theory: 'A prism has two equal, parallel bases (polygons) and rectangular lateral faces. A prism is named after its base: triangular prism, rectangular prism (cuboid), hexagonal prism.\n\nIf the base has n sides, the prism has n + 2 faces, 3n edges and 2n vertices. A triangular prism: 5 faces, 9 edges, 6 vertices.\n\nSurface area of a prism = 2 · base area + lateral area (perimeter of the base · height). For an a × b × c cuboid: S = 2(ab + bc + ac).',
        keyPoints: ['Base with n sides: n + 2 faces, 3n edges, 2n vertices.', 'S = 2B + P_base · h', 'Cuboid: S = 2(ab + bc + ac)'],
        examples: [
          { example: 'Find the surface area of a 5 cm × 3 cm × 2 cm cuboid.', solution: 'S = 2(15 + 6 + 10) = 2 · 31 = 62 cm².' },
          { example: 'How many faces, edges and vertices does a triangular prism have?', solution: 'n = 3: 3 + 2 = 5 faces, 3 · 3 = 9 edges, 2 · 3 = 6 vertices.' },
        ],
        commonMistakes: [
          { mistake: 'Surface area of a cuboid = ab + bc + ac (without the 2).', fix: 'Every face has an opposite partner; S = 2(ab + bc + ac).' },
        ],
        practice: [
          { problem: 'Find the surface area of a cube with edge 4 cm.', solution: '96 cm²', steps: ['One face: 4 · 4 = 16 cm².', '6 · 16 = 96 cm².'] },
          { problem: 'How many faces, edges and vertices does a hexagonal prism have?', solution: '8 faces, 18 edges, 12 vertices', steps: ['n = 6.', '6 + 2 = 8 faces, 3 · 6 = 18 edges, 2 · 6 = 12 vertices.'] },
          { problem: 'Find the surface area of a 6 cm × 4 cm × 3 cm cuboid.', solution: '108 cm²', steps: ['ab + bc + ac = 24 + 12 + 18 = 54.', 'S = 2 · 54 = 108 cm².'] },
        ],
      },
      de: {
        title: 'Das Prisma',
        objectives: ['Die Teile eines Prismas benennen: Grundflächen, Seitenflächen, Kanten, Ecken.', 'Den Oberflächeninhalt eines Prismas berechnen.'],
        theory: 'Ein Prisma hat zwei gleiche, parallele Grundflächen (Vielecke) und rechteckige Seitenflächen. Es wird nach seiner Grundfläche benannt: dreiseitiges, vierseitiges (Quader), sechsseitiges Prisma.\n\nHat die Grundfläche n Seiten, so hat das Prisma n + 2 Flächen, 3n Kanten und 2n Ecken. Ein dreiseitiges Prisma: 5 Flächen, 9 Kanten, 6 Ecken.\n\nOberflächeninhalt = 2 · Grundfläche + Mantelfläche (Umfang der Grundfläche · Höhe). Für einen Quader a × b × c: O = 2(ab + bc + ac).',
        keyPoints: ['Grundfläche mit n Seiten: n + 2 Flächen, 3n Kanten, 2n Ecken.', 'O = 2G + u_G · h', 'Quader: O = 2(ab + bc + ac)'],
        examples: [
          { example: 'Bestimmen Sie den Oberflächeninhalt eines Quaders 5 cm × 3 cm × 2 cm.', solution: 'O = 2(15 + 6 + 10) = 2 · 31 = 62 cm².' },
          { example: 'Wie viele Flächen, Kanten und Ecken hat ein dreiseitiges Prisma?', solution: 'n = 3: 3 + 2 = 5 Flächen, 3 · 3 = 9 Kanten, 2 · 3 = 6 Ecken.' },
        ],
        commonMistakes: [
          { mistake: 'Oberfläche des Quaders = ab + bc + ac (ohne die 2).', fix: 'Jede Fläche hat eine gegenüberliegende; O = 2(ab + bc + ac).' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Oberflächeninhalt eines Würfels mit 4 cm Kantenlänge.', solution: '96 cm²', steps: ['Eine Fläche: 4 · 4 = 16 cm².', '6 · 16 = 96 cm².'] },
          { problem: 'Wie viele Flächen, Kanten und Ecken hat ein sechsseitiges Prisma?', solution: '8 Flächen, 18 Kanten, 12 Ecken', steps: ['n = 6.', '6 + 2 = 8 Flächen, 3 · 6 = 18 Kanten, 2 · 6 = 12 Ecken.'] },
          { problem: 'Bestimmen Sie den Oberflächeninhalt eines Quaders 6 cm × 4 cm × 3 cm.', solution: '108 cm²', steps: ['ab + bc + ac = 24 + 12 + 18 = 54.', 'O = 2 · 54 = 108 cm².'] },
        ],
      },
    },

    // ───────── 4. Pyramid
    {
      slug: 'g7-transformations-solids-pyramid',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 6.2, yMin: -0.8, yMax: 5 }, height: 220,
        shapes: [
          { kind: 'segment', from: [0, 0], to: [4, 0], color: 'ink' },
          { kind: 'segment', from: [4, 0], to: [5.5, 1.5], color: 'ink' },
          { kind: 'segment', from: [5.5, 1.5], to: [1.5, 1.5], color: 'muted', dashed: true },
          { kind: 'segment', from: [1.5, 1.5], to: [0, 0], color: 'muted', dashed: true },
          { kind: 'segment', from: [0, 0], to: [2.75, 4.5], color: 'ink' },
          { kind: 'segment', from: [4, 0], to: [2.75, 4.5], color: 'ink' },
          { kind: 'segment', from: [5.5, 1.5], to: [2.75, 4.5], color: 'ink' },
          { kind: 'segment', from: [1.5, 1.5], to: [2.75, 4.5], color: 'muted', dashed: true },
          { kind: 'segment', from: [2.75, 0.75], to: [2.75, 4.5], color: 'secondary', dashed: true, label: 'H' },
          { kind: 'segment', from: [2, 0], to: [2.75, 4.5], color: 'primary', label: 'h' },
          { kind: 'label', at: [2, -0.45], text: 'a' },
        ],
        caption: alt('Piramida katërkëndore e rregullt: baza katror me brinjë a, lartësia e piramidës H dhe lartësia e faqes anësore h (apotema).', 'A regular square pyramid: square base with side a, the height of the pyramid H and the slant height h of a lateral face.', 'Eine regelmäßige quadratische Pyramide: quadratische Grundfläche mit Seite a, Körperhöhe H und Höhe h einer Seitenfläche.'),
        alt: alt('Piramidë me bazë katrore; brinjët e fshehura me vija të ndërprera; shënohen H dhe h.', 'A pyramid with a square base; hidden edges dashed; H and h are marked.', 'Eine Pyramide mit quadratischer Grundfläche; verdeckte Kanten gestrichelt; H und h sind eingezeichnet.'),
      }],
      answers: {
        examples: [[['4 + 1', 5], ['2 * 4', 8], ['4 + 1', 5]], [['6^2 + 4 * (6 * 5 / 2)', 96]]],
        practice: [[['3 + 1', 4], ['2 * 3', 6]], [['10^2 + 4 * (10 * 13 / 2)', 360]], [['sqrt(12^2 + 5^2)', 13]]],
      },
      al: {
        title: 'Piramida',
        objectives: ['Të dalloni elementet e piramidës.', 'Të njehsoni sipërfaqen e piramidës së rregullt.'],
        theory: 'Piramida ka një bazë (shumëkëndësh) dhe faqe anësore trekëndëshe që takohen në një kulm. Nëse baza ka n brinjë, piramida ka n + 1 faqe, 2n brinjë dhe n + 1 kulme. Piramida katërkëndore: 5 faqe, 8 brinjë, 5 kulme.\n\nTe piramida e rregullt baza është shumëkëndësh i rregullt dhe faqet anësore janë trekëndësha barakrahës të barabartë. Lartësia e piramidës H shkon nga kulmi pingul mbi bazë; lartësia e faqes anësore h (apotema) është lartësia e trekëndëshit anësor.\n\nSipërfaqja: S = B + n · (a · h : 2). Teorema e Pitagorës lidh H, h dhe gjysmën e brinjës: h² = H² + (a/2)².',
        keyPoints: ['Baza me n brinjë: n + 1 faqe, 2n brinjë, n + 1 kulme.', 'S = B + n · (a · h : 2)', 'h² = H² + (a/2)² (piramida katërkëndore)'],
        examples: [
          { example: 'Sa faqe, brinjë dhe kulme ka piramida katërkëndore?', solution: 'n = 4: 4 + 1 = 5 faqe, 2 · 4 = 8 brinjë, 4 + 1 = 5 kulme.' },
          { example: 'Piramida katërkëndore e rregullt ka a = 6 cm dhe h = 5 cm. Gjeni sipërfaqen.', solution: 'B = 36 cm²; një faqe 6 · 5 : 2 = 15 cm²; S = 36 + 4 · 15 = 96 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Përdoret lartësia e piramidës H në vend të lartësisë së faqes h.', fix: 'Sipërfaqja e trekëndëshit anësor kërkon lartësinë e tij, h.' },
        ],
        practice: [
          { problem: 'Sa faqe dhe brinjë ka piramida trekëndore?', solution: '4 faqe, 6 brinjë', steps: ['n = 3.', '3 + 1 = 4 faqe, 2 · 3 = 6 brinjë.'] },
          { problem: 'Piramida katërkëndore e rregullt ka a = 10 cm dhe h = 13 cm. Gjeni sipërfaqen.', solution: '360 cm²', steps: ['B = 100 cm²; një faqe 10 · 13 : 2 = 65 cm².', 'S = 100 + 4 · 65 = 360 cm².'] },
          { problem: 'Piramida katërkëndore e rregullt ka a = 10 cm dhe H = 12 cm. Gjeni h.', solution: '13 cm', steps: ['h² = 12² + 5² = 144 + 25 = 169.', 'h = 13 cm.'] },
        ],
      },
      en: {
        title: 'The pyramid',
        objectives: ['Name the parts of a pyramid.', 'Work out the surface area of a regular pyramid.'],
        theory: 'A pyramid has one base (a polygon) and triangular lateral faces that meet at one apex. If the base has n sides, the pyramid has n + 1 faces, 2n edges and n + 1 vertices. A square pyramid: 5 faces, 8 edges, 5 vertices.\n\nIn a regular pyramid the base is a regular polygon and the lateral faces are equal isosceles triangles. The height H of the pyramid goes from the apex perpendicular to the base; the slant height h is the height of a lateral triangle.\n\nSurface area: S = B + n · (a · h ÷ 2). Pythagoras\' theorem links H, h and half the side: h² = H² + (a/2)².',
        keyPoints: ['Base with n sides: n + 1 faces, 2n edges, n + 1 vertices.', 'S = B + n · (a · h ÷ 2)', 'h² = H² + (a/2)² (square pyramid)'],
        examples: [
          { example: 'How many faces, edges and vertices does a square pyramid have?', solution: 'n = 4: 4 + 1 = 5 faces, 2 · 4 = 8 edges, 4 + 1 = 5 vertices.' },
          { example: 'A regular square pyramid has a = 6 cm and slant height h = 5 cm. Find its surface area.', solution: 'B = 36 cm²; one face 6 · 5 ÷ 2 = 15 cm²; S = 36 + 4 · 15 = 96 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Using the pyramid height H instead of the slant height h.', fix: 'The area of a lateral triangle needs its own height, h.' },
        ],
        practice: [
          { problem: 'How many faces and edges does a triangular pyramid have?', solution: '4 faces, 6 edges', steps: ['n = 3.', '3 + 1 = 4 faces, 2 · 3 = 6 edges.'] },
          { problem: 'A regular square pyramid has a = 10 cm and h = 13 cm. Find its surface area.', solution: '360 cm²', steps: ['B = 100 cm²; one face 10 · 13 ÷ 2 = 65 cm².', 'S = 100 + 4 · 65 = 360 cm².'] },
          { problem: 'A regular square pyramid has a = 10 cm and H = 12 cm. Find h.', solution: '13 cm', steps: ['h² = 12² + 5² = 144 + 25 = 169.', 'h = 13 cm.'] },
        ],
      },
      de: {
        title: 'Die Pyramide',
        objectives: ['Die Teile einer Pyramide benennen.', 'Den Oberflächeninhalt einer regelmäßigen Pyramide berechnen.'],
        theory: 'Eine Pyramide hat eine Grundfläche (ein Vieleck) und dreieckige Seitenflächen, die sich in einer Spitze treffen. Hat die Grundfläche n Seiten, so hat die Pyramide n + 1 Flächen, 2n Kanten und n + 1 Ecken. Quadratische Pyramide: 5 Flächen, 8 Kanten, 5 Ecken.\n\nBei einer regelmäßigen Pyramide ist die Grundfläche ein regelmäßiges Vieleck und die Seitenflächen sind gleiche gleichschenklige Dreiecke. Die Körperhöhe H geht von der Spitze senkrecht zur Grundfläche; die Seitenhöhe h ist die Höhe eines Seitendreiecks.\n\nOberflächeninhalt: O = G + n · (a · h : 2). Der Satz des Pythagoras verbindet H, h und die halbe Seite: h² = H² + (a/2)².',
        keyPoints: ['Grundfläche mit n Seiten: n + 1 Flächen, 2n Kanten, n + 1 Ecken.', 'O = G + n · (a · h : 2)', 'h² = H² + (a/2)² (quadratische Pyramide)'],
        examples: [
          { example: 'Wie viele Flächen, Kanten und Ecken hat eine quadratische Pyramide?', solution: 'n = 4: 4 + 1 = 5 Flächen, 2 · 4 = 8 Kanten, 4 + 1 = 5 Ecken.' },
          { example: 'Eine regelmäßige quadratische Pyramide hat a = 6 cm und h = 5 cm. Bestimmen Sie den Oberflächeninhalt.', solution: 'G = 36 cm²; ein Seitendreieck 6 · 5 : 2 = 15 cm²; O = 36 + 4 · 15 = 96 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Die Körperhöhe H statt der Seitenhöhe h verwenden.', fix: 'Für die Fläche eines Seitendreiecks braucht man dessen Höhe h.' },
        ],
        practice: [
          { problem: 'Wie viele Flächen und Kanten hat eine dreiseitige Pyramide?', solution: '4 Flächen, 6 Kanten', steps: ['n = 3.', '3 + 1 = 4 Flächen, 2 · 3 = 6 Kanten.'] },
          { problem: 'Eine regelmäßige quadratische Pyramide hat a = 10 cm und h = 13 cm. Bestimmen Sie den Oberflächeninhalt.', solution: '360 cm²', steps: ['G = 100 cm²; ein Seitendreieck 10 · 13 : 2 = 65 cm².', 'O = 100 + 4 · 65 = 360 cm².'] },
          { problem: 'Eine regelmäßige quadratische Pyramide hat a = 10 cm und H = 12 cm. Bestimmen Sie h.', solution: '13 cm', steps: ['h² = 12² + 5² = 144 + 25 = 169.', 'h = 13 cm.'] },
        ],
      },
    },

    // ───────── 5. Volume of prisms and pyramids
    {
      slug: 'g7-transformations-solids-volume',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Trupi', 'Solid', 'Körper'), cells: [alt('Prizmi', 'Prism', 'Prisma'), alt('Piramida', 'Pyramid', 'Pyramide')] },
          { head: alt('Vëllimi', 'Volume', 'Volumen'), cells: ['V = B · H', 'V = B · H : 3'] },
          { head: alt('Shembull', 'Example', 'Beispiel'), cells: ['12 · 5 = 60 cm³', '36 · 10 : 3 = 120 cm³'] },
        ],
        caption: alt('Piramida me të njëjtën bazë dhe lartësi si prizmi ka një të tretën e vëllimit të tij.', 'A pyramid with the same base and height as a prism has one third of its volume.', 'Eine Pyramide mit gleicher Grundfläche und Höhe wie ein Prisma hat ein Drittel seines Volumens.'),
        alt: alt('Tabela e formulave të vëllimit: prizmi B · H, piramida B · H : 3, me shembuj.', 'Table of volume formulas: prism B · H, pyramid B · H ÷ 3, with examples.', 'Tabelle der Volumenformeln: Prisma G · H, Pyramide G · H : 3, mit Beispielen.'),
      }],
      answers: {
        examples: [[['12 * 5', 60]], [['6^2 * 10 / 3', 120]]],
        practice: [[['4 * 3 * 2.5', 30]], [['(3 * 4 / 2) * 8', 48]], [['9 * 7 / 3', 21]]],
      },
      al: {
        title: 'Vëllimi i prizmit dhe i piramidës',
        objectives: ['Të njehsoni vëllimin e prizmit me V = B · H.', 'Të njehsoni vëllimin e piramidës me V = B · H : 3.'],
        theory: 'Vëllimi i prizmit është sipërfaqja e bazës herë lartësia: V = B · H. Për kuboidin B = a · b, pra V = a · b · c. Për prizmin trekëndor B është sipërfaqja e trekëndëshit.\n\nVëllimi i piramidës është një e treta e vëllimit të prizmit me të njëjtën bazë dhe lartësi: V = B · H : 3. Kjo mund të provohet duke mbushur prizmin me ujë nga piramida tri herë.\n\nVëllimi matet në njësi kubike: cm³, dm³, m³; 1 l = 1 dm³ = 1 000 cm³.',
        keyPoints: ['Prizmi: V = B · H', 'Piramida: V = B · H : 3', '1 l = 1 dm³ = 1 000 cm³'],
        examples: [
          { example: 'Prizmi ka bazë me sipërfaqe 12 cm² dhe lartësi 5 cm. Gjeni vëllimin.', solution: 'V = 12 · 5 = 60 cm³.' },
          { example: 'Piramida ka bazë katror me brinjë 6 cm dhe lartësi 10 cm. Gjeni vëllimin.', solution: 'B = 36 cm²; V = 36 · 10 : 3 = 120 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Vëllimi i piramidës = B · H (si te prizmi).', fix: 'Te piramida pjesëtohet me 3: V = B · H : 3.' },
          { mistake: 'Përdoret lartësia e faqes anësore h në vend të lartësisë H.', fix: 'Për vëllimin duhet lartësia e trupit H, pingul mbi bazë.' },
        ],
        practice: [
          { problem: 'Gjeni vëllimin e kuboidit 4 cm × 3 cm × 2,5 cm.', solution: '30 cm³', steps: ['V = 4 · 3 · 2,5.', 'V = 30 cm³.'] },
          { problem: 'Prizmi trekëndor ka si bazë trekëndësh kënddrejtë me katete 3 cm dhe 4 cm; lartësia e prizmit 8 cm. Gjeni vëllimin.', solution: '48 cm³', steps: ['B = 3 · 4 : 2 = 6 cm².', 'V = 6 · 8 = 48 cm³.'] },
          { problem: 'Piramida ka bazë 9 cm² dhe lartësi 7 cm. Gjeni vëllimin.', solution: '21 cm³', steps: ['V = 9 · 7 : 3.', 'V = 21 cm³.'] },
        ],
      },
      en: {
        title: 'Volume of prisms and pyramids',
        objectives: ['Work out the volume of a prism with V = B · H.', 'Work out the volume of a pyramid with V = B · H ÷ 3.'],
        theory: 'The volume of a prism is the base area times the height: V = B · H. For a cuboid B = a · b, so V = a · b · c. For a triangular prism B is the area of the triangle.\n\nThe volume of a pyramid is one third of the volume of a prism with the same base and height: V = B · H ÷ 3. You can test this by filling the prism with water from the pyramid three times.\n\nVolume is measured in cubic units: cm³, dm³, m³; 1 l = 1 dm³ = 1 000 cm³.',
        keyPoints: ['Prism: V = B · H', 'Pyramid: V = B · H ÷ 3', '1 l = 1 dm³ = 1 000 cm³'],
        examples: [
          { example: 'A prism has a base area of 12 cm² and a height of 5 cm. Find its volume.', solution: 'V = 12 · 5 = 60 cm³.' },
          { example: 'A pyramid has a square base with side 6 cm and a height of 10 cm. Find its volume.', solution: 'B = 36 cm²; V = 36 · 10 ÷ 3 = 120 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Volume of a pyramid = B · H (as for a prism).', fix: 'For a pyramid divide by 3: V = B · H ÷ 3.' },
          { mistake: 'Using the slant height h instead of the height H.', fix: 'Volume needs the height H of the solid, perpendicular to the base.' },
        ],
        practice: [
          { problem: 'Find the volume of a 4 cm × 3 cm × 2.5 cm cuboid.', solution: '30 cm³', steps: ['V = 4 · 3 · 2.5.', 'V = 30 cm³.'] },
          { problem: 'A triangular prism has a right triangle with legs 3 cm and 4 cm as its base; the prism is 8 cm tall. Find its volume.', solution: '48 cm³', steps: ['B = 3 · 4 ÷ 2 = 6 cm².', 'V = 6 · 8 = 48 cm³.'] },
          { problem: 'A pyramid has a base area of 9 cm² and a height of 7 cm. Find its volume.', solution: '21 cm³', steps: ['V = 9 · 7 ÷ 3.', 'V = 21 cm³.'] },
        ],
      },
      de: {
        title: 'Volumen von Prisma und Pyramide',
        objectives: ['Das Volumen eines Prismas mit V = G · H berechnen.', 'Das Volumen einer Pyramide mit V = G · H : 3 berechnen.'],
        theory: 'Das Volumen eines Prismas ist Grundfläche mal Höhe: V = G · H. Beim Quader ist G = a · b, also V = a · b · c. Beim dreiseitigen Prisma ist G der Flächeninhalt des Dreiecks.\n\nDas Volumen einer Pyramide ist ein Drittel des Volumens eines Prismas mit gleicher Grundfläche und Höhe: V = G · H : 3. Man kann das prüfen, indem man das Prisma dreimal mit Wasser aus der Pyramide füllt.\n\nDas Volumen misst man in Kubikeinheiten: cm³, dm³, m³; 1 l = 1 dm³ = 1 000 cm³.',
        keyPoints: ['Prisma: V = G · H', 'Pyramide: V = G · H : 3', '1 l = 1 dm³ = 1 000 cm³'],
        examples: [
          { example: 'Ein Prisma hat die Grundfläche 12 cm² und die Höhe 5 cm. Bestimmen Sie das Volumen.', solution: 'V = 12 · 5 = 60 cm³.' },
          { example: 'Eine Pyramide hat eine quadratische Grundfläche mit 6 cm Seitenlänge und die Höhe 10 cm. Bestimmen Sie das Volumen.', solution: 'G = 36 cm²; V = 36 · 10 : 3 = 120 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Volumen der Pyramide = G · H (wie beim Prisma).', fix: 'Bei der Pyramide durch 3 teilen: V = G · H : 3.' },
          { mistake: 'Die Seitenhöhe h statt der Körperhöhe H verwenden.', fix: 'Für das Volumen braucht man die Körperhöhe H, senkrecht zur Grundfläche.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie das Volumen eines Quaders 4 cm × 3 cm × 2,5 cm.', solution: '30 cm³', steps: ['V = 4 · 3 · 2,5.', 'V = 30 cm³.'] },
          { problem: 'Ein dreiseitiges Prisma hat als Grundfläche ein rechtwinkliges Dreieck mit den Katheten 3 cm und 4 cm; das Prisma ist 8 cm hoch. Bestimmen Sie das Volumen.', solution: '48 cm³', steps: ['G = 3 · 4 : 2 = 6 cm².', 'V = 6 · 8 = 48 cm³.'] },
          { problem: 'Eine Pyramide hat die Grundfläche 9 cm² und die Höhe 7 cm. Bestimmen Sie das Volumen.', solution: '21 cm³', steps: ['V = 9 · 7 : 3.', 'V = 21 cm³.'] },
        ],
      },
    },
  ],
};
