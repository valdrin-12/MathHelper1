// Grade 8 · Theme 10: Statistics and probability (10 hours)
const alt = (al, en, de) => ({ al, en, de });

const TRANSPORT = [
  { label: alt('në këmbë', 'walk', 'zu Fuß'), value: 18 },
  { label: alt('autobus', 'bus', 'Bus'), value: 12 },
  { label: alt('veturë', 'car', 'Auto'), value: 6 },
  { label: alt('biçikletë', 'bike', 'Fahrrad'), value: 4 },
];

export default {
  id: 'g8-statistics-probability',
  i18n: {
    al: { title: 'Statistika dhe probabiliteti', description: 'Leximi i diagrameve, të dhënat e grupuara në klasa, diagramet me shtylla dhe rrethore, ngjarjet dhe probabiliteti.' },
    en: { title: 'Statistics and probability', description: 'Reading charts, grouped data, bar and pie charts, events and probability.' },
    de: { title: 'Statistik und Wahrscheinlichkeit', description: 'Diagramme lesen, klassierte Daten, Säulen- und Kreisdiagramme, Ereignisse und Wahrscheinlichkeit.' },
  },
  lessons: [
    // ───────── 1. Reading charts
    {
      slug: 'g8-statistics-probability-reading-charts',
      visuals: [{
        type: 'barChart', max: 60, step: 10, multiColor: true,
        bars: [
          { label: alt('Jan', 'Jan', 'Jan'), value: 40 },
          { label: alt('Shk', 'Feb', 'Feb'), value: 35 },
          { label: alt('Mar', 'Mar', 'Mär'), value: 50 },
          { label: alt('Pri', 'Apr', 'Apr'), value: 25 },
          { label: alt('Maj', 'May', 'Mai'), value: 30 },
        ],
        caption: alt('Librat e huazuar nga biblioteka e shkollës sipas muajve.', 'Books borrowed from the school library each month.', 'Aus der Schulbibliothek ausgeliehene Bücher pro Monat.'),
        alt: alt('Diagram me shtylla: janar 40, shkurt 35, mars 50, prill 25, maj 30 libra.', 'Bar chart: January 40, February 35, March 50, April 25, May 30 books.', 'Säulendiagramm: Januar 40, Februar 35, März 50, April 25, Mai 30 Bücher.'),
      }],
      answers: {
        examples: [[['50 - 25', 25]], [['40 + 35 + 50 + 25 + 30', 180], ['180 / 5', 36]]],
        practice: [[['50 / 180 * 100', 27.8, 0.05, '27.8']], [['3', 3]], [['40 / 5', 8], ['25 / 5', 5]]],
      },
      al: {
        title: 'Leximi i diagrameve',
        objectives: ['Të lexoni vlera, ndryshime dhe shuma nga një diagram me shtylla.', 'Të dalloni diagramet që mund të mashtrojnë.'],
        theory: 'Para se të lexoni një diagram, shikoni titullin, boshtet dhe njësitë, si dhe hapin e shkallës. Pastaj lexoni vlerat: lartësia e shtyllës tregon vlerën.\n\nNga vlerat mund të llogaritni ndryshime (sa më shumë), shuma, mesataren dhe përqindje: pjesa e një muaji në total = vlera : shuma · 100%.\n\nKujdes me diagramet mashtruese: nëse boshti vertikal nuk fillon nga 0, ndryshimet e vogla duken shumë të mëdha. Krahasoni gjithmonë vlerat, jo vetëm madhësinë e shtyllave.',
        keyPoints: ['Titulli, boshtet, njësitë, shkalla', 'Ndryshimi, shuma, mesatarja, përqindja', 'Boshti që nuk fillon nga 0 mund të mashtrojë'],
        examples: [
          { example: 'Sa më shumë libra u huazuan në mars se në prill?', solution: '50 − 25 = 25 libra.' },
          { example: 'Sa libra u huazuan gjithsej dhe sa është mesatarja mujore?', solution: '40 + 35 + 50 + 25 + 30 = 180; 180 : 5 = 36 libra në muaj.' },
        ],
        commonMistakes: [
          { mistake: 'Shtylla e marsit është dyfish më e lartë, pra vlera është dyfish.', fix: 'Krahasoni numrat: 50 nuk është dyfishi i 35. Shkalla mund të mos fillojë nga 0.' },
        ],
        practice: [
          { problem: 'Sa përqind e totalit u huazuan në mars?', solution: '≈ 27,8%', steps: ['50 : 180 ≈ 0,278.', '≈ 27,8%.'] },
          { problem: 'Në sa muaj u huazuan më pak libra se mesatarja 36?', solution: '3', steps: ['Shkurt 35, prill 25, maj 30.', '3 muaj.'] },
          { problem: 'Shkruani raportin janar : prill në trajtën më të thjeshtë.', solution: '8 : 5', steps: ['40 : 25.', 'Pjesëtojmë me 5: 8 : 5.'] },
        ],
      },
      en: {
        title: 'Reading charts',
        objectives: ['Read values, differences and totals from a bar chart.', 'Spot charts that can mislead.'],
        theory: 'Before reading a chart, look at the title, the axes and units, and the scale step. Then read the values: the height of a bar shows the value.\n\nFrom the values you can work out differences (how many more), totals, the mean and percentages: the share of one month in the total = value ÷ total · 100%.\n\nWatch out for misleading charts: if the vertical axis does not start at 0, small differences look very large. Always compare the values, not just the size of the bars.',
        keyPoints: ['Title, axes, units, scale', 'Difference, total, mean, percentage', 'An axis not starting at 0 can mislead'],
        examples: [
          { example: 'How many more books were borrowed in March than in April?', solution: '50 − 25 = 25 books.' },
          { example: 'How many books were borrowed in total, and what is the monthly mean?', solution: '40 + 35 + 50 + 25 + 30 = 180; 180 ÷ 5 = 36 books a month.' },
        ],
        commonMistakes: [
          { mistake: 'The March bar is twice as tall, so the value is twice as big.', fix: 'Compare the numbers: 50 is not twice 35. The scale may not start at 0.' },
        ],
        practice: [
          { problem: 'What percentage of the total was borrowed in March?', solution: '≈ 27.8%', steps: ['50 ÷ 180 ≈ 0.278.', '≈ 27.8%.'] },
          { problem: 'In how many months were fewer books borrowed than the mean of 36?', solution: '3', steps: ['February 35, April 25, May 30.', '3 months.'] },
          { problem: 'Write the ratio January : April in its simplest form.', solution: '8 : 5', steps: ['40 : 25.', 'Divide by 5: 8 : 5.'] },
        ],
      },
      de: {
        title: 'Diagramme lesen',
        objectives: ['Werte, Unterschiede und Summen aus einem Säulendiagramm ablesen.', 'Irreführende Diagramme erkennen.'],
        theory: 'Bevor man ein Diagramm liest, schaut man auf Titel, Achsen, Einheiten und die Skaleneinteilung. Dann liest man die Werte ab: Die Höhe einer Säule zeigt den Wert.\n\nAus den Werten berechnet man Unterschiede (wie viel mehr), Summen, den Mittelwert und Anteile: Anteil eines Monats an der Summe = Wert : Summe · 100 %.\n\nVorsicht bei irreführenden Diagrammen: Beginnt die senkrechte Achse nicht bei 0, wirken kleine Unterschiede sehr groß. Immer die Werte vergleichen, nicht nur die Säulenhöhen.',
        keyPoints: ['Titel, Achsen, Einheiten, Skala', 'Unterschied, Summe, Mittelwert, Prozent', 'Eine Achse, die nicht bei 0 beginnt, kann täuschen'],
        examples: [
          { example: 'Wie viele Bücher wurden im März mehr ausgeliehen als im April?', solution: '50 − 25 = 25 Bücher.' },
          { example: 'Wie viele Bücher wurden insgesamt ausgeliehen, und wie groß ist der Monatsdurchschnitt?', solution: '40 + 35 + 50 + 25 + 30 = 180; 180 : 5 = 36 Bücher pro Monat.' },
        ],
        commonMistakes: [
          { mistake: 'Die März-Säule ist doppelt so hoch, also ist der Wert doppelt so groß.', fix: 'Die Zahlen vergleichen: 50 ist nicht das Doppelte von 35. Die Skala beginnt eventuell nicht bei 0.' },
        ],
        practice: [
          { problem: 'Wie viel Prozent der Summe wurden im März ausgeliehen?', solution: '≈ 27,8 %', steps: ['50 : 180 ≈ 0,278.', '≈ 27,8 %.'] },
          { problem: 'In wie vielen Monaten wurden weniger Bücher als der Mittelwert 36 ausgeliehen?', solution: '3', steps: ['Februar 35, April 25, Mai 30.', '3 Monate.'] },
          { problem: 'Schreiben Sie das Verhältnis Januar : April vollständig gekürzt.', solution: '8 : 5', steps: ['40 : 25.', 'Durch 5 kürzen: 8 : 5.'] },
        ],
      },
    },

    // ───────── 2. Grouped data
    {
      slug: 'g8-statistics-probability-grouped-data',
      visuals: [{
        type: 'histogram', step: 1,
        bins: [{ from: 50, to: 60, count: 3 }, { from: 60, to: 70, count: 7 }, { from: 70, to: 80, count: 6 }, { from: 80, to: 90, count: 4 }],
        caption: alt('Pikët e 20 nxënësve në një test, të grupuara në klasa me gjerësi 10. Klasa modale: 60–70.', 'Test scores of 20 students, grouped in classes of width 10. Modal class: 60–70.', 'Testpunkte von 20 Schülern in Klassen der Breite 10. Modale Klasse: 60–70.'),
        alt: alt('Histogram: 50–60 tre, 60–70 shtatë, 70–80 gjashtë, 80–90 katër nxënës.', 'Histogram: 50–60 three, 60–70 seven, 70–80 six, 80–90 four students.', 'Histogramm: 50–60 drei, 60–70 sieben, 70–80 sechs, 80–90 vier Schüler.'),
      }],
      answers: {
        examples: [[['1', 1], ['2', 2]], [['(5*1 + 15*2 + 25*2 + 35*2) / 7', 22.1, 0.05, '22.1']]],
        practice: [[['3 + 7 + 6 + 4', 20]], 'text', [['(55*3 + 65*7 + 75*6 + 85*4) / 20', 70.5]]],
      },
      al: {
        title: 'Të dhënat e grupuara në klasa',
        objectives: ['Të gruponi të dhëna në klasa me gjerësi të njëjtë.', 'Të vlerësoni mesataren me anë të mesit të klasave.'],
        theory: 'Kur ka shumë të dhëna të ndryshme, i grupojmë në klasa (intervale) me gjerësi të njëjtë: 0–10, 10–20, … Me marrëveshje, një vlerë që bie në kufi (p.sh. 20) shkon në klasën që fillon me të (20–30). Për çdo klasë numërojmë denduritë.\n\nTë dhënat e grupuara paraqiten me histogram: shtylla që prekin njëra-tjetrën. Klasa modale është klasa me dendurinë më të madhe.\n\nMesatarja vlerësohet duke marrë mesin e çdo klase: x̄ ≈ Σ(mesi · denduria) : Σ denduria. Kjo është vlerësim, sepse nuk i dimë vlerat e sakta brenda klasës.',
        keyPoints: ['Klasa me gjerësi të njëjtë; kufiri shkon te klasa e radhës', 'Klasa modale: denduria më e madhe', 'x̄ ≈ Σ(mesi · f) : Σf'],
        examples: [
          { example: 'Gruponi 12, 25, 31, 18, 27, 9, 33 në klasa me gjerësi 10 duke nisur nga 0.', solution: '0–10: 1 (9); 10–20: 2 (12, 18); 20–30: 2 (25, 27); 30–40: 2 (31, 33).' },
          { example: 'Vlerësoni mesataren e këtyre të dhënave me mesin e klasave.', solution: 'Meset 5, 15, 25, 35: (5 + 30 + 50 + 70) : 7 = 155 : 7 ≈ 22,1.' },
        ],
        commonMistakes: [
          { mistake: 'Vlera 20 numërohet edhe te 10–20 edhe te 20–30.', fix: 'Çdo vlerë numërohet një herë; kufiri shkon te klasa që fillon me të.' },
          { mistake: 'Mesatarja = mesatarja e meseve (5 + 15 + 25 + 35) : 4.', fix: 'Çdo mes shumëzohet me dendurinë e klasës.' },
        ],
        practice: [
          { problem: 'Klasat 50–60, 60–70, 70–80, 80–90 kanë dendurit 3, 7, 6, 4. Sa nxënës janë gjithsej?', solution: '20', steps: ['3 + 7 + 6 + 4.', '= 20.'] },
          { problem: 'Cila është klasa modale?', solution: '60–70', steps: ['Denduria më e madhe është 7.', 'Klasa 60–70.'] },
          { problem: 'Vlerësoni mesataren e pikëve.', solution: '70,5', steps: ['55 · 3 + 65 · 7 + 75 · 6 + 85 · 4 = 1 410.', '1 410 : 20 = 70,5.'] },
        ],
      },
      en: {
        title: 'Grouped data',
        objectives: ['Group data into classes of equal width.', 'Estimate the mean using the class midpoints.'],
        theory: 'When there are many different values, we group them into classes (intervals) of equal width: 0–10, 10–20, … By convention a value on a boundary (e.g. 20) goes into the class that starts with it (20–30). For each class we count the frequency.\n\nGrouped data are shown in a histogram: bars that touch. The modal class is the class with the highest frequency.\n\nThe mean is estimated with the midpoint of each class: x̄ ≈ Σ(midpoint · frequency) ÷ Σ frequency. It is an estimate, because we do not know the exact values inside a class.',
        keyPoints: ['Equal-width classes; a boundary value goes to the next class', 'Modal class: highest frequency', 'x̄ ≈ Σ(midpoint · f) ÷ Σf'],
        examples: [
          { example: 'Group 12, 25, 31, 18, 27, 9, 33 into classes of width 10 starting at 0.', solution: '0–10: 1 (9); 10–20: 2 (12, 18); 20–30: 2 (25, 27); 30–40: 2 (31, 33).' },
          { example: 'Estimate the mean of these data using the class midpoints.', solution: 'Midpoints 5, 15, 25, 35: (5 + 30 + 50 + 70) ÷ 7 = 155 ÷ 7 ≈ 22.1.' },
        ],
        commonMistakes: [
          { mistake: 'Counting the value 20 in both 10–20 and 20–30.', fix: 'Each value counts once; a boundary value goes to the class that starts with it.' },
          { mistake: 'Mean = mean of the midpoints (5 + 15 + 25 + 35) ÷ 4.', fix: 'Each midpoint is multiplied by the class frequency.' },
        ],
        practice: [
          { problem: 'The classes 50–60, 60–70, 70–80, 80–90 have frequencies 3, 7, 6, 4. How many students are there?', solution: '20', steps: ['3 + 7 + 6 + 4.', '= 20.'] },
          { problem: 'What is the modal class?', solution: '60–70', steps: ['The highest frequency is 7.', 'Class 60–70.'] },
          { problem: 'Estimate the mean score.', solution: '70.5', steps: ['55 · 3 + 65 · 7 + 75 · 6 + 85 · 4 = 1 410.', '1 410 ÷ 20 = 70.5.'] },
        ],
      },
      de: {
        title: 'Klassierte Daten',
        objectives: ['Daten in Klassen gleicher Breite einteilen.', 'Den Mittelwert mit den Klassenmitten schätzen.'],
        theory: 'Bei vielen verschiedenen Werten teilt man die Daten in Klassen (Intervalle) gleicher Breite ein: 0–10, 10–20, … Vereinbarung: Ein Wert auf einer Grenze (z. B. 20) kommt in die Klasse, die mit ihm beginnt (20–30). Für jede Klasse zählt man die Häufigkeit.\n\nKlassierte Daten stellt man im Histogramm dar: Säulen, die aneinanderstoßen. Die modale Klasse ist die Klasse mit der größten Häufigkeit.\n\nDen Mittelwert schätzt man mit den Klassenmitten: x̄ ≈ Σ(Mitte · Häufigkeit) : Σ Häufigkeit. Das ist eine Schätzung, weil die genauen Werte in den Klassen unbekannt sind.',
        keyPoints: ['Gleich breite Klassen; Grenzwert in die nächste Klasse', 'Modale Klasse: größte Häufigkeit', 'x̄ ≈ Σ(Mitte · h) : Σh'],
        examples: [
          { example: 'Teilen Sie 12, 25, 31, 18, 27, 9, 33 in Klassen der Breite 10 ab 0 ein.', solution: '0–10: 1 (9); 10–20: 2 (12, 18); 20–30: 2 (25, 27); 30–40: 2 (31, 33).' },
          { example: 'Schätzen Sie den Mittelwert dieser Daten mit den Klassenmitten.', solution: 'Mitten 5, 15, 25, 35: (5 + 30 + 50 + 70) : 7 = 155 : 7 ≈ 22,1.' },
        ],
        commonMistakes: [
          { mistake: 'Den Wert 20 in 10–20 und in 20–30 zählen.', fix: 'Jeder Wert zählt einmal; ein Grenzwert kommt in die Klasse, die mit ihm beginnt.' },
          { mistake: 'Mittelwert = Mittel der Klassenmitten (5 + 15 + 25 + 35) : 4.', fix: 'Jede Mitte wird mit der Klassenhäufigkeit multipliziert.' },
        ],
        practice: [
          { problem: 'Die Klassen 50–60, 60–70, 70–80, 80–90 haben die Häufigkeiten 3, 7, 6, 4. Wie viele Schüler sind es?', solution: '20', steps: ['3 + 7 + 6 + 4.', '= 20.'] },
          { problem: 'Welche Klasse ist die modale Klasse?', solution: '60–70', steps: ['Die größte Häufigkeit ist 7.', 'Klasse 60–70.'] },
          { problem: 'Schätzen Sie den Mittelwert der Punkte.', solution: '70,5', steps: ['55 · 3 + 65 · 7 + 75 · 6 + 85 · 4 = 1 410.', '1 410 : 20 = 70,5.'] },
        ],
      },
    },

    // ───────── 3. Bar and pie charts
    {
      slug: 'g8-statistics-probability-bar-pie-charts',
      visuals: [
        {
          type: 'barChart', bars: TRANSPORT, max: 20, step: 5, multiColor: true,
          caption: alt('Si vijnë në shkollë 40 nxënës (diagram me shtylla).', 'How 40 students get to school (bar chart).', 'Wie 40 Schüler zur Schule kommen (Säulendiagramm).'),
          alt: alt('Diagram me shtylla: në këmbë 18, autobus 12, veturë 6, biçikletë 4.', 'Bar chart: walk 18, bus 12, car 6, bike 4.', 'Säulendiagramm: zu Fuß 18, Bus 12, Auto 6, Fahrrad 4.'),
        },
        {
          type: 'pieChart', slices: TRANSPORT,
          caption: alt('Të njëjtat të dhëna në diagram rrethor: në këmbë 18/40 · 360° = 162°.', 'The same data in a pie chart: walk 18/40 · 360° = 162°.', 'Dieselben Daten im Kreisdiagramm: zu Fuß 18/40 · 360° = 162°.'),
          alt: alt('Diagram rrethor: në këmbë 45%, autobus 30%, veturë 15%, biçikletë 10%.', 'Pie chart: walk 45%, bus 30%, car 15%, bike 10%.', 'Kreisdiagramm: zu Fuß 45 %, Bus 30 %, Auto 15 %, Fahrrad 10 %.'),
        },
      ],
      answers: {
        examples: [[['18 / 40 * 360', 162]], [['12 / 40 * 100', 30]]],
        practice: [[['6 / 40 * 360', 54]], [['4 / 40 * 100', 10]], [['10 * 360 / 90', 40]]],
      },
      al: {
        title: 'Diagramet me shtylla dhe rrethore',
        objectives: ['Të ndërtoni diagram rrethor nga denduritë.', 'Të zgjidhni diagramin e përshtatshëm për të dhënat.'],
        theory: 'Diagrami me shtylla është i mirë për të krahasuar sasi; diagrami rrethor për të treguar pjesët e një të tëre.\n\nPër diagramin rrethor: këndi i pjesës = denduria : gjithsej · 360°. Për 40 nxënës, 18 që vijnë në këmbë: 18/40 · 360° = 162°. Kontroll: këndet mblidhen në 360°, përqindjet në 100%.\n\nNga diagrami rrethor mund të gjejmë edhe totalin: nëse 90° janë 10 nxënës, atëherë 360° janë 40 nxënës.',
        keyPoints: ['Këndi = f : n · 360°', 'Përqindja = f : n · 100%', 'Shtylla për krahasim, rreth për pjesë të së tërës'],
        examples: [
          { example: '18 nga 40 nxënës vijnë në këmbë. Sa gradë është pjesa e tyre?', solution: '18/40 · 360° = 162°.' },
          { example: 'Sa përqind vijnë me autobus (12 nga 40)?', solution: '12/40 = 0,3 = 30%.' },
        ],
        commonMistakes: [
          { mistake: 'Këndi = 18° për 18 nxënës.', fix: 'Denduria duhet kthyer në pjesë të 360°: 18/40 · 360° = 162°.' },
        ],
        practice: [
          { problem: 'Sa gradë është pjesa e veturës (6 nga 40)?', solution: '54°', steps: ['6/40 = 0,15.', '0,15 · 360° = 54°.'] },
          { problem: 'Sa përqind vijnë me biçikletë (4 nga 40)?', solution: '10%', steps: ['4/40 = 0,1.', '= 10%.'] },
          { problem: 'Në një diagram rrethor 90° paraqesin 10 nxënës. Sa nxënës janë gjithsej?', solution: '40', steps: ['90° është 1/4 e rrethit.', '10 · 4 = 40.'] },
        ],
      },
      en: {
        title: 'Bar and pie charts',
        objectives: ['Draw a pie chart from frequencies.', 'Choose a suitable chart for the data.'],
        theory: 'A bar chart is good for comparing amounts; a pie chart for showing the parts of a whole.\n\nFor a pie chart: sector angle = frequency ÷ total · 360°. For 40 students, 18 of whom walk: 18/40 · 360° = 162°. Check: the angles add up to 360°, the percentages to 100%.\n\nFrom a pie chart we can also find the total: if 90° stands for 10 students, then 360° stands for 40 students.',
        keyPoints: ['Angle = f ÷ n · 360°', 'Percentage = f ÷ n · 100%', 'Bars to compare, pie for parts of a whole'],
        examples: [
          { example: '18 of 40 students walk. How many degrees is their sector?', solution: '18/40 · 360° = 162°.' },
          { example: 'What percentage come by bus (12 of 40)?', solution: '12/40 = 0.3 = 30%.' },
        ],
        commonMistakes: [
          { mistake: 'Angle = 18° for 18 students.', fix: 'Turn the frequency into a share of 360°: 18/40 · 360° = 162°.' },
        ],
        practice: [
          { problem: 'How many degrees is the car sector (6 of 40)?', solution: '54°', steps: ['6/40 = 0.15.', '0.15 · 360° = 54°.'] },
          { problem: 'What percentage come by bike (4 of 40)?', solution: '10%', steps: ['4/40 = 0.1.', '= 10%.'] },
          { problem: 'In a pie chart 90° stands for 10 students. How many students are there in total?', solution: '40', steps: ['90° is 1/4 of the circle.', '10 · 4 = 40.'] },
        ],
      },
      de: {
        title: 'Säulen- und Kreisdiagramme',
        objectives: ['Ein Kreisdiagramm aus Häufigkeiten erstellen.', 'Ein passendes Diagramm für die Daten wählen.'],
        theory: 'Ein Säulendiagramm eignet sich zum Vergleichen von Anzahlen, ein Kreisdiagramm zum Zeigen von Anteilen an einem Ganzen.\n\nFür ein Kreisdiagramm: Winkel = Häufigkeit : Gesamtzahl · 360°. Bei 40 Schülern, von denen 18 zu Fuß kommen: 18/40 · 360° = 162°. Probe: Die Winkel ergeben 360°, die Prozente 100 %.\n\nAus einem Kreisdiagramm kann man auch die Gesamtzahl bestimmen: Stehen 90° für 10 Schüler, stehen 360° für 40 Schüler.',
        keyPoints: ['Winkel = h : n · 360°', 'Prozent = h : n · 100 %', 'Säulen zum Vergleichen, Kreis für Anteile'],
        examples: [
          { example: '18 von 40 Schülern kommen zu Fuß. Wie viel Grad hat ihr Ausschnitt?', solution: '18/40 · 360° = 162°.' },
          { example: 'Wie viel Prozent kommen mit dem Bus (12 von 40)?', solution: '12/40 = 0,3 = 30 %.' },
        ],
        commonMistakes: [
          { mistake: 'Winkel = 18° für 18 Schüler.', fix: 'Die Häufigkeit in einen Anteil von 360° umrechnen: 18/40 · 360° = 162°.' },
        ],
        practice: [
          { problem: 'Wie viel Grad hat der Ausschnitt Auto (6 von 40)?', solution: '54°', steps: ['6/40 = 0,15.', '0,15 · 360° = 54°.'] },
          { problem: 'Wie viel Prozent kommen mit dem Fahrrad (4 von 40)?', solution: '10 %', steps: ['4/40 = 0,1.', '= 10 %.'] },
          { problem: 'In einem Kreisdiagramm stehen 90° für 10 Schüler. Wie viele Schüler sind es insgesamt?', solution: '40', steps: ['90° ist 1/4 des Kreises.', '10 · 4 = 40.'] },
        ],
      },
    },

    // ───────── 4. Events
    {
      slug: 'g8-statistics-probability-events',
      visuals: [{
        type: 'treeDiagram',
        branches: [
          { label: alt('S', 'H', 'K'), p: '1/2', children: [{ label: alt('S', 'H', 'K'), p: '1/2' }, { label: alt('N', 'T', 'Z'), p: '1/2' }] },
          { label: alt('N', 'T', 'Z'), p: '1/2', children: [{ label: alt('S', 'H', 'K'), p: '1/2' }, { label: alt('N', 'T', 'Z'), p: '1/2' }] },
        ],
        caption: alt('Dy hedhje monedhe (S = stemë, N = numër): 2 · 2 = 4 rezultate të mundshme.', 'Two coin tosses (H = heads, T = tails): 2 · 2 = 4 possible outcomes.', 'Zwei Münzwürfe (K = Kopf, Z = Zahl): 2 · 2 = 4 mögliche Ergebnisse.'),
        alt: alt('Diagram peme për dy hedhje monedhe me katër degë: SS, SN, NS, NN.', 'Tree diagram for two coin tosses with four outcomes: HH, HT, TH, TT.', 'Baumdiagramm für zwei Münzwürfe mit vier Ergebnissen: KK, KZ, ZK, ZZ.'),
      }],
      answers: {
        examples: [[['6 * 2', 12]], [['1 - 1/6', '5/6', 1e-9, '5/6']]],
        practice: [[['2 * 2', 4]], [['1 - 0.3', 0.7]], 'text'],
      },
      al: {
        title: 'Ngjarjet',
        objectives: ['Të shkruani hapësirën e rezultateve të një eksperimenti.', 'Të dalloni ngjarjet e sigurta, të pamundshme, të kundërta dhe të papajtueshme.'],
        theory: 'Hapësira e rezultateve Ω është bashkësia e të gjitha rezultateve të mundshme. Te zari: Ω = {1, 2, 3, 4, 5, 6}. Te dy eksperimente njëri pas tjetrit numri i rezultateve shumëzohet: zari dhe monedha japin 6 · 2 = 12 rezultate.\n\nNgjarja është nënbashkësi e Ω: A = "numër çift" = {2, 4, 6}. Ngjarja e sigurt ndodh gjithmonë (Ω), e pamundshmja asnjëherë (∅).\n\nNgjarja e kundërt A′ ndodh kur A nuk ndodh: P(A′) = 1 − P(A). Dy ngjarje janë të papajtueshme kur nuk mund të ndodhin njëkohësisht (A ∩ B = ∅).',
        keyPoints: ['Ω: të gjitha rezultatet', 'Ngjarja: nënbashkësi e Ω', 'P(A′) = 1 − P(A)'],
        examples: [
          { example: 'Hidhen një zar dhe një monedhë. Sa rezultate ka?', solution: '6 · 2 = 12 rezultate.' },
          { example: 'Sa është probabiliteti që në zar të mos dalë 6?', solution: 'P(6) = 1/6, pra P(jo 6) = 1 − 1/6 = 5/6.' },
        ],
        commonMistakes: [
          { mistake: 'Dy monedha kanë 3 rezultate: dy stema, dy numra, një nga secila.', fix: 'SN dhe NS janë rezultate të ndryshme: gjithsej 4.' },
          { mistake: 'Ngjarjet "çift" dhe "më i madh se 4" janë të papajtueshme.', fix: '6 është në të dyja; prerja nuk është boshe.' },
        ],
        practice: [
          { problem: 'Sa rezultate ka hedhja e dy monedhave?', solution: '4', steps: ['2 · 2.', '= 4 (SS, SN, NS, NN).'] },
          { problem: 'P(i kuq) = 0,3. Sa është P(jo i kuq)?', solution: '0,7', steps: ['P(A′) = 1 − P(A).', '1 − 0,3 = 0,7.'] },
          { problem: 'Te zari: A = çift, B = numër i thjeshtë. Gjeni A ∩ B.', solution: '{2}', steps: ['A = {2, 4, 6}, B = {2, 3, 5}.', 'A ∩ B = {2}.'] },
        ],
      },
      en: {
        title: 'Events',
        objectives: ['Write the sample space of an experiment.', 'Recognise certain, impossible, complementary and mutually exclusive events.'],
        theory: 'The sample space Ω is the set of all possible outcomes. For a die: Ω = {1, 2, 3, 4, 5, 6}. For two experiments one after the other, the numbers of outcomes multiply: a die and a coin give 6 · 2 = 12 outcomes.\n\nAn event is a subset of Ω: A = "even number" = {2, 4, 6}. A certain event always happens (Ω), an impossible one never (∅).\n\nThe complementary event A′ happens when A does not: P(A′) = 1 − P(A). Two events are mutually exclusive when they cannot happen at the same time (A ∩ B = ∅).',
        keyPoints: ['Ω: all outcomes', 'Event: a subset of Ω', 'P(A′) = 1 − P(A)'],
        examples: [
          { example: 'A die and a coin are thrown. How many outcomes are there?', solution: '6 · 2 = 12 outcomes.' },
          { example: 'What is the probability that a die does not show 6?', solution: 'P(6) = 1/6, so P(not 6) = 1 − 1/6 = 5/6.' },
        ],
        commonMistakes: [
          { mistake: 'Two coins have 3 outcomes: two heads, two tails, one of each.', fix: 'HT and TH are different outcomes: 4 in total.' },
          { mistake: 'The events "even" and "greater than 4" are mutually exclusive.', fix: '6 is in both; the intersection is not empty.' },
        ],
        practice: [
          { problem: 'How many outcomes does tossing two coins have?', solution: '4', steps: ['2 · 2.', '= 4 (HH, HT, TH, TT).'] },
          { problem: 'P(red) = 0.3. What is P(not red)?', solution: '0.7', steps: ['P(A′) = 1 − P(A).', '1 − 0.3 = 0.7.'] },
          { problem: 'For a die: A = even, B = prime number. Find A ∩ B.', solution: '{2}', steps: ['A = {2, 4, 6}, B = {2, 3, 5}.', 'A ∩ B = {2}.'] },
        ],
      },
      de: {
        title: 'Ereignisse',
        objectives: ['Den Ergebnisraum eines Zufallsversuchs angeben.', 'Sichere, unmögliche, Gegen- und unvereinbare Ereignisse erkennen.'],
        theory: 'Der Ergebnisraum Ω ist die Menge aller möglichen Ergebnisse. Beim Würfel: Ω = {1, 2, 3, 4, 5, 6}. Bei zwei Versuchen nacheinander multiplizieren sich die Anzahlen: Würfel und Münze ergeben 6 · 2 = 12 Ergebnisse.\n\nEin Ereignis ist eine Teilmenge von Ω: A = „gerade Zahl“ = {2, 4, 6}. Ein sicheres Ereignis tritt immer ein (Ω), ein unmögliches nie (∅).\n\nDas Gegenereignis A′ tritt ein, wenn A nicht eintritt: P(A′) = 1 − P(A). Zwei Ereignisse sind unvereinbar, wenn sie nicht gleichzeitig eintreten können (A ∩ B = ∅).',
        keyPoints: ['Ω: alle Ergebnisse', 'Ereignis: Teilmenge von Ω', 'P(A′) = 1 − P(A)'],
        examples: [
          { example: 'Ein Würfel und eine Münze werden geworfen. Wie viele Ergebnisse gibt es?', solution: '6 · 2 = 12 Ergebnisse.' },
          { example: 'Wie groß ist die Wahrscheinlichkeit, keine 6 zu würfeln?', solution: 'P(6) = 1/6, also P(keine 6) = 1 − 1/6 = 5/6.' },
        ],
        commonMistakes: [
          { mistake: 'Zwei Münzen haben 3 Ergebnisse: zweimal Kopf, zweimal Zahl, je einmal.', fix: 'KZ und ZK sind verschiedene Ergebnisse: insgesamt 4.' },
          { mistake: 'Die Ereignisse „gerade“ und „größer als 4“ sind unvereinbar.', fix: '6 gehört zu beiden; der Schnitt ist nicht leer.' },
        ],
        practice: [
          { problem: 'Wie viele Ergebnisse hat der Wurf zweier Münzen?', solution: '4', steps: ['2 · 2.', '= 4 (KK, KZ, ZK, ZZ).'] },
          { problem: 'P(rot) = 0,3. Wie groß ist P(nicht rot)?', solution: '0,7', steps: ['P(A′) = 1 − P(A).', '1 − 0,3 = 0,7.'] },
          { problem: 'Beim Würfel: A = gerade, B = Primzahl. Bestimmen Sie A ∩ B.', solution: '{2}', steps: ['A = {2, 4, 6}, B = {2, 3, 5}.', 'A ∩ B = {2}.'] },
        ],
      },
    },

    // ───────── 5. Probability
    {
      slug: 'g8-statistics-probability-probability',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '+', cells: ['1', '2', '3', '4', '5', '6'] },
          { head: '1', cells: ['2', '3', '4', '5', '6', '7'] },
          { head: '2', cells: ['3', '4', '5', '6', '7', '8'] },
          { head: '3', cells: ['4', '5', '6', '7', '8', '9'] },
          { head: '4', cells: ['5', '6', '7', '8', '9', '10'] },
          { head: '5', cells: ['6', '7', '8', '9', '10', '11'] },
          { head: '6', cells: ['7', '8', '9', '10', '11', '12'] },
        ],
        highlight: [[1, 5], [2, 4], [3, 3], [4, 2], [5, 1], [6, 0]],
        caption: alt('Shuma e dy zareve: 36 rezultate; shuma 7 del 6 herë, pra P(7) = 6/36 = 1/6.', 'Sum of two dice: 36 outcomes; a sum of 7 appears 6 times, so P(7) = 6/36 = 1/6.', 'Augensumme zweier Würfel: 36 Ergebnisse; die Summe 7 kommt 6-mal vor, also P(7) = 6/36 = 1/6.'),
        alt: alt('Tabela 6 × 6 e shumave të dy zareve; gjashtë qeliza me shumën 7 të theksuara.', 'A 6 × 6 table of the sums of two dice; the six cells with sum 7 highlighted.', 'Eine 6 × 6-Tabelle der Augensummen zweier Würfel; die sechs Felder mit Summe 7 hervorgehoben.'),
      }],
      answers: {
        examples: [[['6 / 20', '3/10', 1e-9, '3/10']], [['6 / 36', '1/6', 1e-9, '1/6']]],
        practice: [[['7 / 10', '7/10', 1e-9, '7/10']], [['8 / 20', '2/5', 1e-9, '2/5']], [['1 / 4', '1/4', 1e-9, '1/4']]],
      },
      al: {
        title: 'Probabiliteti',
        objectives: ['Të njehsoni probabilitetin klasik duke numëruar rezultatet.', 'Të përdorni tabela dhe diagrame peme për dy eksperimente.'],
        theory: 'Kur të gjitha rezultatet janë njësoj të mundshme: P(A) = numri i rezultateve të favorshme : numri i të gjitha rezultateve. Gjithmonë 0 ≤ P(A) ≤ 1.\n\nShembull: nga numrat 1–20 zgjedhim njërin rastësisht. Shumëfishat e 3 janë 3, 6, 9, 12, 15, 18: P = 6/20 = 3/10.\n\nPër dy eksperimente (dy zare, dy monedha) numërojmë rezultatet me tabelë ose me diagram peme. Te dy zaret ka 36 rezultate; shuma 7 del në 6 prej tyre: P = 6/36 = 1/6.',
        keyPoints: ['P(A) = të favorshme : të gjitha', '0 ≤ P(A) ≤ 1', 'Dy zare: 36 rezultate'],
        examples: [
          { example: 'Nga numrat 1–20 zgjedhim një rastësisht. Sa është P(shumëfish i 3)?', solution: '3, 6, 9, 12, 15, 18 → 6 nga 20: P = 6/20 = 3/10.' },
          { example: 'Hidhen dy zare. Sa është P(shuma = 7)?', solution: '6 rezultate (1+6, 2+5, …, 6+1) nga 36: P = 6/36 = 1/6.' },
        ],
        commonMistakes: [
          { mistake: 'Te dy zaret shumat 2–12 janë 11 rezultate njësoj të mundshme.', fix: 'Shumat nuk janë njësoj të mundshme; numërohen 36 çiftet.' },
        ],
        practice: [
          { problem: 'Në qese ka 5 topa të kuq, 3 blu dhe 2 të gjelbër. Sa është P(jo blu)?', solution: '7/10', steps: ['Jo blu: 5 + 2 = 7.', 'P = 7/10.'] },
          { problem: 'Nga numrat 1–20 zgjedhim një. Sa është P(numër i thjeshtë)?', solution: '2/5', steps: ['2, 3, 5, 7, 11, 13, 17, 19 → 8.', 'P = 8/20 = 2/5.'] },
          { problem: 'Hidhen dy monedha. Sa është P(dy stema)?', solution: '1/4', steps: ['4 rezultate, 1 i favorshëm.', 'P = 1/4.'] },
        ],
      },
      en: {
        title: 'Probability',
        objectives: ['Work out probability by counting outcomes.', 'Use tables and tree diagrams for two experiments.'],
        theory: 'When all outcomes are equally likely: P(A) = number of favourable outcomes ÷ number of all outcomes. Always 0 ≤ P(A) ≤ 1.\n\nExample: we pick one of the numbers 1–20 at random. The multiples of 3 are 3, 6, 9, 12, 15, 18: P = 6/20 = 3/10.\n\nFor two experiments (two dice, two coins) count the outcomes with a table or a tree diagram. Two dice have 36 outcomes; a sum of 7 occurs in 6 of them: P = 6/36 = 1/6.',
        keyPoints: ['P(A) = favourable ÷ all', '0 ≤ P(A) ≤ 1', 'Two dice: 36 outcomes'],
        examples: [
          { example: 'One of the numbers 1–20 is picked at random. What is P(multiple of 3)?', solution: '3, 6, 9, 12, 15, 18 → 6 of 20: P = 6/20 = 3/10.' },
          { example: 'Two dice are thrown. What is P(sum = 7)?', solution: '6 outcomes (1+6, 2+5, …, 6+1) out of 36: P = 6/36 = 1/6.' },
        ],
        commonMistakes: [
          { mistake: 'For two dice the sums 2–12 are 11 equally likely outcomes.', fix: 'The sums are not equally likely; count the 36 pairs.' },
        ],
        practice: [
          { problem: 'A bag has 5 red, 3 blue and 2 green balls. What is P(not blue)?', solution: '7/10', steps: ['Not blue: 5 + 2 = 7.', 'P = 7/10.'] },
          { problem: 'One of the numbers 1–20 is picked. What is P(prime number)?', solution: '2/5', steps: ['2, 3, 5, 7, 11, 13, 17, 19 → 8.', 'P = 8/20 = 2/5.'] },
          { problem: 'Two coins are tossed. What is P(two heads)?', solution: '1/4', steps: ['4 outcomes, 1 favourable.', 'P = 1/4.'] },
        ],
      },
      de: {
        title: 'Wahrscheinlichkeit',
        objectives: ['Wahrscheinlichkeiten durch Abzählen berechnen.', 'Tabellen und Baumdiagramme für zweistufige Versuche nutzen.'],
        theory: 'Sind alle Ergebnisse gleich wahrscheinlich (Laplace-Versuch): P(A) = Anzahl der günstigen Ergebnisse : Anzahl aller Ergebnisse. Stets gilt 0 ≤ P(A) ≤ 1.\n\nBeispiel: Aus den Zahlen 1–20 wird eine zufällig gewählt. Die Vielfachen von 3 sind 3, 6, 9, 12, 15, 18: P = 6/20 = 3/10.\n\nBei zwei Versuchen (zwei Würfel, zwei Münzen) zählt man die Ergebnisse mit einer Tabelle oder einem Baumdiagramm. Zwei Würfel haben 36 Ergebnisse; die Summe 7 kommt in 6 davon vor: P = 6/36 = 1/6.',
        keyPoints: ['P(A) = günstige : alle', '0 ≤ P(A) ≤ 1', 'Zwei Würfel: 36 Ergebnisse'],
        examples: [
          { example: 'Aus den Zahlen 1–20 wird eine zufällig gewählt. Wie groß ist P(Vielfaches von 3)?', solution: '3, 6, 9, 12, 15, 18 → 6 von 20: P = 6/20 = 3/10.' },
          { example: 'Zwei Würfel werden geworfen. Wie groß ist P(Summe = 7)?', solution: '6 Ergebnisse (1+6, 2+5, …, 6+1) von 36: P = 6/36 = 1/6.' },
        ],
        commonMistakes: [
          { mistake: 'Bei zwei Würfeln sind die Summen 2–12 elf gleich wahrscheinliche Ergebnisse.', fix: 'Die Summen sind nicht gleich wahrscheinlich; man zählt die 36 Paare.' },
        ],
        practice: [
          { problem: 'Ein Beutel enthält 5 rote, 3 blaue und 2 grüne Kugeln. Wie groß ist P(nicht blau)?', solution: '7/10', steps: ['Nicht blau: 5 + 2 = 7.', 'P = 7/10.'] },
          { problem: 'Aus den Zahlen 1–20 wird eine gewählt. Wie groß ist P(Primzahl)?', solution: '2/5', steps: ['2, 3, 5, 7, 11, 13, 17, 19 → 8.', 'P = 8/20 = 2/5.'] },
          { problem: 'Zwei Münzen werden geworfen. Wie groß ist P(zweimal Kopf)?', solution: '1/4', steps: ['4 Ergebnisse, 1 günstig.', 'P = 1/4.'] },
        ],
      },
    },
  ],
};
