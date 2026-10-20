// Quiz set "numth-medium" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).

export default {
  "id": "numth-medium",
  "difficulty": "intermediate",
  "icon": "≡",
  "color": "#D35400",
  "i18n": {
    "al": {
      "title": "Kongruencat & Faktorizimi",
      "category": "Teoria e Numrave",
      "duration": "10 min"
    },
    "en": {
      "title": "Congruences & Factorization",
      "category": "Number Theory",
      "duration": "10 min"
    },
    "de": {
      "title": "Kongruenzen & Primfaktoren",
      "category": "Zahlentheorie",
      "duration": "10 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Sa është 5³ mod 7 (mbetja e 5³ pjesëtuar me 7)?",
        "options": [
          "1",
          "6",
          "17",
          "5"
        ],
        "explanation": "5³ = 125. 7 × 17 = 119 dhe 125 − 119 = 6. Ose: 5² = 25 ≡ 4, 4 × 5 = 20 ≡ 6 (mod 7). Rezultati: 6.",
        "hint": "Llogaritni fuqinë hap pas hapi dhe reduktoni mod 7 pas çdo shumëzimi.",
        "whyWrong": [
          "125 = 7 × 18 − 1, pra 125 ≡ −1 ≡ 6; keni humbur shenjën minus.",
          null,
          "17 është herësi (125 ÷ 7), jo mbetja.",
          "Keni reduktuar vetëm bazën (5 mod 7) dhe keni harruar fuqinë."
        ]
      },
      "en": {
        "question": "What is 5³ mod 7 (the remainder of 5³ divided by 7)?",
        "options": [
          "1",
          "6",
          "17",
          "5"
        ],
        "explanation": "5³ = 125. 7 × 17 = 119 and 125 − 119 = 6. Or: 5² = 25 ≡ 4, 4 × 5 = 20 ≡ 6 (mod 7). Result: 6.",
        "hint": "Build up the power step by step and reduce mod 7 after each multiplication.",
        "whyWrong": [
          "125 = 7 × 18 − 1, so 125 ≡ −1 ≡ 6; you dropped the minus sign.",
          null,
          "17 is the quotient (125 ÷ 7), not the remainder.",
          "You only reduced the base (5 mod 7) and forgot the power."
        ]
      },
      "de": {
        "question": "Was ist 5³ mod 7 (der Rest von 5³ bei Division durch 7)?",
        "options": [
          "1",
          "6",
          "17",
          "5"
        ],
        "explanation": "5³ = 125. 7 × 17 = 119 und 125 − 119 = 6. Oder: 5² = 25 ≡ 4, 4 × 5 = 20 ≡ 6 (mod 7). Ergebnis: 6.",
        "hint": "Bauen Sie die Potenz schrittweise auf und reduzieren Sie nach jeder Multiplikation mod 7.",
        "whyWrong": [
          "125 = 7 × 18 − 1, also 125 ≡ −1 ≡ 6; Sie haben das Minuszeichen verloren.",
          null,
          "17 ist der Quotient (125 ÷ 7), nicht der Rest.",
          "Sie haben nur die Basis reduziert (5 mod 7) und die Potenz vergessen."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Sa është mbetja kur 2¹⁰ pjesëtohet me 11?",
        "options": [
          "2",
          "10",
          "0",
          "1"
        ],
        "explanation": "2⁵ = 32 ≡ 10 ≡ −1 (mod 11). Atëherë 2¹⁰ = (2⁵)² ≡ (−1)² = 1. Kontroll: 1024 = 11 × 93 + 1. Rezultati: 1 (në përputhje me teoremën e vogël të Fermatit).",
        "hint": "Gjeni fillimisht 2⁵ mod 11 dhe pastaj ngrijeni në katror.",
        "whyWrong": [
          "Keni ngatërruar me aᵖ ≡ a; këtu eksponenti është p − 1 = 10, jo p.",
          "Keni marrë 2⁵ ≡ 10 si përgjigje përfundimtare; duhet ngritur edhe në katror.",
          "11 është i thjeshtë dhe nuk pjesëtohet me 2, pra nuk e pjesëton asnjë fuqi të 2-shit.",
          null
        ]
      },
      "en": {
        "question": "What is the remainder when 2¹⁰ is divided by 11?",
        "options": [
          "2",
          "10",
          "0",
          "1"
        ],
        "explanation": "2⁵ = 32 ≡ 10 ≡ −1 (mod 11). Then 2¹⁰ = (2⁵)² ≡ (−1)² = 1. Check: 1024 = 11 × 93 + 1. Result: 1 (as Fermat’s little theorem predicts).",
        "hint": "First find 2⁵ mod 11, then square it.",
        "whyWrong": [
          "You confused it with aᵖ ≡ a; here the exponent is p − 1 = 10, not p.",
          "You stopped at 2⁵ ≡ 10; it still has to be squared.",
          "11 is prime and does not divide 2, so it cannot divide any power of 2.",
          null
        ]
      },
      "de": {
        "question": "Welchen Rest lässt 2¹⁰ bei Division durch 11?",
        "options": [
          "2",
          "10",
          "0",
          "1"
        ],
        "explanation": "2⁵ = 32 ≡ 10 ≡ −1 (mod 11). Dann 2¹⁰ = (2⁵)² ≡ (−1)² = 1. Probe: 1024 = 11 × 93 + 1. Ergebnis: 1 (wie der kleine Satz von Fermat vorhersagt).",
        "hint": "Bestimmen Sie zuerst 2⁵ mod 11 und quadrieren Sie dann.",
        "whyWrong": [
          "Sie haben es mit aᵖ ≡ a verwechselt; hier ist der Exponent p − 1 = 10, nicht p.",
          "Sie haben bei 2⁵ ≡ 10 aufgehört; das muss noch quadriert werden.",
          "11 ist prim und teilt 2 nicht, also teilt 11 keine Potenz von 2.",
          null
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Sa vlera të x nga {0, 1, 2, …, 7} plotësojnë x² ≡ 1 (mod 8)?",
        "options": [
          "2",
          "1",
          "4",
          "8"
        ],
        "explanation": "Katrorët mod 8: 0²≡0, 1²≡1, 2²≡4, 3²=9≡1, 4²≡0, 5²=25≡1, 6²=36≡4, 7²=49≡1. Zgjidhje: x = 1, 3, 5, 7. Rezultati: 4.",
        "hint": "Provoni të tetë vlerat një nga një.",
        "whyWrong": [
          "Keni gjetur vetëm x = 1 dhe x = 7 (±1); mod 8 ka më shumë zgjidhje.",
          "Keni gjetur vetëm x = 1.",
          null,
          "Numrat çift (0, 2, 4, 6) japin katrorë çift, pra jo 1."
        ]
      },
      "en": {
        "question": "How many values of x in {0, 1, 2, …, 7} satisfy x² ≡ 1 (mod 8)?",
        "options": [
          "2",
          "1",
          "4",
          "8"
        ],
        "explanation": "Squares mod 8: 0²≡0, 1²≡1, 2²≡4, 3²=9≡1, 4²≡0, 5²=25≡1, 6²=36≡4, 7²=49≡1. Solutions: x = 1, 3, 5, 7. Result: 4.",
        "hint": "Test all eight values one by one.",
        "whyWrong": [
          "You only found x = 1 and x = 7 (±1); mod 8 has more solutions.",
          "You only found x = 1.",
          null,
          "Even numbers (0, 2, 4, 6) have even squares, so not 1."
        ]
      },
      "de": {
        "question": "Wie viele Werte x aus {0, 1, 2, …, 7} erfüllen x² ≡ 1 (mod 8)?",
        "options": [
          "2",
          "1",
          "4",
          "8"
        ],
        "explanation": "Quadrate mod 8: 0²≡0, 1²≡1, 2²≡4, 3²=9≡1, 4²≡0, 5²=25≡1, 6²=36≡4, 7²=49≡1. Lösungen: x = 1, 3, 5, 7. Ergebnis: 4.",
        "hint": "Testen Sie alle acht Werte nacheinander.",
        "whyWrong": [
          "Sie haben nur x = 1 und x = 7 (±1) gefunden; mod 8 gibt es mehr Lösungen.",
          "Sie haben nur x = 1 gefunden.",
          null,
          "Gerade Zahlen (0, 2, 4, 6) haben gerade Quadrate, also nicht 1."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Cila është shifra e fundit e 7²⁰²⁶?",
        "options": [
          "9",
          "7",
          "3",
          "1"
        ],
        "explanation": "Shifrat e fundit të fuqive të 7 përsëriten me periudhë 4: 7, 9, 3, 1. 2026 = 4 × 506 + 2, pra merret vendi i 2-të në cikël. Rezultati: 9.",
        "hint": "Shkruani shifrat e fundit të 7¹, 7², 7³, 7⁴ … dhe kërkoni një model.",
        "whyWrong": [
          null,
          "Fuqitë e 7 nuk mbarojnë gjithmonë me 7; shifra e fundit ndryshon në cikël.",
          "Keni marrë vendin e gabuar në cikël; mbetja e 2026 ÷ 4 është 2, jo 3.",
          "Keni supozuar se 2026 pjesëtohet me 4; mbetja është 2."
        ]
      },
      "en": {
        "question": "What is the last digit of 7²⁰²⁶?",
        "options": [
          "9",
          "7",
          "3",
          "1"
        ],
        "explanation": "The last digits of powers of 7 repeat with period 4: 7, 9, 3, 1. 2026 = 4 × 506 + 2, so take the 2nd place in the cycle. Result: 9.",
        "hint": "Write down the last digits of 7¹, 7², 7³, 7⁴ … and look for a pattern.",
        "whyWrong": [
          null,
          "Powers of 7 do not always end in 7; the last digit cycles.",
          "You took the wrong place in the cycle; 2026 ÷ 4 leaves remainder 2, not 3.",
          "You assumed 2026 is divisible by 4; the remainder is 2."
        ]
      },
      "de": {
        "question": "Was ist die letzte Ziffer von 7²⁰²⁶?",
        "options": [
          "9",
          "7",
          "3",
          "1"
        ],
        "explanation": "Die Endziffern der Potenzen von 7 wiederholen sich mit Periode 4: 7, 9, 3, 1. 2026 = 4 × 506 + 2, also gilt die 2. Stelle im Zyklus. Ergebnis: 9.",
        "hint": "Notieren Sie die Endziffern von 7¹, 7², 7³, 7⁴ … und suchen Sie ein Muster.",
        "whyWrong": [
          null,
          "Potenzen von 7 enden nicht immer auf 7; die Endziffer durchläuft einen Zyklus.",
          "Sie haben die falsche Stelle im Zyklus genommen; 2026 ÷ 4 lässt Rest 2, nicht 3.",
          "Sie haben angenommen, dass 2026 durch 4 teilbar ist; der Rest ist 2."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "PPMM-ja e dy numrave është 6 dhe SHPMV-ja e tyre është 72. Njëri numër është 18. Cili është numri tjetër?",
        "options": [
          "4",
          "24",
          "54",
          "432"
        ],
        "explanation": "Vlen PPMM(a, b) × SHPMV(a, b) = a × b. Pra 6 × 72 = 18 × b, 432 = 18b, b = 24. Kontroll: PPMM(18, 24) = 6 dhe SHPMV(18, 24) = 72. Rezultati: 24.",
        "hint": "Përdorni lidhjen ndërmjet PPMM-së, SHPMV-së dhe prodhimit të dy numrave.",
        "whyWrong": [
          "Keni pjesëtuar SHPMV-në me 18 dhe keni harruar PPMM-në.",
          null,
          "Keni zbritur 72 − 18; lidhja është me prodhim, jo me ndryshim.",
          "432 është prodhimi a × b; duhet pjesëtuar ende me 18."
        ]
      },
      "en": {
        "question": "The GCD of two numbers is 6 and their LCM is 72. One of the numbers is 18. What is the other?",
        "options": [
          "4",
          "24",
          "54",
          "432"
        ],
        "explanation": "GCD(a, b) × LCM(a, b) = a × b. So 6 × 72 = 18 × b, 432 = 18b, b = 24. Check: GCD(18, 24) = 6 and LCM(18, 24) = 72. Result: 24.",
        "hint": "Use the relation between the GCD, the LCM and the product of the two numbers.",
        "whyWrong": [
          "You divided the LCM by 18 and forgot the GCD.",
          null,
          "You subtracted 72 − 18; the relation uses a product, not a difference.",
          "432 is the product a × b; you still need to divide by 18."
        ]
      },
      "de": {
        "question": "Der ggT zweier Zahlen ist 6, ihr kgV ist 72. Eine der Zahlen ist 18. Wie lautet die andere?",
        "options": [
          "4",
          "24",
          "54",
          "432"
        ],
        "explanation": "Es gilt ggT(a, b) × kgV(a, b) = a × b. Also 6 × 72 = 18 × b, 432 = 18b, b = 24. Probe: ggT(18, 24) = 6 und kgV(18, 24) = 72. Ergebnis: 24.",
        "hint": "Nutzen Sie den Zusammenhang zwischen ggT, kgV und dem Produkt der beiden Zahlen.",
        "whyWrong": [
          "Sie haben das kgV durch 18 geteilt und den ggT vergessen.",
          null,
          "Sie haben 72 − 18 gerechnet; der Zusammenhang nutzt ein Produkt, keine Differenz.",
          "432 ist das Produkt a × b; Sie müssen noch durch 18 teilen."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Sa është mbetja e 38 × 45 pjesëtuar me 7?",
        "options": [
          "9",
          "6",
          "0",
          "2"
        ],
        "explanation": "38 = 5 × 7 + 3, pra 38 ≡ 3; 45 = 6 × 7 + 3, pra 45 ≡ 3 (mod 7). Prodhimi: 3 × 3 = 9 ≡ 2 (mod 7). Kontroll: 1710 = 7 × 244 + 2. Rezultati: 2.",
        "hint": "Zëvendësoni secilin faktor me mbetjen e tij mod 7 para se të shumëzoni.",
        "whyWrong": [
          "9 > 7; prodhimi i mbetjeve duhet reduktuar edhe një herë mod 7.",
          "Keni mbledhur mbetjet (3 + 3) në vend që t’i shumëzoni.",
          "Asnjë faktor nuk pjesëtohet me 7 dhe 7 është i thjeshtë, pra prodhimi nuk pjesëtohet me 7.",
          null
        ]
      },
      "en": {
        "question": "What is the remainder of 38 × 45 divided by 7?",
        "options": [
          "9",
          "6",
          "0",
          "2"
        ],
        "explanation": "38 = 5 × 7 + 3, so 38 ≡ 3; 45 = 6 × 7 + 3, so 45 ≡ 3 (mod 7). Product: 3 × 3 = 9 ≡ 2 (mod 7). Check: 1710 = 7 × 244 + 2. Result: 2.",
        "hint": "Replace each factor by its remainder mod 7 before multiplying.",
        "whyWrong": [
          "9 > 7; the product of the remainders must be reduced mod 7 again.",
          "You added the remainders (3 + 3) instead of multiplying them.",
          "Neither factor is divisible by 7, and 7 is prime, so the product is not divisible by 7.",
          null
        ]
      },
      "de": {
        "question": "Welchen Rest lässt 38 × 45 bei Division durch 7?",
        "options": [
          "9",
          "6",
          "0",
          "2"
        ],
        "explanation": "38 = 5 × 7 + 3, also 38 ≡ 3; 45 = 6 × 7 + 3, also 45 ≡ 3 (mod 7). Produkt: 3 × 3 = 9 ≡ 2 (mod 7). Probe: 1710 = 7 × 244 + 2. Ergebnis: 2.",
        "hint": "Ersetzen Sie vor dem Multiplizieren jeden Faktor durch seinen Rest mod 7.",
        "whyWrong": [
          "9 > 7; das Produkt der Reste muss nochmals mod 7 reduziert werden.",
          "Sie haben die Reste addiert (3 + 3) statt multipliziert.",
          "Kein Faktor ist durch 7 teilbar, und 7 ist prim, also ist das Produkt nicht durch 7 teilbar.",
          null
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Cila është zbërthimi i 360 në faktorë të thjeshtë?",
        "options": [
          "2³ × 3² × 5",
          "2² × 3² × 10",
          "2³ × 3 × 5",
          "6² × 10"
        ],
        "explanation": "360 = 2 × 180 = 2² × 90 = 2³ × 45 = 2³ × 3² × 5. Të gjithë faktorët (2, 3, 5) janë të thjeshtë. Rezultati: 2³ × 3² × 5.",
        "hint": "Pjesëtoni vazhdimisht me numrin e thjeshtë më të vogël të mundshëm.",
        "whyWrong": [
          null,
          "Prodhimi jep 360, por 10 nuk është numër i thjeshtë.",
          "Mungon një faktor 3: 2³ × 3 × 5 = 120.",
          "Prodhimi jep 360, por 6 dhe 10 nuk janë numra të thjeshtë."
        ]
      },
      "en": {
        "question": "What is the prime factorization of 360?",
        "options": [
          "2³ × 3² × 5",
          "2² × 3² × 10",
          "2³ × 3 × 5",
          "6² × 10"
        ],
        "explanation": "360 = 2 × 180 = 2² × 90 = 2³ × 45 = 2³ × 3² × 5. All factors (2, 3, 5) are prime. Result: 2³ × 3² × 5.",
        "hint": "Keep dividing by the smallest prime that works.",
        "whyWrong": [
          null,
          "The product is 360, but 10 is not prime.",
          "A factor 3 is missing: 2³ × 3 × 5 = 120.",
          "The product is 360, but 6 and 10 are not prime."
        ]
      },
      "de": {
        "question": "Wie lautet die Primfaktorzerlegung von 360?",
        "options": [
          "2³ × 3² × 5",
          "2² × 3² × 10",
          "2³ × 3 × 5",
          "6² × 10"
        ],
        "explanation": "360 = 2 × 180 = 2² × 90 = 2³ × 45 = 2³ × 3² × 5. Alle Faktoren (2, 3, 5) sind Primzahlen. Ergebnis: 2³ × 3² × 5.",
        "hint": "Teilen Sie fortlaufend durch die kleinstmögliche Primzahl.",
        "whyWrong": [
          null,
          "Das Produkt ist 360, aber 10 ist keine Primzahl.",
          "Ein Faktor 3 fehlt: 2³ × 3 × 5 = 120.",
          "Das Produkt ist 360, aber 6 und 10 sind keine Primzahlen."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Sa numra të thjeshtë ka ndërmjet 1 dhe 20?",
        "options": [
          "7",
          "9",
          "8",
          "10"
        ],
        "explanation": "Numrat e thjeshtë janë: 2, 3, 5, 7, 11, 13, 17, 19. Gjithsej 8. Rezultati: 8.",
        "hint": "Mos harroni numrin e vetëm çift të thjeshtë dhe kujdes me 1.",
        "whyWrong": [
          "Keni harruar 2, i vetmi numër i thjeshtë çift.",
          "Keni numëruar edhe 1, që nuk është numër i thjeshtë.",
          null,
          "Keni numëruar të gjithë numrat tek (1, 3, …, 19); 1, 9 dhe 15 nuk janë të thjeshtë."
        ]
      },
      "en": {
        "question": "How many prime numbers are there between 1 and 20?",
        "options": [
          "7",
          "9",
          "8",
          "10"
        ],
        "explanation": "The primes are: 2, 3, 5, 7, 11, 13, 17, 19. That is 8 in total. Result: 8.",
        "hint": "Do not forget the only even prime, and be careful with 1.",
        "whyWrong": [
          "You forgot 2, the only even prime.",
          "You also counted 1, which is not prime.",
          null,
          "You counted all odd numbers (1, 3, …, 19); 1, 9 and 15 are not prime."
        ]
      },
      "de": {
        "question": "Wie viele Primzahlen gibt es zwischen 1 und 20?",
        "options": [
          "7",
          "9",
          "8",
          "10"
        ],
        "explanation": "Die Primzahlen sind: 2, 3, 5, 7, 11, 13, 17, 19. Insgesamt 8. Ergebnis: 8.",
        "hint": "Vergessen Sie die einzige gerade Primzahl nicht und achten Sie auf die 1.",
        "whyWrong": [
          "Sie haben die 2 vergessen, die einzige gerade Primzahl.",
          "Sie haben auch die 1 gezählt, die keine Primzahl ist.",
          null,
          "Sie haben alle ungeraden Zahlen gezählt (1, 3, …, 19); 1, 9 und 15 sind nicht prim."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Sa pjesëtues natyrorë ka numri 72?",
        "options": [
          "6",
          "12",
          "5",
          "7"
        ],
        "explanation": "72 = 2³ × 3². Numri i pjesëtuesve = (3 + 1) × (2 + 1) = 4 × 3 = 12. (1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.) Rezultati: 12.",
        "hint": "Zbërthejeni 72 në faktorë të thjeshtë dhe përdorni eksponentët.",
        "whyWrong": [
          "Keni shumëzuar eksponentët (3 × 2) pa u shtuar 1 secilit.",
          null,
          "Keni mbledhur eksponentët (3 + 2).",
          "Keni mbledhur (3 + 1) + (2 + 1) në vend që t’i shumëzoni."
        ]
      },
      "en": {
        "question": "How many positive divisors does 72 have?",
        "options": [
          "6",
          "12",
          "5",
          "7"
        ],
        "explanation": "72 = 2³ × 3². Number of divisors = (3 + 1) × (2 + 1) = 4 × 3 = 12. (1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.) Result: 12.",
        "hint": "Factor 72 into primes and use the exponents.",
        "whyWrong": [
          "You multiplied the exponents (3 × 2) without adding 1 to each.",
          null,
          "You added the exponents (3 + 2).",
          "You added (3 + 1) + (2 + 1) instead of multiplying."
        ]
      },
      "de": {
        "question": "Wie viele positive Teiler hat die Zahl 72?",
        "options": [
          "6",
          "12",
          "5",
          "7"
        ],
        "explanation": "72 = 2³ × 3². Anzahl der Teiler = (3 + 1) × (2 + 1) = 4 × 3 = 12. (1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.) Ergebnis: 12.",
        "hint": "Zerlegen Sie 72 in Primfaktoren und nutzen Sie die Exponenten.",
        "whyWrong": [
          "Sie haben die Exponenten multipliziert (3 × 2), ohne jeweils 1 zu addieren.",
          null,
          "Sie haben die Exponenten addiert (3 + 2).",
          "Sie haben (3 + 1) + (2 + 1) addiert statt multipliziert."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Cili është i anasjellti i 3 sipas modulit 7, pra numri x me 3x ≡ 1 (mod 7)?",
        "options": [
          "4",
          "1/3",
          "2",
          "5"
        ],
        "explanation": "Provojmë: 3 × 1 = 3, 3 × 2 = 6, 3 × 3 = 9 ≡ 2, 3 × 4 = 12 ≡ 5, 3 × 5 = 15 ≡ 1 (mod 7). Rezultati: 5.",
        "hint": "Shumëzoni 3 me 1, 2, 3, … derisa mbetja mod 7 të jetë 1.",
        "whyWrong": [
          "4 është i anasjellti në lidhje me mbledhjen (3 + 4 ≡ 0), jo me shumëzimin.",
          "Në aritmetikën modulare i anasjellti duhet të jetë numër i plotë nga 0 deri në 6.",
          "3 × 2 = 6 ≡ −1, jo 1 (mod 7).",
          null
        ]
      },
      "en": {
        "question": "What is the inverse of 3 modulo 7, i.e. the number x with 3x ≡ 1 (mod 7)?",
        "options": [
          "4",
          "1/3",
          "2",
          "5"
        ],
        "explanation": "Test: 3 × 1 = 3, 3 × 2 = 6, 3 × 3 = 9 ≡ 2, 3 × 4 = 12 ≡ 5, 3 × 5 = 15 ≡ 1 (mod 7). Result: 5.",
        "hint": "Multiply 3 by 1, 2, 3, … until the remainder mod 7 is 1.",
        "whyWrong": [
          "4 is the additive inverse (3 + 4 ≡ 0), not the multiplicative one.",
          "In modular arithmetic the inverse must be a whole number from 0 to 6.",
          "3 × 2 = 6 ≡ −1, not 1 (mod 7).",
          null
        ]
      },
      "de": {
        "question": "Was ist das Inverse von 3 modulo 7, also die Zahl x mit 3x ≡ 1 (mod 7)?",
        "options": [
          "4",
          "1/3",
          "2",
          "5"
        ],
        "explanation": "Probieren: 3 × 1 = 3, 3 × 2 = 6, 3 × 3 = 9 ≡ 2, 3 × 4 = 12 ≡ 5, 3 × 5 = 15 ≡ 1 (mod 7). Ergebnis: 5.",
        "hint": "Multiplizieren Sie 3 mit 1, 2, 3, …, bis der Rest mod 7 gleich 1 ist.",
        "whyWrong": [
          "4 ist das additive Inverse (3 + 4 ≡ 0), nicht das multiplikative.",
          "In der modularen Arithmetik muss das Inverse eine ganze Zahl von 0 bis 6 sein.",
          "3 × 2 = 6 ≡ −1, nicht 1 (mod 7).",
          null
        ]
      }
    }
  ]
};
