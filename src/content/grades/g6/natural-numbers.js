// Grade 6 · Theme 1: Natural numbers (September–October)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g6-natural-numbers',
  i18n: {
    al: { title: 'Numrat natyrorë', description: 'Lexoni, krahasoni dhe rrumbullakoni numra të mëdhenj; llogaritni me radhën e duhur dhe gjeni faktorët.' },
    en: { title: 'Natural numbers', description: 'Read, compare and round large numbers; calculate in the right order and find factors.' },
    de: { title: 'Natürliche Zahlen', description: 'Große Zahlen lesen, vergleichen und runden; in der richtigen Reihenfolge rechnen und Teiler finden.' },
  },
  lessons: [
    // ───────────────────────── 1. Reading and writing numbers
    {
      slug: 'g6-natural-numbers-reading-writing',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Vendi', 'Place', 'Stelle'), cells: [alt('DhM', 'TTh', 'ZT'), alt('M', 'Th', 'T'), alt('Q', 'H', 'H'), alt('Dh', 'T', 'Z'), alt('Nj', 'O', 'E')] },
          { head: alt('Shifra', 'Digit', 'Ziffer'), cells: ['4', '8', '7', '6', '3'] },
          { head: alt('Vlera', 'Value', 'Wert'), cells: [40000, 8000, 700, 60, 3] },
        ],
        highlight: [[1, 2], [2, 2]],
        caption: alt('48 763: shifra 7 është në vendin e qindësheve, pra vlen 700.', '48 763: the digit 7 is in the hundreds place, so it is worth 700.', '48 763: Die Ziffer 7 steht an der Hunderterstelle, sie ist also 700 wert.'),
        alt: alt(
          'Tabela e vendvlerës për numrin 48 763: 4 dhjetëmijëshe, 8 mijëshe, 7 qindëshe, 6 dhjetëshe dhe 3 njëshe.',
          'Place-value table for 48 763: 4 ten-thousands, 8 thousands, 7 hundreds, 6 tens and 3 ones.',
          'Stellenwerttafel für 48 763: 4 Zehntausender, 8 Tausender, 7 Hunderter, 6 Zehner und 3 Einer.',
        ),
      }],
      answers: {
        examples: ['text', [['7 * 10000', 70000]]],
        practice: ['text', [['3*1000000 + 5*1000 + 20', 3005020]], [['9 * 10000', 90000]], [['8*10000 + 6*1000 + 3*100 + 1*10 + 0', 86310]]],
      },
      al: {
        title: 'Leximi dhe shkrimi i numrave',
        objectives: ['Të lexoni dhe të shkruani numra natyrorë deri në miliona.', 'Të gjeni vlerën e një shifre sipas vendit të saj në numër.'],
        theory: 'Numrat natyrorë janë 1, 2, 3, 4, … Me vetëm dhjetë shifra (0 deri 9) shkruajmë çdo numër, sepse vlera e shifrës varet nga vendi ku qëndron: njëshe, dhjetëshe, qindëshe, mijëshe, dhjetëmijëshe e kështu me radhë. Çdo vend vlen 10 herë më shumë se vendi në të djathtë.\n\nNumrat e mëdhenj i ndajmë në grupe me nga tri shifra nga e djathta, me një hapësirë ndërmjet: 4 572 318. Grupi i parë nga e djathta janë njëshet, i dyti mijëshet, i treti milionat.\n\nNumrin e lexojmë grup pas grupi: 4 572 318 lexohet "katër milionë e pesëqind e shtatëdhjetë e dy mijë e treqind e tetëmbëdhjetë". Nëse në një vend nuk ka asgjë, shkruajmë 0: tre milionë e pesë mijë e njëzet shkruhet 3 005 020.',
        keyPoints: ['Vlera e shifrës = shifra × vlera e vendit (7 në vendin e qindësheve vlen 700).', 'Gruponi shifrat treshe nga e djathta: njëshe, mijëshe, miliona.', 'Një vend bosh në mes të numrit shënohet me 0.'],
        examples: [
          { example: 'Shkruani me fjalë numrin 305 042.', solution: '305 042 = 305 mijë e 42 → "treqind e pesë mijë e dyzet e dy".' },
          { example: 'Sa vlen shifra 7 në numrin 4 572 318?', solution: 'Shifra 7 është në vendin e dhjetëmijësheve, pra vlen 7 · 10 000 = 70 000.' },
        ],
        commonMistakes: [
          { mistake: 'Harrohet zeroja: "tre milionë e pesë mijë e njëzet" shkruhet gabim 3 520.', fix: 'Shkruani tri shifra për çdo grup: 3 | 005 | 020 → 3 005 020.' },
          { mistake: 'Ngatërrohet shifra me vlerën e saj (thuhet se 7 në 4 572 318 vlen 7).', fix: 'Shikoni vendin: shifra shumëzohet me vlerën e vendit.' },
        ],
        practice: [
          { problem: 'Shkruani me fjalë numrin 2 040 600.', solution: '"dy milionë e dyzet mijë e gjashtëqind"', steps: ['Grupet: 2 | 040 | 600.', 'Milionat: dy milionë; mijëshet: dyzet mijë; njëshet: gjashtëqind.'] },
          { problem: 'Shkruani me shifra: tre milionë, pesë mijë e njëzet.', solution: '3 005 020', steps: ['Milionat: 3.', 'Mijëshet: 005 (vetëm 5 mijë).', 'Njëshet: 020.', 'Numri: 3 005 020.'] },
          { problem: 'Sa vlen shifra 9 në numrin 98 431?', solution: '90 000', steps: ['9 është në vendin e dhjetëmijësheve.', '9 · 10 000 = 90 000.'] },
          { problem: 'Me shifrat 3, 0, 8, 1, 6 (secila një herë) shkruani numrin më të madh pesëshifror.', solution: '86 310', steps: ['Shifrat nga më e madhja te më e vogla: 8, 6, 3, 1, 0.', 'Numri: 86 310.'] },
        ],
      },
      en: {
        title: 'Reading and writing numbers',
        objectives: ['Read and write natural numbers up to millions.', 'Find the value of a digit from its place in the number.'],
        theory: 'The natural numbers are 1, 2, 3, 4, … With only ten digits (0 to 9) we can write every number, because the value of a digit depends on its place: ones, tens, hundreds, thousands, ten-thousands and so on. Each place is worth 10 times the place to its right.\n\nWe split large numbers into groups of three digits from the right, with a space between them: 4 572 318. The first group from the right is the ones, the second the thousands, the third the millions.\n\nWe read a number group by group: 4 572 318 is "four million five hundred seventy-two thousand three hundred eighteen". If a place is empty we write 0: three million five thousand twenty is written 3 005 020.',
        keyPoints: ['Value of a digit = digit × value of its place (7 in the hundreds place is worth 700).', 'Group digits in threes from the right: ones, thousands, millions.', 'An empty place inside a number is written as 0.'],
        examples: [
          { example: 'Write 305 042 in words.', solution: '305 042 = 305 thousand and 42 → "three hundred five thousand forty-two".' },
          { example: 'What is the digit 7 worth in 4 572 318?', solution: 'The 7 is in the ten-thousands place, so it is worth 7 · 10 000 = 70 000.' },
        ],
        commonMistakes: [
          { mistake: 'Forgetting zeros: "three million five thousand twenty" written as 3 520.', fix: 'Write three digits for every group: 3 | 005 | 020 → 3 005 020.' },
          { mistake: 'Mixing up a digit and its value (saying the 7 in 4 572 318 is worth 7).', fix: 'Look at the place: the digit is multiplied by the value of its place.' },
        ],
        practice: [
          { problem: 'Write 2 040 600 in words.', solution: '"two million forty thousand six hundred"', steps: ['Groups: 2 | 040 | 600.', 'Millions: two million; thousands: forty thousand; ones: six hundred.'] },
          { problem: 'Write in digits: three million, five thousand and twenty.', solution: '3 005 020', steps: ['Millions: 3.', 'Thousands: 005 (only 5 thousand).', 'Ones: 020.', 'The number: 3 005 020.'] },
          { problem: 'What is the digit 9 worth in 98 431?', solution: '90 000', steps: ['The 9 is in the ten-thousands place.', '9 · 10 000 = 90 000.'] },
          { problem: 'Using the digits 3, 0, 8, 1, 6 (each once), write the largest five-digit number.', solution: '86 310', steps: ['Digits from largest to smallest: 8, 6, 3, 1, 0.', 'The number: 86 310.'] },
        ],
      },
      de: {
        title: 'Zahlen lesen und schreiben',
        objectives: ['Natürliche Zahlen bis in die Millionen lesen und schreiben.', 'Den Wert einer Ziffer aus ihrer Stelle in der Zahl bestimmen.'],
        theory: 'Die natürlichen Zahlen sind 1, 2, 3, 4, … Mit nur zehn Ziffern (0 bis 9) lässt sich jede Zahl schreiben, weil der Wert einer Ziffer von ihrer Stelle abhängt: Einer, Zehner, Hunderter, Tausender, Zehntausender und so weiter. Jede Stelle ist 10-mal so viel wert wie die Stelle rechts daneben.\n\nGroße Zahlen teilen wir von rechts in Dreiergruppen, mit einem Abstand dazwischen: 4 572 318. Die erste Gruppe von rechts sind die Einer, die zweite die Tausender, die dritte die Millionen.\n\nWir lesen eine Zahl Gruppe für Gruppe: 4 572 318 heißt „vier Millionen fünfhundertzweiundsiebzigtausenddreihundertachtzehn“. Ist eine Stelle leer, schreiben wir 0: drei Millionen fünftausendzwanzig schreibt man 3 005 020.',
        keyPoints: ['Wert einer Ziffer = Ziffer × Stellenwert (eine 7 an der Hunderterstelle ist 700 wert).', 'Ziffern von rechts in Dreiergruppen teilen: Einer, Tausender, Millionen.', 'Eine leere Stelle innerhalb der Zahl wird mit 0 geschrieben.'],
        examples: [
          { example: 'Schreiben Sie 305 042 in Worten.', solution: '305 042 = 305 Tausend und 42 → „dreihundertfünftausendzweiundvierzig“.' },
          { example: 'Wie viel ist die Ziffer 7 in 4 572 318 wert?', solution: 'Die 7 steht an der Zehntausenderstelle, sie ist also 7 · 10 000 = 70 000 wert.' },
        ],
        commonMistakes: [
          { mistake: 'Nullen vergessen: „drei Millionen fünftausendzwanzig“ wird als 3 520 geschrieben.', fix: 'Für jede Gruppe drei Ziffern schreiben: 3 | 005 | 020 → 3 005 020.' },
          { mistake: 'Ziffer und Wert verwechseln (die 7 in 4 572 318 sei 7 wert).', fix: 'Auf die Stelle achten: Die Ziffer wird mit dem Stellenwert multipliziert.' },
        ],
        practice: [
          { problem: 'Schreiben Sie 2 040 600 in Worten.', solution: '„zwei Millionen vierzigtausendsechshundert“', steps: ['Gruppen: 2 | 040 | 600.', 'Millionen: zwei Millionen; Tausender: vierzigtausend; Einer: sechshundert.'] },
          { problem: 'Schreiben Sie mit Ziffern: drei Millionen fünftausendzwanzig.', solution: '3 005 020', steps: ['Millionen: 3.', 'Tausender: 005 (nur 5 Tausend).', 'Einer: 020.', 'Die Zahl: 3 005 020.'] },
          { problem: 'Wie viel ist die Ziffer 9 in 98 431 wert?', solution: '90 000', steps: ['Die 9 steht an der Zehntausenderstelle.', '9 · 10 000 = 90 000.'] },
          { problem: 'Bilden Sie mit den Ziffern 3, 0, 8, 1, 6 (jede einmal) die größte fünfstellige Zahl.', solution: '86 310', steps: ['Ziffern von groß nach klein: 8, 6, 3, 1, 0.', 'Die Zahl: 86 310.'] },
        ],
      },
    },

    // ───────────────────────── 2. Comparing
    {
      slug: 'g6-natural-numbers-comparing',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '', cells: [alt('DhM', 'TTh', 'ZT'), alt('M', 'Th', 'T'), alt('Q', 'H', 'H'), alt('Dh', 'T', 'Z'), alt('Nj', 'O', 'E')] },
          { head: 'A', cells: ['4', '5', '8', '1', '2'] },
          { head: 'B', cells: ['4', '5', '1', '2', '8'] },
        ],
        highlight: [[1, 2], [2, 2]],
        caption: alt('Shifrat e para janë të barabarta; te qindëshet 8 > 1, prandaj 45 812 > 45 128.', 'The first digits are equal; in the hundreds 8 > 1, so 45 812 > 45 128.', 'Die ersten Ziffern sind gleich; bei den Hundertern ist 8 > 1, also 45 812 > 45 128.'),
        alt: alt('Krahasimi i 45 812 dhe 45 128 shifër pas shifre; ndryshimi i parë është te qindëshet.', 'Comparing 45 812 and 45 128 digit by digit; the first difference is in the hundreds.', 'Vergleich von 45 812 und 45 128 Stelle für Stelle; der erste Unterschied liegt bei den Hundertern.'),
      }],
      answers: {
        examples: [[['45812 > 45128', true]], 'text'],
        practice: [[['99999 < 100000', true]], 'text', [['2004 - 1998 - 1', 5]]],
      },
      al: {
        title: 'Krahasimi i numrave',
        objectives: ['Të krahasoni dy numra natyrorë me shenjat <, > dhe =.', 'Të renditni disa numra nga më i vogli te më i madhi.'],
        theory: 'Për të krahasuar dy numra, fillimisht numëroni shifrat. Numri me më shumë shifra është më i madh: 100 000 (6 shifra) > 99 999 (5 shifra).\n\nNëse numrat kanë po aq shifra, krahasoni shifrat nga e majta. Shifra e parë që ndryshon vendos: te 45 812 dhe 45 128, shifrat 4 dhe 5 janë të njëjta, ndërsa te qindëshet 8 > 1, prandaj 45 812 > 45 128.\n\nShenja "<" lexohet "më i vogël se", shenja ">" "më i madh se". Maja e shenjës tregon gjithmonë numrin më të vogël.',
        keyPoints: ['Më shumë shifra → numër më i madh.', 'Me po aq shifra: krahasoni nga e majta; vendos shifra e parë që ndryshon.', 'Maja e < ose > tregon nga numri më i vogël.'],
        examples: [
          { example: 'Krahasoni 45 812 dhe 45 128.', solution: 'Të dy kanë 5 shifra. 4 = 4, 5 = 5, te qindëshet 8 > 1. Pra 45 812 > 45 128.' },
          { example: 'Renditni nga më i vogli: 3 405, 3 054, 3 450, 3 045.', solution: 'Mijëshet janë të njëjta (3). Te qindëshet: 0, 0, 4, 4. Pastaj dhjetëshet: 3 045 < 3 054 < 3 405 < 3 450.' },
        ],
        commonMistakes: [
          { mistake: 'Krahasohet vetëm shifra e fundit (3 450 duket më e vogël se 3 405 sepse 0 < 5).', fix: 'Krahasoni gjithmonë nga e majta, jo nga e djathta.' },
        ],
        practice: [
          { problem: 'Vendosni shenjën e duhur: 99 999 … 100 000.', solution: '99 999 < 100 000', steps: ['99 999 ka 5 shifra, 100 000 ka 6 shifra.', 'Numri me më shumë shifra është më i madh.'] },
          { problem: 'Renditni nga më i madhi: 12 300, 12 030, 13 200, 12 003.', solution: '13 200 > 12 300 > 12 030 > 12 003', steps: ['Te mijëshet: 13 është më i madh se 12.', 'Ndër numrat me 12 mijë krahasoni qindëshet dhe dhjetëshet.'] },
          { problem: 'Sa numra natyrorë ka ndërmjet 1 998 dhe 2 004 (pa i numëruar vetë këta të dy)?', solution: '5', steps: ['Numrat janë 1 999, 2 000, 2 001, 2 002, 2 003.', 'Ose: 2 004 − 1 998 − 1 = 5.'] },
        ],
      },
      en: {
        title: 'Comparing numbers',
        objectives: ['Compare two natural numbers using <, > and =.', 'Put several numbers in order from smallest to largest.'],
        theory: 'To compare two numbers, first count their digits. The number with more digits is larger: 100 000 (6 digits) > 99 999 (5 digits).\n\nIf the numbers have the same number of digits, compare the digits from the left. The first digit that differs decides: in 45 812 and 45 128 the digits 4 and 5 are the same, but in the hundreds 8 > 1, so 45 812 > 45 128.\n\nThe sign "<" means "is less than" and ">" means "is greater than". The point of the sign always faces the smaller number.',
        keyPoints: ['More digits → larger number.', 'Same number of digits: compare from the left; the first different digit decides.', 'The point of < or > faces the smaller number.'],
        examples: [
          { example: 'Compare 45 812 and 45 128.', solution: 'Both have 5 digits. 4 = 4, 5 = 5, in the hundreds 8 > 1. So 45 812 > 45 128.' },
          { example: 'Order from smallest: 3 405, 3 054, 3 450, 3 045.', solution: 'The thousands are equal (3). Hundreds: 0, 0, 4, 4. Then the tens: 3 045 < 3 054 < 3 405 < 3 450.' },
        ],
        commonMistakes: [
          { mistake: 'Comparing only the last digit (3 450 seems smaller than 3 405 because 0 < 5).', fix: 'Always compare from the left, not from the right.' },
        ],
        practice: [
          { problem: 'Put the right sign: 99 999 … 100 000.', solution: '99 999 < 100 000', steps: ['99 999 has 5 digits, 100 000 has 6 digits.', 'The number with more digits is larger.'] },
          { problem: 'Order from largest: 12 300, 12 030, 13 200, 12 003.', solution: '13 200 > 12 300 > 12 030 > 12 003', steps: ['Thousands: 13 is larger than 12.', 'Among the numbers with 12 thousand, compare hundreds and tens.'] },
          { problem: 'How many natural numbers lie between 1 998 and 2 004 (not counting these two)?', solution: '5', steps: ['They are 1 999, 2 000, 2 001, 2 002, 2 003.', 'Or: 2 004 − 1 998 − 1 = 5.'] },
        ],
      },
      de: {
        title: 'Zahlen vergleichen',
        objectives: ['Zwei natürliche Zahlen mit <, > und = vergleichen.', 'Mehrere Zahlen der Größe nach ordnen.'],
        theory: 'Um zwei Zahlen zu vergleichen, zählen Sie zuerst ihre Ziffern. Die Zahl mit mehr Ziffern ist größer: 100 000 (6 Ziffern) > 99 999 (5 Ziffern).\n\nHaben beide Zahlen gleich viele Ziffern, vergleichen Sie die Ziffern von links. Die erste Ziffer, die sich unterscheidet, entscheidet: Bei 45 812 und 45 128 sind 4 und 5 gleich, bei den Hundertern ist 8 > 1, also 45 812 > 45 128.\n\nDas Zeichen „<“ bedeutet „ist kleiner als“, „>“ bedeutet „ist größer als“. Die Spitze des Zeichens zeigt immer zur kleineren Zahl.',
        keyPoints: ['Mehr Ziffern → größere Zahl.', 'Gleich viele Ziffern: von links vergleichen; die erste unterschiedliche Ziffer entscheidet.', 'Die Spitze von < oder > zeigt zur kleineren Zahl.'],
        examples: [
          { example: 'Vergleichen Sie 45 812 und 45 128.', solution: 'Beide haben 5 Ziffern. 4 = 4, 5 = 5, bei den Hundertern 8 > 1. Also 45 812 > 45 128.' },
          { example: 'Ordnen Sie aufsteigend: 3 405, 3 054, 3 450, 3 045.', solution: 'Die Tausender sind gleich (3). Hunderter: 0, 0, 4, 4. Dann die Zehner: 3 045 < 3 054 < 3 405 < 3 450.' },
        ],
        commonMistakes: [
          { mistake: 'Nur die letzte Ziffer vergleichen (3 450 wirkt kleiner als 3 405, weil 0 < 5).', fix: 'Immer von links vergleichen, nicht von rechts.' },
        ],
        practice: [
          { problem: 'Setzen Sie das richtige Zeichen: 99 999 … 100 000.', solution: '99 999 < 100 000', steps: ['99 999 hat 5 Ziffern, 100 000 hat 6 Ziffern.', 'Die Zahl mit mehr Ziffern ist größer.'] },
          { problem: 'Ordnen Sie absteigend: 12 300, 12 030, 13 200, 12 003.', solution: '13 200 > 12 300 > 12 030 > 12 003', steps: ['Tausender: 13 ist größer als 12.', 'Bei den Zahlen mit 12 Tausend Hunderter und Zehner vergleichen.'] },
          { problem: 'Wie viele natürliche Zahlen liegen zwischen 1 998 und 2 004 (diese beiden nicht mitgezählt)?', solution: '5', steps: ['Es sind 1 999, 2 000, 2 001, 2 002, 2 003.', 'Oder: 2 004 − 1 998 − 1 = 5.'] },
        ],
      },
    },

    // ───────────────────────── 3. Number line
    {
      slug: 'g6-natural-numbers-number-line',
      visuals: [{
        type: 'numberLine', min: 0, max: 100, step: 10,
        points: [{ x: 30, label: 'A' }, { x: 70, label: 'B' }],
        drag: { value: 50, hint: alt('Tërhiqni pikën portokalli', 'Drag the orange point', 'Ziehen Sie den orangefarbenen Punkt') },
        caption: alt('Çdo vijë e vogël është 10 njësi larg nga tjetra. A = 30, B = 70.', 'Each small mark is 10 units from the next. A = 30, B = 70.', 'Jeder Strich ist 10 Einheiten vom nächsten entfernt. A = 30, B = 70.'),
        alt: alt('Bosht numerik nga 0 deri 100 me hap 10; pika A te 30, pika B te 70 dhe një pikë që mund të tërhiqet.', 'Number line from 0 to 100 in steps of 10; point A at 30, point B at 70 and a point you can drag.', 'Zahlenstrahl von 0 bis 100 in Zehnerschritten; Punkt A bei 30, Punkt B bei 70 und ein verschiebbarer Punkt.'),
      }],
      exampleVisuals: [null, {
        type: 'numberLine', min: 20, max: 60, step: 10, points: [{ x: 20, label: 20 }, { x: 60, label: 60 }],
        alt: alt('Boshti nga 20 deri 60 i ndarë në 4 pjesë të barabarta.', 'Number line from 20 to 60 split into 4 equal parts.', 'Zahlenstrahl von 20 bis 60, in 4 gleiche Teile geteilt.'),
      }],
      answers: {
        examples: ['text', [['(60 - 20) / 4', 10]]],
        practice: [[['45 - 17', 28]], [['(40 + 90) / 2', 65]], [['4 * 25', 100]]],
      },
      al: {
        title: 'Boshti numerik',
        objectives: ['Të paraqitni numra natyrorë në boshtin numerik.', 'Të gjeni largësinë ndërmjet dy numrave në bosht.'],
        theory: 'Boshti numerik është një drejtëz ku numrat vendosen me radhë, me largësi të barabarta. Zgjedhim pikën 0 dhe një njësi (p.sh. 1 cm), dhe pastaj numrat rriten nga e majta në të djathtë.\n\nSa më djathtas të jetë një numër, aq më i madh është. Largësia ndërmjet dy numrave në bosht është ndryshesa e tyre: nga 17 te 45 ka 45 − 17 = 28 njësi.\n\nKur boshti ka vija me hap 10, 25 ose 100, para se të lexoni një pikë, gjeni sa vlen një hap: ndani ndryshesën e dy numrave të shënuar me numrin e pjesëve ndërmjet tyre.',
        keyPoints: ['Djathtas = më i madh.', 'Largësia ndërmjet a dhe b (b > a) është b − a.', 'Hapi = (ndryshesa e dy numrave të njohur) : (numri i pjesëve).'],
        examples: [
          { example: 'Në boshtin nga 0 te 100 me hap 10, ku ndodhet numri 35?', solution: 'Ndërmjet vijave 30 dhe 40, saktësisht në mes, sepse 35 është gjysmë hapi pas 30.' },
          { example: 'Ndërmjet 20 dhe 60 boshti është ndarë në 4 pjesë të barabarta. Sa vlen çdo pjesë?', solution: '(60 − 20) : 4 = 40 : 4 = 10. Çdo pjesë vlen 10.' },
        ],
        commonMistakes: [
          { mistake: 'Numërohen vijat në vend të pjesëve (5 vija ndërmjet 20 dhe 60 → hap 8).', fix: 'Numëroni hapësirat ndërmjet vijave: 5 vija krijojnë 4 pjesë.' },
        ],
        practice: [
          { problem: 'Sa është largësia ndërmjet 17 dhe 45 në boshtin numerik?', solution: '28', steps: ['Largësia = numri më i madh − numri më i vogël.', '45 − 17 = 28.'] },
          { problem: 'Cili numër ndodhet saktësisht në mes ndërmjet 40 dhe 90?', solution: '65', steps: ['Mesi = (40 + 90) : 2.', '130 : 2 = 65.'] },
          { problem: 'Boshti fillon te 0 dhe ka hap 25. Cili numër është te vija e katërt pas zeros?', solution: '100', steps: ['Çdo vijë shton 25.', '4 · 25 = 100.'] },
        ],
      },
      en: {
        title: 'The number line',
        objectives: ['Show natural numbers on a number line.', 'Find the distance between two numbers on the line.'],
        theory: 'A number line is a straight line on which numbers are placed in order, at equal distances. We choose the point 0 and a unit (for example 1 cm), and the numbers then grow from left to right.\n\nThe further right a number is, the larger it is. The distance between two numbers on the line is their difference: from 17 to 45 there are 45 − 17 = 28 units.\n\nWhen the marks go up in steps of 10, 25 or 100, first find what one step is worth: divide the difference between two labelled numbers by the number of parts between them.',
        keyPoints: ['Further right = larger.', 'The distance between a and b (b > a) is b − a.', 'Step = (difference of two known numbers) ÷ (number of parts).'],
        examples: [
          { example: 'On the line from 0 to 100 with steps of 10, where is 35?', solution: 'Between the marks 30 and 40, exactly in the middle, because 35 is half a step after 30.' },
          { example: 'Between 20 and 60 the line is split into 4 equal parts. What is each part worth?', solution: '(60 − 20) ÷ 4 = 40 ÷ 4 = 10. Each part is worth 10.' },
        ],
        commonMistakes: [
          { mistake: 'Counting the marks instead of the parts (5 marks between 20 and 60 → step 8).', fix: 'Count the gaps between the marks: 5 marks make 4 parts.' },
        ],
        practice: [
          { problem: 'What is the distance between 17 and 45 on the number line?', solution: '28', steps: ['Distance = larger number − smaller number.', '45 − 17 = 28.'] },
          { problem: 'Which number lies exactly halfway between 40 and 90?', solution: '65', steps: ['Midpoint = (40 + 90) ÷ 2.', '130 ÷ 2 = 65.'] },
          { problem: 'A number line starts at 0 and goes up in steps of 25. Which number is at the fourth mark after zero?', solution: '100', steps: ['Each mark adds 25.', '4 · 25 = 100.'] },
        ],
      },
      de: {
        title: 'Der Zahlenstrahl',
        objectives: ['Natürliche Zahlen am Zahlenstrahl darstellen.', 'Den Abstand zwischen zwei Zahlen am Zahlenstrahl bestimmen.'],
        theory: 'Ein Zahlenstrahl ist eine Linie, auf der die Zahlen der Reihe nach in gleichen Abständen stehen. Wir wählen den Punkt 0 und eine Einheit (zum Beispiel 1 cm); nach rechts werden die Zahlen größer.\n\nJe weiter rechts eine Zahl liegt, desto größer ist sie. Der Abstand zweier Zahlen am Zahlenstrahl ist ihre Differenz: von 17 bis 45 sind es 45 − 17 = 28 Einheiten.\n\nGehen die Striche in Schritten von 10, 25 oder 100, bestimmen Sie zuerst, wie viel ein Schritt wert ist: Teilen Sie die Differenz zweier beschrifteter Zahlen durch die Anzahl der Teile dazwischen.',
        keyPoints: ['Weiter rechts = größer.', 'Der Abstand von a und b (b > a) ist b − a.', 'Schritt = (Differenz zweier bekannter Zahlen) : (Anzahl der Teile).'],
        examples: [
          { example: 'Wo liegt 35 am Zahlenstrahl von 0 bis 100 mit Zehnerschritten?', solution: 'Zwischen den Strichen 30 und 40, genau in der Mitte, denn 35 liegt einen halben Schritt nach 30.' },
          { example: 'Zwischen 20 und 60 ist der Zahlenstrahl in 4 gleiche Teile geteilt. Wie viel ist ein Teil wert?', solution: '(60 − 20) : 4 = 40 : 4 = 10. Jeder Teil ist 10 wert.' },
        ],
        commonMistakes: [
          { mistake: 'Striche statt Teile zählen (5 Striche zwischen 20 und 60 → Schritt 8).', fix: 'Die Lücken zwischen den Strichen zählen: 5 Striche ergeben 4 Teile.' },
        ],
        practice: [
          { problem: 'Wie groß ist der Abstand zwischen 17 und 45 am Zahlenstrahl?', solution: '28', steps: ['Abstand = größere Zahl − kleinere Zahl.', '45 − 17 = 28.'] },
          { problem: 'Welche Zahl liegt genau in der Mitte zwischen 40 und 90?', solution: '65', steps: ['Mitte = (40 + 90) : 2.', '130 : 2 = 65.'] },
          { problem: 'Ein Zahlenstrahl beginnt bei 0 und hat Schritte von 25. Welche Zahl steht am vierten Strich nach der Null?', solution: '100', steps: ['Jeder Strich kommt 25 dazu.', '4 · 25 = 100.'] },
        ],
      },
    },

    // ───────────────────────── 4. Rounding
    {
      slug: 'g6-natural-numbers-rounding',
      visuals: [{
        type: 'numberLine', min: 48700, max: 48800, step: 10, labelEvery: 5,
        points: [{ x: 48763, label: 48763, color: 'secondary', below: true }, { x: 48750, label: alt('mesi', 'halfway', 'Mitte'), color: 'purple', open: true }],
        jumps: [{ from: 48763, to: 48800, label: '+37', color: 'success' }],
        caption: alt('48 763 është pas mesit 48 750, pra më afër 48 800.', '48 763 is past the halfway point 48 750, so it is closer to 48 800.', '48 763 liegt hinter der Mitte 48 750, also näher an 48 800.'),
        alt: alt('Boshti nga 48 700 deri 48 800; 48 763 është djathtas mesit 48 750, më afër 48 800.', 'Number line from 48 700 to 48 800; 48 763 is to the right of the halfway point 48 750, closer to 48 800.', 'Zahlenstrahl von 48 700 bis 48 800; 48 763 liegt rechts der Mitte 48 750, näher an 48 800.'),
      }],
      answers: {
        examples: [[['round(48763 / 100) * 100', 48800]], [['round(3451 / 1000) * 1000', 3000]]],
        practice: [[['round(7549 / 10) * 10', 7550]], [['round(129500 / 1000) * 1000', 130000]], [['round(6950 / 100) * 100', 7000]]],
      },
      al: {
        title: 'Rrumbullakimi',
        objectives: ['Të rrumbullakoni një numër në dhjetëshen, qindëshen ose mijëshen më të afërt.', 'Të përdorni rrumbullakimin për vlerësime të shpejta.'],
        theory: 'Rrumbullakimi e zëvendëson një numër me një numër "të rrumbullakët" që është afër tij. P.sh. në vend të 48 763 banorë themi "rreth 48 800 banorë".\n\nRregulla: gjeni vendin ku rrumbullakoni dhe shikoni shifrën menjëherë në të djathtë të tij. Nëse ajo është 0, 1, 2, 3 ose 4, shifra e vendit mbetet e njëjtë. Nëse është 5, 6, 7, 8 ose 9, shifra e vendit rritet me 1. Të gjitha shifrat djathtas bëhen 0.\n\nNë boshtin numerik kjo do të thotë: zgjidhni numrin e rrumbullakët më të afërt. Numri që është saktësisht në mes (p.sh. 48 750) rrumbullakohet lart.',
        keyPoints: ['Shikoni vetëm shifrën në të djathtë të vendit të rrumbullakimit.', '0–4 → poshtë; 5–9 → lart.', 'Shifrat djathtas vendit bëhen zero.'],
        examples: [
          { example: 'Rrumbullakoni 48 763 në qindëshen më të afërt.', solution: 'Qindëshet: 7. Shifra djathtas: 6 (≥ 5), pra 7 bëhet 8. Përgjigja: 48 800.' },
          { example: 'Rrumbullakoni 3 451 në mijëshen më të afërt.', solution: 'Mijëshet: 3. Shifra djathtas: 4 (< 5), pra 3 mbetet. Përgjigja: 3 000.' },
        ],
        commonMistakes: [
          { mistake: 'Rrumbullakohet "me zinxhir": 3 451 → 3 460 → 3 500 → 4 000.', fix: 'Shikoni vetëm një shifër, atë menjëherë djathtas vendit: 3 451 → 3 000.' },
          { mistake: 'Harrohet që shifrat djathtas bëhen 0 (48 763 → 48 863).', fix: 'Pas rrumbullakimit, gjithçka djathtas vendit është 0.' },
        ],
        practice: [
          { problem: 'Rrumbullakoni 7 549 në dhjetëshen më të afërt.', solution: '7 550', steps: ['Dhjetëshet: 4; shifra djathtas: 9 (≥ 5).', '4 bëhet 5: 7 550.'] },
          { problem: 'Rrumbullakoni 129 500 në mijëshen më të afërt.', solution: '130 000', steps: ['Mijëshet: 9; shifra djathtas: 5 → lart.', '129 + 1 = 130 mijë: 130 000.'] },
          { problem: 'Rrumbullakoni 6 950 në qindëshen më të afërt.', solution: '7 000', steps: ['Qindëshet: 9; shifra djathtas: 5 → lart.', '69 qindëshe + 1 = 70 qindëshe: 7 000.'] },
        ],
      },
      en: {
        title: 'Rounding',
        objectives: ['Round a number to the nearest ten, hundred or thousand.', 'Use rounding for quick estimates.'],
        theory: 'Rounding replaces a number with a "round" number close to it. Instead of 48 763 people we say "about 48 800 people".\n\nThe rule: find the place you round to and look at the digit just to its right. If it is 0, 1, 2, 3 or 4, the digit in that place stays the same. If it is 5, 6, 7, 8 or 9, the digit in that place goes up by 1. All digits to the right become 0.\n\nOn the number line this means: choose the nearest round number. A number exactly in the middle (such as 48 750) is rounded up.',
        keyPoints: ['Look only at the digit just right of the rounding place.', '0–4 → down; 5–9 → up.', 'Digits to the right of the place become zero.'],
        examples: [
          { example: 'Round 48 763 to the nearest hundred.', solution: 'Hundreds digit: 7. Digit to the right: 6 (≥ 5), so 7 becomes 8. Answer: 48 800.' },
          { example: 'Round 3 451 to the nearest thousand.', solution: 'Thousands digit: 3. Digit to the right: 4 (< 5), so 3 stays. Answer: 3 000.' },
        ],
        commonMistakes: [
          { mistake: 'Rounding "in a chain": 3 451 → 3 460 → 3 500 → 4 000.', fix: 'Look at one digit only, the one just right of the place: 3 451 → 3 000.' },
          { mistake: 'Forgetting that the digits to the right become 0 (48 763 → 48 863).', fix: 'After rounding, everything right of the place is 0.' },
        ],
        practice: [
          { problem: 'Round 7 549 to the nearest ten.', solution: '7 550', steps: ['Tens digit: 4; digit to the right: 9 (≥ 5).', '4 becomes 5: 7 550.'] },
          { problem: 'Round 129 500 to the nearest thousand.', solution: '130 000', steps: ['Thousands digit: 9; digit to the right: 5 → up.', '129 + 1 = 130 thousand: 130 000.'] },
          { problem: 'Round 6 950 to the nearest hundred.', solution: '7 000', steps: ['Hundreds digit: 9; digit to the right: 5 → up.', '69 hundreds + 1 = 70 hundreds: 7 000.'] },
        ],
      },
      de: {
        title: 'Runden',
        objectives: ['Eine Zahl auf Zehner, Hunderter oder Tausender runden.', 'Durch Runden schnell überschlagen.'],
        theory: 'Beim Runden ersetzt man eine Zahl durch eine „runde“ Zahl in ihrer Nähe. Statt 48 763 Einwohner sagen wir „etwa 48 800 Einwohner“.\n\nDie Regel: Bestimmen Sie die Rundungsstelle und schauen Sie auf die Ziffer direkt rechts daneben. Ist sie 0, 1, 2, 3 oder 4, bleibt die Ziffer der Rundungsstelle gleich (abrunden). Ist sie 5, 6, 7, 8 oder 9, wird sie um 1 größer (aufrunden). Alle Ziffern rechts davon werden 0.\n\nAm Zahlenstrahl heißt das: Wählen Sie die nächstgelegene runde Zahl. Eine Zahl genau in der Mitte (z. B. 48 750) wird aufgerundet.',
        keyPoints: ['Nur die Ziffer direkt rechts der Rundungsstelle ansehen.', '0–4 → abrunden; 5–9 → aufrunden.', 'Ziffern rechts der Rundungsstelle werden null.'],
        examples: [
          { example: 'Runden Sie 48 763 auf Hunderter.', solution: 'Hunderterziffer: 7. Ziffer rechts daneben: 6 (≥ 5), also wird 7 zu 8. Ergebnis: 48 800.' },
          { example: 'Runden Sie 3 451 auf Tausender.', solution: 'Tausenderziffer: 3. Ziffer rechts daneben: 4 (< 5), also bleibt 3. Ergebnis: 3 000.' },
        ],
        commonMistakes: [
          { mistake: '„Kettenrunden“: 3 451 → 3 460 → 3 500 → 4 000.', fix: 'Nur eine Ziffer ansehen, die direkt rechts der Stelle: 3 451 → 3 000.' },
          { mistake: 'Vergessen, dass die Ziffern rechts zu 0 werden (48 763 → 48 863).', fix: 'Nach dem Runden ist alles rechts der Rundungsstelle 0.' },
        ],
        practice: [
          { problem: 'Runden Sie 7 549 auf Zehner.', solution: '7 550', steps: ['Zehnerziffer: 4; Ziffer rechts: 9 (≥ 5).', '4 wird zu 5: 7 550.'] },
          { problem: 'Runden Sie 129 500 auf Tausender.', solution: '130 000', steps: ['Tausenderziffer: 9; Ziffer rechts: 5 → aufrunden.', '129 + 1 = 130 Tausend: 130 000.'] },
          { problem: 'Runden Sie 6 950 auf Hunderter.', solution: '7 000', steps: ['Hunderterziffer: 9; Ziffer rechts: 5 → aufrunden.', '69 Hunderter + 1 = 70 Hunderter: 7 000.'] },
        ],
      },
    },

    // ───────────────────────── 5. Four operations and their properties
    {
      slug: 'g6-natural-numbers-operations',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1, xMax: 14, yMin: -1.5, yMax: 8.5 }, height: 170,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [10, 0], [10, 7], [0, 7]], fill: true, color: 'primary', label: { at: [5, 3.5], text: '7 · 10 = 70' } },
          { kind: 'polygon', points: [[10, 0], [13, 0], [13, 7], [10, 7]], fill: true, color: 'secondary', label: { at: [11.5, 3.5], text: '21' } },
          { kind: 'label', at: [5, -0.8], text: '10' },
          { kind: 'label', at: [11.5, -0.8], text: '3' },
          { kind: 'label', at: [-0.6, 3.5], text: '7' },
        ],
        caption: alt('7 · 13 = 7 · 10 + 7 · 3 = 70 + 21 = 91 (vetia shpërndarëse).', '7 · 13 = 7 · 10 + 7 · 3 = 70 + 21 = 91 (distributive property).', '7 · 13 = 7 · 10 + 7 · 3 = 70 + 21 = 91 (Distributivgesetz).'),
        alt: alt('Drejtkëndësh 7 me 13 i ndarë në dy pjesë: 7 me 10 (70) dhe 7 me 3 (21).', 'A 7 by 13 rectangle split into 7 by 10 (70) and 7 by 3 (21).', 'Ein Rechteck 7 mal 13, geteilt in 7 mal 10 (70) und 7 mal 3 (21).'),
      }],
      answers: {
        examples: [[['25 * 17 * 4', 1700]], [['8 * 105', 840]]],
        practice: [[['352 + 199', 551]], [['47 * 99', 4653]], [['ceil(310 / 52)', 6]], [['1000 / 8', 125]]],
      },
      al: {
        title: 'Katër veprimet dhe vetitë e tyre',
        objectives: ['Të mblidhni, zbritni, shumëzoni dhe pjesëtoni numra natyrorë.', 'Të përdorni vetitë e veprimeve për të llogaritur më shpejt.'],
        theory: 'Mbledhja dhe shumëzimi kanë dy veti të dobishme. Vetia ndërruese: a + b = b + a dhe a · b = b · a. Vetia shoqëruese: (a + b) + c = a + (b + c) dhe (a · b) · c = a · (b · c). Ato na lejojnë të ndryshojmë radhën dhe grupimin për të llogaritur më lehtë.\n\nVetia shpërndarëse lidh shumëzimin me mbledhjen: a · (b + c) = a · b + a · c. P.sh. 8 · 105 = 8 · 100 + 8 · 5 = 800 + 40 = 840.\n\nPjesëtimi mund të ketë mbetje: 310 : 52 = 5 me mbetje 50, sepse 52 · 5 = 260 dhe 310 − 260 = 50. Mbetja është gjithmonë më e vogël se pjesëtuesi. Me 0 nuk pjesëtohet kurrë.',
        keyPoints: ['a + b = b + a;  a · b = b · a', '(a · b) · c = a · (b · c)', 'a · (b + c) = a · b + a · c', 'i pjesëtueshmi = pjesëtuesi · herësi + mbetja (mbetja < pjesëtuesi)'],
        examples: [
          { example: 'Llogaritni me mend: 25 · 17 · 4.', solution: 'Ndërrojmë radhën: 25 · 4 · 17 = 100 · 17 = 1 700.' },
          { example: 'Llogaritni 8 · 105 me vetinë shpërndarëse.', solution: '8 · (100 + 5) = 800 + 40 = 840.' },
        ],
        commonMistakes: [
          { mistake: 'Vetia ndërruese përdoret te zbritja: 10 − 4 = 4 − 10.', fix: 'Ndërrimi i radhës vlen vetëm për mbledhjen dhe shumëzimin.' },
          { mistake: 'Te pjesëtimi me mbetje përgjigjet me herësin pa e lexuar pyetjen (5 autobusë për 310 nxënës).', fix: 'Pyetni veten çfarë do të ndodhë me mbetjen: 50 nxënës duan edhe një autobus.' },
        ],
        practice: [
          { problem: 'Llogaritni me mend: 352 + 199.', solution: '551', steps: ['199 = 200 − 1.', '352 + 200 = 552; 552 − 1 = 551.'] },
          { problem: 'Llogaritni 47 · 99.', solution: '4 653', steps: ['99 = 100 − 1.', '47 · 100 − 47 = 4 700 − 47 = 4 653.'] },
          { problem: 'Një autobus ka 52 ulëse. Sa autobusë duhen për 310 nxënës?', solution: '6 autobusë', steps: ['310 : 52 = 5 me mbetje 50.', '50 nxënës mbeten pa vend, prandaj duhet edhe një autobus: 5 + 1 = 6.'] },
          { problem: 'Llogaritni 1 000 : 8.', solution: '125', steps: ['1 000 : 2 = 500, 500 : 2 = 250, 250 : 2 = 125.', 'Kontroll: 8 · 125 = 1 000.'] },
        ],
      },
      en: {
        title: 'The four operations and their properties',
        objectives: ['Add, subtract, multiply and divide natural numbers.', 'Use the properties of operations to calculate faster.'],
        theory: 'Addition and multiplication have two useful properties. Commutative: a + b = b + a and a · b = b · a. Associative: (a + b) + c = a + (b + c) and (a · b) · c = a · (b · c). They let us change the order and grouping to make calculations easier.\n\nThe distributive property links multiplication and addition: a · (b + c) = a · b + a · c. For example 8 · 105 = 8 · 100 + 8 · 5 = 800 + 40 = 840.\n\nDivision can leave a remainder: 310 ÷ 52 = 5 remainder 50, because 52 · 5 = 260 and 310 − 260 = 50. The remainder is always smaller than the divisor. We can never divide by 0.',
        keyPoints: ['a + b = b + a;  a · b = b · a', '(a · b) · c = a · (b · c)', 'a · (b + c) = a · b + a · c', 'dividend = divisor · quotient + remainder (remainder < divisor)'],
        examples: [
          { example: 'Work out mentally: 25 · 17 · 4.', solution: 'Change the order: 25 · 4 · 17 = 100 · 17 = 1 700.' },
          { example: 'Work out 8 · 105 using the distributive property.', solution: '8 · (100 + 5) = 800 + 40 = 840.' },
        ],
        commonMistakes: [
          { mistake: 'Using the commutative property for subtraction: 10 − 4 = 4 − 10.', fix: 'Changing the order only works for addition and multiplication.' },
          { mistake: 'With a remainder, giving the quotient without reading the question (5 buses for 310 students).', fix: 'Ask what happens to the remainder: 50 students still need a bus.' },
        ],
        practice: [
          { problem: 'Work out mentally: 352 + 199.', solution: '551', steps: ['199 = 200 − 1.', '352 + 200 = 552; 552 − 1 = 551.'] },
          { problem: 'Work out 47 · 99.', solution: '4 653', steps: ['99 = 100 − 1.', '47 · 100 − 47 = 4 700 − 47 = 4 653.'] },
          { problem: 'A bus has 52 seats. How many buses are needed for 310 students?', solution: '6 buses', steps: ['310 ÷ 52 = 5 remainder 50.', '50 students have no seat, so one more bus is needed: 5 + 1 = 6.'] },
          { problem: 'Work out 1 000 ÷ 8.', solution: '125', steps: ['1 000 ÷ 2 = 500, 500 ÷ 2 = 250, 250 ÷ 2 = 125.', 'Check: 8 · 125 = 1 000.'] },
        ],
      },
      de: {
        title: 'Die vier Grundrechenarten und ihre Gesetze',
        objectives: ['Natürliche Zahlen addieren, subtrahieren, multiplizieren und dividieren.', 'Rechengesetze nutzen, um schneller zu rechnen.'],
        theory: 'Für Addition und Multiplikation gelten zwei nützliche Gesetze. Kommutativgesetz: a + b = b + a und a · b = b · a. Assoziativgesetz: (a + b) + c = a + (b + c) und (a · b) · c = a · (b · c). Damit darf man Reihenfolge und Klammern ändern, um leichter zu rechnen.\n\nDas Distributivgesetz verbindet Multiplikation und Addition: a · (b + c) = a · b + a · c. Zum Beispiel 8 · 105 = 8 · 100 + 8 · 5 = 800 + 40 = 840.\n\nBeim Dividieren kann ein Rest bleiben: 310 : 52 = 5 Rest 50, denn 52 · 5 = 260 und 310 − 260 = 50. Der Rest ist immer kleiner als der Divisor. Durch 0 darf man nie teilen.',
        keyPoints: ['a + b = b + a;  a · b = b · a', '(a · b) · c = a · (b · c)', 'a · (b + c) = a · b + a · c', 'Dividend = Divisor · Quotient + Rest (Rest < Divisor)'],
        examples: [
          { example: 'Rechnen Sie im Kopf: 25 · 17 · 4.', solution: 'Reihenfolge tauschen: 25 · 4 · 17 = 100 · 17 = 1 700.' },
          { example: 'Berechnen Sie 8 · 105 mit dem Distributivgesetz.', solution: '8 · (100 + 5) = 800 + 40 = 840.' },
        ],
        commonMistakes: [
          { mistake: 'Das Kommutativgesetz bei der Subtraktion anwenden: 10 − 4 = 4 − 10.', fix: 'Vertauschen ist nur bei Addition und Multiplikation erlaubt.' },
          { mistake: 'Bei einem Rest nur den Quotienten angeben, ohne die Frage zu lesen (5 Busse für 310 Schüler).', fix: 'Überlegen Sie, was mit dem Rest passiert: 50 Schüler brauchen noch einen Bus.' },
        ],
        practice: [
          { problem: 'Rechnen Sie im Kopf: 352 + 199.', solution: '551', steps: ['199 = 200 − 1.', '352 + 200 = 552; 552 − 1 = 551.'] },
          { problem: 'Berechnen Sie 47 · 99.', solution: '4 653', steps: ['99 = 100 − 1.', '47 · 100 − 47 = 4 700 − 47 = 4 653.'] },
          { problem: 'Ein Bus hat 52 Sitzplätze. Wie viele Busse braucht man für 310 Schüler?', solution: '6 Busse', steps: ['310 : 52 = 5 Rest 50.', '50 Schüler haben keinen Platz, also braucht man noch einen Bus: 5 + 1 = 6.'] },
          { problem: 'Berechnen Sie 1 000 : 8.', solution: '125', steps: ['1 000 : 2 = 500, 500 : 2 = 250, 250 : 2 = 125.', 'Probe: 8 · 125 = 1 000.'] },
        ],
      },
    },

    // ───────────────────────── 6. Order of operations
    {
      slug: 'g6-natural-numbers-order-of-operations',
      noVisual: 'The order of operations is shown step by step in the worked examples.',
      answers: {
        examples: [[['36 - 4 * (5 + 2) + 18 / 3', 14]], [['100 - (45 - 15) / 6 * 2', 90]]],
        practice: [[['48 / (12 - 4) + 3 * 7', 27]], [['(15 + 9) / 4 - 2 * 3', 0]], [['7 + 3 * (20 - 4 * 3)', 31]]],
      },
      al: {
        title: 'Radha e veprimeve',
        objectives: ['Të njehsoni shprehje me disa veprime në radhën e duhur.', 'Të përdorni kllapat për të ndryshuar radhën.'],
        theory: 'Kur një shprehje ka disa veprime, të gjithë duhet të marrim të njëjtin rezultat. Prandaj ndjekim një radhë të caktuar.\n\n1) Së pari llogarisim brenda kllapave. 2) Pastaj shumëzimet dhe pjesëtimet, nga e majta në të djathtë. 3) Në fund mbledhjet dhe zbritjet, nga e majta në të djathtë.\n\nShumëzimi dhe pjesëtimi kanë të njëjtën përparësi: bëhet ai që vjen i pari nga e majta. E njëjta vlen për mbledhjen dhe zbritjen. Shkruajeni çdo hap në një rresht të ri, që të mos humbisni asnjë veprim.',
        keyPoints: ['1. Kllapat', '2. Shumëzimi dhe pjesëtimi (nga e majta)', '3. Mbledhja dhe zbritja (nga e majta)'],
        examples: [
          { example: 'Llogaritni: 36 − 4 · (5 + 2) + 18 : 3.', solution: 'Kllapat: 5 + 2 = 7. Shumëzimi dhe pjesëtimi: 4 · 7 = 28, 18 : 3 = 6. Pastaj: 36 − 28 + 6 = 8 + 6 = 14.' },
          { example: 'Llogaritni: 100 − (45 − 15) : 6 · 2.', solution: 'Kllapat: 30. Nga e majta: 30 : 6 = 5, 5 · 2 = 10. Pastaj: 100 − 10 = 90.' },
        ],
        commonMistakes: [
          { mistake: 'Llogaritet nga e majta pa radhë: 36 − 4 = 32, 32 · 7 = 224 …', fix: 'Shumëzimi dhe pjesëtimi bëhen para mbledhjes dhe zbritjes.' },
          { mistake: 'Te 30 : 6 · 2 bëhet shumëzimi i pari (30 : 12).', fix: 'Shumëzimi dhe pjesëtimi bëhen me radhë nga e majta: 30 : 6 = 5, pastaj 5 · 2 = 10.' },
        ],
        practice: [
          { problem: 'Llogaritni: 48 : (12 − 4) + 3 · 7.', solution: '27', steps: ['Kllapat: 12 − 4 = 8.', '48 : 8 = 6 dhe 3 · 7 = 21.', '6 + 21 = 27.'] },
          { problem: 'Llogaritni: (15 + 9) : 4 − 2 · 3.', solution: '0', steps: ['Kllapat: 24.', '24 : 4 = 6 dhe 2 · 3 = 6.', '6 − 6 = 0.'] },
          { problem: 'Llogaritni: 7 + 3 · (20 − 4 · 3).', solution: '31', steps: ['Brenda kllapave fillimisht shumëzimi: 4 · 3 = 12, pastaj 20 − 12 = 8.', '3 · 8 = 24.', '7 + 24 = 31.'] },
        ],
      },
      en: {
        title: 'Order of operations',
        objectives: ['Evaluate expressions with several operations in the correct order.', 'Use brackets to change the order.'],
        theory: 'When an expression has several operations, everyone must get the same result. That is why we follow a fixed order.\n\n1) First work out what is inside brackets. 2) Then multiplication and division, from left to right. 3) Finally addition and subtraction, from left to right.\n\nMultiplication and division have the same priority: do whichever comes first from the left. The same is true for addition and subtraction. Write each step on a new line so that you do not miss an operation.',
        keyPoints: ['1. Brackets', '2. Multiplication and division (left to right)', '3. Addition and subtraction (left to right)'],
        examples: [
          { example: 'Work out: 36 − 4 · (5 + 2) + 18 ÷ 3.', solution: 'Brackets: 5 + 2 = 7. Multiplication and division: 4 · 7 = 28, 18 ÷ 3 = 6. Then: 36 − 28 + 6 = 8 + 6 = 14.' },
          { example: 'Work out: 100 − (45 − 15) ÷ 6 · 2.', solution: 'Brackets: 30. From the left: 30 ÷ 6 = 5, 5 · 2 = 10. Then: 100 − 10 = 90.' },
        ],
        commonMistakes: [
          { mistake: 'Working strictly left to right: 36 − 4 = 32, 32 · 7 = 224 …', fix: 'Multiplication and division come before addition and subtraction.' },
          { mistake: 'In 30 ÷ 6 · 2, multiplying first (30 ÷ 12).', fix: 'Multiplication and division go in order from the left: 30 ÷ 6 = 5, then 5 · 2 = 10.' },
        ],
        practice: [
          { problem: 'Work out: 48 ÷ (12 − 4) + 3 · 7.', solution: '27', steps: ['Brackets: 12 − 4 = 8.', '48 ÷ 8 = 6 and 3 · 7 = 21.', '6 + 21 = 27.'] },
          { problem: 'Work out: (15 + 9) ÷ 4 − 2 · 3.', solution: '0', steps: ['Brackets: 24.', '24 ÷ 4 = 6 and 2 · 3 = 6.', '6 − 6 = 0.'] },
          { problem: 'Work out: 7 + 3 · (20 − 4 · 3).', solution: '31', steps: ['Inside the brackets multiply first: 4 · 3 = 12, then 20 − 12 = 8.', '3 · 8 = 24.', '7 + 24 = 31.'] },
        ],
      },
      de: {
        title: 'Rechenreihenfolge',
        objectives: ['Terme mit mehreren Rechenarten in der richtigen Reihenfolge berechnen.', 'Mit Klammern die Reihenfolge ändern.'],
        theory: 'Wenn ein Term mehrere Rechenarten enthält, müssen alle dasselbe Ergebnis erhalten. Deshalb gibt es eine feste Reihenfolge.\n\n1) Zuerst wird in den Klammern gerechnet. 2) Dann Punktrechnung (Multiplikation und Division) von links nach rechts. 3) Zum Schluss Strichrechnung (Addition und Subtraktion) von links nach rechts.\n\nMultiplikation und Division sind gleichrangig: Was links zuerst kommt, wird zuerst gerechnet. Dasselbe gilt für Addition und Subtraktion. Schreiben Sie jeden Schritt in eine neue Zeile, damit keine Rechnung verloren geht.',
        keyPoints: ['1. Klammern', '2. Punkt vor Strich: Multiplikation und Division (von links)', '3. Addition und Subtraktion (von links)'],
        examples: [
          { example: 'Berechnen Sie: 36 − 4 · (5 + 2) + 18 : 3.', solution: 'Klammer: 5 + 2 = 7. Punktrechnung: 4 · 7 = 28, 18 : 3 = 6. Dann: 36 − 28 + 6 = 8 + 6 = 14.' },
          { example: 'Berechnen Sie: 100 − (45 − 15) : 6 · 2.', solution: 'Klammer: 30. Von links: 30 : 6 = 5, 5 · 2 = 10. Dann: 100 − 10 = 90.' },
        ],
        commonMistakes: [
          { mistake: 'Einfach von links nach rechts rechnen: 36 − 4 = 32, 32 · 7 = 224 …', fix: 'Punktrechnung geht vor Strichrechnung.' },
          { mistake: 'Bei 30 : 6 · 2 zuerst multiplizieren (30 : 12).', fix: 'Multiplikation und Division der Reihe nach von links: 30 : 6 = 5, dann 5 · 2 = 10.' },
        ],
        practice: [
          { problem: 'Berechnen Sie: 48 : (12 − 4) + 3 · 7.', solution: '27', steps: ['Klammer: 12 − 4 = 8.', '48 : 8 = 6 und 3 · 7 = 21.', '6 + 21 = 27.'] },
          { problem: 'Berechnen Sie: (15 + 9) : 4 − 2 · 3.', solution: '0', steps: ['Klammer: 24.', '24 : 4 = 6 und 2 · 3 = 6.', '6 − 6 = 0.'] },
          { problem: 'Berechnen Sie: 7 + 3 · (20 − 4 · 3).', solution: '31', steps: ['In der Klammer zuerst multiplizieren: 4 · 3 = 12, dann 20 − 12 = 8.', '3 · 8 = 24.', '7 + 24 = 31.'] },
        ],
      },
    },

    // ───────────────────────── 7. Multiples and factors
    {
      slug: 'g6-natural-numbers-multiples-factors',
      visuals: [{
        type: 'vennDiagram',
        a: { label: alt('Faktorët e 24', 'Factors of 24', 'Teiler von 24'), only: '8, 24' },
        b: { label: alt('Faktorët e 36', 'Factors of 36', 'Teiler von 36'), only: '9, 18, 36' },
        both: '1, 2, 3, 4, 6, 12',
        caption: alt('Faktorët e përbashkët janë në mes; më i madhi është 12.', 'The common factors are in the middle; the greatest is 12.', 'Die gemeinsamen Teiler stehen in der Mitte; der größte ist 12.'),
        alt: alt('Diagram Veni: vetëm te 24: 8 dhe 24; vetëm te 36: 9, 18, 36; te të dyja: 1, 2, 3, 4, 6, 12.', 'Venn diagram: only 24: 8 and 24; only 36: 9, 18, 36; both: 1, 2, 3, 4, 6, 12.', 'Venn-Diagramm: nur 24: 8 und 24; nur 36: 9, 18, 36; beide: 1, 2, 3, 4, 6, 12.'),
      }],
      answers: {
        examples: [[['gcd(24, 36)', 12]], [['lcm(6, 8)', 24]]],
        practice: [[['mod(1236, 3) == 0', true]], 'text', [['gcd(18, 30)', 6]], [['lcm(12, 18)', 36]]],
      },
      al: {
        title: 'Shumëfishat dhe faktorët',
        objectives: ['Të gjeni faktorët dhe shumëfishat e një numri.', 'Të gjeni PMP dhe SHVP e dy numrave dhe t\'i përdorni në problema.'],
        theory: 'Nëse 4 · 6 = 24, themi se 4 dhe 6 janë faktorë (pjesëtues) të 24, ndërsa 24 është shumëfish i 4 dhe i 6. Faktorët e 24 janë 1, 2, 3, 4, 6, 8, 12, 24. Shumëfishat e 6 janë 6, 12, 18, 24, …\n\nRregulla të shpejta të pjesëtueshmërisë: me 2 nëse shifra e fundit është çift; me 5 nëse mbaron me 0 ose 5; me 10 nëse mbaron me 0; me 3 (ose 9) nëse shuma e shifrave pjesëtohet me 3 (ose 9). Numri që ka vetëm dy faktorë, 1 dhe vetveten, quhet numër i thjeshtë: 2, 3, 5, 7, 11, 13, …\n\nPjesëtuesi më i madh i përbashkët (PMP) i dy numrave është faktori më i madh që kanë të përbashkët. Shumëfishi më i vogël i përbashkët (SHVP) është numri më i vogël që është shumëfish i të dyve.',
        keyPoints: ['Pjesëtueshmëria me 3: shuma e shifrave pjesëtohet me 3.', 'PMP = faktori më i madh i përbashkët.', 'SHVP = shumëfishi më i vogël i përbashkët.', 'Numri i thjeshtë ka saktësisht dy faktorë.'],
        examples: [
          { example: 'Gjeni faktorët e përbashkët të 24 dhe 36 dhe PMP e tyre.', solution: 'Faktorët e 24: 1, 2, 3, 4, 6, 8, 12, 24. Faktorët e 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Të përbashkët: 1, 2, 3, 4, 6, 12. PMP = 12.' },
          { example: 'Gjeni SHVP të 6 dhe 8.', solution: 'Shumëfishat e 8: 8, 16, 24, … Cili pjesëtohet me 6? 8 jo, 16 jo, 24 po. SHVP = 24.' },
        ],
        commonMistakes: [
          { mistake: 'Harrohen faktorët 1 dhe vetë numri.', fix: 'Shkruani faktorët në çifte: 1 · 24, 2 · 12, 3 · 8, 4 · 6.' },
          { mistake: 'Ngatërrohen PMP dhe SHVP.', fix: 'PMP nuk është më i madh se numri më i vogël; SHVP nuk është më i vogël se numri më i madh.' },
        ],
        practice: [
          { problem: 'A pjesëtohet 1 236 me 3?', solution: 'Po', steps: ['Shuma e shifrave: 1 + 2 + 3 + 6 = 12.', '12 pjesëtohet me 3, pra edhe 1 236 pjesëtohet me 3.'] },
          { problem: 'Shkruani pesë shumëfishat e parë të 7.', solution: '7, 14, 21, 28, 35', steps: ['Shumëzojmë 7 me 1, 2, 3, 4, 5.'] },
          { problem: 'Gjeni PMP(18; 30).', solution: '6', steps: ['Faktorët e 18: 1, 2, 3, 6, 9, 18.', 'Faktorët e 30: 1, 2, 3, 5, 6, 10, 15, 30.', 'Më i madhi i përbashkët: 6.'] },
          { problem: 'Dy autobusë nisen në 8:00. Njëri kthehet çdo 12 minuta, tjetri çdo 18 minuta. Pas sa minutash nisen sërish bashkë?', solution: 'Pas 36 minutash (në 8:36).', steps: ['Kërkojmë SHVP(12; 18).', 'Shumëfishat e 18: 18, 36 … 36 pjesëtohet me 12.', 'SHVP = 36 minuta.'] },
        ],
      },
      en: {
        title: 'Multiples and factors',
        objectives: ['Find the factors and multiples of a number.', 'Find the GCD and LCM of two numbers and use them in problems.'],
        theory: 'If 4 · 6 = 24, we say 4 and 6 are factors (divisors) of 24, and 24 is a multiple of 4 and of 6. The factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. The multiples of 6 are 6, 12, 18, 24, …\n\nQuick divisibility rules: by 2 if the last digit is even; by 5 if it ends in 0 or 5; by 10 if it ends in 0; by 3 (or 9) if the sum of its digits is divisible by 3 (or 9). A number with exactly two factors, 1 and itself, is a prime number: 2, 3, 5, 7, 11, 13, …\n\nThe greatest common divisor (GCD) of two numbers is the largest factor they share. The least common multiple (LCM) is the smallest number that is a multiple of both.',
        keyPoints: ['Divisible by 3: the digit sum is divisible by 3.', 'GCD = greatest common factor.', 'LCM = least common multiple.', 'A prime number has exactly two factors.'],
        examples: [
          { example: 'Find the common factors of 24 and 36 and their GCD.', solution: 'Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Common: 1, 2, 3, 4, 6, 12. GCD = 12.' },
          { example: 'Find the LCM of 6 and 8.', solution: 'Multiples of 8: 8, 16, 24, … Which is divisible by 6? 8 no, 16 no, 24 yes. LCM = 24.' },
        ],
        commonMistakes: [
          { mistake: 'Forgetting the factors 1 and the number itself.', fix: 'Write factors in pairs: 1 · 24, 2 · 12, 3 · 8, 4 · 6.' },
          { mistake: 'Mixing up GCD and LCM.', fix: 'The GCD is never larger than the smaller number; the LCM is never smaller than the larger number.' },
        ],
        practice: [
          { problem: 'Is 1 236 divisible by 3?', solution: 'Yes', steps: ['Digit sum: 1 + 2 + 3 + 6 = 12.', '12 is divisible by 3, so 1 236 is too.'] },
          { problem: 'Write the first five multiples of 7.', solution: '7, 14, 21, 28, 35', steps: ['Multiply 7 by 1, 2, 3, 4, 5.'] },
          { problem: 'Find GCD(18, 30).', solution: '6', steps: ['Factors of 18: 1, 2, 3, 6, 9, 18.', 'Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30.', 'Greatest common one: 6.'] },
          { problem: 'Two buses leave at 8:00. One returns every 12 minutes, the other every 18 minutes. After how many minutes do they leave together again?', solution: 'After 36 minutes (at 8:36).', steps: ['We need LCM(12, 18).', 'Multiples of 18: 18, 36 … 36 is divisible by 12.', 'LCM = 36 minutes.'] },
        ],
      },
      de: {
        title: 'Vielfache und Teiler',
        objectives: ['Teiler und Vielfache einer Zahl bestimmen.', 'ggT und kgV zweier Zahlen bestimmen und in Aufgaben nutzen.'],
        theory: 'Wenn 4 · 6 = 24 ist, sagen wir: 4 und 6 sind Teiler von 24, und 24 ist ein Vielfaches von 4 und von 6. Die Teiler von 24 sind 1, 2, 3, 4, 6, 8, 12, 24. Die Vielfachen von 6 sind 6, 12, 18, 24, …\n\nSchnelle Teilbarkeitsregeln: durch 2, wenn die letzte Ziffer gerade ist; durch 5, wenn sie auf 0 oder 5 endet; durch 10, wenn sie auf 0 endet; durch 3 (oder 9), wenn die Quersumme durch 3 (oder 9) teilbar ist. Eine Zahl mit genau zwei Teilern, 1 und sich selbst, heißt Primzahl: 2, 3, 5, 7, 11, 13, …\n\nDer größte gemeinsame Teiler (ggT) zweier Zahlen ist der größte Teiler, den beide haben. Das kleinste gemeinsame Vielfache (kgV) ist die kleinste Zahl, die Vielfaches von beiden ist.',
        keyPoints: ['Teilbar durch 3: Die Quersumme ist durch 3 teilbar.', 'ggT = größter gemeinsamer Teiler.', 'kgV = kleinstes gemeinsames Vielfaches.', 'Eine Primzahl hat genau zwei Teiler.'],
        examples: [
          { example: 'Bestimmen Sie die gemeinsamen Teiler von 24 und 36 und ihren ggT.', solution: 'Teiler von 24: 1, 2, 3, 4, 6, 8, 12, 24. Teiler von 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Gemeinsam: 1, 2, 3, 4, 6, 12. ggT = 12.' },
          { example: 'Bestimmen Sie das kgV von 6 und 8.', solution: 'Vielfache von 8: 8, 16, 24, … Welches ist durch 6 teilbar? 8 nein, 16 nein, 24 ja. kgV = 24.' },
        ],
        commonMistakes: [
          { mistake: 'Die Teiler 1 und die Zahl selbst vergessen.', fix: 'Teiler paarweise notieren: 1 · 24, 2 · 12, 3 · 8, 4 · 6.' },
          { mistake: 'ggT und kgV verwechseln.', fix: 'Der ggT ist nie größer als die kleinere Zahl; das kgV ist nie kleiner als die größere Zahl.' },
        ],
        practice: [
          { problem: 'Ist 1 236 durch 3 teilbar?', solution: 'Ja', steps: ['Quersumme: 1 + 2 + 3 + 6 = 12.', '12 ist durch 3 teilbar, also auch 1 236.'] },
          { problem: 'Schreiben Sie die ersten fünf Vielfachen von 7 auf.', solution: '7, 14, 21, 28, 35', steps: ['7 mit 1, 2, 3, 4, 5 multiplizieren.'] },
          { problem: 'Bestimmen Sie ggT(18; 30).', solution: '6', steps: ['Teiler von 18: 1, 2, 3, 6, 9, 18.', 'Teiler von 30: 1, 2, 3, 5, 6, 10, 15, 30.', 'Größter gemeinsamer: 6.'] },
          { problem: 'Zwei Busse fahren um 8:00 ab. Einer kommt alle 12 Minuten zurück, der andere alle 18 Minuten. Nach wie vielen Minuten fahren sie wieder gleichzeitig ab?', solution: 'Nach 36 Minuten (um 8:36).', steps: ['Gesucht ist kgV(12; 18).', 'Vielfache von 18: 18, 36 … 36 ist durch 12 teilbar.', 'kgV = 36 Minuten.'] },
        ],
      },
    },
  ],
};
