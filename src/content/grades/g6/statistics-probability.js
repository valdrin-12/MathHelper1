// Grade 6 · Theme 12: Statistics and probability (May–June)
const alt = (al, en, de) => ({ al, en, de });
const SPORTS = [
  { label: alt('futboll', 'football', 'Fußball'), value: 12 },
  { label: alt('basketboll', 'basketball', 'Basketball'), value: 8 },
  { label: alt('volejboll', 'volleyball', 'Volleyball'), value: 6 },
  { label: alt('tjetër', 'other', 'andere'), value: 4 },
];

export default {
  id: 'g6-statistics-probability',
  i18n: {
    al: { title: 'Statistika dhe probabiliteti', description: 'Mbledhja e të dhënave, diagramet, mesatarja, moda, mediana dhe gjasat e një ngjarjeje.' },
    en: { title: 'Statistics and probability', description: 'Collecting data, charts, mean, mode, median and the chance of an event.' },
    de: { title: 'Statistik und Wahrscheinlichkeit', description: 'Daten erheben, Diagramme, Mittelwert, Modalwert, Median und die Chance eines Ereignisses.' },
  },
  lessons: [
    // ───────── 1. Collecting and organising data
    {
      slug: 'g6-statistics-probability-data-collection',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Sporti', 'Sport', 'Sportart'), cells: SPORTS.map((s) => s.label) },
          { head: alt('Shenja', 'Tally', 'Strichliste'), cells: ['||||| ||||| ||', '||||| |||', '||||| |', '||||'] },
          { head: alt('Denduria', 'Frequency', 'Häufigkeit'), cells: SPORTS.map((s) => String(s.value)) },
        ],
        caption: alt('Sporti i preferuar i 30 nxënësve.', 'The favourite sport of 30 students.', 'Die Lieblingssportart von 30 Schülerinnen und Schülern.'),
        alt: alt('Tabela e dendurive: futboll 12, basketboll 8, volejboll 6, tjetër 4.', 'Frequency table: football 12, basketball 8, volleyball 6, other 4.', 'Häufigkeitstabelle: Fußball 12, Basketball 8, Volleyball 6, andere 4.'),
      }],
      answers: {
        examples: ['text', [['12 + 8 + 6 + 4', 30]]],
        practice: [[['12 - 6', 6]], [['8 / 30', '4/15']], 'text'],
      },
      al: {
        title: 'Mbledhja dhe organizimi i të dhënave',
        objectives: ['Të mblidhni të dhëna me pyetje dhe me shenja (vija).', 'T\'i organizoni në tabelë dendurish dhe të nxirrni përfundime të thjeshta.'],
        theory: 'Statistika fillon me një pyetje, p.sh. "Cili është sporti yt i preferuar?". Përgjigjet që mbledhim quhen të dhëna.\n\nGjatë numërimit përdorim shenja: një vijë për çdo përgjigje, dhe çdo të pestën e vizatojmë të kryqëzuar, që t\'i numërojmë shpejt në grupe me nga pesë.\n\nTabela e dendurive tregon sa herë shfaqet çdo përgjigje (denduria). Shuma e dendurive është numri i të gjithë të anketuarve. Nga tabela shohim cila përgjigje është më e shpeshtë dhe mund të krahasojmë grupet.',
        keyPoints: ['Denduria = sa herë shfaqet një vlerë.', 'Shuma e dendurive = numri i të gjitha përgjigjeve.', 'Shenjat grupohen me nga 5.'],
        examples: [
          { example: 'Përgjigjet: mollë, banane, mollë, dardhë, mollë, banane. Bëni tabelën e dendurive.', solution: 'mollë 3, banane 2, dardhë 1.' },
          { example: 'Në tabelën e sporteve (12, 8, 6, 4), sa nxënës u pyetën?', solution: '12 + 8 + 6 + 4 = 30 nxënës.' },
        ],
        commonMistakes: [
          { mistake: 'Gjatë numërimit harrohet ndonjë përgjigje ose numërohet dy herë.', fix: 'Shënoni çdo përgjigje me vijë menjëherë dhe kontrolloni që shuma të jetë sa numri i të anketuarve.' },
        ],
        practice: [
          { problem: 'Sa nxënës më shumë preferojnë futbollin se volejbollin?', solution: '6', steps: ['Futboll 12, volejboll 6.', '12 − 6 = 6.'] },
          { problem: 'Çfarë pjese e nxënësve preferojnë basketbollin?', solution: '8/30 = 4/15', steps: ['8 nga 30 nxënës.', 'Thjeshtojmë me 2: 4/15.'] },
          { problem: 'Cili sport është më i preferuari dhe pse?', solution: 'Futbolli, sepse ka dendurinë më të madhe (12).', steps: ['Krahasojmë dendurinë: 12, 8, 6, 4.', 'Më e madhja është 12.'] },
        ],
      },
      en: {
        title: 'Collecting and organising data',
        objectives: ['Collect data with questions and tally marks.', 'Organise data in a frequency table and draw simple conclusions.'],
        theory: 'Statistics starts with a question, e.g. "What is your favourite sport?". The answers we collect are called data.\n\nWhile counting we use tally marks: one stroke for each answer, with every fifth drawn across the other four, so we can count quickly in groups of five.\n\nA frequency table shows how many times each answer appears (its frequency). The frequencies add up to the number of people asked. From the table we can see which answer is the most common and compare the groups.',
        keyPoints: ['Frequency = how many times a value appears.', 'Sum of the frequencies = number of all answers.', 'Tally marks are grouped in fives.'],
        examples: [
          { example: 'Answers: apple, banana, apple, pear, apple, banana. Make a frequency table.', solution: 'apple 3, banana 2, pear 1.' },
          { example: 'In the sports table (12, 8, 6, 4), how many students were asked?', solution: '12 + 8 + 6 + 4 = 30 students.' },
        ],
        commonMistakes: [
          { mistake: 'Missing an answer or counting one twice.', fix: 'Mark each answer with a stroke at once and check the total equals the number of people asked.' },
        ],
        practice: [
          { problem: 'How many more students prefer football than volleyball?', solution: '6', steps: ['Football 12, volleyball 6.', '12 − 6 = 6.'] },
          { problem: 'What fraction of the students prefer basketball?', solution: '8/30 = 4/15', steps: ['8 out of 30 students.', 'Simplify by 2: 4/15.'] },
          { problem: 'Which sport is the favourite, and why?', solution: 'Football, because it has the highest frequency (12).', steps: ['Compare the frequencies: 12, 8, 6, 4.', 'The largest is 12.'] },
        ],
      },
      de: {
        title: 'Daten erheben und ordnen',
        objectives: ['Daten mit Fragen und Strichlisten erheben.', 'Daten in einer Häufigkeitstabelle ordnen und einfache Schlüsse ziehen.'],
        theory: 'Statistik beginnt mit einer Frage, z. B. „Was ist deine Lieblingssportart?“. Die gesammelten Antworten heißen Daten.\n\nBeim Zählen benutzt man eine Strichliste: ein Strich pro Antwort, jeder fünfte wird quer durch die vier anderen gezogen, damit man schnell in Fünfergruppen zählen kann.\n\nEine Häufigkeitstabelle zeigt, wie oft jede Antwort vorkommt (ihre Häufigkeit). Die Summe der Häufigkeiten ist die Anzahl aller Befragten. An der Tabelle sieht man, welche Antwort am häufigsten ist, und kann Gruppen vergleichen.',
        keyPoints: ['Häufigkeit = wie oft ein Wert vorkommt.', 'Summe der Häufigkeiten = Anzahl aller Antworten.', 'Striche werden in Fünfergruppen gebündelt.'],
        examples: [
          { example: 'Antworten: Apfel, Banane, Apfel, Birne, Apfel, Banane. Erstellen Sie eine Häufigkeitstabelle.', solution: 'Apfel 3, Banane 2, Birne 1.' },
          { example: 'Wie viele Schülerinnen und Schüler wurden in der Sporttabelle (12, 8, 6, 4) befragt?', solution: '12 + 8 + 6 + 4 = 30.' },
        ],
        commonMistakes: [
          { mistake: 'Beim Zählen eine Antwort vergessen oder doppelt zählen.', fix: 'Jede Antwort sofort mit einem Strich markieren und prüfen, ob die Summe der Anzahl der Befragten entspricht.' },
        ],
        practice: [
          { problem: 'Wie viele mehr mögen Fußball als Volleyball?', solution: '6', steps: ['Fußball 12, Volleyball 6.', '12 − 6 = 6.'] },
          { problem: 'Welcher Bruchteil der Befragten mag Basketball am liebsten?', solution: '8/30 = 4/15', steps: ['8 von 30.', 'Durch 2 kürzen: 4/15.'] },
          { problem: 'Welche Sportart ist am beliebtesten, und warum?', solution: 'Fußball, weil er die größte Häufigkeit hat (12).', steps: ['Häufigkeiten vergleichen: 12, 8, 6, 4.', 'Die größte ist 12.'] },
        ],
      },
    },

    // ───────── 2. Charts
    {
      slug: 'g6-statistics-probability-charts',
      visuals: [
        {
          type: 'barChart', bars: SPORTS, max: 14, step: 2,
          caption: alt('Diagram me shtylla: lartësia e shtyllës = denduria.', 'Bar chart: the height of each bar = the frequency.', 'Säulendiagramm: Höhe der Säule = Häufigkeit.'),
          alt: alt('Diagram me shtylla: futboll 12, basketboll 8, volejboll 6, tjetër 4.', 'Bar chart: football 12, basketball 8, volleyball 6, other 4.', 'Säulendiagramm: Fußball 12, Basketball 8, Volleyball 6, andere 4.'),
        },
        {
          type: 'pieChart', slices: SPORTS.map((s) => ({ label: s.label, value: s.value })),
          caption: alt('Diagram rrethor: madhësia e pjesës tregon çfarë pjese të së tërës zë çdo grup.', 'Pie chart: the size of each slice shows what part of the whole each group is.', 'Kreisdiagramm: Die Größe jedes Stücks zeigt den Anteil der Gruppe am Ganzen.'),
          alt: alt('Diagram rrethor i sporteve: futboll 40%, basketboll 26,7%, volejboll 20%, tjetër 13,3%.', 'Pie chart of the sports: football 40%, basketball 26.7%, volleyball 20%, other 13.3%.', 'Kreisdiagramm der Sportarten: Fußball 40 %, Basketball 26,7 %, Volleyball 20 %, andere 13,3 %.'),
        },
      ],
      answers: {
        examples: ['text', [['12 / 30', '2/5']]],
        practice: [[['8 + 6', 14]], [['12 - 4', 8]], [['6 / 30', '1/5']]],
      },
      al: {
        title: 'Diagramet',
        objectives: ['Të lexoni dhe të vizatoni diagrame me shtylla.', 'Të lexoni diagrame rrethore si pjesë të së tërës.'],
        theory: 'Diagrami me shtylla paraqet çdo grup me një shtyllë; lartësia e shtyllës është denduria. Boshti vertikal ka shkallë me hapa të barabartë (p.sh. 0, 2, 4, …). Shtyllat kanë gjerësi të njëjtë dhe hapësira të njëjta ndërmjet tyre.\n\nDiagrami rrethor e paraqet të tërën si rreth; çdo grup zë një pjesë sa thyesa e tij. Futbolli me 12 nga 30 nxënës zë 12/30 = 2/5 e rrethit.\n\nDiagrami me shtylla është i mirë për të krahasuar numra; diagrami rrethor për të parë pjesët e së tërës.',
        keyPoints: ['Shtylla: lartësia = denduria; lexoni shkallën me kujdes.', 'Rrethi: pjesa = denduria : totali.', 'Shkalla duhet të fillojë nga 0.'],
        examples: [
          { example: 'Në diagramin me shtylla, cili sport ka shtyllën më të lartë?', solution: 'Futbolli (12).' },
          { example: 'Çfarë pjese të diagramit rrethor zë futbolli?', solution: '12 nga 30 = 12/30 = 2/5.' },
        ],
        commonMistakes: [
          { mistake: 'Shkalla e boshtit vertikal lexohet sikur të ishte 1, 2, 3 kur në të vërtetë është 0, 2, 4.', fix: 'Shikoni numrat në bosht para se të lexoni lartësinë e shtyllës.' },
        ],
        practice: [
          { problem: 'Sa nxënës preferojnë basketbollin ose volejbollin?', solution: '14', steps: ['Basketboll 8, volejboll 6.', '8 + 6 = 14.'] },
          { problem: 'Sa është ndryshimi ndërmjet shtyllës më të lartë dhe më të ulët?', solution: '8', steps: ['Më e larta 12, më e ulëta 4.', '12 − 4 = 8.'] },
          { problem: 'Çfarë pjese të rrethit zë volejbolli?', solution: '1/5', steps: ['6 nga 30.', '6/30 = 1/5.'] },
        ],
      },
      en: {
        title: 'Charts',
        objectives: ['Read and draw bar charts.', 'Read pie charts as parts of a whole.'],
        theory: 'A bar chart shows each group as a bar; the height of the bar is its frequency. The vertical axis has a scale in equal steps (e.g. 0, 2, 4, …). The bars have the same width and equal gaps between them.\n\nA pie chart shows the whole as a circle; each group takes a slice as big as its fraction. Football, with 12 of 30 students, takes 12/30 = 2/5 of the circle.\n\nA bar chart is good for comparing numbers; a pie chart for seeing parts of the whole.',
        keyPoints: ['Bar: height = frequency; read the scale carefully.', 'Pie: slice = frequency ÷ total.', 'The scale must start at 0.'],
        examples: [
          { example: 'In the bar chart, which sport has the tallest bar?', solution: 'Football (12).' },
          { example: 'What part of the pie chart does football take?', solution: '12 of 30 = 12/30 = 2/5.' },
        ],
        commonMistakes: [
          { mistake: 'Reading the vertical scale as 1, 2, 3 when it actually goes 0, 2, 4.', fix: 'Look at the numbers on the axis before reading the bar height.' },
        ],
        practice: [
          { problem: 'How many students prefer basketball or volleyball?', solution: '14', steps: ['Basketball 8, volleyball 6.', '8 + 6 = 14.'] },
          { problem: 'What is the difference between the tallest and the shortest bar?', solution: '8', steps: ['Tallest 12, shortest 4.', '12 − 4 = 8.'] },
          { problem: 'What part of the circle does volleyball take?', solution: '1/5', steps: ['6 out of 30.', '6/30 = 1/5.'] },
        ],
      },
      de: {
        title: 'Diagramme',
        objectives: ['Säulendiagramme lesen und zeichnen.', 'Kreisdiagramme als Anteile am Ganzen lesen.'],
        theory: 'Ein Säulendiagramm stellt jede Gruppe als Säule dar; die Höhe der Säule ist die Häufigkeit. Die senkrechte Achse hat eine Skala mit gleichen Schritten (z. B. 0, 2, 4, …). Die Säulen sind gleich breit und haben gleiche Abstände.\n\nEin Kreisdiagramm stellt das Ganze als Kreis dar; jede Gruppe bekommt ein Stück, so groß wie ihr Anteil. Fußball mit 12 von 30 Befragten nimmt 12/30 = 2/5 des Kreises ein.\n\nEin Säulendiagramm eignet sich zum Vergleichen von Anzahlen, ein Kreisdiagramm zum Zeigen von Anteilen am Ganzen.',
        keyPoints: ['Säule: Höhe = Häufigkeit; Skala genau lesen.', 'Kreis: Anteil = Häufigkeit : Gesamtzahl.', 'Die Skala muss bei 0 beginnen.'],
        examples: [
          { example: 'Welche Sportart hat im Säulendiagramm die höchste Säule?', solution: 'Fußball (12).' },
          { example: 'Welchen Anteil des Kreisdiagramms nimmt Fußball ein?', solution: '12 von 30 = 12/30 = 2/5.' },
        ],
        commonMistakes: [
          { mistake: 'Die senkrechte Skala als 1, 2, 3 lesen, obwohl sie 0, 2, 4 lautet.', fix: 'Vor dem Ablesen der Säulenhöhe auf die Zahlen an der Achse schauen.' },
        ],
        practice: [
          { problem: 'Wie viele mögen Basketball oder Volleyball am liebsten?', solution: '14', steps: ['Basketball 8, Volleyball 6.', '8 + 6 = 14.'] },
          { problem: 'Wie groß ist der Unterschied zwischen der höchsten und der niedrigsten Säule?', solution: '8', steps: ['Höchste 12, niedrigste 4.', '12 − 4 = 8.'] },
          { problem: 'Welchen Anteil des Kreises nimmt Volleyball ein?', solution: '1/5', steps: ['6 von 30.', '6/30 = 1/5.'] },
        ],
      },
    },

    // ───────── 3. Mean, mode, median
    {
      slug: 'g6-statistics-probability-mean-mode-median',
      visuals: [{
        type: 'barChart', max: 5, step: 1, multiColor: true,
        bars: [{ label: 'A', value: 4 }, { label: 'B', value: 5 }, { label: 'C', value: 3 }, { label: 'D', value: 5 }, { label: 'E', value: 2 }],
        caption: alt('Notat e pesë nxënësve: 4, 5, 3, 5, 2. Mesatarja 3,8, moda 5, mediana 4.', 'The marks of five students: 4, 5, 3, 5, 2. Mean 3.8, mode 5, median 4.', 'Die Noten von fünf Schülern: 4, 5, 3, 5, 2. Mittelwert 3,8, Modalwert 5, Median 4.'),
        alt: alt('Diagram me shtylla i notave 4, 5, 3, 5, 2 të pesë nxënësve.', 'Bar chart of the marks 4, 5, 3, 5, 2 of five students.', 'Säulendiagramm der Noten 4, 5, 3, 5, 2 von fünf Schülern.'),
      }],
      answers: {
        examples: [[['mean([4, 5, 3, 5, 2])', 3.8], ['median([4, 5, 3, 5, 2])', 4]], [['median([2, 3, 7, 8])', 5]]],
        practice: [[['mean([10, 12, 14])', 12]], [['4', 4]], [['median([7, 1, 5, 9, 3])', 5]]],
      },
      al: {
        title: 'Mesatarja, moda, mediana',
        objectives: ['Të llogaritni mesataren, modën dhe medianën e një grupi të dhënash.', 'Të zgjidhni cila prej tyre e përshkruan më mirë grupin.'],
        theory: 'Mesatarja: mblidhni të gjitha vlerat dhe pjesëtojeni shumën me numrin e tyre. Notat 4, 5, 3, 5, 2: (4 + 5 + 3 + 5 + 2) : 5 = 19 : 5 = 3,8.\n\nModa është vlera që shfaqet më shpesh (këtu 5, që del dy herë). Një grup mund të mos ketë modë ose të ketë më shumë se një.\n\nMediana është vlera në mes kur të dhënat renditen: 2, 3, 4, 5, 5 → mediana 4. Kur numri i vlerave është çift, mediana është mesatarja e dy vlerave në mes: 2, 3, 7, 8 → (3 + 7) : 2 = 5.',
        keyPoints: ['Mesatarja = shuma : numri i vlerave.', 'Moda = vlera më e shpeshtë.', 'Mediana = vlera në mes pas renditjes (me numër çift: mesatarja e dy të mesmeve).'],
        examples: [
          { example: 'Gjeni mesataren, modën dhe medianën e notave 4, 5, 3, 5, 2.', solution: 'Mesatarja: 19 : 5 = 3,8. Moda: 5. Të renditura: 2, 3, 4, 5, 5, mediana 4.' },
          { example: 'Gjeni medianën e 8, 3, 7, 2.', solution: 'Të renditura: 2, 3, 7, 8. Dy të mesmet: 3 dhe 7; mediana = (3 + 7) : 2 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'Mediana merret pa i renditur të dhënat.', fix: 'Renditini gjithmonë nga më e vogla te më e madhja.' },
          { mistake: 'Shuma pjesëtohet me numër të gabuar vlerash.', fix: 'Numëroni të gjitha vlerat, edhe ato që përsëriten.' },
        ],
        practice: [
          { problem: 'Gjeni mesataren e 10, 12 dhe 14.', solution: '12', steps: ['10 + 12 + 14 = 36.', '36 : 3 = 12.'] },
          { problem: 'Gjeni modën e 2, 3, 3, 4, 4, 4.', solution: '4', steps: ['2 një herë, 3 dy herë, 4 tri herë.', 'Më e shpeshta: 4.'] },
          { problem: 'Gjeni medianën e 7, 1, 5, 9, 3.', solution: '5', steps: ['Renditja: 1, 3, 5, 7, 9.', 'Vlera në mes: 5.'] },
        ],
      },
      en: {
        title: 'Mean, mode and median',
        objectives: ['Work out the mean, mode and median of a data set.', 'Choose which one describes the data best.'],
        theory: 'Mean: add all the values and divide the sum by how many there are. Marks 4, 5, 3, 5, 2: (4 + 5 + 3 + 5 + 2) ÷ 5 = 19 ÷ 5 = 3.8.\n\nThe mode is the value that appears most often (here 5, which appears twice). A data set may have no mode or more than one.\n\nThe median is the middle value when the data are put in order: 2, 3, 4, 5, 5 → median 4. When there is an even number of values, the median is the mean of the two middle values: 2, 3, 7, 8 → (3 + 7) ÷ 2 = 5.',
        keyPoints: ['Mean = sum ÷ number of values.', 'Mode = most frequent value.', 'Median = middle value after ordering (even count: mean of the two middle ones).'],
        examples: [
          { example: 'Find the mean, mode and median of the marks 4, 5, 3, 5, 2.', solution: 'Mean: 19 ÷ 5 = 3.8. Mode: 5. In order: 2, 3, 4, 5, 5, median 4.' },
          { example: 'Find the median of 8, 3, 7, 2.', solution: 'In order: 2, 3, 7, 8. The two middle values are 3 and 7; median = (3 + 7) ÷ 2 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'Taking the median without ordering the data.', fix: 'Always order the values from smallest to largest.' },
          { mistake: 'Dividing the sum by the wrong number of values.', fix: 'Count every value, including repeated ones.' },
        ],
        practice: [
          { problem: 'Find the mean of 10, 12 and 14.', solution: '12', steps: ['10 + 12 + 14 = 36.', '36 ÷ 3 = 12.'] },
          { problem: 'Find the mode of 2, 3, 3, 4, 4, 4.', solution: '4', steps: ['2 once, 3 twice, 4 three times.', 'Most frequent: 4.'] },
          { problem: 'Find the median of 7, 1, 5, 9, 3.', solution: '5', steps: ['In order: 1, 3, 5, 7, 9.', 'Middle value: 5.'] },
        ],
      },
      de: {
        title: 'Mittelwert, Modalwert, Median',
        objectives: ['Mittelwert, Modalwert und Median einer Datenreihe bestimmen.', 'Entscheiden, welcher Wert die Daten am besten beschreibt.'],
        theory: 'Mittelwert (Durchschnitt): alle Werte addieren und die Summe durch ihre Anzahl teilen. Noten 4, 5, 3, 5, 2: (4 + 5 + 3 + 5 + 2) : 5 = 19 : 5 = 3,8.\n\nDer Modalwert ist der Wert, der am häufigsten vorkommt (hier 5, er kommt zweimal vor). Eine Datenreihe kann keinen oder mehrere Modalwerte haben.\n\nDer Median ist der mittlere Wert, wenn die Daten geordnet sind: 2, 3, 4, 5, 5 → Median 4. Bei einer geraden Anzahl von Werten ist der Median der Mittelwert der beiden mittleren Werte: 2, 3, 7, 8 → (3 + 7) : 2 = 5.',
        keyPoints: ['Mittelwert = Summe : Anzahl der Werte.', 'Modalwert = häufigster Wert.', 'Median = mittlerer Wert nach dem Ordnen (gerade Anzahl: Mittelwert der beiden mittleren).'],
        examples: [
          { example: 'Bestimmen Sie Mittelwert, Modalwert und Median der Noten 4, 5, 3, 5, 2.', solution: 'Mittelwert: 19 : 5 = 3,8. Modalwert: 5. Geordnet: 2, 3, 4, 5, 5, Median 4.' },
          { example: 'Bestimmen Sie den Median von 8, 3, 7, 2.', solution: 'Geordnet: 2, 3, 7, 8. Die beiden mittleren Werte sind 3 und 7; Median = (3 + 7) : 2 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'Den Median bestimmen, ohne die Daten zu ordnen.', fix: 'Die Werte immer vom kleinsten zum größten ordnen.' },
          { mistake: 'Die Summe durch eine falsche Anzahl teilen.', fix: 'Alle Werte zählen, auch die, die mehrfach vorkommen.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Mittelwert von 10, 12 und 14.', solution: '12', steps: ['10 + 12 + 14 = 36.', '36 : 3 = 12.'] },
          { problem: 'Bestimmen Sie den Modalwert von 2, 3, 3, 4, 4, 4.', solution: '4', steps: ['2 einmal, 3 zweimal, 4 dreimal.', 'Am häufigsten: 4.'] },
          { problem: 'Bestimmen Sie den Median von 7, 1, 5, 9, 3.', solution: '5', steps: ['Geordnet: 1, 3, 5, 7, 9.', 'Mittlerer Wert: 5.'] },
        ],
      },
    },

    // ───────── 4. Probability
    {
      slug: 'g6-statistics-probability-probability',
      visuals: [{
        type: 'pieChart', showPercent: false,
        slices: [{ label: alt('2 të kuqe', '2 red', '2 rot'), value: 2, color: '#FF3B30' }, { label: alt('3 të gjelbra', '3 green', '3 grün'), value: 3, color: '#34C759' }, { label: alt('5 të verdha', '5 yellow', '5 gelb'), value: 5, color: '#FFCC00' }],
        caption: alt('Në qese ka 10 topa. P(e gjelbër) = 3/10.', 'There are 10 balls in the bag. P(green) = 3/10.', 'Im Beutel sind 10 Kugeln. P(grün) = 3/10.'),
        alt: alt('Qese me 2 topa të kuq, 3 të gjelbër dhe 5 të verdhë, paraqitur si rreth.', 'A bag with 2 red, 3 green and 5 yellow balls, shown as a circle.', 'Ein Beutel mit 2 roten, 3 grünen und 5 gelben Kugeln, als Kreis dargestellt.'),
      }],
      answers: {
        examples: [[['3/6', '1/2']], 'text'],
        practice: [[['1/2', '1/2']], [['2/6', '1/3']], [['3/10', '3/10']]],
      },
      al: {
        title: 'Kuptimi i probabilitetit',
        objectives: ['Të përshkruani gjasat me fjalë: e pamundur, e mundshme, e sigurt.', 'Të llogaritni probabilitetin si numër rastesh të favorshme : numër të gjitha rasteve.'],
        theory: 'Probabiliteti tregon sa gjasa ka të ndodhë një ngjarje. Ai është një numër nga 0 deri 1: ngjarja e pamundur ka probabilitet 0 (të dalë 7 te një zar), ngjarja e sigurt ka 1 (të dalë numër më i vogël se 7).\n\nKur të gjitha rezultatet kanë të njëjtat gjasa: P(ngjarja) = numri i rasteve të favorshme : numri i të gjitha rasteve.\n\nTe zari, rezultatet janë 1, 2, 3, 4, 5, 6. Numra çift janë 2, 4, 6, pra P(çift) = 3/6 = 1/2. Probabilitetin e shkruajmë si thyesë (ose numër dhjetor).',
        keyPoints: ['0 = e pamundur, 1 = e sigurt.', 'P = raste të favorshme : të gjitha rastet.', 'Thjeshtoni thyesën në fund.'],
        examples: [
          { example: 'Sa është probabiliteti të dalë numër çift kur hedhim një zar?', solution: 'Rastet e favorshme: 2, 4, 6 (3 nga 6). P = 3/6 = 1/2.' },
          { example: 'A është e mundur, e sigurt apo e pamundur të dalë 7 te një zar i zakonshëm?', solution: 'E pamundur: zari ka vetëm numrat 1 deri 6, P = 0.' },
        ],
        commonMistakes: [
          { mistake: 'Mendohet se "ose del ose nuk del" do të thotë gjithmonë 1/2.', fix: 'Numëroni rastet: P(del 6) = 1/6, jo 1/2.' },
        ],
        practice: [
          { problem: 'Sa është probabiliteti të dalë "kokë" kur hedhim një monedhë?', solution: '1/2', steps: ['Rastet: kokë, pil (2).', 'E favorshme: 1. P = 1/2.'] },
          { problem: 'Sa është probabiliteti të dalë numër më i madh se 4 te një zar?', solution: '1/3', steps: ['Rastet e favorshme: 5, 6 (2 nga 6).', 'P = 2/6 = 1/3.'] },
          { problem: 'Në një qese ka 2 topa të kuq, 3 të gjelbër dhe 5 të verdhë. Sa është P(të nxjerrim një të gjelbër)?', solution: '3/10', steps: ['Të gjithë topat: 2 + 3 + 5 = 10.', 'Të gjelbër: 3. P = 3/10.'] },
        ],
      },
      en: {
        title: 'What probability means',
        objectives: ['Describe chance in words: impossible, possible, certain.', 'Work out probability as favourable outcomes ÷ all outcomes.'],
        theory: 'Probability tells how likely an event is. It is a number from 0 to 1: an impossible event has probability 0 (rolling a 7 on a dice), a certain event has 1 (rolling a number less than 7).\n\nWhen all outcomes are equally likely: P(event) = number of favourable outcomes ÷ number of all outcomes.\n\nOn a dice the outcomes are 1, 2, 3, 4, 5, 6. The even numbers are 2, 4, 6, so P(even) = 3/6 = 1/2. We write probability as a fraction (or a decimal).',
        keyPoints: ['0 = impossible, 1 = certain.', 'P = favourable outcomes ÷ all outcomes.', 'Simplify the fraction at the end.'],
        examples: [
          { example: 'What is the probability of rolling an even number with a dice?', solution: 'Favourable outcomes: 2, 4, 6 (3 out of 6). P = 3/6 = 1/2.' },
          { example: 'Is rolling a 7 on an ordinary dice possible, certain or impossible?', solution: 'Impossible: the dice only has the numbers 1 to 6, P = 0.' },
        ],
        commonMistakes: [
          { mistake: 'Thinking "either it happens or it doesn\'t" always means 1/2.', fix: 'Count the outcomes: P(rolling a 6) = 1/6, not 1/2.' },
        ],
        practice: [
          { problem: 'What is the probability of getting heads when tossing a coin?', solution: '1/2', steps: ['Outcomes: heads, tails (2).', 'Favourable: 1. P = 1/2.'] },
          { problem: 'What is the probability of rolling a number greater than 4 with a dice?', solution: '1/3', steps: ['Favourable outcomes: 5, 6 (2 out of 6).', 'P = 2/6 = 1/3.'] },
          { problem: 'A bag has 2 red, 3 green and 5 yellow balls. What is P(drawing a green one)?', solution: '3/10', steps: ['All balls: 2 + 3 + 5 = 10.', 'Green: 3. P = 3/10.'] },
        ],
      },
      de: {
        title: 'Was Wahrscheinlichkeit bedeutet',
        objectives: ['Chancen in Worten beschreiben: unmöglich, möglich, sicher.', 'Wahrscheinlichkeit als günstige Ergebnisse : alle Ergebnisse berechnen.'],
        theory: 'Die Wahrscheinlichkeit gibt an, wie wahrscheinlich ein Ereignis ist. Sie ist eine Zahl von 0 bis 1: Ein unmögliches Ereignis hat die Wahrscheinlichkeit 0 (mit einem Würfel eine 7 werfen), ein sicheres Ereignis 1 (eine Zahl kleiner als 7 werfen).\n\nWenn alle Ergebnisse gleich wahrscheinlich sind, gilt: P(Ereignis) = Anzahl der günstigen Ergebnisse : Anzahl aller Ergebnisse.\n\nBeim Würfel sind die Ergebnisse 1, 2, 3, 4, 5, 6. Gerade Zahlen sind 2, 4, 6, also P(gerade) = 3/6 = 1/2. Wahrscheinlichkeiten schreibt man als Bruch (oder Dezimalzahl).',
        keyPoints: ['0 = unmöglich, 1 = sicher.', 'P = günstige Ergebnisse : alle Ergebnisse.', 'Den Bruch am Ende kürzen.'],
        examples: [
          { example: 'Wie groß ist die Wahrscheinlichkeit, mit einem Würfel eine gerade Zahl zu werfen?', solution: 'Günstige Ergebnisse: 2, 4, 6 (3 von 6). P = 3/6 = 1/2.' },
          { example: 'Ist eine 7 mit einem normalen Würfel möglich, sicher oder unmöglich?', solution: 'Unmöglich: Der Würfel hat nur die Zahlen 1 bis 6, P = 0.' },
        ],
        commonMistakes: [
          { mistake: 'Glauben, „es passiert oder nicht“ bedeute immer 1/2.', fix: 'Die Ergebnisse zählen: P(6 würfeln) = 1/6, nicht 1/2.' },
        ],
        practice: [
          { problem: 'Wie groß ist die Wahrscheinlichkeit, beim Münzwurf „Kopf“ zu werfen?', solution: '1/2', steps: ['Ergebnisse: Kopf, Zahl (2).', 'Günstig: 1. P = 1/2.'] },
          { problem: 'Wie groß ist die Wahrscheinlichkeit, mit einem Würfel eine Zahl größer als 4 zu werfen?', solution: '1/3', steps: ['Günstige Ergebnisse: 5, 6 (2 von 6).', 'P = 2/6 = 1/3.'] },
          { problem: 'In einem Beutel sind 2 rote, 3 grüne und 5 gelbe Kugeln. Wie groß ist P(eine grüne ziehen)?', solution: '3/10', steps: ['Alle Kugeln: 2 + 3 + 5 = 10.', 'Grün: 3. P = 3/10.'] },
        ],
      },
    },
  ],
};
