// Grade 9 · Theme 3: Equations and inequalities in one variable (November–December)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g9-equations-inequalities',
  i18n: {
    al: { title: 'Ekuacionet dhe inekuacionet me një ndryshore', description: 'Ekuacioni linear, veçimi i shkronjës, ekuacionet (x − a)(x − b) = 0, inekuacionet, inekuacionet e dyfishta dhe me vlerë absolute.' },
    en: { title: 'Equations and inequalities', description: 'Linear equations, changing the subject, equations (x − a)(x − b) = 0, inequalities, double and absolute-value inequalities.' },
    de: { title: 'Gleichungen und Ungleichungen', description: 'Lineare Gleichungen, Formeln umstellen, Gleichungen (x − a)(x − b) = 0, Ungleichungen, Doppel- und Betragsungleichungen.' },
  },
  lessons: [
    // ───────── 1. Linear equation
    {
      slug: 'g9-equations-inequalities-linear-equation',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Hapi', 'Step', 'Schritt'), cells: ['5(x − 2) = 3x + 4', '5x − 10 = 3x + 4', '2x = 14', 'x = 7'] },
          { head: alt('Veprimi', 'Action', 'Aktion'), cells: [alt('kllapat', 'brackets', 'Klammer'), alt('− 3x, + 10', '− 3x, + 10', '− 3x, + 10'), ': 2', alt('Provë: 25 = 25', 'Check: 25 = 25', 'Probe: 25 = 25')] },
        ],
        highlight: [[0, 3]],
        alt: alt('Zgjidhja hap pas hapi e 5(x − 2) = 3x + 4 deri në x = 7.', 'Step-by-step solution of 5(x − 2) = 3x + 4 down to x = 7.', 'Schrittweise Lösung von 5(x − 2) = 3x + 4 bis x = 7.'),
      }],
      answers: {
        examples: [[['(4 + 10) / (5 - 3)', 7]], [['(6 + 2 + 3) / (4 - 3)', 11]]],
        practice: [[['(19 - 3 - 8) / (6 - 2)', 2]], [['(6 + 4) / (4 - 3)', 10]], 'text'],
      },
      al: {
        title: 'Ekuacioni linear',
        objectives: ['Të zgjidhni ekuacione lineare me kllapa dhe thyesa.', 'Të dalloni ekuacionet pa zgjidhje dhe identitetet.'],
        theory: 'Ekuacioni linear sillet në trajtën ax = b. Hapat: hiqni emëruesit (shumëzoni me emëruesin e përbashkët), hiqni kllapat, bartni kufizat, reduktoni, pjesëtoni dhe bëni provën.\n\nShembull: 5(x − 2) = 3x + 4 → 5x − 10 = 3x + 4 → 2x = 14 → x = 7. Prova: 5 · 5 = 25 dhe 21 + 4 = 25.\n\nRaste të veçanta: nëse pas reduktimit del 0 · x = b me b ≠ 0 (p.sh. 2x + 6 = 2x + 5), ekuacioni nuk ka zgjidhje; nëse del 0 · x = 0, çdo numër është zgjidhje (identitet).',
        keyPoints: ['Emëruesit → kllapat → bartja → pjesëtimi', 'ax = b, a ≠ 0 → një zgjidhje', '0x = b ≠ 0 → asnjë;  0x = 0 → pafund'],
        examples: [
          { example: 'Zgjidhni 5(x − 2) = 3x + 4.', solution: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.' },
          { example: 'Zgjidhni (2x − 1)/3 − (x + 1)/2 = 1.', solution: '· 6: 2(2x − 1) − 3(x + 1) = 6 → 4x − 2 − 3x − 3 = 6 → x = 11.' },
        ],
        commonMistakes: [
          { mistake: '−3(x + 1) = −3x + 3', fix: 'Minusi shumëzon çdo kufizë: −3x − 3.' },
          { mistake: 'Shumëzohet me 6 vetëm ana e majtë.', fix: 'Me 6 shumëzohen të gjitha kufizat në të dyja anët, edhe 1 → 6.' },
        ],
        practice: [
          { problem: 'Zgjidhni 3(2x + 1) − 2(x − 4) = 19.', solution: 'x = 2', steps: ['6x + 3 − 2x + 8 = 19.', '4x = 8 → x = 2.'] },
          { problem: 'Zgjidhni (x + 2)/4 = (x − 1)/3.', solution: 'x = 10', steps: ['3x + 6 = 4x − 4.', 'x = 10.'] },
          { problem: 'Sa zgjidhje ka 2(x + 3) = 2x + 5?', solution: 'Asnjë', steps: ['2x + 6 = 2x + 5.', '0 · x = −1: e pamundur.'] },
        ],
      },
      en: {
        title: 'Linear equations',
        objectives: ['Solve linear equations with brackets and fractions.', 'Recognise equations with no solution and identities.'],
        theory: 'A linear equation is brought to the form ax = b. Steps: clear denominators (multiply by the common denominator), remove brackets, move terms, collect, divide and check.\n\nExample: 5(x − 2) = 3x + 4 → 5x − 10 = 3x + 4 → 2x = 14 → x = 7. Check: 5 · 5 = 25 and 21 + 4 = 25.\n\nSpecial cases: if collecting gives 0 · x = b with b ≠ 0 (e.g. 2x + 6 = 2x + 5), there is no solution; if it gives 0 · x = 0, every number is a solution (an identity).',
        keyPoints: ['Denominators → brackets → move → divide', 'ax = b, a ≠ 0 → one solution', '0x = b ≠ 0 → none;  0x = 0 → infinitely many'],
        examples: [
          { example: 'Solve 5(x − 2) = 3x + 4.', solution: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.' },
          { example: 'Solve (2x − 1)/3 − (x + 1)/2 = 1.', solution: '× 6: 2(2x − 1) − 3(x + 1) = 6 → 4x − 2 − 3x − 3 = 6 → x = 11.' },
        ],
        commonMistakes: [
          { mistake: '−3(x + 1) = −3x + 3', fix: 'The minus multiplies every term: −3x − 3.' },
          { mistake: 'Multiplying only the left side by 6.', fix: 'Every term on both sides is multiplied by 6, including 1 → 6.' },
        ],
        practice: [
          { problem: 'Solve 3(2x + 1) − 2(x − 4) = 19.', solution: 'x = 2', steps: ['6x + 3 − 2x + 8 = 19.', '4x = 8 → x = 2.'] },
          { problem: 'Solve (x + 2)/4 = (x − 1)/3.', solution: 'x = 10', steps: ['3x + 6 = 4x − 4.', 'x = 10.'] },
          { problem: 'How many solutions does 2(x + 3) = 2x + 5 have?', solution: 'None', steps: ['2x + 6 = 2x + 5.', '0 · x = −1: impossible.'] },
        ],
      },
      de: {
        title: 'Lineare Gleichungen',
        objectives: ['Lineare Gleichungen mit Klammern und Brüchen lösen.', 'Gleichungen ohne Lösung und allgemeingültige Gleichungen erkennen.'],
        theory: 'Eine lineare Gleichung bringt man auf die Form ax = b. Schritte: Nenner beseitigen (mit dem Hauptnenner multiplizieren), Klammern auflösen, umstellen, zusammenfassen, dividieren, Probe.\n\nBeispiel: 5(x − 2) = 3x + 4 → 5x − 10 = 3x + 4 → 2x = 14 → x = 7. Probe: 5 · 5 = 25 und 21 + 4 = 25.\n\nSonderfälle: Ergibt sich 0 · x = b mit b ≠ 0 (z. B. 2x + 6 = 2x + 5), gibt es keine Lösung; ergibt sich 0 · x = 0, ist jede Zahl Lösung (allgemeingültig).',
        keyPoints: ['Nenner → Klammern → umstellen → teilen', 'ax = b, a ≠ 0 → eine Lösung', '0x = b ≠ 0 → keine;  0x = 0 → unendlich viele'],
        examples: [
          { example: 'Lösen Sie 5(x − 2) = 3x + 4.', solution: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.' },
          { example: 'Lösen Sie (2x − 1)/3 − (x + 1)/2 = 1.', solution: '· 6: 2(2x − 1) − 3(x + 1) = 6 → 4x − 2 − 3x − 3 = 6 → x = 11.' },
        ],
        commonMistakes: [
          { mistake: '−3(x + 1) = −3x + 3', fix: 'Das Minus multipliziert jedes Glied: −3x − 3.' },
          { mistake: 'Nur die linke Seite mit 6 multiplizieren.', fix: 'Jedes Glied auf beiden Seiten mit 6 multiplizieren, auch 1 → 6.' },
        ],
        practice: [
          { problem: 'Lösen Sie 3(2x + 1) − 2(x − 4) = 19.', solution: 'x = 2', steps: ['6x + 3 − 2x + 8 = 19.', '4x = 8 → x = 2.'] },
          { problem: 'Lösen Sie (x + 2)/4 = (x − 1)/3.', solution: 'x = 10', steps: ['3x + 6 = 4x − 4.', 'x = 10.'] },
          { problem: 'Wie viele Lösungen hat 2(x + 3) = 2x + 5?', solution: 'Keine', steps: ['2x + 6 = 2x + 5.', '0 · x = −1: unmöglich.'] },
        ],
      },
    },

    // ───────── 2. Changing the subject of a formula
    {
      slug: 'g9-equations-inequalities-rearranging',
      noVisual: 'Rearranging formulas is shown step by step in the worked examples.',
      answers: {
        examples: ['text', [['2 * 30 / (7 + 5)', 5]]],
        practice: ['text', 'text', [['(20 - 5) / 3', 5]]],
      },
      al: {
        title: 'Veçimi i shkronjës në formulë',
        objectives: ['Të veçoni një shkronjë në formula me kllapa dhe thyesa.', 'Ta përdorni formulën e re për të gjetur një madhësi.'],
        theory: 'Formula është ekuacion me disa shkronja. Për të veçuar njërën, përdorim të njëjtat hapa si te ekuacionet, duke i trajtuar shkronjat e tjera si numra.\n\nP = 2(a + b): pjesëtojmë me 2 → P/2 = a + b → b = P/2 − a. Sipërfaqja e trapezit S = (a + c)h/2: shumëzojmë me 2 → 2S = (a + c)h → h = 2S/(a + c).\n\nTe v = v₀ + at: zbresim v₀, pastaj pjesëtojmë me a: t = (v − v₀)/a. Kontroll: zëvendësoni vlera të thjeshta në të dy trajtat.',
        keyPoints: ['Shkronjat e tjera = numra', 'Veprime të kundërta, në radhë të kundërt', 'h = 2S/(a + c);  t = (v − v₀)/a'],
        examples: [
          { example: 'Nga P = 2(a + b) shprehni b.', solution: 'P/2 = a + b → b = P/2 − a.' },
          { example: 'Trapezi ka S = 30 cm², a = 7 cm, c = 5 cm. Gjeni h me formulën e veçuar.', solution: 'h = 2S/(a + c) = 60/12 = 5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Nga P = 2(a + b): b = P − 2a', fix: 'P − 2a = 2b, prandaj b = (P − 2a)/2 = P/2 − a.' },
          { mistake: 'h = 2S/a + c', fix: 'Pjesëtohet me të gjithë shumën: h = 2S/(a + c).' },
        ],
        practice: [
          { problem: 'Nga E = mc² shprehni m.', solution: 'm = E/c²', steps: ['m shumëzohet me c².', 'm = E/c².'] },
          { problem: 'Nga s = (v₀ + v)t/2 shprehni t.', solution: 't = 2s/(v₀ + v)', steps: ['2s = (v₀ + v)t.', 't = 2s/(v₀ + v).'] },
          { problem: 'v = v₀ + at. Gjeni t për v = 20, v₀ = 5, a = 3.', solution: 't = 5', steps: ['t = (v − v₀)/a.', '(20 − 5)/3 = 5.'] },
        ],
      },
      en: {
        title: 'Changing the subject of a formula',
        objectives: ['Change the subject of formulas with brackets and fractions.', 'Use the new formula to find a quantity.'],
        theory: 'A formula is an equation with several letters. To make one of them the subject, use the same steps as for equations, treating the other letters like numbers.\n\nP = 2(a + b): divide by 2 → P/2 = a + b → b = P/2 − a. Area of a trapezium A = (a + c)h/2: multiply by 2 → 2A = (a + c)h → h = 2A/(a + c).\n\nFor v = v₀ + at: subtract v₀, then divide by a: t = (v − v₀)/a. Check: substitute simple values into both forms.',
        keyPoints: ['Other letters = numbers', 'Inverse operations, reverse order', 'h = 2A/(a + c);  t = (v − v₀)/a'],
        examples: [
          { example: 'Make b the subject of P = 2(a + b).', solution: 'P/2 = a + b → b = P/2 − a.' },
          { example: 'A trapezium has A = 30 cm², a = 7 cm, c = 5 cm. Find h with the rearranged formula.', solution: 'h = 2A/(a + c) = 60/12 = 5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'From P = 2(a + b): b = P − 2a', fix: 'P − 2a = 2b, so b = (P − 2a)/2 = P/2 − a.' },
          { mistake: 'h = 2A/a + c', fix: 'Divide by the whole sum: h = 2A/(a + c).' },
        ],
        practice: [
          { problem: 'Make m the subject of E = mc².', solution: 'm = E/c²', steps: ['m is multiplied by c².', 'm = E/c².'] },
          { problem: 'Make t the subject of s = (v₀ + v)t/2.', solution: 't = 2s/(v₀ + v)', steps: ['2s = (v₀ + v)t.', 't = 2s/(v₀ + v).'] },
          { problem: 'v = v₀ + at. Find t for v = 20, v₀ = 5, a = 3.', solution: 't = 5', steps: ['t = (v − v₀)/a.', '(20 − 5)/3 = 5.'] },
        ],
      },
      de: {
        title: 'Formeln umstellen',
        objectives: ['Formeln mit Klammern und Brüchen nach einer Variablen auflösen.', 'Mit der umgestellten Formel eine Größe berechnen.'],
        theory: 'Eine Formel ist eine Gleichung mit mehreren Variablen. Um nach einer aufzulösen, geht man wie bei Gleichungen vor und behandelt die anderen Variablen wie Zahlen.\n\nu = 2(a + b): durch 2 teilen → u/2 = a + b → b = u/2 − a. Trapezfläche A = (a + c)h/2: mit 2 multiplizieren → 2A = (a + c)h → h = 2A/(a + c).\n\nBei v = v₀ + at: v₀ subtrahieren, dann durch a teilen: t = (v − v₀)/a. Probe: einfache Werte in beide Formen einsetzen.',
        keyPoints: ['Andere Variablen = Zahlen', 'Umkehroperationen in umgekehrter Reihenfolge', 'h = 2A/(a + c);  t = (v − v₀)/a'],
        examples: [
          { example: 'Lösen Sie u = 2(a + b) nach b auf.', solution: 'u/2 = a + b → b = u/2 − a.' },
          { example: 'Ein Trapez hat A = 30 cm², a = 7 cm, c = 5 cm. Bestimmen Sie h mit der umgestellten Formel.', solution: 'h = 2A/(a + c) = 60/12 = 5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Aus u = 2(a + b): b = u − 2a', fix: 'u − 2a = 2b, also b = (u − 2a)/2 = u/2 − a.' },
          { mistake: 'h = 2A/a + c', fix: 'Durch die ganze Summe teilen: h = 2A/(a + c).' },
        ],
        practice: [
          { problem: 'Lösen Sie E = mc² nach m auf.', solution: 'm = E/c²', steps: ['m wird mit c² multipliziert.', 'm = E/c².'] },
          { problem: 'Lösen Sie s = (v₀ + v)t/2 nach t auf.', solution: 't = 2s/(v₀ + v)', steps: ['2s = (v₀ + v)t.', 't = 2s/(v₀ + v).'] },
          { problem: 'v = v₀ + at. Bestimmen Sie t für v = 20, v₀ = 5, a = 3.', solution: 't = 5', steps: ['t = (v − v₀)/a.', '(20 − 5)/3 = 5.'] },
        ],
      },
    },

    // ───────── 3. Equations (x − a)(x − b) = 0
    {
      slug: 'g9-equations-inequalities-product-zero',
      visuals: [{
        type: 'functionPlot', view: { xMin: -6, xMax: 3, yMin: -12, yMax: 10 }, height: 230,
        functions: [{ expr: '(2*x - 1) * (x + 4)', label: 'y = (2x − 1)(x + 4)' }],
        points: [{ at: [-4, 0], label: 'x = −4' }, { at: [0.5, 0], label: 'x = 1/2' }],
        caption: alt('(2x − 1)(x + 4) = 0: prodhimi është zero kur njëri faktor është zero, x = 1/2 ose x = −4.', '(2x − 1)(x + 4) = 0: the product is zero when one factor is zero, x = 1/2 or x = −4.', '(2x − 1)(x + 4) = 0: Das Produkt ist null, wenn ein Faktor null ist, x = 1/2 oder x = −4.'),
        alt: alt('Parabola y = (2x − 1)(x + 4) që pret boshtin x në −4 dhe 1/2.', 'The parabola y = (2x − 1)(x + 4) crossing the x-axis at −4 and 1/2.', 'Die Parabel y = (2x − 1)(x + 4) schneidet die x-Achse bei −4 und 1/2.'),
      }],
      answers: {
        examples: [[['sqrt(49)', 7], ['-sqrt(49)', -7]], [['1/2', '1/2', 1e-9, '1/2'], ['-4', -4]]],
        practice: [[['0', 0], ['9', 9]], [['5/2', '5/2', 1e-9, '5/2'], ['-5/2', '-5/2', 1e-9, '−5/2']], [['2', 2], ['5', 5]]],
      },
      al: {
        title: 'Ekuacionet e trajtës (x − a)(x − b) = 0',
        objectives: ['Të zbatoni vetinë e prodhimit zero.', 'Të zgjidhni ekuacione të fuqisë së dytë duke i faktorizuar.'],
        theory: 'Nëse A · B = 0, atëherë A = 0 ose B = 0. Prandaj (x − a)(x − b) = 0 ka zgjidhjet x = a dhe x = b.\n\nPër ta përdorur, sillni ekuacionin në trajtën "… = 0" dhe faktorizoni: x² − 49 = 0 → (x − 7)(x + 7) = 0 → x = ±7. x² = 3x → x² − 3x = 0 → x(x − 3) = 0 → x = 0 ose x = 3.\n\nKur faktori është 2x − 1, zgjidhja është x = 1/2: (2x − 1)(x + 4) = 0 → x = 1/2 ose x = −4.',
        keyPoints: ['A · B = 0 ⟺ A = 0 ose B = 0', 'Fillimisht "… = 0", pastaj faktorizo', 'Mos pjesëtoni me x'],
        examples: [
          { example: 'Zgjidhni x² − 49 = 0.', solution: '(x − 7)(x + 7) = 0 → x = 7 ose x = −7.' },
          { example: 'Zgjidhni (2x − 1)(x + 4) = 0.', solution: '2x − 1 = 0 → x = 1/2; x + 4 = 0 → x = −4.' },
        ],
        commonMistakes: [
          { mistake: 'x² = 3x → x = 3', fix: 'Pjesëtimi me x humbet x = 0. Faktorizoni: x(x − 3) = 0.' },
          { mistake: '(x − 2)(x − 3) = 6 → x − 2 = 6 ose x − 3 = 6', fix: 'Vetia vlen vetëm kur prodhimi është 0.' },
        ],
        practice: [
          { problem: 'Zgjidhni x² − 9x = 0.', solution: 'x = 0 ose x = 9', steps: ['x(x − 9) = 0.', 'x = 0 ose x = 9.'] },
          { problem: 'Zgjidhni 4x² − 25 = 0.', solution: 'x = 5/2 ose x = −5/2', steps: ['(2x − 5)(2x + 5) = 0.', 'x = ±5/2.'] },
          { problem: 'Zgjidhni x² − 7x + 10 = 0.', solution: 'x = 2 ose x = 5', steps: ['(x − 2)(x − 5) = 0.', 'x = 2 ose x = 5.'] },
        ],
      },
      en: {
        title: 'Equations of the form (x − a)(x − b) = 0',
        objectives: ['Use the zero-product property.', 'Solve quadratic equations by factorising.'],
        theory: 'If A · B = 0, then A = 0 or B = 0. So (x − a)(x − b) = 0 has the solutions x = a and x = b.\n\nTo use it, bring the equation to the form "… = 0" and factorise: x² − 49 = 0 → (x − 7)(x + 7) = 0 → x = ±7. x² = 3x → x² − 3x = 0 → x(x − 3) = 0 → x = 0 or x = 3.\n\nWhen a factor is 2x − 1, the solution is x = 1/2: (2x − 1)(x + 4) = 0 → x = 1/2 or x = −4.',
        keyPoints: ['A · B = 0 ⟺ A = 0 or B = 0', 'First "… = 0", then factorise', 'Do not divide by x'],
        examples: [
          { example: 'Solve x² − 49 = 0.', solution: '(x − 7)(x + 7) = 0 → x = 7 or x = −7.' },
          { example: 'Solve (2x − 1)(x + 4) = 0.', solution: '2x − 1 = 0 → x = 1/2; x + 4 = 0 → x = −4.' },
        ],
        commonMistakes: [
          { mistake: 'x² = 3x → x = 3', fix: 'Dividing by x loses x = 0. Factorise: x(x − 3) = 0.' },
          { mistake: '(x − 2)(x − 3) = 6 → x − 2 = 6 or x − 3 = 6', fix: 'The property only works when the product is 0.' },
        ],
        practice: [
          { problem: 'Solve x² − 9x = 0.', solution: 'x = 0 or x = 9', steps: ['x(x − 9) = 0.', 'x = 0 or x = 9.'] },
          { problem: 'Solve 4x² − 25 = 0.', solution: 'x = 5/2 or x = −5/2', steps: ['(2x − 5)(2x + 5) = 0.', 'x = ±5/2.'] },
          { problem: 'Solve x² − 7x + 10 = 0.', solution: 'x = 2 or x = 5', steps: ['(x − 2)(x − 5) = 0.', 'x = 2 or x = 5.'] },
        ],
      },
      de: {
        title: 'Gleichungen der Form (x − a)(x − b) = 0',
        objectives: ['Den Satz vom Nullprodukt anwenden.', 'Quadratische Gleichungen durch Faktorisieren lösen.'],
        theory: 'Ist A · B = 0, dann ist A = 0 oder B = 0. Daher hat (x − a)(x − b) = 0 die Lösungen x = a und x = b.\n\nDazu bringt man die Gleichung auf die Form „… = 0“ und faktorisiert: x² − 49 = 0 → (x − 7)(x + 7) = 0 → x = ±7. x² = 3x → x² − 3x = 0 → x(x − 3) = 0 → x = 0 oder x = 3.\n\nIst ein Faktor 2x − 1, ist die Lösung x = 1/2: (2x − 1)(x + 4) = 0 → x = 1/2 oder x = −4.',
        keyPoints: ['A · B = 0 ⟺ A = 0 oder B = 0', 'Erst „… = 0“, dann faktorisieren', 'Nicht durch x teilen'],
        examples: [
          { example: 'Lösen Sie x² − 49 = 0.', solution: '(x − 7)(x + 7) = 0 → x = 7 oder x = −7.' },
          { example: 'Lösen Sie (2x − 1)(x + 4) = 0.', solution: '2x − 1 = 0 → x = 1/2; x + 4 = 0 → x = −4.' },
        ],
        commonMistakes: [
          { mistake: 'x² = 3x → x = 3', fix: 'Durch das Teilen geht x = 0 verloren. Faktorisieren: x(x − 3) = 0.' },
          { mistake: '(x − 2)(x − 3) = 6 → x − 2 = 6 oder x − 3 = 6', fix: 'Der Satz gilt nur, wenn das Produkt 0 ist.' },
        ],
        practice: [
          { problem: 'Lösen Sie x² − 9x = 0.', solution: 'x = 0 oder x = 9', steps: ['x(x − 9) = 0.', 'x = 0 oder x = 9.'] },
          { problem: 'Lösen Sie 4x² − 25 = 0.', solution: 'x = 5/2 oder x = −5/2', steps: ['(2x − 5)(2x + 5) = 0.', 'x = ±5/2.'] },
          { problem: 'Lösen Sie x² − 7x + 10 = 0.', solution: 'x = 2 oder x = 5', steps: ['(x − 2)(x − 5) = 0.', 'x = 2 oder x = 5.'] },
        ],
      },
    },

    // ───────── 4. Inequalities
    {
      slug: 'g9-equations-inequalities-inequalities',
      visuals: [{
        type: 'numberLine', min: -6, max: 2, step: 1,
        intervals: [{ from: null, to: -2, toOpen: true }],
        points: [{ x: -2, label: 'x < −2', open: true }],
        caption: alt('3 − 2x > 7 → −2x > 4 → x < −2, pra zgjidhja është (−∞, −2).', '3 − 2x > 7 → −2x > 4 → x < −2, so the solution is (−∞, −2).', '3 − 2x > 7 → −2x > 4 → x < −2, also ist die Lösungsmenge (−∞, −2).'),
        alt: alt('Boshti numerik me pjesën majtas të −2 të ngjyrosur dhe rreth të hapur te −2.', 'Number line shaded to the left of −2 with an open circle at −2.', 'Zahlengerade links von −2 markiert, offener Kreis bei −2.'),
      }],
      answers: {
        examples: [[['4 / (-2)', -2]], [['(2 + 3) / (3 - 2)', 5]]],
        practice: [[['(6 + 4) / (4 - 2)', 5]], [['(5 - 1) / (3 + 1)', 1]], [['ceil(7 / 2 + 0.01)', 4]]],
      },
      al: {
        title: 'Inekuacionet',
        objectives: ['Të zgjidhni inekuacione lineare dhe ta shkruani zgjidhjen si interval.', 'Të gjeni zgjidhjet e plota të një inekuacioni.'],
        theory: 'Inekuacionet lineare zgjidhen si ekuacionet; kur shumëzoni ose pjesëtoni me numër negativ, shenja kthehet. Zgjidhja shkruhet si interval.\n\n3 − 2x > 7 → −2x > 4 → x < −2, pra (−∞, −2). Me thyesa, shumëzoni me emëruesin e përbashkët pozitiv: (x − 1)/2 ≥ (x + 1)/3 → 3x − 3 ≥ 2x + 2 → x ≥ 5, pra [5, +∞).\n\nPër zgjidhjet e plota, shikoni intervalin: 2x − 7 > 0 → x > 3,5; numri më i vogël i plotë është 4.',
        keyPoints: ['· ose : me negativ → shenja kthehet', '< > → kllapë e hapur;  ≤ ≥ → e mbyllur', 'Zgjidhja si interval'],
        examples: [
          { example: 'Zgjidhni 3 − 2x > 7.', solution: '−2x > 4 → x < −2: (−∞, −2).' },
          { example: 'Zgjidhni (x − 1)/2 ≥ (x + 1)/3.', solution: '· 6: 3x − 3 ≥ 2x + 2 → x ≥ 5: [5, +∞).' },
        ],
        commonMistakes: [
          { mistake: '−2x > 4 → x > −2', fix: 'Pjesëtimi me −2 e kthen shenjën: x < −2.' },
        ],
        practice: [
          { problem: 'Zgjidhni 4(x − 1) ≤ 2x + 6.', solution: 'x ≤ 5', steps: ['4x − 4 ≤ 2x + 6 → 2x ≤ 10.', 'x ≤ 5.'] },
          { problem: 'Zgjidhni 5 − x < 3x + 1.', solution: 'x > 1', steps: ['−4x < −4.', 'x > 1.'] },
          { problem: 'Cili është numri më i vogël i plotë që plotëson 2x − 7 > 0?', solution: '4', steps: ['x > 3,5.', 'Numri më i vogël i plotë: 4.'] },
        ],
      },
      en: {
        title: 'Inequalities',
        objectives: ['Solve linear inequalities and write the solution as an interval.', 'Find the integer solutions of an inequality.'],
        theory: 'Linear inequalities are solved like equations; when you multiply or divide by a negative number, the sign flips. Write the solution as an interval.\n\n3 − 2x > 7 → −2x > 4 → x < −2, so (−∞, −2). With fractions, multiply by the positive common denominator: (x − 1)/2 ≥ (x + 1)/3 → 3x − 3 ≥ 2x + 2 → x ≥ 5, so [5, +∞).\n\nFor integer solutions, look at the interval: 2x − 7 > 0 → x > 3.5; the smallest integer is 4.',
        keyPoints: ['× or ÷ by a negative → the sign flips', '< > → open bracket;  ≤ ≥ → closed', 'Solution as an interval'],
        examples: [
          { example: 'Solve 3 − 2x > 7.', solution: '−2x > 4 → x < −2: (−∞, −2).' },
          { example: 'Solve (x − 1)/2 ≥ (x + 1)/3.', solution: '× 6: 3x − 3 ≥ 2x + 2 → x ≥ 5: [5, +∞).' },
        ],
        commonMistakes: [
          { mistake: '−2x > 4 → x > −2', fix: 'Dividing by −2 flips the sign: x < −2.' },
        ],
        practice: [
          { problem: 'Solve 4(x − 1) ≤ 2x + 6.', solution: 'x ≤ 5', steps: ['4x − 4 ≤ 2x + 6 → 2x ≤ 10.', 'x ≤ 5.'] },
          { problem: 'Solve 5 − x < 3x + 1.', solution: 'x > 1', steps: ['−4x < −4.', 'x > 1.'] },
          { problem: 'What is the smallest integer that satisfies 2x − 7 > 0?', solution: '4', steps: ['x > 3.5.', 'Smallest integer: 4.'] },
        ],
      },
      de: {
        title: 'Ungleichungen',
        objectives: ['Lineare Ungleichungen lösen und die Lösung als Intervall angeben.', 'Die ganzzahligen Lösungen einer Ungleichung bestimmen.'],
        theory: 'Lineare Ungleichungen löst man wie Gleichungen; beim Multiplizieren oder Dividieren mit einer negativen Zahl dreht sich das Zeichen um. Die Lösung gibt man als Intervall an.\n\n3 − 2x > 7 → −2x > 4 → x < −2, also (−∞, −2). Mit Brüchen: mit dem positiven Hauptnenner multiplizieren: (x − 1)/2 ≥ (x + 1)/3 → 3x − 3 ≥ 2x + 2 → x ≥ 5, also [5, +∞).\n\nFür ganzzahlige Lösungen betrachtet man das Intervall: 2x − 7 > 0 → x > 3,5; die kleinste ganze Zahl ist 4.',
        keyPoints: ['· oder : mit negativer Zahl → Zeichen umdrehen', '< > → runde Klammer;  ≤ ≥ → eckige', 'Lösung als Intervall'],
        examples: [
          { example: 'Lösen Sie 3 − 2x > 7.', solution: '−2x > 4 → x < −2: (−∞, −2).' },
          { example: 'Lösen Sie (x − 1)/2 ≥ (x + 1)/3.', solution: '· 6: 3x − 3 ≥ 2x + 2 → x ≥ 5: [5, +∞).' },
        ],
        commonMistakes: [
          { mistake: '−2x > 4 → x > −2', fix: 'Die Division durch −2 dreht das Zeichen um: x < −2.' },
        ],
        practice: [
          { problem: 'Lösen Sie 4(x − 1) ≤ 2x + 6.', solution: 'x ≤ 5', steps: ['4x − 4 ≤ 2x + 6 → 2x ≤ 10.', 'x ≤ 5.'] },
          { problem: 'Lösen Sie 5 − x < 3x + 1.', solution: 'x > 1', steps: ['−4x < −4.', 'x > 1.'] },
          { problem: 'Welche ist die kleinste ganze Zahl, die 2x − 7 > 0 erfüllt?', solution: '4', steps: ['x > 3,5.', 'Kleinste ganze Zahl: 4.'] },
        ],
      },
    },

    // ───────── 5. Double and absolute-value inequalities
    {
      slug: 'g9-equations-inequalities-double-absolute',
      visuals: [{
        type: 'numberLine', min: -1, max: 7, step: 1,
        intervals: [{ from: 1, to: 5, fromOpen: true, toOpen: true }],
        points: [{ x: 3, label: '3', color: 'muted' }],
        jumps: [{ from: 3, to: 5, label: '2' }, { from: 3, to: 1, label: '2', color: 'secondary' }],
        caption: alt('|x − 3| < 2: numrat më afër se 2 nga 3, pra 1 < x < 5.', '|x − 3| < 2: the numbers closer than 2 to 3, so 1 < x < 5.', '|x − 3| < 2: die Zahlen, deren Abstand zu 3 kleiner als 2 ist, also 1 < x < 5.'),
        alt: alt('Boshti numerik me intervalin e hapur (1, 5) rreth qendrës 3.', 'Number line with the open interval (1, 5) around the centre 3.', 'Zahlengerade mit dem offenen Intervall (1, 5) um die Mitte 3.'),
      }],
      answers: {
        examples: [[['(-3 - 1) / 2', -2], ['(9 - 1) / 2', 4]], [['3 - 2', 1], ['3 + 2', 5]]],
        practice: [[['(1 + 2) / 3', 1], ['(10 + 2) / 3', 4]], [['-1 - 3', -4], ['-1 + 3', 2]], [['3', 3]]],
      },
      al: {
        title: 'Inekuacionet e dyfishta dhe me vlerë absolute',
        objectives: ['Të zgjidhni inekuacione të dyfishta duke vepruar në të tri pjesët.', 'Të zgjidhni |x − a| < r dhe |x − a| > r.'],
        theory: 'Inekuacioni i dyfishtë −3 < 2x + 1 ≤ 9 zgjidhet duke kryer të njëjtin veprim në të tri pjesët: −4 < 2x ≤ 8 → −2 < x ≤ 4, pra (−2, 4].\n\nVlera absolute si largësi: |x − a| < r do të thotë "x është më afër se r nga a": a − r < x < a + r. |x − 3| < 2 → 1 < x < 5.\n\n|x − a| > r do të thotë "x është më larg se r nga a": x < a − r ose x > a + r. |x| ≥ 4 → x ≤ −4 ose x ≥ 4.',
        keyPoints: ['Veprimi bëhet në të tri pjesët', '|x − a| < r ⟺ a − r < x < a + r', '|x − a| > r ⟺ x < a − r ose x > a + r'],
        examples: [
          { example: 'Zgjidhni −3 < 2x + 1 ≤ 9.', solution: '−4 < 2x ≤ 8 → −2 < x ≤ 4.' },
          { example: 'Zgjidhni |x − 3| < 2.', solution: '3 − 2 < x < 3 + 2 → 1 < x < 5.' },
        ],
        commonMistakes: [
          { mistake: '−3 < 2x + 1 ≤ 9 → −3 < 2x ≤ 8', fix: '1 zbritet në të tri pjesët: −4 < 2x ≤ 8.' },
          { mistake: '|x| > 4 → −4 < x < 4', fix: 'Kjo vlen për |x| < 4. Për > zgjidhja janë dy pjesë: x < −4 ose x > 4.' },
        ],
        practice: [
          { problem: 'Zgjidhni 1 ≤ 3x − 2 < 10.', solution: '1 ≤ x < 4', steps: ['3 ≤ 3x < 12.', '1 ≤ x < 4.'] },
          { problem: 'Zgjidhni |x + 1| ≤ 3.', solution: '−4 ≤ x ≤ 2', steps: ['Qendra −1, rrezja 3.', '−4 ≤ x ≤ 2.'] },
          { problem: 'Sa numra të plotë plotësojnë |x − 3| < 2?', solution: '3', steps: ['1 < x < 5.', '2, 3, 4: tre numra.'] },
        ],
      },
      en: {
        title: 'Double and absolute-value inequalities',
        objectives: ['Solve double inequalities by working on all three parts.', 'Solve |x − a| < r and |x − a| > r.'],
        theory: 'The double inequality −3 < 2x + 1 ≤ 9 is solved by doing the same to all three parts: −4 < 2x ≤ 8 → −2 < x ≤ 4, so (−2, 4].\n\nAbsolute value as distance: |x − a| < r means "x is closer than r to a": a − r < x < a + r. |x − 3| < 2 → 1 < x < 5.\n\n|x − a| > r means "x is further than r from a": x < a − r or x > a + r. |x| ≥ 4 → x ≤ −4 or x ≥ 4.',
        keyPoints: ['Do the same to all three parts', '|x − a| < r ⟺ a − r < x < a + r', '|x − a| > r ⟺ x < a − r or x > a + r'],
        examples: [
          { example: 'Solve −3 < 2x + 1 ≤ 9.', solution: '−4 < 2x ≤ 8 → −2 < x ≤ 4.' },
          { example: 'Solve |x − 3| < 2.', solution: '3 − 2 < x < 3 + 2 → 1 < x < 5.' },
        ],
        commonMistakes: [
          { mistake: '−3 < 2x + 1 ≤ 9 → −3 < 2x ≤ 8', fix: 'Subtract 1 in all three parts: −4 < 2x ≤ 8.' },
          { mistake: '|x| > 4 → −4 < x < 4', fix: 'That is for |x| < 4. For > the solution has two parts: x < −4 or x > 4.' },
        ],
        practice: [
          { problem: 'Solve 1 ≤ 3x − 2 < 10.', solution: '1 ≤ x < 4', steps: ['3 ≤ 3x < 12.', '1 ≤ x < 4.'] },
          { problem: 'Solve |x + 1| ≤ 3.', solution: '−4 ≤ x ≤ 2', steps: ['Centre −1, radius 3.', '−4 ≤ x ≤ 2.'] },
          { problem: 'How many integers satisfy |x − 3| < 2?', solution: '3', steps: ['1 < x < 5.', '2, 3, 4: three integers.'] },
        ],
      },
      de: {
        title: 'Doppel- und Betragsungleichungen',
        objectives: ['Doppelungleichungen lösen, indem man alle drei Teile umformt.', '|x − a| < r und |x − a| > r lösen.'],
        theory: 'Die Doppelungleichung −3 < 2x + 1 ≤ 9 löst man, indem man alle drei Teile gleich umformt: −4 < 2x ≤ 8 → −2 < x ≤ 4, also (−2, 4].\n\nBetrag als Abstand: |x − a| < r heißt „x liegt näher als r bei a“: a − r < x < a + r. |x − 3| < 2 → 1 < x < 5.\n\n|x − a| > r heißt „x ist weiter als r von a entfernt“: x < a − r oder x > a + r. |x| ≥ 4 → x ≤ −4 oder x ≥ 4.',
        keyPoints: ['Alle drei Teile gleich umformen', '|x − a| < r ⟺ a − r < x < a + r', '|x − a| > r ⟺ x < a − r oder x > a + r'],
        examples: [
          { example: 'Lösen Sie −3 < 2x + 1 ≤ 9.', solution: '−4 < 2x ≤ 8 → −2 < x ≤ 4.' },
          { example: 'Lösen Sie |x − 3| < 2.', solution: '3 − 2 < x < 3 + 2 → 1 < x < 5.' },
        ],
        commonMistakes: [
          { mistake: '−3 < 2x + 1 ≤ 9 → −3 < 2x ≤ 8', fix: '1 in allen drei Teilen subtrahieren: −4 < 2x ≤ 8.' },
          { mistake: '|x| > 4 → −4 < x < 4', fix: 'Das gilt für |x| < 4. Bei > besteht die Lösung aus zwei Teilen: x < −4 oder x > 4.' },
        ],
        practice: [
          { problem: 'Lösen Sie 1 ≤ 3x − 2 < 10.', solution: '1 ≤ x < 4', steps: ['3 ≤ 3x < 12.', '1 ≤ x < 4.'] },
          { problem: 'Lösen Sie |x + 1| ≤ 3.', solution: '−4 ≤ x ≤ 2', steps: ['Mitte −1, Radius 3.', '−4 ≤ x ≤ 2.'] },
          { problem: 'Wie viele ganze Zahlen erfüllen |x − 3| < 2?', solution: '3', steps: ['1 < x < 5.', '2, 3, 4: drei Zahlen.'] },
        ],
      },
    },
  ],
};
