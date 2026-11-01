// Grade 10 · Theme 2: Algebraic expressions (September–October)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g10-algebraic-expressions',
  i18n: {
    al: { title: 'Shprehjet algjebrike', description: 'Thjeshtimi, fuqitë me ndryshore, zbërthimi dhe faktorizimi, thyesat algjebrike.' },
    en: { title: 'Algebraic expressions', description: 'Simplifying, powers with variables, expanding and factorising, algebraic fractions.' },
    de: { title: 'Algebraische Terme', description: 'Vereinfachen, Potenzen mit Variablen, Ausmultiplizieren und Faktorisieren, Bruchterme.' },
  },
  lessons: [
    // ───────── 1. Simplifying
    {
      slug: 'g10-algebraic-expressions-simplifying',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Hapi', 'Step', 'Schritt'), cells: ['3(2x − y) − 2(x − 4y)', '6x − 3y − 2x + 8y', '4x + 5y'] },
          { head: alt('Veprimi', 'Action', 'Aktion'), cells: [alt('shprehja', 'expression', 'Term'), alt('hiqen kllapat', 'remove brackets', 'Klammern auflösen'), alt('reduktohen', 'collect', 'zusammenfassen')] },
        ],
        highlight: [[0, 2]],
        alt: alt('Thjeshtimi hap pas hapi i 3(2x − y) − 2(x − 4y) në 4x + 5y.', 'Step-by-step simplification of 3(2x − y) − 2(x − 4y) to 4x + 5y.', 'Schrittweise Vereinfachung von 3(2x − y) − 2(x − 4y) zu 4x + 5y.'),
      }],
      answers: {
        examples: ['text', [['4 * 2 + 5 * (-1)', 3]]],
        practice: ['text', 'text', [['2 * (-1)^2 - 3 * (-1) * 2', 8]]],
      },
      al: {
        title: 'Thjeshtimi i shprehjeve',
        objectives: ['Të hiqni kllapat me kujdes për shenjat.', 'Të reduktoni kufizat e ngjashme dhe të njehsoni vlerën e shprehjes.'],
        theory: 'Për të thjeshtuar: (1) hiqni kllapat duke shumëzuar çdo kufizë; minusi para kllapës ndryshon të gjitha shenjat; (2) gruponi kufizat e ngjashme; (3) mblidhni koeficientët.\n\n3(2x − y) − 2(x − 4y) = 6x − 3y − 2x + 8y = 4x + 5y.\n\nVlera e shprehjes: zëvendësoni ndryshoret, mundësisht në shprehjen e thjeshtuar, dhe vendosni numrat negativë në kllapa: për x = 2, y = −1: 4 · 2 + 5 · (−1) = 3.',
        keyPoints: ['−(a − b) = −a + b', 'Mblidhen vetëm kufizat e ngjashme', 'Numrat negativë zëvendësohen në kllapa'],
        examples: [
          { example: 'Thjeshtoni 3(2x − y) − 2(x − 4y).', solution: '6x − 3y − 2x + 8y = 4x + 5y.' },
          { example: 'Njehsoni shprehjen për x = 2, y = −1.', solution: '4 · 2 + 5 · (−1) = 8 − 5 = 3.' },
        ],
        commonMistakes: [
          { mistake: '−2(x − 4y) = −2x − 8y', fix: '(−2) · (−4y) = +8y.' },
        ],
        practice: [
          { problem: 'Thjeshtoni 5a − 2(3a − b) + b.', solution: '−a + 3b', steps: ['5a − 6a + 2b + b.', '= −a + 3b.'] },
          { problem: 'Thjeshtoni 4x² − 3x + 2x² + x.', solution: '6x² − 2x', steps: ['4x² + 2x² = 6x².', '−3x + x = −2x.'] },
          { problem: 'Njehsoni 2a² − 3ab për a = −1, b = 2.', solution: '8', steps: ['2 · 1 − 3 · (−1) · 2.', '= 2 + 6 = 8.'] },
        ],
      },
      en: {
        title: 'Simplifying expressions',
        objectives: ['Remove brackets carefully, minding the signs.', 'Collect like terms and evaluate an expression.'],
        theory: 'To simplify: (1) remove brackets by multiplying every term; a minus in front of a bracket changes all the signs; (2) group like terms; (3) add the coefficients.\n\n3(2x − y) − 2(x − 4y) = 6x − 3y − 2x + 8y = 4x + 5y.\n\nThe value of an expression: substitute the variables, preferably into the simplified expression, and put negative numbers in brackets: for x = 2, y = −1: 4 · 2 + 5 · (−1) = 3.',
        keyPoints: ['−(a − b) = −a + b', 'Only like terms are added', 'Substitute negatives in brackets'],
        examples: [
          { example: 'Simplify 3(2x − y) − 2(x − 4y).', solution: '6x − 3y − 2x + 8y = 4x + 5y.' },
          { example: 'Evaluate the expression for x = 2, y = −1.', solution: '4 · 2 + 5 · (−1) = 8 − 5 = 3.' },
        ],
        commonMistakes: [
          { mistake: '−2(x − 4y) = −2x − 8y', fix: '(−2) · (−4y) = +8y.' },
        ],
        practice: [
          { problem: 'Simplify 5a − 2(3a − b) + b.', solution: '−a + 3b', steps: ['5a − 6a + 2b + b.', '= −a + 3b.'] },
          { problem: 'Simplify 4x² − 3x + 2x² + x.', solution: '6x² − 2x', steps: ['4x² + 2x² = 6x².', '−3x + x = −2x.'] },
          { problem: 'Evaluate 2a² − 3ab for a = −1, b = 2.', solution: '8', steps: ['2 · 1 − 3 · (−1) · 2.', '= 2 + 6 = 8.'] },
        ],
      },
      de: {
        title: 'Terme vereinfachen',
        objectives: ['Klammern sorgfältig auflösen und auf Vorzeichen achten.', 'Gleichartige Glieder zusammenfassen und Termwerte berechnen.'],
        theory: 'Zum Vereinfachen: (1) Klammern auflösen, jedes Glied multiplizieren; ein Minus vor der Klammer ändert alle Vorzeichen; (2) gleichartige Glieder ordnen; (3) Koeffizienten addieren.\n\n3(2x − y) − 2(x − 4y) = 6x − 3y − 2x + 8y = 4x + 5y.\n\nTermwert: Variablen einsetzen, am besten in den vereinfachten Term, negative Zahlen in Klammern: für x = 2, y = −1: 4 · 2 + 5 · (−1) = 3.',
        keyPoints: ['−(a − b) = −a + b', 'Nur gleichartige Glieder addieren', 'Negative Zahlen in Klammern einsetzen'],
        examples: [
          { example: 'Vereinfachen Sie 3(2x − y) − 2(x − 4y).', solution: '6x − 3y − 2x + 8y = 4x + 5y.' },
          { example: 'Berechnen Sie den Term für x = 2, y = −1.', solution: '4 · 2 + 5 · (−1) = 8 − 5 = 3.' },
        ],
        commonMistakes: [
          { mistake: '−2(x − 4y) = −2x − 8y', fix: '(−2) · (−4y) = +8y.' },
        ],
        practice: [
          { problem: 'Vereinfachen Sie 5a − 2(3a − b) + b.', solution: '−a + 3b', steps: ['5a − 6a + 2b + b.', '= −a + 3b.'] },
          { problem: 'Vereinfachen Sie 4x² − 3x + 2x² + x.', solution: '6x² − 2x', steps: ['4x² + 2x² = 6x².', '−3x + x = −2x.'] },
          { problem: 'Berechnen Sie 2a² − 3ab für a = −1, b = 2.', solution: '8', steps: ['2 · 1 − 3 · (−1) · 2.', '= 2 + 6 = 8.'] },
        ],
      },
    },

    // ───────── 2. Powers
    {
      slug: 'g10-algebraic-expressions-powers',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Rregulla', 'Rule', 'Regel'), cells: ['xᵐ · xⁿ = xᵐ⁺ⁿ', 'xᵐ : xⁿ = xᵐ⁻ⁿ', '(xᵐ)ⁿ = xᵐⁿ', 'x⁻ⁿ = 1/xⁿ'] },
          { head: alt('Shembull', 'Example', 'Beispiel'), cells: ['x⁵ · x⁻² = x³', 'a⁴ : a² = a²', '(3x²y)³ = 27x⁶y³', '(2x)⁻² = 1/(4x²)'] },
        ],
        alt: alt('Tabela e rregullave të fuqive me shembuj me ndryshore.', 'Table of the rules for powers with examples using variables.', 'Tabelle der Potenzgesetze mit Beispielen mit Variablen.'),
      }],
      answers: {
        examples: ['text', [['2^5 * 2^-2', 8]]],
        practice: ['text', 'text', [['(-2 * 1^3)^2', 4]]],
      },
      al: {
        title: 'Fuqitë me ndryshore',
        objectives: ['Të zbatoni rregullat e fuqive te shprehjet shkronjore.', 'Të thjeshtoni prodhime dhe herës me eksponentë negativë.'],
        theory: 'Rregullat: xᵐ · xⁿ = xᵐ⁺ⁿ; xᵐ : xⁿ = xᵐ⁻ⁿ; (xᵐ)ⁿ = xᵐⁿ; (xy)ⁿ = xⁿyⁿ; x⁰ = 1; x⁻ⁿ = 1/xⁿ.\n\nTe fuqia e një prodhimi, çdo faktor ngrihet në fuqi, edhe koeficienti: (3x²y)³ = 27x⁶y³.\n\nTe herësi pjesëtojmë koeficientët dhe zbresim eksponentët për çdo ndryshore: 12a⁴b / (3a²b³) = 4a²b⁻² = 4a²/b².',
        keyPoints: ['(xy)ⁿ = xⁿyⁿ', '(xᵐ)ⁿ = xᵐⁿ', 'x⁻ⁿ = 1/xⁿ'],
        examples: [
          { example: 'Thjeshtoni (3x²y)³.', solution: '3³ · x⁶ · y³ = 27x⁶y³.' },
          { example: 'Llogaritni 2⁵ · 2⁻².', solution: '2³ = 8.' },
        ],
        commonMistakes: [
          { mistake: '(3x²y)³ = 3x⁶y³', fix: 'Edhe koeficienti 3 ngrihet në kub: 27.' },
          { mistake: '(x²)³ = x⁵', fix: 'Fuqi e fuqisë: eksponentët shumëzohen, x⁶.' },
        ],
        practice: [
          { problem: 'Thjeshtoni 12a⁴b / (3a²b³).', solution: '4a²/b²', steps: ['12 : 3 = 4; a⁴⁻² = a²; b¹⁻³ = b⁻².', '4a²/b².'] },
          { problem: 'Shkruani (2x)⁻² pa eksponent negativ.', solution: '1/(4x²)', steps: ['(2x)⁻² = 1/(2x)².', '= 1/(4x²).'] },
          { problem: 'Llogaritni (−2a³)² për a = 1.', solution: '4', steps: ['(−2a³)² = 4a⁶.', 'Për a = 1: 4.'] },
        ],
      },
      en: {
        title: 'Powers with variables',
        objectives: ['Apply the rules for powers to algebraic expressions.', 'Simplify products and quotients with negative exponents.'],
        theory: 'Rules: xᵐ · xⁿ = xᵐ⁺ⁿ; xᵐ ÷ xⁿ = xᵐ⁻ⁿ; (xᵐ)ⁿ = xᵐⁿ; (xy)ⁿ = xⁿyⁿ; x⁰ = 1; x⁻ⁿ = 1/xⁿ.\n\nFor a power of a product, every factor is raised to the power, the coefficient too: (3x²y)³ = 27x⁶y³.\n\nIn a quotient, divide the coefficients and subtract the exponents for each variable: 12a⁴b / (3a²b³) = 4a²b⁻² = 4a²/b².',
        keyPoints: ['(xy)ⁿ = xⁿyⁿ', '(xᵐ)ⁿ = xᵐⁿ', 'x⁻ⁿ = 1/xⁿ'],
        examples: [
          { example: 'Simplify (3x²y)³.', solution: '3³ · x⁶ · y³ = 27x⁶y³.' },
          { example: 'Work out 2⁵ · 2⁻².', solution: '2³ = 8.' },
        ],
        commonMistakes: [
          { mistake: '(3x²y)³ = 3x⁶y³', fix: 'The coefficient 3 is cubed too: 27.' },
          { mistake: '(x²)³ = x⁵', fix: 'Power of a power: multiply the exponents, x⁶.' },
        ],
        practice: [
          { problem: 'Simplify 12a⁴b / (3a²b³).', solution: '4a²/b²', steps: ['12 ÷ 3 = 4; a⁴⁻² = a²; b¹⁻³ = b⁻².', '4a²/b².'] },
          { problem: 'Write (2x)⁻² without a negative exponent.', solution: '1/(4x²)', steps: ['(2x)⁻² = 1/(2x)².', '= 1/(4x²).'] },
          { problem: 'Work out (−2a³)² for a = 1.', solution: '4', steps: ['(−2a³)² = 4a⁶.', 'For a = 1: 4.'] },
        ],
      },
      de: {
        title: 'Potenzen mit Variablen',
        objectives: ['Potenzgesetze auf Terme mit Variablen anwenden.', 'Produkte und Quotienten mit negativen Exponenten vereinfachen.'],
        theory: 'Gesetze: xᵐ · xⁿ = xᵐ⁺ⁿ; xᵐ : xⁿ = xᵐ⁻ⁿ; (xᵐ)ⁿ = xᵐⁿ; (xy)ⁿ = xⁿyⁿ; x⁰ = 1; x⁻ⁿ = 1/xⁿ.\n\nBei der Potenz eines Produkts wird jeder Faktor potenziert, auch der Koeffizient: (3x²y)³ = 27x⁶y³.\n\nBeim Quotienten Koeffizienten dividieren und für jede Variable die Exponenten subtrahieren: 12a⁴b / (3a²b³) = 4a²b⁻² = 4a²/b².',
        keyPoints: ['(xy)ⁿ = xⁿyⁿ', '(xᵐ)ⁿ = xᵐⁿ', 'x⁻ⁿ = 1/xⁿ'],
        examples: [
          { example: 'Vereinfachen Sie (3x²y)³.', solution: '3³ · x⁶ · y³ = 27x⁶y³.' },
          { example: 'Berechnen Sie 2⁵ · 2⁻².', solution: '2³ = 8.' },
        ],
        commonMistakes: [
          { mistake: '(3x²y)³ = 3x⁶y³', fix: 'Auch der Koeffizient 3 wird potenziert: 27.' },
          { mistake: '(x²)³ = x⁵', fix: 'Potenz einer Potenz: Exponenten multiplizieren, x⁶.' },
        ],
        practice: [
          { problem: 'Vereinfachen Sie 12a⁴b / (3a²b³).', solution: '4a²/b²', steps: ['12 : 3 = 4; a⁴⁻² = a²; b¹⁻³ = b⁻².', '4a²/b².'] },
          { problem: 'Schreiben Sie (2x)⁻² ohne negativen Exponenten.', solution: '1/(4x²)', steps: ['(2x)⁻² = 1/(2x)².', '= 1/(4x²).'] },
          { problem: 'Berechnen Sie (−2a³)² für a = 1.', solution: '4', steps: ['(−2a³)² = 4a⁶.', 'Für a = 1: 4.'] },
        ],
      },
    },

    // ───────── 3. Expanding and factorising
    {
      slug: 'g10-algebraic-expressions-expanding-factoring',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '·', cells: ['x', '+4'] },
          { head: '2x', cells: ['2x²', '8x'] },
          { head: '−1', cells: ['−x', '−4'] },
        ],
        highlight: [[1, 1], [2, 0]],
        caption: alt('(2x − 1)(x + 4) = 2x² + 8x − x − 4 = 2x² + 7x − 4.', '(2x − 1)(x + 4) = 2x² + 8x − x − 4 = 2x² + 7x − 4.', '(2x − 1)(x + 4) = 2x² + 8x − x − 4 = 2x² + 7x − 4.'),
        alt: alt('Tabela e shumëzimit të (2x − 1) me (x + 4).', 'Multiplication grid for (2x − 1) times (x + 4).', 'Multiplikationstabelle für (2x − 1) mal (x + 4).'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', [['(2 + 3)^2 - (2 - 3)^2', 24]]],
      },
      al: {
        title: 'Zbërthimi dhe faktorizimi',
        objectives: ['Të zbërtheni prodhime binomesh.', 'Të faktorizoni me faktor të përbashkët, formula dhe trinome.'],
        theory: 'Zbërthimi: çdo kufizë me çdo kufizë: (2x − 1)(x + 4) = 2x² + 8x − x − 4 = 2x² + 7x − 4. Formulat: (a ± b)² = a² ± 2ab + b²; (a − b)(a + b) = a² − b².\n\nFaktorizimi është veprimi i kundërt: faktori i përbashkët (3x² − 12x = 3x(x − 4)), diferenca e katrorëve (x² − 9 = (x − 3)(x + 3)), katrori i plotë (x² + 6x + 9 = (x + 3)²) dhe trinomi x² + bx + c = (x + m)(x + n) me mn = c, m + n = b.\n\nKontrolloni gjithmonë faktorizimin duke e zbërthyer.',
        keyPoints: ['Zbërthim: çdo kufizë me çdo kufizë', 'Faktorizim: faktor i përbashkët → formula → trinom', 'Kontroll me zbërthim'],
        examples: [
          { example: 'Zbërtheni dhe thjeshtoni (2x − 1)(x + 4).', solution: '2x² + 8x − x − 4 = 2x² + 7x − 4.' },
          { example: 'Faktorizoni x² − 7x + 12.', solution: '(−3)(−4) = 12, −3 − 4 = −7: (x − 3)(x − 4).' },
        ],
        commonMistakes: [
          { mistake: '(2x − 1)(x + 4) = 2x² − 4', fix: 'Mungojnë kufizat e mesit: 8x − x = 7x.' },
        ],
        practice: [
          { problem: 'Faktorizoni 3x² − 12x.', solution: '3x(x − 4)', steps: ['Faktori i përbashkët 3x.', '3x(x − 4).'] },
          { problem: 'Faktorizoni x² + 6x + 9.', solution: '(x + 3)²', steps: ['9 = 3², 6x = 2 · 3 · x.', '(x + 3)².'] },
          { problem: 'Thjeshtoni (x + 3)² − (x − 3)² dhe njehsoni për x = 2.', solution: '12x; 24', steps: ['x² + 6x + 9 − (x² − 6x + 9) = 12x.', '12 · 2 = 24.'] },
        ],
      },
      en: {
        title: 'Expanding and factorising',
        objectives: ['Expand products of binomials.', 'Factorise with a common factor, identities and trinomials.'],
        theory: 'Expanding: every term times every term: (2x − 1)(x + 4) = 2x² + 8x − x − 4 = 2x² + 7x − 4. Identities: (a ± b)² = a² ± 2ab + b²; (a − b)(a + b) = a² − b².\n\nFactorising is the reverse: common factor (3x² − 12x = 3x(x − 4)), difference of squares (x² − 9 = (x − 3)(x + 3)), perfect square (x² + 6x + 9 = (x + 3)²) and the trinomial x² + bx + c = (x + m)(x + n) with mn = c, m + n = b.\n\nAlways check a factorisation by expanding it.',
        keyPoints: ['Expanding: every term times every term', 'Factorising: common factor → identities → trinomial', 'Check by expanding'],
        examples: [
          { example: 'Expand and simplify (2x − 1)(x + 4).', solution: '2x² + 8x − x − 4 = 2x² + 7x − 4.' },
          { example: 'Factorise x² − 7x + 12.', solution: '(−3)(−4) = 12, −3 − 4 = −7: (x − 3)(x − 4).' },
        ],
        commonMistakes: [
          { mistake: '(2x − 1)(x + 4) = 2x² − 4', fix: 'The middle terms are missing: 8x − x = 7x.' },
        ],
        practice: [
          { problem: 'Factorise 3x² − 12x.', solution: '3x(x − 4)', steps: ['Common factor 3x.', '3x(x − 4).'] },
          { problem: 'Factorise x² + 6x + 9.', solution: '(x + 3)²', steps: ['9 = 3², 6x = 2 · 3 · x.', '(x + 3)².'] },
          { problem: 'Simplify (x + 3)² − (x − 3)² and evaluate it for x = 2.', solution: '12x; 24', steps: ['x² + 6x + 9 − (x² − 6x + 9) = 12x.', '12 · 2 = 24.'] },
        ],
      },
      de: {
        title: 'Ausmultiplizieren und Faktorisieren',
        objectives: ['Produkte von Binomen ausmultiplizieren.', 'Durch Ausklammern, binomische Formeln und Trinome faktorisieren.'],
        theory: 'Ausmultiplizieren: jedes Glied mit jedem: (2x − 1)(x + 4) = 2x² + 8x − x − 4 = 2x² + 7x − 4. Binomische Formeln: (a ± b)² = a² ± 2ab + b²; (a − b)(a + b) = a² − b².\n\nFaktorisieren ist die Umkehrung: Ausklammern (3x² − 12x = 3x(x − 4)), dritte binomische Formel (x² − 9 = (x − 3)(x + 3)), vollständiges Quadrat (x² + 6x + 9 = (x + 3)²) und Trinom x² + bx + c = (x + m)(x + n) mit mn = c, m + n = b.\n\nEine Faktorisierung immer durch Ausmultiplizieren prüfen.',
        keyPoints: ['Ausmultiplizieren: jedes Glied mit jedem', 'Faktorisieren: ausklammern → Formeln → Trinom', 'Probe durch Ausmultiplizieren'],
        examples: [
          { example: 'Multiplizieren Sie (2x − 1)(x + 4) aus und vereinfachen Sie.', solution: '2x² + 8x − x − 4 = 2x² + 7x − 4.' },
          { example: 'Faktorisieren Sie x² − 7x + 12.', solution: '(−3)(−4) = 12, −3 − 4 = −7: (x − 3)(x − 4).' },
        ],
        commonMistakes: [
          { mistake: '(2x − 1)(x + 4) = 2x² − 4', fix: 'Die mittleren Glieder fehlen: 8x − x = 7x.' },
        ],
        practice: [
          { problem: 'Faktorisieren Sie 3x² − 12x.', solution: '3x(x − 4)', steps: ['Gemeinsamer Faktor 3x.', '3x(x − 4).'] },
          { problem: 'Faktorisieren Sie x² + 6x + 9.', solution: '(x + 3)²', steps: ['9 = 3², 6x = 2 · 3 · x.', '(x + 3)².'] },
          { problem: 'Vereinfachen Sie (x + 3)² − (x − 3)² und berechnen Sie den Wert für x = 2.', solution: '12x; 24', steps: ['x² + 6x + 9 − (x² − 6x + 9) = 12x.', '12 · 2 = 24.'] },
        ],
      },
    },

    // ───────── 4. Algebraic fractions
    {
      slug: 'g10-algebraic-expressions-algebraic-fractions',
      noVisual: 'Combining and simplifying algebraic fractions is shown step by step in the worked examples.',
      answers: {
        examples: ['text', [['2/1 + 3/2', 3.5]]],
        practice: ['text', 'text', 'text'],
      },
      al: {
        title: 'Thyesat algjebrike',
        objectives: ['Të mblidhni dhe zbritni thyesa algjebrike me emërues të përbashkët.', 'Të thjeshtoni, shumëzoni dhe pjesëtoni thyesa algjebrike.'],
        theory: 'Mbledhja: gjejmë emëruesin e përbashkët më të vogël: 2/x + 3/(2x) = 4/(2x) + 3/(2x) = 7/(2x), x ≠ 0.\n\nThjeshtimi: faktorizojmë dhe thjeshtojmë faktorët: (x² − 4)/(x² − 2x) = (x − 2)(x + 2)/(x(x − 2)) = (x + 2)/x, për x ≠ 0, 2.\n\nShumëzimi: numërues · numërues dhe emërues · emërues, pastaj thjeshtim. Pjesëtimi: shumëzojmë me të anasjelltën e thyesës së dytë. Kontroll i shpejtë: zëvendësoni një vlerë të lejuar, p.sh. x = 1.',
        keyPoints: ['Emërues i përbashkët për ±', 'Thjeshtohen faktorët', 'Shënoni vlerat e ndaluara'],
        examples: [
          { example: 'Thjeshtoni 2/x + 3/(2x).', solution: '4/(2x) + 3/(2x) = 7/(2x), x ≠ 0.' },
          { example: 'Kontrolloni rezultatin për x = 1.', solution: '2 + 1,5 = 3,5 dhe 7/2 = 3,5 ✓.' },
        ],
        commonMistakes: [
          { mistake: '2/x + 3/(2x) = 5/(3x)', fix: 'Nuk mblidhen emëruesit; gjendet emëruesi i përbashkët 2x.' },
        ],
        practice: [
          { problem: 'Thjeshtoni (x² − 4)/(x² − 2x).', solution: '(x + 2)/x', steps: ['(x − 2)(x + 2)/(x(x − 2)).', '= (x + 2)/x, x ≠ 0, 2.'] },
          { problem: 'Llogaritni 1/(x − 1) − 1/(x + 1).', solution: '2/(x² − 1)', steps: ['((x + 1) − (x − 1))/((x − 1)(x + 1)).', '= 2/(x² − 1).'] },
          { problem: 'Pjesëtoni (3x)/(x + 2) : (6x²)/(x² − 4).', solution: '(x − 2)/(2x)', steps: ['3x/(x + 2) · (x − 2)(x + 2)/(6x²).', '= (x − 2)/(2x).'] },
        ],
      },
      en: {
        title: 'Algebraic fractions',
        objectives: ['Add and subtract algebraic fractions with a common denominator.', 'Simplify, multiply and divide algebraic fractions.'],
        theory: 'Adding: find the lowest common denominator: 2/x + 3/(2x) = 4/(2x) + 3/(2x) = 7/(2x), x ≠ 0.\n\nSimplifying: factorise and cancel factors: (x² − 4)/(x² − 2x) = (x − 2)(x + 2)/(x(x − 2)) = (x + 2)/x, for x ≠ 0, 2.\n\nMultiplying: numerator · numerator and denominator · denominator, then simplify. Dividing: multiply by the reciprocal of the second fraction. A quick check: substitute an allowed value, e.g. x = 1.',
        keyPoints: ['Common denominator for ±', 'Cancel factors', 'State the excluded values'],
        examples: [
          { example: 'Simplify 2/x + 3/(2x).', solution: '4/(2x) + 3/(2x) = 7/(2x), x ≠ 0.' },
          { example: 'Check the result for x = 1.', solution: '2 + 1.5 = 3.5 and 7/2 = 3.5 ✓.' },
        ],
        commonMistakes: [
          { mistake: '2/x + 3/(2x) = 5/(3x)', fix: 'Denominators are not added; find the common denominator 2x.' },
        ],
        practice: [
          { problem: 'Simplify (x² − 4)/(x² − 2x).', solution: '(x + 2)/x', steps: ['(x − 2)(x + 2)/(x(x − 2)).', '= (x + 2)/x, x ≠ 0, 2.'] },
          { problem: 'Work out 1/(x − 1) − 1/(x + 1).', solution: '2/(x² − 1)', steps: ['((x + 1) − (x − 1))/((x − 1)(x + 1)).', '= 2/(x² − 1).'] },
          { problem: 'Divide (3x)/(x + 2) ÷ (6x²)/(x² − 4).', solution: '(x − 2)/(2x)', steps: ['3x/(x + 2) · (x − 2)(x + 2)/(6x²).', '= (x − 2)/(2x).'] },
        ],
      },
      de: {
        title: 'Bruchterme',
        objectives: ['Bruchterme mit Hauptnenner addieren und subtrahieren.', 'Bruchterme kürzen, multiplizieren und dividieren.'],
        theory: 'Addieren: den kleinsten gemeinsamen Nenner bilden: 2/x + 3/(2x) = 4/(2x) + 3/(2x) = 7/(2x), x ≠ 0.\n\nKürzen: faktorisieren und Faktoren kürzen: (x² − 4)/(x² − 2x) = (x − 2)(x + 2)/(x(x − 2)) = (x + 2)/x, für x ≠ 0, 2.\n\nMultiplizieren: Zähler · Zähler und Nenner · Nenner, dann kürzen. Dividieren: mit dem Kehrbruch des zweiten Bruchs multiplizieren. Schnelle Probe: einen erlaubten Wert einsetzen, z. B. x = 1.',
        keyPoints: ['Hauptnenner für ±', 'Faktoren kürzen', 'Ausgeschlossene Werte angeben'],
        examples: [
          { example: 'Vereinfachen Sie 2/x + 3/(2x).', solution: '4/(2x) + 3/(2x) = 7/(2x), x ≠ 0.' },
          { example: 'Machen Sie die Probe für x = 1.', solution: '2 + 1,5 = 3,5 und 7/2 = 3,5 ✓.' },
        ],
        commonMistakes: [
          { mistake: '2/x + 3/(2x) = 5/(3x)', fix: 'Nenner werden nicht addiert; Hauptnenner 2x bilden.' },
        ],
        practice: [
          { problem: 'Kürzen Sie (x² − 4)/(x² − 2x).', solution: '(x + 2)/x', steps: ['(x − 2)(x + 2)/(x(x − 2)).', '= (x + 2)/x, x ≠ 0, 2.'] },
          { problem: 'Berechnen Sie 1/(x − 1) − 1/(x + 1).', solution: '2/(x² − 1)', steps: ['((x + 1) − (x − 1))/((x − 1)(x + 1)).', '= 2/(x² − 1).'] },
          { problem: 'Dividieren Sie (3x)/(x + 2) : (6x²)/(x² − 4).', solution: '(x − 2)/(2x)', steps: ['3x/(x + 2) · (x − 2)(x + 2)/(6x²).', '= (x − 2)/(2x).'] },
        ],
      },
    },
  ],
};
