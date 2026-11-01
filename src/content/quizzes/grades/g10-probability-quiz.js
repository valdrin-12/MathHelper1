// Grade 10 · Theme 8 quiz: Probability (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-probability-quiz',
  grade: 10,
  theme: 'g10-probability',
  order: 8,
  difficulty: 'intermediate',
  icon: '🎲',
  color: '#FB8500',
  i18n: {
    al: { title: 'Probabiliteti', category: 'Klasa 10 · Tema 8', duration: '10 min' },
    en: { title: 'Probability', category: 'Grade 10 · Theme 8', duration: '10 min' },
    de: { title: 'Wahrscheinlichkeit', category: 'Klasse 10 · Thema 8', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['1 - 0.35', 0.65],
      al: {
        question: 'P(shi) = 0,35. Sa është P(jo shi)?', options: ['0,35', '0,65', '1,35', '0,5'],
        explanation: '1 − 0,35 = 0,65.', hint: 'Ngjarja e kundërt.',
        whyWrong: ['Kjo është P(shi).', null, 'Probabiliteti nuk e kalon 1.', 'Ngjarjet nuk janë domosdoshmërisht njësoj të mundshme.'],
      },
      en: {
        question: 'P(rain) = 0.35. What is P(no rain)?', options: ['0.35', '0.65', '1.35', '0.5'],
        explanation: '1 − 0.35 = 0.65.', hint: 'The complement.',
        whyWrong: ['That is P(rain).', null, 'A probability cannot exceed 1.', 'The events need not be equally likely.'],
      },
      de: {
        question: 'P(Regen) = 0,35. Wie groß ist P(kein Regen)?', options: ['0,35', '0,65', '1,35', '0,5'],
        explanation: '1 − 0,35 = 0,65.', hint: 'Das Gegenereignis.',
        whyWrong: ['Das ist P(Regen).', null, 'Eine Wahrscheinlichkeit ist höchstens 1.', 'Die Ereignisse müssen nicht gleich wahrscheinlich sein.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 0.54 },
      verify: ['108 / 200', 0.54],
      al: { question: 'Monedha hidhet 200 herë dhe del stemë 108 herë. Sa është denduria relative e stemës?', explanation: '108/200 = 0,54.', hint: 'Herë : prova.', commonMistakes: [{ value: 0.5, why: 'Ky është probabiliteti teorik, jo denduria relative.' }, { value: 1.85, why: 'Pjesëtimi u kthye.' }] },
      en: { question: 'A coin is tossed 200 times and lands heads 108 times. What is the relative frequency of heads?', explanation: '108/200 = 0.54.', hint: 'Times ÷ trials.', commonMistakes: [{ value: 0.5, why: 'That is the theoretical probability, not the relative frequency.' }, { value: 1.85, why: 'The division is upside down.' }] },
      de: { question: 'Eine Münze wird 200-mal geworfen und zeigt 108-mal Kopf. Wie groß ist die relative Häufigkeit von Kopf?', explanation: '108/200 = 0,54.', hint: 'Anzahl : Versuche.', commonMistakes: [{ value: 0.5, why: 'Das ist die Wahrscheinlichkeit, nicht die relative Häufigkeit.' }, { value: 1.85, why: 'Die Division ist umgedreht.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['0.2 + 0.5 == 0.7', true],
      al: { question: 'Nëse A dhe B janë të papajtueshme me P(A) = 0,2 dhe P(B) = 0,5, atëherë P(A ose B) = 0,7.', explanation: 'E vërtetë: për ngjarje të papajtueshme probabilitetet mblidhen.', hint: 'Rregulla e mbledhjes.', whyWrong: '0,2 + 0,5 = 0,7.' },
      en: { question: 'If A and B are mutually exclusive with P(A) = 0.2 and P(B) = 0.5, then P(A or B) = 0.7.', explanation: 'True: for mutually exclusive events the probabilities add.', hint: 'The addition rule.', whyWrong: '0.2 + 0.5 = 0.7.' },
      de: { question: 'Sind A und B unvereinbar mit P(A) = 0,2 und P(B) = 0,5, dann ist P(A oder B) = 0,7.', explanation: 'Richtig: Bei unvereinbaren Ereignissen addieren sich die Wahrscheinlichkeiten.', hint: 'Summenregel.', whyWrong: '0,2 + 0,5 = 0,7.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['500 * 0.5', 250],
      al: {
        question: 'Sa stema presim afërsisht në 500 hedhje të monedhës?', options: ['200', '500', '250', '108'],
        explanation: '500 · 0,5 = 250.', hint: 'Denduria e pritshme = n · P.',
        whyWrong: ['Kjo do të ishte me P = 0,4.', 'Kjo do të ishte me P = 1.', null, '108 ishte rezultati i një eksperimenti me 200 hedhje.'],
      },
      en: {
        question: 'About how many heads do we expect in 500 coin tosses?', options: ['200', '500', '250', '108'],
        explanation: '500 · 0.5 = 250.', hint: 'Expected frequency = n · P.',
        whyWrong: ['That would be with P = 0.4.', 'That would be with P = 1.', null, '108 was the result of a 200-toss experiment.'],
      },
      de: {
        question: 'Wie oft erwartet man ungefähr Kopf bei 500 Münzwürfen?', options: ['200', '500', '250', '108'],
        explanation: '500 · 0,5 = 250.', hint: 'Erwartete Häufigkeit = n · P.',
        whyWrong: ['Das wäre bei P = 0,4.', 'Das wäre bei P = 1.', null, '108 war das Ergebnis eines Versuchs mit 200 Würfen.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 0.25 },
      verify: ['1 - (0.1 + 0.25 + 0.4)', 0.25],
      al: { question: 'Katër rezultate të papajtueshme kanë probabilitete 0,1; 0,25; 0,4 dhe x. Sa është x?', explanation: 'x = 1 − 0,75 = 0,25.', hint: 'Shuma e të gjithave është 1.', commonMistakes: [{ value: 0.75, why: 'Kjo është shuma e të njohurave.' }] },
      en: { question: 'Four mutually exclusive outcomes have probabilities 0.1; 0.25; 0.4 and x. What is x?', explanation: 'x = 1 − 0.75 = 0.25.', hint: 'They all add up to 1.', commonMistakes: [{ value: 0.75, why: 'That is the sum of the known ones.' }] },
      de: { question: 'Vier unvereinbare Ergebnisse haben die Wahrscheinlichkeiten 0,1; 0,25; 0,4 und x. Wie groß ist x?', explanation: 'x = 1 − 0,75 = 0,25.', hint: 'Alle zusammen ergeben 1.', commonMistakes: [{ value: 0.75, why: 'Das ist die Summe der bekannten.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['0.5 * 0.5', '1/4', 1e-9, '1/4'],
      al: {
        question: 'Sa është probabiliteti i dy stemave në dy hedhje të monedhës?', options: ['1/4', '1/2', '1/3', '3/4'],
        explanation: 'Të pavarura: 1/2 · 1/2 = 1/4.', hint: 'Rregulla e shumëzimit.',
        whyWrong: [null, 'Kjo është për një hedhje.', 'Rezultatet janë 4, jo 3 (SS, SN, NS, NN).', 'Kjo është P(të paktën një stemë).'],
      },
      en: {
        question: 'What is the probability of two heads in two coin tosses?', options: ['1/4', '1/2', '1/3', '3/4'],
        explanation: 'Independent: 1/2 · 1/2 = 1/4.', hint: 'The multiplication rule.',
        whyWrong: [null, 'That is for one toss.', 'There are 4 outcomes, not 3 (HH, HT, TH, TT).', 'That is P(at least one head).'],
      },
      de: {
        question: 'Wie groß ist die Wahrscheinlichkeit für zweimal Kopf bei zwei Münzwürfen?', options: ['1/4', '1/2', '1/3', '3/4'],
        explanation: 'Unabhängig: 1/2 · 1/2 = 1/4.', hint: 'Produktregel.',
        whyWrong: [null, 'Das gilt für einen Wurf.', 'Es gibt 4 Ergebnisse, nicht 3 (KK, KZ, ZK, ZZ).', 'Das ist P(mindestens einmal Kopf).'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: 'text',
      al: { question: 'Pasi monedha ra stemë 5 herë rresht, numri është më i mundshëm në hedhjen tjetër.', explanation: 'E gabuar: hedhjet janë të pavarura; P(numër) mbetet 1/2.', hint: 'A "kujtohet" monedha?', whyWrong: 'Çdo hedhje është e re: 1/2.' },
      en: { question: 'After a coin has landed heads 5 times in a row, tails is more likely on the next toss.', explanation: 'False: the tosses are independent; P(tails) stays 1/2.', hint: 'Does the coin "remember"?', whyWrong: 'Every toss is new: 1/2.' },
      de: { question: 'Nachdem eine Münze 5-mal hintereinander Kopf zeigte, ist beim nächsten Wurf Zahl wahrscheinlicher.', explanation: 'Falsch: Die Würfe sind unabhängig; P(Zahl) bleibt 1/2.', hint: 'Hat die Münze ein „Gedächtnis“?', whyWrong: 'Jeder Wurf ist neu: 1/2.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['1/6 * 1/2', '1/12', 1e-9, '1/12'],
      al: {
        question: 'Hidhen një zar dhe një monedhë. Sa është P(6 dhe stemë)?', options: ['1/8', '7/12', '1/6', '1/12'],
        explanation: '1/6 · 1/2 = 1/12.', hint: 'Ngjarje të pavarura.',
        whyWrong: ['Emëruesit nuk mblidhen.', 'Kjo është 1/6 + 1/2 − … ; për "dhe" shumëzohet.', 'Kjo është vetëm P(6).', null],
      },
      en: {
        question: 'A die and a coin are thrown. What is P(6 and heads)?', options: ['1/8', '7/12', '1/6', '1/12'],
        explanation: '1/6 · 1/2 = 1/12.', hint: 'Independent events.',
        whyWrong: ['Denominators are not added.', 'For "and", multiply, do not add.', 'That is only P(6).', null],
      },
      de: {
        question: 'Ein Würfel und eine Münze werden geworfen. Wie groß ist P(6 und Kopf)?', options: ['1/8', '7/12', '1/6', '1/12'],
        explanation: '1/6 · 1/2 = 1/12.', hint: 'Unabhängige Ereignisse.',
        whyWrong: ['Nenner werden nicht addiert.', 'Bei „und“ multiplizieren, nicht addieren.', 'Das ist nur P(6).', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 60 },
      verify: ['200 * 0.3', 60],
      al: { question: 'Një rrotë ka P(e kuqe) = 0,3. Sa herë pritet e kuqja në 200 rrotullime?', explanation: '200 · 0,3 = 60.', hint: 'n · P.', commonMistakes: [{ value: 0.3, why: 'Kjo është probabiliteti, jo numri i pritshëm.' }] },
      en: { question: 'A spinner has P(red) = 0.3. How many reds are expected in 200 spins?', explanation: '200 · 0.3 = 60.', hint: 'n · P.', commonMistakes: [{ value: 0.3, why: 'That is the probability, not the expected number.' }] },
      de: { question: 'Ein Glücksrad hat P(rot) = 0,3. Wie oft erwartet man Rot bei 200 Drehungen?', explanation: '200 · 0,3 = 60.', hint: 'n · P.', commonMistakes: [{ value: 0.3, why: 'Das ist die Wahrscheinlichkeit, nicht die erwartete Anzahl.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 20 },
      verify: ['120 / 6', 20],
      al: { question: 'Zari hidhet 120 herë. Sa herë pritet të dalë 6?', explanation: '120 · 1/6 = 20.', hint: 'P(6) = 1/6.', commonMistakes: [{ value: 6, why: '6 është numri në zar.' }, { value: 720, why: 'Shumëzuat me 6 në vend që të pjesëtonit.' }] },
      en: { question: 'A die is thrown 120 times. How many sixes are expected?', explanation: '120 · 1/6 = 20.', hint: 'P(6) = 1/6.', commonMistakes: [{ value: 6, why: '6 is the number on the die.' }, { value: 720, why: 'You multiplied by 6 instead of dividing.' }] },
      de: { question: 'Ein Würfel wird 120-mal geworfen. Wie viele Sechsen erwartet man?', explanation: '120 · 1/6 = 20.', hint: 'P(6) = 1/6.', commonMistakes: [{ value: 6, why: '6 ist die Augenzahl.' }, { value: 720, why: 'Sie haben mit 6 multipliziert statt geteilt.' }] },
    },
  ],
};
