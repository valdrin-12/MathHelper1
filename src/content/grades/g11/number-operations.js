// Grade 11 · Theme 5: Number operations (December)
export default {
  id: 'g11-number-operations',
  i18n: {
    al: { title: 'Veprimet me numra', description: 'Thjeshtimi i rrënjëve, veprimet me rrënjë, përgjigjet e sakta me π dhe rrënjë, racionalizimi i emëruesit.' },
    en: { title: 'Number operations', description: 'Simplifying surds, calculating with surds, exact answers in terms of π and surds, rationalising the denominator.' },
    de: { title: 'Rechnen mit Zahlen', description: 'Wurzeln vereinfachen, mit Wurzeln rechnen, exakte Ergebnisse mit π und Wurzeln, Nenner rational machen.' },
  },
  lessons: [
    // ───────── 1. Surds and powers
    {
      slug: 'g11-number-operations-surds-powers',
      noVisual: 'Simplifying and combining surds is shown step by step in the worked examples.',
      answers: {
        examples: [[['sqrt(50) + sqrt(18)', '8 * sqrt(2)', 1e-9, '8√2']], [['sqrt(12) * sqrt(3)', 6]]],
        practice: [[['sqrt(72)', '6 * sqrt(2)', 1e-9, '6√2']], [['sqrt(75) - sqrt(27)', '2 * sqrt(3)', 1e-9, '2√3']], [['(2 * sqrt(5))^2', 20]]],
      },
      al: {
        title: 'Veprimet me rrënjë dhe fuqi',
        objectives: ['Të thjeshtoni rrënjë duke nxjerrë faktorin katror më të madh.', 'Të mblidhni, zbritni dhe shumëzoni rrënjë.'],
        theory: 'Rregullat: √a · √b = √(ab) dhe √a : √b = √(a/b). Për të thjeshtuar, gjejmë faktorin më të madh që është katror i plotë: √50 = √(25 · 2) = 5√2, √18 = √(9 · 2) = 3√2.\n\nMblidhen vetëm rrënjët e njëjta (si termat e ngjashëm): 5√2 + 3√2 = 8√2. Por √9 + √16 ≠ √25: 3 + 4 = 7.\n\nKatrori: (√a)² = a dhe (k√a)² = k² · a, p.sh. (2√5)² = 4 · 5 = 20.',
        keyPoints: ['√a · √b = √(ab)', 'Thjeshtimi: nxirr faktorin katror', 'Mblidhen vetëm rrënjët e njëjta'],
        examples: [
          { example: 'Thjeshtoni √50 + √18.', solution: '5√2 + 3√2 = 8√2.' },
          { example: 'Llogaritni √12 · √3.', solution: '√36 = 6.' },
        ],
        commonMistakes: [
          { mistake: '√50 + √18 = √68.', fix: 'Rrënjët nuk mblidhen nën një rrënjë; thjeshtoni së pari: 8√2.' },
          { mistake: '(2√5)² = 10.', fix: 'Ngrihet në katror edhe 2: 4 · 5 = 20.' },
        ],
        practice: [
          { problem: 'Thjeshtoni √72.', solution: '6√2', steps: ['72 = 36 · 2.', '√72 = 6√2.'] },
          { problem: 'Thjeshtoni √75 − √27.', solution: '2√3', steps: ['√75 = 5√3, √27 = 3√3.', '5√3 − 3√3 = 2√3.'] },
          { problem: 'Llogaritni (2√5)².', solution: '20', steps: ['2² · (√5)² = 4 · 5.', '= 20.'] },
        ],
      },
      en: {
        title: 'Surds and powers',
        objectives: ['Simplify surds by taking out the largest square factor.', 'Add, subtract and multiply surds.'],
        theory: 'The rules: √a · √b = √(ab) and √a ÷ √b = √(a/b). To simplify, find the largest factor that is a perfect square: √50 = √(25 · 2) = 5√2, √18 = √(9 · 2) = 3√2.\n\nOnly like surds can be added (like like terms): 5√2 + 3√2 = 8√2. But √9 + √16 ≠ √25: 3 + 4 = 7.\n\nSquaring: (√a)² = a and (k√a)² = k² · a, e.g. (2√5)² = 4 · 5 = 20.',
        keyPoints: ['√a · √b = √(ab)', 'Simplify: take out the square factor', 'Only like surds can be added'],
        examples: [
          { example: 'Simplify √50 + √18.', solution: '5√2 + 3√2 = 8√2.' },
          { example: 'Work out √12 · √3.', solution: '√36 = 6.' },
        ],
        commonMistakes: [
          { mistake: '√50 + √18 = √68.', fix: 'Surds are not added under one root; simplify first: 8√2.' },
          { mistake: '(2√5)² = 10.', fix: 'The 2 is squared too: 4 · 5 = 20.' },
        ],
        practice: [
          { problem: 'Simplify √72.', solution: '6√2', steps: ['72 = 36 · 2.', '√72 = 6√2.'] },
          { problem: 'Simplify √75 − √27.', solution: '2√3', steps: ['√75 = 5√3, √27 = 3√3.', '5√3 − 3√3 = 2√3.'] },
          { problem: 'Work out (2√5)².', solution: '20', steps: ['2² · (√5)² = 4 · 5.', '= 20.'] },
        ],
      },
      de: {
        title: 'Rechnen mit Wurzeln und Potenzen',
        objectives: ['Wurzeln durch teilweises Wurzelziehen vereinfachen.', 'Wurzeln addieren, subtrahieren und multiplizieren.'],
        theory: 'Die Regeln: √a · √b = √(ab) und √a : √b = √(a/b). Zum Vereinfachen sucht man den größten Faktor, der eine Quadratzahl ist: √50 = √(25 · 2) = 5√2, √18 = √(9 · 2) = 3√2.\n\nAddieren kann man nur gleiche Wurzeln (wie gleichartige Terme): 5√2 + 3√2 = 8√2. Aber √9 + √16 ≠ √25: 3 + 4 = 7.\n\nQuadrieren: (√a)² = a und (k√a)² = k² · a, z. B. (2√5)² = 4 · 5 = 20.',
        keyPoints: ['√a · √b = √(ab)', 'Vereinfachen: Quadratfaktor herausziehen', 'Nur gleiche Wurzeln addieren'],
        examples: [
          { example: 'Vereinfachen Sie √50 + √18.', solution: '5√2 + 3√2 = 8√2.' },
          { example: 'Berechnen Sie √12 · √3.', solution: '√36 = 6.' },
        ],
        commonMistakes: [
          { mistake: '√50 + √18 = √68.', fix: 'Wurzeln werden nicht unter einer Wurzel addiert; erst vereinfachen: 8√2.' },
          { mistake: '(2√5)² = 10.', fix: 'Auch die 2 wird quadriert: 4 · 5 = 20.' },
        ],
        practice: [
          { problem: 'Vereinfachen Sie √72.', solution: '6√2', steps: ['72 = 36 · 2.', '√72 = 6√2.'] },
          { problem: 'Vereinfachen Sie √75 − √27.', solution: '2√3', steps: ['√75 = 5√3, √27 = 3√3.', '5√3 − 3√3 = 2√3.'] },
          { problem: 'Berechnen Sie (2√5)².', solution: '20', steps: ['2² · (√5)² = 4 · 5.', '= 20.'] },
        ],
      },
    },
    // ───────── 2. Exact calculations
    {
      slug: 'g11-number-operations-exact-calculations',
      noVisual: 'Exact working with surds and π is shown step by step in the worked examples.',
      answers: {
        examples: [[['(3 + sqrt(2)) * (3 - sqrt(2))', 7]], [['sqrt(2^2 + 4^2)', '2 * sqrt(5)', 1e-9, '2√5']]],
        practice: [[['(1 + sqrt(3))^2', '4 + 2 * sqrt(3)', 1e-9, '4 + 2√3']], [['pi * (2 * sqrt(3))^2', '12 * pi', 1e-9, '12π']], [['sqrt(8) * sqrt(18)', 12]]],
      },
      al: {
        title: 'Llogaritjet e sakta',
        objectives: ['Të jepni përgjigje të sakta me rrënjë dhe me π, pa rrumbullakim.', 'Të hapni kllapa me rrënjë, edhe me formulat e shumëzimit të shkurtuar.'],
        theory: 'Kur kërkohet përgjigje e saktë, nuk rrumbullakojmë: shkruajmë 2√5 në vend të 4,47 dhe 12π në vend të 37,7.\n\nKllapat me rrënjë hapen si zakonisht. Me (a + b)(a − b) = a² − b² rrënja zhduket: (3 + √2)(3 − √2) = 9 − 2 = 7. Me (a + b)² = a² + 2ab + b²: (1 + √3)² = 1 + 2√3 + 3 = 4 + 2√3.\n\nTe Pitagora: hipotenuza me katete 2 dhe 4 është √(4 + 16) = √20 = 2√5.',
        keyPoints: ['E saktë = pa rrumbullakim (√, π)', '(a + b)(a − b) = a² − b²', '(a + b)² = a² + 2ab + b²'],
        examples: [
          { example: 'Llogaritni (3 + √2)(3 − √2).', solution: '3² − (√2)² = 9 − 2 = 7.' },
          { example: 'Katetet janë 2 cm dhe 4 cm. Jepni hipotenuzën saktë.', solution: '√(4 + 16) = √20 = 2√5 cm.' },
        ],
        commonMistakes: [
          { mistake: '(1 + √3)² = 1 + 3 = 4.', fix: 'Mos harroni termin e mesit 2ab: 4 + 2√3.' },
          { mistake: 'Kur kërkohet e saktë, jepet 4,47.', fix: 'Lëreni me rrënjë: 2√5.' },
        ],
        practice: [
          { problem: 'Hapni (1 + √3)².', solution: '4 + 2√3', steps: ['1 + 2√3 + 3.', '= 4 + 2√3.'] },
          { problem: 'Sa është saktësisht syprina e rrethit me r = 2√3 cm?', solution: '12π cm²', steps: ['πr² = π · (2√3)².', '= π · 12 = 12π cm².'] },
          { problem: 'Drejtkëndëshi ka brinjët √8 cm dhe √18 cm. Sa është syprina?', solution: '12 cm²', steps: ['√8 · √18 = √144.', '= 12 cm².'] },
        ],
      },
      en: {
        title: 'Exact calculations',
        objectives: ['Give exact answers with surds and π, without rounding.', 'Expand brackets with surds, including the special products.'],
        theory: 'When an exact answer is asked for, do not round: write 2√5 instead of 4.47 and 12π instead of 37.7.\n\nBrackets with surds are expanded as usual. With (a + b)(a − b) = a² − b² the root disappears: (3 + √2)(3 − √2) = 9 − 2 = 7. With (a + b)² = a² + 2ab + b²: (1 + √3)² = 1 + 2√3 + 3 = 4 + 2√3.\n\nWith Pythagoras: the hypotenuse with legs 2 and 4 is √(4 + 16) = √20 = 2√5.',
        keyPoints: ['Exact = no rounding (√, π)', '(a + b)(a − b) = a² − b²', '(a + b)² = a² + 2ab + b²'],
        examples: [
          { example: 'Work out (3 + √2)(3 − √2).', solution: '3² − (√2)² = 9 − 2 = 7.' },
          { example: 'The legs are 2 cm and 4 cm. Give the hypotenuse exactly.', solution: '√(4 + 16) = √20 = 2√5 cm.' },
        ],
        commonMistakes: [
          { mistake: '(1 + √3)² = 1 + 3 = 4.', fix: 'Do not forget the middle term 2ab: 4 + 2√3.' },
          { mistake: 'When an exact answer is asked for, 4.47 is given.', fix: 'Leave it as a surd: 2√5.' },
        ],
        practice: [
          { problem: 'Expand (1 + √3)².', solution: '4 + 2√3', steps: ['1 + 2√3 + 3.', '= 4 + 2√3.'] },
          { problem: 'What is the exact area of a circle with r = 2√3 cm?', solution: '12π cm²', steps: ['πr² = π · (2√3)².', '= π · 12 = 12π cm².'] },
          { problem: 'A rectangle has sides √8 cm and √18 cm. What is its area?', solution: '12 cm²', steps: ['√8 · √18 = √144.', '= 12 cm².'] },
        ],
      },
      de: {
        title: 'Exakt rechnen',
        objectives: ['Exakte Ergebnisse mit Wurzeln und π ohne Runden angeben.', 'Klammern mit Wurzeln auflösen, auch mit den binomischen Formeln.'],
        theory: 'Wird ein exaktes Ergebnis verlangt, rundet man nicht: 2√5 statt 4,47 und 12π statt 37,7.\n\nKlammern mit Wurzeln löst man wie gewohnt auf. Mit (a + b)(a − b) = a² − b² verschwindet die Wurzel: (3 + √2)(3 − √2) = 9 − 2 = 7. Mit (a + b)² = a² + 2ab + b²: (1 + √3)² = 1 + 2√3 + 3 = 4 + 2√3.\n\nMit Pythagoras: Die Hypotenuse zu den Katheten 2 und 4 ist √(4 + 16) = √20 = 2√5.',
        keyPoints: ['Exakt = ohne Runden (√, π)', '(a + b)(a − b) = a² − b²', '(a + b)² = a² + 2ab + b²'],
        examples: [
          { example: 'Berechnen Sie (3 + √2)(3 − √2).', solution: '3² − (√2)² = 9 − 2 = 7.' },
          { example: 'Die Katheten sind 2 cm und 4 cm. Geben Sie die Hypotenuse exakt an.', solution: '√(4 + 16) = √20 = 2√5 cm.' },
        ],
        commonMistakes: [
          { mistake: '(1 + √3)² = 1 + 3 = 4.', fix: 'Das Mittelglied 2ab nicht vergessen: 4 + 2√3.' },
          { mistake: 'Bei verlangtem exaktem Ergebnis wird 4,47 angegeben.', fix: 'Mit Wurzel stehen lassen: 2√5.' },
        ],
        practice: [
          { problem: 'Lösen Sie (1 + √3)² auf.', solution: '4 + 2√3', steps: ['1 + 2√3 + 3.', '= 4 + 2√3.'] },
          { problem: 'Wie groß ist der Flächeninhalt eines Kreises mit r = 2√3 cm exakt?', solution: '12π cm²', steps: ['πr² = π · (2√3)².', '= π · 12 = 12π cm².'] },
          { problem: 'Ein Rechteck hat die Seiten √8 cm und √18 cm. Wie groß ist sein Flächeninhalt?', solution: '12 cm²', steps: ['√8 · √18 = √144.', '= 12 cm².'] },
        ],
      },
    },
    // ───────── 3. Rationalising
    {
      slug: 'g11-number-operations-rationalizing',
      noVisual: 'Rationalising the denominator is shown step by step in the worked examples.',
      answers: {
        examples: [[['6 / sqrt(3)', '2 * sqrt(3)', 1e-9, '2√3']], [['4 / (3 - sqrt(5))', '3 + sqrt(5)', 1e-9, '3 + √5']]],
        practice: [[['10 / sqrt(5)', '2 * sqrt(5)', 1e-9, '2√5']], [['sqrt(2) / sqrt(6)', 'sqrt(3) / 3', 1e-9, '√3/3']], [['1 / (sqrt(5) - 2)', 'sqrt(5) + 2', 1e-9, '√5 + 2']]],
      },
      al: {
        title: 'Racionalizimi',
        objectives: ['Ta racionalizoni emëruesin me një rrënjë.', 'Ta racionalizoni emëruesin a ± √b me shprehjen e konjuguar.'],
        theory: 'Racionalizim do të thotë ta heqim rrënjën nga emëruesi pa e ndryshuar vlerën e thyesës.\n\nKur emëruesi është √a, shumëzojmë numëruesin dhe emëruesin me √a: 6/√3 = 6√3/3 = 2√3.\n\nKur emëruesi është a − √b (ose a + √b), shumëzojmë me të konjuguarën a + √b (ose a − √b), sepse (a − √b)(a + √b) = a² − b:\n4/(3 − √5) = 4(3 + √5)/(9 − 5) = 3 + √5.',
        keyPoints: ['k/√a → shumëzo me √a/√a', 'a − √b → shumëzo me a + √b', '(a − √b)(a + √b) = a² − b'],
        examples: [
          { example: 'Racionalizoni 6/√3.', solution: '6√3/3 = 2√3.' },
          { example: 'Racionalizoni 4/(3 − √5).', solution: '4(3 + √5)/(9 − 5) = 4(3 + √5)/4 = 3 + √5.' },
        ],
        commonMistakes: [
          { mistake: 'Shumëzohet vetëm emëruesi me √3.', fix: 'Shumëzohen të dy, numëruesi dhe emëruesi, që vlera të mos ndryshojë.' },
          { mistake: 'Te 3 − √5 shumëzohet me 3 − √5.', fix: 'Duhet e konjuguara me shenjë të kundërt: 3 + √5.' },
        ],
        practice: [
          { problem: 'Racionalizoni 10/√5.', solution: '2√5', steps: ['10√5/5.', '= 2√5.'] },
          { problem: 'Thjeshtoni dhe racionalizoni √2/√6.', solution: '√3/3', steps: ['√2/√6 = 1/√3.', '= √3/3.'] },
          { problem: 'Racionalizoni 1/(√5 − 2).', solution: '√5 + 2', steps: ['Shumëzojmë me √5 + 2: (√5 + 2)/(5 − 4).', '= √5 + 2.'] },
        ],
      },
      en: {
        title: 'Rationalising the denominator',
        objectives: ['Rationalise a denominator that is a single surd.', 'Rationalise a denominator a ± √b using the conjugate.'],
        theory: 'Rationalising means removing the root from the denominator without changing the value of the fraction.\n\nWhen the denominator is √a, multiply the numerator and the denominator by √a: 6/√3 = 6√3/3 = 2√3.\n\nWhen the denominator is a − √b (or a + √b), multiply by the conjugate a + √b (or a − √b), because (a − √b)(a + √b) = a² − b:\n4/(3 − √5) = 4(3 + √5)/(9 − 5) = 3 + √5.',
        keyPoints: ['k/√a → multiply by √a/√a', 'a − √b → multiply by a + √b', '(a − √b)(a + √b) = a² − b'],
        examples: [
          { example: 'Rationalise 6/√3.', solution: '6√3/3 = 2√3.' },
          { example: 'Rationalise 4/(3 − √5).', solution: '4(3 + √5)/(9 − 5) = 4(3 + √5)/4 = 3 + √5.' },
        ],
        commonMistakes: [
          { mistake: 'Only the denominator is multiplied by √3.', fix: 'Multiply both the numerator and the denominator so the value stays the same.' },
          { mistake: 'For 3 − √5 it is multiplied by 3 − √5.', fix: 'Use the conjugate with the opposite sign: 3 + √5.' },
        ],
        practice: [
          { problem: 'Rationalise 10/√5.', solution: '2√5', steps: ['10√5/5.', '= 2√5.'] },
          { problem: 'Simplify and rationalise √2/√6.', solution: '√3/3', steps: ['√2/√6 = 1/√3.', '= √3/3.'] },
          { problem: 'Rationalise 1/(√5 − 2).', solution: '√5 + 2', steps: ['Multiply by √5 + 2: (√5 + 2)/(5 − 4).', '= √5 + 2.'] },
        ],
      },
      de: {
        title: 'Nenner rational machen',
        objectives: ['Einen Nenner mit einer Wurzel rational machen.', 'Einen Nenner a ± √b mit dem konjugierten Ausdruck rational machen.'],
        theory: 'Den Nenner rational machen heißt, die Wurzel aus dem Nenner zu entfernen, ohne den Wert des Bruchs zu ändern.\n\nIst der Nenner √a, erweitert man mit √a: 6/√3 = 6√3/3 = 2√3.\n\nIst der Nenner a − √b (oder a + √b), erweitert man mit dem konjugierten Ausdruck a + √b (oder a − √b), denn (a − √b)(a + √b) = a² − b:\n4/(3 − √5) = 4(3 + √5)/(9 − 5) = 3 + √5.',
        keyPoints: ['k/√a → mit √a erweitern', 'a − √b → mit a + √b erweitern', '(a − √b)(a + √b) = a² − b'],
        examples: [
          { example: 'Machen Sie den Nenner von 6/√3 rational.', solution: '6√3/3 = 2√3.' },
          { example: 'Machen Sie den Nenner von 4/(3 − √5) rational.', solution: '4(3 + √5)/(9 − 5) = 4(3 + √5)/4 = 3 + √5.' },
        ],
        commonMistakes: [
          { mistake: 'Nur der Nenner wird mit √3 multipliziert.', fix: 'Zähler und Nenner erweitern, damit sich der Wert nicht ändert.' },
          { mistake: 'Bei 3 − √5 wird mit 3 − √5 erweitert.', fix: 'Mit dem konjugierten Ausdruck mit umgekehrtem Vorzeichen: 3 + √5.' },
        ],
        practice: [
          { problem: 'Machen Sie den Nenner von 10/√5 rational.', solution: '2√5', steps: ['10√5/5.', '= 2√5.'] },
          { problem: 'Vereinfachen Sie √2/√6 und machen Sie den Nenner rational.', solution: '√3/3', steps: ['√2/√6 = 1/√3.', '= √3/3.'] },
          { problem: 'Machen Sie den Nenner von 1/(√5 − 2) rational.', solution: '√5 + 2', steps: ['Mit √5 + 2 erweitern: (√5 + 2)/(5 − 4).', '= √5 + 2.'] },
        ],
      },
    },
  ],
};
