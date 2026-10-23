// Formula sheet for grades 6–12, works offline. Formulas use Unicode notation (language-neutral);
// section titles and formula names are translated (al = Albanian, formal; en; de).

export const formulaSections = [
  {
    id: 'algebra',
    icon: 'git-branch',
    title: { al: 'Algjebër', en: 'Algebra', de: 'Algebra' },
    items: [
      { name: { al: 'Katrori i shumës', en: 'Square of a sum', de: 'Binomische Formel (1)' }, formula: '(a + b)² = a² + 2ab + b²' },
      { name: { al: 'Katrori i ndryshimit', en: 'Square of a difference', de: 'Binomische Formel (2)' }, formula: '(a − b)² = a² − 2ab + b²' },
      { name: { al: 'Ndryshimi i katrorëve', en: 'Difference of squares', de: 'Binomische Formel (3)' }, formula: 'a² − b² = (a − b)(a + b)' },
      { name: { al: 'Formula kuadratike', en: 'Quadratic formula', de: 'Mitternachtsformel' }, formula: 'x₁,₂ = (−b ± √(b² − 4ac)) / 2a' },
      { name: { al: 'Diskriminanti', en: 'Discriminant', de: 'Diskriminante' }, formula: 'Δ = b² − 4ac' },
      { name: { al: 'Formulat e Vietit', en: "Vieta's formulas", de: 'Satz von Vieta' }, formula: 'x₁ + x₂ = −b/a,   x₁ · x₂ = c/a' },
      { name: { al: 'Fuqitë', en: 'Powers', de: 'Potenzgesetze' }, formula: 'aᵐ · aⁿ = aᵐ⁺ⁿ,   (aᵐ)ⁿ = aᵐⁿ,   a⁻ⁿ = 1/aⁿ' },
      { name: { al: 'Logaritmet', en: 'Logarithms', de: 'Logarithmengesetze' }, formula: 'log(xy) = log x + log y,   log(xⁿ) = n·log x' },
    ],
  },
  {
    id: 'geometry',
    icon: 'shapes',
    title: { al: 'Gjeometri', en: 'Geometry', de: 'Geometrie' },
    items: [
      { name: { al: 'Teorema e Pitagorës', en: 'Pythagorean theorem', de: 'Satz des Pythagoras' }, formula: 'a² + b² = c²' },
      { name: { al: 'Sipërfaqja e trekëndëshit', en: 'Area of a triangle', de: 'Flächeninhalt Dreieck' }, formula: 'A = (a · h) / 2' },
      { name: { al: 'Sipërfaqja e trapezit', en: 'Area of a trapezoid', de: 'Flächeninhalt Trapez' }, formula: 'A = (a + c) · h / 2' },
      { name: { al: 'Rrethi', en: 'Circle', de: 'Kreis' }, formula: 'L = 2πr,   A = πr²' },
      { name: { al: 'Cilindri', en: 'Cylinder', de: 'Zylinder' }, formula: 'V = πr²h,   S = 2πr(r + h)' },
      { name: { al: 'Koni', en: 'Cone', de: 'Kegel' }, formula: 'V = πr²h / 3,   s = √(r² + h²)' },
      { name: { al: 'Sfera', en: 'Sphere', de: 'Kugel' }, formula: 'V = 4πr³ / 3,   S = 4πr²' },
      { name: { al: 'Shuma e këndeve të shumëkëndëshit', en: 'Angle sum of a polygon', de: 'Winkelsumme im n-Eck' }, formula: 'S = (n − 2) · 180°' },
    ],
  },
  {
    id: 'trigonometry',
    icon: 'triangle',
    title: { al: 'Trigonometri', en: 'Trigonometry', de: 'Trigonometrie' },
    items: [
      { name: { al: 'Në trekëndëshin kënddrejtë', en: 'Right triangle', de: 'Rechtwinkliges Dreieck' }, formula: 'sin α = a/c,   cos α = b/c,   tg α = a/b' },
      { name: { al: 'Identiteti themelor', en: 'Pythagorean identity', de: 'Trigonometrischer Pythagoras' }, formula: 'sin²x + cos²x = 1' },
      { name: { al: 'Këndi i dyfishtë', en: 'Double angle', de: 'Doppelwinkel' }, formula: 'sin 2x = 2 sin x cos x,   cos 2x = cos²x − sin²x' },
      { name: { al: 'Shuma e këndeve', en: 'Angle addition', de: 'Additionstheoreme' }, formula: 'sin(α ± β) = sin α cos β ± cos α sin β' },
      { name: { al: 'Teorema e sinuseve', en: 'Law of sines', de: 'Sinussatz' }, formula: 'a / sin α = b / sin β = c / sin γ' },
      { name: { al: 'Teorema e kosinusit', en: 'Law of cosines', de: 'Kosinussatz' }, formula: 'c² = a² + b² − 2ab cos γ' },
      { name: { al: 'Gradë ↔ radianë', en: 'Degrees ↔ radians', de: 'Grad ↔ Bogenmaß' }, formula: '180° = π rad' },
    ],
  },
  {
    id: 'calculus',
    icon: 'analytics',
    title: { al: 'Analizë', en: 'Calculus', de: 'Analysis' },
    items: [
      { name: { al: 'Rregulla e fuqisë', en: 'Power rule', de: 'Potenzregel' }, formula: '(xⁿ)′ = n·xⁿ⁻¹' },
      { name: { al: 'Rregulla e prodhimit', en: 'Product rule', de: 'Produktregel' }, formula: '(u·v)′ = u′v + uv′' },
      { name: { al: 'Rregulla e herësit', en: 'Quotient rule', de: 'Quotientenregel' }, formula: '(u/v)′ = (u′v − uv′) / v²' },
      { name: { al: 'Rregulla e zinxhirit', en: 'Chain rule', de: 'Kettenregel' }, formula: '(f(g(x)))′ = f′(g(x)) · g′(x)' },
      { name: { al: 'Derivatet themelore', en: 'Basic derivatives', de: 'Grundableitungen' }, formula: '(sin x)′ = cos x,   (cos x)′ = −sin x,   (eˣ)′ = eˣ,   (ln x)′ = 1/x' },
      { name: { al: 'Integrali i fuqisë', en: 'Power rule for integrals', de: 'Potenzregel (Integral)' }, formula: '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C,   n ≠ −1' },
      { name: { al: 'Integrali i caktuar', en: 'Definite integral', de: 'Bestimmtes Integral' }, formula: '∫ₐᵇ f(x) dx = F(b) − F(a)' },
    ],
  },
  {
    id: 'statistics',
    icon: 'stats-chart',
    title: { al: 'Statistikë & Probabilitet', en: 'Statistics & Probability', de: 'Statistik & Wahrscheinlichkeit' },
    items: [
      { name: { al: 'Mesatarja aritmetike', en: 'Mean', de: 'Mittelwert' }, formula: 'x̄ = (x₁ + x₂ + … + xₙ) / n' },
      { name: { al: 'Varianca (popullim)', en: 'Variance (population)', de: 'Varianz (Grundgesamtheit)' }, formula: 'σ² = Σ(xᵢ − x̄)² / n' },
      { name: { al: 'Devijimi standard', en: 'Standard deviation', de: 'Standardabweichung' }, formula: 'σ = √σ²' },
      { name: { al: 'Probabiliteti klasik', en: 'Classical probability', de: 'Laplace-Wahrscheinlichkeit' }, formula: 'P(A) = rastet e favorshme / të gjitha rastet' },
      { name: { al: 'Ngjarja e kundërt', en: 'Complement', de: 'Gegenereignis' }, formula: 'P(Ā) = 1 − P(A)' },
      { name: { al: 'Kombinimet', en: 'Combinations', de: 'Kombinationen' }, formula: 'C(n, k) = n! / (k!(n − k)!)' },
      { name: { al: 'Permutacionet', en: 'Permutations', de: 'Permutationen' }, formula: 'P(n, k) = n! / (n − k)!' },
    ],
  },
];

// The classical-probability formula contains words, so it is localized separately
export const localizedFormula = (item, lang) => {
  if (item.formula.includes('rastet e favorshme')) {
    if (lang === 'en') return 'P(A) = favourable outcomes / all outcomes';
    if (lang === 'de') return 'P(A) = günstige Ergebnisse / mögliche Ergebnisse';
  }
  return item.formula;
};
