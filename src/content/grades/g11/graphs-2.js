// Grade 11 · Theme 6: Graphs 2 (January–February)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g11-graphs-2',
  i18n: {
    al: { title: 'Grafikët 2', description: 'Funksionet kubike dhe y = k/x, rritja eksponenciale dhe grafikët trigonometrikë, pjerrësia e lakores, syprina nën grafik dhe ekuacioni i rrethit.' },
    en: { title: 'Graphs 2', description: 'Cubic and reciprocal graphs, exponential growth and trigonometric graphs, gradient of a curve, area under a graph and the equation of a circle.' },
    de: { title: 'Graphen 2', description: 'Kubische Funktionen und y = k/x, exponentielles Wachstum und trigonometrische Graphen, Steigung einer Kurve, Fläche unter einem Graphen und Kreisgleichung.' },
  },
  lessons: [
    // ───────── 1. Cubic and reciprocal graphs
    {
      slug: 'g11-graphs-2-cubic-reciprocal',
      visuals: [{
        type: 'functionPlot', view: { xMin: -5, xMax: 5, yMin: -8, yMax: 8 }, height: 240,
        functions: [
          { expr: 'x^3 - 3*x', domain: [-2.6, 2.6], label: 'y = x³ − 3x' },
          { expr: '4/x', domain: [0.5, 5], color: 'secondary', label: 'y = 4/x' },
          { expr: '4/x', domain: [-5, -0.5], color: 'secondary' },
        ],
        points: [{ at: [2, 2], label: '(2, 2)' }],
        caption: alt('Kubikja y = x³ − 3x ka formë S; hiperbola y = 4/x nuk i pret boshtet, afrohet pa fund pranë tyre.', 'The cubic y = x³ − 3x has an S shape; the hyperbola y = 4/x never meets the axes, it gets ever closer to them.', 'Die kubische Funktion y = x³ − 3x hat eine S-Form; die Hyperbel y = 4/x trifft die Achsen nie, sie nähert sich ihnen nur an.'),
        alt: alt('Grafikët e y = x³ − 3x dhe y = 4/x, që priten në (2, 2).', 'The graphs of y = x³ − 3x and y = 4/x, which meet at (2, 2).', 'Die Graphen von y = x³ − 3x und y = 4/x, die sich in (2 | 2) schneiden.'),
      }],
      answers: {
        examples: [[['2^3 - 3*2', 2]], [['12 / 3', 4], ['12 / (-4)', -3]]],
        practice: [[['2^3 - 4*2', 0, 0, '2'], ['(-2)^3 - 4*(-2)', 0, 0, '-2']], [['2 * 6', 12]], [['(-3)^3', -27]]],
      },
      al: {
        title: 'Funksionet kubike dhe y = k/x',
        objectives: ['Të njihni formën e grafikëve kubikë dhe të hiperbolës y = k/x.', 'Të llogaritni vlera dhe prerje me boshtet për këto funksione.'],
        theory: 'Funksioni kubik ka termin x³. Grafiku i y = x³ ngjitet nga e majta poshtë në të djathtë lart; y = x³ − 3x ka formë S me dy kthesa. Prerjet me boshtin x i gjejmë duke faktorizuar: x³ − 4x = x(x − 2)(x + 2).\n\nFunksioni y = k/x (përpjesëtim i zhdrejtë) ka grafik hiperbolë me dy degë. Ai nuk i pret boshtet: x ≠ 0 dhe y ≠ 0. Boshtet janë asimptota. Nga një pikë (x, y) gjejmë k = x · y.\n\nKujdes me shenjat: (−3)³ = −27, por (−3)² = 9.',
        keyPoints: ['Kubiku: forma S, faktorizo për prerjet', 'y = k/x: hiperbolë, k = x · y', 'Kubi i numrit negativ është negativ'],
        examples: [
          { example: 'Sa është y = x³ − 3x për x = 2?', solution: '2³ − 3 · 2 = 8 − 6 = 2.' },
          { example: 'Për y = 12/x gjeni y kur x = 3 dhe kur x = −4.', solution: '12/3 = 4; 12/(−4) = −3.' },
        ],
        commonMistakes: [
          { mistake: '(−3)³ = 27.', fix: 'Tre faktorë negativë japin numër negativ: −27.' },
          { mistake: 'Grafiku i y = k/x vizatohet duke prerë boshtin y.', fix: 'Për x = 0 funksioni nuk është i përcaktuar; grafiku vetëm afrohet te boshti.' },
        ],
        practice: [
          { problem: 'Ku e pret y = x³ − 4x boshtin x?', solution: 'x = 0, x = 2, x = −2', steps: ['x(x² − 4) = x(x − 2)(x + 2).', 'x = 0, 2 ose −2.'] },
          { problem: 'Hiperbola y = k/x kalon nëpër (2, 6). Sa është k?', solution: 'k = 12', steps: ['k = x · y.', '2 · 6 = 12.'] },
          { problem: 'Sa është y = x³ për x = −3?', solution: '−27', steps: ['(−3) · (−3) · (−3).', '= −27.'] },
        ],
      },
      en: {
        title: 'Cubic and reciprocal graphs',
        objectives: ['Know the shapes of cubic graphs and of the hyperbola y = k/x.', 'Work out values and axis crossings for these functions.'],
        theory: 'A cubic function has an x³ term. The graph of y = x³ rises from bottom left to top right; y = x³ − 3x has an S shape with two turns. Find the x-axis crossings by factorising: x³ − 4x = x(x − 2)(x + 2).\n\nThe function y = k/x (inverse proportion) has a hyperbola with two branches. It never meets the axes: x ≠ 0 and y ≠ 0. The axes are asymptotes. From a point (x, y) find k = x · y.\n\nWatch the signs: (−3)³ = −27, but (−3)² = 9.',
        keyPoints: ['Cubic: S shape, factorise for crossings', 'y = k/x: hyperbola, k = x · y', 'A negative number cubed is negative'],
        examples: [
          { example: 'What is y = x³ − 3x at x = 2?', solution: '2³ − 3 · 2 = 8 − 6 = 2.' },
          { example: 'For y = 12/x find y when x = 3 and when x = −4.', solution: '12/3 = 4; 12/(−4) = −3.' },
        ],
        commonMistakes: [
          { mistake: '(−3)³ = 27.', fix: 'Three negative factors give a negative number: −27.' },
          { mistake: 'The graph of y = k/x is drawn crossing the y-axis.', fix: 'At x = 0 the function is not defined; the graph only gets close to the axis.' },
        ],
        practice: [
          { problem: 'Where does y = x³ − 4x cross the x-axis?', solution: 'x = 0, x = 2, x = −2', steps: ['x(x² − 4) = x(x − 2)(x + 2).', 'x = 0, 2 or −2.'] },
          { problem: 'The hyperbola y = k/x passes through (2, 6). What is k?', solution: 'k = 12', steps: ['k = x · y.', '2 · 6 = 12.'] },
          { problem: 'What is y = x³ at x = −3?', solution: '−27', steps: ['(−3) · (−3) · (−3).', '= −27.'] },
        ],
      },
      de: {
        title: 'Kubische Funktionen und y = k/x',
        objectives: ['Die Form kubischer Graphen und der Hyperbel y = k/x kennen.', 'Funktionswerte und Achsenschnittpunkte dieser Funktionen bestimmen.'],
        theory: 'Eine kubische Funktion hat einen x³-Term. Der Graph von y = x³ steigt von links unten nach rechts oben; y = x³ − 3x hat eine S-Form mit zwei Wendungen. Die Nullstellen findet man durch Faktorisieren: x³ − 4x = x(x − 2)(x + 2).\n\nDie Funktion y = k/x (antiproportional) hat als Graph eine Hyperbel mit zwei Ästen. Sie schneidet die Achsen nie: x ≠ 0 und y ≠ 0. Die Achsen sind Asymptoten. Aus einem Punkt (x | y) erhält man k = x · y.\n\nAuf die Vorzeichen achten: (−3)³ = −27, aber (−3)² = 9.',
        keyPoints: ['Kubisch: S-Form, für Nullstellen faktorisieren', 'y = k/x: Hyperbel, k = x · y', 'Eine negative Zahl hoch 3 ist negativ'],
        examples: [
          { example: 'Wie groß ist y = x³ − 3x für x = 2?', solution: '2³ − 3 · 2 = 8 − 6 = 2.' },
          { example: 'Bestimmen Sie für y = 12/x den Wert y bei x = 3 und bei x = −4.', solution: '12/3 = 4; 12/(−4) = −3.' },
        ],
        commonMistakes: [
          { mistake: '(−3)³ = 27.', fix: 'Drei negative Faktoren ergeben eine negative Zahl: −27.' },
          { mistake: 'Der Graph von y = k/x wird durch die y-Achse gezeichnet.', fix: 'Für x = 0 ist die Funktion nicht definiert; der Graph nähert sich der Achse nur.' },
        ],
        practice: [
          { problem: 'Wo schneidet y = x³ − 4x die x-Achse?', solution: 'x = 0, x = 2, x = −2', steps: ['x(x² − 4) = x(x − 2)(x + 2).', 'x = 0, 2 oder −2.'] },
          { problem: 'Die Hyperbel y = k/x geht durch (2 | 6). Wie groß ist k?', solution: 'k = 12', steps: ['k = x · y.', '2 · 6 = 12.'] },
          { problem: 'Wie groß ist y = x³ für x = −3?', solution: '−27', steps: ['(−3) · (−3) · (−3).', '= −27.'] },
        ],
      },
    },
    // ───────── 2. Exponential and trigonometric graphs
    {
      slug: 'g11-graphs-2-exponential-trig',
      practiceVisuals: {
        2: { type: 'unitCircle', angle: 30, marks: [30, 150], alt: { al: 'Rrethi njësi me një kënd që ndryshon me rrëshqitës; tregohen sin, cos dhe tg.', en: 'The unit circle with an angle on a slider; sin, cos and tan are shown.', de: 'Der Einheitskreis mit einem Winkel als Schieberegler; sin, cos und tan werden angezeigt.' } },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -3, xMax: 3, yMin: 0, yMax: 8 }, height: 220,
        functions: [{ expr: '2^x', label: 'y = 2ˣ' }, { expr: '0.5^x', label: alt('y = 0,5ˣ', 'y = 0.5ˣ', 'y = 0,5ˣ'), color: 'secondary' }],
        points: [{ at: [0, 1], label: '(0, 1)' }],
        caption: alt('y = 2ˣ rritet (dyfishohet me çdo hap), y = 0,5ˣ zvogëlohet; të dyja kalojnë nëpër (0, 1).', 'y = 2ˣ grows (doubles with each step), y = 0.5ˣ decays; both pass through (0, 1).', 'y = 2ˣ wächst (verdoppelt sich mit jedem Schritt), y = 0,5ˣ nimmt ab; beide gehen durch (0 | 1).'),
        alt: alt('Grafikët e y = 2ˣ dhe y = 0,5ˣ që priten në (0, 1).', 'The graphs of y = 2ˣ and y = 0.5ˣ crossing at (0, 1).', 'Die Graphen von y = 2ˣ und y = 0,5ˣ, die sich in (0 | 1) schneiden.'),
      }],
      answers: {
        examples: [[['2000 * 1.1^3', 2662]], [['sin(150 deg)', 0.5]]],
        practice: [[['5000 * 0.8^2', 3200]], [['3 * 2^4', 48]], [['asin(0.5) / pi * 180', 30], ['180 - 30', 150]]],
      },
      al: {
        title: 'Funksionet eksponenciale dhe trigonometrike',
        objectives: ['Të përdorni y = a · bˣ për rritje dhe zvogëlim në përqindje.', 'Të njihni grafikët e y = sin x dhe y = cos x dhe vetitë e tyre.'],
        theory: 'Funksioni eksponencial y = a · bˣ: a është vlera fillestare, b shumëzuesi për çdo hap. Rritje 10% në vit → b = 1,1; ulje 20% → b = 0,8. Popullsia 2 000 pas 3 vjetësh me +10%: 2 000 · 1,1³ = 2 662.\n\nGrafikët y = sin x dhe y = cos x janë valë që përsëriten çdo 360° (perioda) dhe lëvizin midis −1 dhe 1. sin 0° = 0, sin 90° = 1; cos 0° = 1.\n\nSimetria e sinusit: sin(180° − x) = sin x. Prandaj sin x = 0,5 në intervalin 0°–360° ka dy zgjidhje: 30° dhe 150°.',
        keyPoints: ['y = a · bˣ; b = 1 + p/100 ose 1 − p/100', 'sin, cos: perioda 360°, vlerat nga −1 deri 1', 'sin(180° − x) = sin x'],
        examples: [
          { example: 'Një popullsi 2 000 rritet 10% në vit. Sa është pas 3 vjetësh?', solution: '2 000 · 1,1³ = 2 662.' },
          { example: 'Duke ditur sin 30° = 0,5, sa është sin 150°?', solution: 'sin 150° = sin(180° − 30°) = 0,5.' },
        ],
        commonMistakes: [
          { mistake: 'Pas 3 vjetësh me +10% llogaritet 2 000 · 1,3.', fix: 'Përqindja zbatohet çdo vit mbi vlerën e re: 1,1³ ≈ 1,331.' },
          { mistake: 'Te sin x = 0,5 jepet vetëm x = 30°.', fix: 'Në 0°–360° ka edhe 180° − 30° = 150°.' },
        ],
        practice: [
          { problem: 'Një makinë 5 000 € humb 20% të vlerës në vit. Sa vlen pas 2 vjetësh?', solution: '3 200 €', steps: ['b = 0,8.', '5 000 · 0,8² = 3 200 €.'] },
          { problem: 'Sa është y = 3 · 2ˣ për x = 4?', solution: '48', steps: ['2⁴ = 16.', '3 · 16 = 48.'] },
          { problem: 'Zgjidhni sin x = 0,5 për 0° ≤ x ≤ 360°.', solution: 'x = 30° ose x = 150°', steps: ['Nga makina: x = 30°.', 'Simetria: 180° − 30° = 150°.'] },
        ],
      },
      en: {
        title: 'Exponential and trigonometric functions',
        objectives: ['Use y = a · bˣ for percentage growth and decay.', 'Know the graphs of y = sin x and y = cos x and their properties.'],
        theory: 'The exponential function y = a · bˣ: a is the starting value, b the multiplier for each step. A rise of 10% a year → b = 1.1; a fall of 20% → b = 0.8. A population of 2 000 after 3 years at +10%: 2 000 · 1.1³ = 2 662.\n\nThe graphs y = sin x and y = cos x are waves that repeat every 360° (the period) and move between −1 and 1. sin 0° = 0, sin 90° = 1; cos 0° = 1.\n\nSymmetry of sine: sin(180° − x) = sin x. So sin x = 0.5 has two solutions between 0° and 360°: 30° and 150°.',
        keyPoints: ['y = a · bˣ; b = 1 + p/100 or 1 − p/100', 'sin, cos: period 360°, values from −1 to 1', 'sin(180° − x) = sin x'],
        examples: [
          { example: 'A population of 2 000 grows by 10% a year. What is it after 3 years?', solution: '2 000 · 1.1³ = 2 662.' },
          { example: 'Given sin 30° = 0.5, what is sin 150°?', solution: 'sin 150° = sin(180° − 30°) = 0.5.' },
        ],
        commonMistakes: [
          { mistake: 'After 3 years at +10%, 2 000 · 1.3 is worked out.', fix: 'The percentage is applied each year to the new value: 1.1³ ≈ 1.331.' },
          { mistake: 'For sin x = 0.5 only x = 30° is given.', fix: 'Between 0° and 360° there is also 180° − 30° = 150°.' },
        ],
        practice: [
          { problem: 'A €5 000 car loses 20% of its value each year. What is it worth after 2 years?', solution: '€3 200', steps: ['b = 0.8.', '5 000 · 0.8² = €3 200.'] },
          { problem: 'What is y = 3 · 2ˣ at x = 4?', solution: '48', steps: ['2⁴ = 16.', '3 · 16 = 48.'] },
          { problem: 'Solve sin x = 0.5 for 0° ≤ x ≤ 360°.', solution: 'x = 30° or x = 150°', steps: ['Calculator: x = 30°.', 'Symmetry: 180° − 30° = 150°.'] },
        ],
      },
      de: {
        title: 'Exponential- und trigonometrische Funktionen',
        objectives: ['y = a · bˣ für prozentuales Wachstum und prozentuale Abnahme verwenden.', 'Die Graphen von y = sin x und y = cos x und ihre Eigenschaften kennen.'],
        theory: 'Die Exponentialfunktion y = a · bˣ: a ist der Anfangswert, b der Wachstumsfaktor pro Schritt. Zunahme um 10 % pro Jahr → b = 1,1; Abnahme um 20 % → b = 0,8. Eine Population von 2 000 nach 3 Jahren mit +10 %: 2 000 · 1,1³ = 2 662.\n\nDie Graphen y = sin x und y = cos x sind Wellen, die sich alle 360° wiederholen (Periode) und zwischen −1 und 1 liegen. sin 0° = 0, sin 90° = 1; cos 0° = 1.\n\nSymmetrie des Sinus: sin(180° − x) = sin x. Deshalb hat sin x = 0,5 zwischen 0° und 360° zwei Lösungen: 30° und 150°.',
        keyPoints: ['y = a · bˣ; b = 1 + p/100 oder 1 − p/100', 'sin, cos: Periode 360°, Werte von −1 bis 1', 'sin(180° − x) = sin x'],
        examples: [
          { example: 'Eine Population von 2 000 wächst jährlich um 10 %. Wie groß ist sie nach 3 Jahren?', solution: '2 000 · 1,1³ = 2 662.' },
          { example: 'Es gilt sin 30° = 0,5. Wie groß ist sin 150°?', solution: 'sin 150° = sin(180° − 30°) = 0,5.' },
        ],
        commonMistakes: [
          { mistake: 'Nach 3 Jahren mit +10 % wird 2 000 · 1,3 gerechnet.', fix: 'Der Prozentsatz wirkt jedes Jahr auf den neuen Wert: 1,1³ ≈ 1,331.' },
          { mistake: 'Bei sin x = 0,5 wird nur x = 30° angegeben.', fix: 'Zwischen 0° und 360° gibt es auch 180° − 30° = 150°.' },
        ],
        practice: [
          { problem: 'Ein Auto für 5 000 € verliert jährlich 20 % an Wert. Wie viel ist es nach 2 Jahren wert?', solution: '3 200 €', steps: ['b = 0,8.', '5 000 · 0,8² = 3 200 €.'] },
          { problem: 'Wie groß ist y = 3 · 2ˣ für x = 4?', solution: '48', steps: ['2⁴ = 16.', '3 · 16 = 48.'] },
          { problem: 'Lösen Sie sin x = 0,5 für 0° ≤ x ≤ 360°.', solution: 'x = 30° oder x = 150°', steps: ['Taschenrechner: x = 30°.', 'Symmetrie: 180° − 30° = 150°.'] },
        ],
      },
    },
    // ───────── 3. Gradient of a curve
    {
      slug: 'g11-graphs-2-gradient',
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 4, yMin: -2, yMax: 10 }, height: 230,
        functions: [{ expr: 'x^2', label: 'y = x²' }, { expr: '4*x - 4', color: 'secondary', dashed: true, label: alt('tangjentja', 'tangent', 'Tangente') }],
        points: [{ at: [2, 4], label: '(2, 4)' }, { at: [3, 8], label: '(3, 8)' }],
        caption: alt('Tangjentja në (2, 4) kalon edhe nëpër (3, 8): pjerrësia e lakores në x = 2 është 4.', 'The tangent at (2, 4) also passes through (3, 8): the gradient of the curve at x = 2 is 4.', 'Die Tangente in (2 | 4) geht auch durch (3 | 8): Die Steigung der Kurve bei x = 2 ist 4.'),
        alt: alt('Parabola y = x² me tangjenten e ndërprerë në pikën (2, 4).', 'The parabola y = x² with a dashed tangent at the point (2, 4).', 'Die Parabel y = x² mit gestrichelter Tangente im Punkt (2 | 4).'),
      }],
      answers: {
        examples: [[['(9 - 1) / (3 - 1)', 4]], [['(8 - 4) / (3 - 2)', 4]]],
        practice: [[['(4 - 0) / (2 - 0)', 2]], [['(30 - 10) / (4 - 2)', 10]], [['(80 - 120) / 5', -8]]],
      },
      al: {
        title: 'Koeficienti këndor i lakores',
        objectives: ['Të llogaritni shpejtësinë mesatare të ndryshimit midis dy pikave të lakores.', 'Të vlerësoni pjerrësinë e lakores në një pikë me tangjenten.'],
        theory: 'Te një drejtëz pjerrësia është kudo e njëjtë; te një lakore ajo ndryshon nga pika në pikë.\n\nShpejtësia mesatare e ndryshimit midis dy pikave është pjerrësia e kordës: për y = x² nga x = 1 te x = 3: (9 − 1)/(3 − 1) = 4.\n\nPjerrësia në një pikë është pjerrësia e tangjentes: vizatojmë drejtëzën që e prek lakoren vetëm në atë pikë, lexojmë dy pika të saj dhe llogarisim Δy/Δx. Te grafiku largësi-kohë kjo jep shpejtësinë në atë çast. Pjerrësi negative do të thotë që madhësia zvogëlohet.',
        keyPoints: ['Korda: ndryshimi mesatar', 'Tangjentja: pjerrësia në një pikë', 'Pjerrësia = Δy/Δx (mund të jetë negative)'],
        examples: [
          { example: 'Sa është shpejtësia mesatare e ndryshimit të y = x² nga x = 1 te x = 3?', solution: '(9 − 1)/(3 − 1) = 8/2 = 4.' },
          { example: 'Tangjentja te y = x² në (2, 4) kalon nëpër (3, 8). Sa është pjerrësia në x = 2?', solution: '(8 − 4)/(3 − 2) = 4.' },
        ],
        commonMistakes: [
          { mistake: 'Për pjerrësinë në një pikë përdoret korda midis dy pikave të largëta.', fix: 'Duhet tangjentja në atë pikë; korda jep vetëm mesataren.' },
          { mistake: 'Kur lakorja zbret, pjerrësia shkruhet pozitive.', fix: 'Δy është negativ, pra edhe pjerrësia është negative.' },
        ],
        practice: [
          { problem: 'Sa është shpejtësia mesatare e ndryshimit të y = x² nga x = 0 te x = 2?', solution: '2', steps: ['y(0) = 0, y(2) = 4.', '(4 − 0)/(2 − 0) = 2.'] },
          { problem: 'Te grafiku largësi-kohë tangjentja në t = 2 s kalon nëpër (2, 10) dhe (4, 30). Sa është shpejtësia në t = 2 s?', solution: '10 m/s', steps: ['Δy = 30 − 10 = 20, Δx = 4 − 2 = 2.', '20/2 = 10 m/s.'] },
          { problem: 'Niveli i ujit bie nga 120 cm në 80 cm për 5 orë. Sa është shpejtësia mesatare e ndryshimit?', solution: '−8 cm/h', steps: ['(80 − 120)/5.', '= −40/5 = −8 cm/h.'] },
        ],
      },
      en: {
        title: 'Gradient of a curve',
        objectives: ['Work out the average rate of change between two points on a curve.', 'Estimate the gradient of a curve at a point using a tangent.'],
        theory: 'On a straight line the gradient is the same everywhere; on a curve it changes from point to point.\n\nThe average rate of change between two points is the gradient of the chord: for y = x² from x = 1 to x = 3: (9 − 1)/(3 − 1) = 4.\n\nThe gradient at a point is the gradient of the tangent: draw the line that just touches the curve at that point, read two points on it and work out Δy/Δx. On a distance–time graph this gives the speed at that moment. A negative gradient means the quantity is going down.',
        keyPoints: ['Chord: average rate of change', 'Tangent: gradient at a point', 'Gradient = Δy/Δx (can be negative)'],
        examples: [
          { example: 'What is the average rate of change of y = x² from x = 1 to x = 3?', solution: '(9 − 1)/(3 − 1) = 8/2 = 4.' },
          { example: 'The tangent to y = x² at (2, 4) passes through (3, 8). What is the gradient at x = 2?', solution: '(8 − 4)/(3 − 2) = 4.' },
        ],
        commonMistakes: [
          { mistake: 'For the gradient at a point, a chord between two far-apart points is used.', fix: 'Use the tangent at that point; a chord only gives the average.' },
          { mistake: 'When the curve goes down, the gradient is written as positive.', fix: 'Δy is negative, so the gradient is negative too.' },
        ],
        practice: [
          { problem: 'What is the average rate of change of y = x² from x = 0 to x = 2?', solution: '2', steps: ['y(0) = 0, y(2) = 4.', '(4 − 0)/(2 − 0) = 2.'] },
          { problem: 'On a distance–time graph the tangent at t = 2 s passes through (2, 10) and (4, 30). What is the speed at t = 2 s?', solution: '10 m/s', steps: ['Δy = 30 − 10 = 20, Δx = 4 − 2 = 2.', '20/2 = 10 m/s.'] },
          { problem: 'A water level falls from 120 cm to 80 cm in 5 hours. What is the average rate of change?', solution: '−8 cm/h', steps: ['(80 − 120)/5.', '= −40/5 = −8 cm/h.'] },
        ],
      },
      de: {
        title: 'Steigung einer Kurve',
        objectives: ['Die mittlere Änderungsrate zwischen zwei Punkten einer Kurve berechnen.', 'Die Steigung einer Kurve in einem Punkt mit einer Tangente schätzen.'],
        theory: 'Bei einer Geraden ist die Steigung überall gleich, bei einer Kurve ändert sie sich von Punkt zu Punkt.\n\nDie mittlere Änderungsrate zwischen zwei Punkten ist die Steigung der Sekante: für y = x² von x = 1 bis x = 3: (9 − 1)/(3 − 1) = 4.\n\nDie Steigung in einem Punkt ist die Steigung der Tangente: Man zeichnet die Gerade, die die Kurve dort nur berührt, liest zwei ihrer Punkte ab und berechnet Δy/Δx. Im Weg-Zeit-Diagramm ergibt das die Momentangeschwindigkeit. Eine negative Steigung bedeutet, dass die Größe abnimmt.',
        keyPoints: ['Sekante: mittlere Änderungsrate', 'Tangente: Steigung in einem Punkt', 'Steigung = Δy/Δx (kann negativ sein)'],
        examples: [
          { example: 'Wie groß ist die mittlere Änderungsrate von y = x² von x = 1 bis x = 3?', solution: '(9 − 1)/(3 − 1) = 8/2 = 4.' },
          { example: 'Die Tangente an y = x² in (2 | 4) geht durch (3 | 8). Wie groß ist die Steigung bei x = 2?', solution: '(8 − 4)/(3 − 2) = 4.' },
        ],
        commonMistakes: [
          { mistake: 'Für die Steigung in einem Punkt wird eine Sekante zwischen weit entfernten Punkten verwendet.', fix: 'Man braucht die Tangente in diesem Punkt; die Sekante liefert nur den Mittelwert.' },
          { mistake: 'Fällt die Kurve, wird die Steigung positiv angegeben.', fix: 'Δy ist negativ, also auch die Steigung.' },
        ],
        practice: [
          { problem: 'Wie groß ist die mittlere Änderungsrate von y = x² von x = 0 bis x = 2?', solution: '2', steps: ['y(0) = 0, y(2) = 4.', '(4 − 0)/(2 − 0) = 2.'] },
          { problem: 'Im Weg-Zeit-Diagramm geht die Tangente bei t = 2 s durch (2 | 10) und (4 | 30). Wie groß ist die Geschwindigkeit bei t = 2 s?', solution: '10 m/s', steps: ['Δy = 30 − 10 = 20, Δx = 4 − 2 = 2.', '20/2 = 10 m/s.'] },
          { problem: 'Ein Wasserstand sinkt in 5 Stunden von 120 cm auf 80 cm. Wie groß ist die mittlere Änderungsrate?', solution: '−8 cm/h', steps: ['(80 − 120)/5.', '= −40/5 = −8 cm/h.'] },
        ],
      },
    },
    // ───────── 4. Area under a graph
    {
      slug: 'g11-graphs-2-area-under-graph',
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 15, yMin: 0, yMax: 12 }, height: 210,
        functions: [
          { expr: '2.5*x', domain: [0, 4] },
          { expr: '10 + 0*x', domain: [4, 10] },
          { expr: '10 - 2.5*(x - 10)', domain: [10, 14] },
        ],
        points: [{ at: [4, 10], label: '(4, 10)' }, { at: [10, 10], label: '(10, 10)' }, { at: [14, 0], label: '(14, 0)' }],
        caption: alt('Shpejtësia (m/s) sipas kohës (s). Rruga = syprina: 20 + 60 + 20 = 100 m.', 'Speed (m/s) against time (s). Distance = area: 20 + 60 + 20 = 100 m.', 'Geschwindigkeit (m/s) über der Zeit (s). Weg = Fläche: 20 + 60 + 20 = 100 m.'),
        alt: alt('Grafik shpejtësi-kohë në formë trapezi: rritje deri 10 m/s në 4 s, konstante deri 10 s, rënie në 0 te 14 s.', 'A trapezium-shaped speed–time graph: up to 10 m/s at 4 s, constant until 10 s, down to 0 at 14 s.', 'Trapezförmiges Geschwindigkeit-Zeit-Diagramm: Anstieg auf 10 m/s bei 4 s, konstant bis 10 s, Abfall auf 0 bei 14 s.'),
      }],
      answers: {
        examples: [[['0.5*4*10 + 6*10 + 0.5*4*10', 100]], [['0.5*(0 + 1) + 0.5*(1 + 4)', 3]]],
        practice: [[['0.5 * (5 + 15) * 4', 40]], [['100 / 14', 7.14, 0.005]], [['0.25 * (0 + 2*(0.25 + 1 + 2.25) + 4)', 2.75]]],
      },
      al: {
        title: 'Syprina nën grafik',
        objectives: ['Të llogaritni syprinën nën grafikë të përbërë nga segmente duke e ndarë në trekëndësha, drejtkëndësha dhe trapezë.', 'Të vlerësoni syprinën nën një lakore me rregullën e trapezit.'],
        theory: 'Te grafiku shpejtësi-kohë, syprina nën grafik është rruga e kaluar. Kur grafiku përbëhet nga segmente, e ndajmë syprinën në figura të njohura: 1/2 · 4 · 10 + 6 · 10 + 1/2 · 4 · 10 = 100 m.\n\nNën një lakore syprinën e vlerësojmë me trapezë me gjerësi h: S ≈ h/2 · (y₀ + 2y₁ + 2y₂ + … + yₙ).\nPër y = x² nga 0 te 2 me h = 1: 1/2 · (0 + 2 · 1 + 4) = 3. Sa më shumë trapezë, aq më i saktë vlerësimi.\n\nNëse lakorja është e përkulur lart, trapezët e mbivlerësojnë syprinën.',
        keyPoints: ['Shpejtësi-kohë: syprina = rruga', 'Ndani në trekëndësha, drejtkëndësha, trapezë', 'Trapezët: h/2 · (y₀ + 2y₁ + … + yₙ)'],
        examples: [
          { example: 'Shpejtësia rritet nga 0 në 10 m/s për 4 s, mbetet 10 m/s deri në 10 s dhe bie në 0 te 14 s. Sa është rruga?', solution: '1/2 · 4 · 10 + 6 · 10 + 1/2 · 4 · 10 = 20 + 60 + 20 = 100 m.' },
          { example: 'Vlerësoni syprinën nën y = x² nga x = 0 te x = 2 me dy trapezë.', solution: '1/2 · (0 + 1) + 1/2 · (1 + 4) = 0,5 + 2,5 = 3.' },
        ],
        commonMistakes: [
          { mistake: 'Rruga lexohet nga vlera më e lartë e grafikut.', fix: 'Rruga është syprina, jo lartësia.' },
          { mistake: 'Vlerësimi me trapezë merret si vlera e saktë.', fix: 'Është përafrim; te lakoret e përkulura lart del pak më i madh.' },
        ],
        practice: [
          { problem: 'Shpejtësia rritet njëtrajtësisht nga 5 m/s në 15 m/s për 4 s. Sa është rruga?', solution: '40 m', steps: ['Trapez: 1/2 · (5 + 15) · 4.', '= 40 m.'] },
          { problem: 'Sa është shpejtësia mesatare për 100 m në 14 s (2 dhjetore)?', solution: '≈ 7,14 m/s', steps: ['100 : 14.', '≈ 7,14 m/s.'] },
          { problem: 'Vlerësoni syprinën nën y = x² nga 0 te 2 me katër trapezë (h = 0,5).', solution: '2,75', steps: ['y: 0; 0,25; 1; 2,25; 4.', '0,25 · (0 + 2 · 3,5 + 4) = 2,75.'] },
        ],
      },
      en: {
        title: 'Area under a graph',
        objectives: ['Work out the area under a graph made of straight segments by splitting it into triangles, rectangles and trapezia.', 'Estimate the area under a curve with the trapezium rule.'],
        theory: 'On a speed–time graph, the area under the graph is the distance travelled. When the graph is made of straight segments, split the area into familiar shapes: 1/2 · 4 · 10 + 6 · 10 + 1/2 · 4 · 10 = 100 m.\n\nUnder a curve, estimate the area with trapezia of width h: A ≈ h/2 · (y₀ + 2y₁ + 2y₂ + … + yₙ).\nFor y = x² from 0 to 2 with h = 1: 1/2 · (0 + 2 · 1 + 4) = 3. The more trapezia, the better the estimate.\n\nIf the curve bends upwards, the trapezia overestimate the area.',
        keyPoints: ['Speed–time: area = distance', 'Split into triangles, rectangles, trapezia', 'Trapezia: h/2 · (y₀ + 2y₁ + … + yₙ)'],
        examples: [
          { example: 'The speed rises from 0 to 10 m/s in 4 s, stays at 10 m/s until 10 s and falls to 0 at 14 s. What is the distance?', solution: '1/2 · 4 · 10 + 6 · 10 + 1/2 · 4 · 10 = 20 + 60 + 20 = 100 m.' },
          { example: 'Estimate the area under y = x² from x = 0 to x = 2 with two trapezia.', solution: '1/2 · (0 + 1) + 1/2 · (1 + 4) = 0.5 + 2.5 = 3.' },
        ],
        commonMistakes: [
          { mistake: 'The distance is read from the highest value of the graph.', fix: 'The distance is the area, not the height.' },
          { mistake: 'The trapezium estimate is taken as the exact value.', fix: 'It is an estimate; for curves bending upwards it is a little too big.' },
        ],
        practice: [
          { problem: 'The speed rises steadily from 5 m/s to 15 m/s in 4 s. What is the distance?', solution: '40 m', steps: ['Trapezium: 1/2 · (5 + 15) · 4.', '= 40 m.'] },
          { problem: 'What is the average speed for 100 m in 14 s (2 d.p.)?', solution: '≈ 7.14 m/s', steps: ['100 ÷ 14.', '≈ 7.14 m/s.'] },
          { problem: 'Estimate the area under y = x² from 0 to 2 with four trapezia (h = 0.5).', solution: '2.75', steps: ['y: 0; 0.25; 1; 2.25; 4.', '0.25 · (0 + 2 · 3.5 + 4) = 2.75.'] },
        ],
      },
      de: {
        title: 'Fläche unter einem Graphen',
        objectives: ['Die Fläche unter einem Graphen aus Strecken durch Zerlegen in Dreiecke, Rechtecke und Trapeze berechnen.', 'Die Fläche unter einer Kurve mit der Trapezregel schätzen.'],
        theory: 'Im Geschwindigkeit-Zeit-Diagramm ist die Fläche unter dem Graphen der zurückgelegte Weg. Besteht der Graph aus Strecken, zerlegt man die Fläche in bekannte Figuren: 1/2 · 4 · 10 + 6 · 10 + 1/2 · 4 · 10 = 100 m.\n\nUnter einer Kurve schätzt man die Fläche mit Trapezen der Breite h: A ≈ h/2 · (y₀ + 2y₁ + 2y₂ + … + yₙ).\nFür y = x² von 0 bis 2 mit h = 1: 1/2 · (0 + 2 · 1 + 4) = 3. Je mehr Trapeze, desto besser die Schätzung.\n\nIst die Kurve nach oben gekrümmt, überschätzen die Trapeze die Fläche.',
        keyPoints: ['Geschwindigkeit-Zeit: Fläche = Weg', 'In Dreiecke, Rechtecke, Trapeze zerlegen', 'Trapeze: h/2 · (y₀ + 2y₁ + … + yₙ)'],
        examples: [
          { example: 'Die Geschwindigkeit steigt in 4 s von 0 auf 10 m/s, bleibt bis 10 s bei 10 m/s und fällt bis 14 s auf 0. Wie groß ist der Weg?', solution: '1/2 · 4 · 10 + 6 · 10 + 1/2 · 4 · 10 = 20 + 60 + 20 = 100 m.' },
          { example: 'Schätzen Sie die Fläche unter y = x² von x = 0 bis x = 2 mit zwei Trapezen.', solution: '1/2 · (0 + 1) + 1/2 · (1 + 4) = 0,5 + 2,5 = 3.' },
        ],
        commonMistakes: [
          { mistake: 'Der Weg wird am höchsten Wert des Graphen abgelesen.', fix: 'Der Weg ist die Fläche, nicht die Höhe.' },
          { mistake: 'Die Trapezschätzung wird als exakter Wert genommen.', fix: 'Sie ist ein Näherungswert; bei nach oben gekrümmten Kurven etwas zu groß.' },
        ],
        practice: [
          { problem: 'Die Geschwindigkeit steigt in 4 s gleichmäßig von 5 m/s auf 15 m/s. Wie groß ist der Weg?', solution: '40 m', steps: ['Trapez: 1/2 · (5 + 15) · 4.', '= 40 m.'] },
          { problem: 'Wie groß ist die Durchschnittsgeschwindigkeit für 100 m in 14 s (2 Dezimalstellen)?', solution: '≈ 7,14 m/s', steps: ['100 : 14.', '≈ 7,14 m/s.'] },
          { problem: 'Schätzen Sie die Fläche unter y = x² von 0 bis 2 mit vier Trapezen (h = 0,5).', solution: '2,75', steps: ['y: 0; 0,25; 1; 2,25; 4.', '0,25 · (0 + 2 · 3,5 + 4) = 2,75.'] },
        ],
      },
    },
    // ───────── 5. Equation of a circle
    {
      slug: 'g11-graphs-2-circle-equation',
      practiceVisuals: {
        1: {
        type: 'functionPlot', equal: true, view: { xMin: -9, xMax: 9, yMin: -9, yMax: 9 },
        curves: [{ x: 'a + r*cos(t)', y: 'b + r*sin(t)' }],
        points: [{ at: ['a', 'b'], label: 'S({a}, {b})', color: 'secondary' }],
        segments: [{ from: ['a', 'b'], to: ['a + r', 'b'], color: 'secondary', label: 'r = {r}' }],
        sliders: [{ name: 'a', min: -5, max: 5, step: 1, value: 2 }, { name: 'b', min: -5, max: 5, step: 1, value: -1 }, { name: 'r', min: 1, max: 6, step: 0.5, value: 3 }],
        readouts: [{ text: { al: '(x − a)² + (y − b)² = r²: qendra ({a}, {b}), r² = {r^2}.', en: '(x − a)² + (y − b)² = r²: centre ({a}, {b}), r² = {r^2}.', de: '(x − a)² + (y − b)² = r²: Mittelpunkt ({a} | {b}), r² = {r^2}.' } }],
        alt: { al: 'Rreth me qendër (a, b) dhe rreze r me rrëshqitës.', en: 'A circle with centre (a, b) and radius r on sliders.', de: 'Ein Kreis mit Mittelpunkt (a, b) und Radius r als Schieberegler.' },
      },
      },
      visuals: [{
        type: 'geoFigure', view: { xMin: -6, xMax: 6, yMin: -6, yMax: 6 }, grid: true, axes: true, height: 250,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 5, color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [3, 4], color: 'secondary', label: 'r = 5' },
          { kind: 'segment', from: [3, 0], to: [3, 4], color: 'muted', dashed: true },
          { kind: 'point', at: [3, 4], label: '(3, 4)', labelPos: 'ne', color: 'secondary' },
        ],
        caption: alt('Pika (3, 4) është në rrethin x² + y² = 25, sepse 3² + 4² = 25.', 'The point (3, 4) is on the circle x² + y² = 25, because 3² + 4² = 25.', 'Der Punkt (3 | 4) liegt auf dem Kreis x² + y² = 25, denn 3² + 4² = 25.'),
        alt: alt('Rrethi me qendër në origjinë dhe rreze 5 në rrjetë koordinative, me pikën (3, 4).', 'A circle centred at the origin with radius 5 on a grid, with the point (3, 4).', 'Ein Kreis um den Ursprung mit Radius 5 im Koordinatengitter, mit dem Punkt (3 | 4).'),
      }],
      answers: {
        examples: [[['sqrt(25)', 5]], [['3^2 + 4^2', 25]]],
        practice: [[['6^2', 36]], [['sqrt(9)', 3]], [['sqrt(25 - 3^2)', 4]]],
      },
      al: {
        title: 'Ekuacioni i rrethit',
        objectives: ['Të shkruani dhe të lexoni ekuacionin e rrethit me qendër në origjinë dhe në pikën (a, b).', 'Të kontrolloni nëse një pikë është në rreth dhe të gjeni prerjet me një drejtëz.'],
        theory: 'Pika (x, y) është në rrethin me qendër O(0, 0) dhe rreze r kur largësia e saj nga O është r. Nga Pitagora: x² + y² = r².\nx² + y² = 25 → qendra (0, 0), r = √25 = 5.\n\nRrethi me qendër (a, b): (x − a)² + (y − b)² = r². Kujdes me shenjat: (x − 2)² + (y + 1)² = 9 ka qendrën (2, −1) dhe r = 3.\n\nPër prerjen me drejtëzën y = 3 vendosim y = 3: x² + 9 = 25 → x = ±4.',
        keyPoints: ['Qendra (0, 0): x² + y² = r²', 'Qendra (a, b): (x − a)² + (y − b)² = r²', 'Rrezja = √(ana e djathtë)'],
        examples: [
          { example: 'Gjeni qendrën dhe rrezen e x² + y² = 25.', solution: 'Qendra (0, 0), r = √25 = 5.' },
          { example: 'A ndodhet pika (3, 4) në rrethin x² + y² = 25?', solution: 'Po: 3² + 4² = 9 + 16 = 25.' },
        ],
        commonMistakes: [
          { mistake: 'Te x² + y² = 25 rrezja merret 25.', fix: 'Ana e djathtë është r²: r = √25 = 5.' },
          { mistake: '(x − 2)² + (y + 1)² = 9 ka qendrën (−2, 1).', fix: 'Shenjat ndryshojnë: qendra është (2, −1).' },
        ],
        practice: [
          { problem: 'Shkruani ekuacionin e rrethit me qendër në origjinë dhe rreze 6.', solution: 'x² + y² = 36', steps: ['r² = 6².', 'x² + y² = 36.'] },
          { problem: 'Gjeni qendrën dhe rrezen e (x − 2)² + (y + 1)² = 9.', solution: 'qendra (2, −1), r = 3', steps: ['a = 2, b = −1.', 'r = √9 = 3.'] },
          { problem: 'Ku e pret drejtëza y = 3 rrethin x² + y² = 25?', solution: 'në (4, 3) dhe (−4, 3)', steps: ['x² + 9 = 25 → x² = 16.', 'x = 4 ose x = −4.'] },
        ],
      },
      en: {
        title: 'The equation of a circle',
        objectives: ['Write and read the equation of a circle centred at the origin and at (a, b).', 'Check whether a point lies on a circle and find where a line meets it.'],
        theory: 'The point (x, y) is on the circle with centre O(0, 0) and radius r when its distance from O is r. By Pythagoras: x² + y² = r².\nx² + y² = 25 → centre (0, 0), r = √25 = 5.\n\nA circle with centre (a, b): (x − a)² + (y − b)² = r². Watch the signs: (x − 2)² + (y + 1)² = 9 has centre (2, −1) and r = 3.\n\nTo find where it meets the line y = 3, put y = 3: x² + 9 = 25 → x = ±4.',
        keyPoints: ['Centre (0, 0): x² + y² = r²', 'Centre (a, b): (x − a)² + (y − b)² = r²', 'Radius = √(right-hand side)'],
        examples: [
          { example: 'Find the centre and radius of x² + y² = 25.', solution: 'Centre (0, 0), r = √25 = 5.' },
          { example: 'Is the point (3, 4) on the circle x² + y² = 25?', solution: 'Yes: 3² + 4² = 9 + 16 = 25.' },
        ],
        commonMistakes: [
          { mistake: 'For x² + y² = 25 the radius is taken as 25.', fix: 'The right-hand side is r²: r = √25 = 5.' },
          { mistake: '(x − 2)² + (y + 1)² = 9 has centre (−2, 1).', fix: 'The signs change: the centre is (2, −1).' },
        ],
        practice: [
          { problem: 'Write the equation of the circle centred at the origin with radius 6.', solution: 'x² + y² = 36', steps: ['r² = 6².', 'x² + y² = 36.'] },
          { problem: 'Find the centre and radius of (x − 2)² + (y + 1)² = 9.', solution: 'centre (2, −1), r = 3', steps: ['a = 2, b = −1.', 'r = √9 = 3.'] },
          { problem: 'Where does the line y = 3 meet the circle x² + y² = 25?', solution: 'at (4, 3) and (−4, 3)', steps: ['x² + 9 = 25 → x² = 16.', 'x = 4 or x = −4.'] },
        ],
      },
      de: {
        title: 'Die Kreisgleichung',
        objectives: ['Die Gleichung eines Kreises um den Ursprung und um (a | b) aufstellen und lesen.', 'Prüfen, ob ein Punkt auf einem Kreis liegt, und die Schnittpunkte mit einer Geraden bestimmen.'],
        theory: 'Der Punkt (x | y) liegt auf dem Kreis mit Mittelpunkt O(0 | 0) und Radius r, wenn sein Abstand von O gleich r ist. Mit Pythagoras: x² + y² = r².\nx² + y² = 25 → Mittelpunkt (0 | 0), r = √25 = 5.\n\nKreis mit Mittelpunkt (a | b): (x − a)² + (y − b)² = r². Auf die Vorzeichen achten: (x − 2)² + (y + 1)² = 9 hat den Mittelpunkt (2 | −1) und r = 3.\n\nFür die Schnittpunkte mit der Geraden y = 3 setzt man y = 3 ein: x² + 9 = 25 → x = ±4.',
        keyPoints: ['Mittelpunkt (0 | 0): x² + y² = r²', 'Mittelpunkt (a | b): (x − a)² + (y − b)² = r²', 'Radius = √(rechte Seite)'],
        examples: [
          { example: 'Bestimmen Sie Mittelpunkt und Radius von x² + y² = 25.', solution: 'Mittelpunkt (0 | 0), r = √25 = 5.' },
          { example: 'Liegt der Punkt (3 | 4) auf dem Kreis x² + y² = 25?', solution: 'Ja: 3² + 4² = 9 + 16 = 25.' },
        ],
        commonMistakes: [
          { mistake: 'Bei x² + y² = 25 wird der Radius 25 genommen.', fix: 'Rechts steht r²: r = √25 = 5.' },
          { mistake: '(x − 2)² + (y + 1)² = 9 hat den Mittelpunkt (−2 | 1).', fix: 'Die Vorzeichen wechseln: Mittelpunkt (2 | −1).' },
        ],
        practice: [
          { problem: 'Stellen Sie die Gleichung des Kreises um den Ursprung mit Radius 6 auf.', solution: 'x² + y² = 36', steps: ['r² = 6².', 'x² + y² = 36.'] },
          { problem: 'Bestimmen Sie Mittelpunkt und Radius von (x − 2)² + (y + 1)² = 9.', solution: 'Mittelpunkt (2 | −1), r = 3', steps: ['a = 2, b = −1.', 'r = √9 = 3.'] },
          { problem: 'Wo schneidet die Gerade y = 3 den Kreis x² + y² = 25?', solution: 'in (4 | 3) und (−4 | 3)', steps: ['x² + 9 = 25 → x² = 16.', 'x = 4 oder x = −4.'] },
        ],
      },
    },
  ],
};
