// Grade 7 · Theme 12 quiz: Statistics and probability (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g7-statistics-probability-quiz',
  grade: 7,
  theme: 'g7-statistics-probability',
  order: 12,
  difficulty: 'beginner',
  icon: '🎲',
  color: '#FB8500',
  i18n: {
    al: { title: 'Statistika dhe probabiliteti', category: 'Klasa 7 · Tema 12', duration: '10 min' },
    en: { title: 'Statistics and probability', category: 'Grade 7 · Theme 12', duration: '10 min' },
    de: { title: 'Statistik und Wahrscheinlichkeit', category: 'Klasse 7 · Thema 12', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['3 / 8', '3/8', 1e-9, '3/8'],
      al: {
        question: 'Në qese ka 3 topa të kuq dhe 5 blu. Sa është probabiliteti të nxirret një top i kuq?', options: ['3/8', '3/5', '5/8', '1/3'],
        explanation: '3 të favorshëm nga 8 gjithsej: P = 3/8.', hint: 'Pjesëtoni me numrin e të gjithë topave.',
        whyWrong: [null, 'Pjesëtuat të kuqtë me blutë; duhet me të gjithë topat.', 'Kjo është P(blu).', 'Nuk ka 9 topa; janë 8.'],
      },
      en: {
        question: 'A bag has 3 red and 5 blue balls. What is the probability of drawing a red ball?', options: ['3/8', '3/5', '5/8', '1/3'],
        explanation: '3 favourable out of 8 in total: P = 3/8.', hint: 'Divide by the number of all balls.',
        whyWrong: [null, 'You divided red by blue; divide by all the balls.', 'That is P(blue).', 'There are not 9 balls; there are 8.'],
      },
      de: {
        question: 'Ein Beutel enthält 3 rote und 5 blaue Kugeln. Wie groß ist die Wahrscheinlichkeit, eine rote zu ziehen?', options: ['3/8', '3/5', '5/8', '1/3'],
        explanation: '3 günstige von insgesamt 8: P = 3/8.', hint: 'Durch die Anzahl aller Kugeln teilen.',
        whyWrong: [null, 'Sie haben rot durch blau geteilt; durch alle Kugeln teilen.', 'Das ist P(blau).', 'Es sind nicht 9 Kugeln, sondern 8.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 144 },
      verify: ['12 / 30 * 360', 144],
      al: { question: '12 nga 30 nxënës zgjodhën futbollin. Sa gradë është pjesa e tyre në diagramin rrethor?', explanation: '12 : 30 · 360° = 144°.', hint: 'Këndi = denduria : gjithsej · 360°.', unit: '°', commonMistakes: [{ value: 40, why: 'Kjo është përqindja; rrethi ka 360°.' }] },
      en: { question: '12 of 30 students chose football. How many degrees is their sector in the pie chart?', explanation: '12 ÷ 30 · 360° = 144°.', hint: 'Angle = frequency ÷ total · 360°.', unit: '°', commonMistakes: [{ value: 40, why: 'That is the percentage; a circle has 360°.' }] },
      de: { question: '12 von 30 Schülern wählten Fußball. Wie viel Grad hat ihr Ausschnitt im Kreisdiagramm?', explanation: '12 : 30 · 360° = 144°.', hint: 'Winkel = Häufigkeit : Gesamtzahl · 360°.', unit: '°', commonMistakes: [{ value: 40, why: 'Das ist der Prozentsatz; ein Kreis hat 360°.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['3 / 6 == 1 / 2', true],
      al: { question: 'Kur hidhet zari, probabiliteti për numër çift është 1/2.', explanation: 'E vërtetë: 2, 4, 6 janë 3 nga 6 rezultate, 3/6 = 1/2.', hint: 'Numëroni numrat çift në zar.', whyWrong: '3 rezultate të favorshme nga 6, pra 1/2.' },
      en: { question: 'When a die is rolled, the probability of an even number is 1/2.', explanation: 'True: 2, 4, 6 are 3 of the 6 outcomes, 3/6 = 1/2.', hint: 'Count the even numbers on a die.', whyWrong: '3 favourable outcomes out of 6, so 1/2.' },
      de: { question: 'Beim Würfeln ist die Wahrscheinlichkeit für eine gerade Zahl 1/2.', explanation: 'Richtig: 2, 4, 6 sind 3 von 6 Ergebnissen, 3/6 = 1/2.', hint: 'Zählen Sie die geraden Zahlen auf dem Würfel.', whyWrong: '3 günstige von 6 Ergebnissen, also 1/2.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['8 / 20 * 100', 40],
      al: {
        question: '8 nga 20 nxënës kanë notën 4. Sa është denduria relative?', options: ['8%', '4%', '40%', '0,8'],
        explanation: '8 : 20 = 0,4 = 40%.', hint: 'Denduria relative = denduria : gjithsej.',
        whyWrong: ['8 është denduria absolute, jo përqindja.', '4 është nota, jo denduria.', null, '8 : 20 = 0,4, jo 0,8.'],
      },
      en: {
        question: '8 out of 20 students got a 4. What is the relative frequency?', options: ['8%', '4%', '40%', '0.8'],
        explanation: '8 ÷ 20 = 0.4 = 40%.', hint: 'Relative frequency = frequency ÷ total.',
        whyWrong: ['8 is the frequency, not the percentage.', '4 is the mark, not the frequency.', null, '8 ÷ 20 = 0.4, not 0.8.'],
      },
      de: {
        question: '8 von 20 Schülern haben die Note 4. Wie groß ist die relative Häufigkeit?', options: ['8 %', '4 %', '40 %', '0,8'],
        explanation: '8 : 20 = 0,4 = 40 %.', hint: 'Relative Häufigkeit = absolute Häufigkeit : Gesamtzahl.',
        whyWrong: ['8 ist die absolute Häufigkeit, nicht der Prozentsatz.', '4 ist die Note, nicht die Häufigkeit.', null, '8 : 20 = 0,4, nicht 0,8.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 3.65 },
      verify: ['(2*3 + 3*5 + 4*8 + 5*4) / 20', 3.65],
      visual: {
        type: 'valueTable',
        rows: [
          { head: { al: 'Nota', en: 'Mark', de: 'Note' }, cells: ['2', '3', '4', '5'] },
          { head: { al: 'Denduria', en: 'Frequency', de: 'Häufigkeit' }, cells: ['3', '5', '8', '4'] },
        ],
        alt: { al: 'Tabela: nota 2 – 3 herë, 3 – 5 herë, 4 – 8 herë, 5 – 4 herë.', en: 'Table: mark 2 – 3 times, 3 – 5 times, 4 – 8 times, 5 – 4 times.', de: 'Tabelle: Note 2 – 3-mal, 3 – 5-mal, 4 – 8-mal, 5 – 4-mal.' },
      },
      al: { question: 'Sa është nota mesatare e këtyre 20 nxënësve?', explanation: '(6 + 15 + 32 + 20) : 20 = 73 : 20 = 3,65.', hint: 'Shumëzoni çdo notë me dendurinë e saj.', commonMistakes: [{ value: 3.5, why: 'Morët mesataren e notave pa dendurit.' }] },
      en: { question: 'What is the mean mark of these 20 students?', explanation: '(6 + 15 + 32 + 20) ÷ 20 = 73 ÷ 20 = 3.65.', hint: 'Multiply each mark by its frequency.', commonMistakes: [{ value: 3.5, why: 'You averaged the marks without the frequencies.' }] },
      de: { question: 'Wie groß ist die Durchschnittsnote dieser 20 Schüler?', explanation: '(6 + 15 + 32 + 20) : 20 = 73 : 20 = 3,65.', hint: 'Jede Note mit ihrer Häufigkeit multiplizieren.', commonMistakes: [{ value: 3.5, why: 'Sie haben die Noten ohne Häufigkeiten gemittelt.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['90 / 360 * 40', 10],
      al: {
        question: 'Në diagramin rrethor të 40 nxënësve një pjesë ka 90°. Sa nxënës janë?', options: ['90', '4', '25', '10'],
        explanation: '90° është 1/4 e rrethit: 40 : 4 = 10 nxënës.', hint: 'Çfarë pjese të 360° zë 90°?',
        whyWrong: ['90 është këndi, jo numri i nxënësve.', 'Pjesëtuat 40 me 10 në vend të 4.', '25% është pjesa, jo numri i nxënësve.', null],
      },
      en: {
        question: 'In a pie chart of 40 students one sector is 90°. How many students is that?', options: ['90', '4', '25', '10'],
        explanation: '90° is 1/4 of the circle: 40 ÷ 4 = 10 students.', hint: 'What part of 360° is 90°?',
        whyWrong: ['90 is the angle, not the number of students.', 'You divided 40 by 10 instead of 4.', '25% is the share, not the number of students.', null],
      },
      de: {
        question: 'In einem Kreisdiagramm von 40 Schülern hat ein Ausschnitt 90°. Wie viele Schüler sind das?', options: ['90', '4', '25', '10'],
        explanation: '90° ist 1/4 des Kreises: 40 : 4 = 10 Schüler.', hint: 'Welcher Teil von 360° sind 90°?',
        whyWrong: ['90 ist der Winkel, nicht die Schülerzahl.', 'Sie haben 40 durch 10 statt durch 4 geteilt.', '25 % ist der Anteil, nicht die Schülerzahl.', null],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['1 / 2 == 28 / 50', false],
      al: { question: 'Monedha u hodh 50 herë dhe "stema" ra 28 herë, prandaj probabiliteti teorik i "stemës" është 0,56.', explanation: 'E gabuar: 0,56 është denduria relative e eksperimentit; probabiliteti teorik është 1/2.', hint: 'Dalloni eksperimentin nga teoria.', whyWrong: 'Teorikisht P = 1/2; 28/50 = 0,56 është vetëm rezultati i këtij eksperimenti.' },
      en: { question: 'A coin was tossed 50 times and landed heads 28 times, so the theoretical probability of heads is 0.56.', explanation: 'False: 0.56 is the relative frequency of the experiment; the theoretical probability is 1/2.', hint: 'Tell the experiment apart from the theory.', whyWrong: 'In theory P = 1/2; 28/50 = 0.56 is only the result of this experiment.' },
      de: { question: 'Eine Münze wurde 50-mal geworfen und zeigte 28-mal Kopf, also ist die Wahrscheinlichkeit für Kopf 0,56.', explanation: 'Falsch: 0,56 ist die relative Häufigkeit des Versuchs; die Wahrscheinlichkeit ist 1/2.', hint: 'Unterscheiden Sie Versuch und Theorie.', whyWrong: 'Theoretisch ist P = 1/2; 28/50 = 0,56 ist nur das Ergebnis dieses Versuchs.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['2 / 6', '1/3', 1e-9, '1/3'],
      al: {
        question: 'Hidhet zari. Sa është probabiliteti për numër më të madh se 4?', options: ['1/6', '1/3', '2/3', '1/2'],
        explanation: '5 dhe 6: 2 nga 6, P = 2/6 = 1/3.', hint: 'Cilët numra janë më të mëdhenj se 4?',
        whyWrong: ['Janë dy numra të favorshëm (5 dhe 6), jo një.', null, 'Kjo është P(numër ≤ 4).', 'Kjo do të vlente për 3 numra të favorshëm.'],
      },
      en: {
        question: 'A die is rolled. What is the probability of a number greater than 4?', options: ['1/6', '1/3', '2/3', '1/2'],
        explanation: '5 and 6: 2 out of 6, P = 2/6 = 1/3.', hint: 'Which numbers are greater than 4?',
        whyWrong: ['There are two favourable numbers (5 and 6), not one.', null, 'That is P(number ≤ 4).', 'That would be right for 3 favourable numbers.'],
      },
      de: {
        question: 'Ein Würfel wird geworfen. Wie groß ist die Wahrscheinlichkeit für eine Zahl größer als 4?', options: ['1/6', '1/3', '2/3', '1/2'],
        explanation: '5 und 6: 2 von 6, P = 2/6 = 1/3.', hint: 'Welche Zahlen sind größer als 4?',
        whyWrong: ['Es gibt zwei günstige Zahlen (5 und 6), nicht eine.', null, 'Das ist P(Zahl ≤ 4).', 'Das gilt für 3 günstige Zahlen.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 6 },
      verify: ['72 / 360 * 30', 6],
      al: { question: 'Në diagramin rrethor të 30 nxënësve volejbolli ka 72°. Sa nxënës zgjodhën volejbollin?', explanation: '72 : 360 = 0,2; 0,2 · 30 = 6 nxënës.', hint: 'Fillimisht gjeni pjesën e rrethit.', commonMistakes: [{ value: 20, why: '20% është pjesa; numri i nxënësve është 6.' }] },
      en: { question: 'In a pie chart of 30 students volleyball has 72°. How many students chose volleyball?', explanation: '72 ÷ 360 = 0.2; 0.2 · 30 = 6 students.', hint: 'First find the share of the circle.', commonMistakes: [{ value: 20, why: '20% is the share; the number of students is 6.' }] },
      de: { question: 'In einem Kreisdiagramm von 30 Schülern hat Volleyball 72°. Wie viele Schüler wählten Volleyball?', explanation: '72 : 360 = 0,2; 0,2 · 30 = 6 Schüler.', hint: 'Zuerst den Anteil am Kreis bestimmen.', commonMistakes: [{ value: 20, why: '20 % ist der Anteil; die Schülerzahl ist 6.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 10 },
      verify: ['60 / 6', 10],
      al: { question: 'Një zar hidhet 60 herë. Sa herë pritet teorikisht të bjerë 6?', explanation: 'P(6) = 1/6; 60 · 1/6 = 10 herë.', hint: 'Numri i hedhjeve · probabiliteti.', commonMistakes: [{ value: 6, why: '6 është numri në zar, jo sa herë pritet.' }] },
      en: { question: 'A die is rolled 60 times. How many times is a 6 expected in theory?', explanation: 'P(6) = 1/6; 60 · 1/6 = 10 times.', hint: 'Number of rolls · probability.', commonMistakes: [{ value: 6, why: '6 is the number on the die, not how often it is expected.' }] },
      de: { question: 'Ein Würfel wird 60-mal geworfen. Wie oft erwartet man theoretisch eine 6?', explanation: 'P(6) = 1/6; 60 · 1/6 = 10-mal.', hint: 'Anzahl der Würfe · Wahrscheinlichkeit.', commonMistakes: [{ value: 6, why: '6 ist die Augenzahl, nicht die erwartete Anzahl.' }] },
    },
  ],
};
