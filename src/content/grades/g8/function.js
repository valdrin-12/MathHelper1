// Grade 8 · Theme 9: Functions (10 hours)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g8-function',
  i18n: {
    al: { title: 'Funksioni', description: 'Përpjesëtimi i drejtë dhe i zhdrejtë, funksioni y = k/x, ekuacioni ax + by = c, parabola y = ax² dhe leximi i grafikëve.' },
    en: { title: 'Functions', description: 'Direct and inverse proportion, the function y = k/x, the line ax + by = c, the parabola y = ax² and reading graphs.' },
    de: { title: 'Funktionen', description: 'Proportionale und antiproportionale Zuordnungen, die Funktion y = k/x, die Gerade ax + by = c, die Parabel y = ax² und Graphen lesen.' },
  },
  lessons: [
    // ───────── 1. Direct and inverse proportion
    {
      slug: 'g8-function-direct-inverse',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'x', cells: ['1', '2', '3', '4', '6'] },
          { head: 'y = 3x', cells: ['3', '6', '9', '12', '18'] },
          { head: 'y = 12/x', cells: ['12', '6', '4', '3', '2'] },
        ],
        caption: alt('Te y = 3x herësi y : x = 3 është konstant; te y = 12/x prodhimi x · y = 12 është konstant.', 'For y = 3x the quotient y ÷ x = 3 is constant; for y = 12/x the product x · y = 12 is constant.', 'Bei y = 3x ist der Quotient y : x = 3 konstant; bei y = 12/x ist das Produkt x · y = 12 konstant.'),
        alt: alt('Tabela për x = 1, 2, 3, 4, 6 me vlerat e y = 3x dhe y = 12/x.', 'Table for x = 1, 2, 3, 4, 6 with the values of y = 3x and y = 12/x.', 'Tabelle für x = 1, 2, 3, 4, 6 mit den Werten von y = 3x und y = 12/x.'),
      }],
      answers: {
        examples: [[['4 * 6', 24], ['24 / 3', 8]], [['6 / 4', 1.5], ['1.5 * 10', 15]]],
        practice: [[['2 * 9', 18]], [['20 / 5 * 8', 32]], [['2 * 15 / 10', 3]]],
      },
      al: {
        title: 'Përpjesëtimi i drejtë dhe i zhdrejtë',
        objectives: ['Të dalloni nga tabela përpjesëtimin e drejtë dhe të zhdrejtë.', 'Të gjeni koeficientin k dhe ta përdorni për vlera të reja.'],
        theory: 'Përpjesëtim i drejtë: y = kx; herësi y/x = k është konstant. Kur x dyfishohet, edhe y dyfishohet. Grafiku është drejtëz nëpër origjinë.\n\nPërpjesëtim i zhdrejtë: y = k/x; prodhimi x · y = k është konstant. Kur x dyfishohet, y përgjysmohet.\n\nPër ta dalluar nga tabela: llogaritni y/x dhe x · y për çdo kolonë. Nëse për x = 4 është y = 6 dhe varësia është e zhdrejtë: k = 24, pra për x = 3 del y = 24/3 = 8.',
        keyPoints: ['E drejtë: y = kx, y/x = k', 'E zhdrejtë: y = k/x, x · y = k', 'Gjeni k nga një çift, pastaj përdoreni'],
        examples: [
          { example: 'y është në përpjesëtim të zhdrejtë me x; për x = 4, y = 6. Gjeni y kur x = 3.', solution: 'k = 4 · 6 = 24; y = 24/3 = 8.' },
          { example: 'y është në përpjesëtim të drejtë me x; për x = 4, y = 6. Gjeni y kur x = 10.', solution: 'k = 6/4 = 1,5; y = 1,5 · 10 = 15.' },
        ],
        commonMistakes: [
          { mistake: 'Te varësia e zhdrejtë: y = 6 · 3/4 = 4,5', fix: 'Kjo është llogaritja e varësisë së drejtë; te e zhdrejta prodhimi mbetet: 24/3 = 8.' },
        ],
        practice: [
          { problem: 'Tabela: x = 2, 3, 6 → y = 9, 6, 3. Çfarë varësie është? Sa është k?', solution: 'E zhdrejtë, k = 18', steps: ['2 · 9 = 3 · 6 = 6 · 3 = 18.', 'Prodhimi konstant → e zhdrejtë, k = 18.'] },
          { problem: 'Varësi e drejtë: për x = 5, y = 20. Gjeni y për x = 8.', solution: '32', steps: ['k = 20/5 = 4.', 'y = 4 · 8 = 32.'] },
          { problem: 'Varësi e zhdrejtë: për x = 2, y = 15. Për cilin x është y = 10?', solution: 'x = 3', steps: ['k = 30.', 'x = 30/10 = 3.'] },
        ],
      },
      en: {
        title: 'Direct and inverse proportion',
        objectives: ['Recognise direct and inverse proportion from a table.', 'Find the constant k and use it for new values.'],
        theory: 'Direct proportion: y = kx; the quotient y/x = k is constant. When x doubles, y doubles. The graph is a line through the origin.\n\nInverse proportion: y = k/x; the product x · y = k is constant. When x doubles, y halves.\n\nTo tell them apart from a table: work out y/x and x · y for each column. If y = 6 when x = 4 and the proportion is inverse: k = 24, so for x = 3, y = 24/3 = 8.',
        keyPoints: ['Direct: y = kx, y/x = k', 'Inverse: y = k/x, x · y = k', 'Find k from one pair, then use it'],
        examples: [
          { example: 'y is inversely proportional to x; when x = 4, y = 6. Find y when x = 3.', solution: 'k = 4 · 6 = 24; y = 24/3 = 8.' },
          { example: 'y is directly proportional to x; when x = 4, y = 6. Find y when x = 10.', solution: 'k = 6/4 = 1.5; y = 1.5 · 10 = 15.' },
        ],
        commonMistakes: [
          { mistake: 'Inverse proportion: y = 6 · 3/4 = 4.5', fix: 'That is the direct-proportion calculation; for inverse the product stays: 24/3 = 8.' },
        ],
        practice: [
          { problem: 'Table: x = 2, 3, 6 → y = 9, 6, 3. What kind of proportion is it? What is k?', solution: 'Inverse, k = 18', steps: ['2 · 9 = 3 · 6 = 6 · 3 = 18.', 'Constant product → inverse, k = 18.'] },
          { problem: 'Direct proportion: when x = 5, y = 20. Find y for x = 8.', solution: '32', steps: ['k = 20/5 = 4.', 'y = 4 · 8 = 32.'] },
          { problem: 'Inverse proportion: when x = 2, y = 15. For which x is y = 10?', solution: 'x = 3', steps: ['k = 30.', 'x = 30/10 = 3.'] },
        ],
      },
      de: {
        title: 'Proportionale und antiproportionale Zuordnungen',
        objectives: ['Proportionale und antiproportionale Zuordnungen in Tabellen erkennen.', 'Den Faktor k bestimmen und für neue Werte nutzen.'],
        theory: 'Proportional: y = kx; der Quotient y/x = k ist konstant. Verdoppelt sich x, verdoppelt sich y. Der Graph ist eine Gerade durch den Ursprung.\n\nAntiproportional: y = k/x; das Produkt x · y = k ist konstant. Verdoppelt sich x, halbiert sich y.\n\nUnterscheiden in einer Tabelle: für jede Spalte y/x und x · y berechnen. Ist y = 6 für x = 4 und die Zuordnung antiproportional: k = 24, also für x = 3: y = 24/3 = 8.',
        keyPoints: ['Proportional: y = kx, y/x = k', 'Antiproportional: y = k/x, x · y = k', 'k aus einem Paar bestimmen, dann verwenden'],
        examples: [
          { example: 'y ist antiproportional zu x; für x = 4 ist y = 6. Bestimmen Sie y für x = 3.', solution: 'k = 4 · 6 = 24; y = 24/3 = 8.' },
          { example: 'y ist proportional zu x; für x = 4 ist y = 6. Bestimmen Sie y für x = 10.', solution: 'k = 6/4 = 1,5; y = 1,5 · 10 = 15.' },
        ],
        commonMistakes: [
          { mistake: 'Antiproportional: y = 6 · 3/4 = 4,5', fix: 'Das ist die proportionale Rechnung; antiproportional bleibt das Produkt: 24/3 = 8.' },
        ],
        practice: [
          { problem: 'Tabelle: x = 2, 3, 6 → y = 9, 6, 3. Welche Zuordnung ist es? Wie groß ist k?', solution: 'Antiproportional, k = 18', steps: ['2 · 9 = 3 · 6 = 6 · 3 = 18.', 'Produkt konstant → antiproportional, k = 18.'] },
          { problem: 'Proportional: Für x = 5 ist y = 20. Bestimmen Sie y für x = 8.', solution: '32', steps: ['k = 20/5 = 4.', 'y = 4 · 8 = 32.'] },
          { problem: 'Antiproportional: Für x = 2 ist y = 15. Für welches x ist y = 10?', solution: 'x = 3', steps: ['k = 30.', 'x = 30/10 = 3.'] },
        ],
      },
    },

    // ───────── 2. The function y = k/x
    {
      slug: 'g8-function-reciprocal',
      visuals: [{
        type: 'functionPlot', view: { xMin: -8, xMax: 8, yMin: -12, yMax: 12 }, height: 240,
        functions: [{ expr: '12/x', domain: [1, 8], label: 'y = 12/x' }, { expr: '12/x', domain: [-8, -1] }],
        points: [{ at: [2, 6], label: '(2, 6)' }, { at: [4, 3], label: '(4, 3)' }, { at: [-3, -4], label: '(−3, −4)' }],
        caption: alt('Grafiku i y = 12/x (hiperbola) ka dy degë, në kuadrantin I dhe III, dhe nuk i pret boshtet.', 'The graph of y = 12/x (a hyperbola) has two branches, in quadrants I and III, and never meets the axes.', 'Der Graph von y = 12/x (Hyperbel) hat zwei Äste, im I. und III. Quadranten, und trifft die Achsen nie.'),
        alt: alt('Hiperbola y = 12/x me dy degë dhe pikat (2, 6), (4, 3), (−3, −4).', 'The hyperbola y = 12/x with two branches and the points (2, 6), (4, 3), (−3, −4).', 'Die Hyperbel y = 12/x mit zwei Ästen und den Punkten (2 | 6), (4 | 3), (−3 | −4).'),
      }],
      answers: {
        examples: [[['12 / 1', 12], ['12 / 4', 3], ['12 / 6', 2]], [['3 * (-4)', -12]]],
        practice: [[['12 / (-3)', -4]], [['-2 * 5', -10]], [['6 / 1.5', 4]]],
      },
      al: {
        title: 'Funksioni y = k/x',
        objectives: ['Të ndërtoni tabelën dhe grafikun e y = k/x.', 'Të gjeni k nga një pikë e grafikut.'],
        theory: 'Funksioni y = k/x (k ≠ 0) përshkruan përpjesëtimin e zhdrejtë. Përkufizohet për çdo x ≠ 0, sepse me zero nuk pjesëtohet.\n\nGrafiku quhet hiperbolë dhe ka dy degë. Për k > 0 degët janë në kuadrantin I dhe III; për k < 0 në II dhe IV. Grafiku afrohet pambarimisht te boshtet, por nuk i pret.\n\nNëse pika (a, b) është në grafik, atëherë k = a · b. Pika (3, −4) jep k = −12, pra y = −12/x.',
        keyPoints: ['y = k/x, x ≠ 0', 'k > 0: kuadrantet I dhe III; k < 0: II dhe IV', 'k = x · y për çdo pikë të grafikut'],
        examples: [
          { example: 'Plotësoni tabelën e y = 12/x për x = 1, 4, 6.', solution: 'y = 12, 3, 2.' },
          { example: 'Grafiku i y = k/x kalon nëpër (3, −4). Gjeni k.', solution: 'k = 3 · (−4) = −12.' },
        ],
        commonMistakes: [
          { mistake: 'Grafiku i y = 12/x kalon nëpër origjinë.', fix: 'Për x = 0 funksioni nuk ekziston; grafiku nuk i pret boshtet.' },
          { mistake: 'k = y/x', fix: 'Te përpjesëtimi i zhdrejtë k = x · y.' },
        ],
        practice: [
          { problem: 'Për y = 12/x gjeni y kur x = −3.', solution: '−4', steps: ['y = 12/(−3).', '= −4.'] },
          { problem: 'Grafiku i y = k/x kalon nëpër (−2, 5). Gjeni k.', solution: '−10', steps: ['k = x · y.', '(−2) · 5 = −10.'] },
          { problem: 'Për y = 6/x, për cilin x është y = 1,5?', solution: 'x = 4', steps: ['1,5 = 6/x.', 'x = 6/1,5 = 4.'] },
        ],
      },
      en: {
        title: 'The function y = k/x',
        objectives: ['Make the table and graph of y = k/x.', 'Find k from a point on the graph.'],
        theory: 'The function y = k/x (k ≠ 0) describes inverse proportion. It is defined for every x ≠ 0, because we cannot divide by zero.\n\nIts graph is a hyperbola with two branches. For k > 0 the branches are in quadrants I and III; for k < 0 in II and IV. The graph gets closer and closer to the axes but never meets them.\n\nIf the point (a, b) is on the graph, then k = a · b. The point (3, −4) gives k = −12, so y = −12/x.',
        keyPoints: ['y = k/x, x ≠ 0', 'k > 0: quadrants I and III; k < 0: II and IV', 'k = x · y for every point on the graph'],
        examples: [
          { example: 'Complete the table of y = 12/x for x = 1, 4, 6.', solution: 'y = 12, 3, 2.' },
          { example: 'The graph of y = k/x passes through (3, −4). Find k.', solution: 'k = 3 · (−4) = −12.' },
        ],
        commonMistakes: [
          { mistake: 'The graph of y = 12/x passes through the origin.', fix: 'The function does not exist for x = 0; the graph never meets the axes.' },
          { mistake: 'k = y/x', fix: 'For inverse proportion k = x · y.' },
        ],
        practice: [
          { problem: 'For y = 12/x find y when x = −3.', solution: '−4', steps: ['y = 12/(−3).', '= −4.'] },
          { problem: 'The graph of y = k/x passes through (−2, 5). Find k.', solution: '−10', steps: ['k = x · y.', '(−2) · 5 = −10.'] },
          { problem: 'For y = 6/x, for which x is y = 1.5?', solution: 'x = 4', steps: ['1.5 = 6/x.', 'x = 6/1.5 = 4.'] },
        ],
      },
      de: {
        title: 'Die Funktion y = k/x',
        objectives: ['Wertetabelle und Graph von y = k/x erstellen.', 'k aus einem Punkt des Graphen bestimmen.'],
        theory: 'Die Funktion y = k/x (k ≠ 0) beschreibt eine antiproportionale Zuordnung. Sie ist für jedes x ≠ 0 definiert, denn durch null kann man nicht teilen.\n\nIhr Graph ist eine Hyperbel mit zwei Ästen. Für k > 0 liegen die Äste im I. und III. Quadranten, für k < 0 im II. und IV. Der Graph nähert sich den Achsen immer mehr, trifft sie aber nie.\n\nLiegt der Punkt (a | b) auf dem Graphen, gilt k = a · b. Der Punkt (3 | −4) ergibt k = −12, also y = −12/x.',
        keyPoints: ['y = k/x, x ≠ 0', 'k > 0: Quadranten I und III; k < 0: II und IV', 'k = x · y für jeden Punkt des Graphen'],
        examples: [
          { example: 'Ergänzen Sie die Wertetabelle von y = 12/x für x = 1, 4, 6.', solution: 'y = 12, 3, 2.' },
          { example: 'Der Graph von y = k/x geht durch (3 | −4). Bestimmen Sie k.', solution: 'k = 3 · (−4) = −12.' },
        ],
        commonMistakes: [
          { mistake: 'Der Graph von y = 12/x geht durch den Ursprung.', fix: 'Für x = 0 ist die Funktion nicht definiert; der Graph trifft die Achsen nie.' },
          { mistake: 'k = y/x', fix: 'Bei antiproportionalen Zuordnungen gilt k = x · y.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie für y = 12/x den Wert y bei x = −3.', solution: '−4', steps: ['y = 12/(−3).', '= −4.'] },
          { problem: 'Der Graph von y = k/x geht durch (−2 | 5). Bestimmen Sie k.', solution: '−10', steps: ['k = x · y.', '(−2) · 5 = −10.'] },
          { problem: 'Für y = 6/x: Bei welchem x ist y = 1,5?', solution: 'x = 4', steps: ['1,5 = 6/x.', 'x = 6/1,5 = 4.'] },
        ],
      },
    },

    // ───────── 3. The line ax + by = c
    {
      slug: 'g8-function-linear-equation',
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 8, yMin: -2, yMax: 6 }, height: 220,
        functions: [{ expr: '(12 - 2*x) / 3' }],
        points: [{ at: [6, 0], label: '(6, 0)' }, { at: [0, 4], label: '(0, 4)' }, { at: [3, 2], label: '(3, 2)' }],
        caption: alt('Grafiku i 2x + 3y = 12 është drejtëz; e vizatojmë me dy pika: prerjet me boshtet (6, 0) dhe (0, 4).', 'The graph of 2x + 3y = 12 is a line; draw it with two points: the axis intercepts (6, 0) and (0, 4).', 'Der Graph von 2x + 3y = 12 ist eine Gerade; man zeichnet sie mit zwei Punkten: den Achsenschnittpunkten (6 | 0) und (0 | 4).'),
        alt: alt('Drejtëza 2x + 3y = 12 me pikat (6, 0), (0, 4) dhe (3, 2).', 'The line 2x + 3y = 12 with the points (6, 0), (0, 4) and (3, 2).', 'Die Gerade 2x + 3y = 12 mit den Punkten (6 | 0), (0 | 4) und (3 | 2).'),
      }],
      answers: {
        examples: [[['12 / 2', 6], ['12 / 3', 4]], [['2 * 3 + 3 * 2', 12]]],
        practice: [[['8 / 1', 8], ['8 / 2', 4]], 'text', [['(12 - 2 * 3) / 3', 2]]],
      },
      al: {
        title: 'Ekuacioni ax + by = c',
        objectives: ['Të vizatoni drejtëzën ax + by = c me anë të prerjeve me boshtet.', 'Të kontrolloni nëse një pikë shtrihet në drejtëz.'],
        theory: 'Ekuacioni linear me dy ndryshore ax + by = c ka pafund zgjidhje (x, y); të gjitha së bashku formojnë një drejtëz.\n\nMënyra më e shpejtë për ta vizatuar: prerjet me boshtet. Për y = 0 gjejmë prerjen me boshtin x; për x = 0 prerjen me boshtin y. Për 2x + 3y = 12: (6, 0) dhe (0, 4).\n\nNëse b ≠ 0, mund të shprehim y: 3y = 12 − 2x → y = −2/3 · x + 4. Pika është në drejtëz kur koordinatat e saj e plotësojnë ekuacionin: (3, 2): 6 + 6 = 12 ✓.',
        keyPoints: ['ax + by = c → drejtëz', 'y = 0 → prerja me boshtin x;  x = 0 → me boshtin y', 'Pika në drejtëz ⟺ e plotëson ekuacionin'],
        examples: [
          { example: 'Gjeni prerjet e 2x + 3y = 12 me boshtet.', solution: 'y = 0: x = 6 → (6, 0); x = 0: y = 4 → (0, 4).' },
          { example: 'A shtrihet pika (3, 2) në drejtëzën 2x + 3y = 12?', solution: '2 · 3 + 3 · 2 = 12 ✓; po.' },
        ],
        commonMistakes: [
          { mistake: 'Prerja me boshtin x gjendet me x = 0.', fix: 'Në boshtin x është y = 0.' },
        ],
        practice: [
          { problem: 'Gjeni prerjet e x + 2y = 8 me boshtet.', solution: '(8, 0) dhe (0, 4)', steps: ['y = 0 → x = 8.', 'x = 0 → y = 4.'] },
          { problem: 'Nga 3x − y = 5 shprehni y.', solution: 'y = 3x − 5', steps: ['−y = 5 − 3x.', 'y = 3x − 5.'] },
          { problem: 'Pika (3, k) është në drejtëzën 2x + 3y = 12. Gjeni k.', solution: 'k = 2', steps: ['6 + 3k = 12.', 'k = 2.'] },
        ],
      },
      en: {
        title: 'The equation ax + by = c',
        objectives: ['Draw the line ax + by = c using its axis intercepts.', 'Check whether a point lies on the line.'],
        theory: 'A linear equation in two variables ax + by = c has infinitely many solutions (x, y); together they form a straight line.\n\nThe quickest way to draw it: the intercepts. With y = 0 we find where it crosses the x-axis; with x = 0 where it crosses the y-axis. For 2x + 3y = 12: (6, 0) and (0, 4).\n\nIf b ≠ 0, we can make y the subject: 3y = 12 − 2x → y = −2/3 · x + 4. A point lies on the line when its coordinates satisfy the equation: (3, 2): 6 + 6 = 12 ✓.',
        keyPoints: ['ax + by = c → a straight line', 'y = 0 → x-intercept;  x = 0 → y-intercept', 'Point on the line ⟺ it satisfies the equation'],
        examples: [
          { example: 'Find where 2x + 3y = 12 crosses the axes.', solution: 'y = 0: x = 6 → (6, 0); x = 0: y = 4 → (0, 4).' },
          { example: 'Does the point (3, 2) lie on the line 2x + 3y = 12?', solution: '2 · 3 + 3 · 2 = 12 ✓; yes.' },
        ],
        commonMistakes: [
          { mistake: 'Finding the x-intercept with x = 0.', fix: 'On the x-axis y = 0.' },
        ],
        practice: [
          { problem: 'Find where x + 2y = 8 crosses the axes.', solution: '(8, 0) and (0, 4)', steps: ['y = 0 → x = 8.', 'x = 0 → y = 4.'] },
          { problem: 'Make y the subject of 3x − y = 5.', solution: 'y = 3x − 5', steps: ['−y = 5 − 3x.', 'y = 3x − 5.'] },
          { problem: 'The point (3, k) lies on the line 2x + 3y = 12. Find k.', solution: 'k = 2', steps: ['6 + 3k = 12.', 'k = 2.'] },
        ],
      },
      de: {
        title: 'Die Gleichung ax + by = c',
        objectives: ['Die Gerade ax + by = c mithilfe der Achsenschnittpunkte zeichnen.', 'Prüfen, ob ein Punkt auf der Geraden liegt.'],
        theory: 'Eine lineare Gleichung mit zwei Variablen ax + by = c hat unendlich viele Lösungen (x | y); zusammen bilden sie eine Gerade.\n\nAm schnellsten zeichnet man sie mit den Achsenschnittpunkten. Mit y = 0 findet man den Schnittpunkt mit der x-Achse, mit x = 0 den mit der y-Achse. Für 2x + 3y = 12: (6 | 0) und (0 | 4).\n\nIst b ≠ 0, kann man nach y auflösen: 3y = 12 − 2x → y = −2/3 · x + 4. Ein Punkt liegt auf der Geraden, wenn seine Koordinaten die Gleichung erfüllen: (3 | 2): 6 + 6 = 12 ✓.',
        keyPoints: ['ax + by = c → Gerade', 'y = 0 → Schnitt mit der x-Achse;  x = 0 → mit der y-Achse', 'Punkt auf der Geraden ⟺ erfüllt die Gleichung'],
        examples: [
          { example: 'Bestimmen Sie die Achsenschnittpunkte von 2x + 3y = 12.', solution: 'y = 0: x = 6 → (6 | 0); x = 0: y = 4 → (0 | 4).' },
          { example: 'Liegt der Punkt (3 | 2) auf der Geraden 2x + 3y = 12?', solution: '2 · 3 + 3 · 2 = 12 ✓; ja.' },
        ],
        commonMistakes: [
          { mistake: 'Den Schnitt mit der x-Achse mit x = 0 bestimmen.', fix: 'Auf der x-Achse ist y = 0.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Achsenschnittpunkte von x + 2y = 8.', solution: '(8 | 0) und (0 | 4)', steps: ['y = 0 → x = 8.', 'x = 0 → y = 4.'] },
          { problem: 'Lösen Sie 3x − y = 5 nach y auf.', solution: 'y = 3x − 5', steps: ['−y = 5 − 3x.', 'y = 3x − 5.'] },
          { problem: 'Der Punkt (3 | k) liegt auf der Geraden 2x + 3y = 12. Bestimmen Sie k.', solution: 'k = 2', steps: ['6 + 3k = 12.', 'k = 2.'] },
        ],
      },
    },

    // ───────── 4. The parabola y = ax²
    {
      slug: 'g8-function-parabola',
      visuals: [{
        type: 'functionPlot', view: { xMin: -4, xMax: 4, yMin: -9, yMax: 9 }, height: 240,
        functions: [{ expr: 'a*x^2', label: 'y = ax²' }, { expr: 'x^2', color: 'muted', dashed: true, label: 'y = x²' }],
        sliders: [{ name: 'a', min: -3, max: 3, step: 0.5, value: 2, label: 'a' }],
        points: [{ at: [0, 0], label: 'O' }],
        caption: alt('Lëvizni a: a > 0 parabola hapet lart, a < 0 poshtë; sa më i madh |a|, aq më e ngushtë.', 'Move a: for a > 0 the parabola opens upwards, for a < 0 downwards; the larger |a|, the narrower.', 'Bewegen Sie a: Für a > 0 ist die Parabel nach oben geöffnet, für a < 0 nach unten; je größer |a|, desto schmaler.'),
        alt: alt('Parabola y = ax² me rrëshqitës për a dhe parabola y = x² me vijë të ndërprerë.', 'The parabola y = ax² with a slider for a and the parabola y = x² dashed.', 'Die Parabel y = ax² mit Schieberegler für a und die gestrichelte Normalparabel y = x².'),
      }],
      answers: {
        examples: [[['2 * (-2)^2', 8]], [['18 / 3^2', 2]]],
        practice: [[['-(3^2)', -9]], [['0.5 * 4^2', 8]], [['-12 / 2^2', -3]]],
      },
      al: {
        title: 'Parabola y = ax²',
        objectives: ['Të njihni vetitë e grafikut të y = ax².', 'Të gjeni a nga një pikë dhe të kontrolloni pika në parabolë.'],
        theory: 'Grafiku i y = ax² (a ≠ 0) quhet parabolë. Kulmi i saj është në origjinë O(0, 0) dhe boshti i simetrisë është boshti y: pikat (x, y) dhe (−x, y) janë të dyja në grafik.\n\nNëse a > 0, parabola hapet lart dhe O është pika më e ulët; nëse a < 0, hapet poshtë. Sa më i madh |a|, aq më e ngushtë është parabola.\n\nPika (x₀, y₀) është në parabolë kur y₀ = a · x₀². Nga një pikë jo në origjinë gjejmë a = y₀ / x₀²: nga (3, 18): a = 18/9 = 2.',
        keyPoints: ['Kulmi O(0, 0), simetri ndaj boshtit y', 'a > 0 lart; a < 0 poshtë', 'a = y/x² për një pikë të grafikut'],
        examples: [
          { example: 'A kalon parabola y = 2x² nëpër pikën (−2, 8)?', solution: '2 · (−2)² = 2 · 4 = 8 ✓; po.' },
          { example: 'Parabola y = ax² kalon nëpër (3, 18). Gjeni a.', solution: 'a = 18/3² = 2.' },
        ],
        commonMistakes: [
          { mistake: 'Për y = 2x² dhe x = −2: y = 2 · (−4) = −8', fix: '(−2)² = 4 > 0, pra y = 8.' },
          { mistake: 'y = −x² për x = 3 jep 9.', fix: 'Minusi mbetet jashtë katrorit: −(3²) = −9.' },
        ],
        practice: [
          { problem: 'Për y = −x² gjeni y kur x = 3.', solution: '−9', steps: ['3² = 9.', 'y = −9.'] },
          { problem: 'Për y = 0,5x² gjeni y kur x = 4.', solution: '8', steps: ['4² = 16.', '0,5 · 16 = 8.'] },
          { problem: 'Parabola y = ax² kalon nëpër (2, −12). Gjeni a dhe thoni nga hapet.', solution: 'a = −3, hapet poshtë', steps: ['a = −12/4 = −3.', 'a < 0 → poshtë.'] },
        ],
      },
      en: {
        title: 'The parabola y = ax²',
        objectives: ['Know the features of the graph of y = ax².', 'Find a from a point and check points on the parabola.'],
        theory: 'The graph of y = ax² (a ≠ 0) is a parabola. Its vertex is at the origin O(0, 0) and its line of symmetry is the y-axis: the points (x, y) and (−x, y) are both on the graph.\n\nIf a > 0, the parabola opens upwards and O is the lowest point; if a < 0, it opens downwards. The larger |a|, the narrower the parabola.\n\nThe point (x₀, y₀) is on the parabola when y₀ = a · x₀². From a point other than the origin, a = y₀ / x₀²: from (3, 18): a = 18/9 = 2.',
        keyPoints: ['Vertex O(0, 0), symmetric about the y-axis', 'a > 0 up; a < 0 down', 'a = y/x² for a point on the graph'],
        examples: [
          { example: 'Does the parabola y = 2x² pass through the point (−2, 8)?', solution: '2 · (−2)² = 2 · 4 = 8 ✓; yes.' },
          { example: 'The parabola y = ax² passes through (3, 18). Find a.', solution: 'a = 18/3² = 2.' },
        ],
        commonMistakes: [
          { mistake: 'For y = 2x² and x = −2: y = 2 · (−4) = −8', fix: '(−2)² = 4 > 0, so y = 8.' },
          { mistake: 'y = −x² for x = 3 gives 9.', fix: 'The minus stays outside the square: −(3²) = −9.' },
        ],
        practice: [
          { problem: 'For y = −x² find y when x = 3.', solution: '−9', steps: ['3² = 9.', 'y = −9.'] },
          { problem: 'For y = 0.5x² find y when x = 4.', solution: '8', steps: ['4² = 16.', '0.5 · 16 = 8.'] },
          { problem: 'The parabola y = ax² passes through (2, −12). Find a and say which way it opens.', solution: 'a = −3, opens downwards', steps: ['a = −12/4 = −3.', 'a < 0 → down.'] },
        ],
      },
      de: {
        title: 'Die Parabel y = ax²',
        objectives: ['Die Eigenschaften des Graphen von y = ax² kennen.', 'a aus einem Punkt bestimmen und Punkte auf der Parabel prüfen.'],
        theory: 'Der Graph von y = ax² (a ≠ 0) ist eine Parabel. Ihr Scheitel liegt im Ursprung O(0 | 0), ihre Symmetrieachse ist die y-Achse: Die Punkte (x | y) und (−x | y) liegen beide auf dem Graphen.\n\nIst a > 0, ist die Parabel nach oben geöffnet und O der tiefste Punkt; ist a < 0, nach unten. Je größer |a|, desto schmaler die Parabel.\n\nDer Punkt (x₀ | y₀) liegt auf der Parabel, wenn y₀ = a · x₀². Aus einem Punkt außer dem Ursprung erhält man a = y₀ / x₀²: aus (3 | 18): a = 18/9 = 2.',
        keyPoints: ['Scheitel O(0 | 0), symmetrisch zur y-Achse', 'a > 0 nach oben; a < 0 nach unten', 'a = y/x² für einen Punkt des Graphen'],
        examples: [
          { example: 'Geht die Parabel y = 2x² durch den Punkt (−2 | 8)?', solution: '2 · (−2)² = 2 · 4 = 8 ✓; ja.' },
          { example: 'Die Parabel y = ax² geht durch (3 | 18). Bestimmen Sie a.', solution: 'a = 18/3² = 2.' },
        ],
        commonMistakes: [
          { mistake: 'Für y = 2x² und x = −2: y = 2 · (−4) = −8', fix: '(−2)² = 4 > 0, also y = 8.' },
          { mistake: 'y = −x² ergibt für x = 3 den Wert 9.', fix: 'Das Minus steht außerhalb des Quadrats: −(3²) = −9.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie für y = −x² den Wert y bei x = 3.', solution: '−9', steps: ['3² = 9.', 'y = −9.'] },
          { problem: 'Bestimmen Sie für y = 0,5x² den Wert y bei x = 4.', solution: '8', steps: ['4² = 16.', '0,5 · 16 = 8.'] },
          { problem: 'Die Parabel y = ax² geht durch (2 | −12). Bestimmen Sie a und die Öffnungsrichtung.', solution: 'a = −3, nach unten geöffnet', steps: ['a = −12/4 = −3.', 'a < 0 → nach unten.'] },
        ],
      },
    },

    // ───────── 5. Reading graphs
    {
      slug: 'g8-function-reading-graphs',
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 5.5, yMin: 0, yMax: 9 }, height: 220,
        functions: [{ expr: '4*x', domain: [0, 2] }, { expr: '8', domain: [2, 3] }, { expr: '8 - 4*(x - 3)', domain: [3, 5] }],
        points: [{ at: [2, 8], label: '(2, 8)' }, { at: [3, 8], label: '(3, 8)' }],
        caption: alt('Shëtitja: 2 h ecje deri 8 km, 1 h pushim (vija horizontale), 2 h kthim. x = koha (h), y = largësia nga shtëpia (km).', 'A walk: 2 h out to 8 km, a 1 h rest (horizontal part), 2 h back. x = time (h), y = distance from home (km).', 'Eine Wanderung: 2 h bis 8 km, 1 h Pause (waagerechter Teil), 2 h zurück. x = Zeit (h), y = Entfernung von zu Hause (km).'),
        alt: alt('Grafik largësi–kohë: rritet deri 8 km në 2 h, mbetet 8 km deri në 3 h, zbret në 0 në 5 h.', 'Distance–time graph: rises to 8 km at 2 h, stays at 8 km until 3 h, falls to 0 at 5 h.', 'Weg-Zeit-Diagramm: steigt bis 8 km bei 2 h, bleibt bei 8 km bis 3 h, fällt auf 0 bei 5 h.'),
      }],
      answers: {
        examples: [[['8 / 2', 4]], [['3 - 2', 1]]],
        practice: [[['8 / (5 - 3)', 4]], [['8 + 8', 16]], [['4 * 1', 4]]],
      },
      al: {
        title: 'Leximi i grafikëve',
        objectives: ['Të lexoni informacion nga një grafik largësi–kohë.', 'Të llogaritni shpejtësinë nga pjerrësia e një pjese të grafikut.'],
        theory: 'Te një grafik largësi–kohë boshti horizontal tregon kohën dhe boshti vertikal largësinë. Çdo pikë (t, s) do të thotë: në kohën t largësia ishte s.\n\nPjesa që ngjitet: largimi; pjesa horizontale: pushim (largësia nuk ndryshon); pjesa që zbret: kthim. Sa më e pjerrët vija, aq më e madhe shpejtësia.\n\nShpejtësia në një pjesë drejtvizore = ndryshimi i largësisë : ndryshimi i kohës. Në grafik: 8 km për 2 h → 4 km/h.',
        keyPoints: ['Horizontale: qëndron në vend', 'Shpejtësia = Δs : Δt', 'Më e pjerrët → më shpejt'],
        examples: [
          { example: 'Sa ishte shpejtësia në 2 orët e para?', solution: '8 km : 2 h = 4 km/h.' },
          { example: 'Sa zgjati pushimi?', solution: 'Vija është horizontale nga 2 h deri 3 h: 1 orë.' },
        ],
        commonMistakes: [
          { mistake: 'Pjesa horizontale do të thotë lëvizje e shpejtë.', fix: 'Largësia nuk ndryshon: personi qëndron në vend.' },
          { mistake: 'Pjesa që zbret është lëvizje "tatëpjetë".', fix: 'Zbritja do të thotë që largësia nga shtëpia zvogëlohet: kthim.' },
        ],
        practice: [
          { problem: 'Sa ishte shpejtësia gjatë kthimit?', solution: '4 km/h', steps: ['8 km nga 3 h deri 5 h.', '8 : 2 = 4 km/h.'] },
          { problem: 'Sa km eci gjithsej?', solution: '16 km', steps: ['8 km vajtje + 8 km kthim.', '16 km.'] },
          { problem: 'Sa larg ishte pas 1 ore?', solution: '4 km', steps: ['Në pjesën e parë y = 4x.', 'y = 4 · 1 = 4 km.'] },
        ],
      },
      en: {
        title: 'Reading graphs',
        objectives: ['Read information from a distance–time graph.', 'Work out a speed from the steepness of part of the graph.'],
        theory: 'On a distance–time graph the horizontal axis shows time and the vertical axis distance. Each point (t, s) means: at time t the distance was s.\n\nA rising part: moving away; a horizontal part: a rest (the distance does not change); a falling part: coming back. The steeper the line, the greater the speed.\n\nSpeed on a straight part = change in distance ÷ change in time. On the graph: 8 km in 2 h → 4 km/h.',
        keyPoints: ['Horizontal: standing still', 'Speed = Δs ÷ Δt', 'Steeper → faster'],
        examples: [
          { example: 'What was the speed in the first 2 hours?', solution: '8 km ÷ 2 h = 4 km/h.' },
          { example: 'How long was the rest?', solution: 'The line is horizontal from 2 h to 3 h: 1 hour.' },
        ],
        commonMistakes: [
          { mistake: 'A horizontal part means moving fast.', fix: 'The distance does not change: the person is standing still.' },
          { mistake: 'A falling part means walking downhill.', fix: 'Falling means the distance from home gets smaller: coming back.' },
        ],
        practice: [
          { problem: 'What was the speed on the way back?', solution: '4 km/h', steps: ['8 km from 3 h to 5 h.', '8 ÷ 2 = 4 km/h.'] },
          { problem: 'How many km were walked in total?', solution: '16 km', steps: ['8 km out + 8 km back.', '16 km.'] },
          { problem: 'How far away was the walker after 1 hour?', solution: '4 km', steps: ['On the first part y = 4x.', 'y = 4 · 1 = 4 km.'] },
        ],
      },
      de: {
        title: 'Graphen lesen',
        objectives: ['Informationen aus einem Weg-Zeit-Diagramm ablesen.', 'Eine Geschwindigkeit aus der Steilheit eines Abschnitts berechnen.'],
        theory: 'In einem Weg-Zeit-Diagramm zeigt die waagerechte Achse die Zeit, die senkrechte die Entfernung. Jeder Punkt (t | s) bedeutet: Zur Zeit t war die Entfernung s.\n\nSteigender Abschnitt: Entfernen; waagerechter Abschnitt: Pause (die Entfernung ändert sich nicht); fallender Abschnitt: Rückweg. Je steiler die Linie, desto größer die Geschwindigkeit.\n\nGeschwindigkeit auf einem geraden Abschnitt = Änderung der Entfernung : Änderung der Zeit. Im Diagramm: 8 km in 2 h → 4 km/h.',
        keyPoints: ['Waagerecht: Stillstand', 'Geschwindigkeit = Δs : Δt', 'Steiler → schneller'],
        examples: [
          { example: 'Wie groß war die Geschwindigkeit in den ersten 2 Stunden?', solution: '8 km : 2 h = 4 km/h.' },
          { example: 'Wie lange dauerte die Pause?', solution: 'Die Linie ist von 2 h bis 3 h waagerecht: 1 Stunde.' },
        ],
        commonMistakes: [
          { mistake: 'Ein waagerechter Abschnitt bedeutet schnelle Bewegung.', fix: 'Die Entfernung ändert sich nicht: Die Person steht still.' },
          { mistake: 'Ein fallender Abschnitt bedeutet bergab gehen.', fix: 'Fallend heißt: Die Entfernung von zu Hause wird kleiner, also Rückweg.' },
        ],
        practice: [
          { problem: 'Wie groß war die Geschwindigkeit auf dem Rückweg?', solution: '4 km/h', steps: ['8 km von 3 h bis 5 h.', '8 : 2 = 4 km/h.'] },
          { problem: 'Wie viele km wurden insgesamt gewandert?', solution: '16 km', steps: ['8 km hin + 8 km zurück.', '16 km.'] },
          { problem: 'Wie weit war die Person nach 1 Stunde entfernt?', solution: '4 km', steps: ['Im ersten Abschnitt gilt y = 4x.', 'y = 4 · 1 = 4 km.'] },
        ],
      },
    },
  ],
};
