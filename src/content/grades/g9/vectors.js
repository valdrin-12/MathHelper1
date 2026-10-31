// Grade 9 · Theme 7: Vectors (January–March)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g9-vectors',
  i18n: {
    al: { title: 'Vektorët', description: 'Vektorët e barabartë dhe të kundërt, mbledhja dhe zbritja, shumëzimi me numër dhe vektorët bashkëvizorë.' },
    en: { title: 'Vectors', description: 'Equal and opposite vectors, adding and subtracting, multiplying by a number and collinear vectors.' },
    de: { title: 'Vektoren', description: 'Gleiche und Gegenvektoren, Addition und Subtraktion, Vielfache und kollineare Vektoren.' },
  },
  lessons: [
    // ───────── 1. Equal and opposite vectors
    {
      slug: 'g9-vectors-equal-opposite',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 7.5, yMin: -0.8, yMax: 3.8 }, height: 180,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [5, 0], [7, 3], [2, 3]], color: 'muted', dashed: true },
          { kind: 'segment', from: [0, 0], to: [5, 0], color: 'primary', arrow: true, label: 'AB' },
          { kind: 'segment', from: [2, 3], to: [7, 3], color: 'primary', arrow: true, label: 'DC' },
          { kind: 'segment', from: [0, 0], to: [2, 3], color: 'secondary', arrow: true },
          { kind: 'label', at: [-0.3, -0.4], text: 'A' }, { kind: 'label', at: [5.3, -0.4], text: 'B' }, { kind: 'label', at: [7.3, 3.3], text: 'C' }, { kind: 'label', at: [1.8, 3.3], text: 'D' },
        ],
        caption: alt('Në paralelogramin ABCD: AB = DC (gjatësi, drejtim dhe kah i njëjtë).', 'In parallelogram ABCD: AB = DC (same length, direction and sense).', 'Im Parallelogramm ABCD: AB = DC (gleiche Länge, Richtung und Orientierung).'),
        alt: alt('Paralelogram ABCD me shigjetat AB dhe DC të barabarta.', 'Parallelogram ABCD with the equal arrows AB and DC.', 'Parallelogramm ABCD mit den gleichen Pfeilen AB und DC.'),
      }],
      answers: {
        examples: ['text', [['sqrt(3^2 + 2^2)', 3.61, 0.005, '3.61']]],
        practice: ['text', [['sqrt(3^2 + 4^2)', 5]], 'text'],
      },
      al: {
        title: 'Vektorët e barabartë dhe të kundërt',
        objectives: ['Të dalloni vektorët e barabartë dhe të kundërt.', 'Të shprehni vektorë me koordinata dhe të gjeni gjatësinë.'],
        theory: 'Vektori ka gjatësi (modul), drejtim dhe kah. Dy vektorë janë të barabartë kur kanë të treja të njëjta, edhe nëse fillojnë në pika të ndryshme. Në paralelogramin ABCD: AB = DC dhe AD = BC.\n\nVektori i kundërt i v ka të njëjtën gjatësi dhe drejtim, por kah të kundërt: −v. BA = −AB.\n\nMe koordinata: vektorët janë të barabartë kur kanë përbërëse të njëjta; −(a, b) = (−a, −b). Gjatësia e v = (a, b) është |v| = √(a² + b²).',
        keyPoints: ['E barabartë: gjatësi, drejtim, kah të njëjta', '−v: kah i kundërt;  BA = −AB', '|(a, b)| = √(a² + b²)'],
        examples: [
          { example: 'Në paralelogramin ABCD, cili vektor është i barabartë me AB dhe cili është i kundërt me të?', solution: 'AB = DC; i kundërt: BA = CD = −AB.' },
          { example: 'v = (3, −2). Gjeni −v dhe |v|.', solution: '−v = (−3, 2); |v| = √(9 + 4) = √13 ≈ 3,61.' },
        ],
        commonMistakes: [
          { mistake: 'AB dhe DC nuk janë të barabartë sepse fillojnë në pika të ndryshme.', fix: 'Vektori nuk varet nga pika e fillimit; vlen gjatësia, drejtimi dhe kahu.' },
        ],
        practice: [
          { problem: 'A(1, 2), B(4, 6), D(0, 0). Gjeni C që DC = AB.', solution: 'C(3, 4)', steps: ['AB = (3, 4).', 'C = D + (3, 4) = (3, 4).'] },
          { problem: 'Gjeni gjatësinë e AB për A(1, 2), B(4, 6).', solution: '5', steps: ['AB = (3, 4).', '√(9 + 16) = 5.'] },
          { problem: 'Shkruani vektorin e kundërt të (−2, 5).', solution: '(2, −5)', steps: ['Ndryshojnë shenjat e të dy përbërëseve.', '(2, −5).'] },
        ],
      },
      en: {
        title: 'Equal and opposite vectors',
        objectives: ['Recognise equal and opposite vectors.', 'Write vectors with components and find their length.'],
        theory: 'A vector has a length (magnitude), a direction and a sense. Two vectors are equal when all three are the same, even if they start at different points. In parallelogram ABCD: AB = DC and AD = BC.\n\nThe opposite of v has the same length and direction but the opposite sense: −v. BA = −AB.\n\nWith components: vectors are equal when their components are equal; −(a, b) = (−a, −b). The length of v = (a, b) is |v| = √(a² + b²).',
        keyPoints: ['Equal: same length, direction, sense', '−v: opposite sense;  BA = −AB', '|(a, b)| = √(a² + b²)'],
        examples: [
          { example: 'In parallelogram ABCD, which vector equals AB and which is opposite to it?', solution: 'AB = DC; opposite: BA = CD = −AB.' },
          { example: 'v = (3, −2). Find −v and |v|.', solution: '−v = (−3, 2); |v| = √(9 + 4) = √13 ≈ 3.61.' },
        ],
        commonMistakes: [
          { mistake: 'AB and DC are not equal because they start at different points.', fix: 'A vector does not depend on its starting point; length, direction and sense count.' },
        ],
        practice: [
          { problem: 'A(1, 2), B(4, 6), D(0, 0). Find C so that DC = AB.', solution: 'C(3, 4)', steps: ['AB = (3, 4).', 'C = D + (3, 4) = (3, 4).'] },
          { problem: 'Find the length of AB for A(1, 2), B(4, 6).', solution: '5', steps: ['AB = (3, 4).', '√(9 + 16) = 5.'] },
          { problem: 'Write the opposite of the vector (−2, 5).', solution: '(2, −5)', steps: ['Both components change sign.', '(2, −5).'] },
        ],
      },
      de: {
        title: 'Gleiche Vektoren und Gegenvektoren',
        objectives: ['Gleiche Vektoren und Gegenvektoren erkennen.', 'Vektoren in Koordinaten angeben und ihre Länge bestimmen.'],
        theory: 'Ein Vektor hat Länge (Betrag), Richtung und Orientierung. Zwei Vektoren sind gleich, wenn alle drei übereinstimmen, auch wenn sie an verschiedenen Punkten beginnen. Im Parallelogramm ABCD gilt AB = DC und AD = BC.\n\nDer Gegenvektor von v hat gleiche Länge und Richtung, aber entgegengesetzte Orientierung: −v. BA = −AB.\n\nIn Koordinaten sind Vektoren gleich, wenn ihre Koordinaten gleich sind; −(a | b) = (−a | −b). Die Länge von v = (a | b) ist |v| = √(a² + b²).',
        keyPoints: ['Gleich: Länge, Richtung, Orientierung gleich', '−v: entgegengesetzt;  BA = −AB', '|(a | b)| = √(a² + b²)'],
        examples: [
          { example: 'Welcher Vektor im Parallelogramm ABCD ist gleich AB, welcher ist sein Gegenvektor?', solution: 'AB = DC; Gegenvektor: BA = CD = −AB.' },
          { example: 'v = (3 | −2). Bestimmen Sie −v und |v|.', solution: '−v = (−3 | 2); |v| = √(9 + 4) = √13 ≈ 3,61.' },
        ],
        commonMistakes: [
          { mistake: 'AB und DC sind nicht gleich, weil sie an verschiedenen Punkten beginnen.', fix: 'Ein Vektor hängt nicht vom Anfangspunkt ab; es zählen Länge, Richtung und Orientierung.' },
        ],
        practice: [
          { problem: 'A(1 | 2), B(4 | 6), D(0 | 0). Bestimmen Sie C so, dass DC = AB.', solution: 'C(3 | 4)', steps: ['AB = (3 | 4).', 'C = D + (3 | 4) = (3 | 4).'] },
          { problem: 'Bestimmen Sie die Länge von AB für A(1 | 2), B(4 | 6).', solution: '5', steps: ['AB = (3 | 4).', '√(9 + 16) = 5.'] },
          { problem: 'Geben Sie den Gegenvektor von (−2 | 5) an.', solution: '(2 | −5)', steps: ['Beide Koordinaten wechseln das Vorzeichen.', '(2 | −5).'] },
        ],
      },
    },

    // ───────── 2. Adding and subtracting
    {
      slug: 'g9-vectors-adding-subtracting',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 4.5, yMin: -0.5, yMax: 4.5 }, grid: true, axes: true, height: 220,
        shapes: [
          { kind: 'segment', from: [0, 0], to: [2, 1], color: 'primary', arrow: true, label: 'u' },
          { kind: 'segment', from: [2, 1], to: [3, 4], color: 'secondary', arrow: true, label: 'v' },
          { kind: 'segment', from: [0, 0], to: [3, 4], color: 'success', arrow: true, label: 'u + v' },
        ],
        caption: alt('Rregulla e trekëndëshit: v fillon aty ku mbaron u; u + v = (2, 1) + (1, 3) = (3, 4).', 'The triangle rule: v starts where u ends; u + v = (2, 1) + (1, 3) = (3, 4).', 'Dreiecksregel: v beginnt, wo u endet; u + v = (2 | 1) + (1 | 3) = (3 | 4).'),
        alt: alt('Shigjetat u = (2, 1), v = (1, 3) dhe shuma u + v = (3, 4) nga origjina.', 'Arrows u = (2, 1), v = (1, 3) and the sum u + v = (3, 4) from the origin.', 'Pfeile u = (2 | 1), v = (1 | 3) und die Summe u + v = (3 | 4) vom Ursprung.'),
      }],
      answers: {
        examples: [[['2 + 1', 3], ['1 + 3', 4], ['sqrt(3^2 + 4^2)', 5]], 'text'],
        practice: [[['5 - 1', 4], ['2 - (-1)', 3], ['sqrt(4^2 + 3^2)', 5]], 'text', [['-1 + 3', 2], ['4 - 1', 3]]],
      },
      al: {
        title: 'Mbledhja dhe zbritja e vektorëve',
        objectives: ['Të mblidhni vektorë me rregullën e trekëndëshit dhe të paralelogramit.', 'Të mblidhni dhe zbritni vektorë me koordinata.'],
        theory: 'Rregulla e trekëndëshit: vendosim fillimin e v në fundin e u; u + v shkon nga fillimi i u te fundi i v. Për pika: AB + BC = AC. Rregulla e paralelogramit: nga e njëjta pikë, AB + AD = AC (diagonalja).\n\nZbritja: u − v = u + (−v). Në paralelogram: BD = AD − AB. Shuma AB + BC + CA = 0 (vektori zero), sepse kthehemi te pika e fillimit.\n\nMe koordinata mbledhim dhe zbresim përbërëse me përbërëse: (2, 1) + (1, 3) = (3, 4); (5, 2) − (1, −1) = (4, 3).',
        keyPoints: ['AB + BC = AC', 'Paralelogrami: AB + AD = AC', '(a, b) ± (c, d) = (a ± c, b ± d)'],
        examples: [
          { example: 'u = (2, 1), v = (1, 3). Gjeni u + v dhe |u + v|.', solution: 'u + v = (3, 4); |u + v| = 5.' },
          { example: 'Në paralelogramin ABCD shprehni AC dhe BD me AB dhe AD.', solution: 'AC = AB + AD; BD = AD − AB.' },
        ],
        commonMistakes: [
          { mistake: '|u + v| = |u| + |v|', fix: 'Gjatësitë mblidhen vetëm kur vektorët kanë të njëjtin drejtim dhe kah.' },
          { mistake: 'BD = AB − AD', fix: 'BD = AD − AB (fundi minus fillimi, nga A).' },
        ],
        practice: [
          { problem: 'u = (5, 2), v = (1, −1). Gjeni u − v dhe gjatësinë e tij.', solution: '(4, 3); 5', steps: ['(5 − 1, 2 + 1) = (4, 3).', '√(16 + 9) = 5.'] },
          { problem: 'Sa është AB + BC + CA?', solution: 'Vektori zero', steps: ['AB + BC = AC.', 'AC + CA = 0.'] },
          { problem: 'u = (−1, 4), v = (3, −1). Gjeni u + v.', solution: '(2, 3)', steps: ['−1 + 3 = 2; 4 − 1 = 3.', '(2, 3).'] },
        ],
      },
      en: {
        title: 'Adding and subtracting vectors',
        objectives: ['Add vectors with the triangle and parallelogram rules.', 'Add and subtract vectors with components.'],
        theory: 'Triangle rule: put the start of v at the end of u; u + v goes from the start of u to the end of v. With points: AB + BC = AC. Parallelogram rule: from the same point, AB + AD = AC (the diagonal).\n\nSubtracting: u − v = u + (−v). In a parallelogram: BD = AD − AB. The sum AB + BC + CA = 0 (the zero vector), because we return to the start.\n\nWith components we add and subtract component by component: (2, 1) + (1, 3) = (3, 4); (5, 2) − (1, −1) = (4, 3).',
        keyPoints: ['AB + BC = AC', 'Parallelogram: AB + AD = AC', '(a, b) ± (c, d) = (a ± c, b ± d)'],
        examples: [
          { example: 'u = (2, 1), v = (1, 3). Find u + v and |u + v|.', solution: 'u + v = (3, 4); |u + v| = 5.' },
          { example: 'In parallelogram ABCD express AC and BD in terms of AB and AD.', solution: 'AC = AB + AD; BD = AD − AB.' },
        ],
        commonMistakes: [
          { mistake: '|u + v| = |u| + |v|', fix: 'Lengths add only when the vectors have the same direction and sense.' },
          { mistake: 'BD = AB − AD', fix: 'BD = AD − AB (end minus start, from A).' },
        ],
        practice: [
          { problem: 'u = (5, 2), v = (1, −1). Find u − v and its length.', solution: '(4, 3); 5', steps: ['(5 − 1, 2 + 1) = (4, 3).', '√(16 + 9) = 5.'] },
          { problem: 'What is AB + BC + CA?', solution: 'The zero vector', steps: ['AB + BC = AC.', 'AC + CA = 0.'] },
          { problem: 'u = (−1, 4), v = (3, −1). Find u + v.', solution: '(2, 3)', steps: ['−1 + 3 = 2; 4 − 1 = 3.', '(2, 3).'] },
        ],
      },
      de: {
        title: 'Addition und Subtraktion von Vektoren',
        objectives: ['Vektoren mit Dreiecks- und Parallelogrammregel addieren.', 'Vektoren in Koordinaten addieren und subtrahieren.'],
        theory: 'Dreiecksregel: Den Anfang von v an das Ende von u setzen; u + v geht vom Anfang von u zum Ende von v. Mit Punkten: AB + BC = AC. Parallelogrammregel: vom selben Punkt aus AB + AD = AC (die Diagonale).\n\nSubtraktion: u − v = u + (−v). Im Parallelogramm: BD = AD − AB. Die Summe AB + BC + CA = 0 (Nullvektor), weil man zum Anfang zurückkehrt.\n\nIn Koordinaten addiert und subtrahiert man koordinatenweise: (2 | 1) + (1 | 3) = (3 | 4); (5 | 2) − (1 | −1) = (4 | 3).',
        keyPoints: ['AB + BC = AC', 'Parallelogramm: AB + AD = AC', '(a | b) ± (c | d) = (a ± c | b ± d)'],
        examples: [
          { example: 'u = (2 | 1), v = (1 | 3). Bestimmen Sie u + v und |u + v|.', solution: 'u + v = (3 | 4); |u + v| = 5.' },
          { example: 'Drücken Sie im Parallelogramm ABCD AC und BD durch AB und AD aus.', solution: 'AC = AB + AD; BD = AD − AB.' },
        ],
        commonMistakes: [
          { mistake: '|u + v| = |u| + |v|', fix: 'Längen addieren sich nur bei gleicher Richtung und Orientierung.' },
          { mistake: 'BD = AB − AD', fix: 'BD = AD − AB (Spitze minus Fuß, von A aus).' },
        ],
        practice: [
          { problem: 'u = (5 | 2), v = (1 | −1). Bestimmen Sie u − v und seine Länge.', solution: '(4 | 3); 5', steps: ['(5 − 1 | 2 + 1) = (4 | 3).', '√(16 + 9) = 5.'] },
          { problem: 'Was ergibt AB + BC + CA?', solution: 'Den Nullvektor', steps: ['AB + BC = AC.', 'AC + CA = 0.'] },
          { problem: 'u = (−1 | 4), v = (3 | −1). Bestimmen Sie u + v.', solution: '(2 | 3)', steps: ['−1 + 3 = 2; 4 − 1 = 3.', '(2 | 3).'] },
        ],
      },
    },

    // ───────── 3. Multiplying by a number
    {
      slug: 'g9-vectors-scalar-multiple',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3.5, xMax: 5, yMin: -2.5, yMax: 3.5 }, grid: true, axes: true, height: 220,
        shapes: [
          { kind: 'segment', from: [0, 0], to: [2, 1], color: 'primary', arrow: true, label: 'v' },
          { kind: 'segment', from: [0, 0.6], to: [4, 2.6], color: 'secondary', arrow: true, label: '2v' },
          { kind: 'segment', from: [0, 0], to: [-2, -1], color: 'success', arrow: true, label: '−v' },
        ],
        caption: alt('2v ka të njëjtin drejtim dhe kah si v dhe gjatësi dyfish; −v ka kah të kundërt.', '2v has the same direction and sense as v and twice the length; −v has the opposite sense.', '2v hat dieselbe Richtung und Orientierung wie v und die doppelte Länge; −v ist entgegengesetzt.'),
        alt: alt('Shigjetat v = (2, 1), 2v = (4, 2) dhe −v = (−2, −1).', 'Arrows v = (2, 1), 2v = (4, 2) and −v = (−2, −1).', 'Pfeile v = (2 | 1), 2v = (4 | 2) und −v = (−2 | −1).'),
      }],
      answers: {
        examples: [[['3 * 2', 6], ['3 * (-1)', -3]], [['2 * 5', 10]]],
        practice: [[['2*1 - (-2)', 4], ['2*3 - 1', 5]], [['6 / 2', 3], ['-4 / 2', -2]], [['0.5 * sqrt(8^2 + 6^2)', 5]]],
      },
      al: {
        title: 'Shumëzimi i vektorit me numër',
        objectives: ['Të shumëzoni vektorë me numër me koordinata dhe grafikisht.', 'Të lidhni koeficientin me gjatësinë dhe kahun.'],
        theory: 'Vektori k · v ka drejtimin e v. Nëse k > 0 ka të njëjtin kah, nëse k < 0 kah të kundërt. Gjatësia shumëzohet me |k|: |k · v| = |k| · |v|.\n\nMe koordinata: k · (a, b) = (ka, kb). 3 · (2, −1) = (6, −3). Kombinimet: 2u − v për u = (1, 3), v = (−2, 1): (2, 6) − (−2, 1) = (4, 5).\n\nZbatim: nëse M është mesi i AB, atëherë AM = ½ AB.',
        keyPoints: ['k · (a, b) = (ka, kb)', '|k · v| = |k| · |v|', 'k < 0 → kahu kthehet'],
        examples: [
          { example: 'Llogaritni 3 · (2, −1).', solution: '(6, −3).' },
          { example: '|v| = 5. Sa është |−2v|?', solution: '|−2| · 5 = 10.' },
        ],
        commonMistakes: [
          { mistake: '|−2v| = −10', fix: 'Gjatësia nuk është negative: |−2| · |v| = 10.' },
        ],
        practice: [
          { problem: 'u = (1, 3), v = (−2, 1). Gjeni 2u − v.', solution: '(4, 5)', steps: ['2u = (2, 6).', '(2 + 2, 6 − 1) = (4, 5).'] },
          { problem: 'AB = (6, −4) dhe M mesi i AB. Gjeni AM.', solution: '(3, −2)', steps: ['AM = ½ AB.', '(3, −2).'] },
          { problem: 'Sa është gjatësia e 0,5 · (8, 6)?', solution: '5', steps: ['0,5 · (8, 6) = (4, 3).', '√(16 + 9) = 5.'] },
        ],
      },
      en: {
        title: 'Multiplying a vector by a number',
        objectives: ['Multiply vectors by a number with components and in a drawing.', 'Relate the factor to length and sense.'],
        theory: 'The vector k · v has the direction of v. If k > 0 it has the same sense, if k < 0 the opposite sense. The length is multiplied by |k|: |k · v| = |k| · |v|.\n\nWith components: k · (a, b) = (ka, kb). 3 · (2, −1) = (6, −3). Combinations: 2u − v for u = (1, 3), v = (−2, 1): (2, 6) − (−2, 1) = (4, 5).\n\nUse: if M is the midpoint of AB, then AM = ½ AB.',
        keyPoints: ['k · (a, b) = (ka, kb)', '|k · v| = |k| · |v|', 'k < 0 → the sense reverses'],
        examples: [
          { example: 'Work out 3 · (2, −1).', solution: '(6, −3).' },
          { example: '|v| = 5. What is |−2v|?', solution: '|−2| · 5 = 10.' },
        ],
        commonMistakes: [
          { mistake: '|−2v| = −10', fix: 'A length is never negative: |−2| · |v| = 10.' },
        ],
        practice: [
          { problem: 'u = (1, 3), v = (−2, 1). Find 2u − v.', solution: '(4, 5)', steps: ['2u = (2, 6).', '(2 + 2, 6 − 1) = (4, 5).'] },
          { problem: 'AB = (6, −4) and M is the midpoint of AB. Find AM.', solution: '(3, −2)', steps: ['AM = ½ AB.', '(3, −2).'] },
          { problem: 'What is the length of 0.5 · (8, 6)?', solution: '5', steps: ['0.5 · (8, 6) = (4, 3).', '√(16 + 9) = 5.'] },
        ],
      },
      de: {
        title: 'Vielfache eines Vektors',
        objectives: ['Vektoren in Koordinaten und zeichnerisch mit einer Zahl multiplizieren.', 'Den Faktor mit Länge und Orientierung verknüpfen.'],
        theory: 'Der Vektor k · v hat die Richtung von v. Für k > 0 hat er dieselbe Orientierung, für k < 0 die entgegengesetzte. Die Länge wird mit |k| multipliziert: |k · v| = |k| · |v|.\n\nIn Koordinaten: k · (a | b) = (ka | kb). 3 · (2 | −1) = (6 | −3). Kombinationen: 2u − v für u = (1 | 3), v = (−2 | 1): (2 | 6) − (−2 | 1) = (4 | 5).\n\nAnwendung: Ist M der Mittelpunkt von AB, dann gilt AM = ½ AB.',
        keyPoints: ['k · (a | b) = (ka | kb)', '|k · v| = |k| · |v|', 'k < 0 → Orientierung kehrt sich um'],
        examples: [
          { example: 'Berechnen Sie 3 · (2 | −1).', solution: '(6 | −3).' },
          { example: '|v| = 5. Wie groß ist |−2v|?', solution: '|−2| · 5 = 10.' },
        ],
        commonMistakes: [
          { mistake: '|−2v| = −10', fix: 'Eine Länge ist nie negativ: |−2| · |v| = 10.' },
        ],
        practice: [
          { problem: 'u = (1 | 3), v = (−2 | 1). Bestimmen Sie 2u − v.', solution: '(4 | 5)', steps: ['2u = (2 | 6).', '(2 + 2 | 6 − 1) = (4 | 5).'] },
          { problem: 'AB = (6 | −4), M ist Mittelpunkt von AB. Bestimmen Sie AM.', solution: '(3 | −2)', steps: ['AM = ½ AB.', '(3 | −2).'] },
          { problem: 'Wie lang ist 0,5 · (8 | 6)?', solution: '5', steps: ['0,5 · (8 | 6) = (4 | 3).', '√(16 + 9) = 5.'] },
        ],
      },
    },

    // ───────── 4. Collinear vectors
    {
      slug: 'g9-vectors-collinear',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 7, yMin: -0.5, yMax: 7.5 }, grid: true, axes: true, height: 230,
        shapes: [
          { kind: 'line', through: [[0, 0], [2, 3]], color: 'muted', dashed: true },
          { kind: 'segment', from: [0, 0], to: [2, 3], color: 'primary', arrow: true, label: 'u' },
          { kind: 'segment', from: [2, 3], to: [4, 6], color: 'secondary', arrow: true },
          { kind: 'label', at: [4.6, 5.6], text: '3u = (6, 9)', color: 'secondary' },
        ],
        caption: alt('u = (2, 3) dhe 3u = (6, 9) shtrihen në të njëjtën drejtëz: janë bashkëvizorë.', 'u = (2, 3) and 3u = (6, 9) lie on the same line: they are collinear.', 'u = (2 | 3) und 3u = (6 | 9) liegen auf derselben Geraden: Sie sind kollinear.'),
        alt: alt('Vektori u = (2, 3) dhe vazhdimi i tij në të njëjtën drejtëz.', 'The vector u = (2, 3) and its continuation along the same line.', 'Der Vektor u = (2 | 3) und seine Verlängerung auf derselben Geraden.'),
      }],
      answers: {
        examples: ['text', [['2 * 8', 16], ['3 * 6', 18]]],
        practice: [[['5 * 4 / 2', 10]], [['3 / 2', 1.5]], [['-3 / 1', -3]]],
      },
      al: {
        title: 'Vektorët bashkëvizorë',
        objectives: ['Të dalloni vektorët bashkëvizorë me koeficient.', 'Të provoni nëse tri pika shtrihen në një drejtëz.'],
        theory: 'Dy vektorë jozero u dhe v janë bashkëvizorë (kolinearë) kur kanë drejtim të njëjtë, d.m.th. ekziston numri k me v = k · u. Me k > 0 kanë të njëjtin kah, me k < 0 kah të kundërt.\n\nMe koordinata: (a, b) dhe (c, d) janë bashkëvizorë kur përbërëset janë në përpjesëtim: a · d = b · c. (2, 3) dhe (6, 8): 2 · 8 = 16 ≠ 18 = 3 · 6, pra nuk janë.\n\nTri pika A, B, C shtrihen në një drejtëz kur AB dhe AC janë bashkëvizorë.',
        keyPoints: ['v = k · u ⟺ bashkëvizorë', '(a, b) ∥ (c, d) ⟺ ad = bc', 'A, B, C në një drejtëz ⟺ AB ∥ AC'],
        examples: [
          { example: 'Nëse v = 3u, a janë u dhe v bashkëvizorë? Me të njëjtin kah?', solution: 'Po, k = 3; dhe po, sepse k > 0.' },
          { example: 'A janë bashkëvizorë (2, 3) dhe (6, 8)?', solution: '2 · 8 = 16 dhe 3 · 6 = 18; 16 ≠ 18, pra jo.' },
        ],
        commonMistakes: [
          { mistake: '(2, 3) dhe (6, 8) janë bashkëvizorë sepse të dy kanë përbërëse pozitive.', fix: 'Duhet përpjesëtim: 6 : 2 = 3, por 8 : 3 ≠ 3.' },
        ],
        practice: [
          { problem: 'Gjeni m që (4, m) të jetë bashkëvizor me (2, 5).', solution: 'm = 10', steps: ['4 · 5 = 2 · m.', 'm = 10.'] },
          { problem: 'A(1, 1), B(3, 5), C(4, 7). A shtrihen në një drejtëz?', solution: 'Po, AC = 1,5 · AB', steps: ['AB = (2, 4), AC = (3, 6).', 'AC = 1,5 · AB.'] },
          { problem: 'A janë (−3, 6) dhe (1, −2) bashkëvizorë? Me çfarë koeficienti?', solution: 'Po, k = −3 (kah i kundërt)', steps: ['(−3, 6) = −3 · (1, −2).', 'k = −3 < 0.'] },
        ],
      },
      en: {
        title: 'Collinear vectors',
        objectives: ['Recognise collinear vectors with a factor.', 'Test whether three points lie on one line.'],
        theory: 'Two non-zero vectors u and v are collinear when they have the same direction, i.e. there is a number k with v = k · u. With k > 0 they have the same sense, with k < 0 the opposite sense.\n\nWith components: (a, b) and (c, d) are collinear when the components are proportional: a · d = b · c. (2, 3) and (6, 8): 2 · 8 = 16 ≠ 18 = 3 · 6, so they are not.\n\nThree points A, B, C lie on one line when AB and AC are collinear.',
        keyPoints: ['v = k · u ⟺ collinear', '(a, b) ∥ (c, d) ⟺ ad = bc', 'A, B, C on one line ⟺ AB ∥ AC'],
        examples: [
          { example: 'If v = 3u, are u and v collinear? With the same sense?', solution: 'Yes, k = 3; and yes, because k > 0.' },
          { example: 'Are (2, 3) and (6, 8) collinear?', solution: '2 · 8 = 16 and 3 · 6 = 18; 16 ≠ 18, so no.' },
        ],
        commonMistakes: [
          { mistake: '(2, 3) and (6, 8) are collinear because both have positive components.', fix: 'They must be proportional: 6 ÷ 2 = 3, but 8 ÷ 3 ≠ 3.' },
        ],
        practice: [
          { problem: 'Find m so that (4, m) is collinear with (2, 5).', solution: 'm = 10', steps: ['4 · 5 = 2 · m.', 'm = 10.'] },
          { problem: 'A(1, 1), B(3, 5), C(4, 7). Do they lie on one line?', solution: 'Yes, AC = 1.5 · AB', steps: ['AB = (2, 4), AC = (3, 6).', 'AC = 1.5 · AB.'] },
          { problem: 'Are (−3, 6) and (1, −2) collinear? With what factor?', solution: 'Yes, k = −3 (opposite sense)', steps: ['(−3, 6) = −3 · (1, −2).', 'k = −3 < 0.'] },
        ],
      },
      de: {
        title: 'Kollineare Vektoren',
        objectives: ['Kollineare Vektoren über einen Faktor erkennen.', 'Prüfen, ob drei Punkte auf einer Geraden liegen.'],
        theory: 'Zwei Vektoren u, v ≠ 0 sind kollinear, wenn sie dieselbe Richtung haben, d. h. es gibt eine Zahl k mit v = k · u. Für k > 0 sind sie gleich orientiert, für k < 0 entgegengesetzt.\n\nIn Koordinaten: (a | b) und (c | d) sind kollinear, wenn die Koordinaten proportional sind: a · d = b · c. (2 | 3) und (6 | 8): 2 · 8 = 16 ≠ 18 = 3 · 6, also nicht.\n\nDrei Punkte A, B, C liegen auf einer Geraden, wenn AB und AC kollinear sind.',
        keyPoints: ['v = k · u ⟺ kollinear', '(a | b) ∥ (c | d) ⟺ ad = bc', 'A, B, C auf einer Geraden ⟺ AB ∥ AC'],
        examples: [
          { example: 'Ist v = 3u, sind u und v dann kollinear? Gleich orientiert?', solution: 'Ja, k = 3; und ja, weil k > 0.' },
          { example: 'Sind (2 | 3) und (6 | 8) kollinear?', solution: '2 · 8 = 16 und 3 · 6 = 18; 16 ≠ 18, also nein.' },
        ],
        commonMistakes: [
          { mistake: '(2 | 3) und (6 | 8) sind kollinear, weil beide positive Koordinaten haben.', fix: 'Sie müssen proportional sein: 6 : 2 = 3, aber 8 : 3 ≠ 3.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie m so, dass (4 | m) kollinear zu (2 | 5) ist.', solution: 'm = 10', steps: ['4 · 5 = 2 · m.', 'm = 10.'] },
          { problem: 'A(1 | 1), B(3 | 5), C(4 | 7). Liegen sie auf einer Geraden?', solution: 'Ja, AC = 1,5 · AB', steps: ['AB = (2 | 4), AC = (3 | 6).', 'AC = 1,5 · AB.'] },
          { problem: 'Sind (−3 | 6) und (1 | −2) kollinear? Mit welchem Faktor?', solution: 'Ja, k = −3 (entgegengesetzt)', steps: ['(−3 | 6) = −3 · (1 | −2).', 'k = −3 < 0.'] },
        ],
      },
    },
  ],
};
