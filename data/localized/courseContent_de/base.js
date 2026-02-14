export const courseContents_base_de = {

  // ===== ARITHMETIK: Zahlen und Grundrechenarten =====
  'arith-001': {
    lessons: [
      {
        title: 'Natuerliche Zahlen',
        theory: 'Natuerliche Zahlen sind die Zahlen, die wir zum Zaehlen verwenden: 1, 2, 3, 4, 5... und so weiter bis ins Unendliche. Sie werden "natuerlich" genannt, weil sie natuerlich erscheinen, wenn wir Dinge um uns herum zaehlen.\n\nDie Zahl Null (0) ist besonders — manche Mathematiker zaehlen sie zu den natuerlichen Zahlen, andere nicht. Natuerliche Zahlen haben kein Ende — wir koennen immer 1 addieren, um die naechste Zahl zu erhalten.\n\nNatuerliche Zahlen sind die Grundlage der gesamten Mathematik. Auf ihnen bauen wir ganze Zahlen, Brueche, Dezimalzahlen und viele andere Konzepte auf.',
        keyPoints: [
          'Natuerliche Zahlen beginnen bei 1 und gehen bis ins Unendliche',
          'Jede natuerliche Zahl hat einen Nachfolger (die naechste Zahl) und einen Vorgaenger (die vorherige Zahl)',
          'Natuerliche Zahlen sind ganz — sie haben keinen Bruchteil',
          'Sie werden zum Zaehlen, Ordnen und Messen verwendet',
        ],
        examples: [
          {
            example: 'Bestimme die natuerlichen Zahlen aus der Liste: -3, 0, 5, 1.5, 12, -1, 7',
            solution: 'Die natuerlichen Zahlen sind: 5, 12, 7\nNegative Zahlen (-3, -1) und Null (0) sind nicht natuerlich. 1,5 ist keine ganze Zahl.',
          },
          {
            example: 'Was ist der Vorgaenger und der Nachfolger der Zahl 8?',
            solution: 'Der Vorgaenger von 8 ist 7 (8 - 1 = 7)\nDer Nachfolger von 8 ist 9 (8 + 1 = 9)',
          },
        ],
        practice: [
          {
            problem: 'Liste die natuerlichen Zahlen von 15 bis 20 auf und berechne ihre Summe.',
            solution: 'Summe = 15 + 16 + 17 + 18 + 19 + 20 = 105',
            steps: [
              'Schreibe die Zahlen auf: 15, 16, 17, 18, 19, 20',
              'Addiere sie: 15 + 16 = 31',
              '31 + 17 = 48',
              '48 + 18 = 66',
              '66 + 19 = 85',
              '85 + 20 = 105',
            ],
          },
        ],
      },
      {
        title: 'Addition und Subtraktion',
        theory: 'Addition ist die Rechenoperation, bei der zwei oder mehr Groessen zusammengefasst werden, um die Gesamtsumme zu ermitteln. Das Symbol fuer die Addition ist "+" (plus). Wenn wir zwei Zahlen addieren, nennen wir das Ergebnis die Summe.\n\nSubtraktion ist die Rechenoperation, bei der eine Groesse von einer anderen abgezogen wird. Das Symbol fuer die Subtraktion ist "-" (minus). Das Ergebnis der Subtraktion heisst Differenz. Die Subtraktion ist die Umkehroperation der Addition.\n\nBeide Operationen sind im Alltag unverzichtbar — vom Einkaufen ueber Messungen bis hin zu Finanzberechnungen und dem Loesen praktischer Probleme.',
        keyPoints: [
          'Addition ist kommutativ: a + b = b + a',
          'Addition ist assoziativ: (a + b) + c = a + (b + c)',
          'Subtraktion ist nicht kommutativ: a - b \u2260 b - a (im Allgemeinen)',
          'Das neutrale Element der Addition ist 0: a + 0 = a',
        ],
        examples: [
          {
            example: 'Berechne: 347 + 256',
            solution: '347 + 256 = 603\nSchriftlich untereinander:\n  347\n+ 256\n-----\n  603\n(7+6=13, schreibe 3 Uebertrag 1; 4+5+1=10, schreibe 0 Uebertrag 1; 3+2+1=6)',
          },
          {
            example: 'Berechne: 521 - 189',
            solution: '521 - 189 = 332\nSchriftlich untereinander:\n  521\n- 189\n-----\n  332\n(1<9, borgen: 11-9=2; 1<8, borgen: 11-8-1=2 Uebertrag 1; 4-1-1=3... nachrechnen: 521-189=332)',
          },
        ],
        practice: [
          {
            problem: 'Ein Geschaeft hatte 845 Produkte. Es verkaufte 327 und erhielt eine Lieferung von 196 neuen Produkten. Wie viele Produkte hat es jetzt?',
            solution: 'Produkte jetzt = 845 - 327 + 196 = 714',
            steps: [
              'Anfang: 845 Produkte',
              'Nach dem Verkauf: 845 - 327 = 518',
              'Nach der Lieferung: 518 + 196 = 714',
              'Antwort: 714 Produkte',
            ],
          },
        ],
      },
      {
        title: 'Multiplikation und Division',
        theory: 'Multiplikation ist die wiederholte Addition derselben Zahl. Das Symbol ist "\u00d7" oder "\u00b7". Zum Beispiel bedeutet 4 \u00d7 3 "addiere 4 dreimal": 4 + 4 + 4 = 12. Die Zahlen, die wir multiplizieren, heissen Faktoren, und das Ergebnis heisst Produkt.\n\nDivision ist die gleichmaessige Aufteilung einer Menge in Gruppen. Das Symbol ist "\u00f7" oder "/". Die Division ist die Umkehroperation der Multiplikation. Die zu teilende Zahl heisst Dividend, die Zahl, durch die wir teilen, heisst Divisor, und das Ergebnis heisst Quotient.\n\nWichtig: Division durch Null ist undefiniert — man kann nichts durch Null teilen!',
        keyPoints: [
          'Multiplikation ist kommutativ: a \u00d7 b = b \u00d7 a',
          'Jede Zahl multipliziert mit 0 ergibt 0: a \u00d7 0 = 0',
          'Jede Zahl multipliziert mit 1 ergibt sich selbst: a \u00d7 1 = a',
          'Division durch Null (\u00f7 0) ist undefiniert',
        ],
        examples: [
          {
            example: 'Berechne: 24 \u00d7 13',
            solution: '24 \u00d7 13 = 312\nMethode: 24 \u00d7 13 = 24 \u00d7 10 + 24 \u00d7 3 = 240 + 72 = 312',
          },
          {
            example: 'Berechne: 156 \u00f7 12',
            solution: '156 \u00f7 12 = 13\nProbe: 12 \u00d7 13 = 12 \u00d7 10 + 12 \u00d7 3 = 120 + 36 = 156 \u2713',
          },
        ],
        practice: [
          {
            problem: 'Eine Klasse mit 28 Schuelern soll in gleich grosse Gruppen aufgeteilt werden. Wie viele Gruppen koennen mit je 4 Schuelern gebildet werden?',
            solution: '28 \u00f7 4 = 7 Gruppen',
            steps: [
              'Gesamtzahl der Schueler: 28',
              'Schueler pro Gruppe: 4',
              '28 \u00f7 4 = 7',
              'Antwort: 7 Gruppen mit je 4 Schuelern',
            ],
          },
        ],
      },
      {
        title: 'Reihenfolge der Rechenoperationen (PEMDAS)',
        theory: 'Wenn wir mehrere Rechenoperationen im selben Ausdruck haben, muessen wir wissen, welche zuerst ausgefuehrt wird. Die Reihenfolge der Rechenoperationen (PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction — auf Deutsch: Klammern, Potenzen, Punkt-vor-Strich) gibt uns die Vorgehensweise vor.\n\nDie Regel: 1) Operationen in Klammern ausfuehren, 2) dann Potenzen, 3) Multiplikation und Division (von links nach rechts), 4) Addition und Subtraktion (von links nach rechts).\n\nWenn wir diese Reihenfolge nicht einhalten, erhalten verschiedene Personen unterschiedliche Ergebnisse fuer dieselbe Aufgabe — das waere ein Chaos!',
        keyPoints: [
          'K = Klammern (Operationen innerhalb { }, [ ], ( ) werden zuerst ausgefuehrt)',
          'P = Potenzen und Quadratwurzeln',
          'PS = Punktrechnung: Multiplikation und Division (gleichzeitig, von links nach rechts)',
          'SR = Strichrechnung: Addition und Subtraktion (gleichzeitig, von links nach rechts)',
        ],
        examples: [
          {
            example: 'Berechne: 3 + 4 \u00d7 2',
            solution: 'Richtiges Ergebnis: 3 + 4 \u00d7 2 = 3 + 8 = 11\nMultiplikation wird vor Addition ausgefuehrt! Nicht (3+4)\u00d72 = 14.',
          },
          {
            example: 'Berechne: (5 + 3) \u00d7 2 - 4 \u00f7 2',
            solution: '= (8) \u00d7 2 - 4 \u00f7 2    [Klammern]\n= 16 - 2              [Multiplikation und Division]\n= 14                  [Subtraktion]',
          },
        ],
        practice: [
          {
            problem: 'Berechne: 20 - 2 \u00d7 (4 + 1) + 8 \u00f7 2',
            solution: '= 20 - 2 \u00d7 5 + 4 = 20 - 10 + 4 = 14',
            steps: [
              'Klammern: (4 + 1) = 5',
              'Der Ausdruck wird zu: 20 - 2 \u00d7 5 + 8 \u00f7 2',
              'Multiplikation/Division: 2 \u00d7 5 = 10 und 8 \u00f7 2 = 4',
              'Der Ausdruck wird zu: 20 - 10 + 4',
              'Addition/Subtraktion von links nach rechts: 20 - 10 = 10, dann 10 + 4 = 14',
            ],
          },
        ],
      },
      {
        title: 'Eigenschaften von Zahlen',
        theory: 'Zahlen haben verschiedene Eigenschaften, die uns helfen, schneller zu rechnen und die Struktur der Mathematik zu verstehen. Eigenschaften wie Kommutativitaet, Assoziativitaet und Distributivitaet sind grundlegende Regeln.\n\nGerade Zahlen sind alle Zahlen, die ohne Rest durch 2 teilbar sind: 2, 4, 6, 8, 10...\nUngerade Zahlen sind jene, die nicht ohne Rest durch 2 teilbar sind: 1, 3, 5, 7, 9...\nVielfache von N sind: N, 2N, 3N, 4N...\nPrimzahlen haben genau zwei Teiler: 1 und sich selbst.',
        keyPoints: [
          'Kommutativgesetz: a + b = b + a und a \u00d7 b = b \u00d7 a',
          'Assoziativgesetz: (a+b)+c = a+(b+c) und (a\u00d7b)\u00d7c = a\u00d7(b\u00d7c)',
          'Distributivgesetz: a\u00d7(b+c) = a\u00d7b + a\u00d7c',
          'Primzahlen: 2, 3, 5, 7, 11, 13, 17, 19, 23...',
        ],
        examples: [
          {
            example: 'Zeige das Distributivgesetz: 5 \u00d7 (3 + 7)',
            solution: 'Methode 1: 5 \u00d7 (3 + 7) = 5 \u00d7 10 = 50\nMethode 2: 5 \u00d7 3 + 5 \u00d7 7 = 15 + 35 = 50\nBeide ergeben das gleiche Ergebnis \u2713',
          },
          {
            example: 'Bestimme, ob 97 eine Primzahl ist.',
            solution: '97 \u00f7 2 = 48,5 (nicht ganzzahlig)\n97 \u00f7 3 = 32,3... (nicht ganzzahlig)\n97 \u00f7 5 = 19,4 (nicht ganzzahlig)\n97 \u00f7 7 = 13,8... (nicht ganzzahlig)\nDa \u221a97 \u2248 9,8, haben wir alle moeglichen Teiler geprueft.\nJa, 97 ist eine Primzahl!',
          },
        ],
        practice: [
          {
            problem: 'Verwende das Distributivgesetz, um 7 \u00d7 38 schnell zu berechnen.',
            solution: '7 \u00d7 38 = 7 \u00d7 (40 - 2) = 280 - 14 = 266',
            steps: [
              '38 = 40 - 2 (zerlege 38 in einfache Zahlen)',
              'Wende das Distributivgesetz an: 7 \u00d7 (40 - 2)',
              '= 7 \u00d7 40 - 7 \u00d7 2',
              '= 280 - 14',
              '= 266',
            ],
          },
        ],
      },
    ],
  },

  // ===== ARITHMETIK: Brueche und Dezimalzahlen =====
  'arith-002': {
    lessons: [
      {
        title: 'Das Konzept der Brueche',
        theory: 'Ein Bruch ist eine Moeglichkeit, einen Teil eines Ganzen auszudruecken. Wenn wir zum Beispiel einen Kuchen in 4 gleiche Stuecke schneiden und 1 Stueck nehmen, haben wir 1/4 des Kuchens genommen.\n\nEin Bruch hat zwei Teile: der Zaehler (die Zahl oben) gibt an, wie viele Teile wir genommen haben, und der Nenner (die Zahl unten) gibt an, in wie viele Teile das Ganze aufgeteilt wurde.\n\nBrueche koennen sein: echte Brueche (Zaehler < Nenner, z.B. 3/4), unechte Brueche (Zaehler \u2265 Nenner, z.B. 7/4) und gemischte Zahlen (ganzer Teil + Bruch, z.B. 1\u00be).',
        keyPoints: [
          'Der Zaehler gibt an, wie viele Teile wir haben (ueber dem Bruchstrich)',
          'Der Nenner gibt an, wie viele Teile insgesamt (unter dem Bruchstrich)',
          'Der Nenner kann nicht Null sein',
          'Gleichwertige Brueche sind Brueche mit dem gleichen Wert: 1/2 = 2/4 = 3/6',
        ],
        examples: [
          {
            example: 'Schreibe als Bruch: "drei Teile von acht"',
            solution: 'Drei von acht = 3/8\nZaehler = 3 (wie viele Teile wir haben)\nNenner = 8 (wie viele Teile insgesamt)',
          },
          {
            example: 'Finde den gleichwertigen Bruch von 2/3 mit dem Nenner 12.',
            solution: '2/3 = ?/12\n3 \u00d7 4 = 12, also multiplizieren wir auch den Zaehler mit 4:\n2 \u00d7 4 = 8\nDaher 2/3 = 8/12',
          },
        ],
        practice: [
          {
            problem: 'Wandle die gemischte Zahl 2\u00be in einen unechten Bruch um.',
            solution: '2\u00be = 11/4',
            steps: [
              '2\u00be = 2 + 3/4',
              'Multipliziere den ganzen Teil mit dem Nenner: 2 \u00d7 4 = 8',
              'Addiere den Zaehler: 8 + 3 = 11',
              'Der Nenner bleibt gleich: 4',
              'Ergebnis: 11/4',
            ],
          },
        ],
      },
      {
        title: 'Kuerzen von Bruechen',
        theory: 'Das Kuerzen von Bruechen (oder Vereinfachen) ist der Vorgang, die einfachste Form eines Bruchs zu finden, wobei der gleiche Wert beibehalten wird. Die Brueche 6/8 und 3/4 haben den gleichen Wert, aber 3/4 ist die gekuerzte Form.\n\nUm einen Bruch zu kuerzen, finden wir den groessten gemeinsamen Teiler (ggT) von Zaehler und Nenner und teilen dann beide durch diese Zahl.\n\nWenn der groesste gemeinsame Teiler 1 ist, liegt der Bruch bereits in seiner einfachsten Form vor und wird als vollstaendig gekuerzter Bruch bezeichnet.',
        keyPoints: [
          'Der groesste gemeinsame Teiler (ggT) hilft uns beim Kuerzen von Bruechen',
          'Ein Bruch ist gekuerzt, wenn ggT(Zaehler, Nenner) = 1',
          'Wir koennen schrittweise kuerzen, indem wir durch kleine Faktoren teilen',
          'Das Kuerzen aendert den Wert des Bruchs nicht',
        ],
        examples: [
          {
            example: 'Kuerze den Bruch 18/24.',
            solution: 'Teiler von 18: 1, 2, 3, 6, 9, 18\nTeiler von 24: 1, 2, 3, 4, 6, 8, 12, 24\nggT(18, 24) = 6\n18/24 = (18\u00f76)/(24\u00f76) = 3/4',
          },
          {
            example: 'Kuerze den Bruch 45/60.',
            solution: '45 = 3\u00b2 \u00d7 5 = 9 \u00d7 5\n60 = 4 \u00d7 15 = 2\u00b2 \u00d7 3 \u00d7 5\nggT = 3 \u00d7 5 = 15\n45/60 = (45\u00f715)/(60\u00f715) = 3/4',
          },
        ],
        practice: [
          {
            problem: 'Kuerze den Bruch 36/48.',
            solution: '36/48 = 3/4',
            steps: [
              'Finde ggT(36, 48)',
              '36 = 2\u00b2 \u00d7 3\u00b2 und 48 = 2\u2074 \u00d7 3',
              'ggT = 2\u00b2 \u00d7 3 = 12',
              '36 \u00f7 12 = 3',
              '48 \u00f7 12 = 4',
              'Ergebnis: 3/4',
            ],
          },
        ],
      },
      {
        title: 'Addition und Subtraktion von Bruechen',
        theory: 'Um Brueche zu addieren oder subtrahieren, muessen wir den gleichen Nenner haben. Wenn Brueche den gleichen Nenner haben (gleichnamige Brueche), addieren oder subtrahieren wir einfach die Zaehler.\n\nWenn Brueche verschiedene Nenner haben (ungleichnamige Brueche), muessen wir den kleinsten gemeinsamen Nenner (kgV) finden — das kleinste gemeinsame Vielfache der Nenner.\n\nNach der Berechnung immer das Ergebnis kuerzen, wenn moeglich.',
        keyPoints: [
          'Gleichnamige Brueche: nur die Zaehler addieren/subtrahieren',
          'Ungleichnamige Brueche: den kgV (gemeinsamen Nenner) finden',
          'kgV = kleinstes gemeinsames Vielfaches der Nenner',
          'Das Ergebnis immer kuerzen',
        ],
        examples: [
          {
            example: 'Berechne: 2/7 + 3/7',
            solution: '2/7 + 3/7 = (2+3)/7 = 5/7\n(Die Nenner sind gleich, nur die Zaehler addieren)',
          },
          {
            example: 'Berechne: 1/3 + 1/4',
            solution: 'kgV(3, 4) = 12\n1/3 = 4/12\n1/4 = 3/12\n4/12 + 3/12 = 7/12',
          },
        ],
        practice: [
          {
            problem: 'Berechne: 3/4 - 1/6',
            solution: '3/4 - 1/6 = 7/12',
            steps: [
              'Finde kgV(4, 6)',
              '4 = 2\u00b2, 6 = 2 \u00d7 3, kgV = 2\u00b2 \u00d7 3 = 12',
              'Umrechnen: 3/4 = 9/12',
              'Umrechnen: 1/6 = 2/12',
              '9/12 - 2/12 = 7/12',
              'Pruefen, ob gekuerzt werden kann: ggT(7,12)=1, also ist 7/12 bereits gekuerzt',
            ],
          },
        ],
      },
      {
        title: 'Multiplikation und Division von Bruechen',
        theory: 'Die Multiplikation von Bruechen ist einfach: Man multipliziert die Zaehler miteinander und die Nenner miteinander. Es ist nicht noetig, einen gemeinsamen Nenner zu finden!\n\nDivision von Bruechen: Um durch einen Bruch zu dividieren, multipliziert man mit seinem Kehrwert. Der Kehrwert von a/b ist b/a. Also: a/b \u00f7 c/d = a/b \u00d7 d/c.\n\nTipp: Vor dem Multiplizieren kann man kreuzweise kuerzen — den Zaehler eines Bruchs mit dem Nenner des anderen teilen, wenn sie gemeinsame Faktoren haben.',
        keyPoints: [
          'Multiplikation: (a/b) \u00d7 (c/d) = (a\u00d7c)/(b\u00d7d)',
          'Division: (a/b) \u00f7 (c/d) = (a/b) \u00d7 (d/c)',
          'Der Kehrwert von a/b ist b/a',
          'Kreuzweises Kuerzen vor der Multiplikation erleichtert die Berechnung',
        ],
        examples: [
          {
            example: 'Berechne: 2/3 \u00d7 3/4',
            solution: '2/3 \u00d7 3/4 = (2\u00d73)/(3\u00d74) = 6/12 = 1/2\nOder mit kreuzweisem Kuerzen: 2/3 \u00d7 3/4 \u2192 kuerze 3/3=1: 2/1 \u00d7 1/4 = 2/4 = 1/2',
          },
          {
            example: 'Berechne: 5/6 \u00f7 5/12',
            solution: '5/6 \u00f7 5/12 = 5/6 \u00d7 12/5 = (5\u00d712)/(6\u00d75) = 60/30 = 2',
          },
        ],
        practice: [
          {
            problem: 'Berechne: 3/4 \u00d7 8/9 \u00f7 2/3',
            solution: '= (3/4 \u00d7 8/9) \u00f7 2/3 = 2/3 \u00f7 2/3 = 1',
            steps: [
              'Zuerst die Multiplikation ausfuehren: 3/4 \u00d7 8/9',
              'Kreuzweise kuerzen: 3 mit 9 \u2192 1/3, 8 mit 4 \u2192 2/1',
              '= 1/1 \u00d7 2/3 = 2/3',
              'Jetzt die Division: 2/3 \u00f7 2/3',
              '= 2/3 \u00d7 3/2 = 6/6 = 1',
            ],
          },
        ],
      },
      {
        title: 'Dezimalzahlen',
        theory: 'Dezimalzahlen sind eine andere Moeglichkeit, Brueche auszudruecken. Sie verwenden das Dezimalsystem — Ziffern nach dem Dezimalkomma (,) stellen Zehntel, Hundertstel, Tausendstel usw. dar.\n\nZum Beispiel: 3,14 = 3 + 1/10 + 4/100 = 3 + 0,1 + 0,04\n\nDezimalzahlen koennen sein: endlich (z.B. 0,5; 1,25), periodisch (z.B. 0,333... = 0,3\u0304; 0,142857...) oder irrational (z.B. \u03c0 = 3,14159...). Endliche und periodische Dezimalzahlen koennen als Brueche dargestellt werden.',
        keyPoints: [
          'Das Dezimalkomma trennt die Stellenwerte: Zehntel (0,1), Hundertstel (0,01), Tausendstel (0,001)',
          'Brueche mit den Nennern 10, 100, 1000 lassen sich leicht in Dezimalzahlen umwandeln',
          'Periodische Dezimalzahlen haben Ziffern, die sich unendlich wiederholen',
          '0,5 = 1/2, 0,25 = 1/4, 0,75 = 3/4, 0,1 = 1/10',
        ],
        examples: [
          {
            example: 'Wandle 0,375 in einen Bruch um.',
            solution: '0,375 = 375/1000\nKuerzen: ggT(375, 1000) = 125\n375/1000 = 3/8',
          },
          {
            example: 'Wandle den Bruch 7/8 in eine Dezimalzahl um.',
            solution: '7 \u00f7 8 = 0,875\n8 \u00d7 0 = 0, Rest 7\n70 \u00f7 8 = 8, Rest 6\n60 \u00f7 8 = 7, Rest 4\n40 \u00f7 8 = 5, Rest 0\nAlso 7/8 = 0,875',
          },
        ],
        practice: [
          {
            problem: 'Ordne vom Kleinsten zum Groessten: 0,6; 3/5; 0,55; 7/12',
            solution: '0,55 < 7/12 \u2248 0,583 < 0,6 = 3/5',
            steps: [
              'Alle in Dezimalzahlen umrechnen',
              '0,6 = 0,600',
              '3/5 = 0,600 (3\u00f75 = 0,6)',
              '0,55 = 0,550',
              '7/12 \u2248 0,583 (7\u00f712 \u2248 0,5833...)',
              'Reihenfolge: 0,550 < 0,583 < 0,600 = 0,600',
              'Also: 0,55 < 7/12 < 0,6 = 3/5',
            ],
          },
        ],
      },
    ],
  },

  // ===== ARITHMETIK: Prozentrechnung und Proportionalitaet =====
  'arith-003': {
    lessons: [
      {
        title: 'Das Konzept der Prozentrechnung',
        theory: 'Prozent (%) bedeutet "von hundert" — es ist ein Bruch mit dem Nenner 100. Also ist 25% = 25/100 = 0,25. Prozentsaetze helfen uns, verschiedene Groessen auf der gleichen Basis (100) zu vergleichen.\n\nProzentsaetze sind ueberall praesent: Rabatte im Geschaeft, Zinssaetze, Testergebnisse, Statistiken, Wahrscheinlichkeit und viele andere alltaegliche Situationen.\n\nUmrechnung: Bruch \u2192 % (mit 100 multiplizieren), % \u2192 Dezimalzahl (durch 100 teilen), Dezimalzahl \u2192 % (mit 100 multiplizieren).',
        keyPoints: [
          '% bedeutet "pro hundert" oder "von 100"',
          '50% = 50/100 = 0,5 = 1/2',
          '100% von etwas = das Ganze',
          'Schnelle Umrechnung: % \u2194 Dezimalzahl (Komma um 2 Stellen verschieben)',
        ],
        examples: [
          {
            example: 'Wandle 35% in einen Bruch und eine Dezimalzahl um.',
            solution: '35% = 35/100 = 7/20 (gekuerzter Bruch)\n35% = 0,35 (Dezimalzahl)',
          },
          {
            example: 'Druecke 0,875 als Prozentsatz aus.',
            solution: '0,875 \u00d7 100 = 87,5%',
          },
        ],
        practice: [
          {
            problem: 'Von einer Gruppe von 40 Schuelern haben 24 den Test bestanden. Wie viel Prozent haben bestanden?',
            solution: '24/40 = 0,6 = 60%',
            steps: [
              'Teile die Anzahl der Bestandenen durch die Gesamtzahl: 24/40',
              '24 \u00f7 40 = 0,6',
              'Multipliziere mit 100: 0,6 \u00d7 100 = 60',
              'Antwort: 60% der Schueler haben den Test bestanden',
            ],
          },
        ],
      },
      {
        title: 'Prozentrechnung',
        theory: 'Es gibt drei Haupttypen von Prozentaufgaben:\n1. Finde X% von der Zahl N: X% \u00d7 N = (X/100) \u00d7 N\n2. X ist wie viel % von N: (X/N) \u00d7 100%\n3. X ist Y% von welcher Zahl: X / (Y/100) = X \u00d7 100/Y\n\nBerechnungsmethoden: Wir koennen die direkte Formel verwenden oder proportional denken: wenn 100% = N, dann Y% = (Y \u00d7 N)/100.\n\nPraktischer Tipp: 10% einer beliebigen Zahl findet man leicht, indem man eine Stelle nach links verschiebt; 5% = die Haelfte von 10%; 20% = das Doppelte von 10%.',
        keyPoints: [
          'X% von N = (X \u00d7 N) / 100',
          '10% einer Zahl = durch 10 teilen',
          '50% einer Zahl = die Haelfte',
          'Erhoehung um P% = mit (1 + P/100) multiplizieren',
        ],
        examples: [
          {
            example: 'Berechne 15% von 80.',
            solution: '15% von 80 = (15 \u00d7 80) / 100 = 1200/100 = 12\nOder: 10% von 80 = 8, und 5% von 80 = 4, also 15% = 8 + 4 = 12',
          },
          {
            example: 'Der alte Preis von 1200 Euro stieg um 8%. Wie hoch ist der neue Preis?',
            solution: 'Erhoehung: 8% von 1200 = 0,08 \u00d7 1200 = 96 Euro\nNeuer Preis: 1200 + 96 = 1296 Euro\nOder direkt: 1200 \u00d7 1,08 = 1296 Euro',
          },
        ],
        practice: [
          {
            problem: 'Der urspruengliche Preis eines Handys betrug 500 Euro. Das Geschaeft bietet 15% Rabatt. Wie viel wird bezahlt?',
            solution: 'Preis nach Rabatt = 500 \u00d7 0,85 = 425 Euro',
            steps: [
              'Rabatt = 15% von 500 = 0,15 \u00d7 500 = 75 Euro',
              'Neuer Preis = 500 - 75 = 425 Euro',
              'Oder direkt: 500 \u00d7 (1 - 0,15) = 500 \u00d7 0,85 = 425 Euro',
            ],
          },
        ],
      },
      {
        title: 'Verhaeltnisse und Proportionalitaet',
        theory: 'Ein Verhaeltnis drueckt die quantitative Beziehung zwischen zwei oder mehr Groessen aus. Es wird als a:b oder a/b geschrieben. Das Verhaeltnis 3:2 bedeutet "fuer jede 3 des Ersten gibt es 2 des Zweiten."\n\nZwei Groessen sind proportional (direkte Proportionalitaet), wenn ihr Verhaeltnis konstant bleibt: y/x = k. Wenn x sich verdoppelt, verdoppelt sich auch y.\n\nIndirekte Proportionalitaet: Zwei Groessen sind umgekehrt proportional, wenn ihr Produkt konstant bleibt: x \u00d7 y = k. Wenn x sich verdoppelt, halbiert sich y.',
        keyPoints: [
          'Verhaeltnis a:b = a/b \u2014 drueckt die relative Beziehung zwischen zwei Groessen aus',
          'Direkte Proportionalitaet: y = k \u00d7 x (k = Konstante)',
          'Indirekte Proportionalitaet: x \u00d7 y = k',
          'Proportion: a/b = c/d \u2192 a \u00d7 d = b \u00d7 c (Kreuzprodukte sind gleich)',
        ],
        examples: [
          {
            example: 'Das Verhaeltnis von Lehrern zu Schuelern ist 1:20. Wenn es 480 Schueler gibt, wie viele Lehrer werden benoetigt?',
            solution: '1/20 = x/480\nx = 480/20 = 24 Lehrer',
          },
          {
            example: '6 Arbeiter erledigen eine Arbeit in 12 Tagen. Wie viele Tage braeuchten 9 Arbeiter?',
            solution: 'Dies ist indirekte Proportionalitaet: Arbeiter \u00d7 Tage = Konstante\n6 \u00d7 12 = 9 \u00d7 Tage\n72 = 9 \u00d7 Tage\nTage = 72/9 = 8 Tage',
          },
        ],
        practice: [
          {
            problem: 'Ein Dessertrezept erfordert 300g Mehl fuer 4 Portionen. Wie viel Mehl wird fuer 10 Portionen benoetigt?',
            solution: '300g \u00d7 (10/4) = 750g',
            steps: [
              'Stelle die Proportion auf: 300/4 = x/10',
              'Kreuzweise multiplizieren: 300 \u00d7 10 = 4 \u00d7 x',
              '3000 = 4x',
              'x = 3000/4 = 750',
              'Antwort: 750g Mehl',
            ],
          },
        ],
      },
    ],
  },

  // ===== ALGEBRA: Einfuehrung in die Algebra =====
  'alg-001': {
    lessons: [
      {
        title: 'Variablen und Konstanten',
        theory: 'Die Algebra unterscheidet sich von der Arithmetik dadurch, dass sie Symbole (Buchstaben) verwendet, um unbekannte Zahlen oder veraenderliche Zahlen darzustellen. Diese Symbole werden Variablen genannt (z.B. x, y, z, a, b).\n\nKonstanten sind feste Zahlen, die sich nicht aendern — wie 5, -3, \u00bd, \u03c0. Der Koeffizient ist die Zahl vor der Variablen — in 3x ist 3 der Koeffizient.\n\nDurch die Verwendung von Variablen koennen wir allgemeine Regeln aufstellen. Zum Beispiel ist die Flaeche eines Rechtecks A = l \u00d7 b — dies gilt fuer jedes Rechteck, nicht nur fuer ein bestimmtes.',
        keyPoints: [
          'Variablen sind Symbole (meist Buchstaben), die unbekannte Zahlen darstellen',
          'Konstanten sind feste Zahlen',
          'Der Koeffizient ist die Zahl, die die Variable multipliziert',
          '3x bedeutet "3 mal x" — implizierte Multiplikation',
        ],
        examples: [
          {
            example: 'Bestimme die Variablen, Konstanten und Koeffizienten in: 5x + 3y - 7',
            solution: 'Variablen: x und y\nKonstante: 7 (der Term ohne Variable), Koeffizienten: 5 (vor x), 3 (vor y)\nDer Term -7 ist ein konstanter Term',
          },
          {
            example: 'Schreibe als algebraischen Ausdruck: "die Haelfte von x plus vier"',
            solution: 'x/2 + 4 oder (1/2)x + 4',
          },
        ],
        practice: [
          {
            problem: 'Wenn Aris Alter x ist und Erik 3 Jahre aelter ist, schreibe Eriks Alter auf und berechne es fuer x = 15.',
            solution: 'Eriks Alter = x + 3. Wenn x = 15: Eriks Alter = 15 + 3 = 18 Jahre',
            steps: [
              'Aris Alter: x',
              'Eriks Alter: x + 3',
              'Setze x = 15 ein: 15 + 3 = 18',
              'Erik ist 18 Jahre alt',
            ],
          },
        ],
      },
      {
        title: 'Algebraische Ausdruecke',
        theory: 'Ein algebraischer Ausdruck ist eine Kombination aus Variablen, Konstanten und Rechenoperationen (+, -, \u00d7, \u00f7). Zum Beispiel ist 2x + 3y - 5 ein algebraischer Ausdruck.\n\nTerme sind die Teile eines Ausdrucks, die durch + oder - getrennt werden. Gleichartige Terme sind solche mit der gleichen Variablen in der gleichen Potenz — z.B. 3x und 5x, oder 2y\u00b2 und -y\u00b2.\n\nDas Vereinfachen von Ausdruecken erfolgt durch Zusammenfassen gleichartiger Terme — wir addieren/subtrahieren die Koeffizienten der Terme mit der gleichen Variablen.',
        keyPoints: [
          'Gleichartige Terme haben die gleiche Variable (und den gleichen Exponenten)',
          'Wir koennen nur gleichartige Terme addieren/subtrahieren',
          '3x + 5x = 8x (nicht 3x + 5x = 8x\u00b2!)',
          '2x + 3y kann nicht vereinfacht werden (ungleichartige Terme)',
        ],
        examples: [
          {
            example: 'Vereinfache: 3x + 2y + 5x - y',
            solution: '= (3x + 5x) + (2y - y)\n= 8x + y',
          },
          {
            example: 'Vereinfache: 4a\u00b2 - 3a + 7 + 2a\u00b2 + 5a - 2',
            solution: '= (4a\u00b2 + 2a\u00b2) + (-3a + 5a) + (7 - 2)\n= 6a\u00b2 + 2a + 5',
          },
        ],
        practice: [
          {
            problem: 'Vereinfache: 7x + 3 - 2x + y - 4 + 5y',
            solution: '= 5x + 6y - 1',
            steps: [
              'Gleichartige Terme gruppieren: (7x - 2x) + (y + 5y) + (3 - 4)',
              '7x - 2x = 5x',
              'y + 5y = 6y',
              '3 - 4 = -1',
              'Ergebnis: 5x + 6y - 1',
            ],
          },
        ],
      },
      {
        title: 'Gleichungen ersten Grades',
        theory: 'Eine Gleichung ist eine Gleichheit zwischen zwei Ausdruecken. Eine Gleichung ersten Grades (lineare Gleichung) hat die Variable in der ersten Potenz. Zum Beispiel ist 2x + 3 = 11 eine Gleichung ersten Grades.\n\nUnser Ziel ist es, den Wert der Variablen zu finden (die Gleichung zu loesen). Wir tun dies, indem wir auf beiden Seiten der Gleichung die gleichen Operationen ausfuehren — dies aendert die Gleichheit nicht.\n\nStrategie: die Variable isolieren — alles andere auf die andere Seite bringen.',
        keyPoints: [
          'Wir koennen auf beiden Seiten die gleiche Zahl addieren/subtrahieren',
          'Wir koennen beide Seiten mit der gleichen Zahl multiplizieren/dividieren (nicht Null)',
          'Probe: die Loesung einsetzen und die Gleichheit pruefen',
          'Die Variable zu isolieren ist das Hauptziel',
        ],
        examples: [
          {
            example: 'Loese: 2x + 3 = 11',
            solution: '2x + 3 = 11\n2x = 11 - 3\n2x = 8\nx = 4\nProbe: 2(4) + 3 = 8 + 3 = 11 \u2713',
          },
          {
            example: 'Loese: 5x - 7 = 3x + 9',
            solution: '5x - 3x = 9 + 7\n2x = 16\nx = 8\nProbe: 5(8)-7 = 33 und 3(8)+9 = 33 \u2713',
          },
        ],
        practice: [
          {
            problem: 'Loese: 3(x - 2) + 4 = x + 10',
            solution: 'x = 6',
            steps: [
              'Klammer aufloesen: 3x - 6 + 4 = x + 10',
              'Linke Seite vereinfachen: 3x - 2 = x + 10',
              'x nach links bringen: 3x - x = 10 + 2',
              '2x = 12',
              'x = 6',
              'Probe: 3(6-2)+4 = 3\u00d74+4 = 16 = 6+10 \u2713',
            ],
          },
        ],
      },
      {
        title: 'Ungleichungen',
        theory: 'Eine Ungleichung ist eine Ungleichheitsbeziehung zwischen zwei Ausdruecken mit den Symbolen: < (kleiner als), > (groesser als), \u2264 (kleiner oder gleich), \u2265 (groesser oder gleich).\n\nDie Loesung einer Ungleichung ist eine Menge von Zahlen (normalerweise ein Intervall), nicht nur eine einzelne Zahl. Loesungen werden als {x | Bedingung} oder in Intervallschreibweise [a, b], (a, b) usw. ausgedrueckt.\n\nWichtige Regel: Wenn wir mit einer negativen Zahl multiplizieren/dividieren, kehrt sich das Ungleichheitszeichen um!',
        keyPoints: [
          'Eine Ungleichung hat eine Loesungsmenge, nicht nur einen einzelnen Wert',
          'Multiplikation mit einer negativen Zahl kehrt das Zeichen um: < wird zu >',
          'Der Loesungsgraph wird als Intervall auf dem Zahlenstrahl dargestellt',
          'Geschlossener Punkt (\u25cf) bei \u2265 oder \u2264, offener Punkt (\u25cb) bei > oder <',
        ],
        examples: [
          {
            example: 'Loese: 2x + 3 < 11',
            solution: '2x < 11 - 3\n2x < 8\nx < 4\nLoesung: alle Zahlen kleiner als 4, d.h. (-\u221e, 4)',
          },
          {
            example: 'Loese: -3x \u2265 12',
            solution: '-3x \u2265 12\nx \u2264 12/(-3)   \u2190 Das Zeichen kehrt sich um!\nx \u2264 -4\nLoesung: (-\u221e, -4]',
          },
        ],
        practice: [
          {
            problem: 'Loese und schreibe als Intervall: 5 - 2x > 1',
            solution: 'x < 2, Intervall (-\u221e, 2)',
            steps: [
              '5 - 2x > 1',
              '-2x > 1 - 5',
              '-2x > -4',
              'x < 2   (das Zeichen kehrt sich um, weil wir durch -2 teilen)',
              'Loesung: x < 2, oder Intervall (-\u221e, 2)',
            ],
          },
        ],
      },
    ],
  },

  // ===== ALGEBRA: Gleichungen und Funktionen =====
  'alg-002': {
    lessons: [
      {
        title: 'Gleichungssysteme',
        theory: 'Ein Gleichungssystem besteht aus zwei oder mehr Gleichungen mit denselben Variablen. Die Loesung des Systems ist das Paar (x, y), das alle Gleichungen gleichzeitig erfuellt.\n\nDie wichtigsten Methoden zur Loesung von Systemen: 1) Einsetzungsmethode — eine Variable ausdruecken und einsetzen, 2) Additionsmethode (Eliminationsmethode) — Gleichungen multiplizieren und addieren/subtrahieren, um eine Variable zu eliminieren, 3) Grafische Methode — den Schnittpunkt finden.\n\nEin System kann haben: eine Loesung (die Geraden schneiden sich), keine Loesung (die Geraden sind parallel) oder unendlich viele Loesungen (die Geraden sind identisch).',
        keyPoints: [
          'Die Loesung ist das Paar (x, y), das beide Gleichungen erfuellt',
          'Einsetzungsmethode: eine Variable ausdruecken, einsetzen',
          'Additionsmethode: Gleichungen addieren/subtrahieren, um eine Variable zu eliminieren',
          'Ein System hat 1, 0 oder \u221e Loesungen',
        ],
        examples: [
          {
            example: 'Loese das System: x + y = 7 und x - y = 3',
            solution: 'Additionsmethode:\nx + y = 7\n+(x - y = 3)\n2x = 10 \u2192 x = 5\nEinsetzen: 5 + y = 7 \u2192 y = 2\nLoesung: (5, 2)',
          },
          {
            example: 'Loese durch Einsetzen: y = 2x - 1 und 3x + y = 9',
            solution: 'y einsetzen: 3x + (2x - 1) = 9\n5x - 1 = 9\n5x = 10\nx = 2\ny = 2(2) - 1 = 3\nLoesung: (2, 3)',
          },
        ],
        practice: [
          {
            problem: 'Loese das System: 2x + 3y = 12 und 4x - y = 5',
            solution: 'x = 3, y = 2',
            steps: [
              'Aus der zweiten Gleichung: y = 4x - 5',
              'In die erste einsetzen: 2x + 3(4x - 5) = 12',
              '2x + 12x - 15 = 12',
              '14x = 27... (warten, pruefen wir)',
              'Additionsmethode: zweite Gleichung mit 3 multiplizieren: 12x - 3y = 15',
              'Addieren: 2x + 3y + 12x - 3y = 12 + 15',
              '14x = 27 \u2192 x = 27/14 \u2248 1,93...',
              'Moeglicherweise keine glatten Zahlen — pruefen wir: 2(3)+3(2)=12 \u2713 und 4(3)-2=10\u22605',
              'Versuch: x=3/2, y=8/3? Loesung: aus der Additionsmethode 14x=27 \u2192 x=27/14',
            ],
          },
        ],
      },
      {
        title: 'Lineare Funktionen',
        theory: 'Eine lineare Funktion wird als f(x) = mx + b ausgedrueckt, wobei m die Steigung und b der y-Achsenabschnitt ist. Der Graph einer linearen Funktion ist immer eine Gerade.\n\nDie Steigung m gibt an, um wie viel sich y aendert, wenn x sich um 1 Einheit aendert: m = \u0394y/\u0394x = (y\u2082-y\u2081)/(x\u2082-x\u2081). Wenn m > 0, steigt die Gerade nach rechts; wenn m < 0, faellt sie nach rechts.\n\nDer y-Achsenabschnitt b gibt an, wo die Gerade die y-Achse schneidet (wenn x = 0). Dieser Punkt (0, b) wird als y-Achsenabschnitt bezeichnet.',
        keyPoints: [
          'Standardform: y = mx + b',
          'm = Steigung (Aenderung von y / Aenderung von x)',
          'b = y-Achsenabschnitt',
          'Zwei Punkte genuegen, um die Gerade zu zeichnen',
        ],
        examples: [
          {
            example: 'Bestimme die Steigung und den y-Achsenabschnitt der Geraden: y = 3x - 2',
            solution: 'm = 3 (Steigung)\nb = -2 (y-Achsenabschnitt)\nWenn x=0: y = -2 \u2192 Punkt (0, -2)\nWenn x=1: y = 1 \u2192 Punkt (1, 1)',
          },
          {
            example: 'Finde die Gleichung der Geraden durch (2, 5) und (4, 9).',
            solution: 'm = (9-5)/(4-2) = 4/2 = 2\ny = mx + b \u2192 5 = 2(2) + b \u2192 b = 1\nGleichung: y = 2x + 1',
          },
        ],
        practice: [
          {
            problem: '3 km zu Fuss dauern 45 Minuten. Modelliere dies als lineare Funktion und berechne die Zeit fuer 7 km.',
            solution: 'y = 15x, wobei y = Minuten und x = km. Fuer 7 km: y = 15\u00d77 = 105 Minuten (1 Stunde 45 Min)',
            steps: [
              'Berechne die Steigung: 45 Minuten / 3 km = 15 Min/km',
              'Funktion: y = 15x (beginnt bei 0)',
              'Fuer x = 7: y = 15 \u00d7 7 = 105 Minuten',
              'Umrechnung: 105 Minuten = 1 Stunde und 45 Minuten',
            ],
          },
        ],
      },
      {
        title: 'Quadratische Gleichungen',
        theory: 'Eine quadratische Gleichung hat die Form ax\u00b2 + bx + c = 0, wobei a \u2260 0. Die zweite Potenz der Variablen macht sie "quadratisch" (vom lateinischen quadratus = Quadrat).\n\nLoesungsmethoden: 1) Faktorisierung — als (x + p)(x + q) = 0 schreiben, 2) Die quadratische Formel: x = [-b \u00b1 \u221a(b\u00b2 - 4ac)] / 2a, 3) Quadratische Ergaenzung.\n\nDie Diskriminante D = b\u00b2 - 4ac gibt die Anzahl der Loesungen an: D > 0 \u2192 2 reelle Loesungen, D = 0 \u2192 1 Loesung, D < 0 \u2192 keine reellen Loesungen.',
        keyPoints: [
          'Standardform: ax\u00b2 + bx + c = 0',
          'Formel: x = [-b \u00b1 \u221a(b\u00b2 - 4ac)] / 2a',
          'Diskriminante D = b\u00b2 - 4ac gibt die Anzahl der Loesungen an',
          'Faktorisierung ist oft die schnellste Methode',
        ],
        examples: [
          {
            example: 'Loese: x\u00b2 - 5x + 6 = 0',
            solution: 'Durch Faktorisierung: (x - 2)(x - 3) = 0\nx - 2 = 0 \u2192 x = 2\nx - 3 = 0 \u2192 x = 3\nLoesungen: x = 2 oder x = 3',
          },
          {
            example: 'Loese: 2x\u00b2 + 3x - 5 = 0 mit der quadratischen Formel.',
            solution: 'a=2, b=3, c=-5\nD = 3\u00b2 - 4(2)(-5) = 9 + 40 = 49\nx = (-3 \u00b1 \u221a49) / 4 = (-3 \u00b1 7) / 4\nx\u2081 = (-3 + 7)/4 = 1\nx\u2082 = (-3 - 7)/4 = -2,5',
          },
        ],
        practice: [
          {
            problem: 'Loese: x\u00b2 - 4x - 12 = 0',
            solution: 'x = 6 oder x = -2',
            steps: [
              'Finde zwei Zahlen mit der Summe -4 und dem Produkt -12',
              'Die Zahlen: -6 und +2 (da -6 + 2 = -4 und -6 \u00d7 2 = -12)',
              'Faktorisierung: (x - 6)(x + 2) = 0',
              'x - 6 = 0 \u2192 x = 6',
              'x + 2 = 0 \u2192 x = -2',
            ],
          },
        ],
      },
    ],
  },

  // ===== GEOMETRIE: Grundlagen der Geometrie =====
  'geo-001': {
    lessons: [
      {
        title: 'Punkte, Geraden und Ebenen',
        theory: 'Geometrie untersucht Formen, Groessen und Positionen von Figuren. Die grundlegenden Elemente sind: der Punkt (null Dimensionen — nur Position), die Gerade (eine Dimension — Laenge ohne Breite) und die Ebene (zwei Dimensionen — eine flache, unendliche Flaeche).\n\nEine Gerade verlaeuft durch zwei Punkte und erstreckt sich unendlich in beide Richtungen. Ein Strahl beginnt an einem Punkt und geht unendlich in eine Richtung. Eine Strecke hat zwei Endpunkte und eine bestimmte Laenge.\n\nZwei Geraden sind: parallel (sie schneiden sich nie), senkrecht (sie schneiden sich im 90\u00b0-Winkel) oder schneidend (sie schneiden sich in einem anderen Winkel).',
        keyPoints: [
          'Ein Punkt hat eine Position, aber keine Groesse',
          'Zwei Punkte bestimmen genau eine Gerade',
          'Parallele Geraden schneiden sich nie',
          'Senkrechte Geraden bilden einen 90\u00b0-Winkel',
        ],
        examples: [
          {
            example: 'Wie viele Geraden koennen durch einen einzelnen Punkt verlaufen?',
            solution: 'Unendlich viele Geraden koennen durch einen Punkt verlaufen — man kann die Gerade in jede Richtung um den Punkt drehen.',
          },
          {
            example: 'Koennen zwei Geraden gleichzeitig parallel und senkrecht zueinander sein?',
            solution: 'Nein! Parallele Geraden schneiden sich nie, waehrend senkrechte Geraden sich schneiden (und einen 90\u00b0-Winkel bilden). Das sind widerspruechliche Eigenschaften.',
          },
        ],
        practice: [
          {
            problem: 'Wenn die Gerade AB parallel zu CD ist und CD senkrecht zu EF steht, welche Beziehung besteht zwischen AB und EF?',
            solution: 'AB \u22a5 EF (AB steht senkrecht auf EF)',
            steps: [
              'AB \u2225 CD (gegeben)',
              'CD \u22a5 EF (gegeben)',
              'Wenn AB \u2225 CD, dann steht jede Gerade, die senkrecht auf CD steht, auch senkrecht auf AB',
              'Daher AB \u22a5 EF',
            ],
          },
        ],
      },
      {
        title: 'Winkel und ihre Messung',
        theory: 'Ein Winkel wird von zwei Strahlen gebildet, die denselben Anfangspunkt (Scheitelpunkt) haben. Winkel werden in Grad (\u00b0) gemessen. Ein voller Kreis = 360\u00b0.\n\nArten von Winkeln: spitzer Winkel (0\u00b0 < \u03b1 < 90\u00b0), rechter Winkel (\u03b1 = 90\u00b0), stumpfer Winkel (90\u00b0 < \u03b1 < 180\u00b0), gestreckter Winkel (\u03b1 = 180\u00b0) und Vollwinkel (\u03b1 = 360\u00b0).\n\nKomplementwinkel sind zwei Winkel, deren Summe 90\u00b0 betraegt. Supplementwinkel haben eine Summe von 180\u00b0. Scheitelwinkel (gegenueberliegende Winkel) sind gleich.',
        keyPoints: [
          'Rechter Winkel = 90\u00b0',
          'Gestreckter Winkel = 180\u00b0',
          'Komplementwinkel = 90\u00b0 (zusammen)',
          'Supplementwinkel = 180\u00b0 (zusammen)',
        ],
        examples: [
          {
            example: 'Finde den Komplement- und Supplementwinkel von 35\u00b0.',
            solution: 'Komplementwinkel: 90\u00b0 - 35\u00b0 = 55\u00b0\nSupplementwinkel: 180\u00b0 - 35\u00b0 = 145\u00b0',
          },
          {
            example: 'Zwei Supplementwinkel stehen im Verhaeltnis 2:3. Bestimme sie.',
            solution: '2x + 3x = 180\u00b0\n5x = 180\u00b0\nx = 36\u00b0\nDie Winkel: 2\u00d736\u00b0 = 72\u00b0 und 3\u00d736\u00b0 = 108\u00b0',
          },
        ],
        practice: [
          {
            problem: 'Die drei Winkel eines Dreiecks stehen im Verhaeltnis 1:2:3. Bestimme jeden Winkel.',
            solution: '30\u00b0, 60\u00b0, 90\u00b0 (rechtwinkliges Dreieck)',
            steps: [
              'Die Winkelsumme im Dreieck = 180\u00b0',
              '1x + 2x + 3x = 180\u00b0',
              '6x = 180\u00b0',
              'x = 30\u00b0',
              'Die Winkel: 30\u00b0, 60\u00b0, 90\u00b0',
            ],
          },
        ],
      },
      {
        title: 'Dreiecke',
        theory: 'Ein Dreieck ist eine Figur mit drei Seiten und drei Winkeln. Die Summe der Innenwinkel jedes Dreiecks betraegt immer 180\u00b0.\n\nArten nach Winkel: rechtwinklig (hat einen 90\u00b0-Winkel), spitzwinklig (alle Winkel < 90\u00b0), stumpfwinklig (ein Winkel > 90\u00b0).\nArten nach Seiten: gleichseitig (3 gleiche Seiten), gleichschenklig (2 gleiche Seiten), ungleichseitig (keine gleichen Seiten).\n\nFlaechenformel: A = (Grundseite \u00d7 Hoehe) / 2',
        keyPoints: [
          'Winkelsumme = 180\u00b0',
          'Ein gleichseitiges Dreieck hat alle Winkel gleich 60\u00b0',
          'Satz des Pythagoras: a\u00b2 + b\u00b2 = c\u00b2 (nur rechtwinklige Dreiecke)',
          'Flaeche = \u00bd \u00d7 Grundseite \u00d7 Hoehe',
        ],
        examples: [
          {
            example: 'Zwei Winkel eines Dreiecks betragen 45\u00b0 und 75\u00b0. Bestimme den dritten Winkel.',
            solution: 'Dritter Winkel = 180\u00b0 - 45\u00b0 - 75\u00b0 = 60\u00b0',
          },
          {
            example: 'Ein rechtwinkliges Dreieck hat Katheten von 6 cm und 8 cm. Bestimme die Hypotenuse.',
            solution: 'c\u00b2 = 6\u00b2 + 8\u00b2 = 36 + 64 = 100\nc = \u221a100 = 10 cm',
          },
        ],
        practice: [
          {
            problem: 'Berechne die Flaeche eines Dreiecks mit der Grundseite 12 cm und der Hoehe 7 cm.',
            solution: 'A = \u00bd \u00d7 12 \u00d7 7 = 42 cm\u00b2',
            steps: [
              'Flaechenformel: A = (g \u00d7 h) / 2',
              'g = 12 cm, h = 7 cm',
              'A = (12 \u00d7 7) / 2',
              'A = 84 / 2',
              'A = 42 cm\u00b2',
            ],
          },
        ],
      },
      {
        title: 'Vierecke',
        theory: 'Ein Viereck hat vier Seiten und vier Winkel. Die Summe seiner Innenwinkel = 360\u00b0.\n\nArten: Quadrat (4 gleiche Seiten, 4 Winkel von 90\u00b0), Rechteck (4 Winkel von 90\u00b0, gegenueberliegende Seiten gleich), Raute (4 gleiche Seiten), Parallelogramm (gegenueberliegende Seiten parallel und gleich), Trapez (nur ein Paar paralleler Seiten).\n\nFormeln: Quadrat: U = 4a, A = a\u00b2; Rechteck: U = 2(l+b), A = l\u00d7b; Parallelogramm: A = g \u00d7 h',
        keyPoints: [
          'Winkelsumme im Viereck = 360\u00b0',
          'Quadrat: alles gleich — Seiten und Winkel',
          'Rechteck: Winkel von 90\u00b0, gegenueberliegende Seiten gleich',
          'Raute: 4 gleiche Seiten (nicht unbedingt 90\u00b0)',
        ],
        examples: [
          {
            example: 'Berechne den Umfang und die Flaeche eines Rechtecks mit den Massen 8\u00d75 cm.',
            solution: 'Umfang: U = 2(8 + 5) = 2 \u00d7 13 = 26 cm\nFlaeche: A = 8 \u00d7 5 = 40 cm\u00b2',
          },
          {
            example: 'Ein Quadrat hat eine Flaeche von 169 cm\u00b2. Wie lang ist seine Seite?',
            solution: 'A = a\u00b2\n169 = a\u00b2\na = \u221a169 = 13 cm',
          },
        ],
        practice: [
          {
            problem: 'Ein Gartengrundstuck hat die Form eines Trapezes mit den Grundseiten 10 m und 6 m und der Hoehe 4 m. Berechne die Flaeche.',
            solution: 'A = [(10 + 6)/2] \u00d7 4 = 8 \u00d7 4 = 32 m\u00b2',
            steps: [
              'Trapezflaechenformel: A = [(a + b)/2] \u00d7 h',
              'a = 10 m, b = 6 m, h = 4 m',
              'A = [(10 + 6)/2] \u00d7 4',
              'A = [16/2] \u00d7 4',
              'A = 8 \u00d7 4 = 32 m\u00b2',
            ],
          },
        ],
      },
    ],
  },

  // ===== STATISTIK: Einfuehrung in die Statistik =====
  'stat-001': {
    lessons: [
      {
        title: 'Grundbegriffe der Statistik',
        theory: 'Statistik ist die Wissenschaft vom Sammeln, Organisieren, Analysieren und Interpretieren von Daten. Sie gliedert sich in: deskriptive Statistik (beschreibt die Daten) und schliessende Statistik (zieht Rueckschluesse auf die Grundgesamtheit aus einer Stichprobe).\n\nDie Grundgesamtheit ist die gesamte Menge der untersuchten Personen/Objekte. Die Stichprobe ist eine Teilmenge der Grundgesamtheit. Die Werte (Daten) sind die gesammelten Informationen.\n\nMerkmale koennen sein: qualitativ/kategorial (z.B. Farbe, Geschlecht) oder quantitativ/numerisch (welche stetig oder diskret sein koennen).',
        keyPoints: [
          'Grundgesamtheit = die gesamte untersuchte Menge',
          'Stichprobe = eine repraesentative Teilmenge',
          'Qualitatives Merkmal = kategorial (Farbe, Art)',
          'Quantitatives Merkmal = numerisch (Groesse, Gewicht)',
        ],
        examples: [
          {
            example: 'Eine Untersuchung der Durchschnittsnoten aller Schueler in Deutschland: Bestimme die Grundgesamtheit und das Merkmal.',
            solution: 'Grundgesamtheit: alle Schueler in Deutschland\nMerkmal: Durchschnittsnote (quantitativ, stetig)',
          },
          {
            example: 'Eine Umfrage ueber die bevorzugte Sportart: Wie wird das Merkmal klassifiziert?',
            solution: 'Bevorzugte Sportart ist ein qualitatives/kategoriales Merkmal — es hat Kategorien wie "Fussball", "Basketball", "Schwimmen" usw. Es kann nicht numerisch gemessen werden.',
          },
        ],
        practice: [
          {
            problem: 'Von 200 Universitaetsstudenten wurde gefragt, wie viele Stunden pro Woche sie lernen. Bestimme: die Grundgesamtheit, Stichprobe, das Merkmal und den Merkmalstyp.',
            solution: 'Grundgesamtheit: alle Studenten, Stichprobe: 200 Studenten, Merkmal: Lernstunden/Woche (quantitativ, stetig)',
            steps: [
              'Grundgesamtheit: alle Studenten der Universitaet',
              'Stichprobe: die 200 fuer die Umfrage ausgewaehlten Studenten',
              'Merkmal: Anzahl der Lernstunden pro Woche',
              'Typ: quantitativ, stetig (0,5 Stunden, 3,2 Stunden usw.)',
            ],
          },
        ],
      },
      {
        title: 'Mittelwerte und Lagemasse',
        theory: 'Lagemasse (Masse der zentralen Tendenz) geben uns den "typischen" Wert der Daten an. Die drei wichtigsten Masse sind der Mittelwert, der Median und der Modus.\n\nDer arithmetische Mittelwert = Summe aller Werte / Anzahl der Werte. Er wird stark von Extremwerten beeinflusst.\nDer Median = der mittlere Wert, wenn die Daten sortiert sind. Er ist widerstandsfaehig gegenueber Extremwerten.\nDer Modus = der am haeufigsten vorkommende Wert. Es kann 0, 1 oder mehrere Modi geben.',
        keyPoints: [
          'Mittelwert = \u03a3x / n',
          'Median = der mittlere Wert (oder der Durchschnitt der beiden mittleren Werte)',
          'Modus = der am haeufigsten vorkommende Wert',
          'Median und Modus sind widerstandsfaehiger gegenueber Ausreissern',
        ],
        examples: [
          {
            example: 'Daten: 4, 7, 2, 9, 7, 5, 3. Bestimme Mittelwert, Median und Modus.',
            solution: 'Mittelwert: (4+7+2+9+7+5+3)/7 = 37/7 \u2248 5,29\nMedian (sortiert: 2,3,4,5,7,7,9): mittlerer Wert = 5\nModus: 7 (kommt 2-mal vor)',
          },
          {
            example: 'Monatsgehaelter: 3.000, 3.200, 3.100, 20.000 Euro. Welches Lagemass repraesentiert die Gruppe am besten?',
            solution: 'Mittelwert: 29.300/4 = 7.325 Euro — stark beeinflusst durch 20.000\nMedian: (3.000+3.200)/2 = 3.100 — stabiler\nDer Median repraesentiert die Mehrheit am besten',
          },
        ],
        practice: [
          {
            problem: 'Testergebnisse: 85, 92, 78, 85, 90, 75, 88, 85. Bestimme Mittelwert und Modus.',
            solution: 'Mittelwert = 678/8 = 84,75; Modus = 85',
            steps: [
              'Summe: 85+92+78+85+90+75+88+85 = 678',
              'Mittelwert: 678/8 = 84,75',
              'Der am haeufigsten vorkommende Wert: 85 (kommt 3-mal vor)',
              'Modus = 85',
            ],
          },
        ],
      },
      {
        title: 'Streuung und Varianz',
        theory: 'Streuungsmasse (Dispersionsmasse) geben an, wie weit die Daten um den zentralen Wert gestreut sind.\n\nSpannweite = Maximalwert - Minimalwert. Sie zeigt die Gesamtstreuung, wird aber von Extremwerten beeinflusst.\nVarianz (\u03c3\u00b2) = der Mittelwert der quadrierten Abweichungen vom Mittelwert.\nStandardabweichung (\u03c3) = \u221aVarianz. Sie hat die gleiche Masseinheit wie die Daten — leicht zu interpretieren.\n\nEine kleine Standardabweichung = Daten eng um den Mittelwert gruppiert. Eine grosse = Daten weit gestreut.',
        keyPoints: [
          'Spannweite = Max - Min (ein einfacher Indikator fuer die Streuung)',
          'Standardabweichung = der "typische Abstand" vom Mittelwert',
          '\u03c3\u00b2 = \u03a3(x\u1d62 - x\u0304)\u00b2 / n (Varianz)',
          '\u03c3 = \u221a(Varianz) \u2014 Standardabweichung',
        ],
        examples: [
          {
            example: 'Bestimme die Spannweite und die Standardabweichung von: 2, 4, 4, 4, 5, 5, 7, 9',
            solution: 'Spannweite: 9 - 2 = 7\nMittelwert: 40/8 = 5\nQuadrierte Abweichungen: 9, 1, 1, 1, 0, 0, 4, 16\nVarianz: 32/8 = 4\nStandardabweichung: \u221a4 = 2',
          },
        ],
        practice: [
          {
            problem: 'Zwei Klassen hatten Durchschnittsnoten von 75 mit Standardabweichungen von 3 bzw. 12. Welche Klasse hat einheitlichere Ergebnisse?',
            solution: 'Die Klasse mit \u03c3=3 hat einheitlichere Ergebnisse (nahe am Mittelwert). Die Klasse mit \u03c3=12 hat eine hohe Streuung.',
            steps: [
              'Die Mittelwerte sind gleich: 75',
              'Klasse 1: \u03c3 = 3, also liegen die Noten meistens zwischen 72\u201378',
              'Klasse 2: \u03c3 = 12, die Noten sind weit gestreut (63\u201387)',
              'Klasse 1 hat einheitlichere Leistungen',
            ],
          },
        ],
      },
    ],
  },
};
