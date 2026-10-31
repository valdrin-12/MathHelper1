// Grade 7 · Theme 6: Powers and square roots (November–December)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g7-powers-roots',
  i18n: {
    al: { title: 'Fuqitë dhe rrënja katrore', description: 'Kuptimi i fuqisë, vetitë e saj, trajta shkencore e numrave të mëdhenj dhe rrënja katrore.' },
    en: { title: 'Powers and square roots', description: 'What a power is, its properties, standard form of large numbers and the square root.' },
    de: { title: 'Potenzen und Quadratwurzeln', description: 'Was eine Potenz ist, Potenzgesetze, wissenschaftliche Schreibweise großer Zahlen und die Quadratwurzel.' },
  },
  lessons: [
    // ───────── 1. Meaning of a power
    {
      slug: 'g7-powers-roots-power-meaning',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Fuqia', 'Power', 'Potenz'), cells: ['2¹', '2²', '2³', '2⁴', '2⁵', '2⁶'] },
          { head: alt('Vlera', 'Value', 'Wert'), cells: ['2', '4', '8', '16', '32', '64'] },
        ],
        highlight: [[1, 4]],
        caption: alt('Çdo herë shumëzojmë edhe një herë me 2: 2⁵ = 2 · 2 · 2 · 2 · 2 = 32.', 'Each time we multiply by 2 once more: 2⁵ = 2 · 2 · 2 · 2 · 2 = 32.', 'Jedes Mal wird noch einmal mit 2 multipliziert: 2⁵ = 2 · 2 · 2 · 2 · 2 = 32.'),
        alt: alt('Tabela e fuqive të 2 nga 2¹ deri 2⁶: 2, 4, 8, 16, 32, 64.', 'Table of powers of 2 from 2¹ to 2⁶: 2, 4, 8, 16, 32, 64.', 'Tabelle der Zweierpotenzen von 2¹ bis 2⁶: 2, 4, 8, 16, 32, 64.'),
      }],
      answers: {
        examples: [[['2^5', 32]], [['(-3)^2', 9], ['-(3^2)', -9]]],
        practice: [[['3^4', 81]], [['(-2)^3', -8]], [['10^6', 1000000]]],
      },
      al: {
        title: 'Kuptimi i fuqisë',
        objectives: ['Të shkruani një shumëzim me faktorë të njëjtë si fuqi.', 'Të njehsoni fuqi të numrave pozitivë dhe negativë.'],
        theory: 'Fuqia aⁿ është shumëzimi i n faktorëve të barabartë me a: 2⁵ = 2 · 2 · 2 · 2 · 2 = 32. Numri a quhet bazë, numri n eksponent. a² lexohet "a në katror", a³ "a në kub".\n\nFuqitë e 10 kanë po aq zero sa eksponenti: 10³ = 1 000, 10⁶ = 1 000 000. Çdo numër në fuqinë 1 është vetvetja: a¹ = a.\n\nKujdes me numrat negativë: (−3)² = (−3) · (−3) = 9, ndërsa −3² = −(3 · 3) = −9. Një bazë negative në fuqi çift jep numër pozitiv, në fuqi tek jep numër negativ.',
        keyPoints: ['aⁿ = a · a · … · a (n faktorë)', '10ⁿ = 1 me n zero', '(−a)² > 0, por −a² < 0'],
        examples: [
          { example: 'Llogaritni 2⁵.', solution: '2 · 2 · 2 · 2 · 2 = 32.' },
          { example: 'Krahasoni (−3)² dhe −3².', solution: '(−3)² = 9, ndërsa −3² = −9; fuqia vlen vetëm për atë që është brenda kllapave ose menjëherë para eksponentit.' },
        ],
        commonMistakes: [
          { mistake: '2⁵ = 2 · 5 = 10', fix: 'Eksponenti tregon sa herë shumëzohet baza me vetveten: 2⁵ = 32.' },
          { mistake: '−3² = 9', fix: 'Pa kllapa, katrorohet vetëm 3: −3² = −9.' },
        ],
        practice: [
          { problem: 'Llogaritni 3⁴.', solution: '81', steps: ['3 · 3 = 9, 9 · 3 = 27.', '27 · 3 = 81.'] },
          { problem: 'Llogaritni (−2)³.', solution: '−8', steps: ['(−2) · (−2) = 4.', '4 · (−2) = −8.'] },
          { problem: 'Shkruani 10⁶ si numër.', solution: '1 000 000', steps: ['Eksponenti 6 → 6 zero.', '1 000 000.'] },
        ],
      },
      en: {
        title: 'What a power means',
        objectives: ['Write a product of equal factors as a power.', 'Evaluate powers of positive and negative numbers.'],
        theory: 'The power aⁿ is the product of n factors equal to a: 2⁵ = 2 · 2 · 2 · 2 · 2 = 32. The number a is the base, n is the exponent (index). a² is read "a squared", a³ "a cubed".\n\nPowers of 10 have as many zeros as the exponent: 10³ = 1 000, 10⁶ = 1 000 000. Any number to the power 1 is itself: a¹ = a.\n\nCareful with negative numbers: (−3)² = (−3) · (−3) = 9, but −3² = −(3 · 3) = −9. A negative base to an even power gives a positive number, to an odd power a negative one.',
        keyPoints: ['aⁿ = a · a · … · a (n factors)', '10ⁿ = 1 followed by n zeros', '(−a)² > 0, but −a² < 0'],
        examples: [
          { example: 'Work out 2⁵.', solution: '2 · 2 · 2 · 2 · 2 = 32.' },
          { example: 'Compare (−3)² and −3².', solution: '(−3)² = 9, but −3² = −9; the power applies only to what is in the brackets or just before the exponent.' },
        ],
        commonMistakes: [
          { mistake: '2⁵ = 2 · 5 = 10', fix: 'The exponent tells how many times the base is multiplied by itself: 2⁵ = 32.' },
          { mistake: '−3² = 9', fix: 'Without brackets only 3 is squared: −3² = −9.' },
        ],
        practice: [
          { problem: 'Work out 3⁴.', solution: '81', steps: ['3 · 3 = 9, 9 · 3 = 27.', '27 · 3 = 81.'] },
          { problem: 'Work out (−2)³.', solution: '−8', steps: ['(−2) · (−2) = 4.', '4 · (−2) = −8.'] },
          { problem: 'Write 10⁶ as a number.', solution: '1 000 000', steps: ['Exponent 6 → 6 zeros.', '1 000 000.'] },
        ],
      },
      de: {
        title: 'Was eine Potenz bedeutet',
        objectives: ['Ein Produkt gleicher Faktoren als Potenz schreiben.', 'Potenzen positiver und negativer Zahlen berechnen.'],
        theory: 'Die Potenz aⁿ ist das Produkt aus n gleichen Faktoren a: 2⁵ = 2 · 2 · 2 · 2 · 2 = 32. Die Zahl a heißt Basis, n heißt Exponent (Hochzahl). a² liest man „a Quadrat“, a³ „a hoch drei“.\n\nZehnerpotenzen haben so viele Nullen wie der Exponent angibt: 10³ = 1 000, 10⁶ = 1 000 000. Jede Zahl hoch 1 ist die Zahl selbst: a¹ = a.\n\nVorsicht bei negativen Zahlen: (−3)² = (−3) · (−3) = 9, aber −3² = −(3 · 3) = −9. Eine negative Basis mit geradem Exponenten ergibt eine positive Zahl, mit ungeradem eine negative.',
        keyPoints: ['aⁿ = a · a · … · a (n Faktoren)', '10ⁿ = 1 mit n Nullen', '(−a)² > 0, aber −a² < 0'],
        examples: [
          { example: 'Berechnen Sie 2⁵.', solution: '2 · 2 · 2 · 2 · 2 = 32.' },
          { example: 'Vergleichen Sie (−3)² und −3².', solution: '(−3)² = 9, aber −3² = −9; die Potenz gilt nur für das, was in der Klammer oder direkt vor dem Exponenten steht.' },
        ],
        commonMistakes: [
          { mistake: '2⁵ = 2 · 5 = 10', fix: 'Der Exponent gibt an, wie oft die Basis mit sich selbst multipliziert wird: 2⁵ = 32.' },
          { mistake: '−3² = 9', fix: 'Ohne Klammer wird nur die 3 quadriert: −3² = −9.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 3⁴.', solution: '81', steps: ['3 · 3 = 9, 9 · 3 = 27.', '27 · 3 = 81.'] },
          { problem: 'Berechnen Sie (−2)³.', solution: '−8', steps: ['(−2) · (−2) = 4.', '4 · (−2) = −8.'] },
          { problem: 'Schreiben Sie 10⁶ als Zahl.', solution: '1 000 000', steps: ['Exponent 6 → 6 Nullen.', '1 000 000.'] },
        ],
      },
    },

    // ───────── 2. Properties of powers
    {
      slug: 'g7-powers-roots-power-properties',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Rregulla', 'Rule', 'Regel'), cells: ['aᵐ · aⁿ', 'aᵐ : aⁿ', '(aᵐ)ⁿ', '(a · b)ⁿ'] },
          { head: '=', cells: ['aᵐ⁺ⁿ', 'aᵐ⁻ⁿ', 'aᵐ·ⁿ', 'aⁿ · bⁿ'] },
          { head: alt('Shembull', 'Example', 'Beispiel'), cells: ['2³ · 2⁴ = 2⁷', '3⁵ : 3² = 3³', '(5²)³ = 5⁶', '(2 · 5)³ = 10³'] },
        ],
        alt: alt('Tabela e vetive të fuqive me nga një shembull.', 'Table of the rules for powers, each with an example.', 'Tabelle der Potenzgesetze mit je einem Beispiel.'),
      }],
      answers: {
        examples: [[['2^3 * 2^4', 128]], [['(5^2)^3', 15625]]],
        practice: [[['3^5 / 3^2', 27]], [['10^4 * 10^3', 10000000]], [['(2 * 5)^3', 1000]]],
      },
      al: {
        title: 'Vetitë e fuqive',
        objectives: ['Të shumëzoni dhe të pjesëtoni fuqi me bazë të njëjtë.', 'Të ngrini një fuqi në fuqi dhe një prodhim në fuqi.'],
        theory: 'Kur shumëzojmë fuqi me të njëjtën bazë, eksponentët mblidhen: 2³ · 2⁴ = (2 · 2 · 2) · (2 · 2 · 2 · 2) = 2⁷.\n\nKur pjesëtojmë fuqi me të njëjtën bazë (eksponenti i parë më i madh), eksponentët zbriten: 3⁵ : 3² = 3³. Kur një fuqi ngrihet në fuqi, eksponentët shumëzohen: (5²)³ = 5⁶. Prodhimi në fuqi: (2 · 5)³ = 2³ · 5³.\n\nFuqia me eksponent 0 është 1 për çdo bazë jo zero: a⁰ = 1, sepse p.sh. 3² : 3² = 1.',
        keyPoints: ['aᵐ · aⁿ = aᵐ⁺ⁿ', 'aᵐ : aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐ·ⁿ;  a⁰ = 1'],
        examples: [
          { example: 'Thjeshtoni 2³ · 2⁴.', solution: '2³ · 2⁴ = 2⁷ = 128.' },
          { example: 'Llogaritni (5²)³.', solution: '(5²)³ = 5⁶ = 15 625.' },
        ],
        commonMistakes: [
          { mistake: '2³ · 2⁴ = 4⁷ ose 2¹²', fix: 'Baza mbetet 2; eksponentët mblidhen (jo shumëzohen): 2⁷.' },
          { mistake: '2³ + 2⁴ = 2⁷', fix: 'Rregulla vlen vetëm për shumëzimin; 2³ + 2⁴ = 8 + 16 = 24.' },
        ],
        practice: [
          { problem: 'Llogaritni 3⁵ : 3².', solution: '27', steps: ['3⁵ : 3² = 3³.', '3³ = 27.'] },
          { problem: 'Shkruani si numër 10⁴ · 10³.', solution: '10 000 000', steps: ['10⁴ · 10³ = 10⁷.', '1 me 7 zero.'] },
          { problem: 'Llogaritni (2 · 5)³.', solution: '1 000', steps: ['2 · 5 = 10.', '10³ = 1 000.'] },
        ],
      },
      en: {
        title: 'Rules for powers',
        objectives: ['Multiply and divide powers with the same base.', 'Raise a power to a power and a product to a power.'],
        theory: 'When we multiply powers with the same base, the exponents add: 2³ · 2⁴ = (2 · 2 · 2) · (2 · 2 · 2 · 2) = 2⁷.\n\nWhen we divide powers with the same base (the first exponent larger), the exponents subtract: 3⁵ ÷ 3² = 3³. When a power is raised to a power, the exponents multiply: (5²)³ = 5⁶. A product to a power: (2 · 5)³ = 2³ · 5³.\n\nA power with exponent 0 is 1 for every non-zero base: a⁰ = 1, because e.g. 3² ÷ 3² = 1.',
        keyPoints: ['aᵐ · aⁿ = aᵐ⁺ⁿ', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐ·ⁿ;  a⁰ = 1'],
        examples: [
          { example: 'Simplify 2³ · 2⁴.', solution: '2³ · 2⁴ = 2⁷ = 128.' },
          { example: 'Work out (5²)³.', solution: '(5²)³ = 5⁶ = 15 625.' },
        ],
        commonMistakes: [
          { mistake: '2³ · 2⁴ = 4⁷ or 2¹²', fix: 'The base stays 2; the exponents add (not multiply): 2⁷.' },
          { mistake: '2³ + 2⁴ = 2⁷', fix: 'The rule is only for multiplication; 2³ + 2⁴ = 8 + 16 = 24.' },
        ],
        practice: [
          { problem: 'Work out 3⁵ ÷ 3².', solution: '27', steps: ['3⁵ ÷ 3² = 3³.', '3³ = 27.'] },
          { problem: 'Write 10⁴ · 10³ as a number.', solution: '10 000 000', steps: ['10⁴ · 10³ = 10⁷.', '1 followed by 7 zeros.'] },
          { problem: 'Work out (2 · 5)³.', solution: '1 000', steps: ['2 · 5 = 10.', '10³ = 1 000.'] },
        ],
      },
      de: {
        title: 'Potenzgesetze',
        objectives: ['Potenzen mit gleicher Basis multiplizieren und dividieren.', 'Eine Potenz potenzieren und ein Produkt potenzieren.'],
        theory: 'Multipliziert man Potenzen mit gleicher Basis, werden die Exponenten addiert: 2³ · 2⁴ = (2 · 2 · 2) · (2 · 2 · 2 · 2) = 2⁷.\n\nDividiert man Potenzen mit gleicher Basis (erster Exponent größer), werden die Exponenten subtrahiert: 3⁵ : 3² = 3³. Wird eine Potenz potenziert, werden die Exponenten multipliziert: (5²)³ = 5⁶. Ein Produkt wird potenziert, indem man jeden Faktor potenziert: (2 · 5)³ = 2³ · 5³.\n\nEine Potenz mit dem Exponenten 0 ist für jede Basis ungleich null gleich 1: a⁰ = 1, denn z. B. 3² : 3² = 1.',
        keyPoints: ['aᵐ · aⁿ = aᵐ⁺ⁿ', 'aᵐ : aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐ·ⁿ;  a⁰ = 1'],
        examples: [
          { example: 'Vereinfachen Sie 2³ · 2⁴.', solution: '2³ · 2⁴ = 2⁷ = 128.' },
          { example: 'Berechnen Sie (5²)³.', solution: '(5²)³ = 5⁶ = 15 625.' },
        ],
        commonMistakes: [
          { mistake: '2³ · 2⁴ = 4⁷ oder 2¹²', fix: 'Die Basis bleibt 2; die Exponenten werden addiert (nicht multipliziert): 2⁷.' },
          { mistake: '2³ + 2⁴ = 2⁷', fix: 'Das Gesetz gilt nur fürs Multiplizieren; 2³ + 2⁴ = 8 + 16 = 24.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 3⁵ : 3².', solution: '27', steps: ['3⁵ : 3² = 3³.', '3³ = 27.'] },
          { problem: 'Schreiben Sie 10⁴ · 10³ als Zahl.', solution: '10 000 000', steps: ['10⁴ · 10³ = 10⁷.', '1 mit 7 Nullen.'] },
          { problem: 'Berechnen Sie (2 · 5)³.', solution: '1 000', steps: ['2 · 5 = 10.', '10³ = 1 000.'] },
        ],
      },
    },

    // ───────── 3. Scientific notation
    {
      slug: 'g7-powers-roots-scientific-notation',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Numri', 'Number', 'Zahl'), cells: ['45 000 000', '320 000', '150 000 000'] },
          { head: alt('Trajta shkencore', 'Standard form', 'Wissenschaftliche Schreibweise'), cells: ['4,5 · 10⁷', '3,2 · 10⁵', '1,5 · 10⁸'] },
        ],
        alt: alt('Tre numra të mëdhenj dhe trajta e tyre shkencore.', 'Three large numbers and their standard form.', 'Drei große Zahlen und ihre wissenschaftliche Schreibweise.'),
      }],
      answers: {
        examples: [[['4.5 * 10^7', 45000000]], [['3.2 * 10^5', 320000]]],
        practice: [[['6 * 10^6', 6000000]], [['1.5 * 10^8', 150000000]], [['2.05 * 10^4', 20500]]],
      },
      al: {
        title: 'Trajta shkencore',
        objectives: ['Të shkruani numra të mëdhenj në trajtën a · 10ⁿ.', 'Të shndërroni nga trajta shkencore në numër të zakonshëm.'],
        theory: 'Numrat shumë të mëdhenj (largësi në hapësirë, popullsi) shkruhen më shkurt në trajtën shkencore: a · 10ⁿ, ku 1 ≤ a < 10 dhe n është numër natyror.\n\nPër ta shkruar: e lëvizim presjen majtas derisa para saj të mbetet vetëm një shifër (jo zero); numri i vendeve që lëvizëm është eksponenti. 45 000 000 = 4,5 · 10⁷ (presja lëvizi 7 vende).\n\nAnasjelltas, 3,2 · 10⁵: e lëvizim presjen 5 vende djathtas dhe plotësojmë me zero: 320 000.',
        keyPoints: ['a · 10ⁿ me 1 ≤ a < 10', 'Eksponenti = sa vende lëviz presja', 'Kontroll: 4,5 · 10⁷ ka 8 shifra para presjes.'],
        examples: [
          { example: 'Shkruani 45 000 000 në trajtë shkencore.', solution: 'Presja lëviz 7 vende: 4,5 · 10⁷ (= 45 000 000).' },
          { example: 'Shkruani 3,2 · 10⁵ si numër të zakonshëm.', solution: 'Presja 5 vende djathtas: 320 000.' },
        ],
        commonMistakes: [
          { mistake: '45 000 000 = 45 · 10⁶', fix: 'Vlera është e saktë, por a duhet të jetë ndërmjet 1 dhe 10: 4,5 · 10⁷.' },
        ],
        practice: [
          { problem: 'Shkruani 6 000 000 në trajtë shkencore.', solution: '6 · 10⁶', steps: ['6 me 6 zero pas.', '6 · 10⁶ (= 6 000 000).'] },
          { problem: 'Largësia Tokë–Diell është rreth 150 000 000 km. Shkruajeni në trajtë shkencore.', solution: '1,5 · 10⁸ km', steps: ['Presja lëviz 8 vende.', '1,5 · 10⁸ (= 150 000 000).'] },
          { problem: 'Shkruani 2,05 · 10⁴ si numër.', solution: '20 500', steps: ['Presja 4 vende djathtas.', '20 500.'] },
        ],
      },
      en: {
        title: 'Standard form (scientific notation)',
        objectives: ['Write large numbers in the form a · 10ⁿ.', 'Change from standard form to an ordinary number.'],
        theory: 'Very large numbers (distances in space, populations) are written more briefly in standard form: a · 10ⁿ, where 1 ≤ a < 10 and n is a whole number.\n\nTo write it, move the decimal point left until only one non-zero digit is in front of it; the number of places moved is the exponent. 45 000 000 = 4.5 · 10⁷ (the point moved 7 places).\n\nThe other way, 3.2 · 10⁵: move the point 5 places right and fill with zeros: 320 000.',
        keyPoints: ['a · 10ⁿ with 1 ≤ a < 10', 'Exponent = number of places the point moves', 'Check: 4.5 · 10⁷ has 8 digits before the point.'],
        examples: [
          { example: 'Write 45 000 000 in standard form.', solution: 'The point moves 7 places: 4.5 · 10⁷ (= 45 000 000).' },
          { example: 'Write 3.2 · 10⁵ as an ordinary number.', solution: 'The point moves 5 places right: 320 000.' },
        ],
        commonMistakes: [
          { mistake: '45 000 000 = 45 · 10⁶', fix: 'The value is right, but a must be between 1 and 10: 4.5 · 10⁷.' },
        ],
        practice: [
          { problem: 'Write 6 000 000 in standard form.', solution: '6 · 10⁶', steps: ['6 followed by 6 zeros.', '6 · 10⁶ (= 6 000 000).'] },
          { problem: 'The Earth–Sun distance is about 150 000 000 km. Write it in standard form.', solution: '1.5 · 10⁸ km', steps: ['The point moves 8 places.', '1.5 · 10⁸ (= 150 000 000).'] },
          { problem: 'Write 2.05 · 10⁴ as a number.', solution: '20 500', steps: ['The point moves 4 places right.', '20 500.'] },
        ],
      },
      de: {
        title: 'Wissenschaftliche Schreibweise',
        objectives: ['Große Zahlen in der Form a · 10ⁿ schreiben.', 'Von der wissenschaftlichen Schreibweise in eine gewöhnliche Zahl umwandeln.'],
        theory: 'Sehr große Zahlen (Entfernungen im Weltall, Einwohnerzahlen) schreibt man kürzer in wissenschaftlicher Schreibweise: a · 10ⁿ mit 1 ≤ a < 10 und einer natürlichen Zahl n.\n\nDazu verschiebt man das Komma nach links, bis nur noch eine Ziffer (nicht null) davor steht; die Anzahl der Stellen ist der Exponent. 45 000 000 = 4,5 · 10⁷ (das Komma rückte 7 Stellen).\n\nUmgekehrt bei 3,2 · 10⁵: das Komma 5 Stellen nach rechts verschieben und mit Nullen auffüllen: 320 000.',
        keyPoints: ['a · 10ⁿ mit 1 ≤ a < 10', 'Exponent = Anzahl der Stellen, um die das Komma rückt', 'Probe: 4,5 · 10⁷ hat 8 Stellen vor dem Komma.'],
        examples: [
          { example: 'Schreiben Sie 45 000 000 in wissenschaftlicher Schreibweise.', solution: 'Das Komma rückt 7 Stellen: 4,5 · 10⁷ (= 45 000 000).' },
          { example: 'Schreiben Sie 3,2 · 10⁵ als gewöhnliche Zahl.', solution: 'Das Komma rückt 5 Stellen nach rechts: 320 000.' },
        ],
        commonMistakes: [
          { mistake: '45 000 000 = 45 · 10⁶', fix: 'Der Wert stimmt, aber a muss zwischen 1 und 10 liegen: 4,5 · 10⁷.' },
        ],
        practice: [
          { problem: 'Schreiben Sie 6 000 000 in wissenschaftlicher Schreibweise.', solution: '6 · 10⁶', steps: ['6 mit 6 Nullen.', '6 · 10⁶ (= 6 000 000).'] },
          { problem: 'Die Entfernung Erde–Sonne beträgt etwa 150 000 000 km. Schreiben Sie sie wissenschaftlich.', solution: '1,5 · 10⁸ km', steps: ['Das Komma rückt 8 Stellen.', '1,5 · 10⁸ (= 150 000 000).'] },
          { problem: 'Schreiben Sie 2,05 · 10⁴ als Zahl.', solution: '20 500', steps: ['Das Komma rückt 4 Stellen nach rechts.', '20 500.'] },
        ],
      },
    },

    // ───────── 4. Square root
    {
      slug: 'g7-powers-roots-square-root',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 7.6, yMin: -1.2, yMax: 7.4 }, grid: true, height: 210,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [7, 0], [7, 7], [0, 7]], fill: true, color: 'primary', label: { at: [3.5, 3.5], text: alt('S = 49', 'A = 49', 'A = 49') } },
          { kind: 'label', at: [3.5, -0.7], text: alt('a = √49 = 7', 'a = √49 = 7', 'a = √49 = 7') },
        ],
        caption: alt('Rrënja katrore e sipërfaqes së katrorit është brinja: √49 = 7, sepse 7² = 49.', 'The square root of a square\'s area is its side: √49 = 7, because 7² = 49.', 'Die Quadratwurzel aus dem Flächeninhalt eines Quadrats ist die Seitenlänge: √49 = 7, denn 7² = 49.'),
        alt: alt('Katror 7 me 7 në rrjetë, me sipërfaqe 49.', 'A 7 by 7 square on a grid with area 49.', 'Ein 7-mal-7-Quadrat im Gitter mit dem Flächeninhalt 49.'),
      }],
      answers: {
        examples: [[['sqrt(196)', 14]], [['7 < sqrt(50) and sqrt(50) < 8', true]]],
        practice: [[['sqrt(144)', 12]], [['sqrt(0.25)', 0.5]], [['sqrt(81)', 9]]],
      },
      al: {
        title: 'Rrënja katrore',
        objectives: ['Të gjeni rrënjën katrore të katrorëve të plotë.', 'Të vlerësoni rrënjën katrore ndërmjet dy numrave natyrorë.'],
        theory: 'Rrënja katrore e një numri jonegativ a është numri jonegativ që, i ngritur në katror, jep a: √49 = 7, sepse 7² = 49. Rrënja katrore është veprimi i kundërt i ngritjes në katror.\n\nKatrorët e plotë janë 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, …; rrënjët e tyre janë numra natyrorë. Edhe √0,25 = 0,5, sepse 0,5² = 0,25.\n\nPër numra që nuk janë katrorë të plotë, e vlerësojmë rrënjën ndërmjet dy numrave natyrorë: 49 < 50 < 64, pra 7 < √50 < 8. Në gjeometri, √S është brinja e katrorit me sipërfaqe S.',
        keyPoints: ['√a = b do të thotë b² = a dhe b ≥ 0.', 'Katrorët e plotë: 1, 4, 9, 16, 25, …', 'Vlerësim: gjeni dy katrorë të plotë fqinjë.'],
        examples: [
          { example: 'Gjeni √196.', solution: '14² = 196, pra √196 = 14.' },
          { example: 'Ndërmjet cilëve numra natyrorë ndodhet √50?', solution: '7² = 49 dhe 8² = 64; 49 < 50 < 64, pra 7 < √50 < 8.' },
        ],
        commonMistakes: [
          { mistake: '√49 = 24,5 (pjesëtohet me 2).', fix: 'Rrënja nuk është gjysma: kërkoni numrin që shumëzuar me vetveten jep 49.' },
        ],
        practice: [
          { problem: 'Gjeni √144.', solution: '12', steps: ['12 · 12 = 144.', '√144 = 12.'] },
          { problem: 'Gjeni √0,25.', solution: '0,5', steps: ['0,5 · 0,5 = 0,25.', '√0,25 = 0,5.'] },
          { problem: 'Një katror ka sipërfaqe 81 cm². Sa është brinja?', solution: '9 cm', steps: ['a = √81.', '9 · 9 = 81, pra a = 9 cm.'] },
        ],
      },
      en: {
        title: 'The square root',
        objectives: ['Find the square root of perfect squares.', 'Estimate a square root between two whole numbers.'],
        theory: 'The square root of a non-negative number a is the non-negative number which, squared, gives a: √49 = 7, because 7² = 49. Taking the square root undoes squaring.\n\nThe perfect squares are 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, …; their roots are whole numbers. Also √0.25 = 0.5, because 0.5² = 0.25.\n\nFor numbers that are not perfect squares, we estimate the root between two whole numbers: 49 < 50 < 64, so 7 < √50 < 8. In geometry, √A is the side of a square with area A.',
        keyPoints: ['√a = b means b² = a and b ≥ 0.', 'Perfect squares: 1, 4, 9, 16, 25, …', 'Estimating: find two neighbouring perfect squares.'],
        examples: [
          { example: 'Find √196.', solution: '14² = 196, so √196 = 14.' },
          { example: 'Between which whole numbers does √50 lie?', solution: '7² = 49 and 8² = 64; 49 < 50 < 64, so 7 < √50 < 8.' },
        ],
        commonMistakes: [
          { mistake: '√49 = 24.5 (halving).', fix: 'The root is not half the number: find the number that multiplied by itself gives 49.' },
        ],
        practice: [
          { problem: 'Find √144.', solution: '12', steps: ['12 · 12 = 144.', '√144 = 12.'] },
          { problem: 'Find √0.25.', solution: '0.5', steps: ['0.5 · 0.5 = 0.25.', '√0.25 = 0.5.'] },
          { problem: 'A square has an area of 81 cm². How long is a side?', solution: '9 cm', steps: ['a = √81.', '9 · 9 = 81, so a = 9 cm.'] },
        ],
      },
      de: {
        title: 'Die Quadratwurzel',
        objectives: ['Die Quadratwurzel von Quadratzahlen bestimmen.', 'Eine Quadratwurzel zwischen zwei natürlichen Zahlen abschätzen.'],
        theory: 'Die Quadratwurzel einer nicht negativen Zahl a ist die nicht negative Zahl, die quadriert a ergibt: √49 = 7, denn 7² = 49. Das Wurzelziehen macht das Quadrieren rückgängig.\n\nQuadratzahlen sind 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, …; ihre Wurzeln sind natürliche Zahlen. Auch √0,25 = 0,5, denn 0,5² = 0,25.\n\nBei Zahlen, die keine Quadratzahlen sind, schätzt man die Wurzel zwischen zwei natürlichen Zahlen ab: 49 < 50 < 64, also 7 < √50 < 8. In der Geometrie ist √A die Seitenlänge eines Quadrats mit dem Flächeninhalt A.',
        keyPoints: ['√a = b bedeutet b² = a und b ≥ 0.', 'Quadratzahlen: 1, 4, 9, 16, 25, …', 'Abschätzen: zwei benachbarte Quadratzahlen suchen.'],
        examples: [
          { example: 'Bestimmen Sie √196.', solution: '14² = 196, also √196 = 14.' },
          { example: 'Zwischen welchen natürlichen Zahlen liegt √50?', solution: '7² = 49 und 8² = 64; 49 < 50 < 64, also 7 < √50 < 8.' },
        ],
        commonMistakes: [
          { mistake: '√49 = 24,5 (halbiert).', fix: 'Die Wurzel ist nicht die Hälfte: Gesucht ist die Zahl, die mit sich selbst multipliziert 49 ergibt.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie √144.', solution: '12', steps: ['12 · 12 = 144.', '√144 = 12.'] },
          { problem: 'Bestimmen Sie √0,25.', solution: '0,5', steps: ['0,5 · 0,5 = 0,25.', '√0,25 = 0,5.'] },
          { problem: 'Ein Quadrat hat den Flächeninhalt 81 cm². Wie lang ist eine Seite?', solution: '9 cm', steps: ['a = √81.', '9 · 9 = 81, also a = 9 cm.'] },
        ],
      },
    },
  ],
};
