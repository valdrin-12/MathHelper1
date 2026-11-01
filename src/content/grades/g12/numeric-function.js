// Grade 12 · Theme 1: The numeric function
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g12-numeric-function',
  i18n: {
    al: { title: 'Funksioni numerik', description: 'Bashkësia e përkufizimit, monotonia, ekstremumet, çiftësia, periodiciteti, përbërja e funksioneve dhe funksioni invers.' },
    en: { title: 'Functions', description: 'Domain and range, increasing and decreasing functions, extrema, odd and even functions, periodicity, composite and inverse functions.' },
    de: { title: 'Reelle Funktionen', description: 'Definitions- und Wertebereich, Monotonie, Extrema, Symmetrie, Periodizität, Verkettung und Umkehrfunktion.' },
  },
  lessons: [
    // ───────── 1. Graph, domain and range
    {
      slug: 'g12-numeric-function-graph',
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 11, yMin: -1, yMax: 4 }, height: 200,
        functions: [{ expr: 'sqrt(x - 2)', domain: [2, 11], label: 'y = √(x − 2)' }],
        points: [{ at: [2, 0], label: '(2, 0)' }, { at: [6, 2], label: '(6, 2)' }],
        caption: alt('Grafiku fillon te x = 2: bashkësia e përkufizimit x ≥ 2, vlerat y ≥ 0.', 'The graph starts at x = 2: domain x ≥ 2, range y ≥ 0.', 'Der Graph beginnt bei x = 2: Definitionsbereich x ≥ 2, Wertebereich y ≥ 0.'),
        alt: alt('Grafiku i y = √(x − 2), që nis në (2, 0) dhe kalon nëpër (6, 2).', 'The graph of y = √(x − 2), starting at (2, 0) and passing through (6, 2).', 'Der Graph von y = √(x − 2), beginnend bei (2 | 0), durch (6 | 2).'),
      }],
      answers: {
        examples: ['text', [['5^2 - 4*5', 5]]],
        practice: ['text', [['6 / 2', 3]], [['(-2)^2 - 4*(-2)', 12]]],
      },
      al: {
        title: 'Grafiku dhe bashkësia e përkufizimit',
        objectives: ['Të gjeni bashkësinë e përkufizimit të funksioneve me rrënjë dhe me thyesa.', 'Të llogaritni vlera të funksionit dhe t\'i lexoni nga grafiku.'],
        theory: 'Funksioni f i shoqëron çdo x nga bashkësia e përkufizimit D(f) një vlerë të vetme f(x). Bashkësia e vlerave është bashkësia e të gjitha f(x).\n\nKufizimet më të zakonshme:\n• nën rrënjën katrore: shprehja ≥ 0 → f(x) = √(x − 2) ka D: x ≥ 2;\n• në emërues: shprehja ≠ 0 → f(x) = 1/(x − 3) ka D: x ≠ 3.\n\nGrafiku është bashkësia e pikave (x, f(x)); pika (6, 2) është në grafik sepse f(6) = √4 = 2.',
        keyPoints: ['√(A): A ≥ 0', '1/A: A ≠ 0', 'Pika (a, b) në grafik ⇔ f(a) = b'],
        examples: [
          { example: 'Gjeni bashkësinë e përkufizimit të f(x) = √(x − 2).', solution: 'x − 2 ≥ 0 → x ≥ 2.' },
          { example: 'Për f(x) = x² − 4x llogaritni f(5).', solution: 'f(5) = 25 − 20 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'Te √(x − 2) shkruhet x > 2.', fix: '√0 = 0 ekziston, pra x = 2 përfshihet: x ≥ 2.' },
          { mistake: 'Harrohet kufizimi i emëruesit.', fix: 'Kontrolloni gjithmonë ku emëruesi bëhet 0.' },
        ],
        practice: [
          { problem: 'Gjeni bashkësinë e përkufizimit të f(x) = 1/(x − 3).', solution: 'x ≠ 3', steps: ['Emëruesi x − 3 ≠ 0.', 'x ≠ 3 (të gjithë numrat realë përveç 3).'] },
          { problem: 'Gjeni bashkësinë e përkufizimit të f(x) = √(6 − 2x).', solution: 'x ≤ 3', steps: ['6 − 2x ≥ 0 → 2x ≤ 6.', 'x ≤ 3.'] },
          { problem: 'Për f(x) = x² − 4x llogaritni f(−2).', solution: '12', steps: ['(−2)² − 4 · (−2) = 4 + 8.', '= 12.'] },
        ],
      },
      en: {
        title: 'Graph, domain and range',
        objectives: ['Find the domain of functions with roots and fractions.', 'Work out function values and read them from a graph.'],
        theory: 'A function f assigns to each x in its domain D(f) exactly one value f(x). The range is the set of all values f(x).\n\nThe most common restrictions:\n• under a square root: expression ≥ 0 → f(x) = √(x − 2) has domain x ≥ 2;\n• in a denominator: expression ≠ 0 → f(x) = 1/(x − 3) has domain x ≠ 3.\n\nThe graph is the set of points (x, f(x)); the point (6, 2) is on the graph because f(6) = √4 = 2.',
        keyPoints: ['√(A): A ≥ 0', '1/A: A ≠ 0', 'Point (a, b) on the graph ⇔ f(a) = b'],
        examples: [
          { example: 'Find the domain of f(x) = √(x − 2).', solution: 'x − 2 ≥ 0 → x ≥ 2.' },
          { example: 'For f(x) = x² − 4x work out f(5).', solution: 'f(5) = 25 − 20 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'For √(x − 2), x > 2 is written.', fix: '√0 = 0 exists, so x = 2 is included: x ≥ 2.' },
          { mistake: 'The restriction from the denominator is forgotten.', fix: 'Always check where the denominator becomes 0.' },
        ],
        practice: [
          { problem: 'Find the domain of f(x) = 1/(x − 3).', solution: 'x ≠ 3', steps: ['The denominator x − 3 ≠ 0.', 'x ≠ 3 (all real numbers except 3).'] },
          { problem: 'Find the domain of f(x) = √(6 − 2x).', solution: 'x ≤ 3', steps: ['6 − 2x ≥ 0 → 2x ≤ 6.', 'x ≤ 3.'] },
          { problem: 'For f(x) = x² − 4x work out f(−2).', solution: '12', steps: ['(−2)² − 4 · (−2) = 4 + 8.', '= 12.'] },
        ],
      },
      de: {
        title: 'Graph und Definitionsbereich',
        objectives: ['Den Definitionsbereich von Funktionen mit Wurzeln und Brüchen bestimmen.', 'Funktionswerte berechnen und am Graphen ablesen.'],
        theory: 'Eine Funktion f ordnet jedem x aus dem Definitionsbereich D(f) genau einen Wert f(x) zu. Der Wertebereich ist die Menge aller Werte f(x).\n\nDie häufigsten Einschränkungen:\n• unter der Quadratwurzel: Term ≥ 0 → f(x) = √(x − 2) hat D: x ≥ 2;\n• im Nenner: Term ≠ 0 → f(x) = 1/(x − 3) hat D: x ≠ 3.\n\nDer Graph ist die Menge der Punkte (x | f(x)); der Punkt (6 | 2) liegt auf dem Graphen, weil f(6) = √4 = 2.',
        keyPoints: ['√(A): A ≥ 0', '1/A: A ≠ 0', 'Punkt (a | b) auf dem Graphen ⇔ f(a) = b'],
        examples: [
          { example: 'Bestimmen Sie den Definitionsbereich von f(x) = √(x − 2).', solution: 'x − 2 ≥ 0 → x ≥ 2.' },
          { example: 'Berechnen Sie für f(x) = x² − 4x den Wert f(5).', solution: 'f(5) = 25 − 20 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'Bei √(x − 2) wird x > 2 geschrieben.', fix: '√0 = 0 existiert, also gehört x = 2 dazu: x ≥ 2.' },
          { mistake: 'Die Einschränkung durch den Nenner wird vergessen.', fix: 'Immer prüfen, wo der Nenner 0 wird.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Definitionsbereich von f(x) = 1/(x − 3).', solution: 'x ≠ 3', steps: ['Der Nenner x − 3 ≠ 0.', 'x ≠ 3 (alle reellen Zahlen außer 3).'] },
          { problem: 'Bestimmen Sie den Definitionsbereich von f(x) = √(6 − 2x).', solution: 'x ≤ 3', steps: ['6 − 2x ≥ 0 → 2x ≤ 6.', 'x ≤ 3.'] },
          { problem: 'Berechnen Sie für f(x) = x² − 4x den Wert f(−2).', solution: '12', steps: ['(−2)² − 4 · (−2) = 4 + 8.', '= 12.'] },
        ],
      },
    },
    // ───────── 2. Monotonicity
    {
      slug: 'g12-numeric-function-monotonicity',
      practiceVisuals: {
        1: {
        type: 'functionPlot', view: { xMin: -1, xMax: 7, yMin: -3, yMax: 11 },
        functions: [{ expr: 'a*x^2 + b*x + c', label: 'y = {a}x² {+b}x {+c}' }],
        points: [{ at: ['-b/(2*a)', 'c - b^2/(4*a)'], label: 'V({-b/(2*a)}, {c - b^2/(4*a)})', color: 'success' }],
        sliders: [{ name: 'a', min: -3, max: 3, step: 0.5, value: -1 }, { name: 'b', min: -8, max: 8, step: 1, value: 6 }, { name: 'c', min: -6, max: 6, step: 1, value: 0 }],
        readouts: [
          { cases: [{ when: 'a > 0', text: { al: 'a = {a} > 0: hapet lart, kulmi është minimum.', en: 'a = {a} > 0: opens upwards, the vertex is a minimum.', de: 'a = {a} > 0: nach oben geöffnet, der Scheitel ist ein Minimum.' } }, { when: 'a < 0', text: { al: 'a = {a} < 0: hapet poshtë, kulmi është maksimum.', en: 'a = {a} < 0: opens downwards, the vertex is a maximum.', de: 'a = {a} < 0: nach unten geöffnet, der Scheitel ist ein Maximum.' } }, { text: { al: 'a = 0: nuk është më parabolë, por drejtëz.', en: 'a = 0: no longer a parabola but a line.', de: 'a = 0: keine Parabel mehr, sondern eine Gerade.' } }] },
          { text: { al: 'Boshti i simetrisë x = −b/(2a) = {-b/(2*a)}; vlera në kulm {c - b^2/(4*a)}.', en: 'Axis of symmetry x = −b/(2a) = {-b/(2*a)}; value at the vertex {c - b^2/(4*a)}.', de: 'Symmetrieachse x = −b/(2a) = {-b/(2*a)}; Wert am Scheitel {c - b^2/(4*a)}.' } },
        ],
        alt: { al: 'Parabola me rrëshqitës për koeficientët dhe kulmin e saj.', en: 'A parabola with sliders for its coefficients and its vertex.', de: 'Eine Parabel mit Schiebereglern für die Koeffizienten und ihrem Scheitel.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 5, yMin: -2, yMax: 6 }, height: 210,
        functions: [{ expr: 'x^2 - 4*x + 3', domain: [-0.6, 4.6], label: 'y = x² − 4x + 3' }],
        points: [{ at: [2, -1], label: '(2, −1)' }],
        caption: alt('Zbret për x ≤ 2 dhe ngjitet për x ≥ 2.', 'Decreasing for x ≤ 2 and increasing for x ≥ 2.', 'Fallend für x ≤ 2 und steigend für x ≥ 2.'),
        alt: alt('Parabola y = x² − 4x + 3 me kulmin (2, −1).', 'The parabola y = x² − 4x + 3 with vertex (2, −1).', 'Die Parabel y = x² − 4x + 3 mit Scheitel (2 | −1).'),
      }],
      answers: {
        examples: ['text', [['4 / 2', 2]]],
        practice: ['text', [['6 / 2', 3]], [['1 / 2', 0.5]]],
      },
      al: {
        title: 'Monotonia',
        objectives: ['Të përcaktoni ku një funksion është rritës ose zbritës.', 'Të përdorni koeficientin këndor dhe kulmin për monotoninë.'],
        theory: 'Funksioni është rritës në një interval kur x₁ < x₂ ⇒ f(x₁) < f(x₂): grafiku ngjitet nga e majta në të djathtë. Është zbritës kur x₁ < x₂ ⇒ f(x₁) > f(x₂).\n\nFunksioni linear y = kx + n është rritës kur k > 0 dhe zbritës kur k < 0.\nFunksioni kuadratik me a > 0 zbret deri te kulmi dhe ngjitet pas tij: y = x² − 4x + 3 zbret për x ≤ 2 dhe ngjitet për x ≥ 2.\n\nMonotonia nuk ka të bëjë me shenjën e vlerave: një funksion mund të jetë rritës edhe kur vlerat janë negative.',
        keyPoints: ['Rritës: x₁ < x₂ ⇒ f(x₁) < f(x₂)', 'Linear: k > 0 rritës, k < 0 zbritës', 'Kuadratik: ndryshon te kulmi x = −b/(2a)'],
        examples: [
          { example: 'A është y = −2x + 5 rritës apo zbritës?', solution: 'k = −2 < 0, pra zbritës.' },
          { example: 'Ku është rritës y = x² − 4x + 3?', solution: 'Kulmi te x = 4/2 = 2; zbritës për x ≤ 2, rritës për x ≥ 2.' },
        ],
        commonMistakes: [
          { mistake: '"Rritës" ngatërrohet me "pozitiv".', fix: 'Rritës do të thotë që vlerat rriten kur x rritet, pavarësisht shenjës.' },
        ],
        practice: [
          { problem: 'A është y = 3x − 1 rritës apo zbritës?', solution: 'rritës', steps: ['k = 3 > 0.', 'Pra rritës në të gjithë boshtin.'] },
          { problem: 'Deri në cilën vlerë të x është rritës y = −x² + 6x?', solution: 'deri te x = 3', steps: ['a < 0: ngjitet deri te kulmi.', 'x = −6/(−2) = 3.'] },
          { problem: 'A është f(x) = 1/x rritës për x > 0? Krahasoni f(1) dhe f(2).', solution: 'Jo, zbritës', steps: ['f(1) = 1, f(2) = 1/2 = 0,5.', '1 < 2, por f(1) > f(2) → zbritës.'] },
        ],
      },
      en: {
        title: 'Increasing and decreasing functions',
        objectives: ['Decide where a function is increasing or decreasing.', 'Use the gradient and the vertex to find monotonicity.'],
        theory: 'A function is increasing on an interval when x₁ < x₂ ⇒ f(x₁) < f(x₂): the graph rises from left to right. It is decreasing when x₁ < x₂ ⇒ f(x₁) > f(x₂).\n\nThe linear function y = kx + n is increasing when k > 0 and decreasing when k < 0.\nA quadratic with a > 0 decreases up to the vertex and increases after it: y = x² − 4x + 3 decreases for x ≤ 2 and increases for x ≥ 2.\n\nMonotonicity has nothing to do with the sign of the values: a function can be increasing even when its values are negative.',
        keyPoints: ['Increasing: x₁ < x₂ ⇒ f(x₁) < f(x₂)', 'Linear: k > 0 increasing, k < 0 decreasing', 'Quadratic: changes at the vertex x = −b/(2a)'],
        examples: [
          { example: 'Is y = −2x + 5 increasing or decreasing?', solution: 'k = −2 < 0, so decreasing.' },
          { example: 'Where is y = x² − 4x + 3 increasing?', solution: 'Vertex at x = 4/2 = 2; decreasing for x ≤ 2, increasing for x ≥ 2.' },
        ],
        commonMistakes: [
          { mistake: '"Increasing" is confused with "positive".', fix: 'Increasing means the values go up as x goes up, whatever their sign.' },
        ],
        practice: [
          { problem: 'Is y = 3x − 1 increasing or decreasing?', solution: 'increasing', steps: ['k = 3 > 0.', 'So increasing everywhere.'] },
          { problem: 'Up to which value of x is y = −x² + 6x increasing?', solution: 'up to x = 3', steps: ['a < 0: it rises up to the vertex.', 'x = −6/(−2) = 3.'] },
          { problem: 'Is f(x) = 1/x increasing for x > 0? Compare f(1) and f(2).', solution: 'No, decreasing', steps: ['f(1) = 1, f(2) = 1/2 = 0.5.', '1 < 2 but f(1) > f(2) → decreasing.'] },
        ],
      },
      de: {
        title: 'Monotonie',
        objectives: ['Bestimmen, wo eine Funktion steigt oder fällt.', 'Steigung und Scheitelpunkt für die Monotonie nutzen.'],
        theory: 'Eine Funktion ist auf einem Intervall streng monoton steigend, wenn x₁ < x₂ ⇒ f(x₁) < f(x₂): Der Graph steigt von links nach rechts. Sie ist fallend, wenn x₁ < x₂ ⇒ f(x₁) > f(x₂).\n\nDie lineare Funktion y = kx + n ist für k > 0 steigend und für k < 0 fallend.\nEine quadratische Funktion mit a > 0 fällt bis zum Scheitelpunkt und steigt danach: y = x² − 4x + 3 fällt für x ≤ 2 und steigt für x ≥ 2.\n\nMonotonie hat nichts mit dem Vorzeichen der Werte zu tun: Eine Funktion kann steigen, auch wenn ihre Werte negativ sind.',
        keyPoints: ['Steigend: x₁ < x₂ ⇒ f(x₁) < f(x₂)', 'Linear: k > 0 steigend, k < 0 fallend', 'Quadratisch: Wechsel am Scheitel x = −b/(2a)'],
        examples: [
          { example: 'Ist y = −2x + 5 steigend oder fallend?', solution: 'k = −2 < 0, also fallend.' },
          { example: 'Wo ist y = x² − 4x + 3 steigend?', solution: 'Scheitel bei x = 4/2 = 2; fallend für x ≤ 2, steigend für x ≥ 2.' },
        ],
        commonMistakes: [
          { mistake: '„Steigend“ wird mit „positiv“ verwechselt.', fix: 'Steigend heißt, die Werte wachsen mit x, unabhängig vom Vorzeichen.' },
        ],
        practice: [
          { problem: 'Ist y = 3x − 1 steigend oder fallend?', solution: 'steigend', steps: ['k = 3 > 0.', 'Also überall steigend.'] },
          { problem: 'Bis zu welchem x ist y = −x² + 6x steigend?', solution: 'bis x = 3', steps: ['a < 0: steigt bis zum Scheitel.', 'x = −6/(−2) = 3.'] },
          { problem: 'Ist f(x) = 1/x für x > 0 steigend? Vergleichen Sie f(1) und f(2).', solution: 'Nein, fallend', steps: ['f(1) = 1, f(2) = 1/2 = 0,5.', '1 < 2, aber f(1) > f(2) → fallend.'] },
        ],
      },
    },
    // ───────── 3. Extrema
    {
      slug: 'g12-numeric-function-extrema',
      practiceVisuals: {
        0: {
        type: 'functionPlot', view: { xMin: -5, xMax: 3, yMin: -1, yMax: 12 },
        functions: [{ expr: 'a*x^2 + b*x + c', label: 'y = {a}x² {+b}x {+c}' }],
        points: [{ at: ['-b/(2*a)', 'c - b^2/(4*a)'], label: 'V({-b/(2*a)}, {c - b^2/(4*a)})', color: 'success' }],
        sliders: [{ name: 'a', min: -3, max: 3, step: 0.5, value: 1 }, { name: 'b', min: -8, max: 8, step: 1, value: 2 }, { name: 'c', min: -6, max: 6, step: 1, value: 5 }],
        readouts: [
          { cases: [{ when: 'a > 0', text: { al: 'a = {a} > 0: hapet lart, kulmi është minimum.', en: 'a = {a} > 0: opens upwards, the vertex is a minimum.', de: 'a = {a} > 0: nach oben geöffnet, der Scheitel ist ein Minimum.' } }, { when: 'a < 0', text: { al: 'a = {a} < 0: hapet poshtë, kulmi është maksimum.', en: 'a = {a} < 0: opens downwards, the vertex is a maximum.', de: 'a = {a} < 0: nach unten geöffnet, der Scheitel ist ein Maximum.' } }, { text: { al: 'a = 0: nuk është më parabolë, por drejtëz.', en: 'a = 0: no longer a parabola but a line.', de: 'a = 0: keine Parabel mehr, sondern eine Gerade.' } }] },
          { text: { al: 'Boshti i simetrisë x = −b/(2a) = {-b/(2*a)}; vlera në kulm {c - b^2/(4*a)}.', en: 'Axis of symmetry x = −b/(2a) = {-b/(2*a)}; value at the vertex {c - b^2/(4*a)}.', de: 'Symmetrieachse x = −b/(2a) = {-b/(2*a)}; Wert am Scheitel {c - b^2/(4*a)}.' } },
        ],
        alt: { al: 'Parabola me rrëshqitës për koeficientët dhe kulmin e saj.', en: 'A parabola with sliders for its coefficients and its vertex.', de: 'Eine Parabel mit Schiebereglern für die Koeffizienten und ihrem Scheitel.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 7, yMin: -2, yMax: 11 }, height: 210,
        functions: [{ expr: '-x^2 + 6*x', domain: [-0.4, 6.4], label: 'y = −x² + 6x' }],
        points: [{ at: [3, 9], label: alt('maks (3, 9)', 'max (3, 9)', 'Max (3 | 9)') }],
        caption: alt('Vlera më e madhe 9 arrihet te x = 3.', 'The greatest value 9 is reached at x = 3.', 'Der größte Wert 9 wird bei x = 3 erreicht.'),
        alt: alt('Parabola e hapur poshtë me maksimum në (3, 9).', 'A downward parabola with its maximum at (3, 9).', 'Nach unten geöffnete Parabel mit Maximum in (3 | 9).'),
      }],
      answers: {
        examples: [[['2^2 - 4*2 + 3', -1]], [['-(3^2) + 6*3', 9]]],
        practice: [[['(-1)^2 + 2*(-1) + 5', 4]], [['10 - (1 - 1)^2', 10]], [['3^2', 9]]],
      },
      al: {
        title: 'Ekstremumet',
        objectives: ['Të gjeni minimumin dhe maksimumin e funksioneve kuadratike.', 'Të dalloni pikën e ekstremumit (x) nga vlera ekstreme (y).'],
        theory: 'Funksioni ka maksimum lokal në x₀ kur f(x₀) ≥ f(x) për x afër x₀, dhe minimum lokal kur f(x₀) ≤ f(x). Te kalimi nga rritës në zbritës ka maksimum, nga zbritës në rritës minimum.\n\nTe parabola ekstremumi është kulmi: x₀ = −b/(2a), vlera f(x₀). a > 0 → minimum, a < 0 → maksimum.\ny = x² − 4x + 3: x₀ = 2, minimumi −1; y = −x² + 6x: x₀ = 3, maksimumi 9.\n\nNë një interval të mbyllur kontrollohen edhe skajet.',
        keyPoints: ['Kulmi: x₀ = −b/(2a)', 'a > 0 min, a < 0 maks', 'Në interval: krahaso edhe skajet'],
        examples: [
          { example: 'Gjeni minimumin e y = x² − 4x + 3.', solution: 'x₀ = 2; y = 4 − 8 + 3 = −1.' },
          { example: 'Gjeni maksimumin e y = −x² + 6x.', solution: 'x₀ = 3; y = −9 + 18 = 9.' },
        ],
        commonMistakes: [
          { mistake: 'Si vlerë maksimale jepet x₀ = 3.', fix: 'Vlera maksimale është y = f(3) = 9; x₀ është vendi ku arrihet.' },
        ],
        practice: [
          { problem: 'Gjeni minimumin e y = x² + 2x + 5.', solution: '4 (te x = −1)', steps: ['x₀ = −2/2 = −1.', 'y = 1 − 2 + 5 = 4.'] },
          { problem: 'Sa është vlera më e madhe e y = 10 − (x − 1)²?', solution: '10 (te x = 1)', steps: ['(x − 1)² ≥ 0, më e vogla 0 te x = 1.', 'y = 10 − 0 = 10.'] },
          { problem: 'Gjeni maksimumin e f(x) = x² në intervalin [−1, 3].', solution: '9 (te x = 3)', steps: ['Skajet: f(−1) = 1, f(3) = 9.', 'Më i madhi: 3² = 9.'] },
        ],
      },
      en: {
        title: 'Extrema',
        objectives: ['Find the minimum and maximum of quadratic functions.', 'Tell the extreme point (x) from the extreme value (y).'],
        theory: 'A function has a local maximum at x₀ when f(x₀) ≥ f(x) for x near x₀, and a local minimum when f(x₀) ≤ f(x). Changing from increasing to decreasing gives a maximum, from decreasing to increasing a minimum.\n\nFor a parabola the extremum is the vertex: x₀ = −b/(2a), value f(x₀). a > 0 → minimum, a < 0 → maximum.\ny = x² − 4x + 3: x₀ = 2, minimum −1; y = −x² + 6x: x₀ = 3, maximum 9.\n\nOn a closed interval also check the end points.',
        keyPoints: ['Vertex: x₀ = −b/(2a)', 'a > 0 min, a < 0 max', 'On an interval: compare the end points too'],
        examples: [
          { example: 'Find the minimum of y = x² − 4x + 3.', solution: 'x₀ = 2; y = 4 − 8 + 3 = −1.' },
          { example: 'Find the maximum of y = −x² + 6x.', solution: 'x₀ = 3; y = −9 + 18 = 9.' },
        ],
        commonMistakes: [
          { mistake: 'x₀ = 3 is given as the maximum value.', fix: 'The maximum value is y = f(3) = 9; x₀ is where it occurs.' },
        ],
        practice: [
          { problem: 'Find the minimum of y = x² + 2x + 5.', solution: '4 (at x = −1)', steps: ['x₀ = −2/2 = −1.', 'y = 1 − 2 + 5 = 4.'] },
          { problem: 'What is the greatest value of y = 10 − (x − 1)²?', solution: '10 (at x = 1)', steps: ['(x − 1)² ≥ 0, smallest 0 at x = 1.', 'y = 10 − 0 = 10.'] },
          { problem: 'Find the maximum of f(x) = x² on the interval [−1, 3].', solution: '9 (at x = 3)', steps: ['End points: f(−1) = 1, f(3) = 9.', 'The larger: 3² = 9.'] },
        ],
      },
      de: {
        title: 'Extrema',
        objectives: ['Minimum und Maximum quadratischer Funktionen bestimmen.', 'Extremstelle (x) und Extremwert (y) unterscheiden.'],
        theory: 'Eine Funktion hat bei x₀ ein lokales Maximum, wenn f(x₀) ≥ f(x) für x nahe x₀, und ein lokales Minimum, wenn f(x₀) ≤ f(x). Wechsel von steigend zu fallend ergibt ein Maximum, von fallend zu steigend ein Minimum.\n\nBei einer Parabel ist das Extremum der Scheitelpunkt: x₀ = −b/(2a), Wert f(x₀). a > 0 → Minimum, a < 0 → Maximum.\ny = x² − 4x + 3: x₀ = 2, Minimum −1; y = −x² + 6x: x₀ = 3, Maximum 9.\n\nAuf einem abgeschlossenen Intervall prüft man auch die Randwerte.',
        keyPoints: ['Scheitel: x₀ = −b/(2a)', 'a > 0 Min, a < 0 Max', 'Auf Intervallen: auch Ränder prüfen'],
        examples: [
          { example: 'Bestimmen Sie das Minimum von y = x² − 4x + 3.', solution: 'x₀ = 2; y = 4 − 8 + 3 = −1.' },
          { example: 'Bestimmen Sie das Maximum von y = −x² + 6x.', solution: 'x₀ = 3; y = −9 + 18 = 9.' },
        ],
        commonMistakes: [
          { mistake: 'Als Maximalwert wird x₀ = 3 angegeben.', fix: 'Der Maximalwert ist y = f(3) = 9; x₀ ist die Stelle.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie das Minimum von y = x² + 2x + 5.', solution: '4 (bei x = −1)', steps: ['x₀ = −2/2 = −1.', 'y = 1 − 2 + 5 = 4.'] },
          { problem: 'Welchen größten Wert hat y = 10 − (x − 1)²?', solution: '10 (bei x = 1)', steps: ['(x − 1)² ≥ 0, am kleinsten 0 bei x = 1.', 'y = 10 − 0 = 10.'] },
          { problem: 'Bestimmen Sie das Maximum von f(x) = x² auf [−1, 3].', solution: '9 (bei x = 3)', steps: ['Ränder: f(−1) = 1, f(3) = 9.', 'Größer: 3² = 9.'] },
        ],
      },
    },
    // ───────── 4. Parity
    {
      slug: 'g12-numeric-function-parity',
      visuals: [{
        type: 'functionPlot', view: { xMin: -2.2, xMax: 2.2, yMin: -3, yMax: 4 }, height: 210,
        functions: [{ expr: 'x^3 - x', label: alt('tek', 'odd', 'ungerade') }, { expr: 'x^2', color: 'secondary', label: alt('çift', 'even', 'gerade') }],
        caption: alt('y = x² (çift) është simetrik ndaj boshtit y; y = x³ − x (tek) është simetrik ndaj origjinës.', 'y = x² (even) is symmetric about the y-axis; y = x³ − x (odd) is symmetric about the origin.', 'y = x² (gerade) ist achsensymmetrisch zur y-Achse; y = x³ − x (ungerade) ist punktsymmetrisch zum Ursprung.'),
        alt: alt('Grafikët e y = x³ − x dhe y = x².', 'The graphs of y = x³ − x and y = x².', 'Die Graphen von y = x³ − x und y = x².'),
      }],
      answers: {
        examples: [[['(-2)^3 - (-2)', -6]], [['1^4 - 3*1^2', -2]]],
        practice: [[['1^2 + 1', 2], ['(-1)^2 + (-1)', 0]], 'text', [['-5', -5]]],
      },
      al: {
        title: 'Çiftësia',
        objectives: ['Të kontrolloni nëse një funksion është çift, tek apo asnjëra.', 'Të lidhni çiftësinë me simetrinë e grafikut.'],
        theory: 'Funksioni (me bashkësi përkufizimi simetrike) është:\n• çift kur f(−x) = f(x): grafiku simetrik ndaj boshtit y (x², x⁴, cos x);\n• tek kur f(−x) = −f(x): grafiku simetrik ndaj origjinës (x³, x, sin x).\n\nKontroll: zëvendësoni x me −x. f(x) = x³ − x → f(−x) = −x³ + x = −(x³ − x) = −f(x), pra tek. f(x) = x² + x → f(−x) = x² − x, as f(x) as −f(x): asnjëra.',
        keyPoints: ['Çift: f(−x) = f(x)', 'Tek: f(−x) = −f(x)', 'Zëvendëso x me −x'],
        examples: [
          { example: 'A është f(x) = x³ − x tek, çift apo asnjëra?', solution: 'f(−x) = −f(x) → tek (p.sh. f(2) = 6, f(−2) = −6).' },
          { example: 'A është f(x) = x⁴ − 3x² çift?', solution: 'Po: fuqitë janë çift, f(−x) = f(x) (p.sh. f(1) = f(−1) = −2).' },
        ],
        commonMistakes: [
          { mistake: 'Çdo funksion është ose çift ose tek.', fix: 'Shumica nuk janë asnjëra, p.sh. x² + x.' },
        ],
        practice: [
          { problem: 'A është f(x) = x² + x çift apo tek?', solution: 'asnjëra', steps: ['f(1) = 2, f(−1) = 0.', 'As f(−1) = f(1), as f(−1) = −f(1) → asnjëra.'] },
          { problem: 'A është cos x çift apo tek?', solution: 'çift', steps: ['cos(−x) = cos x.', 'Grafiku simetrik ndaj boshtit y → çift.'] },
          { problem: 'f është tek dhe f(3) = 5. Sa është f(−3)?', solution: '−5', steps: ['f(−3) = −f(3).', '= −5.'] },
        ],
      },
      en: {
        title: 'Odd and even functions',
        objectives: ['Check whether a function is even, odd or neither.', 'Link parity to the symmetry of the graph.'],
        theory: 'A function (with a symmetric domain) is:\n• even when f(−x) = f(x): the graph is symmetric about the y-axis (x², x⁴, cos x);\n• odd when f(−x) = −f(x): the graph is symmetric about the origin (x³, x, sin x).\n\nCheck: replace x with −x. f(x) = x³ − x → f(−x) = −x³ + x = −(x³ − x) = −f(x), so odd. f(x) = x² + x → f(−x) = x² − x, neither f(x) nor −f(x): neither.',
        keyPoints: ['Even: f(−x) = f(x)', 'Odd: f(−x) = −f(x)', 'Replace x with −x'],
        examples: [
          { example: 'Is f(x) = x³ − x odd, even or neither?', solution: 'f(−x) = −f(x) → odd (e.g. f(2) = 6, f(−2) = −6).' },
          { example: 'Is f(x) = x⁴ − 3x² even?', solution: 'Yes: the powers are even, f(−x) = f(x) (e.g. f(1) = f(−1) = −2).' },
        ],
        commonMistakes: [
          { mistake: 'Every function is either even or odd.', fix: 'Most are neither, e.g. x² + x.' },
        ],
        practice: [
          { problem: 'Is f(x) = x² + x even or odd?', solution: 'neither', steps: ['f(1) = 2, f(−1) = 0.', 'Neither f(−1) = f(1) nor f(−1) = −f(1) → neither.'] },
          { problem: 'Is cos x even or odd?', solution: 'even', steps: ['cos(−x) = cos x.', 'Symmetric about the y-axis → even.'] },
          { problem: 'f is odd and f(3) = 5. What is f(−3)?', solution: '−5', steps: ['f(−3) = −f(3).', '= −5.'] },
        ],
      },
      de: {
        title: 'Symmetrie: gerade und ungerade Funktionen',
        objectives: ['Prüfen, ob eine Funktion gerade, ungerade oder keins von beiden ist.', 'Symmetrie und Graph verbinden.'],
        theory: 'Eine Funktion (mit symmetrischem Definitionsbereich) ist:\n• gerade, wenn f(−x) = f(x): Graph achsensymmetrisch zur y-Achse (x², x⁴, cos x);\n• ungerade, wenn f(−x) = −f(x): Graph punktsymmetrisch zum Ursprung (x³, x, sin x).\n\nPrüfen: x durch −x ersetzen. f(x) = x³ − x → f(−x) = −x³ + x = −(x³ − x) = −f(x), also ungerade. f(x) = x² + x → f(−x) = x² − x, weder f(x) noch −f(x): keins von beiden.',
        keyPoints: ['Gerade: f(−x) = f(x)', 'Ungerade: f(−x) = −f(x)', 'x durch −x ersetzen'],
        examples: [
          { example: 'Ist f(x) = x³ − x gerade, ungerade oder keins?', solution: 'f(−x) = −f(x) → ungerade (z. B. f(2) = 6, f(−2) = −6).' },
          { example: 'Ist f(x) = x⁴ − 3x² gerade?', solution: 'Ja: nur gerade Exponenten, f(−x) = f(x) (z. B. f(1) = f(−1) = −2).' },
        ],
        commonMistakes: [
          { mistake: 'Jede Funktion ist entweder gerade oder ungerade.', fix: 'Die meisten sind keins von beiden, z. B. x² + x.' },
        ],
        practice: [
          { problem: 'Ist f(x) = x² + x gerade oder ungerade?', solution: 'keins von beiden', steps: ['f(1) = 2, f(−1) = 0.', 'Weder f(−1) = f(1) noch f(−1) = −f(1) → keins.'] },
          { problem: 'Ist cos x gerade oder ungerade?', solution: 'gerade', steps: ['cos(−x) = cos x.', 'Achsensymmetrisch zur y-Achse → gerade.'] },
          { problem: 'f ist ungerade und f(3) = 5. Wie groß ist f(−3)?', solution: '−5', steps: ['f(−3) = −f(3).', '= −5.'] },
        ],
      },
    },
    // ───────── 5. Periodicity
    {
      slug: 'g12-numeric-function-periodicity',
      practiceVisuals: {
        1: {
        type: 'functionPlot', view: { xMin: 0, xMax: 360, yMin: -1.4, yMax: 1.4 }, xStep: 60,
        functions: [{ expr: 'cos(x*pi/180)', color: 'muted', dashed: true, label: 'cos x' }, { expr: 'cos(k*x*pi/180)', label: 'cos({k}x)' }],
        sliders: [{ name: 'k', min: 1, max: 6, step: 1, value: 3 }],
        readouts: [{ text: { al: 'Perioda = 360° / k = {360/k}°', en: 'Period = 360° / k = {360/k}°', de: 'Periode = 360° / k = {360/k}°' } }],
        alt: { al: 'Grafikët e cos x dhe cos(kx) nga 0° deri 360° me rrëshqitës për k.', en: 'The graphs of cos x and cos(kx) from 0° to 360° with a slider for k.', de: 'Die Graphen von cos x und cos(kx) von 0° bis 360° mit Schieberegler für k.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 12.6, yMin: -1.5, yMax: 1.5 }, height: 180,
        functions: [{ expr: 'sin(x)', label: 'y = sin x' }],
        points: [{ at: [Math.PI / 2, 1], label: 'π/2' }, { at: [Math.PI * 2.5, 1], label: '5π/2' }],
        caption: alt('Grafiku përsëritet çdo 2π (360°): sin(x + 2π) = sin x.', 'The graph repeats every 2π (360°): sin(x + 2π) = sin x.', 'Der Graph wiederholt sich alle 2π (360°): sin(x + 2π) = sin x.'),
        alt: alt('Dy periudha të grafikut të sinusit, me maksimumet te π/2 dhe 5π/2.', 'Two periods of the sine graph, with maxima at π/2 and 5π/2.', 'Zwei Perioden der Sinuskurve mit Maxima bei π/2 und 5π/2.'),
      }],
      answers: {
        examples: [[['sin(390 deg)', 0.5]], [['360 / 2', 180]]],
        practice: [[['cos(420 deg)', 0.5]], [['360 / 3', 120]], [['tan(225 deg)', 1]]],
      },
      al: {
        title: 'Periodiciteti',
        objectives: ['Të përdorni periodën për të llogaritur vlera trigonometrike.', 'Të gjeni periodën e sin(kx) dhe cos(kx).'],
        theory: 'Funksioni është periodik me periodë T kur f(x + T) = f(x) për çdo x. Grafiku përsëritet pas çdo T.\n\nsin dhe cos kanë periodë 360° (2π); tg ka periodë 180° (π). Prandaj sin 390° = sin(390° − 360°) = sin 30° = 0,5.\n\nPër sin(kx) dhe cos(kx) perioda është 360°/k: sin(2x) përsëritet çdo 180°, cos(3x) çdo 120°.',
        keyPoints: ['f(x + T) = f(x)', 'sin, cos: 360°; tg: 180°', 'sin(kx): T = 360°/k'],
        examples: [
          { example: 'Llogaritni sin 390°.', solution: 'sin(390° − 360°) = sin 30° = 0,5.' },
          { example: 'Sa është perioda e y = sin(2x)?', solution: '360° : 2 = 180° (π).' },
        ],
        commonMistakes: [
          { mistake: 'Perioda e sin(2x) merret 720°.', fix: 'k = 2 e ngjesh grafikun: perioda përgjysmohet, 180°.' },
        ],
        practice: [
          { problem: 'Llogaritni cos 420°.', solution: '0,5', steps: ['420° − 360° = 60°.', 'cos 60° = 0,5.'] },
          { problem: 'Sa është perioda e y = cos(3x)?', solution: '120°', steps: ['T = 360°/k.', '360° : 3 = 120°.'] },
          { problem: 'Llogaritni tg 225°.', solution: '1', steps: ['Perioda e tg është 180°: 225° − 180° = 45°.', 'tg 45° = 1.'] },
        ],
      },
      en: {
        title: 'Periodic functions',
        objectives: ['Use the period to work out trigonometric values.', 'Find the period of sin(kx) and cos(kx).'],
        theory: 'A function is periodic with period T when f(x + T) = f(x) for every x. The graph repeats after every T.\n\nsin and cos have period 360° (2π); tan has period 180° (π). So sin 390° = sin(390° − 360°) = sin 30° = 0.5.\n\nFor sin(kx) and cos(kx) the period is 360°/k: sin(2x) repeats every 180°, cos(3x) every 120°.',
        keyPoints: ['f(x + T) = f(x)', 'sin, cos: 360°; tan: 180°', 'sin(kx): T = 360°/k'],
        examples: [
          { example: 'Work out sin 390°.', solution: 'sin(390° − 360°) = sin 30° = 0.5.' },
          { example: 'What is the period of y = sin(2x)?', solution: '360° ÷ 2 = 180° (π).' },
        ],
        commonMistakes: [
          { mistake: 'The period of sin(2x) is taken as 720°.', fix: 'k = 2 squeezes the graph: the period halves, 180°.' },
        ],
        practice: [
          { problem: 'Work out cos 420°.', solution: '0.5', steps: ['420° − 360° = 60°.', 'cos 60° = 0.5.'] },
          { problem: 'What is the period of y = cos(3x)?', solution: '120°', steps: ['T = 360°/k.', '360° ÷ 3 = 120°.'] },
          { problem: 'Work out tan 225°.', solution: '1', steps: ['The period of tan is 180°: 225° − 180° = 45°.', 'tan 45° = 1.'] },
        ],
      },
      de: {
        title: 'Periodizität',
        objectives: ['Mit der Periode trigonometrische Werte berechnen.', 'Die Periode von sin(kx) und cos(kx) bestimmen.'],
        theory: 'Eine Funktion ist periodisch mit Periode T, wenn f(x + T) = f(x) für alle x. Der Graph wiederholt sich nach jedem T.\n\nsin und cos haben die Periode 360° (2π); tan hat die Periode 180° (π). Daher sin 390° = sin(390° − 360°) = sin 30° = 0,5.\n\nFür sin(kx) und cos(kx) ist die Periode 360°/k: sin(2x) wiederholt sich alle 180°, cos(3x) alle 120°.',
        keyPoints: ['f(x + T) = f(x)', 'sin, cos: 360°; tan: 180°', 'sin(kx): T = 360°/k'],
        examples: [
          { example: 'Berechnen Sie sin 390°.', solution: 'sin(390° − 360°) = sin 30° = 0,5.' },
          { example: 'Welche Periode hat y = sin(2x)?', solution: '360° : 2 = 180° (π).' },
        ],
        commonMistakes: [
          { mistake: 'Die Periode von sin(2x) wird als 720° angegeben.', fix: 'k = 2 staucht den Graphen: Die Periode halbiert sich, 180°.' },
        ],
        practice: [
          { problem: 'Berechnen Sie cos 420°.', solution: '0,5', steps: ['420° − 360° = 60°.', 'cos 60° = 0,5.'] },
          { problem: 'Welche Periode hat y = cos(3x)?', solution: '120°', steps: ['T = 360°/k.', '360° : 3 = 120°.'] },
          { problem: 'Berechnen Sie tan 225°.', solution: '1', steps: ['Die Periode von tan ist 180°: 225° − 180° = 45°.', 'tan 45° = 1.'] },
        ],
      },
    },
    // ───────── 6. Composition
    {
      slug: 'g12-numeric-function-composition',
      noVisual: 'Composition is worked step by step (inner function first) in the examples.',
      answers: {
        examples: [[['2 * 3^2 + 1', 19]], [['(2*3 + 1)^2', 49]]],
        practice: [[['2 * (-1)^2 + 1', 3]], [['2 * (2*2 + 1) + 1', 11]], [['sqrt(9 + 7)', 4]]],
      },
      al: {
        title: 'Përbërja e funksioneve',
        objectives: ['Të llogaritni f(g(x)) dhe g(f(x)) për vlera dhe si shprehje.', 'Të kuptoni që radha e përbërjes ka rëndësi.'],
        theory: 'Funksioni i përbërë (f ∘ g)(x) = f(g(x)): së pari llogaritet funksioni i brendshëm g, pastaj rezultati futet te f.\n\nf(x) = 2x + 1, g(x) = x²:\nf(g(3)) = f(9) = 19, ndërsa g(f(3)) = g(7) = 49.\nSi shprehje: f(g(x)) = 2x² + 1 dhe g(f(x)) = (2x + 1)².\n\nNë përgjithësi f(g(x)) ≠ g(f(x)), dhe f(g(x)) nuk është prodhimi f(x) · g(x).',
        keyPoints: ['f(g(x)): së pari g, pastaj f', 'f(g(x)) ≠ g(f(x)) zakonisht', 'Përbërja ≠ prodhimi'],
        examples: [
          { example: 'f(x) = 2x + 1, g(x) = x². Gjeni f(g(3)).', solution: 'g(3) = 9; f(9) = 19.' },
          { example: 'Me të njëjtat funksione gjeni g(f(3)).', solution: 'f(3) = 7; g(7) = 49 ≠ 19.' },
        ],
        commonMistakes: [
          { mistake: 'f(g(3)) llogaritet si f(3) · g(3) = 7 · 9.', fix: 'Rezultati i g futet te f: f(9).' },
        ],
        practice: [
          { problem: 'Shkruani f(g(x)) për f(x) = 2x + 1, g(x) = x² dhe llogaritni për x = −1.', solution: '2x² + 1; vlera 3', steps: ['f(g(x)) = 2x² + 1.', '2 · (−1)² + 1 = 3.'] },
          { problem: 'Për f(x) = 2x + 1 llogaritni f(f(2)).', solution: '11', steps: ['f(2) = 5.', 'f(5) = 11.'] },
          { problem: 'h(x) = √x dhe k(x) = x + 7. Llogaritni h(k(9)).', solution: '4', steps: ['k(9) = 16.', 'h(16) = √16 = 4.'] },
        ],
      },
      en: {
        title: 'Composite functions',
        objectives: ['Work out f(g(x)) and g(f(x)) for values and as expressions.', 'Understand that the order of composition matters.'],
        theory: 'The composite function (f ∘ g)(x) = f(g(x)): first work out the inner function g, then put the result into f.\n\nf(x) = 2x + 1, g(x) = x²:\nf(g(3)) = f(9) = 19, while g(f(3)) = g(7) = 49.\nAs expressions: f(g(x)) = 2x² + 1 and g(f(x)) = (2x + 1)².\n\nIn general f(g(x)) ≠ g(f(x)), and f(g(x)) is not the product f(x) · g(x).',
        keyPoints: ['f(g(x)): g first, then f', 'Usually f(g(x)) ≠ g(f(x))', 'Composition ≠ product'],
        examples: [
          { example: 'f(x) = 2x + 1, g(x) = x². Find f(g(3)).', solution: 'g(3) = 9; f(9) = 19.' },
          { example: 'With the same functions find g(f(3)).', solution: 'f(3) = 7; g(7) = 49 ≠ 19.' },
        ],
        commonMistakes: [
          { mistake: 'f(g(3)) is worked out as f(3) · g(3) = 7 · 9.', fix: 'The output of g goes into f: f(9).' },
        ],
        practice: [
          { problem: 'Write f(g(x)) for f(x) = 2x + 1, g(x) = x² and work it out for x = −1.', solution: '2x² + 1; value 3', steps: ['f(g(x)) = 2x² + 1.', '2 · (−1)² + 1 = 3.'] },
          { problem: 'For f(x) = 2x + 1 work out f(f(2)).', solution: '11', steps: ['f(2) = 5.', 'f(5) = 11.'] },
          { problem: 'h(x) = √x and k(x) = x + 7. Work out h(k(9)).', solution: '4', steps: ['k(9) = 16.', 'h(16) = √16 = 4.'] },
        ],
      },
      de: {
        title: 'Verkettung von Funktionen',
        objectives: ['f(g(x)) und g(f(x)) für Werte und als Term berechnen.', 'Verstehen, dass die Reihenfolge der Verkettung wichtig ist.'],
        theory: 'Die verkettete Funktion (f ∘ g)(x) = f(g(x)): zuerst die innere Funktion g berechnen, dann das Ergebnis in f einsetzen.\n\nf(x) = 2x + 1, g(x) = x²:\nf(g(3)) = f(9) = 19, dagegen g(f(3)) = g(7) = 49.\nAls Terme: f(g(x)) = 2x² + 1 und g(f(x)) = (2x + 1)².\n\nIm Allgemeinen ist f(g(x)) ≠ g(f(x)), und f(g(x)) ist nicht das Produkt f(x) · g(x).',
        keyPoints: ['f(g(x)): zuerst g, dann f', 'Meist f(g(x)) ≠ g(f(x))', 'Verkettung ≠ Produkt'],
        examples: [
          { example: 'f(x) = 2x + 1, g(x) = x². Berechnen Sie f(g(3)).', solution: 'g(3) = 9; f(9) = 19.' },
          { example: 'Berechnen Sie mit denselben Funktionen g(f(3)).', solution: 'f(3) = 7; g(7) = 49 ≠ 19.' },
        ],
        commonMistakes: [
          { mistake: 'f(g(3)) wird als f(3) · g(3) = 7 · 9 berechnet.', fix: 'Das Ergebnis von g wird in f eingesetzt: f(9).' },
        ],
        practice: [
          { problem: 'Bestimmen Sie f(g(x)) für f(x) = 2x + 1, g(x) = x² und berechnen Sie den Wert für x = −1.', solution: '2x² + 1; Wert 3', steps: ['f(g(x)) = 2x² + 1.', '2 · (−1)² + 1 = 3.'] },
          { problem: 'Berechnen Sie für f(x) = 2x + 1 den Wert f(f(2)).', solution: '11', steps: ['f(2) = 5.', 'f(5) = 11.'] },
          { problem: 'h(x) = √x und k(x) = x + 7. Berechnen Sie h(k(9)).', solution: '4', steps: ['k(9) = 16.', 'h(16) = √16 = 4.'] },
        ],
      },
    },
    // ───────── 7. Inverse function
    {
      slug: 'g12-numeric-function-inverse',
      visuals: [{
        type: 'functionPlot', view: { xMin: -7, xMax: 7, yMin: -7, yMax: 7 }, height: 240,
        functions: [
          { expr: '3*x - 6', domain: [-0.4, 4.3], label: 'f' },
          { expr: '(x + 6)/3', domain: [-7, 6.5], color: 'secondary', label: 'f⁻¹' },
          { expr: 'x', color: 'muted', dashed: true, label: 'y = x' },
        ],
        points: [{ at: [2, 0], label: '(2, 0)' }, { at: [0, 2], label: '(0, 2)' }],
        caption: alt('Grafiku i f⁻¹ është pasqyrimi i grafikut të f në drejtëzën y = x: (2, 0) → (0, 2).', 'The graph of f⁻¹ is the reflection of f in the line y = x: (2, 0) → (0, 2).', 'Der Graph von f⁻¹ ist die Spiegelung von f an der Geraden y = x: (2 | 0) → (0 | 2).'),
        alt: alt('Drejtëzat f(x) = 3x − 6 dhe f⁻¹(x) = (x + 6)/3, simetrike ndaj y = x.', 'The lines f(x) = 3x − 6 and f⁻¹(x) = (x + 6)/3, symmetric about y = x.', 'Die Geraden f(x) = 3x − 6 und f⁻¹(x) = (x + 6)/3, symmetrisch zu y = x.'),
      }],
      answers: {
        examples: [[['(0 + 6) / 3', 2]], [['(5*3 - 1) / 2', 7]]],
        practice: [[['2 * (10 - 4)', 12]], [['8^(1/3)', 2]], [['3*5 - 4', 11]]],
      },
      al: {
        title: 'Funksioni invers',
        objectives: ['Të gjeni funksionin invers duke zgjidhur y = f(x) për x.', 'Të përdorni lidhjen f(a) = b ⇔ f⁻¹(b) = a.'],
        theory: 'Funksioni invers f⁻¹ e "zhbën" f: nëse f(a) = b, atëherë f⁻¹(b) = a. Ai ekziston kur f është injektiv (çdo vlerë arrihet vetëm një herë).\n\nHapat: shkruani y = f(x), zgjidhni për x, pastaj ndërroni x dhe y.\ny = 3x − 6 → x = (y + 6)/3 → f⁻¹(x) = (x + 6)/3.\n\nGrafiku i f⁻¹ është simetrik me grafikun e f ndaj drejtëzës y = x. Kujdes: f⁻¹(x) nuk është 1/f(x).',
        keyPoints: ['y = f(x) → zgjidh për x → ndërro x, y', 'f(a) = b ⇔ f⁻¹(b) = a', 'f⁻¹ ≠ 1/f'],
        examples: [
          { example: 'Gjeni inversin e f(x) = 3x − 6 dhe kontrolloni me f(2) = 0.', solution: 'f⁻¹(x) = (x + 6)/3; f⁻¹(0) = 6/3 = 2 ✓.' },
          { example: 'Gjeni f⁻¹ për f(x) = (2x + 1)/5 dhe llogaritni f⁻¹(3).', solution: '5y = 2x + 1 → x = (5y − 1)/2; f⁻¹(3) = (15 − 1)/2 = 7.' },
        ],
        commonMistakes: [
          { mistake: 'f⁻¹(x) = 1/(3x − 6).', fix: '−1 te f⁻¹ nuk është fuqi; f⁻¹ është funksioni që e kthen veprimin.' },
        ],
        practice: [
          { problem: 'f(x) = x/2 + 4. Gjeni f⁻¹ dhe llogaritni f⁻¹(10).', solution: 'f⁻¹(x) = 2(x − 4); f⁻¹(10) = 12', steps: ['y = x/2 + 4 → x = 2(y − 4).', 'f⁻¹(10) = 2 · 6 = 12.'] },
          { problem: 'f(x) = x³. Sa është f⁻¹(8)?', solution: '2', steps: ['f⁻¹(x) = ∛x.', '∛8 = 2.'] },
          { problem: 'f(x) = 3x − 4. Pa e gjetur f⁻¹, sa është f⁻¹(11)?', solution: '5', steps: ['Kërkojmë a me f(a) = 11: 3a − 4 = 11.', 'a = 5 (kontroll: 3 · 5 − 4 = 11).'] },
        ],
      },
      en: {
        title: 'Inverse functions',
        objectives: ['Find the inverse function by solving y = f(x) for x.', 'Use the link f(a) = b ⇔ f⁻¹(b) = a.'],
        theory: 'The inverse function f⁻¹ "undoes" f: if f(a) = b, then f⁻¹(b) = a. It exists when f is one-to-one (each value is reached only once).\n\nSteps: write y = f(x), solve for x, then swap x and y.\ny = 3x − 6 → x = (y + 6)/3 → f⁻¹(x) = (x + 6)/3.\n\nThe graph of f⁻¹ is the reflection of the graph of f in the line y = x. Careful: f⁻¹(x) is not 1/f(x).',
        keyPoints: ['y = f(x) → solve for x → swap x, y', 'f(a) = b ⇔ f⁻¹(b) = a', 'f⁻¹ ≠ 1/f'],
        examples: [
          { example: 'Find the inverse of f(x) = 3x − 6 and check with f(2) = 0.', solution: 'f⁻¹(x) = (x + 6)/3; f⁻¹(0) = 6/3 = 2 ✓.' },
          { example: 'Find f⁻¹ for f(x) = (2x + 1)/5 and work out f⁻¹(3).', solution: '5y = 2x + 1 → x = (5y − 1)/2; f⁻¹(3) = (15 − 1)/2 = 7.' },
        ],
        commonMistakes: [
          { mistake: 'f⁻¹(x) = 1/(3x − 6).', fix: 'The −1 in f⁻¹ is not a power; f⁻¹ is the function that reverses f.' },
        ],
        practice: [
          { problem: 'f(x) = x/2 + 4. Find f⁻¹ and work out f⁻¹(10).', solution: 'f⁻¹(x) = 2(x − 4); f⁻¹(10) = 12', steps: ['y = x/2 + 4 → x = 2(y − 4).', 'f⁻¹(10) = 2 · 6 = 12.'] },
          { problem: 'f(x) = x³. What is f⁻¹(8)?', solution: '2', steps: ['f⁻¹(x) = ∛x.', '∛8 = 2.'] },
          { problem: 'f(x) = 3x − 4. Without finding f⁻¹, what is f⁻¹(11)?', solution: '5', steps: ['Look for a with f(a) = 11: 3a − 4 = 11.', 'a = 5 (check: 3 · 5 − 4 = 11).'] },
        ],
      },
      de: {
        title: 'Umkehrfunktion',
        objectives: ['Die Umkehrfunktion durch Auflösen von y = f(x) nach x bestimmen.', 'Den Zusammenhang f(a) = b ⇔ f⁻¹(b) = a nutzen.'],
        theory: 'Die Umkehrfunktion f⁻¹ macht f rückgängig: Ist f(a) = b, dann ist f⁻¹(b) = a. Sie existiert, wenn f umkehrbar (injektiv) ist, also jeder Wert nur einmal angenommen wird.\n\nVorgehen: y = f(x) aufschreiben, nach x auflösen, dann x und y tauschen.\ny = 3x − 6 → x = (y + 6)/3 → f⁻¹(x) = (x + 6)/3.\n\nDer Graph von f⁻¹ ist die Spiegelung des Graphen von f an der Geraden y = x. Achtung: f⁻¹(x) ist nicht 1/f(x).',
        keyPoints: ['y = f(x) → nach x auflösen → x, y tauschen', 'f(a) = b ⇔ f⁻¹(b) = a', 'f⁻¹ ≠ 1/f'],
        examples: [
          { example: 'Bestimmen Sie die Umkehrfunktion von f(x) = 3x − 6 und prüfen Sie mit f(2) = 0.', solution: 'f⁻¹(x) = (x + 6)/3; f⁻¹(0) = 6/3 = 2 ✓.' },
          { example: 'Bestimmen Sie f⁻¹ für f(x) = (2x + 1)/5 und berechnen Sie f⁻¹(3).', solution: '5y = 2x + 1 → x = (5y − 1)/2; f⁻¹(3) = (15 − 1)/2 = 7.' },
        ],
        commonMistakes: [
          { mistake: 'f⁻¹(x) = 1/(3x − 6).', fix: 'Das −1 in f⁻¹ ist kein Exponent; f⁻¹ ist die Funktion, die f umkehrt.' },
        ],
        practice: [
          { problem: 'f(x) = x/2 + 4. Bestimmen Sie f⁻¹ und berechnen Sie f⁻¹(10).', solution: 'f⁻¹(x) = 2(x − 4); f⁻¹(10) = 12', steps: ['y = x/2 + 4 → x = 2(y − 4).', 'f⁻¹(10) = 2 · 6 = 12.'] },
          { problem: 'f(x) = x³. Wie groß ist f⁻¹(8)?', solution: '2', steps: ['f⁻¹(x) = ∛x.', '∛8 = 2.'] },
          { problem: 'f(x) = 3x − 4. Wie groß ist f⁻¹(11), ohne f⁻¹ zu bestimmen?', solution: '5', steps: ['Gesucht ist a mit f(a) = 11: 3a − 4 = 11.', 'a = 5 (Probe: 3 · 5 − 4 = 11).'] },
        ],
      },
    },
  ],
};
