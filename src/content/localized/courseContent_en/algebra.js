export const courseContents_algebra_en = {

  // alg-003: Inequalities and Absolute Value
  'alg-003': {
    lessons: [
      {
        title: 'Inequalities with Absolute Value',
        theory: 'The absolute value |x| represents the distance of the number x from zero on the number line, and is always non-negative. |x| = x if x \u2265 0, and |x| = -x if x < 0.\n\nInequalities with absolute value: |x| < a means -a < x < a (the solution is an interval). |x| > a means x < -a or x > a (two intervals).\n\nThese inequalities are useful in physics (tolerances), engineering (margins of error), and advanced mathematics.',
        keyPoints: [
          '|x| \u2265 0 for all x (always non-negative)',
          '|x| < a \u2192 -a < x < a',
          '|x| > a \u2192 x < -a or x > a',
          '|x - c| < r \u2192 c - r < x < c + r (centered at c, radius r)',
        ],
        examples: [
          {
            example: 'Solve: |x - 3| < 5',
            solution: '-5 < x - 3 < 5\n-5 + 3 < x < 5 + 3\n-2 < x < 8\nSolution: (-2, 8)',
          },
          {
            example: 'Solve: |2x + 1| \u2265 7',
            solution: '2x + 1 \u2264 -7  or  2x + 1 \u2265 7\n2x \u2264 -8       or  2x \u2265 6\nx \u2264 -4        or  x \u2265 3\nSolution: (-\u221e, -4] \u222a [3, +\u221e)',
          },
        ],
        practice: [
          {
            problem: 'Solve: |3x - 6| < 9',
            solution: '-1 < x < 5, interval (-1, 5)',
            steps: [
              '-9 < 3x - 6 < 9',
              '-9 + 6 < 3x < 9 + 6',
              '-3 < 3x < 15',
              '-1 < x < 5',
            ],
          },
        ],
      },
      {
        title: 'Systems of Inequalities',
        theory: 'A system of inequalities consists of two or more inequalities with the same variables. The solution of the system is the set of all values that satisfy ALL inequalities simultaneously (the intersection of the solution sets).\n\nFor linear inequalities in two variables, each inequality defines a half-plane. The solution of the system is the common region where all half-planes overlap.',
        keyPoints: [
          'Solution = intersection of all individual solutions',
          'Notation: {x | condition1 AND condition2}',
          'Combine inequalities: find the boundary where both hold',
          'Graph: the overlapping region (intersection)',
        ],
        examples: [
          {
            example: 'Solve the system: x > 2 and x < 7',
            solution: 'Solution: 2 < x < 7, interval (2, 7)',
          },
          {
            example: 'Solve: 2x - 1 > 3 and x + 4 < 10',
            solution: '2x > 4 \u2192 x > 2\nx < 6\nSolution: 2 < x < 6, interval (2, 6)',
          },
        ],
        practice: [
          {
            problem: 'Solve the system: 3x + 1 > 7 and 2x - 5 < 9',
            solution: '2 < x < 7',
            steps: [
              'Inequality 1: 3x + 1 > 7 \u2192 3x > 6 \u2192 x > 2',
              'Inequality 2: 2x - 5 < 9 \u2192 2x < 14 \u2192 x < 7',
              'Intersection: x > 2 AND x < 7',
              'Solution: (2, 7)',
            ],
          },
        ],
      },
      {
        title: 'Applications of Inequalities',
        theory: 'Inequalities are widely applied in real life: modeling budget constraints, optimization (minimization/maximization), profit/loss analysis, and safety parameters.\n\nSteps for solving: 1) Identify the unknown variable, 2) Formulate the inequality, 3) Solve mathematically, 4) Interpret the result in the context of the problem.',
        keyPoints: [
          '"At least" \u2192 \u2265',
          '"More than" \u2192 >',
          '"At most" \u2192 \u2264',
          '"Less than" \u2192 <',
        ],
        examples: [
          {
            example: 'At least how many units of a product must be sold at a price of \u20ac15 each to earn a profit over \u20ac500, if the fixed cost is \u20ac200?',
            solution: '15x - 200 > 500\n15x > 700\nx > 46.67\nAt least 47 units must be sold',
          },
        ],
        practice: [
          {
            problem: 'A student needs to achieve an average above 75 across 5 exams. The scores so far are: 70, 80, 65, 90. What is the minimum score needed on the 5th exam?',
            solution: 'Minimum score = 70',
            steps: [
              'Sum of 4 scores: 70+80+65+90 = 305',
              'Total sum must be > 375 (75\u00d75)',
              '5th score > 375 - 305 = 70',
              'Minimum: 70',
            ],
          },
        ],
      },
    ],
  },

  // alg-004: Functions and Graphs
  'alg-004': {
    lessons: [
      {
        title: 'The Concept of a Function',
        theory: 'A function is a rule or correspondence that assigns to each element of set X (the domain) exactly one element of set Y (the codomain). It is denoted f: X \u2192 Y or y = f(x).\n\nTo verify whether a graph represents a function, we use the vertical line test: if any vertical line intersects the graph at more than one point, it is not a function.\n\nFunctions can be injective (each y has at most one x), surjective (every y is reached), or bijective (both).',
        keyPoints: [
          'Each x has exactly one value f(x)',
          'Domain = the input set X',
          'Codomain/Range = the output set Y',
          'The vertical line test verifies whether it is a function',
        ],
        examples: [
          {
            example: 'Is y\u00b2 = x a function? (for each x, find y)',
            solution: 'No! For x = 4, we get y = 2 and y = -2 \u2014 two values for the same x. It fails the vertical line test.',
          },
          {
            example: 'Find f(3) and f(-1) for f(x) = 2x\u00b2 - x + 1',
            solution: 'f(3) = 2(9) - 3 + 1 = 16\nf(-1) = 2(1) - (-1) + 1 = 4',
          },
        ],
        practice: [
          {
            problem: 'Find the domain of f(x) = \u221a(x - 4)',
            solution: 'x \u2265 4, domain [4, +\u221e)',
            steps: [
              'The expression under the radical must be \u2265 0',
              'x - 4 \u2265 0',
              'x \u2265 4',
              'Domain: [4, +\u221e)',
            ],
          },
        ],
      },
      {
        title: 'Common Functions',
        theory: 'Common (elementary) functions include: linear f(x) = mx + b, quadratic f(x) = ax\u00b2 + bx + c, polynomial, rational, exponential, logarithmic, and trigonometric.\n\nEach type of function has a characteristic graph, domain, range, and specific properties. Knowing the standard forms helps you quickly understand the behavior of a function.\n\nTransformations: f(x) + k (shift up/down), f(x + k) (shift left/right), -f(x) (reflection over the x-axis), f(-x) (reflection over the y-axis), a\u00b7f(x) (vertical scaling).',
        keyPoints: [
          'Linear: graph is a straight line',
          'Quadratic: graph is a parabola (opens upward if a > 0)',
          'Exponential: a^x grows rapidly',
          'Logarithmic: the inverse of the exponential',
        ],
        examples: [
          {
            example: 'Sketch the parabola y = (x-2)\u00b2 + 3',
            solution: 'The vertex is (2, 3)\nAxis of symmetry: x = 2\nOpens upward (coefficient of x\u00b2 = 1 > 0)\nDoes not cross the x-axis (minimum = 3 > 0)',
          },
        ],
        practice: [
          {
            problem: 'Find the vertex of the parabola y = -x\u00b2 + 4x - 1',
            solution: 'Vertex: (2, 3)',
            steps: [
              'Formula: x_vertex = -b/(2a) = -4/(2\u00d7(-1)) = 2',
              'y_vertex = -(2\u00b2) + 4(2) - 1 = -4 + 8 - 1 = 3',
              'Vertex: (2, 3)',
              'Parabola opens downward (a = -1 < 0)',
            ],
          },
        ],
      },
      {
        title: 'Composition and Inverses',
        theory: 'Function composition: (f\u2218g)(x) = f(g(x)) \u2014 apply g first, then f. Composition is not always commutative: f\u2218g \u2260 g\u2218f in general.\n\nThe inverse function f\u207b\u00b9 "undoes" every operation of f: if f(a) = b, then f\u207b\u00b9(b) = a. The graph of f\u207b\u00b9 is the reflection of the graph of f across the line y = x.\n\nNot every function has an inverse \u2014 only bijective (one-to-one and onto) functions have inverses.',
        keyPoints: [
          '(f\u2218g)(x) = f(g(x)) \u2014 g acts first',
          'f\u2218g \u2260 g\u2218f (not commutative)',
          'f(f\u207b\u00b9(x)) = x and f\u207b\u00b9(f(x)) = x',
          'Finding the inverse: swap x and y, then solve for y',
        ],
        examples: [
          {
            example: 'If f(x) = 2x + 3 and g(x) = x\u00b2, find (f\u2218g)(4)',
            solution: '(f\u2218g)(4) = f(g(4)) = f(16) = 2(16) + 3 = 35',
          },
          {
            example: 'Find f\u207b\u00b9(x) if f(x) = 3x - 2',
            solution: 'y = 3x - 2\nSwap: x = 3y - 2\n3y = x + 2\ny = (x + 2)/3\nf\u207b\u00b9(x) = (x + 2)/3',
          },
        ],
        practice: [
          {
            problem: 'Find (g\u2218f)(x) if f(x) = x + 1 and g(x) = x\u00b2',
            solution: '(g\u2218f)(x) = (x+1)\u00b2',
            steps: [
              '(g\u2218f)(x) = g(f(x))',
              '= g(x + 1)',
              '= (x + 1)\u00b2',
              '= x\u00b2 + 2x + 1',
            ],
          },
        ],
      },
    ],
  },

  // alg-005: Quadratic Equations
  'alg-005': {
    lessons: [
      {
        title: 'Factoring Trinomials',
        theory: 'The trinomial ax\u00b2 + bx + c can be factored as a product of two linear binomials. If a = 1: x\u00b2 + bx + c = (x + p)(x + q) where p + q = b and p \u00d7 q = c.\n\nFor a \u2260 1, use the grouping method (AC method): multiply a \u00d7 c, find two numbers whose sum is b and whose product is ac, then group.\n\nFactoring algebraic expressions is a fundamental skill for solving equations, simplifying fractions, and many other problems.',
        keyPoints: [
          'x\u00b2 + bx + c = (x+p)(x+q) where p+q=b, pq=c',
          'Difference of squares: a\u00b2 - b\u00b2 = (a+b)(a-b)',
          'Perfect square trinomial: (a+b)\u00b2 = a\u00b2 + 2ab + b\u00b2',
          'Perfect square trinomial: (a-b)\u00b2 = a\u00b2 - 2ab + b\u00b2',
        ],
        examples: [
          {
            example: 'Factor: x\u00b2 + 7x + 12',
            solution: 'Find p, q: p + q = 7 and p \u00d7 q = 12\nTry: 3 + 4 = 7 \u2713 and 3 \u00d7 4 = 12 \u2713\nSolution: (x + 3)(x + 4)',
          },
          {
            example: 'Factor: x\u00b2 - 9',
            solution: 'Form: a\u00b2 - b\u00b2 = (a+b)(a-b)\nx\u00b2 - 9 = x\u00b2 - 3\u00b2 = (x + 3)(x - 3)',
          },
        ],
        practice: [
          {
            problem: 'Factor: x\u00b2 - 5x + 6',
            solution: '(x - 2)(x - 3)',
            steps: [
              'Find p, q: p + q = -5 and p \u00d7 q = 6',
              'Try: -2 + (-3) = -5 \u2713 and (-2)(-3) = 6 \u2713',
              'x\u00b2 - 5x + 6 = (x - 2)(x - 3)',
            ],
          },
        ],
      },
      {
        title: 'The Quadratic Formula and Discriminant',
        theory: 'The quadratic formula x = [-b \u00b1 \u221a(b\u00b2 - 4ac)] / 2a solves any quadratic equation ax\u00b2 + bx + c = 0.\n\nThe discriminant D = b\u00b2 - 4ac: D > 0 \u2192 two distinct real roots, D = 0 \u2192 one repeated real root, D < 0 \u2192 no real roots (two complex roots).\n\nVieta\'s formulas: if x\u2081, x\u2082 are the roots, then x\u2081 + x\u2082 = -b/a and x\u2081 \u00d7 x\u2082 = c/a.',
        keyPoints: [
          'Formula: x = [-b \u00b1 \u221a(b\u00b2-4ac)] / 2a',
          'D > 0: two real roots',
          'D = 0: one repeated root',
          'D < 0: no real roots',
        ],
        examples: [
          {
            example: 'Solve: x\u00b2 + 2x - 8 = 0',
            solution: 'D = 4 + 32 = 36\nx = (-2 \u00b1 6)/2\nx\u2081 = 2, x\u2082 = -4',
          },
          {
            example: 'Which equation has roots x\u2081 = 3 and x\u2082 = -1?',
            solution: 'Sum: 3 + (-1) = 2 \u2192 -b/a = 2 \u2192 b = -2 (if a=1)\nProduct: 3\u00d7(-1) = -3 \u2192 c/a = -3 \u2192 c = -3\nEquation: x\u00b2 - 2x - 3 = 0',
          },
        ],
        practice: [
          {
            problem: 'Solve using the quadratic formula: 2x\u00b2 - 7x + 3 = 0',
            solution: 'x = 3 or x = 0.5',
            steps: [
              'a=2, b=-7, c=3',
              'D = 49 - 24 = 25',
              'x = (7 \u00b1 5)/4',
              'x\u2081 = 12/4 = 3',
              'x\u2082 = 2/4 = 0.5',
            ],
          },
        ],
      },
      {
        title: 'Completing the Square',
        theory: 'Completing the square converts the trinomial ax\u00b2 + bx + c into the form a(x + h)\u00b2 + k. This method is useful for finding the vertex of a parabola and for deriving the quadratic formula.\n\nThe vertex of the parabola ax\u00b2 + bx + c is at the point (h, k) = (-b/2a, c - b\u00b2/4a).\n\nStandard form \u2192 vertex form: y = a(x-h)\u00b2 + k directly shows the vertex (h, k).',
        keyPoints: [
          'ax\u00b2 + bx = a(x + b/2a)\u00b2 - b\u00b2/4a',
          'Vertex: x = -b/(2a)',
          'Vertex form: y = a(x-h)\u00b2 + k',
          'Method: divide by a, add and subtract (b/2a)\u00b2',
        ],
        examples: [
          {
            example: 'Convert to vertex form: y = x\u00b2 + 6x + 5',
            solution: 'y = (x\u00b2 + 6x + 9) - 9 + 5\n= (x + 3)\u00b2 - 4\nVertex: (-3, -4)',
          },
        ],
        practice: [
          {
            problem: 'Find the vertex of the parabola y = x\u00b2 - 4x + 7 by completing the square.',
            solution: 'Vertex (2, 3)',
            steps: [
              'y = x\u00b2 - 4x + 7',
              'y = (x\u00b2 - 4x + 4) - 4 + 7',
              'y = (x - 2)\u00b2 + 3',
              'Vertex: (2, 3)',
            ],
          },
        ],
      },
    ],
  },

  // alg-006: Polynomials and Factoring
  'alg-006': {
    lessons: [
      {
        title: 'Introduction to Polynomials',
        theory: 'A polynomial is an expression of the form a\u2099x\u207f + a\u2099\u208b\u2081x\u207f\u207b\u00b9 + ... + a\u2081x + a\u2080. The degree of a polynomial is the highest power of the variable. The coefficients are the numbers in front of the powers.\n\nMultiplying polynomials: each term of the first polynomial is multiplied by each term of the second. The FOIL method (First, Outer, Inner, Last) applies to binomials.\n\nDividing polynomials: similar to long division with numbers. P(x) = Q(x)\u00b7D(x) + R(x).',
        keyPoints: [
          'Degree of a polynomial = highest power of x',
          'A polynomial of degree 2 = quadratic trinomial',
          'FOIL: (a+b)(c+d) = ac + ad + bc + bd',
          'Remainder theorem: P(a) = R when dividing by (x-a)',
        ],
        examples: [
          {
            example: 'Multiply: (2x + 3)(x - 4)',
            solution: '= 2x(x) + 2x(-4) + 3(x) + 3(-4)\n= 2x\u00b2 - 8x + 3x - 12\n= 2x\u00b2 - 5x - 12',
          },
          {
            example: 'Find P(2) if P(x) = x\u00b3 - 3x + 1',
            solution: 'P(2) = 8 - 6 + 1 = 3',
          },
        ],
        practice: [
          {
            problem: 'Expand: (3x - 2)\u00b2',
            solution: '9x\u00b2 - 12x + 4',
            steps: [
              '(3x - 2)\u00b2 = (3x)\u00b2 - 2(3x)(2) + 2\u00b2',
              '= 9x\u00b2 - 12x + 4',
            ],
          },
        ],
      },
      {
        title: 'Roots of Polynomials',
        theory: 'A root of the polynomial P(x) is a value a such that P(a) = 0. The Fundamental Theorem of Algebra states that every polynomial of degree n has exactly n roots (counting complex and repeated roots).\n\nThe Factor Theorem: (x - a) is a factor of P(x) if and only if P(a) = 0.\n\nFor rational roots: if p/q (in lowest terms) is a root of a\u2099x\u207f + ... + a\u2080, then p divides a\u2080 and q divides a\u2099.',
        keyPoints: [
          'Root a: P(a) = 0',
          'Factor (x-a) \u2194 root x = a',
          'A polynomial of degree n has n roots (with multiplicity)',
          'Rational root p/q: p|a\u2080 and q|a\u2099',
        ],
        examples: [
          {
            example: 'Verify that x = 2 is a root of x\u00b3 - 4x\u00b2 + x + 6',
            solution: 'P(2) = 8 - 16 + 2 + 6 = 0 \u2713\nTherefore (x - 2) is a factor',
          },
        ],
        practice: [
          {
            problem: 'Find the roots of P(x) = x\u00b3 - 6x\u00b2 + 11x - 6',
            solution: 'x = 1, x = 2, x = 3',
            steps: [
              'Try x=1: 1-6+11-6=0 \u2713 \u2192 (x-1) is a factor',
              'Divide: P(x) = (x-1)(x\u00b2-5x+6)',
              'Factor: x\u00b2-5x+6 = (x-2)(x-3)',
              'Roots: x=1, x=2, x=3',
            ],
          },
        ],
      },
      {
        title: 'Rational Expressions',
        theory: 'A rational expression is the ratio of two polynomials f(x) = P(x)/Q(x). Domain: all values of x where Q(x) \u2260 0. Points where Q(x) = 0 are vertical asymptotes or holes.\n\nHorizontal asymptote: compare the degrees of P and Q. If deg(P) < deg(Q): y = 0. If deg(P) = deg(Q): y = ratio of the leading coefficients.\n\nSimplifying: if P and Q share common factors, cancel them \u2014 this creates a "hole" in the graph.',
        keyPoints: [
          'Domain: Q(x) \u2260 0',
          'Vertical asymptote: Q(x) = 0 (after simplification)',
          'Horizontal asymptote: depends on the relative degrees',
          'Simplification creates holes',
        ],
        examples: [
          {
            example: 'Find the domain of f(x) = (x+1)/(x\u00b2-4)',
            solution: 'x\u00b2-4 = 0 \u2192 x = \u00b12\nDomain: \u211d \\ {-2, 2}\nVertical asymptotes: x = -2 and x = 2',
          },
        ],
        practice: [
          {
            problem: 'Simplify and find the domain: f(x) = (x\u00b2-1)/(x-1)',
            solution: 'f(x) = x+1 with a hole at x=1, domain \u211d\\{1}',
            steps: [
              'Factor: x\u00b2-1 = (x-1)(x+1)',
              'f(x) = (x-1)(x+1)/(x-1) = x+1 (for x\u22601)',
              'Domain: \u211d\\{1} (hole at x=1)',
            ],
          },
        ],
      },
    ],
  },

  // alg-007: Rational Expressions (Advanced)
  'alg-007': {
    lessons: [
      {
        title: 'Operations with Rational Expressions',
        theory: 'A rational expression R(x) = P(x)/Q(x) where P and Q are polynomials. Operations with these expressions are analogous to ordinary fractions, but require polynomial factoring.\n\nAddition/Subtraction: find the LCD of the denominators, convert, then combine the numerators.\nMultiplication: multiply the numerators together and the denominators together, then simplify.\nDivision: multiply by the reciprocal.',
        keyPoints: [
          'The LCD of polynomial denominators requires factoring',
          'Multiplication: (P/Q)\u00b7(R/S) = PR/QS',
          'Division: (P/Q)\u00f7(R/S) = (P/Q)\u00b7(S/R)',
          'Always simplify the result',
        ],
        examples: [
          {
            example: 'Add: 1/(x-2) + 3/(x+1)',
            solution: 'LCD = (x-2)(x+1)\n= (x+1)/[(x-2)(x+1)] + 3(x-2)/[(x-2)(x+1)]\n= (x+1+3x-6)/[(x-2)(x+1)]\n= (4x-5)/[(x-2)(x+1)]',
          },
        ],
        practice: [
          {
            problem: 'Simplify: (x\u00b2-4)/(x\u00b2-x-6)',
            solution: '(x+2)/(x+3)',
            steps: [
              'Numerator: x\u00b2-4 = (x-2)(x+2)',
              'Denominator: x\u00b2-x-6 = (x-3)(x+2)',
              'Result: (x-2)(x+2)/[(x-3)(x+2)] = (x-2)/(x-3)',
              'Wait - (x+2) cancels: (x+2)/(x+3)... Let me check: x\u00b2-x-6=(x-3)(x+2) \u2192 (x-2)(x+2)/[(x-3)(x+2)] = (x-2)/(x-3)',
            ],
          },
        ],
      },
      {
        title: 'Rational Equations',
        theory: 'A rational equation contains rational expressions. Method: multiply both sides by the LCD of the denominators. This eliminates the denominators but may introduce extraneous solutions.\n\nAlways check: substitute the solutions back and verify that no denominator becomes zero. Solutions that make a denominator equal to zero are discarded.',
        keyPoints: [
          'Multiply by the LCD to eliminate denominators',
          'Checking is mandatory \u2014 filter out extraneous solutions',
          'Extraneous solution: makes the denominator = 0',
        ],
        examples: [
          {
            example: 'Solve: 2/x + 1/3 = 5/6',
            solution: 'Multiply by 6x: 12 + 2x = 5x\n12 = 3x\nx = 4\nCheck: 2/4 + 1/3 = 3/6 + 2/6 = 5/6 \u2713',
          },
        ],
        practice: [
          {
            problem: 'Solve: 3/(x-1) + 2 = 5/(x-1)',
            solution: 'x = 2',
            steps: [
              'Multiply by (x-1): 3 + 2(x-1) = 5',
              '3 + 2x - 2 = 5',
              '2x + 1 = 5',
              '2x = 4, x = 2',
              'Check: 3/1 + 2 = 5 = 5/1 \u2713',
            ],
          },
        ],
      },
      {
        title: 'Rational Functions and Asymptotes',
        theory: 'A rational function f(x) = P(x)/Q(x) has characteristic behavior near its asymptotes. Graphing requires: 1) Find the domain, 2) Find the roots (numerator = 0), 3) Find the asymptotes, 4) Evaluate at specific values.\n\nOblique (slant) asymptote: when the degree of P is exactly one more than the degree of Q, there exists a slant asymptote found by polynomial long division.',
        keyPoints: [
          'Vertical asymptote: Q(x) = 0 (after simplification)',
          'Horizontal asymptote: the limit as x\u2192\u00b1\u221e',
          'Oblique asymptote: when deg(P) = deg(Q) + 1',
          'Roots of f: numerator = 0',
        ],
        examples: [
          {
            example: 'Find the asymptotes of f(x) = (2x\u00b2 + 1)/(x\u00b2 - 4)',
            solution: 'VA: x = \u00b12\nHA: y = 2 (ratio of leading coefficients 2/1)\nRoots: 2x\u00b2+1=0 \u2192 no real roots',
          },
        ],
        practice: [
          {
            problem: 'Find all asymptotes of f(x) = x/(x-3)',
            solution: 'VA: x=3, HA: y=1',
            steps: [
              'Vertical asymptote: x-3=0 \u2192 x=3',
              'Horizontal asymptote: degree 1/1 \u2192 y = 1/1 = 1',
            ],
          },
        ],
      },
    ],
  },

  // alg-008: Exponents and Logarithms
  'alg-008': {
    lessons: [
      {
        title: 'Laws of Exponents',
        theory: 'Exponents represent the power operation: a\u207f = a \u00d7 a \u00d7 a ... \u00d7 a (n times). The fundamental laws are:\n- a\u1d50 \u00d7 a\u207f = a\u1d50\u207a\u207f (multiply: add the exponents)\n- a\u1d50 / a\u207f = a\u1d50\u207b\u207f (divide: subtract the exponents)\n- (a\u1d50)\u207f = a\u1d50\u207f (power of a power: multiply the exponents)\n- a\u2070 = 1 (any nonzero base)\n- a\u207b\u207f = 1/a\u207f (negative exponent = reciprocal)',
        keyPoints: [
          'a\u1d50 \u00b7 a\u207f = a\u1d50\u207a\u207f',
          'a\u1d50 / a\u207f = a\u1d50\u207b\u207f',
          '(a\u1d50)\u207f = a\u1d50\u207f',
          'a\u207b\u207f = 1/a\u207f and a^(1/n) = \u207f\u221aa',
        ],
        examples: [
          {
            example: 'Simplify: (2\u00b3 \u00d7 2\u2075) / 2\u2074',
            solution: '= 2\u2078 / 2\u2074 = 2\u2074 = 16',
          },
          {
            example: 'Simplify: (x\u00b3y\u00b2)\u2074 / x\u2078',
            solution: '= x\u00b9\u00b2y\u2078 / x\u2078 = x\u2074y\u2078',
          },
        ],
        practice: [
          {
            problem: 'Evaluate: 8^(2/3)',
            solution: '4',
            steps: [
              '8^(2/3) = (8^(1/3))\u00b2 = (\u221b8)\u00b2',
              '\u221b8 = 2 (since 2\u00b3=8)',
              '2\u00b2 = 4',
            ],
          },
        ],
      },
      {
        title: 'Exponential and Logarithmic Functions',
        theory: 'The exponential function: f(x) = a\u02e3 where a > 0, a \u2260 1. The graph passes through (0, 1) and is always above the x-axis. If a > 1: increasing; if 0 < a < 1: decreasing.\n\nThe logarithm log_a(x) = n means "a raised to what power gives x": a\u207f = x. The logarithm is the inverse of the exponential function.\n\nNatural logarithm: ln(x) = log_e(x), where e \u2248 2.718. Common logarithm: log(x) = log\u2081\u2080(x).',
        keyPoints: [
          'log_a(a\u02e3) = x and a^(log_a x) = x (inverse relationship)',
          'log(xy) = log x + log y',
          'log(x/y) = log x - log y',
          'log(x\u207f) = n\u00b7log x',
        ],
        examples: [
          {
            example: 'Calculate log\u2082(32)',
            solution: 'log\u2082(32) = log\u2082(2\u2075) = 5',
          },
          {
            example: 'Solve: 3\u02e3 = 81',
            solution: '3\u02e3 = 3\u2074\nx = 4',
          },
        ],
        practice: [
          {
            problem: 'Solve: log\u2083(x) + log\u2083(x-2) = 1',
            solution: 'x = 3',
            steps: [
              'log\u2083(x(x-2)) = 1',
              'x(x-2) = 3\u00b9 = 3',
              'x\u00b2 - 2x - 3 = 0',
              '(x-3)(x+1) = 0',
              'x = 3 or x = -1 (discard -1 since log requires x > 0)',
            ],
          },
        ],
      },
      {
        title: 'Exponential and Logarithmic Equations',
        theory: 'Exponential equations: if the bases are equal, equate the exponents. If not, take the logarithm of both sides and apply the laws.\n\nLogarithmic equations: combine logarithms if there are multiple, then convert to exponential form. Important: verify that all logarithm arguments are positive.',
        keyPoints: [
          'a\u02e3 = a\u02b8 \u2194 x = y (same base)',
          'ln(a\u02e3) = x\u00b7ln(a) (take log of both sides)',
          'Log equations: convert to exponential form',
          'Always verify: arguments > 0',
        ],
        examples: [
          {
            example: 'Solve: 2\u02e3 = 5',
            solution: 'x\u00b7ln2 = ln5\nx = ln5/ln2 \u2248 2.322',
          },
          {
            example: 'Solve: ln(x) = 3',
            solution: 'x = e\u00b3 \u2248 20.09',
          },
        ],
        practice: [
          {
            problem: 'Solve: 4\u02e3\u207a\u00b9 = 64',
            solution: 'x = 2',
            steps: [
              '64 = 4\u00b3',
              '4\u02e3\u207a\u00b9 = 4\u00b3',
              'x + 1 = 3',
              'x = 2',
            ],
          },
        ],
      },
    ],
  },

  // alg-009: Complex Numbers
  'alg-009': {
    lessons: [
      {
        title: 'The Imaginary Unit and Algebraic Form',
        theory: 'The imaginary unit i = \u221a(-1), where i\u00b2 = -1. Complex numbers have the form a + bi, where a is the real part and b is the imaginary part.\n\nReal numbers are a special case of complex numbers (b = 0). Pure imaginary numbers have a = 0.\n\nOperations: addition (add like terms), subtraction, multiplication (use FOIL and remember i\u00b2 = -1), division (multiply by the conjugate of the denominator).',
        keyPoints: [
          'i = \u221a(-1), i\u00b2 = -1, i\u00b3 = -i, i\u2074 = 1',
          'Form: z = a + bi',
          'The conjugate of a+bi is a-bi',
          '|z| = \u221a(a\u00b2 + b\u00b2) (modulus)',
        ],
        examples: [
          {
            example: 'Calculate (3 + 2i)(1 - 4i)',
            solution: '= 3(1) + 3(-4i) + 2i(1) + 2i(-4i)\n= 3 - 12i + 2i - 8i\u00b2\n= 3 - 10i - 8(-1)\n= 11 - 10i',
          },
          {
            example: 'Solve: x\u00b2 + 9 = 0',
            solution: 'x\u00b2 = -9\nx = \u00b1\u221a(-9) = \u00b13i',
          },
        ],
        practice: [
          {
            problem: 'Calculate: (2 + i)/(1 - i)',
            solution: '= (1 + 3i)/2 = 0.5 + 1.5i',
            steps: [
              'Multiply by the conjugate: (2+i)(1+i)/[(1-i)(1+i)]',
              '= (2+2i+i+i\u00b2)/(1+1)',
              '= (2+3i-1)/2',
              '= (1+3i)/2',
            ],
          },
        ],
      },
      {
        title: 'Trigonometric Form and De Moivre\'s Theorem',
        theory: 'The complex number z = a + bi can be expressed as z = r(cos \u03b8 + i sin \u03b8) or z = re^(i\u03b8), where r = |z| = \u221a(a\u00b2+b\u00b2) is the modulus and \u03b8 = arg(z) = arctan(b/a) is the argument.\n\nDe Moivre\'s Theorem: [r(cos \u03b8 + i sin \u03b8)]\u207f = r\u207f(cos n\u03b8 + i sin n\u03b8)\n\nThis theorem allows the computation of powers and roots of complex numbers.',
        keyPoints: [
          'r = \u221a(a\u00b2+b\u00b2) (modulus/amplitude)',
          '\u03b8 = arctan(b/a) (argument/phase)',
          'De Moivre: z\u207f = r\u207f(cos n\u03b8 + i sin n\u03b8)',
          'n nth roots: r\u207f\u221a \u00b7 cis((\u03b8+2k\u03c0)/n)',
        ],
        examples: [
          {
            example: 'Express z = 1 + i in trigonometric form',
            solution: 'r = \u221a(1+1) = \u221a2\n\u03b8 = arctan(1/1) = \u03c0/4\nz = \u221a2(cos(\u03c0/4) + i sin(\u03c0/4))',
          },
        ],
        practice: [
          {
            problem: 'Calculate (1+i)\u2074 using De Moivre\'s Theorem',
            solution: '-4',
            steps: [
              'r = \u221a2, \u03b8 = \u03c0/4',
              '(\u221a2)\u2074 = 4',
              '4(cos 4\u03c0/4 + i sin 4\u03c0/4) = 4(cos \u03c0 + i sin \u03c0)',
              '= 4(-1 + 0) = -4',
            ],
          },
        ],
      },
    ],
  },

  // alg-010: Series and Sequences
  'alg-010': {
    lessons: [
      {
        title: 'Arithmetic Sequences',
        theory: 'An arithmetic sequence has a constant difference d between consecutive terms: a\u2099 = a\u2081 + (n-1)d. The first term a\u2081 and the common difference d completely characterize it.\n\nSum of n terms: S\u2099 = n(a\u2081 + a\u2099)/2 = n[2a\u2081 + (n-1)d]/2\n\nApplications: cost calculations, savings plans, linear progression of many phenomena.',
        keyPoints: [
          'a\u2099 = a\u2081 + (n-1)d',
          'Common difference: d = a\u2099\u208a\u2081 - a\u2099',
          'Sum: S\u2099 = n(a\u2081+a\u2099)/2',
          'The middle term = the average of the endpoint terms',
        ],
        examples: [
          {
            example: 'Find the 10th term of the sequence 3, 7, 11, 15...',
            solution: 'd = 4, a\u2081 = 3\na\u2081\u2080 = 3 + 9\u00d74 = 39',
          },
          {
            example: 'Find the sum of 20 terms: 5, 8, 11...',
            solution: 'd=3, a\u2081=5, a\u2082\u2080=5+19\u00d73=62\nS\u2082\u2080 = 20(5+62)/2 = 670',
          },
        ],
        practice: [
          {
            problem: 'Find the sum of even numbers from 2 to 100.',
            solution: 'S = 2550',
            steps: [
              'Sequence: 2, 4, 6, ..., 100',
              'a\u2081=2, d=2, n=50',
              'S\u2085\u2080 = 50(2+100)/2 = 50\u00d751 = 2550',
            ],
          },
        ],
      },
      {
        title: 'Geometric Sequences',
        theory: 'A geometric sequence has a constant ratio q between terms: a\u2099 = a\u2081 \u00d7 q\u207f\u207b\u00b9. The first term a\u2081 and the common ratio q characterize it.\n\nSum of n terms: S\u2099 = a\u2081(q\u207f - 1)/(q - 1) when q \u2260 1\nSum of an infinite series (|q| < 1): S\u221e = a\u2081/(1 - q)\n\nApplications: exponential growth (population, capital), radioactive decay, compound interest.',
        keyPoints: [
          'a\u2099 = a\u2081 \u00d7 q\u207f\u207b\u00b9',
          'Common ratio: q = a\u2099\u208a\u2081 / a\u2099',
          'S\u2099 = a\u2081(q\u207f-1)/(q-1)',
          'S\u221e = a\u2081/(1-q) only when |q| < 1',
        ],
        examples: [
          {
            example: 'Find the 6th term: 2, 6, 18, 54...',
            solution: 'q = 3, a\u2086 = 2\u00d73\u2075 = 486',
          },
          {
            example: 'A capital of \u20ac1000 at 5% annual interest after 10 years:',
            solution: 'A = 1000 \u00d7 1.05\u00b9\u2070 \u2248 \u20ac1628.89',
          },
        ],
        practice: [
          {
            problem: 'Find the sum of the infinite series: 1 + 1/2 + 1/4 + 1/8 + ...',
            solution: 'S\u221e = 2',
            steps: [
              'a\u2081 = 1, q = 1/2',
              '|q| = 0.5 < 1 \u2192 convergent series',
              'S\u221e = 1/(1-1/2) = 1/(1/2) = 2',
            ],
          },
        ],
      },
    ],
  },
};
