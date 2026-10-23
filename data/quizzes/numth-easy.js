// Quiz set "numth-easy" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "numth-easy",
  "difficulty": "beginner",
  "icon": "#️⃣",
  "color": "#E67E22",
  "i18n": {
    "al": {
      "title": "Teoria e Numrave Bazë",
      "category": "Teoria e Numrave",
      "duration": "6 min"
    },
    "en": {
      "title": "Basic Number Theory",
      "category": "Number Theory",
      "duration": "6 min"
    },
    "de": {
      "title": "Grundlagen der Zahlentheorie",
      "category": "Zahlentheorie",
      "duration": "6 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Cili është numri i thjeshtë më i vogël?",
        "options": [
          "2",
          "1",
          "0",
          "3"
        ],
        "explanation": "Numri i thjeshtë ka saktësisht dy pjesëtues: 1 dhe vetveten. 2 ka pjesëtuesit 1 dhe 2, ndërsa 1 ka vetëm një pjesëtues. Rezultati: 2 (i vetmi numër i thjeshtë çift).",
        "hint": "Numëroni sa pjesëtues ka secili numër.",
        "whyWrong": [
          null,
          "1 ka vetëm një pjesëtues, prandaj nuk është numër i thjeshtë.",
          "0 pjesëtohet me çdo numër, prandaj nuk është numër i thjeshtë.",
          "3 është i thjeshtë, por jo më i vogli; edhe 2 është i thjeshtë."
        ]
      },
      "en": {
        "question": "What is the smallest prime number?",
        "options": [
          "2",
          "1",
          "0",
          "3"
        ],
        "explanation": "A prime has exactly two divisors: 1 and itself. 2 has the divisors 1 and 2, while 1 has only one divisor. Result: 2 (the only even prime).",
        "hint": "Count how many divisors each number has.",
        "whyWrong": [
          null,
          "1 has only one divisor, so it is not prime.",
          "0 is divisible by every number, so it is not prime.",
          "3 is prime, but not the smallest; 2 is prime too."
        ]
      },
      "de": {
        "question": "Was ist die kleinste Primzahl?",
        "options": [
          "2",
          "1",
          "0",
          "3"
        ],
        "explanation": "Eine Primzahl hat genau zwei Teiler: 1 und sich selbst. 2 hat die Teiler 1 und 2, während 1 nur einen Teiler hat. Ergebnis: 2 (die einzige gerade Primzahl).",
        "hint": "Zählen Sie, wie viele Teiler jede Zahl hat.",
        "whyWrong": [
          null,
          "1 hat nur einen Teiler und ist daher keine Primzahl.",
          "0 ist durch jede Zahl teilbar und daher keine Primzahl.",
          "3 ist eine Primzahl, aber nicht die kleinste; auch 2 ist prim."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Cili është PPMM-ja (pjesëtuesi i përbashkët më i madh) i 12 dhe 18?",
        "options": [
          "2",
          "3",
          "6",
          "36"
        ],
        "explanation": "12 = 2² × 3 dhe 18 = 2 × 3². Faktorët e përbashkët me fuqinë më të vogël: 2 × 3 = 6. Rezultati: 6.",
        "hint": "Shkruani pjesëtuesit e të dy numrave dhe gjeni më të madhin e përbashkët.",
        "whyWrong": [
          "2 është pjesëtues i përbashkët, por jo më i madhi.",
          "3 është pjesëtues i përbashkët, por jo më i madhi.",
          null,
          "36 është SHPMV-ja; keni ngatërruar PPMM-në me SHPMV-në."
        ]
      },
      "en": {
        "question": "What is the GCD (greatest common divisor) of 12 and 18?",
        "options": [
          "2",
          "3",
          "6",
          "36"
        ],
        "explanation": "12 = 2² × 3 and 18 = 2 × 3². Shared prime factors with the smaller exponent: 2 × 3 = 6. Result: 6.",
        "hint": "List the divisors of both numbers and find the largest one they share.",
        "whyWrong": [
          "2 is a common divisor, but not the greatest.",
          "3 is a common divisor, but not the greatest.",
          null,
          "36 is the LCM; you mixed up GCD and LCM."
        ]
      },
      "de": {
        "question": "Was ist der ggT (größter gemeinsamer Teiler) von 12 und 18?",
        "options": [
          "2",
          "3",
          "6",
          "36"
        ],
        "explanation": "12 = 2² × 3 und 18 = 2 × 3². Gemeinsame Primfaktoren mit kleinerem Exponenten: 2 × 3 = 6. Ergebnis: 6.",
        "hint": "Schreiben Sie die Teiler beider Zahlen auf und suchen Sie den größten gemeinsamen.",
        "whyWrong": [
          "2 ist ein gemeinsamer Teiler, aber nicht der größte.",
          "3 ist ein gemeinsamer Teiler, aber nicht der größte.",
          null,
          "36 ist das kgV; Sie haben ggT und kgV verwechselt."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Cili nga këta numra pjesëtohet me 3?",
        "options": [
          "131",
          "252",
          "115",
          "403"
        ],
        "explanation": "Një numër pjesëtohet me 3 kur shuma e shifrave të tij pjesëtohet me 3. 2 + 5 + 2 = 9, ndërsa 131 → 5, 115 → 7, 403 → 7. Rezultati: 252.",
        "hint": "Mblidhni shifrat e secilit numër.",
        "whyWrong": [
          "Shuma e shifrave është 5, që nuk pjesëtohet me 3.",
          null,
          "115 pjesëtohet me 5, por shuma e shifrave (7) nuk pjesëtohet me 3.",
          "Shifra e fundit 3 nuk mjafton; shuma e shifrave (7) nuk pjesëtohet me 3."
        ]
      },
      "en": {
        "question": "Which of these numbers is divisible by 3?",
        "options": [
          "131",
          "252",
          "115",
          "403"
        ],
        "explanation": "A number is divisible by 3 when its digit sum is divisible by 3. 2 + 5 + 2 = 9, while 131 → 5, 115 → 7, 403 → 7. Result: 252.",
        "hint": "Add up the digits of each number.",
        "whyWrong": [
          "Its digit sum is 5, which is not divisible by 3.",
          null,
          "115 is divisible by 5, but its digit sum (7) is not divisible by 3.",
          "Ending in 3 is not enough; the digit sum (7) is not divisible by 3."
        ]
      },
      "de": {
        "question": "Welche dieser Zahlen ist durch 3 teilbar?",
        "options": [
          "131",
          "252",
          "115",
          "403"
        ],
        "explanation": "Eine Zahl ist durch 3 teilbar, wenn ihre Quersumme durch 3 teilbar ist. 2 + 5 + 2 = 9, dagegen 131 → 5, 115 → 7, 403 → 7. Ergebnis: 252.",
        "hint": "Bilden Sie die Quersumme jeder Zahl.",
        "whyWrong": [
          "Die Quersumme ist 5 und nicht durch 3 teilbar.",
          null,
          "115 ist durch 5 teilbar, aber die Quersumme (7) nicht durch 3.",
          "Die Endziffer 3 reicht nicht; die Quersumme (7) ist nicht durch 3 teilbar."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Sa është mbetja kur 47 pjesëtohet me 6?",
        "options": [
          "7",
          "1",
          "42",
          "5"
        ],
        "explanation": "Shumëfishi më i madh i 6 që nuk e kalon 47 është 6 × 7 = 42. 47 − 42 = 5, pra 47 = 6 × 7 + 5. Rezultati: 5.",
        "hint": "Gjeni shumëfishin më të madh të 6 që nuk e kalon 47.",
        "whyWrong": [
          "7 është herësi, jo mbetja.",
          "Keni përdorur 6 × 8 = 48, që e kalon 47-n.",
          "42 është shumëfishi i 6, jo mbetja.",
          null
        ]
      },
      "en": {
        "question": "What is the remainder when 47 is divided by 6?",
        "options": [
          "7",
          "1",
          "42",
          "5"
        ],
        "explanation": "The largest multiple of 6 not exceeding 47 is 6 × 7 = 42. 47 − 42 = 5, so 47 = 6 × 7 + 5. Result: 5.",
        "hint": "Find the largest multiple of 6 that does not exceed 47.",
        "whyWrong": [
          "7 is the quotient, not the remainder.",
          "You used 6 × 8 = 48, which is larger than 47.",
          "42 is the multiple of 6, not the remainder.",
          null
        ]
      },
      "de": {
        "question": "Welchen Rest lässt 47 bei Division durch 6?",
        "options": [
          "7",
          "1",
          "42",
          "5"
        ],
        "explanation": "Das größte Vielfache von 6, das 47 nicht übersteigt, ist 6 × 7 = 42. 47 − 42 = 5, also 47 = 6 × 7 + 5. Ergebnis: 5.",
        "hint": "Suchen Sie das größte Vielfache von 6, das 47 nicht übersteigt.",
        "whyWrong": [
          "7 ist der Quotient, nicht der Rest.",
          "Sie haben 6 × 8 = 48 verwendet, das größer als 47 ist.",
          "42 ist das Vielfache von 6, nicht der Rest.",
          null
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Cili nga këta numra është numër i përbërë?",
        "options": [
          "91",
          "2",
          "1",
          "29"
        ],
        "explanation": "Numri i përbërë ka më shumë se dy pjesëtues. 91 = 7 × 13, pra ka pjesëtuesit 1, 7, 13 dhe 91. 2 dhe 29 janë të thjeshtë, ndërsa 1 nuk është as i thjeshtë as i përbërë. Rezultati: 91.",
        "hint": "Provoni nëse numri pjesëtohet me 7.",
        "whyWrong": [
          null,
          "2 është çift, por ka vetëm pjesëtuesit 1 dhe 2, pra është i thjeshtë.",
          "1 nuk është as i thjeshtë as i përbërë.",
          "29 nuk pjesëtohet me 2, 3 ose 5, pra është i thjeshtë."
        ]
      },
      "en": {
        "question": "Which of these numbers is composite?",
        "options": [
          "91",
          "2",
          "1",
          "29"
        ],
        "explanation": "A composite number has more than two divisors. 91 = 7 × 13, so its divisors are 1, 7, 13 and 91. 2 and 29 are prime, and 1 is neither prime nor composite. Result: 91.",
        "hint": "Check whether the number is divisible by 7.",
        "whyWrong": [
          null,
          "2 is even, but its only divisors are 1 and 2, so it is prime.",
          "1 is neither prime nor composite.",
          "29 is not divisible by 2, 3 or 5, so it is prime."
        ]
      },
      "de": {
        "question": "Welche dieser Zahlen ist zusammengesetzt?",
        "options": [
          "91",
          "2",
          "1",
          "29"
        ],
        "explanation": "Eine zusammengesetzte Zahl hat mehr als zwei Teiler. 91 = 7 × 13, die Teiler sind also 1, 7, 13 und 91. 2 und 29 sind Primzahlen, 1 ist weder prim noch zusammengesetzt. Ergebnis: 91.",
        "hint": "Prüfen Sie, ob die Zahl durch 7 teilbar ist.",
        "whyWrong": [
          null,
          "2 ist gerade, hat aber nur die Teiler 1 und 2 und ist daher prim.",
          "1 ist weder prim noch zusammengesetzt.",
          "29 ist weder durch 2, 3 noch 5 teilbar und daher prim."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Cili është SHPMV-ja (shumëfishi i përbashkët më i vogël) i 4 dhe 6?",
        "options": [
          "2",
          "24",
          "12",
          "10"
        ],
        "explanation": "Shumëfishat e 4: 4, 8, 12, 16 … Shumëfishat e 6: 6, 12, 18 … I pari i përbashkët është 12. Rezultati: 12.",
        "hint": "Shkruani disa shumëfisha të secilit numër dhe kërkoni të parin e përbashkët.",
        "whyWrong": [
          "2 është PPMM-ja; keni ngatërruar SHPMV-në me PPMM-në.",
          "24 = 4 × 6 është shumëfish i përbashkët, por jo më i vogli.",
          null,
          "Keni mbledhur numrat (4 + 6); 10 nuk pjesëtohet me 4."
        ]
      },
      "en": {
        "question": "What is the LCM (least common multiple) of 4 and 6?",
        "options": [
          "2",
          "24",
          "12",
          "10"
        ],
        "explanation": "Multiples of 4: 4, 8, 12, 16 … Multiples of 6: 6, 12, 18 … The first common one is 12. Result: 12.",
        "hint": "List a few multiples of each number and look for the first one they share.",
        "whyWrong": [
          "2 is the GCD; you mixed up LCM and GCD.",
          "24 = 4 × 6 is a common multiple, but not the least.",
          null,
          "You added the numbers (4 + 6); 10 is not divisible by 4."
        ]
      },
      "de": {
        "question": "Was ist das kgV (kleinstes gemeinsames Vielfaches) von 4 und 6?",
        "options": [
          "2",
          "24",
          "12",
          "10"
        ],
        "explanation": "Vielfache von 4: 4, 8, 12, 16 … Vielfache von 6: 6, 12, 18 … Das erste gemeinsame ist 12. Ergebnis: 12.",
        "hint": "Schreiben Sie einige Vielfache beider Zahlen auf und suchen Sie das erste gemeinsame.",
        "whyWrong": [
          "2 ist der ggT; Sie haben kgV und ggT verwechselt.",
          "24 = 4 × 6 ist ein gemeinsames Vielfaches, aber nicht das kleinste.",
          null,
          "Sie haben die Zahlen addiert (4 + 6); 10 ist nicht durch 4 teilbar."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Sa pjesëtues ka numri 12?",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "explanation": "Pjesëtuesit vijnë në çifte: 1 × 12, 2 × 6, 3 × 4. Pra pjesëtuesit janë 1, 2, 3, 4, 6, 12. Rezultati: 6.",
        "hint": "Kërkoni çiftet e numrave që shumëzuar japin 12.",
        "whyWrong": [
          "Keni harruar pjesëtuesit 1 dhe 12.",
          "Keni numëruar faktorët e thjeshtë (2, 2, 3) në vend të pjesëtuesve.",
          "Keni harruar një pjesëtues (1 ose vetë 12).",
          null
        ]
      },
      "en": {
        "question": "How many divisors does 12 have?",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "explanation": "Divisors come in pairs: 1 × 12, 2 × 6, 3 × 4. So the divisors are 1, 2, 3, 4, 6, 12. Result: 6.",
        "hint": "Look for pairs of numbers that multiply to 12.",
        "whyWrong": [
          "You left out the divisors 1 and 12.",
          "You counted the prime factors (2, 2, 3) instead of the divisors.",
          "You missed one divisor (1 or 12 itself).",
          null
        ]
      },
      "de": {
        "question": "Wie viele Teiler hat die Zahl 12?",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "explanation": "Teiler treten paarweise auf: 1 × 12, 2 × 6, 3 × 4. Die Teiler sind also 1, 2, 3, 4, 6, 12. Ergebnis: 6.",
        "hint": "Suchen Sie Zahlenpaare, deren Produkt 12 ist.",
        "whyWrong": [
          "Sie haben die Teiler 1 und 12 vergessen.",
          "Sie haben die Primfaktoren (2, 2, 3) statt der Teiler gezählt.",
          "Sie haben einen Teiler vergessen (1 oder 12 selbst).",
          null
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Cili nga këta numra është numër i thjeshtë?",
        "options": [
          "51",
          "47",
          "57",
          "49"
        ],
        "explanation": "Mjafton të provojmë numrat e thjeshtë deri te √50 ≈ 7: 51 = 3 × 17, 57 = 3 × 19, 49 = 7 × 7. 47 nuk pjesëtohet me 2, 3, 5 apo 7. Rezultati: 47.",
        "hint": "Provoni pjesëtimin me 3 (shuma e shifrave) dhe me 7.",
        "whyWrong": [
          "51 = 3 × 17; shuma e shifrave 6 pjesëtohet me 3.",
          null,
          "57 = 3 × 19; shuma e shifrave 12 pjesëtohet me 3.",
          "49 = 7 × 7; është katror i plotë."
        ]
      },
      "en": {
        "question": "Which of these numbers is prime?",
        "options": [
          "51",
          "47",
          "57",
          "49"
        ],
        "explanation": "It is enough to test the primes up to √50 ≈ 7: 51 = 3 × 17, 57 = 3 × 19, 49 = 7 × 7. 47 is not divisible by 2, 3, 5 or 7. Result: 47.",
        "hint": "Test divisibility by 3 (digit sum) and by 7.",
        "whyWrong": [
          "51 = 3 × 17; its digit sum 6 is divisible by 3.",
          null,
          "57 = 3 × 19; its digit sum 12 is divisible by 3.",
          "49 = 7 × 7; it is a perfect square."
        ]
      },
      "de": {
        "question": "Welche dieser Zahlen ist eine Primzahl?",
        "options": [
          "51",
          "47",
          "57",
          "49"
        ],
        "explanation": "Es genügt, die Primzahlen bis √50 ≈ 7 zu testen: 51 = 3 × 17, 57 = 3 × 19, 49 = 7 × 7. 47 ist weder durch 2, 3, 5 noch 7 teilbar. Ergebnis: 47.",
        "hint": "Prüfen Sie die Teilbarkeit durch 3 (Quersumme) und durch 7.",
        "whyWrong": [
          "51 = 3 × 17; die Quersumme 6 ist durch 3 teilbar.",
          null,
          "57 = 3 × 19; die Quersumme 12 ist durch 3 teilbar.",
          "49 = 7 × 7; es ist eine Quadratzahl."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Cili nga këta numra është pjesëtues i 84?",
        "options": [
          "8",
          "9",
          "7",
          "16"
        ],
        "explanation": "84 = 2² × 3 × 7. 84 ÷ 7 = 12 pa mbetje. 8 = 2³ dhe 16 = 2⁴ kërkojnë më shumë faktorë 2, ndërsa 9 = 3² kërkon dy faktorë 3. Rezultati: 7.",
        "hint": "Zbërthejeni 84 në faktorë të thjeshtë.",
        "whyWrong": [
          "84 pjesëtohet me 4, por jo me 8 (84 ÷ 8 = 10,5).",
          "84 pjesëtohet me 3, por jo me 9: shuma e shifrave 12 nuk pjesëtohet me 9.",
          null,
          "84 ka vetëm dy faktorë 2, kurse 16 = 2⁴."
        ]
      },
      "en": {
        "question": "Which of these numbers is a divisor of 84?",
        "options": [
          "8",
          "9",
          "7",
          "16"
        ],
        "explanation": "84 = 2² × 3 × 7. 84 ÷ 7 = 12 with no remainder. 8 = 2³ and 16 = 2⁴ need more factors of 2, and 9 = 3² needs two factors of 3. Result: 7.",
        "hint": "Write 84 as a product of prime factors.",
        "whyWrong": [
          "84 is divisible by 4 but not by 8 (84 ÷ 8 = 10.5).",
          "84 is divisible by 3 but not by 9: its digit sum 12 is not divisible by 9.",
          null,
          "84 has only two factors of 2, but 16 = 2⁴."
        ]
      },
      "de": {
        "question": "Welche dieser Zahlen ist ein Teiler von 84?",
        "options": [
          "8",
          "9",
          "7",
          "16"
        ],
        "explanation": "84 = 2² × 3 × 7. 84 ÷ 7 = 12 ohne Rest. 8 = 2³ und 16 = 2⁴ brauchen mehr Faktoren 2, und 9 = 3² braucht zwei Faktoren 3. Ergebnis: 7.",
        "hint": "Zerlegen Sie 84 in Primfaktoren.",
        "whyWrong": [
          "84 ist durch 4, aber nicht durch 8 teilbar (84 ÷ 8 = 10,5).",
          "84 ist durch 3, aber nicht durch 9 teilbar: Die Quersumme 12 ist nicht durch 9 teilbar.",
          null,
          "84 hat nur zwei Faktoren 2, aber 16 = 2⁴."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Shuma e dy numrave tek është gjithmonë…",
        "options": [
          "çift",
          "tek",
          "i thjeshtë",
          "i pjesëtueshëm me 4"
        ],
        "explanation": "Çdo numër tek ka formën 2k + 1. (2a + 1) + (2b + 1) = 2(a + b + 1), që pjesëtohet me 2. Shembull: 3 + 5 = 8. Rezultati: çift.",
        "hint": "Provoni me disa shembuj, p.sh. 3 + 5 dhe 7 + 9.",
        "whyWrong": [
          null,
          "Dy “njësh” të tepërt bashkohen dhe formojnë një çift: 3 + 5 = 8 është çift.",
          "3 + 5 = 8 nuk është numër i thjeshtë.",
          "3 + 3 = 6 nuk pjesëtohet me 4."
        ]
      },
      "en": {
        "question": "The sum of two odd numbers is always…",
        "options": [
          "even",
          "odd",
          "prime",
          "divisible by 4"
        ],
        "explanation": "Every odd number has the form 2k + 1. (2a + 1) + (2b + 1) = 2(a + b + 1), which is divisible by 2. Example: 3 + 5 = 8. Result: even.",
        "hint": "Try a few examples, such as 3 + 5 and 7 + 9.",
        "whyWrong": [
          null,
          "The two leftover ones pair up: 3 + 5 = 8 is even.",
          "3 + 5 = 8 is not prime.",
          "3 + 3 = 6 is not divisible by 4."
        ]
      },
      "de": {
        "question": "Die Summe zweier ungerader Zahlen ist immer …",
        "options": [
          "gerade",
          "ungerade",
          "eine Primzahl",
          "durch 4 teilbar"
        ],
        "explanation": "Jede ungerade Zahl hat die Form 2k + 1. (2a + 1) + (2b + 1) = 2(a + b + 1), also durch 2 teilbar. Beispiel: 3 + 5 = 8. Ergebnis: gerade.",
        "hint": "Probieren Sie einige Beispiele aus, etwa 3 + 5 und 7 + 9.",
        "whyWrong": [
          null,
          "Die zwei übrigen Einsen bilden ein Paar: 3 + 5 = 8 ist gerade.",
          "3 + 5 = 8 ist keine Primzahl.",
          "3 + 3 = 6 ist nicht durch 4 teilbar."
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 14
      },
      "al": {
        "question": "Sa shumëfisha të numrit 7 ka ndërmjet 1 dhe 100?",
        "explanation": "Shumëfishat janë 7, 14, …, 98. Meqë 100 : 7 = 14 me mbetje 2, shumëfishi më i madh është 7 · 14 = 98. Pra janë 14 shumëfisha.",
        "hint": "Pjesëtoni 100 me 7 dhe shikoni vetëm pjesën e plotë.",
        "commonMistakes": [
          {
            "value": 15,
            "why": "Keni rrumbullakuar 100 : 7 ≈ 14,3 lart në 15; por 7 · 15 = 105 > 100."
          }
        ]
      },
      "en": {
        "question": "How many multiples of 7 are there between 1 and 100?",
        "explanation": "The multiples are 7, 14, …, 98. Since 100 ÷ 7 = 14 remainder 2, the largest multiple is 7 · 14 = 98. So there are 14 multiples.",
        "hint": "Divide 100 by 7 and look only at the whole-number part.",
        "commonMistakes": [
          {
            "value": 15,
            "why": "You rounded 100 ÷ 7 ≈ 14.3 up to 15; but 7 · 15 = 105 > 100."
          }
        ]
      },
      "de": {
        "question": "Wie viele Vielfache von 7 liegen zwischen 1 und 100?",
        "explanation": "Die Vielfachen sind 7, 14, …, 98. Da 100 : 7 = 14 Rest 2, ist das größte Vielfache 7 · 14 = 98. Es sind also 14 Vielfache.",
        "hint": "Teilen Sie 100 durch 7 und betrachten Sie nur den ganzzahligen Teil.",
        "commonMistakes": [
          {
            "value": 15,
            "why": "Sie haben 100 : 7 ≈ 14,3 auf 15 aufgerundet; aber 7 · 15 = 105 > 100."
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
        "question": "Sa është mbetja kur 2026 pjesëtohet me 9?",
        "explanation": "Një numër jep me 9 të njëjtën mbetje si shuma e shifrave të tij: 2 + 0 + 2 + 6 = 10, dhe 10 = 9 + 1. Pra mbetja është 1. (Kontroll: 9 · 225 = 2025, 2026 − 2025 = 1.)",
        "hint": "Mbetja me 9 është e njëjtë me mbetjen e shumës së shifrave me 9.",
        "commonMistakes": [
          {
            "value": 10,
            "why": "10 është shuma e shifrave; mbetja duhet të jetë më e vogël se 9, prandaj pjesëtoni edhe 10 me 9."
          }
        ]
      },
      "en": {
        "question": "What is the remainder when 2026 is divided by 9?",
        "explanation": "A number has the same remainder modulo 9 as the sum of its digits: 2 + 0 + 2 + 6 = 10, and 10 = 9 + 1. So the remainder is 1. (Check: 9 · 225 = 2025, 2026 − 2025 = 1.)",
        "hint": "The remainder on division by 9 equals the remainder of the digit sum on division by 9.",
        "commonMistakes": [
          {
            "value": 10,
            "why": "10 is the digit sum; a remainder must be less than 9, so divide 10 by 9 as well."
          }
        ]
      },
      "de": {
        "question": "Welcher Rest bleibt, wenn man 2026 durch 9 teilt?",
        "explanation": "Eine Zahl hat bei Division durch 9 denselben Rest wie ihre Quersumme: 2 + 0 + 2 + 6 = 10, und 10 = 9 + 1. Der Rest ist also 1. (Probe: 9 · 225 = 2025, 2026 − 2025 = 1.)",
        "hint": "Der Rest bei Division durch 9 ist gleich dem Rest der Quersumme bei Division durch 9.",
        "commonMistakes": [
          {
            "value": 10,
            "why": "10 ist die Quersumme; ein Rest muss kleiner als 9 sein, also teilen Sie auch 10 durch 9."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": true,
      "al": {
        "question": "Numri 1 nuk është as numër i thjeshtë, as numër i përbërë.",
        "explanation": "Numri i thjeshtë ka saktësisht dy pjesëtues të ndryshëm (1 dhe vetveten), ndërsa numri i përbërë ka më shumë se dy. Numri 1 ka vetëm një pjesëtues, prandaj nuk bën pjesë në asnjërin grup. Pohimi është i vërtetë.",
        "hint": "Numëroni sa pjesëtues pozitivë ka numri 1.",
        "whyWrong": "Pohimi nuk është i gabuar: 1 ka vetëm një pjesëtues, ndërsa numri i thjeshtë kërkon saktësisht dy dhe numri i përbërë më shumë se dy."
      },
      "en": {
        "question": "The number 1 is neither prime nor composite.",
        "explanation": "A prime has exactly two different divisors (1 and itself), a composite number has more than two. The number 1 has only one divisor, so it belongs to neither group. The statement is true.",
        "hint": "Count how many positive divisors the number 1 has.",
        "whyWrong": "The statement is not false: 1 has only one divisor, whereas a prime needs exactly two and a composite number more than two."
      },
      "de": {
        "question": "Die Zahl 1 ist weder eine Primzahl noch eine zusammengesetzte Zahl.",
        "explanation": "Eine Primzahl hat genau zwei verschiedene Teiler (1 und sich selbst), eine zusammengesetzte Zahl mehr als zwei. Die Zahl 1 hat nur einen Teiler und gehört daher zu keiner der beiden Gruppen. Die Aussage ist wahr.",
        "hint": "Zählen Sie, wie viele positive Teiler die Zahl 1 hat.",
        "whyWrong": "Die Aussage ist nicht falsch: 1 hat nur einen Teiler, eine Primzahl braucht aber genau zwei und eine zusammengesetzte Zahl mehr als zwei."
      }
    }
  ]
};
