// Quiz set "arith-easy" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).

export default {
  "id": "arith-easy",
  "difficulty": "beginner",
  "icon": "➕",
  "color": "#FF6B6B",
  "i18n": {
    "al": {
      "title": "Aritmetikë Bazë",
      "category": "Aritmetikë",
      "duration": "5 min"
    },
    "en": {
      "title": "Basic Arithmetic",
      "category": "Arithmetic",
      "duration": "5 min"
    },
    "de": {
      "title": "Grundrechenarten",
      "category": "Arithmetik",
      "duration": "5 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Sa është 7 × 8?",
        "options": [
          "54",
          "56",
          "48",
          "63"
        ],
        "explanation": "7 × 8 = 7 × 4 × 2 = 28 × 2. Rezultati: 56.",
        "hint": "Llogaritni 7 × 4 dhe pastaj dyfishojeni rezultatin.",
        "whyWrong": [
          "54 është 6 × 9; keni ngatërruar tabelën e shumëzimit.",
          null,
          "48 është 6 × 8; keni marrë 6 në vend të 7.",
          "63 është 7 × 9; keni marrë 9 në vend të 8."
        ]
      },
      "en": {
        "question": "What is 7 × 8?",
        "options": [
          "54",
          "56",
          "48",
          "63"
        ],
        "explanation": "7 × 8 = 7 × 4 × 2 = 28 × 2. Result: 56.",
        "hint": "Work out 7 × 4 first, then double it.",
        "whyWrong": [
          "54 is 6 × 9; you mixed up the times table.",
          null,
          "48 is 6 × 8; you used 6 instead of 7.",
          "63 is 7 × 9; you used 9 instead of 8."
        ]
      },
      "de": {
        "question": "Was ist 7 × 8?",
        "options": [
          "54",
          "56",
          "48",
          "63"
        ],
        "explanation": "7 × 8 = 7 × 4 × 2 = 28 × 2. Ergebnis: 56.",
        "hint": "Berechnen Sie zuerst 7 × 4 und verdoppeln Sie dann.",
        "whyWrong": [
          "54 ist 6 × 9; Sie haben das Einmaleins verwechselt.",
          null,
          "48 ist 6 × 8; Sie haben 6 statt 7 genommen.",
          "63 ist 7 × 9; Sie haben 9 statt 8 genommen."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Cili nga këta numra është numër i thjeshtë?",
        "options": [
          "15",
          "21",
          "25",
          "17"
        ],
        "explanation": "Numri i thjeshtë ka vetëm dy pjesëtues: 1 dhe vetveten. 15 = 3 × 5, 21 = 3 × 7, 25 = 5 × 5, ndërsa 17 nuk pjesëtohet me 2, 3 ose 5. Rezultati: 17.",
        "hint": "Kontrolloni nëse numri pjesëtohet me 2, 3 ose 5.",
        "whyWrong": [
          "15 = 3 × 5, pra ka më shumë se dy pjesëtues.",
          "21 = 3 × 7; nuk mjafton që numri të jetë tek.",
          "25 = 5 × 5, pra pjesëtohet edhe me 5.",
          null
        ]
      },
      "en": {
        "question": "Which of these numbers is a prime number?",
        "options": [
          "15",
          "21",
          "25",
          "17"
        ],
        "explanation": "A prime has exactly two divisors: 1 and itself. 15 = 3 × 5, 21 = 3 × 7, 25 = 5 × 5, while 17 is not divisible by 2, 3 or 5. Result: 17.",
        "hint": "Check whether each number is divisible by 2, 3 or 5.",
        "whyWrong": [
          "15 = 3 × 5, so it has more than two divisors.",
          "21 = 3 × 7; being odd is not enough to be prime.",
          "25 = 5 × 5, so it is also divisible by 5.",
          null
        ]
      },
      "de": {
        "question": "Welche dieser Zahlen ist eine Primzahl?",
        "options": [
          "15",
          "21",
          "25",
          "17"
        ],
        "explanation": "Eine Primzahl hat genau zwei Teiler: 1 und sich selbst. 15 = 3 × 5, 21 = 3 × 7, 25 = 5 × 5, aber 17 ist weder durch 2, 3 noch 5 teilbar. Ergebnis: 17.",
        "hint": "Prüfen Sie, ob die Zahl durch 2, 3 oder 5 teilbar ist.",
        "whyWrong": [
          "15 = 3 × 5, hat also mehr als zwei Teiler.",
          "21 = 3 × 7; ungerade zu sein reicht nicht aus.",
          "25 = 5 × 5, ist also auch durch 5 teilbar.",
          null
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është 714 ÷ 7?",
        "options": [
          "102",
          "12",
          "120",
          "112"
        ],
        "explanation": "7 ÷ 7 = 1. Pastaj 1 ÷ 7 = 0 (mbetja 1), pra shkruajmë 0. Në fund 14 ÷ 7 = 2. Rezultati: 102.",
        "hint": "Kujdes: kur një shifër është më e vogël se 7, në herës shkruhet 0.",
        "whyWrong": [
          null,
          "Keni harruar 0-n në vendin e dhjetësheve (12 × 7 = 84).",
          "Keni vendosur 0-n në vendin e gabuar (120 × 7 = 840).",
          "Keni shkruar 1 në vend të 0 te dhjetëshet (112 × 7 = 784)."
        ]
      },
      "en": {
        "question": "What is 714 ÷ 7?",
        "options": [
          "102",
          "12",
          "120",
          "112"
        ],
        "explanation": "7 ÷ 7 = 1. Then 1 ÷ 7 = 0 (remainder 1), so write 0. Finally 14 ÷ 7 = 2. Result: 102.",
        "hint": "Careful: when a digit is smaller than 7, a 0 goes into the quotient.",
        "whyWrong": [
          null,
          "You dropped the 0 in the tens place (12 × 7 = 84).",
          "You put the 0 in the wrong place (120 × 7 = 840).",
          "You wrote 1 instead of 0 in the tens place (112 × 7 = 784)."
        ]
      },
      "de": {
        "question": "Was ist 714 ÷ 7?",
        "options": [
          "102",
          "12",
          "120",
          "112"
        ],
        "explanation": "7 ÷ 7 = 1. Dann 1 ÷ 7 = 0 (Rest 1), also schreibt man 0. Zuletzt 14 ÷ 7 = 2. Ergebnis: 102.",
        "hint": "Achtung: Ist eine Ziffer kleiner als 7, kommt eine 0 in den Quotienten.",
        "whyWrong": [
          null,
          "Sie haben die 0 an der Zehnerstelle vergessen (12 × 7 = 84).",
          "Sie haben die 0 an die falsche Stelle gesetzt (120 × 7 = 840).",
          "Sie haben an der Zehnerstelle 1 statt 0 geschrieben (112 × 7 = 784)."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Sa është 15² − 14²?",
        "options": [
          "1",
          "2",
          "29",
          "421"
        ],
        "explanation": "15² = 15 × 15 = 225 dhe 14² = 14 × 14 = 196. 225 − 196 = 29. Rezultati: 29.",
        "hint": "Llogaritni secilin katror veç e veç, pastaj zbritni.",
        "whyWrong": [
          "Keni llogaritur (15 − 14)²; katrorët duhet llogaritur para zbritjes.",
          "Keni shumëzuar bazën me 2 (30 − 28) në vend që ta shumëzoni me vetveten.",
          null,
          "Keni mbledhur 225 + 196 në vend që të zbritni."
        ]
      },
      "en": {
        "question": "What is 15² − 14²?",
        "options": [
          "1",
          "2",
          "29",
          "421"
        ],
        "explanation": "15² = 15 × 15 = 225 and 14² = 14 × 14 = 196. 225 − 196 = 29. Result: 29.",
        "hint": "Work out each square separately, then subtract.",
        "whyWrong": [
          "You computed (15 − 14)²; the squares must be worked out before subtracting.",
          "You multiplied each base by 2 (30 − 28) instead of by itself.",
          null,
          "You added 225 + 196 instead of subtracting."
        ]
      },
      "de": {
        "question": "Was ist 15² − 14²?",
        "options": [
          "1",
          "2",
          "29",
          "421"
        ],
        "explanation": "15² = 15 × 15 = 225 und 14² = 14 × 14 = 196. 225 − 196 = 29. Ergebnis: 29.",
        "hint": "Berechnen Sie jedes Quadrat einzeln und subtrahieren Sie dann.",
        "whyWrong": [
          "Sie haben (15 − 14)² gerechnet; die Quadrate kommen vor der Subtraktion.",
          "Sie haben die Basis mit 2 statt mit sich selbst multipliziert (30 − 28).",
          null,
          "Sie haben 225 + 196 addiert statt subtrahiert."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Cili është pjesëtuesi i përbashkët më i madh (PPMM) i 36 dhe 48?",
        "options": [
          "6",
          "12",
          "144",
          "24"
        ],
        "explanation": "36 = 2² × 3² dhe 48 = 2⁴ × 3. Marrim faktorët e përbashkët me fuqinë më të vogël: 2² × 3 = 12. Rezultati: 12.",
        "hint": "Zbërtheni të dy numrat në faktorë të thjeshtë dhe merrni vetëm faktorët e përbashkët.",
        "whyWrong": [
          "6 është pjesëtues i përbashkët, por jo më i madhi.",
          null,
          "144 është SHPMV-ja; keni ngatërruar PPMM-në me SHPMV-në.",
          "24 pjesëton 48, por jo 36."
        ]
      },
      "en": {
        "question": "What is the greatest common divisor (GCD) of 36 and 48?",
        "options": [
          "6",
          "12",
          "144",
          "24"
        ],
        "explanation": "36 = 2² × 3² and 48 = 2⁴ × 3. Take the common prime factors with the smaller exponent: 2² × 3 = 12. Result: 12.",
        "hint": "Factor both numbers into primes and keep only the shared factors.",
        "whyWrong": [
          "6 is a common divisor, but not the greatest one.",
          null,
          "144 is the LCM; you mixed up GCD and LCM.",
          "24 divides 48 but not 36."
        ]
      },
      "de": {
        "question": "Was ist der größte gemeinsame Teiler (ggT) von 36 und 48?",
        "options": [
          "6",
          "12",
          "144",
          "24"
        ],
        "explanation": "36 = 2² × 3² und 48 = 2⁴ × 3. Gemeinsame Primfaktoren mit dem kleineren Exponenten: 2² × 3 = 12. Ergebnis: 12.",
        "hint": "Zerlegen Sie beide Zahlen in Primfaktoren und behalten Sie nur die gemeinsamen.",
        "whyWrong": [
          "6 ist ein gemeinsamer Teiler, aber nicht der größte.",
          null,
          "144 ist das kgV; Sie haben ggT und kgV verwechselt.",
          "24 teilt 48, aber nicht 36."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është 2⁵?",
        "options": [
          "32",
          "10",
          "25",
          "16"
        ],
        "explanation": "2⁵ do të thotë 2 shumëzuar me vetveten 5 herë: 2 × 2 × 2 × 2 × 2. Hap pas hapi: 2, 4, 8, 16, 32. Rezultati: 32.",
        "hint": "Eksponenti tregon sa herë shumëzohet baza me vetveten.",
        "whyWrong": [
          null,
          "Keni shumëzuar bazën me eksponentin (2 × 5).",
          "Keni llogaritur 5² në vend të 2⁵.",
          "16 është 2⁴; keni shumëzuar një herë më pak."
        ]
      },
      "en": {
        "question": "What is 2⁵?",
        "options": [
          "32",
          "10",
          "25",
          "16"
        ],
        "explanation": "2⁵ means 2 multiplied by itself 5 times: 2 × 2 × 2 × 2 × 2. Step by step: 2, 4, 8, 16, 32. Result: 32.",
        "hint": "The exponent tells you how many times the base is multiplied by itself.",
        "whyWrong": [
          null,
          "You multiplied the base by the exponent (2 × 5).",
          "You computed 5² instead of 2⁵.",
          "16 is 2⁴; you multiplied one time too few."
        ]
      },
      "de": {
        "question": "Was ist 2⁵?",
        "options": [
          "32",
          "10",
          "25",
          "16"
        ],
        "explanation": "2⁵ bedeutet, 2 fünfmal mit sich selbst zu multiplizieren: 2 × 2 × 2 × 2 × 2. Schrittweise: 2, 4, 8, 16, 32. Ergebnis: 32.",
        "hint": "Der Exponent gibt an, wie oft die Basis mit sich selbst multipliziert wird.",
        "whyWrong": [
          null,
          "Sie haben die Basis mit dem Exponenten multipliziert (2 × 5).",
          "Sie haben 5² statt 2⁵ berechnet.",
          "16 ist 2⁴; Sie haben einmal zu wenig multipliziert."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Cili numër plotëson barazimin □ ÷ 6 = 14?",
        "options": [
          "8",
          "20",
          "7/3",
          "84"
        ],
        "explanation": "Pjesëtimi zhbëhet me shumëzim: □ = 14 × 6 = 84. Kontroll: 84 ÷ 6 = 14. Rezultati: 84.",
        "hint": "Përdorni veprimin e kundërt të pjesëtimit.",
        "whyWrong": [
          "Keni zbritur 14 − 6 në vend që të shumëzoni.",
          "Keni mbledhur 14 + 6 në vend që të shumëzoni.",
          "Keni pjesëtuar 14 ÷ 6; veprimi i kundërt i pjesëtimit është shumëzimi.",
          null
        ]
      },
      "en": {
        "question": "Which number makes □ ÷ 6 = 14 true?",
        "options": [
          "8",
          "20",
          "7/3",
          "84"
        ],
        "explanation": "Division is undone by multiplication: □ = 14 × 6 = 84. Check: 84 ÷ 6 = 14. Result: 84.",
        "hint": "Use the inverse operation of division.",
        "whyWrong": [
          "You subtracted 14 − 6 instead of multiplying.",
          "You added 14 + 6 instead of multiplying.",
          "You divided 14 ÷ 6; the inverse of division is multiplication.",
          null
        ]
      },
      "de": {
        "question": "Welche Zahl erfüllt □ ÷ 6 = 14?",
        "options": [
          "8",
          "20",
          "7/3",
          "84"
        ],
        "explanation": "Division wird durch Multiplikation umgekehrt: □ = 14 × 6 = 84. Probe: 84 ÷ 6 = 14. Ergebnis: 84.",
        "hint": "Verwenden Sie die Umkehroperation der Division.",
        "whyWrong": [
          "Sie haben 14 − 6 subtrahiert statt multipliziert.",
          "Sie haben 14 + 6 addiert statt multipliziert.",
          "Sie haben 14 ÷ 6 gerechnet; die Umkehrung der Division ist die Multiplikation.",
          null
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Sa është vlera e shprehjes 20 − 4 × 3 + 2?",
        "options": [
          "50",
          "6",
          "10",
          "0"
        ],
        "explanation": "Së pari shumëzimi: 4 × 3 = 12. Pastaj nga e majta në të djathtë: 20 − 12 = 8, 8 + 2 = 10. Rezultati: 10.",
        "hint": "Kujtoni renditjen e veprimeve: cili veprim kryhet i pari?",
        "whyWrong": [
          "Keni zbritur para shumëzimit: (20 − 4) × 3 + 2.",
          "Keni mbledhur 12 + 2 para zbritjes; zbritja dhe mbledhja kryhen nga e majta në të djathtë.",
          null,
          "Keni mbledhur 3 + 2 para shumëzimit: 20 − 4 × 5."
        ]
      },
      "en": {
        "question": "What is the value of 20 − 4 × 3 + 2?",
        "options": [
          "50",
          "6",
          "10",
          "0"
        ],
        "explanation": "Multiplication first: 4 × 3 = 12. Then left to right: 20 − 12 = 8, 8 + 2 = 10. Result: 10.",
        "hint": "Remember the order of operations: which operation comes first?",
        "whyWrong": [
          "You subtracted before multiplying: (20 − 4) × 3 + 2.",
          "You added 12 + 2 before subtracting; addition and subtraction go left to right.",
          null,
          "You added 3 + 2 before multiplying: 20 − 4 × 5."
        ]
      },
      "de": {
        "question": "Welchen Wert hat 20 − 4 × 3 + 2?",
        "options": [
          "50",
          "6",
          "10",
          "0"
        ],
        "explanation": "Zuerst die Multiplikation: 4 × 3 = 12. Dann von links nach rechts: 20 − 12 = 8, 8 + 2 = 10. Ergebnis: 10.",
        "hint": "Denken Sie an die Rechenreihenfolge: Welche Operation kommt zuerst?",
        "whyWrong": [
          "Sie haben vor der Multiplikation subtrahiert: (20 − 4) × 3 + 2.",
          "Sie haben 12 + 2 vor der Subtraktion addiert; Plus und Minus rechnet man von links nach rechts.",
          null,
          "Sie haben 3 + 2 vor der Multiplikation addiert: 20 − 4 × 5."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është 3/5 e 40?",
        "options": [
          "24",
          "8",
          "120",
          "16"
        ],
        "explanation": "Një e pesta e 40 është 40 ÷ 5 = 8. Tri të pestat janë 3 × 8 = 24. Rezultati: 24.",
        "hint": "Gjeni fillimisht 1/5 e 40.",
        "whyWrong": [
          null,
          "8 është vetëm 1/5; keni harruar ta shumëzoni me 3.",
          "Keni shumëzuar me 3, por keni harruar të pjesëtoni me 5.",
          "16 është 2/5 e 40, pra pjesa që mbetet."
        ]
      },
      "en": {
        "question": "What is 3/5 of 40?",
        "options": [
          "24",
          "8",
          "120",
          "16"
        ],
        "explanation": "One fifth of 40 is 40 ÷ 5 = 8. Three fifths are 3 × 8 = 24. Result: 24.",
        "hint": "First find 1/5 of 40.",
        "whyWrong": [
          null,
          "8 is only 1/5; you forgot to multiply by 3.",
          "You multiplied by 3 but forgot to divide by 5.",
          "16 is 2/5 of 40, the remaining part."
        ]
      },
      "de": {
        "question": "Was sind 3/5 von 40?",
        "options": [
          "24",
          "8",
          "120",
          "16"
        ],
        "explanation": "Ein Fünftel von 40 ist 40 ÷ 5 = 8. Drei Fünftel sind 3 × 8 = 24. Ergebnis: 24.",
        "hint": "Bestimmen Sie zuerst 1/5 von 40.",
        "whyWrong": [
          null,
          "8 ist nur 1/5; Sie haben vergessen, mit 3 zu multiplizieren.",
          "Sie haben mit 3 multipliziert, aber nicht durch 5 geteilt.",
          "16 sind 2/5 von 40, also der restliche Teil."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Sa është 3³ + 4²?",
        "options": [
          "17",
          "25",
          "91",
          "43"
        ],
        "explanation": "3³ = 3 × 3 × 3 = 27 dhe 4² = 4 × 4 = 16. Fuqitë llogariten para mbledhjes: 27 + 16 = 43. Rezultati: 43.",
        "hint": "Llogaritni secilën fuqi veç e veç para se të mblidhni.",
        "whyWrong": [
          "Keni shumëzuar bazat me eksponentët (9 + 8).",
          "Keni llogaritur 3² në vend të 3³ (9 + 16).",
          "Keni llogaritur 4³ në vend të 4² (27 + 64).",
          null
        ]
      },
      "en": {
        "question": "What is 3³ + 4²?",
        "options": [
          "17",
          "25",
          "91",
          "43"
        ],
        "explanation": "3³ = 3 × 3 × 3 = 27 and 4² = 4 × 4 = 16. Powers come before addition: 27 + 16 = 43. Result: 43.",
        "hint": "Work out each power separately before adding.",
        "whyWrong": [
          "You multiplied each base by its exponent (9 + 8).",
          "You used 3² instead of 3³ (9 + 16).",
          "You used 4³ instead of 4² (27 + 64).",
          null
        ]
      },
      "de": {
        "question": "Was ist 3³ + 4²?",
        "options": [
          "17",
          "25",
          "91",
          "43"
        ],
        "explanation": "3³ = 3 × 3 × 3 = 27 und 4² = 4 × 4 = 16. Potenzen vor der Addition: 27 + 16 = 43. Ergebnis: 43.",
        "hint": "Berechnen Sie jede Potenz einzeln, bevor Sie addieren.",
        "whyWrong": [
          "Sie haben die Basis mit dem Exponenten multipliziert (9 + 8).",
          "Sie haben 3² statt 3³ gerechnet (9 + 16).",
          "Sie haben 4³ statt 4² gerechnet (27 + 64).",
          null
        ]
      }
    }
  ]
};
