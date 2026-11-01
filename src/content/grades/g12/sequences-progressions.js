// Grade 12 · Theme 2: Sequences and progressions
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g12-sequences-progressions',
  i18n: {
    al: { title: 'Vargjet dhe progresionet', description: 'Vargjet rekurrente, monotone dhe të kufizuara, progresioni aritmetik dhe gjeometrik dhe shumat e tyre, edhe shuma e pafundme gjeometrike.' },
    en: { title: 'Sequences and series', description: 'Recursive, monotone and bounded sequences, arithmetic and geometric progressions and their sums, including infinite geometric series.' },
    de: { title: 'Folgen und Reihen', description: 'Rekursive, monotone und beschränkte Folgen, arithmetische und geometrische Folgen und ihre Summen, auch unendliche geometrische Reihen.' },
  },
  lessons: [
    // ───────── 1. Recursive sequences
    {
      slug: 'g12-sequences-progressions-recursive',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'n', cells: ['1', '2', '3', '4', '5'] },
          { head: 'aₙ', cells: ['1', '3', '7', '15', '31'] },
        ],
        caption: alt('a₁ = 1 dhe aₙ₊₁ = 2aₙ + 1: çdo kufizë del nga e mëparshmja.', 'a₁ = 1 and aₙ₊₁ = 2aₙ + 1: each term comes from the one before.', 'a₁ = 1 und aₙ₊₁ = 2aₙ + 1: Jedes Glied entsteht aus dem vorigen.'),
        alt: alt('Tabelë me kufizat 1, 3, 7, 15, 31.', 'Table of the terms 1, 3, 7, 15, 31.', 'Tabelle der Glieder 1, 3, 7, 15, 31.'),
      }],
      answers: {
        examples: [[['2*7 + 1', 15]], [['5 + 8', 13]]],
        practice: [[['3 + 5*5', 28]], [['2 * 3^3', 54]], [['64 / 2^4', 4]]],
      },
      al: {
        title: 'Vargjet rekurrente',
        objectives: ['Të llogaritni kufizat e një vargu të dhënë me formulë rekurrente.', 'Ta dalloni formulën rekurrente nga ajo e kufizës së përgjithshme.'],
        theory: 'Një varg mund të jepet me formulën e kufizës së përgjithshme (aₙ = 4n + 1) ose rekurrentisht: jepet kufiza e parë dhe rregulli si fitohet kufiza e radhës nga e mëparshmja.\n\na₁ = 1, aₙ₊₁ = 2aₙ + 1: a₂ = 3, a₃ = 7, a₄ = 15, a₅ = 31.\n\nTe disa vargje rregulli përdor dy kufiza të mëparshme, p.sh. aₙ₊₂ = aₙ₊₁ + aₙ (si vargu i Fibonaccit). Formula rekurrente kërkon që t\'i llogaritim kufizat me radhë.',
        keyPoints: ['Jepet a₁ dhe rregulli aₙ₊₁ = …', 'Kufizat llogariten me radhë', 'aₙ₊₂ = aₙ₊₁ + aₙ: dy kufiza fillestare'],
        examples: [
          { example: 'a₁ = 1, aₙ₊₁ = 2aₙ + 1. Gjeni a₄.', solution: 'a₂ = 3, a₃ = 7, a₄ = 2 · 7 + 1 = 15.' },
          { example: 'a₁ = 2, a₂ = 3, aₙ₊₂ = aₙ₊₁ + aₙ. Gjeni a₅.', solution: '2, 3, 5, 8, 13 → a₅ = 13.' },
        ],
        commonMistakes: [
          { mistake: 'Te aₙ₊₁ = aₙ + 5 me a₁ = 3 llogaritet a₆ = 3 + 6 · 5.', fix: 'Nga a₁ te a₆ ka vetëm 5 hapa: a₆ = 3 + 5 · 5 = 28.' },
        ],
        practice: [
          { problem: 'a₁ = 3, aₙ₊₁ = aₙ + 5. Gjeni a₆.', solution: '28', steps: ['3, 8, 13, 18, 23, 28.', 'a₆ = 3 + 5 · 5 = 28.'] },
          { problem: 'a₁ = 2, aₙ₊₁ = 3aₙ. Gjeni a₄.', solution: '54', steps: ['2, 6, 18, 54.', 'a₄ = 2 · 3³ = 54.'] },
          { problem: 'a₁ = 64, aₙ₊₁ = aₙ/2. Gjeni a₅.', solution: '4', steps: ['64, 32, 16, 8, 4.', 'a₅ = 64 : 2⁴ = 4.'] },
        ],
      },
      en: {
        title: 'Recursive sequences',
        objectives: ['Work out the terms of a sequence given by a recurrence relation.', 'Tell a recurrence relation from a formula for the nth term.'],
        theory: 'A sequence can be given by a formula for the nth term (aₙ = 4n + 1) or recursively: the first term is given together with a rule for getting each term from the one before.\n\na₁ = 1, aₙ₊₁ = 2aₙ + 1: a₂ = 3, a₃ = 7, a₄ = 15, a₅ = 31.\n\nIn some sequences the rule uses the two previous terms, e.g. aₙ₊₂ = aₙ₊₁ + aₙ (like the Fibonacci sequence). A recurrence relation means working the terms out in order.',
        keyPoints: ['Given a₁ and the rule aₙ₊₁ = …', 'Terms are worked out in order', 'aₙ₊₂ = aₙ₊₁ + aₙ: two starting terms'],
        examples: [
          { example: 'a₁ = 1, aₙ₊₁ = 2aₙ + 1. Find a₄.', solution: 'a₂ = 3, a₃ = 7, a₄ = 2 · 7 + 1 = 15.' },
          { example: 'a₁ = 2, a₂ = 3, aₙ₊₂ = aₙ₊₁ + aₙ. Find a₅.', solution: '2, 3, 5, 8, 13 → a₅ = 13.' },
        ],
        commonMistakes: [
          { mistake: 'For aₙ₊₁ = aₙ + 5 with a₁ = 3, a₆ = 3 + 6 · 5 is worked out.', fix: 'From a₁ to a₆ there are only 5 steps: a₆ = 3 + 5 · 5 = 28.' },
        ],
        practice: [
          { problem: 'a₁ = 3, aₙ₊₁ = aₙ + 5. Find a₆.', solution: '28', steps: ['3, 8, 13, 18, 23, 28.', 'a₆ = 3 + 5 · 5 = 28.'] },
          { problem: 'a₁ = 2, aₙ₊₁ = 3aₙ. Find a₄.', solution: '54', steps: ['2, 6, 18, 54.', 'a₄ = 2 · 3³ = 54.'] },
          { problem: 'a₁ = 64, aₙ₊₁ = aₙ/2. Find a₅.', solution: '4', steps: ['64, 32, 16, 8, 4.', 'a₅ = 64 ÷ 2⁴ = 4.'] },
        ],
      },
      de: {
        title: 'Rekursive Folgen',
        objectives: ['Glieder einer rekursiv gegebenen Folge berechnen.', 'Rekursive und explizite Darstellung unterscheiden.'],
        theory: 'Eine Folge kann explizit (aₙ = 4n + 1) oder rekursiv gegeben sein: Man kennt das erste Glied und eine Regel, wie das nächste Glied aus dem vorigen entsteht.\n\na₁ = 1, aₙ₊₁ = 2aₙ + 1: a₂ = 3, a₃ = 7, a₄ = 15, a₅ = 31.\n\nManche Regeln verwenden die zwei vorigen Glieder, z. B. aₙ₊₂ = aₙ₊₁ + aₙ (wie die Fibonacci-Folge). Bei einer Rekursion berechnet man die Glieder der Reihe nach.',
        keyPoints: ['Gegeben a₁ und die Regel aₙ₊₁ = …', 'Glieder der Reihe nach berechnen', 'aₙ₊₂ = aₙ₊₁ + aₙ: zwei Startglieder'],
        examples: [
          { example: 'a₁ = 1, aₙ₊₁ = 2aₙ + 1. Bestimmen Sie a₄.', solution: 'a₂ = 3, a₃ = 7, a₄ = 2 · 7 + 1 = 15.' },
          { example: 'a₁ = 2, a₂ = 3, aₙ₊₂ = aₙ₊₁ + aₙ. Bestimmen Sie a₅.', solution: '2, 3, 5, 8, 13 → a₅ = 13.' },
        ],
        commonMistakes: [
          { mistake: 'Bei aₙ₊₁ = aₙ + 5 mit a₁ = 3 wird a₆ = 3 + 6 · 5 gerechnet.', fix: 'Von a₁ bis a₆ sind es nur 5 Schritte: a₆ = 3 + 5 · 5 = 28.' },
        ],
        practice: [
          { problem: 'a₁ = 3, aₙ₊₁ = aₙ + 5. Bestimmen Sie a₆.', solution: '28', steps: ['3, 8, 13, 18, 23, 28.', 'a₆ = 3 + 5 · 5 = 28.'] },
          { problem: 'a₁ = 2, aₙ₊₁ = 3aₙ. Bestimmen Sie a₄.', solution: '54', steps: ['2, 6, 18, 54.', 'a₄ = 2 · 3³ = 54.'] },
          { problem: 'a₁ = 64, aₙ₊₁ = aₙ/2. Bestimmen Sie a₅.', solution: '4', steps: ['64, 32, 16, 8, 4.', 'a₅ = 64 : 2⁴ = 4.'] },
        ],
      },
    },
    // ───────── 2. Monotone and bounded
    {
      slug: 'g12-sequences-progressions-monotone-bounded',
      visuals: [{
        type: 'numberLine', min: 0, max: 1, step: 0.1, labelEvery: 5,
        points: [{ x: 0.5, label: 'a₁' }, { x: 2 / 3 }, { x: 0.75 }, { x: 0.8 }, { x: 5 / 6, label: 'a₅' }, { x: 1, label: '1', color: 'secondary', open: true }],
        caption: alt('aₙ = n/(n + 1): kufizat rriten, por mbeten nën 1.', 'aₙ = n/(n + 1): the terms increase but stay below 1.', 'aₙ = n/(n + 1): Die Glieder wachsen, bleiben aber unter 1.'),
        alt: alt('Boshti numerik nga 0 deri 1 me kufizat 1/2, 2/3, 3/4, 4/5, 5/6 që afrohen te 1.', 'Number line from 0 to 1 with the terms 1/2, 2/3, 3/4, 4/5, 5/6 approaching 1.', 'Zahlenstrahl von 0 bis 1 mit den Gliedern 1/2, 2/3, 3/4, 4/5, 5/6, die sich 1 nähern.'),
      }],
      answers: {
        examples: [[['2/3 - 1/2', '1/6', 1e-9, '1/6']], [['100 / 101', 0.99, 0.005]]],
        practice: [[['(5 - 2*2) - (5 - 2*1)', -2]], 'text', [['1 / 1', 1]]],
      },
      al: {
        title: 'Vargjet monotone dhe të kufizuara',
        objectives: ['Të vërtetoni nëse një varg është rritës ose zbritës me shenjën e aₙ₊₁ − aₙ.', 'Të gjeni kufirin e poshtëm dhe të sipërm të një vargu.'],
        theory: 'Vargu është rritës kur aₙ₊₁ − aₙ > 0 për çdo n, dhe zbritës kur aₙ₊₁ − aₙ < 0.\n\nVargu është i kufizuar kur ekzistojnë m dhe M me m ≤ aₙ ≤ M për çdo n.\n\naₙ = n/(n + 1): aₙ₊₁ − aₙ = 1/((n + 1)(n + 2)) > 0, pra rritës; gjithashtu 0 < aₙ < 1, pra i kufizuar. Një varg monoton dhe i kufizuar ka gjithmonë limit (këtu 1).\n\naₙ = (−1)ⁿ: −1, 1, −1, 1, … është i kufizuar, por jo monoton.',
        keyPoints: ['aₙ₊₁ − aₙ > 0 → rritës', 'm ≤ aₙ ≤ M → i kufizuar', 'Monoton + i kufizuar → ka limit'],
        examples: [
          { example: 'Tregoni që aₙ = n/(n + 1) është rritës (kontroll me a₁, a₂).', solution: 'aₙ₊₁ − aₙ = 1/((n + 1)(n + 2)) > 0; p.sh. a₂ − a₁ = 2/3 − 1/2 = 1/6 > 0.' },
          { example: 'A është aₙ = n/(n + 1) i kufizuar? Llogaritni a₁₀₀.', solution: 'Po: 0 < aₙ < 1; a₁₀₀ = 100/101 ≈ 0,99.' },
        ],
        commonMistakes: [
          { mistake: 'Monotonia vendoset nga dy-tri kufizat e para.', fix: 'Duhet treguar për çdo n, me shenjën e aₙ₊₁ − aₙ.' },
        ],
        practice: [
          { problem: 'A është aₙ = 5 − 2n rritës apo zbritës?', solution: 'zbritës', steps: ['aₙ₊₁ − aₙ = (5 − 2(n + 1)) − (5 − 2n).', '= −2 < 0 → zbritës.'] },
          { problem: 'A është aₙ = (−1)ⁿ monoton? A është i kufizuar?', solution: 'jo monoton; i kufizuar', steps: ['Kufizat: −1, 1, −1, 1, … ndërrojnë drejtim.', '−1 ≤ aₙ ≤ 1 → i kufizuar.'] },
          { problem: 'Sa është kufiri i sipërm më i vogël i aₙ = 1/n?', solution: '1', steps: ['aₙ zbret: 1, 1/2, 1/3, …', 'Më e madhja është a₁ = 1; poshtë kufizohet nga 0.'] },
        ],
      },
      en: {
        title: 'Monotone and bounded sequences',
        objectives: ['Show whether a sequence is increasing or decreasing from the sign of aₙ₊₁ − aₙ.', 'Find lower and upper bounds of a sequence.'],
        theory: 'A sequence is increasing when aₙ₊₁ − aₙ > 0 for every n, and decreasing when aₙ₊₁ − aₙ < 0.\n\nA sequence is bounded when there are m and M with m ≤ aₙ ≤ M for every n.\n\naₙ = n/(n + 1): aₙ₊₁ − aₙ = 1/((n + 1)(n + 2)) > 0, so increasing; also 0 < aₙ < 1, so bounded. A monotone bounded sequence always has a limit (here 1).\n\naₙ = (−1)ⁿ: −1, 1, −1, 1, … is bounded but not monotone.',
        keyPoints: ['aₙ₊₁ − aₙ > 0 → increasing', 'm ≤ aₙ ≤ M → bounded', 'Monotone + bounded → has a limit'],
        examples: [
          { example: 'Show that aₙ = n/(n + 1) is increasing (check with a₁, a₂).', solution: 'aₙ₊₁ − aₙ = 1/((n + 1)(n + 2)) > 0; e.g. a₂ − a₁ = 2/3 − 1/2 = 1/6 > 0.' },
          { example: 'Is aₙ = n/(n + 1) bounded? Work out a₁₀₀.', solution: 'Yes: 0 < aₙ < 1; a₁₀₀ = 100/101 ≈ 0.99.' },
        ],
        commonMistakes: [
          { mistake: 'Monotonicity is decided from the first two or three terms.', fix: 'It must hold for every n, using the sign of aₙ₊₁ − aₙ.' },
        ],
        practice: [
          { problem: 'Is aₙ = 5 − 2n increasing or decreasing?', solution: 'decreasing', steps: ['aₙ₊₁ − aₙ = (5 − 2(n + 1)) − (5 − 2n).', '= −2 < 0 → decreasing.'] },
          { problem: 'Is aₙ = (−1)ⁿ monotone? Is it bounded?', solution: 'not monotone; bounded', steps: ['Terms: −1, 1, −1, 1, … keep changing direction.', '−1 ≤ aₙ ≤ 1 → bounded.'] },
          { problem: 'What is the least upper bound of aₙ = 1/n?', solution: '1', steps: ['aₙ decreases: 1, 1/2, 1/3, …', 'The largest is a₁ = 1; below it is bounded by 0.'] },
        ],
      },
      de: {
        title: 'Monotone und beschränkte Folgen',
        objectives: ['Mit dem Vorzeichen von aₙ₊₁ − aₙ zeigen, ob eine Folge steigt oder fällt.', 'Untere und obere Schranken einer Folge bestimmen.'],
        theory: 'Eine Folge ist streng monoton steigend, wenn aₙ₊₁ − aₙ > 0 für alle n, und fallend, wenn aₙ₊₁ − aₙ < 0.\n\nEine Folge ist beschränkt, wenn es m und M gibt mit m ≤ aₙ ≤ M für alle n.\n\naₙ = n/(n + 1): aₙ₊₁ − aₙ = 1/((n + 1)(n + 2)) > 0, also steigend; außerdem 0 < aₙ < 1, also beschränkt. Eine monotone und beschränkte Folge ist immer konvergent (hier gegen 1).\n\naₙ = (−1)ⁿ: −1, 1, −1, 1, … ist beschränkt, aber nicht monoton.',
        keyPoints: ['aₙ₊₁ − aₙ > 0 → steigend', 'm ≤ aₙ ≤ M → beschränkt', 'Monoton + beschränkt → konvergent'],
        examples: [
          { example: 'Zeigen Sie, dass aₙ = n/(n + 1) steigt (Probe mit a₁, a₂).', solution: 'aₙ₊₁ − aₙ = 1/((n + 1)(n + 2)) > 0; z. B. a₂ − a₁ = 2/3 − 1/2 = 1/6 > 0.' },
          { example: 'Ist aₙ = n/(n + 1) beschränkt? Berechnen Sie a₁₀₀.', solution: 'Ja: 0 < aₙ < 1; a₁₀₀ = 100/101 ≈ 0,99.' },
        ],
        commonMistakes: [
          { mistake: 'Die Monotonie wird aus den ersten zwei, drei Gliedern geschlossen.', fix: 'Sie muss für alle n gelten: Vorzeichen von aₙ₊₁ − aₙ.' },
        ],
        practice: [
          { problem: 'Ist aₙ = 5 − 2n steigend oder fallend?', solution: 'fallend', steps: ['aₙ₊₁ − aₙ = (5 − 2(n + 1)) − (5 − 2n).', '= −2 < 0 → fallend.'] },
          { problem: 'Ist aₙ = (−1)ⁿ monoton? Ist sie beschränkt?', solution: 'nicht monoton; beschränkt', steps: ['Glieder: −1, 1, −1, 1, … wechseln ständig die Richtung.', '−1 ≤ aₙ ≤ 1 → beschränkt.'] },
          { problem: 'Was ist die kleinste obere Schranke von aₙ = 1/n?', solution: '1', steps: ['aₙ fällt: 1, 1/2, 1/3, …', 'Das größte Glied ist a₁ = 1; nach unten beschränkt durch 0.'] },
        ],
      },
    },
    // ───────── 3. Arithmetic and geometric progressions
    {
      slug: 'g12-sequences-progressions-arithmetic-geometric',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'n', cells: ['1', '2', '3', '4', '5'] },
          { head: alt('aritmetik (d = 4)', 'arithmetic (d = 4)', 'arithmetisch (d = 4)'), cells: ['3', '7', '11', '15', '19'] },
          { head: alt('gjeometrik (q = 3)', 'geometric (q = 3)', 'geometrisch (q = 3)'), cells: ['2', '6', '18', '54', '162'] },
        ],
        caption: alt('Aritmetik: shtohet d; gjeometrik: shumëzohet me q.', 'Arithmetic: add d; geometric: multiply by q.', 'Arithmetisch: d addieren; geometrisch: mit q multiplizieren.'),
        alt: alt('Tabelë me progresionin aritmetik 3, 7, 11, 15, 19 dhe gjeometrik 2, 6, 18, 54, 162.', 'Table of the arithmetic progression 3, 7, 11, 15, 19 and the geometric one 2, 6, 18, 54, 162.', 'Tabelle der arithmetischen Folge 3, 7, 11, 15, 19 und der geometrischen Folge 2, 6, 18, 54, 162.'),
      }],
      answers: {
        examples: [[['3 + 19*4', 79]], [['2 * 3^5', 486]]],
        practice: [[['(22 - 10) / 4', 3]], [['sqrt(54 / 6)', 3]], [['(4 + 16) / 2', 10], ['sqrt(4 * 16)', 8]]],
      },
      al: {
        title: 'Progresioni aritmetik dhe gjeometrik',
        objectives: ['Të përdorni aₙ = a₁ + (n − 1)d dhe aₙ = a₁ · qⁿ⁻¹.', 'Të gjeni d ose q nga dy kufiza dhe mesataren aritmetike e gjeometrike.'],
        theory: 'Progresioni aritmetik: aₙ₊₁ = aₙ + d, aₙ = a₁ + (n − 1)d. Me a₁ = 3, d = 4: a₂₀ = 3 + 19 · 4 = 79.\nProgresioni gjeometrik: aₙ₊₁ = aₙ · q, aₙ = a₁ · qⁿ⁻¹. Me a₁ = 2, q = 3: a₆ = 2 · 3⁵ = 486.\n\nNga dy kufiza: aₖ − aₘ = (k − m)d dhe aₖ : aₘ = qᵏ⁻ᵐ.\n\nKufiza e mesme: te aritmetiku b = (a + c)/2 (mesatarja aritmetike), te gjeometriku b = √(ac) (mesatarja gjeometrike).',
        keyPoints: ['aₙ = a₁ + (n − 1)d', 'aₙ = a₁ · qⁿ⁻¹', 'Mesi: (a + c)/2 ose √(ac)'],
        examples: [
          { example: 'a₁ = 3, d = 4. Gjeni a₂₀.', solution: 'a₂₀ = 3 + 19 · 4 = 79.' },
          { example: 'a₁ = 2, q = 3. Gjeni a₆.', solution: 'a₆ = 2 · 3⁵ = 2 · 243 = 486.' },
        ],
        commonMistakes: [
          { mistake: 'a₂₀ = a₁ + 20d.', fix: 'Nga a₁ te a₂₀ ka 19 hapa: a₁ + 19d.' },
          { mistake: 'Nga a₂ = 6 dhe a₄ = 54 merret q = 9.', fix: 'a₄ : a₂ = q² = 9, pra q = 3.' },
        ],
        practice: [
          { problem: 'Në progresionin aritmetik a₃ = 10 dhe a₇ = 22. Gjeni d.', solution: 'd = 3', steps: ['a₇ − a₃ = 4d = 12.', 'd = 3.'] },
          { problem: 'Në progresionin gjeometrik me q > 0, a₂ = 6 dhe a₄ = 54. Gjeni q.', solution: 'q = 3', steps: ['a₄ : a₂ = q² = 9.', 'q = 3.'] },
          { problem: 'Gjeni mesataren aritmetike dhe gjeometrike të 4 dhe 16.', solution: '10 dhe 8', steps: ['(4 + 16)/2 = 10.', '√(4 · 16) = √64 = 8.'] },
        ],
      },
      en: {
        title: 'Arithmetic and geometric progressions',
        objectives: ['Use aₙ = a₁ + (n − 1)d and aₙ = a₁ · qⁿ⁻¹.', 'Find d or q from two terms, and the arithmetic and geometric means.'],
        theory: 'Arithmetic progression: aₙ₊₁ = aₙ + d, aₙ = a₁ + (n − 1)d. With a₁ = 3, d = 4: a₂₀ = 3 + 19 · 4 = 79.\nGeometric progression: aₙ₊₁ = aₙ · q, aₙ = a₁ · qⁿ⁻¹. With a₁ = 2, q = 3: a₆ = 2 · 3⁵ = 486.\n\nFrom two terms: aₖ − aₘ = (k − m)d and aₖ ÷ aₘ = qᵏ⁻ᵐ.\n\nMiddle term: arithmetic b = (a + c)/2 (arithmetic mean), geometric b = √(ac) (geometric mean).',
        keyPoints: ['aₙ = a₁ + (n − 1)d', 'aₙ = a₁ · qⁿ⁻¹', 'Middle term: (a + c)/2 or √(ac)'],
        examples: [
          { example: 'a₁ = 3, d = 4. Find a₂₀.', solution: 'a₂₀ = 3 + 19 · 4 = 79.' },
          { example: 'a₁ = 2, q = 3. Find a₆.', solution: 'a₆ = 2 · 3⁵ = 2 · 243 = 486.' },
        ],
        commonMistakes: [
          { mistake: 'a₂₀ = a₁ + 20d.', fix: 'From a₁ to a₂₀ there are 19 steps: a₁ + 19d.' },
          { mistake: 'From a₂ = 6 and a₄ = 54, q = 9 is taken.', fix: 'a₄ ÷ a₂ = q² = 9, so q = 3.' },
        ],
        practice: [
          { problem: 'In an arithmetic progression a₃ = 10 and a₇ = 22. Find d.', solution: 'd = 3', steps: ['a₇ − a₃ = 4d = 12.', 'd = 3.'] },
          { problem: 'In a geometric progression with q > 0, a₂ = 6 and a₄ = 54. Find q.', solution: 'q = 3', steps: ['a₄ ÷ a₂ = q² = 9.', 'q = 3.'] },
          { problem: 'Find the arithmetic and geometric means of 4 and 16.', solution: '10 and 8', steps: ['(4 + 16)/2 = 10.', '√(4 · 16) = √64 = 8.'] },
        ],
      },
      de: {
        title: 'Arithmetische und geometrische Folgen',
        objectives: ['aₙ = a₁ + (n − 1)d und aₙ = a₁ · qⁿ⁻¹ anwenden.', 'd oder q aus zwei Gliedern sowie arithmetisches und geometrisches Mittel bestimmen.'],
        theory: 'Arithmetische Folge: aₙ₊₁ = aₙ + d, aₙ = a₁ + (n − 1)d. Mit a₁ = 3, d = 4: a₂₀ = 3 + 19 · 4 = 79.\nGeometrische Folge: aₙ₊₁ = aₙ · q, aₙ = a₁ · qⁿ⁻¹. Mit a₁ = 2, q = 3: a₆ = 2 · 3⁵ = 486.\n\nAus zwei Gliedern: aₖ − aₘ = (k − m)d und aₖ : aₘ = qᵏ⁻ᵐ.\n\nMittleres Glied: arithmetisch b = (a + c)/2 (arithmetisches Mittel), geometrisch b = √(ac) (geometrisches Mittel).',
        keyPoints: ['aₙ = a₁ + (n − 1)d', 'aₙ = a₁ · qⁿ⁻¹', 'Mittleres Glied: (a + c)/2 oder √(ac)'],
        examples: [
          { example: 'a₁ = 3, d = 4. Bestimmen Sie a₂₀.', solution: 'a₂₀ = 3 + 19 · 4 = 79.' },
          { example: 'a₁ = 2, q = 3. Bestimmen Sie a₆.', solution: 'a₆ = 2 · 3⁵ = 2 · 243 = 486.' },
        ],
        commonMistakes: [
          { mistake: 'a₂₀ = a₁ + 20d.', fix: 'Von a₁ bis a₂₀ sind es 19 Schritte: a₁ + 19d.' },
          { mistake: 'Aus a₂ = 6 und a₄ = 54 wird q = 9 genommen.', fix: 'a₄ : a₂ = q² = 9, also q = 3.' },
        ],
        practice: [
          { problem: 'In einer arithmetischen Folge ist a₃ = 10 und a₇ = 22. Bestimmen Sie d.', solution: 'd = 3', steps: ['a₇ − a₃ = 4d = 12.', 'd = 3.'] },
          { problem: 'In einer geometrischen Folge mit q > 0 ist a₂ = 6 und a₄ = 54. Bestimmen Sie q.', solution: 'q = 3', steps: ['a₄ : a₂ = q² = 9.', 'q = 3.'] },
          { problem: 'Bestimmen Sie das arithmetische und das geometrische Mittel von 4 und 16.', solution: '10 und 8', steps: ['(4 + 16)/2 = 10.', '√(4 · 16) = √64 = 8.'] },
        ],
      },
    },
    // ───────── 4. Sums
    {
      slug: 'g12-sequences-progressions-sums',
      noVisual: 'The sum formulas are applied step by step in the worked examples.',
      answers: {
        examples: [[['20/2 * (3 + 79)', 820]], [['2 * (3^5 - 1) / (3 - 1)', 242]]],
        practice: [[['100 * 101 / 2', 5050]], [['1 / (1 - 1/2)', 2]], [['5 * (2^6 - 1) / (2 - 1)', 315]]],
      },
      al: {
        title: 'Shumat e progresioneve',
        objectives: ['Të llogaritni shumën e n kufizave të progresionit aritmetik dhe gjeometrik.', 'Të llogaritni shumën e pafundme gjeometrike kur |q| < 1.'],
        theory: 'Aritmetik: Sₙ = n/2 · (a₁ + aₙ) = n/2 · (2a₁ + (n − 1)d). Me a₁ = 3, d = 4: S₂₀ = 10 · (3 + 79) = 820.\n\nGjeometrik (q ≠ 1): Sₙ = a₁ · (qⁿ − 1)/(q − 1). Me a₁ = 2, q = 3: S₅ = 2 · (243 − 1)/2 = 242.\n\nKur |q| < 1, kufizat bëhen gjithnjë e më të vogla dhe shuma e pafundme është S = a₁/(1 − q): 1 + 1/2 + 1/4 + … = 1/(1 − 1/2) = 2. Kur |q| ≥ 1, shuma e pafundme nuk ekziston.',
        keyPoints: ['Sₙ = n/2 · (a₁ + aₙ)', 'Sₙ = a₁(qⁿ − 1)/(q − 1)', '|q| < 1: S = a₁/(1 − q)'],
        examples: [
          { example: 'a₁ = 3, d = 4. Gjeni S₂₀.', solution: 'a₂₀ = 79; S₂₀ = 20/2 · (3 + 79) = 820.' },
          { example: 'a₁ = 2, q = 3. Gjeni shumën e 5 kufizave të para.', solution: 'S₅ = 2 · (3⁵ − 1)/(3 − 1) = 242 (2 + 6 + 18 + 54 + 162).' },
        ],
        commonMistakes: [
          { mistake: 'Formula a₁/(1 − q) përdoret edhe për q = 2.', fix: 'Shuma e pafundme ekziston vetëm për |q| < 1.' },
        ],
        practice: [
          { problem: 'Llogaritni 1 + 2 + 3 + … + 100.', solution: '5 050', steps: ['n = 100, a₁ = 1, a₁₀₀ = 100.', 'S = 100/2 · 101 = 5 050.'] },
          { problem: 'Llogaritni 1 + 1/2 + 1/4 + 1/8 + …', solution: '2', steps: ['a₁ = 1, q = 1/2, |q| < 1.', 'S = 1/(1 − 1/2) = 2.'] },
          { problem: 'Gjeni shumën e 6 kufizave të para të 5, 10, 20, …', solution: '315', steps: ['a₁ = 5, q = 2.', 'S₆ = 5 · (2⁶ − 1)/(2 − 1) = 5 · 63 = 315.'] },
        ],
      },
      en: {
        title: 'Sums of progressions',
        objectives: ['Work out the sum of n terms of arithmetic and geometric progressions.', 'Work out the infinite geometric sum when |q| < 1.'],
        theory: 'Arithmetic: Sₙ = n/2 · (a₁ + aₙ) = n/2 · (2a₁ + (n − 1)d). With a₁ = 3, d = 4: S₂₀ = 10 · (3 + 79) = 820.\n\nGeometric (q ≠ 1): Sₙ = a₁ · (qⁿ − 1)/(q − 1). With a₁ = 2, q = 3: S₅ = 2 · (243 − 1)/2 = 242.\n\nWhen |q| < 1 the terms keep getting smaller and the infinite sum is S = a₁/(1 − q): 1 + 1/2 + 1/4 + … = 1/(1 − 1/2) = 2. When |q| ≥ 1 there is no infinite sum.',
        keyPoints: ['Sₙ = n/2 · (a₁ + aₙ)', 'Sₙ = a₁(qⁿ − 1)/(q − 1)', '|q| < 1: S = a₁/(1 − q)'],
        examples: [
          { example: 'a₁ = 3, d = 4. Find S₂₀.', solution: 'a₂₀ = 79; S₂₀ = 20/2 · (3 + 79) = 820.' },
          { example: 'a₁ = 2, q = 3. Find the sum of the first 5 terms.', solution: 'S₅ = 2 · (3⁵ − 1)/(3 − 1) = 242 (2 + 6 + 18 + 54 + 162).' },
        ],
        commonMistakes: [
          { mistake: 'The formula a₁/(1 − q) is used for q = 2 too.', fix: 'The infinite sum only exists for |q| < 1.' },
        ],
        practice: [
          { problem: 'Work out 1 + 2 + 3 + … + 100.', solution: '5 050', steps: ['n = 100, a₁ = 1, a₁₀₀ = 100.', 'S = 100/2 · 101 = 5 050.'] },
          { problem: 'Work out 1 + 1/2 + 1/4 + 1/8 + …', solution: '2', steps: ['a₁ = 1, q = 1/2, |q| < 1.', 'S = 1/(1 − 1/2) = 2.'] },
          { problem: 'Find the sum of the first 6 terms of 5, 10, 20, …', solution: '315', steps: ['a₁ = 5, q = 2.', 'S₆ = 5 · (2⁶ − 1)/(2 − 1) = 5 · 63 = 315.'] },
        ],
      },
      de: {
        title: 'Summen von Folgen',
        objectives: ['Die Summe der ersten n Glieder arithmetischer und geometrischer Folgen berechnen.', 'Die unendliche geometrische Reihe für |q| < 1 berechnen.'],
        theory: 'Arithmetisch: Sₙ = n/2 · (a₁ + aₙ) = n/2 · (2a₁ + (n − 1)d). Mit a₁ = 3, d = 4: S₂₀ = 10 · (3 + 79) = 820.\n\nGeometrisch (q ≠ 1): Sₙ = a₁ · (qⁿ − 1)/(q − 1). Mit a₁ = 2, q = 3: S₅ = 2 · (243 − 1)/2 = 242.\n\nFür |q| < 1 werden die Glieder immer kleiner, und die unendliche Reihe hat den Wert S = a₁/(1 − q): 1 + 1/2 + 1/4 + … = 1/(1 − 1/2) = 2. Für |q| ≥ 1 gibt es keinen solchen Wert.',
        keyPoints: ['Sₙ = n/2 · (a₁ + aₙ)', 'Sₙ = a₁(qⁿ − 1)/(q − 1)', '|q| < 1: S = a₁/(1 − q)'],
        examples: [
          { example: 'a₁ = 3, d = 4. Bestimmen Sie S₂₀.', solution: 'a₂₀ = 79; S₂₀ = 20/2 · (3 + 79) = 820.' },
          { example: 'a₁ = 2, q = 3. Bestimmen Sie die Summe der ersten 5 Glieder.', solution: 'S₅ = 2 · (3⁵ − 1)/(3 − 1) = 242 (2 + 6 + 18 + 54 + 162).' },
        ],
        commonMistakes: [
          { mistake: 'Die Formel a₁/(1 − q) wird auch für q = 2 verwendet.', fix: 'Die unendliche Reihe hat nur für |q| < 1 einen Wert.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 1 + 2 + 3 + … + 100.', solution: '5 050', steps: ['n = 100, a₁ = 1, a₁₀₀ = 100.', 'S = 100/2 · 101 = 5 050.'] },
          { problem: 'Berechnen Sie 1 + 1/2 + 1/4 + 1/8 + …', solution: '2', steps: ['a₁ = 1, q = 1/2, |q| < 1.', 'S = 1/(1 − 1/2) = 2.'] },
          { problem: 'Bestimmen Sie die Summe der ersten 6 Glieder von 5, 10, 20, …', solution: '315', steps: ['a₁ = 5, q = 2.', 'S₆ = 5 · (2⁶ − 1)/(2 − 1) = 5 · 63 = 315.'] },
        ],
      },
    },
  ],
};
