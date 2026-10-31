// Grade 7 · Theme 1: Fractions and decimals (September–October)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g7-fractions-decimals',
  i18n: {
    al: { title: 'Thyesat dhe numrat dhjetorë', description: 'Thjeshtimi, emëruesi i përbashkët, krahasimi, mbledhja e zbritja, numrat periodikë dhe përqindja.' },
    en: { title: 'Fractions and decimals', description: 'Simplifying, common denominators, comparing, adding and subtracting, repeating decimals and percentages.' },
    de: { title: 'Brüche und Dezimalzahlen', description: 'Kürzen, Hauptnenner, Vergleichen, Addieren und Subtrahieren, periodische Dezimalzahlen und Prozente.' },
  },
  lessons: [
    // ───────── 1. Simplifying and expanding
    {
      slug: 'g7-fractions-decimals-simplify-expand',
      visuals: [{
        type: 'fractionBar', bars: [{ parts: 4, filled: 3 }, { parts: 8, filled: 6, color: 'secondary' }, { parts: 12, filled: 9, color: 'success' }],
        caption: alt('3/4 = 6/8 = 9/12: zgjerim me 2 dhe me 3.', '3/4 = 6/8 = 9/12: expanding by 2 and by 3.', '3/4 = 6/8 = 9/12: mit 2 und mit 3 erweitert.'),
        alt: alt('Tre shirita me të njëjtën pjesë të ngjyrosur: 3/4, 6/8 dhe 9/12.', 'Three bars with the same part shaded: 3/4, 6/8 and 9/12.', 'Drei Streifen mit gleich großem gefärbtem Teil: 3/4, 6/8 und 9/12.'),
      }],
      answers: {
        examples: [[['36/48', '3/4']], [['5 * 7', 35]]],
        practice: [[['42/56', '3/4']], [['7 * 5', 35]], [['12/18', '2/3']]],
      },
      al: {
        title: 'Thjeshtimi dhe zgjerimi',
        objectives: ['Të thjeshtoni një thyesë deri në trajtën e pathjeshtueshme.', 'Të zgjeroni një thyesë në një emërues të dhënë.'],
        theory: 'Vlera e thyesës nuk ndryshon kur numëruesin dhe emëruesin i shumëzojmë ose i pjesëtojmë me të njëjtin numër (jo zero). Shumëzimi quhet zgjerim, pjesëtimi thjeshtim.\n\nPër të thjeshtuar me një hap, pjesëtojmë me PMP e numëruesit dhe emëruesit: 36/48, PMP = 12, pra 36/48 = 3/4. Thyesa është e pathjeshtueshme kur PMP është 1.\n\nPër të zgjeruar në një emërues të dhënë, gjejmë sa herë hyn emëruesi i vjetër te i riu dhe shumëzojmë numëruesin me po aq: 5/6 = ?/42 → 42 : 6 = 7, pra 35/42.',
        keyPoints: ['a/b = (a · k)/(b · k) = (a : k)/(b : k), k ≠ 0', 'Thjeshtim me një hap: pjesëtoni me PMP.', 'E pathjeshtueshme: PMP(numërues, emërues) = 1.'],
        examples: [
          { example: 'Thjeshtoni 36/48.', solution: 'PMP(36; 48) = 12. 36 : 12 = 3, 48 : 12 = 4, pra 3/4.' },
          { example: 'Zgjeroni 5/6 në thyesë me emërues 42.', solution: '42 : 6 = 7; 5 · 7 = 35, pra 5/6 = 35/42.' },
        ],
        commonMistakes: [
          { mistake: 'Thjeshtohet vetëm një pjesë: 36/48 = 36/4.', fix: 'Numëruesi dhe emëruesi pjesëtohen gjithmonë me të njëjtin numër.' },
          { mistake: 'Thjeshtohet me një pjesëtues të vogël dhe ndalet (36/48 = 18/24).', fix: 'Kontrolloni nëse ka ende faktor të përbashkët, ose pjesëtoni menjëherë me PMP.' },
        ],
        practice: [
          { problem: 'Thjeshtoni 42/56.', solution: '3/4', steps: ['PMP(42; 56) = 14.', '42 : 14 = 3, 56 : 14 = 4.'] },
          { problem: 'Gjeni x: 7/9 = x/45.', solution: 'x = 35', steps: ['45 : 9 = 5.', 'x = 7 · 5 = 35.'] },
          { problem: 'A është 12/18 e pathjeshtueshme? Nëse jo, thjeshtojeni.', solution: 'Jo; 12/18 = 2/3.', steps: ['PMP(12; 18) = 6 ≠ 1.', '12 : 6 = 2, 18 : 6 = 3.'] },
        ],
      },
      en: {
        title: 'Simplifying and expanding',
        objectives: ['Simplify a fraction to its simplest form.', 'Expand a fraction to a given denominator.'],
        theory: 'The value of a fraction does not change when the numerator and denominator are multiplied or divided by the same (non-zero) number. Multiplying is called expanding, dividing is called simplifying.\n\nTo simplify in one step, divide by the GCD of the numerator and denominator: 36/48, GCD = 12, so 36/48 = 3/4. A fraction is in simplest form when the GCD is 1.\n\nTo expand to a given denominator, find how many times the old denominator goes into the new one and multiply the numerator by the same number: 5/6 = ?/42 → 42 ÷ 6 = 7, so 35/42.',
        keyPoints: ['a/b = (a · k)/(b · k) = (a ÷ k)/(b ÷ k), k ≠ 0', 'One-step simplifying: divide by the GCD.', 'Simplest form: GCD(numerator, denominator) = 1.'],
        examples: [
          { example: 'Simplify 36/48.', solution: 'GCD(36, 48) = 12. 36 ÷ 12 = 3, 48 ÷ 12 = 4, so 3/4.' },
          { example: 'Expand 5/6 to a fraction with denominator 42.', solution: '42 ÷ 6 = 7; 5 · 7 = 35, so 5/6 = 35/42.' },
        ],
        commonMistakes: [
          { mistake: 'Simplifying only one part: 36/48 = 36/4.', fix: 'Always divide the numerator and the denominator by the same number.' },
          { mistake: 'Dividing by a small factor and stopping (36/48 = 18/24).', fix: 'Check for a remaining common factor, or divide by the GCD straight away.' },
        ],
        practice: [
          { problem: 'Simplify 42/56.', solution: '3/4', steps: ['GCD(42, 56) = 14.', '42 ÷ 14 = 3, 56 ÷ 14 = 4.'] },
          { problem: 'Find x: 7/9 = x/45.', solution: 'x = 35', steps: ['45 ÷ 9 = 5.', 'x = 7 · 5 = 35.'] },
          { problem: 'Is 12/18 in simplest form? If not, simplify it.', solution: 'No; 12/18 = 2/3.', steps: ['GCD(12, 18) = 6 ≠ 1.', '12 ÷ 6 = 2, 18 ÷ 6 = 3.'] },
        ],
      },
      de: {
        title: 'Kürzen und Erweitern',
        objectives: ['Einen Bruch vollständig kürzen.', 'Einen Bruch auf einen vorgegebenen Nenner erweitern.'],
        theory: 'Der Wert eines Bruchs ändert sich nicht, wenn man Zähler und Nenner mit derselben Zahl (ungleich null) multipliziert oder dividiert. Multiplizieren heißt Erweitern, Dividieren heißt Kürzen.\n\nUm in einem Schritt zu kürzen, teilt man durch den ggT von Zähler und Nenner: 36/48, ggT = 12, also 36/48 = 3/4. Ein Bruch ist vollständig gekürzt, wenn der ggT 1 ist.\n\nUm auf einen vorgegebenen Nenner zu erweitern, bestimmt man, wie oft der alte Nenner in den neuen passt, und multipliziert den Zähler mit dieser Zahl: 5/6 = ?/42 → 42 : 6 = 7, also 35/42.',
        keyPoints: ['a/b = (a · k)/(b · k) = (a : k)/(b : k), k ≠ 0', 'In einem Schritt kürzen: durch den ggT teilen.', 'Vollständig gekürzt: ggT(Zähler, Nenner) = 1.'],
        examples: [
          { example: 'Kürzen Sie 36/48 vollständig.', solution: 'ggT(36; 48) = 12. 36 : 12 = 3, 48 : 12 = 4, also 3/4.' },
          { example: 'Erweitern Sie 5/6 auf den Nenner 42.', solution: '42 : 6 = 7; 5 · 7 = 35, also 5/6 = 35/42.' },
        ],
        commonMistakes: [
          { mistake: 'Nur einen Teil kürzen: 36/48 = 36/4.', fix: 'Zähler und Nenner immer durch dieselbe Zahl teilen.' },
          { mistake: 'Mit einem kleinen Teiler kürzen und aufhören (36/48 = 18/24).', fix: 'Prüfen, ob noch ein gemeinsamer Teiler bleibt, oder gleich durch den ggT teilen.' },
        ],
        practice: [
          { problem: 'Kürzen Sie 42/56 vollständig.', solution: '3/4', steps: ['ggT(42; 56) = 14.', '42 : 14 = 3, 56 : 14 = 4.'] },
          { problem: 'Bestimmen Sie x: 7/9 = x/45.', solution: 'x = 35', steps: ['45 : 9 = 5.', 'x = 7 · 5 = 35.'] },
          { problem: 'Ist 12/18 vollständig gekürzt? Wenn nicht, kürzen Sie.', solution: 'Nein; 12/18 = 2/3.', steps: ['ggT(12; 18) = 6 ≠ 1.', '12 : 6 = 2, 18 : 6 = 3.'] },
        ],
      },
    },

    // ───────── 2. Common denominator
    {
      slug: 'g7-fractions-decimals-common-denominator',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Shumëfishat e 4', 'Multiples of 4', 'Vielfache von 4'), cells: ['4', '8', '12', '16', '20', '24'] },
          { head: alt('Shumëfishat e 6', 'Multiples of 6', 'Vielfache von 6'), cells: ['6', '12', '18', '24', '30', '36'] },
        ],
        highlight: [[0, 2], [1, 1]],
        caption: alt('Shumëfishi i parë i përbashkët është 12: SHVP(4; 6) = 12.', 'The first common multiple is 12: LCM(4, 6) = 12.', 'Das erste gemeinsame Vielfache ist 12: kgV(4; 6) = 12.'),
        alt: alt('Shumëfishat e 4 dhe të 6; 12 shfaqet te të dy.', 'Multiples of 4 and of 6; 12 appears in both.', 'Vielfache von 4 und von 6; 12 kommt in beiden vor.'),
      }],
      answers: {
        examples: [[['lcm(4, 6)', 12]], [['lcm(9, 12)', 36]]],
        practice: [[['lcm(4, 6, 9)', 36]], [['lcm(8, 12)', 24]], [['lcm(10, 15)', 30]]],
      },
      al: {
        title: 'Emëruesi i përbashkët',
        objectives: ['Të gjeni emëruesin më të vogël të përbashkët (SHVP e emëruesve).', 'Të shkruani dy ose më shumë thyesa me të njëjtin emërues.'],
        theory: 'Për të mbledhur, zbritur ose krahasuar thyesa, ato duhet të kenë të njëjtin emërues. Emëruesi më i vogël i përbashkët është SHVP e emëruesve.\n\nP.sh. 3/4 dhe 5/6: shumëfishat e 4 janë 4, 8, 12, … dhe të 6 janë 6, 12, …; SHVP = 12. Pastaj e zgjerojmë secilën thyesë: 3/4 = 9/12 dhe 5/6 = 10/12.\n\nMund të përdorim edhe prodhimin e emëruesve (4 · 6 = 24), por me numra më të mëdhenj llogaritjet bëhen më të gjata; SHVP i mban numrat të vegjël.',
        keyPoints: ['Emëruesi i përbashkët më i vogël = SHVP e emëruesve.', 'Zgjerimi: numëruesi × (SHVP : emëruesi).', 'Prodhimi i emëruesve është gjithmonë emërues i përbashkët, por jo gjithmonë më i vogli.'],
        examples: [
          { example: 'Shkruani 3/4 dhe 5/6 me emëruesin më të vogël të përbashkët.', solution: 'SHVP(4; 6) = 12. 3/4 = 9/12 dhe 5/6 = 10/12.' },
          { example: 'Shkruani 2/9 dhe 5/12 me emëruesin më të vogël të përbashkët.', solution: 'SHVP(9; 12) = 36. 2/9 = 8/36 dhe 5/12 = 15/36.' },
        ],
        commonMistakes: [
          { mistake: 'Ndryshohet emëruesi, por jo numëruesi: 3/4 = 3/12.', fix: 'Numëruesin e shumëzoni me të njëjtin numër si emëruesin.' },
        ],
        practice: [
          { problem: 'Gjeni emëruesin më të vogël të përbashkët të 1/4, 5/6 dhe 7/9.', solution: '36', steps: ['SHVP(4; 6) = 12.', 'SHVP(12; 9) = 36.'] },
          { problem: 'Shkruani 3/8 dhe 5/12 me emërues të përbashkët.', solution: '9/24 dhe 10/24 (emëruesi 24)', steps: ['SHVP(8; 12) = 24.', '3/8 = 9/24; 5/12 = 10/24.'] },
          { problem: 'Sa është emëruesi më i vogël i përbashkët i 3/10 dhe 4/15?', solution: '30', steps: ['Shumëfishat e 15: 15, 30.', '30 pjesëtohet me 10, pra SHVP = 30.'] },
        ],
      },
      en: {
        title: 'Common denominators',
        objectives: ['Find the lowest common denominator (the LCM of the denominators).', 'Write two or more fractions with the same denominator.'],
        theory: 'To add, subtract or compare fractions, they must have the same denominator. The lowest common denominator is the LCM of the denominators.\n\nFor example 3/4 and 5/6: the multiples of 4 are 4, 8, 12, … and of 6 are 6, 12, …; LCM = 12. Then expand each fraction: 3/4 = 9/12 and 5/6 = 10/12.\n\nWe can also use the product of the denominators (4 · 6 = 24), but with larger numbers the working gets longer; the LCM keeps the numbers small.',
        keyPoints: ['Lowest common denominator = LCM of the denominators.', 'Expanding: numerator × (LCM ÷ denominator).', 'The product of the denominators is always a common denominator, but not always the lowest.'],
        examples: [
          { example: 'Write 3/4 and 5/6 with their lowest common denominator.', solution: 'LCM(4, 6) = 12. 3/4 = 9/12 and 5/6 = 10/12.' },
          { example: 'Write 2/9 and 5/12 with their lowest common denominator.', solution: 'LCM(9, 12) = 36. 2/9 = 8/36 and 5/12 = 15/36.' },
        ],
        commonMistakes: [
          { mistake: 'Changing the denominator but not the numerator: 3/4 = 3/12.', fix: 'Multiply the numerator by the same number as the denominator.' },
        ],
        practice: [
          { problem: 'Find the lowest common denominator of 1/4, 5/6 and 7/9.', solution: '36', steps: ['LCM(4, 6) = 12.', 'LCM(12, 9) = 36.'] },
          { problem: 'Write 3/8 and 5/12 with a common denominator.', solution: '9/24 and 10/24 (denominator 24)', steps: ['LCM(8, 12) = 24.', '3/8 = 9/24; 5/12 = 10/24.'] },
          { problem: 'What is the lowest common denominator of 3/10 and 4/15?', solution: '30', steps: ['Multiples of 15: 15, 30.', '30 is divisible by 10, so the LCM = 30.'] },
        ],
      },
      de: {
        title: 'Der Hauptnenner',
        objectives: ['Den Hauptnenner (das kgV der Nenner) bestimmen.', 'Zwei oder mehr Brüche gleichnamig machen.'],
        theory: 'Um Brüche zu addieren, zu subtrahieren oder zu vergleichen, brauchen sie denselben Nenner. Der kleinste gemeinsame Nenner, der Hauptnenner, ist das kgV der Nenner.\n\nZum Beispiel 3/4 und 5/6: Vielfache von 4 sind 4, 8, 12, …, von 6 sind 6, 12, …; kgV = 12. Dann erweitert man jeden Bruch: 3/4 = 9/12 und 5/6 = 10/12.\n\nMan kann auch das Produkt der Nenner nehmen (4 · 6 = 24), aber bei größeren Zahlen wird die Rechnung länger; mit dem kgV bleiben die Zahlen klein.',
        keyPoints: ['Hauptnenner = kgV der Nenner.', 'Erweitern: Zähler · (kgV : Nenner).', 'Das Produkt der Nenner ist immer ein gemeinsamer Nenner, aber nicht immer der kleinste.'],
        examples: [
          { example: 'Machen Sie 3/4 und 5/6 gleichnamig (Hauptnenner).', solution: 'kgV(4; 6) = 12. 3/4 = 9/12 und 5/6 = 10/12.' },
          { example: 'Machen Sie 2/9 und 5/12 gleichnamig (Hauptnenner).', solution: 'kgV(9; 12) = 36. 2/9 = 8/36 und 5/12 = 15/36.' },
        ],
        commonMistakes: [
          { mistake: 'Nur den Nenner ändern, nicht den Zähler: 3/4 = 3/12.', fix: 'Den Zähler mit derselben Zahl multiplizieren wie den Nenner.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Hauptnenner von 1/4, 5/6 und 7/9.', solution: '36', steps: ['kgV(4; 6) = 12.', 'kgV(12; 9) = 36.'] },
          { problem: 'Machen Sie 3/8 und 5/12 gleichnamig.', solution: '9/24 und 10/24 (Nenner 24)', steps: ['kgV(8; 12) = 24.', '3/8 = 9/24; 5/12 = 10/24.'] },
          { problem: 'Wie lautet der Hauptnenner von 3/10 und 4/15?', solution: '30', steps: ['Vielfache von 15: 15, 30.', '30 ist durch 10 teilbar, also kgV = 30.'] },
        ],
      },
    },

    // ───────── 3. Comparing fractions and decimals
    {
      slug: 'g7-fractions-decimals-comparing',
      visuals: [{
        type: 'numberLine', min: 0.5, max: 0.7, step: 0.01, labelEvery: 5,
        points: [{ x: 0.6, label: 0.6 }, { x: 0.625, label: '5/8', color: 'secondary', below: true }, { x: 2 / 3, label: '2/3', color: 'success' }],
        caption: alt('0,6 < 5/8 = 0,625 < 2/3 ≈ 0,667', '0.6 < 5/8 = 0.625 < 2/3 ≈ 0.667', '0,6 < 5/8 = 0,625 < 2/3 ≈ 0,667'),
        alt: alt('Bosht numerik nga 0,5 deri 0,7 me 0,6, 5/8 dhe 2/3 të shënuar.', 'Number line from 0.5 to 0.7 with 0.6, 5/8 and 2/3 marked.', 'Zahlenstrahl von 0,5 bis 0,7 mit 0,6, 5/8 und 2/3 markiert.'),
      }],
      answers: {
        examples: [[['3/4 > 0.7', true]], [['0.6 < 5/8 and 5/8 < 2/3', true]]],
        practice: [[['7/9 < 0.8', true]], [['11/12 > 0.9', true]], [['0.35 < 3/8 and 3/8 < 0.4', true]]],
      },
      al: {
        title: 'Krahasimi i thyesave dhe numrave dhjetorë',
        objectives: ['Të krahasoni thyesa dhe numra dhjetorë ndërmjet tyre.', 'Të renditni një grup numrash të shkruar në mënyra të ndryshme.'],
        theory: 'Thyesat i krahasojmë duke i sjellë në emërues të përbashkët. Kur duhet të krahasojmë një thyesë me një numër dhjetor, është më e lehtë ta kthejmë thyesën në numër dhjetor: 3/4 = 0,75, pra 3/4 > 0,7.\n\nPër të renditur disa numra, i shkruajmë të gjithë si numra dhjetorë me të njëjtin numër shifrash pas presjes: 2/3 ≈ 0,667; 0,6 = 0,600; 5/8 = 0,625. Atëherë 0,600 < 0,625 < 0,667.\n\nNë boshtin numerik çdo thyesë ka vendin e saj: më djathtas do të thotë më e madhe.',
        keyPoints: ['Thyesë → dhjetor: numëruesi : emëruesi.', 'Për renditje: të njëjtat shifra pas presjes.', 'Thyesat me emërues të përbashkët krahasohen me numëruesit.'],
        examples: [
          { example: 'Krahasoni 3/4 dhe 0,7.', solution: '3/4 = 0,75 dhe 0,75 > 0,70, pra 3/4 > 0,7.' },
          { example: 'Renditni nga më i vogli: 2/3; 0,6; 5/8.', solution: '2/3 ≈ 0,667; 0,6 = 0,600; 5/8 = 0,625. Renditja: 0,6 < 5/8 < 2/3.' },
        ],
        commonMistakes: [
          { mistake: 'Mendohet se 5/8 > 2/3 sepse 5 > 2 dhe 8 > 3.', fix: 'Krahasoni vlerat (0,625 dhe 0,667), jo numrat veç e veç.' },
        ],
        practice: [
          { problem: 'Krahasoni 7/9 dhe 0,8.', solution: '7/9 < 0,8', steps: ['7/9 = 0,777…', '0,777… < 0,800.'] },
          { problem: 'Cili është më i madh: 11/12 apo 0,9?', solution: '11/12', steps: ['11/12 ≈ 0,917.', '0,917 > 0,900.'] },
          { problem: 'Renditni nga më i vogli: 0,4; 3/8; 0,35.', solution: '0,35 < 3/8 < 0,4', steps: ['3/8 = 0,375.', '0,350 < 0,375 < 0,400.'] },
        ],
      },
      en: {
        title: 'Comparing fractions and decimals',
        objectives: ['Compare fractions and decimals with each other.', 'Order a set of numbers written in different forms.'],
        theory: 'We compare fractions by giving them a common denominator. To compare a fraction with a decimal, it is easier to change the fraction into a decimal: 3/4 = 0.75, so 3/4 > 0.7.\n\nTo order several numbers, write them all as decimals with the same number of decimal places: 2/3 ≈ 0.667; 0.6 = 0.600; 5/8 = 0.625. Then 0.600 < 0.625 < 0.667.\n\nOn the number line every fraction has its own place: further right means larger.',
        keyPoints: ['Fraction → decimal: numerator ÷ denominator.', 'For ordering: the same number of decimal places.', 'Fractions with a common denominator are compared by their numerators.'],
        examples: [
          { example: 'Compare 3/4 and 0.7.', solution: '3/4 = 0.75 and 0.75 > 0.70, so 3/4 > 0.7.' },
          { example: 'Order from smallest: 2/3; 0.6; 5/8.', solution: '2/3 ≈ 0.667; 0.6 = 0.600; 5/8 = 0.625. Order: 0.6 < 5/8 < 2/3.' },
        ],
        commonMistakes: [
          { mistake: 'Thinking 5/8 > 2/3 because 5 > 2 and 8 > 3.', fix: 'Compare the values (0.625 and 0.667), not the numbers separately.' },
        ],
        practice: [
          { problem: 'Compare 7/9 and 0.8.', solution: '7/9 < 0.8', steps: ['7/9 = 0.777…', '0.777… < 0.800.'] },
          { problem: 'Which is larger: 11/12 or 0.9?', solution: '11/12', steps: ['11/12 ≈ 0.917.', '0.917 > 0.900.'] },
          { problem: 'Order from smallest: 0.4; 3/8; 0.35.', solution: '0.35 < 3/8 < 0.4', steps: ['3/8 = 0.375.', '0.350 < 0.375 < 0.400.'] },
        ],
      },
      de: {
        title: 'Brüche und Dezimalzahlen vergleichen',
        objectives: ['Brüche und Dezimalzahlen miteinander vergleichen.', 'Zahlen in verschiedenen Schreibweisen ordnen.'],
        theory: 'Brüche vergleicht man, indem man sie gleichnamig macht. Soll ein Bruch mit einer Dezimalzahl verglichen werden, wandelt man den Bruch am einfachsten in eine Dezimalzahl um: 3/4 = 0,75, also 3/4 > 0,7.\n\nUm mehrere Zahlen zu ordnen, schreibt man alle als Dezimalzahlen mit gleich vielen Nachkommastellen: 2/3 ≈ 0,667; 0,6 = 0,600; 5/8 = 0,625. Dann gilt 0,600 < 0,625 < 0,667.\n\nAm Zahlenstrahl hat jeder Bruch seinen Platz: weiter rechts heißt größer.',
        keyPoints: ['Bruch → Dezimalzahl: Zähler : Nenner.', 'Zum Ordnen: gleich viele Nachkommastellen.', 'Gleichnamige Brüche vergleicht man über die Zähler.'],
        examples: [
          { example: 'Vergleichen Sie 3/4 und 0,7.', solution: '3/4 = 0,75 und 0,75 > 0,70, also 3/4 > 0,7.' },
          { example: 'Ordnen Sie aufsteigend: 2/3; 0,6; 5/8.', solution: '2/3 ≈ 0,667; 0,6 = 0,600; 5/8 = 0,625. Reihenfolge: 0,6 < 5/8 < 2/3.' },
        ],
        commonMistakes: [
          { mistake: 'Glauben, 5/8 > 2/3, weil 5 > 2 und 8 > 3.', fix: 'Die Werte vergleichen (0,625 und 0,667), nicht die Zahlen einzeln.' },
        ],
        practice: [
          { problem: 'Vergleichen Sie 7/9 und 0,8.', solution: '7/9 < 0,8', steps: ['7/9 = 0,777…', '0,777… < 0,800.'] },
          { problem: 'Was ist größer: 11/12 oder 0,9?', solution: '11/12', steps: ['11/12 ≈ 0,917.', '0,917 > 0,900.'] },
          { problem: 'Ordnen Sie aufsteigend: 0,4; 3/8; 0,35.', solution: '0,35 < 3/8 < 0,4', steps: ['3/8 = 0,375.', '0,350 < 0,375 < 0,400.'] },
        ],
      },
    },

    // ───────── 4. Adding and subtracting
    {
      slug: 'g7-fractions-decimals-adding-subtracting',
      visuals: [{
        type: 'fractionBar', bars: [{ parts: 20, filled: 15, label: '3/4' }, { parts: 20, filled: 8, label: '2/5', color: 'secondary' }, { parts: 20, filled: 7, label: '7/20', color: 'success' }],
        caption: alt('3/4 − 2/5 = 15/20 − 8/20 = 7/20', '3/4 − 2/5 = 15/20 − 8/20 = 7/20', '3/4 − 2/5 = 15/20 − 8/20 = 7/20'),
        alt: alt('Shirita në të njëzetat: 15/20, 8/20 dhe ndryshesa 7/20.', 'Bars in twentieths: 15/20, 8/20 and the difference 7/20.', 'Streifen in Zwanzigsteln: 15/20, 8/20 und die Differenz 7/20.'),
      }],
      answers: {
        examples: [[['3/4 - 2/5', '7/20']], [['(1 + 2/3) + (2 + 3/4)', '4 + 5/12', 0, '4 5/12']]],
        practice: [[['5/6 + 3/8', '1 + 5/24', 0, '1 5/24']], [['4 - (2 + 2/5)', '1 + 3/5', 0, '1 3/5']], [['7/10 - 1/4', '9/20']]],
      },
      al: {
        title: 'Mbledhja dhe zbritja e thyesave',
        objectives: ['Të mblidhni dhe të zbritni thyesa me emërues të ndryshëm.', 'Të llogaritni me thyesa të përziera dhe me numra të plotë.'],
        theory: 'Për të mbledhur ose zbritur thyesa me emërues të ndryshëm: 1) gjejmë emëruesin më të vogël të përbashkët; 2) i zgjerojmë thyesat; 3) mbledhim ose zbresim numëruesit; 4) thjeshtojmë rezultatin.\n\n3/4 − 2/5: emëruesi 20 → 15/20 − 8/20 = 7/20.\n\nTe thyesat e përziera mund të veprojmë veç me pjesët e plota dhe veç me thyesat, ose t\'i kthejmë në thyesa. Kur thyesa e parë është më e vogël se e dyta gjatë zbritjes, "huazojmë" një të plotë: 4 − 2 2/5 = 3 5/5 − 2 2/5 = 1 3/5.',
        keyPoints: ['Emërues i përbashkët → mbledhim/zbresim numëruesit.', 'Emëruesi nuk mblidhet.', 'Te zbritja me të përziera: huazoni 1 = n/n kur duhet.'],
        examples: [
          { example: 'Llogaritni 3/4 − 2/5.', solution: 'Emëruesi 20: 15/20 − 8/20 = 7/20.' },
          { example: 'Llogaritni 1 2/3 + 2 3/4.', solution: 'Pjesët e plota: 3. Thyesat: 8/12 + 9/12 = 17/12 = 1 5/12. Gjithsej 4 5/12.' },
        ],
        commonMistakes: [
          { mistake: '3/4 − 2/5 = 1/1 (zbriten numëruesit dhe emëruesit).', fix: 'Emëruesi bëhet i përbashkët; vetëm numëruesit zbriten.' },
          { mistake: '4 − 2 2/5 = 2 2/5.', fix: 'Shkruani 4 = 3 5/5 dhe zbritni: 1 3/5.' },
        ],
        practice: [
          { problem: 'Llogaritni 5/6 + 3/8.', solution: '29/24 = 1 5/24', steps: ['Emëruesi 24: 20/24 + 9/24 = 29/24.', '29/24 = 1 5/24.'] },
          { problem: 'Llogaritni 4 − 2 2/5.', solution: '1 3/5', steps: ['4 = 3 5/5.', '3 5/5 − 2 2/5 = 1 3/5.'] },
          { problem: 'Llogaritni 7/10 − 1/4.', solution: '9/20', steps: ['Emëruesi 20: 14/20 − 5/20.', '= 9/20.'] },
        ],
      },
      en: {
        title: 'Adding and subtracting fractions',
        objectives: ['Add and subtract fractions with different denominators.', 'Calculate with mixed numbers and whole numbers.'],
        theory: 'To add or subtract fractions with different denominators: 1) find the lowest common denominator; 2) expand the fractions; 3) add or subtract the numerators; 4) simplify the result.\n\n3/4 − 2/5: denominator 20 → 15/20 − 8/20 = 7/20.\n\nWith mixed numbers we can work with the whole parts and the fractions separately, or change them into fractions. When subtracting and the first fraction is smaller than the second, "borrow" one whole: 4 − 2 2/5 = 3 5/5 − 2 2/5 = 1 3/5.',
        keyPoints: ['Common denominator → add/subtract the numerators.', 'The denominator is not added.', 'Subtracting mixed numbers: borrow 1 = n/n when needed.'],
        examples: [
          { example: 'Work out 3/4 − 2/5.', solution: 'Denominator 20: 15/20 − 8/20 = 7/20.' },
          { example: 'Work out 1 2/3 + 2 3/4.', solution: 'Whole parts: 3. Fractions: 8/12 + 9/12 = 17/12 = 1 5/12. Total 4 5/12.' },
        ],
        commonMistakes: [
          { mistake: '3/4 − 2/5 = 1/1 (subtracting tops and bottoms).', fix: 'Make the denominators the same; only the numerators are subtracted.' },
          { mistake: '4 − 2 2/5 = 2 2/5.', fix: 'Write 4 = 3 5/5 and subtract: 1 3/5.' },
        ],
        practice: [
          { problem: 'Work out 5/6 + 3/8.', solution: '29/24 = 1 5/24', steps: ['Denominator 24: 20/24 + 9/24 = 29/24.', '29/24 = 1 5/24.'] },
          { problem: 'Work out 4 − 2 2/5.', solution: '1 3/5', steps: ['4 = 3 5/5.', '3 5/5 − 2 2/5 = 1 3/5.'] },
          { problem: 'Work out 7/10 − 1/4.', solution: '9/20', steps: ['Denominator 20: 14/20 − 5/20.', '= 9/20.'] },
        ],
      },
      de: {
        title: 'Brüche addieren und subtrahieren',
        objectives: ['Ungleichnamige Brüche addieren und subtrahieren.', 'Mit gemischten Zahlen und ganzen Zahlen rechnen.'],
        theory: 'So addiert oder subtrahiert man ungleichnamige Brüche: 1) Hauptnenner bestimmen; 2) Brüche erweitern; 3) Zähler addieren oder subtrahieren; 4) Ergebnis kürzen.\n\n3/4 − 2/5: Hauptnenner 20 → 15/20 − 8/20 = 7/20.\n\nBei gemischten Zahlen kann man Ganze und Brüche getrennt rechnen oder in Brüche umwandeln. Ist beim Subtrahieren der erste Bruch kleiner als der zweite, „borgt“ man ein Ganzes: 4 − 2 2/5 = 3 5/5 − 2 2/5 = 1 3/5.',
        keyPoints: ['Gleichnamig machen → Zähler addieren/subtrahieren.', 'Der Nenner wird nicht addiert.', 'Gemischte Zahlen subtrahieren: bei Bedarf 1 = n/n borgen.'],
        examples: [
          { example: 'Berechnen Sie 3/4 − 2/5.', solution: 'Hauptnenner 20: 15/20 − 8/20 = 7/20.' },
          { example: 'Berechnen Sie 1 2/3 + 2 3/4.', solution: 'Ganze: 3. Brüche: 8/12 + 9/12 = 17/12 = 1 5/12. Zusammen 4 5/12.' },
        ],
        commonMistakes: [
          { mistake: '3/4 − 2/5 = 1/1 (Zähler und Nenner subtrahiert).', fix: 'Gleichnamig machen; nur die Zähler werden subtrahiert.' },
          { mistake: '4 − 2 2/5 = 2 2/5.', fix: '4 = 3 5/5 schreiben und subtrahieren: 1 3/5.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 5/6 + 3/8.', solution: '29/24 = 1 5/24', steps: ['Hauptnenner 24: 20/24 + 9/24 = 29/24.', '29/24 = 1 5/24.'] },
          { problem: 'Berechnen Sie 4 − 2 2/5.', solution: '1 3/5', steps: ['4 = 3 5/5.', '3 5/5 − 2 2/5 = 1 3/5.'] },
          { problem: 'Berechnen Sie 7/10 − 1/4.', solution: '9/20', steps: ['Hauptnenner 20: 14/20 − 5/20.', '= 9/20.'] },
        ],
      },
    },

    // ───────── 5. Repeating decimals
    {
      slug: 'g7-fractions-decimals-repeating-decimals',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Hapi', 'Step', 'Schritt'), cells: ['20 : 3', '20 : 3', '20 : 3', '…'] },
          { head: alt('Shifra', 'Digit', 'Ziffer'), cells: ['6', '6', '6', '…'] },
          { head: alt('Mbetja', 'Remainder', 'Rest'), cells: ['2', '2', '2', '…'] },
        ],
        caption: alt('2 : 3 = 0,666…: mbetja 2 përsëritet, prandaj edhe shifra 6. Shkruajmë 0,(6).', '2 ÷ 3 = 0.666…: the remainder 2 repeats, so the digit 6 repeats too. We write 0.(6).', '2 : 3 = 0,666…: Der Rest 2 wiederholt sich, also auch die Ziffer 6. Man schreibt 0,(6) oder 0,6̅.'),
        alt: alt('Pjesëtimi 2 me 3: çdo hap jep shifrën 6 dhe mbetjen 2.', 'Dividing 2 by 3: every step gives the digit 6 and the remainder 2.', 'Division 2 durch 3: Jeder Schritt liefert die Ziffer 6 und den Rest 2.'),
      }],
      answers: {
        examples: [[['2/3', '2/3', 0, '0.(6)']], [['5/11', '5/11', 0, '0.(45)']]],
        practice: [[['1/3', '1/3', 0, '0.(3)']], [['7/12', '7/12', 0, '0.58(3)']], [['3/40', 0.075]]],
      },
      al: {
        title: 'Numrat dhjetorë periodikë',
        objectives: ['Të shndërroni një thyesë në numër dhjetor të fundëm ose periodik.', 'Të shkruani periodën me kllapa.'],
        theory: 'Kur pjesëtojmë numëruesin me emëruesin, ose pjesëtimi mbaron (3/40 = 0,075: numër dhjetor i fundëm), ose një mbetje përsëritet dhe shifrat përsëriten pa fund. Numri quhet atëherë dhjetor periodik.\n\n2/3 = 0,666… = 0,(6). Shifrat që përsëriten quhen periodë dhe i shkruajmë në kllapa: 5/11 = 0,4545… = 0,(45); 7/12 = 0,58333… = 0,58(3).\n\nNjë thyesë e pathjeshtueshme jep numër dhjetor të fundëm vetëm kur emëruesi i saj ka si faktorë të thjeshtë vetëm 2 dhe 5 (p.sh. 40 = 2 · 2 · 2 · 5).',
        keyPoints: ['Mbetje që përsëritet → shifra që përsëriten.', '0,(6) = 0,666…; 0,58(3) = 0,58333…', 'Emërues me faktorë vetëm 2 dhe 5 → dhjetor i fundëm.'],
        examples: [
          { example: 'Shkruani 2/3 si numër dhjetor.', solution: '2 : 3 = 0,666…, pra 2/3 = 0,(6).' },
          { example: 'Shkruani 5/11 si numër dhjetor.', solution: '5 : 11 = 0,4545…, pra 5/11 = 0,(45).' },
        ],
        commonMistakes: [
          { mistake: '2/3 = 0,6 ose 0,67 si vlerë e saktë.', fix: '0,67 është vlerë e përafërt; vlera e saktë është 0,(6).' },
          { mistake: '7/12 = 0,(583)', fix: 'Përsëritet vetëm 3: 0,58333… = 0,58(3).' },
        ],
        practice: [
          { problem: 'Shkruani 1/3 si numër dhjetor periodik.', solution: '0,(3)', steps: ['1 : 3 = 0,333…', 'Perioda: 3.'] },
          { problem: 'Shkruani 7/12 si numër dhjetor.', solution: '0,58(3)', steps: ['7 : 12 = 0,58333…', 'Përsëritet vetëm 3.'] },
          { problem: 'A është 3/40 numër dhjetor i fundëm? Sa është?', solution: 'Po: 0,075', steps: ['40 = 2 · 2 · 2 · 5, vetëm 2 dhe 5.', '3 : 40 = 0,075.'] },
        ],
      },
      en: {
        title: 'Repeating decimals',
        objectives: ['Change a fraction into a terminating or repeating decimal.', 'Write the repeating part with brackets.'],
        theory: 'When we divide the numerator by the denominator, either the division stops (3/40 = 0.075: a terminating decimal), or a remainder repeats and the digits repeat forever. The number is then a repeating (recurring) decimal.\n\n2/3 = 0.666… = 0.(6). The repeating digits are called the period and we write them in brackets: 5/11 = 0.4545… = 0.(45); 7/12 = 0.58333… = 0.58(3). (Many books put a dot or bar over the repeating digits instead.)\n\nA fraction in simplest form gives a terminating decimal only when its denominator has no prime factors other than 2 and 5 (e.g. 40 = 2 · 2 · 2 · 5).',
        keyPoints: ['A repeating remainder → repeating digits.', '0.(6) = 0.666…; 0.58(3) = 0.58333…', 'Denominator with only 2s and 5s → terminating decimal.'],
        examples: [
          { example: 'Write 2/3 as a decimal.', solution: '2 ÷ 3 = 0.666…, so 2/3 = 0.(6).' },
          { example: 'Write 5/11 as a decimal.', solution: '5 ÷ 11 = 0.4545…, so 5/11 = 0.(45).' },
        ],
        commonMistakes: [
          { mistake: 'Treating 0.6 or 0.67 as the exact value of 2/3.', fix: '0.67 is a rounded value; the exact value is 0.(6).' },
          { mistake: '7/12 = 0.(583)', fix: 'Only the 3 repeats: 0.58333… = 0.58(3).' },
        ],
        practice: [
          { problem: 'Write 1/3 as a repeating decimal.', solution: '0.(3)', steps: ['1 ÷ 3 = 0.333…', 'Period: 3.'] },
          { problem: 'Write 7/12 as a decimal.', solution: '0.58(3)', steps: ['7 ÷ 12 = 0.58333…', 'Only the 3 repeats.'] },
          { problem: 'Is 3/40 a terminating decimal? What is it?', solution: 'Yes: 0.075', steps: ['40 = 2 · 2 · 2 · 5, only 2s and 5s.', '3 ÷ 40 = 0.075.'] },
        ],
      },
      de: {
        title: 'Periodische Dezimalzahlen',
        objectives: ['Einen Bruch in eine abbrechende oder periodische Dezimalzahl umwandeln.', 'Die Periode mit Klammern (oder Strich) schreiben.'],
        theory: 'Dividiert man den Zähler durch den Nenner, bricht die Division entweder ab (3/40 = 0,075: abbrechende Dezimalzahl), oder ein Rest wiederholt sich und die Ziffern wiederholen sich unendlich. Die Zahl heißt dann periodische Dezimalzahl.\n\n2/3 = 0,666… = 0,(6). Die sich wiederholenden Ziffern heißen Periode; hier schreiben wir sie in Klammern (in vielen deutschen Büchern mit einem Strich darüber): 5/11 = 0,4545… = 0,(45); 7/12 = 0,58333… = 0,58(3).\n\nEin vollständig gekürzter Bruch ergibt nur dann eine abbrechende Dezimalzahl, wenn sein Nenner keine anderen Primfaktoren als 2 und 5 hat (z. B. 40 = 2 · 2 · 2 · 5).',
        keyPoints: ['Ein sich wiederholender Rest → sich wiederholende Ziffern.', '0,(6) = 0,666…; 0,58(3) = 0,58333…', 'Nenner nur mit den Primfaktoren 2 und 5 → abbrechende Dezimalzahl.'],
        examples: [
          { example: 'Schreiben Sie 2/3 als Dezimalzahl.', solution: '2 : 3 = 0,666…, also 2/3 = 0,(6).' },
          { example: 'Schreiben Sie 5/11 als Dezimalzahl.', solution: '5 : 11 = 0,4545…, also 5/11 = 0,(45).' },
        ],
        commonMistakes: [
          { mistake: '0,6 oder 0,67 als genauen Wert von 2/3 nehmen.', fix: '0,67 ist gerundet; der genaue Wert ist 0,(6).' },
          { mistake: '7/12 = 0,(583)', fix: 'Nur die 3 wiederholt sich: 0,58333… = 0,58(3).' },
        ],
        practice: [
          { problem: 'Schreiben Sie 1/3 als periodische Dezimalzahl.', solution: '0,(3)', steps: ['1 : 3 = 0,333…', 'Periode: 3.'] },
          { problem: 'Schreiben Sie 7/12 als Dezimalzahl.', solution: '0,58(3)', steps: ['7 : 12 = 0,58333…', 'Nur die 3 wiederholt sich.'] },
          { problem: 'Ist 3/40 eine abbrechende Dezimalzahl? Wie lautet sie?', solution: 'Ja: 0,075', steps: ['40 = 2 · 2 · 2 · 5, nur 2 und 5.', '3 : 40 = 0,075.'] },
        ],
      },
    },

    // ───────── 6. Percent
    {
      slug: 'g7-fractions-decimals-percent',
      visuals: [{
        type: 'pieChart', slices: [{ label: alt('15% = 36', '15% = 36', '15 % = 36'), value: 15 }, { label: alt('85% = 204', '85% = 204', '85 % = 204'), value: 85, color: '#C7CCD4' }], showPercent: false,
        caption: alt('15% e 240 = 0,15 · 240 = 36.', '15% of 240 = 0.15 · 240 = 36.', '15 % von 240 = 0,15 · 240 = 36.'),
        alt: alt('Rreth ku 15% është ngjyrosur: 36 nga 240.', 'A circle with 15% shaded: 36 of 240.', 'Ein Kreis mit 15 % gefärbt: 36 von 240.'),
      }],
      answers: {
        examples: [[['0.15 * 240', 36]], [['18 / 24 * 100', 75]]],
        practice: [[['0.2 * 85', 17]], [['60 * (1 - 0.25)', 45]], [['9 / 36 * 100', 25]]],
      },
      al: {
        title: 'Përqindja',
        objectives: ['Të llogaritni p% e një sasie.', 'Të gjeni sa për qind është një pjesë e së tërës dhe çmimin pas zbritjes.'],
        theory: 'Përqindja do të thotë "nga njëqind": 15% = 15/100 = 0,15. Kështu çdo përqindje mund të shkruhet si thyesë ose si numër dhjetor.\n\nPër të gjetur p% të një sasie, shumëzojmë sasinë me p/100: 15% e 240 = 0,15 · 240 = 36.\n\nPër të gjetur sa për qind është pjesa a nga e tëra b, llogarisim a/b · 100%: 18 nga 24 → 18/24 · 100% = 75%. Pas një zbritjeje prej 25%, paguajmë 75% të çmimit.',
        keyPoints: ['p% = p/100', 'p% e A = p/100 · A', 'Përqindja e pjesës = pjesa : e tëra · 100%'],
        examples: [
          { example: 'Sa është 15% e 240?', solution: '0,15 · 240 = 36.' },
          { example: 'Në një test, Leart zgjidhi 18 nga 24 detyra. Sa për qind zgjidhi?', solution: '18/24 = 0,75 = 75%.' },
        ],
        commonMistakes: [
          { mistake: '15% e 240 = 240 : 15 = 16.', fix: 'Përqindja është shumëzim me 15/100, jo pjesëtim me 15.' },
          { mistake: 'Pas zbritjes 25%, çmimi 60 € bëhet 35 €.', fix: 'Zbriten 25% e 60 = 15 €: çmimi i ri 45 €.' },
        ],
        practice: [
          { problem: 'Sa është 20% e 85?', solution: '17', steps: ['0,2 · 85.', '= 17.'] },
          { problem: 'Një xhaketë kushton 60 € dhe ulet 25%. Sa kushton tani?', solution: '45 €', steps: ['25% e 60 = 15 €.', '60 − 15 = 45 €.'] },
          { problem: 'Në një klasë me 36 nxënës, 9 shkojnë me biçikletë. Sa për qind?', solution: '25%', steps: ['9/36 = 1/4.', '1/4 = 25%.'] },
        ],
      },
      en: {
        title: 'Percentages',
        objectives: ['Work out p% of an amount.', 'Find what percentage a part is of the whole, and a price after a discount.'],
        theory: 'Percent means "out of a hundred": 15% = 15/100 = 0.15. So every percentage can be written as a fraction or a decimal.\n\nTo find p% of an amount, multiply the amount by p/100: 15% of 240 = 0.15 · 240 = 36.\n\nTo find what percentage a part a is of the whole b, work out a/b · 100%: 18 out of 24 → 18/24 · 100% = 75%. After a 25% discount you pay 75% of the price.',
        keyPoints: ['p% = p/100', 'p% of A = p/100 · A', 'Percentage of a part = part ÷ whole · 100%'],
        examples: [
          { example: 'What is 15% of 240?', solution: '0.15 · 240 = 36.' },
          { example: 'In a test, Leart solved 18 of 24 tasks. What percentage did he solve?', solution: '18/24 = 0.75 = 75%.' },
        ],
        commonMistakes: [
          { mistake: '15% of 240 = 240 ÷ 15 = 16.', fix: 'A percentage means multiplying by 15/100, not dividing by 15.' },
          { mistake: 'After a 25% discount, a €60 price becomes €35.', fix: '25% of 60 = €15 is taken off: the new price is €45.' },
        ],
        practice: [
          { problem: 'What is 20% of 85?', solution: '17', steps: ['0.2 · 85.', '= 17.'] },
          { problem: 'A jacket costs €60 and is reduced by 25%. What does it cost now?', solution: '€45', steps: ['25% of 60 = €15.', '60 − 15 = €45.'] },
          { problem: 'In a class of 36 students, 9 cycle to school. What percentage is that?', solution: '25%', steps: ['9/36 = 1/4.', '1/4 = 25%.'] },
        ],
      },
      de: {
        title: 'Prozente',
        objectives: ['p % einer Größe berechnen.', 'Den Prozentsatz eines Anteils und den Preis nach einem Rabatt bestimmen.'],
        theory: 'Prozent heißt „von Hundert“: 15 % = 15/100 = 0,15. Jeder Prozentsatz lässt sich also als Bruch oder als Dezimalzahl schreiben.\n\nUm p % einer Größe zu berechnen, multipliziert man die Größe mit p/100: 15 % von 240 = 0,15 · 240 = 36.\n\nUm zu bestimmen, wie viel Prozent ein Anteil a vom Ganzen b ist, rechnet man a/b · 100 %: 18 von 24 → 18/24 · 100 % = 75 %. Nach 25 % Rabatt bezahlt man 75 % des Preises.',
        keyPoints: ['p % = p/100', 'p % von G = p/100 · G', 'Prozentsatz = Anteil : Ganzes · 100 %'],
        examples: [
          { example: 'Wie viel sind 15 % von 240?', solution: '0,15 · 240 = 36.' },
          { example: 'In einem Test löste Leart 18 von 24 Aufgaben. Wie viel Prozent sind das?', solution: '18/24 = 0,75 = 75 %.' },
        ],
        commonMistakes: [
          { mistake: '15 % von 240 = 240 : 15 = 16.', fix: 'Prozent heißt mit 15/100 multiplizieren, nicht durch 15 teilen.' },
          { mistake: 'Nach 25 % Rabatt werden aus 60 € dann 35 €.', fix: 'Abgezogen werden 25 % von 60 = 15 €: neuer Preis 45 €.' },
        ],
        practice: [
          { problem: 'Wie viel sind 20 % von 85?', solution: '17', steps: ['0,2 · 85.', '= 17.'] },
          { problem: 'Eine Jacke kostet 60 € und wird um 25 % reduziert. Was kostet sie jetzt?', solution: '45 €', steps: ['25 % von 60 = 15 €.', '60 − 15 = 45 €.'] },
          { problem: 'In einer Klasse mit 36 Schülern fahren 9 mit dem Rad. Wie viel Prozent sind das?', solution: '25 %', steps: ['9/36 = 1/4.', '1/4 = 25 %.'] },
        ],
      },
    },
  ],
};
