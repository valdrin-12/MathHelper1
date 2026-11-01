// Grade 10 · Theme 10 quiz: Equations and inequalities (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-equations-inequalities-quiz',
  grade: 10,
  theme: 'g10-equations-inequalities',
  order: 10,
  difficulty: 'intermediate',
  icon: '⚖️',
  color: '#3A86FF',
  i18n: {
    al: { title: 'Ekuacionet dhe inekuacionet', category: 'Klasa 10 · Tema 10', duration: '12 min' },
    en: { title: 'Equations and inequalities', category: 'Grade 10 · Theme 10', duration: '12 min' },
    de: { title: 'Gleichungen und Ungleichungen', category: 'Klasse 10 · Thema 10', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['16 / 2', 8],
      al: {
        question: 'Zgjidhni 4x − 7 = 2x + 9.', options: ['x = 1', 'x = 8', 'x = 16', 'x = −8'],
        explanation: '2x = 16 → x = 8.', hint: 'Termat me x në të majtë, numrat në të djathtë.',
        whyWrong: ['−7 u zhvendos pa ndërruar shenjën: 2x = 2.', null, 'Harroi të pjesëtojë me 2.', 'Gabim në shenjë gjatë zhvendosjes.'],
      },
      en: {
        question: 'Solve 4x − 7 = 2x + 9.', options: ['x = 1', 'x = 8', 'x = 16', 'x = −8'],
        explanation: '2x = 16 → x = 8.', hint: 'x terms on the left, numbers on the right.',
        whyWrong: ['The −7 was moved without changing its sign: 2x = 2.', null, 'It was not divided by 2.', 'A sign slip while moving terms.'],
      },
      de: {
        question: 'Lösen Sie 4x − 7 = 2x + 9.', options: ['x = 1', 'x = 8', 'x = 16', 'x = −8'],
        explanation: '2x = 16 → x = 8.', hint: 'x-Terme nach links, Zahlen nach rechts.',
        whyWrong: ['−7 wurde ohne Vorzeichenwechsel verschoben: 2x = 2.', null, 'Es wurde nicht durch 2 geteilt.', 'Vorzeichenfehler beim Umformen.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 7 },
      verify: ['14 / 2', 7],
      al: { question: 'Zgjidhni 5(x − 2) = 3x + 4. Sa është x?', explanation: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.', hint: 'Hapni kllapat së pari.', commonMistakes: [{ value: 3, why: '5 u shumëzua vetëm me x: 5x − 2.' }, { value: -3, why: 'Gabim në shenjë: 2x = −6.' }] },
      en: { question: 'Solve 5(x − 2) = 3x + 4. What is x?', explanation: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.', hint: 'Expand the brackets first.', commonMistakes: [{ value: 3, why: 'The 5 was multiplied by x only: 5x − 2.' }, { value: -3, why: 'A sign slip: 2x = −6.' }] },
      de: { question: 'Lösen Sie 5(x − 2) = 3x + 4. Wie groß ist x?', explanation: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.', hint: 'Zuerst die Klammer auflösen.', commonMistakes: [{ value: 3, why: 'Die 5 wurde nur mit x multipliziert: 5x − 2.' }, { value: -3, why: 'Vorzeichenfehler: 2x = −6.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['(-2)^2 - 3*(-2) - 10 == 0', true],
      al: { question: 'x = −2 është zgjidhje e x² − 3x − 10 = 0.', explanation: 'E vërtetë: 4 + 6 − 10 = 0.', hint: 'Zëvendësoni x = −2.', whyWrong: '(−2)² − 3 · (−2) − 10 = 4 + 6 − 10 = 0.' },
      en: { question: 'x = −2 is a solution of x² − 3x − 10 = 0.', explanation: 'True: 4 + 6 − 10 = 0.', hint: 'Substitute x = −2.', whyWrong: '(−2)² − 3 · (−2) − 10 = 4 + 6 − 10 = 0.' },
      de: { question: 'x = −2 ist eine Lösung von x² − 3x − 10 = 0.', explanation: 'Richtig: 4 + 6 − 10 = 0.', hint: 'Setzen Sie x = −2 ein.', whyWrong: '(−2)² − 3 · (−2) − 10 = 4 + 6 − 10 = 0.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['(3 + sqrt(49)) / 2', 5],
      al: {
        question: 'Cilat janë zgjidhjet e x² − 3x − 10 = 0?', options: ['5 dhe −2', '−5 dhe 2', '10 dhe −1', '3 dhe −10'],
        explanation: '(x − 5)(x + 2) = 0 → x = 5 ose x = −2.', hint: 'Dy numra me prodhim −10 dhe shumë −3.',
        whyWrong: [null, 'Faktorët u lexuan me shenja të gabuara.', '10 · (−1) = −10, por shuma është 9, jo −3.', 'U morën koeficientët, jo zgjidhjet.'],
      },
      en: {
        question: 'What are the solutions of x² − 3x − 10 = 0?', options: ['5 and −2', '−5 and 2', '10 and −1', '3 and −10'],
        explanation: '(x − 5)(x + 2) = 0 → x = 5 or x = −2.', hint: 'Two numbers with product −10 and sum −3.',
        whyWrong: [null, 'The factors were read with the wrong signs.', '10 · (−1) = −10, but the sum is 9, not −3.', 'Those are the coefficients, not the solutions.'],
      },
      de: {
        question: 'Welche Lösungen hat x² − 3x − 10 = 0?', options: ['5 und −2', '−5 und 2', '10 und −1', '3 und −10'],
        explanation: '(x − 5)(x + 2) = 0 → x = 5 oder x = −2.', hint: 'Zwei Zahlen mit Produkt −10 und Summe −3.',
        whyWrong: [null, 'Die Faktoren wurden mit falschen Vorzeichen gelesen.', '10 · (−1) = −10, aber die Summe ist 9, nicht −3.', 'Das sind die Koeffizienten, nicht die Lösungen.'],
      },
    },
    {
      id: 5, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['28 / 7', 4],
      al: {
        question: 'Zgjidhni sistemin 3x + 2y = 16 dhe 2x − y = 6.', options: ['(2, 5)', '(6, −1)', '(5, 4)', '(4, 2)'],
        explanation: 'y = 2x − 6 → 3x + 4x − 12 = 16 → x = 4, y = 2.', hint: 'Shprehni y nga ekuacioni i dytë.',
        whyWrong: ['Plotëson vetëm ekuacionin e parë: 2 · 2 − 5 = −1.', 'Plotëson vetëm ekuacionin e parë: 2 · 6 + 1 = 13.', 'Plotëson vetëm ekuacionin e dytë: 15 + 8 = 23.', null],
      },
      en: {
        question: 'Solve the system 3x + 2y = 16 and 2x − y = 6.', options: ['(2, 5)', '(6, −1)', '(5, 4)', '(4, 2)'],
        explanation: 'y = 2x − 6 → 3x + 4x − 12 = 16 → x = 4, y = 2.', hint: 'Make y the subject of the second equation.',
        whyWrong: ['It only satisfies the first equation: 2 · 2 − 5 = −1.', 'It only satisfies the first equation: 2 · 6 + 1 = 13.', 'It only satisfies the second equation: 15 + 8 = 23.', null],
      },
      de: {
        question: 'Lösen Sie das System 3x + 2y = 16 und 2x − y = 6.', options: ['(2 | 5)', '(6 | −1)', '(5 | 4)', '(4 | 2)'],
        explanation: 'y = 2x − 6 → 3x + 4x − 12 = 16 → x = 4, y = 2.', hint: 'Die zweite Gleichung nach y auflösen.',
        whyWrong: ['Erfüllt nur die erste Gleichung: 2 · 2 − 5 = −1.', 'Erfüllt nur die erste Gleichung: 2 · 6 + 1 = 13.', 'Erfüllt nur die zweite Gleichung: 15 + 8 = 23.', null],
      },
    },
    {
      id: 6, type: 'input', difficulty: 'medium', answer: { value: 3 },
      verify: ['18 / 6', 3],
      al: { question: 'Zgjidhni 2x + 3y = 12 dhe 4x − 3y = 6. Sa është x?', explanation: 'I mbledhim: 6x = 18 → x = 3 (dhe y = 2).', hint: 'Mblidhni ekuacionet: y zhduket.', commonMistakes: [{ value: 2, why: 'Kjo është vlera e y.' }, { value: 18, why: 'Harroi të pjesëtojë me 6.' }] },
      en: { question: 'Solve 2x + 3y = 12 and 4x − 3y = 6. What is x?', explanation: 'Add them: 6x = 18 → x = 3 (and y = 2).', hint: 'Add the equations: y disappears.', commonMistakes: [{ value: 2, why: 'That is the value of y.' }, { value: 18, why: 'It was not divided by 6.' }] },
      de: { question: 'Lösen Sie 2x + 3y = 12 und 4x − 3y = 6. Wie groß ist x?', explanation: 'Addieren: 6x = 18 → x = 3 (und y = 2).', hint: 'Gleichungen addieren: y fällt weg.', commonMistakes: [{ value: 2, why: 'Das ist der Wert von y.' }, { value: 18, why: 'Es wurde nicht durch 6 geteilt.' }] },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['6 / -3', -2],
      al: {
        question: 'Zgjidhni −3x + 5 > 11.', options: ['x > −2', 'x > 2', 'x < −2', 'x < 2'],
        explanation: '−3x > 6 → pjesëtojmë me −3 dhe kthejmë shenjën: x < −2.', hint: 'Pjesëtim me numër negativ.',
        whyWrong: ['Shenja nuk u kthye pas pjesëtimit me −3.', 'Shenja nuk u kthye dhe −2 u bë 2.', null, 'Shenja u kthye, por −2 u bë 2.'],
      },
      en: {
        question: 'Solve −3x + 5 > 11.', options: ['x > −2', 'x > 2', 'x < −2', 'x < 2'],
        explanation: '−3x > 6 → divide by −3 and turn the sign round: x < −2.', hint: 'Dividing by a negative number.',
        whyWrong: ['The sign was not turned round after dividing by −3.', 'The sign was not turned round and −2 became 2.', null, 'The sign was turned round, but −2 became 2.'],
      },
      de: {
        question: 'Lösen Sie −3x + 5 > 11.', options: ['x > −2', 'x > 2', 'x < −2', 'x < 2'],
        explanation: '−3x > 6 → durch −3 teilen und das Zeichen umdrehen: x < −2.', hint: 'Division durch eine negative Zahl.',
        whyWrong: ['Das Zeichen wurde nach der Division durch −3 nicht umgedreht.', 'Das Zeichen wurde nicht umgedreht und aus −2 wurde 2.', null, 'Das Zeichen wurde umgedreht, aber aus −2 wurde 2.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 5 },
      verify: ['2 - (-2) + 1', 5],
      al: { question: 'Sa numra të plotë plotësojnë −4 ≤ 2x < 6?', explanation: '−2 ≤ x < 3 → −2, −1, 0, 1, 2: gjithsej 5.', hint: 'Pjesëtoni të tri pjesët me 2.', commonMistakes: [{ value: 6, why: 'U numërua edhe 3, por < e përjashton.' }, { value: 4, why: 'U la jashtë −2, por ≤ e përfshin.' }] },
      en: { question: 'How many integers satisfy −4 ≤ 2x < 6?', explanation: '−2 ≤ x < 3 → −2, −1, 0, 1, 2: 5 in all.', hint: 'Divide all three parts by 2.', commonMistakes: [{ value: 6, why: '3 was counted, but < leaves it out.' }, { value: 4, why: '−2 was left out, but ≤ includes it.' }] },
      de: { question: 'Wie viele ganze Zahlen erfüllen −4 ≤ 2x < 6?', explanation: '−2 ≤ x < 3 → −2, −1, 0, 1, 2: insgesamt 5.', hint: 'Alle drei Teile durch 2 teilen.', commonMistakes: [{ value: 6, why: 'Die 3 wurde mitgezählt, < schließt sie aber aus.' }, { value: 4, why: '−2 fehlt, ≤ schließt sie aber ein.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: ['2*3^2 + 5*3 - 3 == 0', false],
      al: { question: 'Ekuacioni 2x² + 5x − 3 = 0 ka zgjidhjet x = 3 dhe x = −1/2.', explanation: 'E gabuar: D = 49, x = (−5 ± 7)/4 → x = 1/2 dhe x = −3.', hint: 'Zëvendësoni x = 3: 18 + 15 − 3 = 30.', whyWrong: 'Shenjat u ngatërruan: zgjidhjet janë 1/2 dhe −3.' },
      en: { question: 'The equation 2x² + 5x − 3 = 0 has the solutions x = 3 and x = −1/2.', explanation: 'False: D = 49, x = (−5 ± 7)/4 → x = 1/2 and x = −3.', hint: 'Substitute x = 3: 18 + 15 − 3 = 30.', whyWrong: 'The signs were mixed up: the solutions are 1/2 and −3.' },
      de: { question: 'Die Gleichung 2x² + 5x − 3 = 0 hat die Lösungen x = 3 und x = −1/2.', explanation: 'Falsch: D = 49, x = (−5 ± 7)/4 → x = 1/2 und x = −3.', hint: 'Setzen Sie x = 3 ein: 18 + 15 − 3 = 30.', whyWrong: 'Die Vorzeichen sind vertauscht: Die Lösungen sind 1/2 und −3.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['5 - 3.2', 1.8],
      al: {
        question: '2 fletore dhe 1 laps kushtojnë 5 €; 1 fletore dhe 1 laps kushtojnë 3,20 €. Sa kushton një fletore?', options: ['1,80 €', '1,40 €', '2,50 €', '1,60 €'],
        explanation: 'Zbresim ekuacionet: fletorja = 5 − 3,20 = 1,80 €.', hint: 'Dallimi midis dy blerjeve është një fletore.',
        whyWrong: [null, 'Ky është çmimi i lapsit.', '5 € u nda në 2 pa e llogaritur lapsin.', '3,20 € u nda në 2 sikur fletorja dhe lapsi të kushtonin njësoj.'],
      },
      en: {
        question: '2 notebooks and 1 pencil cost €5; 1 notebook and 1 pencil cost €3.20. How much is one notebook?', options: ['€1.80', '€1.40', '€2.50', '€1.60'],
        explanation: 'Subtract the equations: notebook = 5 − 3.20 = €1.80.', hint: 'The difference between the two purchases is one notebook.',
        whyWrong: [null, 'That is the price of the pencil.', '€5 was split in 2, ignoring the pencil.', '€3.20 was split in 2 as if the notebook and pencil cost the same.'],
      },
      de: {
        question: '2 Hefte und 1 Bleistift kosten 5 €; 1 Heft und 1 Bleistift kosten 3,20 €. Was kostet ein Heft?', options: ['1,80 €', '1,40 €', '2,50 €', '1,60 €'],
        explanation: 'Gleichungen subtrahieren: Heft = 5 − 3,20 = 1,80 €.', hint: 'Der Unterschied der beiden Einkäufe ist ein Heft.',
        whyWrong: [null, 'Das ist der Preis des Bleistifts.', '5 € wurden halbiert, ohne den Bleistift zu beachten.', '3,20 € wurden halbiert, als ob Heft und Bleistift gleich viel kosten.'],
      },
    },
  ],
};
