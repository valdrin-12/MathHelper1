// Grade 9 · Theme 5 quiz: Proportionality (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g9-proportionality-quiz',
  grade: 9,
  theme: 'g9-proportionality',
  order: 5,
  difficulty: 'intermediate',
  icon: '%',
  color: '#2A9D8F',
  i18n: {
    al: { title: 'Proporcionaliteti', category: 'Klasa 9 · Tema 5', duration: '10 min' },
    en: { title: 'Proportionality', category: 'Grade 9 · Theme 5', duration: '10 min' },
    de: { title: 'Proportionalität', category: 'Klasse 9 · Thema 5', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['360 / 9 * 4', 160],
      al: {
        question: '360 € ndahen në raportin 2 : 3 : 4. Sa është pjesa më e madhe?', options: ['120 €', '160 €', '180 €', '90 €'],
        explanation: '9 pjesë, 40 € secila; 4 · 40 = 160 €.', hint: 'Mblidhni pjesët.',
        whyWrong: ['Kjo është pjesa e mesme.', null, 'Kjo do të ishte gjysma e shumës.', 'Pjesëtuat me 4 në vend të 9.'],
      },
      en: {
        question: '€360 is shared in the ratio 2 : 3 : 4. What is the largest share?', options: ['€120', '€160', '€180', '€90'],
        explanation: '9 parts, €40 each; 4 · 40 = €160.', hint: 'Add the parts.',
        whyWrong: ['That is the middle share.', null, 'That would be half the total.', 'You divided by 4 instead of 9.'],
      },
      de: {
        question: '360 € werden im Verhältnis 2 : 3 : 4 aufgeteilt. Wie groß ist der größte Anteil?', options: ['120 €', '160 €', '180 €', '90 €'],
        explanation: '9 Teile zu je 40 €; 4 · 40 = 160 €.', hint: 'Die Teile addieren.',
        whyWrong: ['Das ist der mittlere Anteil.', null, 'Das wäre die Hälfte.', 'Sie haben durch 4 statt durch 9 geteilt.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 68 },
      verify: ['80 * 0.85', 68],
      al: { question: 'Një çmim 80 € ulet 15%. Sa euro është çmimi i ri?', explanation: '80 · 0,85 = 68 €.', hint: 'Paguhen 85% e çmimit.', unit: '€', commonMistakes: [{ value: 12, why: 'Kjo është zbritja, jo çmimi i ri.' }, { value: 65, why: '15% e 80 është 12, jo 15.' }] },
      en: { question: 'A price of €80 is reduced by 15%. How many euros is the new price?', explanation: '80 · 0.85 = €68.', hint: 'You pay 85% of the price.', unit: '€', commonMistakes: [{ value: 12, why: 'That is the discount, not the new price.' }, { value: 65, why: '15% of 80 is 12, not 15.' }] },
      de: { question: 'Ein Preis von 80 € wird um 15 % gesenkt. Wie viel Euro beträgt der neue Preis?', explanation: '80 · 0,85 = 68 €.', hint: 'Man zahlt 85 % des Preises.', unit: '€', commonMistakes: [{ value: 12, why: 'Das ist der Rabatt, nicht der neue Preis.' }, { value: 65, why: '15 % von 80 sind 12, nicht 15.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['2000 * 3 * 4 / 100 == 240', true],
      al: { question: '2 000 € me interes të thjeshtë 3% në vit sjellin 240 € për 4 vjet.', explanation: 'E vërtetë: 2 000 · 3 · 4 / 100 = 240 €.', hint: 'I = K · p · t / 100.', whyWrong: '60 € në vit, 4 vjet → 240 €.' },
      en: { question: '€2 000 at 3% simple interest a year earn €240 in 4 years.', explanation: 'True: 2 000 · 3 · 4 / 100 = €240.', hint: 'I = P · r · t / 100.', whyWrong: '€60 a year, 4 years → €240.' },
      de: { question: '2 000 € zu 3 % einfachen Zinsen pro Jahr bringen in 4 Jahren 240 €.', explanation: 'Richtig: 2 000 · 3 · 4 / 100 = 240 €.', hint: 'Z = K · p · t / 100.', whyWrong: '60 € pro Jahr, 4 Jahre → 240 €.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['12 * 5 / 4', 15],
      al: {
        question: 'Zgjidhni x : 12 = 5 : 4.', options: ['x = 15', 'x = 9,6', 'x = 20', 'x = 3,75'],
        explanation: '4x = 60 → x = 15.', hint: 'Prodhimi i skajshëm = prodhimi i mesëm.',
        whyWrong: [null, 'Shumëzuat 12 · 4 : 5; anëtarët e gabuar.', '12 + 8 nuk ka lidhje me përpjesëtimin.', 'Kjo është 5 · 3 : 4.'],
      },
      en: {
        question: 'Solve x : 12 = 5 : 4.', options: ['x = 15', 'x = 9.6', 'x = 20', 'x = 3.75'],
        explanation: '4x = 60 → x = 15.', hint: 'Outer product = inner product.',
        whyWrong: [null, 'You worked out 12 · 4 ÷ 5; wrong terms.', '12 + 8 has nothing to do with the proportion.', 'That is 5 · 3 ÷ 4.'],
      },
      de: {
        question: 'Lösen Sie x : 12 = 5 : 4.', options: ['x = 15', 'x = 9,6', 'x = 20', 'x = 3,75'],
        explanation: '4x = 60 → x = 15.', hint: 'Außenglieder-Produkt = Innenglieder-Produkt.',
        whyWrong: [null, 'Sie haben 12 · 4 : 5 gerechnet; falsche Glieder.', '12 + 8 hat mit der Verhältnisgleichung nichts zu tun.', 'Das ist 5 · 3 : 4.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 16 },
      verify: ['8 * 12 / 6', 16],
      al: { question: '8 punëtorë e kryejnë punën për 12 ditë. Për sa ditë e kryejnë 6 punëtorë?', explanation: '8 · 12 = 96; 96 : 6 = 16 ditë.', hint: 'Varësi e zhdrejtë.', commonMistakes: [{ value: 9, why: 'E trajtuat si varësi të drejtë.' }] },
      en: { question: '8 workers finish a job in 12 days. How many days do 6 workers need?', explanation: '8 · 12 = 96; 96 ÷ 6 = 16 days.', hint: 'Inverse proportion.', commonMistakes: [{ value: 9, why: 'You treated it as direct proportion.' }] },
      de: { question: '8 Arbeiter erledigen eine Arbeit in 12 Tagen. Wie viele Tage brauchen 6 Arbeiter?', explanation: '8 · 12 = 96; 96 : 6 = 16 Tage.', hint: 'Antiproportional.', commonMistakes: [{ value: 9, why: 'Sie haben proportional gerechnet.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['(1.2 * 0.8 - 1) * 100', -4],
      al: {
        question: 'Çmimi rritet 20%, pastaj ulet 20%. Si ndryshon gjithsej?', options: ['0%', '+4%', '−20%', '−4%'],
        explanation: '1,2 · 0,8 = 0,96: ulet 4%.', hint: 'Shumëzoni shumëzuesit.',
        whyWrong: ['Ulja llogaritet nga çmimi më i lartë.', 'Rezultati është ulje, jo rritje.', 'Rritja e parë nuk anulohet plotësisht.', null],
      },
      en: {
        question: 'A price rises by 20%, then falls by 20%. What is the overall change?', options: ['0%', '+4%', '−20%', '−4%'],
        explanation: '1.2 · 0.8 = 0.96: down 4%.', hint: 'Multiply the multipliers.',
        whyWrong: ['The decrease is taken of the higher price.', 'The result is a decrease, not an increase.', 'The first rise is not fully cancelled.', null],
      },
      de: {
        question: 'Ein Preis steigt um 20 % und sinkt dann um 20 %. Wie ändert er sich insgesamt?', options: ['0 %', '+4 %', '−20 %', '−4 %'],
        explanation: '1,2 · 0,8 = 0,96: um 4 % gesunken.', hint: 'Die Faktoren multiplizieren.',
        whyWrong: ['Die Senkung bezieht sich auf den höheren Preis.', 'Es ist eine Senkung, keine Erhöhung.', 'Die Erhöhung wird nicht ganz aufgehoben.', null],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['3 / 1000 * 25000 == 750', false],
      al: { question: '3‰ e 25 000 është 750.', explanation: 'E gabuar: 3/1000 · 25 000 = 75. 750 do të ishte 3%.', hint: 'Promili është një e mijta.', whyWrong: '‰ pjesëton me 1 000, jo me 100.' },
      en: { question: '3‰ of 25 000 is 750.', explanation: 'False: 3/1000 · 25 000 = 75. 750 would be 3%.', hint: 'Per mille means thousandths.', whyWrong: '‰ divides by 1 000, not 100.' },
      de: { question: '3 ‰ von 25 000 sind 750.', explanation: 'Falsch: 3/1000 · 25 000 = 75. 750 wären 3 %.', hint: 'Promille sind Tausendstel.', whyWrong: '‰ teilt durch 1 000, nicht durch 100.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['(3*4 + 2*9) / 5', 6],
      al: {
        question: 'Përzihen 3 kg kafe me 4 €/kg dhe 2 kg me 9 €/kg. Sa kushton 1 kg përzierje?', options: ['6,50 €', '13 €', '6 €', '5 €'],
        explanation: '(12 + 18) : 5 = 6 €/kg.', hint: 'Mesatare e ponderuar.',
        whyWrong: ['Kjo është mesatarja e thjeshtë e çmimeve.', 'Mblodhët çmimet.', null, 'Gabim në llogaritje: 30 : 5 = 6.'],
      },
      en: {
        question: '3 kg of coffee at €4/kg are mixed with 2 kg at €9/kg. What does 1 kg of the mixture cost?', options: ['€6.50', '€13', '€6', '€5'],
        explanation: '(12 + 18) ÷ 5 = €6/kg.', hint: 'Weighted mean.',
        whyWrong: ['That is the plain mean of the prices.', 'You added the prices.', null, 'Slip: 30 ÷ 5 = 6.'],
      },
      de: {
        question: '3 kg Kaffee zu 4 €/kg werden mit 2 kg zu 9 €/kg gemischt. Was kostet 1 kg der Mischung?', options: ['6,50 €', '13 €', '6 €', '5 €'],
        explanation: '(12 + 18) : 5 = 6 €/kg.', hint: 'Gewichteter Mittelwert.',
        whyWrong: ['Das ist der einfache Mittelwert der Preise.', 'Sie haben die Preise addiert.', null, 'Rechenfehler: 30 : 5 = 6.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 80 },
      verify: ['60 / 0.75', 80],
      al: { question: 'Pas zbritjes 25% paguat 60 €. Sa euro ishte çmimi fillestar?', explanation: '0,75x = 60 → x = 80 €.', hint: '60 € janë 75% e çmimit.', unit: '€', commonMistakes: [{ value: 75, why: '25% llogaritet nga çmimi fillestar, jo nga 60.' }] },
      en: { question: 'After a 25% discount you paid €60. How many euros was the original price?', explanation: '0.75x = 60 → x = €80.', hint: '€60 is 75% of the price.', unit: '€', commonMistakes: [{ value: 75, why: 'The 25% is of the original price, not of 60.' }] },
      de: { question: 'Nach 25 % Rabatt haben Sie 60 € bezahlt. Wie viel Euro war der ursprüngliche Preis?', explanation: '0,75x = 60 → x = 80 €.', hint: '60 € sind 75 % des Preises.', unit: '€', commonMistakes: [{ value: 75, why: 'Die 25 % beziehen sich auf den ursprünglichen Preis, nicht auf 60.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 2420 },
      verify: ['2000 * 1.1^2', 2420],
      al: { question: 'Sa euro bëhen 2 000 € me interes të përbërë 10% pas 2 vjetësh?', explanation: '2 000 · 1,1² = 2 420 €.', hint: 'Shumëzoni me 1,1 dy herë.', unit: '€', commonMistakes: [{ value: 2400, why: 'Ky është interesi i thjeshtë; te i përbëri viti i dytë llogaritet nga 2 200 €.' }] },
      en: { question: 'How many euros do €2 000 grow to at 10% compound interest after 2 years?', explanation: '2 000 · 1.1² = €2 420.', hint: 'Multiply by 1.1 twice.', unit: '€', commonMistakes: [{ value: 2400, why: 'That is simple interest; with compound interest year two is on €2 200.' }] },
      de: { question: 'Auf wie viel Euro wachsen 2 000 € mit 10 % Zinseszins in 2 Jahren?', explanation: '2 000 · 1,1² = 2 420 €.', hint: 'Zweimal mit 1,1 multiplizieren.', unit: '€', commonMistakes: [{ value: 2400, why: 'Das sind einfache Zinsen; beim Zinseszins wird das 2. Jahr von 2 200 € berechnet.' }] },
    },
  ],
};
