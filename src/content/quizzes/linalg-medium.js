// Quiz set "linalg-medium" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "linalg-medium",
  "difficulty": "intermediate",
  "icon": "⊞",
  "color": "#8E44AD",
  "i18n": {
    "al": {
      "title": "Matrica & Përcaktorë",
      "category": "Algjebër Lineare",
      "duration": "12 min"
    },
    "en": {
      "title": "Matrices & Determinants",
      "category": "Linear Algebra",
      "duration": "12 min"
    },
    "de": {
      "title": "Matrizen & Determinanten",
      "category": "Lineare Algebra",
      "duration": "12 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Llogaritni përcaktorin e matricës [[3, 5], [2, 4]].",
        "options": [
          "22",
          "2",
          "−2",
          "7"
        ],
        "explanation": "Për [[a, b], [c, d]]: det = ad − bc = 3 · 4 − 5 · 2 = 12 − 10 = 2.",
        "hint": "Krahasoni prodhimin e diagonales kryesore me prodhimin e diagonales tjetër.",
        "whyWrong": [
          "Prodhimet e diagonaleve janë mbledhur; ato duhen zbritur (ad − bc).",
          null,
          "Është llogaritur bc − ad; renditja e zbritjes është e kundërt.",
          "Kjo është shuma e elementeve të diagonales (gjurma), jo përcaktori."
        ]
      },
      "en": {
        "question": "Calculate the determinant of the matrix [[3, 5], [2, 4]].",
        "options": [
          "22",
          "2",
          "−2",
          "7"
        ],
        "explanation": "For [[a, b], [c, d]]: det = ad − bc = 3 · 4 − 5 · 2 = 12 − 10 = 2.",
        "hint": "Compare the product of the main diagonal with the product of the other diagonal.",
        "whyWrong": [
          "The diagonal products were added; they must be subtracted (ad − bc).",
          null,
          "bc − ad was calculated; the subtraction is the wrong way round.",
          "That is the sum of the diagonal entries (the trace), not the determinant."
        ]
      },
      "de": {
        "question": "Berechnen Sie die Determinante der Matrix [[3, 5], [2, 4]].",
        "options": [
          "22",
          "2",
          "−2",
          "7"
        ],
        "explanation": "Für [[a, b], [c, d]] gilt: det = ad − bc = 3 · 4 − 5 · 2 = 12 − 10 = 2.",
        "hint": "Vergleichen Sie das Produkt der Hauptdiagonale mit dem der Nebendiagonale.",
        "whyWrong": [
          "Die Diagonalprodukte wurden addiert; sie müssen subtrahiert werden (ad − bc).",
          null,
          "Es wurde bc − ad gerechnet; die Subtraktion ist vertauscht.",
          "Das ist die Summe der Diagonalelemente (die Spur), nicht die Determinante."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Jepen A = [[1, 2], [3, 4]] dhe B = [[2, 0], [1, 3]]. Llogaritni prodhimin A · B.",
        "options": [
          "[[2, 0], [3, 12]]",
          "[[2, 4], [10, 14]]",
          "[[4, 10], [6, 12]]",
          "[[4, 6], [10, 12]]"
        ],
        "explanation": "Elementi (i, j) = rreshti i i A herë shtylla j e B. (1,1): 1 · 2 + 2 · 1 = 4; (1,2): 1 · 0 + 2 · 3 = 6; (2,1): 3 · 2 + 4 · 1 = 10; (2,2): 3 · 0 + 4 · 3 = 12. A · B = [[4, 6], [10, 12]].",
        "hint": "Shumëzoni rreshtat e A me shtyllat e B (rresht × shtyllë).",
        "whyWrong": [
          "Janë shumëzuar elementet në të njëjtin pozicion; kjo nuk është prodhimi i matricave.",
          "Ky është B · A; shumëzimi i matricave nuk është komutativ.",
          "Rezultati i saktë është shkruar i transpozuar (rreshtat dhe shtyllat janë ndërruar).",
          null
        ]
      },
      "en": {
        "question": "Given A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 3]]. Calculate the product A · B.",
        "options": [
          "[[2, 0], [3, 12]]",
          "[[2, 4], [10, 14]]",
          "[[4, 10], [6, 12]]",
          "[[4, 6], [10, 12]]"
        ],
        "explanation": "Entry (i, j) = row i of A times column j of B. (1,1): 1 · 2 + 2 · 1 = 4; (1,2): 1 · 0 + 2 · 3 = 6; (2,1): 3 · 2 + 4 · 1 = 10; (2,2): 3 · 0 + 4 · 3 = 12. A · B = [[4, 6], [10, 12]].",
        "hint": "Multiply rows of A by columns of B (row × column).",
        "whyWrong": [
          "Entries in the same position were multiplied; that is not the matrix product.",
          "That is B · A; matrix multiplication is not commutative.",
          "The correct result was written transposed (rows and columns swapped).",
          null
        ]
      },
      "de": {
        "question": "Gegeben sind A = [[1, 2], [3, 4]] und B = [[2, 0], [1, 3]]. Berechnen Sie das Produkt A · B.",
        "options": [
          "[[2, 0], [3, 12]]",
          "[[2, 4], [10, 14]]",
          "[[4, 10], [6, 12]]",
          "[[4, 6], [10, 12]]"
        ],
        "explanation": "Element (i, j) = Zeile i von A mal Spalte j von B. (1,1): 1 · 2 + 2 · 1 = 4; (1,2): 1 · 0 + 2 · 3 = 6; (2,1): 3 · 2 + 4 · 1 = 10; (2,2): 3 · 0 + 4 · 3 = 12. A · B = [[4, 6], [10, 12]].",
        "hint": "Multiplizieren Sie Zeilen von A mit Spalten von B (Zeile × Spalte).",
        "whyWrong": [
          "Es wurden Elemente an gleicher Position multipliziert; das ist nicht das Matrixprodukt.",
          "Das ist B · A; die Matrixmultiplikation ist nicht kommutativ.",
          "Das richtige Ergebnis wurde transponiert notiert (Zeilen und Spalten vertauscht).",
          null
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Gjeni transpozën Aᵀ të matricës A = [[1, 2, 3], [4, 5, 6]].",
        "options": [
          "[[1, 4], [2, 5], [3, 6]]",
          "[[1, 2], [3, 4], [5, 6]]",
          "[[4, 5, 6], [1, 2, 3]]",
          "[[6, 5, 4], [3, 2, 1]]"
        ],
        "explanation": "Te transpoza rreshtat bëhen shtylla: (1, 2, 3) bëhet shtylla e parë, (4, 5, 6) shtylla e dytë. A është 2×3, pra Aᵀ është 3×2: [[1, 4], [2, 5], [3, 6]].",
        "hint": "Mendoni si ndryshon madhësia e matricës kur rreshtat bëhen shtylla.",
        "whyWrong": [
          null,
          "Elementet janë rishpërndarë me radhë në 3 rreshta, jo të transpozuara.",
          "Janë ndërruar vetëm rreshtat; madhësia duhet të bëhet 3×2.",
          "Elementet janë kthyer së prapthi; transpozimi ndërron rreshtat me shtyllat."
        ]
      },
      "en": {
        "question": "Find the transpose Aᵀ of the matrix A = [[1, 2, 3], [4, 5, 6]].",
        "options": [
          "[[1, 4], [2, 5], [3, 6]]",
          "[[1, 2], [3, 4], [5, 6]]",
          "[[4, 5, 6], [1, 2, 3]]",
          "[[6, 5, 4], [3, 2, 1]]"
        ],
        "explanation": "In the transpose, rows become columns: (1, 2, 3) becomes the first column, (4, 5, 6) the second. A is 2×3, so Aᵀ is 3×2: [[1, 4], [2, 5], [3, 6]].",
        "hint": "Think about how the size changes when rows become columns.",
        "whyWrong": [
          null,
          "The entries were refilled row by row into 3 rows, not transposed.",
          "Only the rows were swapped; the size must become 3×2.",
          "The entries were reversed; transposing swaps rows with columns."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Transponierte Aᵀ der Matrix A = [[1, 2, 3], [4, 5, 6]].",
        "options": [
          "[[1, 4], [2, 5], [3, 6]]",
          "[[1, 2], [3, 4], [5, 6]]",
          "[[4, 5, 6], [1, 2, 3]]",
          "[[6, 5, 4], [3, 2, 1]]"
        ],
        "explanation": "Bei der Transponierten werden Zeilen zu Spalten: (1, 2, 3) wird die erste Spalte, (4, 5, 6) die zweite. A ist 2×3, also ist Aᵀ 3×2: [[1, 4], [2, 5], [3, 6]].",
        "hint": "Überlegen Sie, wie sich das Format ändert, wenn Zeilen zu Spalten werden.",
        "whyWrong": [
          null,
          "Die Elemente wurden der Reihe nach auf 3 Zeilen verteilt, nicht transponiert.",
          "Es wurden nur die Zeilen vertauscht; das Format muss 3×2 werden.",
          "Die Elemente wurden umgedreht; Transponieren vertauscht Zeilen und Spalten."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Gjeni matricën inverse A⁻¹ të matricës A = [[4, 7], [2, 4]].",
        "options": [
          "[[4, −7], [−2, 4]]",
          "[[2, 7/2], [1, 2]]",
          "[[2, −7/2], [−1, 2]]",
          "[[2, −1], [−7/2, 2]]"
        ],
        "explanation": "det A = 4 · 4 − 7 · 2 = 2. A⁻¹ = (1 / det A) · [[d, −b], [−c, a]] = 1/2 · [[4, −7], [−2, 4]] = [[2, −7/2], [−1, 2]].",
        "hint": "Llogaritni fillimisht përcaktorin, pastaj përdorni formulën e inversit për matricë 2×2.",
        "whyWrong": [
          "Kjo është matrica adjunguar; nuk është pjesëtuar me det A = 2.",
          "Nuk janë ndryshuar shenjat e elementeve b dhe c.",
          null,
          "Elementet jashtë diagonales janë vendosur në pozicione të ndërruara."
        ]
      },
      "en": {
        "question": "Find the inverse A⁻¹ of the matrix A = [[4, 7], [2, 4]].",
        "options": [
          "[[4, −7], [−2, 4]]",
          "[[2, 7/2], [1, 2]]",
          "[[2, −7/2], [−1, 2]]",
          "[[2, −1], [−7/2, 2]]"
        ],
        "explanation": "det A = 4 · 4 − 7 · 2 = 2. A⁻¹ = (1 / det A) · [[d, −b], [−c, a]] = 1/2 · [[4, −7], [−2, 4]] = [[2, −7/2], [−1, 2]].",
        "hint": "First calculate the determinant, then use the 2×2 inverse formula.",
        "whyWrong": [
          "That is the adjugate; it was not divided by det A = 2.",
          "The signs of the entries b and c were not changed.",
          null,
          "The off-diagonal entries were put in swapped positions."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Inverse A⁻¹ der Matrix A = [[4, 7], [2, 4]].",
        "options": [
          "[[4, −7], [−2, 4]]",
          "[[2, 7/2], [1, 2]]",
          "[[2, −7/2], [−1, 2]]",
          "[[2, −1], [−7/2, 2]]"
        ],
        "explanation": "det A = 4 · 4 − 7 · 2 = 2. A⁻¹ = (1 / det A) · [[d, −b], [−c, a]] = 1/2 · [[4, −7], [−2, 4]] = [[2, −7/2], [−1, 2]].",
        "hint": "Berechnen Sie zuerst die Determinante und verwenden Sie dann die Formel für die 2×2-Inverse.",
        "whyWrong": [
          "Das ist die Adjunkte; es wurde nicht durch det A = 2 geteilt.",
          "Die Vorzeichen der Elemente b und c wurden nicht geändert.",
          null,
          "Die Elemente außerhalb der Diagonale stehen an vertauschten Positionen."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Për cilën vlerë të k matrica [[2, k], [3, 6]] nuk ka invers?",
        "options": [
          "−4",
          "4",
          "9",
          "0"
        ],
        "explanation": "Matrica nuk ka invers kur det = 0: 2 · 6 − k · 3 = 12 − 3k = 0, pra k = 4.",
        "hint": "Një matricë katrore nuk ka invers kur përcaktori i saj është zero.",
        "whyWrong": [
          "Gabim në shenjë: është zgjidhur 12 + 3k = 0.",
          null,
          "Janë shumëzuar elementet e gabuara: 2k − 3 · 6 në vend të 2 · 6 − 3k.",
          "Një element zero nuk e bën matricën singulare; për k = 0, det = 12 ≠ 0."
        ]
      },
      "en": {
        "question": "For which value of k does the matrix [[2, k], [3, 6]] have no inverse?",
        "options": [
          "−4",
          "4",
          "9",
          "0"
        ],
        "explanation": "The matrix has no inverse when det = 0: 2 · 6 − k · 3 = 12 − 3k = 0, so k = 4.",
        "hint": "A square matrix has no inverse when its determinant is zero.",
        "whyWrong": [
          "Sign error: 12 + 3k = 0 was solved.",
          null,
          "The wrong entries were multiplied: 2k − 3 · 6 instead of 2 · 6 − 3k.",
          "A zero entry does not make the matrix singular; for k = 0, det = 12 ≠ 0."
        ]
      },
      "de": {
        "question": "Für welchen Wert von k ist die Matrix [[2, k], [3, 6]] nicht invertierbar?",
        "options": [
          "−4",
          "4",
          "9",
          "0"
        ],
        "explanation": "Die Matrix ist nicht invertierbar, wenn det = 0: 2 · 6 − k · 3 = 12 − 3k = 0, also k = 4.",
        "hint": "Eine quadratische Matrix ist nicht invertierbar, wenn ihre Determinante null ist.",
        "whyWrong": [
          "Vorzeichenfehler: Es wurde 12 + 3k = 0 gelöst.",
          null,
          "Es wurden die falschen Elemente multipliziert: 2k − 3 · 6 statt 2 · 6 − 3k.",
          "Ein Nullelement macht die Matrix nicht singulär; für k = 0 ist det = 12 ≠ 0."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Zgjidhni sistemin: 2x + y = 7 dhe x − y = 2.",
        "options": [
          "x = 1, y = 3",
          "x = −3, y = −1",
          "x = 3, y = −1",
          "x = 3, y = 1"
        ],
        "explanation": "Me rregullin e Kramerit: D = 2 · (−1) − 1 · 1 = −3, Dx = 7 · (−1) − 1 · 2 = −9, Dy = 2 · 2 − 7 · 1 = −3. x = Dx / D = 3, y = Dy / D = 1. Kontroll: 2 · 3 + 1 = 7 dhe 3 − 1 = 2.",
        "hint": "Përdorni rregullin e Kramerit ose mblidhni ekuacionet për të eliminuar y.",
        "whyWrong": [
          "Vlerat e x dhe y janë ndërruar: 2 · 1 + 3 = 5 ≠ 7.",
          "Gabim në shenjën e D (D = −3, jo 3); kontrolli jep 2 · (−3) − 1 = −7 ≠ 7.",
          "Gabim në shenjë te y: 2 · 3 + (−1) = 5 ≠ 7.",
          null
        ]
      },
      "en": {
        "question": "Solve the system: 2x + y = 7 and x − y = 2.",
        "options": [
          "x = 1, y = 3",
          "x = −3, y = −1",
          "x = 3, y = −1",
          "x = 3, y = 1"
        ],
        "explanation": "By Cramer’s rule: D = 2 · (−1) − 1 · 1 = −3, Dx = 7 · (−1) − 1 · 2 = −9, Dy = 2 · 2 − 7 · 1 = −3. x = Dx / D = 3, y = Dy / D = 1. Check: 2 · 3 + 1 = 7 and 3 − 1 = 2.",
        "hint": "Use Cramer’s rule, or add the equations to eliminate y.",
        "whyWrong": [
          "x and y were swapped: 2 · 1 + 3 = 5 ≠ 7.",
          "Sign error in D (D = −3, not 3); the check gives 2 · (−3) − 1 = −7 ≠ 7.",
          "Sign error in y: 2 · 3 + (−1) = 5 ≠ 7.",
          null
        ]
      },
      "de": {
        "question": "Lösen Sie das Gleichungssystem: 2x + y = 7 und x − y = 2.",
        "options": [
          "x = 1, y = 3",
          "x = −3, y = −1",
          "x = 3, y = −1",
          "x = 3, y = 1"
        ],
        "explanation": "Mit der Cramerschen Regel: D = 2 · (−1) − 1 · 1 = −3, Dx = 7 · (−1) − 1 · 2 = −9, Dy = 2 · 2 − 7 · 1 = −3. x = Dx / D = 3, y = Dy / D = 1. Probe: 2 · 3 + 1 = 7 und 3 − 1 = 2.",
        "hint": "Verwenden Sie die Cramersche Regel oder addieren Sie die Gleichungen, um y zu eliminieren.",
        "whyWrong": [
          "x und y wurden vertauscht: 2 · 1 + 3 = 5 ≠ 7.",
          "Vorzeichenfehler bei D (D = −3, nicht 3); die Probe ergibt 2 · (−3) − 1 = −7 ≠ 7.",
          "Vorzeichenfehler bei y: 2 · 3 + (−1) = 5 ≠ 7.",
          null
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "A është matricë 2×3 dhe B është matricë 3×4. Cila është madhësia e prodhimit A · B?",
        "options": [
          "2×4",
          "3×3",
          "4×2",
          "A · B nuk është i përcaktuar"
        ],
        "explanation": "Prodhimi ekziston, sepse numri i shtyllave të A (3) është i barabartë me numrin e rreshtave të B (3). Rezultati ka rreshtat e A dhe shtyllat e B: 2×4.",
        "hint": "Krahasoni dimensionet e brendshme dhe shikoni cilat mbeten.",
        "whyWrong": [
          null,
          "3 janë dimensionet e brendshme që duhet të përputhen; rezultati merr dimensionet e jashtme.",
          "Renditja është e kundërt: rreshtat vijnë nga A, shtyllat nga B.",
          "Prodhimi është i përcaktuar, sepse A ka 3 shtylla dhe B ka 3 rreshta."
        ]
      },
      "en": {
        "question": "A is a 2×3 matrix and B is a 3×4 matrix. What is the size of the product A · B?",
        "options": [
          "2×4",
          "3×3",
          "4×2",
          "A · B is not defined"
        ],
        "explanation": "The product exists because the number of columns of A (3) equals the number of rows of B (3). The result has the rows of A and the columns of B: 2×4.",
        "hint": "Compare the inner dimensions and see which ones remain.",
        "whyWrong": [
          null,
          "3 is the inner dimension that must match; the result takes the outer dimensions.",
          "The order is reversed: rows come from A, columns from B.",
          "The product is defined because A has 3 columns and B has 3 rows."
        ]
      },
      "de": {
        "question": "A ist eine 2×3-Matrix und B eine 3×4-Matrix. Welches Format hat das Produkt A · B?",
        "options": [
          "2×4",
          "3×3",
          "4×2",
          "A · B ist nicht definiert"
        ],
        "explanation": "Das Produkt existiert, weil die Spaltenzahl von A (3) gleich der Zeilenzahl von B (3) ist. Das Ergebnis hat die Zeilen von A und die Spalten von B: 2×4.",
        "hint": "Vergleichen Sie die inneren Dimensionen und sehen Sie, welche übrig bleiben.",
        "whyWrong": [
          null,
          "3 ist die innere Dimension, die übereinstimmen muss; das Ergebnis hat die äußeren Dimensionen.",
          "Die Reihenfolge ist vertauscht: Zeilen kommen von A, Spalten von B.",
          "Das Produkt ist definiert, da A 3 Spalten und B 3 Zeilen hat."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Llogaritni përcaktorin e matricës [[2, 1, 0], [0, 3, 1], [1, 0, 1]].",
        "options": [
          "5",
          "6",
          "7",
          "4"
        ],
        "explanation": "Zbërthim sipas rreshtit të parë: 2 · (3 · 1 − 1 · 0) − 1 · (0 · 1 − 1 · 1) + 0 = 2 · 3 − 1 · (−1) = 6 + 1 = 7.",
        "hint": "Zbërthejeni sipas rreshtit të parë dhe kujdes me shenjat + − + të kofaktorëve.",
        "whyWrong": [
          "Shenja e termit të dytë është gabuar: −1 · (−1) = +1, jo −1.",
          "Është shumëzuar vetëm diagonalja; kjo vlen vetëm për matrica trekëndore.",
          null,
          "Minori i parë nuk është shumëzuar me elementin 2."
        ]
      },
      "en": {
        "question": "Calculate the determinant of the matrix [[2, 1, 0], [0, 3, 1], [1, 0, 1]].",
        "options": [
          "5",
          "6",
          "7",
          "4"
        ],
        "explanation": "Expansion along the first row: 2 · (3 · 1 − 1 · 0) − 1 · (0 · 1 − 1 · 1) + 0 = 2 · 3 − 1 · (−1) = 6 + 1 = 7.",
        "hint": "Expand along the first row and watch the + − + signs of the cofactors.",
        "whyWrong": [
          "The second term has the wrong sign: −1 · (−1) = +1, not −1.",
          "Only the diagonal was multiplied; that works only for triangular matrices.",
          null,
          "The first minor was not multiplied by the entry 2."
        ]
      },
      "de": {
        "question": "Berechnen Sie die Determinante der Matrix [[2, 1, 0], [0, 3, 1], [1, 0, 1]].",
        "options": [
          "5",
          "6",
          "7",
          "4"
        ],
        "explanation": "Entwicklung nach der ersten Zeile: 2 · (3 · 1 − 1 · 0) − 1 · (0 · 1 − 1 · 1) + 0 = 2 · 3 − 1 · (−1) = 6 + 1 = 7.",
        "hint": "Entwickeln Sie nach der ersten Zeile und achten Sie auf die Vorzeichen + − + der Kofaktoren.",
        "whyWrong": [
          "Der zweite Term hat das falsche Vorzeichen: −1 · (−1) = +1, nicht −1.",
          "Es wurde nur die Diagonale multipliziert; das gilt nur für Dreiecksmatrizen.",
          null,
          "Der erste Minor wurde nicht mit dem Element 2 multipliziert."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "A është matricë 2×2 me det(A) = 3. Sa është det(2A)?",
        "options": [
          "6",
          "9",
          "5",
          "12"
        ],
        "explanation": "Matrica 2A ka secilin nga 2 rreshtat të shumëzuar me 2, dhe çdo rresht e shumëzon përcaktorin me 2. det(2A) = 2² · det(A) = 4 · 3 = 12. (Në përgjithësi, për n×n: det(kA) = kⁿ · det(A).)",
        "hint": "Mendoni sa rreshta shumëzohen me 2 dhe si ndikon secili te përcaktori.",
        "whyWrong": [
          "Faktori 2 merret një herë për secilin rresht, pra 2², jo 2.",
          "Është ngritur në katror përcaktori (3²) në vend të faktorit 2.",
          "Faktori është mbledhur me përcaktorin, por ai e shumëzon.",
          null
        ]
      },
      "en": {
        "question": "A is a 2×2 matrix with det(A) = 3. What is det(2A)?",
        "options": [
          "6",
          "9",
          "5",
          "12"
        ],
        "explanation": "In 2A each of the 2 rows is multiplied by 2, and each row multiplies the determinant by 2. det(2A) = 2² · det(A) = 4 · 3 = 12. (In general, for n×n: det(kA) = kⁿ · det(A).)",
        "hint": "Think about how many rows get multiplied by 2 and how each affects the determinant.",
        "whyWrong": [
          "The factor 2 counts once per row, so 2², not 2.",
          "The determinant was squared (3²) instead of the factor 2.",
          "The factor was added to the determinant, but it multiplies it.",
          null
        ]
      },
      "de": {
        "question": "A ist eine 2×2-Matrix mit det(A) = 3. Wie groß ist det(2A)?",
        "options": [
          "6",
          "9",
          "5",
          "12"
        ],
        "explanation": "In 2A wird jede der 2 Zeilen mit 2 multipliziert, und jede Zeile multipliziert die Determinante mit 2. det(2A) = 2² · det(A) = 4 · 3 = 12. (Allgemein für n×n: det(kA) = kⁿ · det(A).)",
        "hint": "Überlegen Sie, wie viele Zeilen mit 2 multipliziert werden und wie jede die Determinante beeinflusst.",
        "whyWrong": [
          "Der Faktor 2 zählt einmal pro Zeile, also 2², nicht 2.",
          "Es wurde die Determinante quadriert (3²) statt des Faktors 2.",
          "Der Faktor wurde zur Determinante addiert, er multipliziert sie aber.",
          null
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "A dhe B janë matrica 2×2 me det(A) = 2 dhe det(B) = −3. Sa është det(A · B)?",
        "options": [
          "−1",
          "−6",
          "6",
          "Nuk mund të gjendet pa i njohur A dhe B"
        ],
        "explanation": "Përcaktori i prodhimit është prodhimi i përcaktorëve: det(A · B) = det(A) · det(B) = 2 · (−3) = −6.",
        "hint": "Kujtoni vetinë e përcaktorit për prodhimin e dy matricave katrore.",
        "whyWrong": [
          "Përcaktorët janë mbledhur; për prodhimin e matricave ata shumëzohen.",
          null,
          "Është humbur shenja minus: 2 · (−3) = −6.",
          "A · B nuk duhet llogaritur; mjafton vetia det(A · B) = det(A) · det(B)."
        ]
      },
      "en": {
        "question": "A and B are 2×2 matrices with det(A) = 2 and det(B) = −3. What is det(A · B)?",
        "options": [
          "−1",
          "−6",
          "6",
          "Cannot be found without knowing A and B"
        ],
        "explanation": "The determinant of a product is the product of the determinants: det(A · B) = det(A) · det(B) = 2 · (−3) = −6.",
        "hint": "Recall the determinant property for a product of two square matrices.",
        "whyWrong": [
          "The determinants were added; for a matrix product they are multiplied.",
          null,
          "The minus sign was lost: 2 · (−3) = −6.",
          "A · B need not be computed; det(A · B) = det(A) · det(B) is enough."
        ]
      },
      "de": {
        "question": "A und B sind 2×2-Matrizen mit det(A) = 2 und det(B) = −3. Wie groß ist det(A · B)?",
        "options": [
          "−1",
          "−6",
          "6",
          "Ohne A und B nicht bestimmbar"
        ],
        "explanation": "Die Determinante eines Produkts ist das Produkt der Determinanten: det(A · B) = det(A) · det(B) = 2 · (−3) = −6.",
        "hint": "Erinnern Sie sich an die Eigenschaft der Determinante für das Produkt zweier quadratischer Matrizen.",
        "whyWrong": [
          "Die Determinanten wurden addiert; beim Matrixprodukt werden sie multipliziert.",
          null,
          "Das Minuszeichen ging verloren: 2 · (−3) = −6.",
          "A · B muss nicht berechnet werden; det(A · B) = det(A) · det(B) genügt."
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 5
      },
      "al": {
        "question": "Për cilën vlerë të k përcaktori i matricës [[2, 3], [1, k]] është i barabartë me 7?",
        "explanation": "det = 2 · k − 3 · 1 = 2k − 3. Nga 2k − 3 = 7 del 2k = 10, pra k = 5.",
        "hint": "Për matricën [[a, b], [c, d]] përcaktori është ad − bc.",
        "commonMistakes": [
          {
            "value": 2,
            "why": "Keni llogaritur ad + bc: 2k + 3 = 7 ⇒ k = 2."
          },
          {
            "value": -2,
            "why": "Keni llogaritur bc − ad: 3 − 2k = 7 ⇒ k = −2."
          }
        ]
      },
      "en": {
        "question": "For which value of k does the matrix [[2, 3], [1, k]] have determinant 7?",
        "explanation": "det = 2 · k − 3 · 1 = 2k − 3. From 2k − 3 = 7 we get 2k = 10, so k = 5.",
        "hint": "For the matrix [[a, b], [c, d]] the determinant is ad − bc.",
        "commonMistakes": [
          {
            "value": 2,
            "why": "You computed ad + bc: 2k + 3 = 7 ⇒ k = 2."
          },
          {
            "value": -2,
            "why": "You computed bc − ad: 3 − 2k = 7 ⇒ k = −2."
          }
        ]
      },
      "de": {
        "question": "Für welchen Wert von k hat die Matrix [[2, 3], [1, k]] die Determinante 7?",
        "explanation": "det = 2 · k − 3 · 1 = 2k − 3. Aus 2k − 3 = 7 folgt 2k = 10, also k = 5.",
        "hint": "Für die Matrix [[a, b], [c, d]] ist die Determinante ad − bc.",
        "commonMistakes": [
          {
            "value": 2,
            "why": "Sie haben ad + bc gerechnet: 2k + 3 = 7 ⇒ k = 2."
          },
          {
            "value": -2,
            "why": "Sie haben bc − ad gerechnet: 3 − 2k = 7 ⇒ k = −2."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 15
      },
      "al": {
        "question": "Jepet A = [[1, 2], [3, 4]]. Llogaritni elementin në rreshtin 2 dhe shtyllën 1 të matricës A² = A · A.",
        "explanation": "Elementi (2, 1) = rreshti 2 i A · shtylla 1 e A = (3, 4) · (1, 3) = 3 · 1 + 4 · 3 = 3 + 12 = 15. (A² = [[7, 10], [15, 22]].)",
        "hint": "Elementi (i, j) i prodhimit është prodhimi skalar i rreshtit i me shtyllën j.",
        "commonMistakes": [
          {
            "value": 9,
            "why": "Keni ngritur në katror vetëm elementin 3; A² nuk llogaritet element për element."
          },
          {
            "value": 22,
            "why": "Ky është elementi në rreshtin 2 dhe shtyllën 2: 3 · 2 + 4 · 4 = 22."
          }
        ]
      },
      "en": {
        "question": "Given A = [[1, 2], [3, 4]]. Calculate the entry in row 2, column 1 of A² = A · A.",
        "explanation": "Entry (2, 1) = row 2 of A · column 1 of A = (3, 4) · (1, 3) = 3 · 1 + 4 · 3 = 3 + 12 = 15. (A² = [[7, 10], [15, 22]].)",
        "hint": "Entry (i, j) of a product is the dot product of row i with column j.",
        "commonMistakes": [
          {
            "value": 9,
            "why": "You only squared the entry 3; A² is not computed entry by entry."
          },
          {
            "value": 22,
            "why": "That is the entry in row 2, column 2: 3 · 2 + 4 · 4 = 22."
          }
        ]
      },
      "de": {
        "question": "Gegeben ist A = [[1, 2], [3, 4]]. Berechnen Sie den Eintrag in Zeile 2, Spalte 1 von A² = A · A.",
        "explanation": "Eintrag (2, 1) = Zeile 2 von A · Spalte 1 von A = (3, 4) · (1, 3) = 3 · 1 + 4 · 3 = 3 + 12 = 15. (A² = [[7, 10], [15, 22]].)",
        "hint": "Der Eintrag (i, j) eines Produkts ist das Skalarprodukt von Zeile i und Spalte j.",
        "commonMistakes": [
          {
            "value": 9,
            "why": "Sie haben nur den Eintrag 3 quadriert; A² wird nicht eintragsweise berechnet."
          },
          {
            "value": 22,
            "why": "Das ist der Eintrag in Zeile 2, Spalte 2: 3 · 2 + 4 · 4 = 22."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": true,
      "al": {
        "question": "Nëse në një matricë katrore ndërrojmë vendet e dy rreshtave, përcaktori ndryshon shenjë.",
        "explanation": "Për [[a, b], [c, d]]: det = ad − bc. Pas ndërrimit të rreshtave: [[c, d], [a, b]] me det = cb − da = −(ad − bc). Kjo vlen për matricat katrore të çdo madhësie. Pohimi është i vërtetë.",
        "hint": "Provoni me një matricë 2×2 [[a, b], [c, d]] dhe ndërroni rreshtat.",
        "whyWrong": "Pohimi nuk është i gabuar: ndërrimi i dy rreshtave shumëzon përcaktorin me −1 (vlera absolute mbetet e njëjtë, por shenja ndryshon)."
      },
      "en": {
        "question": "Swapping two rows of a square matrix changes the sign of its determinant.",
        "explanation": "For [[a, b], [c, d]]: det = ad − bc. After swapping the rows: [[c, d], [a, b]] with det = cb − da = −(ad − bc). This holds for square matrices of any size. The statement is true.",
        "hint": "Try a 2×2 matrix [[a, b], [c, d]] and swap its rows.",
        "whyWrong": "The statement is not false: swapping two rows multiplies the determinant by −1 (the absolute value stays the same, but the sign changes)."
      },
      "de": {
        "question": "Vertauscht man in einer quadratischen Matrix zwei Zeilen, so ändert die Determinante ihr Vorzeichen.",
        "explanation": "Für [[a, b], [c, d]]: det = ad − bc. Nach dem Zeilentausch: [[c, d], [a, b]] mit det = cb − da = −(ad − bc). Das gilt für quadratische Matrizen jeder Größe. Die Aussage ist wahr.",
        "hint": "Probieren Sie eine 2×2-Matrix [[a, b], [c, d]] und vertauschen Sie die Zeilen.",
        "whyWrong": "Die Aussage ist nicht falsch: Ein Zeilentausch multipliziert die Determinante mit −1 (der Betrag bleibt gleich, das Vorzeichen ändert sich)."
      }
    }
  ]
};
