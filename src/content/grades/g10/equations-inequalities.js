// Grade 10 · Theme 10: Equations and inequalities (April–May)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g10-equations-inequalities',
  i18n: {
    al: { title: 'Ekuacionet dhe inekuacionet', description: 'Ekuacionet lineare, ekuacionet e fuqisë së dytë, sistemet me dy ndryshore dhe inekuacionet lineare.' },
    en: { title: 'Equations and inequalities', description: 'Linear equations, quadratic equations, simultaneous equations and linear inequalities.' },
    de: { title: 'Gleichungen und Ungleichungen', description: 'Lineare Gleichungen, quadratische Gleichungen, Gleichungssysteme und lineare Ungleichungen.' },
  },
  lessons: [
    // ───────── 1. Linear equations
    {
      slug: 'g10-equations-inequalities-linear',
      noVisual: 'Solving linear equations is shown step by step in the worked examples.',
      answers: {
        examples: [[['14 / 2', 7]], [['2 + 6', 8]]],
        practice: [[['16 / 2', 8]], [['(23 - 11) / 4', 3]], [['60 / 5', 12]]],
      },
      al: {
        title: 'Ekuacionet lineare',
        objectives: ['Të zgjidhni ekuacione lineare me kllapa dhe me ndryshoren në të dy anët.', 'Të zgjidhni ekuacione me thyesa duke shumëzuar me emëruesin e përbashkët.'],
        theory: 'Një ekuacion linear zgjidhet duke bërë të njëjtin veprim në të dy anët: hapim kllapat, mbledhim termat me x në njërën anë dhe numrat në tjetrën, pastaj pjesëtojmë me koeficientin e x.\n\n5(x − 2) = 3x + 4 → 5x − 10 = 3x + 4 → 2x = 14 → x = 7.\n\nKur ka thyesa, shumëzojmë të gjithë ekuacionin me emëruesin e përbashkët më të vogël, kështu thyesat zhduken. Në fund e kontrollojmë zgjidhjen duke e zëvendësuar.',
        keyPoints: ['I njëjti veprim në të dy anët', 'Kllapat → x në një anë → pjesëto', 'Thyesat: shumëzo me emëruesin e përbashkët'],
        examples: [
          { example: 'Zgjidhni 5(x − 2) = 3x + 4.', solution: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.' },
          { example: 'Zgjidhni (x + 1)/3 = (x − 2)/2.', solution: 'Shumëzojmë me 6: 2(x + 1) = 3(x − 2) → 2x + 2 = 3x − 6 → x = 2 + 6 = 8.' },
        ],
        commonMistakes: [
          { mistake: '−2(x − 4) hapet si −2x − 8.', fix: '−2 · (−4) = +8, pra −2x + 8.' },
          { mistake: 'Te x/4 + x/6 = 5 shumëzohen me 12 vetëm thyesat, jo edhe 5.', fix: 'Çdo term shumëzohet: 3x + 2x = 60.' },
        ],
        practice: [
          { problem: 'Zgjidhni 4x − 7 = 2x + 9.', solution: 'x = 8', steps: ['4x − 2x = 9 + 7 → 2x = 16.', 'x = 8.'] },
          { problem: 'Zgjidhni 3(2x + 1) − 2(x − 4) = 23.', solution: 'x = 3', steps: ['6x + 3 − 2x + 8 = 23 → 4x + 11 = 23.', '4x = 12 → x = 3.'] },
          { problem: 'Zgjidhni x/4 + x/6 = 5.', solution: 'x = 12', steps: ['Shumëzojmë me 12: 3x + 2x = 60.', '5x = 60 → x = 12.'] },
        ],
      },
      en: {
        title: 'Linear equations',
        objectives: ['Solve linear equations with brackets and with the unknown on both sides.', 'Solve equations with fractions by multiplying by the common denominator.'],
        theory: 'A linear equation is solved by doing the same thing to both sides: expand the brackets, collect the x terms on one side and the numbers on the other, then divide by the coefficient of x.\n\n5(x − 2) = 3x + 4 → 5x − 10 = 3x + 4 → 2x = 14 → x = 7.\n\nWhen there are fractions, multiply the whole equation by the lowest common denominator so the fractions disappear. Finally check the solution by substituting it.',
        keyPoints: ['The same operation on both sides', 'Brackets → x on one side → divide', 'Fractions: multiply by the common denominator'],
        examples: [
          { example: 'Solve 5(x − 2) = 3x + 4.', solution: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.' },
          { example: 'Solve (x + 1)/3 = (x − 2)/2.', solution: 'Multiply by 6: 2(x + 1) = 3(x − 2) → 2x + 2 = 3x − 6 → x = 2 + 6 = 8.' },
        ],
        commonMistakes: [
          { mistake: '−2(x − 4) is expanded as −2x − 8.', fix: '−2 · (−4) = +8, so −2x + 8.' },
          { mistake: 'In x/4 + x/6 = 5 only the fractions are multiplied by 12, not the 5.', fix: 'Every term is multiplied: 3x + 2x = 60.' },
        ],
        practice: [
          { problem: 'Solve 4x − 7 = 2x + 9.', solution: 'x = 8', steps: ['4x − 2x = 9 + 7 → 2x = 16.', 'x = 8.'] },
          { problem: 'Solve 3(2x + 1) − 2(x − 4) = 23.', solution: 'x = 3', steps: ['6x + 3 − 2x + 8 = 23 → 4x + 11 = 23.', '4x = 12 → x = 3.'] },
          { problem: 'Solve x/4 + x/6 = 5.', solution: 'x = 12', steps: ['Multiply by 12: 3x + 2x = 60.', '5x = 60 → x = 12.'] },
        ],
      },
      de: {
        title: 'Lineare Gleichungen',
        objectives: ['Lineare Gleichungen mit Klammern und mit der Variablen auf beiden Seiten lösen.', 'Gleichungen mit Brüchen durch Multiplikation mit dem Hauptnenner lösen.'],
        theory: 'Eine lineare Gleichung löst man durch Äquivalenzumformungen auf beiden Seiten: Klammern auflösen, die x-Terme auf eine Seite und die Zahlen auf die andere bringen, dann durch den Koeffizienten von x teilen.\n\n5(x − 2) = 3x + 4 → 5x − 10 = 3x + 4 → 2x = 14 → x = 7.\n\nBei Brüchen multipliziert man die ganze Gleichung mit dem Hauptnenner, dann fallen die Brüche weg. Zum Schluss macht man die Probe durch Einsetzen.',
        keyPoints: ['Auf beiden Seiten dasselbe tun', 'Klammern → x auf eine Seite → teilen', 'Brüche: mit dem Hauptnenner multiplizieren'],
        examples: [
          { example: 'Lösen Sie 5(x − 2) = 3x + 4.', solution: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.' },
          { example: 'Lösen Sie (x + 1)/3 = (x − 2)/2.', solution: 'Mal 6: 2(x + 1) = 3(x − 2) → 2x + 2 = 3x − 6 → x = 2 + 6 = 8.' },
        ],
        commonMistakes: [
          { mistake: '−2(x − 4) wird zu −2x − 8 aufgelöst.', fix: '−2 · (−4) = +8, also −2x + 8.' },
          { mistake: 'Bei x/4 + x/6 = 5 werden nur die Brüche mit 12 multipliziert, nicht die 5.', fix: 'Jeder Term wird multipliziert: 3x + 2x = 60.' },
        ],
        practice: [
          { problem: 'Lösen Sie 4x − 7 = 2x + 9.', solution: 'x = 8', steps: ['4x − 2x = 9 + 7 → 2x = 16.', 'x = 8.'] },
          { problem: 'Lösen Sie 3(2x + 1) − 2(x − 4) = 23.', solution: 'x = 3', steps: ['6x + 3 − 2x + 8 = 23 → 4x + 11 = 23.', '4x = 12 → x = 3.'] },
          { problem: 'Lösen Sie x/4 + x/6 = 5.', solution: 'x = 12', steps: ['Mal 12: 3x + 2x = 60.', '5x = 60 → x = 12.'] },
        ],
      },
    },
    // ───────── 2. Quadratic equations
    {
      slug: 'g10-equations-inequalities-quadratic',
      visuals: [{
        type: 'functionPlot', view: { xMin: -4, xMax: 7, yMin: -14, yMax: 10 }, height: 240,
        functions: [{ expr: 'x^2 - 3*x - 10', label: 'y = x² − 3x − 10' }],
        points: [{ at: [-2, 0], label: '−2' }, { at: [5, 0], label: '5' }],
        caption: alt('Zgjidhjet e x² − 3x − 10 = 0 janë pikat ku parabola pret boshtin x: x = −2 dhe x = 5.', 'The solutions of x² − 3x − 10 = 0 are where the parabola crosses the x-axis: x = −2 and x = 5.', 'Die Lösungen von x² − 3x − 10 = 0 sind die Schnittpunkte der Parabel mit der x-Achse: x = −2 und x = 5.'),
        alt: alt('Parabola y = x² − 3x − 10 që pret boshtin x në −2 dhe 5.', 'The parabola y = x² − 3x − 10 crossing the x-axis at −2 and 5.', 'Die Parabel y = x² − 3x − 10 schneidet die x-Achse bei −2 und 5.'),
      }],
      answers: {
        examples: [[['5^2 - 3*5 - 10', 0, 0, '5'], ['(-2)^2 - 3*(-2) - 10', 0, 0, '-2']], [['(-5 + 7) / 4', 0.5, 0, '1/2'], ['(-5 - 7) / 4', -3]]],
        practice: [[['7^2 - 49', 0, 0, '7'], ['(-7)^2 - 49', 0, 0, '-7']], [['0^2 + 6*0', 0], ['(-6)^2 + 6*(-6)', 0, 0, '-6']], [['5^2 - 4*5 - 5', 0, 0, '5'], ['(-1)^2 - 4*(-1) - 5', 0, 0, '-1']]],
      },
      al: {
        title: 'Ekuacionet e fuqisë së dytë',
        objectives: ['Të zgjidhni ekuacione të fuqisë së dytë me faktorizim.', 'Të përdorni formulën x = (−b ± √D) / (2a) me D = b² − 4ac.'],
        theory: 'Ekuacioni ax² + bx + c = 0 (a ≠ 0) është i fuqisë së dytë. Nëse e faktorizojmë, përdorim faktin se prodhimi është 0 vetëm kur njëri faktor është 0:\nx² − 3x − 10 = 0 → (x − 5)(x + 2) = 0 → x = 5 ose x = −2.\n\nKur faktorizimi nuk shihet lehtë, përdorim formulën: D = b² − 4ac dhe x = (−b ± √D) / (2a). Nëse D > 0 ka dy zgjidhje, nëse D = 0 një, nëse D < 0 asnjë zgjidhje reale.\n\nGrafikisht, zgjidhjet janë pikat ku parabola y = ax² + bx + c pret boshtin x.',
        keyPoints: ['A · B = 0 → A = 0 ose B = 0', 'D = b² − 4ac', 'x = (−b ± √D) / (2a)'],
        examples: [
          { example: 'Zgjidhni x² − 3x − 10 = 0.', solution: '(x − 5)(x + 2) = 0 → x = 5 ose x = −2.' },
          { example: 'Zgjidhni 2x² + 5x − 3 = 0 me formulë.', solution: 'D = 25 + 24 = 49; x = (−5 ± 7)/4 → x = 1/2 ose x = −3.' },
        ],
        commonMistakes: [
          { mistake: 'Te x² + 6x = 0 pjesëtohet me x dhe del vetëm x = −6.', fix: 'Faktorizoni: x(x + 6) = 0 → x = 0 ose x = −6.' },
          { mistake: 'Nga (x − 5)(x + 2) = 0 shkruhet x = −5 ose x = 2.', fix: 'Shenjat ndryshojnë: x − 5 = 0 → x = 5; x + 2 = 0 → x = −2.' },
        ],
        practice: [
          { problem: 'Zgjidhni x² − 49 = 0.', solution: 'x = 7 ose x = −7', steps: ['(x − 7)(x + 7) = 0.', 'x = 7 ose x = −7.'] },
          { problem: 'Zgjidhni x² + 6x = 0.', solution: 'x = 0 ose x = −6', steps: ['x(x + 6) = 0.', 'x = 0 ose x = −6.'] },
          { problem: 'Zgjidhni x² − 4x − 5 = 0.', solution: 'x = 5 ose x = −1', steps: ['(x − 5)(x + 1) = 0.', 'x = 5 ose x = −1.'] },
        ],
      },
      en: {
        title: 'Quadratic equations',
        objectives: ['Solve quadratic equations by factorising.', 'Use the formula x = (−b ± √D) / (2a) with D = b² − 4ac.'],
        theory: 'The equation ax² + bx + c = 0 (a ≠ 0) is quadratic. If we can factorise it, we use the fact that a product is 0 only when one factor is 0:\nx² − 3x − 10 = 0 → (x − 5)(x + 2) = 0 → x = 5 or x = −2.\n\nWhen the factors are not easy to see, use the formula: D = b² − 4ac and x = (−b ± √D) / (2a). If D > 0 there are two solutions, if D = 0 one, if D < 0 no real solution.\n\nOn a graph, the solutions are where the parabola y = ax² + bx + c crosses the x-axis.',
        keyPoints: ['A · B = 0 → A = 0 or B = 0', 'D = b² − 4ac', 'x = (−b ± √D) / (2a)'],
        examples: [
          { example: 'Solve x² − 3x − 10 = 0.', solution: '(x − 5)(x + 2) = 0 → x = 5 or x = −2.' },
          { example: 'Solve 2x² + 5x − 3 = 0 with the formula.', solution: 'D = 25 + 24 = 49; x = (−5 ± 7)/4 → x = 1/2 or x = −3.' },
        ],
        commonMistakes: [
          { mistake: 'In x² + 6x = 0 both sides are divided by x and only x = −6 is found.', fix: 'Factorise: x(x + 6) = 0 → x = 0 or x = −6.' },
          { mistake: 'From (x − 5)(x + 2) = 0, x = −5 or x = 2 is written.', fix: 'The signs change: x − 5 = 0 → x = 5; x + 2 = 0 → x = −2.' },
        ],
        practice: [
          { problem: 'Solve x² − 49 = 0.', solution: 'x = 7 or x = −7', steps: ['(x − 7)(x + 7) = 0.', 'x = 7 or x = −7.'] },
          { problem: 'Solve x² + 6x = 0.', solution: 'x = 0 or x = −6', steps: ['x(x + 6) = 0.', 'x = 0 or x = −6.'] },
          { problem: 'Solve x² − 4x − 5 = 0.', solution: 'x = 5 or x = −1', steps: ['(x − 5)(x + 1) = 0.', 'x = 5 or x = −1.'] },
        ],
      },
      de: {
        title: 'Quadratische Gleichungen',
        objectives: ['Quadratische Gleichungen durch Faktorisieren lösen.', 'Die Lösungsformel x = (−b ± √D) / (2a) mit D = b² − 4ac anwenden.'],
        theory: 'Die Gleichung ax² + bx + c = 0 (a ≠ 0) ist quadratisch. Lässt sie sich faktorisieren, nutzt man den Satz vom Nullprodukt: Ein Produkt ist nur 0, wenn ein Faktor 0 ist:\nx² − 3x − 10 = 0 → (x − 5)(x + 2) = 0 → x = 5 oder x = −2.\n\nSind die Faktoren nicht leicht zu sehen, hilft die Lösungsformel: D = b² − 4ac und x = (−b ± √D) / (2a). Ist D > 0, gibt es zwei Lösungen, bei D = 0 eine, bei D < 0 keine reelle Lösung.\n\nGrafisch sind die Lösungen die Schnittpunkte der Parabel y = ax² + bx + c mit der x-Achse.',
        keyPoints: ['A · B = 0 → A = 0 oder B = 0', 'D = b² − 4ac', 'x = (−b ± √D) / (2a)'],
        examples: [
          { example: 'Lösen Sie x² − 3x − 10 = 0.', solution: '(x − 5)(x + 2) = 0 → x = 5 oder x = −2.' },
          { example: 'Lösen Sie 2x² + 5x − 3 = 0 mit der Lösungsformel.', solution: 'D = 25 + 24 = 49; x = (−5 ± 7)/4 → x = 1/2 oder x = −3.' },
        ],
        commonMistakes: [
          { mistake: 'Bei x² + 6x = 0 wird durch x geteilt und nur x = −6 gefunden.', fix: 'Ausklammern: x(x + 6) = 0 → x = 0 oder x = −6.' },
          { mistake: 'Aus (x − 5)(x + 2) = 0 wird x = −5 oder x = 2.', fix: 'Die Vorzeichen wechseln: x − 5 = 0 → x = 5; x + 2 = 0 → x = −2.' },
        ],
        practice: [
          { problem: 'Lösen Sie x² − 49 = 0.', solution: 'x = 7 oder x = −7', steps: ['(x − 7)(x + 7) = 0.', 'x = 7 oder x = −7.'] },
          { problem: 'Lösen Sie x² + 6x = 0.', solution: 'x = 0 oder x = −6', steps: ['x(x + 6) = 0.', 'x = 0 oder x = −6.'] },
          { problem: 'Lösen Sie x² − 4x − 5 = 0.', solution: 'x = 5 oder x = −1', steps: ['(x − 5)(x + 1) = 0.', 'x = 5 oder x = −1.'] },
        ],
      },
    },
    // ───────── 3. Simultaneous equations
    {
      slug: 'g10-equations-inequalities-systems',
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 7, yMin: -4, yMax: 9 }, height: 240,
        functions: [{ expr: '(16 - 3*x) / 2', label: '3x + 2y = 16' }, { expr: '2*x - 6', label: '2x − y = 6', color: 'secondary' }],
        points: [{ at: [4, 2], label: '(4, 2)' }],
        caption: alt('Zgjidhja e sistemit është pika ku priten dy drejtëzat: x = 4, y = 2.', 'The solution of the system is where the two lines meet: x = 4, y = 2.', 'Die Lösung des Systems ist der Schnittpunkt der beiden Geraden: x = 4, y = 2.'),
        alt: alt('Drejtëzat 3x + 2y = 16 dhe 2x − y = 6 që priten në pikën (4, 2).', 'The lines 3x + 2y = 16 and 2x − y = 6 meeting at the point (4, 2).', 'Die Geraden 3x + 2y = 16 und 2x − y = 6 schneiden sich im Punkt (4 | 2).'),
      }],
      answers: {
        examples: [[['28 / 7', 4], ['2*4 - 6', 2]], [['14 / 2', 7], ['10 - 7', 3]]],
        practice: [[['8 / 4', 2], ['3*2 - 1', 5]], [['18 / 6', 3], ['(12 - 6) / 3', 2]], [['5 - 3.2', 1.8], ['3.2 - 1.8', 1.4]]],
      },
      al: {
        title: 'Sistemet e ekuacioneve',
        objectives: ['Të zgjidhni një sistem me dy ekuacione lineare me zëvendësim dhe me mbledhje.', 'Të shprehni një problem me dy të panjohura si sistem.'],
        theory: 'Një sistem me dy ekuacione dhe dy ndryshore kërkon çiftin (x, y) që plotëson të dy ekuacionet njëkohësisht.\n\nMetoda e zëvendësimit: nga njëri ekuacion shprehim një ndryshore dhe e vendosim te tjetri. 2x − y = 6 → y = 2x − 6; atëherë 3x + 2(2x − 6) = 16 → 7x = 28 → x = 4, y = 2.\n\nMetoda e mbledhjes (eliminimit): i mbledhim ose i zbresim ekuacionet që të zhduket njëra ndryshore. Grafikisht, zgjidhja është pika e prerjes së dy drejtëzave.',
        keyPoints: ['Zgjidhja plotëson të dy ekuacionet', 'Zëvendësimi: shpreh y dhe vendose', 'Mbledhja: zhduk njërën ndryshore'],
        examples: [
          { example: 'Zgjidhni 3x + 2y = 16 dhe 2x − y = 6.', solution: 'y = 2x − 6 → 3x + 4x − 12 = 16 → 7x = 28 → x = 4, y = 2.' },
          { example: 'Zgjidhni x + y = 10 dhe x − y = 4.', solution: 'I mbledhim: 2x = 14 → x = 7; y = 10 − 7 = 3.' },
        ],
        commonMistakes: [
          { mistake: '3x + 2(2x − 6) shkruhet 3x + 4x − 6.', fix: 'Edhe −6 shumëzohet me 2: 3x + 4x − 12.' },
          { mistake: 'Gjendet vetëm x dhe harrohet y.', fix: 'Vendoseni x te njëri ekuacion dhe gjeni edhe y.' },
        ],
        practice: [
          { problem: 'Zgjidhni y = 3x − 1 dhe x + y = 7.', solution: 'x = 2, y = 5', steps: ['x + 3x − 1 = 7 → 4x = 8 → x = 2.', 'y = 3 · 2 − 1 = 5.'] },
          { problem: 'Zgjidhni 2x + 3y = 12 dhe 4x − 3y = 6.', solution: 'x = 3, y = 2', steps: ['I mbledhim: 6x = 18 → x = 3.', '3y = 12 − 6 → y = 2.'] },
          { problem: '2 fletore dhe 1 laps kushtojnë 5 €; 1 fletore dhe 1 laps kushtojnë 3,20 €. Sa kushton secila?', solution: 'fletorja 1,80 €, lapsi 1,40 €', steps: ['Zbresim ekuacionet: fletorja = 5 − 3,20 = 1,80 €.', 'Lapsi = 3,20 − 1,80 = 1,40 €.'] },
        ],
      },
      en: {
        title: 'Simultaneous equations',
        objectives: ['Solve a pair of linear simultaneous equations by substitution and by elimination.', 'Write a problem with two unknowns as a system.'],
        theory: 'A system of two equations in two unknowns asks for the pair (x, y) that satisfies both equations at the same time.\n\nSubstitution: make one unknown the subject of one equation and put it into the other. 2x − y = 6 → y = 2x − 6; then 3x + 2(2x − 6) = 16 → 7x = 28 → x = 4, y = 2.\n\nElimination: add or subtract the equations so that one unknown disappears. On a graph, the solution is the point where the two lines cross.',
        keyPoints: ['The solution satisfies both equations', 'Substitution: write y and put it in', 'Elimination: remove one unknown'],
        examples: [
          { example: 'Solve 3x + 2y = 16 and 2x − y = 6.', solution: 'y = 2x − 6 → 3x + 4x − 12 = 16 → 7x = 28 → x = 4, y = 2.' },
          { example: 'Solve x + y = 10 and x − y = 4.', solution: 'Add them: 2x = 14 → x = 7; y = 10 − 7 = 3.' },
        ],
        commonMistakes: [
          { mistake: '3x + 2(2x − 6) is written 3x + 4x − 6.', fix: 'The −6 is multiplied by 2 too: 3x + 4x − 12.' },
          { mistake: 'Only x is found and y is forgotten.', fix: 'Put x into one of the equations and find y as well.' },
        ],
        practice: [
          { problem: 'Solve y = 3x − 1 and x + y = 7.', solution: 'x = 2, y = 5', steps: ['x + 3x − 1 = 7 → 4x = 8 → x = 2.', 'y = 3 · 2 − 1 = 5.'] },
          { problem: 'Solve 2x + 3y = 12 and 4x − 3y = 6.', solution: 'x = 3, y = 2', steps: ['Add them: 6x = 18 → x = 3.', '3y = 12 − 6 → y = 2.'] },
          { problem: '2 notebooks and 1 pencil cost €5; 1 notebook and 1 pencil cost €3.20. How much does each cost?', solution: 'notebook €1.80, pencil €1.40', steps: ['Subtract the equations: notebook = 5 − 3.20 = €1.80.', 'Pencil = 3.20 − 1.80 = €1.40.'] },
        ],
      },
      de: {
        title: 'Lineare Gleichungssysteme',
        objectives: ['Ein lineares Gleichungssystem mit zwei Variablen mit dem Einsetzungs- und dem Additionsverfahren lösen.', 'Eine Aufgabe mit zwei Unbekannten als Gleichungssystem aufstellen.'],
        theory: 'Ein System aus zwei Gleichungen mit zwei Variablen sucht das Paar (x | y), das beide Gleichungen gleichzeitig erfüllt.\n\nEinsetzungsverfahren: Eine Gleichung nach einer Variablen auflösen und in die andere einsetzen. 2x − y = 6 → y = 2x − 6; dann 3x + 2(2x − 6) = 16 → 7x = 28 → x = 4, y = 2.\n\nAdditionsverfahren: Die Gleichungen addieren oder subtrahieren, sodass eine Variable wegfällt. Grafisch ist die Lösung der Schnittpunkt der beiden Geraden.',
        keyPoints: ['Die Lösung erfüllt beide Gleichungen', 'Einsetzen: nach y auflösen und einsetzen', 'Addieren: eine Variable fällt weg'],
        examples: [
          { example: 'Lösen Sie 3x + 2y = 16 und 2x − y = 6.', solution: 'y = 2x − 6 → 3x + 4x − 12 = 16 → 7x = 28 → x = 4, y = 2.' },
          { example: 'Lösen Sie x + y = 10 und x − y = 4.', solution: 'Addieren: 2x = 14 → x = 7; y = 10 − 7 = 3.' },
        ],
        commonMistakes: [
          { mistake: '3x + 2(2x − 6) wird zu 3x + 4x − 6.', fix: 'Auch −6 wird mit 2 multipliziert: 3x + 4x − 12.' },
          { mistake: 'Nur x wird bestimmt, y wird vergessen.', fix: 'x in eine der Gleichungen einsetzen und auch y berechnen.' },
        ],
        practice: [
          { problem: 'Lösen Sie y = 3x − 1 und x + y = 7.', solution: 'x = 2, y = 5', steps: ['x + 3x − 1 = 7 → 4x = 8 → x = 2.', 'y = 3 · 2 − 1 = 5.'] },
          { problem: 'Lösen Sie 2x + 3y = 12 und 4x − 3y = 6.', solution: 'x = 3, y = 2', steps: ['Addieren: 6x = 18 → x = 3.', '3y = 12 − 6 → y = 2.'] },
          { problem: '2 Hefte und 1 Bleistift kosten 5 €; 1 Heft und 1 Bleistift kosten 3,20 €. Was kostet jedes?', solution: 'Heft 1,80 €, Bleistift 1,40 €', steps: ['Gleichungen subtrahieren: Heft = 5 − 3,20 = 1,80 €.', 'Bleistift = 3,20 − 1,80 = 1,40 €.'] },
        ],
      },
    },
    // ───────── 4. Inequalities
    {
      slug: 'g10-equations-inequalities-inequalities',
      visuals: [{
        type: 'numberLine', min: -4, max: 4, step: 1, labelEvery: 1,
        intervals: [{ from: -2, to: 3, toOpen: true, color: 'primary' }],
        points: [-2, -1, 0, 1, 2].map((x) => ({ x, color: 'success' })),
        caption: alt('−4 ≤ 2x < 6 → −2 ≤ x < 3; numrat e plotë janë −2, −1, 0, 1, 2.', '−4 ≤ 2x < 6 → −2 ≤ x < 3; the integers are −2, −1, 0, 1, 2.', '−4 ≤ 2x < 6 → −2 ≤ x < 3; die ganzen Zahlen sind −2, −1, 0, 1, 2.'),
        alt: alt('Boshti numerik me intervalin nga −2 (i mbyllur) deri 3 (i hapur) dhe pikat −2, −1, 0, 1, 2.', 'Number line with the interval from −2 (closed) to 3 (open) and the points −2, −1, 0, 1, 2.', 'Zahlenstrahl mit dem Intervall von −2 (geschlossen) bis 3 (offen) und den Punkten −2, −1, 0, 1, 2.'),
      }],
      answers: {
        examples: [[['-4 / 2', -2], ['6 / 2', 3]], [['6 / -3', -2]]],
        practice: [[['12 / 2', 6]], [['-4 / -2', 2]], [['-3 / 3', -1], ['12 / 3', 4]]],
      },
      al: {
        title: 'Inekuacionet',
        objectives: ['Të zgjidhni inekuacione lineare dhe të dyfishta.', 'Ta paraqitni zgjidhjen në boshtin numerik dhe të gjeni numrat e plotë që e plotësojnë.'],
        theory: 'Inekuacionet zgjidhen si ekuacionet, me një rregull shtesë: kur shumëzojmë ose pjesëtojmë me numër negativ, shenja e inekuacionit kthehet. −3x + 5 > 11 → −3x > 6 → x < −2.\n\nInekuacioni i dyfishtë −4 ≤ 2x < 6 zgjidhet duke bërë të njëjtin veprim në të tri pjesët: −2 ≤ x < 3.\n\nNë boshtin numerik ≤ dhe ≥ shënohen me pikë të mbushur (vlera përfshihet), < dhe > me pikë të zbrazët.',
        keyPoints: ['Shumëzim/pjesëtim me negativ → shenja kthehet', 'Inekuacioni i dyfishtë: veprimi në të tri pjesët', '≤ pikë e mbushur, < pikë e zbrazët'],
        examples: [
          { example: 'Cilët numra të plotë plotësojnë −4 ≤ 2x < 6?', solution: 'Pjesëtojmë me 2: −2 ≤ x < 3 → −2, −1, 0, 1, 2.' },
          { example: 'Zgjidhni −3x + 5 > 11.', solution: '−3x > 6; pjesëtojmë me −3 dhe kthejmë shenjën: x < −2.' },
        ],
        commonMistakes: [
          { mistake: 'Nga −3x > 6 shkruhet x > −2.', fix: 'Pjesëtimi me −3 e kthen shenjën: x < −2.' },
          { mistake: 'Te −2 ≤ x < 3 numërohet edhe 3.', fix: 'Shenja < do të thotë që 3 nuk përfshihet.' },
        ],
        practice: [
          { problem: 'Zgjidhni 2x − 7 ≤ 5.', solution: 'x ≤ 6', steps: ['2x ≤ 12.', 'x ≤ 6.'] },
          { problem: 'Zgjidhni 5 − 2x < 1.', solution: 'x > 2', steps: ['−2x < −4.', 'Pjesëtojmë me −2 dhe kthejmë shenjën: x > 2.'] },
          { problem: 'Cilët numra të plotë plotësojnë 1 < 3x + 4 ≤ 16?', solution: '0, 1, 2, 3, 4', steps: ['−3 < 3x ≤ 12 → −1 < x ≤ 4.', 'Numrat e plotë: 0, 1, 2, 3, 4.'] },
        ],
      },
      en: {
        title: 'Inequalities',
        objectives: ['Solve linear and double inequalities.', 'Show the solution on a number line and find the integers that satisfy it.'],
        theory: 'Inequalities are solved like equations, with one extra rule: when you multiply or divide by a negative number, the inequality sign turns round. −3x + 5 > 11 → −3x > 6 → x < −2.\n\nThe double inequality −4 ≤ 2x < 6 is solved by doing the same thing to all three parts: −2 ≤ x < 3.\n\nOn a number line, ≤ and ≥ are shown with a filled dot (the value is included), < and > with an open dot.',
        keyPoints: ['× or ÷ by a negative → the sign turns round', 'Double inequality: do it to all three parts', '≤ filled dot, < open dot'],
        examples: [
          { example: 'Which integers satisfy −4 ≤ 2x < 6?', solution: 'Divide by 2: −2 ≤ x < 3 → −2, −1, 0, 1, 2.' },
          { example: 'Solve −3x + 5 > 11.', solution: '−3x > 6; divide by −3 and turn the sign round: x < −2.' },
        ],
        commonMistakes: [
          { mistake: 'From −3x > 6, x > −2 is written.', fix: 'Dividing by −3 turns the sign round: x < −2.' },
          { mistake: 'In −2 ≤ x < 3 the 3 is counted too.', fix: 'The < sign means 3 is not included.' },
        ],
        practice: [
          { problem: 'Solve 2x − 7 ≤ 5.', solution: 'x ≤ 6', steps: ['2x ≤ 12.', 'x ≤ 6.'] },
          { problem: 'Solve 5 − 2x < 1.', solution: 'x > 2', steps: ['−2x < −4.', 'Divide by −2 and turn the sign round: x > 2.'] },
          { problem: 'Which integers satisfy 1 < 3x + 4 ≤ 16?', solution: '0, 1, 2, 3, 4', steps: ['−3 < 3x ≤ 12 → −1 < x ≤ 4.', 'The integers: 0, 1, 2, 3, 4.'] },
        ],
      },
      de: {
        title: 'Ungleichungen',
        objectives: ['Lineare und doppelte Ungleichungen lösen.', 'Die Lösung am Zahlenstrahl darstellen und die ganzen Zahlen bestimmen, die sie erfüllen.'],
        theory: 'Ungleichungen löst man wie Gleichungen, mit einer zusätzlichen Regel: Bei Multiplikation oder Division mit einer negativen Zahl dreht sich das Ungleichheitszeichen um. −3x + 5 > 11 → −3x > 6 → x < −2.\n\nDie Doppelungleichung −4 ≤ 2x < 6 löst man, indem man in allen drei Teilen dasselbe tut: −2 ≤ x < 3.\n\nAm Zahlenstrahl zeigt man ≤ und ≥ mit einem gefüllten Punkt (der Wert gehört dazu), < und > mit einem offenen Punkt.',
        keyPoints: ['· oder : mit negativer Zahl → Zeichen umdrehen', 'Doppelungleichung: in allen drei Teilen umformen', '≤ gefüllter Punkt, < offener Punkt'],
        examples: [
          { example: 'Welche ganzen Zahlen erfüllen −4 ≤ 2x < 6?', solution: 'Durch 2 teilen: −2 ≤ x < 3 → −2, −1, 0, 1, 2.' },
          { example: 'Lösen Sie −3x + 5 > 11.', solution: '−3x > 6; durch −3 teilen und das Zeichen umdrehen: x < −2.' },
        ],
        commonMistakes: [
          { mistake: 'Aus −3x > 6 wird x > −2.', fix: 'Die Division durch −3 dreht das Zeichen um: x < −2.' },
          { mistake: 'Bei −2 ≤ x < 3 wird die 3 mitgezählt.', fix: 'Das Zeichen < bedeutet, dass 3 nicht dazugehört.' },
        ],
        practice: [
          { problem: 'Lösen Sie 2x − 7 ≤ 5.', solution: 'x ≤ 6', steps: ['2x ≤ 12.', 'x ≤ 6.'] },
          { problem: 'Lösen Sie 5 − 2x < 1.', solution: 'x > 2', steps: ['−2x < −4.', 'Durch −2 teilen und das Zeichen umdrehen: x > 2.'] },
          { problem: 'Welche ganzen Zahlen erfüllen 1 < 3x + 4 ≤ 16?', solution: '0, 1, 2, 3, 4', steps: ['−3 < 3x ≤ 12 → −1 < x ≤ 4.', 'Die ganzen Zahlen: 0, 1, 2, 3, 4.'] },
        ],
      },
    },
  ],
};
