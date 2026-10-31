// Grade 8 · Theme 9 quiz: Functions (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g8-function-quiz',
  grade: 8,
  theme: 'g8-function',
  order: 9,
  difficulty: 'intermediate',
  icon: '📈',
  color: '#2A9D8F',
  i18n: {
    al: { title: 'Funksioni', category: 'Klasa 8 · Tema 9', duration: '10 min' },
    en: { title: 'Functions', category: 'Grade 8 · Theme 9', duration: '10 min' },
    de: { title: 'Funktionen', category: 'Klasse 8 · Thema 9', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['4 * 6 / 3', 8],
      al: {
        question: 'y është në përpjesëtim të zhdrejtë me x; për x = 4, y = 6. Sa është y kur x = 3?', options: ['4,5', '8', '5', '18'],
        explanation: 'k = 4 · 6 = 24; y = 24/3 = 8.', hint: 'Te e zhdrejta prodhimi x · y mbetet i njëjtë.',
        whyWrong: ['Kjo është llogaritja e përpjesëtimit të drejtë.', null, 'Nuk zbritet 1 sepse x u zvogëlua me 1.', 'Shumëzuat 6 me 3.'],
      },
      en: {
        question: 'y is inversely proportional to x; when x = 4, y = 6. What is y when x = 3?', options: ['4.5', '8', '5', '18'],
        explanation: 'k = 4 · 6 = 24; y = 24/3 = 8.', hint: 'For inverse proportion the product x · y stays the same.',
        whyWrong: ['That is the direct-proportion calculation.', null, 'You do not subtract 1 because x went down by 1.', 'You multiplied 6 by 3.'],
      },
      de: {
        question: 'y ist antiproportional zu x; für x = 4 ist y = 6. Wie groß ist y bei x = 3?', options: ['4,5', '8', '5', '18'],
        explanation: 'k = 4 · 6 = 24; y = 24/3 = 8.', hint: 'Antiproportional: Das Produkt x · y bleibt gleich.',
        whyWrong: ['Das ist die proportionale Rechnung.', null, 'Man zieht nicht 1 ab, nur weil x um 1 kleiner wurde.', 'Sie haben 6 mit 3 multipliziert.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: -4 },
      verify: ['12 / (-3)', -4],
      al: { question: 'Për y = 12/x, sa është y kur x = −3?', explanation: 'y = 12/(−3) = −4.', hint: 'Pjesëtoni 12 me −3.', commonMistakes: [{ value: 4, why: 'Pjesëtimi me numër negativ jep rezultat negativ.' }, { value: -36, why: 'Shumëzuat në vend që të pjesëtonit.' }] },
      en: { question: 'For y = 12/x, what is y when x = −3?', explanation: 'y = 12/(−3) = −4.', hint: 'Divide 12 by −3.', commonMistakes: [{ value: 4, why: 'Dividing by a negative number gives a negative result.' }, { value: -36, why: 'You multiplied instead of dividing.' }] },
      de: { question: 'Für y = 12/x: Wie groß ist y bei x = −3?', explanation: 'y = 12/(−3) = −4.', hint: '12 durch −3 teilen.', commonMistakes: [{ value: 4, why: 'Division durch eine negative Zahl ergibt ein negatives Ergebnis.' }, { value: -36, why: 'Sie haben multipliziert statt dividiert.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['2 * (-2)^2 == 8', true],
      al: { question: 'Parabola y = 2x² kalon nëpër pikën (−2, 8).', explanation: 'E vërtetë: 2 · (−2)² = 2 · 4 = 8.', hint: 'Zëvendësoni x = −2.', whyWrong: '(−2)² = 4, pra y = 8.' },
      en: { question: 'The parabola y = 2x² passes through the point (−2, 8).', explanation: 'True: 2 · (−2)² = 2 · 4 = 8.', hint: 'Substitute x = −2.', whyWrong: '(−2)² = 4, so y = 8.' },
      de: { question: 'Die Parabel y = 2x² geht durch den Punkt (−2 | 8).', explanation: 'Richtig: 2 · (−2)² = 2 · 4 = 8.', hint: 'Setzen Sie x = −2 ein.', whyWrong: '(−2)² = 4, also y = 8.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 3,
      verify: 'text',
      al: {
        question: 'Për x = 1, 2, 4, cila tabelë e y-ve tregon përpjesëtim të zhdrejtë?', options: ['y = 3, 6, 12', 'y = 5, 6, 8', 'y = 4, 3, 1', 'y = 8, 4, 2'],
        explanation: '1 · 8 = 2 · 4 = 4 · 2 = 8: prodhimi është konstant.', hint: 'Llogaritni x · y për secilën kolonë.',
        whyWrong: ['Herësi y/x = 3 është konstant: përpjesëtim i drejtë.', 'As herësi, as prodhimi nuk janë konstantë.', 'Prodhimet 4, 6, 4 nuk janë të barabarta.', null],
      },
      en: {
        question: 'For x = 1, 2, 4, which list of y-values shows inverse proportion?', options: ['y = 3, 6, 12', 'y = 5, 6, 8', 'y = 4, 3, 1', 'y = 8, 4, 2'],
        explanation: '1 · 8 = 2 · 4 = 4 · 2 = 8: the product is constant.', hint: 'Work out x · y for each column.',
        whyWrong: ['The quotient y/x = 3 is constant: direct proportion.', 'Neither the quotient nor the product is constant.', 'The products 4, 6, 4 are not equal.', null],
      },
      de: {
        question: 'Für x = 1, 2, 4: Welche y-Werte zeigen eine antiproportionale Zuordnung?', options: ['y = 3, 6, 12', 'y = 5, 6, 8', 'y = 4, 3, 1', 'y = 8, 4, 2'],
        explanation: '1 · 8 = 2 · 4 = 4 · 2 = 8: Das Produkt ist konstant.', hint: 'Berechnen Sie x · y für jede Spalte.',
        whyWrong: ['Der Quotient y/x = 3 ist konstant: proportional.', 'Weder Quotient noch Produkt sind konstant.', 'Die Produkte 4, 6, 4 sind nicht gleich.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: -12 },
      verify: ['3 * (-4)', -12],
      al: { question: 'Grafiku i y = k/x kalon nëpër (3, −4). Sa është k?', explanation: 'k = x · y = 3 · (−4) = −12.', hint: 'k = x · y.', commonMistakes: [{ value: -0.75, why: 'k nuk është y/x te përpjesëtimi i zhdrejtë.' }, { value: 12, why: 'Humbët shenjën minus.' }] },
      en: { question: 'The graph of y = k/x passes through (3, −4). What is k?', explanation: 'k = x · y = 3 · (−4) = −12.', hint: 'k = x · y.', commonMistakes: [{ value: -0.75, why: 'For inverse proportion k is not y/x.' }, { value: 12, why: 'You lost the minus sign.' }] },
      de: { question: 'Der Graph von y = k/x geht durch (3 | −4). Wie groß ist k?', explanation: 'k = x · y = 3 · (−4) = −12.', hint: 'k = x · y.', commonMistakes: [{ value: -0.75, why: 'Bei antiproportionalen Zuordnungen ist k nicht y/x.' }, { value: 12, why: 'Das Minuszeichen fehlt.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'Ku e pret drejtëza 2x + 3y = 12 boshtin x?', options: ['(6, 0)', '(0, 4)', '(4, 0)', '(12, 0)'],
        explanation: 'Në boshtin x y = 0: 2x = 12, x = 6.', hint: 'Vendosni y = 0.',
        whyWrong: [null, 'Kjo është prerja me boshtin y.', 'Pjesëtuat me 3 në vend të 2.', 'Harruat koeficientin 2.'],
      },
      en: {
        question: 'Where does the line 2x + 3y = 12 cross the x-axis?', options: ['(6, 0)', '(0, 4)', '(4, 0)', '(12, 0)'],
        explanation: 'On the x-axis y = 0: 2x = 12, x = 6.', hint: 'Put y = 0.',
        whyWrong: [null, 'That is where it crosses the y-axis.', 'You divided by 3 instead of 2.', 'You forgot the coefficient 2.'],
      },
      de: {
        question: 'Wo schneidet die Gerade 2x + 3y = 12 die x-Achse?', options: ['(6 | 0)', '(0 | 4)', '(4 | 0)', '(12 | 0)'],
        explanation: 'Auf der x-Achse ist y = 0: 2x = 12, x = 6.', hint: 'Setzen Sie y = 0.',
        whyWrong: [null, 'Das ist der Schnitt mit der y-Achse.', 'Sie haben durch 3 statt durch 2 geteilt.', 'Der Koeffizient 2 fehlt.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['-(1^2) > 0', false],
      al: { question: 'Parabola y = −x² hapet lart.', explanation: 'E gabuar: a = −1 < 0, prandaj hapet poshtë; O është pika më e lartë.', hint: 'Shikoni shenjën e a.', whyWrong: 'Për çdo x ≠ 0, −x² < 0: grafiku është nën boshtin x.' },
      en: { question: 'The parabola y = −x² opens upwards.', explanation: 'False: a = −1 < 0, so it opens downwards; O is the highest point.', hint: 'Look at the sign of a.', whyWrong: 'For every x ≠ 0, −x² < 0: the graph is below the x-axis.' },
      de: { question: 'Die Parabel y = −x² ist nach oben geöffnet.', explanation: 'Falsch: a = −1 < 0, also nach unten geöffnet; O ist der höchste Punkt.', hint: 'Achten Sie auf das Vorzeichen von a.', whyWrong: 'Für jedes x ≠ 0 ist −x² < 0: Der Graph liegt unter der x-Achse.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      al: {
        question: 'Te një grafik largësi–kohë, çfarë do të thotë një pjesë horizontale?', options: ['Lëvizje shumë e shpejtë', 'Kthim në shtëpi', 'Qëndrim në vend', 'Përshpejtim'],
        explanation: 'Largësia nuk ndryshon me kalimin e kohës: personi qëndron në vend.', hint: 'Çfarë ndodh me largësinë?',
        whyWrong: ['Lëvizja e shpejtë është vijë shumë e pjerrët.', 'Kthimi është pjesë që zbret.', null, 'Përshpejtimi do të ishte vijë gjithnjë e më e pjerrët.'],
      },
      en: {
        question: 'On a distance–time graph, what does a horizontal part mean?', options: ['Moving very fast', 'Going back home', 'Standing still', 'Speeding up'],
        explanation: 'The distance does not change as time passes: the person is standing still.', hint: 'What happens to the distance?',
        whyWrong: ['Moving fast is a very steep line.', 'Going back is a falling part.', null, 'Speeding up would be a line getting steeper and steeper.'],
      },
      de: {
        question: 'Was bedeutet ein waagerechter Abschnitt in einem Weg-Zeit-Diagramm?', options: ['Sehr schnelle Bewegung', 'Rückweg nach Hause', 'Stillstand', 'Beschleunigung'],
        explanation: 'Die Entfernung ändert sich mit der Zeit nicht: Die Person steht still.', hint: 'Was passiert mit der Entfernung?',
        whyWrong: ['Schnelle Bewegung ist eine sehr steile Linie.', 'Der Rückweg ist ein fallender Abschnitt.', null, 'Beschleunigung wäre eine immer steiler werdende Linie.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 2 },
      verify: ['18 / 3^2', 2],
      al: { question: 'Parabola y = ax² kalon nëpër (3, 18). Sa është a?', explanation: 'a = 18/3² = 18/9 = 2.', hint: 'a = y/x².', commonMistakes: [{ value: 6, why: 'Pjesëtuat me x, jo me x².' }] },
      en: { question: 'The parabola y = ax² passes through (3, 18). What is a?', explanation: 'a = 18/3² = 18/9 = 2.', hint: 'a = y/x².', commonMistakes: [{ value: 6, why: 'You divided by x, not by x².' }] },
      de: { question: 'Die Parabel y = ax² geht durch (3 | 18). Wie groß ist a?', explanation: 'a = 18/3² = 18/9 = 2.', hint: 'a = y/x².', commonMistakes: [{ value: 6, why: 'Sie haben durch x statt durch x² geteilt.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 32 },
      verify: ['20 / 5 * 8', 32],
      al: { question: 'y është në përpjesëtim të drejtë me x; për x = 5, y = 20. Sa është y kur x = 8?', explanation: 'k = 20/5 = 4; y = 4 · 8 = 32.', hint: 'Gjeni k = y/x.', commonMistakes: [{ value: 12.5, why: 'Kjo është llogaritja e përpjesëtimit të zhdrejtë.' }, { value: 23, why: 'Nuk shtohet 3; y rritet në të njëjtin raport si x.' }] },
      en: { question: 'y is directly proportional to x; when x = 5, y = 20. What is y when x = 8?', explanation: 'k = 20/5 = 4; y = 4 · 8 = 32.', hint: 'Find k = y/x.', commonMistakes: [{ value: 12.5, why: 'That is the inverse-proportion calculation.' }, { value: 23, why: 'You do not add 3; y grows in the same ratio as x.' }] },
      de: { question: 'y ist proportional zu x; für x = 5 ist y = 20. Wie groß ist y bei x = 8?', explanation: 'k = 20/5 = 4; y = 4 · 8 = 32.', hint: 'Bestimmen Sie k = y/x.', commonMistakes: [{ value: 12.5, why: 'Das ist die antiproportionale Rechnung.' }, { value: 23, why: 'Man addiert nicht 3; y wächst im selben Verhältnis wie x.' }] },
    },
  ],
};
