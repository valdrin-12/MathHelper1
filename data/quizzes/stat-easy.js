// Quiz set "stat-easy" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).

export default {
  "id": "stat-easy",
  "difficulty": "beginner",
  "icon": "📈",
  "color": "#A8E6CF",
  "i18n": {
    "al": {
      "title": "Statistikë Bazë",
      "category": "Statistikë",
      "duration": "8 min"
    },
    "en": {
      "title": "Basic Statistics",
      "category": "Statistics",
      "duration": "8 min"
    },
    "de": {
      "title": "Grundlegende Statistik",
      "category": "Statistik",
      "duration": "8 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Llogaritni mesataren aritmetike të numrave: 2, 5, 6, 9, 13.",
        "options": [
          "6",
          "7",
          "35",
          "8,75"
        ],
        "explanation": "Shuma: 2 + 5 + 6 + 9 + 13 = 35. Numri i vlerave: 5. Mesatarja: x̄ = 35 / 5 = 7.",
        "hint": "Mblidhni të gjitha vlerat dhe pjesëtoni me numrin e vlerave.",
        "whyWrong": [
          "Kjo është mediana (vlera e mesme), jo mesatarja.",
          null,
          "Kjo është vetëm shuma; nuk është pjesëtuar me 5.",
          "Shuma është pjesëtuar me 4 në vend të 5."
        ]
      },
      "en": {
        "question": "Calculate the mean of the numbers: 2, 5, 6, 9, 13.",
        "options": [
          "6",
          "7",
          "35",
          "8.75"
        ],
        "explanation": "Sum: 2 + 5 + 6 + 9 + 13 = 35. Number of values: 5. Mean: x̄ = 35 / 5 = 7.",
        "hint": "Add all the values and divide by how many there are.",
        "whyWrong": [
          "That is the median (middle value), not the mean.",
          null,
          "That is only the sum; it was not divided by 5.",
          "The sum was divided by 4 instead of 5."
        ]
      },
      "de": {
        "question": "Berechnen Sie den Mittelwert der Zahlen: 2, 5, 6, 9, 13.",
        "options": [
          "6",
          "7",
          "35",
          "8,75"
        ],
        "explanation": "Summe: 2 + 5 + 6 + 9 + 13 = 35. Anzahl der Werte: 5. Mittelwert: x̄ = 35 / 5 = 7.",
        "hint": "Addieren Sie alle Werte und teilen Sie durch ihre Anzahl.",
        "whyWrong": [
          "Das ist der Median (mittlerer Wert), nicht der Mittelwert.",
          null,
          "Das ist nur die Summe; es wurde nicht durch 5 geteilt.",
          "Die Summe wurde durch 4 statt durch 5 geteilt."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Gjeni medianën e të dhënave: 6, 1, 9, 3, 4.",
        "options": [
          "4",
          "9",
          "4,6",
          "8"
        ],
        "explanation": "Renditni vlerat: 1, 3, 4, 6, 9. Me 5 vlera, mediana është vlera e tretë: 4.",
        "hint": "Para se të zgjidhni vlerën e mesme, renditni të dhënat sipas madhësisë.",
        "whyWrong": [
          null,
          "Është marrë vlera e mesme pa i renditur të dhënat.",
          "Kjo është mesatarja (23 / 5), jo mediana.",
          "Ky është diapazoni (9 − 1), jo mediana."
        ]
      },
      "en": {
        "question": "Find the median of the data: 6, 1, 9, 3, 4.",
        "options": [
          "4",
          "9",
          "4.6",
          "8"
        ],
        "explanation": "Sort the values: 1, 3, 4, 6, 9. With 5 values the median is the 3rd one: 4.",
        "hint": "Before picking the middle value, put the data in order.",
        "whyWrong": [
          null,
          "The middle value was taken without sorting the data first.",
          "That is the mean (23 / 5), not the median.",
          "That is the range (9 − 1), not the median."
        ]
      },
      "de": {
        "question": "Bestimmen Sie den Median der Daten: 6, 1, 9, 3, 4.",
        "options": [
          "4",
          "9",
          "4,6",
          "8"
        ],
        "explanation": "Ordnen Sie die Werte: 1, 3, 4, 6, 9. Bei 5 Werten ist der Median der 3. Wert: 4.",
        "hint": "Ordnen Sie die Daten der Größe nach, bevor Sie den mittleren Wert wählen.",
        "whyWrong": [
          null,
          "Der mittlere Wert wurde ohne vorheriges Sortieren genommen.",
          "Das ist der Mittelwert (23 / 5), nicht der Median.",
          "Das ist die Spannweite (9 − 1), nicht der Median."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Gjeni modën e të dhënave: 3, 5, 5, 6, 8, 8, 8, 9.",
        "options": [
          "3",
          "5",
          "8",
          "6,5"
        ],
        "explanation": "Numëroni sa herë shfaqet çdo vlerë: 5 shfaqet 2 herë, 8 shfaqet 3 herë, të tjerat nga 1 herë. Moda është vlera më e shpeshtë: 8.",
        "hint": "Kërkoni vlerën që përsëritet më shumë herë.",
        "whyWrong": [
          "3 është numri i herëve që shfaqet moda (frekuenca), jo vetë moda.",
          "5 përsëritet vetëm 2 herë, ndërsa 8 përsëritet 3 herë.",
          null,
          "Kjo është mesatarja (52 / 8), jo moda."
        ]
      },
      "en": {
        "question": "Find the mode of the data: 3, 5, 5, 6, 8, 8, 8, 9.",
        "options": [
          "3",
          "5",
          "8",
          "6.5"
        ],
        "explanation": "Count how often each value appears: 5 appears twice, 8 three times, the others once. The mode is the most frequent value: 8.",
        "hint": "Look for the value that occurs most often.",
        "whyWrong": [
          "3 is how many times the mode occurs (its frequency), not the mode itself.",
          "5 occurs only twice, while 8 occurs three times.",
          null,
          "That is the mean (52 / 8), not the mode."
        ]
      },
      "de": {
        "question": "Bestimmen Sie den Modalwert der Daten: 3, 5, 5, 6, 8, 8, 8, 9.",
        "options": [
          "3",
          "5",
          "8",
          "6,5"
        ],
        "explanation": "Zählen Sie, wie oft jeder Wert vorkommt: 5 kommt 2-mal vor, 8 kommt 3-mal vor, die übrigen je 1-mal. Der Modalwert ist der häufigste Wert: 8.",
        "hint": "Suchen Sie den Wert, der am häufigsten vorkommt.",
        "whyWrong": [
          "3 ist die Häufigkeit des Modalwerts, nicht der Modalwert selbst.",
          "5 kommt nur 2-mal vor, 8 dagegen 3-mal.",
          null,
          "Das ist der Mittelwert (52 / 8), nicht der Modalwert."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Në një qese ka 3 topa të kuq, 5 blu dhe 2 të gjelbër. Nxirret rastësisht një top. Sa është probabiliteti që topi të jetë i kuq?",
        "options": [
          "3/7",
          "1/3",
          "1/10",
          "3/10"
        ],
        "explanation": "Gjithsej ka 3 + 5 + 2 = 10 topa, prej tyre 3 të kuq. P(i kuq) = rastet e favorshme / të gjitha rastet = 3/10.",
        "hint": "Krahasoni numrin e topave të kuq me numrin e të gjithë topave në qese.",
        "whyWrong": [
          "Topat e kuq janë krahasuar me topat jo të kuq, jo me të gjithë topat.",
          "Tri ngjyrat nuk janë njëlloj të mundshme, sepse numri i topave ndryshon.",
          "Është numëruar vetëm një top i kuq, por ka 3 të tillë.",
          null
        ]
      },
      "en": {
        "question": "A bag contains 3 red, 5 blue and 2 green balls. One ball is drawn at random. What is the probability that it is red?",
        "options": [
          "3/7",
          "1/3",
          "1/10",
          "3/10"
        ],
        "explanation": "There are 3 + 5 + 2 = 10 balls in total, 3 of them red. P(red) = favourable outcomes / all outcomes = 3/10.",
        "hint": "Compare the number of red balls with the total number of balls.",
        "whyWrong": [
          "Red balls were compared with the non-red balls instead of all balls.",
          "The three colours are not equally likely because their numbers of balls differ.",
          "Only one red ball was counted, but there are 3.",
          null
        ]
      },
      "de": {
        "question": "Ein Beutel enthält 3 rote, 5 blaue und 2 grüne Kugeln. Eine Kugel wird zufällig gezogen. Wie groß ist die Wahrscheinlichkeit, dass sie rot ist?",
        "options": [
          "3/7",
          "1/3",
          "1/10",
          "3/10"
        ],
        "explanation": "Insgesamt gibt es 3 + 5 + 2 = 10 Kugeln, davon 3 rote. P(rot) = günstige Ergebnisse / alle Ergebnisse = 3/10.",
        "hint": "Vergleichen Sie die Anzahl der roten Kugeln mit der Gesamtzahl der Kugeln.",
        "whyWrong": [
          "Die roten Kugeln wurden mit den nicht roten statt mit allen Kugeln verglichen.",
          "Die drei Farben sind nicht gleich wahrscheinlich, da die Anzahl der Kugeln verschieden ist.",
          "Es wurde nur eine rote Kugel gezählt, es sind aber 3.",
          null
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Temperaturat gjatë pesë ditëve ishin: −3, 4, 7, −1, 5 (°C). Sa është diapazoni?",
        "options": [
          "4",
          "10",
          "8",
          "2,4"
        ],
        "explanation": "Vlera më e madhe është 7, më e vogla −3. Diapazoni = maksimumi − minimumi = 7 − (−3) = 7 + 3 = 10 °C.",
        "hint": "Gjeni vlerën më të madhe dhe më të vogël; kujdes me shenjën minus.",
        "whyWrong": [
          "Është zbritur 3 në vend të −3: 7 − (−3) nuk është 7 − 3.",
          null,
          "Është zbritur vlera e parë nga e fundit (5 − (−3)), jo minimumi nga maksimumi.",
          "Kjo është mesatarja (12 / 5), jo diapazoni."
        ]
      },
      "en": {
        "question": "The temperatures over five days were −3, 4, 7, −1, 5 (°C). What is the range?",
        "options": [
          "4",
          "10",
          "8",
          "2.4"
        ],
        "explanation": "Largest value 7, smallest −3. Range = maximum − minimum = 7 − (−3) = 7 + 3 = 10 °C.",
        "hint": "Find the largest and smallest values; be careful with the minus sign.",
        "whyWrong": [
          "3 was subtracted instead of −3: 7 − (−3) is not 7 − 3.",
          null,
          "The first value was subtracted from the last (5 − (−3)) instead of min from max.",
          "That is the mean (12 / 5), not the range."
        ]
      },
      "de": {
        "question": "Die Temperaturen an fünf Tagen betrugen −3, 4, 7, −1, 5 (°C). Wie groß ist die Spannweite?",
        "options": [
          "4",
          "10",
          "8",
          "2,4"
        ],
        "explanation": "Größter Wert 7, kleinster Wert −3. Spannweite = Maximum − Minimum = 7 − (−3) = 7 + 3 = 10 °C.",
        "hint": "Bestimmen Sie den größten und den kleinsten Wert; achten Sie auf das Minuszeichen.",
        "whyWrong": [
          "Es wurde 3 statt −3 abgezogen: 7 − (−3) ist nicht 7 − 3.",
          null,
          "Der erste Wert wurde vom letzten abgezogen (5 − (−3)) statt Minimum vom Maximum.",
          "Das ist der Mittelwert (12 / 5), nicht die Spannweite."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Hidhet një zar i zakonshëm. Sa është probabiliteti që të bjerë një numër më i madh se 4?",
        "options": [
          "1/6",
          "1/2",
          "1/3",
          "2/3"
        ],
        "explanation": "Rastet e favorshme janë 5 dhe 6, pra 2 nga 6 raste. P = 2/6 = 1/3.",
        "hint": "Shkruani cilët numra të zarit janë më të mëdhenj se 4.",
        "whyWrong": [
          "Është numëruar vetëm 6, por edhe 5 është më i madh se 4.",
          "Është numëruar edhe 4, por «më i madh se 4» nuk e përfshin 4.",
          null,
          "Kjo është probabiliteti i ngjarjes së kundërt (4 ose më pak)."
        ]
      },
      "en": {
        "question": "A standard die is rolled. What is the probability of getting a number greater than 4?",
        "options": [
          "1/6",
          "1/2",
          "1/3",
          "2/3"
        ],
        "explanation": "The favourable outcomes are 5 and 6, i.e. 2 of 6 outcomes. P = 2/6 = 1/3.",
        "hint": "List which numbers on the die are greater than 4.",
        "whyWrong": [
          "Only 6 was counted, but 5 is also greater than 4.",
          "4 was counted too, but “greater than 4” does not include 4.",
          null,
          "That is the probability of the complement (4 or less)."
        ]
      },
      "de": {
        "question": "Ein normaler Würfel wird geworfen. Wie groß ist die Wahrscheinlichkeit, eine Zahl größer als 4 zu erhalten?",
        "options": [
          "1/6",
          "1/2",
          "1/3",
          "2/3"
        ],
        "explanation": "Günstig sind 5 und 6, also 2 von 6 Ergebnissen. P = 2/6 = 1/3.",
        "hint": "Schreiben Sie auf, welche Augenzahlen größer als 4 sind.",
        "whyWrong": [
          "Nur die 6 wurde gezählt, aber auch 5 ist größer als 4.",
          "Die 4 wurde mitgezählt, aber „größer als 4“ schließt die 4 nicht ein.",
          null,
          "Das ist die Wahrscheinlichkeit des Gegenereignisses (4 oder weniger)."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Gjeni medianën e të dhënave: 12, 5, 8, 10, 3, 6.",
        "options": [
          "9",
          "6",
          "8",
          "7"
        ],
        "explanation": "Renditni: 3, 5, 6, 8, 10, 12. Me 6 vlera (numër çift), mediana është mesatarja e dy vlerave të mesme: (6 + 8) / 2 = 7.",
        "hint": "Renditni të dhënat; me numër çift vlerash ka dy vlera në mes.",
        "whyWrong": [
          "Janë marrë dy vlerat e mesme pa i renditur të dhënat: (8 + 10) / 2.",
          "Është marrë vetëm vlera e mesme e poshtme; duhet mesatarja e të dyjave.",
          "Është marrë vetëm vlera e mesme e sipërme; duhet mesatarja e të dyjave.",
          null
        ]
      },
      "en": {
        "question": "Find the median of the data: 12, 5, 8, 10, 3, 6.",
        "options": [
          "9",
          "6",
          "8",
          "7"
        ],
        "explanation": "Sort: 3, 5, 6, 8, 10, 12. With 6 values (an even number), the median is the mean of the two middle values: (6 + 8) / 2 = 7.",
        "hint": "Sort the data; with an even number of values there are two middle values.",
        "whyWrong": [
          "The two middle values were taken without sorting: (8 + 10) / 2.",
          "Only the lower middle value was taken; the median is the mean of both.",
          "Only the upper middle value was taken; the median is the mean of both.",
          null
        ]
      },
      "de": {
        "question": "Bestimmen Sie den Median der Daten: 12, 5, 8, 10, 3, 6.",
        "options": [
          "9",
          "6",
          "8",
          "7"
        ],
        "explanation": "Ordnen: 3, 5, 6, 8, 10, 12. Bei 6 Werten (gerade Anzahl) ist der Median der Mittelwert der beiden mittleren Werte: (6 + 8) / 2 = 7.",
        "hint": "Ordnen Sie die Daten; bei einer geraden Anzahl gibt es zwei mittlere Werte.",
        "whyWrong": [
          "Die zwei mittleren Werte wurden ohne Sortieren genommen: (8 + 10) / 2.",
          "Nur der untere mittlere Wert wurde genommen; der Median ist der Mittelwert beider.",
          "Nur der obere mittlere Wert wurde genommen; der Median ist der Mittelwert beider.",
          null
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Probabiliteti që nesër të bjerë shi është 0,35. Sa është probabiliteti që nesër të mos bjerë shi?",
        "options": [
          "0,65",
          "0,35",
          "1,35",
          "0,5"
        ],
        "explanation": "Ngjarja «nuk bie shi» është e kundërta e ngjarjes «bie shi». P(nuk bie shi) = 1 − 0,35 = 0,65.",
        "hint": "Probabilitetet e një ngjarjeje dhe të ngjarjes së kundërt kanë shumën 1.",
        "whyWrong": [
          null,
          "Kjo është probabiliteti që të bjerë shi, jo që të mos bjerë.",
          "Është llogaritur 1 + 0,35; asnjë probabilitet nuk mund të jetë më i madh se 1.",
          "Dy rezultatet (bie / nuk bie shi) nuk janë njëlloj të mundshme."
        ]
      },
      "en": {
        "question": "The probability that it rains tomorrow is 0.35. What is the probability that it does not rain tomorrow?",
        "options": [
          "0.65",
          "0.35",
          "1.35",
          "0.5"
        ],
        "explanation": "“No rain” is the complement of “rain”. P(no rain) = 1 − 0.35 = 0.65.",
        "hint": "The probabilities of an event and its complement add up to 1.",
        "whyWrong": [
          null,
          "That is the probability of rain, not of no rain.",
          "1 + 0.35 was calculated; no probability can exceed 1.",
          "The two outcomes (rain / no rain) are not equally likely."
        ]
      },
      "de": {
        "question": "Die Wahrscheinlichkeit, dass es morgen regnet, beträgt 0,35. Wie groß ist die Wahrscheinlichkeit, dass es morgen nicht regnet?",
        "options": [
          "0,65",
          "0,35",
          "1,35",
          "0,5"
        ],
        "explanation": "„Kein Regen“ ist das Gegenereignis zu „Regen“. P(kein Regen) = 1 − 0,35 = 0,65.",
        "hint": "Ein Ereignis und sein Gegenereignis haben zusammen die Wahrscheinlichkeit 1.",
        "whyWrong": [
          null,
          "Das ist die Wahrscheinlichkeit für Regen, nicht für keinen Regen.",
          "Es wurde 1 + 0,35 gerechnet; keine Wahrscheinlichkeit kann größer als 1 sein.",
          "Die beiden Ergebnisse (Regen / kein Regen) sind nicht gleich wahrscheinlich."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Mesatarja e pikëve në katër teste është 7. Në tri testet e para pikët janë 6, 8 dhe 5. Sa pikë ka testi i katërt?",
        "options": [
          "7",
          "2",
          "9",
          "28"
        ],
        "explanation": "Shuma e katër testeve duhet të jetë 4 · 7 = 28. Tri të parat japin 6 + 8 + 5 = 19. Testi i katërt: 28 − 19 = 9.",
        "hint": "Mesatarja e shumëzuar me numrin e vlerave jep shumën e tyre.",
        "whyWrong": [
          "Vlera e katërt nuk duhet të jetë sa mesatarja; tri të parat kanë shumën 19, jo 21.",
          "Është përdorur 3 · 7 = 21 në vend të 4 · 7 = 28 për shumën.",
          null,
          "Kjo është shuma e të katër testeve; nuk janë zbritur pikët e tri të parëve."
        ]
      },
      "en": {
        "question": "The mean score of four tests is 7. The first three scores are 6, 8 and 5. What is the fourth score?",
        "options": [
          "7",
          "2",
          "9",
          "28"
        ],
        "explanation": "The total of the four tests must be 4 · 7 = 28. The first three give 6 + 8 + 5 = 19. Fourth score: 28 − 19 = 9.",
        "hint": "The mean times the number of values gives their total.",
        "whyWrong": [
          "The fourth value need not equal the mean; the first three sum to 19, not 21.",
          "3 · 7 = 21 was used instead of 4 · 7 = 28 for the total.",
          null,
          "That is the total of all four tests; the first three scores were not subtracted."
        ]
      },
      "de": {
        "question": "Der Mittelwert der Punktzahlen aus vier Tests ist 7. Die ersten drei Punktzahlen sind 6, 8 und 5. Wie hoch ist die vierte Punktzahl?",
        "options": [
          "7",
          "2",
          "9",
          "28"
        ],
        "explanation": "Die Summe der vier Tests muss 4 · 7 = 28 sein. Die ersten drei ergeben 6 + 8 + 5 = 19. Vierte Punktzahl: 28 − 19 = 9.",
        "hint": "Mittelwert mal Anzahl der Werte ergibt die Summe.",
        "whyWrong": [
          "Der vierte Wert muss nicht gleich dem Mittelwert sein; die ersten drei ergeben 19, nicht 21.",
          "Es wurde 3 · 7 = 21 statt 4 · 7 = 28 als Summe verwendet.",
          null,
          "Das ist die Summe aller vier Tests; die ersten drei Punktzahlen wurden nicht abgezogen."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Hidhen dy monedha njëkohësisht. Sa është probabiliteti që të dyja të bien kokë?",
        "options": [
          "1/2",
          "1/4",
          "1/3",
          "1"
        ],
        "explanation": "Rezultatet e mundshme: KK, KP, PK, PP (4 raste njëlloj të mundshme). Vetëm KK është i favorshëm: P = 1/4. (Ose: 1/2 · 1/2 = 1/4.)",
        "hint": "Shkruani të gjitha rezultatet e mundshme për dy monedhat.",
        "whyWrong": [
          "Kjo është probabiliteti për një monedhë; duhet që të dyja të bien kokë.",
          null,
          "KP dhe PK janë dy raste të ndryshme, prandaj ka 4 raste, jo 3.",
          "Janë mbledhur 1/2 + 1/2; kur duhet të ndodhin të dyja ngjarjet e pavarura, probabilitetet shumëzohen."
        ]
      },
      "en": {
        "question": "Two coins are tossed. What is the probability that both show heads?",
        "options": [
          "1/2",
          "1/4",
          "1/3",
          "1"
        ],
        "explanation": "Possible outcomes: HH, HT, TH, TT (4 equally likely). Only HH is favourable: P = 1/4. (Or: 1/2 · 1/2 = 1/4.)",
        "hint": "List all possible outcomes for the two coins.",
        "whyWrong": [
          "That is the probability for one coin; both must show heads.",
          null,
          "HT and TH are different outcomes, so there are 4 outcomes, not 3.",
          "1/2 + 1/2 were added; when two independent events must both happen, multiply."
        ]
      },
      "de": {
        "question": "Zwei Münzen werden geworfen. Wie groß ist die Wahrscheinlichkeit, dass beide Kopf zeigen?",
        "options": [
          "1/2",
          "1/4",
          "1/3",
          "1"
        ],
        "explanation": "Mögliche Ergebnisse: KK, KZ, ZK, ZZ (4 gleich wahrscheinliche). Nur KK ist günstig: P = 1/4. (Oder: 1/2 · 1/2 = 1/4.)",
        "hint": "Notieren Sie alle möglichen Ergebnisse für die zwei Münzen.",
        "whyWrong": [
          "Das ist die Wahrscheinlichkeit für eine Münze; beide müssen Kopf zeigen.",
          null,
          "KZ und ZK sind verschiedene Ergebnisse, also gibt es 4, nicht 3.",
          "1/2 + 1/2 wurden addiert; wenn zwei unabhängige Ereignisse beide eintreten sollen, wird multipliziert."
        ]
      }
    }
  ]
};
