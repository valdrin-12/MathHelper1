// Grade 6 · Theme 7: Integers (March–April)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g6-integers',
  i18n: {
    al: { title: 'Numrat e plotë', description: 'Numrat negativë, paraqitja e tyre në boshtin numerik dhe mbledhja e zbritja me numra të plotë.' },
    en: { title: 'Integers', description: 'Negative numbers, showing them on the number line, and adding and subtracting integers.' },
    de: { title: 'Ganze Zahlen', description: 'Negative Zahlen, ihre Darstellung am Zahlenstrahl sowie Addieren und Subtrahieren ganzer Zahlen.' },
  },
  lessons: [
    // ───────── 1. Negative numbers
    {
      slug: 'g6-integers-negative-numbers',
      visuals: [{
        type: 'numberLine', min: -10, max: 10, step: 1, labelEvery: 2,
        points: [{ x: -4, label: '−4 °C', color: 'primary' }, { x: 5, label: '5 °C', color: 'error' }],
        caption: alt('Numrat negativë janë majtas zeros, pozitivët djathtas.', 'Negative numbers are left of zero, positive numbers to the right.', 'Negative Zahlen liegen links der Null, positive rechts.'),
        alt: alt('Bosht numerik nga −10 deri 10; të shënuara −4 °C dhe 5 °C.', 'Number line from −10 to 10 with −4 °C and 5 °C marked.', 'Zahlenstrahl von −10 bis 10 mit −4 °C und 5 °C markiert.'),
      }],
      answers: {
        examples: ['text', [['-(7)', -7]]],
        practice: [[['-(-12)', 12]], [['-50', -50]], [['-3 > -8', true]]],
      },
      al: {
        title: 'Numrat negativë',
        objectives: ['Të përdorni numrat negativë për temperatura, lartësi dhe borxhe.', 'Të gjeni numrin e kundërt të një numri.'],
        theory: 'Numrat më të vegjël se zero quhen negativë dhe shkruhen me shenjën minus: −1, −2, −3, … I përdorim kur matim nga një pikë zero në dy drejtime: −4 °C do të thotë 4 gradë nën zero; −50 m do të thotë 50 m nën nivelin e detit.\n\nNumrat 1, 2, 3, … janë pozitivë (mund të shkruhen +3). Zero nuk është as pozitiv as negativ. Numrat natyrorë, zeroja dhe numrat negativë së bashku quhen numra të plotë.\n\nDy numra me të njëjtën largësi nga zero, por në anë të kundërta, quhen të kundërt: 7 dhe −7. Numri i kundërt i −12 është 12.',
        keyPoints: ['Negativ = më i vogël se 0 (−4 °C = 4 gradë nën zero).', 'Zero nuk është as pozitiv as negativ.', 'I kundërti i a është −a; i kundërti i −a është a.'],
        examples: [
          { example: 'Çfarë do të thotë temperatura −4 °C?', solution: '4 gradë nën zero.' },
          { example: 'Cili është numri i kundërt i 7?', solution: '−7 (e njëjta largësi nga zero, në anën tjetër).' },
        ],
        commonMistakes: [
          { mistake: 'Mendohet se −8 > −3 sepse 8 > 3.', fix: 'Te numrat negativë, sa më larg zeros, aq më i vogël: −8 < −3.' },
        ],
        practice: [
          { problem: 'Cili është numri i kundërt i −12?', solution: '12', steps: ['−12 është 12 njësi majtas zeros.', 'I kundërti është 12 njësi djathtas: 12.'] },
          { problem: 'Një zhytës është 50 m nën nivelin e detit. Si e shënojmë me numër?', solution: '−50 m', steps: ['Niveli i detit = 0.', 'Nën të → negativ: −50.'] },
          { problem: 'Cila temperaturë është më e ngrohtë: −3 °C apo −8 °C?', solution: '−3 °C', steps: ['−3 është më afër zeros.', '−3 > −8.'] },
        ],
      },
      en: {
        title: 'Negative numbers',
        objectives: ['Use negative numbers for temperatures, heights and debts.', 'Find the opposite of a number.'],
        theory: 'Numbers smaller than zero are called negative and are written with a minus sign: −1, −2, −3, … We use them when we measure from a zero point in two directions: −4 °C means 4 degrees below zero; −50 m means 50 m below sea level.\n\nThe numbers 1, 2, 3, … are positive (they can be written +3). Zero is neither positive nor negative. The natural numbers, zero and the negative numbers together are called integers.\n\nTwo numbers at the same distance from zero but on opposite sides are opposites: 7 and −7. The opposite of −12 is 12.',
        keyPoints: ['Negative = less than 0 (−4 °C = 4 degrees below zero).', 'Zero is neither positive nor negative.', 'The opposite of a is −a; the opposite of −a is a.'],
        examples: [
          { example: 'What does a temperature of −4 °C mean?', solution: '4 degrees below zero.' },
          { example: 'What is the opposite of 7?', solution: '−7 (the same distance from zero, on the other side).' },
        ],
        commonMistakes: [
          { mistake: 'Thinking −8 > −3 because 8 > 3.', fix: 'For negative numbers, the further from zero, the smaller: −8 < −3.' },
        ],
        practice: [
          { problem: 'What is the opposite of −12?', solution: '12', steps: ['−12 is 12 units left of zero.', 'Its opposite is 12 units to the right: 12.'] },
          { problem: 'A diver is 50 m below sea level. How do we write this as a number?', solution: '−50 m', steps: ['Sea level = 0.', 'Below it → negative: −50.'] },
          { problem: 'Which temperature is warmer: −3 °C or −8 °C?', solution: '−3 °C', steps: ['−3 is closer to zero.', '−3 > −8.'] },
        ],
      },
      de: {
        title: 'Negative Zahlen',
        objectives: ['Negative Zahlen für Temperaturen, Höhen und Schulden verwenden.', 'Die Gegenzahl einer Zahl bestimmen.'],
        theory: 'Zahlen, die kleiner als null sind, heißen negativ und werden mit einem Minuszeichen geschrieben: −1, −2, −3, … Man braucht sie, wenn man von einem Nullpunkt aus in zwei Richtungen misst: −4 °C bedeutet 4 Grad unter null; −50 m bedeutet 50 m unter dem Meeresspiegel.\n\nDie Zahlen 1, 2, 3, … sind positiv (man kann +3 schreiben). Null ist weder positiv noch negativ. Natürliche Zahlen, Null und negative Zahlen zusammen heißen ganze Zahlen.\n\nZwei Zahlen mit gleichem Abstand von null, aber auf verschiedenen Seiten, heißen Gegenzahlen: 7 und −7. Die Gegenzahl von −12 ist 12.',
        keyPoints: ['Negativ = kleiner als 0 (−4 °C = 4 Grad unter null).', 'Null ist weder positiv noch negativ.', 'Die Gegenzahl von a ist −a; die von −a ist a.'],
        examples: [
          { example: 'Was bedeutet eine Temperatur von −4 °C?', solution: '4 Grad unter null.' },
          { example: 'Was ist die Gegenzahl von 7?', solution: '−7 (gleicher Abstand von null, auf der anderen Seite).' },
        ],
        commonMistakes: [
          { mistake: 'Glauben, −8 > −3, weil 8 > 3.', fix: 'Bei negativen Zahlen gilt: je weiter von null entfernt, desto kleiner: −8 < −3.' },
        ],
        practice: [
          { problem: 'Was ist die Gegenzahl von −12?', solution: '12', steps: ['−12 liegt 12 Einheiten links der Null.', 'Die Gegenzahl liegt 12 Einheiten rechts: 12.'] },
          { problem: 'Ein Taucher ist 50 m unter dem Meeresspiegel. Wie schreibt man das als Zahl?', solution: '−50 m', steps: ['Meeresspiegel = 0.', 'Darunter → negativ: −50.'] },
          { problem: 'Welche Temperatur ist wärmer: −3 °C oder −8 °C?', solution: '−3 °C', steps: ['−3 liegt näher an der Null.', '−3 > −8.'] },
        ],
      },
    },

    // ───────── 2. Integers on the number line
    {
      slug: 'g6-integers-integers-number-line',
      visuals: [{
        type: 'numberLine', min: -6, max: 6, step: 1,
        points: [{ x: -5, label: '−5' }, { x: -1, label: '−1' }, { x: 0, label: '0' }, { x: 3, label: '3' }, { x: 4, label: '4' }],
        drag: { value: -2 },
        caption: alt('Nga e majta në të djathtë numrat rriten: −5 < −1 < 0 < 3 < 4.', 'From left to right the numbers grow: −5 < −1 < 0 < 3 < 4.', 'Von links nach rechts werden die Zahlen größer: −5 < −1 < 0 < 3 < 4.'),
        alt: alt('Bosht numerik nga −6 deri 6 me pikat −5, −1, 0, 3, 4 dhe një pikë që mund të tërhiqet.', 'Number line from −6 to 6 with the points −5, −1, 0, 3, 4 and a point you can drag.', 'Zahlenstrahl von −6 bis 6 mit den Punkten −5, −1, 0, 3, 4 und einem verschiebbaren Punkt.'),
      }],
      answers: {
        examples: ['text', [['4 - (-3)', 7]]],
        practice: [[['-7 < -2', true]], [['2 - (-3) - 1', 4]], [['3 - (-5)', 8]]],
      },
      al: {
        title: 'Numrat e plotë në boshtin numerik',
        objectives: ['Të paraqitni numra të plotë në boshtin numerik.', 'Të krahasoni dhe të renditni numra të plotë.'],
        theory: 'Në boshtin numerik numrat negativë janë majtas zeros dhe pozitivët djathtas. Njësitë kanë të njëjtën gjatësi në të dy anët: −3 është 3 njësi majtas zeros, 3 është 3 njësi djathtas.\n\nNumri më djathtas është gjithmonë më i madh. Prandaj çdo numër pozitiv është më i madh se çdo numër negativ, dhe ndër numrat negativë më i madh është ai që është më afër zeros: −1 > −5.\n\nLargësia ndërmjet dy numrave në bosht është numri i njësive ndërmjet tyre: nga −3 te 4 ka 3 + 4 = 7 njësi.',
        keyPoints: ['Djathtas = më i madh (edhe te negativët).', 'Çdo pozitiv > 0 > çdo negativ.', 'Ndër negativët: më afër zeros = më i madh.'],
        examples: [
          { example: 'Renditni nga më i vogli: 3, −5, 0, −1, 4.', solution: '−5 < −1 < 0 < 3 < 4.' },
          { example: 'Sa njësi është largësia ndërmjet −3 dhe 4?', solution: '3 njësi deri te zero dhe 4 pas saj: 3 + 4 = 7.' },
        ],
        commonMistakes: [
          { mistake: 'Renditja e negativëve si te pozitivët: −1 < −5.', fix: 'Shikoni boshtin: −5 është më majtas, pra më i vogël.' },
        ],
        practice: [
          { problem: 'Vendosni shenjën: −7 … −2.', solution: '−7 < −2', steps: ['−7 është më majtas në bosht.', 'Pra −7 < −2.'] },
          { problem: 'Sa numra të plotë ka ndërmjet −3 dhe 2 (pa i numëruar këta të dy)?', solution: '4 numra: −2, −1, 0, 1', steps: ['Shkruajini: −2, −1, 0, 1.', 'Gjithsej 4.'] },
          { problem: 'Sa është largësia ndërmjet −5 dhe 3?', solution: '8', steps: ['5 njësi deri te 0.', '3 njësi pas 0.', '5 + 3 = 8.'] },
        ],
      },
      en: {
        title: 'Integers on the number line',
        objectives: ['Show integers on the number line.', 'Compare and order integers.'],
        theory: 'On the number line, negative numbers are left of zero and positive numbers right of zero. The units have the same length on both sides: −3 is 3 units left of zero, 3 is 3 units right.\n\nThe number further right is always larger. So every positive number is larger than every negative number, and among negative numbers the one closer to zero is larger: −1 > −5.\n\nThe distance between two numbers on the line is the number of units between them: from −3 to 4 there are 3 + 4 = 7 units.',
        keyPoints: ['Further right = larger (also for negatives).', 'Every positive > 0 > every negative.', 'Among negatives: closer to zero = larger.'],
        examples: [
          { example: 'Order from smallest: 3, −5, 0, −1, 4.', solution: '−5 < −1 < 0 < 3 < 4.' },
          { example: 'How many units is the distance between −3 and 4?', solution: '3 units up to zero and 4 after it: 3 + 4 = 7.' },
        ],
        commonMistakes: [
          { mistake: 'Ordering negatives like positives: −1 < −5.', fix: 'Look at the line: −5 is further left, so it is smaller.' },
        ],
        practice: [
          { problem: 'Put the right sign: −7 … −2.', solution: '−7 < −2', steps: ['−7 is further left on the line.', 'So −7 < −2.'] },
          { problem: 'How many integers lie between −3 and 2 (not counting these two)?', solution: '4 numbers: −2, −1, 0, 1', steps: ['Write them: −2, −1, 0, 1.', '4 in total.'] },
          { problem: 'What is the distance between −5 and 3?', solution: '8', steps: ['5 units up to 0.', '3 units after 0.', '5 + 3 = 8.'] },
        ],
      },
      de: {
        title: 'Ganze Zahlen am Zahlenstrahl',
        objectives: ['Ganze Zahlen an der Zahlengeraden darstellen.', 'Ganze Zahlen vergleichen und ordnen.'],
        theory: 'An der Zahlengeraden liegen negative Zahlen links der Null und positive rechts. Die Einheiten sind auf beiden Seiten gleich lang: −3 liegt 3 Einheiten links der Null, 3 liegt 3 Einheiten rechts.\n\nDie weiter rechts liegende Zahl ist immer größer. Deshalb ist jede positive Zahl größer als jede negative, und von zwei negativen Zahlen ist die näher an der Null die größere: −1 > −5.\n\nDer Abstand zweier Zahlen an der Zahlengeraden ist die Anzahl der Einheiten dazwischen: von −3 bis 4 sind es 3 + 4 = 7 Einheiten.',
        keyPoints: ['Weiter rechts = größer (auch bei negativen Zahlen).', 'Jede positive Zahl > 0 > jede negative Zahl.', 'Bei negativen Zahlen: näher an der Null = größer.'],
        examples: [
          { example: 'Ordnen Sie aufsteigend: 3, −5, 0, −1, 4.', solution: '−5 < −1 < 0 < 3 < 4.' },
          { example: 'Wie viele Einheiten beträgt der Abstand zwischen −3 und 4?', solution: '3 Einheiten bis zur Null und 4 danach: 3 + 4 = 7.' },
        ],
        commonMistakes: [
          { mistake: 'Negative Zahlen wie positive ordnen: −1 < −5.', fix: 'Auf die Zahlengerade schauen: −5 liegt weiter links, ist also kleiner.' },
        ],
        practice: [
          { problem: 'Setzen Sie das richtige Zeichen: −7 … −2.', solution: '−7 < −2', steps: ['−7 liegt weiter links.', 'Also −7 < −2.'] },
          { problem: 'Wie viele ganze Zahlen liegen zwischen −3 und 2 (diese beiden nicht mitgezählt)?', solution: '4 Zahlen: −2, −1, 0, 1', steps: ['Aufschreiben: −2, −1, 0, 1.', 'Insgesamt 4.'] },
          { problem: 'Wie groß ist der Abstand zwischen −5 und 3?', solution: '8', steps: ['5 Einheiten bis 0.', '3 Einheiten nach 0.', '5 + 3 = 8.'] },
        ],
      },
    },

    // ───────── 3. Adding and subtracting
    {
      slug: 'g6-integers-adding-subtracting',
      visuals: [{
        type: 'numberLine', min: -6, max: 6, step: 1,
        points: [{ x: -4, label: '−4', color: 'primary' }, { x: 5, label: '5', color: 'success' }],
        jumps: [{ from: -4, to: 5, label: '+9', color: 'success' }],
        caption: alt('−4 + 9: nisemi te −4 dhe ecim 9 hapa djathtas, mbërrijmë te 5.', '−4 + 9: start at −4 and move 9 steps right; we land on 5.', '−4 + 9: bei −4 starten und 9 Schritte nach rechts gehen; man landet bei 5.'),
        alt: alt('Kërcim nga −4 me +9 në boshtin numerik deri te 5.', 'A jump of +9 from −4 to 5 on the number line.', 'Ein Sprung um +9 von −4 nach 5 am Zahlenstrahl.'),
      }],
      answers: {
        examples: [[['-4 + 9', 5]], [['3 - 7', -4]]],
        practice: [[['-6 + 2', -4]], [['-2 - 5', -7]], [['5 + (-8)', -3]], [['3 - 10', -7]]],
      },
      al: {
        title: 'Mbledhja dhe zbritja e numrave të plotë',
        objectives: ['Të mblidhni dhe të zbritni numra të plotë me ndihmën e boshtit.', 'Të zgjidhni probleme me temperatura dhe lartësi.'],
        theory: 'Mbledhjen dhe zbritjen i bëjmë si lëvizje në boshtin numerik. Nisemi te numri i parë. Mbledhja e një numri pozitiv = lëvizje djathtas; zbritja e një numri pozitiv = lëvizje majtas.\n\n−4 + 9: nga −4 ecim 9 hapa djathtas → 5. 3 − 7: nga 3 ecim 7 hapa majtas → −4.\n\nMbledhja e një numri negativ është njësoj si zbritja e numrit të kundërt: 5 + (−8) = 5 − 8 = −3. Kur ka shumë veprime, i bëjmë me radhë nga e majta.',
        keyPoints: ['+ numër pozitiv → djathtas; − numër pozitiv → majtas.', 'a + (−b) = a − b', 'Nisuni gjithmonë nga numri i parë.'],
        examples: [
          { example: 'Temperatura ishte −4 °C dhe u rrit 9 °C. Sa është tani?', solution: '−4 + 9 = 5 °C.' },
          { example: 'Llogaritni 3 − 7.', solution: 'Nga 3 ecim 7 hapa majtas: 3 hapa deri te 0, edhe 4 pas tij → −4.' },
        ],
        commonMistakes: [
          { mistake: '3 − 7 = 4 (zbritet më i vogli nga më i madhi).', fix: 'Radha ka rëndësi: nga 3 ecni 7 majtas dhe dilni nën zero: −4.' },
          { mistake: '−2 − 5 = 3', fix: 'Nga −2 ecni edhe 5 majtas: −7.' },
        ],
        practice: [
          { problem: 'Llogaritni −6 + 2.', solution: '−4', steps: ['Nga −6 ecim 2 hapa djathtas.', '−6 → −5 → −4.'] },
          { problem: 'Llogaritni −2 − 5.', solution: '−7', steps: ['Nga −2 ecim 5 hapa majtas.', '−2 − 5 = −7.'] },
          { problem: 'Llogaritni 5 + (−8).', solution: '−3', steps: ['5 + (−8) = 5 − 8.', 'Nga 5, 8 hapa majtas: −3.'] },
          { problem: 'Në mëngjes ishin 3 °C, pastaj temperatura ra 10 °C. Sa ishte?', solution: '−7 °C', steps: ['3 − 10.', '= −7 °C.'] },
        ],
      },
      en: {
        title: 'Adding and subtracting integers',
        objectives: ['Add and subtract integers using the number line.', 'Solve problems with temperatures and heights.'],
        theory: 'We add and subtract by moving along the number line. Start at the first number. Adding a positive number = moving right; subtracting a positive number = moving left.\n\n−4 + 9: from −4 move 9 steps right → 5. 3 − 7: from 3 move 7 steps left → −4.\n\nAdding a negative number is the same as subtracting its opposite: 5 + (−8) = 5 − 8 = −3. With several operations, work in order from the left.',
        keyPoints: ['+ positive number → right; − positive number → left.', 'a + (−b) = a − b', 'Always start at the first number.'],
        examples: [
          { example: 'The temperature was −4 °C and rose by 9 °C. What is it now?', solution: '−4 + 9 = 5 °C.' },
          { example: 'Work out 3 − 7.', solution: 'From 3 move 7 steps left: 3 steps to 0, then 4 more → −4.' },
        ],
        commonMistakes: [
          { mistake: '3 − 7 = 4 (subtracting the smaller from the larger).', fix: 'The order matters: from 3 move 7 left and go below zero: −4.' },
          { mistake: '−2 − 5 = 3', fix: 'From −2 move another 5 left: −7.' },
        ],
        practice: [
          { problem: 'Work out −6 + 2.', solution: '−4', steps: ['From −6 move 2 steps right.', '−6 → −5 → −4.'] },
          { problem: 'Work out −2 − 5.', solution: '−7', steps: ['From −2 move 5 steps left.', '−2 − 5 = −7.'] },
          { problem: 'Work out 5 + (−8).', solution: '−3', steps: ['5 + (−8) = 5 − 8.', 'From 5, 8 steps left: −3.'] },
          { problem: 'In the morning it was 3 °C, then the temperature fell by 10 °C. What was it then?', solution: '−7 °C', steps: ['3 − 10.', '= −7 °C.'] },
        ],
      },
      de: {
        title: 'Ganze Zahlen addieren und subtrahieren',
        objectives: ['Ganze Zahlen mithilfe der Zahlengeraden addieren und subtrahieren.', 'Aufgaben mit Temperaturen und Höhen lösen.'],
        theory: 'Addieren und Subtrahieren stellt man sich als Bewegung auf der Zahlengeraden vor. Man startet bei der ersten Zahl. Eine positive Zahl addieren = nach rechts gehen; eine positive Zahl subtrahieren = nach links gehen.\n\n−4 + 9: von −4 aus 9 Schritte nach rechts → 5. 3 − 7: von 3 aus 7 Schritte nach links → −4.\n\nEine negative Zahl zu addieren ist dasselbe, wie ihre Gegenzahl zu subtrahieren: 5 + (−8) = 5 − 8 = −3. Bei mehreren Rechnungen rechnet man der Reihe nach von links.',
        keyPoints: ['+ positive Zahl → nach rechts; − positive Zahl → nach links.', 'a + (−b) = a − b', 'Immer bei der ersten Zahl starten.'],
        examples: [
          { example: 'Die Temperatur war −4 °C und stieg um 9 °C. Wie hoch ist sie jetzt?', solution: '−4 + 9 = 5 °C.' },
          { example: 'Berechnen Sie 3 − 7.', solution: 'Von 3 aus 7 Schritte nach links: 3 Schritte bis 0, dann noch 4 → −4.' },
        ],
        commonMistakes: [
          { mistake: '3 − 7 = 4 (die kleinere von der größeren Zahl abziehen).', fix: 'Die Reihenfolge zählt: von 3 aus 7 nach links, unter null: −4.' },
          { mistake: '−2 − 5 = 3', fix: 'Von −2 aus noch 5 nach links: −7.' },
        ],
        practice: [
          { problem: 'Berechnen Sie −6 + 2.', solution: '−4', steps: ['Von −6 aus 2 Schritte nach rechts.', '−6 → −5 → −4.'] },
          { problem: 'Berechnen Sie −2 − 5.', solution: '−7', steps: ['Von −2 aus 5 Schritte nach links.', '−2 − 5 = −7.'] },
          { problem: 'Berechnen Sie 5 + (−8).', solution: '−3', steps: ['5 + (−8) = 5 − 8.', 'Von 5 aus 8 Schritte nach links: −3.'] },
          { problem: 'Morgens waren es 3 °C, dann fiel die Temperatur um 10 °C. Wie viel Grad waren es dann?', solution: '−7 °C', steps: ['3 − 10.', '= −7 °C.'] },
        ],
      },
    },
  ],
};
