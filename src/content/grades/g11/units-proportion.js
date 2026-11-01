// Grade 11 · Theme 10: Units and proportion (May–June)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g11-units-proportion',
  i18n: {
    al: { title: 'Njësitë dhe përpjesëtimet', description: 'Shpejtësia, dendësia dhe trysnia, këmbimi i njësive, përpjesëtimi i drejtë dhe i zhdrejtë, normat e ndryshimit, rritja dhe zvogëlimi.' },
    en: { title: 'Units and proportion', description: 'Speed, density and pressure, converting units, direct and inverse proportion, rates of change, growth and decay.' },
    de: { title: 'Einheiten und Proportionalität', description: 'Geschwindigkeit, Dichte und Druck, Einheiten umrechnen, proportionale und antiproportionale Zuordnungen, Änderungsraten, Wachstum und Abnahme.' },
  },
  lessons: [
    // ───────── 1. Compound units
    {
      slug: 'g11-units-proportion-compound-units',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Madhësia', 'Quantity', 'Größe'), cells: [alt('shpejtësia', 'speed', 'Geschwindigkeit'), alt('dendësia', 'density', 'Dichte'), alt('trysnia', 'pressure', 'Druck')] },
          { head: alt('Formula', 'Formula', 'Formel'), cells: [alt('rruga : koha', 'distance ÷ time', 'Weg : Zeit'), alt('masa : vëllimi', 'mass ÷ volume', 'Masse : Volumen'), alt('forca : syprina', 'force ÷ area', 'Kraft : Fläche')] },
          { head: alt('Njësia', 'Unit', 'Einheit'), cells: ['km/h, m/s', 'g/cm³, kg/m³', 'N/m² = Pa'] },
        ],
        caption: alt('Njësia e përbërë tregon formulën: g/cm³ = gram pjesëtuar me cm³.', 'A compound unit shows the formula: g/cm³ = grams divided by cm³.', 'Die zusammengesetzte Einheit zeigt die Formel: g/cm³ = Gramm geteilt durch cm³.'),
        alt: alt('Tabelë me formulat dhe njësitë e shpejtësisë, dendësisë dhe trysnisë.', 'Table of the formulas and units for speed, density and pressure.', 'Tabelle mit Formeln und Einheiten für Geschwindigkeit, Dichte und Druck.'),
      }],
      answers: {
        examples: [[['540 / 200', 2.7]], [['600 / 0.3', 2000]]],
        practice: [[['19.3 * 50', 965]], [['150 / 60', 2.5]], [['800 / 0.8', 1000]]],
      },
      al: {
        title: 'Njësitë e përbëra',
        objectives: ['Të përdorni formulat e shpejtësisë, dendësisë dhe trysnisë.', 'Të gjeni njërën madhësi kur njihen dy të tjerat.'],
        theory: 'Njësitë e përbëra lidhin dy madhësi:\n• shpejtësia = rruga : koha (km/h, m/s);\n• dendësia = masa : vëllimi (g/cm³);\n• trysnia = forca : syprina (N/m² = Pa).\n\nNga çdo formulë gjejmë edhe madhësitë e tjera: masa = dendësia · vëllimi, vëllimi = masa : dendësia, koha = rruga : shpejtësia.\n\nNjësia të ndihmon: te g/cm³, gramët janë sipër, cm³ poshtë.',
        keyPoints: ['Shpejtësia = rruga : koha', 'Dendësia = masa : vëllimi', 'Trysnia = forca : syprina'],
        examples: [
          { example: 'Një trup ka masë 540 g dhe vëllim 200 cm³. Sa është dendësia?', solution: '540 : 200 = 2,7 g/cm³.' },
          { example: 'Një forcë 600 N vepron mbi 0,3 m². Sa është trysnia?', solution: '600 : 0,3 = 2 000 N/m² (Pa).' },
        ],
        commonMistakes: [
          { mistake: 'Dendësia llogaritet vëllimi : masa.', fix: 'Shikoni njësinë g/cm³: masa sipër, vëllimi poshtë.' },
          { mistake: 'Përzihen njësitë, p.sh. km me m/s.', fix: 'Ktheni të gjitha në njësi që përputhen para llogaritjes.' },
        ],
        practice: [
          { problem: 'Ari ka dendësi 19,3 g/cm³. Sa është masa e 50 cm³ ari?', solution: '965 g', steps: ['masa = dendësia · vëllimi.', '19,3 · 50 = 965 g.'] },
          { problem: 'Sa zgjat udhëtimi 150 km me 60 km/h?', solution: '2,5 h', steps: ['koha = rruga : shpejtësia.', '150 : 60 = 2,5 h.'] },
          { problem: 'Vaji ka dendësi 0,8 g/cm³. Sa vëllim kanë 800 g vaj?', solution: '1 000 cm³', steps: ['vëllimi = masa : dendësia.', '800 : 0,8 = 1 000 cm³.'] },
        ],
      },
      en: {
        title: 'Compound units',
        objectives: ['Use the formulas for speed, density and pressure.', 'Find one quantity when the other two are known.'],
        theory: 'Compound units link two quantities:\n• speed = distance ÷ time (km/h, m/s);\n• density = mass ÷ volume (g/cm³);\n• pressure = force ÷ area (N/m² = Pa).\n\nEach formula can be rearranged: mass = density · volume, volume = mass ÷ density, time = distance ÷ speed.\n\nThe unit helps: in g/cm³ the grams are on top and cm³ below.',
        keyPoints: ['Speed = distance ÷ time', 'Density = mass ÷ volume', 'Pressure = force ÷ area'],
        examples: [
          { example: 'An object has mass 540 g and volume 200 cm³. What is its density?', solution: '540 ÷ 200 = 2.7 g/cm³.' },
          { example: 'A force of 600 N acts on 0.3 m². What is the pressure?', solution: '600 ÷ 0.3 = 2 000 N/m² (Pa).' },
        ],
        commonMistakes: [
          { mistake: 'Density is worked out as volume ÷ mass.', fix: 'Look at the unit g/cm³: mass on top, volume below.' },
          { mistake: 'Units are mixed, e.g. km with m/s.', fix: 'Convert everything to matching units before calculating.' },
        ],
        practice: [
          { problem: 'Gold has a density of 19.3 g/cm³. What is the mass of 50 cm³ of gold?', solution: '965 g', steps: ['mass = density · volume.', '19.3 · 50 = 965 g.'] },
          { problem: 'How long does a 150 km journey take at 60 km/h?', solution: '2.5 h', steps: ['time = distance ÷ speed.', '150 ÷ 60 = 2.5 h.'] },
          { problem: 'Oil has a density of 0.8 g/cm³. What volume do 800 g of oil take up?', solution: '1 000 cm³', steps: ['volume = mass ÷ density.', '800 ÷ 0.8 = 1 000 cm³.'] },
        ],
      },
      de: {
        title: 'Zusammengesetzte Einheiten',
        objectives: ['Die Formeln für Geschwindigkeit, Dichte und Druck anwenden.', 'Eine Größe bestimmen, wenn die beiden anderen bekannt sind.'],
        theory: 'Zusammengesetzte Einheiten verbinden zwei Größen:\n• Geschwindigkeit = Weg : Zeit (km/h, m/s);\n• Dichte = Masse : Volumen (g/cm³);\n• Druck = Kraft : Fläche (N/m² = Pa).\n\nJede Formel lässt sich umstellen: Masse = Dichte · Volumen, Volumen = Masse : Dichte, Zeit = Weg : Geschwindigkeit.\n\nDie Einheit hilft: Bei g/cm³ stehen die Gramm oben, die cm³ unten.',
        keyPoints: ['Geschwindigkeit = Weg : Zeit', 'Dichte = Masse : Volumen', 'Druck = Kraft : Fläche'],
        examples: [
          { example: 'Ein Körper hat die Masse 540 g und das Volumen 200 cm³. Wie groß ist seine Dichte?', solution: '540 : 200 = 2,7 g/cm³.' },
          { example: 'Eine Kraft von 600 N wirkt auf 0,3 m². Wie groß ist der Druck?', solution: '600 : 0,3 = 2 000 N/m² (Pa).' },
        ],
        commonMistakes: [
          { mistake: 'Die Dichte wird als Volumen : Masse berechnet.', fix: 'Auf die Einheit g/cm³ achten: Masse oben, Volumen unten.' },
          { mistake: 'Einheiten werden gemischt, z. B. km mit m/s.', fix: 'Vor dem Rechnen alles in passende Einheiten umrechnen.' },
        ],
        practice: [
          { problem: 'Gold hat die Dichte 19,3 g/cm³. Welche Masse haben 50 cm³ Gold?', solution: '965 g', steps: ['Masse = Dichte · Volumen.', '19,3 · 50 = 965 g.'] },
          { problem: 'Wie lange dauert eine Fahrt von 150 km mit 60 km/h?', solution: '2,5 h', steps: ['Zeit = Weg : Geschwindigkeit.', '150 : 60 = 2,5 h.'] },
          { problem: 'Öl hat die Dichte 0,8 g/cm³. Welches Volumen haben 800 g Öl?', solution: '1 000 cm³', steps: ['Volumen = Masse : Dichte.', '800 : 0,8 = 1 000 cm³.'] },
        ],
      },
    },
    // ───────── 2. Converting units
    {
      slug: 'g11-units-proportion-converting-units',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Gjatësia', 'Length', 'Länge'), cells: ['1 m = 100 cm'] },
          { head: alt('Syprina', 'Area', 'Fläche'), cells: ['1 m² = 100² cm² = 10 000 cm²'] },
          { head: alt('Vëllimi', 'Volume', 'Volumen'), cells: ['1 m³ = 100³ cm³ = 1 000 000 cm³'] },
          { head: alt('Shpejtësia', 'Speed', 'Geschwindigkeit'), cells: [alt('1 m/s = 3,6 km/h', '1 m/s = 3.6 km/h', '1 m/s = 3,6 km/h')] },
        ],
        caption: alt('Te syprina faktori ngrihet në katror, te vëllimi në kub.', 'For area the factor is squared, for volume it is cubed.', 'Bei Flächen wird der Faktor quadriert, bei Volumen hoch 3 genommen.'),
        alt: alt('Tabelë e faktorëve të kthimit për gjatësi, syprinë, vëllim dhe shpejtësi.', 'Table of conversion factors for length, area, volume and speed.', 'Tabelle der Umrechnungsfaktoren für Länge, Fläche, Volumen und Geschwindigkeit.'),
      }],
      answers: {
        examples: [[['72 / 3.6', 20]], [['2.5 * 10000', 25000]]],
        practice: [[['15 * 3.6', 54]], [['3200000 / 1000000', 3.2]], [['2.7 * 1000', 2700]]],
      },
      al: {
        title: 'Këmbimi i njësive',
        objectives: ['Të ktheni njësitë e syprinës dhe të vëllimit me faktorët e duhur.', 'Të ktheni njësitë e përbëra si km/h ↔ m/s dhe g/cm³ ↔ kg/m³.'],
        theory: 'Te gjatësia 1 m = 100 cm. Te syprina faktori ngrihet në katror: 1 m² = 10 000 cm²; te vëllimi në kub: 1 m³ = 1 000 000 cm³.\n\nNjësitë e përbëra i kthejmë pjesë-pjesë: 72 km/h = 72 000 m në 3 600 s = 20 m/s. Shkurt: km/h : 3,6 = m/s dhe m/s · 3,6 = km/h.\n\nDendësia: 1 g/cm³ = 1 000 kg/m³, pra 2,7 g/cm³ = 2 700 kg/m³.',
        keyPoints: ['1 m² = 10 000 cm², 1 m³ = 1 000 000 cm³', 'km/h : 3,6 = m/s', '1 g/cm³ = 1 000 kg/m³'],
        examples: [
          { example: 'Ktheni 72 km/h në m/s.', solution: '72 000 m : 3 600 s = 20 m/s (ose 72 : 3,6 = 20).' },
          { example: 'Ktheni 2,5 m² në cm².', solution: '2,5 · 10 000 = 25 000 cm².' },
        ],
        commonMistakes: [
          { mistake: '1 m² = 100 cm².', fix: 'Një katror 1 m × 1 m është 100 cm × 100 cm = 10 000 cm².' },
          { mistake: 'Nga km/h në m/s shumëzohet me 3,6.', fix: 'm/s është numër më i vogël: pjesëtohet me 3,6.' },
        ],
        practice: [
          { problem: 'Ktheni 15 m/s në km/h.', solution: '54 km/h', steps: ['m/s · 3,6.', '15 · 3,6 = 54 km/h.'] },
          { problem: 'Ktheni 3 200 000 cm³ në m³.', solution: '3,2 m³', steps: ['1 m³ = 1 000 000 cm³.', '3 200 000 : 1 000 000 = 3,2 m³.'] },
          { problem: 'Ktheni 2,7 g/cm³ në kg/m³.', solution: '2 700 kg/m³', steps: ['1 g/cm³ = 1 000 kg/m³.', '2,7 · 1 000 = 2 700 kg/m³.'] },
        ],
      },
      en: {
        title: 'Converting units',
        objectives: ['Convert units of area and volume with the right factors.', 'Convert compound units such as km/h ↔ m/s and g/cm³ ↔ kg/m³.'],
        theory: 'For length 1 m = 100 cm. For area the factor is squared: 1 m² = 10 000 cm²; for volume it is cubed: 1 m³ = 1 000 000 cm³.\n\nConvert compound units part by part: 72 km/h = 72 000 m in 3 600 s = 20 m/s. In short: km/h ÷ 3.6 = m/s and m/s · 3.6 = km/h.\n\nDensity: 1 g/cm³ = 1 000 kg/m³, so 2.7 g/cm³ = 2 700 kg/m³.',
        keyPoints: ['1 m² = 10 000 cm², 1 m³ = 1 000 000 cm³', 'km/h ÷ 3.6 = m/s', '1 g/cm³ = 1 000 kg/m³'],
        examples: [
          { example: 'Convert 72 km/h to m/s.', solution: '72 000 m ÷ 3 600 s = 20 m/s (or 72 ÷ 3.6 = 20).' },
          { example: 'Convert 2.5 m² to cm².', solution: '2.5 · 10 000 = 25 000 cm².' },
        ],
        commonMistakes: [
          { mistake: '1 m² = 100 cm².', fix: 'A 1 m × 1 m square is 100 cm × 100 cm = 10 000 cm².' },
          { mistake: 'From km/h to m/s you multiply by 3.6.', fix: 'The m/s number is smaller: divide by 3.6.' },
        ],
        practice: [
          { problem: 'Convert 15 m/s to km/h.', solution: '54 km/h', steps: ['m/s · 3.6.', '15 · 3.6 = 54 km/h.'] },
          { problem: 'Convert 3 200 000 cm³ to m³.', solution: '3.2 m³', steps: ['1 m³ = 1 000 000 cm³.', '3 200 000 ÷ 1 000 000 = 3.2 m³.'] },
          { problem: 'Convert 2.7 g/cm³ to kg/m³.', solution: '2 700 kg/m³', steps: ['1 g/cm³ = 1 000 kg/m³.', '2.7 · 1 000 = 2 700 kg/m³.'] },
        ],
      },
      de: {
        title: 'Einheiten umrechnen',
        objectives: ['Flächen- und Volumeneinheiten mit den richtigen Faktoren umrechnen.', 'Zusammengesetzte Einheiten wie km/h ↔ m/s und g/cm³ ↔ kg/m³ umrechnen.'],
        theory: 'Bei Längen gilt 1 m = 100 cm. Bei Flächen wird der Faktor quadriert: 1 m² = 10 000 cm²; bei Volumen hoch 3: 1 m³ = 1 000 000 cm³.\n\nZusammengesetzte Einheiten rechnet man teilweise um: 72 km/h = 72 000 m in 3 600 s = 20 m/s. Kurz: km/h : 3,6 = m/s und m/s · 3,6 = km/h.\n\nDichte: 1 g/cm³ = 1 000 kg/m³, also 2,7 g/cm³ = 2 700 kg/m³.',
        keyPoints: ['1 m² = 10 000 cm², 1 m³ = 1 000 000 cm³', 'km/h : 3,6 = m/s', '1 g/cm³ = 1 000 kg/m³'],
        examples: [
          { example: 'Rechnen Sie 72 km/h in m/s um.', solution: '72 000 m : 3 600 s = 20 m/s (oder 72 : 3,6 = 20).' },
          { example: 'Rechnen Sie 2,5 m² in cm² um.', solution: '2,5 · 10 000 = 25 000 cm².' },
        ],
        commonMistakes: [
          { mistake: '1 m² = 100 cm².', fix: 'Ein Quadrat 1 m × 1 m ist 100 cm × 100 cm = 10 000 cm².' },
          { mistake: 'Von km/h nach m/s wird mit 3,6 multipliziert.', fix: 'Der Wert in m/s ist kleiner: durch 3,6 teilen.' },
        ],
        practice: [
          { problem: 'Rechnen Sie 15 m/s in km/h um.', solution: '54 km/h', steps: ['m/s · 3,6.', '15 · 3,6 = 54 km/h.'] },
          { problem: 'Rechnen Sie 3 200 000 cm³ in m³ um.', solution: '3,2 m³', steps: ['1 m³ = 1 000 000 cm³.', '3 200 000 : 1 000 000 = 3,2 m³.'] },
          { problem: 'Rechnen Sie 2,7 g/cm³ in kg/m³ um.', solution: '2 700 kg/m³', steps: ['1 g/cm³ = 1 000 kg/m³.', '2,7 · 1 000 = 2 700 kg/m³.'] },
        ],
      },
    },
    // ───────── 3. Direct and inverse proportion
    {
      slug: 'g11-units-proportion-direct-inverse',
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 6, yMin: 0, yMax: 15 }, height: 220,
        functions: [{ expr: '3*x', domain: [0, 5], label: 'y = 3x' }, { expr: '12/x', domain: [0.85, 6], color: 'secondary', label: 'y = 12/x' }],
        points: [{ at: [2, 6], label: '(2, 6)' }],
        caption: alt('Përpjesëtim i drejtë: drejtëz nga origjina. I zhdrejtë: kur x dyfishohet, y përgjysmohet.', 'Direct proportion: a straight line through the origin. Inverse: when x doubles, y halves.', 'Proportional: Gerade durch den Ursprung. Antiproportional: Verdoppelt sich x, halbiert sich y.'),
        alt: alt('Grafikët e y = 3x dhe y = 12/x për x pozitiv.', 'The graphs of y = 3x and y = 12/x for positive x.', 'Die Graphen von y = 3x und y = 12/x für positive x.'),
      }],
      answers: {
        examples: [[['12 / 4 * 10', 30]], [['6 * 10 / 15', 4]]],
        practice: [[['18 / 9 * 25', 50]], [['24 / 6', 4]], [['12 / 5 * 8', 19.2]]],
      },
      al: {
        title: 'Përpjesëtimi i drejtë dhe i zhdrejtë',
        objectives: ['Të shkruani dhe të përdorni y = kx, y = kx² dhe y = k/x.', 'Të dalloni përpjesëtimin e drejtë nga i zhdrejti në probleme.'],
        theory: 'Përpjesëtim i drejtë (y ∝ x): y = kx; kur x dyfishohet, edhe y dyfishohet. Grafiku është drejtëz nga origjina.\nPërpjesëtim i zhdrejtë (y ∝ 1/x): y = k/x; kur x dyfishohet, y përgjysmohet; x · y = k është konstant.\n\nMund të ketë edhe y ∝ x² (y = kx²) ose y ∝ 1/x².\n\nHapat: shkruani formulën me k, gjeni k nga të dhënat, pastaj llogaritni. P.sh. 6 punëtorë për 10 ditë: punëtorë · ditë = 60 (i zhdrejtë), pra 15 punëtorë → 4 ditë.',
        keyPoints: ['E drejtë: y = kx', 'E zhdrejtë: y = k/x, x · y = k', 'Gjej k së pari'],
        examples: [
          { example: 'y ∝ x dhe y = 12 kur x = 4. Gjeni y kur x = 10.', solution: 'k = 12 : 4 = 3; y = 3 · 10 = 30.' },
          { example: '6 punëtorë e kryejnë një punë për 10 ditë. Sa ditë duhen për 15 punëtorë?', solution: 'I zhdrejtë: 6 · 10 = 60; 60 : 15 = 4 ditë.' },
        ],
        commonMistakes: [
          { mistake: 'Me më shumë punëtorë llogariten më shumë ditë (përpjesëtim i drejtë).', fix: 'Më shumë punëtorë → më pak ditë: përpjesëtim i zhdrejtë.' },
          { mistake: 'Te y ∝ x², k llogaritet y : x.', fix: 'k = y : x²: 18 : 9 = 2.' },
        ],
        practice: [
          { problem: 'y ∝ x² dhe y = 18 kur x = 3. Gjeni y kur x = 5.', solution: '50', steps: ['k = 18 : 9 = 2.', 'y = 2 · 25 = 50.'] },
          { problem: 'y ∝ 1/x dhe y = 8 kur x = 3. Gjeni y kur x = 6.', solution: '4', steps: ['k = 8 · 3 = 24.', 'y = 24 : 6 = 4.'] },
          { problem: '5 kg mollë kushtojnë 12 €. Sa kushtojnë 8 kg?', solution: '19,20 €', steps: ['Çmimi për kg: 12 : 5 = 2,40 €.', '8 · 2,40 = 19,20 €.'] },
        ],
      },
      en: {
        title: 'Direct and inverse proportion',
        objectives: ['Write and use y = kx, y = kx² and y = k/x.', 'Tell direct proportion from inverse proportion in problems.'],
        theory: 'Direct proportion (y ∝ x): y = kx; when x doubles, y doubles. The graph is a straight line through the origin.\nInverse proportion (y ∝ 1/x): y = k/x; when x doubles, y halves; x · y = k is constant.\n\nThere can also be y ∝ x² (y = kx²) or y ∝ 1/x².\n\nSteps: write the formula with k, find k from the data, then calculate. E.g. 6 workers take 10 days: workers · days = 60 (inverse), so 15 workers → 4 days.',
        keyPoints: ['Direct: y = kx', 'Inverse: y = k/x, x · y = k', 'Find k first'],
        examples: [
          { example: 'y ∝ x and y = 12 when x = 4. Find y when x = 10.', solution: 'k = 12 ÷ 4 = 3; y = 3 · 10 = 30.' },
          { example: '6 workers finish a job in 10 days. How many days do 15 workers need?', solution: 'Inverse: 6 · 10 = 60; 60 ÷ 15 = 4 days.' },
        ],
        commonMistakes: [
          { mistake: 'More workers are given more days (direct proportion).', fix: 'More workers → fewer days: inverse proportion.' },
          { mistake: 'For y ∝ x², k is worked out as y ÷ x.', fix: 'k = y ÷ x²: 18 ÷ 9 = 2.' },
        ],
        practice: [
          { problem: 'y ∝ x² and y = 18 when x = 3. Find y when x = 5.', solution: '50', steps: ['k = 18 ÷ 9 = 2.', 'y = 2 · 25 = 50.'] },
          { problem: 'y ∝ 1/x and y = 8 when x = 3. Find y when x = 6.', solution: '4', steps: ['k = 8 · 3 = 24.', 'y = 24 ÷ 6 = 4.'] },
          { problem: '5 kg of apples cost €12. How much do 8 kg cost?', solution: '€19.20', steps: ['Price per kg: 12 ÷ 5 = €2.40.', '8 · 2.40 = €19.20.'] },
        ],
      },
      de: {
        title: 'Proportional und antiproportional',
        objectives: ['y = kx, y = kx² und y = k/x aufstellen und anwenden.', 'In Aufgaben proportionale und antiproportionale Zuordnungen unterscheiden.'],
        theory: 'Proportional (y ∼ x): y = kx; verdoppelt sich x, verdoppelt sich y. Der Graph ist eine Ursprungsgerade.\nAntiproportional (y ∼ 1/x): y = k/x; verdoppelt sich x, halbiert sich y; x · y = k ist konstant.\n\nEs gibt auch y ∼ x² (y = kx²) oder y ∼ 1/x².\n\nVorgehen: Formel mit k aufstellen, k aus den Daten bestimmen, dann rechnen. Z. B. 6 Arbeiter brauchen 10 Tage: Arbeiter · Tage = 60 (antiproportional), also 15 Arbeiter → 4 Tage.',
        keyPoints: ['Proportional: y = kx', 'Antiproportional: y = k/x, x · y = k', 'Zuerst k bestimmen'],
        examples: [
          { example: 'y ∼ x und y = 12 für x = 4. Bestimmen Sie y für x = 10.', solution: 'k = 12 : 4 = 3; y = 3 · 10 = 30.' },
          { example: '6 Arbeiter erledigen einen Auftrag in 10 Tagen. Wie viele Tage brauchen 15 Arbeiter?', solution: 'Antiproportional: 6 · 10 = 60; 60 : 15 = 4 Tage.' },
        ],
        commonMistakes: [
          { mistake: 'Mehr Arbeiter bekommen mehr Tage (proportional gerechnet).', fix: 'Mehr Arbeiter → weniger Tage: antiproportional.' },
          { mistake: 'Bei y ∼ x² wird k als y : x berechnet.', fix: 'k = y : x²: 18 : 9 = 2.' },
        ],
        practice: [
          { problem: 'y ∼ x² und y = 18 für x = 3. Bestimmen Sie y für x = 5.', solution: '50', steps: ['k = 18 : 9 = 2.', 'y = 2 · 25 = 50.'] },
          { problem: 'y ∼ 1/x und y = 8 für x = 3. Bestimmen Sie y für x = 6.', solution: '4', steps: ['k = 8 · 3 = 24.', 'y = 24 : 6 = 4.'] },
          { problem: '5 kg Äpfel kosten 12 €. Was kosten 8 kg?', solution: '19,20 €', steps: ['Preis pro kg: 12 : 5 = 2,40 €.', '8 · 2,40 = 19,20 €.'] },
        ],
      },
    },
    // ───────── 4. Rates of change
    {
      slug: 'g11-units-proportion-rates-of-change',
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 10, yMin: 0, yMax: 450 }, height: 210,
        functions: [{ expr: '200 + 25*x', domain: [0, 8], label: alt('25 l/min', '25 l/min', '25 l/min') }],
        points: [{ at: [0, 200], label: '(0, 200)' }, { at: [8, 400], label: '(8, 400)' }],
        caption: alt('Vëllimi (l) sipas kohës (min): nga 200 l në 400 l për 8 min → 25 l/min.', 'Volume (l) against time (min): from 200 l to 400 l in 8 min → 25 l/min.', 'Volumen (l) über der Zeit (min): von 200 l auf 400 l in 8 min → 25 l/min.'),
        alt: alt('Drejtëz nga (0, 200) te (8, 400) për mbushjen e një depozite.', 'A straight line from (0, 200) to (8, 400) for a filling tank.', 'Eine Gerade von (0 | 200) nach (8 | 400) für einen sich füllenden Tank.'),
      }],
      answers: {
        examples: [[['(400 - 200) / 8', 25]], [['(40 - 90) / 20', -2.5]]],
        practice: [[['300 / 12', 25]], [['(6200 - 5000) / 4', 300]], [['6.5 * 340 / 100', 22.1]]],
      },
      al: {
        title: 'Normat e ndryshimit',
        objectives: ['Të llogaritni normën mesatare të ndryshimit me njësitë e duhura.', 'Të përdorni normën për të gjetur kohën ose sasinë.'],
        theory: 'Norma e ndryshimit tregon sa ndryshon një madhësi për njësi kohe (ose për njësi të një madhësie tjetër): norma = ndryshimi : koha.\n\nDepozita nga 200 l në 400 l për 8 min: (400 − 200) : 8 = 25 l/min. Në grafik kjo është pjerrësia e drejtëzës.\n\nKur madhësia zvogëlohet, norma është negative: çaji nga 90 °C në 40 °C për 20 min → −2,5 °C/min. Njësia gjithmonë: njësia e madhësisë / njësia e kohës.',
        keyPoints: ['Norma = ndryshimi : koha', 'Zvogëlim → normë negative', 'Njësia: p.sh. l/min, °C/min'],
        examples: [
          { example: 'Një depozitë mbushet nga 200 l në 400 l për 8 min. Sa është norma?', solution: '(400 − 200) : 8 = 25 l/min.' },
          { example: 'Çaji ftohet nga 90 °C në 40 °C për 20 min. Sa është norma mesatare?', solution: '(40 − 90) : 20 = −2,5 °C/min.' },
        ],
        commonMistakes: [
          { mistake: 'Norma llogaritet 400 : 8 = 50 l/min.', fix: 'Përdoret ndryshimi, jo vlera përfundimtare: 400 − 200.' },
          { mistake: 'Kur temperatura bie, norma shkruhet pozitive.', fix: 'Ndryshimi 40 − 90 është negativ: −2,5 °C/min.' },
        ],
        practice: [
          { problem: 'Një rubinet jep 12 l/min. Sa minuta duhen për 300 l?', solution: '25 min', steps: ['koha = sasia : norma.', '300 : 12 = 25 min.'] },
          { problem: 'Një qytet u rrit nga 5 000 në 6 200 banorë për 4 vjet. Sa është rritja mesatare në vit?', solution: '300 banorë/vit', steps: ['6 200 − 5 000 = 1 200.', '1 200 : 4 = 300 në vit.'] },
          { problem: 'Një makinë harxhon 6,5 l për 100 km. Sa litra harxhon për 340 km?', solution: '22,1 l', steps: ['340 km = 3,4 · 100 km.', '6,5 · 3,4 = 22,1 l.'] },
        ],
      },
      en: {
        title: 'Rates of change',
        objectives: ['Work out an average rate of change with the right units.', 'Use a rate to find a time or an amount.'],
        theory: 'A rate of change shows how much a quantity changes per unit of time (or per unit of another quantity): rate = change ÷ time.\n\nA tank from 200 l to 400 l in 8 min: (400 − 200) ÷ 8 = 25 l/min. On a graph this is the gradient of the line.\n\nWhen the quantity goes down, the rate is negative: tea cooling from 90 °C to 40 °C in 20 min → −2.5 °C/min. The unit is always: unit of the quantity / unit of time.',
        keyPoints: ['Rate = change ÷ time', 'Decrease → negative rate', 'Unit: e.g. l/min, °C/min'],
        examples: [
          { example: 'A tank fills from 200 l to 400 l in 8 min. What is the rate?', solution: '(400 − 200) ÷ 8 = 25 l/min.' },
          { example: 'Tea cools from 90 °C to 40 °C in 20 min. What is the average rate?', solution: '(40 − 90) ÷ 20 = −2.5 °C/min.' },
        ],
        commonMistakes: [
          { mistake: 'The rate is worked out as 400 ÷ 8 = 50 l/min.', fix: 'Use the change, not the final value: 400 − 200.' },
          { mistake: 'When the temperature falls, the rate is written as positive.', fix: 'The change 40 − 90 is negative: −2.5 °C/min.' },
        ],
        practice: [
          { problem: 'A tap delivers 12 l/min. How many minutes for 300 l?', solution: '25 min', steps: ['time = amount ÷ rate.', '300 ÷ 12 = 25 min.'] },
          { problem: 'A town grew from 5 000 to 6 200 people in 4 years. What is the average growth per year?', solution: '300 people/year', steps: ['6 200 − 5 000 = 1 200.', '1 200 ÷ 4 = 300 per year.'] },
          { problem: 'A car uses 6.5 l per 100 km. How many litres does it use for 340 km?', solution: '22.1 l', steps: ['340 km = 3.4 · 100 km.', '6.5 · 3.4 = 22.1 l.'] },
        ],
      },
      de: {
        title: 'Änderungsraten',
        objectives: ['Eine mittlere Änderungsrate mit der richtigen Einheit berechnen.', 'Mit einer Rate eine Zeit oder eine Menge bestimmen.'],
        theory: 'Eine Änderungsrate gibt an, wie stark sich eine Größe pro Zeiteinheit (oder pro Einheit einer anderen Größe) ändert: Rate = Änderung : Zeit.\n\nEin Tank von 200 l auf 400 l in 8 min: (400 − 200) : 8 = 25 l/min. Im Graphen ist das die Steigung der Geraden.\n\nNimmt die Größe ab, ist die Rate negativ: Tee kühlt in 20 min von 90 °C auf 40 °C ab → −2,5 °C/min. Die Einheit ist immer: Einheit der Größe / Zeiteinheit.',
        keyPoints: ['Rate = Änderung : Zeit', 'Abnahme → negative Rate', 'Einheit: z. B. l/min, °C/min'],
        examples: [
          { example: 'Ein Tank füllt sich in 8 min von 200 l auf 400 l. Wie groß ist die Rate?', solution: '(400 − 200) : 8 = 25 l/min.' },
          { example: 'Tee kühlt in 20 min von 90 °C auf 40 °C ab. Wie groß ist die mittlere Rate?', solution: '(40 − 90) : 20 = −2,5 °C/min.' },
        ],
        commonMistakes: [
          { mistake: 'Die Rate wird als 400 : 8 = 50 l/min berechnet.', fix: 'Die Änderung verwenden, nicht den Endwert: 400 − 200.' },
          { mistake: 'Sinkt die Temperatur, wird die Rate positiv angegeben.', fix: 'Die Änderung 40 − 90 ist negativ: −2,5 °C/min.' },
        ],
        practice: [
          { problem: 'Ein Wasserhahn liefert 12 l/min. Wie viele Minuten dauert es für 300 l?', solution: '25 min', steps: ['Zeit = Menge : Rate.', '300 : 12 = 25 min.'] },
          { problem: 'Eine Stadt wuchs in 4 Jahren von 5 000 auf 6 200 Einwohner. Wie groß ist das mittlere Wachstum pro Jahr?', solution: '300 Einwohner/Jahr', steps: ['6 200 − 5 000 = 1 200.', '1 200 : 4 = 300 pro Jahr.'] },
          { problem: 'Ein Auto verbraucht 6,5 l auf 100 km. Wie viele Liter braucht es für 340 km?', solution: '22,1 l', steps: ['340 km = 3,4 · 100 km.', '6,5 · 3,4 = 22,1 l.'] },
        ],
      },
    },
    // ───────── 5. Growth and decay
    {
      slug: 'g11-units-proportion-growth-decay',
      visuals: [{
        type: 'barChart', max: 20000, step: 5000, showValues: true,
        bars: [
          { label: alt('fillimi', 'start', 'Start'), value: 20000 },
          { label: alt('viti 1', 'year 1', 'Jahr 1'), value: 17000 },
          { label: alt('viti 2', 'year 2', 'Jahr 2'), value: 14450 },
          { label: alt('viti 3', 'year 3', 'Jahr 3'), value: 12283, color: 'muted' },
        ],
        caption: alt('Vlera (€) e një makine që humb 15% në vit: çdo vit shumëzohet me 0,85.', 'Value (€) of a car that loses 15% a year: each year it is multiplied by 0.85.', 'Wert (€) eines Autos, das jährlich 15 % verliert: Jedes Jahr wird mit 0,85 multipliziert.'),
        alt: alt('Shtylla 20 000, 17 000, 14 450 dhe 12 283 euro për katër vite.', 'Bars of 20 000, 17 000, 14 450 and 12 283 euros over four years.', 'Säulen 20 000, 17 000, 14 450 und 12 283 Euro über vier Jahre.'),
      }],
      answers: {
        examples: [[['20000 * 0.85^2', 14450]], [['1000 * 1.04^3', 1124.86, 0.005]]],
        practice: [[['1000 + 3 * 40', 1120]], [['500 * 2^5', 16000]], [['8000 * 0.9^3', 5832]]],
      },
      al: {
        title: 'Rritja dhe zvogëlimi',
        objectives: ['Të llogaritni rritjen dhe zvogëlimin e përbërë me shumëzuesin.', 'Ta dalloni interesin e thjeshtë nga ai i përbërë.'],
        theory: 'Kur një vlerë ndryshon me të njëjtën përqindje çdo periudhë, përdorim shumëzuesin: vlera pas n periudhash = vlera fillestare · shumëzuesiⁿ.\n• Rritje p%: shumëzuesi 1 + p/100 (4% → 1,04).\n• Zvogëlim p%: shumëzuesi 1 − p/100 (15% → 0,85).\n\nMakina 20 000 € që humb 15% në vit: pas 2 vjetësh 20 000 · 0,85² = 14 450 €.\n\nInteresi i thjeshtë llogaritet gjithmonë mbi shumën fillestare (1 000 € me 4% për 3 vjet: 1 000 + 3 · 40 = 1 120 €); i përbëri llogaritet mbi shumën e re (1 000 · 1,04³ ≈ 1 124,86 €).',
        keyPoints: ['Vlera = fillestarja · shumëzuesiⁿ', 'Rritje: 1 + p/100; zvogëlim: 1 − p/100', 'I përbërë ≠ i thjeshtë'],
        examples: [
          { example: 'Një makinë humb 15% të vlerës çdo vit. Nga 20 000 €, sa vlen pas 2 vjetësh?', solution: '20 000 · 0,85² = 14 450 €.' },
          { example: '1 000 € depozitohen me interes të përbërë 4% në vit. Sa bëhen pas 3 vjetësh?', solution: '1 000 · 1,04³ ≈ 1 124,86 €.' },
        ],
        commonMistakes: [
          { mistake: 'Te zvogëlimi 15% shumëzohet me 0,15.', fix: '0,15 është humbja; mbetet 0,85 e vlerës.' },
          { mistake: 'Interesi i përbërë llogaritet si i thjeshtë: 1 000 + 3 · 40.', fix: 'Çdo vit përqindja llogaritet mbi shumën e re: 1,04³.' },
        ],
        practice: [
          { problem: '1 000 € me interes të thjeshtë 4% në vit. Sa bëhen pas 3 vjetësh?', solution: '1 120 €', steps: ['Interesi vjetor: 40 €.', '1 000 + 3 · 40 = 1 120 €.'] },
          { problem: 'Bakteret dyfishohen çdo orë. Nga 500, sa janë pas 5 orësh?', solution: '16 000', steps: ['Shumëzuesi 2.', '500 · 2⁵ = 500 · 32 = 16 000.'] },
          { problem: 'Një pajisje 8 000 € humb 10% në vit. Sa vlen pas 3 vjetësh?', solution: '5 832 €', steps: ['Shumëzuesi 0,9.', '8 000 · 0,9³ = 5 832 €.'] },
        ],
      },
      en: {
        title: 'Growth and decay',
        objectives: ['Work out compound growth and decay with a multiplier.', 'Tell simple interest from compound interest.'],
        theory: 'When a value changes by the same percentage each period, use the multiplier: value after n periods = starting value · multiplierⁿ.\n• Growth of p%: multiplier 1 + p/100 (4% → 1.04).\n• Decay of p%: multiplier 1 − p/100 (15% → 0.85).\n\nA €20 000 car losing 15% a year: after 2 years 20 000 · 0.85² = €14 450.\n\nSimple interest is always worked out on the starting amount (€1 000 at 4% for 3 years: 1 000 + 3 · 40 = €1 120); compound interest is worked out on the new amount (1 000 · 1.04³ ≈ €1 124.86).',
        keyPoints: ['Value = start · multiplierⁿ', 'Growth: 1 + p/100; decay: 1 − p/100', 'Compound ≠ simple'],
        examples: [
          { example: 'A car loses 15% of its value each year. From €20 000, what is it worth after 2 years?', solution: '20 000 · 0.85² = €14 450.' },
          { example: '€1 000 is invested at 4% compound interest a year. How much is it after 3 years?', solution: '1 000 · 1.04³ ≈ €1 124.86.' },
        ],
        commonMistakes: [
          { mistake: 'For a 15% decrease, it is multiplied by 0.15.', fix: '0.15 is the loss; 0.85 of the value is left.' },
          { mistake: 'Compound interest is worked out like simple interest: 1 000 + 3 · 40.', fix: 'Each year the percentage is of the new amount: 1.04³.' },
        ],
        practice: [
          { problem: '€1 000 at 4% simple interest a year. How much after 3 years?', solution: '€1 120', steps: ['Interest per year: €40.', '1 000 + 3 · 40 = €1 120.'] },
          { problem: 'Bacteria double every hour. Starting from 500, how many are there after 5 hours?', solution: '16 000', steps: ['Multiplier 2.', '500 · 2⁵ = 500 · 32 = 16 000.'] },
          { problem: 'A €8 000 machine loses 10% a year. What is it worth after 3 years?', solution: '€5 832', steps: ['Multiplier 0.9.', '8 000 · 0.9³ = €5 832.'] },
        ],
      },
      de: {
        title: 'Wachstum und Abnahme',
        objectives: ['Exponentielles Wachstum und exponentielle Abnahme mit dem Faktor berechnen.', 'Einfache Verzinsung und Zinseszins unterscheiden.'],
        theory: 'Ändert sich ein Wert in jeder Periode um denselben Prozentsatz, nimmt man den Faktor: Wert nach n Perioden = Anfangswert · Faktorⁿ.\n• Zunahme um p %: Faktor 1 + p/100 (4 % → 1,04).\n• Abnahme um p %: Faktor 1 − p/100 (15 % → 0,85).\n\nEin Auto für 20 000 €, das jährlich 15 % verliert: nach 2 Jahren 20 000 · 0,85² = 14 450 €.\n\nEinfache Zinsen werden immer vom Anfangskapital berechnet (1 000 € zu 4 % für 3 Jahre: 1 000 + 3 · 40 = 1 120 €); Zinseszinsen vom neuen Kapital (1 000 · 1,04³ ≈ 1 124,86 €).',
        keyPoints: ['Wert = Anfangswert · Faktorⁿ', 'Zunahme: 1 + p/100; Abnahme: 1 − p/100', 'Zinseszins ≠ einfache Zinsen'],
        examples: [
          { example: 'Ein Auto verliert jährlich 15 % an Wert. Wie viel ist es nach 2 Jahren wert, wenn es 20 000 € gekostet hat?', solution: '20 000 · 0,85² = 14 450 €.' },
          { example: '1 000 € werden mit 4 % Zinseszins pro Jahr angelegt. Wie viel sind es nach 3 Jahren?', solution: '1 000 · 1,04³ ≈ 1 124,86 €.' },
        ],
        commonMistakes: [
          { mistake: 'Bei 15 % Abnahme wird mit 0,15 multipliziert.', fix: '0,15 ist der Verlust; es bleiben 0,85 des Werts.' },
          { mistake: 'Zinseszins wird wie einfache Zinsen gerechnet: 1 000 + 3 · 40.', fix: 'Jedes Jahr bezieht sich der Prozentsatz auf das neue Kapital: 1,04³.' },
        ],
        practice: [
          { problem: '1 000 € zu 4 % einfachen Zinsen pro Jahr. Wie viel sind es nach 3 Jahren?', solution: '1 120 €', steps: ['Zinsen pro Jahr: 40 €.', '1 000 + 3 · 40 = 1 120 €.'] },
          { problem: 'Bakterien verdoppeln sich jede Stunde. Wie viele sind es nach 5 Stunden, wenn es anfangs 500 sind?', solution: '16 000', steps: ['Faktor 2.', '500 · 2⁵ = 500 · 32 = 16 000.'] },
          { problem: 'Eine Maschine für 8 000 € verliert jährlich 10 %. Wie viel ist sie nach 3 Jahren wert?', solution: '5 832 €', steps: ['Faktor 0,9.', '8 000 · 0,9³ = 5 832 €.'] },
        ],
      },
    },
  ],
};
