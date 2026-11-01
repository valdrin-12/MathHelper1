// Grade 10 · Theme 9 quiz: Measures and accuracy (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-measures-accuracy-quiz',
  grade: 10,
  theme: 'g10-measures-accuracy',
  order: 9,
  difficulty: 'intermediate',
  icon: '📏',
  color: '#2A9D8F',
  i18n: {
    al: { title: 'Matjet dhe saktësia', category: 'Klasa 10 · Tema 9', duration: '10 min' },
    en: { title: 'Measures and accuracy', category: 'Grade 10 · Theme 9', duration: '10 min' },
    de: { title: 'Messen und Genauigkeit', category: 'Klasse 10 · Thema 9', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['round(0.04528, 3)', 0.045],
      al: {
        question: 'Sa është 0,04528 e rrumbullakuar në 2 shifra domethënëse?', options: ['0,04', '0,05', '0,045', '0,0453'],
        explanation: 'Shifrat domethënëse janë 4 dhe 5; pas tyre vjen 2 < 5 → 0,045.', hint: 'Zerot në fillim nuk numërohen.',
        whyWrong: ['Kjo ka vetëm 1 shifër domethënëse.', 'Kjo është në 1 shifër domethënëse.', null, 'Kjo ka 3 shifra domethënëse.'],
      },
      en: {
        question: 'What is 0.04528 rounded to 2 significant figures?', options: ['0.04', '0.05', '0.045', '0.0453'],
        explanation: 'The significant figures are 4 and 5; the next digit is 2 < 5 → 0.045.', hint: 'Leading zeros do not count.',
        whyWrong: ['That has only 1 significant figure.', 'That is to 1 significant figure.', null, 'That has 3 significant figures.'],
      },
      de: {
        question: 'Was ergibt 0,04528 auf 2 geltende Ziffern gerundet?', options: ['0,04', '0,05', '0,045', '0,0453'],
        explanation: 'Die geltenden Ziffern sind 4 und 5; danach folgt 2 < 5 → 0,045.', hint: 'Führende Nullen zählen nicht.',
        whyWrong: ['Das hat nur 1 geltende Ziffer.', 'Das ist auf 1 geltende Ziffer gerundet.', null, 'Das hat 3 geltende Ziffern.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 5.69 },
      verify: ['round(5.6872, 2)', 5.69],
      al: { question: 'Rrumbullakoni 5,6872 në 2 dhjetore.', explanation: 'Shifra e tretë dhjetore është 7 ≥ 5 → 5,69.', hint: 'Shikoni shifrën e tretë dhjetore.', commonMistakes: [{ value: 5.68, why: 'Shifrat u prenë pa rrumbullakuar.' }, { value: 5.7, why: 'Kjo është në 1 dhjetore.' }] },
      en: { question: 'Round 5.6872 to 2 decimal places.', explanation: 'The third decimal is 7 ≥ 5 → 5.69.', hint: 'Look at the third decimal place.', commonMistakes: [{ value: 5.68, why: 'The digits were cut off without rounding.' }, { value: 5.7, why: 'That is to 1 decimal place.' }] },
      de: { question: 'Runden Sie 5,6872 auf 2 Dezimalstellen.', explanation: 'Die dritte Dezimalstelle ist 7 ≥ 5 → 5,69.', hint: 'Schauen Sie auf die dritte Dezimalstelle.', commonMistakes: [{ value: 5.68, why: 'Die Ziffern wurden abgeschnitten statt gerundet.' }, { value: 5.7, why: 'Das ist auf 1 Dezimalstelle gerundet.' }] },
    },
    {
      id: 3, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['50 * 3 / 0.5', 300],
      al: {
        question: 'Cili është përafrimi më i mirë për 49,8 · 3,04 : 0,51?', options: ['300', '30', '75', '3 000'],
        explanation: '≈ 50 · 3 : 0,5 = 150 : 0,5 = 300.', hint: 'Çdo numër në 1 shifër domethënëse.',
        whyWrong: [null, 'Pjesëtimi me 0,5 e dyfishon numrin, nuk e zvogëlon.', 'U shumëzua me 0,5 në vend që të pjesëtohej.', 'Një zero e tepërt.'],
      },
      en: {
        question: 'Which is the best estimate of 49.8 · 3.04 ÷ 0.51?', options: ['300', '30', '75', '3 000'],
        explanation: '≈ 50 · 3 ÷ 0.5 = 150 ÷ 0.5 = 300.', hint: 'Every number to 1 significant figure.',
        whyWrong: [null, 'Dividing by 0.5 doubles the number, it does not make it smaller.', 'It was multiplied by 0.5 instead of divided.', 'One zero too many.'],
      },
      de: {
        question: 'Welcher Überschlag passt am besten zu 49,8 · 3,04 : 0,51?', options: ['300', '30', '75', '3 000'],
        explanation: '≈ 50 · 3 : 0,5 = 150 : 0,5 = 300.', hint: 'Jede Zahl auf 1 geltende Ziffer.',
        whyWrong: [null, 'Die Division durch 0,5 verdoppelt, sie verkleinert nicht.', 'Es wurde mit 0,5 multipliziert statt dividiert.', 'Eine Null zu viel.'],
      },
    },
    {
      id: 4, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: 'text',
      al: { question: 'Numri 0,0503 ka 4 shifra domethënëse.', explanation: 'E gabuar: zerot në fillim nuk numërohen; 5, 0, 3 → 3 shifra domethënëse.', hint: 'Filloni nga shifra e parë jo zero.', whyWrong: 'Zeroja midis 5 dhe 3 numërohet, ato në fillim jo: 3 shifra.' },
      en: { question: 'The number 0.0503 has 4 significant figures.', explanation: 'False: leading zeros do not count; 5, 0, 3 → 3 significant figures.', hint: 'Start at the first non-zero digit.', whyWrong: 'The zero between 5 and 3 counts, the leading ones do not: 3 figures.' },
      de: { question: 'Die Zahl 0,0503 hat 4 geltende Ziffern.', explanation: 'Falsch: Führende Nullen zählen nicht; 5, 0, 3 → 3 geltende Ziffern.', hint: 'Beginnen Sie bei der ersten Ziffer ≠ 0.', whyWrong: 'Die Null zwischen 5 und 3 zählt, die führenden nicht: 3 Ziffern.' },
    },
    {
      id: 5, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['(4.8 + 3.6) / (2.1 * 0.5)', 8],
      al: {
        question: 'Sa është (4,8 + 3,6) / (2,1 · 0,5)?', options: ['5,66', '8,4', '1,05', '8'],
        explanation: '8,4 : 1,05 = 8.', hint: 'Numëruesi dhe emëruesi në kllapa.',
        whyWrong: ['Kjo del pa kllapa: 4,8 + 3,6 : 2,1 · 0,5.', 'Ky është vetëm numëruesi.', 'Ky është vetëm emëruesi.', null],
      },
      en: {
        question: 'What is (4.8 + 3.6) / (2.1 · 0.5)?', options: ['5.66', '8.4', '1.05', '8'],
        explanation: '8.4 ÷ 1.05 = 8.', hint: 'Numerator and denominator in brackets.',
        whyWrong: ['That comes from no brackets: 4.8 + 3.6 ÷ 2.1 · 0.5.', 'That is only the numerator.', 'That is only the denominator.', null],
      },
      de: {
        question: 'Wie viel ist (4,8 + 3,6) / (2,1 · 0,5)?', options: ['5,66', '8,4', '1,05', '8'],
        explanation: '8,4 : 1,05 = 8.', hint: 'Zähler und Nenner in Klammern.',
        whyWrong: ['Das ergibt sich ohne Klammern: 4,8 + 3,6 : 2,1 · 0,5.', 'Das ist nur der Zähler.', 'Das ist nur der Nenner.', null],
      },
    },
    {
      id: 6, type: 'input', difficulty: 'medium', answer: { value: 245 }, unit: 'g',
      verify: ['250 - 5', 245],
      al: { question: 'Masa 250 g është rrumbullakuar në 10 g më të afërt. Sa është kufiri i poshtëm?', explanation: 'Gjysma e 10 g është 5 g: 250 − 5 = 245 g.', hint: 'Gjysma e njësisë së rrumbullakimit.', commonMistakes: [{ value: 240, why: 'U zbrit e gjithë njësia (10 g), jo gjysma.' }, { value: 249, why: 'Njësia është 10 g, jo 1 g.' }] },
      en: { question: 'A mass of 250 g is rounded to the nearest 10 g. What is the lower bound?', explanation: 'Half of 10 g is 5 g: 250 − 5 = 245 g.', hint: 'Half of the rounding unit.', commonMistakes: [{ value: 240, why: 'The whole unit (10 g) was subtracted, not half of it.' }, { value: 249, why: 'The unit is 10 g, not 1 g.' }] },
      de: { question: 'Eine Masse von 250 g ist auf 10 g gerundet. Wie groß ist die untere Schranke?', explanation: 'Die Hälfte von 10 g ist 5 g: 250 − 5 = 245 g.', hint: 'Die halbe Rundungseinheit.', commonMistakes: [{ value: 240, why: 'Es wurde die ganze Einheit (10 g) abgezogen statt der Hälfte.' }, { value: 249, why: 'Die Einheit ist 10 g, nicht 1 g.' }] },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['6.4 - 0.05', 6.35],
      al: {
        question: 'Gjatësia l = 6,4 cm është rrumbullakuar në 1 dhjetore. Cili është intervali i saj?', options: ['6,3 ≤ l < 6,5', '6,35 ≤ l < 6,45', '6,35 ≤ l ≤ 6,44', '6,4 ≤ l < 6,5'],
        explanation: 'Gjysma e 0,1 është 0,05: 6,35 ≤ l < 6,45.', hint: '6,4 ± 0,05.',
        whyWrong: ['U mor e gjithë njësia 0,1 në vend të gjysmës.', null, 'Vlerat midis 6,44 dhe 6,45 (p.sh. 6,447) mbeten jashtë.', 'Vlerat nën 6,4 si 6,38 rrumbullakohen gjithashtu në 6,4.'],
      },
      en: {
        question: 'A length l = 6.4 cm has been rounded to 1 decimal place. What is its interval?', options: ['6.3 ≤ l < 6.5', '6.35 ≤ l < 6.45', '6.35 ≤ l ≤ 6.44', '6.4 ≤ l < 6.5'],
        explanation: 'Half of 0.1 is 0.05: 6.35 ≤ l < 6.45.', hint: '6.4 ± 0.05.',
        whyWrong: ['The whole unit 0.1 was used instead of half of it.', null, 'Values between 6.44 and 6.45 (e.g. 6.447) are left out.', 'Values below 6.4 such as 6.38 also round to 6.4.'],
      },
      de: {
        question: 'Eine Länge l = 6,4 cm ist auf 1 Dezimalstelle gerundet. In welchem Intervall liegt sie?', options: ['6,3 ≤ l < 6,5', '6,35 ≤ l < 6,45', '6,35 ≤ l ≤ 6,44', '6,4 ≤ l < 6,5'],
        explanation: 'Die Hälfte von 0,1 ist 0,05: 6,35 ≤ l < 6,45.', hint: '6,4 ± 0,05.',
        whyWrong: ['Es wurde die ganze Einheit 0,1 statt der Hälfte genommen.', null, 'Werte zwischen 6,44 und 6,45 (z. B. 6,447) fehlen.', 'Auch Werte unter 6,4 wie 6,38 werden auf 6,4 gerundet.'],
      },
    },
    {
      id: 8, type: 'choice', difficulty: 'hard', correct: 2,
      verify: ['8.5 * 5.5', 46.75],
      al: {
        question: 'Drejtkëndëshi ka brinjët 8 cm dhe 5 cm (në cm më të afërt). Sa është kufiri i sipërm i syprinës?', options: ['40 cm²', '33,75 cm²', '46,75 cm²', '45 cm²'],
        explanation: '8,5 · 5,5 = 46,75 cm².', hint: 'Të dy kufijtë e sipërm.',
        whyWrong: ['Kjo është syprina me vlerat e rrumbullakuara.', 'Ky është kufiri i poshtëm: 7,5 · 4,5.', null, 'Kjo është 9 · 5: njërës brinjë iu shtua 1 cm, tjetrës asgjë.'],
      },
      en: {
        question: 'A rectangle has sides 8 cm and 5 cm (to the nearest cm). What is the upper bound of the area?', options: ['40 cm²', '33.75 cm²', '46.75 cm²', '45 cm²'],
        explanation: '8.5 · 5.5 = 46.75 cm².', hint: 'Both upper bounds.',
        whyWrong: ['That is the area from the rounded values.', 'That is the lower bound: 7.5 · 4.5.', null, 'That is 9 · 5: 1 cm was added to one side and nothing to the other.'],
      },
      de: {
        question: 'Ein Rechteck hat die Seiten 8 cm und 5 cm (auf ganze cm gerundet). Wie groß ist die obere Schranke des Flächeninhalts?', options: ['40 cm²', '33,75 cm²', '46,75 cm²', '45 cm²'],
        explanation: '8,5 · 5,5 = 46,75 cm².', hint: 'Beide oberen Schranken.',
        whyWrong: ['Das ist der Flächeninhalt mit den gerundeten Werten.', 'Das ist die untere Schranke: 7,5 · 4,5.', null, 'Das ist 9 · 5: Eine Seite bekam 1 cm dazu, die andere nichts.'],
      },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: true,
      verify: ['12.5 - 6.5 == 6', true],
      al: { question: 'a = 12 dhe b = 7, të dyja në njësi më të afërt. Kufiri i sipërm i a − b është 6.', explanation: 'E vërtetë: a i sipërm 12,5 minus b i poshtëm 6,5 = 6.', hint: 'Ndryshimi më i madh.', whyWrong: '12,5 − 6,5 = 6.' },
      en: { question: 'a = 12 and b = 7, both to the nearest whole number. The upper bound of a − b is 6.', explanation: 'True: upper a 12.5 minus lower b 6.5 = 6.', hint: 'The largest difference.', whyWrong: '12.5 − 6.5 = 6.' },
      de: { question: 'a = 12 und b = 7, beide auf ganze Zahlen gerundet. Die obere Schranke von a − b ist 6.', explanation: 'Richtig: a oben 12,5 minus b unten 6,5 = 6.', hint: 'Die größte Differenz.', whyWrong: '12,5 − 6,5 = 6.' },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 8.01, tolerance: 0.005 }, unit: 'm/s',
      verify: ['100.5 / 12.55', 8.01, 0.005],
      al: { question: 'Një vrapues bën 100 m (në metër më të afërt) për 12,6 s (në 0,1 s më të afërt). Sa është kufiri i sipërm i shpejtësisë, në 2 dhjetore?', explanation: '100,5 : 12,55 ≈ 8,01 m/s.', hint: 'Rruga e sipërme, koha e poshtme.', commonMistakes: [{ value: 7.94, why: 'U mor koha e sipërme 12,65 s.' }, { value: 7.97, why: 'U përdor 100 m në vend të 100,5 m.' }] },
      en: { question: 'A runner covers 100 m (to the nearest metre) in 12.6 s (to the nearest 0.1 s). What is the upper bound of the speed, to 2 decimal places?', explanation: '100.5 ÷ 12.55 ≈ 8.01 m/s.', hint: 'Upper distance, lower time.', commonMistakes: [{ value: 7.94, why: 'The upper time 12.65 s was used.' }, { value: 7.97, why: '100 m was used instead of 100.5 m.' }] },
      de: { question: 'Ein Läufer schafft 100 m (auf ganze m gerundet) in 12,6 s (auf 0,1 s gerundet). Wie groß ist die obere Schranke der Geschwindigkeit auf 2 Dezimalstellen?', explanation: '100,5 : 12,55 ≈ 8,01 m/s.', hint: 'Strecke oben, Zeit unten.', commonMistakes: [{ value: 7.94, why: 'Es wurde die obere Zeit 12,65 s genommen.' }, { value: 7.97, why: 'Es wurde 100 m statt 100,5 m genommen.' }] },
    },
  ],
};
