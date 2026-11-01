// Grade 11 · Theme 7: Pythagoras, trigonometry and vectors (February–March)
const alt = (al, en, de) => ({ al, en, de });
const A60 = [2.5, Number((5 * Math.sin(Math.PI / 3)).toFixed(3))]; // b = 5 at 60° from C

export default {
  id: 'g11-pythagoras-trig-vectors',
  i18n: {
    al: { title: 'Pitagora, trigonometria dhe vektorët', description: 'Teorema e Pitagorës dhe e Euklidit, sin, cos dhe tg në trekëndëshin kënddrejtë, teorema e sinusit dhe e kosinusit, vektorët.' },
    en: { title: 'Pythagoras, trigonometry and vectors', description: 'Pythagoras and Euclid\'s theorems, sin, cos and tan in right-angled triangles, the sine and cosine rules, vectors.' },
    de: { title: 'Pythagoras, Trigonometrie und Vektoren', description: 'Satz des Pythagoras, Kathetensatz und Höhensatz, sin, cos und tan im rechtwinkligen Dreieck, Sinus- und Kosinussatz, Vektoren.' },
  },
  lessons: [
    // ───────── 1. Pythagoras and Euclid
    {
      slug: 'g11-pythagoras-trig-vectors-pythagoras-euclid',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.8, xMax: 10.8, yMin: -1.2, yMax: 5.6 }, height: 200,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [10, 0], [6.4, 4.8]], color: 'primary' },
          { kind: 'segment', from: [6.4, 4.8], to: [6.4, 0], color: 'secondary', dashed: true, label: 'h' },
          { kind: 'angle', vertex: [6.4, 4.8], from: [0, 0], to: [10, 0], right: true, color: 'primary' },
          { kind: 'angle', vertex: [6.4, 0], from: [10, 0], to: [6.4, 4.8], right: true, color: 'secondary' },
          { kind: 'label', at: [3.2, -0.6], text: alt('q = 6,4', 'q = 6.4', 'q = 6,4'), color: 'success' },
          { kind: 'label', at: [8.2, -0.6], text: alt('p = 3,6', 'p = 3.6', 'p = 3,6'), color: 'purple' },
          { kind: 'label', at: [2.8, 3], text: 'b = 8' },
          { kind: 'label', at: [8.9, 2.8], text: 'a = 6' },
        ],
        caption: alt('c = p + q = 10; a² = c · p = 36, b² = c · q = 64, h² = p · q = 23,04.', 'c = p + q = 10; a² = c · p = 36, b² = c · q = 64, h² = p · q = 23.04.', 'c = p + q = 10; a² = c · p = 36, b² = c · q = 64, h² = p · q = 23,04.'),
        alt: alt('Trekëndësh kënddrejtë me hipotenuzë 10, lartësinë h mbi hipotenuzë dhe projeksionet 3,6 e 6,4.', 'A right triangle with hypotenuse 10, the height h onto the hypotenuse and the projections 3.6 and 6.4.', 'Rechtwinkliges Dreieck mit Hypotenuse 10, der Höhe h auf die Hypotenuse und den Hypotenusenabschnitten 3,6 und 6,4.'),
      }],
      answers: {
        examples: [[['sqrt(10 * 3.6)', 6]], [['sqrt(3.6 * 6.4)', 4.8]]],
        practice: [[['sqrt(25 - 1.96)', 4.8]], [['9^2 + 40^2', 1681]], [['36 / 4', 9]]],
      },
      al: {
        title: 'Teorema e Pitagorës dhe e Euklidit',
        objectives: ['Të përdorni teoremën e Pitagorës dhe të anasjelltën e saj.', 'Të përdorni teoremat e Euklidit për katetet dhe për lartësinë.'],
        theory: 'Në trekëndëshin kënddrejtë me katete a, b dhe hipotenuzë c: a² + b² = c². E anasjellta: nëse a² + b² = c², trekëndëshi është kënddrejtë.\n\nLartësia h mbi hipotenuzë e ndan atë në projeksionet p (e katetes a) dhe q (e katetes b), c = p + q. Teoremat e Euklidit:\n• a² = c · p dhe b² = c · q (kateti);\n• h² = p · q (lartësia).\n\nShembull: c = 10, p = 3,6, q = 6,4 → a = √36 = 6, b = √64 = 8, h = √23,04 = 4,8.',
        keyPoints: ['a² + b² = c²', 'a² = c · p, b² = c · q', 'h² = p · q'],
        examples: [
          { example: 'Hipotenuza është 10 cm dhe projeksioni i katetes a është 3,6 cm. Sa është a?', solution: 'a² = 10 · 3,6 = 36 → a = 6 cm.' },
          { example: 'Projeksionet janë 3,6 cm dhe 6,4 cm. Sa është lartësia mbi hipotenuzë?', solution: 'h² = 3,6 · 6,4 = 23,04 → h = 4,8 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Kur mungon një katet, katrorët mblidhen: a² = 5² + 1,4².', fix: 'Kateti: a² = c² − b².' },
          { mistake: 'Te a² = c · p merret projeksioni i katetes tjetër.', fix: 'Çdo katet shkon me projeksionin e vet, atë që e prek.' },
        ],
        practice: [
          { problem: 'Një shkallë 5 m mbështetet në mur me këmbën 1,4 m larg murit. Në çfarë lartësie arrin?', solution: '4,8 m', steps: ['h² = 5² − 1,4² = 25 − 1,96 = 23,04.', 'h = 4,8 m.'] },
          { problem: 'A është kënddrejtë trekëndëshi me brinjë 9, 40, 41?', solution: 'Po', steps: ['9² + 40² = 81 + 1 600 = 1 681.', '41² = 1 681 → po, kënddrejtë.'] },
          { problem: 'h = 6 cm dhe p = 4 cm. Sa është q?', solution: '9 cm', steps: ['h² = p · q → 36 = 4q.', 'q = 36 : 4 = 9 cm.'] },
        ],
      },
      en: {
        title: 'Pythagoras and Euclid\'s theorems',
        objectives: ['Use Pythagoras\' theorem and its converse.', 'Use Euclid\'s theorems for the legs and for the height.'],
        theory: 'In a right triangle with legs a, b and hypotenuse c: a² + b² = c². Converse: if a² + b² = c², the triangle is right-angled.\n\nThe height h onto the hypotenuse splits it into the projections p (of leg a) and q (of leg b), c = p + q. Euclid\'s theorems:\n• a² = c · p and b² = c · q (leg theorem);\n• h² = p · q (height theorem).\n\nExample: c = 10, p = 3.6, q = 6.4 → a = √36 = 6, b = √64 = 8, h = √23.04 = 4.8.',
        keyPoints: ['a² + b² = c²', 'a² = c · p, b² = c · q', 'h² = p · q'],
        examples: [
          { example: 'The hypotenuse is 10 cm and the projection of leg a is 3.6 cm. What is a?', solution: 'a² = 10 · 3.6 = 36 → a = 6 cm.' },
          { example: 'The projections are 3.6 cm and 6.4 cm. What is the height onto the hypotenuse?', solution: 'h² = 3.6 · 6.4 = 23.04 → h = 4.8 cm.' },
        ],
        commonMistakes: [
          { mistake: 'When a leg is missing, the squares are added: a² = 5² + 1.4².', fix: 'For a leg: a² = c² − b².' },
          { mistake: 'In a² = c · p the projection of the other leg is used.', fix: 'Each leg goes with its own projection, the one next to it.' },
        ],
        practice: [
          { problem: 'A 5 m ladder leans on a wall with its foot 1.4 m from the wall. How high does it reach?', solution: '4.8 m', steps: ['h² = 5² − 1.4² = 25 − 1.96 = 23.04.', 'h = 4.8 m.'] },
          { problem: 'Is the triangle with sides 9, 40, 41 right-angled?', solution: 'Yes', steps: ['9² + 40² = 81 + 1 600 = 1 681.', '41² = 1 681 → yes, right-angled.'] },
          { problem: 'h = 6 cm and p = 4 cm. What is q?', solution: '9 cm', steps: ['h² = p · q → 36 = 4q.', 'q = 36 ÷ 4 = 9 cm.'] },
        ],
      },
      de: {
        title: 'Satz des Pythagoras, Kathetensatz und Höhensatz',
        objectives: ['Den Satz des Pythagoras und seine Umkehrung anwenden.', 'Kathetensatz und Höhensatz des Euklid anwenden.'],
        theory: 'Im rechtwinkligen Dreieck mit Katheten a, b und Hypotenuse c gilt a² + b² = c². Umkehrung: Gilt a² + b² = c², ist das Dreieck rechtwinklig.\n\nDie Höhe h auf die Hypotenuse teilt diese in die Hypotenusenabschnitte p (zu a) und q (zu b), c = p + q. Sätze des Euklid:\n• a² = c · p und b² = c · q (Kathetensatz);\n• h² = p · q (Höhensatz).\n\nBeispiel: c = 10, p = 3,6, q = 6,4 → a = √36 = 6, b = √64 = 8, h = √23,04 = 4,8.',
        keyPoints: ['a² + b² = c²', 'a² = c · p, b² = c · q', 'h² = p · q'],
        examples: [
          { example: 'Die Hypotenuse ist 10 cm, der Abschnitt zur Kathete a ist 3,6 cm. Wie lang ist a?', solution: 'a² = 10 · 3,6 = 36 → a = 6 cm.' },
          { example: 'Die Hypotenusenabschnitte sind 3,6 cm und 6,4 cm. Wie lang ist die Höhe?', solution: 'h² = 3,6 · 6,4 = 23,04 → h = 4,8 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Fehlt eine Kathete, werden die Quadrate addiert: a² = 5² + 1,4².', fix: 'Für eine Kathete gilt a² = c² − b².' },
          { mistake: 'Bei a² = c · p wird der Abschnitt der anderen Kathete genommen.', fix: 'Jede Kathete gehört zu ihrem anliegenden Abschnitt.' },
        ],
        practice: [
          { problem: 'Eine 5 m lange Leiter lehnt an einer Wand, ihr Fuß steht 1,4 m von der Wand entfernt. Wie hoch reicht sie?', solution: '4,8 m', steps: ['h² = 5² − 1,4² = 25 − 1,96 = 23,04.', 'h = 4,8 m.'] },
          { problem: 'Ist das Dreieck mit den Seiten 9, 40, 41 rechtwinklig?', solution: 'Ja', steps: ['9² + 40² = 81 + 1 600 = 1 681.', '41² = 1 681 → ja, rechtwinklig.'] },
          { problem: 'h = 6 cm und p = 4 cm. Wie lang ist q?', solution: '9 cm', steps: ['h² = p · q → 36 = 4q.', 'q = 36 : 4 = 9 cm.'] },
        ],
      },
    },
    // ───────── 2. Trigonometry in right triangles
    {
      slug: 'g11-pythagoras-trig-vectors-triangle-trig',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1, xMax: 9.6, yMin: -1, yMax: 6.6 }, height: 200,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [8.19, 0], [8.19, 5.74]], color: 'primary' },
          { kind: 'angle', vertex: [8.19, 0], from: [0, 0], to: [8.19, 5.74], right: true, color: 'primary' },
          { kind: 'angle', vertex: [0, 0], from: [8.19, 0], to: [8.19, 5.74], label: '35°', color: 'secondary', r: 34 },
          { kind: 'label', at: [3.4, 3.4], text: '10', color: 'ink' },
          { kind: 'label', at: [9.1, 2.9], text: alt('e kundërt', 'opposite', 'Gegenkathete'), color: 'success' },
          { kind: 'label', at: [4.1, -0.6], text: alt('e afërt', 'adjacent', 'Ankathete'), color: 'purple' },
        ],
        caption: alt('sin 35° = e kundërt : hipotenuzë → e kundërta = 10 · sin 35° ≈ 5,74.', 'sin 35° = opposite ÷ hypotenuse → opposite = 10 · sin 35° ≈ 5.74.', 'sin 35° = Gegenkathete : Hypotenuse → Gegenkathete = 10 · sin 35° ≈ 5,74.'),
        alt: alt('Trekëndësh kënddrejtë me hipotenuzë 10 dhe kënd 35°, me katetet e kundërt dhe të afërt.', 'A right triangle with hypotenuse 10 and an angle of 35°, showing the opposite and adjacent sides.', 'Rechtwinkliges Dreieck mit Hypotenuse 10 und Winkel 35°, mit Gegen- und Ankathete.'),
      }],
      answers: {
        examples: [[['10 * sin(35 deg)', 5.74, 0.005]], [['atan(7/4) * 180 / pi', 60.3, 0.05]]],
        practice: [[['8 * tan(40 deg)', 6.71, 0.005]], [['acos(0.75) * 180 / pi', 41.4, 0.05]], [['50 * tan(32 deg)', 31.24, 0.005]]],
      },
      al: {
        title: 'Trigonometria në trekëndësh',
        objectives: ['Të përdorni sin, cos dhe tg për të gjetur një brinjë të trekëndëshit kënddrejtë.', 'Të gjeni një kënd me funksionet e anasjella dhe të zgjidhni probleme me kënd ngritjeje.'],
        theory: 'Për këndin α në trekëndëshin kënddrejtë:\nsin α = e kundërt / hipotenuzë, cos α = e afërt / hipotenuzë, tg α = e kundërt / e afërt.\n\nPër një brinjë: zgjedhim raportin që përmban dy brinjët (njëra e njohur): e kundërta = 10 · sin 35° ≈ 5,74.\nPër një kënd: përdorim sin⁻¹, cos⁻¹, tg⁻¹: tg α = 7/4 → α ≈ 60,3°.\n\nKëndi i ngritjes matet nga horizontalja lart. Makina duhet të jetë në gradë (DEG).',
        keyPoints: ['sin = k/h, cos = a/h, tg = k/a', 'Këndi: sin⁻¹, cos⁻¹, tg⁻¹', 'Makina në DEG'],
        examples: [
          { example: 'Hipotenuza 10 cm, këndi 35°. Sa është kateti përballë këndit?', solution: '10 · sin 35° ≈ 5,74 cm.' },
          { example: 'Kateti përballë është 7 cm, i afërti 4 cm. Sa është këndi?', solution: 'tg α = 7/4 → α = tg⁻¹(1,75) ≈ 60,3°.' },
        ],
        commonMistakes: [
          { mistake: 'Makina është në radianë dhe sin 35 jep −0,43.', fix: 'Vendoseni makinën në gradë (DEG).' },
          { mistake: 'Përdoret cos kur jepen e kundërta dhe hipotenuza.', fix: 'Zgjidhni raportin sipas brinjëve: k dhe h → sin.' },
        ],
        practice: [
          { problem: 'Kateti i afërt 8 cm, këndi 40°. Sa është kateti përballë?', solution: '≈ 6,71 cm', steps: ['tg 40° = k/8.', 'k = 8 · tg 40° ≈ 6,71 cm.'] },
          { problem: 'Hipotenuza 12 cm, kateti i afërt 9 cm. Sa është këndi?', solution: '≈ 41,4°', steps: ['cos α = 9/12 = 0,75.', 'α = cos⁻¹(0,75) ≈ 41,4°.'] },
          { problem: 'Nga 50 m larg, maja e një kulle shihet me kënd ngritjeje 32°. Sa e lartë është kulla?', solution: '≈ 31,24 m', steps: ['tg 32° = h/50.', 'h = 50 · tg 32° ≈ 31,24 m.'] },
        ],
      },
      en: {
        title: 'Trigonometry in right-angled triangles',
        objectives: ['Use sin, cos and tan to find a side of a right-angled triangle.', 'Find an angle with the inverse functions and solve angle-of-elevation problems.'],
        theory: 'For an angle α in a right-angled triangle:\nsin α = opposite / hypotenuse, cos α = adjacent / hypotenuse, tan α = opposite / adjacent.\n\nFor a side: choose the ratio that contains the two sides (one known): opposite = 10 · sin 35° ≈ 5.74.\nFor an angle: use sin⁻¹, cos⁻¹, tan⁻¹: tan α = 7/4 → α ≈ 60.3°.\n\nThe angle of elevation is measured up from the horizontal. The calculator must be in degrees (DEG).',
        keyPoints: ['sin = O/H, cos = A/H, tan = O/A', 'Angle: sin⁻¹, cos⁻¹, tan⁻¹', 'Calculator in DEG'],
        examples: [
          { example: 'Hypotenuse 10 cm, angle 35°. How long is the side opposite the angle?', solution: '10 · sin 35° ≈ 5.74 cm.' },
          { example: 'The opposite side is 7 cm, the adjacent 4 cm. What is the angle?', solution: 'tan α = 7/4 → α = tan⁻¹(1.75) ≈ 60.3°.' },
        ],
        commonMistakes: [
          { mistake: 'The calculator is in radians and sin 35 gives −0.43.', fix: 'Set the calculator to degrees (DEG).' },
          { mistake: 'cos is used when the opposite side and the hypotenuse are given.', fix: 'Choose the ratio by the sides: O and H → sin.' },
        ],
        practice: [
          { problem: 'Adjacent side 8 cm, angle 40°. How long is the opposite side?', solution: '≈ 6.71 cm', steps: ['tan 40° = O/8.', 'O = 8 · tan 40° ≈ 6.71 cm.'] },
          { problem: 'Hypotenuse 12 cm, adjacent side 9 cm. What is the angle?', solution: '≈ 41.4°', steps: ['cos α = 9/12 = 0.75.', 'α = cos⁻¹(0.75) ≈ 41.4°.'] },
          { problem: 'From 50 m away, the top of a tower is seen at an angle of elevation of 32°. How tall is the tower?', solution: '≈ 31.24 m', steps: ['tan 32° = h/50.', 'h = 50 · tan 32° ≈ 31.24 m.'] },
        ],
      },
      de: {
        title: 'Trigonometrie im rechtwinkligen Dreieck',
        objectives: ['Mit sin, cos und tan eine Seite im rechtwinkligen Dreieck berechnen.', 'Einen Winkel mit den Umkehrfunktionen bestimmen und Aufgaben mit Höhenwinkeln lösen.'],
        theory: 'Für einen Winkel α im rechtwinkligen Dreieck gilt:\nsin α = Gegenkathete / Hypotenuse, cos α = Ankathete / Hypotenuse, tan α = Gegenkathete / Ankathete.\n\nFür eine Seite: das Verhältnis wählen, das beide Seiten enthält (eine bekannt): Gegenkathete = 10 · sin 35° ≈ 5,74.\nFür einen Winkel: sin⁻¹, cos⁻¹, tan⁻¹ verwenden: tan α = 7/4 → α ≈ 60,3°.\n\nDer Höhenwinkel wird von der Waagerechten nach oben gemessen. Der Taschenrechner muss auf Grad (DEG) stehen.',
        keyPoints: ['sin = GK/H, cos = AK/H, tan = GK/AK', 'Winkel: sin⁻¹, cos⁻¹, tan⁻¹', 'Taschenrechner auf DEG'],
        examples: [
          { example: 'Hypotenuse 10 cm, Winkel 35°. Wie lang ist die Gegenkathete?', solution: '10 · sin 35° ≈ 5,74 cm.' },
          { example: 'Die Gegenkathete ist 7 cm, die Ankathete 4 cm. Wie groß ist der Winkel?', solution: 'tan α = 7/4 → α = tan⁻¹(1,75) ≈ 60,3°.' },
        ],
        commonMistakes: [
          { mistake: 'Der Rechner steht auf Bogenmaß, sin 35 ergibt −0,43.', fix: 'Den Rechner auf Grad (DEG) stellen.' },
          { mistake: 'Bei gegebener Gegenkathete und Hypotenuse wird cos verwendet.', fix: 'Das Verhältnis nach den Seiten wählen: GK und H → sin.' },
        ],
        practice: [
          { problem: 'Ankathete 8 cm, Winkel 40°. Wie lang ist die Gegenkathete?', solution: '≈ 6,71 cm', steps: ['tan 40° = GK/8.', 'GK = 8 · tan 40° ≈ 6,71 cm.'] },
          { problem: 'Hypotenuse 12 cm, Ankathete 9 cm. Wie groß ist der Winkel?', solution: '≈ 41,4°', steps: ['cos α = 9/12 = 0,75.', 'α = cos⁻¹(0,75) ≈ 41,4°.'] },
          { problem: 'Aus 50 m Entfernung sieht man die Turmspitze unter einem Höhenwinkel von 32°. Wie hoch ist der Turm?', solution: '≈ 31,24 m', steps: ['tan 32° = h/50.', 'h = 50 · tan 32° ≈ 31,24 m.'] },
        ],
      },
    },
    // ───────── 3. Sine and cosine rules
    {
      slug: 'g11-pythagoras-trig-vectors-sine-cosine-rules',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1, xMax: 8, yMin: -1, yMax: 5.2 }, height: 200,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [7, 0], A60], color: 'primary' },
          { kind: 'angle', vertex: [0, 0], from: [7, 0], to: A60, label: '60°', color: 'secondary', r: 26 },
          { kind: 'label', at: [3.5, -0.6], text: 'a = 7' },
          { kind: 'label', at: [0.6, 2.6], text: 'b = 5' },
          { kind: 'label', at: [5.4, 2.6], text: 'c = ?', color: 'success' },
          { kind: 'point', at: [0, 0], label: 'C', labelPos: 'sw', color: 'ink' },
          { kind: 'point', at: [7, 0], label: 'B', labelPos: 'se', color: 'ink' },
          { kind: 'point', at: A60, label: 'A', labelPos: 'n', color: 'ink' },
        ],
        caption: alt('c² = a² + b² − 2ab · cos C = 49 + 25 − 35 = 39 → c = √39 ≈ 6,24.', 'c² = a² + b² − 2ab · cos C = 49 + 25 − 35 = 39 → c = √39 ≈ 6.24.', 'c² = a² + b² − 2ab · cos γ = 49 + 25 − 35 = 39 → c = √39 ≈ 6,24.'),
        alt: alt('Trekëndësh me brinjët a = 7 dhe b = 5 dhe këndin 60° në C.', 'A triangle with sides a = 7 and b = 5 and the angle 60° at C.', 'Dreieck mit den Seiten a = 7 und b = 5 und dem Winkel 60° bei C.'),
      }],
      answers: {
        examples: [[['sqrt(49 + 25 - 70 * cos(60 deg))', 6.24, 0.005]], [['0.5 * 8 * 6 * sin(30 deg)', 12]]],
        practice: [[['10 * sin(65 deg) / sin(40 deg)', 14.1, 0.005, '14.10']], [['acos(0.2) * 180 / pi', 78.46, 0.005]], [['0.5 * 9 * 10 * sin(120 deg)', 38.97, 0.005]]],
      },
      al: {
        title: 'Teorema e sinusit dhe e kosinusit',
        objectives: ['Të përdorni teoremën e sinusit dhe të kosinusit në çdo trekëndësh.', 'Të llogaritni syprinën me formulën 1/2 · ab · sin C.'],
        theory: 'Në çdo trekëndësh (jo vetëm kënddrejtë), brinja a është përballë këndit A, b përballë B, c përballë C.\n\nTeorema e sinusit: a/sin A = b/sin B = c/sin C. E përdorim kur njohim një brinjë dhe këndin përballë saj.\nTeorema e kosinusit: c² = a² + b² − 2ab · cos C. E përdorim kur njohim dy brinjë dhe këndin midis tyre, ose të tri brinjët (për një kënd).\n\nSyprina: S = 1/2 · ab · sin C. Me brinjët 8 dhe 6 dhe këndin 30° midis tyre: S = 1/2 · 8 · 6 · 0,5 = 12.',
        keyPoints: ['a/sin A = b/sin B = c/sin C', 'c² = a² + b² − 2ab · cos C', 'S = 1/2 · ab · sin C'],
        examples: [
          { example: 'Në trekëndëshin ABC, a = 7, b = 5, C = 60°. Gjeni c.', solution: 'c² = 49 + 25 − 2 · 7 · 5 · 0,5 = 39 → c = √39 ≈ 6,24.' },
          { example: 'Sa është syprina e trekëndëshit me brinjë 8 dhe 6 dhe kënd 30° ndërmjet tyre?', solution: 'S = 1/2 · 8 · 6 · sin 30° = 12.' },
        ],
        commonMistakes: [
          { mistake: 'Te teorema e kosinusit harrohet termi −2ab · cos C.', fix: 'Pa të vlen vetëm për 90°, ku cos 90° = 0.' },
          { mistake: 'Te syprina përdoret një kënd që nuk është midis dy brinjëve.', fix: 'Këndi duhet të jetë ai midis a dhe b.' },
        ],
        practice: [
          { problem: 'a = 10, A = 40°, B = 65°. Gjeni b (2 dhjetore).', solution: 'b ≈ 14,10', steps: ['b = a · sin B / sin A.', '10 · sin 65° / sin 40° ≈ 14,10.'] },
          { problem: 'Brinjët janë 5, 6 dhe 7. Sa është këndi më i madh?', solution: '≈ 78,46°', steps: ['cos C = (25 + 36 − 49)/(2 · 5 · 6) = 12/60 = 0,2.', 'C = cos⁻¹(0,2) ≈ 78,46°.'] },
          { problem: 'Sa është syprina e trekëndëshit me brinjë 9 dhe 10 dhe kënd 120° midis tyre?', solution: '≈ 38,97', steps: ['S = 1/2 · 9 · 10 · sin 120°.', '≈ 45 · 0,866 ≈ 38,97.'] },
        ],
      },
      en: {
        title: 'The sine and cosine rules',
        objectives: ['Use the sine rule and the cosine rule in any triangle.', 'Work out the area with the formula 1/2 · ab · sin C.'],
        theory: 'In any triangle (not only right-angled), side a is opposite angle A, b opposite B, c opposite C.\n\nSine rule: a/sin A = b/sin B = c/sin C. Use it when you know a side and the angle opposite it.\nCosine rule: c² = a² + b² − 2ab · cos C. Use it when you know two sides and the angle between them, or all three sides (to find an angle).\n\nArea: A = 1/2 · ab · sin C. With sides 8 and 6 and an angle of 30° between them: A = 1/2 · 8 · 6 · 0.5 = 12.',
        keyPoints: ['a/sin A = b/sin B = c/sin C', 'c² = a² + b² − 2ab · cos C', 'Area = 1/2 · ab · sin C'],
        examples: [
          { example: 'In triangle ABC, a = 7, b = 5, C = 60°. Find c.', solution: 'c² = 49 + 25 − 2 · 7 · 5 · 0.5 = 39 → c = √39 ≈ 6.24.' },
          { example: 'What is the area of the triangle with sides 8 and 6 and an angle of 30° between them?', solution: 'Area = 1/2 · 8 · 6 · sin 30° = 12.' },
        ],
        commonMistakes: [
          { mistake: 'In the cosine rule the term −2ab · cos C is forgotten.', fix: 'Without it the rule only works for 90°, where cos 90° = 0.' },
          { mistake: 'For the area an angle that is not between the two sides is used.', fix: 'The angle must be the one between a and b.' },
        ],
        practice: [
          { problem: 'a = 10, A = 40°, B = 65°. Find b (2 d.p.).', solution: 'b ≈ 14.10', steps: ['b = a · sin B / sin A.', '10 · sin 65° / sin 40° ≈ 14.10.'] },
          { problem: 'The sides are 5, 6 and 7. What is the largest angle?', solution: '≈ 78.46°', steps: ['cos C = (25 + 36 − 49)/(2 · 5 · 6) = 12/60 = 0.2.', 'C = cos⁻¹(0.2) ≈ 78.46°.'] },
          { problem: 'What is the area of the triangle with sides 9 and 10 and an angle of 120° between them?', solution: '≈ 38.97', steps: ['Area = 1/2 · 9 · 10 · sin 120°.', '≈ 45 · 0.866 ≈ 38.97.'] },
        ],
      },
      de: {
        title: 'Sinussatz und Kosinussatz',
        objectives: ['Sinussatz und Kosinussatz in beliebigen Dreiecken anwenden.', 'Den Flächeninhalt mit 1/2 · ab · sin γ berechnen.'],
        theory: 'In jedem Dreieck (nicht nur im rechtwinkligen) liegt die Seite a dem Winkel α gegenüber, b dem Winkel β, c dem Winkel γ.\n\nSinussatz: a/sin α = b/sin β = c/sin γ. Man braucht ihn, wenn eine Seite und der gegenüberliegende Winkel bekannt sind.\nKosinussatz: c² = a² + b² − 2ab · cos γ. Man braucht ihn bei zwei Seiten und dem eingeschlossenen Winkel oder bei drei Seiten (für einen Winkel).\n\nFlächeninhalt: A = 1/2 · ab · sin γ. Mit den Seiten 8 und 6 und dem eingeschlossenen Winkel 30°: A = 1/2 · 8 · 6 · 0,5 = 12.',
        keyPoints: ['a/sin α = b/sin β = c/sin γ', 'c² = a² + b² − 2ab · cos γ', 'A = 1/2 · ab · sin γ'],
        examples: [
          { example: 'Im Dreieck ABC ist a = 7, b = 5, γ = 60°. Berechnen Sie c.', solution: 'c² = 49 + 25 − 2 · 7 · 5 · 0,5 = 39 → c = √39 ≈ 6,24.' },
          { example: 'Wie groß ist der Flächeninhalt des Dreiecks mit den Seiten 8 und 6 und dem eingeschlossenen Winkel 30°?', solution: 'A = 1/2 · 8 · 6 · sin 30° = 12.' },
        ],
        commonMistakes: [
          { mistake: 'Beim Kosinussatz wird −2ab · cos γ vergessen.', fix: 'Ohne diesen Term gilt er nur für 90°, wo cos 90° = 0 ist.' },
          { mistake: 'Für den Flächeninhalt wird ein Winkel verwendet, der nicht zwischen den beiden Seiten liegt.', fix: 'Es muss der von a und b eingeschlossene Winkel sein.' },
        ],
        practice: [
          { problem: 'a = 10, α = 40°, β = 65°. Berechnen Sie b (2 Dezimalstellen).', solution: 'b ≈ 14,10', steps: ['b = a · sin β / sin α.', '10 · sin 65° / sin 40° ≈ 14,10.'] },
          { problem: 'Die Seiten sind 5, 6 und 7. Wie groß ist der größte Winkel?', solution: '≈ 78,46°', steps: ['cos γ = (25 + 36 − 49)/(2 · 5 · 6) = 12/60 = 0,2.', 'γ = cos⁻¹(0,2) ≈ 78,46°.'] },
          { problem: 'Wie groß ist der Flächeninhalt des Dreiecks mit den Seiten 9 und 10 und dem eingeschlossenen Winkel 120°?', solution: '≈ 38,97', steps: ['A = 1/2 · 9 · 10 · sin 120°.', '≈ 45 · 0,866 ≈ 38,97.'] },
        ],
      },
    },
    // ───────── 4. Vectors
    {
      slug: 'g11-pythagoras-trig-vectors-vectors',
      visuals: [{
        type: 'geoFigure', view: { xMin: -2, xMax: 5, yMin: -1, yMax: 8 }, grid: true, axes: true, height: 250,
        shapes: [
          { kind: 'segment', from: [0, 0], to: [2, 3], color: 'primary', arrow: true, label: 'a' },
          { kind: 'segment', from: [2, 3], to: [1, 7], color: 'secondary', arrow: true, label: 'b' },
          { kind: 'segment', from: [0, 0], to: [1, 7], color: 'success', arrow: true, dashed: true, label: 'a + b' },
        ],
        caption: alt('a = (2, 3), b = (−1, 4): a + b = (1, 7), b vendoset në fund të a.', 'a = (2, 3), b = (−1, 4): a + b = (1, 7), with b placed at the end of a.', 'a = (2 | 3), b = (−1 | 4): a + b = (1 | 7), b wird an das Ende von a gesetzt.'),
        alt: alt('Vektori a nga origjina te (2, 3), vektori b prej andej te (1, 7) dhe shuma a + b nga origjina te (1, 7).', 'Vector a from the origin to (2, 3), vector b from there to (1, 7) and the sum a + b from the origin to (1, 7).', 'Vektor a vom Ursprung nach (2 | 3), Vektor b von dort nach (1 | 7) und die Summe a + b vom Ursprung nach (1 | 7).'),
      }],
      answers: {
        examples: [[['2 + 2*(-1)', 0], ['3 + 2*4', 11]], [['sqrt(3^2 + 4^2)', 5]]],
        practice: [[['2 - (-1)', 3], ['3 - 4', -1]], [['3 * (-2)', -6], ['3 * 5', 15]], [['4 - 1', 3], ['6 - 2', 4], ['sqrt(3^2 + 4^2)', 5]]],
      },
      al: {
        title: 'Vektorët',
        objectives: ['Të mblidhni, zbritni dhe shumëzoni me numër vektorë në koordinata.', 'Të gjeni vektorin midis dy pikave dhe gjatësinë e tij.'],
        theory: 'Vektori ka gjatësi dhe drejtim. Në koordinata shkruhet a = (2, 3): 2 djathtas, 3 lart.\n\nVeprimet bëhen me koordinata: a + b = (2 + (−1), 3 + 4) = (1, 7); k · a shumëzon të dyja koordinatat. Për a + 2b: (2, 3) + (−2, 8) = (0, 11). Grafikisht, b vendoset në fund të a.\n\nVektori nga A te B: AB = B − A. Gjatësia (moduli) e (x, y) është √(x² + y²): |(3, 4)| = 5.',
        keyPoints: ['a + b dhe k · a: koordinatë me koordinatë', 'AB = B − A', '|(x, y)| = √(x² + y²)'],
        examples: [
          { example: 'a = (2, 3), b = (−1, 4). Gjeni a + 2b.', solution: '2b = (−2, 8); a + 2b = (0, 11).' },
          { example: 'Sa është gjatësia e vektorit (3, 4)?', solution: '√(9 + 16) = √25 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'Vektori AB llogaritet A − B.', fix: 'Fundi minus fillimi: AB = B − A.' },
          { mistake: 'Gjatësia e (3, 4) merret 3 + 4 = 7.', fix: 'Përdorni Pitagorën: √(3² + 4²) = 5.' },
        ],
        practice: [
          { problem: 'a = (2, 3), b = (−1, 4). Gjeni a − b.', solution: '(3, −1)', steps: ['2 − (−1) = 3.', '3 − 4 = −1 → (3, −1).'] },
          { problem: 'Gjeni 3 · (−2, 5).', solution: '(−6, 15)', steps: ['3 · (−2) = −6.', '3 · 5 = 15 → (−6, 15).'] },
          { problem: 'A(1, 2), B(4, 6). Gjeni vektorin AB dhe gjatësinë e tij.', solution: 'AB = (3, 4), |AB| = 5', steps: ['AB = (4 − 1, 6 − 2) = (3, 4).', '|AB| = √(9 + 16) = 5.'] },
        ],
      },
      en: {
        title: 'Vectors',
        objectives: ['Add, subtract and multiply vectors by a number in components.', 'Find the vector between two points and its length.'],
        theory: 'A vector has a length and a direction. In components it is written a = (2, 3): 2 to the right, 3 up.\n\nOperations work component by component: a + b = (2 + (−1), 3 + 4) = (1, 7); k · a multiplies both components. For a + 2b: (2, 3) + (−2, 8) = (0, 11). On a diagram, b is placed at the end of a.\n\nThe vector from A to B: AB = B − A. The length (magnitude) of (x, y) is √(x² + y²): |(3, 4)| = 5.',
        keyPoints: ['a + b and k · a: component by component', 'AB = B − A', '|(x, y)| = √(x² + y²)'],
        examples: [
          { example: 'a = (2, 3), b = (−1, 4). Find a + 2b.', solution: '2b = (−2, 8); a + 2b = (0, 11).' },
          { example: 'What is the length of the vector (3, 4)?', solution: '√(9 + 16) = √25 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'The vector AB is worked out as A − B.', fix: 'End minus start: AB = B − A.' },
          { mistake: 'The length of (3, 4) is taken as 3 + 4 = 7.', fix: 'Use Pythagoras: √(3² + 4²) = 5.' },
        ],
        practice: [
          { problem: 'a = (2, 3), b = (−1, 4). Find a − b.', solution: '(3, −1)', steps: ['2 − (−1) = 3.', '3 − 4 = −1 → (3, −1).'] },
          { problem: 'Find 3 · (−2, 5).', solution: '(−6, 15)', steps: ['3 · (−2) = −6.', '3 · 5 = 15 → (−6, 15).'] },
          { problem: 'A(1, 2), B(4, 6). Find the vector AB and its length.', solution: 'AB = (3, 4), |AB| = 5', steps: ['AB = (4 − 1, 6 − 2) = (3, 4).', '|AB| = √(9 + 16) = 5.'] },
        ],
      },
      de: {
        title: 'Vektoren',
        objectives: ['Vektoren in Koordinaten addieren, subtrahieren und mit einer Zahl multiplizieren.', 'Den Vektor zwischen zwei Punkten und seine Länge bestimmen.'],
        theory: 'Ein Vektor hat eine Länge und eine Richtung. In Koordinaten schreibt man a = (2 | 3): 2 nach rechts, 3 nach oben.\n\nGerechnet wird koordinatenweise: a + b = (2 + (−1) | 3 + 4) = (1 | 7); k · a multipliziert beide Koordinaten. Für a + 2b: (2 | 3) + (−2 | 8) = (0 | 11). Zeichnerisch setzt man b an das Ende von a.\n\nDer Vektor von A nach B: AB = B − A. Die Länge (der Betrag) von (x | y) ist √(x² + y²): |(3 | 4)| = 5.',
        keyPoints: ['a + b und k · a: koordinatenweise', 'AB = B − A', '|(x | y)| = √(x² + y²)'],
        examples: [
          { example: 'a = (2 | 3), b = (−1 | 4). Berechnen Sie a + 2b.', solution: '2b = (−2 | 8); a + 2b = (0 | 11).' },
          { example: 'Wie lang ist der Vektor (3 | 4)?', solution: '√(9 + 16) = √25 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'Der Vektor AB wird als A − B berechnet.', fix: 'Ende minus Anfang: AB = B − A.' },
          { mistake: 'Die Länge von (3 | 4) wird als 3 + 4 = 7 genommen.', fix: 'Pythagoras verwenden: √(3² + 4²) = 5.' },
        ],
        practice: [
          { problem: 'a = (2 | 3), b = (−1 | 4). Berechnen Sie a − b.', solution: '(3 | −1)', steps: ['2 − (−1) = 3.', '3 − 4 = −1 → (3 | −1).'] },
          { problem: 'Berechnen Sie 3 · (−2 | 5).', solution: '(−6 | 15)', steps: ['3 · (−2) = −6.', '3 · 5 = 15 → (−6 | 15).'] },
          { problem: 'A(1 | 2), B(4 | 6). Bestimmen Sie den Vektor AB und seine Länge.', solution: 'AB = (3 | 4), |AB| = 5', steps: ['AB = (4 − 1 | 6 − 2) = (3 | 4).', '|AB| = √(9 + 16) = 5.'] },
        ],
      },
    },
  ],
};
