// Grade 6 · Theme 5: Decimal numbers (January–February)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g6-decimals',
  i18n: {
    al: { title: 'Numrat dhjetorë', description: 'Të dhjetat, të qindtat dhe të mijtat: krahasimi, veprimet dhe shndërrimi në thyesa.' },
    en: { title: 'Decimal numbers', description: 'Tenths, hundredths and thousandths: comparing, calculating and converting to fractions.' },
    de: { title: 'Dezimalzahlen', description: 'Zehntel, Hundertstel und Tausendstel: vergleichen, rechnen und in Brüche umwandeln.' },
  },
  lessons: [
    // ───────── 1. Meaning of a decimal number
    {
      slug: 'g6-decimals-decimal-meaning',
      visuals: [{
        type: 'numberLine', min: 0, max: 1, step: 0.1,
        points: [{ x: 0.35, label: 0.35, color: 'secondary' }, { x: 0.5, label: 0.5, color: 'primary' }],
        caption: alt('Ndërmjet 0 dhe 1 ka dhjetë të dhjeta; 0,35 është në mes të 0,3 dhe 0,4.', 'Between 0 and 1 there are ten tenths; 0.35 is halfway between 0.3 and 0.4.', 'Zwischen 0 und 1 liegen zehn Zehntel; 0,35 liegt in der Mitte zwischen 0,3 und 0,4.'),
        alt: alt('Bosht numerik nga 0 deri 1 me hap 0,1; të shënuara 0,35 dhe 0,5.', 'Number line from 0 to 1 in steps of 0.1 with 0.35 and 0.5 marked.', 'Zahlenstrahl von 0 bis 1 in Schritten von 0,1 mit 0,35 und 0,5 markiert.'),
      }],
      answers: {
        examples: ['text', [['0.5 > 0.45', true]]],
        practice: [[['7 / 100', 0.07]], [['round(3.476, 2)', 3.48]], [['0.25 < 0.3 and 0.3 < 0.305', true]]],
      },
      al: {
        title: 'Kuptimi i numrit dhjetor',
        objectives: ['Të lexoni të dhjetat, të qindtat dhe të mijtat në një numër dhjetor.', 'Të krahasoni dhe të rrumbullakoni numra dhjetorë.'],
        theory: 'Numri dhjetor ka një pjesë të plotë dhe një pjesë dhjetore, të ndara me presje: 3,47. Shifra e parë pas presjes tregon të dhjetat (1/10), e dyta të qindtat (1/100), e treta të mijtat (1/1000). Pra 3,47 = 3 + 4/10 + 7/100.\n\nZerot në fund të pjesës dhjetore nuk e ndryshojnë numrin: 0,5 = 0,50 = 0,500. Kjo ndihmon në krahasim: 0,5 dhe 0,45 → 0,50 > 0,45.\n\nPër krahasim, krahasoni së pari pjesën e plotë, pastaj të dhjetat, të qindtat e kështu me radhë. Rrumbullakimi bëhet si te numrat natyrorë: shikoni shifrën në të djathtë të vendit.',
        keyPoints: ['Pas presjes: të dhjeta, të qindta, të mijta.', '0,5 = 0,50 (zerot në fund nuk ndryshojnë vlerën).', 'Krahasimi: pjesa e plotë, pastaj shifër pas shifre pas presjes.'],
        examples: [
          { example: 'Çfarë tregon secila shifër te 3,47?', solution: '3 njëshe, 4 të dhjeta dhe 7 të qindta: 3 + 4/10 + 7/100.' },
          { example: 'Krahasoni 0,5 dhe 0,45.', solution: 'Shkruajmë 0,5 = 0,50. Krahasojmë 50 të qindta me 45 të qindta: 0,5 > 0,45.' },
        ],
        commonMistakes: [
          { mistake: 'Mendohet se 0,45 > 0,5 sepse 45 > 5.', fix: 'Barazoni numrin e shifrave pas presjes: 0,50 dhe 0,45.' },
        ],
        practice: [
          { problem: 'Shkruani si numër dhjetor: 7/100.', solution: '0,07', steps: ['Të qindtat janë shifra e dytë pas presjes.', '7/100 = 0,07.'] },
          { problem: 'Rrumbullakoni 3,476 në të qindtat.', solution: '3,48', steps: ['Të qindtat: 7; shifra djathtas: 6 (≥ 5).', '7 bëhet 8: 3,48.'] },
          { problem: 'Renditni nga më i vogli: 0,3; 0,25; 0,305.', solution: '0,25 < 0,3 < 0,305', steps: ['Me tri shifra pas presjes: 0,300; 0,250; 0,305.', '250 < 300 < 305.'] },
        ],
      },
      en: {
        title: 'What a decimal number means',
        objectives: ['Read tenths, hundredths and thousandths in a decimal number.', 'Compare and round decimal numbers.'],
        theory: 'A decimal number has a whole part and a decimal part, separated by a decimal point: 3.47. The first digit after the point shows tenths (1/10), the second hundredths (1/100), the third thousandths (1/1000). So 3.47 = 3 + 4/10 + 7/100.\n\nZeros at the end of the decimal part do not change the number: 0.5 = 0.50 = 0.500. This helps when comparing: 0.5 and 0.45 → 0.50 > 0.45.\n\nTo compare, look at the whole part first, then the tenths, the hundredths and so on. Rounding works as with whole numbers: look at the digit to the right of the place.',
        keyPoints: ['After the point: tenths, hundredths, thousandths.', '0.5 = 0.50 (zeros at the end do not change the value).', 'Comparing: whole part first, then digit by digit after the point.'],
        examples: [
          { example: 'What does each digit in 3.47 show?', solution: '3 ones, 4 tenths and 7 hundredths: 3 + 4/10 + 7/100.' },
          { example: 'Compare 0.5 and 0.45.', solution: 'Write 0.5 = 0.50. Compare 50 hundredths with 45 hundredths: 0.5 > 0.45.' },
        ],
        commonMistakes: [
          { mistake: 'Thinking 0.45 > 0.5 because 45 > 5.', fix: 'Give both the same number of decimal places: 0.50 and 0.45.' },
        ],
        practice: [
          { problem: 'Write 7/100 as a decimal.', solution: '0.07', steps: ['Hundredths are the second digit after the point.', '7/100 = 0.07.'] },
          { problem: 'Round 3.476 to the nearest hundredth.', solution: '3.48', steps: ['Hundredths digit: 7; digit to the right: 6 (≥ 5).', '7 becomes 8: 3.48.'] },
          { problem: 'Order from smallest: 0.3; 0.25; 0.305.', solution: '0.25 < 0.3 < 0.305', steps: ['With three decimal places: 0.300; 0.250; 0.305.', '250 < 300 < 305.'] },
        ],
      },
      de: {
        title: 'Was eine Dezimalzahl bedeutet',
        objectives: ['Zehntel, Hundertstel und Tausendstel in einer Dezimalzahl ablesen.', 'Dezimalzahlen vergleichen und runden.'],
        theory: 'Eine Dezimalzahl hat einen ganzen Teil und Nachkommastellen, getrennt durch ein Komma: 3,47. Die erste Ziffer nach dem Komma gibt die Zehntel (1/10) an, die zweite die Hundertstel (1/100), die dritte die Tausendstel (1/1000). Also 3,47 = 3 + 4/10 + 7/100.\n\nNullen am Ende der Nachkommastellen ändern die Zahl nicht: 0,5 = 0,50 = 0,500. Das hilft beim Vergleichen: 0,5 und 0,45 → 0,50 > 0,45.\n\nZum Vergleichen schaut man zuerst auf den ganzen Teil, dann auf Zehntel, Hundertstel und so weiter. Gerundet wird wie bei natürlichen Zahlen: auf die Ziffer rechts der Rundungsstelle achten.',
        keyPoints: ['Nach dem Komma: Zehntel, Hundertstel, Tausendstel.', '0,5 = 0,50 (Endnullen ändern den Wert nicht).', 'Vergleichen: zuerst der ganze Teil, dann Stelle für Stelle nach dem Komma.'],
        examples: [
          { example: 'Was gibt jede Ziffer in 3,47 an?', solution: '3 Einer, 4 Zehntel und 7 Hundertstel: 3 + 4/10 + 7/100.' },
          { example: 'Vergleichen Sie 0,5 und 0,45.', solution: '0,5 = 0,50 schreiben. 50 Hundertstel mit 45 Hundertsteln vergleichen: 0,5 > 0,45.' },
        ],
        commonMistakes: [
          { mistake: 'Glauben, 0,45 > 0,5, weil 45 > 5.', fix: 'Gleich viele Nachkommastellen herstellen: 0,50 und 0,45.' },
        ],
        practice: [
          { problem: 'Schreiben Sie 7/100 als Dezimalzahl.', solution: '0,07', steps: ['Hundertstel stehen an der zweiten Stelle nach dem Komma.', '7/100 = 0,07.'] },
          { problem: 'Runden Sie 3,476 auf Hundertstel.', solution: '3,48', steps: ['Hundertstelziffer: 7; Ziffer rechts: 6 (≥ 5).', '7 wird zu 8: 3,48.'] },
          { problem: 'Ordnen Sie aufsteigend: 0,3; 0,25; 0,305.', solution: '0,25 < 0,3 < 0,305', steps: ['Mit drei Nachkommastellen: 0,300; 0,250; 0,305.', '250 < 300 < 305.'] },
        ],
      },
    },

    // ───────── 2. Operations with decimals
    {
      slug: 'g6-decimals-decimal-operations',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '', cells: [alt('Nj', 'O', 'E'), ',', alt('1/10', '1/10', '1/10'), alt('1/100', '1/100', '1/100')] },
          { head: '', cells: ['4', ',', '2', '5'] },
          { head: '+', cells: ['0', ',', '8', '0'] },
          { head: '−', cells: ['1', ',', '0', '7'] },
          { head: '=', cells: ['3', ',', '9', '8'] },
        ],
        highlight: [[4, 0], [4, 2], [4, 3]],
        caption: alt('Presjet vendosen njëra nën tjetrën; 0,8 shkruhet 0,80.', 'Decimal points go under each other; 0.8 is written 0.80.', 'Kommas stehen untereinander; 0,8 wird als 0,80 geschrieben.'),
        alt: alt('Llogaritja me shtylla: 4,25 + 0,80 − 1,07 = 3,98.', 'Column calculation: 4.25 + 0.80 − 1.07 = 3.98.', 'Schriftliche Rechnung: 4,25 + 0,80 − 1,07 = 3,98.'),
      }],
      answers: {
        examples: [[['4.25 + 0.8 - 1.07', 3.98]], [['1.45 * 6', 8.7]]],
        practice: [[['12.5 - 3.75', 8.75]], [['0.4 * 0.3', 0.12]], [['7.2 / 4', 1.8]], [['3.6 * 100', 360]]],
      },
      al: {
        title: 'Veprimet me numra dhjetorë',
        objectives: ['Të mblidhni dhe të zbritni numra dhjetorë me presjet njëra nën tjetrën.', 'Të shumëzoni dhe të pjesëtoni numra dhjetorë.'],
        theory: 'Mbledhja dhe zbritja: shkruajmë numrat në shtylla me presjet njëra nën tjetrën, plotësojmë me zero që të kenë të njëjtin numër shifrash pas presjes dhe llogarisim si me numra natyrorë. Presja në rezultat zbret drejt poshtë.\n\nShumëzimi: shumëzojmë si me numra natyrorë dhe në fund vendosim presjen; rezultati ka aq shifra pas presjes sa kanë të dy faktorët së bashku: 0,4 · 0,3 = 0,12 (1 + 1 = 2 shifra). Me 10, 100, 1 000 presja lëviz 1, 2, 3 vende djathtas.\n\nPjesëtimi me numër natyror: pjesëtojmë si zakonisht dhe vendosim presjen në herës kur e kalojmë presjen te i pjesëtueshmi: 7,2 : 4 = 1,8. Me 10, 100, 1 000 presja lëviz majtas.',
        keyPoints: ['+ dhe −: presjet njëra nën tjetrën.', '×: shifrat pas presjes në rezultat = shuma e shifrave pas presjes së faktorëve.', '× 10, 100: presja djathtas; : 10, 100: presja majtas.'],
        examples: [
          { example: 'Llogaritni 4,25 + 0,8 − 1,07.', solution: '4,25 + 0,80 = 5,05; 5,05 − 1,07 = 3,98.' },
          { example: 'Një litër lëng kushton 1,45 €. Sa kushtojnë 6 litra?', solution: '1,45 · 6 = 8,70 €.' },
        ],
        commonMistakes: [
          { mistake: '0,4 · 0,3 = 1,2', fix: 'Të dy faktorët kanë nga një shifër pas presjes, pra rezultati ka dy: 0,12.' },
          { mistake: 'Shifrat rreshtohen nga e djathta pa i parë presjet (4,25 + 0,8 = 4,33).', fix: 'Rreshtoni presjet; shkruani 0,8 si 0,80.' },
        ],
        practice: [
          { problem: 'Llogaritni 12,5 − 3,75.', solution: '8,75', steps: ['12,50 − 3,75.', '= 8,75.'] },
          { problem: 'Llogaritni 0,4 · 0,3.', solution: '0,12', steps: ['4 · 3 = 12.', 'Dy shifra pas presjes: 0,12.'] },
          { problem: 'Llogaritni 7,2 : 4.', solution: '1,8', steps: ['7 : 4 = 1 me mbetje 3.', 'Kalojmë presjen: 32 : 4 = 8 → 1,8.'] },
          { problem: 'Llogaritni 3,6 · 100.', solution: '360', steps: ['Me 100 presja lëviz dy vende djathtas.', '3,6 → 360.'] },
        ],
      },
      en: {
        title: 'Calculating with decimals',
        objectives: ['Add and subtract decimals with the points lined up.', 'Multiply and divide decimals.'],
        theory: 'Adding and subtracting: write the numbers in columns with the decimal points under each other, fill with zeros so they have the same number of decimal places, and calculate as with whole numbers. The point in the answer goes straight down.\n\nMultiplying: multiply as with whole numbers and place the point at the end; the answer has as many decimal places as both factors together: 0.4 · 0.3 = 0.12 (1 + 1 = 2 places). Multiplying by 10, 100, 1 000 moves the point 1, 2, 3 places to the right.\n\nDividing by a whole number: divide as usual and put the point in the quotient when you pass the point in the dividend: 7.2 ÷ 4 = 1.8. Dividing by 10, 100, 1 000 moves the point to the left.',
        keyPoints: ['+ and −: line up the decimal points.', '×: decimal places in the answer = decimal places of the factors added.', '× 10, 100: point moves right; ÷ 10, 100: point moves left.'],
        examples: [
          { example: 'Work out 4.25 + 0.8 − 1.07.', solution: '4.25 + 0.80 = 5.05; 5.05 − 1.07 = 3.98.' },
          { example: 'One litre of juice costs €1.45. How much do 6 litres cost?', solution: '1.45 · 6 = €8.70.' },
        ],
        commonMistakes: [
          { mistake: '0.4 · 0.3 = 1.2', fix: 'Each factor has one decimal place, so the answer has two: 0.12.' },
          { mistake: 'Lining up digits from the right, ignoring the points (4.25 + 0.8 = 4.33).', fix: 'Line up the points; write 0.8 as 0.80.' },
        ],
        practice: [
          { problem: 'Work out 12.5 − 3.75.', solution: '8.75', steps: ['12.50 − 3.75.', '= 8.75.'] },
          { problem: 'Work out 0.4 · 0.3.', solution: '0.12', steps: ['4 · 3 = 12.', 'Two decimal places: 0.12.'] },
          { problem: 'Work out 7.2 ÷ 4.', solution: '1.8', steps: ['7 ÷ 4 = 1 remainder 3.', 'Pass the point: 32 ÷ 4 = 8 → 1.8.'] },
          { problem: 'Work out 3.6 · 100.', solution: '360', steps: ['× 100 moves the point two places to the right.', '3.6 → 360.'] },
        ],
      },
      de: {
        title: 'Rechnen mit Dezimalzahlen',
        objectives: ['Dezimalzahlen stellengerecht addieren und subtrahieren.', 'Dezimalzahlen multiplizieren und dividieren.'],
        theory: 'Addieren und Subtrahieren: Die Zahlen so untereinander schreiben, dass Komma unter Komma steht, mit Nullen auf gleich viele Nachkommastellen ergänzen und wie mit natürlichen Zahlen rechnen. Das Komma im Ergebnis steht direkt darunter.\n\nMultiplizieren: wie mit natürlichen Zahlen multiplizieren und zum Schluss das Komma setzen; das Ergebnis hat so viele Nachkommastellen wie beide Faktoren zusammen: 0,4 · 0,3 = 0,12 (1 + 1 = 2 Stellen). Bei · 10, 100, 1 000 rückt das Komma 1, 2, 3 Stellen nach rechts.\n\nDividieren durch eine natürliche Zahl: wie gewohnt dividieren und im Ergebnis das Komma setzen, sobald man im Dividenden das Komma überschreitet: 7,2 : 4 = 1,8. Bei : 10, 100, 1 000 rückt das Komma nach links.',
        keyPoints: ['+ und −: Komma unter Komma.', '·: Nachkommastellen im Ergebnis = Summe der Nachkommastellen der Faktoren.', '· 10, 100: Komma nach rechts; : 10, 100: Komma nach links.'],
        examples: [
          { example: 'Berechnen Sie 4,25 + 0,8 − 1,07.', solution: '4,25 + 0,80 = 5,05; 5,05 − 1,07 = 3,98.' },
          { example: 'Ein Liter Saft kostet 1,45 €. Wie viel kosten 6 Liter?', solution: '1,45 · 6 = 8,70 €.' },
        ],
        commonMistakes: [
          { mistake: '0,4 · 0,3 = 1,2', fix: 'Jeder Faktor hat eine Nachkommastelle, das Ergebnis also zwei: 0,12.' },
          { mistake: 'Ziffern von rechts untereinander schreiben, ohne auf das Komma zu achten (4,25 + 0,8 = 4,33).', fix: 'Komma unter Komma; 0,8 als 0,80 schreiben.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 12,5 − 3,75.', solution: '8,75', steps: ['12,50 − 3,75.', '= 8,75.'] },
          { problem: 'Berechnen Sie 0,4 · 0,3.', solution: '0,12', steps: ['4 · 3 = 12.', 'Zwei Nachkommastellen: 0,12.'] },
          { problem: 'Berechnen Sie 7,2 : 4.', solution: '1,8', steps: ['7 : 4 = 1 Rest 3.', 'Komma überschreiten: 32 : 4 = 8 → 1,8.'] },
          { problem: 'Berechnen Sie 3,6 · 100.', solution: '360', steps: ['Bei · 100 rückt das Komma zwei Stellen nach rechts.', '3,6 → 360.'] },
        ],
      },
    },

    // ───────── 3. Decimal ↔ fraction
    {
      slug: 'g6-decimals-decimal-to-fraction',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.2, xMax: 10.2, yMin: -0.2, yMax: 10.2 }, grid: true, height: 220,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [3, 0], [3, 10], [0, 10]], fill: true, color: 'secondary' },
          { kind: 'polygon', points: [[3, 5], [4, 5], [4, 10], [3, 10]], fill: true, color: 'secondary' },
          { kind: 'polygon', points: [[0, 0], [10, 0], [10, 10], [0, 10]], color: 'primary' },
        ],
        caption: alt('35 nga 100 katrorë: 0,35 = 35/100 = 7/20.', '35 of 100 squares: 0.35 = 35/100 = 7/20.', '35 von 100 Quadraten: 0,35 = 35/100 = 7/20.'),
        alt: alt('Katror me 100 katrorë të vegjël, 35 prej tyre të ngjyrosur.', 'A hundred square with 35 small squares shaded.', 'Ein Hunderterfeld mit 35 gefärbten Kästchen.'),
      }],
      answers: {
        examples: [[['0.35', '7/20']], [['3/4', 0.75]]],
        practice: [[['0.6', '3/5']], [['0.08', '2/25']], [['7/8', 0.875]]],
      },
      al: {
        title: 'Shndërrimi në thyesë të zakonshme',
        objectives: ['Të shndërroni një numër dhjetor në thyesë të thjeshtuar.', 'Të shndërroni një thyesë në numër dhjetor.'],
        theory: 'Numri dhjetor shkruhet si thyesë me emërues 10, 100, 1 000 … sipas numrit të shifrave pas presjes: 0,35 = 35/100 (dy shifra → 100). Pastaj thjeshtojmë: 35/100 = 7/20.\n\nNga thyesa në numër dhjetor: pjesëtojmë numëruesin me emëruesin: 3/4 = 3 : 4 = 0,75. Ndonjëherë është më e lehtë ta zgjerojmë thyesën në emërues 10, 100 ose 1 000: 2/5 = 4/10 = 0,4.\n\nDisa çifte të njohura: 1/2 = 0,5; 1/4 = 0,25; 3/4 = 0,75; 1/5 = 0,2; 1/8 = 0,125.',
        keyPoints: ['Dhjetor → thyesë: emëruesi 10, 100, 1 000 sipas shifrave pas presjes; thjeshtoni.', 'Thyesë → dhjetor: numëruesi : emëruesi.', '1/2 = 0,5; 1/4 = 0,25; 1/5 = 0,2; 1/8 = 0,125'],
        examples: [
          { example: 'Shndërroni 0,35 në thyesë të thjeshtuar.', solution: '0,35 = 35/100. PMP(35; 100) = 5, pra 35/100 = 7/20.' },
          { example: 'Shkruani 3/4 si numër dhjetor.', solution: '3 : 4 = 0,75 (ose 3/4 = 75/100 = 0,75).' },
        ],
        commonMistakes: [
          { mistake: '0,35 = 35/10', fix: 'Dy shifra pas presjes → emëruesi 100.' },
          { mistake: '1/4 = 0,4', fix: 'Pjesëtoni: 1 : 4 = 0,25; emëruesi nuk shkruhet pas presjes.' },
        ],
        practice: [
          { problem: 'Shndërroni 0,6 në thyesë të thjeshtuar.', solution: '3/5', steps: ['0,6 = 6/10.', 'Pjesëtojmë me 2: 3/5.'] },
          { problem: 'Shndërroni 0,08 në thyesë të thjeshtuar.', solution: '2/25', steps: ['0,08 = 8/100.', 'Pjesëtojmë me 4: 2/25.'] },
          { problem: 'Shkruani 7/8 si numër dhjetor.', solution: '0,875', steps: ['7 : 8.', '= 0,875.'] },
        ],
      },
      en: {
        title: 'Converting to ordinary fractions',
        objectives: ['Convert a decimal into a fraction in simplest form.', 'Convert a fraction into a decimal.'],
        theory: 'A decimal is written as a fraction with denominator 10, 100, 1 000 … depending on the number of decimal places: 0.35 = 35/100 (two places → 100). Then simplify: 35/100 = 7/20.\n\nFrom a fraction to a decimal: divide the numerator by the denominator: 3/4 = 3 ÷ 4 = 0.75. Sometimes it is easier to expand the fraction to a denominator of 10, 100 or 1 000: 2/5 = 4/10 = 0.4.\n\nSome pairs worth knowing: 1/2 = 0.5; 1/4 = 0.25; 3/4 = 0.75; 1/5 = 0.2; 1/8 = 0.125.',
        keyPoints: ['Decimal → fraction: denominator 10, 100, 1 000 by decimal places; simplify.', 'Fraction → decimal: numerator ÷ denominator.', '1/2 = 0.5; 1/4 = 0.25; 1/5 = 0.2; 1/8 = 0.125'],
        examples: [
          { example: 'Convert 0.35 to a fraction in simplest form.', solution: '0.35 = 35/100. GCD(35, 100) = 5, so 35/100 = 7/20.' },
          { example: 'Write 3/4 as a decimal.', solution: '3 ÷ 4 = 0.75 (or 3/4 = 75/100 = 0.75).' },
        ],
        commonMistakes: [
          { mistake: '0.35 = 35/10', fix: 'Two decimal places → denominator 100.' },
          { mistake: '1/4 = 0.4', fix: 'Divide: 1 ÷ 4 = 0.25; the denominator is not written after the point.' },
        ],
        practice: [
          { problem: 'Convert 0.6 to a fraction in simplest form.', solution: '3/5', steps: ['0.6 = 6/10.', 'Divide by 2: 3/5.'] },
          { problem: 'Convert 0.08 to a fraction in simplest form.', solution: '2/25', steps: ['0.08 = 8/100.', 'Divide by 4: 2/25.'] },
          { problem: 'Write 7/8 as a decimal.', solution: '0.875', steps: ['7 ÷ 8.', '= 0.875.'] },
        ],
      },
      de: {
        title: 'Umwandeln in gewöhnliche Brüche',
        objectives: ['Eine Dezimalzahl in einen vollständig gekürzten Bruch umwandeln.', 'Einen Bruch in eine Dezimalzahl umwandeln.'],
        theory: 'Eine Dezimalzahl schreibt man als Bruch mit dem Nenner 10, 100, 1 000 … je nach Anzahl der Nachkommastellen: 0,35 = 35/100 (zwei Stellen → 100). Dann kürzen: 35/100 = 7/20.\n\nVom Bruch zur Dezimalzahl: Zähler durch Nenner dividieren: 3/4 = 3 : 4 = 0,75. Manchmal ist es leichter, auf den Nenner 10, 100 oder 1 000 zu erweitern: 2/5 = 4/10 = 0,4.\n\nNützliche Paare: 1/2 = 0,5; 1/4 = 0,25; 3/4 = 0,75; 1/5 = 0,2; 1/8 = 0,125.',
        keyPoints: ['Dezimalzahl → Bruch: Nenner 10, 100, 1 000 je nach Nachkommastellen; kürzen.', 'Bruch → Dezimalzahl: Zähler : Nenner.', '1/2 = 0,5; 1/4 = 0,25; 1/5 = 0,2; 1/8 = 0,125'],
        examples: [
          { example: 'Wandeln Sie 0,35 in einen vollständig gekürzten Bruch um.', solution: '0,35 = 35/100. ggT(35; 100) = 5, also 35/100 = 7/20.' },
          { example: 'Schreiben Sie 3/4 als Dezimalzahl.', solution: '3 : 4 = 0,75 (oder 3/4 = 75/100 = 0,75).' },
        ],
        commonMistakes: [
          { mistake: '0,35 = 35/10', fix: 'Zwei Nachkommastellen → Nenner 100.' },
          { mistake: '1/4 = 0,4', fix: 'Dividieren: 1 : 4 = 0,25; der Nenner wird nicht hinter das Komma geschrieben.' },
        ],
        practice: [
          { problem: 'Wandeln Sie 0,6 in einen vollständig gekürzten Bruch um.', solution: '3/5', steps: ['0,6 = 6/10.', 'Durch 2 kürzen: 3/5.'] },
          { problem: 'Wandeln Sie 0,08 in einen vollständig gekürzten Bruch um.', solution: '2/25', steps: ['0,08 = 8/100.', 'Durch 4 kürzen: 2/25.'] },
          { problem: 'Schreiben Sie 7/8 als Dezimalzahl.', solution: '0,875', steps: ['7 : 8.', '= 0,875.'] },
        ],
      },
    },
  ],
};
