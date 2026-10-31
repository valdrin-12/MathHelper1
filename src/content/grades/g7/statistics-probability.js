// Grade 7 · Theme 12: Statistics and probability (May–June)
const alt = (al, en, de) => ({ al, en, de });

const SPORTS = [
  { label: alt('futboll', 'football', 'Fußball'), value: 12 },
  { label: alt('basketboll', 'basketball', 'Basketball'), value: 9 },
  { label: alt('volejboll', 'volleyball', 'Volleyball'), value: 6 },
  { label: alt('tjetër', 'other', 'andere'), value: 3 },
];

export default {
  id: 'g7-statistics-probability',
  i18n: {
    al: { title: 'Statistika dhe probabiliteti', description: 'Tabelat e frekuencave, diagrami rrethor me kënde, probabiliteti statistikor dhe teorik.' },
    en: { title: 'Statistics and probability', description: 'Frequency tables, pie charts with angles, experimental and theoretical probability.' },
    de: { title: 'Statistik und Wahrscheinlichkeit', description: 'Häufigkeitstabellen, Kreisdiagramme mit Winkeln, relative Häufigkeit und Wahrscheinlichkeit.' },
  },
  lessons: [
    // ───────── 1. Frequency tables
    {
      slug: 'g7-statistics-probability-frequency-tables',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Nota', 'Mark', 'Note'), cells: ['2', '3', '4', '5'] },
          { head: alt('Denduria', 'Frequency', 'Absolute Häufigkeit'), cells: ['3', '5', '8', '4'] },
          { head: alt('Denduria relative', 'Relative frequency', 'Relative Häufigkeit'), cells: [{ n: 15, unit: '%' }, { n: 25, unit: '%' }, { n: 40, unit: '%' }, { n: 20, unit: '%' }] },
        ],
        highlight: [[2, 2]],
        caption: alt('Notat e 20 nxënësve. Denduria relative = denduria : 20; shuma e tyre është 100%.', 'The marks of 20 students. Relative frequency = frequency ÷ 20; together they make 100%.', 'Die Noten von 20 Schülern. Relative Häufigkeit = absolute Häufigkeit : 20; zusammen 100 %.'),
        alt: alt('Tabela: nota 2 – 3 herë (15%), 3 – 5 herë (25%), 4 – 8 herë (40%), 5 – 4 herë (20%).', 'Table: mark 2 – 3 times (15%), 3 – 5 times (25%), 4 – 8 times (40%), 5 – 4 times (20%).', 'Tabelle: Note 2 – 3-mal (15 %), 3 – 5-mal (25 %), 4 – 8-mal (40 %), 5 – 4-mal (20 %).'),
      }],
      answers: {
        examples: [[['8 / 20 * 100', 40]], [['(2*3 + 3*5 + 4*8 + 5*4) / 20', 3.65]]],
        practice: [[['6 / 24 * 100', 25]], [['(1*2 + 2*5 + 3*3) / 10', 2.1]], [['4', 4]]],
      },
      al: {
        title: 'Tabelat e frekuencave',
        objectives: ['Të ndërtoni tabelën e dendurive absolute dhe relative.', 'Të gjeni mesataren dhe modën nga një tabelë dendurish.'],
        theory: 'Denduria (absolute) tregon sa herë paraqitet një vlerë. Denduria relative tregon çfarë pjese të të gjithave zë ajo vlerë: denduria relative = denduria : numri i përgjithshëm. Shprehet si thyesë, numër dhjetor ose përqindje; shuma e të gjitha dendurive relative është 1 = 100%.\n\nNga tabela gjejmë lehtë modën: vlera me dendurinë më të madhe. Mesatarja: shumëzojmë çdo vlerë me dendurinë e saj, i mbledhim prodhimet dhe pjesëtojmë me numrin e përgjithshëm.\n\nNë tabelën e notave: (2 · 3 + 3 · 5 + 4 · 8 + 5 · 4) : 20 = 73 : 20 = 3,65.',
        keyPoints: ['Denduria relative = denduria : gjithsej', 'Shuma e dendurive relative = 100%', 'Mesatarja = Σ(vlera · denduria) : gjithsej'],
        examples: [
          { example: '8 nga 20 nxënës kanë notën 4. Sa është denduria relative?', solution: '8 : 20 = 0,4 = 40%.' },
          { example: 'Gjeni notën mesatare nga tabela e notave (20 nxënës).', solution: '(6 + 15 + 32 + 20) : 20 = 73 : 20 = 3,65.' },
        ],
        commonMistakes: [
          { mistake: 'Mesatarja = (2 + 3 + 4 + 5) : 4 = 3,5', fix: 'Çdo notë duhet shumëzuar me dendurinë e saj: mesatarja është 3,65.' },
          { mistake: 'Moda = 8 (denduria më e madhe).', fix: 'Moda është vlera (nota 4), jo denduria e saj.' },
        ],
        practice: [
          { problem: 'Në një klasë me 24 nxënës, 6 zgjodhën shahun. Sa është denduria relative në përqindje?', solution: '25%', steps: ['6 : 24 = 0,25.', '0,25 = 25%.'] },
          { problem: 'Vlerat 1, 2, 3 kanë dendurit 2, 5, 3. Gjeni mesataren.', solution: '2,1', steps: ['1 · 2 + 2 · 5 + 3 · 3 = 2 + 10 + 9 = 21.', '21 : 10 = 2,1.'] },
          { problem: 'Cila është moda në tabelën e notave (3, 5, 8, 4 herë për notat 2, 3, 4, 5)?', solution: '4', steps: ['Denduria më e madhe është 8.', 'Ajo i përket notës 4.'] },
        ],
      },
      en: {
        title: 'Frequency tables',
        objectives: ['Build a table of frequencies and relative frequencies.', 'Find the mean and the mode from a frequency table.'],
        theory: 'The frequency tells how many times a value occurs. The relative frequency tells what part of all the data that value is: relative frequency = frequency ÷ total. It is written as a fraction, a decimal or a percentage; all relative frequencies add up to 1 = 100%.\n\nFrom the table the mode is easy to find: the value with the highest frequency. The mean: multiply each value by its frequency, add the products and divide by the total.\n\nFor the table of marks: (2 · 3 + 3 · 5 + 4 · 8 + 5 · 4) ÷ 20 = 73 ÷ 20 = 3.65.',
        keyPoints: ['Relative frequency = frequency ÷ total', 'Relative frequencies add up to 100%', 'Mean = Σ(value · frequency) ÷ total'],
        examples: [
          { example: '8 out of 20 students got a 4. What is the relative frequency?', solution: '8 ÷ 20 = 0.4 = 40%.' },
          { example: 'Find the mean mark from the table of marks (20 students).', solution: '(6 + 15 + 32 + 20) ÷ 20 = 73 ÷ 20 = 3.65.' },
        ],
        commonMistakes: [
          { mistake: 'Mean = (2 + 3 + 4 + 5) ÷ 4 = 3.5', fix: 'Each mark must be multiplied by its frequency: the mean is 3.65.' },
          { mistake: 'Mode = 8 (the highest frequency).', fix: 'The mode is the value (mark 4), not its frequency.' },
        ],
        practice: [
          { problem: 'In a class of 24 students, 6 chose chess. What is the relative frequency as a percentage?', solution: '25%', steps: ['6 ÷ 24 = 0.25.', '0.25 = 25%.'] },
          { problem: 'The values 1, 2, 3 have frequencies 2, 5, 3. Find the mean.', solution: '2.1', steps: ['1 · 2 + 2 · 5 + 3 · 3 = 2 + 10 + 9 = 21.', '21 ÷ 10 = 2.1.'] },
          { problem: 'What is the mode of the table of marks (3, 5, 8, 4 times for marks 2, 3, 4, 5)?', solution: '4', steps: ['The highest frequency is 8.', 'It belongs to mark 4.'] },
        ],
      },
      de: {
        title: 'Häufigkeitstabellen',
        objectives: ['Eine Tabelle mit absoluten und relativen Häufigkeiten erstellen.', 'Mittelwert und Modalwert aus einer Häufigkeitstabelle bestimmen.'],
        theory: 'Die absolute Häufigkeit gibt an, wie oft ein Wert vorkommt. Die relative Häufigkeit gibt an, welchen Anteil der Wert an allen Daten hat: relative Häufigkeit = absolute Häufigkeit : Gesamtzahl. Man schreibt sie als Bruch, Dezimalzahl oder Prozent; alle relativen Häufigkeiten ergeben zusammen 1 = 100 %.\n\nAus der Tabelle liest man den Modalwert leicht ab: den Wert mit der größten Häufigkeit. Mittelwert: jeden Wert mit seiner Häufigkeit multiplizieren, die Produkte addieren und durch die Gesamtzahl teilen.\n\nFür die Notentabelle: (2 · 3 + 3 · 5 + 4 · 8 + 5 · 4) : 20 = 73 : 20 = 3,65.',
        keyPoints: ['Relative Häufigkeit = absolute Häufigkeit : Gesamtzahl', 'Alle relativen Häufigkeiten ergeben 100 %', 'Mittelwert = Σ(Wert · Häufigkeit) : Gesamtzahl'],
        examples: [
          { example: '8 von 20 Schülern haben die Note 4. Wie groß ist die relative Häufigkeit?', solution: '8 : 20 = 0,4 = 40 %.' },
          { example: 'Bestimmen Sie die Durchschnittsnote aus der Notentabelle (20 Schüler).', solution: '(6 + 15 + 32 + 20) : 20 = 73 : 20 = 3,65.' },
        ],
        commonMistakes: [
          { mistake: 'Mittelwert = (2 + 3 + 4 + 5) : 4 = 3,5', fix: 'Jede Note muss mit ihrer Häufigkeit multipliziert werden: Der Mittelwert ist 3,65.' },
          { mistake: 'Modalwert = 8 (die größte Häufigkeit).', fix: 'Der Modalwert ist der Wert (Note 4), nicht seine Häufigkeit.' },
        ],
        practice: [
          { problem: 'In einer Klasse mit 24 Schülern haben 6 Schach gewählt. Wie groß ist die relative Häufigkeit in Prozent?', solution: '25 %', steps: ['6 : 24 = 0,25.', '0,25 = 25 %.'] },
          { problem: 'Die Werte 1, 2, 3 haben die Häufigkeiten 2, 5, 3. Bestimmen Sie den Mittelwert.', solution: '2,1', steps: ['1 · 2 + 2 · 5 + 3 · 3 = 2 + 10 + 9 = 21.', '21 : 10 = 2,1.'] },
          { problem: 'Welcher Modalwert hat die Notentabelle (3-, 5-, 8- und 4-mal für die Noten 2, 3, 4, 5)?', solution: '4', steps: ['Die größte Häufigkeit ist 8.', 'Sie gehört zur Note 4.'] },
        ],
      },
    },

    // ───────── 2. Pie chart
    {
      slug: 'g7-statistics-probability-pie-chart',
      visuals: [{
        type: 'pieChart', slices: SPORTS,
        caption: alt('30 nxënës: futboll 12 → 12 : 30 · 360° = 144°; basketboll 108°, volejboll 72°, tjetër 36°.', '30 students: football 12 → 12 ÷ 30 · 360° = 144°; basketball 108°, volleyball 72°, other 36°.', '30 Schüler: Fußball 12 → 12 : 30 · 360° = 144°; Basketball 108°, Volleyball 72°, andere 36°.'),
        alt: alt('Diagram rrethor i sporteve të 30 nxënësve: futboll 40%, basketboll 30%, volejboll 20%, tjetër 10%.', 'Pie chart of the sports of 30 students: football 40%, basketball 30%, volleyball 20%, other 10%.', 'Kreisdiagramm der Sportarten von 30 Schülern: Fußball 40 %, Basketball 30 %, Volleyball 20 %, andere 10 %.'),
      }],
      answers: {
        examples: [[['12 / 30 * 360', 144]], [['25 / 100 * 360', 90]]],
        practice: [[['9 / 30 * 360', 108]], [['72 / 360 * 30', 6]], [['45 / 360 * 100', 12.5]]],
      },
      al: {
        title: 'Diagrami rrethor',
        objectives: ['Të njehsoni këndin e secilës pjesë të diagramit rrethor.', 'Të lexoni të dhëna nga një diagram rrethor.'],
        theory: 'Diagrami rrethor tregon si ndahet një e tërë. I gjithë rrethi, 360°, paraqet të gjitha të dhënat. Çdo pjesë merr një kënd në përpjesëtim me dendurinë e saj.\n\nKëndi = (denduria : gjithsej) · 360°. Nëse 12 nga 30 nxënës zgjodhën futbollin: 12 : 30 · 360° = 144°. Nga përqindja: 25% → 0,25 · 360° = 90°.\n\nAnasjelltas, nga këndi gjejmë sasinë: këndi 72° në diagramin e 30 nxënësve → 72 : 360 · 30 = 6 nxënës. Kontroll: shuma e të gjitha këndeve duhet të jetë 360°.',
        keyPoints: ['Këndi = denduria : gjithsej · 360°', '1% ↔ 3,6°;  25% ↔ 90°;  50% ↔ 180°', 'Shuma e këndeve = 360°'],
        examples: [
          { example: '12 nga 30 nxënës zgjodhën futbollin. Sa gradë është pjesa e tyre?', solution: '12 : 30 · 360° = 0,4 · 360° = 144°.' },
          { example: 'Një pjesë është 25%. Sa është këndi?', solution: '0,25 · 360° = 90°.' },
        ],
        commonMistakes: [
          { mistake: 'Këndi = 12 : 30 · 100 = 40°', fix: 'Rrethi ka 360°, jo 100: 0,4 · 360° = 144° (40% është përqindja).' },
        ],
        practice: [
          { problem: '9 nga 30 nxënës zgjodhën basketbollin. Sa gradë është pjesa?', solution: '108°', steps: ['9 : 30 = 0,3.', '0,3 · 360° = 108°.'] },
          { problem: 'Në diagramin e 30 nxënësve volejbolli ka 72°. Sa nxënës janë?', solution: '6', steps: ['72 : 360 = 0,2.', '0,2 · 30 = 6 nxënës.'] },
          { problem: 'Një pjesë ka këndin 45°. Sa përqind është?', solution: '12,5%', steps: ['45 : 360 = 0,125.', '0,125 = 12,5%.'] },
        ],
      },
      en: {
        title: 'Pie charts',
        objectives: ['Work out the angle of each sector of a pie chart.', 'Read data from a pie chart.'],
        theory: 'A pie chart shows how a whole is split up. The whole circle, 360°, stands for all the data. Each sector gets an angle in proportion to its frequency.\n\nAngle = (frequency ÷ total) · 360°. If 12 of 30 students chose football: 12 ÷ 30 · 360° = 144°. From a percentage: 25% → 0.25 · 360° = 90°.\n\nThe other way, from the angle we find the amount: an angle of 72° in a chart of 30 students → 72 ÷ 360 · 30 = 6 students. Check: all the angles must add up to 360°.',
        keyPoints: ['Angle = frequency ÷ total · 360°', '1% ↔ 3.6°;  25% ↔ 90°;  50% ↔ 180°', 'The angles add up to 360°'],
        examples: [
          { example: '12 of 30 students chose football. How many degrees is their sector?', solution: '12 ÷ 30 · 360° = 0.4 · 360° = 144°.' },
          { example: 'A sector is 25%. What is its angle?', solution: '0.25 · 360° = 90°.' },
        ],
        commonMistakes: [
          { mistake: 'Angle = 12 ÷ 30 · 100 = 40°', fix: 'A circle has 360°, not 100: 0.4 · 360° = 144° (40% is the percentage).' },
        ],
        practice: [
          { problem: '9 of 30 students chose basketball. How many degrees is the sector?', solution: '108°', steps: ['9 ÷ 30 = 0.3.', '0.3 · 360° = 108°.'] },
          { problem: 'In a chart of 30 students volleyball has 72°. How many students is that?', solution: '6', steps: ['72 ÷ 360 = 0.2.', '0.2 · 30 = 6 students.'] },
          { problem: 'A sector has an angle of 45°. What percentage is it?', solution: '12.5%', steps: ['45 ÷ 360 = 0.125.', '0.125 = 12.5%.'] },
        ],
      },
      de: {
        title: 'Kreisdiagramme',
        objectives: ['Den Winkel jedes Kreisausschnitts berechnen.', 'Daten aus einem Kreisdiagramm ablesen.'],
        theory: 'Ein Kreisdiagramm zeigt, wie ein Ganzes aufgeteilt ist. Der ganze Kreis, 360°, steht für alle Daten. Jeder Ausschnitt bekommt einen Winkel proportional zu seiner Häufigkeit.\n\nWinkel = (Häufigkeit : Gesamtzahl) · 360°. Wählen 12 von 30 Schülern Fußball: 12 : 30 · 360° = 144°. Aus Prozent: 25 % → 0,25 · 360° = 90°.\n\nUmgekehrt bestimmt man aus dem Winkel die Anzahl: 72° in einem Diagramm von 30 Schülern → 72 : 360 · 30 = 6 Schüler. Probe: Alle Winkel ergeben zusammen 360°.',
        keyPoints: ['Winkel = Häufigkeit : Gesamtzahl · 360°', '1 % ↔ 3,6°;  25 % ↔ 90°;  50 % ↔ 180°', 'Die Winkel ergeben zusammen 360°'],
        examples: [
          { example: '12 von 30 Schülern wählten Fußball. Wie viel Grad hat ihr Ausschnitt?', solution: '12 : 30 · 360° = 0,4 · 360° = 144°.' },
          { example: 'Ein Ausschnitt ist 25 %. Wie groß ist sein Winkel?', solution: '0,25 · 360° = 90°.' },
        ],
        commonMistakes: [
          { mistake: 'Winkel = 12 : 30 · 100 = 40°', fix: 'Ein Kreis hat 360°, nicht 100: 0,4 · 360° = 144° (40 % ist der Prozentsatz).' },
        ],
        practice: [
          { problem: '9 von 30 Schülern wählten Basketball. Wie viel Grad hat der Ausschnitt?', solution: '108°', steps: ['9 : 30 = 0,3.', '0,3 · 360° = 108°.'] },
          { problem: 'In einem Diagramm von 30 Schülern hat Volleyball 72°. Wie viele Schüler sind das?', solution: '6', steps: ['72 : 360 = 0,2.', '0,2 · 30 = 6 Schüler.'] },
          { problem: 'Ein Ausschnitt hat den Winkel 45°. Wie viel Prozent sind das?', solution: '12,5 %', steps: ['45 : 360 = 0,125.', '0,125 = 12,5 %.'] },
        ],
      },
    },

    // ───────── 3. Experimental and theoretical probability
    {
      slug: 'g7-statistics-probability-probability',
      visuals: [{
        type: 'barChart', max: 14, step: 2, multiColor: true,
        bars: [{ label: '1', value: 9 }, { label: '2', value: 11 }, { label: '3', value: 10 }, { label: '4', value: 8 }, { label: '5', value: 12 }, { label: '6', value: 10 }],
        caption: alt('Zari u hodh 60 herë. Teorikisht pritet çdo numër 60 · 1/6 = 10 herë; në eksperiment rezultatet ndryshojnë pak.', 'A die was rolled 60 times. In theory each number is expected 60 · 1/6 = 10 times; in the experiment the results vary a little.', 'Ein Würfel wurde 60-mal geworfen. Theoretisch erwartet man jede Zahl 60 · 1/6 = 10-mal; im Versuch schwanken die Ergebnisse etwas.'),
        alt: alt('Diagram me shtylla i 60 hedhjeve të zarit: 1 – 9, 2 – 11, 3 – 10, 4 – 8, 5 – 12, 6 – 10 herë.', 'Bar chart of 60 die rolls: 1 – 9, 2 – 11, 3 – 10, 4 – 8, 5 – 12, 6 – 10 times.', 'Säulendiagramm von 60 Würfen: 1 – 9, 2 – 11, 3 – 10, 4 – 8, 5 – 12, 6 – 10-mal.'),
      }],
      answers: {
        examples: [[['3 / 8', '3/8', 1e-9, '3/8']], [['28 / 50', 0.56]]],
        practice: [[['2 / 6', '1/3', 1e-9, '1/3']], [['6 / 10', '3/5', 1e-9, '3/5']], [['12 / 60', 0.2]]],
      },
      al: {
        title: 'Probabiliteti statistikor dhe teorik',
        objectives: ['Të njehsoni probabilitetin teorik të një ngjarjeje.', 'Të krahasoni probabilitetin teorik me dendurinë relative nga një eksperiment.'],
        theory: 'Kur të gjitha rezultatet janë njësoj të mundshme, probabiliteti teorik është P = numri i rezultateve të favorshme : numri i të gjitha rezultateve. Në qese me 3 topa të kuq dhe 5 blu: P(i kuq) = 3/8. Probabiliteti është ndërmjet 0 (e pamundur) dhe 1 (e sigurt).\n\nProbabiliteti statistikor (eksperimental) është denduria relative në një eksperiment: nëse monedha u hodh 50 herë dhe ra "stemë" 28 herë, denduria relative është 28/50 = 0,56.\n\nSa më shumë herë përsëritet eksperimenti, aq më afër probabilitetit teorik (këtu 0,5) zakonisht shkon denduria relative.',
        keyPoints: ['P = të favorshme : të gjitha të mundshme', '0 ≤ P ≤ 1', 'Statistikor = denduria relative e eksperimentit'],
        examples: [
          { example: 'Në qese ka 3 topa të kuq dhe 5 blu. Sa është P(i kuq)?', solution: '3 të favorshëm nga 3 + 5 = 8: P = 3/8.' },
          { example: 'Monedha u hodh 50 herë; "stema" ra 28 herë. Sa është probabiliteti statistikor?', solution: '28 : 50 = 0,56 (teorikisht 0,5).' },
        ],
        commonMistakes: [
          { mistake: 'P(i kuq) = 3/5 (të kuq : blu).', fix: 'Pjesëtohet me të gjitha rezultatet: 3/(3 + 5) = 3/8.' },
          { mistake: 'Pas 50 hedhjeve "stema" duhet të bjerë saktësisht 25 herë.', fix: 'Probabiliteti tregon çfarë pritet afërsisht; rezultati i eksperimentit ndryshon.' },
        ],
        practice: [
          { problem: 'Hidhet zari. Sa është P(numër më i madh se 4)?', solution: '1/3', steps: ['Të favorshme: 5 dhe 6 → 2.', 'P = 2/6 = 1/3.'] },
          { problem: 'Në qese ka 4 topa të gjelbër dhe 6 të verdhë. Sa është P(i verdhë)?', solution: '3/5', steps: ['6 nga 10.', 'P = 6/10 = 3/5.'] },
          { problem: 'Zari u hodh 60 herë dhe 5 ra 12 herë. Sa është denduria relative?', solution: '0,2', steps: ['12 : 60.', '= 0,2 (teorikisht 1/6 ≈ 0,17).'] },
        ],
      },
      en: {
        title: 'Experimental and theoretical probability',
        objectives: ['Work out the theoretical probability of an event.', 'Compare theoretical probability with the relative frequency from an experiment.'],
        theory: 'When all outcomes are equally likely, the theoretical probability is P = number of favourable outcomes ÷ number of all outcomes. In a bag with 3 red and 5 blue balls: P(red) = 3/8. A probability lies between 0 (impossible) and 1 (certain).\n\nExperimental probability is the relative frequency in an experiment: if a coin was tossed 50 times and landed heads 28 times, the relative frequency is 28/50 = 0.56.\n\nThe more often the experiment is repeated, the closer the relative frequency usually gets to the theoretical probability (here 0.5).',
        keyPoints: ['P = favourable ÷ all possible', '0 ≤ P ≤ 1', 'Experimental = relative frequency in the experiment'],
        examples: [
          { example: 'A bag has 3 red and 5 blue balls. What is P(red)?', solution: '3 favourable out of 3 + 5 = 8: P = 3/8.' },
          { example: 'A coin was tossed 50 times and landed heads 28 times. What is the experimental probability?', solution: '28 ÷ 50 = 0.56 (in theory 0.5).' },
        ],
        commonMistakes: [
          { mistake: 'P(red) = 3/5 (red ÷ blue).', fix: 'Divide by all outcomes: 3/(3 + 5) = 3/8.' },
          { mistake: 'After 50 tosses there must be exactly 25 heads.', fix: 'Probability tells what to expect roughly; the result of an experiment varies.' },
        ],
        practice: [
          { problem: 'A die is rolled. What is P(a number greater than 4)?', solution: '1/3', steps: ['Favourable: 5 and 6 → 2.', 'P = 2/6 = 1/3.'] },
          { problem: 'A bag has 4 green and 6 yellow balls. What is P(yellow)?', solution: '3/5', steps: ['6 out of 10.', 'P = 6/10 = 3/5.'] },
          { problem: 'A die was rolled 60 times and 5 came up 12 times. What is the relative frequency?', solution: '0.2', steps: ['12 ÷ 60.', '= 0.2 (in theory 1/6 ≈ 0.17).'] },
        ],
      },
      de: {
        title: 'Relative Häufigkeit und Wahrscheinlichkeit',
        objectives: ['Die Wahrscheinlichkeit eines Ereignisses berechnen.', 'Die Wahrscheinlichkeit mit der relativen Häufigkeit aus einem Versuch vergleichen.'],
        theory: 'Sind alle Ergebnisse gleich wahrscheinlich, gilt P = Anzahl der günstigen Ergebnisse : Anzahl aller Ergebnisse. In einem Beutel mit 3 roten und 5 blauen Kugeln: P(rot) = 3/8. Eine Wahrscheinlichkeit liegt zwischen 0 (unmöglich) und 1 (sicher).\n\nDie relative Häufigkeit in einem Versuch schätzt die Wahrscheinlichkeit: Wird eine Münze 50-mal geworfen und zeigt 28-mal Kopf, ist die relative Häufigkeit 28/50 = 0,56.\n\nJe öfter man den Versuch wiederholt, desto näher kommt die relative Häufigkeit meist der Wahrscheinlichkeit (hier 0,5).',
        keyPoints: ['P = günstige : alle möglichen Ergebnisse', '0 ≤ P ≤ 1', 'Relative Häufigkeit = Schätzwert aus dem Versuch'],
        examples: [
          { example: 'Ein Beutel enthält 3 rote und 5 blaue Kugeln. Wie groß ist P(rot)?', solution: '3 günstige von 3 + 5 = 8: P = 3/8.' },
          { example: 'Eine Münze wurde 50-mal geworfen und zeigte 28-mal Kopf. Wie groß ist die relative Häufigkeit?', solution: '28 : 50 = 0,56 (theoretisch 0,5).' },
        ],
        commonMistakes: [
          { mistake: 'P(rot) = 3/5 (rot : blau).', fix: 'Durch alle Ergebnisse teilen: 3/(3 + 5) = 3/8.' },
          { mistake: 'Nach 50 Würfen muss genau 25-mal Kopf fallen.', fix: 'Die Wahrscheinlichkeit sagt, was ungefähr zu erwarten ist; das Versuchsergebnis schwankt.' },
        ],
        practice: [
          { problem: 'Ein Würfel wird geworfen. Wie groß ist P(Zahl größer als 4)?', solution: '1/3', steps: ['Günstig: 5 und 6 → 2.', 'P = 2/6 = 1/3.'] },
          { problem: 'Ein Beutel enthält 4 grüne und 6 gelbe Kugeln. Wie groß ist P(gelb)?', solution: '3/5', steps: ['6 von 10.', 'P = 6/10 = 3/5.'] },
          { problem: 'Ein Würfel wurde 60-mal geworfen, die 5 fiel 12-mal. Wie groß ist die relative Häufigkeit?', solution: '0,2', steps: ['12 : 60.', '= 0,2 (theoretisch 1/6 ≈ 0,17).'] },
        ],
      },
    },
  ],
};
