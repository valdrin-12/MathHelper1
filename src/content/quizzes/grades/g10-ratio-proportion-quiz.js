// Grade 10 · Theme 12 quiz: Ratio and proportion (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-ratio-proportion-quiz',
  grade: 10,
  theme: 'g10-ratio-proportion',
  order: 12,
  difficulty: 'intermediate',
  icon: '🗺️',
  color: '#E76F51',
  i18n: {
    al: { title: 'Raporti dhe përpjesëtimi', category: 'Klasa 10 · Tema 12', duration: '10 min' },
    en: { title: 'Ratio and proportion', category: 'Grade 10 · Theme 12', duration: '10 min' },
    de: { title: 'Verhältnisse und Proportionen', category: 'Klasse 10 · Thema 12', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['84 / 7 * 3', 36],
      al: {
        question: 'Ndani 84 në raportin 3 : 4.', options: ['28 dhe 21', '36 dhe 48', '42 dhe 42', '48 dhe 36'],
        explanation: '84 : 7 = 12 → 3 · 12 = 36 dhe 4 · 12 = 48.', hint: 'Gjithsej 3 + 4 = 7 pjesë.',
        whyWrong: ['U pjesëtua me 3 dhe me 4 veç e veç; shuma nuk është 84.', null, 'Raporti 3 : 4 nuk është ndarje në gjysmë.', 'Radha u ndërrua: pjesa e parë merr 3 pjesë.'],
      },
      en: {
        question: 'Share 84 in the ratio 3 : 4.', options: ['28 and 21', '36 and 48', '42 and 42', '48 and 36'],
        explanation: '84 ÷ 7 = 12 → 3 · 12 = 36 and 4 · 12 = 48.', hint: '3 + 4 = 7 parts in all.',
        whyWrong: ['84 was divided by 3 and by 4 separately; the sum is not 84.', null, 'The ratio 3 : 4 is not half and half.', 'The order is swapped: the first share gets 3 parts.'],
      },
      de: {
        question: 'Teilen Sie 84 im Verhältnis 3 : 4 auf.', options: ['28 und 21', '36 und 48', '42 und 42', '48 und 36'],
        explanation: '84 : 7 = 12 → 3 · 12 = 36 und 4 · 12 = 48.', hint: 'Insgesamt 3 + 4 = 7 Teile.',
        whyWrong: ['84 wurde einzeln durch 3 und durch 4 geteilt; die Summe ist nicht 84.', null, 'Das Verhältnis 3 : 4 ist keine Halbierung.', 'Die Reihenfolge ist vertauscht: Der erste Teil bekommt 3 Teile.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 75 }, unit: '%',
      verify: ['18 / 24 * 100', 75],
      al: { question: 'Nga 24 nxënës kaluan provimin 18. Sa përqind kaluan?', explanation: '18/24 = 0,75 = 75%.', hint: 'Pjesa : e tëra · 100.', commonMistakes: [{ value: 133.33, why: 'Thyesa u kthye: 24/18.' }, { value: 6, why: 'Ky është numri i atyre që nuk kaluan.' }] },
      en: { question: '18 out of 24 students passed the exam. What percentage passed?', explanation: '18/24 = 0.75 = 75%.', hint: 'Part ÷ whole · 100.', commonMistakes: [{ value: 133.33, why: 'The fraction is upside down: 24/18.' }, { value: 6, why: 'That is the number who did not pass.' }] },
      de: { question: 'Von 24 Lernenden haben 18 die Prüfung bestanden. Wie viel Prozent sind das?', explanation: '18/24 = 0,75 = 75 %.', hint: 'Anteil : Ganzes · 100.', commonMistakes: [{ value: 133.33, why: 'Der Bruch ist umgedreht: 24/18.' }, { value: 6, why: 'Das ist die Anzahl derer, die nicht bestanden haben.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['4 * 25000 == 100000', true],
      al: { question: 'Në hartën me shkallë 1 : 25 000, 4 cm janë 1 km në terren.', explanation: 'E vërtetë: 4 · 25 000 = 100 000 cm = 1 km.', hint: '1 km = 100 000 cm.', whyWrong: '4 · 25 000 = 100 000 cm = 1 km.' },
      en: { question: 'On a map with scale 1 : 25 000, 4 cm stand for 1 km in real life.', explanation: 'True: 4 · 25 000 = 100 000 cm = 1 km.', hint: '1 km = 100 000 cm.', whyWrong: '4 · 25 000 = 100 000 cm = 1 km.' },
      de: { question: 'Auf einer Karte im Maßstab 1 : 25 000 entsprechen 4 cm in Wirklichkeit 1 km.', explanation: 'Richtig: 4 · 25 000 = 100 000 cm = 1 km.', hint: '1 km = 100 000 cm.', whyWrong: '4 · 25 000 = 100 000 cm = 1 km.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['80 * 1.15', 92],
      al: {
        question: 'Çmimi 80 € rritet 15%. Sa është çmimi i ri?', options: ['92 €', '95 €', '68 €', '12 €'],
        explanation: '80 · 1,15 = 92 €.', hint: 'Shumëzuesi 1,15.',
        whyWrong: [null, 'U shtuan 15 €, jo 15%.', 'Kjo është ulje 15%, jo rritje.', 'Kjo është vetëm rritja, jo çmimi i ri.'],
      },
      en: {
        question: 'A price of €80 goes up by 15%. What is the new price?', options: ['€92', '€95', '€68', '€12'],
        explanation: '80 · 1.15 = €92.', hint: 'The multiplier 1.15.',
        whyWrong: [null, '€15 was added, not 15%.', 'That is a 15% decrease, not an increase.', 'That is only the increase, not the new price.'],
      },
      de: {
        question: 'Ein Preis von 80 € steigt um 15 %. Wie hoch ist der neue Preis?', options: ['92 €', '95 €', '68 €', '12 €'],
        explanation: '80 · 1,15 = 92 €.', hint: 'Der Faktor 1,15.',
        whyWrong: [null, 'Es wurden 15 € addiert, nicht 15 %.', 'Das ist eine Abnahme um 15 %, keine Zunahme.', 'Das ist nur die Erhöhung, nicht der neue Preis.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 18 },
      verify: ['12 / 2 * 3', 18],
      al: { question: 'Raporti djem : vajza është 2 : 3. Janë 12 djem. Sa vajza janë?', explanation: 'Një pjesë = 12 : 2 = 6; vajzat = 3 · 6 = 18.', hint: 'Sa vlen një pjesë?', commonMistakes: [{ value: 8, why: 'Raporti u përdor mbrapsht: 12 : 3 · 2.' }, { value: 30, why: 'Ky është numri i të gjithë nxënësve.' }] },
      en: { question: 'The ratio boys : girls is 2 : 3. There are 12 boys. How many girls are there?', explanation: 'One part = 12 ÷ 2 = 6; girls = 3 · 6 = 18.', hint: 'What is one part worth?', commonMistakes: [{ value: 8, why: 'The ratio was used the wrong way round: 12 ÷ 3 · 2.' }, { value: 30, why: 'That is the whole class.' }] },
      de: { question: 'Das Verhältnis Jungen : Mädchen ist 2 : 3. Es sind 12 Jungen. Wie viele Mädchen sind es?', explanation: 'Ein Teil = 12 : 2 = 6; Mädchen = 3 · 6 = 18.', hint: 'Wie viel ist ein Teil?', commonMistakes: [{ value: 8, why: 'Das Verhältnis wurde umgedreht: 12 : 3 · 2.' }, { value: 30, why: 'Das ist die ganze Klasse.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['(300 - 250) / 250 * 100', 20],
      al: {
        question: 'Numri i vizitorëve u rrit nga 250 në 300. Sa përqind është rritja?', options: ['50%', '16,7%', '20%', '120%'],
        explanation: '50/250 = 0,2 = 20%.', hint: 'Ndryshimi : vlera fillestare.',
        whyWrong: ['50 është ndryshimi në numër, jo në përqindje.', 'U pjesëtua me vlerën e re: 50/300.', null, 'Kjo është 300/250: vlera e re si përqindje e së vjetrës.'],
      },
      en: {
        question: 'The number of visitors went up from 250 to 300. What is the percentage increase?', options: ['50%', '16.7%', '20%', '120%'],
        explanation: '50/250 = 0.2 = 20%.', hint: 'Change ÷ original value.',
        whyWrong: ['50 is the change in number, not in percent.', 'It was divided by the new value: 50/300.', null, 'That is 300/250: the new value as a percentage of the old.'],
      },
      de: {
        question: 'Die Besucherzahl stieg von 250 auf 300. Um wie viel Prozent?', options: ['50 %', '16,7 %', '20 %', '120 %'],
        explanation: '50/250 = 0,2 = 20 %.', hint: 'Änderung : ursprünglicher Wert.',
        whyWrong: ['50 ist die Änderung als Anzahl, nicht in Prozent.', 'Es wurde durch den neuen Wert geteilt: 50/300.', null, 'Das ist 300/250: der neue Wert in Prozent des alten.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['1.1 * 0.9 == 1', false],
      al: { question: 'Nëse një çmim rritet 10% dhe pastaj ulet 10%, kthehet në vlerën fillestare.', explanation: 'E gabuar: 1,1 · 0,9 = 0,99, pra çmimi bie 1%.', hint: 'Shumëzoni shumëzuesit.', whyWrong: 'Ulja 10% llogaritet nga çmimi më i lartë: 1,1 · 0,9 = 0,99.' },
      en: { question: 'If a price goes up by 10% and then down by 10%, it is back to where it started.', explanation: 'False: 1.1 · 0.9 = 0.99, so the price ends 1% lower.', hint: 'Multiply the multipliers.', whyWrong: 'The 10% decrease is taken from the higher price: 1.1 · 0.9 = 0.99.' },
      de: { question: 'Steigt ein Preis um 10 % und sinkt dann um 10 %, ist er wieder beim Ausgangswert.', explanation: 'Falsch: 1,1 · 0,9 = 0,99, der Preis ist also 1 % niedriger.', hint: 'Die Faktoren multiplizieren.', whyWrong: 'Die 10 % Abnahme beziehen sich auf den höheren Preis: 1,1 · 0,9 = 0,99.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'hard', correct: 3,
      verify: ['64 / 0.8', 80],
      al: {
        question: 'Pas uljes 20% çmimi është 64 €. Sa ishte çmimi fillestar?', options: ['76,80 €', '51,20 €', '84 €', '80 €'],
        explanation: '0,8 · x = 64 → x = 64 : 0,8 = 80 €.', hint: '64 € janë 80% e çmimit fillestar.',
        whyWrong: ['U shtua 20% e 64-ës, por 20% ishte e çmimit fillestar.', 'U ul edhe një herë 20%.', 'U shtuan 20 €, jo 20%.', null],
      },
      en: {
        question: 'After a 20% decrease the price is €64. What was the original price?', options: ['€76.80', '€51.20', '€84', '€80'],
        explanation: '0.8 · x = 64 → x = 64 ÷ 0.8 = €80.', hint: '€64 is 80% of the original price.',
        whyWrong: ['20% of 64 was added, but the 20% was of the original price.', 'It was decreased by 20% once more.', '€20 was added, not 20%.', null],
      },
      de: {
        question: 'Nach 20 % Rabatt kostet etwas 64 €. Wie hoch war der ursprüngliche Preis?', options: ['76,80 €', '51,20 €', '84 €', '80 €'],
        explanation: '0,8 · x = 64 → x = 64 : 0,8 = 80 €.', hint: '64 € sind 80 % des ursprünglichen Preises.',
        whyWrong: ['Es wurden 20 % von 64 addiert, die 20 % bezogen sich aber auf den alten Preis.', 'Es wurde noch einmal um 20 % reduziert.', 'Es wurden 20 € addiert, nicht 20 %.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 120 }, unit: '€',
      verify: ['150 / 1.25', 120],
      al: { question: 'Pas rritjes 25% një biçikletë kushton 150 €. Sa kushtonte më parë?', explanation: '1,25 · x = 150 → x = 150 : 1,25 = 120 €.', hint: '150 € janë 125% e çmimit të vjetër.', commonMistakes: [{ value: 112.5, why: 'U zbrit 25% e 150-ës, por 25% ishte e çmimit të vjetër.' }, { value: 125, why: 'U zbritën 25 €, jo 25%.' }] },
      en: { question: 'After a 25% increase a bike costs €150. How much did it cost before?', explanation: '1.25 · x = 150 → x = 150 ÷ 1.25 = €120.', hint: '€150 is 125% of the old price.', commonMistakes: [{ value: 112.5, why: '25% of 150 was taken off, but the 25% was of the old price.' }, { value: 125, why: '€25 was taken off, not 25%.' }] },
      de: { question: 'Nach einer Erhöhung um 25 % kostet ein Fahrrad 150 €. Wie viel kostete es vorher?', explanation: '1,25 · x = 150 → x = 150 : 1,25 = 120 €.', hint: '150 € sind 125 % des alten Preises.', commonMistakes: [{ value: 112.5, why: 'Es wurden 25 % von 150 abgezogen, die 25 % bezogen sich aber auf den alten Preis.' }, { value: 125, why: 'Es wurden 25 € abgezogen, nicht 25 %.' }] },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 1,
      verify: ['2.4 * 100000 / 50000', 4.8],
      al: {
        question: 'Largësia në terren është 2,4 km. Sa është në hartën me shkallë 1 : 50 000?', options: ['48 cm', '4,8 cm', '0,48 cm', '0,048 cm'],
        explanation: '2,4 km = 240 000 cm; 240 000 : 50 000 = 4,8 cm.', hint: '1 km = 100 000 cm.',
        whyWrong: ['Një zero e tepërt gjatë kthimit km → cm.', null, 'Një zero më pak gjatë kthimit km → cm.', 'U kthye vetëm në metra (2 400 m), jo në centimetra.'],
      },
      en: {
        question: 'A real distance is 2.4 km. How long is it on a map with scale 1 : 50 000?', options: ['48 cm', '4.8 cm', '0.48 cm', '0.048 cm'],
        explanation: '2.4 km = 240 000 cm; 240 000 ÷ 50 000 = 4.8 cm.', hint: '1 km = 100 000 cm.',
        whyWrong: ['One zero too many when converting km → cm.', null, 'One zero too few when converting km → cm.', 'It was converted to metres only (2 400 m), not to centimetres.'],
      },
      de: {
        question: 'Eine Strecke ist in Wirklichkeit 2,4 km lang. Wie lang ist sie auf einer Karte im Maßstab 1 : 50 000?', options: ['48 cm', '4,8 cm', '0,48 cm', '0,048 cm'],
        explanation: '2,4 km = 240 000 cm; 240 000 : 50 000 = 4,8 cm.', hint: '1 km = 100 000 cm.',
        whyWrong: ['Eine Null zu viel beim Umrechnen km → cm.', null, 'Eine Null zu wenig beim Umrechnen km → cm.', 'Es wurde nur in Meter umgerechnet (2 400 m), nicht in Zentimeter.'],
      },
    },
  ],
};
