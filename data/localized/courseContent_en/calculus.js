export const courseContents_calculus_en = {

  // calc-001: Limits and Continuity
  'calc-001': {
    lessons: [
      {
        title: 'The Concept of a Limit',
        theory: 'The limit of f(x) as x → a is the value L that f(x) approaches as x approaches a. It is denoted lim(x→a) f(x) = L. It is not required that f(a) = L or even that f(a) exists.\n\nThe ε-δ definition: ∀ε > 0, ∃δ > 0: |x-a| < δ → |f(x)-L| < ε\n\nIntuitive definition: we can make f(x) as close to L as we wish by choosing x sufficiently close to a.',
        keyPoints: [
          'The limit can exist even if f(a) does not exist',
          'Left-hand limit = right-hand limit → the limit exists',
          'Limit laws: sum, product, quotient',
          'For ordinary limits: substitute a directly if f is continuous',
        ],
        examples: [
          {
            example: 'Find lim(x→2) (x² - 4)/(x - 2)',
            solution: 'Factor: (x-2)(x+2)/(x-2) = x+2 (for x≠2)\nlim(x→2) = 2+2 = 4',
          },
          {
            example: 'Find lim(x→0) sin(x)/x',
            solution: 'This is a well-known limit: lim(x→0) sin(x)/x = 1',
          },
        ],
        practice: [
          {
            problem: 'Find lim(x→3) (x²-9)/(x-3)',
            solution: '6',
            steps: [
              'Factor: (x-3)(x+3)/(x-3)',
              '= x+3 (for x≠3)',
              'lim(x→3) = 3+3 = 6',
            ],
          },
        ],
      },
      {
        title: 'Continuity',
        theory: 'A function f is continuous at a if: 1) f(a) exists, 2) lim(x→a) f(x) exists, 3) lim(x→a) f(x) = f(a). If all three conditions are satisfied, the function "can be drawn without lifting the pen."\n\nTypes of discontinuities: removable (hole — can be fixed), jump (one-sided limits differ), and essential (limit does not exist).\n\nThe Intermediate Value Theorem (IVT): if f is continuous on [a,b] and f(a) and f(b) have opposite signs, then there exists x∈(a,b) such that f(x)=0.',
        keyPoints: [
          'Three conditions for continuity: f(a) exists, limit exists, they are equal',
          'Polynomials are continuous everywhere',
          'Rational functions: continuous wherever the denominator ≠ 0',
          'IVT: implies the existence of roots',
        ],
        examples: [
          {
            example: 'Determine whether f(x) = (x²-1)/(x-1) is continuous at x=1',
            solution: 'f(1) does not exist (0/0). It is not continuous at x=1 (removable discontinuity).',
          },
        ],
        practice: [
          {
            problem: 'Show that the equation x³ - x - 1 = 0 has at least one real root.',
            solution: 'By IVT: f(1)=-1<0 and f(2)=5>0 → root ∈ (1,2)',
            steps: [
              'f(x) = x³-x-1 is continuous',
              'f(1) = 1-1-1 = -1 < 0',
              'f(2) = 8-2-1 = 5 > 0',
              'Sign changes → by IVT there is a root in (1,2)',
            ],
          },
        ],
      },
      {
        title: 'Limits at Infinity and Asymptotes',
        theory: 'lim(x→∞) f(x) = L means f(x) approaches L as x increases without bound. This gives a horizontal asymptote.\n\nIf lim(x→a) f(x) = ±∞, then x=a is a vertical asymptote.\n\nUseful rule: as x→∞ in a polynomial/polynomial expression, only the terms of highest degree are dominant.',
        keyPoints: [
          'lim f(x) = L → horizontal asymptote y=L',
          'lim f(x) = ∞ → vertical asymptote',
          'The dominant power wins as x→∞',
          '1/xⁿ → 0 as x→∞ (for n>0)',
        ],
        examples: [
          {
            example: 'Find lim(x→∞) (3x² + 2)/(5x² - 1)',
            solution: 'Dominant terms: 3x²/5x² = 3/5\nlim = 3/5',
          },
        ],
        practice: [
          {
            problem: 'Find lim(x→∞) (2x³ - x)/(x³ + 4)',
            solution: '2',
            steps: [
              'Divide numerator and denominator by x³',
              '= (2 - 1/x²)/(1 + 4/x³)',
              'As x→∞: 1/x²→0, 4/x³→0',
              'Limit = 2/1 = 2',
            ],
          },
        ],
      },
    ],
  },

  // calc-002: Derivatives
  'calc-002': {
    lessons: [
      {
        title: 'The Concept of the Derivative',
        theory: 'The derivative of f at the point a is: f\'(a) = lim(h→0) [f(a+h) - f(a)] / h\nThis measures the instantaneous rate of change, or the slope of the tangent line at a.\n\nNotations: f\'(x), df/dx, Df, ẏ. Each is preferred in certain contexts.\n\nThe derivative as the limit of the difference quotient: Δy/Δx → dy/dx as Δx→0.',
        keyPoints: [
          'f\'(a) = lim [f(a+h)-f(a)]/h as h→0',
          'Derivative = slope of the tangent line',
          'Derivative = instantaneous velocity',
          'f\'(x) exists → f is differentiable and continuous',
        ],
        examples: [
          {
            example: 'Find f\'(x) from the definition if f(x) = x²',
            solution: 'f\'(x) = lim [(x+h)²-x²]/h\n= lim [2xh+h²]/h\n= lim(2x+h) = 2x',
          },
        ],
        practice: [
          {
            problem: 'Find the derivative from the definition: f(x) = 3x + 5',
            solution: 'f\'(x) = 3',
            steps: [
              'f\'(x) = lim [(3(x+h)+5)-(3x+5)]/h',
              '= lim [3h]/h',
              '= lim 3 = 3',
            ],
          },
        ],
      },
      {
        title: 'Differentiation Rules',
        theory: 'Fundamental rules of differentiation:\n- (c)\'= 0 (constant)\n- (xⁿ)\'= nxⁿ⁻¹ (power rule)\n- (f±g)\'= f\'±g\'\n- (fg)\'= f\'g + fg\' (product rule)\n- (f/g)\'= (f\'g - fg\')/g² (quotient rule)\n- (f∘g)\'= f\'(g)·g\' (chain rule)\n\nThese rules save us from computing limits every time.',
        keyPoints: [
          'Power rule: d(xⁿ)/dx = nxⁿ⁻¹',
          'Product rule: (fg)\' = f\'g + fg\'',
          'Quotient rule: (f/g)\' = (f\'g - fg\')/g²',
          'Chain rule: d[f(g(x))]/dx = f\'(g(x))·g\'(x)',
        ],
        examples: [
          {
            example: 'Find the derivative of: y = x³ - 5x² + 2x - 7',
            solution: 'y\' = 3x² - 10x + 2',
          },
          {
            example: 'Find d/dx[(x²)(sin x)]',
            solution: '= 2x·sin x + x²·cos x',
          },
        ],
        practice: [
          {
            problem: 'Find the derivative of: f(x) = (x² + 1)⁴',
            solution: '8x(x²+1)³',
            steps: [
              'Apply the chain rule: f\'(x) = 4(x²+1)³ · (x²+1)\'',
              '(x²+1)\' = 2x',
              'f\'(x) = 4(x²+1)³ · 2x = 8x(x²+1)³',
            ],
          },
        ],
      },
      {
        title: 'Derivatives of Trigonometric and Special Functions',
        theory: 'Trigonometric derivatives: (sin x)\' = cos x, (cos x)\' = -sin x, (tan x)\' = sec²x.\nExponential: (eˣ)\' = eˣ, (aˣ)\' = aˣ ln a.\nLogarithmic: (ln x)\' = 1/x, (log_a x)\' = 1/(x ln a).\n\nThese derivatives are memorized, but they can be derived from the definition and trigonometric identities.',
        keyPoints: [
          '(sin x)\' = cos x',
          '(cos x)\' = -sin x',
          '(eˣ)\' = eˣ (its own derivative!)',
          '(ln x)\' = 1/x',
        ],
        examples: [
          {
            example: 'Find d/dx[eˣ sin x]',
            solution: '= eˣ sin x + eˣ cos x = eˣ(sin x + cos x)',
          },
          {
            example: 'Find d/dx[ln(x² + 1)]',
            solution: '= 1/(x²+1) · 2x = 2x/(x²+1)',
          },
        ],
        practice: [
          {
            problem: 'Find the derivative: y = e^(x²)',
            solution: '2xe^(x²)',
            steps: [
              'Apply the chain rule: y\' = e^(x²) · (x²)\'',
              '(x²)\' = 2x',
              'y\' = 2x·e^(x²)',
            ],
          },
        ],
      },
    ],
  },

  // calc-003: Applications of Derivatives
  'calc-003': {
    lessons: [
      {
        title: 'Extrema and Fermat\'s Theorem',
        theory: 'The critical points of f are where f\'(x) = 0 or f\'(x) does not exist. Local extrema (local minima and maxima) occur only at critical points (Fermat\'s Theorem).\n\nFirst derivative test: if f\' changes from + to -, local maximum; from - to +, local minimum.\nSecond derivative test: if f\'\'(c) > 0, minimum; f\'\'(c) < 0, maximum; f\'\'(c) = 0, inconclusive.',
        keyPoints: [
          'Critical point: f\'=0 or f\' does not exist',
          'Global extrema: endpoints + critical points',
          "Concavity: f''>0 concave up, f''<0 concave down",
          'Inflection point: f\'\' changes sign',
        ],
        examples: [
          {
            example: 'Find the local extrema of f(x) = x³ - 3x',
            solution: 'f\'(x) = 3x² - 3 = 0 → x = ±1\nf\'\'(1) = 6 > 0 → minimum at (1, -2)\nf\'\'(-1) = -6 < 0 → maximum at (-1, 2)',
          },
        ],
        practice: [
          {
            problem: 'Find the maximum and minimum values of f(x) = x² - 4x + 3 on [0, 3]',
            solution: 'min = -1 at x=2, max = 3 at x=0',
            steps: [
              'f\'(x) = 2x-4=0 → x=2 (critical point)',
              'f(0)=3, f(2)=-1, f(3)=0',
              'Min = -1 (at x=2)',
              'Max = 3 (at x=0)',
            ],
          },
        ],
      },
      {
        title: 'Optimization',
        theory: 'Optimization is finding the maximum or minimum value of a function. Steps: 1) Identify the objective function, 2) Express it in terms of a single variable using constraints, 3) Find the critical points, 4) Verify whether they are a maximum or minimum.\n\nApplications are numerous: cost minimization, profit maximization, shape optimization, shortest path problems.',
        keyPoints: [
          'Relate the objective function to the constraints',
          'Express in terms of a single variable',
          'Find the critical points (derivative = 0)',
          'Verify the nature (min or max)',
        ],
        examples: [
          {
            example: 'Find the rectangle with perimeter 40 m and maximum area.',
            solution: '2(l+w)=40 → l+w=20 → w=20-l\nA = l(20-l) = 20l-l²\nA\' = 20-2l=0 → l=10\nSquare 10×10, A=100 m²',
          },
        ],
        practice: [
          {
            problem: 'What are the two positive numbers with sum 12 and maximum product?',
            solution: '6 and 6, product = 36',
            steps: [
              'x + y = 12 → y = 12-x',
              'P = x(12-x) = 12x - x²',
              'P\' = 12-2x = 0 → x = 6',
              'y = 6, P = 36',
            ],
          },
        ],
      },
    ],
  },

  // calc-004: Integrals
  'calc-004': {
    lessons: [
      {
        title: 'The Antiderivative and the Indefinite Integral',
        theory: 'The antiderivative (primitive) of f is a function F where F\' = f. The indefinite integral: ∫f(x)dx = F(x) + C where C is the constant of integration.\n\nFundamental rules: ∫xⁿdx = xⁿ⁺¹/(n+1) + C (n≠-1), ∫eˣdx = eˣ + C, ∫(1/x)dx = ln|x| + C, ∫sin x dx = -cos x + C, ∫cos x dx = sin x + C.',
        keyPoints: [
          '∫xⁿdx = xⁿ⁺¹/(n+1) + C',
          '∫eˣdx = eˣ + C',
          '∫(1/x)dx = ln|x| + C',
          'The constant C is mandatory',
        ],
        examples: [
          {
            example: 'Find ∫(3x² - 2x + 5)dx',
            solution: '= x³ - x² + 5x + C',
          },
          {
            example: 'Find ∫(2eˣ + cos x)dx',
            solution: '= 2eˣ + sin x + C',
          },
        ],
        practice: [
          {
            problem: 'Find ∫(x³ + 4x - 1/x)dx',
            solution: 'x⁴/4 + 2x² - ln|x| + C',
            steps: [
              '∫x³dx = x⁴/4',
              '∫4x dx = 2x²',
              '∫(-1/x)dx = -ln|x|',
              'Add C',
            ],
          },
        ],
      },
      {
        title: 'The Definite Integral and Area',
        theory: 'The Fundamental Theorem of Calculus: ∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f. This connects the integral with the derivative.\n\nGeometric interpretation: ∫ₐᵇ f(x)dx = the area between the graph of f and the x-axis (signed: area below the axis is negative).\n\nArea between two curves: A = ∫ₐᵇ |f(x) - g(x)|dx',
        keyPoints: [
          '∫ₐᵇ f(x)dx = F(b) - F(a)',
          'Area = integral (signed)',
          'Region below the x-axis: negative integral',
          'Between two curves: ∫(f-g)dx',
        ],
        examples: [
          {
            example: 'Evaluate ∫₀² (x² + 1)dx',
            solution: '= [x³/3 + x]₀² = (8/3 + 2) - 0 = 14/3',
          },
        ],
        practice: [
          {
            problem: 'Find the area under y = sin x from 0 to π',
            solution: 'A = 2',
            steps: [
              '∫₀^π sin x dx = [-cos x]₀^π',
              '= -cos π - (-cos 0)',
              '= -(-1) + 1 = 2',
            ],
          },
        ],
      },
    ],
  },

  // calc-005: Applications of Integrals
  'calc-005': {
    lessons: [
      {
        title: 'Volume by Integration',
        theory: 'A solid of revolution is formed by revolving the region under f(x) about the x-axis or y-axis.\n\nDisk method: V = π∫ₐᵇ [f(x)]²dx (revolution about the x-axis)\nWasher method: V = π∫ₐᵇ {[f(x)]² - [g(x)]²}dx\nShell method: V = 2π∫ₐᵇ x·f(x)dx',
        keyPoints: [
          'Disk: V = π∫[f(x)]²dx',
          'Washer: V = π∫{[f]²-[g]²}dx',
          'Shell: V = 2π∫x·f(x)dx',
          'Caution: the integral does not give volume directly — include π',
        ],
        examples: [
          {
            example: 'Find the volume of the solid obtained by revolving y = √x from 0 to 4 about the x-axis',
            solution: 'V = π∫₀⁴ (√x)² dx = π∫₀⁴ x dx = π[x²/2]₀⁴ = 8π',
          },
        ],
        practice: [
          {
            problem: 'Find the volume of the sphere with radius r by revolving y = √(r²-x²)',
            solution: 'V = 4πr³/3',
            steps: [
              'V = π∫₋ᵣʳ (r²-x²)dx',
              '= π[r²x - x³/3]₋ᵣʳ',
              '= π(2r³ - 2r³/3)',
              '= 4πr³/3',
            ],
          },
        ],
      },
    ],
  },

  // calc-006: Differential Equations
  'calc-006': {
    lessons: [
      {
        title: 'Separable Equations',
        theory: 'A first-order differential equation: dy/dx = f(x, y). It is called separable if it can be written as dy/dx = g(x)h(y) — rearrange to dy/h(y) = g(x)dx, then integrate both sides.\n\nApplications: exponential growth (population), radioactive decay, Newton\'s law of cooling, continuous compound interest problems.',
        keyPoints: [
          'Form: dy/dx = g(x)·h(y)',
          'Separate: dy/h(y) = g(x)dx',
          'Integrate both sides',
          'Find C from the initial conditions',
        ],
        examples: [
          {
            example: 'Solve: dy/dx = xy',
            solution: 'dy/y = x dx\nln|y| = x²/2 + C\ny = Ae^(x²/2)',
          },
        ],
        practice: [
          {
            problem: 'Solve: dy/dx = 2x/(y+1) with condition y(0) = 2',
            solution: '(y+1)² = 2x² + 9',
            steps: [
              '(y+1)dy = 2x dx',
              '(y+1)²/2 = x² + C',
              'Condition y(0)=2: (3)²/2 = 0 + C → C = 9/2',
              '(y+1)² = 2x² + 9',
            ],
          },
        ],
      },
    ],
  },

  // calc-007: Multivariable Calculus
  'calc-007': {
    lessons: [
      {
        title: 'Partial Derivatives',
        theory: 'A function f(x, y) has partial derivatives ∂f/∂x (derivative with respect to x, treating y as constant) and ∂f/∂y (derivative with respect to y, treating x as constant).\n\nThe gradient ∇f = (∂f/∂x, ∂f/∂y) points in the direction of greatest increase. The magnitude |∇f| gives the rate of increase.\n\nThe directional derivative: D_u f = ∇f · u where u is the unit direction vector.',
        keyPoints: [
          '∂f/∂x: treat y as a constant',
          '∂f/∂y: treat x as a constant',
          '∇f = (∂f/∂x, ∂f/∂y) = the gradient',
          'The gradient → direction of greatest increase',
        ],
        examples: [
          {
            example: 'Find the partial derivatives of f(x,y) = x²y + 3xy²',
            solution: '∂f/∂x = 2xy + 3y²\n∂f/∂y = x² + 6xy',
          },
        ],
        practice: [
          {
            problem: 'Find ∇f at (1, 2) if f(x,y) = x²y - y³',
            solution: '∇f = (4, -11)',
            steps: [
              '∂f/∂x = 2xy → at (1,2): 4',
              '∂f/∂y = x² - 3y² → at (1,2): 1-12 = -11',
              '∇f(1,2) = (4, -11)',
            ],
          },
        ],
      },
    ],
  },
};
