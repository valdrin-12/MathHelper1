// Grade 9 · Theme 6 quiz: Linear graphs and systems (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g9-linear-systems-quiz',
  grade: 9,
  theme: 'g9-linear-systems',
  order: 6,
  difficulty: 'intermediate',
  icon: '⇌',
  color: '#457B9D',
  i18n: {
    al: { title: 'Sistemet lineare', category: 'Klasa 9 · Tema 6', duration: '10 min' },
    en: { title: 'Linear systems', category: 'Grade 9 · Theme 6', duration: '10 min' },
    de: { title: 'Lineare Gleichungssysteme', category: 'Klasse 9 · Thema 6', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', view: { xMin: -2, xMax: 8, yMin: -8, yMax: 8 },
    functions: [{ expr: 'k*x + n', label: 'y = {k}x {+n}' }],
    points: [{ at: ['-n/k', 0], label: '({-n/k}, 0)', color: 'secondary' }],
    sliders: [{ name: 'k', min: -4, max: 4, step: 0.5, value: 2 }, { name: 'n', min: -8, max: 8, step: 1, value: -6 }],
    readouts: [{ text: { al: 'Prerja me boshtin x: y = 0 → x = −n/k = {-n/k}', en: 'x-intercept: y = 0 → x = −n/k = {-n/k}', de: 'Nullstelle: y = 0 → x = −n/k = {-n/k}' } }],
    alt: { al: 'Drejtëza y = kx + n dhe pika ku pret boshtin x.', en: 'The line y = kx + n and the point where it crosses the x-axis.', de: 'Die Gerade y = kx + n und ihr Schnittpunkt mit der x-Achse.' },
  },
      al: {
        question: 'Ku e pret drejtëza y = 2x − 6 boshtin x?', options: ['(−6, 0)', '(3, 0)', '(0, 3)', '(6, 0)'],
        explanation: 'y = 0: 2x = 6, x = 3.', hint: 'Në boshtin x, y = 0.',
        whyWrong: ['−6 është prerja me boshtin y.', null, 'Kjo pikë është në boshtin y.', 'Harruat të pjesëtoni me 2.'],
      },
      en: {
        question: 'Where does the line y = 2x − 6 cross the x-axis?', options: ['(−6, 0)', '(3, 0)', '(0, 3)', '(6, 0)'],
        explanation: 'y = 0: 2x = 6, x = 3.', hint: 'On the x-axis y = 0.',
        whyWrong: ['−6 is the y-intercept.', null, 'That point is on the y-axis.', 'You forgot to divide by 2.'],
      },
      de: {
        question: 'Wo schneidet die Gerade y = 2x − 6 die x-Achse?', options: ['(−6 | 0)', '(3 | 0)', '(0 | 3)', '(6 | 0)'],
        explanation: 'y = 0: 2x = 6, x = 3.', hint: 'Auf der x-Achse ist y = 0.',
        whyWrong: ['−6 ist der y-Achsenabschnitt.', null, 'Dieser Punkt liegt auf der y-Achse.', 'Die Division durch 2 fehlt.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 7 },
      verify: ['(10 + 4) / 2', 7],
      al: { question: 'x + y = 10 dhe x − y = 4. Sa është x?', explanation: '2x = 14 → x = 7.', hint: 'Mblidhni ekuacionet.', commonMistakes: [{ value: 3, why: 'Kjo është y.' }] },
      en: { question: 'x + y = 10 and x − y = 4. What is x?', explanation: '2x = 14 → x = 7.', hint: 'Add the equations.', commonMistakes: [{ value: 3, why: 'That is y.' }] },
      de: { question: 'x + y = 10 und x − y = 4. Wie groß ist x?', explanation: '2x = 14 → x = 7.', hint: 'Die Gleichungen addieren.', commonMistakes: [{ value: 3, why: 'Das ist y.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['2*3 + 3*2 == 12 and 3 == 2*2 - 1', true],
      al: { question: '(3, 2) është zgjidhje e sistemit 2x + 3y = 12, x = 2y − 1.', explanation: 'E vërtetë: 6 + 6 = 12 dhe 3 = 4 − 1.', hint: 'Zëvendësoni në të dy ekuacionet.', whyWrong: 'Të dy ekuacionet plotësohen.' },
      en: { question: '(3, 2) is a solution of the system 2x + 3y = 12, x = 2y − 1.', explanation: 'True: 6 + 6 = 12 and 3 = 4 − 1.', hint: 'Substitute into both equations.', whyWrong: 'Both equations hold.' },
      de: { question: '(3 | 2) ist eine Lösung des Systems 2x + 3y = 12, x = 2y − 1.', explanation: 'Richtig: 6 + 6 = 12 und 3 = 4 − 1.', hint: 'In beide Gleichungen einsetzen.', whyWrong: 'Beide Gleichungen sind erfüllt.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', equal: false, view: { xMin: -5, xMax: 5, yMin: -8, yMax: 8 },
    functions: [{ expr: '2*x + (1)', color: 'muted', label: 'y = 2x + 1' }, { expr: 'k*x + n', color: 'secondary', label: 'y = {k}x {+n}' }],
    sliders: [{ name: 'k', min: -4, max: 4, step: 0.5, value: 2 }, { name: 'n', min: -6, max: 6, step: 0.5, value: -3 }],
    readouts: [{ cases: [
      { when: 'abs(k - (2)) < 0.001 and abs(n - (1)) < 0.001', text: { al: 'Të njëjtën drejtëz: pafund pika të përbashkëta.', en: 'The same line: infinitely many common points.', de: 'Dieselbe Gerade: unendlich viele gemeinsame Punkte.' } },
      { when: 'abs(k - (2)) < 0.001', text: { al: 'k = 2 si te drejtëza e parë: paralele, asnjë pikë e përbashkët.', en: 'k = 2 as for the first line: parallel, no common point.', de: 'k = 2 wie bei der ersten Geraden: parallel, kein gemeinsamer Punkt.' } },
      { text: { al: 'Koeficientë të ndryshëm: drejtëzat priten në një pikë.', en: 'Different gradients: the lines meet at one point.', de: 'Verschiedene Steigungen: Die Geraden schneiden sich in einem Punkt.' } },
    ] }],
    alt: { al: 'Dy drejtëza: njëra e dhënë, tjetra y = kx + n me rrëshqitës.', en: 'Two lines: one given, the other y = kx + n on sliders.', de: 'Zwei Geraden: eine gegeben, die andere y = kx + n mit Schiebereglern.' },
  },
      al: {
        question: 'Sa pika të përbashkëta kanë y = 2x + 1 dhe y = 2x − 3?', options: ['Një', 'Dy', 'Asnjë', 'Pafund'],
        explanation: 'Pjerrësia e njëjtë, prerje të ndryshme: drejtëzat janë paralele.', hint: 'Krahasoni pjerrësitë.',
        whyWrong: ['Do të ishte kështu me pjerrësi të ndryshme.', 'Dy drejtëza të ndryshme nuk priten në dy pika.', null, 'Pafund vetëm nëse do të ishin e njëjta drejtëz.'],
      },
      en: {
        question: 'How many points do y = 2x + 1 and y = 2x − 3 have in common?', options: ['One', 'Two', 'None', 'Infinitely many'],
        explanation: 'Same slope, different intercepts: the lines are parallel.', hint: 'Compare the slopes.',
        whyWrong: ['That would need different slopes.', 'Two different lines never meet twice.', null, 'Only if they were the same line.'],
      },
      de: {
        question: 'Wie viele gemeinsame Punkte haben y = 2x + 1 und y = 2x − 3?', options: ['Einen', 'Zwei', 'Keinen', 'Unendlich viele'],
        explanation: 'Gleiche Steigung, verschiedene Achsenabschnitte: Die Geraden sind parallel.', hint: 'Steigungen vergleichen.',
        whyWrong: ['Dafür bräuchte man verschiedene Steigungen.', 'Zwei verschiedene Geraden schneiden sich nie zweimal.', null, 'Nur wenn es dieselbe Gerade wäre.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 8 },
      verify: ['(56 - 2 * 20) / 2', 8],
      al: { question: 'Në një fermë ka pula dhe lopë: 20 koka dhe 56 këmbë. Sa lopë ka?', explanation: 'x + y = 20, 2x + 4y = 56 → 2y = 16 → y = 8.', hint: 'Pulat kanë 2 këmbë, lopët 4.', commonMistakes: [{ value: 12, why: 'Ky është numri i pulave.' }, { value: 14, why: '56 : 4 = 14 nuk merr parasysh pulat.' }] },
      en: { question: 'A farm has hens and cows: 20 heads and 56 legs. How many cows are there?', explanation: 'x + y = 20, 2x + 4y = 56 → 2y = 16 → y = 8.', hint: 'Hens have 2 legs, cows 4.', commonMistakes: [{ value: 12, why: 'That is the number of hens.' }, { value: 14, why: '56 ÷ 4 = 14 ignores the hens.' }] },
      de: { question: 'Auf einem Hof gibt es Hühner und Kühe: 20 Köpfe und 56 Beine. Wie viele Kühe gibt es?', explanation: 'x + y = 20, 2x + 4y = 56 → 2y = 16 → y = 8.', hint: 'Hühner haben 2 Beine, Kühe 4.', commonMistakes: [{ value: 12, why: 'Das ist die Zahl der Hühner.' }, { value: 14, why: '56 : 4 = 14 lässt die Hühner außer Acht.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['(8 - 2) / (3 - 1)', 3],
      al: {
        question: 'Sa është pjerrësia e drejtëzës nëpër (1, 2) dhe (3, 8)?', options: ['3', '1/3', '6', '2'],
        explanation: 'a = (8 − 2)/(3 − 1) = 6/2 = 3.', hint: 'Ndryshimi i y mbi ndryshimin e x.',
        whyWrong: [null, 'Pjesëtuat ndryshimin e x me atë të y.', 'Kjo është vetëm ndryshimi i y.', 'Kjo është vetëm ndryshimi i x.'],
      },
      en: {
        question: 'What is the slope of the line through (1, 2) and (3, 8)?', options: ['3', '1/3', '6', '2'],
        explanation: 'a = (8 − 2)/(3 − 1) = 6/2 = 3.', hint: 'Change in y over change in x.',
        whyWrong: [null, 'You divided the change in x by the change in y.', 'That is only the change in y.', 'That is only the change in x.'],
      },
      de: {
        question: 'Welche Steigung hat die Gerade durch (1 | 2) und (3 | 8)?', options: ['3', '1/3', '6', '2'],
        explanation: 'a = (8 − 2)/(3 − 1) = 6/2 = 3.', hint: 'y-Änderung durch x-Änderung.',
        whyWrong: [null, 'Sie haben x-Änderung durch y-Änderung geteilt.', 'Das ist nur die y-Änderung.', 'Das ist nur die x-Änderung.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', view: { xMin: -4, xMax: 4, yMin: -8, yMax: 8 },
    functions: [{ expr: '-2*x + 1', color: 'muted', label: 'y = −2x + 1' }, { expr: '(c - 4*x)/2', color: 'secondary', dashed: true, label: '4x + 2y = {c}' }],
    sliders: [{ name: 'c', min: -6, max: 8, step: 1, value: 2 }],
    readouts: [{ cases: [
      { when: 'c == 2', text: { al: 'Për c = 2 të dyja janë e njëjta drejtëz: pafund zgjidhje.', en: 'For c = 2 both are the same line: infinitely many solutions.', de: 'Für c = 2 sind beide dieselbe Gerade: unendlich viele Lösungen.' } },
      { text: { al: 'Paralele (të njëjtin koeficient −2): asnjë zgjidhje.', en: 'Parallel (same gradient −2): no solution.', de: 'Parallel (gleiche Steigung −2): keine Lösung.' } },
    ] }],
    alt: { al: 'Drejtëzat y = −2x + 1 dhe 4x + 2y = c me rrëshqitës për c.', en: 'The lines y = −2x + 1 and 4x + 2y = c with a slider for c.', de: 'Die Geraden y = −2x + 1 und 4x + 2y = c mit Schieberegler für c.' },
  },
      al: { question: 'Sistemi y = −2x + 1 dhe 4x + 2y = 2 ka saktësisht një zgjidhje.', explanation: 'E gabuar: nga 4x + 2y = 2 del y = −2x + 1, e njëjta drejtëz; ka pafund zgjidhje.', hint: 'Shprehni y nga ekuacioni i dytë.', whyWrong: 'Dy ekuacionet përshkruajnë të njëjtën drejtëz.' },
      en: { question: 'The system y = −2x + 1 and 4x + 2y = 2 has exactly one solution.', explanation: 'False: 4x + 2y = 2 gives y = −2x + 1, the same line; there are infinitely many solutions.', hint: 'Make y the subject of the second equation.', whyWrong: 'Both equations describe the same line.' },
      de: { question: 'Das System y = −2x + 1 und 4x + 2y = 2 hat genau eine Lösung.', explanation: 'Falsch: Aus 4x + 2y = 2 folgt y = −2x + 1, dieselbe Gerade; es gibt unendlich viele Lösungen.', hint: 'Die zweite Gleichung nach y auflösen.', whyWrong: 'Beide Gleichungen beschreiben dieselbe Gerade.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: 'text',
      al: {
        question: 'Zgjidhni: y = 3x − 1, x + y = 7.', options: ['(1, 6)', '(3, 4)', '(7, 0)', '(2, 5)'],
        explanation: 'x + 3x − 1 = 7 → x = 2, y = 5.', hint: 'Zëvendësoni y te ekuacioni i dytë.',
        whyWrong: ['Plotëson x + y = 7, por jo y = 3x − 1.', 'Plotëson x + y = 7, por 3 · 3 − 1 = 8.', 'Plotëson vetëm ekuacionin e dytë.', null],
      },
      en: {
        question: 'Solve: y = 3x − 1, x + y = 7.', options: ['(1, 6)', '(3, 4)', '(7, 0)', '(2, 5)'],
        explanation: 'x + 3x − 1 = 7 → x = 2, y = 5.', hint: 'Substitute y into the second equation.',
        whyWrong: ['It satisfies x + y = 7 but not y = 3x − 1.', 'It satisfies x + y = 7, but 3 · 3 − 1 = 8.', 'It satisfies only the second equation.', null],
      },
      de: {
        question: 'Lösen Sie: y = 3x − 1, x + y = 7.', options: ['(1 | 6)', '(3 | 4)', '(7 | 0)', '(2 | 5)'],
        explanation: 'x + 3x − 1 = 7 → x = 2, y = 5.', hint: 'y in die zweite Gleichung einsetzen.',
        whyWrong: ['Erfüllt x + y = 7, aber nicht y = 3x − 1.', 'Erfüllt x + y = 7, aber 3 · 3 − 1 = 8.', 'Erfüllt nur die zweite Gleichung.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 4 },
      verify: ['(48 - 4 * 10) / (6 - 4)', 4],
      al: { question: 'Bileta për të rritur kushton 6 €, për fëmijë 4 €. 10 bileta kushtuan 48 €. Sa bileta ishin për të rritur?', explanation: 'a + f = 10, 6a + 4f = 48 → 2a = 8 → a = 4.', hint: 'Dy ekuacione: numri dhe vlera.', commonMistakes: [{ value: 6, why: 'Ky është numri i biletave për fëmijë.' }, { value: 8, why: '6a + 4(10 − a) = 48 → 2a = 8, pra a = 4.' }] },
      en: { question: 'An adult ticket costs €6, a child ticket €4. 10 tickets cost €48. How many adult tickets were there?', explanation: 'a + c = 10, 6a + 4c = 48 → 2a = 8 → a = 4.', hint: 'Two equations: number and value.', commonMistakes: [{ value: 6, why: 'That is the number of child tickets.' }, { value: 8, why: '6a + 4(10 − a) = 48 → 2a = 8, so a = 4.' }] },
      de: { question: 'Eine Karte für Erwachsene kostet 6 €, für Kinder 4 €. 10 Karten kosteten 48 €. Wie viele Erwachsenenkarten waren es?', explanation: 'e + k = 10, 6e + 4k = 48 → 2e = 8 → e = 4.', hint: 'Zwei Gleichungen: Anzahl und Wert.', commonMistakes: [{ value: 6, why: 'Das ist die Zahl der Kinderkarten.' }, { value: 8, why: '6e + 4(10 − e) = 48 → 2e = 8, also e = 4.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 7 },
      verify: ['22 - 15', 7],
      al: { question: '15 monedha prej 2 € dhe 1 € kanë vlerë gjithsej 22 €. Sa monedha janë prej 2 €?', explanation: 'x + y = 15, 2x + y = 22 → x = 7.', hint: 'Zbritni ekuacionin e parë nga i dyti.', commonMistakes: [{ value: 8, why: 'Ky është numri i monedhave prej 1 €.' }, { value: 11, why: '22 : 2 = 11 nuk merr parasysh monedhat prej 1 €.' }] },
      en: { question: '15 coins of €2 and €1 are worth €22 in total. How many €2 coins are there?', explanation: 'x + y = 15, 2x + y = 22 → x = 7.', hint: 'Subtract the first equation from the second.', commonMistakes: [{ value: 8, why: 'That is the number of €1 coins.' }, { value: 11, why: '22 ÷ 2 = 11 ignores the €1 coins.' }] },
      de: { question: '15 Münzen zu 2 € und 1 € sind zusammen 22 € wert. Wie viele 2-€-Münzen sind es?', explanation: 'x + y = 15, 2x + y = 22 → x = 7.', hint: 'Die erste Gleichung von der zweiten abziehen.', commonMistakes: [{ value: 8, why: 'Das ist die Zahl der 1-€-Münzen.' }, { value: 11, why: '22 : 2 = 11 lässt die 1-€-Münzen außer Acht.' }] },
    },
  ],
};
