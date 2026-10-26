// Quiz set "arith-hard" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "arith-hard",
  "difficulty": "advanced",
  "icon": "#",
  "color": "#E74C3C",
  "i18n": {
    "al": {
      "title": "Aritmetikë e Avancuar",
      "category": "Aritmetikë",
      "duration": "10 min"
    },
    "en": {
      "title": "Advanced Arithmetic",
      "category": "Arithmetic",
      "duration": "10 min"
    },
    "de": {
      "title": "Fortgeschrittene Arithmetik",
      "category": "Arithmetik",
      "duration": "10 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni: −3² + (−2)³ × 2 − 4 ÷ (−2)",
        "options": [
          "−5",
          "9",
          "−27",
          "−23"
        ],
        "explanation": "−3² = −9 (fuqia vlen vetëm për 3) dhe (−2)³ = −8. Pastaj −8 × 2 = −16 dhe 4 ÷ (−2) = −2, kështu që − (−2) = +2. −9 − 16 + 2 = −23. Rezultati: −23.",
        "hint": "Kujdes te −3² dhe (−2)³: ku zbatohet eksponenti dhe cila është shenja?",
        "whyWrong": [
          "Keni marrë −3² = 9 në vend të −9.",
          "Keni marrë (−2)³ = 8; tek-fuqia e numrit negativ mbetet negative.",
          "Keni gabuar shenjën: 4 ÷ (−2) = −2, pra zbritja e tij jep +2.",
          null
        ]
      },
      "en": {
        "question": "Calculate: −3² + (−2)³ × 2 − 4 ÷ (−2)",
        "options": [
          "−5",
          "9",
          "−27",
          "−23"
        ],
        "explanation": "−3² = −9 (the exponent applies only to 3) and (−2)³ = −8. Then −8 × 2 = −16 and 4 ÷ (−2) = −2, so subtracting it gives +2. −9 − 16 + 2 = −23. Result: −23.",
        "hint": "Careful with −3² and (−2)³: what does the exponent apply to, and what is the sign?",
        "whyWrong": [
          "You took −3² as 9 instead of −9.",
          "You took (−2)³ as 8; an odd power of a negative number stays negative.",
          "Sign error: 4 ÷ (−2) = −2, so subtracting it gives +2.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie: −3² + (−2)³ × 2 − 4 ÷ (−2)",
        "options": [
          "−5",
          "9",
          "−27",
          "−23"
        ],
        "explanation": "−3² = −9 (der Exponent gilt nur für 3) und (−2)³ = −8. Dann −8 × 2 = −16 und 4 ÷ (−2) = −2; dessen Subtraktion ergibt +2. −9 − 16 + 2 = −23. Ergebnis: −23.",
        "hint": "Vorsicht bei −3² und (−2)³: Worauf bezieht sich der Exponent, und welches Vorzeichen entsteht?",
        "whyWrong": [
          "Sie haben −3² als 9 statt −9 gerechnet.",
          "Sie haben (−2)³ als 8 gerechnet; eine ungerade Potenz einer negativen Zahl bleibt negativ.",
          "Vorzeichenfehler: 4 ÷ (−2) = −2, und dessen Subtraktion ergibt +2.",
          null
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Një çmim rritet me 20% dhe pastaj ulet me 20%. Si ka ndryshuar çmimi përfundimtar krahasuar me atë fillestar?",
        "options": [
          "0%",
          "−4%",
          "+4%",
          "−20%"
        ],
        "explanation": "Rritja shumëzon me 1,2, ulja me 0,8. 1,2 × 0,8 = 0,96, pra çmimi është 96% e atij fillestar. Rezultati: −4%.",
        "hint": "Shkruani secilin ndryshim si faktor shumëzimi dhe shumëzojini.",
        "whyWrong": [
          "Përqindjet nuk anulohen: ulja e dytë llogaritet mbi çmimin më të lartë.",
          null,
          "Keni gabuar shenjën: 0,96 < 1, pra çmimi ka rënë.",
          "Nuk vlen vetëm ndryshimi i fundit; të dy ndryshimet ndikojnë."
        ]
      },
      "en": {
        "question": "A price rises by 20% and then falls by 20%. How has the final price changed compared with the original?",
        "options": [
          "0%",
          "−4%",
          "+4%",
          "−20%"
        ],
        "explanation": "The rise multiplies by 1.2, the fall by 0.8. 1.2 × 0.8 = 0.96, so the price is 96% of the original. Result: −4%.",
        "hint": "Write each change as a multiplying factor and multiply them.",
        "whyWrong": [
          "Percentages do not cancel: the second 20% is taken of the higher price.",
          null,
          "Wrong sign: 0.96 < 1, so the price went down.",
          "It is not only the last change that counts; both changes matter."
        ]
      },
      "de": {
        "question": "Ein Preis steigt um 20 % und sinkt danach um 20 %. Wie hat sich der Endpreis gegenüber dem Anfangspreis verändert?",
        "options": [
          "0 %",
          "−4 %",
          "+4 %",
          "−20 %"
        ],
        "explanation": "Die Erhöhung multipliziert mit 1,2, die Senkung mit 0,8. 1,2 × 0,8 = 0,96, der Preis beträgt also 96 % des Anfangspreises. Ergebnis: −4 %.",
        "hint": "Schreiben Sie jede Änderung als Faktor und multiplizieren Sie die Faktoren.",
        "whyWrong": [
          "Prozente heben sich nicht auf: Die 20 % Senkung beziehen sich auf den höheren Preis.",
          null,
          "Falsches Vorzeichen: 0,96 < 1, der Preis ist also gesunken.",
          "Nicht nur die letzte Änderung zählt; beide Änderungen wirken."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Shkruani 0,363636… (shifrat 36 përsëriten pafundësisht) si thyesë të thjeshtuar.",
        "options": [
          "4/11",
          "9/25",
          "2/5",
          "4/111"
        ],
        "explanation": "Le të jetë x = 0,3636… Atëherë 100x = 36,3636…, dhe 100x − x = 36, pra 99x = 36. x = 36/99 = 4/11. Rezultati: 4/11.",
        "hint": "Shumëzoni me një fuqi të 10-s që zhvendos një periudhë të plotë dhe zbritni.",
        "whyWrong": [
          null,
          "9/25 = 0,36 është numër dhjetor i fundëm, jo periodik.",
          "Keni përdorur 90 si emërues (36/90 = 0,4).",
          "Keni përdorur 999, por periudha ka vetëm dy shifra."
        ]
      },
      "en": {
        "question": "Write 0.363636… (the digits 36 repeat forever) as a simplified fraction.",
        "options": [
          "4/11",
          "9/25",
          "2/5",
          "4/111"
        ],
        "explanation": "Let x = 0.3636… Then 100x = 36.3636…, so 100x − x = 36 and 99x = 36. x = 36/99 = 4/11. Result: 4/11.",
        "hint": "Multiply by a power of 10 that shifts one full period, then subtract.",
        "whyWrong": [
          null,
          "9/25 = 0.36 is a terminating decimal, not a repeating one.",
          "You used 90 as the denominator (36/90 = 0.4).",
          "You used 999, but the period has only two digits."
        ]
      },
      "de": {
        "question": "Schreiben Sie 0,363636… (die Ziffern 36 wiederholen sich unendlich) als gekürzten Bruch.",
        "options": [
          "4/11",
          "9/25",
          "2/5",
          "4/111"
        ],
        "explanation": "Sei x = 0,3636… Dann ist 100x = 36,3636…, also 100x − x = 36 und 99x = 36. x = 36/99 = 4/11. Ergebnis: 4/11.",
        "hint": "Multiplizieren Sie mit einer Zehnerpotenz, die genau eine Periode verschiebt, und subtrahieren Sie.",
        "whyWrong": [
          null,
          "9/25 = 0,36 ist ein abbrechender, kein periodischer Dezimalbruch.",
          "Sie haben 90 als Nenner verwendet (36/90 = 0,4).",
          "Sie haben 999 verwendet, aber die Periode hat nur zwei Ziffern."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Llogaritni (3 × 10⁴) × (4 × 10⁻⁶) dhe shkruajeni në formë standarde (shkencore).",
        "options": [
          "1,2 × 10⁻²⁴",
          "7 × 10⁻²",
          "1,2 × 10⁻¹",
          "1,2 × 10⁻³"
        ],
        "explanation": "Koeficientët: 3 × 4 = 12. Fuqitë: 10⁴ × 10⁻⁶ = 10⁻² (eksponentët mblidhen). 12 × 10⁻² = 1,2 × 10¹ × 10⁻² = 1,2 × 10⁻¹. Rezultati: 1,2 × 10⁻¹.",
        "hint": "Shumëzoni koeficientët veç dhe fuqitë e 10-s veç; në fund kontrolloni që koeficienti të jetë ndërmjet 1 dhe 10.",
        "whyWrong": [
          "Keni shumëzuar eksponentët (4 × (−6)) në vend që t’i mblidhni.",
          "Keni mbledhur koeficientët (3 + 4) në vend që t’i shumëzoni.",
          null,
          "Kur 12 bëhet 1,2, eksponenti rritet me 1, nuk zvogëlohet."
        ]
      },
      "en": {
        "question": "Calculate (3 × 10⁴) × (4 × 10⁻⁶) and write it in scientific notation.",
        "options": [
          "1.2 × 10⁻²⁴",
          "7 × 10⁻²",
          "1.2 × 10⁻¹",
          "1.2 × 10⁻³"
        ],
        "explanation": "Coefficients: 3 × 4 = 12. Powers: 10⁴ × 10⁻⁶ = 10⁻² (add the exponents). 12 × 10⁻² = 1.2 × 10¹ × 10⁻² = 1.2 × 10⁻¹. Result: 1.2 × 10⁻¹.",
        "hint": "Multiply the coefficients and the powers of 10 separately; finally make the coefficient lie between 1 and 10.",
        "whyWrong": [
          "You multiplied the exponents (4 × (−6)) instead of adding them.",
          "You added the coefficients (3 + 4) instead of multiplying them.",
          null,
          "When 12 becomes 1.2 the exponent goes up by 1, not down."
        ]
      },
      "de": {
        "question": "Berechnen Sie (3 × 10⁴) × (4 × 10⁻⁶) und geben Sie das Ergebnis in wissenschaftlicher Schreibweise an.",
        "options": [
          "1,2 × 10⁻²⁴",
          "7 × 10⁻²",
          "1,2 × 10⁻¹",
          "1,2 × 10⁻³"
        ],
        "explanation": "Vorfaktoren: 3 × 4 = 12. Zehnerpotenzen: 10⁴ × 10⁻⁶ = 10⁻² (Exponenten addieren). 12 × 10⁻² = 1,2 × 10¹ × 10⁻² = 1,2 × 10⁻¹. Ergebnis: 1,2 × 10⁻¹.",
        "hint": "Multiplizieren Sie Vorfaktoren und Zehnerpotenzen getrennt; der Vorfaktor muss am Ende zwischen 1 und 10 liegen.",
        "whyWrong": [
          "Sie haben die Exponenten multipliziert (4 × (−6)) statt addiert.",
          "Sie haben die Vorfaktoren addiert (3 + 4) statt multipliziert.",
          null,
          "Wird aus 12 die Zahl 1,2, steigt der Exponent um 1, statt zu sinken."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Thjeshtoni: √50 + √18",
        "options": [
          "√68",
          "15√2",
          "8√4",
          "8√2"
        ],
        "explanation": "√50 = √(25 × 2) = 5√2 dhe √18 = √(9 × 2) = 3√2. Rrënjët e njëjta mblidhen si terma të ngjashëm: 5√2 + 3√2 = 8√2. Rezultati: 8√2.",
        "hint": "Nxirrni nga secila rrënjë faktorin katror më të madh.",
        "whyWrong": [
          "√a + √b ≠ √(a + b); rrënjët nuk mblidhen duke mbledhur numrat nën to.",
          "Keni shumëzuar koeficientët (5 × 3) në vend që t’i mblidhni.",
          "Keni mbledhur edhe numrat nën rrënjë; √2 mbetet √2.",
          null
        ]
      },
      "en": {
        "question": "Simplify: √50 + √18",
        "options": [
          "√68",
          "15√2",
          "8√4",
          "8√2"
        ],
        "explanation": "√50 = √(25 × 2) = 5√2 and √18 = √(9 × 2) = 3√2. Like roots add like terms: 5√2 + 3√2 = 8√2. Result: 8√2.",
        "hint": "Pull the largest square factor out of each root.",
        "whyWrong": [
          "√a + √b ≠ √(a + b); you cannot add roots by adding what is under them.",
          "You multiplied the coefficients (5 × 3) instead of adding them.",
          "You also added the numbers under the roots; √2 stays √2.",
          null
        ]
      },
      "de": {
        "question": "Vereinfachen Sie: √50 + √18",
        "options": [
          "√68",
          "15√2",
          "8√4",
          "8√2"
        ],
        "explanation": "√50 = √(25 × 2) = 5√2 und √18 = √(9 × 2) = 3√2. Gleiche Wurzeln addiert man wie gleichartige Terme: 5√2 + 3√2 = 8√2. Ergebnis: 8√2.",
        "hint": "Ziehen Sie aus jeder Wurzel den größten Quadratfaktor heraus.",
        "whyWrong": [
          "√a + √b ≠ √(a + b); Wurzeln addiert man nicht, indem man die Radikanden addiert.",
          "Sie haben die Vorfaktoren multipliziert (5 × 3) statt addiert.",
          "Sie haben auch die Radikanden addiert; √2 bleibt √2.",
          null
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është (2/3)⁻³?",
        "options": [
          "27/8",
          "−8/27",
          "8/27",
          "−2"
        ],
        "explanation": "Eksponenti negativ do të thotë të anasjelltën: (2/3)⁻³ = (3/2)³. (3/2)³ = 27/8. Rezultati: 27/8.",
        "hint": "Çfarë i bën eksponenti negativ thyesës?",
        "whyWrong": [
          null,
          "Eksponenti negativ nuk e bën rezultatin negativ; ai e kthen thyesën.",
          "Keni llogaritur (2/3)³ dhe keni injoruar shenjën minus të eksponentit.",
          "Keni shumëzuar bazën me eksponentin (2/3 × (−3))."
        ]
      },
      "en": {
        "question": "What is (2/3)⁻³?",
        "options": [
          "27/8",
          "−8/27",
          "8/27",
          "−2"
        ],
        "explanation": "A negative exponent means take the reciprocal: (2/3)⁻³ = (3/2)³. (3/2)³ = 27/8. Result: 27/8.",
        "hint": "What does a negative exponent do to a fraction?",
        "whyWrong": [
          null,
          "A negative exponent does not make the result negative; it flips the fraction.",
          "You computed (2/3)³ and ignored the minus sign in the exponent.",
          "You multiplied the base by the exponent (2/3 × (−3))."
        ]
      },
      "de": {
        "question": "Was ist (2/3)⁻³?",
        "options": [
          "27/8",
          "−8/27",
          "8/27",
          "−2"
        ],
        "explanation": "Ein negativer Exponent bedeutet Kehrwert: (2/3)⁻³ = (3/2)³. (3/2)³ = 27/8. Ergebnis: 27/8.",
        "hint": "Was bewirkt ein negativer Exponent bei einem Bruch?",
        "whyWrong": [
          null,
          "Ein negativer Exponent macht das Ergebnis nicht negativ; er bildet den Kehrwert.",
          "Sie haben (2/3)³ berechnet und das Minus im Exponenten ignoriert.",
          "Sie haben die Basis mit dem Exponenten multipliziert (2/3 × (−3))."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Llogaritni: 1 + 1 ÷ (1 + 1/2)",
        "options": [
          "5/2",
          "5/3",
          "4/3",
          "3/5"
        ],
        "explanation": "Kllapa: 1 + 1/2 = 3/2. Pjesëtimi: 1 ÷ 3/2 = 2/3. Mbledhja: 1 + 2/3 = 5/3. Rezultati: 5/3.",
        "hint": "Kllapa së pari, pastaj pjesëtimi, dhe në fund mbledhja.",
        "whyWrong": [
          "Keni llogaritur 1 ÷ 3/2 si 3/2; pjesëtimi me thyesë kërkon të anasjelltën.",
          null,
          "Keni mbledhur 1 + 1 para pjesëtimit: 2 ÷ 3/2.",
          "Keni kthyer rezultatin përfundimtar (3/5 në vend të 5/3)."
        ]
      },
      "en": {
        "question": "Calculate: 1 + 1 ÷ (1 + 1/2)",
        "options": [
          "5/2",
          "5/3",
          "4/3",
          "3/5"
        ],
        "explanation": "Brackets: 1 + 1/2 = 3/2. Division: 1 ÷ 3/2 = 2/3. Addition: 1 + 2/3 = 5/3. Result: 5/3.",
        "hint": "Brackets first, then the division, and the addition last.",
        "whyWrong": [
          "You took 1 ÷ 3/2 as 3/2; dividing by a fraction needs its reciprocal.",
          null,
          "You added 1 + 1 before dividing: 2 ÷ 3/2.",
          "You flipped the final answer (3/5 instead of 5/3)."
        ]
      },
      "de": {
        "question": "Berechnen Sie: 1 + 1 ÷ (1 + 1/2)",
        "options": [
          "5/2",
          "5/3",
          "4/3",
          "3/5"
        ],
        "explanation": "Klammer: 1 + 1/2 = 3/2. Division: 1 ÷ 3/2 = 2/3. Addition: 1 + 2/3 = 5/3. Ergebnis: 5/3.",
        "hint": "Zuerst die Klammer, dann die Division, zuletzt die Addition.",
        "whyWrong": [
          "Sie haben 1 ÷ 3/2 als 3/2 gerechnet; beim Teilen durch einen Bruch braucht man den Kehrwert.",
          null,
          "Sie haben 1 + 1 vor der Division addiert: 2 ÷ 3/2.",
          "Sie haben das Endergebnis umgedreht (3/5 statt 5/3)."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Depozitoni 1000 € me interes të përbërë 10% në vit. Sa para keni pas 2 vjetësh?",
        "options": [
          "1200 €",
          "1100 €",
          "1210 €",
          "2200 €"
        ],
        "explanation": "Çdo vit shuma shumëzohet me 1,1. Pas vitit 1: 1000 × 1,1 = 1100 €. Pas vitit 2: 1100 × 1,1 = 1210 €. Rezultati: 1210 €.",
        "hint": "Në vitin e dytë interesi llogaritet mbi shumën e re.",
        "whyWrong": [
          "Kjo është interes i thjeshtë; në vitin e dytë interesi llogaritet edhe mbi 100 € e fituara.",
          "1100 € është shuma pas vetëm një viti.",
          null,
          "Keni shumëzuar me 1,1 × 2 në vend që të ngrini 1,1 në katror."
        ]
      },
      "en": {
        "question": "You deposit €1000 at 10% compound interest per year. How much do you have after 2 years?",
        "options": [
          "€1200",
          "€1100",
          "€1210",
          "€2200"
        ],
        "explanation": "Each year the amount is multiplied by 1.1. After year 1: 1000 × 1.1 = €1100. After year 2: 1100 × 1.1 = €1210. Result: €1210.",
        "hint": "In the second year, the interest is calculated on the new amount.",
        "whyWrong": [
          "That is simple interest; in year 2 the interest is also earned on the €100 already gained.",
          "€1100 is the amount after only one year.",
          null,
          "You multiplied by 1.1 × 2 instead of squaring 1.1."
        ]
      },
      "de": {
        "question": "Sie legen 1000 € zu 10 % Zinseszins pro Jahr an. Wie viel Geld haben Sie nach 2 Jahren?",
        "options": [
          "1200 €",
          "1100 €",
          "1210 €",
          "2200 €"
        ],
        "explanation": "Jedes Jahr wird der Betrag mit 1,1 multipliziert. Nach Jahr 1: 1000 × 1,1 = 1100 €. Nach Jahr 2: 1100 × 1,1 = 1210 €. Ergebnis: 1210 €.",
        "hint": "Im zweiten Jahr werden die Zinsen auf den neuen Betrag berechnet.",
        "whyWrong": [
          "Das sind einfache Zinsen; im 2. Jahr werden auch die bereits erhaltenen 100 € verzinst.",
          "1100 € ist der Betrag nach nur einem Jahr.",
          null,
          "Sie haben mit 1,1 × 2 multipliziert, statt 1,1 zu quadrieren."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Sa është 10! ÷ (8! × 2!)?",
        "options": [
          "1",
          "90",
          "360",
          "45"
        ],
        "explanation": "10! = 10 × 9 × 8!, prandaj 10!/8! = 10 × 9 = 90. Pastaj pjesëtojmë me 2! = 2: 90 ÷ 2 = 45. Rezultati: 45.",
        "hint": "Shkruajeni 10! si 10 × 9 × 8! dhe thjeshtoni.",
        "whyWrong": [
          "8! × 2! nuk është 10!; faktorielët nuk sillen si mbledhje (8 + 2 = 10).",
          "Keni harruar të pjesëtoni me 2! = 2.",
          "Keni thjeshtuar vetëm 7! (10 × 9 × 8 = 720) dhe pastaj keni pjesëtuar me 2.",
          null
        ]
      },
      "en": {
        "question": "What is 10! ÷ (8! × 2!)?",
        "options": [
          "1",
          "90",
          "360",
          "45"
        ],
        "explanation": "10! = 10 × 9 × 8!, so 10!/8! = 10 × 9 = 90. Then divide by 2! = 2: 90 ÷ 2 = 45. Result: 45.",
        "hint": "Write 10! as 10 × 9 × 8! and cancel.",
        "whyWrong": [
          "8! × 2! is not 10!; factorials do not behave like a sum (8 + 2 = 10).",
          "You forgot to divide by 2! = 2.",
          "You only cancelled 7! (10 × 9 × 8 = 720) and then divided by 2.",
          null
        ]
      },
      "de": {
        "question": "Was ist 10! ÷ (8! × 2!)?",
        "options": [
          "1",
          "90",
          "360",
          "45"
        ],
        "explanation": "10! = 10 × 9 × 8!, also 10!/8! = 10 × 9 = 90. Dann durch 2! = 2 teilen: 90 ÷ 2 = 45. Ergebnis: 45.",
        "hint": "Schreiben Sie 10! als 10 × 9 × 8! und kürzen Sie.",
        "whyWrong": [
          "8! × 2! ist nicht 10!; Fakultäten verhalten sich nicht wie eine Summe (8 + 2 = 10).",
          "Sie haben vergessen, durch 2! = 2 zu teilen.",
          "Sie haben nur 7! gekürzt (10 × 9 × 8 = 720) und dann durch 2 geteilt.",
          null
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Ndani 360 në raportin 2 : 3 : 4. Sa është pjesa më e madhe?",
        "options": [
          "160",
          "120",
          "90",
          "80"
        ],
        "explanation": "Gjithsej pjesë: 2 + 3 + 4 = 9. Një pjesë: 360 ÷ 9 = 40. Pjesa më e madhe: 4 × 40 = 160. Rezultati: 160.",
        "hint": "Mblidhni numrat e raportit për të gjetur vlerën e një pjese.",
        "whyWrong": [
          null,
          "120 është pjesa e mesme (3 pjesë) ose 360 ÷ 3 në pjesë të barabarta.",
          "Keni pjesëtuar 360 ÷ 4 në vend që të llogaritni 4 pjesë nga 9.",
          "80 është pjesa më e vogël (2 pjesë)."
        ]
      },
      "en": {
        "question": "Divide 360 in the ratio 2 : 3 : 4. What is the largest part?",
        "options": [
          "160",
          "120",
          "90",
          "80"
        ],
        "explanation": "Total shares: 2 + 3 + 4 = 9. One share: 360 ÷ 9 = 40. Largest part: 4 × 40 = 160. Result: 160.",
        "hint": "Add the ratio numbers to find the value of one share.",
        "whyWrong": [
          null,
          "120 is the middle part (3 shares), or 360 ÷ 3 in equal parts.",
          "You divided 360 ÷ 4 instead of taking 4 of the 9 shares.",
          "80 is the smallest part (2 shares)."
        ]
      },
      "de": {
        "question": "Teilen Sie 360 im Verhältnis 2 : 3 : 4. Wie groß ist der größte Teil?",
        "options": [
          "160",
          "120",
          "90",
          "80"
        ],
        "explanation": "Anteile insgesamt: 2 + 3 + 4 = 9. Ein Anteil: 360 ÷ 9 = 40. Größter Teil: 4 × 40 = 160. Ergebnis: 160.",
        "hint": "Addieren Sie die Verhältniszahlen, um den Wert eines Anteils zu finden.",
        "whyWrong": [
          null,
          "120 ist der mittlere Teil (3 Anteile) oder 360 ÷ 3 bei gleichen Teilen.",
          "Sie haben 360 ÷ 4 gerechnet, statt 4 von 9 Anteilen zu nehmen.",
          "80 ist der kleinste Teil (2 Anteile)."
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 400
      },
      "al": {
        "question": "Pas një rritjeje prej 30%, çmimi i një telefoni është 520 €. Sa ishte çmimi para rritjes (në €)?",
        "explanation": "Çmimi i ri është 130% i çmimit të vjetër: 1,3 · x = 520. Pra x = 520 : 1,3 = 400 €. Kontroll: 400 + 30% · 400 = 400 + 120 = 520 ✓",
        "hint": "Çmimi i ri është 130% i çmimit fillestar; pjesëtoni me faktorin përkatës.",
        "unit": "€",
        "commonMistakes": [
          {
            "value": 364,
            "why": "Keni zbritur 30% të 520 (520 − 156 = 364); përqindja duhet llogaritur nga çmimi fillestar, jo nga i riu."
          }
        ]
      },
      "en": {
        "question": "After a 30% increase, a phone costs €520. What was the price before the increase (in €)?",
        "explanation": "The new price is 130% of the old one: 1.3 · x = 520. So x = 520 ÷ 1.3 = €400. Check: 400 + 30% · 400 = 400 + 120 = 520 ✓",
        "hint": "The new price is 130% of the original; divide by the matching factor.",
        "unit": "€",
        "commonMistakes": [
          {
            "value": 364,
            "why": "You subtracted 30% of 520 (520 − 156 = 364); the percentage refers to the original price, not the new one."
          }
        ]
      },
      "de": {
        "question": "Nach einer Erhöhung um 30 % kostet ein Handy 520 €. Wie hoch war der Preis vor der Erhöhung (in €)?",
        "explanation": "Der neue Preis ist 130 % des alten: 1,3 · x = 520. Also x = 520 : 1,3 = 400 €. Probe: 400 + 30 % · 400 = 400 + 120 = 520 ✓",
        "hint": "Der neue Preis entspricht 130 % des Ausgangspreises; teilen Sie durch den passenden Faktor.",
        "unit": "€",
        "commonMistakes": [
          {
            "value": 364,
            "why": "Sie haben 30 % von 520 abgezogen (520 − 156 = 364); der Prozentsatz bezieht sich auf den Ausgangspreis, nicht auf den neuen."
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
        "question": "Llogaritni: (−2)⁴ − 2⁴ + 3⁰",
        "explanation": "(−2)⁴ = 16, sepse fuqia çift e një numri negativ është pozitive. 2⁴ = 16 dhe 3⁰ = 1. Pra 16 − 16 + 1 = 1.",
        "hint": "Kujdes me shenjën te fuqia çift e numrit negativ dhe kujtoni sa është çdo numër (≠ 0) në fuqi 0.",
        "commonMistakes": [
          {
            "value": -31,
            "why": "Keni marrë (−2)⁴ = −16: −16 − 16 + 1 = −31."
          },
          {
            "value": 0,
            "why": "Keni marrë 3⁰ = 0; por çdo numër jozero në fuqi 0 është 1."
          }
        ]
      },
      "en": {
        "question": "Calculate: (−2)⁴ − 2⁴ + 3⁰",
        "explanation": "(−2)⁴ = 16, because an even power of a negative number is positive. 2⁴ = 16 and 3⁰ = 1. So 16 − 16 + 1 = 1.",
        "hint": "Watch the sign for an even power of a negative number, and recall what any non-zero number to the power 0 equals.",
        "commonMistakes": [
          {
            "value": -31,
            "why": "You took (−2)⁴ = −16: −16 − 16 + 1 = −31."
          },
          {
            "value": 0,
            "why": "You took 3⁰ = 0; but any non-zero number to the power 0 equals 1."
          }
        ]
      },
      "de": {
        "question": "Berechnen Sie: (−2)⁴ − 2⁴ + 3⁰",
        "explanation": "(−2)⁴ = 16, denn eine gerade Potenz einer negativen Zahl ist positiv. 2⁴ = 16 und 3⁰ = 1. Also 16 − 16 + 1 = 1.",
        "hint": "Achten Sie auf das Vorzeichen bei einer geraden Potenz einer negativen Zahl und überlegen Sie, was eine Zahl (≠ 0) hoch 0 ergibt.",
        "commonMistakes": [
          {
            "value": -31,
            "why": "Sie haben (−2)⁴ = −16 gerechnet: −16 − 16 + 1 = −31."
          },
          {
            "value": 0,
            "why": "Sie haben 3⁰ = 0 gesetzt; jede von 0 verschiedene Zahl hoch 0 ergibt aber 1."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": true,
      "al": {
        "question": "Numri 0,999… (ku 9 përsëritet pafundësisht) është saktësisht i barabartë me 1.",
        "explanation": "Le të jetë x = 0,999… Atëherë 10x = 9,999… dhe 10x − x = 9, pra 9x = 9 dhe x = 1. Ose: 1/3 = 0,333…, dhe 3 · 1/3 = 0,999… = 1. Pohimi është i vërtetë.",
        "hint": "Shënojeni numrin me x dhe krahasoni 10x me x.",
        "whyWrong": "Pohimi nuk është i gabuar: nuk ekziston asnjë numër real midis 0,999… dhe 1, diferenca e tyre është 0, prandaj janë i njëjti numër."
      },
      "en": {
        "question": "The number 0.999… (with the 9 repeating forever) is exactly equal to 1.",
        "explanation": "Let x = 0.999… Then 10x = 9.999… and 10x − x = 9, so 9x = 9 and x = 1. Or: 1/3 = 0.333…, and 3 · 1/3 = 0.999… = 1. The statement is true.",
        "hint": "Call the number x and compare 10x with x.",
        "whyWrong": "The statement is not false: there is no real number between 0.999… and 1, their difference is 0, so they are the same number."
      },
      "de": {
        "question": "Die Zahl 0,999… (die 9 wiederholt sich unendlich oft) ist genau gleich 1.",
        "explanation": "Sei x = 0,999… Dann ist 10x = 9,999… und 10x − x = 9, also 9x = 9 und x = 1. Oder: 1/3 = 0,333…, und 3 · 1/3 = 0,999… = 1. Die Aussage ist wahr.",
        "hint": "Nennen Sie die Zahl x und vergleichen Sie 10x mit x.",
        "whyWrong": "Die Aussage ist nicht falsch: Zwischen 0,999… und 1 liegt keine reelle Zahl, ihre Differenz ist 0, also sind sie dieselbe Zahl."
      }
    }
  ]
};
