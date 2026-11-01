// Grade 11 · Theme 10 quiz: Units and proportion (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g11-units-proportion-quiz',
  grade: 11,
  theme: 'g11-units-proportion',
  order: 10,
  difficulty: 'advanced',
  icon: '⚖️',
  color: '#E76F51',
  i18n: {
    al: { title: 'Njësitë dhe përpjesëtimet', category: 'Klasa 11 · Tema 10', duration: '12 min' },
    en: { title: 'Units and proportion', category: 'Grade 11 · Theme 10', duration: '12 min' },
    de: { title: 'Einheiten und Proportionalität', category: 'Klasse 11 · Thema 10', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['72 / 3.6', 20],
      al: {
        question: 'Sa është 72 km/h në m/s?', options: ['259,2 m/s', '7,2 m/s', '20 m/s', '72 000 m/s'],
        explanation: '72 000 m : 3 600 s = 20 m/s.', hint: 'km/h : 3,6.',
        whyWrong: ['U shumëzua me 3,6 në vend që të pjesëtohej.', 'U pjesëtua me 10.', null, 'U kthyen vetëm km në m, jo orët në sekonda.'],
      },
      en: {
        question: 'What is 72 km/h in m/s?', options: ['259.2 m/s', '7.2 m/s', '20 m/s', '72 000 m/s'],
        explanation: '72 000 m ÷ 3 600 s = 20 m/s.', hint: 'km/h ÷ 3.6.',
        whyWrong: ['It was multiplied by 3.6 instead of divided.', 'It was divided by 10.', null, 'Only km were converted to m, not hours to seconds.'],
      },
      de: {
        question: 'Wie viel sind 72 km/h in m/s?', options: ['259,2 m/s', '7,2 m/s', '20 m/s', '72 000 m/s'],
        explanation: '72 000 m : 3 600 s = 20 m/s.', hint: 'km/h : 3,6.',
        whyWrong: ['Es wurde mit 3,6 multipliziert statt dividiert.', 'Es wurde durch 10 geteilt.', null, 'Nur km wurden in m umgerechnet, nicht Stunden in Sekunden.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 2.7 }, unit: 'g/cm³',
      verify: ['540 / 200', 2.7],
      al: { question: 'Një trup ka masë 540 g dhe vëllim 200 cm³. Sa është dendësia?', explanation: '540 : 200 = 2,7 g/cm³.', hint: 'Masa : vëllimi.', commonMistakes: [{ value: 0.37, why: 'U pjesëtua vëllimi me masën.' }, { value: 108000, why: 'U shumëzua në vend që të pjesëtohej.' }] },
      en: { question: 'An object has mass 540 g and volume 200 cm³. What is its density?', explanation: '540 ÷ 200 = 2.7 g/cm³.', hint: 'Mass ÷ volume.', commonMistakes: [{ value: 0.37, why: 'The volume was divided by the mass.' }, { value: 108000, why: 'It was multiplied instead of divided.' }] },
      de: { question: 'Ein Körper hat die Masse 540 g und das Volumen 200 cm³. Wie groß ist seine Dichte?', explanation: '540 : 200 = 2,7 g/cm³.', hint: 'Masse : Volumen.', commonMistakes: [{ value: 0.37, why: 'Es wurde Volumen durch Masse geteilt.' }, { value: 108000, why: 'Es wurde multipliziert statt dividiert.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: ['100^2 == 100', false],
      al: { question: '1 m² = 100 cm².', explanation: 'E gabuar: 1 m² = 100 cm · 100 cm = 10 000 cm².', hint: 'Faktori ngrihet në katror.', whyWrong: '100² = 10 000.' },
      en: { question: '1 m² = 100 cm².', explanation: 'False: 1 m² = 100 cm · 100 cm = 10 000 cm².', hint: 'The factor is squared.', whyWrong: '100² = 10 000.' },
      de: { question: '1 m² = 100 cm².', explanation: 'Falsch: 1 m² = 100 cm · 100 cm = 10 000 cm².', hint: 'Der Faktor wird quadriert.', whyWrong: '100² = 10 000.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['12 / 4 * 10', 30],
      al: {
        question: 'y ∝ x dhe y = 12 kur x = 4. Sa është y kur x = 10?', options: ['30', '18', '3', '4,8'],
        explanation: 'k = 12 : 4 = 3; y = 3 · 10 = 30.', hint: 'y = kx.',
        whyWrong: [null, 'U shtua ndryshimi i x: 12 + 6.', 'Ky është k, jo y.', 'U llogarit si përpjesëtim i zhdrejtë: 48 : 10.'],
      },
      en: {
        question: 'y ∝ x and y = 12 when x = 4. What is y when x = 10?', options: ['30', '18', '3', '4.8'],
        explanation: 'k = 12 ÷ 4 = 3; y = 3 · 10 = 30.', hint: 'y = kx.',
        whyWrong: [null, 'The change in x was added: 12 + 6.', 'That is k, not y.', 'It was treated as inverse proportion: 48 ÷ 10.'],
      },
      de: {
        question: 'y ∼ x und y = 12 für x = 4. Wie groß ist y für x = 10?', options: ['30', '18', '3', '4,8'],
        explanation: 'k = 12 : 4 = 3; y = 3 · 10 = 30.', hint: 'y = kx.',
        whyWrong: [null, 'Die Änderung von x wurde addiert: 12 + 6.', 'Das ist k, nicht y.', 'Es wurde antiproportional gerechnet: 48 : 10.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 4 },
      verify: ['6 * 10 / 15', 4],
      al: { question: '6 punëtorë e kryejnë një punë për 10 ditë. Sa ditë duhen për 15 punëtorë?', explanation: '6 · 10 = 60; 60 : 15 = 4 ditë.', hint: 'Më shumë punëtorë → më pak ditë.', commonMistakes: [{ value: 25, why: 'U llogarit si përpjesëtim i drejtë.' }, { value: 1, why: 'U zbritën punëtorët shtesë nga ditët.' }] },
      en: { question: '6 workers finish a job in 10 days. How many days do 15 workers need?', explanation: '6 · 10 = 60; 60 ÷ 15 = 4 days.', hint: 'More workers → fewer days.', commonMistakes: [{ value: 25, why: 'It was treated as direct proportion.' }, { value: 1, why: 'The extra workers were subtracted from the days.' }] },
      de: { question: '6 Arbeiter erledigen einen Auftrag in 10 Tagen. Wie viele Tage brauchen 15 Arbeiter?', explanation: '6 · 10 = 60; 60 : 15 = 4 Tage.', hint: 'Mehr Arbeiter → weniger Tage.', commonMistakes: [{ value: 25, why: 'Es wurde proportional gerechnet.' }, { value: 1, why: 'Die zusätzlichen Arbeiter wurden von den Tagen abgezogen.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['20000 * 0.85^2', 14450],
      al: {
        question: 'Një makinë humb 15% të vlerës çdo vit. Nga 20 000 €, sa vlen pas 2 vjetësh?', options: ['14 000 €', '17 000 €', '450 €', '14 450 €'],
        explanation: '20 000 · 0,85² = 14 450 €.', hint: 'Shumëzuesi 0,85 dy herë.',
        whyWrong: ['U zbrit 30% njëherësh.', 'Kjo është vetëm pas një viti.', 'U shumëzua me 0,15² në vend të 0,85².', null],
      },
      en: {
        question: 'A car loses 15% of its value each year. From €20 000, what is it worth after 2 years?', options: ['€14 000', '€17 000', '€450', '€14 450'],
        explanation: '20 000 · 0.85² = €14 450.', hint: 'The multiplier 0.85 twice.',
        whyWrong: ['30% was taken off at once.', 'That is after one year only.', 'It was multiplied by 0.15² instead of 0.85².', null],
      },
      de: {
        question: 'Ein Auto verliert jährlich 15 % an Wert. Wie viel ist es nach 2 Jahren wert, wenn es 20 000 € gekostet hat?', options: ['14 000 €', '17 000 €', '450 €', '14 450 €'],
        explanation: '20 000 · 0,85² = 14 450 €.', hint: 'Zweimal der Faktor 0,85.',
        whyWrong: ['Es wurden 30 % auf einmal abgezogen.', 'Das ist nur nach einem Jahr.', 'Es wurde mit 0,15² statt 0,85² multipliziert.', null],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['(400 - 200) / 8', 25],
      al: {
        question: 'Një depozitë mbushet nga 200 l në 400 l për 8 min. Sa është norma e mbushjes?', options: ['50 l/min', '25 l/min', '0,04 l/min', '1 600 l/min'],
        explanation: '(400 − 200) : 8 = 25 l/min.', hint: 'Ndryshimi : koha.',
        whyWrong: ['U përdor vlera përfundimtare 400, jo ndryshimi.', null, 'Thyesa u kthye: 8 : 200.', 'U shumëzua në vend që të pjesëtohej.'],
      },
      en: {
        question: 'A tank fills from 200 l to 400 l in 8 min. What is the rate of filling?', options: ['50 l/min', '25 l/min', '0.04 l/min', '1 600 l/min'],
        explanation: '(400 − 200) ÷ 8 = 25 l/min.', hint: 'Change ÷ time.',
        whyWrong: ['The final value 400 was used, not the change.', null, 'The fraction is upside down: 8 ÷ 200.', 'It was multiplied instead of divided.'],
      },
      de: {
        question: 'Ein Tank füllt sich in 8 min von 200 l auf 400 l. Wie groß ist die Füllrate?', options: ['50 l/min', '25 l/min', '0,04 l/min', '1 600 l/min'],
        explanation: '(400 − 200) : 8 = 25 l/min.', hint: 'Änderung : Zeit.',
        whyWrong: ['Es wurde der Endwert 400 statt der Änderung verwendet.', null, 'Der Bruch ist umgedreht: 8 : 200.', 'Es wurde multipliziert statt dividiert.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 1124.86, tolerance: 0.01 }, unit: '€',
      verify: ['1000 * 1.04^3', 1124.86, 0.01],
      al: { question: '1 000 € depozitohen me interes të përbërë 4% në vit. Sa bëhen pas 3 vjetësh? (2 dhjetore)', explanation: '1 000 · 1,04³ ≈ 1 124,86 €.', hint: 'Shumëzuesi 1,04 tri herë.', commonMistakes: [{ value: 1120, why: 'Ky është interesi i thjeshtë.' }, { value: 1040, why: 'Kjo është vetëm pas një viti.' }] },
      en: { question: '€1 000 is invested at 4% compound interest a year. How much is it after 3 years? (2 d.p.)', explanation: '1 000 · 1.04³ ≈ €1 124.86.', hint: 'The multiplier 1.04 three times.', commonMistakes: [{ value: 1120, why: 'That is simple interest.' }, { value: 1040, why: 'That is after one year only.' }] },
      de: { question: '1 000 € werden mit 4 % Zinseszins pro Jahr angelegt. Wie viel sind es nach 3 Jahren? (2 Dezimalstellen)', explanation: '1 000 · 1,04³ ≈ 1 124,86 €.', hint: 'Dreimal der Faktor 1,04.', commonMistakes: [{ value: 1120, why: 'Das sind einfache Zinsen.' }, { value: 1040, why: 'Das ist nur nach einem Jahr.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: true,
      verify: ['(24 / 6) / (24 / 3) == 1/2', true],
      al: { question: 'Nëse y ∝ 1/x dhe x dyfishohet, atëherë y përgjysmohet.', explanation: 'E vërtetë: y = k/x → k/(2x) = 1/2 · k/x.', hint: 'x · y mbetet konstant.', whyWrong: 'P.sh. k = 24: x = 3 → y = 8; x = 6 → y = 4.' },
      en: { question: 'If y ∝ 1/x and x doubles, then y halves.', explanation: 'True: y = k/x → k/(2x) = 1/2 · k/x.', hint: 'x · y stays constant.', whyWrong: 'E.g. k = 24: x = 3 → y = 8; x = 6 → y = 4.' },
      de: { question: 'Ist y ∼ 1/x und verdoppelt sich x, dann halbiert sich y.', explanation: 'Richtig: y = k/x → k/(2x) = 1/2 · k/x.', hint: 'x · y bleibt konstant.', whyWrong: 'Z. B. k = 24: x = 3 → y = 8; x = 6 → y = 4.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['18 / 9 * 25', 50],
      al: {
        question: 'y ∝ x² dhe y = 18 kur x = 3. Sa është y kur x = 5?', options: ['50', '30', '10,8', '150'],
        explanation: 'k = 18 : 9 = 2; y = 2 · 25 = 50.', hint: 'y = kx², k = y : x².',
        whyWrong: [null, 'U llogarit si y ∝ x: 6 · 5.', 'U llogarit si përpjesëtim i zhdrejtë: 54 : 5.', 'k u gjet 18 : 3 = 6 në vend të 18 : 9.'],
      },
      en: {
        question: 'y ∝ x² and y = 18 when x = 3. What is y when x = 5?', options: ['50', '30', '10.8', '150'],
        explanation: 'k = 18 ÷ 9 = 2; y = 2 · 25 = 50.', hint: 'y = kx², k = y ÷ x².',
        whyWrong: [null, 'It was treated as y ∝ x: 6 · 5.', 'It was treated as inverse proportion: 54 ÷ 5.', 'k was found as 18 ÷ 3 = 6 instead of 18 ÷ 9.'],
      },
      de: {
        question: 'y ∼ x² und y = 18 für x = 3. Wie groß ist y für x = 5?', options: ['50', '30', '10,8', '150'],
        explanation: 'k = 18 : 9 = 2; y = 2 · 25 = 50.', hint: 'y = kx², k = y : x².',
        whyWrong: [null, 'Es wurde y ∼ x gerechnet: 6 · 5.', 'Es wurde antiproportional gerechnet: 54 : 5.', 'k wurde als 18 : 3 = 6 statt 18 : 9 bestimmt.'],
      },
    },
  ],
};
