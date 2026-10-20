// Quiz set "linalg-hard" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).

export default {
  "id": "linalg-hard",
  "difficulty": "advanced",
  "icon": "⊕",
  "color": "#6C3483",
  "i18n": {
    "al": {
      "title": "Vektorë & Vlera Vetjake",
      "category": "Algjebër Lineare",
      "duration": "15 min"
    },
    "en": {
      "title": "Vectors & Eigenvalues",
      "category": "Linear Algebra",
      "duration": "15 min"
    },
    "de": {
      "title": "Vektoren & Eigenwerte",
      "category": "Lineare Algebra",
      "duration": "15 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Gjeni rangun e matricës [[1, 2, 3], [2, 4, 6], [1, 0, 1]].",
        "options": [
          "3",
          "1",
          "2",
          "0"
        ],
        "explanation": "Rreshti i dytë = 2 · rreshti i parë, pra është i varur. Rreshtat (1, 2, 3) dhe (1, 0, 1) nuk janë shumëfisha të njëri-tjetrit, pra janë linearisht të pavarur. Rangu = 2.",
        "hint": "Kontrolloni nëse ndonjë rresht është shumëfish ose kombinim i rreshtave të tjerë.",
        "whyWrong": [
          "Rreshti i dytë është 2 herë i pari, pra nuk ka 3 rreshta të pavarur.",
          "Vetëm rreshti i dytë varet nga i pari; rreshti i tretë nuk është shumëfish i tij.",
          null,
          "det = 0 tregon vetëm se rangu < 3; rangun 0 e ka vetëm matrica zero."
        ]
      },
      "en": {
        "question": "Find the rank of the matrix [[1, 2, 3], [2, 4, 6], [1, 0, 1]].",
        "options": [
          "3",
          "1",
          "2",
          "0"
        ],
        "explanation": "Row 2 = 2 · row 1, so it is dependent. Rows (1, 2, 3) and (1, 0, 1) are not multiples of each other, so they are linearly independent. Rank = 2.",
        "hint": "Check whether any row is a multiple or combination of the others.",
        "whyWrong": [
          "Row 2 is twice row 1, so there are not 3 independent rows.",
          "Only row 2 depends on row 1; row 3 is not a multiple of it.",
          null,
          "det = 0 only shows rank < 3; only the zero matrix has rank 0."
        ]
      },
      "de": {
        "question": "Bestimmen Sie den Rang der Matrix [[1, 2, 3], [2, 4, 6], [1, 0, 1]].",
        "options": [
          "3",
          "1",
          "2",
          "0"
        ],
        "explanation": "Zeile 2 = 2 · Zeile 1, also linear abhängig. Die Zeilen (1, 2, 3) und (1, 0, 1) sind keine Vielfachen voneinander, also linear unabhängig. Rang = 2.",
        "hint": "Prüfen Sie, ob eine Zeile ein Vielfaches oder eine Kombination der anderen ist.",
        "whyWrong": [
          "Zeile 2 ist das Doppelte von Zeile 1, also gibt es keine 3 unabhängigen Zeilen.",
          "Nur Zeile 2 hängt von Zeile 1 ab; Zeile 3 ist kein Vielfaches davon.",
          null,
          "det = 0 zeigt nur Rang < 3; Rang 0 hat nur die Nullmatrix."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Jepen vektorët u = (1, 2, 2) dhe v = (2, −1, 2). Llogaritni cos θ, ku θ është këndi ndërmjet tyre.",
        "options": [
          "4/9",
          "4",
          "4/3",
          "8/9"
        ],
        "explanation": "u · v = 1 · 2 + 2 · (−1) + 2 · 2 = 4. |u| = √(1 + 4 + 4) = 3, |v| = √(4 + 1 + 4) = 3. cos θ = (u · v) / (|u| · |v|) = 4/9.",
        "hint": "Përdorni prodhimin skalar dhe gjatësitë e të dy vektorëve.",
        "whyWrong": [
          null,
          "Ky është vetëm prodhimi skalar u · v; duhet pjesëtuar me |u| · |v|.",
          "Është pjesëtuar vetëm me gjatësinë e njërit vektor.",
          "Gabim në shenjë: 2 · (−1) = −2, jo +2."
        ]
      },
      "en": {
        "question": "Given the vectors u = (1, 2, 2) and v = (2, −1, 2). Calculate cos θ, where θ is the angle between them.",
        "options": [
          "4/9",
          "4",
          "4/3",
          "8/9"
        ],
        "explanation": "u · v = 1 · 2 + 2 · (−1) + 2 · 2 = 4. |u| = √(1 + 4 + 4) = 3, |v| = √(4 + 1 + 4) = 3. cos θ = (u · v) / (|u| · |v|) = 4/9.",
        "hint": "Use the dot product and the lengths of both vectors.",
        "whyWrong": [
          null,
          "That is only the dot product u · v; it must be divided by |u| · |v|.",
          "Divided by the length of only one vector.",
          "Sign error: 2 · (−1) = −2, not +2."
        ]
      },
      "de": {
        "question": "Gegeben sind die Vektoren u = (1, 2, 2) und v = (2, −1, 2). Berechnen Sie cos θ, wobei θ der Winkel zwischen ihnen ist.",
        "options": [
          "4/9",
          "4",
          "4/3",
          "8/9"
        ],
        "explanation": "u · v = 1 · 2 + 2 · (−1) + 2 · 2 = 4. |u| = √(1 + 4 + 4) = 3, |v| = √(4 + 1 + 4) = 3. cos θ = (u · v) / (|u| · |v|) = 4/9.",
        "hint": "Verwenden Sie das Skalarprodukt und die Längen beider Vektoren.",
        "whyWrong": [
          null,
          "Das ist nur das Skalarprodukt u · v; es muss durch |u| · |v| geteilt werden.",
          "Es wurde nur durch die Länge eines Vektors geteilt.",
          "Vorzeichenfehler: 2 · (−1) = −2, nicht +2."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Për cilën vlerë të k vektorët u = (2, k, 1) dhe v = (3, −2, 4) janë pingulë (ortogonalë)?",
        "options": [
          "−5",
          "3",
          "0",
          "5"
        ],
        "explanation": "Pingulë ⇔ u · v = 0: 2 · 3 + k · (−2) + 1 · 4 = 10 − 2k = 0, pra k = 5.",
        "hint": "Dy vektorë janë pingulë kur prodhimi i tyre skalar është zero.",
        "whyWrong": [
          "Gabim në shenjë: k · (−2) = −2k, prandaj 10 − 2k = 0.",
          "Është harruar prodhimi i komponenteve të treta (1 · 4).",
          "Për k = 0, u · v = 10 ≠ 0; një komponente zero nuk mjafton.",
          null
        ]
      },
      "en": {
        "question": "For which value of k are the vectors u = (2, k, 1) and v = (3, −2, 4) perpendicular (orthogonal)?",
        "options": [
          "−5",
          "3",
          "0",
          "5"
        ],
        "explanation": "Perpendicular ⇔ u · v = 0: 2 · 3 + k · (−2) + 1 · 4 = 10 − 2k = 0, so k = 5.",
        "hint": "Two vectors are perpendicular when their dot product is zero.",
        "whyWrong": [
          "Sign error: k · (−2) = −2k, so 10 − 2k = 0.",
          "The product of the third components (1 · 4) was forgotten.",
          "For k = 0, u · v = 10 ≠ 0; a zero component is not enough.",
          null
        ]
      },
      "de": {
        "question": "Für welchen Wert von k sind die Vektoren u = (2, k, 1) und v = (3, −2, 4) orthogonal?",
        "options": [
          "−5",
          "3",
          "0",
          "5"
        ],
        "explanation": "Orthogonal ⇔ u · v = 0: 2 · 3 + k · (−2) + 1 · 4 = 10 − 2k = 0, also k = 5.",
        "hint": "Zwei Vektoren sind orthogonal, wenn ihr Skalarprodukt null ist.",
        "whyWrong": [
          "Vorzeichenfehler: k · (−2) = −2k, also 10 − 2k = 0.",
          "Das Produkt der dritten Komponenten (1 · 4) wurde vergessen.",
          "Für k = 0 ist u · v = 10 ≠ 0; eine Nullkomponente genügt nicht.",
          null
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Gjeni vlerat vetjake të matricës [[4, 1], [2, 3]].",
        "options": [
          "λ₁ = 4, λ₂ = 3",
          "λ₁ = 2, λ₂ = 5",
          "λ₁ = −2, λ₂ = −5",
          "λ₁ = 7, λ₂ = 10"
        ],
        "explanation": "Ekuacioni karakteristik: det(A − λI) = (4 − λ)(3 − λ) − 1 · 2 = λ² − 7λ + 10 = 0. (λ − 2)(λ − 5) = 0, pra λ₁ = 2, λ₂ = 5.",
        "hint": "Zgjidhni ekuacionin karakteristik det(A − λI) = 0.",
        "whyWrong": [
          "Elementet e diagonales janë vlera vetjake vetëm te matricat trekëndore; këtu elementet jashtë diagonales nuk janë 0.",
          null,
          "Gabim në shenjë gjatë faktorizimit: rrënjët e λ² − 7λ + 10 = 0 janë pozitive.",
          "7 dhe 10 janë shuma (gjurma) dhe prodhimi (përcaktori) i vlerave vetjake, jo vetë vlerat."
        ]
      },
      "en": {
        "question": "Find the eigenvalues of the matrix [[4, 1], [2, 3]].",
        "options": [
          "λ₁ = 4, λ₂ = 3",
          "λ₁ = 2, λ₂ = 5",
          "λ₁ = −2, λ₂ = −5",
          "λ₁ = 7, λ₂ = 10"
        ],
        "explanation": "Characteristic equation: det(A − λI) = (4 − λ)(3 − λ) − 1 · 2 = λ² − 7λ + 10 = 0. (λ − 2)(λ − 5) = 0, so λ₁ = 2, λ₂ = 5.",
        "hint": "Solve the characteristic equation det(A − λI) = 0.",
        "whyWrong": [
          "Diagonal entries are eigenvalues only for triangular matrices; here the off-diagonal entries are not 0.",
          null,
          "Sign error when factorising: the roots of λ² − 7λ + 10 = 0 are positive.",
          "7 and 10 are the sum (trace) and product (determinant) of the eigenvalues, not the eigenvalues."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Eigenwerte der Matrix [[4, 1], [2, 3]].",
        "options": [
          "λ₁ = 4, λ₂ = 3",
          "λ₁ = 2, λ₂ = 5",
          "λ₁ = −2, λ₂ = −5",
          "λ₁ = 7, λ₂ = 10"
        ],
        "explanation": "Charakteristische Gleichung: det(A − λI) = (4 − λ)(3 − λ) − 1 · 2 = λ² − 7λ + 10 = 0. (λ − 2)(λ − 5) = 0, also λ₁ = 2, λ₂ = 5.",
        "hint": "Lösen Sie die charakteristische Gleichung det(A − λI) = 0.",
        "whyWrong": [
          "Diagonalelemente sind nur bei Dreiecksmatrizen Eigenwerte; hier sind die Elemente außerhalb der Diagonale nicht 0.",
          null,
          "Vorzeichenfehler beim Faktorisieren: Die Lösungen von λ² − 7λ + 10 = 0 sind positiv.",
          "7 und 10 sind Summe (Spur) und Produkt (Determinante) der Eigenwerte, nicht die Eigenwerte selbst."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Cili nga vektorët e mëposhtëm është vektor vetjak i matricës A = [[2, 1], [1, 2]]?",
        "options": [
          "(1, 1)",
          "(1, 0)",
          "(1, 2)",
          "(2, 1)"
        ],
        "explanation": "A · (1, 1) = (2 + 1, 1 + 2) = (3, 3) = 3 · (1, 1), pra (1, 1) është vektor vetjak me vlerë vetjake λ = 3. Për vektorët e tjerë A · v nuk është shumëfish i v.",
        "hint": "Llogaritni A · v dhe kontrolloni nëse rezultati është shumëfish i v.",
        "whyWrong": [
          null,
          "A · (1, 0) = (2, 1), që nuk është shumëfish i (1, 0).",
          "A · (1, 2) = (4, 5), që nuk është shumëfish i (1, 2).",
          "A · (2, 1) = (5, 4), që nuk është shumëfish i (2, 1)."
        ]
      },
      "en": {
        "question": "Which of the following vectors is an eigenvector of the matrix A = [[2, 1], [1, 2]]?",
        "options": [
          "(1, 1)",
          "(1, 0)",
          "(1, 2)",
          "(2, 1)"
        ],
        "explanation": "A · (1, 1) = (2 + 1, 1 + 2) = (3, 3) = 3 · (1, 1), so (1, 1) is an eigenvector with eigenvalue λ = 3. For the other vectors A · v is not a multiple of v.",
        "hint": "Compute A · v and check whether the result is a multiple of v.",
        "whyWrong": [
          null,
          "A · (1, 0) = (2, 1), which is not a multiple of (1, 0).",
          "A · (1, 2) = (4, 5), which is not a multiple of (1, 2).",
          "A · (2, 1) = (5, 4), which is not a multiple of (2, 1)."
        ]
      },
      "de": {
        "question": "Welcher der folgenden Vektoren ist ein Eigenvektor der Matrix A = [[2, 1], [1, 2]]?",
        "options": [
          "(1, 1)",
          "(1, 0)",
          "(1, 2)",
          "(2, 1)"
        ],
        "explanation": "A · (1, 1) = (2 + 1, 1 + 2) = (3, 3) = 3 · (1, 1), also ist (1, 1) ein Eigenvektor zum Eigenwert λ = 3. Bei den anderen Vektoren ist A · v kein Vielfaches von v.",
        "hint": "Berechnen Sie A · v und prüfen Sie, ob das Ergebnis ein Vielfaches von v ist.",
        "whyWrong": [
          null,
          "A · (1, 0) = (2, 1), das ist kein Vielfaches von (1, 0).",
          "A · (1, 2) = (4, 5), das ist kein Vielfaches von (1, 2).",
          "A · (2, 1) = (5, 4), das ist kein Vielfaches von (2, 1)."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni prodhimin vektorial u × v për u = (1, 0, 2) dhe v = (0, 1, 3).",
        "options": [
          "(2, 3, −1)",
          "(0, 0, 6)",
          "(−2, 3, 1)",
          "(−2, −3, 1)"
        ],
        "explanation": "u × v = (u₂v₃ − u₃v₂, u₃v₁ − u₁v₃, u₁v₂ − u₂v₁) = (0 · 3 − 2 · 1, 2 · 0 − 1 · 3, 1 · 1 − 0 · 0) = (−2, −3, 1). Kontroll: (u × v) · u = −2 + 0 + 2 = 0.",
        "hint": "Përdorni përcaktorin me i, j, k në rreshtin e parë dhe kujdes me shenjën e komponentes së mesme.",
        "whyWrong": [
          "Ky është v × u; prodhimi vektorial ndryshon shenjë kur ndërrohet radha.",
          "Janë shumëzuar komponentet përkatëse; ky nuk është prodhimi vektorial.",
          "Shenja e komponentes së mesme është gabuar (kofaktori i saj merr minus).",
          null
        ]
      },
      "en": {
        "question": "Calculate the cross product u × v for u = (1, 0, 2) and v = (0, 1, 3).",
        "options": [
          "(2, 3, −1)",
          "(0, 0, 6)",
          "(−2, 3, 1)",
          "(−2, −3, 1)"
        ],
        "explanation": "u × v = (u₂v₃ − u₃v₂, u₃v₁ − u₁v₃, u₁v₂ − u₂v₁) = (0 · 3 − 2 · 1, 2 · 0 − 1 · 3, 1 · 1 − 0 · 0) = (−2, −3, 1). Check: (u × v) · u = −2 + 0 + 2 = 0.",
        "hint": "Use the determinant with i, j, k in the first row and watch the sign of the middle component.",
        "whyWrong": [
          "That is v × u; the cross product changes sign when the order is swapped.",
          "Corresponding components were multiplied; that is not the cross product.",
          "The middle component has the wrong sign (its cofactor takes a minus).",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie das Kreuzprodukt u × v für u = (1, 0, 2) und v = (0, 1, 3).",
        "options": [
          "(2, 3, −1)",
          "(0, 0, 6)",
          "(−2, 3, 1)",
          "(−2, −3, 1)"
        ],
        "explanation": "u × v = (u₂v₃ − u₃v₂, u₃v₁ − u₁v₃, u₁v₂ − u₂v₁) = (0 · 3 − 2 · 1, 2 · 0 − 1 · 3, 1 · 1 − 0 · 0) = (−2, −3, 1). Probe: (u × v) · u = −2 + 0 + 2 = 0.",
        "hint": "Verwenden Sie die Determinante mit i, j, k in der ersten Zeile und achten Sie auf das Vorzeichen der mittleren Komponente.",
        "whyWrong": [
          "Das ist v × u; das Kreuzprodukt wechselt beim Vertauschen das Vorzeichen.",
          "Es wurden entsprechende Komponenten multipliziert; das ist nicht das Kreuzprodukt.",
          "Die mittlere Komponente hat das falsche Vorzeichen (ihr Kofaktor bekommt ein Minus).",
          null
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Për cilën vlerë të k matrica [[1, 2, 0], [0, k, 1], [2, 0, 1]] është singulare (nuk ka invers)?",
        "options": [
          "4",
          "0",
          "−4",
          "Për asnjë vlerë të k"
        ],
        "explanation": "Zbërthim sipas rreshtit të parë: det = 1 · (k · 1 − 1 · 0) − 2 · (0 · 1 − 1 · 2) + 0 = k + 4. Singulare ⇔ det = 0 ⇔ k = −4.",
        "hint": "Shprehni përcaktorin si funksion të k dhe barazojeni me zero.",
        "whyWrong": [
          "Gabim në shenjën e kofaktorit të dytë: −2 · (−2) = +4, prandaj det = k + 4.",
          "Për k = 0, det = 4 ≠ 0; një zero në diagonale nuk e bën matricën singulare.",
          null,
          "Përcaktori k + 4 bëhet zero për k = −4, pra një vlerë e tillë ekziston."
        ]
      },
      "en": {
        "question": "For which value of k is the matrix [[1, 2, 0], [0, k, 1], [2, 0, 1]] singular (not invertible)?",
        "options": [
          "4",
          "0",
          "−4",
          "For no value of k"
        ],
        "explanation": "Expansion along the first row: det = 1 · (k · 1 − 1 · 0) − 2 · (0 · 1 − 1 · 2) + 0 = k + 4. Singular ⇔ det = 0 ⇔ k = −4.",
        "hint": "Write the determinant in terms of k and set it equal to zero.",
        "whyWrong": [
          "Sign error in the second cofactor: −2 · (−2) = +4, so det = k + 4.",
          "For k = 0, det = 4 ≠ 0; a zero on the diagonal does not make the matrix singular.",
          null,
          "The determinant k + 4 is zero for k = −4, so such a value exists."
        ]
      },
      "de": {
        "question": "Für welchen Wert von k ist die Matrix [[1, 2, 0], [0, k, 1], [2, 0, 1]] singulär (nicht invertierbar)?",
        "options": [
          "4",
          "0",
          "−4",
          "Für keinen Wert von k"
        ],
        "explanation": "Entwicklung nach der ersten Zeile: det = 1 · (k · 1 − 1 · 0) − 2 · (0 · 1 − 1 · 2) + 0 = k + 4. Singulär ⇔ det = 0 ⇔ k = −4.",
        "hint": "Drücken Sie die Determinante in Abhängigkeit von k aus und setzen Sie sie gleich null.",
        "whyWrong": [
          "Vorzeichenfehler beim zweiten Kofaktor: −2 · (−2) = +4, also det = k + 4.",
          "Für k = 0 ist det = 4 ≠ 0; eine Null auf der Diagonale macht die Matrix nicht singulär.",
          null,
          "Die Determinante k + 4 wird für k = −4 null, also gibt es einen solchen Wert."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Llogaritni projeksionin skalar të vektorit u = (2, 3) mbi vektorin v = (4, 3).",
        "options": [
          "17",
          "17/5",
          "17/25",
          "17/√13"
        ],
        "explanation": "u · v = 2 · 4 + 3 · 3 = 17, |v| = √(16 + 9) = 5. Projeksioni skalar = (u · v) / |v| = 17/5 = 3,4.",
        "hint": "Projeksioni skalar mbi v përdor prodhimin skalar dhe gjatësinë e v.",
        "whyWrong": [
          "Ky është vetëm prodhimi skalar; duhet pjesëtuar me |v|.",
          null,
          "Është pjesëtuar me |v|² = 25; ky është koeficienti i projeksionit vektorial.",
          "Është pjesëtuar me |u| = √13 në vend të |v| = 5."
        ]
      },
      "en": {
        "question": "Calculate the scalar projection of u = (2, 3) onto v = (4, 3).",
        "options": [
          "17",
          "17/5",
          "17/25",
          "17/√13"
        ],
        "explanation": "u · v = 2 · 4 + 3 · 3 = 17, |v| = √(16 + 9) = 5. Scalar projection = (u · v) / |v| = 17/5 = 3.4.",
        "hint": "The scalar projection onto v uses the dot product and the length of v.",
        "whyWrong": [
          "That is only the dot product; it must be divided by |v|.",
          null,
          "Divided by |v|² = 25; that is the coefficient of the vector projection.",
          "Divided by |u| = √13 instead of |v| = 5."
        ]
      },
      "de": {
        "question": "Berechnen Sie die skalare Projektion von u = (2, 3) auf v = (4, 3).",
        "options": [
          "17",
          "17/5",
          "17/25",
          "17/√13"
        ],
        "explanation": "u · v = 2 · 4 + 3 · 3 = 17, |v| = √(16 + 9) = 5. Skalare Projektion = (u · v) / |v| = 17/5 = 3,4.",
        "hint": "Die skalare Projektion auf v verwendet das Skalarprodukt und die Länge von v.",
        "whyWrong": [
          "Das ist nur das Skalarprodukt; es muss durch |v| geteilt werden.",
          null,
          "Es wurde durch |v|² = 25 geteilt; das ist der Koeffizient der Vektorprojektion.",
          "Es wurde durch |u| = √13 statt durch |v| = 5 geteilt."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "A dhe B janë matrica n×n të invertueshme. Me çfarë është e barabartë (A · B)⁻¹?",
        "options": [
          "A⁻¹B⁻¹",
          "A⁻¹ + B⁻¹",
          "BA",
          "B⁻¹A⁻¹"
        ],
        "explanation": "(A · B) · (B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = A · I · A⁻¹ = I. Prandaj (A · B)⁻¹ = B⁻¹A⁻¹: inverset shkruhen në renditje të kundërt.",
        "hint": "Kontrolloni cili kandidat, i shumëzuar me A · B, jep matricën njësi I.",
        "whyWrong": [
          "Renditja është e gabuar; shumëzimi i matricave në përgjithësi nuk është komutativ.",
          "Inversi i prodhimit nuk është shuma e inverseve.",
          "Ndërrimi i renditjes nuk mjafton; duhen edhe inverset e A dhe B.",
          null
        ]
      },
      "en": {
        "question": "A and B are invertible n×n matrices. What is (A · B)⁻¹ equal to?",
        "options": [
          "A⁻¹B⁻¹",
          "A⁻¹ + B⁻¹",
          "BA",
          "B⁻¹A⁻¹"
        ],
        "explanation": "(A · B) · (B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = A · I · A⁻¹ = I. Therefore (A · B)⁻¹ = B⁻¹A⁻¹: the inverses come in reverse order.",
        "hint": "Check which candidate, multiplied by A · B, gives the identity matrix I.",
        "whyWrong": [
          "Wrong order; matrix multiplication is not commutative in general.",
          "The inverse of a product is not the sum of the inverses.",
          "Reversing the order is not enough; the inverses of A and B are needed too.",
          null
        ]
      },
      "de": {
        "question": "A und B sind invertierbare n×n-Matrizen. Wem ist (A · B)⁻¹ gleich?",
        "options": [
          "A⁻¹B⁻¹",
          "A⁻¹ + B⁻¹",
          "BA",
          "B⁻¹A⁻¹"
        ],
        "explanation": "(A · B) · (B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = A · I · A⁻¹ = I. Also (A · B)⁻¹ = B⁻¹A⁻¹: Die Inversen stehen in umgekehrter Reihenfolge.",
        "hint": "Prüfen Sie, welcher Kandidat multipliziert mit A · B die Einheitsmatrix I ergibt.",
        "whyWrong": [
          "Falsche Reihenfolge; die Matrixmultiplikation ist im Allgemeinen nicht kommutativ.",
          "Die Inverse eines Produkts ist nicht die Summe der Inversen.",
          "Die Reihenfolge umzukehren genügt nicht; man braucht auch die Inversen von A und B.",
          null
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Zgjidhni sistemin: x + y + z = 6; 2x − y + z = 3; x + 2y − z = 2. Gjeni (x, y, z).",
        "options": [
          "(1, 2, 3)",
          "(3, 2, 1)",
          "(1, 3, 2)",
          "(2, 1, 3)"
        ],
        "explanation": "Ekuacioni 1 + ekuacioni 3: 2x + 3y = 8. Ekuacioni 2 + ekuacioni 3: 3x + y = 5, pra y = 5 − 3x. Atëherë 2x + 15 − 9x = 8 ⇒ x = 1, y = 2, z = 6 − 1 − 2 = 3. Zgjidhja: (1, 2, 3).",
        "hint": "Eliminoni z duke mbledhur ekuacionin e tretë me secilin nga dy të parët.",
        "whyWrong": [
          null,
          "Plotëson ekuacionin e parë, por 2 · 3 − 2 + 1 = 5 ≠ 3.",
          "Plotëson ekuacionin e parë, por 2 · 1 − 3 + 2 = 1 ≠ 3.",
          "Plotëson ekuacionin e parë, por 2 · 2 − 1 + 3 = 6 ≠ 3."
        ]
      },
      "en": {
        "question": "Solve the system: x + y + z = 6; 2x − y + z = 3; x + 2y − z = 2. Find (x, y, z).",
        "options": [
          "(1, 2, 3)",
          "(3, 2, 1)",
          "(1, 3, 2)",
          "(2, 1, 3)"
        ],
        "explanation": "Equation 1 + equation 3: 2x + 3y = 8. Equation 2 + equation 3: 3x + y = 5, so y = 5 − 3x. Then 2x + 15 − 9x = 8 ⇒ x = 1, y = 2, z = 6 − 1 − 2 = 3. Solution: (1, 2, 3).",
        "hint": "Eliminate z by adding the third equation to each of the first two.",
        "whyWrong": [
          null,
          "It satisfies the first equation, but 2 · 3 − 2 + 1 = 5 ≠ 3.",
          "It satisfies the first equation, but 2 · 1 − 3 + 2 = 1 ≠ 3.",
          "It satisfies the first equation, but 2 · 2 − 1 + 3 = 6 ≠ 3."
        ]
      },
      "de": {
        "question": "Lösen Sie das Gleichungssystem: x + y + z = 6; 2x − y + z = 3; x + 2y − z = 2. Bestimmen Sie (x, y, z).",
        "options": [
          "(1, 2, 3)",
          "(3, 2, 1)",
          "(1, 3, 2)",
          "(2, 1, 3)"
        ],
        "explanation": "Gleichung 1 + Gleichung 3: 2x + 3y = 8. Gleichung 2 + Gleichung 3: 3x + y = 5, also y = 5 − 3x. Dann 2x + 15 − 9x = 8 ⇒ x = 1, y = 2, z = 6 − 1 − 2 = 3. Lösung: (1, 2, 3).",
        "hint": "Eliminieren Sie z, indem Sie die dritte Gleichung zu jeder der ersten beiden addieren.",
        "whyWrong": [
          null,
          "Erfüllt die erste Gleichung, aber 2 · 3 − 2 + 1 = 5 ≠ 3.",
          "Erfüllt die erste Gleichung, aber 2 · 1 − 3 + 2 = 1 ≠ 3.",
          "Erfüllt die erste Gleichung, aber 2 · 2 − 1 + 3 = 6 ≠ 3."
        ]
      }
    }
  ]
};
