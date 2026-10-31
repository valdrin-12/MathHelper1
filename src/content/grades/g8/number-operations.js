// Grade 8 · Theme 2: Operations with numbers (12 hours)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g8-number-operations',
  i18n: {
    al: { title: 'Veprimet me numra', description: 'Numrat me shenjë, fuqitë dhe vetitë e tyre, rrënja katrore dhe shprehjet me numra racionalë.' },
    en: { title: 'Operations with numbers', description: 'Signed numbers, powers and their rules, square roots and expressions with rational numbers.' },
    de: { title: 'Rechnen mit Zahlen', description: 'Zahlen mit Vorzeichen, Potenzen und Potenzgesetze, Quadratwurzeln und Terme mit rationalen Zahlen.' },
  },
  lessons: [
    // ───────── 1. Signed numbers
    {
      slug: 'g8-number-operations-signed-numbers',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Shenjat', 'Signs', 'Vorzeichen'), cells: ['(+) · (+)', '(−) · (−)', '(+) · (−)', '(−)²', '(−)³'] },
          { head: alt('Rezultati', 'Result', 'Ergebnis'), cells: ['+', '+', '−', '+', '−'] },
          { head: alt('Shembull', 'Example', 'Beispiel'), cells: ['3 · 4 = 12', '(−3) · (−4) = 12', '3 · (−4) = −12', '(−3)² = 9', '(−2)³ = −8'] },
        ],
        alt: alt('Tabela e rregullave të shenjave për shumëzim dhe fuqi, me shembuj.', 'Table of the sign rules for multiplication and powers, with examples.', 'Tabelle der Vorzeichenregeln für Multiplikation und Potenzen, mit Beispielen.'),
      }],
      answers: {
        examples: [[['-3 * (2 - 5)^2 + 4', -23]], [['(-12) / (-3) + (-2) * 5', -6]]],
        practice: [[['-8 + 3 * (-2)', -14]], [['(-2)^3 - (-3)^2', -17]], [['abs(-7) - abs(3 - 10)', 0]]],
      },
      al: {
        title: 'Numrat me shenjë',
        objectives: ['Të llogaritni shprehje me numra me shenjë duke ndjekur radhën e veprimeve.', 'Të zbatoni rregullat e shenjave te shumëzimi, pjesëtimi dhe fuqitë.'],
        theory: 'Radha e veprimeve mbetet: (1) kllapat, (2) fuqitë, (3) shumëzimi dhe pjesëtimi nga e majta, (4) mbledhja dhe zbritja nga e majta.\n\nRregullat e shenjave: dy shenja të njëjta japin plus, dy shenja të ndryshme japin minus (te shumëzimi dhe pjesëtimi). Një numër negativ në fuqi çift jep plus, në fuqi tek jep minus.\n\nVlera absolute |a| është largësia e a nga zeroja dhe nuk është kurrë negative: |−7| = 7. Shembull: −3 · (2 − 5)² + 4 = −3 · (−3)² + 4 = −3 · 9 + 4 = −23.',
        keyPoints: ['Kllapat → fuqitë → · : → + −', '(−) · (−) = +;  (+) · (−) = −', '|a| ≥ 0'],
        examples: [
          { example: 'Llogaritni −3 · (2 − 5)² + 4.', solution: '2 − 5 = −3; (−3)² = 9; −3 · 9 = −27; −27 + 4 = −23.' },
          { example: 'Llogaritni (−12) : (−3) + (−2) · 5.', solution: '(−12) : (−3) = 4; (−2) · 5 = −10; 4 − 10 = −6.' },
        ],
        commonMistakes: [
          { mistake: '(−3)² = −9', fix: 'Katrori i numrit negativ është pozitiv: (−3) · (−3) = 9.' },
          { mistake: '−3 · (−3)² = (9)² = 81', fix: 'Fuqia llogaritet para shumëzimit: −3 · 9 = −27.' },
        ],
        practice: [
          { problem: 'Llogaritni −8 + 3 · (−2).', solution: '−14', steps: ['3 · (−2) = −6.', '−8 − 6 = −14.'] },
          { problem: 'Llogaritni (−2)³ − (−3)².', solution: '−17', steps: ['(−2)³ = −8; (−3)² = 9.', '−8 − 9 = −17.'] },
          { problem: 'Llogaritni |−7| − |3 − 10|.', solution: '0', steps: ['|−7| = 7; |3 − 10| = |−7| = 7.', '7 − 7 = 0.'] },
        ],
      },
      en: {
        title: 'Signed numbers',
        objectives: ['Evaluate expressions with signed numbers following the order of operations.', 'Apply the sign rules for multiplication, division and powers.'],
        theory: 'The order of operations stays the same: (1) brackets, (2) powers, (3) multiplication and division from the left, (4) addition and subtraction from the left.\n\nSign rules: two equal signs give plus, two different signs give minus (for multiplication and division). A negative number to an even power gives plus, to an odd power minus.\n\nThe absolute value |a| is the distance of a from zero and is never negative: |−7| = 7. Example: −3 · (2 − 5)² + 4 = −3 · (−3)² + 4 = −3 · 9 + 4 = −23.',
        keyPoints: ['Brackets → powers → · ÷ → + −', '(−) · (−) = +;  (+) · (−) = −', '|a| ≥ 0'],
        examples: [
          { example: 'Work out −3 · (2 − 5)² + 4.', solution: '2 − 5 = −3; (−3)² = 9; −3 · 9 = −27; −27 + 4 = −23.' },
          { example: 'Work out (−12) ÷ (−3) + (−2) · 5.', solution: '(−12) ÷ (−3) = 4; (−2) · 5 = −10; 4 − 10 = −6.' },
        ],
        commonMistakes: [
          { mistake: '(−3)² = −9', fix: 'The square of a negative number is positive: (−3) · (−3) = 9.' },
          { mistake: '−3 · (−3)² = (9)² = 81', fix: 'The power comes before the multiplication: −3 · 9 = −27.' },
        ],
        practice: [
          { problem: 'Work out −8 + 3 · (−2).', solution: '−14', steps: ['3 · (−2) = −6.', '−8 − 6 = −14.'] },
          { problem: 'Work out (−2)³ − (−3)².', solution: '−17', steps: ['(−2)³ = −8; (−3)² = 9.', '−8 − 9 = −17.'] },
          { problem: 'Work out |−7| − |3 − 10|.', solution: '0', steps: ['|−7| = 7; |3 − 10| = |−7| = 7.', '7 − 7 = 0.'] },
        ],
      },
      de: {
        title: 'Zahlen mit Vorzeichen',
        objectives: ['Terme mit Vorzeichenzahlen in der richtigen Reihenfolge berechnen.', 'Die Vorzeichenregeln bei Multiplikation, Division und Potenzen anwenden.'],
        theory: 'Die Rechenreihenfolge bleibt: (1) Klammern, (2) Potenzen, (3) Punktrechnung von links, (4) Strichrechnung von links.\n\nVorzeichenregeln: Gleiche Vorzeichen ergeben plus, verschiedene ergeben minus (beim Multiplizieren und Dividieren). Eine negative Zahl mit geradem Exponenten ergibt plus, mit ungeradem minus.\n\nDer Betrag |a| ist der Abstand von a zur Null und nie negativ: |−7| = 7. Beispiel: −3 · (2 − 5)² + 4 = −3 · (−3)² + 4 = −3 · 9 + 4 = −23.',
        keyPoints: ['Klammern → Potenzen → · : → + −', '(−) · (−) = +;  (+) · (−) = −', '|a| ≥ 0'],
        examples: [
          { example: 'Berechnen Sie −3 · (2 − 5)² + 4.', solution: '2 − 5 = −3; (−3)² = 9; −3 · 9 = −27; −27 + 4 = −23.' },
          { example: 'Berechnen Sie (−12) : (−3) + (−2) · 5.', solution: '(−12) : (−3) = 4; (−2) · 5 = −10; 4 − 10 = −6.' },
        ],
        commonMistakes: [
          { mistake: '(−3)² = −9', fix: 'Das Quadrat einer negativen Zahl ist positiv: (−3) · (−3) = 9.' },
          { mistake: '−3 · (−3)² = (9)² = 81', fix: 'Die Potenz kommt vor der Multiplikation: −3 · 9 = −27.' },
        ],
        practice: [
          { problem: 'Berechnen Sie −8 + 3 · (−2).', solution: '−14', steps: ['3 · (−2) = −6.', '−8 − 6 = −14.'] },
          { problem: 'Berechnen Sie (−2)³ − (−3)².', solution: '−17', steps: ['(−2)³ = −8; (−3)² = 9.', '−8 − 9 = −17.'] },
          { problem: 'Berechnen Sie |−7| − |3 − 10|.', solution: '0', steps: ['|−7| = 7; |3 − 10| = |−7| = 7.', '7 − 7 = 0.'] },
        ],
      },
    },

    // ───────── 2. Powers and their rules
    {
      slug: 'g8-number-operations-power-properties',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Rregulla', 'Rule', 'Regel'), cells: ['aᵐ · aⁿ = aᵐ⁺ⁿ', 'aᵐ : aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐ·ⁿ', '(a/b)ⁿ = aⁿ/bⁿ'] },
          { head: alt('Shembull', 'Example', 'Beispiel'), cells: ['5³ · 5⁻¹ = 5²', '5² : 5² = 5⁰ = 1', '(2³)² = 2⁶', '(−1/2)³ = −1/8'] },
        ],
        alt: alt('Tabela e vetive të fuqive me shembuj që përmbajnë eksponentë negativë.', 'Table of the rules for powers with examples including negative exponents.', 'Tabelle der Potenzgesetze mit Beispielen, auch mit negativen Exponenten.'),
      }],
      answers: {
        examples: [[['(5^3 * 5^-1) / 5^2', 1]], [['(-1/2)^3', '-1/8', 1e-9, '−1/8']]],
        practice: [[['(2^3)^2 * 2^-4', 4]], [['(3^-1)^2', '1/9', 1e-9, '1/9']], [['(2 * 5)^3 / 10^2', 10]]],
      },
      al: {
        title: 'Fuqitë dhe vetitë e tyre',
        objectives: ['Të thjeshtoni shprehje me fuqi duke përdorur vetitë.', 'Të ngrini në fuqi thyesa dhe numra negativë.'],
        theory: 'Vetitë e fuqive vlejnë për çdo eksponent të plotë (edhe negativ) dhe bazë jo zero: aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ : aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐ·ⁿ, (a · b)ⁿ = aⁿ · bⁿ, (a/b)ⁿ = aⁿ/bⁿ.\n\nShembull: (5³ · 5⁻¹) : 5² = 5² : 5² = 5⁰ = 1. Për thyesë negative: (−1/2)³ = (−1)³/2³ = −1/8 (eksponent tek → minus).\n\nKëshillë: fillimisht bashkoni fuqitë me të njëjtën bazë, pastaj llogaritni vlerën.',
        keyPoints: ['aᵐ · aⁿ = aᵐ⁺ⁿ;  aᵐ : aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐ·ⁿ', '(a/b)ⁿ = aⁿ/bⁿ'],
        examples: [
          { example: 'Thjeshtoni (5³ · 5⁻¹) : 5².', solution: '5³ · 5⁻¹ = 5²; 5² : 5² = 5⁰ = 1.' },
          { example: 'Llogaritni (−1/2)³.', solution: '(−1)³/2³ = −1/8.' },
        ],
        commonMistakes: [
          { mistake: '5³ · 5⁻¹ = 5⁻³', fix: 'Eksponentët mblidhen: 3 + (−1) = 2, pra 5².' },
          { mistake: '(−1/2)³ = 1/8', fix: 'Eksponenti 3 është tek, prandaj shenja minus mbetet: −1/8.' },
        ],
        practice: [
          { problem: 'Llogaritni (2³)² · 2⁻⁴.', solution: '4', steps: ['(2³)² = 2⁶.', '2⁶ · 2⁻⁴ = 2² = 4.'] },
          { problem: 'Llogaritni (3⁻¹)².', solution: '1/9', steps: ['(3⁻¹)² = 3⁻².', '= 1/9.'] },
          { problem: 'Llogaritni (2 · 5)³ : 10².', solution: '10', steps: ['(2 · 5)³ = 10³.', '10³ : 10² = 10.'] },
        ],
      },
      en: {
        title: 'Powers and their rules',
        objectives: ['Simplify expressions with powers using the rules.', 'Raise fractions and negative numbers to a power.'],
        theory: 'The rules for powers hold for every integer exponent (negative too) and non-zero base: aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐ·ⁿ, (a · b)ⁿ = aⁿ · bⁿ, (a/b)ⁿ = aⁿ/bⁿ.\n\nExample: (5³ · 5⁻¹) ÷ 5² = 5² ÷ 5² = 5⁰ = 1. For a negative fraction: (−1/2)³ = (−1)³/2³ = −1/8 (odd exponent → minus).\n\nTip: first combine powers with the same base, then work out the value.',
        keyPoints: ['aᵐ · aⁿ = aᵐ⁺ⁿ;  aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐ·ⁿ', '(a/b)ⁿ = aⁿ/bⁿ'],
        examples: [
          { example: 'Simplify (5³ · 5⁻¹) ÷ 5².', solution: '5³ · 5⁻¹ = 5²; 5² ÷ 5² = 5⁰ = 1.' },
          { example: 'Work out (−1/2)³.', solution: '(−1)³/2³ = −1/8.' },
        ],
        commonMistakes: [
          { mistake: '5³ · 5⁻¹ = 5⁻³', fix: 'The exponents add: 3 + (−1) = 2, so 5².' },
          { mistake: '(−1/2)³ = 1/8', fix: 'The exponent 3 is odd, so the minus stays: −1/8.' },
        ],
        practice: [
          { problem: 'Work out (2³)² · 2⁻⁴.', solution: '4', steps: ['(2³)² = 2⁶.', '2⁶ · 2⁻⁴ = 2² = 4.'] },
          { problem: 'Work out (3⁻¹)².', solution: '1/9', steps: ['(3⁻¹)² = 3⁻².', '= 1/9.'] },
          { problem: 'Work out (2 · 5)³ ÷ 10².', solution: '10', steps: ['(2 · 5)³ = 10³.', '10³ ÷ 10² = 10.'] },
        ],
      },
      de: {
        title: 'Potenzen und Potenzgesetze',
        objectives: ['Terme mit Potenzen mithilfe der Gesetze vereinfachen.', 'Brüche und negative Zahlen potenzieren.'],
        theory: 'Die Potenzgesetze gelten für jeden ganzzahligen Exponenten (auch negativ) und jede Basis ungleich null: aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ : aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐ·ⁿ, (a · b)ⁿ = aⁿ · bⁿ, (a/b)ⁿ = aⁿ/bⁿ.\n\nBeispiel: (5³ · 5⁻¹) : 5² = 5² : 5² = 5⁰ = 1. Bei einem negativen Bruch: (−1/2)³ = (−1)³/2³ = −1/8 (ungerader Exponent → minus).\n\nTipp: Zuerst Potenzen mit gleicher Basis zusammenfassen, dann den Wert berechnen.',
        keyPoints: ['aᵐ · aⁿ = aᵐ⁺ⁿ;  aᵐ : aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐ·ⁿ', '(a/b)ⁿ = aⁿ/bⁿ'],
        examples: [
          { example: 'Vereinfachen Sie (5³ · 5⁻¹) : 5².', solution: '5³ · 5⁻¹ = 5²; 5² : 5² = 5⁰ = 1.' },
          { example: 'Berechnen Sie (−1/2)³.', solution: '(−1)³/2³ = −1/8.' },
        ],
        commonMistakes: [
          { mistake: '5³ · 5⁻¹ = 5⁻³', fix: 'Die Exponenten werden addiert: 3 + (−1) = 2, also 5².' },
          { mistake: '(−1/2)³ = 1/8', fix: 'Der Exponent 3 ist ungerade, das Minus bleibt: −1/8.' },
        ],
        practice: [
          { problem: 'Berechnen Sie (2³)² · 2⁻⁴.', solution: '4', steps: ['(2³)² = 2⁶.', '2⁶ · 2⁻⁴ = 2² = 4.'] },
          { problem: 'Berechnen Sie (3⁻¹)².', solution: '1/9', steps: ['(3⁻¹)² = 3⁻².', '= 1/9.'] },
          { problem: 'Berechnen Sie (2 · 5)³ : 10².', solution: '10', steps: ['(2 · 5)³ = 10³.', '10³ : 10² = 10.'] },
        ],
      },
    },

    // ───────── 3. Square root
    {
      slug: 'g8-number-operations-square-root',
      visuals: [{
        type: 'numberLine', min: 0, max: 3, step: 0.5,
        points: [{ x: 1.41, label: '√2' }, { x: 2.24, label: '√5', color: 'secondary' }],
        caption: alt('√2 ≈ 1,41 dhe √5 ≈ 2,24 janë numra iracionalë, por kanë vend të saktë në boshtin numerik.', '√2 ≈ 1.41 and √5 ≈ 2.24 are irrational, but they have an exact place on the number line.', '√2 ≈ 1,41 und √5 ≈ 2,24 sind irrational, haben aber einen genauen Platz auf dem Zahlenstrahl.'),
        alt: alt('Boshti numerik nga 0 deri 3 me pikat √2 afër 1,41 dhe √5 afër 2,24.', 'Number line from 0 to 3 with the points √2 near 1.41 and √5 near 2.24.', 'Zahlenstrahl von 0 bis 3 mit den Punkten √2 bei etwa 1,41 und √5 bei etwa 2,24.'),
      }],
      answers: {
        examples: [[['sqrt(50)', 7.07, 0.005, '7.07']], [['sqrt(9 * 16)', 12]]],
        practice: [[['sqrt(72)', 8.49, 0.005, '8.49']], [['sqrt(25/36)', '5/6', 1e-9, '5/6']], [['sqrt(2) * sqrt(8)', 4]]],
      },
      al: {
        title: 'Rrënja katrore',
        objectives: ['Të zbatoni vetitë √(a · b) = √a · √b dhe √(a/b) = √a/√b.', 'Të thjeshtoni rrënjë duke nxjerrë faktorë jashtë rrënjës.'],
        theory: 'Për a, b ≥ 0 vlen √(a · b) = √a · √b dhe, për b > 0, √(a/b) = √a / √b. Gjithashtu (√a)² = a.\n\nKëto veti na lejojnë të thjeshtojmë rrënjët: shkruajmë numrin si prodhim të një katrori të plotë me një numër tjetër. √50 = √(25 · 2) = 5√2 ≈ 7,07.\n\nKujdes: rrënja e shumës NUK është shuma e rrënjëve: √(9 + 16) = √25 = 5, kurse √9 + √16 = 7.',
        keyPoints: ['√(ab) = √a · √b;  √(a/b) = √a/√b', '√50 = √(25 · 2) = 5√2', '√(a + b) ≠ √a + √b'],
        examples: [
          { example: 'Thjeshtoni √50.', solution: '√50 = √(25 · 2) = 5√2 ≈ 7,07.' },
          { example: 'Llogaritni √(9 · 16).', solution: '√9 · √16 = 3 · 4 = 12.' },
        ],
        commonMistakes: [
          { mistake: '√(9 + 16) = 3 + 4 = 7', fix: 'Fillimisht mblidhet: √25 = 5. Vetia vlen vetëm për shumëzimin dhe pjesëtimin.' },
          { mistake: '√50 = 25√2', fix: 'Jashtë rrënjës del rrënja e 25, pra 5: 5√2.' },
        ],
        practice: [
          { problem: 'Thjeshtoni √72.', solution: '6√2 ≈ 8,49', steps: ['72 = 36 · 2.', '√72 = 6√2 ≈ 8,49.'] },
          { problem: 'Llogaritni √(25/36).', solution: '5/6', steps: ['√25 / √36.', '= 5/6.'] },
          { problem: 'Llogaritni √2 · √8.', solution: '4', steps: ['√2 · √8 = √16.', '= 4.'] },
        ],
      },
      en: {
        title: 'The square root',
        objectives: ['Use the rules √(a · b) = √a · √b and √(a/b) = √a/√b.', 'Simplify roots by taking factors out of the root.'],
        theory: 'For a, b ≥ 0 we have √(a · b) = √a · √b and, for b > 0, √(a/b) = √a / √b. Also (√a)² = a.\n\nThese rules let us simplify roots: write the number as a perfect square times another number. √50 = √(25 · 2) = 5√2 ≈ 7.07.\n\nCareful: the root of a sum is NOT the sum of the roots: √(9 + 16) = √25 = 5, but √9 + √16 = 7.',
        keyPoints: ['√(ab) = √a · √b;  √(a/b) = √a/√b', '√50 = √(25 · 2) = 5√2', '√(a + b) ≠ √a + √b'],
        examples: [
          { example: 'Simplify √50.', solution: '√50 = √(25 · 2) = 5√2 ≈ 7.07.' },
          { example: 'Work out √(9 · 16).', solution: '√9 · √16 = 3 · 4 = 12.' },
        ],
        commonMistakes: [
          { mistake: '√(9 + 16) = 3 + 4 = 7', fix: 'Add first: √25 = 5. The rule only works for multiplication and division.' },
          { mistake: '√50 = 25√2', fix: 'The root of 25 comes out, which is 5: 5√2.' },
        ],
        practice: [
          { problem: 'Simplify √72.', solution: '6√2 ≈ 8.49', steps: ['72 = 36 · 2.', '√72 = 6√2 ≈ 8.49.'] },
          { problem: 'Work out √(25/36).', solution: '5/6', steps: ['√25 / √36.', '= 5/6.'] },
          { problem: 'Work out √2 · √8.', solution: '4', steps: ['√2 · √8 = √16.', '= 4.'] },
        ],
      },
      de: {
        title: 'Die Quadratwurzel',
        objectives: ['Die Regeln √(a · b) = √a · √b und √(a/b) = √a/√b anwenden.', 'Wurzeln durch teilweises Wurzelziehen vereinfachen.'],
        theory: 'Für a, b ≥ 0 gilt √(a · b) = √a · √b und, für b > 0, √(a/b) = √a / √b. Außerdem ist (√a)² = a.\n\nDamit lassen sich Wurzeln vereinfachen: Man schreibt die Zahl als Produkt aus einer Quadratzahl und einer anderen Zahl. √50 = √(25 · 2) = 5√2 ≈ 7,07.\n\nAchtung: Die Wurzel einer Summe ist NICHT die Summe der Wurzeln: √(9 + 16) = √25 = 5, aber √9 + √16 = 7.',
        keyPoints: ['√(ab) = √a · √b;  √(a/b) = √a/√b', '√50 = √(25 · 2) = 5√2', '√(a + b) ≠ √a + √b'],
        examples: [
          { example: 'Vereinfachen Sie √50.', solution: '√50 = √(25 · 2) = 5√2 ≈ 7,07.' },
          { example: 'Berechnen Sie √(9 · 16).', solution: '√9 · √16 = 3 · 4 = 12.' },
        ],
        commonMistakes: [
          { mistake: '√(9 + 16) = 3 + 4 = 7', fix: 'Zuerst addieren: √25 = 5. Die Regel gilt nur für Multiplikation und Division.' },
          { mistake: '√50 = 25√2', fix: 'Vor die Wurzel kommt die Wurzel aus 25, also 5: 5√2.' },
        ],
        practice: [
          { problem: 'Vereinfachen Sie √72.', solution: '6√2 ≈ 8,49', steps: ['72 = 36 · 2.', '√72 = 6√2 ≈ 8,49.'] },
          { problem: 'Berechnen Sie √(25/36).', solution: '5/6', steps: ['√25 / √36.', '= 5/6.'] },
          { problem: 'Berechnen Sie √2 · √8.', solution: '4', steps: ['√2 · √8 = √16.', '= 4.'] },
        ],
      },
    },

    // ───────── 4. Expressions with rational numbers
    {
      slug: 'g8-number-operations-rational-expressions',
      noVisual: 'The order of operations with fractions is shown step by step in the worked examples.',
      answers: {
        examples: [[['(2/3 - 5/6) * (-3/4)', '1/8', 1e-9, '1/8']], [['(-1/2)^2 + (3/4) / (-3/2)', '-1/4', 1e-9, '−1/4']]],
        practice: [[['1/2 - (3/4) * (2/3)', 0]], [['(-2/5) / (4/15)', '-3/2', 1e-9, '−3/2']], [['(1 - 1/3)^2 * 9/4', 1]]],
      },
      al: {
        title: 'Shprehjet me numra racionalë',
        objectives: ['Të llogaritni shprehje me thyesa pozitive dhe negative.', 'Të ruani radhën e veprimeve dhe rregullat e shenjave te thyesat.'],
        theory: 'Me numrat racionalë veprojmë si me thyesat, duke ruajtur rregullat e shenjave. Mbledhja dhe zbritja kërkojnë emërues të përbashkët; shumëzimi bëhet numërues me numërues dhe emërues me emërues; pjesëtimi bëhet duke shumëzuar me të anasjelltën.\n\nRadha e veprimeve është e njëjtë: kllapat, fuqitë, shumëzimi/pjesëtimi, mbledhja/zbritja. Thjeshtoni sa më herët, që numrat të mbeten të vegjël.\n\nShembull: (2/3 − 5/6) · (−3/4) = (4/6 − 5/6) · (−3/4) = (−1/6) · (−3/4) = 3/24 = 1/8.',
        keyPoints: ['a/b + c/d: emërues i përbashkët', 'a/b : c/d = a/b · d/c', 'Shenja: (−) · (−) = +'],
        examples: [
          { example: 'Llogaritni (2/3 − 5/6) · (−3/4).', solution: '2/3 − 5/6 = −1/6; (−1/6) · (−3/4) = 3/24 = 1/8.' },
          { example: 'Llogaritni (−1/2)² + 3/4 : (−3/2).', solution: '(−1/2)² = 1/4; 3/4 : (−3/2) = 3/4 · (−2/3) = −1/2; 1/4 − 1/2 = −1/4.' },
        ],
        commonMistakes: [
          { mistake: '3/4 : (−3/2) = (−3/2) · (4/3)', fix: 'E anasjellta merret vetëm nga pjesëtuesi: 3/4 · (−2/3) = −1/2.' },
          { mistake: '1/2 − 3/4 · 2/3 = (−1/4) · 2/3', fix: 'Shumëzimi bëhet para zbritjes: 3/4 · 2/3 = 1/2, pastaj 1/2 − 1/2 = 0.' },
        ],
        practice: [
          { problem: 'Llogaritni 1/2 − 3/4 · 2/3.', solution: '0', steps: ['3/4 · 2/3 = 1/2.', '1/2 − 1/2 = 0.'] },
          { problem: 'Llogaritni (−2/5) : (4/15).', solution: '−3/2', steps: ['(−2/5) · (15/4) = −30/20.', '= −3/2.'] },
          { problem: 'Llogaritni (1 − 1/3)² · 9/4.', solution: '1', steps: ['1 − 1/3 = 2/3; (2/3)² = 4/9.', '4/9 · 9/4 = 1.'] },
        ],
      },
      en: {
        title: 'Expressions with rational numbers',
        objectives: ['Evaluate expressions with positive and negative fractions.', 'Keep the order of operations and the sign rules with fractions.'],
        theory: 'With rational numbers we work as with fractions while keeping the sign rules. Adding and subtracting need a common denominator; multiplying is numerator times numerator and denominator times denominator; dividing is multiplying by the reciprocal.\n\nThe order of operations is the same: brackets, powers, multiplication/division, addition/subtraction. Simplify as early as you can to keep the numbers small.\n\nExample: (2/3 − 5/6) · (−3/4) = (4/6 − 5/6) · (−3/4) = (−1/6) · (−3/4) = 3/24 = 1/8.',
        keyPoints: ['a/b + c/d: common denominator', 'a/b ÷ c/d = a/b · d/c', 'Sign: (−) · (−) = +'],
        examples: [
          { example: 'Work out (2/3 − 5/6) · (−3/4).', solution: '2/3 − 5/6 = −1/6; (−1/6) · (−3/4) = 3/24 = 1/8.' },
          { example: 'Work out (−1/2)² + 3/4 ÷ (−3/2).', solution: '(−1/2)² = 1/4; 3/4 ÷ (−3/2) = 3/4 · (−2/3) = −1/2; 1/4 − 1/2 = −1/4.' },
        ],
        commonMistakes: [
          { mistake: '3/4 ÷ (−3/2) = (−3/2) · (4/3)', fix: 'Only the divisor is flipped: 3/4 · (−2/3) = −1/2.' },
          { mistake: '1/2 − 3/4 · 2/3 = (−1/4) · 2/3', fix: 'Multiply before subtracting: 3/4 · 2/3 = 1/2, then 1/2 − 1/2 = 0.' },
        ],
        practice: [
          { problem: 'Work out 1/2 − 3/4 · 2/3.', solution: '0', steps: ['3/4 · 2/3 = 1/2.', '1/2 − 1/2 = 0.'] },
          { problem: 'Work out (−2/5) ÷ (4/15).', solution: '−3/2', steps: ['(−2/5) · (15/4) = −30/20.', '= −3/2.'] },
          { problem: 'Work out (1 − 1/3)² · 9/4.', solution: '1', steps: ['1 − 1/3 = 2/3; (2/3)² = 4/9.', '4/9 · 9/4 = 1.'] },
        ],
      },
      de: {
        title: 'Terme mit rationalen Zahlen',
        objectives: ['Terme mit positiven und negativen Brüchen berechnen.', 'Rechenreihenfolge und Vorzeichenregeln bei Brüchen einhalten.'],
        theory: 'Mit rationalen Zahlen rechnet man wie mit Brüchen und beachtet die Vorzeichenregeln. Addieren und Subtrahieren erfordern einen gemeinsamen Nenner; beim Multiplizieren Zähler mal Zähler und Nenner mal Nenner; Dividieren heißt mit dem Kehrwert multiplizieren.\n\nDie Rechenreihenfolge bleibt: Klammern, Potenzen, Punkt- vor Strichrechnung. Möglichst früh kürzen, damit die Zahlen klein bleiben.\n\nBeispiel: (2/3 − 5/6) · (−3/4) = (4/6 − 5/6) · (−3/4) = (−1/6) · (−3/4) = 3/24 = 1/8.',
        keyPoints: ['a/b + c/d: gemeinsamer Nenner', 'a/b : c/d = a/b · d/c', 'Vorzeichen: (−) · (−) = +'],
        examples: [
          { example: 'Berechnen Sie (2/3 − 5/6) · (−3/4).', solution: '2/3 − 5/6 = −1/6; (−1/6) · (−3/4) = 3/24 = 1/8.' },
          { example: 'Berechnen Sie (−1/2)² + 3/4 : (−3/2).', solution: '(−1/2)² = 1/4; 3/4 : (−3/2) = 3/4 · (−2/3) = −1/2; 1/4 − 1/2 = −1/4.' },
        ],
        commonMistakes: [
          { mistake: '3/4 : (−3/2) = (−3/2) · (4/3)', fix: 'Nur der Divisor wird umgedreht: 3/4 · (−2/3) = −1/2.' },
          { mistake: '1/2 − 3/4 · 2/3 = (−1/4) · 2/3', fix: 'Punkt vor Strich: 3/4 · 2/3 = 1/2, dann 1/2 − 1/2 = 0.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 1/2 − 3/4 · 2/3.', solution: '0', steps: ['3/4 · 2/3 = 1/2.', '1/2 − 1/2 = 0.'] },
          { problem: 'Berechnen Sie (−2/5) : (4/15).', solution: '−3/2', steps: ['(−2/5) · (15/4) = −30/20.', '= −3/2.'] },
          { problem: 'Berechnen Sie (1 − 1/3)² · 9/4.', solution: '1', steps: ['1 − 1/3 = 2/3; (2/3)² = 4/9.', '4/9 · 9/4 = 1.'] },
        ],
      },
    },
  ],
};
