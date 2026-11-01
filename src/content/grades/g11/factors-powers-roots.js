// Grade 11 · Theme 1: Factors, powers and roots (September)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g11-factors-powers-roots',
  i18n: {
    al: { title: 'Faktorët, fuqitë dhe rrënjët', description: 'Zbërthimi në faktorë të thjeshtë, PMP dhe SHVP, fuqitë me tregues thyesor e negativ dhe numrat irracionalë.' },
    en: { title: 'Factors, powers and roots', description: 'Prime factorisation, GCD and LCM, fractional and negative indices, and irrational numbers.' },
    de: { title: 'Teiler, Potenzen und Wurzeln', description: 'Primfaktorzerlegung, ggT und kgV, Potenzen mit gebrochenen und negativen Exponenten sowie irrationale Zahlen.' },
  },
  lessons: [
    // ───────── 1. Factors and multiples
    {
      slug: 'g11-factors-powers-roots-factors-multiples',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Numri', 'Number', 'Zahl'), cells: ['84', '120'] },
          { head: alt('Faktorët e thjeshtë', 'Prime factors', 'Primfaktoren'), cells: ['2² · 3 · 7', '2³ · 3 · 5'] },
        ],
        highlight: [[1, 0], [1, 1]],
        caption: alt('PMP = 2² · 3 = 12 (fuqitë më të vogla të përbashkëta); SHVP = 2³ · 3 · 5 · 7 = 840 (fuqitë më të mëdha).', 'GCD = 2² · 3 = 12 (lowest common powers); LCM = 2³ · 3 · 5 · 7 = 840 (highest powers).', 'ggT = 2² · 3 = 12 (kleinste gemeinsame Potenzen); kgV = 2³ · 3 · 5 · 7 = 840 (höchste Potenzen).'),
        alt: alt('Tabelë: 84 = 2² · 3 · 7 dhe 120 = 2³ · 3 · 5.', 'Table: 84 = 2² · 3 · 7 and 120 = 2³ · 3 · 5.', 'Tabelle: 84 = 2² · 3 · 7 und 120 = 2³ · 3 · 5.'),
      }],
      answers: {
        examples: [[['gcd(84, 120)', 12], ['lcm(84, 120)', 840]], [['lcm(12, 18)', 36]]],
        practice: [[['2^3 * 3^2 * 5', 360]], [['gcd(48, 180)', 12]], [['gcd(240, 180)', 60]]],
      },
      al: {
        title: 'Faktorët dhe shumëfishat',
        objectives: ['Ta zbërtheni një numër në faktorë të thjeshtë dhe ta shkruani me fuqi.', 'Të gjeni PMP dhe SHVP nga zbërthimi dhe t\'i përdorni në probleme.'],
        theory: 'Çdo numër natyror më i madh se 1 shkruhet në mënyrë të vetme si prodhim faktorësh të thjeshtë: 84 = 2² · 3 · 7, 120 = 2³ · 3 · 5.\n\nPMP (faktori më i madh i përbashkët): merren faktorët e përbashkët me fuqinë më të vogël → 2² · 3 = 12.\nSHVP (shumëfishi më i vogël i përbashkët): merren të gjithë faktorët me fuqinë më të madhe → 2³ · 3 · 5 · 7 = 840.\n\nKontroll: PMP · SHVP = 12 · 840 = 10 080 = 84 · 120. PMP përdoret për ndarje në pjesë të barabarta sa më të mëdha, SHVP për ngjarje që përsëriten bashkë.',
        keyPoints: ['PMP: faktorët e përbashkët, fuqia më e vogël', 'SHVP: të gjithë faktorët, fuqia më e madhe', 'PMP · SHVP = a · b'],
        examples: [
          { example: 'Gjeni PMP dhe SHVP të 84 dhe 120.', solution: '84 = 2² · 3 · 7, 120 = 2³ · 3 · 5 → PMP = 12, SHVP = 840.' },
          { example: 'Dy autobusë nisen bashkë; njëri çdo 12 min, tjetri çdo 18 min. Pas sa minutash nisen sërish bashkë?', solution: 'SHVP(12, 18): 12 = 2² · 3, 18 = 2 · 3² → 2² · 3² = 36 min.' },
        ],
        commonMistakes: [
          { mistake: 'SHVP merret si prodhimi 84 · 120.', fix: 'Prodhimi është shumëfish i përbashkët, por jo më i vogli; merrni fuqitë më të mëdha: 840.' },
          { mistake: 'Te PMP merren fuqitë më të mëdha.', fix: 'PMP duhet të pjesëtojë të dy numrat: fuqia më e vogël.' },
        ],
        practice: [
          { problem: 'Shkruajeni 360 si prodhim faktorësh të thjeshtë.', solution: '360 = 2³ · 3² · 5', steps: ['360 = 8 · 45 = 2³ · 9 · 5.', '360 = 2³ · 3² · 5.'] },
          { problem: 'Gjeni PMP(48, 180).', solution: '12', steps: ['48 = 2⁴ · 3, 180 = 2² · 3² · 5.', 'PMP = 2² · 3 = 12.'] },
          { problem: 'Dyshemeja 240 cm × 180 cm shtrohet me pllaka katrore sa më të mëdha pa i prerë. Sa është brinja e pllakës?', solution: '60 cm', steps: ['Brinja duhet të pjesëtojë 240 dhe 180.', 'PMP(240, 180) = 60 cm.'] },
        ],
      },
      en: {
        title: 'Factors and multiples',
        objectives: ['Write a number as a product of prime factors using powers.', 'Find the GCD and LCM from prime factors and use them in problems.'],
        theory: 'Every whole number greater than 1 can be written in exactly one way as a product of prime factors: 84 = 2² · 3 · 7, 120 = 2³ · 3 · 5.\n\nGCD (greatest common divisor): take the common primes with the lowest power → 2² · 3 = 12.\nLCM (lowest common multiple): take every prime with the highest power → 2³ · 3 · 5 · 7 = 840.\n\nCheck: GCD · LCM = 12 · 840 = 10 080 = 84 · 120. The GCD is used to split into the largest equal parts, the LCM for things that repeat together.',
        keyPoints: ['GCD: common primes, lowest power', 'LCM: all primes, highest power', 'GCD · LCM = a · b'],
        examples: [
          { example: 'Find the GCD and LCM of 84 and 120.', solution: '84 = 2² · 3 · 7, 120 = 2³ · 3 · 5 → GCD = 12, LCM = 840.' },
          { example: 'Two buses leave together; one every 12 min, the other every 18 min. After how many minutes do they leave together again?', solution: 'LCM(12, 18): 12 = 2² · 3, 18 = 2 · 3² → 2² · 3² = 36 min.' },
        ],
        commonMistakes: [
          { mistake: 'The LCM is taken as the product 84 · 120.', fix: 'The product is a common multiple, but not the lowest; take the highest powers: 840.' },
          { mistake: 'For the GCD the highest powers are taken.', fix: 'The GCD must divide both numbers: lowest power.' },
        ],
        practice: [
          { problem: 'Write 360 as a product of prime factors.', solution: '360 = 2³ · 3² · 5', steps: ['360 = 8 · 45 = 2³ · 9 · 5.', '360 = 2³ · 3² · 5.'] },
          { problem: 'Find GCD(48, 180).', solution: '12', steps: ['48 = 2⁴ · 3, 180 = 2² · 3² · 5.', 'GCD = 2² · 3 = 12.'] },
          { problem: 'A 240 cm × 180 cm floor is covered with the largest possible square tiles without cutting. What is the side of a tile?', solution: '60 cm', steps: ['The side must divide 240 and 180.', 'GCD(240, 180) = 60 cm.'] },
        ],
      },
      de: {
        title: 'Teiler und Vielfache',
        objectives: ['Eine Zahl in Primfaktoren zerlegen und mit Potenzen schreiben.', 'ggT und kgV aus der Primfaktorzerlegung bestimmen und in Aufgaben anwenden.'],
        theory: 'Jede natürliche Zahl größer als 1 lässt sich eindeutig als Produkt von Primfaktoren schreiben: 84 = 2² · 3 · 7, 120 = 2³ · 3 · 5.\n\nggT (größter gemeinsamer Teiler): gemeinsame Primfaktoren mit der kleinsten Potenz → 2² · 3 = 12.\nkgV (kleinstes gemeinsames Vielfaches): alle Primfaktoren mit der größten Potenz → 2³ · 3 · 5 · 7 = 840.\n\nProbe: ggT · kgV = 12 · 840 = 10 080 = 84 · 120. Den ggT braucht man zum Aufteilen in möglichst große gleiche Teile, das kgV für Vorgänge, die sich gemeinsam wiederholen.',
        keyPoints: ['ggT: gemeinsame Primfaktoren, kleinste Potenz', 'kgV: alle Primfaktoren, größte Potenz', 'ggT · kgV = a · b'],
        examples: [
          { example: 'Bestimmen Sie ggT und kgV von 84 und 120.', solution: '84 = 2² · 3 · 7, 120 = 2³ · 3 · 5 → ggT = 12, kgV = 840.' },
          { example: 'Zwei Busse fahren gleichzeitig ab; einer alle 12 min, der andere alle 18 min. Nach wie vielen Minuten fahren sie wieder gemeinsam ab?', solution: 'kgV(12, 18): 12 = 2² · 3, 18 = 2 · 3² → 2² · 3² = 36 min.' },
        ],
        commonMistakes: [
          { mistake: 'Als kgV wird das Produkt 84 · 120 genommen.', fix: 'Das Produkt ist ein gemeinsames Vielfaches, aber nicht das kleinste; größte Potenzen nehmen: 840.' },
          { mistake: 'Beim ggT werden die größten Potenzen genommen.', fix: 'Der ggT muss beide Zahlen teilen: kleinste Potenz.' },
        ],
        practice: [
          { problem: 'Zerlegen Sie 360 in Primfaktoren.', solution: '360 = 2³ · 3² · 5', steps: ['360 = 8 · 45 = 2³ · 9 · 5.', '360 = 2³ · 3² · 5.'] },
          { problem: 'Bestimmen Sie ggT(48, 180).', solution: '12', steps: ['48 = 2⁴ · 3, 180 = 2² · 3² · 5.', 'ggT = 2² · 3 = 12.'] },
          { problem: 'Ein Boden von 240 cm × 180 cm wird mit möglichst großen quadratischen Fliesen ohne Zuschnitt belegt. Wie lang ist eine Fliesenseite?', solution: '60 cm', steps: ['Die Seite muss 240 und 180 teilen.', 'ggT(240, 180) = 60 cm.'] },
        ],
      },
    },
    // ───────── 2. Powers and roots
    {
      slug: 'g11-factors-powers-roots-powers-roots',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'n', cells: ['−2', '−1', '0', '1/2', '1', '2', '3'] },
          { head: '4ⁿ', cells: ['1/16', '1/4', '1', '2', '4', '16', '64'] },
        ],
        highlight: [[1, 3]],
        caption: alt('Çdo hap +1 te treguesi shumëzon me 4; 4^(1/2) = √4 = 2.', 'Each step of +1 in the index multiplies by 4; 4^(1/2) = √4 = 2.', 'Jeder Schritt +1 im Exponenten multipliziert mit 4; 4^(1/2) = √4 = 2.'),
        alt: alt('Tabelë e fuqive të 4 për treguesit −2, −1, 0, 1/2, 1, 2, 3.', 'Table of powers of 4 for the indices −2, −1, 0, 1/2, 1, 2, 3.', 'Tabelle der Potenzen von 4 für die Exponenten −2, −1, 0, 1/2, 1, 2, 3.'),
      }],
      answers: {
        examples: [[['27^(2/3)', 9]], [['16^(-1/2)', 0.25, 0, '1/4']]],
        practice: [[['8^(1/3)', 2]], [['32^(3/5)', 8]], [['(1/9)^(-1/2)', 3]]],
      },
      al: {
        title: 'Fuqitë dhe rrënjët',
        objectives: ['Të llogaritni fuqi me tregues zero, negativ dhe thyesor.', 'Të përdorni lidhjen a^(m/n) = (ⁿ√a)ᵐ.'],
        theory: 'Rregullat e fuqive vlejnë për çdo tregues: aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ : aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ.\n\nPrej tyre dalin:\n• a⁰ = 1 (a ≠ 0);\n• a⁻ⁿ = 1/aⁿ (treguesi negativ jep të anasjelltën);\n• a^(1/n) = ⁿ√a dhe a^(m/n) = (ⁿ√a)ᵐ.\n\nTe treguesi thyesor nxjerrim së pari rrënjën (emëruesi), pastaj ngremë në fuqi (numëruesi): 27^(2/3) = (∛27)² = 3² = 9.',
        keyPoints: ['a⁰ = 1, a⁻ⁿ = 1/aⁿ', 'a^(1/n) = ⁿ√a', 'a^(m/n) = (ⁿ√a)ᵐ'],
        examples: [
          { example: 'Llogaritni 27^(2/3).', solution: '(∛27)² = 3² = 9.' },
          { example: 'Llogaritni 16^(−1/2).', solution: '1/16^(1/2) = 1/√16 = 1/4.' },
        ],
        commonMistakes: [
          { mistake: '27^(2/3) llogaritet si 27 · 2/3 = 18.', fix: 'Treguesi nuk shumëzohet me bazën: rrënja e tretë, pastaj katrori → 9.' },
          { mistake: '16^(−1/2) = −4.', fix: 'Treguesi negativ nuk e bën numrin negativ; jep të anasjelltën: 1/4.' },
        ],
        practice: [
          { problem: 'Llogaritni 8^(1/3).', solution: '2', steps: ['8^(1/3) = ∛8.', '= 2.'] },
          { problem: 'Llogaritni 32^(3/5).', solution: '8', steps: ['⁵√32 = 2.', '2³ = 8.'] },
          { problem: 'Llogaritni (1/9)^(−1/2).', solution: '3', steps: ['Treguesi negativ e kthen thyesën: 9^(1/2).', '√9 = 3.'] },
        ],
      },
      en: {
        title: 'Powers and roots',
        objectives: ['Work out powers with zero, negative and fractional indices.', 'Use a^(m/n) = (ⁿ√a)ᵐ.'],
        theory: 'The index laws hold for every index: aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ.\n\nFrom them:\n• a⁰ = 1 (a ≠ 0);\n• a⁻ⁿ = 1/aⁿ (a negative index gives the reciprocal);\n• a^(1/n) = ⁿ√a and a^(m/n) = (ⁿ√a)ᵐ.\n\nWith a fractional index take the root first (the denominator), then the power (the numerator): 27^(2/3) = (∛27)² = 3² = 9.',
        keyPoints: ['a⁰ = 1, a⁻ⁿ = 1/aⁿ', 'a^(1/n) = ⁿ√a', 'a^(m/n) = (ⁿ√a)ᵐ'],
        examples: [
          { example: 'Work out 27^(2/3).', solution: '(∛27)² = 3² = 9.' },
          { example: 'Work out 16^(−1/2).', solution: '1/16^(1/2) = 1/√16 = 1/4.' },
        ],
        commonMistakes: [
          { mistake: '27^(2/3) is worked out as 27 · 2/3 = 18.', fix: 'The index does not multiply the base: cube root, then square → 9.' },
          { mistake: '16^(−1/2) = −4.', fix: 'A negative index does not make the number negative; it gives the reciprocal: 1/4.' },
        ],
        practice: [
          { problem: 'Work out 8^(1/3).', solution: '2', steps: ['8^(1/3) = ∛8.', '= 2.'] },
          { problem: 'Work out 32^(3/5).', solution: '8', steps: ['⁵√32 = 2.', '2³ = 8.'] },
          { problem: 'Work out (1/9)^(−1/2).', solution: '3', steps: ['The negative index turns the fraction over: 9^(1/2).', '√9 = 3.'] },
        ],
      },
      de: {
        title: 'Potenzen und Wurzeln',
        objectives: ['Potenzen mit Exponent null, negativen und gebrochenen Exponenten berechnen.', 'Die Regel a^(m/n) = (ⁿ√a)ᵐ anwenden.'],
        theory: 'Die Potenzgesetze gelten für alle Exponenten: aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ : aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ.\n\nDaraus folgt:\n• a⁰ = 1 (a ≠ 0);\n• a⁻ⁿ = 1/aⁿ (ein negativer Exponent ergibt den Kehrwert);\n• a^(1/n) = ⁿ√a und a^(m/n) = (ⁿ√a)ᵐ.\n\nBei gebrochenen Exponenten zuerst die Wurzel ziehen (Nenner), dann potenzieren (Zähler): 27^(2/3) = (∛27)² = 3² = 9.',
        keyPoints: ['a⁰ = 1, a⁻ⁿ = 1/aⁿ', 'a^(1/n) = ⁿ√a', 'a^(m/n) = (ⁿ√a)ᵐ'],
        examples: [
          { example: 'Berechnen Sie 27^(2/3).', solution: '(∛27)² = 3² = 9.' },
          { example: 'Berechnen Sie 16^(−1/2).', solution: '1/16^(1/2) = 1/√16 = 1/4.' },
        ],
        commonMistakes: [
          { mistake: '27^(2/3) wird als 27 · 2/3 = 18 berechnet.', fix: 'Der Exponent multipliziert nicht die Basis: dritte Wurzel, dann quadrieren → 9.' },
          { mistake: '16^(−1/2) = −4.', fix: 'Ein negativer Exponent macht die Zahl nicht negativ, er ergibt den Kehrwert: 1/4.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 8^(1/3).', solution: '2', steps: ['8^(1/3) = ∛8.', '= 2.'] },
          { problem: 'Berechnen Sie 32^(3/5).', solution: '8', steps: ['⁵√32 = 2.', '2³ = 8.'] },
          { problem: 'Berechnen Sie (1/9)^(−1/2).', solution: '3', steps: ['Der negative Exponent dreht den Bruch um: 9^(1/2).', '√9 = 3.'] },
        ],
      },
    },
    // ───────── 3. Irrational numbers
    {
      slug: 'g11-factors-powers-roots-irrational-numbers',
      visuals: [{
        type: 'numberLine', min: 0, max: 4, step: 0.5, labelEvery: 2,
        points: [{ x: Math.SQRT2, label: '√2' }, { x: Math.sqrt(5), label: '√5', color: 'secondary' }, { x: Math.PI, label: 'π', color: 'success' }],
        caption: alt('√2 ≈ 1,414…, √5 ≈ 2,236…, π ≈ 3,14159…: dhjetore të pafundme që nuk përsëriten.', '√2 ≈ 1.414…, √5 ≈ 2.236…, π ≈ 3.14159…: endless decimals that never repeat.', '√2 ≈ 1,414…, √5 ≈ 2,236…, π ≈ 3,14159…: unendliche, nicht periodische Dezimalzahlen.'),
        alt: alt('Boshti numerik nga 0 deri 4 me pikat √2, √5 dhe π.', 'Number line from 0 to 4 with the points √2, √5 and π.', 'Zahlenstrahl von 0 bis 4 mit den Punkten √2, √5 und π.'),
      }],
      answers: {
        examples: [[['floor(sqrt(40))', 6], ['ceil(sqrt(40))', 7]], [['36 / 99', '4/11', 0, '4/11']]],
        practice: [[['sqrt(2 * 8)', 4]], [['0.7777777777777777', '7/9', 1e-9, '7/9']], [['sqrt(4)', 2]]],
      },
      al: {
        title: 'Numrat irracionalë',
        objectives: ['Të dalloni numrat racionalë nga ata irracionalë.', 'Ta shndërroni një dhjetore periodike në thyesë dhe të vlerësoni rrënjë.'],
        theory: 'Numër racional është çdo numër që shkruhet si p/q (p, q të plotë, q ≠ 0). Dhjetorja e tij ose përfundon (0,25) ose është periodike (0,(36) = 0,363636…).\n\nNumër irracional është ai që nuk shkruhet si thyesë: dhjetorja e tij është e pafundme dhe pa periodë, p.sh. √2, √5, π. √n është irracional, përveç kur n është katror i plotë (√16 = 4).\n\nDhjetoren periodike e kthejmë në thyesë: x = 0,(36) → 100x = 36,(36) → 99x = 36 → x = 36/99 = 4/11.',
        keyPoints: ['Racional = p/q; dhjetore e fundme ose periodike', 'Irracional: dhjetore e pafundme pa periodë', '√n irracional, përveç kur n është katror i plotë'],
        examples: [
          { example: 'Midis cilëve dy numra të plotë është √40?', solution: '36 < 40 < 49, pra 6 < √40 < 7.' },
          { example: 'Shkruajeni 0,(36) si thyesë të thjeshtuar.', solution: '99x = 36 → x = 36/99 = 4/11.' },
        ],
        commonMistakes: [
          { mistake: 'Çdo rrënjë është numër irracional.', fix: 'Rrënja e një katrori të plotë është e plotë: √16 = 4 është racional.' },
          { mistake: 'π = 22/7 saktësisht.', fix: '22/7 është vetëm përafrim; π është irracional.' },
        ],
        practice: [
          { problem: 'A është √2 · √8 numër racional?', solution: 'Po: √2 · √8 = √16 = 4', steps: ['√2 · √8 = √(2 · 8) = √16.', '= 4, numër racional.'] },
          { problem: 'Shkruajeni 0,(7) si thyesë.', solution: '7/9', steps: ['10x = 7,(7) dhe x = 0,(7).', '9x = 7 → x = 7/9.'] },
          { problem: 'Gjeni një numër të plotë midis √3 dhe √5.', solution: '2', steps: ['√3 < √4 < √5.', '√4 = 2.'] },
        ],
      },
      en: {
        title: 'Irrational numbers',
        objectives: ['Tell rational numbers from irrational ones.', 'Turn a recurring decimal into a fraction and estimate roots.'],
        theory: 'A rational number is any number that can be written as p/q (p, q integers, q ≠ 0). Its decimal either ends (0.25) or recurs (0.(36) = 0.363636…).\n\nAn irrational number cannot be written as a fraction: its decimal goes on for ever without repeating, e.g. √2, √5, π. √n is irrational unless n is a perfect square (√16 = 4).\n\nTo turn a recurring decimal into a fraction: x = 0.(36) → 100x = 36.(36) → 99x = 36 → x = 36/99 = 4/11.',
        keyPoints: ['Rational = p/q; ending or recurring decimal', 'Irrational: endless decimal, no repeating block', '√n is irrational unless n is a perfect square'],
        examples: [
          { example: 'Between which two whole numbers is √40?', solution: '36 < 40 < 49, so 6 < √40 < 7.' },
          { example: 'Write 0.(36) as a fraction in its simplest form.', solution: '99x = 36 → x = 36/99 = 4/11.' },
        ],
        commonMistakes: [
          { mistake: 'Every root is irrational.', fix: 'The root of a perfect square is whole: √16 = 4 is rational.' },
          { mistake: 'π = 22/7 exactly.', fix: '22/7 is only an approximation; π is irrational.' },
        ],
        practice: [
          { problem: 'Is √2 · √8 a rational number?', solution: 'Yes: √2 · √8 = √16 = 4', steps: ['√2 · √8 = √(2 · 8) = √16.', '= 4, a rational number.'] },
          { problem: 'Write 0.(7) as a fraction.', solution: '7/9', steps: ['10x = 7.(7) and x = 0.(7).', '9x = 7 → x = 7/9.'] },
          { problem: 'Find a whole number between √3 and √5.', solution: '2', steps: ['√3 < √4 < √5.', '√4 = 2.'] },
        ],
      },
      de: {
        title: 'Irrationale Zahlen',
        objectives: ['Rationale und irrationale Zahlen unterscheiden.', 'Eine periodische Dezimalzahl in einen Bruch umwandeln und Wurzeln abschätzen.'],
        theory: 'Eine rationale Zahl lässt sich als p/q schreiben (p, q ganz, q ≠ 0). Ihre Dezimaldarstellung bricht ab (0,25) oder ist periodisch (0,(36) = 0,363636…).\n\nEine irrationale Zahl lässt sich nicht als Bruch schreiben: Ihre Dezimaldarstellung ist unendlich und nicht periodisch, z. B. √2, √5, π. √n ist irrational, außer wenn n eine Quadratzahl ist (√16 = 4).\n\nPeriodische Dezimalzahl in einen Bruch: x = 0,(36) → 100x = 36,(36) → 99x = 36 → x = 36/99 = 4/11.',
        keyPoints: ['Rational = p/q; abbrechend oder periodisch', 'Irrational: unendlich und nicht periodisch', '√n ist irrational, außer n ist eine Quadratzahl'],
        examples: [
          { example: 'Zwischen welchen ganzen Zahlen liegt √40?', solution: '36 < 40 < 49, also 6 < √40 < 7.' },
          { example: 'Schreiben Sie 0,(36) als gekürzten Bruch.', solution: '99x = 36 → x = 36/99 = 4/11.' },
        ],
        commonMistakes: [
          { mistake: 'Jede Wurzel ist irrational.', fix: 'Die Wurzel einer Quadratzahl ist ganz: √16 = 4 ist rational.' },
          { mistake: 'π = 22/7 genau.', fix: '22/7 ist nur ein Näherungswert; π ist irrational.' },
        ],
        practice: [
          { problem: 'Ist √2 · √8 eine rationale Zahl?', solution: 'Ja: √2 · √8 = √16 = 4', steps: ['√2 · √8 = √(2 · 8) = √16.', '= 4, eine rationale Zahl.'] },
          { problem: 'Schreiben Sie 0,(7) als Bruch.', solution: '7/9', steps: ['10x = 7,(7) und x = 0,(7).', '9x = 7 → x = 7/9.'] },
          { problem: 'Nennen Sie eine ganze Zahl zwischen √3 und √5.', solution: '2', steps: ['√3 < √4 < √5.', '√4 = 2.'] },
        ],
      },
    },
  ],
};
