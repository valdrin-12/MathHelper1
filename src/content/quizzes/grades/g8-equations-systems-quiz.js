// Grade 8 · Theme 8 quiz: Equations, inequalities and systems (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g8-equations-systems-quiz',
  grade: 8,
  theme: 'g8-equations-systems',
  order: 8,
  difficulty: 'intermediate',
  icon: '⇌',
  color: '#3A86FF',
  i18n: {
    al: { title: 'Ekuacionet dhe sistemet', category: 'Klasa 8 · Tema 8', duration: '10 min' },
    en: { title: 'Equations and systems', category: 'Grade 8 · Theme 8', duration: '10 min' },
    de: { title: 'Gleichungen und Systeme', category: 'Klasse 8 · Thema 8', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      al: {
        question: 'Cilat janë zgjidhjet e x² − 6x = 0?', options: ['x = 6', 'x = 0 ose x = 6', 'x = −6 ose x = 0', 'x = ±6'],
        explanation: 'x(x − 6) = 0 → x = 0 ose x = 6.', hint: 'Nxirrni x para kllapave.',
        whyWrong: ['Pjesëtuat me x dhe humbët x = 0.', null, '(−6)² − 6 · (−6) = 72 ≠ 0.', 'x = −6 nuk e plotëson ekuacionin.'],
      },
      en: {
        question: 'What are the solutions of x² − 6x = 0?', options: ['x = 6', 'x = 0 or x = 6', 'x = −6 or x = 0', 'x = ±6'],
        explanation: 'x(x − 6) = 0 → x = 0 or x = 6.', hint: 'Take x out as a factor.',
        whyWrong: ['You divided by x and lost x = 0.', null, '(−6)² − 6 · (−6) = 72 ≠ 0.', 'x = −6 does not satisfy the equation.'],
      },
      de: {
        question: 'Welche Lösungen hat x² − 6x = 0?', options: ['x = 6', 'x = 0 oder x = 6', 'x = −6 oder x = 0', 'x = ±6'],
        explanation: 'x(x − 6) = 0 → x = 0 oder x = 6.', hint: 'x ausklammern.',
        whyWrong: ['Sie haben durch x geteilt und x = 0 verloren.', null, '(−6)² − 6 · (−6) = 72 ≠ 0.', 'x = −6 erfüllt die Gleichung nicht.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 7 },
      verify: ['(9 + 5) / (5 - 3)', 7],
      al: { question: 'Zgjidhni (x − 1)/3 = (x + 3)/5. Sa është x?', explanation: '5x − 5 = 3x + 9 → 2x = 14 → x = 7.', hint: 'Shumëzoni kryq.', commonMistakes: [{ value: 2, why: '5(x − 1) = 5x − 5, jo 5x − 1.' }] },
      en: { question: 'Solve (x − 1)/3 = (x + 3)/5. What is x?', explanation: '5x − 5 = 3x + 9 → 2x = 14 → x = 7.', hint: 'Cross-multiply.', commonMistakes: [{ value: 2, why: '5(x − 1) = 5x − 5, not 5x − 1.' }] },
      de: { question: 'Lösen Sie (x − 1)/3 = (x + 3)/5. Wie groß ist x?', explanation: '5x − 5 = 3x + 9 → 2x = 14 → x = 7.', hint: 'Über Kreuz multiplizieren.', commonMistakes: [{ value: 2, why: '5(x − 1) = 5x − 5, nicht 5x − 1.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['3 + 2 * 2 == 7 and 3 * 3 - 2 == 7', true],
      al: { question: '(3, 2) është zgjidhje e sistemit x + 2y = 7, 3x − y = 7.', explanation: 'E vërtetë: 3 + 4 = 7 dhe 9 − 2 = 7.', hint: 'Zëvendësoni në të dy ekuacionet.', whyWrong: 'Çifti i plotëson të dy ekuacionet.' },
      en: { question: '(3, 2) is a solution of the system x + 2y = 7, 3x − y = 7.', explanation: 'True: 3 + 4 = 7 and 9 − 2 = 7.', hint: 'Substitute into both equations.', whyWrong: 'The pair satisfies both equations.' },
      de: { question: '(3 | 2) ist eine Lösung des Systems x + 2y = 7, 3x − y = 7.', explanation: 'Richtig: 3 + 4 = 7 und 9 − 2 = 7.', hint: 'In beide Gleichungen einsetzen.', whyWrong: 'Das Paar erfüllt beide Gleichungen.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 3,
      verify: 'text',
      al: {
        question: 'Cila është zgjidhja e 5 − 2x ≥ 11?', options: ['x ≥ −3', 'x ≤ 3', 'x ≥ 3', 'x ≤ −3'],
        explanation: '−2x ≥ 6 → x ≤ −3 (pjesëtimi me −2 e kthen shenjën).', hint: 'Kujdes kur pjesëtoni me numër negativ.',
        whyWrong: ['Harruat ta ktheni shenjën.', 'Gabim te shenja e numrit: 6 : (−2) = −3.', 'Dy gabime: shenja e numrit dhe e mosbarazimit.', null],
      },
      en: {
        question: 'What is the solution of 5 − 2x ≥ 11?', options: ['x ≥ −3', 'x ≤ 3', 'x ≥ 3', 'x ≤ −3'],
        explanation: '−2x ≥ 6 → x ≤ −3 (dividing by −2 flips the sign).', hint: 'Careful when dividing by a negative number.',
        whyWrong: ['You forgot to flip the sign.', 'Sign slip: 6 ÷ (−2) = −3.', 'Two slips: the sign of the number and of the inequality.', null],
      },
      de: {
        question: 'Wie lautet die Lösung von 5 − 2x ≥ 11?', options: ['x ≥ −3', 'x ≤ 3', 'x ≥ 3', 'x ≤ −3'],
        explanation: '−2x ≥ 6 → x ≤ −3 (Division durch −2 dreht das Zeichen um).', hint: 'Vorsicht beim Teilen durch eine negative Zahl.',
        whyWrong: ['Das Zeichen wurde nicht umgedreht.', 'Vorzeichenfehler: 6 : (−2) = −3.', 'Zwei Fehler: Vorzeichen der Zahl und Ungleichheitszeichen.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 7 },
      verify: ['(10 + 4) / 2', 7],
      al: { question: 'x + y = 10 dhe x − y = 4. Sa është x?', explanation: 'Mbledhim: 2x = 14, x = 7 (dhe y = 3).', hint: 'Mblidhni të dy ekuacionet.', commonMistakes: [{ value: 3, why: 'Kjo është y.' }, { value: 14, why: 'Ky është 2x; pjesëtoni me 2.' }] },
      en: { question: 'x + y = 10 and x − y = 4. What is x?', explanation: 'Add: 2x = 14, x = 7 (and y = 3).', hint: 'Add the two equations.', commonMistakes: [{ value: 3, why: 'That is y.' }, { value: 14, why: 'That is 2x; divide by 2.' }] },
      de: { question: 'x + y = 10 und x − y = 4. Wie groß ist x?', explanation: 'Addieren: 2x = 14, x = 7 (und y = 3).', hint: 'Beide Gleichungen addieren.', commonMistakes: [{ value: 3, why: 'Das ist y.' }, { value: 14, why: 'Das ist 2x; durch 2 teilen.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'Zgjidhni x² = 25.', options: ['x = ±5', 'x = 5', 'x = 12,5', 'x = 625'],
        explanation: '5² = 25 dhe (−5)² = 25, pra x = 5 ose x = −5.', hint: 'Ka dy numra me katror 25.',
        whyWrong: [null, 'Mungon zgjidhja negative.', 'Pjesëtuat me 2 në vend që të nxirrnit rrënjën.', 'Ngritët në katror në vend që të nxirrnit rrënjën.'],
      },
      en: {
        question: 'Solve x² = 25.', options: ['x = ±5', 'x = 5', 'x = 12.5', 'x = 625'],
        explanation: '5² = 25 and (−5)² = 25, so x = 5 or x = −5.', hint: 'Two numbers square to 25.',
        whyWrong: [null, 'The negative solution is missing.', 'You halved instead of taking the root.', 'You squared instead of taking the root.'],
      },
      de: {
        question: 'Lösen Sie x² = 25.', options: ['x = ±5', 'x = 5', 'x = 12,5', 'x = 625'],
        explanation: '5² = 25 und (−5)² = 25, also x = 5 oder x = −5.', hint: 'Zwei Zahlen haben das Quadrat 25.',
        whyWrong: [null, 'Die negative Lösung fehlt.', 'Sie haben halbiert statt die Wurzel zu ziehen.', 'Sie haben quadriert statt die Wurzel zu ziehen.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['-3 * (-3) < 6', false],
      al: { question: 'Nga −3x < 6 del x < −2.', explanation: 'E gabuar: pjesëtimi me −3 e kthen shenjën, x > −2. P.sh. x = −3: 9 < 6 nuk vlen.', hint: 'Provoni x = −3.', whyWrong: 'Shenja duhet kthyer: x > −2.' },
      en: { question: 'From −3x < 6 it follows that x < −2.', explanation: 'False: dividing by −3 flips the sign, x > −2. E.g. x = −3: 9 < 6 is not true.', hint: 'Try x = −3.', whyWrong: 'The sign must flip: x > −2.' },
      de: { question: 'Aus −3x < 6 folgt x < −2.', explanation: 'Falsch: Division durch −3 dreht das Zeichen um, x > −2. Z. B. x = −3: 9 < 6 stimmt nicht.', hint: 'Probieren Sie x = −3.', whyWrong: 'Das Zeichen muss sich umdrehen: x > −2.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      al: {
        question: 'Zgjidhni (x − 3)² = 16.', options: ['x = 7', 'x = 19', 'x = 7 ose x = −1', 'x = 4 ose x = −4'],
        explanation: 'x − 3 = 4 ose x − 3 = −4 → x = 7 ose x = −1.', hint: 'x − 3 = ±4.',
        whyWrong: ['Mungon zgjidhja nga x − 3 = −4.', 'Shtuat 3 te 16 pa nxjerrë rrënjën.', null, 'Harruat të shtonit 3.'],
      },
      en: {
        question: 'Solve (x − 3)² = 16.', options: ['x = 7', 'x = 19', 'x = 7 or x = −1', 'x = 4 or x = −4'],
        explanation: 'x − 3 = 4 or x − 3 = −4 → x = 7 or x = −1.', hint: 'x − 3 = ±4.',
        whyWrong: ['The solution from x − 3 = −4 is missing.', 'You added 3 to 16 without taking the root.', null, 'You forgot to add 3.'],
      },
      de: {
        question: 'Lösen Sie (x − 3)² = 16.', options: ['x = 7', 'x = 19', 'x = 7 oder x = −1', 'x = 4 oder x = −4'],
        explanation: 'x − 3 = 4 oder x − 3 = −4 → x = 7 oder x = −1.', hint: 'x − 3 = ±4.',
        whyWrong: ['Die Lösung aus x − 3 = −4 fehlt.', 'Sie haben 3 zu 16 addiert, ohne die Wurzel zu ziehen.', null, 'Die 3 wurde nicht addiert.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 2 },
      verify: ['(15 - 5) / (6 - 1)', 2],
      al: { question: '2 fletore dhe 1 laps kushtojnë 5 €; 1 fletore dhe 3 lapsa kushtojnë 5 €. Sa euro kushton një fletore?', explanation: 'l = 5 − 2f → f + 3(5 − 2f) = 5 → −5f = −10 → f = 2 €.', hint: 'Shprehni lapsin nga ekuacioni i parë.', unit: '€', commonMistakes: [{ value: 1, why: 'Ky është çmimi i lapsit.' }] },
      en: { question: '2 notebooks and 1 pen cost €5; 1 notebook and 3 pens cost €5. How many euros is one notebook?', explanation: 'p = 5 − 2n → n + 3(5 − 2n) = 5 → −5n = −10 → n = €2.', hint: 'Express the pen from the first equation.', unit: '€', commonMistakes: [{ value: 1, why: 'That is the price of a pen.' }] },
      de: { question: '2 Hefte und 1 Stift kosten 5 €; 1 Heft und 3 Stifte kosten 5 €. Wie viel Euro kostet ein Heft?', explanation: 's = 5 − 2h → h + 3(5 − 2h) = 5 → −5h = −10 → h = 2 €.', hint: 'Den Stift aus der ersten Gleichung ausdrücken.', unit: '€', commonMistakes: [{ value: 1, why: 'Das ist der Preis eines Stifts.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 12 },
      verify: ['10 / (1/2 + 1/3)', 12],
      al: { question: 'Zgjidhni x/2 + x/3 = 10.', explanation: 'Shumëzojmë me 6: 3x + 2x = 60 → x = 12.', hint: 'Emëruesi i përbashkët është 6.', commonMistakes: [{ value: 50, why: 'Mblodhët emëruesit: x/2 + x/3 ≠ x/5.' }] },
      en: { question: 'Solve x/2 + x/3 = 10.', explanation: 'Multiply by 6: 3x + 2x = 60 → x = 12.', hint: 'The common denominator is 6.', commonMistakes: [{ value: 50, why: 'You added the denominators: x/2 + x/3 ≠ x/5.' }] },
      de: { question: 'Lösen Sie x/2 + x/3 = 10.', explanation: 'Mit 6 multiplizieren: 3x + 2x = 60 → x = 12.', hint: 'Der Hauptnenner ist 6.', commonMistakes: [{ value: 50, why: 'Sie haben die Nenner addiert: x/2 + x/3 ≠ x/5.' }] },
    },
  ],
};
