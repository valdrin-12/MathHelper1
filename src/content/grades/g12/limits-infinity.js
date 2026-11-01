// Grade 12 · Themes 3–4: Limits as x → ±∞ and limits of sequences
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g12-limits-infinity',
  i18n: {
    al: { title: 'Limitet kur x → ±∞ dhe limitet e vargjeve', description: 'Limiti i polinomit dhe i funksionit racional në pafundësi, asimptota horizontale, limiti i vargut dhe numri e.' },
    en: { title: 'Limits at infinity and limits of sequences', description: 'Limits of polynomials and rational functions at infinity, horizontal asymptotes, limits of sequences and the number e.' },
    de: { title: 'Grenzwerte im Unendlichen und Grenzwerte von Folgen', description: 'Grenzwerte von Polynomen und gebrochenrationalen Funktionen im Unendlichen, waagerechte Asymptoten, Grenzwerte von Folgen und die Zahl e.' },
  },
  lessons: [
    // ───────── 1. Polynomials and rational functions
    {
      slug: 'g12-limits-infinity-polynomial-rational',
      practiceVisuals: {
        0: {
        type: 'functionPlot', view: { xMin: 0, xMax: 30, yMin: -1, yMax: 4 },
        functions: [{ expr: '(5*x^3 - x)/(2*x^3 + 7)', domain: [0, 30], label: 'y = (5x³ − x)/(2x³ + 7)' }, { expr: '2.5 + 0*x', color: 'muted', dashed: true, label: 'y = 2,5' }],
        points: [{ at: ['x0', '(5*x0^3 - x0)/(2*x0^3 + 7)'], color: 'secondary' }],
        sliders: [{ name: 'x0', label: 'x', min: 0, max: 30, step: 1, value: 2 }],
        readouts: [{ text: { al: 'f({x0}) = {(5*x0^3 - x0)/(2*x0^3 + 7)}', en: 'f({x0}) = {(5*x0^3 - x0)/(2*x0^3 + 7)}', de: 'f({x0}) = {(5*x0^3 - x0)/(2*x0^3 + 7)}' } }],
        alt: { al: 'Grafiku me një pikë që lëviz; vlera e funksionit afrohet te asimptota.', en: 'The graph with a moving point; the function value approaches the asymptote.', de: 'Der Graph mit einem beweglichen Punkt; der Funktionswert nähert sich der Asymptote.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -10, xMax: 10, yMin: -1, yMax: 4 }, height: 200,
        functions: [{ expr: '(3*x^2 - 1)/(x^2 + 5)', label: 'y = (3x² − 1)/(x² + 5)' }, { expr: '3 + 0*x', color: 'muted', dashed: true, label: 'y = 3' }],
        caption: alt('Kur x rritet pa fund, vlerat afrohen te 3.', 'As x grows without end, the values approach 3.', 'Wächst x über alle Grenzen, nähern sich die Werte 3.'),
        alt: alt('Grafiku i (3x² − 1)/(x² + 5) që afrohet te drejtëza e ndërprerë y = 3.', 'The graph of (3x² − 1)/(x² + 5) approaching the dashed line y = 3.', 'Der Graph von (3x² − 1)/(x² + 5) nähert sich der gestrichelten Geraden y = 3.'),
      }],
      answers: {
        examples: [[['(3*1e6^2 - 1)/(1e6^2 + 5)', 3, 1e-6]], [['(2*1e6 + 1)/(1e12 - 4)', 0, 1e-5]]],
        practice: [[['(5*1e6^3 - 1e6)/(2*1e6^3 + 7)', 2.5, 1e-6, '5/2']], 'text', 'text'],
      },
      al: {
        title: 'Limiti i polinomit dhe i funksionit racional',
        objectives: ['Të gjeni limitin e polinomit kur x → ±∞ nga termi me fuqinë më të madhe.', 'Të gjeni limitin e funksionit racional duke krahasuar gradat.'],
        theory: 'Kur x → ±∞, te polinomi vendos termi me fuqinë më të madhe: lim (4 − 2x²) = −∞ kur x → ∞.\n\nTe funksioni racional pjesëtojmë numëruesin dhe emëruesin me fuqinë më të madhe të x në emërues:\n(3x² − 1)/(x² + 5) = (3 − 1/x²)/(1 + 5/x²) → 3/1 = 3, sepse 1/x² → 0.\n\nRregulla: grada e numëruesit < e emëruesit → limiti 0; të barabarta → raporti i koeficientëve kryesorë; më e madhe → ±∞.',
        keyPoints: ['1/xⁿ → 0 kur x → ±∞', 'Pjesëto me fuqinë më të madhe', 'Gradë: <  → 0; = → raporti; > → ±∞'],
        examples: [
          { example: 'Gjeni lim (3x² − 1)/(x² + 5) kur x → ∞.', solution: 'Gradat e barabarta: 3/1 = 3.' },
          { example: 'Gjeni lim (2x + 1)/(x² − 4) kur x → ∞.', solution: 'Grada e numëruesit më e vogël: limiti 0.' },
        ],
        commonMistakes: [
          { mistake: 'Vendoset x = ∞ dhe shkruhet ∞/∞ = 1.', fix: '∞/∞ është formë e pacaktuar; pjesëtoni me fuqinë më të madhe.' },
        ],
        practice: [
          { problem: 'Gjeni lim (5x³ − x)/(2x³ + 7) kur x → ∞.', solution: '5/2', steps: ['Gradat të barabarta (3).', 'Raporti i koeficientëve: 5/2.'] },
          { problem: 'Gjeni lim (x² + 1)/(x − 3) kur x → ∞.', solution: '+∞', steps: ['Grada e numëruesit 2 > 1.', 'Numëruesi rritet më shpejt: limiti +∞.'] },
          { problem: 'Gjeni lim (4 − 2x²) kur x → ∞.', solution: '−∞', steps: ['Vendos termi −2x².', '−2x² → −∞.'] },
        ],
      },
      en: {
        title: 'Limits of polynomials and rational functions',
        objectives: ['Find the limit of a polynomial as x → ±∞ from its highest power.', 'Find the limit of a rational function by comparing degrees.'],
        theory: 'As x → ±∞, the highest power decides a polynomial: lim (4 − 2x²) = −∞ as x → ∞.\n\nFor a rational function divide the numerator and the denominator by the highest power of x in the denominator:\n(3x² − 1)/(x² + 5) = (3 − 1/x²)/(1 + 5/x²) → 3/1 = 3, because 1/x² → 0.\n\nRule: degree of numerator < denominator → limit 0; equal → ratio of leading coefficients; greater → ±∞.',
        keyPoints: ['1/xⁿ → 0 as x → ±∞', 'Divide by the highest power', 'Degree: < → 0; = → ratio; > → ±∞'],
        examples: [
          { example: 'Find lim (3x² − 1)/(x² + 5) as x → ∞.', solution: 'Equal degrees: 3/1 = 3.' },
          { example: 'Find lim (2x + 1)/(x² − 4) as x → ∞.', solution: 'Lower degree on top: the limit is 0.' },
        ],
        commonMistakes: [
          { mistake: 'x = ∞ is put in and ∞/∞ = 1 is written.', fix: '∞/∞ is indeterminate; divide by the highest power.' },
        ],
        practice: [
          { problem: 'Find lim (5x³ − x)/(2x³ + 7) as x → ∞.', solution: '5/2', steps: ['Equal degrees (3).', 'Ratio of the coefficients: 5/2.'] },
          { problem: 'Find lim (x² + 1)/(x − 3) as x → ∞.', solution: '+∞', steps: ['Degree of the numerator 2 > 1.', 'The numerator grows faster: limit +∞.'] },
          { problem: 'Find lim (4 − 2x²) as x → ∞.', solution: '−∞', steps: ['The term −2x² decides.', '−2x² → −∞.'] },
        ],
      },
      de: {
        title: 'Grenzwerte von Polynomen und gebrochenrationalen Funktionen',
        objectives: ['Den Grenzwert eines Polynoms für x → ±∞ über die höchste Potenz bestimmen.', 'Den Grenzwert einer gebrochenrationalen Funktion über die Grade bestimmen.'],
        theory: 'Für x → ±∞ entscheidet beim Polynom die höchste Potenz: lim (4 − 2x²) = −∞ für x → ∞.\n\nBei einer gebrochenrationalen Funktion teilt man Zähler und Nenner durch die höchste Potenz von x im Nenner:\n(3x² − 1)/(x² + 5) = (3 − 1/x²)/(1 + 5/x²) → 3/1 = 3, weil 1/x² → 0.\n\nRegel: Zählergrad < Nennergrad → Grenzwert 0; gleich → Quotient der Leitkoeffizienten; größer → ±∞.',
        keyPoints: ['1/xⁿ → 0 für x → ±∞', 'Durch die höchste Potenz teilen', 'Grad: < → 0; = → Quotient; > → ±∞'],
        examples: [
          { example: 'Bestimmen Sie lim (3x² − 1)/(x² + 5) für x → ∞.', solution: 'Gleiche Grade: 3/1 = 3.' },
          { example: 'Bestimmen Sie lim (2x + 1)/(x² − 4) für x → ∞.', solution: 'Zählergrad kleiner: Grenzwert 0.' },
        ],
        commonMistakes: [
          { mistake: 'Man setzt x = ∞ ein und schreibt ∞/∞ = 1.', fix: '∞/∞ ist unbestimmt; durch die höchste Potenz teilen.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie lim (5x³ − x)/(2x³ + 7) für x → ∞.', solution: '5/2', steps: ['Gleiche Grade (3).', 'Quotient der Koeffizienten: 5/2.'] },
          { problem: 'Bestimmen Sie lim (x² + 1)/(x − 3) für x → ∞.', solution: '+∞', steps: ['Zählergrad 2 > 1.', 'Der Zähler wächst schneller: Grenzwert +∞.'] },
          { problem: 'Bestimmen Sie lim (4 − 2x²) für x → ∞.', solution: '−∞', steps: ['Der Term −2x² entscheidet.', '−2x² → −∞.'] },
        ],
      },
    },
    // ───────── 2. Horizontal asymptote
    {
      slug: 'g12-limits-infinity-horizontal-asymptote',
      practiceVisuals: {
        0: {
        type: 'functionPlot', view: { xMin: -20, xMax: 30, yMin: -6, yMax: 8 },
        functions: [{ expr: '(6*x - 1)/(3*x + 2)', domain: [-20, -0.8], label: 'y = (6x − 1)/(3x + 2)' }, { expr: '(6*x - 1)/(3*x + 2)', domain: [-0.55, 30] }, { expr: '2 + 0*x', color: 'muted', dashed: true, label: 'y = 2' }],
        points: [{ at: ['x0', '(6*x0 - 1)/(3*x0 + 2)'], color: 'secondary' }],
        sliders: [{ name: 'x0', label: 'x', min: -20, max: 30, step: 1, value: 5 }],
        readouts: [{ text: { al: 'f({x0}) = {(6*x0 - 1)/(3*x0 + 2)}', en: 'f({x0}) = {(6*x0 - 1)/(3*x0 + 2)}', de: 'f({x0}) = {(6*x0 - 1)/(3*x0 + 2)}' } }],
        alt: { al: 'Grafiku me një pikë që lëviz; vlera e funksionit afrohet te asimptota.', en: 'The graph with a moving point; the function value approaches the asymptote.', de: 'Der Graph mit einem beweglichen Punkt; der Funktionswert nähert sich der Asymptote.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -6, xMax: 14, yMin: -6, yMax: 10 }, height: 230,
        functions: [
          { expr: '(2*x + 1)/(x - 4)', domain: [-6, 3.2], label: 'y = (2x + 1)/(x − 4)' },
          { expr: '(2*x + 1)/(x - 4)', domain: [5.1, 14] },
          { expr: '2 + 0*x', color: 'muted', dashed: true, label: 'y = 2' },
        ],
        caption: alt('Asimptota horizontale y = 2 (kur x → ±∞) dhe asimptota vertikale x = 4.', 'Horizontal asymptote y = 2 (as x → ±∞) and vertical asymptote x = 4.', 'Waagerechte Asymptote y = 2 (für x → ±∞) und senkrechte Asymptote x = 4.'),
        alt: alt('Hiperbola y = (2x + 1)/(x − 4) me dy degë dhe drejtëzën e ndërprerë y = 2.', 'The hyperbola y = (2x + 1)/(x − 4) with two branches and the dashed line y = 2.', 'Die Hyperbel y = (2x + 1)/(x − 4) mit zwei Ästen und der gestrichelten Geraden y = 2.'),
      }],
      answers: {
        examples: [[['2 / 1', 2]], [['5 / (1e12 + 1)', 0, 1e-9]]],
        practice: [[['6 / 3', 2]], [['1 / 2', 0.5, 0, '1/2']], 'text'],
      },
      al: {
        title: 'Asimptota horizontale',
        objectives: ['Të gjeni asimptotën horizontale y = b nga limiti kur x → ±∞.', 'Të përshkruani sjelljen e grafikut larg origjinës.'],
        theory: 'Drejtëza y = b është asimptotë horizontale nëse lim f(x) = b kur x → +∞ ose x → −∞: grafiku afrohet pa fund te kjo drejtëz.\n\nPër y = (2x + 1)/(x − 4): gradat e barabarta → b = 2/1 = 2, pra y = 2.\nPër y = 5/(x² + 1): grada e numëruesit më e vogël → y = 0 (boshti x).\nKur grada e numëruesit është më e madhe, nuk ka asimptotë horizontale.\n\nGrafiku mund ta presë asimptotën horizontale për vlera të fundme të x; ajo përshkruan vetëm sjelljen larg.',
        keyPoints: ['y = b nëse lim f(x) = b për x → ±∞', 'Gradat e barabarta → raporti i koeficientëve', 'Grafiku mund ta presë për x të fundëm'],
        examples: [
          { example: 'Gjeni asimptotën horizontale të y = (2x + 1)/(x − 4).', solution: 'lim = 2/1 = 2 → y = 2.' },
          { example: 'Gjeni asimptotën horizontale të y = 5/(x² + 1).', solution: 'Numëruesi konstant, emëruesi → ∞: limiti 0 → y = 0.' },
        ],
        commonMistakes: [
          { mistake: 'Asimptota horizontale merret x = 4.', fix: 'x = 4 është vertikale (emëruesi 0); horizontalja vjen nga x → ±∞.' },
        ],
        practice: [
          { problem: 'Gjeni asimptotën horizontale të y = (6x − 1)/(3x + 2).', solution: 'y = 2', steps: ['Gradat të barabarta.', '6/3 = 2 → y = 2.'] },
          { problem: 'Gjeni asimptotën horizontale të y = (x² − 1)/(2x² + x).', solution: 'y = 1/2', steps: ['Grada 2 në të dyja.', 'Raporti 1/2 → y = 1/2.'] },
          { problem: 'A ka y = (x + 3)/(x² + 1) asimptotë horizontale?', solution: 'Po, y = 0', steps: ['Grada e numëruesit 1 < 2.', 'Limiti 0 → y = 0.'] },
        ],
      },
      en: {
        title: 'Horizontal asymptotes',
        objectives: ['Find the horizontal asymptote y = b from the limit as x → ±∞.', 'Describe how the graph behaves far from the origin.'],
        theory: 'The line y = b is a horizontal asymptote if lim f(x) = b as x → +∞ or x → −∞: the graph gets ever closer to this line.\n\nFor y = (2x + 1)/(x − 4): equal degrees → b = 2/1 = 2, so y = 2.\nFor y = 5/(x² + 1): lower degree on top → y = 0 (the x-axis).\nWhen the numerator has the higher degree there is no horizontal asymptote.\n\nThe graph may cross a horizontal asymptote at finite x; it only describes the behaviour far away.',
        keyPoints: ['y = b if lim f(x) = b as x → ±∞', 'Equal degrees → ratio of coefficients', 'The graph can cross it at finite x'],
        examples: [
          { example: 'Find the horizontal asymptote of y = (2x + 1)/(x − 4).', solution: 'lim = 2/1 = 2 → y = 2.' },
          { example: 'Find the horizontal asymptote of y = 5/(x² + 1).', solution: 'Constant numerator, denominator → ∞: limit 0 → y = 0.' },
        ],
        commonMistakes: [
          { mistake: 'x = 4 is taken as the horizontal asymptote.', fix: 'x = 4 is vertical (denominator 0); the horizontal one comes from x → ±∞.' },
        ],
        practice: [
          { problem: 'Find the horizontal asymptote of y = (6x − 1)/(3x + 2).', solution: 'y = 2', steps: ['Equal degrees.', '6/3 = 2 → y = 2.'] },
          { problem: 'Find the horizontal asymptote of y = (x² − 1)/(2x² + x).', solution: 'y = 1/2', steps: ['Degree 2 in both.', 'Ratio 1/2 → y = 1/2.'] },
          { problem: 'Does y = (x + 3)/(x² + 1) have a horizontal asymptote?', solution: 'Yes, y = 0', steps: ['Degree of the numerator 1 < 2.', 'Limit 0 → y = 0.'] },
        ],
      },
      de: {
        title: 'Waagerechte Asymptoten',
        objectives: ['Die waagerechte Asymptote y = b über den Grenzwert für x → ±∞ bestimmen.', 'Das Verhalten des Graphen weit vom Ursprung beschreiben.'],
        theory: 'Die Gerade y = b ist eine waagerechte Asymptote, wenn lim f(x) = b für x → +∞ oder x → −∞: Der Graph nähert sich dieser Geraden beliebig.\n\nFür y = (2x + 1)/(x − 4): gleiche Grade → b = 2/1 = 2, also y = 2.\nFür y = 5/(x² + 1): Zählergrad kleiner → y = 0 (x-Achse).\nIst der Zählergrad größer, gibt es keine waagerechte Asymptote.\n\nDer Graph darf eine waagerechte Asymptote bei endlichen x schneiden; sie beschreibt nur das Verhalten weit draußen.',
        keyPoints: ['y = b, wenn lim f(x) = b für x → ±∞', 'Gleiche Grade → Quotient der Koeffizienten', 'Schnitt bei endlichem x möglich'],
        examples: [
          { example: 'Bestimmen Sie die waagerechte Asymptote von y = (2x + 1)/(x − 4).', solution: 'lim = 2/1 = 2 → y = 2.' },
          { example: 'Bestimmen Sie die waagerechte Asymptote von y = 5/(x² + 1).', solution: 'Konstanter Zähler, Nenner → ∞: Grenzwert 0 → y = 0.' },
        ],
        commonMistakes: [
          { mistake: 'x = 4 wird als waagerechte Asymptote genommen.', fix: 'x = 4 ist senkrecht (Nenner 0); die waagerechte kommt von x → ±∞.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die waagerechte Asymptote von y = (6x − 1)/(3x + 2).', solution: 'y = 2', steps: ['Gleiche Grade.', '6/3 = 2 → y = 2.'] },
          { problem: 'Bestimmen Sie die waagerechte Asymptote von y = (x² − 1)/(2x² + x).', solution: 'y = 1/2', steps: ['Grad 2 in beiden.', 'Quotient 1/2 → y = 1/2.'] },
          { problem: 'Hat y = (x + 3)/(x² + 1) eine waagerechte Asymptote?', solution: 'Ja, y = 0', steps: ['Zählergrad 1 < 2.', 'Grenzwert 0 → y = 0.'] },
        ],
      },
    },
    // ───────── 3. Limit of a sequence
    {
      slug: 'g12-limits-infinity-sequence-limit',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'n', cells: ['1', '10', '100', '1 000'] },
          { head: '(2n + 3)/(n + 1)', cells: [alt('2,5', '2.5', '2,5'), alt('2,09', '2.09', '2,09'), alt('2,0099', '2.0099', '2,0099'), alt('2,001', '2.001', '2,001')] },
        ],
        caption: alt('Kufizat afrohen gjithnjë e më shumë te 2: lim aₙ = 2.', 'The terms get closer and closer to 2: lim aₙ = 2.', 'Die Glieder kommen 2 immer näher: lim aₙ = 2.'),
        alt: alt('Tabelë me vlerat e (2n + 3)/(n + 1) për n = 1, 10, 100, 1 000.', 'Table of (2n + 3)/(n + 1) for n = 1, 10, 100, 1 000.', 'Tabelle von (2n + 3)/(n + 1) für n = 1, 10, 100, 1 000.'),
      }],
      answers: {
        examples: [[['(2*1e6 + 3)/(1e6 + 1)', 2, 1e-5]], [['0.5^100', 0, 1e-9]]],
        practice: [[['(3*1e12 + 1e6)/(1e12 - 2)', 3, 1e-5]], [['(1e6 + 1)/1e12', 0, 1e-5]], [['5 + 1/1e9', 5, 1e-6]]],
      },
      al: {
        title: 'Limiti i vargut',
        objectives: ['Të gjeni limitin e vargjeve racionale kur n → ∞.', 'Të përdorni limitet bazë 1/n → 0 dhe qⁿ → 0 për |q| < 1.'],
        theory: 'Vargu (aₙ) ka limit a kur kufizat i afrohen sa të duam a-së për n mjaft të mëdha: lim aₙ = a. Atëherë vargu quhet konvergjent.\n\nLimitet bazë: lim 1/n = 0; lim qⁿ = 0 kur |q| < 1; lim c = c.\n\nTe vargjet racionale veprojmë si te funksionet: (2n + 3)/(n + 1) = (2 + 3/n)/(1 + 1/n) → 2. Vargu (−1)ⁿ nuk ka limit (luhatet midis −1 dhe 1).',
        keyPoints: ['lim 1/n = 0', 'lim qⁿ = 0 për |q| < 1', 'Pjesëto me fuqinë më të madhe të n'],
        examples: [
          { example: 'Gjeni lim (2n + 3)/(n + 1).', solution: '(2 + 3/n)/(1 + 1/n) → 2/1 = 2.' },
          { example: 'Gjeni lim (1/2)ⁿ.', solution: '|q| = 1/2 < 1 → limiti 0.' },
        ],
        commonMistakes: [
          { mistake: '(2n + 3)/(n + 1) → 1, sepse "∞/∞ = 1".', fix: 'Krahasoni koeficientët kryesorë: 2/1 = 2.' },
        ],
        practice: [
          { problem: 'Gjeni lim (3n² + n)/(n² − 2).', solution: '3', steps: ['Gradat të barabarta (2).', '3/1 = 3.'] },
          { problem: 'Gjeni lim (n + 1)/n².', solution: '0', steps: ['Grada e numëruesit 1 < 2.', 'Limiti 0.'] },
          { problem: 'Gjeni lim (5 + 1/n).', solution: '5', steps: ['1/n → 0.', '5 + 0 = 5.'] },
        ],
      },
      en: {
        title: 'Limit of a sequence',
        objectives: ['Find the limit of rational sequences as n → ∞.', 'Use the basic limits 1/n → 0 and qⁿ → 0 for |q| < 1.'],
        theory: 'The sequence (aₙ) has limit a when its terms get as close as we like to a for large enough n: lim aₙ = a. The sequence is then convergent.\n\nBasic limits: lim 1/n = 0; lim qⁿ = 0 when |q| < 1; lim c = c.\n\nFor rational sequences work as with functions: (2n + 3)/(n + 1) = (2 + 3/n)/(1 + 1/n) → 2. The sequence (−1)ⁿ has no limit (it swings between −1 and 1).',
        keyPoints: ['lim 1/n = 0', 'lim qⁿ = 0 for |q| < 1', 'Divide by the highest power of n'],
        examples: [
          { example: 'Find lim (2n + 3)/(n + 1).', solution: '(2 + 3/n)/(1 + 1/n) → 2/1 = 2.' },
          { example: 'Find lim (1/2)ⁿ.', solution: '|q| = 1/2 < 1 → limit 0.' },
        ],
        commonMistakes: [
          { mistake: '(2n + 3)/(n + 1) → 1, because "∞/∞ = 1".', fix: 'Compare the leading coefficients: 2/1 = 2.' },
        ],
        practice: [
          { problem: 'Find lim (3n² + n)/(n² − 2).', solution: '3', steps: ['Equal degrees (2).', '3/1 = 3.'] },
          { problem: 'Find lim (n + 1)/n².', solution: '0', steps: ['Degree of the numerator 1 < 2.', 'Limit 0.'] },
          { problem: 'Find lim (5 + 1/n).', solution: '5', steps: ['1/n → 0.', '5 + 0 = 5.'] },
        ],
      },
      de: {
        title: 'Grenzwert einer Folge',
        objectives: ['Den Grenzwert gebrochenrationaler Folgen für n → ∞ bestimmen.', 'Die Grundgrenzwerte 1/n → 0 und qⁿ → 0 für |q| < 1 nutzen.'],
        theory: 'Die Folge (aₙ) hat den Grenzwert a, wenn ihre Glieder für hinreichend große n beliebig nahe an a liegen: lim aₙ = a. Die Folge heißt dann konvergent.\n\nGrundgrenzwerte: lim 1/n = 0; lim qⁿ = 0 für |q| < 1; lim c = c.\n\nBei gebrochenrationalen Folgen geht man wie bei Funktionen vor: (2n + 3)/(n + 1) = (2 + 3/n)/(1 + 1/n) → 2. Die Folge (−1)ⁿ hat keinen Grenzwert (sie springt zwischen −1 und 1).',
        keyPoints: ['lim 1/n = 0', 'lim qⁿ = 0 für |q| < 1', 'Durch die höchste Potenz von n teilen'],
        examples: [
          { example: 'Bestimmen Sie lim (2n + 3)/(n + 1).', solution: '(2 + 3/n)/(1 + 1/n) → 2/1 = 2.' },
          { example: 'Bestimmen Sie lim (1/2)ⁿ.', solution: '|q| = 1/2 < 1 → Grenzwert 0.' },
        ],
        commonMistakes: [
          { mistake: '(2n + 3)/(n + 1) → 1, weil „∞/∞ = 1“.', fix: 'Die Leitkoeffizienten vergleichen: 2/1 = 2.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie lim (3n² + n)/(n² − 2).', solution: '3', steps: ['Gleiche Grade (2).', '3/1 = 3.'] },
          { problem: 'Bestimmen Sie lim (n + 1)/n².', solution: '0', steps: ['Zählergrad 1 < 2.', 'Grenzwert 0.'] },
          { problem: 'Bestimmen Sie lim (5 + 1/n).', solution: '5', steps: ['1/n → 0.', '5 + 0 = 5.'] },
        ],
      },
    },
    // ───────── 4. The number e
    {
      slug: 'g12-limits-infinity-number-e',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'n', cells: ['1', '10', '100', '10 000'] },
          { head: '(1 + 1/n)ⁿ', cells: ['2', alt('2,594', '2.594', '2,594'), alt('2,705', '2.705', '2,705'), alt('2,718', '2.718', '2,718')] },
        ],
        caption: alt('Vargu (1 + 1/n)ⁿ rritet dhe afrohet te e ≈ 2,71828.', 'The sequence (1 + 1/n)ⁿ increases and approaches e ≈ 2.71828.', 'Die Folge (1 + 1/n)ⁿ wächst und nähert sich e ≈ 2,71828.'),
        alt: alt('Tabelë me vlerat e (1 + 1/n)ⁿ për n = 1, 10, 100, 10 000.', 'Table of (1 + 1/n)ⁿ for n = 1, 10, 100, 10 000.', 'Tabelle von (1 + 1/n)ⁿ für n = 1, 10, 100, 10 000.'),
      }],
      answers: {
        examples: [[['(1 + 1/10)^10', 2.594, 0.0005]], [['e^2', 7.389, 0.0005]]],
        practice: [[['1.01^100', 2.705, 0.0005]], [['1000 * e^0.05', 1051.27, 0.005]], [['e^3', 20.09, 0.005]]],
      },
      al: {
        title: 'Numri e',
        objectives: ['Të njihni numrin e si limit i (1 + 1/n)ⁿ.', 'Të përdorni lim (1 + k/n)ⁿ = eᵏ dhe rritjen e vazhdueshme.'],
        theory: 'Vargu (1 + 1/n)ⁿ është rritës dhe i kufizuar, prandaj ka limit. Ky limit është numri e ≈ 2,71828 (numër irracional):\nlim (1 + 1/n)ⁿ = e.\n\nMë përgjithësisht: lim (1 + k/n)ⁿ = eᵏ, p.sh. lim (1 + 2/n)ⁿ = e² ≈ 7,389.\n\nZbatim: interesi i përbërë në mënyrë të vazhdueshme. Kapitali K me normë vjetore p (si numër dhjetor) pas t vjetësh bëhet K · eᵖᵗ: 1 000 € me 5% për 1 vit → 1 000 · e^(0,05) ≈ 1 051,27 €.',
        keyPoints: ['lim (1 + 1/n)ⁿ = e ≈ 2,718', 'lim (1 + k/n)ⁿ = eᵏ', 'Rritje e vazhdueshme: K · eᵖᵗ'],
        examples: [
          { example: 'Llogaritni (1 + 1/10)¹⁰ me 3 dhjetore.', solution: '1,1¹⁰ ≈ 2,594 (afër e, por ende më i vogël).' },
          { example: 'Gjeni lim (1 + 2/n)ⁿ.', solution: 'e² ≈ 7,389.' },
        ],
        commonMistakes: [
          { mistake: '1 + 1/n → 1, prandaj (1 + 1/n)ⁿ → 1ⁿ = 1.', fix: '1^∞ është formë e pacaktuar; limiti është e.' },
        ],
        practice: [
          { problem: 'Llogaritni (1 + 1/100)¹⁰⁰ me 3 dhjetore.', solution: '≈ 2,705', steps: ['1,01¹⁰⁰.', '≈ 2,705.'] },
          { problem: '1 000 € me interes të vazhdueshëm 5% për 1 vit. Sa bëhen?', solution: '≈ 1 051,27 €', steps: ['K · eᵖᵗ = 1 000 · e^(0,05).', '≈ 1 051,27 €.'] },
          { problem: 'Gjeni lim (1 + 3/n)ⁿ me 2 dhjetore.', solution: 'e³ ≈ 20,09', steps: ['k = 3.', 'e³ ≈ 20,09.'] },
        ],
      },
      en: {
        title: 'The number e',
        objectives: ['Know the number e as the limit of (1 + 1/n)ⁿ.', 'Use lim (1 + k/n)ⁿ = eᵏ and continuous growth.'],
        theory: 'The sequence (1 + 1/n)ⁿ is increasing and bounded, so it has a limit. That limit is the number e ≈ 2.71828 (an irrational number):\nlim (1 + 1/n)ⁿ = e.\n\nMore generally: lim (1 + k/n)ⁿ = eᵏ, e.g. lim (1 + 2/n)ⁿ = e² ≈ 7.389.\n\nApplication: continuously compounded interest. Capital K at an annual rate p (as a decimal) becomes K · eᵖᵗ after t years: €1 000 at 5% for 1 year → 1 000 · e^0.05 ≈ €1 051.27.',
        keyPoints: ['lim (1 + 1/n)ⁿ = e ≈ 2.718', 'lim (1 + k/n)ⁿ = eᵏ', 'Continuous growth: K · eᵖᵗ'],
        examples: [
          { example: 'Work out (1 + 1/10)¹⁰ to 3 d.p.', solution: '1.1¹⁰ ≈ 2.594 (close to e, but still smaller).' },
          { example: 'Find lim (1 + 2/n)ⁿ.', solution: 'e² ≈ 7.389.' },
        ],
        commonMistakes: [
          { mistake: '1 + 1/n → 1, so (1 + 1/n)ⁿ → 1ⁿ = 1.', fix: '1^∞ is indeterminate; the limit is e.' },
        ],
        practice: [
          { problem: 'Work out (1 + 1/100)¹⁰⁰ to 3 d.p.', solution: '≈ 2.705', steps: ['1.01¹⁰⁰.', '≈ 2.705.'] },
          { problem: '€1 000 at 5% continuous interest for 1 year. How much is it worth?', solution: '≈ €1 051.27', steps: ['K · eᵖᵗ = 1 000 · e^(0.05).', '≈ €1 051.27.'] },
          { problem: 'Find lim (1 + 3/n)ⁿ to 2 d.p.', solution: 'e³ ≈ 20.09', steps: ['k = 3.', 'e³ ≈ 20.09.'] },
        ],
      },
      de: {
        title: 'Die eulersche Zahl e',
        objectives: ['Die Zahl e als Grenzwert von (1 + 1/n)ⁿ kennen.', 'lim (1 + k/n)ⁿ = eᵏ und stetiges Wachstum anwenden.'],
        theory: 'Die Folge (1 + 1/n)ⁿ ist steigend und beschränkt, also konvergent. Ihr Grenzwert ist die eulersche Zahl e ≈ 2,71828 (irrational):\nlim (1 + 1/n)ⁿ = e.\n\nAllgemeiner: lim (1 + k/n)ⁿ = eᵏ, z. B. lim (1 + 2/n)ⁿ = e² ≈ 7,389.\n\nAnwendung: stetige Verzinsung. Ein Kapital K mit Jahreszinssatz p (als Dezimalzahl) wächst in t Jahren auf K · eᵖᵗ: 1 000 € zu 5 % für 1 Jahr → 1 000 · e^0,05 ≈ 1 051,27 €.',
        keyPoints: ['lim (1 + 1/n)ⁿ = e ≈ 2,718', 'lim (1 + k/n)ⁿ = eᵏ', 'Stetiges Wachstum: K · eᵖᵗ'],
        examples: [
          { example: 'Berechnen Sie (1 + 1/10)¹⁰ auf 3 Dezimalstellen.', solution: '1,1¹⁰ ≈ 2,594 (nahe an e, aber noch kleiner).' },
          { example: 'Bestimmen Sie lim (1 + 2/n)ⁿ.', solution: 'e² ≈ 7,389.' },
        ],
        commonMistakes: [
          { mistake: '1 + 1/n → 1, also (1 + 1/n)ⁿ → 1ⁿ = 1.', fix: '1^∞ ist unbestimmt; der Grenzwert ist e.' },
        ],
        practice: [
          { problem: 'Berechnen Sie (1 + 1/100)¹⁰⁰ auf 3 Dezimalstellen.', solution: '≈ 2,705', steps: ['1,01¹⁰⁰.', '≈ 2,705.'] },
          { problem: '1 000 € werden 1 Jahr stetig mit 5 % verzinst. Wie viel sind es dann?', solution: '≈ 1 051,27 €', steps: ['K · eᵖᵗ = 1 000 · e^(0,05).', '≈ 1 051,27 €.'] },
          { problem: 'Bestimmen Sie lim (1 + 3/n)ⁿ auf 2 Dezimalstellen.', solution: 'e³ ≈ 20,09', steps: ['k = 3.', 'e³ ≈ 20,09.'] },
        ],
      },
    },
  ],
};
