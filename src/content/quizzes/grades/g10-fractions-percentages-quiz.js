// Grade 10 · Theme 5 quiz: Fractions, decimals and percentages (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-fractions-percentages-quiz',
  grade: 10,
  theme: 'g10-fractions-percentages',
  order: 5,
  difficulty: 'intermediate',
  icon: '%',
  color: '#E9C46A',
  i18n: {
    al: { title: 'Thyesat dhe përqindjet', category: 'Klasa 10 · Tema 5', duration: '10 min' },
    en: { title: 'Fractions and percentages', category: 'Grade 10 · Theme 5', duration: '10 min' },
    de: { title: 'Brüche und Prozente', category: 'Klasse 10 · Thema 5', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['3/8 * 100', 37.5],
      al: {
        question: 'Si shkruhet 0,375 si thyesë dhe si përqindje?', options: ['3/8 dhe 37,5%', '3/80 dhe 3,75%', '375/100 dhe 375%', '3/8 dhe 3,75%'],
        explanation: '0,375 = 375/1 000 = 3/8; · 100 = 37,5%.', hint: 'Shkruani mbi 1 000 dhe thjeshtoni.',
        whyWrong: [null, '3/80 = 0,0375.', '375/100 = 3,75.', 'Përqindja: 0,375 · 100 = 37,5.'],
      },
      en: {
        question: 'How is 0.375 written as a fraction and as a percentage?', options: ['3/8 and 37.5%', '3/80 and 3.75%', '375/100 and 375%', '3/8 and 3.75%'],
        explanation: '0.375 = 375/1 000 = 3/8; · 100 = 37.5%.', hint: 'Write it over 1 000 and simplify.',
        whyWrong: [null, '3/80 = 0.0375.', '375/100 = 3.75.', 'Percentage: 0.375 · 100 = 37.5.'],
      },
      de: {
        question: 'Wie schreibt man 0,375 als Bruch und als Prozentsatz?', options: ['3/8 und 37,5 %', '3/80 und 3,75 %', '375/100 und 375 %', '3/8 und 3,75 %'],
        explanation: '0,375 = 375/1 000 = 3/8; · 100 = 37,5 %.', hint: 'Über 1 000 schreiben und kürzen.',
        whyWrong: [null, '3/80 = 0,0375.', '375/100 = 3,75.', 'Prozent: 0,375 · 100 = 37,5.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 15 },
      verify: ['(690 - 600) / 600 * 100', 15],
      al: { question: 'Paga rritet nga 600 € në 690 €. Sa për qind është rritja?', explanation: '90/600 = 15%.', hint: 'Ndryshimi : vlera fillestare.', unit: '%', commonMistakes: [{ value: 13.04, why: 'U pjesëtua me 690; pjesëtohet me vlerën fillestare.' }, { value: 90, why: '90 € është ndryshimi, jo përqindja.' }] },
      en: { question: 'A wage rises from €600 to €690. What is the percentage increase?', explanation: '90/600 = 15%.', hint: 'Change ÷ original value.', unit: '%', commonMistakes: [{ value: 13.04, why: 'You divided by 690; divide by the original value.' }, { value: 90, why: '€90 is the change, not the percentage.' }] },
      de: { question: 'Ein Lohn steigt von 600 € auf 690 €. Um wie viel Prozent?', explanation: '90/600 = 15 %.', hint: 'Änderung : Ausgangswert.', unit: '%', commonMistakes: [{ value: 13.04, why: 'Sie haben durch 690 geteilt; durch den Ausgangswert teilen.' }, { value: 90, why: '90 € ist die Änderung, nicht der Prozentsatz.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['0.35 * 240 == 84', true],
      al: { question: '35% e 240 është 84.', explanation: 'E vërtetë: 0,35 · 240 = 84.', hint: 'p% = p/100.', whyWrong: '10% = 24, 30% = 72, 5% = 12; 72 + 12 = 84.' },
      en: { question: '35% of 240 is 84.', explanation: 'True: 0.35 · 240 = 84.', hint: 'p% = p/100.', whyWrong: '10% = 24, 30% = 72, 5% = 12; 72 + 12 = 84.' },
      de: { question: '35 % von 240 sind 84.', explanation: 'Richtig: 0,35 · 240 = 84.', hint: 'p % = p/100.', whyWrong: '10 % = 24, 30 % = 72, 5 % = 12; 72 + 12 = 84.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['(3/4) / (3/2)', '1/2', 1e-9, '1/2'],
      al: {
        question: 'Sa është 3/4 : 1 1/2?', options: ['1 1/8', '2', '1/2', '9/8'],
        explanation: '3/4 · 2/3 = 1/2.', hint: 'Shumëzoni me të anasjelltën e 3/2.',
        whyWrong: ['Shumëzuat në vend që të pjesëtonit.', 'Kjo është e anasjellta e rezultatit.', null, 'Shumëzuat 3/4 · 3/2.'],
      },
      en: {
        question: 'What is 3/4 ÷ 1 1/2?', options: ['1 1/8', '2', '1/2', '9/8'],
        explanation: '3/4 · 2/3 = 1/2.', hint: 'Multiply by the reciprocal of 3/2.',
        whyWrong: ['You multiplied instead of dividing.', 'That is the reciprocal of the answer.', null, 'You worked out 3/4 · 3/2.'],
      },
      de: {
        question: 'Wie viel ist 3/4 : 1 1/2?', options: ['1 1/8', '2', '1/2', '9/8'],
        explanation: '3/4 · 2/3 = 1/2.', hint: 'Mit dem Kehrwert von 3/2 multiplizieren.',
        whyWrong: ['Sie haben multipliziert statt dividiert.', 'Das ist der Kehrwert des Ergebnisses.', null, 'Sie haben 3/4 · 3/2 gerechnet.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 24 },
      verify: ['18 / 75 * 100', 24],
      al: { question: 'Sa përqind e 75 është 18?', explanation: '18 : 75 = 0,24 = 24%.', hint: 'a/b · 100.', unit: '%', commonMistakes: [{ value: 4.17, why: 'Pjesëtimi u kthye: 75 : 18.' }] },
      en: { question: 'What percentage of 75 is 18?', explanation: '18 ÷ 75 = 0.24 = 24%.', hint: 'a/b · 100.', unit: '%', commonMistakes: [{ value: 4.17, why: 'The division is upside down: 75 ÷ 18.' }] },
      de: { question: 'Wie viel Prozent von 75 sind 18?', explanation: '18 : 75 = 0,24 = 24 %.', hint: 'a/b · 100.', unit: '%', commonMistakes: [{ value: 4.17, why: 'Die Division ist umgedreht: 75 : 18.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['2 + 1/3 + 1 + 3/4', '4 + 1/12', 1e-9, '4 1/12'],
      al: {
        question: 'Sa është 2 1/3 + 1 3/4?', options: ['3 4/7', '4 1/12', '3 1/12', '4 4/7'],
        explanation: '3 + 4/12 + 9/12 = 3 + 13/12 = 4 1/12.', hint: 'Emëruesi i përbashkët 12.',
        whyWrong: ['Nuk mblidhen numëruesit me emëruesit.', null, '13/12 > 1: duhet shtuar 1 te pjesa e plotë.', 'Nuk mblidhen emëruesit.'],
      },
      en: {
        question: 'What is 2 1/3 + 1 3/4?', options: ['3 4/7', '4 1/12', '3 1/12', '4 4/7'],
        explanation: '3 + 4/12 + 9/12 = 3 + 13/12 = 4 1/12.', hint: 'Common denominator 12.',
        whyWrong: ['Numerators and denominators are not added.', null, '13/12 > 1: add 1 to the whole part.', 'Denominators are not added.'],
      },
      de: {
        question: 'Wie viel ist 2 1/3 + 1 3/4?', options: ['3 4/7', '4 1/12', '3 1/12', '4 4/7'],
        explanation: '3 + 4/12 + 9/12 = 3 + 13/12 = 4 1/12.', hint: 'Hauptnenner 12.',
        whyWrong: ['Zähler und Nenner werden nicht addiert.', null, '13/12 > 1: 1 zu den Ganzen addieren.', 'Nenner werden nicht addiert.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['1.2 * 0.8 == 1', false],
      al: { question: 'Një rritje 20% e ndjekur nga një ulje 20% e kthen çmimin në vlerën fillestare.', explanation: 'E gabuar: 1,2 · 0,8 = 0,96, pra çmimi bie 4%.', hint: 'Shumëzoni shumëzuesit.', whyWrong: 'Ulja llogaritet nga çmimi më i lartë.' },
      en: { question: 'A 20% rise followed by a 20% fall brings a price back to where it started.', explanation: 'False: 1.2 · 0.8 = 0.96, so the price falls by 4%.', hint: 'Multiply the multipliers.', whyWrong: 'The fall is taken of the higher price.' },
      de: { question: 'Eine Erhöhung um 20 % und danach eine Senkung um 20 % ergeben wieder den Ausgangspreis.', explanation: 'Falsch: 1,2 · 0,8 = 0,96, der Preis sinkt um 4 %.', hint: 'Die Faktoren multiplizieren.', whyWrong: 'Die Senkung bezieht sich auf den höheren Preis.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['45/100', '9/20', 1e-9, '9/20'],
      al: {
        question: 'Cila thyesë është e barabartë me 45%?', options: ['45/10', '4/5', '9/2', '9/20'],
        explanation: '45/100 = 9/20.', hint: 'Përqindja është mbi 100.',
        whyWrong: ['45/10 = 450%.', '4/5 = 80%.', '9/2 = 450%.', null],
      },
      en: {
        question: 'Which fraction equals 45%?', options: ['45/10', '4/5', '9/2', '9/20'],
        explanation: '45/100 = 9/20.', hint: 'A percentage is over 100.',
        whyWrong: ['45/10 = 450%.', '4/5 = 80%.', '9/2 = 450%.', null],
      },
      de: {
        question: 'Welcher Bruch ist gleich 45 %?', options: ['45/10', '4/5', '9/2', '9/20'],
        explanation: '45/100 = 9/20.', hint: 'Prozent heißt „von hundert“.',
        whyWrong: ['45/10 = 450 %.', '4/5 = 80 %.', '9/2 = 450 %.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 75 },
      verify: ['90 / 1.2', 75],
      al: { question: 'Pas një rritjeje 20% çmimi është 90 €. Sa euro ishte çmimi para rritjes?', explanation: '1,2x = 90 → x = 75 €.', hint: 'Pjesëtoni me 1,2.', unit: '€', commonMistakes: [{ value: 72, why: '20% llogaritej nga çmimi fillestar, jo nga 90.' }] },
      en: { question: 'After a 20% rise the price is €90. How many euros was it before the rise?', explanation: '1.2x = 90 → x = €75.', hint: 'Divide by 1.2.', unit: '€', commonMistakes: [{ value: 72, why: 'The 20% was of the original price, not of 90.' }] },
      de: { question: 'Nach 20 % Erhöhung kostet etwas 90 €. Wie viel Euro kostete es vorher?', explanation: '1,2x = 90 → x = 75 €.', hint: 'Durch 1,2 teilen.', unit: '€', commonMistakes: [{ value: 72, why: 'Die 20 % bezogen sich auf den Ausgangspreis, nicht auf 90.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 3 },
      verify: ['(12/5) * (5/4)', 3],
      al: { question: 'Llogaritni 2 2/5 · 1 1/4.', explanation: '12/5 · 5/4 = 60/20 = 3.', hint: 'Shndërroni në thyesa të papërshtatshme.', commonMistakes: [{ value: 2.1, why: 'Shumëzuat veç pjesët e plota dhe veç thyesat.' }] },
      en: { question: 'Work out 2 2/5 · 1 1/4.', explanation: '12/5 · 5/4 = 60/20 = 3.', hint: 'Change to improper fractions.', commonMistakes: [{ value: 2.1, why: 'You multiplied whole parts and fractions separately.' }] },
      de: { question: 'Berechnen Sie 2 2/5 · 1 1/4.', explanation: '12/5 · 5/4 = 60/20 = 3.', hint: 'In unechte Brüche umwandeln.', commonMistakes: [{ value: 2.1, why: 'Sie haben Ganze und Brüche getrennt multipliziert.' }] },
    },
  ],
};
