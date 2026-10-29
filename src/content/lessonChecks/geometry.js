// Questions for the geometry courses (short notation, see index.js).
export default {
  'geo-002': [
    // The Pythagorean theorem
    [
      { a: 0, t: 'n', v: 10,
        al: ['Katetet e një trekëndëshi kënddrejtë janë 6 dhe 8. Sa është hipotenuza?', 'c = √(6² + 8²) = √100 = 10.'],
        en: ['The legs of a right triangle are 6 and 8. How long is the hypotenuse?', 'c = √(6² + 8²) = √100 = 10.'],
        de: ['Die Katheten eines rechtwinkligen Dreiecks sind 6 und 8. Wie lang ist die Hypotenuse?', 'c = √(6² + 8²) = √100 = 10.'] },
      { a: 1, t: 'tf', k: false,
        al: ['(4, 5, 6) është treshe pitagoriane.', 'E gabuar: 4² + 5² = 41, ndërsa 6² = 36.'],
        en: ['(4, 5, 6) is a Pythagorean triple.', 'False: 4² + 5² = 41, but 6² = 36.'],
        de: ['(4, 5, 6) ist ein pythagoreisches Tripel.', 'Falsch: 4² + 5² = 41, aber 6² = 36.'] },
    ],
    // Similar triangles
    [
      { a: 0, t: 'n', v: 15,
        al: ['Dy trekëndësha janë të ngjashëm me raport k = 3. Nëse një brinjë e të voglit është 5, sa është brinja përkatëse e të madhit?', 'Brinjët përkatëse janë në përpjesëtim: 5 · 3 = 15.'],
        en: ['Two triangles are similar with ratio k = 3. If a side of the small one is 5, how long is the matching side of the large one?', 'Corresponding sides are proportional: 5 · 3 = 15.'],
        de: ['Zwei Dreiecke sind ähnlich mit dem Verhältnis k = 3. Eine Seite des kleinen ist 5. Wie lang ist die entsprechende Seite des großen?', 'Entsprechende Seiten sind proportional: 5 · 3 = 15.'] },
      { a: 1, t: 'c', k: 0,
        al: ['Cili kriter mjafton për ngjashmëri nëse dimë vetëm këndet?', ['KK (dy kënde të barabarta)', 'BBB', 'BKB', 'asnjë'], 'Dy kënde të barabarta e përcaktojnë edhe të tretin, pra trekëndëshat janë të ngjashëm.'],
        en: ['Which criterion is enough for similarity if we only know angles?', ['AA (two equal angles)', 'SSS', 'SAS', 'none'], 'Two equal angles fix the third as well, so the triangles are similar.'],
        de: ['Welches Kriterium reicht für Ähnlichkeit, wenn nur Winkel bekannt sind?', ['WW (zwei gleiche Winkel)', 'SSS', 'SWS', 'keines'], 'Zwei gleiche Winkel legen auch den dritten fest, die Dreiecke sind also ähnlich.'] },
    ],
    // Area and perimeter
    [
      { a: 0, t: 'n', v: 24,
        al: ['Sa është sipërfaqja e trekëndëshit me bazë 8 dhe lartësi 6?', 'S = (b · h)/2 = (8 · 6)/2 = 24.'],
        en: ['What is the area of a triangle with base 8 and height 6?', 'A = (b · h)/2 = (8 · 6)/2 = 24.'],
        de: ['Wie groß ist der Flächeninhalt eines Dreiecks mit Grundseite 8 und Höhe 6?', 'A = (g · h)/2 = (8 · 6)/2 = 24.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Te trekëndëshi me kënd të gjerë, një lartësi mund të bjerë jashtë trekëndëshit.', 'E vërtetë: lartësia nga një kënd i ngushtë bie në zgjatimin e brinjës përballë.'],
        en: ['In an obtuse triangle, a height can fall outside the triangle.', 'True: the height from an acute vertex lands on the extension of the opposite side.'],
        de: ['In einem stumpfwinkligen Dreieck kann eine Höhe außerhalb des Dreiecks liegen.', 'Richtig: Die Höhe von einer spitzen Ecke trifft die Verlängerung der Gegenseite.'] },
    ],
  ],
  'geo-003': [
    // Regular polygons
    [
      { a: 0, t: 'n', v: 720,
        al: ['Sa është shuma e këndeve të brendshme të një gjashtëkëndëshi?', '(n − 2) · 180° = 4 · 180° = 720°.'],
        en: ['What is the sum of the interior angles of a hexagon (in degrees)?', '(n − 2) · 180° = 4 · 180° = 720°.'],
        de: ['Wie groß ist die Innenwinkelsumme eines Sechsecks (in Grad)?', '(n − 2) · 180° = 4 · 180° = 720°.'] },
      { a: 1, t: 'n', v: 36,
        al: ['Sa gradë është këndi i jashtëm i një dhjetëkëndëshi të rregullt?', 'Këndi i jashtëm = 360°/n = 360°/10 = 36°.'],
        en: ['How many degrees is an exterior angle of a regular decagon?', 'Exterior angle = 360°/n = 360°/10 = 36°.'],
        de: ['Wie viel Grad hat ein Außenwinkel eines regelmäßigen Zehnecks?', 'Außenwinkel = 360°/n = 360°/10 = 36°.'] },
    ],
    // Parallelograms
    [
      { a: 0, t: 'tf', k: true,
        al: ['Diagonalet e paralelogramit përgjysmojnë njëra-tjetrën.', 'E vërtetë: pika e prerjes është mesi i të dy diagonaleve.'],
        en: ['The diagonals of a parallelogram bisect each other.', 'True: their intersection is the midpoint of both diagonals.'],
        de: ['Die Diagonalen eines Parallelogramms halbieren sich gegenseitig.', 'Richtig: Ihr Schnittpunkt ist der Mittelpunkt beider Diagonalen.'] },
      { a: 2, t: 'n', v: 35,
        al: ['Paralelogrami ka bazë 7 dhe lartësi 5. Sa është sipërfaqja?', 'S = b · h = 7 · 5 = 35.'],
        en: ['A parallelogram has base 7 and height 5. What is its area?', 'A = b · h = 7 · 5 = 35.'],
        de: ['Ein Parallelogramm hat die Grundseite 7 und die Höhe 5. Wie groß ist sein Flächeninhalt?', 'A = g · h = 7 · 5 = 35.'] },
    ],
  ],
  'geo-004': [
    // Elements of a circle
    [
      { a: 1, t: 'c', k: 2,
        al: ['Si quhet segmenti që i ka të dy skajet në rreth?', ['rrezja', 'harku', 'korda', 'sektori'], 'Korda bashkon dy pika të rrethit; diametri është korda më e gjatë.'],
        en: ['What is a segment with both endpoints on the circle called?', ['radius', 'arc', 'chord', 'sector'], 'A chord joins two points of the circle; the diameter is the longest chord.'],
        de: ['Wie heißt eine Strecke, deren beide Endpunkte auf dem Kreis liegen?', ['Radius', 'Bogen', 'Sehne', 'Sektor'], 'Eine Sehne verbindet zwei Kreispunkte; der Durchmesser ist die längste Sehne.'] },
      { a: 2, t: 'c', k: 1,
        al: ['Sa është perimetri i rrethit me rreze 5?', ['25π', '10π', '5π', '100π'], 'C = 2πr = 2π · 5 = 10π.'],
        en: ['What is the circumference of a circle with radius 5?', ['25π', '10π', '5π', '100π'], 'C = 2πr = 2π · 5 = 10π.'],
        de: ['Wie groß ist der Umfang eines Kreises mit Radius 5?', ['25π', '10π', '5π', '100π'], 'U = 2πr = 2π · 5 = 10π.'] },
    ],
    // Angles and circles
    [
      { a: 0, t: 'n', v: 40,
        al: ['Këndi qendror mbi një hark është 80°. Sa gradë është këndi periferik mbi të njëjtin hark?', 'Këndi periferik është gjysma e këndit qendror: 80°/2 = 40°.'],
        en: ['The central angle on an arc is 80°. How many degrees is the inscribed angle on the same arc?', 'The inscribed angle is half the central angle: 80°/2 = 40°.'],
        de: ['Der Mittelpunktswinkel über einem Bogen ist 80°. Wie groß ist der Umfangswinkel über demselben Bogen?', 'Der Umfangswinkel ist halb so groß: 80°/2 = 40°.'] },
      { a: 2, t: 'n', v: 90,
        al: ['Sa gradë është këndi midis tangjentes dhe rrezes në pikën e takimit?', 'Tangjentja është pingul me rrezen: 90°.'],
        en: ['How many degrees is the angle between a tangent and the radius at the point of tangency?', 'The tangent is perpendicular to the radius: 90°.'],
        de: ['Wie viel Grad beträgt der Winkel zwischen Tangente und Radius im Berührpunkt?', 'Die Tangente steht senkrecht auf dem Radius: 90°.'] },
    ],
  ],
  'geo-005': [
    // Cuboid
    [
      { a: 0, t: 'n', v: 12,
        al: ['Sa brinjë ka një kuboid?', 'Kuboidi ka 6 faqe, 12 brinjë dhe 8 kulme.'],
        en: ['How many edges does a cuboid have?', 'A cuboid has 6 faces, 12 edges and 8 vertices.'],
        de: ['Wie viele Kanten hat ein Quader?', 'Ein Quader hat 6 Flächen, 12 Kanten und 8 Ecken.'] },
      { a: 1, t: 'n', v: 24,
        al: ['Sa është vëllimi i kuboidit me përmasa 2, 3 dhe 4?', 'V = 2 · 3 · 4 = 24.'],
        en: ['What is the volume of a cuboid measuring 2 × 3 × 4?', 'V = 2 · 3 · 4 = 24.'],
        de: ['Wie groß ist das Volumen eines Quaders mit den Maßen 2 × 3 × 4?', 'V = 2 · 3 · 4 = 24.'] },
    ],
    // Sphere, cylinder, cone
    [
      { a: 0, t: 'c', k: 2,
        al: ['Cilindri dhe koni kanë të njëjtën rreze dhe lartësi. Sa herë më i vogël është vëllimi i konit?', ['2 herë', 'njësoj', '3 herë', '4 herë'], 'V_kon = πr²h/3, pra një e treta e vëllimit të cilindrit.'],
        en: ['A cylinder and a cone have the same radius and height. How many times smaller is the cone\'s volume?', ['2 times', 'the same', '3 times', '4 times'], 'V_cone = πr²h/3, a third of the cylinder\'s volume.'],
        de: ['Zylinder und Kegel haben denselben Radius und dieselbe Höhe. Wievielmal kleiner ist das Kegelvolumen?', ['2-mal', 'gleich groß', '3-mal', '4-mal'], 'V_Kegel = πr²h/3, also ein Drittel des Zylindervolumens.'] },
      { a: 0, t: 'c', k: 1,
        al: ['Sa është sipërfaqja e sferës me rreze 3?', ['9π', '36π', '12π', '27π'], 'S = 4πr² = 4π · 9 = 36π.'],
        en: ['What is the surface area of a sphere with radius 3?', ['9π', '36π', '12π', '27π'], 'A = 4πr² = 4π · 9 = 36π.'],
        de: ['Wie groß ist die Oberfläche einer Kugel mit Radius 3?', ['9π', '36π', '12π', '27π'], 'O = 4πr² = 4π · 9 = 36π.'] },
    ],
  ],
  'geo-006': [
    // Equation of a circle
    [
      { a: 0, t: 'n', v: 5,
        al: ['Sa është rrezja e rrethit (x − 1)² + (y + 2)² = 25?', 'r² = 25, pra r = 5 (qendra është (1; −2)).'],
        en: ['What is the radius of the circle (x − 1)² + (y + 2)² = 25?', 'r² = 25, so r = 5 (the center is (1, −2)).'],
        de: ['Welchen Radius hat der Kreis (x − 1)² + (y + 2)² = 25?', 'r² = 25, also r = 5 (Mittelpunkt (1; −2)).'] },
      { a: 1, t: 'c', k: 3,
        al: ['Cila është qendra e rrethit x² + y² − 6x + 4y = 0?', ['(−3; 2)', '(6; −4)', '(−6; 4)', '(3; −2)'], 'Plotësojmë katrorët: (x − 3)² + (y + 2)² = 13, pra qendra (3; −2).'],
        en: ['What is the center of the circle x² + y² − 6x + 4y = 0?', ['(−3, 2)', '(6, −4)', '(−6, 4)', '(3, −2)'], 'Complete the squares: (x − 3)² + (y + 2)² = 13, so the center is (3, −2).'],
        de: ['Wo liegt der Mittelpunkt des Kreises x² + y² − 6x + 4y = 0?', ['(−3; 2)', '(6; −4)', '(−6; 4)', '(3; −2)'], 'Quadratische Ergänzung: (x − 3)² + (y + 2)² = 13, Mittelpunkt (3; −2).'] },
    ],
    // Conic sections
    [
      { a: 1, t: 'c', k: 0,
        al: ['Çfarë kurbe është x²/9 + y²/4 = 1?', ['elipsë', 'hiperbolë', 'parabolë', 'drejtëz'], 'Forma x²/a² + y²/b² = 1 është elipsë.'],
        en: ['What curve is x²/9 + y²/4 = 1?', ['ellipse', 'hyperbola', 'parabola', 'line'], 'The form x²/a² + y²/b² = 1 is an ellipse.'],
        de: ['Welche Kurve ist x²/9 + y²/4 = 1?', ['Ellipse', 'Hyperbel', 'Parabel', 'Gerade'], 'Die Form x²/a² + y²/b² = 1 ist eine Ellipse.'] },
      { a: 2, t: 'tf', k: true,
        al: ['Orbitat e planetëve janë elipsa.', 'E vërtetë: sipas ligjit të parë të Keplerit, planetët lëvizin në elipsa.'],
        en: ['Planetary orbits are ellipses.', 'True: by Kepler\'s first law, planets move on ellipses.'],
        de: ['Planetenbahnen sind Ellipsen.', 'Richtig: Nach dem ersten Keplerschen Gesetz bewegen sich Planeten auf Ellipsen.'] },
    ],
  ],
  'geo-007': [
    // Curves and parametrization
    [
      { a: 0, t: 'c', k: 1,
        al: ['Cili është vektori tangjent i r(t) = (t², 3t)?', ['(t², 3)', '(2t, 3)', '(2t, 3t)', '(2, 0)'], 'Derivojmë çdo koordinatë: r\'(t) = (2t, 3).'],
        en: ['What is the tangent vector of r(t) = (t², 3t)?', ['(t², 3)', '(2t, 3)', '(2t, 3t)', '(2, 0)'], 'Differentiate each coordinate: r\'(t) = (2t, 3).'],
        de: ['Wie lautet der Tangentenvektor von r(t) = (t², 3t)?', ['(t², 3)', '(2t, 3)', '(2t, 3t)', '(2, 0)'], 'Jede Koordinate ableiten: r\'(t) = (2t, 3).'] },
      { a: 1, t: 'c', k: 2,
        al: ['Rrethi me rreze 4 ka kurbaturë konstante. Sa është ajo?', ['4', '16', '1/4', '0'], 'Për rrethin R = r = 4, pra κ = 1/R = 1/4.'],
        en: ['A circle of radius 4 has constant curvature. What is it?', ['4', '16', '1/4', '0'], 'For a circle R = r = 4, so κ = 1/R = 1/4.'],
        de: ['Ein Kreis mit Radius 4 hat konstante Krümmung. Wie groß ist sie?', ['4', '16', '1/4', '0'], 'Beim Kreis ist R = r = 4, also κ = 1/R = 1/4.'] },
    ],
  ],
  'geo-008': [
    // Topological spaces
    [
      { a: 0, t: 'tf', k: true,
        al: ['Në topologji, një filxhan me vesh dhe një petull (torus) janë homeomorfe.', 'E vërtetë: secila ka një vrimë, prandaj njëra mund të deformohet në tjetrën pa u grisur.'],
        en: ['In topology, a mug with a handle and a doughnut (torus) are homeomorphic.', 'True: each has one hole, so one can be deformed into the other without tearing.'],
        de: ['In der Topologie sind eine Tasse mit Henkel und ein Donut (Torus) homöomorph.', 'Richtig: Beide haben ein Loch, eins lässt sich ohne Reißen in das andere verformen.'] },
      { a: 1, t: 'c', k: 1,
        al: ['Cila veti NUK kërkohet nga bashkësitë e hapura të një topologjie?', ['bashkimi i çfarëdo familjeje është i hapur', 'prerja e çfarëdo familjeje (edhe të pafundme) është e hapur', '∅ dhe X janë të hapura', 'prerja e fundme është e hapur'], 'Kërkohet vetëm prerja e fundme; prerja e pafundme e bashkësive të hapura mund të mos jetë e hapur.'],
        en: ['Which property is NOT required of the open sets of a topology?', ['any union is open', 'any intersection (even infinite) is open', '∅ and X are open', 'a finite intersection is open'], 'Only finite intersections are required; an infinite intersection of open sets need not be open.'],
        de: ['Welche Eigenschaft wird von den offenen Mengen einer Topologie NICHT verlangt?', ['jede Vereinigung ist offen', 'jeder Durchschnitt (auch unendlich) ist offen', '∅ und X sind offen', 'endliche Durchschnitte sind offen'], 'Verlangt werden nur endliche Durchschnitte; ein unendlicher Durchschnitt offener Mengen muss nicht offen sein.'] },
    ],
  ],
};
