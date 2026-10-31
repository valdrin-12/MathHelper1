// Grade 9 · Theme 10 quiz: Data and probability (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g9-data-probability-quiz',
  grade: 9,
  theme: 'g9-data-probability',
  order: 10,
  difficulty: 'intermediate',
  icon: '🎲',
  color: '#FB8500',
  i18n: {
    al: { title: 'Të dhënat dhe probabiliteti', category: 'Klasa 9 · Tema 10', duration: '10 min' },
    en: { title: 'Data and probability', category: 'Grade 9 · Theme 10', duration: '10 min' },
    de: { title: 'Daten und Wahrscheinlichkeit', category: 'Klasse 9 · Thema 10', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: 'text',
      al: {
        question: 'Cila është hapësira e rezultateve kur hedhim dy monedha (S = stemë, N = numër)?', options: ['{SS, NN}', '{SS, SN, NN}', '{SS, SN, NS, NN}', '{S, N}'],
        explanation: '2 · 2 = 4 rezultate: SS, SN, NS, NN.', hint: 'SN dhe NS janë të ndryshme.',
        whyWrong: ['Mungojnë SN dhe NS.', 'Mungon NS.', null, 'Kjo është për një monedhë.'],
      },
      en: {
        question: 'What is the sample space when two coins are tossed (H = heads, T = tails)?', options: ['{HH, TT}', '{HH, HT, TT}', '{HH, HT, TH, TT}', '{H, T}'],
        explanation: '2 · 2 = 4 outcomes: HH, HT, TH, TT.', hint: 'HT and TH are different.',
        whyWrong: ['HT and TH are missing.', 'TH is missing.', null, 'That is for one coin.'],
      },
      de: {
        question: 'Wie lautet der Ergebnisraum beim Wurf zweier Münzen (K = Kopf, Z = Zahl)?', options: ['{KK, ZZ}', '{KK, KZ, ZZ}', '{KK, KZ, ZK, ZZ}', '{K, Z}'],
        explanation: '2 · 2 = 4 Ergebnisse: KK, KZ, ZK, ZZ.', hint: 'KZ und ZK sind verschieden.',
        whyWrong: ['KZ und ZK fehlen.', 'ZK fehlt.', null, 'Das gilt für eine Münze.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 8 },
      verify: ['(3+5+5+6+8+9+20) / 7', 8],
      al: { question: 'Sa është mesatarja e 3, 5, 5, 6, 8, 9, 20?', explanation: '56 : 7 = 8.', hint: 'Shuma : numri i vlerave.', commonMistakes: [{ value: 6, why: 'Kjo është mediana.' }, { value: 5, why: 'Kjo është moda.' }] },
      en: { question: 'What is the mean of 3, 5, 5, 6, 8, 9, 20?', explanation: '56 ÷ 7 = 8.', hint: 'Sum ÷ number of values.', commonMistakes: [{ value: 6, why: 'That is the median.' }, { value: 5, why: 'That is the mode.' }] },
      de: { question: 'Wie groß ist der Mittelwert von 3, 5, 5, 6, 8, 9, 20?', explanation: '56 : 7 = 8.', hint: 'Summe : Anzahl.', commonMistakes: [{ value: 6, why: 'Das ist der Median.' }, { value: 5, why: 'Das ist der Modalwert.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['6/36 == 1/6', true],
      al: { question: 'Kur hedhim dy zare, P(shuma = 7) = 1/6.', explanation: 'E vërtetë: 6 nga 36 rezultate japin 7.', hint: '(1, 6), (2, 5), … (6, 1).', whyWrong: '6/36 = 1/6.' },
      en: { question: 'When two dice are thrown, P(sum = 7) = 1/6.', explanation: 'True: 6 of the 36 outcomes give 7.', hint: '(1, 6), (2, 5), … (6, 1).', whyWrong: '6/36 = 1/6.' },
      de: { question: 'Beim Wurf zweier Würfel ist P(Summe = 7) = 1/6.', explanation: 'Richtig: 6 der 36 Ergebnisse ergeben 7.', hint: '(1, 6), (2, 5), … (6, 1).', whyWrong: '6/36 = 1/6.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['6', 6],
      al: {
        question: 'Sa është mediana e 3, 5, 5, 6, 8, 9, 20?', options: ['5', '6', '8', '17'],
        explanation: 'Vlera e katërt nga shtatë të renditura: 6.', hint: 'Vlera në mes pas renditjes.',
        whyWrong: ['Kjo është moda.', null, 'Kjo është mesatarja.', 'Ky është diapazoni.'],
      },
      en: {
        question: 'What is the median of 3, 5, 5, 6, 8, 9, 20?', options: ['5', '6', '8', '17'],
        explanation: 'The fourth of the seven ordered values: 6.', hint: 'The middle value after ordering.',
        whyWrong: ['That is the mode.', null, 'That is the mean.', 'That is the range.'],
      },
      de: {
        question: 'Wie groß ist der Median von 3, 5, 5, 6, 8, 9, 20?', options: ['5', '6', '8', '17'],
        explanation: 'Der vierte von sieben geordneten Werten: 6.', hint: 'Der mittlere Wert nach dem Ordnen.',
        whyWrong: ['Das ist der Modalwert.', null, 'Das ist der Mittelwert.', 'Das ist die Spannweite.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 8 },
      verify: ['2^3', 8],
      al: { question: 'Sa rezultate të mundshme ka hedhja e tri monedhave?', explanation: '2 · 2 · 2 = 8.', hint: 'Rregulla e shumëzimit.', commonMistakes: [{ value: 6, why: 'Rezultatet shumëzohen, nuk mblidhen.' }, { value: 4, why: 'Kjo është për dy monedha.' }] },
      en: { question: 'How many possible outcomes does tossing three coins have?', explanation: '2 · 2 · 2 = 8.', hint: 'Multiplication rule.', commonMistakes: [{ value: 6, why: 'The outcomes multiply, they do not add.' }, { value: 4, why: 'That is for two coins.' }] },
      de: { question: 'Wie viele mögliche Ergebnisse hat der Wurf dreier Münzen?', explanation: '2 · 2 · 2 = 8.', hint: 'Produktregel.', commonMistakes: [{ value: 6, why: 'Die Anzahlen werden multipliziert, nicht addiert.' }, { value: 4, why: 'Das gilt für zwei Münzen.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['1 - 0.35', 0.65],
      al: {
        question: 'P(A) = 0,35. Sa është probabiliteti i ngjarjes së kundërt A′?', options: ['0,65', '0,35', '1,35', '0,5'],
        explanation: 'P(A′) = 1 − 0,35 = 0,65.', hint: 'P(A) + P(A′) = 1.',
        whyWrong: [null, 'Kjo është P(A).', 'Probabiliteti nuk e kalon 1.', 'Ngjarjet nuk janë domosdoshmërisht njësoj të mundshme.'],
      },
      en: {
        question: 'P(A) = 0.35. What is the probability of the complementary event A′?', options: ['0.65', '0.35', '1.35', '0.5'],
        explanation: 'P(A′) = 1 − 0.35 = 0.65.', hint: 'P(A) + P(A′) = 1.',
        whyWrong: [null, 'That is P(A).', 'A probability cannot exceed 1.', 'The events need not be equally likely.'],
      },
      de: {
        question: 'P(A) = 0,35. Wie groß ist die Wahrscheinlichkeit des Gegenereignisses A′?', options: ['0,65', '0,35', '1,35', '0,5'],
        explanation: 'P(A′) = 1 − 0,35 = 0,65.', hint: 'P(A) + P(A′) = 1.',
        whyWrong: [null, 'Das ist P(A).', 'Eine Wahrscheinlichkeit ist höchstens 1.', 'Die Ereignisse müssen nicht gleich wahrscheinlich sein.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: 'text',
      al: { question: 'Mesatarja nuk ndikohet nga vlerat ekstreme.', explanation: 'E gabuar: te 3, 5, 5, 6, 8, 9, 20 vlera 20 e ngre mesataren nga 6 në 8; mediana mbetet 6.', hint: 'Llogaritni mesataren me dhe pa vlerën 20.', whyWrong: 'Mediana është ajo që ndikohet pak nga vlerat ekstreme.' },
      en: { question: 'The mean is not affected by extreme values.', explanation: 'False: in 3, 5, 5, 6, 8, 9, 20 the value 20 raises the mean from 6 to 8; the median stays 6.', hint: 'Work out the mean with and without 20.', whyWrong: 'It is the median that is hardly affected by extreme values.' },
      de: { question: 'Der Mittelwert wird von Ausreißern nicht beeinflusst.', explanation: 'Falsch: Bei 3, 5, 5, 6, 8, 9, 20 hebt die 20 den Mittelwert von 6 auf 8; der Median bleibt 6.', hint: 'Mittelwert mit und ohne 20 berechnen.', whyWrong: 'Der Median ist es, der von Ausreißern kaum beeinflusst wird.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['0.5 + 0.4 - 0.2', 0.7],
      al: {
        question: 'P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,2. Sa është P(A ∪ B)?', options: ['0,9', '0,2', '0,1', '0,7'],
        explanation: '0,5 + 0,4 − 0,2 = 0,7.', hint: 'Zbritni pjesën e përbashkët.',
        whyWrong: ['Prerja u numërua dy herë.', 'Kjo është P(A ∩ B).', 'Kjo është 0,5 − 0,4.', null],
      },
      en: {
        question: 'P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. What is P(A ∪ B)?', options: ['0.9', '0.2', '0.1', '0.7'],
        explanation: '0.5 + 0.4 − 0.2 = 0.7.', hint: 'Subtract the overlap.',
        whyWrong: ['The overlap was counted twice.', 'That is P(A ∩ B).', 'That is 0.5 − 0.4.', null],
      },
      de: {
        question: 'P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,2. Wie groß ist P(A ∪ B)?', options: ['0,9', '0,2', '0,1', '0,7'],
        explanation: '0,5 + 0,4 − 0,2 = 0,7.', hint: 'Die Überschneidung abziehen.',
        whyWrong: ['Die Schnittmenge wurde doppelt gezählt.', 'Das ist P(A ∩ B).', 'Das ist 0,5 − 0,4.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 12 },
      verify: ['4 * 10 - (8 + 9 + 11)', 12],
      al: { question: 'Vlerat 8, 9, 11 dhe x kanë mesatare 10. Sa është x?', explanation: 'Shuma duhet 40; x = 40 − 28 = 12.', hint: 'Mesatarja · numri = shuma.', commonMistakes: [{ value: 10, why: 'x nuk është vetë mesatarja.' }, { value: 2, why: '30 − 28 = 2 merr vetëm tri vlera.' }] },
      en: { question: 'The values 8, 9, 11 and x have mean 10. What is x?', explanation: 'The sum must be 40; x = 40 − 28 = 12.', hint: 'Mean · number = sum.', commonMistakes: [{ value: 10, why: 'x is not the mean itself.' }, { value: 2, why: '30 − 28 = 2 counts only three values.' }] },
      de: { question: 'Die Werte 8, 9, 11 und x haben den Mittelwert 10. Wie groß ist x?', explanation: 'Die Summe muss 40 sein; x = 40 − 28 = 12.', hint: 'Mittelwert · Anzahl = Summe.', commonMistakes: [{ value: 10, why: 'x ist nicht selbst der Mittelwert.' }, { value: 2, why: '30 − 28 = 2 zählt nur drei Werte.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 50 },
      verify: ['300 / 6', 50],
      al: { question: 'Sa gjashtëshe presim afërsisht në 300 hedhje të një zari?', explanation: '300 · 1/6 = 50.', hint: 'Numri i pritshëm = n · P.', commonMistakes: [{ value: 6, why: '6 është numri në zar.' }, { value: 1800, why: 'Shumëzuat me 6 në vend që të pjesëtonit.' }] },
      en: { question: 'About how many sixes do we expect in 300 throws of a die?', explanation: '300 · 1/6 = 50.', hint: 'Expected number = n · P.', commonMistakes: [{ value: 6, why: '6 is the number on the die.' }, { value: 1800, why: 'You multiplied by 6 instead of dividing.' }] },
      de: { question: 'Wie viele Sechsen erwartet man ungefähr bei 300 Würfen?', explanation: '300 · 1/6 = 50.', hint: 'Erwartete Anzahl = n · P.', commonMistakes: [{ value: 6, why: '6 ist die Augenzahl.' }, { value: 1800, why: 'Sie haben mit 6 multipliziert statt geteilt.' }] },
    },
  ],
};
