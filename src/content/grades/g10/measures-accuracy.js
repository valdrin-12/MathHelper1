// Grade 10 · Theme 9: Measures and accuracy (March–April)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g10-measures-accuracy',
  i18n: {
    al: { title: 'Matjet dhe saktësia', description: 'Rrumbullakimi në dhjetore dhe në shifra domethënëse, përafrimi, makina llogaritëse dhe kufijtë e saktësisë.' },
    en: { title: 'Measures and accuracy', description: 'Rounding to decimal places and significant figures, estimating, using a calculator and upper and lower bounds.' },
    de: { title: 'Messen und Genauigkeit', description: 'Runden auf Dezimalstellen und geltende Ziffern, Überschlagen, Taschenrechner sowie obere und untere Schranken.' },
  },
  lessons: [
    // ───────── 1. Rounding and estimating
    {
      slug: 'g10-measures-accuracy-rounding-estimating',
      visuals: [{
        type: 'numberLine', min: 3.4, max: 3.5, step: 0.01, labelEvery: 5,
        points: [{ x: 3.46, label: '3,46' }, { x: 3.5, label: '3,5', below: true, color: 'success' }],
        caption: alt('3,46 është më afër 3,5 se 3,4: në 1 dhjetore 3,46 ≈ 3,5.', '3.46 is closer to 3.5 than to 3.4: to 1 decimal place 3.46 ≈ 3.5.', '3,46 liegt näher an 3,5 als an 3,4: auf 1 Dezimalstelle 3,46 ≈ 3,5.'),
        alt: alt('Boshti numerik nga 3,4 deri 3,5 me pikën 3,46 dhe vlerën e rrumbullakuar 3,5.', 'Number line from 3.4 to 3.5 with the point 3.46 and the rounded value 3.5.', 'Zahlenstrahl von 3,4 bis 3,5 mit dem Punkt 3,46 und dem gerundeten Wert 3,5.'),
      }],
      answers: {
        examples: [[['round(0.004637, 4)', 0.0046]], [['40 * 4 / 0.2', 800]]],
        practice: [[['round(3456.78 / 10) * 10', 3460]], [['round(7.0951, 2)', 7.1, 0, '7.10']], [['7 * 3', 21]]],
      },
      al: {
        title: 'Rrumbullakimi dhe përafrimi',
        objectives: ['Të rrumbullakoni në një numër të dhënë dhjetoresh ose shifrash domethënëse.', 'Të përafroni rezultatin duke rrumbullakuar çdo numër në 1 shifër domethënëse.'],
        theory: 'Për të rrumbullakuar shikojmë shifrën pas vendit të fundit që mbajmë: nëse është 5 ose më shumë, e rrisim shifrën e fundit me 1; përndryshe e lëmë.\n\nShifrat domethënëse (sh.d.) numërohen nga shifra e parë jo zero: 0,004637 → shifra e parë domethënëse është 4; në 2 sh.d. → 0,0046. Zerot në fund të numrave të plotë mbajnë vendin: 3 456,78 në 3 sh.d. → 3 460.\n\nPër përafrim rrumbullakojmë çdo numër në 1 sh.d. dhe llogarisim me mend: 38,7 · 4,12 : 0,198 ≈ 40 · 4 : 0,2 = 800. Kështu e kontrollojmë nëse rezultati i makinës është i arsyeshëm.',
        keyPoints: ['Shifra pas vendit të fundit ≥ 5 → rritet', 'Sh.d. numërohen nga shifra e parë jo zero', 'Përafrimi: çdo numër në 1 sh.d.'],
        examples: [
          { example: 'Rrumbullakoni 0,004637 në 2 shifra domethënëse.', solution: 'Shifrat domethënëse janë 4 dhe 6; pas tyre vjen 3 < 5 → 0,0046.' },
          { example: 'Përafroni 38,7 · 4,12 : 0,198.', solution: '≈ 40 · 4 : 0,2 = 160 : 0,2 = 800.' },
        ],
        commonMistakes: [
          { mistake: '0,004637 në 2 sh.d. shkruhet 0,00.', fix: 'Zerot në fillim nuk numërohen; fillohet nga 4 → 0,0046.' },
          { mistake: '7,0951 në 2 dhjetore shkruhet 7,1.', fix: 'Duhen 2 dhjetore, prandaj mbetet zeroja: 7,10.' },
        ],
        practice: [
          { problem: 'Rrumbullakoni 3 456,78 në 3 shifra domethënëse.', solution: '3 460', steps: ['Mbajmë 3, 4, 5; shifra tjetër është 6 ≥ 5.', '5 bëhet 6 dhe zeroja mban vendin: 3 460.'] },
          { problem: 'Rrumbullakoni 7,0951 në 2 dhjetore.', solution: '7,10', steps: ['Shifra e tretë dhjetore është 5 → rritet e dyta.', '7,09 → 7,10 (zeroja mbetet).'] },
          { problem: 'Përafroni √48,6 · 2,9.', solution: '≈ 21', steps: ['√48,6 ≈ √49 = 7 dhe 2,9 ≈ 3.', '7 · 3 = 21.'] },
        ],
      },
      en: {
        title: 'Rounding and estimating',
        objectives: ['Round to a given number of decimal places or significant figures.', 'Estimate a result by rounding each number to 1 significant figure.'],
        theory: 'To round, look at the digit after the last place you keep: if it is 5 or more, increase the last digit by 1; otherwise leave it.\n\nSignificant figures (s.f.) are counted from the first non-zero digit: in 0.004637 the first significant figure is 4; to 2 s.f. → 0.0046. Zeros at the end of a whole number keep the place value: 3 456.78 to 3 s.f. → 3 460.\n\nTo estimate, round every number to 1 s.f. and work it out mentally: 38.7 · 4.12 ÷ 0.198 ≈ 40 · 4 ÷ 0.2 = 800. This checks whether a calculator answer is sensible.',
        keyPoints: ['Next digit ≥ 5 → round up', 'S.f. are counted from the first non-zero digit', 'Estimating: every number to 1 s.f.'],
        examples: [
          { example: 'Round 0.004637 to 2 significant figures.', solution: 'The significant figures are 4 and 6; the next digit is 3 < 5 → 0.0046.' },
          { example: 'Estimate 38.7 · 4.12 ÷ 0.198.', solution: '≈ 40 · 4 ÷ 0.2 = 160 ÷ 0.2 = 800.' },
        ],
        commonMistakes: [
          { mistake: '0.004637 to 2 s.f. is written 0.00.', fix: 'Leading zeros do not count; start at the 4 → 0.0046.' },
          { mistake: '7.0951 to 2 decimal places is written 7.1.', fix: '2 decimal places are needed, so the zero stays: 7.10.' },
        ],
        practice: [
          { problem: 'Round 3 456.78 to 3 significant figures.', solution: '3 460', steps: ['Keep 3, 4, 5; the next digit is 6 ≥ 5.', 'The 5 becomes 6 and a zero keeps the place: 3 460.'] },
          { problem: 'Round 7.0951 to 2 decimal places.', solution: '7.10', steps: ['The third decimal is 5 → the second goes up.', '7.09 → 7.10 (the zero stays).'] },
          { problem: 'Estimate √48.6 · 2.9.', solution: '≈ 21', steps: ['√48.6 ≈ √49 = 7 and 2.9 ≈ 3.', '7 · 3 = 21.'] },
        ],
      },
      de: {
        title: 'Runden und Überschlagen',
        objectives: ['Auf eine gegebene Anzahl von Dezimalstellen oder geltenden Ziffern runden.', 'Ein Ergebnis überschlagen, indem jede Zahl auf 1 geltende Ziffer gerundet wird.'],
        theory: 'Beim Runden schaut man auf die Ziffer nach der letzten Stelle, die man behält: Ist sie 5 oder größer, wird aufgerundet, sonst abgerundet.\n\nGeltende Ziffern werden ab der ersten Ziffer gezählt, die nicht 0 ist: Bei 0,004637 ist 4 die erste geltende Ziffer; auf 2 geltende Ziffern → 0,0046. Nullen am Ende einer ganzen Zahl halten die Stelle: 3 456,78 auf 3 geltende Ziffern → 3 460.\n\nBeim Überschlag rundet man jede Zahl auf 1 geltende Ziffer und rechnet im Kopf: 38,7 · 4,12 : 0,198 ≈ 40 · 4 : 0,2 = 800. So prüft man, ob das Ergebnis des Taschenrechners sinnvoll ist.',
        keyPoints: ['Folgeziffer ≥ 5 → aufrunden', 'Geltende Ziffern zählen ab der ersten Ziffer ≠ 0', 'Überschlag: jede Zahl auf 1 geltende Ziffer'],
        examples: [
          { example: 'Runden Sie 0,004637 auf 2 geltende Ziffern.', solution: 'Die geltenden Ziffern sind 4 und 6; danach folgt 3 < 5 → 0,0046.' },
          { example: 'Überschlagen Sie 38,7 · 4,12 : 0,198.', solution: '≈ 40 · 4 : 0,2 = 160 : 0,2 = 800.' },
        ],
        commonMistakes: [
          { mistake: '0,004637 auf 2 geltende Ziffern wird 0,00 geschrieben.', fix: 'Führende Nullen zählen nicht; man beginnt bei der 4 → 0,0046.' },
          { mistake: '7,0951 auf 2 Dezimalstellen wird 7,1 geschrieben.', fix: 'Es sind 2 Dezimalstellen verlangt, die Null bleibt: 7,10.' },
        ],
        practice: [
          { problem: 'Runden Sie 3 456,78 auf 3 geltende Ziffern.', solution: '3 460', steps: ['3, 4, 5 bleiben; die nächste Ziffer ist 6 ≥ 5.', 'Aus 5 wird 6, eine Null hält die Stelle: 3 460.'] },
          { problem: 'Runden Sie 7,0951 auf 2 Dezimalstellen.', solution: '7,10', steps: ['Die dritte Dezimalstelle ist 5 → die zweite wird aufgerundet.', '7,09 → 7,10 (die Null bleibt).'] },
          { problem: 'Überschlagen Sie √48,6 · 2,9.', solution: '≈ 21', steps: ['√48,6 ≈ √49 = 7 und 2,9 ≈ 3.', '7 · 3 = 21.'] },
        ],
      },
    },
    // ───────── 2. Calculator
    {
      slug: 'g10-measures-accuracy-calculator',
      noVisual: 'Calculator key sequences are shown step by step in the worked examples.',
      answers: {
        examples: [[['(4.8 + 3.6) / (2.1 * 0.5)', 8]], [['sqrt(5.2^2 + 3.9^2)', 6.5]]],
        practice: [[['3e5 * 4e-2', 12000, 0, '1.2 · 10⁴']], [['round(17.3 / (6.2 - 1.8), 2)', 3.93]], [['round(1.05^10, 3)', 1.629]]],
      },
      al: {
        title: 'Makina llogaritëse',
        objectives: ['Të përdorni kllapat, fuqitë, rrënjët dhe tastin EXP në makinën llogaritëse.', 'Të kontrolloni rezultatin me përafrim dhe ta rrumbullakoni siç kërkohet.'],
        theory: 'Makina llogaritëse e zbaton radhën e veprimeve, prandaj numëruesi dhe emëruesi i një thyese futen në kllapa: (4,8 + 3,6) : (2,1 · 0,5). Pa kllapa makina llogarit 4,8 + 3,6 : 2,1 · 0,5, që është tjetër gjë.\n\nPër fuqi përdoret tasti xʸ (ose ^), për rrënjë √. Numrat në formë standarde futen me tastin EXP (×10ˣ): 3 · 10⁵ shkruhet 3 EXP 5, kurse 4 · 10⁻² shkruhet 4 EXP (−) 2.\n\nRezultatin e kontrollojmë me përafrim dhe e rrumbullakojmë vetëm në fund, jo në hapat e ndërmjetëm.',
        keyPoints: ['Thyesa → (numëruesi) : (emëruesi)', 'Forma standarde: tasti EXP', 'Rrumbullakojmë vetëm në fund'],
        examples: [
          { example: 'Llogaritni (4,8 + 3,6) / (2,1 · 0,5).', solution: '( 4,8 + 3,6 ) : ( 2,1 · 0,5 ) = 8,4 : 1,05 = 8.' },
          { example: 'Llogaritni √(5,2² + 3,9²).', solution: '√(27,04 + 15,21) = √42,25 = 6,5.' },
        ],
        commonMistakes: [
          { mistake: 'Shtypet 4,8 + 3,6 : 2,1 · 0,5 pa kllapa.', fix: 'Makina pjesëton e shumëzon së pari; vendosni kllapa rreth numëruesit dhe emëruesit.' },
          { mistake: '4 · 10⁻² futet si 4 · 10 − 2.', fix: 'Përdorni EXP dhe shenjën (−): 4 EXP (−) 2 = 0,04.' },
        ],
        practice: [
          { problem: 'Llogaritni (3 · 10⁵) · (4 · 10⁻²) dhe shkruajeni në formë standarde.', solution: '1,2 · 10⁴', steps: ['3 EXP 5 · 4 EXP (−) 2 = 12 000.', '12 000 = 1,2 · 10⁴.'] },
          { problem: 'Llogaritni 17,3 / (6,2 − 1,8) në 2 dhjetore.', solution: '3,93', steps: ['17,3 : 4,4 = 3,93181…', '≈ 3,93.'] },
          { problem: 'Llogaritni 1,05¹⁰ në 3 dhjetore.', solution: '1,629', steps: ['1,05 xʸ 10 = 1,62889…', '≈ 1,629.'] },
        ],
      },
      en: {
        title: 'Using a calculator',
        objectives: ['Use brackets, powers, roots and the EXP key on a calculator.', 'Check a result by estimating and round it as asked.'],
        theory: 'A calculator follows the order of operations, so the numerator and denominator of a fraction go in brackets: (4.8 + 3.6) ÷ (2.1 · 0.5). Without brackets it works out 4.8 + 3.6 ÷ 2.1 · 0.5, which is something else.\n\nUse the xʸ (or ^) key for powers and √ for roots. Numbers in standard form are entered with the EXP (×10ˣ) key: 3 · 10⁵ is 3 EXP 5, and 4 · 10⁻² is 4 EXP (−) 2.\n\nCheck the answer with an estimate and round only at the end, not in the middle steps.',
        keyPoints: ['Fraction → (numerator) ÷ (denominator)', 'Standard form: the EXP key', 'Round only at the end'],
        examples: [
          { example: 'Work out (4.8 + 3.6) / (2.1 · 0.5).', solution: '( 4.8 + 3.6 ) ÷ ( 2.1 · 0.5 ) = 8.4 ÷ 1.05 = 8.' },
          { example: 'Work out √(5.2² + 3.9²).', solution: '√(27.04 + 15.21) = √42.25 = 6.5.' },
        ],
        commonMistakes: [
          { mistake: 'Keying in 4.8 + 3.6 ÷ 2.1 · 0.5 without brackets.', fix: 'The calculator divides and multiplies first; put brackets round the numerator and the denominator.' },
          { mistake: 'Entering 4 · 10⁻² as 4 · 10 − 2.', fix: 'Use EXP and the (−) key: 4 EXP (−) 2 = 0.04.' },
        ],
        practice: [
          { problem: 'Work out (3 · 10⁵) · (4 · 10⁻²) and write it in standard form.', solution: '1.2 · 10⁴', steps: ['3 EXP 5 · 4 EXP (−) 2 = 12 000.', '12 000 = 1.2 · 10⁴.'] },
          { problem: 'Work out 17.3 / (6.2 − 1.8) to 2 decimal places.', solution: '3.93', steps: ['17.3 ÷ 4.4 = 3.93181…', '≈ 3.93.'] },
          { problem: 'Work out 1.05¹⁰ to 3 decimal places.', solution: '1.629', steps: ['1.05 xʸ 10 = 1.62889…', '≈ 1.629.'] },
        ],
      },
      de: {
        title: 'Der Taschenrechner',
        objectives: ['Klammern, Potenzen, Wurzeln und die EXP-Taste am Taschenrechner verwenden.', 'Ein Ergebnis mit einem Überschlag prüfen und wie verlangt runden.'],
        theory: 'Der Taschenrechner beachtet die Rechenreihenfolge, deshalb kommen Zähler und Nenner eines Bruchs in Klammern: (4,8 + 3,6) : (2,1 · 0,5). Ohne Klammern rechnet er 4,8 + 3,6 : 2,1 · 0,5, und das ist etwas anderes.\n\nFür Potenzen gibt es die Taste xʸ (oder ^), für Wurzeln √. Zahlen in wissenschaftlicher Schreibweise gibt man mit der Taste EXP (×10ˣ) ein: 3 · 10⁵ als 3 EXP 5, 4 · 10⁻² als 4 EXP (−) 2.\n\nDas Ergebnis prüft man mit einem Überschlag und rundet erst am Ende, nicht in Zwischenschritten.',
        keyPoints: ['Bruch → (Zähler) : (Nenner)', 'Wissenschaftliche Schreibweise: Taste EXP', 'Erst am Ende runden'],
        examples: [
          { example: 'Berechnen Sie (4,8 + 3,6) / (2,1 · 0,5).', solution: '( 4,8 + 3,6 ) : ( 2,1 · 0,5 ) = 8,4 : 1,05 = 8.' },
          { example: 'Berechnen Sie √(5,2² + 3,9²).', solution: '√(27,04 + 15,21) = √42,25 = 6,5.' },
        ],
        commonMistakes: [
          { mistake: 'Man tippt 4,8 + 3,6 : 2,1 · 0,5 ohne Klammern.', fix: 'Der Rechner rechnet Punkt vor Strich; setzen Sie Zähler und Nenner in Klammern.' },
          { mistake: '4 · 10⁻² wird als 4 · 10 − 2 eingegeben.', fix: 'EXP und die Vorzeichentaste (−) verwenden: 4 EXP (−) 2 = 0,04.' },
        ],
        practice: [
          { problem: 'Berechnen Sie (3 · 10⁵) · (4 · 10⁻²) und schreiben Sie das Ergebnis in wissenschaftlicher Schreibweise.', solution: '1,2 · 10⁴', steps: ['3 EXP 5 · 4 EXP (−) 2 = 12 000.', '12 000 = 1,2 · 10⁴.'] },
          { problem: 'Berechnen Sie 17,3 / (6,2 − 1,8) auf 2 Dezimalstellen.', solution: '3,93', steps: ['17,3 : 4,4 = 3,93181…', '≈ 3,93.'] },
          { problem: 'Berechnen Sie 1,05¹⁰ auf 3 Dezimalstellen.', solution: '1,629', steps: ['1,05 xʸ 10 = 1,62889…', '≈ 1,629.'] },
        ],
      },
    },
    // ───────── 3. Bounds
    {
      slug: 'g10-measures-accuracy-bounds',
      visuals: [{
        type: 'numberLine', min: 6.3, max: 6.5, step: 0.05, labelEvery: 1,
        points: [{ x: 6.4, label: '6,4', color: 'secondary' }],
        intervals: [{ from: 6.35, to: 6.45, toOpen: true, color: 'primary' }],
        caption: alt('Çdo gjatësi nga 6,35 (përfshirë) deri 6,45 (pa e përfshirë) rrumbullakohet në 6,4.', 'Every length from 6.35 (included) up to 6.45 (not included) rounds to 6.4.', 'Jede Länge von 6,35 (einschließlich) bis 6,45 (ausschließlich) wird auf 6,4 gerundet.'),
        alt: alt('Boshti numerik nga 6,3 deri 6,5; intervali nga 6,35 me pikë të mbushur deri 6,45 me pikë të zbrazët, rreth vlerës 6,4.', 'Number line from 6.3 to 6.5; the interval from 6.35 (filled dot) to 6.45 (open dot) around 6.4.', 'Zahlenstrahl von 6,3 bis 6,5; Intervall von 6,35 (gefüllter Punkt) bis 6,45 (offener Punkt) um 6,4.'),
      }],
      answers: {
        examples: [[['6.4 - 0.05', 6.35], ['6.4 + 0.05', 6.45]], [['8.5 * 5.5', 46.75], ['7.5 * 4.5', 33.75]]],
        practice: [[['250 - 5', 245], ['250 + 5', 255]], [['12.5 - 6.5', 6]], [['round(100.5 / 12.55, 2)', 8.01]]],
      },
      al: {
        title: 'Kufijtë e saktësisë',
        objectives: ['Të gjeni kufirin e poshtëm dhe të sipërm të një vlere të rrumbullakuar.', 'Të llogaritni kufijtë e një rezultati (shumë, ndryshim, prodhim, herës).'],
        theory: 'Një vlerë e rrumbullakuar ka gabim deri në gjysmën e njësisë së rrumbullakimit. 6,4 cm në 1 dhjetore: njësia është 0,1, gjysma 0,05 → 6,35 ≤ l < 6,45. Kufiri i sipërm 6,45 nuk përfshihet, sepse 6,45 rrumbullakohet në 6,5.\n\nPër rezultate: prodhimi dhe shuma janë më të mëdha kur marrim kufijtë e sipërm. Te ndryshimi a − b dhe herësi a : b, kufiri i sipërm del me a të sipërm dhe b të poshtëm.\n\nShembull: drejtkëndëshi 8 cm × 5 cm (në cm më të afërt) ka syprinë midis 7,5 · 4,5 = 33,75 cm² dhe 8,5 · 5,5 = 46,75 cm².',
        keyPoints: ['Kufijtë = vlera ± gjysma e njësisë', 'Kufiri i poshtëm ≤ x < kufiri i sipërm', 'a − b dhe a : b më të mëdha: a i sipërm, b i poshtëm'],
        examples: [
          { example: 'Gjatësia 6,4 cm është rrumbullakuar në 1 dhjetore. Cilët janë kufijtë?', solution: 'Gjysma e 0,1 është 0,05: 6,35 ≤ l < 6,45.' },
          { example: 'Drejtkëndëshi ka brinjët 8 cm dhe 5 cm (në cm më të afërt). Në cilin interval është syprina?', solution: 'E sipërmja: 8,5 · 5,5 = 46,75 cm²; e poshtmja: 7,5 · 4,5 = 33,75 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Kufiri i sipërm i 6,4 shkruhet 6,44 ose 6,449.', fix: 'Kufiri i sipërm është 6,45, por vetë 6,45 nuk përfshihet (shenja <).' },
          { mistake: 'Kufiri i sipërm i a − b llogaritet me të dy kufijtë e sipërm.', fix: 'Ndryshimi më i madh: a i sipërm minus b i poshtëm.' },
        ],
        practice: [
          { problem: 'Masa 250 g është rrumbullakuar në 10 g më të afërt. Cilët janë kufijtë?', solution: '245 ≤ m < 255', steps: ['Gjysma e 10 g është 5 g.', '250 − 5 = 245 dhe 250 + 5 = 255.'] },
          { problem: 'a = 12 dhe b = 7, të dyja në njësi më të afërt. Sa është kufiri i sipërm i a − b?', solution: '6', steps: ['a i sipërm 12,5; b i poshtëm 6,5.', '12,5 − 6,5 = 6.'] },
          { problem: 'Një vrapues bën 100 m (në metër më të afërt) për 12,6 s (në 0,1 s më të afërt). Sa është kufiri i sipërm i shpejtësisë, në 2 dhjetore?', solution: '≈ 8,01 m/s', steps: ['Rruga e sipërme 100,5 m, koha e poshtme 12,55 s.', '100,5 : 12,55 ≈ 8,01 m/s.'] },
        ],
      },
      en: {
        title: 'Upper and lower bounds',
        objectives: ['Find the lower and upper bound of a rounded value.', 'Work out the bounds of a result (sum, difference, product, quotient).'],
        theory: 'A rounded value can be out by up to half of the rounding unit. 6.4 cm to 1 decimal place: the unit is 0.1, half of it is 0.05 → 6.35 ≤ l < 6.45. The upper bound 6.45 is not included, because 6.45 rounds to 6.5.\n\nFor results: a product and a sum are largest with both upper bounds. For a difference a − b and a quotient a ÷ b, the upper bound uses the upper bound of a and the lower bound of b.\n\nExample: a rectangle 8 cm × 5 cm (to the nearest cm) has an area between 7.5 · 4.5 = 33.75 cm² and 8.5 · 5.5 = 46.75 cm².',
        keyPoints: ['Bounds = value ± half the unit', 'Lower bound ≤ x < upper bound', 'Largest a − b and a ÷ b: upper a, lower b'],
        examples: [
          { example: 'A length of 6.4 cm has been rounded to 1 decimal place. What are the bounds?', solution: 'Half of 0.1 is 0.05: 6.35 ≤ l < 6.45.' },
          { example: 'A rectangle has sides 8 cm and 5 cm (to the nearest cm). Between which values is the area?', solution: 'Upper: 8.5 · 5.5 = 46.75 cm²; lower: 7.5 · 4.5 = 33.75 cm².' },
        ],
        commonMistakes: [
          { mistake: 'The upper bound of 6.4 is written 6.44 or 6.449.', fix: 'The upper bound is 6.45, but 6.45 itself is not included (the < sign).' },
          { mistake: 'The upper bound of a − b is worked out with both upper bounds.', fix: 'The largest difference: upper a minus lower b.' },
        ],
        practice: [
          { problem: 'A mass of 250 g is rounded to the nearest 10 g. What are the bounds?', solution: '245 ≤ m < 255', steps: ['Half of 10 g is 5 g.', '250 − 5 = 245 and 250 + 5 = 255.'] },
          { problem: 'a = 12 and b = 7, both to the nearest whole number. What is the upper bound of a − b?', solution: '6', steps: ['Upper a 12.5; lower b 6.5.', '12.5 − 6.5 = 6.'] },
          { problem: 'A runner covers 100 m (to the nearest metre) in 12.6 s (to the nearest 0.1 s). What is the upper bound of the speed, to 2 decimal places?', solution: '≈ 8.01 m/s', steps: ['Upper distance 100.5 m, lower time 12.55 s.', '100.5 ÷ 12.55 ≈ 8.01 m/s.'] },
        ],
      },
      de: {
        title: 'Fehlerschranken',
        objectives: ['Die untere und obere Schranke eines gerundeten Werts bestimmen.', 'Die Schranken eines Ergebnisses (Summe, Differenz, Produkt, Quotient) berechnen.'],
        theory: 'Ein gerundeter Wert kann um bis zur Hälfte der Rundungseinheit abweichen. 6,4 cm auf 1 Dezimalstelle: Die Einheit ist 0,1, die Hälfte 0,05 → 6,35 ≤ l < 6,45. Die obere Schranke 6,45 gehört nicht dazu, weil 6,45 auf 6,5 gerundet wird.\n\nFür Ergebnisse gilt: Produkt und Summe sind mit beiden oberen Schranken am größten. Bei der Differenz a − b und dem Quotienten a : b nimmt man für die obere Schranke a oben und b unten.\n\nBeispiel: Ein Rechteck 8 cm × 5 cm (auf ganze cm gerundet) hat einen Flächeninhalt zwischen 7,5 · 4,5 = 33,75 cm² und 8,5 · 5,5 = 46,75 cm².',
        keyPoints: ['Schranken = Wert ± halbe Einheit', 'Untere Schranke ≤ x < obere Schranke', 'a − b und a : b am größten: a oben, b unten'],
        examples: [
          { example: 'Eine Länge von 6,4 cm ist auf 1 Dezimalstelle gerundet. Wie lauten die Schranken?', solution: 'Die Hälfte von 0,1 ist 0,05: 6,35 ≤ l < 6,45.' },
          { example: 'Ein Rechteck hat die Seiten 8 cm und 5 cm (auf ganze cm gerundet). Zwischen welchen Werten liegt der Flächeninhalt?', solution: 'Oben: 8,5 · 5,5 = 46,75 cm²; unten: 7,5 · 4,5 = 33,75 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Die obere Schranke von 6,4 wird als 6,44 oder 6,449 geschrieben.', fix: 'Die obere Schranke ist 6,45, aber 6,45 selbst gehört nicht dazu (Zeichen <).' },
          { mistake: 'Die obere Schranke von a − b wird mit beiden oberen Schranken berechnet.', fix: 'Größte Differenz: a oben minus b unten.' },
        ],
        practice: [
          { problem: 'Eine Masse von 250 g ist auf 10 g gerundet. Wie lauten die Schranken?', solution: '245 ≤ m < 255', steps: ['Die Hälfte von 10 g ist 5 g.', '250 − 5 = 245 und 250 + 5 = 255.'] },
          { problem: 'a = 12 und b = 7, beide auf ganze Zahlen gerundet. Wie groß ist die obere Schranke von a − b?', solution: '6', steps: ['a oben 12,5; b unten 6,5.', '12,5 − 6,5 = 6.'] },
          { problem: 'Ein Läufer schafft 100 m (auf ganze m gerundet) in 12,6 s (auf 0,1 s gerundet). Wie groß ist die obere Schranke der Geschwindigkeit auf 2 Dezimalstellen?', solution: '≈ 8,01 m/s', steps: ['Strecke oben 100,5 m, Zeit unten 12,55 s.', '100,5 : 12,55 ≈ 8,01 m/s.'] },
        ],
      },
    },
  ],
};
