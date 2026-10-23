// Quiz set "alg-easy" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "alg-easy",
  "difficulty": "beginner",
  "icon": "∑",
  "color": "#6C63FF",
  "i18n": {
    "al": {
      "title": "Algjebër Bazë",
      "category": "Algjebër",
      "duration": "8 min"
    },
    "en": {
      "title": "Basic Algebra",
      "category": "Algebra",
      "duration": "8 min"
    },
    "de": {
      "title": "Grundlegende Algebra",
      "category": "Algebra",
      "duration": "8 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Zgjidhni ekuacionin: 2x + 5 = 13",
        "options": [
          "x = 9",
          "x = 8",
          "x = 4",
          "x = 1,5"
        ],
        "explanation": "Zbresim 5 nga të dyja anët: 2x = 13 − 5 = 8. Pjesëtojmë me 2: x = 8 : 2 = 4. Kontroll: 2 · 4 + 5 = 13 ✓",
        "hint": "Së pari largoni 5-shin nga të dyja anët, pastaj veçoni x-in.",
        "whyWrong": [
          "Keni mbledhur 5 në vend që ta zbritni: 2x = 18.",
          "Keni harruar ta pjesëtoni 8 me 2.",
          null,
          "Keni pjesëtuar me 2 vetëm 13-shin, jo edhe 5-shin (x + 5 = 6,5)."
        ]
      },
      "en": {
        "question": "Solve: 2x + 5 = 13",
        "options": [
          "x = 9",
          "x = 8",
          "x = 4",
          "x = 1.5"
        ],
        "explanation": "Subtract 5 from both sides: 2x = 13 − 5 = 8. Divide by 2: x = 8 / 2 = 4. Check: 2 · 4 + 5 = 13 ✓",
        "hint": "First remove the 5 from both sides, then isolate x.",
        "whyWrong": [
          "You added 5 instead of subtracting it: 2x = 18.",
          "You forgot to divide 8 by 2.",
          null,
          "You divided only 13 by 2, not the 5 as well (x + 5 = 6.5)."
        ]
      },
      "de": {
        "question": "Lösen Sie: 2x + 5 = 13",
        "options": [
          "x = 9",
          "x = 8",
          "x = 4",
          "x = 1,5"
        ],
        "explanation": "Auf beiden Seiten 5 subtrahieren: 2x = 13 − 5 = 8. Durch 2 teilen: x = 8 : 2 = 4. Probe: 2 · 4 + 5 = 13 ✓",
        "hint": "Entfernen Sie zuerst die 5 auf beiden Seiten und isolieren Sie dann x.",
        "whyWrong": [
          "Die 5 wurde addiert statt subtrahiert: 2x = 18.",
          "Es wurde vergessen, 8 durch 2 zu teilen.",
          null,
          "Nur 13 wurde durch 2 geteilt, nicht auch die 5 (x + 5 = 6,5)."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Thjeshtoni shprehjen: 3a + 2b − a + 4b",
        "options": [
          "2a + 6b",
          "4a + 6b",
          "8ab",
          "3a + 6b"
        ],
        "explanation": "Grupojmë kufizat e ngjashme: (3a − a) + (2b + 4b) = 2a + 6b.",
        "hint": "Bashkoni vetëm kufizat e ngjashme (a me a, b me b).",
        "whyWrong": [
          null,
          "Keni mbledhur a-në në vend që ta zbritni: 3a + a = 4a.",
          "Kufizat me a dhe me b nuk janë të ngjashme, prandaj nuk bashkohen në një kufizë.",
          "Keni harruar kufizën −a."
        ]
      },
      "en": {
        "question": "Simplify: 3a + 2b − a + 4b",
        "options": [
          "2a + 6b",
          "4a + 6b",
          "8ab",
          "3a + 6b"
        ],
        "explanation": "Group like terms: (3a − a) + (2b + 4b) = 2a + 6b.",
        "hint": "Combine only like terms (a with a, b with b).",
        "whyWrong": [
          null,
          "You added a instead of subtracting it: 3a + a = 4a.",
          "Terms in a and in b are not like terms, so they cannot be merged into one term.",
          "You left out the term −a."
        ]
      },
      "de": {
        "question": "Vereinfachen Sie: 3a + 2b − a + 4b",
        "options": [
          "2a + 6b",
          "4a + 6b",
          "8ab",
          "3a + 6b"
        ],
        "explanation": "Gleichartige Terme zusammenfassen: (3a − a) + (2b + 4b) = 2a + 6b.",
        "hint": "Fassen Sie nur gleichartige Terme zusammen (a mit a, b mit b).",
        "whyWrong": [
          null,
          "a wurde addiert statt subtrahiert: 3a + a = 4a.",
          "Terme mit a und mit b sind nicht gleichartig und lassen sich nicht zu einem Term zusammenfassen.",
          "Der Term −a wurde vergessen."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Nëse f(x) = 2x − 3, sa është f(5)?",
        "options": [
          "4",
          "7",
          "22",
          "13"
        ],
        "explanation": "f(5) = 2 · 5 − 3 = 10 − 3 = 7.",
        "hint": "Zëvendësoni x-in me 5 në formulë dhe llogaritni.",
        "whyWrong": [
          "Keni zgjidhur ekuacionin 2x − 3 = 5 në vend që të llogaritni f(5).",
          null,
          "Keni shkruar 2 dhe 5 njëri pas tjetrit (25) në vend që t'i shumëzoni.",
          "Gabim shenje: keni mbledhur 3 në vend që ta zbritni."
        ]
      },
      "en": {
        "question": "If f(x) = 2x − 3, what is f(5)?",
        "options": [
          "4",
          "7",
          "22",
          "13"
        ],
        "explanation": "f(5) = 2 · 5 − 3 = 10 − 3 = 7.",
        "hint": "Replace x with 5 in the formula and evaluate.",
        "whyWrong": [
          "You solved 2x − 3 = 5 instead of evaluating f(5).",
          null,
          "You wrote 2 and 5 side by side (25) instead of multiplying them.",
          "Sign error: you added 3 instead of subtracting it."
        ]
      },
      "de": {
        "question": "Gegeben ist f(x) = 2x − 3. Berechnen Sie f(5).",
        "options": [
          "4",
          "7",
          "22",
          "13"
        ],
        "explanation": "f(5) = 2 · 5 − 3 = 10 − 3 = 7.",
        "hint": "Setzen Sie 5 für x in die Formel ein.",
        "whyWrong": [
          "Es wurde die Gleichung 2x − 3 = 5 gelöst, statt f(5) zu berechnen.",
          null,
          "2 und 5 wurden nebeneinander geschrieben (25) statt multipliziert.",
          "Vorzeichenfehler: 3 wurde addiert statt subtrahiert."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Zgjidhni ekuacionin: x/3 = 7",
        "options": [
          "x = 7/3",
          "x = 10",
          "x = 4",
          "x = 21"
        ],
        "explanation": "Shumëzojmë të dyja anët me 3: x = 7 · 3 = 21. Kontroll: 21 : 3 = 7 ✓",
        "hint": "Cili veprim e anulon pjesëtimin me 3?",
        "whyWrong": [
          "Keni pjesëtuar me 3 në vend që të shumëzoni.",
          "Keni mbledhur 3; pjesëtimi anulohet me shumëzim, jo me mbledhje.",
          "Keni zbritur 3; pjesëtimi anulohet me shumëzim, jo me zbritje.",
          null
        ]
      },
      "en": {
        "question": "Solve: x/3 = 7",
        "options": [
          "x = 7/3",
          "x = 10",
          "x = 4",
          "x = 21"
        ],
        "explanation": "Multiply both sides by 3: x = 7 · 3 = 21. Check: 21 / 3 = 7 ✓",
        "hint": "Which operation undoes dividing by 3?",
        "whyWrong": [
          "You divided by 3 instead of multiplying.",
          "You added 3; division is undone by multiplication, not addition.",
          "You subtracted 3; division is undone by multiplication, not subtraction.",
          null
        ]
      },
      "de": {
        "question": "Lösen Sie: x/3 = 7",
        "options": [
          "x = 7/3",
          "x = 10",
          "x = 4",
          "x = 21"
        ],
        "explanation": "Beide Seiten mit 3 multiplizieren: x = 7 · 3 = 21. Probe: 21 : 3 = 7 ✓",
        "hint": "Welche Rechenart macht das Teilen durch 3 rückgängig?",
        "whyWrong": [
          "Es wurde durch 3 geteilt statt mit 3 multipliziert.",
          "Es wurde 3 addiert; eine Division wird durch Multiplikation rückgängig gemacht.",
          "Es wurde 3 subtrahiert; eine Division wird durch Multiplikation rückgängig gemacht.",
          null
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Zgjidhni mosbarazimin: −2x + 1 > 7",
        "options": [
          "x < −3",
          "x > −3",
          "x < −4",
          "x > 3"
        ],
        "explanation": "Zbresim 1: −2x > 6. Pjesëtojmë me −2 dhe e kthejmë shenjën: x < −3. Kontroll me x = −4: −2 · (−4) + 1 = 9 > 7 ✓",
        "hint": "Kujdes: çfarë ndodh me shenjën e mosbarazimit kur pjesëtoni me numër negativ?",
        "whyWrong": [
          null,
          "Keni pjesëtuar me −2 pa e kthyer shenjën e mosbarazimit.",
          "Gabim shenje gjatë kalimit të 1-shit: −2x > 8 në vend të −2x > 6.",
          "Keni humbur minusin e koeficientit −2."
        ]
      },
      "en": {
        "question": "Solve the inequality: −2x + 1 > 7",
        "options": [
          "x < −3",
          "x > −3",
          "x < −4",
          "x > 3"
        ],
        "explanation": "Subtract 1: −2x > 6. Divide by −2 and reverse the sign: x < −3. Check with x = −4: −2 · (−4) + 1 = 9 > 7 ✓",
        "hint": "Careful: what happens to the inequality sign when you divide by a negative number?",
        "whyWrong": [
          null,
          "You divided by −2 without reversing the inequality sign.",
          "Sign error when moving the 1: −2x > 8 instead of −2x > 6.",
          "You dropped the minus sign of the coefficient −2."
        ]
      },
      "de": {
        "question": "Lösen Sie die Ungleichung: −2x + 1 > 7",
        "options": [
          "x < −3",
          "x > −3",
          "x < −4",
          "x > 3"
        ],
        "explanation": "1 subtrahieren: −2x > 6. Durch −2 teilen und das Zeichen umdrehen: x < −3. Probe mit x = −4: −2 · (−4) + 1 = 9 > 7 ✓",
        "hint": "Achtung: Was passiert mit dem Ungleichheitszeichen, wenn Sie durch eine negative Zahl teilen?",
        "whyWrong": [
          null,
          "Es wurde durch −2 geteilt, ohne das Ungleichheitszeichen umzudrehen.",
          "Vorzeichenfehler beim Verschieben der 1: −2x > 8 statt −2x > 6.",
          "Das Minuszeichen des Koeffizienten −2 wurde übersehen."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Zgjidhni sistemin e ekuacioneve: x + y = 10 dhe x − y = 2",
        "options": [
          "x = 4, y = 6",
          "x = 6, y = 4",
          "x = 5, y = 5",
          "x = 12, y = −2"
        ],
        "explanation": "Mbledhim ekuacionet: 2x = 12, pra x = 6. Nga x + y = 10: y = 10 − 6 = 4. Kontroll: 6 − 4 = 2 ✓",
        "hint": "Mblidhni të dy ekuacionet që të eliminohet y.",
        "whyWrong": [
          "Keni ngatërruar x-in me y-in: 4 − 6 = −2, jo 2.",
          null,
          "Plotëson vetëm ekuacionin e parë: 5 − 5 = 0, jo 2.",
          "Keni harruar ta pjesëtoni 2x = 12 me 2."
        ]
      },
      "en": {
        "question": "Solve the system: x + y = 10 and x − y = 2",
        "options": [
          "x = 4, y = 6",
          "x = 6, y = 4",
          "x = 5, y = 5",
          "x = 12, y = −2"
        ],
        "explanation": "Add the equations: 2x = 12, so x = 6. From x + y = 10: y = 10 − 6 = 4. Check: 6 − 4 = 2 ✓",
        "hint": "Add the two equations to eliminate y.",
        "whyWrong": [
          "You swapped x and y: 4 − 6 = −2, not 2.",
          null,
          "It satisfies only the first equation: 5 − 5 = 0, not 2.",
          "You forgot to divide 2x = 12 by 2."
        ]
      },
      "de": {
        "question": "Lösen Sie das Gleichungssystem: x + y = 10 und x − y = 2",
        "options": [
          "x = 4, y = 6",
          "x = 6, y = 4",
          "x = 5, y = 5",
          "x = 12, y = −2"
        ],
        "explanation": "Gleichungen addieren: 2x = 12, also x = 6. Aus x + y = 10: y = 10 − 6 = 4. Probe: 6 − 4 = 2 ✓",
        "hint": "Addieren Sie die beiden Gleichungen, damit y wegfällt.",
        "whyWrong": [
          "x und y wurden vertauscht: 4 − 6 = −2, nicht 2.",
          null,
          "Erfüllt nur die erste Gleichung: 5 − 5 = 0, nicht 2.",
          "Es wurde vergessen, 2x = 12 durch 2 zu teilen."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Llogaritni vlerën e shprehjes 3x² − 2x për x = −2.",
        "options": [
          "8",
          "40",
          "16",
          "−8"
        ],
        "explanation": "3 · (−2)² − 2 · (−2) = 3 · 4 + 4 = 12 + 4 = 16.",
        "hint": "Vendoseni −2 në kllapa dhe kryeni fuqizimin para shumëzimit.",
        "whyWrong": [
          "Gabim shenje: −2 · (−2) është +4, jo −4.",
          "Keni ngritur në katror edhe koeficientin: (3 · (−2))² = 36.",
          null,
          "Keni llogaritur (−2)² = −4; katrori i një numri negativ është pozitiv."
        ]
      },
      "en": {
        "question": "Evaluate 3x² − 2x for x = −2.",
        "options": [
          "8",
          "40",
          "16",
          "−8"
        ],
        "explanation": "3 · (−2)² − 2 · (−2) = 3 · 4 + 4 = 12 + 4 = 16.",
        "hint": "Put −2 in brackets and do the power before multiplying.",
        "whyWrong": [
          "Sign error: −2 · (−2) is +4, not −4.",
          "You squared the coefficient too: (3 · (−2))² = 36.",
          null,
          "You took (−2)² = −4; the square of a negative number is positive."
        ]
      },
      "de": {
        "question": "Berechnen Sie den Wert von 3x² − 2x für x = −2.",
        "options": [
          "8",
          "40",
          "16",
          "−8"
        ],
        "explanation": "3 · (−2)² − 2 · (−2) = 3 · 4 + 4 = 12 + 4 = 16.",
        "hint": "Setzen Sie −2 in Klammern ein und rechnen Sie die Potenz vor der Multiplikation.",
        "whyWrong": [
          "Vorzeichenfehler: −2 · (−2) ist +4, nicht −4.",
          "Der Koeffizient wurde mitquadriert: (3 · (−2))² = 36.",
          null,
          "Es wurde (−2)² = −4 gerechnet; das Quadrat einer negativen Zahl ist positiv."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Zgjidhni ekuacionin: 3(x + 2) = 18",
        "options": [
          "x = 16/3",
          "x = 6",
          "x = 8",
          "x = 4"
        ],
        "explanation": "Pjesëtojmë me 3: x + 2 = 6. Zbresim 2: x = 4. Kontroll: 3 · (4 + 2) = 18 ✓",
        "hint": "Pjesëtoni të dyja anët me 3 (ose hiqni kllapat), pastaj veçoni x-in.",
        "whyWrong": [
          "Keni shumëzuar me 3 vetëm x-in: 3x + 2 = 18.",
          "Keni ndaluar te x + 2 = 6 pa e zbritur 2-shin.",
          "Nga 3x + 6 = 18 keni mbledhur 6 në vend që ta zbritni: 3x = 24.",
          null
        ]
      },
      "en": {
        "question": "Solve: 3(x + 2) = 18",
        "options": [
          "x = 16/3",
          "x = 6",
          "x = 8",
          "x = 4"
        ],
        "explanation": "Divide by 3: x + 2 = 6. Subtract 2: x = 4. Check: 3 · (4 + 2) = 18 ✓",
        "hint": "Divide both sides by 3 (or expand the bracket), then isolate x.",
        "whyWrong": [
          "You multiplied only x by 3: 3x + 2 = 18.",
          "You stopped at x + 2 = 6 without subtracting 2.",
          "From 3x + 6 = 18 you added 6 instead of subtracting it: 3x = 24.",
          null
        ]
      },
      "de": {
        "question": "Lösen Sie: 3(x + 2) = 18",
        "options": [
          "x = 16/3",
          "x = 6",
          "x = 8",
          "x = 4"
        ],
        "explanation": "Durch 3 teilen: x + 2 = 6. 2 subtrahieren: x = 4. Probe: 3 · (4 + 2) = 18 ✓",
        "hint": "Teilen Sie beide Seiten durch 3 (oder lösen Sie die Klammer auf) und isolieren Sie dann x.",
        "whyWrong": [
          "Nur x wurde mit 3 multipliziert: 3x + 2 = 18.",
          "Bei x + 2 = 6 wurde aufgehört, ohne 2 zu subtrahieren.",
          "Aus 3x + 6 = 18 wurde 6 addiert statt subtrahiert: 3x = 24.",
          null
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Zgjidhni ekuacionin: 5x − 3 = 2x + 9",
        "options": [
          "x = 2",
          "x = 4",
          "x = 12/7",
          "x = 12"
        ],
        "explanation": "5x − 2x = 9 + 3, pra 3x = 12 dhe x = 4. Kontroll: 5 · 4 − 3 = 17 dhe 2 · 4 + 9 = 17 ✓",
        "hint": "Kaloni kufizat me x në njërën anë dhe numrat në anën tjetër, duke ua ndryshuar shenjën.",
        "whyWrong": [
          "−3 është kaluar pa ia ndryshuar shenjën: 3x = 9 − 3 = 6.",
          null,
          "2x është mbledhur në vend që të zbritet: 7x = 12.",
          "Keni harruar ta pjesëtoni 12 me 3."
        ]
      },
      "en": {
        "question": "Solve: 5x − 3 = 2x + 9",
        "options": [
          "x = 2",
          "x = 4",
          "x = 12/7",
          "x = 12"
        ],
        "explanation": "5x − 2x = 9 + 3, so 3x = 12 and x = 4. Check: 5 · 4 − 3 = 17 and 2 · 4 + 9 = 17 ✓",
        "hint": "Collect the x-terms on one side and the numbers on the other, changing signs as you move them.",
        "whyWrong": [
          "You moved −3 without changing its sign: 3x = 9 − 3 = 6.",
          null,
          "You added 2x instead of subtracting it: 7x = 12.",
          "You forgot to divide 12 by 3."
        ]
      },
      "de": {
        "question": "Lösen Sie: 5x − 3 = 2x + 9",
        "options": [
          "x = 2",
          "x = 4",
          "x = 12/7",
          "x = 12"
        ],
        "explanation": "5x − 2x = 9 + 3, also 3x = 12 und x = 4. Probe: 5 · 4 − 3 = 17 und 2 · 4 + 9 = 17 ✓",
        "hint": "Bringen Sie die x-Terme auf eine Seite und die Zahlen auf die andere; beim Seitenwechsel ändert sich das Vorzeichen.",
        "whyWrong": [
          "−3 wurde ohne Vorzeichenwechsel verschoben: 3x = 9 − 3 = 6.",
          null,
          "2x wurde addiert statt subtrahiert: 7x = 12.",
          "Es wurde vergessen, 12 durch 3 zu teilen."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Shumëzoni dhe thjeshtoni: (x + 3)(x + 2)",
        "options": [
          "x² + 5x + 6",
          "x² + 6",
          "x² + 6x + 5",
          "x² + 5x + 5"
        ],
        "explanation": "(x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6. Kontroll me x = 1: 4 · 3 = 12 dhe 1 + 5 + 6 = 12 ✓",
        "hint": "Shumëzoni secilën kufizë të kllapës së parë me secilën kufizë të së dytës.",
        "whyWrong": [
          null,
          "Keni shumëzuar vetëm kufizat e para dhe të fundit; mungojnë 2x dhe 3x.",
          "Keni ngatërruar rolet: 3 · 2 = 6 është konstanta, kurse 3 + 2 = 5 është koeficienti i x-it.",
          "Konstantat shumëzohen (3 · 2 = 6), nuk mblidhen."
        ]
      },
      "en": {
        "question": "Expand and simplify: (x + 3)(x + 2)",
        "options": [
          "x² + 5x + 6",
          "x² + 6",
          "x² + 6x + 5",
          "x² + 5x + 5"
        ],
        "explanation": "(x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6. Check with x = 1: 4 · 3 = 12 and 1 + 5 + 6 = 12 ✓",
        "hint": "Multiply each term of the first bracket by each term of the second.",
        "whyWrong": [
          null,
          "You multiplied only the first and last terms; 2x and 3x are missing.",
          "You mixed up the roles: 3 · 2 = 6 is the constant and 3 + 2 = 5 is the coefficient of x.",
          "The constants must be multiplied (3 · 2 = 6), not added."
        ]
      },
      "de": {
        "question": "Multiplizieren Sie aus und vereinfachen Sie: (x + 3)(x + 2)",
        "options": [
          "x² + 5x + 6",
          "x² + 6",
          "x² + 6x + 5",
          "x² + 5x + 5"
        ],
        "explanation": "(x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6. Probe mit x = 1: 4 · 3 = 12 und 1 + 5 + 6 = 12 ✓",
        "hint": "Multiplizieren Sie jeden Term der ersten Klammer mit jedem Term der zweiten.",
        "whyWrong": [
          null,
          "Nur der erste und der letzte Term wurden multipliziert; 2x und 3x fehlen.",
          "Die Rollen wurden vertauscht: 3 · 2 = 6 ist die Konstante, 3 + 2 = 5 der Koeffizient von x.",
          "Die Konstanten werden multipliziert (3 · 2 = 6), nicht addiert."
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 3
      },
      "al": {
        "question": "Zgjidhni ekuacionin: 7 − 2x = 1. Shkruani vlerën e x.",
        "explanation": "Zbresim 7 nga të dyja anët: −2x = 1 − 7 = −6. Pjesëtojmë me −2: x = −6 : (−2) = 3. Kontroll: 7 − 2 · 3 = 1 ✓",
        "hint": "Veçoni termin me x në njërën anë dhe kujdesuni për shenjën kur pjesëtoni me një numër negativ.",
        "commonMistakes": [
          {
            "value": -3,
            "why": "Keni shkruar −2x = 6: shenja e anës së djathtë është gabim, sepse 1 − 7 = −6."
          },
          {
            "value": 4,
            "why": "Keni mbledhur 1 + 7 = 8 në vend që të zbrisnit 7 dhe keni injoruar shenjën minus para 2x."
          }
        ]
      },
      "en": {
        "question": "Solve the equation: 7 − 2x = 1. Enter the value of x.",
        "explanation": "Subtract 7 from both sides: −2x = 1 − 7 = −6. Divide by −2: x = −6 ÷ (−2) = 3. Check: 7 − 2 · 3 = 1 ✓",
        "hint": "Isolate the x-term on one side and watch the sign when dividing by a negative number.",
        "commonMistakes": [
          {
            "value": -3,
            "why": "You wrote −2x = 6: the right-hand side has the wrong sign, because 1 − 7 = −6."
          },
          {
            "value": 4,
            "why": "You added 1 + 7 = 8 instead of subtracting 7 and ignored the minus sign in front of 2x."
          }
        ]
      },
      "de": {
        "question": "Lösen Sie die Gleichung: 7 − 2x = 1. Geben Sie den Wert von x ein.",
        "explanation": "Auf beiden Seiten 7 subtrahieren: −2x = 1 − 7 = −6. Durch −2 dividieren: x = −6 : (−2) = 3. Probe: 7 − 2 · 3 = 1 ✓",
        "hint": "Bringen Sie den x-Term auf eine Seite und achten Sie auf das Vorzeichen, wenn Sie durch eine negative Zahl teilen.",
        "commonMistakes": [
          {
            "value": -3,
            "why": "Sie haben −2x = 6 geschrieben: Die rechte Seite hat das falsche Vorzeichen, denn 1 − 7 = −6."
          },
          {
            "value": 4,
            "why": "Sie haben 1 + 7 = 8 gerechnet statt 7 abzuziehen und das Minus vor 2x ignoriert."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 24
      },
      "al": {
        "question": "Llogaritni vlerën e shprehjes 2(a − 3) + 4a për a = 5.",
        "explanation": "Hapim kllapën: 2(a − 3) + 4a = 2a − 6 + 4a = 6a − 6. Për a = 5: 6 · 5 − 6 = 30 − 6 = 24.",
        "hint": "Hapni kllapën duke shumëzuar 2 me secilin term brenda saj, pastaj zëvendësoni a = 5.",
        "commonMistakes": [
          {
            "value": 27,
            "why": "Keni shumëzuar 2 vetëm me a, jo edhe me −3: 10 − 3 + 20 = 27."
          },
          {
            "value": 36,
            "why": "Keni shkruar +6 në vend të −6 gjatë hapjes së kllapës: 6 · 5 + 6 = 36."
          }
        ]
      },
      "en": {
        "question": "Evaluate the expression 2(a − 3) + 4a for a = 5.",
        "explanation": "Expand: 2(a − 3) + 4a = 2a − 6 + 4a = 6a − 6. For a = 5: 6 · 5 − 6 = 30 − 6 = 24.",
        "hint": "Expand the bracket by multiplying 2 by each term inside it, then substitute a = 5.",
        "commonMistakes": [
          {
            "value": 27,
            "why": "You multiplied 2 only by a, not by −3: 10 − 3 + 20 = 27."
          },
          {
            "value": 36,
            "why": "You wrote +6 instead of −6 when expanding the bracket: 6 · 5 + 6 = 36."
          }
        ]
      },
      "de": {
        "question": "Berechnen Sie den Wert des Terms 2(a − 3) + 4a für a = 5.",
        "explanation": "Klammer auflösen: 2(a − 3) + 4a = 2a − 6 + 4a = 6a − 6. Für a = 5: 6 · 5 − 6 = 30 − 6 = 24.",
        "hint": "Lösen Sie die Klammer auf, indem Sie 2 mit jedem Glied in der Klammer multiplizieren, und setzen Sie dann a = 5 ein.",
        "commonMistakes": [
          {
            "value": 27,
            "why": "Sie haben 2 nur mit a multipliziert, nicht mit −3: 10 − 3 + 20 = 27."
          },
          {
            "value": 36,
            "why": "Sie haben beim Auflösen der Klammer +6 statt −6 geschrieben: 6 · 5 + 6 = 36."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": false,
      "al": {
        "question": "Për çdo dy numra a dhe b vlen: (a + b)² = a² + b².",
        "explanation": "(a + b)² = (a + b)(a + b) = a² + 2ab + b². Për shembull, për a = 1 dhe b = 2: (1 + 2)² = 9, ndërsa 1² + 2² = 5. Pra pohimi është i gabuar.",
        "hint": "Provoni me numra konkretë, p.sh. a = 1 dhe b = 2.",
        "whyWrong": "Pohimi nuk është i vërtetë: mungon termi i dyfishtë 2ab, sepse katrori i shumës nuk është shuma e katrorëve."
      },
      "en": {
        "question": "For all numbers a and b: (a + b)² = a² + b².",
        "explanation": "(a + b)² = (a + b)(a + b) = a² + 2ab + b². For example, for a = 1 and b = 2: (1 + 2)² = 9, but 1² + 2² = 5. So the statement is false.",
        "hint": "Try concrete numbers, e.g. a = 1 and b = 2.",
        "whyWrong": "The statement is not true: the middle term 2ab is missing, because the square of a sum is not the sum of the squares."
      },
      "de": {
        "question": "Für alle Zahlen a und b gilt: (a + b)² = a² + b².",
        "explanation": "(a + b)² = (a + b)(a + b) = a² + 2ab + b². Zum Beispiel für a = 1 und b = 2: (1 + 2)² = 9, aber 1² + 2² = 5. Die Aussage ist also falsch.",
        "hint": "Probieren Sie konkrete Zahlen aus, z. B. a = 1 und b = 2.",
        "whyWrong": "Die Aussage stimmt nicht: Es fehlt das gemischte Glied 2ab, denn das Quadrat einer Summe ist nicht die Summe der Quadrate."
      }
    }
  ]
};
