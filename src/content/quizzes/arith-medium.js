// Quiz set "arith-medium" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "arith-medium",
  "difficulty": "intermediate",
  "icon": "÷",
  "color": "#FF8C42",
  "i18n": {
    "al": {
      "title": "Thyesat & Përqindjet",
      "category": "Aritmetikë",
      "duration": "8 min"
    },
    "en": {
      "title": "Fractions & Percentages",
      "category": "Arithmetic",
      "duration": "8 min"
    },
    "de": {
      "title": "Brüche & Prozente",
      "category": "Arithmetik",
      "duration": "8 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Sa është 3/4 + 2/5?",
        "options": [
          "5/9",
          "6/20",
          "23/20",
          "5/20"
        ],
        "explanation": "Emëruesi i përbashkët është 20. 3/4 = 15/20 dhe 2/5 = 8/20. 15/20 + 8/20 = 23/20. Rezultati: 23/20.",
        "hint": "Sillini të dyja thyesat në emërues të përbashkët para mbledhjes.",
        "whyWrong": [
          "Keni mbledhur numëruesit dhe emëruesit veç e veç.",
          "Keni shumëzuar numëruesit në vend që t’i mblidhni.",
          null,
          "Keni gjetur emëruesin 20, por nuk i keni zgjeruar numëruesit."
        ]
      },
      "en": {
        "question": "What is 3/4 + 2/5?",
        "options": [
          "5/9",
          "6/20",
          "23/20",
          "5/20"
        ],
        "explanation": "The common denominator is 20. 3/4 = 15/20 and 2/5 = 8/20. 15/20 + 8/20 = 23/20. Result: 23/20.",
        "hint": "Bring both fractions to a common denominator before adding.",
        "whyWrong": [
          "You added the numerators and the denominators separately.",
          "You multiplied the numerators instead of adding.",
          null,
          "You found the denominator 20 but did not scale the numerators."
        ]
      },
      "de": {
        "question": "Was ist 3/4 + 2/5?",
        "options": [
          "5/9",
          "6/20",
          "23/20",
          "5/20"
        ],
        "explanation": "Der Hauptnenner ist 20. 3/4 = 15/20 und 2/5 = 8/20. 15/20 + 8/20 = 23/20. Ergebnis: 23/20.",
        "hint": "Bringen Sie beide Brüche vor dem Addieren auf einen gemeinsamen Nenner.",
        "whyWrong": [
          "Sie haben Zähler und Nenner jeweils addiert.",
          "Sie haben die Zähler multipliziert statt addiert.",
          null,
          "Sie haben den Nenner 20 gefunden, aber die Zähler nicht erweitert."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është 40% e 250?",
        "options": [
          "100",
          "625",
          "210",
          "150"
        ],
        "explanation": "40% = 40/100 = 0,4. 0,4 × 250 = 100. Rezultati: 100.",
        "hint": "Shndërroni përqindjen në thyesë dhjetore dhe shumëzoni.",
        "whyWrong": [
          null,
          "Keni pjesëtuar 250 ÷ 0,4 në vend që të shumëzoni.",
          "Keni zbritur 40 nga 250 si numër, jo si përqindje.",
          "150 është 60% e 250, pra pjesa tjetër."
        ]
      },
      "en": {
        "question": "What is 40% of 250?",
        "options": [
          "100",
          "625",
          "210",
          "150"
        ],
        "explanation": "40% = 40/100 = 0.4. 0.4 × 250 = 100. Result: 100.",
        "hint": "Turn the percentage into a decimal and multiply.",
        "whyWrong": [
          null,
          "You divided 250 ÷ 0.4 instead of multiplying.",
          "You subtracted 40 from 250 as a number, not as a percentage.",
          "150 is 60% of 250, the remaining part."
        ]
      },
      "de": {
        "question": "Was sind 40 % von 250?",
        "options": [
          "100",
          "625",
          "210",
          "150"
        ],
        "explanation": "40 % = 40/100 = 0,4. 0,4 × 250 = 100. Ergebnis: 100.",
        "hint": "Wandeln Sie den Prozentsatz in eine Dezimalzahl um und multiplizieren Sie.",
        "whyWrong": [
          null,
          "Sie haben 250 ÷ 0,4 gerechnet statt zu multiplizieren.",
          "Sie haben 40 als Zahl von 250 abgezogen, nicht als Prozentsatz.",
          "150 sind 60 % von 250, also der restliche Teil."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Si shkruhet 0,375 si thyesë e thjeshtuar?",
        "options": [
          "375/100",
          "3/10",
          "3/4",
          "3/8"
        ],
        "explanation": "0,375 ka tri shifra dhjetore, pra 0,375 = 375/1000. Pjesëtojmë numëruesin dhe emëruesin me 125: 375/1000 = 3/8. Rezultati: 3/8.",
        "hint": "Numri i shifrave dhjetore tregon emëruesin (10, 100 apo 1000).",
        "whyWrong": [
          "Tri shifra dhjetore kërkojnë emëruesin 1000, jo 100 (375/100 = 3,75).",
          "Keni marrë vetëm shifrën e parë dhjetore (0,3).",
          "3/4 = 0,75, që është dyfishi i 0,375.",
          null
        ]
      },
      "en": {
        "question": "What is 0.375 as a simplified fraction?",
        "options": [
          "375/100",
          "3/10",
          "3/4",
          "3/8"
        ],
        "explanation": "0.375 has three decimal places, so 0.375 = 375/1000. Divide numerator and denominator by 125: 375/1000 = 3/8. Result: 3/8.",
        "hint": "The number of decimal places tells you the denominator (10, 100 or 1000).",
        "whyWrong": [
          "Three decimal places need the denominator 1000, not 100 (375/100 = 3.75).",
          "You only used the first decimal digit (0.3).",
          "3/4 = 0.75, which is double 0.375.",
          null
        ]
      },
      "de": {
        "question": "Wie lautet 0,375 als vollständig gekürzter Bruch?",
        "options": [
          "375/100",
          "3/10",
          "3/4",
          "3/8"
        ],
        "explanation": "0,375 hat drei Nachkommastellen, also 0,375 = 375/1000. Kürzen mit 125: 375/1000 = 3/8. Ergebnis: 3/8.",
        "hint": "Die Anzahl der Nachkommastellen bestimmt den Nenner (10, 100 oder 1000).",
        "whyWrong": [
          "Drei Nachkommastellen brauchen den Nenner 1000, nicht 100 (375/100 = 3,75).",
          "Sie haben nur die erste Nachkommastelle (0,3) verwendet.",
          "3/4 = 0,75, das ist das Doppelte von 0,375.",
          null
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Çmimi prej 80 € rritet me 20%. Sa është çmimi i ri?",
        "options": [
          "100 €",
          "96 €",
          "16 €",
          "64 €"
        ],
        "explanation": "20% e 80 € është 0,2 × 80 = 16 €. Çmimi i ri: 80 + 16 = 96 € (ose 80 × 1,2 = 96). Rezultati: 96 €.",
        "hint": "Gjeni fillimisht sa euro është rritja.",
        "whyWrong": [
          "Keni shtuar 20 € në vend të 20%.",
          null,
          "16 € është vetëm rritja, jo çmimi i ri.",
          "Keni zbritur 20% në vend që ta shtoni."
        ]
      },
      "en": {
        "question": "A price of €80 increases by 20%. What is the new price?",
        "options": [
          "€100",
          "€96",
          "€16",
          "€64"
        ],
        "explanation": "20% of €80 is 0.2 × 80 = €16. New price: 80 + 16 = €96 (or 80 × 1.2 = 96). Result: €96.",
        "hint": "First work out how many euros the increase is.",
        "whyWrong": [
          "You added €20 instead of 20%.",
          null,
          "€16 is only the increase, not the new price.",
          "You subtracted 20% instead of adding it."
        ]
      },
      "de": {
        "question": "Ein Preis von 80 € steigt um 20 %. Wie hoch ist der neue Preis?",
        "options": [
          "100 €",
          "96 €",
          "16 €",
          "64 €"
        ],
        "explanation": "20 % von 80 € sind 0,2 × 80 = 16 €. Neuer Preis: 80 + 16 = 96 € (oder 80 × 1,2 = 96). Ergebnis: 96 €.",
        "hint": "Berechnen Sie zuerst, wie viele Euro die Erhöhung beträgt.",
        "whyWrong": [
          "Sie haben 20 € statt 20 % addiert.",
          null,
          "16 € ist nur die Erhöhung, nicht der neue Preis.",
          "Sie haben 20 % abgezogen statt addiert."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Sa është 2/3 × 3/4?",
        "options": [
          "5/7",
          "8/9",
          "1/2",
          "17/12"
        ],
        "explanation": "Shumëzojmë numëruesit dhe emëruesit: (2 × 3)/(3 × 4) = 6/12. Thjeshtojmë me 6: 6/12 = 1/2. Rezultati: 1/2.",
        "hint": "Te shumëzimi i thyesave nuk nevojitet emërues i përbashkët.",
        "whyWrong": [
          "Keni mbledhur numëruesit dhe emëruesit në vend që t’i shumëzoni.",
          "Keni kthyer thyesën e dytë, pra keni pjesëtuar në vend që të shumëzoni.",
          null,
          "Keni mbledhur thyesat (8/12 + 9/12) në vend që t’i shumëzoni."
        ]
      },
      "en": {
        "question": "What is 2/3 × 3/4?",
        "options": [
          "5/7",
          "8/9",
          "1/2",
          "17/12"
        ],
        "explanation": "Multiply the numerators and the denominators: (2 × 3)/(3 × 4) = 6/12. Simplify by 6: 6/12 = 1/2. Result: 1/2.",
        "hint": "Multiplying fractions does not need a common denominator.",
        "whyWrong": [
          "You added the numerators and denominators instead of multiplying.",
          "You flipped the second fraction, so you divided instead of multiplying.",
          null,
          "You added the fractions (8/12 + 9/12) instead of multiplying."
        ]
      },
      "de": {
        "question": "Was ist 2/3 × 3/4?",
        "options": [
          "5/7",
          "8/9",
          "1/2",
          "17/12"
        ],
        "explanation": "Zähler mal Zähler, Nenner mal Nenner: (2 × 3)/(3 × 4) = 6/12. Mit 6 kürzen: 6/12 = 1/2. Ergebnis: 1/2.",
        "hint": "Beim Multiplizieren von Brüchen braucht man keinen gemeinsamen Nenner.",
        "whyWrong": [
          "Sie haben Zähler und Nenner addiert statt multipliziert.",
          "Sie haben den zweiten Bruch umgedreht, also dividiert statt multipliziert.",
          null,
          "Sie haben die Brüche addiert (8/12 + 9/12) statt multipliziert."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Sa për qind e 150 është 30?",
        "options": [
          "500%",
          "20%",
          "5%",
          "30%"
        ],
        "explanation": "Përqindja = pjesa ÷ e tëra × 100. 30 ÷ 150 = 0,2 dhe 0,2 × 100 = 20%. Rezultati: 20%.",
        "hint": "Pjesëtoni pjesën me të tërën.",
        "whyWrong": [
          "Keni pjesëtuar të tërën me pjesën (150 ÷ 30).",
          null,
          "5 është 150 ÷ 30; keni përmbysur pjesëtimin dhe nuk keni shumëzuar me 100.",
          "Keni marrë vetë pjesën (30) si përqindje."
        ]
      },
      "en": {
        "question": "What percentage of 150 is 30?",
        "options": [
          "500%",
          "20%",
          "5%",
          "30%"
        ],
        "explanation": "Percentage = part ÷ whole × 100. 30 ÷ 150 = 0.2 and 0.2 × 100 = 20%. Result: 20%.",
        "hint": "Divide the part by the whole.",
        "whyWrong": [
          "You divided the whole by the part (150 ÷ 30).",
          null,
          "5 is 150 ÷ 30; you flipped the division and did not multiply by 100.",
          "You took the part itself (30) as the percentage."
        ]
      },
      "de": {
        "question": "Wie viel Prozent von 150 sind 30?",
        "options": [
          "500 %",
          "20 %",
          "5 %",
          "30 %"
        ],
        "explanation": "Prozentsatz = Anteil ÷ Ganzes × 100. 30 ÷ 150 = 0,2 und 0,2 × 100 = 20 %. Ergebnis: 20 %.",
        "hint": "Teilen Sie den Anteil durch das Ganze.",
        "whyWrong": [
          "Sie haben das Ganze durch den Anteil geteilt (150 ÷ 30).",
          null,
          "5 ist 150 ÷ 30; Sie haben die Division vertauscht und nicht mit 100 multipliziert.",
          "Sie haben den Anteil selbst (30) als Prozentsatz genommen."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është 5/6 ÷ 2/3?",
        "options": [
          "5/4",
          "5/9",
          "4/5",
          "1/6"
        ],
        "explanation": "Pjesëtimi me thyesë = shumëzim me të anasjelltën: 5/6 × 3/2 = 15/12. Thjeshtojmë me 3: 15/12 = 5/4. Rezultati: 5/4.",
        "hint": "Me çfarë e zëvendësoni pjesëtimin me një thyesë?",
        "whyWrong": [
          null,
          "Keni shumëzuar 5/6 × 2/3 pa e kthyer thyesën e dytë.",
          "Keni kthyer thyesën e parë në vend të së dytës.",
          "Keni zbritur thyesat (5/6 − 4/6) në vend që të pjesëtoni."
        ]
      },
      "en": {
        "question": "What is 5/6 ÷ 2/3?",
        "options": [
          "5/4",
          "5/9",
          "4/5",
          "1/6"
        ],
        "explanation": "Dividing by a fraction = multiplying by its reciprocal: 5/6 × 3/2 = 15/12. Simplify by 3: 15/12 = 5/4. Result: 5/4.",
        "hint": "What do you replace division by a fraction with?",
        "whyWrong": [
          null,
          "You multiplied 5/6 × 2/3 without flipping the second fraction.",
          "You flipped the first fraction instead of the second.",
          "You subtracted the fractions (5/6 − 4/6) instead of dividing."
        ]
      },
      "de": {
        "question": "Was ist 5/6 ÷ 2/3?",
        "options": [
          "5/4",
          "5/9",
          "4/5",
          "1/6"
        ],
        "explanation": "Durch einen Bruch teilen = mit dem Kehrwert multiplizieren: 5/6 × 3/2 = 15/12. Mit 3 kürzen: 15/12 = 5/4. Ergebnis: 5/4.",
        "hint": "Wodurch ersetzt man die Division durch einen Bruch?",
        "whyWrong": [
          null,
          "Sie haben 5/6 × 2/3 gerechnet, ohne den zweiten Bruch umzudrehen.",
          "Sie haben den ersten statt den zweiten Bruch umgedreht.",
          "Sie haben die Brüche subtrahiert (5/6 − 4/6) statt dividiert."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Në një klasë me 30 nxënës, 3/5 janë vajza. Sa djem ka në klasë?",
        "options": [
          "18",
          "10",
          "6",
          "12"
        ],
        "explanation": "Djemtë janë 1 − 3/5 = 2/5 e klasës. 2/5 × 30 = 12. (Ose: vajza 3/5 × 30 = 18, djem 30 − 18 = 12.) Rezultati: 12.",
        "hint": "Çfarë pjese të klasës përbëjnë djemtë?",
        "whyWrong": [
          "18 është numri i vajzave, jo i djemve.",
          "Keni pjesëtuar 30 me numëruesin 3.",
          "6 është vetëm 1/5 e klasës.",
          null
        ]
      },
      "en": {
        "question": "In a class of 30 students, 3/5 are girls. How many boys are in the class?",
        "options": [
          "18",
          "10",
          "6",
          "12"
        ],
        "explanation": "Boys make up 1 − 3/5 = 2/5 of the class. 2/5 × 30 = 12. (Or: girls 3/5 × 30 = 18, boys 30 − 18 = 12.) Result: 12.",
        "hint": "What fraction of the class are boys?",
        "whyWrong": [
          "18 is the number of girls, not boys.",
          "You divided 30 by the numerator 3.",
          "6 is only 1/5 of the class.",
          null
        ]
      },
      "de": {
        "question": "In einer Klasse mit 30 Schülern sind 3/5 Mädchen. Wie viele Jungen sind in der Klasse?",
        "options": [
          "18",
          "10",
          "6",
          "12"
        ],
        "explanation": "Die Jungen sind 1 − 3/5 = 2/5 der Klasse. 2/5 × 30 = 12. (Oder: Mädchen 3/5 × 30 = 18, Jungen 30 − 18 = 12.) Ergebnis: 12.",
        "hint": "Welcher Bruchteil der Klasse sind Jungen?",
        "whyWrong": [
          "18 ist die Anzahl der Mädchen, nicht der Jungen.",
          "Sie haben 30 durch den Zähler 3 geteilt.",
          "6 ist nur 1/5 der Klasse.",
          null
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Një vlerë rritet nga 80 në 100. Sa është rritja në përqindje?",
        "options": [
          "20%",
          "80%",
          "25%",
          "125%"
        ],
        "explanation": "Rritja = 100 − 80 = 20. Krahasohet me vlerën fillestare: 20 ÷ 80 = 0,25 = 25%. Rezultati: 25%.",
        "hint": "Ndryshimin krahasojeni me vlerën fillestare, jo me vlerën e re.",
        "whyWrong": [
          "Keni pjesëtuar me vlerën e re (20 ÷ 100) në vend të vlerës fillestare.",
          "80% është raporti 80 ÷ 100, jo rritja.",
          null,
          "125% është vlera e re krahasuar me të vjetrën; rritja është 125% − 100%."
        ]
      },
      "en": {
        "question": "A value increases from 80 to 100. What is the percentage increase?",
        "options": [
          "20%",
          "80%",
          "25%",
          "125%"
        ],
        "explanation": "Increase = 100 − 80 = 20. Compare it with the original value: 20 ÷ 80 = 0.25 = 25%. Result: 25%.",
        "hint": "Compare the change with the original value, not the new one.",
        "whyWrong": [
          "You divided by the new value (20 ÷ 100) instead of the original.",
          "80% is the ratio 80 ÷ 100, not the increase.",
          null,
          "125% is the new value compared with the old one; the increase is 125% − 100%."
        ]
      },
      "de": {
        "question": "Ein Wert steigt von 80 auf 100. Um wie viel Prozent ist er gestiegen?",
        "options": [
          "20 %",
          "80 %",
          "25 %",
          "125 %"
        ],
        "explanation": "Zunahme = 100 − 80 = 20. Bezogen auf den Ausgangswert: 20 ÷ 80 = 0,25 = 25 %. Ergebnis: 25 %.",
        "hint": "Beziehen Sie die Änderung auf den Ausgangswert, nicht auf den neuen Wert.",
        "whyWrong": [
          "Sie haben durch den neuen Wert geteilt (20 ÷ 100) statt durch den Ausgangswert.",
          "80 % ist das Verhältnis 80 ÷ 100, nicht die Zunahme.",
          null,
          "125 % ist der neue Wert im Vergleich zum alten; die Zunahme ist 125 % − 100 %."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Cila thyesë ndodhet ndërmjet 1/3 dhe 1/2?",
        "options": [
          "1/4",
          "2/5",
          "3/5",
          "2/7"
        ],
        "explanation": "Në numra dhjetorë: 1/3 ≈ 0,333 dhe 1/2 = 0,5. 2/5 = 0,4 ndodhet ndërmjet tyre; 1/4 = 0,25, 3/5 = 0,6 dhe 2/7 ≈ 0,286 jo. Rezultati: 2/5.",
        "hint": "Shndërrojini të gjitha thyesat në numra dhjetorë dhe krahasojini.",
        "whyWrong": [
          "1/4 < 1/3: emërues më i madh do të thotë pjesë më të vogla.",
          null,
          "3/5 = 0,6, që është më e madhe se 1/2.",
          "2/7 ≈ 0,286, që është më e vogël se 1/3."
        ]
      },
      "en": {
        "question": "Which fraction lies between 1/3 and 1/2?",
        "options": [
          "1/4",
          "2/5",
          "3/5",
          "2/7"
        ],
        "explanation": "As decimals: 1/3 ≈ 0.333 and 1/2 = 0.5. 2/5 = 0.4 lies between them; 1/4 = 0.25, 3/5 = 0.6 and 2/7 ≈ 0.286 do not. Result: 2/5.",
        "hint": "Convert all the fractions to decimals and compare.",
        "whyWrong": [
          "1/4 < 1/3: a larger denominator means smaller pieces.",
          null,
          "3/5 = 0.6, which is greater than 1/2.",
          "2/7 ≈ 0.286, which is less than 1/3."
        ]
      },
      "de": {
        "question": "Welcher Bruch liegt zwischen 1/3 und 1/2?",
        "options": [
          "1/4",
          "2/5",
          "3/5",
          "2/7"
        ],
        "explanation": "Als Dezimalzahlen: 1/3 ≈ 0,333 und 1/2 = 0,5. 2/5 = 0,4 liegt dazwischen; 1/4 = 0,25, 3/5 = 0,6 und 2/7 ≈ 0,286 nicht. Ergebnis: 2/5.",
        "hint": "Wandeln Sie alle Brüche in Dezimalzahlen um und vergleichen Sie.",
        "whyWrong": [
          "1/4 < 1/3: Ein größerer Nenner bedeutet kleinere Teile.",
          null,
          "3/5 = 0,6 ist größer als 1/2.",
          "2/7 ≈ 0,286 ist kleiner als 1/3."
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 1.25,
        "tolerance": 0.001
      },
      "al": {
        "question": "Për 6 kekë nevojiten 3/4 kg miell. Sa kilogramë miell nevojiten për 10 kekë? Shkruani rezultatin si numër dhjetor.",
        "explanation": "Për 1 kek: 3/4 : 6 = 3/24 = 1/8 kg. Për 10 kekë: 10 · 1/8 = 10/8 = 1,25 kg.",
        "hint": "Gjeni fillimisht sasinë për një kek, pastaj shumëzoni me 10.",
        "unit": "kg",
        "commonMistakes": [
          {
            "value": 0.45,
            "why": "Keni shumëzuar me 6/10 në vend të 10/6: 3/4 · 6/10 = 0,45."
          },
          {
            "value": 7.5,
            "why": "Keni shumëzuar 3/4 me 10, por keni harruar të pjesëtoni me 6."
          }
        ]
      },
      "en": {
        "question": "A recipe needs 3/4 kg of flour for 6 cakes. How many kilograms of flour are needed for 10 cakes? Give the result as a decimal number.",
        "explanation": "For 1 cake: 3/4 ÷ 6 = 3/24 = 1/8 kg. For 10 cakes: 10 · 1/8 = 10/8 = 1.25 kg.",
        "hint": "First find the amount for one cake, then multiply by 10.",
        "unit": "kg",
        "commonMistakes": [
          {
            "value": 0.45,
            "why": "You multiplied by 6/10 instead of 10/6: 3/4 · 6/10 = 0.45."
          },
          {
            "value": 7.5,
            "why": "You multiplied 3/4 by 10 but forgot to divide by 6."
          }
        ]
      },
      "de": {
        "question": "Für 6 Kuchen braucht man 3/4 kg Mehl. Wie viele Kilogramm Mehl braucht man für 10 Kuchen? Geben Sie das Ergebnis als Dezimalzahl an.",
        "explanation": "Für 1 Kuchen: 3/4 : 6 = 3/24 = 1/8 kg. Für 10 Kuchen: 10 · 1/8 = 10/8 = 1,25 kg.",
        "hint": "Bestimmen Sie zuerst die Menge für einen Kuchen und multiplizieren Sie dann mit 10.",
        "unit": "kg",
        "commonMistakes": [
          {
            "value": 0.45,
            "why": "Sie haben mit 6/10 statt mit 10/6 multipliziert: 3/4 · 6/10 = 0,45."
          },
          {
            "value": 7.5,
            "why": "Sie haben 3/4 mit 10 multipliziert, aber vergessen, durch 6 zu teilen."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 36
      },
      "al": {
        "question": "Llogaritni 15% të numrit 240.",
        "explanation": "15% = 15/100 = 0,15. Pra 0,15 · 240 = 36.",
        "hint": "Shndërroni përqindjen në thyesë me emërues 100 ose në numër dhjetor.",
        "commonMistakes": [
          {
            "value": 16,
            "why": "Keni pjesëtuar 240 : 15 = 16 në vend që të llogaritnit 15/100 të 240."
          },
          {
            "value": 3.6,
            "why": "Keni zhvendosur presjen një vend më shumë: 0,015 · 240 = 3,6."
          }
        ]
      },
      "en": {
        "question": "Calculate 15% of 240.",
        "explanation": "15% = 15/100 = 0.15. So 0.15 · 240 = 36.",
        "hint": "Write the percentage as a fraction over 100 or as a decimal.",
        "commonMistakes": [
          {
            "value": 16,
            "why": "You divided 240 ÷ 15 = 16 instead of taking 15/100 of 240."
          },
          {
            "value": 3.6,
            "why": "You moved the decimal point one place too far: 0.015 · 240 = 3.6."
          }
        ]
      },
      "de": {
        "question": "Berechnen Sie 15 % von 240.",
        "explanation": "15 % = 15/100 = 0,15. Also 0,15 · 240 = 36.",
        "hint": "Schreiben Sie den Prozentsatz als Bruch mit Nenner 100 oder als Dezimalzahl.",
        "commonMistakes": [
          {
            "value": 16,
            "why": "Sie haben 240 : 15 = 16 gerechnet statt 15/100 von 240."
          },
          {
            "value": 3.6,
            "why": "Sie haben das Komma um eine Stelle zu weit verschoben: 0,015 · 240 = 3,6."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": false,
      "al": {
        "question": "1/2 + 1/3 = 2/5",
        "explanation": "Emëruesi i përbashkët është 6: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Pra 1/2 + 1/3 ≠ 2/5; pohimi është i gabuar. (Vini re: 2/5 është madje më i vogël se 1/2.)",
        "hint": "Sillini thyesat në emërues të përbashkët para se t'i mblidhni.",
        "whyWrong": "Pohimi nuk është i vërtetë: thyesat nuk mblidhen duke mbledhur veçmas numëruesit dhe emëruesit; nevojitet emërues i përbashkët."
      },
      "en": {
        "question": "1/2 + 1/3 = 2/5",
        "explanation": "The common denominator is 6: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. So 1/2 + 1/3 ≠ 2/5; the statement is false. (Note: 2/5 is even smaller than 1/2.)",
        "hint": "Bring the fractions to a common denominator before adding.",
        "whyWrong": "The statement is not true: fractions are not added by adding numerators and denominators separately; you need a common denominator."
      },
      "de": {
        "question": "1/2 + 1/3 = 2/5",
        "explanation": "Der gemeinsame Nenner ist 6: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Also 1/2 + 1/3 ≠ 2/5; die Aussage ist falsch. (Übrigens ist 2/5 sogar kleiner als 1/2.)",
        "hint": "Bringen Sie die Brüche vor dem Addieren auf einen gemeinsamen Nenner.",
        "whyWrong": "Die Aussage stimmt nicht: Brüche addiert man nicht, indem man Zähler und Nenner getrennt addiert; man braucht einen gemeinsamen Nenner."
      }
    }
  ]
};
