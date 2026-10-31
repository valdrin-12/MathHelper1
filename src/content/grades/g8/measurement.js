// Grade 8 · Theme 3: Measurement (12 hours)
const alt = (al, en, de) => ({ al, en, de });
// points on an arc (or ellipse with ry) from angle a0 to a1 in degrees, for drawing sectors and cylinders
const arc = (cx, cy, rx, a0, a1, ry = rx, n = 24) => Array.from({ length: n + 1 }, (_, i) => {
  const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180;
  return [Math.round((cx + rx * Math.cos(t)) * 1000) / 1000, Math.round((cy + ry * Math.sin(t)) * 1000) / 1000];
});

export default {
  id: 'g8-measurement',
  i18n: {
    al: { title: 'Matja', description: 'Perimetri i figurave të përbëra, gjatësia e harkut, sipërfaqja e shumëkëndëshave dhe e sektorit, vëllimi i prizmit, piramidës dhe cilindrit.' },
    en: { title: 'Measurement', description: 'Perimeter of composite shapes, arc length, area of polygons and sectors, volume of prisms, pyramids and cylinders.' },
    de: { title: 'Messen', description: 'Umfang zusammengesetzter Figuren, Bogenlänge, Flächeninhalt von Vielecken und Kreisausschnitten, Volumen von Prisma, Pyramide und Zylinder.' },
  },
  lessons: [
    // ───────── 1. Perimeter
    {
      slug: 'g8-measurement-perimeter',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1.2, xMax: 9.2, yMin: -1, yMax: 6.8 }, height: 220,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [8, 0], [8, 4], [5, 4], [5, 6], [0, 6]], fill: true, color: 'primary' },
          { kind: 'polygon', points: [[5, 4], [8, 4], [8, 6], [5, 6]], color: 'muted', dashed: true },
          { kind: 'label', at: [4, -0.5], text: '8 cm' },
          { kind: 'label', at: [-0.8, 3], text: '6 cm' },
          { kind: 'label', at: [6.5, 3.5], text: '3 cm' },
          { kind: 'label', at: [8.6, 5], text: '2 cm', color: 'muted' },
        ],
        caption: alt('Prerja e këndit nuk e ndryshon perimetrin: brinjët e reja 3 cm dhe 2 cm zëvendësojnë ato që u hoqën. P = 2(8 + 6) = 28 cm.', 'Cutting the corner does not change the perimeter: the new sides 3 cm and 2 cm replace the ones removed. P = 2(8 + 6) = 28 cm.', 'Das Abschneiden der Ecke ändert den Umfang nicht: Die neuen Seiten 3 cm und 2 cm ersetzen die entfernten. u = 2(8 + 6) = 28 cm.'),
        alt: alt('Figurë në formë L: drejtkëndësh 8 × 6 cm me një kënd 3 × 2 cm të prerë.', 'An L-shape: an 8 × 6 cm rectangle with a 3 × 2 cm corner cut out.', 'Eine L-Form: ein Rechteck 8 × 6 cm, aus dem eine Ecke 3 × 2 cm herausgeschnitten ist.'),
      }],
      answers: {
        examples: [[['2 * (8 + 6)', 28]], [['200 + pi * 60', 388.5, 0.05, '388.5']]],
        practice: [[['8 * 5', 40]], [['10 + pi * 5', 25.7, 0.05, '25.7']], [['2 * (15 + 8) - 0.9', 45.1]]],
      },
      al: {
        title: 'Perimetri i figurave të përbëra',
        objectives: ['Të gjeni perimetrin e figurave të përbëra nga drejtkëndësha dhe pjesë rrethi.', 'Të dalloni cilat brinjë janë në kufirin e figurës.'],
        theory: 'Perimetri është gjatësia e kufirit të figurës. Te figurat e përbëra mblidhen vetëm vijat që janë në kufirin e jashtëm; vijat e brendshme ndarëse nuk numërohen.\n\nKur një figurë ka harqe rrethi, përdorim P_rrethit = 2πr = πd: gjysmërrethi me diametër d ka hark πd/2. Pista e vrapimit me dy drejtëza 100 m dhe dy gjysmërrethë me diametër 60 m: P = 2 · 100 + π · 60 ≈ 388,5 m.\n\nKëshillë: shkoni rreth figurës me laps dhe shënoni çdo brinjë një herë. Brinjët që mungojnë i gjeni me mbledhje ose zbritje.',
        keyPoints: ['Vetëm kufiri i jashtëm', 'Gjysmërrethi: hark = πd/2', 'Brinjë e panjohur: nga brinjët paralele'],
        examples: [
          { example: 'Gjeni perimetrin e figurës L (drejtkëndësh 8 × 6 cm me kënd 3 × 2 cm të prerë).', solution: '8 + 4 + 3 + 2 + 5 + 6 = 28 cm, njësoj si 2(8 + 6) = 28 cm.' },
          { example: 'Pista ka dy drejtëza 100 m dhe dy gjysmërrethë me diametër 60 m. Sa është perimetri?', solution: '2 · 100 + π · 60 ≈ 200 + 188,5 = 388,5 m.' },
        ],
        commonMistakes: [
          { mistake: 'Te figura L zbriten 3 + 2 cm nga perimetri.', fix: 'Brinjët që hiqen zëvendësohen nga brinjë të reja me të njëjtën gjatësi; perimetri mbetet 28 cm.' },
          { mistake: 'Perimetri i gjysmërrethit = πd/2 (pa diametrin).', fix: 'Kufiri përfshin edhe diametrin e drejtë: P = d + πd/2.' },
        ],
        practice: [
          { problem: 'Gjeni perimetrin e tetëkëndëshit të rregullt me brinjë 5 cm.', solution: '40 cm', steps: ['P = 8 · 5.', '= 40 cm.'] },
          { problem: 'Gjeni perimetrin e gjysmërrethit me diametër 10 cm.', solution: '≈ 25,7 cm', steps: ['Harku: π · 10 / 2 ≈ 15,7 cm.', 'P = 10 + 15,7 ≈ 25,7 cm.'] },
          { problem: 'Një dhomë 15 m × 8 m ka derë 0,9 m. Sa metra listelë nevojiten rreth dyshemesë (pa derën)?', solution: '45,1 m', steps: ['2 · (15 + 8) = 46 m.', '46 − 0,9 = 45,1 m.'] },
        ],
      },
      en: {
        title: 'Perimeter of composite shapes',
        objectives: ['Find the perimeter of shapes made of rectangles and parts of circles.', 'Decide which sides lie on the boundary of the shape.'],
        theory: 'Perimeter is the length of the boundary of a shape. For composite shapes only the lines on the outer boundary are added; inner dividing lines are not counted.\n\nWhen a shape has arcs, use the circumference C = 2πr = πd: a semicircle with diameter d has an arc of πd/2. A running track with two 100 m straights and two semicircles of diameter 60 m: P = 2 · 100 + π · 60 ≈ 388.5 m.\n\nTip: go round the shape with a pencil and mark each side once. Find missing sides by adding or subtracting.',
        keyPoints: ['Outer boundary only', 'Semicircle: arc = πd/2', 'Missing side: from the parallel sides'],
        examples: [
          { example: 'Find the perimeter of the L-shape (an 8 × 6 cm rectangle with a 3 × 2 cm corner cut out).', solution: '8 + 4 + 3 + 2 + 5 + 6 = 28 cm, the same as 2(8 + 6) = 28 cm.' },
          { example: 'A track has two 100 m straights and two semicircles of diameter 60 m. What is its perimeter?', solution: '2 · 100 + π · 60 ≈ 200 + 188.5 = 388.5 m.' },
        ],
        commonMistakes: [
          { mistake: 'For the L-shape, subtracting 3 + 2 cm from the perimeter.', fix: 'The removed sides are replaced by new sides of the same length; the perimeter stays 28 cm.' },
          { mistake: 'Perimeter of a semicircle = πd/2 (without the diameter).', fix: 'The boundary includes the straight diameter: P = d + πd/2.' },
        ],
        practice: [
          { problem: 'Find the perimeter of a regular octagon with side 5 cm.', solution: '40 cm', steps: ['P = 8 · 5.', '= 40 cm.'] },
          { problem: 'Find the perimeter of a semicircle with diameter 10 cm.', solution: '≈ 25.7 cm', steps: ['Arc: π · 10 / 2 ≈ 15.7 cm.', 'P = 10 + 15.7 ≈ 25.7 cm.'] },
          { problem: 'A 15 m × 8 m room has a 0.9 m door. How many metres of skirting board are needed (not across the door)?', solution: '45.1 m', steps: ['2 · (15 + 8) = 46 m.', '46 − 0.9 = 45.1 m.'] },
        ],
      },
      de: {
        title: 'Umfang zusammengesetzter Figuren',
        objectives: ['Den Umfang von Figuren aus Rechtecken und Kreisteilen bestimmen.', 'Erkennen, welche Seiten auf dem Rand der Figur liegen.'],
        theory: 'Der Umfang ist die Länge des Randes einer Figur. Bei zusammengesetzten Figuren addiert man nur die Linien des äußeren Randes; innere Trennlinien zählen nicht.\n\nHat eine Figur Kreisbögen, verwendet man u = 2πr = πd: Ein Halbkreis mit Durchmesser d hat den Bogen πd/2. Eine Laufbahn mit zwei Geraden von 100 m und zwei Halbkreisen mit 60 m Durchmesser: u = 2 · 100 + π · 60 ≈ 388,5 m.\n\nTipp: Mit dem Stift einmal um die Figur fahren und jede Seite einmal markieren. Fehlende Seiten durch Addieren oder Subtrahieren bestimmen.',
        keyPoints: ['Nur der äußere Rand', 'Halbkreis: Bogen = πd/2', 'Fehlende Seite: aus den parallelen Seiten'],
        examples: [
          { example: 'Bestimmen Sie den Umfang der L-Form (Rechteck 8 × 6 cm, Ecke 3 × 2 cm herausgeschnitten).', solution: '8 + 4 + 3 + 2 + 5 + 6 = 28 cm, genauso wie 2(8 + 6) = 28 cm.' },
          { example: 'Eine Laufbahn hat zwei Geraden von 100 m und zwei Halbkreise mit 60 m Durchmesser. Wie lang ist sie?', solution: '2 · 100 + π · 60 ≈ 200 + 188,5 = 388,5 m.' },
        ],
        commonMistakes: [
          { mistake: 'Bei der L-Form 3 + 2 cm vom Umfang abziehen.', fix: 'Die entfernten Seiten werden durch gleich lange neue Seiten ersetzt; der Umfang bleibt 28 cm.' },
          { mistake: 'Umfang des Halbkreises = πd/2 (ohne Durchmesser).', fix: 'Zum Rand gehört auch der gerade Durchmesser: u = d + πd/2.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Umfang eines regelmäßigen Achtecks mit der Seite 5 cm.', solution: '40 cm', steps: ['u = 8 · 5.', '= 40 cm.'] },
          { problem: 'Bestimmen Sie den Umfang eines Halbkreises mit Durchmesser 10 cm.', solution: '≈ 25,7 cm', steps: ['Bogen: π · 10 / 2 ≈ 15,7 cm.', 'u = 10 + 15,7 ≈ 25,7 cm.'] },
          { problem: 'Ein Zimmer ist 15 m × 8 m groß und hat eine Tür von 0,9 m. Wie viele Meter Sockelleiste braucht man (ohne Tür)?', solution: '45,1 m', steps: ['2 · (15 + 8) = 46 m.', '46 − 0,9 = 45,1 m.'] },
        ],
      },
    },

    // ───────── 2. Arc length
    {
      slug: 'g8-measurement-arc-length',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3.4, xMax: 3.6, yMin: -3.4, yMax: 3.4 }, height: 220,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 3, color: 'muted', dashed: true },
          { kind: 'polygon', points: [[0, 0], ...arc(0, 0, 3, 0, 90)], fill: true, color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [3, 0], color: 'ink' },
          { kind: 'label', at: [1.5, -0.45], text: 'r = 8 cm' },
          { kind: 'angle', vertex: [0, 0], from: [3, 0], to: [0, 3], label: '90°', color: 'secondary' },
          { kind: 'label', at: [2.55, 2.55], text: alt('l = ?', 'l = ?', 'b = ?'), color: 'secondary' },
        ],
        caption: alt('Harku i 90° është 90/360 = 1/4 e rrethit: l = 1/4 · 2π · 8 = 4π ≈ 12,6 cm.', 'A 90° arc is 90/360 = 1/4 of the circle: l = 1/4 · 2π · 8 = 4π ≈ 12.6 cm.', 'Ein Bogen von 90° ist 90/360 = 1/4 des Kreises: b = 1/4 · 2π · 8 = 4π ≈ 12,6 cm.'),
        alt: alt('Rreth me rreze 8 cm; një çerek (90°) i ngjyrosur me harkun e tij.', 'A circle with radius 8 cm; one quarter (90°) shaded with its arc.', 'Ein Kreis mit Radius 8 cm; ein Viertel (90°) mit seinem Bogen ist gefärbt.'),
      }],
      answers: {
        examples: [[['90 / 360 * 2 * pi * 8', 12.6, 0.05, '12.6']], [['60 / 360 * 2 * pi * 9', 9.42, 0.005, '9.42']]],
        practice: [[['180 / 360 * 2 * pi * 5', 15.7, 0.05, '15.7']], [['30 / 360 * 2 * pi * 12', 6.28, 0.005, '6.28']], [['10 * pi / (2 * pi * 20) * 360', 90]]],
      },
      al: {
        title: 'Gjatësia e harkut',
        objectives: ['Të njehsoni gjatësinë e harkut nga këndi qendror dhe rrezja.', 'Të gjeni këndin qendror kur dihet harku.'],
        theory: 'Këndi qendror α "pret" nga rrethi një hark. Harku është e njëjta pjesë e perimetrit sa është α pjesë e 360°.\n\nGjatësia e harkut: l = α/360° · 2πr. Për α = 90° dhe r = 8 cm: l = 1/4 · 16π = 4π ≈ 12,6 cm. Shpesh përgjigjen e lëmë me π (4π cm), që është e saktë.\n\nAnasjelltas: α = l / (2πr) · 360°. Nëse r = 20 cm dhe l = 10π cm, atëherë α = 10π / 40π · 360° = 90°.',
        keyPoints: ['l = α/360° · 2πr', 'α = l/(2πr) · 360°', 'Përgjigje e saktë me π, e përafërt me π ≈ 3,14'],
        examples: [
          { example: 'Gjeni gjatësinë e harkut 90° në rrethin me rreze 8 cm.', solution: 'l = 90/360 · 2π · 8 = 4π ≈ 12,6 cm.' },
          { example: 'Gjeni harkun e 60° në rrethin me rreze 9 cm.', solution: 'l = 60/360 · 18π = 3π ≈ 9,42 cm.' },
        ],
        commonMistakes: [
          { mistake: 'l = α/360 · πr²', fix: 'Kjo është sipërfaqja e sektorit; harku është gjatësi: α/360 · 2πr.' },
          { mistake: 'l = α · r = 90 · 8', fix: 'Këndi duhet si pjesë e 360°: 90/360 = 1/4.' },
        ],
        practice: [
          { problem: 'Gjeni harkun e 180° në rrethin me rreze 5 cm.', solution: '5π ≈ 15,7 cm', steps: ['180/360 = 1/2.', 'l = 1/2 · 10π = 5π ≈ 15,7 cm.'] },
          { problem: 'Gjeni harkun e 30° në rrethin me rreze 12 cm.', solution: '2π ≈ 6,28 cm', steps: ['30/360 = 1/12.', 'l = 1/12 · 24π = 2π ≈ 6,28 cm.'] },
          { problem: 'Në rrethin me rreze 20 cm harku është 10π cm. Sa është këndi qendror?', solution: '90°', steps: ['Perimetri: 40π cm.', 'α = 10π/40π · 360° = 90°.'] },
        ],
      },
      en: {
        title: 'Arc length',
        objectives: ['Work out the length of an arc from the angle at the centre and the radius.', 'Find the angle at the centre when the arc is known.'],
        theory: 'An angle α at the centre cuts off an arc of the circle. The arc is the same fraction of the circumference as α is of 360°.\n\nArc length: l = α/360° · 2πr. For α = 90° and r = 8 cm: l = 1/4 · 16π = 4π ≈ 12.6 cm. The answer is often left in terms of π (4π cm), which is exact.\n\nThe other way: α = l / (2πr) · 360°. If r = 20 cm and l = 10π cm, then α = 10π / 40π · 360° = 90°.',
        keyPoints: ['l = α/360° · 2πr', 'α = l/(2πr) · 360°', 'Exact with π, approximate with π ≈ 3.14'],
        examples: [
          { example: 'Find the length of a 90° arc in a circle with radius 8 cm.', solution: 'l = 90/360 · 2π · 8 = 4π ≈ 12.6 cm.' },
          { example: 'Find the 60° arc in a circle with radius 9 cm.', solution: 'l = 60/360 · 18π = 3π ≈ 9.42 cm.' },
        ],
        commonMistakes: [
          { mistake: 'l = α/360 · πr²', fix: 'That is the area of the sector; an arc is a length: α/360 · 2πr.' },
          { mistake: 'l = α · r = 90 · 8', fix: 'The angle is needed as a fraction of 360°: 90/360 = 1/4.' },
        ],
        practice: [
          { problem: 'Find the 180° arc in a circle with radius 5 cm.', solution: '5π ≈ 15.7 cm', steps: ['180/360 = 1/2.', 'l = 1/2 · 10π = 5π ≈ 15.7 cm.'] },
          { problem: 'Find the 30° arc in a circle with radius 12 cm.', solution: '2π ≈ 6.28 cm', steps: ['30/360 = 1/12.', 'l = 1/12 · 24π = 2π ≈ 6.28 cm.'] },
          { problem: 'In a circle with radius 20 cm the arc is 10π cm. What is the angle at the centre?', solution: '90°', steps: ['Circumference: 40π cm.', 'α = 10π/40π · 360° = 90°.'] },
        ],
      },
      de: {
        title: 'Die Bogenlänge',
        objectives: ['Die Bogenlänge aus Mittelpunktswinkel und Radius berechnen.', 'Den Mittelpunktswinkel bestimmen, wenn der Bogen bekannt ist.'],
        theory: 'Ein Mittelpunktswinkel α schneidet aus dem Kreis einen Bogen heraus. Der Bogen ist derselbe Anteil am Umfang wie α an 360°.\n\nBogenlänge: b = α/360° · 2πr. Für α = 90° und r = 8 cm: b = 1/4 · 16π = 4π ≈ 12,6 cm. Oft lässt man das Ergebnis mit π stehen (4π cm); das ist exakt.\n\nUmgekehrt: α = b / (2πr) · 360°. Ist r = 20 cm und b = 10π cm, dann α = 10π / 40π · 360° = 90°.',
        keyPoints: ['b = α/360° · 2πr', 'α = b/(2πr) · 360°', 'Exakt mit π, gerundet mit π ≈ 3,14'],
        examples: [
          { example: 'Bestimmen Sie die Länge des 90°-Bogens in einem Kreis mit Radius 8 cm.', solution: 'b = 90/360 · 2π · 8 = 4π ≈ 12,6 cm.' },
          { example: 'Bestimmen Sie den 60°-Bogen in einem Kreis mit Radius 9 cm.', solution: 'b = 60/360 · 18π = 3π ≈ 9,42 cm.' },
        ],
        commonMistakes: [
          { mistake: 'b = α/360 · πr²', fix: 'Das ist der Flächeninhalt des Kreisausschnitts; ein Bogen ist eine Länge: α/360 · 2πr.' },
          { mistake: 'b = α · r = 90 · 8', fix: 'Der Winkel wird als Anteil an 360° gebraucht: 90/360 = 1/4.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den 180°-Bogen in einem Kreis mit Radius 5 cm.', solution: '5π ≈ 15,7 cm', steps: ['180/360 = 1/2.', 'b = 1/2 · 10π = 5π ≈ 15,7 cm.'] },
          { problem: 'Bestimmen Sie den 30°-Bogen in einem Kreis mit Radius 12 cm.', solution: '2π ≈ 6,28 cm', steps: ['30/360 = 1/12.', 'b = 1/12 · 24π = 2π ≈ 6,28 cm.'] },
          { problem: 'In einem Kreis mit Radius 20 cm ist der Bogen 10π cm lang. Wie groß ist der Mittelpunktswinkel?', solution: '90°', steps: ['Umfang: 40π cm.', 'α = 10π/40π · 360° = 90°.'] },
        ],
      },
    },

    // ───────── 3. Area of polygons and sectors
    {
      slug: 'g8-measurement-polygon-sector-area',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3.4, xMax: 3.6, yMin: -3.4, yMax: 3.4 }, height: 220,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 3, color: 'muted', dashed: true },
          { kind: 'polygon', points: [[0, 0], ...arc(0, 0, 3, 0, 60)], fill: true, color: 'success' },
          { kind: 'segment', from: [0, 0], to: [3, 0], color: 'ink' },
          { kind: 'label', at: [1.5, -0.45], text: 'r = 6 cm' },
          { kind: 'angle', vertex: [0, 0], from: [3, 0], to: [1.5, 2.598], label: '60°', color: 'secondary' },
        ],
        caption: alt('Sektori 60° është 60/360 = 1/6 e rrethit: S = 1/6 · π · 6² = 6π ≈ 18,8 cm².', 'A 60° sector is 60/360 = 1/6 of the circle: A = 1/6 · π · 6² = 6π ≈ 18.8 cm².', 'Ein 60°-Kreisausschnitt ist 60/360 = 1/6 des Kreises: A = 1/6 · π · 6² = 6π ≈ 18,8 cm².'),
        alt: alt('Rreth me rreze 6 cm; sektori 60° i ngjyrosur.', 'A circle with radius 6 cm; a 60° sector shaded.', 'Ein Kreis mit Radius 6 cm; ein 60°-Ausschnitt ist gefärbt.'),
      }],
      answers: {
        examples: [[['60 / 360 * pi * 6^2', 18.8, 0.05, '18.8']], [['8 * 6 / 2', 24]]],
        practice: [[['90 / 360 * pi * 4^2', 12.6, 0.05, '12.6']], [['pi * 5^2', 78.5, 0.05, '78.5']], [['(12 + 8) / 2 * 5', 50]]],
      },
      al: {
        title: 'Sipërfaqja e shumëkëndëshave dhe e sektorit',
        objectives: ['Të përdorni formulat e sipërfaqes së trekëndëshit, paralelogramit, trapezit dhe rombit.', 'Të njehsoni sipërfaqen e rrethit dhe të sektorit qarkor.'],
        theory: 'Formulat bazë: trekëndëshi S = a · h / 2; paralelogrami S = a · h; trapezi S = (a + c)/2 · h; rombi S = d₁ · d₂ / 2 (gjysma e prodhimit të diagonaleve).\n\nSipërfaqja e qarkut: S = πr². Sektori me kënd qendror α është pjesë α/360° e qarkut: S = α/360° · πr². Për α = 60° dhe r = 6 cm: S = 1/6 · 36π = 6π ≈ 18,8 cm².\n\nFigurat e përbëra i ndajmë në pjesë të njohura, llogarisim secilën dhe i mbledhim (ose zbresim pjesën që mungon).',
        keyPoints: ['Trapezi: (a + c)/2 · h;  rombi: d₁d₂/2', 'Qarku: πr²', 'Sektori: α/360° · πr²'],
        examples: [
          { example: 'Gjeni sipërfaqen e sektorit 60° me rreze 6 cm.', solution: 'S = 60/360 · π · 36 = 6π ≈ 18,8 cm².' },
          { example: 'Diagonalet e rombit janë 8 cm dhe 6 cm. Sa është sipërfaqja?', solution: 'S = 8 · 6 / 2 = 24 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Sektori: S = α/360 · 2πr', fix: 'Kjo është gjatësia e harkut; sipërfaqja përdor πr².' },
          { mistake: 'Rombi: S = d₁ · d₂', fix: 'Duhet pjesëtuar me 2: S = d₁ · d₂ / 2.' },
        ],
        practice: [
          { problem: 'Gjeni sipërfaqen e sektorit 90° me rreze 4 cm.', solution: '4π ≈ 12,6 cm²', steps: ['90/360 = 1/4.', 'S = 1/4 · 16π = 4π ≈ 12,6 cm².'] },
          { problem: 'Gjeni sipërfaqen e qarkut me rreze 5 cm.', solution: '25π ≈ 78,5 cm²', steps: ['S = π · 5².', '= 25π ≈ 78,5 cm².'] },
          { problem: 'Trapezi ka bazat 12 cm dhe 8 cm dhe lartësinë 5 cm. Gjeni sipërfaqen.', solution: '50 cm²', steps: ['(12 + 8)/2 = 10.', 'S = 10 · 5 = 50 cm².'] },
        ],
      },
      en: {
        title: 'Area of polygons and sectors',
        objectives: ['Use the area formulas for the triangle, parallelogram, trapezium and rhombus.', 'Work out the area of a circle and of a sector.'],
        theory: 'Basic formulas: triangle A = b · h / 2; parallelogram A = b · h; trapezium A = (a + c)/2 · h; rhombus A = d₁ · d₂ / 2 (half the product of the diagonals).\n\nArea of a circle: A = πr². A sector with angle α at the centre is the fraction α/360° of the circle: A = α/360° · πr². For α = 60° and r = 6 cm: A = 1/6 · 36π = 6π ≈ 18.8 cm².\n\nSplit composite shapes into known parts, work out each one and add them (or subtract the missing part).',
        keyPoints: ['Trapezium: (a + c)/2 · h;  rhombus: d₁d₂/2', 'Circle: πr²', 'Sector: α/360° · πr²'],
        examples: [
          { example: 'Find the area of a 60° sector with radius 6 cm.', solution: 'A = 60/360 · π · 36 = 6π ≈ 18.8 cm².' },
          { example: 'The diagonals of a rhombus are 8 cm and 6 cm. What is its area?', solution: 'A = 8 · 6 / 2 = 24 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Sector: A = α/360 · 2πr', fix: 'That is the arc length; area uses πr².' },
          { mistake: 'Rhombus: A = d₁ · d₂', fix: 'Divide by 2: A = d₁ · d₂ / 2.' },
        ],
        practice: [
          { problem: 'Find the area of a 90° sector with radius 4 cm.', solution: '4π ≈ 12.6 cm²', steps: ['90/360 = 1/4.', 'A = 1/4 · 16π = 4π ≈ 12.6 cm².'] },
          { problem: 'Find the area of a circle with radius 5 cm.', solution: '25π ≈ 78.5 cm²', steps: ['A = π · 5².', '= 25π ≈ 78.5 cm².'] },
          { problem: 'A trapezium has parallel sides 12 cm and 8 cm and height 5 cm. Find its area.', solution: '50 cm²', steps: ['(12 + 8)/2 = 10.', 'A = 10 · 5 = 50 cm².'] },
        ],
      },
      de: {
        title: 'Flächeninhalt von Vielecken und Kreisausschnitten',
        objectives: ['Die Flächenformeln für Dreieck, Parallelogramm, Trapez und Raute verwenden.', 'Den Flächeninhalt von Kreis und Kreisausschnitt berechnen.'],
        theory: 'Grundformeln: Dreieck A = g · h / 2; Parallelogramm A = g · h; Trapez A = (a + c)/2 · h; Raute A = e · f / 2 (halbes Produkt der Diagonalen).\n\nKreisfläche: A = πr². Ein Kreisausschnitt mit dem Mittelpunktswinkel α ist der Anteil α/360° des Kreises: A = α/360° · πr². Für α = 60° und r = 6 cm: A = 1/6 · 36π = 6π ≈ 18,8 cm².\n\nZusammengesetzte Figuren zerlegt man in bekannte Teile, berechnet jeden und addiert (oder subtrahiert den fehlenden Teil).',
        keyPoints: ['Trapez: (a + c)/2 · h;  Raute: e · f / 2', 'Kreis: πr²', 'Kreisausschnitt: α/360° · πr²'],
        examples: [
          { example: 'Bestimmen Sie den Flächeninhalt eines 60°-Kreisausschnitts mit Radius 6 cm.', solution: 'A = 60/360 · π · 36 = 6π ≈ 18,8 cm².' },
          { example: 'Die Diagonalen einer Raute sind 8 cm und 6 cm lang. Wie groß ist ihr Flächeninhalt?', solution: 'A = 8 · 6 / 2 = 24 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Kreisausschnitt: A = α/360 · 2πr', fix: 'Das ist die Bogenlänge; die Fläche verwendet πr².' },
          { mistake: 'Raute: A = e · f', fix: 'Durch 2 teilen: A = e · f / 2.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Flächeninhalt eines 90°-Kreisausschnitts mit Radius 4 cm.', solution: '4π ≈ 12,6 cm²', steps: ['90/360 = 1/4.', 'A = 1/4 · 16π = 4π ≈ 12,6 cm².'] },
          { problem: 'Bestimmen Sie den Flächeninhalt eines Kreises mit Radius 5 cm.', solution: '25π ≈ 78,5 cm²', steps: ['A = π · 5².', '= 25π ≈ 78,5 cm².'] },
          { problem: 'Ein Trapez hat die parallelen Seiten 12 cm und 8 cm und die Höhe 5 cm. Bestimmen Sie den Flächeninhalt.', solution: '50 cm²', steps: ['(12 + 8)/2 = 10.', 'A = 10 · 5 = 50 cm².'] },
        ],
      },
    },

    // ───────── 4. Volume of prism, pyramid and cylinder
    {
      slug: 'g8-measurement-volumes',
      visuals: [{
        type: 'geoFigure', view: { xMin: -2.6, xMax: 3.8, yMin: -1, yMax: 5 }, height: 230,
        shapes: [
          { kind: 'polygon', points: arc(0, 0, 2, 180, 360, 0.6), color: 'primary', dashed: true },
          { kind: 'polygon', points: arc(0, 0, 2, 0, 180, 0.6), color: 'primary' },
          { kind: 'polygon', points: arc(0, 4, 2, 0, 360, 0.6), fill: true, color: 'primary' },
          { kind: 'segment', from: [-2, 0], to: [-2, 4], color: 'primary' },
          { kind: 'segment', from: [2, 0], to: [2, 4], color: 'primary' },
          { kind: 'segment', from: [0, 4], to: [2, 4], color: 'secondary', label: 'r' },
          { kind: 'segment', from: [2.6, 0], to: [2.6, 4], color: 'ink', label: 'h' },
        ],
        caption: alt('Cilindri: V = B · h = πr²h. Për r = 3 cm dhe h = 10 cm: V = 90π ≈ 282,7 cm³.', 'Cylinder: V = B · h = πr²h. For r = 3 cm and h = 10 cm: V = 90π ≈ 282.7 cm³.', 'Zylinder: V = G · h = πr²h. Für r = 3 cm und h = 10 cm: V = 90π ≈ 282,7 cm³.'),
        alt: alt('Cilindër me rreze r dhe lartësi h; baza e poshtme pjesërisht me vijë të ndërprerë.', 'A cylinder with radius r and height h; the hidden part of the bottom base dashed.', 'Ein Zylinder mit Radius r und Höhe h; der verdeckte Teil der Grundfläche gestrichelt.'),
      }],
      answers: {
        examples: [[['pi * 3^2 * 10', 282.7, 0.05, '282.7']], [['4 * 5 * 9 / 3', 60]]],
        practice: [[['pi * 5^2 * 4', 314.2, 0.05, '314.2']], [['pi * 4^2 * 12', 603.2, 0.05, '603.2']], [['15 * 8', 120]]],
      },
      al: {
        title: 'Vëllimi i prizmit, piramidës dhe cilindrit',
        objectives: ['Të njehsoni vëllimin e prizmit, piramidës dhe cilindrit.', 'Të shndërroni cm³ në litra.'],
        theory: 'Prizmi dhe cilindri kanë dy baza të barabarta; vëllimi i tyre është sipërfaqja e bazës herë lartësia: V = B · h. Për cilindrin baza është qark, pra V = πr²h.\n\nPiramida ka vëllimin një të tretën e prizmit me të njëjtën bazë dhe lartësi: V = B · h / 3.\n\nNjësitë: 1 dm³ = 1 000 cm³ = 1 l. Kanaçe me r = 4 cm dhe h = 12 cm: V = 192π ≈ 603,2 cm³ ≈ 0,6 l.',
        keyPoints: ['Prizmi: V = B · h', 'Cilindri: V = πr²h', 'Piramida: V = B · h / 3;  1 l = 1 000 cm³'],
        examples: [
          { example: 'Gjeni vëllimin e cilindrit me r = 3 cm dhe h = 10 cm.', solution: 'V = π · 9 · 10 = 90π ≈ 282,7 cm³.' },
          { example: 'Piramida ka bazë drejtkëndësh 4 cm × 5 cm dhe lartësi 9 cm. Gjeni vëllimin.', solution: 'B = 20 cm²; V = 20 · 9 / 3 = 60 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Cilindri: V = 2πr · h', fix: '2πr është perimetri i bazës; vëllimi kërkon sipërfaqen e bazës πr².' },
          { mistake: 'Për diametër 10 cm vendoset r = 10.', fix: 'Rrezja është gjysma e diametrit: r = 5 cm.' },
        ],
        practice: [
          { problem: 'Cilindri ka diametër 10 cm dhe lartësi 4 cm. Gjeni vëllimin.', solution: '100π ≈ 314,2 cm³', steps: ['r = 5 cm.', 'V = π · 25 · 4 = 100π ≈ 314,2 cm³.'] },
          { problem: 'Një kanaçe ka r = 4 cm dhe h = 12 cm. Sa cm³ nxë?', solution: '192π ≈ 603,2 cm³ (≈ 0,6 l)', steps: ['V = π · 16 · 12 = 192π.', '≈ 603,2 cm³ ≈ 0,6 l.'] },
          { problem: 'Prizmi ka bazë 15 cm² dhe lartësi 8 cm. Gjeni vëllimin.', solution: '120 cm³', steps: ['V = B · h.', '15 · 8 = 120 cm³.'] },
        ],
      },
      en: {
        title: 'Volume of prisms, pyramids and cylinders',
        objectives: ['Work out the volume of prisms, pyramids and cylinders.', 'Convert cm³ to litres.'],
        theory: 'Prisms and cylinders have two equal bases; their volume is base area times height: V = B · h. For a cylinder the base is a circle, so V = πr²h.\n\nA pyramid has one third of the volume of a prism with the same base and height: V = B · h / 3.\n\nUnits: 1 dm³ = 1 000 cm³ = 1 l. A can with r = 4 cm and h = 12 cm: V = 192π ≈ 603.2 cm³ ≈ 0.6 l.',
        keyPoints: ['Prism: V = B · h', 'Cylinder: V = πr²h', 'Pyramid: V = B · h / 3;  1 l = 1 000 cm³'],
        examples: [
          { example: 'Find the volume of a cylinder with r = 3 cm and h = 10 cm.', solution: 'V = π · 9 · 10 = 90π ≈ 282.7 cm³.' },
          { example: 'A pyramid has a 4 cm × 5 cm rectangular base and height 9 cm. Find its volume.', solution: 'B = 20 cm²; V = 20 · 9 / 3 = 60 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Cylinder: V = 2πr · h', fix: '2πr is the circumference of the base; volume needs the base area πr².' },
          { mistake: 'For a diameter of 10 cm, using r = 10.', fix: 'The radius is half the diameter: r = 5 cm.' },
        ],
        practice: [
          { problem: 'A cylinder has diameter 10 cm and height 4 cm. Find its volume.', solution: '100π ≈ 314.2 cm³', steps: ['r = 5 cm.', 'V = π · 25 · 4 = 100π ≈ 314.2 cm³.'] },
          { problem: 'A can has r = 4 cm and h = 12 cm. How many cm³ does it hold?', solution: '192π ≈ 603.2 cm³ (≈ 0.6 l)', steps: ['V = π · 16 · 12 = 192π.', '≈ 603.2 cm³ ≈ 0.6 l.'] },
          { problem: 'A prism has a base of 15 cm² and height 8 cm. Find its volume.', solution: '120 cm³', steps: ['V = B · h.', '15 · 8 = 120 cm³.'] },
        ],
      },
      de: {
        title: 'Volumen von Prisma, Pyramide und Zylinder',
        objectives: ['Das Volumen von Prisma, Pyramide und Zylinder berechnen.', 'cm³ in Liter umrechnen.'],
        theory: 'Prisma und Zylinder haben zwei gleiche Grundflächen; ihr Volumen ist Grundfläche mal Höhe: V = G · h. Beim Zylinder ist die Grundfläche ein Kreis, also V = πr²h.\n\nEine Pyramide hat ein Drittel des Volumens eines Prismas mit gleicher Grundfläche und Höhe: V = G · h / 3.\n\nEinheiten: 1 dm³ = 1 000 cm³ = 1 l. Eine Dose mit r = 4 cm und h = 12 cm: V = 192π ≈ 603,2 cm³ ≈ 0,6 l.',
        keyPoints: ['Prisma: V = G · h', 'Zylinder: V = πr²h', 'Pyramide: V = G · h / 3;  1 l = 1 000 cm³'],
        examples: [
          { example: 'Bestimmen Sie das Volumen eines Zylinders mit r = 3 cm und h = 10 cm.', solution: 'V = π · 9 · 10 = 90π ≈ 282,7 cm³.' },
          { example: 'Eine Pyramide hat eine rechteckige Grundfläche 4 cm × 5 cm und die Höhe 9 cm. Bestimmen Sie das Volumen.', solution: 'G = 20 cm²; V = 20 · 9 / 3 = 60 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Zylinder: V = 2πr · h', fix: '2πr ist der Umfang der Grundfläche; für das Volumen braucht man die Fläche πr².' },
          { mistake: 'Bei 10 cm Durchmesser r = 10 einsetzen.', fix: 'Der Radius ist der halbe Durchmesser: r = 5 cm.' },
        ],
        practice: [
          { problem: 'Ein Zylinder hat den Durchmesser 10 cm und die Höhe 4 cm. Bestimmen Sie das Volumen.', solution: '100π ≈ 314,2 cm³', steps: ['r = 5 cm.', 'V = π · 25 · 4 = 100π ≈ 314,2 cm³.'] },
          { problem: 'Eine Dose hat r = 4 cm und h = 12 cm. Wie viele cm³ fasst sie?', solution: '192π ≈ 603,2 cm³ (≈ 0,6 l)', steps: ['V = π · 16 · 12 = 192π.', '≈ 603,2 cm³ ≈ 0,6 l.'] },
          { problem: 'Ein Prisma hat die Grundfläche 15 cm² und die Höhe 8 cm. Bestimmen Sie das Volumen.', solution: '120 cm³', steps: ['V = G · h.', '15 · 8 = 120 cm³.'] },
        ],
      },
    },
  ],
};
