// Grade 6 · Theme 8: Expressions, equations, inequalities (March–April)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g6-expressions-equations',
  i18n: {
    al: { title: 'Shprehjet, ekuacionet, inekuacionet', description: 'Shprehje me shkronja, ekuacione të thjeshta, probleme me ekuacione dhe inekuacione.' },
    en: { title: 'Expressions, equations, inequalities', description: 'Expressions with letters, simple equations, word problems with equations, and inequalities.' },
    de: { title: 'Terme, Gleichungen, Ungleichungen', description: 'Terme mit Variablen, einfache Gleichungen, Sachaufgaben mit Gleichungen und Ungleichungen.' },
  },
  lessons: [
    // ───────── 1. Expressions with one variable
    {
      slug: 'g6-expressions-equations-expressions',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'a', cells: ['0', '1', '2', '3', '4'] },
          { head: '3a + 5', cells: ['5', '8', '11', '14', '17'] },
        ],
        highlight: [[1, 4]],
        caption: alt('Vlera e shprehjes 3a + 5 ndryshon kur ndryshon a.', 'The value of 3a + 5 changes when a changes.', 'Der Wert von 3a + 5 ändert sich, wenn sich a ändert.'),
        alt: alt('Tabelë: për a = 0, 1, 2, 3, 4 shprehja 3a + 5 merr vlerat 5, 8, 11, 14, 17.', 'Table: for a = 0, 1, 2, 3, 4 the expression 3a + 5 takes the values 5, 8, 11, 14, 17.', 'Tabelle: für a = 0, 1, 2, 3, 4 nimmt 3a + 5 die Werte 5, 8, 11, 14, 17 an.'),
      }],
      answers: {
        examples: [[['3 * 4 + 5', 17]], [['2 * 5 + 2 * 3', 16]]],
        practice: [[['2 * 6 - 3', 9]], [['4 * (7 + 1)', 32]], 'text'],
      },
      al: {
        title: 'Shprehjet me një ndryshore',
        objectives: ['Të shkruani shprehje me shkronja nga një përshkrim me fjalë.', 'Të gjeni vlerën e një shprehjeje kur dihet vlera e shkronjës.'],
        theory: 'Shkronja (p.sh. a, x, n) në një shprehje zë vendin e një numri që nuk e dimë ose që mund të ndryshojë; quhet ndryshore. Shprehja 3a + 5 do të thotë "3 herë a, plus 5". Shenja e shumëzimit ndërmjet numrit dhe shkronjës zakonisht nuk shkruhet: 3a = 3 · a.\n\nPër të gjetur vlerën e shprehjes, zëvendësojmë shkronjën me numrin dhe llogarisim me radhën e veprimeve: për a = 4, 3a + 5 = 3 · 4 + 5 = 17.\n\nShprehjet me shkronja na lejojnë të shkruajmë rregulla të përgjithshme, si perimetri i drejtkëndëshit: P = 2a + 2b.',
        keyPoints: ['3a = 3 · a', 'Vlera: zëvendësoni shkronjën dhe llogaritni me radhën e veprimeve.', '"Rritet me" → +, "herë" → ·, "zvogëlohet me" → −'],
        examples: [
          { example: 'Gjeni vlerën e 3a + 5 për a = 4.', solution: '3 · 4 + 5 = 12 + 5 = 17.' },
          { example: 'Perimetri i drejtkëndëshit është P = 2a + 2b. Sa është P për a = 5 cm dhe b = 3 cm?', solution: 'P = 2 · 5 + 2 · 3 = 10 + 6 = 16 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Për a = 4 shkruhet 3a = 34.', fix: '3a do të thotë 3 · a = 3 · 4 = 12.' },
          { mistake: 'Mblidhet para shumëzimit: 3 · 4 + 5 = 3 · 9.', fix: 'Shumëzimi bëhet para mbledhjes.' },
        ],
        practice: [
          { problem: 'Gjeni vlerën e 2x − 3 për x = 6.', solution: '9', steps: ['2 · 6 = 12.', '12 − 3 = 9.'] },
          { problem: 'Gjeni vlerën e 4(n + 1) për n = 7.', solution: '32', steps: ['Kllapat: 7 + 1 = 8.', '4 · 8 = 32.'] },
          { problem: 'Shkruani si shprehje: "një numër x rritet me 5 dhe pastaj dyfishohet".', solution: '2(x + 5)', steps: ['"Rritet me 5": x + 5.', '"Dyfishohet": 2 · (x + 5).'] },
        ],
      },
      en: {
        title: 'Expressions with one variable',
        objectives: ['Write expressions with letters from a description in words.', 'Find the value of an expression when the letter is known.'],
        theory: 'A letter (e.g. a, x, n) in an expression stands for a number we do not know or that can change; it is called a variable. The expression 3a + 5 means "3 times a, plus 5". The multiplication sign between a number and a letter is usually left out: 3a = 3 · a.\n\nTo find the value of an expression, replace the letter by the number and calculate using the order of operations: for a = 4, 3a + 5 = 3 · 4 + 5 = 17.\n\nExpressions with letters let us write general rules, like the perimeter of a rectangle: P = 2a + 2b.',
        keyPoints: ['3a = 3 · a', 'Value: replace the letter and use the order of operations.', '"Increased by" → +, "times" → ·, "decreased by" → −'],
        examples: [
          { example: 'Find the value of 3a + 5 for a = 4.', solution: '3 · 4 + 5 = 12 + 5 = 17.' },
          { example: 'The perimeter of a rectangle is P = 2a + 2b. What is P for a = 5 cm and b = 3 cm?', solution: 'P = 2 · 5 + 2 · 3 = 10 + 6 = 16 cm.' },
        ],
        commonMistakes: [
          { mistake: 'For a = 4, writing 3a = 34.', fix: '3a means 3 · a = 3 · 4 = 12.' },
          { mistake: 'Adding before multiplying: 3 · 4 + 5 = 3 · 9.', fix: 'Multiplication comes before addition.' },
        ],
        practice: [
          { problem: 'Find the value of 2x − 3 for x = 6.', solution: '9', steps: ['2 · 6 = 12.', '12 − 3 = 9.'] },
          { problem: 'Find the value of 4(n + 1) for n = 7.', solution: '32', steps: ['Brackets: 7 + 1 = 8.', '4 · 8 = 32.'] },
          { problem: 'Write as an expression: "a number x is increased by 5 and then doubled".', solution: '2(x + 5)', steps: ['"Increased by 5": x + 5.', '"Doubled": 2 · (x + 5).'] },
        ],
      },
      de: {
        title: 'Terme mit einer Variablen',
        objectives: ['Terme mit Variablen aus einer Beschreibung in Worten aufstellen.', 'Den Wert eines Terms berechnen, wenn die Variable bekannt ist.'],
        theory: 'Ein Buchstabe (z. B. a, x, n) in einem Term steht für eine Zahl, die man nicht kennt oder die sich ändern kann; er heißt Variable. Der Term 3a + 5 bedeutet „3 mal a, plus 5“. Den Malpunkt zwischen Zahl und Variable lässt man meist weg: 3a = 3 · a.\n\nUm den Wert eines Terms zu berechnen, setzt man für die Variable die Zahl ein und rechnet mit der Rechenreihenfolge: für a = 4 ist 3a + 5 = 3 · 4 + 5 = 17.\n\nMit Termen lassen sich allgemeine Regeln aufschreiben, etwa der Umfang eines Rechtecks: u = 2a + 2b.',
        keyPoints: ['3a = 3 · a', 'Wert: Zahl einsetzen und mit der Rechenreihenfolge rechnen.', '„Um … vergrößert“ → +, „mal“ → ·, „um … verkleinert“ → −'],
        examples: [
          { example: 'Berechnen Sie den Wert von 3a + 5 für a = 4.', solution: '3 · 4 + 5 = 12 + 5 = 17.' },
          { example: 'Der Umfang eines Rechtecks ist u = 2a + 2b. Wie groß ist u für a = 5 cm und b = 3 cm?', solution: 'u = 2 · 5 + 2 · 3 = 10 + 6 = 16 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Für a = 4 schreiben: 3a = 34.', fix: '3a bedeutet 3 · a = 3 · 4 = 12.' },
          { mistake: 'Vor dem Multiplizieren addieren: 3 · 4 + 5 = 3 · 9.', fix: 'Punkt- vor Strichrechnung.' },
        ],
        practice: [
          { problem: 'Berechnen Sie den Wert von 2x − 3 für x = 6.', solution: '9', steps: ['2 · 6 = 12.', '12 − 3 = 9.'] },
          { problem: 'Berechnen Sie den Wert von 4(n + 1) für n = 7.', solution: '32', steps: ['Klammer: 7 + 1 = 8.', '4 · 8 = 32.'] },
          { problem: 'Schreiben Sie als Term: „Eine Zahl x wird um 5 vergrößert und dann verdoppelt“.', solution: '2(x + 5)', steps: ['„Um 5 vergrößert“: x + 5.', '„Verdoppelt“: 2 · (x + 5).'] },
        ],
      },
    },

    // ───────── 2. Linear equations
    {
      slug: 'g6-expressions-equations-linear-equations',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Veprimi', 'Operation', 'Rechnung'), cells: ['+ 17', '− 9', '· 4', ': 6'] },
          { head: alt('E kundërta', 'Undo with', 'Umkehrung'), cells: ['− 17', '+ 9', ': 4', '· 6'] },
        ],
        caption: alt('Për të veçuar x, bëjmë veprimin e kundërt në të dyja anët.', 'To get x alone, do the opposite operation on both sides.', 'Um x allein zu bekommen, macht man auf beiden Seiten die Umkehrrechnung.'),
        alt: alt('Tabela e veprimeve të kundërta: +17 me −17, −9 me +9, ·4 me :4, :6 me ·6.', 'Table of inverse operations: +17 with −17, −9 with +9, ·4 with ÷4, ÷6 with ·6.', 'Tabelle der Umkehrrechnungen: +17 mit −17, −9 mit +9, ·4 mit :4, :6 mit ·6.'),
      }],
      answers: {
        examples: [[['42 - 17', 25]], [['52 / 4', 13]]],
        practice: [[['15 + 9', 24]], [['7 * 6', 42]], [['(20 - 2) / 3', 6]]],
      },
      al: {
        title: 'Ekuacionet lineare',
        objectives: ['Të zgjidhni ekuacione të thjeshta me veprime të kundërta.', 'Të kontrolloni zgjidhjen duke e zëvendësuar në ekuacion.'],
        theory: 'Ekuacioni është një barazim me një numër të panjohur, p.sh. x + 17 = 42. Të zgjidhim ekuacionin do të thotë të gjejmë numrin që e bën barazimin të vërtetë.\n\nEkuacioni është si një peshore në ekuilibër: nëse bëjmë të njëjtin veprim në të dyja anët, ekuilibri ruhet. Për të veçuar x-in bëjmë veprimin e kundërt: x + 17 = 42 → x = 42 − 17 = 25; 4x = 52 → x = 52 : 4 = 13.\n\nTe ekuacionet me dy hapa, si 3x + 2 = 20, së pari heqim mbledhjen (zbresim 2), pastaj shumëzimin (pjesëtojmë me 3). Gjithmonë kontrolloni: zëvendësoni zgjidhjen në ekuacion.',
        keyPoints: ['E njëjta gjë në të dyja anët ruan barazimin.', '+ ↔ −;  · ↔ :', 'Kontroll: zëvendësoni x në ekuacionin fillestar.'],
        examples: [
          { example: 'Zgjidhni x + 17 = 42.', solution: 'Zbresim 17 në të dyja anët: x = 42 − 17 = 25. Kontroll: 25 + 17 = 42 ✓.' },
          { example: 'Zgjidhni 4x = 52.', solution: 'Pjesëtojmë me 4: x = 52 : 4 = 13. Kontroll: 4 · 13 = 52 ✓.' },
        ],
        commonMistakes: [
          { mistake: 'Te x + 17 = 42 mblidhet 17: x = 59.', fix: 'Veprimi i kundërt i mbledhjes është zbritja.' },
          { mistake: 'Te 3x + 2 = 20 pjesëtohet së pari: x + 2 = 20 : 3.', fix: 'Hiqni së pari mbledhjen/zbritjen, pastaj shumëzimin.' },
        ],
        practice: [
          { problem: 'Zgjidhni x − 9 = 15.', solution: 'x = 24', steps: ['Shtojmë 9 në të dyja anët.', 'x = 15 + 9 = 24.'] },
          { problem: 'Zgjidhni x : 6 = 7.', solution: 'x = 42', steps: ['Shumëzojmë me 6.', 'x = 7 · 6 = 42.'] },
          { problem: 'Zgjidhni 3x + 2 = 20.', solution: 'x = 6', steps: ['Zbresim 2: 3x = 18.', 'Pjesëtojmë me 3: x = 6.', 'Kontroll: 3 · 6 + 2 = 20 ✓.'] },
        ],
      },
      en: {
        title: 'Linear equations',
        objectives: ['Solve simple equations using inverse operations.', 'Check the solution by substituting it into the equation.'],
        theory: 'An equation is an equality with an unknown number, e.g. x + 17 = 42. To solve the equation means to find the number that makes the equality true.\n\nAn equation is like a balanced scale: if we do the same thing to both sides, it stays balanced. To get x alone, we do the opposite operation: x + 17 = 42 → x = 42 − 17 = 25; 4x = 52 → x = 52 ÷ 4 = 13.\n\nIn two-step equations such as 3x + 2 = 20, first undo the addition (subtract 2), then the multiplication (divide by 3). Always check: substitute the solution into the equation.',
        keyPoints: ['Doing the same to both sides keeps the equation true.', '+ ↔ −;  · ↔ ÷', 'Check: substitute x into the original equation.'],
        examples: [
          { example: 'Solve x + 17 = 42.', solution: 'Subtract 17 from both sides: x = 42 − 17 = 25. Check: 25 + 17 = 42 ✓.' },
          { example: 'Solve 4x = 52.', solution: 'Divide by 4: x = 52 ÷ 4 = 13. Check: 4 · 13 = 52 ✓.' },
        ],
        commonMistakes: [
          { mistake: 'In x + 17 = 42, adding 17: x = 59.', fix: 'The inverse of addition is subtraction.' },
          { mistake: 'In 3x + 2 = 20, dividing first: x + 2 = 20 ÷ 3.', fix: 'Undo addition/subtraction first, then multiplication.' },
        ],
        practice: [
          { problem: 'Solve x − 9 = 15.', solution: 'x = 24', steps: ['Add 9 to both sides.', 'x = 15 + 9 = 24.'] },
          { problem: 'Solve x ÷ 6 = 7.', solution: 'x = 42', steps: ['Multiply by 6.', 'x = 7 · 6 = 42.'] },
          { problem: 'Solve 3x + 2 = 20.', solution: 'x = 6', steps: ['Subtract 2: 3x = 18.', 'Divide by 3: x = 6.', 'Check: 3 · 6 + 2 = 20 ✓.'] },
        ],
      },
      de: {
        title: 'Lineare Gleichungen',
        objectives: ['Einfache Gleichungen mit Umkehrrechnungen lösen.', 'Die Lösung durch Einsetzen prüfen (Probe).'],
        theory: 'Eine Gleichung ist eine Gleichheit mit einer unbekannten Zahl, z. B. x + 17 = 42. Eine Gleichung lösen heißt, die Zahl zu finden, für die die Gleichheit stimmt.\n\nEine Gleichung ist wie eine Waage im Gleichgewicht: Macht man auf beiden Seiten dasselbe, bleibt sie im Gleichgewicht. Um x allein zu bekommen, macht man die Umkehrrechnung: x + 17 = 42 → x = 42 − 17 = 25; 4x = 52 → x = 52 : 4 = 13.\n\nBei Gleichungen mit zwei Schritten wie 3x + 2 = 20 macht man zuerst die Addition rückgängig (2 subtrahieren), dann die Multiplikation (durch 3 dividieren). Immer die Probe machen: Lösung in die Gleichung einsetzen.',
        keyPoints: ['Auf beiden Seiten dasselbe tun erhält die Gleichheit.', '+ ↔ −;  · ↔ :', 'Probe: x in die Ausgangsgleichung einsetzen.'],
        examples: [
          { example: 'Lösen Sie x + 17 = 42.', solution: 'Auf beiden Seiten 17 subtrahieren: x = 42 − 17 = 25. Probe: 25 + 17 = 42 ✓.' },
          { example: 'Lösen Sie 4x = 52.', solution: 'Durch 4 dividieren: x = 52 : 4 = 13. Probe: 4 · 13 = 52 ✓.' },
        ],
        commonMistakes: [
          { mistake: 'Bei x + 17 = 42 die 17 addieren: x = 59.', fix: 'Die Umkehrung der Addition ist die Subtraktion.' },
          { mistake: 'Bei 3x + 2 = 20 zuerst dividieren: x + 2 = 20 : 3.', fix: 'Zuerst Addition/Subtraktion rückgängig machen, dann die Multiplikation.' },
        ],
        practice: [
          { problem: 'Lösen Sie x − 9 = 15.', solution: 'x = 24', steps: ['Auf beiden Seiten 9 addieren.', 'x = 15 + 9 = 24.'] },
          { problem: 'Lösen Sie x : 6 = 7.', solution: 'x = 42', steps: ['Mit 6 multiplizieren.', 'x = 7 · 6 = 42.'] },
          { problem: 'Lösen Sie 3x + 2 = 20.', solution: 'x = 6', steps: ['2 subtrahieren: 3x = 18.', 'Durch 3 dividieren: x = 6.', 'Probe: 3 · 6 + 2 = 20 ✓.'] },
        ],
      },
    },

    // ───────── 3. Word problems with equations
    {
      slug: 'g6-expressions-equations-word-problems',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.3, xMax: 15.3, yMin: -1.6, yMax: 3.2 }, height: 110,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [4, 0], [4, 2], [0, 2]], fill: true, color: 'primary', label: { at: [2, 1], text: 'x' } },
          { kind: 'polygon', points: [[4, 0], [8, 0], [8, 2], [4, 2]], fill: true, color: 'primary', label: { at: [6, 1], text: 'x' } },
          { kind: 'polygon', points: [[8, 0], [12, 0], [12, 2], [8, 2]], fill: true, color: 'primary', label: { at: [10, 1], text: 'x' } },
          { kind: 'polygon', points: [[12, 0], [15, 0], [15, 2], [12, 2]], fill: true, color: 'secondary', label: { at: [13.5, 1], text: '7' } },
          { kind: 'segment', from: [0, -0.6], to: [15, -0.6], color: 'success', label: '31', labelSide: 'right' },
        ],
        caption: alt('Modeli me shirita: 3x + 7 = 31, pra 3x = 24 dhe x = 8.', 'Bar model: 3x + 7 = 31, so 3x = 24 and x = 8.', 'Streifenmodell: 3x + 7 = 31, also 3x = 24 und x = 8.'),
        alt: alt('Tri pjesë të barabarta x dhe një pjesë 7 që së bashku bëjnë 31.', 'Three equal parts x and a part 7 that together make 31.', 'Drei gleiche Teile x und ein Teil 7, die zusammen 31 ergeben.'),
      }],
      answers: {
        examples: [[['(31 - 7) / 3', 8]], [['48 / 4', 12]]],
        practice: [[['(11 - 3) / 4', 2]], [['36 / 4', 9]], [['(25 - 1) / 2', 12]]],
      },
      al: {
        title: 'Problemat me ekuacione',
        objectives: ['Të shndërroni një problem me fjalë në ekuacion.', 'Ta zgjidhni ekuacionin dhe ta kontrolloni përgjigjen në problem.'],
        theory: 'Për të zgjidhur një problem me ekuacion: 1) shënojmë me x atë që kërkohet; 2) shkruajmë ekuacionin sipas fjalëve të problemit; 3) e zgjidhim; 4) kontrollojmë nëse përgjigja ka kuptim në problem.\n\nShembull: "Një numër i shumëzuar me 3 dhe i shtuar 7 jep 31." Shënojmë numrin x: 3x + 7 = 31. Zgjidhja: 3x = 24, x = 8.\n\nModeli me shirita ndihmon: tri pjesë të barabarta x dhe një pjesë 7 bëjnë 31. Pa 7 mbeten 24, pra secila pjesë është 8.',
        keyPoints: ['1) x = e panjohura  2) ekuacioni  3) zgjidhja  4) kontrolli', 'Fjalët "i shumëzuar me", "i shtuar", "jep" përkthehen në ·, +, =.', 'Përgjigjja jepet me njësi dhe me fjali.'],
        examples: [
          { example: 'Një numër i shumëzuar me 3 dhe i shtuar 7 jep 31. Cili është numri?', solution: '3x + 7 = 31 → 3x = 24 → x = 8. Kontroll: 3 · 8 + 7 = 31 ✓.' },
          { example: 'Babai është 3 herë më i vjetër se i biri. Bashkë kanë 48 vjet. Sa vjeç është i biri?', solution: 'I biri x, babai 3x: x + 3x = 48 → 4x = 48 → x = 12 vjeç.' },
        ],
        commonMistakes: [
          { mistake: 'Shkruhet ekuacioni pa e përcaktuar çfarë është x.', fix: 'Shkruani gjithmonë: "x = …" para ekuacionit.' },
        ],
        practice: [
          { problem: '4 fletore dhe një stilolaps 3 € kushtojnë 11 €. Sa kushton një fletore?', solution: '2 €', steps: ['4x + 3 = 11.', '4x = 8.', 'x = 2 €.'] },
          { problem: 'Perimetri i një katrori është 36 cm. Sa është brinja?', solution: '9 cm', steps: ['4a = 36.', 'a = 36 : 4 = 9 cm.'] },
          { problem: 'Shuma e dy numrave natyrorë të njëpasnjëshëm është 25. Cilët janë?', solution: '12 dhe 13', steps: ['x + (x + 1) = 25.', '2x + 1 = 25 → 2x = 24 → x = 12.', 'Numrat: 12 dhe 13.'] },
        ],
      },
      en: {
        title: 'Word problems with equations',
        objectives: ['Turn a word problem into an equation.', 'Solve the equation and check the answer in the problem.'],
        theory: 'To solve a problem with an equation: 1) call the unknown x; 2) write the equation from the words of the problem; 3) solve it; 4) check that the answer makes sense in the problem.\n\nExample: "A number multiplied by 3 and increased by 7 gives 31." Call the number x: 3x + 7 = 31. Solution: 3x = 24, x = 8.\n\nA bar model helps: three equal parts x and a part 7 make 31. Without the 7 there are 24 left, so each part is 8.',
        keyPoints: ['1) x = the unknown  2) equation  3) solve  4) check', '"multiplied by", "increased by", "gives" become ·, +, =.', 'Give the answer with units and in a sentence.'],
        examples: [
          { example: 'A number multiplied by 3 and increased by 7 gives 31. What is the number?', solution: '3x + 7 = 31 → 3x = 24 → x = 8. Check: 3 · 8 + 7 = 31 ✓.' },
          { example: 'A father is 3 times as old as his son. Together they are 48. How old is the son?', solution: 'Son x, father 3x: x + 3x = 48 → 4x = 48 → x = 12 years.' },
        ],
        commonMistakes: [
          { mistake: 'Writing an equation without saying what x is.', fix: 'Always write "x = …" before the equation.' },
        ],
        practice: [
          { problem: '4 notebooks and a €3 pen cost €11. How much does one notebook cost?', solution: '€2', steps: ['4x + 3 = 11.', '4x = 8.', 'x = €2.'] },
          { problem: 'The perimeter of a square is 36 cm. How long is a side?', solution: '9 cm', steps: ['4a = 36.', 'a = 36 ÷ 4 = 9 cm.'] },
          { problem: 'Two consecutive natural numbers add up to 25. What are they?', solution: '12 and 13', steps: ['x + (x + 1) = 25.', '2x + 1 = 25 → 2x = 24 → x = 12.', 'The numbers: 12 and 13.'] },
        ],
      },
      de: {
        title: 'Sachaufgaben mit Gleichungen',
        objectives: ['Eine Sachaufgabe in eine Gleichung übersetzen.', 'Die Gleichung lösen und die Antwort in der Aufgabe prüfen.'],
        theory: 'So löst man eine Aufgabe mit einer Gleichung: 1) die Unbekannte x nennen; 2) die Gleichung nach dem Text aufstellen; 3) lösen; 4) prüfen, ob die Antwort zur Aufgabe passt.\n\nBeispiel: „Eine Zahl mal 3, vermehrt um 7, ergibt 31.“ Die Zahl heißt x: 3x + 7 = 31. Lösung: 3x = 24, x = 8.\n\nEin Streifenmodell hilft: drei gleiche Teile x und ein Teil 7 ergeben 31. Ohne die 7 bleiben 24, also ist jeder Teil 8.',
        keyPoints: ['1) x = Unbekannte  2) Gleichung  3) lösen  4) prüfen', '„mal“, „vermehrt um“, „ergibt“ werden zu ·, +, =.', 'Antwort mit Einheit und als Satz geben.'],
        examples: [
          { example: 'Eine Zahl mal 3, vermehrt um 7, ergibt 31. Wie heißt die Zahl?', solution: '3x + 7 = 31 → 3x = 24 → x = 8. Probe: 3 · 8 + 7 = 31 ✓.' },
          { example: 'Ein Vater ist dreimal so alt wie sein Sohn. Zusammen sind sie 48 Jahre alt. Wie alt ist der Sohn?', solution: 'Sohn x, Vater 3x: x + 3x = 48 → 4x = 48 → x = 12 Jahre.' },
        ],
        commonMistakes: [
          { mistake: 'Eine Gleichung aufstellen, ohne zu sagen, wofür x steht.', fix: 'Immer zuerst „x = …“ notieren.' },
        ],
        practice: [
          { problem: '4 Hefte und ein Stift für 3 € kosten 11 €. Wie viel kostet ein Heft?', solution: '2 €', steps: ['4x + 3 = 11.', '4x = 8.', 'x = 2 €.'] },
          { problem: 'Der Umfang eines Quadrats ist 36 cm. Wie lang ist eine Seite?', solution: '9 cm', steps: ['4a = 36.', 'a = 36 : 4 = 9 cm.'] },
          { problem: 'Die Summe zweier aufeinanderfolgender natürlicher Zahlen ist 25. Wie heißen sie?', solution: '12 und 13', steps: ['x + (x + 1) = 25.', '2x + 1 = 25 → 2x = 24 → x = 12.', 'Die Zahlen: 12 und 13.'] },
        ],
      },
    },

    // ───────── 4. Inequalities
    {
      slug: 'g6-expressions-equations-inequalities',
      visuals: [{
        type: 'numberLine', min: 0, max: 8, step: 1,
        intervals: [{ from: null, to: 5, toOpen: true, color: 'primary' }],
        points: [{ x: 1, color: 'secondary' }, { x: 2, color: 'secondary' }, { x: 3, color: 'secondary' }, { x: 4, color: 'secondary' }],
        caption: alt('x < 5: rrethi bosh te 5 tregon që 5 nuk bën pjesë; numrat natyrorë 1, 2, 3, 4 janë zgjidhje.', 'x < 5: the open circle at 5 shows 5 is not included; the natural numbers 1, 2, 3, 4 are solutions.', 'x < 5: Der leere Kreis bei 5 zeigt, dass 5 nicht dazugehört; die natürlichen Zahlen 1, 2, 3, 4 sind Lösungen.'),
        alt: alt('Bosht numerik me zgjidhjen x < 5 dhe pikat 1, 2, 3, 4 të theksuara.', 'Number line showing x < 5 with the points 1, 2, 3, 4 highlighted.', 'Zahlenstrahl mit der Lösung x < 5 und den hervorgehobenen Punkten 1, 2, 3, 4.'),
      }],
      answers: {
        examples: [[['8 - 3', 5]], [['10 / 2', 5]]],
        practice: [[['2 + 4', 6]], [['15 / 3 - 1', 4]], [['floor(20 / 6)', 3]]],
      },
      al: {
        title: 'Inekuacionet',
        objectives: ['Të zgjidhni inekuacione të thjeshta.', 'Të gjeni zgjidhjet natyrore dhe t\'i paraqitni në bosht.'],
        theory: 'Inekuacioni është si ekuacioni, por në vend të "=" ka <, >, ≤ ose ≥. P.sh. x + 3 < 8 do të thotë "x plus 3 është më pak se 8".\n\nE zgjidhim njësoj si ekuacionin, me veprime të kundërta: x + 3 < 8 → x < 5. Inekuacioni zakonisht ka shumë zgjidhje: ndër numrat natyrorë janë 1, 2, 3, 4.\n\nNë boshtin numerik, rrethi bosh tregon që numri nuk përfshihet (< ose >), rrethi i mbushur që përfshihet (≤ ose ≥). "Të paktën" do të thotë ≥, "së shumti" do të thotë ≤.',
        keyPoints: ['Zgjidhet me veprime të kundërta, si ekuacioni.', '< > → rreth bosh; ≤ ≥ → rreth i mbushur.', '"të paktën" = ≥;  "së shumti" = ≤'],
        examples: [
          { example: 'Zgjidhni x + 3 < 8 dhe gjeni zgjidhjet natyrore.', solution: 'x < 8 − 3, pra x < 5. Zgjidhjet natyrore: 1, 2, 3, 4.' },
          { example: 'Zgjidhni 2x ≤ 10.', solution: 'x ≤ 10 : 2, pra x ≤ 5. Edhe 5 është zgjidhje.' },
        ],
        commonMistakes: [
          { mistake: 'Te x < 5 numërohet edhe 5 si zgjidhje.', fix: '"<" nuk e përfshin numrin; vetëm "≤" e përfshin.' },
        ],
        practice: [
          { problem: 'Zgjidhni x − 4 > 2.', solution: 'x > 6', steps: ['Shtojmë 4: x > 2 + 4.', 'x > 6.'] },
          { problem: 'Sa zgjidhje natyrore ka 3x < 15?', solution: '4 (1, 2, 3, 4)', steps: ['x < 15 : 3 = 5.', 'Numrat natyrorë më të vegjël se 5: 1, 2, 3, 4.'] },
          { problem: 'Keni 20 € dhe një biletë kushton 6 €. Sa bileta mund të blini së shumti?', solution: '3 bileta', steps: ['6x ≤ 20.', 'x ≤ 3,33…', 'Numri më i madh natyror: 3.'] },
        ],
      },
      en: {
        title: 'Inequalities',
        objectives: ['Solve simple inequalities.', 'Find the natural-number solutions and show them on the number line.'],
        theory: 'An inequality is like an equation, but instead of "=" it has <, >, ≤ or ≥. For example x + 3 < 8 means "x plus 3 is less than 8".\n\nWe solve it like an equation, with inverse operations: x + 3 < 8 → x < 5. An inequality usually has many solutions: among the natural numbers they are 1, 2, 3, 4.\n\nOn the number line, an open circle shows the number is not included (< or >), a filled circle that it is included (≤ or ≥). "At least" means ≥, "at most" means ≤.',
        keyPoints: ['Solve with inverse operations, like an equation.', '< > → open circle; ≤ ≥ → filled circle.', '"at least" = ≥;  "at most" = ≤'],
        examples: [
          { example: 'Solve x + 3 < 8 and find the natural-number solutions.', solution: 'x < 8 − 3, so x < 5. Natural solutions: 1, 2, 3, 4.' },
          { example: 'Solve 2x ≤ 10.', solution: 'x ≤ 10 ÷ 2, so x ≤ 5. 5 is a solution too.' },
        ],
        commonMistakes: [
          { mistake: 'Counting 5 as a solution of x < 5.', fix: '"<" does not include the number; only "≤" does.' },
        ],
        practice: [
          { problem: 'Solve x − 4 > 2.', solution: 'x > 6', steps: ['Add 4: x > 2 + 4.', 'x > 6.'] },
          { problem: 'How many natural-number solutions does 3x < 15 have?', solution: '4 (1, 2, 3, 4)', steps: ['x < 15 ÷ 3 = 5.', 'Natural numbers less than 5: 1, 2, 3, 4.'] },
          { problem: 'You have €20 and a ticket costs €6. What is the greatest number of tickets you can buy?', solution: '3 tickets', steps: ['6x ≤ 20.', 'x ≤ 3.33…', 'Greatest natural number: 3.'] },
        ],
      },
      de: {
        title: 'Ungleichungen',
        objectives: ['Einfache Ungleichungen lösen.', 'Die natürlichen Lösungen bestimmen und am Zahlenstrahl darstellen.'],
        theory: 'Eine Ungleichung ist wie eine Gleichung, nur steht statt „=“ eines der Zeichen <, >, ≤ oder ≥. Zum Beispiel bedeutet x + 3 < 8 „x plus 3 ist kleiner als 8“.\n\nMan löst sie wie eine Gleichung mit Umkehrrechnungen: x + 3 < 8 → x < 5. Eine Ungleichung hat meist viele Lösungen: bei den natürlichen Zahlen sind es 1, 2, 3, 4.\n\nAm Zahlenstrahl zeigt ein leerer Kreis, dass die Zahl nicht dazugehört (< oder >), ein voller Kreis, dass sie dazugehört (≤ oder ≥). „Mindestens“ bedeutet ≥, „höchstens“ bedeutet ≤.',
        keyPoints: ['Mit Umkehrrechnungen lösen, wie eine Gleichung.', '< > → leerer Kreis; ≤ ≥ → voller Kreis.', '„mindestens“ = ≥;  „höchstens“ = ≤'],
        examples: [
          { example: 'Lösen Sie x + 3 < 8 und bestimmen Sie die natürlichen Lösungen.', solution: 'x < 8 − 3, also x < 5. Natürliche Lösungen: 1, 2, 3, 4.' },
          { example: 'Lösen Sie 2x ≤ 10.', solution: 'x ≤ 10 : 2, also x ≤ 5. Auch 5 ist eine Lösung.' },
        ],
        commonMistakes: [
          { mistake: 'Bei x < 5 auch 5 als Lösung zählen.', fix: '„<“ schließt die Zahl aus; nur „≤“ schließt sie ein.' },
        ],
        practice: [
          { problem: 'Lösen Sie x − 4 > 2.', solution: 'x > 6', steps: ['4 addieren: x > 2 + 4.', 'x > 6.'] },
          { problem: 'Wie viele natürliche Lösungen hat 3x < 15?', solution: '4 (1, 2, 3, 4)', steps: ['x < 15 : 3 = 5.', 'Natürliche Zahlen kleiner als 5: 1, 2, 3, 4.'] },
          { problem: 'Sie haben 20 €, eine Karte kostet 6 €. Wie viele Karten können Sie höchstens kaufen?', solution: '3 Karten', steps: ['6x ≤ 20.', 'x ≤ 3,33…', 'Größte natürliche Zahl: 3.'] },
        ],
      },
    },
  ],
};
