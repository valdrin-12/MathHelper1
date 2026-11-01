// Grade 12 · Theme 5: Points and lines in the coordinate plane
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g12-coordinate-geometry',
  i18n: {
    al: { title: 'Pika dhe drejtëza në planin koordinativ', description: 'Prodhimi skalar, syprina e trekëndëshit me koordinata, mesi dhe gjatësia e segmentit, ekuacionet e drejtëzës, paralelizmi, pingulësia dhe largësia e pikës nga drejtëza.' },
    en: { title: 'Points and lines in the plane', description: 'Dot product, area of a triangle from coordinates, midpoint and length of a segment, equations of a line, parallel and perpendicular lines, distance from a point to a line.' },
    de: { title: 'Punkte und Geraden in der Ebene', description: 'Skalarprodukt, Dreiecksfläche aus Koordinaten, Mittelpunkt und Länge einer Strecke, Geradengleichungen, Parallelität, Orthogonalität und Abstand Punkt–Gerade.' },
  },
  lessons: [
    // ───────── 1. Dot product
    {
      slug: 'g12-coordinate-geometry-dot-product',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1, xMax: 4.5, yMin: -1, yMax: 3 }, grid: true, axes: true, height: 200,
        shapes: [
          { kind: 'segment', from: [0, 0], to: [3, 1], color: 'primary', arrow: true, label: 'a' },
          { kind: 'segment', from: [0, 0], to: [1, 2], color: 'secondary', arrow: true, label: 'b' },
          { kind: 'angle', vertex: [0, 0], from: [3, 1], to: [1, 2], label: '45°', color: 'success', r: 26 },
        ],
        caption: alt('a = (3, 1), b = (1, 2): a · b = 3 + 2 = 5 dhe cos φ = 5/(√10 · √5) → φ = 45°.', 'a = (3, 1), b = (1, 2): a · b = 3 + 2 = 5 and cos φ = 5/(√10 · √5) → φ = 45°.', 'a = (3 | 1), b = (1 | 2): a · b = 3 + 2 = 5 und cos φ = 5/(√10 · √5) → φ = 45°.'),
        alt: alt('Dy vektorë nga origjina, a = (3, 1) dhe b = (1, 2), me këndin 45° midis tyre.', 'Two vectors from the origin, a = (3, 1) and b = (1, 2), with the 45° angle between them.', 'Zwei Vektoren vom Ursprung, a = (3 | 1) und b = (1 | 2), mit dem Winkel 45° dazwischen.'),
      }],
      answers: {
        examples: [[['3*1 + 1*2', 5]], [['acos(5 / (sqrt(10) * sqrt(5))) * 180 / pi', 45]]],
        practice: [[['2*4 + (-3)*1', 5]], [['2*3 + 3*(-2)', 0]], [['12 / 3', 4]]],
      },
      al: {
        title: 'Prodhimi skalar',
        objectives: ['Të llogaritni prodhimin skalar me koordinata.', 'Të gjeni këndin midis dy vektorëve dhe të kontrolloni pingulësinë.'],
        theory: 'Prodhimi skalar i a = (x₁, y₁) dhe b = (x₂, y₂) është numër: a · b = x₁x₂ + y₁y₂.\n\nGjeometrikisht a · b = |a| · |b| · cos φ, ku φ është këndi midis vektorëve. Prandaj cos φ = a · b / (|a| · |b|).\n\nNëse a · b = 0 (dhe vektorët nuk janë zero), atëherë cos φ = 0 dhe vektorët janë pingulë.',
        keyPoints: ['a · b = x₁x₂ + y₁y₂', 'cos φ = a · b / (|a| · |b|)', 'a · b = 0 ⇔ a ⊥ b'],
        examples: [
          { example: 'Llogaritni a · b për a = (3, 1), b = (1, 2).', solution: '3 · 1 + 1 · 2 = 5.' },
          { example: 'Gjeni këndin midis a = (3, 1) dhe b = (1, 2).', solution: 'cos φ = 5/(√10 · √5) = 5/√50 ≈ 0,707 → φ = 45°.' },
        ],
        commonMistakes: [
          { mistake: 'Prodhimi skalar shkruhet si vektor (3, 2).', fix: 'Rezultati është numër: shumë e prodhimeve, 3 + 2 = 5.' },
        ],
        practice: [
          { problem: 'Llogaritni (2, −3) · (4, 1).', solution: '5', steps: ['2 · 4 + (−3) · 1.', '= 8 − 3 = 5.'] },
          { problem: 'A janë pingulë (2, 3) dhe (3, −2)?', solution: 'Po', steps: ['2 · 3 + 3 · (−2) = 6 − 6 = 0.', 'Prodhimi skalar 0 → pingulë.'] },
          { problem: 'Për cilin k janë pingulë (k, 2) dhe (3, −6)?', solution: 'k = 4', steps: ['3k − 12 = 0.', 'k = 12 : 3 = 4.'] },
        ],
      },
      en: {
        title: 'The dot product',
        objectives: ['Work out the dot product from components.', 'Find the angle between two vectors and test for perpendicularity.'],
        theory: 'The dot product of a = (x₁, y₁) and b = (x₂, y₂) is a number: a · b = x₁x₂ + y₁y₂.\n\nGeometrically a · b = |a| · |b| · cos φ, where φ is the angle between the vectors. So cos φ = a · b / (|a| · |b|).\n\nIf a · b = 0 (and neither vector is zero), then cos φ = 0 and the vectors are perpendicular.',
        keyPoints: ['a · b = x₁x₂ + y₁y₂', 'cos φ = a · b / (|a| · |b|)', 'a · b = 0 ⇔ a ⊥ b'],
        examples: [
          { example: 'Work out a · b for a = (3, 1), b = (1, 2).', solution: '3 · 1 + 1 · 2 = 5.' },
          { example: 'Find the angle between a = (3, 1) and b = (1, 2).', solution: 'cos φ = 5/(√10 · √5) = 5/√50 ≈ 0.707 → φ = 45°.' },
        ],
        commonMistakes: [
          { mistake: 'The dot product is written as a vector (3, 2).', fix: 'The result is a number: the sum of the products, 3 + 2 = 5.' },
        ],
        practice: [
          { problem: 'Work out (2, −3) · (4, 1).', solution: '5', steps: ['2 · 4 + (−3) · 1.', '= 8 − 3 = 5.'] },
          { problem: 'Are (2, 3) and (3, −2) perpendicular?', solution: 'Yes', steps: ['2 · 3 + 3 · (−2) = 6 − 6 = 0.', 'Dot product 0 → perpendicular.'] },
          { problem: 'For which k are (k, 2) and (3, −6) perpendicular?', solution: 'k = 4', steps: ['3k − 12 = 0.', 'k = 12 ÷ 3 = 4.'] },
        ],
      },
      de: {
        title: 'Das Skalarprodukt',
        objectives: ['Das Skalarprodukt aus Koordinaten berechnen.', 'Den Winkel zwischen zwei Vektoren bestimmen und Orthogonalität prüfen.'],
        theory: 'Das Skalarprodukt von a = (x₁ | y₁) und b = (x₂ | y₂) ist eine Zahl: a · b = x₁x₂ + y₁y₂.\n\nGeometrisch gilt a · b = |a| · |b| · cos φ, wobei φ der Winkel zwischen den Vektoren ist. Also cos φ = a · b / (|a| · |b|).\n\nIst a · b = 0 (und kein Vektor der Nullvektor), dann ist cos φ = 0 und die Vektoren sind orthogonal.',
        keyPoints: ['a · b = x₁x₂ + y₁y₂', 'cos φ = a · b / (|a| · |b|)', 'a · b = 0 ⇔ a ⊥ b'],
        examples: [
          { example: 'Berechnen Sie a · b für a = (3 | 1), b = (1 | 2).', solution: '3 · 1 + 1 · 2 = 5.' },
          { example: 'Bestimmen Sie den Winkel zwischen a = (3 | 1) und b = (1 | 2).', solution: 'cos φ = 5/(√10 · √5) = 5/√50 ≈ 0,707 → φ = 45°.' },
        ],
        commonMistakes: [
          { mistake: 'Das Skalarprodukt wird als Vektor (3 | 2) angegeben.', fix: 'Das Ergebnis ist eine Zahl: Summe der Produkte, 3 + 2 = 5.' },
        ],
        practice: [
          { problem: 'Berechnen Sie (2 | −3) · (4 | 1).', solution: '5', steps: ['2 · 4 + (−3) · 1.', '= 8 − 3 = 5.'] },
          { problem: 'Sind (2 | 3) und (3 | −2) orthogonal?', solution: 'Ja', steps: ['2 · 3 + 3 · (−2) = 6 − 6 = 0.', 'Skalarprodukt 0 → orthogonal.'] },
          { problem: 'Für welches k sind (k | 2) und (3 | −6) orthogonal?', solution: 'k = 4', steps: ['3k − 12 = 0.', 'k = 12 : 3 = 4.'] },
        ],
      },
    },
    // ───────── 2. Area of a triangle
    {
      slug: 'g12-coordinate-geometry-triangle-area',
      visuals: [{
        type: 'geoFigure', view: { xMin: 0, xMax: 6, yMin: 0, yMax: 6 }, grid: true, axes: true, height: 220,
        shapes: [
          { kind: 'polygon', points: [[1, 1], [5, 2], [2, 5]], color: 'primary', fill: true },
          { kind: 'point', at: [1, 1], label: 'A(1, 1)', labelPos: 'sw', color: 'ink' },
          { kind: 'point', at: [5, 2], label: 'B(5, 2)', labelPos: 'e', color: 'ink' },
          { kind: 'point', at: [2, 5], label: 'C(2, 5)', labelPos: 'n', color: 'ink' },
        ],
        caption: alt('S = 1/2 · |1(2 − 5) + 5(5 − 1) + 2(1 − 2)| = 1/2 · 15 = 7,5.', 'A = 1/2 · |1(2 − 5) + 5(5 − 1) + 2(1 − 2)| = 1/2 · 15 = 7.5.', 'A = 1/2 · |1(2 − 5) + 5(5 − 1) + 2(1 − 2)| = 1/2 · 15 = 7,5.'),
        alt: alt('Trekëndëshi me kulme A(1, 1), B(5, 2), C(2, 5) në rrjetë.', 'The triangle with vertices A(1, 1), B(5, 2), C(2, 5) on a grid.', 'Das Dreieck mit den Ecken A(1 | 1), B(5 | 2), C(2 | 5) im Gitter.'),
      }],
      answers: {
        examples: [[['0.5 * abs(1*(2-5) + 5*(5-1) + 2*(1-2))', 7.5]], [['0.5 * 4 * 3', 6]]],
        practice: [[['0.5 * abs(0*(0-4) + 6*(4-0) + 2*(0-0))', 12]], [['0.5 * abs(1*(6-10) + 3*(10-2) + 5*(2-6))', 0]], [['0.5 * abs(-2*(-1-3) + 2*(3-1) + 1*(1+1))', 7]]],
      },
      al: {
        title: 'Syprina e trekëndëshit me koordinata',
        objectives: ['Të llogaritni syprinën e trekëndëshit nga koordinatat e kulmeve.', 'Të kontrolloni nëse tri pika janë në një drejtëz.'],
        theory: 'Për kulmet A(x₁, y₁), B(x₂, y₂), C(x₃, y₃):\nS = 1/2 · |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|.\n\nVlera absolute duhet sepse shprehja mund të dalë negative (varet nga radha e kulmeve).\n\nNëse shprehja del 0, trekëndëshi "nuk ekziston": tri pikat janë në të njëjtën drejtëz (kolineare).',
        keyPoints: ['S = 1/2 · |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|', 'Vlera absolute', 'S = 0 → pikat kolineare'],
        examples: [
          { example: 'Gjeni syprinën e trekëndëshit A(1, 1), B(5, 2), C(2, 5).', solution: '1/2 · |−3 + 20 − 2| = 1/2 · 15 = 7,5.' },
          { example: 'Gjeni syprinën e trekëndëshit O(0, 0), (4, 0), (0, 3).', solution: 'Kënddrejtë: 1/2 · 4 · 3 = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Harrohet 1/2 dhe del 15.', fix: 'Formula fillon me 1/2.' },
          { mistake: 'Syprina del negative.', fix: 'Merret vlera absolute.' },
        ],
        practice: [
          { problem: 'Gjeni syprinën e trekëndëshit A(0, 0), B(6, 0), C(2, 4).', solution: '12', steps: ['1/2 · |0 + 6 · 4 + 2 · 0|.', '= 1/2 · 24 = 12.'] },
          { problem: 'A janë në një drejtëz pikat (1, 2), (3, 6), (5, 10)?', solution: 'Po', steps: ['1 · (6 − 10) + 3 · (10 − 2) + 5 · (2 − 6) = −4 + 24 − 20 = 0.', 'S = 0 → kolineare.'] },
          { problem: 'Gjeni syprinën e trekëndëshit A(−2, 1), B(2, −1), C(1, 3).', solution: '7', steps: ['−2 · (−4) + 2 · 2 + 1 · 2 = 8 + 4 + 2 = 14.', 'S = 1/2 · 14 = 7.'] },
        ],
      },
      en: {
        title: 'Area of a triangle from coordinates',
        objectives: ['Work out the area of a triangle from the coordinates of its vertices.', 'Check whether three points lie on one line.'],
        theory: 'For vertices A(x₁, y₁), B(x₂, y₂), C(x₃, y₃):\nArea = 1/2 · |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|.\n\nThe absolute value is needed because the expression can come out negative (it depends on the order of the vertices).\n\nIf the expression is 0 there is no real triangle: the three points lie on one line (collinear).',
        keyPoints: ['Area = 1/2 · |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|', 'Absolute value', 'Area 0 → collinear'],
        examples: [
          { example: 'Find the area of triangle A(1, 1), B(5, 2), C(2, 5).', solution: '1/2 · |−3 + 20 − 2| = 1/2 · 15 = 7.5.' },
          { example: 'Find the area of triangle O(0, 0), (4, 0), (0, 3).', solution: 'Right-angled: 1/2 · 4 · 3 = 6.' },
        ],
        commonMistakes: [
          { mistake: 'The 1/2 is forgotten and 15 is given.', fix: 'The formula starts with 1/2.' },
          { mistake: 'The area comes out negative.', fix: 'Take the absolute value.' },
        ],
        practice: [
          { problem: 'Find the area of triangle A(0, 0), B(6, 0), C(2, 4).', solution: '12', steps: ['1/2 · |0 + 6 · 4 + 2 · 0|.', '= 1/2 · 24 = 12.'] },
          { problem: 'Do the points (1, 2), (3, 6), (5, 10) lie on one line?', solution: 'Yes', steps: ['1 · (6 − 10) + 3 · (10 − 2) + 5 · (2 − 6) = −4 + 24 − 20 = 0.', 'Area 0 → collinear.'] },
          { problem: 'Find the area of triangle A(−2, 1), B(2, −1), C(1, 3).', solution: '7', steps: ['−2 · (−4) + 2 · 2 + 1 · 2 = 8 + 4 + 2 = 14.', 'Area = 1/2 · 14 = 7.'] },
        ],
      },
      de: {
        title: 'Dreiecksfläche aus Koordinaten',
        objectives: ['Den Flächeninhalt eines Dreiecks aus den Koordinaten der Ecken berechnen.', 'Prüfen, ob drei Punkte auf einer Geraden liegen.'],
        theory: 'Für die Ecken A(x₁ | y₁), B(x₂ | y₂), C(x₃ | y₃):\nA = 1/2 · |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|.\n\nDer Betrag ist nötig, weil der Term negativ werden kann (je nach Reihenfolge der Ecken).\n\nIst der Term 0, gibt es kein echtes Dreieck: Die drei Punkte liegen auf einer Geraden (kollinear).',
        keyPoints: ['A = 1/2 · |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|', 'Betrag nehmen', 'A = 0 → kollinear'],
        examples: [
          { example: 'Bestimmen Sie den Flächeninhalt des Dreiecks A(1 | 1), B(5 | 2), C(2 | 5).', solution: '1/2 · |−3 + 20 − 2| = 1/2 · 15 = 7,5.' },
          { example: 'Bestimmen Sie den Flächeninhalt des Dreiecks O(0 | 0), (4 | 0), (0 | 3).', solution: 'Rechtwinklig: 1/2 · 4 · 3 = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Der Faktor 1/2 wird vergessen, Ergebnis 15.', fix: 'Die Formel beginnt mit 1/2.' },
          { mistake: 'Der Flächeninhalt wird negativ.', fix: 'Den Betrag nehmen.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Flächeninhalt des Dreiecks A(0 | 0), B(6 | 0), C(2 | 4).', solution: '12', steps: ['1/2 · |0 + 6 · 4 + 2 · 0|.', '= 1/2 · 24 = 12.'] },
          { problem: 'Liegen die Punkte (1 | 2), (3 | 6), (5 | 10) auf einer Geraden?', solution: 'Ja', steps: ['1 · (6 − 10) + 3 · (10 − 2) + 5 · (2 − 6) = −4 + 24 − 20 = 0.', 'A = 0 → kollinear.'] },
          { problem: 'Bestimmen Sie den Flächeninhalt des Dreiecks A(−2 | 1), B(2 | −1), C(1 | 3).', solution: '7', steps: ['−2 · (−4) + 2 · 2 + 1 · 2 = 8 + 4 + 2 = 14.', 'A = 1/2 · 14 = 7.'] },
        ],
      },
    },
    // ───────── 3. Midpoint and length
    {
      slug: 'g12-coordinate-geometry-midpoint',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1, xMax: 8, yMin: -5, yMax: 9 }, grid: true, axes: true, height: 240,
        shapes: [
          { kind: 'segment', from: [2, -4], to: [6, 8], color: 'primary' },
          { kind: 'point', at: [2, -4], label: 'A(2, −4)', labelPos: 'e', color: 'ink' },
          { kind: 'point', at: [6, 8], label: 'B(6, 8)', labelPos: 'w', color: 'ink' },
          { kind: 'point', at: [4, 2], label: 'M(4, 2)', labelPos: 'e', color: 'secondary' },
        ],
        caption: alt('M = ((2 + 6)/2, (−4 + 8)/2) = (4, 2).', 'M = ((2 + 6)/2, (−4 + 8)/2) = (4, 2).', 'M = ((2 + 6)/2 | (−4 + 8)/2) = (4 | 2).'),
        alt: alt('Segmenti nga A(2, −4) te B(6, 8) me mesin M(4, 2).', 'The segment from A(2, −4) to B(6, 8) with midpoint M(4, 2).', 'Die Strecke von A(2 | −4) nach B(6 | 8) mit Mittelpunkt M(4 | 2).'),
      }],
      answers: {
        examples: [[['(2 + 6) / 2', 4], ['(-4 + 8) / 2', 2]], [['sqrt(4^2 + 12^2)', 12.65, 0.005]]],
        practice: [[['(-3 + 7) / 2', 2], ['(5 + 1) / 2', 3]], [['2*4 - 1', 7], ['2*5 - 2', 8]], [['sqrt(3^2 + 4^2)', 5]]],
      },
      al: {
        title: 'Mesi dhe gjatësia e segmentit',
        objectives: ['Të gjeni mesin e segmentit nga koordinatat e skajeve.', 'Të llogaritni gjatësinë e segmentit dhe skajin e panjohur nga mesi.'],
        theory: 'Mesi M i segmentit AB me A(x₁, y₁) dhe B(x₂, y₂): M = ((x₁ + x₂)/2, (y₁ + y₂)/2) – mesatarja e koordinatave.\n\nGjatësia (nga Pitagora): |AB| = √((x₂ − x₁)² + (y₂ − y₁)²).\n\nNëse njihen A dhe mesi M, skaji tjetër është B = (2xₘ − x₁, 2yₘ − y₁).',
        keyPoints: ['M = ((x₁ + x₂)/2, (y₁ + y₂)/2)', '|AB| = √(Δx² + Δy²)', 'B = 2M − A'],
        examples: [
          { example: 'Gjeni mesin e segmentit A(2, −4), B(6, 8).', solution: 'M = (8/2, 4/2) = (4, 2).' },
          { example: 'Gjeni gjatësinë e AB për A(2, −4), B(6, 8).', solution: '√(4² + 12²) = √160 ≈ 12,65.' },
        ],
        commonMistakes: [
          { mistake: 'Te mesi koordinatat zbriten: ((6 − 2)/2, …).', fix: 'Koordinatat mblidhen dhe pjesëtohen me 2.' },
        ],
        practice: [
          { problem: 'Gjeni mesin e segmentit (−3, 5) dhe (7, 1).', solution: '(2, 3)', steps: ['(−3 + 7)/2 = 2.', '(5 + 1)/2 = 3.'] },
          { problem: 'A(1, 2) dhe mesi M(4, 5). Gjeni B.', solution: 'B(7, 8)', steps: ['x = 2 · 4 − 1 = 7.', 'y = 2 · 5 − 2 = 8.'] },
          { problem: 'Gjeni largësinë midis (1, 1) dhe (4, 5).', solution: '5', steps: ['Δx = 3, Δy = 4.', '√(9 + 16) = 5.'] },
        ],
      },
      en: {
        title: 'Midpoint and length of a segment',
        objectives: ['Find the midpoint of a segment from its end points.', 'Work out the length of a segment and a missing end point from the midpoint.'],
        theory: 'The midpoint M of AB with A(x₁, y₁) and B(x₂, y₂): M = ((x₁ + x₂)/2, (y₁ + y₂)/2) – the mean of the coordinates.\n\nLength (by Pythagoras): |AB| = √((x₂ − x₁)² + (y₂ − y₁)²).\n\nIf A and the midpoint M are known, the other end is B = (2xₘ − x₁, 2yₘ − y₁).',
        keyPoints: ['M = ((x₁ + x₂)/2, (y₁ + y₂)/2)', '|AB| = √(Δx² + Δy²)', 'B = 2M − A'],
        examples: [
          { example: 'Find the midpoint of A(2, −4), B(6, 8).', solution: 'M = (8/2, 4/2) = (4, 2).' },
          { example: 'Find the length of AB for A(2, −4), B(6, 8).', solution: '√(4² + 12²) = √160 ≈ 12.65.' },
        ],
        commonMistakes: [
          { mistake: 'For the midpoint the coordinates are subtracted: ((6 − 2)/2, …).', fix: 'The coordinates are added and divided by 2.' },
        ],
        practice: [
          { problem: 'Find the midpoint of (−3, 5) and (7, 1).', solution: '(2, 3)', steps: ['(−3 + 7)/2 = 2.', '(5 + 1)/2 = 3.'] },
          { problem: 'A(1, 2) and midpoint M(4, 5). Find B.', solution: 'B(7, 8)', steps: ['x = 2 · 4 − 1 = 7.', 'y = 2 · 5 − 2 = 8.'] },
          { problem: 'Find the distance between (1, 1) and (4, 5).', solution: '5', steps: ['Δx = 3, Δy = 4.', '√(9 + 16) = 5.'] },
        ],
      },
      de: {
        title: 'Mittelpunkt und Länge einer Strecke',
        objectives: ['Den Mittelpunkt einer Strecke aus den Endpunkten bestimmen.', 'Die Länge einer Strecke und einen fehlenden Endpunkt aus dem Mittelpunkt berechnen.'],
        theory: 'Der Mittelpunkt M der Strecke AB mit A(x₁ | y₁) und B(x₂ | y₂): M = ((x₁ + x₂)/2 | (y₁ + y₂)/2) – der Mittelwert der Koordinaten.\n\nLänge (mit Pythagoras): |AB| = √((x₂ − x₁)² + (y₂ − y₁)²).\n\nSind A und der Mittelpunkt M bekannt, ist der andere Endpunkt B = (2xₘ − x₁ | 2yₘ − y₁).',
        keyPoints: ['M = ((x₁ + x₂)/2 | (y₁ + y₂)/2)', '|AB| = √(Δx² + Δy²)', 'B = 2M − A'],
        examples: [
          { example: 'Bestimmen Sie den Mittelpunkt von A(2 | −4), B(6 | 8).', solution: 'M = (8/2 | 4/2) = (4 | 2).' },
          { example: 'Bestimmen Sie die Länge von AB für A(2 | −4), B(6 | 8).', solution: '√(4² + 12²) = √160 ≈ 12,65.' },
        ],
        commonMistakes: [
          { mistake: 'Beim Mittelpunkt werden die Koordinaten subtrahiert: ((6 − 2)/2 | …).', fix: 'Die Koordinaten werden addiert und durch 2 geteilt.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Mittelpunkt von (−3 | 5) und (7 | 1).', solution: '(2 | 3)', steps: ['(−3 + 7)/2 = 2.', '(5 + 1)/2 = 3.'] },
          { problem: 'A(1 | 2) und Mittelpunkt M(4 | 5). Bestimmen Sie B.', solution: 'B(7 | 8)', steps: ['x = 2 · 4 − 1 = 7.', 'y = 2 · 5 − 2 = 8.'] },
          { problem: 'Bestimmen Sie den Abstand von (1 | 1) und (4 | 5).', solution: '5', steps: ['Δx = 3, Δy = 4.', '√(9 + 16) = 5.'] },
        ],
      },
    },
    // ───────── 4. Equations of a line
    {
      slug: 'g12-coordinate-geometry-line-equations',
      practiceVisuals: {
        1: {
        type: 'functionPlot', view: { xMin: -5, xMax: 5, yMin: -8, yMax: 8 },
        functions: [{ expr: 'k*x + n', label: 'y = {k}x {+n}' }],
        sliders: [{ name: 'k', min: -4, max: 4, step: 0.5, value: -1.5 }, { name: 'n', min: -6, max: 6, step: 0.5, value: 3 }],
        readouts: [
          { cases: [{ when: 'k > 0', text: { al: 'k = {k} > 0: drejtëza ngjitet.', en: 'k = {k} > 0: the line goes up.', de: 'k = {k} > 0: Die Gerade steigt.' } }, { when: 'k < 0', text: { al: 'k = {k} < 0: drejtëza zbret.', en: 'k = {k} < 0: the line goes down.', de: 'k = {k} < 0: Die Gerade fällt.' } }, { text: { al: 'k = 0: drejtëza është horizontale.', en: 'k = 0: the line is horizontal.', de: 'k = 0: Die Gerade ist waagerecht.' } }] }
        ],
        alt: { al: 'Drejtëza y = kx + n me rrëshqitës për koeficientët.', en: 'The line y = kx + n with sliders for the coefficients.', de: 'Die Gerade y = kx + n mit Schiebereglern für die Koeffizienten.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 4, yMin: -2, yMax: 7 }, height: 210,
        functions: [{ expr: '2*x - 1', label: 'y = 2x − 1' }],
        points: [{ at: [1, 1], label: '(1, 1)' }, { at: [3, 5], label: '(3, 5)' }, { at: [0.5, 0], label: '1/2' }],
        caption: alt('Forma e përgjithshme: 2x − y − 1 = 0; prerjet me boshtet x = 1/2 dhe y = −1.', 'General form: 2x − y − 1 = 0; axis intercepts x = 1/2 and y = −1.', 'Allgemeine Form: 2x − y − 1 = 0; Achsenabschnitte x = 1/2 und y = −1.'),
        alt: alt('Drejtëza y = 2x − 1 nëpër (1, 1) dhe (3, 5).', 'The line y = 2x − 1 through (1, 1) and (3, 5).', 'Die Gerade y = 2x − 1 durch (1 | 1) und (3 | 5).'),
      }],
      answers: {
        examples: [[['(5 - 1) / (3 - 1)', 2]], [['1 / 2', 0.5, 0, '1/2']]],
        practice: [[['3 + 2', 5]], [['-3 / 2', -1.5, 0, '-3/2']], 'text'],
      },
      al: {
        title: 'Ekuacionet e drejtëzës',
        objectives: ['Të shkruani ekuacionin e drejtëzës në formën eksplicite, të përgjithshme dhe segmentore.', 'Të kaloni nga një formë në tjetrën dhe të lexoni koeficientin këndor.'],
        theory: 'Format kryesore:\n• eksplicite: y = kx + n (k koeficienti këndor, n prerja me boshtin y);\n• nëpër një pikë: y − y₁ = k(x − x₁);\n• e përgjithshme: ax + by + c = 0, me k = −a/b;\n• segmentore: x/p + y/q = 1, ku p dhe q janë prerjet me boshtet.\n\nNëpër (1, 1) dhe (3, 5): k = 4/2 = 2, y − 1 = 2(x − 1) → y = 2x − 1, ose 2x − y − 1 = 0.',
        keyPoints: ['y − y₁ = k(x − x₁)', 'ax + by + c = 0 → k = −a/b', 'x/p + y/q = 1'],
        examples: [
          { example: 'Gjeni ekuacionin e drejtëzës nëpër (1, 1) dhe (3, 5).', solution: 'k = (5 − 1)/(3 − 1) = 2; y − 1 = 2(x − 1) → y = 2x − 1.' },
          { example: 'Gjeni prerjet me boshtet të 2x − y − 1 = 0.', solution: 'y = 0 → x = 1/2; x = 0 → y = −1.' },
        ],
        commonMistakes: [
          { mistake: 'Te 3x + 2y − 6 = 0 merret k = 3/2.', fix: 'Zgjidhni për y: y = −3/2 x + 3, pra k = −a/b = −3/2.' },
        ],
        practice: [
          { problem: 'Shkruani drejtëzën me k = −1 nëpër (2, 3).', solution: 'y = −x + 5', steps: ['y − 3 = −(x − 2).', 'y = −x + 2 + 3 = −x + 5.'] },
          { problem: 'Sa është koeficienti këndor i 3x + 2y − 6 = 0?', solution: 'k = −3/2', steps: ['2y = −3x + 6.', 'y = −3/2 x + 3 → k = −3/2.'] },
          { problem: 'Ku i pret boshtet drejtëza x/4 + y/2 = 1?', solution: '(4, 0) dhe (0, 2)', steps: ['Forma segmentore: p = 4, q = 2.', 'Prerjet: (4, 0) dhe (0, 2).'] },
        ],
      },
      en: {
        title: 'Equations of a line',
        objectives: ['Write the equation of a line in gradient–intercept, general and intercept form.', 'Change from one form to another and read off the gradient.'],
        theory: 'Main forms:\n• gradient–intercept: y = kx + n (k the gradient, n the y-intercept);\n• through a point: y − y₁ = k(x − x₁);\n• general: ax + by + c = 0, with k = −a/b;\n• intercept form: x/p + y/q = 1, where p and q are the axis intercepts.\n\nThrough (1, 1) and (3, 5): k = 4/2 = 2, y − 1 = 2(x − 1) → y = 2x − 1, or 2x − y − 1 = 0.',
        keyPoints: ['y − y₁ = k(x − x₁)', 'ax + by + c = 0 → k = −a/b', 'x/p + y/q = 1'],
        examples: [
          { example: 'Find the equation of the line through (1, 1) and (3, 5).', solution: 'k = (5 − 1)/(3 − 1) = 2; y − 1 = 2(x − 1) → y = 2x − 1.' },
          { example: 'Find the axis intercepts of 2x − y − 1 = 0.', solution: 'y = 0 → x = 1/2; x = 0 → y = −1.' },
        ],
        commonMistakes: [
          { mistake: 'For 3x + 2y − 6 = 0, k = 3/2 is taken.', fix: 'Solve for y: y = −3/2 x + 3, so k = −a/b = −3/2.' },
        ],
        practice: [
          { problem: 'Write the line with k = −1 through (2, 3).', solution: 'y = −x + 5', steps: ['y − 3 = −(x − 2).', 'y = −x + 2 + 3 = −x + 5.'] },
          { problem: 'What is the gradient of 3x + 2y − 6 = 0?', solution: 'k = −3/2', steps: ['2y = −3x + 6.', 'y = −3/2 x + 3 → k = −3/2.'] },
          { problem: 'Where does x/4 + y/2 = 1 meet the axes?', solution: '(4, 0) and (0, 2)', steps: ['Intercept form: p = 4, q = 2.', 'Intercepts: (4, 0) and (0, 2).'] },
        ],
      },
      de: {
        title: 'Geradengleichungen',
        objectives: ['Die Geradengleichung in Normalform, allgemeiner Form und Achsenabschnittsform aufstellen.', 'Zwischen den Formen wechseln und die Steigung ablesen.'],
        theory: 'Die wichtigsten Formen:\n• Normalform: y = kx + n (k Steigung, n y-Achsenabschnitt);\n• Punkt-Steigungs-Form: y − y₁ = k(x − x₁);\n• allgemeine Form: ax + by + c = 0, mit k = −a/b;\n• Achsenabschnittsform: x/p + y/q = 1, mit den Achsenabschnitten p und q.\n\nDurch (1 | 1) und (3 | 5): k = 4/2 = 2, y − 1 = 2(x − 1) → y = 2x − 1, oder 2x − y − 1 = 0.',
        keyPoints: ['y − y₁ = k(x − x₁)', 'ax + by + c = 0 → k = −a/b', 'x/p + y/q = 1'],
        examples: [
          { example: 'Bestimmen Sie die Gleichung der Geraden durch (1 | 1) und (3 | 5).', solution: 'k = (5 − 1)/(3 − 1) = 2; y − 1 = 2(x − 1) → y = 2x − 1.' },
          { example: 'Bestimmen Sie die Achsenabschnitte von 2x − y − 1 = 0.', solution: 'y = 0 → x = 1/2; x = 0 → y = −1.' },
        ],
        commonMistakes: [
          { mistake: 'Bei 3x + 2y − 6 = 0 wird k = 3/2 genommen.', fix: 'Nach y auflösen: y = −3/2 x + 3, also k = −a/b = −3/2.' },
        ],
        practice: [
          { problem: 'Stellen Sie die Gerade mit k = −1 durch (2 | 3) auf.', solution: 'y = −x + 5', steps: ['y − 3 = −(x − 2).', 'y = −x + 2 + 3 = −x + 5.'] },
          { problem: 'Welche Steigung hat 3x + 2y − 6 = 0?', solution: 'k = −3/2', steps: ['2y = −3x + 6.', 'y = −3/2 x + 3 → k = −3/2.'] },
          { problem: 'Wo schneidet x/4 + y/2 = 1 die Achsen?', solution: '(4 | 0) und (0 | 2)', steps: ['Achsenabschnittsform: p = 4, q = 2.', 'Schnittpunkte: (4 | 0) und (0 | 2).'] },
        ],
      },
    },
    // ───────── 5. Parallel and perpendicular
    {
      slug: 'g12-coordinate-geometry-parallel-perpendicular',
      practiceVisuals: {
        0: {
        type: 'functionPlot', equal: false, view: { xMin: -5, xMax: 5, yMin: -8, yMax: 8 },
        functions: [{ expr: '2*x + (1)', color: 'muted', label: 'y = 2x + (1)' }, { expr: 'k*x + n', color: 'secondary', label: 'y = {k}x {+n}' }],
        sliders: [{ name: 'k', min: -4, max: 4, step: 0.5, value: 2 }, { name: 'n', min: -6, max: 6, step: 0.5, value: 3.5 }],
        readouts: [{ cases: [
          { when: 'abs(k - (2)) < 0.001 and abs(n - (1)) < 0.001', text: { al: 'Të njëjtën drejtëz: pafund pika të përbashkëta.', en: 'The same line: infinitely many common points.', de: 'Dieselbe Gerade: unendlich viele gemeinsame Punkte.' } },
          { when: 'abs(k - (2)) < 0.001', text: { al: 'k = 2 si te drejtëza e parë: paralele, asnjë pikë e përbashkët.', en: 'k = 2 as for the first line: parallel, no common point.', de: 'k = 2 wie bei der ersten Geraden: parallel, kein gemeinsamer Punkt.' } },
          { text: { al: 'Koeficientë të ndryshëm: drejtëzat priten në një pikë.', en: 'Different gradients: the lines meet at one point.', de: 'Verschiedene Steigungen: Die Geraden schneiden sich in einem Punkt.' } },
        ] }],
        alt: { al: 'Dy drejtëza: njëra e dhënë, tjetra y = kx + n me rrëshqitës.', en: 'Two lines: one given, the other y = kx + n on sliders.', de: 'Zwei Geraden: eine gegeben, die andere y = kx + n mit Schiebereglern.' },
      },
        1: {
        type: 'functionPlot', equal: true, view: { xMin: -5, xMax: 5, yMin: -5, yMax: 5 },
        functions: [{ expr: '3*x + (0)', color: 'muted', label: 'y = 3x + (0)' }, { expr: 'k*x + n', color: 'secondary', label: 'y = {k}x {+n}' }],
        sliders: [{ name: 'k', min: -4, max: 4, step: 0.5, value: -0.5 }, { name: 'n', min: -6, max: 6, step: 0.5, value: 0 }],
        readouts: [{ cases: [
          { when: 'abs(3*k + 1) < 0.001', text: { al: 'k₁ · k₂ = 3 · {k} = −1: drejtëzat janë pingule.', en: 'k₁ · k₂ = 3 · {k} = −1: the lines are perpendicular.', de: 'k₁ · k₂ = 3 · {k} = −1: Die Geraden sind orthogonal.' } },
          { text: { al: 'k₁ · k₂ = {3*k} ≠ −1: jo pingule.', en: 'k₁ · k₂ = {3*k} ≠ −1: not perpendicular.', de: 'k₁ · k₂ = {3*k} ≠ −1: nicht orthogonal.' } },
        ] }],
        alt: { al: 'Dy drejtëza: njëra e dhënë, tjetra y = kx + n me rrëshqitës.', en: 'Two lines: one given, the other y = kx + n on sliders.', de: 'Zwei Geraden: eine gegeben, die andere y = kx + n mit Schiebereglern.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -3, xMax: 5, yMin: -2, yMax: 7 }, height: 220,
        functions: [{ expr: '2*x + 3', label: 'y = 2x + 3' }, { expr: '-x/2 + 5/2', color: 'secondary', label: 'y = −x/2 + 5/2' }],
        points: [{ at: [1, 2], label: '(1, 2)' }],
        caption: alt('Koeficientët 2 dhe −1/2: prodhimi −1, pra drejtëzat janë pingule.', 'Gradients 2 and −1/2: product −1, so the lines are perpendicular.', 'Steigungen 2 und −1/2: Produkt −1, also stehen die Geraden senkrecht aufeinander.'),
        alt: alt('Drejtëza y = 2x + 3 dhe pingulja e saj nëpër (1, 2).', 'The line y = 2x + 3 and its perpendicular through (1, 2).', 'Die Gerade y = 2x + 3 und die Senkrechte dazu durch (1 | 2).'),
      }],
      answers: {
        examples: [[['2 + 1/2', 2.5, 0, '5/2']], 'text'],
        practice: [[['4 / 2', 2]], [['3 * (-1/3)', -1]], 'text'],
      },
      al: {
        title: 'Paralelizmi dhe pingulësia',
        objectives: ['Të dalloni drejtëzat paralele dhe pingule nga koeficientët këndorë.', 'Të shkruani drejtëzën paralele ose pingule nëpër një pikë të dhënë.'],
        theory: 'Dy drejtëza me koeficientë k₁ dhe k₂ janë:\n• paralele kur k₁ = k₂;\n• pingule kur k₁ · k₂ = −1, pra k₂ = −1/k₁.\n\nPingulja me y = 2x + 3 nëpër (1, 2): k = −1/2; 2 = −1/2 · 1 + n → n = 5/2, pra y = −x/2 + 5/2.\n\nTe forma e përgjithshme ax + by + c = 0, drejtëzat paralele kanë të njëjtat a, b (vetëm c ndryshon).',
        keyPoints: ['Paralele: k₁ = k₂', 'Pingule: k₁ · k₂ = −1', 'Pastaj gjej n nga pika'],
        examples: [
          { example: 'Gjeni drejtëzën nëpër (1, 2) pingule me y = 2x + 3.', solution: 'k = −1/2; n = 2 + 1/2 = 5/2 → y = −x/2 + 5/2.' },
          { example: 'Gjeni drejtëzën nëpër (0, 4) paralele me 3x − y + 1 = 0.', solution: 'k = 3; n = 4 → y = 3x + 4.' },
        ],
        commonMistakes: [
          { mistake: 'Pingulja me k = 2 merret me k = −2.', fix: 'Duhet edhe i anasjellti: k = −1/2.' },
        ],
        practice: [
          { problem: 'A janë paralele y = 2x + 1 dhe 4x − 2y + 7 = 0?', solution: 'Po', steps: ['4x − 2y + 7 = 0 → k = 4/2 = 2.', 'Të dyja kanë k = 2 → paralele.'] },
          { problem: 'A janë pingule drejtëzat me k₁ = 3 dhe k₂ = −1/3?', solution: 'Po', steps: ['3 · (−1/3) = −1.', 'Prodhimi −1 → pingule.'] },
          { problem: 'Sa është këndi midis y = x dhe y = −x?', solution: '90°', steps: ['1 · (−1) = −1.', 'Drejtëzat janë pingule: 90°.'] },
        ],
      },
      en: {
        title: 'Parallel and perpendicular lines',
        objectives: ['Recognise parallel and perpendicular lines from their gradients.', 'Write the parallel or perpendicular line through a given point.'],
        theory: 'Two lines with gradients k₁ and k₂ are:\n• parallel when k₁ = k₂;\n• perpendicular when k₁ · k₂ = −1, i.e. k₂ = −1/k₁.\n\nThe perpendicular to y = 2x + 3 through (1, 2): k = −1/2; 2 = −1/2 · 1 + n → n = 5/2, so y = −x/2 + 5/2.\n\nIn general form ax + by + c = 0, parallel lines have the same a, b (only c changes).',
        keyPoints: ['Parallel: k₁ = k₂', 'Perpendicular: k₁ · k₂ = −1', 'Then find n from the point'],
        examples: [
          { example: 'Find the line through (1, 2) perpendicular to y = 2x + 3.', solution: 'k = −1/2; n = 2 + 1/2 = 5/2 → y = −x/2 + 5/2.' },
          { example: 'Find the line through (0, 4) parallel to 3x − y + 1 = 0.', solution: 'k = 3; n = 4 → y = 3x + 4.' },
        ],
        commonMistakes: [
          { mistake: 'The perpendicular to k = 2 is given k = −2.', fix: 'You also need the reciprocal: k = −1/2.' },
        ],
        practice: [
          { problem: 'Are y = 2x + 1 and 4x − 2y + 7 = 0 parallel?', solution: 'Yes', steps: ['4x − 2y + 7 = 0 → k = 4/2 = 2.', 'Both have k = 2 → parallel.'] },
          { problem: 'Are lines with k₁ = 3 and k₂ = −1/3 perpendicular?', solution: 'Yes', steps: ['3 · (−1/3) = −1.', 'Product −1 → perpendicular.'] },
          { problem: 'What is the angle between y = x and y = −x?', solution: '90°', steps: ['1 · (−1) = −1.', 'The lines are perpendicular: 90°.'] },
        ],
      },
      de: {
        title: 'Parallele und orthogonale Geraden',
        objectives: ['Parallele und orthogonale Geraden an den Steigungen erkennen.', 'Die Parallele oder Senkrechte durch einen gegebenen Punkt aufstellen.'],
        theory: 'Zwei Geraden mit den Steigungen k₁ und k₂ sind:\n• parallel, wenn k₁ = k₂;\n• orthogonal, wenn k₁ · k₂ = −1, also k₂ = −1/k₁.\n\nDie Senkrechte zu y = 2x + 3 durch (1 | 2): k = −1/2; 2 = −1/2 · 1 + n → n = 5/2, also y = −x/2 + 5/2.\n\nIn allgemeiner Form ax + by + c = 0 haben parallele Geraden dieselben a, b (nur c ändert sich).',
        keyPoints: ['Parallel: k₁ = k₂', 'Orthogonal: k₁ · k₂ = −1', 'Dann n aus dem Punkt bestimmen'],
        examples: [
          { example: 'Bestimmen Sie die Gerade durch (1 | 2), die senkrecht auf y = 2x + 3 steht.', solution: 'k = −1/2; n = 2 + 1/2 = 5/2 → y = −x/2 + 5/2.' },
          { example: 'Bestimmen Sie die Gerade durch (0 | 4) parallel zu 3x − y + 1 = 0.', solution: 'k = 3; n = 4 → y = 3x + 4.' },
        ],
        commonMistakes: [
          { mistake: 'Die Senkrechte zu k = 2 bekommt k = −2.', fix: 'Es braucht auch den Kehrwert: k = −1/2.' },
        ],
        practice: [
          { problem: 'Sind y = 2x + 1 und 4x − 2y + 7 = 0 parallel?', solution: 'Ja', steps: ['4x − 2y + 7 = 0 → k = 4/2 = 2.', 'Beide haben k = 2 → parallel.'] },
          { problem: 'Sind Geraden mit k₁ = 3 und k₂ = −1/3 orthogonal?', solution: 'Ja', steps: ['3 · (−1/3) = −1.', 'Produkt −1 → orthogonal.'] },
          { problem: 'Welchen Winkel schließen y = x und y = −x ein?', solution: '90°', steps: ['1 · (−1) = −1.', 'Die Geraden sind orthogonal: 90°.'] },
        ],
      },
    },
    // ───────── 6. Distance from a point to a line
    {
      slug: 'g12-coordinate-geometry-point-line-distance',
      visuals: [{
        type: 'geoFigure', view: { xMin: -2, xMax: 5, yMin: -1.5, yMax: 5 }, grid: true, axes: true, height: 230,
        shapes: [
          { kind: 'line', through: [[-1, 2], [3, -1]], color: 'primary', label: '3x + 4y − 5 = 0' },
          { kind: 'segment', from: [3, 4], to: [0.6, 0.8], color: 'secondary', dashed: true, label: 'd = 4' },
          { kind: 'angle', vertex: [0.6, 0.8], from: [3, -1], to: [3, 4], right: true, color: 'secondary' },
          { kind: 'point', at: [3, 4], label: 'P(3, 4)', labelPos: 'ne', color: 'ink' },
        ],
        caption: alt('Largësia është gjatësia e pingules nga P te drejtëza: |9 + 16 − 5|/5 = 4.', 'The distance is the length of the perpendicular from P to the line: |9 + 16 − 5|/5 = 4.', 'Der Abstand ist die Länge des Lotes von P auf die Gerade: |9 + 16 − 5|/5 = 4.'),
        alt: alt('Drejtëza 3x + 4y − 5 = 0, pika P(3, 4) dhe pingulja me gjatësi 4.', 'The line 3x + 4y − 5 = 0, the point P(3, 4) and the perpendicular of length 4.', 'Die Gerade 3x + 4y − 5 = 0, der Punkt P(3 | 4) und das Lot der Länge 4.'),
      }],
      answers: {
        examples: [[['abs(3*3 + 4*4 - 5) / sqrt(3^2 + 4^2)', 4]], [['abs(-5) / 5', 1]]],
        practice: [[['abs(4*1 - 3*2 + 12) / 5', 2]], [['abs(15 + 5) / 5', 4]], [['abs(-2) / sqrt(2)', 1.41, 0.005]]],
      },
      al: {
        title: 'Largësia e pikës nga drejtëza',
        objectives: ['Të llogaritni largësinë e pikës nga drejtëza me formulë.', 'Të llogaritni largësinë midis dy drejtëzave paralele.'],
        theory: 'Largësia e pikës P(x₀, y₀) nga drejtëza ax + by + c = 0 është gjatësia e pingules:\nd = |ax₀ + by₀ + c| / √(a² + b²).\n\nP(3, 4) dhe 3x + 4y − 5 = 0: d = |9 + 16 − 5| / √25 = 20/5 = 4.\n\nLargësia midis dy drejtëzave paralele ax + by + c₁ = 0 dhe ax + by + c₂ = 0 është |c₁ − c₂| / √(a² + b²). Drejtëza duhet të jetë në formën e përgjithshme (= 0).',
        keyPoints: ['d = |ax₀ + by₀ + c| / √(a² + b²)', 'Drejtëza në formën … = 0', 'Paralele: |c₁ − c₂| / √(a² + b²)'],
        examples: [
          { example: 'Gjeni largësinë e pikës (3, 4) nga drejtëza 3x + 4y − 5 = 0.', solution: '|9 + 16 − 5|/5 = 20/5 = 4.' },
          { example: 'Gjeni largësinë e origjinës nga 3x + 4y − 5 = 0.', solution: '|−5|/5 = 1.' },
        ],
        commonMistakes: [
          { mistake: 'Harrohet emëruesi √(a² + b²) dhe del 20.', fix: 'Pjesëtoni gjithmonë me √(a² + b²) = 5.' },
        ],
        practice: [
          { problem: 'Gjeni largësinë e (1, 2) nga 4x − 3y + 12 = 0.', solution: '2', steps: ['|4 − 6 + 12| = 10, √(16 + 9) = 5.', 'd = 10/5 = 2.'] },
          { problem: 'Gjeni largësinë midis 3x + 4y − 5 = 0 dhe 3x + 4y + 15 = 0.', solution: '4', steps: ['|15 − (−5)| = 20.', '20/5 = 4.'] },
          { problem: 'Gjeni largësinë e origjinës nga x + y − 2 = 0.', solution: '√2 ≈ 1,41', steps: ['|−2|/√2.', '= √2 ≈ 1,41.'] },
        ],
      },
      en: {
        title: 'Distance from a point to a line',
        objectives: ['Work out the distance from a point to a line with the formula.', 'Work out the distance between two parallel lines.'],
        theory: 'The distance from P(x₀, y₀) to the line ax + by + c = 0 is the length of the perpendicular:\nd = |ax₀ + by₀ + c| / √(a² + b²).\n\nP(3, 4) and 3x + 4y − 5 = 0: d = |9 + 16 − 5| / √25 = 20/5 = 4.\n\nThe distance between the parallel lines ax + by + c₁ = 0 and ax + by + c₂ = 0 is |c₁ − c₂| / √(a² + b²). The line must be in general form (= 0).',
        keyPoints: ['d = |ax₀ + by₀ + c| / √(a² + b²)', 'Line in the form … = 0', 'Parallel: |c₁ − c₂| / √(a² + b²)'],
        examples: [
          { example: 'Find the distance from (3, 4) to the line 3x + 4y − 5 = 0.', solution: '|9 + 16 − 5|/5 = 20/5 = 4.' },
          { example: 'Find the distance from the origin to 3x + 4y − 5 = 0.', solution: '|−5|/5 = 1.' },
        ],
        commonMistakes: [
          { mistake: 'The denominator √(a² + b²) is forgotten and 20 is given.', fix: 'Always divide by √(a² + b²) = 5.' },
        ],
        practice: [
          { problem: 'Find the distance from (1, 2) to 4x − 3y + 12 = 0.', solution: '2', steps: ['|4 − 6 + 12| = 10, √(16 + 9) = 5.', 'd = 10/5 = 2.'] },
          { problem: 'Find the distance between 3x + 4y − 5 = 0 and 3x + 4y + 15 = 0.', solution: '4', steps: ['|15 − (−5)| = 20.', '20/5 = 4.'] },
          { problem: 'Find the distance from the origin to x + y − 2 = 0.', solution: '√2 ≈ 1.41', steps: ['|−2|/√2.', '= √2 ≈ 1.41.'] },
        ],
      },
      de: {
        title: 'Abstand eines Punktes von einer Geraden',
        objectives: ['Den Abstand eines Punktes von einer Geraden mit der Formel berechnen.', 'Den Abstand zweier paralleler Geraden berechnen.'],
        theory: 'Der Abstand von P(x₀ | y₀) zur Geraden ax + by + c = 0 ist die Länge des Lotes:\nd = |ax₀ + by₀ + c| / √(a² + b²).\n\nP(3 | 4) und 3x + 4y − 5 = 0: d = |9 + 16 − 5| / √25 = 20/5 = 4.\n\nDer Abstand der parallelen Geraden ax + by + c₁ = 0 und ax + by + c₂ = 0 ist |c₁ − c₂| / √(a² + b²). Die Gerade muss in allgemeiner Form (= 0) stehen.',
        keyPoints: ['d = |ax₀ + by₀ + c| / √(a² + b²)', 'Gerade in der Form … = 0', 'Parallelen: |c₁ − c₂| / √(a² + b²)'],
        examples: [
          { example: 'Bestimmen Sie den Abstand von (3 | 4) zur Geraden 3x + 4y − 5 = 0.', solution: '|9 + 16 − 5|/5 = 20/5 = 4.' },
          { example: 'Bestimmen Sie den Abstand des Ursprungs von 3x + 4y − 5 = 0.', solution: '|−5|/5 = 1.' },
        ],
        commonMistakes: [
          { mistake: 'Der Nenner √(a² + b²) wird vergessen, Ergebnis 20.', fix: 'Immer durch √(a² + b²) = 5 teilen.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Abstand von (1 | 2) zu 4x − 3y + 12 = 0.', solution: '2', steps: ['|4 − 6 + 12| = 10, √(16 + 9) = 5.', 'd = 10/5 = 2.'] },
          { problem: 'Bestimmen Sie den Abstand von 3x + 4y − 5 = 0 und 3x + 4y + 15 = 0.', solution: '4', steps: ['|15 − (−5)| = 20.', '20/5 = 4.'] },
          { problem: 'Bestimmen Sie den Abstand des Ursprungs von x + y − 2 = 0.', solution: '√2 ≈ 1,41', steps: ['|−2|/√2.', '= √2 ≈ 1,41.'] },
        ],
      },
    },
  ],
};
