// Grade 9 · Theme 10: Data and probability (April–June)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g9-data-probability',
  i18n: {
    al: { title: 'Të dhënat dhe probabiliteti', description: 'Paraqitja grafike e të dhënave, mesataret, hapësira e rezultateve, ngjarjet dhe probabiliteti teorik e statistikor.' },
    en: { title: 'Data and probability', description: 'Displaying data, averages, sample spaces, events, theoretical and experimental probability.' },
    de: { title: 'Daten und Wahrscheinlichkeit', description: 'Daten darstellen, Mittelwerte, Ergebnisräume, Ereignisse, Wahrscheinlichkeit und relative Häufigkeit.' },
  },
  lessons: [
    // ───────── 1. Displaying data
    {
      slug: 'g9-data-probability-graphs',
      visuals: [{
        type: 'barChart', max: 20, step: 5, yLabel: '°C',
        bars: [{ label: alt('Jan', 'Jan', 'Jan'), value: 2 }, { label: alt('Shk', 'Feb', 'Feb'), value: 4 }, { label: alt('Mar', 'Mar', 'Mär'), value: 9 }, { label: alt('Pri', 'Apr', 'Apr'), value: 13 }, { label: alt('Maj', 'May', 'Mai'), value: 19 }],
        caption: alt('Temperatura mesatare mujore (°C) në një qytet.', 'Average monthly temperature (°C) in a town.', 'Monatliche Durchschnittstemperatur (°C) in einer Stadt.'),
        alt: alt('Diagram me shtylla: janar 2, shkurt 4, mars 9, prill 13, maj 19 °C.', 'Bar chart: January 2, February 4, March 9, April 13, May 19 °C.', 'Säulendiagramm: Januar 2, Februar 4, März 9, April 13, Mai 19 °C.'),
      }],
      answers: {
        examples: [[['19 - 13', 6]], 'text'],
        practice: [[['19 - 2', 17]], [['(2 + 4 + 9 + 13 + 19) / 5', 9.4]], 'text'],
      },
      al: {
        title: 'Paraqitja grafike e të dhënave',
        objectives: ['Të zgjidhni diagramin e përshtatshëm për të dhënat.', 'Të nxirrni përfundime nga një diagram.'],
        theory: 'Diagrami me shtylla krahason sasi të kategorive (p.sh. muajt). Diagrami rrethor tregon pjesët e një të tëre (p.sh. buxheti). Grafiku vijor tregon ndryshimin në kohë. Histogrami tregon të dhëna të grupuara në klasa (p.sh. gjatësitë).\n\nNga diagrami lexojmë vlerat, ndryshimet, diapazonin (më e madhja − më e vogla) dhe mesataren. Te temperatura: rritja më e madhe është nga prilli në maj, 19 − 13 = 6 °C.\n\nKujdes: kontrolloni gjithmonë shkallën e boshtit; një bosht që nuk fillon nga 0 i zmadhon ndryshimet.',
        keyPoints: ['Shtylla: krahasim;  rreth: pjesë të së tërës', 'Vijor: ndryshim në kohë;  histogram: klasa', 'Diapazoni = max − min'],
        examples: [
          { example: 'Ndërmjet cilëve muaj u rrit temperatura më shumë?', solution: 'Prill → maj: 19 − 13 = 6 °C.' },
          { example: 'Cilin diagram do të zgjidhnit për ndarjen e buxhetit të familjes?', solution: 'Diagramin rrethor, sepse tregon pjesët e një të tëre.' },
        ],
        commonMistakes: [
          { mistake: 'Diagram rrethor për temperaturat mujore.', fix: 'Temperaturat nuk janë pjesë të një të tëre; përdorni shtylla ose grafik vijor.' },
        ],
        practice: [
          { problem: 'Sa është diapazoni i temperaturave?', solution: '17 °C', steps: ['Max 19, min 2.', '19 − 2 = 17 °C.'] },
          { problem: 'Sa është temperatura mesatare e pesë muajve?', solution: '9,4 °C', steps: ['2 + 4 + 9 + 13 + 19 = 47.', '47 : 5 = 9,4 °C.'] },
          { problem: 'Cili diagram përshtatet për gjatësitë e 30 nxënësve të grupuara në klasa?', solution: 'Histogrami', steps: ['Të dhëna numerike të grupuara.', 'Histogram.'] },
        ],
      },
      en: {
        title: 'Displaying data',
        objectives: ['Choose a suitable chart for the data.', 'Draw conclusions from a chart.'],
        theory: 'A bar chart compares amounts for categories (e.g. months). A pie chart shows parts of a whole (e.g. a budget). A line graph shows change over time. A histogram shows data grouped into classes (e.g. heights).\n\nFrom a chart we read values, changes, the range (largest − smallest) and the mean. For the temperatures: the biggest rise is from April to May, 19 − 13 = 6 °C.\n\nCareful: always check the scale of the axis; an axis that does not start at 0 exaggerates differences.',
        keyPoints: ['Bars: comparing;  pie: parts of a whole', 'Line: change over time;  histogram: classes', 'Range = max − min'],
        examples: [
          { example: 'Between which months did the temperature rise most?', solution: 'April → May: 19 − 13 = 6 °C.' },
          { example: 'Which chart would you choose for how a family budget is split?', solution: 'A pie chart, because it shows the parts of a whole.' },
        ],
        commonMistakes: [
          { mistake: 'A pie chart for monthly temperatures.', fix: 'Temperatures are not parts of a whole; use bars or a line graph.' },
        ],
        practice: [
          { problem: 'What is the range of the temperatures?', solution: '17 °C', steps: ['Max 19, min 2.', '19 − 2 = 17 °C.'] },
          { problem: 'What is the mean temperature of the five months?', solution: '9.4 °C', steps: ['2 + 4 + 9 + 13 + 19 = 47.', '47 ÷ 5 = 9.4 °C.'] },
          { problem: 'Which chart suits the heights of 30 students grouped in classes?', solution: 'A histogram', steps: ['Grouped numerical data.', 'Histogram.'] },
        ],
      },
      de: {
        title: 'Daten darstellen',
        objectives: ['Ein passendes Diagramm für die Daten wählen.', 'Schlüsse aus einem Diagramm ziehen.'],
        theory: 'Ein Säulendiagramm vergleicht Werte von Kategorien (z. B. Monate). Ein Kreisdiagramm zeigt Anteile an einem Ganzen (z. B. ein Budget). Ein Liniendiagramm zeigt Veränderungen über die Zeit. Ein Histogramm zeigt klassierte Daten (z. B. Körpergrößen).\n\nAus einem Diagramm liest man Werte, Änderungen, die Spannweite (größter − kleinster Wert) und den Mittelwert. Bei den Temperaturen: Der größte Anstieg ist von April zu Mai, 19 − 13 = 6 °C.\n\nVorsicht: Immer die Skala prüfen; eine Achse, die nicht bei 0 beginnt, übertreibt Unterschiede.',
        keyPoints: ['Säulen: vergleichen;  Kreis: Anteile', 'Linie: zeitliche Entwicklung;  Histogramm: Klassen', 'Spannweite = max − min'],
        examples: [
          { example: 'Zwischen welchen Monaten stieg die Temperatur am stärksten?', solution: 'April → Mai: 19 − 13 = 6 °C.' },
          { example: 'Welches Diagramm wählen Sie für die Aufteilung eines Familienbudgets?', solution: 'Ein Kreisdiagramm, weil es Anteile an einem Ganzen zeigt.' },
        ],
        commonMistakes: [
          { mistake: 'Ein Kreisdiagramm für Monatstemperaturen.', fix: 'Temperaturen sind keine Anteile eines Ganzen; Säulen oder Linie verwenden.' },
        ],
        practice: [
          { problem: 'Wie groß ist die Spannweite der Temperaturen?', solution: '17 °C', steps: ['Max 19, min 2.', '19 − 2 = 17 °C.'] },
          { problem: 'Wie hoch ist die Durchschnittstemperatur der fünf Monate?', solution: '9,4 °C', steps: ['2 + 4 + 9 + 13 + 19 = 47.', '47 : 5 = 9,4 °C.'] },
          { problem: 'Welches Diagramm passt zu den in Klassen eingeteilten Körpergrößen von 30 Schülern?', solution: 'Ein Histogramm', steps: ['Klassierte Zahlendaten.', 'Histogramm.'] },
        ],
      },
    },

    // ───────── 2. Averages
    {
      slug: 'g9-data-probability-averages',
      visuals: [{
        type: 'boxPlot', min: 3, q1: 5, median: 6, q3: 9, max: 20, axis: { from: 0, to: 22, step: 2 },
        caption: alt('Të dhënat 3, 5, 5, 6, 8, 9, 20: mediana 6, kurse mesatarja 8 tërhiqet nga vlera ekstreme 20.', 'The data 3, 5, 5, 6, 8, 9, 20: the median is 6, while the mean 8 is pulled up by the extreme value 20.', 'Die Daten 3, 5, 5, 6, 8, 9, 20: Der Median ist 6, der Mittelwert 8 wird vom Ausreißer 20 nach oben gezogen.'),
        alt: alt('Diagram kuti: min 3, Q1 5, mediana 6, Q3 9, max 20.', 'Box plot: min 3, Q1 5, median 6, Q3 9, max 20.', 'Boxplot: Minimum 3, Q1 5, Median 6, Q3 9, Maximum 20.'),
      }],
      answers: {
        examples: [[['(3+5+5+6+8+9+20) / 7', 8], ['6', 6], ['5', 5], ['20 - 3', 17]], [['(3+5+5+6+8+9) / 6', 6]]],
        practice: [[['(12 + 15 + 18 + 15) / 4', 15]], [['(4 + 7) / 2', 5.5]], [['4 * 10 - (8 + 9 + 11)', 12]]],
      },
      al: {
        title: 'Mesataret',
        objectives: ['Të llogaritni mesataren, medianën, modën dhe diapazonin.', 'Të zgjidhni mesataren më të përshtatshme kur ka vlera ekstreme.'],
        theory: 'Mesatarja aritmetike = shuma e vlerave : numri i tyre. Mediana është vlera në mes pasi të dhënat renditen (me numër çift vlerash, mesatarja e dy të mesmeve). Moda është vlera më e shpeshtë. Diapazoni = max − min.\n\nPër 3, 5, 5, 6, 8, 9, 20: mesatarja 56 : 7 = 8, mediana 6, moda 5, diapazoni 17.\n\nVlera ekstreme (20) e tërheq mesataren, por pothuajse nuk e ndikon medianën. Kur ka vlera ekstreme, mediana e përshkruan më mirë vlerën "tipike".',
        keyPoints: ['Mesatarja = Σx : n', 'Mediana: vlera e mesit pas renditjes', 'Vlerat ekstreme ndikojnë mesataren, jo medianën'],
        examples: [
          { example: 'Gjeni mesataren, medianën, modën dhe diapazonin e 3, 5, 5, 6, 8, 9, 20.', solution: 'Mesatarja 56 : 7 = 8; mediana 6; moda 5; diapazoni 20 − 3 = 17.' },
          { example: 'Sa bëhet mesatarja pa vlerën 20?', solution: '36 : 6 = 6: vlera ekstreme e kishte ngritur mesataren me 2.' },
        ],
        commonMistakes: [
          { mistake: 'Mediana merret pa i renditur të dhënat.', fix: 'Fillimisht renditni vlerat nga më e vogla te më e madhja.' },
        ],
        practice: [
          { problem: 'Gjeni mesataren e 12, 15, 18, 15.', solution: '15', steps: ['12 + 15 + 18 + 15 = 60.', '60 : 4 = 15.'] },
          { problem: 'Gjeni medianën e 4, 9, 2, 7.', solution: '5,5', steps: ['Renditja: 2, 4, 7, 9.', '(4 + 7) : 2 = 5,5.'] },
          { problem: 'Vlerat 8, 9, 11 dhe x kanë mesatare 10. Gjeni x.', solution: '12', steps: ['Shuma duhet 4 · 10 = 40.', 'x = 40 − 28 = 12.'] },
        ],
      },
      en: {
        title: 'Averages',
        objectives: ['Work out the mean, median, mode and range.', 'Choose the most suitable average when there are extreme values.'],
        theory: 'Mean = sum of the values ÷ number of values. The median is the middle value once the data are in order (for an even number of values, the mean of the two middle ones). The mode is the most frequent value. Range = max − min.\n\nFor 3, 5, 5, 6, 8, 9, 20: mean 56 ÷ 7 = 8, median 6, mode 5, range 17.\n\nAn extreme value (20) pulls the mean but hardly affects the median. When there are extreme values, the median describes the "typical" value better.',
        keyPoints: ['Mean = Σx ÷ n', 'Median: middle value after ordering', 'Extreme values affect the mean, not the median'],
        examples: [
          { example: 'Find the mean, median, mode and range of 3, 5, 5, 6, 8, 9, 20.', solution: 'Mean 56 ÷ 7 = 8; median 6; mode 5; range 20 − 3 = 17.' },
          { example: 'What is the mean without the value 20?', solution: '36 ÷ 6 = 6: the extreme value had raised the mean by 2.' },
        ],
        commonMistakes: [
          { mistake: 'Taking the median without ordering the data.', fix: 'First put the values in order from smallest to largest.' },
        ],
        practice: [
          { problem: 'Find the mean of 12, 15, 18, 15.', solution: '15', steps: ['12 + 15 + 18 + 15 = 60.', '60 ÷ 4 = 15.'] },
          { problem: 'Find the median of 4, 9, 2, 7.', solution: '5.5', steps: ['In order: 2, 4, 7, 9.', '(4 + 7) ÷ 2 = 5.5.'] },
          { problem: 'The values 8, 9, 11 and x have mean 10. Find x.', solution: '12', steps: ['The sum must be 4 · 10 = 40.', 'x = 40 − 28 = 12.'] },
        ],
      },
      de: {
        title: 'Mittelwerte',
        objectives: ['Mittelwert, Median, Modalwert und Spannweite berechnen.', 'Bei Ausreißern den passenden Mittelwert wählen.'],
        theory: 'Arithmetisches Mittel = Summe der Werte : Anzahl. Der Median ist der mittlere Wert der geordneten Daten (bei gerader Anzahl das Mittel der beiden mittleren). Der Modalwert ist der häufigste Wert. Spannweite = max − min.\n\nFür 3, 5, 5, 6, 8, 9, 20: Mittelwert 56 : 7 = 8, Median 6, Modalwert 5, Spannweite 17.\n\nEin Ausreißer (20) verschiebt den Mittelwert, den Median aber kaum. Bei Ausreißern beschreibt der Median den „typischen“ Wert besser.',
        keyPoints: ['Mittelwert = Σx : n', 'Median: mittlerer Wert nach dem Ordnen', 'Ausreißer beeinflussen den Mittelwert, nicht den Median'],
        examples: [
          { example: 'Bestimmen Sie Mittelwert, Median, Modalwert und Spannweite von 3, 5, 5, 6, 8, 9, 20.', solution: 'Mittelwert 56 : 7 = 8; Median 6; Modalwert 5; Spannweite 20 − 3 = 17.' },
          { example: 'Wie groß ist der Mittelwert ohne den Wert 20?', solution: '36 : 6 = 6: Der Ausreißer hatte den Mittelwert um 2 erhöht.' },
        ],
        commonMistakes: [
          { mistake: 'Den Median ohne Ordnen der Daten bestimmen.', fix: 'Zuerst die Werte der Größe nach ordnen.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Mittelwert von 12, 15, 18, 15.', solution: '15', steps: ['12 + 15 + 18 + 15 = 60.', '60 : 4 = 15.'] },
          { problem: 'Bestimmen Sie den Median von 4, 9, 2, 7.', solution: '5,5', steps: ['Geordnet: 2, 4, 7, 9.', '(4 + 7) : 2 = 5,5.'] },
          { problem: 'Die Werte 8, 9, 11 und x haben den Mittelwert 10. Bestimmen Sie x.', solution: '12', steps: ['Die Summe muss 4 · 10 = 40 sein.', 'x = 40 − 28 = 12.'] },
        ],
      },
    },

    // ───────── 3. Sample space
    {
      slug: 'g9-data-probability-sample-space',
      visuals: [{
        type: 'treeDiagram',
        branches: [
          { label: alt('S', 'H', 'K'), p: '1/2', children: [{ label: alt('S', 'H', 'K'), p: '1/2' }, { label: alt('N', 'T', 'Z'), p: '1/2' }] },
          { label: alt('N', 'T', 'Z'), p: '1/2', children: [{ label: alt('S', 'H', 'K'), p: '1/2' }, { label: alt('N', 'T', 'Z'), p: '1/2' }] },
        ],
        caption: alt('Dy monedha (S = stemë, N = numër): Ω = {SS, SN, NS, NN}, 4 rezultate.', 'Two coins (H = heads, T = tails): Ω = {HH, HT, TH, TT}, 4 outcomes.', 'Zwei Münzen (K = Kopf, Z = Zahl): Ω = {KK, KZ, ZK, ZZ}, 4 Ergebnisse.'),
        alt: alt('Diagram peme me dy nivele për dy monedha, katër degë fundore.', 'Two-level tree diagram for two coins, four end branches.', 'Zweistufiges Baumdiagramm für zwei Münzen mit vier Endzweigen.'),
      }],
      answers: {
        examples: [[['2 * 2', 4]], [['6 * 2', 12]]],
        practice: [[['2^3', 8]], [['6 * 6', 36]], [['3 * 2', 6]]],
      },
      al: {
        title: 'Hapësira e rezultateve',
        objectives: ['Të shkruani hapësirën e rezultateve me listë, tabelë ose diagram peme.', 'Të përdorni rregullën e shumëzimit për numrin e rezultateve.'],
        theory: 'Hapësira e rezultateve Ω është bashkësia e të gjitha rezultateve të mundshme të një eksperimenti. Për dy monedha (S = stemë, N = numër): Ω = {SS, SN, NS, NN}.\n\nPër eksperimente me disa hapa përdorim diagramin e pemës ose tabelën. Rregulla e shumëzimit: nëse hapi i parë ka m rezultate dhe i dyti n, gjithsej ka m · n. Zari dhe monedha: 6 · 2 = 12; tri monedha: 2 · 2 · 2 = 8.\n\nRenditja ka rëndësi: SN dhe NS janë rezultate të ndryshme.',
        keyPoints: ['Ω: të gjitha rezultatet', 'Rregulla e shumëzimit: m · n', 'SN ≠ NS'],
        examples: [
          { example: 'Shkruani hapësirën e rezultateve kur hedhim dy monedha.', solution: 'Ω = {SS, SN, NS, NN}: 2 · 2 = 4 rezultate.' },
          { example: 'Sa rezultate ka hedhja e një zari dhe një monedhe?', solution: '6 · 2 = 12.' },
        ],
        commonMistakes: [
          { mistake: 'Dy monedha kanë 3 rezultate: dy stema, dy numra, nga një.', fix: 'SN dhe NS numërohen veçmas: 4 rezultate.' },
        ],
        practice: [
          { problem: 'Sa rezultate ka hedhja e tri monedhave?', solution: '8', steps: ['2 · 2 · 2.', '= 8.'] },
          { problem: 'Sa rezultate ka hedhja e dy zareve?', solution: '36', steps: ['6 · 6.', '= 36.'] },
          { problem: 'Ana ka 3 bluza dhe 2 pantallona. Sa kombinime mund të veshë?', solution: '6', steps: ['3 · 2.', '= 6.'] },
        ],
      },
      en: {
        title: 'The sample space',
        objectives: ['Write the sample space as a list, a table or a tree diagram.', 'Use the multiplication rule for the number of outcomes.'],
        theory: 'The sample space Ω is the set of all possible outcomes of an experiment. For two coins (H = heads, T = tails): Ω = {HH, HT, TH, TT}.\n\nFor experiments with several stages use a tree diagram or a table. Multiplication rule: if the first stage has m outcomes and the second n, there are m · n altogether. A die and a coin: 6 · 2 = 12; three coins: 2 · 2 · 2 = 8.\n\nOrder matters: HT and TH are different outcomes.',
        keyPoints: ['Ω: all outcomes', 'Multiplication rule: m · n', 'HT ≠ TH'],
        examples: [
          { example: 'Write the sample space when two coins are tossed.', solution: 'Ω = {HH, HT, TH, TT}: 2 · 2 = 4 outcomes.' },
          { example: 'How many outcomes does throwing a die and a coin have?', solution: '6 · 2 = 12.' },
        ],
        commonMistakes: [
          { mistake: 'Two coins have 3 outcomes: two heads, two tails, one of each.', fix: 'HT and TH are counted separately: 4 outcomes.' },
        ],
        practice: [
          { problem: 'How many outcomes does tossing three coins have?', solution: '8', steps: ['2 · 2 · 2.', '= 8.'] },
          { problem: 'How many outcomes does throwing two dice have?', solution: '36', steps: ['6 · 6.', '= 36.'] },
          { problem: 'Ana has 3 tops and 2 pairs of trousers. How many outfits can she wear?', solution: '6', steps: ['3 · 2.', '= 6.'] },
        ],
      },
      de: {
        title: 'Der Ergebnisraum',
        objectives: ['Den Ergebnisraum als Liste, Tabelle oder Baumdiagramm angeben.', 'Die Produktregel für die Anzahl der Ergebnisse nutzen.'],
        theory: 'Der Ergebnisraum Ω ist die Menge aller möglichen Ergebnisse eines Zufallsversuchs. Für zwei Münzen (K = Kopf, Z = Zahl): Ω = {KK, KZ, ZK, ZZ}.\n\nBei mehrstufigen Versuchen nutzt man ein Baumdiagramm oder eine Tabelle. Produktregel: Hat die erste Stufe m und die zweite n Ergebnisse, gibt es insgesamt m · n. Würfel und Münze: 6 · 2 = 12; drei Münzen: 2 · 2 · 2 = 8.\n\nDie Reihenfolge zählt: KZ und ZK sind verschiedene Ergebnisse.',
        keyPoints: ['Ω: alle Ergebnisse', 'Produktregel: m · n', 'KZ ≠ ZK'],
        examples: [
          { example: 'Geben Sie den Ergebnisraum beim Wurf zweier Münzen an.', solution: 'Ω = {KK, KZ, ZK, ZZ}: 2 · 2 = 4 Ergebnisse.' },
          { example: 'Wie viele Ergebnisse hat der Wurf eines Würfels und einer Münze?', solution: '6 · 2 = 12.' },
        ],
        commonMistakes: [
          { mistake: 'Zwei Münzen haben 3 Ergebnisse: zweimal Kopf, zweimal Zahl, je einmal.', fix: 'KZ und ZK zählen getrennt: 4 Ergebnisse.' },
        ],
        practice: [
          { problem: 'Wie viele Ergebnisse hat der Wurf dreier Münzen?', solution: '8', steps: ['2 · 2 · 2.', '= 8.'] },
          { problem: 'Wie viele Ergebnisse hat der Wurf zweier Würfel?', solution: '36', steps: ['6 · 6.', '= 36.'] },
          { problem: 'Ana hat 3 Oberteile und 2 Hosen. Wie viele Kombinationen kann sie tragen?', solution: '6', steps: ['3 · 2.', '= 6.'] },
        ],
      },
    },

    // ───────── 4. Events
    {
      slug: 'g9-data-probability-events',
      visuals: [{
        type: 'vennDiagram',
        a: { label: alt('A: çift', 'A: even', 'A: gerade'), only: '2' },
        b: { label: alt('B: > 3', 'B: > 3', 'B: > 3'), only: '5' },
        both: '4, 6',
        outside: '1, 3',
        caption: alt('Zari: A ∩ B = {4, 6}, A ∪ B = {2, 4, 5, 6}; P(A ∪ B) = 4/6 = 2/3.', 'A die: A ∩ B = {4, 6}, A ∪ B = {2, 4, 5, 6}; P(A ∪ B) = 4/6 = 2/3.', 'Würfel: A ∩ B = {4, 6}, A ∪ B = {2, 4, 5, 6}; P(A ∪ B) = 4/6 = 2/3.'),
        alt: alt('Diagram Veni për zarin: vetëm A: 2; vetëm B: 5; të dyja: 4, 6; jashtë: 1, 3.', 'Venn diagram for a die: only A: 2; only B: 5; both: 4, 6; outside: 1, 3.', 'Venn-Diagramm für einen Würfel: nur A: 2; nur B: 5; beide: 4, 6; außerhalb: 1, 3.'),
      }],
      answers: {
        examples: [[['3/6 + 3/6 - 2/6', '2/3', 1e-9, '2/3']], [['1 - 1/6', '5/6', 1e-9, '5/6']]],
        practice: [[['1 - 0.35', 0.65]], [['3/6 + 1/6', '2/3', 1e-9, '2/3']], [['0.5 + 0.4 - 0.2', 0.7]]],
      },
      al: {
        title: 'Ngjarjet',
        objectives: ['Të përdorni ngjarjen e kundërt, prerjen dhe bashkimin e ngjarjeve.', 'Të llogaritni P(A ∪ B) me formulë.'],
        theory: 'Ngjarja është nënbashkësi e hapësirës së rezultateve. Ngjarja e kundërt A′ ndodh kur A nuk ndodh: P(A′) = 1 − P(A). A ∩ B: ndodhin të dyja; A ∪ B: ndodh të paktën njëra.\n\nP(A ∪ B) = P(A) + P(B) − P(A ∩ B). Nëse A dhe B janë të papajtueshme (A ∩ B = ∅), atëherë P(A ∪ B) = P(A) + P(B).\n\nZari: A = "çift" = {2, 4, 6}, B = "më i madh se 3" = {4, 5, 6}; A ∩ B = {4, 6}; P(A ∪ B) = 3/6 + 3/6 − 2/6 = 4/6 = 2/3.',
        keyPoints: ['P(A′) = 1 − P(A)', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 'Të papajtueshme: P(A ∪ B) = P(A) + P(B)'],
        examples: [
          { example: 'Zari: A = çift, B = > 3. Gjeni P(A ∪ B).', solution: '3/6 + 3/6 − 2/6 = 4/6 = 2/3.' },
          { example: 'Sa është probabiliteti që në zar të mos dalë 6?', solution: '1 − 1/6 = 5/6.' },
        ],
        commonMistakes: [
          { mistake: 'P(A ∪ B) = P(A) + P(B) edhe kur ngjarjet kanë pjesë të përbashkët.', fix: 'Zbritet P(A ∩ B), përndryshe ajo numërohet dy herë.' },
        ],
        practice: [
          { problem: 'P(A) = 0,35. Sa është P(A′)?', solution: '0,65', steps: ['1 − 0,35.', '= 0,65.'] },
          { problem: 'Zari: sa është P(çift ose 1)?', solution: '2/3', steps: ['Të papajtueshme: 3/6 + 1/6.', '= 4/6 = 2/3.'] },
          { problem: 'P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,2. Gjeni P(A ∪ B).', solution: '0,7', steps: ['0,5 + 0,4 − 0,2.', '= 0,7.'] },
        ],
      },
      en: {
        title: 'Events',
        objectives: ['Use the complementary event, intersection and union of events.', 'Work out P(A ∪ B) with the formula.'],
        theory: 'An event is a subset of the sample space. The complementary event A′ happens when A does not: P(A′) = 1 − P(A). A ∩ B: both happen; A ∪ B: at least one happens.\n\nP(A ∪ B) = P(A) + P(B) − P(A ∩ B). If A and B are mutually exclusive (A ∩ B = ∅), then P(A ∪ B) = P(A) + P(B).\n\nA die: A = "even" = {2, 4, 6}, B = "greater than 3" = {4, 5, 6}; A ∩ B = {4, 6}; P(A ∪ B) = 3/6 + 3/6 − 2/6 = 4/6 = 2/3.',
        keyPoints: ['P(A′) = 1 − P(A)', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 'Mutually exclusive: P(A ∪ B) = P(A) + P(B)'],
        examples: [
          { example: 'A die: A = even, B = > 3. Find P(A ∪ B).', solution: '3/6 + 3/6 − 2/6 = 4/6 = 2/3.' },
          { example: 'What is the probability that a die does not show 6?', solution: '1 − 1/6 = 5/6.' },
        ],
        commonMistakes: [
          { mistake: 'P(A ∪ B) = P(A) + P(B) even when the events overlap.', fix: 'Subtract P(A ∩ B), otherwise it is counted twice.' },
        ],
        practice: [
          { problem: 'P(A) = 0.35. What is P(A′)?', solution: '0.65', steps: ['1 − 0.35.', '= 0.65.'] },
          { problem: 'A die: what is P(even or 1)?', solution: '2/3', steps: ['Mutually exclusive: 3/6 + 1/6.', '= 4/6 = 2/3.'] },
          { problem: 'P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. Find P(A ∪ B).', solution: '0.7', steps: ['0.5 + 0.4 − 0.2.', '= 0.7.'] },
        ],
      },
      de: {
        title: 'Ereignisse',
        objectives: ['Gegenereignis, Schnitt und Vereinigung von Ereignissen nutzen.', 'P(A ∪ B) mit der Formel berechnen.'],
        theory: 'Ein Ereignis ist eine Teilmenge des Ergebnisraums. Das Gegenereignis A′ tritt ein, wenn A nicht eintritt: P(A′) = 1 − P(A). A ∩ B: beide treten ein; A ∪ B: mindestens eines tritt ein.\n\nP(A ∪ B) = P(A) + P(B) − P(A ∩ B). Sind A und B unvereinbar (A ∩ B = ∅), gilt P(A ∪ B) = P(A) + P(B).\n\nWürfel: A = „gerade“ = {2, 4, 6}, B = „größer als 3“ = {4, 5, 6}; A ∩ B = {4, 6}; P(A ∪ B) = 3/6 + 3/6 − 2/6 = 4/6 = 2/3.',
        keyPoints: ['P(A′) = 1 − P(A)', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 'Unvereinbar: P(A ∪ B) = P(A) + P(B)'],
        examples: [
          { example: 'Würfel: A = gerade, B = > 3. Bestimmen Sie P(A ∪ B).', solution: '3/6 + 3/6 − 2/6 = 4/6 = 2/3.' },
          { example: 'Wie groß ist die Wahrscheinlichkeit, keine 6 zu würfeln?', solution: '1 − 1/6 = 5/6.' },
        ],
        commonMistakes: [
          { mistake: 'P(A ∪ B) = P(A) + P(B), auch wenn sich die Ereignisse überschneiden.', fix: 'P(A ∩ B) abziehen, sonst wird es doppelt gezählt.' },
        ],
        practice: [
          { problem: 'P(A) = 0,35. Wie groß ist P(A′)?', solution: '0,65', steps: ['1 − 0,35.', '= 0,65.'] },
          { problem: 'Würfel: Wie groß ist P(gerade oder 1)?', solution: '2/3', steps: ['Unvereinbar: 3/6 + 1/6.', '= 4/6 = 2/3.'] },
          { problem: 'P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,2. Bestimmen Sie P(A ∪ B).', solution: '0,7', steps: ['0,5 + 0,4 − 0,2.', '= 0,7.'] },
        ],
      },
    },

    // ───────── 5. Theoretical and experimental probability
    {
      slug: 'g9-data-probability-probability',
      visuals: [{
        type: 'barChart', max: 7, step: 1, showValues: true,
        bars: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((s) => ({ label: String(s), value: 6 - Math.abs(7 - s) })),
        caption: alt('Në sa nga 36 rezultatet del secila shumë e dy zareve: shuma 7 del 6 herë, P = 6/36 = 1/6.', 'In how many of the 36 outcomes each sum of two dice occurs: 7 occurs 6 times, P = 6/36 = 1/6.', 'In wie vielen der 36 Ergebnisse jede Augensumme vorkommt: 7 kommt 6-mal vor, P = 6/36 = 1/6.'),
        alt: alt('Diagram me shtylla i numrit të rezultateve për shumat 2 deri 12: 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1.', 'Bar chart of the number of outcomes for sums 2 to 12: 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1.', 'Säulendiagramm der Anzahl der Ergebnisse für die Summen 2 bis 12: 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1.'),
      }],
      answers: {
        examples: [[['6 / 36', '1/6', 1e-9, '1/6']], [['31 / 200', 0.155]]],
        practice: [[['300 / 6', 50]], [['1 / 36', '1/36', 1e-9, '1/36']], [['3 / 4', '3/4', 1e-9, '3/4']]],
      },
      al: {
        title: 'Probabiliteti teorik dhe statistikor',
        objectives: ['Të llogaritni probabilitetin teorik me numërim.', 'Ta krahasoni me dendurinë relative nga një eksperiment dhe të parashikoni numrin e pritshëm.'],
        theory: 'Probabiliteti teorik: P(A) = rezultate të favorshme : të gjitha rezultatet (kur janë njësoj të mundshme). Te dy zaret, shuma 7 del në 6 nga 36 rezultate: P = 1/6.\n\nProbabiliteti statistikor është denduria relative në një eksperiment: nëse në 200 hedhje shuma 7 doli 31 herë, denduria relative është 31/200 = 0,155, afër 1/6 ≈ 0,167. Me më shumë hedhje, ajo zakonisht afrohet më shumë te vlera teorike.\n\nNumri i pritshëm: n · P(A). Në 300 hedhje të zarit presim rreth 300 · 1/6 = 50 gjashtëshe.',
        keyPoints: ['Teorik: të favorshme : të gjitha', 'Statistikor: denduria relative', 'Numri i pritshëm = n · P'],
        examples: [
          { example: 'Hedhim dy zare. Sa është probabiliteti që shuma të jetë 7?', solution: '6 nga 36 rezultate: 6/36 = 1/6.' },
          { example: 'Në 200 hedhje shuma 7 doli 31 herë. Sa është probabiliteti statistikor?', solution: '31/200 = 0,155 (teorikisht ≈ 0,167).' },
        ],
        commonMistakes: [
          { mistake: 'Pas tre hedhjeve pa 6, gjashtëshja "duhet" të dalë.', fix: 'Hedhjet janë të pavarura; P(6) mbetet 1/6 çdo herë.' },
        ],
        practice: [
          { problem: 'Sa gjashtëshe presim në 300 hedhje të zarit?', solution: '50', steps: ['300 · 1/6.', '= 50.'] },
          { problem: 'Dy zare: sa është P(shuma = 12)?', solution: '1/36', steps: ['Vetëm 6 + 6.', '1/36.'] },
          { problem: 'Dy monedha: sa është P(të paktën një stemë)?', solution: '3/4', steps: ['E kundërta: NN, P = 1/4.', '1 − 1/4 = 3/4.'] },
        ],
      },
      en: {
        title: 'Theoretical and experimental probability',
        objectives: ['Work out theoretical probability by counting.', 'Compare it with the relative frequency of an experiment and predict the expected number.'],
        theory: 'Theoretical probability: P(A) = favourable outcomes ÷ all outcomes (when they are equally likely). With two dice a sum of 7 occurs in 6 of 36 outcomes: P = 1/6.\n\nExperimental probability is the relative frequency in an experiment: if a sum of 7 came up 31 times in 200 throws, the relative frequency is 31/200 = 0.155, close to 1/6 ≈ 0.167. With more throws it usually gets closer to the theoretical value.\n\nExpected number: n · P(A). In 300 throws of a die we expect about 300 · 1/6 = 50 sixes.',
        keyPoints: ['Theoretical: favourable ÷ all', 'Experimental: relative frequency', 'Expected number = n · P'],
        examples: [
          { example: 'Two dice are thrown. What is the probability that the sum is 7?', solution: '6 of 36 outcomes: 6/36 = 1/6.' },
          { example: 'In 200 throws a sum of 7 came up 31 times. What is the experimental probability?', solution: '31/200 = 0.155 (in theory ≈ 0.167).' },
        ],
        commonMistakes: [
          { mistake: 'After three throws without a 6, a six is "due".', fix: 'The throws are independent; P(6) stays 1/6 every time.' },
        ],
        practice: [
          { problem: 'How many sixes do we expect in 300 throws of a die?', solution: '50', steps: ['300 · 1/6.', '= 50.'] },
          { problem: 'Two dice: what is P(sum = 12)?', solution: '1/36', steps: ['Only 6 + 6.', '1/36.'] },
          { problem: 'Two coins: what is P(at least one head)?', solution: '3/4', steps: ['The complement: TT, P = 1/4.', '1 − 1/4 = 3/4.'] },
        ],
      },
      de: {
        title: 'Wahrscheinlichkeit und relative Häufigkeit',
        objectives: ['Wahrscheinlichkeiten durch Abzählen berechnen.', 'Mit der relativen Häufigkeit eines Versuchs vergleichen und den Erwartungswert der Anzahl angeben.'],
        theory: 'Laplace-Wahrscheinlichkeit: P(A) = günstige Ergebnisse : alle Ergebnisse (bei gleich wahrscheinlichen Ergebnissen). Bei zwei Würfeln kommt die Summe 7 in 6 von 36 Ergebnissen vor: P = 1/6.\n\nDie relative Häufigkeit in einem Versuch schätzt die Wahrscheinlichkeit: Kam die Summe 7 in 200 Würfen 31-mal, ist die relative Häufigkeit 31/200 = 0,155, nahe bei 1/6 ≈ 0,167. Bei mehr Würfen nähert sie sich meist stärker dem theoretischen Wert.\n\nErwartete Anzahl: n · P(A). Bei 300 Würfen erwartet man etwa 300 · 1/6 = 50 Sechsen.',
        keyPoints: ['Theoretisch: günstige : alle', 'Versuch: relative Häufigkeit', 'Erwartete Anzahl = n · P'],
        examples: [
          { example: 'Zwei Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit für die Summe 7?', solution: '6 von 36 Ergebnissen: 6/36 = 1/6.' },
          { example: 'In 200 Würfen kam die Summe 7 31-mal. Wie groß ist die relative Häufigkeit?', solution: '31/200 = 0,155 (theoretisch ≈ 0,167).' },
        ],
        commonMistakes: [
          { mistake: 'Nach drei Würfen ohne 6 ist eine Sechs „fällig“.', fix: 'Die Würfe sind unabhängig; P(6) bleibt jedes Mal 1/6.' },
        ],
        practice: [
          { problem: 'Wie viele Sechsen erwartet man bei 300 Würfen?', solution: '50', steps: ['300 · 1/6.', '= 50.'] },
          { problem: 'Zwei Würfel: Wie groß ist P(Summe = 12)?', solution: '1/36', steps: ['Nur 6 + 6.', '1/36.'] },
          { problem: 'Zwei Münzen: Wie groß ist P(mindestens einmal Kopf)?', solution: '3/4', steps: ['Gegenereignis: ZZ, P = 1/4.', '1 − 1/4 = 3/4.'] },
        ],
      },
    },
  ],
};
