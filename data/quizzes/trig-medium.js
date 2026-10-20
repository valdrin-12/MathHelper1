// Quiz set "trig-medium" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).

export default {
  "id": "trig-medium",
  "difficulty": "intermediate",
  "icon": "∿",
  "color": "#F4A261",
  "i18n": {
    "al": {
      "title": "Trigonometri",
      "category": "Trigonometri",
      "duration": "10 min"
    },
    "en": {
      "title": "Trigonometry",
      "category": "Trigonometry",
      "duration": "10 min"
    },
    "de": {
      "title": "Trigonometrie",
      "category": "Trigonometrie",
      "duration": "10 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është sin 150°?",
        "options": [
          "1/2",
          "−1/2",
          "√3/2",
          "−√3/2"
        ],
        "explanation": "150° ndodhet në kuadrantin II, ku sinusi është pozitiv. Këndi referues është 180° − 150° = 30°. Pra sin 150° = sin 30° = 1/2.",
        "hint": "Gjeni këndin referues dhe shenjën e sinusit në kuadrantin II.",
        "whyWrong": [
          null,
          "Në kuadrantin II sinusi është pozitiv, jo negativ.",
          "√3/2 është cos 30° (ose sin 60°); keni ngatërruar sinusin me kosinusin.",
          "−√3/2 është cos 150°, jo sin 150°."
        ]
      },
      "en": {
        "question": "What is sin 150°?",
        "options": [
          "1/2",
          "−1/2",
          "√3/2",
          "−√3/2"
        ],
        "explanation": "150° lies in quadrant II, where sine is positive. The reference angle is 180° − 150° = 30°. So sin 150° = sin 30° = 1/2.",
        "hint": "Find the reference angle and the sign of sine in quadrant II.",
        "whyWrong": [
          null,
          "Sine is positive in quadrant II, not negative.",
          "√3/2 is cos 30° (or sin 60°); sine and cosine were mixed up.",
          "−√3/2 is cos 150°, not sin 150°."
        ]
      },
      "de": {
        "question": "Wie groß ist sin 150°?",
        "options": [
          "1/2",
          "−1/2",
          "√3/2",
          "−√3/2"
        ],
        "explanation": "150° liegt im II. Quadranten, dort ist der Sinus positiv. Der Bezugswinkel ist 180° − 150° = 30°. Also gilt sin 150° = sin 30° = 1/2.",
        "hint": "Bestimmen Sie den Bezugswinkel und das Vorzeichen des Sinus im II. Quadranten.",
        "whyWrong": [
          null,
          "Im II. Quadranten ist der Sinus positiv, nicht negativ.",
          "√3/2 ist cos 30° (bzw. sin 60°); Sinus und Kosinus wurden verwechselt.",
          "−√3/2 ist cos 150°, nicht sin 150°."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Sa është cos 120°?",
        "options": [
          "1/2",
          "−1/2",
          "−√3/2",
          "√3/2"
        ],
        "explanation": "120° ndodhet në kuadrantin II, ku kosinusi është negativ. Këndi referues është 180° − 120° = 60° dhe cos 60° = 1/2. Pra cos 120° = −1/2.",
        "hint": "Përdorni këndin referues 180° − 120° dhe kujtoni shenjën e kosinusit në kuadrantin II.",
        "whyWrong": [
          "Vlera absolute është e saktë, por në kuadrantin II kosinusi është negativ.",
          null,
          "−√3/2 i përgjigjet këndit referues 30° (cos 150°), jo 60°.",
          "√3/2 është sin 120°; keni llogaritur sinusin në vend të kosinusit."
        ]
      },
      "en": {
        "question": "What is cos 120°?",
        "options": [
          "1/2",
          "−1/2",
          "−√3/2",
          "√3/2"
        ],
        "explanation": "120° lies in quadrant II, where cosine is negative. The reference angle is 180° − 120° = 60° and cos 60° = 1/2. So cos 120° = −1/2.",
        "hint": "Use the reference angle 180° − 120° and remember the sign of cosine in quadrant II.",
        "whyWrong": [
          "The size is right, but cosine is negative in quadrant II.",
          null,
          "−√3/2 uses the reference angle 30° (cos 150°), not 60°.",
          "√3/2 is sin 120°; you computed sine instead of cosine."
        ]
      },
      "de": {
        "question": "Wie groß ist cos 120°?",
        "options": [
          "1/2",
          "−1/2",
          "−√3/2",
          "√3/2"
        ],
        "explanation": "120° liegt im II. Quadranten, dort ist der Kosinus negativ. Der Bezugswinkel ist 180° − 120° = 60° und cos 60° = 1/2. Also gilt cos 120° = −1/2.",
        "hint": "Verwenden Sie den Bezugswinkel 180° − 120° und beachten Sie das Vorzeichen des Kosinus im II. Quadranten.",
        "whyWrong": [
          "Der Betrag stimmt, aber im II. Quadranten ist der Kosinus negativ.",
          null,
          "−√3/2 gehört zum Bezugswinkel 30° (cos 150°), nicht 60°.",
          "√3/2 ist sin 120°; Sie haben den Sinus statt des Kosinus berechnet."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Shndërroni 5π/6 radianë në gradë.",
        "options": [
          "75°",
          "300°",
          "150°",
          "120°"
        ],
        "explanation": "Përdorni π rad = 180°: 5π/6 · 180°/π = 5 · 30° = 150°.",
        "hint": "Kujtoni se π radianë janë sa 180°.",
        "whyWrong": [
          "Keni marrë π = 90°; në fakt π rad = 180°.",
          "Keni marrë π = 360°; në fakt π rad = 180°.",
          null,
          "120° = 2π/3 = 4π/6; ju mungon një π/6 (30°)."
        ]
      },
      "en": {
        "question": "Convert 5π/6 radians to degrees.",
        "options": [
          "75°",
          "300°",
          "150°",
          "120°"
        ],
        "explanation": "Use π rad = 180°: 5π/6 · 180°/π = 5 · 30° = 150°.",
        "hint": "Remember that π radians equal 180°.",
        "whyWrong": [
          "You used π = 90°; in fact π rad = 180°.",
          "You used π = 360°; in fact π rad = 180°.",
          null,
          "120° = 2π/3 = 4π/6; one π/6 (30°) is missing."
        ]
      },
      "de": {
        "question": "Rechnen Sie 5π/6 (Bogenmaß) in Grad um.",
        "options": [
          "75°",
          "300°",
          "150°",
          "120°"
        ],
        "explanation": "Verwenden Sie π rad = 180°: 5π/6 · 180°/π = 5 · 30° = 150°.",
        "hint": "Denken Sie daran, dass π im Bogenmaß 180° entspricht.",
        "whyWrong": [
          "Sie haben π = 90° gesetzt; tatsächlich gilt π rad = 180°.",
          "Sie haben π = 360° gesetzt; tatsächlich gilt π rad = 180°.",
          null,
          "120° = 2π/3 = 4π/6; es fehlt ein π/6 (30°)."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Në cilin kuadrant ndodhet këndi α nëse sin α < 0 dhe cos α > 0?",
        "options": [
          "I",
          "II",
          "III",
          "IV"
        ],
        "explanation": "Në rrethin njësi, cos α është abshisa dhe sin α ordinata e pikës. Abshisë pozitive dhe ordinatë negative ka vetëm kuadranti IV (270° < α < 360°).",
        "hint": "Mendoni për shenjat e koordinatave (cos α, sin α) të pikës në rrethin njësi.",
        "whyWrong": [
          "Në kuadrantin I sinusi dhe kosinusi janë të dy pozitivë.",
          "Në kuadrantin II sin α > 0 dhe cos α < 0, pra e kundërta.",
          "Në kuadrantin III sinusi dhe kosinusi janë të dy negativë.",
          null
        ]
      },
      "en": {
        "question": "In which quadrant does the angle α lie if sin α < 0 and cos α > 0?",
        "options": [
          "I",
          "II",
          "III",
          "IV"
        ],
        "explanation": "On the unit circle, cos α is the x-coordinate and sin α the y-coordinate of the point. A positive x and a negative y occur only in quadrant IV (270° < α < 360°).",
        "hint": "Think about the signs of the coordinates (cos α, sin α) of the point on the unit circle.",
        "whyWrong": [
          "In quadrant I sine and cosine are both positive.",
          "In quadrant II sin α > 0 and cos α < 0, the opposite case.",
          "In quadrant III sine and cosine are both negative.",
          null
        ]
      },
      "de": {
        "question": "In welchem Quadranten liegt der Winkel α, wenn sin α < 0 und cos α > 0 gilt?",
        "options": [
          "I",
          "II",
          "III",
          "IV"
        ],
        "explanation": "Im Einheitskreis ist cos α die x-Koordinate und sin α die y-Koordinate des Punktes. Positives x und negatives y gibt es nur im IV. Quadranten (270° < α < 360°).",
        "hint": "Überlegen Sie, welche Vorzeichen die Koordinaten (cos α, sin α) des Punktes auf dem Einheitskreis haben.",
        "whyWrong": [
          "Im I. Quadranten sind Sinus und Kosinus beide positiv.",
          "Im II. Quadranten gilt sin α > 0 und cos α < 0, also genau umgekehrt.",
          "Im III. Quadranten sind Sinus und Kosinus beide negativ.",
          null
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Zgjidhni ekuacionin sin x = √3/2 për 0° ≤ x < 360°.",
        "options": [
          "60°",
          "60°, 120°",
          "60°, 300°",
          "30°, 150°"
        ],
        "explanation": "Këndi bazë është 60°, sepse sin 60° = √3/2. Sinusi është pozitiv edhe në kuadrantin II, ku x = 180° − 60° = 120°. Zgjidhjet: x = 60° dhe x = 120°.",
        "hint": "Sinusi është pozitiv në dy kuadrante – kërkoni një zgjidhje në secilin.",
        "whyWrong": [
          "Keni humbur zgjidhjen e dytë në kuadrantin II (180° − 60°).",
          null,
          "60° dhe 300° janë zgjidhjet e cos x = 1/2, jo të sin x = √3/2.",
          "30° dhe 150° janë zgjidhjet e sin x = 1/2."
        ]
      },
      "en": {
        "question": "Solve sin x = √3/2 for 0° ≤ x < 360°.",
        "options": [
          "60°",
          "60°, 120°",
          "60°, 300°",
          "30°, 150°"
        ],
        "explanation": "The basic angle is 60°, since sin 60° = √3/2. Sine is also positive in quadrant II, where x = 180° − 60° = 120°. Solutions: x = 60° and x = 120°.",
        "hint": "Sine is positive in two quadrants – look for a solution in each.",
        "whyWrong": [
          "The second solution in quadrant II (180° − 60°) is missing.",
          null,
          "60° and 300° solve cos x = 1/2, not sin x = √3/2.",
          "30° and 150° solve sin x = 1/2."
        ]
      },
      "de": {
        "question": "Lösen Sie sin x = √3/2 für 0° ≤ x < 360°.",
        "options": [
          "60°",
          "60°, 120°",
          "60°, 300°",
          "30°, 150°"
        ],
        "explanation": "Der Grundwinkel ist 60°, da sin 60° = √3/2. Der Sinus ist auch im II. Quadranten positiv, dort ist x = 180° − 60° = 120°. Lösungen: x = 60° und x = 120°.",
        "hint": "Der Sinus ist in zwei Quadranten positiv – suchen Sie in jedem eine Lösung.",
        "whyWrong": [
          "Die zweite Lösung im II. Quadranten (180° − 60°) fehlt.",
          null,
          "60° und 300° lösen cos x = 1/2, nicht sin x = √3/2.",
          "30° und 150° lösen sin x = 1/2."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Sa është periudha themelore e funksionit f(x) = sin(2x), me x në radianë?",
        "options": [
          "2π",
          "4π",
          "π",
          "π/2"
        ],
        "explanation": "Funksioni sin(kx) ka periudhë 2π/k. Për k = 2: T = 2π/2 = π.",
        "hint": "Si ndikon koeficienti para x në periudhën 2π të sinusit?",
        "whyWrong": [
          "2π është periudha e sin x; faktori 2 e ngjesh grafikun.",
          "Keni shumëzuar me 2 në vend që të pjesëtoni.",
          null,
          "π/2 është periudha e tg(2x); sinusi ka periudhë 2π, jo π."
        ]
      },
      "en": {
        "question": "What is the fundamental period of f(x) = sin(2x), with x in radians?",
        "options": [
          "2π",
          "4π",
          "π",
          "π/2"
        ],
        "explanation": "sin(kx) has period 2π/k. For k = 2: T = 2π/2 = π.",
        "hint": "How does the coefficient of x change the period 2π of sine?",
        "whyWrong": [
          "2π is the period of sin x; the factor 2 compresses the graph.",
          "You multiplied by 2 instead of dividing.",
          null,
          "π/2 is the period of tan(2x); sine has period 2π, not π."
        ]
      },
      "de": {
        "question": "Wie groß ist die kleinste Periode von f(x) = sin(2x), mit x im Bogenmaß?",
        "options": [
          "2π",
          "4π",
          "π",
          "π/2"
        ],
        "explanation": "sin(kx) hat die Periode 2π/k. Für k = 2: T = 2π/2 = π.",
        "hint": "Wie verändert der Faktor vor x die Periode 2π des Sinus?",
        "whyWrong": [
          "2π ist die Periode von sin x; der Faktor 2 staucht den Graphen.",
          "Sie haben mit 2 multipliziert, statt durch 2 zu dividieren.",
          null,
          "π/2 ist die Periode von tan(2x); der Sinus hat die Periode 2π, nicht π."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është tg 240°?",
        "options": [
          "√3",
          "−√3",
          "√3/3",
          "−√3/3"
        ],
        "explanation": "240° ndodhet në kuadrantin III, ku sinusi dhe kosinusi janë negativë, prandaj tangjentja është pozitive. Këndi referues: 240° − 180° = 60°. Pra tg 240° = tg 60° = √3.",
        "hint": "Përcaktoni shenjën e tangjentes në kuadrantin III dhe këndin referues.",
        "whyWrong": [
          null,
          "Në kuadrantin III tangjentja është pozitive (negativ pjesëtuar me negativ).",
          "√3/3 = tg 30°; këndi referues është 60°, jo 30°.",
          "Dy gabime: edhe shenja edhe këndi referues janë të gabuara."
        ]
      },
      "en": {
        "question": "What is tan 240°?",
        "options": [
          "√3",
          "−√3",
          "√3/3",
          "−√3/3"
        ],
        "explanation": "240° lies in quadrant III, where sine and cosine are both negative, so tangent is positive. Reference angle: 240° − 180° = 60°. So tan 240° = tan 60° = √3.",
        "hint": "Determine the sign of tangent in quadrant III and the reference angle.",
        "whyWrong": [
          null,
          "Tangent is positive in quadrant III (negative divided by negative).",
          "√3/3 = tan 30°; the reference angle is 60°, not 30°.",
          "Two errors: both the sign and the reference angle are wrong."
        ]
      },
      "de": {
        "question": "Wie groß ist tan 240°?",
        "options": [
          "√3",
          "−√3",
          "√3/3",
          "−√3/3"
        ],
        "explanation": "240° liegt im III. Quadranten, dort sind Sinus und Kosinus negativ, also ist der Tangens positiv. Bezugswinkel: 240° − 180° = 60°. Also gilt tan 240° = tan 60° = √3.",
        "hint": "Bestimmen Sie das Vorzeichen des Tangens im III. Quadranten und den Bezugswinkel.",
        "whyWrong": [
          null,
          "Im III. Quadranten ist der Tangens positiv (negativ durch negativ).",
          "√3/3 = tan 30°; der Bezugswinkel ist 60°, nicht 30°.",
          "Zwei Fehler: Vorzeichen und Bezugswinkel sind beide falsch."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Nëse sin x = −3/5 dhe 270° < x < 360°, sa është tg x?",
        "options": [
          "3/4",
          "−4/3",
          "4/5",
          "−3/4"
        ],
        "explanation": "Nga sin²x + cos²x = 1: cos²x = 1 − 9/25 = 16/25. Në kuadrantin IV cos x > 0, pra cos x = 4/5. tg x = sin x / cos x = (−3/5)/(4/5) = −3/4.",
        "hint": "Gjeni fillimisht cos x me identitetin themelor dhe kini kujdes shenjën në kuadrantin IV.",
        "whyWrong": [
          "Në kuadrantin IV tangjentja është negative.",
          "Keni pjesëtuar cos x me sin x; kjo është kotangjentja.",
          "4/5 është cos x, jo tg x.",
          null
        ]
      },
      "en": {
        "question": "If sin x = −3/5 and 270° < x < 360°, what is tan x?",
        "options": [
          "3/4",
          "−4/3",
          "4/5",
          "−3/4"
        ],
        "explanation": "From sin²x + cos²x = 1: cos²x = 1 − 9/25 = 16/25. In quadrant IV cos x > 0, so cos x = 4/5. tan x = sin x / cos x = (−3/5)/(4/5) = −3/4.",
        "hint": "First find cos x with the Pythagorean identity, watching the sign in quadrant IV.",
        "whyWrong": [
          "Tangent is negative in quadrant IV.",
          "You divided cos x by sin x; that is the cotangent.",
          "4/5 is cos x, not tan x.",
          null
        ]
      },
      "de": {
        "question": "Es gilt sin x = −3/5 und 270° < x < 360°. Wie groß ist tan x?",
        "options": [
          "3/4",
          "−4/3",
          "4/5",
          "−3/4"
        ],
        "explanation": "Aus sin²x + cos²x = 1 folgt cos²x = 1 − 9/25 = 16/25. Im IV. Quadranten ist cos x > 0, also cos x = 4/5. tan x = sin x / cos x = (−3/5)/(4/5) = −3/4.",
        "hint": "Bestimmen Sie zuerst cos x mit dem trigonometrischen Pythagoras und achten Sie auf das Vorzeichen im IV. Quadranten.",
        "whyWrong": [
          "Im IV. Quadranten ist der Tangens negativ.",
          "Sie haben cos x durch sin x geteilt; das ist der Kotangens.",
          "4/5 ist cos x, nicht tan x.",
          null
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Një rreth ka rreze 6 cm. Sa është gjatësia e harkut që i përgjigjet këndit qendror π/3 radianë?",
        "options": [
          "π/3 cm",
          "2π cm",
          "12π cm",
          "360 cm"
        ],
        "explanation": "Gjatësia e harkut: l = r · α (α në radianë). l = 6 · π/3 = 2π cm ≈ 6,28 cm.",
        "hint": "Formula l = r · α vlen vetëm kur këndi është në radianë.",
        "whyWrong": [
          "Keni harruar të shumëzoni me rrezen r = 6 cm.",
          null,
          "12π cm është perimetri i gjithë rrethit (2πr).",
          "Keni përdorur 60° në vend të π/3 radianëve në formulën l = r · α."
        ]
      },
      "en": {
        "question": "A circle has radius 6 cm. What is the length of the arc subtended by a central angle of π/3 radians?",
        "options": [
          "π/3 cm",
          "2π cm",
          "12π cm",
          "360 cm"
        ],
        "explanation": "Arc length: l = r · α (α in radians). l = 6 · π/3 = 2π cm ≈ 6.28 cm.",
        "hint": "The formula l = r · α only works with the angle in radians.",
        "whyWrong": [
          "You forgot to multiply by the radius r = 6 cm.",
          null,
          "12π cm is the circumference of the whole circle (2πr).",
          "You used 60° instead of π/3 radians in l = r · α."
        ]
      },
      "de": {
        "question": "Ein Kreis hat den Radius 6 cm. Wie lang ist der Kreisbogen zum Mittelpunktswinkel π/3 (Bogenmaß)?",
        "options": [
          "π/3 cm",
          "2π cm",
          "12π cm",
          "360 cm"
        ],
        "explanation": "Bogenlänge: b = r · α (α im Bogenmaß). b = 6 · π/3 = 2π cm ≈ 6,28 cm.",
        "hint": "Die Formel b = r · α gilt nur, wenn der Winkel im Bogenmaß angegeben ist.",
        "whyWrong": [
          "Sie haben vergessen, mit dem Radius r = 6 cm zu multiplizieren.",
          null,
          "12π cm ist der Umfang des ganzen Kreises (2πr).",
          "Sie haben 60° statt π/3 (Bogenmaß) in b = r · α eingesetzt."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Thjeshtoni shprehjen (1 − cos²x)/sin x, ku sin x ≠ 0.",
        "options": [
          "cos x",
          "−sin x",
          "sin x",
          "1/sin x"
        ],
        "explanation": "Nga sin²x + cos²x = 1 kemi 1 − cos²x = sin²x. Pra (1 − cos²x)/sin x = sin²x/sin x = sin x.",
        "hint": "Shkruani numëruesin me ndihmën e identitetit sin²x + cos²x = 1.",
        "whyWrong": [
          "1 − cos²x është sin²x, jo cos²x.",
          "1 − cos²x = +sin²x; nuk ka shenjë minus.",
          null,
          "sin²x/sin x = sin x; keni pjesëtuar në drejtim të kundërt."
        ]
      },
      "en": {
        "question": "Simplify (1 − cos²x)/sin x, where sin x ≠ 0.",
        "options": [
          "cos x",
          "−sin x",
          "sin x",
          "1/sin x"
        ],
        "explanation": "From sin²x + cos²x = 1 we get 1 − cos²x = sin²x. So (1 − cos²x)/sin x = sin²x/sin x = sin x.",
        "hint": "Rewrite the numerator using sin²x + cos²x = 1.",
        "whyWrong": [
          "1 − cos²x equals sin²x, not cos²x.",
          "1 − cos²x = +sin²x; there is no minus sign.",
          null,
          "sin²x/sin x = sin x; you divided the wrong way round."
        ]
      },
      "de": {
        "question": "Vereinfachen Sie (1 − cos²x)/sin x für sin x ≠ 0.",
        "options": [
          "cos x",
          "−sin x",
          "sin x",
          "1/sin x"
        ],
        "explanation": "Aus sin²x + cos²x = 1 folgt 1 − cos²x = sin²x. Also gilt (1 − cos²x)/sin x = sin²x/sin x = sin x.",
        "hint": "Schreiben Sie den Zähler mithilfe von sin²x + cos²x = 1 um.",
        "whyWrong": [
          "1 − cos²x ist sin²x, nicht cos²x.",
          "1 − cos²x = +sin²x; es gibt kein Minuszeichen.",
          null,
          "sin²x/sin x = sin x; Sie haben in die falsche Richtung geteilt."
        ]
      }
    }
  ]
};
