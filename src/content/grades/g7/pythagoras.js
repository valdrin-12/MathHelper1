// Grade 7 · Theme 8: Perimeter and the Pythagorean theorem (January–February)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g7-pythagoras',
  i18n: {
    al: { title: 'Teorema e Pitagorës', description: 'Perimetri i shumëkëndëshit dhe i rrethit, teorema e Pitagorës, e anasjellta dhe zbatimet e saj.' },
    en: { title: 'Pythagoras\' theorem', description: 'Perimeter of polygons and circumference of a circle, Pythagoras\' theorem, its converse and its uses.' },
    de: { title: 'Satz des Pythagoras', description: 'Umfang von Vielecken und Kreisen, der Satz des Pythagoras, seine Umkehrung und Anwendungen.' },
  },
  lessons: [
    // ───────── 1. Perimeter of polygons and circles
    {
      slug: 'g7-pythagoras-perimeter',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3, xMax: 3, yMin: -2.8, yMax: 2.8 }, height: 200,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 2.5, color: 'primary' },
          { kind: 'segment', from: [-2.5, 0], to: [2.5, 0], color: 'muted', dashed: true },
          { kind: 'segment', from: [0, 0], to: [2.5, 0], color: 'secondary', label: 'r = 5 cm' },
          { kind: 'point', at: [0, 0], label: 'O', labelPos: 'sw' },
        ],
        caption: alt('Perimetri i rrethit: P = 2πr = πd. Për r = 5 cm: P ≈ 2 · 3,14 · 5 = 31,4 cm.', 'Circumference: C = 2πr = πd. For r = 5 cm: C ≈ 2 · 3.14 · 5 = 31.4 cm.', 'Kreisumfang: u = 2πr = πd. Für r = 5 cm: u ≈ 2 · 3,14 · 5 = 31,4 cm.'),
        alt: alt('Rreth me qendër O dhe rreze 5 cm; diametri vizatohet me vijë të ndërprerë.', 'A circle with centre O and radius 5 cm; the diameter is dashed.', 'Ein Kreis mit Mittelpunkt O und Radius 5 cm; der Durchmesser ist gestrichelt.'),
      }],
      answers: {
        examples: [[['2 * (8 + 5)', 26]], [['2 * 3.14 * 5', 31.4]]],
        practice: [[['6 * 7', 42]], [['3.14 * 20', 62.8]], [['6 + 8 + 10', 24]]],
      },
      al: {
        title: 'Perimetri i shumëkëndëshit dhe i rrethit',
        objectives: ['Të njehsoni perimetrin e shumëkëndëshave.', 'Të njehsoni perimetrin e rrethit me P = 2πr.'],
        theory: 'Perimetri i një shumëkëndëshi është shuma e gjatësive të të gjitha brinjëve. Për drejtkëndëshin: P = 2(a + b); për shumëkëndëshin e rregullt me n brinjë: P = n · a.\n\nPerimetri i rrethit (gjatësia e vijës rrethore) është P = 2πr = πd, ku r është rrezja, d = 2r diametri dhe π ≈ 3,14. Numri π tregon sa herë hyn diametri në perimetrin e rrethit.\n\nGjithmonë shkruani njësinë: perimetri matet në cm, m, km.',
        keyPoints: ['Drejtkëndëshi: P = 2(a + b)', 'Shumëkëndëshi i rregullt: P = n · a', 'Rrethi: P = 2πr = πd, π ≈ 3,14'],
        examples: [
          { example: 'Gjeni perimetrin e drejtkëndëshit 8 cm × 5 cm.', solution: 'P = 2 · (8 + 5) = 26 cm.' },
          { example: 'Gjeni perimetrin e rrethit me rreze 5 cm (π ≈ 3,14).', solution: 'P = 2 · 3,14 · 5 = 31,4 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Për rrethin me rreze 5 cm: P = 3,14 · 5 = 15,7 cm.', fix: 'P = 2πr: harruat faktorin 2 (ose përdorni diametrin d = 10 cm).' },
          { mistake: 'Ngatërrohet perimetri me sipërfaqen (πr²).', fix: 'Perimetri është gjatësi (cm), sipërfaqja është në cm².' },
        ],
        practice: [
          { problem: 'Gjeni perimetrin e gjashtëkëndëshit të rregullt me brinjë 7 cm.', solution: '42 cm', steps: ['P = 6 · 7.', 'P = 42 cm.'] },
          { problem: 'Një rreth ka diametër 20 cm. Gjeni perimetrin (π ≈ 3,14).', solution: '62,8 cm', steps: ['P = π · d.', 'P = 3,14 · 20 = 62,8 cm.'] },
          { problem: 'Trekëndëshi ka brinjët 6 cm, 8 cm dhe 10 cm. Sa është perimetri?', solution: '24 cm', steps: ['Mblidhen brinjët.', '6 + 8 + 10 = 24 cm.'] },
        ],
      },
      en: {
        title: 'Perimeter of polygons and circles',
        objectives: ['Work out the perimeter of polygons.', 'Work out the circumference of a circle with C = 2πr.'],
        theory: 'The perimeter of a polygon is the sum of the lengths of all its sides. For a rectangle: P = 2(a + b); for a regular polygon with n sides: P = n · a.\n\nThe circumference of a circle (the length of the circle line) is C = 2πr = πd, where r is the radius, d = 2r the diameter and π ≈ 3.14. The number π tells how many times the diameter fits into the circumference.\n\nAlways write the unit: perimeter is measured in cm, m, km.',
        keyPoints: ['Rectangle: P = 2(a + b)', 'Regular polygon: P = n · a', 'Circle: C = 2πr = πd, π ≈ 3.14'],
        examples: [
          { example: 'Find the perimeter of an 8 cm × 5 cm rectangle.', solution: 'P = 2 · (8 + 5) = 26 cm.' },
          { example: 'Find the circumference of a circle with radius 5 cm (π ≈ 3.14).', solution: 'C = 2 · 3.14 · 5 = 31.4 cm.' },
        ],
        commonMistakes: [
          { mistake: 'For a circle with radius 5 cm: C = 3.14 · 5 = 15.7 cm.', fix: 'C = 2πr: you forgot the factor 2 (or use the diameter d = 10 cm).' },
          { mistake: 'Mixing up circumference and area (πr²).', fix: 'Circumference is a length (cm), area is in cm².' },
        ],
        practice: [
          { problem: 'Find the perimeter of a regular hexagon with side 7 cm.', solution: '42 cm', steps: ['P = 6 · 7.', 'P = 42 cm.'] },
          { problem: 'A circle has a diameter of 20 cm. Find its circumference (π ≈ 3.14).', solution: '62.8 cm', steps: ['C = π · d.', 'C = 3.14 · 20 = 62.8 cm.'] },
          { problem: 'A triangle has sides 6 cm, 8 cm and 10 cm. What is its perimeter?', solution: '24 cm', steps: ['Add the sides.', '6 + 8 + 10 = 24 cm.'] },
        ],
      },
      de: {
        title: 'Umfang von Vielecken und Kreisen',
        objectives: ['Den Umfang von Vielecken berechnen.', 'Den Kreisumfang mit u = 2πr berechnen.'],
        theory: 'Der Umfang eines Vielecks ist die Summe aller Seitenlängen. Für ein Rechteck: u = 2(a + b); für ein regelmäßiges n-Eck: u = n · a.\n\nDer Kreisumfang ist u = 2πr = πd, dabei ist r der Radius, d = 2r der Durchmesser und π ≈ 3,14. Die Zahl π gibt an, wie oft der Durchmesser in den Umfang passt.\n\nImmer die Einheit angeben: Der Umfang wird in cm, m, km gemessen.',
        keyPoints: ['Rechteck: u = 2(a + b)', 'Regelmäßiges n-Eck: u = n · a', 'Kreis: u = 2πr = πd, π ≈ 3,14'],
        examples: [
          { example: 'Bestimmen Sie den Umfang eines Rechtecks 8 cm × 5 cm.', solution: 'u = 2 · (8 + 5) = 26 cm.' },
          { example: 'Bestimmen Sie den Umfang eines Kreises mit Radius 5 cm (π ≈ 3,14).', solution: 'u = 2 · 3,14 · 5 = 31,4 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Kreis mit Radius 5 cm: u = 3,14 · 5 = 15,7 cm.', fix: 'u = 2πr: der Faktor 2 fehlt (oder mit dem Durchmesser d = 10 cm rechnen).' },
          { mistake: 'Umfang und Flächeninhalt (πr²) verwechseln.', fix: 'Der Umfang ist eine Länge (cm), der Flächeninhalt hat cm².' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Umfang eines regelmäßigen Sechsecks mit der Seite 7 cm.', solution: '42 cm', steps: ['u = 6 · 7.', 'u = 42 cm.'] },
          { problem: 'Ein Kreis hat den Durchmesser 20 cm. Bestimmen Sie den Umfang (π ≈ 3,14).', solution: '62,8 cm', steps: ['u = π · d.', 'u = 3,14 · 20 = 62,8 cm.'] },
          { problem: 'Ein Dreieck hat die Seiten 6 cm, 8 cm und 10 cm. Wie groß ist der Umfang?', solution: '24 cm', steps: ['Seiten addieren.', '6 + 8 + 10 = 24 cm.'] },
        ],
      },
    },

    // ───────── 2. The theorem and its converse
    {
      slug: 'g7-pythagoras-theorem-converse',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3.6, xMax: 7.6, yMin: -4.6, yMax: 7.6 }, height: 290,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [4, 0], [4, -4], [0, -4]], fill: true, color: 'secondary', label: { at: [2, -2], text: 'b² = 16' } },
          { kind: 'polygon', points: [[0, 0], [0, 3], [-3, 3], [-3, 0]], fill: true, color: 'success', label: { at: [-1.5, 1.5], text: 'a² = 9' } },
          { kind: 'polygon', points: [[4, 0], [0, 3], [3, 7], [7, 4]], fill: true, color: 'purple', label: { at: [3.5, 3.5], text: 'c² = 25' } },
          { kind: 'polygon', points: [[0, 0], [4, 0], [0, 3]], color: 'ink' },
          { kind: 'angle', vertex: [0, 0], from: [4, 0], to: [0, 3], right: true },
        ],
        caption: alt('Trekëndëshi kënddrejtë 3, 4, 5: katrorët mbi katete (9 + 16) kanë së bashku sipërfaqen e katrorit mbi hipotenuzë (25).', 'The right triangle 3, 4, 5: the squares on the legs (9 + 16) together have the area of the square on the hypotenuse (25).', 'Das rechtwinklige Dreieck 3, 4, 5: Die Quadrate über den Katheten (9 + 16) haben zusammen den Flächeninhalt des Quadrats über der Hypotenuse (25).'),
        alt: alt('Trekëndësh kënddrejtë me katete 3 dhe 4 dhe hipotenuzë 5, me katrorë 9, 16 dhe 25 mbi brinjët.', 'A right triangle with legs 3 and 4 and hypotenuse 5, with squares of 9, 16 and 25 on its sides.', 'Ein rechtwinkliges Dreieck mit Katheten 3 und 4 und Hypotenuse 5, mit Quadraten von 9, 16 und 25 über den Seiten.'),
      }],
      answers: {
        examples: [[['sqrt(6^2 + 8^2)', 10]], [['5^2 + 12^2', 169], ['13^2', 169]]],
        practice: [[['sqrt(9^2 + 12^2)', 15]], [['sqrt(13^2 - 5^2)', 12]], [['7^2 + 8^2', 113], ['11^2', 121]]],
      },
      al: {
        title: 'Teorema e Pitagorës dhe e anasjellta',
        objectives: ['Të zbatoni teoremën e Pitagorës për të gjetur një brinjë të trekëndëshit kënddrejtë.', 'Të përdorni të anasjelltën për të provuar nëse një trekëndësh është kënddrejtë.'],
        theory: 'Në trekëndëshin kënddrejtë, brinjët që formojnë këndin e drejtë quhen katete (a, b), kurse brinja përballë këndit të drejtë quhet hipotenuzë (c); ajo është brinja më e gjatë.\n\nTeorema e Pitagorës: katrori i hipotenuzës është i barabartë me shumën e katrorëve të kateteve: a² + b² = c². Prandaj c = √(a² + b²) dhe një katetë a = √(c² − b²).\n\nE anasjellta: nëse për brinjët e një trekëndëshi vlen a² + b² = c² (c më e gjata), trekëndëshi është kënddrejtë. 5, 12, 13: 25 + 144 = 169 = 13², pra është kënddrejtë.',
        keyPoints: ['a² + b² = c² (c = hipotenuza, përballë këndit të drejtë)', 'Hipotenuza: c = √(a² + b²);  kateta: a = √(c² − b²)', 'E anasjellta: a² + b² = c² ⟹ kënd i drejtë'],
        examples: [
          { example: 'Katetet janë 6 cm dhe 8 cm. Gjeni hipotenuzën.', solution: 'c² = 36 + 64 = 100, c = √100 = 10 cm.' },
          { example: 'A është kënddrejtë trekëndëshi me brinjë 5, 12, 13?', solution: '5² + 12² = 25 + 144 = 169 dhe 13² = 169; po, është kënddrejtë.' },
        ],
        commonMistakes: [
          { mistake: 'c = a + b = 6 + 8 = 14', fix: 'Mblidhen katrorët, jo brinjët: c = √(36 + 64) = 10.' },
          { mistake: 'Kur kërkohet kateta: a² = c² + b²', fix: 'Për katetën zbritet: a² = c² − b².' },
        ],
        practice: [
          { problem: 'Katetet janë 9 cm dhe 12 cm. Gjeni hipotenuzën.', solution: '15 cm', steps: ['c² = 81 + 144 = 225.', 'c = √225 = 15 cm.'] },
          { problem: 'Hipotenuza është 13 cm, njëra katetë 5 cm. Gjeni katetën tjetër.', solution: '12 cm', steps: ['b² = 169 − 25 = 144.', 'b = √144 = 12 cm.'] },
          { problem: 'A është kënddrejtë trekëndëshi me brinjë 7, 8, 11?', solution: 'Jo', steps: ['7² + 8² = 49 + 64 = 113.', '11² = 121 ≠ 113, pra jo.'] },
        ],
      },
      en: {
        title: 'Pythagoras\' theorem and its converse',
        objectives: ['Use Pythagoras\' theorem to find a side of a right triangle.', 'Use the converse to test whether a triangle is right-angled.'],
        theory: 'In a right triangle, the sides that form the right angle are the legs (a, b), and the side opposite the right angle is the hypotenuse (c); it is the longest side.\n\nPythagoras\' theorem: the square of the hypotenuse equals the sum of the squares of the legs: a² + b² = c². So c = √(a² + b²) and a leg a = √(c² − b²).\n\nThe converse: if the sides of a triangle satisfy a² + b² = c² (c the longest), the triangle is right-angled. 5, 12, 13: 25 + 144 = 169 = 13², so it is right-angled.',
        keyPoints: ['a² + b² = c² (c = hypotenuse, opposite the right angle)', 'Hypotenuse: c = √(a² + b²);  leg: a = √(c² − b²)', 'Converse: a² + b² = c² ⟹ right angle'],
        examples: [
          { example: 'The legs are 6 cm and 8 cm. Find the hypotenuse.', solution: 'c² = 36 + 64 = 100, c = √100 = 10 cm.' },
          { example: 'Is the triangle with sides 5, 12, 13 right-angled?', solution: '5² + 12² = 25 + 144 = 169 and 13² = 169; yes, it is right-angled.' },
        ],
        commonMistakes: [
          { mistake: 'c = a + b = 6 + 8 = 14', fix: 'Add the squares, not the sides: c = √(36 + 64) = 10.' },
          { mistake: 'Finding a leg with a² = c² + b²', fix: 'For a leg, subtract: a² = c² − b².' },
        ],
        practice: [
          { problem: 'The legs are 9 cm and 12 cm. Find the hypotenuse.', solution: '15 cm', steps: ['c² = 81 + 144 = 225.', 'c = √225 = 15 cm.'] },
          { problem: 'The hypotenuse is 13 cm and one leg is 5 cm. Find the other leg.', solution: '12 cm', steps: ['b² = 169 − 25 = 144.', 'b = √144 = 12 cm.'] },
          { problem: 'Is the triangle with sides 7, 8, 11 right-angled?', solution: 'No', steps: ['7² + 8² = 49 + 64 = 113.', '11² = 121 ≠ 113, so no.'] },
        ],
      },
      de: {
        title: 'Der Satz des Pythagoras und seine Umkehrung',
        objectives: ['Mit dem Satz des Pythagoras eine Seite im rechtwinkligen Dreieck berechnen.', 'Mit der Umkehrung prüfen, ob ein Dreieck rechtwinklig ist.'],
        theory: 'Im rechtwinkligen Dreieck heißen die Seiten am rechten Winkel Katheten (a, b), die Seite gegenüber dem rechten Winkel heißt Hypotenuse (c); sie ist die längste Seite.\n\nSatz des Pythagoras: Das Quadrat der Hypotenuse ist gleich der Summe der Kathetenquadrate: a² + b² = c². Also c = √(a² + b²) und eine Kathete a = √(c² − b²).\n\nUmkehrung: Gilt für die Seiten eines Dreiecks a² + b² = c² (c die längste), dann ist das Dreieck rechtwinklig. 5, 12, 13: 25 + 144 = 169 = 13², also rechtwinklig.',
        keyPoints: ['a² + b² = c² (c = Hypotenuse, gegenüber dem rechten Winkel)', 'Hypotenuse: c = √(a² + b²);  Kathete: a = √(c² − b²)', 'Umkehrung: a² + b² = c² ⟹ rechter Winkel'],
        examples: [
          { example: 'Die Katheten sind 6 cm und 8 cm lang. Bestimmen Sie die Hypotenuse.', solution: 'c² = 36 + 64 = 100, c = √100 = 10 cm.' },
          { example: 'Ist das Dreieck mit den Seiten 5, 12, 13 rechtwinklig?', solution: '5² + 12² = 25 + 144 = 169 und 13² = 169; ja, es ist rechtwinklig.' },
        ],
        commonMistakes: [
          { mistake: 'c = a + b = 6 + 8 = 14', fix: 'Die Quadrate werden addiert, nicht die Seiten: c = √(36 + 64) = 10.' },
          { mistake: 'Kathete mit a² = c² + b² berechnen', fix: 'Für eine Kathete subtrahieren: a² = c² − b².' },
        ],
        practice: [
          { problem: 'Die Katheten sind 9 cm und 12 cm lang. Bestimmen Sie die Hypotenuse.', solution: '15 cm', steps: ['c² = 81 + 144 = 225.', 'c = √225 = 15 cm.'] },
          { problem: 'Die Hypotenuse ist 13 cm, eine Kathete 5 cm lang. Bestimmen Sie die andere Kathete.', solution: '12 cm', steps: ['b² = 169 − 25 = 144.', 'b = √144 = 12 cm.'] },
          { problem: 'Ist das Dreieck mit den Seiten 7, 8, 11 rechtwinklig?', solution: 'Nein', steps: ['7² + 8² = 49 + 64 = 113.', '11² = 121 ≠ 113, also nein.'] },
        ],
      },
    },

    // ───────── 3. Applications
    {
      slug: 'g7-pythagoras-applications',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1.6, xMax: 4.6, yMin: -0.9, yMax: 4.8 }, height: 220,
        shapes: [
          { kind: 'segment', from: [-0.5, 0], to: [4.4, 0], color: 'muted' },
          { kind: 'segment', from: [0, 0], to: [0, 4.6], color: 'muted' },
          { kind: 'segment', from: [3, 0], to: [0, 4], color: 'primary', label: '5 m' },
          { kind: 'angle', vertex: [0, 0], from: [3, 0], to: [0, 4], right: true },
          { kind: 'label', at: [1.5, -0.5], text: '3 m' },
          { kind: 'label', at: [-0.9, 2], text: alt('h = ?', 'h = ?', 'h = ?'), color: 'secondary' },
        ],
        caption: alt('Shkalla 5 m mbështetet në mur me këmbën 3 m larg tij: h = √(5² − 3²) = 4 m.', 'A 5 m ladder leans on a wall with its foot 3 m away: h = √(5² − 3²) = 4 m.', 'Eine 5 m lange Leiter lehnt an einer Wand, ihr Fuß steht 3 m davor: h = √(5² − 3²) = 4 m.'),
        alt: alt('Shkallë e mbështetur në mur: toka 3 m, shkalla 5 m, lartësia e panjohur në mur.', 'A ladder against a wall: ground 3 m, ladder 5 m, unknown height on the wall.', 'Leiter an einer Wand: Boden 3 m, Leiter 5 m, unbekannte Höhe an der Wand.'),
      }],
      answers: {
        examples: [[['sqrt(5^2 - 3^2)', 4]], [['sqrt(8^2 + 6^2)', 10]]],
        practice: [[['sqrt(32^2 + 24^2)', 40]], [['sqrt(13^2 - 5^2)', 12]], [['sqrt(50)', 7.07, 0.005]]],
      },
      al: {
        title: 'Zbatimet e teoremës së Pitagorës',
        objectives: ['Të gjeni trekëndëshin kënddrejtë në një situatë nga jeta.', 'Të njehsoni diagonale, lartësi dhe largësi me teoremën e Pitagorës.'],
        theory: 'Shumë probleme praktike fshehin një trekëndësh kënddrejtë: shkalla e mbështetur në mur, diagonalja e drejtkëndëshit ose e ekranit, lartësia e trekëndëshit barakrahës.\n\nHapat: (1) vizatoni figurën dhe shënoni këndin e drejtë; (2) dalloni hipotenuzën, brinjën përballë këndit të drejtë; (3) zbatoni a² + b² = c²; (4) shkruani njësinë dhe kontrolloni nëse hipotenuza është më e gjata.\n\nDiagonalja e drejtkëndëshit a × b: d = √(a² + b²). Lartësia e trekëndëshit barakrahës me bazë b dhe krah k: h = √(k² − (b/2)²).',
        keyPoints: ['Vizatoni dhe gjeni këndin e drejtë.', 'Diagonalja: d = √(a² + b²)', 'Hipotenuza duhet të dalë brinja më e gjatë.'],
        examples: [
          { example: 'Një shkallë 5 m mbështetet në mur; këmba e saj është 3 m larg murit. Sa lart arrin?', solution: 'Shkalla është hipotenuza: h = √(25 − 9) = √16 = 4 m.' },
          { example: 'Gjeni diagonalen e drejtkëndëshit 8 cm × 6 cm.', solution: 'd = √(64 + 36) = √100 = 10 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Te shkalla: h = √(5² + 3²) ≈ 5,83 m', fix: 'Shkalla është hipotenuza; lartësia është katetë: h = √(5² − 3²) = 4 m.' },
        ],
        practice: [
          { problem: 'Ekrani i një televizori është 32 cm × 24 cm. Sa është diagonalja?', solution: '40 cm', steps: ['d² = 1 024 + 576 = 1 600.', 'd = √1 600 = 40 cm.'] },
          { problem: 'Trekëndëshi barakrahës ka bazë 10 cm dhe krahë 13 cm. Gjeni lartësinë mbi bazë.', solution: '12 cm', steps: ['Gjysma e bazës: 5 cm.', 'h = √(169 − 25) = √144 = 12 cm.'] },
          { problem: 'Gjeni diagonalen e katrorit me brinjë 5 cm (rrumbullakuar në dy dhjetore).', solution: '≈ 7,07 cm', steps: ['d² = 25 + 25 = 50.', 'd = √50 ≈ 7,07 cm.'] },
        ],
      },
      en: {
        title: 'Using Pythagoras\' theorem',
        objectives: ['Spot the right triangle in a real-life situation.', 'Work out diagonals, heights and distances with Pythagoras\' theorem.'],
        theory: 'Many practical problems hide a right triangle: a ladder against a wall, the diagonal of a rectangle or a screen, the height of an isosceles triangle.\n\nSteps: (1) draw the figure and mark the right angle; (2) find the hypotenuse, the side opposite the right angle; (3) use a² + b² = c²; (4) write the unit and check that the hypotenuse is the longest side.\n\nDiagonal of an a × b rectangle: d = √(a² + b²). Height of an isosceles triangle with base b and equal sides s: h = √(s² − (b/2)²).',
        keyPoints: ['Draw it and find the right angle.', 'Diagonal: d = √(a² + b²)', 'The hypotenuse must come out as the longest side.'],
        examples: [
          { example: 'A 5 m ladder leans against a wall; its foot is 3 m from the wall. How high does it reach?', solution: 'The ladder is the hypotenuse: h = √(25 − 9) = √16 = 4 m.' },
          { example: 'Find the diagonal of an 8 cm × 6 cm rectangle.', solution: 'd = √(64 + 36) = √100 = 10 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Ladder: h = √(5² + 3²) ≈ 5.83 m', fix: 'The ladder is the hypotenuse; the height is a leg: h = √(5² − 3²) = 4 m.' },
        ],
        practice: [
          { problem: 'A TV screen is 32 cm × 24 cm. How long is its diagonal?', solution: '40 cm', steps: ['d² = 1 024 + 576 = 1 600.', 'd = √1 600 = 40 cm.'] },
          { problem: 'An isosceles triangle has base 10 cm and equal sides 13 cm. Find the height to the base.', solution: '12 cm', steps: ['Half the base: 5 cm.', 'h = √(169 − 25) = √144 = 12 cm.'] },
          { problem: 'Find the diagonal of a square with side 5 cm (to two decimal places).', solution: '≈ 7.07 cm', steps: ['d² = 25 + 25 = 50.', 'd = √50 ≈ 7.07 cm.'] },
        ],
      },
      de: {
        title: 'Anwendungen des Satzes des Pythagoras',
        objectives: ['Das rechtwinklige Dreieck in einer Alltagssituation erkennen.', 'Diagonalen, Höhen und Entfernungen mit dem Satz des Pythagoras berechnen.'],
        theory: 'Viele Sachaufgaben verstecken ein rechtwinkliges Dreieck: eine Leiter an der Wand, die Diagonale eines Rechtecks oder Bildschirms, die Höhe eines gleichschenkligen Dreiecks.\n\nVorgehen: (1) Skizze zeichnen und den rechten Winkel markieren; (2) die Hypotenuse finden, die Seite gegenüber dem rechten Winkel; (3) a² + b² = c² anwenden; (4) Einheit angeben und prüfen, ob die Hypotenuse die längste Seite ist.\n\nDiagonale eines Rechtecks a × b: d = √(a² + b²). Höhe eines gleichschenkligen Dreiecks mit Basis c und Schenkel s: h = √(s² − (c/2)²).',
        keyPoints: ['Skizze zeichnen, rechten Winkel finden.', 'Diagonale: d = √(a² + b²)', 'Die Hypotenuse muss die längste Seite sein.'],
        examples: [
          { example: 'Eine 5 m lange Leiter lehnt an einer Wand; ihr Fuß steht 3 m von der Wand entfernt. Wie hoch reicht sie?', solution: 'Die Leiter ist die Hypotenuse: h = √(25 − 9) = √16 = 4 m.' },
          { example: 'Bestimmen Sie die Diagonale eines Rechtecks 8 cm × 6 cm.', solution: 'd = √(64 + 36) = √100 = 10 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Leiter: h = √(5² + 3²) ≈ 5,83 m', fix: 'Die Leiter ist die Hypotenuse; die Höhe ist eine Kathete: h = √(5² − 3²) = 4 m.' },
        ],
        practice: [
          { problem: 'Ein Fernsehbildschirm ist 32 cm × 24 cm groß. Wie lang ist die Diagonale?', solution: '40 cm', steps: ['d² = 1 024 + 576 = 1 600.', 'd = √1 600 = 40 cm.'] },
          { problem: 'Ein gleichschenkliges Dreieck hat die Basis 10 cm und Schenkel von 13 cm. Bestimmen Sie die Höhe auf die Basis.', solution: '12 cm', steps: ['Halbe Basis: 5 cm.', 'h = √(169 − 25) = √144 = 12 cm.'] },
          { problem: 'Bestimmen Sie die Diagonale eines Quadrats mit der Seite 5 cm (auf zwei Dezimalstellen).', solution: '≈ 7,07 cm', steps: ['d² = 25 + 25 = 50.', 'd = √50 ≈ 7,07 cm.'] },
        ],
      },
    },
  ],
};
