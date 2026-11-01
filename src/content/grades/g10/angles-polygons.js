// Grade 10 · Theme 3: Angles and polygons (October–November)
const alt = (al, en, de) => ({ al, en, de });
const OCTAGON = Array.from({ length: 8 }, (_, i) => {
  const t = ((22.5 + 45 * i) * Math.PI) / 180;
  return [Math.round(2.4 * Math.cos(t) * 1000) / 1000, Math.round(2.4 * Math.sin(t) * 1000) / 1000];
});

export default {
  id: 'g10-angles-polygons',
  i18n: {
    al: { title: 'Këndet dhe shumëkëndëshat', description: 'Këndet te drejtëzat, trekëndëshat dhe katërkëndëshat, kongruenca dhe ngjashmëria, këndet e shumëkëndëshave.' },
    en: { title: 'Angles and polygons', description: 'Angles and lines, triangles and quadrilaterals, congruence and similarity, angles of polygons.' },
    de: { title: 'Winkel und Vielecke', description: 'Winkel an Geraden, Dreiecke und Vierecke, Kongruenz und Ähnlichkeit, Winkel in Vielecken.' },
  },
  lessons: [
    // ───────── 1. Angles and lines
    {
      slug: 'g10-angles-polygons-angles-lines',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1, xMax: 5, yMin: -1, yMax: 3.6 }, height: 200,
        shapes: [
          { kind: 'line', through: [[-1, 0], [4, 0]], color: 'primary' },
          { kind: 'line', through: [[-1, 2.5], [4, 2.5]], color: 'primary' },
          { kind: 'line', through: [[1, 0], [1.812, 2.5]], color: 'secondary' },
          { kind: 'angle', vertex: [1, 0], from: [3, 0], to: [1.812, 2.5], label: '72°', color: 'success' },
          { kind: 'angle', vertex: [1.812, 2.5], from: [0, 2.5], to: [1, 0], label: '72°', color: 'success' },
          { kind: 'angle', vertex: [1.812, 2.5], from: [4, 2.5], to: [1, 0], label: '108°', color: 'purple' },
        ],
        caption: alt('Te paralelet: këndet alterne janë të barabarta (72°), të njëanshmet e brendshme kanë shumë 180° (72° + 108°).', 'At parallel lines: alternate angles are equal (72°), co-interior angles add to 180° (72° + 108°).', 'An Parallelen: Wechselwinkel sind gleich (72°), Nachbarwinkel ergeben 180° (72° + 108°).'),
        alt: alt('Dy drejtëza paralele dhe një prerëse me këndet 72°, 72° dhe 108°.', 'Two parallel lines and a transversal with angles 72°, 72° and 108°.', 'Zwei Parallelen und eine schneidende Gerade mit den Winkeln 72°, 72° und 108°.'),
      }],
      answers: {
        examples: [[['(180 - 30) / 3', 50]], [['180 - 72', 108]]],
        practice: [[['360 - 90 - 140', 130]], [['25 + 10', 35]], [['180 / 6', 30]]],
      },
      al: {
        title: 'Këndet te drejtëzat',
        objectives: ['Të përdorni këndet në një pikë, në një drejtëz dhe këndet e kundërta.', 'Të përdorni barazimet e këndeve te drejtëzat paralele për të shkruar ekuacione.'],
        theory: 'Këndet rreth një pike kanë shumë 360°; këndet në një drejtëz kanë shumë 180°; këndet e kundërta në kulm janë të barabarta.\n\nTe dy drejtëza paralele të prera nga një prerëse: këndet përkatëse dhe alterne janë të barabarta; këndet e njëanshme të brendshme kanë shumë 180°.\n\nKur këndet jepen me shprehje, shkruajmë ekuacion: x dhe 2x + 30° në një drejtëz → 3x + 30 = 180 → x = 50°.',
        keyPoints: ['Rreth pikës: 360°;  në drejtëz: 180°', 'Të kundërta në kulm: të barabarta', 'Paralele: përkatëse = alterne; të njëanshme: 180°'],
        examples: [
          { example: 'Dy kënde në një drejtëz janë x dhe 2x + 30°. Gjeni x.', solution: 'x + 2x + 30 = 180 → 3x = 150 → x = 50°.' },
          { example: 'Te paralelet një kënd alterne është 72°. Sa është këndi i njëanshëm i brendshëm?', solution: '180° − 72° = 108°.' },
        ],
        commonMistakes: [
          { mistake: 'Këndet e njëanshme të brendshme janë të barabarta.', fix: 'Ata janë shtues: shuma 180°.' },
        ],
        practice: [
          { problem: 'Rreth një pike janë këndet 90°, 140° dhe x. Gjeni x.', solution: '130°', steps: ['90 + 140 + x = 360.', 'x = 130°.'] },
          { problem: 'Këndet e kundërta në kulm janë 3x − 10° dhe 2x + 25°. Gjeni x.', solution: '35°', steps: ['3x − 10 = 2x + 25.', 'x = 35°.'] },
          { problem: 'Dy kënde të njëanshme të brendshme janë 4x dhe 2x. Gjeni x.', solution: '30°', steps: ['6x = 180.', 'x = 30°.'] },
        ],
      },
      en: {
        title: 'Angles and lines',
        objectives: ['Use angles at a point, on a straight line and vertically opposite angles.', 'Use angle facts at parallel lines to write equations.'],
        theory: 'Angles around a point add up to 360°; angles on a straight line add up to 180°; vertically opposite angles are equal.\n\nWhen two parallel lines are cut by a transversal: corresponding and alternate angles are equal; co-interior angles add up to 180°.\n\nWhen angles are given as expressions, write an equation: x and 2x + 30° on a line → 3x + 30 = 180 → x = 50°.',
        keyPoints: ['Around a point: 360°;  on a line: 180°', 'Vertically opposite: equal', 'Parallels: corresponding = alternate; co-interior: 180°'],
        examples: [
          { example: 'Two angles on a straight line are x and 2x + 30°. Find x.', solution: 'x + 2x + 30 = 180 → 3x = 150 → x = 50°.' },
          { example: 'At parallel lines an alternate angle is 72°. What is the co-interior angle?', solution: '180° − 72° = 108°.' },
        ],
        commonMistakes: [
          { mistake: 'Co-interior angles are equal.', fix: 'They are supplementary: they add up to 180°.' },
        ],
        practice: [
          { problem: 'Around a point are the angles 90°, 140° and x. Find x.', solution: '130°', steps: ['90 + 140 + x = 360.', 'x = 130°.'] },
          { problem: 'Vertically opposite angles are 3x − 10° and 2x + 25°. Find x.', solution: '35°', steps: ['3x − 10 = 2x + 25.', 'x = 35°.'] },
          { problem: 'Two co-interior angles are 4x and 2x. Find x.', solution: '30°', steps: ['6x = 180.', 'x = 30°.'] },
        ],
      },
      de: {
        title: 'Winkel an Geraden',
        objectives: ['Vollwinkel, gestreckte Winkel und Scheitelwinkel nutzen.', 'Winkelbeziehungen an Parallelen für Gleichungen nutzen.'],
        theory: 'Winkel um einen Punkt ergeben 360°; Winkel an einer Geraden ergeben 180°; Scheitelwinkel sind gleich groß.\n\nWerden zwei Parallelen geschnitten: Stufen- und Wechselwinkel sind gleich groß; Nachbarwinkel an Parallelen ergeben 180°.\n\nSind Winkel als Terme gegeben, stellt man eine Gleichung auf: x und 2x + 30° an einer Geraden → 3x + 30 = 180 → x = 50°.',
        keyPoints: ['Um einen Punkt: 360°;  an einer Geraden: 180°', 'Scheitelwinkel: gleich', 'Parallelen: Stufen- = Wechselwinkel; Nachbarwinkel: 180°'],
        examples: [
          { example: 'Zwei Winkel an einer Geraden sind x und 2x + 30°. Bestimmen Sie x.', solution: 'x + 2x + 30 = 180 → 3x = 150 → x = 50°.' },
          { example: 'An Parallelen ist ein Wechselwinkel 72°. Wie groß ist der Nachbarwinkel?', solution: '180° − 72° = 108°.' },
        ],
        commonMistakes: [
          { mistake: 'Nachbarwinkel an Parallelen sind gleich groß.', fix: 'Sie ergänzen sich zu 180°.' },
        ],
        practice: [
          { problem: 'Um einen Punkt liegen die Winkel 90°, 140° und x. Bestimmen Sie x.', solution: '130°', steps: ['90 + 140 + x = 360.', 'x = 130°.'] },
          { problem: 'Scheitelwinkel sind 3x − 10° und 2x + 25°. Bestimmen Sie x.', solution: '35°', steps: ['3x − 10 = 2x + 25.', 'x = 35°.'] },
          { problem: 'Zwei Nachbarwinkel an Parallelen sind 4x und 2x. Bestimmen Sie x.', solution: '30°', steps: ['6x = 180.', 'x = 30°.'] },
        ],
      },
    },

    // ───────── 2. Triangles and quadrilaterals
    {
      slug: 'g10-angles-polygons-triangles-quadrilaterals',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 8, yMin: -0.8, yMax: 3.8 }, height: 180,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [5.5, 0], [7, 3], [1.5, 3]], fill: true, color: 'primary' },
          { kind: 'angle', vertex: [0, 0], from: [5.5, 0], to: [1.5, 3], label: '65°', color: 'secondary' },
          { kind: 'angle', vertex: [5.5, 0], from: [7, 3], to: [0, 0], label: '115°', color: 'success' },
          { kind: 'angle', vertex: [7, 3], from: [1.5, 3], to: [5.5, 0], label: '65°', color: 'secondary' },
          { kind: 'angle', vertex: [1.5, 3], from: [0, 0], to: [7, 3], label: '115°', color: 'success' },
        ],
        caption: alt('Paralelogrami: këndet e kundërta janë të barabarta, dy kënde fqinje kanë shumë 180°; gjithsej 360°.', 'A parallelogram: opposite angles are equal, two neighbouring angles add to 180°; 360° in total.', 'Parallelogramm: Gegenwinkel sind gleich, benachbarte Winkel ergeben 180°; zusammen 360°.'),
        alt: alt('Paralelogram me këndet 65°, 115°, 65°, 115°.', 'A parallelogram with angles 65°, 115°, 65°, 115°.', 'Ein Parallelogramm mit den Winkeln 65°, 115°, 65°, 115°.'),
      }],
      answers: {
        examples: [[['360 - 85 - 95 - 110', 70]], [['180 - 65', 115]]],
        practice: [[['(180 - 50) / 2', 65]], [['130 - 60', 70]], [['180 - 70', 110]]],
      },
      al: {
        title: 'Trekëndëshat dhe katërkëndëshat',
        objectives: ['Të përdorni shumën e këndeve të trekëndëshit dhe të katërkëndëshit.', 'Të zbatoni vetitë e paralelogramit, trapezit dhe trekëndëshit barakrahës.'],
        theory: 'Trekëndëshi: shuma e këndeve 180°; këndi i jashtëm = shuma e dy të brendshmeve jo fqinje; te barakrahësi këndet e bazës janë të barabarta.\n\nKatërkëndëshi: shuma e këndeve 360° (dy trekëndësha). Paralelogrami: këndet e kundërta të barabarta, fqinjët shtues; diagonalet përgjysmohen. Rombi: diagonalet pingule. Trapezi me AB ∥ CD: ∠A + ∠D = 180°.\n\nShembull: katërkëndëshi me kënde 85°, 95°, 110° ka të katërtin 360° − 290° = 70°.',
        keyPoints: ['Trekëndëshi: 180°;  katërkëndëshi: 360°', 'Paralelogrami: të kundërtat =, fqinjët 180°', 'Trapezi: këndet te i njëjti krah 180°'],
        examples: [
          { example: 'Katërkëndëshi ka kënde 85°, 95° dhe 110°. Gjeni të katërtin.', solution: '360° − 85° − 95° − 110° = 70°.' },
          { example: 'Paralelogrami ka një kënd 65°. Gjeni të tjerët.', solution: '115°, 65°, 115° (fqinjët 180° − 65°).' },
        ],
        commonMistakes: [
          { mistake: 'Shuma e këndeve të katërkëndëshit është 180°.', fix: 'Katërkëndëshi ndahet në dy trekëndësha: 360°.' },
        ],
        practice: [
          { problem: 'Trekëndëshi barakrahës ka kënd në kulm 50°. Gjeni këndet e bazës.', solution: '65°', steps: ['(180 − 50) : 2.', '= 65°.'] },
          { problem: 'Këndi i jashtëm i trekëndëshit është 130°; njëri kënd i brendshëm jo fqinj është 60°. Gjeni tjetrin.', solution: '70°', steps: ['130 = 60 + x.', 'x = 70°.'] },
          { problem: 'Trapezi ABCD me AB ∥ CD ka ∠A = 70°. Gjeni ∠D.', solution: '110°', steps: ['∠A + ∠D = 180°.', '∠D = 110°.'] },
        ],
      },
      en: {
        title: 'Triangles and quadrilaterals',
        objectives: ['Use the angle sums of triangles and quadrilaterals.', 'Apply the properties of parallelograms, trapeziums and isosceles triangles.'],
        theory: 'Triangle: the angles add up to 180°; an exterior angle = the sum of the two opposite interior angles; in an isosceles triangle the base angles are equal.\n\nQuadrilateral: the angles add up to 360° (two triangles). Parallelogram: opposite angles equal, neighbouring angles supplementary; the diagonals bisect each other. Rhombus: diagonals perpendicular. Trapezium with AB ∥ CD: ∠A + ∠D = 180°.\n\nExample: a quadrilateral with angles 85°, 95°, 110° has a fourth angle 360° − 290° = 70°.',
        keyPoints: ['Triangle: 180°;  quadrilateral: 360°', 'Parallelogram: opposite =, neighbours 180°', 'Trapezium: angles on one leg 180°'],
        examples: [
          { example: 'A quadrilateral has angles 85°, 95° and 110°. Find the fourth.', solution: '360° − 85° − 95° − 110° = 70°.' },
          { example: 'A parallelogram has an angle of 65°. Find the others.', solution: '115°, 65°, 115° (neighbours 180° − 65°).' },
        ],
        commonMistakes: [
          { mistake: 'The angles of a quadrilateral add up to 180°.', fix: 'A quadrilateral splits into two triangles: 360°.' },
        ],
        practice: [
          { problem: 'An isosceles triangle has apex angle 50°. Find the base angles.', solution: '65°', steps: ['(180 − 50) ÷ 2.', '= 65°.'] },
          { problem: 'An exterior angle of a triangle is 130°; one opposite interior angle is 60°. Find the other.', solution: '70°', steps: ['130 = 60 + x.', 'x = 70°.'] },
          { problem: 'Trapezium ABCD with AB ∥ CD has ∠A = 70°. Find ∠D.', solution: '110°', steps: ['∠A + ∠D = 180°.', '∠D = 110°.'] },
        ],
      },
      de: {
        title: 'Dreiecke und Vierecke',
        objectives: ['Die Winkelsummen von Dreieck und Viereck nutzen.', 'Eigenschaften von Parallelogramm, Trapez und gleichschenkligem Dreieck anwenden.'],
        theory: 'Dreieck: Winkelsumme 180°; Außenwinkel = Summe der beiden nicht anliegenden Innenwinkel; im gleichschenkligen Dreieck sind die Basiswinkel gleich.\n\nViereck: Winkelsumme 360° (zwei Dreiecke). Parallelogramm: Gegenwinkel gleich, benachbarte Winkel ergänzen sich zu 180°; die Diagonalen halbieren sich. Raute: Diagonalen senkrecht. Trapez mit AB ∥ CD: ∠A + ∠D = 180°.\n\nBeispiel: Ein Viereck mit 85°, 95°, 110° hat als vierten Winkel 360° − 290° = 70°.',
        keyPoints: ['Dreieck: 180°;  Viereck: 360°', 'Parallelogramm: Gegenwinkel =, Nachbarwinkel 180°', 'Trapez: Winkel an einem Schenkel 180°'],
        examples: [
          { example: 'Ein Viereck hat die Winkel 85°, 95° und 110°. Bestimmen Sie den vierten.', solution: '360° − 85° − 95° − 110° = 70°.' },
          { example: 'Ein Parallelogramm hat einen Winkel von 65°. Bestimmen Sie die anderen.', solution: '115°, 65°, 115° (Nachbarwinkel 180° − 65°).' },
        ],
        commonMistakes: [
          { mistake: 'Die Winkelsumme im Viereck ist 180°.', fix: 'Ein Viereck zerfällt in zwei Dreiecke: 360°.' },
        ],
        practice: [
          { problem: 'Ein gleichschenkliges Dreieck hat an der Spitze 50°. Bestimmen Sie die Basiswinkel.', solution: '65°', steps: ['(180 − 50) : 2.', '= 65°.'] },
          { problem: 'Ein Außenwinkel ist 130°; ein nicht anliegender Innenwinkel 60°. Bestimmen Sie den anderen.', solution: '70°', steps: ['130 = 60 + x.', 'x = 70°.'] },
          { problem: 'Im Trapez ABCD mit AB ∥ CD ist ∠A = 70°. Bestimmen Sie ∠D.', solution: '110°', steps: ['∠A + ∠D = 180°.', '∠D = 110°.'] },
        ],
      },
    },

    // ───────── 3. Congruence and similarity
    {
      slug: 'g10-angles-polygons-congruence-similarity',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 14, yMin: -0.8, yMax: 6.5 }, height: 180,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [4, 0], [1, 3]], fill: true, color: 'primary', label: { at: [1.7, 1], text: '6' } },
          { kind: 'polygon', points: [[6, 0], [12, 0], [7.5, 4.5]], fill: true, color: 'secondary', label: { at: [8.5, 1.5], text: '9' } },
          { kind: 'label', at: [2, -0.45], text: '8' }, { kind: 'label', at: [9, -0.45], text: '12' },
        ],
        caption: alt('Trekëndësha të ngjashëm me k = 9/6 = 1,5: brinja 8 bëhet 8 · 1,5 = 12.', 'Similar triangles with k = 9/6 = 1.5: the side 8 becomes 8 · 1.5 = 12.', 'Ähnliche Dreiecke mit k = 9/6 = 1,5: Aus der Seite 8 wird 8 · 1,5 = 12.'),
        alt: alt('Dy trekëndësha të ngjashëm, i dyti 1,5 herë më i madh.', 'Two similar triangles, the second 1.5 times as large.', 'Zwei ähnliche Dreiecke, das zweite 1,5-mal so groß.'),
      }],
      answers: {
        examples: [[['10 / 5', 2], ['14 / 7', 2], ['18 / 9', 2]], [['8 * 9 / 6', 12]]],
        practice: [[['5 * 3^2', 45]], 'text', [['1.5 * 24 / 2', 18]]],
      },
      al: {
        title: 'Kongruenca dhe ngjashmëria',
        objectives: ['Të dalloni kongruencën (BBB, BKB, KBK) nga ngjashmëria (KK, BBB në përpjesëtim).', 'Të përdorni koeficientin e ngjashmërisë për brinjë dhe sipërfaqe.'],
        theory: 'Figurat kongruente kanë të njëjtën formë dhe madhësi; trekëndëshat janë kongruentë sipas BBB, BKB, KBK. Figurat e ngjashme kanë të njëjtën formë, por madhësi të ndryshme: këndet e barabarta dhe brinjët në raportin k.\n\nNgjashmëria e trekëndëshave: KK (dy kënde), BBB (tri brinjë në përpjesëtim), BKB (dy brinjë në përpjesëtim dhe këndi ndërmjet tyre).\n\nGjatësitë shumëzohen me k, sipërfaqet me k², vëllimet me k³. Hijet: personi 1,5 m me hije 2 m dhe ndërtesa me hije 24 m → h = 1,5 · 24/2 = 18 m.',
        keyPoints: ['Kongruente: BBB, BKB, KBK', 'Të ngjashme: KK, BBB, BKB (në përpjesëtim)', 'Gjatësi × k;  sipërfaqe × k²'],
        examples: [
          { example: 'A janë të ngjashëm trekëndëshat 5, 7, 9 dhe 10, 14, 18?', solution: 'Po: 10/5 = 14/7 = 18/9 = 2.' },
          { example: 'Trekëndëshat të ngjashëm: brinja 6 ↔ 9; brinja tjetër e të voglit 8. Gjeni përkatësen.', solution: 'k = 1,5; 8 · 1,5 = 12.' },
        ],
        commonMistakes: [
          { mistake: 'Me k = 3 sipërfaqja trefishohet.', fix: 'Sipërfaqja shumëzohet me k² = 9.' },
        ],
        practice: [
          { problem: 'Figura me sipërfaqe 5 cm² zmadhohet me k = 3. Sa është sipërfaqja e re?', solution: '45 cm²', steps: ['5 · 3².', '= 45 cm².'] },
          { problem: 'AB = DE, ∠B = ∠E, BC = EF. Pse △ABC ≅ △DEF?', solution: 'BKB', steps: ['Dy brinjë dhe këndi ndërmjet tyre.', 'BKB.'] },
          { problem: 'Personi 1,5 m hedh hije 2 m; ndërtesa hedh hije 24 m. Sa e lartë është ndërtesa?', solution: '18 m', steps: ['h/24 = 1,5/2.', 'h = 18 m.'] },
        ],
      },
      en: {
        title: 'Congruence and similarity',
        objectives: ['Tell congruence (SSS, SAS, ASA) from similarity (AA, SSS in proportion).', 'Use the scale factor for sides and areas.'],
        theory: 'Congruent shapes have the same shape and size; triangles are congruent by SSS, SAS, ASA. Similar shapes have the same shape but different sizes: equal angles and sides in the ratio k.\n\nSimilar triangles: AA (two angles), SSS (three sides in proportion), SAS (two sides in proportion and the angle between them).\n\nLengths multiply by k, areas by k², volumes by k³. Shadows: a 1.5 m person with a 2 m shadow and a building with a 24 m shadow → h = 1.5 · 24/2 = 18 m.',
        keyPoints: ['Congruent: SSS, SAS, ASA', 'Similar: AA, SSS, SAS (in proportion)', 'Length × k;  area × k²'],
        examples: [
          { example: 'Are the triangles 5, 7, 9 and 10, 14, 18 similar?', solution: 'Yes: 10/5 = 14/7 = 18/9 = 2.' },
          { example: 'Similar triangles: side 6 ↔ 9; another side of the small one is 8. Find the matching side.', solution: 'k = 1.5; 8 · 1.5 = 12.' },
        ],
        commonMistakes: [
          { mistake: 'With k = 3 the area triples.', fix: 'The area is multiplied by k² = 9.' },
        ],
        practice: [
          { problem: 'A shape of area 5 cm² is enlarged with k = 3. What is the new area?', solution: '45 cm²', steps: ['5 · 3².', '= 45 cm².'] },
          { problem: 'AB = DE, ∠B = ∠E, BC = EF. Why is △ABC ≅ △DEF?', solution: 'SAS', steps: ['Two sides and the angle between them.', 'SAS.'] },
          { problem: 'A 1.5 m person casts a 2 m shadow; a building casts a 24 m shadow. How tall is the building?', solution: '18 m', steps: ['h/24 = 1.5/2.', 'h = 18 m.'] },
        ],
      },
      de: {
        title: 'Kongruenz und Ähnlichkeit',
        objectives: ['Kongruenz (SSS, SWS, WSW) von Ähnlichkeit (WW, SSS im Verhältnis) unterscheiden.', 'Den Ähnlichkeitsfaktor für Seiten und Flächen nutzen.'],
        theory: 'Kongruente Figuren stimmen in Form und Größe überein; Dreiecke sind kongruent nach SSS, SWS, WSW. Ähnliche Figuren haben dieselbe Form, aber andere Größe: gleiche Winkel, Seiten im Verhältnis k.\n\nÄhnliche Dreiecke: WW (zwei Winkel), SSS (drei Seiten im gleichen Verhältnis), SWS (zwei Seiten im gleichen Verhältnis und eingeschlossener Winkel).\n\nLängen werden mit k multipliziert, Flächen mit k², Volumen mit k³. Schatten: Eine 1,5 m große Person mit 2 m Schatten und ein Gebäude mit 24 m Schatten → h = 1,5 · 24/2 = 18 m.',
        keyPoints: ['Kongruent: SSS, SWS, WSW', 'Ähnlich: WW, SSS, SWS (im Verhältnis)', 'Länge · k;  Fläche · k²'],
        examples: [
          { example: 'Sind die Dreiecke 5, 7, 9 und 10, 14, 18 ähnlich?', solution: 'Ja: 10/5 = 14/7 = 18/9 = 2.' },
          { example: 'Ähnliche Dreiecke: Seite 6 ↔ 9; eine andere Seite des kleinen ist 8. Bestimmen Sie die entsprechende.', solution: 'k = 1,5; 8 · 1,5 = 12.' },
        ],
        commonMistakes: [
          { mistake: 'Bei k = 3 verdreifacht sich die Fläche.', fix: 'Die Fläche wird mit k² = 9 multipliziert.' },
        ],
        practice: [
          { problem: 'Eine Figur mit 5 cm² wird mit k = 3 vergrößert. Wie groß ist die neue Fläche?', solution: '45 cm²', steps: ['5 · 3².', '= 45 cm².'] },
          { problem: 'AB = DE, ∠B = ∠E, BC = EF. Warum ist △ABC ≅ △DEF?', solution: 'SWS', steps: ['Zwei Seiten und der eingeschlossene Winkel.', 'SWS.'] },
          { problem: 'Eine 1,5 m große Person wirft 2 m Schatten; ein Gebäude wirft 24 m Schatten. Wie hoch ist es?', solution: '18 m', steps: ['h/24 = 1,5/2.', 'h = 18 m.'] },
        ],
      },
    },

    // ───────── 4. Angles of polygons
    {
      slug: 'g10-angles-polygons-polygon-angles',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3, xMax: 3, yMin: -2.8, yMax: 2.8 }, height: 210,
        shapes: [
          { kind: 'polygon', points: OCTAGON, fill: true, color: 'primary' },
          { kind: 'angle', vertex: OCTAGON[0], from: OCTAGON[7], to: OCTAGON[1], label: '135°', color: 'secondary', r: 24 },
        ],
        caption: alt('Tetëkëndëshi i rregullt: shuma e këndeve (8 − 2) · 180° = 1 080°; çdo kënd 1 080° : 8 = 135°.', 'Regular octagon: angle sum (8 − 2) · 180° = 1 080°; each angle 1 080° ÷ 8 = 135°.', 'Regelmäßiges Achteck: Winkelsumme (8 − 2) · 180° = 1 080°; jeder Winkel 1 080° : 8 = 135°.'),
        alt: alt('Tetëkëndësh i rregullt me një kënd të brendshëm 135° të shënuar.', 'A regular octagon with one interior angle of 135° marked.', 'Ein regelmäßiges Achteck mit einem markierten Innenwinkel von 135°.'),
      }],
      answers: {
        examples: [[['(8 - 2) * 180 / 8', 135]], [['360 / 24', 15]]],
        practice: [[['(6 - 2) * 180', 720]], [['(5 - 2) * 180 / 5', 108]], [['360 / (180 - 140)', 9]]],
      },
      al: {
        title: 'Këndet e shumëkëndëshave',
        objectives: ['Të llogaritni shumën e këndeve të brendshme dhe të jashtme.', 'Të gjeni këndet ose numrin e brinjëve të shumëkëndëshit të rregullt.'],
        theory: 'Një shumëkëndësh me n brinjë ndahet nga një kulm në n − 2 trekëndësha, prandaj shuma e këndeve të brendshme është (n − 2) · 180°.\n\nShuma e këndeve të jashtme (nga një në çdo kulm) është gjithmonë 360°. Te shumëkëndëshi i rregullt çdo kënd i jashtëm është 360°/n dhe çdo kënd i brendshëm 180° − 360°/n.\n\nTetëkëndëshi i rregullt: i brendshmi 135°. Nëse këndi i jashtëm është 24°, atëherë n = 360 : 24 = 15 brinjë.',
        keyPoints: ['Shuma e të brendshmeve: (n − 2) · 180°', 'Shuma e të jashtmeve: 360°', 'I rregullt: i jashtmi 360°/n'],
        examples: [
          { example: 'Sa është çdo kënd i brendshëm i tetëkëndëshit të rregullt?', solution: '(8 − 2) · 180° : 8 = 135°.' },
          { example: 'Këndi i jashtëm i shumëkëndëshit të rregullt është 24°. Sa brinjë ka?', solution: 'n = 360 : 24 = 15.' },
        ],
        commonMistakes: [
          { mistake: 'Shuma e këndeve të brendshme = n · 180°.', fix: 'Janë n − 2 trekëndësha: (n − 2) · 180°.' },
          { mistake: 'Shuma e këndeve të jashtme rritet me n.', fix: 'Ajo është gjithmonë 360°.' },
        ],
        practice: [
          { problem: 'Sa është shuma e këndeve të brendshme të gjashtëkëndëshit?', solution: '720°', steps: ['(6 − 2) · 180°.', '= 720°.'] },
          { problem: 'Sa është këndi i brendshëm i pesëkëndëshit të rregullt?', solution: '108°', steps: ['(5 − 2) · 180 = 540.', '540 : 5 = 108°.'] },
          { problem: 'Këndi i brendshëm i një shumëkëndëshi të rregullt është 140°. Sa brinjë ka?', solution: '9', steps: ['I jashtmi: 180 − 140 = 40°.', 'n = 360 : 40 = 9.'] },
        ],
      },
      en: {
        title: 'Angles of polygons',
        objectives: ['Work out the sum of interior and exterior angles.', 'Find the angles or the number of sides of a regular polygon.'],
        theory: 'A polygon with n sides splits from one vertex into n − 2 triangles, so its interior angles add up to (n − 2) · 180°.\n\nThe exterior angles (one at each vertex) always add up to 360°. In a regular polygon each exterior angle is 360°/n and each interior angle 180° − 360°/n.\n\nA regular octagon: interior angle 135°. If the exterior angle is 24°, then n = 360 ÷ 24 = 15 sides.',
        keyPoints: ['Interior sum: (n − 2) · 180°', 'Exterior sum: 360°', 'Regular: exterior 360°/n'],
        examples: [
          { example: 'What is each interior angle of a regular octagon?', solution: '(8 − 2) · 180° ÷ 8 = 135°.' },
          { example: 'The exterior angle of a regular polygon is 24°. How many sides does it have?', solution: 'n = 360 ÷ 24 = 15.' },
        ],
        commonMistakes: [
          { mistake: 'Interior sum = n · 180°.', fix: 'There are n − 2 triangles: (n − 2) · 180°.' },
          { mistake: 'The exterior sum grows with n.', fix: 'It is always 360°.' },
        ],
        practice: [
          { problem: 'What is the interior angle sum of a hexagon?', solution: '720°', steps: ['(6 − 2) · 180°.', '= 720°.'] },
          { problem: 'What is the interior angle of a regular pentagon?', solution: '108°', steps: ['(5 − 2) · 180 = 540.', '540 ÷ 5 = 108°.'] },
          { problem: 'The interior angle of a regular polygon is 140°. How many sides does it have?', solution: '9', steps: ['Exterior: 180 − 140 = 40°.', 'n = 360 ÷ 40 = 9.'] },
        ],
      },
      de: {
        title: 'Winkel in Vielecken',
        objectives: ['Die Summe der Innen- und Außenwinkel berechnen.', 'Winkel oder Eckenzahl eines regelmäßigen Vielecks bestimmen.'],
        theory: 'Ein n-Eck zerfällt von einer Ecke aus in n − 2 Dreiecke, daher ist die Innenwinkelsumme (n − 2) · 180°.\n\nDie Außenwinkel (einer pro Ecke) ergeben immer 360°. Im regelmäßigen n-Eck ist jeder Außenwinkel 360°/n und jeder Innenwinkel 180° − 360°/n.\n\nRegelmäßiges Achteck: Innenwinkel 135°. Ist der Außenwinkel 24°, so ist n = 360 : 24 = 15.',
        keyPoints: ['Innenwinkelsumme: (n − 2) · 180°', 'Außenwinkelsumme: 360°', 'Regelmäßig: Außenwinkel 360°/n'],
        examples: [
          { example: 'Wie groß ist jeder Innenwinkel eines regelmäßigen Achtecks?', solution: '(8 − 2) · 180° : 8 = 135°.' },
          { example: 'Der Außenwinkel eines regelmäßigen Vielecks ist 24°. Wie viele Ecken hat es?', solution: 'n = 360 : 24 = 15.' },
        ],
        commonMistakes: [
          { mistake: 'Innenwinkelsumme = n · 180°.', fix: 'Es sind n − 2 Dreiecke: (n − 2) · 180°.' },
          { mistake: 'Die Außenwinkelsumme wächst mit n.', fix: 'Sie ist immer 360°.' },
        ],
        practice: [
          { problem: 'Wie groß ist die Innenwinkelsumme eines Sechsecks?', solution: '720°', steps: ['(6 − 2) · 180°.', '= 720°.'] },
          { problem: 'Wie groß ist der Innenwinkel eines regelmäßigen Fünfecks?', solution: '108°', steps: ['(5 − 2) · 180 = 540.', '540 : 5 = 108°.'] },
          { problem: 'Der Innenwinkel eines regelmäßigen Vielecks ist 140°. Wie viele Ecken hat es?', solution: '9', steps: ['Außenwinkel: 180 − 140 = 40°.', 'n = 360 : 40 = 9.'] },
        ],
      },
    },
  ],
};
