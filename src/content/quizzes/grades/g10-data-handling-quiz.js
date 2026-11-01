// Grade 10 · Theme 4 quiz: Data handling (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-data-handling-quiz',
  grade: 10,
  theme: 'g10-data-handling',
  order: 4,
  difficulty: 'intermediate',
  icon: '📊',
  color: '#2A9D8F',
  i18n: {
    al: { title: 'Përpunimi i të dhënave', category: 'Klasa 10 · Tema 4', duration: '10 min' },
    en: { title: 'Data handling', category: 'Grade 10 · Theme 4', duration: '10 min' },
    de: { title: 'Daten auswerten', category: 'Klasse 10 · Thema 4', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['19 - 4', 15],
      al: {
        question: 'Sa është gjerësia (rangu) e të dhënave 12, 7, 19, 4, 15?', options: ['12', '15', '19', '11,4'],
        explanation: 'max − min = 19 − 4 = 15.', hint: 'Më e madhja minus më e vogla.',
        whyWrong: ['Kjo është mediana.', null, 'Kjo është vetëm vlera më e madhe.', 'Kjo është mesatarja.'],
      },
      en: {
        question: 'What is the range of the data 12, 7, 19, 4, 15?', options: ['12', '15', '19', '11.4'],
        explanation: 'max − min = 19 − 4 = 15.', hint: 'Largest minus smallest.',
        whyWrong: ['That is the median.', null, 'That is only the largest value.', 'That is the mean.'],
      },
      de: {
        question: 'Wie groß ist die Spannweite der Daten 12, 7, 19, 4, 15?', options: ['12', '15', '19', '11,4'],
        explanation: 'max − min = 19 − 4 = 15.', hint: 'Größter minus kleinster Wert.',
        whyWrong: ['Das ist der Median.', null, 'Das ist nur der größte Wert.', 'Das ist der Mittelwert.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 16 },
      verify: ['(5*4 + 15*10 + 25*6) / 20', 16],
      visual: {
        type: 'histogram', step: 2,
        bins: [{ from: 0, to: 10, count: 4 }, { from: 10, to: 20, count: 10 }, { from: 20, to: 30, count: 6 }],
        alt: { al: 'Histogram: 0–10 katër, 10–20 dhjetë, 20–30 gjashtë.', en: 'Histogram: 0–10 four, 10–20 ten, 20–30 six.', de: 'Histogramm: 0–10 vier, 10–20 zehn, 20–30 sechs.' },
      },
      al: { question: 'Vlerësoni mesataren nga klasat 0–10: 4, 10–20: 10, 20–30: 6.', explanation: '(5 · 4 + 15 · 10 + 25 · 6) : 20 = 16.', hint: 'Përdorni meset 5, 15, 25.', commonMistakes: [{ value: 6.67, why: 'Kjo është mesatarja e dendurive.' }, { value: 15, why: 'Kjo është vetëm mesi i klasës modale.' }] },
      en: { question: 'Estimate the mean from the classes 0–10: 4, 10–20: 10, 20–30: 6.', explanation: '(5 · 4 + 15 · 10 + 25 · 6) ÷ 20 = 16.', hint: 'Use the midpoints 5, 15, 25.', commonMistakes: [{ value: 6.67, why: 'That is the mean of the frequencies.' }, { value: 15, why: 'That is only the midpoint of the modal class.' }] },
      de: { question: 'Schätzen Sie den Mittelwert aus den Klassen 0–10: 4, 10–20: 10, 20–30: 6.', explanation: '(5 · 4 + 15 · 10 + 25 · 6) : 20 = 16.', hint: 'Die Mitten 5, 15, 25 verwenden.', commonMistakes: [{ value: 6.67, why: 'Das ist das Mittel der Häufigkeiten.' }, { value: 15, why: 'Das ist nur die Mitte der modalen Klasse.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Mediana e 12, 7, 19, 4, 15 është 12.', explanation: 'E vërtetë: e renditur 4, 7, 12, 15, 19; vlera e mesit 12.', hint: 'Renditni fillimisht.', whyWrong: 'Vlera e tretë nga pesë: 12.' },
      en: { question: 'The median of 12, 7, 19, 4, 15 is 12.', explanation: 'True: in order 4, 7, 12, 15, 19; the middle value is 12.', hint: 'Order the data first.', whyWrong: 'The third of five values: 12.' },
      de: { question: 'Der Median von 12, 7, 19, 4, 15 ist 12.', explanation: 'Richtig: geordnet 4, 7, 12, 15, 19; der mittlere Wert ist 12.', hint: 'Zuerst ordnen.', whyWrong: 'Der dritte von fünf Werten: 12.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: 'text',
      al: {
        question: 'Klasat 0–10, 10–20, 20–30 kanë dendurit 4, 10, 6. Cila është klasa modale?', options: ['0–10', '20–30', '10–20', '30–40'],
        explanation: 'Denduria më e madhe (10) është te 10–20.', hint: 'Klasa me f më të madhe.',
        whyWrong: ['Ka dendurinë më të vogël.', 'Ka dendurinë 6 < 10.', null, 'Kjo klasë nuk ekziston në tabelë.'],
      },
      en: {
        question: 'The classes 0–10, 10–20, 20–30 have frequencies 4, 10, 6. What is the modal class?', options: ['0–10', '20–30', '10–20', '30–40'],
        explanation: 'The highest frequency (10) is in 10–20.', hint: 'The class with the largest f.',
        whyWrong: ['It has the smallest frequency.', 'It has frequency 6 < 10.', null, 'That class is not in the table.'],
      },
      de: {
        question: 'Die Klassen 0–10, 10–20, 20–30 haben die Häufigkeiten 4, 10, 6. Welche ist die modale Klasse?', options: ['0–10', '20–30', '10–20', '30–40'],
        explanation: 'Die größte Häufigkeit (10) liegt bei 10–20.', hint: 'Die Klasse mit dem größten h.',
        whyWrong: ['Sie hat die kleinste Häufigkeit.', 'Sie hat die Häufigkeit 6 < 10.', null, 'Diese Klasse gibt es in der Tabelle nicht.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 11.4 },
      verify: ['(12 + 7 + 19 + 4 + 15) / 5', 11.4],
      al: { question: 'Sa është mesatarja e 12, 7, 19, 4, 15?', explanation: '57 : 5 = 11,4.', hint: 'Shuma : numri.', commonMistakes: [{ value: 12, why: 'Kjo është mediana.' }] },
      en: { question: 'What is the mean of 12, 7, 19, 4, 15?', explanation: '57 ÷ 5 = 11.4.', hint: 'Sum ÷ count.', commonMistakes: [{ value: 12, why: 'That is the median.' }] },
      de: { question: 'Wie groß ist der Mittelwert von 12, 7, 19, 4, 15?', explanation: '57 : 5 = 11,4.', hint: 'Summe : Anzahl.', commonMistakes: [{ value: 12, why: 'Das ist der Median.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['(8 + 9) / 2', 8.5],
      al: {
        question: 'Sa është mediana e 3, 8, 8, 9, 14, 20?', options: ['8,5', '8', '9', '10,3'],
        explanation: 'Dy vlerat e mesit 8 dhe 9: (8 + 9) : 2 = 8,5.', hint: 'Numër çift vlerash.',
        whyWrong: [null, 'Kjo është moda.', 'Kjo është vetëm njëra nga vlerat e mesit.', 'Kjo është mesatarja.'],
      },
      en: {
        question: 'What is the median of 3, 8, 8, 9, 14, 20?', options: ['8.5', '8', '9', '10.3'],
        explanation: 'The two middle values 8 and 9: (8 + 9) ÷ 2 = 8.5.', hint: 'An even number of values.',
        whyWrong: [null, 'That is the mode.', 'That is only one of the middle values.', 'That is the mean.'],
      },
      de: {
        question: 'Wie groß ist der Median von 3, 8, 8, 9, 14, 20?', options: ['8,5', '8', '9', '10,3'],
        explanation: 'Die beiden mittleren Werte 8 und 9: (8 + 9) : 2 = 8,5.', hint: 'Gerade Anzahl von Werten.',
        whyWrong: [null, 'Das ist der Modalwert.', 'Das ist nur einer der mittleren Werte.', 'Das ist der Mittelwert.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: 'text',
      al: { question: 'Gjerësia ndërkuartile ndikohet nga një vlerë shumë e madhe po aq sa gjerësia (rangu).', explanation: 'E gabuar: gjerësia ndërkuartile mat 50% e mesit dhe nuk ndikohet nga vlerat ekstreme; rangu po.', hint: 'Cila përdor max dhe min?', whyWrong: 'Q1 dhe Q3 ndryshojnë pak kur ndryshon vlera më e madhe.' },
      en: { question: 'The interquartile range is affected by one very large value just as much as the range.', explanation: 'False: the interquartile range measures the middle 50% and is not affected by extreme values; the range is.', hint: 'Which one uses max and min?', whyWrong: 'Q1 and Q3 hardly change when the largest value changes.' },
      de: { question: 'Der Quartilsabstand wird von einem sehr großen Wert genauso beeinflusst wie die Spannweite.', explanation: 'Falsch: Der Quartilsabstand misst die mittleren 50 % und ist unempfindlich gegen Ausreißer; die Spannweite nicht.', hint: 'Welche Größe nutzt max und min?', whyWrong: 'Q1 und Q3 ändern sich kaum, wenn der größte Wert sich ändert.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['7 / 16 * 100', 43.75],
      al: {
        question: 'Nga 16 vajza, 7 marrin sport (gjithsej 30 nxënës). Sa përqind e vajzave marrin sport?', options: ['7%', '23,3%', '53,3%', '43,75%'],
        explanation: '7/16 = 43,75%.', hint: 'E tëra është numri i vajzave.',
        whyWrong: ['7 është numri, jo përqindja.', 'Kjo është 7/30: e tëra e gabuar.', 'Kjo është 16/30.', null],
      },
      en: {
        question: 'Of 16 girls, 7 do sport (30 students in total). What percentage of the girls do sport?', options: ['7%', '23.3%', '53.3%', '43.75%'],
        explanation: '7/16 = 43.75%.', hint: 'The whole is the number of girls.',
        whyWrong: ['7 is the count, not the percentage.', 'That is 7/30: the wrong whole.', 'That is 16/30.', null],
      },
      de: {
        question: 'Von 16 Mädchen treiben 7 Sport (insgesamt 30 Schüler). Wie viel Prozent der Mädchen treiben Sport?', options: ['7 %', '23,3 %', '53,3 %', '43,75 %'],
        explanation: '7/16 = 43,75 %.', hint: 'Das Ganze ist die Zahl der Mädchen.',
        whyWrong: ['7 ist die Anzahl, nicht der Prozentsatz.', 'Das ist 7/30: das falsche Ganze.', 'Das ist 16/30.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 8 },
      verify: ['11 - 3', 8],
      al: { question: 'Sa është gjerësia ndërkuartile e 1, 3, 5, 7, 9, 11, 13?', explanation: 'Q1 = 3, Q3 = 11; 11 − 3 = 8.', hint: 'Medianat e gjysmave të poshtme dhe të sipërme.', commonMistakes: [{ value: 12, why: 'Ky është rangu.' }] },
      en: { question: 'What is the interquartile range of 1, 3, 5, 7, 9, 11, 13?', explanation: 'Q1 = 3, Q3 = 11; 11 − 3 = 8.', hint: 'The medians of the lower and upper halves.', commonMistakes: [{ value: 12, why: 'That is the range.' }] },
      de: { question: 'Wie groß ist der Quartilsabstand von 1, 3, 5, 7, 9, 11, 13?', explanation: 'Q1 = 3, Q3 = 11; 11 − 3 = 8.', hint: 'Mediane der unteren und oberen Hälfte.', commonMistakes: [{ value: 12, why: 'Das ist die Spannweite.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 192 },
      verify: ['16 / 30 * 360', 192],
      al: { question: '16 nga 30 nxënës marrin sport. Sa gradë do të ishte kjo pjesë në diagram rrethor?', explanation: '16/30 · 360° = 192°.', hint: 'Këndi = f/n · 360°.', unit: '°', commonMistakes: [{ value: 53.3, why: 'Kjo është përqindja.' }] },
      en: { question: '16 of 30 students do sport. How many degrees would this part be in a pie chart?', explanation: '16/30 · 360° = 192°.', hint: 'Angle = f/n · 360°.', unit: '°', commonMistakes: [{ value: 53.3, why: 'That is the percentage.' }] },
      de: { question: '16 von 30 Schülern treiben Sport. Wie viel Grad hätte dieser Anteil im Kreisdiagramm?', explanation: '16/30 · 360° = 192°.', hint: 'Winkel = h/n · 360°.', unit: '°', commonMistakes: [{ value: 53.3, why: 'Das ist der Prozentsatz.' }] },
    },
  ],
};
