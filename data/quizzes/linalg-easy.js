// Quiz set "linalg-easy" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).

export default {
  "id": "linalg-easy",
  "difficulty": "beginner",
  "icon": "⃗",
  "color": "#9B59B6",
  "i18n": {
    "al": {
      "title": "Vektorë dhe Matrica Bazë",
      "category": "Algjebër Lineare",
      "duration": "10 min"
    },
    "en": {
      "title": "Basic Vectors & Matrices",
      "category": "Linear Algebra",
      "duration": "10 min"
    },
    "de": {
      "title": "Grundlagen: Vektoren & Matrizen",
      "category": "Lineare Algebra",
      "duration": "10 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Llogaritni shumën e vektorëve: (2, 3) + (1, 4)",
        "options": [
          "(2, 12)",
          "(1, −1)",
          "(3, 7)",
          "(5, 5)"
        ],
        "explanation": "(2, 3) + (1, 4) = (2 + 1, 3 + 4) = (3, 7).",
        "hint": "Mblidhni komponentët që ndodhen në të njëjtin pozicion.",
        "whyWrong": [
          "Keni shumëzuar komponentët në vend që t'i mblidhni.",
          "Keni zbritur vektorët në vend që t'i mblidhni.",
          null,
          "Keni mbledhur komponentët e të njëjtit vektor: (2 + 3, 1 + 4)."
        ]
      },
      "en": {
        "question": "Add the vectors: (2, 3) + (1, 4)",
        "options": [
          "(2, 12)",
          "(1, −1)",
          "(3, 7)",
          "(5, 5)"
        ],
        "explanation": "(2, 3) + (1, 4) = (2 + 1, 3 + 4) = (3, 7).",
        "hint": "Add the components that are in the same position.",
        "whyWrong": [
          "You multiplied the components instead of adding them.",
          "You subtracted the vectors instead of adding them.",
          null,
          "You added the components within each vector: (2 + 3, 1 + 4)."
        ]
      },
      "de": {
        "question": "Addieren Sie die Vektoren: (2, 3) + (1, 4)",
        "options": [
          "(2, 12)",
          "(1, −1)",
          "(3, 7)",
          "(5, 5)"
        ],
        "explanation": "(2, 3) + (1, 4) = (2 + 1, 3 + 4) = (3, 7).",
        "hint": "Addieren Sie die Komponenten, die an derselben Stelle stehen.",
        "whyWrong": [
          "Die Komponenten wurden multipliziert statt addiert.",
          "Die Vektoren wurden subtrahiert statt addiert.",
          null,
          "Es wurden die Komponenten innerhalb eines Vektors addiert: (2 + 3, 1 + 4)."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është gjatësia (moduli) e vektorit v = (−6, 8)?",
        "options": [
          "10",
          "2",
          "14",
          "100"
        ],
        "explanation": "|v| = √((−6)² + 8²) = √(36 + 64) = √100 = 10.",
        "hint": "Përdorni teoremën e Pitagorës me dy komponentët e vektorit.",
        "whyWrong": [
          null,
          "Keni mbledhur komponentët: −6 + 8 = 2.",
          "Keni mbledhur vlerat absolute: 6 + 8 = 14; duhet rrënja e shumës së katrorëve.",
          "Keni harruar të nxirrni rrënjën katrore nga 100."
        ]
      },
      "en": {
        "question": "What is the magnitude (length) of the vector v = (−6, 8)?",
        "options": [
          "10",
          "2",
          "14",
          "100"
        ],
        "explanation": "|v| = √((−6)² + 8²) = √(36 + 64) = √100 = 10.",
        "hint": "Use the Pythagorean theorem with the two components.",
        "whyWrong": [
          null,
          "You added the components: −6 + 8 = 2.",
          "You added the absolute values: 6 + 8 = 14; you need the root of the sum of squares.",
          "You forgot to take the square root of 100."
        ]
      },
      "de": {
        "question": "Berechnen Sie den Betrag (die Länge) des Vektors v = (−6, 8).",
        "options": [
          "10",
          "2",
          "14",
          "100"
        ],
        "explanation": "|v| = √((−6)² + 8²) = √(36 + 64) = √100 = 10.",
        "hint": "Verwenden Sie den Satz des Pythagoras mit den beiden Komponenten.",
        "whyWrong": [
          null,
          "Die Komponenten wurden addiert: −6 + 8 = 2.",
          "Die Beträge wurden addiert: 6 + 8 = 14; nötig ist die Wurzel aus der Summe der Quadrate.",
          "Die Wurzel aus 100 wurde nicht gezogen."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Jepen vektorët a = (3, −1) dhe b = (1, 4). Gjeni 2a − b.",
        "options": [
          "(7, 2)",
          "(5, −5)",
          "(2, −5)",
          "(5, −6)"
        ],
        "explanation": "2a = (6, −2). 2a − b = (6 − 1, −2 − 4) = (5, −6).",
        "hint": "Së pari shumëzoni a-në me 2, pastaj zbritni b-në komponent për komponent.",
        "whyWrong": [
          "Keni mbledhur b-në në vend që ta zbritni: 2a + b = (7, 2).",
          "Keni shumëzuar me 2 vetëm komponentin e parë të a-së.",
          "Keni harruar ta shumëzoni a-në me 2: a − b = (2, −5).",
          null
        ]
      },
      "en": {
        "question": "Given a = (3, −1) and b = (1, 4), find 2a − b.",
        "options": [
          "(7, 2)",
          "(5, −5)",
          "(2, −5)",
          "(5, −6)"
        ],
        "explanation": "2a = (6, −2). 2a − b = (6 − 1, −2 − 4) = (5, −6).",
        "hint": "First multiply a by 2, then subtract b component by component.",
        "whyWrong": [
          "You added b instead of subtracting it: 2a + b = (7, 2).",
          "You multiplied only the first component of a by 2.",
          "You forgot to multiply a by 2: a − b = (2, −5).",
          null
        ]
      },
      "de": {
        "question": "Gegeben sind a = (3, −1) und b = (1, 4). Berechnen Sie 2a − b.",
        "options": [
          "(7, 2)",
          "(5, −5)",
          "(2, −5)",
          "(5, −6)"
        ],
        "explanation": "2a = (6, −2). 2a − b = (6 − 1, −2 − 4) = (5, −6).",
        "hint": "Multiplizieren Sie zuerst a mit 2 und subtrahieren Sie dann b komponentenweise.",
        "whyWrong": [
          "b wurde addiert statt subtrahiert: 2a + b = (7, 2).",
          "Nur die erste Komponente von a wurde mit 2 multipliziert.",
          "a wurde nicht mit 2 multipliziert: a − b = (2, −5).",
          null
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Llogaritni shumën e matricave (të shkruara rresht pas rreshti): [[1, 2], [3, 4]] + [[5, 0], [−1, 2]]",
        "options": [
          "[[5, 0], [−3, 8]]",
          "[[6, 2], [4, 6]]",
          "[[6, 2], [2, 6]]",
          "[[−4, 2], [4, 2]]"
        ],
        "explanation": "Mbledhim elementet në të njëjtat pozicione: [[1 + 5, 2 + 0], [3 + (−1), 4 + 2]] = [[6, 2], [2, 6]].",
        "hint": "Matricat me të njëjtat dimensione mblidhen element për element.",
        "whyWrong": [
          "Keni shumëzuar elementet në vend që t'i mblidhni.",
          "Gabim shenje: 3 + (−1) = 2, jo 4.",
          null,
          "Keni zbritur matricën e dytë në vend që ta mblidhni."
        ]
      },
      "en": {
        "question": "Add the matrices (written row by row): [[1, 2], [3, 4]] + [[5, 0], [−1, 2]]",
        "options": [
          "[[5, 0], [−3, 8]]",
          "[[6, 2], [4, 6]]",
          "[[6, 2], [2, 6]]",
          "[[−4, 2], [4, 2]]"
        ],
        "explanation": "Add the entries in the same positions: [[1 + 5, 2 + 0], [3 + (−1), 4 + 2]] = [[6, 2], [2, 6]].",
        "hint": "Matrices of the same size are added entry by entry.",
        "whyWrong": [
          "You multiplied the entries instead of adding them.",
          "Sign error: 3 + (−1) = 2, not 4.",
          null,
          "You subtracted the second matrix instead of adding it."
        ]
      },
      "de": {
        "question": "Addieren Sie die Matrizen (zeilenweise geschrieben): [[1, 2], [3, 4]] + [[5, 0], [−1, 2]]",
        "options": [
          "[[5, 0], [−3, 8]]",
          "[[6, 2], [4, 6]]",
          "[[6, 2], [2, 6]]",
          "[[−4, 2], [4, 2]]"
        ],
        "explanation": "Einträge an gleicher Stelle addieren: [[1 + 5, 2 + 0], [3 + (−1), 4 + 2]] = [[6, 2], [2, 6]].",
        "hint": "Matrizen gleicher Größe werden eintragsweise addiert.",
        "whyWrong": [
          "Die Einträge wurden multipliziert statt addiert.",
          "Vorzeichenfehler: 3 + (−1) = 2, nicht 4.",
          null,
          "Die zweite Matrix wurde subtrahiert statt addiert."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Llogaritni prodhimin skalar: (2, −3) · (4, 1)",
        "options": [
          "11",
          "5",
          "(8, −3)",
          "4"
        ],
        "explanation": "(2, −3) · (4, 1) = 2 · 4 + (−3) · 1 = 8 − 3 = 5.",
        "hint": "Shumëzoni komponentët përkatës dhe mblidhni rezultatet.",
        "whyWrong": [
          "Gabim shenje: (−3) · 1 = −3, jo +3.",
          null,
          "Prodhimi skalar është numër, jo vektor; prodhimet duhet të mblidhen.",
          "Keni mbledhur të gjithë komponentët në vend që t'i shumëzoni çift për çift."
        ]
      },
      "en": {
        "question": "Compute the dot product: (2, −3) · (4, 1)",
        "options": [
          "11",
          "5",
          "(8, −3)",
          "4"
        ],
        "explanation": "(2, −3) · (4, 1) = 2 · 4 + (−3) · 1 = 8 − 3 = 5.",
        "hint": "Multiply corresponding components and add the results.",
        "whyWrong": [
          "Sign error: (−3) · 1 = −3, not +3.",
          null,
          "The dot product is a number, not a vector; the products must be added.",
          "You added all components instead of multiplying them in pairs."
        ]
      },
      "de": {
        "question": "Berechnen Sie das Skalarprodukt: (2, −3) · (4, 1)",
        "options": [
          "11",
          "5",
          "(8, −3)",
          "4"
        ],
        "explanation": "(2, −3) · (4, 1) = 2 · 4 + (−3) · 1 = 8 − 3 = 5.",
        "hint": "Multiplizieren Sie die entsprechenden Komponenten und addieren Sie die Ergebnisse.",
        "whyWrong": [
          "Vorzeichenfehler: (−3) · 1 = −3, nicht +3.",
          null,
          "Das Skalarprodukt ist eine Zahl, kein Vektor; die Produkte müssen addiert werden.",
          "Alle Komponenten wurden addiert, statt sie paarweise zu multiplizieren."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Jepen pikat A(1, 2) dhe B(4, −2). Gjeni koordinatat e vektorit AB.",
        "options": [
          "(3, −4)",
          "(−3, 4)",
          "(5, 0)",
          "(3, 4)"
        ],
        "explanation": "AB = B − A = (4 − 1, −2 − 2) = (3, −4).",
        "hint": "Koordinatat e vektorit = koordinatat e pikës së mbarimit minus koordinatat e pikës së fillimit.",
        "whyWrong": [
          null,
          "Keni llogaritur A − B, pra vektorin BA.",
          "Keni mbledhur koordinatat në vend që t'i zbritni.",
          "Gabim shenje: −2 − 2 = −4, jo 4."
        ]
      },
      "en": {
        "question": "Given the points A(1, 2) and B(4, −2), find the components of the vector AB.",
        "options": [
          "(3, −4)",
          "(−3, 4)",
          "(5, 0)",
          "(3, 4)"
        ],
        "explanation": "AB = B − A = (4 − 1, −2 − 2) = (3, −4).",
        "hint": "Vector components = coordinates of the end point minus coordinates of the start point.",
        "whyWrong": [
          null,
          "You computed A − B, i.e. the vector BA.",
          "You added the coordinates instead of subtracting them.",
          "Sign error: −2 − 2 = −4, not 4."
        ]
      },
      "de": {
        "question": "Gegeben sind die Punkte A(1, 2) und B(4, −2). Bestimmen Sie die Koordinaten des Vektors AB.",
        "options": [
          "(3, −4)",
          "(−3, 4)",
          "(5, 0)",
          "(3, 4)"
        ],
        "explanation": "AB = B − A = (4 − 1, −2 − 2) = (3, −4).",
        "hint": "Vektorkoordinaten = Koordinaten des Endpunkts minus Koordinaten des Anfangspunkts.",
        "whyWrong": [
          null,
          "Es wurde A − B berechnet, also der Vektor BA.",
          "Die Koordinaten wurden addiert statt subtrahiert.",
          "Vorzeichenfehler: −2 − 2 = −4, nicht 4."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Për cilën vlerë të k vektorët (2, k) dhe (3, 6) janë paralelë (kolinearë)?",
        "options": [
          "k = −1",
          "k = 5",
          "k = 4",
          "k = 9"
        ],
        "explanation": "Duhet 2/3 = k/6, pra k = 6 · 2/3 = 4. Kontroll: (2, 4) = (2/3) · (3, 6) ✓",
        "hint": "Vektorët paralelë kanë komponentë proporcionalë.",
        "whyWrong": [
          "Me k = −1 prodhimi skalar është 0, pra vektorët janë pingulë, jo paralelë.",
          "Keni krahasuar ndryshimet (3 − 2 = 6 − k) në vend të raporteve.",
          null,
          "Keni përmbysur raportin: k = 3 · 6/2."
        ]
      },
      "en": {
        "question": "For which value of k are the vectors (2, k) and (3, 6) parallel (collinear)?",
        "options": [
          "k = −1",
          "k = 5",
          "k = 4",
          "k = 9"
        ],
        "explanation": "We need 2/3 = k/6, so k = 6 · 2/3 = 4. Check: (2, 4) = (2/3) · (3, 6) ✓",
        "hint": "Parallel vectors have proportional components.",
        "whyWrong": [
          "With k = −1 the dot product is 0, so the vectors are perpendicular, not parallel.",
          "You compared differences (3 − 2 = 6 − k) instead of ratios.",
          null,
          "You inverted the ratio: k = 3 · 6/2."
        ]
      },
      "de": {
        "question": "Für welchen Wert von k sind die Vektoren (2, k) und (3, 6) parallel (kollinear)?",
        "options": [
          "k = −1",
          "k = 5",
          "k = 4",
          "k = 9"
        ],
        "explanation": "Es muss 2/3 = k/6 gelten, also k = 6 · 2/3 = 4. Probe: (2, 4) = (2/3) · (3, 6) ✓",
        "hint": "Parallele Vektoren haben zueinander proportionale Komponenten.",
        "whyWrong": [
          "Mit k = −1 ist das Skalarprodukt 0; die Vektoren sind dann orthogonal, nicht parallel.",
          "Es wurden Differenzen (3 − 2 = 6 − k) statt Verhältnisse verglichen.",
          null,
          "Das Verhältnis wurde umgedreht: k = 3 · 6/2."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni përcaktorin e matricës [[3, 2], [1, 4]].",
        "options": [
          "14",
          "−10",
          "24",
          "10"
        ],
        "explanation": "det = 3 · 4 − 2 · 1 = 12 − 2 = 10.",
        "hint": "Zbritni prodhimin e diagonales dytësore nga prodhimi i diagonales kryesore.",
        "whyWrong": [
          "Keni mbledhur prodhimet e diagonaleve: 12 + 2.",
          "Keni zbritur në rend të kundërt: 2 − 12.",
          "Keni shumëzuar të gjithë elementet: 3 · 2 · 1 · 4.",
          null
        ]
      },
      "en": {
        "question": "Compute the determinant of the matrix [[3, 2], [1, 4]].",
        "options": [
          "14",
          "−10",
          "24",
          "10"
        ],
        "explanation": "det = 3 · 4 − 2 · 1 = 12 − 2 = 10.",
        "hint": "Subtract the product of the off-diagonal entries from the product of the main diagonal.",
        "whyWrong": [
          "You added the diagonal products: 12 + 2.",
          "You subtracted in the wrong order: 2 − 12.",
          "You multiplied all four entries: 3 · 2 · 1 · 4.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie die Determinante der Matrix [[3, 2], [1, 4]].",
        "options": [
          "14",
          "−10",
          "24",
          "10"
        ],
        "explanation": "det = 3 · 4 − 2 · 1 = 12 − 2 = 10.",
        "hint": "Subtrahieren Sie das Produkt der Nebendiagonale vom Produkt der Hauptdiagonale.",
        "whyWrong": [
          "Die Diagonalprodukte wurden addiert: 12 + 2.",
          "In falscher Reihenfolge subtrahiert: 2 − 12.",
          "Alle vier Einträge wurden multipliziert: 3 · 2 · 1 · 4.",
          null
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Jepen A = [[1, 2], [0, 1]] dhe B = [[3, 0], [1, 2]]. Gjeni prodhimin A · B.",
        "options": [
          "[[3, 0], [0, 2]]",
          "[[5, 4], [1, 2]]",
          "[[3, 6], [1, 4]]",
          "[[3, 5], [0, 2]]"
        ],
        "explanation": "Rreshti 1: (1 · 3 + 2 · 1, 1 · 0 + 2 · 2) = (5, 4). Rreshti 2: (0 · 3 + 1 · 1, 0 · 0 + 1 · 2) = (1, 2). A · B = [[5, 4], [1, 2]].",
        "hint": "Shumëzoni rreshtat e A-së me shtyllat e B-së.",
        "whyWrong": [
          "Keni shumëzuar elementet në të njëjtat pozicione; matricat nuk shumëzohen kështu.",
          null,
          "Keni llogaritur B · A; shumëzimi i matricave nuk është komutativ.",
          "Keni shumëzuar rreshtat e A-së me rreshtat e B-së, jo me shtyllat."
        ]
      },
      "en": {
        "question": "Given A = [[1, 2], [0, 1]] and B = [[3, 0], [1, 2]], find the product A · B.",
        "options": [
          "[[3, 0], [0, 2]]",
          "[[5, 4], [1, 2]]",
          "[[3, 6], [1, 4]]",
          "[[3, 5], [0, 2]]"
        ],
        "explanation": "Row 1: (1 · 3 + 2 · 1, 1 · 0 + 2 · 2) = (5, 4). Row 2: (0 · 3 + 1 · 1, 0 · 0 + 1 · 2) = (1, 2). A · B = [[5, 4], [1, 2]].",
        "hint": "Multiply the rows of A by the columns of B.",
        "whyWrong": [
          "You multiplied entries in the same positions; that is not matrix multiplication.",
          null,
          "You computed B · A; matrix multiplication is not commutative.",
          "You multiplied rows of A by rows of B instead of columns."
        ]
      },
      "de": {
        "question": "Gegeben sind A = [[1, 2], [0, 1]] und B = [[3, 0], [1, 2]]. Berechnen Sie das Produkt A · B.",
        "options": [
          "[[3, 0], [0, 2]]",
          "[[5, 4], [1, 2]]",
          "[[3, 6], [1, 4]]",
          "[[3, 5], [0, 2]]"
        ],
        "explanation": "Zeile 1: (1 · 3 + 2 · 1, 1 · 0 + 2 · 2) = (5, 4). Zeile 2: (0 · 3 + 1 · 1, 0 · 0 + 1 · 2) = (1, 2). A · B = [[5, 4], [1, 2]].",
        "hint": "Multiplizieren Sie die Zeilen von A mit den Spalten von B.",
        "whyWrong": [
          "Es wurden Einträge an gleicher Stelle multipliziert; so funktioniert die Matrizenmultiplikation nicht.",
          null,
          "Es wurde B · A berechnet; die Matrizenmultiplikation ist nicht kommutativ.",
          "Zeilen von A wurden mit Zeilen von B statt mit Spalten multipliziert."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Për cilën vlerë të m vektorët (m, 2) dhe (3, −6) janë pingulë?",
        "options": [
          "m = −1",
          "m = −4",
          "m = 4",
          "m = 12"
        ],
        "explanation": "(m, 2) · (3, −6) = 3m − 12 = 0, pra m = 4. Kontroll: 4 · 3 + 2 · (−6) = 0 ✓",
        "hint": "Kur janë dy vektorë pingulë? Mendoni për prodhimin skalar.",
        "whyWrong": [
          "Me m = −1 vektorët janë paralelë, jo pingulë.",
          "Gabim shenje: 2 · (−6) = −12, prandaj 3m = 12.",
          null,
          "Keni harruar ta pjesëtoni 12 me 3."
        ]
      },
      "en": {
        "question": "For which value of m are the vectors (m, 2) and (3, −6) perpendicular?",
        "options": [
          "m = −1",
          "m = −4",
          "m = 4",
          "m = 12"
        ],
        "explanation": "(m, 2) · (3, −6) = 3m − 12 = 0, so m = 4. Check: 4 · 3 + 2 · (−6) = 0 ✓",
        "hint": "When are two vectors perpendicular? Think about the dot product.",
        "whyWrong": [
          "With m = −1 the vectors are parallel, not perpendicular.",
          "Sign error: 2 · (−6) = −12, so 3m = 12.",
          null,
          "You forgot to divide 12 by 3."
        ]
      },
      "de": {
        "question": "Für welchen Wert von m sind die Vektoren (m, 2) und (3, −6) orthogonal (senkrecht zueinander)?",
        "options": [
          "m = −1",
          "m = −4",
          "m = 4",
          "m = 12"
        ],
        "explanation": "(m, 2) · (3, −6) = 3m − 12 = 0, also m = 4. Probe: 4 · 3 + 2 · (−6) = 0 ✓",
        "hint": "Wann stehen zwei Vektoren senkrecht aufeinander? Denken Sie an das Skalarprodukt.",
        "whyWrong": [
          "Mit m = −1 sind die Vektoren parallel, nicht orthogonal.",
          "Vorzeichenfehler: 2 · (−6) = −12, also 3m = 12.",
          null,
          "Es wurde vergessen, 12 durch 3 zu teilen."
        ]
      }
    }
  ]
};
