// Quiz set "calc-easy" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "calc-easy",
  "difficulty": "beginner",
  "icon": "→",
  "color": "#3498DB",
  "i18n": {
    "al": {
      "title": "Limite Bazë",
      "category": "Kalkulus",
      "duration": "10 min"
    },
    "en": {
      "title": "Basic Limits",
      "category": "Calculus",
      "duration": "10 min"
    },
    "de": {
      "title": "Grundlegende Grenzwerte",
      "category": "Analysis",
      "duration": "10 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni limitin lim(x→3) (2x² − 1).",
        "options": [
          "11",
          "35",
          "5",
          "17"
        ],
        "explanation": "Polinomi është funksion i vazhdueshëm, prandaj zëvendësojmë x = 3: 2 · 3² − 1 = 2 · 9 − 1 = 17.",
        "hint": "Për polinomet, limiti gjendet duke zëvendësuar drejtpërdrejt vlerën e x.",
        "whyWrong": [
          "Keni llogaritur x² si 2x: 2 · 6 − 1.",
          "Keni ngritur në katror edhe koeficientin: (2 · 3)² − 1.",
          "Keni harruar katrorin: 2 · 3 − 1.",
          null
        ]
      },
      "en": {
        "question": "Evaluate lim(x→3) (2x² − 1).",
        "options": [
          "11",
          "35",
          "5",
          "17"
        ],
        "explanation": "A polynomial is continuous, so substitute x = 3: 2 · 3² − 1 = 2 · 9 − 1 = 17.",
        "hint": "For polynomials, the limit is found by direct substitution.",
        "whyWrong": [
          "You computed x² as 2x: 2 · 6 − 1.",
          "You squared the coefficient too: (2 · 3)² − 1.",
          "You forgot the square: 2 · 3 − 1.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→3) (2x² − 1).",
        "options": [
          "11",
          "35",
          "5",
          "17"
        ],
        "explanation": "Ein Polynom ist stetig, also setzen Sie x = 3 ein: 2 · 3² − 1 = 2 · 9 − 1 = 17.",
        "hint": "Bei Polynomen erhält man den Grenzwert durch direktes Einsetzen.",
        "whyWrong": [
          "Sie haben x² als 2x gerechnet: 2 · 6 − 1.",
          "Sie haben den Koeffizienten mitquadriert: (2 · 3)² − 1.",
          "Sie haben das Quadrat vergessen: 2 · 3 − 1.",
          null
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Llogaritni lim(x→2) (x² − 4)/(x − 2).",
        "options": [
          "0",
          "Nuk ekziston",
          "4",
          "2"
        ],
        "explanation": "Zëvendësimi i drejtpërdrejtë jep 0/0 (formë e pacaktuar). Faktorizojmë: x² − 4 = (x − 2)(x + 2). Thjeshtojmë: lim(x→2) (x + 2) = 4.",
        "hint": "Faktorizoni numëruesin si ndryshesë katrorësh.",
        "whyWrong": [
          "0/0 është formë e pacaktuar, jo 0.",
          "0/0 nuk do të thotë se limiti nuk ekziston; thjeshtoni fillimisht.",
          null,
          "Pas thjeshtimit mbetet x + 2, jo vetëm x."
        ]
      },
      "en": {
        "question": "Evaluate lim(x→2) (x² − 4)/(x − 2).",
        "options": [
          "0",
          "Does not exist",
          "4",
          "2"
        ],
        "explanation": "Direct substitution gives 0/0 (indeterminate form). Factor: x² − 4 = (x − 2)(x + 2). Cancel: lim(x→2) (x + 2) = 4.",
        "hint": "Factor the numerator as a difference of squares.",
        "whyWrong": [
          "0/0 is an indeterminate form, not 0.",
          "0/0 does not mean the limit fails to exist; simplify first.",
          null,
          "After cancelling, x + 2 remains, not just x."
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→2) (x² − 4)/(x − 2).",
        "options": [
          "0",
          "Existiert nicht",
          "4",
          "2"
        ],
        "explanation": "Direktes Einsetzen ergibt 0/0 (unbestimmter Ausdruck). Faktorisieren: x² − 4 = (x − 2)(x + 2). Kürzen: lim(x→2) (x + 2) = 4.",
        "hint": "Faktorisieren Sie den Zähler mit der dritten binomischen Formel.",
        "whyWrong": [
          "0/0 ist ein unbestimmter Ausdruck, nicht 0.",
          "0/0 bedeutet nicht, dass der Grenzwert nicht existiert; kürzen Sie zuerst.",
          null,
          "Nach dem Kürzen bleibt x + 2, nicht nur x."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Llogaritni lim(x→∞) (3x² + 1)/(x² − 5).",
        "options": [
          "3",
          "∞",
          "0",
          "−1/5"
        ],
        "explanation": "Pjesëtojmë numëruesin dhe emëruesin me x²: (3 + 1/x²)/(1 − 5/x²) → (3 + 0)/(1 − 0) = 3.",
        "hint": "Pjesëtoni numëruesin dhe emëruesin me fuqinë më të lartë të x.",
        "whyWrong": [
          null,
          "Edhe emëruesi rritet; kur shkallët janë të barabarta, limiti është i fundëm.",
          "Limiti është 0 vetëm kur emëruesi ka shkallë më të lartë.",
          "−1/5 është vlera për x = 0, por këtu x → ∞."
        ]
      },
      "en": {
        "question": "Evaluate lim(x→∞) (3x² + 1)/(x² − 5).",
        "options": [
          "3",
          "∞",
          "0",
          "−1/5"
        ],
        "explanation": "Divide numerator and denominator by x²: (3 + 1/x²)/(1 − 5/x²) → (3 + 0)/(1 − 0) = 3.",
        "hint": "Divide numerator and denominator by the highest power of x.",
        "whyWrong": [
          null,
          "The denominator grows too; with equal degrees the limit is finite.",
          "The limit is 0 only when the denominator has the higher degree.",
          "−1/5 is the value at x = 0, but here x → ∞."
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→∞) (3x² + 1)/(x² − 5).",
        "options": [
          "3",
          "∞",
          "0",
          "−1/5"
        ],
        "explanation": "Teilen Sie Zähler und Nenner durch x²: (3 + 1/x²)/(1 − 5/x²) → (3 + 0)/(1 − 0) = 3.",
        "hint": "Teilen Sie Zähler und Nenner durch die höchste Potenz von x.",
        "whyWrong": [
          null,
          "Auch der Nenner wächst; bei gleichem Grad ist der Grenzwert endlich.",
          "Der Grenzwert ist nur dann 0, wenn der Nenner den höheren Grad hat.",
          "−1/5 ist der Wert bei x = 0, hier gilt aber x → ∞."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Llogaritni lim(x→∞) (5x + 2)/(x² + 1).",
        "options": [
          "5",
          "0",
          "∞",
          "2"
        ],
        "explanation": "Pjesëtojmë me x²: (5/x + 2/x²)/(1 + 1/x²) → (0 + 0)/(1 + 0) = 0. Emëruesi ka shkallë më të lartë, ndaj rritet më shpejt.",
        "hint": "Krahasoni shkallën e numëruesit me shkallën e emëruesit.",
        "whyWrong": [
          "Raporti i koeficientëve vlen vetëm kur shkallët janë të barabarta.",
          null,
          "Emëruesi x² rritet më shpejt se numëruesi 5x.",
          "2 është vlera për x = 0, por këtu x → ∞."
        ]
      },
      "en": {
        "question": "Evaluate lim(x→∞) (5x + 2)/(x² + 1).",
        "options": [
          "5",
          "0",
          "∞",
          "2"
        ],
        "explanation": "Divide by x²: (5/x + 2/x²)/(1 + 1/x²) → (0 + 0)/(1 + 0) = 0. The denominator has the higher degree, so it grows faster.",
        "hint": "Compare the degree of the numerator with the degree of the denominator.",
        "whyWrong": [
          "The ratio of coefficients only applies when the degrees are equal.",
          null,
          "The denominator x² grows faster than the numerator 5x.",
          "2 is the value at x = 0, but here x → ∞."
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→∞) (5x + 2)/(x² + 1).",
        "options": [
          "5",
          "0",
          "∞",
          "2"
        ],
        "explanation": "Teilen durch x²: (5/x + 2/x²)/(1 + 1/x²) → (0 + 0)/(1 + 0) = 0. Der Nenner hat den höheren Grad und wächst schneller.",
        "hint": "Vergleichen Sie den Grad des Zählers mit dem Grad des Nenners.",
        "whyWrong": [
          "Das Verhältnis der Koeffizienten gilt nur bei gleichem Grad.",
          null,
          "Der Nenner x² wächst schneller als der Zähler 5x.",
          "2 ist der Wert bei x = 0, hier gilt aber x → ∞."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni lim(x→0) sin(3x)/x, me x në radianë.",
        "options": [
          "1",
          "1/3",
          "0",
          "3"
        ],
        "explanation": "Shkruajmë sin(3x)/x = 3 · sin(3x)/(3x). Meqë lim(t→0) sin t / t = 1 (me t = 3x), limiti është 3 · 1 = 3.",
        "hint": "Shumëzoni dhe pjesëtoni me 3 që të përdorni limitin e njohur sin t / t.",
        "whyWrong": [
          "Limiti i njohur kërkon të njëjtin argument lart e poshtë: sin(3x)/(3x), jo sin(3x)/x.",
          "Keni pjesëtuar me 3 në vend që të shumëzoni.",
          "sin 0 = 0 jep formën 0/0, e cila nuk është 0.",
          null
        ]
      },
      "en": {
        "question": "Evaluate lim(x→0) sin(3x)/x, with x in radians.",
        "options": [
          "1",
          "1/3",
          "0",
          "3"
        ],
        "explanation": "Write sin(3x)/x = 3 · sin(3x)/(3x). Since lim(t→0) sin t / t = 1 (with t = 3x), the limit is 3 · 1 = 3.",
        "hint": "Multiply and divide by 3 so you can use the known limit sin t / t.",
        "whyWrong": [
          "The known limit needs the same argument on top and bottom: sin(3x)/(3x), not sin(3x)/x.",
          "You divided by 3 instead of multiplying.",
          "sin 0 = 0 gives the form 0/0, which is not 0.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→0) sin(3x)/x, mit x im Bogenmaß.",
        "options": [
          "1",
          "1/3",
          "0",
          "3"
        ],
        "explanation": "Schreiben Sie sin(3x)/x = 3 · sin(3x)/(3x). Da lim(t→0) sin t / t = 1 (mit t = 3x), ist der Grenzwert 3 · 1 = 3.",
        "hint": "Erweitern Sie mit 3, um den bekannten Grenzwert sin t / t zu nutzen.",
        "whyWrong": [
          "Der bekannte Grenzwert braucht oben und unten dasselbe Argument: sin(3x)/(3x), nicht sin(3x)/x.",
          "Sie haben durch 3 geteilt, statt mit 3 zu multiplizieren.",
          "sin 0 = 0 ergibt die Form 0/0, und die ist nicht 0.",
          null
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Llogaritni lim(x→9) (x − 9)/(√x − 3).",
        "options": [
          "6",
          "0",
          "3",
          "Nuk ekziston"
        ],
        "explanation": "Zëvendësimi jep 0/0. Shkruajmë x − 9 = (√x − 3)(√x + 3). Thjeshtojmë: lim(x→9) (√x + 3) = 3 + 3 = 6.",
        "hint": "Shkruani x − 9 si ndryshesë katrorësh me √x.",
        "whyWrong": [
          null,
          "0/0 është formë e pacaktuar, jo 0.",
          "Pas thjeshtimit mbetet √x + 3; keni harruar + 3.",
          "Limiti ekziston; forma 0/0 zhduket pas thjeshtimit."
        ]
      },
      "en": {
        "question": "Evaluate lim(x→9) (x − 9)/(√x − 3).",
        "options": [
          "6",
          "0",
          "3",
          "Does not exist"
        ],
        "explanation": "Substitution gives 0/0. Write x − 9 = (√x − 3)(√x + 3). Cancel: lim(x→9) (√x + 3) = 3 + 3 = 6.",
        "hint": "Write x − 9 as a difference of squares using √x.",
        "whyWrong": [
          null,
          "0/0 is an indeterminate form, not 0.",
          "After cancelling, √x + 3 remains; the + 3 was forgotten.",
          "The limit exists; the 0/0 form disappears after cancelling."
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→9) (x − 9)/(√x − 3).",
        "options": [
          "6",
          "0",
          "3",
          "Existiert nicht"
        ],
        "explanation": "Einsetzen ergibt 0/0. Schreiben Sie x − 9 = (√x − 3)(√x + 3). Kürzen: lim(x→9) (√x + 3) = 3 + 3 = 6.",
        "hint": "Schreiben Sie x − 9 mit √x als Differenz von Quadraten.",
        "whyWrong": [
          null,
          "0/0 ist ein unbestimmter Ausdruck, nicht 0.",
          "Nach dem Kürzen bleibt √x + 3; das + 3 wurde vergessen.",
          "Der Grenzwert existiert; die Form 0/0 verschwindet nach dem Kürzen."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Llogaritni lim(x→1) (x² + x − 2)/(x − 1).",
        "options": [
          "0",
          "−1",
          "3",
          "∞"
        ],
        "explanation": "Zëvendësimi jep 0/0. Faktorizojmë: x² + x − 2 = (x − 1)(x + 2). Thjeshtojmë: lim(x→1) (x + 2) = 3.",
        "hint": "Gjeni dy numra me prodhim −2 dhe shumë 1 për të faktorizuar numëruesin.",
        "whyWrong": [
          "0/0 është formë e pacaktuar, jo 0.",
          "Faktorizim i gabuar: (x − 1)(x − 2) jep x² − 3x + 2.",
          null,
          "Emëruesi shkon në 0, por edhe numëruesi; pas thjeshtimit limiti është i fundëm."
        ]
      },
      "en": {
        "question": "Evaluate lim(x→1) (x² + x − 2)/(x − 1).",
        "options": [
          "0",
          "−1",
          "3",
          "∞"
        ],
        "explanation": "Substitution gives 0/0. Factor: x² + x − 2 = (x − 1)(x + 2). Cancel: lim(x→1) (x + 2) = 3.",
        "hint": "Find two numbers with product −2 and sum 1 to factor the numerator.",
        "whyWrong": [
          "0/0 is an indeterminate form, not 0.",
          "Wrong factorisation: (x − 1)(x − 2) gives x² − 3x + 2.",
          null,
          "The denominator tends to 0, but so does the numerator; after cancelling the limit is finite."
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→1) (x² + x − 2)/(x − 1).",
        "options": [
          "0",
          "−1",
          "3",
          "∞"
        ],
        "explanation": "Einsetzen ergibt 0/0. Faktorisieren: x² + x − 2 = (x − 1)(x + 2). Kürzen: lim(x→1) (x + 2) = 3.",
        "hint": "Suchen Sie zwei Zahlen mit Produkt −2 und Summe 1, um den Zähler zu faktorisieren.",
        "whyWrong": [
          "0/0 ist ein unbestimmter Ausdruck, nicht 0.",
          "Falsch faktorisiert: (x − 1)(x − 2) ergibt x² − 3x + 2.",
          null,
          "Der Nenner geht gegen 0, der Zähler aber auch; nach dem Kürzen ist der Grenzwert endlich."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Sa është lim(x→0⁺) 1/x, kur x i afrohet 0 nga e djathta?",
        "options": [
          "0",
          "+∞",
          "−∞",
          "1"
        ],
        "explanation": "Për x > 0 shumë të vogël, 1/x është pozitiv dhe shumë i madh (p.sh. 1/0,001 = 1000). Prandaj limiti është +∞.",
        "hint": "Provoni vlera si x = 0,1; 0,01; 0,001.",
        "whyWrong": [
          "0 është lim(x→∞) 1/x; këtu x → 0.",
          null,
          "−∞ është limiti nga e majta (x → 0⁻).",
          "1/x nuk afrohet te 1; pjesëtimi me numra shumë të vegjël jep numra shumë të mëdhenj."
        ]
      },
      "en": {
        "question": "What is lim(x→0⁺) 1/x, as x approaches 0 from the right?",
        "options": [
          "0",
          "+∞",
          "−∞",
          "1"
        ],
        "explanation": "For very small x > 0, 1/x is positive and very large (e.g. 1/0.001 = 1000). So the limit is +∞.",
        "hint": "Try values such as x = 0.1, 0.01, 0.001.",
        "whyWrong": [
          "0 is lim(x→∞) 1/x; here x → 0.",
          null,
          "−∞ is the limit from the left (x → 0⁻).",
          "1/x does not approach 1; dividing by very small numbers gives very large numbers."
        ]
      },
      "de": {
        "question": "Wie lautet lim(x→0⁺) 1/x, wenn x sich 0 von rechts nähert?",
        "options": [
          "0",
          "+∞",
          "−∞",
          "1"
        ],
        "explanation": "Für sehr kleine x > 0 ist 1/x positiv und sehr groß (z. B. 1/0,001 = 1000). Also ist der Grenzwert +∞.",
        "hint": "Probieren Sie Werte wie x = 0,1; 0,01; 0,001.",
        "whyWrong": [
          "0 ist lim(x→∞) 1/x; hier gilt x → 0.",
          null,
          "−∞ ist der linksseitige Grenzwert (x → 0⁻).",
          "1/x nähert sich nicht 1; Division durch sehr kleine Zahlen ergibt sehr große Zahlen."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Jepet f(x) = x + a për x < 2 dhe f(x) = 3x për x ≥ 2. Për cilën vlerë të a funksioni është i vazhdueshëm në x = 2?",
        "options": [
          "4",
          "6",
          "2",
          "−4"
        ],
        "explanation": "Limiti nga e majta: 2 + a. Limiti nga e djathta dhe f(2): 3 · 2 = 6. Kushti i vazhdueshmërisë: 2 + a = 6 ⇒ a = 4.",
        "hint": "Barazoni limitin nga e majta me limitin nga e djathta në x = 2.",
        "whyWrong": [
          null,
          "6 është vlera f(2); duhet ende të zgjidhni 2 + a = 6.",
          "Keni marrë a të barabartë me vlerën x = 2.",
          "Gabim shenje: nga 2 + a = 6 del a = 6 − 2."
        ]
      },
      "en": {
        "question": "Let f(x) = x + a for x < 2 and f(x) = 3x for x ≥ 2. For which value of a is f continuous at x = 2?",
        "options": [
          "4",
          "6",
          "2",
          "−4"
        ],
        "explanation": "Left-hand limit: 2 + a. Right-hand limit and f(2): 3 · 2 = 6. Continuity requires 2 + a = 6 ⇒ a = 4.",
        "hint": "Set the left-hand limit equal to the right-hand limit at x = 2.",
        "whyWrong": [
          null,
          "6 is the value f(2); you still need to solve 2 + a = 6.",
          "You set a equal to the x-value 2.",
          "Sign error: 2 + a = 6 gives a = 6 − 2."
        ]
      },
      "de": {
        "question": "Gegeben ist f(x) = x + a für x < 2 und f(x) = 3x für x ≥ 2. Für welchen Wert von a ist f an der Stelle x = 2 stetig?",
        "options": [
          "4",
          "6",
          "2",
          "−4"
        ],
        "explanation": "Linksseitiger Grenzwert: 2 + a. Rechtsseitiger Grenzwert und f(2): 3 · 2 = 6. Stetigkeit verlangt 2 + a = 6 ⇒ a = 4.",
        "hint": "Setzen Sie den linksseitigen und den rechtsseitigen Grenzwert bei x = 2 gleich.",
        "whyWrong": [
          null,
          "6 ist der Funktionswert f(2); Sie müssen noch 2 + a = 6 lösen.",
          "Sie haben a gleich dem x-Wert 2 gesetzt.",
          "Vorzeichenfehler: Aus 2 + a = 6 folgt a = 6 − 2."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni lim(x→−1) (x³ + 1)/(x + 1).",
        "options": [
          "0",
          "1",
          "Nuk ekziston",
          "3"
        ],
        "explanation": "Zëvendësimi jep 0/0. Shuma e kubeve: x³ + 1 = (x + 1)(x² − x + 1). Thjeshtojmë: lim(x→−1) (x² − x + 1) = 1 + 1 + 1 = 3.",
        "hint": "Përdorni formulën e shumës së kubeve a³ + b³ = (a + b)(a² − ab + b²).",
        "whyWrong": [
          "0/0 është formë e pacaktuar, jo 0.",
          "Gabim shenje: faktori është x² − x + 1, jo x² + x + 1.",
          "Limiti ekziston; pas thjeshtimit mbetet një polinom.",
          null
        ]
      },
      "en": {
        "question": "Evaluate lim(x→−1) (x³ + 1)/(x + 1).",
        "options": [
          "0",
          "1",
          "Does not exist",
          "3"
        ],
        "explanation": "Substitution gives 0/0. Sum of cubes: x³ + 1 = (x + 1)(x² − x + 1). Cancel: lim(x→−1) (x² − x + 1) = 1 + 1 + 1 = 3.",
        "hint": "Use the sum of cubes a³ + b³ = (a + b)(a² − ab + b²).",
        "whyWrong": [
          "0/0 is an indeterminate form, not 0.",
          "Sign error: the factor is x² − x + 1, not x² + x + 1.",
          "The limit exists; after cancelling a polynomial remains.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→−1) (x³ + 1)/(x + 1).",
        "options": [
          "0",
          "1",
          "Existiert nicht",
          "3"
        ],
        "explanation": "Einsetzen ergibt 0/0. Summe von Kuben: x³ + 1 = (x + 1)(x² − x + 1). Kürzen: lim(x→−1) (x² − x + 1) = 1 + 1 + 1 = 3.",
        "hint": "Verwenden Sie die Formel a³ + b³ = (a + b)(a² − ab + b²).",
        "whyWrong": [
          "0/0 ist ein unbestimmter Ausdruck, nicht 0.",
          "Vorzeichenfehler: Der Faktor ist x² − x + 1, nicht x² + x + 1.",
          "Der Grenzwert existiert; nach dem Kürzen bleibt ein Polynom.",
          null
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 0.25,
        "tolerance": 0.001
      },
      "al": {
        "question": "Llogaritni lim(x→0) (√(x + 4) − 2)/x. Shkruani rezultatin si numër dhjetor.",
        "explanation": "Zëvendësimi i drejtpërdrejtë jep 0/0. Shumëzojmë numëruesin dhe emëruesin me √(x + 4) + 2: (x + 4 − 4)/(x(√(x + 4) + 2)) = 1/(√(x + 4) + 2). Për x → 0: 1/(2 + 2) = 1/4 = 0,25.",
        "hint": "Shumëzoni me të konjuguarën e numëruesit, √(x + 4) + 2.",
        "commonMistakes": [
          {
            "value": 4,
            "why": "Keni marrë emëruesin √(x + 4) + 2 → 4 si rezultat, duke harruar se ai mbetet në emërues: 1/4."
          },
          {
            "value": 0,
            "why": "Forma 0/0 nuk do të thotë që limiti është 0; ajo është e papërcaktuar dhe duhet thjeshtuar."
          }
        ]
      },
      "en": {
        "question": "Evaluate lim(x→0) (√(x + 4) − 2)/x. Give the result as a decimal number.",
        "explanation": "Direct substitution gives 0/0. Multiply numerator and denominator by √(x + 4) + 2: (x + 4 − 4)/(x(√(x + 4) + 2)) = 1/(√(x + 4) + 2). As x → 0: 1/(2 + 2) = 1/4 = 0.25.",
        "hint": "Multiply by the conjugate of the numerator, √(x + 4) + 2.",
        "commonMistakes": [
          {
            "value": 4,
            "why": "You took the denominator √(x + 4) + 2 → 4 as the result, forgetting that it stays in the denominator: 1/4."
          },
          {
            "value": 0,
            "why": "The form 0/0 does not mean the limit is 0; it is indeterminate and has to be simplified."
          }
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→0) (√(x + 4) − 2)/x. Geben Sie das Ergebnis als Dezimalzahl an.",
        "explanation": "Direktes Einsetzen ergibt 0/0. Zähler und Nenner mit √(x + 4) + 2 erweitern: (x + 4 − 4)/(x(√(x + 4) + 2)) = 1/(√(x + 4) + 2). Für x → 0: 1/(2 + 2) = 1/4 = 0,25.",
        "hint": "Erweitern Sie mit dem konjugierten Ausdruck des Zählers, √(x + 4) + 2.",
        "commonMistakes": [
          {
            "value": 4,
            "why": "Sie haben den Nenner √(x + 4) + 2 → 4 als Ergebnis genommen und übersehen, dass er im Nenner bleibt: 1/4."
          },
          {
            "value": 0,
            "why": "Die Form 0/0 bedeutet nicht, dass der Grenzwert 0 ist; sie ist unbestimmt und muss vereinfacht werden."
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
        "question": "Llogaritni lim(x→−2) (x² + 5x + 6)/(x + 2).",
        "explanation": "Për x = −2 marrim 0/0. Faktorizojmë: x² + 5x + 6 = (x + 2)(x + 3). Thjeshtojmë: (x + 2)(x + 3)/(x + 2) = x + 3. Për x → −2: −2 + 3 = 1.",
        "hint": "Faktorizoni numëruesin; njëri faktor do të thjeshtohet me emëruesin.",
        "commonMistakes": [
          {
            "value": 0,
            "why": "Forma 0/0 nuk do të thotë që limiti është 0; duhet faktorizuar dhe thjeshtuar."
          },
          {
            "value": 5,
            "why": "Keni zëvendësuar x = 2 në vend të x = −2 te x + 3."
          }
        ]
      },
      "en": {
        "question": "Evaluate lim(x→−2) (x² + 5x + 6)/(x + 2).",
        "explanation": "For x = −2 we get 0/0. Factor: x² + 5x + 6 = (x + 2)(x + 3). Cancel: (x + 2)(x + 3)/(x + 2) = x + 3. As x → −2: −2 + 3 = 1.",
        "hint": "Factor the numerator; one factor will cancel with the denominator.",
        "commonMistakes": [
          {
            "value": 0,
            "why": "The form 0/0 does not mean the limit is 0; you have to factor and cancel."
          },
          {
            "value": 5,
            "why": "You substituted x = 2 instead of x = −2 into x + 3."
          }
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→−2) (x² + 5x + 6)/(x + 2).",
        "explanation": "Für x = −2 ergibt sich 0/0. Faktorisieren: x² + 5x + 6 = (x + 2)(x + 3). Kürzen: (x + 2)(x + 3)/(x + 2) = x + 3. Für x → −2: −2 + 3 = 1.",
        "hint": "Faktorisieren Sie den Zähler; ein Faktor lässt sich mit dem Nenner kürzen.",
        "commonMistakes": [
          {
            "value": 0,
            "why": "Die Form 0/0 bedeutet nicht, dass der Grenzwert 0 ist; man muss faktorisieren und kürzen."
          },
          {
            "value": 5,
            "why": "Sie haben x = 2 statt x = −2 in x + 3 eingesetzt."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": false,
      "al": {
        "question": "Nëse f(a) nuk është i përcaktuar, atëherë lim(x→a) f(x) nuk mund të ekzistojë.",
        "explanation": "Limiti varet vetëm nga vlerat e f pranë a, jo nga vlera në a. Për shembull, f(x) = (x² − 4)/(x − 2) nuk është i përcaktuar në x = 2, por lim(x→2) f(x) = lim(x→2) (x + 2) = 4. Pohimi është i gabuar.",
        "hint": "Kujtoni një limit të formës 0/0 që e keni llogaritur më parë.",
        "whyWrong": "Pohimi nuk është i vërtetë: limiti mund të ekzistojë edhe kur funksioni nuk është i përcaktuar në atë pikë, p.sh. (x² − 4)/(x − 2) për x → 2 jep 4."
      },
      "en": {
        "question": "If f(a) is not defined, then lim(x→a) f(x) cannot exist.",
        "explanation": "A limit depends only on the values of f near a, not on the value at a. For example, f(x) = (x² − 4)/(x − 2) is not defined at x = 2, but lim(x→2) f(x) = lim(x→2) (x + 2) = 4. The statement is false.",
        "hint": "Recall a 0/0 limit you have already evaluated.",
        "whyWrong": "The statement is not true: the limit can exist even if the function is undefined at that point, e.g. (x² − 4)/(x − 2) as x → 2 gives 4."
      },
      "de": {
        "question": "Ist f(a) nicht definiert, dann kann lim(x→a) f(x) nicht existieren.",
        "explanation": "Ein Grenzwert hängt nur von den Werten von f in der Nähe von a ab, nicht vom Wert an der Stelle a. Beispiel: f(x) = (x² − 4)/(x − 2) ist bei x = 2 nicht definiert, aber lim(x→2) f(x) = lim(x→2) (x + 2) = 4. Die Aussage ist falsch.",
        "hint": "Denken Sie an einen Grenzwert der Form 0/0, den Sie schon berechnet haben.",
        "whyWrong": "Die Aussage stimmt nicht: Der Grenzwert kann existieren, auch wenn die Funktion an der Stelle nicht definiert ist, z. B. (x² − 4)/(x − 2) für x → 2 ergibt 4."
      }
    }
  ]
};
