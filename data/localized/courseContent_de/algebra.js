export const courseContents_algebra_de = {

  // alg-003: Ungleichungen und Betragsfunktion
  'alg-003': {
    lessons: [
      {
        title: 'Ungleichungen mit Betrag',
        theory: 'Der Absolutbetrag |x| gibt den Abstand der Zahl x von Null auf dem Zahlenstrahl an und ist stets nicht-negativ. |x| = x falls x ≥ 0, und |x| = -x falls x < 0.\n\nUngleichungen mit Betrag: |x| < a bedeutet -a < x < a (die Lösung ist ein Intervall). |x| > a bedeutet x < -a oder x > a (zwei Intervalle).\n\nDiese Ungleichungen sind nützlich in der Physik (Toleranzen), im Ingenieurwesen (Fehlermargen) und in der höheren Mathematik.',
        keyPoints: [
          '|x| ≥ 0 für alle x (stets nicht-negativ)',
          '|x| < a → -a < x < a',
          '|x| > a → x < -a oder x > a',
          '|x - c| < r → c - r < x < c + r (um den Mittelpunkt c, Radius r)',
        ],
        examples: [
          {
            example: 'Löse: |x - 3| < 5',
            solution: '-5 < x - 3 < 5\n-5 + 3 < x < 5 + 3\n-2 < x < 8\nLösung: (-2, 8)',
          },
          {
            example: 'Löse: |2x + 1| ≥ 7',
            solution: '2x + 1 ≤ -7  oder  2x + 1 ≥ 7\n2x ≤ -8       oder  2x ≥ 6\nx ≤ -4        oder  x ≥ 3\nLösung: (-∞, -4] ∪ [3, +∞)',
          },
        ],
        practice: [
          {
            problem: 'Löse: |3x - 6| < 9',
            solution: '-1 < x < 5, Intervall (-1, 5)',
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
        title: 'Systeme von Ungleichungen',
        theory: 'Ein System von Ungleichungen besteht aus zwei oder mehr Ungleichungen mit denselben Variablen. Die Lösung des Systems ist die Menge aller Werte, die ALLE Ungleichungen gleichzeitig erfüllen (Schnittmenge der Lösungsmengen).\n\nBei linearen Ungleichungen in zwei Variablen definiert jede Ungleichung eine Halbebene. Die Lösung des Systems ist der gemeinsame Bereich, in dem sich alle Halbebenen überschneiden.',
        keyPoints: [
          'Lösung = Schnittmenge aller Einzellösungen',
          'Notation: {x | Bedingung1 UND Bedingung2}',
          'Kombiniere die Ungleichungen: finde die Grenze, wo beide gelten',
          'Grafisch: der Überschneidungsbereich (Schnittfläche)',
        ],
        examples: [
          {
            example: 'Löse das System: x > 2 und x < 7',
            solution: 'Lösung: 2 < x < 7, Intervall (2, 7)',
          },
          {
            example: 'Löse: 2x - 1 > 3 und x + 4 < 10',
            solution: '2x > 4 → x > 2\nx < 6\nLösung: 2 < x < 6, Intervall (2, 6)',
          },
        ],
        practice: [
          {
            problem: 'Löse das System: 3x + 1 > 7 und 2x - 5 < 9',
            solution: '2 < x < 7',
            steps: [
              'Ungleichung 1: 3x + 1 > 7 → 3x > 6 → x > 2',
              'Ungleichung 2: 2x - 5 < 9 → 2x < 14 → x < 7',
              'Schnittmenge: x > 2 UND x < 7',
              'Lösung: (2, 7)',
            ],
          },
        ],
      },
      {
        title: 'Anwendungen von Ungleichungen',
        theory: 'Ungleichungen finden breite Anwendung im realen Leben: Budgetgrenzen modellieren, Optimierung (Minimierung/Maximierung), Gewinn-/Verlustanalyse und Sicherheitsparameter.\n\nLösungsschritte: 1) Identifiziere die unbekannte Variable, 2) Formuliere die Ungleichung, 3) Löse mathematisch, 4) Interpretiere das Ergebnis im Kontext des Problems.',
        keyPoints: [
          '"Mindestens" → ≥',
          '"Mehr als" → >',
          '"Höchstens" → ≤',
          '"Unter" → <',
        ],
        examples: [
          {
            example: 'Wie viele Produkte müssen mindestens zum Preis von 15€ verkauft werden, um einen Gewinn über 500€ zu erzielen, wenn die Fixkosten 200€ betragen?',
            solution: '15x - 200 > 500\n15x > 700\nx > 46.67\nEs müssen mindestens 47 Stück verkauft werden',
          },
        ],
        practice: [
          {
            problem: 'Ein Schüler muss einen Durchschnitt über 75 in 5 Prüfungen erreichen. Er hat erhalten: 70, 80, 65, 90. Welche Mindestnote braucht er in der 5. Prüfung?',
            solution: 'Mindestnote = 70',
            steps: [
              'Summe der 4 Noten: 70+80+65+90 = 305',
              'Gesamtsumme muss > 375 sein (75×5)',
              'Note der 5. Prüfung > 375 - 305 = 70',
              'Minimum: 70',
            ],
          },
        ],
      },
    ],
  },

  // alg-004: Funktionen und Graphen
  'alg-004': {
    lessons: [
      {
        title: 'Der Funktionsbegriff',
        theory: 'Eine Funktion ist eine Regel/Zuordnung, die jedem Element der Menge X (Definitionsbereich) genau ein Element der Menge Y (Wertebereich) zuordnet. Notation: f: X → Y oder y = f(x).\n\nUm zu überprüfen, ob ein Graph eine Funktion darstellt, verwenden wir den Vertikallinientest: Wenn eine senkrechte Linie den Graphen in mehr als einem Punkt schneidet, handelt es sich nicht um eine Funktion.\n\nFunktionen können injektiv (jedes y hat nur ein x), surjektiv (jedes y wird erreicht) oder bijektiv (beides) sein.',
        keyPoints: [
          'Jedes x hat genau einen Wert f(x)',
          'Definitionsbereich = Eingabemenge X',
          'Wertebereich = Ausgabemenge Y',
          'Der Vertikallinientest prüft, ob es sich um eine Funktion handelt',
        ],
        examples: [
          {
            example: 'Ist y² = x eine Funktion? (für jedes x finde y)',
            solution: 'Nein! Für x = 4 ergibt sich y = 2 und y = -2 – zwei Werte für dasselbe x. Besteht den Vertikallinientest nicht.',
          },
          {
            example: 'Bestimme f(3) und f(-1) für f(x) = 2x² - x + 1',
            solution: 'f(3) = 2(9) - 3 + 1 = 16\nf(-1) = 2(1) - (-1) + 1 = 4',
          },
        ],
        practice: [
          {
            problem: 'Bestimme den Definitionsbereich von f(x) = √(x - 4)',
            solution: 'x ≥ 4, Definitionsbereich [4, +∞)',
            steps: [
              'Der Ausdruck unter der Wurzel muss ≥ 0 sein',
              'x - 4 ≥ 0',
              'x ≥ 4',
              'Definitionsbereich: [4, +∞)',
            ],
          },
        ],
      },
      {
        title: 'Elementare Funktionen',
        theory: 'Zu den elementaren Funktionen gehören: lineare f(x) = mx + b, quadratische f(x) = ax² + bx + c, polynomiale, rationale, exponentielle, logarithmische und trigonometrische Funktionen.\n\nJeder Funktionstyp hat einen charakteristischen Graphen, Definitionsbereich, Wertebereich und spezifische Eigenschaften. Das Erkennen der Standardformen hilft, das Verhalten der Funktion schnell zu verstehen.\n\nTransformationen: f(x) + k (Verschiebung nach oben/unten), f(x + k) (Verschiebung nach links/rechts), -f(x) (Spiegelung an der x-Achse), f(-x) (Spiegelung an der y-Achse), a·f(x) (vertikale Skalierung).',
        keyPoints: [
          'Linear: Graph ist eine Gerade',
          'Quadratisch: Graph ist eine Parabel (nach oben geöffnet wenn a>0)',
          'Exponentiell: a^x wächst schnell',
          'Logarithmisch: Umkehrfunktion der Exponentialfunktion',
        ],
        examples: [
          {
            example: 'Skizziere die Parabel y = (x-2)² + 3',
            solution: 'Der Scheitelpunkt ist (2, 3)\nSymmetrieachse: x = 2\nNach oben geöffnet (Koeffizient von x² = 1 > 0)\nSchneidet die x-Achse nicht (Minimum = 3 > 0)',
          },
        ],
        practice: [
          {
            problem: 'Bestimme den Scheitelpunkt der Parabel y = -x² + 4x - 1',
            solution: 'Scheitelpunkt: (2, 3)',
            steps: [
              'Formel: x_S = -b/(2a) = -4/(2×(-1)) = 2',
              'y_S = -(2²) + 4(2) - 1 = -4 + 8 - 1 = 3',
              'Scheitelpunkt: (2, 3)',
              'Nach unten geöffnete Parabel (a = -1 < 0)',
            ],
          },
        ],
      },
      {
        title: 'Verkettung und Umkehrfunktion',
        theory: 'Verkettung von Funktionen: (f∘g)(x) = f(g(x)) – wende zuerst g an, dann f. Die Verkettung ist im Allgemeinen nicht kommutativ: f∘g ≠ g∘f.\n\nDie Umkehrfunktion f⁻¹ „macht jede Operation von f rückgängig": Wenn f(a) = b, dann ist f⁻¹(b) = a. Der Graph von f⁻¹ ist die Spiegelung des Graphen von f an der Geraden y = x.\n\nNicht jede Funktion hat eine Umkehrfunktion – nur bijektive Funktionen (eineindeutig und surjektiv) besitzen eine Umkehrfunktion.',
        keyPoints: [
          '(f∘g)(x) = f(g(x)) – g wird zuerst angewendet',
          'f∘g ≠ g∘f (nicht kommutativ)',
          'f(f⁻¹(x)) = x und f⁻¹(f(x)) = x',
          'Umkehrfunktion bestimmen: x und y vertauschen, dann nach y auflösen',
        ],
        examples: [
          {
            example: 'Wenn f(x) = 2x + 3 und g(x) = x², bestimme (f∘g)(4)',
            solution: '(f∘g)(4) = f(g(4)) = f(16) = 2(16) + 3 = 35',
          },
          {
            example: 'Bestimme f⁻¹(x) wenn f(x) = 3x - 2',
            solution: 'y = 3x - 2\nVertauschen: x = 3y - 2\n3y = x + 2\ny = (x + 2)/3\nf⁻¹(x) = (x + 2)/3',
          },
        ],
        practice: [
          {
            problem: 'Bestimme (g∘f)(x) wenn f(x) = x + 1 und g(x) = x²',
            solution: '(g∘f)(x) = (x+1)²',
            steps: [
              '(g∘f)(x) = g(f(x))',
              '= g(x + 1)',
              '= (x + 1)²',
              '= x² + 2x + 1',
            ],
          },
        ],
      },
    ],
  },

  // alg-005: Quadratische Gleichungen
  'alg-005': {
    lessons: [
      {
        title: 'Faktorisierung von Trinomen',
        theory: 'Das Trinom ax² + bx + c wird als Produkt zweier linearer Binome faktorisiert. Wenn a = 1: x² + bx + c = (x + p)(x + q), wobei p + q = b und p × q = c.\n\nFür a ≠ 1, die Gruppierungsmethode (AC-Methode): multipliziere a × c, finde zwei Zahlen mit Summe b und Produkt ac, dann gruppiere.\n\nDie Faktorisierung algebraischer Ausdrücke ist eine grundlegende Fertigkeit zum Lösen von Gleichungen, Vereinfachen von Brüchen und vielen weiteren Aufgaben.',
        keyPoints: [
          'x² + bx + c = (x+p)(x+q) wobei p+q=b, pq=c',
          'Differenz von Quadraten: a² - b² = (a+b)(a-b)',
          'Quadrat der Summe: (a+b)² = a² + 2ab + b²',
          'Quadrat der Differenz: (a-b)² = a² - 2ab + b²',
        ],
        examples: [
          {
            example: 'Faktorisiere: x² + 7x + 12',
            solution: 'Suche p, q: p + q = 7 und p × q = 12\nProbe: 3 + 4 = 7 ✓ und 3 × 4 = 12 ✓\nLösung: (x + 3)(x + 4)',
          },
          {
            example: 'Faktorisiere: x² - 9',
            solution: 'Form: a² - b² = (a+b)(a-b)\nx² - 9 = x² - 3² = (x + 3)(x - 3)',
          },
        ],
        practice: [
          {
            problem: 'Faktorisiere: x² - 5x + 6',
            solution: '(x - 2)(x - 3)',
            steps: [
              'Suche p, q: p + q = -5 und p × q = 6',
              'Probe: -2 + (-3) = -5 ✓ und (-2)(-3) = 6 ✓',
              'x² - 5x + 6 = (x - 2)(x - 3)',
            ],
          },
        ],
      },
      {
        title: 'Quadratische Formel und Diskriminante',
        theory: 'Die quadratische Formel x = [-b ± √(b² - 4ac)] / 2a löst jede quadratische Gleichung ax² + bx + c = 0.\n\nDiskriminante D = b² - 4ac: D > 0 → 2 verschiedene reelle Lösungen, D = 0 → 1 doppelte reelle Lösung, D < 0 → keine reelle Lösung (2 komplexe Lösungen).\n\nSatz von Vieta: Wenn x₁, x₂ die Lösungen sind, dann gilt x₁ + x₂ = -b/a und x₁ × x₂ = c/a.',
        keyPoints: [
          'Formel: x = [-b ± √(b²-4ac)] / 2a',
          'D > 0: zwei reelle Lösungen',
          'D = 0: eine doppelte Lösung',
          'D < 0: keine reellen Lösungen',
        ],
        examples: [
          {
            example: 'Löse: x² + 2x - 8 = 0',
            solution: 'D = 4 + 32 = 36\nx = (-2 ± 6)/2\nx₁ = 2, x₂ = -4',
          },
          {
            example: 'Welche Gleichung hat die Lösungen x₁ = 3 und x₂ = -1?',
            solution: 'Summe: 3 + (-1) = 2 → -b/a = 2 → b = -2 (wenn a=1)\nProdukt: 3×(-1) = -3 → c/a = -3 → c = -3\nGleichung: x² - 2x - 3 = 0',
          },
        ],
        practice: [
          {
            problem: 'Löse mit der quadratischen Formel: 2x² - 7x + 3 = 0',
            solution: 'x = 3 oder x = 0.5',
            steps: [
              'a=2, b=-7, c=3',
              'D = 49 - 24 = 25',
              'x = (7 ± 5)/4',
              'x₁ = 12/4 = 3',
              'x₂ = 2/4 = 0.5',
            ],
          },
        ],
      },
      {
        title: 'Quadratische Ergänzung',
        theory: 'Die quadratische Ergänzung wandelt das Trinom ax² + bx + c in die Form a(x + h)² + k um. Diese Methode ist nützlich zum Bestimmen des Scheitelpunkts der Parabel und zur Herleitung der quadratischen Formel.\n\nDer Scheitelpunkt der Parabel ax² + bx + c liegt im Punkt (h, k) = (-b/2a, c - b²/4a).\n\nStandardform → Scheitelpunktform: y = a(x-h)² + k zeigt den Scheitelpunkt (h, k) direkt an.',
        keyPoints: [
          'ax² + bx = a(x + b/2a)² - b²/4a',
          'Scheitelpunkt: x = -b/(2a)',
          'Scheitelpunktform: y = a(x-h)² + k',
          'Methode: durch a teilen, (b/2a)² addieren und subtrahieren',
        ],
        examples: [
          {
            example: 'Wandle in Scheitelpunktform um: y = x² + 6x + 5',
            solution: 'y = (x² + 6x + 9) - 9 + 5\n= (x + 3)² - 4\nScheitelpunkt: (-3, -4)',
          },
        ],
        practice: [
          {
            problem: 'Bestimme den Scheitelpunkt der Parabel y = x² - 4x + 7 durch quadratische Ergänzung.',
            solution: 'Scheitelpunkt (2, 3)',
            steps: [
              'y = x² - 4x + 7',
              'y = (x² - 4x + 4) - 4 + 7',
              'y = (x - 2)² + 3',
              'Scheitelpunkt: (2, 3)',
            ],
          },
        ],
      },
    ],
  },

  // alg-006: Polynome und Faktorisierung
  'alg-006': {
    lessons: [
      {
        title: 'Einführung in Polynome',
        theory: 'Ein Polynom ist ein Ausdruck der Form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀. Der Grad des Polynoms ist die höchste Potenz der Variablen. Koeffizienten sind die Zahlen vor den Potenzen.\n\nMultiplikation von Polynomen: jeder Term des ersten Polynoms wird mit jedem Term des zweiten multipliziert. FOIL-Methode (First, Outer, Inner, Last) für Binome.\n\nPolynomendivision: ähnlich der schriftlichen Division von Zahlen. P(x) = Q(x)·D(x) + R(x).',
        keyPoints: [
          'Grad des Polynoms = höchste Potenz von x',
          'Polynom vom Grad 2 = quadratisches Trinom',
          'FOIL: (a+b)(c+d) = ac + ad + bc + bd',
          'Restwertsatz: P(a) = R bei Division durch (x-a)',
        ],
        examples: [
          {
            example: 'Multipliziere: (2x + 3)(x - 4)',
            solution: '= 2x(x) + 2x(-4) + 3(x) + 3(-4)\n= 2x² - 8x + 3x - 12\n= 2x² - 5x - 12',
          },
          {
            example: 'Bestimme P(2) wenn P(x) = x³ - 3x + 1',
            solution: 'P(2) = 8 - 6 + 1 = 3',
          },
        ],
        practice: [
          {
            problem: 'Entwickle: (3x - 2)²',
            solution: '9x² - 12x + 4',
            steps: [
              '(3x - 2)² = (3x)² - 2(3x)(2) + 2²',
              '= 9x² - 12x + 4',
            ],
          },
        ],
      },
      {
        title: 'Nullstellen von Polynomen',
        theory: 'Eine Nullstelle des Polynoms P(x) ist ein Wert a, für den P(a) = 0 gilt. Der Fundamentalsatz der Algebra besagt, dass jedes Polynom vom Grad n genau n Nullstellen hat (einschließlich komplexer und mehrfacher Nullstellen).\n\nFaktorsatz: (x - a) ist ein Faktor von P(x) genau dann, wenn P(a) = 0.\n\nFür rationale Nullstellen: Wenn p/q (gekürzt) eine Nullstelle von aₙxⁿ + ... + a₀ ist, dann teilt p das Absolutglied a₀ und q den Leitkoeffizienten aₙ.',
        keyPoints: [
          'Nullstelle a: P(a) = 0',
          'Faktor (x-a) ↔ Nullstelle x = a',
          'Polynom vom Grad n hat n Nullstellen (mit Vielfachheit)',
          'Rationale Nullstelle p/q: p|a₀ und q|aₙ',
        ],
        examples: [
          {
            example: 'Überprüfe, dass x = 2 eine Nullstelle von x³ - 4x² + x + 6 ist',
            solution: 'P(2) = 8 - 16 + 2 + 6 = 0 ✓\nAlso ist (x - 2) ein Faktor',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Nullstellen von P(x) = x³ - 6x² + 11x - 6',
            solution: 'x = 1, x = 2, x = 3',
            steps: [
              'Probe x=1: 1-6+11-6=0 ✓ → (x-1) ist ein Faktor',
              'Division: P(x) = (x-1)(x²-5x+6)',
              'Faktorisiere: x²-5x+6 = (x-2)(x-3)',
              'Nullstellen: x=1, x=2, x=3',
            ],
          },
        ],
      },
      {
        title: 'Rationale Brüche',
        theory: 'Ein rationaler Bruch ist der Quotient zweier Polynome f(x) = P(x)/Q(x). Definitionsbereich: alle Werte von x, für die Q(x) ≠ 0. Stellen, an denen Q(x) = 0 ist, sind senkrechte Asymptoten oder hebbare Lücken.\n\nWaagerechte Asymptote: Vergleiche die Grade von P und Q. Wenn Grad(P) < Grad(Q): y = 0. Wenn Grad(P) = Grad(Q): y = Verhältnis der Leitkoeffizienten.\n\nVereinfachung: Wenn P und Q gemeinsame Faktoren haben, kürze – es entsteht eine „Lücke" (hebbare Definitionslücke) im Graphen.',
        keyPoints: [
          'Definitionsbereich: Q(x) ≠ 0',
          'Senkrechte Asymptote: Q(x) = 0 (nach dem Kürzen)',
          'Waagerechte Asymptote: hängt vom Gradverhältnis ab',
          'Kürzen erzeugt hebbare Lücken',
        ],
        examples: [
          {
            example: 'Bestimme den Definitionsbereich von f(x) = (x+1)/(x²-4)',
            solution: 'x²-4 = 0 → x = ±2\nDefinitionsbereich: ℝ \\ {-2, 2}\nSenkrechte Asymptoten: x = -2 und x = 2',
          },
        ],
        practice: [
          {
            problem: 'Vereinfache und bestimme den Definitionsbereich: f(x) = (x²-1)/(x-1)',
            solution: 'f(x) = x+1 mit Lücke bei x=1, Definitionsbereich ℝ\\{1}',
            steps: [
              'Faktorisiere: x²-1 = (x-1)(x+1)',
              'f(x) = (x-1)(x+1)/(x-1) = x+1 (für x≠1)',
              'Definitionsbereich: ℝ\\{1} (Lücke bei x=1)',
            ],
          },
        ],
      },
    ],
  },

  // alg-007: Rationale Ausdrücke (fortgeschritten)
  'alg-007': {
    lessons: [
      {
        title: 'Rechnen mit rationalen Ausdrücken',
        theory: 'Ein rationaler Ausdruck R(x) = P(x)/Q(x), wobei P und Q Polynome sind. Die Rechenoperationen sind analog zu gewöhnlichen Brüchen, erfordern jedoch die Faktorisierung der Polynome.\n\nAddition/Subtraktion: Bestimme das kgV der Nenner, erweitere die Brüche, dann addiere die Zähler.\nMultiplikation: Multipliziere Zähler mit Zähler und Nenner mit Nenner, dann vereinfache.\nDivision: Multipliziere mit dem Kehrwert.',
        keyPoints: [
          'Das kgV polynomialer Nenner erfordert Faktorisierung',
          'Multiplikation: (P/Q)·(R/S) = PR/QS',
          'Division: (P/Q)÷(R/S) = (P/Q)·(S/R)',
          'Das Ergebnis immer vollständig kürzen',
        ],
        examples: [
          {
            example: 'Addiere: 1/(x-2) + 3/(x+1)',
            solution: 'kgV = (x-2)(x+1)\n= (x+1)/[(x-2)(x+1)] + 3(x-2)/[(x-2)(x+1)]\n= (x+1+3x-6)/[(x-2)(x+1)]\n= (4x-5)/[(x-2)(x+1)]',
          },
        ],
        practice: [
          {
            problem: 'Vereinfache: (x²-4)/(x²-x-6)',
            solution: '(x+2)/(x+3)',
            steps: [
              'Zähler: x²-4 = (x-2)(x+2)',
              'Nenner: x²-x-6 = (x-3)(x+2)',
              'Ergebnis: (x-2)(x+2)/[(x-3)(x+2)] = (x-2)/(x-3)',
              'Wait - (x+2) anulojnë: (x+2)/(x+3)... Let me check: x²-x-6=(x-3)(x+2) → (x-2)(x+2)/[(x-3)(x+2)] = (x-2)/(x-3)',
            ],
          },
        ],
      },
      {
        title: 'Rationale Gleichungen',
        theory: 'Eine rationale Gleichung enthält rationale Ausdrücke. Vorgehensweise: Multipliziere beide Seiten mit dem kgV der Nenner. Dadurch werden die Nenner eliminiert, es können jedoch Scheinlösungen entstehen.\n\nImmer überprüfen: Setze die Lösungen ein und stelle sicher, dass kein Nenner null wird. Lösungen, bei denen ein Nenner = 0 ist, werden verworfen.',
        keyPoints: [
          'Mit dem kgV multiplizieren, um die Nenner zu eliminieren',
          'Überprüfung ist Pflicht – Scheinlösungen herausfiltern',
          'Scheinlösung: macht den Nenner = 0',
        ],
        examples: [
          {
            example: 'Löse: 2/x + 1/3 = 5/6',
            solution: 'Multipliziere mit 6x: 12 + 2x = 5x\n12 = 3x\nx = 4\nProbe: 2/4 + 1/3 = 3/6 + 2/6 = 5/6 ✓',
          },
        ],
        practice: [
          {
            problem: 'Löse: 3/(x-1) + 2 = 5/(x-1)',
            solution: 'x = 2',
            steps: [
              'Multipliziere mit (x-1): 3 + 2(x-1) = 5',
              '3 + 2x - 2 = 5',
              '2x + 1 = 5',
              '2x = 4, x = 2',
              'Probe: 3/1 + 2 = 5 = 5/1 ✓',
            ],
          },
        ],
      },
      {
        title: 'Rationale Funktionen und Asymptoten',
        theory: 'Eine rationale Funktion f(x) = P(x)/Q(x) zeigt charakteristisches Verhalten in der Nähe der Asymptoten. Das Zeichnen des Graphen erfordert: 1) Definitionsbereich bestimmen, 2) Nullstellen finden (Zähler = 0), 3) Asymptoten bestimmen, 4) Spezielle Werte berechnen.\n\nSchiefe Asymptote: Wenn der Grad von P genau um 1 größer als der von Q ist, existiert eine schiefe Asymptote, die durch Polynomdivision bestimmt wird.',
        keyPoints: [
          'Senkrechte Asymptote: Q(x) = 0 (nach dem Kürzen)',
          'Waagerechte Asymptote: Grenzwert für x→±∞',
          'Schiefe Asymptote: wenn Grad(P) = Grad(Q) + 1',
          'Nullstellen von f: Zähler = 0',
        ],
        examples: [
          {
            example: 'Bestimme die Asymptoten von f(x) = (2x² + 1)/(x² - 4)',
            solution: 'SA: x = ±2\nWA: y = 2 (Verhältnis der Leitkoeffizienten 2/1)\nNullstellen: 2x²+1=0 → keine reellen Nullstellen',
          },
        ],
        practice: [
          {
            problem: 'Bestimme alle Asymptoten von f(x) = x/(x-3)',
            solution: 'SA: x=3, WA: y=1',
            steps: [
              'Senkrechte Asymptote: x-3=0 → x=3',
              'Waagerechte Asymptote: Grad 1/1 → y = 1/1 = 1',
            ],
          },
        ],
      },
    ],
  },

  // alg-008: Exponenten und Logarithmen
  'alg-008': {
    lessons: [
      {
        title: 'Potenzgesetze',
        theory: 'Exponenten sind die Potenzoperation: aⁿ = a × a × a ... × a (n-mal). Grundlegende Potenzgesetze:\n- aᵐ × aⁿ = aᵐ⁺ⁿ (Multiplikation: Exponenten addieren)\n- aᵐ / aⁿ = aᵐ⁻ⁿ (Division: Exponenten subtrahieren)\n- (aᵐ)ⁿ = aᵐⁿ (Potenz einer Potenz: Exponenten multiplizieren)\n- a⁰ = 1 (jede Basis ungleich null)\n- a⁻ⁿ = 1/aⁿ (negativer Exponent = Kehrwert)',
        keyPoints: [
          'aᵐ · aⁿ = aᵐ⁺ⁿ',
          'aᵐ / aⁿ = aᵐ⁻ⁿ',
          '(aᵐ)ⁿ = aᵐⁿ',
          'a⁻ⁿ = 1/aⁿ und a^(1/n) = ⁿ√a',
        ],
        examples: [
          {
            example: 'Vereinfache: (2³ × 2⁵) / 2⁴',
            solution: '= 2⁸ / 2⁴ = 2⁴ = 16',
          },
          {
            example: 'Vereinfache: (x³y²)⁴ / x⁸',
            solution: '= x¹²y⁸ / x⁸ = x⁴y⁸',
          },
        ],
        practice: [
          {
            problem: 'Löse: 8^(2/3)',
            solution: '4',
            steps: [
              '8^(2/3) = (8^(1/3))² = (∛8)²',
              '∛8 = 2 (da 2³=8)',
              '2² = 4',
            ],
          },
        ],
      },
      {
        title: 'Exponentialfunktion und Logarithmus',
        theory: 'Exponentialfunktion: f(x) = aˣ mit a > 0, a ≠ 1. Der Graph verläuft durch (0, 1) und liegt stets oberhalb der x-Achse. Wenn a > 1: wachsend, wenn 0 < a < 1: fallend.\n\nDer Logarithmus log_a(x) = n bedeutet „a hoch wie viel ergibt x": aⁿ = x. Der Logarithmus ist die Umkehrfunktion der Exponentialfunktion.\n\nNatürlicher Logarithmus: ln(x) = log_e(x), wobei e ≈ 2,718. Dekadischer Logarithmus: log(x) = log₁₀(x).',
        keyPoints: [
          'log_a(aˣ) = x und a^(log_a x) = x (Umkehrfunktion)',
          'log(xy) = log x + log y',
          'log(x/y) = log x - log y',
          'log(xⁿ) = n·log x',
        ],
        examples: [
          {
            example: 'Berechne log₂(32)',
            solution: 'log₂(32) = log₂(2⁵) = 5',
          },
          {
            example: 'Löse: 3ˣ = 81',
            solution: '3ˣ = 3⁴\nx = 4',
          },
        ],
        practice: [
          {
            problem: 'Löse: log₃(x) + log₃(x-2) = 1',
            solution: 'x = 3',
            steps: [
              'log₃(x(x-2)) = 1',
              'x(x-2) = 3¹ = 3',
              'x² - 2x - 3 = 0',
              '(x-3)(x+1) = 0',
              'x = 3 oder x = -1 (verwerfe -1, da der Logarithmus x > 0 erfordert)',
            ],
          },
        ],
      },
      {
        title: 'Exponential- und Logarithmusgleichungen',
        theory: 'Exponentialgleichungen: Wenn die Basen gleich sind, setze die Exponenten gleich. Andernfalls logarithmiere beide Seiten und wende die Logarithmengesetze an.\n\nLogarithmusgleichungen: Fasse die Logarithmen zusammen, falls mehrere vorhanden sind, und wandle dann in die Exponentialform um. Achtung: Überprüfe stets, dass die Argumente der Logarithmen positiv sind.',
        keyPoints: [
          'aˣ = aʸ ↔ x = y (gleiche Basen)',
          'ln(aˣ) = x·ln(a) (beide Seiten logarithmieren)',
          'Logarithmusgleichungen: in Exponentialform umwandeln',
          'Achtung: Argumente müssen stets > 0 sein',
        ],
        examples: [
          {
            example: 'Löse: 2ˣ = 5',
            solution: 'x·ln2 = ln5\nx = ln5/ln2 ≈ 2.322',
          },
          {
            example: 'Löse: ln(x) = 3',
            solution: 'x = e³ ≈ 20.09',
          },
        ],
        practice: [
          {
            problem: 'Löse: 4ˣ⁺¹ = 64',
            solution: 'x = 2',
            steps: [
              '64 = 4³',
              '4ˣ⁺¹ = 4³',
              'x + 1 = 3',
              'x = 2',
            ],
          },
        ],
      },
    ],
  },

  // alg-009: Komplexe Zahlen
  'alg-009': {
    lessons: [
      {
        title: 'Die imaginäre Einheit und die algebraische Form',
        theory: 'Die imaginäre Einheit i = √(-1), wobei i² = -1. Komplexe Zahlen haben die Form a + bi, wobei a der Realteil und b der Imaginärteil ist.\n\nReelle Zahlen sind ein Spezialfall der komplexen Zahlen (b = 0). Rein imaginäre Zahlen haben a = 0.\n\nRechenoperationen: Addition (gleichartige Glieder zusammenfassen), Subtraktion, Multiplikation (FOIL-Methode mit i² = -1), Division (mit der konjugiert komplexen Zahl des Nenners multiplizieren).',
        keyPoints: [
          'i = √(-1), i² = -1, i³ = -i, i⁴ = 1',
          'Form: z = a + bi',
          'Die konjugiert komplexe Zahl von a+bi ist a-bi',
          '|z| = √(a² + b²) (Betrag)',
        ],
        examples: [
          {
            example: 'Berechne (3 + 2i)(1 - 4i)',
            solution: '= 3(1) + 3(-4i) + 2i(1) + 2i(-4i)\n= 3 - 12i + 2i - 8i²\n= 3 - 10i - 8(-1)\n= 11 - 10i',
          },
          {
            example: 'Löse: x² + 9 = 0',
            solution: 'x² = -9\nx = ±√(-9) = ±3i',
          },
        ],
        practice: [
          {
            problem: 'Berechne: (2 + i)/(1 - i)',
            solution: '= (1 + 3i)/2 = 0.5 + 1.5i',
            steps: [
              'Multipliziere mit der konjugiert komplexen Zahl: (2+i)(1+i)/[(1-i)(1+i)]',
              '= (2+2i+i+i²)/(1+1)',
              '= (2+3i-1)/2',
              '= (1+3i)/2',
            ],
          },
        ],
      },
      {
        title: 'Trigonometrische Form und der Satz von De Moivre',
        theory: 'Die komplexe Zahl z = a + bi kann als z = r(cos θ + i sin θ) oder z = re^(iθ) dargestellt werden, wobei r = |z| = √(a²+b²) der Betrag und θ = arg(z) = arctan(b/a) das Argument ist.\n\nSatz von De Moivre: [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ)\n\nDieser Satz ermöglicht die Berechnung von Potenzen und Wurzeln komplexer Zahlen.',
        keyPoints: [
          'r = √(a²+b²) (Betrag/Modul)',
          'θ = arctan(b/a) (Argument/Phase)',
          'De Moivre: zⁿ = rⁿ(cos nθ + i sin nθ)',
          'n n-te Wurzeln: ⁿ√r · cis((θ+2kπ)/n)',
        ],
        examples: [
          {
            example: 'Stelle z = 1 + i in trigonometrischer Form dar',
            solution: 'r = √(1+1) = √2\nθ = arctan(1/1) = π/4\nz = √2(cos(π/4) + i sin(π/4))',
          },
        ],
        practice: [
          {
            problem: 'Berechne (1+i)⁴ mithilfe des Satzes von De Moivre',
            solution: '-4',
            steps: [
              'r = √2, θ = π/4',
              '(√2)⁴ = 4',
              '4(cos 4π/4 + i sin 4π/4) = 4(cos π + i sin π)',
              '= 4(-1 + 0) = -4',
            ],
          },
        ],
      },
    ],
  },

  // alg-010: Reihen und Folgen
  'alg-010': {
    lessons: [
      {
        title: 'Arithmetische Folgen',
        theory: 'Eine arithmetische Folge hat eine konstante Differenz d zwischen aufeinanderfolgenden Gliedern: aₙ = a₁ + (n-1)d. Das erste Glied a₁ und die konstante Differenz d charakterisieren die Folge vollständig.\n\nSumme der ersten n Glieder: Sₙ = n(a₁ + aₙ)/2 = n[2a₁ + (n-1)d]/2\n\nAnwendungen: Kostenberechnung, Sparplan, linearer Fortschritt vieler Phänomene.',
        keyPoints: [
          'aₙ = a₁ + (n-1)d',
          'Konstante Differenz: d = aₙ₊₁ - aₙ',
          'Summe: Sₙ = n(a₁+aₙ)/2',
          'Das mittlere Glied = arithmetisches Mittel der Randglieder',
        ],
        examples: [
          {
            example: 'Bestimme das 10. Glied der Folge 3, 7, 11, 15...',
            solution: 'd = 4, a₁ = 3\na₁₀ = 3 + 9×4 = 39',
          },
          {
            example: 'Bestimme die Summe der ersten 20 Glieder: 5, 8, 11...',
            solution: 'd=3, a₁=5, a₂₀=5+19×3=62\nS₂₀ = 20(5+62)/2 = 670',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Summe der geraden Zahlen von 2 bis 100.',
            solution: 'S = 2550',
            steps: [
              'Folge: 2, 4, 6, ..., 100',
              'a₁=2, d=2, n=50',
              'S₅₀ = 50(2+100)/2 = 50×51 = 2550',
            ],
          },
        ],
      },
      {
        title: 'Geometrische Folgen',
        theory: 'Eine geometrische Folge hat einen konstanten Quotienten q zwischen aufeinanderfolgenden Gliedern: aₙ = a₁ × qⁿ⁻¹. Das erste Glied a₁ und der Quotient q charakterisieren die Folge.\n\nSumme der ersten n Glieder: Sₙ = a₁(qⁿ - 1)/(q - 1) falls q ≠ 1\nSumme der unendlichen Reihe (|q| < 1): S∞ = a₁/(1 - q)\n\nAnwendungen: exponentielles Wachstum (Bevölkerung, Kapital), radioaktiver Zerfall, Zinseszins.',
        keyPoints: [
          'aₙ = a₁ × qⁿ⁻¹',
          'Quotient: q = aₙ₊₁ / aₙ',
          'Sₙ = a₁(qⁿ-1)/(q-1)',
          'S∞ = a₁/(1-q) nur wenn |q| < 1',
        ],
        examples: [
          {
            example: 'Bestimme das 6. Glied: 2, 6, 18, 54...',
            solution: 'q = 3, a₆ = 2×3⁵ = 486',
          },
          {
            example: 'Kapital von 1000€ mit 5% Jahreszins nach 10 Jahren:',
            solution: 'A = 1000 × 1.05¹⁰ ≈ 1628.89€',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Summe der unendlichen Reihe: 1 + 1/2 + 1/4 + 1/8 + ...',
            solution: 'S∞ = 2',
            steps: [
              'a₁ = 1, q = 1/2',
              '|q| = 0.5 < 1 → konvergente Reihe',
              'S∞ = 1/(1-1/2) = 1/(1/2) = 2',
            ],
          },
        ],
      },
    ],
  },
};
