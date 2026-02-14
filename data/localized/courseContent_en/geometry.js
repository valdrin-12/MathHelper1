export const courseContents_geometry_en = {

  // geo-002: Triangles (Advanced)
  'geo-002': {
    lessons: [
      {
        title: 'The Pythagorean Theorem and Applications',
        theory: 'The Pythagorean Theorem: in a right triangle, the square of the hypotenuse equals the sum of the squares of the two legs. a² + b² = c², where c is the hypotenuse.\n\nPythagorean triples are sets of three integers (a, b, c): (3,4,5), (5,12,13), (8,15,17), (7,24,25).\n\nApplications: calculating distances, diagonals, heights, and engineering problems.',
        keyPoints: [
          'a² + b² = c² (right triangles only)',
          'Converse: if a² + b² = c², the triangle is a right triangle',
          'Pythagorean triples: (3,4,5), (5,12,13)...',
          'Distance between 2 points: d = √[(x₂-x₁)² + (y₂-y₁)²]',
        ],
        examples: [
          {
            example: 'The legs of a right triangle are 9 and 12. Find the hypotenuse.',
            solution: 'c² = 81 + 144 = 225\nc = 15',
          },
          {
            example: 'Find the distance between A(1, 2) and B(5, 6)',
            solution: 'd = √[(5-1)² + (6-2)²] = √[16+16] = √32 = 4√2',
          },
        ],
        practice: [
          {
            problem: 'The diagonal of a square is 10 cm. What is the side length?',
            solution: 'a = 5√2 ≈ 7.07 cm',
            steps: [
              'The diagonal divides the square into a right triangle',
              'd² = a² + a² = 2a²',
              '100 = 2a²',
              'a² = 50',
              'a = √50 = 5√2 ≈ 7.07 cm',
            ],
          },
        ],
      },
      {
        title: 'Similarity of Triangles',
        theory: 'Two triangles are similar (~) if they have the same angles. Their sides are proportional. The similarity ratio k = ratio of corresponding sides.\n\nSimilarity criteria: AA (two equal angles), SSS (all 3 side ratios equal), SAS (two ratios and the included angle).\n\nApplications: indirect measurement of heights, inaccessible distances, projections.',
        keyPoints: [
          'AA: two equal angles → similar',
          'Ratio of areas = k²',
          'Ratio of volumes = k³',
          'Midsegment theorem: the midsegment is parallel to the base',
        ],
        examples: [
          {
            example: 'Two similar triangles have a ratio of 1:3. If the area of the smaller one = 12 cm², what is the area of the larger one?',
            solution: 'Area ratio = (1:3)² = 1:9\nArea = 12 × 9 = 108 cm²',
          },
        ],
        practice: [
          {
            problem: 'The shadow of a tree is 8 m long, and at the same time the shadow of a pole is 2 m (height 3 m). What is the height of the tree?',
            solution: 'h = 12 m',
            steps: [
              'The triangles formed are similar',
              'h/3 = 8/2',
              'h = 3 × 4 = 12 m',
            ],
          },
        ],
      },
      {
        title: 'Area and Perimeter Formulas',
        theory: 'The area of a triangle can be calculated using several formulas depending on the given information:\n- S = (b × h) / 2 (base × height)\n- S = (a × b × sin C) / 2 (two sides and the included angle)\n- Heron\'s formula: S = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2\n\nThe height of a triangle can fall inside or outside the figure (obtuse triangle).',
        keyPoints: [
          'S = bh/2 (basic formula)',
          'S = (1/2)ab sin C',
          'Heron: s = (a+b+c)/2, S = √[s(s-a)(s-b)(s-c)]',
          'P = a + b + c (perimeter)',
        ],
        examples: [
          {
            example: 'Find the area of a triangle with sides 5, 7, 8 cm.',
            solution: 's = (5+7+8)/2 = 10\nS = √[10×5×3×2] = √300 = 10√3 ≈ 17.3 cm²',
          },
        ],
        practice: [
          {
            problem: 'An equilateral triangle with side 6 cm. Find the area.',
            solution: 'S = 9√3 ≈ 15.6 cm²',
            steps: [
              'Height: h = 6×√3/2 = 3√3',
              'S = (6 × 3√3)/2 = 9√3',
              '≈ 15.59 cm²',
            ],
          },
        ],
      },
    ],
  },

  // geo-003: Quadrilaterals and Polygons
  'geo-003': {
    lessons: [
      {
        title: 'Regular Polygons',
        theory: 'A regular polygon has all sides and all angles equal. The sum of interior angles = (n-2) × 180°, where n is the number of sides.\n\nEach interior angle = [(n-2) × 180°] / n\nEach exterior angle = 360° / n\n\nRegular pentagon: 5 sides, angle = 108°; Hexagon: 6 sides, 120°; Octagon: 8 sides, 135°.',
        keyPoints: [
          'Sum of angles = (n-2) × 180°',
          'Interior angle = (n-2)×180°/n',
          'Exterior angle = 360°/n',
          'Regular polygon: all sides and angles are equal',
        ],
        examples: [
          {
            example: 'What is the sum of the interior angles of an octagon (8 sides)?',
            solution: '(8-2) × 180° = 1080°',
          },
          {
            example: 'Find the interior angle of a regular hexagon.',
            solution: '(6-2) × 180° / 6 = 720°/6 = 120°',
          },
        ],
        practice: [
          {
            problem: 'The sum of the interior angles = 1440°. How many sides does the polygon have?',
            solution: '10 sides (decagon)',
            steps: [
              '(n-2) × 180 = 1440',
              'n - 2 = 8',
              'n = 10',
            ],
          },
        ],
      },
      {
        title: 'Parallelograms and Their Properties',
        theory: 'A parallelogram has opposite sides that are parallel and equal. Opposite angles are equal. The diagonals bisect each other.\n\nTypes: rectangle (all angles 90°), rhombus (all sides equal), square (both properties).\n\nS = b × h (base × height). The diagonals of a rhombus are perpendicular.',
        keyPoints: [
          'Opposite sides: parallel and equal',
          'Opposite angles: equal',
          'Diagonals: bisect each other',
          'S = base × height',
        ],
        examples: [
          {
            example: 'A parallelogram has base 8 cm and height 5 cm. Find the area.',
            solution: 'S = 8 × 5 = 40 cm²',
          },
        ],
        practice: [
          {
            problem: 'A rhombus with diagonals 12 cm and 16 cm. Find the area.',
            solution: 'S = 96 cm²',
            steps: [
              'Area formula for a rhombus: S = d₁ × d₂ / 2',
              'S = 12 × 16 / 2 = 96 cm²',
            ],
          },
        ],
      },
    ],
  },

  // geo-004: Circles
  'geo-004': {
    lessons: [
      {
        title: 'Elements of a Circle',
        theory: 'A circle is the set of all points in a plane that are at equal distance (radius r) from the center O. The diameter d = 2r.\n\nElements: radius (r), diameter (d), chord (a segment with both endpoints on the circle), arc (a part of the circle), sector (like a slice of pie), segment (the region between a chord and an arc).\n\nThe number π ≈ 3.14159... is the ratio of the circumference to the diameter: C = πd = 2πr',
        keyPoints: [
          'Circumference: C = 2πr = πd',
          'Area: S = πr²',
          'Central angle = arc measure',
          'Arc length = (θ/360°) × 2πr',
        ],
        examples: [
          {
            example: 'Find the circumference and area of a circle with r = 7 cm.',
            solution: 'C = 2π×7 = 14π ≈ 43.98 cm\nS = π×49 = 49π ≈ 153.94 cm²',
          },
        ],
        practice: [
          {
            problem: 'Find the arc length AB if the central angle = 60° and r = 12 cm.',
            solution: 'L = 4π ≈ 12.57 cm',
            steps: [
              'L = (60/360) × 2π × 12',
              '= (1/6) × 24π',
              '= 4π ≈ 12.57 cm',
            ],
          },
        ],
      },
      {
        title: 'Angles and Relationships with Circles',
        theory: 'Inscribed angle theorem: an inscribed angle equals half the central angle that subtends the same arc.\n\nAngles formed by two secants (tangent-chord, chord-chord, etc.) are calculated using different formulas based on their configuration.\n\nTangent theorem: a tangent to a circle is perpendicular to the radius at the point of tangency. Two tangent segments drawn from an external point are equal in length.',
        keyPoints: [
          'Inscribed angle = ½ central angle',
          'Angle inscribed in a semicircle = 90°',
          'Tangent ⊥ radius at the point of tangency',
          'Two tangents from an external point: equal in length',
        ],
        examples: [
          {
            example: 'Central angle AOB = 80°. What is the inscribed angle ACB?',
            solution: 'Inscribed angle = 80°/2 = 40°',
          },
        ],
        practice: [
          {
            problem: 'Inscribed angle ABC = 35°. What is the central angle AOC?',
            solution: 'AOC = 70°',
            steps: [
              'Central angle = 2 × inscribed angle',
              'AOC = 2 × 35° = 70°',
            ],
          },
        ],
      },
    ],
  },

  // geo-005: Solid Geometry
  'geo-005': {
    lessons: [
      {
        title: 'Volume and Surface Area of a Cuboid',
        theory: 'A cuboid (rectangular parallelepiped) has 6 rectangular faces, 12 edges, and 8 vertices.\n\nVolume: V = length × width × height = l × w × h\nTotal surface area: ST = 2(lw + lh + wh)\nSpace diagonal of the cuboid: d = √(l² + w² + h²)\n\nThe cube is a special case: V = a³, ST = 6a², d = a√3',
        keyPoints: [
          'V = l × w × h',
          'ST = 2(lw + lh + wh)',
          'Space diagonal = √(l²+w²+h²)',
          'Cube: V = a³, ST = 6a²',
        ],
        examples: [
          {
            example: 'A cuboid 3×4×5 cm. Find the volume and total surface area.',
            solution: 'V = 60 cm³\nST = 2(12+15+20) = 94 cm²',
          },
        ],
        practice: [
          {
            problem: 'A cube with total surface area 150 cm². Find the edge length and volume.',
            solution: 'a = 5 cm, V = 125 cm³',
            steps: [
              '6a² = 150',
              'a² = 25',
              'a = 5 cm',
              'V = 5³ = 125 cm³',
            ],
          },
        ],
      },
      {
        title: 'Spheres, Cylinders, and Cones',
        theory: 'Cylinder: V = πr²h, ST = 2πr(r + h)\nCone: V = πr²h/3, lateral surface area = πrl (l = slant height)\nSphere: V = 4πr³/3, ST = 4πr²\n\nThese shapes are found everywhere in real life: cans (cylinder), ice cream cones (cone), balls (sphere), tanks (cylinder).',
        keyPoints: [
          'Cylinder: V = πr²h',
          'Cone: V = πr²h/3 = cylinder/3',
          'Sphere: V = 4πr³/3, S = 4πr²',
          'Slant height of a cone: l = √(r²+h²)',
        ],
        examples: [
          {
            example: 'A sphere with r = 6 cm. Find the volume.',
            solution: 'V = 4π(216)/3 = 288π ≈ 904.8 cm³',
          },
        ],
        practice: [
          {
            problem: 'A cylinder with r = 5 cm, h = 10 cm. Find the volume and total surface area.',
            solution: 'V = 250π ≈ 785.4 cm³, ST = 150π ≈ 471.2 cm²',
            steps: [
              'V = π × 25 × 10 = 250π',
              'ST = 2π × 5 × (5 + 10) = 2π × 75 = 150π',
            ],
          },
        ],
      },
    ],
  },

  // geo-006: Analytic Geometry
  'geo-006': {
    lessons: [
      {
        title: 'Equation of a Circle',
        theory: 'A circle with center (h, k) and radius r has the equation: (x-h)² + (y-k)² = r²\nIn expanded form: x² + y² + Dx + Ey + F = 0\n\nTo find the center and radius from the expanded form, complete the square twice.',
        keyPoints: [
          '(x-h)² + (y-k)² = r² (standard form)',
          'Center (h, k), radius r',
          'Expanded form: complete the square',
          'Circle passes through (a,b): (a-h)²+(b-k)²=r²',
        ],
        examples: [
          {
            example: 'Find the center and radius of: (x-2)² + (y+3)² = 25',
            solution: 'Center (2, -3), radius r = 5',
          },
          {
            example: 'Write the equation of the circle with center (1, -2) and radius 4.',
            solution: '(x-1)² + (y+2)² = 16',
          },
        ],
        practice: [
          {
            problem: 'Find the center and radius of the circle: x² + y² - 6x + 4y - 12 = 0',
            solution: 'Center (3, -2), r = 5',
            steps: [
              'Group: (x²-6x) + (y²+4y) = 12',
              'Complete: (x²-6x+9) + (y²+4y+4) = 12+9+4',
              '(x-3)² + (y+2)² = 25',
              'Center (3,-2), r=5',
            ],
          },
        ],
      },
      {
        title: 'Conic Sections',
        theory: 'Conic sections are formed by the intersection of a cone with a plane: ellipse, hyperbola, parabola (and degenerate cases: point, line).\n\nParabola: y = ax² or x = ay² - directrix and focus\nEllipse: x²/a² + y²/b² = 1\nHyperbola: x²/a² - y²/b² = 1\n\nConic sections have numerous applications: planetary orbits (ellipse), satellite dishes (parabola), ballistic trajectories.',
        keyPoints: [
          'Parabola: y = ax² (focus and directrix)',
          'Ellipse: x²/a² + y²/b² = 1',
          'Hyperbola: x²/a² - y²/b² = 1',
          'Orbits are elliptical (Kepler\'s law)',
        ],
        examples: [
          {
            example: 'Find the semi-axes of the ellipse: x²/16 + y²/9 = 1',
            solution: 'a = 4 (semi-major axis), b = 3 (semi-minor axis)',
          },
        ],
        practice: [
          {
            problem: 'Classify the conic section: 4x² + 9y² = 36',
            solution: 'Ellipse with a=3, b=2',
            steps: [
              'Divide by 36: x²/9 + y²/4 = 1',
              'Ellipse form: x²/a² + y²/b² = 1',
              'a = 3, b = 2 → ellipse',
            ],
          },
        ],
      },
    ],
  },

  // geo-007: Differential Geometry
  'geo-007': {
    lessons: [
      {
        title: 'Curves and Parametrization',
        theory: 'A plane curve can be parametrized as r(t) = (x(t), y(t)). The tangent vector is r\'(t) = (x\'(t), y\'(t)). The curvature κ measures how quickly the direction of the tangent changes.\n\nCurvature: κ = |r\' × r\'\'| / |r\'|³\nRadius of curvature: R = 1/κ\n\nNatural coordinates (s = arc length) and the Frenet-Serret frame (T, N, B) characterize a space curve.',
        keyPoints: [
          'r(t) = (x(t), y(t), z(t)) parametrization',
          'T = tangent, N = normal, B = binormal',
          'Curvature κ = 1/R',
          'Torsion τ measures spatial twisting',
        ],
        examples: [
          {
            example: 'Parametrize a circle with radius r: r(t) = (r cos t, r sin t)',
            solution: 'x = r cos t, y = r sin t\nr\'(t) = (-r sin t, r cos t)\n|r\'| = r (constant speed)',
          },
        ],
        practice: [
          {
            problem: 'Find the curvature of the curve y = x² at the point (0, 0).',
            solution: 'κ = 2',
            steps: [
              'y\' = 2x, y\'\' = 2',
              'κ = |y\'\'| / (1 + y\'²)^(3/2)',
              'At x=0: κ = 2/(1+0)^(3/2) = 2',
            ],
          },
        ],
      },
    ],
  },

  // geo-008: Introduction to Topology
  'geo-008': {
    lessons: [
      {
        title: 'Topological Spaces',
        theory: 'Topology studies the properties of spaces that are preserved under continuous transformations (homeomorphisms). "Rubber-sheet geometry" - paths, knots, surfaces.\n\nA topological space (X, τ) where τ is a collection of "open" subsets satisfying: ∅ and X are open, the union of any family of open sets is open, the finite intersection of open sets is open.\n\nTopology allows us to discuss "closeness", "continuity", and "connectedness" without a specific metric.',
        keyPoints: [
          'Open subset: satisfies the topological axioms',
          'Homeomorphism = continuous bijection with continuous inverse',
          'Topological invariant: preserved under homeomorphisms',
          'Example: a coffee cup ≅ a donut (topologically)',
        ],
        examples: [
          {
            example: 'Are a circle and a square topologically equivalent?',
            solution: 'Yes! Both are curves homeomorphic to S¹ (homeomorphic to each other). You can "deform" a square into a circle without cutting or gluing.',
          },
        ],
        practice: [
          {
            problem: 'The number of holes (genus) of a torus is 1. Is it homeomorphic to a sphere?',
            solution: 'No. A sphere has genus 0, a torus has genus 1. Genus is a topological invariant.',
            steps: [
              'Sphere S²: genus 0 (no holes)',
              'Torus T²: genus 1 (one hole)',
              'Genus differs → they are not homeomorphic',
            ],
          },
        ],
      },
    ],
  },
};
