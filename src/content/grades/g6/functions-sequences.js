// Grade 6 · Theme 11: Functions and number sequences (May–June)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g6-functions-sequences',
  i18n: {
    al: { title: 'Funksionet dhe vargjet numerike', description: 'Rregulla që lidhin dy madhësi, me tabelë dhe grafik, dhe vargje numrash që vazhdojnë sipas një rregulle.' },
    en: { title: 'Functions and number sequences', description: 'Rules linking two quantities, with tables and graphs, and number sequences that follow a rule.' },
    de: { title: 'Funktionen und Zahlenfolgen', description: 'Regeln, die zwei Größen verbinden, mit Tabelle und Graph, und Zahlenfolgen, die einer Regel folgen.' },
  },
  lessons: [
    // ───────── 1. Function with table and graph
    {
      slug: 'g6-functions-sequences-function-table-graph',
      visuals: [
        {
          type: 'valueTable',
          rows: [
            { head: 'x', cells: ['0', '1', '2', '3'] },
            { head: 'y = 2x + 1', cells: ['1', '3', '5', '7'] },
          ],
          alt: alt('Tabela e vlerave të y = 2x + 1: për x = 0, 1, 2, 3, y = 1, 3, 5, 7.', 'Table of values for y = 2x + 1: for x = 0, 1, 2, 3, y = 1, 3, 5, 7.', 'Wertetabelle für y = 2x + 1: für x = 0, 1, 2, 3 ist y = 1, 3, 5, 7.'),
        },
        {
          type: 'functionPlot', view: { xMin: -1, xMax: 5, yMin: -1, yMax: 12 }, xStep: 1, yStep: 2,
          functions: [{ expr: 'a * x + b', label: 'y = ax + b' }],
          points: [{ at: [0, 1] }, { at: [1, 3] }, { at: [2, 5] }, { at: [3, 7] }],
          sliders: [{ name: 'a', min: 0, max: 3, step: 1, value: 2 }, { name: 'b', min: 0, max: 4, step: 1, value: 1 }],
          caption: alt('Me a = 2 dhe b = 1 drejtëza kalon nëpër pikat e tabelës. Lëvizni rrëshqitësit për rregulla të tjera.', 'With a = 2 and b = 1 the line passes through the points of the table. Move the sliders to try other rules.', 'Mit a = 2 und b = 1 geht die Gerade durch die Punkte der Tabelle. Verschieben Sie die Regler für andere Regeln.'),
          alt: alt('Grafiku i y = ax + b me rrëshqitës për a dhe b; pikat (0, 1), (1, 3), (2, 5), (3, 7).', 'Graph of y = ax + b with sliders for a and b; points (0, 1), (1, 3), (2, 5), (3, 7).', 'Graph von y = ax + b mit Reglern für a und b; Punkte (0|1), (1|3), (2|5), (3|7).'),
        },
      ],
      answers: {
        examples: [[['2 * 3 + 1', 7]], [['2 * 4 + 1 == 9', true]]],
        practice: [[['3 * 5', 15]], 'text', [['10 - 6', 4]]],
      },
      al: {
        title: 'Funksioni me tabelë dhe grafik',
        objectives: ['Të plotësoni tabelën e vlerave të një rregulle si y = 2x + 1.', 'Të paraqitni pikat në grafik dhe të gjeni rregullën nga një tabelë.'],
        theory: 'Funksioni është një rregull që çdo vlere të x-it i jep saktësisht një vlerë të y-it. P.sh. rregulla y = 2x + 1 do të thotë: "shumëzo x me 2 dhe shto 1".\n\nTabela e vlerave tregon disa çifte: për x = 0, 1, 2, 3 marrim y = 1, 3, 5, 7. Çdo çift (x, y) është një pikë në sistemin koordinativ. Kur i shënojmë pikat e y = 2x + 1, ato shtrihen në një drejtëz.\n\nNga një tabelë mund ta gjejmë rregullën: shikojmë sa rritet y kur x rritet me 1, dhe çfarë del për x = 0.',
        keyPoints: ['Funksioni: çdo x → një y.', 'Tabela jep çifte (x, y) = pika në grafik.', 'Rregulla gjendet nga ndryshimi i y dhe vlera për x = 0.'],
        examples: [
          { example: 'Plotësoni tabelën për y = 2x + 1 kur x = 0, 1, 2, 3.', solution: 'y = 1, 3, 5, 7 (p.sh. për x = 3: 2 · 3 + 1 = 7).' },
          { example: 'A shtrihet pika (4, 9) në grafikun e y = 2x + 1?', solution: 'Për x = 4: 2 · 4 + 1 = 9. Po, pika shtrihet në grafik.' },
        ],
        commonMistakes: [
          { mistake: 'Te pika (4, 9) zëvendësohet 9 në vend të x-it.', fix: 'Numri i parë është x, i dyti y.' },
        ],
        practice: [
          { problem: 'Për y = 3x, sa është y kur x = 5?', solution: 'y = 15', steps: ['y = 3 · 5.', '= 15.'] },
          { problem: 'Tabela: x = 1, 2, 3 dhe y = 4, 8, 12. Cila është rregulla?', solution: 'y = 4x', steps: ['Kur x rritet me 1, y rritet me 4.', 'Për x = 1, y = 4 = 4 · 1, pra y = 4x.'] },
          { problem: 'Për y = x + 6, sa është x kur y = 10?', solution: 'x = 4', steps: ['10 = x + 6.', 'x = 10 − 6 = 4.'] },
        ],
      },
      en: {
        title: 'Functions with tables and graphs',
        objectives: ['Complete a table of values for a rule such as y = 2x + 1.', 'Plot the points on a graph and find the rule from a table.'],
        theory: 'A function is a rule that gives exactly one value of y for each value of x. For example the rule y = 2x + 1 means: "multiply x by 2 and add 1".\n\nA table of values shows some pairs: for x = 0, 1, 2, 3 we get y = 1, 3, 5, 7. Each pair (x, y) is a point in the coordinate system. When we plot the points of y = 2x + 1, they lie on a straight line.\n\nFrom a table we can find the rule: look at how much y grows when x grows by 1, and what y is for x = 0.',
        keyPoints: ['Function: each x → one y.', 'A table gives pairs (x, y) = points on the graph.', 'Find the rule from the change in y and the value at x = 0.'],
        examples: [
          { example: 'Complete the table for y = 2x + 1 when x = 0, 1, 2, 3.', solution: 'y = 1, 3, 5, 7 (e.g. for x = 3: 2 · 3 + 1 = 7).' },
          { example: 'Does the point (4, 9) lie on the graph of y = 2x + 1?', solution: 'For x = 4: 2 · 4 + 1 = 9. Yes, the point lies on the graph.' },
        ],
        commonMistakes: [
          { mistake: 'For the point (4, 9), substituting 9 for x.', fix: 'The first number is x, the second is y.' },
        ],
        practice: [
          { problem: 'For y = 3x, what is y when x = 5?', solution: 'y = 15', steps: ['y = 3 · 5.', '= 15.'] },
          { problem: 'Table: x = 1, 2, 3 and y = 4, 8, 12. What is the rule?', solution: 'y = 4x', steps: ['When x grows by 1, y grows by 4.', 'For x = 1, y = 4 = 4 · 1, so y = 4x.'] },
          { problem: 'For y = x + 6, what is x when y = 10?', solution: 'x = 4', steps: ['10 = x + 6.', 'x = 10 − 6 = 4.'] },
        ],
      },
      de: {
        title: 'Funktionen mit Tabelle und Graph',
        objectives: ['Eine Wertetabelle für eine Regel wie y = 2x + 1 ausfüllen.', 'Punkte in ein Koordinatensystem eintragen und die Regel aus einer Tabelle ablesen.'],
        theory: 'Eine Funktion ist eine Regel, die jedem x-Wert genau einen y-Wert zuordnet. Die Regel y = 2x + 1 bedeutet zum Beispiel: „x mal 2, dann plus 1“.\n\nEine Wertetabelle zeigt einige Paare: für x = 0, 1, 2, 3 erhält man y = 1, 3, 5, 7. Jedes Paar (x | y) ist ein Punkt im Koordinatensystem. Trägt man die Punkte von y = 2x + 1 ein, liegen sie auf einer Geraden.\n\nAus einer Tabelle lässt sich die Regel finden: Man schaut, um wie viel y wächst, wenn x um 1 wächst, und welchen Wert y bei x = 0 hat.',
        keyPoints: ['Funktion: jedes x → genau ein y.', 'Die Tabelle liefert Paare (x | y) = Punkte im Graphen.', 'Regel aus der Änderung von y und dem Wert bei x = 0 bestimmen.'],
        examples: [
          { example: 'Füllen Sie die Tabelle für y = 2x + 1 für x = 0, 1, 2, 3 aus.', solution: 'y = 1, 3, 5, 7 (z. B. für x = 3: 2 · 3 + 1 = 7).' },
          { example: 'Liegt der Punkt (4 | 9) auf dem Graphen von y = 2x + 1?', solution: 'Für x = 4: 2 · 4 + 1 = 9. Ja, der Punkt liegt auf dem Graphen.' },
        ],
        commonMistakes: [
          { mistake: 'Beim Punkt (4 | 9) die 9 für x einsetzen.', fix: 'Die erste Zahl ist x, die zweite y.' },
        ],
        practice: [
          { problem: 'Für y = 3x: Wie groß ist y, wenn x = 5?', solution: 'y = 15', steps: ['y = 3 · 5.', '= 15.'] },
          { problem: 'Tabelle: x = 1, 2, 3 und y = 4, 8, 12. Wie lautet die Regel?', solution: 'y = 4x', steps: ['Wächst x um 1, wächst y um 4.', 'Für x = 1 ist y = 4 = 4 · 1, also y = 4x.'] },
          { problem: 'Für y = x + 6: Wie groß ist x, wenn y = 10?', solution: 'x = 4', steps: ['10 = x + 6.', 'x = 10 − 6 = 4.'] },
        ],
      },
    },

    // ───────── 2. Number sequences
    {
      slug: 'g6-functions-sequences-number-sequences',
      visuals: [{
        type: 'numberLine', min: 0, max: 22, step: 1, tickLabels: false,
        points: [{ x: 3, label: 3, below: true }, { x: 7, label: 7, below: true }, { x: 11, label: 11, below: true }, { x: 15, label: 15, below: true }, { x: 19, label: 19, color: 'secondary', below: true }],
        jumps: [{ from: 3, to: 7, label: '+4' }, { from: 7, to: 11, label: '+4' }, { from: 11, to: 15, label: '+4' }, { from: 15, to: 19, label: '+4' }],
        caption: alt('Vargu 3, 7, 11, 15, … rritet çdo herë me 4.', 'The sequence 3, 7, 11, 15, … grows by 4 each time.', 'Die Folge 3, 7, 11, 15, … wächst jedes Mal um 4.'),
        alt: alt('Bosht numerik me kufizat 3, 7, 11, 15, 19 dhe kërcime +4 ndërmjet tyre.', 'Number line with the terms 3, 7, 11, 15, 19 and jumps of +4 between them.', 'Zahlenstrahl mit den Gliedern 3, 7, 11, 15, 19 und Sprüngen von +4 dazwischen.'),
      }],
      answers: {
        examples: [[['15 + 4', 19], ['15 + 8', 23], ['15 + 12', 27]], [['16 * 2', 32]]],
        practice: [[['40 - 5', 35], ['40 - 10', 30]], [['3 + 9 * 4', 39]], [['4 + 4 * 3', 16]]],
      },
      al: {
        title: 'Vargjet numerike',
        objectives: ['Të gjeni rregullën e një vargu dhe ta vazhdoni atë.', 'Të llogaritni një kufizë të largët të vargut.'],
        theory: 'Vargu numerik është një listë numrash të shkruar sipas një rregulle; secili numër quhet kufizë. Te 3, 7, 11, 15, … çdo kufizë është 4 më e madhe se e mëparshmja, prandaj vazhdimi është 19, 23, 27.\n\nRregulla mund të jetë edhe zbritje (50, 45, 40, … : −5) ose shumëzim (2, 4, 8, 16, … : · 2). Për ta gjetur, krahasoni çdo kufizë me të mëparshmen.\n\nKur shtohet gjithmonë i njëjti numër, kufizën e n-të mund ta gjejmë pa i shkruar të gjitha: kufiza e 10-të e vargut 3, 7, 11, … është 3 + 9 · 4 = 39, sepse nga kufiza e parë deri te e dhjeta bëjmë 9 hapa.',
        keyPoints: ['Krahasoni çdo kufizë me të mëparshmen: + , − , · ?', 'Me hap të njëjtë d: kufiza e n-të = kufiza e parë + (n − 1) · d.', 'Kontrolloni rregullën te të gjitha kufizat e dhëna.'],
        examples: [
          { example: 'Vazhdoni vargun 3, 7, 11, 15, … me tri kufiza.', solution: 'Rregulla: +4. Kufizat: 19, 23, 27.' },
          { example: 'Cila është kufiza pas 16 te vargu 2, 4, 8, 16, …?', solution: 'Çdo kufizë dyfishohet: 16 · 2 = 32.' },
        ],
        commonMistakes: [
          { mistake: 'Te kufiza e 10-të shtohen 10 hapa: 3 + 10 · 4 = 43.', fix: 'Nga kufiza e 1-rë te e 10-ta ka 9 hapa.' },
        ],
        practice: [
          { problem: 'Shkruani dy kufizat e radhës: 50, 45, 40, …', solution: '35, 30', steps: ['Rregulla: −5.', '40 − 5 = 35; 35 − 5 = 30.'] },
          { problem: 'Gjeni kufizën e 10-të të vargut 3, 7, 11, …', solution: '39', steps: ['Hapi: 4; nga kufiza e 1-rë te e 10-ta: 9 hapa.', '3 + 9 · 4 = 39.'] },
          { problem: 'Me shkopinj formohen katrorë në rresht: 1 katror 4 shkopinj, 2 katrorë 7, 3 katrorë 10. Sa shkopinj duhen për 5 katrorë?', solution: '16 shkopinj', steps: ['Çdo katror i ri shton 3 shkopinj.', '4 + 4 · 3 = 16.'] },
        ],
      },
      en: {
        title: 'Number sequences',
        objectives: ['Find the rule of a sequence and continue it.', 'Work out a term far along the sequence.'],
        theory: 'A number sequence is a list of numbers written by a rule; each number is a term. In 3, 7, 11, 15, … each term is 4 more than the one before, so it continues 19, 23, 27.\n\nThe rule can also be subtraction (50, 45, 40, … : −5) or multiplication (2, 4, 8, 16, … : · 2). To find it, compare each term with the one before.\n\nWhen the same number is always added, we can find the n-th term without writing them all: the 10th term of 3, 7, 11, … is 3 + 9 · 4 = 39, because from the first term to the tenth there are 9 steps.',
        keyPoints: ['Compare each term with the one before: +, −, · ?', 'With a constant step d: n-th term = first term + (n − 1) · d.', 'Check the rule on all the given terms.'],
        examples: [
          { example: 'Continue the sequence 3, 7, 11, 15, … with three terms.', solution: 'Rule: +4. Terms: 19, 23, 27.' },
          { example: 'What comes after 16 in the sequence 2, 4, 8, 16, …?', solution: 'Each term doubles: 16 · 2 = 32.' },
        ],
        commonMistakes: [
          { mistake: 'For the 10th term, adding 10 steps: 3 + 10 · 4 = 43.', fix: 'From the 1st term to the 10th there are 9 steps.' },
        ],
        practice: [
          { problem: 'Write the next two terms: 50, 45, 40, …', solution: '35, 30', steps: ['Rule: −5.', '40 − 5 = 35; 35 − 5 = 30.'] },
          { problem: 'Find the 10th term of the sequence 3, 7, 11, …', solution: '39', steps: ['Step: 4; from the 1st term to the 10th: 9 steps.', '3 + 9 · 4 = 39.'] },
          { problem: 'Matchsticks make squares in a row: 1 square uses 4 sticks, 2 squares 7, 3 squares 10. How many sticks are needed for 5 squares?', solution: '16 sticks', steps: ['Each new square adds 3 sticks.', '4 + 4 · 3 = 16.'] },
        ],
      },
      de: {
        title: 'Zahlenfolgen',
        objectives: ['Die Regel einer Zahlenfolge erkennen und die Folge fortsetzen.', 'Ein weit entferntes Folgenglied berechnen.'],
        theory: 'Eine Zahlenfolge ist eine Liste von Zahlen, die nach einer Regel gebildet wird; jede Zahl heißt Glied. Bei 3, 7, 11, 15, … ist jedes Glied um 4 größer als das vorige, also geht es mit 19, 23, 27 weiter.\n\nDie Regel kann auch Subtraktion sein (50, 45, 40, … : −5) oder Multiplikation (2, 4, 8, 16, … : · 2). Um sie zu finden, vergleicht man jedes Glied mit dem vorigen.\n\nWird immer dieselbe Zahl addiert, kann man das n-te Glied berechnen, ohne alle aufzuschreiben: Das 10. Glied von 3, 7, 11, … ist 3 + 9 · 4 = 39, denn vom ersten bis zum zehnten Glied sind es 9 Schritte.',
        keyPoints: ['Jedes Glied mit dem vorigen vergleichen: +, −, · ?', 'Bei gleichem Schritt d: n-tes Glied = erstes Glied + (n − 1) · d.', 'Die Regel an allen gegebenen Gliedern prüfen.'],
        examples: [
          { example: 'Setzen Sie die Folge 3, 7, 11, 15, … um drei Glieder fort.', solution: 'Regel: +4. Glieder: 19, 23, 27.' },
          { example: 'Welche Zahl folgt in der Folge 2, 4, 8, 16, … auf 16?', solution: 'Jedes Glied verdoppelt sich: 16 · 2 = 32.' },
        ],
        commonMistakes: [
          { mistake: 'Für das 10. Glied 10 Schritte addieren: 3 + 10 · 4 = 43.', fix: 'Vom 1. bis zum 10. Glied sind es 9 Schritte.' },
        ],
        practice: [
          { problem: 'Schreiben Sie die nächsten zwei Glieder: 50, 45, 40, …', solution: '35, 30', steps: ['Regel: −5.', '40 − 5 = 35; 35 − 5 = 30.'] },
          { problem: 'Bestimmen Sie das 10. Glied der Folge 3, 7, 11, …', solution: '39', steps: ['Schritt: 4; vom 1. bis zum 10. Glied: 9 Schritte.', '3 + 9 · 4 = 39.'] },
          { problem: 'Aus Streichhölzern werden Quadrate in einer Reihe gelegt: 1 Quadrat braucht 4 Hölzer, 2 Quadrate 7, 3 Quadrate 10. Wie viele Hölzer braucht man für 5 Quadrate?', solution: '16 Hölzer', steps: ['Jedes neue Quadrat braucht 3 Hölzer mehr.', '4 + 4 · 3 = 16.'] },
        ],
      },
    },
  ],
};
