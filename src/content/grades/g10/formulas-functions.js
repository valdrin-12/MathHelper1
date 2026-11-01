// Grade 10 · Theme 6: Formulas and functions (January–February)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g10-formulas-functions',
  i18n: {
    al: { title: 'Formulat dhe funksionet', description: 'Zëvendësimi dhe veçimi në formula, shënimi f(x), identitetet dhe faktorizimi i trinomeve ax² + bx + c.' },
    en: { title: 'Formulas and functions', description: 'Substituting into and rearranging formulas, function notation f(x), identities and factorising ax² + bx + c.' },
    de: { title: 'Formeln und Funktionen', description: 'Einsetzen in Formeln und Umstellen, Funktionsschreibweise f(x), Identitäten und Faktorisieren von ax² + bx + c.' },
  },
  lessons: [
    // ───────── 1. Formulas
    {
      slug: 'g10-formulas-functions-formulas',
      noVisual: 'Substituting and rearranging are shown step by step in the worked examples.',
      answers: {
        examples: ['text', [['(20 - 5) / 3', 5]]],
        practice: [[['sqrt(50 / pi)', 3.99, 0.005, '3.99']], [['sqrt(2 * 100 / 8)', 5]], [['2 * 3 + 0.5 * 4 * 3^2', 24]]],
      },
      al: {
        title: 'Formulat',
        objectives: ['Të zëvendësoni vlera në formula me fuqi dhe thyesa.', 'Të veçoni një shkronjë, edhe kur ajo është në katror.'],
        theory: 'Zëvendësimi: vendosni vlerat në kllapa dhe ndiqni radhën e veprimeve. Te s = ut + ½at² me u = 2, t = 3, a = 4: s = 6 + ½ · 4 · 9 = 24.\n\nVeçimi: kryeni veprimet e kundërta në radhë të kundërt. v = u + at → v − u = at → a = (v − u)/t.\n\nKur shkronja është në katror, në fund nxjerrim rrënjën: A = πr² → r² = A/π → r = √(A/π); E = ½mv² → v = √(2E/m) (për madhësi pozitive).',
        keyPoints: ['Zëvendësimi: vlerat në kllapa', 'Veçimi: veprime të kundërta, radhë e kundërt', 'Katror → në fund rrënja'],
        examples: [
          { example: 'Nga v = u + at shprehni a.', solution: 'v − u = at → a = (v − u)/t.' },
          { example: 'Gjeni a për v = 20, u = 5, t = 3.', solution: 'a = (20 − 5)/3 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'Nga v = u + at: a = v − u − t', fix: 't është faktor: pjesëtohet, nuk zbritet: a = (v − u)/t.' },
          { mistake: 'Nga A = πr²: r = A/π', fix: 'Kjo është r²; duhet edhe rrënja: r = √(A/π).' },
        ],
        practice: [
          { problem: 'Rrethi ka sipërfaqe 50 cm². Gjeni rrezen (dy dhjetore).', solution: '≈ 3,99 cm', steps: ['r = √(A/π) = √(50/π).', '≈ 3,99 cm.'] },
          { problem: 'E = ½mv². Gjeni v për E = 100 dhe m = 8.', solution: '5', steps: ['v = √(2E/m) = √(200/8).', '= √25 = 5.'] },
          { problem: 's = ut + ½at². Gjeni s për u = 2, t = 3, a = 4.', solution: '24', steps: ['2 · 3 + ½ · 4 · 3².', '6 + 18 = 24.'] },
        ],
      },
      en: {
        title: 'Formulas',
        objectives: ['Substitute values into formulas with powers and fractions.', 'Change the subject of a formula, even when it is squared.'],
        theory: 'Substituting: put the values in brackets and follow the order of operations. For s = ut + ½at² with u = 2, t = 3, a = 4: s = 6 + ½ · 4 · 9 = 24.\n\nChanging the subject: do the inverse operations in reverse order. v = u + at → v − u = at → a = (v − u)/t.\n\nWhen the letter is squared, take the root at the end: A = πr² → r² = A/π → r = √(A/π); E = ½mv² → v = √(2E/m) (for positive quantities).',
        keyPoints: ['Substituting: values in brackets', 'Rearranging: inverse operations, reverse order', 'Squared → root at the end'],
        examples: [
          { example: 'Make a the subject of v = u + at.', solution: 'v − u = at → a = (v − u)/t.' },
          { example: 'Find a for v = 20, u = 5, t = 3.', solution: 'a = (20 − 5)/3 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'From v = u + at: a = v − u − t', fix: 't is a factor: divide, do not subtract: a = (v − u)/t.' },
          { mistake: 'From A = πr²: r = A/π', fix: 'That is r²; take the root as well: r = √(A/π).' },
        ],
        practice: [
          { problem: 'A circle has area 50 cm². Find its radius (two decimal places).', solution: '≈ 3.99 cm', steps: ['r = √(A/π) = √(50/π).', '≈ 3.99 cm.'] },
          { problem: 'E = ½mv². Find v for E = 100 and m = 8.', solution: '5', steps: ['v = √(2E/m) = √(200/8).', '= √25 = 5.'] },
          { problem: 's = ut + ½at². Find s for u = 2, t = 3, a = 4.', solution: '24', steps: ['2 · 3 + ½ · 4 · 3².', '6 + 18 = 24.'] },
        ],
      },
      de: {
        title: 'Formeln',
        objectives: ['Werte in Formeln mit Potenzen und Brüchen einsetzen.', 'Formeln umstellen, auch wenn die Variable quadriert ist.'],
        theory: 'Einsetzen: Werte in Klammern einsetzen und die Rechenreihenfolge beachten. Bei s = ut + ½at² mit u = 2, t = 3, a = 4: s = 6 + ½ · 4 · 9 = 24.\n\nUmstellen: Umkehroperationen in umgekehrter Reihenfolge. v = u + at → v − u = at → a = (v − u)/t.\n\nIst die Variable quadriert, zieht man am Ende die Wurzel: A = πr² → r² = A/π → r = √(A/π); E = ½mv² → v = √(2E/m) (für positive Größen).',
        keyPoints: ['Einsetzen: Werte in Klammern', 'Umstellen: Umkehroperationen, umgekehrte Reihenfolge', 'Quadrat → am Ende Wurzel'],
        examples: [
          { example: 'Stellen Sie v = u + at nach a um.', solution: 'v − u = at → a = (v − u)/t.' },
          { example: 'Bestimmen Sie a für v = 20, u = 5, t = 3.', solution: 'a = (20 − 5)/3 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'Aus v = u + at: a = v − u − t', fix: 't ist ein Faktor: teilen, nicht subtrahieren: a = (v − u)/t.' },
          { mistake: 'Aus A = πr²: r = A/π', fix: 'Das ist r²; zusätzlich die Wurzel ziehen: r = √(A/π).' },
        ],
        practice: [
          { problem: 'Ein Kreis hat 50 cm² Fläche. Bestimmen Sie den Radius (zwei Dezimalen).', solution: '≈ 3,99 cm', steps: ['r = √(A/π) = √(50/π).', '≈ 3,99 cm.'] },
          { problem: 'E = ½mv². Bestimmen Sie v für E = 100 und m = 8.', solution: '5', steps: ['v = √(2E/m) = √(200/8).', '= √25 = 5.'] },
          { problem: 's = ut + ½at². Bestimmen Sie s für u = 2, t = 3, a = 4.', solution: '24', steps: ['2 · 3 + ½ · 4 · 3².', '6 + 18 = 24.'] },
        ],
      },
    },

    // ───────── 2. Functions
    {
      slug: 'g10-formulas-functions-functions',
      visuals: [{
        type: 'functionPlot', view: { xMin: -2, xMax: 5, yMin: -6, yMax: 12 }, height: 220,
        functions: [{ expr: '3*x - 2', label: 'f(x) = 3x − 2' }],
        points: [{ at: [4, 10], label: '(4, 10)' }, { at: [0, -2], label: '(0, −2)' }],
        caption: alt('f(4) = 10 do të thotë: pika (4, 10) është në grafik. Për f(x) = 10 lexojmë x = 4.', 'f(4) = 10 means the point (4, 10) is on the graph. For f(x) = 10 we read off x = 4.', 'f(4) = 10 heißt: Der Punkt (4 | 10) liegt auf dem Graphen. Für f(x) = 10 liest man x = 4 ab.'),
        alt: alt('Grafiku i f(x) = 3x − 2 me pikat (0, −2) dhe (4, 10).', 'Graph of f(x) = 3x − 2 with the points (0, −2) and (4, 10).', 'Graph von f(x) = 3x − 2 mit den Punkten (0 | −2) und (4 | 10).'),
      }],
      answers: {
        examples: [[['3 * 4 - 2', 10]], [['(10 + 2) / 3', 4]]],
        practice: [[['(-3)^2 - 1', 8]], [['(-11 + 2) / 3', -3]], 'text'],
      },
      al: {
        title: 'Funksionet dhe shënimi f(x)',
        objectives: ['Të njehsoni vlerën e funksionit f(a).', 'Të zgjidhni f(x) = k dhe të zëvendësoni shprehje në funksion.'],
        theory: 'Funksioni f i shoqëron çdo x-i një vlerë të vetme f(x). Shënimi f(x) = 3x − 2 do të thotë: "merr x, shumëzoje me 3, zbrit 2".\n\nf(4) është vlera për x = 4: f(4) = 12 − 2 = 10; pika (4, 10) është në grafik. Për të gjetur x kur f(x) = 10 zgjidhim ekuacionin 3x − 2 = 10 → x = 4.\n\nMund të zëvendësojmë edhe shprehje: f(a + 1) = 3(a + 1) − 2 = 3a + 1. Për g(x) = x² − 1, g(−3) = 9 − 1 = 8 (numri negativ në kllapa).',
        keyPoints: ['f(a): zëvendëso x = a', 'f(x) = k: zgjidh ekuacionin', 'Negativët në kllapa: (−3)²'],
        examples: [
          { example: 'f(x) = 3x − 2. Gjeni f(4).', solution: 'f(4) = 3 · 4 − 2 = 10.' },
          { example: 'Për cilin x është f(x) = 10?', solution: '3x − 2 = 10 → 3x = 12 → x = 4.' },
        ],
        commonMistakes: [
          { mistake: 'f(4) = 3x − 2 · 4', fix: 'Zëvendësohet x me 4 në të gjithë shprehjen: 3 · 4 − 2.' },
          { mistake: 'g(−3) = −3² − 1 = −10', fix: '(−3)² = 9, pra g(−3) = 8.' },
        ],
        practice: [
          { problem: 'g(x) = x² − 1. Gjeni g(−3).', solution: '8', steps: ['(−3)² − 1.', '9 − 1 = 8.'] },
          { problem: 'f(x) = 3x − 2. Për cilin x është f(x) = −11?', solution: 'x = −3', steps: ['3x − 2 = −11 → 3x = −9.', 'x = −3.'] },
          { problem: 'f(x) = 3x − 2. Shkruani f(a + 1).', solution: '3a + 1', steps: ['3(a + 1) − 2.', '= 3a + 1.'] },
        ],
      },
      en: {
        title: 'Functions and f(x) notation',
        objectives: ['Work out the value of a function f(a).', 'Solve f(x) = k and substitute expressions into a function.'],
        theory: 'A function f gives each x exactly one value f(x). The notation f(x) = 3x − 2 means: "take x, multiply by 3, subtract 2".\n\nf(4) is the value at x = 4: f(4) = 12 − 2 = 10; the point (4, 10) is on the graph. To find x when f(x) = 10, solve 3x − 2 = 10 → x = 4.\n\nWe can also substitute expressions: f(a + 1) = 3(a + 1) − 2 = 3a + 1. For g(x) = x² − 1, g(−3) = 9 − 1 = 8 (the negative number in brackets).',
        keyPoints: ['f(a): substitute x = a', 'f(x) = k: solve the equation', 'Negatives in brackets: (−3)²'],
        examples: [
          { example: 'f(x) = 3x − 2. Find f(4).', solution: 'f(4) = 3 · 4 − 2 = 10.' },
          { example: 'For which x is f(x) = 10?', solution: '3x − 2 = 10 → 3x = 12 → x = 4.' },
        ],
        commonMistakes: [
          { mistake: 'f(4) = 3x − 2 · 4', fix: 'Replace x with 4 throughout: 3 · 4 − 2.' },
          { mistake: 'g(−3) = −3² − 1 = −10', fix: '(−3)² = 9, so g(−3) = 8.' },
        ],
        practice: [
          { problem: 'g(x) = x² − 1. Find g(−3).', solution: '8', steps: ['(−3)² − 1.', '9 − 1 = 8.'] },
          { problem: 'f(x) = 3x − 2. For which x is f(x) = −11?', solution: 'x = −3', steps: ['3x − 2 = −11 → 3x = −9.', 'x = −3.'] },
          { problem: 'f(x) = 3x − 2. Write f(a + 1).', solution: '3a + 1', steps: ['3(a + 1) − 2.', '= 3a + 1.'] },
        ],
      },
      de: {
        title: 'Funktionen und die Schreibweise f(x)',
        objectives: ['Funktionswerte f(a) berechnen.', 'f(x) = k lösen und Terme in eine Funktion einsetzen.'],
        theory: 'Eine Funktion f ordnet jedem x genau einen Wert f(x) zu. f(x) = 3x − 2 heißt: „x nehmen, mal 3, minus 2“.\n\nf(4) ist der Wert bei x = 4: f(4) = 12 − 2 = 10; der Punkt (4 | 10) liegt auf dem Graphen. Um x mit f(x) = 10 zu finden, löst man 3x − 2 = 10 → x = 4.\n\nMan kann auch Terme einsetzen: f(a + 1) = 3(a + 1) − 2 = 3a + 1. Für g(x) = x² − 1 ist g(−3) = 9 − 1 = 8 (negative Zahl in Klammern).',
        keyPoints: ['f(a): x = a einsetzen', 'f(x) = k: Gleichung lösen', 'Negative Zahlen in Klammern: (−3)²'],
        examples: [
          { example: 'f(x) = 3x − 2. Bestimmen Sie f(4).', solution: 'f(4) = 3 · 4 − 2 = 10.' },
          { example: 'Für welches x ist f(x) = 10?', solution: '3x − 2 = 10 → 3x = 12 → x = 4.' },
        ],
        commonMistakes: [
          { mistake: 'f(4) = 3x − 2 · 4', fix: 'x überall durch 4 ersetzen: 3 · 4 − 2.' },
          { mistake: 'g(−3) = −3² − 1 = −10', fix: '(−3)² = 9, also g(−3) = 8.' },
        ],
        practice: [
          { problem: 'g(x) = x² − 1. Bestimmen Sie g(−3).', solution: '8', steps: ['(−3)² − 1.', '9 − 1 = 8.'] },
          { problem: 'f(x) = 3x − 2. Für welches x ist f(x) = −11?', solution: 'x = −3', steps: ['3x − 2 = −11 → 3x = −9.', 'x = −3.'] },
          { problem: 'f(x) = 3x − 2. Geben Sie f(a + 1) an.', solution: '3a + 1', steps: ['3(a + 1) − 2.', '= 3a + 1.'] },
        ],
      },
    },

    // ───────── 3. Identities
    {
      slug: 'g10-formulas-functions-identities',
      noVisual: 'Proving identities and comparing coefficients is shown step by step in the worked examples.',
      answers: {
        examples: ['text', [['6 / 2', 3], ['11 - 9', 2]]],
        practice: ['text', 'text', [['5', 5]]],
      },
      al: {
        title: 'Identitetet',
        objectives: ['Të dalloni identitetin nga ekuacioni.', 'Të vërtetoni identitete dhe të gjeni konstante duke krahasuar koeficientët.'],
        theory: 'Identiteti vlen për çdo vlerë të ndryshores (p.sh. 3(x + 2) = 3x + 6), ndërsa ekuacioni vlen vetëm për disa vlera (x + 3 = 7 vetëm për x = 4). Shpesh identiteti shënohet me ≡.\n\nPër të vërtetuar një identitet, thjeshtojmë njërën anë derisa të dalë tjetra: (a + b)² − (a − b)² = a² + 2ab + b² − a² + 2ab − b² = 4ab.\n\nKrahasimi i koeficientëve: (x + p)² + q = x² + 2px + p² + q. Që të jetë x² + 6x + 11: 2p = 6 → p = 3, dhe 9 + q = 11 → q = 2.',
        keyPoints: ['Identitet: vlen për çdo x (≡)', 'Vërtetim: thjeshtoni njërën anë', 'Krahasoni koeficientët e fuqive të njëjta'],
        examples: [
          { example: 'Vërtetoni se (a + b)² − (a − b)² ≡ 4ab.', solution: 'a² + 2ab + b² − (a² − 2ab + b²) = 4ab.' },
          { example: 'Gjeni p dhe q te (x + p)² + q ≡ x² + 6x + 11.', solution: '2p = 6 → p = 3; p² + q = 11 → q = 2.' },
        ],
        commonMistakes: [
          { mistake: 'Identiteti "vërtetohet" me një vlerë të vetme.', fix: 'Një vlerë nuk mjafton; duhet thjeshtim i përgjithshëm.' },
        ],
        practice: [
          { problem: 'Vërtetoni se (n + 1)² − n² ≡ 2n + 1.', solution: 'n² + 2n + 1 − n² = 2n + 1', steps: ['Zbërtheni (n + 1)².', 'Thjeshtoni: 2n + 1.'] },
          { problem: 'A është 3(x + 2) = 3x + 6 identitet?', solution: 'Po', steps: ['Zbërtheni anën e majtë: 3x + 6.', 'Të dyja anët janë të njëjta për çdo x.'] },
          { problem: 'Gjeni a te a(x − 2) ≡ 5x − 10.', solution: 'a = 5', steps: ['ax − 2a ≡ 5x − 10.', 'a = 5.'] },
        ],
      },
      en: {
        title: 'Identities',
        objectives: ['Tell an identity from an equation.', 'Prove identities and find constants by comparing coefficients.'],
        theory: 'An identity holds for every value of the variable (e.g. 3(x + 2) = 3x + 6), an equation only for some values (x + 3 = 7 only for x = 4). An identity is often written with ≡.\n\nTo prove an identity, simplify one side until you get the other: (a + b)² − (a − b)² = a² + 2ab + b² − a² + 2ab − b² = 4ab.\n\nComparing coefficients: (x + p)² + q = x² + 2px + p² + q. For it to be x² + 6x + 11: 2p = 6 → p = 3, and 9 + q = 11 → q = 2.',
        keyPoints: ['Identity: true for every x (≡)', 'Proof: simplify one side', 'Compare coefficients of equal powers'],
        examples: [
          { example: 'Prove that (a + b)² − (a − b)² ≡ 4ab.', solution: 'a² + 2ab + b² − (a² − 2ab + b²) = 4ab.' },
          { example: 'Find p and q in (x + p)² + q ≡ x² + 6x + 11.', solution: '2p = 6 → p = 3; p² + q = 11 → q = 2.' },
        ],
        commonMistakes: [
          { mistake: 'An identity is "proved" with one value.', fix: 'One value is not enough; a general simplification is needed.' },
        ],
        practice: [
          { problem: 'Prove that (n + 1)² − n² ≡ 2n + 1.', solution: 'n² + 2n + 1 − n² = 2n + 1', steps: ['Expand (n + 1)².', 'Simplify: 2n + 1.'] },
          { problem: 'Is 3(x + 2) = 3x + 6 an identity?', solution: 'Yes', steps: ['Expand the left side: 3x + 6.', 'Both sides are the same for every x.'] },
          { problem: 'Find a in a(x − 2) ≡ 5x − 10.', solution: 'a = 5', steps: ['ax − 2a ≡ 5x − 10.', 'a = 5.'] },
        ],
      },
      de: {
        title: 'Identitäten',
        objectives: ['Identitäten von Gleichungen unterscheiden.', 'Identitäten beweisen und Konstanten durch Koeffizientenvergleich bestimmen.'],
        theory: 'Eine Identität gilt für jeden Wert der Variablen (z. B. 3(x + 2) = 3x + 6), eine Gleichung nur für bestimmte Werte (x + 3 = 7 nur für x = 4). Identitäten schreibt man oft mit ≡.\n\nZum Beweis vereinfacht man eine Seite, bis die andere entsteht: (a + b)² − (a − b)² = a² + 2ab + b² − a² + 2ab − b² = 4ab.\n\nKoeffizientenvergleich: (x + p)² + q = x² + 2px + p² + q. Damit es x² + 6x + 11 ist: 2p = 6 → p = 3, und 9 + q = 11 → q = 2.',
        keyPoints: ['Identität: gilt für jedes x (≡)', 'Beweis: eine Seite vereinfachen', 'Koeffizienten gleicher Potenzen vergleichen'],
        examples: [
          { example: 'Beweisen Sie (a + b)² − (a − b)² ≡ 4ab.', solution: 'a² + 2ab + b² − (a² − 2ab + b²) = 4ab.' },
          { example: 'Bestimmen Sie p und q in (x + p)² + q ≡ x² + 6x + 11.', solution: '2p = 6 → p = 3; p² + q = 11 → q = 2.' },
        ],
        commonMistakes: [
          { mistake: 'Eine Identität mit einem einzigen Wert „beweisen“.', fix: 'Ein Wert genügt nicht; man braucht eine allgemeine Umformung.' },
        ],
        practice: [
          { problem: 'Beweisen Sie (n + 1)² − n² ≡ 2n + 1.', solution: 'n² + 2n + 1 − n² = 2n + 1', steps: ['(n + 1)² ausmultiplizieren.', 'Vereinfachen: 2n + 1.'] },
          { problem: 'Ist 3(x + 2) = 3x + 6 eine Identität?', solution: 'Ja', steps: ['Linke Seite ausmultiplizieren: 3x + 6.', 'Beide Seiten sind für jedes x gleich.'] },
          { problem: 'Bestimmen Sie a in a(x − 2) ≡ 5x − 10.', solution: 'a = 5', steps: ['ax − 2a ≡ 5x − 10.', 'a = 5.'] },
        ],
      },
    },

    // ───────── 4. Factorising ax² + bx + c
    {
      slug: 'g10-formulas-functions-factoring',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Hapi', 'Step', 'Schritt'), cells: ['2x² + 7x + 3', 'a · c = 6', '6 + 1 = 7', '2x² + 6x + x + 3', '(2x + 1)(x + 3)'] },
          { head: alt('Shënim', 'Note', 'Hinweis'), cells: [alt('trinomi', 'trinomial', 'Trinom'), alt('prodhimi', 'product', 'Produkt'), alt('shuma = b', 'sum = b', 'Summe = b'), alt('ndajmë 7x', 'split 7x', '7x aufteilen'), alt('grupojmë', 'group', 'gruppieren')] },
        ],
        highlight: [[0, 4]],
        alt: alt('Metoda a · c: 2x² + 7x + 3 → numrat 6 dhe 1 → (2x + 1)(x + 3).', 'The a · c method: 2x² + 7x + 3 → numbers 6 and 1 → (2x + 1)(x + 3).', 'Die a · c-Methode: 2x² + 7x + 3 → Zahlen 6 und 1 → (2x + 1)(x + 3).'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', 'text'],
      },
      al: {
        title: 'Faktorizimi i ax² + bx + c',
        objectives: ['Të faktorizoni trinome me koeficient a ≠ 1 me metodën a · c.', 'Të kontrolloni faktorizimin duke zbërthyer.'],
        theory: 'Metoda a · c: (1) llogaritni a · c; (2) gjeni dy numra me prodhim a · c dhe shumë b; (3) ndani kufizën bx me këta numra; (4) faktorizoni me grupim.\n\n2x² + 7x + 3: a · c = 6, numrat 6 dhe 1 (6 + 1 = 7). 2x² + 6x + x + 3 = 2x(x + 3) + (x + 3) = (2x + 1)(x + 3).\n\n3x² − 10x + 8: a · c = 24, numrat −6 dhe −4: 3x² − 6x − 4x + 8 = 3x(x − 2) − 4(x − 2) = (3x − 4)(x − 2). Kontrolli me zbërthim tregon nëse shenjat janë të sakta.',
        keyPoints: ['Prodhimi = a · c, shuma = b', 'Ndaj bx, pastaj grupo', 'Kontroll me zbërthim'],
        examples: [
          { example: 'Faktorizoni 2x² + 7x + 3.', solution: '6 dhe 1: 2x² + 6x + x + 3 = (2x + 1)(x + 3).' },
          { example: 'Faktorizoni 3x² − 10x + 8.', solution: '−6 dhe −4: 3x(x − 2) − 4(x − 2) = (3x − 4)(x − 2).' },
        ],
        commonMistakes: [
          { mistake: '2x² + 7x + 3 = (2x + 3)(x + 1)', fix: 'Zbërtheni: 2x² + 5x + 3 ≠. Përdorni metodën a · c.' },
        ],
        practice: [
          { problem: 'Faktorizoni 2x² − x − 6.', solution: '(2x + 3)(x − 2)', steps: ['a · c = −12: numrat −4 dhe 3.', '2x² − 4x + 3x − 6 = (2x + 3)(x − 2).'] },
          { problem: 'Faktorizoni 6x² + x − 1.', solution: '(3x − 1)(2x + 1)', steps: ['a · c = −6: numrat 3 dhe −2.', '6x² + 3x − 2x − 1 = (3x − 1)(2x + 1).'] },
          { problem: 'Faktorizoni 4x² − 25.', solution: '(2x − 5)(2x + 5)', steps: ['Diferenca e katrorëve.', '(2x)² − 5².'] },
        ],
      },
      en: {
        title: 'Factorising ax² + bx + c',
        objectives: ['Factorise trinomials with a ≠ 1 using the a · c method.', 'Check a factorisation by expanding.'],
        theory: 'The a · c method: (1) work out a · c; (2) find two numbers with product a · c and sum b; (3) split the term bx using them; (4) factorise by grouping.\n\n2x² + 7x + 3: a · c = 6, the numbers 6 and 1 (6 + 1 = 7). 2x² + 6x + x + 3 = 2x(x + 3) + (x + 3) = (2x + 1)(x + 3).\n\n3x² − 10x + 8: a · c = 24, the numbers −6 and −4: 3x² − 6x − 4x + 8 = 3x(x − 2) − 4(x − 2) = (3x − 4)(x − 2). Expanding shows whether the signs are right.',
        keyPoints: ['Product = a · c, sum = b', 'Split bx, then group', 'Check by expanding'],
        examples: [
          { example: 'Factorise 2x² + 7x + 3.', solution: '6 and 1: 2x² + 6x + x + 3 = (2x + 1)(x + 3).' },
          { example: 'Factorise 3x² − 10x + 8.', solution: '−6 and −4: 3x(x − 2) − 4(x − 2) = (3x − 4)(x − 2).' },
        ],
        commonMistakes: [
          { mistake: '2x² + 7x + 3 = (2x + 3)(x + 1)', fix: 'Expand: 2x² + 5x + 3 ≠. Use the a · c method.' },
        ],
        practice: [
          { problem: 'Factorise 2x² − x − 6.', solution: '(2x + 3)(x − 2)', steps: ['a · c = −12: the numbers −4 and 3.', '2x² − 4x + 3x − 6 = (2x + 3)(x − 2).'] },
          { problem: 'Factorise 6x² + x − 1.', solution: '(3x − 1)(2x + 1)', steps: ['a · c = −6: the numbers 3 and −2.', '6x² + 3x − 2x − 1 = (3x − 1)(2x + 1).'] },
          { problem: 'Factorise 4x² − 25.', solution: '(2x − 5)(2x + 5)', steps: ['Difference of two squares.', '(2x)² − 5².'] },
        ],
      },
      de: {
        title: 'Faktorisieren von ax² + bx + c',
        objectives: ['Trinome mit a ≠ 1 mit der a · c-Methode faktorisieren.', 'Eine Faktorisierung durch Ausmultiplizieren prüfen.'],
        theory: 'Die a · c-Methode: (1) a · c berechnen; (2) zwei Zahlen mit Produkt a · c und Summe b finden; (3) das Glied bx damit aufteilen; (4) durch Gruppieren faktorisieren.\n\n2x² + 7x + 3: a · c = 6, die Zahlen 6 und 1 (6 + 1 = 7). 2x² + 6x + x + 3 = 2x(x + 3) + (x + 3) = (2x + 1)(x + 3).\n\n3x² − 10x + 8: a · c = 24, die Zahlen −6 und −4: 3x² − 6x − 4x + 8 = 3x(x − 2) − 4(x − 2) = (3x − 4)(x − 2). Ausmultiplizieren zeigt, ob die Vorzeichen stimmen.',
        keyPoints: ['Produkt = a · c, Summe = b', 'bx aufteilen, dann gruppieren', 'Probe durch Ausmultiplizieren'],
        examples: [
          { example: 'Faktorisieren Sie 2x² + 7x + 3.', solution: '6 und 1: 2x² + 6x + x + 3 = (2x + 1)(x + 3).' },
          { example: 'Faktorisieren Sie 3x² − 10x + 8.', solution: '−6 und −4: 3x(x − 2) − 4(x − 2) = (3x − 4)(x − 2).' },
        ],
        commonMistakes: [
          { mistake: '2x² + 7x + 3 = (2x + 3)(x + 1)', fix: 'Ausmultiplizieren: 2x² + 5x + 3 ≠. Die a · c-Methode verwenden.' },
        ],
        practice: [
          { problem: 'Faktorisieren Sie 2x² − x − 6.', solution: '(2x + 3)(x − 2)', steps: ['a · c = −12: die Zahlen −4 und 3.', '2x² − 4x + 3x − 6 = (2x + 3)(x − 2).'] },
          { problem: 'Faktorisieren Sie 6x² + x − 1.', solution: '(3x − 1)(2x + 1)', steps: ['a · c = −6: die Zahlen 3 und −2.', '6x² + 3x − 2x − 1 = (3x − 1)(2x + 1).'] },
          { problem: 'Faktorisieren Sie 4x² − 25.', solution: '(2x − 5)(2x + 5)', steps: ['Dritte binomische Formel.', '(2x)² − 5².'] },
        ],
      },
    },
  ],
};
