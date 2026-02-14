export const courseContents_geometry_de = {

  // geo-002: Dreiecke (Fortgeschritten)
  'geo-002': {
    lessons: [
      {
        title: 'Der Satz des Pythagoras und Anwendungen',
        theory: 'Der Satz des Pythagoras: Im rechtwinkligen Dreieck ist das Quadrat der Hypotenuse gleich der Summe der Quadrate der Katheten. a² + b² = c², wobei c die Hypotenuse ist.\n\nPythagoreische Zahlentripel sind ganzzahlige Dreiertupel (a, b, c): (3,4,5), (5,12,13), (8,15,17), (7,24,25).\n\nAnwendungen: Berechnung von Entfernungen, Diagonalen, Hoehen, Ingenieurproblemen.',
        keyPoints: [
          'a² + b² = c² (nur bei rechtwinkligen Dreiecken)',
          'Umkehrung: Wenn a²+b²=c², dann ist das Dreieck rechtwinklig',
          'Pythagoreische Tripel: (3,4,5), (5,12,13)...',
          'Abstand zwischen 2 Punkten: d = √[(x₂-x₁)² + (y₂-y₁)²]',
        ],
        examples: [
          {
            example: 'Die Katheten eines rechtwinkligen Dreiecks sind 9 und 12. Bestimme die Hypotenuse.',
            solution: 'c² = 81 + 144 = 225\nc = 15',
          },
          {
            example: 'Bestimme den Abstand zwischen A(1, 2) und B(5, 6)',
            solution: 'd = √[(5-1)² + (6-2)²] = √[16+16] = √32 = 4√2',
          },
        ],
        practice: [
          {
            problem: 'Die Diagonale eines Quadrats betraegt 10 cm. Wie lang ist die Seite?',
            solution: 'a = 5√2 ≈ 7.07 cm',
            steps: [
              'Die Diagonale teilt das Quadrat in ein rechtwinkliges Dreieck',
              'd² = a² + a² = 2a²',
              '100 = 2a²',
              'a² = 50',
              'a = √50 = 5√2 ≈ 7.07 cm',
            ],
          },
        ],
      },
      {
        title: 'Aehnlichkeit von Dreiecken',
        theory: 'Zwei Dreiecke sind aehnlich (~), wenn sie die gleichen Winkel besitzen. Ihre Seiten sind proportional. Das Aehnlichkeitsverhaeltnis k = Verhaeltnis entsprechender Seiten.\n\nAehnlichkeitskriterien: AA (zwei gleiche Winkel), SSS (alle 3 Seitenverhaeltnisse gleich), SAS (zwei Seitenverhaeltnisse und der eingeschlossene Winkel gleich).\n\nAnwendungen: indirekte Messung von Hoehen, unzugaenglichen Entfernungen, Projektionen.',
        keyPoints: [
          'AA: zwei gleiche Winkel → aehnlich',
          'Flaechenverhaeltnis = k²',
          'Volumenverhaeltnis = k³',
          'Mitteldreieck: die Mittellinie ist parallel zur Grundseite',
        ],
        examples: [
          {
            example: 'Zwei aehnliche Dreiecke haben das Verhaeltnis 1:3. Wenn die Flaeche des kleineren = 12 cm² ist, wie gross ist die Flaeche des groesseren?',
            solution: 'Flaechenverhaeltnis = (1:3)² = 1:9\nFlaeche = 12 × 9 = 108 cm²',
          },
        ],
        practice: [
          {
            problem: 'Der Schatten eines Baumes ist 8 m lang und gleichzeitig ist der Schatten eines Stabes 2 m lang (Stabhoehe 3 m). Wie hoch ist der Baum?',
            solution: 'h = 12 m',
            steps: [
              'Die entstehenden Dreiecke sind aehnlich',
              'h/3 = 8/2',
              'h = 3 × 4 = 12 m',
            ],
          },
        ],
      },
      {
        title: 'Flaechenformeln und Umfang',
        theory: 'Die Flaeche eines Dreiecks kann je nach gegebenen Groessen mit verschiedenen Formeln berechnet werden:\n- S = (b × h) / 2 (Grundseite × Hoehe)\n- S = (a × b × sin C) / 2 (zwei Seiten und der eingeschlossene Winkel)\n- Formel von Heron: S = √[s(s-a)(s-b)(s-c)] wobei s = (a+b+c)/2\n\nDie Hoehe eines Dreiecks kann innerhalb oder ausserhalb der Figur liegen (bei stumpfwinkligen Dreiecken).',
        keyPoints: [
          'S = bh/2 (Grundformel)',
          'S = (1/2)ab sin C',
          'Heron: s = (a+b+c)/2, S = √[s(s-a)(s-b)(s-c)]',
          'P = a + b + c (Umfang)',
        ],
        examples: [
          {
            example: 'Bestimme die Flaeche des Dreiecks mit den Seiten 5, 7, 8 cm.',
            solution: 's = (5+7+8)/2 = 10\nS = √[10×5×3×2] = √300 = 10√3 ≈ 17.3 cm²',
          },
        ],
        practice: [
          {
            problem: 'Gleichseitiges Dreieck mit der Seitenlaenge 6 cm. Bestimme die Flaeche.',
            solution: 'S = 9√3 ≈ 15.6 cm²',
            steps: [
              'Hoehe: h = 6×√3/2 = 3√3',
              'S = (6 × 3√3)/2 = 9√3',
              '≈ 15.59 cm²',
            ],
          },
        ],
      },
    ],
  },

  // geo-003: Vierecke und Vielecke
  'geo-003': {
    lessons: [
      {
        title: 'Regelmaessige Vielecke',
        theory: 'Ein regelmaessiges Vieleck hat alle Seiten und Winkel gleich. Die Innenwinkelsumme = (n-2) × 180°, wobei n die Anzahl der Seiten ist.\n\nDer Innenwinkel an jeder Ecke = [(n-2) × 180°] / n\nDer Aussenwinkel = 360° / n\n\nRegelmaessiges Fuenfeck: 5 Seiten, Winkel = 108°; Sechseck: 6 Seiten, 120°; Achteck: 8 Seiten, 135°.',
        keyPoints: [
          'Winkelsumme = (n-2) × 180°',
          'Innenwinkel = (n-2)×180°/n',
          'Aussenwinkel = 360°/n',
          'Regelmaessiges Vieleck: alle Seiten und Winkel sind gleich',
        ],
        examples: [
          {
            example: 'Wie gross ist die Innenwinkelsumme eines Achtecks (8 Seiten)?',
            solution: '(8-2) × 180° = 1080°',
          },
          {
            example: 'Bestimme den Innenwinkel eines regelmaessigen Sechsecks.',
            solution: '(6-2) × 180° / 6 = 720°/6 = 120°',
          },
        ],
        practice: [
          {
            problem: 'Die Innenwinkelsumme betraegt 1440°. Wie viele Seiten hat das Vieleck?',
            solution: '10 Seiten (Zehneck)',
            steps: [
              '(n-2) × 180 = 1440',
              'n - 2 = 8',
              'n = 10',
            ],
          },
        ],
      },
      {
        title: 'Parallelogramme und ihre Eigenschaften',
        theory: 'Ein Parallelogramm hat gegenueberliegende Seiten, die parallel und gleich lang sind. Gegenueberliegende Winkel sind gleich gross. Die Diagonalen halbieren sich gegenseitig.\n\nArten: Rechteck (alle Winkel 90°), Raute (alle Seiten gleich), Quadrat (beide Eigenschaften).\n\nS = b × h (Grundseite × Hoehe). Die Diagonalen der Raute stehen senkrecht aufeinander.',
        keyPoints: [
          'Gegenueberliegende Seiten: parallel und gleich lang',
          'Gegenueberliegende Winkel: gleich gross',
          'Diagonalen: halbieren sich gegenseitig',
          'S = Grundseite × Hoehe',
        ],
        examples: [
          {
            example: 'Ein Parallelogramm hat die Grundseite 8 cm und die Hoehe 5 cm. Bestimme die Flaeche.',
            solution: 'S = 8 × 5 = 40 cm²',
          },
        ],
        practice: [
          {
            problem: 'Eine Raute mit den Diagonalen 12 cm und 16 cm. Bestimme die Flaeche.',
            solution: 'S = 96 cm²',
            steps: [
              'Flaechenformel der Raute: S = d₁ × d₂ / 2',
              'S = 12 × 16 / 2 = 96 cm²',
            ],
          },
        ],
      },
    ],
  },

  // geo-004: Kreise
  'geo-004': {
    lessons: [
      {
        title: 'Elemente des Kreises',
        theory: 'Der Kreis ist die Menge aller Punkte in der Ebene, die von einem Mittelpunkt O den gleichen Abstand (Radius r) haben. Der Durchmesser d = 2r.\n\nElemente: Radius (r), Durchmesser (d), Sehne (Strecke mit beiden Endpunkten auf dem Kreis), Bogen (Teil der Kreislinie), Sektor (wie ein Tortenstueck), Segment (Flaeche zwischen Sehne und Bogen).\n\nDie Zahl π ≈ 3.14159... ist das Verhaeltnis von Umfang zu Durchmesser: C = πd = 2πr',
        keyPoints: [
          'Umfang: C = 2πr = πd',
          'Flaeche: S = πr²',
          'Mittelpunktswinkel = Bogenwinkel',
          'Bogenlaenge = (θ/360°) × 2πr',
        ],
        examples: [
          {
            example: 'Bestimme den Umfang und die Flaeche des Kreises mit r = 7 cm.',
            solution: 'C = 2π×7 = 14π ≈ 43.98 cm\nS = π×49 = 49π ≈ 153.94 cm²',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Bogenlaenge AB, wenn der Mittelpunktswinkel = 60° und r = 12 cm ist.',
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
        title: 'Winkel und Beziehungen am Kreis',
        theory: 'Satz ueber Umfangswinkel: Der Umfangswinkel (Peripheriewinkel) ist halb so gross wie der Mittelpunktswinkel ueber demselben Bogen.\n\nDer Winkel, der von zwei Sekanten (Tangente-Sehne, Sehne-Sehne usw.) gebildet wird, berechnet sich je nach Art der Bildung mit verschiedenen Formeln.\n\nTangentensatz: Die Tangente am Kreis steht senkrecht auf dem Radius im Beruehrpunkt. Zwei Tangenten von einem aeusseren Punkt haben die gleiche Laenge.',
        keyPoints: [
          'Umfangswinkel = ½ Mittelpunktswinkel',
          'Winkel im Halbkreis = 90°',
          'Tangente ⊥ Radius im Beruehrpunkt',
          'Zwei Tangenten von aussen: gleiche Laenge',
        ],
        examples: [
          {
            example: 'Der Mittelpunktswinkel AOB = 80°. Wie gross ist der Umfangswinkel ACB?',
            solution: 'Umfangswinkel = 80°/2 = 40°',
          },
        ],
        practice: [
          {
            problem: 'Der Umfangswinkel ABC = 35°. Wie gross ist der Mittelpunktswinkel AOC?',
            solution: 'AOC = 70°',
            steps: [
              'Mittelpunktswinkel = 2 × Umfangswinkel',
              'AOC = 2 × 35° = 70°',
            ],
          },
        ],
      },
    ],
  },

  // geo-005: Raumgeometrie
  'geo-005': {
    lessons: [
      {
        title: 'Volumen und Oberflaeche des Quaders',
        theory: 'Der Quader (Rechtkantiges Parallelepiped) hat 6 rechteckige Flaechen, 12 Kanten und 8 Ecken.\n\nVolumen: V = Laenge × Breite × Hoehe = l × b × h\nGesamtoberflaeche: ST = 2(lb + lh + bh)\nRaumdiagonale des Quaders: d = √(l² + b² + h²)\n\nDer Wuerfel ist ein Sonderfall: V = a³, ST = 6a², d = a√3',
        keyPoints: [
          'V = l × b × h',
          'ST = 2(lb + lh + bh)',
          'Raumdiagonale = √(l²+b²+h²)',
          'Wuerfel: V = a³, ST = 6a²',
        ],
        examples: [
          {
            example: 'Ein Quader mit den Massen 3×4×5 cm. Bestimme das Volumen und die Gesamtoberflaeche.',
            solution: 'V = 60 cm³\nST = 2(12+15+20) = 94 cm²',
          },
        ],
        practice: [
          {
            problem: 'Ein Wuerfel mit der Gesamtoberflaeche 150 cm². Bestimme die Kantenlaenge und das Volumen.',
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
        title: 'Kugeln, Zylinder und Kegel',
        theory: 'Zylinder: V = πr²h, ST = 2πr(r + h)\nKegel: V = πr²h/3, Mantelflaeche = πrl (l = Mantellinie)\nKugel: V = 4πr³/3, ST = 4πr²\n\nDiese Formen finden sich ueberall im Alltag: Dosen (Zylinder), Eistueten (Kegel), Baelle (Kugel), Tanks (Zylinder).',
        keyPoints: [
          'Zylinder: V = πr²h',
          'Kegel: V = πr²h/3 = Zylinder/3',
          'Kugel: V = 4πr³/3, S = 4πr²',
          'Mantellinie des Kegels: l = √(r²+h²)',
        ],
        examples: [
          {
            example: 'Eine Kugel mit r = 6 cm. Bestimme das Volumen.',
            solution: 'V = 4π(216)/3 = 288π ≈ 904.8 cm³',
          },
        ],
        practice: [
          {
            problem: 'Ein Zylinder mit r = 5 cm, h = 10 cm. Bestimme das Volumen und die Gesamtoberflaeche.',
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

  // geo-006: Analytische Geometrie
  'geo-006': {
    lessons: [
      {
        title: 'Die Kreisgleichung',
        theory: 'Der Kreis mit Mittelpunkt (h, k) und Radius r hat die Gleichung: (x-h)² + (y-k)² = r²\nIn allgemeiner Form: x² + y² + Dx + Ey + F = 0\n\nUm den Mittelpunkt und den Radius aus der allgemeinen Form zu bestimmen, fuehrt man die quadratische Ergaenzung zweimal durch.',
        keyPoints: [
          '(x-h)² + (y-k)² = r² (Standardform)',
          'Mittelpunkt (h, k), Radius r',
          'Allgemeine Form: quadratische Ergaenzung durchfuehren',
          'Kreis durch (a,b): (a-h)²+(b-k)²=r²',
        ],
        examples: [
          {
            example: 'Bestimme den Mittelpunkt und den Radius von: (x-2)² + (y+3)² = 25',
            solution: 'Mittelpunkt (2, -3), Radius r = 5',
          },
          {
            example: 'Schreibe die Gleichung des Kreises mit Mittelpunkt (1, -2) und Radius 4.',
            solution: '(x-1)² + (y+2)² = 16',
          },
        ],
        practice: [
          {
            problem: 'Bestimme den Mittelpunkt und den Radius des Kreises: x² + y² - 6x + 4y - 12 = 0',
            solution: 'Mittelpunkt (3, -2), r = 5',
            steps: [
              'Gruppieren: (x²-6x) + (y²+4y) = 12',
              'Quadratische Ergaenzung: (x²-6x+9) + (y²+4y+4) = 12+9+4',
              '(x-3)² + (y+2)² = 25',
              'Mittelpunkt (3,-2), r=5',
            ],
          },
        ],
      },
      {
        title: 'Kegelschnitte',
        theory: 'Kegelschnitte entstehen durch den Schnitt eines Kegels mit einer Ebene: Ellipse, Hyperbel, Parabel (und entartete Faelle: Punkt, Gerade).\n\nParabel: y = ax² oder x = ay² - Leitlinie und Brennpunkt\nEllipse: x²/a² + y²/b² = 1\nHyperbel: x²/a² - y²/b² = 1\n\nKegelschnitte haben zahlreiche Anwendungen: Planetenbahnen (Ellipse), Satellitenschuesseln (Parabel), ballistische Flugbahnen.',
        keyPoints: [
          'Parabel: y = ax² (Brennpunkt und Leitlinie)',
          'Ellipse: x²/a² + y²/b² = 1',
          'Hyperbel: x²/a² - y²/b² = 1',
          'Planetenbahnen sind elliptisch (Keplersches Gesetz)',
        ],
        examples: [
          {
            example: 'Bestimme die Halbachsen der Ellipse: x²/16 + y²/9 = 1',
            solution: 'a = 4 (grosse Halbachse), b = 3 (kleine Halbachse)',
          },
        ],
        practice: [
          {
            problem: 'Klassifiziere den Kegelschnitt: 4x² + 9y² = 36',
            solution: 'Ellipse mit a=3, b=2',
            steps: [
              'Durch 36 teilen: x²/9 + y²/4 = 1',
              'Form der Ellipse: x²/a² + y²/b² = 1',
              'a = 3, b = 2 → Ellipse',
            ],
          },
        ],
      },
    ],
  },

  // geo-007: Differentialgeometrie
  'geo-007': {
    lessons: [
      {
        title: 'Kurven und Parametrisierung',
        theory: 'Ebene Kurven koennen als r(t) = (x(t), y(t)) parametrisiert werden. Der Tangentenvektor ist r\'(t) = (x\'(t), y\'(t)). Die Kruemmung κ misst, wie schnell sich die Richtung der Tangente aendert.\n\nKruemmung: κ = |r\' × r\'\'| / |r\'|³\nKruemmungsradius: R = 1/κ\n\nNatuerliche Koordinaten (s = Bogenlaenge) und das Frenet-Serret-System (T, N, B) charakterisieren die Raumkurve.',
        keyPoints: [
          'r(t) = (x(t), y(t), z(t)) Parametrisierung',
          'T = Tangente, N = Normale, B = Binormale',
          'Kruemmung κ = 1/R',
          'Torsion τ misst die raeumliche Verdrehung',
        ],
        examples: [
          {
            example: 'Parametrisiere den Kreis mit Radius r: r(t) = (r cos t, r sin t)',
            solution: 'x = r cos t, y = r sin t\nr\'(t) = (-r sin t, r cos t)\n|r\'| = r (konstante Geschwindigkeit)',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Kruemmung der Kurve y = x² im Punkt (0, 0).',
            solution: 'κ = 2',
            steps: [
              'y\' = 2x, y\'\' = 2',
              'κ = |y\'\'| / (1 + y\'²)^(3/2)',
              'Bei x=0: κ = 2/(1+0)^(3/2) = 2',
            ],
          },
        ],
      },
    ],
  },

  // geo-008: Grundlagen der Topologie
  'geo-008': {
    lessons: [
      {
        title: 'Topologische Raeume',
        theory: 'Die Topologie untersucht Eigenschaften von Raeumen, die unter stetigen Abbildungen (Homoeomorphismen) erhalten bleiben. "Gummigeometrie" - Knoten, Verschlingungen, Flaechen.\n\nEin topologischer Raum (X, τ), wobei τ eine Sammlung von "offenen" Teilmengen ist, die folgende Axiome erfuellt: ∅ und X sind offen, die Vereinigung jeder Familie offener Mengen ist offen, der endliche Durchschnitt offener Mengen ist offen.\n\nDie Topologie ermoeglicht es uns, ueber "Naehe", "Stetigkeit" und "Zusammenhang" ohne eine spezifische Metrik zu sprechen.',
        keyPoints: [
          'Offene Teilmenge: erfuellt die topologischen Axiome',
          'Homoeomorphismus = stetige Bijektion mit stetiger Umkehrabbildung',
          'Topologische Invariante: bleibt unter Homoeomorphismen erhalten',
          'Beispiel: Tasse ≅ Donut (topologisch)',
        ],
        examples: [
          {
            example: 'Sind der Kreis und das Quadrat topologisch aequivalent?',
            solution: 'Ja! Beide sind Kurven S¹ (zueinander homoeomorph). Man kann das Quadrat stetig in einen Kreis verformen, ohne zu schneiden oder zu kleben.',
          },
        ],
        practice: [
          {
            problem: 'Das Geschlecht (Genus) des Torus betraegt 1. Ist er homoeomorph zur Sphaere?',
            solution: 'Nein. Die Sphaere hat Genus 0, der Torus Genus 1. Das Geschlecht ist eine topologische Invariante.',
            steps: [
              'Sphaere S²: Genus 0 (keine Loecher)',
              'Torus T²: Genus 1 (ein Loch)',
              'Verschiedenes Genus → nicht homoeomorph',
            ],
          },
        ],
      },
    ],
  },
};
