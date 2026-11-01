// Grade 12 · Theme 1 quiz: The numeric function (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g12-numeric-function-quiz',
  grade: 12,
  theme: 'g12-numeric-function',
  order: 1,
  difficulty: 'advanced',
  icon: '𝑓',
  color: '#3A86FF',
  i18n: {
    al: { title: 'Funksioni numerik', category: 'Klasa 12 · Tema 1', duration: '12 min' },
    en: { title: 'Functions', category: 'Grade 12 · Theme 1', duration: '12 min' },
    de: { title: 'Reelle Funktionen', category: 'Klasse 12 · Thema 1', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: 'text',
      al: {
        question: 'Cila është bashkësia e përkufizimit të f(x) = √(x − 2)?', options: ['x ≥ 2', 'x > 2', 'x ≤ 2', 'x ≠ 2'],
        explanation: 'x − 2 ≥ 0 → x ≥ 2.', hint: 'Nën rrënjë: ≥ 0.',
        whyWrong: [null, '√0 = 0 ekziston, pra x = 2 përfshihet.', 'Për x < 2 nën rrënjë del numër negativ.', 'Ky kufizim vlen për emëruesin, jo për rrënjën.'],
      },
      en: {
        question: 'What is the domain of f(x) = √(x − 2)?', options: ['x ≥ 2', 'x > 2', 'x ≤ 2', 'x ≠ 2'],
        explanation: 'x − 2 ≥ 0 → x ≥ 2.', hint: 'Under a root: ≥ 0.',
        whyWrong: [null, '√0 = 0 exists, so x = 2 is included.', 'For x < 2 the number under the root is negative.', 'That restriction is for a denominator, not a root.'],
      },
      de: {
        question: 'Welchen Definitionsbereich hat f(x) = √(x − 2)?', options: ['x ≥ 2', 'x > 2', 'x ≤ 2', 'x ≠ 2'],
        explanation: 'x − 2 ≥ 0 → x ≥ 2.', hint: 'Unter der Wurzel: ≥ 0.',
        whyWrong: [null, '√0 = 0 existiert, also gehört x = 2 dazu.', 'Für x < 2 steht unter der Wurzel eine negative Zahl.', 'Diese Einschränkung gilt für einen Nenner, nicht für eine Wurzel.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 19 },
      verify: ['2 * 3^2 + 1', 19],
      al: { question: 'f(x) = 2x + 1 dhe g(x) = x². Sa është f(g(3))?', explanation: 'g(3) = 9; f(9) = 19.', hint: 'Së pari g, pastaj f.', commonMistakes: [{ value: 49, why: 'Kjo është g(f(3)), radha e kundërt.' }, { value: 63, why: 'U shumëzua f(3) · g(3).' }] },
      en: { question: 'f(x) = 2x + 1 and g(x) = x². What is f(g(3))?', explanation: 'g(3) = 9; f(9) = 19.', hint: 'g first, then f.', commonMistakes: [{ value: 49, why: 'That is g(f(3)), the other order.' }, { value: 63, why: 'f(3) · g(3) was worked out.' }] },
      de: { question: 'f(x) = 2x + 1 und g(x) = x². Wie groß ist f(g(3))?', explanation: 'g(3) = 9; f(9) = 19.', hint: 'Zuerst g, dann f.', commonMistakes: [{ value: 49, why: 'Das ist g(f(3)), die umgekehrte Reihenfolge.' }, { value: 63, why: 'Es wurde f(3) · g(3) gerechnet.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['(-2)^3 - (-2) == -(2^3 - 2)', true],
      al: { question: 'Funksioni f(x) = x³ − x është tek.', explanation: 'E vërtetë: f(−x) = −x³ + x = −f(x).', hint: 'Zëvendësoni x me −x.', whyWrong: 'P.sh. f(2) = 6 dhe f(−2) = −6.' },
      en: { question: 'The function f(x) = x³ − x is odd.', explanation: 'True: f(−x) = −x³ + x = −f(x).', hint: 'Replace x with −x.', whyWrong: 'E.g. f(2) = 6 and f(−2) = −6.' },
      de: { question: 'Die Funktion f(x) = x³ − x ist ungerade.', explanation: 'Richtig: f(−x) = −x³ + x = −f(x).', hint: 'x durch −x ersetzen.', whyWrong: 'Z. B. f(2) = 6 und f(−2) = −6.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 3,
      verify: 'text',
      al: {
        question: 'Cili është funksioni invers i f(x) = 3x − 6?', options: ['1/(3x − 6)', '3x + 6', '(x − 6)/3', '(x + 6)/3'],
        explanation: 'y = 3x − 6 → x = (y + 6)/3 → f⁻¹(x) = (x + 6)/3.', hint: 'Zgjidhni për x, pastaj ndërroni x dhe y.',
        whyWrong: ['f⁻¹ nuk është 1/f.', 'U ndryshua vetëm shenja, pa pjesëtuar me 3.', 'Shenja e 6 duhej ndërruar: + 6.', null],
      },
      en: {
        question: 'What is the inverse of f(x) = 3x − 6?', options: ['1/(3x − 6)', '3x + 6', '(x − 6)/3', '(x + 6)/3'],
        explanation: 'y = 3x − 6 → x = (y + 6)/3 → f⁻¹(x) = (x + 6)/3.', hint: 'Solve for x, then swap x and y.',
        whyWrong: ['f⁻¹ is not 1/f.', 'Only the sign changed; there was no division by 3.', 'The sign of 6 must change: + 6.', null],
      },
      de: {
        question: 'Wie lautet die Umkehrfunktion von f(x) = 3x − 6?', options: ['1/(3x − 6)', '3x + 6', '(x − 6)/3', '(x + 6)/3'],
        explanation: 'y = 3x − 6 → x = (y + 6)/3 → f⁻¹(x) = (x + 6)/3.', hint: 'Nach x auflösen, dann x und y tauschen.',
        whyWrong: ['f⁻¹ ist nicht 1/f.', 'Nur das Vorzeichen gewechselt, nicht durch 3 geteilt.', 'Das Vorzeichen von 6 muss wechseln: + 6.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 0.5 },
      verify: ['sin(390 deg)', 0.5],
      explainVisual: { type: 'unitCircle', angle: 390, alt: { al: 'Rrethi njësi me një kënd që ndryshon me rrëshqitës; tregohen sin, cos dhe tg.', en: 'The unit circle with an angle on a slider; sin, cos and tan are shown.', de: 'Der Einheitskreis mit einem Winkel als Schieberegler; sin, cos und tan werden angezeigt.' } },
      al: { question: 'Sa është sin 390°?', explanation: 'sin(390° − 360°) = sin 30° = 0,5.', hint: 'Perioda e sinusit është 360°.', commonMistakes: [{ value: 1, why: 'sin 90° = 1, por 390° − 360° = 30°.' }, { value: 0.866, why: 'Kjo është sin 60° (ose cos 30°).' }] },
      en: { question: 'What is sin 390°?', explanation: 'sin(390° − 360°) = sin 30° = 0.5.', hint: 'The period of sine is 360°.', commonMistakes: [{ value: 1, why: 'sin 90° = 1, but 390° − 360° = 30°.' }, { value: 0.866, why: 'That is sin 60° (or cos 30°).' }] },
      de: { question: 'Wie groß ist sin 390°?', explanation: 'sin(390° − 360°) = sin 30° = 0,5.', hint: 'Die Periode des Sinus ist 360°.', commonMistakes: [{ value: 1, why: 'sin 90° = 1, aber 390° − 360° = 30°.' }, { value: 0.866, why: 'Das ist sin 60° (oder cos 30°).' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['(2*3 + 1)^2', 49],
      al: {
        question: 'f(x) = 2x + 1 dhe g(x) = x². Sa është g(f(3))?', options: ['19', '49', '63', '15'],
        explanation: 'f(3) = 7; g(7) = 49.', hint: 'Së pari f, pastaj g.',
        whyWrong: ['Kjo është f(g(3)), radha e kundërt.', null, 'U shumëzua f(3) · g(3).', 'Kjo është f(f(3)).'],
      },
      en: {
        question: 'f(x) = 2x + 1 and g(x) = x². What is g(f(3))?', options: ['19', '49', '63', '15'],
        explanation: 'f(3) = 7; g(7) = 49.', hint: 'f first, then g.',
        whyWrong: ['That is f(g(3)), the other order.', null, 'f(3) · g(3) was worked out.', 'That is f(f(3)).'],
      },
      de: {
        question: 'f(x) = 2x + 1 und g(x) = x². Wie groß ist g(f(3))?', options: ['19', '49', '63', '15'],
        explanation: 'f(3) = 7; g(7) = 49.', hint: 'Zuerst f, dann g.',
        whyWrong: ['Das ist f(g(3)), die umgekehrte Reihenfolge.', null, 'Es wurde f(3) · g(3) gerechnet.', 'Das ist f(f(3)).'],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['2^2 - 4*2 + 3', -1],
      explainVisual: {
    type: 'functionPlot', view: { xMin: -1, xMax: 5, yMin: -3, yMax: 6 },
    functions: [{ expr: 'a*x^2 + b*x + c', label: 'y = {a}x² {+b}x {+c}' }],
    points: [{ at: ['-b/(2*a)', 'c - b^2/(4*a)'], label: 'V({-b/(2*a)}, {c - b^2/(4*a)})', color: 'success' }],
    sliders: [{ name: 'a', min: -3, max: 3, step: 0.5, value: 1 }, { name: 'b', min: -8, max: 8, step: 1, value: -4 }, { name: 'c', min: -6, max: 6, step: 1, value: 3 }],
    readouts: [
      { cases: [{ when: 'a > 0', text: { al: 'a = {a} > 0: hapet lart, kulmi është minimum.', en: 'a = {a} > 0: opens upwards, the vertex is a minimum.', de: 'a = {a} > 0: nach oben geöffnet, der Scheitel ist ein Minimum.' } }, { when: 'a < 0', text: { al: 'a = {a} < 0: hapet poshtë, kulmi është maksimum.', en: 'a = {a} < 0: opens downwards, the vertex is a maximum.', de: 'a = {a} < 0: nach unten geöffnet, der Scheitel ist ein Maximum.' } }, { text: { al: 'a = 0: nuk është më parabolë, por drejtëz.', en: 'a = 0: no longer a parabola but a line.', de: 'a = 0: keine Parabel mehr, sondern eine Gerade.' } }] },
      { text: { al: 'Boshti i simetrisë x = −b/(2a) = {-b/(2*a)}; vlera në kulm {c - b^2/(4*a)}.', en: 'Axis of symmetry x = −b/(2a) = {-b/(2*a)}; value at the vertex {c - b^2/(4*a)}.', de: 'Symmetrieachse x = −b/(2a) = {-b/(2*a)}; Wert am Scheitel {c - b^2/(4*a)}.' } },
    ],
    alt: { al: 'Parabola me rrëshqitës për koeficientët dhe kulmin e saj.', en: 'A parabola with sliders for its coefficients and its vertex.', de: 'Eine Parabel mit Schiebereglern für die Koeffizienten und ihrem Scheitel.' },
  },
      al: {
        question: 'Sa është vlera më e vogël e y = x² − 4x + 3?', options: ['2', '3', '−1', '−4'],
        explanation: 'x₀ = 2; y = 4 − 8 + 3 = −1.', hint: 'Llogaritni y te kulmi.',
        whyWrong: ['Ky është x i kulmit, jo vlera.', 'Kjo është vlera te x = 0.', null, 'Ky është koeficienti b.'],
      },
      en: {
        question: 'What is the least value of y = x² − 4x + 3?', options: ['2', '3', '−1', '−4'],
        explanation: 'x₀ = 2; y = 4 − 8 + 3 = −1.', hint: 'Work out y at the vertex.',
        whyWrong: ['That is the x of the vertex, not the value.', 'That is the value at x = 0.', null, 'That is the coefficient b.'],
      },
      de: {
        question: 'Welchen kleinsten Wert hat y = x² − 4x + 3?', options: ['2', '3', '−1', '−4'],
        explanation: 'x₀ = 2; y = 4 − 8 + 3 = −1.', hint: 'y am Scheitel berechnen.',
        whyWrong: ['Das ist die Stelle x, nicht der Wert.', 'Das ist der Wert bei x = 0.', null, 'Das ist der Koeffizient b.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 120 }, unit: '°',
      verify: ['360 / 3', 120],
      explainVisual: {
    type: 'functionPlot', view: { xMin: 0, xMax: 360, yMin: -1.4, yMax: 1.4 }, xStep: 60,
    functions: [{ expr: 'cos(x*pi/180)', color: 'muted', dashed: true, label: 'cos x' }, { expr: 'cos(k*x*pi/180)', label: 'cos({k}x)' }],
    sliders: [{ name: 'k', min: 1, max: 6, step: 1, value: 3 }],
    readouts: [{ text: { al: 'Perioda = 360° / k = {360/k}°', en: 'Period = 360° / k = {360/k}°', de: 'Periode = 360° / k = {360/k}°' } }],
    alt: { al: 'Grafikët e cos x dhe cos(kx) nga 0° deri 360° me rrëshqitës për k.', en: 'The graphs of cos x and cos(kx) from 0° to 360° with a slider for k.', de: 'Die Graphen von cos x und cos(kx) von 0° bis 360° mit Schieberegler für k.' },
  },
      al: { question: 'Sa është perioda e y = cos(3x) në gradë?', explanation: '360° : 3 = 120°.', hint: 'T = 360°/k.', commonMistakes: [{ value: 1080, why: 'U shumëzua me 3 në vend që të pjesëtohej.' }, { value: 360, why: 'Kjo është perioda e cos x, pa faktorin 3.' }] },
      en: { question: 'What is the period of y = cos(3x) in degrees?', explanation: '360° ÷ 3 = 120°.', hint: 'T = 360°/k.', commonMistakes: [{ value: 1080, why: 'It was multiplied by 3 instead of divided.' }, { value: 360, why: 'That is the period of cos x, without the factor 3.' }] },
      de: { question: 'Welche Periode hat y = cos(3x) in Grad?', explanation: '360° : 3 = 120°.', hint: 'T = 360°/k.', commonMistakes: [{ value: 1080, why: 'Es wurde mit 3 multipliziert statt geteilt.' }, { value: 360, why: 'Das ist die Periode von cos x, ohne den Faktor 3.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: 'Për çdo funksion invers vlen f⁻¹(x) = 1/f(x).', explanation: 'E gabuar: −1 nuk është fuqi. Për f(x) = 3x − 6, f⁻¹(x) = (x + 6)/3, jo 1/(3x − 6).', hint: 'Çfarë bën funksioni invers?', whyWrong: 'f⁻¹ e kthen veprimin e f: f(a) = b ⇔ f⁻¹(b) = a.' },
      en: { question: 'For every inverse function, f⁻¹(x) = 1/f(x).', explanation: 'False: −1 is not a power. For f(x) = 3x − 6, f⁻¹(x) = (x + 6)/3, not 1/(3x − 6).', hint: 'What does an inverse function do?', whyWrong: 'f⁻¹ reverses f: f(a) = b ⇔ f⁻¹(b) = a.' },
      de: { question: 'Für jede Umkehrfunktion gilt f⁻¹(x) = 1/f(x).', explanation: 'Falsch: −1 ist kein Exponent. Für f(x) = 3x − 6 ist f⁻¹(x) = (x + 6)/3, nicht 1/(3x − 6).', hint: 'Was macht eine Umkehrfunktion?', whyWrong: 'f⁻¹ kehrt f um: f(a) = b ⇔ f⁻¹(b) = a.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['(11 + 4) / 3', 5],
      al: {
        question: 'f(x) = 3x − 4. Sa është f⁻¹(11)?', options: ['5', '29', '1/29', '7/3'],
        explanation: '3a − 4 = 11 → a = 5.', hint: 'Kërkoni a me f(a) = 11.',
        whyWrong: [null, 'Kjo është f(11), jo f⁻¹(11).', 'Kjo është 1/f(11).', 'Shenja e 4 nuk u ndërrua: (11 − 4)/3.'],
      },
      en: {
        question: 'f(x) = 3x − 4. What is f⁻¹(11)?', options: ['5', '29', '1/29', '7/3'],
        explanation: '3a − 4 = 11 → a = 5.', hint: 'Look for a with f(a) = 11.',
        whyWrong: [null, 'That is f(11), not f⁻¹(11).', 'That is 1/f(11).', 'The sign of 4 was not changed: (11 − 4)/3.'],
      },
      de: {
        question: 'f(x) = 3x − 4. Wie groß ist f⁻¹(11)?', options: ['5', '29', '1/29', '7/3'],
        explanation: '3a − 4 = 11 → a = 5.', hint: 'Gesucht ist a mit f(a) = 11.',
        whyWrong: [null, 'Das ist f(11), nicht f⁻¹(11).', 'Das ist 1/f(11).', 'Das Vorzeichen von 4 wurde nicht gewechselt: (11 − 4)/3.'],
      },
    },
  ],
};
