// Grade 11 · Theme 9: Sequences (April–May)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g11-sequences',
  i18n: {
    al: { title: 'Vargjet', description: 'Progresioni aritmetik dhe shuma e tij, vargjet kuadratike me ndryshimet e dyta, vargjet gjeometrike dhe vargje të veçanta.' },
    en: { title: 'Sequences', description: 'Arithmetic sequences and their sums, quadratic sequences with second differences, geometric and special sequences.' },
    de: { title: 'Folgen', description: 'Arithmetische Folgen und ihre Summen, quadratische Folgen mit zweiten Differenzen, geometrische und besondere Folgen.' },
  },
  lessons: [
    // ───────── 1. Arithmetic sequences
    {
      slug: 'g11-sequences-arithmetic',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'n', cells: ['1', '2', '3', '4', '5'] },
          { head: alt('kufiza', 'term', 'Glied'), cells: ['5', '9', '13', '17', '21'] },
          { head: alt('ndryshimi', 'difference', 'Differenz'), cells: ['', '+4', '+4', '+4', '+4'] },
        ],
        caption: alt('Ndryshimi d = 4 është konstant: aₙ = 4n + 1.', 'The difference d = 4 is constant: aₙ = 4n + 1.', 'Die Differenz d = 4 ist konstant: aₙ = 4n + 1.'),
        alt: alt('Tabelë me kufizat 5, 9, 13, 17, 21 dhe ndryshimin +4.', 'Table of the terms 5, 9, 13, 17, 21 with the difference +4.', 'Tabelle der Glieder 5, 9, 13, 17, 21 mit der Differenz +4.'),
      }],
      answers: {
        examples: [[['4*30 + 1', 121]], [['(99 - 1) / 4', 24.5]]],
        practice: [[['23 - 3*1', 20]], [['10/2 * (2*5 + 9*4)', 230]], [['(81 - 1) / 4', 20]]],
      },
      al: {
        title: 'Progresioni aritmetik',
        objectives: ['Të gjeni kufizën e n-të të një progresioni aritmetik.', 'Të llogaritni shumën e n kufizave të para.'],
        theory: 'Në progresionin aritmetik çdo kufizë fitohet duke shtuar të njëjtin ndryshim d. Kufiza e n-të: aₙ = a₁ + (n − 1)d.\nPër 5, 9, 13, 17, …: a₁ = 5, d = 4 → aₙ = 5 + 4(n − 1) = 4n + 1.\n\nPër të kontrolluar nëse një numër është kufizë, zgjidhim aₙ = numri: n duhet të jetë numër natyror.\n\nShuma e n kufizave të para: Sₙ = n/2 · (2a₁ + (n − 1)d) = n/2 · (a₁ + aₙ).',
        keyPoints: ['aₙ = a₁ + (n − 1)d', 'n duhet të jetë numër natyror', 'Sₙ = n/2 · (a₁ + aₙ)'],
        examples: [
          { example: 'Gjeni kufizën e n-të dhe kufizën e 30-të të 5, 9, 13, 17, …', solution: 'aₙ = 4n + 1; a₃₀ = 4 · 30 + 1 = 121.' },
          { example: 'A është 99 kufizë e vargut 4n + 1?', solution: '4n + 1 = 99 → n = 24,5, jo numër natyror → jo.' },
        ],
        commonMistakes: [
          { mistake: 'Kufiza e n-të e 5, 9, 13 shkruhet n + 4.', fix: 'Ndryshimi 4 shkon para n: 4n, pastaj korrigjohet me +1.' },
          { mistake: 'Te vargu zbritës d merret pozitiv.', fix: 'Kur kufizat zvogëlohen, d është negativ: 20, 17, 14 → d = −3.' },
        ],
        practice: [
          { problem: 'Gjeni kufizën e n-të të 20, 17, 14, 11, …', solution: 'aₙ = 23 − 3n', steps: ['a₁ = 20, d = −3.', 'aₙ = 20 − 3(n − 1) = 23 − 3n.'] },
          { problem: 'Sa është shuma e 10 kufizave të para të 5, 9, 13, …?', solution: '230', steps: ['S₁₀ = 10/2 · (2 · 5 + 9 · 4).', '= 5 · 46 = 230.'] },
          { problem: 'Cila kufizë e vargut 4n + 1 është 81?', solution: 'e 20-ta', steps: ['4n + 1 = 81 → 4n = 80.', 'n = 20.'] },
        ],
      },
      en: {
        title: 'Arithmetic sequences',
        objectives: ['Find the nth term of an arithmetic sequence.', 'Work out the sum of the first n terms.'],
        theory: 'In an arithmetic sequence each term is found by adding the same difference d. The nth term: aₙ = a₁ + (n − 1)d.\nFor 5, 9, 13, 17, …: a₁ = 5, d = 4 → aₙ = 5 + 4(n − 1) = 4n + 1.\n\nTo check whether a number is a term, solve aₙ = number: n must be a whole number.\n\nSum of the first n terms: Sₙ = n/2 · (2a₁ + (n − 1)d) = n/2 · (a₁ + aₙ).',
        keyPoints: ['aₙ = a₁ + (n − 1)d', 'n must be a whole number', 'Sₙ = n/2 · (a₁ + aₙ)'],
        examples: [
          { example: 'Find the nth term and the 30th term of 5, 9, 13, 17, …', solution: 'aₙ = 4n + 1; a₃₀ = 4 · 30 + 1 = 121.' },
          { example: 'Is 99 a term of the sequence 4n + 1?', solution: '4n + 1 = 99 → n = 24.5, not a whole number → no.' },
        ],
        commonMistakes: [
          { mistake: 'The nth term of 5, 9, 13 is written n + 4.', fix: 'The difference 4 goes in front of n: 4n, then adjust with +1.' },
          { mistake: 'In a decreasing sequence d is taken as positive.', fix: 'When the terms go down, d is negative: 20, 17, 14 → d = −3.' },
        ],
        practice: [
          { problem: 'Find the nth term of 20, 17, 14, 11, …', solution: 'aₙ = 23 − 3n', steps: ['a₁ = 20, d = −3.', 'aₙ = 20 − 3(n − 1) = 23 − 3n.'] },
          { problem: 'What is the sum of the first 10 terms of 5, 9, 13, …?', solution: '230', steps: ['S₁₀ = 10/2 · (2 · 5 + 9 · 4).', '= 5 · 46 = 230.'] },
          { problem: 'Which term of 4n + 1 is 81?', solution: 'the 20th', steps: ['4n + 1 = 81 → 4n = 80.', 'n = 20.'] },
        ],
      },
      de: {
        title: 'Arithmetische Folgen',
        objectives: ['Das n-te Glied einer arithmetischen Folge bestimmen.', 'Die Summe der ersten n Glieder berechnen.'],
        theory: 'In einer arithmetischen Folge entsteht jedes Glied durch Addieren derselben Differenz d. Das n-te Glied: aₙ = a₁ + (n − 1)d.\nFür 5, 9, 13, 17, …: a₁ = 5, d = 4 → aₙ = 5 + 4(n − 1) = 4n + 1.\n\nOb eine Zahl ein Glied ist, prüft man mit aₙ = Zahl: n muss eine natürliche Zahl sein.\n\nSumme der ersten n Glieder: Sₙ = n/2 · (2a₁ + (n − 1)d) = n/2 · (a₁ + aₙ).',
        keyPoints: ['aₙ = a₁ + (n − 1)d', 'n muss natürlich sein', 'Sₙ = n/2 · (a₁ + aₙ)'],
        examples: [
          { example: 'Bestimmen Sie das n-te und das 30. Glied von 5, 9, 13, 17, …', solution: 'aₙ = 4n + 1; a₃₀ = 4 · 30 + 1 = 121.' },
          { example: 'Ist 99 ein Glied der Folge 4n + 1?', solution: '4n + 1 = 99 → n = 24,5, keine natürliche Zahl → nein.' },
        ],
        commonMistakes: [
          { mistake: 'Das n-te Glied von 5, 9, 13 wird als n + 4 geschrieben.', fix: 'Die Differenz 4 steht vor n: 4n, dann mit +1 anpassen.' },
          { mistake: 'Bei einer fallenden Folge wird d positiv genommen.', fix: 'Werden die Glieder kleiner, ist d negativ: 20, 17, 14 → d = −3.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie das n-te Glied von 20, 17, 14, 11, …', solution: 'aₙ = 23 − 3n', steps: ['a₁ = 20, d = −3.', 'aₙ = 20 − 3(n − 1) = 23 − 3n.'] },
          { problem: 'Wie groß ist die Summe der ersten 10 Glieder von 5, 9, 13, …?', solution: '230', steps: ['S₁₀ = 10/2 · (2 · 5 + 9 · 4).', '= 5 · 46 = 230.'] },
          { problem: 'Das wievielte Glied von 4n + 1 ist 81?', solution: 'das 20.', steps: ['4n + 1 = 81 → 4n = 80.', 'n = 20.'] },
        ],
      },
    },
    // ───────── 2. Quadratic sequences
    {
      slug: 'g11-sequences-quadratic-sequences',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'n', cells: ['1', '2', '3', '4', '5'] },
          { head: alt('kufiza', 'term', 'Glied'), cells: ['2', '5', '10', '17', '26'] },
          { head: alt('ndryshimi 1', '1st difference', '1. Differenz'), cells: ['', '3', '5', '7', '9'] },
          { head: alt('ndryshimi 2', '2nd difference', '2. Differenz'), cells: ['', '', '2', '2', '2'] },
        ],
        highlight: [[3, 2], [3, 3], [3, 4]],
        caption: alt('Ndryshimi i dytë 2 është konstant → koeficienti i n² është 2 : 2 = 1; kufiza e n-të n² + 1.', 'The second difference 2 is constant → the coefficient of n² is 2 ÷ 2 = 1; nth term n² + 1.', 'Die zweite Differenz 2 ist konstant → Koeffizient von n² ist 2 : 2 = 1; n-tes Glied n² + 1.'),
        alt: alt('Tabelë me kufizat 2, 5, 10, 17, 26, ndryshimet e para 3, 5, 7, 9 dhe të dytat 2.', 'Table of the terms 2, 5, 10, 17, 26, first differences 3, 5, 7, 9 and second differences 2.', 'Tabelle der Glieder 2, 5, 10, 17, 26 mit den ersten Differenzen 3, 5, 7, 9 und den zweiten Differenzen 2.'),
      }],
      answers: {
        examples: [[['10^2 + 1', 101]], [['5^2 + 2*5', 35]]],
        practice: [[['6^2 + 1', 37]], [['2 * 4^2', 32]], [['5^2 + 3', 28]]],
      },
      al: {
        title: 'Vargjet kuadratike',
        objectives: ['Të dalloni vargun kuadratik nga ndryshimet e dyta konstante.', 'Të gjeni kufizën e n-të në formën an² + bn + c.'],
        theory: 'Kur ndryshimet e para nuk janë konstante, por ndryshimet e dyta janë, vargu është kuadratik: aₙ = an² + bn + c.\n\nHapat:\n1. a = ndryshimi i dytë : 2.\n2. Zbritni an² nga çdo kufizë; mbetet një varg linear bn + c.\n3. Gjeni bn + c si te progresioni aritmetik.\n\n2, 5, 10, 17: ndryshimi i dytë 2 → a = 1; kufiza − n² = 1, 1, 1, 1 → aₙ = n² + 1.',
        keyPoints: ['Ndryshimet e dyta konstante → kuadratik', 'a = ndryshimi i dytë : 2', 'Zbrit an², pastaj gjej pjesën lineare'],
        examples: [
          { example: 'Gjeni kufizën e n-të dhe të 10-tën të 2, 5, 10, 17, …', solution: 'Ndryshimi i dytë 2 → n²; mbetja 1 → aₙ = n² + 1; a₁₀ = 101.' },
          { example: 'Gjeni kufizën e n-të të 3, 8, 15, 24, 35.', solution: 'Ndryshimi i dytë 2 → n²; mbetja 2, 4, 6, 8, 10 = 2n → aₙ = n² + 2n (kontroll: 25 + 10 = 35).' },
        ],
        commonMistakes: [
          { mistake: 'Vargu 2, 5, 10, 17 trajtohet si aritmetik.', fix: 'Ndryshimet 3, 5, 7 nuk janë konstante; kontrolloni ndryshimet e dyta.' },
          { mistake: 'Koeficienti i n² merret i barabartë me ndryshimin e dytë.', fix: 'Ai është gjysma e ndryshimit të dytë.' },
        ],
        practice: [
          { problem: 'Sa është kufiza e radhës e 2, 5, 10, 17, 26?', solution: '37', steps: ['Ndryshimi i radhës 11 (ose n² + 1 për n = 6).', '26 + 11 = 37.'] },
          { problem: 'Gjeni kufizën e n-të të 2, 8, 18, 32, …', solution: 'aₙ = 2n²', steps: ['Ndryshimi i dytë 4 → a = 2.', 'Kufiza − 2n² = 0 → aₙ = 2n² (2 · 16 = 32).'] },
          { problem: 'Gjeni kufizën e n-të të 4, 7, 12, 19, … dhe kufizën e 5-të.', solution: 'aₙ = n² + 3; a₅ = 28', steps: ['Ndryshimi i dytë 2 → n²; mbetja 3, 3, 3, 3.', 'a₅ = 25 + 3 = 28.'] },
        ],
      },
      en: {
        title: 'Quadratic sequences',
        objectives: ['Recognise a quadratic sequence from constant second differences.', 'Find the nth term in the form an² + bn + c.'],
        theory: 'When the first differences are not constant but the second differences are, the sequence is quadratic: aₙ = an² + bn + c.\n\nSteps:\n1. a = second difference ÷ 2.\n2. Subtract an² from each term; a linear sequence bn + c is left.\n3. Find bn + c as for an arithmetic sequence.\n\n2, 5, 10, 17: second difference 2 → a = 1; term − n² = 1, 1, 1, 1 → aₙ = n² + 1.',
        keyPoints: ['Constant second differences → quadratic', 'a = second difference ÷ 2', 'Subtract an², then find the linear part'],
        examples: [
          { example: 'Find the nth term and the 10th term of 2, 5, 10, 17, …', solution: 'Second difference 2 → n²; remainder 1 → aₙ = n² + 1; a₁₀ = 101.' },
          { example: 'Find the nth term of 3, 8, 15, 24, 35.', solution: 'Second difference 2 → n²; remainder 2, 4, 6, 8, 10 = 2n → aₙ = n² + 2n (check: 25 + 10 = 35).' },
        ],
        commonMistakes: [
          { mistake: 'The sequence 2, 5, 10, 17 is treated as arithmetic.', fix: 'The differences 3, 5, 7 are not constant; check the second differences.' },
          { mistake: 'The coefficient of n² is taken equal to the second difference.', fix: 'It is half the second difference.' },
        ],
        practice: [
          { problem: 'What is the next term of 2, 5, 10, 17, 26?', solution: '37', steps: ['The next difference is 11 (or n² + 1 for n = 6).', '26 + 11 = 37.'] },
          { problem: 'Find the nth term of 2, 8, 18, 32, …', solution: 'aₙ = 2n²', steps: ['Second difference 4 → a = 2.', 'Term − 2n² = 0 → aₙ = 2n² (2 · 16 = 32).'] },
          { problem: 'Find the nth term of 4, 7, 12, 19, … and the 5th term.', solution: 'aₙ = n² + 3; a₅ = 28', steps: ['Second difference 2 → n²; remainder 3, 3, 3, 3.', 'a₅ = 25 + 3 = 28.'] },
        ],
      },
      de: {
        title: 'Quadratische Folgen',
        objectives: ['Eine quadratische Folge an konstanten zweiten Differenzen erkennen.', 'Das n-te Glied in der Form an² + bn + c bestimmen.'],
        theory: 'Sind die ersten Differenzen nicht konstant, die zweiten aber schon, ist die Folge quadratisch: aₙ = an² + bn + c.\n\nSchritte:\n1. a = zweite Differenz : 2.\n2. an² von jedem Glied abziehen; übrig bleibt eine lineare Folge bn + c.\n3. bn + c wie bei einer arithmetischen Folge bestimmen.\n\n2, 5, 10, 17: zweite Differenz 2 → a = 1; Glied − n² = 1, 1, 1, 1 → aₙ = n² + 1.',
        keyPoints: ['Konstante zweite Differenzen → quadratisch', 'a = zweite Differenz : 2', 'an² abziehen, dann linearen Teil bestimmen'],
        examples: [
          { example: 'Bestimmen Sie das n-te und das 10. Glied von 2, 5, 10, 17, …', solution: 'Zweite Differenz 2 → n²; Rest 1 → aₙ = n² + 1; a₁₀ = 101.' },
          { example: 'Bestimmen Sie das n-te Glied von 3, 8, 15, 24, 35.', solution: 'Zweite Differenz 2 → n²; Rest 2, 4, 6, 8, 10 = 2n → aₙ = n² + 2n (Probe: 25 + 10 = 35).' },
        ],
        commonMistakes: [
          { mistake: 'Die Folge 2, 5, 10, 17 wird als arithmetisch behandelt.', fix: 'Die Differenzen 3, 5, 7 sind nicht konstant; die zweiten Differenzen prüfen.' },
          { mistake: 'Der Koeffizient von n² wird gleich der zweiten Differenz gesetzt.', fix: 'Er ist die Hälfte der zweiten Differenz.' },
        ],
        practice: [
          { problem: 'Wie lautet das nächste Glied von 2, 5, 10, 17, 26?', solution: '37', steps: ['Die nächste Differenz ist 11 (oder n² + 1 für n = 6).', '26 + 11 = 37.'] },
          { problem: 'Bestimmen Sie das n-te Glied von 2, 8, 18, 32, …', solution: 'aₙ = 2n²', steps: ['Zweite Differenz 4 → a = 2.', 'Glied − 2n² = 0 → aₙ = 2n² (2 · 16 = 32).'] },
          { problem: 'Bestimmen Sie das n-te Glied von 4, 7, 12, 19, … und das 5. Glied.', solution: 'aₙ = n² + 3; a₅ = 28', steps: ['Zweite Differenz 2 → n²; Rest 3, 3, 3, 3.', 'a₅ = 25 + 3 = 28.'] },
        ],
      },
    },
    // ───────── 3. Special sequences
    {
      slug: 'g11-sequences-special-sequences',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Katrorët n²', 'Squares n²', 'Quadratzahlen n²'), cells: ['1', '4', '9', '16', '25'] },
          { head: alt('Kubet n³', 'Cubes n³', 'Kubikzahlen n³'), cells: ['1', '8', '27', '64', '125'] },
          { head: alt('Trekëndore', 'Triangular', 'Dreieckszahlen'), cells: ['1', '3', '6', '10', '15'] },
          { head: 'Fibonacci', cells: ['1', '1', '2', '3', '5'] },
          { head: alt('Gjeometrik (r = 2)', 'Geometric (r = 2)', 'Geometrisch (q = 2)'), cells: ['3', '6', '12', '24', '48'] },
        ],
        caption: alt('Trekëndoret: n(n + 1)/2; Fibonacci: çdo kufizë është shuma e dy të mëparshmeve; gjeometriku: shumëzim me r.', 'Triangular: n(n + 1)/2; Fibonacci: each term is the sum of the two before; geometric: multiply by r.', 'Dreieckszahlen: n(n + 1)/2; Fibonacci: jedes Glied ist die Summe der zwei vorigen; geometrisch: mit q multiplizieren.'),
        alt: alt('Tabelë me pesë kufizat e para të katrorëve, kubeve, numrave trekëndorë, Fibonaccit dhe të vargut gjeometrik 3, 6, 12, 24, 48.', 'Table of the first five squares, cubes, triangular numbers, Fibonacci numbers and the geometric sequence 3, 6, 12, 24, 48.', 'Tabelle der ersten fünf Quadratzahlen, Kubikzahlen, Dreieckszahlen, Fibonacci-Zahlen und der geometrischen Folge 3, 6, 12, 24, 48.'),
      }],
      answers: {
        examples: [[['3 * 2^7', 384]], [['10 * 11 / 2', 55]]],
        practice: [[['8 + 13', 21], ['13 + 21', 34]], [['9 / 3', 3]], [['4^3', 64]]],
      },
      al: {
        title: 'Vargje të veçanta',
        objectives: ['Të njihni katrorët, kubet, numrat trekëndorë dhe vargun e Fibonaccit.', 'Të gjeni kufizën e n-të të një vargu gjeometrik.'],
        theory: 'Disa vargje shfaqen shpesh:\n• katrorët n²: 1, 4, 9, 16, …; kubet n³: 1, 8, 27, 64, …;\n• numrat trekëndorë n(n + 1)/2: 1, 3, 6, 10, 15, …;\n• Fibonacci: 1, 1, 2, 3, 5, 8, … (çdo kufizë = shuma e dy të mëparshmeve).\n\nNë vargun gjeometrik çdo kufizë shumëzohet me të njëjtin herës r: aₙ = a₁ · rⁿ⁻¹. Për 3, 6, 12, 24: r = 2, a₈ = 3 · 2⁷ = 384. Kur 0 < r < 1, kufizat zvogëlohen: 81, 27, 9 → r = 1/3.',
        keyPoints: ['Trekëndorët: n(n + 1)/2', 'Fibonacci: aₙ = aₙ₋₁ + aₙ₋₂', 'Gjeometrik: aₙ = a₁ · rⁿ⁻¹'],
        examples: [
          { example: 'Sa është kufiza e 8-të e 3, 6, 12, 24, …?', solution: 'r = 2; a₈ = 3 · 2⁷ = 3 · 128 = 384.' },
          { example: 'Sa është numri i 10-të trekëndor?', solution: '10 · 11 / 2 = 55.' },
        ],
        commonMistakes: [
          { mistake: 'Te vargu gjeometrik shtohet herësi.', fix: 'Herësi shumëzohet: 3, 6, 12, 24 (· 2), jo 3, 5, 7.' },
          { mistake: 'Kufiza e n-të e gjeometrikut shkruhet a₁ · rⁿ.', fix: 'Fuqia është n − 1: kufiza e parë ka r⁰ = 1.' },
        ],
        practice: [
          { problem: 'Vargu i Fibonaccit: …, 5, 8, 13. Cilat janë dy kufizat e radhës?', solution: '21 dhe 34', steps: ['8 + 13 = 21.', '13 + 21 = 34.'] },
          { problem: 'Vargu 81, 27, 9, … është gjeometrik. Sa është kufiza e radhës?', solution: '3', steps: ['r = 27/81 = 1/3.', '9 · 1/3 = 3.'] },
          { problem: 'Cili numër mbi 1 dhe nën 100 është njëkohësisht katror dhe kub?', solution: '64', steps: ['Kubet: 8, 27, 64.', '64 = 8² = 4³.'] },
        ],
      },
      en: {
        title: 'Special sequences',
        objectives: ['Know square, cube and triangular numbers and the Fibonacci sequence.', 'Find the nth term of a geometric sequence.'],
        theory: 'Some sequences turn up often:\n• squares n²: 1, 4, 9, 16, …; cubes n³: 1, 8, 27, 64, …;\n• triangular numbers n(n + 1)/2: 1, 3, 6, 10, 15, …;\n• Fibonacci: 1, 1, 2, 3, 5, 8, … (each term = the sum of the two before).\n\nIn a geometric sequence each term is multiplied by the same common ratio r: aₙ = a₁ · rⁿ⁻¹. For 3, 6, 12, 24: r = 2, a₈ = 3 · 2⁷ = 384. When 0 < r < 1 the terms get smaller: 81, 27, 9 → r = 1/3.',
        keyPoints: ['Triangular: n(n + 1)/2', 'Fibonacci: aₙ = aₙ₋₁ + aₙ₋₂', 'Geometric: aₙ = a₁ · rⁿ⁻¹'],
        examples: [
          { example: 'What is the 8th term of 3, 6, 12, 24, …?', solution: 'r = 2; a₈ = 3 · 2⁷ = 3 · 128 = 384.' },
          { example: 'What is the 10th triangular number?', solution: '10 · 11 / 2 = 55.' },
        ],
        commonMistakes: [
          { mistake: 'In a geometric sequence the ratio is added.', fix: 'The ratio multiplies: 3, 6, 12, 24 (· 2), not 3, 5, 7.' },
          { mistake: 'The nth term of a geometric sequence is written a₁ · rⁿ.', fix: 'The power is n − 1: the first term has r⁰ = 1.' },
        ],
        practice: [
          { problem: 'Fibonacci: …, 5, 8, 13. What are the next two terms?', solution: '21 and 34', steps: ['8 + 13 = 21.', '13 + 21 = 34.'] },
          { problem: 'The sequence 81, 27, 9, … is geometric. What is the next term?', solution: '3', steps: ['r = 27/81 = 1/3.', '9 · 1/3 = 3.'] },
          { problem: 'Which number above 1 and below 100 is both a square and a cube?', solution: '64', steps: ['Cubes: 8, 27, 64.', '64 = 8² = 4³.'] },
        ],
      },
      de: {
        title: 'Besondere Folgen',
        objectives: ['Quadrat-, Kubik- und Dreieckszahlen sowie die Fibonacci-Folge kennen.', 'Das n-te Glied einer geometrischen Folge bestimmen.'],
        theory: 'Manche Folgen begegnen einem oft:\n• Quadratzahlen n²: 1, 4, 9, 16, …; Kubikzahlen n³: 1, 8, 27, 64, …;\n• Dreieckszahlen n(n + 1)/2: 1, 3, 6, 10, 15, …;\n• Fibonacci: 1, 1, 2, 3, 5, 8, … (jedes Glied = Summe der zwei vorigen).\n\nIn einer geometrischen Folge wird jedes Glied mit demselben Quotienten q multipliziert: aₙ = a₁ · qⁿ⁻¹. Für 3, 6, 12, 24: q = 2, a₈ = 3 · 2⁷ = 384. Für 0 < q < 1 werden die Glieder kleiner: 81, 27, 9 → q = 1/3.',
        keyPoints: ['Dreieckszahlen: n(n + 1)/2', 'Fibonacci: aₙ = aₙ₋₁ + aₙ₋₂', 'Geometrisch: aₙ = a₁ · qⁿ⁻¹'],
        examples: [
          { example: 'Wie lautet das 8. Glied von 3, 6, 12, 24, …?', solution: 'q = 2; a₈ = 3 · 2⁷ = 3 · 128 = 384.' },
          { example: 'Wie lautet die 10. Dreieckszahl?', solution: '10 · 11 / 2 = 55.' },
        ],
        commonMistakes: [
          { mistake: 'Bei einer geometrischen Folge wird der Quotient addiert.', fix: 'Der Quotient wird multipliziert: 3, 6, 12, 24 (· 2), nicht 3, 5, 7.' },
          { mistake: 'Das n-te Glied wird als a₁ · qⁿ geschrieben.', fix: 'Der Exponent ist n − 1: Das erste Glied hat q⁰ = 1.' },
        ],
        practice: [
          { problem: 'Fibonacci: …, 5, 8, 13. Wie lauten die nächsten zwei Glieder?', solution: '21 und 34', steps: ['8 + 13 = 21.', '13 + 21 = 34.'] },
          { problem: 'Die Folge 81, 27, 9, … ist geometrisch. Wie lautet das nächste Glied?', solution: '3', steps: ['q = 27/81 = 1/3.', '9 · 1/3 = 3.'] },
          { problem: 'Welche Zahl zwischen 1 und 100 ist zugleich Quadrat- und Kubikzahl?', solution: '64', steps: ['Kubikzahlen: 8, 27, 64.', '64 = 8² = 4³.'] },
        ],
      },
    },
  ],
};
