// Grade 10 · Theme 1: Operations with numbers (September)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g10-number-operations',
  i18n: {
    al: { title: 'Veprimet me numra', description: 'Vlera vendore, rrumbullakimi me shifra të rëndësishme, vlerësimi dhe radha e veprimeve.' },
    en: { title: 'Number operations', description: 'Place value, rounding to significant figures, estimation and the order of operations.' },
    de: { title: 'Rechnen mit Zahlen', description: 'Stellenwert, Runden auf gültige Ziffern, Überschlagen und Rechenreihenfolge.' },
  },
  lessons: [
    // ───────── 1. Place value and rounding
    {
      slug: 'g10-number-operations-place-value-rounding',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Numri', 'Number', 'Zahl'), cells: [alt('0,004582', '0.004582', '0,004582'), '45 671', alt('3,14159', '3.14159', '3,14159')] },
          { head: alt('Rrumbullakimi', 'Rounded', 'Gerundet'), cells: [alt('3 sh.r.', '3 s.f.', '3 g. Z.'), alt('3 sh.r.', '3 s.f.', '3 g. Z.'), alt('2 dhjetore', '2 d.p.', '2 Dezimalen')] },
          { head: alt('Rezultati', 'Result', 'Ergebnis'), cells: [alt('0,00458', '0.00458', '0,00458'), '45 700', alt('3,14', '3.14', '3,14')] },
        ],
        alt: alt('Tabela me tre numra dhe rrumbullakimin e tyre me shifra të rëndësishme ose dhjetore.', 'Table of three numbers rounded to significant figures or decimal places.', 'Tabelle mit drei Zahlen, gerundet auf gültige Ziffern bzw. Dezimalen.'),
      }],
      answers: {
        examples: [[['0.00458', 0.00458]], [['40 * 5', 200]]],
        practice: [[['45700', 45700]], [['3.14', 3.14]], [['600 / 30', 20]]],
      },
      al: {
        title: 'Vlera vendore dhe rrumbullakimi',
        objectives: ['Të rrumbullakoni në numër të caktuar dhjetoresh dhe shifrash të rëndësishme.', 'Të vlerësoni rezultatin duke rrumbullakuar në një shifër të rëndësishme.'],
        theory: 'Shifrat e rëndësishme numërohen nga shifra e parë jo zero. Te 0,004582 shifrat e rëndësishme janë 4, 5, 8, 2; me 3 shifra të rëndësishme: 0,00458 (shikojmë shifrën e katërt, 2 < 5). Te 45 671 me 3 shifra të rëndësishme: 45 700 (zerot ruajnë vlerën vendore).\n\nRrumbullakimi në dhjetore numëron shifrat pas presjes: 3,14159 me 2 dhjetore = 3,14.\n\nVlerësimi: rrumbullakojmë çdo numër në një shifër të rëndësishme dhe llogarisim me mend: 38,7 · 4,92 ≈ 40 · 5 = 200. Vlerësimi tregon nëse rezultati i makinës llogaritëse ka kuptim.',
        keyPoints: ['Shifrat e rëndësishme fillojnë te shifra e parë jo zero', 'Shikoni shifrën pas vendit të rrumbullakimit: ≥ 5 lart', 'Vlerësim: 1 shifër e rëndësishme'],
        examples: [
          { example: 'Rrumbullakoni 0,004582 në tri shifra të rëndësishme.', solution: '0,00458 (shifra e katërt 2 < 5).' },
          { example: 'Vlerësoni 38,7 · 4,92.', solution: '≈ 40 · 5 = 200 (vlera e saktë 190,404).' },
        ],
        commonMistakes: [
          { mistake: '0,004582 me 3 shifra të rëndësishme = 0,005', fix: 'Zerot para shifrës 4 nuk numërohen: 0,00458.' },
          { mistake: '45 671 me 3 shifra të rëndësishme = 457', fix: 'Vlera vendore ruhet me zero: 45 700.' },
        ],
        practice: [
          { problem: 'Rrumbullakoni 45 671 në 3 shifra të rëndësishme.', solution: '45 700', steps: ['Shifra e katërt 7 ≥ 5.', '45 700.'] },
          { problem: 'Rrumbullakoni 3,14159 në 2 dhjetore.', solution: '3,14', steps: ['Shifra e tretë pas presjes 1 < 5.', '3,14.'] },
          { problem: 'Vlerësoni 612 : 29,8.', solution: '≈ 20', steps: ['600 : 30.', '≈ 20.'] },
        ],
      },
      en: {
        title: 'Place value and rounding',
        objectives: ['Round to a given number of decimal places and significant figures.', 'Estimate a result by rounding to one significant figure.'],
        theory: 'Significant figures are counted from the first non-zero digit. In 0.004582 the significant figures are 4, 5, 8, 2; to 3 significant figures: 0.00458 (look at the fourth digit, 2 < 5). 45 671 to 3 significant figures: 45 700 (the zeros keep the place value).\n\nRounding to decimal places counts digits after the point: 3.14159 to 2 d.p. = 3.14.\n\nEstimation: round each number to one significant figure and work it out mentally: 38.7 · 4.92 ≈ 40 · 5 = 200. An estimate shows whether a calculator answer makes sense.',
        keyPoints: ['Significant figures start at the first non-zero digit', 'Look at the next digit: ≥ 5 rounds up', 'Estimate: 1 significant figure'],
        examples: [
          { example: 'Round 0.004582 to three significant figures.', solution: '0.00458 (the fourth digit 2 < 5).' },
          { example: 'Estimate 38.7 · 4.92.', solution: '≈ 40 · 5 = 200 (exact value 190.404).' },
        ],
        commonMistakes: [
          { mistake: '0.004582 to 3 s.f. = 0.005', fix: 'The zeros before the 4 do not count: 0.00458.' },
          { mistake: '45 671 to 3 s.f. = 457', fix: 'Keep the place value with zeros: 45 700.' },
        ],
        practice: [
          { problem: 'Round 45 671 to 3 significant figures.', solution: '45 700', steps: ['The fourth digit 7 ≥ 5.', '45 700.'] },
          { problem: 'Round 3.14159 to 2 decimal places.', solution: '3.14', steps: ['The third decimal 1 < 5.', '3.14.'] },
          { problem: 'Estimate 612 ÷ 29.8.', solution: '≈ 20', steps: ['600 ÷ 30.', '≈ 20.'] },
        ],
      },
      de: {
        title: 'Stellenwert und Runden',
        objectives: ['Auf eine Anzahl von Dezimalen und gültigen Ziffern runden.', 'Ergebnisse durch Runden auf eine gültige Ziffer überschlagen.'],
        theory: 'Gültige Ziffern zählt man ab der ersten Ziffer ungleich null. Bei 0,004582 sind die gültigen Ziffern 4, 5, 8, 2; auf 3 gültige Ziffern: 0,00458 (die vierte Ziffer 2 < 5). 45 671 auf 3 gültige Ziffern: 45 700 (die Nullen halten den Stellenwert).\n\nBeim Runden auf Dezimalen zählt man die Stellen nach dem Komma: 3,14159 auf 2 Dezimalen = 3,14.\n\nÜberschlag: Jede Zahl auf eine gültige Ziffer runden und im Kopf rechnen: 38,7 · 4,92 ≈ 40 · 5 = 200. Der Überschlag zeigt, ob das Taschenrechner-Ergebnis plausibel ist.',
        keyPoints: ['Gültige Ziffern beginnen bei der ersten Ziffer ≠ 0', 'Folgeziffer ≥ 5 → aufrunden', 'Überschlag: 1 gültige Ziffer'],
        examples: [
          { example: 'Runden Sie 0,004582 auf drei gültige Ziffern.', solution: '0,00458 (die vierte Ziffer 2 < 5).' },
          { example: 'Überschlagen Sie 38,7 · 4,92.', solution: '≈ 40 · 5 = 200 (genau 190,404).' },
        ],
        commonMistakes: [
          { mistake: '0,004582 auf 3 gültige Ziffern = 0,005', fix: 'Die Nullen vor der 4 zählen nicht: 0,00458.' },
          { mistake: '45 671 auf 3 gültige Ziffern = 457', fix: 'Den Stellenwert mit Nullen erhalten: 45 700.' },
        ],
        practice: [
          { problem: 'Runden Sie 45 671 auf 3 gültige Ziffern.', solution: '45 700', steps: ['Die vierte Ziffer 7 ≥ 5.', '45 700.'] },
          { problem: 'Runden Sie 3,14159 auf 2 Dezimalen.', solution: '3,14', steps: ['Die dritte Dezimale 1 < 5.', '3,14.'] },
          { problem: 'Überschlagen Sie 612 : 29,8.', solution: '≈ 20', steps: ['600 : 30.', '≈ 20.'] },
        ],
      },
    },

    // ───────── 2. Operations and order
    {
      slug: 'g10-number-operations-operations',
      noVisual: 'The order of operations is shown step by step in the worked examples.',
      answers: {
        examples: [[['2^3 - 4 * (3 - 5)^2 / 8', 6]], [['3.2e5 * 2.5e-2', 8000, 1e-9, '8 · 10³']]],
        practice: [[['-(2^2) + (-3)^2', 5]], [['sqrt(36 + 64) - sqrt(36)', 4]], [['6e8 / 1.5e3', 400000, 1e-9, '4 · 10⁵']]],
      },
      al: {
        title: 'Veprimet dhe radha e tyre',
        objectives: ['Të llogaritni shprehje me fuqi, rrënjë, kllapa dhe numra negativë.', 'Të veproni me numra në trajtë shkencore.'],
        theory: 'Radha e veprimeve: kllapat (dhe vija e thyesës, shenja e rrënjës), fuqitë dhe rrënjët, shumëzimi dhe pjesëtimi nga e majta, mbledhja dhe zbritja nga e majta.\n\nKujdes me shenjat: −2² = −4, ndërsa (−2)² = 4. Rrënja e shumës llogaritet pasi të mblidhet: √(36 + 64) = √100 = 10.\n\nTrajta shkencore: shumëzojmë numrat dhe mbledhim eksponentët; pastaj e rregullojmë numrin në [1, 10). (3,2 · 10⁵) · (2,5 · 10⁻²) = 8 · 10³.',
        keyPoints: ['Kllapat → fuqitë/rrënjët → · : → + −', '−a² = −(a²)', '(a · 10ᵐ)(b · 10ⁿ) = ab · 10ᵐ⁺ⁿ'],
        examples: [
          { example: 'Llogaritni 2³ − 4 · (3 − 5)² : 8.', solution: '(−2)² = 4; 4 · 4 : 8 = 2; 8 − 2 = 6.' },
          { example: 'Llogaritni (3,2 · 10⁵) · (2,5 · 10⁻²).', solution: '3,2 · 2,5 = 8; 10⁵⁻² = 10³: 8 · 10³ = 8 000.' },
        ],
        commonMistakes: [
          { mistake: '2³ − 4 · 4 : 8 = (8 − 4) · 4 : 8', fix: 'Shumëzimi dhe pjesëtimi bëhen para zbritjes.' },
          { mistake: '√(36 + 64) = 6 + 8', fix: 'Fillimisht mblidhet nën rrënjë: √100 = 10.' },
        ],
        practice: [
          { problem: 'Llogaritni −2² + (−3)².', solution: '5', steps: ['−2² = −4; (−3)² = 9.', '−4 + 9 = 5.'] },
          { problem: 'Llogaritni √(36 + 64) − √36.', solution: '4', steps: ['√100 = 10; √36 = 6.', '10 − 6 = 4.'] },
          { problem: 'Llogaritni (6 · 10⁸) : (1,5 · 10³).', solution: '4 · 10⁵', steps: ['6 : 1,5 = 4; 10⁸⁻³ = 10⁵.', '4 · 10⁵ (= 400 000).'] },
        ],
      },
      en: {
        title: 'Operations and their order',
        objectives: ['Evaluate expressions with powers, roots, brackets and negative numbers.', 'Calculate with numbers in standard form.'],
        theory: 'Order of operations: brackets (also a fraction bar and a root sign), powers and roots, multiplication and division from the left, addition and subtraction from the left.\n\nWatch the signs: −2² = −4, but (−2)² = 4. The root of a sum is taken after adding: √(36 + 64) = √100 = 10.\n\nStandard form: multiply the numbers and add the exponents; then adjust the number into [1, 10). (3.2 · 10⁵) · (2.5 · 10⁻²) = 8 · 10³.',
        keyPoints: ['Brackets → powers/roots → · ÷ → + −', '−a² = −(a²)', '(a · 10ᵐ)(b · 10ⁿ) = ab · 10ᵐ⁺ⁿ'],
        examples: [
          { example: 'Work out 2³ − 4 · (3 − 5)² ÷ 8.', solution: '(−2)² = 4; 4 · 4 ÷ 8 = 2; 8 − 2 = 6.' },
          { example: 'Work out (3.2 · 10⁵) · (2.5 · 10⁻²).', solution: '3.2 · 2.5 = 8; 10⁵⁻² = 10³: 8 · 10³ = 8 000.' },
        ],
        commonMistakes: [
          { mistake: '2³ − 4 · 4 ÷ 8 = (8 − 4) · 4 ÷ 8', fix: 'Multiplication and division come before subtraction.' },
          { mistake: '√(36 + 64) = 6 + 8', fix: 'Add under the root first: √100 = 10.' },
        ],
        practice: [
          { problem: 'Work out −2² + (−3)².', solution: '5', steps: ['−2² = −4; (−3)² = 9.', '−4 + 9 = 5.'] },
          { problem: 'Work out √(36 + 64) − √36.', solution: '4', steps: ['√100 = 10; √36 = 6.', '10 − 6 = 4.'] },
          { problem: 'Work out (6 · 10⁸) ÷ (1.5 · 10³).', solution: '4 · 10⁵', steps: ['6 ÷ 1.5 = 4; 10⁸⁻³ = 10⁵.', '4 · 10⁵ (= 400 000).'] },
        ],
      },
      de: {
        title: 'Rechenarten und Reihenfolge',
        objectives: ['Terme mit Potenzen, Wurzeln, Klammern und negativen Zahlen berechnen.', 'Mit Zahlen in wissenschaftlicher Schreibweise rechnen.'],
        theory: 'Rechenreihenfolge: Klammern (auch Bruchstrich und Wurzelzeichen), Potenzen und Wurzeln, Punktrechnung von links, Strichrechnung von links.\n\nAuf Vorzeichen achten: −2² = −4, aber (−2)² = 4. Die Wurzel einer Summe zieht man nach dem Addieren: √(36 + 64) = √100 = 10.\n\nWissenschaftliche Schreibweise: Zahlen multiplizieren, Exponenten addieren; dann die Zahl in [1, 10) bringen. (3,2 · 10⁵) · (2,5 · 10⁻²) = 8 · 10³.',
        keyPoints: ['Klammern → Potenzen/Wurzeln → · : → + −', '−a² = −(a²)', '(a · 10ᵐ)(b · 10ⁿ) = ab · 10ᵐ⁺ⁿ'],
        examples: [
          { example: 'Berechnen Sie 2³ − 4 · (3 − 5)² : 8.', solution: '(−2)² = 4; 4 · 4 : 8 = 2; 8 − 2 = 6.' },
          { example: 'Berechnen Sie (3,2 · 10⁵) · (2,5 · 10⁻²).', solution: '3,2 · 2,5 = 8; 10⁵⁻² = 10³: 8 · 10³ = 8 000.' },
        ],
        commonMistakes: [
          { mistake: '2³ − 4 · 4 : 8 = (8 − 4) · 4 : 8', fix: 'Punkt- vor Strichrechnung.' },
          { mistake: '√(36 + 64) = 6 + 8', fix: 'Zuerst unter der Wurzel addieren: √100 = 10.' },
        ],
        practice: [
          { problem: 'Berechnen Sie −2² + (−3)².', solution: '5', steps: ['−2² = −4; (−3)² = 9.', '−4 + 9 = 5.'] },
          { problem: 'Berechnen Sie √(36 + 64) − √36.', solution: '4', steps: ['√100 = 10; √36 = 6.', '10 − 6 = 4.'] },
          { problem: 'Berechnen Sie (6 · 10⁸) : (1,5 · 10³).', solution: '4 · 10⁵', steps: ['6 : 1,5 = 4; 10⁸⁻³ = 10⁵.', '4 · 10⁵ (= 400 000).'] },
        ],
      },
    },
  ],
};
