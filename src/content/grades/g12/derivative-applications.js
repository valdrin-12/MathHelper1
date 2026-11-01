// Grade 12 · Theme 10: Applications of derivatives
const alt = (al, en, de) => ({ al, en, de });

const CUBIC = {
  type: 'functionPlot', view: { xMin: -2.5, xMax: 2.5, yMin: -3, yMax: 3 }, height: 220,
  functions: [{ expr: 'x^3 - 3*x', label: 'y = x³ − 3x' }],
  points: [{ at: [-1, 2], label: alt('maks (−1, 2)', 'max (−1, 2)', 'HP (−1 | 2)') }, { at: [1, -2], label: alt('min (1, −2)', 'min (1, −2)', 'TP (1 | −2)') }],
};

export default {
  id: 'g12-derivative-applications',
  i18n: {
    al: { title: 'Zbatimet e derivateve', description: 'Teoremat e Fermës dhe Lagranzhit, monotonia dhe ekstremumet me derivat, vlerat më të mëdha e më të vogla, problemet e optimizimit, lakueshmëria dhe pikat e infleksionit.' },
    en: { title: 'Applications of derivatives', description: 'Fermat\'s and the mean value theorems, monotonicity and extrema from the derivative, greatest and least values, optimisation, concavity and points of inflection.' },
    de: { title: 'Anwendungen der Ableitung', description: 'Satz von Fermat und Mittelwertsatz, Monotonie und Extrema mit der Ableitung, globale Extremwerte, Optimierung, Krümmung und Wendepunkte.' },
  },
  lessons: [
    // ───────── 1. Fermat and Lagrange
    {
      slug: 'g12-derivative-applications-fermat-lagrange',
      visuals: [{
        type: 'functionPlot', view: { xMin: -0.5, xMax: 2.5, yMin: -1.5, yMax: 5 }, height: 210,
        functions: [
          { expr: 'x^2', label: 'y = x²' },
          { expr: '2*x', domain: [0, 2], color: 'muted', dashed: true, label: alt('sekantja', 'secant', 'Sekante') },
          { expr: '2*x - 1', domain: [0.2, 2.2], color: 'secondary', label: alt('tangjentja në c = 1', 'tangent at c = 1', 'Tangente bei c = 1') },
        ],
        points: [{ at: [0, 0], label: '(0, 0)' }, { at: [2, 4], label: '(2, 4)' }, { at: [1, 1], label: 'c = 1' }],
        caption: alt('Teorema e Lagranzhit: ekziston c me tangjente paralele me sekanten; këtu f′(1) = 2.', 'Mean value theorem: there is a c with tangent parallel to the secant; here f′(1) = 2.', 'Mittelwertsatz: Es gibt ein c mit Tangente parallel zur Sekante; hier f′(1) = 2.'),
        alt: alt('Parabola y = x² me sekanten nga (0, 0) te (2, 4) dhe tangjenten paralele në (1, 1).', 'The parabola y = x² with the secant from (0, 0) to (2, 4) and the parallel tangent at (1, 1).', 'Die Parabel y = x² mit der Sekante von (0 | 0) nach (2 | 4) und der parallelen Tangente in (1 | 1).'),
      }],
      answers: {
        examples: [[['(4 - 0) / (2 - 0) / 2', 1]], [['6 / 2', 3]]],
        practice: [[['sqrt(27 / 3 / 3)', 1.73, 0.005]], [['4 / 2', 2]], 'text'],
      },
      al: {
        title: 'Teoremat e Fermës dhe Lagranzhit',
        objectives: ['Të përdorni teoremën e Fermës: në ekstremum të brendshëm f′ = 0.', 'Të gjeni pikën c të teoremës së Lagranzhit.'],
        theory: 'Teorema e Fermës: nëse f ka ekstremum lokal në një pikë të brendshme a dhe f′(a) ekziston, atëherë f′(a) = 0. E kundërta nuk vlen: (x³)′ = 0 te x = 0, por aty nuk ka ekstremum.\n\nTeorema e Lagranzhit (e vlerës së mesme): nëse f është i vazhdueshëm në [a, b] dhe i derivueshëm në (a, b), ekziston c në (a, b) me\nf′(c) = (f(b) − f(a))/(b − a).\nGjeometrikisht: tangjentja në c është paralele me sekanten. Rasti f(a) = f(b) jep f′(c) = 0 (teorema e Rolit).',
        keyPoints: ['Ekstremum i brendshëm → f′ = 0', 'f′(c) = (f(b) − f(a))/(b − a)', 'f′ = 0 nuk garanton ekstremum'],
        examples: [
          { example: 'Gjeni c të teoremës së Lagranzhit për f(x) = x² në [0, 2].', solution: '(4 − 0)/2 = 2 = 2c → c = 1.' },
          { example: 'Ku mund të ketë ekstremum f(x) = x² − 6x?', solution: 'f′(x) = 2x − 6 = 0 → x = 3 (minimum, f(3) = −9).' },
        ],
        commonMistakes: [
          { mistake: 'Nga f′(a) = 0 përfundohet se ka ekstremum.', fix: 'Kontrolloni ndryshimin e shenjës së f′; te x³ nuk ndryshon.' },
        ],
        practice: [
          { problem: 'Gjeni c të teoremës së Lagranzhit për f(x) = x³ në [0, 3].', solution: 'c = √3 ≈ 1,73', steps: ['(27 − 0)/3 = 9 = 3c².', 'c² = 3 → c = √3 ≈ 1,73.'] },
          { problem: 'f(x) = x² − 4x ka f(0) = f(4) = 0. Gjeni c me f′(c) = 0.', solution: 'c = 2', steps: ['f′(x) = 2x − 4.', '2c − 4 = 0 → c = 2.'] },
          { problem: 'A ka f(x) = x³ ekstremum në x = 0, edhe pse f′(0) = 0?', solution: 'Jo', steps: ['f′(x) = 3x² ≥ 0 në të dy anët.', 'f′ nuk ndryshon shenjë → nuk ka ekstremum.'] },
        ],
      },
      en: {
        title: 'Fermat\'s theorem and the mean value theorem',
        objectives: ['Use Fermat\'s theorem: at an interior extremum f′ = 0.', 'Find the point c of the mean value theorem.'],
        theory: 'Fermat\'s theorem: if f has a local extremum at an interior point a and f′(a) exists, then f′(a) = 0. The converse is false: (x³)′ = 0 at x = 0, but there is no extremum there.\n\nMean value theorem (Lagrange): if f is continuous on [a, b] and differentiable on (a, b), there is a c in (a, b) with\nf′(c) = (f(b) − f(a))/(b − a).\nGeometrically: the tangent at c is parallel to the secant. The case f(a) = f(b) gives f′(c) = 0 (Rolle\'s theorem).',
        keyPoints: ['Interior extremum → f′ = 0', 'f′(c) = (f(b) − f(a))/(b − a)', 'f′ = 0 does not guarantee an extremum'],
        examples: [
          { example: 'Find c in the mean value theorem for f(x) = x² on [0, 2].', solution: '(4 − 0)/2 = 2 = 2c → c = 1.' },
          { example: 'Where can f(x) = x² − 6x have an extremum?', solution: 'f′(x) = 2x − 6 = 0 → x = 3 (minimum, f(3) = −9).' },
        ],
        commonMistakes: [
          { mistake: 'f′(a) = 0 is taken to mean there is an extremum.', fix: 'Check whether f′ changes sign; for x³ it does not.' },
        ],
        practice: [
          { problem: 'Find c in the mean value theorem for f(x) = x³ on [0, 3].', solution: 'c = √3 ≈ 1.73', steps: ['(27 − 0)/3 = 9 = 3c².', 'c² = 3 → c = √3 ≈ 1.73.'] },
          { problem: 'f(x) = x² − 4x has f(0) = f(4) = 0. Find c with f′(c) = 0.', solution: 'c = 2', steps: ['f′(x) = 2x − 4.', '2c − 4 = 0 → c = 2.'] },
          { problem: 'Does f(x) = x³ have an extremum at x = 0, even though f′(0) = 0?', solution: 'No', steps: ['f′(x) = 3x² ≥ 0 on both sides.', 'f′ does not change sign → no extremum.'] },
        ],
      },
      de: {
        title: 'Satz von Fermat und Mittelwertsatz',
        objectives: ['Den Satz von Fermat nutzen: An einem inneren Extremum gilt f′ = 0.', 'Die Stelle c des Mittelwertsatzes bestimmen.'],
        theory: 'Satz von Fermat: Hat f an einer inneren Stelle a ein lokales Extremum und existiert f′(a), dann gilt f′(a) = 0. Die Umkehrung gilt nicht: (x³)′ = 0 bei x = 0, dort liegt aber kein Extremum (Sattelpunkt).\n\nMittelwertsatz (Lagrange): Ist f auf [a, b] stetig und auf (a, b) differenzierbar, gibt es ein c in (a, b) mit\nf′(c) = (f(b) − f(a))/(b − a).\nGeometrisch: Die Tangente bei c ist parallel zur Sekante. Der Fall f(a) = f(b) liefert f′(c) = 0 (Satz von Rolle).',
        keyPoints: ['Inneres Extremum → f′ = 0', 'f′(c) = (f(b) − f(a))/(b − a)', 'f′ = 0 garantiert kein Extremum'],
        examples: [
          { example: 'Bestimmen Sie c im Mittelwertsatz für f(x) = x² auf [0, 2].', solution: '(4 − 0)/2 = 2 = 2c → c = 1.' },
          { example: 'Wo kann f(x) = x² − 6x ein Extremum haben?', solution: 'f′(x) = 2x − 6 = 0 → x = 3 (Minimum, f(3) = −9).' },
        ],
        commonMistakes: [
          { mistake: 'Aus f′(a) = 0 wird auf ein Extremum geschlossen.', fix: 'Prüfen, ob f′ das Vorzeichen wechselt; bei x³ nicht.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie c im Mittelwertsatz für f(x) = x³ auf [0, 3].', solution: 'c = √3 ≈ 1,73', steps: ['(27 − 0)/3 = 9 = 3c².', 'c² = 3 → c = √3 ≈ 1,73.'] },
          { problem: 'f(x) = x² − 4x hat f(0) = f(4) = 0. Bestimmen Sie c mit f′(c) = 0.', solution: 'c = 2', steps: ['f′(x) = 2x − 4.', '2c − 4 = 0 → c = 2.'] },
          { problem: 'Hat f(x) = x³ bei x = 0 ein Extremum, obwohl f′(0) = 0?', solution: 'Nein', steps: ['f′(x) = 3x² ≥ 0 auf beiden Seiten.', 'Kein Vorzeichenwechsel von f′ → kein Extremum.'] },
        ],
      },
    },
    // ───────── 2. Monotonicity
    {
      slug: 'g12-derivative-applications-monotonicity',
      visuals: [{ ...CUBIC,
        caption: alt('f′(x) = 3(x − 1)(x + 1): rritës për x < −1 dhe x > 1, zbritës për −1 < x < 1.', 'f′(x) = 3(x − 1)(x + 1): increasing for x < −1 and x > 1, decreasing for −1 < x < 1.', 'f′(x) = 3(x − 1)(x + 1): steigend für x < −1 und x > 1, fallend für −1 < x < 1.'),
        alt: alt('Grafiku i y = x³ − 3x me maksimum në (−1, 2) dhe minimum në (1, −2).', 'The graph of y = x³ − 3x with a maximum at (−1, 2) and a minimum at (1, −2).', 'Der Graph von y = x³ − 3x mit Hochpunkt (−1 | 2) und Tiefpunkt (1 | −2).'),
      }],
      answers: {
        examples: [[['sqrt(3 / 3)', 1]], 'text'],
        practice: [[['8 / 2', 4]], 'text', [['sqrt(12 / 3)', 2]]],
      },
      al: {
        title: 'Monotonia me derivat',
        objectives: ['Të përcaktoni intervalet e monotonisë nga shenja e f′.', 'Të zgjidhni f′(x) > 0 dhe f′(x) < 0 me tabelë shenjash.'],
        theory: 'Në një interval:\n• f′(x) > 0 → f rritës;\n• f′(x) < 0 → f zbritës.\n\nHapat: gjeni f′, zgjidhni f′(x) = 0 (pikat kritike), ndani boshtin dhe përcaktoni shenjën në çdo pjesë.\n\nf(x) = x³ − 3x: f′(x) = 3x² − 3 = 3(x − 1)(x + 1). Shenja: + për x < −1, − për −1 < x < 1, + për x > 1.',
        keyPoints: ['f′ > 0 → rritës', 'f′ < 0 → zbritës', 'Tabelë shenjash rreth zerove të f′'],
        examples: [
          { example: 'Gjeni intervalet e monotonisë së f(x) = x³ − 3x.', solution: 'f′ = 3(x − 1)(x + 1) = 0 → x = ±1; rritës për x < −1 dhe x > 1, zbritës për −1 < x < 1.' },
          { example: 'Ku është rritës f(x) = eˣ − x?', solution: 'f′ = eˣ − 1 > 0 ⇔ eˣ > 1 ⇔ x > 0.' },
        ],
        commonMistakes: [
          { mistake: 'Monotonia lexohet nga shenja e f, jo e f′.', fix: 'Rritja/zbritja varet nga shenja e derivatit.' },
        ],
        practice: [
          { problem: 'Ku është zbritës f(x) = x² − 8x?', solution: 'x < 4', steps: ['f′ = 2x − 8 < 0.', 'x < 4.'] },
          { problem: 'A është f(x) = 2x³ + 6x rritës kudo?', solution: 'Po', steps: ['f′ = 6x² + 6.', '6x² + 6 > 0 për çdo x → rritës kudo.'] },
          { problem: 'Ku është rritës f(x) = −x³ + 12x?', solution: '−2 < x < 2', steps: ['f′ = −3x² + 12 > 0 ⇔ x² < 4.', '−2 < x < 2.'] },
        ],
      },
      en: {
        title: 'Monotonicity from the derivative',
        objectives: ['Find the intervals where a function increases or decreases from the sign of f′.', 'Solve f′(x) > 0 and f′(x) < 0 with a sign table.'],
        theory: 'On an interval:\n• f′(x) > 0 → f increasing;\n• f′(x) < 0 → f decreasing.\n\nSteps: find f′, solve f′(x) = 0 (critical points), split the axis and find the sign in each part.\n\nf(x) = x³ − 3x: f′(x) = 3x² − 3 = 3(x − 1)(x + 1). Sign: + for x < −1, − for −1 < x < 1, + for x > 1.',
        keyPoints: ['f′ > 0 → increasing', 'f′ < 0 → decreasing', 'Sign table around the zeros of f′'],
        examples: [
          { example: 'Find where f(x) = x³ − 3x increases and decreases.', solution: 'f′ = 3(x − 1)(x + 1) = 0 → x = ±1; increasing for x < −1 and x > 1, decreasing for −1 < x < 1.' },
          { example: 'Where is f(x) = eˣ − x increasing?', solution: 'f′ = eˣ − 1 > 0 ⇔ eˣ > 1 ⇔ x > 0.' },
        ],
        commonMistakes: [
          { mistake: 'Monotonicity is read from the sign of f, not f′.', fix: 'Increase/decrease depends on the sign of the derivative.' },
        ],
        practice: [
          { problem: 'Where is f(x) = x² − 8x decreasing?', solution: 'x < 4', steps: ['f′ = 2x − 8 < 0.', 'x < 4.'] },
          { problem: 'Is f(x) = 2x³ + 6x increasing everywhere?', solution: 'Yes', steps: ['f′ = 6x² + 6.', '6x² + 6 > 0 for every x → increasing everywhere.'] },
          { problem: 'Where is f(x) = −x³ + 12x increasing?', solution: '−2 < x < 2', steps: ['f′ = −3x² + 12 > 0 ⇔ x² < 4.', '−2 < x < 2.'] },
        ],
      },
      de: {
        title: 'Monotonie mit der Ableitung',
        objectives: ['Monotonieintervalle aus dem Vorzeichen von f′ bestimmen.', 'f′(x) > 0 und f′(x) < 0 mit einer Vorzeichentabelle lösen.'],
        theory: 'Auf einem Intervall gilt:\n• f′(x) > 0 → f streng monoton steigend;\n• f′(x) < 0 → f streng monoton fallend.\n\nVorgehen: f′ bestimmen, f′(x) = 0 lösen (kritische Stellen), die Achse aufteilen und in jedem Teil das Vorzeichen bestimmen.\n\nf(x) = x³ − 3x: f′(x) = 3x² − 3 = 3(x − 1)(x + 1). Vorzeichen: + für x < −1, − für −1 < x < 1, + für x > 1.',
        keyPoints: ['f′ > 0 → steigend', 'f′ < 0 → fallend', 'Vorzeichentabelle um die Nullstellen von f′'],
        examples: [
          { example: 'Bestimmen Sie die Monotonieintervalle von f(x) = x³ − 3x.', solution: 'f′ = 3(x − 1)(x + 1) = 0 → x = ±1; steigend für x < −1 und x > 1, fallend für −1 < x < 1.' },
          { example: 'Wo ist f(x) = eˣ − x steigend?', solution: 'f′ = eˣ − 1 > 0 ⇔ eˣ > 1 ⇔ x > 0.' },
        ],
        commonMistakes: [
          { mistake: 'Die Monotonie wird am Vorzeichen von f statt f′ abgelesen.', fix: 'Steigen/Fallen hängt vom Vorzeichen der Ableitung ab.' },
        ],
        practice: [
          { problem: 'Wo ist f(x) = x² − 8x fallend?', solution: 'x < 4', steps: ['f′ = 2x − 8 < 0.', 'x < 4.'] },
          { problem: 'Ist f(x) = 2x³ + 6x überall steigend?', solution: 'Ja', steps: ['f′ = 6x² + 6.', '6x² + 6 > 0 für alle x → überall steigend.'] },
          { problem: 'Wo ist f(x) = −x³ + 12x steigend?', solution: '−2 < x < 2', steps: ['f′ = −3x² + 12 > 0 ⇔ x² < 4.', '−2 < x < 2.'] },
        ],
      },
    },
    // ───────── 3. Extrema
    {
      slug: 'g12-derivative-applications-extrema',
      visuals: [{ ...CUBIC,
        caption: alt('Maksimum lokal (−1, 2), minimum lokal (1, −2).', 'Local maximum (−1, 2), local minimum (1, −2).', 'Hochpunkt (−1 | 2), Tiefpunkt (1 | −2).'),
        alt: alt('Grafiku i y = x³ − 3x me pikat ekstreme të shënuara.', 'The graph of y = x³ − 3x with the extreme points marked.', 'Der Graph von y = x³ − 3x mit markierten Extrempunkten.'),
      }],
      answers: {
        examples: [[['(-1)^3 - 3*(-1)', 2], ['1^3 - 3*1', -2]], [['1 - 2', -1]]],
        practice: [[['2*(-1)^3 - 3*(-1)^2 - 12*(-1)', 7], ['2*8 - 3*4 - 12*2', -20]], [['2 + 4/2', 4]], [['-(2^2) + 4*2 + 1', 5]]],
      },
      al: {
        title: 'Ekstremumet',
        objectives: ['Të gjeni ekstremumet lokale me f′(x) = 0 dhe ndryshimin e shenjës.', 'Të përdorni testin e derivatit të dytë.'],
        theory: 'Ekstremumet lokale gjenden në pikat kritike (f′ = 0) ku f′ ndryshon shenjë:\n• nga + në − → maksimum;\n• nga − në + → minimum.\n\nTesti i derivatit të dytë: nëse f′(a) = 0 dhe f″(a) < 0 → maksimum; f″(a) > 0 → minimum.\n\nf(x) = x³ − 3x: f′ = 0 te x = ±1; f″ = 6x: f″(−1) = −6 < 0 → maks f(−1) = 2; f″(1) = 6 > 0 → min f(1) = −2.',
        keyPoints: ['f′ = 0 dhe ndryshim shenje', '+ → − maks, − → + min', 'f″ < 0 maks, f″ > 0 min'],
        examples: [
          { example: 'Gjeni ekstremumet e f(x) = x³ − 3x.', solution: 'Maks te x = −1, f = 2; min te x = 1, f = −2.' },
          { example: 'Gjeni ekstremumet e f(x) = x⁴ − 2x².', solution: 'f′ = 4x(x² − 1) = 0 → x = 0, ±1; f″ = 12x² − 4: maks te 0 (f = 0), min te ±1 (f = 1 − 2 = −1).' },
        ],
        commonMistakes: [
          { mistake: 'Si vlerë ekstreme jepet x në vend të f(x).', fix: 'Pika ekstreme është (x, f(x)); vlera është f(x).' },
        ],
        practice: [
          { problem: 'Gjeni ekstremumet e f(x) = 2x³ − 3x² − 12x.', solution: 'maks 7 te x = −1; min −20 te x = 2', steps: ['f′ = 6x² − 6x − 12 = 6(x − 2)(x + 1).', 'f(−1) = −2 − 3 + 12 = 7; f(2) = 16 − 12 − 24 = −20.'] },
          { problem: 'Gjeni minimumin e f(x) = x + 4/x për x > 0.', solution: '4 te x = 2', steps: ['f′ = 1 − 4/x² = 0 → x = 2.', 'f(2) = 2 + 2 = 4.'] },
          { problem: 'Gjeni maksimumin e f(x) = −x² + 4x + 1.', solution: '5 te x = 2', steps: ['f′ = −2x + 4 = 0 → x = 2.', 'f(2) = −4 + 8 + 1 = 5.'] },
        ],
      },
      en: {
        title: 'Extrema',
        objectives: ['Find local extrema with f′(x) = 0 and a change of sign.', 'Use the second-derivative test.'],
        theory: 'Local extrema occur at critical points (f′ = 0) where f′ changes sign:\n• from + to − → maximum;\n• from − to + → minimum.\n\nSecond-derivative test: if f′(a) = 0 and f″(a) < 0 → maximum; f″(a) > 0 → minimum.\n\nf(x) = x³ − 3x: f′ = 0 at x = ±1; f″ = 6x: f″(−1) = −6 < 0 → max f(−1) = 2; f″(1) = 6 > 0 → min f(1) = −2.',
        keyPoints: ['f′ = 0 and a sign change', '+ → − max, − → + min', 'f″ < 0 max, f″ > 0 min'],
        examples: [
          { example: 'Find the extrema of f(x) = x³ − 3x.', solution: 'Max at x = −1, f = 2; min at x = 1, f = −2.' },
          { example: 'Find the extrema of f(x) = x⁴ − 2x².', solution: 'f′ = 4x(x² − 1) = 0 → x = 0, ±1; f″ = 12x² − 4: max at 0 (f = 0), min at ±1 (f = 1 − 2 = −1).' },
        ],
        commonMistakes: [
          { mistake: 'x is given as the extreme value instead of f(x).', fix: 'The extreme point is (x, f(x)); the value is f(x).' },
        ],
        practice: [
          { problem: 'Find the extrema of f(x) = 2x³ − 3x² − 12x.', solution: 'max 7 at x = −1; min −20 at x = 2', steps: ['f′ = 6x² − 6x − 12 = 6(x − 2)(x + 1).', 'f(−1) = −2 − 3 + 12 = 7; f(2) = 16 − 12 − 24 = −20.'] },
          { problem: 'Find the minimum of f(x) = x + 4/x for x > 0.', solution: '4 at x = 2', steps: ['f′ = 1 − 4/x² = 0 → x = 2.', 'f(2) = 2 + 2 = 4.'] },
          { problem: 'Find the maximum of f(x) = −x² + 4x + 1.', solution: '5 at x = 2', steps: ['f′ = −2x + 4 = 0 → x = 2.', 'f(2) = −4 + 8 + 1 = 5.'] },
        ],
      },
      de: {
        title: 'Extrempunkte',
        objectives: ['Lokale Extrema mit f′(x) = 0 und Vorzeichenwechsel bestimmen.', 'Das Kriterium mit der zweiten Ableitung anwenden.'],
        theory: 'Lokale Extrema liegen an kritischen Stellen (f′ = 0), an denen f′ das Vorzeichen wechselt:\n• von + nach − → Hochpunkt (Maximum);\n• von − nach + → Tiefpunkt (Minimum).\n\nHinreichendes Kriterium: Ist f′(a) = 0 und f″(a) < 0 → Maximum; f″(a) > 0 → Minimum.\n\nf(x) = x³ − 3x: f′ = 0 bei x = ±1; f″ = 6x: f″(−1) = −6 < 0 → HP f(−1) = 2; f″(1) = 6 > 0 → TP f(1) = −2.',
        keyPoints: ['f′ = 0 und Vorzeichenwechsel', '+ → − Max, − → + Min', 'f″ < 0 Max, f″ > 0 Min'],
        examples: [
          { example: 'Bestimmen Sie die Extrema von f(x) = x³ − 3x.', solution: 'HP bei x = −1, f = 2; TP bei x = 1, f = −2.' },
          { example: 'Bestimmen Sie die Extrema von f(x) = x⁴ − 2x².', solution: 'f′ = 4x(x² − 1) = 0 → x = 0, ±1; f″ = 12x² − 4: Max bei 0 (f = 0), Min bei ±1 (f = 1 − 2 = −1).' },
        ],
        commonMistakes: [
          { mistake: 'Als Extremwert wird x statt f(x) angegeben.', fix: 'Der Extrempunkt ist (x | f(x)); der Wert ist f(x).' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Extrema von f(x) = 2x³ − 3x² − 12x.', solution: 'Max 7 bei x = −1; Min −20 bei x = 2', steps: ['f′ = 6x² − 6x − 12 = 6(x − 2)(x + 1).', 'f(−1) = −2 − 3 + 12 = 7; f(2) = 16 − 12 − 24 = −20.'] },
          { problem: 'Bestimmen Sie das Minimum von f(x) = x + 4/x für x > 0.', solution: '4 bei x = 2', steps: ['f′ = 1 − 4/x² = 0 → x = 2.', 'f(2) = 2 + 2 = 4.'] },
          { problem: 'Bestimmen Sie das Maximum von f(x) = −x² + 4x + 1.', solution: '5 bei x = 2', steps: ['f′ = −2x + 4 = 0 → x = 2.', 'f(2) = −4 + 8 + 1 = 5.'] },
        ],
      },
    },
    // ───────── 4. Greatest and least values
    {
      slug: 'g12-derivative-applications-max-min-values',
      visuals: [{
        type: 'functionPlot', view: { xMin: -0.3, xMax: 2.3, yMin: -2.5, yMax: 2.5 }, height: 200,
        functions: [{ expr: 'x^3 - 3*x', domain: [0, 2], label: 'y = x³ − 3x, [0, 2]' }],
        points: [{ at: [0, 0], label: '(0, 0)' }, { at: [1, -2], label: '(1, −2)' }, { at: [2, 2], label: '(2, 2)' }],
        caption: alt('Në [0, 2]: kandidatët f(0) = 0, f(1) = −2, f(2) = 2 → më e madhja 2, më e vogla −2.', 'On [0, 2]: candidates f(0) = 0, f(1) = −2, f(2) = 2 → greatest 2, least −2.', 'Auf [0, 2]: Kandidaten f(0) = 0, f(1) = −2, f(2) = 2 → größter Wert 2, kleinster −2.'),
        alt: alt('Pjesa e y = x³ − 3x nga x = 0 deri x = 2 me tri pika kandidate.', 'The part of y = x³ − 3x from x = 0 to x = 2 with three candidate points.', 'Der Abschnitt von y = x³ − 3x von x = 0 bis x = 2 mit drei Kandidatenpunkten.'),
      }],
      answers: {
        examples: [[['2^3 - 3*2', 2], ['1^3 - 3*1', -2]], [['0 - 0 + 5', 5], ['4 - 8 + 5', 1]]],
        practice: [[['-(2^3) + 12*2', 16], ['2^3 - 12*2', -16]], [['1 / 4', 0.25, 0, '1/4']], 'text'],
      },
      al: {
        title: 'Vlerat më të mëdha dhe më të vogla',
        objectives: ['Të gjeni vlerën më të madhe dhe më të vogël të një funksioni në interval të mbyllur.', 'Të krahasoni vlerat në pikat kritike dhe në skaje.'],
        theory: 'Një funksion i vazhdueshëm në [a, b] arrin vlerën më të madhe dhe më të vogël. Ato janë ose në pika kritike brenda intervalit, ose në skaje.\n\nHapat:\n1. Gjeni pikat kritike në (a, b).\n2. Llogaritni f në to dhe në a e b.\n3. Më e madhja dhe më e vogla nga këto vlera janë përgjigjet.\n\nf(x) = x³ − 3x në [0, 2]: kritike x = 1 (−2), skajet f(0) = 0, f(2) = 2 → maks 2, min −2.',
        keyPoints: ['Kandidatët: pikat kritike + skajet', 'Krahasoni të gjitha vlerat', 'Pikat kritike jashtë intervalit nuk merren'],
        examples: [
          { example: 'Gjeni vlerën më të madhe dhe më të vogël të f(x) = x³ − 3x në [0, 2].', solution: 'f(0) = 0, f(1) = −2, f(2) = 2 → maks 2, min −2.' },
          { example: 'Gjeni vlerat ekstreme të f(x) = x² − 4x + 5 në [0, 3].', solution: 'Kritike x = 2: f = 1; f(0) = 5, f(3) = 2 → maks 5, min 1.' },
        ],
        commonMistakes: [
          { mistake: 'Harrohen skajet e intervalit.', fix: 'Vlera më e madhe shpesh arrihet në skaj, si f(0) = 5 më sipër.' },
        ],
        practice: [
          { problem: 'Gjeni vlerat ekstreme të f(x) = x³ − 12x në [−3, 3].', solution: 'maks 16, min −16', steps: ['Kritike ±2: f(−2) = 16, f(2) = −16; skajet f(−3) = 9, f(3) = −9.', 'Maks 16, min −16.'] },
          { problem: 'Gjeni vlerën më të vogël të f(x) = 1/x në [1, 4].', solution: '1/4', steps: ['f′ = −1/x² < 0: zbritës, pa pika kritike.', 'Min te x = 4: 1/4 (maks te x = 1: 1).'] },
          { problem: 'Gjeni vlerën më të madhe të sin x në [0, π].', solution: '1 te x = π/2', steps: ['f′ = cos x = 0 → x = π/2.', 'sin(π/2) = 1; skajet japin 0.'] },
        ],
      },
      en: {
        title: 'Greatest and least values',
        objectives: ['Find the greatest and least values of a function on a closed interval.', 'Compare the values at critical points and at the end points.'],
        theory: 'A continuous function on [a, b] has a greatest and a least value. They occur either at critical points inside the interval or at the end points.\n\nSteps:\n1. Find the critical points in (a, b).\n2. Work out f there and at a and b.\n3. The largest and smallest of these values are the answers.\n\nf(x) = x³ − 3x on [0, 2]: critical x = 1 (−2), end points f(0) = 0, f(2) = 2 → max 2, min −2.',
        keyPoints: ['Candidates: critical points + end points', 'Compare all the values', 'Critical points outside the interval do not count'],
        examples: [
          { example: 'Find the greatest and least values of f(x) = x³ − 3x on [0, 2].', solution: 'f(0) = 0, f(1) = −2, f(2) = 2 → max 2, min −2.' },
          { example: 'Find the extreme values of f(x) = x² − 4x + 5 on [0, 3].', solution: 'Critical x = 2: f = 1; f(0) = 5, f(3) = 2 → max 5, min 1.' },
        ],
        commonMistakes: [
          { mistake: 'The end points of the interval are forgotten.', fix: 'The greatest value is often at an end point, like f(0) = 5 above.' },
        ],
        practice: [
          { problem: 'Find the extreme values of f(x) = x³ − 12x on [−3, 3].', solution: 'max 16, min −16', steps: ['Critical ±2: f(−2) = 16, f(2) = −16; end points f(−3) = 9, f(3) = −9.', 'Max 16, min −16.'] },
          { problem: 'Find the least value of f(x) = 1/x on [1, 4].', solution: '1/4', steps: ['f′ = −1/x² < 0: decreasing, no critical points.', 'Min at x = 4: 1/4 (max at x = 1: 1).'] },
          { problem: 'Find the greatest value of sin x on [0, π].', solution: '1 at x = π/2', steps: ['f′ = cos x = 0 → x = π/2.', 'sin(π/2) = 1; the end points give 0.'] },
        ],
      },
      de: {
        title: 'Globale Extremwerte',
        objectives: ['Größten und kleinsten Wert einer Funktion auf einem abgeschlossenen Intervall bestimmen.', 'Die Werte an kritischen Stellen und an den Rändern vergleichen.'],
        theory: 'Eine auf [a, b] stetige Funktion nimmt einen größten und einen kleinsten Wert an. Sie liegen an kritischen Stellen im Inneren oder an den Rändern.\n\nVorgehen:\n1. Kritische Stellen in (a, b) bestimmen.\n2. f dort sowie bei a und b berechnen.\n3. Der größte und kleinste dieser Werte sind die Antwort.\n\nf(x) = x³ − 3x auf [0, 2]: kritisch x = 1 (−2), Ränder f(0) = 0, f(2) = 2 → Max 2, Min −2.',
        keyPoints: ['Kandidaten: kritische Stellen + Ränder', 'Alle Werte vergleichen', 'Kritische Stellen außerhalb zählen nicht'],
        examples: [
          { example: 'Bestimmen Sie größten und kleinsten Wert von f(x) = x³ − 3x auf [0, 2].', solution: 'f(0) = 0, f(1) = −2, f(2) = 2 → Max 2, Min −2.' },
          { example: 'Bestimmen Sie die Extremwerte von f(x) = x² − 4x + 5 auf [0, 3].', solution: 'Kritisch x = 2: f = 1; f(0) = 5, f(3) = 2 → Max 5, Min 1.' },
        ],
        commonMistakes: [
          { mistake: 'Die Intervallränder werden vergessen.', fix: 'Der größte Wert liegt oft am Rand, wie f(0) = 5 oben.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Extremwerte von f(x) = x³ − 12x auf [−3, 3].', solution: 'Max 16, Min −16', steps: ['Kritisch ±2: f(−2) = 16, f(2) = −16; Ränder f(−3) = 9, f(3) = −9.', 'Max 16, Min −16.'] },
          { problem: 'Bestimmen Sie den kleinsten Wert von f(x) = 1/x auf [1, 4].', solution: '1/4', steps: ['f′ = −1/x² < 0: fallend, keine kritischen Stellen.', 'Min bei x = 4: 1/4 (Max bei x = 1: 1).'] },
          { problem: 'Bestimmen Sie den größten Wert von sin x auf [0, π].', solution: '1 bei x = π/2', steps: ['f′ = cos x = 0 → x = π/2.', 'sin(π/2) = 1; die Ränder ergeben 0.'] },
        ],
      },
    },
    // ───────── 5. Optimisation
    {
      slug: 'g12-derivative-applications-optimization',
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 20, yMin: 0, yMax: 110 }, height: 210,
        functions: [{ expr: 'x*(20 - x)', label: 'A(x) = x(20 − x)' }],
        points: [{ at: [10, 100], label: '(10, 100)' }],
        caption: alt('Syprina e drejtëkëndëshit me perimetër 40 m: më e madhja 100 m² kur x = 10 m.', 'Area of a rectangle with perimeter 40 m: greatest 100 m² when x = 10 m.', 'Flächeninhalt eines Rechtecks mit Umfang 40 m: maximal 100 m² bei x = 10 m.'),
        alt: alt('Parabola A(x) = x(20 − x) me maksimum në (10, 100).', 'The parabola A(x) = x(20 − x) with its maximum at (10, 100).', 'Die Parabel A(x) = x(20 − x) mit Maximum in (10 | 100).'),
      }],
      answers: {
        examples: [[['10 * (20 - 10)', 100]], [['2 * (12 - 2*2)^2', 128]]],
        practice: [[['15 * 15', 225]], [['4 * 6', 24]], [['1 + 1/1', 2]]],
      },
      al: {
        title: 'Problemat e optimizimit',
        objectives: ['Ta shprehni madhësinë që optimizohet si funksion i një ndryshoreje.', 'Të gjeni maksimumin ose minimumin me derivat dhe ta interpretoni.'],
        theory: 'Hapat:\n1. Emërtoni ndryshoret dhe shkruani madhësinë që duam ta maksimizojmë/minimizojmë.\n2. Me kushtin e dhënë, shprehni gjithçka me një ndryshore dhe caktoni intervalin.\n3. Derivoni, zgjidhni f′ = 0, kontrolloni që është maksimum/minimum (dhe skajet).\n\nGardh 40 m për drejtkëndësh: 2x + 2y = 40 → y = 20 − x; A(x) = x(20 − x), A′ = 20 − 2x = 0 → x = 10. Drejtkëndëshi më i mirë është katror 10 m × 10 m, A = 100 m².',
        keyPoints: ['Shprehni me një ndryshore', 'f′ = 0, kontroll maks/min', 'Kontrolloni intervalin e lejuar'],
        examples: [
          { example: 'Me 40 m tel rrethojmë një drejtkëndësh. Cilat përmasa japin syprinën më të madhe?', solution: 'A = x(20 − x), A′ = 0 → x = 10: 10 m × 10 m, A = 100 m².' },
          { example: 'Nga një fletë 12 × 12 cm priten katrorë x në qoshe dhe bëhet kuti pa kapak. Për çfarë x vëllimi është më i madh?', solution: 'V = x(12 − 2x)², V′ = (12 − 2x)(12 − 6x) = 0 → x = 2 (x = 6 jep V = 0); V = 2 · 64 = 128 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Merret zgjidhja x = 6 e V′ = 0 pa kontroll.', fix: 'Për x = 6 kutia s\'ka bazë (V = 0): kontrolloni kuptimin.' },
        ],
        practice: [
          { problem: 'Dy numra pozitivë kanë shumë 30. Kur është prodhimi më i madh?', solution: '15 dhe 15, prodhimi 225', steps: ['P = x(30 − x), P′ = 30 − 2x = 0 → x = 15.', '15 · 15 = 225.'] },
          { problem: 'Drejtkëndëshi ka syprinë 36 m². Cili ka perimetrin më të vogël?', solution: 'katrori 6 × 6, P = 24 m', steps: ['P = 2(x + 36/x), P′ = 2(1 − 36/x²) = 0 → x = 6.', 'P = 4 · 6 = 24 m.'] },
          { problem: 'Gjeni vlerën më të vogël të x + 1/x për x > 0.', solution: '2 (te x = 1)', steps: ['f′ = 1 − 1/x² = 0 → x = 1.', 'f(1) = 1 + 1 = 2.'] },
        ],
      },
      en: {
        title: 'Optimisation problems',
        objectives: ['Express the quantity to optimise as a function of one variable.', 'Find the maximum or minimum with the derivative and interpret it.'],
        theory: 'Steps:\n1. Name the variables and write the quantity to maximise/minimise.\n2. Use the given condition to write everything in one variable and fix its interval.\n3. Differentiate, solve f′ = 0, check it is a maximum/minimum (and the end points).\n\nA 40 m fence for a rectangle: 2x + 2y = 40 → y = 20 − x; A(x) = x(20 − x), A′ = 20 − 2x = 0 → x = 10. The best rectangle is a 10 m × 10 m square, A = 100 m².',
        keyPoints: ['Write it in one variable', 'f′ = 0, check max/min', 'Check the allowed interval'],
        examples: [
          { example: 'A rectangle is fenced with 40 m of wire. Which dimensions give the greatest area?', solution: 'A = x(20 − x), A′ = 0 → x = 10: 10 m × 10 m, A = 100 m².' },
          { example: 'Squares of side x are cut from the corners of a 12 × 12 cm sheet to make an open box. For which x is the volume greatest?', solution: 'V = x(12 − 2x)², V′ = (12 − 2x)(12 − 6x) = 0 → x = 2 (x = 6 gives V = 0); V = 2 · 64 = 128 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'The solution x = 6 of V′ = 0 is taken without checking.', fix: 'For x = 6 the box has no base (V = 0): check whether it makes sense.' },
        ],
        practice: [
          { problem: 'Two positive numbers add up to 30. When is their product greatest?', solution: '15 and 15, product 225', steps: ['P = x(30 − x), P′ = 30 − 2x = 0 → x = 15.', '15 · 15 = 225.'] },
          { problem: 'A rectangle has area 36 m². Which one has the smallest perimeter?', solution: 'the 6 × 6 square, P = 24 m', steps: ['P = 2(x + 36/x), P′ = 2(1 − 36/x²) = 0 → x = 6.', 'P = 4 · 6 = 24 m.'] },
          { problem: 'Find the least value of x + 1/x for x > 0.', solution: '2 (at x = 1)', steps: ['f′ = 1 − 1/x² = 0 → x = 1.', 'f(1) = 1 + 1 = 2.'] },
        ],
      },
      de: {
        title: 'Optimierungsaufgaben (Extremwertaufgaben)',
        objectives: ['Die zu optimierende Größe als Funktion einer Variablen aufstellen.', 'Maximum oder Minimum mit der Ableitung bestimmen und deuten.'],
        theory: 'Vorgehen:\n1. Variablen benennen und die zu maximierende/minimierende Größe aufstellen (Hauptbedingung).\n2. Mit der Nebenbedingung alles in einer Variablen ausdrücken und den Definitionsbereich festlegen.\n3. Ableiten, f′ = 0 lösen, Maximum/Minimum prüfen (auch die Ränder).\n\n40 m Zaun für ein Rechteck: 2x + 2y = 40 → y = 20 − x; A(x) = x(20 − x), A′ = 20 − 2x = 0 → x = 10. Das beste Rechteck ist ein Quadrat 10 m × 10 m, A = 100 m².',
        keyPoints: ['In einer Variablen ausdrücken', 'f′ = 0, Max/Min prüfen', 'Definitionsbereich beachten'],
        examples: [
          { example: 'Ein Rechteck wird mit 40 m Draht eingezäunt. Welche Maße ergeben den größten Flächeninhalt?', solution: 'A = x(20 − x), A′ = 0 → x = 10: 10 m × 10 m, A = 100 m².' },
          { example: 'Aus einem 12 × 12 cm Blatt werden an den Ecken Quadrate der Seite x ausgeschnitten und eine offene Schachtel gefaltet. Für welches x ist das Volumen maximal?', solution: 'V = x(12 − 2x)², V′ = (12 − 2x)(12 − 6x) = 0 → x = 2 (x = 6 ergibt V = 0); V = 2 · 64 = 128 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Die Lösung x = 6 von V′ = 0 wird ohne Prüfung genommen.', fix: 'Für x = 6 hat die Schachtel keinen Boden (V = 0): Sinn prüfen.' },
        ],
        practice: [
          { problem: 'Zwei positive Zahlen haben die Summe 30. Wann ist ihr Produkt am größten?', solution: '15 und 15, Produkt 225', steps: ['P = x(30 − x), P′ = 30 − 2x = 0 → x = 15.', '15 · 15 = 225.'] },
          { problem: 'Ein Rechteck hat den Flächeninhalt 36 m². Welches hat den kleinsten Umfang?', solution: 'das Quadrat 6 × 6, U = 24 m', steps: ['U = 2(x + 36/x), U′ = 2(1 − 36/x²) = 0 → x = 6.', 'U = 4 · 6 = 24 m.'] },
          { problem: 'Bestimmen Sie den kleinsten Wert von x + 1/x für x > 0.', solution: '2 (bei x = 1)', steps: ['f′ = 1 − 1/x² = 0 → x = 1.', 'f(1) = 1 + 1 = 2.'] },
        ],
      },
    },
    // ───────── 6. Concavity and inflection
    {
      slug: 'g12-derivative-applications-concavity-inflection',
      visuals: [{
        type: 'functionPlot', view: { xMin: -2, xMax: 6.5, yMin: -36, yMax: 8 }, height: 220,
        functions: [{ expr: 'x^3 - 6*x^2', label: 'y = x³ − 6x²' }],
        points: [{ at: [2, -16], label: alt('infleksion (2, −16)', 'inflection (2, −16)', 'WP (2 | −16)') }],
        caption: alt('f″ = 6x − 12: e lakuar poshtë për x < 2, lart për x > 2; pika e infleksionit (2, −16).', 'f″ = 6x − 12: concave for x < 2, convex for x > 2; point of inflection (2, −16).', 'f″ = 6x − 12: rechtsgekrümmt für x < 2, linksgekrümmt für x > 2; Wendepunkt (2 | −16).'),
        alt: alt('Grafiku i y = x³ − 6x² me pikën e infleksionit (2, −16).', 'The graph of y = x³ − 6x² with the point of inflection (2, −16).', 'Der Graph von y = x³ − 6x² mit dem Wendepunkt (2 | −16).'),
      }],
      answers: {
        examples: [[['12 / 6', 2], ['2^3 - 6*2^2', -16]], 'text'],
        practice: [[['(-1)^3 + 3*(-1)^2 - 1', 1]], 'text', [['pi', 3.14, 0.005]]],
      },
      al: {
        title: 'Lakueshmëria dhe pikat e infleksionit',
        objectives: ['Të përcaktoni ku grafiku është i lakuar lart ose poshtë me shenjën e f″.', 'Të gjeni pikat e infleksionit.'],
        theory: 'Derivati i dytë tregon si përkulet grafiku:\n• f″ > 0: i lakuar lart (konveks, si ∪);\n• f″ < 0: i lakuar poshtë (konkav, si ∩).\n\nPika e infleksionit është aty ku lakueshmëria ndryshon, pra f″ ndryshon shenjë (zakonisht f″ = 0).\n\ny = x³ − 6x²: y′ = 3x² − 12x, y″ = 6x − 12 = 0 → x = 2; y(2) = 8 − 24 = −16. Pika e infleksionit (2, −16).\n\nKujdes: f″ = 0 nuk mjafton; te x⁴, f″(0) = 0 por f″ ≥ 0 në të dy anët.',
        keyPoints: ['f″ > 0 lart (∪), f″ < 0 poshtë (∩)', 'Infleksion: f″ ndryshon shenjë', 'Gjej y duke vendosur x te f'],
        examples: [
          { example: 'Gjeni pikën e infleksionit të y = x³ − 6x².', solution: 'y″ = 6x − 12 = 0 → x = 2; y = 8 − 24 = −16 → (2, −16).' },
          { example: 'A ka f(x) = x⁴ pikë infleksioni në x = 0?', solution: 'Jo: f″ = 12x² ≥ 0 nga të dy anët, nuk ndryshon shenjë.' },
        ],
        commonMistakes: [
          { mistake: 'Pika e infleksionit kërkohet me f′ = 0.', fix: 'Për lakueshmëri përdoret f″; f′ = 0 jep pikat kritike.' },
        ],
        practice: [
          { problem: 'Gjeni pikën e infleksionit të y = x³ + 3x² − 1.', solution: '(−1, 1)', steps: ['y″ = 6x + 6 = 0 → x = −1.', 'y(−1) = −1 + 3 − 1 = 1.'] },
          { problem: 'Ku është i lakuar lart y = x²?', solution: 'kudo', steps: ['y″ = 2 > 0.', 'I lakuar lart për çdo x.'] },
          { problem: 'Gjeni pikën e infleksionit të sin x në (0, 2π).', solution: 'x = π ≈ 3,14', steps: ['(sin x)″ = −sin x = 0 → x = π.', 'Shenja ndryshon nga − në + te π.'] },
        ],
      },
      en: {
        title: 'Concavity and points of inflection',
        objectives: ['Decide where a graph is convex or concave from the sign of f″.', 'Find points of inflection.'],
        theory: 'The second derivative shows how the graph bends:\n• f″ > 0: convex (concave up, like ∪);\n• f″ < 0: concave (concave down, like ∩).\n\nA point of inflection is where the bending changes, i.e. f″ changes sign (usually f″ = 0).\n\ny = x³ − 6x²: y′ = 3x² − 12x, y″ = 6x − 12 = 0 → x = 2; y(2) = 8 − 24 = −16. Point of inflection (2, −16).\n\nCareful: f″ = 0 is not enough; for x⁴, f″(0) = 0 but f″ ≥ 0 on both sides.',
        keyPoints: ['f″ > 0 up (∪), f″ < 0 down (∩)', 'Inflection: f″ changes sign', 'Find y by putting x into f'],
        examples: [
          { example: 'Find the point of inflection of y = x³ − 6x².', solution: 'y″ = 6x − 12 = 0 → x = 2; y = 8 − 24 = −16 → (2, −16).' },
          { example: 'Does f(x) = x⁴ have a point of inflection at x = 0?', solution: 'No: f″ = 12x² ≥ 0 on both sides, no change of sign.' },
        ],
        commonMistakes: [
          { mistake: 'The point of inflection is looked for with f′ = 0.', fix: 'Bending uses f″; f′ = 0 gives the critical points.' },
        ],
        practice: [
          { problem: 'Find the point of inflection of y = x³ + 3x² − 1.', solution: '(−1, 1)', steps: ['y″ = 6x + 6 = 0 → x = −1.', 'y(−1) = −1 + 3 − 1 = 1.'] },
          { problem: 'Where is y = x² concave up?', solution: 'everywhere', steps: ['y″ = 2 > 0.', 'Concave up for every x.'] },
          { problem: 'Find the point of inflection of sin x in (0, 2π).', solution: 'x = π ≈ 3.14', steps: ['(sin x)″ = −sin x = 0 → x = π.', 'The sign changes from − to + at π.'] },
        ],
      },
      de: {
        title: 'Krümmung und Wendepunkte',
        objectives: ['Mit dem Vorzeichen von f″ bestimmen, wo der Graph links- oder rechtsgekrümmt ist.', 'Wendepunkte bestimmen.'],
        theory: 'Die zweite Ableitung beschreibt die Krümmung:\n• f″ > 0: linksgekrümmt (konvex, wie ∪);\n• f″ < 0: rechtsgekrümmt (konkav, wie ∩).\n\nEin Wendepunkt liegt dort, wo die Krümmung wechselt, also f″ das Vorzeichen wechselt (meist f″ = 0).\n\ny = x³ − 6x²: y′ = 3x² − 12x, y″ = 6x − 12 = 0 → x = 2; y(2) = 8 − 24 = −16. Wendepunkt (2 | −16).\n\nAchtung: f″ = 0 reicht nicht; bei x⁴ ist f″(0) = 0, aber f″ ≥ 0 auf beiden Seiten.',
        keyPoints: ['f″ > 0 links (∪), f″ < 0 rechts (∩)', 'Wendepunkt: f″ wechselt das Vorzeichen', 'y durch Einsetzen in f'],
        examples: [
          { example: 'Bestimmen Sie den Wendepunkt von y = x³ − 6x².', solution: 'y″ = 6x − 12 = 0 → x = 2; y = 8 − 24 = −16 → (2 | −16).' },
          { example: 'Hat f(x) = x⁴ bei x = 0 einen Wendepunkt?', solution: 'Nein: f″ = 12x² ≥ 0 auf beiden Seiten, kein Vorzeichenwechsel.' },
        ],
        commonMistakes: [
          { mistake: 'Der Wendepunkt wird mit f′ = 0 gesucht.', fix: 'Für die Krümmung braucht man f″; f′ = 0 liefert die kritischen Stellen.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Wendepunkt von y = x³ + 3x² − 1.', solution: '(−1 | 1)', steps: ['y″ = 6x + 6 = 0 → x = −1.', 'y(−1) = −1 + 3 − 1 = 1.'] },
          { problem: 'Wo ist y = x² linksgekrümmt?', solution: 'überall', steps: ['y″ = 2 > 0.', 'Für alle x linksgekrümmt.'] },
          { problem: 'Bestimmen Sie die Wendestelle von sin x in (0, 2π).', solution: 'x = π ≈ 3,14', steps: ['(sin x)″ = −sin x = 0 → x = π.', 'Bei π wechselt das Vorzeichen von − nach +.'] },
        ],
      },
    },
  ],
};
