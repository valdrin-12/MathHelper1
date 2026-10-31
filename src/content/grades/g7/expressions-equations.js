// Grade 7 · Theme 9: Expressions with variables, equations, inequalities (March–April)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g7-expressions-equations',
  i18n: {
    al: { title: 'Shprehjet me ndryshore, ekuacionet, inekuacionet', description: 'Monomet dhe reduktimi, ekuacioni ax = b, problema me ekuacione dhe inekuacione të thjeshta.' },
    en: { title: 'Expressions, equations, inequalities', description: 'Monomials and collecting like terms, the equation ax = b, word problems and simple inequalities.' },
    de: { title: 'Terme, Gleichungen, Ungleichungen', description: 'Monome und Zusammenfassen, die Gleichung ax = b, Textaufgaben mit Gleichungen und einfache Ungleichungen.' },
  },
  lessons: [
    // ───────── 1. Monomials and collecting like terms
    {
      slug: 'g7-expressions-equations-monomials',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Kufizat me x', 'Terms in x', 'Glieder mit x'), cells: ['5x', '−2x', '= 3x'] },
          { head: alt('Kufizat me y', 'Terms in y', 'Glieder mit y'), cells: ['3y', '+y', '= 4y'] },
        ],
        highlight: [[0, 2], [1, 2]],
        caption: alt('5x + 3y − 2x + y: mblidhen vetëm kufizat e ngjashme → 3x + 4y.', '5x + 3y − 2x + y: only like terms are added → 3x + 4y.', '5x + 3y − 2x + y: Nur gleichartige Glieder werden zusammengefasst → 3x + 4y.'),
        alt: alt('Tabela: kufizat me x (5x, −2x) japin 3x; kufizat me y (3y, y) japin 4y.', 'Table: the x terms (5x, −2x) give 3x; the y terms (3y, y) give 4y.', 'Tabelle: Die x-Glieder (5x, −2x) ergeben 3x; die y-Glieder (3y, y) ergeben 4y.'),
      }],
      answers: {
        examples: ['text', [['2 * 3^2', 18]]],
        practice: ['text', 'text', [['4 * 5 - 3', 17]]],
      },
      al: {
        title: 'Monomet dhe reduktimi',
        objectives: ['Të dalloni monomet e ngjashme.', 'Të reduktoni shprehje dhe të njehsoni vlerën e tyre.'],
        theory: 'Shprehja me ndryshore përmban numra, shkronja (ndryshore) dhe veprime: 3x + 4y. Monomi është prodhim i një numri (koeficienti) me ndryshore: 5x, −2a², 7xy.\n\nMonomet e ngjashme kanë të njëjtat ndryshore me të njëjtat eksponentë: 5x dhe −2x janë të ngjashme, 3x dhe 3x² jo. Reduktimi do të thotë të mblidhen koeficientët e monomeve të ngjashme: 5x − 2x = 3x. Monomet jo të ngjashme mbeten të ndara.\n\nPër të gjetur vlerën e shprehjes, zëvendësojmë ndryshoret me numra: për a = 3, 2a² = 2 · 9 = 18.',
        keyPoints: ['Të ngjashme: e njëjta pjesë me shkronja (x me x, a² me a²).', 'Reduktimi: mblidhen koeficientët, pjesa me shkronja mbetet.', 'Vlera: zëvendësoni, pastaj ndiqni radhën e veprimeve.'],
        examples: [
          { example: 'Reduktoni 5x + 3y − 2x + y.', solution: '(5x − 2x) + (3y + y) = 3x + 4y.' },
          { example: 'Njehsoni 2a² për a = 3.', solution: '2 · 3² = 2 · 9 = 18.' },
        ],
        commonMistakes: [
          { mistake: '3x + 4y = 7xy', fix: 'x dhe y nuk janë të ngjashme; shprehja mbetet 3x + 4y.' },
          { mistake: '2a² për a = 3: (2 · 3)² = 36', fix: 'Fuqia vlen vetëm për a: 2 · 3² = 18.' },
        ],
        practice: [
          { problem: 'Reduktoni 7a − 3a + 2.', solution: '4a + 2', steps: ['7a − 3a = 4a.', '2 nuk ka monom të ngjashëm: 4a + 2.'] },
          { problem: 'Shumëzoni 3x · 4x.', solution: '12x²', steps: ['3 · 4 = 12.', 'x · x = x², pra 12x².'] },
          { problem: 'Njehsoni 4x − 3 për x = 5.', solution: '17', steps: ['4 · 5 = 20.', '20 − 3 = 17.'] },
        ],
      },
      en: {
        title: 'Monomials and like terms',
        objectives: ['Recognise like terms.', 'Simplify expressions and work out their value.'],
        theory: 'An algebraic expression contains numbers, letters (variables) and operations: 3x + 4y. A monomial is a product of a number (the coefficient) and variables: 5x, −2a², 7xy.\n\nLike terms have the same variables with the same exponents: 5x and −2x are like terms, 3x and 3x² are not. Collecting like terms means adding their coefficients: 5x − 2x = 3x. Unlike terms stay separate.\n\nTo find the value of an expression, substitute numbers for the variables: for a = 3, 2a² = 2 · 9 = 18.',
        keyPoints: ['Like terms: same letter part (x with x, a² with a²).', 'Collecting: add the coefficients, keep the letter part.', 'Value: substitute, then follow the order of operations.'],
        examples: [
          { example: 'Simplify 5x + 3y − 2x + y.', solution: '(5x − 2x) + (3y + y) = 3x + 4y.' },
          { example: 'Work out 2a² for a = 3.', solution: '2 · 3² = 2 · 9 = 18.' },
        ],
        commonMistakes: [
          { mistake: '3x + 4y = 7xy', fix: 'x and y are not like terms; the expression stays 3x + 4y.' },
          { mistake: '2a² for a = 3: (2 · 3)² = 36', fix: 'The power applies only to a: 2 · 3² = 18.' },
        ],
        practice: [
          { problem: 'Simplify 7a − 3a + 2.', solution: '4a + 2', steps: ['7a − 3a = 4a.', '2 has no like term: 4a + 2.'] },
          { problem: 'Multiply 3x · 4x.', solution: '12x²', steps: ['3 · 4 = 12.', 'x · x = x², so 12x².'] },
          { problem: 'Work out 4x − 3 for x = 5.', solution: '17', steps: ['4 · 5 = 20.', '20 − 3 = 17.'] },
        ],
      },
      de: {
        title: 'Monome und Zusammenfassen',
        objectives: ['Gleichartige Glieder erkennen.', 'Terme vereinfachen und ihren Wert berechnen.'],
        theory: 'Ein Term mit Variablen enthält Zahlen, Buchstaben (Variablen) und Rechenzeichen: 3x + 4y. Ein Monom ist ein Produkt aus einer Zahl (dem Koeffizienten) und Variablen: 5x, −2a², 7xy.\n\nGleichartige Glieder haben dieselben Variablen mit denselben Exponenten: 5x und −2x sind gleichartig, 3x und 3x² nicht. Zusammenfassen heißt, die Koeffizienten gleichartiger Glieder zu addieren: 5x − 2x = 3x. Ungleichartige Glieder bleiben getrennt.\n\nUm den Wert eines Terms zu berechnen, setzt man Zahlen für die Variablen ein: für a = 3 ist 2a² = 2 · 9 = 18.',
        keyPoints: ['Gleichartig: gleicher Buchstabenteil (x mit x, a² mit a²).', 'Zusammenfassen: Koeffizienten addieren, Buchstabenteil bleibt.', 'Wert: einsetzen, dann Rechenreihenfolge beachten.'],
        examples: [
          { example: 'Fassen Sie 5x + 3y − 2x + y zusammen.', solution: '(5x − 2x) + (3y + y) = 3x + 4y.' },
          { example: 'Berechnen Sie 2a² für a = 3.', solution: '2 · 3² = 2 · 9 = 18.' },
        ],
        commonMistakes: [
          { mistake: '3x + 4y = 7xy', fix: 'x und y sind nicht gleichartig; der Term bleibt 3x + 4y.' },
          { mistake: '2a² für a = 3: (2 · 3)² = 36', fix: 'Die Potenz gilt nur für a: 2 · 3² = 18.' },
        ],
        practice: [
          { problem: 'Fassen Sie 7a − 3a + 2 zusammen.', solution: '4a + 2', steps: ['7a − 3a = 4a.', '2 hat kein gleichartiges Glied: 4a + 2.'] },
          { problem: 'Multiplizieren Sie 3x · 4x.', solution: '12x²', steps: ['3 · 4 = 12.', 'x · x = x², also 12x².'] },
          { problem: 'Berechnen Sie 4x − 3 für x = 5.', solution: '17', steps: ['4 · 5 = 20.', '20 − 3 = 17.'] },
        ],
      },
    },

    // ───────── 2. The equation ax = b
    {
      slug: 'g7-expressions-equations-equation-ax-b',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Ekuacioni', 'Equation', 'Gleichung'), cells: ['3x − 7 = 2x + 5', 'x − 7 = 5', 'x = 12'] },
          { head: alt('Hapi', 'Step', 'Schritt'), cells: [alt('− 2x në të dy anët', '− 2x on both sides', '− 2x auf beiden Seiten'), alt('+ 7 në të dy anët', '+ 7 on both sides', '+ 7 auf beiden Seiten'), alt('Provë: 29 = 29', 'Check: 29 = 29', 'Probe: 29 = 29')] },
        ],
        highlight: [[0, 2]],
        alt: alt('Zgjidhja hap pas hapi e 3x − 7 = 2x + 5: zbresim 2x, shtojmë 7, x = 12.', 'Step-by-step solution of 3x − 7 = 2x + 5: subtract 2x, add 7, x = 12.', 'Schrittweise Lösung von 3x − 7 = 2x + 5: 2x subtrahieren, 7 addieren, x = 12.'),
      }],
      answers: {
        examples: [[['28 / 4', 7]], [['(5 + 7) / (3 - 2)', 12]]],
        practice: [[['-35 / 5', -7]], [['(21 - 9) / 2', 6]], [['(16 + 4) / (7 - 3)', 5]]],
      },
      al: {
        title: 'Ekuacioni ax = b',
        objectives: ['Të zgjidhni ekuacione të trajtës ax = b.', 'Të zgjidhni ekuacione me ndryshoren në të dy anët dhe të bëni provën.'],
        theory: 'Ekuacioni është barazim me një të panjohur. Ta zgjidhim do të thotë të gjejmë vlerën e x që e bën barazimin të vërtetë.\n\nEkuacioni është si peshore në ekuilibër: mund të shtojmë, të zbresim, të shumëzojmë ose të pjesëtojmë të dy anët me të njëjtin numër (jo me zero) dhe ekuilibri ruhet. Ekuacioni ax = b ka zgjidhjen x = b : a (a ≠ 0): 4x = 28 → x = 7.\n\nKur x është në të dy anët, i bartim kufizat me x në njërën anë dhe numrat në tjetrën (me shenjë të kundërt), pastaj pjesëtojmë. Në fund bëjmë provën duke zëvendësuar.',
        keyPoints: ['ax = b  ⟹  x = b : a (a ≠ 0)', 'Bartja: kufiza kalon në anën tjetër me shenjë të kundërt.', 'Prova: zëvendësoni x dhe krahasoni të dy anët.'],
        examples: [
          { example: 'Zgjidhni 4x = 28.', solution: 'x = 28 : 4 = 7. Prova: 4 · 7 = 28.' },
          { example: 'Zgjidhni 3x − 7 = 2x + 5.', solution: '3x − 2x = 5 + 7, pra x = 12. Prova: 36 − 7 = 29 dhe 24 + 5 = 29.' },
        ],
        commonMistakes: [
          { mistake: '3x − 7 = 2x + 5 → 3x − 2x = 5 − 7 → x = −2', fix: '−7 kalon në anën tjetër si +7: x = 5 + 7 = 12.' },
          { mistake: '4x = 28 → x = 28 − 4 = 24', fix: '4x do të thotë 4 · x; veprimi i kundërt është pjesëtimi: x = 7.' },
        ],
        practice: [
          { problem: 'Zgjidhni 5x = −35.', solution: 'x = −7', steps: ['x = −35 : 5.', 'x = −7.'] },
          { problem: 'Zgjidhni 2x + 9 = 21.', solution: 'x = 6', steps: ['2x = 21 − 9 = 12.', 'x = 12 : 2 = 6.'] },
          { problem: 'Zgjidhni 7x − 4 = 3x + 16.', solution: 'x = 5', steps: ['7x − 3x = 16 + 4.', '4x = 20, x = 5.'] },
        ],
      },
      en: {
        title: 'The equation ax = b',
        objectives: ['Solve equations of the form ax = b.', 'Solve equations with the variable on both sides and check the answer.'],
        theory: 'An equation is an equality with an unknown. Solving it means finding the value of x that makes the equality true.\n\nAn equation is like a balanced scale: we may add, subtract, multiply or divide both sides by the same number (not zero) and the balance stays. The equation ax = b has the solution x = b ÷ a (a ≠ 0): 4x = 28 → x = 7.\n\nWhen x is on both sides, move the x terms to one side and the numbers to the other (with the opposite sign), then divide. Finally check by substituting.',
        keyPoints: ['ax = b  ⟹  x = b ÷ a (a ≠ 0)', 'Moving a term: it changes sign on the other side.', 'Check: substitute x and compare both sides.'],
        examples: [
          { example: 'Solve 4x = 28.', solution: 'x = 28 ÷ 4 = 7. Check: 4 · 7 = 28.' },
          { example: 'Solve 3x − 7 = 2x + 5.', solution: '3x − 2x = 5 + 7, so x = 12. Check: 36 − 7 = 29 and 24 + 5 = 29.' },
        ],
        commonMistakes: [
          { mistake: '3x − 7 = 2x + 5 → 3x − 2x = 5 − 7 → x = −2', fix: '−7 moves to the other side as +7: x = 5 + 7 = 12.' },
          { mistake: '4x = 28 → x = 28 − 4 = 24', fix: '4x means 4 · x; the inverse operation is division: x = 7.' },
        ],
        practice: [
          { problem: 'Solve 5x = −35.', solution: 'x = −7', steps: ['x = −35 ÷ 5.', 'x = −7.'] },
          { problem: 'Solve 2x + 9 = 21.', solution: 'x = 6', steps: ['2x = 21 − 9 = 12.', 'x = 12 ÷ 2 = 6.'] },
          { problem: 'Solve 7x − 4 = 3x + 16.', solution: 'x = 5', steps: ['7x − 3x = 16 + 4.', '4x = 20, x = 5.'] },
        ],
      },
      de: {
        title: 'Die Gleichung ax = b',
        objectives: ['Gleichungen der Form ax = b lösen.', 'Gleichungen mit der Variablen auf beiden Seiten lösen und die Probe machen.'],
        theory: 'Eine Gleichung ist eine Gleichheit mit einer Unbekannten. Sie zu lösen heißt, den Wert von x zu finden, für den die Gleichheit stimmt.\n\nEine Gleichung ist wie eine Waage im Gleichgewicht: Man darf auf beiden Seiten dieselbe Zahl addieren, subtrahieren, mit ihr multiplizieren oder durch sie dividieren (nicht durch null). Die Gleichung ax = b hat die Lösung x = b : a (a ≠ 0): 4x = 28 → x = 7.\n\nSteht x auf beiden Seiten, bringt man die x-Glieder auf eine Seite und die Zahlen auf die andere (mit umgekehrtem Vorzeichen) und teilt dann. Zum Schluss macht man die Probe durch Einsetzen.',
        keyPoints: ['ax = b  ⟹  x = b : a (a ≠ 0)', 'Ein Glied wechselt die Seite mit umgekehrtem Vorzeichen.', 'Probe: x einsetzen und beide Seiten vergleichen.'],
        examples: [
          { example: 'Lösen Sie 4x = 28.', solution: 'x = 28 : 4 = 7. Probe: 4 · 7 = 28.' },
          { example: 'Lösen Sie 3x − 7 = 2x + 5.', solution: '3x − 2x = 5 + 7, also x = 12. Probe: 36 − 7 = 29 und 24 + 5 = 29.' },
        ],
        commonMistakes: [
          { mistake: '3x − 7 = 2x + 5 → 3x − 2x = 5 − 7 → x = −2', fix: '−7 wechselt als +7 die Seite: x = 5 + 7 = 12.' },
          { mistake: '4x = 28 → x = 28 − 4 = 24', fix: '4x heißt 4 · x; die Umkehrung ist das Dividieren: x = 7.' },
        ],
        practice: [
          { problem: 'Lösen Sie 5x = −35.', solution: 'x = −7', steps: ['x = −35 : 5.', 'x = −7.'] },
          { problem: 'Lösen Sie 2x + 9 = 21.', solution: 'x = 6', steps: ['2x = 21 − 9 = 12.', 'x = 12 : 2 = 6.'] },
          { problem: 'Lösen Sie 7x − 4 = 3x + 16.', solution: 'x = 5', steps: ['7x − 3x = 16 + 4.', '4x = 20, x = 5.'] },
        ],
      },
    },

    // ───────── 3. Word problems
    {
      slug: 'g7-expressions-equations-word-problems',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.3, xMax: 7.8, yMin: -1.3, yMax: 1.4 }, height: 120,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [2, 0], [2, 1], [0, 1]], fill: true, color: 'primary', label: { at: [1, 0.5], text: 'x' } },
          { kind: 'polygon', points: [[2, 0], [4, 0], [4, 1], [2, 1]], fill: true, color: 'primary', label: { at: [3, 0.5], text: 'x' } },
          { kind: 'polygon', points: [[4, 0], [6, 0], [6, 1], [4, 1]], fill: true, color: 'primary', label: { at: [5, 0.5], text: 'x' } },
          { kind: 'polygon', points: [[6, 0], [7.5, 0], [7.5, 1], [6, 1]], fill: true, color: 'secondary', label: { at: [6.75, 0.5], text: '5' } },
          { kind: 'segment', from: [0, -0.5], to: [7.5, -0.5], color: 'ink', label: '26' },
        ],
        caption: alt('Modeli me shirita: tre herë numri dhe 5 bëjnë 26, pra 3x + 5 = 26 dhe x = 7.', 'Bar model: three times the number plus 5 makes 26, so 3x + 5 = 26 and x = 7.', 'Streifenmodell: dreimal die Zahl plus 5 ergibt 26, also 3x + 5 = 26 und x = 7.'),
        alt: alt('Tre kuti të barabarta x dhe një kuti 5, së bashku me gjatësi 26.', 'Three equal boxes x and one box 5, together of length 26.', 'Drei gleiche Kästchen x und ein Kästchen 5, zusammen 26 lang.'),
      }],
      answers: {
        examples: [[['(26 - 5) / 3', 7]], [['(30 - 6) / 4', 6], ['6 + 3', 9]]],
        practice: [[['(47 - 1) / 2', 23], ['23 + 1', 24]], [['(38 - 6) / 4', 8]], [['(50 - 12) / 2', 19], ['19 + 12', 31]]],
      },
      al: {
        title: 'Problema me ekuacione',
        objectives: ['Të shndërroni një problem me fjalë në ekuacion.', 'Të zgjidhni ekuacionin dhe të kontrolloni përgjigjen në tekst.'],
        theory: 'Për të zgjidhur një problem me ekuacion ndiqni katër hapa: (1) shënoni të panjohurën me x dhe shkruani çfarë paraqet; (2) shprehni madhësitë e tjera me x; (3) shkruani ekuacionin sipas tekstit dhe zgjidheni; (4) kontrolloni përgjigjen në problemin fillestar dhe shkruani përgjigjen me fjalë.\n\nShembull: "Trefishi i një numri i shtuar me 5 është 26." → 3x + 5 = 26 → 3x = 21 → x = 7.\n\nNjë model me shirita ndihmon për të parë ekuacionin para se ta shkruani.',
        keyPoints: ['x = ? (shkruani çfarë është x)', 'Teksti → ekuacion → zgjidhje', 'Prova në tekst, jo vetëm në ekuacion.'],
        examples: [
          { example: 'Trefishi i një numri i shtuar me 5 është 26. Cili është numri?', solution: '3x + 5 = 26 → 3x = 21 → x = 7. Prova: 3 · 7 + 5 = 26.' },
          { example: 'Perimetri i drejtkëndëshit është 30 cm; gjatësia është 3 cm më e madhe se gjerësia. Gjeni brinjët.', solution: 'Gjerësia x, gjatësia x + 3: 2(x + x + 3) = 30 → 4x + 6 = 30 → x = 6. Brinjët: 6 cm dhe 9 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Gjendet x, por harrohet të përgjigjet pyetja (p.sh. edhe gjatësia).', fix: 'Lexoni sërish pyetjen: nëse kërkohen dy brinjë, shkruani të dyja.' },
        ],
        practice: [
          { problem: 'Shuma e dy numrave natyrorë të njëpasnjëshëm është 47. Cilët janë numrat?', solution: '23 dhe 24', steps: ['x + (x + 1) = 47 → 2x = 46.', 'x = 23, numri tjetër 24.'] },
          { problem: '4 bileta dhe 6 € tarifë kushtojnë gjithsej 38 €. Sa kushton një biletë?', solution: '8 €', steps: ['4x + 6 = 38 → 4x = 32.', 'x = 8 €.'] },
          { problem: 'Besa ka 12 € më shumë se Ana; së bashku kanë 50 €. Sa ka secila?', solution: 'Ana 19 €, Besa 31 €', steps: ['x + (x + 12) = 50 → 2x = 38.', 'Ana x = 19 €, Besa 19 + 12 = 31 €.'] },
        ],
      },
      en: {
        title: 'Word problems with equations',
        objectives: ['Turn a word problem into an equation.', 'Solve the equation and check the answer in the text.'],
        theory: 'To solve a word problem with an equation, follow four steps: (1) call the unknown x and write what it stands for; (2) express the other quantities with x; (3) write the equation from the text and solve it; (4) check the answer in the original problem and answer in words.\n\nExample: "Three times a number plus 5 is 26." → 3x + 5 = 26 → 3x = 21 → x = 7.\n\nA bar model helps you see the equation before writing it.',
        keyPoints: ['x = ? (write what x is)', 'Text → equation → solution', 'Check in the text, not only in the equation.'],
        examples: [
          { example: 'Three times a number plus 5 is 26. What is the number?', solution: '3x + 5 = 26 → 3x = 21 → x = 7. Check: 3 · 7 + 5 = 26.' },
          { example: 'A rectangle has a perimeter of 30 cm; its length is 3 cm more than its width. Find the sides.', solution: 'Width x, length x + 3: 2(x + x + 3) = 30 → 4x + 6 = 30 → x = 6. Sides: 6 cm and 9 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Finding x but not answering the question (e.g. the length as well).', fix: 'Reread the question: if two sides are asked for, give both.' },
        ],
        practice: [
          { problem: 'The sum of two consecutive whole numbers is 47. What are the numbers?', solution: '23 and 24', steps: ['x + (x + 1) = 47 → 2x = 46.', 'x = 23, the other number 24.'] },
          { problem: '4 tickets and a €6 fee cost €38 in total. How much is one ticket?', solution: '€8', steps: ['4x + 6 = 38 → 4x = 32.', 'x = €8.'] },
          { problem: 'Besa has €12 more than Ana; together they have €50. How much does each have?', solution: 'Ana €19, Besa €31', steps: ['x + (x + 12) = 50 → 2x = 38.', 'Ana x = €19, Besa 19 + 12 = €31.'] },
        ],
      },
      de: {
        title: 'Textaufgaben mit Gleichungen',
        objectives: ['Eine Textaufgabe in eine Gleichung übersetzen.', 'Die Gleichung lösen und das Ergebnis am Text prüfen.'],
        theory: 'Eine Textaufgabe löst man mit einer Gleichung in vier Schritten: (1) die Unbekannte x nennen und aufschreiben, wofür sie steht; (2) die anderen Größen mit x ausdrücken; (3) die Gleichung nach dem Text aufstellen und lösen; (4) das Ergebnis an der Aufgabe prüfen und einen Antwortsatz schreiben.\n\nBeispiel: „Das Dreifache einer Zahl plus 5 ergibt 26.“ → 3x + 5 = 26 → 3x = 21 → x = 7.\n\nEin Streifenmodell hilft, die Gleichung zu sehen, bevor man sie aufschreibt.',
        keyPoints: ['x = ? (aufschreiben, was x ist)', 'Text → Gleichung → Lösung', 'Probe am Text, nicht nur an der Gleichung.'],
        examples: [
          { example: 'Das Dreifache einer Zahl plus 5 ergibt 26. Wie heißt die Zahl?', solution: '3x + 5 = 26 → 3x = 21 → x = 7. Probe: 3 · 7 + 5 = 26.' },
          { example: 'Ein Rechteck hat den Umfang 30 cm; die Länge ist 3 cm größer als die Breite. Bestimmen Sie die Seiten.', solution: 'Breite x, Länge x + 3: 2(x + x + 3) = 30 → 4x + 6 = 30 → x = 6. Seiten: 6 cm und 9 cm.' },
        ],
        commonMistakes: [
          { mistake: 'x wird bestimmt, aber die Frage nicht ganz beantwortet (z. B. auch die Länge).', fix: 'Die Frage noch einmal lesen: Sind zwei Seiten gesucht, beide angeben.' },
        ],
        practice: [
          { problem: 'Die Summe zweier aufeinanderfolgender natürlicher Zahlen ist 47. Wie heißen die Zahlen?', solution: '23 und 24', steps: ['x + (x + 1) = 47 → 2x = 46.', 'x = 23, die andere Zahl 24.'] },
          { problem: '4 Eintrittskarten und 6 € Gebühr kosten zusammen 38 €. Was kostet eine Karte?', solution: '8 €', steps: ['4x + 6 = 38 → 4x = 32.', 'x = 8 €.'] },
          { problem: 'Besa hat 12 € mehr als Ana; zusammen haben sie 50 €. Wie viel hat jede?', solution: 'Ana 19 €, Besa 31 €', steps: ['x + (x + 12) = 50 → 2x = 38.', 'Ana x = 19 €, Besa 19 + 12 = 31 €.'] },
        ],
      },
    },

    // ───────── 4. Inequalities
    {
      slug: 'g7-expressions-equations-inequalities',
      visuals: [{
        type: 'numberLine', min: -1, max: 7, step: 1,
        intervals: [{ from: null, to: 4, toOpen: true }],
        points: [{ x: 4, label: 'x < 4', open: true }],
        caption: alt('Zgjidhja e 2x + 3 < 11 është x < 4: rrethi i hapur tregon se 4 nuk bën pjesë.', 'The solution of 2x + 3 < 11 is x < 4: the open circle shows that 4 is not included.', 'Die Lösung von 2x + 3 < 11 ist x < 4: Der offene Kreis zeigt, dass 4 nicht dazugehört.'),
        alt: alt('Boshti numerik me pjesën majtas të 4 të ngjyrosur dhe rreth të hapur te 4.', 'A number line with the part left of 4 shaded and an open circle at 4.', 'Zahlenstrahl, links von 4 markiert, mit offenem Kreis bei 4.'),
      }],
      answers: {
        examples: [[['9 - 5', 4]], [['(11 - 3) / 2', 4]]],
        practice: [[['15 / 3', 5]], [['(11 + 1) / 4', 3]], [['6 / (-2)', -3]]],
      },
      al: {
        title: 'Inekuacionet',
        objectives: ['Të zgjidhni inekuacione të thjeshta me një të panjohur.', 'Të paraqitni zgjidhjen në boshtin numerik.'],
        theory: 'Inekuacioni është mosbarazim me një të panjohur: 2x + 3 < 11. Zgjidhja nuk është një numër i vetëm, por një bashkësi numrash: të gjithë numrat që e bëjnë mosbarazimin të vërtetë.\n\nZgjidhet si ekuacioni: mund të shtojmë ose të zbresim të njëjtin numër në të dy anët, si dhe të shumëzojmë ose pjesëtojmë me një numër pozitiv. 2x + 3 < 11 → 2x < 8 → x < 4.\n\nKujdes: kur shumëzojmë ose pjesëtojmë me një numër negativ, shenja e mosbarazimit kthehet: −2x < 6 → x > −3. Në boshtin numerik, rrethi i hapur do të thotë "pa këtë numër" (<, >), rrethi i mbushur "me këtë numër" (≤, ≥).',
        keyPoints: ['Si te ekuacioni: ± dhe ×, ÷ me numër pozitiv.', 'Pjesëtim me numër negativ → shenja kthehet.', 'Rreth i hapur: < >;  rreth i mbushur: ≤ ≥'],
        examples: [
          { example: 'Zgjidhni x + 5 > 9.', solution: 'x > 9 − 5, pra x > 4.' },
          { example: 'Zgjidhni 2x + 3 < 11.', solution: '2x < 8, x < 4. P.sh. x = 3: 9 < 11 ✓.' },
        ],
        commonMistakes: [
          { mistake: '−2x < 6 → x < −3', fix: 'Pjesëtimi me −2 e kthen shenjën: x > −3.' },
          { mistake: 'Zgjidhja e x < 4 shkruhet si x = 4.', fix: 'Zgjidhja është bashkësi: të gjithë numrat më të vegjël se 4.' },
        ],
        practice: [
          { problem: 'Zgjidhni 3x ≤ 15.', solution: 'x ≤ 5', steps: ['Pjesëtojmë me 3 (pozitiv).', 'x ≤ 5.'] },
          { problem: 'Zgjidhni 4x − 1 > 11.', solution: 'x > 3', steps: ['4x > 12.', 'x > 3.'] },
          { problem: 'Zgjidhni −2x < 6.', solution: 'x > −3', steps: ['Pjesëtojmë me −2: shenja kthehet.', 'x > −3.'] },
        ],
      },
      en: {
        title: 'Inequalities',
        objectives: ['Solve simple inequalities with one unknown.', 'Show the solution on a number line.'],
        theory: 'An inequality compares with <, >, ≤ or ≥ and contains an unknown: 2x + 3 < 11. The solution is not a single number but a set of numbers: all numbers that make the inequality true.\n\nIt is solved like an equation: we may add or subtract the same number on both sides, and multiply or divide by a positive number. 2x + 3 < 11 → 2x < 8 → x < 4.\n\nCareful: when multiplying or dividing by a negative number, the inequality sign flips: −2x < 6 → x > −3. On a number line, an open circle means "without this number" (<, >), a filled circle "with this number" (≤, ≥).',
        keyPoints: ['Like an equation: ± and ×, ÷ by a positive number.', 'Dividing by a negative number → the sign flips.', 'Open circle: < >;  filled circle: ≤ ≥'],
        examples: [
          { example: 'Solve x + 5 > 9.', solution: 'x > 9 − 5, so x > 4.' },
          { example: 'Solve 2x + 3 < 11.', solution: '2x < 8, x < 4. E.g. x = 3: 9 < 11 ✓.' },
        ],
        commonMistakes: [
          { mistake: '−2x < 6 → x < −3', fix: 'Dividing by −2 flips the sign: x > −3.' },
          { mistake: 'Writing the solution of x < 4 as x = 4.', fix: 'The solution is a set: all numbers less than 4.' },
        ],
        practice: [
          { problem: 'Solve 3x ≤ 15.', solution: 'x ≤ 5', steps: ['Divide by 3 (positive).', 'x ≤ 5.'] },
          { problem: 'Solve 4x − 1 > 11.', solution: 'x > 3', steps: ['4x > 12.', 'x > 3.'] },
          { problem: 'Solve −2x < 6.', solution: 'x > −3', steps: ['Divide by −2: the sign flips.', 'x > −3.'] },
        ],
      },
      de: {
        title: 'Ungleichungen',
        objectives: ['Einfache Ungleichungen mit einer Unbekannten lösen.', 'Die Lösung am Zahlenstrahl darstellen.'],
        theory: 'Eine Ungleichung vergleicht mit <, >, ≤ oder ≥ und enthält eine Unbekannte: 2x + 3 < 11. Die Lösung ist keine einzelne Zahl, sondern eine Menge: alle Zahlen, für die die Ungleichung stimmt.\n\nMan löst sie wie eine Gleichung: auf beiden Seiten dieselbe Zahl addieren oder subtrahieren, mit einer positiven Zahl multiplizieren oder durch sie dividieren. 2x + 3 < 11 → 2x < 8 → x < 4.\n\nAchtung: Beim Multiplizieren oder Dividieren mit einer negativen Zahl dreht sich das Ungleichheitszeichen um: −2x < 6 → x > −3. Am Zahlenstrahl bedeutet ein offener Kreis „ohne diese Zahl“ (<, >), ein gefüllter Kreis „mit dieser Zahl“ (≤, ≥).',
        keyPoints: ['Wie bei Gleichungen: ± sowie ×, : mit positiver Zahl.', 'Division durch eine negative Zahl → Zeichen umdrehen.', 'Offener Kreis: < >;  gefüllter Kreis: ≤ ≥'],
        examples: [
          { example: 'Lösen Sie x + 5 > 9.', solution: 'x > 9 − 5, also x > 4.' },
          { example: 'Lösen Sie 2x + 3 < 11.', solution: '2x < 8, x < 4. Z. B. x = 3: 9 < 11 ✓.' },
        ],
        commonMistakes: [
          { mistake: '−2x < 6 → x < −3', fix: 'Die Division durch −2 dreht das Zeichen um: x > −3.' },
          { mistake: 'Die Lösung von x < 4 als x = 4 schreiben.', fix: 'Die Lösung ist eine Menge: alle Zahlen kleiner als 4.' },
        ],
        practice: [
          { problem: 'Lösen Sie 3x ≤ 15.', solution: 'x ≤ 5', steps: ['Durch 3 teilen (positiv).', 'x ≤ 5.'] },
          { problem: 'Lösen Sie 4x − 1 > 11.', solution: 'x > 3', steps: ['4x > 12.', 'x > 3.'] },
          { problem: 'Lösen Sie −2x < 6.', solution: 'x > −3', steps: ['Durch −2 teilen: Das Zeichen dreht sich um.', 'x > −3.'] },
        ],
      },
    },
  ],
};
