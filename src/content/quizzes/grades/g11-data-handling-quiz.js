// Grade 11 · Theme 4 quiz: Data handling (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g11-data-handling-quiz',
  grade: 11,
  theme: 'g11-data-handling',
  order: 4,
  difficulty: 'advanced',
  icon: '📊',
  color: '#FB8500',
  i18n: {
    al: { title: 'Përpunimi i të dhënave', category: 'Klasa 11 · Tema 4', duration: '12 min' },
    en: { title: 'Data handling', category: 'Grade 11 · Theme 4', duration: '12 min' },
    de: { title: 'Daten auswerten', category: 'Klasse 11 · Thema 4', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['median(3, 5, 7, 8, 10, 12, 15)', 8],
      al: {
        question: 'Sa është mediana e 3, 5, 7, 8, 10, 12, 15?', options: ['7', '8', '10', '8,57'],
        explanation: '7 vlera: e 4-ta është 8.', hint: 'Vlera e mesit.',
        whyWrong: ['Kjo është vlera e 3-të, jo e mesit.', null, 'Kjo është vlera e 5-të.', 'Kjo është mesatarja 60 : 7.'],
      },
      en: {
        question: 'What is the median of 3, 5, 7, 8, 10, 12, 15?', options: ['7', '8', '10', '8.57'],
        explanation: '7 values: the 4th is 8.', hint: 'The middle value.',
        whyWrong: ['That is the 3rd value, not the middle one.', null, 'That is the 5th value.', 'That is the mean 60 ÷ 7.'],
      },
      de: {
        question: 'Wie groß ist der Median von 3, 5, 7, 8, 10, 12, 15?', options: ['7', '8', '10', '8,57'],
        explanation: '7 Werte: Der 4. ist 8.', hint: 'Der mittlere Wert.',
        whyWrong: ['Das ist der 3. Wert, nicht der mittlere.', null, 'Das ist der 5. Wert.', 'Das ist der Mittelwert 60 : 7.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 7 },
      verify: ['12 - 5', 7],
      al: { question: 'Për 3, 5, 7, 8, 10, 12, 15 kemi Q1 = 5 dhe Q3 = 12. Sa është gjerësia ndërkuartile?', explanation: 'GJNK = Q3 − Q1 = 12 − 5 = 7.', hint: 'Q3 − Q1.', commonMistakes: [{ value: 12, why: 'Kjo është gjerësia maks − min.' }, { value: 17, why: 'Kuartilet u mblodhën.' }] },
      en: { question: 'For 3, 5, 7, 8, 10, 12, 15, Q1 = 5 and Q3 = 12. What is the interquartile range?', explanation: 'IQR = Q3 − Q1 = 12 − 5 = 7.', hint: 'Q3 − Q1.', commonMistakes: [{ value: 12, why: 'That is the range max − min.' }, { value: 17, why: 'The quartiles were added.' }] },
      de: { question: 'Für 3, 5, 7, 8, 10, 12, 15 ist Q1 = 5 und Q3 = 12. Wie groß ist der Quartilsabstand?', explanation: 'IQR = Q3 − Q1 = 12 − 5 = 7.', hint: 'Q3 − Q1.', commonMistakes: [{ value: 12, why: 'Das ist die Spannweite Max − Min.' }, { value: 17, why: 'Die Quartile wurden addiert.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Nëse notat priren të rriten kur rriten orët e studimit, korrelacioni është pozitiv.', explanation: 'E vërtetë: të dyja madhësitë rriten bashkë.', hint: 'Në cilin drejtim shkojnë pikat?', whyWrong: 'Pikat ngjiten → korrelacion pozitiv.' },
      en: { question: 'If marks tend to rise as hours of study rise, the correlation is positive.', explanation: 'True: both quantities go up together.', hint: 'Which way do the points go?', whyWrong: 'Points go up → positive correlation.' },
      de: { question: 'Wenn die Ergebnisse mit den Lernstunden tendenziell steigen, ist die Korrelation positiv.', explanation: 'Richtig: Beide Größen steigen gemeinsam.', hint: 'In welche Richtung gehen die Punkte?', whyWrong: 'Punkte steigen → positive Korrelation.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['(0*3 + 1*5 + 2*6 + 3*4 + 4*2) / 20', 1.85],
      al: {
        question: 'Golat 0, 1, 2, 3, 4 kanë denduritë 3, 5, 6, 4, 2. Sa është mesatarja e golave?', options: ['1,85', '7,4', '2', '4'],
        explanation: 'Σ(x · f) = 37, Σf = 20 → 37 : 20 = 1,85.', hint: 'Σ(x · f) : Σf.',
        whyWrong: [null, 'U pjesëtua me 5 rreshta në vend të 20 vlerave.', 'Kjo është moda (dhe mediana), jo mesatarja.', 'Kjo është 20 : 5, mesatarja e dendurive.'],
      },
      en: {
        question: 'Goals 0, 1, 2, 3, 4 have frequencies 3, 5, 6, 4, 2. What is the mean number of goals?', options: ['1.85', '7.4', '2', '4'],
        explanation: 'Σ(x · f) = 37, Σf = 20 → 37 ÷ 20 = 1.85.', hint: 'Σ(x · f) ÷ Σf.',
        whyWrong: [null, 'It was divided by 5 rows instead of 20 values.', 'That is the mode (and median), not the mean.', 'That is 20 ÷ 5, the mean of the frequencies.'],
      },
      de: {
        question: 'Die Torzahlen 0, 1, 2, 3, 4 haben die Häufigkeiten 3, 5, 6, 4, 2. Wie groß ist der Mittelwert der Tore?', options: ['1,85', '7,4', '2', '4'],
        explanation: 'Σ(x · h) = 37, Σh = 20 → 37 : 20 = 1,85.', hint: 'Σ(x · h) : Σh.',
        whyWrong: [null, 'Es wurde durch 5 Zeilen statt 20 Werte geteilt.', 'Das ist der Modalwert (und Median), nicht der Mittelwert.', 'Das ist 20 : 5, der Mittelwert der Häufigkeiten.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 16 }, unit: 'min',
      verify: ['(5*4 + 15*10 + 25*6) / 20', 16],
      al: { question: 'Kohët: 0–10 min (4 nxënës), 10–20 min (10), 20–30 min (6). Vlerësoni mesataren.', explanation: '(5 · 4 + 15 · 10 + 25 · 6) : 20 = 320 : 20 = 16 min.', hint: 'Përdorni mesin e çdo klase.', commonMistakes: [{ value: 21, why: 'U përdorën kufijtë e sipërm 10, 20, 30.' }, { value: 11, why: 'U përdorën kufijtë e poshtëm 0, 10, 20.' }] },
      en: { question: 'Times: 0–10 min (4 students), 10–20 min (10), 20–30 min (6). Estimate the mean.', explanation: '(5 · 4 + 15 · 10 + 25 · 6) ÷ 20 = 320 ÷ 20 = 16 min.', hint: 'Use the midpoint of each class.', commonMistakes: [{ value: 21, why: 'The upper boundaries 10, 20, 30 were used.' }, { value: 11, why: 'The lower boundaries 0, 10, 20 were used.' }] },
      de: { question: 'Zeiten: 0–10 min (4 Lernende), 10–20 min (10), 20–30 min (6). Schätzen Sie den Mittelwert.', explanation: '(5 · 4 + 15 · 10 + 25 · 6) : 20 = 320 : 20 = 16 min.', hint: 'Die Klassenmitten verwenden.', commonMistakes: [{ value: 21, why: 'Es wurden die oberen Grenzen 10, 20, 30 verwendet.' }, { value: 11, why: 'Es wurden die unteren Grenzen 0, 10, 20 verwendet.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['40 - 17', 23],
      al: {
        question: 'Nga 40 objekte, denduria e grumbulluar nën 40 g është 17. Sa objekte kanë masë mbi 40 g?', options: ['17', '18', '35', '23'],
        explanation: '40 − 17 = 23.', hint: 'Totali minus ata nën 40 g.',
        whyWrong: ['Këta janë ata nën 40 g.', 'Kjo është vetëm denduria e klasës 40–60.', 'Këta janë ata nën 60 g.', null],
      },
      en: {
        question: 'Of 40 objects, the cumulative frequency below 40 g is 17. How many have a mass above 40 g?', options: ['17', '18', '35', '23'],
        explanation: '40 − 17 = 23.', hint: 'The total minus those below 40 g.',
        whyWrong: ['Those are the ones below 40 g.', 'That is only the frequency of the 40–60 class.', 'Those are the ones below 60 g.', null],
      },
      de: {
        question: 'Von 40 Gegenständen haben laut Summenhäufigkeit 17 eine Masse unter 40 g. Wie viele haben eine Masse über 40 g?', options: ['17', '18', '35', '23'],
        explanation: '40 − 17 = 23.', hint: 'Gesamtzahl minus die unter 40 g.',
        whyWrong: ['Das sind die unter 40 g.', 'Das ist nur die Häufigkeit der Klasse 40–60.', 'Das sind die unter 60 g.', null],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['5 * 6.5 + 44', 76.5],
      al: {
        question: 'Drejtëza e përafrimit është y = 5x + 44 (x orë, y nota në %). Sa është nota e vlerësuar për 6,5 orë?', options: ['74', '252,5', '76,5', '50,5'],
        explanation: '5 · 6,5 + 44 = 32,5 + 44 = 76,5.', hint: 'Vendosni x = 6,5.',
        whyWrong: ['U vendos x = 6 në vend të 6,5.', 'U llogarit 5 · (6,5 + 44).', null, 'U harrua shumëzimi me 5.'],
      },
      en: {
        question: 'The line of best fit is y = 5x + 44 (x hours, y mark in %). What is the estimated mark for 6.5 hours?', options: ['74', '252.5', '76.5', '50.5'],
        explanation: '5 · 6.5 + 44 = 32.5 + 44 = 76.5.', hint: 'Put x = 6.5.',
        whyWrong: ['x = 6 was used instead of 6.5.', '5 · (6.5 + 44) was worked out.', null, 'The multiplication by 5 was forgotten.'],
      },
      de: {
        question: 'Die Ausgleichsgerade ist y = 5x + 44 (x Stunden, y Ergebnis in %). Welches Ergebnis schätzt man für 6,5 Stunden?', options: ['74', '252,5', '76,5', '50,5'],
        explanation: '5 · 6,5 + 44 = 32,5 + 44 = 76,5.', hint: 'x = 6,5 einsetzen.',
        whyWrong: ['Es wurde x = 6 statt 6,5 eingesetzt.', 'Es wurde 5 · (6,5 + 44) gerechnet.', null, 'Die Multiplikation mit 5 fehlt.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 31 },
      verify: ['(32 + 44 + 24 + 24) / 4', 31],
      al: { question: 'Shitjet tremujore janë 20, 32, 44, 24, 24, 36, … Sa është mesatarja e dytë lëvizëse me 4 vlera?', explanation: '(32 + 44 + 24 + 24) : 4 = 124 : 4 = 31.', hint: 'Zhvendosni dritaren me një vlerë.', commonMistakes: [{ value: 30, why: 'Kjo është mesatarja e parë lëvizëse.' }, { value: 33.33, why: 'U përdorën vetëm 3 vlera.' }] },
      en: { question: 'Quarterly sales are 20, 32, 44, 24, 24, 36, … What is the second 4-point moving average?', explanation: '(32 + 44 + 24 + 24) ÷ 4 = 124 ÷ 4 = 31.', hint: 'Move the window on by one value.', commonMistakes: [{ value: 30, why: 'That is the first moving average.' }, { value: 33.33, why: 'Only 3 values were used.' }] },
      de: { question: 'Die Quartalsumsätze sind 20, 32, 44, 24, 24, 36, … Wie groß ist der zweite gleitende Mittelwert über 4 Werte?', explanation: '(32 + 44 + 24 + 24) : 4 = 124 : 4 = 31.', hint: 'Das Fenster um einen Wert verschieben.', commonMistakes: [{ value: 30, why: 'Das ist der erste gleitende Mittelwert.' }, { value: 33.33, why: 'Es wurden nur 3 Werte verwendet.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: 'Shitjet e akullores dhe rastet e djegieve nga dielli kanë korrelacion të fortë pozitiv; pra akullorja shkakton djegie.', explanation: 'E gabuar: të dyja rriten për shkak të një faktori të tretë, motit me diell.', hint: 'Korrelacioni dhe shkaku.', whyWrong: 'Korrelacioni nuk provon shkakun.' },
      en: { question: 'Ice-cream sales and cases of sunburn are strongly positively correlated, so ice cream causes sunburn.', explanation: 'False: both rise because of a third factor, sunny weather.', hint: 'Correlation and cause.', whyWrong: 'Correlation does not prove cause.' },
      de: { question: 'Eisverkauf und Sonnenbrände sind stark positiv korreliert, also verursacht Eis Sonnenbrand.', explanation: 'Falsch: Beide steigen wegen eines dritten Faktors, des sonnigen Wetters.', hint: 'Korrelation und Ursache.', whyWrong: 'Korrelation beweist keine Ursache.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['(9 + 10) / 2 - (4 + 4) / 2', 5.5],
      al: {
        question: 'Sa është gjerësia ndërkuartile e 2, 4, 4, 6, 7, 9, 10, 12?', options: ['5,5', '10', '6,5', '5'],
        explanation: 'Q1 = (4 + 4) : 2 = 4, Q3 = (9 + 10) : 2 = 9,5 → GJNK = 5,5.', hint: 'Gjysma e poshtme 2, 4, 4, 6; e sipërmja 7, 9, 10, 12.',
        whyWrong: [null, 'Kjo është gjerësia 12 − 2.', 'Kjo është mediana.', 'U morën 9 dhe 4 si kuartile, pa mesataren e dy vlerave të mesit.'],
      },
      en: {
        question: 'What is the interquartile range of 2, 4, 4, 6, 7, 9, 10, 12?', options: ['5.5', '10', '6.5', '5'],
        explanation: 'Q1 = (4 + 4) ÷ 2 = 4, Q3 = (9 + 10) ÷ 2 = 9.5 → IQR = 5.5.', hint: 'Lower half 2, 4, 4, 6; upper half 7, 9, 10, 12.',
        whyWrong: [null, 'That is the range 12 − 2.', 'That is the median.', '9 and 4 were taken as quartiles, without averaging the two middle values.'],
      },
      de: {
        question: 'Wie groß ist der Quartilsabstand von 2, 4, 4, 6, 7, 9, 10, 12?', options: ['5,5', '10', '6,5', '5'],
        explanation: 'Q1 = (4 + 4) : 2 = 4, Q3 = (9 + 10) : 2 = 9,5 → IQR = 5,5.', hint: 'Untere Hälfte 2, 4, 4, 6; obere 7, 9, 10, 12.',
        whyWrong: [null, 'Das ist die Spannweite 12 − 2.', 'Das ist der Median.', 'Es wurden 9 und 4 als Quartile genommen, ohne die beiden mittleren Werte zu mitteln.'],
      },
    },
  ],
};
