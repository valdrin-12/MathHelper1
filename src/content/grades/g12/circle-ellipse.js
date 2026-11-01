// Grade 12 · Theme 9: Second-degree curves – circle and ellipse
const alt = (al, en, de) => ({ al, en, de });
const ELLIPSE = Array.from({ length: 48 }, (_, i) => {
  const t = (i / 48) * 2 * Math.PI;
  return [Number((5 * Math.cos(t)).toFixed(3)), Number((3 * Math.sin(t)).toFixed(3))];
});

export default {
  id: 'g12-circle-ellipse',
  i18n: {
    al: { title: 'Vijat e gradës së dytë: rrethi dhe elipsa', description: 'Ekuacioni i rrethit me plotësim katrori, tangjentja dhe pozita e drejtëzës, elipsa, vatrat, jashtëqendërsia dhe rrezet vatrore.' },
    en: { title: 'Conics: circle and ellipse', description: 'Equation of a circle by completing the square, tangents and the position of a line, the ellipse, its foci, eccentricity and focal radii.' },
    de: { title: 'Kegelschnitte: Kreis und Ellipse', description: 'Kreisgleichung mit quadratischer Ergänzung, Tangenten und Lage einer Geraden, die Ellipse, Brennpunkte, Exzentrizität und Brennstrahlen.' },
  },
  lessons: [
    // ───────── 1. Equation of a circle
    {
      slug: 'g12-circle-ellipse-circle-equation',
      visuals: [{
        type: 'geoFigure', view: { xMin: -2, xMax: 8, yMin: -7, yMax: 3 }, grid: true, axes: true, height: 240,
        shapes: [
          { kind: 'circle', center: [3, -2], r: 4, color: 'primary' },
          { kind: 'segment', from: [3, -2], to: [7, -2], color: 'secondary', label: 'r = 4' },
          { kind: 'point', at: [3, -2], label: 'S(3, −2)', labelPos: 'sw', color: 'secondary' },
        ],
        caption: alt('x² + y² − 6x + 4y − 3 = 0 ⇔ (x − 3)² + (y + 2)² = 16.', 'x² + y² − 6x + 4y − 3 = 0 ⇔ (x − 3)² + (y + 2)² = 16.', 'x² + y² − 6x + 4y − 3 = 0 ⇔ (x − 3)² + (y + 2)² = 16.'),
        alt: alt('Rrethi me qendër (3, −2) dhe rreze 4 në rrjetë.', 'The circle with centre (3, −2) and radius 4 on a grid.', 'Der Kreis mit Mittelpunkt (3 | −2) und Radius 4 im Gitter.'),
      }],
      answers: {
        examples: [[['sqrt(9 + 4 + 3)', 4]], [['sqrt(3^2 + 4^2)', 5]]],
        practice: [[['sqrt(4 + 25 - 20)', 3]], [['(-1 + 5) / 2', 2], ['(2 + 10) / 2', 6], ['sqrt(6^2 + 8^2) / 2', 5]], [['(6 - 3)^2 + (2 + 2)^2', 25]]],
      },
      al: {
        title: 'Ekuacioni i rrethit',
        objectives: ['Ta sillni ekuacionin e përgjithshëm të rrethit në formën e qendrës me plotësim katrori.', 'Të shkruani ekuacionin e rrethit nga qendra dhe një pikë ose nga diametri.'],
        theory: 'Rrethi me qendër S(p, q) dhe rreze r: (x − p)² + (y − q)² = r².\n\nForma e përgjithshme x² + y² + Dx + Ey + F = 0 kthehet me plotësim katrori:\nx² − 6x + y² + 4y − 3 = 0 → (x − 3)² − 9 + (y + 2)² − 4 − 3 = 0 → (x − 3)² + (y + 2)² = 16, pra S(3, −2), r = 4.\n\nNjë pikë P është brenda rrethit kur (x − p)² + (y − q)² < r², në rreth kur = r², jashtë kur > r².',
        keyPoints: ['(x − p)² + (y − q)² = r²', 'Plotësim katrori për x dhe y', 'Krahaso me r²: brenda / në / jashtë'],
        examples: [
          { example: 'Gjeni qendrën dhe rrezen e x² + y² − 6x + 4y − 3 = 0.', solution: '(x − 3)² + (y + 2)² = 9 + 4 + 3 = 16 → S(3, −2), r = 4.' },
          { example: 'Shkruani rrethin me qendër (1, 2) që kalon nëpër (4, 6).', solution: 'r = √(3² + 4²) = 5 → (x − 1)² + (y − 2)² = 25.' },
        ],
        commonMistakes: [
          { mistake: 'Nga (y + 2)² merret qendra y = 2.', fix: 'y + 2 = y − (−2): q = −2.' },
          { mistake: 'Rrezja merret 16.', fix: 'Ana e djathtë është r²: r = √16 = 4.' },
        ],
        practice: [
          { problem: 'Gjeni qendrën dhe rrezen e x² + y² + 4x − 10y + 20 = 0.', solution: 'S(−2, 5), r = 3', steps: ['(x + 2)² + (y − 5)² = 4 + 25 − 20 = 9.', 'S(−2, 5), r = 3.'] },
          { problem: 'Shkruani rrethin me diametër A(−1, 2), B(5, 10).', solution: '(x − 2)² + (y − 6)² = 25', steps: ['Qendra = mesi: (2, 6).', 'r = |AB|/2 = √(36 + 64)/2 = 5.'] },
          { problem: 'A është pika (6, 2) brenda rrethit (x − 3)² + (y + 2)² = 16?', solution: 'Jo, jashtë', steps: ['(6 − 3)² + (2 + 2)² = 9 + 16 = 25.', '25 > 16 → jashtë.'] },
        ],
      },
      en: {
        title: 'The equation of a circle',
        objectives: ['Bring the general equation of a circle to centre form by completing the square.', 'Write the equation of a circle from its centre and a point, or from a diameter.'],
        theory: 'A circle with centre S(p, q) and radius r: (x − p)² + (y − q)² = r².\n\nThe general form x² + y² + Dx + Ey + F = 0 is converted by completing the square:\nx² − 6x + y² + 4y − 3 = 0 → (x − 3)² − 9 + (y + 2)² − 4 − 3 = 0 → (x − 3)² + (y + 2)² = 16, so S(3, −2), r = 4.\n\nA point P is inside the circle when (x − p)² + (y − q)² < r², on it when = r², outside when > r².',
        keyPoints: ['(x − p)² + (y − q)² = r²', 'Complete the square in x and y', 'Compare with r²: inside / on / outside'],
        examples: [
          { example: 'Find the centre and radius of x² + y² − 6x + 4y − 3 = 0.', solution: '(x − 3)² + (y + 2)² = 9 + 4 + 3 = 16 → S(3, −2), r = 4.' },
          { example: 'Write the circle with centre (1, 2) through (4, 6).', solution: 'r = √(3² + 4²) = 5 → (x − 1)² + (y − 2)² = 25.' },
        ],
        commonMistakes: [
          { mistake: 'From (y + 2)² the centre y = 2 is taken.', fix: 'y + 2 = y − (−2): q = −2.' },
          { mistake: 'The radius is taken as 16.', fix: 'The right-hand side is r²: r = √16 = 4.' },
        ],
        practice: [
          { problem: 'Find the centre and radius of x² + y² + 4x − 10y + 20 = 0.', solution: 'S(−2, 5), r = 3', steps: ['(x + 2)² + (y − 5)² = 4 + 25 − 20 = 9.', 'S(−2, 5), r = 3.'] },
          { problem: 'Write the circle with diameter A(−1, 2), B(5, 10).', solution: '(x − 2)² + (y − 6)² = 25', steps: ['Centre = midpoint: (2, 6).', 'r = |AB|/2 = √(36 + 64)/2 = 5.'] },
          { problem: 'Is the point (6, 2) inside the circle (x − 3)² + (y + 2)² = 16?', solution: 'No, outside', steps: ['(6 − 3)² + (2 + 2)² = 9 + 16 = 25.', '25 > 16 → outside.'] },
        ],
      },
      de: {
        title: 'Die Kreisgleichung',
        objectives: ['Die allgemeine Kreisgleichung mit quadratischer Ergänzung in Mittelpunktsform bringen.', 'Die Kreisgleichung aus Mittelpunkt und Punkt oder aus einem Durchmesser aufstellen.'],
        theory: 'Kreis mit Mittelpunkt M(p | q) und Radius r: (x − p)² + (y − q)² = r².\n\nDie allgemeine Form x² + y² + Dx + Ey + F = 0 formt man mit quadratischer Ergänzung um:\nx² − 6x + y² + 4y − 3 = 0 → (x − 3)² − 9 + (y + 2)² − 4 − 3 = 0 → (x − 3)² + (y + 2)² = 16, also M(3 | −2), r = 4.\n\nEin Punkt P liegt innerhalb, wenn (x − p)² + (y − q)² < r², auf dem Kreis bei = r², außerhalb bei > r².',
        keyPoints: ['(x − p)² + (y − q)² = r²', 'Quadratische Ergänzung in x und y', 'Mit r² vergleichen: innen / auf / außen'],
        examples: [
          { example: 'Bestimmen Sie Mittelpunkt und Radius von x² + y² − 6x + 4y − 3 = 0.', solution: '(x − 3)² + (y + 2)² = 9 + 4 + 3 = 16 → M(3 | −2), r = 4.' },
          { example: 'Stellen Sie den Kreis mit Mittelpunkt (1 | 2) durch (4 | 6) auf.', solution: 'r = √(3² + 4²) = 5 → (x − 1)² + (y − 2)² = 25.' },
        ],
        commonMistakes: [
          { mistake: 'Aus (y + 2)² wird der Mittelpunkt y = 2 abgelesen.', fix: 'y + 2 = y − (−2): q = −2.' },
          { mistake: 'Der Radius wird 16 gesetzt.', fix: 'Rechts steht r²: r = √16 = 4.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie Mittelpunkt und Radius von x² + y² + 4x − 10y + 20 = 0.', solution: 'M(−2 | 5), r = 3', steps: ['(x + 2)² + (y − 5)² = 4 + 25 − 20 = 9.', 'M(−2 | 5), r = 3.'] },
          { problem: 'Stellen Sie den Kreis mit dem Durchmesser A(−1 | 2), B(5 | 10) auf.', solution: '(x − 2)² + (y − 6)² = 25', steps: ['Mittelpunkt = Streckenmitte: (2 | 6).', 'r = |AB|/2 = √(36 + 64)/2 = 5.'] },
          { problem: 'Liegt der Punkt (6 | 2) innerhalb des Kreises (x − 3)² + (y + 2)² = 16?', solution: 'Nein, außerhalb', steps: ['(6 − 3)² + (2 + 2)² = 9 + 16 = 25.', '25 > 16 → außerhalb.'] },
        ],
      },
    },
    // ───────── 2. Tangent and position of a line
    {
      slug: 'g12-circle-ellipse-tangent',
      visuals: [{
        type: 'geoFigure', view: { xMin: -6, xMax: 8, yMin: -6, yMax: 8 }, grid: true, axes: true, height: 250,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 5, color: 'primary' },
          { kind: 'line', through: [[-1, 7], [7, 1]], color: 'secondary', label: '3x + 4y = 25' },
          { kind: 'segment', from: [0, 0], to: [3, 4], color: 'muted' },
          { kind: 'angle', vertex: [3, 4], from: [0, 0], to: [7, 1], right: true, color: 'secondary' },
          { kind: 'point', at: [3, 4], label: '(3, 4)', labelPos: 'ne', color: 'ink' },
        ],
        caption: alt('Tangjentja në (3, 4) është pingule me rrezen: 3x + 4y = 25.', 'The tangent at (3, 4) is perpendicular to the radius: 3x + 4y = 25.', 'Die Tangente in (3 | 4) steht senkrecht auf dem Radius: 3x + 4y = 25.'),
        alt: alt('Rrethi x² + y² = 25 me tangjenten në (3, 4) dhe kënd të drejtë me rrezen.', 'The circle x² + y² = 25 with the tangent at (3, 4) at right angles to the radius.', 'Der Kreis x² + y² = 25 mit der Tangente in (3 | 4), rechtwinklig zum Radius.'),
      }],
      answers: {
        examples: [[['3*3 + 4*4', 25]], [['8 / sqrt(2)', 5.66, 0.005]]],
        practice: [[['1*1 + 3*3', 10]], [['25 / 5', 5]], [['sqrt(25 - 9)', 4]]],
      },
      al: {
        title: 'Tangjentja dhe pozita e drejtëzës',
        objectives: ['Të shkruani tangjenten e rrethit x² + y² = r² në një pikë të tij.', 'Të përcaktoni pozitën e drejtëzës ndaj rrethit me largësinë d.'],
        theory: 'Tangjentja e rrethit x² + y² = r² në pikën (x₀, y₀) të rrethit: x₀x + y₀y = r². Ajo është pingule me rrezen në atë pikë.\n\nPozita e drejtëzës ndaj rrethit me qendër S dhe rreze r, ku d është largësia e S nga drejtëza:\n• d < r: drejtëza e pret rrethin në dy pika (sekante);\n• d = r: e prek në një pikë (tangjente);\n• d > r: nuk kanë pika të përbashkëta.',
        keyPoints: ['Tangjentja: x₀x + y₀y = r²', 'd < r sekante, d = r tangjente, d > r jashtë', 'Tangjentja ⊥ rrezes'],
        examples: [
          { example: 'Gjeni tangjenten e x² + y² = 25 në (3, 4).', solution: '3x + 4y = 25 (kontroll: 9 + 16 = 25).' },
          { example: 'Si qëndron drejtëza y = x + 8 ndaj x² + y² = 25?', solution: 'x − y + 8 = 0: d = 8/√2 ≈ 5,66 > 5 → nuk e pret.' },
        ],
        commonMistakes: [
          { mistake: 'Tangjentja në (3, 4) shkruhet 4x + 3y = 25.', fix: 'Koordinatat e pikës shumëzojnë x dhe y me radhë: 3x + 4y.' },
        ],
        practice: [
          { problem: 'Gjeni tangjenten e x² + y² = 10 në (1, 3).', solution: 'x + 3y = 10', steps: ['x₀x + y₀y = r².', '1 · x + 3 · y = 10.'] },
          { problem: 'A është 3x + 4y − 25 = 0 tangjente e x² + y² = 25?', solution: 'Po', steps: ['d = |−25|/5 = 5.', 'd = r → tangjente.'] },
          { problem: 'Ku e pret drejtëza x = 3 rrethin x² + y² = 25?', solution: '(3, 4) dhe (3, −4)', steps: ['9 + y² = 25 → y² = 16.', 'y = 4 ose y = −4.'] },
        ],
      },
      en: {
        title: 'Tangents and the position of a line',
        objectives: ['Write the tangent to x² + y² = r² at a point on the circle.', 'Decide the position of a line relative to a circle using the distance d.'],
        theory: 'The tangent to x² + y² = r² at the point (x₀, y₀) on the circle: x₀x + y₀y = r². It is perpendicular to the radius at that point.\n\nPosition of a line relative to the circle with centre S and radius r, where d is the distance from S to the line:\n• d < r: the line cuts the circle at two points (secant);\n• d = r: it touches at one point (tangent);\n• d > r: no common points.',
        keyPoints: ['Tangent: x₀x + y₀y = r²', 'd < r secant, d = r tangent, d > r outside', 'Tangent ⊥ radius'],
        examples: [
          { example: 'Find the tangent to x² + y² = 25 at (3, 4).', solution: '3x + 4y = 25 (check: 9 + 16 = 25).' },
          { example: 'How does the line y = x + 8 lie relative to x² + y² = 25?', solution: 'x − y + 8 = 0: d = 8/√2 ≈ 5.66 > 5 → it misses the circle.' },
        ],
        commonMistakes: [
          { mistake: 'The tangent at (3, 4) is written 4x + 3y = 25.', fix: 'The point\'s coordinates multiply x and y in order: 3x + 4y.' },
        ],
        practice: [
          { problem: 'Find the tangent to x² + y² = 10 at (1, 3).', solution: 'x + 3y = 10', steps: ['x₀x + y₀y = r².', '1 · x + 3 · y = 10.'] },
          { problem: 'Is 3x + 4y − 25 = 0 a tangent to x² + y² = 25?', solution: 'Yes', steps: ['d = |−25|/5 = 5.', 'd = r → tangent.'] },
          { problem: 'Where does the line x = 3 meet the circle x² + y² = 25?', solution: '(3, 4) and (3, −4)', steps: ['9 + y² = 25 → y² = 16.', 'y = 4 or y = −4.'] },
        ],
      },
      de: {
        title: 'Tangente und Lage einer Geraden',
        objectives: ['Die Tangente an x² + y² = r² in einem Kreispunkt aufstellen.', 'Die Lage einer Geraden zum Kreis über den Abstand d bestimmen.'],
        theory: 'Die Tangente an x² + y² = r² im Kreispunkt (x₀ | y₀): x₀x + y₀y = r². Sie steht dort senkrecht auf dem Radius.\n\nLage einer Geraden zum Kreis mit Mittelpunkt M und Radius r, wobei d der Abstand von M zur Geraden ist:\n• d < r: Sekante (zwei Schnittpunkte);\n• d = r: Tangente (ein Berührpunkt);\n• d > r: Passante (keine gemeinsamen Punkte).',
        keyPoints: ['Tangente: x₀x + y₀y = r²', 'd < r Sekante, d = r Tangente, d > r Passante', 'Tangente ⊥ Radius'],
        examples: [
          { example: 'Bestimmen Sie die Tangente an x² + y² = 25 in (3 | 4).', solution: '3x + 4y = 25 (Probe: 9 + 16 = 25).' },
          { example: 'Welche Lage hat die Gerade y = x + 8 zum Kreis x² + y² = 25?', solution: 'x − y + 8 = 0: d = 8/√2 ≈ 5,66 > 5 → Passante.' },
        ],
        commonMistakes: [
          { mistake: 'Die Tangente in (3 | 4) wird als 4x + 3y = 25 geschrieben.', fix: 'Die Koordinaten des Punktes stehen der Reihe nach bei x und y: 3x + 4y.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Tangente an x² + y² = 10 in (1 | 3).', solution: 'x + 3y = 10', steps: ['x₀x + y₀y = r².', '1 · x + 3 · y = 10.'] },
          { problem: 'Ist 3x + 4y − 25 = 0 Tangente an x² + y² = 25?', solution: 'Ja', steps: ['d = |−25|/5 = 5.', 'd = r → Tangente.'] },
          { problem: 'Wo schneidet die Gerade x = 3 den Kreis x² + y² = 25?', solution: '(3 | 4) und (3 | −4)', steps: ['9 + y² = 25 → y² = 16.', 'y = 4 oder y = −4.'] },
        ],
      },
    },
    // ───────── 3. Ellipse
    {
      slug: 'g12-circle-ellipse-ellipse',
      visuals: [{
        type: 'geoFigure', view: { xMin: -6, xMax: 6, yMin: -4, yMax: 4 }, grid: true, axes: true, height: 210,
        shapes: [
          { kind: 'polygon', points: ELLIPSE, color: 'primary' },
          { kind: 'point', at: [-4, 0], label: 'F₁(−4, 0)', labelPos: 's', color: 'secondary' },
          { kind: 'point', at: [4, 0], label: 'F₂(4, 0)', labelPos: 's', color: 'secondary' },
          { kind: 'point', at: [5, 0], label: 'a = 5', labelPos: 'ne', color: 'ink' },
          { kind: 'point', at: [0, 3], label: 'b = 3', labelPos: 'ne', color: 'ink' },
        ],
        caption: alt('x²/25 + y²/9 = 1: a = 5, b = 3, c = √(25 − 9) = 4.', 'x²/25 + y²/9 = 1: a = 5, b = 3, c = √(25 − 9) = 4.', 'x²/25 + y²/9 = 1: a = 5, b = 3, e = √(25 − 9) = 4.'),
        alt: alt('Elipsa x²/25 + y²/9 = 1 me vatrat në (−4, 0) dhe (4, 0).', 'The ellipse x²/25 + y²/9 = 1 with foci at (−4, 0) and (4, 0).', 'Die Ellipse x²/25 + y²/9 = 1 mit den Brennpunkten (−4 | 0) und (4 | 0).'),
      }],
      answers: {
        examples: [[['sqrt(25 - 9)', 4]], [['2 * 5', 10]]],
        practice: [[['sqrt(100 - 36)', 8]], [['sqrt(169 - 144)', 5]], [['9/25 + 2.4^2/9', 1]]],
      },
      al: {
        title: 'Elipsa',
        objectives: ['Të lexoni gjysmëboshtet a, b dhe kulmet nga ekuacioni kanonik i elipsës.', 'Të gjeni vatrat me c² = a² − b².'],
        theory: 'Elipsa është bashkësia e pikave për të cilat shuma e largësive nga dy pika fikse (vatrat) është konstante 2a.\n\nEkuacioni kanonik (boshti i madh në boshtin x): x²/a² + y²/b² = 1, me a > b > 0. Kulmet: (±a, 0) dhe (0, ±b); boshti i madh ka gjatësi 2a.\nVatrat: F(±c, 0), ku c² = a² − b².\n\nx²/25 + y²/9 = 1: a = 5, b = 3, c = √16 = 4, vatrat (±4, 0).',
        keyPoints: ['x²/a² + y²/b² = 1', 'c² = a² − b²', 'Vatrat (±c, 0), kulmet (±a, 0), (0, ±b)'],
        examples: [
          { example: 'Gjeni vatrat e x²/25 + y²/9 = 1.', solution: 'c = √(25 − 9) = 4 → F(±4, 0).' },
          { example: 'Sa është gjatësia e boshtit të madh të kësaj elipse?', solution: '2a = 2 · 5 = 10.' },
        ],
        commonMistakes: [
          { mistake: 'c² = a² + b².', fix: 'Te elipsa c² = a² − b² (te hiperbola mblidhen).' },
          { mistake: 'Merret a = 25.', fix: 'Nën x² është a² = 25, pra a = 5.' },
        ],
        practice: [
          { problem: 'Gjeni c për x²/100 + y²/36 = 1.', solution: 'c = 8', steps: ['c² = 100 − 36 = 64.', 'c = 8.'] },
          { problem: 'Elipsa ka a = 13 dhe c = 12. Sa është b?', solution: 'b = 5', steps: ['b² = a² − c² = 169 − 144 = 25.', 'b = 5.'] },
          { problem: 'A ndodhet (3; 2,4) në elipsën x²/25 + y²/9 = 1?', solution: 'Po', steps: ['9/25 + 5,76/9 = 0,36 + 0,64.', '= 1 → po.'] },
        ],
      },
      en: {
        title: 'The ellipse',
        objectives: ['Read the semi-axes a, b and the vertices from the standard equation of an ellipse.', 'Find the foci with c² = a² − b².'],
        theory: 'An ellipse is the set of points whose distances from two fixed points (the foci) add up to a constant 2a.\n\nStandard equation (major axis on the x-axis): x²/a² + y²/b² = 1, with a > b > 0. Vertices: (±a, 0) and (0, ±b); the major axis has length 2a.\nFoci: F(±c, 0), where c² = a² − b².\n\nx²/25 + y²/9 = 1: a = 5, b = 3, c = √16 = 4, foci (±4, 0).',
        keyPoints: ['x²/a² + y²/b² = 1', 'c² = a² − b²', 'Foci (±c, 0), vertices (±a, 0), (0, ±b)'],
        examples: [
          { example: 'Find the foci of x²/25 + y²/9 = 1.', solution: 'c = √(25 − 9) = 4 → F(±4, 0).' },
          { example: 'What is the length of the major axis of this ellipse?', solution: '2a = 2 · 5 = 10.' },
        ],
        commonMistakes: [
          { mistake: 'c² = a² + b².', fix: 'For an ellipse c² = a² − b² (for a hyperbola they add).' },
          { mistake: 'a = 25 is taken.', fix: 'Under x² is a² = 25, so a = 5.' },
        ],
        practice: [
          { problem: 'Find c for x²/100 + y²/36 = 1.', solution: 'c = 8', steps: ['c² = 100 − 36 = 64.', 'c = 8.'] },
          { problem: 'An ellipse has a = 13 and c = 12. What is b?', solution: 'b = 5', steps: ['b² = a² − c² = 169 − 144 = 25.', 'b = 5.'] },
          { problem: 'Is (3, 2.4) on the ellipse x²/25 + y²/9 = 1?', solution: 'Yes', steps: ['9/25 + 5.76/9 = 0.36 + 0.64.', '= 1 → yes.'] },
        ],
      },
      de: {
        title: 'Die Ellipse',
        objectives: ['Halbachsen a, b und Scheitel aus der Mittelpunktsgleichung der Ellipse ablesen.', 'Die Brennpunkte mit e² = a² − b² bestimmen.'],
        theory: 'Eine Ellipse ist die Menge aller Punkte, deren Abstände von zwei festen Punkten (Brennpunkten) zusammen konstant 2a ergeben.\n\nMittelpunktsgleichung (Hauptachse auf der x-Achse): x²/a² + y²/b² = 1, mit a > b > 0. Scheitel: (±a | 0) und (0 | ±b); die Hauptachse hat die Länge 2a.\nBrennpunkte: F(±e | 0), wobei e² = a² − b² (lineare Exzentrizität e).\n\nx²/25 + y²/9 = 1: a = 5, b = 3, e = √16 = 4, Brennpunkte (±4 | 0).',
        keyPoints: ['x²/a² + y²/b² = 1', 'e² = a² − b²', 'Brennpunkte (±e | 0), Scheitel (±a | 0), (0 | ±b)'],
        examples: [
          { example: 'Bestimmen Sie die Brennpunkte von x²/25 + y²/9 = 1.', solution: 'e = √(25 − 9) = 4 → F(±4 | 0).' },
          { example: 'Wie lang ist die Hauptachse dieser Ellipse?', solution: '2a = 2 · 5 = 10.' },
        ],
        commonMistakes: [
          { mistake: 'e² = a² + b².', fix: 'Bei der Ellipse gilt e² = a² − b² (bei der Hyperbel wird addiert).' },
          { mistake: 'Es wird a = 25 genommen.', fix: 'Unter x² steht a² = 25, also a = 5.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie e für x²/100 + y²/36 = 1.', solution: 'e = 8', steps: ['e² = 100 − 36 = 64.', 'e = 8.'] },
          { problem: 'Eine Ellipse hat a = 13 und e = 12. Wie groß ist b?', solution: 'b = 5', steps: ['b² = a² − e² = 169 − 144 = 25.', 'b = 5.'] },
          { problem: 'Liegt (3 | 2,4) auf der Ellipse x²/25 + y²/9 = 1?', solution: 'Ja', steps: ['9/25 + 5,76/9 = 0,36 + 0,64.', '= 1 → ja.'] },
        ],
      },
    },
    // ───────── 4. Eccentricity
    {
      slug: 'g12-circle-ellipse-eccentricity',
      noVisual: 'Eccentricity is a single ratio c/a; it is worked out step by step in the examples.',
      answers: {
        examples: [[['4 / 5', 0.8, 0, '4/5']], [['10 * 0.6', 6], ['sqrt(100 - 36)', 8]]],
        practice: [[['sqrt(169 - 25) / 13', '12/13', 1e-9, '12/13']], [['sqrt(16 / (1 - 9/25))', 5]], 'text'],
      },
      al: {
        title: 'Jashtëqendërsia',
        objectives: ['Të llogaritni jashtëqendërsinë ε = c/a të elipsës.', 'Ta lidhni jashtëqendërsinë me formën e elipsës.'],
        theory: 'Jashtëqendërsia (ekscentriciteti) numerik i elipsës është ε = c/a. Meqë 0 ≤ c < a, vlen 0 ≤ ε < 1.\n\nSa më afër 0, aq më "e rrumbullakët" është elipsa; për ε = 0 (c = 0, a = b) elipsa bëhet rreth. Sa më afër 1, aq më e zgjatur.\n\nx²/25 + y²/9 = 1: c = 4, ε = 4/5 = 0,8. Nga ε dhe a: c = ε · a, b² = a² − c².',
        keyPoints: ['ε = c/a', '0 ≤ ε < 1 te elipsa', 'ε = 0 → rreth'],
        examples: [
          { example: 'Gjeni jashtëqendërsinë e x²/25 + y²/9 = 1.', solution: 'c = 4; ε = 4/5.' },
          { example: 'Elipsa ka a = 10 dhe ε = 0,6. Gjeni c dhe b.', solution: 'c = 0,6 · 10 = 6; b = √(100 − 36) = 8.' },
        ],
        commonMistakes: [
          { mistake: 'ε = b/a = 3/5.', fix: 'Jashtëqendërsia përdor c: ε = c/a = 4/5.' },
        ],
        practice: [
          { problem: 'Gjeni ε për x²/169 + y²/25 = 1.', solution: 'ε = 12/13', steps: ['c = √(169 − 25) = 12.', 'ε = 12/13.'] },
          { problem: 'Elipsa ka b = 4 dhe ε = 3/5. Gjeni a.', solution: 'a = 5', steps: ['c = 3a/5, b² = a² − c² = a²(1 − 9/25) = 16a²/25.', '16a²/25 = 16 → a = 5.'] },
          { problem: 'Sa është jashtëqendërsia e rrethit?', solution: '0', steps: ['Te rrethi a = b, pra c = 0.', 'ε = 0/a = 0.'] },
        ],
      },
      en: {
        title: 'Eccentricity',
        objectives: ['Work out the eccentricity e = c/a of an ellipse.', 'Link eccentricity to the shape of the ellipse.'],
        theory: 'The eccentricity of an ellipse is e = c/a. Since 0 ≤ c < a, we have 0 ≤ e < 1.\n\nThe closer to 0, the "rounder" the ellipse; for e = 0 (c = 0, a = b) the ellipse is a circle. The closer to 1, the more stretched it is.\n\nx²/25 + y²/9 = 1: c = 4, e = 4/5 = 0.8. From e and a: c = e · a, b² = a² − c².',
        keyPoints: ['e = c/a', '0 ≤ e < 1 for an ellipse', 'e = 0 → circle'],
        examples: [
          { example: 'Find the eccentricity of x²/25 + y²/9 = 1.', solution: 'c = 4; e = 4/5.' },
          { example: 'An ellipse has a = 10 and e = 0.6. Find c and b.', solution: 'c = 0.6 · 10 = 6; b = √(100 − 36) = 8.' },
        ],
        commonMistakes: [
          { mistake: 'e = b/a = 3/5.', fix: 'Eccentricity uses c: e = c/a = 4/5.' },
        ],
        practice: [
          { problem: 'Find e for x²/169 + y²/25 = 1.', solution: 'e = 12/13', steps: ['c = √(169 − 25) = 12.', 'e = 12/13.'] },
          { problem: 'An ellipse has b = 4 and e = 3/5. Find a.', solution: 'a = 5', steps: ['c = 3a/5, b² = a² − c² = a²(1 − 9/25) = 16a²/25.', '16a²/25 = 16 → a = 5.'] },
          { problem: 'What is the eccentricity of a circle?', solution: '0', steps: ['For a circle a = b, so c = 0.', 'e = 0/a = 0.'] },
        ],
      },
      de: {
        title: 'Numerische Exzentrizität',
        objectives: ['Die numerische Exzentrizität ε = e/a einer Ellipse berechnen.', 'Die Exzentrizität mit der Form der Ellipse verbinden.'],
        theory: 'Die numerische Exzentrizität einer Ellipse ist ε = e/a (e: lineare Exzentrizität). Da 0 ≤ e < a, gilt 0 ≤ ε < 1.\n\nJe näher an 0, desto „runder“ die Ellipse; für ε = 0 (e = 0, a = b) ist sie ein Kreis. Je näher an 1, desto gestreckter.\n\nx²/25 + y²/9 = 1: e = 4, ε = 4/5 = 0,8. Aus ε und a: e = ε · a, b² = a² − e².',
        keyPoints: ['ε = e/a', '0 ≤ ε < 1 bei der Ellipse', 'ε = 0 → Kreis'],
        examples: [
          { example: 'Bestimmen Sie die numerische Exzentrizität von x²/25 + y²/9 = 1.', solution: 'e = 4; ε = 4/5.' },
          { example: 'Eine Ellipse hat a = 10 und ε = 0,6. Bestimmen Sie e und b.', solution: 'e = 0,6 · 10 = 6; b = √(100 − 36) = 8.' },
        ],
        commonMistakes: [
          { mistake: 'ε = b/a = 3/5.', fix: 'Die Exzentrizität verwendet e: ε = e/a = 4/5.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie ε für x²/169 + y²/25 = 1.', solution: 'ε = 12/13', steps: ['e = √(169 − 25) = 12.', 'ε = 12/13.'] },
          { problem: 'Eine Ellipse hat b = 4 und ε = 3/5. Bestimmen Sie a.', solution: 'a = 5', steps: ['e = 3a/5, b² = a² − e² = a²(1 − 9/25) = 16a²/25.', '16a²/25 = 16 → a = 5.'] },
          { problem: 'Welche numerische Exzentrizität hat ein Kreis?', solution: '0', steps: ['Beim Kreis ist a = b, also e = 0.', 'ε = 0/a = 0.'] },
        ],
      },
    },
    // ───────── 5. Focal radii
    {
      slug: 'g12-circle-ellipse-focal-radii',
      visuals: [{
        type: 'geoFigure', view: { xMin: -6, xMax: 6, yMin: -4, yMax: 4 }, height: 210,
        shapes: [
          { kind: 'polygon', points: ELLIPSE, color: 'primary' },
          { kind: 'segment', from: [-4, 0], to: [3, 2.4], color: 'secondary', label: alt('r₁ = 7,4', 'r₁ = 7.4', 'r₁ = 7,4') },
          { kind: 'segment', from: [4, 0], to: [3, 2.4], color: 'success', label: alt('r₂ = 2,6', 'r₂ = 2.6', 'r₂ = 2,6') },
          { kind: 'point', at: [-4, 0], label: 'F₁', labelPos: 's', color: 'secondary' },
          { kind: 'point', at: [4, 0], label: 'F₂', labelPos: 's', color: 'success' },
          { kind: 'point', at: [3, 2.4], label: 'P', labelPos: 'n', color: 'ink' },
        ],
        caption: alt('r₁ + r₂ = 7,4 + 2,6 = 10 = 2a për çdo pikë të elipsës.', 'r₁ + r₂ = 7.4 + 2.6 = 10 = 2a for every point of the ellipse.', 'r₁ + r₂ = 7,4 + 2,6 = 10 = 2a für jeden Punkt der Ellipse.'),
        alt: alt('Elipsa x²/25 + y²/9 = 1 me rrezet vatrore nga F₁ dhe F₂ te pika P(3; 2,4).', 'The ellipse x²/25 + y²/9 = 1 with the focal radii from F₁ and F₂ to the point P(3, 2.4).', 'Die Ellipse x²/25 + y²/9 = 1 mit den Brennstrahlen von F₁ und F₂ zum Punkt P(3 | 2,4).'),
      }],
      answers: {
        examples: [[['2 * 5', 10]], [['5 + 0.8*3', 7.4], ['5 - 0.8*3', 2.6]]],
        practice: [[['sqrt(7^2 + 2.4^2)', 7.4]], [['10 - 6', 4]], [['sqrt(25 - 9)', 4]]],
      },
      al: {
        title: 'Rrezet vatrore',
        objectives: ['Të përdorni vetinë r₁ + r₂ = 2a të elipsës.', 'Të llogaritni rrezet vatrore të një pike me r = a ± εx.'],
        theory: 'Rrezet vatrore të pikës P(x, y) të elipsës janë largësitë r₁ = |PF₁| dhe r₂ = |PF₂| nga vatrat F₁(−c, 0), F₂(c, 0).\n\nVetia themelore: r₁ + r₂ = 2a për çdo pikë të elipsës.\nFormulat: r₁ = a + εx, r₂ = a − εx.\n\nTe x²/25 + y²/9 = 1 (ε = 0,8) për P(3; 2,4): r₁ = 5 + 2,4 = 7,4, r₂ = 5 − 2,4 = 2,6; shuma 10.',
        keyPoints: ['r₁ + r₂ = 2a', 'r₁ = a + εx, r₂ = a − εx', 'Vatrat F(±c, 0)'],
        examples: [
          { example: 'Sa është shuma e rrezeve vatrore për çdo pikë të x²/25 + y²/9 = 1?', solution: '2a = 10.' },
          { example: 'Gjeni rrezet vatrore të P(3; 2,4) në këtë elipsë.', solution: 'ε = 0,8: r₁ = 5 + 0,8 · 3 = 7,4; r₂ = 5 − 2,4 = 2,6.' },
        ],
        commonMistakes: [
          { mistake: 'Shuma e rrezeve vatrore merret 2c.', fix: '2c është largësia midis vatrave; shuma e rrezeve është 2a.' },
        ],
        practice: [
          { problem: 'Kontrolloni r₁ = |PF₁| për P(3; 2,4) dhe F₁(−4, 0).', solution: '7,4', steps: ['√((3 + 4)² + 2,4²) = √(49 + 5,76).', '= √54,76 = 7,4.'] },
          { problem: 'Në x²/25 + y²/9 = 1 një pikë ka r₁ = 6. Sa është r₂?', solution: '4', steps: ['r₁ + r₂ = 10.', 'r₂ = 10 − 6 = 4.'] },
          { problem: 'Vatrat janë (±3, 0) dhe shuma e rrezeve vatrore 10. Shkruani elipsën.', solution: 'x²/25 + y²/16 = 1', steps: ['2a = 10 → a = 5; c = 3.', 'b = √(25 − 9) = 4 → x²/25 + y²/16 = 1.'] },
        ],
      },
      en: {
        title: 'Focal radii',
        objectives: ['Use the property r₁ + r₂ = 2a of an ellipse.', 'Work out the focal radii of a point with r = a ± ex.'],
        theory: 'The focal radii of a point P(x, y) on the ellipse are the distances r₁ = |PF₁| and r₂ = |PF₂| from the foci F₁(−c, 0), F₂(c, 0).\n\nThe key property: r₁ + r₂ = 2a for every point of the ellipse.\nFormulas: r₁ = a + ex, r₂ = a − ex (e the eccentricity).\n\nFor x²/25 + y²/9 = 1 (e = 0.8) and P(3, 2.4): r₁ = 5 + 2.4 = 7.4, r₂ = 5 − 2.4 = 2.6; sum 10.',
        keyPoints: ['r₁ + r₂ = 2a', 'r₁ = a + ex, r₂ = a − ex', 'Foci F(±c, 0)'],
        examples: [
          { example: 'What is the sum of the focal radii for every point of x²/25 + y²/9 = 1?', solution: '2a = 10.' },
          { example: 'Find the focal radii of P(3, 2.4) on this ellipse.', solution: 'e = 0.8: r₁ = 5 + 0.8 · 3 = 7.4; r₂ = 5 − 2.4 = 2.6.' },
        ],
        commonMistakes: [
          { mistake: 'The sum of the focal radii is taken as 2c.', fix: '2c is the distance between the foci; the sum of the radii is 2a.' },
        ],
        practice: [
          { problem: 'Check r₁ = |PF₁| for P(3, 2.4) and F₁(−4, 0).', solution: '7.4', steps: ['√((3 + 4)² + 2.4²) = √(49 + 5.76).', '= √54.76 = 7.4.'] },
          { problem: 'On x²/25 + y²/9 = 1 a point has r₁ = 6. What is r₂?', solution: '4', steps: ['r₁ + r₂ = 10.', 'r₂ = 10 − 6 = 4.'] },
          { problem: 'The foci are (±3, 0) and the sum of the focal radii is 10. Write the ellipse.', solution: 'x²/25 + y²/16 = 1', steps: ['2a = 10 → a = 5; c = 3.', 'b = √(25 − 9) = 4 → x²/25 + y²/16 = 1.'] },
        ],
      },
      de: {
        title: 'Brennstrahlen',
        objectives: ['Die Eigenschaft r₁ + r₂ = 2a der Ellipse nutzen.', 'Die Brennstrahlen eines Punktes mit r = a ± εx berechnen.'],
        theory: 'Die Brennstrahlen eines Ellipsenpunktes P(x | y) sind die Abstände r₁ = |PF₁| und r₂ = |PF₂| zu den Brennpunkten F₁(−e | 0), F₂(e | 0).\n\nGrundeigenschaft: r₁ + r₂ = 2a für jeden Punkt der Ellipse.\nFormeln: r₁ = a + εx, r₂ = a − εx (ε numerische Exzentrizität).\n\nFür x²/25 + y²/9 = 1 (ε = 0,8) und P(3 | 2,4): r₁ = 5 + 2,4 = 7,4, r₂ = 5 − 2,4 = 2,6; Summe 10.',
        keyPoints: ['r₁ + r₂ = 2a', 'r₁ = a + εx, r₂ = a − εx', 'Brennpunkte F(±e | 0)'],
        examples: [
          { example: 'Wie groß ist die Summe der Brennstrahlen für jeden Punkt von x²/25 + y²/9 = 1?', solution: '2a = 10.' },
          { example: 'Bestimmen Sie die Brennstrahlen von P(3 | 2,4) auf dieser Ellipse.', solution: 'ε = 0,8: r₁ = 5 + 0,8 · 3 = 7,4; r₂ = 5 − 2,4 = 2,6.' },
        ],
        commonMistakes: [
          { mistake: 'Die Summe der Brennstrahlen wird 2e gesetzt.', fix: '2e ist der Abstand der Brennpunkte; die Summe der Brennstrahlen ist 2a.' },
        ],
        practice: [
          { problem: 'Prüfen Sie r₁ = |PF₁| für P(3 | 2,4) und F₁(−4 | 0).', solution: '7,4', steps: ['√((3 + 4)² + 2,4²) = √(49 + 5,76).', '= √54,76 = 7,4.'] },
          { problem: 'Auf x²/25 + y²/9 = 1 hat ein Punkt r₁ = 6. Wie groß ist r₂?', solution: '4', steps: ['r₁ + r₂ = 10.', 'r₂ = 10 − 6 = 4.'] },
          { problem: 'Die Brennpunkte sind (±3 | 0), die Summe der Brennstrahlen ist 10. Stellen Sie die Ellipse auf.', solution: 'x²/25 + y²/16 = 1', steps: ['2a = 10 → a = 5; e = 3.', 'b = √(25 − 9) = 4 → x²/25 + y²/16 = 1.'] },
        ],
      },
    },
  ],
};
