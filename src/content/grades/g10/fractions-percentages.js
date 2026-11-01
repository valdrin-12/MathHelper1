// Grade 10 · Theme 5: Fractions, decimals and percentages (December–January)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g10-fractions-percentages',
  i18n: {
    al: { title: 'Thyesat, numrat dhjetorë dhe përqindjet', description: 'Thyesat dhe përqindjet, veprimet me thyesa dhe numra të përzier, shndërrimet ndërmjet trajtave.' },
    en: { title: 'Fractions, decimals and percentages', description: 'Fractions and percentages, operations with fractions and mixed numbers, converting between forms.' },
    de: { title: 'Brüche, Dezimalzahlen und Prozente', description: 'Brüche und Prozente, Rechnen mit Brüchen und gemischten Zahlen, Umwandeln zwischen den Darstellungen.' },
  },
  lessons: [
    // ───────── 1. Fractions and percentages
    {
      slug: 'g10-fractions-percentages-fractions-percent',
      visuals: [{
        type: 'barChart', max: 800, step: 200, yLabel: '€',
        bars: [{ label: alt('para', 'before', 'vorher'), value: 600 }, { label: alt('pas', 'after', 'nachher'), value: 690 }],
        caption: alt('Paga rritet nga 600 € në 690 €: rritja 90 € është 90/600 = 15%.', 'A wage rises from €600 to €690: the increase of €90 is 90/600 = 15%.', 'Ein Lohn steigt von 600 € auf 690 €: Die Erhöhung um 90 € sind 90/600 = 15 %.'),
        alt: alt('Dy shtylla: 600 € para dhe 690 € pas rritjes.', 'Two bars: €600 before and €690 after the rise.', 'Zwei Säulen: 600 € vorher und 690 € nachher.'),
      }],
      answers: {
        examples: [[['(690 - 600) / 600 * 100', 15]], [['0.35 * 240', 84]]],
        practice: [[['18 / 75 * 100', 24]], [['250 * 1.12', 280]], [['90 / 1.2', 75]]],
      },
      al: {
        title: 'Thyesat dhe përqindjet',
        objectives: ['Të llogaritni përqindjen e një sasie dhe ndryshimin në përqindje.', 'Të gjeni vlerën fillestare pas një ndryshimi në përqindje.'],
        theory: 'p% e një sasie: p/100 · sasia; 35% e 240 = 0,35 · 240 = 84. Sa përqind është a nga b: a/b · 100%.\n\nNdryshimi në përqindje = ndryshimi : vlera fillestare · 100%. Paga nga 600 € në 690 €: 90/600 = 15%.\n\nVlera fillestare (përqindja e kundërt): pas rritjes 20% çmimi është 90 €, pra 1,2 · x = 90 dhe x = 75 €. Mos zbritni 20% nga 90: përqindja llogaritej nga vlera fillestare.',
        keyPoints: ['p% e x = p/100 · x', 'Ndryshimi % = ndryshimi : fillestarja · 100', 'Vlera fillestare: pjesëtoni me shumëzuesin'],
        examples: [
          { example: 'Paga rritet nga 600 € në 690 €. Sa për qind është rritja?', solution: '90/600 = 0,15 = 15%.' },
          { example: 'Sa është 35% e 240?', solution: '0,35 · 240 = 84.' },
        ],
        commonMistakes: [
          { mistake: 'Rritja 600 → 690 është 90/690 ≈ 13%.', fix: 'Pjesëtohet me vlerën fillestare: 90/600 = 15%.' },
        ],
        practice: [
          { problem: 'Sa përqind e 75 është 18?', solution: '24%', steps: ['18 : 75 = 0,24.', '= 24%.'] },
          { problem: 'Çmimi 250 € rritet 12%. Sa bëhet?', solution: '280 €', steps: ['250 · 1,12.', '= 280 €.'] },
          { problem: 'Pas rritjes 20% çmimi është 90 €. Sa ishte më parë?', solution: '75 €', steps: ['1,2x = 90.', 'x = 75 €.'] },
        ],
      },
      en: {
        title: 'Fractions and percentages',
        objectives: ['Work out a percentage of an amount and a percentage change.', 'Find the original value after a percentage change.'],
        theory: 'p% of an amount: p/100 · amount; 35% of 240 = 0.35 · 240 = 84. What percentage a is of b: a/b · 100%.\n\nPercentage change = change ÷ original value · 100%. A wage from €600 to €690: 90/600 = 15%.\n\nOriginal value (reverse percentage): after a 20% rise the price is €90, so 1.2 · x = 90 and x = €75. Do not take 20% off 90: the percentage was of the original value.',
        keyPoints: ['p% of x = p/100 · x', '% change = change ÷ original · 100', 'Original value: divide by the multiplier'],
        examples: [
          { example: 'A wage rises from €600 to €690. What is the percentage increase?', solution: '90/600 = 0.15 = 15%.' },
          { example: 'What is 35% of 240?', solution: '0.35 · 240 = 84.' },
        ],
        commonMistakes: [
          { mistake: 'The rise 600 → 690 is 90/690 ≈ 13%.', fix: 'Divide by the original value: 90/600 = 15%.' },
        ],
        practice: [
          { problem: 'What percentage of 75 is 18?', solution: '24%', steps: ['18 ÷ 75 = 0.24.', '= 24%.'] },
          { problem: 'A price of €250 rises by 12%. What is it now?', solution: '€280', steps: ['250 · 1.12.', '= €280.'] },
          { problem: 'After a 20% rise the price is €90. What was it before?', solution: '€75', steps: ['1.2x = 90.', 'x = €75.'] },
        ],
      },
      de: {
        title: 'Brüche und Prozente',
        objectives: ['Prozentwerte und prozentuale Änderungen berechnen.', 'Den Grundwert nach einer prozentualen Änderung bestimmen.'],
        theory: 'p % einer Größe: p/100 · Größe; 35 % von 240 = 0,35 · 240 = 84. Wie viel Prozent a von b ist: a/b · 100 %.\n\nProzentuale Änderung = Änderung : Ausgangswert · 100 %. Lohn von 600 € auf 690 €: 90/600 = 15 %.\n\nGrundwert: Nach 20 % Erhöhung kostet etwas 90 €, also 1,2 · x = 90 und x = 75 €. Nicht 20 % von 90 abziehen: Die Prozente bezogen sich auf den Ausgangswert.',
        keyPoints: ['p % von x = p/100 · x', 'Änderung in % = Änderung : Ausgangswert · 100', 'Grundwert: durch den Faktor teilen'],
        examples: [
          { example: 'Ein Lohn steigt von 600 € auf 690 €. Um wie viel Prozent?', solution: '90/600 = 0,15 = 15 %.' },
          { example: 'Wie viel sind 35 % von 240?', solution: '0,35 · 240 = 84.' },
        ],
        commonMistakes: [
          { mistake: 'Die Erhöhung 600 → 690 ist 90/690 ≈ 13 %.', fix: 'Durch den Ausgangswert teilen: 90/600 = 15 %.' },
        ],
        practice: [
          { problem: 'Wie viel Prozent von 75 sind 18?', solution: '24 %', steps: ['18 : 75 = 0,24.', '= 24 %.'] },
          { problem: 'Ein Preis von 250 € steigt um 12 %. Wie hoch ist er jetzt?', solution: '280 €', steps: ['250 · 1,12.', '= 280 €.'] },
          { problem: 'Nach 20 % Erhöhung kostet etwas 90 €. Was kostete es vorher?', solution: '75 €', steps: ['1,2x = 90.', 'x = 75 €.'] },
        ],
      },
    },

    // ───────── 2. Operations with fractions
    {
      slug: 'g10-fractions-percentages-fraction-operations',
      visuals: [{
        type: 'fractionBar', bars: [{ parts: 12, filled: 4, label: '1/3 = 4/12' }, { parts: 12, filled: 9, label: '3/4 = 9/12', color: 'secondary' }],
        caption: alt('Me emërues të përbashkët 12: 1/3 + 3/4 = 4/12 + 9/12 = 13/12 = 1 1/12.', 'With the common denominator 12: 1/3 + 3/4 = 4/12 + 9/12 = 13/12 = 1 1/12.', 'Mit dem Hauptnenner 12: 1/3 + 3/4 = 4/12 + 9/12 = 13/12 = 1 1/12.'),
        alt: alt('Dy shirita me 12 pjesë: 4 dhe 9 pjesë të ngjyrosura.', 'Two bars of 12 parts: 4 and 9 parts shaded.', 'Zwei Streifen mit 12 Teilen: 4 bzw. 9 Teile gefärbt.'),
      }],
      answers: {
        examples: [[['2 + 1/3 + 1 + 3/4', '4 + 1/12', 1e-9, '4 1/12']], [['(3/4) / (3/2)', '1/2', 1e-9, '1/2']]],
        practice: [[['5/6 - 2/9', '11/18', 1e-9, '11/18']], [['(12/5) * (5/4)', 3]], [['(1/2 + 1/3) / (5/6)', 1]]],
      },
      al: {
        title: 'Veprimet me thyesa',
        objectives: ['Të mblidhni dhe zbritni thyesa dhe numra të përzier.', 'Të shumëzoni dhe pjesëtoni thyesa, duke thjeshtuar herët.'],
        theory: 'Mbledhja dhe zbritja kërkojnë emërues të përbashkët (SHVP-ja e emëruesve). Numrat e përzier mund t\'i mbledhim veç pjesën e plotë dhe veç thyesat: 2 1/3 + 1 3/4 = 3 + 4/12 + 9/12 = 3 + 13/12 = 4 1/12.\n\nShumëzimi: numrat e përzier kthehen në thyesa të papërshtatshme, pastaj numërues · numërues dhe emërues · emërues: 2 2/5 · 1 1/4 = 12/5 · 5/4 = 3.\n\nPjesëtimi: shumëzojmë me të anasjelltën: 3/4 : 1 1/2 = 3/4 · 2/3 = 1/2.',
        keyPoints: ['± : emërues i përbashkët', '· : përzier → e papërshtatshme', ': : shumëzo me të anasjelltën'],
        examples: [
          { example: 'Llogaritni 2 1/3 + 1 3/4.', solution: '3 + 4/12 + 9/12 = 3 + 13/12 = 4 1/12.' },
          { example: 'Llogaritni 3/4 : 1 1/2.', solution: '3/4 · 2/3 = 6/12 = 1/2.' },
        ],
        commonMistakes: [
          { mistake: '2 2/5 · 1 1/4 = 2 · 1 + 2/5 · 1/4', fix: 'Numrat e përzier shumëzohen si thyesa të papërshtatshme: 12/5 · 5/4 = 3.' },
        ],
        practice: [
          { problem: 'Llogaritni 5/6 − 2/9.', solution: '11/18', steps: ['15/18 − 4/18.', '= 11/18.'] },
          { problem: 'Llogaritni 2 2/5 · 1 1/4.', solution: '3', steps: ['12/5 · 5/4.', '= 60/20 = 3.'] },
          { problem: 'Llogaritni (1/2 + 1/3) : 5/6.', solution: '1', steps: ['1/2 + 1/3 = 5/6.', '5/6 : 5/6 = 1.'] },
        ],
      },
      en: {
        title: 'Operations with fractions',
        objectives: ['Add and subtract fractions and mixed numbers.', 'Multiply and divide fractions, simplifying early.'],
        theory: 'Adding and subtracting need a common denominator (the LCM of the denominators). Mixed numbers can be added as whole parts and fractions separately: 2 1/3 + 1 3/4 = 3 + 4/12 + 9/12 = 3 + 13/12 = 4 1/12.\n\nMultiplying: turn mixed numbers into improper fractions, then numerator · numerator and denominator · denominator: 2 2/5 · 1 1/4 = 12/5 · 5/4 = 3.\n\nDividing: multiply by the reciprocal: 3/4 ÷ 1 1/2 = 3/4 · 2/3 = 1/2.',
        keyPoints: ['± : common denominator', '· : mixed → improper', '÷ : multiply by the reciprocal'],
        examples: [
          { example: 'Work out 2 1/3 + 1 3/4.', solution: '3 + 4/12 + 9/12 = 3 + 13/12 = 4 1/12.' },
          { example: 'Work out 3/4 ÷ 1 1/2.', solution: '3/4 · 2/3 = 6/12 = 1/2.' },
        ],
        commonMistakes: [
          { mistake: '2 2/5 · 1 1/4 = 2 · 1 + 2/5 · 1/4', fix: 'Mixed numbers are multiplied as improper fractions: 12/5 · 5/4 = 3.' },
        ],
        practice: [
          { problem: 'Work out 5/6 − 2/9.', solution: '11/18', steps: ['15/18 − 4/18.', '= 11/18.'] },
          { problem: 'Work out 2 2/5 · 1 1/4.', solution: '3', steps: ['12/5 · 5/4.', '= 60/20 = 3.'] },
          { problem: 'Work out (1/2 + 1/3) ÷ 5/6.', solution: '1', steps: ['1/2 + 1/3 = 5/6.', '5/6 ÷ 5/6 = 1.'] },
        ],
      },
      de: {
        title: 'Rechnen mit Brüchen',
        objectives: ['Brüche und gemischte Zahlen addieren und subtrahieren.', 'Brüche multiplizieren und dividieren und früh kürzen.'],
        theory: 'Addieren und Subtrahieren brauchen einen gemeinsamen Nenner (kgV der Nenner). Gemischte Zahlen kann man getrennt nach Ganzen und Brüchen addieren: 2 1/3 + 1 3/4 = 3 + 4/12 + 9/12 = 3 + 13/12 = 4 1/12.\n\nMultiplizieren: gemischte Zahlen in unechte Brüche umwandeln, dann Zähler · Zähler und Nenner · Nenner: 2 2/5 · 1 1/4 = 12/5 · 5/4 = 3.\n\nDividieren: mit dem Kehrwert multiplizieren: 3/4 : 1 1/2 = 3/4 · 2/3 = 1/2.',
        keyPoints: ['± : gemeinsamer Nenner', '· : gemischt → unecht', ': : mit dem Kehrwert multiplizieren'],
        examples: [
          { example: 'Berechnen Sie 2 1/3 + 1 3/4.', solution: '3 + 4/12 + 9/12 = 3 + 13/12 = 4 1/12.' },
          { example: 'Berechnen Sie 3/4 : 1 1/2.', solution: '3/4 · 2/3 = 6/12 = 1/2.' },
        ],
        commonMistakes: [
          { mistake: '2 2/5 · 1 1/4 = 2 · 1 + 2/5 · 1/4', fix: 'Gemischte Zahlen als unechte Brüche multiplizieren: 12/5 · 5/4 = 3.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 5/6 − 2/9.', solution: '11/18', steps: ['15/18 − 4/18.', '= 11/18.'] },
          { problem: 'Berechnen Sie 2 2/5 · 1 1/4.', solution: '3', steps: ['12/5 · 5/4.', '= 60/20 = 3.'] },
          { problem: 'Berechnen Sie (1/2 + 1/3) : 5/6.', solution: '1', steps: ['1/2 + 1/3 = 5/6.', '5/6 : 5/6 = 1.'] },
        ],
      },
    },

    // ───────── 3. Converting between forms
    {
      slug: 'g10-fractions-percentages-conversions',
      visuals: [{
        type: 'numberLine', min: 0, max: 1, step: 0.125, labelEvery: 2,
        points: [{ x: 0.375, label: '3/8' }, { x: 0.6, label: '0,6', below: true, color: 'secondary' }, { x: 0.625, label: '5/8', color: 'success' }],
        caption: alt('3/8 = 0,375 = 37,5%; 0,6 = 60%; 5/8 = 0,625 = 62,5%.', '3/8 = 0.375 = 37.5%; 0.6 = 60%; 5/8 = 0.625 = 62.5%.', '3/8 = 0,375 = 37,5 %; 0,6 = 60 %; 5/8 = 0,625 = 62,5 %.'),
        alt: alt('Boshti numerik nga 0 deri 1 me pikat 3/8, 0,6 dhe 5/8.', 'Number line from 0 to 1 with the points 3/8, 0.6 and 5/8.', 'Zahlenstrahl von 0 bis 1 mit den Punkten 3/8, 0,6 und 5/8.'),
      }],
      answers: {
        examples: [[['3/8 * 100', 37.5]], [['7/12', 0.5833, 0.0001, '0.58(3)']]],
        practice: [[['6/9 * 100', 66.7, 0.05, '66.7']], [['45/100', '9/20', 1e-9, '9/20']], [['1 + 3/5', 1.6]]],
      },
      al: {
        title: 'Shndërrimet thyesë – dhjetor – përqindje',
        objectives: ['Të shndërroni ndërmjet thyesave, numrave dhjetorë dhe përqindjeve.', 'Të krahasoni dhe renditni numra në trajta të ndryshme.'],
        theory: 'Thyesë → dhjetor: pjesëtoni numëruesin me emëruesin: 3/8 = 0,375; 7/12 = 0,58(3). Dhjetor → përqindje: shumëzoni me 100: 0,375 = 37,5%. Përqindje → thyesë: 45% = 45/100 = 9/20.\n\nDhjetor i fundëm → thyesë: shkruani mbi 10, 100, 1 000 dhe thjeshtoni: 0,375 = 375/1 000 = 3/8. Periodik → thyesë: 0,(6) = 6/9 = 2/3 ≈ 66,7%.\n\nPër të krahasuar numra në trajta të ndryshme, shndërrojini të gjithë në dhjetorë: 0,6 < 0,62 < 0,625 (5/8).',
        keyPoints: ['a/b → a : b', 'dhjetor · 100 = %', 'p% = p/100 (thjeshtoni)'],
        examples: [
          { example: 'Shkruani 0,375 si thyesë dhe si përqindje.', solution: '375/1 000 = 3/8; 37,5%.' },
          { example: 'Shkruani 7/12 si numër dhjetor.', solution: '7 : 12 = 0,58333… = 0,58(3).' },
        ],
        commonMistakes: [
          { mistake: '0,375 = 3,75%', fix: 'Shumëzohet me 100: 37,5%.' },
        ],
        practice: [
          { problem: 'Shkruani 0,(6) si përqindje (një dhjetore).', solution: '≈ 66,7%', steps: ['0,(6) = 2/3.', '2/3 ≈ 66,7%.'] },
          { problem: 'Shkruani 45% si thyesë të thjeshtuar.', solution: '9/20', steps: ['45/100.', 'Thjeshtojmë me 5: 9/20.'] },
          { problem: 'Shkruani 1 3/5 si numër dhjetor.', solution: '1,6', steps: ['3/5 = 0,6.', '1 + 0,6 = 1,6.'] },
        ],
      },
      en: {
        title: 'Converting fractions, decimals and percentages',
        objectives: ['Convert between fractions, decimals and percentages.', 'Compare and order numbers given in different forms.'],
        theory: 'Fraction → decimal: divide the numerator by the denominator: 3/8 = 0.375; 7/12 = 0.58(3). Decimal → percentage: multiply by 100: 0.375 = 37.5%. Percentage → fraction: 45% = 45/100 = 9/20.\n\nTerminating decimal → fraction: write over 10, 100, 1 000 and simplify: 0.375 = 375/1 000 = 3/8. Recurring → fraction: 0.(6) = 6/9 = 2/3 ≈ 66.7%.\n\nTo compare numbers in different forms, change them all into decimals: 0.6 < 0.62 < 0.625 (5/8).',
        keyPoints: ['a/b → a ÷ b', 'decimal · 100 = %', 'p% = p/100 (simplify)'],
        examples: [
          { example: 'Write 0.375 as a fraction and as a percentage.', solution: '375/1 000 = 3/8; 37.5%.' },
          { example: 'Write 7/12 as a decimal.', solution: '7 ÷ 12 = 0.58333… = 0.58(3).' },
        ],
        commonMistakes: [
          { mistake: '0.375 = 3.75%', fix: 'Multiply by 100: 37.5%.' },
        ],
        practice: [
          { problem: 'Write 0.(6) as a percentage (one decimal place).', solution: '≈ 66.7%', steps: ['0.(6) = 2/3.', '2/3 ≈ 66.7%.'] },
          { problem: 'Write 45% as a fraction in its simplest form.', solution: '9/20', steps: ['45/100.', 'Divide by 5: 9/20.'] },
          { problem: 'Write 1 3/5 as a decimal.', solution: '1.6', steps: ['3/5 = 0.6.', '1 + 0.6 = 1.6.'] },
        ],
      },
      de: {
        title: 'Umwandeln: Bruch – Dezimalzahl – Prozent',
        objectives: ['Zwischen Brüchen, Dezimalzahlen und Prozenten umwandeln.', 'Zahlen in verschiedenen Darstellungen vergleichen und ordnen.'],
        theory: 'Bruch → Dezimalzahl: Zähler durch Nenner teilen: 3/8 = 0,375; 7/12 = 0,58(3). Dezimalzahl → Prozent: mit 100 multiplizieren: 0,375 = 37,5 %. Prozent → Bruch: 45 % = 45/100 = 9/20.\n\nAbbrechende Dezimalzahl → Bruch: über 10, 100, 1 000 schreiben und kürzen: 0,375 = 375/1 000 = 3/8. Periodisch → Bruch: 0,(6) = 6/9 = 2/3 ≈ 66,7 %.\n\nUm Zahlen verschiedener Darstellung zu vergleichen, alle in Dezimalzahlen umwandeln: 0,6 < 0,62 < 0,625 (5/8).',
        keyPoints: ['a/b → a : b', 'Dezimalzahl · 100 = %', 'p % = p/100 (kürzen)'],
        examples: [
          { example: 'Schreiben Sie 0,375 als Bruch und als Prozentsatz.', solution: '375/1 000 = 3/8; 37,5 %.' },
          { example: 'Schreiben Sie 7/12 als Dezimalzahl.', solution: '7 : 12 = 0,58333… = 0,58(3).' },
        ],
        commonMistakes: [
          { mistake: '0,375 = 3,75 %', fix: 'Mit 100 multiplizieren: 37,5 %.' },
        ],
        practice: [
          { problem: 'Schreiben Sie 0,(6) als Prozentsatz (eine Dezimale).', solution: '≈ 66,7 %', steps: ['0,(6) = 2/3.', '2/3 ≈ 66,7 %.'] },
          { problem: 'Schreiben Sie 45 % als gekürzten Bruch.', solution: '9/20', steps: ['45/100.', 'Durch 5 kürzen: 9/20.'] },
          { problem: 'Schreiben Sie 1 3/5 als Dezimalzahl.', solution: '1,6', steps: ['3/5 = 0,6.', '1 + 0,6 = 1,6.'] },
        ],
      },
    },
  ],
};
