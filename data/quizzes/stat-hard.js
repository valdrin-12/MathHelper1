// Quiz set "stat-hard" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "stat-hard",
  "difficulty": "advanced",
  "icon": "📉",
  "color": "#7FB069",
  "i18n": {
    "al": {
      "title": "Statistikë e Avancuar",
      "category": "Statistikë",
      "duration": "15 min"
    },
    "en": {
      "title": "Advanced Statistics",
      "category": "Statistics",
      "duration": "15 min"
    },
    "de": {
      "title": "Fortgeschrittene Statistik",
      "category": "Statistik",
      "duration": "15 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni variancën e popullatës σ² për të dhënat: 2, 4, 6, 8.",
        "options": [
          "20/3",
          "√5",
          "20",
          "5"
        ],
        "explanation": "μ = 20 / 4 = 5. Katrorët e devijimeve: 9 + 1 + 1 + 9 = 20. σ² = 20 / 4 = 5.",
        "hint": "Kujdes: te varianca e popullatës emëruesi është numri i të gjitha vlerave.",
        "whyWrong": [
          "Është pjesëtuar me n − 1 = 3 (varianca e mostrës s²), por kërkohet σ².",
          "Ky është devijimi standard σ, jo varianca σ².",
          "Shuma e katrorëve të devijimeve nuk është pjesëtuar me n.",
          null
        ]
      },
      "en": {
        "question": "Calculate the population variance σ² of the data: 2, 4, 6, 8.",
        "options": [
          "20/3",
          "√5",
          "20",
          "5"
        ],
        "explanation": "μ = 20 / 4 = 5. Squared deviations: 9 + 1 + 1 + 9 = 20. σ² = 20 / 4 = 5.",
        "hint": "Careful: for the population variance the denominator is the number of all values.",
        "whyWrong": [
          "Divided by n − 1 = 3 (sample variance s²), but σ² is asked for.",
          "That is the standard deviation σ, not the variance σ².",
          "The sum of squared deviations was not divided by n.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie die Varianz σ² der Grundgesamtheit für die Daten: 2, 4, 6, 8.",
        "options": [
          "20/3",
          "√5",
          "20",
          "5"
        ],
        "explanation": "μ = 20 / 4 = 5. Quadrierte Abweichungen: 9 + 1 + 1 + 9 = 20. σ² = 20 / 4 = 5.",
        "hint": "Achtung: Bei der Varianz der Grundgesamtheit ist der Nenner die Anzahl aller Werte.",
        "whyWrong": [
          "Es wurde durch n − 1 = 3 geteilt (Stichprobenvarianz s²), gefragt ist aber σ².",
          "Das ist die Standardabweichung σ, nicht die Varianz σ².",
          "Die Summe der quadrierten Abweichungen wurde nicht durch n geteilt.",
          null
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Rezultatet e një testi kanë μ = 70 dhe σ = 8. Ana mori 82 pikë. Sa është z-vlera e saj?",
        "options": [
          "12",
          "1,5",
          "−1,5",
          "0,1875"
        ],
        "explanation": "z = (x − μ) / σ = (82 − 70) / 8 = 12 / 8 = 1,5. Rezultati i Anës është 1,5 devijime standarde mbi mesataren.",
        "hint": "Gjeni sa larg është rezultati nga mesatarja, i matur në njësi të σ.",
        "whyWrong": [
          "Kjo është vetëm diferenca x − μ; duhet pjesëtuar me σ.",
          null,
          "Është llogaritur μ − x në vend të x − μ; 82 është mbi mesataren, pra z > 0.",
          "Është pjesëtuar me variancën σ² = 64 në vend të σ = 8."
        ]
      },
      "en": {
        "question": "Test scores have μ = 70 and σ = 8. Ana scored 82. What is her z-score?",
        "options": [
          "12",
          "1.5",
          "−1.5",
          "0.1875"
        ],
        "explanation": "z = (x − μ) / σ = (82 − 70) / 8 = 12 / 8 = 1.5. Ana’s score is 1.5 standard deviations above the mean.",
        "hint": "Find how far the score is from the mean, measured in units of σ.",
        "whyWrong": [
          "That is only the difference x − μ; it must be divided by σ.",
          null,
          "μ − x was used instead of x − μ; 82 is above the mean, so z > 0.",
          "Divided by the variance σ² = 64 instead of σ = 8."
        ]
      },
      "de": {
        "question": "Testergebnisse haben μ = 70 und σ = 8. Ana erreichte 82 Punkte. Wie groß ist ihr z-Wert?",
        "options": [
          "12",
          "1,5",
          "−1,5",
          "0,1875"
        ],
        "explanation": "z = (x − μ) / σ = (82 − 70) / 8 = 12 / 8 = 1,5. Anas Ergebnis liegt 1,5 Standardabweichungen über dem Mittelwert.",
        "hint": "Bestimmen Sie den Abstand zum Mittelwert, gemessen in Einheiten von σ.",
        "whyWrong": [
          "Das ist nur die Differenz x − μ; sie muss durch σ geteilt werden.",
          null,
          "Es wurde μ − x statt x − μ gerechnet; 82 liegt über dem Mittelwert, also z > 0.",
          "Es wurde durch die Varianz σ² = 64 statt durch σ = 8 geteilt."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Në një kuti ka 5 topa të kuq dhe 3 blu. Nxirren rastësisht 2 topa njëri pas tjetrit, pa kthim. Sa është probabiliteti që të dy të jenë të kuq?",
        "options": [
          "5/14",
          "25/64",
          "5/8",
          "9/14"
        ],
        "explanation": "P(i pari i kuq) = 5/8. Pas kësaj mbeten 4 të kuq nga 7 topa: P(i dyti i kuq | i pari i kuq) = 4/7. P = 5/8 · 4/7 = 20/56 = 5/14.",
        "hint": "Pas nxjerrjes së parë, sa topa mbeten në kuti dhe sa prej tyre janë të kuq?",
        "whyWrong": [
          null,
          "Është llogaritur sikur topi të kthehej (5/8 · 5/8), por nxjerrja është pa kthim.",
          "Kjo është probabiliteti vetëm për topin e parë.",
          "Kjo është probabiliteti i ngjarjes së kundërt (jo të dy të kuq)."
        ]
      },
      "en": {
        "question": "A box contains 5 red and 3 blue balls. Two balls are drawn at random one after the other without replacement. What is the probability that both are red?",
        "options": [
          "5/14",
          "25/64",
          "5/8",
          "9/14"
        ],
        "explanation": "P(first red) = 5/8. Then 4 red remain out of 7 balls: P(second red | first red) = 4/7. P = 5/8 · 4/7 = 20/56 = 5/14.",
        "hint": "After the first draw, how many balls are left and how many of them are red?",
        "whyWrong": [
          null,
          "This assumes replacement (5/8 · 5/8), but the draw is without replacement.",
          "That is the probability for the first ball only.",
          "That is the probability of the complement (not both red)."
        ]
      },
      "de": {
        "question": "Eine Schachtel enthält 5 rote und 3 blaue Kugeln. Es werden nacheinander zufällig 2 Kugeln ohne Zurücklegen gezogen. Wie groß ist die Wahrscheinlichkeit, dass beide rot sind?",
        "options": [
          "5/14",
          "25/64",
          "5/8",
          "9/14"
        ],
        "explanation": "P(erste rot) = 5/8. Danach bleiben 4 rote von 7 Kugeln: P(zweite rot | erste rot) = 4/7. P = 5/8 · 4/7 = 20/56 = 5/14.",
        "hint": "Wie viele Kugeln sind nach dem ersten Zug noch übrig, und wie viele davon sind rot?",
        "whyWrong": [
          null,
          "Hier wurde mit Zurücklegen gerechnet (5/8 · 5/8), gezogen wird aber ohne Zurücklegen.",
          "Das ist nur die Wahrscheinlichkeit für die erste Kugel.",
          "Das ist die Wahrscheinlichkeit des Gegenereignisses (nicht beide rot)."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Një monedhë e drejtë hidhet 4 herë. Sa është probabiliteti që të bjerë kokë saktësisht 2 herë?",
        "options": [
          "1/16",
          "1/2",
          "3/8",
          "1/4"
        ],
        "explanation": "Ka C(4, 2) = 6 renditje me 2 koka, secila me probabilitet (1/2)⁴ = 1/16. P = 6 · 1/16 = 6/16 = 3/8.",
        "hint": "Numëroni në sa renditje të ndryshme mund të dalin 2 koka në 4 hedhje.",
        "whyWrong": [
          "Kjo është probabiliteti i vetëm një renditjeje (p.sh. KKPP); ka 6 renditje të tilla.",
          "«Gjysma e hedhjeve kokë» nuk do të thotë probabilitet 1/2; duhen numëruar rastet.",
          null,
          "Është përdorur C(4, 1) = 4 në vend të C(4, 2) = 6."
        ]
      },
      "en": {
        "question": "A fair coin is tossed 4 times. What is the probability of getting exactly 2 heads?",
        "options": [
          "1/16",
          "1/2",
          "3/8",
          "1/4"
        ],
        "explanation": "There are C(4, 2) = 6 orders with 2 heads, each with probability (1/2)⁴ = 1/16. P = 6 · 1/16 = 6/16 = 3/8.",
        "hint": "Count in how many different orders 2 heads can appear in 4 tosses.",
        "whyWrong": [
          "That is the probability of a single order (e.g. HHTT); there are 6 such orders.",
          "“Half the tosses are heads” does not mean probability 1/2; the cases must be counted.",
          null,
          "C(4, 1) = 4 was used instead of C(4, 2) = 6."
        ]
      },
      "de": {
        "question": "Eine faire Münze wird viermal geworfen. Wie groß ist die Wahrscheinlichkeit, genau zweimal Kopf zu erhalten?",
        "options": [
          "1/16",
          "1/2",
          "3/8",
          "1/4"
        ],
        "explanation": "Es gibt C(4, 2) = 6 Reihenfolgen mit 2-mal Kopf, jede mit Wahrscheinlichkeit (1/2)⁴ = 1/16. P = 6 · 1/16 = 6/16 = 3/8.",
        "hint": "Zählen Sie, in wie vielen Reihenfolgen 2-mal Kopf bei 4 Würfen auftreten kann.",
        "whyWrong": [
          "Das ist die Wahrscheinlichkeit einer einzigen Reihenfolge (z. B. KKZZ); es gibt 6 solche.",
          "„Die Hälfte der Würfe ist Kopf“ bedeutet nicht Wahrscheinlichkeit 1/2; man muss die Fälle zählen.",
          null,
          "Es wurde C(4, 1) = 4 statt C(4, 2) = 6 verwendet."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "A dhe B janë ngjarje të pavarura me P(A) = 0,5 dhe P(B) = 0,4. Sa është P(A ∪ B)?",
        "options": [
          "0,9",
          "0,7",
          "0,2",
          "0,3"
        ],
        "explanation": "Për ngjarje të pavarura P(A ∩ B) = P(A) · P(B) = 0,5 · 0,4 = 0,2. Pastaj P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,5 + 0,4 − 0,2 = 0,7.",
        "hint": "Pavarësia ju ndihmon të gjeni P(A ∩ B); pastaj përdorni rregullin e mbledhjes.",
        "whyWrong": [
          "A dhe B nuk janë përjashtuese; duhet zbritur P(A ∩ B).",
          null,
          "Kjo është P(A ∩ B), probabiliteti që të ndodhin të dyja.",
          "Kjo është probabiliteti që të mos ndodhë asnjëra: 1 − 0,7."
        ]
      },
      "en": {
        "question": "A and B are independent events with P(A) = 0.5 and P(B) = 0.4. What is P(A ∪ B)?",
        "options": [
          "0.9",
          "0.7",
          "0.2",
          "0.3"
        ],
        "explanation": "For independent events P(A ∩ B) = P(A) · P(B) = 0.5 · 0.4 = 0.2. Then P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.5 + 0.4 − 0.2 = 0.7.",
        "hint": "Independence lets you find P(A ∩ B); then use the addition rule.",
        "whyWrong": [
          "A and B are not mutually exclusive; P(A ∩ B) must be subtracted.",
          null,
          "That is P(A ∩ B), the probability that both occur.",
          "That is the probability that neither occurs: 1 − 0.7."
        ]
      },
      "de": {
        "question": "A und B sind unabhängige Ereignisse mit P(A) = 0,5 und P(B) = 0,4. Wie groß ist P(A ∪ B)?",
        "options": [
          "0,9",
          "0,7",
          "0,2",
          "0,3"
        ],
        "explanation": "Für unabhängige Ereignisse gilt P(A ∩ B) = P(A) · P(B) = 0,5 · 0,4 = 0,2. Dann P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,5 + 0,4 − 0,2 = 0,7.",
        "hint": "Mit der Unabhängigkeit finden Sie P(A ∩ B); verwenden Sie dann den Additionssatz.",
        "whyWrong": [
          "A und B sind nicht unvereinbar; P(A ∩ B) muss abgezogen werden.",
          null,
          "Das ist P(A ∩ B), die Wahrscheinlichkeit, dass beide eintreten.",
          "Das ist die Wahrscheinlichkeit, dass keines eintritt: 1 − 0,7."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Në një lojë paguani 2 € për të hedhur një zar. Nëse bie 6, merrni 9 €; përndryshe nuk merrni asgjë. Sa është fitimi neto i pritur për një lojë?",
        "options": [
          "1,5 €",
          "7 €",
          "0 €",
          "−0,5 €"
        ],
        "explanation": "Fitimi neto është 9 − 2 = 7 € me probabilitet 1/6, ose −2 € me probabilitet 5/6. E = 7 · 1/6 + (−2) · 5/6 = 7/6 − 10/6 = −3/6 = −0,5 €. Mesatarisht humbni 0,5 € për lojë.",
        "hint": "Shumëzoni çdo fitim neto (pas pagesës) me probabilitetin e tij dhe mblidhni.",
        "whyWrong": [
          "9 · 1/6 = 1,5 € është fitimi bruto i pritur; nuk është zbritur pagesa prej 2 €.",
          "7 € fitohen vetëm kur bie 6; nuk është marrë parasysh probabiliteti 1/6.",
          "Loja nuk është e drejtë; vlera e pritur duhet llogaritur, jo supozuar.",
          null
        ]
      },
      "en": {
        "question": "In a game you pay €2 to roll a die. If it shows 6 you receive €9; otherwise you get nothing. What is the expected net gain per game?",
        "options": [
          "1.5 €",
          "7 €",
          "0 €",
          "−0.5 €"
        ],
        "explanation": "Net gain is 9 − 2 = €7 with probability 1/6, or −€2 with probability 5/6. E = 7 · 1/6 + (−2) · 5/6 = 7/6 − 10/6 = −3/6 = −€0.5. On average you lose €0.5 per game.",
        "hint": "Multiply each net gain (after paying) by its probability and add.",
        "whyWrong": [
          "9 · 1/6 = €1.5 is the expected payout; the €2 cost was not subtracted.",
          "€7 is won only when a 6 shows; the probability 1/6 was ignored.",
          "The game is not fair; the expected value must be calculated, not assumed.",
          null
        ]
      },
      "de": {
        "question": "Bei einem Spiel zahlen Sie 2 €, um einmal zu würfeln. Bei einer 6 erhalten Sie 9 €, sonst nichts. Wie groß ist der erwartete Nettogewinn pro Spiel?",
        "options": [
          "1,5 €",
          "7 €",
          "0 €",
          "−0,5 €"
        ],
        "explanation": "Der Nettogewinn ist 9 − 2 = 7 € mit Wahrscheinlichkeit 1/6 oder −2 € mit Wahrscheinlichkeit 5/6. E = 7 · 1/6 + (−2) · 5/6 = 7/6 − 10/6 = −3/6 = −0,5 €. Im Mittel verlieren Sie 0,5 € pro Spiel.",
        "hint": "Multiplizieren Sie jeden Nettogewinn (nach dem Einsatz) mit seiner Wahrscheinlichkeit und addieren Sie.",
        "whyWrong": [
          "9 · 1/6 = 1,5 € ist die erwartete Auszahlung; der Einsatz von 2 € wurde nicht abgezogen.",
          "7 € gewinnt man nur bei einer 6; die Wahrscheinlichkeit 1/6 wurde ignoriert.",
          "Das Spiel ist nicht fair; der Erwartungswert muss berechnet, nicht angenommen werden.",
          null
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Nga 5 djem dhe 4 vajza duhet të zgjidhet një ekip me 2 djem dhe 2 vajza. Në sa mënyra mund të bëhet kjo?",
        "options": [
          "60",
          "126",
          "16",
          "240"
        ],
        "explanation": "Djemtë: C(5, 2) = 10. Vajzat: C(4, 2) = 6. Sipas rregullit të prodhimit: 10 · 6 = 60.",
        "hint": "Zgjidhni veçmas djemtë dhe vajzat, pastaj kombinoni rezultatet.",
        "whyWrong": [
          null,
          "C(9, 4) = 126 numëron çdo ekip me 4 veta, jo vetëm me 2 djem dhe 2 vajza.",
          "Numrat 10 dhe 6 janë mbledhur; zgjedhjet e njëpasnjëshme shumëzohen.",
          "Është përdorur permutacioni (5 · 4) · (4 · 3); në ekip radha nuk ka rëndësi."
        ]
      },
      "en": {
        "question": "A team of 2 boys and 2 girls is to be chosen from 5 boys and 4 girls. In how many ways can this be done?",
        "options": [
          "60",
          "126",
          "16",
          "240"
        ],
        "explanation": "Boys: C(5, 2) = 10. Girls: C(4, 2) = 6. By the multiplication rule: 10 · 6 = 60.",
        "hint": "Choose the boys and the girls separately, then combine the results.",
        "whyWrong": [
          null,
          "C(9, 4) = 126 counts every 4-person team, not just 2 boys and 2 girls.",
          "10 and 6 were added; successive choices are multiplied.",
          "Permutations (5 · 4) · (4 · 3) were used; order does not matter in a team."
        ]
      },
      "de": {
        "question": "Aus 5 Jungen und 4 Mädchen soll ein Team aus 2 Jungen und 2 Mädchen gebildet werden. Auf wie viele Arten ist das möglich?",
        "options": [
          "60",
          "126",
          "16",
          "240"
        ],
        "explanation": "Jungen: C(5, 2) = 10. Mädchen: C(4, 2) = 6. Nach der Produktregel: 10 · 6 = 60.",
        "hint": "Wählen Sie Jungen und Mädchen getrennt aus und kombinieren Sie dann die Ergebnisse.",
        "whyWrong": [
          null,
          "C(9, 4) = 126 zählt jedes 4er-Team, nicht nur 2 Jungen und 2 Mädchen.",
          "10 und 6 wurden addiert; aufeinanderfolgende Auswahlen werden multipliziert.",
          "Es wurden Permutationen (5 · 4) · (4 · 3) verwendet; im Team zählt die Reihenfolge nicht."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Gjatësitë e nxënësve kanë shpërndarje normale me μ = 170 cm dhe σ = 6 cm. Afërsisht sa përqind e nxënësve kanë gjatësi midis 158 cm dhe 182 cm?",
        "options": [
          "≈ 68%",
          "≈ 47,5%",
          "≈ 95%",
          "≈ 99,7%"
        ],
        "explanation": "158 = 170 − 2 · 6 dhe 182 = 170 + 2 · 6, pra intervali është μ ± 2σ. Sipas rregullit 68–95–99,7, rreth 95% e vlerave janë brenda tij.",
        "hint": "Shprehni kufijtë e intervalit si μ ± k · σ dhe përdorni rregullin 68–95–99,7.",
        "whyWrong": [
          "68% vlen për μ ± 1σ (164–176 cm), ndërsa këtu intervali është μ ± 2σ.",
          "47,5% është vetëm gjysma e intervalit (nga 170 deri në 182 cm).",
          null,
          "99,7% vlen për μ ± 3σ (152–188 cm)."
        ]
      },
      "en": {
        "question": "Students’ heights are normally distributed with μ = 170 cm and σ = 6 cm. Approximately what percentage of students are between 158 cm and 182 cm tall?",
        "options": [
          "≈ 68%",
          "≈ 47.5%",
          "≈ 95%",
          "≈ 99.7%"
        ],
        "explanation": "158 = 170 − 2 · 6 and 182 = 170 + 2 · 6, so the interval is μ ± 2σ. By the 68–95–99.7 rule, about 95% of values lie inside it.",
        "hint": "Express the bounds as μ ± k · σ and use the 68–95–99.7 rule.",
        "whyWrong": [
          "68% applies to μ ± 1σ (164–176 cm), but here the interval is μ ± 2σ.",
          "47.5% is only half of the interval (from 170 to 182 cm).",
          null,
          "99.7% applies to μ ± 3σ (152–188 cm)."
        ]
      },
      "de": {
        "question": "Die Körpergrößen von Schülern sind normalverteilt mit μ = 170 cm und σ = 6 cm. Wie viel Prozent der Schüler sind ungefähr zwischen 158 cm und 182 cm groß?",
        "options": [
          "≈ 68%",
          "≈ 47,5%",
          "≈ 95%",
          "≈ 99,7%"
        ],
        "explanation": "158 = 170 − 2 · 6 und 182 = 170 + 2 · 6, also ist das Intervall μ ± 2σ. Nach der 68–95–99,7-Regel liegen etwa 95% der Werte darin.",
        "hint": "Schreiben Sie die Grenzen als μ ± k · σ und verwenden Sie die 68–95–99,7-Regel.",
        "whyWrong": [
          "68% gilt für μ ± 1σ (164–176 cm), hier ist das Intervall aber μ ± 2σ.",
          "47,5% ist nur die Hälfte des Intervalls (von 170 bis 182 cm).",
          null,
          "99,7% gilt für μ ± 3σ (152–188 cm)."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Jepen P(A) = 0,6 dhe P(A ∩ B) = 0,24. Sa është probabiliteti i kushtëzuar P(B | A)?",
        "options": [
          "0,4",
          "0,144",
          "0,24",
          "2,5"
        ],
        "explanation": "P(B | A) = P(A ∩ B) / P(A) = 0,24 / 0,6 = 0,4.",
        "hint": "Kushti «A ka ndodhur» e ngushton hapësirën e rezultateve vetëm te A.",
        "whyWrong": [
          null,
          "Probabilitetet janë shumëzuar (0,24 · 0,6) në vend që të pjesëtohen.",
          "Kjo është P(A ∩ B); nuk është pjesëtuar me P(A).",
          "Pjesëtimi është bërë së prapthi (0,6 / 0,24); probabiliteti nuk mund të jetë më i madh se 1."
        ]
      },
      "en": {
        "question": "Given P(A) = 0.6 and P(A ∩ B) = 0.24. What is the conditional probability P(B | A)?",
        "options": [
          "0.4",
          "0.144",
          "0.24",
          "2.5"
        ],
        "explanation": "P(B | A) = P(A ∩ B) / P(A) = 0.24 / 0.6 = 0.4.",
        "hint": "The condition “A has occurred” shrinks the sample space to A.",
        "whyWrong": [
          null,
          "The probabilities were multiplied (0.24 · 0.6) instead of divided.",
          "That is P(A ∩ B); it was not divided by P(A).",
          "The division was done the wrong way round (0.6 / 0.24); a probability cannot exceed 1."
        ]
      },
      "de": {
        "question": "Gegeben sind P(A) = 0,6 und P(A ∩ B) = 0,24. Wie groß ist die bedingte Wahrscheinlichkeit P(B | A)?",
        "options": [
          "0,4",
          "0,144",
          "0,24",
          "2,5"
        ],
        "explanation": "P(B | A) = P(A ∩ B) / P(A) = 0,24 / 0,6 = 0,4.",
        "hint": "Die Bedingung „A ist eingetreten“ verkleinert den Ergebnisraum auf A.",
        "whyWrong": [
          null,
          "Die Wahrscheinlichkeiten wurden multipliziert (0,24 · 0,6) statt dividiert.",
          "Das ist P(A ∩ B); es wurde nicht durch P(A) geteilt.",
          "Es wurde verkehrt herum geteilt (0,6 / 0,24); eine Wahrscheinlichkeit kann nicht größer als 1 sein."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Sa fjalë të ndryshme (me ose pa kuptim) mund të formohen duke rirenditur të gjitha shkronjat e fjalës ANANAS?",
        "options": [
          "720",
          "120",
          "60",
          "360"
        ],
        "explanation": "Fjala ka 6 shkronja: A përsëritet 3 herë, N 2 herë, S 1 herë. Permutacione me përsëritje: 6! / (3! · 2!) = 720 / 12 = 60.",
        "hint": "Kur ndërrohen mes vete shkronja të njëjta, nuk fitohet renditje e re.",
        "whyWrong": [
          "6! i numëron si të ndryshme edhe ndërrimet e shkronjave të njëjta.",
          "Është pjesëtuar vetëm me 3! (për A), jo edhe me 2! (për N).",
          null,
          "Është pjesëtuar vetëm me 2! (për N), jo edhe me 3! (për A)."
        ]
      },
      "en": {
        "question": "How many different arrangements (meaningful or not) can be made using all the letters of the word ANANAS?",
        "options": [
          "720",
          "120",
          "60",
          "360"
        ],
        "explanation": "The word has 6 letters: A occurs 3 times, N twice, S once. Permutations with repetition: 6! / (3! · 2!) = 720 / 12 = 60.",
        "hint": "Swapping identical letters does not give a new arrangement.",
        "whyWrong": [
          "6! counts swaps of identical letters as different arrangements.",
          "Divided only by 3! (for A), not also by 2! (for N).",
          null,
          "Divided only by 2! (for N), not also by 3! (for A)."
        ]
      },
      "de": {
        "question": "Wie viele verschiedene Anordnungen (sinnvoll oder nicht) lassen sich aus allen Buchstaben des Wortes ANANAS bilden?",
        "options": [
          "720",
          "120",
          "60",
          "360"
        ],
        "explanation": "Das Wort hat 6 Buchstaben: A kommt 3-mal vor, N 2-mal, S 1-mal. Permutationen mit Wiederholung: 6! / (3! · 2!) = 720 / 12 = 60.",
        "hint": "Das Vertauschen gleicher Buchstaben ergibt keine neue Anordnung.",
        "whyWrong": [
          "6! zählt Vertauschungen gleicher Buchstaben als verschiedene Anordnungen.",
          "Es wurde nur durch 3! (für A) geteilt, nicht auch durch 2! (für N).",
          null,
          "Es wurde nur durch 2! (für N) geteilt, nicht auch durch 3! (für A)."
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 0.205,
        "tolerance": 0.001
      },
      "al": {
        "question": "Një lojtar e godet objektivin me probabilitet 0,2 në çdo gjuajtje, në mënyrë të pavarur. Ai gjuan 5 herë. Sa është probabiliteti që ta godasë saktësisht 2 herë? Rrumbullakoni në tri shifra pas presjes.",
        "explanation": "Shpërndarja binomiale me n = 5, p = 0,2: P(X = 2) = C(5, 2) · 0,2² · 0,8³ = 10 · 0,04 · 0,512 = 0,2048 ≈ 0,205.",
        "hint": "Përdorni formulën binomiale P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ.",
        "commonMistakes": [
          {
            "value": 0.02,
            "why": "Keni harruar koeficientin binomial C(5, 2) = 10: 0,04 · 0,512 ≈ 0,020."
          },
          {
            "value": 0.04,
            "why": "Keni llogaritur vetëm 0,2² = 0,04, pa mundësinë e mosgoditjes në 3 gjuajtjet e tjera dhe pa C(5, 2)."
          }
        ]
      },
      "en": {
        "question": "A player hits a target with probability 0.2 on each shot, independently. They shoot 5 times. What is the probability of hitting exactly 2 times? Round to three decimal places.",
        "explanation": "Binomial distribution with n = 5, p = 0.2: P(X = 2) = C(5, 2) · 0.2² · 0.8³ = 10 · 0.04 · 0.512 = 0.2048 ≈ 0.205.",
        "hint": "Use the binomial formula P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ.",
        "commonMistakes": [
          {
            "value": 0.02,
            "why": "You forgot the binomial coefficient C(5, 2) = 10: 0.04 · 0.512 ≈ 0.020."
          },
          {
            "value": 0.04,
            "why": "You only computed 0.2² = 0.04, without the probability of missing the other 3 shots and without C(5, 2)."
          }
        ]
      },
      "de": {
        "question": "Eine Spielerin trifft bei jedem Schuss unabhängig mit der Wahrscheinlichkeit 0,2. Sie schießt 5-mal. Wie groß ist die Wahrscheinlichkeit für genau 2 Treffer? Runden Sie auf drei Nachkommastellen.",
        "explanation": "Binomialverteilung mit n = 5, p = 0,2: P(X = 2) = C(5, 2) · 0,2² · 0,8³ = 10 · 0,04 · 0,512 = 0,2048 ≈ 0,205.",
        "hint": "Verwenden Sie die Binomialformel P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ.",
        "commonMistakes": [
          {
            "value": 0.02,
            "why": "Sie haben den Binomialkoeffizienten C(5, 2) = 10 vergessen: 0,04 · 0,512 ≈ 0,020."
          },
          {
            "value": 0.04,
            "why": "Sie haben nur 0,2² = 0,04 berechnet, ohne die Wahrscheinlichkeit für die 3 Fehlschüsse und ohne C(5, 2)."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 4.2,
        "tolerance": 0.01
      },
      "al": {
        "question": "X ka shpërndarje binomiale me n = 20 dhe p = 0,3. Llogaritni variancën Var(X). Shkruani rezultatin si numër dhjetor.",
        "explanation": "Për shpërndarjen binomiale Var(X) = n · p · (1 − p) = 20 · 0,3 · 0,7 = 4,2.",
        "hint": "Varianca e shpërndarjes binomiale është n · p · (1 − p).",
        "commonMistakes": [
          {
            "value": 6,
            "why": "Kjo është pritja matematike E(X) = n · p = 6, jo varianca."
          },
          {
            "value": 2.05,
            "why": "Kjo është devijimi standard √4,2 ≈ 2,05; varianca nuk merret nën rrënjë."
          },
          {
            "value": 14,
            "why": "Keni llogaritur n · (1 − p) = 14, duke harruar faktorin p."
          }
        ]
      },
      "en": {
        "question": "X is binomially distributed with n = 20 and p = 0.3. Calculate the variance Var(X). Give the result as a decimal number.",
        "explanation": "For a binomial distribution Var(X) = n · p · (1 − p) = 20 · 0.3 · 0.7 = 4.2.",
        "hint": "The variance of a binomial distribution is n · p · (1 − p).",
        "commonMistakes": [
          {
            "value": 6,
            "why": "That is the expected value E(X) = n · p = 6, not the variance."
          },
          {
            "value": 2.05,
            "why": "That is the standard deviation √4.2 ≈ 2.05; the variance is not square-rooted."
          },
          {
            "value": 14,
            "why": "You computed n · (1 − p) = 14 and forgot the factor p."
          }
        ]
      },
      "de": {
        "question": "X ist binomialverteilt mit n = 20 und p = 0,3. Berechnen Sie die Varianz Var(X). Geben Sie das Ergebnis als Dezimalzahl an.",
        "explanation": "Für die Binomialverteilung gilt Var(X) = n · p · (1 − p) = 20 · 0,3 · 0,7 = 4,2.",
        "hint": "Die Varianz der Binomialverteilung ist n · p · (1 − p).",
        "commonMistakes": [
          {
            "value": 6,
            "why": "Das ist der Erwartungswert E(X) = n · p = 6, nicht die Varianz."
          },
          {
            "value": 2.05,
            "why": "Das ist die Standardabweichung √4,2 ≈ 2,05; die Varianz wird nicht gewurzelt."
          },
          {
            "value": 14,
            "why": "Sie haben n · (1 − p) = 14 gerechnet und den Faktor p vergessen."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": false,
      "al": {
        "question": "Dy ngjarje me probabilitete pozitive që përjashtojnë njëra-tjetrën (nuk mund të ndodhin njëkohësisht) janë të pavarura.",
        "explanation": "Nëse A dhe B përjashtojnë njëra-tjetrën, P(A ∩ B) = 0. Por P(A) · P(B) > 0, pra P(A ∩ B) ≠ P(A) · P(B) dhe ngjarjet nuk janë të pavarura. Në fakt, nëse ndodh A, B bëhet e pamundur, që është varësi e fortë. Pohimi është i gabuar.",
        "hint": "Krahasoni P(A ∩ B) me P(A) · P(B).",
        "whyWrong": "Pohimi nuk është i vërtetë: për ngjarje që përjashtojnë njëra-tjetrën P(A ∩ B) = 0, ndërsa pavarësia kërkon P(A ∩ B) = P(A) · P(B) > 0."
      },
      "en": {
        "question": "Two events with positive probabilities that are mutually exclusive (cannot happen together) are independent.",
        "explanation": "If A and B are mutually exclusive, P(A ∩ B) = 0. But P(A) · P(B) > 0, so P(A ∩ B) ≠ P(A) · P(B) and the events are not independent. In fact, if A happens, B becomes impossible, which is a strong dependence. The statement is false.",
        "hint": "Compare P(A ∩ B) with P(A) · P(B).",
        "whyWrong": "The statement is not true: for mutually exclusive events P(A ∩ B) = 0, whereas independence requires P(A ∩ B) = P(A) · P(B) > 0."
      },
      "de": {
        "question": "Zwei unvereinbare Ereignisse (sie können nicht gleichzeitig eintreten) mit positiven Wahrscheinlichkeiten sind unabhängig.",
        "explanation": "Sind A und B unvereinbar, gilt P(A ∩ B) = 0. Aber P(A) · P(B) > 0, also P(A ∩ B) ≠ P(A) · P(B), und die Ereignisse sind nicht unabhängig. Tritt A ein, wird B sogar unmöglich – eine starke Abhängigkeit. Die Aussage ist falsch.",
        "hint": "Vergleichen Sie P(A ∩ B) mit P(A) · P(B).",
        "whyWrong": "Die Aussage stimmt nicht: Für unvereinbare Ereignisse ist P(A ∩ B) = 0, Unabhängigkeit verlangt aber P(A ∩ B) = P(A) · P(B) > 0."
      }
    }
  ]
};
