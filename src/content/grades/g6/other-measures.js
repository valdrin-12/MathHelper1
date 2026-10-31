// Grade 6 · Theme 9: Measuring other quantities: mass, time, money (March–April)
const alt = (al, en, de) => ({ al, en, de });
const hand = (minutesFrom12, len) => {
  const a = ((90 - minutesFrom12 * 6) * Math.PI) / 180;
  return [len * Math.cos(a), len * Math.sin(a)];
};

export default {
  id: 'g6-other-measures',
  i18n: {
    al: { title: 'Matja e madhësive të tjera', description: 'Masa, koha dhe paratë: njësitë, shndërrimet dhe problemat e përditshme.' },
    en: { title: 'Mass, time and money', description: 'Units of mass, time and money, conversions and everyday problems.' },
    de: { title: 'Masse, Zeit und Geld', description: 'Einheiten für Masse, Zeit und Geld, Umrechnungen und Alltagsaufgaben.' },
  },
  lessons: [
    // ───────── 1. Mass
    {
      slug: 'g6-other-measures-mass',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Njësia', 'Unit', 'Einheit'), cells: ['t', 'kg', 'g', 'mg'] },
          { head: '→', cells: ['× 1 000', '× 1 000', '× 1 000', ''] },
          { head: alt('Shembull', 'Example', 'Beispiel'), cells: [alt('makinë', 'car', 'Auto'), alt('çantë', 'bag', 'Tasche'), alt('mollë', 'apple', 'Apfel'), alt('pilulë', 'pill', 'Tablette')] },
        ],
        caption: alt('Ndërmjet njësive fqinje të masës faktori është 1 000.', 'Between neighbouring units of mass the factor is 1 000.', 'Zwischen benachbarten Masseneinheiten ist die Umrechnungszahl 1 000.'),
        alt: alt('Tabela e njësive të masës: 1 t = 1 000 kg, 1 kg = 1 000 g, 1 g = 1 000 mg.', 'Table of mass units: 1 t = 1 000 kg, 1 kg = 1 000 g, 1 g = 1 000 mg.', 'Tabelle der Masseneinheiten: 1 t = 1 000 kg, 1 kg = 1 000 g, 1 g = 1 000 mg.'),
      }],
      answers: {
        examples: [[['2.4 * 1000', 2400]], [['3500 / 1000', 3.5]]],
        practice: [[['0.75 + 1.5', 2.25]], [['25 * 1000 / 500', 50]], [['0.3 * 1000', 300]]],
      },
      al: {
        title: 'Masa',
        objectives: ['Të njihni njësitë e masës t, kg, g dhe mg.', 'Të shndërroni dhe të llogaritni me masa.'],
        theory: 'Masa tregon sa i rëndë është një trup; e matim me peshore. Njësia bazë është kilogrami (kg). Për masa të mëdha përdorim tonin (t), për të vogla gramin (g) dhe miligramin (mg).\n\nNdërmjet njësive fqinje faktori është 1 000: 1 t = 1 000 kg; 1 kg = 1 000 g; 1 g = 1 000 mg.\n\nSi te gjatësia: te njësia më e vogël shumëzojmë (2,4 kg = 2 400 g), te më e madhja pjesëtojmë (3 500 kg = 3,5 t). Para se të mbledhim masa, i sjellim në të njëjtën njësi.',
        keyPoints: ['1 t = 1 000 kg; 1 kg = 1 000 g; 1 g = 1 000 mg', 'Te njësia më e vogël × 1 000; te më e madhja : 1 000.', 'Mblidhni vetëm masa në të njëjtën njësi.'],
        examples: [
          { example: 'Shndërroni 2,4 kg në gram.', solution: '2,4 · 1 000 = 2 400 g.' },
          { example: 'Një kamion mban 3 500 kg. Sa ton janë?', solution: '3 500 : 1 000 = 3,5 t.' },
        ],
        commonMistakes: [
          { mistake: '1 kg = 100 g', fix: '"Kilo" do të thotë një mijë: 1 kg = 1 000 g.' },
        ],
        practice: [
          { problem: 'Sa kg janë 750 g + 1,5 kg?', solution: '2,25 kg', steps: ['750 g = 0,75 kg.', '0,75 + 1,5 = 2,25 kg.'] },
          { problem: 'Një thes 25 kg sheqer ndahet në pako 500 g. Sa pako dalin?', solution: '50 pako', steps: ['25 kg = 25 000 g.', '25 000 : 500 = 50.'] },
          { problem: 'Shndërroni 0,3 t në kg.', solution: '300 kg', steps: ['1 t = 1 000 kg.', '0,3 · 1 000 = 300 kg.'] },
        ],
      },
      en: {
        title: 'Mass',
        objectives: ['Know the units of mass t, kg, g and mg.', 'Convert and calculate with masses.'],
        theory: 'Mass tells how heavy an object is; we measure it with scales. The basic unit is the kilogram (kg). For large masses we use the tonne (t), for small ones the gram (g) and the milligram (mg).\n\nBetween neighbouring units the factor is 1 000: 1 t = 1 000 kg; 1 kg = 1 000 g; 1 g = 1 000 mg.\n\nAs with length: to a smaller unit we multiply (2.4 kg = 2 400 g), to a larger one we divide (3 500 kg = 3.5 t). Before adding masses, bring them to the same unit.',
        keyPoints: ['1 t = 1 000 kg; 1 kg = 1 000 g; 1 g = 1 000 mg', 'To a smaller unit × 1 000; to a larger unit ÷ 1 000.', 'Only add masses in the same unit.'],
        examples: [
          { example: 'Convert 2.4 kg to grams.', solution: '2.4 · 1 000 = 2 400 g.' },
          { example: 'A truck carries 3 500 kg. How many tonnes is that?', solution: '3 500 ÷ 1 000 = 3.5 t.' },
        ],
        commonMistakes: [
          { mistake: '1 kg = 100 g', fix: '"Kilo" means a thousand: 1 kg = 1 000 g.' },
        ],
        practice: [
          { problem: 'How many kg are 750 g + 1.5 kg?', solution: '2.25 kg', steps: ['750 g = 0.75 kg.', '0.75 + 1.5 = 2.25 kg.'] },
          { problem: 'A 25 kg sack of sugar is split into 500 g packs. How many packs are there?', solution: '50 packs', steps: ['25 kg = 25 000 g.', '25 000 ÷ 500 = 50.'] },
          { problem: 'Convert 0.3 t to kg.', solution: '300 kg', steps: ['1 t = 1 000 kg.', '0.3 · 1 000 = 300 kg.'] },
        ],
      },
      de: {
        title: 'Masse',
        objectives: ['Die Masseneinheiten t, kg, g und mg kennen.', 'Mit Massen umrechnen und rechnen.'],
        theory: 'Die Masse gibt an, wie schwer ein Körper ist; man misst sie mit einer Waage. Die Grundeinheit ist das Kilogramm (kg). Für große Massen nimmt man die Tonne (t), für kleine das Gramm (g) und das Milligramm (mg).\n\nZwischen benachbarten Einheiten ist die Umrechnungszahl 1 000: 1 t = 1 000 kg; 1 kg = 1 000 g; 1 g = 1 000 mg.\n\nWie bei den Längen gilt: in die kleinere Einheit multiplizieren (2,4 kg = 2 400 g), in die größere dividieren (3 500 kg = 3,5 t). Vor dem Addieren bringt man die Massen auf dieselbe Einheit.',
        keyPoints: ['1 t = 1 000 kg; 1 kg = 1 000 g; 1 g = 1 000 mg', 'In die kleinere Einheit · 1 000; in die größere : 1 000.', 'Nur Massen in derselben Einheit addieren.'],
        examples: [
          { example: 'Rechnen Sie 2,4 kg in Gramm um.', solution: '2,4 · 1 000 = 2 400 g.' },
          { example: 'Ein Lkw lädt 3 500 kg. Wie viele Tonnen sind das?', solution: '3 500 : 1 000 = 3,5 t.' },
        ],
        commonMistakes: [
          { mistake: '1 kg = 100 g', fix: '„Kilo“ bedeutet tausend: 1 kg = 1 000 g.' },
        ],
        practice: [
          { problem: 'Wie viele kg sind 750 g + 1,5 kg?', solution: '2,25 kg', steps: ['750 g = 0,75 kg.', '0,75 + 1,5 = 2,25 kg.'] },
          { problem: 'Ein Sack mit 25 kg Zucker wird in Packungen zu 500 g aufgeteilt. Wie viele Packungen entstehen?', solution: '50 Packungen', steps: ['25 kg = 25 000 g.', '25 000 : 500 = 50.'] },
          { problem: 'Rechnen Sie 0,3 t in kg um.', solution: '300 kg', steps: ['1 t = 1 000 kg.', '0,3 · 1 000 = 300 kg.'] },
        ],
      },
    },

    // ───────── 2. Time
    {
      slug: 'g6-other-measures-time',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3.4, xMax: 3.4, yMin: -3.4, yMax: 3.4 }, height: 180,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 3, color: 'primary' },
          { kind: 'label', at: [0, 2.35], text: '12' }, { kind: 'label', at: [2.4, 0], text: '3' },
          { kind: 'label', at: [0, -2.4], text: '6' }, { kind: 'label', at: [-2.4, 0], text: '9' },
          { kind: 'segment', from: [0, 0], to: hand(35, 2.5), color: 'secondary' },
          { kind: 'segment', from: [0, 0], to: hand((2 + 35 / 60) * 5, 1.6), color: 'primary' },
          { kind: 'point', at: [0, 0], color: 'primary' },
        ],
        caption: alt('Ora tregon 2:35; akrepi i minutave është te 7 (7 · 5 = 35 min).', 'The clock shows 2:35; the minute hand is on 7 (7 · 5 = 35 min).', 'Die Uhr zeigt 2:35; der Minutenzeiger steht auf der 7 (7 · 5 = 35 min).'),
        alt: alt('Fusha e orës që tregon ora 2 e 35 minuta.', 'A clock face showing 2:35.', 'Ein Zifferblatt, das 2:35 Uhr zeigt.'),
      }],
      answers: {
        examples: [[['2 * 60 + 35', 155]], [['(11 * 60 + 20) - (8 * 60 + 45)', 155, 0, '2 h 35 min']]],
        practice: [[['3.5 * 60', 210]], [['400 - 6 * 60', 40, 0, '6 min 40 s']], [['19 * 60 + 40 + 115', 21 * 60 + 35, 0, '21:35']]],
      },
      al: {
        title: 'Koha',
        objectives: ['Të shndërroni orë, minuta dhe sekonda.', 'Të llogaritni kohëzgjatje dhe orë të fillimit ose mbarimit.'],
        theory: 'Njësitë e kohës nuk janë dhjetore: 1 orë (h) = 60 minuta (min); 1 min = 60 sekonda (s); 1 ditë = 24 h; 1 javë = 7 ditë.\n\nShndërrimi: 2 h 35 min = 2 · 60 + 35 = 155 min. Anasjelltas, 400 s = 6 min 40 s, sepse 400 : 60 = 6 me mbetje 40.\n\nPër kohëzgjatjen ndërmjet dy orëve, numërojmë deri te ora e plotë dhe pastaj orët e minutat që mbeten: nga 08:45 te 11:20 → 15 min deri në 09:00, 2 h deri në 11:00, 20 min deri në 11:20; gjithsej 2 h 35 min.',
        keyPoints: ['1 h = 60 min; 1 min = 60 s; 1 ditë = 24 h', '2,5 h = 2 h 30 min (jo 2 h 50 min).', 'Kohëzgjatje: deri te ora e plotë, pastaj pjesa tjetër.'],
        examples: [
          { example: 'Sa minuta janë 2 orë e 35 minuta?', solution: '2 · 60 + 35 = 120 + 35 = 155 min.' },
          { example: 'Treni niset në 08:45 dhe arrin në 11:20. Sa zgjat udhëtimi?', solution: '08:45 → 09:00: 15 min; 09:00 → 11:00: 2 h; 11:00 → 11:20: 20 min. Gjithsej 2 h 35 min.' },
        ],
        commonMistakes: [
          { mistake: '2,5 h = 2 h 50 min', fix: '0,5 h është gjysmë ore = 30 min.' },
          { mistake: 'Kohët zbriten si numra dhjetorë: 11,20 − 8,45 = 2,75.', fix: 'Një orë ka 60 minuta, jo 100; numëroni deri te ora e plotë.' },
        ],
        practice: [
          { problem: 'Sa minuta janë 3,5 orë?', solution: '210 min', steps: ['3,5 · 60.', '= 210 min.'] },
          { problem: 'Shkruani 400 sekonda në minuta dhe sekonda.', solution: '6 min 40 s', steps: ['400 : 60 = 6 me mbetje 40.', '6 min 40 s.'] },
          { problem: 'Një film fillon në 19:40 dhe zgjat 1 h 55 min. Në çfarë ore mbaron?', solution: '21:35', steps: ['19:40 + 1 h = 20:40.', '20:40 + 55 min = 21:35.'] },
        ],
      },
      en: {
        title: 'Time',
        objectives: ['Convert hours, minutes and seconds.', 'Work out durations and start or end times.'],
        theory: 'Units of time are not decimal: 1 hour (h) = 60 minutes (min); 1 min = 60 seconds (s); 1 day = 24 h; 1 week = 7 days.\n\nConverting: 2 h 35 min = 2 · 60 + 35 = 155 min. The other way, 400 s = 6 min 40 s, because 400 ÷ 60 = 6 remainder 40.\n\nFor the time between two clock times, count up to the next full hour, then the remaining hours and minutes: from 08:45 to 11:20 → 15 min to 09:00, 2 h to 11:00, 20 min to 11:20; in total 2 h 35 min.',
        keyPoints: ['1 h = 60 min; 1 min = 60 s; 1 day = 24 h', '2.5 h = 2 h 30 min (not 2 h 50 min).', 'Duration: count to the full hour, then the rest.'],
        examples: [
          { example: 'How many minutes are 2 hours and 35 minutes?', solution: '2 · 60 + 35 = 120 + 35 = 155 min.' },
          { example: 'A train leaves at 08:45 and arrives at 11:20. How long is the journey?', solution: '08:45 → 09:00: 15 min; 09:00 → 11:00: 2 h; 11:00 → 11:20: 20 min. In total 2 h 35 min.' },
        ],
        commonMistakes: [
          { mistake: '2.5 h = 2 h 50 min', fix: '0.5 h is half an hour = 30 min.' },
          { mistake: 'Subtracting times like decimals: 11.20 − 8.45 = 2.75.', fix: 'An hour has 60 minutes, not 100; count up to the full hour.' },
        ],
        practice: [
          { problem: 'How many minutes are 3.5 hours?', solution: '210 min', steps: ['3.5 · 60.', '= 210 min.'] },
          { problem: 'Write 400 seconds in minutes and seconds.', solution: '6 min 40 s', steps: ['400 ÷ 60 = 6 remainder 40.', '6 min 40 s.'] },
          { problem: 'A film starts at 19:40 and lasts 1 h 55 min. When does it end?', solution: '21:35', steps: ['19:40 + 1 h = 20:40.', '20:40 + 55 min = 21:35.'] },
        ],
      },
      de: {
        title: 'Zeit',
        objectives: ['Stunden, Minuten und Sekunden umrechnen.', 'Zeitspannen sowie Anfangs- und Endzeiten berechnen.'],
        theory: 'Zeiteinheiten sind nicht dezimal: 1 Stunde (h) = 60 Minuten (min); 1 min = 60 Sekunden (s); 1 Tag = 24 h; 1 Woche = 7 Tage.\n\nUmrechnen: 2 h 35 min = 2 · 60 + 35 = 155 min. Umgekehrt sind 400 s = 6 min 40 s, denn 400 : 60 = 6 Rest 40.\n\nFür die Zeitspanne zwischen zwei Uhrzeiten zählt man bis zur nächsten vollen Stunde und dann die restlichen Stunden und Minuten: von 08:45 bis 11:20 → 15 min bis 09:00, 2 h bis 11:00, 20 min bis 11:20; zusammen 2 h 35 min.',
        keyPoints: ['1 h = 60 min; 1 min = 60 s; 1 Tag = 24 h', '2,5 h = 2 h 30 min (nicht 2 h 50 min).', 'Zeitspanne: bis zur vollen Stunde zählen, dann den Rest.'],
        examples: [
          { example: 'Wie viele Minuten sind 2 Stunden und 35 Minuten?', solution: '2 · 60 + 35 = 120 + 35 = 155 min.' },
          { example: 'Ein Zug fährt um 08:45 ab und kommt um 11:20 an. Wie lange dauert die Fahrt?', solution: '08:45 → 09:00: 15 min; 09:00 → 11:00: 2 h; 11:00 → 11:20: 20 min. Zusammen 2 h 35 min.' },
        ],
        commonMistakes: [
          { mistake: '2,5 h = 2 h 50 min', fix: '0,5 h ist eine halbe Stunde = 30 min.' },
          { mistake: 'Uhrzeiten wie Dezimalzahlen subtrahieren: 11,20 − 8,45 = 2,75.', fix: 'Eine Stunde hat 60 Minuten, nicht 100; bis zur vollen Stunde zählen.' },
        ],
        practice: [
          { problem: 'Wie viele Minuten sind 3,5 Stunden?', solution: '210 min', steps: ['3,5 · 60.', '= 210 min.'] },
          { problem: 'Schreiben Sie 400 Sekunden in Minuten und Sekunden.', solution: '6 min 40 s', steps: ['400 : 60 = 6 Rest 40.', '6 min 40 s.'] },
          { problem: 'Ein Film beginnt um 19:40 und dauert 1 h 55 min. Wann endet er?', solution: '21:35', steps: ['19:40 + 1 h = 20:40.', '20:40 + 55 min = 21:35.'] },
        ],
      },
    },

    // ───────── 3. Money
    {
      slug: 'g6-other-measures-money',
      visuals: [{
        type: 'barChart',
        bars: [{ label: alt('bukë', 'bread', 'Brot'), value: 0.85 }, { label: alt('qumësht', 'milk', 'Milch'), value: 1.2 }, { label: alt('mollë 1 kg', 'apples 1 kg', 'Äpfel 1 kg'), value: 1.6 }, { label: alt('djathë', 'cheese', 'Käse'), value: 3.4 }],
        max: 4, step: 1, multiColor: true, decimals: 2,
        yLabel: '€',
        caption: alt('Çmimet në një dyqan, në euro.', 'Prices in a shop, in euros.', 'Preise in einem Laden, in Euro.'),
        alt: alt('Diagram me shtylla i çmimeve: bukë 0,85 €, qumësht 1,20 €, mollë 1,60 € për kg, djathë 3,40 €.', 'Bar chart of prices: bread €0.85, milk €1.20, apples €1.60 per kg, cheese €3.40.', 'Säulendiagramm der Preise: Brot 0,85 €, Milch 1,20 €, Äpfel 1,60 € pro kg, Käse 3,40 €.'),
      }],
      answers: {
        examples: [[['3 * 0.85 + 1.2', 3.75]], [['10 - 3.75', 6.25]]],
        practice: [[['450 / 100', 4.5]], [['7.5 / 5', 1.5]], [['3.6 / 2 < 1 / 0.5', true]]],
      },
      al: {
        title: 'Paratë',
        objectives: ['Të llogaritni me euro dhe cent.', 'Të gjeni kusurin dhe çmimin për njësi.'],
        theory: 'Në Kosovë përdoret euroja (€): 1 € = 100 cent. Çmimet shkruhen me dy shifra pas presjes: 3,75 € do të thotë 3 euro e 75 cent; 450 cent = 4,50 €.\n\nPër një blerje mbledhim çmimet (shumëzojmë kur blejmë disa copë të njëjta). Kusuri = shuma që paguam − çmimi i blerjes.\n\nPër të krahasuar dy oferta llogaritim çmimin për njësi (për 1 kg, 1 l ose 1 copë): pjesëtojmë çmimin me sasinë. Oferta me çmim më të ulët për njësi është më e lirë.',
        keyPoints: ['1 € = 100 cent', 'Kusuri = paratë e dhëna − çmimi.', 'Çmimi për njësi = çmimi : sasia.'],
        examples: [
          { example: 'Blini 3 bukë me nga 0,85 € dhe një qumësht 1,20 €. Sa paguani?', solution: '3 · 0,85 = 2,55 €; 2,55 + 1,20 = 3,75 €.' },
          { example: 'Paguani me 10 € blerjen prej 3,75 €. Sa kusur merrni?', solution: '10 − 3,75 = 6,25 €.' },
        ],
        commonMistakes: [
          { mistake: '450 cent = 45 €', fix: '100 cent = 1 €, pra 450 cent = 4,50 €.' },
        ],
        practice: [
          { problem: 'Shkruani 450 cent në euro.', solution: '4,50 €', steps: ['1 € = 100 cent.', '450 : 100 = 4,50 €.'] },
          { problem: '5 fletore kushtojnë 7,50 €. Sa kushton një fletore?', solution: '1,50 €', steps: ['7,50 : 5.', '= 1,50 €.'] },
          { problem: 'Cila ofertë është më e lirë: 2 kg mollë për 3,60 € apo 500 g për 1,00 €?', solution: 'E para (1,80 € për kg kundrejt 2,00 € për kg).', steps: ['3,60 : 2 = 1,80 € për kg.', '500 g = 0,5 kg; 1,00 : 0,5 = 2,00 € për kg.', '1,80 < 2,00.'] },
        ],
      },
      en: {
        title: 'Money',
        objectives: ['Calculate with euros and cents.', 'Work out change and unit prices.'],
        theory: 'In Kosovo the euro (€) is used: €1 = 100 cents. Prices are written with two digits after the point: €3.75 means 3 euros and 75 cents; 450 cents = €4.50.\n\nFor a purchase we add the prices (multiply when buying several of the same item). Change = money paid − price of the purchase.\n\nTo compare two offers, work out the unit price (per 1 kg, 1 l or 1 item): divide the price by the amount. The offer with the lower unit price is cheaper.',
        keyPoints: ['€1 = 100 cents', 'Change = money given − price.', 'Unit price = price ÷ amount.'],
        examples: [
          { example: 'You buy 3 loaves of bread at €0.85 each and a milk at €1.20. How much do you pay?', solution: '3 · 0.85 = €2.55; 2.55 + 1.20 = €3.75.' },
          { example: 'You pay for a €3.75 purchase with €10. How much change do you get?', solution: '10 − 3.75 = €6.25.' },
        ],
        commonMistakes: [
          { mistake: '450 cents = €45', fix: '100 cents = €1, so 450 cents = €4.50.' },
        ],
        practice: [
          { problem: 'Write 450 cents in euros.', solution: '€4.50', steps: ['€1 = 100 cents.', '450 ÷ 100 = €4.50.'] },
          { problem: '5 notebooks cost €7.50. How much does one notebook cost?', solution: '€1.50', steps: ['7.50 ÷ 5.', '= €1.50.'] },
          { problem: 'Which offer is cheaper: 2 kg of apples for €3.60 or 500 g for €1.00?', solution: 'The first (€1.80 per kg versus €2.00 per kg).', steps: ['3.60 ÷ 2 = €1.80 per kg.', '500 g = 0.5 kg; 1.00 ÷ 0.5 = €2.00 per kg.', '1.80 < 2.00.'] },
        ],
      },
      de: {
        title: 'Geld',
        objectives: ['Mit Euro und Cent rechnen.', 'Wechselgeld und Preis pro Einheit berechnen.'],
        theory: 'Im Kosovo wird mit dem Euro (€) bezahlt: 1 € = 100 Cent. Preise schreibt man mit zwei Nachkommastellen: 3,75 € bedeutet 3 Euro und 75 Cent; 450 Cent = 4,50 €.\n\nBei einem Einkauf addiert man die Preise (bei mehreren gleichen Stücken multipliziert man). Wechselgeld = gegebenes Geld − Preis.\n\nUm zwei Angebote zu vergleichen, berechnet man den Preis pro Einheit (pro 1 kg, 1 l oder 1 Stück): Preis durch Menge teilen. Das Angebot mit dem kleineren Preis pro Einheit ist günstiger.',
        keyPoints: ['1 € = 100 Cent', 'Wechselgeld = gegebenes Geld − Preis.', 'Preis pro Einheit = Preis : Menge.'],
        examples: [
          { example: 'Sie kaufen 3 Brote zu je 0,85 € und eine Milch für 1,20 €. Wie viel bezahlen Sie?', solution: '3 · 0,85 = 2,55 €; 2,55 + 1,20 = 3,75 €.' },
          { example: 'Sie bezahlen einen Einkauf von 3,75 € mit 10 €. Wie viel Wechselgeld bekommen Sie?', solution: '10 − 3,75 = 6,25 €.' },
        ],
        commonMistakes: [
          { mistake: '450 Cent = 45 €', fix: '100 Cent = 1 €, also 450 Cent = 4,50 €.' },
        ],
        practice: [
          { problem: 'Schreiben Sie 450 Cent in Euro.', solution: '4,50 €', steps: ['1 € = 100 Cent.', '450 : 100 = 4,50 €.'] },
          { problem: '5 Hefte kosten 7,50 €. Wie viel kostet ein Heft?', solution: '1,50 €', steps: ['7,50 : 5.', '= 1,50 €.'] },
          { problem: 'Welches Angebot ist günstiger: 2 kg Äpfel für 3,60 € oder 500 g für 1,00 €?', solution: 'Das erste (1,80 € pro kg gegenüber 2,00 € pro kg).', steps: ['3,60 : 2 = 1,80 € pro kg.', '500 g = 0,5 kg; 1,00 : 0,5 = 2,00 € pro kg.', '1,80 < 2,00.'] },
        ],
      },
    },
  ],
};
