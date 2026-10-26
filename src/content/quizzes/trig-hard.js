// Quiz set "trig-hard" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "trig-hard",
  "difficulty": "advanced",
  "icon": "≈",
  "color": "#D35400",
  "i18n": {
    "al": {
      "title": "Identitete Trigonometrike",
      "category": "Trigonometri",
      "duration": "15 min"
    },
    "en": {
      "title": "Trigonometric Identities",
      "category": "Trigonometry",
      "duration": "15 min"
    },
    "de": {
      "title": "Trigonometrische Identitäten",
      "category": "Trigonometrie",
      "duration": "15 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Nëse sin x = 3/5 dhe 90° < x < 180°, sa është sin 2x?",
        "options": [
          "24/25",
          "7/25",
          "−24/25",
          "6/5"
        ],
        "explanation": "Në kuadrantin II cos x < 0: cos x = −√(1 − 9/25) = −4/5. sin 2x = 2 sin x cos x = 2 · 3/5 · (−4/5) = −24/25.",
        "hint": "Përdorni sin 2x = 2 sin x cos x dhe kini kujdes shenjën e cos x.",
        "whyWrong": [
          "Keni marrë cos x = 4/5; në kuadrantin II kosinusi është negativ.",
          "7/25 është cos 2x = 1 − 2sin²x, jo sin 2x.",
          null,
          "sin 2x ≠ 2 sin x; duhet formula e këndit të dyfishtë."
        ]
      },
      "en": {
        "question": "If sin x = 3/5 and 90° < x < 180°, what is sin 2x?",
        "options": [
          "24/25",
          "7/25",
          "−24/25",
          "6/5"
        ],
        "explanation": "In quadrant II cos x < 0: cos x = −√(1 − 9/25) = −4/5. sin 2x = 2 sin x cos x = 2 · 3/5 · (−4/5) = −24/25.",
        "hint": "Use sin 2x = 2 sin x cos x and watch the sign of cos x.",
        "whyWrong": [
          "You took cos x = 4/5; cosine is negative in quadrant II.",
          "7/25 is cos 2x = 1 − 2sin²x, not sin 2x.",
          null,
          "sin 2x ≠ 2 sin x; use the double-angle formula."
        ]
      },
      "de": {
        "question": "Es gilt sin x = 3/5 und 90° < x < 180°. Wie groß ist sin 2x?",
        "options": [
          "24/25",
          "7/25",
          "−24/25",
          "6/5"
        ],
        "explanation": "Im II. Quadranten ist cos x < 0: cos x = −√(1 − 9/25) = −4/5. sin 2x = 2 sin x cos x = 2 · 3/5 · (−4/5) = −24/25.",
        "hint": "Verwenden Sie sin 2x = 2 sin x cos x und achten Sie auf das Vorzeichen von cos x.",
        "whyWrong": [
          "Sie haben cos x = 4/5 verwendet; im II. Quadranten ist der Kosinus negativ.",
          "7/25 ist cos 2x = 1 − 2sin²x, nicht sin 2x.",
          null,
          "sin 2x ≠ 2 sin x; verwenden Sie die Doppelwinkelformel."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Cila shprehje është e barabartë me cos 2x, e shprehur vetëm me sin x?",
        "options": [
          "1 − 2sin²x",
          "2sin²x − 1",
          "1 − sin²x",
          "1 − 2sin x"
        ],
        "explanation": "cos 2x = cos²x − sin²x. Zëvendësojmë cos²x = 1 − sin²x: cos 2x = 1 − sin²x − sin²x = 1 − 2sin²x.",
        "hint": "Nisuni nga cos 2x = cos²x − sin²x dhe eliminoni cos²x.",
        "whyWrong": [
          null,
          "Shenjat janë të kundërta: 2sin²x − 1 = −cos 2x.",
          "1 − sin²x = cos²x, jo cos 2x.",
          "Mungon katrori: duhet sin²x, jo sin x."
        ]
      },
      "en": {
        "question": "Which expression equals cos 2x written only in terms of sin x?",
        "options": [
          "1 − 2sin²x",
          "2sin²x − 1",
          "1 − sin²x",
          "1 − 2sin x"
        ],
        "explanation": "cos 2x = cos²x − sin²x. Substitute cos²x = 1 − sin²x: cos 2x = 1 − sin²x − sin²x = 1 − 2sin²x.",
        "hint": "Start from cos 2x = cos²x − sin²x and eliminate cos²x.",
        "whyWrong": [
          null,
          "The signs are reversed: 2sin²x − 1 = −cos 2x.",
          "1 − sin²x = cos²x, not cos 2x.",
          "The square is missing: it must be sin²x, not sin x."
        ]
      },
      "de": {
        "question": "Welcher Ausdruck ist gleich cos 2x, nur durch sin x ausgedrückt?",
        "options": [
          "1 − 2sin²x",
          "2sin²x − 1",
          "1 − sin²x",
          "1 − 2sin x"
        ],
        "explanation": "cos 2x = cos²x − sin²x. Mit cos²x = 1 − sin²x folgt: cos 2x = 1 − sin²x − sin²x = 1 − 2sin²x.",
        "hint": "Gehen Sie von cos 2x = cos²x − sin²x aus und eliminieren Sie cos²x.",
        "whyWrong": [
          null,
          "Die Vorzeichen sind vertauscht: 2sin²x − 1 = −cos 2x.",
          "1 − sin²x = cos²x, nicht cos 2x.",
          "Das Quadrat fehlt: Es muss sin²x heißen, nicht sin x."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Zgjidhni ekuacionin 2cos²x − cos x − 1 = 0 në intervalin [0, 2π).",
        "options": [
          "2π/3, 4π/3",
          "0, π/3, 5π/3",
          "0, 2π/3",
          "0, 2π/3, 4π/3"
        ],
        "explanation": "Shënojmë t = cos x: 2t² − t − 1 = 0 ⇒ (2t + 1)(t − 1) = 0, pra t = 1 ose t = −1/2. cos x = 1 ⇒ x = 0; cos x = −1/2 ⇒ x = 2π/3 ose x = 4π/3. Zgjidhjet: 0, 2π/3, 4π/3.",
        "hint": "Zëvendësoni t = cos x dhe zgjidhni ekuacionin kuadratik.",
        "whyWrong": [
          "Keni humbur rrënjën cos x = 1, që jep x = 0.",
          "Keni marrë cos x = 1/2 (gabim shenje gjatë faktorizimit).",
          "Mungon x = 4π/3: cos x = −1/2 vlen edhe në kuadrantin III.",
          null
        ]
      },
      "en": {
        "question": "Solve 2cos²x − cos x − 1 = 0 on the interval [0, 2π).",
        "options": [
          "2π/3, 4π/3",
          "0, π/3, 5π/3",
          "0, 2π/3",
          "0, 2π/3, 4π/3"
        ],
        "explanation": "Let t = cos x: 2t² − t − 1 = 0 ⇒ (2t + 1)(t − 1) = 0, so t = 1 or t = −1/2. cos x = 1 ⇒ x = 0; cos x = −1/2 ⇒ x = 2π/3 or x = 4π/3. Solutions: 0, 2π/3, 4π/3.",
        "hint": "Substitute t = cos x and solve the quadratic equation.",
        "whyWrong": [
          "The root cos x = 1, which gives x = 0, is missing.",
          "You used cos x = 1/2 (a sign error when factoring).",
          "x = 4π/3 is missing: cos x = −1/2 in quadrant III as well.",
          null
        ]
      },
      "de": {
        "question": "Lösen Sie 2cos²x − cos x − 1 = 0 im Intervall [0, 2π).",
        "options": [
          "2π/3, 4π/3",
          "0, π/3, 5π/3",
          "0, 2π/3",
          "0, 2π/3, 4π/3"
        ],
        "explanation": "Setzen Sie t = cos x: 2t² − t − 1 = 0 ⇒ (2t + 1)(t − 1) = 0, also t = 1 oder t = −1/2. cos x = 1 ⇒ x = 0; cos x = −1/2 ⇒ x = 2π/3 oder x = 4π/3. Lösungen: 0, 2π/3, 4π/3.",
        "hint": "Substituieren Sie t = cos x und lösen Sie die quadratische Gleichung.",
        "whyWrong": [
          "Die Lösung cos x = 1, also x = 0, fehlt.",
          "Sie haben cos x = 1/2 verwendet (Vorzeichenfehler beim Faktorisieren).",
          "x = 4π/3 fehlt: cos x = −1/2 gilt auch im III. Quadranten.",
          null
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Gjeni vlerën e saktë të sin 75°.",
        "options": [
          "(√6 − √2)/4",
          "(√6 + √2)/4",
          "(√2 + 1)/2",
          "√6/4"
        ],
        "explanation": "sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.",
        "hint": "Shkruani 75° si shumë të dy këndeve të njohura dhe përdorni formulën e adicionit.",
        "whyWrong": [
          "Keni përdorur minus; (√6 − √2)/4 = sin 15°.",
          null,
          "sin(45° + 30°) ≠ sin 45° + sin 30°.",
          "Keni harruar termin e dytë cos 45° sin 30°."
        ]
      },
      "en": {
        "question": "Find the exact value of sin 75°.",
        "options": [
          "(√6 − √2)/4",
          "(√6 + √2)/4",
          "(√2 + 1)/2",
          "√6/4"
        ],
        "explanation": "sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.",
        "hint": "Write 75° as a sum of two known angles and use the addition formula.",
        "whyWrong": [
          "You used a minus sign; (√6 − √2)/4 = sin 15°.",
          null,
          "sin(45° + 30°) ≠ sin 45° + sin 30°.",
          "The second term cos 45° sin 30° is missing."
        ]
      },
      "de": {
        "question": "Bestimmen Sie den exakten Wert von sin 75°.",
        "options": [
          "(√6 − √2)/4",
          "(√6 + √2)/4",
          "(√2 + 1)/2",
          "√6/4"
        ],
        "explanation": "sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.",
        "hint": "Schreiben Sie 75° als Summe zweier bekannter Winkel und verwenden Sie das Additionstheorem.",
        "whyWrong": [
          "Sie haben ein Minus verwendet; (√6 − √2)/4 = sin 15°.",
          null,
          "sin(45° + 30°) ≠ sin 45° + sin 30°.",
          "Der zweite Summand cos 45° sin 30° fehlt."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Thjeshtoni shprehjen sin(x + π) + cos(x − π/2), me x në radianë.",
        "options": [
          "0",
          "2sin x",
          "−2sin x",
          "sin x − cos x"
        ],
        "explanation": "sin(x + π) = −sin x (zhvendosje me gjysmë rrotullimi). cos(x − π/2) = cos x cos(π/2) + sin x sin(π/2) = sin x. Shuma: −sin x + sin x = 0.",
        "hint": "Përdorni formulat e adicionit ose rrethin njësi për secilin term.",
        "whyWrong": [
          null,
          "sin(x + π) = −sin x, jo +sin x.",
          "cos(x − π/2) = +sin x, jo −sin x.",
          "Zhvendosjet me π dhe π/2 nuk mund të shpërfillen; ato e ndryshojnë funksionin."
        ]
      },
      "en": {
        "question": "Simplify sin(x + π) + cos(x − π/2), with x in radians.",
        "options": [
          "0",
          "2sin x",
          "−2sin x",
          "sin x − cos x"
        ],
        "explanation": "sin(x + π) = −sin x (a half-turn shift). cos(x − π/2) = cos x cos(π/2) + sin x sin(π/2) = sin x. Sum: −sin x + sin x = 0.",
        "hint": "Use the addition formulas or the unit circle for each term.",
        "whyWrong": [
          null,
          "sin(x + π) = −sin x, not +sin x.",
          "cos(x − π/2) = +sin x, not −sin x.",
          "The shifts by π and π/2 cannot be ignored; they change the function."
        ]
      },
      "de": {
        "question": "Vereinfachen Sie sin(x + π) + cos(x − π/2), mit x im Bogenmaß.",
        "options": [
          "0",
          "2sin x",
          "−2sin x",
          "sin x − cos x"
        ],
        "explanation": "sin(x + π) = −sin x (Verschiebung um eine halbe Umdrehung). cos(x − π/2) = cos x cos(π/2) + sin x sin(π/2) = sin x. Summe: −sin x + sin x = 0.",
        "hint": "Verwenden Sie für jeden Summanden die Additionstheoreme oder den Einheitskreis.",
        "whyWrong": [
          null,
          "sin(x + π) = −sin x, nicht +sin x.",
          "cos(x − π/2) = +sin x, nicht −sin x.",
          "Die Verschiebungen um π und π/2 dürfen nicht ignoriert werden; sie verändern die Funktion."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Sa është vlera maksimale e funksionit f(x) = 3 sin x + 4 cos x?",
        "options": [
          "7",
          "1",
          "12",
          "5"
        ],
        "explanation": "Shkruajmë a sin x + b cos x = R sin(x + φ), ku R = √(a² + b²) = √(9 + 16) = 5. Meqë sin(x + φ) ≤ 1, vlera maksimale është 5.",
        "hint": "Shkruajeni a sin x + b cos x në trajtën R sin(x + φ).",
        "whyWrong": [
          "sin x dhe cos x nuk bëhen 1 njëkohësisht, prandaj 3 + 4 nuk arrihet.",
          "4 − 3 = 1 nuk ka lidhje me amplitudën R = √(a² + b²).",
          "Amplituda nuk është prodhimi 3 · 4.",
          null
        ]
      },
      "en": {
        "question": "What is the maximum value of f(x) = 3 sin x + 4 cos x?",
        "options": [
          "7",
          "1",
          "12",
          "5"
        ],
        "explanation": "Write a sin x + b cos x = R sin(x + φ) with R = √(a² + b²) = √(9 + 16) = 5. Since sin(x + φ) ≤ 1, the maximum value is 5.",
        "hint": "Write a sin x + b cos x in the form R sin(x + φ).",
        "whyWrong": [
          "sin x and cos x never equal 1 at the same time, so 3 + 4 is not reached.",
          "4 − 3 = 1 has nothing to do with the amplitude R = √(a² + b²).",
          "The amplitude is not the product 3 · 4.",
          null
        ]
      },
      "de": {
        "question": "Wie groß ist der größte Wert von f(x) = 3 sin x + 4 cos x?",
        "options": [
          "7",
          "1",
          "12",
          "5"
        ],
        "explanation": "Schreiben Sie a sin x + b cos x = R sin(x + φ) mit R = √(a² + b²) = √(9 + 16) = 5. Da sin(x + φ) ≤ 1, ist der größte Wert 5.",
        "hint": "Schreiben Sie a sin x + b cos x in der Form R sin(x + φ).",
        "whyWrong": [
          "sin x und cos x sind nie gleichzeitig 1, daher wird 3 + 4 nicht erreicht.",
          "4 − 3 = 1 hat nichts mit der Amplitude R = √(a² + b²) zu tun.",
          "Die Amplitude ist nicht das Produkt 3 · 4.",
          null
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Këndet A dhe B janë të ngushtë, sin A = 4/5 dhe cos B = 5/13. Sa është cos(A − B)?",
        "options": [
          "−33/65",
          "56/65",
          "63/65",
          "−16/65"
        ],
        "explanation": "cos A = √(1 − 16/25) = 3/5, sin B = √(1 − 25/169) = 12/13. cos(A − B) = cos A cos B + sin A sin B = 3/5 · 5/13 + 4/5 · 12/13 = 15/65 + 48/65 = 63/65.",
        "hint": "Gjeni cos A dhe sin B, pastaj përdorni formulën për cos(A − B).",
        "whyWrong": [
          "Keni përdorur minus: −33/65 = cos(A + B).",
          "56/65 = sin(A + B); keni përdorur formulën e sinusit.",
          null,
          "−16/65 = sin(A − B), jo cos(A − B)."
        ]
      },
      "en": {
        "question": "A and B are acute angles with sin A = 4/5 and cos B = 5/13. What is cos(A − B)?",
        "options": [
          "−33/65",
          "56/65",
          "63/65",
          "−16/65"
        ],
        "explanation": "cos A = √(1 − 16/25) = 3/5, sin B = √(1 − 25/169) = 12/13. cos(A − B) = cos A cos B + sin A sin B = 3/5 · 5/13 + 4/5 · 12/13 = 15/65 + 48/65 = 63/65.",
        "hint": "Find cos A and sin B, then use the formula for cos(A − B).",
        "whyWrong": [
          "You used a minus sign: −33/65 = cos(A + B).",
          "56/65 = sin(A + B); you used the sine formula.",
          null,
          "−16/65 = sin(A − B), not cos(A − B)."
        ]
      },
      "de": {
        "question": "A und B sind spitze Winkel mit sin A = 4/5 und cos B = 5/13. Wie groß ist cos(A − B)?",
        "options": [
          "−33/65",
          "56/65",
          "63/65",
          "−16/65"
        ],
        "explanation": "cos A = √(1 − 16/25) = 3/5, sin B = √(1 − 25/169) = 12/13. cos(A − B) = cos A cos B + sin A sin B = 3/5 · 5/13 + 4/5 · 12/13 = 15/65 + 48/65 = 63/65.",
        "hint": "Bestimmen Sie cos A und sin B und verwenden Sie dann das Additionstheorem für cos(A − B).",
        "whyWrong": [
          "Sie haben ein Minus verwendet: −33/65 = cos(A + B).",
          "56/65 = sin(A + B); Sie haben die Sinusformel verwendet.",
          null,
          "−16/65 = sin(A − B), nicht cos(A − B)."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Zgjidhni ekuacionin sin 2x = cos x në intervalin [0, 2π).",
        "options": [
          "π/6, 5π/6",
          "π/6, π/2, 5π/6, 3π/2",
          "π/2, 3π/2",
          "π/6, π/2"
        ],
        "explanation": "2 sin x cos x − cos x = 0 ⇒ cos x(2 sin x − 1) = 0. cos x = 0 ⇒ x = π/2, 3π/2; sin x = 1/2 ⇒ x = π/6, 5π/6. Gjithsej katër zgjidhje: π/6, π/2, 5π/6, 3π/2.",
        "hint": "Mos pjesëtoni me cos x – nxirreni atë si faktor të përbashkët.",
        "whyWrong": [
          "Keni pjesëtuar me cos x dhe keni humbur zgjidhjet e cos x = 0.",
          null,
          "Keni humbur zgjidhjet e sin x = 1/2.",
          "Mungojnë 5π/6 dhe 3π/2; secili faktor jep dy zgjidhje."
        ]
      },
      "en": {
        "question": "Solve sin 2x = cos x on the interval [0, 2π).",
        "options": [
          "π/6, 5π/6",
          "π/6, π/2, 5π/6, 3π/2",
          "π/2, 3π/2",
          "π/6, π/2"
        ],
        "explanation": "2 sin x cos x − cos x = 0 ⇒ cos x(2 sin x − 1) = 0. cos x = 0 ⇒ x = π/2, 3π/2; sin x = 1/2 ⇒ x = π/6, 5π/6. Four solutions in total: π/6, π/2, 5π/6, 3π/2.",
        "hint": "Do not divide by cos x – factor it out instead.",
        "whyWrong": [
          "Dividing by cos x lost the solutions of cos x = 0.",
          null,
          "The solutions of sin x = 1/2 are missing.",
          "5π/6 and 3π/2 are missing; each factor gives two solutions."
        ]
      },
      "de": {
        "question": "Lösen Sie sin 2x = cos x im Intervall [0, 2π).",
        "options": [
          "π/6, 5π/6",
          "π/6, π/2, 5π/6, 3π/2",
          "π/2, 3π/2",
          "π/6, π/2"
        ],
        "explanation": "2 sin x cos x − cos x = 0 ⇒ cos x(2 sin x − 1) = 0. cos x = 0 ⇒ x = π/2, 3π/2; sin x = 1/2 ⇒ x = π/6, 5π/6. Insgesamt vier Lösungen: π/6, π/2, 5π/6, 3π/2.",
        "hint": "Dividieren Sie nicht durch cos x – klammern Sie cos x aus.",
        "whyWrong": [
          "Durch die Division durch cos x gingen die Lösungen von cos x = 0 verloren.",
          null,
          "Die Lösungen von sin x = 1/2 fehlen.",
          "5π/6 und 3π/2 fehlen; jeder Faktor liefert zwei Lösungen."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Thjeshtoni shprehjen sin⁴x − cos⁴x.",
        "options": [
          "cos 2x",
          "1",
          "sin 2x",
          "−cos 2x"
        ],
        "explanation": "Ndryshesë katrorësh: sin⁴x − cos⁴x = (sin²x − cos²x)(sin²x + cos²x) = sin²x − cos²x = −(cos²x − sin²x) = −cos 2x.",
        "hint": "Shikojeni shprehjen si ndryshesë katrorësh a² − b².",
        "whyWrong": [
          "sin²x − cos²x = −cos 2x; keni humbur shenjën minus.",
          "Vetëm faktori sin²x + cos²x është 1; faktori sin²x − cos²x mbetet.",
          "sin 2x = 2 sin x cos x nuk del këtu; vlen formula e këndit të dyfishtë për kosinusin.",
          null
        ]
      },
      "en": {
        "question": "Simplify sin⁴x − cos⁴x.",
        "options": [
          "cos 2x",
          "1",
          "sin 2x",
          "−cos 2x"
        ],
        "explanation": "Difference of squares: sin⁴x − cos⁴x = (sin²x − cos²x)(sin²x + cos²x) = sin²x − cos²x = −(cos²x − sin²x) = −cos 2x.",
        "hint": "Treat the expression as a difference of squares a² − b².",
        "whyWrong": [
          "sin²x − cos²x = −cos 2x; the minus sign was lost.",
          "Only the factor sin²x + cos²x equals 1; the factor sin²x − cos²x remains.",
          "sin 2x = 2 sin x cos x does not arise here; the cosine double-angle formula applies.",
          null
        ]
      },
      "de": {
        "question": "Vereinfachen Sie sin⁴x − cos⁴x.",
        "options": [
          "cos 2x",
          "1",
          "sin 2x",
          "−cos 2x"
        ],
        "explanation": "Dritte binomische Formel: sin⁴x − cos⁴x = (sin²x − cos²x)(sin²x + cos²x) = sin²x − cos²x = −(cos²x − sin²x) = −cos 2x.",
        "hint": "Betrachten Sie den Ausdruck als Differenz von Quadraten a² − b².",
        "whyWrong": [
          "sin²x − cos²x = −cos 2x; das Minuszeichen ging verloren.",
          "Nur der Faktor sin²x + cos²x ist 1; der Faktor sin²x − cos²x bleibt stehen.",
          "sin 2x = 2 sin x cos x tritt hier nicht auf; es gilt die Doppelwinkelformel des Kosinus.",
          null
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Nëse tg x = 2, sa është (sin x + cos x)/(sin x − cos x)?",
        "options": [
          "3",
          "−3",
          "1/3",
          "2"
        ],
        "explanation": "Pjesëtojmë numëruesin dhe emëruesin me cos x (cos x ≠ 0): (tg x + 1)/(tg x − 1) = (2 + 1)/(2 − 1) = 3.",
        "hint": "Pjesëtoni numëruesin dhe emëruesin me cos x.",
        "whyWrong": [
          null,
          "Keni ndërruar renditjen në emërues: (1 + tg x)/(1 − tg x) = −3.",
          "Keni përmbysur thyesën.",
          "2 është vetë tg x; ende duhet të pjesëtoni me cos x dhe të zëvendësoni."
        ]
      },
      "en": {
        "question": "If tan x = 2, what is (sin x + cos x)/(sin x − cos x)?",
        "options": [
          "3",
          "−3",
          "1/3",
          "2"
        ],
        "explanation": "Divide numerator and denominator by cos x (cos x ≠ 0): (tan x + 1)/(tan x − 1) = (2 + 1)/(2 − 1) = 3.",
        "hint": "Divide the numerator and the denominator by cos x.",
        "whyWrong": [
          null,
          "The order in the denominator was swapped: (1 + tan x)/(1 − tan x) = −3.",
          "You inverted the fraction.",
          "2 is just tan x; you still need to divide by cos x and substitute."
        ]
      },
      "de": {
        "question": "Es gilt tan x = 2. Wie groß ist (sin x + cos x)/(sin x − cos x)?",
        "options": [
          "3",
          "−3",
          "1/3",
          "2"
        ],
        "explanation": "Teilen Sie Zähler und Nenner durch cos x (cos x ≠ 0): (tan x + 1)/(tan x − 1) = (2 + 1)/(2 − 1) = 3.",
        "hint": "Teilen Sie Zähler und Nenner durch cos x.",
        "whyWrong": [
          null,
          "Die Reihenfolge im Nenner wurde vertauscht: (1 + tan x)/(1 − tan x) = −3.",
          "Sie haben den Bruch umgedreht.",
          "2 ist nur tan x; Sie müssen noch durch cos x teilen und einsetzen."
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": -0.28,
        "tolerance": 0.001
      },
      "al": {
        "question": "Dihet që cos x = 0,6. Llogaritni cos 2x. Shkruani rezultatin si numër dhjetor.",
        "explanation": "cos 2x = 2cos²x − 1 = 2 · 0,36 − 1 = 0,72 − 1 = −0,28.",
        "hint": "Përdorni formulën e këndit të dyfishtë që përmban vetëm cos x.",
        "commonMistakes": [
          {
            "value": 1.2,
            "why": "Keni llogaritur 2 · cos x = 1,2; cos 2x nuk është 2 cos x."
          },
          {
            "value": 0.28,
            "why": "Keni përdorur 1 − 2cos²x në vend të 2cos²x − 1, pra shenja është e kundërt."
          }
        ]
      },
      "en": {
        "question": "Given cos x = 0.6, calculate cos 2x. Give the result as a decimal number.",
        "explanation": "cos 2x = 2cos²x − 1 = 2 · 0.36 − 1 = 0.72 − 1 = −0.28.",
        "hint": "Use the double-angle formula that contains only cos x.",
        "commonMistakes": [
          {
            "value": 1.2,
            "why": "You calculated 2 · cos x = 1.2; cos 2x is not 2 cos x."
          },
          {
            "value": 0.28,
            "why": "You used 1 − 2cos²x instead of 2cos²x − 1, so the sign is reversed."
          }
        ]
      },
      "de": {
        "question": "Es gilt cos x = 0,6. Berechnen Sie cos 2x. Geben Sie das Ergebnis als Dezimalzahl an.",
        "explanation": "cos 2x = 2cos²x − 1 = 2 · 0,36 − 1 = 0,72 − 1 = −0,28.",
        "hint": "Verwenden Sie die Doppelwinkelformel, die nur cos x enthält.",
        "commonMistakes": [
          {
            "value": 1.2,
            "why": "Sie haben 2 · cos x = 1,2 gerechnet; cos 2x ist nicht 2 cos x."
          },
          {
            "value": 0.28,
            "why": "Sie haben 1 − 2cos²x statt 2cos²x − 1 verwendet, das Vorzeichen ist also vertauscht."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 4
      },
      "al": {
        "question": "Sa zgjidhje ka ekuacioni sin 2x = sin x në intervalin [0, 2π)?",
        "explanation": "sin 2x = 2 sin x cos x, pra 2 sin x cos x − sin x = 0 ⇒ sin x (2cos x − 1) = 0. sin x = 0 jep x = 0 dhe x = π; cos x = 1/2 jep x = π/3 dhe x = 5π/3. Gjithsej 4 zgjidhje.",
        "hint": "Shkruani sin 2x = 2 sin x cos x dhe nxirrni sin x si faktor të përbashkët (mos pjesëtoni me sin x).",
        "commonMistakes": [
          {
            "value": 2,
            "why": "Keni pjesëtuar me sin x dhe keni humbur zgjidhjet e sin x = 0 (x = 0 dhe x = π)."
          }
        ]
      },
      "en": {
        "question": "How many solutions does the equation sin 2x = sin x have in the interval [0, 2π)?",
        "explanation": "sin 2x = 2 sin x cos x, so 2 sin x cos x − sin x = 0 ⇒ sin x (2cos x − 1) = 0. sin x = 0 gives x = 0 and x = π; cos x = 1/2 gives x = π/3 and x = 5π/3. In total 4 solutions.",
        "hint": "Write sin 2x = 2 sin x cos x and factor out sin x (do not divide by sin x).",
        "commonMistakes": [
          {
            "value": 2,
            "why": "You divided by sin x and lost the solutions of sin x = 0 (x = 0 and x = π)."
          }
        ]
      },
      "de": {
        "question": "Wie viele Lösungen hat die Gleichung sin 2x = sin x im Intervall [0, 2π)?",
        "explanation": "sin 2x = 2 sin x cos x, also 2 sin x cos x − sin x = 0 ⇒ sin x (2cos x − 1) = 0. sin x = 0 liefert x = 0 und x = π; cos x = 1/2 liefert x = π/3 und x = 5π/3. Insgesamt 4 Lösungen.",
        "hint": "Schreiben Sie sin 2x = 2 sin x cos x und klammern Sie sin x aus (nicht durch sin x teilen).",
        "commonMistakes": [
          {
            "value": 2,
            "why": "Sie haben durch sin x geteilt und dabei die Lösungen von sin x = 0 (x = 0 und x = π) verloren."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": true,
      "al": {
        "question": "Për çdo x dhe y vlen cos(x − y) = cos x · cos y + sin x · sin y.",
        "explanation": "Kjo është formula e adicionit për kosinusin e diferencës. Kontroll me x = 60°, y = 30°: cos 30° = √3/2, dhe cos 60° cos 30° + sin 60° sin 30° = (1/2)(√3/2) + (√3/2)(1/2) = √3/2 ✓. Pohimi është i vërtetë.",
        "hint": "Kontrolloni formulën me dy kënde të njohura, p.sh. x = 60° dhe y = 30°.",
        "whyWrong": "Pohimi nuk është i gabuar: te kosinusi i diferencës shenja është «+» (te cos(x + y) është «−»); kontrolli me 60° dhe 30° e konfirmon."
      },
      "en": {
        "question": "For all x and y: cos(x − y) = cos x · cos y + sin x · sin y.",
        "explanation": "This is the subtraction formula for cosine. Check with x = 60°, y = 30°: cos 30° = √3/2, and cos 60° cos 30° + sin 60° sin 30° = (1/2)(√3/2) + (√3/2)(1/2) = √3/2 ✓. The statement is true.",
        "hint": "Check the formula with two known angles, e.g. x = 60° and y = 30°.",
        "whyWrong": "The statement is not false: for the cosine of a difference the sign is “+” (for cos(x + y) it is “−”); the check with 60° and 30° confirms it."
      },
      "de": {
        "question": "Für alle x und y gilt: cos(x − y) = cos x · cos y + sin x · sin y.",
        "explanation": "Das ist das Subtraktionstheorem des Kosinus. Probe mit x = 60°, y = 30°: cos 30° = √3/2, und cos 60° cos 30° + sin 60° sin 30° = (1/2)(√3/2) + (√3/2)(1/2) = √3/2 ✓. Die Aussage ist wahr.",
        "hint": "Prüfen Sie die Formel mit zwei bekannten Winkeln, z. B. x = 60° und y = 30°.",
        "whyWrong": "Die Aussage ist nicht falsch: Beim Kosinus einer Differenz steht ein „+“ (bei cos(x + y) ein „−“); die Probe mit 60° und 30° bestätigt das."
      }
    }
  ]
};
