// Quiz set "stat-medium" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "stat-medium",
  "difficulty": "intermediate",
  "icon": "📊",
  "color": "#96CEB4",
  "i18n": {
    "al": {
      "title": "Statistikë & Probabilitet",
      "category": "Statistikë",
      "duration": "10 min"
    },
    "en": {
      "title": "Statistics & Probability",
      "category": "Statistics",
      "duration": "10 min"
    },
    "de": {
      "title": "Statistik & Wahrscheinlichkeit",
      "category": "Statistik",
      "duration": "10 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Llogaritni devijimin standard të popullatës σ për të dhënat: 2, 4, 4, 4, 5, 5, 7, 9.",
        "options": [
          "4",
          "≈ 2,14",
          "2",
          "1,5"
        ],
        "explanation": "μ = 40 / 8 = 5. Katrorët e devijimeve: 9, 1, 1, 1, 0, 0, 4, 16; shuma = 32. σ² = 32 / 8 = 4, pra σ = √4 = 2.",
        "hint": "Për popullatën pjesëtoni me n dhe mos harroni rrënjën katrore në fund.",
        "whyWrong": [
          "Kjo është varianca σ²; nuk është nxjerrë rrënja katrore.",
          "Është pjesëtuar me n − 1 = 7 (devijimi standard i mostrës), por kërkohet σ e popullatës.",
          null,
          "Kjo është mesatarja e devijimeve absolute (12 / 8), jo devijimi standard."
        ]
      },
      "en": {
        "question": "Calculate the population standard deviation σ of the data: 2, 4, 4, 4, 5, 5, 7, 9.",
        "options": [
          "4",
          "≈ 2.14",
          "2",
          "1.5"
        ],
        "explanation": "μ = 40 / 8 = 5. Squared deviations: 9, 1, 1, 1, 0, 0, 4, 16; sum = 32. σ² = 32 / 8 = 4, so σ = √4 = 2.",
        "hint": "For a population divide by n, and remember the square root at the end.",
        "whyWrong": [
          "That is the variance σ²; the square root was not taken.",
          "Divided by n − 1 = 7 (sample standard deviation), but the population σ is asked for.",
          null,
          "That is the mean absolute deviation (12 / 8), not the standard deviation."
        ]
      },
      "de": {
        "question": "Berechnen Sie die Standardabweichung σ der Grundgesamtheit für die Daten: 2, 4, 4, 4, 5, 5, 7, 9.",
        "options": [
          "4",
          "≈ 2,14",
          "2",
          "1,5"
        ],
        "explanation": "μ = 40 / 8 = 5. Quadrierte Abweichungen: 9, 1, 1, 1, 0, 0, 4, 16; Summe = 32. σ² = 32 / 8 = 4, also σ = √4 = 2.",
        "hint": "Teilen Sie für die Grundgesamtheit durch n und vergessen Sie die Wurzel am Ende nicht.",
        "whyWrong": [
          "Das ist die Varianz σ²; die Wurzel wurde nicht gezogen.",
          "Es wurde durch n − 1 = 7 geteilt (Stichprobe), gefragt ist aber σ der Grundgesamtheit.",
          null,
          "Das ist die mittlere absolute Abweichung (12 / 8), nicht die Standardabweichung."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Në një anketë, 10 nxënës u pyetën sa vëllezër e motra kanë: 2 nxënës kanë 1, 5 nxënës kanë 2 dhe 3 nxënës kanë 3. Sa është mesatarja e numrit të vëllezërve e motrave?",
        "options": [
          "2,1",
          "2",
          "7",
          "≈ 3,33"
        ],
        "explanation": "Shuma = 1 · 2 + 2 · 5 + 3 · 3 = 2 + 10 + 9 = 21. Numri i nxënësve = 10. Mesatarja = 21 / 10 = 2,1.",
        "hint": "Shumëzoni çdo vlerë me frekuencën e saj para se të mblidhni.",
        "whyWrong": [
          null,
          "Është marrë mesatarja e vlerave 1, 2, 3 pa i marrë parasysh frekuencat.",
          "Shuma 21 është pjesëtuar me 3 (numri i vlerave të ndryshme) në vend të 10 nxënësve.",
          "Është marrë mesatarja e frekuencave (10 / 3), jo e vlerave."
        ]
      },
      "en": {
        "question": "In a survey, 10 students were asked how many siblings they have: 2 students have 1, 5 have 2 and 3 have 3. What is the mean number of siblings?",
        "options": [
          "2.1",
          "2",
          "7",
          "≈ 3.33"
        ],
        "explanation": "Total = 1 · 2 + 2 · 5 + 3 · 3 = 2 + 10 + 9 = 21. Number of students = 10. Mean = 21 / 10 = 2.1.",
        "hint": "Multiply each value by its frequency before adding.",
        "whyWrong": [
          null,
          "The values 1, 2, 3 were averaged without their frequencies.",
          "21 was divided by 3 (distinct values) instead of 10 students.",
          "The frequencies were averaged (10 / 3), not the values."
        ]
      },
      "de": {
        "question": "In einer Umfrage wurden 10 Schüler nach der Anzahl ihrer Geschwister gefragt: 2 haben 1, 5 haben 2 und 3 haben 3. Wie groß ist der Mittelwert der Geschwisterzahl?",
        "options": [
          "2,1",
          "2",
          "7",
          "≈ 3,33"
        ],
        "explanation": "Summe = 1 · 2 + 2 · 5 + 3 · 3 = 2 + 10 + 9 = 21. Anzahl der Schüler = 10. Mittelwert = 21 / 10 = 2,1.",
        "hint": "Multiplizieren Sie jeden Wert mit seiner Häufigkeit, bevor Sie addieren.",
        "whyWrong": [
          null,
          "Die Werte 1, 2, 3 wurden ohne ihre Häufigkeiten gemittelt.",
          "21 wurde durch 3 (verschiedene Werte) statt durch 10 Schüler geteilt.",
          "Es wurden die Häufigkeiten gemittelt (10 / 3), nicht die Werte."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Hidhen dy zare. Sa është probabiliteti që në të dy zaret të bjerë 6?",
        "options": [
          "1/3",
          "1/12",
          "11/36",
          "1/36"
        ],
        "explanation": "Zaret janë të pavarur, prandaj probabilitetet shumëzohen: P = 1/6 · 1/6 = 1/36.",
        "hint": "Rezultati i një zari nuk ndikon te tjetri; si kombinohen probabilitetet e ngjarjeve të pavarura?",
        "whyWrong": [
          "Probabilitetet janë mbledhur (1/6 + 1/6); për «të dyja» ato shumëzohen.",
          "Janë mbledhur emëruesit (6 + 6); numri i rezultateve është 6 · 6 = 36.",
          "Kjo është probabiliteti për të paktën një 6, jo për dy gjashtëshe.",
          null
        ]
      },
      "en": {
        "question": "Two dice are rolled. What is the probability that both show a 6?",
        "options": [
          "1/3",
          "1/12",
          "11/36",
          "1/36"
        ],
        "explanation": "The dice are independent, so the probabilities are multiplied: P = 1/6 · 1/6 = 1/36.",
        "hint": "One die does not affect the other; how do you combine probabilities of independent events?",
        "whyWrong": [
          "The probabilities were added (1/6 + 1/6); for “both” they are multiplied.",
          "The denominators were added (6 + 6); there are 6 · 6 = 36 outcomes.",
          "That is the probability of at least one 6, not of two sixes.",
          null
        ]
      },
      "de": {
        "question": "Zwei Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit, dass beide eine 6 zeigen?",
        "options": [
          "1/3",
          "1/12",
          "11/36",
          "1/36"
        ],
        "explanation": "Die Würfel sind unabhängig, also werden die Wahrscheinlichkeiten multipliziert: P = 1/6 · 1/6 = 1/36.",
        "hint": "Ein Würfel beeinflusst den anderen nicht; wie verknüpft man Wahrscheinlichkeiten unabhängiger Ereignisse?",
        "whyWrong": [
          "Die Wahrscheinlichkeiten wurden addiert (1/6 + 1/6); für „beide“ wird multipliziert.",
          "Die Nenner wurden addiert (6 + 6); es gibt 6 · 6 = 36 Ergebnisse.",
          "Das ist die Wahrscheinlichkeit für mindestens eine 6, nicht für zwei Sechsen.",
          null
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Në një klasë me 30 nxënës, 12 luajnë futboll, 10 luajnë basketboll dhe 4 luajnë të dyja. Zgjidhet rastësisht një nxënës. Sa është probabiliteti që ai të luajë të paktën njërin sport?",
        "options": [
          "11/15",
          "3/5",
          "2/15",
          "7/15"
        ],
        "explanation": "P(F ∪ B) = P(F) + P(B) − P(F ∩ B) = 12/30 + 10/30 − 4/30 = 18/30 = 3/5.",
        "hint": "Nxënësit që luajnë të dyja sportet mos i numëroni dy herë.",
        "whyWrong": [
          "12 + 10 = 22 i numëron dy herë 4 nxënësit që luajnë të dyja sportet.",
          null,
          "Kjo është probabiliteti për të dyja sportet (4/30), jo për të paktën njërin.",
          "Pjesa e përbashkët është zbritur dy herë: 12 + 10 − 8 = 14."
        ]
      },
      "en": {
        "question": "In a class of 30 students, 12 play football, 10 play basketball and 4 play both. A student is chosen at random. What is the probability that the student plays at least one of the sports?",
        "options": [
          "11/15",
          "3/5",
          "2/15",
          "7/15"
        ],
        "explanation": "P(F ∪ B) = P(F) + P(B) − P(F ∩ B) = 12/30 + 10/30 − 4/30 = 18/30 = 3/5.",
        "hint": "Do not count the students who play both sports twice.",
        "whyWrong": [
          "12 + 10 = 22 counts the 4 students who play both sports twice.",
          null,
          "That is the probability of both sports (4/30), not of at least one.",
          "The overlap was subtracted twice: 12 + 10 − 8 = 14."
        ]
      },
      "de": {
        "question": "In einer Klasse mit 30 Schülern spielen 12 Fußball, 10 Basketball und 4 beides. Ein Schüler wird zufällig ausgewählt. Wie groß ist die Wahrscheinlichkeit, dass er mindestens eine der beiden Sportarten spielt?",
        "options": [
          "11/15",
          "3/5",
          "2/15",
          "7/15"
        ],
        "explanation": "P(F ∪ B) = P(F) + P(B) − P(F ∩ B) = 12/30 + 10/30 − 4/30 = 18/30 = 3/5.",
        "hint": "Zählen Sie die Schüler, die beide Sportarten spielen, nicht doppelt.",
        "whyWrong": [
          "12 + 10 = 22 zählt die 4 Schüler mit beiden Sportarten doppelt.",
          null,
          "Das ist die Wahrscheinlichkeit für beide Sportarten (4/30), nicht für mindestens eine.",
          "Die Schnittmenge wurde doppelt abgezogen: 12 + 10 − 8 = 14."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Në sa mënyra mund të zgjidhet një komision me 3 anëtarë nga 7 nxënës? (Radha nuk ka rëndësi.)",
        "options": [
          "210",
          "21",
          "35",
          "343"
        ],
        "explanation": "Radha nuk ka rëndësi, prandaj është kombinim: C(7, 3) = 7! / (3! · 4!) = (7 · 6 · 5) / (3 · 2 · 1) = 210 / 6 = 35.",
        "hint": "Pyetni veten: a ka rëndësi radha e zgjedhjes së anëtarëve?",
        "whyWrong": [
          "Ky është permutacioni 7 · 6 · 5; duhet pjesëtuar me 3!, sepse radha nuk ka rëndësi.",
          "Është llogaritur C(7, 2) = 21 në vend të C(7, 3).",
          null,
          "7³ lejon që i njëjti nxënës të zgjidhet disa herë dhe e merr parasysh radhën."
        ]
      },
      "en": {
        "question": "In how many ways can a 3-member committee be chosen from 7 students? (Order does not matter.)",
        "options": [
          "210",
          "21",
          "35",
          "343"
        ],
        "explanation": "Order does not matter, so it is a combination: C(7, 3) = 7! / (3! · 4!) = (7 · 6 · 5) / (3 · 2 · 1) = 210 / 6 = 35.",
        "hint": "Ask yourself: does the order of choosing matter?",
        "whyWrong": [
          "That is the permutation 7 · 6 · 5; divide by 3! because order does not matter.",
          "C(7, 2) = 21 was calculated instead of C(7, 3).",
          null,
          "7³ allows the same student to be chosen repeatedly and counts order."
        ]
      },
      "de": {
        "question": "Auf wie viele Arten kann aus 7 Schülern ein Ausschuss mit 3 Mitgliedern gewählt werden? (Die Reihenfolge spielt keine Rolle.)",
        "options": [
          "210",
          "21",
          "35",
          "343"
        ],
        "explanation": "Die Reihenfolge ist egal, also handelt es sich um eine Kombination: C(7, 3) = 7! / (3! · 4!) = (7 · 6 · 5) / (3 · 2 · 1) = 210 / 6 = 35.",
        "hint": "Fragen Sie sich: Spielt die Reihenfolge der Auswahl eine Rolle?",
        "whyWrong": [
          "Das ist die Permutation 7 · 6 · 5; man muss durch 3! teilen, da die Reihenfolge egal ist.",
          "Es wurde C(7, 2) = 21 statt C(7, 3) berechnet.",
          null,
          "7³ erlaubt, denselben Schüler mehrfach zu wählen, und berücksichtigt die Reihenfolge."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Në një garë marrin pjesë 8 vrapues. Në sa mënyra të ndryshme mund të ndahen vendi i 1-rë, i 2-të dhe i 3-të?",
        "options": [
          "336",
          "56",
          "24",
          "512"
        ],
        "explanation": "Radha ka rëndësi (vendi i 1-rë ≠ vendi i 2-të), prandaj është permutacion: 8 · 7 · 6 = 336.",
        "hint": "Numëroni sa zgjedhje ka për vendin e parë, pastaj për të dytin dhe të tretin.",
        "whyWrong": [
          null,
          "Ky është kombinimi C(8, 3), por këtu radha e vendeve ka rëndësi.",
          "3! = 24 numëron vetëm renditjet e 3 vrapuesve të caktuar, jo zgjedhjen e tyre nga 8.",
          "8³ lejon që i njëjti vrapues të zërë disa vende."
        ]
      },
      "en": {
        "question": "Eight runners take part in a race. In how many different ways can 1st, 2nd and 3rd place be awarded?",
        "options": [
          "336",
          "56",
          "24",
          "512"
        ],
        "explanation": "Order matters (1st place ≠ 2nd place), so it is a permutation: 8 · 7 · 6 = 336.",
        "hint": "Count the choices for 1st place, then for 2nd and 3rd.",
        "whyWrong": [
          null,
          "That is the combination C(8, 3), but here the order of places matters.",
          "3! = 24 only counts orderings of 3 fixed runners, not choosing them from 8.",
          "8³ lets the same runner take several places."
        ]
      },
      "de": {
        "question": "An einem Rennen nehmen 8 Läufer teil. Auf wie viele Arten können Platz 1, 2 und 3 vergeben werden?",
        "options": [
          "336",
          "56",
          "24",
          "512"
        ],
        "explanation": "Die Reihenfolge zählt (Platz 1 ≠ Platz 2), also handelt es sich um eine Permutation: 8 · 7 · 6 = 336.",
        "hint": "Zählen Sie die Möglichkeiten für Platz 1, dann für Platz 2 und 3.",
        "whyWrong": [
          null,
          "Das ist die Kombination C(8, 3), hier zählt aber die Reihenfolge der Plätze.",
          "3! = 24 zählt nur die Anordnungen von 3 festen Läufern, nicht deren Auswahl aus 8.",
          "8³ erlaubt, dass derselbe Läufer mehrere Plätze belegt."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Ndryshorja e rastit X merr vlerat 0, 1, 2 me probabilitetet përkatëse 0,5; 0,3; 0,2. Sa është vlera e pritur E(X)?",
        "options": [
          "1",
          "3",
          "1,3",
          "0,7"
        ],
        "explanation": "E(X) = Σ x · P(x) = 0 · 0,5 + 1 · 0,3 + 2 · 0,2 = 0 + 0,3 + 0,4 = 0,7.",
        "hint": "Shumëzoni çdo vlerë me probabilitetin e saj dhe mblidhni.",
        "whyWrong": [
          "Është marrë mesatarja e thjeshtë e vlerave, por probabilitetet nuk janë të barabarta.",
          "Janë mbledhur vetëm vlerat, pa i shumëzuar me probabilitetet.",
          "Probabilitetet janë çiftuar në renditje të kundërt (0 · 0,2 + 1 · 0,3 + 2 · 0,5).",
          null
        ]
      },
      "en": {
        "question": "The random variable X takes the values 0, 1, 2 with probabilities 0.5, 0.3, 0.2 respectively. What is the expected value E(X)?",
        "options": [
          "1",
          "3",
          "1.3",
          "0.7"
        ],
        "explanation": "E(X) = Σ x · P(x) = 0 · 0.5 + 1 · 0.3 + 2 · 0.2 = 0 + 0.3 + 0.4 = 0.7.",
        "hint": "Multiply each value by its probability and add.",
        "whyWrong": [
          "The simple average of the values was taken, but the probabilities are not equal.",
          "Only the values were added, without multiplying by the probabilities.",
          "The probabilities were paired in reverse order (0 · 0.2 + 1 · 0.3 + 2 · 0.5).",
          null
        ]
      },
      "de": {
        "question": "Die Zufallsvariable X nimmt die Werte 0, 1, 2 mit den Wahrscheinlichkeiten 0,5; 0,3; 0,2 an. Wie groß ist der Erwartungswert E(X)?",
        "options": [
          "1",
          "3",
          "1,3",
          "0,7"
        ],
        "explanation": "E(X) = Σ x · P(x) = 0 · 0,5 + 1 · 0,3 + 2 · 0,2 = 0 + 0,3 + 0,4 = 0,7.",
        "hint": "Multiplizieren Sie jeden Wert mit seiner Wahrscheinlichkeit und addieren Sie.",
        "whyWrong": [
          "Es wurde der einfache Durchschnitt genommen, die Wahrscheinlichkeiten sind aber nicht gleich.",
          "Es wurden nur die Werte addiert, ohne sie mit den Wahrscheinlichkeiten zu multiplizieren.",
          "Die Wahrscheinlichkeiten wurden in umgekehrter Reihenfolge zugeordnet (0 · 0,2 + 1 · 0,3 + 2 · 0,5).",
          null
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Një mostër ka vlerat 3, 5, 7. Llogaritni variancën e mostrës s² (me pjesëtim me n − 1).",
        "options": [
          "8/3",
          "4",
          "2",
          "8"
        ],
        "explanation": "x̄ = 15 / 3 = 5. Katrorët e devijimeve: (3 − 5)² + (5 − 5)² + (7 − 5)² = 4 + 0 + 4 = 8. s² = 8 / (3 − 1) = 4.",
        "hint": "Gjeni x̄, mblidhni katrorët e devijimeve dhe kujdes me emëruesin.",
        "whyWrong": [
          "Është pjesëtuar me n = 3 (varianca e popullatës) në vend të n − 1 = 2.",
          null,
          "Ky është devijimi standard s = √4, jo varianca.",
          "Shuma e katrorëve të devijimeve nuk është pjesëtuar me n − 1."
        ]
      },
      "en": {
        "question": "A sample has the values 3, 5, 7. Calculate the sample variance s² (dividing by n − 1).",
        "options": [
          "8/3",
          "4",
          "2",
          "8"
        ],
        "explanation": "x̄ = 15 / 3 = 5. Squared deviations: (3 − 5)² + (5 − 5)² + (7 − 5)² = 4 + 0 + 4 = 8. s² = 8 / (3 − 1) = 4.",
        "hint": "Find x̄, add the squared deviations, and watch the denominator.",
        "whyWrong": [
          "Divided by n = 3 (population variance) instead of n − 1 = 2.",
          null,
          "That is the standard deviation s = √4, not the variance.",
          "The sum of squared deviations was not divided by n − 1."
        ]
      },
      "de": {
        "question": "Eine Stichprobe hat die Werte 3, 5, 7. Berechnen Sie die Stichprobenvarianz s² (Division durch n − 1).",
        "options": [
          "8/3",
          "4",
          "2",
          "8"
        ],
        "explanation": "x̄ = 15 / 3 = 5. Quadrierte Abweichungen: (3 − 5)² + (5 − 5)² + (7 − 5)² = 4 + 0 + 4 = 8. s² = 8 / (3 − 1) = 4.",
        "hint": "Bestimmen Sie x̄, addieren Sie die quadrierten Abweichungen und achten Sie auf den Nenner.",
        "whyWrong": [
          "Es wurde durch n = 3 (Varianz der Grundgesamtheit) statt durch n − 1 = 2 geteilt.",
          null,
          "Das ist die Standardabweichung s = √4, nicht die Varianz.",
          "Die Summe der quadrierten Abweichungen wurde nicht durch n − 1 geteilt."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Një monedhë hidhet 3 herë. Sa është probabiliteti që të bjerë kokë të paktën një herë?",
        "options": [
          "7/8",
          "1/8",
          "3/8",
          "1/2"
        ],
        "explanation": "Ngjarja e kundërt është «asnjë kokë» (PPP): P = (1/2)³ = 1/8. Prandaj P(të paktën një kokë) = 1 − 1/8 = 7/8.",
        "hint": "Është më e lehtë të llogaritni ngjarjen e kundërt dhe ta zbritni nga 1.",
        "whyWrong": [
          null,
          "Kjo është probabiliteti i ngjarjes së kundërt (asnjë kokë).",
          "Kjo është probabiliteti për saktësisht një kokë; «të paktën një» përfshin edhe 2 e 3 koka.",
          "Është marrë parasysh vetëm një hedhje, jo tri."
        ]
      },
      "en": {
        "question": "A coin is tossed 3 times. What is the probability of getting at least one head?",
        "options": [
          "7/8",
          "1/8",
          "3/8",
          "1/2"
        ],
        "explanation": "The complement is “no heads” (TTT): P = (1/2)³ = 1/8. So P(at least one head) = 1 − 1/8 = 7/8.",
        "hint": "It is easier to compute the complement and subtract it from 1.",
        "whyWrong": [
          null,
          "That is the probability of the complement (no heads).",
          "That is the probability of exactly one head; “at least one” also includes 2 and 3 heads.",
          "Only one toss was considered, not three."
        ]
      },
      "de": {
        "question": "Eine Münze wird dreimal geworfen. Wie groß ist die Wahrscheinlichkeit, mindestens einmal Kopf zu erhalten?",
        "options": [
          "7/8",
          "1/8",
          "3/8",
          "1/2"
        ],
        "explanation": "Das Gegenereignis ist „kein Kopf“ (ZZZ): P = (1/2)³ = 1/8. Also P(mindestens einmal Kopf) = 1 − 1/8 = 7/8.",
        "hint": "Es ist einfacher, das Gegenereignis zu berechnen und von 1 abzuziehen.",
        "whyWrong": [
          null,
          "Das ist die Wahrscheinlichkeit des Gegenereignisses (kein Kopf).",
          "Das ist die Wahrscheinlichkeit für genau einmal Kopf; „mindestens einmal“ umfasst auch 2- und 3-mal.",
          "Es wurde nur ein Wurf berücksichtigt, nicht drei."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Një grup të dhënash ka mesataren 12 dhe devijimin standard 3. Çdo vlere i shtohet 5. Cilat janë mesatarja dhe devijimi standard i ri?",
        "options": [
          "x̄ = 17, σ = 8",
          "x̄ = 12, σ = 3",
          "x̄ = 60, σ = 15",
          "x̄ = 17, σ = 3"
        ],
        "explanation": "Mesatarja zhvendoset bashkë me të dhënat: 12 + 5 = 17. Largësitë nga mesatarja nuk ndryshojnë, prandaj devijimi standard mbetet 3.",
        "hint": "Mendoni: a ndryshon shpërndarja rreth mesatares kur të gjitha vlerat zhvendosen njëlloj?",
        "whyWrong": [
          "Shtimi i një konstanteje nuk e ndryshon shpërndarjen; σ nuk rritet me 5.",
          "Mesatarja ndryshon: kur çdo vlerë rritet me 5, edhe mesatarja rritet me 5.",
          "Është shumëzuar me 5 në vend që të shtohet 5.",
          null
        ]
      },
      "en": {
        "question": "A data set has mean 12 and standard deviation 3. 5 is added to every value. What are the new mean and standard deviation?",
        "options": [
          "x̄ = 17, σ = 8",
          "x̄ = 12, σ = 3",
          "x̄ = 60, σ = 15",
          "x̄ = 17, σ = 3"
        ],
        "explanation": "The mean shifts with the data: 12 + 5 = 17. The distances from the mean do not change, so the standard deviation stays 3.",
        "hint": "Think: does the spread around the mean change if all values move by the same amount?",
        "whyWrong": [
          "Adding a constant does not change the spread; σ does not grow by 5.",
          "The mean does change: if every value grows by 5, so does the mean.",
          "The values were multiplied by 5 instead of adding 5.",
          null
        ]
      },
      "de": {
        "question": "Ein Datensatz hat den Mittelwert 12 und die Standardabweichung 3. Zu jedem Wert wird 5 addiert. Wie lauten der neue Mittelwert und die neue Standardabweichung?",
        "options": [
          "x̄ = 17, σ = 8",
          "x̄ = 12, σ = 3",
          "x̄ = 60, σ = 15",
          "x̄ = 17, σ = 3"
        ],
        "explanation": "Der Mittelwert verschiebt sich mit den Daten: 12 + 5 = 17. Die Abstände zum Mittelwert ändern sich nicht, also bleibt die Standardabweichung 3.",
        "hint": "Überlegen Sie: Ändert sich die Streuung um den Mittelwert, wenn alle Werte gleich verschoben werden?",
        "whyWrong": [
          "Das Addieren einer Konstanten ändert die Streuung nicht; σ wächst nicht um 5.",
          "Der Mittelwert ändert sich: Wächst jeder Wert um 5, wächst auch der Mittelwert um 5.",
          "Es wurde mit 5 multipliziert statt 5 zu addieren.",
          null
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 5040
      },
      "al": {
        "question": "Sa kode PIN me 4 shifra mund të formohen nga shifrat 0–9, nëse të gjitha shifrat duhet të jenë të ndryshme? (Kodi mund të fillojë me 0.)",
        "explanation": "Renditja ka rëndësi dhe shifrat nuk përsëriten: 10 · 9 · 8 · 7 = 5040.",
        "hint": "Numëroni sa zgjedhje ka për pozicionin e parë, të dytë, të tretë dhe të katërt.",
        "commonMistakes": [
          {
            "value": 10000,
            "why": "Kjo është 10⁴, numri i kodeve kur shifrat lejohen të përsëriten."
          },
          {
            "value": 210,
            "why": "Kjo është kombinacioni C(10, 4) = 210, ku renditja nuk merret parasysh; te kodi PIN renditja ka rëndësi."
          }
        ]
      },
      "en": {
        "question": "How many 4-digit PIN codes can be formed from the digits 0–9 if all digits must be different? (A code may start with 0.)",
        "explanation": "Order matters and digits do not repeat: 10 · 9 · 8 · 7 = 5040.",
        "hint": "Count the choices for the first, second, third and fourth position.",
        "commonMistakes": [
          {
            "value": 10000,
            "why": "That is 10⁴, the number of codes when digits may repeat."
          },
          {
            "value": 210,
            "why": "That is the combination C(10, 4) = 210, which ignores order; for a PIN the order matters."
          }
        ]
      },
      "de": {
        "question": "Wie viele 4-stellige PIN-Codes lassen sich aus den Ziffern 0–9 bilden, wenn alle Ziffern verschieden sein müssen? (Ein Code darf mit 0 beginnen.)",
        "explanation": "Die Reihenfolge zählt und Ziffern wiederholen sich nicht: 10 · 9 · 8 · 7 = 5040.",
        "hint": "Zählen Sie die Möglichkeiten für die erste, zweite, dritte und vierte Stelle.",
        "commonMistakes": [
          {
            "value": 10000,
            "why": "Das ist 10⁴, die Anzahl der Codes, wenn Ziffern wiederholt werden dürfen."
          },
          {
            "value": 210,
            "why": "Das ist die Kombination C(10, 4) = 210, die die Reihenfolge nicht beachtet; bei einer PIN zählt die Reihenfolge."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 7
      },
      "al": {
        "question": "Mesatarja e 5 numrave është 8. Njëri prej tyre, 12, hiqet. Sa është mesatarja e 4 numrave të mbetur?",
        "explanation": "Shuma e 5 numrave: 5 · 8 = 40. Pas heqjes së 12: 40 − 12 = 28. Mesatarja e re: 28 : 4 = 7.",
        "hint": "Gjeni fillimisht shumën e të gjithë numrave nga mesatarja.",
        "commonMistakes": [
          {
            "value": 5.6,
            "why": "Keni pjesëtuar me 5 në vend të 4: 28 : 5 = 5,6; pas heqjes mbeten vetëm 4 numra."
          }
        ]
      },
      "en": {
        "question": "The mean of 5 numbers is 8. One of them, 12, is removed. What is the mean of the remaining 4 numbers?",
        "explanation": "Sum of the 5 numbers: 5 · 8 = 40. After removing 12: 40 − 12 = 28. New mean: 28 ÷ 4 = 7.",
        "hint": "First find the total of all the numbers from the mean.",
        "commonMistakes": [
          {
            "value": 5.6,
            "why": "You divided by 5 instead of 4: 28 ÷ 5 = 5.6; after the removal only 4 numbers remain."
          }
        ]
      },
      "de": {
        "question": "Der Mittelwert von 5 Zahlen ist 8. Eine davon, die 12, wird entfernt. Wie groß ist der Mittelwert der übrigen 4 Zahlen?",
        "explanation": "Summe der 5 Zahlen: 5 · 8 = 40. Nach dem Entfernen der 12: 40 − 12 = 28. Neuer Mittelwert: 28 : 4 = 7.",
        "hint": "Bestimmen Sie zuerst aus dem Mittelwert die Summe aller Zahlen.",
        "commonMistakes": [
          {
            "value": 5.6,
            "why": "Sie haben durch 5 statt durch 4 geteilt: 28 : 5 = 5,6; nach dem Entfernen bleiben nur 4 Zahlen."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": true,
      "al": {
        "question": "Nëse çdo vlerë e një grupi të dhënash shumëzohet me 2, edhe devijimi standard shumëzohet me 2.",
        "explanation": "Kur çdo vlerë shumëzohet me 2, mesatarja shumëzohet me 2 dhe çdo largesë nga mesatarja dyfishohet. Varianca shumëzohet me 2² = 4, prandaj devijimi standard me √4 = 2. Pohimi është i vërtetë.",
        "hint": "Mendoni çfarë ndodh me largesat e vlerave nga mesatarja.",
        "whyWrong": "Pohimi nuk është i gabuar: ndryshe nga shtimi i një konstanteje (që nuk e ndryshon shpërndarjen), shumëzimi i zgjeron të gjitha largesat nga mesatarja me faktorin 2."
      },
      "en": {
        "question": "If every value of a data set is multiplied by 2, the standard deviation is also multiplied by 2.",
        "explanation": "Multiplying every value by 2 doubles the mean and doubles every deviation from the mean. The variance is multiplied by 2² = 4, so the standard deviation by √4 = 2. The statement is true.",
        "hint": "Think about what happens to the distances of the values from the mean.",
        "whyWrong": "The statement is not false: unlike adding a constant (which leaves the spread unchanged), multiplying stretches every deviation from the mean by the factor 2."
      },
      "de": {
        "question": "Wird jeder Wert einer Datenreihe mit 2 multipliziert, so wird auch die Standardabweichung mit 2 multipliziert.",
        "explanation": "Multipliziert man jeden Wert mit 2, verdoppeln sich der Mittelwert und jede Abweichung vom Mittelwert. Die Varianz wird mit 2² = 4 multipliziert, die Standardabweichung also mit √4 = 2. Die Aussage ist wahr.",
        "hint": "Überlegen Sie, was mit den Abständen der Werte vom Mittelwert passiert.",
        "whyWrong": "Die Aussage ist nicht falsch: Anders als das Addieren einer Konstanten (das die Streuung nicht ändert) streckt das Multiplizieren jede Abweichung vom Mittelwert um den Faktor 2."
      }
    }
  ]
};
