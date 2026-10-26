// Quiz set "trig-easy" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "trig-easy",
  "difficulty": "beginner",
  "icon": "∠",
  "color": "#E67E22",
  "i18n": {
    "al": {
      "title": "Trigonometri Bazë",
      "category": "Trigonometri",
      "duration": "8 min"
    },
    "en": {
      "title": "Basic Trigonometry",
      "category": "Trigonometry",
      "duration": "8 min"
    },
    "de": {
      "title": "Grundlegende Trigonometrie",
      "category": "Trigonometrie",
      "duration": "8 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Në një trekëndësh kënddrejtë, sinusi i këndit të ngushtë α është:",
        "options": [
          "Kateti përballë / hipotenuza",
          "Kateti pranë / hipotenuza",
          "Kateti përballë / kateti pranë",
          "Hipotenuza / kateti përballë"
        ],
        "explanation": "Sipas përkufizimit, sin α = kateti përballë këndit α / hipotenuza. P.sh. në trekëndëshin me brinjë 3, 4, 5, për këndin përballë katetit 3 kemi sin α = 3/5.",
        "hint": "Sinusi lidh katetin që ndodhet përballë këndit me brinjën më të gjatë të trekëndëshit.",
        "whyWrong": [
          null,
          "Ky është kosinusi i këndit α.",
          "Ky është tangjenti i këndit α.",
          "Ky është raporti i anasjellë i sinusit; sinusi i një këndi të ngushtë është gjithmonë më i vogël se 1."
        ]
      },
      "en": {
        "question": "In a right triangle, the sine of an acute angle α is:",
        "options": [
          "Opposite / hypotenuse",
          "Adjacent / hypotenuse",
          "Opposite / adjacent",
          "Hypotenuse / opposite"
        ],
        "explanation": "By definition, sin α = side opposite α / hypotenuse. For example, in the triangle with sides 3, 4, 5, the angle opposite the side 3 has sin α = 3/5.",
        "hint": "Sine relates the side across from the angle to the longest side of the triangle.",
        "whyWrong": [
          null,
          "This is the cosine of α.",
          "This is the tangent of α.",
          "This is the reciprocal of the sine; the sine of an acute angle is always less than 1."
        ]
      },
      "de": {
        "question": "Im rechtwinkligen Dreieck ist der Sinus eines spitzen Winkels α:",
        "options": [
          "Gegenkathete / Hypotenuse",
          "Ankathete / Hypotenuse",
          "Gegenkathete / Ankathete",
          "Hypotenuse / Gegenkathete"
        ],
        "explanation": "Nach Definition gilt sin α = Gegenkathete von α / Hypotenuse. Beispiel: Im Dreieck mit den Seiten 3, 4, 5 gilt für den Winkel gegenüber der Seite 3: sin α = 3/5.",
        "hint": "Der Sinus setzt die Seite gegenüber dem Winkel ins Verhältnis zur längsten Seite des Dreiecks.",
        "whyWrong": [
          null,
          "Das ist der Kosinus von α.",
          "Das ist der Tangens von α.",
          "Das ist der Kehrwert des Sinus; der Sinus eines spitzen Winkels ist immer kleiner als 1."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Në trekëndëshin kënddrejtë ABC (∠C = 90°) brinjët janë BC = 3 cm, AC = 4 cm dhe AB = 5 cm. Gjeni cos α, ku α = ∠A.",
        "options": [
          "3/5",
          "4/5",
          "3/4",
          "5/4"
        ],
        "explanation": "Për këndin α në kulmin A: kateti pranë është AC = 4 cm, kateti përballë është BC = 3 cm dhe hipotenuza AB = 5 cm. cos α = kateti pranë / hipotenuza = 4/5 = 0,8.",
        "hint": "Përcaktoni cili katet ndodhet pranë kulmit A dhe pjesëtojeni me hipotenuzën.",
        "whyWrong": [
          "3/5 është sin α (kateti përballë / hipotenuza).",
          null,
          "3/4 është tg α (kateti përballë / kateti pranë).",
          "Keni përmbysur raportin; kosinusi i një këndi të ngushtë është më i vogël se 1."
        ]
      },
      "en": {
        "question": "In right triangle ABC (∠C = 90°) the sides are BC = 3 cm, AC = 4 cm and AB = 5 cm. Find cos α, where α = ∠A.",
        "options": [
          "3/5",
          "4/5",
          "3/4",
          "5/4"
        ],
        "explanation": "For angle α at vertex A: the adjacent side is AC = 4 cm, the opposite side is BC = 3 cm and the hypotenuse is AB = 5 cm. cos α = adjacent / hypotenuse = 4/5 = 0.8.",
        "hint": "Identify which leg lies next to vertex A and divide it by the hypotenuse.",
        "whyWrong": [
          "3/5 is sin α (opposite / hypotenuse).",
          null,
          "3/4 is tan α (opposite / adjacent).",
          "You inverted the ratio; the cosine of an acute angle is less than 1."
        ]
      },
      "de": {
        "question": "Im rechtwinkligen Dreieck ABC (∠C = 90°) gilt BC = 3 cm, AC = 4 cm und AB = 5 cm. Bestimmen Sie cos α mit α = ∠A.",
        "options": [
          "3/5",
          "4/5",
          "3/4",
          "5/4"
        ],
        "explanation": "Für den Winkel α bei A ist AC = 4 cm die Ankathete, BC = 3 cm die Gegenkathete und AB = 5 cm die Hypotenuse. cos α = Ankathete / Hypotenuse = 4/5 = 0,8.",
        "hint": "Bestimmen Sie, welche Kathete an der Ecke A anliegt, und teilen Sie sie durch die Hypotenuse.",
        "whyWrong": [
          "3/5 ist sin α (Gegenkathete / Hypotenuse).",
          null,
          "3/4 ist tan α (Gegenkathete / Ankathete).",
          "Sie haben das Verhältnis umgedreht; der Kosinus eines spitzen Winkels ist kleiner als 1."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni vlerën e shprehjes sin 30° + cos 60°.",
        "options": [
          "(1 + √3)/2",
          "1/2",
          "√3",
          "1"
        ],
        "explanation": "sin 30° = 1/2 dhe cos 60° = 1/2. Pra sin 30° + cos 60° = 1/2 + 1/2 = 1.",
        "hint": "Kujtoni vlerat e sinusit dhe kosinusit për këndet e veçanta 30° dhe 60°.",
        "whyWrong": [
          "Keni marrë cos 60° = √3/2; në fakt √3/2 = cos 30°.",
          "Keni marrë parasysh vetëm njërin term ose keni supozuar cos 60° = 0.",
          "Keni përdorur √3/2 për të dy termat; √3/2 është sin 60° dhe cos 30°.",
          null
        ]
      },
      "en": {
        "question": "Calculate sin 30° + cos 60°.",
        "options": [
          "(1 + √3)/2",
          "1/2",
          "√3",
          "1"
        ],
        "explanation": "sin 30° = 1/2 and cos 60° = 1/2. So sin 30° + cos 60° = 1/2 + 1/2 = 1.",
        "hint": "Recall the sine and cosine values of the special angles 30° and 60°.",
        "whyWrong": [
          "You took cos 60° = √3/2; in fact √3/2 = cos 30°.",
          "You used only one term or assumed cos 60° = 0.",
          "You used √3/2 for both terms; √3/2 is sin 60° and cos 30°.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie sin 30° + cos 60°.",
        "options": [
          "(1 + √3)/2",
          "1/2",
          "√3",
          "1"
        ],
        "explanation": "sin 30° = 1/2 und cos 60° = 1/2. Also sin 30° + cos 60° = 1/2 + 1/2 = 1.",
        "hint": "Erinnern Sie sich an die Sinus- und Kosinuswerte der besonderen Winkel 30° und 60°.",
        "whyWrong": [
          "Sie haben cos 60° = √3/2 angenommen; tatsächlich ist √3/2 = cos 30°.",
          "Sie haben nur einen Summanden berücksichtigt oder cos 60° = 0 angenommen.",
          "Sie haben für beide Summanden √3/2 verwendet; √3/2 ist sin 60° bzw. cos 30°.",
          null
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Për një kënd α me cos α ≠ 0, cila barazi vlen për tg α?",
        "options": [
          "tg α = sin α · cos α",
          "tg α = cos α / sin α",
          "tg α = sin α / cos α",
          "tg α = 1 / cos α"
        ],
        "explanation": "Në trekëndësh kënddrejtë: sin α / cos α = (përballë / hipotenuzë) : (pranë / hipotenuzë) = përballë / pranë = tg α. Pra tg α = sin α / cos α.",
        "hint": "Shkruani sin α dhe cos α si raporte brinjësh dhe pjesëtojini me njëri-tjetrin.",
        "whyWrong": [
          "Prodhimi sin α · cos α nuk jep raportin përballë / pranë.",
          "Ky është kotangjenti (ctg α), raporti i anasjellë i tangjentit.",
          null,
          "1 / cos α është sekanti, jo tangjenti."
        ]
      },
      "en": {
        "question": "For an angle α with cos α ≠ 0, which identity is true?",
        "options": [
          "tan α = sin α · cos α",
          "tan α = cos α / sin α",
          "tan α = sin α / cos α",
          "tan α = 1 / cos α"
        ],
        "explanation": "In a right triangle: sin α / cos α = (opposite / hypotenuse) ÷ (adjacent / hypotenuse) = opposite / adjacent = tan α. So tan α = sin α / cos α.",
        "hint": "Write sin α and cos α as side ratios and divide one by the other.",
        "whyWrong": [
          "The product sin α · cos α does not give opposite / adjacent.",
          "This is the cotangent (cot α), the reciprocal of the tangent.",
          null,
          "1 / cos α is the secant, not the tangent."
        ]
      },
      "de": {
        "question": "Für einen Winkel α mit cos α ≠ 0: Welche Gleichung gilt?",
        "options": [
          "tan α = sin α · cos α",
          "tan α = cos α / sin α",
          "tan α = sin α / cos α",
          "tan α = 1 / cos α"
        ],
        "explanation": "Im rechtwinkligen Dreieck gilt: sin α / cos α = (Gegenkathete / Hypotenuse) : (Ankathete / Hypotenuse) = Gegenkathete / Ankathete = tan α. Also tan α = sin α / cos α.",
        "hint": "Schreiben Sie sin α und cos α als Seitenverhältnisse und dividieren Sie sie durcheinander.",
        "whyWrong": [
          "Das Produkt sin α · cos α ergibt nicht Gegenkathete / Ankathete.",
          "Das ist der Kotangens (cot α), der Kehrwert des Tangens.",
          null,
          "1 / cos α ist der Sekans, nicht der Tangens."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Në një trekëndësh kënddrejtë hipotenuza është 12 cm dhe njëri kënd i ngushtë është 30°. Gjeni gjatësinë e katetit përballë këndit 30°.",
        "options": [
          "6 cm",
          "6√3 cm",
          "24 cm",
          "4√3 cm"
        ],
        "explanation": "sin 30° = kateti përballë / hipotenuza, pra kateti përballë = 12 × sin 30° = 12 × 1/2 = 6 cm.",
        "hint": "Zgjidhni raportin trigonometrik që lidh katetin përballë këndit me hipotenuzën.",
        "whyWrong": [
          null,
          "Keni përdorur cos 30°; 6√3 cm është kateti pranë këndit 30°.",
          "Keni pjesëtuar me sin 30° në vend që të shumëzoni; kateti nuk mund të jetë më i gjatë se hipotenuza.",
          "Keni përdorur tg 30° (12 × √3/3); tangjenti lidh dy katetet, jo katetin me hipotenuzën."
        ]
      },
      "en": {
        "question": "In a right triangle the hypotenuse is 12 cm and one acute angle is 30°. Find the length of the leg opposite the 30° angle.",
        "options": [
          "6 cm",
          "6√3 cm",
          "24 cm",
          "4√3 cm"
        ],
        "explanation": "sin 30° = opposite / hypotenuse, so opposite = 12 × sin 30° = 12 × 1/2 = 6 cm.",
        "hint": "Choose the trigonometric ratio that links the side opposite the angle to the hypotenuse.",
        "whyWrong": [
          null,
          "You used cos 30°; 6√3 cm is the leg adjacent to the 30° angle.",
          "You divided by sin 30° instead of multiplying; a leg cannot be longer than the hypotenuse.",
          "You used tan 30° (12 × √3/3); tangent relates the two legs, not a leg and the hypotenuse."
        ]
      },
      "de": {
        "question": "In einem rechtwinkligen Dreieck ist die Hypotenuse 12 cm lang und ein spitzer Winkel beträgt 30°. Bestimmen Sie die Länge der Gegenkathete des 30°-Winkels.",
        "options": [
          "6 cm",
          "6√3 cm",
          "24 cm",
          "4√3 cm"
        ],
        "explanation": "sin 30° = Gegenkathete / Hypotenuse, also Gegenkathete = 12 × sin 30° = 12 × 1/2 = 6 cm.",
        "hint": "Wählen Sie das Seitenverhältnis, das die Gegenkathete mit der Hypotenuse verbindet.",
        "whyWrong": [
          null,
          "Sie haben cos 30° verwendet; 6√3 cm ist die Ankathete des 30°-Winkels.",
          "Sie haben durch sin 30° geteilt statt zu multiplizieren; eine Kathete kann nicht länger als die Hypotenuse sein.",
          "Sie haben tan 30° verwendet (12 × √3/3); der Tangens verbindet die beiden Katheten, nicht Kathete und Hypotenuse."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Sa është tg 45°?",
        "options": [
          "0",
          "√2/2",
          "√3",
          "1"
        ],
        "explanation": "tg 45° = sin 45° / cos 45° = (√2/2) / (√2/2) = 1. Në trekëndëshin kënddrejtë barakrahës të dy katetet janë të barabarta, prandaj raporti i tyre është 1.",
        "hint": "Mendoni për trekëndëshin kënddrejtë barakrahës: si janë katetet e tij?",
        "whyWrong": [
          "0 është tg 0°.",
          "√2/2 është sin 45° ose cos 45°, jo tg 45°.",
          "√3 është tg 60°.",
          null
        ]
      },
      "en": {
        "question": "What is tan 45°?",
        "options": [
          "0",
          "√2/2",
          "√3",
          "1"
        ],
        "explanation": "tan 45° = sin 45° / cos 45° = (√2/2) / (√2/2) = 1. In an isosceles right triangle both legs are equal, so their ratio is 1.",
        "hint": "Think of an isosceles right triangle: how do its legs compare?",
        "whyWrong": [
          "0 is tan 0°.",
          "√2/2 is sin 45° or cos 45°, not tan 45°.",
          "√3 is tan 60°.",
          null
        ]
      },
      "de": {
        "question": "Wie groß ist tan 45°?",
        "options": [
          "0",
          "√2/2",
          "√3",
          "1"
        ],
        "explanation": "tan 45° = sin 45° / cos 45° = (√2/2) / (√2/2) = 1. Im gleichschenklig-rechtwinkligen Dreieck sind beide Katheten gleich lang, ihr Verhältnis ist also 1.",
        "hint": "Denken Sie an ein gleichschenklig-rechtwinkliges Dreieck: Wie verhalten sich seine Katheten zueinander?",
        "whyWrong": [
          "0 ist tan 0°.",
          "√2/2 ist sin 45° bzw. cos 45°, nicht tan 45°.",
          "√3 ist tan 60°.",
          null
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Cila nga vlerat e mëposhtme është e barabartë me sin 35°?",
        "options": [
          "cos 35°",
          "cos 55°",
          "sin 55°",
          "tg 55°"
        ],
        "explanation": "Në trekëndësh kënddrejtë dy këndet e ngushta janë komplementare (35° + 55° = 90°), dhe kateti përballë njërit është kateti pranë tjetrit. Prandaj sin 35° = cos (90° − 35°) = cos 55°.",
        "hint": "Përdorni lidhjen ndërmjet sinusit dhe kosinusit të dy këndeve që kanë shumën 90°.",
        "whyWrong": [
          "cos 35° është i barabartë me sin 55°, jo me sin 35°.",
          null,
          "sin 55° ≠ sin 35°, sepse sinusi rritet nga 0° deri në 90°.",
          "tg 55° > 1, kurse sin 35° < 1."
        ]
      },
      "en": {
        "question": "Which of the following equals sin 35°?",
        "options": [
          "cos 35°",
          "cos 55°",
          "sin 55°",
          "tan 55°"
        ],
        "explanation": "In a right triangle the two acute angles are complementary (35° + 55° = 90°), and the side opposite one is adjacent to the other. Therefore sin 35° = cos (90° − 35°) = cos 55°.",
        "hint": "Use the relation between the sine and cosine of two angles that add up to 90°.",
        "whyWrong": [
          "cos 35° equals sin 55°, not sin 35°.",
          null,
          "sin 55° ≠ sin 35°, because sine increases from 0° to 90°.",
          "tan 55° > 1, whereas sin 35° < 1."
        ]
      },
      "de": {
        "question": "Welcher der folgenden Werte ist gleich sin 35°?",
        "options": [
          "cos 35°",
          "cos 55°",
          "sin 55°",
          "tan 55°"
        ],
        "explanation": "Im rechtwinkligen Dreieck ergänzen sich die beiden spitzen Winkel zu 90° (35° + 55° = 90°), und die Gegenkathete des einen ist die Ankathete des anderen. Daher gilt sin 35° = cos (90° − 35°) = cos 55°.",
        "hint": "Nutzen Sie den Zusammenhang zwischen Sinus und Kosinus zweier Winkel, die zusammen 90° ergeben.",
        "whyWrong": [
          "cos 35° ist gleich sin 55°, nicht sin 35°.",
          null,
          "sin 55° ≠ sin 35°, denn der Sinus wächst von 0° bis 90°.",
          "tan 55° > 1, aber sin 35° < 1."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Nëse sin x = 0,5 dhe 0° < x < 90°, sa është x?",
        "options": [
          "45°",
          "60°",
          "30°",
          "90°"
        ],
        "explanation": "Nga vlerat e veçanta: sin 30° = 1/2 = 0,5. Meqë sinusi rritet në intervalin nga 0° deri në 90°, kjo është zgjidhja e vetme: x = 30°.",
        "hint": "Kujtoni vlerat e sinusit për 30°, 45°, 60° dhe 90°.",
        "whyWrong": [
          "sin 45° = √2/2 ≈ 0,71.",
          "sin 60° = √3/2 ≈ 0,87; vlera 0,5 i përket cos 60°.",
          null,
          "sin 90° = 1; për më tepër 90° nuk i përket intervalit të dhënë."
        ]
      },
      "en": {
        "question": "If sin x = 0.5 and 0° < x < 90°, what is x?",
        "options": [
          "45°",
          "60°",
          "30°",
          "90°"
        ],
        "explanation": "From the special values: sin 30° = 1/2 = 0.5. Since sine increases from 0° to 90°, this is the only solution: x = 30°.",
        "hint": "Recall the sine values for 30°, 45°, 60° and 90°.",
        "whyWrong": [
          "sin 45° = √2/2 ≈ 0.71.",
          "sin 60° = √3/2 ≈ 0.87; the value 0.5 belongs to cos 60°.",
          null,
          "sin 90° = 1; moreover, 90° is outside the given interval."
        ]
      },
      "de": {
        "question": "Wenn sin x = 0,5 und 0° < x < 90° gilt, wie groß ist x?",
        "options": [
          "45°",
          "60°",
          "30°",
          "90°"
        ],
        "explanation": "Aus den besonderen Werten: sin 30° = 1/2 = 0,5. Da der Sinus von 0° bis 90° wächst, ist dies die einzige Lösung: x = 30°.",
        "hint": "Erinnern Sie sich an die Sinuswerte für 30°, 45°, 60° und 90°.",
        "whyWrong": [
          "sin 45° = √2/2 ≈ 0,71.",
          "sin 60° = √3/2 ≈ 0,87; der Wert 0,5 gehört zu cos 60°.",
          null,
          "sin 90° = 1; außerdem liegt 90° nicht im angegebenen Intervall."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Për një kënd të ngushtë α dihet sin α = 5/13. Llogaritni cos α.",
        "options": [
          "12/13",
          "8/13",
          "5/12",
          "144/169"
        ],
        "explanation": "Nga identiteti sin² α + cos² α = 1: cos² α = 1 − (5/13)² = 1 − 25/169 = 144/169. Meqë α është kënd i ngushtë, cos α > 0, pra cos α = √(144/169) = 12/13.",
        "hint": "Përdorni identitetin themelor që lidh sin² α dhe cos² α.",
        "whyWrong": [
          null,
          "Keni llogaritur 1 − sin α në vend të 1 − sin² α.",
          "5/12 është tg α = sin α / cos α, jo cos α.",
          "144/169 është cos² α; keni harruar rrënjën katrore."
        ]
      },
      "en": {
        "question": "For an acute angle α, sin α = 5/13. Calculate cos α.",
        "options": [
          "12/13",
          "8/13",
          "5/12",
          "144/169"
        ],
        "explanation": "From sin² α + cos² α = 1: cos² α = 1 − (5/13)² = 1 − 25/169 = 144/169. Since α is acute, cos α > 0, so cos α = √(144/169) = 12/13.",
        "hint": "Use the fundamental identity linking sin² α and cos² α.",
        "whyWrong": [
          null,
          "You computed 1 − sin α instead of 1 − sin² α.",
          "5/12 is tan α = sin α / cos α, not cos α.",
          "144/169 is cos² α; you forgot the square root."
        ]
      },
      "de": {
        "question": "Für einen spitzen Winkel α gilt sin α = 5/13. Berechnen Sie cos α.",
        "options": [
          "12/13",
          "8/13",
          "5/12",
          "144/169"
        ],
        "explanation": "Aus sin² α + cos² α = 1 folgt: cos² α = 1 − (5/13)² = 1 − 25/169 = 144/169. Da α spitz ist, gilt cos α > 0, also cos α = √(144/169) = 12/13.",
        "hint": "Verwenden Sie die Grundbeziehung zwischen sin² α und cos² α.",
        "whyWrong": [
          null,
          "Sie haben 1 − sin α statt 1 − sin² α berechnet.",
          "5/12 ist tan α = sin α / cos α, nicht cos α.",
          "144/169 ist cos² α; Sie haben vergessen, die Wurzel zu ziehen."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Në një trekëndësh kënddrejtë hipotenuza është 10 cm dhe për këndin e ngushtë θ dihet sin θ = 0,6. Gjeni gjatësinë e katetit përballë këndit θ.",
        "options": [
          "4 cm",
          "8 cm",
          "≈ 16,67 cm",
          "6 cm"
        ],
        "explanation": "sin θ = kateti përballë / hipotenuza, pra kateti përballë = 10 × sin θ = 10 × 0,6 = 6 cm.",
        "hint": "Shkruani përkufizimin e sinusit dhe zgjidheni për katetin përballë.",
        "whyWrong": [
          "Keni llogaritur 10 × (1 − 0,6); sinusi nuk zbritet nga 1.",
          "8 cm është kateti pranë këndit θ (10 × cos θ = 10 × 0,8).",
          "Keni pjesëtuar 10 me 0,6 (≈ 16,67, rrumbullakuar në dy shifra pas presjes) në vend që të shumëzoni; kateti nuk mund të jetë më i gjatë se hipotenuza.",
          null
        ]
      },
      "en": {
        "question": "In a right triangle the hypotenuse is 10 cm and for the acute angle θ we know sin θ = 0.6. Find the length of the leg opposite θ.",
        "options": [
          "4 cm",
          "8 cm",
          "≈ 16.67 cm",
          "6 cm"
        ],
        "explanation": "sin θ = opposite / hypotenuse, so opposite = 10 × sin θ = 10 × 0.6 = 6 cm.",
        "hint": "Write down the definition of sine and solve it for the opposite side.",
        "whyWrong": [
          "You computed 10 × (1 − 0.6); the sine is not subtracted from 1.",
          "8 cm is the leg adjacent to θ (10 × cos θ = 10 × 0.8).",
          "You divided 10 by 0.6 (≈ 16.67, rounded to two decimal places) instead of multiplying; a leg cannot be longer than the hypotenuse.",
          null
        ]
      },
      "de": {
        "question": "In einem rechtwinkligen Dreieck ist die Hypotenuse 10 cm lang, und für den spitzen Winkel θ gilt sin θ = 0,6. Bestimmen Sie die Länge der Gegenkathete von θ.",
        "options": [
          "4 cm",
          "8 cm",
          "≈ 16,67 cm",
          "6 cm"
        ],
        "explanation": "sin θ = Gegenkathete / Hypotenuse, also Gegenkathete = 10 × sin θ = 10 × 0,6 = 6 cm.",
        "hint": "Schreiben Sie die Definition des Sinus auf und lösen Sie sie nach der Gegenkathete auf.",
        "whyWrong": [
          "Sie haben 10 × (1 − 0,6) berechnet; der Sinus wird nicht von 1 abgezogen.",
          "8 cm ist die Ankathete von θ (10 × cos θ = 10 × 0,8).",
          "Sie haben 10 durch 0,6 geteilt (≈ 16,67, auf zwei Dezimalstellen gerundet), statt zu multiplizieren; eine Kathete kann nicht länger als die Hypotenuse sein.",
          null
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 8
      },
      "al": {
        "question": "Në një trekëndësh kënddrejtë, për këndin e ngushtë α vlen tan α = 3/4. Kateti përballë α është 6 cm. Sa centimetra është kateti afër α?",
        "explanation": "tan α = kateti përballë : kateti afër, pra 3/4 = 6 : b. Atëherë b = 6 · 4/3 = 8 cm.",
        "hint": "Shkruani përkufizimin e tangjentit dhe zgjidhni për katetin afër.",
        "unit": "cm",
        "commonMistakes": [
          {
            "value": 4.5,
            "why": "Keni shumëzuar 6 · 3/4 = 4,5; kateti afër del kur pjesëtoni 6 me tan α."
          }
        ]
      },
      "en": {
        "question": "In a right triangle, the acute angle α has tan α = 3/4. The leg opposite α is 6 cm. How many centimetres is the leg adjacent to α?",
        "explanation": "tan α = opposite ÷ adjacent, so 3/4 = 6 ÷ b. Then b = 6 · 4/3 = 8 cm.",
        "hint": "Write down the definition of tangent and solve for the adjacent leg.",
        "unit": "cm",
        "commonMistakes": [
          {
            "value": 4.5,
            "why": "You multiplied 6 · 3/4 = 4.5; the adjacent leg is 6 divided by tan α."
          }
        ]
      },
      "de": {
        "question": "In einem rechtwinkligen Dreieck gilt für den spitzen Winkel α: tan α = 3/4. Die Gegenkathete von α ist 6 cm lang. Wie viele Zentimeter ist die Ankathete von α lang?",
        "explanation": "tan α = Gegenkathete : Ankathete, also 3/4 = 6 : b. Damit b = 6 · 4/3 = 8 cm.",
        "hint": "Schreiben Sie die Definition des Tangens auf und lösen Sie nach der Ankathete auf.",
        "unit": "cm",
        "commonMistakes": [
          {
            "value": 4.5,
            "why": "Sie haben 6 · 3/4 = 4,5 gerechnet; die Ankathete ist 6 geteilt durch tan α."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 4.33,
        "tolerance": 0.01
      },
      "al": {
        "question": "Një shkallë 5 m e gjatë mbështetet në mur dhe formon me tokën një kënd 60°. Në çfarë lartësie e prek shkalla murin? Rrumbullakoni në dy shifra pas presjes (në m).",
        "explanation": "Shkalla është hipotenuza dhe lartësia është kateti përballë këndit 60°: h = 5 · sin 60° = 5 · √3/2 ≈ 4,33 m.",
        "hint": "Cili raport trigonometrik lidh katetin përballë këndit me hipotenuzën?",
        "unit": "m",
        "commonMistakes": [
          {
            "value": 2.5,
            "why": "Keni përdorur cos 60° (5 · 0,5 = 2,5); kjo është largesa e këmbës së shkallës nga muri."
          },
          {
            "value": 8.66,
            "why": "Keni përdorur tan 60° (5 · √3 ≈ 8,66); shkalla është hipotenuza, jo kateti afër."
          }
        ]
      },
      "en": {
        "question": "A 5 m ladder leans against a wall and makes a 60° angle with the ground. At what height does the ladder touch the wall? Round to two decimal places (in m).",
        "explanation": "The ladder is the hypotenuse and the height is the leg opposite the 60° angle: h = 5 · sin 60° = 5 · √3/2 ≈ 4.33 m.",
        "hint": "Which trigonometric ratio links the opposite leg with the hypotenuse?",
        "unit": "m",
        "commonMistakes": [
          {
            "value": 2.5,
            "why": "You used cos 60° (5 · 0.5 = 2.5); that is the distance of the ladder's foot from the wall."
          },
          {
            "value": 8.66,
            "why": "You used tan 60° (5 · √3 ≈ 8.66); the ladder is the hypotenuse, not the adjacent leg."
          }
        ]
      },
      "de": {
        "question": "Eine 5 m lange Leiter lehnt an einer Wand und bildet mit dem Boden einen Winkel von 60°. In welcher Höhe berührt die Leiter die Wand? Runden Sie auf zwei Nachkommastellen (in m).",
        "explanation": "Die Leiter ist die Hypotenuse, die Höhe ist die Gegenkathete des 60°-Winkels: h = 5 · sin 60° = 5 · √3/2 ≈ 4,33 m.",
        "hint": "Welches trigonometrische Verhältnis verbindet die Gegenkathete mit der Hypotenuse?",
        "unit": "m",
        "commonMistakes": [
          {
            "value": 2.5,
            "why": "Sie haben cos 60° verwendet (5 · 0,5 = 2,5); das ist der Abstand des Leiterfußes von der Wand."
          },
          {
            "value": 8.66,
            "why": "Sie haben tan 60° verwendet (5 · √3 ≈ 8,66); die Leiter ist die Hypotenuse, nicht die Ankathete."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": false,
      "al": {
        "question": "sin(2 · 30°) = 2 · sin 30°",
        "explanation": "Ana e majtë: sin 60° = √3/2 ≈ 0,866. Ana e djathtë: 2 · sin 30° = 2 · 0,5 = 1. Meqë 0,866 ≠ 1, pohimi është i gabuar. (Në përgjithësi sin 2x = 2 sin x cos x.)",
        "hint": "Llogaritni veçmas të dyja anët me vlerat e njohura të sin 30° dhe sin 60°.",
        "whyWrong": "Pohimi nuk është i vërtetë: sinusi nuk është linear, faktori 2 nuk mund të nxirret jashtë: sin 60° ≈ 0,866, ndërsa 2 · sin 30° = 1."
      },
      "en": {
        "question": "sin(2 · 30°) = 2 · sin 30°",
        "explanation": "Left side: sin 60° = √3/2 ≈ 0.866. Right side: 2 · sin 30° = 2 · 0.5 = 1. Since 0.866 ≠ 1, the statement is false. (In general sin 2x = 2 sin x cos x.)",
        "hint": "Evaluate both sides separately using the known values of sin 30° and sin 60°.",
        "whyWrong": "The statement is not true: sine is not linear, so the factor 2 cannot be pulled out: sin 60° ≈ 0.866, whereas 2 · sin 30° = 1."
      },
      "de": {
        "question": "sin(2 · 30°) = 2 · sin 30°",
        "explanation": "Linke Seite: sin 60° = √3/2 ≈ 0,866. Rechte Seite: 2 · sin 30° = 2 · 0,5 = 1. Da 0,866 ≠ 1, ist die Aussage falsch. (Allgemein gilt sin 2x = 2 sin x cos x.)",
        "hint": "Berechnen Sie beide Seiten getrennt mit den bekannten Werten von sin 30° und sin 60°.",
        "whyWrong": "Die Aussage stimmt nicht: Der Sinus ist nicht linear, der Faktor 2 lässt sich nicht herausziehen: sin 60° ≈ 0,866, aber 2 · sin 30° = 1."
      }
    }
  ]
};
