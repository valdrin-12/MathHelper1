// Grade 12 · Theme 12 quiz: Integrals (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g12-integrals-quiz',
  grade: 12,
  theme: 'g12-integrals',
  order: 10,
  difficulty: 'advanced',
  icon: '∫',
  color: '#E76F51',
  i18n: {
    al: { title: 'Integralet', category: 'Klasa 12 · Tema 12', duration: '12 min' },
    en: { title: 'Integrals', category: 'Grade 12 · Theme 12', duration: '12 min' },
    de: { title: 'Integralrechnung', category: 'Klasse 12 · Thema 12', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: 'text',
      al: {
        question: 'Sa është ∫(3x² + 2x) dx?', options: ['x³ + x² + C', '6x + 2', 'x³ + x²', '3x³ + 2x² + C'],
        explanation: '∫3x² dx = x³, ∫2x dx = x², plus konstanten C.', hint: '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C.',
        whyWrong: [null, 'Ky është derivati, jo integrali.', 'Mungon konstantja C.', 'Koeficientët nuk u pjesëtuan me fuqinë e re.'],
      },
      en: {
        question: 'What is ∫(3x² + 2x) dx?', options: ['x³ + x² + C', '6x + 2', 'x³ + x²', '3x³ + 2x² + C'],
        explanation: '∫3x² dx = x³, ∫2x dx = x², plus the constant C.', hint: '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C.',
        whyWrong: [null, 'That is the derivative, not the integral.', 'The constant C is missing.', 'The coefficients were not divided by the new power.'],
      },
      de: {
        question: 'Wie lautet ∫(3x² + 2x) dx?', options: ['x³ + x² + C', '6x + 2', 'x³ + x²', '3x³ + 2x² + C'],
        explanation: '∫3x² dx = x³, ∫2x dx = x², plus die Konstante C.', hint: '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C.',
        whyWrong: [null, 'Das ist die Ableitung, nicht das Integral.', 'Die Konstante C fehlt.', 'Die Koeffizienten wurden nicht durch den neuen Exponenten geteilt.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 9 },
      verify: ['3^3 / 3', 9],
      al: { question: 'Sa është ∫ nga 0 te 3 i x² dx?', explanation: '[x³/3] = 27/3 − 0 = 9.', hint: 'F(3) − F(0).', commonMistakes: [{ value: 27, why: 'U harrua pjesëtimi me 3.' }, { value: 6, why: 'U përdor derivati 2x te x = 3.' }] },
      en: { question: 'What is ∫ from 0 to 3 of x² dx?', explanation: '[x³/3] = 27/3 − 0 = 9.', hint: 'F(3) − F(0).', commonMistakes: [{ value: 27, why: 'The division by 3 was forgotten.' }, { value: 6, why: 'The derivative 2x at x = 3 was used.' }] },
      de: { question: 'Wie groß ist das Integral von 0 bis 3 von x² dx?', explanation: '[x³/3] = 27/3 − 0 = 9.', hint: 'F(3) − F(0).', commonMistakes: [{ value: 27, why: 'Die Division durch 3 fehlt.' }, { value: 6, why: 'Es wurde die Ableitung 2x bei x = 3 genommen.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: '∫eˣ dx = eˣ + C.', explanation: 'E vërtetë: (eˣ)′ = eˣ, pra eˣ është primitivë e vetvetes.', hint: 'Derivoni rezultatin.', whyWrong: '(eˣ + C)′ = eˣ.' },
      en: { question: '∫eˣ dx = eˣ + C.', explanation: 'True: (eˣ)′ = eˣ, so eˣ is its own antiderivative.', hint: 'Differentiate the answer.', whyWrong: '(eˣ + C)′ = eˣ.' },
      de: { question: '∫eˣ dx = eˣ + C.', explanation: 'Richtig: (eˣ)′ = eˣ, also ist eˣ seine eigene Stammfunktion.', hint: 'Das Ergebnis ableiten.', whyWrong: '(eˣ + C)′ = eˣ.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 1,
      verify: 'text',
      al: {
        question: 'Sa është ∫x cos x dx?', options: ['x sin x + C', 'x sin x + cos x + C', 'sin x − x cos x + C', 'x²/2 · sin x + C'],
        explanation: 'Me pjesë: u = x, v = sin x → x sin x − ∫sin x dx = x sin x + cos x + C.', hint: '∫u dv = uv − ∫v du.',
        whyWrong: ['Mungon pjesa − ∫sin x dx = + cos x.', null, 'U zgjodh u dhe v në mënyrë të gabuar.', 'Faktorët nuk integrohen veç e veç.'],
      },
      en: {
        question: 'What is ∫x cos x dx?', options: ['x sin x + C', 'x sin x + cos x + C', 'sin x − x cos x + C', 'x²/2 · sin x + C'],
        explanation: 'By parts: u = x, v = sin x → x sin x − ∫sin x dx = x sin x + cos x + C.', hint: '∫u dv = uv − ∫v du.',
        whyWrong: ['The part − ∫sin x dx = + cos x is missing.', null, 'u and v were chosen the wrong way.', 'Factors cannot be integrated separately.'],
      },
      de: {
        question: 'Wie lautet ∫x cos x dx?', options: ['x sin x + C', 'x sin x + cos x + C', 'sin x − x cos x + C', 'x²/2 · sin x + C'],
        explanation: 'Partiell: u = x, v = sin x → x sin x − ∫sin x dx = x sin x + cos x + C.', hint: '∫u dv = uv − ∫v du.',
        whyWrong: ['Der Teil − ∫sin x dx = + cos x fehlt.', null, 'u und v wurden falsch gewählt.', 'Faktoren darf man nicht einzeln integrieren.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 6 },
      verify: ['(4 + 6) - (1 + 3)', 6],
      al: { question: 'Sa është ∫ nga 1 te 2 i (2x + 3) dx?', explanation: '[x² + 3x] = 10 − 4 = 6.', hint: 'F(2) − F(1).', commonMistakes: [{ value: 10, why: 'U mor vetëm F(2).' }, { value: 4, why: 'U mor vetëm F(1).' }] },
      en: { question: 'What is ∫ from 1 to 2 of (2x + 3) dx?', explanation: '[x² + 3x] = 10 − 4 = 6.', hint: 'F(2) − F(1).', commonMistakes: [{ value: 10, why: 'Only F(2) was taken.' }, { value: 4, why: 'Only F(1) was taken.' }] },
      de: { question: 'Wie groß ist das Integral von 1 bis 2 von (2x + 3) dx?', explanation: '[x² + 3x] = 10 − 4 = 6.', hint: 'F(2) − F(1).', commonMistakes: [{ value: 10, why: 'Es wurde nur F(2) genommen.' }, { value: 4, why: 'Es wurde nur F(1) genommen.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['4 - 8/3', '4/3', 1e-9, '4/3'],
      al: {
        question: 'Sa është syprina midis y = x² dhe y = 2x?', options: ['4', '8/3', '2', '4/3'],
        explanation: '∫₀² (2x − x²) dx = 4 − 8/3 = 4/3.', hint: 'Prerjet x = 0 dhe x = 2; drejtëza sipër.',
        whyWrong: ['Kjo është vetëm ∫₀² 2x dx.', 'Kjo është vetëm ∫₀² x² dx.', 'Renditje ose kufij të gabuar.', null],
      },
      en: {
        question: 'What is the area between y = x² and y = 2x?', options: ['4', '8/3', '2', '4/3'],
        explanation: '∫₀² (2x − x²) dx = 4 − 8/3 = 4/3.', hint: 'Intersections x = 0 and x = 2; the line is on top.',
        whyWrong: ['That is only ∫₀² 2x dx.', 'That is only ∫₀² x² dx.', 'Wrong order or wrong limits.', null],
      },
      de: {
        question: 'Wie groß ist die Fläche zwischen y = x² und y = 2x?', options: ['4', '8/3', '2', '4/3'],
        explanation: '∫₀² (2x − x²) dx = 4 − 8/3 = 4/3.', hint: 'Schnittstellen x = 0 und x = 2; die Gerade liegt oben.',
        whyWrong: ['Das ist nur ∫₀² 2x dx.', 'Das ist nur ∫₀² x² dx.', 'Falsche Reihenfolge oder falsche Grenzen.', null],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['-cos(pi) + cos(0)', 2],
      al: {
        question: 'Sa është ∫ nga 0 te π i sin x dx?', options: ['0', '1', '2', 'π'],
        explanation: '[−cos x] = −cos π + cos 0 = 1 + 1 = 2.', hint: '∫sin x dx = −cos x.',
        whyWrong: ['Gabim në shenjë ose u mor një periodë e plotë.', 'U llogarit vetëm njëra skaj.', null, 'π është gjatësia e intervalit, jo integrali.'],
      },
      en: {
        question: 'What is ∫ from 0 to π of sin x dx?', options: ['0', '1', '2', 'π'],
        explanation: '[−cos x] = −cos π + cos 0 = 1 + 1 = 2.', hint: '∫sin x dx = −cos x.',
        whyWrong: ['A sign slip, or a whole period was used.', 'Only one end was used.', null, 'π is the length of the interval, not the integral.'],
      },
      de: {
        question: 'Wie groß ist das Integral von 0 bis π von sin x dx?', options: ['0', '1', '2', 'π'],
        explanation: '[−cos x] = −cos π + cos 0 = 1 + 1 = 2.', hint: '∫sin x dx = −cos x.',
        whyWrong: ['Vorzeichenfehler oder eine ganze Periode genommen.', 'Es wurde nur eine Grenze verwendet.', null, 'π ist die Intervalllänge, nicht das Integral.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 25.13, tolerance: 0.01 },
      verify: ['pi * 4^2 / 2', 25.13, 0.01],
      al: { question: 'Pjesa nën y = √x, 0 ≤ x ≤ 4, rrotullohet rreth boshtit x. Sa është vëllimi? (2 dhjetore)', explanation: 'π ∫₀⁴ x dx = 8π ≈ 25,13.', hint: 'V = π ∫ f(x)² dx.', commonMistakes: [{ value: 8, why: 'U harrua π.' }, { value: 50.27, why: 'U harrua 1/2 te ∫x dx = x²/2.' }] },
      en: { question: 'The region under y = √x, 0 ≤ x ≤ 4, is rotated about the x-axis. What is the volume? (2 d.p.)', explanation: 'π ∫₀⁴ x dx = 8π ≈ 25.13.', hint: 'V = π ∫ f(x)² dx.', commonMistakes: [{ value: 8, why: 'π was forgotten.' }, { value: 50.27, why: 'The 1/2 in ∫x dx = x²/2 was forgotten.' }] },
      de: { question: 'Die Fläche unter y = √x, 0 ≤ x ≤ 4, rotiert um die x-Achse. Wie groß ist das Volumen? (2 Dezimalstellen)', explanation: 'π ∫₀⁴ x dx = 8π ≈ 25,13.', hint: 'V = π ∫ f(x)² dx.', commonMistakes: [{ value: 8, why: 'π wurde vergessen.' }, { value: 50.27, why: 'Der Faktor 1/2 in ∫x dx = x²/2 fehlt.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: '∫ nga −1 te 1 i x³ dx është syprina midis y = x³ dhe boshtit x në [−1, 1].', explanation: 'E gabuar: integrali është 0, por syprina është 1/4 + 1/4 = 1/2.', hint: 'Pjesa nën bosht numërohet negative te integrali.', whyWrong: 'Syprina = ∫|x³| dx = 1/2.' },
      en: { question: '∫ from −1 to 1 of x³ dx is the area between y = x³ and the x-axis on [−1, 1].', explanation: 'False: the integral is 0, but the area is 1/4 + 1/4 = 1/2.', hint: 'The part below the axis counts as negative in the integral.', whyWrong: 'Area = ∫|x³| dx = 1/2.' },
      de: { question: 'Das Integral von −1 bis 1 von x³ dx ist die Fläche zwischen y = x³ und der x-Achse auf [−1, 1].', explanation: 'Falsch: Das Integral ist 0, die Fläche aber 1/4 + 1/4 = 1/2.', hint: 'Der Teil unter der Achse zählt im Integral negativ.', whyWrong: 'Fläche = ∫|x³| dx = 1/2.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: 'text',
      al: {
        question: 'Sa është ∫2x(x² + 1)³ dx?', options: ['(x² + 1)⁴/4 + C', '(x² + 1)⁴ + C', 'x²(x² + 1)⁴/4 + C', '2x(x² + 1)⁴/4 + C'],
        explanation: 't = x² + 1, dt = 2x dx: ∫t³ dt = t⁴/4 + C.', hint: 'Zëvendësimi t = x² + 1.',
        whyWrong: [null, 'Mungon pjesëtimi me 4.', 'Faktori 2x u integrua veç e veç.', 'Faktori 2x duhet të "konsumohet" nga dt.'],
      },
      en: {
        question: 'What is ∫2x(x² + 1)³ dx?', options: ['(x² + 1)⁴/4 + C', '(x² + 1)⁴ + C', 'x²(x² + 1)⁴/4 + C', '2x(x² + 1)⁴/4 + C'],
        explanation: 't = x² + 1, dt = 2x dx: ∫t³ dt = t⁴/4 + C.', hint: 'Substitute t = x² + 1.',
        whyWrong: [null, 'The division by 4 is missing.', 'The factor 2x was integrated separately.', 'The factor 2x is absorbed by dt.'],
      },
      de: {
        question: 'Wie lautet ∫2x(x² + 1)³ dx?', options: ['(x² + 1)⁴/4 + C', '(x² + 1)⁴ + C', 'x²(x² + 1)⁴/4 + C', '2x(x² + 1)⁴/4 + C'],
        explanation: 't = x² + 1, dt = 2x dx: ∫t³ dt = t⁴/4 + C.', hint: 'Substitution t = x² + 1.',
        whyWrong: [null, 'Die Division durch 4 fehlt.', 'Der Faktor 2x wurde einzeln integriert.', 'Der Faktor 2x steckt bereits in dt.'],
      },
    },
  ],
};
