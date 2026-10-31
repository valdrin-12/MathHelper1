// Grade 8 · Theme 10 quiz: Statistics and probability (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g8-statistics-probability-quiz',
  grade: 8,
  theme: 'g8-statistics-probability',
  order: 10,
  difficulty: 'intermediate',
  icon: '🎲',
  color: '#FB8500',
  i18n: {
    al: { title: 'Statistika dhe probabiliteti', category: 'Klasa 8 · Tema 10', duration: '10 min' },
    en: { title: 'Statistics and probability', category: 'Grade 8 · Theme 10', duration: '10 min' },
    de: { title: 'Statistik und Wahrscheinlichkeit', category: 'Klasse 8 · Thema 10', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['6 / 20', '3/10', 1e-9, '3/10'],
      al: {
        question: 'Nga numrat 1–20 zgjedhim një rastësisht. Sa është P(shumëfish i 3)?', options: ['1/3', '3/10', '6/10', '3/20'],
        explanation: '3, 6, 9, 12, 15, 18: 6 nga 20, P = 6/20 = 3/10.', hint: 'Numëroni shumëfishat e 3 deri në 20.',
        whyWrong: ['1/3 do të vlente vetëm nëse 20 do të plotpjesëtohej me 3.', null, 'Pjesëtuat me 10 në vend të 20.', 'Shumëfishat janë 6, jo 3.'],
      },
      en: {
        question: 'One of the numbers 1–20 is picked at random. What is P(multiple of 3)?', options: ['1/3', '3/10', '6/10', '3/20'],
        explanation: '3, 6, 9, 12, 15, 18: 6 of 20, P = 6/20 = 3/10.', hint: 'Count the multiples of 3 up to 20.',
        whyWrong: ['1/3 would only be right if 20 were divisible by 3.', null, 'You divided by 10 instead of 20.', 'There are 6 multiples, not 3.'],
      },
      de: {
        question: 'Aus den Zahlen 1–20 wird eine zufällig gewählt. Wie groß ist P(Vielfaches von 3)?', options: ['1/3', '3/10', '6/10', '3/20'],
        explanation: '3, 6, 9, 12, 15, 18: 6 von 20, P = 6/20 = 3/10.', hint: 'Zählen Sie die Vielfachen von 3 bis 20.',
        whyWrong: ['1/3 stimmt nur, wenn 20 durch 3 teilbar wäre.', null, 'Sie haben durch 10 statt durch 20 geteilt.', 'Es sind 6 Vielfache, nicht 3.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 162 },
      verify: ['18 / 40 * 360', 162],
      al: { question: '18 nga 40 nxënës vijnë në këmbë. Sa gradë është pjesa e tyre në diagramin rrethor?', explanation: '18/40 · 360° = 162°.', hint: 'Këndi = f : n · 360°.', unit: '°', commonMistakes: [{ value: 45, why: 'Kjo është përqindja; rrethi ka 360°.' }, { value: 18, why: 'Denduria duhet kthyer në pjesë të 360°.' }] },
      en: { question: '18 of 40 students walk to school. How many degrees is their sector in the pie chart?', explanation: '18/40 · 360° = 162°.', hint: 'Angle = f ÷ n · 360°.', unit: '°', commonMistakes: [{ value: 45, why: 'That is the percentage; a circle has 360°.' }, { value: 18, why: 'Turn the frequency into a share of 360°.' }] },
      de: { question: '18 von 40 Schülern kommen zu Fuß. Wie viel Grad hat ihr Ausschnitt im Kreisdiagramm?', explanation: '18/40 · 360° = 162°.', hint: 'Winkel = h : n · 360°.', unit: '°', commonMistakes: [{ value: 45, why: 'Das ist der Prozentsatz; ein Kreis hat 360°.' }, { value: 18, why: 'Die Häufigkeit in einen Anteil von 360° umrechnen.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['1 - 1/6 == 5/6', true],
      al: { question: 'Probabiliteti që në zar të mos dalë 6 është 5/6.', explanation: 'E vërtetë: P(jo 6) = 1 − 1/6 = 5/6.', hint: 'Ngjarja e kundërt.', whyWrong: '5 nga 6 rezultate nuk janë 6.' },
      en: { question: 'The probability that a die does not show 6 is 5/6.', explanation: 'True: P(not 6) = 1 − 1/6 = 5/6.', hint: 'The complementary event.', whyWrong: '5 of the 6 outcomes are not 6.' },
      de: { question: 'Die Wahrscheinlichkeit, keine 6 zu würfeln, ist 5/6.', explanation: 'Richtig: P(keine 6) = 1 − 1/6 = 5/6.', hint: 'Das Gegenereignis.', whyWrong: '5 der 6 Ergebnisse sind keine 6.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 3,
      verify: 'text',
      al: {
        question: 'Të dhënat 12, 25, 31, 18, 27, 9, 33 grupohen në klasa me gjerësi 10 nga 0. Sa vlera ka klasa 20–30?', options: ['1', '3', '0', '2'],
        explanation: 'Në 20–30 janë 25 dhe 27: 2 vlera.', hint: 'Cilat vlera janë nga 20 deri para 30?',
        whyWrong: ['Ka më shumë se një vlerë në këtë klasë.', '31 nuk bën pjesë në 20–30.', '25 dhe 27 janë në këtë klasë.', null],
      },
      en: {
        question: 'The data 12, 25, 31, 18, 27, 9, 33 are grouped in classes of width 10 from 0. How many values are in the class 20–30?', options: ['1', '3', '0', '2'],
        explanation: 'The class 20–30 contains 25 and 27: 2 values.', hint: 'Which values are from 20 up to (not including) 30?',
        whyWrong: ['There is more than one value in this class.', '31 is not in 20–30.', '25 and 27 are in this class.', null],
      },
      de: {
        question: 'Die Daten 12, 25, 31, 18, 27, 9, 33 werden in Klassen der Breite 10 ab 0 eingeteilt. Wie viele Werte liegen in der Klasse 20–30?', options: ['1', '3', '0', '2'],
        explanation: 'In 20–30 liegen 25 und 27: 2 Werte.', hint: 'Welche Werte liegen von 20 bis unter 30?',
        whyWrong: ['Es liegt mehr als ein Wert in dieser Klasse.', '31 gehört nicht zu 20–30.', '25 und 27 liegen in dieser Klasse.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 70.5 },
      verify: ['(55*3 + 65*7 + 75*6 + 85*4) / 20', 70.5],
      visual: {
        type: 'histogram', step: 1,
        bins: [{ from: 50, to: 60, count: 3 }, { from: 60, to: 70, count: 7 }, { from: 70, to: 80, count: 6 }, { from: 80, to: 90, count: 4 }],
        alt: { al: 'Histogram: 50–60 tre, 60–70 shtatë, 70–80 gjashtë, 80–90 katër nxënës.', en: 'Histogram: 50–60 three, 60–70 seven, 70–80 six, 80–90 four students.', de: 'Histogramm: 50–60 drei, 60–70 sieben, 70–80 sechs, 80–90 vier Schüler.' },
      },
      al: { question: 'Vlerësoni mesataren e pikëve të këtyre 20 nxënësve me mesin e klasave.', explanation: '(55 · 3 + 65 · 7 + 75 · 6 + 85 · 4) : 20 = 1 410 : 20 = 70,5.', hint: 'Meset: 55, 65, 75, 85.', commonMistakes: [{ value: 70, why: 'Kjo është mesatarja e meseve pa dendurit.' }] },
      en: { question: 'Estimate the mean score of these 20 students using the class midpoints.', explanation: '(55 · 3 + 65 · 7 + 75 · 6 + 85 · 4) ÷ 20 = 1 410 ÷ 20 = 70.5.', hint: 'Midpoints: 55, 65, 75, 85.', commonMistakes: [{ value: 70, why: 'That is the mean of the midpoints without the frequencies.' }] },
      de: { question: 'Schätzen Sie den Mittelwert der Punkte dieser 20 Schüler mit den Klassenmitten.', explanation: '(55 · 3 + 65 · 7 + 75 · 6 + 85 · 4) : 20 = 1 410 : 20 = 70,5.', hint: 'Klassenmitten: 55, 65, 75, 85.', commonMistakes: [{ value: 70, why: 'Das ist das Mittel der Klassenmitten ohne Häufigkeiten.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['6 / 36', '1/6', 1e-9, '1/6'],
      al: {
        question: 'Hidhen dy zare. Sa është probabiliteti që shuma të jetë 7?', options: ['1/6', '1/11', '7/36', '1/12'],
        explanation: '6 çifte nga 36 japin shumën 7: 6/36 = 1/6.', hint: 'Numëroni çiftet (1, 6), (2, 5), …',
        whyWrong: [null, 'Shumat 2–12 nuk janë njësoj të mundshme.', 'Numri 7 nuk është numri i rezultateve të favorshme.', 'Ka 6 çifte të favorshme, jo 3.'],
      },
      en: {
        question: 'Two dice are thrown. What is the probability that the sum is 7?', options: ['1/6', '1/11', '7/36', '1/12'],
        explanation: '6 pairs out of 36 give a sum of 7: 6/36 = 1/6.', hint: 'Count the pairs (1, 6), (2, 5), …',
        whyWrong: [null, 'The sums 2–12 are not equally likely.', '7 is not the number of favourable outcomes.', 'There are 6 favourable pairs, not 3.'],
      },
      de: {
        question: 'Zwei Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit für die Augensumme 7?', options: ['1/6', '1/11', '7/36', '1/12'],
        explanation: '6 von 36 Paaren ergeben die Summe 7: 6/36 = 1/6.', hint: 'Zählen Sie die Paare (1, 6), (2, 5), …',
        whyWrong: [null, 'Die Summen 2–12 sind nicht gleich wahrscheinlich.', '7 ist nicht die Anzahl der günstigen Ergebnisse.', 'Es gibt 6 günstige Paare, nicht 3.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['2 * 2 == 3', false],
      al: { question: 'Hedhja e dy monedhave ka 3 rezultate të mundshme.', explanation: 'E gabuar: SS, SN, NS, NN, pra 2 · 2 = 4 rezultate.', hint: 'Vizatoni diagramin e pemës.', whyWrong: 'SN dhe NS janë rezultate të ndryshme.' },
      en: { question: 'Tossing two coins has 3 possible outcomes.', explanation: 'False: HH, HT, TH, TT, so 2 · 2 = 4 outcomes.', hint: 'Draw a tree diagram.', whyWrong: 'HT and TH are different outcomes.' },
      de: { question: 'Der Wurf zweier Münzen hat 3 mögliche Ergebnisse.', explanation: 'Falsch: KK, KZ, ZK, ZZ, also 2 · 2 = 4 Ergebnisse.', hint: 'Zeichnen Sie ein Baumdiagramm.', whyWrong: 'KZ und ZK sind verschiedene Ergebnisse.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['10 * 360 / 90', 40],
      al: {
        question: 'Në një diagram rrethor 90° paraqesin 10 nxënës. Sa nxënës janë gjithsej?', options: ['90', '36', '40', '100'],
        explanation: '90° është 1/4 e rrethit: 10 · 4 = 40.', hint: 'Sa herë hyn 90° në 360°?',
        whyWrong: ['90 është këndi, jo numri i nxënësve.', 'Pjesëtuat 360 me 10.', null, 'Rrethi ka 360°, jo 100.'],
      },
      en: {
        question: 'In a pie chart 90° stands for 10 students. How many students are there in total?', options: ['90', '36', '40', '100'],
        explanation: '90° is 1/4 of the circle: 10 · 4 = 40.', hint: 'How many times does 90° go into 360°?',
        whyWrong: ['90 is the angle, not the number of students.', 'You divided 360 by 10.', null, 'A circle has 360°, not 100.'],
      },
      de: {
        question: 'In einem Kreisdiagramm stehen 90° für 10 Schüler. Wie viele Schüler sind es insgesamt?', options: ['90', '36', '40', '100'],
        explanation: '90° ist 1/4 des Kreises: 10 · 4 = 40.', hint: 'Wie oft passt 90° in 360°?',
        whyWrong: ['90 ist der Winkel, nicht die Schülerzahl.', 'Sie haben 360 durch 10 geteilt.', null, 'Ein Kreis hat 360°, nicht 100.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 0.7 },
      verify: ['(5 + 2) / 10', 0.7],
      al: { question: 'Në qese ka 5 topa të kuq, 3 blu dhe 2 të gjelbër. Sa është P(jo blu)? (si numër dhjetor)', explanation: 'Jo blu: 7 nga 10, P = 0,7.', hint: '1 − P(blu).', commonMistakes: [{ value: 0.3, why: 'Kjo është P(blu).' }, { value: 0.5, why: 'Mos numëroni vetëm të kuqtë.' }] },
      en: { question: 'A bag has 5 red, 3 blue and 2 green balls. What is P(not blue)? (as a decimal)', explanation: 'Not blue: 7 out of 10, P = 0.7.', hint: '1 − P(blue).', commonMistakes: [{ value: 0.3, why: 'That is P(blue).' }, { value: 0.5, why: 'Do not count only the red ones.' }] },
      de: { question: 'Ein Beutel enthält 5 rote, 3 blaue und 2 grüne Kugeln. Wie groß ist P(nicht blau)? (als Dezimalzahl)', explanation: 'Nicht blau: 7 von 10, P = 0,7.', hint: '1 − P(blau).', commonMistakes: [{ value: 0.3, why: 'Das ist P(blau).' }, { value: 0.5, why: 'Nicht nur die roten zählen.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 12 },
      verify: ['6 * 2', 12],
      al: { question: 'Hidhen njëkohësisht një zar dhe një monedhë. Sa rezultate të mundshme ka?', explanation: '6 · 2 = 12 rezultate.', hint: 'Shumëzoni numrin e rezultateve.', commonMistakes: [{ value: 8, why: 'Rezultatet shumëzohen, nuk mblidhen.' }] },
      en: { question: 'A die and a coin are thrown together. How many possible outcomes are there?', explanation: '6 · 2 = 12 outcomes.', hint: 'Multiply the numbers of outcomes.', commonMistakes: [{ value: 8, why: 'The numbers of outcomes multiply, they do not add.' }] },
      de: { question: 'Ein Würfel und eine Münze werden gleichzeitig geworfen. Wie viele mögliche Ergebnisse gibt es?', explanation: '6 · 2 = 12 Ergebnisse.', hint: 'Die Anzahlen der Ergebnisse multiplizieren.', commonMistakes: [{ value: 8, why: 'Die Anzahlen werden multipliziert, nicht addiert.' }] },
    },
  ],
};
