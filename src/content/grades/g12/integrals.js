// Grade 12 · Theme 12: Integrals
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g12-integrals',
  i18n: {
    al: { title: 'Integralet', description: 'Integrali i pacaktuar, metoda e zëvendësimit dhe me pjesë, integrali i caktuar, syprinat dhe vëllimet e trupave të rrotullimit.' },
    en: { title: 'Integrals', description: 'Indefinite integrals, substitution and integration by parts, definite integrals, areas and volumes of solids of revolution.' },
    de: { title: 'Integralrechnung', description: 'Unbestimmtes Integral, Substitution und partielle Integration, bestimmtes Integral, Flächen und Volumen von Rotationskörpern.' },
  },
  lessons: [
    // ───────── 1. Indefinite integral
    {
      slug: 'g12-integrals-indefinite',
      visuals: [{
        type: 'functionPlot', view: { xMin: -2.5, xMax: 2.5, yMin: -2, yMax: 6 }, height: 210,
        functions: [
          { expr: 'x^2 - 1', color: 'muted', dashed: true, label: 'C = −1' },
          { expr: 'x^2', label: 'C = 0' },
          { expr: 'x^2 + 2', color: 'secondary', dashed: true, label: 'C = 2' },
        ],
        caption: alt('Të gjitha x² + C janë primitive të 2x: grafikët ndryshojnë vetëm me zhvendosje vertikale.', 'Every x² + C is an antiderivative of 2x: the graphs differ only by a vertical shift.', 'Alle x² + C sind Stammfunktionen von 2x: Die Graphen unterscheiden sich nur durch eine Verschiebung nach oben oder unten.'),
        alt: alt('Tri parabola y = x² − 1, y = x², y = x² + 2.', 'Three parabolas y = x² − 1, y = x², y = x² + 2.', 'Drei Parabeln y = x² − 1, y = x², y = x² + 2.'),
      }],
      answers: {
        examples: ['text', [['2^2 + 2 + 3', 9]]],
        practice: ['text', 'text', [['2*2^3 - 2', 14]]],
      },
      al: {
        title: 'Integrali i pacaktuar',
        objectives: ['Të gjeni primitivet e funksioneve bazë me tabelën e integraleve.', 'Të përcaktoni konstanten C nga një kusht fillestar.'],
        theory: 'F është primitivë e f kur F′(x) = f(x). Integrali i pacaktuar është bashkësia e të gjitha primitiveve: ∫f(x) dx = F(x) + C.\n\nTabela bazë:\n• ∫xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1); ∫1/x dx = ln|x| + C;\n• ∫eˣ dx = eˣ + C; ∫sin x dx = −cos x + C; ∫cos x dx = sin x + C.\nIntegrali i shumës është shuma e integraleve, konstantja del jashtë.\n\n∫(3x² + 2x) dx = x³ + x² + C. Kontroll: (x³ + x²)′ = 3x² + 2x.',
        keyPoints: ['∫xⁿ dx = xⁿ⁺¹/(n + 1) + C', 'Mos harroni + C', 'Kontroll: derivoni rezultatin'],
        examples: [
          { example: 'Gjeni ∫(3x² + 2x) dx.', solution: 'x³ + x² + C.' },
          { example: 'Gjeni F me F′(x) = 2x + 1 dhe F(0) = 3, pastaj F(2).', solution: 'F = x² + x + C, F(0) = C = 3; F(2) = 4 + 2 + 3 = 9.' },
        ],
        commonMistakes: [
          { mistake: '∫x² dx = 2x.', fix: 'Kjo është derivati; integrali rrit fuqinë: x³/3 + C.' },
          { mistake: 'Harrohet konstantja C.', fix: 'Integrali i pacaktuar ka gjithmonë + C.' },
        ],
        practice: [
          { problem: 'Gjeni ∫4x³ dx.', solution: 'x⁴ + C', steps: ['4 · x⁴/4.', '= x⁴ + C.'] },
          { problem: 'Gjeni ∫(eˣ + cos x) dx.', solution: 'eˣ + sin x + C', steps: ['∫eˣ dx = eˣ, ∫cos x dx = sin x.', 'eˣ + sin x + C.'] },
          { problem: 'F′(x) = 6x² dhe F(1) = 0. Sa është F(2)?', solution: '14', steps: ['F = 2x³ + C, F(1) = 2 + C = 0 → C = −2.', 'F(2) = 16 − 2 = 14.'] },
        ],
      },
      en: {
        title: 'The indefinite integral',
        objectives: ['Find antiderivatives of basic functions using the table of integrals.', 'Fix the constant C from an initial condition.'],
        theory: 'F is an antiderivative of f when F′(x) = f(x). The indefinite integral is the set of all antiderivatives: ∫f(x) dx = F(x) + C.\n\nBasic table:\n• ∫xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1); ∫1/x dx = ln|x| + C;\n• ∫eˣ dx = eˣ + C; ∫sin x dx = −cos x + C; ∫cos x dx = sin x + C.\nThe integral of a sum is the sum of the integrals; constants come outside.\n\n∫(3x² + 2x) dx = x³ + x² + C. Check: (x³ + x²)′ = 3x² + 2x.',
        keyPoints: ['∫xⁿ dx = xⁿ⁺¹/(n + 1) + C', 'Do not forget + C', 'Check: differentiate the answer'],
        examples: [
          { example: 'Find ∫(3x² + 2x) dx.', solution: 'x³ + x² + C.' },
          { example: 'Find F with F′(x) = 2x + 1 and F(0) = 3, then F(2).', solution: 'F = x² + x + C, F(0) = C = 3; F(2) = 4 + 2 + 3 = 9.' },
        ],
        commonMistakes: [
          { mistake: '∫x² dx = 2x.', fix: 'That is the derivative; integrating raises the power: x³/3 + C.' },
          { mistake: 'The constant C is forgotten.', fix: 'An indefinite integral always has + C.' },
        ],
        practice: [
          { problem: 'Find ∫4x³ dx.', solution: 'x⁴ + C', steps: ['4 · x⁴/4.', '= x⁴ + C.'] },
          { problem: 'Find ∫(eˣ + cos x) dx.', solution: 'eˣ + sin x + C', steps: ['∫eˣ dx = eˣ, ∫cos x dx = sin x.', 'eˣ + sin x + C.'] },
          { problem: 'F′(x) = 6x² and F(1) = 0. What is F(2)?', solution: '14', steps: ['F = 2x³ + C, F(1) = 2 + C = 0 → C = −2.', 'F(2) = 16 − 2 = 14.'] },
        ],
      },
      de: {
        title: 'Das unbestimmte Integral',
        objectives: ['Stammfunktionen von Grundfunktionen mit der Integraltabelle bestimmen.', 'Die Konstante C aus einer Anfangsbedingung bestimmen.'],
        theory: 'F ist eine Stammfunktion von f, wenn F′(x) = f(x). Das unbestimmte Integral ist die Menge aller Stammfunktionen: ∫f(x) dx = F(x) + C.\n\nGrundtabelle:\n• ∫xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1); ∫1/x dx = ln|x| + C;\n• ∫eˣ dx = eˣ + C; ∫sin x dx = −cos x + C; ∫cos x dx = sin x + C.\nDas Integral einer Summe ist die Summe der Integrale; Faktoren dürfen vor das Integral.\n\n∫(3x² + 2x) dx = x³ + x² + C. Probe: (x³ + x²)′ = 3x² + 2x.',
        keyPoints: ['∫xⁿ dx = xⁿ⁺¹/(n + 1) + C', '+ C nicht vergessen', 'Probe: Ergebnis ableiten'],
        examples: [
          { example: 'Bestimmen Sie ∫(3x² + 2x) dx.', solution: 'x³ + x² + C.' },
          { example: 'Bestimmen Sie F mit F′(x) = 2x + 1 und F(0) = 3, dann F(2).', solution: 'F = x² + x + C, F(0) = C = 3; F(2) = 4 + 2 + 3 = 9.' },
        ],
        commonMistakes: [
          { mistake: '∫x² dx = 2x.', fix: 'Das ist die Ableitung; beim Integrieren steigt der Exponent: x³/3 + C.' },
          { mistake: 'Die Konstante C wird vergessen.', fix: 'Ein unbestimmtes Integral hat immer + C.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie ∫4x³ dx.', solution: 'x⁴ + C', steps: ['4 · x⁴/4.', '= x⁴ + C.'] },
          { problem: 'Bestimmen Sie ∫(eˣ + cos x) dx.', solution: 'eˣ + sin x + C', steps: ['∫eˣ dx = eˣ, ∫cos x dx = sin x.', 'eˣ + sin x + C.'] },
          { problem: 'F′(x) = 6x² und F(1) = 0. Wie groß ist F(2)?', solution: '14', steps: ['F = 2x³ + C, F(1) = 2 + C = 0 → C = −2.', 'F(2) = 16 − 2 = 14.'] },
        ],
      },
    },
    // ───────── 2. Substitution and parts
    {
      slug: 'g12-integrals-substitution-parts',
      noVisual: 'Substitution and integration by parts are worked step by step in the examples.',
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', [['(2^4 - 1^4) / 4', 3.75, 0, '15/4']]],
      },
      al: {
        title: 'Metoda e zëvendësimit dhe me pjesë',
        objectives: ['Të integroni me zëvendësim kur shfaqet derivati i funksionit të brendshëm.', 'Të përdorni integrimin me pjesë për prodhime si x · cos x, x · eˣ.'],
        theory: 'Zëvendësimi: nëse integrali ka formën ∫f(g(x)) · g′(x) dx, vendosim t = g(x), dt = g′(x) dx:\n∫2x(x² + 1)³ dx, t = x² + 1, dt = 2x dx → ∫t³ dt = t⁴/4 + C = (x² + 1)⁴/4 + C.\n\nMe pjesë: ∫u dv = u · v − ∫v du. Zgjedhim u që thjeshtohet kur derivohet (p.sh. x):\n∫x cos x dx: u = x, dv = cos x dx → v = sin x; = x sin x − ∫sin x dx = x sin x + cos x + C.',
        keyPoints: ['t = g(x), dt = g′(x) dx', '∫u dv = uv − ∫v du', 'u = x te x · eˣ, x · cos x'],
        examples: [
          { example: 'Gjeni ∫2x(x² + 1)³ dx.', solution: 't = x² + 1, dt = 2x dx: ∫t³ dt = (x² + 1)⁴/4 + C.' },
          { example: 'Gjeni ∫x cos x dx.', solution: 'u = x, v = sin x: x sin x − ∫sin x dx = x sin x + cos x + C.' },
        ],
        commonMistakes: [
          { mistake: 'Te zëvendësimi harrohet të ndërrohet dx me dt.', fix: 'Shkruani gjithmonë dt = g′(x) dx dhe zëvendësoni gjithçka.' },
          { mistake: '∫x cos x dx = x sin x + C.', fix: 'Mungon pjesa − ∫v du = + cos x.' },
        ],
        practice: [
          { problem: 'Gjeni ∫e^(3x) dx.', solution: 'e^(3x)/3 + C', steps: ['t = 3x, dt = 3 dx → dx = dt/3.', '∫eᵗ dt/3 = e^(3x)/3 + C.'] },
          { problem: 'Gjeni ∫x eˣ dx.', solution: '(x − 1)eˣ + C', steps: ['u = x, dv = eˣ dx → v = eˣ.', 'x eˣ − ∫eˣ dx = (x − 1)eˣ + C.'] },
          { problem: 'Llogaritni ∫ nga 0 te 1 të 2x(x² + 1)³ dx.', solution: '15/4', steps: ['Primitiva (x² + 1)⁴/4.', '(2⁴ − 1⁴)/4 = 15/4.'] },
        ],
      },
      en: {
        title: 'Substitution and integration by parts',
        objectives: ['Integrate by substitution when the derivative of the inner function appears.', 'Use integration by parts for products such as x · cos x, x · eˣ.'],
        theory: 'Substitution: if the integral has the form ∫f(g(x)) · g′(x) dx, put t = g(x), dt = g′(x) dx:\n∫2x(x² + 1)³ dx, t = x² + 1, dt = 2x dx → ∫t³ dt = t⁴/4 + C = (x² + 1)⁴/4 + C.\n\nBy parts: ∫u dv = u · v − ∫v du. Choose u to be something that simplifies when differentiated (e.g. x):\n∫x cos x dx: u = x, dv = cos x dx → v = sin x; = x sin x − ∫sin x dx = x sin x + cos x + C.',
        keyPoints: ['t = g(x), dt = g′(x) dx', '∫u dv = uv − ∫v du', 'u = x for x · eˣ, x · cos x'],
        examples: [
          { example: 'Find ∫2x(x² + 1)³ dx.', solution: 't = x² + 1, dt = 2x dx: ∫t³ dt = (x² + 1)⁴/4 + C.' },
          { example: 'Find ∫x cos x dx.', solution: 'u = x, v = sin x: x sin x − ∫sin x dx = x sin x + cos x + C.' },
        ],
        commonMistakes: [
          { mistake: 'In substitution dx is not replaced by dt.', fix: 'Always write dt = g′(x) dx and replace everything.' },
          { mistake: '∫x cos x dx = x sin x + C.', fix: 'The part − ∫v du = + cos x is missing.' },
        ],
        practice: [
          { problem: 'Find ∫e^(3x) dx.', solution: 'e^(3x)/3 + C', steps: ['t = 3x, dt = 3 dx → dx = dt/3.', '∫eᵗ dt/3 = e^(3x)/3 + C.'] },
          { problem: 'Find ∫x eˣ dx.', solution: '(x − 1)eˣ + C', steps: ['u = x, dv = eˣ dx → v = eˣ.', 'x eˣ − ∫eˣ dx = (x − 1)eˣ + C.'] },
          { problem: 'Work out ∫ from 0 to 1 of 2x(x² + 1)³ dx.', solution: '15/4', steps: ['Antiderivative (x² + 1)⁴/4.', '(2⁴ − 1⁴)/4 = 15/4.'] },
        ],
      },
      de: {
        title: 'Substitution und partielle Integration',
        objectives: ['Mit Substitution integrieren, wenn die Ableitung der inneren Funktion auftritt.', 'Partielle Integration für Produkte wie x · cos x, x · eˣ anwenden.'],
        theory: 'Substitution: Hat das Integral die Form ∫f(g(x)) · g′(x) dx, setzt man t = g(x), dt = g′(x) dx:\n∫2x(x² + 1)³ dx, t = x² + 1, dt = 2x dx → ∫t³ dt = t⁴/4 + C = (x² + 1)⁴/4 + C.\n\nPartielle Integration: ∫u dv = u · v − ∫v du. Für u wählt man einen Faktor, der beim Ableiten einfacher wird (z. B. x):\n∫x cos x dx: u = x, dv = cos x dx → v = sin x; = x sin x − ∫sin x dx = x sin x + cos x + C.',
        keyPoints: ['t = g(x), dt = g′(x) dx', '∫u dv = uv − ∫v du', 'u = x bei x · eˣ, x · cos x'],
        examples: [
          { example: 'Bestimmen Sie ∫2x(x² + 1)³ dx.', solution: 't = x² + 1, dt = 2x dx: ∫t³ dt = (x² + 1)⁴/4 + C.' },
          { example: 'Bestimmen Sie ∫x cos x dx.', solution: 'u = x, v = sin x: x sin x − ∫sin x dx = x sin x + cos x + C.' },
        ],
        commonMistakes: [
          { mistake: 'Bei der Substitution wird dx nicht durch dt ersetzt.', fix: 'Immer dt = g′(x) dx aufschreiben und alles ersetzen.' },
          { mistake: '∫x cos x dx = x sin x + C.', fix: 'Der Teil − ∫v du = + cos x fehlt.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie ∫e^(3x) dx.', solution: 'e^(3x)/3 + C', steps: ['t = 3x, dt = 3 dx → dx = dt/3.', '∫eᵗ dt/3 = e^(3x)/3 + C.'] },
          { problem: 'Bestimmen Sie ∫x eˣ dx.', solution: '(x − 1)eˣ + C', steps: ['u = x, dv = eˣ dx → v = eˣ.', 'x eˣ − ∫eˣ dx = (x − 1)eˣ + C.'] },
          { problem: 'Berechnen Sie das Integral von 0 bis 1 von 2x(x² + 1)³ dx.', solution: '15/4', steps: ['Stammfunktion (x² + 1)⁴/4.', '(2⁴ − 1⁴)/4 = 15/4.'] },
        ],
      },
    },
    // ───────── 3. Definite integral
    {
      slug: 'g12-integrals-definite',
      practiceVisuals: {
        0: {
        type: 'functionPlot', view: { xMin: -0.3, xMax: 6.5, yMin: -1.3, yMax: 1.3 },
        functions: [{ expr: 'sin(x)', label: 'y = sin x' }],
        shade: { expr: 'sin(x)', from: 0, to: 'b' },
        sliders: [{ name: 'b', min: 0.2, max: 6.28, step: 0.2, value: 3.14 }],
        readouts: [{ text: { al: '∫₀ᵇ sin x dx = 1 − cos b = {1 - cos(b)}', en: '∫₀ᵇ sin x dx = 1 − cos b = {1 - cos(b)}', de: '∫₀ᵇ sin x dx = 1 − cos b = {1 - cos(b)}' } }],
        alt: { al: 'Grafiku me syprinën e ngjyrosur deri te kufiri b që ndryshon me rrëshqitës.', en: 'The graph with the area shaded up to the limit b, which moves with a slider.', de: 'Der Graph mit der Fläche bis zur Grenze b, die mit einem Schieberegler verschoben wird.' },
      },
        2: {
        type: 'functionPlot', view: { xMin: -2.2, xMax: 2.2, yMin: -8, yMax: 8 },
        functions: [{ expr: 'x^3', label: 'y = x³' }],
        shade: { expr: 'x^3', from: '-b', to: 'b' },
        sliders: [{ name: 'b', min: 0.5, max: 2, step: 0.5, value: 1 }],
        readouts: [{ text: { al: 'Integrali nga −b te b = 0, por syprina = b⁴/2 = {b^4/2}', en: 'The integral from −b to b = 0, but the area = b⁴/2 = {b^4/2}', de: 'Das Integral von −b bis b = 0, die Fläche aber = b⁴/2 = {b^4/2}' } }],
        alt: { al: 'Grafiku me syprinën e ngjyrosur deri te kufiri b që ndryshon me rrëshqitës.', en: 'The graph with the area shaded up to the limit b, which moves with a slider.', de: 'Der Graph mit der Fläche bis zur Grenze b, die mit einem Schieberegler verschoben wird.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -0.5, xMax: 3.5, yMin: -1, yMax: 10 }, height: 210,
        functions: [{ expr: 'x^2', label: 'y = x²' }],
        points: [{ at: [0, 0], label: '0' }, { at: [3, 9], label: '(3, 9)' }],
        caption: alt('∫ nga 0 te 3 të x² dx = [x³/3] = 27/3 − 0 = 9: syprina nën parabolë nga 0 te 3.', '∫ from 0 to 3 of x² dx = [x³/3] = 27/3 − 0 = 9: the area under the parabola from 0 to 3.', '∫ von 0 bis 3 von x² dx = [x³/3] = 27/3 − 0 = 9: die Fläche unter der Parabel von 0 bis 3.'),
        alt: alt('Parabola y = x² nga x = 0 deri x = 3.', 'The parabola y = x² from x = 0 to x = 3.', 'Die Parabel y = x² von x = 0 bis x = 3.'),
      }],
      answers: {
        examples: [[['3^3 / 3', 9]], [['(4 + 6) - (1 + 3)', 6]]],
        practice: [[['-cos(pi) + cos(0)', 2]], [['log(e) - log(1)', 1]], [['1/4 - 1/4', 0]]],
      },
      al: {
        title: 'Integrali i caktuar',
        objectives: ['Të llogaritni integralin e caktuar me formulën e Njuton-Lajbnicit.', 'Të njihni vetitë kryesore të integralit të caktuar.'],
        theory: 'Formula e Njuton-Lajbnicit: ∫ₐᵇ f(x) dx = F(b) − F(a), ku F është një primitivë e f (C thjeshtohet).\n\n∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9.\n\nVeti: ∫ₐᵃ f dx = 0; ∫ₐᵇ = −∫ᵦᵃ; ∫ₐᵇ + ∫ᵦᶜ = ∫ₐᶜ. Për f ≥ 0 integrali është syprina nën grafik; ku f < 0 kontributi është negativ (p.sh. ∫₋₁¹ x³ dx = 0).',
        keyPoints: ['∫ₐᵇ f dx = F(b) − F(a)', 'Nuk duhet + C', 'f < 0 jep kontribut negativ'],
        examples: [
          { example: 'Llogaritni ∫ nga 0 te 3 të x² dx.', solution: '[x³/3] = 27/3 − 0 = 9.' },
          { example: 'Llogaritni ∫ nga 1 te 2 të (2x + 3) dx.', solution: '[x² + 3x] = (4 + 6) − (1 + 3) = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Llogaritet vetëm F(b), pa zbritur F(a).', fix: 'Gjithmonë F(b) − F(a).' },
        ],
        practice: [
          { problem: 'Llogaritni ∫ nga 0 te π të sin x dx.', solution: '2', steps: ['[−cos x] = −cos π + cos 0.', '= 1 + 1 = 2.'] },
          { problem: 'Llogaritni ∫ nga 1 te e të 1/x dx.', solution: '1', steps: ['[ln x] = ln e − ln 1.', '= 1 − 0 = 1.'] },
          { problem: 'Llogaritni ∫ nga −1 te 1 të x³ dx.', solution: '0', steps: ['[x⁴/4] = 1/4 − 1/4.', '= 0 (pjesët pozitive dhe negative anulohen).'] },
        ],
      },
      en: {
        title: 'The definite integral',
        objectives: ['Work out definite integrals with the fundamental theorem of calculus.', 'Know the main properties of the definite integral.'],
        theory: 'Fundamental theorem (Newton–Leibniz): ∫ₐᵇ f(x) dx = F(b) − F(a), where F is any antiderivative of f (C cancels).\n\n∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9.\n\nProperties: ∫ₐᵃ f dx = 0; ∫ₐᵇ = −∫ᵦᵃ; ∫ₐᵇ + ∫ᵦᶜ = ∫ₐᶜ. For f ≥ 0 the integral is the area under the graph; where f < 0 the contribution is negative (e.g. ∫₋₁¹ x³ dx = 0).',
        keyPoints: ['∫ₐᵇ f dx = F(b) − F(a)', 'No + C needed', 'f < 0 gives a negative contribution'],
        examples: [
          { example: 'Work out ∫ from 0 to 3 of x² dx.', solution: '[x³/3] = 27/3 − 0 = 9.' },
          { example: 'Work out ∫ from 1 to 2 of (2x + 3) dx.', solution: '[x² + 3x] = (4 + 6) − (1 + 3) = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Only F(b) is worked out, without subtracting F(a).', fix: 'Always F(b) − F(a).' },
        ],
        practice: [
          { problem: 'Work out ∫ from 0 to π of sin x dx.', solution: '2', steps: ['[−cos x] = −cos π + cos 0.', '= 1 + 1 = 2.'] },
          { problem: 'Work out ∫ from 1 to e of 1/x dx.', solution: '1', steps: ['[ln x] = ln e − ln 1.', '= 1 − 0 = 1.'] },
          { problem: 'Work out ∫ from −1 to 1 of x³ dx.', solution: '0', steps: ['[x⁴/4] = 1/4 − 1/4.', '= 0 (the positive and negative parts cancel).'] },
        ],
      },
      de: {
        title: 'Das bestimmte Integral',
        objectives: ['Bestimmte Integrale mit dem Hauptsatz der Differential- und Integralrechnung berechnen.', 'Die wichtigsten Eigenschaften des bestimmten Integrals kennen.'],
        theory: 'Hauptsatz: ∫ₐᵇ f(x) dx = F(b) − F(a), wobei F eine Stammfunktion von f ist (C fällt weg).\n\n∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9.\n\nEigenschaften: ∫ₐᵃ f dx = 0; ∫ₐᵇ = −∫ᵦᵃ; ∫ₐᵇ + ∫ᵦᶜ = ∫ₐᶜ. Für f ≥ 0 ist das Integral die Fläche unter dem Graphen; wo f < 0 ist, zählt der Anteil negativ (z. B. ∫₋₁¹ x³ dx = 0).',
        keyPoints: ['∫ₐᵇ f dx = F(b) − F(a)', 'Kein + C nötig', 'f < 0 zählt negativ'],
        examples: [
          { example: 'Berechnen Sie das Integral von 0 bis 3 von x² dx.', solution: '[x³/3] = 27/3 − 0 = 9.' },
          { example: 'Berechnen Sie das Integral von 1 bis 2 von (2x + 3) dx.', solution: '[x² + 3x] = (4 + 6) − (1 + 3) = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Es wird nur F(b) berechnet, ohne F(a) abzuziehen.', fix: 'Immer F(b) − F(a).' },
        ],
        practice: [
          { problem: 'Berechnen Sie das Integral von 0 bis π von sin x dx.', solution: '2', steps: ['[−cos x] = −cos π + cos 0.', '= 1 + 1 = 2.'] },
          { problem: 'Berechnen Sie das Integral von 1 bis e von 1/x dx.', solution: '1', steps: ['[ln x] = ln e − ln 1.', '= 1 − 0 = 1.'] },
          { problem: 'Berechnen Sie das Integral von −1 bis 1 von x³ dx.', solution: '0', steps: ['[x⁴/4] = 1/4 − 1/4.', '= 0 (positive und negative Anteile heben sich auf).'] },
        ],
      },
    },
    // ───────── 4. Areas
    {
      slug: 'g12-integrals-areas',
      practiceVisuals: {
        0: {
        type: 'functionPlot', view: { xMin: -0.5, xMax: 6.5, yMin: -0.5, yMax: 3 },
        functions: [{ expr: 'sqrt(x)', label: 'y = √x' }],
        shade: { expr: 'sqrt(x)', from: 0, to: 'b' },
        sliders: [{ name: 'b', min: 0.5, max: 6, step: 0.5, value: 4 }],
        readouts: [{ text: { al: '∫₀ᵇ √x dx = 2/3 · b^(3/2) = {2/3*b^1.5}', en: '∫₀ᵇ √x dx = 2/3 · b^(3/2) = {2/3*b^1.5}', de: '∫₀ᵇ √x dx = 2/3 · b^(3/2) = {2/3*b^1.5}' } }],
        alt: { al: 'Grafiku me syprinën e ngjyrosur deri te kufiri b që ndryshon me rrëshqitës.', en: 'The graph with the area shaded up to the limit b, which moves with a slider.', de: 'Der Graph mit der Fläche bis zur Grenze b, die mit einem Schieberegler verschoben wird.' },
      },
        1: {
        type: 'functionPlot', view: { xMin: -0.2, xMax: 1.4, yMin: -0.2, yMax: 1.4 },
        functions: [{ expr: 'x', label: 'y = x' }, { expr: 'x^2', color: 'secondary' }],
        shade: { expr: 'x', from: 0, to: 'b', lower: 'x^2' },
        sliders: [{ name: 'b', min: 0.25, max: 1, step: 0.25, value: 1 }],
        readouts: [{ text: { al: 'Syprina midis y = x dhe y = x² nga 0 te b: b²/2 − b³/3 = {b^2/2 - b^3/3} (për b = 1: 1/6)', en: 'Area between y = x and y = x² from 0 to b: b²/2 − b³/3 = {b^2/2 - b^3/3} (for b = 1: 1/6)', de: 'Fläche zwischen y = x und y = x² von 0 bis b: b²/2 − b³/3 = {b^2/2 - b^3/3} (für b = 1: 1/6)' } }],
        alt: { al: 'Grafiku me syprinën e ngjyrosur deri te kufiri b që ndryshon me rrëshqitës.', en: 'The graph with the area shaded up to the limit b, which moves with a slider.', de: 'Der Graph mit der Fläche bis zur Grenze b, die mit einem Schieberegler verschoben wird.' },
      },
      },
      visuals: [{
        type: 'functionPlot', view: { xMin: -0.5, xMax: 2.8, yMin: -0.5, yMax: 5 }, height: 210,
        functions: [{ expr: 'x^2', label: 'y = x²' }, { expr: '2*x', color: 'secondary', label: 'y = 2x' }],
        points: [{ at: [0, 0], label: '(0, 0)' }, { at: [2, 4], label: '(2, 4)' }],
        caption: alt('Midis x = 0 dhe x = 2 drejtëza është sipër parabolës: S = ∫(2x − x²) dx = 4/3.', 'Between x = 0 and x = 2 the line is above the parabola: A = ∫(2x − x²) dx = 4/3.', 'Zwischen x = 0 und x = 2 liegt die Gerade über der Parabel: A = ∫(2x − x²) dx = 4/3.'),
        alt: alt('Parabola y = x² dhe drejtëza y = 2x që priten në (0, 0) dhe (2, 4).', 'The parabola y = x² and the line y = 2x meeting at (0, 0) and (2, 4).', 'Die Parabel y = x² und die Gerade y = 2x mit Schnittpunkten (0 | 0) und (2 | 4).'),
      }],
      answers: {
        examples: [[['4 - 8/3', '4/3', 1e-9, '4/3']], [['abs((8/3 - 8) - (-8/3 + 8))', '32/3', 1e-9, '32/3']]],
        practice: [[['2/3 * 4^(3/2)', '16/3', 1e-9, '16/3']], [['1/2 - 1/3', '1/6', 1e-9, '1/6']], [['-cos(pi) + cos(0)', 2]]],
      },
      al: {
        title: 'Syprinat',
        objectives: ['Të llogaritni syprinën midis grafikut dhe boshtit x.', 'Të llogaritni syprinën midis dy grafikëve.'],
        theory: 'Syprina midis grafikut të f dhe boshtit x në [a, b] është ∫ₐᵇ |f(x)| dx: pjesët nën bosht merren me vlerë absolute.\n\nSyprina midis dy grafikëve: S = ∫ₐᵇ (f_sipër − f_poshtë) dx, ku a dhe b janë pikat e prerjes.\ny = 2x dhe y = x²: x² = 2x → x = 0, x = 2; S = ∫₀² (2x − x²) dx = [x² − x³/3]₀² = 4 − 8/3 = 4/3.',
        keyPoints: ['S = ∫|f| dx', 'Midis grafikëve: ∫(sipër − poshtë) dx', 'Kufijtë: pikat e prerjes'],
        examples: [
          { example: 'Gjeni syprinën midis y = x² dhe y = 2x.', solution: 'Prerjet x = 0, 2; ∫₀²(2x − x²) dx = 4 − 8/3 = 4/3.' },
          { example: 'Gjeni syprinën midis y = x² − 4 dhe boshtit x.', solution: 'Prerjet ±2, funksioni nën bosht: |[x³/3 − 4x]₋₂²| = |−16/3 − 16/3| = 32/3.' },
        ],
        commonMistakes: [
          { mistake: 'Syprina del negative kur grafiku është nën boshtin x.', fix: 'Merrni vlerën absolute; syprina është gjithmonë pozitive.' },
        ],
        practice: [
          { problem: 'Gjeni syprinën nën y = √x nga x = 0 te x = 4.', solution: '16/3', steps: ['∫√x dx = 2/3 · x^(3/2).', '2/3 · 8 = 16/3.'] },
          { problem: 'Gjeni syprinën midis y = x dhe y = x².', solution: '1/6', steps: ['Prerjet 0 dhe 1; ∫₀¹ (x − x²) dx.', '1/2 − 1/3 = 1/6.'] },
          { problem: 'Gjeni syprinën nën y = sin x nga 0 te π.', solution: '2', steps: ['[−cos x]₀^π.', '1 + 1 = 2.'] },
        ],
      },
      en: {
        title: 'Areas',
        objectives: ['Work out the area between a graph and the x-axis.', 'Work out the area between two graphs.'],
        theory: 'The area between the graph of f and the x-axis on [a, b] is ∫ₐᵇ |f(x)| dx: parts below the axis are taken as positive.\n\nArea between two graphs: A = ∫ₐᵇ (f_upper − f_lower) dx, where a and b are the points of intersection.\ny = 2x and y = x²: x² = 2x → x = 0, x = 2; A = ∫₀² (2x − x²) dx = [x² − x³/3]₀² = 4 − 8/3 = 4/3.',
        keyPoints: ['A = ∫|f| dx', 'Between graphs: ∫(upper − lower) dx', 'Limits: the intersection points'],
        examples: [
          { example: 'Find the area between y = x² and y = 2x.', solution: 'Intersections x = 0, 2; ∫₀²(2x − x²) dx = 4 − 8/3 = 4/3.' },
          { example: 'Find the area between y = x² − 4 and the x-axis.', solution: 'Intersections ±2, function below the axis: |[x³/3 − 4x]₋₂²| = |−16/3 − 16/3| = 32/3.' },
        ],
        commonMistakes: [
          { mistake: 'The area comes out negative when the graph is below the x-axis.', fix: 'Take the absolute value; an area is always positive.' },
        ],
        practice: [
          { problem: 'Find the area under y = √x from x = 0 to x = 4.', solution: '16/3', steps: ['∫√x dx = 2/3 · x^(3/2).', '2/3 · 8 = 16/3.'] },
          { problem: 'Find the area between y = x and y = x².', solution: '1/6', steps: ['Intersections 0 and 1; ∫₀¹ (x − x²) dx.', '1/2 − 1/3 = 1/6.'] },
          { problem: 'Find the area under y = sin x from 0 to π.', solution: '2', steps: ['[−cos x]₀^π.', '1 + 1 = 2.'] },
        ],
      },
      de: {
        title: 'Flächenberechnung',
        objectives: ['Die Fläche zwischen Graph und x-Achse berechnen.', 'Die Fläche zwischen zwei Graphen berechnen.'],
        theory: 'Die Fläche zwischen dem Graphen von f und der x-Achse auf [a, b] ist ∫ₐᵇ |f(x)| dx: Teile unter der Achse zählen positiv.\n\nFläche zwischen zwei Graphen: A = ∫ₐᵇ (f_oben − f_unten) dx, wobei a und b die Schnittstellen sind.\ny = 2x und y = x²: x² = 2x → x = 0, x = 2; A = ∫₀² (2x − x²) dx = [x² − x³/3]₀² = 4 − 8/3 = 4/3.',
        keyPoints: ['A = ∫|f| dx', 'Zwischen Graphen: ∫(oben − unten) dx', 'Grenzen: Schnittstellen'],
        examples: [
          { example: 'Bestimmen Sie die Fläche zwischen y = x² und y = 2x.', solution: 'Schnittstellen x = 0, 2; ∫₀²(2x − x²) dx = 4 − 8/3 = 4/3.' },
          { example: 'Bestimmen Sie die Fläche zwischen y = x² − 4 und der x-Achse.', solution: 'Schnittstellen ±2, Funktion unter der Achse: |[x³/3 − 4x]₋₂²| = |−16/3 − 16/3| = 32/3.' },
        ],
        commonMistakes: [
          { mistake: 'Die Fläche wird negativ, wenn der Graph unter der x-Achse liegt.', fix: 'Den Betrag nehmen; eine Fläche ist immer positiv.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Fläche unter y = √x von x = 0 bis x = 4.', solution: '16/3', steps: ['∫√x dx = 2/3 · x^(3/2).', '2/3 · 8 = 16/3.'] },
          { problem: 'Bestimmen Sie die Fläche zwischen y = x und y = x².', solution: '1/6', steps: ['Schnittstellen 0 und 1; ∫₀¹ (x − x²) dx.', '1/2 − 1/3 = 1/6.'] },
          { problem: 'Bestimmen Sie die Fläche unter y = sin x von 0 bis π.', solution: '2', steps: ['[−cos x]₀^π.', '1 + 1 = 2.'] },
        ],
      },
    },
    // ───────── 5. Volumes of solids of revolution
    {
      slug: 'g12-integrals-volumes-revolution',
      visuals: [{
        type: 'functionPlot', view: { xMin: -0.5, xMax: 4.5, yMin: -2.5, yMax: 2.5 }, height: 200,
        functions: [{ expr: 'sqrt(x)', domain: [0, 4], label: 'y = √x' }, { expr: '-sqrt(x)', domain: [0, 4], color: 'muted', dashed: true }],
        caption: alt('Rrotullimi i y = √x rreth boshtit x nga 0 te 4 jep trupin me V = π ∫ x dx = 8π.', 'Rotating y = √x about the x-axis from 0 to 4 gives the solid with V = π ∫ x dx = 8π.', 'Die Rotation von y = √x um die x-Achse von 0 bis 4 ergibt den Körper mit V = π ∫ x dx = 8π.'),
        alt: alt('Grafiku i y = √x dhe pasqyrimi i tij i ndërprerë, si prerje e trupit të rrotullimit.', 'The graph of y = √x and its dashed reflection, as a cross-section of the solid of revolution.', 'Der Graph von y = √x und seine gestrichelte Spiegelung als Schnitt durch den Rotationskörper.'),
      }],
      answers: {
        examples: [[['pi * 4^2 / 2', 25.13, 0.005]], [['pi * 3^3 / 3', 28.27, 0.005]]],
        practice: [[['pi / 5', 0.63, 0.005]], [['4/3 * pi * 2^3', 33.51, 0.005]], [['pi * 2^2 * 3', 37.7, 0.005, '37.70']]],
      },
      al: {
        title: 'Vëllimet e trupave të rrotullimit',
        objectives: ['Të llogaritni vëllimin e trupit që fitohet nga rrotullimi i grafikut rreth boshtit x.', 'Të kontrolloni formulat e njohura (koni, sfera, cilindri) me integral.'],
        theory: 'Kur pjesa nën grafikun e f nga a te b rrotullohet rreth boshtit x, çdo prerje tërthore është rreth me rreze f(x). Vëllimi:\nV = π ∫ₐᵇ f(x)² dx.\n\ny = √x nga 0 te 4: V = π ∫₀⁴ x dx = π · 16/2 = 8π ≈ 25,13.\ny = x nga 0 te 3 jep konin me r = h = 3: V = π ∫₀³ x² dx = 9π, si 1/3 · π · 9 · 3.',
        keyPoints: ['V = π ∫ f(x)² dx', 'Prerja tërthore: rreth me rreze f(x)', 'Ngrini f në katror para integrimit'],
        examples: [
          { example: 'Gjeni vëllimin nga rrotullimi i y = √x, 0 ≤ x ≤ 4, rreth boshtit x.', solution: 'π ∫₀⁴ x dx = π · 8 = 8π ≈ 25,13.' },
          { example: 'Gjeni vëllimin nga rrotullimi i y = x, 0 ≤ x ≤ 3.', solution: 'π ∫₀³ x² dx = π · 9 = 9π ≈ 28,27 (koni me r = h = 3).' },
        ],
        commonMistakes: [
          { mistake: 'Përdoret π ∫ f(x) dx pa katror.', fix: 'Syprina e prerjes është π · r² = π · f(x)².' },
        ],
        practice: [
          { problem: 'Gjeni vëllimin nga rrotullimi i y = x², 0 ≤ x ≤ 1.', solution: 'π/5 ≈ 0,63', steps: ['π ∫₀¹ x⁴ dx = π · 1/5.', '≈ 0,63.'] },
          { problem: 'Rrotullimi i y = √(4 − x²), −2 ≤ x ≤ 2, jep sferën. Sa është vëllimi?', solution: '32π/3 ≈ 33,51', steps: ['π ∫₋₂² (4 − x²) dx = π(16 − 16/3) = 32π/3.', '≈ 33,51 (= 4/3 · π · 2³).'] },
          { problem: 'Rrotullimi i y = 2, 0 ≤ x ≤ 3. Sa është vëllimi?', solution: '12π ≈ 37,70', steps: ['π ∫₀³ 4 dx = 12π.', 'Cilindër me r = 2, h = 3: ≈ 37,70.'] },
        ],
      },
      en: {
        title: 'Volumes of solids of revolution',
        objectives: ['Work out the volume of the solid formed by rotating a graph about the x-axis.', 'Check the known formulas (cone, sphere, cylinder) with integrals.'],
        theory: 'When the region under the graph of f from a to b is rotated about the x-axis, every cross-section is a circle of radius f(x). The volume:\nV = π ∫ₐᵇ f(x)² dx.\n\ny = √x from 0 to 4: V = π ∫₀⁴ x dx = π · 16/2 = 8π ≈ 25.13.\ny = x from 0 to 3 gives the cone with r = h = 3: V = π ∫₀³ x² dx = 9π, the same as 1/3 · π · 9 · 3.',
        keyPoints: ['V = π ∫ f(x)² dx', 'Cross-section: circle of radius f(x)', 'Square f before integrating'],
        examples: [
          { example: 'Find the volume when y = √x, 0 ≤ x ≤ 4, is rotated about the x-axis.', solution: 'π ∫₀⁴ x dx = π · 8 = 8π ≈ 25.13.' },
          { example: 'Find the volume when y = x, 0 ≤ x ≤ 3, is rotated.', solution: 'π ∫₀³ x² dx = π · 9 = 9π ≈ 28.27 (the cone with r = h = 3).' },
        ],
        commonMistakes: [
          { mistake: 'π ∫ f(x) dx is used without squaring.', fix: 'The cross-section area is π · r² = π · f(x)².' },
        ],
        practice: [
          { problem: 'Find the volume when y = x², 0 ≤ x ≤ 1, is rotated.', solution: 'π/5 ≈ 0.63', steps: ['π ∫₀¹ x⁴ dx = π · 1/5.', '≈ 0.63.'] },
          { problem: 'Rotating y = √(4 − x²), −2 ≤ x ≤ 2, gives a sphere. What is its volume?', solution: '32π/3 ≈ 33.51', steps: ['π ∫₋₂² (4 − x²) dx = π(16 − 16/3) = 32π/3.', '≈ 33.51 (= 4/3 · π · 2³).'] },
          { problem: 'Rotate y = 2, 0 ≤ x ≤ 3. What is the volume?', solution: '12π ≈ 37.70', steps: ['π ∫₀³ 4 dx = 12π.', 'A cylinder with r = 2, h = 3: ≈ 37.70.'] },
        ],
      },
      de: {
        title: 'Volumen von Rotationskörpern',
        objectives: ['Das Volumen des Körpers berechnen, der durch Rotation eines Graphen um die x-Achse entsteht.', 'Bekannte Formeln (Kegel, Kugel, Zylinder) mit Integralen bestätigen.'],
        theory: 'Rotiert die Fläche unter dem Graphen von f von a bis b um die x-Achse, ist jeder Querschnitt ein Kreis mit Radius f(x). Das Volumen:\nV = π ∫ₐᵇ f(x)² dx.\n\ny = √x von 0 bis 4: V = π ∫₀⁴ x dx = π · 16/2 = 8π ≈ 25,13.\ny = x von 0 bis 3 ergibt den Kegel mit r = h = 3: V = π ∫₀³ x² dx = 9π, wie 1/3 · π · 9 · 3.',
        keyPoints: ['V = π ∫ f(x)² dx', 'Querschnitt: Kreis mit Radius f(x)', 'f vor dem Integrieren quadrieren'],
        examples: [
          { example: 'Bestimmen Sie das Volumen bei Rotation von y = √x, 0 ≤ x ≤ 4, um die x-Achse.', solution: 'π ∫₀⁴ x dx = π · 8 = 8π ≈ 25,13.' },
          { example: 'Bestimmen Sie das Volumen bei Rotation von y = x, 0 ≤ x ≤ 3.', solution: 'π ∫₀³ x² dx = π · 9 = 9π ≈ 28,27 (Kegel mit r = h = 3).' },
        ],
        commonMistakes: [
          { mistake: 'Es wird π ∫ f(x) dx ohne Quadrat gerechnet.', fix: 'Die Querschnittsfläche ist π · r² = π · f(x)².' },
        ],
        practice: [
          { problem: 'Bestimmen Sie das Volumen bei Rotation von y = x², 0 ≤ x ≤ 1.', solution: 'π/5 ≈ 0,63', steps: ['π ∫₀¹ x⁴ dx = π · 1/5.', '≈ 0,63.'] },
          { problem: 'Die Rotation von y = √(4 − x²), −2 ≤ x ≤ 2, ergibt eine Kugel. Wie groß ist ihr Volumen?', solution: '32π/3 ≈ 33,51', steps: ['π ∫₋₂² (4 − x²) dx = π(16 − 16/3) = 32π/3.', '≈ 33,51 (= 4/3 · π · 2³).'] },
          { problem: 'Rotation von y = 2, 0 ≤ x ≤ 3. Wie groß ist das Volumen?', solution: '12π ≈ 37,70', steps: ['π ∫₀³ 4 dx = 12π.', 'Zylinder mit r = 2, h = 3: ≈ 37,70.'] },
        ],
      },
    },
  ],
};
