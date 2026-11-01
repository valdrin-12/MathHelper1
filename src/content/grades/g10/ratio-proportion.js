// Grade 10 · Theme 12: Ratio and proportion (May–June)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g10-ratio-proportion',
  i18n: {
    al: { title: 'Raporti dhe përpjesëtimi', description: 'Pjesa e së tërës, ndarja në raport, shkalla e hartës dhe ndryshimi në përqindje, edhe në drejtim të kundërt.' },
    en: { title: 'Ratio and proportion', description: 'A part of a whole, sharing in a ratio, map scales and percentage change, including reverse percentages.' },
    de: { title: 'Verhältnisse und Proportionen', description: 'Anteil an einem Ganzen, Aufteilen im Verhältnis, Maßstab und prozentuale Änderung, auch rückwärts gerechnet.' },
  },
  lessons: [
    // ───────── 1. Part of a whole
    {
      slug: 'g10-ratio-proportion-part-of-whole',
      visuals: [{
        type: 'fractionBar', bars: [{ parts: 8, filled: 3 }],
        caption: alt('45 min nga 2 h = 45/120 = 3/8 = 37,5%.', '45 min out of 2 h = 45/120 = 3/8 = 37.5%.', '45 min von 2 h = 45/120 = 3/8 = 37,5 %.'),
        alt: alt('Një shirit i ndarë në 8 pjesë, 3 të ngjyrosura.', 'A bar split into 8 parts with 3 shaded.', 'Ein Streifen in 8 Teilen, 3 davon gefärbt.'),
      }],
      answers: {
        examples: [[['45 / 120 * 100', 37.5]], [['2/5 * 30', 12]]],
        practice: [[['18 / 24 * 100', 75]], [['3/8 * 64', 24]], [['18 / 0.4', 45]]],
      },
      al: {
        title: 'Pjesa e së tërës',
        objectives: ['Ta shprehni një sasi si thyesë ose përqindje të një tjetre.', 'Të gjeni të tërën kur njihet një pjesë e saj.'],
        theory: 'Për ta shprehur a si pjesë të b, shkruajmë thyesën a/b, me të dyja madhësitë në të njëjtën njësi. 45 min nga 2 h: 2 h = 120 min, pra 45/120 = 3/8 = 37,5%.\n\nPjesa e një sasie: 2/5 e 30 = 2/5 · 30 = 12.\n\nKur njihet pjesa dhe përqindja, e tëra gjendet duke pjesëtuar: 40% e një numri është 18 → numri = 18 : 0,4 = 45.',
        keyPoints: ['Pjesa = a/b (njësi të njëjta)', 'Përqindja = a/b · 100', 'E tëra = pjesa : përqindja'],
        examples: [
          { example: 'Sa pjesë dhe sa përqind janë 45 min nga 2 orë?', solution: '45/120 = 3/8 = 37,5%.' },
          { example: 'Në një klasë me 30 nxënës, 2/5 janë vajza. Sa vajza janë?', solution: '2/5 · 30 = 12.' },
        ],
        commonMistakes: [
          { mistake: '45 min nga 2 h shkruhet 45/2.', fix: 'Njësitë duhet të jenë të njëjta: 2 h = 120 min.' },
          { mistake: 'Kur 40% e numrit është 18, llogaritet 40% e 18.', fix: 'E tëra është e panjohura: 18 : 0,4 = 45.' },
        ],
        practice: [
          { problem: 'Nga 24 nxënës kaluan provimin 18. Sa përqind kaluan?', solution: '75%', steps: ['18/24 = 0,75.', '= 75%.'] },
          { problem: 'Sa është 3/8 e 64?', solution: '24', steps: ['64 : 8 = 8.', '3 · 8 = 24.'] },
          { problem: '40% e një numri është 18. Cili është numri?', solution: '45', steps: ['0,4 · x = 18.', 'x = 18 : 0,4 = 45.'] },
        ],
      },
      en: {
        title: 'Part of a whole',
        objectives: ['Write one quantity as a fraction or percentage of another.', 'Find the whole when a part of it is known.'],
        theory: 'To write a as a part of b, write the fraction a/b, with both quantities in the same unit. 45 min out of 2 h: 2 h = 120 min, so 45/120 = 3/8 = 37.5%.\n\nA fraction of an amount: 2/5 of 30 = 2/5 · 30 = 12.\n\nWhen the part and the percentage are known, find the whole by dividing: 40% of a number is 18 → the number = 18 ÷ 0.4 = 45.',
        keyPoints: ['Part = a/b (same units)', 'Percentage = a/b · 100', 'Whole = part ÷ percentage'],
        examples: [
          { example: 'What fraction and what percentage is 45 min of 2 hours?', solution: '45/120 = 3/8 = 37.5%.' },
          { example: 'In a class of 30 students, 2/5 are girls. How many girls are there?', solution: '2/5 · 30 = 12.' },
        ],
        commonMistakes: [
          { mistake: '45 min out of 2 h is written 45/2.', fix: 'The units must be the same: 2 h = 120 min.' },
          { mistake: 'When 40% of a number is 18, 40% of 18 is worked out.', fix: 'The whole is the unknown: 18 ÷ 0.4 = 45.' },
        ],
        practice: [
          { problem: '18 out of 24 students passed the exam. What percentage passed?', solution: '75%', steps: ['18/24 = 0.75.', '= 75%.'] },
          { problem: 'What is 3/8 of 64?', solution: '24', steps: ['64 ÷ 8 = 8.', '3 · 8 = 24.'] },
          { problem: '40% of a number is 18. What is the number?', solution: '45', steps: ['0.4 · x = 18.', 'x = 18 ÷ 0.4 = 45.'] },
        ],
      },
      de: {
        title: 'Anteil an einem Ganzen',
        objectives: ['Eine Größe als Bruch oder Prozentsatz einer anderen angeben.', 'Den Grundwert bestimmen, wenn ein Anteil bekannt ist.'],
        theory: 'Um a als Anteil von b anzugeben, schreibt man den Bruch a/b, beide Größen in derselben Einheit. 45 min von 2 h: 2 h = 120 min, also 45/120 = 3/8 = 37,5 %.\n\nBruchteil einer Größe: 2/5 von 30 = 2/5 · 30 = 12.\n\nSind Prozentwert und Prozentsatz bekannt, erhält man den Grundwert durch Division: 40 % einer Zahl sind 18 → Zahl = 18 : 0,4 = 45.',
        keyPoints: ['Anteil = a/b (gleiche Einheiten)', 'Prozentsatz = a/b · 100', 'Grundwert = Prozentwert : Prozentsatz'],
        examples: [
          { example: 'Welcher Anteil und wie viel Prozent sind 45 min von 2 Stunden?', solution: '45/120 = 3/8 = 37,5 %.' },
          { example: 'In einer Klasse mit 30 Lernenden sind 2/5 Mädchen. Wie viele Mädchen sind es?', solution: '2/5 · 30 = 12.' },
        ],
        commonMistakes: [
          { mistake: '45 min von 2 h wird als 45/2 geschrieben.', fix: 'Die Einheiten müssen gleich sein: 2 h = 120 min.' },
          { mistake: 'Wenn 40 % einer Zahl 18 sind, werden 40 % von 18 berechnet.', fix: 'Der Grundwert ist gesucht: 18 : 0,4 = 45.' },
        ],
        practice: [
          { problem: 'Von 24 Lernenden haben 18 die Prüfung bestanden. Wie viel Prozent sind das?', solution: '75 %', steps: ['18/24 = 0,75.', '= 75 %.'] },
          { problem: 'Wie viel sind 3/8 von 64?', solution: '24', steps: ['64 : 8 = 8.', '3 · 8 = 24.'] },
          { problem: '40 % einer Zahl sind 18. Wie heißt die Zahl?', solution: '45', steps: ['0,4 · x = 18.', 'x = 18 : 0,4 = 45.'] },
        ],
      },
    },
    // ───────── 2. Ratio and scale
    {
      slug: 'g10-ratio-proportion-ratio-scale',
      visuals: [{
        type: 'fractionBar', bars: [{ parts: 7, filled: 3 }],
        caption: alt('84 në raportin 3 : 4: 7 pjesë nga 12 → 3 · 12 = 36 dhe 4 · 12 = 48.', '84 in the ratio 3 : 4: 7 parts of 12 → 3 · 12 = 36 and 4 · 12 = 48.', '84 im Verhältnis 3 : 4: 7 Teile zu 12 → 3 · 12 = 36 und 4 · 12 = 48.'),
        alt: alt('Një shirit me 7 pjesë të barabarta, 3 të ngjyrosura dhe 4 jo.', 'A bar of 7 equal parts, 3 shaded and 4 not.', 'Ein Streifen aus 7 gleichen Teilen, 3 gefärbt und 4 nicht.'),
      }],
      answers: {
        examples: [[['84 / 7 * 3', 36], ['84 / 7 * 4', 48]], [['6 * 25000 / 100000', 1.5]]],
        practice: [[['18 / 6', 3], ['24 / 6', 4]], [['12 / 2 * 3', 18]], [['2.4 * 100000 / 50000', 4.8]]],
      },
      al: {
        title: 'Raporti dhe shkalla',
        objectives: ['Të thjeshtoni një raport dhe të ndani një sasi në një raport të dhënë.', 'Të përdorni shkallën e hartës për të kaluar nga harta te gjatësia e vërtetë dhe anasjelltas.'],
        theory: 'Raporti a : b krahason dy sasi dhe thjeshtohet si thyesë: 18 : 24 = 3 : 4.\n\nPër ta ndarë një sasi në raportin 3 : 4, e ndajmë në 3 + 4 = 7 pjesë të barabarta: 84 : 7 = 12, pra 3 · 12 = 36 dhe 4 · 12 = 48.\n\nShkalla e hartës 1 : 25 000 do të thotë: 1 cm në hartë = 25 000 cm = 250 m në terren. Kujdes me njësitë: 1 km = 100 000 cm.',
        keyPoints: ['Raporti thjeshtohet si thyesë', 'Ndarja a : b → a + b pjesë', 'Shkalla 1 : n → 1 cm = n cm; 1 km = 100 000 cm'],
        examples: [
          { example: 'Ndani 84 në raportin 3 : 4.', solution: '84 : 7 = 12 → 3 · 12 = 36 dhe 4 · 12 = 48.' },
          { example: 'Në hartën me shkallë 1 : 25 000 largësia është 6 cm. Sa është në terren?', solution: '6 · 25 000 = 150 000 cm = 1,5 km.' },
        ],
        commonMistakes: [
          { mistake: '84 në raportin 3 : 4 ndahet 84 : 3 dhe 84 : 4.', fix: 'Gjithsej janë 3 + 4 = 7 pjesë: 84 : 7 = 12 për pjesë.' },
          { mistake: '150 000 cm shkruhen 15 km.', fix: '1 km = 100 000 cm, pra 150 000 cm = 1,5 km.' },
        ],
        practice: [
          { problem: 'Thjeshtoni raportin 18 : 24.', solution: '3 : 4', steps: ['PMP(18, 24) = 6.', '18 : 6 = 3 dhe 24 : 6 = 4 → 3 : 4.'] },
          { problem: 'Raporti djem : vajza është 2 : 3. Janë 12 djem. Sa vajza janë?', solution: '18', steps: ['Një pjesë: 12 : 2 = 6.', 'Vajzat: 3 · 6 = 18.'] },
          { problem: 'Largësia në terren është 2,4 km. Sa është në hartën me shkallë 1 : 50 000?', solution: '4,8 cm', steps: ['2,4 km = 240 000 cm.', '240 000 : 50 000 = 4,8 cm.'] },
        ],
      },
      en: {
        title: 'Ratio and scale',
        objectives: ['Simplify a ratio and share an amount in a given ratio.', 'Use a map scale to go from map to real distance and back.'],
        theory: 'A ratio a : b compares two amounts and simplifies like a fraction: 18 : 24 = 3 : 4.\n\nTo share an amount in the ratio 3 : 4, split it into 3 + 4 = 7 equal parts: 84 ÷ 7 = 12, so 3 · 12 = 36 and 4 · 12 = 48.\n\nA map scale of 1 : 25 000 means: 1 cm on the map = 25 000 cm = 250 m in real life. Watch the units: 1 km = 100 000 cm.',
        keyPoints: ['A ratio simplifies like a fraction', 'Sharing in a : b → a + b parts', 'Scale 1 : n → 1 cm = n cm; 1 km = 100 000 cm'],
        examples: [
          { example: 'Share 84 in the ratio 3 : 4.', solution: '84 ÷ 7 = 12 → 3 · 12 = 36 and 4 · 12 = 48.' },
          { example: 'On a map with scale 1 : 25 000 a distance is 6 cm. How far is it in real life?', solution: '6 · 25 000 = 150 000 cm = 1.5 km.' },
        ],
        commonMistakes: [
          { mistake: '84 in the ratio 3 : 4 is split as 84 ÷ 3 and 84 ÷ 4.', fix: 'There are 3 + 4 = 7 parts in all: 84 ÷ 7 = 12 per part.' },
          { mistake: '150 000 cm is written as 15 km.', fix: '1 km = 100 000 cm, so 150 000 cm = 1.5 km.' },
        ],
        practice: [
          { problem: 'Simplify the ratio 18 : 24.', solution: '3 : 4', steps: ['HCF(18, 24) = 6.', '18 ÷ 6 = 3 and 24 ÷ 6 = 4 → 3 : 4.'] },
          { problem: 'The ratio boys : girls is 2 : 3. There are 12 boys. How many girls are there?', solution: '18', steps: ['One part: 12 ÷ 2 = 6.', 'Girls: 3 · 6 = 18.'] },
          { problem: 'A real distance is 2.4 km. How long is it on a map with scale 1 : 50 000?', solution: '4.8 cm', steps: ['2.4 km = 240 000 cm.', '240 000 ÷ 50 000 = 4.8 cm.'] },
        ],
      },
      de: {
        title: 'Verhältnis und Maßstab',
        objectives: ['Ein Verhältnis kürzen und eine Größe in einem gegebenen Verhältnis aufteilen.', 'Mit dem Maßstab einer Karte von der Karte zur Wirklichkeit und zurück rechnen.'],
        theory: 'Ein Verhältnis a : b vergleicht zwei Größen und lässt sich wie ein Bruch kürzen: 18 : 24 = 3 : 4.\n\nUm eine Größe im Verhältnis 3 : 4 aufzuteilen, teilt man sie in 3 + 4 = 7 gleiche Teile: 84 : 7 = 12, also 3 · 12 = 36 und 4 · 12 = 48.\n\nDer Maßstab 1 : 25 000 bedeutet: 1 cm auf der Karte = 25 000 cm = 250 m in der Wirklichkeit. Auf die Einheiten achten: 1 km = 100 000 cm.',
        keyPoints: ['Ein Verhältnis kürzt man wie einen Bruch', 'Aufteilen im Verhältnis a : b → a + b Teile', 'Maßstab 1 : n → 1 cm = n cm; 1 km = 100 000 cm'],
        examples: [
          { example: 'Teilen Sie 84 im Verhältnis 3 : 4 auf.', solution: '84 : 7 = 12 → 3 · 12 = 36 und 4 · 12 = 48.' },
          { example: 'Auf einer Karte im Maßstab 1 : 25 000 ist eine Strecke 6 cm lang. Wie lang ist sie in Wirklichkeit?', solution: '6 · 25 000 = 150 000 cm = 1,5 km.' },
        ],
        commonMistakes: [
          { mistake: '84 im Verhältnis 3 : 4 wird als 84 : 3 und 84 : 4 gerechnet.', fix: 'Es sind insgesamt 3 + 4 = 7 Teile: 84 : 7 = 12 pro Teil.' },
          { mistake: '150 000 cm werden als 15 km geschrieben.', fix: '1 km = 100 000 cm, also 150 000 cm = 1,5 km.' },
        ],
        practice: [
          { problem: 'Kürzen Sie das Verhältnis 18 : 24.', solution: '3 : 4', steps: ['ggT(18, 24) = 6.', '18 : 6 = 3 und 24 : 6 = 4 → 3 : 4.'] },
          { problem: 'Das Verhältnis Jungen : Mädchen ist 2 : 3. Es sind 12 Jungen. Wie viele Mädchen sind es?', solution: '18', steps: ['Ein Teil: 12 : 2 = 6.', 'Mädchen: 3 · 6 = 18.'] },
          { problem: 'Eine Strecke ist in Wirklichkeit 2,4 km lang. Wie lang ist sie auf einer Karte im Maßstab 1 : 50 000?', solution: '4,8 cm', steps: ['2,4 km = 240 000 cm.', '240 000 : 50 000 = 4,8 cm.'] },
        ],
      },
    },
    // ───────── 3. Percentage change
    {
      slug: 'g10-ratio-proportion-percent-change',
      visuals: [{
        type: 'barChart', max: 100, step: 20, showValues: true,
        bars: [{ label: alt('çmimi fillestar', 'original price', 'ursprünglicher Preis'), value: 80 }, { label: alt('pas −20%', 'after −20%', 'nach −20 %'), value: 64 }],
        caption: alt('80 € · 0,8 = 64 €; mbrapsht: 64 € : 0,8 = 80 €.', '€80 · 0.8 = €64; backwards: €64 ÷ 0.8 = €80.', '80 € · 0,8 = 64 €; rückwärts: 64 € : 0,8 = 80 €.'),
        alt: alt('Dy shtylla: çmimi fillestar 80 € dhe pas uljes 20% 64 €.', 'Two bars: original price €80 and after a 20% decrease €64.', 'Zwei Säulen: ursprünglicher Preis 80 € und nach 20 % Rabatt 64 €.'),
      }],
      answers: {
        examples: [[['80 * 1.15', 92]], [['64 / 0.8', 80]]],
        practice: [[['(300 - 250) / 250 * 100', 20]], [['1200 * 0.95', 1140]], [['150 / 1.25', 120]]],
      },
      al: {
        title: 'Ndryshimi në përqindje',
        objectives: ['Të rritni ose zvogëloni një sasi me përqindje duke përdorur shumëzuesin.', 'Të llogaritni ndryshimin në përqindje dhe vlerën fillestare (përqindja e kundërt).'],
        theory: 'Rritja me p% do të thotë shumëzim me (1 + p/100); ulja me p% shumëzim me (1 − p/100). 80 € + 15% → 80 · 1,15 = 92 €.\n\nNdryshimi në përqindje = ndryshimi : vlera fillestare · 100. Nga 250 në 300: 50/250 = 20%.\n\nPërqindja e kundërt: pas një uljeje 20% çmimi është 64 €. Atëherë 0,8 · x = 64, pra x = 64 : 0,8 = 80 €. Nuk shtojmë 20% të 64-ës, sepse 20% ishte e 80-ës.',
        keyPoints: ['Rritje p% → · (1 + p/100)', 'Ulje p% → · (1 − p/100)', 'Vlera fillestare = vlera e re : shumëzuesi'],
        examples: [
          { example: 'Çmimi 80 € rritet 15%. Sa është çmimi i ri?', solution: '80 · 1,15 = 92 €.' },
          { example: 'Pas uljes 20% çmimi është 64 €. Sa ishte fillimisht?', solution: '64 : 0,8 = 80 €.' },
        ],
        commonMistakes: [
          { mistake: 'Pas uljes 20% në 64 €, çmimi fillestar llogaritet 64 + 20% = 76,80 €.', fix: '20% ishte e çmimit fillestar: 64 : 0,8 = 80 €.' },
          { mistake: 'Ndryshimi në përqindje pjesëtohet me vlerën e re.', fix: 'Pjesëtohet gjithmonë me vlerën fillestare.' },
        ],
        practice: [
          { problem: 'Numri i vizitorëve u rrit nga 250 në 300. Sa përqind është rritja?', solution: '20%', steps: ['Ndryshimi: 300 − 250 = 50.', '50/250 = 0,2 = 20%.'] },
          { problem: 'Paga 1 200 € ulet 5%. Sa është paga e re?', solution: '1 140 €', steps: ['Shumëzuesi: 1 − 0,05 = 0,95.', '1 200 · 0,95 = 1 140 €.'] },
          { problem: 'Pas rritjes 25% një biçikletë kushton 150 €. Sa kushtonte më parë?', solution: '120 €', steps: ['1,25 · x = 150.', 'x = 150 : 1,25 = 120 €.'] },
        ],
      },
      en: {
        title: 'Percentage change',
        objectives: ['Increase or decrease an amount by a percentage using a multiplier.', 'Work out a percentage change and the original value (reverse percentage).'],
        theory: 'Increasing by p% means multiplying by (1 + p/100); decreasing by p% means multiplying by (1 − p/100). €80 + 15% → 80 · 1.15 = €92.\n\nPercentage change = change ÷ original value · 100. From 250 to 300: 50/250 = 20%.\n\nReverse percentage: after a 20% decrease the price is €64. Then 0.8 · x = 64, so x = 64 ÷ 0.8 = €80. We do not add 20% of 64, because the 20% was of 80.',
        keyPoints: ['Increase p% → · (1 + p/100)', 'Decrease p% → · (1 − p/100)', 'Original = new value ÷ multiplier'],
        examples: [
          { example: 'A price of €80 goes up by 15%. What is the new price?', solution: '80 · 1.15 = €92.' },
          { example: 'After a 20% decrease the price is €64. What was it before?', solution: '64 ÷ 0.8 = €80.' },
        ],
        commonMistakes: [
          { mistake: 'After a 20% decrease to €64, the original is worked out as 64 + 20% = €76.80.', fix: 'The 20% was of the original price: 64 ÷ 0.8 = €80.' },
          { mistake: 'The percentage change is divided by the new value.', fix: 'Always divide by the original value.' },
        ],
        practice: [
          { problem: 'The number of visitors went up from 250 to 300. What is the percentage increase?', solution: '20%', steps: ['Change: 300 − 250 = 50.', '50/250 = 0.2 = 20%.'] },
          { problem: 'A salary of €1 200 is cut by 5%. What is the new salary?', solution: '€1 140', steps: ['Multiplier: 1 − 0.05 = 0.95.', '1 200 · 0.95 = €1 140.'] },
          { problem: 'After a 25% increase a bike costs €150. How much did it cost before?', solution: '€120', steps: ['1.25 · x = 150.', 'x = 150 ÷ 1.25 = €120.'] },
        ],
      },
      de: {
        title: 'Prozentuale Änderung',
        objectives: ['Eine Größe mit dem Wachstums- oder Abnahmefaktor um einen Prozentsatz vermehren oder vermindern.', 'Die prozentuale Änderung und den ursprünglichen Wert berechnen (Rückwärtsrechnen).'],
        theory: 'Eine Zunahme um p % bedeutet Multiplikation mit (1 + p/100), eine Abnahme um p % Multiplikation mit (1 − p/100). 80 € + 15 % → 80 · 1,15 = 92 €.\n\nProzentuale Änderung = Änderung : ursprünglicher Wert · 100. Von 250 auf 300: 50/250 = 20 %.\n\nRückwärtsrechnen: Nach 20 % Rabatt kostet etwas 64 €. Dann gilt 0,8 · x = 64, also x = 64 : 0,8 = 80 €. Man addiert nicht 20 % von 64, denn die 20 % bezogen sich auf 80.',
        keyPoints: ['Zunahme p % → · (1 + p/100)', 'Abnahme p % → · (1 − p/100)', 'Ursprünglicher Wert = neuer Wert : Faktor'],
        examples: [
          { example: 'Ein Preis von 80 € steigt um 15 %. Wie hoch ist der neue Preis?', solution: '80 · 1,15 = 92 €.' },
          { example: 'Nach 20 % Rabatt kostet etwas 64 €. Wie viel kostete es vorher?', solution: '64 : 0,8 = 80 €.' },
        ],
        commonMistakes: [
          { mistake: 'Nach 20 % Rabatt auf 64 € wird der alte Preis als 64 + 20 % = 76,80 € berechnet.', fix: 'Die 20 % bezogen sich auf den alten Preis: 64 : 0,8 = 80 €.' },
          { mistake: 'Die prozentuale Änderung wird durch den neuen Wert geteilt.', fix: 'Immer durch den ursprünglichen Wert teilen.' },
        ],
        practice: [
          { problem: 'Die Besucherzahl stieg von 250 auf 300. Um wie viel Prozent?', solution: '20 %', steps: ['Änderung: 300 − 250 = 50.', '50/250 = 0,2 = 20 %.'] },
          { problem: 'Ein Gehalt von 1 200 € sinkt um 5 %. Wie hoch ist das neue Gehalt?', solution: '1 140 €', steps: ['Faktor: 1 − 0,05 = 0,95.', '1 200 · 0,95 = 1 140 €.'] },
          { problem: 'Nach einer Erhöhung um 25 % kostet ein Fahrrad 150 €. Wie viel kostete es vorher?', solution: '120 €', steps: ['1,25 · x = 150.', 'x = 150 : 1,25 = 120 €.'] },
        ],
      },
    },
  ],
};
