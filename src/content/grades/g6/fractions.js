// Grade 6 · Theme 3: Fractions (November–December)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g6-fractions',
  i18n: {
    al: { title: 'Numrat thyesorë', description: 'Çfarë tregon një thyesë, si thjeshtohet, krahasohet dhe si llogarisim me thyesa e me thyesa të përziera.' },
    en: { title: 'Fractions', description: 'What a fraction means, how to simplify and compare fractions, and how to calculate with fractions and mixed numbers.' },
    de: { title: 'Brüche', description: 'Was ein Bruch bedeutet, wie man kürzt und vergleicht und wie man mit Brüchen und gemischten Zahlen rechnet.' },
  },
  lessons: [
    // ───────── 1. Meaning of a fraction
    {
      slug: 'g6-fractions-fraction-meaning',
      visuals: [{
        type: 'pieModel', pies: [{ parts: 8, filled: 3 }, { parts: 4, filled: 3 }, { parts: 5, filled: 2 }],
        caption: alt('Emëruesi tregon në sa pjesë të barabarta ndahet e tëra; numëruesi sa pjesë marrim.', 'The denominator says into how many equal parts the whole is split; the numerator says how many parts we take.', 'Der Nenner gibt an, in wie viele gleiche Teile das Ganze geteilt ist; der Zähler, wie viele Teile man nimmt.'),
        alt: alt('Tre rrathë: 3 nga 8 pjesë, 3 nga 4 pjesë dhe 2 nga 5 pjesë të ngjyrosura.', 'Three circles: 3 of 8 parts, 3 of 4 parts and 2 of 5 parts shaded.', 'Drei Kreise: 3 von 8, 3 von 4 und 2 von 5 Teilen gefärbt.'),
      }],
      answers: {
        examples: [[['3/8', '3/8']], [['20 / 4 * 3', 15]]],
        practice: [[['2/7', '2/7']], [['30 / 5 * 2', 12]], [['120 - 120 * 3 / 5', 48]]],
      },
      al: {
        title: 'Kuptimi i thyesës',
        objectives: ['Të shpjegoni numëruesin dhe emëruesin e një thyese.', 'Të gjeni një pjesë (thyesë) të një sasie.'],
        theory: 'Thyesa a/b tregon një pjesë të së tërës. E tëra ndahet në b pjesë të barabarta (b është emëruesi) dhe prej tyre merren a pjesë (a është numëruesi). Te 3/8, një pica ndahet në 8 feta dhe hamë 3 prej tyre.\n\nThyesa është edhe pjesëtim: 3/4 = 3 : 4. Nëse numëruesi është më i vogël se emëruesi, thyesa është më e vogël se 1 (thyesë e rregullt); nëse është i barabartë, thyesa është 1; nëse është më i madh, thyesa është më e madhe se 1.\n\nPër të gjetur a/b të një sasie, pjesëtojmë sasinë me emëruesin (gjejmë një pjesë) dhe shumëzojmë me numëruesin: 3/4 e 20 = 20 : 4 · 3 = 15.',
        keyPoints: ['Emëruesi = në sa pjesë të barabarta ndahet e tëra.', 'Numëruesi = sa pjesë merren.', 'a/b e një sasie: sasia : b · a.'],
        examples: [
          { example: 'Një pica ndahet në 8 feta të barabarta dhe hahen 3. Çfarë pjese të picës hëngrëm?', solution: '3 nga 8 pjesë: 3/8 e picës.' },
          { example: 'Sa është 3/4 e 20?', solution: 'Një e katërta: 20 : 4 = 5. Tri të katërta: 5 · 3 = 15.' },
        ],
        commonMistakes: [
          { mistake: 'Pjesët nuk janë të barabarta, por prapë numërohen si thyesë.', fix: 'Thyesa ka kuptim vetëm kur e tëra ndahet në pjesë të barabarta.' },
          { mistake: 'Ngatërrohen numëruesi dhe emëruesi (3 nga 8 shkruhet 8/3).', fix: 'Poshtë shkruhet numri i të gjitha pjesëve, lart numri i pjesëve të marra.' },
        ],
        practice: [
          { problem: 'Çfarë pjese të javës janë dy ditët e fundjavës?', solution: '2/7', steps: ['Java ka 7 ditë (emëruesi).', 'Fundjava ka 2 ditë (numëruesi): 2/7.'] },
          { problem: 'Sa është 2/5 e 30?', solution: '12', steps: ['30 : 5 = 6.', '6 · 2 = 12.'] },
          { problem: 'Ana lexoi 3/5 e një libri me 120 faqe. Sa faqe i kanë mbetur?', solution: '48 faqe', steps: ['Një e pesta: 120 : 5 = 24.', 'Lexoi 3 · 24 = 72 faqe.', 'Mbetën 120 − 72 = 48 faqe.'] },
        ],
      },
      en: {
        title: 'What a fraction means',
        objectives: ['Explain the numerator and denominator of a fraction.', 'Find a fraction of an amount.'],
        theory: 'The fraction a/b shows part of a whole. The whole is split into b equal parts (b is the denominator) and a of them are taken (a is the numerator). In 3/8, a pizza is cut into 8 slices and we eat 3 of them.\n\nA fraction is also a division: 3/4 = 3 ÷ 4. If the numerator is smaller than the denominator, the fraction is less than 1 (a proper fraction); if they are equal, the fraction is 1; if the numerator is larger, the fraction is greater than 1.\n\nTo find a/b of an amount, divide the amount by the denominator (one part) and multiply by the numerator: 3/4 of 20 = 20 ÷ 4 · 3 = 15.',
        keyPoints: ['Denominator = how many equal parts the whole is split into.', 'Numerator = how many parts are taken.', 'a/b of an amount: amount ÷ b · a.'],
        examples: [
          { example: 'A pizza is cut into 8 equal slices and 3 are eaten. What fraction of the pizza was eaten?', solution: '3 of 8 parts: 3/8 of the pizza.' },
          { example: 'What is 3/4 of 20?', solution: 'One quarter: 20 ÷ 4 = 5. Three quarters: 5 · 3 = 15.' },
        ],
        commonMistakes: [
          { mistake: 'Counting parts as a fraction although they are not equal.', fix: 'A fraction only makes sense when the whole is split into equal parts.' },
          { mistake: 'Swapping numerator and denominator (3 of 8 written as 8/3).', fix: 'The number of all parts goes below, the number of parts taken goes on top.' },
        ],
        practice: [
          { problem: 'What fraction of the week are the two weekend days?', solution: '2/7', steps: ['A week has 7 days (denominator).', 'The weekend has 2 days (numerator): 2/7.'] },
          { problem: 'What is 2/5 of 30?', solution: '12', steps: ['30 ÷ 5 = 6.', '6 · 2 = 12.'] },
          { problem: 'Ana read 3/5 of a 120-page book. How many pages are left?', solution: '48 pages', steps: ['One fifth: 120 ÷ 5 = 24.', 'She read 3 · 24 = 72 pages.', '120 − 72 = 48 pages are left.'] },
        ],
      },
      de: {
        title: 'Was ein Bruch bedeutet',
        objectives: ['Zähler und Nenner eines Bruchs erklären.', 'Einen Bruchteil einer Größe berechnen.'],
        theory: 'Der Bruch a/b beschreibt einen Teil eines Ganzen. Das Ganze wird in b gleiche Teile geteilt (b ist der Nenner) und davon werden a Teile genommen (a ist der Zähler). Bei 3/8 wird eine Pizza in 8 Stücke geschnitten und wir essen 3 davon.\n\nEin Bruch ist auch eine Division: 3/4 = 3 : 4. Ist der Zähler kleiner als der Nenner, ist der Bruch kleiner als 1 (echter Bruch); sind beide gleich, ist der Bruch 1; ist der Zähler größer, ist der Bruch größer als 1.\n\nUm a/b einer Größe zu berechnen, teilt man die Größe durch den Nenner (ein Teil) und multipliziert mit dem Zähler: 3/4 von 20 = 20 : 4 · 3 = 15.',
        keyPoints: ['Nenner = in wie viele gleiche Teile das Ganze geteilt ist.', 'Zähler = wie viele Teile genommen werden.', 'a/b einer Größe: Größe : b · a.'],
        examples: [
          { example: 'Eine Pizza wird in 8 gleiche Stücke geschnitten, 3 werden gegessen. Welcher Bruchteil der Pizza wurde gegessen?', solution: '3 von 8 Teilen: 3/8 der Pizza.' },
          { example: 'Wie viel sind 3/4 von 20?', solution: 'Ein Viertel: 20 : 4 = 5. Drei Viertel: 5 · 3 = 15.' },
        ],
        commonMistakes: [
          { mistake: 'Teile als Bruch zählen, obwohl sie nicht gleich groß sind.', fix: 'Ein Bruch ist nur sinnvoll, wenn das Ganze in gleiche Teile geteilt ist.' },
          { mistake: 'Zähler und Nenner vertauschen (3 von 8 als 8/3 schreiben).', fix: 'Unten steht die Anzahl aller Teile, oben die Anzahl der genommenen Teile.' },
        ],
        practice: [
          { problem: 'Welcher Bruchteil der Woche sind die zwei Wochenendtage?', solution: '2/7', steps: ['Eine Woche hat 7 Tage (Nenner).', 'Das Wochenende hat 2 Tage (Zähler): 2/7.'] },
          { problem: 'Wie viel sind 2/5 von 30?', solution: '12', steps: ['30 : 5 = 6.', '6 · 2 = 12.'] },
          { problem: 'Ana hat 3/5 eines Buches mit 120 Seiten gelesen. Wie viele Seiten fehlen noch?', solution: '48 Seiten', steps: ['Ein Fünftel: 120 : 5 = 24.', 'Gelesen: 3 · 24 = 72 Seiten.', 'Es fehlen 120 − 72 = 48 Seiten.'] },
        ],
      },
    },

    // ───────── 2. Equivalent fractions
    {
      slug: 'g6-fractions-equivalent-fractions',
      visuals: [{
        type: 'fractionBar', bars: [{ parts: 2, filled: 1 }, { parts: 4, filled: 2 }, { parts: 8, filled: 4 }],
        caption: alt('1/2 = 2/4 = 4/8: e njëjta pjesë, e ndarë në më shumë copa.', '1/2 = 2/4 = 4/8: the same amount, cut into more pieces.', '1/2 = 2/4 = 4/8: derselbe Anteil, in mehr Stücke geteilt.'),
        alt: alt('Tri shirita me të njëjtën gjatësi të ngjyrosur: 1 nga 2, 2 nga 4 dhe 4 nga 8 pjesë.', 'Three bars with the same length shaded: 1 of 2, 2 of 4 and 4 of 8 parts.', 'Drei Streifen mit gleich langem gefärbtem Teil: 1 von 2, 2 von 4 und 4 von 8 Teilen.'),
      }],
      answers: {
        examples: [[['18/24', '3/4']], [['2/3', '8/12']]],
        practice: [[['15/45', '1/3']], [['6/9 == 10/15', true]], [['3 * 20 / 5', 12]]],
      },
      al: {
        title: 'Thyesat e barabarta',
        objectives: ['Të zgjeroni dhe të thjeshtoni thyesa.', 'Të dalloni nëse dy thyesa janë të barabarta.'],
        theory: 'Dy thyesa janë të barabarta kur tregojnë të njëjtën pjesë: 1/2 = 2/4 = 4/8. Në figurë pjesa e ngjyrosur ka të njëjtën gjatësi, vetëm se është prerë në më shumë copa.\n\nZgjerimi: numëruesin dhe emëruesin i shumëzojmë me të njëjtin numër: 2/3 = (2 · 4)/(3 · 4) = 8/12. Thjeshtimi: numëruesin dhe emëruesin i pjesëtojmë me të njëjtin numër: 18/24 = (18 : 6)/(24 : 6) = 3/4.\n\nThyesa është e pathjeshtueshme kur numëruesi dhe emëruesi nuk kanë faktor të përbashkët përveç 1. Për ta thjeshtuar me një hap, pjesëtojmë me PMP të tyre.',
        keyPoints: ['Zgjerimi: a/b = (a · k)/(b · k).', 'Thjeshtimi: a/b = (a : k)/(b : k).', 'Thjeshtim me një hap: pjesëtoni me PMP.'],
        examples: [
          { example: 'Thjeshtoni 18/24.', solution: 'PMP(18; 24) = 6. 18 : 6 = 3 dhe 24 : 6 = 4, pra 18/24 = 3/4.' },
          { example: 'Zgjeroni 2/3 në thyesë me emërues 12.', solution: '12 : 3 = 4, pra shumëzojmë me 4: 2/3 = 8/12.' },
        ],
        commonMistakes: [
          { mistake: 'Shtohet i njëjti numër lart e poshtë: 2/3 = 3/4.', fix: 'Lejohet vetëm shumëzimi ose pjesëtimi me të njëjtin numër.' },
          { mistake: 'Thjeshtohet vetëm numëruesi.', fix: 'Numëruesi dhe emëruesi pjesëtohen gjithmonë me të njëjtin numër.' },
        ],
        practice: [
          { problem: 'Thjeshtoni 15/45.', solution: '1/3', steps: ['PMP(15; 45) = 15.', '15 : 15 = 1, 45 : 15 = 3: 1/3.'] },
          { problem: 'A janë të barabarta 6/9 dhe 10/15?', solution: 'Po, të dyja janë 2/3.', steps: ['6/9 = 2/3 (pjesëtojmë me 3).', '10/15 = 2/3 (pjesëtojmë me 5).'] },
          { problem: 'Gjeni x: 3/5 = x/20.', solution: 'x = 12', steps: ['20 : 5 = 4, pra zgjerojmë me 4.', 'x = 3 · 4 = 12.'] },
        ],
      },
      en: {
        title: 'Equivalent fractions',
        objectives: ['Expand and simplify fractions.', 'Tell whether two fractions are equal.'],
        theory: 'Two fractions are equivalent when they show the same amount: 1/2 = 2/4 = 4/8. In the picture the shaded part has the same length, it is just cut into more pieces.\n\nExpanding: multiply the numerator and the denominator by the same number: 2/3 = (2 · 4)/(3 · 4) = 8/12. Simplifying: divide the numerator and the denominator by the same number: 18/24 = (18 ÷ 6)/(24 ÷ 6) = 3/4.\n\nA fraction is in simplest form when the numerator and denominator have no common factor except 1. To simplify in one step, divide by their GCD.',
        keyPoints: ['Expanding: a/b = (a · k)/(b · k).', 'Simplifying: a/b = (a ÷ k)/(b ÷ k).', 'One-step simplifying: divide by the GCD.'],
        examples: [
          { example: 'Simplify 18/24.', solution: 'GCD(18, 24) = 6. 18 ÷ 6 = 3 and 24 ÷ 6 = 4, so 18/24 = 3/4.' },
          { example: 'Expand 2/3 to a fraction with denominator 12.', solution: '12 ÷ 3 = 4, so multiply by 4: 2/3 = 8/12.' },
        ],
        commonMistakes: [
          { mistake: 'Adding the same number to top and bottom: 2/3 = 3/4.', fix: 'Only multiplying or dividing by the same number is allowed.' },
          { mistake: 'Simplifying only the numerator.', fix: 'Always divide the numerator and the denominator by the same number.' },
        ],
        practice: [
          { problem: 'Simplify 15/45.', solution: '1/3', steps: ['GCD(15, 45) = 15.', '15 ÷ 15 = 1, 45 ÷ 15 = 3: 1/3.'] },
          { problem: 'Are 6/9 and 10/15 equivalent?', solution: 'Yes, both equal 2/3.', steps: ['6/9 = 2/3 (divide by 3).', '10/15 = 2/3 (divide by 5).'] },
          { problem: 'Find x: 3/5 = x/20.', solution: 'x = 12', steps: ['20 ÷ 5 = 4, so expand by 4.', 'x = 3 · 4 = 12.'] },
        ],
      },
      de: {
        title: 'Gleichwertige Brüche',
        objectives: ['Brüche erweitern und kürzen.', 'Erkennen, ob zwei Brüche gleich sind.'],
        theory: 'Zwei Brüche sind gleichwertig, wenn sie denselben Anteil beschreiben: 1/2 = 2/4 = 4/8. In der Abbildung ist der gefärbte Teil gleich lang, er ist nur in mehr Stücke geteilt.\n\nErweitern: Zähler und Nenner mit derselben Zahl multiplizieren: 2/3 = (2 · 4)/(3 · 4) = 8/12. Kürzen: Zähler und Nenner durch dieselbe Zahl dividieren: 18/24 = (18 : 6)/(24 : 6) = 3/4.\n\nEin Bruch ist vollständig gekürzt, wenn Zähler und Nenner keinen gemeinsamen Teiler außer 1 haben. Um in einem Schritt zu kürzen, teilt man durch den ggT.',
        keyPoints: ['Erweitern: a/b = (a · k)/(b · k).', 'Kürzen: a/b = (a : k)/(b : k).', 'In einem Schritt kürzen: durch den ggT teilen.'],
        examples: [
          { example: 'Kürzen Sie 18/24.', solution: 'ggT(18; 24) = 6. 18 : 6 = 3 und 24 : 6 = 4, also 18/24 = 3/4.' },
          { example: 'Erweitern Sie 2/3 auf den Nenner 12.', solution: '12 : 3 = 4, also mit 4 erweitern: 2/3 = 8/12.' },
        ],
        commonMistakes: [
          { mistake: 'Oben und unten dieselbe Zahl addieren: 2/3 = 3/4.', fix: 'Erlaubt ist nur Multiplizieren oder Dividieren mit derselben Zahl.' },
          { mistake: 'Nur den Zähler kürzen.', fix: 'Zähler und Nenner immer durch dieselbe Zahl teilen.' },
        ],
        practice: [
          { problem: 'Kürzen Sie 15/45 vollständig.', solution: '1/3', steps: ['ggT(15; 45) = 15.', '15 : 15 = 1, 45 : 15 = 3: 1/3.'] },
          { problem: 'Sind 6/9 und 10/15 gleich?', solution: 'Ja, beide sind 2/3.', steps: ['6/9 = 2/3 (durch 3 kürzen).', '10/15 = 2/3 (durch 5 kürzen).'] },
          { problem: 'Bestimmen Sie x: 3/5 = x/20.', solution: 'x = 12', steps: ['20 : 5 = 4, also mit 4 erweitern.', 'x = 3 · 4 = 12.'] },
        ],
      },
    },

    // ───────── 3. Comparing fractions
    {
      slug: 'g6-fractions-comparing-fractions',
      visuals: [{
        type: 'fractionBar', bars: [{ parts: 8, filled: 5, label: '5/8' }, { parts: 3, filled: 2, label: '2/3', color: 'secondary' }],
        caption: alt('5/8 = 15/24 dhe 2/3 = 16/24, pra 5/8 < 2/3.', '5/8 = 15/24 and 2/3 = 16/24, so 5/8 < 2/3.', '5/8 = 15/24 und 2/3 = 16/24, also 5/8 < 2/3.'),
        alt: alt('Dy shirita: 5 nga 8 pjesë dhe 2 nga 3 pjesë; pjesa e dytë është pak më e gjatë.', 'Two bars: 5 of 8 parts and 2 of 3 parts; the second shaded part is slightly longer.', 'Zwei Streifen: 5 von 8 und 2 von 3 Teilen; der zweite gefärbte Teil ist etwas länger.'),
      }],
      answers: {
        examples: [[['5/8 < 2/3', true]], [['3/7 < 3/5', true]]],
        practice: [[['3/8 < 1/2 and 1/2 < 5/6', true]], [['7/10 < 3/4', true]], [['4/9 < 1/2', true]]],
      },
      al: {
        title: 'Krahasimi i thyesave',
        objectives: ['Të krahasoni thyesa me emërues ose numërues të njëjtë.', 'Të krahasoni thyesa çfarëdo duke i sjellë në emërues të përbashkët.'],
        theory: 'Me emërues të njëjtë, më e madhe është thyesa me numërues më të madh: 5/8 > 3/8, sepse kemi më shumë copa të së njëjtës madhësi.\n\nMe numërues të njëjtë, më e madhe është thyesa me emërues më të vogël: 3/5 > 3/7, sepse copat e pestave janë më të mëdha se copat e të shtatave.\n\nNë rastet e tjera i sjellim thyesat në emërues të përbashkët (zakonisht SHVP e emëruesve) dhe krahasojmë numëruesit: 5/8 dhe 2/3 → 15/24 dhe 16/24, pra 5/8 < 2/3.',
        keyPoints: ['Emërues i njëjtë → krahasoni numëruesit.', 'Numërues i njëjtë → më e madhe është ajo me emërues më të vogël.', 'Ndryshe: emërues i përbashkët, pastaj krahasoni numëruesit.'],
        examples: [
          { example: 'Krahasoni 5/8 dhe 2/3.', solution: 'Emëruesi i përbashkët: 24. 5/8 = 15/24 dhe 2/3 = 16/24. Meqë 15 < 16: 5/8 < 2/3.' },
          { example: 'Krahasoni 3/7 dhe 3/5.', solution: 'Numëruesit janë të njëjtë; të pestat janë copa më të mëdha. Pra 3/7 < 3/5.' },
        ],
        commonMistakes: [
          { mistake: 'Mendohet se 1/8 > 1/5 sepse 8 > 5.', fix: 'Sa më i madh emëruesi, aq më të vogla janë copat.' },
        ],
        practice: [
          { problem: 'Renditni nga më e vogla: 1/2, 3/8, 5/6.', solution: '3/8 < 1/2 < 5/6', steps: ['Emëruesi i përbashkët: 24.', '1/2 = 12/24, 3/8 = 9/24, 5/6 = 20/24.', 'Renditja: 9 < 12 < 20.'] },
          { problem: 'Krahasoni 7/10 dhe 3/4.', solution: '7/10 < 3/4', steps: ['Emëruesi i përbashkët: 20.', '7/10 = 14/20, 3/4 = 15/20.', '14 < 15.'] },
          { problem: 'Cila është më e madhe: 4/9 apo 1/2?', solution: '1/2 > 4/9', steps: ['Gjysma e 9 është 4,5.', '4 < 4,5, pra 4/9 është pak më pak se gjysma.'] },
        ],
      },
      en: {
        title: 'Comparing fractions',
        objectives: ['Compare fractions with the same denominator or numerator.', 'Compare any fractions by giving them a common denominator.'],
        theory: 'With the same denominator, the fraction with the larger numerator is larger: 5/8 > 3/8, because we have more pieces of the same size.\n\nWith the same numerator, the fraction with the smaller denominator is larger: 3/5 > 3/7, because fifths are bigger pieces than sevenths.\n\nIn other cases we give the fractions a common denominator (usually the LCM of the denominators) and compare the numerators: 5/8 and 2/3 → 15/24 and 16/24, so 5/8 < 2/3.',
        keyPoints: ['Same denominator → compare the numerators.', 'Same numerator → the one with the smaller denominator is larger.', 'Otherwise: common denominator, then compare numerators.'],
        examples: [
          { example: 'Compare 5/8 and 2/3.', solution: 'Common denominator: 24. 5/8 = 15/24 and 2/3 = 16/24. Since 15 < 16: 5/8 < 2/3.' },
          { example: 'Compare 3/7 and 3/5.', solution: 'The numerators are equal; fifths are bigger pieces. So 3/7 < 3/5.' },
        ],
        commonMistakes: [
          { mistake: 'Thinking 1/8 > 1/5 because 8 > 5.', fix: 'The larger the denominator, the smaller the pieces.' },
        ],
        practice: [
          { problem: 'Order from smallest: 1/2, 3/8, 5/6.', solution: '3/8 < 1/2 < 5/6', steps: ['Common denominator: 24.', '1/2 = 12/24, 3/8 = 9/24, 5/6 = 20/24.', 'Order: 9 < 12 < 20.'] },
          { problem: 'Compare 7/10 and 3/4.', solution: '7/10 < 3/4', steps: ['Common denominator: 20.', '7/10 = 14/20, 3/4 = 15/20.', '14 < 15.'] },
          { problem: 'Which is larger: 4/9 or 1/2?', solution: '1/2 > 4/9', steps: ['Half of 9 is 4.5.', '4 < 4.5, so 4/9 is a little less than a half.'] },
        ],
      },
      de: {
        title: 'Brüche vergleichen',
        objectives: ['Brüche mit gleichem Nenner oder gleichem Zähler vergleichen.', 'Beliebige Brüche über einen gemeinsamen Nenner vergleichen.'],
        theory: 'Bei gleichem Nenner ist der Bruch mit dem größeren Zähler größer: 5/8 > 3/8, denn es sind mehr gleich große Stücke.\n\nBei gleichem Zähler ist der Bruch mit dem kleineren Nenner größer: 3/5 > 3/7, denn Fünftel sind größere Stücke als Siebtel.\n\nSonst bringt man die Brüche auf einen gemeinsamen Nenner (meist das kgV der Nenner) und vergleicht die Zähler: 5/8 und 2/3 → 15/24 und 16/24, also 5/8 < 2/3.',
        keyPoints: ['Gleicher Nenner → Zähler vergleichen.', 'Gleicher Zähler → der Bruch mit kleinerem Nenner ist größer.', 'Sonst: gemeinsamer Nenner, dann Zähler vergleichen.'],
        examples: [
          { example: 'Vergleichen Sie 5/8 und 2/3.', solution: 'Gemeinsamer Nenner: 24. 5/8 = 15/24 und 2/3 = 16/24. Da 15 < 16: 5/8 < 2/3.' },
          { example: 'Vergleichen Sie 3/7 und 3/5.', solution: 'Die Zähler sind gleich; Fünftel sind größere Stücke. Also 3/7 < 3/5.' },
        ],
        commonMistakes: [
          { mistake: 'Glauben, 1/8 > 1/5, weil 8 > 5.', fix: 'Je größer der Nenner, desto kleiner die Stücke.' },
        ],
        practice: [
          { problem: 'Ordnen Sie aufsteigend: 1/2, 3/8, 5/6.', solution: '3/8 < 1/2 < 5/6', steps: ['Gemeinsamer Nenner: 24.', '1/2 = 12/24, 3/8 = 9/24, 5/6 = 20/24.', 'Reihenfolge: 9 < 12 < 20.'] },
          { problem: 'Vergleichen Sie 7/10 und 3/4.', solution: '7/10 < 3/4', steps: ['Gemeinsamer Nenner: 20.', '7/10 = 14/20, 3/4 = 15/20.', '14 < 15.'] },
          { problem: 'Was ist größer: 4/9 oder 1/2?', solution: '1/2 > 4/9', steps: ['Die Hälfte von 9 ist 4,5.', '4 < 4,5, also ist 4/9 etwas weniger als die Hälfte.'] },
        ],
      },
    },

    // ───────── 4. Operations with fractions
    {
      slug: 'g6-fractions-fraction-operations',
      visuals: [{
        type: 'fractionBar', bars: [{ parts: 12, filled: 3, label: '3/12' }, { parts: 12, filled: 8, label: '8/12', color: 'secondary' }, { parts: 12, filled: 11, label: '11/12', color: 'success' }],
        caption: alt('1/4 + 2/3 = 3/12 + 8/12 = 11/12', '1/4 + 2/3 = 3/12 + 8/12 = 11/12', '1/4 + 2/3 = 3/12 + 8/12 = 11/12'),
        alt: alt('Shirita në të dymbëdhjetat: 3/12, 8/12 dhe shuma e tyre 11/12.', 'Bars in twelfths: 3/12, 8/12 and their sum 11/12.', 'Streifen in Zwölfteln: 3/12, 8/12 und ihre Summe 11/12.'),
      }],
      answers: {
        examples: [[['1/4 + 2/3', '11/12']], [['2/3 * 3/4', '1/2']]],
        practice: [[['5/6 - 1/4', '7/12']], [['4/5 * 15', 12]], [['3/4 / (3/8)', 2]], [['2/3 / 4', '1/6']]],
      },
      al: {
        title: 'Veprimet me thyesa',
        objectives: ['Të mblidhni dhe të zbritni thyesa (edhe me emërues të ndryshëm).', 'Të shumëzoni dhe të pjesëtoni thyesa.'],
        theory: 'Mbledhja dhe zbritja: me emërues të njëjtë mblidhen (zbriten) numëruesit, emëruesi mbetet: 2/7 + 3/7 = 5/7. Me emërues të ndryshëm, së pari i sjellim në emërues të përbashkët: 1/4 + 2/3 = 3/12 + 8/12 = 11/12.\n\nShumëzimi: numërues me numërues, emërues me emërues: 2/3 · 3/4 = 6/12 = 1/2. Një numër i plotë shkruhet si thyesë me emërues 1: 4/5 · 15 = 60/5 = 12.\n\nPjesëtimi: shumëzojmë me thyesën e anasjellë (ndërrojmë vendet e numëruesit dhe emëruesit të pjesëtuesit): 3/4 : 3/8 = 3/4 · 8/3 = 2. Në fund e thjeshtojmë gjithmonë rezultatin.',
        keyPoints: ['a/c + b/c = (a + b)/c', 'a/b · c/d = (a · c)/(b · d)', 'a/b : c/d = a/b · d/c', 'Thjeshtoni rezultatin në fund.'],
        examples: [
          { example: 'Llogaritni 1/4 + 2/3.', solution: 'Emëruesi i përbashkët 12: 3/12 + 8/12 = 11/12.' },
          { example: 'Llogaritni 2/3 · 3/4.', solution: '(2 · 3)/(3 · 4) = 6/12 = 1/2.' },
        ],
        commonMistakes: [
          { mistake: 'Mblidhen edhe emëruesit: 1/4 + 2/3 = 3/7.', fix: 'Te mbledhja emëruesi nuk mblidhet; bëhet i përbashkët.' },
          { mistake: 'Te pjesëtimi kthehet thyesa e parë, jo e dyta.', fix: 'Kthehet vetëm pjesëtuesi (thyesa pas shenjës :).' },
        ],
        practice: [
          { problem: 'Llogaritni 5/6 − 1/4.', solution: '7/12', steps: ['Emëruesi i përbashkët: 12.', '10/12 − 3/12 = 7/12.'] },
          { problem: 'Llogaritni 4/5 · 15.', solution: '12', steps: ['15 : 5 = 3.', '4 · 3 = 12.'] },
          { problem: 'Llogaritni 3/4 : 3/8.', solution: '2', steps: ['Kthejmë pjesëtuesin: 3/8 → 8/3.', '3/4 · 8/3 = 24/12 = 2.'] },
          { problem: 'Llogaritni 2/3 : 4.', solution: '1/6', steps: ['4 = 4/1, e anasjella 1/4.', '2/3 · 1/4 = 2/12 = 1/6.'] },
        ],
      },
      en: {
        title: 'Operations with fractions',
        objectives: ['Add and subtract fractions (also with different denominators).', 'Multiply and divide fractions.'],
        theory: 'Adding and subtracting: with the same denominator, add (subtract) the numerators and keep the denominator: 2/7 + 3/7 = 5/7. With different denominators, first find a common denominator: 1/4 + 2/3 = 3/12 + 8/12 = 11/12.\n\nMultiplying: numerator times numerator, denominator times denominator: 2/3 · 3/4 = 6/12 = 1/2. A whole number is written as a fraction with denominator 1: 4/5 · 15 = 60/5 = 12.\n\nDividing: multiply by the reciprocal (swap the numerator and denominator of the divisor): 3/4 ÷ 3/8 = 3/4 · 8/3 = 2. Always simplify the result at the end.',
        keyPoints: ['a/c + b/c = (a + b)/c', 'a/b · c/d = (a · c)/(b · d)', 'a/b ÷ c/d = a/b · d/c', 'Simplify the result at the end.'],
        examples: [
          { example: 'Work out 1/4 + 2/3.', solution: 'Common denominator 12: 3/12 + 8/12 = 11/12.' },
          { example: 'Work out 2/3 · 3/4.', solution: '(2 · 3)/(3 · 4) = 6/12 = 1/2.' },
        ],
        commonMistakes: [
          { mistake: 'Adding the denominators too: 1/4 + 2/3 = 3/7.', fix: 'When adding, the denominators are not added; they are made the same.' },
          { mistake: 'When dividing, flipping the first fraction instead of the second.', fix: 'Only the divisor (the fraction after ÷) is flipped.' },
        ],
        practice: [
          { problem: 'Work out 5/6 − 1/4.', solution: '7/12', steps: ['Common denominator: 12.', '10/12 − 3/12 = 7/12.'] },
          { problem: 'Work out 4/5 · 15.', solution: '12', steps: ['15 ÷ 5 = 3.', '4 · 3 = 12.'] },
          { problem: 'Work out 3/4 ÷ 3/8.', solution: '2', steps: ['Flip the divisor: 3/8 → 8/3.', '3/4 · 8/3 = 24/12 = 2.'] },
          { problem: 'Work out 2/3 ÷ 4.', solution: '1/6', steps: ['4 = 4/1, its reciprocal is 1/4.', '2/3 · 1/4 = 2/12 = 1/6.'] },
        ],
      },
      de: {
        title: 'Rechnen mit Brüchen',
        objectives: ['Brüche addieren und subtrahieren (auch mit verschiedenen Nennern).', 'Brüche multiplizieren und dividieren.'],
        theory: 'Addieren und Subtrahieren: Bei gleichem Nenner werden die Zähler addiert (subtrahiert), der Nenner bleibt: 2/7 + 3/7 = 5/7. Bei verschiedenen Nennern bringt man die Brüche zuerst auf einen gemeinsamen Nenner: 1/4 + 2/3 = 3/12 + 8/12 = 11/12.\n\nMultiplizieren: Zähler mal Zähler, Nenner mal Nenner: 2/3 · 3/4 = 6/12 = 1/2. Eine ganze Zahl schreibt man als Bruch mit Nenner 1: 4/5 · 15 = 60/5 = 12.\n\nDividieren: mit dem Kehrwert multiplizieren (Zähler und Nenner des Divisors tauschen): 3/4 : 3/8 = 3/4 · 8/3 = 2. Das Ergebnis am Ende immer kürzen.',
        keyPoints: ['a/c + b/c = (a + b)/c', 'a/b · c/d = (a · c)/(b · d)', 'a/b : c/d = a/b · d/c', 'Ergebnis am Ende kürzen.'],
        examples: [
          { example: 'Berechnen Sie 1/4 + 2/3.', solution: 'Gemeinsamer Nenner 12: 3/12 + 8/12 = 11/12.' },
          { example: 'Berechnen Sie 2/3 · 3/4.', solution: '(2 · 3)/(3 · 4) = 6/12 = 1/2.' },
        ],
        commonMistakes: [
          { mistake: 'Auch die Nenner addieren: 1/4 + 2/3 = 3/7.', fix: 'Beim Addieren werden die Nenner nicht addiert, sondern gleichnamig gemacht.' },
          { mistake: 'Beim Dividieren den ersten statt den zweiten Bruch umkehren.', fix: 'Nur der Divisor (der Bruch nach :) wird umgekehrt.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 5/6 − 1/4.', solution: '7/12', steps: ['Gemeinsamer Nenner: 12.', '10/12 − 3/12 = 7/12.'] },
          { problem: 'Berechnen Sie 4/5 · 15.', solution: '12', steps: ['15 : 5 = 3.', '4 · 3 = 12.'] },
          { problem: 'Berechnen Sie 3/4 : 3/8.', solution: '2', steps: ['Kehrwert des Divisors: 3/8 → 8/3.', '3/4 · 8/3 = 24/12 = 2.'] },
          { problem: 'Berechnen Sie 2/3 : 4.', solution: '1/6', steps: ['4 = 4/1, der Kehrwert ist 1/4.', '2/3 · 1/4 = 2/12 = 1/6.'] },
        ],
      },
    },

    // ───────── 5. Mixed numbers
    {
      slug: 'g6-fractions-mixed-numbers',
      visuals: [{
        type: 'pieModel', pies: [{ parts: 3, filled: 3, label: '1' }, { parts: 3, filled: 3, label: '1' }, { parts: 3, filled: 1, label: '1/3' }],
        caption: alt('2 1/3 = 2 të plota + 1/3 = 7/3', '2 1/3 = 2 wholes + 1/3 = 7/3', '2 1/3 = 2 Ganze + 1/3 = 7/3'),
        alt: alt('Dy rrathë të plotë dhe një rreth me një të tretën e ngjyrosur: 2 1/3.', 'Two full circles and a circle with one third shaded: 2 1/3.', 'Zwei volle Kreise und ein Kreis mit einem gefärbten Drittel: 2 1/3.'),
      }],
      answers: {
        examples: [[['17/5', '3 + 2/5', 0, '3 2/5']], [['2 + 1/3 + 1 + 3/4', '4 + 1/12', 0, '4 1/12']]],
        practice: [[['11/4', '2 + 3/4', 0, '2 3/4']], [['(3 + 1/2) - (1 + 3/4)', '1 + 3/4', 0, '1 3/4']], [['(1 + 1/2) * 4', 6]]],
      },
      al: {
        title: 'Thyesat e përziera',
        objectives: ['Të shndërroni thyesën e përzier në thyesë dhe anasjelltas.', 'Të mblidhni, të zbritni dhe të shumëzoni thyesa të përziera.'],
        theory: 'Thyesa e përzier ka një pjesë të plotë dhe një thyesë: 2 1/3 do të thotë 2 + 1/3. Ajo është më e madhe se 1.\n\nNga thyesa e përzier në thyesë: shumëzojmë pjesën e plotë me emëruesin dhe shtojmë numëruesin: 2 1/3 = (2 · 3 + 1)/3 = 7/3. Anasjelltas, pjesëtojmë me mbetje: 17/5 = 17 : 5 = 3 me mbetje 2, pra 3 2/5.\n\nPër veprime, zakonisht i shndërrojmë në thyesa, llogarisim dhe në fund e kthejmë përgjigjen në thyesë të përzier. Te mbledhja mund të mbledhim edhe veç pjesët e plota dhe veç thyesat.',
        keyPoints: ['a b/c = (a · c + b)/c', 'Thyesë → e përzier: pjesëtim me mbetje.', 'Për shumëzim, shndërroni gjithmonë në thyesë.'],
        examples: [
          { example: 'Shkruani 17/5 si thyesë të përzier.', solution: '17 : 5 = 3 me mbetje 2, pra 17/5 = 3 2/5.' },
          { example: 'Llogaritni 2 1/3 + 1 3/4.', solution: 'Pjesët e plota: 2 + 1 = 3. Thyesat: 1/3 + 3/4 = 4/12 + 9/12 = 13/12 = 1 1/12. Gjithsej: 3 + 1 1/12 = 4 1/12.' },
        ],
        commonMistakes: [
          { mistake: '2 1/3 lexohet si 2 · 1/3.', fix: 'Thyesa e përzier është shumë: 2 + 1/3.' },
          { mistake: 'Te shumëzimi shumëzohen veç pjesët e plota dhe veç thyesat.', fix: 'Shndërroni në thyesë para se të shumëzoni: 1 1/2 · 4 = 3/2 · 4.' },
        ],
        practice: [
          { problem: 'Shkruani 11/4 si thyesë të përzier.', solution: '2 3/4', steps: ['11 : 4 = 2 me mbetje 3.', '11/4 = 2 3/4.'] },
          { problem: 'Llogaritni 3 1/2 − 1 3/4.', solution: '1 3/4', steps: ['Në thyesa: 7/2 − 7/4.', '14/4 − 7/4 = 7/4.', '7/4 = 1 3/4.'] },
          { problem: 'Një recetë kërkon 1 1/2 gota miell. Sa gota duhen për 4 receta?', solution: '6 gota', steps: ['1 1/2 = 3/2.', '3/2 · 4 = 12/2 = 6.'] },
        ],
      },
      en: {
        title: 'Mixed numbers',
        objectives: ['Convert a mixed number to a fraction and back.', 'Add, subtract and multiply mixed numbers.'],
        theory: 'A mixed number has a whole part and a fraction: 2 1/3 means 2 + 1/3. It is greater than 1.\n\nFrom a mixed number to a fraction: multiply the whole part by the denominator and add the numerator: 2 1/3 = (2 · 3 + 1)/3 = 7/3. The other way round, divide with remainder: 17/5 = 17 ÷ 5 = 3 remainder 2, so 3 2/5.\n\nFor calculations we usually change to fractions, calculate, and at the end write the answer as a mixed number again. When adding, we may also add the whole parts and the fractions separately.',
        keyPoints: ['a b/c = (a · c + b)/c', 'Fraction → mixed number: divide with remainder.', 'For multiplying, always change to a fraction first.'],
        examples: [
          { example: 'Write 17/5 as a mixed number.', solution: '17 ÷ 5 = 3 remainder 2, so 17/5 = 3 2/5.' },
          { example: 'Work out 2 1/3 + 1 3/4.', solution: 'Whole parts: 2 + 1 = 3. Fractions: 1/3 + 3/4 = 4/12 + 9/12 = 13/12 = 1 1/12. Total: 3 + 1 1/12 = 4 1/12.' },
        ],
        commonMistakes: [
          { mistake: 'Reading 2 1/3 as 2 · 1/3.', fix: 'A mixed number is a sum: 2 + 1/3.' },
          { mistake: 'Multiplying the whole parts and the fractions separately.', fix: 'Change to a fraction before multiplying: 1 1/2 · 4 = 3/2 · 4.' },
        ],
        practice: [
          { problem: 'Write 11/4 as a mixed number.', solution: '2 3/4', steps: ['11 ÷ 4 = 2 remainder 3.', '11/4 = 2 3/4.'] },
          { problem: 'Work out 3 1/2 − 1 3/4.', solution: '1 3/4', steps: ['As fractions: 7/2 − 7/4.', '14/4 − 7/4 = 7/4.', '7/4 = 1 3/4.'] },
          { problem: 'A recipe needs 1 1/2 cups of flour. How many cups are needed for 4 recipes?', solution: '6 cups', steps: ['1 1/2 = 3/2.', '3/2 · 4 = 12/2 = 6.'] },
        ],
      },
      de: {
        title: 'Gemischte Zahlen',
        objectives: ['Gemischte Zahlen in Brüche umwandeln und umgekehrt.', 'Mit gemischten Zahlen addieren, subtrahieren und multiplizieren.'],
        theory: 'Eine gemischte Zahl hat einen ganzen Teil und einen Bruch: 2 1/3 bedeutet 2 + 1/3. Sie ist größer als 1.\n\nVon der gemischten Zahl zum Bruch: den ganzen Teil mit dem Nenner multiplizieren und den Zähler addieren: 2 1/3 = (2 · 3 + 1)/3 = 7/3. Umgekehrt dividiert man mit Rest: 17/5 = 17 : 5 = 3 Rest 2, also 3 2/5.\n\nZum Rechnen wandelt man meist in Brüche um, rechnet und schreibt das Ergebnis am Ende wieder als gemischte Zahl. Beim Addieren kann man auch die Ganzen und die Brüche getrennt addieren.',
        keyPoints: ['a b/c = (a · c + b)/c', 'Bruch → gemischte Zahl: Division mit Rest.', 'Beim Multiplizieren immer zuerst in einen Bruch umwandeln.'],
        examples: [
          { example: 'Schreiben Sie 17/5 als gemischte Zahl.', solution: '17 : 5 = 3 Rest 2, also 17/5 = 3 2/5.' },
          { example: 'Berechnen Sie 2 1/3 + 1 3/4.', solution: 'Ganze: 2 + 1 = 3. Brüche: 1/3 + 3/4 = 4/12 + 9/12 = 13/12 = 1 1/12. Zusammen: 3 + 1 1/12 = 4 1/12.' },
        ],
        commonMistakes: [
          { mistake: '2 1/3 als 2 · 1/3 lesen.', fix: 'Eine gemischte Zahl ist eine Summe: 2 + 1/3.' },
          { mistake: 'Beim Multiplizieren Ganze und Brüche getrennt multiplizieren.', fix: 'Vor dem Multiplizieren in einen Bruch umwandeln: 1 1/2 · 4 = 3/2 · 4.' },
        ],
        practice: [
          { problem: 'Schreiben Sie 11/4 als gemischte Zahl.', solution: '2 3/4', steps: ['11 : 4 = 2 Rest 3.', '11/4 = 2 3/4.'] },
          { problem: 'Berechnen Sie 3 1/2 − 1 3/4.', solution: '1 3/4', steps: ['Als Brüche: 7/2 − 7/4.', '14/4 − 7/4 = 7/4.', '7/4 = 1 3/4.'] },
          { problem: 'Für ein Rezept braucht man 1 1/2 Tassen Mehl. Wie viele Tassen braucht man für 4 Rezepte?', solution: '6 Tassen', steps: ['1 1/2 = 3/2.', '3/2 · 4 = 12/2 = 6.'] },
        ],
      },
    },
  ],
};
