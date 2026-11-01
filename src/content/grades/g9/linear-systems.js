// Grade 9 · Theme 6: Linear equations in two variables and systems (January–March)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g9-linear-systems',
  i18n: {
    al: { title: 'Ekuacionet lineare me dy ndryshore dhe sistemet', description: 'Grafiku i y = ax + b, sistemet me metodën grafike, të zëvendësimit dhe të eliminimit, zbatimet.' },
    en: { title: 'Linear graphs and systems', description: 'The graph of y = ax + b, solving systems graphically, by substitution and by elimination, applications.' },
    de: { title: 'Lineare Funktionen und Gleichungssysteme', description: 'Der Graph von y = ax + b, Gleichungssysteme grafisch, mit Einsetzungs- und Additionsverfahren, Anwendungen.' },
  },
  lessons: [
    // ───────── 1. The graph of y = ax + b
    {
      slug: 'g9-linear-systems-line-graph',
      practiceVisuals: {
        0: {
        type: 'functionPlot', view: { xMin: -2, xMax: 8, yMin: -8, yMax: 8 },
        functions: [{ expr: 'k*x + n', label: 'y = {k}x {+n}' }],
        points: [{ at: ['-n/k', 0], label: '({-n/k}, 0)', color: 'secondary' }],
        sliders: [{ name: 'k', min: -4, max: 4, step: 0.5, value: -1 }, { name: 'n', min: -8, max: 8, step: 1, value: 4 }],
        readouts: [{ text: { al: 'Prerja me boshtin x: y = 0 → x = −n/k = {-n/k}', en: 'x-intercept: y = 0 → x = −n/k = {-n/k}', de: 'Nullstelle: y = 0 → x = −n/k = {-n/k}' } }],
        alt: { al: 'Drejtëza y = kx + n dhe pika ku pret boshtin x.', en: 'The line y = kx + n and the point where it crosses the x-axis.', de: 'Die Gerade y = kx + n und ihr Schnittpunkt mit der x-Achse.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -4, xMax: 6, yMin: -8, yMax: 6 }, height: 240,
        functions: [{ expr: 'a*x + b', label: 'y = ax + b' }],
        sliders: [{ name: 'a', min: -3, max: 3, step: 0.5, value: 2, label: 'a' }, { name: 'b', min: -6, max: 4, step: 1, value: -6, label: 'b' }],
        points: [{ at: [3, 0], label: '(3, 0)' }, { at: [0, -6], label: '(0, −6)' }],
        caption: alt('a është pjerrësia (sa ngjitet y kur x rritet me 1), b prerja me boshtin y. Me a = 2, b = −6: prerjet (3, 0) dhe (0, −6).', 'a is the slope (how much y rises when x grows by 1), b the y-intercept. With a = 2, b = −6: intercepts (3, 0) and (0, −6).', 'a ist die Steigung (um wie viel y wächst, wenn x um 1 wächst), b der y-Achsenabschnitt. Mit a = 2, b = −6: Schnittpunkte (3 | 0) und (0 | −6).'),
        alt: alt('Drejtëza y = ax + b me rrëshqitës për a dhe b; fillimisht y = 2x − 6.', 'The line y = ax + b with sliders for a and b; starting as y = 2x − 6.', 'Die Gerade y = ax + b mit Schiebereglern für a und b; zu Beginn y = 2x − 6.'),
      }],
      answers: {
        examples: [[['6 / 2', 3], ['-6', -6]], [['(8 - 2) / (3 - 1)', 3]]],
        practice: [[['4', 4]], 'text', [['2 * 5 - 6', 4]]],
      },
      al: {
        title: 'Grafiku i y = ax + b',
        objectives: ['Të lexoni pjerrësinë dhe prerjen me boshtin y nga y = ax + b.', 'Të gjeni prerjet me boshtet dhe pjerrësinë nga dy pika.'],
        theory: 'Grafiku i funksionit linear y = ax + b është drejtëz. Koeficienti a është pjerrësia: kur x rritet me 1, y ndryshon me a. Nëse a > 0 drejtëza ngjitet, nëse a < 0 zbret, nëse a = 0 është horizontale. b është prerja me boshtin y: pika (0, b).\n\nPrerja me boshtin x del nga y = 0: për y = 2x − 6, 2x − 6 = 0 → x = 3, pika (3, 0).\n\nPjerrësia nga dy pika (x₁, y₁), (x₂, y₂): a = (y₂ − y₁)/(x₂ − x₁). Nga (1, 2) dhe (3, 8): a = 6/2 = 3.',
        keyPoints: ['a = pjerrësia;  b = prerja me boshtin y', 'Prerja me boshtin x: y = 0', 'a = (y₂ − y₁)/(x₂ − x₁)'],
        examples: [
          { example: 'Gjeni prerjet e y = 2x − 6 me boshtet.', solution: 'x = 0: y = −6 → (0, −6); y = 0: x = 3 → (3, 0).' },
          { example: 'Gjeni pjerrësinë e drejtëzës nëpër (1, 2) dhe (3, 8).', solution: 'a = (8 − 2)/(3 − 1) = 3.' },
        ],
        commonMistakes: [
          { mistake: 'Te y = 2x − 6 prerja me boshtin x është (−6, 0).', fix: '−6 është prerja me boshtin y; për boshtin x zgjidhet 2x − 6 = 0 → x = 3.' },
          { mistake: 'a = (x₂ − x₁)/(y₂ − y₁)', fix: 'Pjerrësia është ndryshimi i y mbi ndryshimin e x.' },
        ],
        practice: [
          { problem: 'Ku e pret y = −x + 4 boshtin x?', solution: '(4, 0)', steps: ['0 = −x + 4.', 'x = 4.'] },
          { problem: 'Shkruani drejtëzën me pjerrësi 2 që kalon nëpër (0, 1).', solution: 'y = 2x + 1', steps: ['a = 2, b = 1.', 'y = 2x + 1.'] },
          { problem: 'Për y = 2x − 6, sa është y kur x = 5?', solution: '4', steps: ['2 · 5 − 6.', '= 4.'] },
        ],
      },
      en: {
        title: 'The graph of y = ax + b',
        objectives: ['Read the slope and y-intercept from y = ax + b.', 'Find the axis intercepts and the slope from two points.'],
        theory: 'The graph of the linear function y = ax + b is a straight line. The coefficient a is the slope: when x grows by 1, y changes by a. If a > 0 the line rises, if a < 0 it falls, if a = 0 it is horizontal. b is the y-intercept: the point (0, b).\n\nThe x-intercept comes from y = 0: for y = 2x − 6, 2x − 6 = 0 → x = 3, the point (3, 0).\n\nSlope from two points (x₁, y₁), (x₂, y₂): a = (y₂ − y₁)/(x₂ − x₁). From (1, 2) and (3, 8): a = 6/2 = 3.',
        keyPoints: ['a = slope;  b = y-intercept', 'x-intercept: y = 0', 'a = (y₂ − y₁)/(x₂ − x₁)'],
        examples: [
          { example: 'Find where y = 2x − 6 crosses the axes.', solution: 'x = 0: y = −6 → (0, −6); y = 0: x = 3 → (3, 0).' },
          { example: 'Find the slope of the line through (1, 2) and (3, 8).', solution: 'a = (8 − 2)/(3 − 1) = 3.' },
        ],
        commonMistakes: [
          { mistake: 'For y = 2x − 6 the x-intercept is (−6, 0).', fix: '−6 is the y-intercept; for the x-axis solve 2x − 6 = 0 → x = 3.' },
          { mistake: 'a = (x₂ − x₁)/(y₂ − y₁)', fix: 'The slope is the change in y over the change in x.' },
        ],
        practice: [
          { problem: 'Where does y = −x + 4 cross the x-axis?', solution: '(4, 0)', steps: ['0 = −x + 4.', 'x = 4.'] },
          { problem: 'Write the line with slope 2 through (0, 1).', solution: 'y = 2x + 1', steps: ['a = 2, b = 1.', 'y = 2x + 1.'] },
          { problem: 'For y = 2x − 6, what is y when x = 5?', solution: '4', steps: ['2 · 5 − 6.', '= 4.'] },
        ],
      },
      de: {
        title: 'Der Graph von y = ax + b',
        objectives: ['Steigung und y-Achsenabschnitt aus y = ax + b ablesen.', 'Achsenschnittpunkte und die Steigung aus zwei Punkten bestimmen.'],
        theory: 'Der Graph der linearen Funktion y = ax + b ist eine Gerade. Der Koeffizient a ist die Steigung: Wächst x um 1, ändert sich y um a. Ist a > 0, steigt die Gerade, ist a < 0, fällt sie, ist a = 0, ist sie waagerecht. b ist der y-Achsenabschnitt: der Punkt (0 | b).\n\nDie Nullstelle ergibt sich aus y = 0: Für y = 2x − 6 ist 2x − 6 = 0 → x = 3, der Punkt (3 | 0).\n\nSteigung aus zwei Punkten (x₁ | y₁), (x₂ | y₂): a = (y₂ − y₁)/(x₂ − x₁). Aus (1 | 2) und (3 | 8): a = 6/2 = 3.',
        keyPoints: ['a = Steigung;  b = y-Achsenabschnitt', 'Nullstelle: y = 0', 'a = (y₂ − y₁)/(x₂ − x₁)'],
        examples: [
          { example: 'Bestimmen Sie die Achsenschnittpunkte von y = 2x − 6.', solution: 'x = 0: y = −6 → (0 | −6); y = 0: x = 3 → (3 | 0).' },
          { example: 'Bestimmen Sie die Steigung der Geraden durch (1 | 2) und (3 | 8).', solution: 'a = (8 − 2)/(3 − 1) = 3.' },
        ],
        commonMistakes: [
          { mistake: 'Bei y = 2x − 6 ist (−6 | 0) die Nullstelle.', fix: '−6 ist der y-Achsenabschnitt; für die x-Achse 2x − 6 = 0 lösen → x = 3.' },
          { mistake: 'a = (x₂ − x₁)/(y₂ − y₁)', fix: 'Die Steigung ist y-Änderung durch x-Änderung.' },
        ],
        practice: [
          { problem: 'Wo schneidet y = −x + 4 die x-Achse?', solution: '(4 | 0)', steps: ['0 = −x + 4.', 'x = 4.'] },
          { problem: 'Geben Sie die Gerade mit Steigung 2 durch (0 | 1) an.', solution: 'y = 2x + 1', steps: ['a = 2, b = 1.', 'y = 2x + 1.'] },
          { problem: 'Für y = 2x − 6: Wie groß ist y bei x = 5?', solution: '4', steps: ['2 · 5 − 6.', '= 4.'] },
        ],
      },
    },

    // ───────── 2. Graphical method
    {
      slug: 'g9-linear-systems-graphical-method',
      practiceVisuals: {
        1: {
        type: 'functionPlot', view: { xMin: -4, xMax: 4, yMin: -8, yMax: 8 },
        functions: [{ expr: '-2*x + 1', color: 'muted', label: 'y = −2x + 1' }, { expr: '(c - 4*x)/2', color: 'secondary', dashed: true, label: '4x + 2y = {c}' }],
        sliders: [{ name: 'c', min: -6, max: 8, step: 1, value: 2 }],
        readouts: [{ cases: [
          { when: 'c == 2', text: { al: 'Për c = 2 të dyja janë e njëjta drejtëz: pafund zgjidhje.', en: 'For c = 2 both are the same line: infinitely many solutions.', de: 'Für c = 2 sind beide dieselbe Gerade: unendlich viele Lösungen.' } },
          { text: { al: 'Paralele (të njëjtin koeficient −2): asnjë zgjidhje.', en: 'Parallel (same gradient −2): no solution.', de: 'Parallel (gleiche Steigung −2): keine Lösung.' } },
        ] }],
        alt: { al: 'Drejtëzat y = −2x + 1 dhe 4x + 2y = c me rrëshqitës për c.', en: 'The lines y = −2x + 1 and 4x + 2y = c with a slider for c.', de: 'Die Geraden y = −2x + 1 und 4x + 2y = c mit Schieberegler für c.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 6, yMin: -1, yMax: 6 }, height: 230,
        functions: [{ expr: 'x + 1', label: 'y = x + 1' }, { expr: '-x + 5', label: 'y = −x + 5' }],
        points: [{ at: [2, 3], label: '(2, 3)' }],
        caption: alt('Zgjidhja e sistemit është pika ku priten drejtëzat: (2, 3).', 'The solution of the system is where the lines cross: (2, 3).', 'Die Lösung des Systems ist der Schnittpunkt der Geraden: (2 | 3).'),
        alt: alt('Drejtëzat y = x + 1 dhe y = −x + 5 që priten në (2, 3).', 'The lines y = x + 1 and y = −x + 5 crossing at (2, 3).', 'Die Geraden y = x + 1 und y = −x + 5 schneiden sich in (2 | 3).'),
      }],
      answers: {
        examples: [[['(5 - 1) / 2', 2], ['2 + 1', 3]], 'text'],
        practice: [[['(2 + 2) / (3 - 1)', 2], ['2 + 2', 4]], 'text', [['6 / 2', 3]]],
      },
      al: {
        title: 'Sistemet me metodën grafike',
        objectives: ['Të zgjidhni sistem dy ekuacionesh duke vizatuar dy drejtëza.', 'Të dalloni rastet me një, asnjë ose pafund zgjidhje.'],
        theory: 'Çdo ekuacion linear me dy ndryshore është një drejtëz. Zgjidhja e sistemit është pika e përbashkët e dy drejtëzave.\n\nTre raste: drejtëzat priten → një zgjidhje; janë paralele (pjerrësi e njëjtë, prerje të ndryshme) → asnjë zgjidhje; përputhen (e njëjta drejtëz) → pafund zgjidhje.\n\nMetoda grafike jep zgjidhjen me saktësi vetëm kur pika ka koordinata të plota; zgjidhjen e kontrollojmë gjithmonë duke zëvendësuar në të dy ekuacionet.',
        keyPoints: ['Prerje → një zgjidhje', 'Paralele → asnjë', 'Përputhen → pafund'],
        examples: [
          { example: 'Zgjidhni grafikisht: y = x + 1, y = −x + 5.', solution: 'Drejtëzat priten në (2, 3). Kontroll: 2 + 1 = 3 dhe −2 + 5 = 3.' },
          { example: 'Sa zgjidhje ka sistemi y = 2x + 1, y = 2x − 3?', solution: 'Asnjë: pjerrësia e njëjtë 2, prerjet të ndryshme; drejtëzat janë paralele.' },
        ],
        commonMistakes: [
          { mistake: 'Gjithmonë ka saktësisht një zgjidhje.', fix: 'Krahasoni pjerrësitë: të njëjta → paralele ose të njëjta drejtëz.' },
        ],
        practice: [
          { problem: 'Zgjidhni: y = 3x − 2, y = x + 2.', solution: '(2, 4)', steps: ['3x − 2 = x + 2 → x = 2.', 'y = 4.'] },
          { problem: 'Sa zgjidhje ka: y = −2x + 1 dhe 4x + 2y = 2?', solution: 'Pafund', steps: ['Nga 4x + 2y = 2: y = −2x + 1.', 'E njëjta drejtëz.'] },
          { problem: 'Ku priten y = x dhe y = 6 − x?', solution: '(3, 3)', steps: ['x = 6 − x → x = 3.', 'y = 3.'] },
        ],
      },
      en: {
        title: 'Solving systems graphically',
        objectives: ['Solve a system of two equations by drawing two lines.', 'Recognise the cases with one, no or infinitely many solutions.'],
        theory: 'Every linear equation in two variables is a straight line. The solution of the system is the point the two lines have in common.\n\nThree cases: the lines cross → one solution; they are parallel (same slope, different intercepts) → no solution; they coincide (the same line) → infinitely many solutions.\n\nThe graphical method gives an exact answer only when the point has whole-number coordinates; always check the solution by substituting into both equations.',
        keyPoints: ['Cross → one solution', 'Parallel → none', 'Same line → infinitely many'],
        examples: [
          { example: 'Solve graphically: y = x + 1, y = −x + 5.', solution: 'The lines cross at (2, 3). Check: 2 + 1 = 3 and −2 + 5 = 3.' },
          { example: 'How many solutions does y = 2x + 1, y = 2x − 3 have?', solution: 'None: same slope 2, different intercepts; the lines are parallel.' },
        ],
        commonMistakes: [
          { mistake: 'There is always exactly one solution.', fix: 'Compare the slopes: equal → parallel or the same line.' },
        ],
        practice: [
          { problem: 'Solve: y = 3x − 2, y = x + 2.', solution: '(2, 4)', steps: ['3x − 2 = x + 2 → x = 2.', 'y = 4.'] },
          { problem: 'How many solutions: y = −2x + 1 and 4x + 2y = 2?', solution: 'Infinitely many', steps: ['From 4x + 2y = 2: y = −2x + 1.', 'The same line.'] },
          { problem: 'Where do y = x and y = 6 − x cross?', solution: '(3, 3)', steps: ['x = 6 − x → x = 3.', 'y = 3.'] },
        ],
      },
      de: {
        title: 'Gleichungssysteme grafisch lösen',
        objectives: ['Ein System aus zwei Gleichungen durch Zeichnen zweier Geraden lösen.', 'Die Fälle mit einer, keiner oder unendlich vielen Lösungen erkennen.'],
        theory: 'Jede lineare Gleichung mit zwei Variablen ist eine Gerade. Die Lösung des Systems ist der gemeinsame Punkt der beiden Geraden.\n\nDrei Fälle: Die Geraden schneiden sich → eine Lösung; sie sind parallel (gleiche Steigung, verschiedene Achsenabschnitte) → keine Lösung; sie sind identisch → unendlich viele Lösungen.\n\nGrafisch erhält man nur bei ganzzahligen Koordinaten ein exaktes Ergebnis; die Lösung immer durch Einsetzen in beide Gleichungen prüfen.',
        keyPoints: ['Schnittpunkt → eine Lösung', 'Parallel → keine', 'Identisch → unendlich viele'],
        examples: [
          { example: 'Lösen Sie grafisch: y = x + 1, y = −x + 5.', solution: 'Die Geraden schneiden sich in (2 | 3). Probe: 2 + 1 = 3 und −2 + 5 = 3.' },
          { example: 'Wie viele Lösungen hat y = 2x + 1, y = 2x − 3?', solution: 'Keine: gleiche Steigung 2, verschiedene Achsenabschnitte; die Geraden sind parallel.' },
        ],
        commonMistakes: [
          { mistake: 'Es gibt immer genau eine Lösung.', fix: 'Steigungen vergleichen: gleich → parallel oder identisch.' },
        ],
        practice: [
          { problem: 'Lösen Sie: y = 3x − 2, y = x + 2.', solution: '(2 | 4)', steps: ['3x − 2 = x + 2 → x = 2.', 'y = 4.'] },
          { problem: 'Wie viele Lösungen hat: y = −2x + 1 und 4x + 2y = 2?', solution: 'Unendlich viele', steps: ['Aus 4x + 2y = 2: y = −2x + 1.', 'Dieselbe Gerade.'] },
          { problem: 'Wo schneiden sich y = x und y = 6 − x?', solution: '(3 | 3)', steps: ['x = 6 − x → x = 3.', 'y = 3.'] },
        ],
      },
    },

    // ───────── 3. Substitution
    {
      slug: 'g9-linear-systems-substitution',
      noVisual: 'The substitution method is shown step by step in the worked examples.',
      answers: {
        examples: [[['14 / 7', 2], ['2 * 2 - 1', 3]], [['8 / 4', 2], ['3 * 2 - 1', 5]]],
        practice: [[['(12 - 6) / 3', 2], ['2 + 3', 5]], [['15 / 5', 3], ['2 * 3', 6]], [['(8 + 4) / 3', 4], ['4 - 2', 2]]],
      },
      al: {
        title: 'Metoda e zëvendësimit',
        objectives: ['Të zgjidhni sisteme duke shprehur njërën ndryshore.', 'Të zgjidhni ndryshoren dhe ekuacionin më të përshtatshëm për zëvendësim.'],
        theory: 'Hapat: (1) nga njëri ekuacion shprehim njërën ndryshore (zgjidhni atë me koeficient 1 nëse ka); (2) e zëvendësojmë në ekuacionin tjetër dhe marrim ekuacion me një ndryshore; (3) e zgjidhim; (4) gjejmë ndryshoren tjetër; (5) kontrollojmë në të dy ekuacionet.\n\nShembull: 2x + 3y = 12, x = 2y − 1. Zëvendësojmë: 2(2y − 1) + 3y = 12 → 7y − 2 = 12 → y = 2; x = 2 · 2 − 1 = 3.\n\nKujdes: shprehja e zëvendësuar vendoset gjithmonë në kllapa.',
        keyPoints: ['Shpreh → zëvendëso (në kllapa) → zgjidh', 'Gjej ndryshoren e dytë', 'Prova në të dy ekuacionet'],
        examples: [
          { example: 'Zgjidhni: 2x + 3y = 12, x = 2y − 1.', solution: '2(2y − 1) + 3y = 12 → 7y = 14 → y = 2; x = 3.' },
          { example: 'Zgjidhni: y = 3x − 1, x + y = 7.', solution: 'x + 3x − 1 = 7 → 4x = 8 → x = 2; y = 5.' },
        ],
        commonMistakes: [
          { mistake: '2(2y − 1) + 3y = 4y − 1 + 3y', fix: 'Shumëzohet e gjithë kllapa: 2 · (−1) = −2.' },
        ],
        practice: [
          { problem: 'Zgjidhni: x = y + 3, 2x + y = 12.', solution: 'x = 5, y = 2', steps: ['2(y + 3) + y = 12 → 3y = 6.', 'y = 2, x = 5.'] },
          { problem: 'Zgjidhni: y = 2x, 3x + y = 15.', solution: 'x = 3, y = 6', steps: ['3x + 2x = 15 → x = 3.', 'y = 6.'] },
          { problem: 'Zgjidhni: x + 2y = 8, y = x − 2.', solution: 'x = 4, y = 2', steps: ['x + 2(x − 2) = 8 → 3x = 12.', 'x = 4, y = 2.'] },
        ],
      },
      en: {
        title: 'The substitution method',
        objectives: ['Solve systems by expressing one variable.', 'Choose the most convenient variable and equation to substitute.'],
        theory: 'Steps: (1) from one equation express one variable (pick one with coefficient 1 if there is one); (2) substitute it into the other equation to get an equation in one variable; (3) solve it; (4) find the other variable; (5) check in both equations.\n\nExample: 2x + 3y = 12, x = 2y − 1. Substitute: 2(2y − 1) + 3y = 12 → 7y − 2 = 12 → y = 2; x = 2 · 2 − 1 = 3.\n\nCareful: always put the substituted expression in brackets.',
        keyPoints: ['Express → substitute (in brackets) → solve', 'Find the second variable', 'Check in both equations'],
        examples: [
          { example: 'Solve: 2x + 3y = 12, x = 2y − 1.', solution: '2(2y − 1) + 3y = 12 → 7y = 14 → y = 2; x = 3.' },
          { example: 'Solve: y = 3x − 1, x + y = 7.', solution: 'x + 3x − 1 = 7 → 4x = 8 → x = 2; y = 5.' },
        ],
        commonMistakes: [
          { mistake: '2(2y − 1) + 3y = 4y − 1 + 3y', fix: 'Multiply the whole bracket: 2 · (−1) = −2.' },
        ],
        practice: [
          { problem: 'Solve: x = y + 3, 2x + y = 12.', solution: 'x = 5, y = 2', steps: ['2(y + 3) + y = 12 → 3y = 6.', 'y = 2, x = 5.'] },
          { problem: 'Solve: y = 2x, 3x + y = 15.', solution: 'x = 3, y = 6', steps: ['3x + 2x = 15 → x = 3.', 'y = 6.'] },
          { problem: 'Solve: x + 2y = 8, y = x − 2.', solution: 'x = 4, y = 2', steps: ['x + 2(x − 2) = 8 → 3x = 12.', 'x = 4, y = 2.'] },
        ],
      },
      de: {
        title: 'Das Einsetzungsverfahren',
        objectives: ['Gleichungssysteme durch Auflösen nach einer Variablen lösen.', 'Die günstigste Variable und Gleichung zum Einsetzen wählen.'],
        theory: 'Schritte: (1) eine Gleichung nach einer Variablen auflösen (möglichst eine mit Koeffizient 1); (2) in die andere Gleichung einsetzen, sodass eine Gleichung mit einer Variablen entsteht; (3) lösen; (4) die andere Variable bestimmen; (5) Probe in beiden Gleichungen.\n\nBeispiel: 2x + 3y = 12, x = 2y − 1. Einsetzen: 2(2y − 1) + 3y = 12 → 7y − 2 = 12 → y = 2; x = 2 · 2 − 1 = 3.\n\nAchtung: Den eingesetzten Term immer in Klammern setzen.',
        keyPoints: ['Auflösen → einsetzen (in Klammern) → lösen', 'Zweite Variable bestimmen', 'Probe in beiden Gleichungen'],
        examples: [
          { example: 'Lösen Sie: 2x + 3y = 12, x = 2y − 1.', solution: '2(2y − 1) + 3y = 12 → 7y = 14 → y = 2; x = 3.' },
          { example: 'Lösen Sie: y = 3x − 1, x + y = 7.', solution: 'x + 3x − 1 = 7 → 4x = 8 → x = 2; y = 5.' },
        ],
        commonMistakes: [
          { mistake: '2(2y − 1) + 3y = 4y − 1 + 3y', fix: 'Die ganze Klammer multiplizieren: 2 · (−1) = −2.' },
        ],
        practice: [
          { problem: 'Lösen Sie: x = y + 3, 2x + y = 12.', solution: 'x = 5, y = 2', steps: ['2(y + 3) + y = 12 → 3y = 6.', 'y = 2, x = 5.'] },
          { problem: 'Lösen Sie: y = 2x, 3x + y = 15.', solution: 'x = 3, y = 6', steps: ['3x + 2x = 15 → x = 3.', 'y = 6.'] },
          { problem: 'Lösen Sie: x + 2y = 8, y = x − 2.', solution: 'x = 4, y = 2', steps: ['x + 2(x − 2) = 8 → 3x = 12.', 'x = 4, y = 2.'] },
        ],
      },
    },

    // ───────── 4. Elimination
    {
      slug: 'g9-linear-systems-elimination',
      noVisual: 'The elimination method is shown step by step in the worked examples.',
      answers: {
        examples: [[['14 / 2', 7], ['10 - 7', 3]], [['20 / 5', 4], ['(16 - 12) / 2', 2]]],
        practice: [[['20 / 5', 4], ['9 - 8', 1]], [['8 / 2', 4], ['(25 - 16) / 3', 3]], [['13 - 10', 3], ['(5 - 3) / 2', 1]]],
      },
      al: {
        title: 'Metoda e eliminimit',
        objectives: ['Të zgjidhni sisteme duke mbledhur ose zbritur ekuacionet.', 'Të shumëzoni një ekuacion që koeficientët të bëhen të kundërt.'],
        theory: 'Kur një ndryshore ka koeficientë të kundërt në dy ekuacionet, i mbledhim dhe ajo eliminohet: x + y = 10, x − y = 4 → 2x = 14 → x = 7, y = 3.\n\nKur koeficientët janë të barabartë, zbresim ekuacionet: 4x + 3y = 25, 2x + 3y = 17 → 2x = 8 → x = 4, y = 3.\n\nNëse koeficientët nuk përputhen, shumëzojmë njërin ose të dy ekuacionet: x + 2y = 5 dhe 3x + 4y = 13; ekuacioni i parë · 2: 2x + 4y = 10; zbresim: x = 3, pastaj y = 1.',
        keyPoints: ['Koeficientë të kundërt → mblidh', 'Koeficientë të barabartë → zbrit', 'Shumëzo për t\'i përgatitur'],
        examples: [
          { example: 'Zgjidhni: x + y = 10, x − y = 4.', solution: 'Mbledhim: 2x = 14 → x = 7; y = 3.' },
          { example: 'Zgjidhni: 3x + 2y = 16, 2x − 2y = 4.', solution: 'Mbledhim: 5x = 20 → x = 4; 12 + 2y = 16 → y = 2.' },
        ],
        commonMistakes: [
          { mistake: 'Shumëzohet vetëm ana e majtë e ekuacionit.', fix: 'Shumëzohen të gjitha kufizat, edhe ana e djathtë.' },
        ],
        practice: [
          { problem: 'Zgjidhni: 2x + y = 9, 3x − y = 11.', solution: 'x = 4, y = 1', steps: ['Mbledhim: 5x = 20 → x = 4.', 'y = 9 − 8 = 1.'] },
          { problem: 'Zgjidhni: 4x + 3y = 25, 2x + 3y = 17.', solution: 'x = 4, y = 3', steps: ['Zbresim: 2x = 8 → x = 4.', '3y = 25 − 16 = 9 → y = 3.'] },
          { problem: 'Zgjidhni: x + 2y = 5, 3x + 4y = 13.', solution: 'x = 3, y = 1', steps: ['I pari · 2: 2x + 4y = 10; zbresim: x = 3.', '2y = 5 − 3 → y = 1.'] },
        ],
      },
      en: {
        title: 'The elimination method',
        objectives: ['Solve systems by adding or subtracting the equations.', 'Multiply an equation so that coefficients become opposite.'],
        theory: 'When a variable has opposite coefficients in the two equations, add them and it disappears: x + y = 10, x − y = 4 → 2x = 14 → x = 7, y = 3.\n\nWhen the coefficients are equal, subtract the equations: 4x + 3y = 25, 2x + 3y = 17 → 2x = 8 → x = 4, y = 3.\n\nIf the coefficients do not match, multiply one or both equations: x + 2y = 5 and 3x + 4y = 13; first equation · 2: 2x + 4y = 10; subtract: x = 3, then y = 1.',
        keyPoints: ['Opposite coefficients → add', 'Equal coefficients → subtract', 'Multiply to prepare'],
        examples: [
          { example: 'Solve: x + y = 10, x − y = 4.', solution: 'Add: 2x = 14 → x = 7; y = 3.' },
          { example: 'Solve: 3x + 2y = 16, 2x − 2y = 4.', solution: 'Add: 5x = 20 → x = 4; 12 + 2y = 16 → y = 2.' },
        ],
        commonMistakes: [
          { mistake: 'Multiplying only the left side of an equation.', fix: 'Multiply every term, including the right-hand side.' },
        ],
        practice: [
          { problem: 'Solve: 2x + y = 9, 3x − y = 11.', solution: 'x = 4, y = 1', steps: ['Add: 5x = 20 → x = 4.', 'y = 9 − 8 = 1.'] },
          { problem: 'Solve: 4x + 3y = 25, 2x + 3y = 17.', solution: 'x = 4, y = 3', steps: ['Subtract: 2x = 8 → x = 4.', '3y = 25 − 16 = 9 → y = 3.'] },
          { problem: 'Solve: x + 2y = 5, 3x + 4y = 13.', solution: 'x = 3, y = 1', steps: ['First · 2: 2x + 4y = 10; subtract: x = 3.', '2y = 5 − 3 → y = 1.'] },
        ],
      },
      de: {
        title: 'Das Additionsverfahren',
        objectives: ['Gleichungssysteme durch Addieren oder Subtrahieren der Gleichungen lösen.', 'Eine Gleichung so multiplizieren, dass Koeffizienten entgegengesetzt werden.'],
        theory: 'Hat eine Variable in beiden Gleichungen entgegengesetzte Koeffizienten, addiert man die Gleichungen und sie fällt weg: x + y = 10, x − y = 4 → 2x = 14 → x = 7, y = 3.\n\nSind die Koeffizienten gleich, subtrahiert man: 4x + 3y = 25, 2x + 3y = 17 → 2x = 8 → x = 4, y = 3.\n\nPassen die Koeffizienten nicht, multipliziert man eine oder beide Gleichungen: x + 2y = 5 und 3x + 4y = 13; erste Gleichung · 2: 2x + 4y = 10; subtrahieren: x = 3, dann y = 1.',
        keyPoints: ['Entgegengesetzte Koeffizienten → addieren', 'Gleiche Koeffizienten → subtrahieren', 'Vorher passend multiplizieren'],
        examples: [
          { example: 'Lösen Sie: x + y = 10, x − y = 4.', solution: 'Addieren: 2x = 14 → x = 7; y = 3.' },
          { example: 'Lösen Sie: 3x + 2y = 16, 2x − 2y = 4.', solution: 'Addieren: 5x = 20 → x = 4; 12 + 2y = 16 → y = 2.' },
        ],
        commonMistakes: [
          { mistake: 'Nur die linke Seite einer Gleichung multiplizieren.', fix: 'Jedes Glied multiplizieren, auch die rechte Seite.' },
        ],
        practice: [
          { problem: 'Lösen Sie: 2x + y = 9, 3x − y = 11.', solution: 'x = 4, y = 1', steps: ['Addieren: 5x = 20 → x = 4.', 'y = 9 − 8 = 1.'] },
          { problem: 'Lösen Sie: 4x + 3y = 25, 2x + 3y = 17.', solution: 'x = 4, y = 3', steps: ['Subtrahieren: 2x = 8 → x = 4.', '3y = 25 − 16 = 9 → y = 3.'] },
          { problem: 'Lösen Sie: x + 2y = 5, 3x + 4y = 13.', solution: 'x = 3, y = 1', steps: ['Erste · 2: 2x + 4y = 10; subtrahieren: x = 3.', '2y = 5 − 3 → y = 1.'] },
        ],
      },
    },

    // ───────── 5. Applications
    {
      slug: 'g9-linear-systems-applications',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '', cells: [alt('pula x', 'hens x', 'Hühner x'), alt('lopë y', 'cows y', 'Kühe y'), alt('gjithsej', 'total', 'gesamt')] },
          { head: alt('koka', 'heads', 'Köpfe'), cells: ['x', 'y', '20'] },
          { head: alt('këmbë', 'legs', 'Beine'), cells: ['2x', '4y', '56'] },
        ],
        caption: alt('Tabela jep sistemin: x + y = 20 dhe 2x + 4y = 56.', 'The table gives the system: x + y = 20 and 2x + 4y = 56.', 'Die Tabelle liefert das System: x + y = 20 und 2x + 4y = 56.'),
        alt: alt('Tabela e pulave dhe lopëve: koka x + y = 20, këmbë 2x + 4y = 56.', 'Table of hens and cows: heads x + y = 20, legs 2x + 4y = 56.', 'Tabelle Hühner und Kühe: Köpfe x + y = 20, Beine 2x + 4y = 56.'),
      }],
      answers: {
        examples: [[['20 - 8', 12], ['(56 - 40) / 2', 8]], [['(48 - 40) / 2', 4], ['10 - 4', 6]]],
        practice: [[['(50 + 14) / 2', 32], ['50 - 32', 18]], [['22 - 15', 7], ['15 - 7', 8]], [['(26 / 2 - 3) / 2', 5], ['5 + 3', 8]]],
      },
      al: {
        title: 'Zbatimet e sistemeve',
        objectives: ['Të shndërroni problema me dy të panjohura në sistem.', 'Të interpretoni zgjidhjen në kontekstin e problemit.'],
        theory: 'Hapat: (1) emërtoni dy të panjohurat (x, y) dhe shkruani çfarë janë; (2) shkruani dy ekuacione nga dy informacione të ndryshme të tekstit; (3) zgjidhni sistemin; (4) kontrolloni nëse përgjigjja ka kuptim (numra të plotë, pozitivë…).\n\nShembull: në fermë ka pula dhe lopë, 20 koka dhe 56 këmbë. x + y = 20 dhe 2x + 4y = 56. Nga i pari x = 20 − y; 40 − 2y + 4y = 56 → y = 8, x = 12.\n\nNjë tabelë me rreshta dhe kolona e bën më të lehtë shkrimin e ekuacioneve.',
        keyPoints: ['Dy të panjohura → dy ekuacione', 'Tabela ndihmon', 'Kontrolloni kuptimin e përgjigjes'],
        examples: [
          { example: 'Në një fermë ka pula dhe lopë: 20 koka dhe 56 këmbë. Sa ka nga secila?', solution: 'x + y = 20, 2x + 4y = 56 → 2y = 16 → y = 8 lopë, x = 12 pula.' },
          { example: 'Bileta për të rritur kushton 6 €, për fëmijë 4 €. 10 bileta kushtuan 48 €. Sa ishin për të rritur?', solution: 'a + f = 10, 6a + 4f = 48 → 6a + 40 − 4a = 48 → a = 4, f = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Shkruhet vetëm një ekuacion (p.sh. vetëm kokat).', fix: 'Me dy të panjohura duhen dy ekuacione nga informacione të ndryshme.' },
        ],
        practice: [
          { problem: 'Dy numra kanë shumë 50 dhe ndryshim 14. Gjeni ata.', solution: '32 dhe 18', steps: ['x + y = 50, x − y = 14 → 2x = 64.', 'x = 32, y = 18.'] },
          { problem: '15 monedha prej 2 € dhe 1 € kanë vlerë 22 €. Sa janë prej 2 €?', solution: '7 prej 2 € dhe 8 prej 1 €', steps: ['x + y = 15, 2x + y = 22 → x = 7.', 'y = 8.'] },
          { problem: 'Drejtëkëndëshi ka perimetër 26 cm; gjatësia është 3 cm më shumë se gjerësia. Gjeni brinjët.', solution: '5 cm dhe 8 cm', steps: ['2(a + b) = 26, a = b + 3 → 2b + 3 = 13.', 'b = 5, a = 8.'] },
        ],
      },
      en: {
        title: 'Applications of systems',
        objectives: ['Turn problems with two unknowns into a system.', 'Interpret the solution in the context of the problem.'],
        theory: 'Steps: (1) name the two unknowns (x, y) and write what they stand for; (2) write two equations from two different facts in the text; (3) solve the system; (4) check that the answer makes sense (whole numbers, positive…).\n\nExample: a farm has hens and cows, 20 heads and 56 legs. x + y = 20 and 2x + 4y = 56. From the first x = 20 − y; 40 − 2y + 4y = 56 → y = 8, x = 12.\n\nA table with rows and columns makes writing the equations easier.',
        keyPoints: ['Two unknowns → two equations', 'A table helps', 'Check that the answer makes sense'],
        examples: [
          { example: 'A farm has hens and cows: 20 heads and 56 legs. How many of each?', solution: 'x + y = 20, 2x + 4y = 56 → 2y = 16 → y = 8 cows, x = 12 hens.' },
          { example: 'An adult ticket costs €6, a child ticket €4. 10 tickets cost €48. How many were adult tickets?', solution: 'a + c = 10, 6a + 4c = 48 → 6a + 40 − 4a = 48 → a = 4, c = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Writing only one equation (e.g. only the heads).', fix: 'Two unknowns need two equations from different facts.' },
        ],
        practice: [
          { problem: 'Two numbers add up to 50 and differ by 14. Find them.', solution: '32 and 18', steps: ['x + y = 50, x − y = 14 → 2x = 64.', 'x = 32, y = 18.'] },
          { problem: '15 coins of €2 and €1 are worth €22. How many are €2 coins?', solution: '7 of €2 and 8 of €1', steps: ['x + y = 15, 2x + y = 22 → x = 7.', 'y = 8.'] },
          { problem: 'A rectangle has a perimeter of 26 cm; its length is 3 cm more than its width. Find the sides.', solution: '5 cm and 8 cm', steps: ['2(a + b) = 26, a = b + 3 → 2b + 3 = 13.', 'b = 5, a = 8.'] },
        ],
      },
      de: {
        title: 'Anwendungen von Gleichungssystemen',
        objectives: ['Sachaufgaben mit zwei Unbekannten als System aufstellen.', 'Die Lösung im Sachzusammenhang deuten.'],
        theory: 'Schritte: (1) die zwei Unbekannten (x, y) benennen und notieren, wofür sie stehen; (2) aus zwei verschiedenen Angaben des Textes zwei Gleichungen aufstellen; (3) das System lösen; (4) prüfen, ob das Ergebnis sinnvoll ist (ganzzahlig, positiv …).\n\nBeispiel: Auf einem Hof gibt es Hühner und Kühe, 20 Köpfe und 56 Beine. x + y = 20 und 2x + 4y = 56. Aus der ersten x = 20 − y; 40 − 2y + 4y = 56 → y = 8, x = 12.\n\nEine Tabelle mit Zeilen und Spalten erleichtert das Aufstellen der Gleichungen.',
        keyPoints: ['Zwei Unbekannte → zwei Gleichungen', 'Eine Tabelle hilft', 'Ergebnis auf Sinn prüfen'],
        examples: [
          { example: 'Auf einem Hof gibt es Hühner und Kühe: 20 Köpfe und 56 Beine. Wie viele von jeder Art?', solution: 'x + y = 20, 2x + 4y = 56 → 2y = 16 → y = 8 Kühe, x = 12 Hühner.' },
          { example: 'Eine Karte für Erwachsene kostet 6 €, für Kinder 4 €. 10 Karten kosteten 48 €. Wie viele waren für Erwachsene?', solution: 'e + k = 10, 6e + 4k = 48 → 6e + 40 − 4e = 48 → e = 4, k = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Nur eine Gleichung aufstellen (z. B. nur die Köpfe).', fix: 'Zwei Unbekannte brauchen zwei Gleichungen aus verschiedenen Angaben.' },
        ],
        practice: [
          { problem: 'Zwei Zahlen haben die Summe 50 und die Differenz 14. Bestimmen Sie sie.', solution: '32 und 18', steps: ['x + y = 50, x − y = 14 → 2x = 64.', 'x = 32, y = 18.'] },
          { problem: '15 Münzen zu 2 € und 1 € sind 22 € wert. Wie viele 2-€-Münzen sind es?', solution: '7 zu 2 € und 8 zu 1 €', steps: ['x + y = 15, 2x + y = 22 → x = 7.', 'y = 8.'] },
          { problem: 'Ein Rechteck hat 26 cm Umfang; die Länge ist 3 cm größer als die Breite. Bestimmen Sie die Seiten.', solution: '5 cm und 8 cm', steps: ['2(a + b) = 26, a = b + 3 → 2b + 3 = 13.', 'b = 5, a = 8.'] },
        ],
      },
    },
  ],
};
