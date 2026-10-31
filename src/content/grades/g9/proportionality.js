// Grade 9 · Theme 5: Proportionality (January–March)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g9-proportionality',
  i18n: {
    al: { title: 'Proporcionaliteti', description: 'Përpjesëtimet, ndarja dhe përzierja, varësia e drejtë dhe e zhdrejtë, përqindja dhe promili, interesi bankar.' },
    en: { title: 'Proportionality', description: 'Proportions, sharing and mixing, direct and inverse proportion, percentages and per mille, interest.' },
    de: { title: 'Proportionalität', description: 'Verhältnisgleichungen, Verteilen und Mischen, proportionale und antiproportionale Zuordnungen, Prozent und Promille, Zinsen.' },
  },
  lessons: [
    // ───────── 1. Proportions
    {
      slug: 'g9-proportionality-proportions',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Përpjesëtimi', 'Proportion', 'Verhältnisgleichung'), cells: ['x : 12 = 5 : 4', '(2x − 1) : 3 = (x + 2) : 2'] },
          { head: alt('Prodhimi kryq', 'Cross product', 'Über Kreuz'), cells: ['4x = 60', '2(2x − 1) = 3(x + 2)'] },
          { head: alt('Zgjidhja', 'Solution', 'Lösung'), cells: ['x = 15', 'x = 8'] },
        ],
        alt: alt('Dy përpjesëtime të zgjidhura me prodhimin kryq: x = 15 dhe x = 8.', 'Two proportions solved by cross-multiplying: x = 15 and x = 8.', 'Zwei Verhältnisgleichungen, über Kreuz gelöst: x = 15 und x = 8.'),
      }],
      answers: {
        examples: [[['12 * 5 / 4', 15]], [['(6 + 2) / (4 - 3)', 8]]],
        practice: [[['3 * 21 / 9', 7]], [['2.5 * 8 / 4', 5]], [['(2 + 3) / (3 - 2)', 5]]],
      },
      al: {
        title: 'Përpjesëtimet',
        objectives: ['Të zgjidhni përpjesëtime me shprehje.', 'Të përdorni vetinë a · d = b · c.'],
        theory: 'Në përpjesëtimin a : b = c : d prodhimi i anëtarëve të skajshëm është sa prodhimi i të mesmëve: a · d = b · c. Kjo veti e kthen përpjesëtimin në ekuacion.\n\nKur anëtarët janë shprehje, i vendosim në kllapa: (2x − 1) : 3 = (x + 2) : 2 → 2(2x − 1) = 3(x + 2) → 4x − 2 = 3x + 6 → x = 8.\n\nKontroll: zëvendësoni zgjidhjen dhe krahasoni raportet: 15 : 3 = 10 : 2 = 5 ✓.',
        keyPoints: ['a : b = c : d ⟺ ad = bc', 'Shprehjet në kllapa', 'Prova me raportet'],
        examples: [
          { example: 'Zgjidhni x : 12 = 5 : 4.', solution: '4x = 60 → x = 15.' },
          { example: 'Zgjidhni (2x − 1) : 3 = (x + 2) : 2.', solution: '2(2x − 1) = 3(x + 2) → 4x − 2 = 3x + 6 → x = 8.' },
        ],
        commonMistakes: [
          { mistake: '(2x − 1) : 3 = (x + 2) : 2 → 4x − 1 = 3x + 2', fix: 'Shumëzoni të gjithë shprehjen: 2(2x − 1) = 4x − 2.' },
        ],
        practice: [
          { problem: 'Zgjidhni 3 : x = 9 : 21.', solution: 'x = 7', steps: ['9x = 63.', 'x = 7.'] },
          { problem: 'Zgjidhni 2,5 : 4 = x : 8.', solution: 'x = 5', steps: ['4x = 20.', 'x = 5.'] },
          { problem: 'Zgjidhni (x + 1) : (x − 1) = 3 : 2.', solution: 'x = 5', steps: ['2(x + 1) = 3(x − 1) → 2x + 2 = 3x − 3.', 'x = 5.'] },
        ],
      },
      en: {
        title: 'Proportions',
        objectives: ['Solve proportions that contain expressions.', 'Use the property a · d = b · c.'],
        theory: 'In the proportion a : b = c : d the product of the outer terms equals the product of the inner terms: a · d = b · c. This turns a proportion into an equation.\n\nWhen the terms are expressions, put them in brackets: (2x − 1) : 3 = (x + 2) : 2 → 2(2x − 1) = 3(x + 2) → 4x − 2 = 3x + 6 → x = 8.\n\nCheck: substitute the solution and compare the ratios: 15 : 3 = 10 : 2 = 5 ✓.',
        keyPoints: ['a : b = c : d ⟺ ad = bc', 'Expressions in brackets', 'Check with the ratios'],
        examples: [
          { example: 'Solve x : 12 = 5 : 4.', solution: '4x = 60 → x = 15.' },
          { example: 'Solve (2x − 1) : 3 = (x + 2) : 2.', solution: '2(2x − 1) = 3(x + 2) → 4x − 2 = 3x + 6 → x = 8.' },
        ],
        commonMistakes: [
          { mistake: '(2x − 1) : 3 = (x + 2) : 2 → 4x − 1 = 3x + 2', fix: 'Multiply the whole expression: 2(2x − 1) = 4x − 2.' },
        ],
        practice: [
          { problem: 'Solve 3 : x = 9 : 21.', solution: 'x = 7', steps: ['9x = 63.', 'x = 7.'] },
          { problem: 'Solve 2.5 : 4 = x : 8.', solution: 'x = 5', steps: ['4x = 20.', 'x = 5.'] },
          { problem: 'Solve (x + 1) : (x − 1) = 3 : 2.', solution: 'x = 5', steps: ['2(x + 1) = 3(x − 1) → 2x + 2 = 3x − 3.', 'x = 5.'] },
        ],
      },
      de: {
        title: 'Verhältnisgleichungen',
        objectives: ['Verhältnisgleichungen mit Termen lösen.', 'Die Eigenschaft a · d = b · c nutzen.'],
        theory: 'In der Verhältnisgleichung a : b = c : d ist das Produkt der Außenglieder gleich dem Produkt der Innenglieder: a · d = b · c. So wird aus der Verhältnisgleichung eine Gleichung.\n\nSind die Glieder Terme, setzt man Klammern: (2x − 1) : 3 = (x + 2) : 2 → 2(2x − 1) = 3(x + 2) → 4x − 2 = 3x + 6 → x = 8.\n\nProbe: Lösung einsetzen und Verhältnisse vergleichen: 15 : 3 = 10 : 2 = 5 ✓.',
        keyPoints: ['a : b = c : d ⟺ ad = bc', 'Terme in Klammern', 'Probe mit den Verhältnissen'],
        examples: [
          { example: 'Lösen Sie x : 12 = 5 : 4.', solution: '4x = 60 → x = 15.' },
          { example: 'Lösen Sie (2x − 1) : 3 = (x + 2) : 2.', solution: '2(2x − 1) = 3(x + 2) → 4x − 2 = 3x + 6 → x = 8.' },
        ],
        commonMistakes: [
          { mistake: '(2x − 1) : 3 = (x + 2) : 2 → 4x − 1 = 3x + 2', fix: 'Den ganzen Term multiplizieren: 2(2x − 1) = 4x − 2.' },
        ],
        practice: [
          { problem: 'Lösen Sie 3 : x = 9 : 21.', solution: 'x = 7', steps: ['9x = 63.', 'x = 7.'] },
          { problem: 'Lösen Sie 2,5 : 4 = x : 8.', solution: 'x = 5', steps: ['4x = 20.', 'x = 5.'] },
          { problem: 'Lösen Sie (x + 1) : (x − 1) = 3 : 2.', solution: 'x = 5', steps: ['2(x + 1) = 3(x − 1) → 2x + 2 = 3x − 3.', 'x = 5.'] },
        ],
      },
    },

    // ───────── 2. Sharing and mixing
    {
      slug: 'g9-proportionality-dividing-mixing',
      visuals: [{
        type: 'barChart', max: 200, step: 40, multiColor: true, yLabel: '€',
        bars: [{ label: alt('2 pjesë', '2 parts', '2 Teile'), value: 80 }, { label: alt('3 pjesë', '3 parts', '3 Teile'), value: 120 }, { label: alt('4 pjesë', '4 parts', '4 Teile'), value: 160 }],
        caption: alt('360 € në raportin 2 : 3 : 4: 9 pjesë, 1 pjesë = 40 €.', '€360 in the ratio 2 : 3 : 4: 9 parts, 1 part = €40.', '360 € im Verhältnis 2 : 3 : 4: 9 Teile, 1 Teil = 40 €.'),
        alt: alt('Shtylla 80 €, 120 € dhe 160 € për pjesët 2, 3 dhe 4.', 'Bars of €80, €120 and €160 for the parts 2, 3 and 4.', 'Säulen 80 €, 120 € und 160 € für die Teile 2, 3 und 4.'),
      }],
      answers: {
        examples: [[['360 / 9 * 2', 80], ['360 / 9 * 3', 120], ['360 / 9 * 4', 160]], [['(3*4 + 2*9) / 5', 6]]],
        practice: [[['540 / 9 * 1', 60], ['540 / 9 * 3', 180], ['540 / 9 * 5', 300]], [['(4*20 + 6*50) / 10', 38]], [['(8 - 6) / (6 - 5)', 2]]],
      },
      al: {
        title: 'Ndarja dhe përzierja',
        objectives: ['Të ndani një sasi në raport me tre pjesë.', 'Të llogaritni çmimin ose përqendrimin e një përzierjeje.'],
        theory: 'Ndarja në raportin a : b : c: mbledhim pjesët, gjejmë vlerën e një pjese dhe e shumëzojmë me secilin anëtar. 360 € në 2 : 3 : 4 → 9 pjesë, 40 € për pjesë → 80 €, 120 €, 160 €.\n\nPërzierja: çmimi (ose përqendrimi) i përzierjes është mesatarja e ponderuar: (sasia₁ · çmimi₁ + sasia₂ · çmimi₂) : (sasia₁ + sasia₂). 3 kg me 4 €/kg dhe 2 kg me 9 €/kg → (12 + 18) : 5 = 6 €/kg.\n\nPër të marrë një çmim të caktuar nga dy lloje, raporti i sasive është i kundërt me largësitë nga çmimi i kërkuar: kafe 5 € dhe 8 € për 6 € → (8 − 6) : (6 − 5) = 2 : 1.',
        keyPoints: ['Ndarja: shuma : (a + b + c), pastaj × secilin', 'Përzierja: Σ(sasi · çmim) : Σ sasi', 'Raporti i përzierjes: largësitë e kundërta'],
        examples: [
          { example: 'Ndani 360 € në raportin 2 : 3 : 4.', solution: '360 : 9 = 40; 80 €, 120 €, 160 €.' },
          { example: 'Përzihen 3 kg kafe me 4 €/kg dhe 2 kg me 9 €/kg. Sa kushton 1 kg përzierje?', solution: '(3 · 4 + 2 · 9) : 5 = 30 : 5 = 6 €/kg.' },
        ],
        commonMistakes: [
          { mistake: 'Çmimi i përzierjes = (4 + 9) : 2 = 6,5 €', fix: 'Sasitë janë të ndryshme; llogaritet mesatarja e ponderuar: 6 €.' },
        ],
        practice: [
          { problem: 'Ndani 540 në raportin 1 : 3 : 5.', solution: '60, 180, 300', steps: ['1 + 3 + 5 = 9; 540 : 9 = 60.', '60, 180, 300.'] },
          { problem: 'Përzihen 4 l lëng me 20% frut dhe 6 l me 50%. Sa përqind frut ka përzierja?', solution: '38%', steps: ['(4 · 20 + 6 · 50) : 10.', '= 380 : 10 = 38%.'] },
          { problem: 'Në çfarë raporti përzihen kafe 5 €/kg dhe 8 €/kg për të marrë 6 €/kg?', solution: '2 : 1', steps: ['(8 − 6) : (6 − 5).', '= 2 : 1.'] },
        ],
      },
      en: {
        title: 'Sharing and mixing',
        objectives: ['Share an amount in a three-part ratio.', 'Work out the price or concentration of a mixture.'],
        theory: 'Sharing in the ratio a : b : c: add the parts, find the value of one part and multiply by each term. €360 in 2 : 3 : 4 → 9 parts, €40 per part → €80, €120, €160.\n\nMixing: the price (or concentration) of a mixture is a weighted mean: (amount₁ · price₁ + amount₂ · price₂) ÷ (amount₁ + amount₂). 3 kg at €4/kg and 2 kg at €9/kg → (12 + 18) ÷ 5 = €6/kg.\n\nTo get a given price from two kinds, the ratio of amounts is the reverse of the distances from the target price: coffee at €5 and €8 for €6 → (8 − 6) : (6 − 5) = 2 : 1.',
        keyPoints: ['Sharing: total ÷ (a + b + c), then × each', 'Mixing: Σ(amount · price) ÷ Σ amount', 'Mixing ratio: reversed distances'],
        examples: [
          { example: 'Share €360 in the ratio 2 : 3 : 4.', solution: '360 ÷ 9 = 40; €80, €120, €160.' },
          { example: '3 kg of coffee at €4/kg are mixed with 2 kg at €9/kg. What does 1 kg of the mixture cost?', solution: '(3 · 4 + 2 · 9) ÷ 5 = 30 ÷ 5 = €6/kg.' },
        ],
        commonMistakes: [
          { mistake: 'Price of the mixture = (4 + 9) ÷ 2 = €6.50', fix: 'The amounts are different; take the weighted mean: €6.' },
        ],
        practice: [
          { problem: 'Share 540 in the ratio 1 : 3 : 5.', solution: '60, 180, 300', steps: ['1 + 3 + 5 = 9; 540 ÷ 9 = 60.', '60, 180, 300.'] },
          { problem: '4 l of juice with 20% fruit are mixed with 6 l with 50%. What percentage of fruit does the mixture have?', solution: '38%', steps: ['(4 · 20 + 6 · 50) ÷ 10.', '= 380 ÷ 10 = 38%.'] },
          { problem: 'In what ratio must coffee at €5/kg and €8/kg be mixed to get €6/kg?', solution: '2 : 1', steps: ['(8 − 6) : (6 − 5).', '= 2 : 1.'] },
        ],
      },
      de: {
        title: 'Verteilen und Mischen',
        objectives: ['Eine Menge im Verhältnis mit drei Teilen aufteilen.', 'Preis oder Konzentration einer Mischung berechnen.'],
        theory: 'Verteilen im Verhältnis a : b : c: Teile addieren, Wert eines Teils bestimmen und mit jedem Glied multiplizieren. 360 € im Verhältnis 2 : 3 : 4 → 9 Teile, 40 € pro Teil → 80 €, 120 €, 160 €.\n\nMischen: Der Preis (oder die Konzentration) der Mischung ist ein gewichteter Mittelwert: (Menge₁ · Preis₁ + Menge₂ · Preis₂) : (Menge₁ + Menge₂). 3 kg zu 4 €/kg und 2 kg zu 9 €/kg → (12 + 18) : 5 = 6 €/kg.\n\nSoll eine Mischung einen bestimmten Preis haben, verhalten sich die Mengen umgekehrt wie die Abstände zum Zielpreis: Kaffee zu 5 € und 8 € für 6 € → (8 − 6) : (6 − 5) = 2 : 1.',
        keyPoints: ['Verteilen: Gesamt : (a + b + c), dann × jedes Glied', 'Mischen: Σ(Menge · Preis) : Σ Menge', 'Mischungsverhältnis: umgekehrte Abstände'],
        examples: [
          { example: 'Verteilen Sie 360 € im Verhältnis 2 : 3 : 4.', solution: '360 : 9 = 40; 80 €, 120 €, 160 €.' },
          { example: '3 kg Kaffee zu 4 €/kg werden mit 2 kg zu 9 €/kg gemischt. Was kostet 1 kg der Mischung?', solution: '(3 · 4 + 2 · 9) : 5 = 30 : 5 = 6 €/kg.' },
        ],
        commonMistakes: [
          { mistake: 'Mischpreis = (4 + 9) : 2 = 6,50 €', fix: 'Die Mengen sind verschieden; gewichteter Mittelwert: 6 €.' },
        ],
        practice: [
          { problem: 'Verteilen Sie 540 im Verhältnis 1 : 3 : 5.', solution: '60, 180, 300', steps: ['1 + 3 + 5 = 9; 540 : 9 = 60.', '60, 180, 300.'] },
          { problem: '4 l Saft mit 20 % Fruchtanteil werden mit 6 l mit 50 % gemischt. Wie viel Prozent Frucht hat die Mischung?', solution: '38 %', steps: ['(4 · 20 + 6 · 50) : 10.', '= 380 : 10 = 38 %.'] },
          { problem: 'In welchem Verhältnis mischt man Kaffee zu 5 €/kg und 8 €/kg, um 6 €/kg zu erhalten?', solution: '2 : 1', steps: ['(8 − 6) : (6 − 5).', '= 2 : 1.'] },
        ],
      },
    },

    // ───────── 3. Direct and inverse proportion
    {
      slug: 'g9-proportionality-direct-inverse',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Punëtorë', 'Workers', 'Arbeiter'), cells: ['4', '6', '8', '12'] },
          { head: alt('Ditë', 'Days', 'Tage'), cells: ['24', '16', '12', '8'] },
        ],
        highlight: [[1, 1]],
        caption: alt('Varësi e zhdrejtë: punëtorë · ditë = 96 gjithmonë.', 'Inverse proportion: workers · days = 96 every time.', 'Antiproportional: Arbeiter · Tage = 96 immer.'),
        alt: alt('Tabela punëtorë–ditë: 4–24, 6–16, 8–12, 12–8.', 'Workers–days table: 4–24, 6–16, 8–12, 12–8.', 'Tabelle Arbeiter–Tage: 4–24, 6–16, 8–12, 12–8.'),
      }],
      answers: {
        examples: [[['8 * 12 / 6', 16]], [['7 / 100 * 350', 24.5]]],
        practice: [[['45 / 15 * 22', 66]], [['3 * 10 / 5', 6]], [['80 * 3 / 120', 2]]],
      },
      al: {
        title: 'Varësia e drejtë dhe e zhdrejtë',
        objectives: ['Të vendosni nëse varësia është e drejtë apo e zhdrejtë.', 'Të zgjidhni problema praktike me të dyja llojet.'],
        theory: 'Te varësia e drejtë herësi y : x mbetet konstant (sasia–çmimi, rruga–karburanti). Te varësia e zhdrejtë prodhimi x · y mbetet konstant (punëtorë–ditë, shpejtësia–koha, pompa–orë).\n\nPyetja kontrolluese: "Nëse njëra madhësi rritet, a rritet apo zvogëlohet tjetra?"\n\nShembuj: 8 punëtorë për 12 ditë → 6 punëtorë: 8 · 12 : 6 = 16 ditë (e zhdrejtë). Vetura harxhon 7 l për 100 km → për 350 km: 7 · 3,5 = 24,5 l (e drejtë).',
        keyPoints: ['E drejtë: y : x konstant', 'E zhdrejtë: x · y konstant', 'Pyetja: rritet apo zvogëlohet?'],
        examples: [
          { example: '8 punëtorë e kryejnë punën për 12 ditë. Për sa ditë e kryejnë 6 punëtorë?', solution: 'E zhdrejtë: 8 · 12 = 96; 96 : 6 = 16 ditë.' },
          { example: 'Vetura harxhon 7 l për 100 km. Sa harxhon për 350 km?', solution: 'E drejtë: 7 · 350/100 = 24,5 l.' },
        ],
        commonMistakes: [
          { mistake: '6 punëtorë: 12 · 6 : 8 = 9 ditë', fix: 'Më pak punëtorë kanë nevojë për më shumë ditë: 16.' },
        ],
        practice: [
          { problem: '15 m pëlhurë kushtojnë 45 €. Sa kushtojnë 22 m?', solution: '66 €', steps: ['1 m = 3 €.', '22 · 3 = 66 €.'] },
          { problem: '3 pompa e zbrazin pellgun për 10 orë. Sa orë duhen me 5 pompa?', solution: '6 orë', steps: ['3 · 10 = 30.', '30 : 5 = 6 orë.'] },
          { problem: 'Me 80 km/h rruga zgjat 3 h. Sa zgjat me 120 km/h?', solution: '2 h', steps: ['Rruga 240 km.', '240 : 120 = 2 h.'] },
        ],
      },
      en: {
        title: 'Direct and inverse proportion',
        objectives: ['Decide whether a relationship is direct or inverse.', 'Solve practical problems of both kinds.'],
        theory: 'In direct proportion the quotient y ÷ x stays constant (amount–price, distance–fuel). In inverse proportion the product x · y stays constant (workers–days, speed–time, pumps–hours).\n\nThe check question: "If one quantity grows, does the other grow or shrink?"\n\nExamples: 8 workers for 12 days → 6 workers: 8 · 12 ÷ 6 = 16 days (inverse). A car uses 7 l per 100 km → for 350 km: 7 · 3.5 = 24.5 l (direct).',
        keyPoints: ['Direct: y ÷ x constant', 'Inverse: x · y constant', 'The question: grow or shrink?'],
        examples: [
          { example: '8 workers finish a job in 12 days. How many days do 6 workers need?', solution: 'Inverse: 8 · 12 = 96; 96 ÷ 6 = 16 days.' },
          { example: 'A car uses 7 l per 100 km. How much does it use for 350 km?', solution: 'Direct: 7 · 350/100 = 24.5 l.' },
        ],
        commonMistakes: [
          { mistake: '6 workers: 12 · 6 ÷ 8 = 9 days', fix: 'Fewer workers need more days: 16.' },
        ],
        practice: [
          { problem: '15 m of fabric cost €45. How much do 22 m cost?', solution: '€66', steps: ['1 m = €3.', '22 · 3 = €66.'] },
          { problem: '3 pumps empty a pond in 10 hours. How many hours with 5 pumps?', solution: '6 hours', steps: ['3 · 10 = 30.', '30 ÷ 5 = 6 hours.'] },
          { problem: 'At 80 km/h a trip takes 3 h. How long at 120 km/h?', solution: '2 h', steps: ['Distance 240 km.', '240 ÷ 120 = 2 h.'] },
        ],
      },
      de: {
        title: 'Proportionale und antiproportionale Zuordnungen',
        objectives: ['Entscheiden, ob eine Zuordnung proportional oder antiproportional ist.', 'Sachaufgaben beider Arten lösen.'],
        theory: 'Bei proportionalen Zuordnungen bleibt der Quotient y : x konstant (Menge–Preis, Strecke–Kraftstoff). Bei antiproportionalen bleibt das Produkt x · y konstant (Arbeiter–Tage, Geschwindigkeit–Zeit, Pumpen–Stunden).\n\nPrüffrage: „Wenn eine Größe wächst, wächst oder schrumpft die andere?“\n\nBeispiele: 8 Arbeiter für 12 Tage → 6 Arbeiter: 8 · 12 : 6 = 16 Tage (antiproportional). Ein Auto braucht 7 l auf 100 km → für 350 km: 7 · 3,5 = 24,5 l (proportional).',
        keyPoints: ['Proportional: y : x konstant', 'Antiproportional: x · y konstant', 'Frage: wächst oder schrumpft?'],
        examples: [
          { example: '8 Arbeiter erledigen eine Arbeit in 12 Tagen. Wie viele Tage brauchen 6 Arbeiter?', solution: 'Antiproportional: 8 · 12 = 96; 96 : 6 = 16 Tage.' },
          { example: 'Ein Auto braucht 7 l auf 100 km. Wie viel braucht es für 350 km?', solution: 'Proportional: 7 · 350/100 = 24,5 l.' },
        ],
        commonMistakes: [
          { mistake: '6 Arbeiter: 12 · 6 : 8 = 9 Tage', fix: 'Weniger Arbeiter brauchen mehr Tage: 16.' },
        ],
        practice: [
          { problem: '15 m Stoff kosten 45 €. Wie viel kosten 22 m?', solution: '66 €', steps: ['1 m = 3 €.', '22 · 3 = 66 €.'] },
          { problem: '3 Pumpen leeren einen Teich in 10 Stunden. Wie lange brauchen 5 Pumpen?', solution: '6 Stunden', steps: ['3 · 10 = 30.', '30 : 5 = 6 Stunden.'] },
          { problem: 'Mit 80 km/h dauert eine Fahrt 3 h. Wie lange mit 120 km/h?', solution: '2 h', steps: ['Strecke 240 km.', '240 : 120 = 2 h.'] },
        ],
      },
    },

    // ───────── 4. Percent and per mille
    {
      slug: 'g9-proportionality-percent-permille',
      visuals: [{
        type: 'pieChart', showPercent: true,
        slices: [{ label: alt('çmimi i ri 68 €', 'new price €68', 'neuer Preis 68 €'), value: 85 }, { label: alt('zbritja 12 €', 'discount €12', 'Rabatt 12 €'), value: 15 }],
        caption: alt('80 € me zbritje 15%: paguhet 85% e çmimit, 0,85 · 80 = 68 €.', '€80 with a 15% discount: you pay 85% of the price, 0.85 · 80 = €68.', '80 € mit 15 % Rabatt: Man zahlt 85 % des Preises, 0,85 · 80 = 68 €.'),
        alt: alt('Diagram rrethor: 85% çmimi i ri dhe 15% zbritja.', 'Pie chart: 85% new price and 15% discount.', 'Kreisdiagramm: 85 % neuer Preis und 15 % Rabatt.'),
      }],
      answers: {
        examples: [[['80 * 0.85', 68]], [['1.2 * 0.8', 0.96]]],
        practice: [[['45 / 60 * 100', 75]], [['250 * 1.18', 295]], [['60 / 0.75', 80]]],
      },
      al: {
        title: 'Përqindja dhe promili',
        objectives: ['Të llogaritni rritje dhe ulje me përqindje me shumëzues.', 'Të përdorni promilin dhe të gjeni vlerën fillestare.'],
        theory: 'p% = p/100 dhe p‰ = p/1000. Rritja me p%: shumëzojmë me (1 + p/100); ulja me p%: me (1 − p/100). 80 € me zbritje 15%: 80 · 0,85 = 68 €.\n\nNdryshimet e njëpasnjëshme shumëzohen: +20% dhe pastaj −20% japin 1,2 · 0,8 = 0,96, pra ulje 4%, jo 0%.\n\nVlera fillestare: nëse pas zbritjes 25% paguhen 60 €, atëherë 0,75 · x = 60, x = 80 €. Promili përdoret për pjesë të vogla: 3‰ e 25 000 është 75.',
        keyPoints: ['Rritje p%: × (1 + p/100); ulje: × (1 − p/100)', 'Ndryshimet e njëpasnjëshme shumëzohen', 'p‰ = p/1000'],
        examples: [
          { example: 'Një çmim 80 € ulet 15%. Sa është çmimi i ri?', solution: '80 · 0,85 = 68 €.' },
          { example: 'Çmimi rritet 20%, pastaj ulet 20%. Si ndryshon gjithsej?', solution: '1,2 · 0,8 = 0,96: ulet 4%.' },
        ],
        commonMistakes: [
          { mistake: '+20% dhe −20% e kthejnë çmimin në fillim.', fix: 'Përqindja e dytë llogaritet nga çmimi i ri: 0,96, pra −4%.' },
          { mistake: 'Pas zbritjes 25% paguhen 60 €, pra fillimi 60 + 25% = 75 €.', fix: '60 € janë 75% e çmimit fillestar: 60 : 0,75 = 80 €.' },
        ],
        practice: [
          { problem: 'Sa përqind e 60 është 45?', solution: '75%', steps: ['45 : 60 = 0,75.', '= 75%.'] },
          { problem: 'Çmimi 250 € pa TVSH; TVSH 18%. Sa është çmimi me TVSH?', solution: '295 €', steps: ['250 · 1,18.', '= 295 €.'] },
          { problem: 'Pas zbritjes 25% paguat 60 €. Sa ishte çmimi fillestar?', solution: '80 €', steps: ['0,75x = 60.', 'x = 80 €.'] },
        ],
      },
      en: {
        title: 'Percentages and per mille',
        objectives: ['Work out percentage increases and decreases with multipliers.', 'Use per mille and find the original value.'],
        theory: 'p% = p/100 and p‰ = p/1000. Increase by p%: multiply by (1 + p/100); decrease by p%: by (1 − p/100). €80 with 15% off: 80 · 0.85 = €68.\n\nSuccessive changes multiply: +20% then −20% gives 1.2 · 0.8 = 0.96, a 4% decrease, not 0%.\n\nOriginal value: if you pay €60 after a 25% discount, then 0.75 · x = 60, x = €80. Per mille is used for small parts: 3‰ of 25 000 is 75.',
        keyPoints: ['Increase p%: × (1 + p/100); decrease: × (1 − p/100)', 'Successive changes multiply', 'p‰ = p/1000'],
        examples: [
          { example: 'A price of €80 is reduced by 15%. What is the new price?', solution: '80 · 0.85 = €68.' },
          { example: 'A price rises by 20%, then falls by 20%. What is the overall change?', solution: '1.2 · 0.8 = 0.96: down 4%.' },
        ],
        commonMistakes: [
          { mistake: '+20% and −20% bring the price back to the start.', fix: 'The second percentage is taken of the new price: 0.96, so −4%.' },
          { mistake: 'You pay €60 after 25% off, so the start was 60 + 25% = €75.', fix: '€60 is 75% of the original: 60 ÷ 0.75 = €80.' },
        ],
        practice: [
          { problem: 'What percentage of 60 is 45?', solution: '75%', steps: ['45 ÷ 60 = 0.75.', '= 75%.'] },
          { problem: 'A price is €250 before VAT; VAT is 18%. What is the price with VAT?', solution: '€295', steps: ['250 · 1.18.', '= €295.'] },
          { problem: 'After a 25% discount you paid €60. What was the original price?', solution: '€80', steps: ['0.75x = 60.', 'x = €80.'] },
        ],
      },
      de: {
        title: 'Prozent und Promille',
        objectives: ['Prozentuale Erhöhungen und Senkungen mit Faktoren berechnen.', 'Promille verwenden und den Grundwert bestimmen.'],
        theory: 'p % = p/100 und p ‰ = p/1000. Erhöhung um p %: mit (1 + p/100) multiplizieren; Senkung um p %: mit (1 − p/100). 80 € mit 15 % Rabatt: 80 · 0,85 = 68 €.\n\nAufeinanderfolgende Änderungen werden multipliziert: +20 % und dann −20 % ergibt 1,2 · 0,8 = 0,96, also 4 % weniger, nicht 0 %.\n\nGrundwert: Zahlt man nach 25 % Rabatt 60 €, gilt 0,75 · x = 60, x = 80 €. Promille nutzt man für kleine Anteile: 3 ‰ von 25 000 sind 75.',
        keyPoints: ['Erhöhung p %: · (1 + p/100); Senkung: · (1 − p/100)', 'Aufeinanderfolgende Änderungen multiplizieren', 'p ‰ = p/1000'],
        examples: [
          { example: 'Ein Preis von 80 € wird um 15 % gesenkt. Wie hoch ist der neue Preis?', solution: '80 · 0,85 = 68 €.' },
          { example: 'Ein Preis steigt um 20 % und sinkt dann um 20 %. Wie ändert er sich insgesamt?', solution: '1,2 · 0,8 = 0,96: um 4 % gesunken.' },
        ],
        commonMistakes: [
          { mistake: '+20 % und −20 % ergeben wieder den Anfangspreis.', fix: 'Die zweite Prozentangabe bezieht sich auf den neuen Preis: 0,96, also −4 %.' },
          { mistake: 'Nach 25 % Rabatt zahlt man 60 €, also war der Preis 60 + 25 % = 75 €.', fix: '60 € sind 75 % des Grundwerts: 60 : 0,75 = 80 €.' },
        ],
        practice: [
          { problem: 'Wie viel Prozent von 60 sind 45?', solution: '75 %', steps: ['45 : 60 = 0,75.', '= 75 %.'] },
          { problem: 'Ein Nettopreis beträgt 250 €; die MwSt. ist 18 %. Wie hoch ist der Bruttopreis?', solution: '295 €', steps: ['250 · 1,18.', '= 295 €.'] },
          { problem: 'Nach 25 % Rabatt haben Sie 60 € bezahlt. Wie hoch war der ursprüngliche Preis?', solution: '80 €', steps: ['0,75x = 60.', 'x = 80 €.'] },
        ],
      },
    },

    // ───────── 5. Interest
    {
      slug: 'g9-proportionality-interest',
      visuals: [{
        type: 'barChart', max: 1200, step: 200, decimals: 2, yLabel: '€',
        bars: [{ label: alt('viti 0', 'year 0', 'Jahr 0'), value: 1000 }, { label: alt('viti 1', 'year 1', 'Jahr 1'), value: 1050 }, { label: alt('viti 2', 'year 2', 'Jahr 2'), value: 1102.5 }, { label: alt('viti 3', 'year 3', 'Jahr 3'), value: 1157.63 }],
        caption: alt('1 000 € me interes të përbërë 5%: çdo vit shuma shumëzohet me 1,05.', '€1 000 at 5% compound interest: each year the amount is multiplied by 1.05.', '1 000 € mit 5 % Zinseszins: Jedes Jahr wird der Betrag mit 1,05 multipliziert.'),
        alt: alt('Shtylla 1 000 €, 1 050 €, 1 102,50 €, 1 157,63 € për vitet 0 deri 3.', 'Bars of €1 000, €1 050, €1 102.50, €1 157.63 for years 0 to 3.', 'Säulen 1 000 €, 1 050 €, 1 102,50 €, 1 157,63 € für die Jahre 0 bis 3.'),
      }],
      answers: {
        examples: [[['2000 * 3 * 4 / 100', 240]], [['1000 * 1.05^2', 1102.5]]],
        practice: [[['500 * 4 * 3 / 100', 60]], [['90 * 100 / (1500 * 2)', 3]], [['2000 * 1.1^2', 2420]]],
      },
      al: {
        title: 'Interesi bankar',
        objectives: ['Të llogaritni interesin e thjeshtë I = K · p · t / 100.', 'Të dalloni interesin e thjeshtë nga ai i përbërë.'],
        theory: 'Interesi i thjeshtë llogaritet çdo vit nga kapitali fillestar K: I = K · p · t / 100, ku p është norma vjetore në % dhe t numri i viteve. 2 000 € me 3% për 4 vjet: I = 2 000 · 3 · 4 / 100 = 240 €.\n\nTe interesi i përbërë, interesi i çdo viti i shtohet kapitalit dhe vitin tjetër fiton edhe ai interes: Kₜ = K · (1 + p/100)ᵗ. 1 000 € me 5% për 2 vjet: 1 000 · 1,05² = 1 102,50 €.\n\nNga formula e interesit të thjeshtë mund të gjejmë çdo madhësi: p = I · 100 / (K · t).',
        keyPoints: ['I thjeshtë: I = K · p · t / 100', 'I përbërë: Kₜ = K(1 + p/100)ᵗ', 'p = 100I / (Kt)'],
        examples: [
          { example: 'Sa interes të thjeshtë sjellin 2 000 € me 3% në vit për 4 vjet?', solution: '2 000 · 3 · 4 / 100 = 240 €.' },
          { example: 'Sa bëhen 1 000 € me interes të përbërë 5% pas 2 vjetësh?', solution: '1 000 · 1,05² = 1 102,50 €.' },
        ],
        commonMistakes: [
          { mistake: 'Interesi i përbërë për 2 vjet me 5% = 10% e kapitalit.', fix: 'Viti i dytë llogaritet nga 1 050 €: gjithsej 102,50 €, jo 100 €.' },
        ],
        practice: [
          { problem: 'Interesi i thjeshtë i 500 € me 4% për 3 vjet?', solution: '60 €', steps: ['500 · 4 · 3 / 100.', '= 60 €.'] },
          { problem: '1 500 € sjellin 90 € interes të thjeshtë për 2 vjet. Sa është norma?', solution: '3%', steps: ['p = 90 · 100 / (1 500 · 2).', '= 3%.'] },
          { problem: 'Sa bëhen 2 000 € me interes të përbërë 10% pas 2 vjetësh?', solution: '2 420 €', steps: ['2 000 · 1,1².', '= 2 420 €.'] },
        ],
      },
      en: {
        title: 'Interest',
        objectives: ['Work out simple interest I = P · r · t / 100.', 'Tell simple interest from compound interest.'],
        theory: 'Simple interest is worked out each year on the original principal P: I = P · r · t / 100, where r is the yearly rate in % and t the number of years. €2 000 at 3% for 4 years: I = 2 000 · 3 · 4 / 100 = €240.\n\nWith compound interest, each year\'s interest is added to the principal and earns interest the next year: Aₜ = P · (1 + r/100)ᵗ. €1 000 at 5% for 2 years: 1 000 · 1.05² = €1 102.50.\n\nFrom the simple-interest formula we can find any quantity: r = I · 100 / (P · t).',
        keyPoints: ['Simple: I = P · r · t / 100', 'Compound: Aₜ = P(1 + r/100)ᵗ', 'r = 100I / (Pt)'],
        examples: [
          { example: 'How much simple interest do €2 000 earn at 3% a year for 4 years?', solution: '2 000 · 3 · 4 / 100 = €240.' },
          { example: 'What do €1 000 grow to at 5% compound interest after 2 years?', solution: '1 000 · 1.05² = €1 102.50.' },
        ],
        commonMistakes: [
          { mistake: 'Compound interest for 2 years at 5% = 10% of the principal.', fix: 'Year two is worked out on €1 050: €102.50 in total, not €100.' },
        ],
        practice: [
          { problem: 'Simple interest on €500 at 4% for 3 years?', solution: '€60', steps: ['500 · 4 · 3 / 100.', '= €60.'] },
          { problem: '€1 500 earn €90 simple interest in 2 years. What is the rate?', solution: '3%', steps: ['r = 90 · 100 / (1 500 · 2).', '= 3%.'] },
          { problem: 'What do €2 000 grow to at 10% compound interest after 2 years?', solution: '€2 420', steps: ['2 000 · 1.1².', '= €2 420.'] },
        ],
      },
      de: {
        title: 'Zinsen',
        objectives: ['Einfache Zinsen Z = K · p · t / 100 berechnen.', 'Einfache Zinsen von Zinseszinsen unterscheiden.'],
        theory: 'Einfache Zinsen werden jedes Jahr vom Anfangskapital K berechnet: Z = K · p · t / 100, mit dem Jahreszinssatz p in % und der Anzahl der Jahre t. 2 000 € zu 3 % für 4 Jahre: Z = 2 000 · 3 · 4 / 100 = 240 €.\n\nBei Zinseszinsen werden die Zinsen jedes Jahr zum Kapital addiert und im nächsten Jahr mitverzinst: Kₜ = K · (1 + p/100)ᵗ. 1 000 € zu 5 % für 2 Jahre: 1 000 · 1,05² = 1 102,50 €.\n\nAus der Zinsformel lässt sich jede Größe bestimmen: p = Z · 100 / (K · t).',
        keyPoints: ['Einfach: Z = K · p · t / 100', 'Zinseszins: Kₜ = K(1 + p/100)ᵗ', 'p = 100Z / (Kt)'],
        examples: [
          { example: 'Wie viel einfache Zinsen bringen 2 000 € zu 3 % pro Jahr in 4 Jahren?', solution: '2 000 · 3 · 4 / 100 = 240 €.' },
          { example: 'Auf wie viel wachsen 1 000 € mit 5 % Zinseszins in 2 Jahren?', solution: '1 000 · 1,05² = 1 102,50 €.' },
        ],
        commonMistakes: [
          { mistake: 'Zinseszins für 2 Jahre zu 5 % = 10 % des Kapitals.', fix: 'Das zweite Jahr wird von 1 050 € berechnet: insgesamt 102,50 €, nicht 100 €.' },
        ],
        practice: [
          { problem: 'Einfache Zinsen von 500 € zu 4 % für 3 Jahre?', solution: '60 €', steps: ['500 · 4 · 3 / 100.', '= 60 €.'] },
          { problem: '1 500 € bringen in 2 Jahren 90 € einfache Zinsen. Wie hoch ist der Zinssatz?', solution: '3 %', steps: ['p = 90 · 100 / (1 500 · 2).', '= 3 %.'] },
          { problem: 'Auf wie viel wachsen 2 000 € mit 10 % Zinseszins in 2 Jahren?', solution: '2 420 €', steps: ['2 000 · 1,1².', '= 2 420 €.'] },
        ],
      },
    },
  ],
};
