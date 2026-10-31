// Grade 7 · Theme 4: Rational numbers (November–December)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g7-rational-numbers',
  i18n: {
    al: { title: 'Numrat racionalë', description: 'Vlera absolute, krahasimi dhe veprimet me thyesa e numra dhjetorë pozitivë dhe negativë.' },
    en: { title: 'Rational numbers', description: 'Absolute value, comparing, and calculating with positive and negative fractions and decimals.' },
    de: { title: 'Rationale Zahlen', description: 'Betrag, Vergleichen und Rechnen mit positiven und negativen Brüchen und Dezimalzahlen.' },
  },
  lessons: [
    // ───────── 1. Absolute value
    {
      slug: 'g7-rational-numbers-absolute-value',
      visuals: [{
        type: 'numberLine', min: -4, max: 4, step: 0.5, labelEvery: 2,
        points: [{ x: -3.5, label: -3.5, color: 'secondary' }, { x: 3.5, label: 3.5, color: 'success' }],
        jumps: [{ from: 0, to: -3.5, label: '3,5', color: 'secondary' }, { from: 0, to: 3.5, label: '3,5', color: 'success' }],
        caption: alt('|−3,5| = |3,5| = 3,5: të dy janë 3,5 njësi larg zeros.', '|−3.5| = |3.5| = 3.5: both are 3.5 units from zero.', '|−3,5| = |3,5| = 3,5: Beide sind 3,5 Einheiten von null entfernt.'),
        alt: alt('Bosht numerik me −3,5 dhe 3,5, secili 3,5 njësi larg zeros.', 'Number line with −3.5 and 3.5, each 3.5 units from zero.', 'Zahlenstrahl mit −3,5 und 3,5, jeweils 3,5 Einheiten von null entfernt.'),
      }],
      answers: {
        examples: [[['abs(-3.5)', 3.5], ['abs(2/7)', '2/7']], 'text'],
        practice: [[['abs(-12) + abs(4)', 16]], [['abs(-2.5) - abs(1.5)', 1]], [['abs(-7) > abs(5)', true]]],
      },
      al: {
        title: 'Vlera absolute',
        objectives: ['Të gjeni vlerën absolute të një numri racional.', 'Të përdorni vlerën absolute si largësi nga zeroja.'],
        theory: 'Vlera absolute e një numri është largësia e tij nga zeroja në boshtin numerik. Shënohet me dy vija: |−3,5| = 3,5 dhe |3,5| = 3,5.\n\nVlera absolute nuk është kurrë negative: |x| = x kur x ≥ 0, dhe |x| = −x kur x < 0 (p.sh. |−7| = −(−7) = 7). Numrat e kundërt kanë të njëjtën vlerë absolute.\n\nNjë numër racional mund të shkruhet si thyesë a/b me a dhe b numra të plotë (b ≠ 0): −3,5 = −7/2, 0,2 = 1/5. Numrat e plotë, thyesat dhe numrat dhjetorë periodikë janë të gjithë racionalë.',
        keyPoints: ['|x| = largësia nga 0, gjithmonë ≥ 0.', '|x| = x për x ≥ 0; |x| = −x për x < 0.', '|a| = |−a|'],
        examples: [
          { example: 'Gjeni |−3,5| dhe |2/7|.', solution: '|−3,5| = 3,5 dhe |2/7| = 2/7.' },
          { example: 'Cilët numra kanë vlerë absolute 5?', solution: '5 dhe −5: të dy janë 5 njësi larg zeros.' },
        ],
        commonMistakes: [
          { mistake: '|−7| = −7', fix: 'Vlera absolute është largësi, pra nuk është negative: |−7| = 7.' },
        ],
        practice: [
          { problem: 'Llogaritni |−12| + |4|.', solution: '16', steps: ['|−12| = 12, |4| = 4.', '12 + 4 = 16.'] },
          { problem: 'Llogaritni |−2,5| − |1,5|.', solution: '1', steps: ['2,5 − 1,5.', '= 1.'] },
          { problem: 'Cili numër ka vlerë absolute më të madhe: −7 apo 5?', solution: '−7', steps: ['|−7| = 7, |5| = 5.', '7 > 5.'] },
        ],
      },
      en: {
        title: 'Absolute value',
        objectives: ['Find the absolute value of a rational number.', 'Use absolute value as the distance from zero.'],
        theory: 'The absolute value of a number is its distance from zero on the number line. It is written with two bars: |−3.5| = 3.5 and |3.5| = 3.5.\n\nAbsolute value is never negative: |x| = x when x ≥ 0, and |x| = −x when x < 0 (e.g. |−7| = −(−7) = 7). Opposite numbers have the same absolute value.\n\nA rational number can be written as a fraction a/b with whole numbers a and b (b ≠ 0): −3.5 = −7/2, 0.2 = 1/5. Integers, fractions and repeating decimals are all rational.',
        keyPoints: ['|x| = distance from 0, always ≥ 0.', '|x| = x for x ≥ 0; |x| = −x for x < 0.', '|a| = |−a|'],
        examples: [
          { example: 'Find |−3.5| and |2/7|.', solution: '|−3.5| = 3.5 and |2/7| = 2/7.' },
          { example: 'Which numbers have absolute value 5?', solution: '5 and −5: both are 5 units from zero.' },
        ],
        commonMistakes: [
          { mistake: '|−7| = −7', fix: 'Absolute value is a distance, so it is not negative: |−7| = 7.' },
        ],
        practice: [
          { problem: 'Work out |−12| + |4|.', solution: '16', steps: ['|−12| = 12, |4| = 4.', '12 + 4 = 16.'] },
          { problem: 'Work out |−2.5| − |1.5|.', solution: '1', steps: ['2.5 − 1.5.', '= 1.'] },
          { problem: 'Which number has the larger absolute value: −7 or 5?', solution: '−7', steps: ['|−7| = 7, |5| = 5.', '7 > 5.'] },
        ],
      },
      de: {
        title: 'Der Betrag',
        objectives: ['Den Betrag einer rationalen Zahl bestimmen.', 'Den Betrag als Abstand von null verstehen.'],
        theory: 'Der Betrag einer Zahl ist ihr Abstand von null auf der Zahlengeraden. Man schreibt ihn mit zwei Strichen: |−3,5| = 3,5 und |3,5| = 3,5.\n\nDer Betrag ist nie negativ: |x| = x für x ≥ 0 und |x| = −x für x < 0 (z. B. |−7| = −(−7) = 7). Gegenzahlen haben denselben Betrag.\n\nEine rationale Zahl lässt sich als Bruch a/b mit ganzen Zahlen a und b (b ≠ 0) schreiben: −3,5 = −7/2, 0,2 = 1/5. Ganze Zahlen, Brüche und periodische Dezimalzahlen sind alle rational.',
        keyPoints: ['|x| = Abstand von 0, immer ≥ 0.', '|x| = x für x ≥ 0; |x| = −x für x < 0.', '|a| = |−a|'],
        examples: [
          { example: 'Bestimmen Sie |−3,5| und |2/7|.', solution: '|−3,5| = 3,5 und |2/7| = 2/7.' },
          { example: 'Welche Zahlen haben den Betrag 5?', solution: '5 und −5: Beide sind 5 Einheiten von null entfernt.' },
        ],
        commonMistakes: [
          { mistake: '|−7| = −7', fix: 'Der Betrag ist ein Abstand und daher nicht negativ: |−7| = 7.' },
        ],
        practice: [
          { problem: 'Berechnen Sie |−12| + |4|.', solution: '16', steps: ['|−12| = 12, |4| = 4.', '12 + 4 = 16.'] },
          { problem: 'Berechnen Sie |−2,5| − |1,5|.', solution: '1', steps: ['2,5 − 1,5.', '= 1.'] },
          { problem: 'Welche Zahl hat den größeren Betrag: −7 oder 5?', solution: '−7', steps: ['|−7| = 7, |5| = 5.', '7 > 5.'] },
        ],
      },
    },

    // ───────── 2. Comparing rational numbers
    {
      slug: 'g7-rational-numbers-comparing',
      visuals: [{
        type: 'numberLine', min: -1, max: 1, step: 0.25, labelEvery: 2,
        points: [{ x: -0.75, label: '−3/4', color: 'purple', below: true }, { x: -0.5, label: -0.5, color: 'secondary' }, { x: 0.2, label: 0.2, color: 'success' }],
        caption: alt('Djathtas = më i madh: 0,2 > −0,5 > −3/4.', 'Further right = larger: 0.2 > −0.5 > −3/4.', 'Weiter rechts = größer: 0,2 > −0,5 > −3/4.'),
        alt: alt('Bosht numerik nga −1 deri 1 me −3/4, −0,5 dhe 0,2.', 'Number line from −1 to 1 with −3/4, −0.5 and 0.2.', 'Zahlenstrahl von −1 bis 1 mit −3/4, −0,5 und 0,2.'),
      }],
      answers: {
        examples: [[['0.2 > -0.5 and -0.5 > -3/4', true]], [['-2/3 < -3/5', true]]],
        practice: [[['-1.2 > -1.25', true]], [['-0.6 < -1/2 and -1/2 < 0.4', true]], [['max(-0.3, -0.03, -3)', -0.03]]],
      },
      al: {
        title: 'Krahasimi i numrave racionalë',
        objectives: ['Të krahasoni numra racionalë pozitivë dhe negativë.', 'T\'i renditni në boshtin numerik.'],
        theory: 'Çdo numër pozitiv është më i madh se zeroja, dhe çdo numër negativ më i vogël se zeroja. Në boshtin numerik, më djathtas do të thotë më i madh.\n\nPër dy numra negativë: më i madh është ai me vlerë absolute më të vogël, sepse është më afër zeros. −0,5 > −0,75, sepse 0,5 < 0,75.\n\nKur numrat janë në forma të ndryshme (thyesa dhe numra dhjetorë), i sjellim në të njëjtën formë para krahasimit: −3/4 = −0,75.',
        keyPoints: ['Negativ < 0 < pozitiv.', 'Dy negativë: më i madh është ai më afër zeros.', 'Sillini në të njëjtën formë para krahasimit.'],
        examples: [
          { example: 'Renditni nga më i madhi: −0,5; −3/4; 0,2.', solution: '−3/4 = −0,75. Renditja: 0,2 > −0,5 > −3/4.' },
          { example: 'Krahasoni −2/3 dhe −3/5.', solution: '2/3 ≈ 0,667 > 3/5 = 0,6, prandaj −2/3 është më larg zeros: −2/3 < −3/5.' },
        ],
        commonMistakes: [
          { mistake: '−0,75 > −0,5 sepse 0,75 > 0,5.', fix: 'Te negativët vlen e kundërta: −0,75 është më majtas, pra më i vogël.' },
        ],
        practice: [
          { problem: 'Krahasoni −1,2 dhe −1,25.', solution: '−1,2 > −1,25', steps: ['|−1,2| = 1,20 < 1,25.', 'Më afër zeros është −1,2.'] },
          { problem: 'Renditni nga më i vogli: −1/2; 0,4; −0,6.', solution: '−0,6 < −1/2 < 0,4', steps: ['−1/2 = −0,5.', '−0,6 < −0,5 < 0,4.'] },
          { problem: 'Cili është më i madhi: −0,3; −0,03; −3?', solution: '−0,03', steps: ['Vlerat absolute: 0,3; 0,03; 3.', 'Më e vogla është 0,03, pra −0,03 është më afër zeros.'] },
        ],
      },
      en: {
        title: 'Comparing rational numbers',
        objectives: ['Compare positive and negative rational numbers.', 'Put them in order on the number line.'],
        theory: 'Every positive number is greater than zero, and every negative number is less than zero. On the number line, further right means larger.\n\nFor two negative numbers, the larger one is the one with the smaller absolute value, because it is closer to zero. −0.5 > −0.75, because 0.5 < 0.75.\n\nWhen the numbers are in different forms (fractions and decimals), bring them to the same form before comparing: −3/4 = −0.75.',
        keyPoints: ['Negative < 0 < positive.', 'Two negatives: the larger is the one closer to zero.', 'Bring them to the same form before comparing.'],
        examples: [
          { example: 'Order from largest: −0.5; −3/4; 0.2.', solution: '−3/4 = −0.75. Order: 0.2 > −0.5 > −3/4.' },
          { example: 'Compare −2/3 and −3/5.', solution: '2/3 ≈ 0.667 > 3/5 = 0.6, so −2/3 is further from zero: −2/3 < −3/5.' },
        ],
        commonMistakes: [
          { mistake: '−0.75 > −0.5 because 0.75 > 0.5.', fix: 'For negatives it is the other way round: −0.75 is further left, so smaller.' },
        ],
        practice: [
          { problem: 'Compare −1.2 and −1.25.', solution: '−1.2 > −1.25', steps: ['|−1.2| = 1.20 < 1.25.', '−1.2 is closer to zero.'] },
          { problem: 'Order from smallest: −1/2; 0.4; −0.6.', solution: '−0.6 < −1/2 < 0.4', steps: ['−1/2 = −0.5.', '−0.6 < −0.5 < 0.4.'] },
          { problem: 'Which is the largest: −0.3; −0.03; −3?', solution: '−0.03', steps: ['Absolute values: 0.3; 0.03; 3.', 'The smallest is 0.03, so −0.03 is closest to zero.'] },
        ],
      },
      de: {
        title: 'Rationale Zahlen vergleichen',
        objectives: ['Positive und negative rationale Zahlen vergleichen.', 'Sie an der Zahlengeraden ordnen.'],
        theory: 'Jede positive Zahl ist größer als null, jede negative kleiner als null. An der Zahlengeraden heißt weiter rechts größer.\n\nVon zwei negativen Zahlen ist die mit dem kleineren Betrag die größere, weil sie näher an der Null liegt. −0,5 > −0,75, denn 0,5 < 0,75.\n\nStehen die Zahlen in verschiedenen Schreibweisen (Brüche und Dezimalzahlen), bringt man sie vor dem Vergleichen in dieselbe Form: −3/4 = −0,75.',
        keyPoints: ['Negativ < 0 < positiv.', 'Zwei negative Zahlen: Die näher an der Null ist größer.', 'Vor dem Vergleichen in dieselbe Form bringen.'],
        examples: [
          { example: 'Ordnen Sie absteigend: −0,5; −3/4; 0,2.', solution: '−3/4 = −0,75. Reihenfolge: 0,2 > −0,5 > −3/4.' },
          { example: 'Vergleichen Sie −2/3 und −3/5.', solution: '2/3 ≈ 0,667 > 3/5 = 0,6, also liegt −2/3 weiter von null entfernt: −2/3 < −3/5.' },
        ],
        commonMistakes: [
          { mistake: '−0,75 > −0,5, weil 0,75 > 0,5.', fix: 'Bei negativen Zahlen ist es umgekehrt: −0,75 liegt weiter links, ist also kleiner.' },
        ],
        practice: [
          { problem: 'Vergleichen Sie −1,2 und −1,25.', solution: '−1,2 > −1,25', steps: ['|−1,2| = 1,20 < 1,25.', '−1,2 liegt näher an der Null.'] },
          { problem: 'Ordnen Sie aufsteigend: −1/2; 0,4; −0,6.', solution: '−0,6 < −1/2 < 0,4', steps: ['−1/2 = −0,5.', '−0,6 < −0,5 < 0,4.'] },
          { problem: 'Welche Zahl ist die größte: −0,3; −0,03; −3?', solution: '−0,03', steps: ['Beträge: 0,3; 0,03; 3.', 'Der kleinste ist 0,03, also liegt −0,03 am nächsten an der Null.'] },
        ],
      },
    },

    // ───────── 3. Operations
    {
      slug: 'g7-rational-numbers-operations',
      visuals: [{
        type: 'numberLine', min: -1, max: 1, step: 0.25, labelEvery: 2,
        points: [{ x: -0.5, label: '−1/2', color: 'primary', below: true }, { x: 0.25, label: '1/4', color: 'success', below: true }],
        jumps: [{ from: -0.5, to: 0.25, label: '+3/4', color: 'success' }],
        caption: alt('−1/2 + 3/4 = −2/4 + 3/4 = 1/4', '−1/2 + 3/4 = −2/4 + 3/4 = 1/4', '−1/2 + 3/4 = −2/4 + 3/4 = 1/4'),
        alt: alt('Kërcim +3/4 nga −1/2 deri te 1/4 në boshtin numerik.', 'A jump of +3/4 from −1/2 to 1/4 on the number line.', 'Ein Sprung um +3/4 von −1/2 bis 1/4 am Zahlenstrahl.'),
      }],
      answers: {
        examples: [[['-2/3 * 9/4', '-3/2']], [['-1/2 + 3/4', '1/4']]],
        practice: [[['-5/6 - 1/3', '-7/6']], [['(-0.6) / 0.2', -3]], [['(-3/4) / (3/8)', -2]]],
      },
      al: {
        title: 'Katër veprimet me numra racionalë',
        objectives: ['Të mblidhni dhe të zbritni thyesa dhe numra dhjetorë me shenjë.', 'Të shumëzoni dhe të pjesëtoni numra racionalë me rregullat e shenjave.'],
        theory: 'Me numrat racionalë veprojmë si me thyesat dhe numrat dhjetorë, duke ndjekur rregullat e shenjave nga numrat e plotë.\n\nMbledhja dhe zbritja: emërues i përbashkët, pastaj veprojmë me numëruesit si me numra të plotë: −1/2 + 3/4 = −2/4 + 3/4 = 1/4.\n\nShumëzimi dhe pjesëtimi: së pari përcaktojmë shenjën (të njëjta → +, të ndryshme → −), pastaj veprojmë me vlerat: −2/3 · 9/4 = −18/12 = −3/2. Pjesëtimi me thyesë është shumëzim me të anasjelltën.',
        keyPoints: ['Shenja sipas rregullave të numrave të plotë.', 'Mbledhje/zbritje: emërues i përbashkët.', 'a/b : c/d = a/b · d/c'],
        examples: [
          { example: 'Llogaritni −2/3 · 9/4.', solution: 'Shenja: −. Vlerat: 2 · 9 / (3 · 4) = 18/12 = 3/2. Rezultati −3/2.' },
          { example: 'Llogaritni −1/2 + 3/4.', solution: '−2/4 + 3/4 = 1/4.' },
        ],
        commonMistakes: [
          { mistake: '−1/2 + 3/4 = 2/6', fix: 'Emëruesit nuk mblidhen; sillini në 4: −2/4 + 3/4.' },
        ],
        practice: [
          { problem: 'Llogaritni −5/6 − 1/3.', solution: '−7/6', steps: ['1/3 = 2/6.', '−5/6 − 2/6 = −7/6.'] },
          { problem: 'Llogaritni (−0,6) : 0,2.', solution: '−3', steps: ['0,6 : 0,2 = 3.', 'Shenja të ndryshme → −3.'] },
          { problem: 'Llogaritni (−3/4) : (3/8).', solution: '−2', steps: ['(−3/4) · (8/3).', '= −24/12 = −2.'] },
        ],
      },
      en: {
        title: 'Calculating with rational numbers',
        objectives: ['Add and subtract signed fractions and decimals.', 'Multiply and divide rational numbers using the sign rules.'],
        theory: 'With rational numbers we calculate as with fractions and decimals, following the sign rules from the integers.\n\nAdding and subtracting: common denominator, then work with the numerators as with integers: −1/2 + 3/4 = −2/4 + 3/4 = 1/4.\n\nMultiplying and dividing: first decide the sign (same → +, different → −), then work with the sizes: −2/3 · 9/4 = −18/12 = −3/2. Dividing by a fraction is multiplying by its reciprocal.',
        keyPoints: ['Signs follow the integer rules.', 'Add/subtract: common denominator.', 'a/b ÷ c/d = a/b · d/c'],
        examples: [
          { example: 'Work out −2/3 · 9/4.', solution: 'Sign: −. Sizes: 2 · 9 / (3 · 4) = 18/12 = 3/2. Result −3/2.' },
          { example: 'Work out −1/2 + 3/4.', solution: '−2/4 + 3/4 = 1/4.' },
        ],
        commonMistakes: [
          { mistake: '−1/2 + 3/4 = 2/6', fix: 'Denominators are not added; change to quarters: −2/4 + 3/4.' },
        ],
        practice: [
          { problem: 'Work out −5/6 − 1/3.', solution: '−7/6', steps: ['1/3 = 2/6.', '−5/6 − 2/6 = −7/6.'] },
          { problem: 'Work out (−0.6) ÷ 0.2.', solution: '−3', steps: ['0.6 ÷ 0.2 = 3.', 'Different signs → −3.'] },
          { problem: 'Work out (−3/4) ÷ (3/8).', solution: '−2', steps: ['(−3/4) · (8/3).', '= −24/12 = −2.'] },
        ],
      },
      de: {
        title: 'Rechnen mit rationalen Zahlen',
        objectives: ['Brüche und Dezimalzahlen mit Vorzeichen addieren und subtrahieren.', 'Rationale Zahlen mit den Vorzeichenregeln multiplizieren und dividieren.'],
        theory: 'Mit rationalen Zahlen rechnet man wie mit Brüchen und Dezimalzahlen und beachtet die Vorzeichenregeln der ganzen Zahlen.\n\nAddieren und Subtrahieren: gleichnamig machen, dann mit den Zählern wie mit ganzen Zahlen rechnen: −1/2 + 3/4 = −2/4 + 3/4 = 1/4.\n\nMultiplizieren und Dividieren: zuerst das Vorzeichen bestimmen (gleich → +, verschieden → −), dann mit den Beträgen rechnen: −2/3 · 9/4 = −18/12 = −3/2. Durch einen Bruch teilt man, indem man mit dem Kehrwert multipliziert.',
        keyPoints: ['Vorzeichen wie bei ganzen Zahlen.', 'Addieren/Subtrahieren: gleichnamig machen.', 'a/b : c/d = a/b · d/c'],
        examples: [
          { example: 'Berechnen Sie −2/3 · 9/4.', solution: 'Vorzeichen: −. Beträge: 2 · 9 / (3 · 4) = 18/12 = 3/2. Ergebnis −3/2.' },
          { example: 'Berechnen Sie −1/2 + 3/4.', solution: '−2/4 + 3/4 = 1/4.' },
        ],
        commonMistakes: [
          { mistake: '−1/2 + 3/4 = 2/6', fix: 'Nenner werden nicht addiert; in Viertel umwandeln: −2/4 + 3/4.' },
        ],
        practice: [
          { problem: 'Berechnen Sie −5/6 − 1/3.', solution: '−7/6', steps: ['1/3 = 2/6.', '−5/6 − 2/6 = −7/6.'] },
          { problem: 'Berechnen Sie (−0,6) : 0,2.', solution: '−3', steps: ['0,6 : 0,2 = 3.', 'Verschiedene Vorzeichen → −3.'] },
          { problem: 'Berechnen Sie (−3/4) : (3/8).', solution: '−2', steps: ['(−3/4) · (8/3).', '= −24/12 = −2.'] },
        ],
      },
    },

    // ───────── 4. Arithmetic expressions
    {
      slug: 'g7-rational-numbers-expressions',
      noVisual: 'Order-of-operations practice with rational numbers; the steps are shown in the worked examples.',
      answers: {
        examples: [[['(-1/2 + 1/3) * 6', -1]], [['2 - 3 * (-0.5)', 3.5]]],
        practice: [[['-4 + 2 * (-1.5)', -7]], [['(2/3 - 1) * (-9)', 3]], [['1.2 / (-0.4) - 1', -4]]],
      },
      al: {
        title: 'Shprehjet aritmetike',
        objectives: ['Të njehsoni shprehje me numra racionalë në radhën e duhur.', 'Të kombinoni rregullat e shenjave me radhën e veprimeve.'],
        theory: 'Te shprehjet me numra racionalë vlen e njëjta radhë e veprimeve: kllapat, pastaj shumëzimi e pjesëtimi, në fund mbledhja e zbritja.\n\nNë çdo hap kujdesemi për shenjën. Shpesh është më e lehtë të veprojmë së pari me thyesat ose me numrat dhjetorë dhe vetëm pastaj të shtojmë shenjën sipas rregullave.\n\nKur shprehja ka edhe thyesa edhe numra dhjetorë, i sjellim në të njëjtën formë: 0,5 = 1/2, 0,25 = 1/4.',
        keyPoints: ['Radha: kllapat → · : → + −', 'Kujdes shenjën në çdo hap.', 'Përzierje thyesash dhe dhjetorësh: një formë e vetme.'],
        examples: [
          { example: 'Llogaritni (−1/2 + 1/3) · 6.', solution: 'Kllapat: −3/6 + 2/6 = −1/6. Pastaj −1/6 · 6 = −1.' },
          { example: 'Llogaritni 2 − 3 · (−0,5).', solution: '3 · (−0,5) = −1,5; 2 − (−1,5) = 3,5.' },
        ],
        commonMistakes: [
          { mistake: '2 − 3 · (−0,5) = (2 − 3) · (−0,5) = 0,5', fix: 'Shumëzimi bëhet para zbritjes.' },
        ],
        practice: [
          { problem: 'Llogaritni −4 + 2 · (−1,5).', solution: '−7', steps: ['2 · (−1,5) = −3.', '−4 + (−3) = −7.'] },
          { problem: 'Llogaritni (2/3 − 1) · (−9).', solution: '3', steps: ['Kllapat: −1/3.', '−1/3 · (−9) = 3.'] },
          { problem: 'Llogaritni 1,2 : (−0,4) − 1.', solution: '−4', steps: ['1,2 : (−0,4) = −3.', '−3 − 1 = −4.'] },
        ],
      },
      en: {
        title: 'Arithmetic expressions',
        objectives: ['Evaluate expressions with rational numbers in the right order.', 'Combine the sign rules with the order of operations.'],
        theory: 'Expressions with rational numbers follow the same order of operations: brackets, then multiplication and division, finally addition and subtraction.\n\nAt every step, watch the sign. It is often easier to work first with the fractions or decimals and only then add the sign using the rules.\n\nWhen an expression has both fractions and decimals, bring them to one form: 0.5 = 1/2, 0.25 = 1/4.',
        keyPoints: ['Order: brackets → · ÷ → + −', 'Watch the sign at every step.', 'Mixed fractions and decimals: use one form.'],
        examples: [
          { example: 'Work out (−1/2 + 1/3) · 6.', solution: 'Brackets: −3/6 + 2/6 = −1/6. Then −1/6 · 6 = −1.' },
          { example: 'Work out 2 − 3 · (−0.5).', solution: '3 · (−0.5) = −1.5; 2 − (−1.5) = 3.5.' },
        ],
        commonMistakes: [
          { mistake: '2 − 3 · (−0.5) = (2 − 3) · (−0.5) = 0.5', fix: 'Multiplication comes before subtraction.' },
        ],
        practice: [
          { problem: 'Work out −4 + 2 · (−1.5).', solution: '−7', steps: ['2 · (−1.5) = −3.', '−4 + (−3) = −7.'] },
          { problem: 'Work out (2/3 − 1) · (−9).', solution: '3', steps: ['Brackets: −1/3.', '−1/3 · (−9) = 3.'] },
          { problem: 'Work out 1.2 ÷ (−0.4) − 1.', solution: '−4', steps: ['1.2 ÷ (−0.4) = −3.', '−3 − 1 = −4.'] },
        ],
      },
      de: {
        title: 'Terme mit rationalen Zahlen',
        objectives: ['Terme mit rationalen Zahlen in der richtigen Reihenfolge berechnen.', 'Vorzeichenregeln und Rechenreihenfolge verbinden.'],
        theory: 'Für Terme mit rationalen Zahlen gilt dieselbe Rechenreihenfolge: Klammern, dann Punkt-, zuletzt Strichrechnung.\n\nBei jedem Schritt auf das Vorzeichen achten. Oft ist es einfacher, zuerst mit den Brüchen oder Dezimalzahlen zu rechnen und das Vorzeichen danach nach den Regeln zu setzen.\n\nEnthält ein Term Brüche und Dezimalzahlen, bringt man sie in eine Form: 0,5 = 1/2, 0,25 = 1/4.',
        keyPoints: ['Reihenfolge: Klammern → · : → + −', 'Bei jedem Schritt aufs Vorzeichen achten.', 'Brüche und Dezimalzahlen gemischt: eine Schreibweise wählen.'],
        examples: [
          { example: 'Berechnen Sie (−1/2 + 1/3) · 6.', solution: 'Klammer: −3/6 + 2/6 = −1/6. Dann −1/6 · 6 = −1.' },
          { example: 'Berechnen Sie 2 − 3 · (−0,5).', solution: '3 · (−0,5) = −1,5; 2 − (−1,5) = 3,5.' },
        ],
        commonMistakes: [
          { mistake: '2 − 3 · (−0,5) = (2 − 3) · (−0,5) = 0,5', fix: 'Punkt vor Strich: zuerst multiplizieren.' },
        ],
        practice: [
          { problem: 'Berechnen Sie −4 + 2 · (−1,5).', solution: '−7', steps: ['2 · (−1,5) = −3.', '−4 + (−3) = −7.'] },
          { problem: 'Berechnen Sie (2/3 − 1) · (−9).', solution: '3', steps: ['Klammer: −1/3.', '−1/3 · (−9) = 3.'] },
          { problem: 'Berechnen Sie 1,2 : (−0,4) − 1.', solution: '−4', steps: ['1,2 : (−0,4) = −3.', '−3 − 1 = −4.'] },
        ],
      },
    },
  ],
};
