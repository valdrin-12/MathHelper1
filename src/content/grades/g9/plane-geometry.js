// Grade 9 · Theme 4: Plane geometry (November–December)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g9-plane-geometry',
  i18n: {
    al: { title: 'Gjeometria në rrafsh', description: 'Aksiomat dhe teoremat, vetitë e trekëndëshit, segmentet në trekëndësh, rastet e kongruencës dhe vendet gjeometrike.' },
    en: { title: 'Plane geometry', description: 'Axioms and theorems, triangle properties, special segments in a triangle, congruence and loci.' },
    de: { title: 'Ebene Geometrie', description: 'Axiome und Sätze, Eigenschaften des Dreiecks, besondere Linien im Dreieck, Kongruenzsätze und Ortslinien.' },
  },
  lessons: [
    // ───────── 1. Axioms and theorems
    {
      slug: 'g9-plane-geometry-axioms-theorems',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3.2, xMax: 3.2, yMin: -2.2, yMax: 2.2 }, height: 180,
        shapes: [
          { kind: 'line', through: [[-3, -1.5], [3, 1.5]], color: 'primary' },
          { kind: 'line', through: [[-3, 1.2], [3, -1.2]], color: 'primary' },
          { kind: 'angle', vertex: [0, 0], from: [3, 1.5], to: [-3, 1.2], label: 'α', color: 'secondary' },
          { kind: 'angle', vertex: [0, 0], from: [-3, -1.5], to: [3, -1.2], label: 'γ', color: 'secondary' },
          { kind: 'angle', vertex: [0, 0], from: [3, -1.2], to: [3, 1.5], label: 'β', color: 'success' },
        ],
        caption: alt('α + β = 180° dhe γ + β = 180°, prandaj α = γ: këndet e kundërta në kulm janë të barabarta.', 'α + β = 180° and γ + β = 180°, so α = γ: vertically opposite angles are equal.', 'α + β = 180° und γ + β = 180°, also α = γ: Scheitelwinkel sind gleich groß.'),
        alt: alt('Dy drejtëza që priten; këndet α dhe γ përballë njëri-tjetrit, β ngjitur me të dy.', 'Two crossing lines; angles α and γ opposite each other, β next to both.', 'Zwei sich schneidende Geraden; die Winkel α und γ gegenüber, β neben beiden.'),
      }],
      answers: {
        examples: ['text', [['48 + 67', 115]]],
        practice: [[['50 + 60', 110]], [['180 - 35', 145]], [['72', 72]]],
      },
      al: {
        title: 'Aksiomat dhe teoremat',
        objectives: ['Të dalloni kushtin, përfundimin dhe vërtetimin e një teoreme.', 'Të vërtetoni teorema të thjeshta për këndet.'],
        theory: 'Teorema ka kushtin (çfarë dimë) dhe përfundimin (çfarë duhet treguar). Vërtetimi është zinxhir arsyetimesh ku çdo hap mbështetet në një aksiomë, përkufizim ose teoremë të vërtetuar më parë.\n\nShembull: këndet e kundërta në kulm janë të barabarta. Vërtetim: α + β = 180° dhe γ + β = 180° (kënde shtuese), prandaj α = 180° − β = γ.\n\nKëndi i jashtëm i trekëndëshit është sa shuma e dy këndeve të brendshme jo fqinje: nëse ∠A = 48° dhe ∠B = 67°, këndi i jashtëm te C është 115°.',
        keyPoints: ['Kusht → arsyetim → përfundim', 'Këndet e kundërta në kulm janë të barabarta', 'Këndi i jashtëm = shuma e dy të brendshmeve jo fqinje'],
        examples: [
          { example: 'Vërtetoni që këndet e kundërta në kulm janë të barabarta.', solution: 'α + β = 180° dhe γ + β = 180°; duke zbritur β: α = γ.' },
          { example: 'Në △ABC, ∠A = 48° dhe ∠B = 67°. Sa është këndi i jashtëm te C?', solution: '48° + 67° = 115°.' },
        ],
        commonMistakes: [
          { mistake: 'Vërtetim me matje në vizatim.', fix: 'Matja jep vetëm një rast; vërtetimi duhet të vlejë për çdo figurë.' },
        ],
        practice: [
          { problem: '∠A = 50°, ∠B = 60°. Gjeni këndin e jashtëm te C.', solution: '110°', steps: ['Këndi i jashtëm = ∠A + ∠B.', '50 + 60 = 110°.'] },
          { problem: 'Sa është këndi shtues i 35°?', solution: '145°', steps: ['180 − 35.', '= 145°.'] },
          { problem: 'Një kënd është 72°. Sa është këndi i kundërt në kulm?', solution: '72°', steps: ['Këndet e kundërta janë të barabarta.', '72°.'] },
        ],
      },
      en: {
        title: 'Axioms and theorems',
        objectives: ['Identify the hypothesis, conclusion and proof of a theorem.', 'Prove simple theorems about angles.'],
        theory: 'A theorem has a hypothesis (what we know) and a conclusion (what must be shown). A proof is a chain of reasoning where each step rests on an axiom, a definition or a theorem proved earlier.\n\nExample: vertically opposite angles are equal. Proof: α + β = 180° and γ + β = 180° (angles on a line), so α = 180° − β = γ.\n\nAn exterior angle of a triangle equals the sum of the two interior angles not next to it: if ∠A = 48° and ∠B = 67°, the exterior angle at C is 115°.',
        keyPoints: ['Hypothesis → reasoning → conclusion', 'Vertically opposite angles are equal', 'Exterior angle = sum of the two opposite interior angles'],
        examples: [
          { example: 'Prove that vertically opposite angles are equal.', solution: 'α + β = 180° and γ + β = 180°; subtracting β: α = γ.' },
          { example: 'In △ABC, ∠A = 48° and ∠B = 67°. What is the exterior angle at C?', solution: '48° + 67° = 115°.' },
        ],
        commonMistakes: [
          { mistake: 'Proving by measuring a drawing.', fix: 'Measuring gives one case only; a proof must work for every figure.' },
        ],
        practice: [
          { problem: '∠A = 50°, ∠B = 60°. Find the exterior angle at C.', solution: '110°', steps: ['Exterior angle = ∠A + ∠B.', '50 + 60 = 110°.'] },
          { problem: 'What is the supplement of 35°?', solution: '145°', steps: ['180 − 35.', '= 145°.'] },
          { problem: 'An angle is 72°. What is the vertically opposite angle?', solution: '72°', steps: ['Vertically opposite angles are equal.', '72°.'] },
        ],
      },
      de: {
        title: 'Axiome und Sätze',
        objectives: ['Voraussetzung, Behauptung und Beweis eines Satzes unterscheiden.', 'Einfache Winkelsätze beweisen.'],
        theory: 'Ein Satz hat eine Voraussetzung (was bekannt ist) und eine Behauptung (was zu zeigen ist). Ein Beweis ist eine Kette von Schlüssen, die sich auf Axiome, Definitionen oder bereits bewiesene Sätze stützt.\n\nBeispiel: Scheitelwinkel sind gleich groß. Beweis: α + β = 180° und γ + β = 180° (Nebenwinkel), also α = 180° − β = γ.\n\nEin Außenwinkel eines Dreiecks ist so groß wie die Summe der beiden nicht anliegenden Innenwinkel: Ist ∠A = 48° und ∠B = 67°, so ist der Außenwinkel bei C 115°.',
        keyPoints: ['Voraussetzung → Schlüsse → Behauptung', 'Scheitelwinkel sind gleich groß', 'Außenwinkel = Summe der zwei nicht anliegenden Innenwinkel'],
        examples: [
          { example: 'Beweisen Sie, dass Scheitelwinkel gleich groß sind.', solution: 'α + β = 180° und γ + β = 180°; β abziehen: α = γ.' },
          { example: 'Im △ABC ist ∠A = 48° und ∠B = 67°. Wie groß ist der Außenwinkel bei C?', solution: '48° + 67° = 115°.' },
        ],
        commonMistakes: [
          { mistake: 'Beweisen durch Messen in der Zeichnung.', fix: 'Messen zeigt nur einen Fall; ein Beweis muss für jede Figur gelten.' },
        ],
        practice: [
          { problem: '∠A = 50°, ∠B = 60°. Bestimmen Sie den Außenwinkel bei C.', solution: '110°', steps: ['Außenwinkel = ∠A + ∠B.', '50 + 60 = 110°.'] },
          { problem: 'Wie groß ist der Nebenwinkel von 35°?', solution: '145°', steps: ['180 − 35.', '= 145°.'] },
          { problem: 'Ein Winkel ist 72°. Wie groß ist sein Scheitelwinkel?', solution: '72°', steps: ['Scheitelwinkel sind gleich groß.', '72°.'] },
        ],
      },
    },

    // ───────── 2. Properties of the triangle
    {
      slug: 'g9-plane-geometry-triangle-properties',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 7.2, yMin: -0.8, yMax: 4.2 }, height: 190,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [6.5, 0], [2.6, 3.6]], fill: true, color: 'primary' },
          { kind: 'angle', vertex: [0, 0], from: [6.5, 0], to: [2.6, 3.6], label: '48°', color: 'secondary' },
          { kind: 'angle', vertex: [6.5, 0], from: [2.6, 3.6], to: [0, 0], label: '67°', color: 'success' },
          { kind: 'angle', vertex: [2.6, 3.6], from: [0, 0], to: [6.5, 0], label: '65°', color: 'purple' },
        ],
        caption: alt('Shuma e këndeve të trekëndëshit është 180°: 48° + 67° + 65° = 180°.', 'The angles of a triangle add up to 180°: 48° + 67° + 65° = 180°.', 'Die Innenwinkel eines Dreiecks ergeben 180°: 48° + 67° + 65° = 180°.'),
        alt: alt('Trekëndësh me kënde 48°, 67° dhe 65°.', 'A triangle with angles 48°, 67° and 65°.', 'Ein Dreieck mit den Winkeln 48°, 67° und 65°.'),
      }],
      answers: {
        examples: [[['180 - 48 - 67', 65]], [['3 + 4', 7]]],
        practice: [[['9 - 5', 4], ['9 + 5', 14]], [['180 - 2 * 72', 36]], [['180 / 6', 30], ['2 * 30', 60], ['3 * 30', 90]]],
      },
      al: {
        title: 'Vetitë e trekëndëshit',
        objectives: ['Të përdorni shumën e këndeve dhe mosbarazimin e trekëndëshit.', 'Të lidhni brinjët me këndet përballë tyre.'],
        theory: 'Shuma e këndeve të brendshme të trekëndëshit është 180°. Përballë brinjës më të madhe ndodhet këndi më i madh, dhe anasjelltas.\n\nMosbarazimi i trekëndëshit: çdo brinjë është më e vogël se shuma e dy të tjerave dhe më e madhe se ndryshimi i tyre. Me brinjët 5 dhe 9, brinja e tretë c plotëson 4 < c < 14. Numrat 3, 4, 8 nuk formojnë trekëndësh, sepse 3 + 4 < 8.\n\nNë trekëndëshin barakrahës këndet e bazës janë të barabarta; në atë barabrinjës të gjitha këndet janë 60°.',
        keyPoints: ['α + β + γ = 180°', '|a − b| < c < a + b', 'Brinja më e madhe ↔ këndi më i madh'],
        examples: [
          { example: 'Dy kënde të trekëndëshit janë 48° dhe 67°. Sa është i treti?', solution: '180° − 48° − 67° = 65°.' },
          { example: 'A ekziston trekëndësh me brinjë 3, 4, 8?', solution: 'Jo: 3 + 4 = 7 < 8.' },
        ],
        commonMistakes: [
          { mistake: 'Çdo tre numra pozitivë janë brinjë trekëndëshi.', fix: 'Kontrolloni: shuma e dy më të voglave duhet të jetë më e madhe se e treta.' },
        ],
        practice: [
          { problem: 'Dy brinjë janë 5 cm dhe 9 cm. Brenda cilave kufij është e treta?', solution: '4 cm < c < 14 cm', steps: ['9 − 5 = 4; 9 + 5 = 14.', '4 < c < 14.'] },
          { problem: 'Në trekëndëshin barakrahës këndi i bazës është 72°. Sa është këndi në kulm?', solution: '36°', steps: ['180 − 2 · 72.', '= 36°.'] },
          { problem: 'Këndet janë në raportin 1 : 2 : 3. Gjeni ato.', solution: '30°, 60°, 90°', steps: ['1 + 2 + 3 = 6 pjesë; 180 : 6 = 30.', '30°, 60°, 90°.'] },
        ],
      },
      en: {
        title: 'Properties of the triangle',
        objectives: ['Use the angle sum and the triangle inequality.', 'Relate sides to the angles opposite them.'],
        theory: 'The interior angles of a triangle add up to 180°. The largest angle is opposite the longest side, and vice versa.\n\nTriangle inequality: each side is shorter than the sum of the other two and longer than their difference. With sides 5 and 9, the third side c satisfies 4 < c < 14. The numbers 3, 4, 8 do not form a triangle, because 3 + 4 < 8.\n\nIn an isosceles triangle the base angles are equal; in an equilateral one all angles are 60°.',
        keyPoints: ['α + β + γ = 180°', '|a − b| < c < a + b', 'Longest side ↔ largest angle'],
        examples: [
          { example: 'Two angles of a triangle are 48° and 67°. What is the third?', solution: '180° − 48° − 67° = 65°.' },
          { example: 'Is there a triangle with sides 3, 4, 8?', solution: 'No: 3 + 4 = 7 < 8.' },
        ],
        commonMistakes: [
          { mistake: 'Any three positive numbers can be the sides of a triangle.', fix: 'Check: the two smaller ones must add up to more than the third.' },
        ],
        practice: [
          { problem: 'Two sides are 5 cm and 9 cm. Between which limits is the third?', solution: '4 cm < c < 14 cm', steps: ['9 − 5 = 4; 9 + 5 = 14.', '4 < c < 14.'] },
          { problem: 'In an isosceles triangle the base angle is 72°. What is the apex angle?', solution: '36°', steps: ['180 − 2 · 72.', '= 36°.'] },
          { problem: 'The angles are in the ratio 1 : 2 : 3. Find them.', solution: '30°, 60°, 90°', steps: ['1 + 2 + 3 = 6 parts; 180 ÷ 6 = 30.', '30°, 60°, 90°.'] },
        ],
      },
      de: {
        title: 'Eigenschaften des Dreiecks',
        objectives: ['Winkelsumme und Dreiecksungleichung anwenden.', 'Seiten mit den gegenüberliegenden Winkeln in Beziehung setzen.'],
        theory: 'Die Innenwinkel eines Dreiecks ergeben 180°. Der größten Seite liegt der größte Winkel gegenüber und umgekehrt.\n\nDreiecksungleichung: Jede Seite ist kürzer als die Summe und länger als die Differenz der beiden anderen. Bei den Seiten 5 und 9 gilt für die dritte Seite 4 < c < 14. Die Zahlen 3, 4, 8 bilden kein Dreieck, denn 3 + 4 < 8.\n\nIm gleichschenkligen Dreieck sind die Basiswinkel gleich; im gleichseitigen sind alle Winkel 60°.',
        keyPoints: ['α + β + γ = 180°', '|a − b| < c < a + b', 'Größte Seite ↔ größter Winkel'],
        examples: [
          { example: 'Zwei Winkel eines Dreiecks sind 48° und 67°. Wie groß ist der dritte?', solution: '180° − 48° − 67° = 65°.' },
          { example: 'Gibt es ein Dreieck mit den Seiten 3, 4, 8?', solution: 'Nein: 3 + 4 = 7 < 8.' },
        ],
        commonMistakes: [
          { mistake: 'Drei beliebige positive Zahlen sind Seiten eines Dreiecks.', fix: 'Prüfen: Die zwei kleineren müssen zusammen größer als die dritte sein.' },
        ],
        practice: [
          { problem: 'Zwei Seiten sind 5 cm und 9 cm lang. Zwischen welchen Grenzen liegt die dritte?', solution: '4 cm < c < 14 cm', steps: ['9 − 5 = 4; 9 + 5 = 14.', '4 < c < 14.'] },
          { problem: 'Im gleichschenkligen Dreieck ist ein Basiswinkel 72°. Wie groß ist der Winkel an der Spitze?', solution: '36°', steps: ['180 − 2 · 72.', '= 36°.'] },
          { problem: 'Die Winkel stehen im Verhältnis 1 : 2 : 3. Bestimmen Sie sie.', solution: '30°, 60°, 90°', steps: ['1 + 2 + 3 = 6 Teile; 180 : 6 = 30.', '30°, 60°, 90°.'] },
        ],
      },
    },

    // ───────── 3. Segments in a triangle
    {
      slug: 'g9-plane-geometry-triangle-segments',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 7.6, yMin: -0.8, yMax: 5.4 }, height: 210,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [7, 0], [2, 5]], fill: true, color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [4.5, 2.5], color: 'secondary', dashed: true },
          { kind: 'segment', from: [7, 0], to: [1, 2.5], color: 'secondary', dashed: true },
          { kind: 'segment', from: [2, 5], to: [3.5, 0], color: 'secondary', dashed: true },
          { kind: 'point', at: [3, 1.667], label: 'G', labelPos: 'e', color: 'secondary' },
          { kind: 'label', at: [-0.3, -0.4], text: 'A' }, { kind: 'label', at: [7.3, -0.4], text: 'B' }, { kind: 'label', at: [2, 5.25], text: 'C' },
        ],
        caption: alt('Tri mesoret priten në qendrën e rëndesës G, që i ndan ato në raportin 2 : 1 nga kulmi.', 'The three medians meet at the centroid G, which divides each in the ratio 2 : 1 from the vertex.', 'Die drei Seitenhalbierenden schneiden sich im Schwerpunkt G, der sie im Verhältnis 2 : 1 (von der Ecke aus) teilt.'),
        alt: alt('Trekëndësh ABC me tri mesoret me vija të ndërprera që priten në G.', 'Triangle ABC with its three medians dashed, meeting at G.', 'Dreieck ABC mit den drei gestrichelten Seitenhalbierenden, die sich in G schneiden.'),
      }],
      answers: {
        examples: [[['12 * 2 / 3', 8]], [['10 / 2', 5]]],
        practice: [[['15 / 3', 5]], [['7 * 2', 14]], [['6 * sqrt(3) / 2', 5.2, 0.05, '5.2']]],
      },
      al: {
        title: 'Segmentet në trekëndësh',
        objectives: ['Të dalloni mesoren, lartësinë, përgjysmoren e këndit dhe simetralen.', 'Të përdorni vetinë e qendrës së rëndesës dhe të vijës së mesme.'],
        theory: 'Mesorja lidh një kulm me mesin e brinjës përballë; tri mesoret priten në qendrën e rëndesës G, që e ndan secilën në raportin 2 : 1 nga kulmi. Lartësia është pingulja nga kulmi te brinja përballë. Përgjysmorja e këndit e ndan këndin në dy pjesë të barabarta. Simetralja e brinjës është pingulja në mesin e saj.\n\nVija e mesme lidh meset e dy brinjëve; ajo është paralele me brinjën e tretë dhe sa gjysma e saj.\n\nNë trekëndëshin barabrinjës me brinjë a, lartësia është a√3/2 dhe të katër segmentet nga një kulm përputhen.',
        keyPoints: ['G ndan mesoren 2 : 1', 'Vija e mesme ∥ brinjës së tretë dhe = gjysma e saj', 'Barabrinjës: h = a√3/2'],
        examples: [
          { example: 'Mesorja ka gjatësi 12 cm. Sa larg nga kulmi është qendra e rëndesës?', solution: '2/3 · 12 = 8 cm.' },
          { example: 'Brinja AB = 10 cm. Sa është vija e mesme paralele me AB?', solution: '10 : 2 = 5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Qendra e rëndesës është në mesin e mesores.', fix: 'Ajo e ndan mesoren 2 : 1: dy të tretat nga kulmi.' },
          { mistake: 'Lartësia dhe mesorja janë gjithmonë e njëjta.', fix: 'Përputhen vetëm në trekëndësha barakrahës (nga kulmi) dhe barabrinjës.' },
        ],
        practice: [
          { problem: 'Mesorja ka 15 cm. Sa është largësia nga G te mesi i brinjës?', solution: '5 cm', steps: ['Një e treta e mesores.', '15 : 3 = 5 cm.'] },
          { problem: 'Vija e mesme është 7 cm. Sa është brinja paralele me të?', solution: '14 cm', steps: ['Brinja = 2 · vija e mesme.', '14 cm.'] },
          { problem: 'Gjeni lartësinë e trekëndëshit barabrinjës me brinjë 6 cm.', solution: '3√3 ≈ 5,2 cm', steps: ['h = 6√3/2.', '= 3√3 ≈ 5,2 cm.'] },
        ],
      },
      en: {
        title: 'Segments in a triangle',
        objectives: ['Tell the median, altitude, angle bisector and perpendicular bisector apart.', 'Use the properties of the centroid and the midsegment.'],
        theory: 'A median joins a vertex to the midpoint of the opposite side; the three medians meet at the centroid G, which divides each in the ratio 2 : 1 from the vertex. An altitude is the perpendicular from a vertex to the opposite side. An angle bisector splits an angle into two equal parts. The perpendicular bisector of a side is perpendicular to it at its midpoint.\n\nA midsegment joins the midpoints of two sides; it is parallel to the third side and half as long.\n\nIn an equilateral triangle with side a the altitude is a√3/2, and all four segments from one vertex coincide.',
        keyPoints: ['G divides each median 2 : 1', 'Midsegment ∥ third side and = half of it', 'Equilateral: h = a√3/2'],
        examples: [
          { example: 'A median is 12 cm long. How far from the vertex is the centroid?', solution: '2/3 · 12 = 8 cm.' },
          { example: 'Side AB = 10 cm. How long is the midsegment parallel to AB?', solution: '10 ÷ 2 = 5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'The centroid is at the middle of the median.', fix: 'It divides the median 2 : 1: two thirds from the vertex.' },
          { mistake: 'Altitude and median are always the same.', fix: 'They coincide only in isosceles (from the apex) and equilateral triangles.' },
        ],
        practice: [
          { problem: 'A median is 15 cm. How far is G from the midpoint of the side?', solution: '5 cm', steps: ['One third of the median.', '15 ÷ 3 = 5 cm.'] },
          { problem: 'A midsegment is 7 cm. How long is the side parallel to it?', solution: '14 cm', steps: ['Side = 2 · midsegment.', '14 cm.'] },
          { problem: 'Find the altitude of an equilateral triangle with side 6 cm.', solution: '3√3 ≈ 5.2 cm', steps: ['h = 6√3/2.', '= 3√3 ≈ 5.2 cm.'] },
        ],
      },
      de: {
        title: 'Besondere Linien im Dreieck',
        objectives: ['Seitenhalbierende, Höhe, Winkelhalbierende und Mittelsenkrechte unterscheiden.', 'Eigenschaften von Schwerpunkt und Mittellinie nutzen.'],
        theory: 'Eine Seitenhalbierende verbindet eine Ecke mit dem Mittelpunkt der gegenüberliegenden Seite; die drei schneiden sich im Schwerpunkt G, der jede im Verhältnis 2 : 1 (von der Ecke aus) teilt. Eine Höhe ist das Lot von einer Ecke auf die gegenüberliegende Seite. Eine Winkelhalbierende teilt einen Winkel in zwei gleiche Teile. Die Mittelsenkrechte steht im Mittelpunkt senkrecht auf einer Seite.\n\nEine Mittellinie verbindet die Mittelpunkte zweier Seiten; sie ist parallel zur dritten Seite und halb so lang.\n\nIm gleichseitigen Dreieck mit Seite a ist die Höhe a√3/2, und alle vier Linien von einer Ecke fallen zusammen.',
        keyPoints: ['G teilt die Seitenhalbierende 2 : 1', 'Mittellinie ∥ dritter Seite und halb so lang', 'Gleichseitig: h = a√3/2'],
        examples: [
          { example: 'Eine Seitenhalbierende ist 12 cm lang. Wie weit ist der Schwerpunkt von der Ecke entfernt?', solution: '2/3 · 12 = 8 cm.' },
          { example: 'Die Seite AB ist 10 cm lang. Wie lang ist die zu AB parallele Mittellinie?', solution: '10 : 2 = 5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Der Schwerpunkt liegt in der Mitte der Seitenhalbierenden.', fix: 'Er teilt sie 2 : 1: zwei Drittel von der Ecke aus.' },
          { mistake: 'Höhe und Seitenhalbierende sind immer gleich.', fix: 'Sie fallen nur im gleichschenkligen (von der Spitze) und im gleichseitigen Dreieck zusammen.' },
        ],
        practice: [
          { problem: 'Eine Seitenhalbierende ist 15 cm lang. Wie weit ist G vom Seitenmittelpunkt entfernt?', solution: '5 cm', steps: ['Ein Drittel der Seitenhalbierenden.', '15 : 3 = 5 cm.'] },
          { problem: 'Eine Mittellinie ist 7 cm lang. Wie lang ist die dazu parallele Seite?', solution: '14 cm', steps: ['Seite = 2 · Mittellinie.', '14 cm.'] },
          { problem: 'Bestimmen Sie die Höhe eines gleichseitigen Dreiecks mit 6 cm Seitenlänge.', solution: '3√3 ≈ 5,2 cm', steps: ['h = 6√3/2.', '= 3√3 ≈ 5,2 cm.'] },
        ],
      },
    },

    // ───────── 4. Congruence
    {
      slug: 'g9-plane-geometry-congruence',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 8.2, yMin: -0.8, yMax: 3.8 }, height: 180,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [5, 0], [7, 3], [2, 3]], fill: true, color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [7, 3], color: 'secondary', dashed: true },
          { kind: 'segment', from: [0, 0], to: [5, 0], ticks: 1, color: 'ink' }, { kind: 'segment', from: [2, 3], to: [7, 3], ticks: 1, color: 'ink' },
          { kind: 'segment', from: [5, 0], to: [7, 3], ticks: 2, color: 'ink' }, { kind: 'segment', from: [0, 0], to: [2, 3], ticks: 2, color: 'ink' },
          { kind: 'label', at: [-0.3, -0.4], text: 'A' }, { kind: 'label', at: [5.3, -0.4], text: 'B' }, { kind: 'label', at: [7.3, 3.3], text: 'C' }, { kind: 'label', at: [1.8, 3.3], text: 'D' },
        ],
        caption: alt('Diagonalja AC e ndan paralelogramin në △ABC dhe △CDA: AB = CD, BC = DA, AC e përbashkët → BBB.', 'The diagonal AC splits the parallelogram into △ABC and △CDA: AB = CD, BC = DA, AC common → SSS.', 'Die Diagonale AC teilt das Parallelogramm in △ABC und △CDA: AB = CD, BC = DA, AC gemeinsam → SSS.'),
        alt: alt('Paralelogram ABCD me diagonalen AC; brinjët e kundërta të shënuara si të barabarta.', 'Parallelogram ABCD with diagonal AC; opposite sides marked equal.', 'Parallelogramm ABCD mit Diagonale AC; gegenüberliegende Seiten als gleich markiert.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', [['180 - 50 - 60', 70]]],
      },
      al: {
        title: 'Tre rastet e kongruencës',
        objectives: ['Të zbatoni rastet BBB, BKB dhe KBK.', 'Të shkruani vërtetime të shkurtra me kongruencë.'],
        theory: 'Dy trekëndësha janë kongruentë nëse plotësohet një nga rastet: BBB (tri brinjë përkatësisht të barabarta), BKB (dy brinjë dhe këndi ndërmjet tyre), KBK (një brinjë dhe dy këndet anash saj).\n\nNë vërtetim shkruajmë tre barazimet, emrin e rastit dhe përfundimin. Nga kongruenca dalin barazime të reja: elementet përkatëse janë të barabarta.\n\nShembull: diagonalja AC e paralelogramit ABCD: AB = CD dhe BC = DA (brinjë të kundërta), AC e përbashkët, pra △ABC ≅ △CDA sipas BBB.',
        keyPoints: ['BBB, BKB, KBK', 'Te BKB këndi është ndërmjet dy brinjëve', 'Elementet përkatëse janë të barabarta'],
        examples: [
          { example: 'Cili rast përdoret kur njihen dy brinjë dhe këndi ndërmjet tyre?', solution: 'BKB.' },
          { example: 'Vërtetoni që diagonalja AC e ndan paralelogramin ABCD në dy trekëndësha kongruentë.', solution: 'AB = CD, BC = DA (brinjët e kundërta të paralelogramit), AC e përbashkët → △ABC ≅ △CDA (BBB).' },
        ],
        commonMistakes: [
          { mistake: 'Dy brinjë dhe një kënd çfarëdo mjaftojnë.', fix: 'Këndi duhet të jetë ndërmjet dy brinjëve (BKB).' },
        ],
        practice: [
          { problem: 'Në △ABC dhe △DEF: ∠A = ∠D, AB = DE, ∠B = ∠E. Cili rast?', solution: 'KBK', steps: ['Brinja AB ndërmjet këndeve A dhe B.', 'KBK.'] },
          { problem: 'Pse përgjysmorja e këndit në kulm të trekëndëshit barakrahës e ndan atë në dy trekëndësha kongruentë?', solution: 'BKB', steps: ['Krahët të barabartë, këndet gjysmë të barabarta.', 'Përgjysmorja e përbashkët → BKB.'] },
          { problem: '△ABC ≅ △DEF, ∠A = 50°, ∠E = 60°. Gjeni ∠F.', solution: '70°', steps: ['∠D = 50°, ∠E = 60°.', '∠F = 180 − 50 − 60 = 70°.'] },
        ],
      },
      en: {
        title: 'The three congruence criteria',
        objectives: ['Apply the SSS, SAS and ASA criteria.', 'Write short proofs using congruence.'],
        theory: 'Two triangles are congruent if one of the criteria holds: SSS (three sides equal in pairs), SAS (two sides and the angle between them), ASA (one side and the two angles next to it).\n\nIn a proof we write the three equalities, the name of the criterion and the conclusion. Congruence then gives new equalities: corresponding parts are equal.\n\nExample: the diagonal AC of parallelogram ABCD: AB = CD and BC = DA (opposite sides), AC is common, so △ABC ≅ △CDA by SSS.',
        keyPoints: ['SSS, SAS, ASA', 'In SAS the angle is between the two sides', 'Corresponding parts are equal'],
        examples: [
          { example: 'Which criterion is used when two sides and the angle between them are known?', solution: 'SAS.' },
          { example: 'Prove that the diagonal AC divides parallelogram ABCD into two congruent triangles.', solution: 'AB = CD, BC = DA (opposite sides of a parallelogram), AC common → △ABC ≅ △CDA (SSS).' },
        ],
        commonMistakes: [
          { mistake: 'Two sides and any angle are enough.', fix: 'The angle must be between the two sides (SAS).' },
        ],
        practice: [
          { problem: 'In △ABC and △DEF: ∠A = ∠D, AB = DE, ∠B = ∠E. Which criterion?', solution: 'ASA', steps: ['Side AB lies between angles A and B.', 'ASA.'] },
          { problem: 'Why does the bisector of the apex angle split an isosceles triangle into two congruent triangles?', solution: 'SAS', steps: ['Equal sides, equal half-angles.', 'The bisector is common → SAS.'] },
          { problem: '△ABC ≅ △DEF, ∠A = 50°, ∠E = 60°. Find ∠F.', solution: '70°', steps: ['∠D = 50°, ∠E = 60°.', '∠F = 180 − 50 − 60 = 70°.'] },
        ],
      },
      de: {
        title: 'Die drei Kongruenzsätze',
        objectives: ['Die Kongruenzsätze SSS, SWS und WSW anwenden.', 'Kurze Beweise mit Kongruenz führen.'],
        theory: 'Zwei Dreiecke sind kongruent, wenn ein Kongruenzsatz erfüllt ist: SSS (drei Seiten paarweise gleich), SWS (zwei Seiten und der eingeschlossene Winkel), WSW (eine Seite und die beiden anliegenden Winkel).\n\nIm Beweis notiert man die drei Gleichheiten, den Kongruenzsatz und die Folgerung. Aus der Kongruenz folgen neue Gleichheiten: Entsprechende Stücke sind gleich.\n\nBeispiel: Die Diagonale AC des Parallelogramms ABCD: AB = CD und BC = DA (gegenüberliegende Seiten), AC gemeinsam, also △ABC ≅ △CDA nach SSS.',
        keyPoints: ['SSS, SWS, WSW', 'Bei SWS liegt der Winkel zwischen den Seiten', 'Entsprechende Stücke sind gleich'],
        examples: [
          { example: 'Welcher Satz gilt, wenn zwei Seiten und der eingeschlossene Winkel bekannt sind?', solution: 'SWS.' },
          { example: 'Beweisen Sie, dass die Diagonale AC das Parallelogramm ABCD in zwei kongruente Dreiecke teilt.', solution: 'AB = CD, BC = DA (Gegenseiten), AC gemeinsam → △ABC ≅ △CDA (SSS).' },
        ],
        commonMistakes: [
          { mistake: 'Zwei Seiten und irgendein Winkel genügen.', fix: 'Der Winkel muss von den beiden Seiten eingeschlossen sein (SWS).' },
        ],
        practice: [
          { problem: 'In △ABC und △DEF gilt: ∠A = ∠D, AB = DE, ∠B = ∠E. Welcher Satz?', solution: 'WSW', steps: ['Die Seite AB liegt zwischen den Winkeln A und B.', 'WSW.'] },
          { problem: 'Warum teilt die Winkelhalbierende des Winkels an der Spitze ein gleichschenkliges Dreieck in zwei kongruente Dreiecke?', solution: 'SWS', steps: ['Gleiche Schenkel, gleiche halbe Winkel.', 'Die Winkelhalbierende ist gemeinsam → SWS.'] },
          { problem: '△ABC ≅ △DEF, ∠A = 50°, ∠E = 60°. Bestimmen Sie ∠F.', solution: '70°', steps: ['∠D = 50°, ∠E = 60°.', '∠F = 180 − 50 − 60 = 70°.'] },
        ],
      },
    },

    // ───────── 5. Loci
    {
      slug: 'g9-plane-geometry-loci',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1, xMax: 7, yMin: -2, yMax: 4.5 }, grid: true, axes: true, height: 220,
        shapes: [
          { kind: 'line', through: [[3, -2], [3, 4]], color: 'secondary', dashed: true, label: 'x = 3' },
          { kind: 'segment', from: [0, 0], to: [6, 0], color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [3, 3], color: 'muted' }, { kind: 'segment', from: [6, 0], to: [3, 3], color: 'muted' },
          { kind: 'point', at: [0, 0], label: 'A', labelPos: 'sw' }, { kind: 'point', at: [6, 0], label: 'B', labelPos: 'se' },
          { kind: 'point', at: [3, 3], label: 'P', labelPos: 'ne', color: 'secondary' },
        ],
        caption: alt('Pikat që janë njësoj larg nga A dhe B formojnë simetralen e AB: këtu drejtëzën x = 3. P(3, 3) ka PA = PB.', 'The points equally far from A and B form the perpendicular bisector of AB: here the line x = 3. P(3, 3) has PA = PB.', 'Die Punkte mit gleichem Abstand zu A und B bilden die Mittelsenkrechte von AB: hier die Gerade x = 3. P(3 | 3) hat PA = PB.'),
        alt: alt('Segmenti AB nga (0, 0) te (6, 0), simetralja x = 3 dhe pika P(3, 3) me PA = PB.', 'Segment AB from (0, 0) to (6, 0), its perpendicular bisector x = 3 and the point P(3, 3) with PA = PB.', 'Strecke AB von (0 | 0) bis (6 | 0), die Mittelsenkrechte x = 3 und der Punkt P(3 | 3) mit PA = PB.'),
      }],
      answers: {
        examples: [[['3', 3]], [['(0 + 6) / 2', 3]]],
        practice: [[['(1 + 7) / 2', 4]], 'text', 'text'],
      },
      al: {
        title: 'Vendet gjeometrike',
        objectives: ['Të përshkruani vendet gjeometrike bazë.', 'T\'i përdorni ato për të gjetur pika me kushte të dhëna.'],
        theory: 'Vendi gjeometrik është bashkësia e të gjitha pikave që plotësojnë një kusht. Rrethi: pikat në largësi r nga një pikë O. Simetralja e segmentit AB: pikat njësoj larg nga A dhe B. Përgjysmorja e këndit: pikat njësoj larg nga dy krahët e tij.\n\nPikat në largësi d nga një drejtëz formojnë dy drejtëza paralele me të, një në secilën anë.\n\nPrerja e vendeve gjeometrike jep pika me disa kushte njëherësh: simetralet e brinjëve të trekëndëshit priten në qendrën e rrethit të jashtëshkruar, që është njësoj larg nga të tri kulmet.',
        keyPoints: ['Rrethi: largësi r nga O', 'Simetralja: PA = PB', 'Përgjysmorja: njësoj larg nga krahët'],
        examples: [
          { example: 'Cili është vendi gjeometrik i pikave 3 cm larg nga pika O?', solution: 'Rrethi me qendër O dhe rreze 3 cm.' },
          { example: 'A(0, 0), B(6, 0). Cili është vendi gjeometrik i pikave njësoj larg nga A dhe B?', solution: 'Simetralja e AB: drejtëza vertikale nëpër mesin (3, 0), pra x = 3.' },
        ],
        commonMistakes: [
          { mistake: 'Pikat njësoj larg nga A dhe B janë vetëm mesi i AB.', fix: 'Mesi është vetëm njëra prej tyre; të gjitha së bashku formojnë simetralen.' },
        ],
        practice: [
          { problem: 'A(2, 1), B(2, 7). Gjeni vendin gjeometrik të pikave njësoj larg nga A dhe B.', solution: 'Drejtëza y = 4', steps: ['Mesi: (2, 4).', 'AB është vertikal, simetralja horizontale: y = 4.'] },
          { problem: 'Ku ndodhet pika njësoj larg nga tri kulmet e trekëndëshit?', solution: 'Në prerjen e simetraleve', steps: ['Çdo simetrale jep largësi të barabarta nga dy kulme.', 'Prerja: qendra e rrethit të jashtëshkruar.'] },
          { problem: 'Cili është vendi gjeometrik i pikave 2 cm larg nga një drejtëz a?', solution: 'Dy drejtëza paralele me a', steps: ['Një në secilën anë të a.', 'Secila në largësi 2 cm.'] },
        ],
      },
      en: {
        title: 'Loci',
        objectives: ['Describe the basic loci.', 'Use them to find points that satisfy given conditions.'],
        theory: 'A locus is the set of all points that satisfy a condition. Circle: the points at distance r from a point O. Perpendicular bisector of AB: the points equally far from A and B. Angle bisector: the points equally far from its two arms.\n\nThe points at distance d from a line form two lines parallel to it, one on each side.\n\nIntersecting loci gives points with several conditions at once: the perpendicular bisectors of the sides of a triangle meet at the centre of the circumscribed circle, which is equally far from all three vertices.',
        keyPoints: ['Circle: distance r from O', 'Perpendicular bisector: PA = PB', 'Angle bisector: equally far from the arms'],
        examples: [
          { example: 'What is the locus of points 3 cm from a point O?', solution: 'The circle with centre O and radius 3 cm.' },
          { example: 'A(0, 0), B(6, 0). What is the locus of points equally far from A and B?', solution: 'The perpendicular bisector of AB: the vertical line through the midpoint (3, 0), i.e. x = 3.' },
        ],
        commonMistakes: [
          { mistake: 'The points equally far from A and B are only the midpoint of AB.', fix: 'The midpoint is just one of them; together they form the perpendicular bisector.' },
        ],
        practice: [
          { problem: 'A(2, 1), B(2, 7). Find the locus of points equally far from A and B.', solution: 'The line y = 4', steps: ['Midpoint: (2, 4).', 'AB is vertical, so the bisector is horizontal: y = 4.'] },
          { problem: 'Where is the point equally far from the three vertices of a triangle?', solution: 'Where the perpendicular bisectors meet', steps: ['Each bisector gives equal distances from two vertices.', 'Their intersection: the circumcentre.'] },
          { problem: 'What is the locus of points 2 cm from a line a?', solution: 'Two lines parallel to a', steps: ['One on each side of a.', 'Each at distance 2 cm.'] },
        ],
      },
      de: {
        title: 'Ortslinien',
        objectives: ['Die wichtigsten Ortslinien beschreiben.', 'Mit ihnen Punkte mit vorgegebenen Eigenschaften finden.'],
        theory: 'Eine Ortslinie ist die Menge aller Punkte, die eine Bedingung erfüllen. Kreis: die Punkte im Abstand r von O. Mittelsenkrechte von AB: die Punkte mit gleichem Abstand zu A und B. Winkelhalbierende: die Punkte mit gleichem Abstand zu beiden Schenkeln.\n\nDie Punkte im Abstand d von einer Geraden bilden zwei Parallelen zu ihr, auf jeder Seite eine.\n\nSchneidet man Ortslinien, erhält man Punkte mit mehreren Eigenschaften: Die Mittelsenkrechten der Dreiecksseiten schneiden sich im Umkreismittelpunkt, der von allen drei Ecken gleich weit entfernt ist.',
        keyPoints: ['Kreis: Abstand r von O', 'Mittelsenkrechte: PA = PB', 'Winkelhalbierende: gleicher Abstand zu den Schenkeln'],
        examples: [
          { example: 'Welche Ortslinie bilden die Punkte im Abstand 3 cm von O?', solution: 'Den Kreis um O mit Radius 3 cm.' },
          { example: 'A(0 | 0), B(6 | 0). Welche Ortslinie bilden die Punkte mit gleichem Abstand zu A und B?', solution: 'Die Mittelsenkrechte von AB: die senkrechte Gerade durch (3 | 0), also x = 3.' },
        ],
        commonMistakes: [
          { mistake: 'Gleich weit von A und B ist nur der Mittelpunkt von AB.', fix: 'Der Mittelpunkt ist nur einer davon; alle zusammen bilden die Mittelsenkrechte.' },
        ],
        practice: [
          { problem: 'A(2 | 1), B(2 | 7). Bestimmen Sie die Ortslinie der Punkte mit gleichem Abstand zu A und B.', solution: 'Die Gerade y = 4', steps: ['Mittelpunkt: (2 | 4).', 'AB ist senkrecht, die Mittelsenkrechte waagerecht: y = 4.'] },
          { problem: 'Wo liegt der Punkt, der von allen drei Ecken eines Dreiecks gleich weit entfernt ist?', solution: 'Im Schnittpunkt der Mittelsenkrechten', steps: ['Jede Mittelsenkrechte liefert gleiche Abstände zu zwei Ecken.', 'Schnittpunkt: Umkreismittelpunkt.'] },
          { problem: 'Welche Ortslinie bilden die Punkte im Abstand 2 cm von einer Geraden a?', solution: 'Zwei Parallelen zu a', steps: ['Auf jeder Seite von a eine.', 'Jede im Abstand 2 cm.'] },
        ],
      },
    },
  ],
};
