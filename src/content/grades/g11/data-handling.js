// Grade 11 · Theme 4: Data handling (November–December)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g11-data-handling',
  i18n: {
    al: { title: 'Përpunimi i të dhënave', description: 'Mesatarja nga tabela e dendurive, kuartilet dhe grafiku me kuti, denduritë e grumbulluara, korrelacioni dhe seritë kohore.' },
    en: { title: 'Data handling', description: 'Mean from frequency tables, quartiles and box plots, cumulative frequency, correlation and time series.' },
    de: { title: 'Daten auswerten', description: 'Mittelwert aus Häufigkeitstabellen, Quartile und Boxplots, Summenhäufigkeit, Korrelation und Zeitreihen.' },
  },
  lessons: [
    // ───────── 1. Averages and spread
    {
      slug: 'g11-data-handling-averages-spread',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Gola', 'Goals', 'Tore'), cells: ['0', '1', '2', '3', '4'] },
          { head: alt('Denduria', 'Frequency', 'Häufigkeit'), cells: ['3', '5', '6', '4', '2'] },
          { head: alt('Gola · denduri', 'Goals · freq.', 'Tore · Häuf.'), cells: ['0', '5', '12', '12', '8'] },
        ],
        highlight: [[1, 2]],
        caption: alt('20 ndeshje, 37 gola: mesatarja 37 : 20 = 1,85; moda 2.', '20 matches, 37 goals: mean 37 ÷ 20 = 1.85; mode 2.', '20 Spiele, 37 Tore: Mittelwert 37 : 20 = 1,85; Modalwert 2.'),
        alt: alt('Tabelë dendurish për golat 0 deri 4 me denduri 3, 5, 6, 4, 2.', 'Frequency table for 0 to 4 goals with frequencies 3, 5, 6, 4, 2.', 'Häufigkeitstabelle für 0 bis 4 Tore mit den Häufigkeiten 3, 5, 6, 4, 2.'),
      }],
      answers: {
        examples: [[['(0*3 + 1*5 + 2*6 + 3*4 + 4*2) / 20', 1.85]], [['(5*4 + 15*10 + 25*6) / 20', 16]]],
        practice: [[['(2 + 2) / 2', 2]], 'text', [['19 - 4', 15]]],
      },
      al: {
        title: 'Mesataret dhe shpërndarja',
        objectives: ['Të llogaritni mesataren, medianën dhe modën nga një tabelë dendurish.', 'Të vlerësoni mesataren e të dhënave të grupuara me mesin e klasave.'],
        theory: 'Nga tabela e dendurive: mesatarja = Σ(x · f) : Σf. Te tabela me gola: 37 : 20 = 1,85. Moda është vlera me dendurinë më të madhe (2). Mediana është vlera e mesit: me 20 vlera, mesatarja e vlerës së 10-të dhe 11-të.\n\nTe të dhënat e grupuara (klasa) nuk i dimë vlerat e sakta, prandaj përdorim mesin e çdo klase: për 0–10, 10–20, 20–30 meset janë 5, 15, 25. Rezultati është vlerësim.\n\nShpërndarja tregon sa të përhapura janë të dhënat: gjerësia = më e madhja − më e vogla.',
        keyPoints: ['Mesatarja = Σ(x · f) : Σf', 'Të grupuara: përdorni mesin e klasës', 'Gjerësia = maks − min'],
        examples: [
          { example: 'Gjeni mesataren e golave nga tabela (0, 1, 2, 3, 4 gola me denduri 3, 5, 6, 4, 2).', solution: 'Σ(x · f) = 0 + 5 + 12 + 12 + 8 = 37; 37 : 20 = 1,85.' },
          { example: 'Kohët: 0–10 min (4 nxënës), 10–20 min (10), 20–30 min (6). Vlerësoni mesataren.', solution: '(5 · 4 + 15 · 10 + 25 · 6) : 20 = 320 : 20 = 16 min.' },
        ],
        commonMistakes: [
          { mistake: 'Shuma 37 pjesëtohet me 5 (numri i rreshtave).', fix: 'Pjesëtohet me numrin e vlerave Σf = 20.' },
          { mistake: 'Te klasat përdoret kufiri i sipërm në vend të mesit.', fix: 'Mesi i klasës është vlerësimi më i mirë: (10 + 20) : 2 = 15.' },
        ],
        practice: [
          { problem: 'Sa është mediana e golave në tabelë (20 ndeshje)?', solution: '2', steps: ['Vlera e 10-të dhe e 11-të: denduritë e grumbulluara 3, 8, 14 → të dyja janë 2.', '(2 + 2) : 2 = 2.'] },
          { problem: 'Cila është moda në tabelën e golave?', solution: '2 gola', steps: ['Denduria më e madhe është 6.', 'Ajo i përket vlerës 2.'] },
          { problem: 'Sa është gjerësia e të dhënave 12, 7, 19, 4, 15?', solution: '15', steps: ['Më e madhja 19, më e vogla 4.', '19 − 4 = 15.'] },
        ],
      },
      en: {
        title: 'Averages and spread',
        objectives: ['Work out the mean, median and mode from a frequency table.', 'Estimate the mean of grouped data using class midpoints.'],
        theory: 'From a frequency table: mean = Σ(x · f) ÷ Σf. For the goals table: 37 ÷ 20 = 1.85. The mode is the value with the highest frequency (2). The median is the middle value: with 20 values, the mean of the 10th and 11th.\n\nWith grouped data (classes) we do not know the exact values, so we use the midpoint of each class: for 0–10, 10–20, 20–30 the midpoints are 5, 15, 25. The result is an estimate.\n\nSpread shows how scattered the data are: range = largest − smallest.',
        keyPoints: ['Mean = Σ(x · f) ÷ Σf', 'Grouped: use the class midpoint', 'Range = max − min'],
        examples: [
          { example: 'Find the mean number of goals from the table (0, 1, 2, 3, 4 goals with frequencies 3, 5, 6, 4, 2).', solution: 'Σ(x · f) = 0 + 5 + 12 + 12 + 8 = 37; 37 ÷ 20 = 1.85.' },
          { example: 'Times: 0–10 min (4 students), 10–20 min (10), 20–30 min (6). Estimate the mean.', solution: '(5 · 4 + 15 · 10 + 25 · 6) ÷ 20 = 320 ÷ 20 = 16 min.' },
        ],
        commonMistakes: [
          { mistake: 'The total 37 is divided by 5 (the number of rows).', fix: 'Divide by the number of values Σf = 20.' },
          { mistake: 'The upper class boundary is used instead of the midpoint.', fix: 'The midpoint is the best estimate: (10 + 20) ÷ 2 = 15.' },
        ],
        practice: [
          { problem: 'What is the median number of goals in the table (20 matches)?', solution: '2', steps: ['The 10th and 11th values: running totals 3, 8, 14 → both are 2.', '(2 + 2) ÷ 2 = 2.'] },
          { problem: 'What is the mode of the goals table?', solution: '2 goals', steps: ['The highest frequency is 6.', 'It belongs to the value 2.'] },
          { problem: 'What is the range of 12, 7, 19, 4, 15?', solution: '15', steps: ['Largest 19, smallest 4.', '19 − 4 = 15.'] },
        ],
      },
      de: {
        title: 'Mittelwerte und Streuung',
        objectives: ['Mittelwert, Median und Modalwert aus einer Häufigkeitstabelle bestimmen.', 'Den Mittelwert klassierter Daten mit Klassenmitten schätzen.'],
        theory: 'Aus einer Häufigkeitstabelle: Mittelwert = Σ(x · h) : Σh. Für die Tor-Tabelle: 37 : 20 = 1,85. Der Modalwert ist der Wert mit der größten Häufigkeit (2). Der Median ist der mittlere Wert: Bei 20 Werten der Mittelwert aus dem 10. und 11. Wert.\n\nBei klassierten Daten kennt man die genauen Werte nicht, deshalb nimmt man die Klassenmitte: Für 0–10, 10–20, 20–30 sind es 5, 15, 25. Das Ergebnis ist ein Schätzwert.\n\nDie Streuung zeigt, wie weit die Daten verteilt sind: Spannweite = größter − kleinster Wert.',
        keyPoints: ['Mittelwert = Σ(x · h) : Σh', 'Klassiert: Klassenmitte verwenden', 'Spannweite = Max − Min'],
        examples: [
          { example: 'Bestimmen Sie den Mittelwert der Tore aus der Tabelle (0, 1, 2, 3, 4 Tore mit den Häufigkeiten 3, 5, 6, 4, 2).', solution: 'Σ(x · h) = 0 + 5 + 12 + 12 + 8 = 37; 37 : 20 = 1,85.' },
          { example: 'Zeiten: 0–10 min (4 Lernende), 10–20 min (10), 20–30 min (6). Schätzen Sie den Mittelwert.', solution: '(5 · 4 + 15 · 10 + 25 · 6) : 20 = 320 : 20 = 16 min.' },
        ],
        commonMistakes: [
          { mistake: 'Die Summe 37 wird durch 5 (Anzahl der Zeilen) geteilt.', fix: 'Durch die Anzahl der Werte Σh = 20 teilen.' },
          { mistake: 'Statt der Klassenmitte wird die obere Klassengrenze verwendet.', fix: 'Die Klassenmitte ist der beste Schätzwert: (10 + 20) : 2 = 15.' },
        ],
        practice: [
          { problem: 'Wie groß ist der Median der Tore in der Tabelle (20 Spiele)?', solution: '2', steps: ['Der 10. und 11. Wert: Summenhäufigkeiten 3, 8, 14 → beide sind 2.', '(2 + 2) : 2 = 2.'] },
          { problem: 'Welcher Wert ist der Modalwert der Tor-Tabelle?', solution: '2 Tore', steps: ['Die größte Häufigkeit ist 6.', 'Sie gehört zum Wert 2.'] },
          { problem: 'Wie groß ist die Spannweite von 12, 7, 19, 4, 15?', solution: '15', steps: ['Größter Wert 19, kleinster 4.', '19 − 4 = 15.'] },
        ],
      },
    },
    // ───────── 2. Box plots
    {
      slug: 'g11-data-handling-box-plots',
      visuals: [{
        type: 'boxPlot', min: 3, q1: 5, median: 8, q3: 12, max: 15, axis: { from: 0, to: 16, step: 2 },
        caption: alt('3, 5, 7, 8, 10, 12, 15: Q1 = 5, mediana 8, Q3 = 12; gjerësia ndërkuartile 12 − 5 = 7.', '3, 5, 7, 8, 10, 12, 15: Q1 = 5, median 8, Q3 = 12; interquartile range 12 − 5 = 7.', '3, 5, 7, 8, 10, 12, 15: Q1 = 5, Median 8, Q3 = 12; Quartilsabstand 12 − 5 = 7.'),
        alt: alt('Grafik me kuti: minimumi 3, Q1 5, mediana 8, Q3 12, maksimumi 15.', 'Box plot: minimum 3, Q1 5, median 8, Q3 12, maximum 15.', 'Boxplot: Minimum 3, Q1 5, Median 8, Q3 12, Maximum 15.'),
      }],
      answers: {
        examples: [[['12 - 5', 7]], 'text'],
        practice: [[['(6 + 7) / 2', 6.5], ['(9 + 10) / 2 - (4 + 4) / 2', 5.5]], [['15 - 3', 12]], 'text'],
      },
      al: {
        title: 'Grafikët me kuti',
        objectives: ['Të gjeni kuartilet dhe gjerësinë ndërkuartile.', 'Të vizatoni dhe të krahasoni grafikë me kuti.'],
        theory: 'Të dhënat i rendisim. Mediana (Q2) i ndan në dy gjysma; kuartili i poshtëm Q1 është mediana e gjysmës së poshtme, kuartili i sipërm Q3 mediana e gjysmës së sipërme.\n3, 5, 7, 8, 10, 12, 15 → Q2 = 8, Q1 = 5, Q3 = 12.\n\nGjerësia ndërkuartile GJNK = Q3 − Q1 = 7: aty ndodhet gjysma e mesme e të dhënave dhe nuk ndikohet nga vlerat ekstreme.\n\nGrafiku me kuti tregon pesë vlera: minimumin, Q1, medianën, Q3, maksimumin. Kur krahasojmë dy grupe, krahasojmë medianat (niveli) dhe GJNK (shpërndarja).',
        keyPoints: ['Renditni të dhënat së pari', 'GJNK = Q3 − Q1', 'Krahasimi: mediana dhe GJNK'],
        examples: [
          { example: 'Gjeni kuartilet dhe GJNK të 3, 5, 7, 8, 10, 12, 15.', solution: 'Q2 = 8, Q1 = 5, Q3 = 12; GJNK = 12 − 5 = 7.' },
          { example: 'Klasa A: mediana 8, GJNK 7. Klasa B: mediana 10, GJNK 3. Krahasojini.', solution: 'B ka rezultate më të larta mesatarisht (mediana më e madhe) dhe më të njëtrajtshme (GJNK më e vogël).' },
        ],
        commonMistakes: [
          { mistake: 'Kuartilet gjenden pa i renditur të dhënat.', fix: 'Së pari renditni nga më e vogla te më e madhja.' },
          { mistake: 'GJNK llogaritet maks − min.', fix: 'Ajo është gjerësia; GJNK = Q3 − Q1.' },
        ],
        practice: [
          { problem: 'Gjeni medianën dhe GJNK të 2, 4, 4, 6, 7, 9, 10, 12.', solution: 'mediana 6,5; GJNK 5,5', steps: ['Mediana = (6 + 7) : 2 = 6,5.', 'Q1 = (4 + 4) : 2 = 4, Q3 = (9 + 10) : 2 = 9,5 → GJNK = 5,5.'] },
          { problem: 'Një grafik me kuti ka min 3 dhe maks 15. Sa është gjerësia?', solution: '12', steps: ['Gjerësia = maks − min.', '15 − 3 = 12.'] },
          { problem: 'Cili grup është më i njëtrajtshëm: GJNK 7 apo GJNK 3?', solution: 'Grupi me GJNK 3', steps: ['GJNK më e vogël = të dhëna më afër njëra-tjetrës.', 'Pra grupi me GJNK 3.'] },
        ],
      },
      en: {
        title: 'Box plots',
        objectives: ['Find the quartiles and the interquartile range.', 'Draw and compare box plots.'],
        theory: 'Put the data in order. The median (Q2) splits them into two halves; the lower quartile Q1 is the median of the lower half, the upper quartile Q3 the median of the upper half.\n3, 5, 7, 8, 10, 12, 15 → Q2 = 8, Q1 = 5, Q3 = 12.\n\nThe interquartile range IQR = Q3 − Q1 = 7: it holds the middle half of the data and is not affected by extreme values.\n\nA box plot shows five values: minimum, Q1, median, Q3, maximum. To compare two groups, compare the medians (level) and the IQRs (spread).',
        keyPoints: ['Order the data first', 'IQR = Q3 − Q1', 'Compare: median and IQR'],
        examples: [
          { example: 'Find the quartiles and IQR of 3, 5, 7, 8, 10, 12, 15.', solution: 'Q2 = 8, Q1 = 5, Q3 = 12; IQR = 12 − 5 = 7.' },
          { example: 'Class A: median 8, IQR 7. Class B: median 10, IQR 3. Compare them.', solution: 'B has higher results on average (larger median) and more consistent ones (smaller IQR).' },
        ],
        commonMistakes: [
          { mistake: 'The quartiles are found without ordering the data.', fix: 'First put the data in order from smallest to largest.' },
          { mistake: 'The IQR is worked out as max − min.', fix: 'That is the range; IQR = Q3 − Q1.' },
        ],
        practice: [
          { problem: 'Find the median and IQR of 2, 4, 4, 6, 7, 9, 10, 12.', solution: 'median 6.5; IQR 5.5', steps: ['Median = (6 + 7) ÷ 2 = 6.5.', 'Q1 = (4 + 4) ÷ 2 = 4, Q3 = (9 + 10) ÷ 2 = 9.5 → IQR = 5.5.'] },
          { problem: 'A box plot has min 3 and max 15. What is the range?', solution: '12', steps: ['Range = max − min.', '15 − 3 = 12.'] },
          { problem: 'Which group is more consistent: IQR 7 or IQR 3?', solution: 'The group with IQR 3', steps: ['A smaller IQR means the data are closer together.', 'So the group with IQR 3.'] },
        ],
      },
      de: {
        title: 'Boxplots',
        objectives: ['Quartile und Quartilsabstand bestimmen.', 'Boxplots zeichnen und vergleichen.'],
        theory: 'Die Daten werden geordnet. Der Median (Q2) teilt sie in zwei Hälften; das untere Quartil Q1 ist der Median der unteren Hälfte, das obere Quartil Q3 der Median der oberen Hälfte.\n3, 5, 7, 8, 10, 12, 15 → Q2 = 8, Q1 = 5, Q3 = 12.\n\nDer Quartilsabstand IQR = Q3 − Q1 = 7: In ihm liegt die mittlere Hälfte der Daten, und Ausreißer beeinflussen ihn nicht.\n\nEin Boxplot zeigt fünf Werte: Minimum, Q1, Median, Q3, Maximum. Beim Vergleich zweier Gruppen vergleicht man die Mediane (Lage) und die Quartilsabstände (Streuung).',
        keyPoints: ['Zuerst die Daten ordnen', 'IQR = Q3 − Q1', 'Vergleich: Median und IQR'],
        examples: [
          { example: 'Bestimmen Sie Quartile und Quartilsabstand von 3, 5, 7, 8, 10, 12, 15.', solution: 'Q2 = 8, Q1 = 5, Q3 = 12; IQR = 12 − 5 = 7.' },
          { example: 'Klasse A: Median 8, IQR 7. Klasse B: Median 10, IQR 3. Vergleichen Sie.', solution: 'B hat im Mittel höhere Ergebnisse (größerer Median) und gleichmäßigere (kleinerer IQR).' },
        ],
        commonMistakes: [
          { mistake: 'Die Quartile werden bestimmt, ohne die Daten zu ordnen.', fix: 'Zuerst vom kleinsten zum größten Wert ordnen.' },
          { mistake: 'Der Quartilsabstand wird als Max − Min berechnet.', fix: 'Das ist die Spannweite; IQR = Q3 − Q1.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie Median und Quartilsabstand von 2, 4, 4, 6, 7, 9, 10, 12.', solution: 'Median 6,5; IQR 5,5', steps: ['Median = (6 + 7) : 2 = 6,5.', 'Q1 = (4 + 4) : 2 = 4, Q3 = (9 + 10) : 2 = 9,5 → IQR = 5,5.'] },
          { problem: 'Ein Boxplot hat Min 3 und Max 15. Wie groß ist die Spannweite?', solution: '12', steps: ['Spannweite = Max − Min.', '15 − 3 = 12.'] },
          { problem: 'Welche Gruppe ist gleichmäßiger: IQR 7 oder IQR 3?', solution: 'Die Gruppe mit IQR 3', steps: ['Ein kleinerer IQR heißt, die Daten liegen näher beieinander.', 'Also die Gruppe mit IQR 3.'] },
        ],
      },
    },
    // ───────── 3. Cumulative frequency
    {
      slug: 'g11-data-handling-cumulative-frequency',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Masa (g)', 'Mass (g)', 'Masse (g)'), cells: ['0–20', '20–40', '40–60', '60–80'] },
          { head: alt('Denduria', 'Frequency', 'Häufigkeit'), cells: ['5', '12', '18', '5'] },
          { head: alt('E grumbulluar', 'Cumulative', 'Summenhäufigkeit'), cells: ['5', '17', '35', '40'] },
        ],
        highlight: [[2, 2]],
        caption: alt('Denduria e grumbulluar shënohet te kufiri i sipërm i klasës: 35 vlera janë nën 60 g.', 'Cumulative frequency is plotted at the upper class boundary: 35 values are below 60 g.', 'Die Summenhäufigkeit gehört zur oberen Klassengrenze: 35 Werte liegen unter 60 g.'),
        alt: alt('Tabelë me klasat e masës, denduritë 5, 12, 18, 5 dhe denduritë e grumbulluara 5, 17, 35, 40.', 'Table of mass classes with frequencies 5, 12, 18, 5 and cumulative frequencies 5, 17, 35, 40.', 'Tabelle der Massenklassen mit den Häufigkeiten 5, 12, 18, 5 und den Summenhäufigkeiten 5, 17, 35, 40.'),
      }],
      answers: {
        examples: [[['5 + 12 + 18', 35]], [['40 + (20 - 17) / 18 * 20', 43.33, 0.005]]],
        practice: [[['40 / 4', 10]], [['40 - 17', 23]], [['17 / 40 * 100', 42.5]]],
      },
      al: {
        title: 'Denduritë e grumbulluara',
        objectives: ['Të plotësoni tabelën dhe të vizatoni lakoren e dendurive të grumbulluara.', 'Të vlerësoni medianën dhe kuartilet nga lakorja.'],
        theory: 'Denduria e grumbulluar është shuma e dendurive deri te një klasë: 5, 5 + 12 = 17, 17 + 18 = 35, 35 + 5 = 40. Ajo tregon sa vlera janë nën kufirin e sipërm të klasës.\n\nLakorja vizatohet me pikat (kufiri i sipërm, denduria e grumbulluar): (20, 5), (40, 17), (60, 35), (80, 40), duke filluar nga (0, 0).\n\nPër n = 40: mediana lexohet te vlera e 20-të, Q1 te e 10-ta, Q3 te e 30-ta. Me interpolim lineare: mediana ≈ 40 + (20 − 17)/18 · 20 ≈ 43,33 g.',
        keyPoints: ['E grumbulluar = shuma deri te klasa', 'Pikat te kufiri i sipërm i klasës', 'Mediana n/2, Q1 n/4, Q3 3n/4'],
        examples: [
          { example: 'Sa vlera kanë masë nën 60 g?', solution: '5 + 12 + 18 = 35.' },
          { example: 'Vlerësoni medianën (n = 40).', solution: 'Vlera e 20-të është në klasën 40–60: 40 + (20 − 17)/18 · 20 ≈ 43,33 g.' },
        ],
        commonMistakes: [
          { mistake: 'Pikat e lakores vendosen te mesi i klasës.', fix: 'Denduria e grumbulluar i përket kufirit të sipërm të klasës.' },
          { mistake: 'Mediana lexohet te denduria 40 (totali).', fix: 'Mediana lexohet te gjysma: 40 : 2 = 20.' },
        ],
        practice: [
          { problem: 'Te cila vlerë lexohet Q1 kur n = 40?', solution: 'te vlera e 10-të', steps: ['Q1 te n/4.', '40 : 4 = 10.'] },
          { problem: 'Sa vlera kanë masë mbi 40 g?', solution: '23', steps: ['Nën 40 g janë 17.', '40 − 17 = 23.'] },
          { problem: 'Sa përqind kanë masë nën 40 g?', solution: '42,5%', steps: ['17 nga 40.', '17/40 = 0,425 = 42,5%.'] },
        ],
      },
      en: {
        title: 'Cumulative frequency',
        objectives: ['Complete a cumulative frequency table and draw the curve.', 'Estimate the median and quartiles from the curve.'],
        theory: 'Cumulative frequency is the running total of the frequencies: 5, 5 + 12 = 17, 17 + 18 = 35, 35 + 5 = 40. It tells how many values are below the upper boundary of a class.\n\nThe curve is plotted at the points (upper boundary, cumulative frequency): (20, 5), (40, 17), (60, 35), (80, 40), starting from (0, 0).\n\nFor n = 40: read the median at the 20th value, Q1 at the 10th, Q3 at the 30th. By linear interpolation: median ≈ 40 + (20 − 17)/18 · 20 ≈ 43.33 g.',
        keyPoints: ['Cumulative = running total', 'Plot at the upper class boundary', 'Median n/2, Q1 n/4, Q3 3n/4'],
        examples: [
          { example: 'How many values have a mass below 60 g?', solution: '5 + 12 + 18 = 35.' },
          { example: 'Estimate the median (n = 40).', solution: 'The 20th value is in the 40–60 class: 40 + (20 − 17)/18 · 20 ≈ 43.33 g.' },
        ],
        commonMistakes: [
          { mistake: 'The points are plotted at the class midpoints.', fix: 'Cumulative frequency belongs to the upper class boundary.' },
          { mistake: 'The median is read at 40 (the total).', fix: 'Read the median at half: 40 ÷ 2 = 20.' },
        ],
        practice: [
          { problem: 'At which value is Q1 read when n = 40?', solution: 'at the 10th value', steps: ['Q1 at n/4.', '40 ÷ 4 = 10.'] },
          { problem: 'How many values have a mass above 40 g?', solution: '23', steps: ['17 are below 40 g.', '40 − 17 = 23.'] },
          { problem: 'What percentage have a mass below 40 g?', solution: '42.5%', steps: ['17 out of 40.', '17/40 = 0.425 = 42.5%.'] },
        ],
      },
      de: {
        title: 'Summenhäufigkeit',
        objectives: ['Eine Tabelle der Summenhäufigkeiten ausfüllen und die Summenkurve zeichnen.', 'Median und Quartile aus der Summenkurve schätzen.'],
        theory: 'Die Summenhäufigkeit ist die laufende Summe der Häufigkeiten: 5, 5 + 12 = 17, 17 + 18 = 35, 35 + 5 = 40. Sie gibt an, wie viele Werte unter der oberen Klassengrenze liegen.\n\nDie Summenkurve zeichnet man durch die Punkte (obere Klassengrenze | Summenhäufigkeit): (20 | 5), (40 | 17), (60 | 35), (80 | 40), beginnend bei (0 | 0).\n\nFür n = 40: Den Median liest man beim 20. Wert ab, Q1 beim 10., Q3 beim 30. Mit linearer Interpolation: Median ≈ 40 + (20 − 17)/18 · 20 ≈ 43,33 g.',
        keyPoints: ['Summenhäufigkeit = laufende Summe', 'Punkte an der oberen Klassengrenze', 'Median n/2, Q1 n/4, Q3 3n/4'],
        examples: [
          { example: 'Wie viele Werte haben eine Masse unter 60 g?', solution: '5 + 12 + 18 = 35.' },
          { example: 'Schätzen Sie den Median (n = 40).', solution: 'Der 20. Wert liegt in der Klasse 40–60: 40 + (20 − 17)/18 · 20 ≈ 43,33 g.' },
        ],
        commonMistakes: [
          { mistake: 'Die Punkte werden bei den Klassenmitten eingetragen.', fix: 'Die Summenhäufigkeit gehört zur oberen Klassengrenze.' },
          { mistake: 'Der Median wird bei 40 (der Gesamtzahl) abgelesen.', fix: 'Den Median liest man bei der Hälfte ab: 40 : 2 = 20.' },
        ],
        practice: [
          { problem: 'Bei welchem Wert liest man Q1 ab, wenn n = 40?', solution: 'beim 10. Wert', steps: ['Q1 bei n/4.', '40 : 4 = 10.'] },
          { problem: 'Wie viele Werte haben eine Masse über 40 g?', solution: '23', steps: ['Unter 40 g liegen 17.', '40 − 17 = 23.'] },
          { problem: 'Wie viel Prozent haben eine Masse unter 40 g?', solution: '42,5 %', steps: ['17 von 40.', '17/40 = 0,425 = 42,5 %.'] },
        ],
      },
    },
    // ───────── 4. Scatter graphs and correlation
    {
      slug: 'g11-data-handling-scatter-correlation',
      visuals: [{
        type: 'scatterPlot', view: { xMin: 0, xMax: 10, yMin: 40, yMax: 100 },
        points: [[1, 48], [2, 55], [3, 58], [4, 62], [5, 70], [6, 72], [7, 78], [8, 85], [9, 88]],
        trend: [[0, 44], [10, 94]],
        xLabel: alt('orë studimi', 'hours of study', 'Lernstunden'), yLabel: alt('nota (%)', 'mark (%)', 'Note (%)'),
        caption: alt('Korrelacion pozitiv: sa më shumë orë, aq notë më e lartë. Drejtëza e përafrimit: y = 5x + 44.', 'Positive correlation: more hours, higher marks. Line of best fit: y = 5x + 44.', 'Positive Korrelation: mehr Stunden, bessere Ergebnisse. Ausgleichsgerade: y = 5x + 44.'),
        alt: alt('Grafik me pika i orëve të studimit dhe notave, me pika që ngjiten dhe drejtëzën e përafrimit.', 'Scatter graph of hours of study and marks, with rising points and a line of best fit.', 'Streudiagramm von Lernstunden und Ergebnissen mit steigenden Punkten und einer Ausgleichsgeraden.'),
      }],
      answers: {
        examples: ['text', [['5 * 6.5 + 44', 76.5]]],
        practice: ['text', [['5 * 3 + 44', 59]], [['5 * 20 + 44', 144]]],
      },
      al: {
        title: 'Grafikët me pika dhe korrelacioni',
        objectives: ['Të dalloni korrelacionin pozitiv, negativ dhe mungesën e tij.', 'Të përdorni drejtëzën e përafrimit për vlerësime dhe të njihni kufijtë e saj.'],
        theory: 'Grafiku me pika tregon çifte të dhënash (x, y). Kur pikat ngjiten, korrelacioni është pozitiv; kur zbresin, negativ; kur janë të shpërndara pa drejtim, nuk ka korrelacion.\n\nDrejtëza e përafrimit kalon në mes të pikave. Me të vlerësojmë vlera brenda të dhënave (interpolim): për 6,5 orë, y = 5 · 6,5 + 44 = 76,5. Jashtë të dhënave (ekstrapolim) vlerësimi nuk është i besueshëm.\n\nKorrelacioni nuk do të thotë shkak: dy madhësi mund të rriten bashkë për shkak të një faktori të tretë.',
        keyPoints: ['Pikat ngjiten → pozitiv; zbresin → negativ', 'Interpolimi i besueshëm, ekstrapolimi jo', 'Korrelacioni ≠ shkak'],
        examples: [
          { example: 'Kur rriten orët e studimit, notat priren të rriten. Çfarë korrelacioni është?', solution: 'Korrelacion pozitiv.' },
          { example: 'Me drejtëzën y = 5x + 44 vlerësoni notën për 6,5 orë studim.', solution: 'y = 5 · 6,5 + 44 = 76,5%.' },
        ],
        commonMistakes: [
          { mistake: 'Korrelacioni i fortë merret si provë se njëra madhësi shkakton tjetrën.', fix: 'Korrelacioni tregon lidhje, jo shkak.' },
          { mistake: 'Drejtëza përdoret shumë jashtë të dhënave.', fix: 'Jashtë intervalit të të dhënave vlerësimi mund të jetë i pakuptimtë.' },
        ],
        practice: [
          { problem: 'Sa më e ngrohtë dita, aq më pak pije të ngrohta shiten. Çfarë korrelacioni është?', solution: 'Korrelacion negativ.', steps: ['Kur x rritet, y zvogëlohet.', 'Pra korrelacion negativ.'] },
          { problem: 'Me y = 5x + 44 vlerësoni notën për 3 orë.', solution: '59%', steps: ['5 · 3 + 44.', '= 59%.'] },
          { problem: 'Pse vlerësimi për 20 orë nuk është i besueshëm?', solution: 'Jep 144%, që është e pamundur', steps: ['5 · 20 + 44 = 144.', '20 orë është jashtë të dhënave (ekstrapolim) dhe nota nuk e kalon 100%.'] },
        ],
      },
      en: {
        title: 'Scatter graphs and correlation',
        objectives: ['Recognise positive, negative and no correlation.', 'Use a line of best fit for estimates and know its limits.'],
        theory: 'A scatter graph shows pairs of data (x, y). When the points go up, the correlation is positive; when they go down, negative; when they are scattered with no direction, there is no correlation.\n\nThe line of best fit goes through the middle of the points. Use it to estimate values inside the data (interpolation): for 6.5 hours, y = 5 · 6.5 + 44 = 76.5. Outside the data (extrapolation) the estimate is not reliable.\n\nCorrelation does not mean cause: two quantities may rise together because of a third factor.',
        keyPoints: ['Points go up → positive; go down → negative', 'Interpolation is reliable, extrapolation is not', 'Correlation ≠ cause'],
        examples: [
          { example: 'As hours of study go up, marks tend to go up. What kind of correlation is it?', solution: 'Positive correlation.' },
          { example: 'Use the line y = 5x + 44 to estimate the mark for 6.5 hours of study.', solution: 'y = 5 · 6.5 + 44 = 76.5%.' },
        ],
        commonMistakes: [
          { mistake: 'A strong correlation is taken as proof that one quantity causes the other.', fix: 'Correlation shows a link, not a cause.' },
          { mistake: 'The line is used far outside the data.', fix: 'Outside the range of the data the estimate may make no sense.' },
        ],
        practice: [
          { problem: 'The warmer the day, the fewer hot drinks are sold. What kind of correlation is it?', solution: 'Negative correlation.', steps: ['As x goes up, y goes down.', 'So the correlation is negative.'] },
          { problem: 'Use y = 5x + 44 to estimate the mark for 3 hours.', solution: '59%', steps: ['5 · 3 + 44.', '= 59%.'] },
          { problem: 'Why is the estimate for 20 hours not reliable?', solution: 'It gives 144%, which is impossible', steps: ['5 · 20 + 44 = 144.', '20 hours is outside the data (extrapolation) and a mark cannot exceed 100%.'] },
        ],
      },
      de: {
        title: 'Streudiagramme und Korrelation',
        objectives: ['Positive, negative und keine Korrelation erkennen.', 'Eine Ausgleichsgerade für Schätzungen nutzen und ihre Grenzen kennen.'],
        theory: 'Ein Streudiagramm zeigt Datenpaare (x | y). Steigen die Punkte, ist die Korrelation positiv; fallen sie, negativ; liegen sie ohne Richtung verstreut, gibt es keine Korrelation.\n\nDie Ausgleichsgerade verläuft mitten durch die Punkte. Mit ihr schätzt man Werte innerhalb der Daten (Interpolation): Für 6,5 Stunden ist y = 5 · 6,5 + 44 = 76,5. Außerhalb der Daten (Extrapolation) ist die Schätzung unzuverlässig.\n\nKorrelation bedeutet keine Ursache: Zwei Größen können wegen eines dritten Faktors gemeinsam steigen.',
        keyPoints: ['Punkte steigen → positiv; fallen → negativ', 'Interpolation zuverlässig, Extrapolation nicht', 'Korrelation ≠ Ursache'],
        examples: [
          { example: 'Mit mehr Lernstunden werden die Noten tendenziell besser. Welche Korrelation liegt vor?', solution: 'Positive Korrelation.' },
          { example: 'Schätzen Sie mit der Geraden y = 5x + 44 das Ergebnis für 6,5 Lernstunden.', solution: 'y = 5 · 6,5 + 44 = 76,5 %.' },
        ],
        commonMistakes: [
          { mistake: 'Eine starke Korrelation wird als Beweis genommen, dass eine Größe die andere verursacht.', fix: 'Korrelation zeigt einen Zusammenhang, keine Ursache.' },
          { mistake: 'Die Gerade wird weit außerhalb der Daten verwendet.', fix: 'Außerhalb des Datenbereichs kann die Schätzung sinnlos sein.' },
        ],
        practice: [
          { problem: 'Je wärmer der Tag, desto weniger heiße Getränke werden verkauft. Welche Korrelation ist das?', solution: 'Negative Korrelation.', steps: ['Wenn x steigt, sinkt y.', 'Also negative Korrelation.'] },
          { problem: 'Schätzen Sie mit y = 5x + 44 das Ergebnis für 3 Stunden.', solution: '59 %', steps: ['5 · 3 + 44.', '= 59 %.'] },
          { problem: 'Warum ist die Schätzung für 20 Stunden unzuverlässig?', solution: 'Sie ergibt 144 %, das ist unmöglich', steps: ['5 · 20 + 44 = 144.', '20 Stunden liegen außerhalb der Daten (Extrapolation), und mehr als 100 % gibt es nicht.'] },
        ],
      },
    },
    // ───────── 5. Time series
    {
      slug: 'g11-data-handling-time-series',
      visuals: [{
        type: 'barChart', max: 50, step: 10, showValues: true,
        bars: [
          { label: alt('V1 T1', 'Y1 Q1', 'J1 Q1'), value: 20 }, { label: alt('T2', 'Q2', 'Q2'), value: 32 }, { label: alt('T3', 'Q3', 'Q3'), value: 44 }, { label: alt('T4', 'Q4', 'Q4'), value: 24 },
          { label: alt('V2 T1', 'Y2 Q1', 'J2 Q1'), value: 24, color: 'secondary' }, { label: alt('T2', 'Q2', 'Q2'), value: 36, color: 'secondary' }, { label: alt('T3', 'Q3', 'Q3'), value: 48, color: 'secondary' }, { label: alt('T4', 'Q4', 'Q4'), value: 28, color: 'secondary' },
        ],
        caption: alt('Shitjet (mijëra €) sipas tremujorëve për dy vite: kulmi çdo vit te T3 (sezonaliteti) dhe rritje e lehtë nga viti në vit (trendi).', 'Sales (thousand €) by quarter over two years: the peak is in Q3 every year (seasonal pattern) with a gentle rise year on year (trend).', 'Umsatz (Tausend €) nach Quartalen über zwei Jahre: jedes Jahr Höchstwert im Q3 (Saisonmuster) und ein leichter Anstieg von Jahr zu Jahr (Trend).'),
        alt: alt('Tetë shtylla: 20, 32, 44, 24, 24, 36, 48, 28.', 'Eight bars: 20, 32, 44, 24, 24, 36, 48, 28.', 'Acht Säulen: 20, 32, 44, 24, 24, 36, 48, 28.'),
      }],
      answers: {
        examples: [[['(20 + 32 + 44 + 24) / 4', 30]], [['(32 + 44 + 24 + 24) / 4', 31]]],
        practice: [[['(44 + 24 + 24 + 36) / 4', 32]], 'text', [['(24 + 36 + 48 + 28) / 4', 34]]],
      },
      al: {
        title: 'Seritë kohore',
        objectives: ['Të lexoni trendin dhe ndryshimet sezonale në një seri kohore.', 'Të llogaritni mesataret lëvizëse.'],
        theory: 'Seria kohore jep vlerat e një madhësie në kohë të njëpasnjëshme (muaj, tremujorë, vite). Në të dallojmë trendin (drejtimin e përgjithshëm) dhe ndryshimet sezonale (që përsëriten çdo vit).\n\nMesatarja lëvizëse e zbut sezonalitetin: për të dhëna tremujore marrim mesataren e 4 vlerave radhazi dhe e zhvendosim dritaren me nga një: (20 + 32 + 44 + 24) : 4 = 30, (32 + 44 + 24 + 24) : 4 = 31, …\n\nNëse mesataret lëvizëse rriten, trendi është rritës.',
        keyPoints: ['Trendi = drejtimi i përgjithshëm', 'Sezonaliteti = model që përsëritet', 'Tremujore → mesatare lëvizëse me 4 vlera'],
        examples: [
          { example: 'Llogaritni mesataren e parë lëvizëse me 4 vlera për 20, 32, 44, 24, 24, 36, 48, 28.', solution: '(20 + 32 + 44 + 24) : 4 = 120 : 4 = 30.' },
          { example: 'Llogaritni mesataren e dytë lëvizëse dhe përshkruani trendin.', solution: '(32 + 44 + 24 + 24) : 4 = 31; mesataret rriten me 1, trendi është rritës.' },
        ],
        commonMistakes: [
          { mistake: 'Për të dhëna tremujore përdoret mesatare lëvizëse me 3 vlera.', fix: 'Dritarja duhet të mbulojë një vit të plotë: 4 tremujorë.' },
          { mistake: 'Kulmi i T3 lexohet si rritje e trendit.', fix: 'Ai përsëritet çdo vit: është sezonal, jo trend.' },
        ],
        practice: [
          { problem: 'Llogaritni mesataren e tretë lëvizëse.', solution: '32', steps: ['(44 + 24 + 24 + 36).', '128 : 4 = 32.'] },
          { problem: 'Në cilin tremujor janë shitjet më të larta çdo vit?', solution: 'Në T3', steps: ['Viti 1: 44 te T3; viti 2: 48 te T3.', 'Kulmi sezonal është T3.'] },
          { problem: 'Sa janë shitjet mesatare për tremujor në vitin 2?', solution: '34', steps: ['24 + 36 + 48 + 28 = 136.', '136 : 4 = 34.'] },
        ],
      },
      en: {
        title: 'Time series',
        objectives: ['Read the trend and seasonal variation in a time series.', 'Work out moving averages.'],
        theory: 'A time series gives the values of a quantity at successive times (months, quarters, years). In it we look for the trend (the general direction) and seasonal variation (a pattern that repeats every year).\n\nA moving average smooths out the seasonal pattern: for quarterly data take the mean of 4 values in a row, then move the window on by one: (20 + 32 + 44 + 24) ÷ 4 = 30, (32 + 44 + 24 + 24) ÷ 4 = 31, …\n\nIf the moving averages rise, the trend is upward.',
        keyPoints: ['Trend = general direction', 'Seasonal = repeating pattern', 'Quarterly → 4-point moving average'],
        examples: [
          { example: 'Work out the first 4-point moving average for 20, 32, 44, 24, 24, 36, 48, 28.', solution: '(20 + 32 + 44 + 24) ÷ 4 = 120 ÷ 4 = 30.' },
          { example: 'Work out the second moving average and describe the trend.', solution: '(32 + 44 + 24 + 24) ÷ 4 = 31; the averages rise by 1, so the trend is upward.' },
        ],
        commonMistakes: [
          { mistake: 'A 3-point moving average is used for quarterly data.', fix: 'The window must cover a whole year: 4 quarters.' },
          { mistake: 'The Q3 peak is read as a rising trend.', fix: 'It comes back every year: it is seasonal, not trend.' },
        ],
        practice: [
          { problem: 'Work out the third moving average.', solution: '32', steps: ['(44 + 24 + 24 + 36).', '128 ÷ 4 = 32.'] },
          { problem: 'In which quarter are sales highest every year?', solution: 'In Q3', steps: ['Year 1: 44 in Q3; year 2: 48 in Q3.', 'The seasonal peak is Q3.'] },
          { problem: 'What are the mean quarterly sales in year 2?', solution: '34', steps: ['24 + 36 + 48 + 28 = 136.', '136 ÷ 4 = 34.'] },
        ],
      },
      de: {
        title: 'Zeitreihen',
        objectives: ['Trend und Saisonschwankung in einer Zeitreihe erkennen.', 'Gleitende Mittelwerte berechnen.'],
        theory: 'Eine Zeitreihe gibt die Werte einer Größe zu aufeinanderfolgenden Zeitpunkten an (Monate, Quartale, Jahre). Man erkennt darin den Trend (die allgemeine Richtung) und Saisonschwankungen (ein Muster, das sich jedes Jahr wiederholt).\n\nDer gleitende Mittelwert glättet die Saisonschwankung: Bei Quartalsdaten nimmt man den Mittelwert von 4 aufeinanderfolgenden Werten und verschiebt das Fenster jeweils um eins: (20 + 32 + 44 + 24) : 4 = 30, (32 + 44 + 24 + 24) : 4 = 31, …\n\nSteigen die gleitenden Mittelwerte, ist der Trend steigend.',
        keyPoints: ['Trend = allgemeine Richtung', 'Saison = wiederkehrendes Muster', 'Quartale → gleitender Mittelwert über 4 Werte'],
        examples: [
          { example: 'Berechnen Sie den ersten gleitenden Mittelwert über 4 Werte für 20, 32, 44, 24, 24, 36, 48, 28.', solution: '(20 + 32 + 44 + 24) : 4 = 120 : 4 = 30.' },
          { example: 'Berechnen Sie den zweiten gleitenden Mittelwert und beschreiben Sie den Trend.', solution: '(32 + 44 + 24 + 24) : 4 = 31; die Mittelwerte steigen um 1, der Trend ist steigend.' },
        ],
        commonMistakes: [
          { mistake: 'Für Quartalsdaten wird ein gleitender Mittelwert über 3 Werte verwendet.', fix: 'Das Fenster muss ein ganzes Jahr umfassen: 4 Quartale.' },
          { mistake: 'Der Höchstwert im Q3 wird als steigender Trend gelesen.', fix: 'Er kehrt jedes Jahr wieder: Er ist saisonal, kein Trend.' },
        ],
        practice: [
          { problem: 'Berechnen Sie den dritten gleitenden Mittelwert.', solution: '32', steps: ['(44 + 24 + 24 + 36).', '128 : 4 = 32.'] },
          { problem: 'In welchem Quartal ist der Umsatz jedes Jahr am höchsten?', solution: 'Im Q3', steps: ['Jahr 1: 44 im Q3; Jahr 2: 48 im Q3.', 'Der saisonale Höchstwert ist Q3.'] },
          { problem: 'Wie hoch ist der durchschnittliche Quartalsumsatz im Jahr 2?', solution: '34', steps: ['24 + 36 + 48 + 28 = 136.', '136 : 4 = 34.'] },
        ],
      },
    },
  ],
};
