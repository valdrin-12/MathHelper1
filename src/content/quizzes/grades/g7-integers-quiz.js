// Grade 7 · Theme 3 quiz: Integers (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g7-integers-quiz',
  grade: 7,
  theme: 'g7-integers',
  order: 3,
  difficulty: 'beginner',
  icon: '➖',
  color: '#DDA15E',
  i18n: {
    al: { title: 'Numrat e plotë', category: 'Klasa 7 · Tema 3', duration: '10 min' },
    en: { title: 'Integers', category: 'Grade 7 · Theme 3', duration: '10 min' },
    de: { title: 'Ganze Zahlen', category: 'Klasse 7 · Thema 3', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'input', difficulty: 'easy', answer: { value: 10 },
      verify: ['6 - (-4)', 10],
      al: { question: 'Llogaritni 6 − (−4).', explanation: '6 − (−4) = 6 + 4 = 10.', hint: 'Zbritja e një negativi është mbledhje.', commonMistakes: [{ value: 2, why: 'Zbritja e −4 është mbledhje e 4, jo zbritje.' }] },
      en: { question: 'Work out 6 − (−4).', explanation: '6 − (−4) = 6 + 4 = 10.', hint: 'Subtracting a negative is adding.', commonMistakes: [{ value: 2, why: 'Subtracting −4 means adding 4, not subtracting it.' }] },
      de: { question: 'Berechnen Sie 6 − (−4).', explanation: '6 − (−4) = 6 + 4 = 10.', hint: 'Eine negative Zahl subtrahieren heißt addieren.', commonMistakes: [{ value: 2, why: '−4 subtrahieren heißt 4 addieren, nicht abziehen.' }] },
    },
    {
      id: 2, type: 'choice', difficulty: 'easy', correct: 3,
      verify: ['(-6) * (-4)', 24],
      al: {
        question: 'Sa është (−6) · (−4)?', options: ['−24', '−10', '10', '24'],
        explanation: 'Shenja të njëjta → plus: 24.', hint: 'Minus herë minus …',
        whyWrong: ['Dy minuse japin plus.', 'Mblodhët në vend që të shumëzonit.', 'Shumëzimi i 6 me 4 jep 24, jo 10.', null],
      },
      en: {
        question: 'What is (−6) · (−4)?', options: ['−24', '−10', '10', '24'],
        explanation: 'Same signs → plus: 24.', hint: 'Minus times minus …',
        whyWrong: ['Two minuses give plus.', 'You added instead of multiplying.', '6 times 4 is 24, not 10.', null],
      },
      de: {
        question: 'Wie viel ist (−6) · (−4)?', options: ['−24', '−10', '10', '24'],
        explanation: 'Gleiche Vorzeichen → plus: 24.', hint: 'Minus mal minus …',
        whyWrong: ['Minus mal minus ergibt plus.', 'Sie haben addiert statt multipliziert.', '6 mal 4 ist 24, nicht 10.', null],
      },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: ['-9 + (-6) == 15', false],
      al: { question: '−9 + (−6) = 15', explanation: 'E gabuar: dy numra negativë mblidhen dhe mbetet minusi: −15.', hint: 'A ndikon rregulla "minus herë minus" te mbledhja?', whyWrong: 'Te mbledhja e dy negativëve mbahet shenja minus: −15.' },
      en: { question: '−9 + (−6) = 15', explanation: 'False: adding two negatives keeps the minus: −15.', hint: 'Does "minus times minus" apply to addition?', whyWrong: 'When adding two negatives, the minus sign stays: −15.' },
      de: { question: '−9 + (−6) = 15', explanation: 'Falsch: Zwei negative Zahlen addiert ergibt eine negative Zahl: −15.', hint: 'Gilt „minus mal minus“ auch beim Addieren?', whyWrong: 'Beim Addieren zweier negativer Zahlen bleibt das Minus: −15.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['(-48) / 6', -8],
      al: {
        question: 'Sa është (−48) : 6?', options: ['−8', '8', '−42', '−288'],
        explanation: '48 : 6 = 8, shenja të ndryshme → −8.', hint: 'Pjesëtoni vlerat, pastaj vendosni shenjën.',
        whyWrong: [null, 'Shenja të ndryshme japin minus.', 'Zbritët në vend që të pjesëtonit.', 'Shumëzuat në vend që të pjesëtonit.'],
      },
      en: {
        question: 'What is (−48) ÷ 6?', options: ['−8', '8', '−42', '−288'],
        explanation: '48 ÷ 6 = 8, different signs → −8.', hint: 'Divide the sizes, then decide the sign.',
        whyWrong: [null, 'Different signs give minus.', 'You subtracted instead of dividing.', 'You multiplied instead of dividing.'],
      },
      de: {
        question: 'Wie viel ist (−48) : 6?', options: ['−8', '8', '−42', '−288'],
        explanation: '48 : 6 = 8, verschiedene Vorzeichen → −8.', hint: 'Beträge dividieren, dann Vorzeichen bestimmen.',
        whyWrong: [null, 'Verschiedene Vorzeichen ergeben minus.', 'Sie haben subtrahiert statt dividiert.', 'Sie haben multipliziert statt dividiert.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 2 },
      verify: ['-7 - (-12) + (-3)', 2],
      al: { question: 'Llogaritni −7 − (−12) + (−3).', explanation: '−7 + 12 − 3 = 2.', hint: 'Shndërroni zbritjen e −12 në mbledhje.', commonMistakes: [{ value: -22, why: 'Zbritët 12 në vend që ta mblidhnit.' }, { value: 8, why: 'Mblodhët −3 si +3.' }] },
      en: { question: 'Work out −7 − (−12) + (−3).', explanation: '−7 + 12 − 3 = 2.', hint: 'Turn subtracting −12 into adding 12.', commonMistakes: [{ value: -22, why: 'You subtracted 12 instead of adding it.' }, { value: 8, why: 'You treated −3 as +3.' }] },
      de: { question: 'Berechnen Sie −7 − (−12) + (−3).', explanation: '−7 + 12 − 3 = 2.', hint: 'Machen Sie aus „− (−12)“ ein „+ 12“.', commonMistakes: [{ value: -22, why: 'Sie haben 12 subtrahiert statt addiert.' }, { value: 8, why: 'Sie haben −3 als +3 gerechnet.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['(-2) * (-3) * (-5)', -30],
      al: {
        question: 'Sa është (−2) · (−3) · (−5)?', options: ['30', '−10', '−30', '10'],
        explanation: '2 · 3 · 5 = 30; tre faktorë negativë → −30.', hint: 'Numëroni faktorët negativë.',
        whyWrong: ['Tre faktorë negativë (numër tek) japin minus.', 'Mblodhët në vend që të shumëzonit.', null, 'Mblodhët dhe gabuat shenjën.'],
      },
      en: {
        question: 'What is (−2) · (−3) · (−5)?', options: ['30', '−10', '−30', '10'],
        explanation: '2 · 3 · 5 = 30; three negative factors → −30.', hint: 'Count the negative factors.',
        whyWrong: ['Three negative factors (an odd number) give minus.', 'You added instead of multiplying.', null, 'You added and got the sign wrong.'],
      },
      de: {
        question: 'Wie viel ist (−2) · (−3) · (−5)?', options: ['30', '−10', '−30', '10'],
        explanation: '2 · 3 · 5 = 30; drei negative Faktoren → −30.', hint: 'Zählen Sie die negativen Faktoren.',
        whyWrong: ['Drei negative Faktoren (ungerade Anzahl) ergeben minus.', 'Sie haben addiert statt multipliziert.', null, 'Sie haben addiert und das Vorzeichen falsch gesetzt.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: true,
      verify: ['(-1) * (-1) * (-1) * (-1) == 1', true],
      al: { question: '(−1) · (−1) · (−1) · (−1) = 1', explanation: 'E vërtetë: katër faktorë negativë (numër çift) → pozitiv.', hint: 'Çift apo tek janë faktorët negativë?', whyWrong: 'Numri i faktorëve negativë është çift, prandaj rezultati është +1.' },
      en: { question: '(−1) · (−1) · (−1) · (−1) = 1', explanation: 'True: four negative factors (an even number) → positive.', hint: 'Is the number of negative factors even or odd?', whyWrong: 'The number of negative factors is even, so the result is +1.' },
      de: { question: '(−1) · (−1) · (−1) · (−1) = 1', explanation: 'Richtig: vier negative Faktoren (gerade Anzahl) → positiv.', hint: 'Ist die Anzahl der negativen Faktoren gerade oder ungerade?', whyWrong: 'Die Anzahl der negativen Faktoren ist gerade, das Ergebnis also +1.' },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 18 },
      verify: ['(-6) * (-4) + (-18) / 3', 18],
      al: { question: 'Llogaritni (−6) · (−4) + (−18) : 3.', explanation: '24 + (−6) = 18.', hint: 'Shumëzimi dhe pjesëtimi para mbledhjes.', commonMistakes: [{ value: 30, why: 'Morët (−18) : 3 si +6.' }, { value: -30, why: 'Morët (−6) · (−4) si −24.' }] },
      en: { question: 'Work out (−6) · (−4) + (−18) ÷ 3.', explanation: '24 + (−6) = 18.', hint: 'Multiplication and division before addition.', commonMistakes: [{ value: 30, why: 'You took (−18) ÷ 3 as +6.' }, { value: -30, why: 'You took (−6) · (−4) as −24.' }] },
      de: { question: 'Berechnen Sie (−6) · (−4) + (−18) : 3.', explanation: '24 + (−6) = 18.', hint: 'Punkt vor Strich.', commonMistakes: [{ value: 30, why: 'Sie haben (−18) : 3 als +6 gerechnet.' }, { value: -30, why: 'Sie haben (−6) · (−4) als −24 gerechnet.' }] },
    },
    {
      id: 9, type: 'choice', difficulty: 'hard', correct: 1,
      verify: ['7 - (-5)', 12],
      al: {
        question: 'Temperatura ishte −5 °C në mëngjes dhe 7 °C në mesditë. Sa gradë u rrit?', options: ['2 °C', '12 °C', '−12 °C', '35 °C'],
        explanation: '7 − (−5) = 7 + 5 = 12 °C.', hint: 'Ndryshimi = vlera e re − vlera e vjetër.',
        whyWrong: ['Zbritët 7 − 5 pa shenjën minus.', null, 'Temperatura u rrit, pra ndryshimi është pozitiv.', 'Shumëzuat vlerat.'],
      },
      en: {
        question: 'The temperature was −5 °C in the morning and 7 °C at noon. By how many degrees did it rise?', options: ['2 °C', '12 °C', '−12 °C', '35 °C'],
        explanation: '7 − (−5) = 7 + 5 = 12 °C.', hint: 'Change = new value − old value.',
        whyWrong: ['You worked out 7 − 5 without the minus sign.', null, 'The temperature rose, so the change is positive.', 'You multiplied the values.'],
      },
      de: {
        question: 'Morgens waren es −5 °C, mittags 7 °C. Um wie viel Grad stieg die Temperatur?', options: ['2 °C', '12 °C', '−12 °C', '35 °C'],
        explanation: '7 − (−5) = 7 + 5 = 12 °C.', hint: 'Änderung = neuer Wert − alter Wert.',
        whyWrong: ['Sie haben 7 − 5 ohne Minuszeichen gerechnet.', null, 'Die Temperatur stieg, die Änderung ist also positiv.', 'Sie haben die Werte multipliziert.'],
      },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['-15 + 8', -7],
      al: {
        question: 'Sa është −15 + 8?', options: ['−7', '7', '−23', '23'],
        explanation: 'Shenja të ndryshme: 15 − 8 = 7, merret shenja e −15: −7.', hint: 'Cili numër ka vlerë më të madhe?',
        whyWrong: [null, 'Shenja merret nga −15, që ka vlerë më të madhe.', 'Mblodhët vlerat si të kishin të njëjtën shenjë.', 'Mblodhët vlerat dhe harruat shenjën.'],
      },
      en: {
        question: 'What is −15 + 8?', options: ['−7', '7', '−23', '23'],
        explanation: 'Different signs: 15 − 8 = 7, take the sign of −15: −7.', hint: 'Which number has the larger size?',
        whyWrong: [null, 'The sign comes from −15, which has the larger size.', 'You added the sizes as if both had the same sign.', 'You added the sizes and dropped the sign.'],
      },
      de: {
        question: 'Wie viel ist −15 + 8?', options: ['−7', '7', '−23', '23'],
        explanation: 'Verschiedene Vorzeichen: 15 − 8 = 7, Vorzeichen von −15: −7.', hint: 'Welche Zahl hat den größeren Betrag?',
        whyWrong: [null, 'Das Vorzeichen kommt von −15, das den größeren Betrag hat.', 'Sie haben die Beträge addiert, als hätten beide dasselbe Vorzeichen.', 'Sie haben die Beträge addiert und das Vorzeichen weggelassen.'],
      },
    },
  ],
};
