// Grade 6 · Theme 10: Geometric transformations and solids (May–June)
const alt = (al, en, de) => ({ al, en, de });
const sq = (x, y, s = 1) => [[x, y], [x + s, y], [x + s, y + s], [x, y + s]];

export default {
  id: 'g6-transformations-solids',
  i18n: {
    al: { title: 'Shndërrimet gjeometrike dhe trupat', description: 'Sistemi koordinativ, simetria boshtore dhe qendrore, kubi, kuboidi dhe hapja e tyre.' },
    en: { title: 'Transformations and solids', description: 'The coordinate system, reflection and point symmetry, the cube and cuboid and their nets.' },
    de: { title: 'Abbildungen und Körper', description: 'Koordinatensystem, Achsen- und Punktspiegelung, Würfel, Quader und ihre Netze.' },
  },
  lessons: [
    // ───────── 1. Coordinate system
    {
      slug: 'g6-transformations-solids-coordinate-system',
      visuals: [{
        type: 'geoFigure', view: { xMin: -5, xMax: 5, yMin: -4, yMax: 5 }, grid: true, axes: true, height: 240,
        shapes: [
          { kind: 'point', at: [2, 3], label: alt('A(2, 3)', 'A(2, 3)', 'A(2 | 3)'), color: 'primary' },
          { kind: 'point', at: [-1, 4], label: alt('B(−1, 4)', 'B(−1, 4)', 'B(−1 | 4)'), color: 'secondary', labelPos: 'nw' },
          { kind: 'point', at: [-3, -2], label: alt('C(−3, −2)', 'C(−3, −2)', 'C(−3 | −2)'), color: 'success', labelPos: 'sw' },
          { kind: 'point', at: [4, -1], label: alt('D(4, −1)', 'D(4, −1)', 'D(4 | −1)'), color: 'purple', labelPos: 'se' },
          { kind: 'segment', from: [0, 0], to: [2, 0], color: 'primary', dashed: true },
          { kind: 'segment', from: [2, 0], to: [2, 3], color: 'primary', dashed: true },
        ],
        caption: alt('A(2, 3): 2 njësi djathtas, pastaj 3 lart.', 'A(2, 3): 2 units right, then 3 up.', 'A(2 | 3): 2 Einheiten nach rechts, dann 3 nach oben.'),
        alt: alt('Rrjetë koordinative me pikat A(2, 3), B(−1, 4), C(−3, −2) dhe D(4, −1).', 'A coordinate grid with points A(2, 3), B(−1, 4), C(−3, −2) and D(4, −1).', 'Ein Koordinatengitter mit den Punkten A(2|3), B(−1|4), C(−3|−2) und D(4|−1).'),
      }],
      answers: {
        examples: ['text', [['5 - 1', 4]]],
        practice: ['text', [['(5 - 1) * (3 - 1)', 8]], 'text'],
      },
      al: {
        title: 'Sistemi koordinativ',
        objectives: ['Të lexoni dhe të shënoni pika me koordinata (x, y).', 'Të llogaritni largësi horizontale dhe vertikale në rrjetë.'],
        theory: 'Sistemi koordinativ ka dy boshte pingule: boshtin x (horizontal) dhe boshtin y (vertikal). Ato priten në origjinën O(0, 0).\n\nÇdo pikë ka dy koordinata: P(x, y). E para (abshisa) tregon sa njësi lëvizim majtas ose djathtas; e dyta (ordinata) sa njësi lart ose poshtë. A(2, 3): 2 djathtas, 3 lart. B(−1, 4): 1 majtas, 4 lart.\n\nBoshtet e ndajnë rrafshin në katër kuadrante. Dy pika me të njëjtën y janë në një vijë horizontale; largësia ndërmjet tyre është ndryshesa e x-ve.',
        keyPoints: ['P(x, y): së pari x (majtas/djathtas), pastaj y (poshtë/lart).', 'Origjina O(0, 0).', 'E njëjta y → largësia = ndryshesa e x-ve.'],
        examples: [
          { example: 'Si e shënojmë pikën A(2, 3)?', solution: 'Nga origjina: 2 njësi djathtas, pastaj 3 njësi lart.' },
          { example: 'Sa njësi larg janë pikat (1, 2) dhe (5, 2)?', solution: 'Kanë të njëjtën y, pra 5 − 1 = 4 njësi.' },
        ],
        commonMistakes: [
          { mistake: 'Ngatërrohet radha: A(2, 3) shënohet 3 djathtas e 2 lart.', fix: 'Gjithmonë së pari x (horizontalisht), pastaj y.' },
        ],
        practice: [
          { problem: 'Një pikë është 3 njësi majtas dhe 2 njësi poshtë origjinës. Cilat janë koordinatat?', solution: '(−3, −2)', steps: ['Majtas → x negativ: −3.', 'Poshtë → y negativ: −2.'] },
          { problem: 'Drejtkëndëshi ka kulmet (1, 1), (5, 1), (5, 3), (1, 3). Sa është sipërfaqja?', solution: '8 njësi katrore', steps: ['Gjatësia: 5 − 1 = 4.', 'Gjerësia: 3 − 1 = 2.', 'S = 4 · 2 = 8.'] },
          { problem: 'Ku shtrihet pika (0, 5)?', solution: 'Në boshtin y.', steps: ['x = 0: nuk lëvizim majtas ose djathtas.', 'Pika është mbi origjinë, në boshtin y.'] },
        ],
      },
      en: {
        title: 'The coordinate system',
        objectives: ['Read and plot points with coordinates (x, y).', 'Work out horizontal and vertical distances on the grid.'],
        theory: 'A coordinate system has two perpendicular axes: the x-axis (horizontal) and the y-axis (vertical). They cross at the origin O(0, 0).\n\nEvery point has two coordinates: P(x, y). The first tells how many units to move left or right; the second how many units up or down. A(2, 3): 2 right, 3 up. B(−1, 4): 1 left, 4 up.\n\nThe axes split the plane into four quadrants. Two points with the same y lie on a horizontal line; the distance between them is the difference of their x-values.',
        keyPoints: ['P(x, y): first x (left/right), then y (down/up).', 'Origin O(0, 0).', 'Same y → distance = difference of the x-values.'],
        examples: [
          { example: 'How do we plot point A(2, 3)?', solution: 'From the origin: 2 units right, then 3 units up.' },
          { example: 'How far apart are the points (1, 2) and (5, 2)?', solution: 'They have the same y, so 5 − 1 = 4 units.' },
        ],
        commonMistakes: [
          { mistake: 'Swapping the order: plotting A(2, 3) as 3 right and 2 up.', fix: 'Always x first (across), then y.' },
        ],
        practice: [
          { problem: 'A point is 3 units left of and 2 units below the origin. What are its coordinates?', solution: '(−3, −2)', steps: ['Left → negative x: −3.', 'Down → negative y: −2.'] },
          { problem: 'A rectangle has vertices (1, 1), (5, 1), (5, 3), (1, 3). What is its area?', solution: '8 square units', steps: ['Length: 5 − 1 = 4.', 'Width: 3 − 1 = 2.', 'A = 4 · 2 = 8.'] },
          { problem: 'Where does the point (0, 5) lie?', solution: 'On the y-axis.', steps: ['x = 0: no movement left or right.', 'The point is above the origin, on the y-axis.'] },
        ],
      },
      de: {
        title: 'Das Koordinatensystem',
        objectives: ['Punkte mit Koordinaten (x | y) ablesen und eintragen.', 'Waagerechte und senkrechte Abstände im Gitter bestimmen.'],
        theory: 'Ein Koordinatensystem hat zwei senkrecht aufeinanderstehende Achsen: die x-Achse (waagerecht) und die y-Achse (senkrecht). Sie schneiden sich im Ursprung O(0 | 0).\n\nJeder Punkt hat zwei Koordinaten: P(x | y). Die erste gibt an, wie viele Einheiten man nach links oder rechts geht, die zweite, wie viele nach oben oder unten. A(2 | 3): 2 nach rechts, 3 nach oben. B(−1 | 4): 1 nach links, 4 nach oben.\n\nDie Achsen teilen die Ebene in vier Quadranten. Zwei Punkte mit gleichem y liegen auf einer waagerechten Linie; ihr Abstand ist die Differenz der x-Werte.',
        keyPoints: ['P(x | y): zuerst x (links/rechts), dann y (unten/oben).', 'Ursprung O(0 | 0).', 'Gleiches y → Abstand = Differenz der x-Werte.'],
        examples: [
          { example: 'Wie trägt man den Punkt A(2 | 3) ein?', solution: 'Vom Ursprung aus 2 Einheiten nach rechts, dann 3 nach oben.' },
          { example: 'Wie weit sind die Punkte (1 | 2) und (5 | 2) voneinander entfernt?', solution: 'Sie haben dasselbe y, also 5 − 1 = 4 Einheiten.' },
        ],
        commonMistakes: [
          { mistake: 'Die Reihenfolge vertauschen: A(2 | 3) als 3 nach rechts und 2 nach oben eintragen.', fix: 'Immer zuerst x (waagerecht), dann y.' },
        ],
        practice: [
          { problem: 'Ein Punkt liegt 3 Einheiten links und 2 Einheiten unterhalb des Ursprungs. Wie lauten seine Koordinaten?', solution: '(−3 | −2)', steps: ['Links → negatives x: −3.', 'Unten → negatives y: −2.'] },
          { problem: 'Ein Rechteck hat die Ecken (1 | 1), (5 | 1), (5 | 3), (1 | 3). Wie groß ist sein Flächeninhalt?', solution: '8 Flächeneinheiten', steps: ['Länge: 5 − 1 = 4.', 'Breite: 3 − 1 = 2.', 'A = 4 · 2 = 8.'] },
          { problem: 'Wo liegt der Punkt (0 | 5)?', solution: 'Auf der y-Achse.', steps: ['x = 0: keine Bewegung nach links oder rechts.', 'Der Punkt liegt über dem Ursprung auf der y-Achse.'] },
        ],
      },
    },

    // ───────── 2. Reflection and point symmetry
    {
      slug: 'g6-transformations-solids-symmetry',
      visuals: [{
        type: 'geoFigure', view: { xMin: -5, xMax: 5, yMin: -1, yMax: 5 }, grid: true, axes: true, height: 190,
        shapes: [
          { kind: 'polygon', points: [[1, 1], [4, 1], [3, 4]], fill: true, color: 'primary' },
          { kind: 'polygon', points: [[-1, 1], [-4, 1], [-3, 4]], fill: true, color: 'secondary', dashed: true },
          { kind: 'segment', from: [3, 4], to: [-3, 4], color: 'success', dashed: true },
          { kind: 'point', at: [3, 4], label: alt('A(3, 4)', 'A(3, 4)', 'A(3 | 4)'), color: 'primary' },
          { kind: 'point', at: [-3, 4], label: alt("A'(−3, 4)", "A'(−3, 4)", "A'(−3 | 4)"), color: 'secondary', labelPos: 'nw' },
        ],
        caption: alt('Simetria ndaj boshtit y: x ndryshon shenjë, y mbetet. A(3, 4) → A\'(−3, 4).', 'Reflection in the y-axis: x changes sign, y stays. A(3, 4) → A\'(−3, 4).', 'Spiegelung an der y-Achse: x wechselt das Vorzeichen, y bleibt. A(3|4) → A\'(−3|4).'),
        alt: alt('Një trekëndësh dhe pasqyrimi i tij ndaj boshtit y.', 'A triangle and its mirror image in the y-axis.', 'Ein Dreieck und sein Spiegelbild an der y-Achse.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: [[['4', 4]], [['2', 2]], 'text'],
      },
      al: {
        title: 'Simetria boshtore dhe qendrore',
        objectives: ['Të pasqyroni figura ndaj një boshti dhe ndaj një pike.', 'Të gjeni boshtet e simetrisë së figurave të njohura.'],
        theory: 'Simetria boshtore (pasqyrimi) e kthen figurën si në pasqyrë: çdo pikë dhe pasqyrimi i saj janë njësoj larg nga boshti, në anë të kundërta. Ndaj boshtit y: (x, y) → (−x, y). Ndaj boshtit x: (x, y) → (x, −y).\n\nSimetria qendrore ndaj pikës O e rrotullon figurën me 180°: çdo pikë dhe imazhi i saj janë në një drejtëz me O, njësoj larg në anë të kundërta. Ndaj origjinës: (x, y) → (−x, −y).\n\nNjë figurë ka bosht simetrie nëse, kur e palosim përgjatë tij, të dyja gjysmat puthiten. Katrori ka 4 boshte simetrie, drejtkëndëshi 2, rrethi pafundësisht shumë.',
        keyPoints: ['Ndaj boshtit y: (x, y) → (−x, y)', 'Ndaj boshtit x: (x, y) → (x, −y)', 'Ndaj origjinës: (x, y) → (−x, −y)'],
        examples: [
          { example: 'Gjeni pasqyrimin e A(3, 1) ndaj boshtit y.', solution: 'x ndryshon shenjë: A\'(−3, 1).' },
          { example: 'Gjeni simetriken e pikës (2, −4) ndaj origjinës.', solution: 'Të dyja koordinatat ndryshojnë shenjë: (−2, 4).' },
        ],
        commonMistakes: [
          { mistake: 'Te pasqyrimi ndaj boshtit x ndryshohet x-i.', fix: 'Boshti x nuk ndryshon: ndryshon koordinata tjetër, y.' },
        ],
        practice: [
          { problem: 'Sa boshte simetrie ka katrori?', solution: '4', steps: ['2 boshte nëpër meset e brinjëve.', '2 boshte përgjatë diagonaleve.'] },
          { problem: 'Sa boshte simetrie ka një drejtkëndësh që nuk është katror?', solution: '2', steps: ['Nëpër meset e brinjëve të kundërta.', 'Diagonalet nuk janë boshte simetrie.'] },
          { problem: 'Gjeni pasqyrimin e A(4, 2) ndaj boshtit x.', solution: '(4, −2)', steps: ['x mbetet 4.', 'y ndryshon shenjë: −2.'] },
        ],
      },
      en: {
        title: 'Reflection and point symmetry',
        objectives: ['Reflect shapes in a line and in a point.', 'Find the lines of symmetry of familiar shapes.'],
        theory: 'A reflection (line symmetry) flips a shape as in a mirror: each point and its image are the same distance from the mirror line, on opposite sides. In the y-axis: (x, y) → (−x, y). In the x-axis: (x, y) → (x, −y).\n\nPoint symmetry about a point O turns the shape through 180°: each point and its image lie on a line through O, the same distance away on opposite sides. About the origin: (x, y) → (−x, −y).\n\nA shape has a line of symmetry if folding along it makes the two halves match. A square has 4 lines of symmetry, a rectangle 2, a circle infinitely many.',
        keyPoints: ['In the y-axis: (x, y) → (−x, y)', 'In the x-axis: (x, y) → (x, −y)', 'About the origin: (x, y) → (−x, −y)'],
        examples: [
          { example: 'Find the image of A(3, 1) reflected in the y-axis.', solution: 'x changes sign: A\'(−3, 1).' },
          { example: 'Find the image of (2, −4) under point symmetry about the origin.', solution: 'Both coordinates change sign: (−2, 4).' },
        ],
        commonMistakes: [
          { mistake: 'Changing x when reflecting in the x-axis.', fix: 'The x-axis stays fixed: the other coordinate, y, changes.' },
        ],
        practice: [
          { problem: 'How many lines of symmetry does a square have?', solution: '4', steps: ['2 lines through the midpoints of the sides.', '2 lines along the diagonals.'] },
          { problem: 'How many lines of symmetry does a rectangle that is not a square have?', solution: '2', steps: ['Through the midpoints of opposite sides.', 'The diagonals are not lines of symmetry.'] },
          { problem: 'Find the image of A(4, 2) reflected in the x-axis.', solution: '(4, −2)', steps: ['x stays 4.', 'y changes sign: −2.'] },
        ],
      },
      de: {
        title: 'Achsen- und Punktspiegelung',
        objectives: ['Figuren an einer Geraden und an einem Punkt spiegeln.', 'Symmetrieachsen bekannter Figuren finden.'],
        theory: 'Bei der Achsenspiegelung wird eine Figur wie im Spiegel umgeklappt: Jeder Punkt und sein Bildpunkt haben denselben Abstand von der Spiegelachse und liegen auf verschiedenen Seiten. An der y-Achse: (x | y) → (−x | y). An der x-Achse: (x | y) → (x | −y).\n\nBei der Punktspiegelung an einem Punkt O wird die Figur um 180° gedreht: Punkt und Bildpunkt liegen auf einer Geraden durch O, gleich weit entfernt auf verschiedenen Seiten. Am Ursprung: (x | y) → (−x | −y).\n\nEine Figur hat eine Symmetrieachse, wenn beim Falten entlang dieser Achse beide Hälften genau aufeinanderliegen. Ein Quadrat hat 4 Symmetrieachsen, ein Rechteck 2, ein Kreis unendlich viele.',
        keyPoints: ['An der y-Achse: (x | y) → (−x | y)', 'An der x-Achse: (x | y) → (x | −y)', 'Am Ursprung: (x | y) → (−x | −y)'],
        examples: [
          { example: 'Spiegeln Sie A(3 | 1) an der y-Achse.', solution: 'x wechselt das Vorzeichen: A\'(−3 | 1).' },
          { example: 'Spiegeln Sie den Punkt (2 | −4) am Ursprung.', solution: 'Beide Koordinaten wechseln das Vorzeichen: (−2 | 4).' },
        ],
        commonMistakes: [
          { mistake: 'Bei der Spiegelung an der x-Achse x verändern.', fix: 'Die x-Achse bleibt fest: Es ändert sich die andere Koordinate, y.' },
        ],
        practice: [
          { problem: 'Wie viele Symmetrieachsen hat ein Quadrat?', solution: '4', steps: ['2 Achsen durch die Seitenmitten.', '2 Achsen entlang der Diagonalen.'] },
          { problem: 'Wie viele Symmetrieachsen hat ein Rechteck, das kein Quadrat ist?', solution: '2', steps: ['Durch die Mitten gegenüberliegender Seiten.', 'Die Diagonalen sind keine Symmetrieachsen.'] },
          { problem: 'Spiegeln Sie A(4 | 2) an der x-Achse.', solution: '(4 | −2)', steps: ['x bleibt 4.', 'y wechselt das Vorzeichen: −2.'] },
        ],
      },
    },

    // ───────── 3. Cube and cuboid
    {
      slug: 'g6-transformations-solids-cube-cuboid',
      visuals: [{
        type: 'solid', kind: 'cuboid', a: 5, b: 5, c: 5, labels: { a: '5 cm', b: '5 cm', c: '5 cm' },
        caption: alt('Kubi: 6 faqe katrore, 12 brinjë, 8 kulme.', 'A cube: 6 square faces, 12 edges, 8 vertices.', 'Ein Würfel: 6 quadratische Flächen, 12 Kanten, 8 Ecken.'),
        alt: alt('Kub me brinjë 5 cm.', 'A cube with edge 5 cm.', 'Ein Würfel mit 5 cm Kantenlänge.'),
      }],
      answers: {
        examples: [[['6 * 5 * 5', 150]], [['4 * 3 * 2', 24]]],
        practice: [[['12 * 3', 36]], [['2 * (5*4 + 5*3 + 4*3)', 94]], [['4 * 4 * 4', 64]]],
      },
      al: {
        title: 'Kubi dhe kuboidi',
        objectives: ['Të njihni faqet, brinjët dhe kulmet e kubit dhe kuboidit.', 'Të llogaritni sipërfaqen e plotë dhe vëllimin e tyre.'],
        theory: 'Kuboidi ka 6 faqe drejtkëndëshe, 12 brinjë dhe 8 kulme. Faqet e kundërta janë të barabarta. Kubi është kuboid me të gjitha brinjët të barabarta, pra 6 faqet e tij janë katrorë të njëjtë.\n\nSipërfaqja e plotë është shuma e sipërfaqeve të 6 faqeve. Te kuboidi me përmasa a, b, c: S = 2 · (a · b + a · c + b · c). Te kubi me brinjë a: S = 6 · a · a.\n\nVëllimi: kuboidi V = a · b · c, kubi V = a · a · a. Sipërfaqja matet në cm², vëllimi në cm³.',
        keyPoints: ['6 faqe, 12 brinjë, 8 kulme.', 'Kuboidi: S = 2(ab + ac + bc), V = abc', 'Kubi: S = 6 · a · a, V = a · a · a'],
        examples: [
          { example: 'Sa është sipërfaqja e plotë e kubit me brinjë 5 cm?', solution: 'Një faqe: 5 · 5 = 25 cm². Gjashtë faqe: 6 · 25 = 150 cm².' },
          { example: 'Sa është vëllimi i kuboidit 4 cm × 3 cm × 2 cm?', solution: 'V = 4 · 3 · 2 = 24 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Sipërfaqja dhe vëllimi ngatërrohen (cm² me cm³).', fix: 'Sipërfaqja = sa letër mbulon trupin (cm²); vëllimi = sa vend zë (cm³).' },
        ],
        practice: [
          { problem: 'Sa është gjatësia e të gjitha brinjëve të kubit me brinjë 3 cm?', solution: '36 cm', steps: ['Kubi ka 12 brinjë.', '12 · 3 = 36 cm.'] },
          { problem: 'Sa është sipërfaqja e plotë e kuboidit 5 cm × 4 cm × 3 cm?', solution: '94 cm²', steps: ['ab = 20, ac = 15, bc = 12.', '2 · (20 + 15 + 12) = 2 · 47 = 94 cm².'] },
          { problem: 'Sa është vëllimi i kubit me brinjë 4 cm?', solution: '64 cm³', steps: ['V = 4 · 4 · 4.', '= 64 cm³.'] },
        ],
      },
      en: {
        title: 'The cube and the cuboid',
        objectives: ['Know the faces, edges and vertices of the cube and cuboid.', 'Work out their total surface area and volume.'],
        theory: 'A cuboid has 6 rectangular faces, 12 edges and 8 vertices. Opposite faces are equal. A cube is a cuboid with all edges equal, so its 6 faces are identical squares.\n\nThe total surface area is the sum of the areas of the 6 faces. For a cuboid with edges a, b, c: S = 2 · (a · b + a · c + b · c). For a cube with edge a: S = 6 · a · a.\n\nVolume: cuboid V = a · b · c, cube V = a · a · a. Area is measured in cm², volume in cm³.',
        keyPoints: ['6 faces, 12 edges, 8 vertices.', 'Cuboid: S = 2(ab + ac + bc), V = abc', 'Cube: S = 6 · a · a, V = a · a · a'],
        examples: [
          { example: 'What is the total surface area of a cube with edge 5 cm?', solution: 'One face: 5 · 5 = 25 cm². Six faces: 6 · 25 = 150 cm².' },
          { example: 'What is the volume of a 4 cm × 3 cm × 2 cm cuboid?', solution: 'V = 4 · 3 · 2 = 24 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Mixing up surface area and volume (cm² and cm³).', fix: 'Surface area = how much paper covers the solid (cm²); volume = how much space it takes (cm³).' },
        ],
        practice: [
          { problem: 'What is the total length of all the edges of a cube with edge 3 cm?', solution: '36 cm', steps: ['A cube has 12 edges.', '12 · 3 = 36 cm.'] },
          { problem: 'What is the total surface area of a 5 cm × 4 cm × 3 cm cuboid?', solution: '94 cm²', steps: ['ab = 20, ac = 15, bc = 12.', '2 · (20 + 15 + 12) = 2 · 47 = 94 cm².'] },
          { problem: 'What is the volume of a cube with edge 4 cm?', solution: '64 cm³', steps: ['V = 4 · 4 · 4.', '= 64 cm³.'] },
        ],
      },
      de: {
        title: 'Würfel und Quader',
        objectives: ['Flächen, Kanten und Ecken von Würfel und Quader kennen.', 'Oberflächeninhalt und Volumen berechnen.'],
        theory: 'Ein Quader hat 6 rechteckige Flächen, 12 Kanten und 8 Ecken. Gegenüberliegende Flächen sind gleich. Ein Würfel ist ein Quader mit lauter gleich langen Kanten; seine 6 Flächen sind gleiche Quadrate.\n\nDer Oberflächeninhalt ist die Summe der Flächeninhalte der 6 Flächen. Für einen Quader mit den Kanten a, b, c: O = 2 · (a · b + a · c + b · c). Für einen Würfel mit Kante a: O = 6 · a · a.\n\nVolumen: Quader V = a · b · c, Würfel V = a · a · a. Flächen misst man in cm², Volumen in cm³.',
        keyPoints: ['6 Flächen, 12 Kanten, 8 Ecken.', 'Quader: O = 2(ab + ac + bc), V = abc', 'Würfel: O = 6 · a · a, V = a · a · a'],
        examples: [
          { example: 'Wie groß ist der Oberflächeninhalt eines Würfels mit 5 cm Kantenlänge?', solution: 'Eine Fläche: 5 · 5 = 25 cm². Sechs Flächen: 6 · 25 = 150 cm².' },
          { example: 'Wie groß ist das Volumen eines Quaders von 4 cm × 3 cm × 2 cm?', solution: 'V = 4 · 3 · 2 = 24 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Oberfläche und Volumen verwechseln (cm² und cm³).', fix: 'Oberfläche = wie viel Papier den Körper bedeckt (cm²); Volumen = wie viel Raum er einnimmt (cm³).' },
        ],
        practice: [
          { problem: 'Wie lang sind alle Kanten eines Würfels mit 3 cm Kantenlänge zusammen?', solution: '36 cm', steps: ['Ein Würfel hat 12 Kanten.', '12 · 3 = 36 cm.'] },
          { problem: 'Wie groß ist der Oberflächeninhalt eines Quaders von 5 cm × 4 cm × 3 cm?', solution: '94 cm²', steps: ['ab = 20, ac = 15, bc = 12.', '2 · (20 + 15 + 12) = 2 · 47 = 94 cm².'] },
          { problem: 'Wie groß ist das Volumen eines Würfels mit 4 cm Kantenlänge?', solution: '64 cm³', steps: ['V = 4 · 4 · 4.', '= 64 cm³.'] },
        ],
      },
    },

    // ───────── 4. Nets of solids
    {
      slug: 'g6-transformations-solids-nets',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.4, xMax: 4.4, yMin: -0.4, yMax: 3.4 }, height: 170,
        shapes: [
          { kind: 'polygon', points: sq(0, 1), fill: true, color: 'primary' },
          { kind: 'polygon', points: sq(1, 1), fill: true, color: 'secondary', label: { at: [1.5, 1.5], text: '1' } },
          { kind: 'polygon', points: sq(2, 1), fill: true, color: 'primary' },
          { kind: 'polygon', points: sq(3, 1), fill: true, color: 'secondary', label: { at: [3.5, 1.5], text: '1' } },
          { kind: 'polygon', points: sq(1, 2), fill: true, color: 'success', label: { at: [1.5, 2.5], text: '2' } },
          { kind: 'polygon', points: sq(1, 0), fill: true, color: 'success', label: { at: [1.5, 0.5], text: '2' } },
        ],
        caption: alt('Hapja e kubit: 6 katrorë. Faqet me të njëjtin numër janë përballë njëra-tjetrës.', 'A net of a cube: 6 squares. Faces with the same number end up opposite each other.', 'Ein Würfelnetz: 6 Quadrate. Flächen mit derselben Zahl liegen sich gegenüber.'),
        alt: alt('Hapja e kubit në formë kryqi me 6 katrorë.', 'A cross-shaped net of a cube made of 6 squares.', 'Ein kreuzförmiges Würfelnetz aus 6 Quadraten.'),
      }],
      answers: {
        examples: [[['6', 6]], 'text'],
        practice: [[['6 * 2 * 2', 24]], [['2 * (3*2 + 3*1 + 2*1)', 22]], 'text'],
      },
      al: {
        title: 'Hapja e trupave',
        objectives: ['Të njihni hapjen (rrjetën) e kubit dhe të kuboidit.', 'Të përdorni hapjen për të llogaritur sipërfaqen e plotë.'],
        theory: 'Nëse e presim një kuti përgjatë disa brinjëve dhe e shtrijmë në tavolinë, marrim hapjen e saj: një figurë e sheshtë që përbëhet nga të gjitha faqet. Hapja e kubit ka 6 katrorë të njëjtë; hapja e kuboidit ka 6 drejtkëndësha, tri çifte të barabarta.\n\nKubi ka 11 hapje të ndryshme, p.sh. në formë kryqi. Jo çdo figurë me 6 katrorë është hapje kubi: 6 katrorë në një rresht nuk palosen në kub, sepse dy faqe do të mbivendoseshin.\n\nSipërfaqja e hapjes është e barabartë me sipërfaqen e plotë të trupit.',
        keyPoints: ['Hapja e kubit: 6 katrorë të njëjtë.', 'Hapja e kuboidit: 3 çifte drejtkëndëshash të barabartë.', 'Sipërfaqja e hapjes = sipërfaqja e plotë e trupit.'],
        examples: [
          { example: 'Nga sa katrorë përbëhet hapja e një kubi?', solution: 'Nga 6 katrorë, një për çdo faqe.' },
          { example: 'Në hapjen në formë kryqi, cila faqe është përballë faqes së mesme?', solution: 'Katrori i fundit në rreshtin e gjatë, që palohet në anën tjetër.' },
        ],
        commonMistakes: [
          { mistake: 'Mendohet se çdo 6 katrorë të bashkuar formojnë kub.', fix: 'Provoni palosjen në mendje: asnjë faqe nuk duhet të mbivendoset.' },
        ],
        practice: [
          { problem: 'Sa është sipërfaqja e hapjes së kubit me brinjë 2 cm?', solution: '24 cm²', steps: ['Një katror: 2 · 2 = 4 cm².', '6 · 4 = 24 cm².'] },
          { problem: 'Sa është sipërfaqja e hapjes së kuboidit 3 cm × 2 cm × 1 cm?', solution: '22 cm²', steps: ['Çiftet: 3 · 2 = 6, 3 · 1 = 3, 2 · 1 = 2.', '2 · (6 + 3 + 2) = 22 cm².'] },
          { problem: 'A janë 6 katrorë në një rresht hapje e kubit?', solution: 'Jo', steps: ['Gjatë palosjes, katrori i pestë do të binte mbi të parin.', 'Kubi do të mbetej pa dy faqe dhe me dy të mbivendosura.'] },
        ],
      },
      en: {
        title: 'Nets of solids',
        objectives: ['Recognise nets of the cube and cuboid.', 'Use a net to work out the total surface area.'],
        theory: 'If we cut a box along some edges and lay it flat on the table, we get its net: a flat shape made of all the faces. A net of a cube has 6 equal squares; a net of a cuboid has 6 rectangles in three equal pairs.\n\nA cube has 11 different nets, for example the cross shape. Not every shape made of 6 squares is a cube net: 6 squares in a row do not fold into a cube, because two faces would overlap.\n\nThe area of the net equals the total surface area of the solid.',
        keyPoints: ['Cube net: 6 equal squares.', 'Cuboid net: 3 pairs of equal rectangles.', 'Area of the net = total surface area of the solid.'],
        examples: [
          { example: 'How many squares make up a net of a cube?', solution: '6 squares, one for each face.' },
          { example: 'In the cross-shaped net, which face is opposite the middle face?', solution: 'The last square of the long row, which folds round to the other side.' },
        ],
        commonMistakes: [
          { mistake: 'Thinking any 6 joined squares make a cube.', fix: 'Fold it in your head: no two faces may overlap.' },
        ],
        practice: [
          { problem: 'What is the area of a net of a cube with edge 2 cm?', solution: '24 cm²', steps: ['One square: 2 · 2 = 4 cm².', '6 · 4 = 24 cm².'] },
          { problem: 'What is the area of a net of a 3 cm × 2 cm × 1 cm cuboid?', solution: '22 cm²', steps: ['Pairs: 3 · 2 = 6, 3 · 1 = 3, 2 · 1 = 2.', '2 · (6 + 3 + 2) = 22 cm².'] },
          { problem: 'Are 6 squares in a row a net of a cube?', solution: 'No', steps: ['When folding, the fifth square would land on the first.', 'The cube would be missing two faces and have two overlapping.'] },
        ],
      },
      de: {
        title: 'Körpernetze',
        objectives: ['Netze von Würfel und Quader erkennen.', 'Mit dem Netz den Oberflächeninhalt berechnen.'],
        theory: 'Schneidet man eine Schachtel an einigen Kanten auf und legt sie flach auf den Tisch, erhält man ihr Netz: eine ebene Figur aus allen Flächen. Ein Würfelnetz besteht aus 6 gleichen Quadraten, ein Quadernetz aus 6 Rechtecken in drei gleichen Paaren.\n\nEin Würfel hat 11 verschiedene Netze, zum Beispiel das Kreuz. Nicht jede Figur aus 6 Quadraten ist ein Würfelnetz: 6 Quadrate in einer Reihe lassen sich nicht zu einem Würfel falten, weil sich zwei Flächen überdecken würden.\n\nDer Flächeninhalt des Netzes ist gleich dem Oberflächeninhalt des Körpers.',
        keyPoints: ['Würfelnetz: 6 gleiche Quadrate.', 'Quadernetz: 3 Paare gleicher Rechtecke.', 'Flächeninhalt des Netzes = Oberflächeninhalt des Körpers.'],
        examples: [
          { example: 'Aus wie vielen Quadraten besteht ein Würfelnetz?', solution: 'Aus 6 Quadraten, eines für jede Fläche.' },
          { example: 'Welche Fläche liegt beim Kreuznetz der mittleren Fläche gegenüber?', solution: 'Das letzte Quadrat der langen Reihe, das auf die andere Seite geklappt wird.' },
        ],
        commonMistakes: [
          { mistake: 'Glauben, je 6 zusammenhängende Quadrate ergeben einen Würfel.', fix: 'Im Kopf falten: Keine zwei Flächen dürfen sich überdecken.' },
        ],
        practice: [
          { problem: 'Wie groß ist der Flächeninhalt eines Würfelnetzes mit 2 cm Kantenlänge?', solution: '24 cm²', steps: ['Ein Quadrat: 2 · 2 = 4 cm².', '6 · 4 = 24 cm².'] },
          { problem: 'Wie groß ist der Flächeninhalt des Netzes eines Quaders von 3 cm × 2 cm × 1 cm?', solution: '22 cm²', steps: ['Paare: 3 · 2 = 6, 3 · 1 = 3, 2 · 1 = 2.', '2 · (6 + 3 + 2) = 22 cm².'] },
          { problem: 'Sind 6 Quadrate in einer Reihe ein Würfelnetz?', solution: 'Nein', steps: ['Beim Falten würde das fünfte Quadrat auf dem ersten landen.', 'Dem Würfel würden zwei Flächen fehlen, zwei würden sich überdecken.'] },
        ],
      },
    },
  ],
};
