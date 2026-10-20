// Quiz set "calc-hard" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).

export default {
  "id": "calc-hard",
  "difficulty": "advanced",
  "icon": "∫",
  "color": "#45B7D1",
  "i18n": {
    "al": {
      "title": "Limite, Derivate & Integrale",
      "category": "Kalkulus",
      "duration": "15 min"
    },
    "en": {
      "title": "Limits, Derivatives & Integrals",
      "category": "Calculus",
      "duration": "15 min"
    },
    "de": {
      "title": "Grenzwerte, Ableitungen & Integrale",
      "category": "Analysis",
      "duration": "15 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Llogaritni lim(x→0) (1 − cos x)/x², me x në radianë.",
        "options": [
          "1/2",
          "0",
          "1",
          "2"
        ],
        "explanation": "Shumëzojmë me (1 + cos x): (1 − cos²x)/(x²(1 + cos x)) = (sin x / x)² · 1/(1 + cos x) → 1² · 1/2 = 1/2.",
        "hint": "Shumëzoni numëruesin dhe emëruesin me 1 + cos x, ose përdorni rregullin e L’Hôpital-it.",
        "whyWrong": [
          null,
          "0/0 është formë e pacaktuar, jo 0.",
          "Keni ngatërruar me limitin sin x / x = 1; mungon faktori 1/(1 + cos x) → 1/2.",
          "Keni përmbysur rezultatin; emëruesi 1 + cos x → 2 jep 1/2."
        ]
      },
      "en": {
        "question": "Evaluate lim(x→0) (1 − cos x)/x², with x in radians.",
        "options": [
          "1/2",
          "0",
          "1",
          "2"
        ],
        "explanation": "Multiply by (1 + cos x): (1 − cos²x)/(x²(1 + cos x)) = (sin x / x)² · 1/(1 + cos x) → 1² · 1/2 = 1/2.",
        "hint": "Multiply numerator and denominator by 1 + cos x, or use L’Hôpital’s rule.",
        "whyWrong": [
          null,
          "0/0 is an indeterminate form, not 0.",
          "Confused with sin x / x = 1; the factor 1/(1 + cos x) → 1/2 is missing.",
          "You inverted the result; the denominator 1 + cos x → 2 gives 1/2."
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→0) (1 − cos x)/x², mit x im Bogenmaß.",
        "options": [
          "1/2",
          "0",
          "1",
          "2"
        ],
        "explanation": "Erweitern mit (1 + cos x): (1 − cos²x)/(x²(1 + cos x)) = (sin x / x)² · 1/(1 + cos x) → 1² · 1/2 = 1/2.",
        "hint": "Erweitern Sie mit 1 + cos x oder verwenden Sie die Regel von L’Hospital.",
        "whyWrong": [
          null,
          "0/0 ist ein unbestimmter Ausdruck, nicht 0.",
          "Verwechslung mit sin x / x = 1; der Faktor 1/(1 + cos x) → 1/2 fehlt.",
          "Sie haben das Ergebnis umgedreht; der Nenner 1 + cos x → 2 ergibt 1/2."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni lim(x→∞) (1 + 2/x)ˣ.",
        "options": [
          "1",
          "e",
          "∞",
          "e²"
        ],
        "explanation": "Me t = x/2 kemi (1 + 2/x)ˣ = ((1 + 1/t)ᵗ)². Meqë (1 + 1/t)ᵗ → e kur t → ∞, limiti është e².",
        "hint": "Zëvendësoni t = x/2 dhe përdorni limitin e njohur (1 + 1/t)ᵗ → e.",
        "whyWrong": [
          "Forma «1 në fuqinë ∞» është e pacaktuar; nuk jep automatikisht 1.",
          "Keni shpërfillur numrin 2: (1 + 1/x)ˣ → e, por këtu kemi 2/x.",
          "Baza afrohet te 1 dhe e kompenson rritjen e eksponentit; limiti është i fundëm.",
          null
        ]
      },
      "en": {
        "question": "Evaluate lim(x→∞) (1 + 2/x)ˣ.",
        "options": [
          "1",
          "e",
          "∞",
          "e²"
        ],
        "explanation": "With t = x/2, (1 + 2/x)ˣ = ((1 + 1/t)ᵗ)². Since (1 + 1/t)ᵗ → e as t → ∞, the limit is e².",
        "hint": "Substitute t = x/2 and use the known limit (1 + 1/t)ᵗ → e.",
        "whyWrong": [
          "The form “1 to the power ∞” is indeterminate; it does not automatically give 1.",
          "You ignored the 2: (1 + 1/x)ˣ → e, but here it is 2/x.",
          "The base tends to 1 and offsets the growing exponent; the limit is finite.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→∞) (1 + 2/x)ˣ.",
        "options": [
          "1",
          "e",
          "∞",
          "e²"
        ],
        "explanation": "Mit t = x/2 gilt (1 + 2/x)ˣ = ((1 + 1/t)ᵗ)². Da (1 + 1/t)ᵗ → e für t → ∞, ist der Grenzwert e².",
        "hint": "Substituieren Sie t = x/2 und nutzen Sie den bekannten Grenzwert (1 + 1/t)ᵗ → e.",
        "whyWrong": [
          "Die Form „1 hoch ∞“ ist unbestimmt; sie ergibt nicht automatisch 1.",
          "Sie haben die 2 ignoriert: (1 + 1/x)ˣ → e, hier steht aber 2/x.",
          "Die Basis geht gegen 1 und gleicht den wachsenden Exponenten aus; der Grenzwert ist endlich.",
          null
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Gjeni derivatin e f(x) = x·ln x, për x > 0.",
        "options": [
          "1/x",
          "ln x + 1",
          "ln x",
          "ln x + x"
        ],
        "explanation": "Rregulli i prodhimit: f′(x) = (x)′ · ln x + x · (ln x)′ = 1 · ln x + x · 1/x = ln x + 1.",
        "hint": "Përdorni rregullin e prodhimit me u = x dhe v = ln x.",
        "whyWrong": [
          "Keni shumëzuar derivatet: 1 · 1/x.",
          null,
          "Mungon termi i dytë x · (ln x)′ = 1.",
          "Termi i dytë është x · 1/x = 1, jo x."
        ]
      },
      "en": {
        "question": "Find the derivative of f(x) = x·ln x, for x > 0.",
        "options": [
          "1/x",
          "ln x + 1",
          "ln x",
          "ln x + x"
        ],
        "explanation": "Product rule: f′(x) = (x)′ · ln x + x · (ln x)′ = 1 · ln x + x · 1/x = ln x + 1.",
        "hint": "Use the product rule with u = x and v = ln x.",
        "whyWrong": [
          "You multiplied the derivatives: 1 · 1/x.",
          null,
          "The second term x · (ln x)′ = 1 is missing.",
          "The second term is x · 1/x = 1, not x."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Ableitung von f(x) = x·ln x für x > 0.",
        "options": [
          "1/x",
          "ln x + 1",
          "ln x",
          "ln x + x"
        ],
        "explanation": "Produktregel: f′(x) = (x)′ · ln x + x · (ln x)′ = 1 · ln x + x · 1/x = ln x + 1.",
        "hint": "Verwenden Sie die Produktregel mit u = x und v = ln x.",
        "whyWrong": [
          "Sie haben die Ableitungen multipliziert: 1 · 1/x.",
          null,
          "Der zweite Summand x · (ln x)′ = 1 fehlt.",
          "Der zweite Summand ist x · 1/x = 1, nicht x."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Në cilën pikë funksioni f(x) = x²·e⁻ˣ ka maksimum lokal?",
        "options": [
          "x = 0",
          "x = −2",
          "x = 2",
          "Nuk ka maksimum lokal"
        ],
        "explanation": "f′(x) = 2x·e⁻ˣ − x²·e⁻ˣ = x(2 − x)e⁻ˣ. f′(x) = 0 për x = 0 dhe x = 2. Te x = 2 shenja e f′ ndryshon nga + në −, pra kemi maksimum lokal (f(2) = 4/e²). Te x = 0 ndryshon nga − në +, pra minimum.",
        "hint": "Gjeni pikat ku f′(x) = 0 dhe shqyrtoni si ndryshon shenja e f′.",
        "whyWrong": [
          "Te x = 0 shenja e f′ ndryshon nga − në +, pra është minimum lokal.",
          "Gabim shenje në rregullin e zinxhirit: (e⁻ˣ)′ = −e⁻ˣ.",
          null,
          "Te x = 2 shenja e f′ ndryshon nga + në −, pra maksimumi lokal ekziston."
        ]
      },
      "en": {
        "question": "At which point does f(x) = x²·e⁻ˣ have a local maximum?",
        "options": [
          "x = 0",
          "x = −2",
          "x = 2",
          "There is no local maximum"
        ],
        "explanation": "f′(x) = 2x·e⁻ˣ − x²·e⁻ˣ = x(2 − x)e⁻ˣ. f′(x) = 0 at x = 0 and x = 2. At x = 2 the sign of f′ changes from + to −, so there is a local maximum (f(2) = 4/e²). At x = 0 it changes from − to +, a minimum.",
        "hint": "Find where f′(x) = 0 and check how the sign of f′ changes.",
        "whyWrong": [
          "At x = 0 the sign of f′ changes from − to +, so it is a local minimum.",
          "Sign error in the chain rule: (e⁻ˣ)′ = −e⁻ˣ.",
          null,
          "At x = 2 the sign of f′ changes from + to −, so a local maximum exists."
        ]
      },
      "de": {
        "question": "An welcher Stelle hat f(x) = x²·e⁻ˣ ein lokales Maximum?",
        "options": [
          "x = 0",
          "x = −2",
          "x = 2",
          "Es gibt kein lokales Maximum"
        ],
        "explanation": "f′(x) = 2x·e⁻ˣ − x²·e⁻ˣ = x(2 − x)e⁻ˣ. f′(x) = 0 für x = 0 und x = 2. Bei x = 2 wechselt f′ das Vorzeichen von + nach −, also liegt ein lokales Maximum vor (f(2) = 4/e²). Bei x = 0 wechselt es von − nach +, ein Minimum.",
        "hint": "Bestimmen Sie die Nullstellen von f′ und prüfen Sie den Vorzeichenwechsel von f′.",
        "whyWrong": [
          "Bei x = 0 wechselt f′ von − nach +; dort liegt ein lokales Minimum.",
          "Vorzeichenfehler bei der Kettenregel: (e⁻ˣ)′ = −e⁻ˣ.",
          null,
          "Bei x = 2 wechselt f′ von + nach −; ein lokales Maximum existiert also."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Llogaritni integralin e pacaktuar ∫(3x² − 4x + 1) dx.",
        "options": [
          "x³ − 2x² + x + C",
          "x³ − 2x² + x",
          "6x − 4 + C",
          "3x³ − 4x² + x + C"
        ],
        "explanation": "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C. ∫3x² dx = x³, ∫4x dx = 2x², ∫1 dx = x. Rezultati: x³ − 2x² + x + C.",
        "hint": "Rriteni eksponentin me 1 dhe pjesëtoni me eksponentin e ri.",
        "whyWrong": [
          null,
          "Mungon konstantja e integrimit + C.",
          "Keni derivuar në vend që të integroni.",
          "Pas rritjes së eksponentit duhet pjesëtuar me eksponentin e ri."
        ]
      },
      "en": {
        "question": "Evaluate the indefinite integral ∫(3x² − 4x + 1) dx.",
        "options": [
          "x³ − 2x² + x + C",
          "x³ − 2x² + x",
          "6x − 4 + C",
          "3x³ − 4x² + x + C"
        ],
        "explanation": "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C. ∫3x² dx = x³, ∫4x dx = 2x², ∫1 dx = x. Result: x³ − 2x² + x + C.",
        "hint": "Raise the exponent by 1 and divide by the new exponent.",
        "whyWrong": [
          null,
          "The constant of integration + C is missing.",
          "You differentiated instead of integrating.",
          "After raising the exponent you must divide by the new exponent."
        ]
      },
      "de": {
        "question": "Berechnen Sie das unbestimmte Integral ∫(3x² − 4x + 1) dx.",
        "options": [
          "x³ − 2x² + x + C",
          "x³ − 2x² + x",
          "6x − 4 + C",
          "3x³ − 4x² + x + C"
        ],
        "explanation": "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C. ∫3x² dx = x³, ∫4x dx = 2x², ∫1 dx = x. Ergebnis: x³ − 2x² + x + C.",
        "hint": "Erhöhen Sie den Exponenten um 1 und teilen Sie durch den neuen Exponenten.",
        "whyWrong": [
          null,
          "Die Integrationskonstante + C fehlt.",
          "Sie haben abgeleitet statt integriert.",
          "Nach dem Erhöhen des Exponenten müssen Sie durch den neuen Exponenten teilen."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni integralin e caktuar të sin x nga 0 deri në π.",
        "options": [
          "0",
          "−2",
          "1",
          "2"
        ],
        "explanation": "Primitiva e sin x është −cos x. Vlera: (−cos π) − (−cos 0) = 1 + 1 = 2.",
        "hint": "Gjeni primitivën e sin x dhe kini kujdes me shenjën.",
        "whyWrong": [
          "Keni marrë cos π = 1; në fakt cos π = −1.",
          "Keni përdorur cos x si primitivë; primitiva është −cos x.",
          "Keni llogaritur vetëm F(π); mungon zbritja e F(0).",
          null
        ]
      },
      "en": {
        "question": "Evaluate the definite integral of sin x from 0 to π.",
        "options": [
          "0",
          "−2",
          "1",
          "2"
        ],
        "explanation": "An antiderivative of sin x is −cos x. Value: (−cos π) − (−cos 0) = 1 + 1 = 2.",
        "hint": "Find the antiderivative of sin x and watch the sign.",
        "whyWrong": [
          "You used cos π = 1; in fact cos π = −1.",
          "You used cos x as the antiderivative; it is −cos x.",
          "You only computed F(π); subtracting F(0) is missing.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie das bestimmte Integral von sin x von 0 bis π.",
        "options": [
          "0",
          "−2",
          "1",
          "2"
        ],
        "explanation": "Eine Stammfunktion von sin x ist −cos x. Wert: (−cos π) − (−cos 0) = 1 + 1 = 2.",
        "hint": "Bestimmen Sie die Stammfunktion von sin x und achten Sie auf das Vorzeichen.",
        "whyWrong": [
          "Sie haben cos π = 1 gesetzt; tatsächlich ist cos π = −1.",
          "Sie haben cos x als Stammfunktion verwendet; richtig ist −cos x.",
          "Sie haben nur F(π) berechnet; die Subtraktion von F(0) fehlt.",
          null
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Sa është syprina e figurës së kufizuar nga grafikët y = x dhe y = x²?",
        "options": [
          "1/2",
          "1/6",
          "1/3",
          "5/6"
        ],
        "explanation": "Pikat e prerjes: x = x² ⇒ x = 0 ose x = 1. Në [0, 1] vlen x ≥ x². S = ∫(x − x²) dx nga 0 deri në 1 = 1/2 − 1/3 = 1/6.",
        "hint": "Gjeni pikat e prerjes dhe integroni ndryshimin: funksioni i sipërm minus funksioni i poshtëm.",
        "whyWrong": [
          "1/2 është vetëm syprina nën y = x.",
          null,
          "1/3 është vetëm syprina nën y = x².",
          "Syprinat duhet zbritur, jo mbledhur."
        ]
      },
      "en": {
        "question": "What is the area of the region enclosed by the graphs of y = x and y = x²?",
        "options": [
          "1/2",
          "1/6",
          "1/3",
          "5/6"
        ],
        "explanation": "Intersections: x = x² ⇒ x = 0 or x = 1. On [0, 1], x ≥ x². A = ∫(x − x²) dx from 0 to 1 = 1/2 − 1/3 = 1/6.",
        "hint": "Find the intersection points and integrate the difference: upper function minus lower function.",
        "whyWrong": [
          "1/2 is only the area under y = x.",
          null,
          "1/3 is only the area under y = x².",
          "The areas must be subtracted, not added."
        ]
      },
      "de": {
        "question": "Wie groß ist die Fläche, die von den Graphen y = x und y = x² eingeschlossen wird?",
        "options": [
          "1/2",
          "1/6",
          "1/3",
          "5/6"
        ],
        "explanation": "Schnittstellen: x = x² ⇒ x = 0 oder x = 1. Auf [0, 1] gilt x ≥ x². A = ∫(x − x²) dx von 0 bis 1 = 1/2 − 1/3 = 1/6.",
        "hint": "Bestimmen Sie die Schnittstellen und integrieren Sie die Differenz: obere minus untere Funktion.",
        "whyWrong": [
          "1/2 ist nur die Fläche unter y = x.",
          null,
          "1/3 ist nur die Fläche unter y = x².",
          "Die Flächen müssen subtrahiert, nicht addiert werden."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Gjeni derivatin e f(x) = sin²(3x).",
        "options": [
          "2sin(3x)",
          "2sin(3x)cos(3x)",
          "6sin(3x)cos(3x)",
          "−6sin(3x)cos(3x)"
        ],
        "explanation": "Rregulli i zinxhirit në tri shtresa: f′(x) = 2sin(3x) · cos(3x) · 3 = 6sin(3x)cos(3x) (= 3sin(6x)).",
        "hint": "Derivoni nga jashtë nga brenda: katrorin, sinusin, pastaj 3x.",
        "whyWrong": [
          "Keni derivuar vetëm katrorin; mungojnë cos(3x) dhe 3.",
          "Mungon faktori 3 nga derivati i 3x.",
          null,
          "(sin u)′ = +cos u; nuk ka shenjë minus."
        ]
      },
      "en": {
        "question": "Find the derivative of f(x) = sin²(3x).",
        "options": [
          "2sin(3x)",
          "2sin(3x)cos(3x)",
          "6sin(3x)cos(3x)",
          "−6sin(3x)cos(3x)"
        ],
        "explanation": "Chain rule with three layers: f′(x) = 2sin(3x) · cos(3x) · 3 = 6sin(3x)cos(3x) (= 3sin(6x)).",
        "hint": "Differentiate from the outside in: the square, the sine, then 3x.",
        "whyWrong": [
          "Only the square was differentiated; cos(3x) and 3 are missing.",
          "The factor 3 from the derivative of 3x is missing.",
          null,
          "(sin u)′ = +cos u; there is no minus sign."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Ableitung von f(x) = sin²(3x).",
        "options": [
          "2sin(3x)",
          "2sin(3x)cos(3x)",
          "6sin(3x)cos(3x)",
          "−6sin(3x)cos(3x)"
        ],
        "explanation": "Kettenregel mit drei Schichten: f′(x) = 2sin(3x) · cos(3x) · 3 = 6sin(3x)cos(3x) (= 3sin(6x)).",
        "hint": "Leiten Sie von außen nach innen ab: Quadrat, Sinus, dann 3x.",
        "whyWrong": [
          "Nur das Quadrat wurde abgeleitet; cos(3x) und 3 fehlen.",
          "Der Faktor 3 aus der Ableitung von 3x fehlt.",
          null,
          "(sin u)′ = +cos u; es gibt kein Minuszeichen."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Llogaritni lim(x→0) (e²ˣ − 1)/sin x.",
        "options": [
          "2",
          "1",
          "0",
          "1/2"
        ],
        "explanation": "Zëvendësimi jep 0/0. Sipas rregullit të L’Hôpital-it: lim(x→0) 2e²ˣ/cos x = 2 · 1/1 = 2.",
        "hint": "Forma është 0/0 – derivoni veçmas numëruesin dhe emëruesin.",
        "whyWrong": [
          null,
          "Keni harruar faktorin 2 nga derivati i e²ˣ (rregulli i zinxhirit).",
          "0/0 është formë e pacaktuar, jo 0.",
          "Keni përmbysur raportin e derivateve."
        ]
      },
      "en": {
        "question": "Evaluate lim(x→0) (e²ˣ − 1)/sin x.",
        "options": [
          "2",
          "1",
          "0",
          "1/2"
        ],
        "explanation": "Substitution gives 0/0. By L’Hôpital’s rule: lim(x→0) 2e²ˣ/cos x = 2 · 1/1 = 2.",
        "hint": "The form is 0/0 – differentiate numerator and denominator separately.",
        "whyWrong": [
          null,
          "The factor 2 from the derivative of e²ˣ is missing (chain rule).",
          "0/0 is an indeterminate form, not 0.",
          "You inverted the ratio of the derivatives."
        ]
      },
      "de": {
        "question": "Berechnen Sie lim(x→0) (e²ˣ − 1)/sin x.",
        "options": [
          "2",
          "1",
          "0",
          "1/2"
        ],
        "explanation": "Einsetzen ergibt 0/0. Nach der Regel von L’Hospital: lim(x→0) 2e²ˣ/cos x = 2 · 1/1 = 2.",
        "hint": "Es liegt 0/0 vor – leiten Sie Zähler und Nenner getrennt ab.",
        "whyWrong": [
          null,
          "Der Faktor 2 aus der Ableitung von e²ˣ fehlt (Kettenregel).",
          "0/0 ist ein unbestimmter Ausdruck, nicht 0.",
          "Sie haben das Verhältnis der Ableitungen umgedreht."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Gjeni pikën e infleksionit të grafikut të f(x) = x³ − 6x² + 5.",
        "options": [
          "(0, 5)",
          "(4, −27)",
          "(1, 0)",
          "(2, −11)"
        ],
        "explanation": "f′(x) = 3x² − 12x, f″(x) = 6x − 12. f″(x) = 0 ⇒ x = 2, dhe f″ ndryshon shenjën atje. f(2) = 8 − 24 + 5 = −11. Pika e infleksionit: (2, −11).",
        "hint": "Pika e infleksionit është aty ku f″(x) = 0 dhe f″ ndryshon shenjën.",
        "whyWrong": [
          "Te x = 0 kemi f′ = 0: aty është maksimum lokal, jo infleksion.",
          "Te x = 4 kemi f′ = 0: aty është minimum lokal.",
          "(1, 0) është një zero e funksionit, jo pikë infleksioni.",
          null
        ]
      },
      "en": {
        "question": "Find the inflection point of the graph of f(x) = x³ − 6x² + 5.",
        "options": [
          "(0, 5)",
          "(4, −27)",
          "(1, 0)",
          "(2, −11)"
        ],
        "explanation": "f′(x) = 3x² − 12x, f″(x) = 6x − 12. f″(x) = 0 ⇒ x = 2, and f″ changes sign there. f(2) = 8 − 24 + 5 = −11. Inflection point: (2, −11).",
        "hint": "An inflection point is where f″(x) = 0 and f″ changes sign.",
        "whyWrong": [
          "At x = 0, f′ = 0: that is a local maximum, not an inflection point.",
          "At x = 4, f′ = 0: that is a local minimum.",
          "(1, 0) is a zero of the function, not an inflection point.",
          null
        ]
      },
      "de": {
        "question": "Bestimmen Sie den Wendepunkt des Graphen von f(x) = x³ − 6x² + 5.",
        "options": [
          "(0, 5)",
          "(4, −27)",
          "(1, 0)",
          "(2, −11)"
        ],
        "explanation": "f′(x) = 3x² − 12x, f″(x) = 6x − 12. f″(x) = 0 ⇒ x = 2, und f″ wechselt dort das Vorzeichen. f(2) = 8 − 24 + 5 = −11. Wendepunkt: (2, −11).",
        "hint": "Ein Wendepunkt liegt dort, wo f″(x) = 0 ist und f″ das Vorzeichen wechselt.",
        "whyWrong": [
          "Bei x = 0 ist f′ = 0: dort liegt ein lokales Maximum, kein Wendepunkt.",
          "Bei x = 4 ist f′ = 0: dort liegt ein lokales Minimum.",
          "(1, 0) ist eine Nullstelle der Funktion, kein Wendepunkt.",
          null
        ]
      }
    }
  ]
};
