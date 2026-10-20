// Quiz set "alg-hard" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).

export default {
  "id": "alg-hard",
  "difficulty": "advanced",
  "icon": "²",
  "color": "#5A4FCF",
  "i18n": {
    "al": {
      "title": "Ekuacione Kuadratike",
      "category": "Algjebër",
      "duration": "12 min"
    },
    "en": {
      "title": "Quadratic Equations",
      "category": "Algebra",
      "duration": "12 min"
    },
    "de": {
      "title": "Quadratische Gleichungen",
      "category": "Algebra",
      "duration": "12 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Zgjidhni ekuacionin: 2x² − 5x − 3 = 0",
        "options": [
          "x₁ = −3, x₂ = 1/2",
          "x₁ = 6, x₂ = −1",
          "x₁ = 3, x₂ = −1/2",
          "x₁ = 3, x₂ = −1"
        ],
        "explanation": "Δ = (−5)² − 4 · 2 · (−3) = 25 + 24 = 49. x = (5 ± 7)/4, pra x₁ = 12/4 = 3 dhe x₂ = −2/4 = −1/2. Faktorizimi: (2x + 1)(x − 3) = 0 ✓",
        "hint": "Llogaritni diskriminantin dhe kujdes me emëruesin 2a.",
        "whyWrong": [
          "Gabim shenje: keni përdorur +b në vend të −b në formulë.",
          "Keni pjesëtuar me 2 në vend të 2a = 4.",
          null,
          "Nga 2x + 1 = 0 keni harruar të pjesëtoni me 2: x = −1/2, jo −1."
        ]
      },
      "en": {
        "question": "Solve: 2x² − 5x − 3 = 0",
        "options": [
          "x₁ = −3, x₂ = 1/2",
          "x₁ = 6, x₂ = −1",
          "x₁ = 3, x₂ = −1/2",
          "x₁ = 3, x₂ = −1"
        ],
        "explanation": "Δ = (−5)² − 4 · 2 · (−3) = 25 + 24 = 49. x = (5 ± 7)/4, so x₁ = 12/4 = 3 and x₂ = −2/4 = −1/2. Factored: (2x + 1)(x − 3) = 0 ✓",
        "hint": "Compute the discriminant and be careful with the denominator 2a.",
        "whyWrong": [
          "Sign error: you used +b instead of −b in the formula.",
          "You divided by 2 instead of 2a = 4.",
          null,
          "From 2x + 1 = 0 you forgot to divide by 2: x = −1/2, not −1."
        ]
      },
      "de": {
        "question": "Lösen Sie: 2x² − 5x − 3 = 0",
        "options": [
          "x₁ = −3, x₂ = 1/2",
          "x₁ = 6, x₂ = −1",
          "x₁ = 3, x₂ = −1/2",
          "x₁ = 3, x₂ = −1"
        ],
        "explanation": "Δ = (−5)² − 4 · 2 · (−3) = 25 + 24 = 49. x = (5 ± 7)/4, also x₁ = 12/4 = 3 und x₂ = −2/4 = −1/2. Faktorisiert: (2x + 1)(x − 3) = 0 ✓",
        "hint": "Berechnen Sie die Diskriminante und achten Sie auf den Nenner 2a.",
        "whyWrong": [
          "Vorzeichenfehler: In der Formel wurde +b statt −b verwendet.",
          "Es wurde durch 2 statt durch 2a = 4 geteilt.",
          null,
          "Aus 2x + 1 = 0 wurde nicht durch 2 geteilt: x = −1/2, nicht −1."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Sa është diskriminanti i ekuacionit 2x² − 3x − 5 = 0?",
        "options": [
          "−31",
          "31",
          "19",
          "49"
        ],
        "explanation": "a = 2, b = −3, c = −5. Δ = (−3)² − 4 · 2 · (−5) = 9 + 40 = 49. Meqë Δ > 0, ekuacioni ka dy rrënjë reale të ndryshme.",
        "hint": "Përdorni Δ = b² − 4ac dhe kujdesuni për shenjat e b-së dhe c-së.",
        "whyWrong": [
          "Keni marrë c = 5 në vend të −5: 9 − 40 = −31.",
          "Keni llogaritur (−3)² = −9; katrori është gjithmonë jonegativ.",
          "Keni harruar faktorin 4: 9 − 2 · (−5) = 19.",
          null
        ]
      },
      "en": {
        "question": "What is the discriminant of 2x² − 3x − 5 = 0?",
        "options": [
          "−31",
          "31",
          "19",
          "49"
        ],
        "explanation": "a = 2, b = −3, c = −5. Δ = (−3)² − 4 · 2 · (−5) = 9 + 40 = 49. Since Δ > 0, there are two distinct real roots.",
        "hint": "Use Δ = b² − 4ac and watch the signs of b and c.",
        "whyWrong": [
          "You took c = 5 instead of −5: 9 − 40 = −31.",
          "You computed (−3)² = −9; a square is never negative.",
          "You forgot the factor 4: 9 − 2 · (−5) = 19.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie die Diskriminante von 2x² − 3x − 5 = 0.",
        "options": [
          "−31",
          "31",
          "19",
          "49"
        ],
        "explanation": "a = 2, b = −3, c = −5. Δ = (−3)² − 4 · 2 · (−5) = 9 + 40 = 49. Da Δ > 0, gibt es zwei verschiedene reelle Lösungen.",
        "hint": "Verwenden Sie Δ = b² − 4ac und achten Sie auf die Vorzeichen von b und c.",
        "whyWrong": [
          "c = 5 statt −5 verwendet: 9 − 40 = −31.",
          "Es wurde (−3)² = −9 gerechnet; ein Quadrat ist nie negativ.",
          "Der Faktor 4 fehlt: 9 − 2 · (−5) = 19.",
          null
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Zgjidhni me formulën e rrënjëve: x² − 4x + 1 = 0",
        "options": [
          "x = 2 ± √3",
          "x = −2 ± √3",
          "x = 2 ± 2√3",
          "x = 2 ± √5"
        ],
        "explanation": "Δ = 16 − 4 = 12, √12 = 2√3. x = (4 ± 2√3)/2 = 2 ± √3. Kontroll (Viet): (2 + √3)(2 − √3) = 4 − 3 = 1 = c/a ✓",
        "hint": "Llogaritni Δ, thjeshtoni √Δ dhe pjesëtoni të gjithë numëruesin me 2a.",
        "whyWrong": [
          null,
          "Gabim shenje: në formulë −b = 4, jo −4.",
          "Keni pjesëtuar me 2 vetëm 4-shin, jo edhe 2√3.",
          "Keni llogaritur Δ = 16 + 4 = 20; duhet 16 − 4 = 12."
        ]
      },
      "en": {
        "question": "Solve using the quadratic formula: x² − 4x + 1 = 0",
        "options": [
          "x = 2 ± √3",
          "x = −2 ± √3",
          "x = 2 ± 2√3",
          "x = 2 ± √5"
        ],
        "explanation": "Δ = 16 − 4 = 12, √12 = 2√3. x = (4 ± 2√3)/2 = 2 ± √3. Check (Vieta): (2 + √3)(2 − √3) = 4 − 3 = 1 = c/a ✓",
        "hint": "Compute Δ, simplify √Δ and divide the whole numerator by 2a.",
        "whyWrong": [
          null,
          "Sign error: in the formula −b = 4, not −4.",
          "You divided only the 4 by 2, not the 2√3 as well.",
          "You computed Δ = 16 + 4 = 20; it should be 16 − 4 = 12."
        ]
      },
      "de": {
        "question": "Lösen Sie mit der Lösungsformel: x² − 4x + 1 = 0",
        "options": [
          "x = 2 ± √3",
          "x = −2 ± √3",
          "x = 2 ± 2√3",
          "x = 2 ± √5"
        ],
        "explanation": "Δ = 16 − 4 = 12, √12 = 2√3. x = (4 ± 2√3)/2 = 2 ± √3. Probe (Vieta): (2 + √3)(2 − √3) = 4 − 3 = 1 = c/a ✓",
        "hint": "Berechnen Sie Δ, vereinfachen Sie √Δ und teilen Sie den ganzen Zähler durch 2a.",
        "whyWrong": [
          null,
          "Vorzeichenfehler: In der Formel ist −b = 4, nicht −4.",
          "Nur die 4 wurde durch 2 geteilt, nicht auch 2√3.",
          "Es wurde Δ = 16 + 4 = 20 gerechnet; richtig ist 16 − 4 = 12."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Cili është kulmi i parabolës y = x² − 6x + 5?",
        "options": [
          "(−3, −4)",
          "(3, −4)",
          "(0, 5)",
          "(3, 4)"
        ],
        "explanation": "x = −(−6)/(2 · 1) = 3; y = 3² − 6 · 3 + 5 = 9 − 18 + 5 = −4. Ose: y = (x − 3)² − 4. Kulmi: (3, −4).",
        "hint": "Abshisa e kulmit është x = −b/(2a); pastaj llogaritni y-in.",
        "whyWrong": [
          "Nga (x − 3)² keni lexuar x = −3; kulmi ka x = 3.",
          null,
          "(0, 5) është prerja me boshtin y, jo kulmi.",
          "Gabim llogaritjeje: 9 − 18 + 5 = −4, jo 4."
        ]
      },
      "en": {
        "question": "What is the vertex of the parabola y = x² − 6x + 5?",
        "options": [
          "(−3, −4)",
          "(3, −4)",
          "(0, 5)",
          "(3, 4)"
        ],
        "explanation": "x = −(−6)/(2 · 1) = 3; y = 3² − 6 · 3 + 5 = 9 − 18 + 5 = −4. Or: y = (x − 3)² − 4. Vertex: (3, −4).",
        "hint": "The x-coordinate of the vertex is x = −b/(2a); then compute y.",
        "whyWrong": [
          "From (x − 3)² you read x = −3; the vertex has x = 3.",
          null,
          "(0, 5) is the y-intercept, not the vertex.",
          "Arithmetic error: 9 − 18 + 5 = −4, not 4."
        ]
      },
      "de": {
        "question": "Bestimmen Sie den Scheitelpunkt der Parabel y = x² − 6x + 5.",
        "options": [
          "(−3, −4)",
          "(3, −4)",
          "(0, 5)",
          "(3, 4)"
        ],
        "explanation": "x = −(−6)/(2 · 1) = 3; y = 3² − 6 · 3 + 5 = 9 − 18 + 5 = −4. Oder: y = (x − 3)² − 4. Scheitelpunkt: (3, −4).",
        "hint": "Die x-Koordinate des Scheitels ist x = −b/(2a); berechnen Sie dann y.",
        "whyWrong": [
          "Aus (x − 3)² wurde x = −3 abgelesen; der Scheitel hat x = 3.",
          null,
          "(0, 5) ist der Schnittpunkt mit der y-Achse, nicht der Scheitel.",
          "Rechenfehler: 9 − 18 + 5 = −4, nicht 4."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Për cilën vlerë pozitive të k ekuacioni x² + kx + 9 = 0 ka një rrënjë të dyfishtë?",
        "options": [
          "k = 3",
          "k = 36",
          "k = 18",
          "k = 6"
        ],
        "explanation": "Δ = k² − 4 · 1 · 9 = k² − 36 = 0, pra k² = 36 dhe k = 6 (k > 0). Kontroll: x² + 6x + 9 = (x + 3)² ✓",
        "hint": "Kur ka një ekuacion kuadratik rrënjë të dyfishtë? Mendoni për diskriminantin.",
        "whyWrong": [
          "Keni marrë k = √9; kushti është k² = 4 · 9.",
          "Keni ndaluar te k² = 36 pa nxjerrë rrënjën katrore.",
          "Keni marrë k = 2 · 9; duhet k = 2 · √9.",
          null
        ]
      },
      "en": {
        "question": "For which positive value of k does x² + kx + 9 = 0 have a double root?",
        "options": [
          "k = 3",
          "k = 36",
          "k = 18",
          "k = 6"
        ],
        "explanation": "Δ = k² − 4 · 1 · 9 = k² − 36 = 0, so k² = 36 and k = 6 (k > 0). Check: x² + 6x + 9 = (x + 3)² ✓",
        "hint": "When does a quadratic equation have a double root? Think about the discriminant.",
        "whyWrong": [
          "You took k = √9; the condition is k² = 4 · 9.",
          "You stopped at k² = 36 without taking the square root.",
          "You took k = 2 · 9; it should be k = 2 · √9.",
          null
        ]
      },
      "de": {
        "question": "Für welchen positiven Wert von k hat x² + kx + 9 = 0 eine doppelte Lösung?",
        "options": [
          "k = 3",
          "k = 36",
          "k = 18",
          "k = 6"
        ],
        "explanation": "Δ = k² − 4 · 1 · 9 = k² − 36 = 0, also k² = 36 und k = 6 (k > 0). Probe: x² + 6x + 9 = (x + 3)² ✓",
        "hint": "Wann hat eine quadratische Gleichung eine doppelte Lösung? Denken Sie an die Diskriminante.",
        "whyWrong": [
          "Es wurde k = √9 genommen; die Bedingung lautet k² = 4 · 9.",
          "Bei k² = 36 wurde die Wurzel nicht gezogen.",
          "Es wurde k = 2 · 9 genommen; richtig ist k = 2 · √9.",
          null
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Faktorizoni: 4x² − 25",
        "options": [
          "(2x − 5)²",
          "(4x − 5)(4x + 5)",
          "(2x − 5)(2x + 5)",
          "(2x − 25)(2x + 25)"
        ],
        "explanation": "4x² − 25 = (2x)² − 5² = (2x − 5)(2x + 5). Kontroll: 4x² + 10x − 10x − 25 = 4x² − 25 ✓",
        "hint": "Shkruani të dyja kufizat si katrorë dhe përdorni formulën e ndryshimit të katrorëve.",
        "whyWrong": [
          "(2x − 5)² = 4x² − 20x + 25; nuk është ndryshim katrorësh.",
          "4x² = (2x)², jo (4x)²: ky prodhim jep 16x² − 25.",
          null,
          "Keni harruar rrënjën e 25-shit: 25 = 5²."
        ]
      },
      "en": {
        "question": "Factor: 4x² − 25",
        "options": [
          "(2x − 5)²",
          "(4x − 5)(4x + 5)",
          "(2x − 5)(2x + 5)",
          "(2x − 25)(2x + 25)"
        ],
        "explanation": "4x² − 25 = (2x)² − 5² = (2x − 5)(2x + 5). Check: 4x² + 10x − 10x − 25 = 4x² − 25 ✓",
        "hint": "Write both terms as squares and use the difference of squares formula.",
        "whyWrong": [
          "(2x − 5)² = 4x² − 20x + 25; that is not a difference of squares.",
          "4x² = (2x)², not (4x)²: this product gives 16x² − 25.",
          null,
          "You forgot to take the root of 25: 25 = 5²."
        ]
      },
      "de": {
        "question": "Faktorisieren Sie: 4x² − 25",
        "options": [
          "(2x − 5)²",
          "(4x − 5)(4x + 5)",
          "(2x − 5)(2x + 5)",
          "(2x − 25)(2x + 25)"
        ],
        "explanation": "4x² − 25 = (2x)² − 5² = (2x − 5)(2x + 5). Probe: 4x² + 10x − 10x − 25 = 4x² − 25 ✓",
        "hint": "Schreiben Sie beide Terme als Quadrate und verwenden Sie die dritte binomische Formel.",
        "whyWrong": [
          "(2x − 5)² = 4x² − 20x + 25; das ist keine Differenz von Quadraten.",
          "4x² = (2x)², nicht (4x)²: dieses Produkt ergibt 16x² − 25.",
          null,
          "Die Wurzel aus 25 wurde nicht gezogen: 25 = 5²."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Le të jenë x₁ dhe x₂ rrënjët e ekuacionit x² − 5x + 3 = 0. Sa është x₁² + x₂²?",
        "options": [
          "19",
          "25",
          "31",
          "22"
        ],
        "explanation": "Sipas Vietit: x₁ + x₂ = 5 dhe x₁x₂ = 3. x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂ = 25 − 6 = 19.",
        "hint": "Shprehni x₁² + x₂² me anë të x₁ + x₂ dhe x₁x₂ (formulat e Vietit).",
        "whyWrong": [
          null,
          "Keni marrë (x₁ + x₂)² = x₁² + x₂², duke harruar −2x₁x₂.",
          "Gabim shenje: duhet −2x₁x₂, jo +2x₁x₂.",
          "Keni zbritur x₁x₂ vetëm një herë; duhet 2x₁x₂."
        ]
      },
      "en": {
        "question": "Let x₁ and x₂ be the roots of x² − 5x + 3 = 0. What is x₁² + x₂²?",
        "options": [
          "19",
          "25",
          "31",
          "22"
        ],
        "explanation": "By Vieta: x₁ + x₂ = 5 and x₁x₂ = 3. x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂ = 25 − 6 = 19.",
        "hint": "Express x₁² + x₂² using x₁ + x₂ and x₁x₂ (Vieta’s formulas).",
        "whyWrong": [
          null,
          "You assumed (x₁ + x₂)² = x₁² + x₂², forgetting −2x₁x₂.",
          "Sign error: it is −2x₁x₂, not +2x₁x₂.",
          "You subtracted x₁x₂ only once; it must be 2x₁x₂."
        ]
      },
      "de": {
        "question": "x₁ und x₂ seien die Lösungen von x² − 5x + 3 = 0. Berechnen Sie x₁² + x₂².",
        "options": [
          "19",
          "25",
          "31",
          "22"
        ],
        "explanation": "Nach Vieta: x₁ + x₂ = 5 und x₁x₂ = 3. x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂ = 25 − 6 = 19.",
        "hint": "Drücken Sie x₁² + x₂² durch x₁ + x₂ und x₁x₂ aus (Satz von Vieta).",
        "whyWrong": [
          null,
          "Es wurde (x₁ + x₂)² = x₁² + x₂² angenommen; −2x₁x₂ fehlt.",
          "Vorzeichenfehler: −2x₁x₂, nicht +2x₁x₂.",
          "x₁x₂ wurde nur einmal abgezogen; richtig ist 2x₁x₂."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Shkruani në formën e katrorit të plotë: x² − 8x + 10",
        "options": [
          "(x − 4)² + 26",
          "(x − 4)² − 6",
          "(x + 4)² − 6",
          "(x − 8)² − 54"
        ],
        "explanation": "(−8/2)² = 16. x² − 8x + 10 = (x² − 8x + 16) − 16 + 10 = (x − 4)² − 6. Kontroll: (x − 4)² − 6 = x² − 8x + 16 − 6 ✓",
        "hint": "Merrni gjysmën e koeficientit të x-it dhe ngrijeni në katror.",
        "whyWrong": [
          "Keni mbledhur 16 në vend që ta zbritni: 10 + 16 = 26.",
          null,
          "Gabim shenje brenda kllapës: (x + 4)² jep +8x.",
          "Nuk e keni përgjysmuar koeficientin: duhet (x − 4), jo (x − 8)."
        ]
      },
      "en": {
        "question": "Complete the square: x² − 8x + 10",
        "options": [
          "(x − 4)² + 26",
          "(x − 4)² − 6",
          "(x + 4)² − 6",
          "(x − 8)² − 54"
        ],
        "explanation": "(−8/2)² = 16. x² − 8x + 10 = (x² − 8x + 16) − 16 + 10 = (x − 4)² − 6. Check: (x − 4)² − 6 = x² − 8x + 16 − 6 ✓",
        "hint": "Take half of the coefficient of x and square it.",
        "whyWrong": [
          "You added 16 instead of subtracting it: 10 + 16 = 26.",
          null,
          "Sign error inside the bracket: (x + 4)² gives +8x.",
          "You did not halve the coefficient: it is (x − 4), not (x − 8)."
        ]
      },
      "de": {
        "question": "Bringen Sie mit quadratischer Ergänzung auf Scheitelform: x² − 8x + 10",
        "options": [
          "(x − 4)² + 26",
          "(x − 4)² − 6",
          "(x + 4)² − 6",
          "(x − 8)² − 54"
        ],
        "explanation": "(−8/2)² = 16. x² − 8x + 10 = (x² − 8x + 16) − 16 + 10 = (x − 4)² − 6. Probe: (x − 4)² − 6 = x² − 8x + 16 − 6 ✓",
        "hint": "Halbieren Sie den Koeffizienten von x und quadrieren Sie ihn.",
        "whyWrong": [
          "16 wurde addiert statt subtrahiert: 10 + 16 = 26.",
          null,
          "Vorzeichenfehler in der Klammer: (x + 4)² ergibt +8x.",
          "Der Koeffizient wurde nicht halbiert: (x − 4), nicht (x − 8)."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Zgjidhni ekuacionin: x² = 3x",
        "options": [
          "x = 3",
          "x = 0 ose x = 3",
          "x = ±√3",
          "x = 0 ose x = −3"
        ],
        "explanation": "x² − 3x = 0 ⇒ x(x − 3) = 0 ⇒ x = 0 ose x = 3. Kontroll: 0² = 3 · 0 dhe 3² = 3 · 3 ✓",
        "hint": "Mos pjesëtoni me x; kaloni gjithçka në njërën anë dhe faktorizoni.",
        "whyWrong": [
          "Pjesëtimi me x e humb zgjidhjen x = 0.",
          null,
          "Keni zgjidhur x² = 3; ana e djathtë është 3x, jo 3.",
          "Gabim shenje: x − 3 = 0 jep x = 3, jo −3."
        ]
      },
      "en": {
        "question": "Solve: x² = 3x",
        "options": [
          "x = 3",
          "x = 0 or x = 3",
          "x = ±√3",
          "x = 0 or x = −3"
        ],
        "explanation": "x² − 3x = 0 ⇒ x(x − 3) = 0 ⇒ x = 0 or x = 3. Check: 0² = 3 · 0 and 3² = 3 · 3 ✓",
        "hint": "Do not divide by x; bring everything to one side and factor.",
        "whyWrong": [
          "Dividing by x loses the solution x = 0.",
          null,
          "You solved x² = 3; the right-hand side is 3x, not 3.",
          "Sign error: x − 3 = 0 gives x = 3, not −3."
        ]
      },
      "de": {
        "question": "Lösen Sie: x² = 3x",
        "options": [
          "x = 3",
          "x = 0 oder x = 3",
          "x = ±√3",
          "x = 0 oder x = −3"
        ],
        "explanation": "x² − 3x = 0 ⇒ x(x − 3) = 0 ⇒ x = 0 oder x = 3. Probe: 0² = 3 · 0 und 3² = 3 · 3 ✓",
        "hint": "Teilen Sie nicht durch x; bringen Sie alles auf eine Seite und faktorisieren Sie.",
        "whyWrong": [
          "Durch das Teilen durch x geht die Lösung x = 0 verloren.",
          null,
          "Es wurde x² = 3 gelöst; rechts steht 3x, nicht 3.",
          "Vorzeichenfehler: x − 3 = 0 ergibt x = 3, nicht −3."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Zgjidhni mosbarazimin: x² − x − 6 < 0",
        "options": [
          "x < −2 ose x > 3",
          "−3 < x < 2",
          "x < 3",
          "−2 < x < 3"
        ],
        "explanation": "x² − x − 6 = (x − 3)(x + 2), me rrënjë −2 dhe 3. Parabola hapet lart, prandaj është negative ndërmjet rrënjëve: −2 < x < 3. Kontroll: x = 0 jep −6 < 0 ✓",
        "hint": "Gjeni rrënjët e x² − x − 6 = 0 dhe mendoni ku parabola ndodhet nën boshtin x.",
        "whyWrong": [
          "Kjo është zgjidhja e x² − x − 6 > 0 (jashtë rrënjëve).",
          "Gabim shenje në faktorizim: (x + 3)(x − 2) jep x² + x − 6.",
          "Keni marrë parasysh vetëm faktorin x − 3 dhe keni harruar x + 2.",
          null
        ]
      },
      "en": {
        "question": "Solve the inequality: x² − x − 6 < 0",
        "options": [
          "x < −2 or x > 3",
          "−3 < x < 2",
          "x < 3",
          "−2 < x < 3"
        ],
        "explanation": "x² − x − 6 = (x − 3)(x + 2), with roots −2 and 3. The parabola opens upward, so it is negative between the roots: −2 < x < 3. Check: x = 0 gives −6 < 0 ✓",
        "hint": "Find the roots of x² − x − 6 = 0 and think about where the parabola lies below the x-axis.",
        "whyWrong": [
          "That is the solution of x² − x − 6 > 0 (outside the roots).",
          "Sign error when factoring: (x + 3)(x − 2) gives x² + x − 6.",
          "You considered only the factor x − 3 and ignored x + 2.",
          null
        ]
      },
      "de": {
        "question": "Lösen Sie die Ungleichung: x² − x − 6 < 0",
        "options": [
          "x < −2 oder x > 3",
          "−3 < x < 2",
          "x < 3",
          "−2 < x < 3"
        ],
        "explanation": "x² − x − 6 = (x − 3)(x + 2), Nullstellen −2 und 3. Die Parabel ist nach oben geöffnet, also zwischen den Nullstellen negativ: −2 < x < 3. Probe: x = 0 ergibt −6 < 0 ✓",
        "hint": "Bestimmen Sie die Nullstellen von x² − x − 6 und überlegen Sie, wo die Parabel unterhalb der x-Achse liegt.",
        "whyWrong": [
          "Das ist die Lösung von x² − x − 6 > 0 (außerhalb der Nullstellen).",
          "Vorzeichenfehler beim Faktorisieren: (x + 3)(x − 2) ergibt x² + x − 6.",
          "Nur der Faktor x − 3 wurde berücksichtigt, x + 2 wurde übersehen.",
          null
        ]
      }
    }
  ]
};
