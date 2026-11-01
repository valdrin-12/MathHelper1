// Grade 10 · Theme 11: Circle and loci (May)
const alt = (al, en, de) => ({ al, en, de });
const onCircle = (r, deg) => [Number((r * Math.cos((deg * Math.PI) / 180)).toFixed(3)), Number((r * Math.sin((deg * Math.PI) / 180)).toFixed(3))];
const A = onCircle(3, 215); const B = onCircle(3, 325); const C = onCircle(3, 90);

export default {
  id: 'g10-circle-loci',
  i18n: {
    al: { title: 'Rrethi dhe vendet gjeometrike', description: 'Elementet e rrethit, gjatësia e harkut dhe syprina e sektorit, teoremat për këndet në rreth, ndërtimet dhe vendet gjeometrike.' },
    en: { title: 'Circle and loci', description: 'Parts of a circle, arc length and sector area, circle theorems, constructions and loci.' },
    de: { title: 'Kreis und Ortslinien', description: 'Teile des Kreises, Bogenlänge und Sektorfläche, Kreiswinkelsätze, Konstruktionen und Ortslinien.' },
  },
  lessons: [
    // ───────── 1. Parts of a circle
    {
      slug: 'g10-circle-loci-circle-elements',
      visuals: [{
        type: 'geoFigure', view: { xMin: -4, xMax: 5, yMin: -3.8, yMax: 3.8 }, height: 220,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 3, color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [3, 0], color: 'secondary', label: 'r' },
          { kind: 'line', through: [[3, -1], [3, 1]], color: 'success', label: 't' },
          { kind: 'angle', vertex: [3, 0], from: [0, 0], to: [3, 2], right: true, color: 'success' },
          { kind: 'segment', from: onCircle(3, 120), to: onCircle(3, 200), color: 'purple' },
          { kind: 'point', at: [0, 0], label: 'O', labelPos: 'sw', color: 'primary' },
          { kind: 'point', at: [3, 0], label: 'A', labelPos: 'se', color: 'secondary' },
          { kind: 'point', at: onCircle(3, 120), label: 'B', labelPos: 'nw', color: 'purple' },
          { kind: 'point', at: onCircle(3, 200), label: 'C', labelPos: 'w', color: 'purple' },
        ],
        caption: alt('Tangjentja t në pikën A është pingule me rrezen OA; BC është kordë.', 'The tangent t at A is perpendicular to the radius OA; BC is a chord.', 'Die Tangente t in A steht senkrecht auf dem Radius OA; BC ist eine Sehne.'),
        alt: alt('Rrethi me qendër O, rrezen OA, tangjenten në A me kënd të drejtë dhe kordën BC.', 'A circle with centre O, radius OA, the tangent at A with a right angle, and the chord BC.', 'Ein Kreis mit Mittelpunkt O, Radius OA, der Tangente in A mit rechtem Winkel und der Sehne BC.'),
      }],
      answers: {
        examples: [[['60/360 * 2 * pi * 6', 6.28, 0.005]], [['72/360 * pi * 10^2', 62.83, 0.005]]],
        practice: [[['sqrt(13^2 - 5^2)', 12]], [['120/360 * 2 * pi * 9', 18.85, 0.005]], [['90/360 * pi * 6^2', 28.27, 0.005]]],
      },
      al: {
        title: 'Elementet e rrethit',
        objectives: ['Të njihni kordën, harkun, sektorin, segmentin rrethor dhe tangjenten.', 'Të llogaritni gjatësinë e harkut dhe syprinën e sektorit.'],
        theory: 'Korda bashkon dy pika të rrethit; harku është pjesa e rrethit midis tyre. Sektori qarkor kufizohet nga dy rreze dhe një hark; segmenti qarkor nga një kordë dhe një hark. Tangjentja e prek rrethin në një pikë të vetme dhe është pingule me rrezen në atë pikë.\n\nNjë hark me kënd qendror α është pjesa α/360 e gjithë rrethit:\ngjatësia e harkut l = α/360 · 2πr, syprina e sektorit S = α/360 · πr².\n\nShembull: r = 6 cm, α = 60° → l = 1/6 · 12π = 2π ≈ 6,28 cm.',
        keyPoints: ['Tangjentja ⊥ rrezes në pikën e prekjes', 'l = α/360 · 2πr', 'S = α/360 · πr²'],
        examples: [
          { example: 'Sa është gjatësia e harkut me r = 6 cm dhe kënd qendror 60°?', solution: 'l = 60/360 · 2π · 6 = 2π ≈ 6,28 cm.' },
          { example: 'Sa është syprina e sektorit me r = 10 cm dhe kënd qendror 72°?', solution: 'S = 72/360 · π · 100 = 20π ≈ 62,83 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Te formula vendoset diametri në vend të rrezes.', fix: 'Kontrolloni: nëse jepet d, atëherë r = d/2.' },
          { mistake: 'Gjatësia e harkut llogaritet me πr².', fix: 'Gjatësia lidhet me perimetrin 2πr; syprina me πr².' },
        ],
        practice: [
          { problem: 'Nga pika P, me OP = 13 cm, hiqet tangjentja PT te rrethi me r = 5 cm. Sa është PT?', solution: '12 cm', steps: ['OT ⊥ PT, pra trekëndëshi OTP është kënddrejtë.', 'PT = √(13² − 5²) = √144 = 12 cm.'] },
          { problem: 'Sa është gjatësia e harkut me r = 9 cm dhe kënd qendror 120°?', solution: '≈ 18,85 cm', steps: ['l = 120/360 · 2π · 9 = 6π.', '≈ 18,85 cm.'] },
          { problem: 'Sa është syprina e sektorit me r = 6 cm dhe kënd qendror 90°?', solution: '≈ 28,27 cm²', steps: ['S = 1/4 · π · 36 = 9π.', '≈ 28,27 cm².'] },
        ],
      },
      en: {
        title: 'Parts of a circle',
        objectives: ['Know the chord, arc, sector, segment and tangent.', 'Work out arc lengths and sector areas.'],
        theory: 'A chord joins two points of a circle; an arc is the part of the circle between them. A sector is bounded by two radii and an arc; a segment by a chord and an arc. A tangent touches the circle at one point only and is perpendicular to the radius at that point.\n\nAn arc with centre angle α is the fraction α/360 of the whole circle:\narc length l = α/360 · 2πr, sector area A = α/360 · πr².\n\nExample: r = 6 cm, α = 60° → l = 1/6 · 12π = 2π ≈ 6.28 cm.',
        keyPoints: ['Tangent ⊥ radius at the point of contact', 'l = α/360 · 2πr', 'A = α/360 · πr²'],
        examples: [
          { example: 'What is the length of an arc with r = 6 cm and centre angle 60°?', solution: 'l = 60/360 · 2π · 6 = 2π ≈ 6.28 cm.' },
          { example: 'What is the area of a sector with r = 10 cm and centre angle 72°?', solution: 'A = 72/360 · π · 100 = 20π ≈ 62.83 cm².' },
        ],
        commonMistakes: [
          { mistake: 'The diameter is used in the formula instead of the radius.', fix: 'Check: if d is given, then r = d/2.' },
          { mistake: 'The arc length is worked out with πr².', fix: 'Length goes with the circumference 2πr; area with πr².' },
        ],
        practice: [
          { problem: 'From a point P with OP = 13 cm, a tangent PT is drawn to a circle with r = 5 cm. How long is PT?', solution: '12 cm', steps: ['OT ⊥ PT, so triangle OTP is right-angled.', 'PT = √(13² − 5²) = √144 = 12 cm.'] },
          { problem: 'What is the length of an arc with r = 9 cm and centre angle 120°?', solution: '≈ 18.85 cm', steps: ['l = 120/360 · 2π · 9 = 6π.', '≈ 18.85 cm.'] },
          { problem: 'What is the area of a sector with r = 6 cm and centre angle 90°?', solution: '≈ 28.27 cm²', steps: ['A = 1/4 · π · 36 = 9π.', '≈ 28.27 cm².'] },
        ],
      },
      de: {
        title: 'Teile des Kreises',
        objectives: ['Sehne, Bogen, Kreissektor, Kreissegment und Tangente kennen.', 'Bogenlängen und Sektorflächen berechnen.'],
        theory: 'Eine Sehne verbindet zwei Punkte des Kreises; der Bogen ist der Teil der Kreislinie dazwischen. Ein Kreissektor wird von zwei Radien und einem Bogen begrenzt, ein Kreissegment von einer Sehne und einem Bogen. Eine Tangente berührt den Kreis in genau einem Punkt und steht dort senkrecht auf dem Radius.\n\nEin Bogen mit Mittelpunktswinkel α ist der Anteil α/360 des ganzen Kreises:\nBogenlänge b = α/360 · 2πr, Sektorfläche A = α/360 · πr².\n\nBeispiel: r = 6 cm, α = 60° → b = 1/6 · 12π = 2π ≈ 6,28 cm.',
        keyPoints: ['Tangente ⊥ Radius im Berührpunkt', 'b = α/360 · 2πr', 'A = α/360 · πr²'],
        examples: [
          { example: 'Wie lang ist ein Bogen mit r = 6 cm und Mittelpunktswinkel 60°?', solution: 'b = 60/360 · 2π · 6 = 2π ≈ 6,28 cm.' },
          { example: 'Wie groß ist ein Sektor mit r = 10 cm und Mittelpunktswinkel 72°?', solution: 'A = 72/360 · π · 100 = 20π ≈ 62,83 cm².' },
        ],
        commonMistakes: [
          { mistake: 'In die Formel wird der Durchmesser statt des Radius eingesetzt.', fix: 'Prüfen: Ist d gegeben, dann r = d/2.' },
          { mistake: 'Die Bogenlänge wird mit πr² berechnet.', fix: 'Länge gehört zum Umfang 2πr, Fläche zu πr².' },
        ],
        practice: [
          { problem: 'Von einem Punkt P mit OP = 13 cm wird eine Tangente PT an einen Kreis mit r = 5 cm gelegt. Wie lang ist PT?', solution: '12 cm', steps: ['OT ⊥ PT, also ist das Dreieck OTP rechtwinklig.', 'PT = √(13² − 5²) = √144 = 12 cm.'] },
          { problem: 'Wie lang ist ein Bogen mit r = 9 cm und Mittelpunktswinkel 120°?', solution: '≈ 18,85 cm', steps: ['b = 120/360 · 2π · 9 = 6π.', '≈ 18,85 cm.'] },
          { problem: 'Wie groß ist ein Sektor mit r = 6 cm und Mittelpunktswinkel 90°?', solution: '≈ 28,27 cm²', steps: ['A = 1/4 · π · 36 = 9π.', '≈ 28,27 cm².'] },
        ],
      },
    },
    // ───────── 2. Circle theorems
    {
      slug: 'g10-circle-loci-circle-theorems',
      visuals: [{
        type: 'geoFigure', view: { xMin: -4, xMax: 4, yMin: -3.6, yMax: 3.8 }, height: 230,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 3, color: 'primary' },
          { kind: 'segment', from: [0, 0], to: A, color: 'secondary' },
          { kind: 'segment', from: [0, 0], to: B, color: 'secondary' },
          { kind: 'segment', from: C, to: A, color: 'success' },
          { kind: 'segment', from: C, to: B, color: 'success' },
          { kind: 'angle', vertex: [0, 0], from: A, to: B, label: '110°', color: 'secondary', r: 22 },
          { kind: 'angle', vertex: C, from: A, to: B, label: '55°', color: 'success', r: 26 },
          { kind: 'point', at: [0, 0], label: 'O', labelPos: 'n', color: 'primary' },
          { kind: 'point', at: A, label: 'A', labelPos: 'sw', color: 'ink' },
          { kind: 'point', at: B, label: 'B', labelPos: 'se', color: 'ink' },
          { kind: 'point', at: C, label: 'C', labelPos: 'n', color: 'ink' },
        ],
        caption: alt('Këndi qendror AOB = 110° dhe këndi periferik ACB = 55° mbështeten në të njëjtin hark AB.', 'The centre angle AOB = 110° and the angle at the circumference ACB = 55° stand on the same arc AB.', 'Der Mittelpunktswinkel AOB = 110° und der Umfangswinkel ACB = 55° liegen über demselben Bogen AB.'),
        alt: alt('Rrethi me qendër O; këndi qendror AOB 110° dhe këndi periferik ACB 55° mbi harkun AB.', 'A circle with centre O; centre angle AOB 110° and angle at the circumference ACB 55° on the arc AB.', 'Ein Kreis mit Mittelpunkt O; Mittelpunktswinkel AOB 110° und Umfangswinkel ACB 55° über dem Bogen AB.'),
      }],
      answers: {
        examples: [[['110 / 2', 55]], [['180 - 90 - 35', 55]]],
        practice: [[['2 * 48', 96]], [['180 - 75', 105]], [['(180 - 130) / 2', 25]]],
      },
      al: {
        title: 'Teoremat për këndet në rreth',
        objectives: ['Të përdorni lidhjen midis këndit qendror dhe këndit periferik.', 'Të përdorni këndin mbi diametër dhe këndet e katërkëndëshit kordal.'],
        theory: 'Këndi qendror ka kulmin në qendër; këndi periferik ka kulmin në rreth. Kur mbështeten në të njëjtin hark, këndi periferik është gjysma e këndit qendror: qendror 110° → periferik 55°.\n\nRrjedhime:\n• Këndet periferike mbi të njëjtin hark janë të barabarta.\n• Këndi periferik mbi diametër është 90° (këndi në gjysmërreth).\n• Te katërkëndëshi kordal (kulmet në rreth) këndet e kundërta kanë shumën 180°.\n\nRrezet OA = OB, prandaj trekëndëshi OAB është gjithmonë dybrinjënjëshëm.',
        keyPoints: ['Periferik = qendror : 2', 'Këndi mbi diametër = 90°', 'Katërkëndësh kordal: këndet e kundërta = 180°'],
        examples: [
          { example: 'Këndi qendror mbi harkun AB është 110°. Sa është këndi periferik mbi të njëjtin hark?', solution: '110° : 2 = 55°.' },
          { example: 'AB është diametër dhe C pikë në rreth. Nëse ∠A = 35°, sa është ∠B?', solution: '∠C = 90°, pra ∠B = 180° − 90° − 35° = 55°.' },
        ],
        commonMistakes: [
          { mistake: 'Këndi periferik merret i barabartë me këndin qendror.', fix: 'Periferiku është gjysma e qendrorit mbi të njëjtin hark.' },
          { mistake: 'Te katërkëndëshi kordal këndet e kundërta merren të barabarta.', fix: 'Ato janë plotësuese: shuma e tyre është 180°.' },
        ],
        practice: [
          { problem: 'Këndi periferik është 48°. Sa është këndi qendror mbi të njëjtin hark?', solution: '96°', steps: ['Qendrori është dyfishi.', '2 · 48° = 96°.'] },
          { problem: 'Në katërkëndëshin kordal ABCD, ∠A = 75°. Sa është ∠C?', solution: '105°', steps: ['∠A + ∠C = 180°.', '∠C = 180° − 75° = 105°.'] },
          { problem: 'O është qendra, A dhe B pika në rreth, ∠AOB = 130°. Sa është ∠OAB?', solution: '25°', steps: ['OA = OB, trekëndëshi është dybrinjënjëshëm.', '(180° − 130°) : 2 = 25°.'] },
        ],
      },
      en: {
        title: 'Circle theorems',
        objectives: ['Use the link between the angle at the centre and the angle at the circumference.', 'Use the angle in a semicircle and the angles of a cyclic quadrilateral.'],
        theory: 'An angle at the centre has its vertex at the centre; an angle at the circumference has its vertex on the circle. When they stand on the same arc, the angle at the circumference is half the angle at the centre: centre 110° → circumference 55°.\n\nConsequences:\n• Angles at the circumference on the same arc are equal.\n• The angle in a semicircle is 90°.\n• In a cyclic quadrilateral (vertices on the circle) opposite angles add up to 180°.\n\nThe radii OA = OB, so triangle OAB is always isosceles.',
        keyPoints: ['Circumference angle = centre angle ÷ 2', 'Angle in a semicircle = 90°', 'Cyclic quadrilateral: opposite angles = 180°'],
        examples: [
          { example: 'The angle at the centre on arc AB is 110°. What is the angle at the circumference on the same arc?', solution: '110° ÷ 2 = 55°.' },
          { example: 'AB is a diameter and C is a point on the circle. If ∠A = 35°, what is ∠B?', solution: '∠C = 90°, so ∠B = 180° − 90° − 35° = 55°.' },
        ],
        commonMistakes: [
          { mistake: 'The angle at the circumference is taken equal to the angle at the centre.', fix: 'It is half the angle at the centre on the same arc.' },
          { mistake: 'Opposite angles of a cyclic quadrilateral are taken as equal.', fix: 'They are supplementary: they add up to 180°.' },
        ],
        practice: [
          { problem: 'An angle at the circumference is 48°. What is the angle at the centre on the same arc?', solution: '96°', steps: ['The centre angle is double.', '2 · 48° = 96°.'] },
          { problem: 'In the cyclic quadrilateral ABCD, ∠A = 75°. What is ∠C?', solution: '105°', steps: ['∠A + ∠C = 180°.', '∠C = 180° − 75° = 105°.'] },
          { problem: 'O is the centre, A and B are on the circle, ∠AOB = 130°. What is ∠OAB?', solution: '25°', steps: ['OA = OB, the triangle is isosceles.', '(180° − 130°) ÷ 2 = 25°.'] },
        ],
      },
      de: {
        title: 'Kreiswinkelsätze',
        objectives: ['Den Zusammenhang zwischen Mittelpunktswinkel und Umfangswinkel anwenden.', 'Den Satz des Thales und die Winkel im Sehnenviereck anwenden.'],
        theory: 'Ein Mittelpunktswinkel hat seinen Scheitel im Mittelpunkt, ein Umfangswinkel auf der Kreislinie. Liegen beide über demselben Bogen, ist der Umfangswinkel halb so groß wie der Mittelpunktswinkel: Mittelpunktswinkel 110° → Umfangswinkel 55°.\n\nFolgerungen:\n• Umfangswinkel über demselben Bogen sind gleich groß.\n• Satz des Thales: Der Winkel im Halbkreis ist 90°.\n• Im Sehnenviereck (Ecken auf dem Kreis) ergeben gegenüberliegende Winkel zusammen 180°.\n\nDie Radien OA = OB, deshalb ist das Dreieck OAB immer gleichschenklig.',
        keyPoints: ['Umfangswinkel = Mittelpunktswinkel : 2', 'Thales: Winkel im Halbkreis = 90°', 'Sehnenviereck: gegenüberliegende Winkel = 180°'],
        examples: [
          { example: 'Der Mittelpunktswinkel über dem Bogen AB ist 110°. Wie groß ist der Umfangswinkel über demselben Bogen?', solution: '110° : 2 = 55°.' },
          { example: 'AB ist ein Durchmesser, C liegt auf dem Kreis. Wenn ∠A = 35° ist, wie groß ist ∠B?', solution: '∠C = 90°, also ∠B = 180° − 90° − 35° = 55°.' },
        ],
        commonMistakes: [
          { mistake: 'Der Umfangswinkel wird gleich dem Mittelpunktswinkel gesetzt.', fix: 'Er ist halb so groß wie der Mittelpunktswinkel über demselben Bogen.' },
          { mistake: 'Gegenüberliegende Winkel im Sehnenviereck werden gleich gesetzt.', fix: 'Sie ergänzen sich zu 180°.' },
        ],
        practice: [
          { problem: 'Ein Umfangswinkel ist 48°. Wie groß ist der Mittelpunktswinkel über demselben Bogen?', solution: '96°', steps: ['Der Mittelpunktswinkel ist doppelt so groß.', '2 · 48° = 96°.'] },
          { problem: 'Im Sehnenviereck ABCD ist ∠A = 75°. Wie groß ist ∠C?', solution: '105°', steps: ['∠A + ∠C = 180°.', '∠C = 180° − 75° = 105°.'] },
          { problem: 'O ist der Mittelpunkt, A und B liegen auf dem Kreis, ∠AOB = 130°. Wie groß ist ∠OAB?', solution: '25°', steps: ['OA = OB, das Dreieck ist gleichschenklig.', '(180° − 130°) : 2 = 25°.'] },
        ],
      },
    },
    // ───────── 3. Constructions and loci
    {
      slug: 'g10-circle-loci-constructions-loci',
      visuals: [{
        type: 'geoFigure', view: { xMin: -4, xMax: 4, yMin: -1.5, yMax: 3.6 }, height: 200,
        shapes: [
          { kind: 'line', through: [[0, -1], [0, 1]], color: 'secondary', dashed: true, label: 's' },
          { kind: 'segment', from: [-3, 0], to: [3, 0], color: 'ink' },
          { kind: 'segment', from: [0, 2.5], to: [-3, 0], color: 'success', ticks: 1 },
          { kind: 'segment', from: [0, 2.5], to: [3, 0], color: 'success', ticks: 1 },
          { kind: 'segment', from: [-3, 0], to: [0, 0], ticks: 2, color: 'ink' },
          { kind: 'segment', from: [0, 0], to: [3, 0], ticks: 2, color: 'ink' },
          { kind: 'angle', vertex: [0, 0], from: [3, 0], to: [0, 2], right: true, color: 'secondary' },
          { kind: 'point', at: [-3, 0], label: 'A', labelPos: 'w', color: 'ink' },
          { kind: 'point', at: [3, 0], label: 'B', labelPos: 'e', color: 'ink' },
          { kind: 'point', at: [0, 0], label: 'M', labelPos: 'se', color: 'secondary' },
          { kind: 'point', at: [0, 2.5], label: 'P', labelPos: 'ne', color: 'success' },
        ],
        caption: alt('Çdo pikë P në simetralen s të segmentit AB është njësoj larg nga A dhe B: PA = PB.', 'Every point P on the perpendicular bisector s of AB is the same distance from A and B: PA = PB.', 'Jeder Punkt P auf der Mittelsenkrechten s von AB ist von A und B gleich weit entfernt: PA = PB.'),
        alt: alt('Segmenti AB me mesin M, simetralja s pingule në M dhe pika P në të, me PA = PB.', 'Segment AB with midpoint M, the perpendicular bisector s through M, and a point P on it with PA = PB.', 'Strecke AB mit Mittelpunkt M, die Mittelsenkrechte s durch M und ein Punkt P darauf mit PA = PB.'),
      }],
      answers: {
        examples: [[['8 / 2', 4]], [['pi * 5^2', 78.54, 0.005]]],
        practice: ['text', [['70 / 2', 35]], [['3/4 * pi * 4^2', 37.7, 0.005, '37.70']]],
      },
      al: {
        title: 'Ndërtimet dhe vendet gjeometrike',
        objectives: ['Të njihni katër vendet gjeometrike bazë dhe t\'i ndërtoni me vizore e kompas.', 'Të zgjidhni probleme praktike me vendet gjeometrike.'],
        theory: 'Vendi gjeometrik është bashkësia e të gjitha pikave që plotësojnë një kusht:\n• pikat në largësi r nga pika O → rrethi me qendër O dhe rreze r;\n• pikat njësoj larg nga A dhe B → simetralja e segmentit AB (pingulja në mesin e tij);\n• pikat njësoj larg nga dy drejtëza që priten → përgjysmoret e këndeve;\n• pikat në largësi d nga një drejtëz → dy drejtëza paralele me të.\n\nSimetralja ndërtohet me kompas: nga A dhe B vizatojmë harqe me të njëjtën rreze (më shumë se AB/2) dhe bashkojmë dy pikat ku priten.',
        keyPoints: ['Largësi e njëjtë nga një pikë → rreth', 'Njësoj larg nga A dhe B → simetralja e AB', 'Njësoj larg nga dy drejtëza → përgjysmorja e këndit'],
        examples: [
          { example: 'AB = 8 cm. Ku e pret simetralja segmentin AB?', solution: 'Në mesin M të tij: AM = 8 : 2 = 4 cm.' },
          { example: 'Një dhi është lidhur me litar 5 m te një shtyllë në fushë. Sa është syprina ku mund të kullosë?', solution: 'Vendi gjeometrik është rrethi me r = 5 m: π · 5² ≈ 78,54 m².' },
        ],
        commonMistakes: [
          { mistake: 'Pikat njësoj larg nga A dhe B merren vetëm mesi i AB.', fix: 'Është e gjithë simetralja, jo vetëm një pikë.' },
          { mistake: 'Për dy drejtëza që priten përdoret simetralja e segmentit.', fix: 'Njësoj larg nga dy drejtëza → përgjysmorja e këndit midis tyre.' },
        ],
        practice: [
          { problem: 'Pika P është në simetralen e AB dhe PA = 7 cm. Sa është PB?', solution: 'PB = PA = 7 cm', steps: ['Çdo pikë e simetrales është njësoj larg nga A dhe B.', 'PB = 7 cm.'] },
          { problem: 'Përgjysmorja e ndan këndin 70° në dy pjesë. Sa është secila?', solution: '35°', steps: ['Përgjysmorja e ndan këndin në dy pjesë të barabarta.', '70° : 2 = 35°.'] },
          { problem: 'Një qen është lidhur me litar 4 m te këndi i jashtëm i një depoje drejtkëndëshe; depoja i zë 1/4 e rrethit. Sa syprinë mund të arrijë?', solution: '≈ 37,70 m²', steps: ['Mbeten 3/4 e rrethit me r = 4 m.', '3/4 · π · 16 = 12π ≈ 37,70 m².'] },
        ],
      },
      en: {
        title: 'Constructions and loci',
        objectives: ['Know the four basic loci and construct them with a ruler and compasses.', 'Solve practical problems with loci.'],
        theory: 'A locus is the set of all points that satisfy a condition:\n• points at distance r from a point O → the circle with centre O and radius r;\n• points the same distance from A and B → the perpendicular bisector of AB;\n• points the same distance from two intersecting lines → the angle bisectors;\n• points at distance d from a line → two lines parallel to it.\n\nThe perpendicular bisector is constructed with compasses: from A and from B draw arcs with the same radius (more than AB/2) and join the two points where they cross.',
        keyPoints: ['Fixed distance from a point → circle', 'Equidistant from A and B → perpendicular bisector of AB', 'Equidistant from two lines → angle bisector'],
        examples: [
          { example: 'AB = 8 cm. Where does the perpendicular bisector cross AB?', solution: 'At its midpoint M: AM = 8 ÷ 2 = 4 cm.' },
          { example: 'A goat is tied with a 5 m rope to a post in a field. What area can it graze?', solution: 'The locus is the circle with r = 5 m: π · 5² ≈ 78.54 m².' },
        ],
        commonMistakes: [
          { mistake: 'The points equidistant from A and B are taken to be only the midpoint of AB.', fix: 'It is the whole perpendicular bisector, not one point.' },
          { mistake: 'For two intersecting lines the perpendicular bisector of a segment is used.', fix: 'Equidistant from two lines → the bisector of the angle between them.' },
        ],
        practice: [
          { problem: 'P is on the perpendicular bisector of AB and PA = 7 cm. What is PB?', solution: 'PB = PA = 7 cm', steps: ['Every point on the perpendicular bisector is the same distance from A and B.', 'PB = 7 cm.'] },
          { problem: 'The bisector splits an angle of 70°. How big is each part?', solution: '35°', steps: ['The bisector splits the angle into two equal parts.', '70° ÷ 2 = 35°.'] },
          { problem: 'A dog is tied with a 4 m rope to the outside corner of a rectangular shed; the shed takes up 1/4 of the circle. What area can the dog reach?', solution: '≈ 37.70 m²', steps: ['3/4 of the circle with r = 4 m is left.', '3/4 · π · 16 = 12π ≈ 37.70 m².'] },
        ],
      },
      de: {
        title: 'Konstruktionen und Ortslinien',
        objectives: ['Die vier grundlegenden Ortslinien kennen und mit Lineal und Zirkel konstruieren.', 'Anwendungsaufgaben mit Ortslinien lösen.'],
        theory: 'Eine Ortslinie ist die Menge aller Punkte, die eine Bedingung erfüllen:\n• Punkte im Abstand r von einem Punkt O → der Kreis um O mit Radius r;\n• Punkte, die von A und B gleich weit entfernt sind → die Mittelsenkrechte von AB;\n• Punkte, die von zwei sich schneidenden Geraden gleich weit entfernt sind → die Winkelhalbierenden;\n• Punkte im Abstand d von einer Geraden → zwei Parallelen dazu.\n\nDie Mittelsenkrechte konstruiert man mit dem Zirkel: Um A und um B Kreisbögen mit gleichem Radius (größer als AB/2) zeichnen und die beiden Schnittpunkte verbinden.',
        keyPoints: ['Fester Abstand von einem Punkt → Kreis', 'Gleich weit von A und B → Mittelsenkrechte von AB', 'Gleich weit von zwei Geraden → Winkelhalbierende'],
        examples: [
          { example: 'AB = 8 cm. Wo schneidet die Mittelsenkrechte die Strecke AB?', solution: 'Im Mittelpunkt M: AM = 8 : 2 = 4 cm.' },
          { example: 'Eine Ziege ist mit einem 5 m langen Seil an einen Pfahl auf einer Wiese gebunden. Welche Fläche kann sie abgrasen?', solution: 'Die Ortslinie ist der Kreis mit r = 5 m: π · 5² ≈ 78,54 m².' },
        ],
        commonMistakes: [
          { mistake: 'Als Punkte, die von A und B gleich weit entfernt sind, wird nur der Mittelpunkt von AB genommen.', fix: 'Es ist die ganze Mittelsenkrechte, nicht nur ein Punkt.' },
          { mistake: 'Für zwei sich schneidende Geraden wird die Mittelsenkrechte einer Strecke verwendet.', fix: 'Gleich weit von zwei Geraden → die Winkelhalbierende.' },
        ],
        practice: [
          { problem: 'P liegt auf der Mittelsenkrechten von AB und PA = 7 cm. Wie lang ist PB?', solution: 'PB = PA = 7 cm', steps: ['Jeder Punkt der Mittelsenkrechten ist von A und B gleich weit entfernt.', 'PB = 7 cm.'] },
          { problem: 'Die Winkelhalbierende teilt einen 70°-Winkel. Wie groß ist jeder Teil?', solution: '35°', steps: ['Die Winkelhalbierende teilt den Winkel in zwei gleiche Teile.', '70° : 2 = 35°.'] },
          { problem: 'Ein Hund ist mit einem 4 m langen Seil an die äußere Ecke eines rechteckigen Schuppens gebunden; der Schuppen nimmt 1/4 des Kreises ein. Welche Fläche erreicht der Hund?', solution: '≈ 37,70 m²', steps: ['Es bleiben 3/4 des Kreises mit r = 4 m.', '3/4 · π · 16 = 12π ≈ 37,70 m².'] },
        ],
      },
    },
  ],
};
