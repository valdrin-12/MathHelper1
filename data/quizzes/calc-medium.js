// Quiz set "calc-medium" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).

export default {
  "id": "calc-medium",
  "difficulty": "intermediate",
  "icon": "d/dx",
  "color": "#2980B9",
  "i18n": {
    "al": {
      "title": "Derivate Bazë",
      "category": "Kalkulus",
      "duration": "12 min"
    },
    "en": {
      "title": "Basic Derivatives",
      "category": "Calculus",
      "duration": "12 min"
    },
    "de": {
      "title": "Grundlegende Ableitungen",
      "category": "Analysis",
      "duration": "12 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Gjeni derivatin e funksionit f(x) = 4x³ − 2x + 7.",
        "options": [
          "12x² + 5",
          "12x² − 2",
          "12x² − 2x",
          "x⁴ − x² + 7x"
        ],
        "explanation": "Rregulli i fuqisë: (xⁿ)′ = n·xⁿ⁻¹. (4x³)′ = 12x², (−2x)′ = −2, (7)′ = 0. Pra f′(x) = 12x² − 2.",
        "hint": "Derivoni çdo term veç e veç; kini kujdes me konstanten.",
        "whyWrong": [
          "Derivati i konstantes 7 është 0; ajo nuk mblidhet me −2.",
          null,
          "Derivati i −2x është −2, jo −2x.",
          "Kjo është një primitivë (integral), jo derivati."
        ]
      },
      "en": {
        "question": "Find the derivative of f(x) = 4x³ − 2x + 7.",
        "options": [
          "12x² + 5",
          "12x² − 2",
          "12x² − 2x",
          "x⁴ − x² + 7x"
        ],
        "explanation": "Power rule: (xⁿ)′ = n·xⁿ⁻¹. (4x³)′ = 12x², (−2x)′ = −2, (7)′ = 0. So f′(x) = 12x² − 2.",
        "hint": "Differentiate term by term; be careful with the constant.",
        "whyWrong": [
          "The derivative of the constant 7 is 0; it must not be added to −2.",
          null,
          "The derivative of −2x is −2, not −2x.",
          "That is an antiderivative (integral), not the derivative."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Ableitung von f(x) = 4x³ − 2x + 7.",
        "options": [
          "12x² + 5",
          "12x² − 2",
          "12x² − 2x",
          "x⁴ − x² + 7x"
        ],
        "explanation": "Potenzregel: (xⁿ)′ = n·xⁿ⁻¹. (4x³)′ = 12x², (−2x)′ = −2, (7)′ = 0. Also f′(x) = 12x² − 2.",
        "hint": "Leiten Sie Summand für Summand ab; achten Sie auf die Konstante.",
        "whyWrong": [
          "Die Ableitung der Konstanten 7 ist 0; sie darf nicht zu −2 addiert werden.",
          null,
          "Die Ableitung von −2x ist −2, nicht −2x.",
          "Das ist eine Stammfunktion, nicht die Ableitung."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Gjeni derivatin e f(x) = 3 sin x − 2 cos x.",
        "options": [
          "3cos x + 2sin x",
          "3cos x − 2sin x",
          "−3cos x + 2sin x",
          "−3cos x − 2sin x"
        ],
        "explanation": "(sin x)′ = cos x dhe (cos x)′ = −sin x. f′(x) = 3cos x − 2 · (−sin x) = 3cos x + 2sin x.",
        "hint": "Kujtoni shenjën te derivati i cos x.",
        "whyWrong": [
          null,
          "Keni marrë (cos x)′ = sin x; në fakt (cos x)′ = −sin x.",
          "Keni marrë (sin x)′ = −cos x; në fakt (sin x)′ = cos x.",
          "Të dyja shenjat janë gabim: (sin x)′ = cos x dhe (cos x)′ = −sin x."
        ]
      },
      "en": {
        "question": "Find the derivative of f(x) = 3 sin x − 2 cos x.",
        "options": [
          "3cos x + 2sin x",
          "3cos x − 2sin x",
          "−3cos x + 2sin x",
          "−3cos x − 2sin x"
        ],
        "explanation": "(sin x)′ = cos x and (cos x)′ = −sin x. f′(x) = 3cos x − 2 · (−sin x) = 3cos x + 2sin x.",
        "hint": "Remember the sign in the derivative of cos x.",
        "whyWrong": [
          null,
          "You used (cos x)′ = sin x; in fact (cos x)′ = −sin x.",
          "You used (sin x)′ = −cos x; in fact (sin x)′ = cos x.",
          "Both signs are wrong: (sin x)′ = cos x and (cos x)′ = −sin x."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Ableitung von f(x) = 3 sin x − 2 cos x.",
        "options": [
          "3cos x + 2sin x",
          "3cos x − 2sin x",
          "−3cos x + 2sin x",
          "−3cos x − 2sin x"
        ],
        "explanation": "(sin x)′ = cos x und (cos x)′ = −sin x. f′(x) = 3cos x − 2 · (−sin x) = 3cos x + 2sin x.",
        "hint": "Denken Sie an das Vorzeichen bei der Ableitung von cos x.",
        "whyWrong": [
          null,
          "Sie haben (cos x)′ = sin x verwendet; richtig ist (cos x)′ = −sin x.",
          "Sie haben (sin x)′ = −cos x verwendet; richtig ist (sin x)′ = cos x.",
          "Beide Vorzeichen sind falsch: (sin x)′ = cos x und (cos x)′ = −sin x."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Gjeni derivatin e f(x) = x²·eˣ.",
        "options": [
          "2x·eˣ",
          "x²·eˣ",
          "eˣ(x² + 2x)",
          "2x + eˣ"
        ],
        "explanation": "Rregulli i prodhimit: (u·v)′ = u′·v + u·v′. Me u = x² dhe v = eˣ: f′(x) = 2x·eˣ + x²·eˣ = eˣ(x² + 2x).",
        "hint": "Përdorni rregullin e prodhimit (u·v)′ = u′v + uv′.",
        "whyWrong": [
          "Keni shumëzuar derivatet (u′·v′); ky nuk është rregulli i prodhimit.",
          "Keni derivuar vetëm eˣ dhe keni harruar termin u′·v.",
          null,
          "Keni mbledhur derivatet; prodhimi nuk derivohet term për term."
        ]
      },
      "en": {
        "question": "Find the derivative of f(x) = x²·eˣ.",
        "options": [
          "2x·eˣ",
          "x²·eˣ",
          "eˣ(x² + 2x)",
          "2x + eˣ"
        ],
        "explanation": "Product rule: (u·v)′ = u′·v + u·v′. With u = x² and v = eˣ: f′(x) = 2x·eˣ + x²·eˣ = eˣ(x² + 2x).",
        "hint": "Use the product rule (u·v)′ = u′v + uv′.",
        "whyWrong": [
          "You multiplied the derivatives (u′·v′); that is not the product rule.",
          "You only differentiated eˣ and forgot the term u′·v.",
          null,
          "You added the derivatives; a product is not differentiated term by term."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Ableitung von f(x) = x²·eˣ.",
        "options": [
          "2x·eˣ",
          "x²·eˣ",
          "eˣ(x² + 2x)",
          "2x + eˣ"
        ],
        "explanation": "Produktregel: (u·v)′ = u′·v + u·v′. Mit u = x² und v = eˣ: f′(x) = 2x·eˣ + x²·eˣ = eˣ(x² + 2x).",
        "hint": "Verwenden Sie die Produktregel (u·v)′ = u′v + uv′.",
        "whyWrong": [
          "Sie haben die Ableitungen multipliziert (u′·v′); das ist nicht die Produktregel.",
          "Sie haben nur eˣ abgeleitet und den Summanden u′·v vergessen.",
          null,
          "Sie haben die Ableitungen addiert; ein Produkt wird nicht summandenweise abgeleitet."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Gjeni derivatin e f(x) = x/(x + 1), për x ≠ −1.",
        "options": [
          "−1/(x + 1)²",
          "1",
          "(2x + 1)/(x + 1)²",
          "1/(x + 1)²"
        ],
        "explanation": "Rregulli i herësit: (u/v)′ = (u′v − uv′)/v². f′(x) = (1·(x + 1) − x·1)/(x + 1)² = 1/(x + 1)².",
        "hint": "Përdorni rregullin e herësit (u′v − uv′)/v².",
        "whyWrong": [
          "Keni ndërruar renditjen në numërues (uv′ − u′v).",
          "Numëruesi dhe emëruesi nuk derivohen veçmas.",
          "Në numërues duhet minus, jo plus: u′v − uv′.",
          null
        ]
      },
      "en": {
        "question": "Find the derivative of f(x) = x/(x + 1), for x ≠ −1.",
        "options": [
          "−1/(x + 1)²",
          "1",
          "(2x + 1)/(x + 1)²",
          "1/(x + 1)²"
        ],
        "explanation": "Quotient rule: (u/v)′ = (u′v − uv′)/v². f′(x) = (1·(x + 1) − x·1)/(x + 1)² = 1/(x + 1)².",
        "hint": "Use the quotient rule (u′v − uv′)/v².",
        "whyWrong": [
          "You swapped the order in the numerator (uv′ − u′v).",
          "Numerator and denominator cannot be differentiated separately.",
          "The numerator needs a minus, not a plus: u′v − uv′.",
          null
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Ableitung von f(x) = x/(x + 1) für x ≠ −1.",
        "options": [
          "−1/(x + 1)²",
          "1",
          "(2x + 1)/(x + 1)²",
          "1/(x + 1)²"
        ],
        "explanation": "Quotientenregel: (u/v)′ = (u′v − uv′)/v². f′(x) = (1·(x + 1) − x·1)/(x + 1)² = 1/(x + 1)².",
        "hint": "Verwenden Sie die Quotientenregel (u′v − uv′)/v².",
        "whyWrong": [
          "Sie haben die Reihenfolge im Zähler vertauscht (uv′ − u′v).",
          "Zähler und Nenner dürfen nicht getrennt abgeleitet werden.",
          "Im Zähler steht ein Minus, kein Plus: u′v − uv′.",
          null
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Gjeni derivatin e f(x) = (3x² + 1)⁴.",
        "options": [
          "4(3x² + 1)³",
          "24x(3x² + 1)³",
          "6x(3x² + 1)³",
          "24x(3x² + 1)⁴"
        ],
        "explanation": "Rregulli i zinxhirit: f′(x) = 4(3x² + 1)³ · (3x² + 1)′ = 4(3x² + 1)³ · 6x = 24x(3x² + 1)³.",
        "hint": "Derivoni funksionin e jashtëm, pastaj shumëzoni me derivatin e funksionit të brendshëm.",
        "whyWrong": [
          "Keni harruar të shumëzoni me derivatin e brendshëm 6x.",
          null,
          "Keni harruar faktorin 4 që vjen nga eksponenti.",
          "Eksponenti duhet të ulet me 1: nga 4 në 3."
        ]
      },
      "en": {
        "question": "Find the derivative of f(x) = (3x² + 1)⁴.",
        "options": [
          "4(3x² + 1)³",
          "24x(3x² + 1)³",
          "6x(3x² + 1)³",
          "24x(3x² + 1)⁴"
        ],
        "explanation": "Chain rule: f′(x) = 4(3x² + 1)³ · (3x² + 1)′ = 4(3x² + 1)³ · 6x = 24x(3x² + 1)³.",
        "hint": "Differentiate the outer function, then multiply by the derivative of the inner function.",
        "whyWrong": [
          "You forgot to multiply by the inner derivative 6x.",
          null,
          "You forgot the factor 4 coming from the exponent.",
          "The exponent must drop by 1: from 4 to 3."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Ableitung von f(x) = (3x² + 1)⁴.",
        "options": [
          "4(3x² + 1)³",
          "24x(3x² + 1)³",
          "6x(3x² + 1)³",
          "24x(3x² + 1)⁴"
        ],
        "explanation": "Kettenregel: f′(x) = 4(3x² + 1)³ · (3x² + 1)′ = 4(3x² + 1)³ · 6x = 24x(3x² + 1)³.",
        "hint": "Leiten Sie die äußere Funktion ab und multiplizieren Sie mit der Ableitung der inneren Funktion.",
        "whyWrong": [
          "Sie haben vergessen, mit der inneren Ableitung 6x zu multiplizieren.",
          null,
          "Der Faktor 4 aus dem Exponenten fehlt.",
          "Der Exponent muss um 1 sinken: von 4 auf 3."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Gjeni derivatin e f(x) = sin(x²).",
        "options": [
          "2x·cos(x²)",
          "cos(x²)",
          "cos(2x)",
          "−2x·cos(x²)"
        ],
        "explanation": "Rregulli i zinxhirit: (sin u)′ = cos u · u′, me u = x² dhe u′ = 2x. f′(x) = cos(x²) · 2x = 2x·cos(x²).",
        "hint": "Funksioni i brendshëm është x² – mos harroni derivatin e tij.",
        "whyWrong": [
          null,
          "Mungon derivati i brendshëm 2x (rregulli i zinxhirit).",
          "Argumenti i kosinusit mbetet x²; derivati 2x shumëzohet jashtë.",
          "(sin u)′ = +cos u; nuk ka shenjë minus."
        ]
      },
      "en": {
        "question": "Find the derivative of f(x) = sin(x²).",
        "options": [
          "2x·cos(x²)",
          "cos(x²)",
          "cos(2x)",
          "−2x·cos(x²)"
        ],
        "explanation": "Chain rule: (sin u)′ = cos u · u′ with u = x² and u′ = 2x. f′(x) = cos(x²) · 2x = 2x·cos(x²).",
        "hint": "The inner function is x² – do not forget its derivative.",
        "whyWrong": [
          null,
          "The inner derivative 2x is missing (chain rule).",
          "The argument of cosine stays x²; the derivative 2x is multiplied outside.",
          "(sin u)′ = +cos u; there is no minus sign."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Ableitung von f(x) = sin(x²).",
        "options": [
          "2x·cos(x²)",
          "cos(x²)",
          "cos(2x)",
          "−2x·cos(x²)"
        ],
        "explanation": "Kettenregel: (sin u)′ = cos u · u′ mit u = x² und u′ = 2x. f′(x) = cos(x²) · 2x = 2x·cos(x²).",
        "hint": "Die innere Funktion ist x² – vergessen Sie ihre Ableitung nicht.",
        "whyWrong": [
          null,
          "Die innere Ableitung 2x fehlt (Kettenregel).",
          "Das Argument des Kosinus bleibt x²; die Ableitung 2x wird außen multipliziert.",
          "(sin u)′ = +cos u; es gibt kein Minuszeichen."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Gjeni derivatin e f(x) = ln(x² + 1).",
        "options": [
          "1/(x² + 1)",
          "2x·ln(x² + 1)",
          "2x/(x² + 1)",
          "1/(2x)"
        ],
        "explanation": "(ln u)′ = u′/u. Me u = x² + 1 dhe u′ = 2x: f′(x) = 2x/(x² + 1).",
        "hint": "Përdorni (ln u)′ = u′/u.",
        "whyWrong": [
          "Mungon derivati i brendshëm 2x.",
          "Logaritmi zhduket gjatë derivimit; ln nuk mbetet.",
          null,
          "Duhet u′/u = 2x/(x² + 1), jo 1/u′."
        ]
      },
      "en": {
        "question": "Find the derivative of f(x) = ln(x² + 1).",
        "options": [
          "1/(x² + 1)",
          "2x·ln(x² + 1)",
          "2x/(x² + 1)",
          "1/(2x)"
        ],
        "explanation": "(ln u)′ = u′/u. With u = x² + 1 and u′ = 2x: f′(x) = 2x/(x² + 1).",
        "hint": "Use (ln u)′ = u′/u.",
        "whyWrong": [
          "The inner derivative 2x is missing.",
          "The logarithm disappears when differentiating; ln does not remain.",
          null,
          "It is u′/u = 2x/(x² + 1), not 1/u′."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Ableitung von f(x) = ln(x² + 1).",
        "options": [
          "1/(x² + 1)",
          "2x·ln(x² + 1)",
          "2x/(x² + 1)",
          "1/(2x)"
        ],
        "explanation": "(ln u)′ = u′/u. Mit u = x² + 1 und u′ = 2x: f′(x) = 2x/(x² + 1).",
        "hint": "Verwenden Sie (ln u)′ = u′/u.",
        "whyWrong": [
          "Die innere Ableitung 2x fehlt.",
          "Der Logarithmus verschwindet beim Ableiten; ln bleibt nicht stehen.",
          null,
          "Es gilt u′/u = 2x/(x² + 1), nicht 1/u′."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Gjeni derivatin e f(x) = 3/x², për x ≠ 0.",
        "options": [
          "6/x³",
          "−6/x",
          "3/(2x)",
          "−6/x³"
        ],
        "explanation": "Shkruajmë f(x) = 3x⁻². Rregulli i fuqisë: f′(x) = 3 · (−2)x⁻³ = −6x⁻³ = −6/x³.",
        "hint": "Shkruajeni funksionin si fuqi me eksponent negativ.",
        "whyWrong": [
          "Eksponenti −2 sjell shenjën minus.",
          "Eksponenti zbret me 1: nga −2 në −3, jo në −1.",
          "Emëruesi nuk derivohet veçmas; shkruani 3x⁻².",
          null
        ]
      },
      "en": {
        "question": "Find the derivative of f(x) = 3/x², for x ≠ 0.",
        "options": [
          "6/x³",
          "−6/x",
          "3/(2x)",
          "−6/x³"
        ],
        "explanation": "Write f(x) = 3x⁻². Power rule: f′(x) = 3 · (−2)x⁻³ = −6x⁻³ = −6/x³.",
        "hint": "Write the function as a power with a negative exponent.",
        "whyWrong": [
          "The exponent −2 brings a minus sign.",
          "The exponent drops by 1: from −2 to −3, not to −1.",
          "The denominator is not differentiated on its own; write 3x⁻².",
          null
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Ableitung von f(x) = 3/x² für x ≠ 0.",
        "options": [
          "6/x³",
          "−6/x",
          "3/(2x)",
          "−6/x³"
        ],
        "explanation": "Schreiben Sie f(x) = 3x⁻². Potenzregel: f′(x) = 3 · (−2)x⁻³ = −6x⁻³ = −6/x³.",
        "hint": "Schreiben Sie die Funktion als Potenz mit negativem Exponenten.",
        "whyWrong": [
          "Der Exponent −2 liefert ein Minuszeichen.",
          "Der Exponent sinkt um 1: von −2 auf −3, nicht auf −1.",
          "Der Nenner wird nicht einzeln abgeleitet; schreiben Sie 3x⁻².",
          null
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Nëse f(x) = √x, sa është f′(4)?",
        "options": [
          "1/2",
          "1/4",
          "2",
          "1/8"
        ],
        "explanation": "(√x)′ = 1/(2√x). f′(4) = 1/(2 · √4) = 1/(2 · 2) = 1/4.",
        "hint": "Shkruajeni √x si fuqi me eksponent 1/2 ose kujtoni formulën e derivatit të rrënjës.",
        "whyWrong": [
          "Keni harruar faktorin 2 në emërues: 1/√4 = 1/2.",
          null,
          "2 = √4 është vlera e funksionit, jo e derivatit.",
          "Keni harruar rrënjën: 1/(2 · 4) = 1/8."
        ]
      },
      "en": {
        "question": "If f(x) = √x, what is f′(4)?",
        "options": [
          "1/2",
          "1/4",
          "2",
          "1/8"
        ],
        "explanation": "(√x)′ = 1/(2√x). f′(4) = 1/(2 · √4) = 1/(2 · 2) = 1/4.",
        "hint": "Write √x as a power with exponent 1/2, or recall the derivative of the square root.",
        "whyWrong": [
          "The factor 2 in the denominator is missing: 1/√4 = 1/2.",
          null,
          "2 = √4 is the function value, not the derivative.",
          "The square root was forgotten: 1/(2 · 4) = 1/8."
        ]
      },
      "de": {
        "question": "Für f(x) = √x: Wie groß ist f′(4)?",
        "options": [
          "1/2",
          "1/4",
          "2",
          "1/8"
        ],
        "explanation": "(√x)′ = 1/(2√x). f′(4) = 1/(2 · √4) = 1/(2 · 2) = 1/4.",
        "hint": "Schreiben Sie √x als Potenz mit Exponent 1/2 oder erinnern Sie sich an die Ableitung der Wurzel.",
        "whyWrong": [
          "Der Faktor 2 im Nenner fehlt: 1/√4 = 1/2.",
          null,
          "2 = √4 ist der Funktionswert, nicht die Ableitung.",
          "Die Wurzel wurde vergessen: 1/(2 · 4) = 1/8."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Gjeni ekuacionin e tangjentes ndaj grafikut të f(x) = x² − 3x në pikën me abshisë x = 1.",
        "options": [
          "y = −x + 1",
          "y = −2x",
          "y = −x − 1",
          "y = −x − 2"
        ],
        "explanation": "f(1) = 1 − 3 = −2. f′(x) = 2x − 3, pra f′(1) = −1. Tangjentja: y − (−2) = −1 · (x − 1) ⇒ y = −x + 1 − 2 = −x − 1.",
        "hint": "Përdorni y − f(x₀) = f′(x₀)(x − x₀).",
        "whyWrong": [
          "Keni marrë pikën (1, 0) në vend të (1, −2).",
          "Keni përdorur vlerën f(1) = −2 si koeficient këndor.",
          null,
          "Keni harruar të shumëzoni −1 me (x − 1): mungon +1."
        ]
      },
      "en": {
        "question": "Find the equation of the tangent line to the graph of f(x) = x² − 3x at x = 1.",
        "options": [
          "y = −x + 1",
          "y = −2x",
          "y = −x − 1",
          "y = −x − 2"
        ],
        "explanation": "f(1) = 1 − 3 = −2. f′(x) = 2x − 3, so f′(1) = −1. Tangent: y − (−2) = −1 · (x − 1) ⇒ y = −x + 1 − 2 = −x − 1.",
        "hint": "Use y − f(x₀) = f′(x₀)(x − x₀).",
        "whyWrong": [
          "You used the point (1, 0) instead of (1, −2).",
          "You used the value f(1) = −2 as the slope.",
          null,
          "You forgot to multiply −1 by (x − 1): the +1 is missing."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Gleichung der Tangente an den Graphen von f(x) = x² − 3x an der Stelle x = 1.",
        "options": [
          "y = −x + 1",
          "y = −2x",
          "y = −x − 1",
          "y = −x − 2"
        ],
        "explanation": "f(1) = 1 − 3 = −2. f′(x) = 2x − 3, also f′(1) = −1. Tangente: y − (−2) = −1 · (x − 1) ⇒ y = −x + 1 − 2 = −x − 1.",
        "hint": "Verwenden Sie y − f(x₀) = f′(x₀)(x − x₀).",
        "whyWrong": [
          "Sie haben den Punkt (1, 0) statt (1, −2) verwendet.",
          "Sie haben den Funktionswert f(1) = −2 als Steigung verwendet.",
          null,
          "Sie haben vergessen, −1 mit (x − 1) zu multiplizieren: Das +1 fehlt."
        ]
      }
    }
  ]
};
