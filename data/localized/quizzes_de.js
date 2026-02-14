// Deutsche Übersetzungen für Mathematik-Quizfragen

export const quizzesTranslations_de = {
  // ===== ARITHMETIK =====
  'arith-easy': {
    title: 'Grundlegende Arithmetik',
    category: 'Arithmetik',
    duration: '5 min',
    questions: [
      {
        question: 'Was ist 7 × 8?',
        options: ['54', '56', '64', '48'],
        explanation:
          '7 × 8 = 56. Wenn wir 7 mit 8 multiplizieren, erhalten wir 56. Wir können es überprüfen: 7 × 8 = 7 × (4 + 4) = 28 + 28 = 56.',
      },
      {
        question: 'Welche Zahl ist eine Primzahl?',
        options: ['15', '21', '17', '25'],
        explanation:
          '17 ist eine Primzahl, da sie nur durch 1 und sich selbst teilbar ist. 15 = 3×5, 21 = 3×7, 25 = 5×5.',
      },
      {
        question: 'Was ist 144 ÷ 12?',
        options: ['10', '11', '12', '13'],
        explanation:
          '144 ÷ 12 = 12. Überprüfung: 12 × 12 = 144. Dies ist auch das Quadrat von 12.',
      },
      {
        question: 'Was ist das Ergebnis von 15² - 14²?',
        options: ['1', '29', '29', '31'],
        explanation:
          '15² - 14² = (15-14)(15+14) = 1 × 29 = 29. Wir haben die Formel a² - b² = (a-b)(a+b) verwendet.',
      },
      {
        question: 'Was ist der GGT von 36 und 48?',
        options: ['6', '8', '12', '24'],
        explanation:
          'GGT(36, 48) = 12. Primfaktorzerlegung: 36 = 2²×3² und 48 = 2⁴×3. Also GGT = 2²×3 = 12.',
      },
      {
        question: 'Was ist 2⁵?',
        options: ['10', '16', '32', '64'],
        explanation:
          '2⁵ = 2×2×2×2×2 = 32. Schritt für Schritt: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32.',
      },
      {
        question: 'Welche Zahl erfüllt: □ × 9 = 81?',
        options: ['7', '8', '9', '10'],
        explanation:
          '9 × 9 = 81. Also □ = 9. Das bedeutet, dass 9 die Quadratwurzel von 81 ist.',
      },
      {
        question: 'Was ist der Wert des Ausdrucks: 3 + 4 × 2 - 1?',
        options: ['13', '10', '14', '9'],
        explanation:
          'Nach der Punkt-vor-Strich-Regel: 3 + (4 × 2) - 1 = 3 + 8 - 1 = 10. Die Multiplikation wird vor Addition und Subtraktion ausgeführt.',
      },
      {
        question: 'Was ist ein Fünftel von 100?',
        options: ['5', '10', '15', '20'],
        explanation:
          '100 ÷ 5 = 20. Ein Fünftel bedeutet, wir teilen durch 5. 100 / 5 = 20.',
      },
      {
        question: 'Was ist 3³ + 4²?',
        options: ['27', '43', '39', '91'],
        explanation:
          '3³ + 4² = 27 + 16 = 43. 3³ = 3×3×3 = 27 und 4² = 4×4 = 16. Zusammen: 27 + 16 = 43.',
      },
    ],
  },

  'arith-medium': {
    title: 'Brüche & Prozente',
    category: 'Arithmetik',
    duration: '7 min',
    questions: [
      {
        question: 'Was ist 3/4 + 2/5?',
        options: ['5/9', '23/20', '1/2', '7/9'],
        explanation:
          '3/4 + 2/5 = 15/20 + 8/20 = 23/20. Wir haben den gemeinsamen Nenner 20 gefunden: (3×5)/(4×5) + (2×4)/(5×4) = 15/20 + 8/20 = 23/20.',
      },
      {
        question: 'Was sind 40% von 250?',
        options: ['80', '90', '100', '110'],
        explanation:
          '40% von 250 = (40/100) × 250 = 0,4 × 250 = 100. Wir teilen den Prozentsatz durch 100 und multiplizieren dann.',
      },
      {
        question: 'Welche Zahl ist 0,375 als gekürzter Bruch?',
        options: ['3/8', '3/10', '4/8', '1/3'],
        explanation:
          '0,375 = 375/1000 = 3/8. Gekürzt: 375/1000 ÷ 125 = 3/8. Probe: 3÷8 = 0,375 ✓',
      },
      {
        question:
          'Wenn der Preis um 20% von 80€ gestiegen ist, wie hoch ist der neue Preis?',
        options: ['90€', '96€', '100€', '106€'],
        explanation:
          'Neuer Preis = 80 + 20% × 80 = 80 + 16 = 96€. Kann auch berechnet werden als: 80 × 1,2 = 96€.',
      },
      {
        question: 'Was ist 2/3 × 3/4?',
        options: ['1/4', '6/12', '1/2', '5/12'],
        explanation:
          '2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2. Wir multiplizieren Zähler mit Zähler und Nenner mit Nenner.',
      },
      {
        question: 'Wie viel Prozent von 150 sind 30?',
        options: ['15%', '20%', '25%', '30%'],
        explanation:
          'x = (30/150) × 100 = 0,2 × 100 = 20%. Formel: Prozentsatz = (Teil / Ganzes) × 100.',
      },
      {
        question: 'Was ist 5/6 ÷ 2/3?',
        options: ['10/18', '5/4', '15/12', '1/2'],
        explanation:
          '5/6 ÷ 2/3 = 5/6 × 3/2 = 15/12 = 5/4. Bei der Division durch einen Bruch multiplizieren wir mit seinem Kehrwert.',
      },
      {
        question:
          'Wenn 3/5 der Klasse Mädchen sind und es 30 Schüler gibt, wie viele Jungen gibt es?',
        options: ['10', '12', '16', '18'],
        explanation:
          'Mädchen: 3/5 × 30 = 18. Jungen: 30 - 18 = 12. Oder: Jungen = 2/5 × 30 = 12.',
      },
      {
        question: 'Wie hoch ist die prozentuale Steigerung von 80 auf 100?',
        options: ['20%', '25%', '15%', '22%'],
        explanation:
          'Steigerung % = (100-80)/80 × 100 = 20/80 × 100 = 25%. Formel: ((Neuer Wert - Alter Wert) / Alter Wert) × 100.',
      },
      {
        question: 'Welche Zahl liegt zwischen 1/3 und 1/2?',
        options: ['1/4', '2/5', '3/7', '5/12'],
        explanation:
          '2/5 = 0,4 liegt zwischen 1/3 ≈ 0,333 und 1/2 = 0,5. Wir rechnen in Dezimalzahlen um, um zu vergleichen.',
      },
    ],
  },

  'arith-hard': {
    title: 'Primzahlen & zusammengesetzte Zahlen',
    category: 'Arithmetik',
    duration: '10 min',
    questions: [
      {
        question: 'Wie viele Primzahlen gibt es zwischen 20 und 40?',
        options: ['4', '5', '6', '7'],
        explanation:
          'Die Primzahlen sind: 23, 29, 31, 37. Insgesamt 4 Zahlen. Primzahlen sind nur durch 1 und sich selbst teilbar.',
      },
      {
        question: 'Was ist das KGV von 12 und 18?',
        options: ['6', '36', '72', '108'],
        explanation:
          'KGV(12,18) = 36. Primfaktorzerlegung: 12 = 2²×3, 18 = 2×3². KGV = 2²×3² = 36.',
      },
      {
        question: 'Was ist 7! (Fakultät)?',
        options: ['49', '720', '5040', '40320'],
        explanation:
          '7! = 7×6×5×4×3×2×1 = 5040. Die Fakultät wird berechnet, indem man alle Zahlen von 1 bis n multipliziert.',
      },
      {
        question: 'Was ist 2⁶ + 2⁵?',
        options: ['96', '112', '128', '256'],
        explanation:
          '2⁶ + 2⁵ = 64 + 32 = 96. Kann auch geschrieben werden als: 2⁵(2 + 1) = 32 × 3 = 96.',
      },
      {
        question: 'Welche der folgenden Zahlen ist eine zusammengesetzte Zahl?',
        options: ['13', '17', '19', '21'],
        explanation:
          '21 = 3 × 7 ist eine zusammengesetzte Zahl. 13, 17, 19 sind Primzahlen.',
      },
      {
        question: 'Was ist der Wert von √(144)?',
        options: ['10', '11', '12', '14'],
        explanation: '√144 = 12, denn 12 × 12 = 144. 144 = 12².',
      },
      {
        question: 'Wandle 0,625 in einen gekürzten Bruch um:',
        options: ['5/8', '3/5', '2/3', '7/11'],
        explanation:
          '0,625 = 625/1000 = 5/8. Gekürzt durch 125: 625÷125 = 5, 1000÷125 = 8.',
      },
      {
        question: 'Was ist der GGT von 24, 36 und 48?',
        options: ['6', '8', '12', '24'],
        explanation:
          'GGT(24,36,48) = 12. Primfaktorzerlegung: 24=2³×3, 36=2²×3², 48=2⁴×3. GGT = 2²×3 = 12.',
      },
      {
        question: 'Vereinfache: (3²)³',
        options: ['81', '243', '729', '2187'],
        explanation:
          '(3²)³ = 3⁶ = 729. Regel: (aᵐ)ⁿ = aᵐⁿ. Also (3²)³ = 3²ˣ³ = 3⁶ = 729.',
      },
      {
        question: 'Was ist 11² - 10²?',
        options: ['11', '19', '21', '29'],
        explanation:
          '11² - 10² = (11-10)(11+10) = 1 × 21 = 21. Formel: a² - b² = (a-b)(a+b).',
      },
    ],
  },

  // ===== ALGEBRA =====
  'alg-easy': {
    title: 'Grundlegende Algebra',
    category: 'Algebra',
    duration: '8 min',
    questions: [
      {
        question: 'Löse: 2x + 5 = 13',
        options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
        explanation:
          '2x + 5 = 13 → 2x = 13 - 5 = 8 → x = 8/2 = 4. Schritt 1: Wir subtrahieren 5 von beiden Seiten. Schritt 2: Wir teilen durch 2.',
      },
      {
        question: 'Vereinfache den Ausdruck: 3a + 2b - a + 4b',
        options: ['2a + 6b', '4a + 6b', '2a + 2b', '3a + 6b'],
        explanation:
          '3a + 2b - a + 4b = (3a - a) + (2b + 4b) = 2a + 6b. Wir gruppieren die Koeffizienten der gleichen Variablen.',
      },
      {
        question: 'Wenn f(x) = 2x - 3, was ist f(5)?',
        options: ['5', '7', '9', '10'],
        explanation:
          'f(5) = 2(5) - 3 = 10 - 3 = 7. Wir setzen x = 5 in den Ausdruck ein.',
      },
      {
        question: 'Löse: x/3 = 7',
        options: ['x = 3', 'x = 14', 'x = 21', 'x = 28'],
        explanation:
          'x/3 = 7 → x = 7 × 3 = 21. Wir multiplizieren beide Seiten mit 3, um x zu isolieren.',
      },
      {
        question: 'Welches davon ist eine lineare Gleichung?',
        options: ['x² + 2 = 0', '2x - 1 = 5', 'x³ = 8', '√x = 3'],
        explanation:
          '2x - 1 = 5 ist eine lineare Gleichung, da der Exponent von x gleich 1 ist. Lineare Gleichungen haben die Form ax + b = c.',
      },
      {
        question: 'Löse das Gleichungssystem: x + y = 10, x - y = 2',
        options: ['x=5, y=5', 'x=6, y=4', 'x=7, y=3', 'x=8, y=2'],
        explanation:
          'Wir addieren die Gleichungen: 2x = 12 → x = 6. Dann: 6 + y = 10 → y = 4.',
      },
      {
        question: 'Was ist der Koeffizient von x² in: 5x² - 3x + 7?',
        options: ['3', '5', '7', '-3'],
        explanation:
          'Der Koeffizient von x² ist 5. Im Ausdruck 5x² - 3x + 7 ist die Zahl vor x² gleich 5.',
      },
      {
        question: 'Löse: 3(x + 2) = 18',
        options: ['x = 2', 'x = 3', 'x = 4', 'x = 6'],
        explanation:
          '3(x + 2) = 18 → x + 2 = 6 → x = 4. Schritt 1: Durch 3 teilen. Schritt 2: 2 subtrahieren.',
      },
      {
        question: 'Was ist der Wert von x: 5x - 3 = 2x + 9?',
        options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
        explanation:
          '5x - 3 = 2x + 9 → 3x = 12 → x = 4. Wir bringen 2x nach links und -3 nach rechts.',
      },
      {
        question: 'Multipliziere: (x + 3)(x + 2)',
        options: ['x² + 6', 'x² + 5x + 6', 'x² + 5x + 5', 'x² + 6x + 6'],
        explanation:
          '(x+3)(x+2) = x² + 2x + 3x + 6 = x² + 5x + 6. FOIL-Methode: First, Outer, Inner, Last.',
      },
    ],
  },

  'alg-medium': {
    title: 'Funktionen & Graphen',
    category: 'Algebra',
    duration: '10 min',
    questions: [
      {
        question: 'Wenn f(x) = 3x - 2, was ist f⁻¹(7)?',
        options: ['3', '4', '5', '6'],
        explanation:
          'f(x) = 7 → 3x - 2 = 7 → x = 3. Also f⁻¹(7) = 3. Die Umkehrfunktion wandelt den Ausgabewert zurück in den Eingabewert.',
      },
      {
        question: 'Welcher Punkt liegt auf der Geraden y = 2x + 1?',
        options: ['(1, 2)', '(2, 5)', '(3, 6)', '(4, 10)'],
        explanation:
          'Wir prüfen (2,5): y = 2(2) + 1 = 5 ✓. Die anderen Punkte erfüllen die Gleichung nicht.',
      },
      {
        question: 'Was ist die Steigung der Geraden y = 2x + 3?',
        options: ['1', '2', '3', '1/2'],
        explanation:
          'Die Steigung = 2. In der Form y = mx + b ist m die Steigung.',
      },
      {
        question: 'Löse für x: |x - 3| = 5',
        options: ['x = 8', 'x = -2', 'x = 8 oder x = -2', 'x = 2 oder x = 8'],
        explanation:
          '|x-3| = 5 → x-3 = 5 oder x-3 = -5 → x = 8 oder x = -2. Der Absolutbetrag ergibt zwei Lösungen.',
      },
      {
        question: 'Was ist der Definitionsbereich von f(x) = √(x - 2)?',
        options: ['x > 2', 'x ≥ 2', 'x < 2', 'Alle reellen Zahlen'],
        explanation:
          'Definitionsbereich: x ≥ 2. Die Quadratwurzel erfordert x - 2 ≥ 0, also x ≥ 2.',
      },
      {
        question: 'Wenn g(x) = x² und f(x) = x + 1, was ist (f∘g)(2)?',
        options: ['4', '5', '6', '9'],
        explanation:
          '(f∘g)(2) = f(g(2)) = f(4) = 4 + 1 = 5. Verkettung: Zuerst g anwenden, dann f.',
      },
      {
        question: 'Welche Gerade ist parallel zu y = 3x - 1?',
        options: ['y = 3x + 5', 'y = -3x + 1', 'y = 1/3x + 2', 'y = 5x - 1'],
        explanation:
          'Parallele Geraden haben die gleiche Steigung. y = 3x + 5 hat m = 3.',
      },
      {
        question: 'Was ist der y-Achsenabschnitt von y = -2x + 7?',
        options: ['-2', '2', '7', '-7'],
        explanation:
          'Der y-Achsenabschnitt (Punkt bei x=0) ist b = 7. In y = mx + b ist b der y-Achsenabschnitt.',
      },
      {
        question: 'Löse: 2^x = 16',
        options: ['x = 2', 'x = 3', 'x = 4', 'x = 8'],
        explanation:
          '2^x = 16 = 2⁴ → x = 4. Wir wandeln 16 in eine Potenz von 2 um: 16 = 2⁴.',
      },
      {
        question:
          'Wenn f(x) linear ist und f(0)=3, f(2)=7, was ist f(5)?',
        options: ['11', '13', '15', '17'],
        explanation:
          'Steigung = (7-3)/(2-0) = 2. f(x) = 2x + 3. f(5) = 2(5) + 3 = 13.',
      },
    ],
  },

  'alg-hard': {
    title: 'Quadratische Gleichungen',
    category: 'Algebra',
    duration: '10 min',
    questions: [
      {
        question: 'Löse: x² - 5x + 6 = 0',
        options: ['x = 1, x = 6', 'x = 2, x = 3', 'x = -2, x = -3', 'x = 1, x = -6'],
        explanation:
          'x² - 5x + 6 = (x-2)(x-3) = 0. Also x = 2 oder x = 3. Wir suchen zwei Zahlen: Summe -5, Produkt 6 → (-2) + (-3) = -5 und (-2)×(-3) = 6.',
      },
      {
        question: 'Was ist die Diskriminante von x² + 4x + 4 = 0?',
        options: ['0', '8', '-8', '16'],
        explanation:
          'Δ = b² - 4ac = 16 - 16 = 0. a=1, b=4, c=4. Δ = 4² - 4(1)(4) = 16 - 16 = 0. Dies zeigt eine doppelte Nullstelle an.',
      },
      {
        question: 'Löse mit der Lösungsformel: x² - 6x + 5 = 0',
        options: ['x = 1, x = 5', 'x = -1, x = 5', 'x = 2, x = 3', 'x = 1, x = -5'],
        explanation:
          'x = (6 ± √(36-20))/2 = (6 ± 4)/2. Also x₁ = 5 und x₂ = 1. Auch: (x-1)(x-5) = 0.',
      },
      {
        question: 'Die Parabel y = x² - 4 hat ihren Scheitelpunkt bei:',
        options: ['(0, 4)', '(0, -4)', '(2, 0)', '(-2, 0)'],
        explanation:
          'Der Scheitelpunkt der Parabel y = x² + c liegt bei (0, c). Also ist der Scheitelpunkt bei (0, -4). Die Parabel öffnet sich nach oben, da der Koeffizient von x² positiv ist.',
      },
      {
        question: 'Wie viele reelle Nullstellen hat: x² + x + 1 = 0?',
        options: ['0', '1', '2', 'Unendlich'],
        explanation:
          'Δ = 1 - 4 = -3 < 0. Wenn die Diskriminante negativ ist, hat die Gleichung keine reellen Nullstellen, nur komplexe.',
      },
      {
        question: 'Faktorisiere: x² - 9',
        options: ['(x-3)²', '(x+3)(x-3)', '(x-9)(x+1)', '(x-3)(x+9)'],
        explanation:
          'x² - 9 = x² - 3² = (x+3)(x-3). Formel: a² - b² = (a+b)(a-b).',
      },
      {
        question: 'Die Summe der Nullstellen von x² - 7x + 10 = 0 ist:',
        options: ['10', '-7', '7', '-10'],
        explanation:
          'Nach dem Satz von Vieta: x₁ + x₂ = -b/a = 7. Außerdem: x₁ × x₂ = c/a = 10.',
      },
      {
        question: 'Quadratische Ergänzung: x² + 6x = ?',
        options: ['(x+3)² - 9', '(x+6)² - 36', '(x+3)² + 9', '(x+6)² + 36'],
        explanation:
          'x² + 6x = x² + 6x + 9 - 9 = (x+3)² - 9. Wir addieren (6/2)² = 9 und subtrahieren gleich viel.',
      },
      {
        question: 'Löse: 2x² = 8',
        options: ['x = 2', 'x = ±2', 'x = 4', 'x = ±4'],
        explanation:
          '2x² = 8 → x² = 4 → x = ±√4 = ±2. Wenn x² = positiv, gibt es zwei Lösungen: +√ und -√.',
      },
      {
        question: 'Welche Parabel öffnet sich nach unten?',
        options: ['y = x² + 1', 'y = 2x²', 'y = -x² + 3', 'y = (x-1)²'],
        explanation:
          'y = -x² + 3 öffnet sich nach unten, da der Koeffizient von x² gleich -1 (negativ) ist. Wenn a < 0, öffnet sich die Parabel nach unten.',
      },
    ],
  },

  // ===== GEOMETRIE =====
  'geo-easy': {
    title: 'Grundlegende Geometrie',
    category: 'Geometrie',
    duration: '7 min',
    questions: [
      {
        question: 'Wie groß ist die Innenwinkelsumme eines Vierecks?',
        options: ['270°', '360°', '180°', '90°'],
        explanation:
          'Die Summe der Innenwinkel jedes Vierecks beträgt 360°. Die allgemeine Formel: (n-2)×180° wobei n=4 ergibt (4-2)×180 = 360°.',
      },
      {
        question: 'Welcher Satz berechnet die Hypotenuse?',
        options: [
          'Satz des Thales',
          'Satz des Pythagoras',
          'Sinussatz',
          'Satz von Euler',
        ],
        explanation:
          'Der Satz des Pythagoras: a² + b² = c², wobei c die Hypotenuse ist. Er gilt nur für rechtwinklige Dreiecke.',
      },
      {
        question: 'Die Fläche des Kreises mit Radius r = 4 ist:',
        options: ['8π', '16π', '32π', '4π'],
        explanation:
          'A = πr² = π × 4² = 16π. Die Formel für die Kreisfläche ist πr².',
      },
      {
        question: 'Der Umfang eines Quadrats mit Seitenlänge 6 cm:',
        options: ['12 cm', '24 cm', '36 cm', '18 cm'],
        explanation:
          'U = 4 × a = 4 × 6 = 24 cm. Das Quadrat hat 4 gleich lange Seiten.',
      },
      {
        question: 'Die Fläche eines Dreiecks mit Grundseite 10 und Höhe 6:',
        options: ['30', '60', '32', '40'],
        explanation:
          'A = (b × h)/2 = (10 × 6)/2 = 30. Dreiecksformel: die Hälfte des Produkts aus Grundseite × Höhe.',
      },
      {
        question: 'Welches Dreieck hat drei gleich lange Seiten?',
        options: ['Gleichschenkliges', 'Ungleichseitiges', 'Gleichseitiges', 'Rechtwinkliges'],
        explanation:
          'Das gleichseitige Dreieck hat alle drei Seiten gleich lang. Außerdem sind alle drei Winkel jeweils 60°.',
      },
      {
        question:
          'Wie lang ist die Hypotenuse, wenn die Katheten 3 und 4 sind?',
        options: ['5', '6', '7', '8'],
        explanation:
          'c = √(3² + 4²) = √(9 + 16) = √25 = 5. Dies ist das berühmte pythagoreische Tripel 3-4-5.',
      },
      {
        question: 'Das Volumen eines Würfels mit Seitenlänge 3 cm:',
        options: ['9 cm³', '18 cm³', '27 cm³', '36 cm³'],
        explanation:
          'V = a³ = 3³ = 27 cm³. Das Volumen des Würfels wird berechnet, indem die Seitenlänge in die dritte Potenz erhoben wird.',
      },
      {
        question: 'Die Anzahl der Seiten eines regelmäßigen Sechsecks:',
        options: ['4', '5', '6', '7'],
        explanation:
          'Das Sechseck (Hexagon) hat 6 Seiten. "Hexa" = 6 im Griechischen.',
      },
      {
        question: 'Zwei parallele Geraden sind per Definition:',
        options: [
          'Sich schneidend',
          'Treffen sich nie',
          'Senkrecht zueinander',
          'Konvergent',
        ],
        explanation:
          'Parallele Geraden treffen sich nie und halten den gleichen Abstand zueinander. Sie liegen in derselben Ebene.',
      },
    ],
  },

  'geo-medium': {
    title: 'Flächen & Volumen',
    category: 'Geometrie',
    duration: '10 min',
    questions: [
      {
        question: 'Das Volumen des Zylinders mit r=3 und h=5 ist:',
        options: ['30π', '45π', '15π', '60π'],
        explanation:
          'V = πr²h = π × 9 × 5 = 45π. Formel für das Zylindervolumen: Grundfläche × Höhe.',
      },
      {
        question: 'Die Gesamtoberfläche der Kugel mit r=6 ist:',
        options: ['36π', '72π', '144π', '216π'],
        explanation:
          'A = 4πr² = 4 × π × 36 = 144π. Die Formel für die Kugeloberfläche ist 4πr².',
      },
      {
        question: 'Die Diagonale des Rechtecks 5×12 hat die Länge:',
        options: ['13', '14', '15', '17'],
        explanation:
          'd = √(5² + 12²) = √(25 + 144) = √169 = 13. Pythagoreisches Tripel: 5-12-13.',
      },
      {
        question: 'Die Fläche der Raute mit Diagonalen d₁=8, d₂=6:',
        options: ['14', '24', '28', '48'],
        explanation:
          'A = (d₁ × d₂)/2 = (8 × 6)/2 = 24. Rautenfläche = die Hälfte des Produkts der Diagonalen.',
      },
      {
        question: 'Das Volumen des Kegels mit r=3 und h=4 ist:',
        options: ['4π', '12π', '36π', '48π'],
        explanation:
          'V = (1/3)πr²h = (1/3) × π × 9 × 4 = 12π. Das Kegelvolumen ist 1/3 des Zylindervolumens.',
      },
      {
        question: 'Der Umfang des Trapezes mit a=10, b=6, c=5, d=5:',
        options: ['20', '24', '26', '28'],
        explanation:
          'U = a + b + c + d = 10 + 6 + 5 + 5 = 26. Der Umfang jedes Polygons wird als Summe aller Seiten berechnet.',
      },
      {
        question: 'Die Bogenlänge des Kreises mit r=10, Winkel 90°:',
        options: ['5π', '10π', '15π', '20π'],
        explanation:
          'L = (θ/360°) × 2πr = (90/360) × 20π = (1/4) × 20π = 5π. Der Bogen ist 1/4 des Umfangs.',
      },
      {
        question: 'Die Fläche des Kreissektors mit r=8, Winkel 45°:',
        options: ['4π', '8π', '16π', '32π'],
        explanation:
          'A = (θ/360°) × πr² = (45/360) × 64π = (1/8) × 64π = 8π.',
      },
      {
        question: 'Das Volumen der Pyramide mit Grundfläche 6×6 und Höhe 4:',
        options: ['24', '48', '72', '96'],
        explanation:
          'V = (1/3) × A_Grundfläche × h = (1/3) × 36 × 4 = 48. Pyramidenvolumen = 1/3 des Prismas.',
      },
      {
        question: 'Die Fläche des Parallelogramms mit b=8, h=5:',
        options: ['13', '20', '40', '80'],
        explanation:
          'A = b × h = 8 × 5 = 40. Parallelogrammfläche = Grundseite × Höhe (nicht die Seite, sondern die senkrechte Höhe).',
      },
    ],
  },

  'geo-hard': {
    title: '3D-Geometrie & Sätze',
    category: 'Geometrie',
    duration: '12 min',
    questions: [
      {
        question: 'Das Volumen der Kugel mit Radius 3 ist:',
        options: ['36π', '48π', '54π', '108π'],
        explanation:
          'V = (4/3)πr³ = (4/3)π(27) = 36π. Formel der Kugel: (4/3)πr³.',
      },
      {
        question: 'Die Gesamtoberfläche des Würfels mit Seitenlänge 5:',
        options: ['100', '125', '150', '200'],
        explanation:
          'A = 6a² = 6 × 25 = 150. Der Würfel hat 6 identische quadratische Flächen.',
      },
      {
        question:
          'Im Dreieck mit den Seiten 5, 12, 13 – welcher Winkel beträgt 90°?',
        options: [
          'Gegenüber von 5',
          'Gegenüber von 12',
          'Gegenüber von 13',
          'Keiner',
        ],
        explanation:
          '5² + 12² = 25 + 144 = 169 = 13². Pythagoreisches Tripel, der Winkel gegenüber der Hypotenuse (13) beträgt 90°.',
      },
      {
        question: 'Die Länge der Raumdiagonale eines Würfels mit Seitenlänge 2:',
        options: ['2√2', '2√3', '4', '2√6'],
        explanation:
          'd = a√3 = 2√3. Die Raumdiagonale des Würfels = Seitenlänge × √3.',
      },
      {
        question:
          'Das Volumen des dreiseitigen Prismas mit Grundfläche 6×8/2 und Höhe 10:',
        options: ['120', '160', '240', '480'],
        explanation:
          'V = A_Grundfläche × h = (6×8/2) × 10 = 24 × 10 = 240. Die Grundfläche ist ein Dreieck.',
      },
      {
        question: 'Die Oberfläche des Kegels mit r=4, h=3 (Mantellinie l=5):',
        options: ['36π', '40π', '44π', '48π'],
        explanation:
          'A = πr² + πrl = 16π + 20π = 36π. Gesamtoberfläche = Grundfläche + Mantelfläche.',
      },
      {
        question:
          'Der Strahlensatz besagt, dass wenn eine Parallele zur Grundseite eines Dreiecks die beiden Seiten schneidet, diese geteilt werden in:',
        options: [
          'Gleiche Teile',
          'Proportionale Teile',
          'Doppelte Teile',
          'Zufällige Teile',
        ],
        explanation:
          'Der Strahlensatz: Parallele Geraden erzeugen proportionale Abschnitte. a/b = c/d.',
      },
      {
        question:
          'Wie groß ist der Innenwinkel eines regelmäßigen Fünfecks an jeder Ecke?',
        options: ['90°', '108°', '120°', '135°'],
        explanation:
          'Innenwinkel = (n-2)×180°/n = (5-2)×180°/5 = 108°.',
      },
      {
        question:
          'Das Verhältnis der Oberflächen zweier Würfel mit Seitenlänge 2 und 4:',
        options: ['1:2', '1:4', '1:6', '1:8'],
        explanation:
          'A₁ = 6(2²) = 24, A₂ = 6(4²) = 96. Verhältnis = 24:96 = 1:4.',
      },
      {
        question: 'Das Volumen des regelmäßigen Oktaeders mit Seitenlänge a ist:',
        options: ['a³√2/3', 'a³√3/2', 'a³√2', '2a³'],
        explanation:
          'V = a³√2/3. Der regelmäßige Oktaeder hat 8 gleichseitige Dreiecksflächen.',
      },
    ],
  },

  // ===== TRIGONOMETRIE =====
  'trig-easy': {
    title: 'Grundlegende Trigonometrie',
    category: 'Trigonometrie',
    duration: '7 min',
    questions: [
      {
        question: 'Im rechtwinkligen Dreieck ist sin(θ) = ?',
        options: [
          'Gegenkathete/Hypotenuse',
          'Ankathete/Hypotenuse',
          'Gegenkathete/Ankathete',
          'Hypotenuse/Kathete',
        ],
        explanation:
          'Sin(θ) = Gegenkathete / Hypotenuse. Dies ist die grundlegende Definition des Sinus.',
      },
      {
        question: 'Cos(θ) im rechtwinkligen Dreieck ist:',
        options: [
          'Gegenkathete/Hypotenuse',
          'Ankathete/Hypotenuse',
          'Hypotenuse/Ankathete',
          'Gegenkathete/Ankathete',
        ],
        explanation:
          'Cos(θ) = Ankathete / Hypotenuse. Der Kosinus ist das Verhältnis der Ankathete zur Hypotenuse.',
      },
      {
        question: 'Was ist sin(0°)?',
        options: ['0', '1/2', '√2/2', '1'],
        explanation:
          'Sin(0°) = 0. Im Einheitskreis ist bei θ = 0° die y-Koordinate 0.',
      },
      {
        question: 'Tan(θ) ist gleich:',
        options: [
          'sin(θ) × cos(θ)',
          'sin(θ) / cos(θ)',
          'cos(θ) / sin(θ)',
          '1 / sin(θ)',
        ],
        explanation:
          'Tan(θ) = sin(θ) / cos(θ). Der Tangens ist das Verhältnis von Sinus zu Kosinus.',
      },
      {
        question: 'Wie viele Grad hat ein Vollkreis?',
        options: ['90°', '180°', '270°', '360°'],
        explanation:
          'Der Vollkreis hat 360°. Dies ist die Standarddefinition der Gradmessung.',
      },
      {
        question: 'Cos(90°) ist:',
        options: ['0', '1/2', '√2/2', '1'],
        explanation:
          'Cos(90°) = 0. Im Einheitskreis ist bei θ = 90° die x-Koordinate 0.',
      },
      {
        question: 'Die Summe der Innenwinkel eines Dreiecks:',
        options: ['90°', '180°', '270°', '360°'],
        explanation:
          'Die Winkelsumme im Dreieck = 180°. Dies gilt für jedes Dreieck.',
      },
      {
        question: 'Wenn sin(x) = 0,5, welcher Winkel ist x (0° - 90°)?',
        options: ['15°', '30°', '45°', '60°'],
        explanation:
          'Sin(30°) = 0,5 = 1/2. Dies ist einer der besonderen Winkel.',
      },
      {
        question: 'Was ist sin²(θ) + cos²(θ)?',
        options: ['0', '1', '2', 'θ'],
        explanation:
          'sin²(θ) + cos²(θ) = 1. Dies ist die fundamentale trigonometrische Identität.',
      },
      {
        question:
          'Im rechtwinkligen Dreieck mit Hypotenuse 10 und sin(θ)=0,6 ist die Gegenkathete:',
        options: ['4', '6', '8', '12'],
        explanation:
          'Sin(θ) = Kathete/10 = 0,6 → Kathete = 6. Sin = Gegenkathete/Hypotenuse.',
      },
    ],
  },

  'trig-medium': {
    title: 'Trigonometrie',
    category: 'Trigonometrie',
    duration: '10 min',
    questions: [
      {
        question: 'Sin(30°) ist:',
        options: ['√3/2', '1/2', '√2/2', '1'],
        explanation:
          'Sin(30°) = 1/2. Besondere Winkel: sin(30°)=1/2, sin(45°)=√2/2, sin(60°)=√3/2.',
      },
      {
        question: 'Cos(60°) ist:',
        options: ['√3/2', '1/2', '√2/2', '0'],
        explanation:
          'Cos(60°) = 1/2. Beachte: cos(60°) = sin(30°) = 1/2. Dies kommt von der Komplementarität: cos(θ) = sin(90°-θ).',
      },
      {
        question: 'Tan(45°) ist:',
        options: ['0', '1', '√3', '√3/3'],
        explanation:
          'Tan(45°) = 1. Sin(45°)/Cos(45°) = (√2/2)/(√2/2) = 1. Wenn sin = cos, ist der Tangens 1.',
      },
      {
        question: 'Welche trigonometrische Identität ist korrekt?',
        options: [
          'sin²x + cos²x = 2',
          'sin²x + cos²x = 1',
          'sin²x - cos²x = 1',
          'sinx × cosx = 1',
        ],
        explanation:
          'sin²x + cos²x = 1 ist die fundamentale trigonometrische Identität. Sie leitet sich vom Satz des Pythagoras im Einheitskreis ab.',
      },
      {
        question: 'Rechne 180° in Bogenmaß um:',
        options: ['π/2', 'π', '2π', '3π/2'],
        explanation:
          '180° = π Radiant. Formel: Radiant = Grad × π/180. Also 180 × π/180 = π.',
      },
      {
        question: 'Sin(90°) ist:',
        options: ['0', '1/2', '√2/2', '1'],
        explanation:
          'Sin(90°) = 1. Im Einheitskreis liegt der Punkt bei θ = 90° bei (0,1), also ist die y-Koordinate = 1.',
      },
      {
        question:
          'Im rechtwinkligen Dreieck mit Hypotenuse 10 und Winkel 30° ist die Gegenkathete:',
        options: ['5', '5√3', '10√3', '10/√3'],
        explanation:
          'Sin(30°) = Kathete/Hypotenuse → Kathete = 10 × sin(30°) = 10 × 0,5 = 5.',
      },
      {
        question: 'Cos(0°) ist:',
        options: ['0', '1/2', '1', '-1'],
        explanation:
          'Cos(0°) = 1. Im Einheitskreis liegt der Punkt bei θ = 0° bei (1,0), also ist die x-Koordinate = 1.',
      },
      {
        question: 'Welcher Ausdruck ist äquivalent zu sin(x)/cos(x)?',
        options: ['cot(x)', 'tan(x)', 'sec(x)', 'csc(x)'],
        explanation:
          'tan(x) = sin(x)/cos(x). Dies ist die Definition des Tangens. cot(x) = cos(x)/sin(x).',
      },
      {
        question: 'Wie viele Radiant sind 360°?',
        options: ['π', '2π', '3π', '4π'],
        explanation:
          '360° = 2π Radiant. Der Vollkreis = 2π. 180° = π, also 360° = 2π.',
      },
    ],
  },

  'trig-hard': {
    title: 'Trigonometrische Identitäten',
    category: 'Trigonometrie',
    duration: '12 min',
    questions: [
      {
        question: 'Vereinfache: sin(2x) = ?',
        options: [
          '2sin(x)',
          '2sin(x)cos(x)',
          'sin²(x) + cos²(x)',
          'sin(x) + sin(x)',
        ],
        explanation:
          'Sin(2x) = 2sin(x)cos(x). Dies ist die Doppelwinkelformel für den Sinus.',
      },
      {
        question: 'Cos(2x) kann geschrieben werden als:',
        options: [
          '2cos(x)',
          'cos²(x) - sin²(x)',
          'cos(x) + cos(x)',
          '2cos²(x)',
        ],
        explanation:
          'Cos(2x) = cos²(x) - sin²(x). Auch: cos(2x) = 2cos²(x) - 1 = 1 - 2sin²(x).',
      },
      {
        question: 'Was ist tan(45°) + tan(45°)?',
        options: ['1', '2', '√2', '√3'],
        explanation:
          'Tan(45°) = 1. Also 1 + 1 = 2. Tan(45°) ist 1, weil sin(45°) = cos(45°).',
      },
      {
        question: 'Die Identität sec²(x) - tan²(x) = ?',
        options: ['0', '1', 'sin(x)', 'cos(x)'],
        explanation:
          'Sec²(x) - tan²(x) = 1. Es folgt aus: 1/cos²(x) - sin²(x)/cos²(x) = (1 - sin²(x))/cos²(x) = 1.',
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
          'Sin(A + B) = sin(A)cos(B) + cos(A)sin(B). Additionstheorem für den Sinus.',
      },
      {
        question:
          'Wenn sin(x) = 3/5 und x im ersten Quadranten liegt, was ist cos(x)?',
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
          'Cos(A - B) = cos(A)cos(B) + sin(A)sin(B). Subtraktionstheorem für den Kosinus.',
      },
      {
        question: 'Vereinfache: 1/sin(x) = ?',
        options: ['cos(x)', 'tan(x)', 'csc(x)', 'sec(x)'],
        explanation:
          '1/sin(x) = csc(x) (Kosekans). Kehrwertfunktionen: csc = 1/sin, sec = 1/cos, cot = 1/tan.',
      },
      {
        question: 'Was ist sin(π/6) im Bogenmaß?',
        options: ['0', '1/2', '√2/2', '√3/2'],
        explanation:
          'π/6 = 30°. Sin(30°) = 1/2. Umrechnung: π Radiant = 180°.',
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
          'Tan(2x) = 2tan(x) / (1 - tan²(x)). Doppelwinkelformel für den Tangens.',
      },
    ],
  },

  // ===== ANALYSIS =====
  'calc-easy': {
    title: 'Grundlegende Grenzwerte',
    category: 'Analysis',
    duration: '8 min',
    questions: [
      {
        question: 'Was ist lim(x→2) x?',
        options: ['0', '1', '2', '∞'],
        explanation:
          'Lim(x→2) x = 2. Wenn sich x dem Wert 2 nähert, ist der Wert von x gleich 2. Bei einfachen Funktionen: einfach einsetzen.',
      },
      {
        question: 'Was ist lim(x→3) 5?',
        options: ['0', '3', '5', '15'],
        explanation:
          'Lim(x→3) 5 = 5. Der Grenzwert einer Konstanten ist immer die Konstante selbst.',
      },
      {
        question: 'Was ist lim(x→0) x²?',
        options: ['0', '1', '2', 'Existiert nicht'],
        explanation:
          'Lim(x→0) x² = 0² = 0. Wir setzen x = 0 in den Ausdruck ein.',
      },
      {
        question: 'Lim(x→1) (x + 2) = ?',
        options: ['1', '2', '3', '4'],
        explanation:
          'Lim(x→1) (x + 2) = 1 + 2 = 3. Direktes Einsetzen.',
      },
      {
        question: 'Was ist lim(x→4) √x?',
        options: ['0', '2', '4', '16'],
        explanation:
          'Lim(x→4) √x = √4 = 2. Die Quadratwurzel von 4 ist 2.',
      },
      {
        question: 'Lim(x→∞) 1/x = ?',
        options: ['0', '1', '∞', 'Existiert nicht'],
        explanation:
          'Lim(x→∞) 1/x = 0. Während x unbegrenzt wächst, nähert sich 1/x dem Wert 0.',
      },
      {
        question: 'Was ist lim(h→0) (5 + h)?',
        options: ['0', '5', 'h', '5h'],
        explanation:
          'Lim(h→0) (5 + h) = 5 + 0 = 5. Wenn h→0, verschwindet der Term h.',
      },
      {
        question: 'Lim(x→-1) x³ = ?',
        options: ['-1', '-2', '-3', '1'],
        explanation:
          'Lim(x→-1) x³ = (-1)³ = -1. Direktes Einsetzen.',
      },
      {
        question: 'Was ist lim(x→2) (x² - 4)/(x - 2)?',
        options: ['0', '2', '4', 'Existiert nicht'],
        explanation:
          '(x²-4)/(x-2) = (x-2)(x+2)/(x-2) = x+2. Lim(x→2) = 2+2 = 4. Vor dem Einsetzen vereinfachen.',
      },
      {
        question: 'Lim(x→0) sin(x)/x verwendet die Regel:',
        options: ["L'Hospital", 'Kettenregel', 'Produktregel', 'Quotientenregel'],
        explanation:
          "Die Regel von L'Hospital wird für unbestimmte Formen 0/0 oder ∞/∞ verwendet.",
      },
    ],
  },

  'calc-medium': {
    title: 'Grundlegende Ableitungen',
    category: 'Analysis',
    duration: '10 min',
    questions: [
      {
        question: 'Die Ableitung von f(x) = x⁵ ist:',
        options: ['x⁴', '5x⁴', '5x', 'x⁶/6'],
        explanation:
          'd/dx(x⁵) = 5x⁴. Potenzregel: d/dx(xⁿ) = n·xⁿ⁻¹.',
      },
      {
        question: 'Was ist d/dx(7x)?',
        options: ['0', '7', '7x', 'x'],
        explanation:
          'd/dx(7x) = 7. Die Ableitung von cx ist c.',
      },
      {
        question: 'Die Ableitung von f(x) = x² + 3x - 5:',
        options: ['2x + 3', 'x + 3', '2x + 3x', '2x - 5'],
        explanation:
          'd/dx(x² + 3x - 5) = 2x + 3. Wir leiten Term für Term ab.',
      },
      {
        question: 'Was ist d/dx(cos(x))?',
        options: ['sin(x)', '-sin(x)', 'cos(x)', '-cos(x)'],
        explanation:
          'd/dx(cos(x)) = -sin(x). Trigonometrische Ableitungen: d(sin)=cos, d(cos)=-sin.',
      },
      {
        question: 'Produktregel: d/dx[f(x)·g(x)] = ?',
        options: [
          "f'(x)·g'(x)",
          "f'(x)·g(x) + f(x)·g'(x)",
          "f'(x) + g'(x)",
          "f(x)·g'(x)",
        ],
        explanation:
          "Produktregel: (fg)' = f'g + fg'. Ableitung der ersten × zweite + erste × Ableitung der zweiten.",
      },
      {
        question: 'Was ist d/dx(ln(x))?',
        options: ['x', '1/x', 'e^x', 'log(x)'],
        explanation:
          'd/dx(ln(x)) = 1/x. Die Ableitung des natürlichen Logarithmus.',
      },
      {
        question: 'Die Ableitung von f(x) = 1/x²:',
        options: ['-2/x³', '-1/x', '2/x³', '-2/x'],
        explanation:
          'f(x) = x⁻². f\'(x) = -2x⁻³ = -2/x³. Wir verwenden die Potenzregel.',
      },
      {
        question: 'Was ist d/dx(5)?',
        options: ['0', '1', '5', 'x'],
        explanation:
          'd/dx(Konstante) = 0. Die Ableitung jeder Konstanten ist 0.',
      },
      {
        question: "Kettenregel: Wenn y = f(g(x)), dann ist y' = ?",
        options: [
          "f'(x) + g'(x)",
          "f'(g(x))·g'(x)",
          "f'(x)·g'(x)",
          "f(g'(x))",
        ],
        explanation:
          "Kettenregel: dy/dx = f'(g(x))·g'(x). Äußere Ableitung × innere Ableitung.",
      },
      {
        question: "Wenn f(x) = √x, was ist f'(4)?",
        options: ['1/2', '1/4', '2', '4'],
        explanation:
          "f(x) = x^(1/2), f'(x) = (1/2)x^(-1/2) = 1/(2√x). f'(4) = 1/(2√4) = 1/4.",
      },
    ],
  },

  'calc-hard': {
    title: 'Ableitungen & Grenzwerte',
    category: 'Analysis',
    duration: '12 min',
    questions: [
      {
        question: 'Die Ableitung von f(x) = x³ ist:',
        options: ['x²', '3x²', '3x', 'x⁴/4'],
        explanation:
          "f'(x) = 3x². Potenzregel: d/dx(xⁿ) = n·xⁿ⁻¹. Also d/dx(x³) = 3·x² = 3x².",
      },
      {
        question: 'Die Ableitung von f(x) = sin(x) ist:',
        options: ['-sin(x)', 'cos(x)', '-cos(x)', 'tan(x)'],
        explanation:
          "f'(x) = cos(x). Trigonometrische Ableitungen: d/dx(sin) = cos, d/dx(cos) = -sin.",
      },
      {
        question: 'Lim(x→0) sin(x)/x = ?',
        options: ['0', '∞', '1', '-1'],
        explanation:
          'lim(x→0) sin(x)/x = 1. Dies ist ein berühmter fundamentaler Grenzwert in der Analysis. Er wird mit dem Einschließungssatz bewiesen.',
      },
      {
        question: 'Die Ableitung von f(x) = e^x ist:',
        options: ['e^(x-1)', 'x·e^(x-1)', 'e^x', 'ln(x)'],
        explanation:
          "f'(x) = e^x. Die natürliche Exponentialfunktion ist die einzige Funktion, die gleich ihrer eigenen Ableitung ist.",
      },
      {
        question: 'Die Stammfunktion von f(x) = 2x ist:',
        options: ['2', 'x²', 'x² + C', '2x² + C'],
        explanation:
          '∫2x dx = x² + C. Regel: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. Also ∫2x dx = 2·x²/2 + C = x² + C.',
      },
      {
        question: 'Die Ableitung von f(x) = ln(x) ist:',
        options: ['1/x', 'x', 'e^x', 'log(x)'],
        explanation:
          "f'(x) = 1/x. Dies ist die Ableitung des natürlichen Logarithmus. Gilt für x > 0.",
      },
      {
        question: 'Lim(x→∞) 1/x = ?',
        options: ['1', '∞', '0', '-1'],
        explanation:
          'lim(x→∞) 1/x = 0. Während x wächst, nähert sich 1/x dem Wert 0, erreicht ihn aber nie.',
      },
      {
        question: "Kettenregel: Wenn y = f(g(x)), dann ist y' = ?",
        options: [
          "f'(x)·g'(x)",
          "f'(g(x))·g'(x)",
          "f(g'(x))",
          "f'(x)+g'(x)",
        ],
        explanation:
          "y' = f'(g(x))·g'(x). Wir leiten die äußere Funktion ab und behalten die innere bei, dann multiplizieren wir mit der inneren Ableitung.",
      },
      {
        question: 'Die Ableitung von f(x) = x² + 3x - 5 an der Stelle x=2 ist:',
        options: ['4', '6', '7', '11'],
        explanation:
          "f'(x) = 2x + 3. f'(2) = 2(2) + 3 = 7. Wir leiten jeden Term einzeln ab.",
      },
      {
        question: '∫₀¹ x² dx = ?',
        options: ['1/4', '1/3', '1/2', '1'],
        explanation:
          '∫₀¹ x² dx = [x³/3]₀¹ = 1/3 - 0 = 1/3. Die Stammfunktion von x² ist x³/3, dann werten wir an den Grenzen aus.',
      },
    ],
  },

  // ===== STATISTIK =====
  'stat-easy': {
    title: 'Grundlegende Statistik',
    category: 'Statistik',
    duration: '6 min',
    questions: [
      {
        question: 'Der Mittelwert von: 2, 4, 6, 8 ist:',
        options: ['4', '5', '6', '20'],
        explanation:
          'Mittelwert = (2+4+6+8)/4 = 20/4 = 5. Wir addieren alle Werte und teilen durch die Anzahl.',
      },
      {
        question: 'Der Median von: 1, 3, 5, 7, 9 ist:',
        options: ['3', '5', '7', '9'],
        explanation:
          'Median = 5 (der mittlere Wert). Wir haben 5 Werte, der dritte ist der mittlere.',
      },
      {
        question: 'Der Modus von: 1, 2, 2, 3, 4 ist:',
        options: ['1', '2', '3', '4'],
        explanation:
          'Modus = 2 (der am häufigsten vorkommende Wert). 2 kommt zweimal vor.',
      },
      {
        question: 'Die Wahrscheinlichkeit, eine 1 mit einem Würfel zu werfen:',
        options: ['1/2', '1/4', '1/6', '1/8'],
        explanation:
          'P(1) = 1/6. Der Würfel hat 6 Seiten, jede Seite hat die Wahrscheinlichkeit 1/6.',
      },
      {
        question: 'Der Mittelwert von: 10, 20, 30 ist:',
        options: ['15', '20', '25', '60'],
        explanation: 'Mittelwert = (10+20+30)/3 = 60/3 = 20.',
      },
      {
        question: 'Wie viele mögliche Ergebnisse hat der Wurf einer Münze?',
        options: ['1', '2', '3', '4'],
        explanation: 'Die Münze hat 2 Ergebnisse: Kopf oder Zahl.',
      },
      {
        question: 'Die Spannweite (Range) von: 5, 10, 15, 20:',
        options: ['5', '10', '15', '20'],
        explanation:
          'Spannweite = Maximum - Minimum = 20 - 5 = 15.',
      },
      {
        question: 'Der Median von: 2, 4, 6, 8 (gerade Anzahl von Werten):',
        options: ['4', '5', '6', '8'],
        explanation:
          'Median = (4+6)/2 = 5. Bei einer geraden Anzahl von Werten nehmen wir den Durchschnitt der beiden mittleren.',
      },
      {
        question: 'Die Wahrscheinlichkeit, dass etwas niemals eintritt:',
        options: ['0', '0,5', '1', '∞'],
        explanation:
          'P(unmöglich) = 0. Die Wahrscheinlichkeit 0 bedeutet, es tritt nie ein.',
      },
      {
        question: 'Die Wahrscheinlichkeit, dass etwas immer eintritt:',
        options: ['0', '0,5', '1', '∞'],
        explanation:
          'P(sicher) = 1. Die Wahrscheinlichkeit 1 bedeutet, es tritt immer ein.',
      },
    ],
  },

  'stat-medium': {
    title: 'Statistik & Wahrscheinlichkeit',
    category: 'Statistik',
    duration: '8 min',
    questions: [
      {
        question: 'Der Mittelwert der Reihe: 4, 7, 2, 9, 3 ist:',
        options: ['4', '5', '6', '7'],
        explanation:
          'Mittelwert = (4+7+2+9+3)/5 = 25/5 = 5. Wir addieren alle Werte und teilen durch ihre Anzahl.',
      },
      {
        question: 'Der Median von: 3, 5, 7, 9, 11 ist:',
        options: ['5', '7', '9', '6'],
        explanation:
          'Median = 7 (der mittlere Wert, wenn die Daten sortiert sind). Wir haben 5 Werte, der mittlere ist der dritte.',
      },
      {
        question: 'Wie groß ist die Wahrscheinlichkeit, Kopf bei einem Münzwurf zu werfen?',
        options: ['1/4', '1/3', '1/2', '2/3'],
        explanation:
          'P(Kopf) = 1/2. Die Münze hat 2 mögliche Ergebnisse: Kopf oder Zahl. P = günstige Ergebnisse/alle Ergebnisse.',
      },
      {
        question: 'Der Modus der Reihe: 2, 3, 3, 5, 7, 3, 8 ist:',
        options: ['2', '3', '5', '8'],
        explanation:
          'Modus = 3, da er 3-mal vorkommt (am häufigsten). Der Modus ist der Wert, der sich am meisten wiederholt.',
      },
      {
        question:
          'Die Wahrscheinlichkeit, eine 6 mit einem normalen Würfel zu werfen:',
        options: ['1/3', '1/4', '1/5', '1/6'],
        explanation:
          'P(6) = 1/6. Der Würfel hat 6 Seiten (1-6), jede Seite hat die Wahrscheinlichkeit 1/6.',
      },
      {
        question: 'Die Standardabweichung misst:',
        options: [
          'Den Mittelwert',
          'Die Streuung der Daten',
          'Die Gesamtsumme',
          'Den Median',
        ],
        explanation:
          'Die Standardabweichung misst, wie weit die Werte vom Mittelwert entfernt sind. Hohe Abweichung = stark gestreute Daten.',
      },
      {
        question: 'Wenn P(A) = 0,3, dann ist P(A̅):',
        options: ['0,3', '0,5', '0,7', '1,3'],
        explanation:
          'P(A̅) = 1 - P(A) = 1 - 0,3 = 0,7. Wahrscheinlichkeit des Komplementereignisses: Die Ereignisse A und A̅ ergänzen sich.',
      },
      {
        question: 'Ein Histogramm zeigt:',
        options: [
          'Die Beziehung zwischen zwei Variablen',
          'Die Verteilung der Daten',
          'Den Trend über die Zeit',
          'Proportionen',
        ],
        explanation:
          'Das Histogramm zeigt die Häufigkeitsverteilung der Daten. Jeder Balken stellt die Häufigkeit des Intervalls dar.',
      },
      {
        question:
          'P(A ∪ B) = P(A) + P(B) - ? (wenn nicht gegenseitig ausschließend)',
        options: ['P(A)', 'P(B)', 'P(A ∩ B)', 'P(A) × P(B)'],
        explanation:
          'P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Wir subtrahieren P(A∩B), da wir es doppelt gezählt haben.',
      },
      {
        question: 'Das Verhältnis der Varianz zur Standardabweichung:',
        options: ['σ', 'σ²', '√σ', '1/σ'],
        explanation:
          'Varianz = σ² (Quadrat der Standardabweichung). Standardabweichung = σ = √Varianz.',
      },
    ],
  },

  'stat-hard': {
    title: 'Fortgeschrittene Statistik',
    category: 'Statistik',
    duration: '12 min',
    questions: [
      {
        question: 'Die Varianz der Reihe: 2, 4, 6 ist:',
        options: ['2', '4', '8/3', '16/3'],
        explanation:
          'Mittelwert = 4. Varianz = [(2-4)²+(4-4)²+(6-4)²]/3 = [4+0+4]/3 = 8/3.',
      },
      {
        question: 'Die Standardabweichung bei einer Varianz von 25:',
        options: ['5', '12,5', '25', '625'],
        explanation:
          'σ = √Varianz = √25 = 5. Die Standardabweichung ist die Quadratwurzel der Varianz.',
      },
      {
        question: 'Der Korrelationskoeffizient r = 1 bedeutet:',
        options: [
          'Kein Zusammenhang',
          'Starker negativer Zusammenhang',
          'Perfekter positiver Zusammenhang',
          'Schwacher Zusammenhang',
        ],
        explanation:
          'r = 1: perfekte positive Korrelation. r = -1: negativ. r = 0: keine Korrelation.',
      },
      {
        question: 'Die Standardnormalverteilung hat μ = ? und σ = ?:',
        options: ['μ=0, σ=1', 'μ=1, σ=0', 'μ=1, σ=1', 'μ=0, σ=0'],
        explanation:
          'Standard-Z-Verteilung: Mittelwert μ = 0, Standardabweichung σ = 1.',
      },
      {
        question:
          'Wenn P(A∩B) = 0,2, P(A) = 0,5, P(B) = 0,4, dann sind A und B:',
        options: [
          'Unabhängig',
          'Gegenseitig ausschließend',
          'Abhängig',
          'Komplementär',
        ],
        explanation:
          'P(A)·P(B) = 0,5×0,4 = 0,2 = P(A∩B). Wenn P(A∩B)=P(A)P(B), sind sie unabhängig. Hier muss genauer geprüft werden – tatsächlich SIND sie unabhängig, da 0,2 = 0,2.',
      },
      {
        question: 'Der Z-Wert zeigt an:',
        options: [
          'Den Mittelwert',
          'Wie viele Standardabweichungen vom Mittelwert entfernt',
          'Die Wahrscheinlichkeit',
          'Die Varianz',
        ],
        explanation:
          'Z = (x - μ)/σ zeigt an, wie viele Standardabweichungen x vom Mittelwert entfernt ist.',
      },
      {
        question: 'Die 68-95-99,7-Regel gilt für:',
        options: [
          'Jede Verteilung',
          'Nur die Binomialverteilung',
          'Die Normalverteilung',
          'Die Gleichverteilung',
        ],
        explanation:
          'Die 68-95-99,7-Regel: Bei der Normalverteilung liegen 68% innerhalb von 1σ, 95% innerhalb von 2σ, 99,7% innerhalb von 3σ.',
      },
      {
        question:
          'Der Zentrale Grenzwertsatz besagt, dass der Mittelwert der Stichproben:',
        options: [
          'Immer normalverteilt ist',
          'Sich der Normalverteilung annähert',
          'Gleichverteilt ist',
          'Sich nicht ändert',
        ],
        explanation:
          'ZGS: Bei großem n nähert sich die Verteilung der Stichprobenmittelwerte der Normalverteilung an, unabhängig von der Originalverteilung.',
      },
      {
        question: 'Das 95%-Konfidenzintervall bedeutet:',
        options: [
          '95% der Daten liegen im Intervall',
          '95% Sicherheit, dass der Parameter im Intervall liegt',
          'Die Wahrscheinlichkeit ist 0,95',
          'Der Fehler beträgt 5%',
        ],
        explanation:
          '95%-Konfidenzintervall: Wir sind zu 95% sicher, dass der Populationsparameter innerhalb dieses Intervalls liegt.',
      },
      {
        question: 'Die Nullhypothese (H₀) besagt normalerweise, dass:',
        options: [
          'Es einen Unterschied gibt',
          'Es keinen Unterschied/Effekt gibt',
          'Es eine Korrelation gibt',
          'Die Daten normalverteilt sind',
        ],
        explanation:
          'H₀: Kein Effekt oder Unterschied. H₁: Es gibt einen Effekt. Wir testen, um H₀ abzulehnen.',
      },
    ],
  },

  // ===== LINEARE ALGEBRA =====
  'linalg-easy': {
    title: 'Grundlegende Vektoren',
    category: 'Lineare Algebra',
    duration: '8 min',
    questions: [
      {
        question: 'Addiere die Vektoren (2,3) + (1,4):',
        options: ['(3,7)', '(2,12)', '(1,1)', '(6,12)'],
        explanation:
          '(2,3) + (1,4) = (2+1, 3+4) = (3,7). Wir addieren die entsprechenden Komponenten.',
      },
      {
        question: 'Die Länge (Betrag) des Vektors (3,4) ist:',
        options: ['5', '7', '12', '25'],
        explanation:
          '||v|| = √(3² + 4²) = √(9 + 16) = √25 = 5. Pythagoras in 2D.',
      },
      {
        question: 'Multipliziere den Vektor (2,5) mit dem Skalar 3:',
        options: ['(5,8)', '(6,15)', '(6,8)', '(2,15)'],
        explanation:
          '3·(2,5) = (3×2, 3×5) = (6,15). Wir multiplizieren jede Komponente mit dem Skalar.',
      },
      {
        question: 'Der Nullvektor in 2D ist:',
        options: ['(1,1)', '(0,0)', '(0,1)', '(1,0)'],
        explanation:
          'Nullvektor: (0,0). Das neutrale Element der Addition.',
      },
      {
        question: 'Das Skalarprodukt von (1,2) · (3,4):',
        options: ['5', '9', '11', '24'],
        explanation:
          '(1,2)·(3,4) = 1×3 + 2×4 = 3 + 8 = 11. Das Skalarprodukt = Summe der Produkte der Komponenten.',
      },
      {
        question: 'Der Gegenvektor von (5,-3):',
        options: ['(-5,3)', '(5,3)', '(-5,-3)', '(3,-5)'],
        explanation:
          'Gegenvektor: Vorzeichen umkehren. -(5,-3) = (-5,3).',
      },
      {
        question: 'Die Vektoren (2,4) und (1,2) sind:',
        options: ['Orthogonal', 'Parallel', 'Senkrecht', 'Unabhängig'],
        explanation:
          '(2,4) = 2·(1,2). Sie sind parallel (einer ist ein Vielfaches des anderen).',
      },
      {
        question: 'Die Länge des Vektors (0,5):',
        options: ['0', '5', '10', '25'],
        explanation: '||(0,5)|| = √(0² + 5²) = √25 = 5.',
      },
      {
        question: 'Die Subtraktion (5,7) - (2,3):',
        options: ['(3,4)', '(7,10)', '(3,10)', '(10,21)'],
        explanation:
          '(5,7) - (2,3) = (5-2, 7-3) = (3,4). Wir subtrahieren die entsprechenden Komponenten.',
      },
      {
        question: 'Die Vektoren (1,0) und (0,1) sind:',
        options: ['Parallel', 'Senkrecht zueinander', 'Gleich', 'Null'],
        explanation:
          '(1,0) und (0,1) sind senkrecht zueinander (orthogonal). Skalarprodukt = 0.',
      },
    ],
  },

  'linalg-medium': {
    title: 'Matrizen & Determinanten',
    category: 'Lineare Algebra',
    duration: '10 min',
    questions: [
      {
        question: 'Die Determinante von [[2,3],[1,4]] ist:',
        options: ['5', '8', '11', '24'],
        explanation:
          'det = 2×4 - 3×1 = 8 - 3 = 5. Für 2×2: ad - bc.',
      },
      {
        question: 'Die Transponierte von [[1,2],[3,4]] ist:',
        options: [
          '[[1,3],[2,4]]',
          '[[4,3],[2,1]]',
          '[[2,1],[4,3]]',
          '[[1,2],[3,4]]',
        ],
        explanation:
          'Transponierte: Zeilen werden zu Spalten. A^T = [[1,3],[2,4]].',
      },
      {
        question: 'Die 2×2-Einheitsmatrix ist:',
        options: [
          '[[0,0],[0,0]]',
          '[[1,1],[1,1]]',
          '[[1,0],[0,1]]',
          '[[1,1],[0,0]]',
        ],
        explanation:
          'I = [[1,0],[0,1]]. Hauptdiagonale = 1, alle anderen = 0.',
      },
      {
        question: 'Wenn det(A) = 0, dann ist die Matrix A:',
        options: ['Invertierbar', 'Singulär', 'Einheitsmatrix', 'Transponierte'],
        explanation:
          'det(A) = 0 → A ist singulär (nicht invertierbar). Eine nicht-invertierbare Matrix.',
      },
      {
        question: 'Die Addition [[1,2],[3,4]] + [[5,6],[7,8]]:',
        options: [
          '[[6,8],[10,12]]',
          '[[5,12],[21,32]]',
          '[[6,8],[9,11]]',
          '[[5,6],[7,8]]',
        ],
        explanation:
          'Addition: entsprechende Elemente addieren. [1+5,2+6],[3+7,4+8] = [[6,8],[10,12]].',
      },
      {
        question: 'Das Produkt von [[1,2],[3,4]] mit dem Skalar 2:',
        options: [
          '[[2,4],[6,8]]',
          '[[3,4],[5,6]]',
          '[[1,2],[3,4]]',
          '[[2,2],[2,2]]',
        ],
        explanation:
          'Skalarmultiplikation: jedes Element × 2 = [[2,4],[6,8]].',
      },
      {
        question: 'Die Ordnung (Dimension) der Matrix [[1,2,3],[4,5,6]]:',
        options: ['2×2', '2×3', '3×2', '3×3'],
        explanation:
          'Ordnung: (Zeilen × Spalten) = 2×3. Sie hat 2 Zeilen und 3 Spalten.',
      },
      {
        question: 'Det([[1,0],[0,1]]) = ?',
        options: ['0', '1', '2', '-1'],
        explanation:
          'det(I) = 1×1 - 0×0 = 1. Die Determinante der Einheitsmatrix ist immer 1.',
      },
      {
        question: 'Die 2×2-Nullmatrix hat alle Elemente:',
        options: ['0', '1', '-1', 'Verschieden'],
        explanation: 'Nullmatrix: [[0,0],[0,0]]. Alle Elemente sind 0.',
      },
      {
        question: 'Die Inverse von [[2,0],[0,3]] ist:',
        options: [
          '[[1/2,0],[0,1/3]]',
          '[[3,0],[0,2]]',
          '[[0,2],[3,0]]',
          '[[1,0],[0,1]]',
        ],
        explanation:
          'Für eine Diagonalmatrix ist die Inverse: jedes Element → 1/Element. A⁻¹ = [[1/2,0],[0,1/3]].',
      },
    ],
  },

  'linalg-hard': {
    title: 'Vektorräume',
    category: 'Lineare Algebra',
    duration: '12 min',
    questions: [
      {
        question: 'Der Rang der Matrix [[1,2],[2,4]] ist:',
        options: ['0', '1', '2', '4'],
        explanation:
          'Rang = 1. Die zweite Zeile = 2× die erste Zeile, also linear abhängig. Nur 1 unabhängige Zeile.',
      },
      {
        question: 'Die Vektoren (1,0), (0,1) bilden:',
        options: [
          'Eine Basis für R²',
          'Abhängige Vektoren',
          'Parallele Vektoren',
          'Einen 3D-Raum',
        ],
        explanation:
          '(1,0), (0,1) sind die Standardbasis für R². Sie sind orthogonal und linear unabhängig.',
      },
      {
        question: 'Die Dimension des Nullraums von [[1,2],[2,4]]:',
        options: ['0', '1', '2', '3'],
        explanation:
          'dim(Nullraum) = n - Rang = 2 - 1 = 1. Rangsatz (Dimensionssatz).',
      },
      {
        question: 'Die Eigenwerte von [[2,0],[0,3]] sind:',
        options: ['0, 0', '1, 1', '2, 3', '5, 6'],
        explanation:
          'Für eine Diagonalmatrix sind die Eigenwerte die Diagonalelemente: λ₁=2, λ₂=3.',
      },
      {
        question: 'Die Spur (Trace) von [[1,2],[3,4]] ist:',
        options: ['3', '4', '5', '10'],
        explanation:
          'Spur = Summe der Hauptdiagonalelemente = 1 + 4 = 5.',
      },
      {
        question:
          'Wenn A eine 3×4-Matrix ist, was ist die maximale Dimension des Spaltenraums?',
        options: ['2', '3', '4', '7'],
        explanation:
          'dim(Spaltenraum) ≤ min(m,n) = min(3,4) = 3. Das Maximum ist 3.',
      },
      {
        question: 'Vektoren sind orthogonal, wenn das Skalarprodukt:',
        options: ['= 0', '= 1', '> 0', '< 0'],
        explanation:
          'u·v = 0 → u und v sind orthogonal (senkrecht zueinander).',
      },
      {
        question: 'Die Norm ||·||₂ des Vektors (3,4,0) ist:',
        options: ['3', '4', '5', '7'],
        explanation:
          '||v||₂ = √(3² + 4² + 0²) = √25 = 5. Euklidische Norm.',
      },
      {
        question: 'Eine symmetrische Matrix erfüllt:',
        options: ['A = -A', 'A = A^T', 'A = A^(-1)', 'A = I'],
        explanation:
          'Symmetrische Matrix: A = A^T. Die Transponierte ist gleich der Originalmatrix.',
      },
      {
        question:
          'Wenn v₁, v₂, v₃ linear unabhängig in R³ sind, was ist die Dimension von span{v₁,v₂,v₃}?',
        options: ['1', '2', '3', '4'],
        explanation:
          'dim(span{v₁,v₂,v₃}) = 3. Drei unabhängige Vektoren in R³ bilden eine Basis.',
      },
    ],
  },

  // ===== ZAHLENTHEORIE =====
  'numth-easy': {
    title: 'Grundlegende Zahlentheorie',
    category: 'Zahlentheorie',
    duration: '8 min',
    questions: [
      {
        question: 'Was ist die kleinste Primzahl?',
        options: ['0', '1', '2', '3'],
        explanation:
          '2 ist die kleinste Primzahl und die einzige gerade Primzahl.',
      },
      {
        question: 'Was ist der GGT(12, 18)?',
        options: ['2', '3', '6', '36'],
        explanation:
          'GGT(12,18) = 6. Primfaktorzerlegung: 12=2²×3, 18=2×3². GGT = 2×3 = 6.',
      },
      {
        question: 'Welche Zahl ist eine gerade ganze Zahl?',
        options: ['5', '7', '8', '9'],
        explanation:
          '8 ist gerade (teilbar durch 2). Gerade Zahlen enden auf 0,2,4,6,8.',
      },
      {
        question: 'Was ist 13 mod 5?',
        options: ['1', '2', '3', '5'],
        explanation:
          '13 mod 5 = 3. 13 = 2×5 + 3. Der Rest bei der Division von 13 durch 5 ist 3.',
      },
      {
        question: 'Welche Zahl ist eine zusammengesetzte Zahl?',
        options: ['2', '3', '4', '5'],
        explanation:
          '4 = 2×2 ist eine zusammengesetzte Zahl. Zusammengesetzte Zahlen haben mehr als 2 Teiler.',
      },
      {
        question: 'Das KGV(4, 6) ist:',
        options: ['2', '6', '12', '24'],
        explanation:
          'KGV(4,6) = 12. Vielfache von 4: 4,8,12,16... Vielfache von 6: 6,12,18... Das kleinste gemeinsame: 12.',
      },
      {
        question: 'Was ist 2⁴?',
        options: ['4', '6', '8', '16'],
        explanation: '2⁴ = 2×2×2×2 = 16.',
      },
      {
        question: 'Welche Zahl ist eine Primzahl?',
        options: ['9', '15', '17', '21'],
        explanation:
          '17 ist eine Primzahl (nur durch 1 und 17 teilbar). 9=3², 15=3×5, 21=3×7.',
      },
      {
        question: '18 ist teilbar durch:',
        options: ['4', '5', '6', '7'],
        explanation:
          '18 ÷ 6 = 3. 18 = 2×3². Teiler: 1,2,3,6,9,18.',
      },
      {
        question: 'Was ist 7 mod 3?',
        options: ['0', '1', '2', '3'],
        explanation:
          '7 mod 3 = 1. 7 = 2×3 + 1. Der Rest ist 1.',
      },
    ],
  },

  'numth-medium': {
    title: 'Kongruenzen & Primfaktorzerlegung',
    category: 'Zahlentheorie',
    duration: '10 min',
    questions: [
      {
        question: 'Was ist 5³ mod 7?',
        options: ['1', '3', '5', '6'],
        explanation:
          '5³ = 125. 125 mod 7: 125 = 17×7 + 6 → 6 mod 7. Aber 5³ mod 7 = (5 mod 7)³ mod 7 = 5³ mod 7 = 125 mod 7 = 6. Die nächstliegende Wahl ist 3 nach Fermat.',
      },
      {
        question:
          'Der kleine Fermatsche Satz: Wenn p eine Primzahl ist, dann ist a^p ≡ ? (mod p)',
        options: ['0', '1', 'a', 'p'],
        explanation:
          'Fermats Satz: a^p ≡ a (mod p), wenn p eine Primzahl ist.',
      },
      {
        question: 'Wie viele Lösungen hat x² ≡ 1 (mod 8)?',
        options: ['0', '2', '4', '8'],
        explanation:
          'x² ≡ 1 (mod 8): x = 1, 3, 5, 7. Insgesamt 4 Lösungen.',
      },
      {
        question: 'Die Eulersche Phi-Funktion φ(10) = ?',
        options: ['2', '4', '5', '10'],
        explanation:
          'φ(10) = 4. Zahlen kleiner als 10, die teilerfremd zu 10 sind: 1,3,7,9.',
      },
      {
        question: 'GGT(a,b) × KGV(a,b) = ?',
        options: ['a + b', 'a - b', 'a × b', 'a / b'],
        explanation: 'Satz: GGT(a,b) × KGV(a,b) = a × b.',
      },
      {
        question: 'Wenn a ≡ b (mod n), dann ist a² ≡ ? (mod n)',
        options: ['a', 'b', 'b²', 'n²'],
        explanation:
          'Wenn a ≡ b (mod n), dann a² ≡ b² (mod n). Kongruenzen bleiben beim Potenzieren erhalten.',
      },
      {
        question: 'Die Primfaktorzerlegung von 60:',
        options: ['2×30', '2²×3×5', '4×15', '6×10'],
        explanation:
          '60 = 2² × 3 × 5. Die vollständige Primfaktorzerlegung.',
      },
      {
        question: 'Wie viele Primzahlen gibt es zwischen 1 und 20?',
        options: ['6', '7', '8', '9'],
        explanation:
          'Die Primzahlen sind: 2, 3, 5, 7, 11, 13, 17, 19. Insgesamt 8.',
      },
      {
        question: 'φ(p), wenn p eine Primzahl ist:',
        options: ['1', 'p', 'p-1', 'p+1'],
        explanation:
          'φ(p) = p - 1 für Primzahlen. Alle Zahlen von 1 bis p-1 sind teilerfremd zu p.',
      },
      {
        question: 'Das modulare Inverse von 3 mod 7:',
        options: ['2', '3', '5', '6'],
        explanation:
          '3 × 5 ≡ 15 ≡ 1 (mod 7). Also ist das Inverse von 3 mod 7 gleich 5.',
      },
    ],
  },
};
