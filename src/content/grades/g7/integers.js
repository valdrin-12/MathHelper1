// Grade 7 · Theme 3: Integers (September–October)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g7-integers',
  i18n: {
    al: { title: 'Numrat e plotë', description: 'Katër veprimet me numra të plotë dhe rregullat e shenjave.' },
    en: { title: 'Integers', description: 'The four operations with integers and the sign rules.' },
    de: { title: 'Ganze Zahlen', description: 'Die vier Grundrechenarten mit ganzen Zahlen und die Vorzeichenregeln.' },
  },
  lessons: [
    // ───────── 1. Operations with integers
    {
      slug: 'g7-integers-integer-operations',
      visuals: [{
        type: 'numberLine', min: -8, max: 6, step: 1,
        points: [{ x: -7, label: '−7', color: 'primary', below: true }, { x: 5, label: '5', color: 'secondary', below: true }, { x: 2, label: '2', color: 'success', below: true }],
        jumps: [{ from: -7, to: 5, label: '+12', color: 'secondary' }, { from: 5, to: 2, label: '−3', color: 'success' }],
        caption: alt('−7 − (−12) + (−3): zbritja e −12 është si mbledhja e 12, pastaj −3. Rezultati 2.', '−7 − (−12) + (−3): subtracting −12 is like adding 12, then −3. The result is 2.', '−7 − (−12) + (−3): −12 subtrahieren heißt 12 addieren, dann −3. Ergebnis 2.'),
        alt: alt('Bosht numerik: nga −7 kërcim +12 deri te 5, pastaj −3 deri te 2.', 'Number line: from −7 a jump of +12 to 5, then −3 to 2.', 'Zahlenstrahl: von −7 ein Sprung um +12 bis 5, dann −3 bis 2.'),
      }],
      answers: {
        examples: [[['-7 - (-12) + (-3)', 2]], [['-15 + 8', -7]]],
        practice: [[['6 - (-4)', 10]], [['-9 + (-6)', -15]], [['7 - (-5)', 12]]],
      },
      al: {
        title: 'Katër veprimet me numra të plotë',
        objectives: ['Të mblidhni dhe të zbritni numra të plotë, edhe numra negativë.', 'Të zbritni një numër negativ duke e kthyer në mbledhje.'],
        theory: 'Mbledhja e numrave me shenjë të njëjtë: mblidhen vlerat dhe ruhet shenja: −9 + (−6) = −15. Me shenja të ndryshme: zbritet vlera më e vogël nga më e madhja dhe merret shenja e numrit me vlerë më të madhe: −15 + 8 = −7.\n\nZbritja e një numri është mbledhja e numrit të kundërt: a − b = a + (−b). Prandaj zbritja e një numri negativ bëhet mbledhje: 6 − (−4) = 6 + 4 = 10.\n\nKur ka disa mbledhje e zbritje, i bëjmë me radhë nga e majta, ose i kthejmë të gjitha në mbledhje: −7 − (−12) + (−3) = −7 + 12 − 3 = 2.',
        keyPoints: ['Shenjë e njëjtë: mblidhni vlerat, mbani shenjën.', 'Shenja të ndryshme: zbritni vlerat, merrni shenjën e më të madhit.', 'a − (−b) = a + b'],
        examples: [
          { example: 'Llogaritni −7 − (−12) + (−3).', solution: '−7 + 12 − 3 = 5 − 3 = 2.' },
          { example: 'Llogaritni −15 + 8.', solution: 'Shenja të ndryshme: 15 − 8 = 7, shenja e −15: −7.' },
        ],
        commonMistakes: [
          { mistake: '6 − (−4) = 2', fix: 'Zbritja e −4 është mbledhje e 4: 6 + 4 = 10.' },
          { mistake: '−9 + (−6) = 15 ose −3.', fix: 'Dy negativë: mblidhni vlerat dhe mbani minusin: −15.' },
        ],
        practice: [
          { problem: 'Llogaritni 6 − (−4).', solution: '10', steps: ['6 − (−4) = 6 + 4.', '= 10.'] },
          { problem: 'Llogaritni −9 + (−6).', solution: '−15', steps: ['Të dy negativë: 9 + 6 = 15.', 'Shenja: −15.'] },
          { problem: 'Temperatura ishte −5 °C dhe arriti 7 °C. Sa gradë u rrit?', solution: '12 °C', steps: ['Ndryshimi = 7 − (−5).', '= 7 + 5 = 12.'] },
        ],
      },
      en: {
        title: 'The four operations with integers',
        objectives: ['Add and subtract integers, including negative numbers.', 'Subtract a negative number by turning it into an addition.'],
        theory: 'Adding numbers with the same sign: add their sizes and keep the sign: −9 + (−6) = −15. With different signs: subtract the smaller size from the larger and take the sign of the number with the larger size: −15 + 8 = −7.\n\nSubtracting a number means adding its opposite: a − b = a + (−b). So subtracting a negative number becomes an addition: 6 − (−4) = 6 + 4 = 10.\n\nWith several additions and subtractions, work in order from the left, or turn them all into additions: −7 − (−12) + (−3) = −7 + 12 − 3 = 2.',
        keyPoints: ['Same sign: add the sizes, keep the sign.', 'Different signs: subtract the sizes, take the sign of the larger.', 'a − (−b) = a + b'],
        examples: [
          { example: 'Work out −7 − (−12) + (−3).', solution: '−7 + 12 − 3 = 5 − 3 = 2.' },
          { example: 'Work out −15 + 8.', solution: 'Different signs: 15 − 8 = 7, sign of −15: −7.' },
        ],
        commonMistakes: [
          { mistake: '6 − (−4) = 2', fix: 'Subtracting −4 is adding 4: 6 + 4 = 10.' },
          { mistake: '−9 + (−6) = 15 or −3.', fix: 'Two negatives: add the sizes and keep the minus: −15.' },
        ],
        practice: [
          { problem: 'Work out 6 − (−4).', solution: '10', steps: ['6 − (−4) = 6 + 4.', '= 10.'] },
          { problem: 'Work out −9 + (−6).', solution: '−15', steps: ['Both negative: 9 + 6 = 15.', 'Sign: −15.'] },
          { problem: 'The temperature was −5 °C and reached 7 °C. By how many degrees did it rise?', solution: '12 °C', steps: ['Change = 7 − (−5).', '= 7 + 5 = 12.'] },
        ],
      },
      de: {
        title: 'Rechnen mit ganzen Zahlen',
        objectives: ['Ganze Zahlen addieren und subtrahieren, auch negative.', 'Eine negative Zahl subtrahieren, indem man sie addiert.'],
        theory: 'Zahlen mit gleichem Vorzeichen addiert man, indem man die Beträge addiert und das Vorzeichen behält: −9 + (−6) = −15. Bei verschiedenen Vorzeichen subtrahiert man den kleineren Betrag vom größeren und nimmt das Vorzeichen der Zahl mit dem größeren Betrag: −15 + 8 = −7.\n\nEine Zahl subtrahieren heißt, ihre Gegenzahl addieren: a − b = a + (−b). Deshalb wird das Subtrahieren einer negativen Zahl zu einer Addition: 6 − (−4) = 6 + 4 = 10.\n\nBei mehreren Additionen und Subtraktionen rechnet man von links nach rechts oder macht alles zu Additionen: −7 − (−12) + (−3) = −7 + 12 − 3 = 2.',
        keyPoints: ['Gleiches Vorzeichen: Beträge addieren, Vorzeichen behalten.', 'Verschiedene Vorzeichen: Beträge subtrahieren, Vorzeichen des größeren Betrags.', 'a − (−b) = a + b'],
        examples: [
          { example: 'Berechnen Sie −7 − (−12) + (−3).', solution: '−7 + 12 − 3 = 5 − 3 = 2.' },
          { example: 'Berechnen Sie −15 + 8.', solution: 'Verschiedene Vorzeichen: 15 − 8 = 7, Vorzeichen von −15: −7.' },
        ],
        commonMistakes: [
          { mistake: '6 − (−4) = 2', fix: '−4 subtrahieren heißt 4 addieren: 6 + 4 = 10.' },
          { mistake: '−9 + (−6) = 15 oder −3.', fix: 'Zwei negative Zahlen: Beträge addieren, Minus behalten: −15.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 6 − (−4).', solution: '10', steps: ['6 − (−4) = 6 + 4.', '= 10.'] },
          { problem: 'Berechnen Sie −9 + (−6).', solution: '−15', steps: ['Beide negativ: 9 + 6 = 15.', 'Vorzeichen: −15.'] },
          { problem: 'Die Temperatur war −5 °C und stieg auf 7 °C. Um wie viel Grad stieg sie?', solution: '12 °C', steps: ['Änderung = 7 − (−5).', '= 7 + 5 = 12.'] },
        ],
      },
    },

    // ───────── 2. Sign rules
    {
      slug: 'g7-integers-sign-rules',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '·  :', cells: ['+', '−'] },
          { head: '+', cells: ['+', '−'] },
          { head: '−', cells: ['−', '+'] },
        ],
        highlight: [[1, 0], [2, 1]],
        caption: alt('Shenja të njëjta → rezultat pozitiv; shenja të ndryshme → negativ (për shumëzim dhe pjesëtim).', 'Same signs → positive result; different signs → negative (for multiplying and dividing).', 'Gleiche Vorzeichen → positives Ergebnis; verschiedene → negatives (beim Multiplizieren und Dividieren).'),
        alt: alt('Tabela e shenjave: plus herë plus plus, plus herë minus minus, minus herë minus plus.', 'Sign table: plus times plus is plus, plus times minus is minus, minus times minus is plus.', 'Vorzeichentabelle: plus mal plus ist plus, plus mal minus ist minus, minus mal minus ist plus.'),
      }],
      answers: {
        examples: [[['(-6) * (-4) + (-18) / 3', 18]], [['(-2) * (-3) * (-5)', -30]]],
        practice: [[['(-48) / 6', -8]], [['(-3) * 7', -21]], [['(-1) * (-1) * (-1) * (-1)', 1]]],
      },
      al: {
        title: 'Rregullat e shenjave',
        objectives: ['Të shumëzoni dhe të pjesëtoni numra të plotë.', 'Të përcaktoni shenjën e prodhimit të disa faktorëve.'],
        theory: 'Te shumëzimi dhe pjesëtimi, së pari veprojmë me vlerat (pa shenjë) dhe pastaj vendosim shenjën: dy shenja të njëjta japin plus, dy shenja të ndryshme japin minus. (−6) · (−4) = 24, (−48) : 6 = −8.\n\nTe prodhimi i disa faktorëve, numëroni faktorët negativë: numër çift i tyre jep rezultat pozitiv, numër tek jep negativ. (−2) · (−3) · (−5): tre negativë → −30.\n\nRadha e veprimeve mbetet e njëjtë: shumëzimi dhe pjesëtimi para mbledhjes dhe zbritjes. Numrat negativë shkruhen në kllapa kur vijnë pas një shenje veprimi.',
        keyPoints: ['(+)(+) = +, (−)(−) = +', '(+)(−) = −, (−)(+) = −', 'Numër çift faktorësh negativë → +; tek → −'],
        examples: [
          { example: 'Llogaritni (−6) · (−4) + (−18) : 3.', solution: '(−6) · (−4) = 24; (−18) : 3 = −6; 24 + (−6) = 18.' },
          { example: 'Llogaritni (−2) · (−3) · (−5).', solution: 'Vlerat: 2 · 3 · 5 = 30. Tre faktorë negativë (tek) → −30.' },
        ],
        commonMistakes: [
          { mistake: '(−6) · (−4) = −24', fix: 'Dy minuse japin plus: 24.' },
          { mistake: 'Rregulla "minus herë minus jep plus" përdoret te mbledhja: −9 + (−6) = 15.', fix: 'Rregulla e shenjave vlen vetëm për shumëzim dhe pjesëtim.' },
        ],
        practice: [
          { problem: 'Llogaritni (−48) : 6.', solution: '−8', steps: ['48 : 6 = 8.', 'Shenja të ndryshme → −8.'] },
          { problem: 'Llogaritni (−3) · 7.', solution: '−21', steps: ['3 · 7 = 21.', 'Shenja të ndryshme → −21.'] },
          { problem: 'Llogaritni (−1) · (−1) · (−1) · (−1).', solution: '1', steps: ['Katër faktorë negativë: numër çift.', 'Rezultati pozitiv: 1.'] },
        ],
      },
      en: {
        title: 'Sign rules',
        objectives: ['Multiply and divide integers.', 'Decide the sign of a product of several factors.'],
        theory: 'When multiplying and dividing, first work with the sizes (without signs) and then decide the sign: two equal signs give plus, two different signs give minus. (−6) · (−4) = 24, (−48) ÷ 6 = −8.\n\nFor a product of several factors, count the negative factors: an even number of them gives a positive result, an odd number a negative one. (−2) · (−3) · (−5): three negatives → −30.\n\nThe order of operations stays the same: multiplication and division before addition and subtraction. Negative numbers go in brackets when they follow an operation sign.',
        keyPoints: ['(+)(+) = +, (−)(−) = +', '(+)(−) = −, (−)(+) = −', 'Even number of negative factors → +; odd → −'],
        examples: [
          { example: 'Work out (−6) · (−4) + (−18) ÷ 3.', solution: '(−6) · (−4) = 24; (−18) ÷ 3 = −6; 24 + (−6) = 18.' },
          { example: 'Work out (−2) · (−3) · (−5).', solution: 'Sizes: 2 · 3 · 5 = 30. Three negative factors (odd) → −30.' },
        ],
        commonMistakes: [
          { mistake: '(−6) · (−4) = −24', fix: 'Two minuses give plus: 24.' },
          { mistake: 'Using "minus times minus is plus" for addition: −9 + (−6) = 15.', fix: 'The sign rules apply only to multiplying and dividing.' },
        ],
        practice: [
          { problem: 'Work out (−48) ÷ 6.', solution: '−8', steps: ['48 ÷ 6 = 8.', 'Different signs → −8.'] },
          { problem: 'Work out (−3) · 7.', solution: '−21', steps: ['3 · 7 = 21.', 'Different signs → −21.'] },
          { problem: 'Work out (−1) · (−1) · (−1) · (−1).', solution: '1', steps: ['Four negative factors: an even number.', 'Positive result: 1.'] },
        ],
      },
      de: {
        title: 'Vorzeichenregeln',
        objectives: ['Ganze Zahlen multiplizieren und dividieren.', 'Das Vorzeichen eines Produkts aus mehreren Faktoren bestimmen.'],
        theory: 'Beim Multiplizieren und Dividieren rechnet man zuerst mit den Beträgen und bestimmt dann das Vorzeichen: Gleiche Vorzeichen ergeben plus, verschiedene ergeben minus. (−6) · (−4) = 24, (−48) : 6 = −8.\n\nBei einem Produkt aus mehreren Faktoren zählt man die negativen Faktoren: Eine gerade Anzahl ergibt ein positives Ergebnis, eine ungerade ein negatives. (−2) · (−3) · (−5): drei negative → −30.\n\nDie Rechenreihenfolge bleibt: Punkt vor Strich. Negative Zahlen setzt man in Klammern, wenn sie nach einem Rechenzeichen stehen.',
        keyPoints: ['(+)(+) = +, (−)(−) = +', '(+)(−) = −, (−)(+) = −', 'Gerade Anzahl negativer Faktoren → +; ungerade → −'],
        examples: [
          { example: 'Berechnen Sie (−6) · (−4) + (−18) : 3.', solution: '(−6) · (−4) = 24; (−18) : 3 = −6; 24 + (−6) = 18.' },
          { example: 'Berechnen Sie (−2) · (−3) · (−5).', solution: 'Beträge: 2 · 3 · 5 = 30. Drei negative Faktoren (ungerade) → −30.' },
        ],
        commonMistakes: [
          { mistake: '(−6) · (−4) = −24', fix: 'Minus mal minus ergibt plus: 24.' },
          { mistake: '„Minus mal minus ist plus“ beim Addieren anwenden: −9 + (−6) = 15.', fix: 'Die Vorzeichenregeln gelten nur fürs Multiplizieren und Dividieren.' },
        ],
        practice: [
          { problem: 'Berechnen Sie (−48) : 6.', solution: '−8', steps: ['48 : 6 = 8.', 'Verschiedene Vorzeichen → −8.'] },
          { problem: 'Berechnen Sie (−3) · 7.', solution: '−21', steps: ['3 · 7 = 21.', 'Verschiedene Vorzeichen → −21.'] },
          { problem: 'Berechnen Sie (−1) · (−1) · (−1) · (−1).', solution: '1', steps: ['Vier negative Faktoren: gerade Anzahl.', 'Positives Ergebnis: 1.'] },
        ],
      },
    },
  ],
};
