// Grade 7 · Theme 7 quiz: Ratios and proportions (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g7-ratios-proportions-quiz',
  grade: 7,
  theme: 'g7-ratios-proportions',
  order: 7,
  difficulty: 'beginner',
  icon: '⚖️',
  color: '#2A9D8F',
  i18n: {
    al: { title: 'Raporte dhe përpjesëtime', category: 'Klasa 7 · Tema 7', duration: '10 min' },
    en: { title: 'Ratios and proportions', category: 'Grade 7 · Theme 7', duration: '10 min' },
    de: { title: 'Verhältnisse und Proportionen', category: 'Klasse 7 · Thema 7', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: [['12 / 6', 2], ['18 / 6', 3]],
      al: {
        question: 'Cila është trajta më e thjeshtë e raportit 12 : 18?', options: ['2 : 3', '6 : 9', '3 : 4', '4 : 6'],
        explanation: 'PMP(12, 18) = 6, pra 12 : 18 = 2 : 3.', hint: 'Pjesëtoni të dy anëtarët me PMP-në.',
        whyWrong: [null, 'I barabartë, por mund të thjeshtohet edhe me 3.', '3 · 18 ≠ 4 · 12; ky është raport tjetër.', 'I barabartë, por mund të thjeshtohet edhe me 2.'],
      },
      en: {
        question: 'What is the simplest form of the ratio 12 : 18?', options: ['2 : 3', '6 : 9', '3 : 4', '4 : 6'],
        explanation: 'GCD(12, 18) = 6, so 12 : 18 = 2 : 3.', hint: 'Divide both terms by the GCD.',
        whyWrong: [null, 'Equal, but it can still be divided by 3.', '3 · 18 ≠ 4 · 12; that is a different ratio.', 'Equal, but it can still be divided by 2.'],
      },
      de: {
        question: 'Wie lautet das Verhältnis 12 : 18 vollständig gekürzt?', options: ['2 : 3', '6 : 9', '3 : 4', '4 : 6'],
        explanation: 'ggT(12, 18) = 6, also 12 : 18 = 2 : 3.', hint: 'Beide Glieder durch den ggT teilen.',
        whyWrong: [null, 'Gleich, aber noch durch 3 kürzbar.', '3 · 18 ≠ 4 · 12; das ist ein anderes Verhältnis.', 'Gleich, aber noch durch 2 kürzbar.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 4 },
      verify: ['6 * 10 / 15', 4],
      al: { question: 'Zgjidhni x : 6 = 10 : 15. Sa është x?', explanation: '15x = 6 · 10 = 60, pra x = 4.', hint: 'Prodhimi i skajshëm = prodhimi i mesëm.', commonMistakes: [{ value: 9, why: 'Shumëzuat anëtarët e gabuar: x · 15 = 6 · 10.' }] },
      en: { question: 'Solve x : 6 = 10 : 15. What is x?', explanation: '15x = 6 · 10 = 60, so x = 4.', hint: 'Outer product = inner product.', commonMistakes: [{ value: 9, why: 'You multiplied the wrong terms: x · 15 = 6 · 10.' }] },
      de: { question: 'Lösen Sie x : 6 = 10 : 15. Wie groß ist x?', explanation: '15x = 6 · 10 = 60, also x = 4.', hint: 'Produkt der Außenglieder = Produkt der Innenglieder.', commonMistakes: [{ value: 9, why: 'Falsche Glieder multipliziert: x · 15 = 6 · 10.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: ['2 * 14 == 5 * 6', false],
      al: { question: '2 : 5 = 6 : 14 është përpjesëtim.', explanation: 'E gabuar: 2 · 14 = 28, kurse 5 · 6 = 30.', hint: 'Krahasoni prodhimet kryq.', whyWrong: '28 ≠ 30, pra raportet nuk janë të barabarta.' },
      en: { question: '2 : 5 = 6 : 14 is a proportion.', explanation: 'False: 2 · 14 = 28, but 5 · 6 = 30.', hint: 'Compare the cross products.', whyWrong: '28 ≠ 30, so the ratios are not equal.' },
      de: { question: '2 : 5 = 6 : 14 ist eine Verhältnisgleichung.', explanation: 'Falsch: 2 · 14 = 28, aber 5 · 6 = 30.', hint: 'Vergleichen Sie die Produkte über Kreuz.', whyWrong: '28 ≠ 30, die Verhältnisse sind nicht gleich.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['7.5 / 5 * 8', 12],
      al: {
        question: '5 fletore kushtojnë 7,50 €. Sa kushtojnë 8 fletore?', options: ['10,50 €', '12 €', '15 €', '1,50 €'],
        explanation: '1 fletore 7,50 : 5 = 1,50 €; 8 · 1,50 = 12 €.', hint: 'Gjeni çmimin e një fletoreje.',
        whyWrong: ['Shtuat 3 € sepse shtohen 3 fletore; çmimi nuk rritet kështu.', null, 'Ky është çmimi i 10 fletoreve.', 'Ky është çmimi i 1 fletoreje.'],
      },
      en: {
        question: '5 notebooks cost €7.50. How much do 8 notebooks cost?', options: ['€10.50', '€12', '€15', '€1.50'],
        explanation: '1 notebook 7.50 ÷ 5 = €1.50; 8 · 1.50 = €12.', hint: 'Find the price of one notebook.',
        whyWrong: ['You added €3 because there are 3 more notebooks; prices do not grow like that.', null, 'That is the price of 10 notebooks.', 'That is the price of 1 notebook.'],
      },
      de: {
        question: '5 Hefte kosten 7,50 €. Wie viel kosten 8 Hefte?', options: ['10,50 €', '12 €', '15 €', '1,50 €'],
        explanation: '1 Heft 7,50 : 5 = 1,50 €; 8 · 1,50 = 12 €.', hint: 'Bestimmen Sie den Preis für ein Heft.',
        whyWrong: ['Sie haben 3 € addiert, weil es 3 Hefte mehr sind; so wachsen Preise nicht.', null, 'Das ist der Preis für 10 Hefte.', 'Das ist der Preis für 1 Heft.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 20 },
      verify: ['35 / 7 * 4', 20],
      al: { question: '35 € ndahen në raportin 3 : 4. Sa euro është pjesa më e madhe?', explanation: '3 + 4 = 7 pjesë; 35 : 7 = 5; 4 · 5 = 20 €.', hint: 'Sa pjesë janë gjithsej?', unit: '€', commonMistakes: [{ value: 15, why: 'Kjo është pjesa më e vogël.' }, { value: 17.5, why: 'Ndatë në gjysmë; raporti është 3 : 4.' }] },
      en: { question: '€35 is shared in the ratio 3 : 4. How many euros is the larger share?', explanation: '3 + 4 = 7 parts; 35 ÷ 7 = 5; 4 · 5 = €20.', hint: 'How many parts are there in total?', unit: '€', commonMistakes: [{ value: 15, why: 'That is the smaller share.' }, { value: 17.5, why: 'You split it in half; the ratio is 3 : 4.' }] },
      de: { question: '35 € werden im Verhältnis 3 : 4 aufgeteilt. Wie viel Euro beträgt der größere Anteil?', explanation: '3 + 4 = 7 Teile; 35 : 7 = 5; 4 · 5 = 20 €.', hint: 'Wie viele Teile sind es insgesamt?', unit: '€', commonMistakes: [{ value: 15, why: 'Das ist der kleinere Anteil.' }, { value: 17.5, why: 'Sie haben halbiert; das Verhältnis ist 3 : 4.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['4 * 6 / 3', 8],
      al: {
        question: '4 punëtorë e kryejnë një punë për 6 ditë. Për sa ditë e kryejnë 3 punëtorë?', options: ['4,5 ditë', '5 ditë', '7 ditë', '8 ditë'],
        explanation: 'Varësi e zhdrejtë: 4 · 6 = 24; 24 : 3 = 8 ditë.', hint: 'Më pak punëtorë → më shumë apo më pak ditë?',
        whyWrong: ['E trajtuat si varësi të drejtë; më pak punëtorë kanë nevojë për më shumë ditë.', 'Me më pak punëtorë puna nuk shkon më shpejt.', 'Ditët nuk rriten me 1 për çdo punëtor që mungon.', null],
      },
      en: {
        question: '4 workers finish a job in 6 days. How many days do 3 workers need?', options: ['4.5 days', '5 days', '7 days', '8 days'],
        explanation: 'Inverse proportion: 4 · 6 = 24; 24 ÷ 3 = 8 days.', hint: 'Fewer workers → more or fewer days?',
        whyWrong: ['You treated it as direct proportion; fewer workers need more days.', 'With fewer workers the job does not go faster.', 'The days do not grow by 1 for each missing worker.', null],
      },
      de: {
        question: '4 Arbeiter erledigen eine Arbeit in 6 Tagen. Wie viele Tage brauchen 3 Arbeiter?', options: ['4,5 Tage', '5 Tage', '7 Tage', '8 Tage'],
        explanation: 'Antiproportional: 4 · 6 = 24; 24 : 3 = 8 Tage.', hint: 'Weniger Arbeiter → mehr oder weniger Tage?',
        whyWrong: ['Sie haben proportional gerechnet; weniger Arbeiter brauchen mehr Tage.', 'Mit weniger Arbeitern geht es nicht schneller.', 'Die Tage wachsen nicht um 1 pro fehlendem Arbeiter.', null],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: true,
      verify: ['60 * 3 == 90 * 2', true],
      al: { question: 'Nëse një rrugë me 60 km/h zgjat 3 h, atëherë me 90 km/h zgjat 2 h.', explanation: 'E vërtetë: rruga është 60 · 3 = 180 km dhe 180 : 90 = 2 h.', hint: 'Shpejtësia dhe koha janë në varësi të zhdrejtë.', whyWrong: '60 · 3 = 90 · 2 = 180 km, pra pohimi është i saktë.' },
      en: { question: 'If a trip takes 3 h at 60 km/h, then it takes 2 h at 90 km/h.', explanation: 'True: the distance is 60 · 3 = 180 km and 180 ÷ 90 = 2 h.', hint: 'Speed and time are in inverse proportion.', whyWrong: '60 · 3 = 90 · 2 = 180 km, so the statement is correct.' },
      de: { question: 'Dauert eine Fahrt mit 60 km/h 3 h, dann dauert sie mit 90 km/h 2 h.', explanation: 'Richtig: Die Strecke ist 60 · 3 = 180 km und 180 : 90 = 2 h.', hint: 'Geschwindigkeit und Zeit sind antiproportional.', whyWrong: '60 · 3 = 90 · 2 = 180 km, die Aussage stimmt.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['6 * 50000 / 100000', 3],
      al: {
        question: 'Në hartën 1 : 50 000 dy fshatra janë 6 cm larg. Sa është largësia e vërtetë?', options: ['30 km', '300 m', '3 km', '300 km'],
        explanation: '6 · 50 000 = 300 000 cm = 3 km.', hint: '1 km = 100 000 cm.',
        whyWrong: ['Gabim në njësi: 300 000 cm nuk janë 30 km.', '300 000 cm = 3 000 m, jo 300 m.', null, '300 000 është në cm, jo në km.'],
      },
      en: {
        question: 'On a 1 : 50 000 map two villages are 6 cm apart. What is the real distance?', options: ['30 km', '300 m', '3 km', '300 km'],
        explanation: '6 · 50 000 = 300 000 cm = 3 km.', hint: '1 km = 100 000 cm.',
        whyWrong: ['Unit mistake: 300 000 cm is not 30 km.', '300 000 cm = 3 000 m, not 300 m.', null, '300 000 is in cm, not km.'],
      },
      de: {
        question: 'Auf einer Karte 1 : 50 000 liegen zwei Dörfer 6 cm auseinander. Wie groß ist die wirkliche Entfernung?', options: ['30 km', '300 m', '3 km', '300 km'],
        explanation: '6 · 50 000 = 300 000 cm = 3 km.', hint: '1 km = 100 000 cm.',
        whyWrong: ['Einheitenfehler: 300 000 cm sind nicht 30 km.', '300 000 cm = 3 000 m, nicht 300 m.', null, '300 000 ist in cm, nicht in km.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 7.5 },
      verify: ['18 / 240 * 100', 7.5],
      al: { question: 'Një veturë harxhon 18 l për 240 km. Sa litra harxhon për 100 km?', explanation: '18 : 240 = 0,075 l për km; 100 · 0,075 = 7,5 l.', hint: 'Gjeni harxhimin për 1 km.', unit: 'l', commonMistakes: [{ value: 75, why: 'Shumëzuat 0,075 me 1 000 në vend të 100.' }] },
      en: { question: 'A car uses 18 l for 240 km. How many litres does it use for 100 km?', explanation: '18 ÷ 240 = 0.075 l per km; 100 · 0.075 = 7.5 l.', hint: 'Find the use for 1 km.', unit: 'l', commonMistakes: [{ value: 75, why: 'You multiplied 0.075 by 1 000 instead of 100.' }] },
      de: { question: 'Ein Auto verbraucht 18 l auf 240 km. Wie viele Liter verbraucht es auf 100 km?', explanation: '18 : 240 = 0,075 l pro km; 100 · 0,075 = 7,5 l.', hint: 'Bestimmen Sie den Verbrauch für 1 km.', unit: 'l', commonMistakes: [{ value: 75, why: 'Sie haben 0,075 mit 1 000 statt mit 100 multipliziert.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 9 },
      verify: ['4.5 * 100000 / 50000', 9],
      al: { question: 'Largësia e vërtetë është 4,5 km. Sa cm është në hartën 1 : 50 000?', explanation: '4,5 km = 450 000 cm; 450 000 : 50 000 = 9 cm.', hint: 'Shndërroni km në cm, pastaj pjesëtoni.', unit: 'cm', commonMistakes: [{ value: 0.9, why: '4,5 km = 450 000 cm, jo 45 000 cm.' }] },
      en: { question: 'The real distance is 4.5 km. How many cm is it on a 1 : 50 000 map?', explanation: '4.5 km = 450 000 cm; 450 000 ÷ 50 000 = 9 cm.', hint: 'Change km to cm, then divide.', unit: 'cm', commonMistakes: [{ value: 0.9, why: '4.5 km = 450 000 cm, not 45 000 cm.' }] },
      de: { question: 'Die wirkliche Entfernung beträgt 4,5 km. Wie viele cm sind das auf einer Karte 1 : 50 000?', explanation: '4,5 km = 450 000 cm; 450 000 : 50 000 = 9 cm.', hint: 'km in cm umrechnen, dann teilen.', unit: 'cm', commonMistakes: [{ value: 0.9, why: '4,5 km = 450 000 cm, nicht 45 000 cm.' }] },
    },
  ],
};
