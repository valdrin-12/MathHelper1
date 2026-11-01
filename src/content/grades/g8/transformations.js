// Grade 8 · Theme 5: Geometric transformations (10 hours)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g8-transformations',
  i18n: {
    al: { title: 'Shndërrimet gjeometrike', description: 'Vektori në planin koordinativ, zhvendosja paralele, simetria qendrore dhe boshtore, rrotullimi dhe homotetia.' },
    en: { title: 'Geometric transformations', description: 'Vectors on the coordinate plane, translation, reflection and point symmetry, rotation and enlargement.' },
    de: { title: 'Abbildungen', description: 'Vektoren im Koordinatensystem, Verschiebung, Achsen- und Punktspiegelung, Drehung und zentrische Streckung.' },
  },
  lessons: [
    // ───────── 1. Vectors
    {
      slug: 'g8-transformations-vectors',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 5.5, yMin: -0.5, yMax: 6 }, grid: true, axes: true, height: 230,
        shapes: [
          { kind: 'segment', from: [1, 1], to: [4, 5], color: 'primary', arrow: true },
          { kind: 'segment', from: [1, 1], to: [4, 1], color: 'secondary', dashed: true, label: '3' },
          { kind: 'segment', from: [4, 1], to: [4, 5], color: 'secondary', dashed: true, label: '4' },
          { kind: 'point', at: [1, 1], label: 'A', labelPos: 'w' },
          { kind: 'point', at: [4, 5], label: 'B', labelPos: 'n' },
        ],
        caption: alt('Vektori AB = (3, 4): 3 djathtas dhe 4 lart; gjatësia |AB| = √(3² + 4²) = 5.', 'The vector AB = (3, 4): 3 right and 4 up; its length |AB| = √(3² + 4²) = 5.', 'Der Vektor AB = (3 | 4): 3 nach rechts und 4 nach oben; Länge |AB| = √(3² + 4²) = 5.'),
        alt: alt('Shigjetë nga A(1, 1) te B(4, 5) me përbërëset 3 dhe 4 me vija të ndërprera.', 'An arrow from A(1, 1) to B(4, 5) with the components 3 and 4 dashed.', 'Ein Pfeil von A(1 | 1) nach B(4 | 5) mit den gestrichelten Komponenten 3 und 4.'),
      }],
      answers: {
        examples: [[['4 - 1', 3], ['5 - 1', 4], ['sqrt(3^2 + 4^2)', 5]], [['2 + 1', 3], ['-1 + 3', 2]]],
        practice: [[['sqrt(3^2 + 4^2)', 5]], 'text', [['sqrt(6^2 + 8^2)', 10]]],
      },
      al: {
        title: 'Vektori në planin koordinativ',
        objectives: ['Të gjeni përbërëset dhe gjatësinë e një vektori.', 'Të mblidhni vektorë dhe t\'i shumëzoni me numër.'],
        theory: 'Vektori është segment i orientuar: ka gjatësi, drejtim dhe kah. Vektori nga A(x₁, y₁) te B(x₂, y₂) ka përbërëset AB = (x₂ − x₁, y₂ − y₁): sa lëvizim horizontalisht dhe sa vertikalisht.\n\nGjatësia (moduli) del nga Pitagora: |AB| = √((x₂ − x₁)² + (y₂ − y₁)²). Për A(1, 1) dhe B(4, 5): AB = (3, 4), |AB| = 5.\n\nVektorët mblidhen përbërëse me përbërëse: (2, −1) + (1, 3) = (3, 2). Shumëzimi me numër: 2 · (2, −1) = (4, −2), vektor me të njëjtin drejtim dhe dyfish më i gjatë.',
        keyPoints: ['AB = (x₂ − x₁, y₂ − y₁)', '|v| = √(a² + b²) për v = (a, b)', '(a, b) + (c, d) = (a + c, b + d)'],
        examples: [
          { example: 'A(1, 1), B(4, 5). Gjeni AB dhe |AB|.', solution: 'AB = (4 − 1, 5 − 1) = (3, 4); |AB| = √(9 + 16) = 5.' },
          { example: 'u = (2, −1), v = (1, 3). Gjeni u + v.', solution: 'u + v = (2 + 1, −1 + 3) = (3, 2).' },
        ],
        commonMistakes: [
          { mistake: 'AB = (x₁ − x₂, y₁ − y₂)', fix: 'Fundi minus fillimi: AB = B − A. Ndryshe merret vektori i kundërt BA.' },
          { mistake: '|(3, 4)| = 3 + 4 = 7', fix: 'Gjatësia është hipotenuzë: √(9 + 16) = 5.' },
        ],
        practice: [
          { problem: 'A(−2, 3), B(1, −1). Gjeni AB dhe gjatësinë e tij.', solution: 'AB = (3, −4); |AB| = 5', steps: ['AB = (1 − (−2), −1 − 3) = (3, −4).', '|AB| = √(9 + 16) = 5.'] },
          { problem: 'u = (2, −1). Gjeni 2u.', solution: '(4, −2)', steps: ['Shumëzojmë çdo përbërëse me 2.', '(4, −2).'] },
          { problem: 'Gjeni gjatësinë e vektorit (6, 8).', solution: '10', steps: ['√(36 + 64) = √100.', '= 10.'] },
        ],
      },
      en: {
        title: 'Vectors on the coordinate plane',
        objectives: ['Find the components and the length of a vector.', 'Add vectors and multiply them by a number.'],
        theory: 'A vector is a directed segment: it has a length and a direction. The vector from A(x₁, y₁) to B(x₂, y₂) has components AB = (x₂ − x₁, y₂ − y₁): how far across and how far up or down.\n\nIts length (magnitude) comes from Pythagoras: |AB| = √((x₂ − x₁)² + (y₂ − y₁)²). For A(1, 1) and B(4, 5): AB = (3, 4), |AB| = 5.\n\nVectors are added component by component: (2, −1) + (1, 3) = (3, 2). Multiplying by a number: 2 · (2, −1) = (4, −2), a vector in the same direction, twice as long.',
        keyPoints: ['AB = (x₂ − x₁, y₂ − y₁)', '|v| = √(a² + b²) for v = (a, b)', '(a, b) + (c, d) = (a + c, b + d)'],
        examples: [
          { example: 'A(1, 1), B(4, 5). Find AB and |AB|.', solution: 'AB = (4 − 1, 5 − 1) = (3, 4); |AB| = √(9 + 16) = 5.' },
          { example: 'u = (2, −1), v = (1, 3). Find u + v.', solution: 'u + v = (2 + 1, −1 + 3) = (3, 2).' },
        ],
        commonMistakes: [
          { mistake: 'AB = (x₁ − x₂, y₁ − y₂)', fix: 'End minus start: AB = B − A. Otherwise you get the opposite vector BA.' },
          { mistake: '|(3, 4)| = 3 + 4 = 7', fix: 'The length is a hypotenuse: √(9 + 16) = 5.' },
        ],
        practice: [
          { problem: 'A(−2, 3), B(1, −1). Find AB and its length.', solution: 'AB = (3, −4); |AB| = 5', steps: ['AB = (1 − (−2), −1 − 3) = (3, −4).', '|AB| = √(9 + 16) = 5.'] },
          { problem: 'u = (2, −1). Find 2u.', solution: '(4, −2)', steps: ['Multiply each component by 2.', '(4, −2).'] },
          { problem: 'Find the length of the vector (6, 8).', solution: '10', steps: ['√(36 + 64) = √100.', '= 10.'] },
        ],
      },
      de: {
        title: 'Vektoren im Koordinatensystem',
        objectives: ['Koordinaten und Länge eines Vektors bestimmen.', 'Vektoren addieren und mit einer Zahl multiplizieren.'],
        theory: 'Ein Vektor ist ein Pfeil: Er hat eine Länge und eine Richtung. Der Vektor von A(x₁ | y₁) nach B(x₂ | y₂) hat die Koordinaten AB = (x₂ − x₁ | y₂ − y₁): wie weit nach rechts/links und nach oben/unten.\n\nSeine Länge (Betrag) ergibt sich mit Pythagoras: |AB| = √((x₂ − x₁)² + (y₂ − y₁)²). Für A(1 | 1) und B(4 | 5): AB = (3 | 4), |AB| = 5.\n\nVektoren werden koordinatenweise addiert: (2 | −1) + (1 | 3) = (3 | 2). Vielfaches: 2 · (2 | −1) = (4 | −2), gleiche Richtung, doppelt so lang.',
        keyPoints: ['AB = (x₂ − x₁ | y₂ − y₁)', '|v| = √(a² + b²) für v = (a | b)', '(a | b) + (c | d) = (a + c | b + d)'],
        examples: [
          { example: 'A(1 | 1), B(4 | 5). Bestimmen Sie AB und |AB|.', solution: 'AB = (4 − 1 | 5 − 1) = (3 | 4); |AB| = √(9 + 16) = 5.' },
          { example: 'u = (2 | −1), v = (1 | 3). Bestimmen Sie u + v.', solution: 'u + v = (2 + 1 | −1 + 3) = (3 | 2).' },
        ],
        commonMistakes: [
          { mistake: 'AB = (x₁ − x₂ | y₁ − y₂)', fix: 'Spitze minus Fuß: AB = B − A. Sonst erhält man den Gegenvektor BA.' },
          { mistake: '|(3 | 4)| = 3 + 4 = 7', fix: 'Die Länge ist eine Hypotenuse: √(9 + 16) = 5.' },
        ],
        practice: [
          { problem: 'A(−2 | 3), B(1 | −1). Bestimmen Sie AB und seine Länge.', solution: 'AB = (3 | −4); |AB| = 5', steps: ['AB = (1 − (−2) | −1 − 3) = (3 | −4).', '|AB| = √(9 + 16) = 5.'] },
          { problem: 'u = (2 | −1). Bestimmen Sie 2u.', solution: '(4 | −2)', steps: ['Jede Koordinate mit 2 multiplizieren.', '(4 | −2).'] },
          { problem: 'Bestimmen Sie die Länge des Vektors (6 | 8).', solution: '10', steps: ['√(36 + 64) = √100.', '= 10.'] },
        ],
      },
    },

    // ───────── 2. Translation
    {
      slug: 'g8-transformations-translation',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 8, yMin: -2.5, yMax: 4 }, grid: true, axes: true, height: 220,
        shapes: [
          { kind: 'polygon', points: [[1, 1], [3, 1], [2, 3]], fill: true, color: 'primary' },
          { kind: 'polygon', points: [[5, -1], [7, -1], [6, 1]], fill: true, color: 'secondary', dashed: true },
          { kind: 'segment', from: [2, 3], to: [6, 1], color: 'muted', arrow: true, label: 'v' },
          { kind: 'point', at: [1, 1], label: 'A', labelPos: 'w' },
          { kind: 'point', at: [5, -1], label: 'A′', labelPos: 'sw', color: 'secondary' },
        ],
        caption: alt('Zhvendosja me vektorin v = (4, −2): çdo pikë lëviz 4 djathtas dhe 2 poshtë; A(1, 1) → A′(5, −1).', 'Translation by v = (4, −2): every point moves 4 right and 2 down; A(1, 1) → A′(5, −1).', 'Verschiebung um v = (4 | −2): Jeder Punkt wandert 4 nach rechts und 2 nach unten; A(1 | 1) → A′(5 | −1).'),
        alt: alt('Trekëndësh dhe shëmbëllimi i tij pas zhvendosjes me vektorin (4, −2).', 'A triangle and its image after translation by the vector (4, −2).', 'Ein Dreieck und sein Bild nach der Verschiebung um den Vektor (4 | −2).'),
      }],
      answers: {
        examples: ['text', [['-1 - 2', -3], ['7 - 5', 2]]],
        practice: ['text', [['1 - 4', -3]], [['7', 7]]],
      },
      al: {
        title: 'Zhvendosja paralele',
        objectives: ['Të zhvendosni pika dhe figura me një vektor të dhënë.', 'Të gjeni vektorin e zhvendosjes nga një pikë dhe shëmbëllimi i saj.'],
        theory: 'Zhvendosja paralele me vektorin v = (a, b) e çon çdo pikë P(x, y) në P′(x + a, y + b). Të gjitha pikat lëvizin në të njëjtin drejtim dhe me të njëjtën gjatësi.\n\nZhvendosja ruan gjatësitë, këndet dhe formën: figura dhe shëmbëllimi janë kongruente. Segmenti dhe shëmbëllimi i tij janë paralelë (ose në të njëjtën drejtëz).\n\nVektori i zhvendosjes gjendet nga një çift pikë–shëmbëllim: v = P′ − P. Nga P(2, 5) te P′(−1, 7): v = (−3, 2).',
        keyPoints: ['(x, y) → (x + a, y + b)', 'Ruhen gjatësitë dhe këndet', 'v = P′ − P'],
        examples: [
          { example: 'Zhvendosni trekëndëshin A(1, 1), B(3, 1), C(2, 3) me v = (4, −2).', solution: 'A′(5, −1), B′(7, −1), C′(6, 1).' },
          { example: 'Cili vektor e çon P(2, 5) në P′(−1, 7)?', solution: 'v = (−1 − 2, 7 − 5) = (−3, 2).' },
        ],
        commonMistakes: [
          { mistake: 'Vektori merret P − P′.', fix: 'Nga pika te shëmbëllimi: v = P′ − P.' },
        ],
        practice: [
          { problem: 'Zhvendosni pikën (0, −3) me vektorin (5, 2).', solution: '(5, −1)', steps: ['x: 0 + 5 = 5; y: −3 + 2 = −1.', '(5, −1).'] },
          { problem: 'Cili vektor e çon (4, 1) në (1, 1)?', solution: '(−3, 0)', steps: ['1 − 4 = −3; 1 − 1 = 0.', 'v = (−3, 0).'] },
          { problem: 'Segmenti AB = 7 cm zhvendoset me një vektor. Sa është A′B′?', solution: '7 cm', steps: ['Zhvendosja ruan gjatësitë.', 'A′B′ = 7 cm.'] },
        ],
      },
      en: {
        title: 'Translation',
        objectives: ['Translate points and shapes by a given vector.', 'Find the translation vector from a point and its image.'],
        theory: 'The translation by the vector v = (a, b) takes every point P(x, y) to P′(x + a, y + b). All points move in the same direction by the same distance.\n\nA translation keeps lengths, angles and shape: the shape and its image are congruent. A segment and its image are parallel (or on the same line).\n\nThe translation vector is found from a point and its image: v = P′ − P. From P(2, 5) to P′(−1, 7): v = (−3, 2).',
        keyPoints: ['(x, y) → (x + a, y + b)', 'Lengths and angles are kept', 'v = P′ − P'],
        examples: [
          { example: 'Translate the triangle A(1, 1), B(3, 1), C(2, 3) by v = (4, −2).', solution: 'A′(5, −1), B′(7, −1), C′(6, 1).' },
          { example: 'Which vector takes P(2, 5) to P′(−1, 7)?', solution: 'v = (−1 − 2, 7 − 5) = (−3, 2).' },
        ],
        commonMistakes: [
          { mistake: 'Taking the vector as P − P′.', fix: 'From the point to the image: v = P′ − P.' },
        ],
        practice: [
          { problem: 'Translate the point (0, −3) by the vector (5, 2).', solution: '(5, −1)', steps: ['x: 0 + 5 = 5; y: −3 + 2 = −1.', '(5, −1).'] },
          { problem: 'Which vector takes (4, 1) to (1, 1)?', solution: '(−3, 0)', steps: ['1 − 4 = −3; 1 − 1 = 0.', 'v = (−3, 0).'] },
          { problem: 'A segment AB = 7 cm is translated by a vector. How long is A′B′?', solution: '7 cm', steps: ['A translation keeps lengths.', 'A′B′ = 7 cm.'] },
        ],
      },
      de: {
        title: 'Die Verschiebung',
        objectives: ['Punkte und Figuren um einen gegebenen Vektor verschieben.', 'Den Verschiebungsvektor aus einem Punkt und seinem Bild bestimmen.'],
        theory: 'Die Verschiebung um den Vektor v = (a | b) bildet jeden Punkt P(x | y) auf P′(x + a | y + b) ab. Alle Punkte wandern in dieselbe Richtung um dieselbe Strecke.\n\nEine Verschiebung erhält Längen, Winkel und Form: Figur und Bild sind kongruent. Eine Strecke und ihr Bild sind parallel (oder liegen auf derselben Geraden).\n\nDen Verschiebungsvektor erhält man aus Punkt und Bildpunkt: v = P′ − P. Von P(2 | 5) nach P′(−1 | 7): v = (−3 | 2).',
        keyPoints: ['(x | y) → (x + a | y + b)', 'Längen und Winkel bleiben erhalten', 'v = P′ − P'],
        examples: [
          { example: 'Verschieben Sie das Dreieck A(1 | 1), B(3 | 1), C(2 | 3) um v = (4 | −2).', solution: 'A′(5 | −1), B′(7 | −1), C′(6 | 1).' },
          { example: 'Welcher Vektor bildet P(2 | 5) auf P′(−1 | 7) ab?', solution: 'v = (−1 − 2 | 7 − 5) = (−3 | 2).' },
        ],
        commonMistakes: [
          { mistake: 'Den Vektor als P − P′ nehmen.', fix: 'Vom Punkt zum Bildpunkt: v = P′ − P.' },
        ],
        practice: [
          { problem: 'Verschieben Sie den Punkt (0 | −3) um den Vektor (5 | 2).', solution: '(5 | −1)', steps: ['x: 0 + 5 = 5; y: −3 + 2 = −1.', '(5 | −1).'] },
          { problem: 'Welcher Vektor bildet (4 | 1) auf (1 | 1) ab?', solution: '(−3 | 0)', steps: ['1 − 4 = −3; 1 − 1 = 0.', 'v = (−3 | 0).'] },
          { problem: 'Eine Strecke AB = 7 cm wird um einen Vektor verschoben. Wie lang ist A′B′?', solution: '7 cm', steps: ['Verschiebungen erhalten Längen.', 'A′B′ = 7 cm.'] },
        ],
      },
    },

    // ───────── 3. Reflection and point symmetry
    {
      slug: 'g8-transformations-symmetry',
      practiceVisuals: {
        0: {
        type: 'functionPlot', equal: true, view: { xMin: -7, xMax: 7, yMin: -7, yMax: 7 }, xStep: 1, yStep: 1,
        points: [{ at: ['p', 'q'], label: 'P({p}, {q})', color: 'primary' }, { at: ['p', '-q'], label: 'P′({p}, {-q})', color: 'secondary' }],
        segments: [{ from: ['p', 'q'], to: ['p', '-q'], color: 'muted', dashed: true }],
        sliders: [{ name: 'p', label: 'x', min: -6, max: 6, step: 1, value: -4 }, { name: 'q', label: 'y', min: -6, max: 6, step: 1, value: 1 }],
        readouts: [{ text: { al: 'Pasqyrimi ndaj boshtit x: (x, y) → (x, −y)', en: 'Reflection in the x-axis: (x, y) → (x, −y)', de: 'Spiegelung an der x-Achse: (x | y) → (x | −y)' } }],
        alt: { al: 'Një pikë P që lëviz me rrëshqitës dhe figura e saj P′.', en: 'A point P moved by sliders and its image P′.', de: 'Ein Punkt P, der mit Schiebereglern bewegt wird, und sein Bild P′.' },
      },
      },
      visuals: [{
        type: 'geoFigure', view: { xMin: -4, xMax: 4, yMin: -3, yMax: 4 }, grid: true, axes: true, height: 230,
        shapes: [
          { kind: 'line', through: [[-3, -3], [3, 3]], color: 'muted', dashed: true, label: 'y = x' },
          { kind: 'point', at: [3, -2], label: 'P(3, −2)', labelPos: 'e' },
          { kind: 'point', at: [-2, 3], label: 'P′(−2, 3)', labelPos: 'n', color: 'secondary' },
          { kind: 'segment', from: [3, -2], to: [-2, 3], color: 'secondary', dashed: true },
        ],
        caption: alt('Pasqyrimi në drejtëzën y = x ndërron koordinatat: (x, y) → (y, x).', 'Reflection in the line y = x swaps the coordinates: (x, y) → (y, x).', 'Die Spiegelung an der Geraden y = x vertauscht die Koordinaten: (x | y) → (y | x).'),
        alt: alt('Rrjetë me drejtëzën y = x; pika P(3, −2) dhe pasqyra e saj P′(−2, 3).', 'Grid with the line y = x; the point P(3, −2) and its image P′(−2, 3).', 'Gitter mit der Geraden y = x; der Punkt P(3 | −2) und sein Bild P′(−2 | 3).'),
      }],
      answers: {
        examples: ['text', [['2 * 3 - 1', 5], ['2 * 4 - 2', 6]]],
        practice: ['text', 'text', [['2 * 2 - 0', 4], ['2 * 1 - 3', -1]]],
      },
      al: {
        title: 'Simetria qendrore dhe boshtore',
        objectives: ['Të pasqyroni pika në boshtet dhe në drejtëzën y = x.', 'Të gjeni simetriken e një pike ndaj një qendre të çfarëdoshme.'],
        theory: 'Simetria boshtore (pasqyrimi) në një drejtëz s: pika dhe shëmbëllimi janë në të njëjtën pingule me s dhe në largësi të barabartë prej saj. Rregullat: boshti x: (x, y) → (x, −y); boshti y: (x, y) → (−x, y); drejtëza y = x: (x, y) → (y, x).\n\nSimetria qendrore ndaj pikës S: S është mesi i segmentit PP′. Prandaj P′ = 2S − P. Ndaj origjinës: (x, y) → (−x, −y).\n\nTë dyja ruajnë gjatësitë dhe këndet. Simetria boshtore e kthen orientimin e figurës (si pasqyra), ajo qendrore jo (është rrotullim 180°).',
        keyPoints: ['y = x: (x, y) → (y, x)', 'Qendra S: P′ = 2S − P', 'Qendra O: (x, y) → (−x, −y)'],
        examples: [
          { example: 'Pasqyroni P(3, −2) në drejtëzën y = x.', solution: 'Koordinatat ndërrohen: P′(−2, 3).' },
          { example: 'Gjeni simetriken e P(1, 2) ndaj S(3, 4).', solution: 'P′ = (2 · 3 − 1, 2 · 4 − 2) = (5, 6). Kontroll: mesi i PP′ është (3, 4).' },
        ],
        commonMistakes: [
          { mistake: 'Simetrikja ndaj S është mesi i PS.', fix: 'S është mesi i PP′, prandaj P′ ndodhet përtej S, në të njëjtën largësi.' },
          { mistake: 'Pasqyrimi në y = x: (3, −2) → (−3, 2).', fix: 'Në y = x koordinatat ndërrojnë vendet: (−2, 3).' },
        ],
        practice: [
          { problem: 'Pasqyroni (−4, 1) në boshtin x.', solution: '(−4, −1)', steps: ['Ndryshon shenja e y.', '(−4, −1).'] },
          { problem: 'Gjeni simetriken e (2, 5) ndaj origjinës.', solution: '(−2, −5)', steps: ['Ndryshojnë të dyja shenjat.', '(−2, −5).'] },
          { problem: 'Gjeni simetriken e (0, 3) ndaj S(2, 1).', solution: '(4, −1)', steps: ['P′ = 2S − P.', '(4 − 0, 2 − 3) = (4, −1).'] },
        ],
      },
      en: {
        title: 'Reflection and point symmetry',
        objectives: ['Reflect points in the axes and in the line y = x.', 'Find the image of a point under point symmetry about any centre.'],
        theory: 'Reflection in a line s: a point and its image lie on the same perpendicular to s, at equal distances from it. Rules: x-axis: (x, y) → (x, −y); y-axis: (x, y) → (−x, y); line y = x: (x, y) → (y, x).\n\nPoint symmetry about S: S is the midpoint of PP′. So P′ = 2S − P. About the origin: (x, y) → (−x, −y).\n\nBoth keep lengths and angles. A reflection reverses the orientation of a shape (like a mirror); point symmetry does not (it is a 180° rotation).',
        keyPoints: ['y = x: (x, y) → (y, x)', 'Centre S: P′ = 2S − P', 'Centre O: (x, y) → (−x, −y)'],
        examples: [
          { example: 'Reflect P(3, −2) in the line y = x.', solution: 'The coordinates swap: P′(−2, 3).' },
          { example: 'Find the image of P(1, 2) under point symmetry about S(3, 4).', solution: 'P′ = (2 · 3 − 1, 2 · 4 − 2) = (5, 6). Check: the midpoint of PP′ is (3, 4).' },
        ],
        commonMistakes: [
          { mistake: 'The image about S is the midpoint of PS.', fix: 'S is the midpoint of PP′, so P′ lies beyond S at the same distance.' },
          { mistake: 'Reflection in y = x: (3, −2) → (−3, 2).', fix: 'In y = x the coordinates swap places: (−2, 3).' },
        ],
        practice: [
          { problem: 'Reflect (−4, 1) in the x-axis.', solution: '(−4, −1)', steps: ['The sign of y changes.', '(−4, −1).'] },
          { problem: 'Find the image of (2, 5) under point symmetry about the origin.', solution: '(−2, −5)', steps: ['Both signs change.', '(−2, −5).'] },
          { problem: 'Find the image of (0, 3) under point symmetry about S(2, 1).', solution: '(4, −1)', steps: ['P′ = 2S − P.', '(4 − 0, 2 − 3) = (4, −1).'] },
        ],
      },
      de: {
        title: 'Achsen- und Punktspiegelung',
        objectives: ['Punkte an den Achsen und an der Geraden y = x spiegeln.', 'Das Bild eines Punktes bei Punktspiegelung an einem beliebigen Zentrum bestimmen.'],
        theory: 'Achsenspiegelung an einer Geraden s: Punkt und Bildpunkt liegen auf derselben Senkrechten zu s, gleich weit von ihr entfernt. Regeln: x-Achse: (x | y) → (x | −y); y-Achse: (x | y) → (−x | y); Gerade y = x: (x | y) → (y | x).\n\nPunktspiegelung an S: S ist der Mittelpunkt von PP′. Also P′ = 2S − P. Am Ursprung: (x | y) → (−x | −y).\n\nBeide erhalten Längen und Winkel. Die Achsenspiegelung kehrt den Umlaufsinn um (wie ein Spiegel), die Punktspiegelung nicht (sie ist eine Drehung um 180°).',
        keyPoints: ['y = x: (x | y) → (y | x)', 'Zentrum S: P′ = 2S − P', 'Zentrum O: (x | y) → (−x | −y)'],
        examples: [
          { example: 'Spiegeln Sie P(3 | −2) an der Geraden y = x.', solution: 'Die Koordinaten werden vertauscht: P′(−2 | 3).' },
          { example: 'Spiegeln Sie P(1 | 2) am Punkt S(3 | 4).', solution: 'P′ = (2 · 3 − 1 | 2 · 4 − 2) = (5 | 6). Probe: Der Mittelpunkt von PP′ ist (3 | 4).' },
        ],
        commonMistakes: [
          { mistake: 'Das Bild bei Spiegelung an S ist der Mittelpunkt von PS.', fix: 'S ist der Mittelpunkt von PP′; P′ liegt gleich weit hinter S.' },
          { mistake: 'Spiegelung an y = x: (3 | −2) → (−3 | 2).', fix: 'An y = x werden die Koordinaten vertauscht: (−2 | 3).' },
        ],
        practice: [
          { problem: 'Spiegeln Sie (−4 | 1) an der x-Achse.', solution: '(−4 | −1)', steps: ['Das Vorzeichen von y ändert sich.', '(−4 | −1).'] },
          { problem: 'Spiegeln Sie (2 | 5) am Ursprung.', solution: '(−2 | −5)', steps: ['Beide Vorzeichen ändern sich.', '(−2 | −5).'] },
          { problem: 'Spiegeln Sie (0 | 3) am Punkt S(2 | 1).', solution: '(4 | −1)', steps: ['P′ = 2S − P.', '(4 − 0 | 2 − 3) = (4 | −1).'] },
        ],
      },
    },

    // ───────── 4. Rotation
    {
      slug: 'g8-transformations-rotation',
      practiceVisuals: {
        0: {
        type: 'functionPlot', equal: true, view: { xMin: -7, xMax: 7, yMin: -7, yMax: 7 }, xStep: 1, yStep: 1,
        points: [{ at: ['p', 'q'], label: 'P({p}, {q})', color: 'primary' }, { at: ['-q', 'p'], label: 'P′({-q}, {p})', color: 'secondary' }],
        segments: [{ from: [0, 0], to: ['p', 'q'], color: 'muted', dashed: true }, { from: [0, 0], to: ['-q', 'p'], color: 'muted', dashed: true }],
        sliders: [{ name: 'p', label: 'x', min: -6, max: 6, step: 1, value: 4 }, { name: 'q', label: 'y', min: -6, max: 6, step: 1, value: 2 }],
        readouts: [{ text: { al: 'Rrotullimi 90° kundër akrepave: (x, y) → (−y, x)', en: 'Rotation 90° anticlockwise: (x, y) → (−y, x)', de: 'Drehung um 90° gegen den Uhrzeigersinn: (x | y) → (−y | x)' } }],
        alt: { al: 'Një pikë P që lëviz me rrëshqitës dhe figura e saj P′.', en: 'A point P moved by sliders and its image P′.', de: 'Ein Punkt P, der mit Schiebereglern bewegt wird, und sein Bild P′.' },
      },
        1: {
        type: 'functionPlot', equal: true, view: { xMin: -7, xMax: 7, yMin: -7, yMax: 7 }, xStep: 1, yStep: 1,
        points: [{ at: ['p', 'q'], label: 'P({p}, {q})', color: 'primary' }, { at: ['q', '-p'], label: 'P′({q}, {-p})', color: 'secondary' }],
        segments: [{ from: [0, 0], to: ['p', 'q'], color: 'muted', dashed: true }, { from: [0, 0], to: ['q', '-p'], color: 'muted', dashed: true }],
        sliders: [{ name: 'p', label: 'x', min: -6, max: 6, step: 1, value: -1 }, { name: 'q', label: 'y', min: -6, max: 6, step: 1, value: 3 }],
        readouts: [{ text: { al: 'Rrotullimi 90° sipas akrepave: (x, y) → (y, −x)', en: 'Rotation 90° clockwise: (x, y) → (y, −x)', de: 'Drehung um 90° im Uhrzeigersinn: (x | y) → (y | −x)' } }],
        alt: { al: 'Një pikë P që lëviz me rrëshqitës dhe figura e saj P′.', en: 'A point P moved by sliders and its image P′.', de: 'Ein Punkt P, der mit Schiebereglern bewegt wird, und sein Bild P′.' },
      },
      },
      visuals: [{
        type: 'geoFigure', view: { xMin: -2.5, xMax: 4, yMin: -1, yMax: 4 }, grid: true, axes: true, height: 210,
        shapes: [
          { kind: 'segment', from: [0, 0], to: [3, 1], color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [-1, 3], color: 'secondary' },
          { kind: 'angle', vertex: [0, 0], from: [3, 1], to: [-1, 3], right: true, color: 'ink' },
          { kind: 'point', at: [3, 1], label: 'P(3, 1)', labelPos: 'e' },
          { kind: 'point', at: [-1, 3], label: 'P′(−1, 3)', labelPos: 'n', color: 'secondary' },
        ],
        caption: alt('Rrotullimi 90° kundër akrepave të orës rreth O: (x, y) → (−y, x); P(3, 1) → P′(−1, 3).', 'Rotation of 90° anticlockwise about O: (x, y) → (−y, x); P(3, 1) → P′(−1, 3).', 'Drehung um 90° gegen den Uhrzeigersinn um O: (x | y) → (−y | x); P(3 | 1) → P′(−1 | 3).'),
        alt: alt('Pika P(3, 1) dhe shëmbëllimi P′(−1, 3) pas rrotullimit 90°; OP dhe OP′ formojnë kënd të drejtë.', 'The point P(3, 1) and its image P′(−1, 3) after a 90° rotation; OP and OP′ form a right angle.', 'Der Punkt P(3 | 1) und sein Bild P′(−1 | 3) nach einer 90°-Drehung; OP und OP′ bilden einen rechten Winkel.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', [['360 / 90', 4]]],
      },
      al: {
        title: 'Rrotullimi',
        objectives: ['Të rrotulloni pika rreth origjinës me 90° dhe 180°.', 'Të gjeni këndin dhe rendin e simetrisë rrotulluese të një figure.'],
        theory: 'Rrotullimi rreth qendrës O me kënd α e çon çdo pikë P në P′ të tillë që OP′ = OP dhe ∠POP′ = α. Kahu pozitiv është kundër akrepave të orës.\n\nRreth origjinës: 90° kundër akrepave (x, y) → (−y, x); 180° (x, y) → (−x, −y); 90° sipas akrepave (x, y) → (y, −x). Rrotullimi ruan gjatësitë, këndet dhe orientimin.\n\nNjë figurë ka simetri rrotulluese nëse rrotullimi me një kënd më të vogël se 360° e çon në vetvete. Katrori: 90°, rendi 4; gjashtëkëndëshi i rregullt: 60°, rendi 6.',
        keyPoints: ['90° ↺: (x, y) → (−y, x)', '180°: (x, y) → (−x, −y)', '90° ↻: (x, y) → (y, −x)'],
        examples: [
          { example: 'Rrotulloni (3, 1) me 90° kundër akrepave rreth origjinës.', solution: '(x, y) → (−y, x): (−1, 3).' },
          { example: 'Rrotulloni (2, −5) me 180° rreth origjinës.', solution: '(−2, 5).' },
        ],
        commonMistakes: [
          { mistake: '90° ↺: (3, 1) → (1, −3)', fix: 'Ky është rrotullimi sipas akrepave. Kundër akrepave: (−1, 3).' },
          { mistake: 'Rrotullimi 90° vetëm ndërron koordinatat: (3, 1) → (1, 3).', fix: 'Ndërrohen dhe njëra merr shenjë të kundërt: (−y, x).' },
        ],
        practice: [
          { problem: 'Rrotulloni (4, 2) me 90° kundër akrepave rreth O.', solution: '(−2, 4)', steps: ['(x, y) → (−y, x).', '(−2, 4).'] },
          { problem: 'Rrotulloni (−1, 3) me 90° sipas akrepave rreth O.', solution: '(3, 1)', steps: ['(x, y) → (y, −x).', '(3, 1).'] },
          { problem: 'Sa është rendi i simetrisë rrotulluese të katrorit?', solution: '4', steps: ['Këndi më i vogël: 90°.', '360 : 90 = 4.'] },
        ],
      },
      en: {
        title: 'Rotation',
        objectives: ['Rotate points about the origin by 90° and 180°.', 'Find the angle and order of rotational symmetry of a shape.'],
        theory: 'A rotation about the centre O through an angle α takes each point P to P′ with OP′ = OP and ∠POP′ = α. The positive direction is anticlockwise.\n\nAbout the origin: 90° anticlockwise (x, y) → (−y, x); 180° (x, y) → (−x, −y); 90° clockwise (x, y) → (y, −x). A rotation keeps lengths, angles and orientation.\n\nA shape has rotational symmetry if a rotation by less than 360° maps it onto itself. Square: 90°, order 4; regular hexagon: 60°, order 6.',
        keyPoints: ['90° ↺: (x, y) → (−y, x)', '180°: (x, y) → (−x, −y)', '90° ↻: (x, y) → (y, −x)'],
        examples: [
          { example: 'Rotate (3, 1) by 90° anticlockwise about the origin.', solution: '(x, y) → (−y, x): (−1, 3).' },
          { example: 'Rotate (2, −5) by 180° about the origin.', solution: '(−2, 5).' },
        ],
        commonMistakes: [
          { mistake: '90° ↺: (3, 1) → (1, −3)', fix: 'That is the clockwise rotation. Anticlockwise: (−1, 3).' },
          { mistake: 'A 90° rotation just swaps the coordinates: (3, 1) → (1, 3).', fix: 'They swap and one changes sign: (−y, x).' },
        ],
        practice: [
          { problem: 'Rotate (4, 2) by 90° anticlockwise about O.', solution: '(−2, 4)', steps: ['(x, y) → (−y, x).', '(−2, 4).'] },
          { problem: 'Rotate (−1, 3) by 90° clockwise about O.', solution: '(3, 1)', steps: ['(x, y) → (y, −x).', '(3, 1).'] },
          { problem: 'What is the order of rotational symmetry of a square?', solution: '4', steps: ['Smallest angle: 90°.', '360 ÷ 90 = 4.'] },
        ],
      },
      de: {
        title: 'Die Drehung',
        objectives: ['Punkte um den Ursprung um 90° und 180° drehen.', 'Drehwinkel und Ordnung der Drehsymmetrie einer Figur bestimmen.'],
        theory: 'Eine Drehung um das Zentrum O mit dem Winkel α bildet jeden Punkt P auf P′ ab, sodass OP′ = OP und ∠POP′ = α. Die positive Richtung ist gegen den Uhrzeigersinn.\n\nUm den Ursprung: 90° gegen den Uhrzeigersinn (x | y) → (−y | x); 180° (x | y) → (−x | −y); 90° im Uhrzeigersinn (x | y) → (y | −x). Eine Drehung erhält Längen, Winkel und Umlaufsinn.\n\nEine Figur ist drehsymmetrisch, wenn eine Drehung um weniger als 360° sie auf sich selbst abbildet. Quadrat: 90°, Ordnung 4; regelmäßiges Sechseck: 60°, Ordnung 6.',
        keyPoints: ['90° ↺: (x | y) → (−y | x)', '180°: (x | y) → (−x | −y)', '90° ↻: (x | y) → (y | −x)'],
        examples: [
          { example: 'Drehen Sie (3 | 1) um 90° gegen den Uhrzeigersinn um den Ursprung.', solution: '(x | y) → (−y | x): (−1 | 3).' },
          { example: 'Drehen Sie (2 | −5) um 180° um den Ursprung.', solution: '(−2 | 5).' },
        ],
        commonMistakes: [
          { mistake: '90° ↺: (3 | 1) → (1 | −3)', fix: 'Das ist die Drehung im Uhrzeigersinn. Gegen den Uhrzeigersinn: (−1 | 3).' },
          { mistake: 'Eine 90°-Drehung vertauscht nur die Koordinaten: (3 | 1) → (1 | 3).', fix: 'Sie werden vertauscht und eine ändert das Vorzeichen: (−y | x).' },
        ],
        practice: [
          { problem: 'Drehen Sie (4 | 2) um 90° gegen den Uhrzeigersinn um O.', solution: '(−2 | 4)', steps: ['(x | y) → (−y | x).', '(−2 | 4).'] },
          { problem: 'Drehen Sie (−1 | 3) um 90° im Uhrzeigersinn um O.', solution: '(3 | 1)', steps: ['(x | y) → (y | −x).', '(3 | 1).'] },
          { problem: 'Welche Ordnung hat die Drehsymmetrie eines Quadrats?', solution: '4', steps: ['Kleinster Winkel: 90°.', '360 : 90 = 4.'] },
        ],
      },
    },

    // ───────── 5. Enlargement (homothety)
    {
      slug: 'g8-transformations-homothety',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 8.5, yMin: -0.5, yMax: 6.5 }, grid: true, axes: true, height: 230,
        shapes: [
          { kind: 'polygon', points: [[1, 1], [3, 1], [1, 3]], fill: true, color: 'primary' },
          { kind: 'polygon', points: [[2, 2], [6, 2], [2, 6]], fill: true, color: 'secondary', dashed: true },
          { kind: 'segment', from: [0, 0], to: [6, 2], color: 'muted', dashed: true },
          { kind: 'segment', from: [0, 0], to: [2, 6], color: 'muted', dashed: true },
          { kind: 'point', at: [0, 0], label: 'O', labelPos: 'sw' },
          { kind: 'point', at: [3, 1], label: 'B', labelPos: 'se' },
          { kind: 'point', at: [6, 2], label: 'B′', labelPos: 'se', color: 'secondary' },
        ],
        caption: alt('Homotetia me qendër O dhe koeficient k = 2: (x, y) → (2x, 2y). Brinjët dyfishohen, sipërfaqja katërfishohet.', 'Enlargement with centre O and scale factor k = 2: (x, y) → (2x, 2y). Sides double, the area becomes 4 times as large.', 'Zentrische Streckung mit Zentrum O und Faktor k = 2: (x | y) → (2x | 2y). Seiten verdoppeln sich, die Fläche vervierfacht sich.'),
        alt: alt('Trekëndësh i vogël dhe shëmbëllimi i tij dy herë më i madh; vija të ndërprera nga O nëpër kulmet.', 'A small triangle and its image twice as large; dashed lines from O through the vertices.', 'Ein kleines Dreieck und sein doppelt so großes Bild; gestrichelte Linien von O durch die Ecken.'),
      }],
      answers: {
        examples: [[['2 * (-1)', -2], ['2 * 4', 8]], [['6 * 3^2', 54]]],
        practice: [[['6 / 2', 3], ['-4 / 2', -2]], 'text', [['4 * 2.5', 10]]],
      },
      al: {
        title: 'Homotetia',
        objectives: ['Të zbatoni homotetinë me qendër në origjinë dhe koeficient k.', 'Të lidhni koeficientin me ndryshimin e gjatësive dhe të sipërfaqeve.'],
        theory: 'Homotetia me qendër O dhe koeficient k e çon pikën P në P′ në drejtëzën OP, me OP′ = |k| · OP. Me qendër në origjinë: (x, y) → (kx, ky).\n\nNëse |k| > 1 figura zmadhohet, nëse |k| < 1 zvogëlohet; me k negativ shëmbëllimi del në anën tjetër të qendrës (k = −1 është simetria qendrore). Figura dhe shëmbëllimi janë të ngjashme: këndet ruhen.\n\nGjatësitë shumëzohen me |k|, sipërfaqet me k². Trekëndëshi me sipërfaqe 6 cm² pas homotetisë me k = 3 ka sipërfaqe 6 · 9 = 54 cm².',
        keyPoints: ['(x, y) → (kx, ky)', 'Gjatësitë × |k|;  sipërfaqet × k²', 'k = −1: simetri qendrore'],
        examples: [
          { example: 'Homotetia me qendër O dhe k = 2: ku shkon (−1, 4)?', solution: '(2 · (−1), 2 · 4) = (−2, 8).' },
          { example: 'Trekëndëshi ka sipërfaqe 6 cm². Sa është sipërfaqja pas homotetisë me k = 3?', solution: 'Sipërfaqja shumëzohet me k² = 9: 54 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Me k = 3 sipërfaqja trefishohet.', fix: 'Sipërfaqja shumëzohet me k² = 9.' },
          { mistake: 'Homotetia ndryshon këndet.', fix: 'Këndet ruhen; ndryshojnë vetëm gjatësitë.' },
        ],
        practice: [
          { problem: 'Homotetia me qendër O dhe k = 1/2: ku shkon (6, −4)?', solution: '(3, −2)', steps: ['Shumëzojmë me 1/2.', '(3, −2).'] },
          { problem: 'Homotetia me qendër O dhe k = −1: ku shkon (2, 5)?', solution: '(−2, −5)', steps: ['(x, y) → (−x, −y).', 'Kjo është simetria qendrore.'] },
          { problem: 'Segmenti 4 cm pas homotetisë me k = 2,5 bëhet sa?', solution: '10 cm', steps: ['4 · 2,5.', '= 10 cm.'] },
        ],
      },
      en: {
        title: 'Enlargement',
        objectives: ['Apply an enlargement with centre at the origin and scale factor k.', 'Relate the scale factor to the change in lengths and areas.'],
        theory: 'An enlargement with centre O and scale factor k takes the point P to P′ on the line OP with OP′ = |k| · OP. With the centre at the origin: (x, y) → (kx, ky).\n\nIf |k| > 1 the shape gets bigger, if |k| < 1 smaller; with a negative k the image is on the other side of the centre (k = −1 is point symmetry). Shape and image are similar: angles are kept.\n\nLengths are multiplied by |k|, areas by k². A triangle of area 6 cm² enlarged with k = 3 has area 6 · 9 = 54 cm².',
        keyPoints: ['(x, y) → (kx, ky)', 'Lengths × |k|;  areas × k²', 'k = −1: point symmetry'],
        examples: [
          { example: 'Enlargement with centre O and k = 2: where does (−1, 4) go?', solution: '(2 · (−1), 2 · 4) = (−2, 8).' },
          { example: 'A triangle has area 6 cm². What is the area after an enlargement with k = 3?', solution: 'The area is multiplied by k² = 9: 54 cm².' },
        ],
        commonMistakes: [
          { mistake: 'With k = 3 the area triples.', fix: 'The area is multiplied by k² = 9.' },
          { mistake: 'An enlargement changes the angles.', fix: 'Angles are kept; only lengths change.' },
        ],
        practice: [
          { problem: 'Enlargement with centre O and k = 1/2: where does (6, −4) go?', solution: '(3, −2)', steps: ['Multiply by 1/2.', '(3, −2).'] },
          { problem: 'Enlargement with centre O and k = −1: where does (2, 5) go?', solution: '(−2, −5)', steps: ['(x, y) → (−x, −y).', 'This is point symmetry.'] },
          { problem: 'How long is a 4 cm segment after an enlargement with k = 2.5?', solution: '10 cm', steps: ['4 · 2.5.', '= 10 cm.'] },
        ],
      },
      de: {
        title: 'Die zentrische Streckung',
        objectives: ['Eine zentrische Streckung mit Zentrum im Ursprung und Faktor k ausführen.', 'Den Streckfaktor mit der Änderung von Längen und Flächen verknüpfen.'],
        theory: 'Eine zentrische Streckung mit Zentrum O und Faktor k bildet P auf P′ auf der Geraden OP ab, mit OP′ = |k| · OP. Mit Zentrum im Ursprung: (x | y) → (kx | ky).\n\nIst |k| > 1, wird die Figur größer, ist |k| < 1, kleiner; bei negativem k liegt das Bild auf der anderen Seite des Zentrums (k = −1 ist die Punktspiegelung). Figur und Bild sind ähnlich: Winkel bleiben erhalten.\n\nLängen werden mit |k| multipliziert, Flächen mit k². Ein Dreieck mit 6 cm² hat nach Streckung mit k = 3 die Fläche 6 · 9 = 54 cm².',
        keyPoints: ['(x | y) → (kx | ky)', 'Längen × |k|;  Flächen × k²', 'k = −1: Punktspiegelung'],
        examples: [
          { example: 'Streckung mit Zentrum O und k = 2: Wohin wird (−1 | 4) abgebildet?', solution: '(2 · (−1) | 2 · 4) = (−2 | 8).' },
          { example: 'Ein Dreieck hat die Fläche 6 cm². Wie groß ist die Fläche nach einer Streckung mit k = 3?', solution: 'Die Fläche wird mit k² = 9 multipliziert: 54 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Bei k = 3 verdreifacht sich die Fläche.', fix: 'Die Fläche wird mit k² = 9 multipliziert.' },
          { mistake: 'Eine Streckung ändert die Winkel.', fix: 'Winkel bleiben erhalten; nur Längen ändern sich.' },
        ],
        practice: [
          { problem: 'Streckung mit Zentrum O und k = 1/2: Wohin wird (6 | −4) abgebildet?', solution: '(3 | −2)', steps: ['Mit 1/2 multiplizieren.', '(3 | −2).'] },
          { problem: 'Streckung mit Zentrum O und k = −1: Wohin wird (2 | 5) abgebildet?', solution: '(−2 | −5)', steps: ['(x | y) → (−x | −y).', 'Das ist die Punktspiegelung.'] },
          { problem: 'Wie lang ist eine Strecke von 4 cm nach einer Streckung mit k = 2,5?', solution: '10 cm', steps: ['4 · 2,5.', '= 10 cm.'] },
        ],
      },
    },
  ],
};
