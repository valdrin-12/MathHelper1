// Grade 11 · Theme 8 quiz: Combined probability (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g11-combined-probability-quiz',
  grade: 11,
  theme: 'g11-combined-probability',
  order: 8,
  difficulty: 'advanced',
  icon: '🎲',
  color: '#FB8500',
  i18n: {
    al: { title: 'Probabiliteti i ngjarjeve të kombinuara', category: 'Klasa 11 · Tema 8', duration: '12 min' },
    en: { title: 'Combined probability', category: 'Grade 11 · Theme 8', duration: '12 min' },
    de: { title: 'Zusammengesetzte Wahrscheinlichkeit', category: 'Klasse 11 · Thema 8', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['30 - (18 + 12 - 5)', 5],
      al: {
        question: 'Në një klasë me 30 nxënës, 18 luajnë futboll, 12 basketboll dhe 5 të dyja. Sa nuk luajnë asnjë?', options: ['0', '10', '5', '25'],
        explanation: '18 + 12 − 5 = 25 luajnë diçka; 30 − 25 = 5.', hint: 'Prerja numërohet një herë.',
        whyWrong: ['18 + 12 = 30 numëron 5 nxënësit e prerjes dy herë.', 'Prerja u zbrit dy herë.', null, 'Këta janë ata që luajnë të paktën njërën.'],
      },
      en: {
        question: 'In a class of 30 students, 18 play football, 12 basketball and 5 both. How many play neither?', options: ['0', '10', '5', '25'],
        explanation: '18 + 12 − 5 = 25 play something; 30 − 25 = 5.', hint: 'Count the overlap once.',
        whyWrong: ['18 + 12 = 30 counts the 5 in the overlap twice.', 'The overlap was taken off twice.', null, 'Those are the ones who play at least one.'],
      },
      de: {
        question: 'In einer Klasse mit 30 Lernenden spielen 18 Fußball, 12 Basketball und 5 beides. Wie viele spielen keines?', options: ['0', '10', '5', '25'],
        explanation: '18 + 12 − 5 = 25 spielen etwas; 30 − 25 = 5.', hint: 'Die Schnittmenge einmal zählen.',
        whyWrong: ['18 + 12 = 30 zählt die 5 der Schnittmenge doppelt.', 'Die Schnittmenge wurde zweimal abgezogen.', null, 'Das sind die, die mindestens eins spielen.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 6 },
      verify: ['6', 6],
      al: { question: 'Hidhen dy zare. Sa nga 36 rezultatet japin shumën 7?', explanation: '(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1): 6.', hint: 'Numëroni çiftet e renditura.', commonMistakes: [{ value: 3, why: '(3, 4) dhe (4, 3) janë rezultate të ndryshme.' }, { value: 7, why: 'Shuma 7 nuk do të thotë 7 rezultate.' }] },
      en: { question: 'Two dice are thrown. How many of the 36 outcomes give a total of 7?', explanation: '(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1): 6.', hint: 'Count ordered pairs.', commonMistakes: [{ value: 3, why: '(3, 4) and (4, 3) are different outcomes.' }, { value: 7, why: 'A total of 7 does not mean 7 outcomes.' }] },
      de: { question: 'Zwei Würfel werden geworfen. Wie viele der 36 Ergebnisse haben die Augensumme 7?', explanation: '(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1): 6.', hint: 'Geordnete Paare zählen.', commonMistakes: [{ value: 3, why: '(3, 4) und (4, 3) sind verschiedene Ergebnisse.' }, { value: 7, why: 'Augensumme 7 heißt nicht 7 Ergebnisse.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['6 * 6 == 36', true],
      al: { question: 'Kur hidhen dy zare ka 36 rezultate njësoj të mundshme.', explanation: 'E vërtetë: 6 · 6 = 36.', hint: 'Tabela 6 × 6.', whyWrong: '6 rezultate për zarin e parë herë 6 për të dytin.' },
      en: { question: 'When two dice are thrown there are 36 equally likely outcomes.', explanation: 'True: 6 · 6 = 36.', hint: 'The 6 × 6 table.', whyWrong: '6 outcomes for the first die times 6 for the second.' },
      de: { question: 'Beim Wurf zweier Würfel gibt es 36 gleich wahrscheinliche Ergebnisse.', explanation: 'Richtig: 6 · 6 = 36.', hint: 'Die 6 × 6-Tabelle.', whyWrong: '6 Ergebnisse beim ersten mal 6 beim zweiten Würfel.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['4/10 * 3/9', '2/15', 1e-9, '2/15'],
      al: {
        question: 'Nxjerrim dy topa pa kthim nga qesja me 4 të kuq dhe 6 blu. Sa është P(dy të kuq)?', options: ['2/15', '4/25', '7/19', '1/3'],
        explanation: '4/10 · 3/9 = 12/90 = 2/15.', hint: 'Pas nxjerrjes së parë mbeten 3 të kuq nga 9.',
        whyWrong: [null, 'Kjo është me kthim: 0,4 · 0,4.', 'Numëruesit dhe emëruesit u mblodhën.', 'Ky është vetëm probabiliteti i nxjerrjes së dytë.'],
      },
      en: {
        question: 'Two balls are drawn without replacement from a bag with 4 red and 6 blue. What is P(two red)?', options: ['2/15', '4/25', '7/19', '1/3'],
        explanation: '4/10 · 3/9 = 12/90 = 2/15.', hint: 'After the first draw 3 red out of 9 are left.',
        whyWrong: [null, 'That is with replacement: 0.4 · 0.4.', 'The numerators and denominators were added.', 'That is only the second draw.'],
      },
      de: {
        question: 'Aus einem Beutel mit 4 roten und 6 blauen Kugeln werden zwei ohne Zurücklegen gezogen. Wie groß ist P(zwei rote)?', options: ['2/15', '4/25', '7/19', '1/3'],
        explanation: '4/10 · 3/9 = 12/90 = 2/15.', hint: 'Nach dem ersten Zug sind noch 3 rote von 9 übrig.',
        whyWrong: [null, 'Das ist mit Zurücklegen: 0,4 · 0,4.', 'Zähler und Nenner wurden addiert.', 'Das ist nur der zweite Zug.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 27 },
      verify: ['20 + 15 - 8', 27],
      al: { question: 'n(A) = 20, n(B) = 15, n(A ∩ B) = 8. Sa është n(A ∪ B)?', explanation: '20 + 15 − 8 = 27.', hint: 'Prerja numërohet një herë.', commonMistakes: [{ value: 35, why: 'Prerja u numërua dy herë.' }, { value: 19, why: 'Prerja u zbrit dy herë.' }] },
      en: { question: 'n(A) = 20, n(B) = 15, n(A ∩ B) = 8. What is n(A ∪ B)?', explanation: '20 + 15 − 8 = 27.', hint: 'Count the overlap once.', commonMistakes: [{ value: 35, why: 'The overlap was counted twice.' }, { value: 19, why: 'The overlap was taken off twice.' }] },
      de: { question: 'n(A) = 20, n(B) = 15, n(A ∩ B) = 8. Wie groß ist n(A ∪ B)?', explanation: '20 + 15 − 8 = 27.', hint: 'Die Schnittmenge einmal zählen.', commonMistakes: [{ value: 35, why: 'Die Schnittmenge wurde doppelt gezählt.' }, { value: 19, why: 'Die Schnittmenge wurde zweimal abgezogen.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['10 / 20', '1/2', 1e-9, '1/2'],
      al: {
        question: 'Nga 40 nxënës: 20 vajza, nga të cilat 10 me syze; gjithsej 16 me syze. Sa është P(me syze | vajzë)?', options: ['10/40', '10/16', '16/40', '1/2'],
        explanation: '10 nga 20 vajza: 10/20 = 1/2.', hint: 'Pjesëtoni me grupin e kushtit: vajzat.',
        whyWrong: ['U pjesëtua me të gjithë nxënësit, jo me vajzat.', 'Kjo është P(vajzë | me syze).', 'Kjo është P(me syze), pa kushtin.', null],
      },
      en: {
        question: 'Of 40 students: 20 girls, 10 of them with glasses; 16 with glasses in total. What is P(glasses | girl)?', options: ['10/40', '10/16', '16/40', '1/2'],
        explanation: '10 out of 20 girls: 10/20 = 1/2.', hint: 'Divide by the group in the condition: the girls.',
        whyWrong: ['It was divided by all students, not by the girls.', 'That is P(girl | glasses).', 'That is P(glasses), without the condition.', null],
      },
      de: {
        question: 'Von 40 Lernenden sind 20 Mädchen, davon 10 mit Brille; insgesamt tragen 16 eine Brille. Wie groß ist P(Brille | Mädchen)?', options: ['10/40', '10/16', '16/40', '1/2'],
        explanation: '10 von 20 Mädchen: 10/20 = 1/2.', hint: 'Durch die Gruppe der Bedingung teilen: die Mädchen.',
        whyWrong: ['Es wurde durch alle Lernenden geteilt, nicht durch die Mädchen.', 'Das ist P(Mädchen | Brille).', 'Das ist P(Brille) ohne Bedingung.', null],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['0.5 + 0.4 - 0.2', 0.7],
      al: {
        question: 'P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,2. Sa është P(A ∪ B)?', options: ['0,9', '0,7', '0,2', '1,1'],
        explanation: '0,5 + 0,4 − 0,2 = 0,7.', hint: 'Zbritni prerjen një herë.',
        whyWrong: ['U harrua të zbritet prerja.', null, 'Kjo është P(A ∩ B).', 'Prerja u shtua; probabiliteti nuk e kalon 1.'],
      },
      en: {
        question: 'P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. What is P(A ∪ B)?', options: ['0.9', '0.7', '0.2', '1.1'],
        explanation: '0.5 + 0.4 − 0.2 = 0.7.', hint: 'Take the overlap off once.',
        whyWrong: ['The overlap was not taken off.', null, 'That is P(A ∩ B).', 'The overlap was added; a probability cannot exceed 1.'],
      },
      de: {
        question: 'P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,2. Wie groß ist P(A ∪ B)?', options: ['0,9', '0,7', '0,2', '1,1'],
        explanation: '0,5 + 0,4 − 0,2 = 0,7.', hint: 'Die Schnittmenge einmal abziehen.',
        whyWrong: ['Die Schnittmenge wurde nicht abgezogen.', null, 'Das ist P(A ∩ B).', 'Die Schnittmenge wurde addiert; eine Wahrscheinlichkeit ist höchstens 1.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 0.533, tolerance: 0.001 },
      verify: ['4/10 * 6/9 + 6/10 * 4/9', 0.533, 0.001],
      al: { question: 'Pa kthim nga 4 të kuq dhe 6 blu: sa është P(një të kuq dhe një blu)? (3 dhjetore)', explanation: '4/10 · 6/9 + 6/10 · 4/9 = 48/90 ≈ 0,533.', hint: 'Dy rrugë: K,B dhe B,K.', commonMistakes: [{ value: 0.267, why: 'U llogarit vetëm njëra rrugë.' }, { value: 0.48, why: 'U llogarit me kthim: 2 · 0,4 · 0,6.' }] },
      en: { question: 'Without replacement from 4 red and 6 blue: what is P(one red and one blue)? (3 d.p.)', explanation: '4/10 · 6/9 + 6/10 · 4/9 = 48/90 ≈ 0.533.', hint: 'Two paths: R,B and B,R.', commonMistakes: [{ value: 0.267, why: 'Only one path was counted.' }, { value: 0.48, why: 'It was worked out with replacement: 2 · 0.4 · 0.6.' }] },
      de: { question: 'Ohne Zurücklegen aus 4 roten und 6 blauen: Wie groß ist P(eine rote und eine blaue)? (3 Dezimalstellen)', explanation: '4/10 · 6/9 + 6/10 · 4/9 = 48/90 ≈ 0,533.', hint: 'Zwei Pfade: R,B und B,R.', commonMistakes: [{ value: 0.267, why: 'Nur ein Pfad wurde gezählt.' }, { value: 0.48, why: 'Es wurde mit Zurücklegen gerechnet: 2 · 0,4 · 0,6.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: 'Gjithmonë vlen P(A | B) = P(B | A).', explanation: 'E gabuar: p.sh. P(me syze | vajzë) = 1/2, por P(vajzë | me syze) = 5/8.', hint: 'Me cilin grup pjesëtohet?', whyWrong: 'Emëruesi është grupi i kushtit, që ndryshon.' },
      en: { question: 'P(A | B) = P(B | A) always.', explanation: 'False: e.g. P(glasses | girl) = 1/2, but P(girl | glasses) = 5/8.', hint: 'Which group do you divide by?', whyWrong: 'The denominator is the group in the condition, which changes.' },
      de: { question: 'Es gilt immer P(A | B) = P(B | A).', explanation: 'Falsch: z. B. P(Brille | Mädchen) = 1/2, aber P(Mädchen | Brille) = 5/8.', hint: 'Durch welche Gruppe wird geteilt?', whyWrong: 'Der Nenner ist die Gruppe der Bedingung, und die ändert sich.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['1 - 6/10 * 5/9', '2/3', 1e-9, '2/3'],
      al: {
        question: 'Pa kthim nga 4 të kuq dhe 6 blu: sa është P(të paktën një të kuq)?', options: ['2/3', '1/3', '2/15', '13/15'],
        explanation: '1 − P(dy blu) = 1 − 6/10 · 5/9 = 1 − 1/3 = 2/3.', hint: 'Ngjarja e kundërt: asnjë i kuq.',
        whyWrong: [null, 'Kjo është P(dy blu).', 'Kjo është P(dy të kuq).', 'Kjo është 1 − P(dy të kuq), jo 1 − P(asnjë të kuq).'],
      },
      en: {
        question: 'Without replacement from 4 red and 6 blue: what is P(at least one red)?', options: ['2/3', '1/3', '2/15', '13/15'],
        explanation: '1 − P(two blue) = 1 − 6/10 · 5/9 = 1 − 1/3 = 2/3.', hint: 'The complement: no red.',
        whyWrong: [null, 'That is P(two blue).', 'That is P(two red).', 'That is 1 − P(two red), not 1 − P(no red).'],
      },
      de: {
        question: 'Ohne Zurücklegen aus 4 roten und 6 blauen: Wie groß ist P(mindestens eine rote)?', options: ['2/3', '1/3', '2/15', '13/15'],
        explanation: '1 − P(zwei blaue) = 1 − 6/10 · 5/9 = 1 − 1/3 = 2/3.', hint: 'Gegenereignis: keine rote.',
        whyWrong: [null, 'Das ist P(zwei blaue).', 'Das ist P(zwei rote).', 'Das ist 1 − P(zwei rote), nicht 1 − P(keine rote).'],
      },
    },
  ],
};
