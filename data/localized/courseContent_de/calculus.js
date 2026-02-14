export const courseContents_calculus_de = {

  // calc-001: Grenzwerte und Stetigkeit
  'calc-001': {
    lessons: [
      {
        title: 'Der Begriff des Grenzwerts',
        theory: 'Der Grenzwert von f(x) fuer x → a ist der Wert L, dem sich f(x) annähert, während x sich a nähert. Man schreibt lim(x→a) f(x) = L. Es muss weder f(a) = L gelten noch f(a) existieren.\n\nDie ε-δ-Definition: ∀ε > 0, ∃δ > 0: |x-a| < δ → |f(x)-L| < ε\n\nIntuitive Deutung: Man kann f(x) beliebig nahe an L bringen, indem man x hinreichend nahe an a wählt.',
        keyPoints: [
          'Der Grenzwert kann existieren, auch wenn f(a) nicht existiert',
          'Linksseitiger Grenzwert = rechtsseitiger Grenzwert → der Grenzwert existiert',
          'Grenzwertsätze: Summe, Produkt, Quotient',
          'Einfache Grenzwerte: Setze a direkt ein, wenn f stetig ist',
        ],
        examples: [
          {
            example: 'Bestimme lim(x→2) (x² - 4)/(x - 2)',
            solution: 'Faktorisiere: (x-2)(x+2)/(x-2) = x+2 (für x≠2)\nlim(x→2) = 2+2 = 4',
          },
          {
            example: 'Bestimme lim(x→0) sin(x)/x',
            solution: 'Dies ist ein bekannter Grenzwert: lim(x→0) sin(x)/x = 1',
          },
        ],
        practice: [
          {
            problem: 'Bestimme lim(x→3) (x²-9)/(x-3)',
            solution: '6',
            steps: [
              'Faktorisiere: (x-3)(x+3)/(x-3)',
              '= x+3 (für x≠3)',
              'lim(x→3) = 3+3 = 6',
            ],
          },
        ],
      },
      {
        title: 'Stetigkeit',
        theory: 'Die Funktion f ist stetig an der Stelle a, wenn: 1) f(a) existiert, 2) lim(x→a) f(x) existiert, 3) lim(x→a) f(x) = f(a). Sind alle drei Bedingungen erfüllt, kann der Graph „ohne den Stift abzusetzen" gezeichnet werden.\n\nArten von Unstetigkeitsstellen: hebbare Unstetigkeit (Lücke – kann behoben werden), Sprungstelle (einseitige Grenzwerte unterscheiden sich) und wesentliche Unstetigkeit (Grenzwert existiert nicht).\n\nZwischenwertsatz (ZWS): Ist f stetig auf [a,b] und haben f(a) und f(b) verschiedene Vorzeichen, so gibt es ein x∈(a,b) mit f(x)=0.',
        keyPoints: [
          'Drei Bedingungen der Stetigkeit: f(a) existiert, Grenzwert existiert, beide sind gleich',
          'Polynome sind überall stetig',
          'Rationale Funktionen: stetig überall, wo der Nenner ≠ 0',
          'ZWS: garantiert die Existenz von Nullstellen',
        ],
        examples: [
          {
            example: 'Prüfe, ob f(x) = (x²-1)/(x-1) an der Stelle x=1 stetig ist',
            solution: 'f(1) existiert nicht (0/0). Nicht stetig bei x=1 (hebbare Unstetigkeit).',
          },
        ],
        practice: [
          {
            problem: 'Zeige, dass die Gleichung x³ - x - 1 = 0 mindestens eine reelle Nullstelle besitzt.',
            solution: 'Nach dem ZWS: f(1)=-1<0 und f(2)=5>0 → Nullstelle ∈ (1,2)',
            steps: [
              'f(x) = x³-x-1 ist stetig',
              'f(1) = 1-1-1 = -1 < 0',
              'f(2) = 8-2-1 = 5 > 0',
              'Vorzeichenwechsel → nach dem ZWS gibt es eine Nullstelle in (1,2)',
            ],
          },
        ],
      },
      {
        title: 'Grenzwerte im Unendlichen und Asymptoten',
        theory: 'lim(x→∞) f(x) = L bedeutet, dass sich f(x) dem Wert L nähert, während x unbeschränkt wächst. Dies ergibt eine waagerechte Asymptote.\n\nWenn lim(x→a) f(x) = ±∞, dann ist x=a eine senkrechte Asymptote.\n\nNützliche Regel: Für x→∞ bei einem Quotient zweier Polynome sind nur die Terme höchsten Grades maßgebend.',
        keyPoints: [
          'lim f(x) = L → waagerechte Asymptote y=L',
          'lim f(x) = ∞ → senkrechte Asymptote',
          'Der Term höchsten Grades dominiert für x→∞',
          '1/xⁿ → 0 für x→∞ (bei n>0)',
        ],
        examples: [
          {
            example: 'Bestimme lim(x→∞) (3x² + 2)/(5x² - 1)',
            solution: 'Dominierende Terme: 3x²/5x² = 3/5\nlim = 3/5',
          },
        ],
        practice: [
          {
            problem: 'Bestimme lim(x→∞) (2x³ - x)/(x³ + 4)',
            solution: '2',
            steps: [
              'Teile Zähler und Nenner durch x³',
              '= (2 - 1/x²)/(1 + 4/x³)',
              'Für x→∞: 1/x²→0, 4/x³→0',
              'Grenzwert = 2/1 = 2',
            ],
          },
        ],
      },
    ],
  },

  // calc-002: Ableitungen
  'calc-002': {
    lessons: [
      {
        title: 'Der Begriff der Ableitung',
        theory: 'Die Ableitung von f an der Stelle a ist: f\'(a) = lim(h→0) [f(a+h) - f(a)] / h\nSie misst die momentane Änderungsrate bzw. die Steigung der Tangente an der Stelle a.\n\nSchreibweisen: f\'(x), df/dx, Df, ẏ. Jede wird in bestimmten Zusammenhängen bevorzugt.\n\nDie Ableitung als Grenzwert des Differenzenquotienten: Δy/Δx → dy/dx für Δx→0.',
        keyPoints: [
          'f\'(a) = lim [f(a+h)-f(a)]/h für h→0',
          'Ableitung = Steigung der Tangente',
          'Ableitung = momentane Änderungsrate',
          'f\'(x) existiert → f ist differenzierbar und stetig',
        ],
        examples: [
          {
            example: 'Bestimme f\'(x) mithilfe der Definition für f(x) = x²',
            solution: 'f\'(x) = lim [(x+h)²-x²]/h\n= lim [2xh+h²]/h\n= lim(2x+h) = 2x',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Ableitung mithilfe der Definition: f(x) = 3x + 5',
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
        title: 'Ableitungsregeln',
        theory: 'Grundlegende Ableitungsregeln:\n- (c)\'= 0 (Konstante)\n- (xⁿ)\'= nxⁿ⁻¹ (Potenzregel)\n- (f±g)\'= f\'±g\'\n- (fg)\'= f\'g + fg\' (Produktregel)\n- (f/g)\'= (f\'g - fg\')/g² (Quotientenregel)\n- (f∘g)\'= f\'(g)·g\' (Kettenregel)\n\nDiese Regeln ersparen uns die Berechnung mit Grenzwerten bei jeder Ableitung.',
        keyPoints: [
          'Potenzregel: d(xⁿ)/dx = nxⁿ⁻¹',
          'Produktregel: (fg)\' = f\'g + fg\'',
          'Quotientenregel: (f/g)\' = (f\'g - fg\')/g²',
          'Kettenregel: d[f(g(x))]/dx = f\'(g(x))·g\'(x)',
        ],
        examples: [
          {
            example: 'Bestimme die Ableitung von: y = x³ - 5x² + 2x - 7',
            solution: 'y\' = 3x² - 10x + 2',
          },
          {
            example: 'Bestimme d/dx[(x²)(sin x)]',
            solution: '= 2x·sin x + x²·cos x',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Ableitung von: f(x) = (x² + 1)⁴',
            solution: '8x(x²+1)³',
            steps: [
              'Wende die Kettenregel an: f\'(x) = 4(x²+1)³ · (x²+1)\'',
              '(x²+1)\' = 2x',
              'f\'(x) = 4(x²+1)³ · 2x = 8x(x²+1)³',
            ],
          },
        ],
      },
      {
        title: 'Ableitungen trigonometrischer und spezieller Funktionen',
        theory: 'Trigonometrische Ableitungen: (sin x)\' = cos x, (cos x)\' = -sin x, (tan x)\' = sec²x.\nExponentialfunktionen: (eˣ)\' = eˣ, (aˣ)\' = aˣ ln a.\nLogarithmusfunktionen: (ln x)\' = 1/x, (log_a x)\' = 1/(x ln a).\n\nDiese Ableitungen sollte man auswendig kennen, sie lassen sich aber auch aus der Definition und den trigonometrischen Identitäten herleiten.',
        keyPoints: [
          '(sin x)\' = cos x',
          '(cos x)\' = -sin x',
          '(eˣ)\' = eˣ (Ableitung von sich selbst!)',
          '(ln x)\' = 1/x',
        ],
        examples: [
          {
            example: 'Bestimme d/dx[eˣ sin x]',
            solution: '= eˣ sin x + eˣ cos x = eˣ(sin x + cos x)',
          },
          {
            example: 'Bestimme d/dx[ln(x² + 1)]',
            solution: '= 1/(x²+1) · 2x = 2x/(x²+1)',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Ableitung: y = e^(x²)',
            solution: '2xe^(x²)',
            steps: [
              'Wende die Kettenregel an: y\' = e^(x²) · (x²)\'',
              '(x²)\' = 2x',
              'y\' = 2x·e^(x²)',
            ],
          },
        ],
      },
    ],
  },

  // calc-003: Anwendungen der Ableitungen
  'calc-003': {
    lessons: [
      {
        title: 'Extremwerte und der Satz von Fermat',
        theory: 'Kritische Stellen von f sind dort, wo f\'(x) = 0 oder f\'(x) nicht existiert. Lokale Extrema (lokale Minima und Maxima) treten nur an kritischen Stellen auf (Satz von Fermat).\n\nTest mit der ersten Ableitung: Wechselt f\' von + nach -, liegt ein lokales Maximum vor; von - nach +, ein lokales Minimum.\nTest mit der zweiten Ableitung: Ist f\'\'(c) > 0, liegt ein Minimum vor; f\'\'(c) < 0, ein Maximum; f\'\'(c) = 0, keine Aussage möglich.',
        keyPoints: [
          'Kritische Stelle: f\'=0 oder f\' existiert nicht',
          'Globale Extrema: Randwerte + kritische Stellen',
          "Krümmung: f''>0 konkav (nach oben), f''<0 konvex (nach unten)",
          'Wendepunkt: f\'\' wechselt das Vorzeichen',
        ],
        examples: [
          {
            example: 'Bestimme die lokalen Extrema von f(x) = x³ - 3x',
            solution: 'f\'(x) = 3x² - 3 = 0 → x = ±1\nf\'\'(1) = 6 > 0 → Minimum bei (1, -2)\nf\'\'(-1) = -6 < 0 → Maximum bei (-1, 2)',
          },
        ],
        practice: [
          {
            problem: 'Bestimme den größten und kleinsten Wert von f(x) = x² - 4x + 3 auf [0, 3]',
            solution: 'min = -1 bei x=2, max = 3 bei x=0',
            steps: [
              'f\'(x) = 2x-4=0 → x=2 (kritische Stelle)',
              'f(0)=3, f(2)=-1, f(3)=0',
              'Min = -1 (bei x=2)',
              'Max = 3 (bei x=0)',
            ],
          },
        ],
      },
      {
        title: 'Optimierung',
        theory: 'Optimierung ist das Auffinden des größten oder kleinsten Werts einer Funktion. Vorgehensweise: 1) Bestimme die Zielfunktion, 2) Drücke sie mithilfe der Nebenbedingungen durch eine einzige Variable aus, 3) Bestimme die kritischen Stellen, 4) Überprüfe, ob Maximum oder Minimum vorliegt.\n\nDie Anwendungen sind vielfältig: Kostenminimierung, Gewinnmaximierung, Optimierung von Formen, Probleme des kürzesten Weges.',
        keyPoints: [
          'Verknüpfe die Zielfunktion mit den Nebenbedingungen',
          'Drücke alles durch eine Variable aus',
          'Bestimme die kritischen Stellen (Ableitung = 0)',
          'Überprüfe die Art des Extremums (Minimum oder Maximum)',
        ],
        examples: [
          {
            example: 'Bestimme das Rechteck mit dem Umfang 40 m und der größten Fläche.',
            solution: '2(l+b)=40 → l+b=20 → b=20-l\nA = l(20-l) = 20l-l²\nA\' = 20-2l=0 → l=10\nQuadrat 10×10, A=100 m²',
          },
        ],
        practice: [
          {
            problem: 'Welche zwei positiven Zahlen mit der Summe 12 haben das größte Produkt?',
            solution: '6 und 6, Produkt = 36',
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

  // calc-004: Integrale
  'calc-004': {
    lessons: [
      {
        title: 'Stammfunktion und unbestimmtes Integral',
        theory: 'Die Stammfunktion (Aufleitung) von f ist eine Funktion F mit F\' = f. Das unbestimmte Integral: ∫f(x)dx = F(x) + C, wobei C die Integrationskonstante ist.\n\nGrundregeln: ∫xⁿdx = xⁿ⁺¹/(n+1) + C (n≠-1), ∫eˣdx = eˣ + C, ∫(1/x)dx = ln|x| + C, ∫sin x dx = -cos x + C, ∫cos x dx = sin x + C.',
        keyPoints: [
          '∫xⁿdx = xⁿ⁺¹/(n+1) + C',
          '∫eˣdx = eˣ + C',
          '∫(1/x)dx = ln|x| + C',
          'Die Konstante C ist zwingend erforderlich',
        ],
        examples: [
          {
            example: 'Bestimme ∫(3x² - 2x + 5)dx',
            solution: '= x³ - x² + 5x + C',
          },
          {
            example: 'Bestimme ∫(2eˣ + cos x)dx',
            solution: '= 2eˣ + sin x + C',
          },
        ],
        practice: [
          {
            problem: 'Bestimme ∫(x³ + 4x - 1/x)dx',
            solution: 'x⁴/4 + 2x² - ln|x| + C',
            steps: [
              '∫x³dx = x⁴/4',
              '∫4x dx = 2x²',
              '∫(-1/x)dx = -ln|x|',
              'Füge C hinzu',
            ],
          },
        ],
      },
      {
        title: 'Bestimmtes Integral und Flächeninhalt',
        theory: 'Hauptsatz der Differential- und Integralrechnung: ∫ₐᵇ f(x)dx = F(b) - F(a), wobei F\' = f. Dieser Satz verbindet das Integral mit der Ableitung.\n\nGeometrische Deutung: ∫ₐᵇ f(x)dx = Flächeninhalt zwischen dem Graphen von f und der x-Achse (mit Vorzeichen: Fläche unterhalb der Achse = negativ).\n\nFläche zwischen zwei Kurven: A = ∫ₐᵇ |f(x) - g(x)|dx',
        keyPoints: [
          '∫ₐᵇ f(x)dx = F(b) - F(a)',
          'Fläche = Integral (mit Vorzeichen)',
          'Fläche unterhalb der x-Achse: Integral negativ',
          'Zwischen zwei Kurven: ∫(f-g)dx',
        ],
        examples: [
          {
            example: 'Berechne ∫₀² (x² + 1)dx',
            solution: '= [x³/3 + x]₀² = (8/3 + 2) - 0 = 14/3',
          },
        ],
        practice: [
          {
            problem: 'Bestimme den Flächeninhalt unter y = sin x von 0 bis π',
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

  // calc-005: Anwendungen der Integrale
  'calc-005': {
    lessons: [
      {
        title: 'Volumenberechnung durch Integration',
        theory: 'Ein Rotationskörper entsteht durch Rotation der Fläche unter f(x) um die x-Achse oder y-Achse.\n\nScheibenmethode: V = π∫ₐᵇ [f(x)]²dx (Rotation um die x-Achse)\nRingmethode: V = π∫ₐᵇ {[f(x)]² - [g(x)]²}dx\nZylinderschalenmethode: V = 2π∫ₐᵇ x·f(x)dx',
        keyPoints: [
          'Scheibe: V = π∫[f(x)]²dx',
          'Ring: V = π∫{[f]²-[g]²}dx',
          'Zylinderschale: V = 2π∫x·f(x)dx',
          'Achtung: Das Integral allein ergibt nicht das Volumen – der Faktor π ist nötig',
        ],
        examples: [
          {
            example: 'Bestimme das Volumen des Rotationskörpers von y = √x von 0 bis 4 um die x-Achse',
            solution: 'V = π∫₀⁴ (√x)² dx = π∫₀⁴ x dx = π[x²/2]₀⁴ = 8π',
          },
        ],
        practice: [
          {
            problem: 'Bestimme das Volumen der Kugel mit Radius r durch Rotation von y = √(r²-x²)',
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

  // calc-006: Differentialgleichungen
  'calc-006': {
    lessons: [
      {
        title: 'Separierbare Differentialgleichungen',
        theory: 'Differentialgleichung erster Ordnung: dy/dx = f(x, y). Sie heißt separierbar, wenn sie sich in der Form dy/dx = g(x)h(y) schreiben lässt – man trennt die Variablen: dy/h(y) = g(x)dx und integriert dann beide Seiten.\n\nAnwendungen: exponentielles Wachstum (Population), radioaktiver Zerfall, Newtonsche Abkühlung, Probleme mit stetiger Verzinsung.',
        keyPoints: [
          'Form: dy/dx = g(x)·h(y)',
          'Trennung der Variablen: dy/h(y) = g(x)dx',
          'Beide Seiten integrieren',
          'C aus den Anfangsbedingungen bestimmen',
        ],
        examples: [
          {
            example: 'Löse: dy/dx = xy',
            solution: 'dy/y = x dx\nln|y| = x²/2 + C\ny = Ae^(x²/2)',
          },
        ],
        practice: [
          {
            problem: 'Löse: dy/dx = 2x/(y+1) mit der Anfangsbedingung y(0) = 2',
            solution: '(y+1)² = 2x² + 9',
            steps: [
              '(y+1)dy = 2x dx',
              '(y+1)²/2 = x² + C',
              'Anfangsbedingung y(0)=2: (3)²/2 = 0 + C → C = 9/2',
              '(y+1)² = 2x² + 9',
            ],
          },
        ],
      },
    ],
  },

  // calc-007: Mehrdimensionale Analysis
  'calc-007': {
    lessons: [
      {
        title: 'Partielle Ableitungen',
        theory: 'Die Funktion f(x, y) besitzt partielle Ableitungen ∂f/∂x (Ableitung nach x, y wird als Konstante behandelt) und ∂f/∂y (Ableitung nach y, x als Konstante).\n\nDer Gradient ∇f = (∂f/∂x, ∂f/∂y) zeigt in die Richtung des steilsten Anstiegs. Der Betrag |∇f| gibt die Stärke des Anstiegs an.\n\nRichtungsableitung: D_u f = ∇f · u, wobei u der Einheitsrichtungsvektor ist.',
        keyPoints: [
          '∂f/∂x: Behandle y als Konstante',
          '∂f/∂y: Behandle x als Konstante',
          '∇f = (∂f/∂x, ∂f/∂y) = Gradient',
          'Gradient → Richtung des steilsten Anstiegs',
        ],
        examples: [
          {
            example: 'Bestimme die partiellen Ableitungen von f(x,y) = x²y + 3xy²',
            solution: '∂f/∂x = 2xy + 3y²\n∂f/∂y = x² + 6xy',
          },
        ],
        practice: [
          {
            problem: 'Bestimme ∇f an der Stelle (1, 2) für f(x,y) = x²y - y³',
            solution: '∇f = (4, -11)',
            steps: [
              '∂f/∂x = 2xy → an (1,2): 4',
              '∂f/∂y = x² - 3y² → an (1,2): 1-12 = -11',
              '∇f(1,2) = (4, -11)',
            ],
          },
        ],
      },
    ],
  },
};
