// Grade 9 · Theme 8: Similarity and enlargement (January–March)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g9-similarity',
  i18n: {
    al: { title: 'Ngjashmëria dhe homotetia', description: 'Tre rastet e ngjashmërisë, ngjashmëria e shumëkëndëshave, teorema e Talesit dhe homotetia.' },
    en: { title: 'Similarity and enlargement', description: 'The three similarity criteria, similar polygons, the intercept (Thales) theorem and enlargement.' },
    de: { title: 'Ähnlichkeit und zentrische Streckung', description: 'Die drei Ähnlichkeitssätze, ähnliche Vielecke, der Strahlensatz und die zentrische Streckung.' },
  },
  lessons: [
    // ───────── 1. Similarity criteria
    {
      slug: 'g9-similarity-similarity-cases',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 13, yMin: -0.8, yMax: 8.5 }, height: 200,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [4, 0], [0, 3]], fill: true, color: 'primary', label: { at: [1.2, 0.9], text: 'k = 1' } },
          { kind: 'polygon', points: [[5, 0], [13, 0], [5, 6]], fill: true, color: 'secondary', label: { at: [7.4, 1.8], text: 'k = 2' } },
          { kind: 'label', at: [2, -0.45], text: '4' }, { kind: 'label', at: [-0.35, 1.5], text: '3' },
          { kind: 'label', at: [9, -0.45], text: '8' }, { kind: 'label', at: [4.6, 3], text: '6' },
        ],
        caption: alt('Trekëndëshat 3, 4, 5 dhe 6, 8, 10 janë të ngjashëm (BBB): çdo brinjë dyfishohet, k = 2.', 'Triangles 3, 4, 5 and 6, 8, 10 are similar (SSS): every side doubles, k = 2.', 'Die Dreiecke 3, 4, 5 und 6, 8, 10 sind ähnlich (SSS): Jede Seite verdoppelt sich, k = 2.'),
        alt: alt('Dy trekëndësha kënddrejtë, katetet 3 dhe 4 dhe katetet 6 dhe 8.', 'Two right triangles, legs 3 and 4 and legs 6 and 8.', 'Zwei rechtwinklige Dreiecke mit den Katheten 3 und 4 bzw. 6 und 8.'),
      }],
      answers: {
        examples: [[['180 - 50 - 60', 70]], [['6 / 3', 2], ['8 / 4', 2], ['10 / 5', 2]]],
        practice: [[['6 / 4', 1.5]], [['4 * 3', 12]], [['2 * 15 / 3', 10]]],
      },
      al: {
        title: 'Tre rastet e ngjashmërisë',
        objectives: ['Të vërtetoni ngjashmërinë e trekëndëshave me rastet KK, BKB dhe BBB.', 'Të gjeni koeficientin e ngjashmërisë dhe brinjët e panjohura.'],
        theory: 'Trekëndëshat e ngjashëm kanë këndet përkatëse të barabarta dhe brinjët përkatëse në përpjesëtim: a′/a = b′/b = c′/c = k (koeficienti i ngjashmërisë).\n\nRastet: KK – dy kënde përkatësisht të barabarta (i treti del vetë); BKB – dy brinjë në përpjesëtim dhe këndi ndërmjet tyre i barabartë; BBB – tri brinjë në përpjesëtim.\n\nZbatim: shtylla 2 m hedh hije 3 m; në të njëjtën kohë pema hedh hije 15 m. Rrezet e diellit formojnë trekëndësha të ngjashëm (KK), pra h = 2 · 15/3 = 10 m.',
        keyPoints: ['KK, BKB, BBB', 'a′/a = b′/b = c′/c = k', 'Këndet nuk ndryshojnë'],
        examples: [
          { example: 'Njëri trekëndësh ka kënde 50° dhe 60°, tjetri 50° dhe 70°. A janë të ngjashëm?', solution: 'Këndi i tretë i të parit: 70°. Të dy kanë 50° dhe 70° → të ngjashëm (KK).' },
          { example: 'A janë të ngjashëm trekëndëshat me brinjë 3, 4, 5 dhe 6, 8, 10?', solution: '6/3 = 8/4 = 10/5 = 2 → të ngjashëm (BBB), k = 2.' },
        ],
        commonMistakes: [
          { mistake: 'Brinjët përkatëse ndryshojnë me të njëjtin numër (+3).', fix: 'Te ngjashmëria brinjët shumëzohen me të njëjtin numër k.' },
        ],
        practice: [
          { problem: 'Trekëndëshat me brinjë 4, 6, 8 dhe 6, 9, 12 janë të ngjashëm. Sa është k?', solution: '1,5', steps: ['6/4 = 9/6 = 12/8.', '= 1,5.'] },
          { problem: 'Koeficienti është 3; brinja e të voglit 4 cm. Sa është brinja përkatëse e të madhit?', solution: '12 cm', steps: ['4 · 3.', '= 12 cm.'] },
          { problem: 'Shtylla 2 m hedh hije 3 m; pema hedh hije 15 m. Sa e lartë është pema?', solution: '10 m', steps: ['h/15 = 2/3.', 'h = 10 m.'] },
        ],
      },
      en: {
        title: 'The three similarity criteria',
        objectives: ['Prove triangles similar with the AA, SAS and SSS criteria.', 'Find the scale factor and unknown sides.'],
        theory: 'Similar triangles have equal corresponding angles and corresponding sides in proportion: a′/a = b′/b = c′/c = k (the scale factor).\n\nCriteria: AA – two angles equal in pairs (the third follows); SAS – two sides in proportion and the angle between them equal; SSS – three sides in proportion.\n\nUse: a 2 m pole casts a 3 m shadow; at the same time a tree casts a 15 m shadow. The sun\'s rays form similar triangles (AA), so h = 2 · 15/3 = 10 m.',
        keyPoints: ['AA, SAS, SSS', 'a′/a = b′/b = c′/c = k', 'Angles do not change'],
        examples: [
          { example: 'One triangle has angles 50° and 60°, the other 50° and 70°. Are they similar?', solution: 'The third angle of the first is 70°. Both have 50° and 70° → similar (AA).' },
          { example: 'Are the triangles with sides 3, 4, 5 and 6, 8, 10 similar?', solution: '6/3 = 8/4 = 10/5 = 2 → similar (SSS), k = 2.' },
        ],
        commonMistakes: [
          { mistake: 'Corresponding sides differ by the same number (+3).', fix: 'In similar figures the sides are multiplied by the same number k.' },
        ],
        practice: [
          { problem: 'Triangles with sides 4, 6, 8 and 6, 9, 12 are similar. What is k?', solution: '1.5', steps: ['6/4 = 9/6 = 12/8.', '= 1.5.'] },
          { problem: 'The scale factor is 3; a side of the small one is 4 cm. How long is the matching side of the large one?', solution: '12 cm', steps: ['4 · 3.', '= 12 cm.'] },
          { problem: 'A 2 m pole casts a 3 m shadow; a tree casts a 15 m shadow. How tall is the tree?', solution: '10 m', steps: ['h/15 = 2/3.', 'h = 10 m.'] },
        ],
      },
      de: {
        title: 'Die drei Ähnlichkeitssätze',
        objectives: ['Die Ähnlichkeit von Dreiecken mit WW, SWS und SSS begründen.', 'Den Ähnlichkeitsfaktor und unbekannte Seiten bestimmen.'],
        theory: 'Ähnliche Dreiecke haben gleiche entsprechende Winkel und entsprechende Seiten im gleichen Verhältnis: a′/a = b′/b = c′/c = k (Ähnlichkeitsfaktor).\n\nÄhnlichkeitssätze: WW – zwei Winkel paarweise gleich (der dritte folgt); SWS – zwei Seiten im gleichen Verhältnis und der eingeschlossene Winkel gleich; SSS – drei Seiten im gleichen Verhältnis.\n\nAnwendung: Ein 2 m hoher Pfahl wirft einen 3 m langen Schatten; gleichzeitig wirft ein Baum einen 15 m langen Schatten. Die Sonnenstrahlen bilden ähnliche Dreiecke (WW), also h = 2 · 15/3 = 10 m.',
        keyPoints: ['WW, SWS, SSS', 'a′/a = b′/b = c′/c = k', 'Winkel bleiben gleich'],
        examples: [
          { example: 'Ein Dreieck hat die Winkel 50° und 60°, ein anderes 50° und 70°. Sind sie ähnlich?', solution: 'Der dritte Winkel des ersten ist 70°. Beide haben 50° und 70° → ähnlich (WW).' },
          { example: 'Sind die Dreiecke mit den Seiten 3, 4, 5 und 6, 8, 10 ähnlich?', solution: '6/3 = 8/4 = 10/5 = 2 → ähnlich (SSS), k = 2.' },
        ],
        commonMistakes: [
          { mistake: 'Entsprechende Seiten unterscheiden sich um dieselbe Zahl (+3).', fix: 'Bei Ähnlichkeit werden die Seiten mit derselben Zahl k multipliziert.' },
        ],
        practice: [
          { problem: 'Die Dreiecke mit den Seiten 4, 6, 8 und 6, 9, 12 sind ähnlich. Wie groß ist k?', solution: '1,5', steps: ['6/4 = 9/6 = 12/8.', '= 1,5.'] },
          { problem: 'Der Faktor ist 3; eine Seite des kleinen Dreiecks ist 4 cm lang. Wie lang ist die entsprechende Seite des großen?', solution: '12 cm', steps: ['4 · 3.', '= 12 cm.'] },
          { problem: 'Ein 2 m hoher Pfahl wirft 3 m Schatten; ein Baum wirft 15 m Schatten. Wie hoch ist der Baum?', solution: '10 m', steps: ['h/15 = 2/3.', 'h = 10 m.'] },
        ],
      },
    },

    // ───────── 2. Similar polygons
    {
      slug: 'g9-similarity-similar-polygons',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 16.5, yMin: -1, yMax: 9.8 }, height: 200,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [4, 0], [4, 6], [0, 6]], fill: true, color: 'primary', label: { at: [2, 3], text: 'S = 24' } },
          { kind: 'polygon', points: [[6, 0], [12, 0], [12, 9], [6, 9]], fill: true, color: 'secondary', label: { at: [9, 4.5], text: 'S = 54' } },
          { kind: 'label', at: [2, -0.55], text: '4' }, { kind: 'label', at: [9, -0.55], text: '6' },
        ],
        caption: alt('Drejtkëndëshat 4 × 6 dhe 6 × 9 janë të ngjashëm me k = 1,5; sipërfaqet: 54 : 24 = 2,25 = 1,5².', 'The rectangles 4 × 6 and 6 × 9 are similar with k = 1.5; areas: 54 ÷ 24 = 2.25 = 1.5².', 'Die Rechtecke 4 × 6 und 6 × 9 sind ähnlich mit k = 1,5; Flächen: 54 : 24 = 2,25 = 1,5².'),
        alt: alt('Dy drejtkëndësha: 4 × 6 me sipërfaqe 24 dhe 6 × 9 me sipërfaqe 54.', 'Two rectangles: 4 × 6 with area 24 and 6 × 9 with area 54.', 'Zwei Rechtecke: 4 × 6 mit Fläche 24 und 6 × 9 mit Fläche 54.'),
      }],
      answers: {
        examples: [[['6 / 4', 1.5], ['9 / 6', 1.5]], [['5 * 3^2', 45]]],
        practice: [[['20 * 2.5', 50]], [['sqrt(36 / 16)', 1.5]], [['6 * 1000^2 / 10000', 600]]],
      },
      al: {
        title: 'Ngjashmëria e shumëkëndëshave',
        objectives: ['Të dalloni shumëkëndësha të ngjashëm.', 'Të përdorni raportin e perimetrave (k) dhe të sipërfaqeve (k²).'],
        theory: 'Dy shumëkëndësha janë të ngjashëm kur këndet përkatëse janë të barabarta dhe brinjët përkatëse në përpjesëtim me të njëjtin koeficient k. Drejtkëndëshat 4 × 6 dhe 6 × 9: 6/4 = 9/6 = 1,5.\n\nPerimetrat e shumëkëndëshave të ngjashëm janë në raportin k, ndërsa sipërfaqet në raportin k². Nëse k = 3, sipërfaqja bëhet 9 herë më e madhe.\n\nNga sipërfaqet gjejmë k me rrënjë: sipërfaqet 16 dhe 36 → k = √(36/16) = 1,5. Te hartat: me shkallë 1 : 1 000, 1 cm² në hartë është 1 000² cm² = 100 m² në terren.',
        keyPoints: ['Perimetrat: k', 'Sipërfaqet: k²', 'k = √(S₂/S₁)'],
        examples: [
          { example: 'A janë të ngjashëm drejtkëndëshat 4 × 6 dhe 6 × 9?', solution: '6/4 = 9/6 = 1,5 dhe këndet janë 90°: po, k = 1,5.' },
          { example: 'Figura me sipërfaqe 5 cm² zmadhohet me k = 3. Sa është sipërfaqja e re?', solution: '5 · 3² = 45 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Me k = 3 edhe sipërfaqja trefishohet.', fix: 'Sipërfaqja shumëzohet me k² = 9.' },
          { mistake: 'Çdo dy drejtkëndësha janë të ngjashëm.', fix: 'Duhet që raportet e brinjëve të jenë të barabarta.' },
        ],
        practice: [
          { problem: 'Perimetri është 20 cm. Sa bëhet me k = 2,5?', solution: '50 cm', steps: ['Perimetri × k.', '20 · 2,5 = 50 cm.'] },
          { problem: 'Dy figura të ngjashme kanë sipërfaqe 16 cm² dhe 36 cm². Sa është k?', solution: '1,5', steps: ['k² = 36/16 = 2,25.', 'k = 1,5.'] },
          { problem: 'Në planin 1 : 1 000 një fushë ka 6 cm². Sa m² është në të vërtetë?', solution: '600 m²', steps: ['6 · 1 000² cm² = 6 000 000 cm².', '= 600 m².'] },
        ],
      },
      en: {
        title: 'Similar polygons',
        objectives: ['Recognise similar polygons.', 'Use the ratio of perimeters (k) and of areas (k²).'],
        theory: 'Two polygons are similar when corresponding angles are equal and corresponding sides are in proportion with the same factor k. The rectangles 4 × 6 and 6 × 9: 6/4 = 9/6 = 1.5.\n\nThe perimeters of similar polygons are in the ratio k, the areas in the ratio k². If k = 3, the area becomes 9 times as large.\n\nFrom the areas we find k with a root: areas 16 and 36 → k = √(36/16) = 1.5. On maps: at scale 1 : 1 000, 1 cm² on the map is 1 000² cm² = 100 m² in reality.',
        keyPoints: ['Perimeters: k', 'Areas: k²', 'k = √(A₂/A₁)'],
        examples: [
          { example: 'Are the rectangles 4 × 6 and 6 × 9 similar?', solution: '6/4 = 9/6 = 1.5 and the angles are 90°: yes, k = 1.5.' },
          { example: 'A shape of area 5 cm² is enlarged with k = 3. What is the new area?', solution: '5 · 3² = 45 cm².' },
        ],
        commonMistakes: [
          { mistake: 'With k = 3 the area triples too.', fix: 'The area is multiplied by k² = 9.' },
          { mistake: 'Any two rectangles are similar.', fix: 'The ratios of the sides must be equal.' },
        ],
        practice: [
          { problem: 'A perimeter is 20 cm. What is it with k = 2.5?', solution: '50 cm', steps: ['Perimeter × k.', '20 · 2.5 = 50 cm.'] },
          { problem: 'Two similar shapes have areas 16 cm² and 36 cm². What is k?', solution: '1.5', steps: ['k² = 36/16 = 2.25.', 'k = 1.5.'] },
          { problem: 'On a 1 : 1 000 plan a field covers 6 cm². How many m² is it really?', solution: '600 m²', steps: ['6 · 1 000² cm² = 6 000 000 cm².', '= 600 m².'] },
        ],
      },
      de: {
        title: 'Ähnliche Vielecke',
        objectives: ['Ähnliche Vielecke erkennen.', 'Das Verhältnis der Umfänge (k) und der Flächen (k²) nutzen.'],
        theory: 'Zwei Vielecke sind ähnlich, wenn entsprechende Winkel gleich sind und entsprechende Seiten im gleichen Verhältnis k stehen. Die Rechtecke 4 × 6 und 6 × 9: 6/4 = 9/6 = 1,5.\n\nDie Umfänge ähnlicher Vielecke stehen im Verhältnis k, die Flächen im Verhältnis k². Bei k = 3 wird die Fläche 9-mal so groß.\n\nAus den Flächen erhält man k mit der Wurzel: Flächen 16 und 36 → k = √(36/16) = 1,5. Bei Karten: Im Maßstab 1 : 1 000 sind 1 cm² auf der Karte 1 000² cm² = 100 m² in Wirklichkeit.',
        keyPoints: ['Umfänge: k', 'Flächen: k²', 'k = √(A₂/A₁)'],
        examples: [
          { example: 'Sind die Rechtecke 4 × 6 und 6 × 9 ähnlich?', solution: '6/4 = 9/6 = 1,5 und die Winkel sind 90°: ja, k = 1,5.' },
          { example: 'Eine Figur mit 5 cm² wird mit k = 3 vergrößert. Wie groß ist die neue Fläche?', solution: '5 · 3² = 45 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Bei k = 3 verdreifacht sich auch die Fläche.', fix: 'Die Fläche wird mit k² = 9 multipliziert.' },
          { mistake: 'Zwei Rechtecke sind immer ähnlich.', fix: 'Die Seitenverhältnisse müssen gleich sein.' },
        ],
        practice: [
          { problem: 'Ein Umfang beträgt 20 cm. Wie groß ist er bei k = 2,5?', solution: '50 cm', steps: ['Umfang · k.', '20 · 2,5 = 50 cm.'] },
          { problem: 'Zwei ähnliche Figuren haben 16 cm² und 36 cm². Wie groß ist k?', solution: '1,5', steps: ['k² = 36/16 = 2,25.', 'k = 1,5.'] },
          { problem: 'Auf einem Plan 1 : 1 000 hat ein Feld 6 cm². Wie viele m² sind es wirklich?', solution: '600 m²', steps: ['6 · 1 000² cm² = 6 000 000 cm².', '= 600 m².'] },
        ],
      },
    },

    // ───────── 3. Thales (intercept) theorem
    {
      slug: 'g9-similarity-thales',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 10.5, yMin: -0.8, yMax: 7 }, height: 210,
        shapes: [
          { kind: 'polygon', points: [[3, 6], [0, 0], [10, 0]], fill: true, color: 'primary' },
          { kind: 'segment', from: [1.8, 3.6], to: [5.8, 3.6], color: 'secondary', label: 'DE' },
          { kind: 'label', at: [3, 6.4], text: 'A' }, { kind: 'label', at: [-0.3, -0.4], text: 'B' }, { kind: 'label', at: [10.3, -0.4], text: 'C' },
          { kind: 'label', at: [1.3, 3.7], text: 'D' }, { kind: 'label', at: [6.3, 3.7], text: 'E' },
        ],
        caption: alt('DE ∥ BC: AD/AB = AE/AC = DE/BC dhe AD/DB = AE/EC.', 'DE ∥ BC: AD/AB = AE/AC = DE/BC and AD/DB = AE/EC.', 'DE ∥ BC: AD/AB = AE/AC = DE/BC und AD/DB = AE/EC.'),
        alt: alt('Trekëndësh ABC me segmentin DE paralel me BC.', 'Triangle ABC with segment DE parallel to BC.', 'Dreieck ABC mit der Strecke DE parallel zu BC.'),
      }],
      answers: {
        examples: [[['6 * 5 / 4', 7.5]], [['12 * 3 / 9', 4]]],
        practice: [[['2 * 15 / 3', 10]], [['3 * 4 / 2', 6]], [['12 * 5 / 15', 4]]],
      },
      al: {
        title: 'Teorema e Talesit',
        objectives: ['Të zbatoni teoremën e Talesit për drejtëzat paralele.', 'Të llogaritni segmente të panjohura dhe lartësi me hije.'],
        theory: 'Teorema e Talesit: nëse drejtëza paralele presin dy drejtëza, segmentet përkatëse janë në përpjesëtim. Në trekëndëshin ABC me DE ∥ BC (D në AB, E në AC): AD/DB = AE/EC.\n\nGjithashtu △ADE ∼ △ABC, prandaj AD/AB = AE/AC = DE/BC. Kujdes: te raporti me DE përdoret e gjithë brinja AB, jo DB.\n\nShembull: AD = 4, DB = 6, AE = 5 → EC = 6 · 5/4 = 7,5.',
        keyPoints: ['DE ∥ BC ⟹ AD/DB = AE/EC', 'AD/AB = DE/BC (me të gjithë brinjën)', '△ADE ∼ △ABC'],
        examples: [
          { example: 'DE ∥ BC, AD = 4, DB = 6, AE = 5. Gjeni EC.', solution: '4/6 = 5/EC → EC = 7,5.' },
          { example: 'DE ∥ BC, AD = 3, AB = 9, BC = 12. Gjeni DE.', solution: 'DE/12 = 3/9 → DE = 4.' },
        ],
        commonMistakes: [
          { mistake: 'DE/BC = AD/DB', fix: 'Për DE përdoret AD/AB (trekëndëshat e ngjashëm), jo AD/DB.' },
        ],
        practice: [
          { problem: 'Shtylla 2 m hedh hije 3 m; pema hedh hije 15 m. Sa është lartësia e pemës?', solution: '10 m', steps: ['h : 15 = 2 : 3.', 'h = 10 m.'] },
          { problem: 'DE ∥ BC, AD = 2, DB = 3, AE = 4. Gjeni EC.', solution: '6', steps: ['2/3 = 4/EC.', 'EC = 6.'] },
          { problem: 'DE ∥ BC, DE = 5, BC = 15, AB = 12. Gjeni AD.', solution: '4', steps: ['AD/12 = 5/15.', 'AD = 4.'] },
        ],
      },
      en: {
        title: 'The intercept (Thales) theorem',
        objectives: ['Apply the intercept theorem for parallel lines.', 'Work out unknown segments and heights from shadows.'],
        theory: 'The intercept theorem: if parallel lines cut two lines, the corresponding segments are in proportion. In triangle ABC with DE ∥ BC (D on AB, E on AC): AD/DB = AE/EC.\n\nAlso △ADE ∼ △ABC, so AD/AB = AE/AC = DE/BC. Careful: in the ratio with DE use the whole side AB, not DB.\n\nExample: AD = 4, DB = 6, AE = 5 → EC = 6 · 5/4 = 7.5.',
        keyPoints: ['DE ∥ BC ⟹ AD/DB = AE/EC', 'AD/AB = DE/BC (whole side)', '△ADE ∼ △ABC'],
        examples: [
          { example: 'DE ∥ BC, AD = 4, DB = 6, AE = 5. Find EC.', solution: '4/6 = 5/EC → EC = 7.5.' },
          { example: 'DE ∥ BC, AD = 3, AB = 9, BC = 12. Find DE.', solution: 'DE/12 = 3/9 → DE = 4.' },
        ],
        commonMistakes: [
          { mistake: 'DE/BC = AD/DB', fix: 'For DE use AD/AB (similar triangles), not AD/DB.' },
        ],
        practice: [
          { problem: 'A 2 m pole casts a 3 m shadow; a tree casts a 15 m shadow. How tall is the tree?', solution: '10 m', steps: ['h : 15 = 2 : 3.', 'h = 10 m.'] },
          { problem: 'DE ∥ BC, AD = 2, DB = 3, AE = 4. Find EC.', solution: '6', steps: ['2/3 = 4/EC.', 'EC = 6.'] },
          { problem: 'DE ∥ BC, DE = 5, BC = 15, AB = 12. Find AD.', solution: '4', steps: ['AD/12 = 5/15.', 'AD = 4.'] },
        ],
      },
      de: {
        title: 'Der Strahlensatz',
        objectives: ['Den Strahlensatz bei parallelen Geraden anwenden.', 'Unbekannte Strecken und Höhen aus Schatten berechnen.'],
        theory: 'Strahlensatz: Werden zwei Geraden von Parallelen geschnitten, stehen entsprechende Abschnitte im gleichen Verhältnis. Im Dreieck ABC mit DE ∥ BC (D auf AB, E auf AC): AD/DB = AE/EC.\n\nAußerdem gilt △ADE ∼ △ABC, also AD/AB = AE/AC = DE/BC. Achtung: Im Verhältnis mit DE nimmt man die ganze Seite AB, nicht DB.\n\nBeispiel: AD = 4, DB = 6, AE = 5 → EC = 6 · 5/4 = 7,5.',
        keyPoints: ['DE ∥ BC ⟹ AD/DB = AE/EC', 'AD/AB = DE/BC (ganze Seite)', '△ADE ∼ △ABC'],
        examples: [
          { example: 'DE ∥ BC, AD = 4, DB = 6, AE = 5. Bestimmen Sie EC.', solution: '4/6 = 5/EC → EC = 7,5.' },
          { example: 'DE ∥ BC, AD = 3, AB = 9, BC = 12. Bestimmen Sie DE.', solution: 'DE/12 = 3/9 → DE = 4.' },
        ],
        commonMistakes: [
          { mistake: 'DE/BC = AD/DB', fix: 'Für DE nimmt man AD/AB (ähnliche Dreiecke), nicht AD/DB.' },
        ],
        practice: [
          { problem: 'Ein 2 m hoher Pfahl wirft 3 m Schatten; ein Baum wirft 15 m Schatten. Wie hoch ist der Baum?', solution: '10 m', steps: ['h : 15 = 2 : 3.', 'h = 10 m.'] },
          { problem: 'DE ∥ BC, AD = 2, DB = 3, AE = 4. Bestimmen Sie EC.', solution: '6', steps: ['2/3 = 4/EC.', 'EC = 6.'] },
          { problem: 'DE ∥ BC, DE = 5, BC = 15, AB = 12. Bestimmen Sie AD.', solution: '4', steps: ['AD/12 = 5/15.', 'AD = 4.'] },
        ],
      },
    },

    // ───────── 4. Enlargement
    {
      slug: 'g9-similarity-homothety',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 7, yMin: -0.5, yMax: 4 }, grid: true, axes: true, height: 200,
        shapes: [
          { kind: 'polygon', points: [[1, 0.5], [2, 0.5], [2, 1]], fill: true, color: 'primary' },
          { kind: 'polygon', points: [[3, 1.5], [6, 1.5], [6, 3]], fill: true, color: 'secondary', dashed: true },
          { kind: 'segment', from: [0, 0], to: [6, 3], color: 'muted', dashed: true },
          { kind: 'segment', from: [0, 0], to: [6, 1.5], color: 'muted', dashed: true },
          { kind: 'point', at: [0, 0], label: 'O', labelPos: 'sw' },
          { kind: 'point', at: [2, 1], label: 'A(2, 1)', labelPos: 'n' },
          { kind: 'point', at: [6, 3], label: 'A′(6, 3)', labelPos: 'n', color: 'secondary' },
        ],
        caption: alt('Homotetia me qendër O dhe k = 3: OA′ = 3 · OA; A(2, 1) → A′(6, 3).', 'Enlargement with centre O and k = 3: OA′ = 3 · OA; A(2, 1) → A′(6, 3).', 'Zentrische Streckung mit Zentrum O und k = 3: OA′ = 3 · OA; A(2 | 1) → A′(6 | 3).'),
        alt: alt('Trekëndësh i vogël dhe shëmbëllimi i tij tri herë më i madh nga qendra O.', 'A small triangle and its image three times as large from centre O.', 'Ein kleines Dreieck und sein dreimal so großes Bild vom Zentrum O aus.'),
      }],
      answers: {
        examples: [[['6 / 2', 3], ['3 / 1', 3]], 'text'],
        practice: ['text', [['5 * 3', 15]], [['10 * 2^2', 40]]],
      },
      al: {
        title: 'Homotetia',
        objectives: ['Të ndërtoni shëmbëllimin me homoteti me koeficient pozitiv ose negativ.', 'Të gjeni koeficientin dhe ndryshimin e gjatësive e sipërfaqeve.'],
        theory: 'Homotetia me qendër O dhe koeficient k e çon A në A′ në drejtëzën OA, me OA′ = k · OA (vektorialisht). Me qendër në origjinë: (x, y) → (kx, ky).\n\nNëse k > 0, A′ është në të njëjtën anë të O; nëse k < 0, në anën tjetër. Shëmbëllimi është i ngjashëm me figurën me koeficient |k|: gjatësitë × |k|, sipërfaqet × k².\n\nKoeficienti gjendet nga një pikë dhe shëmbëllimi i saj: A(2, 1) → A′(6, 3) jep k = 3.',
        keyPoints: ['OA′ = k · OA', 'Qendra O: (x, y) → (kx, ky)', 'Gjatësitë × |k|;  sipërfaqet × k²'],
        examples: [
          { example: 'Homotetia me qendër O e çon A(2, 1) në A′(6, 3). Sa është k?', solution: '6 : 2 = 3 dhe 3 : 1 = 3, pra k = 3.' },
          { example: 'Ku shkon (3, −1) me homoteti me qendër O dhe k = −2?', solution: '(−2 · 3, −2 · (−1)) = (−6, 2).' },
        ],
        commonMistakes: [
          { mistake: 'Me k = −2 gjatësitë bëhen negative.', fix: 'Gjatësitë shumëzohen me |k| = 2; shenja vetëm e kthen figurën në anën tjetër.' },
        ],
        practice: [
          { problem: 'Ku shkon (8, 4) me homoteti me qendër O dhe k = 1/2?', solution: '(4, 2)', steps: ['Shumëzojmë me 1/2.', '(4, 2).'] },
          { problem: 'Segmenti 5 cm, k = −3. Sa është shëmbëllimi?', solution: '15 cm', steps: ['|k| = 3.', '5 · 3 = 15 cm.'] },
          { problem: 'Figura ka sipërfaqe 10 cm²; k = 2. Sa është sipërfaqja e shëmbëllimit?', solution: '40 cm²', steps: ['k² = 4.', '10 · 4 = 40 cm².'] },
        ],
      },
      en: {
        title: 'Enlargement',
        objectives: ['Draw the image under an enlargement with a positive or negative factor.', 'Find the factor and the change in lengths and areas.'],
        theory: 'An enlargement with centre O and factor k takes A to A′ on the line OA with OA′ = k · OA (as vectors). With the centre at the origin: (x, y) → (kx, ky).\n\nIf k > 0, A′ is on the same side of O; if k < 0, on the other side. The image is similar to the shape with factor |k|: lengths × |k|, areas × k².\n\nThe factor comes from a point and its image: A(2, 1) → A′(6, 3) gives k = 3.',
        keyPoints: ['OA′ = k · OA', 'Centre O: (x, y) → (kx, ky)', 'Lengths × |k|;  areas × k²'],
        examples: [
          { example: 'An enlargement with centre O takes A(2, 1) to A′(6, 3). What is k?', solution: '6 ÷ 2 = 3 and 3 ÷ 1 = 3, so k = 3.' },
          { example: 'Where does (3, −1) go under an enlargement with centre O and k = −2?', solution: '(−2 · 3, −2 · (−1)) = (−6, 2).' },
        ],
        commonMistakes: [
          { mistake: 'With k = −2 lengths become negative.', fix: 'Lengths are multiplied by |k| = 2; the sign only flips the shape to the other side.' },
        ],
        practice: [
          { problem: 'Where does (8, 4) go under an enlargement with centre O and k = 1/2?', solution: '(4, 2)', steps: ['Multiply by 1/2.', '(4, 2).'] },
          { problem: 'A segment is 5 cm, k = −3. How long is its image?', solution: '15 cm', steps: ['|k| = 3.', '5 · 3 = 15 cm.'] },
          { problem: 'A shape has area 10 cm²; k = 2. What is the area of the image?', solution: '40 cm²', steps: ['k² = 4.', '10 · 4 = 40 cm².'] },
        ],
      },
      de: {
        title: 'Die zentrische Streckung',
        objectives: ['Das Bild bei einer Streckung mit positivem oder negativem Faktor zeichnen.', 'Den Faktor und die Änderung von Längen und Flächen bestimmen.'],
        theory: 'Eine zentrische Streckung mit Zentrum O und Faktor k bildet A auf A′ auf der Geraden OA ab, mit OA′ = k · OA (als Vektoren). Mit Zentrum im Ursprung: (x | y) → (kx | ky).\n\nIst k > 0, liegt A′ auf derselben Seite von O, ist k < 0, auf der anderen. Das Bild ist ähnlich zur Figur mit Faktor |k|: Längen · |k|, Flächen · k².\n\nDen Faktor erhält man aus Punkt und Bildpunkt: A(2 | 1) → A′(6 | 3) ergibt k = 3.',
        keyPoints: ['OA′ = k · OA', 'Zentrum O: (x | y) → (kx | ky)', 'Längen · |k|;  Flächen · k²'],
        examples: [
          { example: 'Eine Streckung mit Zentrum O bildet A(2 | 1) auf A′(6 | 3) ab. Wie groß ist k?', solution: '6 : 2 = 3 und 3 : 1 = 3, also k = 3.' },
          { example: 'Wohin wird (3 | −1) bei der Streckung mit Zentrum O und k = −2 abgebildet?', solution: '(−2 · 3 | −2 · (−1)) = (−6 | 2).' },
        ],
        commonMistakes: [
          { mistake: 'Bei k = −2 werden Längen negativ.', fix: 'Längen werden mit |k| = 2 multipliziert; das Vorzeichen klappt die Figur nur auf die andere Seite.' },
        ],
        practice: [
          { problem: 'Wohin wird (8 | 4) bei der Streckung mit Zentrum O und k = 1/2 abgebildet?', solution: '(4 | 2)', steps: ['Mit 1/2 multiplizieren.', '(4 | 2).'] },
          { problem: 'Eine Strecke ist 5 cm lang, k = −3. Wie lang ist das Bild?', solution: '15 cm', steps: ['|k| = 3.', '5 · 3 = 15 cm.'] },
          { problem: 'Eine Figur hat 10 cm², k = 2. Wie groß ist die Fläche des Bildes?', solution: '40 cm²', steps: ['k² = 4.', '10 · 4 = 40 cm².'] },
        ],
      },
    },
  ],
};
