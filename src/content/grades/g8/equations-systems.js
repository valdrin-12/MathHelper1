// Grade 8 · Theme 8: Equations, inequalities and systems (12 hours)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g8-equations-systems',
  i18n: {
    al: { title: 'Ekuacionet, inekuacionet dhe sistemet', description: 'Ekuacionet dhe inekuacionet e fuqisë së parë, ekuacionet e fuqisë së dytë dhe sistemet me dy ndryshore.' },
    en: { title: 'Equations, inequalities and systems', description: 'Linear equations and inequalities, quadratic equations and systems of two equations.' },
    de: { title: 'Gleichungen, Ungleichungen und Systeme', description: 'Lineare Gleichungen und Ungleichungen, quadratische Gleichungen und lineare Gleichungssysteme.' },
  },
  lessons: [
    // ───────── 1. Linear equations and inequalities
    {
      slug: 'g8-equations-systems-linear',
      visuals: [{
        type: 'numberLine', min: -7, max: 2, step: 1,
        intervals: [{ from: null, to: -3 }],
        points: [{ x: -3, label: 'x ≤ −3' }],
        caption: alt('5 − 2x ≥ 11 → −2x ≥ 6 → x ≤ −3: pjesëtimi me −2 e ktheu shenjën; rrethi i mbushur tregon se −3 bën pjesë.', '5 − 2x ≥ 11 → −2x ≥ 6 → x ≤ −3: dividing by −2 flipped the sign; the filled circle shows −3 is included.', '5 − 2x ≥ 11 → −2x ≥ 6 → x ≤ −3: Die Division durch −2 drehte das Zeichen um; der gefüllte Kreis zeigt, dass −3 dazugehört.'),
        alt: alt('Boshti numerik me pjesën nga −3 majtas të ngjyrosur dhe rreth të mbushur te −3.', 'Number line with the part from −3 to the left shaded and a filled circle at −3.', 'Zahlenstrahl, ab −3 nach links markiert, mit gefülltem Kreis bei −3.'),
      }],
      answers: {
        examples: [[['(9 + 5) / (5 - 3)', 7]], [['(11 - 5) / (-2)', -3]]],
        practice: [[['(2 + 6) / (2 - 4)', -4]], [['10 / (1/2 + 1/3)', 12]], [['6 / (-3)', -2]]],
      },
      al: {
        title: 'Ekuacionet dhe inekuacionet e fuqisë së parë',
        objectives: ['Të zgjidhni ekuacione me kllapa dhe thyesa.', 'Të zgjidhni inekuacione, duke kthyer shenjën kur pjesëtoni me numër negativ.'],
        theory: 'Ekuacioni i fuqisë së parë sillet në trajtën ax = b. Hapat: (1) hiqni emëruesit duke shumëzuar me emëruesin e përbashkët; (2) hiqni kllapat; (3) kufizat me x në njërën anë, numrat në tjetrën; (4) pjesëtoni me koeficientin; (5) bëni provën.\n\nShembull: (x − 1)/3 = (x + 3)/5 → 5(x − 1) = 3(x + 3) → 5x − 5 = 3x + 9 → 2x = 14 → x = 7.\n\nInekuacionet zgjidhen njësoj, por kur shumëzoni ose pjesëtoni me numër negativ, shenja kthehet: 5 − 2x ≥ 11 → −2x ≥ 6 → x ≤ −3.',
        keyPoints: ['Hiqni emëruesit, pastaj kllapat', 'ax = b → x = b/a', 'Inekuacion: · ose : me negativ → shenja kthehet'],
        examples: [
          { example: 'Zgjidhni (x − 1)/3 = (x + 3)/5.', solution: '5(x − 1) = 3(x + 3) → 5x − 5 = 3x + 9 → 2x = 14 → x = 7.' },
          { example: 'Zgjidhni 5 − 2x ≥ 11.', solution: '−2x ≥ 6 → x ≤ −3 (shenja u kthye).' },
        ],
        commonMistakes: [
          { mistake: '(x − 1)/3 = (x + 3)/5 → 5x − 1 = 3x + 3', fix: 'Numri shumëzohet me të gjithë kllapën: 5(x − 1) = 5x − 5.' },
          { mistake: '−2x ≥ 6 → x ≥ −3', fix: 'Pjesëtimi me −2 e kthen shenjën: x ≤ −3.' },
        ],
        practice: [
          { problem: 'Zgjidhni 2(x − 3) = 4x + 2.', solution: 'x = −4', steps: ['2x − 6 = 4x + 2 → −2x = 8.', 'x = −4.'] },
          { problem: 'Zgjidhni x/2 + x/3 = 10.', solution: 'x = 12', steps: ['Shumëzojmë me 6: 3x + 2x = 60.', '5x = 60, x = 12.'] },
          { problem: 'Zgjidhni 3 − x < 2x + 9.', solution: 'x > −2', steps: ['−3x < 6.', 'Pjesëtojmë me −3: x > −2.'] },
        ],
      },
      en: {
        title: 'Linear equations and inequalities',
        objectives: ['Solve equations with brackets and fractions.', 'Solve inequalities, flipping the sign when dividing by a negative number.'],
        theory: 'A linear equation is brought to the form ax = b. Steps: (1) clear the denominators by multiplying by the common denominator; (2) remove the brackets; (3) x terms on one side, numbers on the other; (4) divide by the coefficient; (5) check.\n\nExample: (x − 1)/3 = (x + 3)/5 → 5(x − 1) = 3(x + 3) → 5x − 5 = 3x + 9 → 2x = 14 → x = 7.\n\nInequalities are solved the same way, but when you multiply or divide by a negative number the sign flips: 5 − 2x ≥ 11 → −2x ≥ 6 → x ≤ −3.',
        keyPoints: ['Clear denominators, then brackets', 'ax = b → x = b/a', 'Inequality: × or ÷ by a negative → the sign flips'],
        examples: [
          { example: 'Solve (x − 1)/3 = (x + 3)/5.', solution: '5(x − 1) = 3(x + 3) → 5x − 5 = 3x + 9 → 2x = 14 → x = 7.' },
          { example: 'Solve 5 − 2x ≥ 11.', solution: '−2x ≥ 6 → x ≤ −3 (the sign flipped).' },
        ],
        commonMistakes: [
          { mistake: '(x − 1)/3 = (x + 3)/5 → 5x − 1 = 3x + 3', fix: 'The number multiplies the whole bracket: 5(x − 1) = 5x − 5.' },
          { mistake: '−2x ≥ 6 → x ≥ −3', fix: 'Dividing by −2 flips the sign: x ≤ −3.' },
        ],
        practice: [
          { problem: 'Solve 2(x − 3) = 4x + 2.', solution: 'x = −4', steps: ['2x − 6 = 4x + 2 → −2x = 8.', 'x = −4.'] },
          { problem: 'Solve x/2 + x/3 = 10.', solution: 'x = 12', steps: ['Multiply by 6: 3x + 2x = 60.', '5x = 60, x = 12.'] },
          { problem: 'Solve 3 − x < 2x + 9.', solution: 'x > −2', steps: ['−3x < 6.', 'Divide by −3: x > −2.'] },
        ],
      },
      de: {
        title: 'Lineare Gleichungen und Ungleichungen',
        objectives: ['Gleichungen mit Klammern und Brüchen lösen.', 'Ungleichungen lösen und beim Teilen durch eine negative Zahl das Zeichen umdrehen.'],
        theory: 'Eine lineare Gleichung bringt man auf die Form ax = b. Schritte: (1) mit dem Hauptnenner multiplizieren; (2) Klammern auflösen; (3) x-Glieder auf eine Seite, Zahlen auf die andere; (4) durch den Koeffizienten teilen; (5) Probe.\n\nBeispiel: (x − 1)/3 = (x + 3)/5 → 5(x − 1) = 3(x + 3) → 5x − 5 = 3x + 9 → 2x = 14 → x = 7.\n\nUngleichungen löst man genauso, aber beim Multiplizieren oder Dividieren mit einer negativen Zahl dreht sich das Zeichen um: 5 − 2x ≥ 11 → −2x ≥ 6 → x ≤ −3.',
        keyPoints: ['Erst Nenner, dann Klammern beseitigen', 'ax = b → x = b/a', 'Ungleichung: · oder : mit negativer Zahl → Zeichen umdrehen'],
        examples: [
          { example: 'Lösen Sie (x − 1)/3 = (x + 3)/5.', solution: '5(x − 1) = 3(x + 3) → 5x − 5 = 3x + 9 → 2x = 14 → x = 7.' },
          { example: 'Lösen Sie 5 − 2x ≥ 11.', solution: '−2x ≥ 6 → x ≤ −3 (Zeichen umgedreht).' },
        ],
        commonMistakes: [
          { mistake: '(x − 1)/3 = (x + 3)/5 → 5x − 1 = 3x + 3', fix: 'Die Zahl multipliziert die ganze Klammer: 5(x − 1) = 5x − 5.' },
          { mistake: '−2x ≥ 6 → x ≥ −3', fix: 'Die Division durch −2 dreht das Zeichen um: x ≤ −3.' },
        ],
        practice: [
          { problem: 'Lösen Sie 2(x − 3) = 4x + 2.', solution: 'x = −4', steps: ['2x − 6 = 4x + 2 → −2x = 8.', 'x = −4.'] },
          { problem: 'Lösen Sie x/2 + x/3 = 10.', solution: 'x = 12', steps: ['Mit 6 multiplizieren: 3x + 2x = 60.', '5x = 60, x = 12.'] },
          { problem: 'Lösen Sie 3 − x < 2x + 9.', solution: 'x > −2', steps: ['−3x < 6.', 'Durch −3 teilen: x > −2.'] },
        ],
      },
    },

    // ───────── 2. Quadratic equations
    {
      slug: 'g8-equations-systems-quadratic',
      visuals: [{
        type: 'functionPlot', view: { xMin: -2, xMax: 8, yMin: -10, yMax: 8 }, height: 230,
        functions: [{ expr: 'x^2 - 6*x', label: 'y = x² − 6x' }],
        points: [{ at: [0, 0], label: 'x = 0' }, { at: [6, 0], label: 'x = 6' }],
        caption: alt('Zgjidhjet e x² − 6x = 0 janë pikat ku grafiku pret boshtin x: x = 0 dhe x = 6.', 'The solutions of x² − 6x = 0 are where the graph crosses the x-axis: x = 0 and x = 6.', 'Die Lösungen von x² − 6x = 0 sind die Schnittpunkte des Graphen mit der x-Achse: x = 0 und x = 6.'),
        alt: alt('Parabola y = x² − 6x që pret boshtin x në 0 dhe 6.', 'The parabola y = x² − 6x crossing the x-axis at 0 and 6.', 'Die Parabel y = x² − 6x schneidet die x-Achse bei 0 und 6.'),
      }],
      answers: {
        examples: [[['0', 0], ['6', 6]], [['sqrt(25)', 5], ['-sqrt(25)', -5]]],
        practice: [[['2', 2], ['3', 3]], [['3 + 4', 7], ['3 - 4', -1]], [['sqrt(9)', 3], ['-sqrt(9)', -3]]],
      },
      al: {
        title: 'Ekuacionet e fuqisë së dytë',
        objectives: ['Të zgjidhni ekuacione të fuqisë së dytë me faktorizim.', 'Të përdorni vetinë: prodhimi është zero kur njëri faktor është zero.'],
        theory: 'Ekuacioni i fuqisë së dytë ka kufizën x²: ax² + bx + c = 0. Mund të ketë dy, një ose asnjë zgjidhje reale.\n\nMetoda kryesore në këtë klasë: faktorizojmë dhe përdorim vetinë A · B = 0 ⟺ A = 0 ose B = 0. x² − 6x = 0 → x(x − 6) = 0 → x = 0 ose x = 6. x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 ose x = 3.\n\nKur nuk ka kufizë me x: x² = 25 → x = 5 ose x = −5 (mos harroni zgjidhjen negative). (x − 3)² = 16 → x − 3 = ±4 → x = 7 ose x = −1.',
        keyPoints: ['A · B = 0 ⟺ A = 0 ose B = 0', 'x² = k (k > 0) → x = ±√k', 'Mos pjesëtoni me x: humbet zgjidhja x = 0'],
        examples: [
          { example: 'Zgjidhni x² − 6x = 0.', solution: 'x(x − 6) = 0 → x = 0 ose x = 6.' },
          { example: 'Zgjidhni x² = 25.', solution: 'x = 5 ose x = −5.' },
        ],
        commonMistakes: [
          { mistake: 'x² − 6x = 0 → pjesëtojmë me x → x = 6', fix: 'Pjesëtimi me x humbet zgjidhjen x = 0; faktorizoni: x(x − 6) = 0.' },
          { mistake: 'x² = 25 → x = 5', fix: 'Edhe (−5)² = 25: x = ±5.' },
        ],
        practice: [
          { problem: 'Zgjidhni x² − 5x + 6 = 0.', solution: 'x = 2 ose x = 3', steps: ['(x − 2)(x − 3) = 0.', 'x = 2 ose x = 3.'] },
          { problem: 'Zgjidhni (x − 3)² = 16.', solution: 'x = 7 ose x = −1', steps: ['x − 3 = 4 ose x − 3 = −4.', 'x = 7 ose x = −1.'] },
          { problem: 'Zgjidhni 2x² = 18.', solution: 'x = 3 ose x = −3', steps: ['x² = 9.', 'x = ±3.'] },
        ],
      },
      en: {
        title: 'Quadratic equations',
        objectives: ['Solve quadratic equations by factorising.', 'Use the fact that a product is zero when one factor is zero.'],
        theory: 'A quadratic equation has an x² term: ax² + bx + c = 0. It can have two, one or no real solutions.\n\nThe main method this year: factorise and use A · B = 0 ⟺ A = 0 or B = 0. x² − 6x = 0 → x(x − 6) = 0 → x = 0 or x = 6. x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 or x = 3.\n\nWhen there is no x term: x² = 25 → x = 5 or x = −5 (do not forget the negative solution). (x − 3)² = 16 → x − 3 = ±4 → x = 7 or x = −1.',
        keyPoints: ['A · B = 0 ⟺ A = 0 or B = 0', 'x² = k (k > 0) → x = ±√k', 'Do not divide by x: you lose x = 0'],
        examples: [
          { example: 'Solve x² − 6x = 0.', solution: 'x(x − 6) = 0 → x = 0 or x = 6.' },
          { example: 'Solve x² = 25.', solution: 'x = 5 or x = −5.' },
        ],
        commonMistakes: [
          { mistake: 'x² − 6x = 0 → divide by x → x = 6', fix: 'Dividing by x loses the solution x = 0; factorise: x(x − 6) = 0.' },
          { mistake: 'x² = 25 → x = 5', fix: '(−5)² = 25 as well: x = ±5.' },
        ],
        practice: [
          { problem: 'Solve x² − 5x + 6 = 0.', solution: 'x = 2 or x = 3', steps: ['(x − 2)(x − 3) = 0.', 'x = 2 or x = 3.'] },
          { problem: 'Solve (x − 3)² = 16.', solution: 'x = 7 or x = −1', steps: ['x − 3 = 4 or x − 3 = −4.', 'x = 7 or x = −1.'] },
          { problem: 'Solve 2x² = 18.', solution: 'x = 3 or x = −3', steps: ['x² = 9.', 'x = ±3.'] },
        ],
      },
      de: {
        title: 'Quadratische Gleichungen',
        objectives: ['Quadratische Gleichungen durch Faktorisieren lösen.', 'Den Satz vom Nullprodukt nutzen.'],
        theory: 'Eine quadratische Gleichung enthält x²: ax² + bx + c = 0. Sie kann zwei, eine oder keine reelle Lösung haben.\n\nDie wichtigste Methode in dieser Klasse: faktorisieren und den Satz vom Nullprodukt nutzen: A · B = 0 ⟺ A = 0 oder B = 0. x² − 6x = 0 → x(x − 6) = 0 → x = 0 oder x = 6. x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 oder x = 3.\n\nOhne x-Glied: x² = 25 → x = 5 oder x = −5 (die negative Lösung nicht vergessen). (x − 3)² = 16 → x − 3 = ±4 → x = 7 oder x = −1.',
        keyPoints: ['A · B = 0 ⟺ A = 0 oder B = 0', 'x² = k (k > 0) → x = ±√k', 'Nicht durch x teilen: x = 0 geht verloren'],
        examples: [
          { example: 'Lösen Sie x² − 6x = 0.', solution: 'x(x − 6) = 0 → x = 0 oder x = 6.' },
          { example: 'Lösen Sie x² = 25.', solution: 'x = 5 oder x = −5.' },
        ],
        commonMistakes: [
          { mistake: 'x² − 6x = 0 → durch x teilen → x = 6', fix: 'Durch das Teilen geht x = 0 verloren; faktorisieren: x(x − 6) = 0.' },
          { mistake: 'x² = 25 → x = 5', fix: 'Auch (−5)² = 25: x = ±5.' },
        ],
        practice: [
          { problem: 'Lösen Sie x² − 5x + 6 = 0.', solution: 'x = 2 oder x = 3', steps: ['(x − 2)(x − 3) = 0.', 'x = 2 oder x = 3.'] },
          { problem: 'Lösen Sie (x − 3)² = 16.', solution: 'x = 7 oder x = −1', steps: ['x − 3 = 4 oder x − 3 = −4.', 'x = 7 oder x = −1.'] },
          { problem: 'Lösen Sie 2x² = 18.', solution: 'x = 3 oder x = −3', steps: ['x² = 9.', 'x = ±3.'] },
        ],
      },
    },

    // ───────── 3. Systems of two equations
    {
      slug: 'g8-equations-systems-systems',
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 6, yMin: -2, yMax: 6 }, height: 230,
        functions: [{ expr: '(7 - x) / 2', label: 'x + 2y = 7' }, { expr: '3*x - 7', label: '3x − y = 7' }],
        points: [{ at: [3, 2], label: '(3, 2)' }],
        caption: alt('Çdo ekuacion është një drejtëz; zgjidhja e sistemit është pika e prerjes (3, 2).', 'Each equation is a line; the solution of the system is the crossing point (3, 2).', 'Jede Gleichung ist eine Gerade; die Lösung des Systems ist der Schnittpunkt (3 | 2).'),
        alt: alt('Dy drejtëza x + 2y = 7 dhe 3x − y = 7 që priten në pikën (3, 2).', 'Two lines x + 2y = 7 and 3x − y = 7 crossing at the point (3, 2).', 'Zwei Geraden x + 2y = 7 und 3x − y = 7, die sich im Punkt (3 | 2) schneiden.'),
      }],
      answers: {
        examples: [[['3', 3], ['(7 - 3) / 2', 2]], [['2', 2], ['5 - 2 * 2', 1]]],
        practice: [[['(10 + 4) / 2', 7], ['10 - 7', 3]], [['(11 + 1) / 3', 4], ['4 - 1', 3]], [['(30 + 8) / 2', 19], ['30 - 19', 11]]],
      },
      al: {
        title: 'Sistemet me dy ndryshore',
        objectives: ['Të zgjidhni sistem dy ekuacionesh lineare me zëvendësim dhe me mbledhje.', 'Të zgjidhni probleme me dy të panjohura.'],
        theory: 'Sistemi me dy ekuacione lineare me dy ndryshore kërkon çiftin (x, y) që plotëson të dy ekuacionet. Grafikisht është pika e prerjes së dy drejtëzave.\n\nZëvendësimi: nga njëri ekuacion shprehim një ndryshore dhe e vendosim te tjetri. Nga 3x − y = 7: y = 3x − 7; te x + 2y = 7: x + 6x − 14 = 7 → x = 3, y = 2.\n\nMbledhja (eliminimi): shumëzojmë ekuacionet që koeficientët e një ndryshoreje të jenë të kundërt dhe i mbledhim. Te x + y = 10, x − y = 4: duke mbledhur 2x = 14, x = 7, y = 3. Gjithmonë bëni provën në të dy ekuacionet.',
        keyPoints: ['Zgjidhja = pika e prerjes', 'Zëvendësimi: shpreh, vendos, zgjidh', 'Mbledhja: koeficientë të kundërt, mblidh'],
        examples: [
          { example: 'Zgjidhni: x + 2y = 7, 3x − y = 7.', solution: 'y = 3x − 7 → x + 2(3x − 7) = 7 → 7x = 21 → x = 3, y = 2.' },
          { example: '2 fletore dhe 1 laps kushtojnë 5 €; 1 fletore dhe 3 lapsa kushtojnë 5 €. Sa kushton secili?', solution: '2f + l = 5, f + 3l = 5 → l = 5 − 2f → f + 15 − 6f = 5 → f = 2 €, l = 1 €.' },
        ],
        commonMistakes: [
          { mistake: 'Gjendet vetëm x dhe harrohet y.', fix: 'Zgjidhja e sistemit është çift: zëvendësoni x për të gjetur y.' },
          { mistake: 'Gabim shenje te zëvendësimi: x + 2(3x − 7) = x + 6x − 7', fix: 'Shumëzohet e gjithë kllapa: 2 · (−7) = −14.' },
        ],
        practice: [
          { problem: 'Zgjidhni: x + y = 10, x − y = 4.', solution: 'x = 7, y = 3', steps: ['Mbledhim: 2x = 14 → x = 7.', 'y = 10 − 7 = 3.'] },
          { problem: 'Zgjidhni: 2x + y = 11, x − y = 1.', solution: 'x = 4, y = 3', steps: ['Mbledhim: 3x = 12 → x = 4.', 'y = 4 − 1 = 3.'] },
          { problem: 'Shuma e dy numrave është 30, ndryshimi 8. Cilët janë numrat?', solution: '19 dhe 11', steps: ['x + y = 30, x − y = 8 → 2x = 38.', 'x = 19, y = 11.'] },
        ],
      },
      en: {
        title: 'Systems of two equations',
        objectives: ['Solve a system of two linear equations by substitution and by elimination.', 'Solve problems with two unknowns.'],
        theory: 'A system of two linear equations in two variables asks for the pair (x, y) that satisfies both equations. On a graph it is the crossing point of two lines.\n\nSubstitution: express one variable from one equation and put it into the other. From 3x − y = 7: y = 3x − 7; into x + 2y = 7: x + 6x − 14 = 7 → x = 3, y = 2.\n\nElimination: multiply the equations so that the coefficients of one variable are opposite, then add them. For x + y = 10, x − y = 4: adding gives 2x = 14, x = 7, y = 3. Always check in both equations.',
        keyPoints: ['Solution = crossing point', 'Substitution: express, substitute, solve', 'Elimination: opposite coefficients, add'],
        examples: [
          { example: 'Solve: x + 2y = 7, 3x − y = 7.', solution: 'y = 3x − 7 → x + 2(3x − 7) = 7 → 7x = 21 → x = 3, y = 2.' },
          { example: '2 notebooks and 1 pen cost €5; 1 notebook and 3 pens cost €5. How much is each?', solution: '2n + p = 5, n + 3p = 5 → p = 5 − 2n → n + 15 − 6n = 5 → n = €2, p = €1.' },
        ],
        commonMistakes: [
          { mistake: 'Finding only x and forgetting y.', fix: 'The solution is a pair: substitute x to find y.' },
          { mistake: 'Sign slip when substituting: x + 2(3x − 7) = x + 6x − 7', fix: 'Multiply the whole bracket: 2 · (−7) = −14.' },
        ],
        practice: [
          { problem: 'Solve: x + y = 10, x − y = 4.', solution: 'x = 7, y = 3', steps: ['Add: 2x = 14 → x = 7.', 'y = 10 − 7 = 3.'] },
          { problem: 'Solve: 2x + y = 11, x − y = 1.', solution: 'x = 4, y = 3', steps: ['Add: 3x = 12 → x = 4.', 'y = 4 − 1 = 3.'] },
          { problem: 'Two numbers add up to 30 and differ by 8. What are they?', solution: '19 and 11', steps: ['x + y = 30, x − y = 8 → 2x = 38.', 'x = 19, y = 11.'] },
        ],
      },
      de: {
        title: 'Lineare Gleichungssysteme',
        objectives: ['Ein System aus zwei linearen Gleichungen mit Einsetzungs- und Additionsverfahren lösen.', 'Textaufgaben mit zwei Unbekannten lösen.'],
        theory: 'Ein lineares Gleichungssystem mit zwei Variablen sucht das Paar (x | y), das beide Gleichungen erfüllt. Grafisch ist es der Schnittpunkt zweier Geraden.\n\nEinsetzungsverfahren: eine Gleichung nach einer Variablen auflösen und in die andere einsetzen. Aus 3x − y = 7: y = 3x − 7; in x + 2y = 7: x + 6x − 14 = 7 → x = 3, y = 2.\n\nAdditionsverfahren: die Gleichungen so multiplizieren, dass die Koeffizienten einer Variablen entgegengesetzt sind, dann addieren. Bei x + y = 10, x − y = 4 ergibt die Addition 2x = 14, x = 7, y = 3. Immer in beiden Gleichungen die Probe machen.',
        keyPoints: ['Lösung = Schnittpunkt', 'Einsetzen: auflösen, einsetzen, lösen', 'Addieren: entgegengesetzte Koeffizienten'],
        examples: [
          { example: 'Lösen Sie: x + 2y = 7, 3x − y = 7.', solution: 'y = 3x − 7 → x + 2(3x − 7) = 7 → 7x = 21 → x = 3, y = 2.' },
          { example: '2 Hefte und 1 Stift kosten 5 €; 1 Heft und 3 Stifte kosten 5 €. Was kostet jedes?', solution: '2h + s = 5, h + 3s = 5 → s = 5 − 2h → h + 15 − 6h = 5 → h = 2 €, s = 1 €.' },
        ],
        commonMistakes: [
          { mistake: 'Nur x bestimmen und y vergessen.', fix: 'Die Lösung ist ein Paar: x einsetzen, um y zu finden.' },
          { mistake: 'Vorzeichenfehler beim Einsetzen: x + 2(3x − 7) = x + 6x − 7', fix: 'Die ganze Klammer multiplizieren: 2 · (−7) = −14.' },
        ],
        practice: [
          { problem: 'Lösen Sie: x + y = 10, x − y = 4.', solution: 'x = 7, y = 3', steps: ['Addieren: 2x = 14 → x = 7.', 'y = 10 − 7 = 3.'] },
          { problem: 'Lösen Sie: 2x + y = 11, x − y = 1.', solution: 'x = 4, y = 3', steps: ['Addieren: 3x = 12 → x = 4.', 'y = 4 − 1 = 3.'] },
          { problem: 'Zwei Zahlen haben die Summe 30 und die Differenz 8. Wie heißen sie?', solution: '19 und 11', steps: ['x + y = 30, x − y = 8 → 2x = 38.', 'x = 19, y = 11.'] },
        ],
      },
    },
  ],
};
