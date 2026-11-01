// Grade 10 · Theme 4: Data handling (November)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g10-data-handling',
  i18n: {
    al: { title: 'Përpunimi i të dhënave', description: 'Paraqitja e të dhënave dhe tabelat me dy hyrje, mesataret dhe shpërndarja, diagramet e dendurive.' },
    en: { title: 'Data handling', description: 'Presenting data and two-way tables, averages and spread, frequency diagrams.' },
    de: { title: 'Daten auswerten', description: 'Daten darstellen und Vierfeldertafeln, Mittelwerte und Streuung, Häufigkeitsdiagramme.' },
  },
  lessons: [
    // ───────── 1. Presenting data
    {
      slug: 'g10-data-handling-presenting-data',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '', cells: [alt('Merr sport', 'Does sport', 'Treibt Sport'), alt('Nuk merr', 'Does not', 'Treibt keinen'), alt('Gjithsej', 'Total', 'Gesamt')] },
          { head: alt('Djem', 'Boys', 'Jungen'), cells: ['9', '5', '14'] },
          { head: alt('Vajza', 'Girls', 'Mädchen'), cells: ['7', '9', '16'] },
          { head: alt('Gjithsej', 'Total', 'Gesamt'), cells: ['16', '14', '30'] },
        ],
        highlight: [[3, 0]],
        caption: alt('Tabelë me dy hyrje për 30 nxënës: rreshtat dhe kolonat mblidhen te totalet.', 'Two-way table for 30 students: rows and columns add up to the totals.', 'Vierfeldertafel für 30 Schüler: Zeilen und Spalten ergeben die Summen.'),
        alt: alt('Tabelë: djem 9 me sport, 5 pa; vajza 7 me sport, 9 pa; gjithsej 16 dhe 14.', 'Table: boys 9 do sport, 5 do not; girls 7 do sport, 9 do not; totals 16 and 14.', 'Tabelle: Jungen 9 mit Sport, 5 ohne; Mädchen 7 mit, 9 ohne; Summen 16 und 14.'),
      }],
      answers: {
        examples: [[['9 + 7', 16]], [['7 / 16 * 100', 43.75]]],
        practice: [[['5 + 9', 14]], [['9 / 16', '9/16', 1e-9, '9/16']], [['16 / 30 * 360', 192]]],
      },
      al: {
        title: 'Paraqitja e të dhënave',
        objectives: ['Të lexoni dhe plotësoni tabela me dy hyrje.', 'Të zgjidhni dhe të ndërtoni diagramin e përshtatshëm.'],
        theory: 'Tabela me dy hyrje klasifikon të dhënat sipas dy tipareve njëherësh (p.sh. gjinia dhe sporti). Çdo rresht dhe çdo kolonë mblidhen te totali; totali i përgjithshëm del nga të dyja anët.\n\nNga tabela llogarisim pjesë dhe përqindje: nga 16 vajza, 7 marrin sport → 7/16 = 43,75%. Kujdes cili është "e tëra": nga vajzat apo nga të gjithë nxënësit?\n\nZgjedhja e diagramit: shtylla për krahasim kategorish, rrethor për pjesë të së tërës (këndi = f/n · 360°), vijor për ndryshime në kohë.',
        keyPoints: ['Rreshtat dhe kolonat → totalet', 'Përqindja: pjesa : e tëra (cila e tërë?)', 'Këndi rrethor = f/n · 360°'],
        examples: [
          { example: 'Sa nxënës marrin sport?', solution: '9 djem + 7 vajza = 16.' },
          { example: 'Sa përqind e vajzave marrin sport?', solution: '7/16 = 0,4375 = 43,75%.' },
        ],
        commonMistakes: [
          { mistake: 'Përqindja e vajzave me sport = 7/30.', fix: 'Pyetja është për vajzat: e tëra është 16, jo 30.' },
        ],
        practice: [
          { problem: 'Sa nxënës nuk marrin sport?', solution: '14', steps: ['5 + 9.', '= 14.'] },
          { problem: 'Çfarë pjese të atyre që marrin sport përbëjnë djemtë?', solution: '9/16', steps: ['Djem me sport 9; gjithsej me sport 16.', '9/16.'] },
          { problem: 'Sa gradë do të ishte pjesa "marrin sport" në një diagram rrethor?', solution: '192°', steps: ['16/30 · 360°.', '= 192°.'] },
        ],
      },
      en: {
        title: 'Presenting data',
        objectives: ['Read and complete two-way tables.', 'Choose and draw a suitable chart.'],
        theory: 'A two-way table sorts data by two features at once (e.g. gender and sport). Each row and each column adds up to its total; the grand total comes out both ways.\n\nFrom the table we work out fractions and percentages: of 16 girls, 7 do sport → 7/16 = 43.75%. Be careful which is "the whole": the girls or all the students?\n\nChoosing a chart: bars to compare categories, a pie for parts of a whole (angle = f/n · 360°), a line for change over time.',
        keyPoints: ['Rows and columns → totals', 'Percentage: part ÷ whole (which whole?)', 'Pie angle = f/n · 360°'],
        examples: [
          { example: 'How many students do sport?', solution: '9 boys + 7 girls = 16.' },
          { example: 'What percentage of the girls do sport?', solution: '7/16 = 0.4375 = 43.75%.' },
        ],
        commonMistakes: [
          { mistake: 'Percentage of girls doing sport = 7/30.', fix: 'The question is about girls: the whole is 16, not 30.' },
        ],
        practice: [
          { problem: 'How many students do not do sport?', solution: '14', steps: ['5 + 9.', '= 14.'] },
          { problem: 'What fraction of those who do sport are boys?', solution: '9/16', steps: ['Boys doing sport 9; all doing sport 16.', '9/16.'] },
          { problem: 'How many degrees would "does sport" be in a pie chart?', solution: '192°', steps: ['16/30 · 360°.', '= 192°.'] },
        ],
      },
      de: {
        title: 'Daten darstellen',
        objectives: ['Vierfeldertafeln lesen und ergänzen.', 'Ein passendes Diagramm wählen und zeichnen.'],
        theory: 'Eine Vierfeldertafel ordnet Daten nach zwei Merkmalen zugleich (z. B. Geschlecht und Sport). Jede Zeile und jede Spalte ergibt ihre Summe; die Gesamtsumme ergibt sich auf beiden Wegen.\n\nAus der Tafel berechnet man Anteile und Prozente: Von 16 Mädchen treiben 7 Sport → 7/16 = 43,75 %. Achtung, was „das Ganze“ ist: die Mädchen oder alle Schüler?\n\nDiagrammwahl: Säulen zum Vergleichen, Kreis für Anteile (Winkel = h/n · 360°), Linie für Entwicklungen über die Zeit.',
        keyPoints: ['Zeilen und Spalten → Summen', 'Prozent: Teil : Ganzes (welches Ganze?)', 'Kreiswinkel = h/n · 360°'],
        examples: [
          { example: 'Wie viele Schüler treiben Sport?', solution: '9 Jungen + 7 Mädchen = 16.' },
          { example: 'Wie viel Prozent der Mädchen treiben Sport?', solution: '7/16 = 0,4375 = 43,75 %.' },
        ],
        commonMistakes: [
          { mistake: 'Anteil der Mädchen mit Sport = 7/30.', fix: 'Gefragt ist nach den Mädchen: Das Ganze ist 16, nicht 30.' },
        ],
        practice: [
          { problem: 'Wie viele Schüler treiben keinen Sport?', solution: '14', steps: ['5 + 9.', '= 14.'] },
          { problem: 'Welcher Anteil der Sporttreibenden sind Jungen?', solution: '9/16', steps: ['Jungen mit Sport 9; alle mit Sport 16.', '9/16.'] },
          { problem: 'Wie viel Grad hätte „treibt Sport“ im Kreisdiagramm?', solution: '192°', steps: ['16/30 · 360°.', '= 192°.'] },
        ],
      },
    },

    // ───────── 2. Averages and spread
    {
      slug: 'g10-data-handling-averages-spread',
      visuals: [{
        type: 'boxPlot', min: 2, q1: 4, median: 7, q3: 10, max: 12, axis: { from: 0, to: 14, step: 2 },
        caption: alt('Të dhënat 2, 4, 5, 7, 8, 10, 12: Q1 = 4, mediana 7, Q3 = 10; gjerësia ndërkuartile 10 − 4 = 6.', 'The data 2, 4, 5, 7, 8, 10, 12: Q1 = 4, median 7, Q3 = 10; interquartile range 10 − 4 = 6.', 'Die Daten 2, 4, 5, 7, 8, 10, 12: Q1 = 4, Median 7, Q3 = 10; Quartilsabstand 10 − 4 = 6.'),
        alt: alt('Diagram kuti: min 2, Q1 4, mediana 7, Q3 10, max 12.', 'Box plot: min 2, Q1 4, median 7, Q3 10, max 12.', 'Boxplot: Minimum 2, Q1 4, Median 7, Q3 10, Maximum 12.'),
      }],
      answers: {
        examples: [[['19 - 4', 15], ['12', 12]], [['10 - 4', 6]]],
        practice: [[['(12 + 7 + 19 + 4 + 15) / 5', 11.4]], [['(8 + 9) / 2', 8.5]], [['11 - 3', 8]]],
      },
      al: {
        title: 'Mesataret dhe shpërndarja',
        objectives: ['Të llogaritni mesataren, medianën, modën dhe gjerësinë (rangun).', 'Të gjeni kuartilet dhe gjerësinë ndërkuartile.'],
        theory: 'Mesataret: mesatarja aritmetike (shuma : n), mediana (vlera e mesit pas renditjes), moda (vlera më e shpeshtë). Shpërndarja tregon sa të përhapura janë të dhënat: gjerësia (rangu) = max − min.\n\nKuartilet ndajnë të dhënat e renditura në katër pjesë: Q1 është mediana e gjysmës së poshtme, Q3 mediana e gjysmës së sipërme. Gjerësia ndërkuartile Q3 − Q1 mat përhapjen e 50% të mesit dhe nuk ndikohet nga vlerat ekstreme.\n\nPër 2, 4, 5, 7, 8, 10, 12: mediana 7, Q1 = 4, Q3 = 10, gjerësia ndërkuartile 6. Diagrami kuti i tregon të pesë vlerat.',
        keyPoints: ['Gjerësia = max − min', 'Q1, mediana, Q3', 'Gjerësia ndërkuartile = Q3 − Q1'],
        examples: [
          { example: 'Gjeni gjerësinë dhe medianën e 12, 7, 19, 4, 15.', solution: 'Renditja: 4, 7, 12, 15, 19. Gjerësia 19 − 4 = 15; mediana 12.' },
          { example: 'Gjeni gjerësinë ndërkuartile të 2, 4, 5, 7, 8, 10, 12.', solution: 'Q1 = 4 (mes i 2, 4, 5), Q3 = 10 (mes i 8, 10, 12); 10 − 4 = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Gjerësia = vlera e fundit − e para pa renditje: 15 − 12 = 3.', fix: 'Gjerësia është max − min: 19 − 4 = 15.' },
        ],
        practice: [
          { problem: 'Gjeni mesataren e 12, 7, 19, 4, 15.', solution: '11,4', steps: ['Shuma 57.', '57 : 5 = 11,4.'] },
          { problem: 'Gjeni medianën e 3, 8, 8, 9, 14, 20.', solution: '8,5', steps: ['Dy vlerat e mesit: 8 dhe 9.', '(8 + 9) : 2 = 8,5.'] },
          { problem: 'Gjeni gjerësinë ndërkuartile të 1, 3, 5, 7, 9, 11, 13.', solution: '8', steps: ['Q1 = 3, Q3 = 11.', '11 − 3 = 8.'] },
        ],
      },
      en: {
        title: 'Averages and spread',
        objectives: ['Work out the mean, median, mode and range.', 'Find the quartiles and the interquartile range.'],
        theory: 'Averages: the mean (sum ÷ n), the median (middle value after ordering), the mode (most frequent value). The spread shows how widely the data are scattered: range = max − min.\n\nQuartiles split the ordered data into four parts: Q1 is the median of the lower half, Q3 the median of the upper half. The interquartile range Q3 − Q1 measures the spread of the middle 50% and is not affected by extreme values.\n\nFor 2, 4, 5, 7, 8, 10, 12: median 7, Q1 = 4, Q3 = 10, interquartile range 6. A box plot shows all five values.',
        keyPoints: ['Range = max − min', 'Q1, median, Q3', 'Interquartile range = Q3 − Q1'],
        examples: [
          { example: 'Find the range and the median of 12, 7, 19, 4, 15.', solution: 'In order: 4, 7, 12, 15, 19. Range 19 − 4 = 15; median 12.' },
          { example: 'Find the interquartile range of 2, 4, 5, 7, 8, 10, 12.', solution: 'Q1 = 4 (middle of 2, 4, 5), Q3 = 10 (middle of 8, 10, 12); 10 − 4 = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Range = last − first value without ordering: 15 − 12 = 3.', fix: 'The range is max − min: 19 − 4 = 15.' },
        ],
        practice: [
          { problem: 'Find the mean of 12, 7, 19, 4, 15.', solution: '11.4', steps: ['Sum 57.', '57 ÷ 5 = 11.4.'] },
          { problem: 'Find the median of 3, 8, 8, 9, 14, 20.', solution: '8.5', steps: ['The two middle values: 8 and 9.', '(8 + 9) ÷ 2 = 8.5.'] },
          { problem: 'Find the interquartile range of 1, 3, 5, 7, 9, 11, 13.', solution: '8', steps: ['Q1 = 3, Q3 = 11.', '11 − 3 = 8.'] },
        ],
      },
      de: {
        title: 'Mittelwerte und Streuung',
        objectives: ['Mittelwert, Median, Modalwert und Spannweite berechnen.', 'Quartile und Quartilsabstand bestimmen.'],
        theory: 'Mittelwerte: arithmetisches Mittel (Summe : n), Median (mittlerer Wert der geordneten Daten), Modalwert (häufigster Wert). Die Streuung zeigt, wie weit die Daten verteilt sind: Spannweite = max − min.\n\nQuartile teilen die geordneten Daten in vier Teile: Q1 ist der Median der unteren Hälfte, Q3 der Median der oberen Hälfte. Der Quartilsabstand Q3 − Q1 misst die Streuung der mittleren 50 % und wird von Ausreißern nicht beeinflusst.\n\nFür 2, 4, 5, 7, 8, 10, 12: Median 7, Q1 = 4, Q3 = 10, Quartilsabstand 6. Ein Boxplot zeigt alle fünf Kennwerte.',
        keyPoints: ['Spannweite = max − min', 'Q1, Median, Q3', 'Quartilsabstand = Q3 − Q1'],
        examples: [
          { example: 'Bestimmen Sie Spannweite und Median von 12, 7, 19, 4, 15.', solution: 'Geordnet: 4, 7, 12, 15, 19. Spannweite 19 − 4 = 15; Median 12.' },
          { example: 'Bestimmen Sie den Quartilsabstand von 2, 4, 5, 7, 8, 10, 12.', solution: 'Q1 = 4 (Mitte von 2, 4, 5), Q3 = 10 (Mitte von 8, 10, 12); 10 − 4 = 6.' },
        ],
        commonMistakes: [
          { mistake: 'Spannweite = letzter − erster Wert ohne Ordnen: 15 − 12 = 3.', fix: 'Die Spannweite ist max − min: 19 − 4 = 15.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Mittelwert von 12, 7, 19, 4, 15.', solution: '11,4', steps: ['Summe 57.', '57 : 5 = 11,4.'] },
          { problem: 'Bestimmen Sie den Median von 3, 8, 8, 9, 14, 20.', solution: '8,5', steps: ['Die beiden mittleren Werte: 8 und 9.', '(8 + 9) : 2 = 8,5.'] },
          { problem: 'Bestimmen Sie den Quartilsabstand von 1, 3, 5, 7, 9, 11, 13.', solution: '8', steps: ['Q1 = 3, Q3 = 11.', '11 − 3 = 8.'] },
        ],
      },
    },

    // ───────── 3. Frequency diagrams
    {
      slug: 'g10-data-handling-frequency-diagrams',
      visuals: [{
        type: 'histogram', step: 2,
        bins: [{ from: 0, to: 10, count: 4 }, { from: 10, to: 20, count: 10 }, { from: 20, to: 30, count: 6 }],
        caption: alt('Klasat 0–10, 10–20, 20–30 me dendurit 4, 10, 6. Klasa modale: 10–20.', 'Classes 0–10, 10–20, 20–30 with frequencies 4, 10, 6. Modal class: 10–20.', 'Klassen 0–10, 10–20, 20–30 mit den Häufigkeiten 4, 10, 6. Modale Klasse: 10–20.'),
        alt: alt('Histogram me tri klasa: 4, 10 dhe 6.', 'Histogram with three classes: 4, 10 and 6.', 'Histogramm mit drei Klassen: 4, 10 und 6.'),
      }],
      answers: {
        examples: [[['(5*4 + 15*10 + 25*6) / 20', 16]], 'text'],
        practice: [[['4 + 10 + 6', 20]], 'text', [['(2*3 + 6*5 + 10*2) / 10', 5.6]]],
      },
      al: {
        title: 'Diagramet e dendurive',
        objectives: ['Të ndërtoni dhe lexoni histogram për të dhëna të grupuara.', 'Të vlerësoni mesataren dhe të gjeni klasën modale dhe klasën e medianës.'],
        theory: 'Te të dhënat e grupuara, histogrami ka shtylla që prekin njëra-tjetrën mbi klasat. Klasa modale është klasa me dendurinë më të madhe.\n\nMesatarja vlerësohet me meset e klasave: x̄ ≈ Σ(mesi · f) : Σf. Për 0–10: 4, 10–20: 10, 20–30: 6 → (5 · 4 + 15 · 10 + 25 · 6) : 20 = 320 : 20 = 16.\n\nKlasa e medianës: me 20 vlera, mediana është ndërmjet vlerës së 10-të dhe 11-të. Dendurit kumulative janë 4, 14, 20, prandaj mediana bie në klasën 10–20.',
        keyPoints: ['Klasa modale: f më e madhe', 'x̄ ≈ Σ(mesi · f) : Σf', 'Klasa e medianës nga dendurit kumulative'],
        examples: [
          { example: 'Vlerësoni mesataren nga tabela 0–10: 4, 10–20: 10, 20–30: 6.', solution: '(5 · 4 + 15 · 10 + 25 · 6) : 20 = 320 : 20 = 16.' },
          { example: 'Cila është klasa modale?', solution: '10–20, me dendurinë 10.' },
        ],
        commonMistakes: [
          { mistake: 'Mesatarja = (4 + 10 + 6) : 3.', fix: 'Kjo është mesatarja e dendurive; përdoren meset e klasave të shumëzuara me dendurit.' },
        ],
        practice: [
          { problem: 'Sa vlera ka gjithsej tabela 4, 10, 6?', solution: '20', steps: ['4 + 10 + 6.', '= 20.'] },
          { problem: 'Në cilën klasë bie mediana?', solution: '10–20', steps: ['Mediana: vlerat e 10-ta dhe 11-ta.', 'Kumulative 4, 14 → klasa 10–20.'] },
          { problem: 'Vlerësoni mesataren për 0–4: 3, 4–8: 5, 8–12: 2.', solution: '5,6', steps: ['Meset 2, 6, 10: 6 + 30 + 20 = 56.', '56 : 10 = 5,6.'] },
        ],
      },
      en: {
        title: 'Frequency diagrams',
        objectives: ['Draw and read a histogram for grouped data.', 'Estimate the mean and find the modal class and the class containing the median.'],
        theory: 'For grouped data a histogram has touching bars over the classes. The modal class is the class with the highest frequency.\n\nThe mean is estimated with the class midpoints: x̄ ≈ Σ(midpoint · f) ÷ Σf. For 0–10: 4, 10–20: 10, 20–30: 6 → (5 · 4 + 15 · 10 + 25 · 6) ÷ 20 = 320 ÷ 20 = 16.\n\nThe class of the median: with 20 values the median is between the 10th and 11th. The cumulative frequencies are 4, 14, 20, so the median falls in the class 10–20.',
        keyPoints: ['Modal class: largest f', 'x̄ ≈ Σ(midpoint · f) ÷ Σf', 'Median class from cumulative frequencies'],
        examples: [
          { example: 'Estimate the mean from the table 0–10: 4, 10–20: 10, 20–30: 6.', solution: '(5 · 4 + 15 · 10 + 25 · 6) ÷ 20 = 320 ÷ 20 = 16.' },
          { example: 'What is the modal class?', solution: '10–20, with frequency 10.' },
        ],
        commonMistakes: [
          { mistake: 'Mean = (4 + 10 + 6) ÷ 3.', fix: 'That is the mean of the frequencies; use the class midpoints times the frequencies.' },
        ],
        practice: [
          { problem: 'How many values does the table 4, 10, 6 have?', solution: '20', steps: ['4 + 10 + 6.', '= 20.'] },
          { problem: 'In which class does the median lie?', solution: '10–20', steps: ['Median: the 10th and 11th values.', 'Cumulative 4, 14 → class 10–20.'] },
          { problem: 'Estimate the mean for 0–4: 3, 4–8: 5, 8–12: 2.', solution: '5.6', steps: ['Midpoints 2, 6, 10: 6 + 30 + 20 = 56.', '56 ÷ 10 = 5.6.'] },
        ],
      },
      de: {
        title: 'Häufigkeitsdiagramme',
        objectives: ['Histogramme für klassierte Daten erstellen und lesen.', 'Den Mittelwert schätzen und die modale Klasse sowie die Medianklasse bestimmen.'],
        theory: 'Bei klassierten Daten hat ein Histogramm aneinanderstoßende Säulen über den Klassen. Die modale Klasse ist die Klasse mit der größten Häufigkeit.\n\nDen Mittelwert schätzt man mit den Klassenmitten: x̄ ≈ Σ(Mitte · h) : Σh. Für 0–10: 4, 10–20: 10, 20–30: 6 → (5 · 4 + 15 · 10 + 25 · 6) : 20 = 320 : 20 = 16.\n\nMedianklasse: Bei 20 Werten liegt der Median zwischen dem 10. und 11. Wert. Die kumulierten Häufigkeiten sind 4, 14, 20, also liegt der Median in der Klasse 10–20.',
        keyPoints: ['Modale Klasse: größtes h', 'x̄ ≈ Σ(Mitte · h) : Σh', 'Medianklasse aus kumulierten Häufigkeiten'],
        examples: [
          { example: 'Schätzen Sie den Mittelwert aus 0–10: 4, 10–20: 10, 20–30: 6.', solution: '(5 · 4 + 15 · 10 + 25 · 6) : 20 = 320 : 20 = 16.' },
          { example: 'Welche Klasse ist die modale Klasse?', solution: '10–20 mit der Häufigkeit 10.' },
        ],
        commonMistakes: [
          { mistake: 'Mittelwert = (4 + 10 + 6) : 3.', fix: 'Das ist das Mittel der Häufigkeiten; man nimmt Klassenmitten mal Häufigkeiten.' },
        ],
        practice: [
          { problem: 'Wie viele Werte hat die Tabelle 4, 10, 6?', solution: '20', steps: ['4 + 10 + 6.', '= 20.'] },
          { problem: 'In welcher Klasse liegt der Median?', solution: '10–20', steps: ['Median: 10. und 11. Wert.', 'Kumuliert 4, 14 → Klasse 10–20.'] },
          { problem: 'Schätzen Sie den Mittelwert für 0–4: 3, 4–8: 5, 8–12: 2.', solution: '5,6', steps: ['Mitten 2, 6, 10: 6 + 30 + 20 = 56.', '56 : 10 = 5,6.'] },
        ],
      },
    },
  ],
};
