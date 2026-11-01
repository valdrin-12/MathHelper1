// Grade 12 · Themes 6–7: Limits of functions and continuity
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g12-limits-continuity',
  i18n: {
    al: { title: 'Limitet e funksioneve dhe vazhdueshmëria', description: 'Limiti kur x → a, limitet e njëanshme, asimptotat vertikale, format e pacaktuara 0/0, limitet e rëndësishme dhe vazhdueshmëria.' },
    en: { title: 'Limits of functions and continuity', description: 'Limits as x → a, one-sided limits, vertical asymptotes, the indeterminate form 0/0, standard limits and continuity.' },
    de: { title: 'Grenzwerte von Funktionen und Stetigkeit', description: 'Grenzwerte für x → a, einseitige Grenzwerte, senkrechte Asymptoten, die unbestimmte Form 0/0, wichtige Grenzwerte und Stetigkeit.' },
  },
  lessons: [
    // ───────── 1. Limit as x → a
    {
      slug: 'g12-limits-continuity-limit-at-a',
      visuals: [{
        type: 'functionPlot', view: { xMin: -2, xMax: 2, yMin: -1, yMax: 4 }, height: 200,
        functions: [{ expr: 'x + 1', domain: [-2, 0], label: 'x + 1' }, { expr: '2 + 0*x', domain: [0, 2], color: 'secondary', label: '2' }],
        points: [{ at: [0, 1], label: '1' }, { at: [0, 2], label: '2', color: 'secondary' }],
        caption: alt('Nga e majta f → 1, nga e djathta f → 2: limiti te x = 0 nuk ekziston.', 'From the left f → 1, from the right f → 2: the limit at x = 0 does not exist.', 'Von links f → 1, von rechts f → 2: Der Grenzwert bei x = 0 existiert nicht.'),
        alt: alt('Funksion me kërcim te x = 0: degë majtas që shkon te 1 dhe djathtas në nivelin 2.', 'A function with a jump at x = 0: the left branch approaches 1 and the right is at height 2.', 'Funktion mit Sprung bei x = 0: links gegen 1, rechts auf Höhe 2.'),
      }],
      answers: {
        examples: [[['2^2 + 1', 5]], [['(3*1 - 1)/(1 + 1)', 1]]],
        practice: [[['2*(-1)^3 - (-1)', -1]], [['sqrt(0 + 9)', 3]], 'text'],
      },
      al: {
        title: 'Limiti kur x → a',
        objectives: ['Të llogaritni limitin me zëvendësim të drejtpërdrejtë kur funksioni është i përkufizuar në a.', 'Të përdorni limitet e njëanshme për të vendosur nëse limiti ekziston.'],
        theory: 'lim f(x) = L kur x → a do të thotë: kur x afrohet te a (pa qenë a), f(x) afrohet te L.\n\nPër polinome dhe për funksione racionale me emërues ≠ 0 në a, limiti fitohet duke zëvendësuar: lim (x² + 1) kur x → 2 është 4 + 1 = 5.\n\nLimitet e njëanshme: nga e majta (x → a⁻) dhe nga e djathta (x → a⁺). Limiti ekziston vetëm kur të dyja janë të barabarta.',
        keyPoints: ['Polinomet: zëvendëso x = a', 'lim ekziston ⇔ lim⁻ = lim⁺', 'Vlera f(a) nuk ndikon në limit'],
        examples: [
          { example: 'Gjeni lim (x² + 1) kur x → 2.', solution: '2² + 1 = 5.' },
          { example: 'Gjeni lim (3x − 1)/(x + 1) kur x → 1.', solution: 'Emëruesi 2 ≠ 0: (3 − 1)/2 = 1.' },
        ],
        commonMistakes: [
          { mistake: 'Limiti merret i barabartë me njërin limit të njëanshëm.', fix: 'Kontrolloni të dyja anët; nëse ndryshojnë, limiti nuk ekziston.' },
        ],
        practice: [
          { problem: 'Gjeni lim (2x³ − x) kur x → −1.', solution: '−1', steps: ['2 · (−1)³ − (−1) = −2 + 1.', '= −1.'] },
          { problem: 'Gjeni lim √(x + 9) kur x → 0.', solution: '3', steps: ['√(0 + 9).', '= 3.'] },
          { problem: 'f(x) = x + 1 për x < 0 dhe f(x) = 2 për x ≥ 0. A ekziston lim f(x) kur x → 0?', solution: 'Jo', steps: ['Nga e majta: 0 + 1 = 1; nga e djathta: 2.', '1 ≠ 2 → limiti nuk ekziston.'] },
        ],
      },
      en: {
        title: 'Limits as x → a',
        objectives: ['Work out a limit by direct substitution when the function is defined at a.', 'Use one-sided limits to decide whether a limit exists.'],
        theory: 'lim f(x) = L as x → a means: as x gets close to a (without being a), f(x) gets close to L.\n\nFor polynomials, and for rational functions with a non-zero denominator at a, substitute: lim (x² + 1) as x → 2 is 4 + 1 = 5.\n\nOne-sided limits: from the left (x → a⁻) and from the right (x → a⁺). The limit exists only when the two are equal.',
        keyPoints: ['Polynomials: substitute x = a', 'Limit exists ⇔ left limit = right limit', 'The value f(a) does not affect the limit'],
        examples: [
          { example: 'Find lim (x² + 1) as x → 2.', solution: '2² + 1 = 5.' },
          { example: 'Find lim (3x − 1)/(x + 1) as x → 1.', solution: 'Denominator 2 ≠ 0: (3 − 1)/2 = 1.' },
        ],
        commonMistakes: [
          { mistake: 'The limit is taken to equal one of the one-sided limits.', fix: 'Check both sides; if they differ, the limit does not exist.' },
        ],
        practice: [
          { problem: 'Find lim (2x³ − x) as x → −1.', solution: '−1', steps: ['2 · (−1)³ − (−1) = −2 + 1.', '= −1.'] },
          { problem: 'Find lim √(x + 9) as x → 0.', solution: '3', steps: ['√(0 + 9).', '= 3.'] },
          { problem: 'f(x) = x + 1 for x < 0 and f(x) = 2 for x ≥ 0. Does lim f(x) exist as x → 0?', solution: 'No', steps: ['From the left: 0 + 1 = 1; from the right: 2.', '1 ≠ 2 → the limit does not exist.'] },
        ],
      },
      de: {
        title: 'Grenzwert für x → a',
        objectives: ['Grenzwerte durch Einsetzen berechnen, wenn die Funktion bei a definiert ist.', 'Mit einseitigen Grenzwerten entscheiden, ob ein Grenzwert existiert.'],
        theory: 'lim f(x) = L für x → a bedeutet: Nähert sich x der Stelle a (ohne a zu sein), nähert sich f(x) dem Wert L.\n\nBei Polynomen und bei gebrochenrationalen Funktionen mit Nenner ≠ 0 bei a setzt man ein: lim (x² + 1) für x → 2 ist 4 + 1 = 5.\n\nEinseitige Grenzwerte: von links (x → a⁻) und von rechts (x → a⁺). Der Grenzwert existiert nur, wenn beide gleich sind.',
        keyPoints: ['Polynome: x = a einsetzen', 'Grenzwert existiert ⇔ linksseitig = rechtsseitig', 'Der Wert f(a) beeinflusst den Grenzwert nicht'],
        examples: [
          { example: 'Bestimmen Sie lim (x² + 1) für x → 2.', solution: '2² + 1 = 5.' },
          { example: 'Bestimmen Sie lim (3x − 1)/(x + 1) für x → 1.', solution: 'Nenner 2 ≠ 0: (3 − 1)/2 = 1.' },
        ],
        commonMistakes: [
          { mistake: 'Der Grenzwert wird einem einseitigen Grenzwert gleichgesetzt.', fix: 'Beide Seiten prüfen; sind sie verschieden, existiert kein Grenzwert.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie lim (2x³ − x) für x → −1.', solution: '−1', steps: ['2 · (−1)³ − (−1) = −2 + 1.', '= −1.'] },
          { problem: 'Bestimmen Sie lim √(x + 9) für x → 0.', solution: '3', steps: ['√(0 + 9).', '= 3.'] },
          { problem: 'f(x) = x + 1 für x < 0 und f(x) = 2 für x ≥ 0. Existiert lim f(x) für x → 0?', solution: 'Nein', steps: ['Von links: 0 + 1 = 1; von rechts: 2.', '1 ≠ 2 → kein Grenzwert.'] },
        ],
      },
    },
    // ───────── 2. Vertical asymptotes
    {
      slug: 'g12-limits-continuity-vertical-asymptotes',
      practiceVisuals: {
        0: {
        type: 'functionPlot', view: { xMin: -9, xMax: 3, yMin: -10, yMax: 10 },
        functions: [{ expr: '5/(x + 4)', domain: [-9, -4.1], label: 'y = 5/(x + 4)' }, { expr: '5/(x + 4)', domain: [-3.9, 3] }],
        points: [{ at: ['x0', '5/(x0 + 4)'], color: 'secondary' }],
        sliders: [{ name: 'x0', label: 'x', min: -9, max: 3, step: 0.05, value: -3.5 }],
        readouts: [{ text: { al: 'f({x0}) = {5/(x0 + 4)}', en: 'f({x0}) = {5/(x0 + 4)}', de: 'f({x0}) = {5/(x0 + 4)}' } }],
        alt: { al: 'Grafiku me një pikë që lëviz; vlera e funksionit afrohet te asimptota.', en: 'The graph with a moving point; the function value approaches the asymptote.', de: 'Der Graph mit einem beweglichen Punkt; der Funktionswert nähert sich der Asymptote.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -2, xMax: 6, yMin: -6, yMax: 6 }, height: 220,
        functions: [{ expr: '1/(x - 2)', domain: [-2, 1.83], label: 'y = 1/(x − 2)' }, { expr: '1/(x - 2)', domain: [2.17, 6] }],
        caption: alt('Kur x → 2⁻, y → −∞; kur x → 2⁺, y → +∞: x = 2 është asimptotë vertikale.', 'As x → 2⁻, y → −∞; as x → 2⁺, y → +∞: x = 2 is a vertical asymptote.', 'Für x → 2⁻ gilt y → −∞, für x → 2⁺ gilt y → +∞: x = 2 ist senkrechte Asymptote.'),
        alt: alt('Hiperbola y = 1/(x − 2) me dy degë në të dy anët e x = 2.', 'The hyperbola y = 1/(x − 2) with two branches on either side of x = 2.', 'Die Hyperbel y = 1/(x − 2) mit zwei Ästen beiderseits von x = 2.'),
      }],
      answers: {
        examples: ['text', [['sqrt(9)', 3]]],
        practice: [[['0 - 4', -4]], 'text', [['5', 5], ['2 / 1', 2]]],
      },
      al: {
        title: 'Asimptotat vertikale',
        objectives: ['Të gjeni asimptotat vertikale të funksioneve racionale.', 'Të përshkruani sjelljen e funksionit pranë asimptotës me limitet e njëanshme.'],
        theory: 'Drejtëza x = a është asimptotë vertikale kur f(x) → ±∞ kur x → a (nga të paktën njëra anë).\n\nTe funksionet racionale kandidatët janë zerot e emëruesit. y = 1/(x − 2): emëruesi 0 te x = 2; nga e majta y → −∞, nga e djathta y → +∞.\n\nKujdes: nëse edhe numëruesi bëhet 0 në të njëjtën pikë, pas thjeshtimit mund të mos ketë asimptotë (vetëm një "vrimë"). y = (x − 1)/(x² − 1) = 1/(x + 1) për x ≠ 1: asimptotë vetëm x = −1.',
        keyPoints: ['Kandidatët: emëruesi = 0', 'f → ±∞ → asimptotë vertikale', 'Thjeshtoni së pari faktorët e përbashkët'],
        examples: [
          { example: 'Gjeni asimptotën vertikale të y = 1/(x − 2).', solution: 'x − 2 = 0 → x = 2; y → −∞ nga e majta, +∞ nga e djathta.' },
          { example: 'Gjeni asimptotat vertikale të y = (x + 1)/(x² − 9).', solution: 'x² − 9 = 0 → x = 3 dhe x = −3 (numëruesi aty ≠ 0).' },
        ],
        commonMistakes: [
          { mistake: 'Çdo zero e emëruesit merret asimptotë.', fix: 'Kontrolloni nëse thjeshtohet me numëruesin.' },
        ],
        practice: [
          { problem: 'Gjeni asimptotën vertikale të y = 5/(x + 4).', solution: 'x = −4', steps: ['x + 4 = 0.', 'x = −4.'] },
          { problem: 'Sa asimptota vertikale ka y = (x − 1)/(x² − 1)?', solution: 'Një: x = −1', steps: ['(x − 1)/((x − 1)(x + 1)) = 1/(x + 1) për x ≠ 1.', 'Te x = 1 ka vetëm vrimë; asimptotë x = −1.'] },
          { problem: 'Gjeni asimptotat e y = 2x/(x − 5).', solution: 'x = 5 dhe y = 2', steps: ['Vertikale: x − 5 = 0 → x = 5.', 'Horizontale: 2/1 = 2 → y = 2.'] },
        ],
      },
      en: {
        title: 'Vertical asymptotes',
        objectives: ['Find the vertical asymptotes of rational functions.', 'Describe the behaviour near an asymptote with one-sided limits.'],
        theory: 'The line x = a is a vertical asymptote when f(x) → ±∞ as x → a (from at least one side).\n\nFor rational functions the candidates are the zeros of the denominator. y = 1/(x − 2): denominator 0 at x = 2; from the left y → −∞, from the right y → +∞.\n\nCareful: if the numerator is also 0 at the same point, after cancelling there may be no asymptote (just a "hole"). y = (x − 1)/(x² − 1) = 1/(x + 1) for x ≠ 1: the only asymptote is x = −1.',
        keyPoints: ['Candidates: denominator = 0', 'f → ±∞ → vertical asymptote', 'Cancel common factors first'],
        examples: [
          { example: 'Find the vertical asymptote of y = 1/(x − 2).', solution: 'x − 2 = 0 → x = 2; y → −∞ from the left, +∞ from the right.' },
          { example: 'Find the vertical asymptotes of y = (x + 1)/(x² − 9).', solution: 'x² − 9 = 0 → x = 3 and x = −3 (the numerator is not 0 there).' },
        ],
        commonMistakes: [
          { mistake: 'Every zero of the denominator is taken as an asymptote.', fix: 'Check whether it cancels with the numerator.' },
        ],
        practice: [
          { problem: 'Find the vertical asymptote of y = 5/(x + 4).', solution: 'x = −4', steps: ['x + 4 = 0.', 'x = −4.'] },
          { problem: 'How many vertical asymptotes does y = (x − 1)/(x² − 1) have?', solution: 'One: x = −1', steps: ['(x − 1)/((x − 1)(x + 1)) = 1/(x + 1) for x ≠ 1.', 'At x = 1 there is only a hole; asymptote x = −1.'] },
          { problem: 'Find the asymptotes of y = 2x/(x − 5).', solution: 'x = 5 and y = 2', steps: ['Vertical: x − 5 = 0 → x = 5.', 'Horizontal: 2/1 = 2 → y = 2.'] },
        ],
      },
      de: {
        title: 'Senkrechte Asymptoten',
        objectives: ['Senkrechte Asymptoten gebrochenrationaler Funktionen bestimmen.', 'Das Verhalten nahe der Asymptote mit einseitigen Grenzwerten beschreiben.'],
        theory: 'Die Gerade x = a ist eine senkrechte Asymptote, wenn f(x) → ±∞ für x → a (mindestens von einer Seite).\n\nBei gebrochenrationalen Funktionen kommen die Nullstellen des Nenners infrage. y = 1/(x − 2): Nenner 0 bei x = 2; von links y → −∞, von rechts y → +∞.\n\nAchtung: Ist an derselben Stelle auch der Zähler 0, gibt es nach dem Kürzen evtl. keine Asymptote (nur eine Lücke). y = (x − 1)/(x² − 1) = 1/(x + 1) für x ≠ 1: Asymptote nur x = −1.',
        keyPoints: ['Kandidaten: Nenner = 0', 'f → ±∞ → senkrechte Asymptote', 'Zuerst gemeinsame Faktoren kürzen'],
        examples: [
          { example: 'Bestimmen Sie die senkrechte Asymptote von y = 1/(x − 2).', solution: 'x − 2 = 0 → x = 2; von links y → −∞, von rechts +∞.' },
          { example: 'Bestimmen Sie die senkrechten Asymptoten von y = (x + 1)/(x² − 9).', solution: 'x² − 9 = 0 → x = 3 und x = −3 (der Zähler ist dort ≠ 0).' },
        ],
        commonMistakes: [
          { mistake: 'Jede Nennernullstelle wird als Asymptote genommen.', fix: 'Prüfen, ob sie sich mit dem Zähler kürzt.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die senkrechte Asymptote von y = 5/(x + 4).', solution: 'x = −4', steps: ['x + 4 = 0.', 'x = −4.'] },
          { problem: 'Wie viele senkrechte Asymptoten hat y = (x − 1)/(x² − 1)?', solution: 'Eine: x = −1', steps: ['(x − 1)/((x − 1)(x + 1)) = 1/(x + 1) für x ≠ 1.', 'Bei x = 1 nur eine Lücke; Asymptote x = −1.'] },
          { problem: 'Bestimmen Sie die Asymptoten von y = 2x/(x − 5).', solution: 'x = 5 und y = 2', steps: ['Senkrecht: x − 5 = 0 → x = 5.', 'Waagerecht: 2/1 = 2 → y = 2.'] },
        ],
      },
    },
    // ───────── 3. Indeterminate forms
    {
      slug: 'g12-limits-continuity-indeterminate-forms',
      noVisual: 'Removing the 0/0 form by factorising or rationalising is shown step by step in the worked examples.',
      answers: {
        examples: [[['3 + 3', 6]], [['1 / (sqrt(4) + 2)', 0.25, 0, '1/4']]],
        practice: [[['2 + 2', 4]], [['3 - 2', 1]], [['1 + 1 + 1', 3]]],
      },
      al: {
        title: 'Format e pacaktuara',
        objectives: ['Të njihni formën e pacaktuar 0/0.', 'Ta eliminoni me faktorizim ose me racionalizim.'],
        theory: 'Kur zëvendësimi jep 0/0, rezultati nuk dihet ende: forma është e pacaktuar. Shpesh numëruesi dhe emëruesi kanë faktor të përbashkët (x − a).\n\nFaktorizim: (x² − 9)/(x − 3) = (x − 3)(x + 3)/(x − 3) = x + 3 → 6 kur x → 3.\nRacionalizim (me rrënjë): (√x − 2)/(x − 4) = (√x − 2)/((√x − 2)(√x + 2)) = 1/(√x + 2) → 1/4 kur x → 4.\n\nForma të tjera të pacaktuara: ∞/∞, ∞ − ∞, 0 · ∞, 1^∞.',
        keyPoints: ['0/0 → kërko faktorin (x − a)', 'Faktorizim ose racionalizim', 'Pastaj zëvendëso'],
        examples: [
          { example: 'Gjeni lim (x² − 9)/(x − 3) kur x → 3.', solution: '(x − 3)(x + 3)/(x − 3) = x + 3 → 3 + 3 = 6.' },
          { example: 'Gjeni lim (√x − 2)/(x − 4) kur x → 4.', solution: 'x − 4 = (√x − 2)(√x + 2) → 1/(√x + 2) → 1/4.' },
        ],
        commonMistakes: [
          { mistake: '0/0 = 0 ose 0/0 = 1.', fix: '0/0 nuk është numër; duhet thjeshtuar shprehja.' },
        ],
        practice: [
          { problem: 'Gjeni lim (x² − 4)/(x − 2) kur x → 2.', solution: '4', steps: ['(x − 2)(x + 2)/(x − 2) = x + 2.', '2 + 2 = 4.'] },
          { problem: 'Gjeni lim (x² − 5x + 6)/(x − 3) kur x → 3.', solution: '1', steps: ['x² − 5x + 6 = (x − 3)(x − 2).', 'x − 2 → 3 − 2 = 1.'] },
          { problem: 'Gjeni lim (x³ − 1)/(x − 1) kur x → 1.', solution: '3', steps: ['x³ − 1 = (x − 1)(x² + x + 1).', '1 + 1 + 1 = 3.'] },
        ],
      },
      en: {
        title: 'Indeterminate forms',
        objectives: ['Recognise the indeterminate form 0/0.', 'Remove it by factorising or rationalising.'],
        theory: 'When substitution gives 0/0 the answer is not yet known: the form is indeterminate. Often the numerator and denominator share a factor (x − a).\n\nFactorising: (x² − 9)/(x − 3) = (x − 3)(x + 3)/(x − 3) = x + 3 → 6 as x → 3.\nRationalising (with roots): (√x − 2)/(x − 4) = (√x − 2)/((√x − 2)(√x + 2)) = 1/(√x + 2) → 1/4 as x → 4.\n\nOther indeterminate forms: ∞/∞, ∞ − ∞, 0 · ∞, 1^∞.',
        keyPoints: ['0/0 → look for the factor (x − a)', 'Factorise or rationalise', 'Then substitute'],
        examples: [
          { example: 'Find lim (x² − 9)/(x − 3) as x → 3.', solution: '(x − 3)(x + 3)/(x − 3) = x + 3 → 3 + 3 = 6.' },
          { example: 'Find lim (√x − 2)/(x − 4) as x → 4.', solution: 'x − 4 = (√x − 2)(√x + 2) → 1/(√x + 2) → 1/4.' },
        ],
        commonMistakes: [
          { mistake: '0/0 = 0 or 0/0 = 1.', fix: '0/0 is not a number; the expression must be simplified.' },
        ],
        practice: [
          { problem: 'Find lim (x² − 4)/(x − 2) as x → 2.', solution: '4', steps: ['(x − 2)(x + 2)/(x − 2) = x + 2.', '2 + 2 = 4.'] },
          { problem: 'Find lim (x² − 5x + 6)/(x − 3) as x → 3.', solution: '1', steps: ['x² − 5x + 6 = (x − 3)(x − 2).', 'x − 2 → 3 − 2 = 1.'] },
          { problem: 'Find lim (x³ − 1)/(x − 1) as x → 1.', solution: '3', steps: ['x³ − 1 = (x − 1)(x² + x + 1).', '1 + 1 + 1 = 3.'] },
        ],
      },
      de: {
        title: 'Unbestimmte Ausdrücke',
        objectives: ['Den unbestimmten Ausdruck 0/0 erkennen.', 'Ihn durch Faktorisieren oder Erweitern beseitigen.'],
        theory: 'Ergibt das Einsetzen 0/0, ist das Ergebnis noch offen: Der Ausdruck ist unbestimmt. Oft haben Zähler und Nenner einen gemeinsamen Faktor (x − a).\n\nFaktorisieren: (x² − 9)/(x − 3) = (x − 3)(x + 3)/(x − 3) = x + 3 → 6 für x → 3.\nErweitern (bei Wurzeln): (√x − 2)/(x − 4) = (√x − 2)/((√x − 2)(√x + 2)) = 1/(√x + 2) → 1/4 für x → 4.\n\nWeitere unbestimmte Formen: ∞/∞, ∞ − ∞, 0 · ∞, 1^∞.',
        keyPoints: ['0/0 → Faktor (x − a) suchen', 'Faktorisieren oder erweitern', 'Dann einsetzen'],
        examples: [
          { example: 'Bestimmen Sie lim (x² − 9)/(x − 3) für x → 3.', solution: '(x − 3)(x + 3)/(x − 3) = x + 3 → 3 + 3 = 6.' },
          { example: 'Bestimmen Sie lim (√x − 2)/(x − 4) für x → 4.', solution: 'x − 4 = (√x − 2)(√x + 2) → 1/(√x + 2) → 1/4.' },
        ],
        commonMistakes: [
          { mistake: '0/0 = 0 oder 0/0 = 1.', fix: '0/0 ist keine Zahl; der Term muss vereinfacht werden.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie lim (x² − 4)/(x − 2) für x → 2.', solution: '4', steps: ['(x − 2)(x + 2)/(x − 2) = x + 2.', '2 + 2 = 4.'] },
          { problem: 'Bestimmen Sie lim (x² − 5x + 6)/(x − 3) für x → 3.', solution: '1', steps: ['x² − 5x + 6 = (x − 3)(x − 2).', 'x − 2 → 3 − 2 = 1.'] },
          { problem: 'Bestimmen Sie lim (x³ − 1)/(x − 1) für x → 1.', solution: '3', steps: ['x³ − 1 = (x − 1)(x² + x + 1).', '1 + 1 + 1 = 3.'] },
        ],
      },
    },
    // ───────── 4. Special limits
    {
      slug: 'g12-limits-continuity-special-limits',
      visuals: [{
        type: 'functionPlot', view: { xMin: -10, xMax: 10, yMin: -0.5, yMax: 1.3 }, height: 190,
        functions: [{ expr: 'sin(x)/x', label: 'y = sin x / x' }],
        points: [{ at: [0.001, 1], label: '→ 1' }],
        caption: alt('Kur x → 0 (në radianë), sin x / x → 1, edhe pse në x = 0 funksioni nuk është i përkufizuar.', 'As x → 0 (in radians), sin x / x → 1, although the function is not defined at x = 0.', 'Für x → 0 (im Bogenmaß) gilt sin x / x → 1, obwohl die Funktion bei x = 0 nicht definiert ist.'),
        alt: alt('Grafiku i sin x / x, që afrohet te 1 pranë x = 0.', 'The graph of sin x / x approaching 1 near x = 0.', 'Der Graph von sin x / x, der sich nahe x = 0 dem Wert 1 nähert.'),
      }],
      answers: {
        examples: [[['sin(5e-6) / 1e-6', 5, 1e-6]], [['(1 - cos(1e-4)) / 1e-8', 0.5, 1e-4, '1/2']]],
        practice: [[['sin(3e-6) / (2e-6)', 1.5, 1e-6, '3/2']], [['tan(1e-6) / 1e-6', 1, 1e-6]], [['(exp(2e-8) - 1) / 1e-8', 2, 1e-5]]],
      },
      al: {
        title: 'Limitet e rëndësishme',
        objectives: ['Të përdorni lim sin x / x = 1 kur x → 0 (në radianë).', 'Të llogaritni limite që sillen në limitet e rëndësishme me e.'],
        theory: 'Limitet e rëndësishme (x → 0, këndet në radianë):\n• lim sin x / x = 1;\n• lim tg x / x = 1;\n• lim (1 − cos x)/x² = 1/2;\n• lim (eˣ − 1)/x = 1 dhe lim (1 + x)^(1/x) = e.\n\nI sjellim shprehjet në këto forma: sin(5x)/x = 5 · sin(5x)/(5x) → 5 · 1 = 5.',
        keyPoints: ['sin x / x → 1 (radianë)', 'sin(kx)/x → k', '(eˣ − 1)/x → 1'],
        examples: [
          { example: 'Gjeni lim sin(5x)/x kur x → 0.', solution: '5 · sin(5x)/(5x) → 5 · 1 = 5.' },
          { example: 'Gjeni lim (1 − cos x)/x² kur x → 0.', solution: 'Limit i rëndësishëm: 1/2.' },
        ],
        commonMistakes: [
          { mistake: 'sin(5x)/x → 1.', fix: 'Duhet 5x në emërues: shumëzoni dhe pjesëtoni me 5 → 5.' },
          { mistake: 'Llogaritet me makinë në gradë.', fix: 'Limitet e rëndësishme vlejnë në radianë.' },
        ],
        practice: [
          { problem: 'Gjeni lim sin(3x)/(2x) kur x → 0.', solution: '3/2', steps: ['= 3/2 · sin(3x)/(3x).', '→ 3/2 · 1 = 3/2.'] },
          { problem: 'Gjeni lim tg x / x kur x → 0.', solution: '1', steps: ['tg x / x = (sin x / x) · (1/cos x).', '→ 1 · 1 = 1.'] },
          { problem: 'Gjeni lim (e^(2x) − 1)/x kur x → 0.', solution: '2', steps: ['= 2 · (e^(2x) − 1)/(2x).', '→ 2 · 1 = 2.'] },
        ],
      },
      en: {
        title: 'Standard limits',
        objectives: ['Use lim sin x / x = 1 as x → 0 (in radians).', 'Work out limits that reduce to the standard limits with e.'],
        theory: 'Standard limits (x → 0, angles in radians):\n• lim sin x / x = 1;\n• lim tan x / x = 1;\n• lim (1 − cos x)/x² = 1/2;\n• lim (eˣ − 1)/x = 1 and lim (1 + x)^(1/x) = e.\n\nRewrite expressions into these forms: sin(5x)/x = 5 · sin(5x)/(5x) → 5 · 1 = 5.',
        keyPoints: ['sin x / x → 1 (radians)', 'sin(kx)/x → k', '(eˣ − 1)/x → 1'],
        examples: [
          { example: 'Find lim sin(5x)/x as x → 0.', solution: '5 · sin(5x)/(5x) → 5 · 1 = 5.' },
          { example: 'Find lim (1 − cos x)/x² as x → 0.', solution: 'A standard limit: 1/2.' },
        ],
        commonMistakes: [
          { mistake: 'sin(5x)/x → 1.', fix: 'You need 5x underneath: multiply and divide by 5 → 5.' },
          { mistake: 'The calculator is in degrees.', fix: 'The standard limits hold in radians.' },
        ],
        practice: [
          { problem: 'Find lim sin(3x)/(2x) as x → 0.', solution: '3/2', steps: ['= 3/2 · sin(3x)/(3x).', '→ 3/2 · 1 = 3/2.'] },
          { problem: 'Find lim tan x / x as x → 0.', solution: '1', steps: ['tan x / x = (sin x / x) · (1/cos x).', '→ 1 · 1 = 1.'] },
          { problem: 'Find lim (e^(2x) − 1)/x as x → 0.', solution: '2', steps: ['= 2 · (e^(2x) − 1)/(2x).', '→ 2 · 1 = 2.'] },
        ],
      },
      de: {
        title: 'Wichtige Grenzwerte',
        objectives: ['lim sin x / x = 1 für x → 0 (im Bogenmaß) anwenden.', 'Grenzwerte berechnen, die sich auf wichtige Grenzwerte mit e zurückführen lassen.'],
        theory: 'Wichtige Grenzwerte (x → 0, Winkel im Bogenmaß):\n• lim sin x / x = 1;\n• lim tan x / x = 1;\n• lim (1 − cos x)/x² = 1/2;\n• lim (eˣ − 1)/x = 1 und lim (1 + x)^(1/x) = e.\n\nMan formt Terme auf diese Formen um: sin(5x)/x = 5 · sin(5x)/(5x) → 5 · 1 = 5.',
        keyPoints: ['sin x / x → 1 (Bogenmaß)', 'sin(kx)/x → k', '(eˣ − 1)/x → 1'],
        examples: [
          { example: 'Bestimmen Sie lim sin(5x)/x für x → 0.', solution: '5 · sin(5x)/(5x) → 5 · 1 = 5.' },
          { example: 'Bestimmen Sie lim (1 − cos x)/x² für x → 0.', solution: 'Wichtiger Grenzwert: 1/2.' },
        ],
        commonMistakes: [
          { mistake: 'sin(5x)/x → 1.', fix: 'Unten muss 5x stehen: mit 5 erweitern → 5.' },
          { mistake: 'Der Taschenrechner steht auf Grad.', fix: 'Die wichtigen Grenzwerte gelten im Bogenmaß.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie lim sin(3x)/(2x) für x → 0.', solution: '3/2', steps: ['= 3/2 · sin(3x)/(3x).', '→ 3/2 · 1 = 3/2.'] },
          { problem: 'Bestimmen Sie lim tan x / x für x → 0.', solution: '1', steps: ['tan x / x = (sin x / x) · (1/cos x).', '→ 1 · 1 = 1.'] },
          { problem: 'Bestimmen Sie lim (e^(2x) − 1)/x für x → 0.', solution: '2', steps: ['= 2 · (e^(2x) − 1)/(2x).', '→ 2 · 1 = 2.'] },
        ],
      },
    },
    // ───────── 5. Continuity
    {
      slug: 'g12-limits-continuity-continuity',
      visuals: [{
        type: 'functionPlot', view: { xMin: -2, xMax: 3, yMin: -1, yMax: 8 }, height: 200,
        functions: [{ expr: 'x + 2', domain: [-2, 1], label: 'x + 2' }, { expr: '3*x', domain: [1, 2.6], color: 'secondary', label: '3x' }],
        points: [{ at: [1, 3], label: '(1, 3)' }],
        caption: alt('Me a = 2 të dyja degët takohen te (1, 3): funksioni është i vazhdueshëm.', 'With a = 2 both branches meet at (1, 3): the function is continuous.', 'Mit a = 2 treffen sich beide Äste in (1 | 3): Die Funktion ist stetig.'),
        alt: alt('Funksion me dy degë, x + 2 majtas dhe 3x djathtas, që takohen në (1, 3).', 'A two-piece function, x + 2 on the left and 3x on the right, meeting at (1, 3).', 'Abschnittsweise Funktion, links x + 2, rechts 3x, die sich in (1 | 3) treffen.'),
      }],
      answers: {
        examples: [[['3*1 - 1', 2]], [['2 + 2', 4]]],
        practice: [[['8 / 4', 2]], 'text', 'text'],
      },
      al: {
        title: 'Vazhdueshmëria',
        objectives: ['Të kontrolloni vazhdueshmërinë në një pikë me tri kushtet.', 'Të gjeni parametrin që e bën të vazhdueshëm një funksion me degë.'],
        theory: 'f është i vazhdueshëm në a kur:\n1. f(a) ekziston;\n2. lim f(x) kur x → a ekziston;\n3. lim f(x) = f(a).\nGrafiku vizatohet pa e ngritur lapsin.\n\nPolinomet, eˣ, sin, cos janë të vazhdueshëm kudo; funksionet racionale kudo përveç zerove të emëruesit.\n\nTe funksioni me degë barazojmë limitet nga të dy anët: f(x) = x + a për x < 1, f(x) = 3x për x ≥ 1 → 1 + a = 3 → a = 2.',
        keyPoints: ['lim f(x) = f(a)', 'Funksion me degë: limiti majtas = djathtas = f(a)', 'Racionalët: jo te zerot e emëruesit'],
        examples: [
          { example: 'Për çfarë a është f i vazhdueshëm: f(x) = x + a për x < 1, f(x) = 3x për x ≥ 1?', solution: 'Majtas 1 + a, djathtas f(1) = 3: 1 + a = 3 → a = 2.' },
          { example: 'f(x) = (x² − 4)/(x − 2) nuk është i përkufizuar te 2. Çfarë vlere duhet f(2) që të jetë i vazhdueshëm?', solution: 'lim = x + 2 → 4, pra f(2) = 4.' },
        ],
        commonMistakes: [
          { mistake: 'Kontrollohet vetëm që f(a) ekziston.', fix: 'Duhet edhe limiti, dhe ai duhet të jetë i barabartë me f(a).' },
        ],
        practice: [
          { problem: 'f(x) = kx² për x ≤ 2 dhe f(x) = x + 6 për x > 2. Gjeni k që f të jetë i vazhdueshëm.', solution: 'k = 2', steps: ['f(2) = 4k; nga e djathta 2 + 6 = 8.', '4k = 8 → k = 2.'] },
          { problem: 'A është f(x) = 1/x i vazhdueshëm në x = 0?', solution: 'Jo', steps: ['f(0) nuk ekziston (pjesëtim me 0).', 'Kushti i parë nuk plotësohet.'] },
          { problem: 'A është f(x) = x³ − 2x + 1 i vazhdueshëm në x = 5?', solution: 'Po', steps: ['Polinomet janë të vazhdueshëm kudo.', 'lim f(x) = f(5) për x → 5.'] },
        ],
      },
      en: {
        title: 'Continuity',
        objectives: ['Check continuity at a point with the three conditions.', 'Find the parameter that makes a piecewise function continuous.'],
        theory: 'f is continuous at a when:\n1. f(a) exists;\n2. lim f(x) as x → a exists;\n3. lim f(x) = f(a).\nThe graph can be drawn without lifting the pencil.\n\nPolynomials, eˣ, sin and cos are continuous everywhere; rational functions everywhere except at the zeros of the denominator.\n\nFor a piecewise function make the limits from both sides equal: f(x) = x + a for x < 1, f(x) = 3x for x ≥ 1 → 1 + a = 3 → a = 2.',
        keyPoints: ['lim f(x) = f(a)', 'Piecewise: left limit = right limit = f(a)', 'Rational: not at zeros of the denominator'],
        examples: [
          { example: 'For which a is f continuous: f(x) = x + a for x < 1, f(x) = 3x for x ≥ 1?', solution: 'Left 1 + a, right f(1) = 3: 1 + a = 3 → a = 2.' },
          { example: 'f(x) = (x² − 4)/(x − 2) is not defined at 2. What value must f(2) have for continuity?', solution: 'lim = x + 2 → 4, so f(2) = 4.' },
        ],
        commonMistakes: [
          { mistake: 'Only the existence of f(a) is checked.', fix: 'The limit must exist too, and equal f(a).' },
        ],
        practice: [
          { problem: 'f(x) = kx² for x ≤ 2 and f(x) = x + 6 for x > 2. Find k so that f is continuous.', solution: 'k = 2', steps: ['f(2) = 4k; from the right 2 + 6 = 8.', '4k = 8 → k = 2.'] },
          { problem: 'Is f(x) = 1/x continuous at x = 0?', solution: 'No', steps: ['f(0) does not exist (division by 0).', 'The first condition fails.'] },
          { problem: 'Is f(x) = x³ − 2x + 1 continuous at x = 5?', solution: 'Yes', steps: ['Polynomials are continuous everywhere.', 'lim f(x) = f(5) as x → 5.'] },
        ],
      },
      de: {
        title: 'Stetigkeit',
        objectives: ['Stetigkeit an einer Stelle mit den drei Bedingungen prüfen.', 'Den Parameter bestimmen, der eine abschnittsweise Funktion stetig macht.'],
        theory: 'f ist stetig an der Stelle a, wenn:\n1. f(a) existiert;\n2. lim f(x) für x → a existiert;\n3. lim f(x) = f(a).\nDer Graph lässt sich ohne Absetzen zeichnen.\n\nPolynome, eˣ, sin und cos sind überall stetig; gebrochenrationale Funktionen überall außer an den Nennernullstellen.\n\nBei abschnittsweise definierten Funktionen setzt man die Grenzwerte beider Seiten gleich: f(x) = x + a für x < 1, f(x) = 3x für x ≥ 1 → 1 + a = 3 → a = 2.',
        keyPoints: ['lim f(x) = f(a)', 'Abschnittsweise: links = rechts = f(a)', 'Gebrochenrational: nicht an Nennernullstellen'],
        examples: [
          { example: 'Für welches a ist f stetig: f(x) = x + a für x < 1, f(x) = 3x für x ≥ 1?', solution: 'Links 1 + a, rechts f(1) = 3: 1 + a = 3 → a = 2.' },
          { example: 'f(x) = (x² − 4)/(x − 2) ist bei 2 nicht definiert. Welchen Wert muss f(2) haben, damit f stetig ist?', solution: 'lim = x + 2 → 4, also f(2) = 4.' },
        ],
        commonMistakes: [
          { mistake: 'Es wird nur geprüft, ob f(a) existiert.', fix: 'Auch der Grenzwert muss existieren und gleich f(a) sein.' },
        ],
        practice: [
          { problem: 'f(x) = kx² für x ≤ 2 und f(x) = x + 6 für x > 2. Bestimmen Sie k so, dass f stetig ist.', solution: 'k = 2', steps: ['f(2) = 4k; von rechts 2 + 6 = 8.', '4k = 8 → k = 2.'] },
          { problem: 'Ist f(x) = 1/x bei x = 0 stetig?', solution: 'Nein', steps: ['f(0) existiert nicht (Division durch 0).', 'Die erste Bedingung ist verletzt.'] },
          { problem: 'Ist f(x) = x³ − 2x + 1 bei x = 5 stetig?', solution: 'Ja', steps: ['Polynome sind überall stetig.', 'lim f(x) = f(5) für x → 5.'] },
        ],
      },
    },
  ],
};
