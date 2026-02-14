export const courseContents_other_en = {

  // ===== TRIGONOMETRY =====

  // trig-001: Introduction to Trigonometry
  'trig-001': {
    lessons: [
      {
        title: 'Trigonometric Ratios',
        theory: 'Trigonometry studies the relationships between angles and sides of triangles. The six trigonometric ratios are defined using the sides of a right triangle: sin, cos, tan, cot, sec, csc.\n\nFor angle θ: sin θ = opposite / hypotenuse, cos θ = adjacent / hypotenuse, tan θ = opposite / adjacent.\n\nMnemonic: SOH-CAH-TOA (Sin=Opposite/Hypotenuse, Cos=Adjacent/Hypotenuse, Tan=Opposite/Adjacent)',
        keyPoints: [
          'sin θ = o/h (opposite/hypotenuse)',
          'cos θ = a/h (adjacent/hypotenuse)',
          'tan θ = o/a = sin/cos',
          'sin²θ + cos²θ = 1 (fundamental identity)',
        ],
        examples: [
          {
            example: 'Right triangle: legs 3 and 4, hypotenuse 5. Find sin, cos, tan of angle θ (opposite the leg of length 3).',
            solution: 'sin θ = 3/5 = 0.6\ncos θ = 4/5 = 0.8\ntan θ = 3/4 = 0.75',
          },
        ],
        practice: [
          {
            problem: 'sin θ = 5/13. Find cos θ and tan θ (θ is a first-quadrant angle).',
            solution: 'cos θ = 12/13, tan θ = 5/12',
            steps: [
              'sin²θ + cos²θ = 1',
              '(5/13)² + cos²θ = 1',
              'cos²θ = 1 - 25/169 = 144/169',
              'cos θ = 12/13',
              'tan θ = sin/cos = (5/13)/(12/13) = 5/12',
            ],
          },
        ],
      },
      {
        title: 'Trigonometric Values of Special Angles',
        theory: 'The angles 0°, 30°, 45°, 60°, 90° have exact trigonometric values that should be memorized:\n- sin 30° = cos 60° = 1/2\n- sin 45° = cos 45° = √2/2\n- sin 60° = cos 30° = √3/2\n- tan 30° = √3/3, tan 45° = 1, tan 60° = √3\n\nMemorization trick: sin and cos are "mirrors" of each other about 45°.',
        keyPoints: [
          'sin 0° = 0, cos 0° = 1',
          'sin 30° = 1/2, cos 30° = √3/2',
          'sin 45° = √2/2, cos 45° = √2/2',
          'sin 90° = 1, cos 90° = 0',
        ],
        examples: [
          {
            example: 'Compute: sin²30° + cos²30°',
            solution: '= (1/2)² + (√3/2)² = 1/4 + 3/4 = 1 ✓',
          },
        ],
        practice: [
          {
            problem: 'Compute: 2sin 60° + 3cos 30° - tan 45°',
            solution: '= 2√3',
            steps: [
              'sin 60° = √3/2, cos 30° = √3/2, tan 45° = 1',
              '= 2(√3/2) + 3(√3/2) - 1',
              '= √3 + 3√3/2 - 1',
              '= 2√3/2 + 3√3/2 - 1 = 5√3/2 - 1',
            ],
          },
        ],
      },
      {
        title: 'Solving Triangles',
        theory: 'Law of Sines: a/sin A = b/sin B = c/sin C. Used when given: AAS, ASA, or SSA.\n\nLaw of Cosines: c² = a² + b² - 2ab cos C. Used when given: SAS or SSS.\n\nSolution strategy: 1) Identify the given configuration (AAS, SSS, etc.), 2) Solve the triangle, 3) Verify (sum of angles = 180°).',
        keyPoints: [
          'Law of Sines: a/sin A = b/sin B = c/sin C',
          'Law of Cosines: c² = a²+b²-2ab cos C',
          'AAS/ASA: use the Law of Sines',
          'SAS/SSS: use the Law of Cosines',
        ],
        examples: [
          {
            example: 'A=30°, B=45°, a=8. Find b.',
            solution: 'b/sin B = a/sin A\nb = 8 × sin 45°/sin 30° = 8 × (√2/2)/(1/2) = 8√2',
          },
        ],
        practice: [
          {
            problem: 'Triangle with a=5, b=7, C=60°. Find c.',
            solution: 'c = √39 ≈ 6.24',
            steps: [
              'c² = a² + b² - 2ab cos C',
              'c² = 25 + 49 - 2(5)(7) cos 60°',
              'c² = 74 - 70(1/2) = 74-35 = 39',
              'c = √39',
            ],
          },
        ],
      },
    ],
  },

  // trig-002: The Unit Circle and Graphs
  'trig-002': {
    lessons: [
      {
        title: 'The Unit Circle',
        theory: 'The unit circle has radius 1 and center at the origin. Every point on it has coordinates (cos θ, sin θ) where θ is the angle measured from the positive x-axis.\n\nThis generalizes the trigonometric functions to any angle (not just 0-90°). Angles: quadrant I (0°-90°), II (90°-180°), III (180°-270°), IV (270°-360°).\n\nSign of sin/cos by quadrant: "All Students Take Calculus" (ASTC): I-all positive, II-only sin positive, III-only tan positive, IV-only cos positive.',
        keyPoints: [
          '(cos θ, sin θ) are the coordinates on the unit circle',
          'ASTC for signs by quadrant',
          'Supplementary angles: sin(180-θ) = sin θ',
          'Period of sin and cos: 2π',
        ],
        examples: [
          {
            example: 'Find sin 120° and cos 120°.',
            solution: '120° = 180° - 60° (quadrant II)\nsin 120° = sin 60° = √3/2\ncos 120° = -cos 60° = -1/2',
          },
        ],
        practice: [
          {
            problem: 'Find the values of sin 225° and tan 225°.',
            solution: 'sin 225° = -√2/2, tan 225° = 1',
            steps: [
              '225° = 180° + 45° → quadrant III',
              'sin 225° = -sin 45° = -√2/2',
              'cos 225° = -cos 45° = -√2/2',
              'tan 225° = sin/cos = (-√2/2)/(-√2/2) = 1',
            ],
          },
        ],
      },
      {
        title: 'Graphs of Sine and Cosine',
        theory: 'y = A sin(Bx + C) + D - the general form.\nA = amplitude (maximum height from the center)\nB: period T = 2π/|B|\nC: phase shift (horizontal shift)\nD: vertical shift\n\nThe cosine graph is like the sine graph but shifted π/2 to the left (i.e., cos x = sin(x + π/2)).',
        keyPoints: [
          'Amplitude |A|',
          'Period T = 2π/|B|',
          'Phase shift = -C/B',
          'Vertical shift D',
        ],
        examples: [
          {
            example: 'Find the amplitude and period of y = 3 sin(2x - π)',
            solution: 'Amplitude = 3\nPeriod = 2π/2 = π',
          },
        ],
        practice: [
          {
            problem: 'Write the equation of a sine function with A=2, T=π, vertical shift +1',
            solution: 'y = 2 sin(2x) + 1',
            steps: [
              'A = 2',
              'T = π → 2π/B = π → B = 2',
              'D = 1',
              'y = 2 sin(2x) + 1',
            ],
          },
        ],
      },
    ],
  },

  // trig-003: Trigonometric Identities
  'trig-003': {
    lessons: [
      {
        title: 'Fundamental Identities',
        theory: 'Trigonometric identities are equalities that hold true for every value of the angle. The main groups are: Pythagorean identities, reciprocal identities, and quotient identities.\n\nPythagorean identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ.\n\nSum and difference identities: sin(A±B) = sin A cos B ± cos A sin B, cos(A±B) = cos A cos B ∓ sin A sin B.',
        keyPoints: [
          'sin²θ + cos²θ = 1 (fundamental)',
          'sin(A+B) = sinA cosB + cosA sinB',
          'cos(A+B) = cosA cosB - sinA sinB',
          'tan(A+B) = (tanA + tanB)/(1 - tanA tanB)',
        ],
        examples: [
          {
            example: 'Verify the identity: sin 75° = sin(45° + 30°)',
            solution: '= sin45° cos30° + cos45° sin30°\n= (√2/2)(√3/2) + (√2/2)(1/2)\n= √6/4 + √2/4 = (√6+√2)/4',
          },
        ],
        practice: [
          {
            problem: 'Simplify: (1 - cos²θ)/sin²θ',
            solution: '= 1',
            steps: [
              '1 - cos²θ = sin²θ (Pythagorean identity)',
              'sin²θ/sin²θ = 1',
            ],
          },
        ],
      },
    ],
  },

  // trig-004: Law of Sines and Cosines
  'trig-004': {
    lessons: [
      {
        title: 'Advanced Applications of the Laws',
        theory: 'Combining the Law of Sines and the Law of Cosines with the triangle area formula S = (1/2)ab sinC allows solving any triangle given sufficient information.\n\nThese methods are widely applied in: surveying, navigation, physics (force vectors), architecture, and engineering.',
        keyPoints: [
          'S = (1/2)ab sin C (area)',
          'Law of Sines: ambiguity (SSA may yield 0, 1, or 2 triangles)',
          'Law of Cosines: c² = a²+b²-2ab cos C',
          'Combined, they solve any triangle',
        ],
        examples: [
          {
            example: 'Two walls form an angle of 120°, with lengths 4m and 6m. What is the distance between the endpoints?',
            solution: 'c² = 16+36-2(4)(6)cos120° = 52+24 = 76\nc = 2√19 ≈ 8.72 m',
          },
        ],
        practice: [
          {
            problem: 'Find the area of a triangle with b=8, c=11, A=30°.',
            solution: 'S = 22 cm²',
            steps: [
              'S = (1/2)bc sin A',
              'S = (1/2)(8)(11) sin 30°',
              '= 44 × (1/2) = 22',
            ],
          },
        ],
      },
    ],
  },

  // ===== STATISTICS =====

  // stat-002: Probability
  'stat-002': {
    lessons: [
      {
        title: 'Fundamentals of Probability',
        theory: 'Probability measures the chance that an event occurs. It ranges from 0 (impossible) to 1 (certain). Classical probability: P(A) = number of favorable outcomes / total number of outcomes (equally likely).\n\nNotation: S = sample space, A = event, P(A) = probability\n\nKolmogorov axioms: 0 ≤ P(A) ≤ 1, P(S) = 1, P(A∪B) = P(A)+P(B) if A, B are disjoint.',
        keyPoints: [
          'P(A) = favorable outcomes / total outcomes',
          '0 ≤ P(A) ≤ 1',
          'P(complement) = 1 - P(A)',
          'P(S) = 1, P(∅) = 0',
        ],
        examples: [
          {
            example: 'Rolling a 6-sided die. What is P(even number)?',
            solution: 'Even: {2, 4, 6} → 3 outcomes\nP(even) = 3/6 = 1/2',
          },
        ],
        practice: [
          {
            problem: 'A box contains 3 red balls, 5 blue, 2 green. P(not drawing a red ball)?',
            solution: 'P = 7/10',
            steps: [
              'P(red) = 3/10',
              'P(not red) = 1 - 3/10 = 7/10',
            ],
          },
        ],
      },
      {
        title: 'Rules of Probability',
        theory: 'Addition Rule: P(A∪B) = P(A) + P(B) - P(A∩B)\nDisjoint (mutually exclusive) events: P(A∩B) = 0, so P(A∪B) = P(A) + P(B)\n\nMultiplication Rule (independent events): P(A∩B) = P(A) × P(B)\nConditional probability: P(A|B) = P(A∩B)/P(B)',
        keyPoints: [
          'Addition rule: P(A∪B) = P(A)+P(B)-P(A∩B)',
          'Independent events: P(A∩B) = P(A)·P(B)',
          'P(A|B) = P(A∩B)/P(B)',
          'Bayes\' theorem: P(A|B) = P(B|A)P(A)/P(B)',
        ],
        examples: [
          {
            example: 'P(A)=0.4, P(B)=0.3, P(A∩B)=0.1. Find P(A∪B).',
            solution: 'P(A∪B) = 0.4 + 0.3 - 0.1 = 0.6',
          },
        ],
        practice: [
          {
            problem: 'Flipping two coins. P(at least one head)?',
            solution: 'P = 3/4',
            steps: [
              'Sample space: {HH, HT, TH, TT}',
              'At least one head: {HH, HT, TH} → 3 outcomes',
              'P = 3/4',
              'Or: P = 1 - P(no heads) = 1 - 1/4 = 3/4',
            ],
          },
        ],
      },
    ],
  },

  // stat-003: Inferential Statistics
  'stat-003': {
    lessons: [
      {
        title: 'Sampling and Distributions',
        theory: 'Inferential statistics draws conclusions about a population from a sample. The normal (Gaussian) distribution is essential: symmetric about the mean, with the 68-95-99.7 rule (1σ, 2σ, 3σ).\n\nCentral Limit Theorem: the means of large samples are normally distributed, regardless of the population distribution. This enables statistical testing.',
        keyPoints: [
          'Normal distribution: N(μ, σ²)',
          '68-95-99.7 rule',
          'Central Limit Theorem',
          'Z-score: z = (x - μ)/σ',
        ],
        examples: [
          {
            example: 'Students have a mean grade μ=70, σ=10. What percentage have grades between 60 and 80?',
            solution: '60-80 is μ ± σ → approximately 68% of students',
          },
        ],
        practice: [
          {
            problem: 'Find the z-score if x=85, μ=70, σ=10.',
            solution: 'z = 1.5',
            steps: [
              'z = (x - μ)/σ = (85 - 70)/10 = 15/10 = 1.5',
            ],
          },
        ],
      },
    ],
  },

  // stat-004: Regression Analysis
  'stat-004': {
    lessons: [
      {
        title: 'Linear Regression',
        theory: 'Linear regression models the relationship between two variables: y = β₀ + β₁x + ε.\nβ₀ = intercept (value of y when x=0)\nβ₁ = slope coefficient (change in y per unit change in x)\n\nLeast squares method: minimize the sum Σ(yᵢ - ŷᵢ)².\nThe correlation coefficient r (-1 ≤ r ≤ 1) indicates the strength of the relationship.',
        keyPoints: [
          'ŷ = β₀ + β₁x (regression line)',
          'β₁ = Σ(x-x̄)(y-ȳ) / Σ(x-x̄)²',
          'R² = coefficient of determination',
          '|r| close to 1: strong linear relationship',
        ],
        examples: [
          {
            example: 'r = 0.85 between study time and grades. What does this indicate?',
            solution: 'Strong positive correlation: the more time spent studying, the higher the grade.',
          },
        ],
        practice: [
          {
            problem: 'If β₁ = 2.5 and β₀ = 10, predict y when x = 8.',
            solution: 'ŷ = 30',
            steps: [
              'ŷ = β₀ + β₁x',
              'ŷ = 10 + 2.5(8)',
              'ŷ = 10 + 20 = 30',
            ],
          },
        ],
      },
    ],
  },

  // stat-005: Bayesian Statistics
  'stat-005': {
    lessons: [
      {
        title: 'Bayes\' Theorem',
        theory: 'Bayes\' Theorem: P(A|B) = P(B|A)·P(A) / P(B)\nP(A) = prior probability (before observing data)\nP(A|B) = posterior probability (after observing data)\nP(B|A) = likelihood\n\nBayesian approach: start with a prior belief, update it with data to obtain the posterior.',
        keyPoints: [
          'P(A|B) = P(B|A)P(A)/P(B)',
          'Prior: belief before observing data',
          'Posterior: belief after observing data',
          'Likelihood = P(data | hypothesis)',
        ],
        examples: [
          {
            example: 'Diagnostic test: 95% accuracy. The disease affects 1% of the population. If the test is positive, what is the probability of having the disease?',
            solution: 'P(disease|+) = 0.95×0.01/(0.95×0.01 + 0.05×0.99) ≈ 16%\nEven with a positive test, only a 16% chance!',
          },
        ],
        practice: [
          {
            problem: 'Two boxes: A (3 red, 2 blue), B (1 red, 4 blue). A box is chosen at random, and a red ball is drawn. What is P(from box A)?',
            solution: 'P(A|red) = 3/4',
            steps: [
              'P(A)=P(B)=0.5',
              'P(red|A)=3/5, P(red|B)=1/5',
              'P(red) = 0.5(3/5)+0.5(1/5) = 2/5',
              'P(A|red) = (3/5×0.5)/(2/5) = 3/4',
            ],
          },
        ],
      },
    ],
  },

  // stat-006: Time Series Analysis
  'stat-006': {
    lessons: [
      {
        title: 'Components of Time Series',
        theory: 'A time series is a sequence of observations over time. Components: trend (long-term direction), seasonality (regular periodic variation), cycle (medium-term movement), randomness (irregular fluctuation).\n\nY_t = T_t + S_t + C_t + R_t (additive model)\nY_t = T_t × S_t × C_t × R_t (multiplicative model)',
        keyPoints: [
          'Trend: long-term direction',
          'Seasonality: periodic (annual, weekly)',
          'Cycle: economic movement spanning 3-10 years',
          'Moving average: eliminates randomness',
        ],
        examples: [
          {
            example: 'Sales are: Jan=100, Feb=90, Mar=120, Apr=110. Find the moving average with window 3.',
            solution: 'M₂ = (100+90+120)/3 = 103.3\nM₃ = (90+120+110)/3 = 106.7',
          },
        ],
        practice: [
          {
            problem: 'Which component of a time series explains high sales every December each year?',
            solution: 'Seasonality - annual periodic variation',
            steps: [
              'Occurs every December = regular and periodic',
              'Period = 1 year',
              'This is seasonality',
            ],
          },
        ],
      },
    ],
  },

  // ===== LINEAR ALGEBRA =====

  // linalg-001: Vectors and Matrices
  'linalg-001': {
    lessons: [
      {
        title: 'Vectors and Operations',
        theory: 'A vector has magnitude (modulus) and direction. It is denoted as v = (v₁, v₂, ..., vₙ).\nAddition: u + v = (u₁+v₁, u₂+v₂, ...)\nScalar multiplication: kv = (kv₁, kv₂, ...)\nDot product: u·v = Σuᵢvᵢ = |u||v|cos θ\n\nCross product (3D): u × v = determinant of a 3×3 matrix. The result is perpendicular to both vectors.',
        keyPoints: [
          'u + v = (u₁+v₁, u₂+v₂)',
          'u·v = Σuᵢvᵢ (dot product)',
          'u·v = 0 → perpendicular vectors',
          'u×v = normal vector (3D)',
        ],
        examples: [
          {
            example: 'u=(3,4), v=(1,-2). Find u·v and |u|.',
            solution: 'u·v = 3(1)+4(-2) = -5\n|u| = √(9+16) = 5',
          },
        ],
        practice: [
          {
            problem: 'Are u=(2,3) and v=(6,-4) perpendicular?',
            solution: 'Yes, u·v = 0',
            steps: [
              'u·v = 2(6) + 3(-4) = 12-12 = 0',
              'Dot product = 0 → perpendicular',
            ],
          },
        ],
      },
      {
        title: 'Matrices and Operations',
        theory: 'An m×n matrix has m rows and n columns. Operations:\nAddition/Subtraction: A ± B (same dimensions)\nScalar multiplication: kA\nMatrix multiplication: A(m×n) × B(n×p) = C(m×p). Element cᵢⱼ = row i of A × column j of B.\n\nIdentity matrix I: A×I = I×A = A. Inverse matrix A⁻¹: A×A⁻¹ = I.',
        keyPoints: [
          'A×B: columns of A = rows of B (must match)',
          'AB ≠ BA (not commutative)',
          '(AB)C = A(BC) (associative)',
          'Inverse matrix: A×A⁻¹ = I',
        ],
        examples: [
          {
            example: 'Multiply A=[[1,2],[3,4]] × B=[[5,6],[7,8]]',
            solution: 'c₁₁ = 1×5+2×7=19, c₁₂ = 1×6+2×8=22\nc₂₁ = 3×5+4×7=43, c₂₂ = 3×6+4×8=50\nC = [[19,22],[43,50]]',
          },
        ],
        practice: [
          {
            problem: 'Find the determinant of A = [[3,2],[1,4]]',
            solution: 'det(A) = 10',
            steps: [
              'det(A) = ad - bc',
              '= 3×4 - 2×1',
              '= 12 - 2 = 10',
            ],
          },
        ],
      },
    ],
  },

  // linalg-002: Linear Systems
  'linalg-002': {
    lessons: [
      {
        title: 'Solving Systems by Gaussian Elimination',
        theory: 'A system of linear equations can be solved using the augmented matrix [A|b]. Gaussian elimination transforms the matrix into echelon (staircase) form using elementary row operations: row swapping, scalar multiplication, and adding a multiple of one row to another.\n\nReduced row echelon form (RREF): each leading column has a 1 and zeros everywhere else. This yields the solution directly.',
        keyPoints: [
          'Augmented matrix [A|b]',
          'Elementary operations: Rᵢ ↔ Rⱼ, kRᵢ, Rᵢ+kRⱼ',
          'RREF: leading 1, zeros everywhere else',
          'n variables, n equations = usually 1 solution',
        ],
        examples: [
          {
            example: 'Solve: x+y=5 and 2x-y=4',
            solution: '[1 1|5]\n[2 -1|4]\nR₂ = R₂-2R₁:\n[1 1|5]\n[0 -3|-6]\nSo y=2, x=3',
          },
        ],
        practice: [
          {
            problem: 'Solve by elimination: x+2y=8, 3x-y=3',
            solution: 'x=2, y=3',
            steps: [
              '[1 2|8], [3 -1|3]',
              'R₂ = R₂-3R₁: [0 -7|-21] → y=3',
              'Substitute: x+6=8 → x=2',
            ],
          },
        ],
      },
    ],
  },

  // linalg-003: Vector Spaces
  'linalg-003': {
    lessons: [
      {
        title: 'Vector Spaces and Subspaces',
        theory: 'A vector space V over a field F satisfies 8 axioms (closure under addition and scalar multiplication, etc.). Examples: ℝⁿ, C[a,b] (continuous functions), Pₙ (polynomials).\n\nSubspace: a subset that is closed under operations and contains the zero vector. Span{v₁,...,vₖ} is the generated subspace.\n\nLinear independence: v₁,...,vₖ are linearly independent if c₁v₁+...+cₖvₖ=0 implies cᵢ=0.',
        keyPoints: [
          '8 axioms of a vector space',
          'Subspace: closure + zero vector',
          'Span: all linear combinations',
          'Basis: linearly independent + spans the whole space',
        ],
        examples: [
          {
            example: 'Are v₁=(1,0,1), v₂=(0,1,1), v₃=(1,1,0) linearly independent?',
            solution: 'det[v₁ v₂ v₃] = 1(0-1)-0+1(0-1) = -2 ≠ 0\nYes, they are independent.',
          },
        ],
        practice: [
          {
            problem: 'Find a basis for the subspace Span{(1,2,3),(2,4,6)}.',
            solution: '{(1,2,3)} - only one vector (the other is proportional)',
            steps: [
              '(2,4,6) = 2(1,2,3) → proportional',
              'They are linearly dependent',
              'Basis: {(1,2,3)}',
            ],
          },
        ],
      },
    ],
  },

  // linalg-004: Eigenvalues and Eigenvectors
  'linalg-004': {
    lessons: [
      {
        title: 'Eigenvalues and Eigenvectors',
        theory: 'An eigenvector v and eigenvalue λ satisfy Av = λv. The characteristic polynomial: det(A - λI) = 0 gives the eigenvalues.\n\nSteps: 1) Solve det(A-λI)=0 for λ, 2) For each λ, solve (A-λI)v=0 for v.\n\nApplications: PageRank (Google), PCA (machine learning), natural oscillations, quantum mechanics.',
        keyPoints: [
          'Av = λv (definition)',
          'det(A-λI)=0 (characteristic polynomial)',
          'Eigenspace = null(A-λI)',
          'Diagonalization: A = PDP⁻¹',
        ],
        examples: [
          {
            example: 'Find the eigenvalues of A = [[2,1],[0,3]]',
            solution: 'det(A-λI) = (2-λ)(3-λ) = 0\nλ₁=2, λ₂=3',
          },
        ],
        practice: [
          {
            problem: 'Find the eigenvalues of A = [[5,0],[0,2]]',
            solution: 'λ₁=5, λ₂=2',
            steps: [
              'Diagonal matrix: eigenvalues = diagonal elements',
              'λ₁=5, λ₂=2',
            ],
          },
        ],
      },
    ],
  },

  // linalg-005: Numerical Analysis
  'linalg-005': {
    lessons: [
      {
        title: 'The Newton-Raphson Method',
        theory: 'Newton-Raphson finds roots of f(x)=0: xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ). Convergence is quadratic (the number of correct digits roughly doubles with each iteration).\n\nSteps: 1) Start with an initial guess x₀, 2) Apply the formula until convergence, 3) Stop when |f(xₙ)| < tolerance.',
        keyPoints: [
          'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)',
          'Quadratic convergence',
          'Requires f to be differentiable',
          'Start near the root for convergence',
        ],
        examples: [
          {
            example: 'Find √2 by solving x²-2=0 using Newton (x₀=1)',
            solution: 'x₁ = 1 - (1-2)/(2) = 1.5\nx₂ = 1.5 - (2.25-2)/3 = 1.417\nx₃ ≈ 1.4142 (≈ √2)',
          },
        ],
        practice: [
          {
            problem: 'Apply Newton-Raphson once: f(x)=x³-2, x₀=1.',
            solution: 'x₁ = 1.667',
            steps: [
              'f(1) = 1-2 = -1',
              "f'(x) = 3x², f'(1) = 3",
              'x₁ = 1 - (-1)/3 = 1 + 1/3 = 4/3 ≈ 1.333',
            ],
          },
        ],
      },
    ],
  },

  // ===== NUMBER THEORY =====

  // numth-001: Elementary Number Theory
  'numth-001': {
    lessons: [
      {
        title: 'Divisors and GCD/LCM',
        theory: 'a divides b (a|b) if b = a×k for some integer k. The GCD (Greatest Common Divisor) is found using the Euclidean algorithm: GCD(a, b) = GCD(b, a mod b).\n\nLCM (Least Common Multiple): LCM(a, b) = a×b / GCD(a, b).\n\nPrime numbers have exactly two divisors: 1 and themselves. The Fundamental Theorem of Arithmetic: every integer greater than 1 has a unique prime factorization.',
        keyPoints: [
          'GCD by the Euclidean algorithm: GCD(a,b)=GCD(b,a%b)',
          'LCM(a,b) = a×b/GCD(a,b)',
          'Prime factorization: unique',
          'Infinitely many primes (Euclid)',
        ],
        examples: [
          {
            example: 'Find GCD(48, 18)',
            solution: 'GCD(48,18)=GCD(18,12)=GCD(12,6)=GCD(6,0)=6',
          },
          {
            example: 'Find LCM(12, 8)',
            solution: 'GCD(12,8)=4\nLCM = 12×8/4 = 24',
          },
        ],
        practice: [
          {
            problem: 'Find the GCD and LCM of 60 and 45.',
            solution: 'GCD=15, LCM=180',
            steps: [
              'GCD(60,45)=GCD(45,15)=GCD(15,0)=15',
              'LCM = 60×45/15 = 180',
            ],
          },
        ],
      },
      {
        title: 'Congruence and Modular Arithmetic',
        theory: 'a ≡ b (mod n) means n divides (a-b), or equivalently, a and b have the same remainder when divided by n.\n\nArithmetic operations are preserved: (a+b) mod n = ((a mod n)+(b mod n)) mod n, and similarly for multiplication.\n\nFermat\'s Little Theorem: if p is prime and p does not divide a, then aᵖ⁻¹ ≡ 1 (mod p). This has cryptographic applications.',
        keyPoints: [
          'a ≡ b (mod n) ↔ n|(a-b)',
          'Addition and multiplication are preserved mod n',
          'Fermat\'s Little Theorem: aᵖ⁻¹ ≡ 1 (mod p)',
          'Application: RSA cryptography',
        ],
        examples: [
          {
            example: 'Find 17 mod 5',
            solution: '17 = 3×5 + 2\n17 mod 5 = 2\nOr: 17 ≡ 2 (mod 5)',
          },
        ],
        practice: [
          {
            problem: 'What day of the week is it 100 days after a Friday? (1=Monday, 7=Sunday)',
            solution: 'Friday',
            steps: [
              'Friday = day 5',
              '(5 + 100) mod 7 = 105 mod 7',
              '105 = 15×7 + 0 → 105 mod 7 = 0',
              '0 mod 7 = 0 = Sunday',
              'Wait: 105/7=15 exactly, so it is exactly Sunday',
            ],
          },
        ],
      },
    ],
  },

  // numth-002: Advanced Number Theory
  'numth-002': {
    lessons: [
      {
        title: 'Diophantine Equations',
        theory: 'Diophantine equations require integer solutions. The linear equation ax + by = c has a solution if and only if GCD(a,b) divides c.\n\nThe Extended Euclidean Algorithm finds coefficients x, y in GCD(a,b) = ax + by, which helps us find the solution.\n\nQuadratic Diophantine equations are much harder and are connected to Fermat\'s Last Theorem.',
        keyPoints: [
          'ax+by=c: solution exists ↔ GCD(a,b)|c',
          'Extended Euclidean Algorithm',
          'If (x₀,y₀) is a solution, others are: x=x₀+bt, y=y₀-at',
          'Pythagorean triples: a²+b²=c² (Diophantine)',
        ],
        examples: [
          {
            example: 'Solve: 3x + 5y = 1',
            solution: 'GCD(3,5)=1|1 ✓\nBy Euclid: 5=1×3+2, 3=1×2+1\n1=3-1×2=3-(5-3)=2×3-5\nx₀=2, y₀=-1',
          },
        ],
        practice: [
          {
            problem: 'Does 6x + 4y = 3 have a solution?',
            solution: 'No, GCD(6,4)=2, but 2 does not divide 3',
            steps: [
              'GCD(6,4) = 2',
              'Does 2 divide 3? 3/2 = 1.5 (no)',
              'The condition 2|3 is not satisfied',
              'No integer solution exists',
            ],
          },
        ],
      },
    ],
  },
};
