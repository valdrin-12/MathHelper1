// Quiz set "alg-medium" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "alg-medium",
  "difficulty": "intermediate",
  "icon": "ƒ",
  "color": "#8E44AD",
  "i18n": {
    "al": {
      "title": "Funksionet dhe Grafikët",
      "category": "Algjebër",
      "duration": "10 min"
    },
    "en": {
      "title": "Functions & Graphs",
      "category": "Algebra",
      "duration": "10 min"
    },
    "de": {
      "title": "Funktionen & Graphen",
      "category": "Algebra",
      "duration": "10 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Nëse f(x) = 3x − 2, sa është f⁻¹(7)?",
        "options": [
          "19",
          "3",
          "5/3",
          "1/19"
        ],
        "explanation": "Zgjidhim f(x) = 7: 3x − 2 = 7, 3x = 9, x = 3. Pra f⁻¹(7) = 3. Kontroll: f(3) = 9 − 2 = 7 ✓",
        "hint": "f⁻¹(7) është ai x për të cilin f(x) = 7.",
        "whyWrong": [
          "Keni llogaritur f(7) = 19 në vend të f⁻¹(7).",
          null,
          "Gabim shenje: keni marrë (7 − 2)/3 në vend të (7 + 2)/3.",
          "f⁻¹ nuk është 1/f: 1/f(7) është numri i anasjelltë, jo funksioni i anasjelltë."
        ]
      },
      "en": {
        "question": "If f(x) = 3x − 2, what is f⁻¹(7)?",
        "options": [
          "19",
          "3",
          "5/3",
          "1/19"
        ],
        "explanation": "Solve f(x) = 7: 3x − 2 = 7, 3x = 9, x = 3. So f⁻¹(7) = 3. Check: f(3) = 9 − 2 = 7 ✓",
        "hint": "f⁻¹(7) is the value of x for which f(x) = 7.",
        "whyWrong": [
          "You computed f(7) = 19 instead of f⁻¹(7).",
          null,
          "Sign error: you used (7 − 2)/3 instead of (7 + 2)/3.",
          "f⁻¹ is not 1/f: 1/f(7) is a reciprocal, not the inverse function."
        ]
      },
      "de": {
        "question": "Gegeben ist f(x) = 3x − 2. Berechnen Sie f⁻¹(7).",
        "options": [
          "19",
          "3",
          "5/3",
          "1/19"
        ],
        "explanation": "f(x) = 7 lösen: 3x − 2 = 7, 3x = 9, x = 3. Also f⁻¹(7) = 3. Probe: f(3) = 9 − 2 = 7 ✓",
        "hint": "f⁻¹(7) ist der x-Wert, für den f(x) = 7 gilt.",
        "whyWrong": [
          "Es wurde f(7) = 19 statt f⁻¹(7) berechnet.",
          null,
          "Vorzeichenfehler: (7 − 2)/3 statt (7 + 2)/3.",
          "f⁻¹ ist nicht 1/f: 1/f(7) ist der Kehrwert, nicht die Umkehrfunktion."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Cila pikë ndodhet në drejtëzën y = 2x + 1?",
        "options": [
          "(5, 2)",
          "(1, 2)",
          "(3, 8)",
          "(2, 5)"
        ],
        "explanation": "Për x = 2: y = 2 · 2 + 1 = 5, pra (2, 5) ndodhet në drejtëz. Për pikat e tjera: x = 5 jep y = 11, x = 1 jep y = 3, x = 3 jep y = 7.",
        "hint": "Vendosni koordinatën x të secilës pikë në ekuacion dhe krahasoni rezultatin me koordinatën y.",
        "whyWrong": [
          "Keni ngatërruar koordinatat: për x = 5 fitohet y = 11.",
          "Keni harruar +1: për x = 1 fitohet y = 3.",
          "Keni llogaritur 2(x + 1) në vend të 2x + 1: për x = 3 fitohet y = 7.",
          null
        ]
      },
      "en": {
        "question": "Which point lies on the line y = 2x + 1?",
        "options": [
          "(5, 2)",
          "(1, 2)",
          "(3, 8)",
          "(2, 5)"
        ],
        "explanation": "For x = 2: y = 2 · 2 + 1 = 5, so (2, 5) lies on the line. For the others: x = 5 gives y = 11, x = 1 gives y = 3, x = 3 gives y = 7.",
        "hint": "Substitute the x-coordinate of each point and compare the result with its y-coordinate.",
        "whyWrong": [
          "You swapped the coordinates: x = 5 gives y = 11.",
          "You forgot the +1: x = 1 gives y = 3.",
          "You computed 2(x + 1) instead of 2x + 1: x = 3 gives y = 7.",
          null
        ]
      },
      "de": {
        "question": "Welcher Punkt liegt auf der Geraden y = 2x + 1?",
        "options": [
          "(5, 2)",
          "(1, 2)",
          "(3, 8)",
          "(2, 5)"
        ],
        "explanation": "Für x = 2: y = 2 · 2 + 1 = 5, also liegt (2, 5) auf der Geraden. Übrige Punkte: x = 5 ergibt y = 11, x = 1 ergibt y = 3, x = 3 ergibt y = 7.",
        "hint": "Setzen Sie die x-Koordinate jedes Punktes ein und vergleichen Sie das Ergebnis mit der y-Koordinate.",
        "whyWrong": [
          "Die Koordinaten wurden vertauscht: x = 5 ergibt y = 11.",
          "Das +1 wurde vergessen: x = 1 ergibt y = 3.",
          "Es wurde 2(x + 1) statt 2x + 1 gerechnet: x = 3 ergibt y = 7.",
          null
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është koeficienti i drejtimit (pjerrësia) i drejtëzës që kalon nëpër pikat (1, 2) dhe (3, 8)?",
        "options": [
          "3",
          "1/3",
          "−3",
          "5/2"
        ],
        "explanation": "k = (8 − 2)/(3 − 1) = 6/2 = 3.",
        "hint": "Pjesëtoni ndryshimin e y-ve me ndryshimin e x-ve, duke zbritur në të njëjtin rend.",
        "whyWrong": [
          null,
          "Keni pjesëtuar ndryshimin e x-ve me ndryshimin e y-ve.",
          "Keni zbritur në rend të ndryshëm: (8 − 2)/(1 − 3) = −3.",
          "Keni mbledhur koordinatat në vend që t'i zbritni: (8 + 2)/(3 + 1)."
        ]
      },
      "en": {
        "question": "What is the slope of the line through the points (1, 2) and (3, 8)?",
        "options": [
          "3",
          "1/3",
          "−3",
          "5/2"
        ],
        "explanation": "m = (8 − 2)/(3 − 1) = 6/2 = 3.",
        "hint": "Divide the change in y by the change in x, subtracting in the same order.",
        "whyWrong": [
          null,
          "You divided the change in x by the change in y.",
          "You subtracted in different orders: (8 − 2)/(1 − 3) = −3.",
          "You added the coordinates instead of subtracting: (8 + 2)/(3 + 1)."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Steigung der Geraden durch die Punkte (1, 2) und (3, 8).",
        "options": [
          "3",
          "1/3",
          "−3",
          "5/2"
        ],
        "explanation": "m = (8 − 2)/(3 − 1) = 6/2 = 3.",
        "hint": "Teilen Sie die Änderung von y durch die Änderung von x und subtrahieren Sie in derselben Reihenfolge.",
        "whyWrong": [
          null,
          "Die Änderung von x wurde durch die Änderung von y geteilt.",
          "In unterschiedlicher Reihenfolge subtrahiert: (8 − 2)/(1 − 3) = −3.",
          "Die Koordinaten wurden addiert statt subtrahiert: (8 + 2)/(3 + 1)."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Zgjidhni ekuacionin: |x − 3| = 5",
        "options": [
          "x = 8",
          "x = −8 ose x = 2",
          "x = 8 ose x = −2",
          "x = 2 ose x = 8"
        ],
        "explanation": "x − 3 = 5 ⇒ x = 8, ose x − 3 = −5 ⇒ x = −2. Kontroll: |8 − 3| = 5 dhe |−2 − 3| = 5 ✓",
        "hint": "Shprehja brenda vlerës absolute mund të jetë e barabartë me 5 ose me −5.",
        "whyWrong": [
          "Keni marrë vetëm rastin x − 3 = 5 dhe keni harruar rastin negativ.",
          "Keni zgjidhur |x + 3| = 5 në vend të |x − 3| = 5.",
          null,
          "Gabim shenje në rastin negativ: nga x − 3 = −5 del x = −2, jo 2."
        ]
      },
      "en": {
        "question": "Solve: |x − 3| = 5",
        "options": [
          "x = 8",
          "x = −8 or x = 2",
          "x = 8 or x = −2",
          "x = 2 or x = 8"
        ],
        "explanation": "x − 3 = 5 ⇒ x = 8, or x − 3 = −5 ⇒ x = −2. Check: |8 − 3| = 5 and |−2 − 3| = 5 ✓",
        "hint": "The expression inside the absolute value can equal 5 or −5.",
        "whyWrong": [
          "You took only the case x − 3 = 5 and forgot the negative case.",
          "You solved |x + 3| = 5 instead of |x − 3| = 5.",
          null,
          "Sign error in the negative case: x − 3 = −5 gives x = −2, not 2."
        ]
      },
      "de": {
        "question": "Lösen Sie: |x − 3| = 5",
        "options": [
          "x = 8",
          "x = −8 oder x = 2",
          "x = 8 oder x = −2",
          "x = 2 oder x = 8"
        ],
        "explanation": "x − 3 = 5 ⇒ x = 8, oder x − 3 = −5 ⇒ x = −2. Probe: |8 − 3| = 5 und |−2 − 3| = 5 ✓",
        "hint": "Der Ausdruck im Betrag kann 5 oder −5 sein.",
        "whyWrong": [
          "Nur der Fall x − 3 = 5 wurde betrachtet, der negative Fall fehlt.",
          "Es wurde |x + 3| = 5 statt |x − 3| = 5 gelöst.",
          null,
          "Vorzeichenfehler im negativen Fall: x − 3 = −5 ergibt x = −2, nicht 2."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Cila është fusha e përkufizimit e funksionit f(x) = √(x − 2)?",
        "options": [
          "x > 2",
          "x ≥ 2",
          "x ≥ −2",
          "x ≤ 2"
        ],
        "explanation": "Duhet x − 2 ≥ 0, pra x ≥ 2. Vlera x = 2 lejohet, sepse √0 = 0.",
        "hint": "Çfarë kushti duhet të plotësojë shprehja nën rrënjën katrore?",
        "whyWrong": [
          "Keni përjashtuar x = 2, por √0 = 0 është i përcaktuar.",
          null,
          "Gabim shenje: x − 2 ≥ 0 jep x ≥ 2, jo x ≥ −2.",
          "Keni kthyer drejtimin e mosbarazimit; për x < 2 shprehja nën rrënjë është negative."
        ]
      },
      "en": {
        "question": "What is the domain of f(x) = √(x − 2)?",
        "options": [
          "x > 2",
          "x ≥ 2",
          "x ≥ −2",
          "x ≤ 2"
        ],
        "explanation": "We need x − 2 ≥ 0, so x ≥ 2. The value x = 2 is allowed because √0 = 0.",
        "hint": "What condition must the expression under the square root satisfy?",
        "whyWrong": [
          "You excluded x = 2, but √0 = 0 is defined.",
          null,
          "Sign error: x − 2 ≥ 0 gives x ≥ 2, not x ≥ −2.",
          "You reversed the inequality; for x < 2 the expression under the root is negative."
        ]
      },
      "de": {
        "question": "Bestimmen Sie den Definitionsbereich von f(x) = √(x − 2).",
        "options": [
          "x > 2",
          "x ≥ 2",
          "x ≥ −2",
          "x ≤ 2"
        ],
        "explanation": "Es muss x − 2 ≥ 0 gelten, also x ≥ 2. x = 2 ist erlaubt, denn √0 = 0.",
        "hint": "Welche Bedingung muss der Ausdruck unter der Quadratwurzel erfüllen?",
        "whyWrong": [
          "x = 2 wurde ausgeschlossen, aber √0 = 0 ist definiert.",
          null,
          "Vorzeichenfehler: x − 2 ≥ 0 ergibt x ≥ 2, nicht x ≥ −2.",
          "Die Ungleichung wurde umgedreht; für x < 2 ist der Radikand negativ."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Nëse f(x) = x + 1 dhe g(x) = x², sa është (f∘g)(2)?",
        "options": [
          "9",
          "4",
          "12",
          "5"
        ],
        "explanation": "g(2) = 2² = 4, pastaj f(4) = 4 + 1 = 5.",
        "hint": "(f∘g)(2) = f(g(2)): filloni me funksionin e brendshëm.",
        "whyWrong": [
          "Keni llogaritur g(f(2)) = (2 + 1)² = 9; rendi është i kundërt.",
          "Keni llogaritur vetëm g(2) dhe keni harruar të zbatoni f-në.",
          "Keni shumëzuar f(2) · g(2) = 3 · 4; përbërja e funksioneve nuk është shumëzim.",
          null
        ]
      },
      "en": {
        "question": "If f(x) = x + 1 and g(x) = x², what is (f∘g)(2)?",
        "options": [
          "9",
          "4",
          "12",
          "5"
        ],
        "explanation": "g(2) = 2² = 4, then f(4) = 4 + 1 = 5.",
        "hint": "(f∘g)(2) = f(g(2)): start with the inner function.",
        "whyWrong": [
          "You computed g(f(2)) = (2 + 1)² = 9; the order is reversed.",
          "You computed only g(2) and forgot to apply f.",
          "You multiplied f(2) · g(2) = 3 · 4; composition is not multiplication.",
          null
        ]
      },
      "de": {
        "question": "Gegeben sind f(x) = x + 1 und g(x) = x². Berechnen Sie (f∘g)(2).",
        "options": [
          "9",
          "4",
          "12",
          "5"
        ],
        "explanation": "g(2) = 2² = 4, dann f(4) = 4 + 1 = 5.",
        "hint": "(f∘g)(2) = f(g(2)): Beginnen Sie mit der inneren Funktion.",
        "whyWrong": [
          "Es wurde g(f(2)) = (2 + 1)² = 9 berechnet; die Reihenfolge ist vertauscht.",
          "Nur g(2) wurde berechnet, f wurde nicht mehr angewendet.",
          "Es wurde f(2) · g(2) = 3 · 4 gerechnet; eine Verkettung ist keine Multiplikation.",
          null
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Cila drejtëz është paralele me y = 3x − 1?",
        "options": [
          "y = 3x + 5",
          "y = −(1/3)x + 2",
          "y = −3x − 1",
          "y = 5x − 1"
        ],
        "explanation": "Drejtëzat paralele kanë koeficient drejtimi të njëjtë. y = 3x − 1 ka k = 3, dhe vetëm y = 3x + 5 ka gjithashtu k = 3.",
        "hint": "Krahasoni koeficientët e drejtimit të drejtëzave.",
        "whyWrong": [
          null,
          "Koeficienti −1/3 jep drejtëz pingule, jo paralele.",
          "Koeficienti −3 ka shenjë të kundërt; drejtëzat priten.",
          "Ka të njëjtën prerje me boshtin y (−1), por koeficient tjetër drejtimi."
        ]
      },
      "en": {
        "question": "Which line is parallel to y = 3x − 1?",
        "options": [
          "y = 3x + 5",
          "y = −(1/3)x + 2",
          "y = −3x − 1",
          "y = 5x − 1"
        ],
        "explanation": "Parallel lines have equal slopes. y = 3x − 1 has m = 3, and only y = 3x + 5 also has m = 3.",
        "hint": "Compare the slopes of the lines.",
        "whyWrong": [
          null,
          "Slope −1/3 gives a perpendicular line, not a parallel one.",
          "Slope −3 has the opposite sign, so the lines intersect.",
          "It has the same y-intercept (−1) but a different slope."
        ]
      },
      "de": {
        "question": "Welche Gerade ist parallel zu y = 3x − 1?",
        "options": [
          "y = 3x + 5",
          "y = −(1/3)x + 2",
          "y = −3x − 1",
          "y = 5x − 1"
        ],
        "explanation": "Parallele Geraden haben die gleiche Steigung. y = 3x − 1 hat m = 3, und nur y = 3x + 5 hat ebenfalls m = 3.",
        "hint": "Vergleichen Sie die Steigungen der Geraden.",
        "whyWrong": [
          null,
          "Steigung −1/3 ergibt eine senkrechte Gerade, keine parallele.",
          "Steigung −3 hat das entgegengesetzte Vorzeichen; die Geraden schneiden sich.",
          "Gleicher y-Achsenabschnitt (−1), aber eine andere Steigung."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Në cilën pikë e pret drejtëza y = −2x + 6 boshtin x?",
        "options": [
          "(0, 6)",
          "(−3, 0)",
          "(3, 0)",
          "(0, 3)"
        ],
        "explanation": "Vendosim y = 0: −2x + 6 = 0, 2x = 6, x = 3. Pika e prerjes: (3, 0).",
        "hint": "Sa është vlera e y-it për çdo pikë në boshtin x?",
        "whyWrong": [
          "(0, 6) është prerja me boshtin y, jo me boshtin x.",
          "Gabim shenje: −2x + 6 = 0 jep x = 3, jo −3.",
          null,
          "3 është koordinata x; pika në boshtin x ka formën (x, 0)."
        ]
      },
      "en": {
        "question": "At which point does the line y = −2x + 6 cross the x-axis?",
        "options": [
          "(0, 6)",
          "(−3, 0)",
          "(3, 0)",
          "(0, 3)"
        ],
        "explanation": "Set y = 0: −2x + 6 = 0, 2x = 6, x = 3. The intercept is (3, 0).",
        "hint": "What is the y-value of every point on the x-axis?",
        "whyWrong": [
          "(0, 6) is the y-intercept, not the x-intercept.",
          "Sign error: −2x + 6 = 0 gives x = 3, not −3.",
          null,
          "3 is the x-coordinate; a point on the x-axis has the form (x, 0)."
        ]
      },
      "de": {
        "question": "In welchem Punkt schneidet die Gerade y = −2x + 6 die x-Achse?",
        "options": [
          "(0, 6)",
          "(−3, 0)",
          "(3, 0)",
          "(0, 3)"
        ],
        "explanation": "y = 0 setzen: −2x + 6 = 0, 2x = 6, x = 3. Schnittpunkt: (3, 0).",
        "hint": "Welchen y-Wert hat jeder Punkt auf der x-Achse?",
        "whyWrong": [
          "(0, 6) ist der Schnittpunkt mit der y-Achse, nicht mit der x-Achse.",
          "Vorzeichenfehler: −2x + 6 = 0 ergibt x = 3, nicht −3.",
          null,
          "3 ist die x-Koordinate; ein Punkt auf der x-Achse hat die Form (x, 0)."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Zgjidhni ekuacionin eksponencial: 2ˣ⁻¹ = 16",
        "options": [
          "x = 4",
          "x = 3",
          "x = 9",
          "x = 5"
        ],
        "explanation": "16 = 2⁴, pra 2ˣ⁻¹ = 2⁴ dhe x − 1 = 4, x = 5. Kontroll: 2⁵⁻¹ = 2⁴ = 16 ✓",
        "hint": "Shkruajeni 16-shin si fuqi të 2-shit dhe barazoni eksponentët.",
        "whyWrong": [
          "Keni gjetur x − 1 = 4, por keni harruar t'i shtoni 1.",
          "Gabim shenje: nga x − 1 = 4 del x = 5, jo 3.",
          "Keni pjesëtuar 16 me 2 (8) në vend që ta shkruani si fuqi: 16 = 2⁴.",
          null
        ]
      },
      "en": {
        "question": "Solve the exponential equation: 2ˣ⁻¹ = 16",
        "options": [
          "x = 4",
          "x = 3",
          "x = 9",
          "x = 5"
        ],
        "explanation": "16 = 2⁴, so 2ˣ⁻¹ = 2⁴ and x − 1 = 4, x = 5. Check: 2⁵⁻¹ = 2⁴ = 16 ✓",
        "hint": "Write 16 as a power of 2 and compare the exponents.",
        "whyWrong": [
          "You found x − 1 = 4 but forgot to add 1.",
          "Sign error: x − 1 = 4 gives x = 5, not 3.",
          "You divided 16 by 2 (8) instead of writing it as a power: 16 = 2⁴.",
          null
        ]
      },
      "de": {
        "question": "Lösen Sie die Exponentialgleichung: 2ˣ⁻¹ = 16",
        "options": [
          "x = 4",
          "x = 3",
          "x = 9",
          "x = 5"
        ],
        "explanation": "16 = 2⁴, also 2ˣ⁻¹ = 2⁴ und x − 1 = 4, x = 5. Probe: 2⁵⁻¹ = 2⁴ = 16 ✓",
        "hint": "Schreiben Sie 16 als Potenz von 2 und vergleichen Sie die Exponenten.",
        "whyWrong": [
          "x − 1 = 4 wurde gefunden, aber die 1 nicht addiert.",
          "Vorzeichenfehler: x − 1 = 4 ergibt x = 5, nicht 3.",
          "16 wurde durch 2 geteilt (8), statt es als Potenz zu schreiben: 16 = 2⁴.",
          null
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Funksioni f është linear, me f(0) = 3 dhe f(2) = 7. Sa është f(5)?",
        "options": [
          "13",
          "17,5",
          "15",
          "10"
        ],
        "explanation": "k = (7 − 3)/(2 − 0) = 2 dhe n = f(0) = 3, pra f(x) = 2x + 3. f(5) = 2 · 5 + 3 = 13.",
        "hint": "Gjeni së pari koeficientin e drejtimit nga dy vlerat e dhëna.",
        "whyWrong": [
          null,
          "Keni supozuar përpjesëtim të drejtë (7 · 5/2), por f(0) ≠ 0.",
          "Keni marrë f(0) = 3 si koeficient drejtimi: 3 · 5 = 15.",
          "Keni harruar termin e lirë: 2 · 5 = 10, pa +3."
        ]
      },
      "en": {
        "question": "f is a linear function with f(0) = 3 and f(2) = 7. What is f(5)?",
        "options": [
          "13",
          "17.5",
          "15",
          "10"
        ],
        "explanation": "m = (7 − 3)/(2 − 0) = 2 and b = f(0) = 3, so f(x) = 2x + 3. f(5) = 2 · 5 + 3 = 13.",
        "hint": "First find the slope from the two given values.",
        "whyWrong": [
          null,
          "You assumed direct proportion (7 · 5/2), but f(0) ≠ 0.",
          "You used f(0) = 3 as the slope: 3 · 5 = 15.",
          "You forgot the intercept: 2 · 5 = 10, without +3."
        ]
      },
      "de": {
        "question": "f ist eine lineare Funktion mit f(0) = 3 und f(2) = 7. Berechnen Sie f(5).",
        "options": [
          "13",
          "17,5",
          "15",
          "10"
        ],
        "explanation": "m = (7 − 3)/(2 − 0) = 2 und b = f(0) = 3, also f(x) = 2x + 3. f(5) = 2 · 5 + 3 = 13.",
        "hint": "Bestimmen Sie zuerst die Steigung aus den beiden gegebenen Werten.",
        "whyWrong": [
          null,
          "Es wurde Proportionalität angenommen (7 · 5/2), aber f(0) ≠ 0.",
          "f(0) = 3 wurde als Steigung verwendet: 3 · 5 = 15.",
          "Der y-Achsenabschnitt fehlt: 2 · 5 = 10 ohne +3."
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 12
      },
      "al": {
        "question": "Jepet funksioni f(x) = x² − 3x + 2. Llogaritni f(−2).",
        "explanation": "Zëvendësojmë x = −2: f(−2) = (−2)² − 3 · (−2) + 2 = 4 + 6 + 2 = 12.",
        "hint": "Vendoseni −2 në kllapa kudo ku shfaqet x dhe kujdesuni për shenjat.",
        "commonMistakes": [
          {
            "value": 4,
            "why": "Keni llogaritur −2² = −4 në vend të (−2)² = 4: −4 + 6 + 2 = 4."
          },
          {
            "value": 0,
            "why": "Keni shkruar −3 · (−2) = −6 në vend të +6: 4 − 6 + 2 = 0."
          }
        ]
      },
      "en": {
        "question": "Given f(x) = x² − 3x + 2, calculate f(−2).",
        "explanation": "Substitute x = −2: f(−2) = (−2)² − 3 · (−2) + 2 = 4 + 6 + 2 = 12.",
        "hint": "Put −2 in brackets wherever x appears and be careful with the signs.",
        "commonMistakes": [
          {
            "value": 4,
            "why": "You calculated −2² = −4 instead of (−2)² = 4: −4 + 6 + 2 = 4."
          },
          {
            "value": 0,
            "why": "You wrote −3 · (−2) = −6 instead of +6: 4 − 6 + 2 = 0."
          }
        ]
      },
      "de": {
        "question": "Gegeben ist f(x) = x² − 3x + 2. Berechnen Sie f(−2).",
        "explanation": "x = −2 einsetzen: f(−2) = (−2)² − 3 · (−2) + 2 = 4 + 6 + 2 = 12.",
        "hint": "Setzen Sie −2 überall, wo x steht, in Klammern ein und achten Sie auf die Vorzeichen.",
        "commonMistakes": [
          {
            "value": 4,
            "why": "Sie haben −2² = −4 statt (−2)² = 4 gerechnet: −4 + 6 + 2 = 4."
          },
          {
            "value": 0,
            "why": "Sie haben −3 · (−2) = −6 statt +6 gerechnet: 4 − 6 + 2 = 0."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 1
      },
      "al": {
        "question": "Një drejtëz kalon nëpër pikat (2, 5) dhe (4, 9). Gjeni ordinatën e pikës ku ajo pret boshtin y (koeficientin b në y = mx + b).",
        "explanation": "Koeficienti këndor: m = (9 − 5) : (4 − 2) = 4 : 2 = 2. Nga 5 = 2 · 2 + b del b = 5 − 4 = 1. Drejtëza është y = 2x + 1, pra b = 1.",
        "hint": "Gjeni fillimisht koeficientin këndor m, pastaj zëvendësoni njërën pikë në y = mx + b.",
        "commonMistakes": [
          {
            "value": 4,
            "why": "Keni llogaritur m = (x₂ − x₁) : (y₂ − y₁) = 1/2 në vend të (y₂ − y₁) : (x₂ − x₁), prandaj b = 5 − 1 = 4."
          },
          {
            "value": 9,
            "why": "Keni bërë gabim me shenjën: b = 5 + 2 · 2 = 9 në vend të b = 5 − 2 · 2."
          }
        ]
      },
      "en": {
        "question": "A line passes through the points (2, 5) and (4, 9). Find the y-intercept (the value b in y = mx + b).",
        "explanation": "Slope: m = (9 − 5) ÷ (4 − 2) = 4 ÷ 2 = 2. From 5 = 2 · 2 + b we get b = 5 − 4 = 1. The line is y = 2x + 1, so b = 1.",
        "hint": "First find the slope m, then substitute one of the points into y = mx + b.",
        "commonMistakes": [
          {
            "value": 4,
            "why": "You computed m = (x₂ − x₁) ÷ (y₂ − y₁) = 1/2 instead of (y₂ − y₁) ÷ (x₂ − x₁), so b = 5 − 1 = 4."
          },
          {
            "value": 9,
            "why": "Sign error: b = 5 + 2 · 2 = 9 instead of b = 5 − 2 · 2."
          }
        ]
      },
      "de": {
        "question": "Eine Gerade verläuft durch die Punkte (2, 5) und (4, 9). Bestimmen Sie den y-Achsenabschnitt (den Wert b in y = mx + b).",
        "explanation": "Steigung: m = (9 − 5) : (4 − 2) = 4 : 2 = 2. Aus 5 = 2 · 2 + b folgt b = 5 − 4 = 1. Die Gerade ist y = 2x + 1, also b = 1.",
        "hint": "Bestimmen Sie zuerst die Steigung m und setzen Sie dann einen der Punkte in y = mx + b ein.",
        "commonMistakes": [
          {
            "value": 4,
            "why": "Sie haben m = (x₂ − x₁) : (y₂ − y₁) = 1/2 statt (y₂ − y₁) : (x₂ − x₁) berechnet, daher b = 5 − 1 = 4."
          },
          {
            "value": 9,
            "why": "Vorzeichenfehler: b = 5 + 2 · 2 = 9 statt b = 5 − 2 · 2."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": true,
      "al": {
        "question": "Drejtëzat y = 2x + 1 dhe y = −x/2 + 3 janë pingule me njëra-tjetrën.",
        "explanation": "Dy drejtëza janë pingule kur prodhimi i koeficientëve këndorë është −1. Këtu: 2 · (−1/2) = −1, pra drejtëzat janë pingule. Pohimi është i vërtetë.",
        "hint": "Shumëzoni koeficientët këndorë të dy drejtëzave.",
        "whyWrong": "Pohimi nuk është i gabuar: koeficientët këndorë nuk janë të barabartë (pra drejtëzat nuk janë paralele), por prodhimi i tyre është −1, që është kushti i pingultisë."
      },
      "en": {
        "question": "The lines y = 2x + 1 and y = −x/2 + 3 are perpendicular to each other.",
        "explanation": "Two lines are perpendicular when the product of their slopes is −1. Here: 2 · (−1/2) = −1, so the lines are perpendicular. The statement is true.",
        "hint": "Multiply the slopes of the two lines.",
        "whyWrong": "The statement is not false: the slopes are not equal (so the lines are not parallel), but their product is −1, which is the condition for perpendicular lines."
      },
      "de": {
        "question": "Die Geraden y = 2x + 1 und y = −x/2 + 3 stehen senkrecht aufeinander.",
        "explanation": "Zwei Geraden stehen senkrecht, wenn das Produkt ihrer Steigungen −1 ist. Hier: 2 · (−1/2) = −1, also stehen sie senkrecht. Die Aussage ist wahr.",
        "hint": "Multiplizieren Sie die Steigungen der beiden Geraden.",
        "whyWrong": "Die Aussage ist nicht falsch: Die Steigungen sind nicht gleich (die Geraden sind also nicht parallel), aber ihr Produkt ist −1 – genau die Bedingung für Orthogonalität."
      }
    }
  ]
};
