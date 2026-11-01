// Grade 12 · Theme 8: Derivatives
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g12-derivatives',
  i18n: {
    al: { title: 'Derivatet', description: 'Përkufizimi i derivatit, derivati si shpejtësi, rregullat e derivimit, tangjentja, derivatet e eˣ, ln x, sin x, cos x dhe derivati i funksionit të përbërë.' },
    en: { title: 'Derivatives', description: 'Definition of the derivative, the derivative as a rate of change, differentiation rules, tangents, derivatives of eˣ, ln x, sin x, cos x and the chain rule.' },
    de: { title: 'Ableitungen', description: 'Definition der Ableitung, Ableitung als Änderungsrate, Ableitungsregeln, Tangenten, Ableitungen von eˣ, ln x, sin x, cos x und die Kettenregel.' },
  },
  lessons: [
    // ───────── 1. Definition
    {
      slug: 'g12-derivatives-definition',
      practiceVisuals: {
        0: {
        type: 'functionPlot', view: { xMin: -3, xMax: 3, yMin: -2, yMax: 9 },
        functions: [{ expr: 'x^2', label: 'f(x) = x²' }, { expr: '(2*a)*(x - a) + (a^2)', color: 'secondary', dashed: true, label: { al: 'tangjentja', en: 'tangent', de: 'Tangente' } }],
        points: [{ at: ['a', 'a^2'], label: '({a}, {a^2})', color: 'secondary' }],
        sliders: [{ name: 'a', min: -3, max: 3, step: 0.5, value: -1 }],
        readouts: [
          { text: { al: 'f′({a}) = {2*a} = pjerrësia e tangjentes; tangjentja: y = {2*a}x {+a^2 - (2*a)*a}', en: 'f′({a}) = {2*a} = gradient of the tangent; tangent: y = {2*a}x {+a^2 - (2*a)*a}', de: 'f′({a}) = {2*a} = Tangentensteigung; Tangente: y = {2*a}x {+a^2 - (2*a)*a}' } },
          { cases: [{ when: '2*a > 0', text: { al: 'f′ > 0: funksioni është rritës këtu.', en: 'f′ > 0: the function is increasing here.', de: 'f′ > 0: Die Funktion steigt hier.' } }, { when: '2*a < 0', text: { al: 'f′ < 0: funksioni është zbritës këtu.', en: 'f′ < 0: the function is decreasing here.', de: 'f′ < 0: Die Funktion fällt hier.' } }, { text: { al: 'f′ = 0: tangjentja horizontale (pikë kritike).', en: 'f′ = 0: horizontal tangent (critical point).', de: 'f′ = 0: waagerechte Tangente (kritische Stelle).' } }] },
        ],
        alt: { al: 'Grafiku i funksionit me një pikë që lëviz dhe tangjenten në të.', en: 'The graph of the function with a moving point and the tangent there.', de: 'Der Graph der Funktion mit einem beweglichen Punkt und der Tangente dort.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 5, yMin: -2, yMax: 18 }, height: 220,
        functions: [
          { expr: 'x^2', label: 'y = x²' },
          { expr: '7*x - 12', domain: [2, 5], color: 'muted', dashed: true, label: alt('sekantja', 'secant', 'Sekante') },
          { expr: '6*x - 9', domain: [1.6, 4.5], color: 'secondary', label: alt('tangjentja', 'tangent', 'Tangente') },
        ],
        points: [{ at: [3, 9], label: '(3, 9)' }, { at: [4, 16], label: '(4, 16)' }],
        caption: alt('Kur h → 0, sekantja (pjerrësia 7 për h = 1) kthehet në tangjente me pjerrësi f′(3) = 6.', 'As h → 0 the secant (gradient 7 for h = 1) turns into the tangent with gradient f′(3) = 6.', 'Für h → 0 wird die Sekante (Steigung 7 für h = 1) zur Tangente mit Steigung f′(3) = 6.'),
        alt: alt('Parabola y = x² me sekanten nëpër (3, 9) dhe (4, 16) dhe tangjenten në (3, 9).', 'The parabola y = x² with the secant through (3, 9) and (4, 16) and the tangent at (3, 9).', 'Die Parabel y = x² mit der Sekante durch (3 | 9) und (4 | 16) und der Tangente in (3 | 9).'),
      }],
      answers: {
        examples: [[['((3 + 1e-7)^2 - 9) / 1e-7', 6, 1e-5]], [['(3*(2 + 1e-6) + 2 - (3*2 + 2)) / 1e-6', 3, 1e-5]]],
        practice: [[['2 * (-1)', -2]], [['(16 - 9) / 1', 7]], [['(1.1^3 - 1) / 0.1', 3.31, 0.005]]],
      },
      al: {
        title: 'Përkufizimi i derivatit',
        objectives: ['Të llogaritni derivatin në një pikë me limitin e herësit të ndryshimeve.', 'Ta lidhni derivatin me pjerrësinë e tangjentes.'],
        theory: 'Herësi i ndryshimeve (f(a + h) − f(a))/h është pjerrësia e sekantes midis (a, f(a)) dhe (a + h, f(a + h)).\n\nDerivati në a është limiti i tij kur h → 0:\nf′(a) = lim (f(a + h) − f(a))/h.\nAi është pjerrësia e tangjentes në pikën (a, f(a)).\n\nPër f(x) = x² në a = 3: ((3 + h)² − 9)/h = (6h + h²)/h = 6 + h → 6. Në përgjithësi (x²)′ = 2x.',
        keyPoints: ['f′(a) = lim (f(a + h) − f(a))/h', 'Derivati = pjerrësia e tangjentes', '(x²)′ = 2x'],
        examples: [
          { example: 'Me përkufizim, gjeni f′(3) për f(x) = x².', solution: '((3 + h)² − 9)/h = 6 + h → 6.' },
          { example: 'Gjeni f′(x) për f(x) = 3x + 2.', solution: '(3(x + h) + 2 − 3x − 2)/h = 3h/h = 3, për çdo x.' },
        ],
        commonMistakes: [
          { mistake: 'Vendoset h = 0 menjëherë dhe del 0/0.', fix: 'Së pari thjeshtoni me h, pastaj kaloni në limit.' },
        ],
        practice: [
          { problem: 'Për f(x) = x², sa është f′(−1)?', solution: '−2', steps: ['f′(x) = 2x.', 'f′(−1) = 2 · (−1) = −2.'] },
          { problem: 'Sa është pjerrësia e sekantes së y = x² nga x = 3 te x = 4?', solution: '7', steps: ['(16 − 9)/(4 − 3).', '= 7.'] },
          { problem: 'Për f(x) = x³ llogaritni herësin e ndryshimeve në a = 1 me h = 0,1.', solution: '3,31 (f′(1) = 3)', steps: ['(1,1³ − 1)/0,1 = 0,331/0,1.', '= 3,31; kur h → 0 afrohet te 3.'] },
        ],
      },
      en: {
        title: 'Definition of the derivative',
        objectives: ['Work out the derivative at a point as the limit of the difference quotient.', 'Link the derivative to the gradient of the tangent.'],
        theory: 'The difference quotient (f(a + h) − f(a))/h is the gradient of the secant between (a, f(a)) and (a + h, f(a + h)).\n\nThe derivative at a is its limit as h → 0:\nf′(a) = lim (f(a + h) − f(a))/h.\nIt is the gradient of the tangent at the point (a, f(a)).\n\nFor f(x) = x² at a = 3: ((3 + h)² − 9)/h = (6h + h²)/h = 6 + h → 6. In general (x²)′ = 2x.',
        keyPoints: ['f′(a) = lim (f(a + h) − f(a))/h', 'Derivative = gradient of the tangent', '(x²)′ = 2x'],
        examples: [
          { example: 'Using the definition, find f′(3) for f(x) = x².', solution: '((3 + h)² − 9)/h = 6 + h → 6.' },
          { example: 'Find f′(x) for f(x) = 3x + 2.', solution: '(3(x + h) + 2 − 3x − 2)/h = 3h/h = 3, for every x.' },
        ],
        commonMistakes: [
          { mistake: 'h = 0 is put in straight away, giving 0/0.', fix: 'First cancel h, then take the limit.' },
        ],
        practice: [
          { problem: 'For f(x) = x², what is f′(−1)?', solution: '−2', steps: ['f′(x) = 2x.', 'f′(−1) = 2 · (−1) = −2.'] },
          { problem: 'What is the gradient of the secant of y = x² from x = 3 to x = 4?', solution: '7', steps: ['(16 − 9)/(4 − 3).', '= 7.'] },
          { problem: 'For f(x) = x³ work out the difference quotient at a = 1 with h = 0.1.', solution: '3.31 (f′(1) = 3)', steps: ['(1.1³ − 1)/0.1 = 0.331/0.1.', '= 3.31; as h → 0 it approaches 3.'] },
        ],
      },
      de: {
        title: 'Definition der Ableitung',
        objectives: ['Die Ableitung an einer Stelle als Grenzwert des Differenzenquotienten berechnen.', 'Die Ableitung mit der Tangentensteigung verbinden.'],
        theory: 'Der Differenzenquotient (f(a + h) − f(a))/h ist die Steigung der Sekante durch (a | f(a)) und (a + h | f(a + h)).\n\nDie Ableitung an der Stelle a ist sein Grenzwert für h → 0 (Differentialquotient):\nf′(a) = lim (f(a + h) − f(a))/h.\nSie ist die Steigung der Tangente im Punkt (a | f(a)).\n\nFür f(x) = x² bei a = 3: ((3 + h)² − 9)/h = (6h + h²)/h = 6 + h → 6. Allgemein gilt (x²)′ = 2x.',
        keyPoints: ['f′(a) = lim (f(a + h) − f(a))/h', 'Ableitung = Tangentensteigung', '(x²)′ = 2x'],
        examples: [
          { example: 'Bestimmen Sie mit der Definition f′(3) für f(x) = x².', solution: '((3 + h)² − 9)/h = 6 + h → 6.' },
          { example: 'Bestimmen Sie f′(x) für f(x) = 3x + 2.', solution: '(3(x + h) + 2 − 3x − 2)/h = 3h/h = 3, für alle x.' },
        ],
        commonMistakes: [
          { mistake: 'Man setzt sofort h = 0 ein und erhält 0/0.', fix: 'Erst h kürzen, dann den Grenzwert bilden.' },
        ],
        practice: [
          { problem: 'Für f(x) = x²: Wie groß ist f′(−1)?', solution: '−2', steps: ['f′(x) = 2x.', 'f′(−1) = 2 · (−1) = −2.'] },
          { problem: 'Welche Steigung hat die Sekante von y = x² zwischen x = 3 und x = 4?', solution: '7', steps: ['(16 − 9)/(4 − 3).', '= 7.'] },
          { problem: 'Berechnen Sie für f(x) = x³ den Differenzenquotienten bei a = 1 mit h = 0,1.', solution: '3,31 (f′(1) = 3)', steps: ['(1,1³ − 1)/0,1 = 0,331/0,1.', '= 3,31; für h → 0 nähert er sich 3.'] },
        ],
      },
    },
    // ───────── 2. Derivative as a rate of change
    {
      slug: 'g12-derivatives-rate-of-change',
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 4, yMin: 0, yMax: 80 }, height: 210,
        functions: [{ expr: '5*x^2', label: 's(t) = 5t²' }, { expr: '30*x - 45', domain: [2, 4], color: 'secondary', dashed: true, label: 'v(3) = 30' }],
        points: [{ at: [3, 45], label: '(3, 45)' }],
        caption: alt('Rruga s (m) sipas kohës t (s). Pjerrësia e tangjentes te t = 3 është shpejtësia 30 m/s.', 'Distance s (m) against time t (s). The gradient of the tangent at t = 3 is the velocity 30 m/s.', 'Weg s (m) über der Zeit t (s). Die Tangentensteigung bei t = 3 ist die Geschwindigkeit 30 m/s.'),
        alt: alt('Grafiku s = 5t² me tangjenten në t = 3.', 'The graph s = 5t² with the tangent at t = 3.', 'Der Graph s = 5t² mit der Tangente bei t = 3.'),
      }],
      answers: {
        examples: [[['(5*9 - 5*1) / 2', 20]], [['10 * 3', 30]]],
        practice: [[['2*4 + 2', 10]], [['4 * pi * 2^2', 50.27, 0.005]], [['20 + 10', 30]]],
      },
      al: {
        title: 'Derivati si shpejtësi',
        objectives: ['Të dalloni shpejtësinë mesatare nga ajo e çastit.', 'Ta interpretoni derivatin si normë ndryshimi në fizikë dhe ekonomi.'],
        theory: 'Shpejtësia mesatare në [t₁, t₂] është (s(t₂) − s(t₁))/(t₂ − t₁) – pjerrësia e sekantes.\nShpejtësia e çastit është derivati: v(t) = s′(t).\n\nPër s(t) = 5t²: v(t) = 10t, pra në t = 3 s, v = 30 m/s. Nxitimi është a(t) = v′(t).\n\nNë përgjithësi f′(x) tregon sa shpejt ndryshon f kur ndryshon x: p.sh. kostoja marxhinale C′(x), ndryshimi i vëllimit sipas rrezes V′(r).',
        keyPoints: ['Mesatare: pjerrësia e sekantes', 'E çastit: v = s′(t)', 'f′(x) = normë ndryshimi'],
        examples: [
          { example: 's(t) = 5t² (m). Sa është shpejtësia mesatare nga t = 1 s te t = 3 s?', solution: '(45 − 5)/(3 − 1) = 20 m/s.' },
          { example: 'Sa është shpejtësia në çastin t = 3 s?', solution: 'v = s′(t) = 10t → v(3) = 30 m/s.' },
        ],
        commonMistakes: [
          { mistake: 'Shpejtësia në t = 3 merret s(3) = 45.', fix: 's(3) është rruga; shpejtësia është s′(3) = 30.' },
        ],
        practice: [
          { problem: 's(t) = t² + 2t. Sa është v(4)?', solution: '10', steps: ['v(t) = 2t + 2.', 'v(4) = 8 + 2 = 10.'] },
          { problem: 'V(r) = 4/3 πr³. Sa shpejt ndryshon V sipas r kur r = 2?', solution: '16π ≈ 50,27', steps: ['V′(r) = 4πr².', 'V′(2) = 16π ≈ 50,27.'] },
          { problem: 'Kostoja C(x) = 0,5x² + 10x. Sa është kostoja marxhinale për x = 20?', solution: '30', steps: ['C′(x) = x + 10.', 'C′(20) = 30.'] },
        ],
      },
      en: {
        title: 'The derivative as a rate of change',
        objectives: ['Tell average velocity from instantaneous velocity.', 'Interpret the derivative as a rate of change in physics and economics.'],
        theory: 'The average velocity on [t₁, t₂] is (s(t₂) − s(t₁))/(t₂ − t₁) – the gradient of the secant.\nThe instantaneous velocity is the derivative: v(t) = s′(t).\n\nFor s(t) = 5t²: v(t) = 10t, so at t = 3 s, v = 30 m/s. The acceleration is a(t) = v′(t).\n\nIn general f′(x) says how fast f changes as x changes: e.g. marginal cost C′(x), the rate of change of volume with radius V′(r).',
        keyPoints: ['Average: gradient of the secant', 'Instantaneous: v = s′(t)', 'f′(x) = rate of change'],
        examples: [
          { example: 's(t) = 5t² (m). What is the average velocity from t = 1 s to t = 3 s?', solution: '(45 − 5)/(3 − 1) = 20 m/s.' },
          { example: 'What is the velocity at the instant t = 3 s?', solution: 'v = s′(t) = 10t → v(3) = 30 m/s.' },
        ],
        commonMistakes: [
          { mistake: 'The velocity at t = 3 is taken as s(3) = 45.', fix: 's(3) is the distance; the velocity is s′(3) = 30.' },
        ],
        practice: [
          { problem: 's(t) = t² + 2t. What is v(4)?', solution: '10', steps: ['v(t) = 2t + 2.', 'v(4) = 8 + 2 = 10.'] },
          { problem: 'V(r) = 4/3 πr³. How fast does V change with r when r = 2?', solution: '16π ≈ 50.27', steps: ['V′(r) = 4πr².', 'V′(2) = 16π ≈ 50.27.'] },
          { problem: 'The cost is C(x) = 0.5x² + 10x. What is the marginal cost at x = 20?', solution: '30', steps: ['C′(x) = x + 10.', 'C′(20) = 30.'] },
        ],
      },
      de: {
        title: 'Die Ableitung als Änderungsrate',
        objectives: ['Durchschnitts- und Momentangeschwindigkeit unterscheiden.', 'Die Ableitung als Änderungsrate in Physik und Wirtschaft deuten.'],
        theory: 'Die Durchschnittsgeschwindigkeit auf [t₁, t₂] ist (s(t₂) − s(t₁))/(t₂ − t₁) – die Sekantensteigung.\nDie Momentangeschwindigkeit ist die Ableitung: v(t) = s′(t).\n\nFür s(t) = 5t²: v(t) = 10t, also bei t = 3 s: v = 30 m/s. Die Beschleunigung ist a(t) = v′(t).\n\nAllgemein gibt f′(x) an, wie schnell sich f mit x ändert: z. B. Grenzkosten C′(x), Änderung des Volumens mit dem Radius V′(r).',
        keyPoints: ['Mittlere Rate: Sekantensteigung', 'Momentan: v = s′(t)', 'f′(x) = Änderungsrate'],
        examples: [
          { example: 's(t) = 5t² (m). Wie groß ist die Durchschnittsgeschwindigkeit von t = 1 s bis t = 3 s?', solution: '(45 − 5)/(3 − 1) = 20 m/s.' },
          { example: 'Wie groß ist die Geschwindigkeit im Moment t = 3 s?', solution: 'v = s′(t) = 10t → v(3) = 30 m/s.' },
        ],
        commonMistakes: [
          { mistake: 'Als Geschwindigkeit bei t = 3 wird s(3) = 45 genommen.', fix: 's(3) ist der Weg; die Geschwindigkeit ist s′(3) = 30.' },
        ],
        practice: [
          { problem: 's(t) = t² + 2t. Wie groß ist v(4)?', solution: '10', steps: ['v(t) = 2t + 2.', 'v(4) = 8 + 2 = 10.'] },
          { problem: 'V(r) = 4/3 πr³. Wie schnell ändert sich V mit r bei r = 2?', solution: '16π ≈ 50,27', steps: ['V′(r) = 4πr².', 'V′(2) = 16π ≈ 50,27.'] },
          { problem: 'Die Kosten sind C(x) = 0,5x² + 10x. Wie groß sind die Grenzkosten bei x = 20?', solution: '30', steps: ['C′(x) = x + 10.', 'C′(20) = 30.'] },
        ],
      },
    },
    // ───────── 3. Rules
    {
      slug: 'g12-derivatives-rules',
      noVisual: 'The differentiation rules are applied step by step in the worked examples.',
      answers: {
        examples: [[['12*1^2 - 2', 10]], [['3*2^2 - 6*2 + 1', 1]]],
        practice: [[['20 - 6 + 1', 15]], [['1 / (1 + 1)^2', 0.25, 0, '1/4']], [['1 / (2 * sqrt(4))', 0.25, 0, '1/4']]],
      },
      al: {
        title: 'Rregullat e derivimit',
        objectives: ['Të derivoni polinome me rregullën e fuqisë, të shumës dhe të konstantes.', 'Të përdorni rregullat e prodhimit dhe të herësit.'],
        theory: 'Rregullat bazë:\n• (c)′ = 0; (xⁿ)′ = n · xⁿ⁻¹ (edhe për n thyesor ose negativ: (√x)′ = 1/(2√x));\n• (c · f)′ = c · f′; (f ± g)′ = f′ ± g′.\n(4x³ − 2x + 7)′ = 12x² − 2.\n\nProdhimi: (f · g)′ = f′ · g + f · g′.\nHerësi: (f/g)′ = (f′ · g − f · g′)/g².',
        keyPoints: ['(xⁿ)′ = n · xⁿ⁻¹', '(fg)′ = f′g + fg′', '(f/g)′ = (f′g − fg′)/g²'],
        examples: [
          { example: 'Derivoni f(x) = 4x³ − 2x + 7 dhe llogaritni f′(1).', solution: 'f′(x) = 12x² − 2; f′(1) = 10.' },
          { example: 'Derivoni f(x) = (x² + 1)(x − 3) dhe llogaritni f′(2).', solution: 'f′ = 2x(x − 3) + (x² + 1) = 3x² − 6x + 1; f′(2) = 12 − 12 + 1 = 1.' },
        ],
        commonMistakes: [
          { mistake: '(fg)′ = f′ · g′.', fix: 'Rregulla e prodhimit: f′g + fg′.' },
          { mistake: 'Derivati i konstantes 7 merret 7.', fix: 'Konstantja nuk ndryshon: (7)′ = 0.' },
        ],
        practice: [
          { problem: 'Derivoni 5x⁴ − 3x² + x dhe llogaritni në x = 1.', solution: '20x³ − 6x + 1; vlera 15', steps: ['20x³ − 6x + 1.', '20 − 6 + 1 = 15.'] },
          { problem: 'Derivoni x/(x + 1) dhe llogaritni në x = 1.', solution: '1/(x + 1)²; vlera 1/4', steps: ['(1 · (x + 1) − x · 1)/(x + 1)² = 1/(x + 1)².', '1/2² = 1/4.'] },
          { problem: 'Derivoni √x dhe llogaritni në x = 4.', solution: '1/(2√x); vlera 1/4', steps: ['√x = x^(1/2) → 1/2 · x^(−1/2).', '1/(2 · 2) = 1/4.'] },
        ],
      },
      en: {
        title: 'Differentiation rules',
        objectives: ['Differentiate polynomials with the power, sum and constant rules.', 'Use the product and quotient rules.'],
        theory: 'Basic rules:\n• (c)′ = 0; (xⁿ)′ = n · xⁿ⁻¹ (also for fractional or negative n: (√x)′ = 1/(2√x));\n• (c · f)′ = c · f′; (f ± g)′ = f′ ± g′.\n(4x³ − 2x + 7)′ = 12x² − 2.\n\nProduct: (f · g)′ = f′ · g + f · g′.\nQuotient: (f/g)′ = (f′ · g − f · g′)/g².',
        keyPoints: ['(xⁿ)′ = n · xⁿ⁻¹', '(fg)′ = f′g + fg′', '(f/g)′ = (f′g − fg′)/g²'],
        examples: [
          { example: 'Differentiate f(x) = 4x³ − 2x + 7 and work out f′(1).', solution: 'f′(x) = 12x² − 2; f′(1) = 10.' },
          { example: 'Differentiate f(x) = (x² + 1)(x − 3) and work out f′(2).', solution: 'f′ = 2x(x − 3) + (x² + 1) = 3x² − 6x + 1; f′(2) = 12 − 12 + 1 = 1.' },
        ],
        commonMistakes: [
          { mistake: '(fg)′ = f′ · g′.', fix: 'Product rule: f′g + fg′.' },
          { mistake: 'The derivative of the constant 7 is taken as 7.', fix: 'A constant does not change: (7)′ = 0.' },
        ],
        practice: [
          { problem: 'Differentiate 5x⁴ − 3x² + x and evaluate at x = 1.', solution: '20x³ − 6x + 1; value 15', steps: ['20x³ − 6x + 1.', '20 − 6 + 1 = 15.'] },
          { problem: 'Differentiate x/(x + 1) and evaluate at x = 1.', solution: '1/(x + 1)²; value 1/4', steps: ['(1 · (x + 1) − x · 1)/(x + 1)² = 1/(x + 1)².', '1/2² = 1/4.'] },
          { problem: 'Differentiate √x and evaluate at x = 4.', solution: '1/(2√x); value 1/4', steps: ['√x = x^(1/2) → 1/2 · x^(−1/2).', '1/(2 · 2) = 1/4.'] },
        ],
      },
      de: {
        title: 'Ableitungsregeln',
        objectives: ['Polynome mit Potenz-, Summen- und Faktorregel ableiten.', 'Produkt- und Quotientenregel anwenden.'],
        theory: 'Grundregeln:\n• (c)′ = 0; (xⁿ)′ = n · xⁿ⁻¹ (auch für gebrochene oder negative n: (√x)′ = 1/(2√x));\n• (c · f)′ = c · f′; (f ± g)′ = f′ ± g′.\n(4x³ − 2x + 7)′ = 12x² − 2.\n\nProduktregel: (f · g)′ = f′ · g + f · g′.\nQuotientenregel: (f/g)′ = (f′ · g − f · g′)/g².',
        keyPoints: ['(xⁿ)′ = n · xⁿ⁻¹', '(fg)′ = f′g + fg′', '(f/g)′ = (f′g − fg′)/g²'],
        examples: [
          { example: 'Leiten Sie f(x) = 4x³ − 2x + 7 ab und berechnen Sie f′(1).', solution: 'f′(x) = 12x² − 2; f′(1) = 10.' },
          { example: 'Leiten Sie f(x) = (x² + 1)(x − 3) ab und berechnen Sie f′(2).', solution: 'f′ = 2x(x − 3) + (x² + 1) = 3x² − 6x + 1; f′(2) = 12 − 12 + 1 = 1.' },
        ],
        commonMistakes: [
          { mistake: '(fg)′ = f′ · g′.', fix: 'Produktregel: f′g + fg′.' },
          { mistake: 'Die Ableitung der Konstanten 7 wird 7 gesetzt.', fix: 'Eine Konstante ändert sich nicht: (7)′ = 0.' },
        ],
        practice: [
          { problem: 'Leiten Sie 5x⁴ − 3x² + x ab und werten Sie bei x = 1 aus.', solution: '20x³ − 6x + 1; Wert 15', steps: ['20x³ − 6x + 1.', '20 − 6 + 1 = 15.'] },
          { problem: 'Leiten Sie x/(x + 1) ab und werten Sie bei x = 1 aus.', solution: '1/(x + 1)²; Wert 1/4', steps: ['(1 · (x + 1) − x · 1)/(x + 1)² = 1/(x + 1)².', '1/2² = 1/4.'] },
          { problem: 'Leiten Sie √x ab und werten Sie bei x = 4 aus.', solution: '1/(2√x); Wert 1/4', steps: ['√x = x^(1/2) → 1/2 · x^(−1/2).', '1/(2 · 2) = 1/4.'] },
        ],
      },
    },
    // ───────── 4. Tangent
    {
      slug: 'g12-derivatives-tangent',
      practiceVisuals: {
        0: {
        type: 'functionPlot', view: { xMin: -2, xMax: 5, yMin: -4, yMax: 8 },
        functions: [{ expr: 'x^2 - 3*x', label: 'f(x) = x² - 3x' }, { expr: '(2*a - 3)*(x - a) + (a^2 - 3*a)', color: 'secondary', dashed: true, label: { al: 'tangjentja', en: 'tangent', de: 'Tangente' } }],
        points: [{ at: ['a', 'a^2 - 3*a'], label: '({a}, {a^2 - 3*a})', color: 'secondary' }],
        sliders: [{ name: 'a', min: -2, max: 5, step: 0.5, value: 0 }],
        readouts: [
          { text: { al: 'f′({a}) = {2*a - 3} = pjerrësia e tangjentes; tangjentja: y = {2*a - 3}x {+a^2 - 3*a - (2*a - 3)*a}', en: 'f′({a}) = {2*a - 3} = gradient of the tangent; tangent: y = {2*a - 3}x {+a^2 - 3*a - (2*a - 3)*a}', de: 'f′({a}) = {2*a - 3} = Tangentensteigung; Tangente: y = {2*a - 3}x {+a^2 - 3*a - (2*a - 3)*a}' } },
          { cases: [{ when: '2*a - 3 > 0', text: { al: 'f′ > 0: funksioni është rritës këtu.', en: 'f′ > 0: the function is increasing here.', de: 'f′ > 0: Die Funktion steigt hier.' } }, { when: '2*a - 3 < 0', text: { al: 'f′ < 0: funksioni është zbritës këtu.', en: 'f′ < 0: the function is decreasing here.', de: 'f′ < 0: Die Funktion fällt hier.' } }, { text: { al: 'f′ = 0: tangjentja horizontale (pikë kritike).', en: 'f′ = 0: horizontal tangent (critical point).', de: 'f′ = 0: waagerechte Tangente (kritische Stelle).' } }] },
        ],
        alt: { al: 'Grafiku i funksionit me një pikë që lëviz dhe tangjenten në të.', en: 'The graph of the function with a moving point and the tangent there.', de: 'Der Graph der Funktion mit einem beweglichen Punkt und der Tangente dort.' },
      },
        1: {
        type: 'functionPlot', view: { xMin: -1, xMax: 5, yMin: -6, yMax: 6 },
        functions: [{ expr: 'x^2 - 4*x', label: 'f(x) = x² - 4x' }, { expr: '(2*a - 4)*(x - a) + (a^2 - 4*a)', color: 'secondary', dashed: true, label: { al: 'tangjentja', en: 'tangent', de: 'Tangente' } }],
        points: [{ at: ['a', 'a^2 - 4*a'], label: '({a}, {a^2 - 4*a})', color: 'secondary' }],
        sliders: [{ name: 'a', min: -1, max: 5, step: 0.5, value: 0 }],
        readouts: [
          { text: { al: 'f′({a}) = {2*a - 4} = pjerrësia e tangjentes; tangjentja: y = {2*a - 4}x {+a^2 - 4*a - (2*a - 4)*a}', en: 'f′({a}) = {2*a - 4} = gradient of the tangent; tangent: y = {2*a - 4}x {+a^2 - 4*a - (2*a - 4)*a}', de: 'f′({a}) = {2*a - 4} = Tangentensteigung; Tangente: y = {2*a - 4}x {+a^2 - 4*a - (2*a - 4)*a}' } },
          { cases: [{ when: '2*a - 4 > 0', text: { al: 'f′ > 0: funksioni është rritës këtu.', en: 'f′ > 0: the function is increasing here.', de: 'f′ > 0: Die Funktion steigt hier.' } }, { when: '2*a - 4 < 0', text: { al: 'f′ < 0: funksioni është zbritës këtu.', en: 'f′ < 0: the function is decreasing here.', de: 'f′ < 0: Die Funktion fällt hier.' } }, { text: { al: 'f′ = 0: tangjentja horizontale (pikë kritike).', en: 'f′ = 0: horizontal tangent (critical point).', de: 'f′ = 0: waagerechte Tangente (kritische Stelle).' } }] },
        ],
        alt: { al: 'Grafiku i funksionit me një pikë që lëviz dhe tangjenten në të.', en: 'The graph of the function with a moving point and the tangent there.', de: 'Der Graph der Funktion mit einem beweglichen Punkt und der Tangente dort.' },
      },
        2: {
        type: 'functionPlot', view: { xMin: 0, xMax: 5, yMin: -1, yMax: 5 },
        functions: [{ expr: '1/x', label: 'f(x) = 1/x' }, { expr: '(-1/a^2)*(x - a) + (1/a)', color: 'secondary', dashed: true, label: { al: 'tangjentja', en: 'tangent', de: 'Tangente' } }],
        points: [{ at: ['a', '1/a'], label: '({a}, {1/a})', color: 'secondary' }],
        sliders: [{ name: 'a', min: 0.5, max: 4, step: 0.5, value: 1 }],
        readouts: [
          { text: { al: 'f′({a}) = {-1/a^2} = pjerrësia e tangjentes; tangjentja: y = {-1/a^2}x {+1/a - (-1/a^2)*a}', en: 'f′({a}) = {-1/a^2} = gradient of the tangent; tangent: y = {-1/a^2}x {+1/a - (-1/a^2)*a}', de: 'f′({a}) = {-1/a^2} = Tangentensteigung; Tangente: y = {-1/a^2}x {+1/a - (-1/a^2)*a}' } },
          { cases: [{ when: '-1/a^2 > 0', text: { al: 'f′ > 0: funksioni është rritës këtu.', en: 'f′ > 0: the function is increasing here.', de: 'f′ > 0: Die Funktion steigt hier.' } }, { when: '-1/a^2 < 0', text: { al: 'f′ < 0: funksioni është zbritës këtu.', en: 'f′ < 0: the function is decreasing here.', de: 'f′ < 0: Die Funktion fällt hier.' } }, { text: { al: 'f′ = 0: tangjentja horizontale (pikë kritike).', en: 'f′ = 0: horizontal tangent (critical point).', de: 'f′ = 0: waagerechte Tangente (kritische Stelle).' } }] },
        ],
        alt: { al: 'Grafiku i funksionit me një pikë që lëviz dhe tangjenten në të.', en: 'The graph of the function with a moving point and the tangent there.', de: 'Der Graph der Funktion mit einem beweglichen Punkt und der Tangente dort.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 4, yMin: -5, yMax: 12 }, height: 220,
        functions: [{ expr: 'x^2', label: 'y = x²' }, { expr: '4*x - 4', color: 'secondary', dashed: true, label: 'y = 4x − 4' }],
        points: [{ at: [2, 4], label: '(2, 4)' }],
        caption: alt('f′(2) = 4, pra tangjentja në (2, 4) është y = 4 + 4(x − 2) = 4x − 4.', 'f′(2) = 4, so the tangent at (2, 4) is y = 4 + 4(x − 2) = 4x − 4.', 'f′(2) = 4, also lautet die Tangente in (2 | 4): y = 4 + 4(x − 2) = 4x − 4.'),
        alt: alt('Parabola y = x² dhe tangjentja y = 4x − 4 në pikën (2, 4).', 'The parabola y = x² and the tangent y = 4x − 4 at the point (2, 4).', 'Die Parabel y = x² und die Tangente y = 4x − 4 im Punkt (2 | 4).'),
      }],
      answers: {
        examples: [[['2 * 2', 4], ['4 - 4*2', -4, 0, '-4']], [['3 * 1^2', 3], ['1 - 3', -2, 0, '-2']]],
        practice: [[['2*0 - 3', -3]], [['4 / 2', 2]], [['-1 / 1^2', -1], ['1 + 1', 2]]],
      },
      al: {
        title: 'Tangjentja',
        objectives: ['Të shkruani ekuacionin e tangjentes në një pikë të grafikut.', 'Të gjeni pikat ku tangjentja ka një pjerrësi të dhënë.'],
        theory: 'Tangjentja në pikën (a, f(a)) ka pjerrësinë f′(a), pra:\ny = f(a) + f′(a) · (x − a).\n\nPër y = x² në (2, 4): f′(x) = 2x, f′(2) = 4, y = 4 + 4(x − 2) = 4x − 4.\n\nTangjentja është horizontale aty ku f′(x) = 0; është paralele me një drejtëz me pjerrësi k aty ku f′(x) = k.',
        keyPoints: ['y = f(a) + f′(a)(x − a)', 'Horizontale: f′(x) = 0', 'Paralele me pjerrësinë k: f′(x) = k'],
        examples: [
          { example: 'Gjeni tangjenten e y = x² në pikën (2, 4).', solution: 'f′(2) = 4; y = 4 + 4(x − 2) = 4x − 4.' },
          { example: 'Gjeni tangjenten e y = x³ në x = 1.', solution: 'f(1) = 1, f′(1) = 3; y = 1 + 3(x − 1) = 3x − 2.' },
        ],
        commonMistakes: [
          { mistake: 'Si pjerrësi merret f(a) në vend të f′(a).', fix: 'Pjerrësia është derivati; f(a) jep vetëm pikën.' },
        ],
        practice: [
          { problem: 'Sa është pjerrësia e tangjentes së y = x² − 3x në x = 0?', solution: '−3', steps: ['y′ = 2x − 3.', 'y′(0) = −3 (tangjentja y = −3x).'] },
          { problem: 'Ku është horizontale tangjentja e y = x² − 4x?', solution: 'në x = 2', steps: ['y′ = 2x − 4 = 0.', 'x = 4/2 = 2.'] },
          { problem: 'Gjeni tangjenten e y = 1/x në x = 1.', solution: 'y = −x + 2', steps: ['y′ = −1/x² → y′(1) = −1.', 'y = 1 − (x − 1) = −x + 2.'] },
        ],
      },
      en: {
        title: 'Tangents',
        objectives: ['Write the equation of the tangent at a point of a graph.', 'Find the points where the tangent has a given gradient.'],
        theory: 'The tangent at (a, f(a)) has gradient f′(a), so:\ny = f(a) + f′(a) · (x − a).\n\nFor y = x² at (2, 4): f′(x) = 2x, f′(2) = 4, y = 4 + 4(x − 2) = 4x − 4.\n\nThe tangent is horizontal where f′(x) = 0; it is parallel to a line with gradient k where f′(x) = k.',
        keyPoints: ['y = f(a) + f′(a)(x − a)', 'Horizontal: f′(x) = 0', 'Parallel to gradient k: f′(x) = k'],
        examples: [
          { example: 'Find the tangent to y = x² at the point (2, 4).', solution: 'f′(2) = 4; y = 4 + 4(x − 2) = 4x − 4.' },
          { example: 'Find the tangent to y = x³ at x = 1.', solution: 'f(1) = 1, f′(1) = 3; y = 1 + 3(x − 1) = 3x − 2.' },
        ],
        commonMistakes: [
          { mistake: 'f(a) is taken as the gradient instead of f′(a).', fix: 'The gradient is the derivative; f(a) only gives the point.' },
        ],
        practice: [
          { problem: 'What is the gradient of the tangent to y = x² − 3x at x = 0?', solution: '−3', steps: ['y′ = 2x − 3.', 'y′(0) = −3 (tangent y = −3x).'] },
          { problem: 'Where is the tangent to y = x² − 4x horizontal?', solution: 'at x = 2', steps: ['y′ = 2x − 4 = 0.', 'x = 4/2 = 2.'] },
          { problem: 'Find the tangent to y = 1/x at x = 1.', solution: 'y = −x + 2', steps: ['y′ = −1/x² → y′(1) = −1.', 'y = 1 − (x − 1) = −x + 2.'] },
        ],
      },
      de: {
        title: 'Tangenten',
        objectives: ['Die Gleichung der Tangente in einem Punkt des Graphen aufstellen.', 'Die Stellen bestimmen, an denen die Tangente eine gegebene Steigung hat.'],
        theory: 'Die Tangente in (a | f(a)) hat die Steigung f′(a), also:\ny = f(a) + f′(a) · (x − a).\n\nFür y = x² in (2 | 4): f′(x) = 2x, f′(2) = 4, y = 4 + 4(x − 2) = 4x − 4.\n\nDie Tangente ist waagerecht, wo f′(x) = 0; sie ist parallel zu einer Geraden mit Steigung k, wo f′(x) = k.',
        keyPoints: ['y = f(a) + f′(a)(x − a)', 'Waagerecht: f′(x) = 0', 'Parallel zur Steigung k: f′(x) = k'],
        examples: [
          { example: 'Bestimmen Sie die Tangente an y = x² im Punkt (2 | 4).', solution: 'f′(2) = 4; y = 4 + 4(x − 2) = 4x − 4.' },
          { example: 'Bestimmen Sie die Tangente an y = x³ bei x = 1.', solution: 'f(1) = 1, f′(1) = 3; y = 1 + 3(x − 1) = 3x − 2.' },
        ],
        commonMistakes: [
          { mistake: 'Als Steigung wird f(a) statt f′(a) genommen.', fix: 'Die Steigung ist die Ableitung; f(a) liefert nur den Punkt.' },
        ],
        practice: [
          { problem: 'Welche Steigung hat die Tangente an y = x² − 3x bei x = 0?', solution: '−3', steps: ['y′ = 2x − 3.', 'y′(0) = −3 (Tangente y = −3x).'] },
          { problem: 'Wo ist die Tangente an y = x² − 4x waagerecht?', solution: 'bei x = 2', steps: ['y′ = 2x − 4 = 0.', 'x = 4/2 = 2.'] },
          { problem: 'Bestimmen Sie die Tangente an y = 1/x bei x = 1.', solution: 'y = −x + 2', steps: ['y′ = −1/x² → y′(1) = −1.', 'y = 1 − (x − 1) = −x + 2.'] },
        ],
      },
    },
    // ───────── 5. Exponential, logarithmic and trigonometric
    {
      slug: 'g12-derivatives-exp-log-trig',
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 6.3, yMin: -1.3, yMax: 1.3 }, height: 190,
        functions: [{ expr: 'sin(x)', label: 'sin x' }, { expr: 'cos(x)', color: 'secondary', dashed: true, label: alt('cos x = (sin x)′', 'cos x = (sin x)′', 'cos x = (sin x)′') }],
        caption: alt('Ku sin x ka kulm (pjerrësi 0), cos x = 0; ku sin x ngjitet më shpejt, cos x = 1.', 'Where sin x peaks (gradient 0), cos x = 0; where sin x rises fastest, cos x = 1.', 'Wo sin x ein Maximum hat (Steigung 0), ist cos x = 0; wo sin x am stärksten steigt, ist cos x = 1.'),
        alt: alt('Grafikët e sin x dhe cos x nga 0 deri 2π.', 'The graphs of sin x and cos x from 0 to 2π.', 'Die Graphen von sin x und cos x von 0 bis 2π.'),
      }],
      answers: {
        examples: [[['3 * e', 8.15, 0.005]], [['1 / 2', 0.5, 0, '1/2']]],
        practice: [[['cos(0) - sin(0)', 1]], [['log(e) + 1', 2]], [['3 * exp(0)', 3]]],
      },
      al: {
        title: 'Derivatet e funksioneve eksponenciale, logaritmike dhe trigonometrike',
        objectives: ['Të njihni derivatet e eˣ, ln x, sin x dhe cos x.', 'T\'i kombinoni me rregullat e shumës dhe të prodhimit.'],
        theory: 'Derivatet bazë (këndet në radianë):\n• (eˣ)′ = eˣ; (aˣ)′ = aˣ · ln a;\n• (ln x)′ = 1/x (x > 0);\n• (sin x)′ = cos x; (cos x)′ = −sin x; (tg x)′ = 1/cos² x.\n\nMe rregullën e prodhimit: (x² · eˣ)′ = 2x · eˣ + x² · eˣ = eˣ(x² + 2x).',
        keyPoints: ['(eˣ)′ = eˣ', '(ln x)′ = 1/x', '(sin x)′ = cos x, (cos x)′ = −sin x'],
        examples: [
          { example: 'Derivoni f(x) = x² · eˣ dhe llogaritni f′(1).', solution: 'f′ = eˣ(x² + 2x); f′(1) = 3e ≈ 8,15.' },
          { example: 'Sa është pjerrësia e y = ln x në x = 2?', solution: 'y′ = 1/x → 1/2.' },
        ],
        commonMistakes: [
          { mistake: '(cos x)′ = sin x.', fix: 'Shenja minus: (cos x)′ = −sin x.' },
          { mistake: '(eˣ)′ = x · eˣ⁻¹.', fix: 'Rregulla e fuqisë nuk vlen këtu; (eˣ)′ = eˣ.' },
        ],
        practice: [
          { problem: 'Derivoni sin x + cos x dhe llogaritni në x = 0.', solution: 'cos x − sin x; vlera 1', steps: ['(sin x)′ + (cos x)′ = cos x − sin x.', 'cos 0 − sin 0 = 1.'] },
          { problem: 'Derivoni x · ln x dhe llogaritni në x = e.', solution: 'ln x + 1; vlera 2', steps: ['1 · ln x + x · 1/x = ln x + 1.', 'ln e + 1 = 2.'] },
          { problem: 'Sa është derivati i 3eˣ në x = 0?', solution: '3', steps: ['(3eˣ)′ = 3eˣ.', '3 · e⁰ = 3.'] },
        ],
      },
      en: {
        title: 'Derivatives of exponential, logarithmic and trigonometric functions',
        objectives: ['Know the derivatives of eˣ, ln x, sin x and cos x.', 'Combine them with the sum and product rules.'],
        theory: 'Basic derivatives (angles in radians):\n• (eˣ)′ = eˣ; (aˣ)′ = aˣ · ln a;\n• (ln x)′ = 1/x (x > 0);\n• (sin x)′ = cos x; (cos x)′ = −sin x; (tan x)′ = 1/cos² x.\n\nWith the product rule: (x² · eˣ)′ = 2x · eˣ + x² · eˣ = eˣ(x² + 2x).',
        keyPoints: ['(eˣ)′ = eˣ', '(ln x)′ = 1/x', '(sin x)′ = cos x, (cos x)′ = −sin x'],
        examples: [
          { example: 'Differentiate f(x) = x² · eˣ and work out f′(1).', solution: 'f′ = eˣ(x² + 2x); f′(1) = 3e ≈ 8.15.' },
          { example: 'What is the gradient of y = ln x at x = 2?', solution: 'y′ = 1/x → 1/2.' },
        ],
        commonMistakes: [
          { mistake: '(cos x)′ = sin x.', fix: 'There is a minus sign: (cos x)′ = −sin x.' },
          { mistake: '(eˣ)′ = x · eˣ⁻¹.', fix: 'The power rule does not apply here; (eˣ)′ = eˣ.' },
        ],
        practice: [
          { problem: 'Differentiate sin x + cos x and evaluate at x = 0.', solution: 'cos x − sin x; value 1', steps: ['(sin x)′ + (cos x)′ = cos x − sin x.', 'cos 0 − sin 0 = 1.'] },
          { problem: 'Differentiate x · ln x and evaluate at x = e.', solution: 'ln x + 1; value 2', steps: ['1 · ln x + x · 1/x = ln x + 1.', 'ln e + 1 = 2.'] },
          { problem: 'What is the derivative of 3eˣ at x = 0?', solution: '3', steps: ['(3eˣ)′ = 3eˣ.', '3 · e⁰ = 3.'] },
        ],
      },
      de: {
        title: 'Ableitungen von Exponential-, Logarithmus- und trigonometrischen Funktionen',
        objectives: ['Die Ableitungen von eˣ, ln x, sin x und cos x kennen.', 'Sie mit Summen- und Produktregel kombinieren.'],
        theory: 'Grundableitungen (Winkel im Bogenmaß):\n• (eˣ)′ = eˣ; (aˣ)′ = aˣ · ln a;\n• (ln x)′ = 1/x (x > 0);\n• (sin x)′ = cos x; (cos x)′ = −sin x; (tan x)′ = 1/cos² x.\n\nMit der Produktregel: (x² · eˣ)′ = 2x · eˣ + x² · eˣ = eˣ(x² + 2x).',
        keyPoints: ['(eˣ)′ = eˣ', '(ln x)′ = 1/x', '(sin x)′ = cos x, (cos x)′ = −sin x'],
        examples: [
          { example: 'Leiten Sie f(x) = x² · eˣ ab und berechnen Sie f′(1).', solution: 'f′ = eˣ(x² + 2x); f′(1) = 3e ≈ 8,15.' },
          { example: 'Welche Steigung hat y = ln x bei x = 2?', solution: 'y′ = 1/x → 1/2.' },
        ],
        commonMistakes: [
          { mistake: '(cos x)′ = sin x.', fix: 'Mit Minuszeichen: (cos x)′ = −sin x.' },
          { mistake: '(eˣ)′ = x · eˣ⁻¹.', fix: 'Die Potenzregel gilt hier nicht; (eˣ)′ = eˣ.' },
        ],
        practice: [
          { problem: 'Leiten Sie sin x + cos x ab und werten Sie bei x = 0 aus.', solution: 'cos x − sin x; Wert 1', steps: ['(sin x)′ + (cos x)′ = cos x − sin x.', 'cos 0 − sin 0 = 1.'] },
          { problem: 'Leiten Sie x · ln x ab und werten Sie bei x = e aus.', solution: 'ln x + 1; Wert 2', steps: ['1 · ln x + x · 1/x = ln x + 1.', 'ln e + 1 = 2.'] },
          { problem: 'Wie groß ist die Ableitung von 3eˣ bei x = 0?', solution: '3', steps: ['(3eˣ)′ = 3eˣ.', '3 · e⁰ = 3.'] },
        ],
      },
    },
    // ───────── 6. Chain rule
    {
      slug: 'g12-derivatives-chain-rule',
      noVisual: 'The chain rule (outer derivative times inner derivative) is applied step by step in the worked examples.',
      answers: {
        examples: [[['6*1*cos(3*1^2)', -5.94, 0.005]], [['10 * (2*0 + 1)^4', 10]]],
        practice: [[['3 * exp(0)', 3]], [['4 / sqrt(4^2 + 9)', 0.8, 0, '4/5']], [['2*1 / (1^2 + 1)', 1]]],
      },
      al: {
        title: 'Derivati i funksionit të përbërë',
        objectives: ['Të përdorni rregullën zinxhir për funksione të përbëra.', 'Të dalloni funksionin e jashtëm dhe të brendshëm.'],
        theory: 'Për f(g(x)): (f(g(x)))′ = f′(g(x)) · g′(x) – derivati i jashtëm (me të brendshmin të paprekur) herë derivati i brendshëm.\n\nsin(3x²): i jashtmi sin, i brendshmi 3x² → cos(3x²) · 6x = 6x cos(3x²).\n(2x + 1)⁵: 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴.\n\nRaste të shpeshta: (e^(kx))′ = k · e^(kx); (ln g(x))′ = g′(x)/g(x); (√g(x))′ = g′(x)/(2√g(x)).',
        keyPoints: ['(f(g(x)))′ = f′(g(x)) · g′(x)', '(e^(kx))′ = k · e^(kx)', '(ln g)′ = g′/g'],
        examples: [
          { example: 'Derivoni sin(3x²) dhe llogaritni në x = 1.', solution: '6x cos(3x²); në x = 1: 6 cos 3 ≈ −5,94.' },
          { example: 'Derivoni (2x + 1)⁵ dhe llogaritni në x = 0.', solution: '10(2x + 1)⁴; në x = 0: 10.' },
        ],
        commonMistakes: [
          { mistake: '(sin(3x²))′ = cos(3x²).', fix: 'Shumëzoni edhe me derivatin e brendshëm 6x.' },
          { mistake: '((2x + 1)⁵)′ = 5(2x + 1)⁴.', fix: 'Mungon faktori 2 nga (2x + 1)′.' },
        ],
        practice: [
          { problem: 'Derivoni e^(3x) dhe llogaritni në x = 0.', solution: '3e^(3x); vlera 3', steps: ['(e^(3x))′ = e^(3x) · 3.', 'Në x = 0: 3 · 1 = 3.'] },
          { problem: 'Derivoni √(x² + 9) dhe llogaritni në x = 4.', solution: 'x/√(x² + 9); vlera 4/5', steps: ['2x/(2√(x² + 9)) = x/√(x² + 9).', '4/√25 = 4/5.'] },
          { problem: 'Derivoni ln(x² + 1) dhe llogaritni në x = 1.', solution: '2x/(x² + 1); vlera 1', steps: ['(x² + 1)′/(x² + 1) = 2x/(x² + 1).', '2/2 = 1.'] },
        ],
      },
      en: {
        title: 'The chain rule',
        objectives: ['Use the chain rule for composite functions.', 'Identify the outer and inner functions.'],
        theory: 'For f(g(x)): (f(g(x)))′ = f′(g(x)) · g′(x) – the outer derivative (with the inside left alone) times the inner derivative.\n\nsin(3x²): outer sin, inner 3x² → cos(3x²) · 6x = 6x cos(3x²).\n(2x + 1)⁵: 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴.\n\nCommon cases: (e^(kx))′ = k · e^(kx); (ln g(x))′ = g′(x)/g(x); (√g(x))′ = g′(x)/(2√g(x)).',
        keyPoints: ['(f(g(x)))′ = f′(g(x)) · g′(x)', '(e^(kx))′ = k · e^(kx)', '(ln g)′ = g′/g'],
        examples: [
          { example: 'Differentiate sin(3x²) and evaluate at x = 1.', solution: '6x cos(3x²); at x = 1: 6 cos 3 ≈ −5.94.' },
          { example: 'Differentiate (2x + 1)⁵ and evaluate at x = 0.', solution: '10(2x + 1)⁴; at x = 0: 10.' },
        ],
        commonMistakes: [
          { mistake: '(sin(3x²))′ = cos(3x²).', fix: 'Also multiply by the inner derivative 6x.' },
          { mistake: '((2x + 1)⁵)′ = 5(2x + 1)⁴.', fix: 'The factor 2 from (2x + 1)′ is missing.' },
        ],
        practice: [
          { problem: 'Differentiate e^(3x) and evaluate at x = 0.', solution: '3e^(3x); value 3', steps: ['(e^(3x))′ = e^(3x) · 3.', 'At x = 0: 3 · 1 = 3.'] },
          { problem: 'Differentiate √(x² + 9) and evaluate at x = 4.', solution: 'x/√(x² + 9); value 4/5', steps: ['2x/(2√(x² + 9)) = x/√(x² + 9).', '4/√25 = 4/5.'] },
          { problem: 'Differentiate ln(x² + 1) and evaluate at x = 1.', solution: '2x/(x² + 1); value 1', steps: ['(x² + 1)′/(x² + 1) = 2x/(x² + 1).', '2/2 = 1.'] },
        ],
      },
      de: {
        title: 'Die Kettenregel',
        objectives: ['Die Kettenregel für verkettete Funktionen anwenden.', 'Äußere und innere Funktion erkennen.'],
        theory: 'Für f(g(x)): (f(g(x)))′ = f′(g(x)) · g′(x) – äußere Ableitung (innen unverändert) mal innere Ableitung.\n\nsin(3x²): außen sin, innen 3x² → cos(3x²) · 6x = 6x cos(3x²).\n(2x + 1)⁵: 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴.\n\nHäufige Fälle: (e^(kx))′ = k · e^(kx); (ln g(x))′ = g′(x)/g(x); (√g(x))′ = g′(x)/(2√g(x)).',
        keyPoints: ['(f(g(x)))′ = f′(g(x)) · g′(x)', '(e^(kx))′ = k · e^(kx)', '(ln g)′ = g′/g'],
        examples: [
          { example: 'Leiten Sie sin(3x²) ab und werten Sie bei x = 1 aus.', solution: '6x cos(3x²); bei x = 1: 6 cos 3 ≈ −5,94.' },
          { example: 'Leiten Sie (2x + 1)⁵ ab und werten Sie bei x = 0 aus.', solution: '10(2x + 1)⁴; bei x = 0: 10.' },
        ],
        commonMistakes: [
          { mistake: '(sin(3x²))′ = cos(3x²).', fix: 'Auch mit der inneren Ableitung 6x multiplizieren.' },
          { mistake: '((2x + 1)⁵)′ = 5(2x + 1)⁴.', fix: 'Der Faktor 2 aus (2x + 1)′ fehlt.' },
        ],
        practice: [
          { problem: 'Leiten Sie e^(3x) ab und werten Sie bei x = 0 aus.', solution: '3e^(3x); Wert 3', steps: ['(e^(3x))′ = e^(3x) · 3.', 'Bei x = 0: 3 · 1 = 3.'] },
          { problem: 'Leiten Sie √(x² + 9) ab und werten Sie bei x = 4 aus.', solution: 'x/√(x² + 9); Wert 4/5', steps: ['2x/(2√(x² + 9)) = x/√(x² + 9).', '4/√25 = 4/5.'] },
          { problem: 'Leiten Sie ln(x² + 1) ab und werten Sie bei x = 1 aus.', solution: '2x/(x² + 1); Wert 1', steps: ['(x² + 1)′/(x² + 1) = 2x/(x² + 1).', '2/2 = 1.'] },
        ],
      },
    },
  ],
};
