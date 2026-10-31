// Grade 7 · Theme 11: Functions (May–June)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g7-function',
  i18n: {
    al: { title: 'Funksioni', description: 'Funksioni i dhënë me tabelë, formulë dhe grafik; funksioni y = kx.' },
    en: { title: 'Functions', description: 'A function given by a table, a formula and a graph; the function y = kx.' },
    de: { title: 'Funktionen', description: 'Funktionen als Tabelle, Term und Graph; die Funktion y = kx.' },
  },
  lessons: [
    // ───────── 1. Table, formula, graph
    {
      slug: 'g7-function-table-formula-graph',
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 4, yMin: -1, yMax: 8 }, height: 220,
        functions: [{ expr: '2*x + 1', label: 'y = 2x + 1' }],
        points: [{ at: [0, 1], label: '(0, 1)' }, { at: [1, 3], label: '(1, 3)' }, { at: [2, 5], label: '(2, 5)' }, { at: [3, 7], label: '(3, 7)' }],
        caption: alt('Tabela x = 0, 1, 2, 3 → y = 1, 3, 5, 7 jep pikat e grafikut të y = 2x + 1.', 'The table x = 0, 1, 2, 3 → y = 1, 3, 5, 7 gives the points of the graph of y = 2x + 1.', 'Die Wertetabelle x = 0, 1, 2, 3 → y = 1, 3, 5, 7 liefert die Punkte des Graphen von y = 2x + 1.'),
        alt: alt('Grafiku i drejtëzës y = 2x + 1 me pikat (0, 1), (1, 3), (2, 5), (3, 7).', 'Graph of the line y = 2x + 1 with the points (0, 1), (1, 3), (2, 5), (3, 7).', 'Graph der Geraden y = 2x + 1 mit den Punkten (0 | 1), (1 | 3), (2 | 5), (3 | 7).'),
      }],
      answers: {
        examples: [[['3 * (-1)', -3], ['3 * 0', 0], ['3 * 2', 6]], [['2 * 2 + 1', 5]]],
        practice: [[['-2 + 4', 2]], [['2 * 4 - 1', 7]], 'text'],
      },
      al: {
        title: 'Funksioni me tabelë, formulë dhe grafik',
        objectives: ['Të kuptoni funksionin si rregull që çdo x-i i jep një y të vetëm.', 'Të kaloni nga formula në tabelë dhe grafik, dhe anasjelltas.'],
        theory: 'Funksioni është një rregull që çdo vlere të x-it i shoqëron saktësisht një vlerë të y-it. x quhet ndryshore e pavarur, y ndryshore e varur.\n\nFunksioni mund të jepet në tri mënyra: me formulë (y = 2x + 1), me tabelë vlerash (x = 0, 1, 2, 3 → y = 1, 3, 5, 7) dhe me grafik (pikat (x, y) në sistemin koordinativ).\n\nNga formula bëjmë tabelën duke zëvendësuar x-in. Nga tabela vendosim pikat në grafik. Për të provuar nëse pika (a, b) është në grafik, zëvendësojmë x = a dhe shohim nëse del y = b.',
        keyPoints: ['Çdo x → saktësisht një y', 'Formulë → tabelë: zëvendësoni x', 'Pika (a, b) në grafik ⟺ formula jep b për x = a'],
        examples: [
          { example: 'Për y = 3x plotësoni tabelën për x = −1, 0, 2.', solution: 'y = 3 · (−1) = −3; y = 3 · 0 = 0; y = 3 · 2 = 6.' },
          { example: 'A ndodhet pika (2, 5) në grafikun e y = 2x + 1?', solution: 'Për x = 2: y = 2 · 2 + 1 = 5. Po, ndodhet.' },
        ],
        commonMistakes: [
          { mistake: 'Në pikën (2, 5) zëvendësohet x = 5.', fix: 'Numri i parë është gjithmonë x, i dyti y.' },
        ],
        practice: [
          { problem: 'Për y = x + 4 gjeni y kur x = −2.', solution: 'y = 2', steps: ['y = −2 + 4.', 'y = 2.'] },
          { problem: 'Për y = 2x − 1 gjeni y kur x = 4.', solution: 'y = 7', steps: ['y = 2 · 4 − 1.', 'y = 8 − 1 = 7.'] },
          { problem: 'Tabela: x = 1, 2, 3 → y = 4, 8, 12. Shkruani formulën.', solution: 'y = 4x', steps: ['Çdo y është 4 herë x.', 'y = 4x.'] },
        ],
      },
      en: {
        title: 'Functions as tables, formulas and graphs',
        objectives: ['Understand a function as a rule that gives each x exactly one y.', 'Go from a formula to a table and a graph, and back.'],
        theory: 'A function is a rule that assigns to each value of x exactly one value of y. x is the independent variable, y the dependent variable.\n\nA function can be given in three ways: by a formula (y = 2x + 1), by a table of values (x = 0, 1, 2, 3 → y = 1, 3, 5, 7) and by a graph (the points (x, y) on the coordinate grid).\n\nFrom the formula we make a table by substituting x. From the table we plot the points. To test whether the point (a, b) is on the graph, substitute x = a and see whether y = b comes out.',
        keyPoints: ['Each x → exactly one y', 'Formula → table: substitute x', 'Point (a, b) on the graph ⟺ the formula gives b for x = a'],
        examples: [
          { example: 'For y = 3x complete the table for x = −1, 0, 2.', solution: 'y = 3 · (−1) = −3; y = 3 · 0 = 0; y = 3 · 2 = 6.' },
          { example: 'Is the point (2, 5) on the graph of y = 2x + 1?', solution: 'For x = 2: y = 2 · 2 + 1 = 5. Yes, it is.' },
        ],
        commonMistakes: [
          { mistake: 'For the point (2, 5), substituting x = 5.', fix: 'The first number is always x, the second y.' },
        ],
        practice: [
          { problem: 'For y = x + 4 find y when x = −2.', solution: 'y = 2', steps: ['y = −2 + 4.', 'y = 2.'] },
          { problem: 'For y = 2x − 1 find y when x = 4.', solution: 'y = 7', steps: ['y = 2 · 4 − 1.', 'y = 8 − 1 = 7.'] },
          { problem: 'Table: x = 1, 2, 3 → y = 4, 8, 12. Write the formula.', solution: 'y = 4x', steps: ['Each y is 4 times x.', 'y = 4x.'] },
        ],
      },
      de: {
        title: 'Funktionen als Tabelle, Term und Graph',
        objectives: ['Eine Funktion als Zuordnung verstehen, die jedem x genau ein y zuordnet.', 'Vom Term zur Wertetabelle und zum Graphen wechseln und zurück.'],
        theory: 'Eine Funktion ist eine Zuordnung, die jedem Wert von x genau einen Wert von y zuordnet. x heißt unabhängige, y abhängige Variable.\n\nEine Funktion kann auf drei Arten gegeben sein: als Term (y = 2x + 1), als Wertetabelle (x = 0, 1, 2, 3 → y = 1, 3, 5, 7) und als Graph (die Punkte (x | y) im Koordinatensystem).\n\nAus dem Term erhält man die Tabelle durch Einsetzen von x. Aus der Tabelle zeichnet man die Punkte. Ob der Punkt (a | b) auf dem Graphen liegt, prüft man durch Einsetzen von x = a: Es muss y = b herauskommen.',
        keyPoints: ['Jedes x → genau ein y', 'Term → Tabelle: x einsetzen', 'Punkt (a | b) auf dem Graphen ⟺ der Term ergibt b für x = a'],
        examples: [
          { example: 'Ergänzen Sie für y = 3x die Tabelle für x = −1, 0, 2.', solution: 'y = 3 · (−1) = −3; y = 3 · 0 = 0; y = 3 · 2 = 6.' },
          { example: 'Liegt der Punkt (2 | 5) auf dem Graphen von y = 2x + 1?', solution: 'Für x = 2: y = 2 · 2 + 1 = 5. Ja, er liegt darauf.' },
        ],
        commonMistakes: [
          { mistake: 'Beim Punkt (2 | 5) wird x = 5 eingesetzt.', fix: 'Die erste Zahl ist immer x, die zweite y.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie für y = x + 4 den Wert y bei x = −2.', solution: 'y = 2', steps: ['y = −2 + 4.', 'y = 2.'] },
          { problem: 'Bestimmen Sie für y = 2x − 1 den Wert y bei x = 4.', solution: 'y = 7', steps: ['y = 2 · 4 − 1.', 'y = 8 − 1 = 7.'] },
          { problem: 'Tabelle: x = 1, 2, 3 → y = 4, 8, 12. Geben Sie den Term an.', solution: 'y = 4x', steps: ['Jedes y ist das 4-Fache von x.', 'y = 4x.'] },
        ],
      },
    },

    // ───────── 2. The function y = kx
    {
      slug: 'g7-function-direct-variation',
      visuals: [{
        type: 'functionPlot', view: { xMin: -4, xMax: 4, yMin: -6, yMax: 6 }, height: 240,
        functions: [{ expr: 'k*x', label: 'y = kx' }],
        sliders: [{ name: 'k', min: -3, max: 3, step: 0.5, value: 2, label: 'k' }],
        points: [{ at: [0, 0], label: 'O' }],
        caption: alt('Lëvizni k: grafiku i y = kx është gjithmonë drejtëz nëpër origjinë; k > 0 rritet, k < 0 zbret.', 'Move k: the graph of y = kx is always a straight line through the origin; k > 0 rises, k < 0 falls.', 'Bewegen Sie k: Der Graph von y = kx ist immer eine Gerade durch den Ursprung; k > 0 steigt, k < 0 fällt.'),
        alt: alt('Grafiku i y = kx me rrëshqitës për k nga −3 deri 3; drejtëza kalon gjithmonë nëpër origjinë.', 'Graph of y = kx with a slider for k from −3 to 3; the line always passes through the origin.', 'Graph von y = kx mit Schieberegler für k von −3 bis 3; die Gerade geht immer durch den Ursprung.'),
      }],
      answers: {
        examples: [[['-2 * 2', -4]], [['12 / 3', 4]]],
        practice: [[['15 / 5', 3]], [['4 * 2.5', 10]], [['2.4 * 5', 12]]],
      },
      al: {
        title: 'Funksioni y = kx',
        objectives: ['Të njihni funksionin e varësisë së drejtë y = kx dhe grafikun e tij.', 'Të gjeni koeficientin k nga një pikë dhe ta përdorni.'],
        theory: 'Funksioni y = kx (k ≠ 0) përshkruan varësinë e drejtë: herësi y : x është gjithmonë k. Numri k quhet koeficient i përpjesëtimit (koeficient këndor).\n\nGrafiku i y = kx është drejtëz që kalon nëpër origjinë O(0, 0). Nëse k > 0, drejtëza rritet nga e majta në të djathtë; nëse k < 0, zbret. Sa më i madh |k|, aq më e pjerrët drejtëza.\n\nNëse e dimë një pikë (a, b) të grafikut, k = b : a. Shembull nga jeta: 1 kg mollë kushton 2,40 €, pra çmimi y = 2,4x.',
        keyPoints: ['y = kx: drejtëz nëpër O(0, 0)', 'k = y : x', 'k > 0 rritet; k < 0 zbret'],
        examples: [
          { example: 'A kalon grafiku i y = −2x nëpër pikën (2, −4)?', solution: 'Për x = 2: y = −2 · 2 = −4. Po.' },
          { example: 'Grafiku i y = kx kalon nëpër (3, 12). Gjeni k.', solution: 'k = 12 : 3 = 4, pra y = 4x.' },
        ],
        commonMistakes: [
          { mistake: 'y = x + 2 është varësi e drejtë.', fix: 'Grafiku i saj nuk kalon nëpër origjinë; varësi e drejtë është vetëm y = kx.' },
          { mistake: 'k = x : y', fix: 'k = y : x (y-i pjesëtohet me x-in).' },
        ],
        practice: [
          { problem: 'Grafiku i y = kx kalon nëpër (5, 15). Gjeni k.', solution: 'k = 3', steps: ['k = 15 : 5.', 'k = 3.'] },
          { problem: 'Për y = 4x gjeni y kur x = 2,5.', solution: 'y = 10', steps: ['y = 4 · 2,5.', 'y = 10.'] },
          { problem: '1 kg mollë kushton 2,40 €. Shkruani funksionin e çmimit dhe gjeni çmimin e 5 kg.', solution: 'y = 2,4x; 12 €', steps: ['y = 2,4x.', 'y = 2,4 · 5 = 12 €.'] },
        ],
      },
      en: {
        title: 'The function y = kx',
        objectives: ['Recognise the direct-proportion function y = kx and its graph.', 'Find the coefficient k from a point and use it.'],
        theory: 'The function y = kx (k ≠ 0) describes direct proportion: the quotient y ÷ x is always k. The number k is the constant of proportionality (the gradient).\n\nThe graph of y = kx is a straight line through the origin O(0, 0). If k > 0 the line rises from left to right; if k < 0 it falls. The larger |k|, the steeper the line.\n\nIf we know one point (a, b) on the graph, k = b ÷ a. A real-life example: 1 kg of apples costs €2.40, so the price is y = 2.4x.',
        keyPoints: ['y = kx: a line through O(0, 0)', 'k = y ÷ x', 'k > 0 rises; k < 0 falls'],
        examples: [
          { example: 'Does the graph of y = −2x pass through the point (2, −4)?', solution: 'For x = 2: y = −2 · 2 = −4. Yes.' },
          { example: 'The graph of y = kx passes through (3, 12). Find k.', solution: 'k = 12 ÷ 3 = 4, so y = 4x.' },
        ],
        commonMistakes: [
          { mistake: 'y = x + 2 is a direct proportion.', fix: 'Its graph does not pass through the origin; only y = kx is a direct proportion.' },
          { mistake: 'k = x ÷ y', fix: 'k = y ÷ x (y divided by x).' },
        ],
        practice: [
          { problem: 'The graph of y = kx passes through (5, 15). Find k.', solution: 'k = 3', steps: ['k = 15 ÷ 5.', 'k = 3.'] },
          { problem: 'For y = 4x find y when x = 2.5.', solution: 'y = 10', steps: ['y = 4 · 2.5.', 'y = 10.'] },
          { problem: '1 kg of apples costs €2.40. Write the price function and find the price of 5 kg.', solution: 'y = 2.4x; €12', steps: ['y = 2.4x.', 'y = 2.4 · 5 = €12.'] },
        ],
      },
      de: {
        title: 'Die Funktion y = kx',
        objectives: ['Die proportionale Funktion y = kx und ihren Graphen erkennen.', 'Den Faktor k aus einem Punkt bestimmen und verwenden.'],
        theory: 'Die Funktion y = kx (k ≠ 0) beschreibt eine proportionale Zuordnung: Der Quotient y : x ist immer k. Die Zahl k heißt Proportionalitätsfaktor (Steigung).\n\nDer Graph von y = kx ist eine Gerade durch den Ursprung O(0 | 0). Ist k > 0, steigt die Gerade von links nach rechts; ist k < 0, fällt sie. Je größer |k|, desto steiler die Gerade.\n\nKennt man einen Punkt (a | b) des Graphen, gilt k = b : a. Beispiel aus dem Alltag: 1 kg Äpfel kostet 2,40 €, also ist der Preis y = 2,4x.',
        keyPoints: ['y = kx: Gerade durch O(0 | 0)', 'k = y : x', 'k > 0 steigt; k < 0 fällt'],
        examples: [
          { example: 'Geht der Graph von y = −2x durch den Punkt (2 | −4)?', solution: 'Für x = 2: y = −2 · 2 = −4. Ja.' },
          { example: 'Der Graph von y = kx geht durch (3 | 12). Bestimmen Sie k.', solution: 'k = 12 : 3 = 4, also y = 4x.' },
        ],
        commonMistakes: [
          { mistake: 'y = x + 2 ist proportional.', fix: 'Ihr Graph geht nicht durch den Ursprung; proportional ist nur y = kx.' },
          { mistake: 'k = x : y', fix: 'k = y : x (y geteilt durch x).' },
        ],
        practice: [
          { problem: 'Der Graph von y = kx geht durch (5 | 15). Bestimmen Sie k.', solution: 'k = 3', steps: ['k = 15 : 5.', 'k = 3.'] },
          { problem: 'Bestimmen Sie für y = 4x den Wert y bei x = 2,5.', solution: 'y = 10', steps: ['y = 4 · 2,5.', 'y = 10.'] },
          { problem: '1 kg Äpfel kostet 2,40 €. Geben Sie die Preisfunktion an und bestimmen Sie den Preis für 5 kg.', solution: 'y = 2,4x; 12 €', steps: ['y = 2,4x.', 'y = 2,4 · 5 = 12 €.'] },
        ],
      },
    },
  ],
};
