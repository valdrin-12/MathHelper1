// Grade 12 · Themes 6–7 quiz: Limits of functions and continuity (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g12-limits-continuity-quiz',
  grade: 12,
  theme: 'g12-limits-continuity',
  order: 5,
  difficulty: 'advanced',
  icon: '➡️',
  color: '#E76F51',
  i18n: {
    al: { title: 'Limitet dhe vazhdueshmëria', category: 'Klasa 12 · Tema 6–7', duration: '12 min' },
    en: { title: 'Limits and continuity', category: 'Grade 12 · Themes 6–7', duration: '12 min' },
    de: { title: 'Grenzwerte und Stetigkeit', category: 'Klasse 12 · Themen 6–7', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['2^2 + 1', 5],
      al: {
        question: 'Sa është lim (x² + 1) kur x → 2?', options: ['4', '5', '3', '∞'],
        explanation: 'Zëvendësojmë: 4 + 1 = 5.', hint: 'Polinomi: vendosni x = 2.',
        whyWrong: ['U harrua +1.', null, 'U llogarit 2 + 1, pa katrorin.', 'Polinomi ka vlerë të fundme në x = 2.'],
      },
      en: {
        question: 'What is lim (x² + 1) as x → 2?', options: ['4', '5', '3', '∞'],
        explanation: 'Substitute: 4 + 1 = 5.', hint: 'A polynomial: put x = 2.',
        whyWrong: ['The +1 was forgotten.', null, '2 + 1 was worked out, without squaring.', 'The polynomial has a finite value at x = 2.'],
      },
      de: {
        question: 'Wie groß ist lim (x² + 1) für x → 2?', options: ['4', '5', '3', '∞'],
        explanation: 'Einsetzen: 4 + 1 = 5.', hint: 'Polynom: x = 2 einsetzen.',
        whyWrong: ['Das +1 fehlt.', null, 'Es wurde 2 + 1 ohne Quadrat gerechnet.', 'Das Polynom hat bei x = 2 einen endlichen Wert.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 6 },
      verify: ['3 + 3', 6],
      al: { question: 'Sa është lim (x² − 9)/(x − 3) kur x → 3?', explanation: '(x − 3)(x + 3)/(x − 3) = x + 3 → 6.', hint: 'Faktorizoni numëruesin.', commonMistakes: [{ value: 0, why: '0/0 nuk është 0; duhet thjeshtuar.' }, { value: 3, why: 'U mor vetëm x = 3, pa +3.' }] },
      en: { question: 'What is lim (x² − 9)/(x − 3) as x → 3?', explanation: '(x − 3)(x + 3)/(x − 3) = x + 3 → 6.', hint: 'Factorise the numerator.', commonMistakes: [{ value: 0, why: '0/0 is not 0; simplify first.' }, { value: 3, why: 'Only x = 3 was taken, without the +3.' }] },
      de: { question: 'Wie groß ist lim (x² − 9)/(x − 3) für x → 3?', explanation: '(x − 3)(x + 3)/(x − 3) = x + 3 → 6.', hint: 'Den Zähler faktorisieren.', commonMistakes: [{ value: 0, why: '0/0 ist nicht 0; erst vereinfachen.' }, { value: 3, why: 'Es wurde nur x = 3 genommen, ohne +3.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', view: { xMin: -2, xMax: 6, yMin: -10, yMax: 10 },
    functions: [{ expr: '1/(x - 2)', domain: [-2, 1.9], label: 'y = 1/(x − 2)' }, { expr: '1/(x - 2)', domain: [2.1, 6] }],
    points: [{ at: ['x0', '1/(x0 - 2)'], color: 'secondary' }],
    sliders: [{ name: 'x0', label: 'x', min: -2, max: 6, step: 0.05, value: 2.5 }],
    readouts: [{ text: { al: 'f({x0}) = {1/(x0 - 2)}', en: 'f({x0}) = {1/(x0 - 2)}', de: 'f({x0}) = {1/(x0 - 2)}' } }],
    alt: { al: 'Grafiku me një pikë që lëviz; vlera e funksionit afrohet te asimptota.', en: 'The graph with a moving point; the function value approaches the asymptote.', de: 'Der Graph mit einem beweglichen Punkt; der Funktionswert nähert sich der Asymptote.' },
  },
      al: { question: 'Funksioni y = 1/(x − 2) ka asimptotë vertikale x = 2.', explanation: 'E vërtetë: emëruesi bëhet 0 dhe y → ±∞.', hint: 'Ku bëhet 0 emëruesi?', whyWrong: 'Nga e majta −∞, nga e djathta +∞.' },
      en: { question: 'The function y = 1/(x − 2) has the vertical asymptote x = 2.', explanation: 'True: the denominator becomes 0 and y → ±∞.', hint: 'Where is the denominator 0?', whyWrong: 'From the left −∞, from the right +∞.' },
      de: { question: 'Die Funktion y = 1/(x − 2) hat die senkrechte Asymptote x = 2.', explanation: 'Richtig: Der Nenner wird 0 und y → ±∞.', hint: 'Wo wird der Nenner 0?', whyWrong: 'Von links −∞, von rechts +∞.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['sin(5e-6) / 1e-6', 5, 1e-6],
      al: {
        question: 'Sa është lim sin(5x)/x kur x → 0?', options: ['5', '1', '0', '1/5'],
        explanation: '5 · sin(5x)/(5x) → 5 · 1 = 5.', hint: 'Shumëzoni e pjesëtoni me 5.',
        whyWrong: [null, 'Kjo do të vlente për sin(5x)/(5x).', 'sin(5x) dhe x shkojnë të dyja te 0, por raporti jo.', 'Raporti u kthye.'],
      },
      en: {
        question: 'What is lim sin(5x)/x as x → 0?', options: ['5', '1', '0', '1/5'],
        explanation: '5 · sin(5x)/(5x) → 5 · 1 = 5.', hint: 'Multiply and divide by 5.',
        whyWrong: [null, 'That would be for sin(5x)/(5x).', 'sin(5x) and x both go to 0, but their ratio does not.', 'The ratio was turned over.'],
      },
      de: {
        question: 'Wie groß ist lim sin(5x)/x für x → 0?', options: ['5', '1', '0', '1/5'],
        explanation: '5 · sin(5x)/(5x) → 5 · 1 = 5.', hint: 'Mit 5 erweitern.',
        whyWrong: [null, 'Das gälte für sin(5x)/(5x).', 'sin(5x) und x gehen beide gegen 0, ihr Quotient aber nicht.', 'Der Quotient wurde umgedreht.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 2 },
      verify: ['3*1 - 1', 2],
      al: { question: 'f(x) = x + a për x < 1 dhe f(x) = 3x për x ≥ 1. Për çfarë a është f i vazhdueshëm?', explanation: '1 + a = 3 → a = 2.', hint: 'Barazoni vlerat te x = 1.', commonMistakes: [{ value: 3, why: 'Kjo është f(1), jo a.' }, { value: 4, why: 'U mblodh 3 + 1 në vend që të zbritej.' }] },
      en: { question: 'f(x) = x + a for x < 1 and f(x) = 3x for x ≥ 1. For which a is f continuous?', explanation: '1 + a = 3 → a = 2.', hint: 'Make the values at x = 1 equal.', commonMistakes: [{ value: 3, why: 'That is f(1), not a.' }, { value: 4, why: '3 + 1 was worked out instead of 3 − 1.' }] },
      de: { question: 'f(x) = x + a für x < 1 und f(x) = 3x für x ≥ 1. Für welches a ist f stetig?', explanation: '1 + a = 3 → a = 2.', hint: 'Die Werte bei x = 1 gleichsetzen.', commonMistakes: [{ value: 3, why: 'Das ist f(1), nicht a.' }, { value: 4, why: 'Es wurde 3 + 1 statt 3 − 1 gerechnet.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['3 - 2', 1],
      al: {
        question: 'Sa është lim (x² − 5x + 6)/(x − 3) kur x → 3?', options: ['0', '6', '−1', '1'],
        explanation: '(x − 3)(x − 2)/(x − 3) = x − 2 → 1.', hint: 'Faktorizoni: dy numra me prodhim 6 dhe shumë −5.',
        whyWrong: ['0/0 nuk është 0.', 'U vendos x = 3 vetëm te konstantja 6.', 'Gabim në shenjë te faktori x − 2.', null],
      },
      en: {
        question: 'What is lim (x² − 5x + 6)/(x − 3) as x → 3?', options: ['0', '6', '−1', '1'],
        explanation: '(x − 3)(x − 2)/(x − 3) = x − 2 → 1.', hint: 'Factorise: two numbers with product 6 and sum −5.',
        whyWrong: ['0/0 is not 0.', 'Only the constant 6 was kept.', 'A sign slip in the factor x − 2.', null],
      },
      de: {
        question: 'Wie groß ist lim (x² − 5x + 6)/(x − 3) für x → 3?', options: ['0', '6', '−1', '1'],
        explanation: '(x − 3)(x − 2)/(x − 3) = x − 2 → 1.', hint: 'Faktorisieren: zwei Zahlen mit Produkt 6 und Summe −5.',
        whyWrong: ['0/0 ist nicht 0.', 'Es wurde nur die Konstante 6 genommen.', 'Vorzeichenfehler im Faktor x − 2.', null],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', view: { xMin: -6, xMax: 6, yMin: -6, yMax: 6 },
    functions: [{ expr: '(x + 1)/(x^2 - 9)', domain: [-6, -3.1], label: 'y = (x + 1)/(x² − 9)' }, { expr: '(x + 1)/(x^2 - 9)', domain: [-2.9, 2.9] }, { expr: '(x + 1)/(x^2 - 9)', domain: [3.1, 6] }],
    points: [{ at: ['x0', '(x0 + 1)/(x0^2 - 9)'], color: 'secondary' }],
    sliders: [{ name: 'x0', label: 'x', min: -6, max: 6, step: 0.05, value: 3.2 }],
    readouts: [{ text: { al: 'f({x0}) = {(x0 + 1)/(x0^2 - 9)}', en: 'f({x0}) = {(x0 + 1)/(x0^2 - 9)}', de: 'f({x0}) = {(x0 + 1)/(x0^2 - 9)}' } }],
    alt: { al: 'Grafiku me një pikë që lëviz; vlera e funksionit afrohet te asimptota.', en: 'The graph with a moving point; the function value approaches the asymptote.', de: 'Der Graph mit einem beweglichen Punkt; der Funktionswert nähert sich der Asymptote.' },
  },
      al: {
        question: 'Cilat janë asimptotat vertikale të y = (x + 1)/(x² − 9)?', options: ['x = 9', 'x = −1', 'x = 3 dhe x = −3', 'y = 0'],
        explanation: 'x² − 9 = 0 → x = ±3 (numëruesi aty ≠ 0).', hint: 'Zerot e emëruesit.',
        whyWrong: ['U harrua rrënja katrore.', 'Kjo është zero e numëruesit (prerje me boshtin x).', null, 'Kjo është asimptota horizontale.'],
      },
      en: {
        question: 'What are the vertical asymptotes of y = (x + 1)/(x² − 9)?', options: ['x = 9', 'x = −1', 'x = 3 and x = −3', 'y = 0'],
        explanation: 'x² − 9 = 0 → x = ±3 (the numerator is not 0 there).', hint: 'Zeros of the denominator.',
        whyWrong: ['The square root was forgotten.', 'That is a zero of the numerator (an x-intercept).', null, 'That is the horizontal asymptote.'],
      },
      de: {
        question: 'Welche senkrechten Asymptoten hat y = (x + 1)/(x² − 9)?', options: ['x = 9', 'x = −1', 'x = 3 und x = −3', 'y = 0'],
        explanation: 'x² − 9 = 0 → x = ±3 (der Zähler ist dort ≠ 0).', hint: 'Nullstellen des Nenners.',
        whyWrong: ['Die Wurzel wurde vergessen.', 'Das ist eine Nullstelle des Zählers.', null, 'Das ist die waagerechte Asymptote.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 0.25 },
      verify: ['1 / (sqrt(4) + 2)', 0.25],
      al: { question: 'Sa është lim (√x − 2)/(x − 4) kur x → 4? Shkruajeni si dhjetore.', explanation: '1/(√x + 2) → 1/4 = 0,25.', hint: 'x − 4 = (√x − 2)(√x + 2).', commonMistakes: [{ value: 0, why: '0/0 nuk është 0.' }, { value: 4, why: 'Rezultati u kthye: duhet 1/4.' }] },
      en: { question: 'What is lim (√x − 2)/(x − 4) as x → 4? Give it as a decimal.', explanation: '1/(√x + 2) → 1/4 = 0.25.', hint: 'x − 4 = (√x − 2)(√x + 2).', commonMistakes: [{ value: 0, why: '0/0 is not 0.' }, { value: 4, why: 'The result was turned over: it is 1/4.' }] },
      de: { question: 'Wie groß ist lim (√x − 2)/(x − 4) für x → 4? Als Dezimalzahl.', explanation: '1/(√x + 2) → 1/4 = 0,25.', hint: 'x − 4 = (√x − 2)(√x + 2).', commonMistakes: [{ value: 0, why: '0/0 ist nicht 0.' }, { value: 4, why: 'Das Ergebnis wurde umgedreht: es ist 1/4.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: 'Nëse f(a) nuk është i përkufizuar, atëherë lim f(x) kur x → a nuk ekziston.', explanation: 'E gabuar: (x² − 9)/(x − 3) nuk përkufizohet te 3, por limiti është 6.', hint: 'Limiti nuk varet nga vlera në vetë pikën.', whyWrong: 'Limiti shikon vetëm afër a, jo në a.' },
      en: { question: 'If f(a) is not defined, then lim f(x) as x → a does not exist.', explanation: 'False: (x² − 9)/(x − 3) is not defined at 3, but the limit is 6.', hint: 'The limit does not depend on the value at the point itself.', whyWrong: 'The limit looks only near a, not at a.' },
      de: { question: 'Ist f(a) nicht definiert, dann existiert lim f(x) für x → a nicht.', explanation: 'Falsch: (x² − 9)/(x − 3) ist bei 3 nicht definiert, der Grenzwert ist aber 6.', hint: 'Der Grenzwert hängt nicht vom Wert an der Stelle selbst ab.', whyWrong: 'Der Grenzwert betrachtet nur die Nähe von a, nicht a selbst.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['8 / 4', 2],
      al: {
        question: 'f(x) = kx² për x ≤ 2 dhe f(x) = x + 6 për x > 2. Për çfarë k është f i vazhdueshëm?', options: ['2', '8', '4', '1/2'],
        explanation: 'f(2) = 4k = 2 + 6 = 8 → k = 2.', hint: 'Barazoni vlerat te x = 2.',
        whyWrong: [null, 'Kjo është vlera e përbashkët f(2), jo k.', 'Kjo është x² te x = 2.', 'Raporti u kthye: 4/8.'],
      },
      en: {
        question: 'f(x) = kx² for x ≤ 2 and f(x) = x + 6 for x > 2. For which k is f continuous?', options: ['2', '8', '4', '1/2'],
        explanation: 'f(2) = 4k = 2 + 6 = 8 → k = 2.', hint: 'Make the values at x = 2 equal.',
        whyWrong: [null, 'That is the common value f(2), not k.', 'That is x² at x = 2.', 'The ratio was turned over: 4/8.'],
      },
      de: {
        question: 'f(x) = kx² für x ≤ 2 und f(x) = x + 6 für x > 2. Für welches k ist f stetig?', options: ['2', '8', '4', '1/2'],
        explanation: 'f(2) = 4k = 2 + 6 = 8 → k = 2.', hint: 'Die Werte bei x = 2 gleichsetzen.',
        whyWrong: [null, 'Das ist der gemeinsame Wert f(2), nicht k.', 'Das ist x² bei x = 2.', 'Der Quotient wurde umgedreht: 4/8.'],
      },
    },
  ],
};
