// Grade 12 · Theme 2 quiz: Sequences and progressions (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g12-sequences-progressions-quiz',
  grade: 12,
  theme: 'g12-sequences-progressions',
  order: 2,
  difficulty: 'advanced',
  icon: '🔢',
  color: '#2A9D8F',
  i18n: {
    al: { title: 'Vargjet dhe progresionet', category: 'Klasa 12 · Tema 2', duration: '12 min' },
    en: { title: 'Sequences and series', category: 'Grade 12 · Theme 2', duration: '12 min' },
    de: { title: 'Folgen und Reihen', category: 'Klasse 12 · Thema 2', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['2*7 + 1', 15],
      al: {
        question: 'a₁ = 1 dhe aₙ₊₁ = 2aₙ + 1. Sa është a₄?', options: ['7', '15', '31', '9'],
        explanation: '1, 3, 7, 15 → a₄ = 15.', hint: 'Llogaritni kufizat me radhë.',
        whyWrong: ['Kjo është a₃.', null, 'Kjo është a₅.', 'Vargu u trajtua si aritmetik me d = 2.'],
      },
      en: {
        question: 'a₁ = 1 and aₙ₊₁ = 2aₙ + 1. What is a₄?', options: ['7', '15', '31', '9'],
        explanation: '1, 3, 7, 15 → a₄ = 15.', hint: 'Work the terms out in order.',
        whyWrong: ['That is a₃.', null, 'That is a₅.', 'It was treated as arithmetic with d = 2.'],
      },
      de: {
        question: 'a₁ = 1 und aₙ₊₁ = 2aₙ + 1. Wie groß ist a₄?', options: ['7', '15', '31', '9'],
        explanation: '1, 3, 7, 15 → a₄ = 15.', hint: 'Die Glieder der Reihe nach berechnen.',
        whyWrong: ['Das ist a₃.', null, 'Das ist a₅.', 'Die Folge wurde als arithmetisch mit d = 2 behandelt.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 79 },
      verify: ['3 + 19*4', 79],
      al: { question: 'Në progresionin aritmetik a₁ = 3, d = 4. Sa është a₂₀?', explanation: 'a₂₀ = 3 + 19 · 4 = 79.', hint: 'aₙ = a₁ + (n − 1)d.', commonMistakes: [{ value: 83, why: 'U përdor 20d në vend të 19d.' }, { value: 80, why: 'U llogarit 20 · 4, pa a₁.' }] },
      en: { question: 'In an arithmetic progression a₁ = 3, d = 4. What is a₂₀?', explanation: 'a₂₀ = 3 + 19 · 4 = 79.', hint: 'aₙ = a₁ + (n − 1)d.', commonMistakes: [{ value: 83, why: '20d was used instead of 19d.' }, { value: 80, why: '20 · 4 was used, without a₁.' }] },
      de: { question: 'In einer arithmetischen Folge ist a₁ = 3, d = 4. Wie groß ist a₂₀?', explanation: 'a₂₀ = 3 + 19 · 4 = 79.', hint: 'aₙ = a₁ + (n − 1)d.', commonMistakes: [{ value: 83, why: 'Es wurde 20d statt 19d verwendet.' }, { value: 80, why: 'Es wurde 20 · 4 ohne a₁ gerechnet.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Vargu aₙ = n/(n + 1) është rritës dhe i kufizuar.', explanation: 'E vërtetë: aₙ₊₁ − aₙ = 1/((n + 1)(n + 2)) > 0 dhe 0 < aₙ < 1.', hint: 'Shikoni 1/2, 2/3, 3/4, …', whyWrong: 'Kufizat rriten drejt 1 dhe nuk e kalojnë.' },
      en: { question: 'The sequence aₙ = n/(n + 1) is increasing and bounded.', explanation: 'True: aₙ₊₁ − aₙ = 1/((n + 1)(n + 2)) > 0 and 0 < aₙ < 1.', hint: 'Look at 1/2, 2/3, 3/4, …', whyWrong: 'The terms rise towards 1 and never pass it.' },
      de: { question: 'Die Folge aₙ = n/(n + 1) ist steigend und beschränkt.', explanation: 'Richtig: aₙ₊₁ − aₙ = 1/((n + 1)(n + 2)) > 0 und 0 < aₙ < 1.', hint: 'Betrachten Sie 1/2, 2/3, 3/4, …', whyWrong: 'Die Glieder wachsen gegen 1, ohne 1 zu überschreiten.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['20/2 * (3 + 79)', 820],
      al: {
        question: 'a₁ = 3, d = 4. Sa është S₂₀?', options: ['820', '1 640', '79', '1 580'],
        explanation: 'S₂₀ = 20/2 · (3 + 79) = 820.', hint: 'Sₙ = n/2 · (a₁ + aₙ).',
        whyWrong: [null, 'U harrua pjesëtimi me 2.', 'Kjo është a₂₀, jo shuma.', 'U llogarit 20 · a₂₀.'],
      },
      en: {
        question: 'a₁ = 3, d = 4. What is S₂₀?', options: ['820', '1 640', '79', '1 580'],
        explanation: 'S₂₀ = 20/2 · (3 + 79) = 820.', hint: 'Sₙ = n/2 · (a₁ + aₙ).',
        whyWrong: [null, 'The division by 2 was forgotten.', 'That is a₂₀, not the sum.', '20 · a₂₀ was worked out.'],
      },
      de: {
        question: 'a₁ = 3, d = 4. Wie groß ist S₂₀?', options: ['820', '1 640', '79', '1 580'],
        explanation: 'S₂₀ = 20/2 · (3 + 79) = 820.', hint: 'Sₙ = n/2 · (a₁ + aₙ).',
        whyWrong: [null, 'Die Division durch 2 fehlt.', 'Das ist a₂₀, nicht die Summe.', 'Es wurde 20 · a₂₀ gerechnet.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 242 },
      verify: ['2 * (3^5 - 1) / (3 - 1)', 242],
      al: { question: 'Në progresionin gjeometrik a₁ = 2, q = 3. Sa është shuma e 5 kufizave të para?', explanation: '2 · (243 − 1)/2 = 242.', hint: 'Sₙ = a₁(qⁿ − 1)/(q − 1).', commonMistakes: [{ value: 162, why: 'Kjo është a₅, jo shuma.' }, { value: 484, why: 'U harrua pjesëtimi me q − 1 = 2.' }] },
      en: { question: 'In a geometric progression a₁ = 2, q = 3. What is the sum of the first 5 terms?', explanation: '2 · (243 − 1)/2 = 242.', hint: 'Sₙ = a₁(qⁿ − 1)/(q − 1).', commonMistakes: [{ value: 162, why: 'That is a₅, not the sum.' }, { value: 484, why: 'The division by q − 1 = 2 was forgotten.' }] },
      de: { question: 'In einer geometrischen Folge ist a₁ = 2, q = 3. Wie groß ist die Summe der ersten 5 Glieder?', explanation: '2 · (243 − 1)/2 = 242.', hint: 'Sₙ = a₁(qⁿ − 1)/(q − 1).', commonMistakes: [{ value: 162, why: 'Das ist a₅, nicht die Summe.' }, { value: 484, why: 'Die Division durch q − 1 = 2 fehlt.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['sqrt(54 / 6)', 3],
      al: {
        question: 'Në progresionin gjeometrik me q > 0, a₂ = 6 dhe a₄ = 54. Sa është q?', options: ['9', '24', '27', '3'],
        explanation: 'a₄ : a₂ = q² = 9 → q = 3.', hint: 'Nga a₂ te a₄ janë dy hapa.',
        whyWrong: ['Ky është q², jo q.', 'Vargu u trajtua si aritmetik: (54 − 6)/2.', 'U pjesëtua 54 me 2.', null],
      },
      en: {
        question: 'In a geometric progression with q > 0, a₂ = 6 and a₄ = 54. What is q?', options: ['9', '24', '27', '3'],
        explanation: 'a₄ ÷ a₂ = q² = 9 → q = 3.', hint: 'From a₂ to a₄ there are two steps.',
        whyWrong: ['That is q², not q.', 'It was treated as arithmetic: (54 − 6)/2.', '54 was divided by 2.', null],
      },
      de: {
        question: 'In einer geometrischen Folge mit q > 0 ist a₂ = 6 und a₄ = 54. Wie groß ist q?', options: ['9', '24', '27', '3'],
        explanation: 'a₄ : a₂ = q² = 9 → q = 3.', hint: 'Von a₂ bis a₄ sind es zwei Schritte.',
        whyWrong: ['Das ist q², nicht q.', 'Es wurde arithmetisch gerechnet: (54 − 6)/2.', '54 wurde durch 2 geteilt.', null],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['1 / (1 - 1/2)', 2],
      al: {
        question: 'Sa është shuma e pafundme 1 + 1/2 + 1/4 + 1/8 + …?', options: ['∞', '1', '2', '1,5'],
        explanation: 'a₁ = 1, q = 1/2: S = 1/(1 − 1/2) = 2.', hint: 'S = a₁/(1 − q) për |q| < 1.',
        whyWrong: ['Kufizat zvogëlohen aq shpejt sa shuma mbetet e fundme.', 'Kjo është vetëm kufiza e parë.', null, 'Kjo është shuma e dy kufizave të para.'],
      },
      en: {
        question: 'What is the infinite sum 1 + 1/2 + 1/4 + 1/8 + …?', options: ['∞', '1', '2', '1.5'],
        explanation: 'a₁ = 1, q = 1/2: S = 1/(1 − 1/2) = 2.', hint: 'S = a₁/(1 − q) for |q| < 1.',
        whyWrong: ['The terms shrink fast enough for the sum to stay finite.', 'That is only the first term.', null, 'That is the sum of the first two terms.'],
      },
      de: {
        question: 'Welchen Wert hat die unendliche Reihe 1 + 1/2 + 1/4 + 1/8 + …?', options: ['∞', '1', '2', '1,5'],
        explanation: 'a₁ = 1, q = 1/2: S = 1/(1 − 1/2) = 2.', hint: 'S = a₁/(1 − q) für |q| < 1.',
        whyWrong: ['Die Glieder werden so schnell klein, dass die Summe endlich bleibt.', 'Das ist nur das erste Glied.', null, 'Das ist die Summe der ersten zwei Glieder.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 5050 },
      verify: ['100 * 101 / 2', 5050],
      al: { question: 'Sa është 1 + 2 + 3 + … + 100?', explanation: '100/2 · (1 + 100) = 5 050.', hint: 'Sₙ = n/2 · (a₁ + aₙ).', commonMistakes: [{ value: 10100, why: 'U harrua pjesëtimi me 2.' }, { value: 5000, why: 'U llogarit 100/2 · 100, pa a₁.' }] },
      en: { question: 'What is 1 + 2 + 3 + … + 100?', explanation: '100/2 · (1 + 100) = 5 050.', hint: 'Sₙ = n/2 · (a₁ + aₙ).', commonMistakes: [{ value: 10100, why: 'The division by 2 was forgotten.' }, { value: 5000, why: '100/2 · 100 was used, without a₁.' }] },
      de: { question: 'Wie viel ist 1 + 2 + 3 + … + 100?', explanation: '100/2 · (1 + 100) = 5 050.', hint: 'Sₙ = n/2 · (a₁ + aₙ).', commonMistakes: [{ value: 10100, why: 'Die Division durch 2 fehlt.' }, { value: 5000, why: 'Es wurde 100/2 · 100 ohne a₁ gerechnet.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: 'Shuma e pafundme 1 + 2 + 4 + 8 + … është 1/(1 − 2) = −1.', explanation: 'E gabuar: q = 2, |q| ≥ 1, kufizat rriten pa fund dhe shuma nuk është numër.', hint: 'Kur vlen formula a₁/(1 − q)?', whyWrong: 'Formula vlen vetëm për |q| < 1.' },
      en: { question: 'The infinite sum 1 + 2 + 4 + 8 + … equals 1/(1 − 2) = −1.', explanation: 'False: q = 2, |q| ≥ 1, the terms grow without end and the sum is not a number.', hint: 'When does a₁/(1 − q) hold?', whyWrong: 'The formula only holds for |q| < 1.' },
      de: { question: 'Die unendliche Reihe 1 + 2 + 4 + 8 + … hat den Wert 1/(1 − 2) = −1.', explanation: 'Falsch: q = 2, |q| ≥ 1, die Glieder wachsen unbegrenzt, die Reihe hat keinen Wert.', hint: 'Wann gilt a₁/(1 − q)?', whyWrong: 'Die Formel gilt nur für |q| < 1.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['(22 - 10) / 4', 3],
      al: {
        question: 'Në progresionin aritmetik a₃ = 10 dhe a₇ = 22. Sa është d?', options: ['3', '12', '4', '2,4'],
        explanation: 'a₇ − a₃ = 4d = 12 → d = 3.', hint: 'Nga a₃ te a₇ ka 4 hapa.',
        whyWrong: [null, 'Ky është ndryshimi a₇ − a₃, jo d.', 'Ky është numri i hapave.', 'U pjesëtua me 5 në vend të 4.'],
      },
      en: {
        question: 'In an arithmetic progression a₃ = 10 and a₇ = 22. What is d?', options: ['3', '12', '4', '2.4'],
        explanation: 'a₇ − a₃ = 4d = 12 → d = 3.', hint: 'From a₃ to a₇ there are 4 steps.',
        whyWrong: [null, 'That is a₇ − a₃, not d.', 'That is the number of steps.', 'It was divided by 5 instead of 4.'],
      },
      de: {
        question: 'In einer arithmetischen Folge ist a₃ = 10 und a₇ = 22. Wie groß ist d?', options: ['3', '12', '4', '2,4'],
        explanation: 'a₇ − a₃ = 4d = 12 → d = 3.', hint: 'Von a₃ bis a₇ sind es 4 Schritte.',
        whyWrong: [null, 'Das ist a₇ − a₃, nicht d.', 'Das ist die Anzahl der Schritte.', 'Es wurde durch 5 statt 4 geteilt.'],
      },
    },
  ],
};
