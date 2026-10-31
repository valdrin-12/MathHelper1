// Grade 9 · Theme 1: Number sets (September–October)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g9-number-sets',
  i18n: {
    al: { title: 'Bashkësitë numerike', description: 'Numrat dhjetorë periodikë, numrat iracionalë, bashkësia R, vlera absolute dhe intervalet.' },
    en: { title: 'Number sets', description: 'Recurring decimals, irrational numbers, the real numbers, absolute value and intervals.' },
    de: { title: 'Zahlenmengen', description: 'Periodische Dezimalzahlen, irrationale Zahlen, die reellen Zahlen, Betrag und Intervalle.' },
  },
  lessons: [
    // ───────── 1. Recurring decimals
    {
      slug: 'g9-number-sets-repeating-decimals',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'x', cells: [alt('0,1666…', '0.1666…', '0,1666…')] },
          { head: '10x', cells: [alt('1,666…', '1.666…', '1,666…')] },
          { head: '100x', cells: [alt('16,666…', '16.666…', '16,666…')] },
          { head: '100x − 10x', cells: [alt('90x = 15', '90x = 15', '90x = 15')] },
        ],
        highlight: [[3, 0]],
        caption: alt('Zbresim dy rreshta me të njëjtën pjesë periodike: 90x = 15, pra x = 15/90 = 1/6.', 'Subtract two lines with the same repeating tail: 90x = 15, so x = 15/90 = 1/6.', 'Zwei Zeilen mit gleichem periodischem Teil subtrahieren: 90x = 15, also x = 15/90 = 1/6.'),
        alt: alt('Tabela: x = 0,1666…, 10x, 100x dhe ndryshimi 90x = 15.', 'Table: x = 0.1666…, 10x, 100x and the difference 90x = 15.', 'Tabelle: x = 0,1666…, 10x, 100x und die Differenz 90x = 15.'),
      }],
      answers: {
        examples: [[['3 / 9', '1/3', 1e-9, '1/3']], [['15 / 90', '1/6', 1e-9, '1/6']]],
        practice: [[['12 / 99', '4/33', 1e-9, '4/33']], [['75 / 90', '5/6', 1e-9, '5/6']], [['11 / 9', '11/9', 1e-9, '11/9']]],
      },
      al: {
        title: 'Numrat dhjetorë periodikë',
        objectives: ['Të shndërroni numra periodikë të thjeshtë dhe të përzier në thyesa.', 'Të përdorni metodën me ekuacion për çdo periodë.'],
        theory: 'Numri periodik i thjeshtë e ka periodën menjëherë pas presjes: 0,(3) = 0,333… = 3/9 = 1/3. Numri periodik i përzier ka shifra para periodës: 0,1(6) = 0,1666…\n\nMetoda e përgjithshme: shënojmë x me numrin, e shumëzojmë me fuqi të 10 që dy rreshta të kenë të njëjtën pjesë periodike pas presjes, dhe i zbresim. Për x = 0,1666…: 100x = 16,666… dhe 10x = 1,666…; 90x = 15, x = 15/90 = 1/6.\n\nÇdo numër periodik është racional, sepse kjo metodë jep gjithmonë një thyesë.',
        keyPoints: ['0,(a) = a/9;  0,(ab) = ab/99', 'Periodik i përzier: shumëzo me 10ⁿ dhe zbrit', 'Periodik → racional'],
        examples: [
          { example: 'Shkruani 0,(3) si thyesë.', solution: '0,(3) = 3/9 = 1/3.' },
          { example: 'Shkruani 0,1(6) si thyesë.', solution: 'x = 0,1666…; 100x − 10x = 16,666… − 1,666… = 15; 90x = 15, x = 1/6.' },
        ],
        commonMistakes: [
          { mistake: '0,1(6) = 16/99', fix: 'Perioda nuk fillon menjëherë pas presjes; përdorni metodën me 100x − 10x: 15/90 = 1/6.' },
        ],
        practice: [
          { problem: 'Shkruani 0,(12) si thyesë të thjeshtuar.', solution: '4/33', steps: ['0,(12) = 12/99.', 'Thjeshtojmë me 3: 4/33.'] },
          { problem: 'Shkruani 0,8(3) si thyesë.', solution: '5/6', steps: ['100x − 10x = 83,33… − 8,33… = 75.', 'x = 75/90 = 5/6.'] },
          { problem: 'Shkruani 1,(2) si thyesë.', solution: '11/9', steps: ['1,(2) = 1 + 2/9.', '= 11/9.'] },
        ],
      },
      en: {
        title: 'Recurring decimals',
        objectives: ['Convert pure and mixed recurring decimals into fractions.', 'Use the equation method for any period.'],
        theory: 'A pure recurring decimal repeats straight after the point: 0.(3) = 0.333… = 3/9 = 1/3. A mixed recurring decimal has digits before the repeating part: 0.1(6) = 0.1666…\n\nThe general method: call the number x, multiply by powers of 10 so that two lines have the same repeating tail after the point, and subtract. For x = 0.1666…: 100x = 16.666… and 10x = 1.666…; 90x = 15, x = 15/90 = 1/6.\n\nEvery recurring decimal is rational, because this method always gives a fraction.',
        keyPoints: ['0.(a) = a/9;  0.(ab) = ab/99', 'Mixed recurring: multiply by 10ⁿ and subtract', 'Recurring → rational'],
        examples: [
          { example: 'Write 0.(3) as a fraction.', solution: '0.(3) = 3/9 = 1/3.' },
          { example: 'Write 0.1(6) as a fraction.', solution: 'x = 0.1666…; 100x − 10x = 16.666… − 1.666… = 15; 90x = 15, x = 1/6.' },
        ],
        commonMistakes: [
          { mistake: '0.1(6) = 16/99', fix: 'The period does not start straight after the point; use 100x − 10x: 15/90 = 1/6.' },
        ],
        practice: [
          { problem: 'Write 0.(12) as a fraction in its simplest form.', solution: '4/33', steps: ['0.(12) = 12/99.', 'Divide by 3: 4/33.'] },
          { problem: 'Write 0.8(3) as a fraction.', solution: '5/6', steps: ['100x − 10x = 83.33… − 8.33… = 75.', 'x = 75/90 = 5/6.'] },
          { problem: 'Write 1.(2) as a fraction.', solution: '11/9', steps: ['1.(2) = 1 + 2/9.', '= 11/9.'] },
        ],
      },
      de: {
        title: 'Periodische Dezimalzahlen',
        objectives: ['Rein- und gemischtperiodische Dezimalzahlen in Brüche umwandeln.', 'Das Gleichungsverfahren für jede Periode anwenden.'],
        theory: 'Eine reinperiodische Dezimalzahl wiederholt sich direkt nach dem Komma: 0,(3) = 0,333… = 3/9 = 1/3. Eine gemischtperiodische hat Ziffern vor der Periode: 0,1(6) = 0,1666…\n\nAllgemeines Verfahren: Die Zahl x nennen, mit Zehnerpotenzen so multiplizieren, dass zwei Zeilen nach dem Komma denselben periodischen Teil haben, und subtrahieren. Für x = 0,1666…: 100x = 16,666… und 10x = 1,666…; 90x = 15, x = 15/90 = 1/6.\n\nJede periodische Dezimalzahl ist rational, denn das Verfahren liefert immer einen Bruch.',
        keyPoints: ['0,(a) = a/9;  0,(ab) = ab/99', 'Gemischtperiodisch: mit 10ⁿ multiplizieren und subtrahieren', 'Periodisch → rational'],
        examples: [
          { example: 'Schreiben Sie 0,(3) als Bruch.', solution: '0,(3) = 3/9 = 1/3.' },
          { example: 'Schreiben Sie 0,1(6) als Bruch.', solution: 'x = 0,1666…; 100x − 10x = 16,666… − 1,666… = 15; 90x = 15, x = 1/6.' },
        ],
        commonMistakes: [
          { mistake: '0,1(6) = 16/99', fix: 'Die Periode beginnt nicht direkt nach dem Komma; mit 100x − 10x rechnen: 15/90 = 1/6.' },
        ],
        practice: [
          { problem: 'Schreiben Sie 0,(12) als gekürzten Bruch.', solution: '4/33', steps: ['0,(12) = 12/99.', 'Durch 3 kürzen: 4/33.'] },
          { problem: 'Schreiben Sie 0,8(3) als Bruch.', solution: '5/6', steps: ['100x − 10x = 83,33… − 8,33… = 75.', 'x = 75/90 = 5/6.'] },
          { problem: 'Schreiben Sie 1,(2) als Bruch.', solution: '11/9', steps: ['1,(2) = 1 + 2/9.', '= 11/9.'] },
        ],
      },
    },

    // ───────── 2. Irrational numbers
    {
      slug: 'g9-number-sets-irrational-numbers',
      visuals: [{
        type: 'numberLine', min: 0, max: 4, step: 0.5,
        points: [{ x: 1.414, label: '√2' }, { x: 1.732, label: '√3', below: true, color: 'secondary' }, { x: 2.236, label: '√5', color: 'success' }, { x: 3.1416, label: 'π', below: true, color: 'purple' }],
        caption: alt('√2 ≈ 1,41; √3 ≈ 1,73; √5 ≈ 2,24; π ≈ 3,14: numra iracionalë në boshtin numerik.', '√2 ≈ 1.41; √3 ≈ 1.73; √5 ≈ 2.24; π ≈ 3.14: irrational numbers on the number line.', '√2 ≈ 1,41; √3 ≈ 1,73; √5 ≈ 2,24; π ≈ 3,14: irrationale Zahlen auf dem Zahlenstrahl.'),
        alt: alt('Boshti numerik nga 0 deri 4 me pikat √2, √3, √5 dhe π.', 'Number line from 0 to 4 with the points √2, √3, √5 and π.', 'Zahlenstrahl von 0 bis 4 mit den Punkten √2, √3, √5 und π.'),
      }],
      answers: {
        examples: ['text', [['7 * sqrt(3)', 12.12, 0.005, '12.12']]],
        practice: [[['sqrt(12) + sqrt(27)', 8.66, 0.005, '8.66']], [['6 / sqrt(3)', 3.46, 0.005, '3.46']], [['sqrt(2) * sqrt(8)', 4]]],
      },
      al: {
        title: 'Numrat iracionalë',
        objectives: ['Të dalloni numrat iracionalë.', 'Të mblidhni, thjeshtoni dhe racionalizoni shprehje me rrënjë.'],
        theory: 'Numri iracional nuk mund të shkruhet si thyesë; trajta e tij dhjetore është e pafundme dhe jo periodike. Shembuj: √2, √3, √7, π. Rrënja katrore e një numri natyror është ose numër natyror (√9 = 3) ose iracionale (√7).\n\nRrënjët e ngjashme mblidhen si monomet: 2√3 + 5√3 = 7√3. Para mbledhjes thjeshtojmë: √12 + √27 = 2√3 + 3√3 = 5√3.\n\nRacionalizimi heq rrënjën nga emëruesi: 6/√3 = 6√3/3 = 2√3. Shuma ose prodhimi i dy iracionalëve mund të jetë racional: √2 · √8 = 4.',
        keyPoints: ['Iracional: dhjetor i pafundëm jo periodik', 'a√n + b√n = (a + b)√n', 'k/√n = k√n/n'],
        examples: [
          { example: 'Cili numër është iracional: 0,25; √9; √7; 3/8?', solution: '√7, sepse 7 nuk është katror i plotë. 0,25 = 1/4, √9 = 3 dhe 3/8 janë racionalë.' },
          { example: 'Llogaritni 2√3 + 5√3.', solution: '7√3 ≈ 12,12.' },
        ],
        commonMistakes: [
          { mistake: '√2 + √3 = √5', fix: 'Rrënjët nuk mblidhen kështu; mblidhen vetëm rrënjët e ngjashme.' },
          { mistake: '6/√3 = 2', fix: '6/√3 = 6√3/3 = 2√3 ≈ 3,46.' },
        ],
        practice: [
          { problem: 'Llogaritni √12 + √27.', solution: '5√3 ≈ 8,66', steps: ['√12 = 2√3; √27 = 3√3.', '5√3 ≈ 8,66.'] },
          { problem: 'Racionalizoni 6/√3.', solution: '2√3 ≈ 3,46', steps: ['6√3/3.', '= 2√3 ≈ 3,46.'] },
          { problem: 'A është √2 · √8 numër racional?', solution: 'Po, = 4', steps: ['√2 · √8 = √16.', '= 4.'] },
        ],
      },
      en: {
        title: 'Irrational numbers',
        objectives: ['Recognise irrational numbers.', 'Add, simplify and rationalise expressions with roots.'],
        theory: 'An irrational number cannot be written as a fraction; its decimal goes on forever without repeating. Examples: √2, √3, √7, π. The square root of a natural number is either natural (√9 = 3) or irrational (√7).\n\nLike roots are added like like terms: 2√3 + 5√3 = 7√3. Simplify first: √12 + √27 = 2√3 + 3√3 = 5√3.\n\nRationalising removes the root from the denominator: 6/√3 = 6√3/3 = 2√3. A sum or product of two irrationals can be rational: √2 · √8 = 4.',
        keyPoints: ['Irrational: endless, non-repeating decimal', 'a√n + b√n = (a + b)√n', 'k/√n = k√n/n'],
        examples: [
          { example: 'Which number is irrational: 0.25; √9; √7; 3/8?', solution: '√7, because 7 is not a perfect square. 0.25 = 1/4, √9 = 3 and 3/8 are rational.' },
          { example: 'Work out 2√3 + 5√3.', solution: '7√3 ≈ 12.12.' },
        ],
        commonMistakes: [
          { mistake: '√2 + √3 = √5', fix: 'Roots do not add like that; only like roots can be added.' },
          { mistake: '6/√3 = 2', fix: '6/√3 = 6√3/3 = 2√3 ≈ 3.46.' },
        ],
        practice: [
          { problem: 'Work out √12 + √27.', solution: '5√3 ≈ 8.66', steps: ['√12 = 2√3; √27 = 3√3.', '5√3 ≈ 8.66.'] },
          { problem: 'Rationalise 6/√3.', solution: '2√3 ≈ 3.46', steps: ['6√3/3.', '= 2√3 ≈ 3.46.'] },
          { problem: 'Is √2 · √8 a rational number?', solution: 'Yes, = 4', steps: ['√2 · √8 = √16.', '= 4.'] },
        ],
      },
      de: {
        title: 'Irrationale Zahlen',
        objectives: ['Irrationale Zahlen erkennen.', 'Terme mit Wurzeln addieren, vereinfachen und den Nenner rational machen.'],
        theory: 'Eine irrationale Zahl lässt sich nicht als Bruch schreiben; ihre Dezimaldarstellung ist unendlich und nicht periodisch. Beispiele: √2, √3, √7, π. Die Quadratwurzel einer natürlichen Zahl ist entweder natürlich (√9 = 3) oder irrational (√7).\n\nGleiche Wurzeln addiert man wie gleichartige Glieder: 2√3 + 5√3 = 7√3. Vorher vereinfachen: √12 + √27 = 2√3 + 3√3 = 5√3.\n\nNenner rational machen: 6/√3 = 6√3/3 = 2√3. Summe oder Produkt zweier irrationaler Zahlen kann rational sein: √2 · √8 = 4.',
        keyPoints: ['Irrational: unendlich, nicht periodisch', 'a√n + b√n = (a + b)√n', 'k/√n = k√n/n'],
        examples: [
          { example: 'Welche Zahl ist irrational: 0,25; √9; √7; 3/8?', solution: '√7, denn 7 ist keine Quadratzahl. 0,25 = 1/4, √9 = 3 und 3/8 sind rational.' },
          { example: 'Berechnen Sie 2√3 + 5√3.', solution: '7√3 ≈ 12,12.' },
        ],
        commonMistakes: [
          { mistake: '√2 + √3 = √5', fix: 'So addiert man Wurzeln nicht; nur gleiche Wurzeln lassen sich zusammenfassen.' },
          { mistake: '6/√3 = 2', fix: '6/√3 = 6√3/3 = 2√3 ≈ 3,46.' },
        ],
        practice: [
          { problem: 'Berechnen Sie √12 + √27.', solution: '5√3 ≈ 8,66', steps: ['√12 = 2√3; √27 = 3√3.', '5√3 ≈ 8,66.'] },
          { problem: 'Machen Sie den Nenner von 6/√3 rational.', solution: '2√3 ≈ 3,46', steps: ['6√3/3.', '= 2√3 ≈ 3,46.'] },
          { problem: 'Ist √2 · √8 rational?', solution: 'Ja, = 4', steps: ['√2 · √8 = √16.', '= 4.'] },
        ],
      },
    },

    // ───────── 3. Real numbers
    {
      slug: 'g9-number-sets-real-numbers',
      visuals: [{
        type: 'numberLine', min: -3, max: 2, step: 0.5,
        points: [{ x: -2.236, label: '−√5' }, { x: -2, label: '−2', below: true, color: 'secondary' }, { x: 1.414, label: '√2', color: 'success' }, { x: 1.5, label: '1,5', below: true, color: 'purple' }],
        caption: alt('Renditja: −√5 < −2 < √2 < 1,5. Çdo numër real ka një pikë në boshtin numerik.', 'Order: −√5 < −2 < √2 < 1.5. Every real number has a point on the number line.', 'Reihenfolge: −√5 < −2 < √2 < 1,5. Jede reelle Zahl hat einen Punkt auf der Zahlengeraden.'),
        alt: alt('Boshti numerik me −√5, −2, √2 dhe 1,5 të renditur nga e majta në të djathtë.', 'Number line with −√5, −2, √2 and 1.5 in order from left to right.', 'Zahlengerade mit −√5, −2, √2 und 1,5 von links nach rechts.'),
      }],
      answers: {
        examples: [[['3.2^2', 10.24]], 'text'],
        practice: [[['1.5^2', 2.25]], [['(2*sqrt(3))^2', 12], ['(3*sqrt(2))^2', 18]], 'text'],
      },
      al: {
        title: 'Bashkësia R e numrave realë',
        objectives: ['Të përshkruani bashkësinë R si bashkim të racionalëve dhe iracionalëve.', 'Të krahasoni dhe renditni numra realë, edhe me rrënjë.'],
        theory: 'Numrat realë R janë të gjithë numrat racionalë dhe iracionalë së bashku: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Çdo pikë e boshtit numerik i përgjigjet një numri real dhe anasjelltas.\n\nPër të krahasuar rrënjë me numra dhjetorë, krahasojmë katrorët (për numra pozitivë): 3,2² = 10,24 > 10, prandaj √10 < 3,2. Për 2√3 dhe 3√2: (2√3)² = 12 < 18 = (3√2)², pra 2√3 < 3√2.\n\nNdërmjet çdo dy numrave realë ka pafund numra të tjerë, racionalë dhe iracionalë.',
        keyPoints: ['ℝ = ℚ ∪ (iracionalët)', 'Për a, b > 0: a < b ⟺ a² < b²', 'Ndërmjet dy realëve ka pafund realë'],
        examples: [
          { example: 'Krahasoni √10 dhe 3,2.', solution: '3,2² = 10,24 > 10, pra √10 < 3,2.' },
          { example: 'Renditni: 1,5; −√5; √2; −2.', solution: '−√5 ≈ −2,24 < −2 < √2 ≈ 1,41 < 1,5.' },
        ],
        commonMistakes: [
          { mistake: '−√5 > −2 sepse √5 > 2.', fix: 'Te numrat negativë renditja kthehet: −2,24 < −2.' },
        ],
        practice: [
          { problem: 'Gjeni një numër racional ndërmjet √2 dhe √3.', solution: 'p.sh. 1,5', steps: ['1,5² = 2,25.', '2 < 2,25 < 3, pra √2 < 1,5 < √3.'] },
          { problem: 'Krahasoni 2√3 dhe 3√2.', solution: '2√3 < 3√2', steps: ['(2√3)² = 12, (3√2)² = 18.', '12 < 18.'] },
          { problem: 'A është π − 3 numër racional?', solution: 'Jo', steps: ['π është iracional.', 'Iracional minus racional mbetet iracional.'] },
        ],
      },
      en: {
        title: 'The real numbers',
        objectives: ['Describe ℝ as the rational and irrational numbers together.', 'Compare and order real numbers, including roots.'],
        theory: 'The real numbers ℝ are all rational and irrational numbers together: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Every point of the number line corresponds to a real number and vice versa.\n\nTo compare roots with decimals, compare the squares (for positive numbers): 3.2² = 10.24 > 10, so √10 < 3.2. For 2√3 and 3√2: (2√3)² = 12 < 18 = (3√2)², so 2√3 < 3√2.\n\nBetween any two real numbers there are infinitely many others, rational and irrational.',
        keyPoints: ['ℝ = ℚ ∪ (irrationals)', 'For a, b > 0: a < b ⟺ a² < b²', 'Infinitely many reals between any two'],
        examples: [
          { example: 'Compare √10 and 3.2.', solution: '3.2² = 10.24 > 10, so √10 < 3.2.' },
          { example: 'Order: 1.5; −√5; √2; −2.', solution: '−√5 ≈ −2.24 < −2 < √2 ≈ 1.41 < 1.5.' },
        ],
        commonMistakes: [
          { mistake: '−√5 > −2 because √5 > 2.', fix: 'For negative numbers the order flips: −2.24 < −2.' },
        ],
        practice: [
          { problem: 'Find a rational number between √2 and √3.', solution: 'e.g. 1.5', steps: ['1.5² = 2.25.', '2 < 2.25 < 3, so √2 < 1.5 < √3.'] },
          { problem: 'Compare 2√3 and 3√2.', solution: '2√3 < 3√2', steps: ['(2√3)² = 12, (3√2)² = 18.', '12 < 18.'] },
          { problem: 'Is π − 3 rational?', solution: 'No', steps: ['π is irrational.', 'Irrational minus rational stays irrational.'] },
        ],
      },
      de: {
        title: 'Die reellen Zahlen',
        objectives: ['ℝ als Gesamtheit der rationalen und irrationalen Zahlen beschreiben.', 'Reelle Zahlen, auch Wurzeln, vergleichen und ordnen.'],
        theory: 'Die reellen Zahlen ℝ sind alle rationalen und irrationalen Zahlen zusammen: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Jedem Punkt der Zahlengeraden entspricht eine reelle Zahl und umgekehrt.\n\nUm Wurzeln mit Dezimalzahlen zu vergleichen, vergleicht man die Quadrate (bei positiven Zahlen): 3,2² = 10,24 > 10, also √10 < 3,2. Für 2√3 und 3√2: (2√3)² = 12 < 18 = (3√2)², also 2√3 < 3√2.\n\nZwischen zwei reellen Zahlen liegen unendlich viele weitere, rationale und irrationale.',
        keyPoints: ['ℝ = ℚ ∪ (irrationale Zahlen)', 'Für a, b > 0: a < b ⟺ a² < b²', 'Zwischen zwei reellen Zahlen unendlich viele'],
        examples: [
          { example: 'Vergleichen Sie √10 und 3,2.', solution: '3,2² = 10,24 > 10, also √10 < 3,2.' },
          { example: 'Ordnen Sie: 1,5; −√5; √2; −2.', solution: '−√5 ≈ −2,24 < −2 < √2 ≈ 1,41 < 1,5.' },
        ],
        commonMistakes: [
          { mistake: '−√5 > −2, weil √5 > 2.', fix: 'Bei negativen Zahlen kehrt sich die Ordnung um: −2,24 < −2.' },
        ],
        practice: [
          { problem: 'Geben Sie eine rationale Zahl zwischen √2 und √3 an.', solution: 'z. B. 1,5', steps: ['1,5² = 2,25.', '2 < 2,25 < 3, also √2 < 1,5 < √3.'] },
          { problem: 'Vergleichen Sie 2√3 und 3√2.', solution: '2√3 < 3√2', steps: ['(2√3)² = 12, (3√2)² = 18.', '12 < 18.'] },
          { problem: 'Ist π − 3 rational?', solution: 'Nein', steps: ['π ist irrational.', 'Irrational minus rational bleibt irrational.'] },
        ],
      },
    },

    // ───────── 4. Absolute value
    {
      slug: 'g9-number-sets-absolute-value',
      visuals: [{
        type: 'numberLine', min: -2, max: 6, step: 1,
        points: [{ x: 2, label: '2', color: 'muted' }, { x: -1, label: '−1', below: true }, { x: 5, label: '5', below: true }],
        jumps: [{ from: 2, to: 5, label: '3' }, { from: 2, to: -1, label: '3', color: 'secondary' }],
        caption: alt('|x − 2| = 3: pikat në largësi 3 nga 2 janë x = 5 dhe x = −1.', '|x − 2| = 3: the points at distance 3 from 2 are x = 5 and x = −1.', '|x − 2| = 3: Die Punkte im Abstand 3 von 2 sind x = 5 und x = −1.'),
        alt: alt('Boshti numerik: nga 2 hapa prej 3 djathtas te 5 dhe majtas te −1.', 'Number line: steps of 3 from 2 to the right to 5 and to the left to −1.', 'Zahlengerade: Schritte der Länge 3 von 2 nach rechts zu 5 und nach links zu −1.'),
      }],
      answers: {
        examples: [[['abs(-7) + abs(3 - 8)', 12]], [['2 + 3', 5], ['2 - 3', -1]]],
        practice: [[['abs(3 - (-4))', 7]], [['10 / 2', 5], ['-10 / 2', -5]], [['-1', -1]]],
      },
      al: {
        title: 'Vlera absolute',
        objectives: ['Të llogaritni vlerën absolute dhe largësinë ndërmjet dy numrave.', 'Të zgjidhni ekuacione të thjeshta me vlerë absolute.'],
        theory: 'Vlera absolute |a| është largësia e a nga zeroja: |a| = a kur a ≥ 0 dhe |a| = −a kur a < 0. Prandaj |a| ≥ 0 gjithmonë: |−7| = 7.\n\nLargësia ndërmjet a dhe b në boshtin numerik është |a − b|: ndërmjet −4 dhe 3 është |3 − (−4)| = 7.\n\nEkuacioni |x| = k (k > 0) ka dy zgjidhje: x = k ose x = −k. |x − 2| = 3 do të thotë "x është në largësi 3 nga 2": x = 5 ose x = −1. Nëse k = 0 ka një zgjidhje; nëse k < 0 nuk ka zgjidhje.',
        keyPoints: ['|a| ≥ 0;  |−a| = |a|', 'Largësia: |a − b|', '|x − c| = k → x = c ± k (k > 0)'],
        examples: [
          { example: 'Llogaritni |−7| + |3 − 8|.', solution: '7 + |−5| = 7 + 5 = 12.' },
          { example: 'Zgjidhni |x − 2| = 3.', solution: 'x − 2 = 3 ose x − 2 = −3: x = 5 ose x = −1.' },
        ],
        commonMistakes: [
          { mistake: '|x − 2| = 3 → x = 5 (vetëm).', fix: 'Ka dy pika në largësi 3 nga 2: edhe x = −1.' },
          { mistake: '|x| = −4 → x = ±4', fix: 'Vlera absolute nuk është kurrë negative: ekuacioni nuk ka zgjidhje.' },
        ],
        practice: [
          { problem: 'Sa është largësia ndërmjet −4 dhe 3?', solution: '7', steps: ['|3 − (−4)|.', '= 7.'] },
          { problem: 'Zgjidhni |2x| = 10.', solution: 'x = 5 ose x = −5', steps: ['2x = 10 ose 2x = −10.', 'x = ±5.'] },
          { problem: 'Zgjidhni |x + 1| = 0.', solution: 'x = −1', steps: ['Vetëm 0 ka vlerë absolute 0.', 'x + 1 = 0 → x = −1.'] },
        ],
      },
      en: {
        title: 'Absolute value',
        objectives: ['Work out absolute values and the distance between two numbers.', 'Solve simple equations with absolute value.'],
        theory: 'The absolute value |a| is the distance of a from zero: |a| = a when a ≥ 0 and |a| = −a when a < 0. So |a| ≥ 0 always: |−7| = 7.\n\nThe distance between a and b on the number line is |a − b|: between −4 and 3 it is |3 − (−4)| = 7.\n\nThe equation |x| = k (k > 0) has two solutions: x = k or x = −k. |x − 2| = 3 means "x is at distance 3 from 2": x = 5 or x = −1. If k = 0 there is one solution; if k < 0 there is none.',
        keyPoints: ['|a| ≥ 0;  |−a| = |a|', 'Distance: |a − b|', '|x − c| = k → x = c ± k (k > 0)'],
        examples: [
          { example: 'Work out |−7| + |3 − 8|.', solution: '7 + |−5| = 7 + 5 = 12.' },
          { example: 'Solve |x − 2| = 3.', solution: 'x − 2 = 3 or x − 2 = −3: x = 5 or x = −1.' },
        ],
        commonMistakes: [
          { mistake: '|x − 2| = 3 → x = 5 (only).', fix: 'There are two points at distance 3 from 2: x = −1 as well.' },
          { mistake: '|x| = −4 → x = ±4', fix: 'An absolute value is never negative: no solution.' },
        ],
        practice: [
          { problem: 'What is the distance between −4 and 3?', solution: '7', steps: ['|3 − (−4)|.', '= 7.'] },
          { problem: 'Solve |2x| = 10.', solution: 'x = 5 or x = −5', steps: ['2x = 10 or 2x = −10.', 'x = ±5.'] },
          { problem: 'Solve |x + 1| = 0.', solution: 'x = −1', steps: ['Only 0 has absolute value 0.', 'x + 1 = 0 → x = −1.'] },
        ],
      },
      de: {
        title: 'Der Betrag',
        objectives: ['Beträge und den Abstand zweier Zahlen berechnen.', 'Einfache Betragsgleichungen lösen.'],
        theory: 'Der Betrag |a| ist der Abstand von a zur Null: |a| = a für a ≥ 0 und |a| = −a für a < 0. Also ist stets |a| ≥ 0: |−7| = 7.\n\nDer Abstand zwischen a und b auf der Zahlengeraden ist |a − b|: zwischen −4 und 3 beträgt er |3 − (−4)| = 7.\n\nDie Gleichung |x| = k (k > 0) hat zwei Lösungen: x = k oder x = −k. |x − 2| = 3 heißt „x hat von 2 den Abstand 3“: x = 5 oder x = −1. Für k = 0 gibt es eine Lösung, für k < 0 keine.',
        keyPoints: ['|a| ≥ 0;  |−a| = |a|', 'Abstand: |a − b|', '|x − c| = k → x = c ± k (k > 0)'],
        examples: [
          { example: 'Berechnen Sie |−7| + |3 − 8|.', solution: '7 + |−5| = 7 + 5 = 12.' },
          { example: 'Lösen Sie |x − 2| = 3.', solution: 'x − 2 = 3 oder x − 2 = −3: x = 5 oder x = −1.' },
        ],
        commonMistakes: [
          { mistake: '|x − 2| = 3 → x = 5 (nur).', fix: 'Es gibt zwei Punkte im Abstand 3 von 2: auch x = −1.' },
          { mistake: '|x| = −4 → x = ±4', fix: 'Ein Betrag ist nie negativ: keine Lösung.' },
        ],
        practice: [
          { problem: 'Wie groß ist der Abstand zwischen −4 und 3?', solution: '7', steps: ['|3 − (−4)|.', '= 7.'] },
          { problem: 'Lösen Sie |2x| = 10.', solution: 'x = 5 oder x = −5', steps: ['2x = 10 oder 2x = −10.', 'x = ±5.'] },
          { problem: 'Lösen Sie |x + 1| = 0.', solution: 'x = −1', steps: ['Nur 0 hat den Betrag 0.', 'x + 1 = 0 → x = −1.'] },
        ],
      },
    },

    // ───────── 5. Intervals
    {
      slug: 'g9-number-sets-intervals',
      visuals: [{
        type: 'numberLine', min: -3, max: 9, step: 1,
        intervals: [{ from: -2, to: 5, toOpen: true }, { from: 1, to: 8, fromOpen: true, color: 'secondary' }],
        caption: alt('[−2, 5) blu dhe (1, 8] portokalli: prerja është (1, 5), bashkimi [−2, 8].', '[−2, 5) blue and (1, 8] orange: the intersection is (1, 5), the union [−2, 8].', '[−2, 5) blau und (1, 8] orange: Der Schnitt ist (1, 5), die Vereinigung [−2, 8].'),
        alt: alt('Boshti numerik me intervalin [−2, 5) dhe intervalin (1, 8] që mbivendosen nga 1 deri 5.', 'Number line with the interval [−2, 5) and the interval (1, 8] overlapping from 1 to 5.', 'Zahlengerade mit den Intervallen [−2, 5) und (1, 8], die sich von 1 bis 5 überlappen.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', [['3 - (-2)', 5]]],
      },
      al: {
        title: 'Intervalet, prerja dhe bashkimi i tyre',
        objectives: ['Të shkruani bashkësi numrash me shënimin e intervaleve.', 'Të gjeni prerjen dhe bashkimin e dy intervaleve.'],
        theory: 'Intervali [a, b] përmban të gjithë numrat realë nga a deri b, bashkë me skajet; (a, b) pa skajet; [a, b) me a por pa b. Gjysmëdrejtëzat: [3, +∞) = {x | x ≥ 3}, (−∞, 2) = {x | x < 2}. Te ∞ kllapa është gjithmonë e hapur.\n\nNë boshtin numerik: rreth i mbushur për skaj që bën pjesë, rreth i hapur për skaj që nuk bën pjesë.\n\nPrerja përmban numrat që janë në të dy intervalet; bashkimi ata që janë të paktën në njërin. [−2, 5) ∩ (1, 8] = (1, 5); [−2, 5) ∪ (1, 8] = [−2, 8].',
        keyPoints: ['[ ] me skaj;  ( ) pa skaj', 'x ≥ 3 → [3, +∞)', 'Prerja: pjesa e përbashkët; bashkimi: të gjitha'],
        examples: [
          { example: 'Gjeni [−2, 5) ∩ (1, 8].', solution: 'Pjesa e përbashkët është nga 1 (pa të) deri 5 (pa të): (1, 5).' },
          { example: 'Gjeni [−2, 5) ∪ (1, 8].', solution: 'Nga −2 (me të) deri 8 (me të): [−2, 8].' },
        ],
        commonMistakes: [
          { mistake: '[3, +∞]', fix: 'Pafundësia nuk është numër: kllapa është gjithmonë e hapur, [3, +∞).' },
          { mistake: 'Prerja e [−2, 5) dhe (1, 8] është [1, 5].', fix: '1 nuk bën pjesë në (1, 8] dhe 5 nuk bën pjesë në [−2, 5): (1, 5).' },
        ],
        practice: [
          { problem: 'Shkruani x ≥ 3 si interval.', solution: '[3, +∞)', steps: ['3 bën pjesë: kllapë e mbyllur.', '[3, +∞).'] },
          { problem: 'Gjeni (0, 4) ∩ [2, 6].', solution: '[2, 4)', steps: ['Pjesa e përbashkët: nga 2 deri 4.', '2 bën pjesë, 4 jo: [2, 4).'] },
          { problem: 'Sa numra të plotë ka në (−2, 3]?', solution: '5', steps: ['−1, 0, 1, 2, 3.', '5 numra.'] },
        ],
      },
      en: {
        title: 'Intervals, their intersection and union',
        objectives: ['Write sets of numbers in interval notation.', 'Find the intersection and union of two intervals.'],
        theory: 'The interval [a, b] contains all real numbers from a to b including the ends; (a, b) without the ends; [a, b) with a but not b. Half-lines: [3, +∞) = {x | x ≥ 3}, (−∞, 2) = {x | x < 2}. At ∞ the bracket is always open.\n\nOn the number line: a filled circle for an end that is included, an open circle for one that is not.\n\nThe intersection contains the numbers in both intervals; the union those in at least one. [−2, 5) ∩ (1, 8] = (1, 5); [−2, 5) ∪ (1, 8] = [−2, 8].',
        keyPoints: ['[ ] includes the end;  ( ) excludes it', 'x ≥ 3 → [3, +∞)', 'Intersection: the overlap; union: everything'],
        examples: [
          { example: 'Find [−2, 5) ∩ (1, 8].', solution: 'The overlap runs from 1 (excluded) to 5 (excluded): (1, 5).' },
          { example: 'Find [−2, 5) ∪ (1, 8].', solution: 'From −2 (included) to 8 (included): [−2, 8].' },
        ],
        commonMistakes: [
          { mistake: '[3, +∞]', fix: 'Infinity is not a number: the bracket is always open, [3, +∞).' },
          { mistake: 'The intersection of [−2, 5) and (1, 8] is [1, 5].', fix: '1 is not in (1, 8] and 5 is not in [−2, 5): (1, 5).' },
        ],
        practice: [
          { problem: 'Write x ≥ 3 as an interval.', solution: '[3, +∞)', steps: ['3 is included: closed bracket.', '[3, +∞).'] },
          { problem: 'Find (0, 4) ∩ [2, 6].', solution: '[2, 4)', steps: ['The overlap runs from 2 to 4.', '2 is included, 4 is not: [2, 4).'] },
          { problem: 'How many integers are in (−2, 3]?', solution: '5', steps: ['−1, 0, 1, 2, 3.', '5 integers.'] },
        ],
      },
      de: {
        title: 'Intervalle, Schnitt und Vereinigung',
        objectives: ['Zahlenmengen in Intervallschreibweise angeben.', 'Schnitt- und Vereinigungsmenge zweier Intervalle bestimmen.'],
        theory: 'Das Intervall [a, b] enthält alle reellen Zahlen von a bis b einschließlich der Ränder; (a, b) ohne die Ränder; [a, b) mit a, aber ohne b. Halbgeraden: [3, +∞) = {x | x ≥ 3}, (−∞, 2) = {x | x < 2}. Bei ∞ ist die Klammer immer offen.\n\nAuf der Zahlengeraden: gefüllter Kreis für einen Rand, der dazugehört, offener Kreis für einen, der nicht dazugehört.\n\nDer Schnitt enthält die Zahlen, die in beiden Intervallen liegen, die Vereinigung die, die in mindestens einem liegen. [−2, 5) ∩ (1, 8] = (1, 5); [−2, 5) ∪ (1, 8] = [−2, 8].',
        keyPoints: ['[ ] mit Rand;  ( ) ohne Rand', 'x ≥ 3 → [3, +∞)', 'Schnitt: Überlappung; Vereinigung: alles'],
        examples: [
          { example: 'Bestimmen Sie [−2, 5) ∩ (1, 8].', solution: 'Die Überlappung reicht von 1 (ohne) bis 5 (ohne): (1, 5).' },
          { example: 'Bestimmen Sie [−2, 5) ∪ (1, 8].', solution: 'Von −2 (mit) bis 8 (mit): [−2, 8].' },
        ],
        commonMistakes: [
          { mistake: '[3, +∞]', fix: 'Unendlich ist keine Zahl: Die Klammer ist immer offen, [3, +∞).' },
          { mistake: 'Der Schnitt von [−2, 5) und (1, 8] ist [1, 5].', fix: '1 liegt nicht in (1, 8] und 5 nicht in [−2, 5): (1, 5).' },
        ],
        practice: [
          { problem: 'Schreiben Sie x ≥ 3 als Intervall.', solution: '[3, +∞)', steps: ['3 gehört dazu: eckige Klammer.', '[3, +∞).'] },
          { problem: 'Bestimmen Sie (0, 4) ∩ [2, 6].', solution: '[2, 4)', steps: ['Die Überlappung reicht von 2 bis 4.', '2 gehört dazu, 4 nicht: [2, 4).'] },
          { problem: 'Wie viele ganze Zahlen liegen in (−2, 3]?', solution: '5', steps: ['−1, 0, 1, 2, 3.', '5 Zahlen.'] },
        ],
      },
    },
  ],
};
