// Grade 9 · Theme 8 quiz: Similarity and enlargement (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g9-similarity-quiz',
  grade: 9,
  theme: 'g9-similarity',
  order: 8,
  difficulty: 'intermediate',
  icon: '◺',
  color: '#E9C46A',
  i18n: {
    al: { title: 'Ngjashmëria dhe homotetia', category: 'Klasa 9 · Tema 8', duration: '10 min' },
    en: { title: 'Similarity and enlargement', category: 'Grade 9 · Theme 8', duration: '10 min' },
    de: { title: 'Ähnlichkeit und Streckung', category: 'Klasse 9 · Thema 8', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['4 * 3', 12],
      al: {
        question: 'Trekëndëshat e ngjashëm kanë koeficient 3. Brinja e të voglit është 4 cm. Sa është brinja përkatëse e të madhit?', options: ['7 cm', '12 cm', '36 cm', '4/3 cm'],
        explanation: '4 · 3 = 12 cm.', hint: 'Brinjët shumëzohen me k.',
        whyWrong: ['Brinjët shumëzohen, nuk mblidhen me 3.', null, 'Me k² shumëzohen sipërfaqet, jo brinjët.', 'Pjesëtuat në vend që të shumëzonit.'],
      },
      en: {
        question: 'Similar triangles have scale factor 3. A side of the small one is 4 cm. How long is the matching side of the large one?', options: ['7 cm', '12 cm', '36 cm', '4/3 cm'],
        explanation: '4 · 3 = 12 cm.', hint: 'Sides are multiplied by k.',
        whyWrong: ['Sides are multiplied, not increased by 3.', null, 'Areas are multiplied by k², not sides.', 'You divided instead of multiplying.'],
      },
      de: {
        question: 'Ähnliche Dreiecke haben den Faktor 3. Eine Seite des kleinen ist 4 cm lang. Wie lang ist die entsprechende Seite des großen?', options: ['7 cm', '12 cm', '36 cm', '4/3 cm'],
        explanation: '4 · 3 = 12 cm.', hint: 'Seiten werden mit k multipliziert.',
        whyWrong: ['Seiten werden multipliziert, nicht um 3 vergrößert.', null, 'Mit k² werden Flächen multipliziert, nicht Seiten.', 'Sie haben geteilt statt multipliziert.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 10 },
      verify: ['2 * 15 / 3', 10],
      al: { question: 'Shtylla 2 m hedh hije 3 m. Në të njëjtën kohë një pemë hedh hije 15 m. Sa metra e lartë është pema?', explanation: 'h : 15 = 2 : 3 → h = 10 m.', hint: 'Trekëndësha të ngjashëm.', unit: 'm', commonMistakes: [{ value: 22.5, why: 'Raporti u kthye: h/15 = 2/3, jo 3/2.' }, { value: 14, why: 'Nuk shtohet; raportet duhet të jenë të barabarta.' }] },
      en: { question: 'A 2 m pole casts a 3 m shadow. At the same time a tree casts a 15 m shadow. How many metres tall is the tree?', explanation: 'h : 15 = 2 : 3 → h = 10 m.', hint: 'Similar triangles.', unit: 'm', commonMistakes: [{ value: 22.5, why: 'The ratio is upside down: h/15 = 2/3, not 3/2.' }, { value: 14, why: 'Do not add; the ratios must be equal.' }] },
      de: { question: 'Ein 2 m hoher Pfahl wirft 3 m Schatten. Gleichzeitig wirft ein Baum 15 m Schatten. Wie viele Meter hoch ist der Baum?', explanation: 'h : 15 = 2 : 3 → h = 10 m.', hint: 'Ähnliche Dreiecke.', unit: 'm', commonMistakes: [{ value: 22.5, why: 'Das Verhältnis ist umgedreht: h/15 = 2/3, nicht 3/2.' }, { value: 14, why: 'Nicht addieren; die Verhältnisse müssen gleich sein.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['6/3 == 8/4 and 8/4 == 10/5', true],
      al: { question: 'Trekëndëshat me brinjë 3, 4, 5 dhe 6, 8, 10 janë të ngjashëm.', explanation: 'E vërtetë: 6/3 = 8/4 = 10/5 = 2 (BBB).', hint: 'Krahasoni raportet e brinjëve.', whyWrong: 'Të tri raportet janë 2.' },
      en: { question: 'The triangles with sides 3, 4, 5 and 6, 8, 10 are similar.', explanation: 'True: 6/3 = 8/4 = 10/5 = 2 (SSS).', hint: 'Compare the ratios of the sides.', whyWrong: 'All three ratios are 2.' },
      de: { question: 'Die Dreiecke mit den Seiten 3, 4, 5 und 6, 8, 10 sind ähnlich.', explanation: 'Richtig: 6/3 = 8/4 = 10/5 = 2 (SSS).', hint: 'Vergleichen Sie die Seitenverhältnisse.', whyWrong: 'Alle drei Verhältnisse sind 2.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['3^2', 9],
      al: {
        question: 'Dy figura të ngjashme kanë koeficient 3. Sa herë më e madhe është sipërfaqja e të madhes?', options: ['3', '6', '9', '27'],
        explanation: 'Sipërfaqet janë në raportin k² = 9.', hint: 'Sipërfaqja ka dy përmasa.',
        whyWrong: ['Ky është raporti i brinjëve.', '6 = 2 · 3, jo 3².', null, '27 = 3³ vlen për vëllimet.'],
      },
      en: {
        question: 'Two similar shapes have scale factor 3. How many times larger is the area of the large one?', options: ['3', '6', '9', '27'],
        explanation: 'Areas are in the ratio k² = 9.', hint: 'Area has two dimensions.',
        whyWrong: ['That is the ratio of the sides.', '6 = 2 · 3, not 3².', null, '27 = 3³ is for volumes.'],
      },
      de: {
        question: 'Zwei ähnliche Figuren haben den Faktor 3. Wievielmal so groß ist die Fläche der großen?', options: ['3', '6', '9', '27'],
        explanation: 'Flächen stehen im Verhältnis k² = 9.', hint: 'Eine Fläche hat zwei Dimensionen.',
        whyWrong: ['Das ist das Seitenverhältnis.', '6 = 2 · 3, nicht 3².', null, '27 = 3³ gilt für Volumen.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 7.5 },
      verify: ['6 * 5 / 4', 7.5],
      al: { question: 'Në △ABC, DE ∥ BC, AD = 4, DB = 6, AE = 5. Sa është EC?', explanation: 'AD/DB = AE/EC → 4/6 = 5/EC → EC = 7,5.', hint: 'Teorema e Talesit.', commonMistakes: [{ value: 3.33, why: 'Raporti u kthye.' }] },
      en: { question: 'In △ABC, DE ∥ BC, AD = 4, DB = 6, AE = 5. What is EC?', explanation: 'AD/DB = AE/EC → 4/6 = 5/EC → EC = 7.5.', hint: 'The intercept theorem.', commonMistakes: [{ value: 3.33, why: 'The ratio is upside down.' }] },
      de: { question: 'Im △ABC ist DE ∥ BC, AD = 4, DB = 6, AE = 5. Wie lang ist EC?', explanation: 'AD/DB = AE/EC → 4/6 = 5/EC → EC = 7,5.', hint: 'Strahlensatz.', commonMistakes: [{ value: 3.33, why: 'Das Verhältnis ist umgedreht.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'Ku shkon pika (3, −1) me homoteti me qendër O dhe k = −2?', options: ['(−6, 2)', '(6, −2)', '(1, −3)', '(−6, −2)'],
        explanation: '(−2 · 3, −2 · (−1)) = (−6, 2).', hint: 'Shumëzoni të dyja koordinatat me −2.',
        whyWrong: [null, 'Kjo është k = 2; shenja minus mungon.', 'U shtua −2 në vend që të shumëzohej.', 'Shenja e koordinatës së dytë: −2 · (−1) = 2.'],
      },
      en: {
        question: 'Where does the point (3, −1) go under an enlargement with centre O and k = −2?', options: ['(−6, 2)', '(6, −2)', '(1, −3)', '(−6, −2)'],
        explanation: '(−2 · 3, −2 · (−1)) = (−6, 2).', hint: 'Multiply both coordinates by −2.',
        whyWrong: [null, 'That is k = 2; the minus is missing.', '−2 was added instead of multiplied.', 'Sign of the second coordinate: −2 · (−1) = 2.'],
      },
      de: {
        question: 'Wohin wird der Punkt (3 | −1) bei der Streckung mit Zentrum O und k = −2 abgebildet?', options: ['(−6 | 2)', '(6 | −2)', '(1 | −3)', '(−6 | −2)'],
        explanation: '(−2 · 3 | −2 · (−1)) = (−6 | 2).', hint: 'Beide Koordinaten mit −2 multiplizieren.',
        whyWrong: [null, 'Das wäre k = 2; das Minus fehlt.', '−2 wurde addiert statt multipliziert.', 'Vorzeichen der zweiten Koordinate: −2 · (−1) = 2.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['2^2 == 2', false],
      al: { question: 'Nëse një figurë zmadhohet me k = 2, sipërfaqja e saj dyfishohet.', explanation: 'E gabuar: sipërfaqja shumëzohet me k² = 4.', hint: 'Mendoni një katror 1 × 1 → 2 × 2.', whyWrong: '1 cm² bëhet 4 cm².' },
      en: { question: 'If a shape is enlarged with k = 2, its area doubles.', explanation: 'False: the area is multiplied by k² = 4.', hint: 'Think of a 1 × 1 square → 2 × 2.', whyWrong: '1 cm² becomes 4 cm².' },
      de: { question: 'Wird eine Figur mit k = 2 vergrößert, verdoppelt sich ihre Fläche.', explanation: 'Falsch: Die Fläche wird mit k² = 4 multipliziert.', hint: 'Denken Sie an ein Quadrat 1 × 1 → 2 × 2.', whyWrong: 'Aus 1 cm² werden 4 cm².' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['12 * 3 / 9', 4],
      al: {
        question: 'Në △ABC, DE ∥ BC, AD = 3, AB = 9, BC = 12. Sa është DE?', options: ['6', '36', '8', '4'],
        explanation: 'DE/BC = AD/AB → DE = 12 · 3/9 = 4.', hint: 'Përdorni të gjithë brinjën AB.',
        whyWrong: ['Përdorët AD/DB = 3/6.', 'Shumëzuat në vend që të pjesëtonit.', 'Kjo do të ishte me 2/3 në vend të 1/3.', null],
      },
      en: {
        question: 'In △ABC, DE ∥ BC, AD = 3, AB = 9, BC = 12. What is DE?', options: ['6', '36', '8', '4'],
        explanation: 'DE/BC = AD/AB → DE = 12 · 3/9 = 4.', hint: 'Use the whole side AB.',
        whyWrong: ['You used AD/DB = 3/6.', 'You multiplied instead of dividing.', 'That would use 2/3 instead of 1/3.', null],
      },
      de: {
        question: 'Im △ABC ist DE ∥ BC, AD = 3, AB = 9, BC = 12. Wie lang ist DE?', options: ['6', '36', '8', '4'],
        explanation: 'DE/BC = AD/AB → DE = 12 · 3/9 = 4.', hint: 'Die ganze Seite AB verwenden.',
        whyWrong: ['Sie haben AD/DB = 3/6 verwendet.', 'Sie haben multipliziert statt geteilt.', 'Das ergäbe sich mit 2/3 statt 1/3.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 600 },
      verify: ['6 * 1000^2 / 10000', 600],
      al: { question: 'Në planin me shkallë 1 : 1 000 një fushë ka 6 cm². Sa m² është fusha në të vërtetë?', explanation: '6 · 1 000² cm² = 6 000 000 cm² = 600 m².', hint: 'Sipërfaqja shumëzohet me k² = 1 000².', unit: 'm²', commonMistakes: [{ value: 0.6, why: 'Shumëzuat me 1 000, jo me 1 000².' }, { value: 6000, why: '1 m² = 10 000 cm².' }] },
      en: { question: 'On a plan at scale 1 : 1 000 a field covers 6 cm². How many m² is the field really?', explanation: '6 · 1 000² cm² = 6 000 000 cm² = 600 m².', hint: 'The area is multiplied by k² = 1 000².', unit: 'm²', commonMistakes: [{ value: 0.6, why: 'You multiplied by 1 000, not 1 000².' }, { value: 6000, why: '1 m² = 10 000 cm².' }] },
      de: { question: 'Auf einem Plan im Maßstab 1 : 1 000 hat ein Feld 6 cm². Wie viele m² hat das Feld wirklich?', explanation: '6 · 1 000² cm² = 6 000 000 cm² = 600 m².', hint: 'Die Fläche wird mit k² = 1 000² multipliziert.', unit: 'm²', commonMistakes: [{ value: 0.6, why: 'Sie haben mit 1 000 statt mit 1 000² multipliziert.' }, { value: 6000, why: '1 m² = 10 000 cm².' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 1.5 },
      verify: ['sqrt(36 / 16)', 1.5],
      al: { question: 'Dy figura të ngjashme kanë sipërfaqe 16 cm² dhe 36 cm². Sa është koeficienti i ngjashmërisë?', explanation: 'k² = 36/16 = 2,25 → k = 1,5.', hint: 'Sipërfaqet janë në raportin k².', commonMistakes: [{ value: 2.25, why: 'Ky është k²; merrni rrënjën.' }, { value: 20, why: 'Ndryshimi i sipërfaqeve nuk është koeficient.' }] },
      en: { question: 'Two similar shapes have areas 16 cm² and 36 cm². What is the scale factor?', explanation: 'k² = 36/16 = 2.25 → k = 1.5.', hint: 'Areas are in the ratio k².', commonMistakes: [{ value: 2.25, why: 'That is k²; take the root.' }, { value: 20, why: 'The difference of the areas is not a factor.' }] },
      de: { question: 'Zwei ähnliche Figuren haben 16 cm² und 36 cm². Wie groß ist der Ähnlichkeitsfaktor?', explanation: 'k² = 36/16 = 2,25 → k = 1,5.', hint: 'Flächen stehen im Verhältnis k².', commonMistakes: [{ value: 2.25, why: 'Das ist k²; die Wurzel ziehen.' }, { value: 20, why: 'Die Differenz der Flächen ist kein Faktor.' }] },
    },
  ],
};
