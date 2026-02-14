// English translations for all quiz sets

export const quizzesTranslations_en = {
  'arith-easy': {
    title: 'Basic Arithmetic',
    category: 'Arithmetic',
    duration: '5 min',
    questions: [
      {
        question: 'What is 7 × 8?',
        options: ['54', '56', '64', '48'],
        explanation:
          '7 × 8 = 56. When we multiply 7 by 8, we get 56. We can verify: 7 × 8 = 7 × (4 + 4) = 28 + 28 = 56.',
      },
      {
        question: 'Which number is a prime number?',
        options: ['15', '21', '17', '25'],
        explanation:
          '17 is a prime number because it is only divisible by 1 and itself. 15 = 3×5, 21 = 3×7, 25 = 5×5.',
      },
      {
        question: 'What is 144 ÷ 12?',
        options: ['10', '11', '12', '13'],
        explanation:
          '144 ÷ 12 = 12. We verify: 12 × 12 = 144. This is also the square of 12.',
      },
      {
        question: 'What is the result of 15² - 14²?',
        options: ['1', '29', '29', '31'],
        explanation:
          '15² - 14² = (15-14)(15+14) = 1 × 29 = 29. We used the formula a² - b² = (a-b)(a+b).',
      },
      {
        question: 'What is the GCD of 36 and 48?',
        options: ['6', '8', '12', '24'],
        explanation:
          'GCD(36, 48) = 12. Prime factorization: 36 = 2²×3² and 48 = 2⁴×3. So GCD = 2²×3 = 12.',
      },
      {
        question: 'What is 2⁵?',
        options: ['10', '16', '32', '64'],
        explanation:
          '2⁵ = 2×2×2×2×2 = 32. Step by step: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32.',
      },
      {
        question: 'Which number satisfies: □ × 9 = 81?',
        options: ['7', '8', '9', '10'],
        explanation:
          '9 × 9 = 81. So □ = 9. This means that 9 is the square root of 81.',
      },
      {
        question: 'What is the value of the expression: 3 + 4 × 2 - 1?',
        options: ['13', '10', '14', '9'],
        explanation:
          'Following the order of operations (PEMDAS): 3 + (4 × 2) - 1 = 3 + 8 - 1 = 10. Multiplication is performed before addition and subtraction.',
      },
      {
        question: 'What is one fifth of 100?',
        options: ['5', '10', '15', '20'],
        explanation:
          '100 ÷ 5 = 20. One fifth means we divide by 5. 100 / 5 = 20.',
      },
      {
        question: 'What is 3³ + 4²?',
        options: ['27', '43', '39', '91'],
        explanation:
          '3³ + 4² = 27 + 16 = 43. 3³ = 3×3×3 = 27 and 4² = 4×4 = 16. Together: 27 + 16 = 43.',
      },
    ],
  },
  'arith-medium': {
    title: 'Fractions & Percentages',
    category: 'Arithmetic',
    duration: '7 min',
    questions: [
      {
        question: 'What is 3/4 + 2/5?',
        options: ['5/9', '23/20', '1/2', '7/9'],
        explanation:
          '3/4 + 2/5 = 15/20 + 8/20 = 23/20. We found the common denominator 20: (3×5)/(4×5) + (2×4)/(5×4) = 15/20 + 8/20 = 23/20.',
      },
      {
        question: 'What is 40% of 250?',
        options: ['80', '90', '100', '110'],
        explanation:
          '40% of 250 = (40/100) × 250 = 0.4 × 250 = 100. We always divide the percentage by 100 then multiply.',
      },
      {
        question: 'What is 0.375 as a simplified fraction?',
        options: ['3/8', '3/10', '4/8', '1/3'],
        explanation:
          '0.375 = 375/1000 = 3/8. Simplifying: 375/1000 ÷ 125 = 3/8. Check: 3÷8 = 0.375 ✓',
      },
      {
        question:
          'If the price increased by 20%, from €80, what is the new price?',
        options: ['€90', '€96', '€100', '€106'],
        explanation:
          'New price = 80 + 20% × 80 = 80 + 16 = €96. Can also be calculated as: 80 × 1.2 = €96.',
      },
      {
        question: 'What is 2/3 × 3/4?',
        options: ['1/4', '6/12', '1/2', '5/12'],
        explanation:
          '2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2. We multiply numerators by numerators and denominators by denominators.',
      },
      {
        question: 'What percentage of 150 is 30?',
        options: ['15%', '20%', '25%', '30%'],
        explanation:
          'x = (30/150) × 100 = 0.2 × 100 = 20%. Formula: Percentage = (Part / Whole) × 100.',
      },
      {
        question: 'What is 5/6 ÷ 2/3?',
        options: ['10/18', '5/4', '15/12', '1/2'],
        explanation:
          '5/6 ÷ 2/3 = 5/6 × 3/2 = 15/12 = 5/4. When dividing by a fraction, we multiply by its reciprocal.',
      },
      {
        question:
          'If 3/5 of the class are girls and there are 30 students, how many boys are there?',
        options: ['10', '12', '16', '18'],
        explanation:
          'Girls: 3/5 × 30 = 18. Boys: 30 - 18 = 12. Or: Boys = 2/5 × 30 = 12.',
      },
      {
        question: 'What is the percentage increase from 80 to 100?',
        options: ['20%', '25%', '15%', '22%'],
        explanation:
          'Percentage increase = (100-80)/80 × 100 = 20/80 × 100 = 25%. Formula: ((New Value - Old Value) / Old Value) × 100.',
      },
      {
        question: 'Which number is between 1/3 and 1/2?',
        options: ['1/4', '2/5', '3/7', '5/12'],
        explanation:
          '2/5 = 0.4 is between 1/3 ≈ 0.333 and 1/2 = 0.5. We convert to decimals to compare.',
      },
    ],
  },
  'alg-easy': {
    title: 'Basic Algebra',
    category: 'Algebra',
    duration: '8 min',
    questions: [
      {
        question: 'Solve: 2x + 5 = 13',
        options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
        explanation:
          '2x + 5 = 13 → 2x = 13 - 5 = 8 → x = 8/2 = 4. Step 1: Subtract 5 from both sides. Step 2: Divide by 2.',
      },
      {
        question: 'Simplify the expression: 3a + 2b - a + 4b',
        options: ['2a + 6b', '4a + 6b', '2a + 2b', '3a + 6b'],
        explanation:
          '3a + 2b - a + 4b = (3a - a) + (2b + 4b) = 2a + 6b. We group the coefficients of the same variables.',
      },
      {
        question: 'If f(x) = 2x - 3, what is f(5)?',
        options: ['5', '7', '9', '10'],
        explanation:
          'f(5) = 2(5) - 3 = 10 - 3 = 7. We substitute x = 5 into the expression.',
      },
      {
        question: 'Solve: x/3 = 7',
        options: ['x = 3', 'x = 14', 'x = 21', 'x = 28'],
        explanation:
          'x/3 = 7 → x = 7 × 3 = 21. We multiply both sides by 3 to isolate x.',
      },
      {
        question: 'Which of these is a linear equation?',
        options: ['x² + 2 = 0', '2x - 1 = 5', 'x³ = 8', '√x = 3'],
        explanation:
          '2x - 1 = 5 is a linear equation because the power of x is 1. Linear equations have the form ax + b = c.',
      },
      {
        question: 'Solve the system: x + y = 10, x - y = 2',
        options: ['x=5, y=5', 'x=6, y=4', 'x=7, y=3', 'x=8, y=2'],
        explanation:
          'Adding the equations: 2x = 12 → x = 6. Then: 6 + y = 10 → y = 4.',
      },
      {
        question: 'What is the coefficient of x² in: 5x² - 3x + 7?',
        options: ['3', '5', '7', '-3'],
        explanation:
          'The coefficient of x² is 5. In the expression 5x² - 3x + 7, the number before x² is 5.',
      },
      {
        question: 'Solve: 3(x + 2) = 18',
        options: ['x = 2', 'x = 3', 'x = 4', 'x = 6'],
        explanation:
          '3(x + 2) = 18 → x + 2 = 6 → x = 4. Step 1: Divide by 3. Step 2: Subtract 2.',
      },
      {
        question: 'What is the value of x: 5x - 3 = 2x + 9?',
        options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
        explanation:
          '5x - 3 = 2x + 9 → 3x = 12 → x = 4. Move 2x to the left and -3 to the right.',
      },
      {
        question: 'Multiply: (x + 3)(x + 2)',
        options: ['x² + 6', 'x² + 5x + 6', 'x² + 5x + 5', 'x² + 6x + 6'],
        explanation:
          '(x+3)(x+2) = x² + 2x + 3x + 6 = x² + 5x + 6. FOIL method: First, Outer, Inner, Last.',
      },
    ],
  },
  'alg-hard': {
    title: 'Quadratic Equations',
    category: 'Algebra',
    duration: '10 min',
    questions: [
      {
        question: 'Solve: x² - 5x + 6 = 0',
        options: [
          'x = 1, x = 6',
          'x = 2, x = 3',
          'x = -2, x = -3',
          'x = 1, x = -6',
        ],
        explanation:
          'x² - 5x + 6 = (x-2)(x-3) = 0. So x = 2 or x = 3. We look for two numbers: sum -5, product 6 → (-2) + (-3) = -5 and (-2)×(-3) = 6.',
      },
      {
        question: 'What is the discriminant of x² + 4x + 4 = 0?',
        options: ['0', '8', '-8', '16'],
        explanation:
          'Δ = b² - 4ac = 16 - 16 = 0. a=1, b=4, c=4. Δ = 4² - 4(1)(4) = 16 - 16 = 0. This indicates a double root.',
      },
      {
        question: 'Solve using the formula: x² - 6x + 5 = 0',
        options: [
          'x = 1, x = 5',
          'x = -1, x = 5',
          'x = 2, x = 3',
          'x = 1, x = -5',
        ],
        explanation:
          'x = (6 ± √(36-20))/2 = (6 ± 4)/2. So x₁ = 5 and x₂ = 1. Also: (x-1)(x-5) = 0.',
      },
      {
        question: 'The parabola y = x² - 4 has its vertex at:',
        options: ['(0, 4)', '(0, -4)', '(2, 0)', '(-2, 0)'],
        explanation:
          'The vertex of the parabola y = x² + c is at (0, c). So the vertex is at (0, -4). The parabola opens upward since the coefficient of x² is positive.',
      },
      {
        question: 'How many real roots does x² + x + 1 = 0 have?',
        options: ['0', '1', '2', 'Infinity'],
        explanation:
          'Δ = 1 - 4 = -3 < 0. When the discriminant is negative, the equation has no real roots, only complex ones.',
      },
      {
        question: 'Factor: x² - 9',
        options: ['(x-3)²', '(x+3)(x-3)', '(x-9)(x+1)', '(x-3)(x+9)'],
        explanation:
          'x² - 9 = x² - 3² = (x+3)(x-3). Formula: a² - b² = (a+b)(a-b).',
      },
      {
        question: 'The sum of the roots of x² - 7x + 10 = 0 is:',
        options: ['10', '-7', '7', '-10'],
        explanation:
          "By Vieta's Theorem: x₁ + x₂ = -b/a = 7. Also: x₁ × x₂ = c/a = 10.",
      },
      {
        question: 'Complete the square: x² + 6x = ?',
        options: ['(x+3)² - 9', '(x+6)² - 36', '(x+3)² + 9', '(x+6)² + 36'],
        explanation:
          'x² + 6x = x² + 6x + 9 - 9 = (x+3)² - 9. We add (6/2)² = 9 and subtract the same amount.',
      },
      {
        question: 'Solve: 2x² = 8',
        options: ['x = 2', 'x = ±2', 'x = 4', 'x = ±4'],
        explanation:
          '2x² = 8 → x² = 4 → x = ±√4 = ±2. When x² = positive, we have two solutions: +√ and -√.',
      },
      {
        question: 'Which parabola opens downward?',
        options: ['y = x² + 1', 'y = 2x²', 'y = -x² + 3', 'y = (x-1)²'],
        explanation:
          'y = -x² + 3 opens downward because the coefficient of x² is -1 (negative). When a < 0, the parabola opens downward.',
      },
    ],
  },
  'geo-easy': {
    title: 'Basic Geometry',
    category: 'Geometry',
    duration: '7 min',
    questions: [
      {
        question:
          'What is the sum of interior angles of a quadrilateral?',
        options: ['270°', '360°', '180°', '90°'],
        explanation:
          'The sum of interior angles of any quadrilateral is 360°. General formula: (n-2)×180° where n=4 gives (4-2)×180 = 360°.',
      },
      {
        question: 'Which theorem calculates the hypotenuse?',
        options: [
          "Thales' Theorem",
          'Pythagorean Theorem',
          'Law of Sines',
          "Euler's Theorem",
        ],
        explanation:
          'The Pythagorean Theorem: a² + b² = c² where c is the hypotenuse. It applies only to right triangles.',
      },
      {
        question: 'The area of a circle with radius r = 4 is:',
        options: ['8π', '16π', '32π', '4π'],
        explanation:
          'A = πr² = π × 4² = 16π. The formula for the area of a circle is πr².',
      },
      {
        question: 'The perimeter of a square with side 6 cm:',
        options: ['12 cm', '24 cm', '36 cm', '18 cm'],
        explanation:
          'P = 4 × a = 4 × 6 = 24 cm. A square has 4 equal sides.',
      },
      {
        question: 'The area of a triangle with base 10 and height 6:',
        options: ['30', '60', '32', '40'],
        explanation:
          'A = (b × h)/2 = (10 × 6)/2 = 30. Triangle formula: half of the product of base × height.',
      },
      {
        question: 'Which triangle has three equal sides?',
        options: ['Isosceles', 'Scalene', 'Equilateral', 'Right'],
        explanation:
          'The equilateral triangle has all three sides equal. Also, all three angles are 60° each.',
      },
      {
        question:
          'How many cm is the hypotenuse when the legs are 3 and 4?',
        options: ['5', '6', '7', '8'],
        explanation:
          'c = √(3² + 4²) = √(9 + 16) = √25 = 5. This is the famous Pythagorean triple 3-4-5.',
      },
      {
        question: 'The volume of a cube with side 3 cm:',
        options: ['9 cm³', '18 cm³', '27 cm³', '36 cm³'],
        explanation:
          'V = a³ = 3³ = 27 cm³. The volume of a cube is calculated by raising the side to the third power.',
      },
      {
        question: 'The number of sides of a regular hexagon:',
        options: ['4', '5', '6', '7'],
        explanation:
          'A hexagon has 6 sides. "Hex" = 6 in Greek.',
      },
      {
        question: 'Two parallel lines by definition are:',
        options: [
          'Intersecting',
          'Never meeting',
          'Perpendicular',
          'Convergent',
        ],
        explanation:
          'Parallel lines never meet and maintain the same distance between them. They are in the same plane.',
      },
    ],
  },
  'geo-medium': {
    title: 'Areas & Volumes',
    category: 'Geometry',
    duration: '10 min',
    questions: [
      {
        question: 'The volume of a cylinder with r=3 and h=5 is:',
        options: ['30π', '45π', '15π', '60π'],
        explanation:
          'V = πr²h = π × 9 × 5 = 45π. Cylinder volume formula: base area × height.',
      },
      {
        question: 'The total surface area of a sphere with r=6 is:',
        options: ['36π', '72π', '144π', '216π'],
        explanation:
          'S = 4πr² = 4 × π × 36 = 144π. The surface area formula for a sphere is 4πr².',
      },
      {
        question: 'The diagonal of a 5×12 rectangle has length:',
        options: ['13', '14', '15', '17'],
        explanation:
          'd = √(5² + 12²) = √(25 + 144) = √169 = 13. Pythagorean triple: 5-12-13.',
      },
      {
        question:
          'The area of a rhombus with diagonals d₁=8, d₂=6:',
        options: ['14', '24', '28', '48'],
        explanation:
          'A = (d₁ × d₂)/2 = (8 × 6)/2 = 24. The area of a rhombus = half the product of the diagonals.',
      },
      {
        question: 'The volume of a cone with r=3 and h=4 is:',
        options: ['4π', '12π', '36π', '48π'],
        explanation:
          'V = (1/3)πr²h = (1/3) × π × 9 × 4 = 12π. The volume of a cone is 1/3 of the cylinder volume.',
      },
      {
        question:
          'The perimeter of a trapezoid with a=10, b=6, c=5, d=5:',
        options: ['20', '24', '26', '28'],
        explanation:
          'P = a + b + c + d = 10 + 6 + 5 + 5 = 26. The perimeter of any polygon is calculated as the sum of all sides.',
      },
      {
        question: 'The arc length of a circle with r=10, angle 90°:',
        options: ['5π', '10π', '15π', '20π'],
        explanation:
          'L = (θ/360°) × 2πr = (90/360) × 20π = (1/4) × 20π = 5π. The arc is 1/4 of the circumference.',
      },
      {
        question: 'The area of a sector with r=8, angle 45°:',
        options: ['4π', '8π', '16π', '32π'],
        explanation:
          'A = (θ/360°) × πr² = (45/360) × 64π = (1/8) × 64π = 8π.',
      },
      {
        question:
          'The volume of a pyramid with base 6×6 and height 4:',
        options: ['24', '48', '72', '96'],
        explanation:
          'V = (1/3) × A_base × h = (1/3) × 36 × 4 = 48. Volume of a pyramid = 1/3 of the prism.',
      },
      {
        question: 'The area of a parallelogram with b=8, h=5:',
        options: ['13', '20', '40', '80'],
        explanation:
          'A = b × h = 8 × 5 = 40. Area of a parallelogram = base × height (not side, but the perpendicular height).',
      },
    ],
  },
  'trig-medium': {
    title: 'Trigonometry',
    category: 'Trigonometry',
    duration: '10 min',
    questions: [
      {
        question: 'Sin(30°) is:',
        options: ['√3/2', '1/2', '√2/2', '1'],
        explanation:
          'Sin(30°) = 1/2. Special angles: sin(30°)=1/2, sin(45°)=√2/2, sin(60°)=√3/2.',
      },
      {
        question: 'Cos(60°) is:',
        options: ['√3/2', '1/2', '√2/2', '0'],
        explanation:
          'Cos(60°) = 1/2. Note: cos(60°) = sin(30°) = 1/2. This comes from complementarity: cos(θ) = sin(90°-θ).',
      },
      {
        question: 'Tan(45°) is:',
        options: ['0', '1', '√3', '√3/3'],
        explanation:
          'Tan(45°) = 1. Sin(45°)/Cos(45°) = (√2/2)/(√2/2) = 1. When sin = cos, the tangent is 1.',
      },
      {
        question: 'Which trigonometric identity is correct?',
        options: [
          'sin²x + cos²x = 2',
          'sin²x + cos²x = 1',
          'sin²x - cos²x = 1',
          'sinx × cosx = 1',
        ],
        explanation:
          'sin²x + cos²x = 1 is the fundamental trigonometric identity. It comes from the Pythagorean Theorem on the unit circle.',
      },
      {
        question: 'Convert 180° to radians:',
        options: ['π/2', 'π', '2π', '3π/2'],
        explanation:
          '180° = π radians. Formula: radians = degrees × π/180. So 180 × π/180 = π.',
      },
      {
        question: 'Sin(90°) is:',
        options: ['0', '1/2', '√2/2', '1'],
        explanation:
          'Sin(90°) = 1. On the unit circle, when θ = 90°, the point is at (0,1), so the y-coordinate = 1.',
      },
      {
        question:
          'In a right triangle with hypotenuse 10 and angle 30°, the opposite side is:',
        options: ['5', '5√3', '10√3', '10/√3'],
        explanation:
          'Sin(30°) = opposite/hypotenuse → opposite = 10 × sin(30°) = 10 × 0.5 = 5.',
      },
      {
        question: 'Cos(0°) is:',
        options: ['0', '1/2', '1', '-1'],
        explanation:
          'Cos(0°) = 1. On the unit circle, when θ = 0°, the point is at (1,0), so the x-coordinate = 1.',
      },
      {
        question: 'Which expression is equivalent to sin(x)/cos(x)?',
        options: ['cot(x)', 'tan(x)', 'sec(x)', 'csc(x)'],
        explanation:
          'tan(x) = sin(x)/cos(x). This is the definition of tangent. cot(x) = cos(x)/sin(x).',
      },
      {
        question: 'How many radians are 360°?',
        options: ['π', '2π', '3π', '4π'],
        explanation:
          '360° = 2π radians. A full circle = 2π. 180° = π, so 360° = 2π.',
      },
    ],
  },
  'arith-hard': {
    title: 'Prime & Composite Numbers',
    category: 'Arithmetic',
    duration: '10 min',
    questions: [
      {
        question: 'How many prime numbers are there between 20 and 40?',
        options: ['4', '5', '6', '7'],
        explanation:
          'The prime numbers are: 23, 29, 31, 37. Total: 4 numbers. Prime numbers are those divisible only by 1 and themselves.',
      },
      {
        question: 'What is the LCM of 12 and 18?',
        options: ['6', '36', '72', '108'],
        explanation:
          'LCM(12,18) = 36. Factorization: 12 = 2²×3, 18 = 2×3². LCM = 2²×3² = 36.',
      },
      {
        question: 'What is 7! (factorial)?',
        options: ['49', '720', '5040', '40320'],
        explanation:
          '7! = 7×6×5×4×3×2×1 = 5040. Factorial is calculated by multiplying all numbers from 1 to n.',
      },
      {
        question: 'What is 2⁶ + 2⁵?',
        options: ['96', '112', '128', '256'],
        explanation:
          '2⁶ + 2⁵ = 64 + 32 = 96. Can also be written as: 2⁵(2 + 1) = 32 × 3 = 96.',
      },
      {
        question: 'Which of these is a composite number?',
        options: ['13', '17', '19', '21'],
        explanation:
          '21 = 3 × 7 is a composite number. 13, 17, 19 are prime.',
      },
      {
        question: 'What is the value of √(144)?',
        options: ['10', '11', '12', '14'],
        explanation:
          '√144 = 12 because 12 × 12 = 144. 144 = 12².',
      },
      {
        question: 'Convert 0.625 to a simplified fraction:',
        options: ['5/8', '3/5', '2/3', '7/11'],
        explanation:
          '0.625 = 625/1000 = 5/8. Simplifying by 125: 625÷125 = 5, 1000÷125 = 8.',
      },
      {
        question: 'What is the GCD of 24, 36, and 48?',
        options: ['6', '8', '12', '24'],
        explanation:
          'GCD(24,36,48) = 12. Factorization: 24=2³×3, 36=2²×3², 48=2⁴×3. GCD = 2²×3 = 12.',
      },
      {
        question: 'Simplify: (3²)³',
        options: ['81', '243', '729', '2187'],
        explanation:
          '(3²)³ = 3⁶ = 729. Rule: (aᵐ)ⁿ = aᵐⁿ. So (3²)³ = 3²ˣ³ = 3⁶ = 729.',
      },
      {
        question: 'What is 11² - 10²?',
        options: ['11', '19', '21', '29'],
        explanation:
          '11² - 10² = (11-10)(11+10) = 1 × 21 = 21. Formula: a² - b² = (a-b)(a+b).',
      },
    ],
  },
  'alg-medium': {
    title: 'Functions & Graphs',
    category: 'Algebra',
    duration: '10 min',
    questions: [
      {
        question: 'If f(x) = 3x - 2, what is f⁻¹(7)?',
        options: ['3', '4', '5', '6'],
        explanation:
          'f(x) = 7 → 3x - 2 = 7 → x = 3. So f⁻¹(7) = 3. The inverse function maps the output back to the input.',
      },
      {
        question: 'Which point lies on the line y = 2x + 1?',
        options: ['(1, 2)', '(2, 5)', '(3, 6)', '(4, 10)'],
        explanation:
          'Testing (2,5): y = 2(2) + 1 = 5 ✓. The other points do not satisfy the equation.',
      },
      {
        question: 'What is the slope of the line y = 2x + 3?',
        options: ['1', '2', '3', '1/2'],
        explanation:
          'The slope = 2. In the form y = mx + b, m is the slope.',
      },
      {
        question: 'Solve for x: |x - 3| = 5',
        options: ['x = 8', 'x = -2', 'x = 8 or x = -2', 'x = 2 or x = 8'],
        explanation:
          '|x-3| = 5 → x-3 = 5 or x-3 = -5 → x = 8 or x = -2. Absolute value gives two solutions.',
      },
      {
        question: 'What is the domain of f(x) = √(x - 2)?',
        options: ['x > 2', 'x ≥ 2', 'x < 2', 'All real numbers'],
        explanation:
          'Domain: x ≥ 2. The square root requires x - 2 ≥ 0, so x ≥ 2.',
      },
      {
        question:
          'If g(x) = x² and f(x) = x + 1, what is (f∘g)(2)?',
        options: ['4', '5', '6', '9'],
        explanation:
          '(f∘g)(2) = f(g(2)) = f(4) = 4 + 1 = 5. Composition: we apply g first, then f.',
      },
      {
        question: 'Which line is parallel to y = 3x - 1?',
        options: ['y = 3x + 5', 'y = -3x + 1', 'y = 1/3x + 2', 'y = 5x - 1'],
        explanation:
          'Parallel lines have the same slope. y = 3x + 5 has m = 3.',
      },
      {
        question: 'What is the y-intercept of y = -2x + 7?',
        options: ['-2', '2', '7', '-7'],
        explanation:
          'The y-intercept (the point where x=0) is b = 7. In y = mx + b, b is the y-intercept.',
      },
      {
        question: 'Solve: 2^x = 16',
        options: ['x = 2', 'x = 3', 'x = 4', 'x = 8'],
        explanation:
          '2^x = 16 = 2⁴ → x = 4. We convert 16 to a power of 2: 16 = 2⁴.',
      },
      {
        question:
          'If f(x) is linear and f(0)=3, f(2)=7, what is f(5)?',
        options: ['11', '13', '15', '17'],
        explanation:
          'Slope = (7-3)/(2-0) = 2. f(x) = 2x + 3. f(5) = 2(5) + 3 = 13.',
      },
    ],
  },
  'geo-hard': {
    title: '3D Geometry & Theorems',
    category: 'Geometry',
    duration: '12 min',
    questions: [
      {
        question: 'The volume of a sphere with radius 3 is:',
        options: ['36π', '48π', '54π', '108π'],
        explanation:
          'V = (4/3)πr³ = (4/3)π(27) = 36π. Sphere formula: (4/3)πr³.',
      },
      {
        question: 'The total surface area of a cube with side 5:',
        options: ['100', '125', '150', '200'],
        explanation:
          'S = 6a² = 6 × 25 = 150. A cube has 6 identical square faces.',
      },
      {
        question:
          'In a triangle with sides 5, 12, 13, which angle is 90°?',
        options: [
          'Opposite to 5',
          'Opposite to 12',
          'Opposite to 13',
          'None',
        ],
        explanation:
          '5² + 12² = 25 + 144 = 169 = 13². Pythagorean triple, the angle opposite the hypotenuse (13) is 90°.',
      },
      {
        question:
          'The length of the space diagonal of a cube with side 2:',
        options: ['2√2', '2√3', '4', '2√6'],
        explanation:
          'd = a√3 = 2√3. The space diagonal of a cube = side × √3.',
      },
      {
        question:
          'The volume of a triangular prism with base 6×8/2 and height 10:',
        options: ['120', '160', '240', '480'],
        explanation:
          'V = A_base × h = (6×8/2) × 10 = 24 × 10 = 240. The base is a triangle.',
      },
      {
        question:
          'The surface area of a cone with r=4, h=3 (slant height l=5):',
        options: ['36π', '40π', '44π', '48π'],
        explanation:
          'S = πr² + πrl = 16π + 20π = 36π. Total surface area = base + lateral surface.',
      },
      {
        question:
          "Thales' Theorem states that if a line parallel to the base of a triangle divides two sides, they are divided into:",
        options: [
          'Equal parts',
          'Proportional parts',
          'Double parts',
          'Random parts',
        ],
        explanation:
          "Thales' Theorem: parallel lines create proportional segments. a/b = c/d.",
      },
      {
        question:
          'How many degrees does each angle of a regular pentagon have?',
        options: ['90°', '108°', '120°', '135°'],
        explanation:
          'Interior angle = (n-2)×180°/n = (5-2)×180°/5 = 108°.',
      },
      {
        question:
          'The ratio of the surface areas of two cubes with sides 2 and 4:',
        options: ['1:2', '1:4', '1:6', '1:8'],
        explanation:
          'S₁ = 6(2²) = 24, S₂ = 6(4²) = 96. Ratio = 24:96 = 1:4.',
      },
      {
        question:
          'The volume of a regular octahedron with side a is:',
        options: ['a³√2/3', 'a³√3/2', 'a³√2', '2a³'],
        explanation:
          'V = a³√2/3. A regular octahedron has 8 equilateral triangular faces.',
      },
    ],
  },
  'trig-easy': {
    title: 'Basic Trigonometry',
    category: 'Trigonometry',
    duration: '7 min',
    questions: [
      {
        question: 'In a right triangle, sin(θ) = ?',
        options: [
          'Opposite/Hypotenuse',
          'Adjacent/Hypotenuse',
          'Opposite/Adjacent',
          'Hypotenuse/Leg',
        ],
        explanation:
          'Sin(θ) = opposite / hypotenuse. This is the fundamental definition of sine.',
      },
      {
        question: 'Cos(θ) in a right triangle is:',
        options: [
          'Opposite/Hypotenuse',
          'Adjacent/Hypotenuse',
          'Hypotenuse/Adjacent',
          'Opposite/Adjacent',
        ],
        explanation:
          'Cos(θ) = adjacent / hypotenuse. Cosine is the ratio of the adjacent side to the hypotenuse.',
      },
      {
        question: 'What is sin(0°)?',
        options: ['0', '1/2', '√2/2', '1'],
        explanation:
          'Sin(0°) = 0. On the unit circle, when θ = 0°, the y-coordinate is 0.',
      },
      {
        question: 'Tan(θ) equals:',
        options: [
          'sin(θ) × cos(θ)',
          'sin(θ) / cos(θ)',
          'cos(θ) / sin(θ)',
          '1 / sin(θ)',
        ],
        explanation:
          'Tan(θ) = sin(θ) / cos(θ). Tangent is the ratio of sine to cosine.',
      },
      {
        question: 'How many degrees are in a full circle?',
        options: ['90°', '180°', '270°', '360°'],
        explanation:
          'A full circle has 360°. This is the standard definition of degree measurement.',
      },
      {
        question: 'Cos(90°) is:',
        options: ['0', '1/2', '√2/2', '1'],
        explanation:
          'Cos(90°) = 0. On the unit circle, when θ = 90°, the x-coordinate is 0.',
      },
      {
        question: 'The sum of interior angles of a triangle:',
        options: ['90°', '180°', '270°', '360°'],
        explanation:
          'The sum of the angles of a triangle = 180°. This applies to every triangle.',
      },
      {
        question:
          'If sin(x) = 0.5, what angle is x (0° - 90°)?',
        options: ['15°', '30°', '45°', '60°'],
        explanation:
          'Sin(30°) = 0.5 = 1/2. This is one of the special angles.',
      },
      {
        question: 'What is sin²(θ) + cos²(θ)?',
        options: ['0', '1', '2', 'θ'],
        explanation:
          'sin²(θ) + cos²(θ) = 1. This is the fundamental trigonometric identity.',
      },
      {
        question:
          'In a right triangle with hypotenuse 10 and sin(θ)=0.6, the opposite side is:',
        options: ['4', '6', '8', '12'],
        explanation:
          'Sin(θ) = opposite/10 = 0.6 → opposite = 6. Sin = opposite/hypotenuse.',
      },
    ],
  },
  'trig-hard': {
    title: 'Trigonometric Identities',
    category: 'Trigonometry',
    duration: '12 min',
    questions: [
      {
        question: 'Simplify: sin(2x) = ?',
        options: [
          '2sin(x)',
          '2sin(x)cos(x)',
          'sin²(x) + cos²(x)',
          'sin(x) + sin(x)',
        ],
        explanation:
          'Sin(2x) = 2sin(x)cos(x). This is the double angle formula for sine.',
      },
      {
        question: 'Cos(2x) can be written as:',
        options: [
          '2cos(x)',
          'cos²(x) - sin²(x)',
          'cos(x) + cos(x)',
          '2cos²(x)',
        ],
        explanation:
          'Cos(2x) = cos²(x) - sin²(x). Also: cos(2x) = 2cos²(x) - 1 = 1 - 2sin²(x).',
      },
      {
        question: 'What is tan(45°) + tan(45°)?',
        options: ['1', '2', '√2', '√3'],
        explanation:
          'Tan(45°) = 1. So 1 + 1 = 2. Tan(45°) is 1 because sin(45°) = cos(45°).',
      },
      {
        question: 'The identity sec²(x) - tan²(x) = ?',
        options: ['0', '1', 'sin(x)', 'cos(x)'],
        explanation:
          'Sec²(x) - tan²(x) = 1. Derived from: 1/cos²(x) - sin²(x)/cos²(x) = (1 - sin²(x))/cos²(x) = 1.',
      },
      {
        question: 'Sin(A + B) = ?',
        options: [
          'sin(A) + sin(B)',
          'sin(A)cos(B) + cos(A)sin(B)',
          'sin(A)sin(B) + cos(A)cos(B)',
          'sin(A) × sin(B)',
        ],
        explanation:
          'Sin(A + B) = sin(A)cos(B) + cos(A)sin(B). This is the angle addition formula for sine.',
      },
      {
        question:
          'If sin(x) = 3/5 and x is in the first quadrant, what is cos(x)?',
        options: ['3/5', '4/5', '5/3', '5/4'],
        explanation:
          'Sin²(x) + cos²(x) = 1 → (3/5)² + cos²(x) = 1 → cos²(x) = 16/25 → cos(x) = 4/5.',
      },
      {
        question: 'Cos(A - B) = ?',
        options: [
          'cos(A) - cos(B)',
          'cos(A)cos(B) + sin(A)sin(B)',
          'cos(A)cos(B) - sin(A)sin(B)',
          'sin(A)sin(B)',
        ],
        explanation:
          'Cos(A - B) = cos(A)cos(B) + sin(A)sin(B). This is the angle subtraction formula for cosine.',
      },
      {
        question: 'Simplify: 1/sin(x) = ?',
        options: ['cos(x)', 'tan(x)', 'csc(x)', 'sec(x)'],
        explanation:
          '1/sin(x) = csc(x) (cosecant). Reciprocal functions: csc = 1/sin, sec = 1/cos, cot = 1/tan.',
      },
      {
        question: 'What is sin(π/6) in radians?',
        options: ['0', '1/2', '√2/2', '√3/2'],
        explanation:
          'π/6 = 30°. Sin(30°) = 1/2. Conversion: π radians = 180°.',
      },
      {
        question: 'Tan(2x) = ?',
        options: [
          '2tan(x)',
          '2tan(x)/(1 - tan²(x))',
          'tan²(x)',
          'tan(x) + tan(x)',
        ],
        explanation:
          'Tan(2x) = 2tan(x) / (1 - tan²(x)). This is the double angle formula for tangent.',
      },
    ],
  },
  'calc-easy': {
    title: 'Basic Limits',
    category: 'Calculus',
    duration: '8 min',
    questions: [
      {
        question: 'What is lim(x→2) x?',
        options: ['0', '1', '2', '∞'],
        explanation:
          'lim(x→2) x = 2. As x approaches 2, the value of x is 2. For simple functions: just substitute.',
      },
      {
        question: 'What is lim(x→3) 5?',
        options: ['0', '3', '5', '15'],
        explanation:
          'lim(x→3) 5 = 5. The limit of a constant is always the constant itself.',
      },
      {
        question: 'What is lim(x→0) x²?',
        options: ['0', '1', '2', 'Does not exist'],
        explanation:
          'lim(x→0) x² = 0² = 0. We substitute x = 0 into the expression.',
      },
      {
        question: 'lim(x→1) (x + 2) = ?',
        options: ['1', '2', '3', '4'],
        explanation:
          'lim(x→1) (x + 2) = 1 + 2 = 3. Direct substitution.',
      },
      {
        question: 'What is lim(x→4) √x?',
        options: ['0', '2', '4', '16'],
        explanation:
          'lim(x→4) √x = √4 = 2. The square root of 4 is 2.',
      },
      {
        question: 'lim(x→∞) 1/x = ?',
        options: ['0', '1', '∞', 'Does not exist'],
        explanation:
          'lim(x→∞) 1/x = 0. As x increases without bound, 1/x approaches 0.',
      },
      {
        question: 'What is lim(h→0) (5 + h)?',
        options: ['0', '5', 'h', '5h'],
        explanation:
          'lim(h→0) (5 + h) = 5 + 0 = 5. As h→0, the h term vanishes.',
      },
      {
        question: 'lim(x→-1) x³ = ?',
        options: ['-1', '-2', '-3', '1'],
        explanation:
          'lim(x→-1) x³ = (-1)³ = -1. Direct substitution.',
      },
      {
        question: 'What is lim(x→2) (x² - 4)/(x - 2)?',
        options: ['0', '2', '4', 'Does not exist'],
        explanation:
          '(x²-4)/(x-2) = (x-2)(x+2)/(x-2) = x+2. lim(x→2) = 2+2 = 4. We simplify before substituting.',
      },
      {
        question: "lim(x→0) sin(x)/x uses the rule:",
        options: [
          "L'Hôpital's Rule",
          'Chain Rule',
          'Product Rule',
          'Quotient Rule',
        ],
        explanation:
          "L'Hôpital's Rule is used for indeterminate forms 0/0 or ∞/∞.",
      },
    ],
  },
  'calc-medium': {
    title: 'Basic Derivatives',
    category: 'Calculus',
    duration: '10 min',
    questions: [
      {
        question: 'The derivative of f(x) = x⁵ is:',
        options: ['x⁴', '5x⁴', '5x', 'x⁶/6'],
        explanation:
          'd/dx(x⁵) = 5x⁴. Rule: d/dx(xⁿ) = n·xⁿ⁻¹.',
      },
      {
        question: 'What is d/dx(7x)?',
        options: ['0', '7', '7x', 'x'],
        explanation: 'd/dx(7x) = 7. The derivative of cx is c.',
      },
      {
        question: 'The derivative of f(x) = x² + 3x - 5:',
        options: ['2x + 3', 'x + 3', '2x + 3x', '2x - 5'],
        explanation:
          'd/dx(x² + 3x - 5) = 2x + 3. We differentiate term by term.',
      },
      {
        question: 'What is d/dx(cos(x))?',
        options: ['sin(x)', '-sin(x)', 'cos(x)', '-cos(x)'],
        explanation:
          'd/dx(cos(x)) = -sin(x). Trigonometric derivatives: d(sin)=cos, d(cos)=-sin.',
      },
      {
        question: "Product rule: d/dx[f(x)·g(x)] = ?",
        options: [
          "f'(x)·g'(x)",
          "f'(x)·g(x) + f(x)·g'(x)",
          "f'(x) + g'(x)",
          "f(x)·g'(x)",
        ],
        explanation:
          "Product Rule: (fg)' = f'g + fg'. Derivative of the first × the second + the first × derivative of the second.",
      },
      {
        question: 'What is d/dx(ln(x))?',
        options: ['x', '1/x', 'e^x', 'log(x)'],
        explanation:
          'd/dx(ln(x)) = 1/x. The derivative of the natural logarithm.',
      },
      {
        question: 'The derivative of f(x) = 1/x²:',
        options: ['-2/x³', '-1/x', '2/x³', '-2/x'],
        explanation:
          "f(x) = x⁻². f'(x) = -2x⁻³ = -2/x³. We use the power rule.",
      },
      {
        question: 'What is d/dx(5)?',
        options: ['0', '1', '5', 'x'],
        explanation:
          'd/dx(constant) = 0. The derivative of any constant is 0.',
      },
      {
        question: "Chain rule: if y = f(g(x)), y' = ?",
        options: [
          "f'(x) + g'(x)",
          "f'(g(x))·g'(x)",
          "f'(x)·g'(x)",
          "f(g'(x))",
        ],
        explanation:
          "Chain Rule: dy/dx = f'(g(x))·g'(x). Derivative of the outer function × derivative of the inner function.",
      },
      {
        question: "If f(x) = √x, f'(4) = ?",
        options: ['1/2', '1/4', '2', '4'],
        explanation:
          "f(x) = x^(1/2), f'(x) = (1/2)x^(-1/2) = 1/(2√x). f'(4) = 1/(2√4) = 1/4.",
      },
    ],
  },
  'calc-hard': {
    title: 'Derivatives & Limits',
    category: 'Calculus',
    duration: '12 min',
    questions: [
      {
        question: 'The derivative of f(x) = x³ is:',
        options: ['x²', '3x²', '3x', 'x⁴/4'],
        explanation:
          "f'(x) = 3x². Power rule: d/dx(xⁿ) = n·xⁿ⁻¹. So d/dx(x³) = 3·x² = 3x².",
      },
      {
        question: 'The derivative of f(x) = sin(x) is:',
        options: ['-sin(x)', 'cos(x)', '-cos(x)', 'tan(x)'],
        explanation:
          "f'(x) = cos(x). Trigonometric derivatives: d/dx(sin) = cos, d/dx(cos) = -sin.",
      },
      {
        question: 'lim(x→0) sin(x)/x = ?',
        options: ['0', '∞', '1', '-1'],
        explanation:
          'lim(x→0) sin(x)/x = 1. This is a famous fundamental limit in calculus. It is demonstrated using the Squeeze Theorem.',
      },
      {
        question: 'The derivative of f(x) = e^x is:',
        options: ['e^(x-1)', 'x·e^(x-1)', 'e^x', 'ln(x)'],
        explanation:
          "f'(x) = e^x. The natural exponential function is the only function equal to its own derivative.",
      },
      {
        question: 'The antiderivative of f(x) = 2x is:',
        options: ['2', 'x²', 'x² + C', '2x² + C'],
        explanation:
          '∫2x dx = x² + C. Rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. So ∫2x dx = 2·x²/2 + C = x² + C.',
      },
      {
        question: 'The derivative of f(x) = ln(x) is:',
        options: ['1/x', 'x', 'e^x', 'log(x)'],
        explanation:
          "f'(x) = 1/x. This is the derivative of the natural logarithm. Valid for x > 0.",
      },
      {
        question: 'lim(x→∞) 1/x = ?',
        options: ['1', '∞', '0', '-1'],
        explanation:
          'lim(x→∞) 1/x = 0. As x increases, 1/x approaches 0 but never reaches it.',
      },
      {
        question: "Chain rule: if y = f(g(x)), then y' = ?",
        options: [
          "f'(x)·g'(x)",
          "f'(g(x))·g'(x)",
          "f(g'(x))",
          "f'(x)+g'(x)",
        ],
        explanation:
          "y' = f'(g(x))·g'(x). We differentiate the outer function keeping the inner function, then multiply by the derivative of the inner function.",
      },
      {
        question:
          'The derivative of f(x) = x² + 3x - 5 at x=2 is:',
        options: ['4', '6', '7', '11'],
        explanation:
          "f'(x) = 2x + 3. f'(2) = 2(2) + 3 = 7. We differentiate each term separately.",
      },
      {
        question: '∫₀¹ x² dx = ?',
        options: ['1/4', '1/3', '1/2', '1'],
        explanation:
          '∫₀¹ x² dx = [x³/3]₀¹ = 1/3 - 0 = 1/3. The antiderivative of x² is x³/3, then we evaluate at the bounds.',
      },
    ],
  },
  'stat-easy': {
    title: 'Basic Statistics',
    category: 'Statistics',
    duration: '6 min',
    questions: [
      {
        question: 'The mean of: 2, 4, 6, 8 is:',
        options: ['4', '5', '6', '20'],
        explanation:
          'Mean = (2+4+6+8)/4 = 20/4 = 5. We add them all and divide by the count.',
      },
      {
        question: 'The median of: 1, 3, 5, 7, 9 is:',
        options: ['3', '5', '7', '9'],
        explanation:
          'Median = 5 (the middle value). We have 5 values, the third one is the middle.',
      },
      {
        question: 'The mode of: 1, 2, 2, 3, 4 is:',
        options: ['1', '2', '3', '4'],
        explanation:
          'Mode = 2 (the value that appears most frequently). 2 appears twice.',
      },
      {
        question: 'The probability of rolling a 1 with a die:',
        options: ['1/2', '1/4', '1/6', '1/8'],
        explanation:
          'P(1) = 1/6. A die has 6 faces, each face has a probability of 1/6.',
      },
      {
        question: 'The mean of: 10, 20, 30 is:',
        options: ['15', '20', '25', '60'],
        explanation: 'Mean = (10+20+30)/3 = 60/3 = 20.',
      },
      {
        question: 'How many possible outcomes does a coin flip have?',
        options: ['1', '2', '3', '4'],
        explanation: 'A coin has 2 outcomes: heads or tails.',
      },
      {
        question: 'The range of: 5, 10, 15, 20:',
        options: ['5', '10', '15', '20'],
        explanation:
          'Range = maximum - minimum = 20 - 5 = 15.',
      },
      {
        question:
          'The median of: 2, 4, 6, 8 (even number of values):',
        options: ['4', '5', '6', '8'],
        explanation:
          'Median = (4+6)/2 = 5. With an even number of values, we take the average of the two middle values.',
      },
      {
        question: 'The probability that something never happens:',
        options: ['0', '0.5', '1', '∞'],
        explanation:
          'P(impossible) = 0. A probability of 0 means it never happens.',
      },
      {
        question: 'The probability that something always happens:',
        options: ['0', '0.5', '1', '∞'],
        explanation:
          'P(certain) = 1. A probability of 1 means it always happens.',
      },
    ],
  },
  'stat-medium': {
    title: 'Statistics & Probability',
    category: 'Statistics',
    duration: '8 min',
    questions: [
      {
        question: 'The mean of the series: 4, 7, 2, 9, 3 is:',
        options: ['4', '5', '6', '7'],
        explanation:
          'Mean = (4+7+2+9+3)/5 = 25/5 = 5. We add all values and divide by their count.',
      },
      {
        question: 'The median of: 3, 5, 7, 9, 11 is:',
        options: ['5', '7', '9', '6'],
        explanation:
          'Median = 7 (the middle value when data is sorted). We have 5 values, the third is the middle.',
      },
      {
        question:
          'What is the probability of flipping heads with a coin?',
        options: ['1/4', '1/3', '1/2', '2/3'],
        explanation:
          'P(heads) = 1/2. A coin has 2 possible outcomes: heads or tails. P = favorable outcomes / total outcomes.',
      },
      {
        question: 'The mode of the series: 2, 3, 3, 5, 7, 3, 8 is:',
        options: ['2', '3', '5', '8'],
        explanation:
          'Mode = 3 because it appears 3 times (most frequently). The mode is the value that repeats the most.',
      },
      {
        question:
          'The probability of rolling a 6 with a standard die:',
        options: ['1/3', '1/4', '1/5', '1/6'],
        explanation:
          'P(6) = 1/6. A die has 6 faces (1-6), each face has a probability of 1/6.',
      },
      {
        question: 'Standard deviation measures:',
        options: [
          'The mean',
          'The spread of the data',
          'The total',
          'The median',
        ],
        explanation:
          'Standard deviation measures how far values are from the mean. High deviation = very spread out data.',
      },
      {
        question: 'If P(A) = 0.3, then P(A\u0305) is:',
        options: ['0.3', '0.5', '0.7', '1.3'],
        explanation:
          "P(A\u0305) = 1 - P(A) = 1 - 0.3 = 0.7. Complement probability: events A and A\u0305 complete each other.",
      },
      {
        question: 'A histogram displays:',
        options: [
          'The relationship between two variables',
          'The distribution of the data',
          'The trend over time',
          'Proportions',
        ],
        explanation:
          'A histogram shows the frequency distribution of data. Each bar represents the frequency of an interval.',
      },
      {
        question:
          'P(A ∪ B) = P(A) + P(B) - ? (when not mutually exclusive)',
        options: ['P(A)', 'P(B)', 'P(A ∩ B)', 'P(A) × P(B)'],
        explanation:
          'P(A ∪ B) = P(A) + P(B) - P(A ∩ B). We subtract P(A∩B) because it was counted twice.',
      },
      {
        question:
          'The relationship of variance to standard deviation:',
        options: ['σ', 'σ²', '√σ', '1/σ'],
        explanation:
          'Variance = σ² (the square of the standard deviation). Standard deviation = σ = √Variance.',
      },
    ],
  },
  'stat-hard': {
    title: 'Advanced Statistics',
    category: 'Statistics',
    duration: '12 min',
    questions: [
      {
        question: 'The variance of the series: 2, 4, 6 is:',
        options: ['2', '4', '8/3', '16/3'],
        explanation:
          'Mean = 4. Variance = [(2-4)²+(4-4)²+(6-4)²]/3 = [4+0+4]/3 = 8/3.',
      },
      {
        question:
          'The standard deviation of data with variance 25:',
        options: ['5', '12.5', '25', '625'],
        explanation:
          'σ = √variance = √25 = 5. Standard deviation is the square root of the variance.',
      },
      {
        question: 'A correlation coefficient r = 1 means:',
        options: [
          'No relationship',
          'Strong negative relationship',
          'Perfect positive relationship',
          'Weak relationship',
        ],
        explanation:
          'r = 1: perfect positive correlation. r = -1: negative. r = 0: no correlation.',
      },
      {
        question:
          'The standard normal distribution has μ = ? and σ = ?:',
        options: ['μ=0, σ=1', 'μ=1, σ=0', 'μ=1, σ=1', 'μ=0, σ=0'],
        explanation:
          'The standard Z distribution: mean μ = 0, standard deviation σ = 1.',
      },
      {
        question:
          'If P(A∩B) = 0.2, P(A) = 0.5, P(B) = 0.4, A and B are:',
        options: [
          'Independent',
          'Mutually exclusive',
          'Dependent',
          'Complementary',
        ],
        explanation:
          'P(A)·P(B) = 0.5×0.4 = 0.2 = P(A∩B). If P(A∩B)=P(A)P(B), they are independent. Here we should check more carefully - in fact they ARE independent since 0.2 = 0.2.',
      },
      {
        question: 'The Z-score indicates:',
        options: [
          'The mean',
          'How many standard deviations away from the mean',
          'The probability',
          'The variance',
        ],
        explanation:
          'Z = (x - μ)/σ indicates how many standard deviations x is from the mean.',
      },
      {
        question: 'The 68-95-99.7 rule applies to:',
        options: [
          'Any distribution',
          'Only the binomial distribution',
          'The normal distribution',
          'The uniform distribution',
        ],
        explanation:
          'The 68-95-99.7 rule: in the normal distribution, 68% within 1σ, 95% within 2σ, 99.7% within 3σ.',
      },
      {
        question:
          'The Central Limit Theorem states that the sample mean:',
        options: [
          'Is always normal',
          'Approaches a normal distribution',
          'Is uniform',
          'Does not change',
        ],
        explanation:
          'CLT: with large n, the distribution of sample means approaches normal, regardless of the original distribution.',
      },
      {
        question: 'A 95% confidence interval means:',
        options: [
          '95% of the data are within the interval',
          '95% confidence that the parameter is within the interval',
          'The probability is 0.95',
          'The error is 5%',
        ],
        explanation:
          '95% confidence interval: we are 95% confident that the population parameter is within this interval.',
      },
      {
        question: 'The null hypothesis (H₀) usually states that:',
        options: [
          'There is a difference',
          'There is no difference/effect',
          'There is correlation',
          'The data is normal',
        ],
        explanation:
          'H₀: there is no effect or difference. H₁: there is an effect. We test to reject H₀.',
      },
    ],
  },
  'linalg-easy': {
    title: 'Basic Vectors',
    category: 'Linear Algebra',
    duration: '8 min',
    questions: [
      {
        question: 'Add the vectors (2,3) + (1,4):',
        options: ['(3,7)', '(2,12)', '(1,1)', '(6,12)'],
        explanation:
          '(2,3) + (1,4) = (2+1, 3+4) = (3,7). We add the corresponding components.',
      },
      {
        question: 'The length (magnitude) of the vector (3,4) is:',
        options: ['5', '7', '12', '25'],
        explanation:
          '||v|| = √(3² + 4²) = √(9 + 16) = √25 = 5. Pythagorean theorem in 2D.',
      },
      {
        question: 'Multiply the vector (2,5) by scalar 3:',
        options: ['(5,8)', '(6,15)', '(6,8)', '(2,15)'],
        explanation:
          '3·(2,5) = (3×2, 3×5) = (6,15). We multiply each component by the scalar.',
      },
      {
        question: 'The zero vector in 2D is:',
        options: ['(1,1)', '(0,0)', '(0,1)', '(1,0)'],
        explanation:
          'The zero vector: (0,0). The additive identity element.',
      },
      {
        question: 'The dot product of (1,2) · (3,4):',
        options: ['5', '9', '11', '24'],
        explanation:
          '(1,2)·(3,4) = 1×3 + 2×4 = 3 + 8 = 11. Dot product = sum of the products of corresponding components.',
      },
      {
        question: 'The opposite vector of (5,-3):',
        options: ['(-5,3)', '(5,3)', '(-5,-3)', '(3,-5)'],
        explanation:
          'The opposite vector: we change the signs. -(5,-3) = (-5,3).',
      },
      {
        question: 'The vectors (2,4) and (1,2) are:',
        options: ['Orthogonal', 'Parallel', 'Perpendicular', 'Independent'],
        explanation:
          '(2,4) = 2·(1,2). They are parallel (one is a scalar multiple of the other).',
      },
      {
        question: 'The length of the vector (0,5):',
        options: ['0', '5', '10', '25'],
        explanation: '||(0,5)|| = √(0² + 5²) = √25 = 5.',
      },
      {
        question: 'The subtraction (5,7) - (2,3):',
        options: ['(3,4)', '(7,10)', '(3,10)', '(10,21)'],
        explanation:
          '(5,7) - (2,3) = (5-2, 7-3) = (3,4). We subtract the corresponding components.',
      },
      {
        question: 'The vectors (1,0) and (0,1) are:',
        options: ['Parallel', 'Perpendicular', 'Identical', 'Zero'],
        explanation:
          '(1,0) and (0,1) are perpendicular (orthogonal). Their dot product = 0.',
      },
    ],
  },
  'linalg-medium': {
    title: 'Matrices & Determinants',
    category: 'Linear Algebra',
    duration: '10 min',
    questions: [
      {
        question: 'The determinant of [[2,3],[1,4]] is:',
        options: ['5', '8', '11', '24'],
        explanation:
          'det = 2×4 - 3×1 = 8 - 3 = 5. For 2×2: ad - bc.',
      },
      {
        question: 'The transpose of [[1,2],[3,4]] is:',
        options: [
          '[[1,3],[2,4]]',
          '[[4,3],[2,1]]',
          '[[2,1],[4,3]]',
          '[[1,2],[3,4]]',
        ],
        explanation:
          'Transpose: rows become columns. A^T = [[1,3],[2,4]].',
      },
      {
        question: 'The 2×2 identity matrix is:',
        options: [
          '[[0,0],[0,0]]',
          '[[1,1],[1,1]]',
          '[[1,0],[0,1]]',
          '[[1,1],[0,0]]',
        ],
        explanation:
          'I = [[1,0],[0,1]]. Main diagonal = 1, all others = 0.',
      },
      {
        question: 'If det(A) = 0, matrix A is:',
        options: ['Invertible', 'Singular', 'Identity', 'Transpose'],
        explanation:
          'det(A) = 0 → A is singular (non-invertible). A non-invertible matrix.',
      },
      {
        question: 'The addition [[1,2],[3,4]] + [[5,6],[7,8]]:',
        options: [
          '[[6,8],[10,12]]',
          '[[5,12],[21,32]]',
          '[[6,8],[9,11]]',
          '[[5,6],[7,8]]',
        ],
        explanation:
          'Addition: add corresponding elements. [1+5,2+6],[3+7,4+8] = [[6,8],[10,12]].',
      },
      {
        question: 'The product of [[1,2],[3,4]] by scalar 2:',
        options: [
          '[[2,4],[6,8]]',
          '[[3,4],[5,6]]',
          '[[1,2],[3,4]]',
          '[[2,2],[2,2]]',
        ],
        explanation:
          'Scalar multiplication: each element × 2 = [[2,4],[6,8]].',
      },
      {
        question: 'The order (dimension) of the matrix [[1,2,3],[4,5,6]]:',
        options: ['2×2', '2×3', '3×2', '3×3'],
        explanation:
          'Order: (rows × columns) = 2×3. It has 2 rows, 3 columns.',
      },
      {
        question: 'det([[1,0],[0,1]]) = ?',
        options: ['0', '1', '2', '-1'],
        explanation:
          'det(I) = 1×1 - 0×0 = 1. The determinant of the identity matrix is always 1.',
      },
      {
        question: 'A 2×2 zero matrix has all elements equal to:',
        options: ['0', '1', '-1', 'Different values'],
        explanation:
          'Zero matrix: [[0,0],[0,0]]. All elements are 0.',
      },
      {
        question: 'The inverse of [[2,0],[0,3]] is:',
        options: [
          '[[1/2,0],[0,1/3]]',
          '[[3,0],[0,2]]',
          '[[0,2],[3,0]]',
          '[[1,0],[0,1]]',
        ],
        explanation:
          'For a diagonal matrix, the inverse: each element → 1/element. A⁻¹ = [[1/2,0],[0,1/3]].',
      },
    ],
  },
  'linalg-hard': {
    title: 'Vector Spaces',
    category: 'Linear Algebra',
    duration: '12 min',
    questions: [
      {
        question: 'The rank of the matrix [[1,2],[2,4]] is:',
        options: ['0', '1', '2', '4'],
        explanation:
          'Rank = 1. The second row = 2× the first row, so they are linearly dependent. Only 1 independent row.',
      },
      {
        question: 'The vectors (1,0), (0,1) form:',
        options: [
          'A basis for R²',
          'Dependent vectors',
          'Parallel vectors',
          'A 3D space',
        ],
        explanation:
          '(1,0), (0,1) are the standard basis for R². They are orthogonal and linearly independent.',
      },
      {
        question: 'The dimension of the null space of [[1,2],[2,4]]:',
        options: ['0', '1', '2', '3'],
        explanation:
          'dim(Null space) = n - rank = 2 - 1 = 1. Rank-Nullity Theorem.',
      },
      {
        question: 'The eigenvalues of [[2,0],[0,3]] are:',
        options: ['0, 0', '1, 1', '2, 3', '5, 6'],
        explanation:
          'For a diagonal matrix, the eigenvalues are the diagonal elements: λ₁=2, λ₂=3.',
      },
      {
        question: 'The trace of [[1,2],[3,4]] is:',
        options: ['3', '4', '5', '10'],
        explanation:
          'Trace = sum of the main diagonal = 1 + 4 = 5.',
      },
      {
        question:
          'If A is 3×4, what is the maximum dimension of the column space?',
        options: ['2', '3', '4', '7'],
        explanation:
          'dim(column space) ≤ min(m,n) = min(3,4) = 3. The maximum is 3.',
      },
      {
        question: 'Vectors are orthogonal if their dot product:',
        options: ['= 0', '= 1', '> 0', '< 0'],
        explanation:
          'u·v = 0 → u and v are orthogonal (perpendicular).',
      },
      {
        question: 'The norm ||·||₂ of the vector (3,4,0) is:',
        options: ['3', '4', '5', '7'],
        explanation:
          '||v||₂ = √(3² + 4² + 0²) = √25 = 5. Euclidean norm.',
      },
      {
        question: 'A symmetric matrix satisfies:',
        options: ['A = -A', 'A = A^T', 'A = A^(-1)', 'A = I'],
        explanation:
          'Symmetric matrix: A = A^T. The transpose equals the original matrix.',
      },
      {
        question:
          'If v₁, v₂, v₃ are linearly independent in R³, what is the dimension of span{v₁,v₂,v₃}?',
        options: ['1', '2', '3', '4'],
        explanation:
          'dim(span{v₁,v₂,v₃}) = 3. Three independent vectors in R³ form a basis.',
      },
    ],
  },
  'numth-easy': {
    title: 'Basic Number Theory',
    category: 'Number Theory',
    duration: '8 min',
    questions: [
      {
        question: 'What is the first prime number?',
        options: ['0', '1', '2', '3'],
        explanation:
          '2 is the first prime number and the only even prime number.',
      },
      {
        question: 'What is the GCD(12, 18)?',
        options: ['2', '3', '6', '36'],
        explanation:
          'GCD(12,18) = 6. Factorization: 12=2²×3, 18=2×3². GCD = 2×3 = 6.',
      },
      {
        question: 'Which number is an even integer?',
        options: ['5', '7', '8', '9'],
        explanation:
          '8 is even (divisible by 2). Even numbers end in 0, 2, 4, 6, 8.',
      },
      {
        question: 'What is 13 mod 5?',
        options: ['1', '2', '3', '5'],
        explanation:
          '13 mod 5 = 3. 13 = 2×5 + 3. The remainder when dividing 13 by 5 is 3.',
      },
      {
        question: 'Which number is a composite number?',
        options: ['2', '3', '4', '5'],
        explanation:
          '4 = 2×2 is a composite number. Composite numbers have more than 2 divisors.',
      },
      {
        question: 'LCM(4, 6) is:',
        options: ['2', '6', '12', '24'],
        explanation:
          'LCM(4,6) = 12. Multiples of 4: 4,8,12,16... Multiples of 6: 6,12,18... The least common: 12.',
      },
      {
        question: 'What is 2⁴?',
        options: ['4', '6', '8', '16'],
        explanation: '2⁴ = 2×2×2×2 = 16.',
      },
      {
        question: 'Which number is a prime number?',
        options: ['9', '15', '17', '21'],
        explanation:
          '17 is prime (divisible only by 1 and 17). 9=3², 15=3×5, 21=3×7.',
      },
      {
        question: '18 is divisible by:',
        options: ['4', '5', '6', '7'],
        explanation:
          '18 ÷ 6 = 3. 18 = 2×3². Divisors: 1, 2, 3, 6, 9, 18.',
      },
      {
        question: 'What is 7 mod 3?',
        options: ['0', '1', '2', '3'],
        explanation:
          '7 mod 3 = 1. 7 = 2×3 + 1. The remainder is 1.',
      },
    ],
  },
  'numth-medium': {
    title: 'Congruence & Factorization',
    category: 'Number Theory',
    duration: '10 min',
    questions: [
      {
        question: 'What is 5³ mod 7?',
        options: ['1', '3', '5', '6'],
        explanation:
          "5³ = 125. 125 mod 7: 125 = 17×7 + 6 → 6 mod 7. But 5³ mod 7 = (5 mod 7)³ mod 7 = 5³ mod 7 = 125 mod 7 = 6. The closest choice is 3 according to Fermat's theorem.",
      },
      {
        question:
          "Fermat's Little Theorem: if p is prime, a^p ≡ ? (mod p)",
        options: ['0', '1', 'a', 'p'],
        explanation:
          "Fermat's Theorem: a^p ≡ a (mod p) when p is prime.",
      },
      {
        question: 'How many solutions does x² ≡ 1 (mod 8) have?',
        options: ['0', '2', '4', '8'],
        explanation:
          'x² ≡ 1 (mod 8): x = 1, 3, 5, 7. Total: 4 solutions.',
      },
      {
        question: "Euler's totient function φ(10) = ?",
        options: ['2', '4', '5', '10'],
        explanation:
          'φ(10) = 4. Numbers less than 10 that are coprime to 10: 1, 3, 7, 9.',
      },
      {
        question: 'GCD(a,b) × LCM(a,b) = ?',
        options: ['a + b', 'a - b', 'a × b', 'a / b'],
        explanation:
          'Theorem: GCD(a,b) × LCM(a,b) = a × b.',
      },
      {
        question: 'If a ≡ b (mod n), then a² ≡ ? (mod n)',
        options: ['a', 'b', 'b²', 'n²'],
        explanation:
          'If a ≡ b (mod n), then a² ≡ b² (mod n). Congruences are preserved under exponentiation.',
      },
      {
        question: 'The prime factorization of 60:',
        options: ['2×30', '2²×3×5', '4×15', '6×10'],
        explanation:
          '60 = 2² × 3 × 5. The complete prime factorization.',
      },
      {
        question: 'How many prime numbers are there between 1 and 20?',
        options: ['6', '7', '8', '9'],
        explanation:
          'The prime numbers: 2, 3, 5, 7, 11, 13, 17, 19. Total: 8.',
      },
      {
        question: 'φ(p) where p is prime:',
        options: ['1', 'p', 'p-1', 'p+1'],
        explanation:
          'φ(p) = p - 1 for prime numbers. All numbers from 1 to p-1 are coprime to p.',
      },
      {
        question: 'The modular inverse of 3 mod 7:',
        options: ['2', '3', '5', '6'],
        explanation:
          '3 × 5 ≡ 15 ≡ 1 (mod 7). So the inverse of 3 mod 7 is 5.',
      },
    ],
  },
};
