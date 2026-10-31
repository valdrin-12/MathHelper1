// Grade 8 · Theme 1: Number sense (8 hours)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g8-number-sense',
  i18n: {
    al: { title: 'Kuptimi i numrit', description: 'Bashkësitë, prerja dhe bashkimi, bashkësitë numerike, numrat dhjetorë periodikë, fuqitë me eksponent të plotë dhe shkrimi shkencor.' },
    en: { title: 'Number sense', description: 'Sets, intersection and union, number sets, recurring decimals, integer exponents and standard form.' },
    de: { title: 'Zahlverständnis', description: 'Mengen, Schnitt- und Vereinigungsmenge, Zahlenmengen, periodische Dezimalzahlen, ganzzahlige Exponenten und wissenschaftliche Schreibweise.' },
  },
  lessons: [
    // ───────── 1. Sets
    {
      slug: 'g8-number-sense-sets',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Simboli', 'Symbol', 'Zeichen'), cells: ['∈', '∉', '⊂', '∅'] },
          { head: alt('Lexohet', 'Read as', 'Gelesen'), cells: [alt('i përket', 'is an element of', 'ist Element von'), alt('nuk i përket', 'is not an element of', 'ist kein Element von'), alt('nënbashkësi', 'subset of', 'Teilmenge von'), alt('bashkësia boshe', 'empty set', 'leere Menge')] },
          { head: alt('Shembull', 'Example', 'Beispiel'), cells: ['3 ∈ {1, 3, 5}', '2 ∉ {1, 3, 5}', '{1, 3} ⊂ {1, 3, 5}', '{ } = ∅'] },
        ],
        alt: alt('Tabela e simboleve të bashkësive: ∈, ∉, ⊂, ∅ me shembuj.', 'Table of set symbols: ∈, ∉, ⊂, ∅ with examples.', 'Tabelle der Mengenzeichen: ∈, ∉, ⊂, ∅ mit Beispielen.'),
      }],
      answers: {
        examples: [[['6', 6]], 'text'],
        practice: [[['5', 5]], [['2^2', 4]], 'text'],
      },
      al: {
        title: 'Bashkësitë',
        objectives: ['Të shkruani një bashkësi me numërim dhe me veti karakteristike.', 'Të përdorni simbolet ∈, ∉, ⊂ dhe ∅.'],
        theory: 'Bashkësia është një grumbull objektesh të përcaktuara qartë, që quhen elemente. Shkruhet me kllapa gjarpërushe: A = {1, 2, 3, 6}. Renditja nuk ka rëndësi dhe çdo element shkruhet një herë.\n\nNjë bashkësi jepet me numërim (duke shkruar elementet) ose me veti karakteristike: A = {x | x është pjesëtues i 6}. Simboli ∈ do të thotë "i përket": 2 ∈ A; ∉ "nuk i përket": 5 ∉ A.\n\nB është nënbashkësi e A (B ⊂ A) kur çdo element i B është edhe në A. Bashkësia pa asnjë element quhet bashkësi boshe, ∅. Bashkësia me n elemente ka 2ⁿ nënbashkësi.',
        keyPoints: ['A = {…}: elementet një herë, renditja s\'ka rëndësi', 'x ∈ A: x i përket A', 'B ⊂ A: çdo element i B është në A; ∅ është bashkësia boshe'],
        examples: [
          { example: 'Shkruani me numërim bashkësinë e pjesëtuesve të 12. Sa elemente ka?', solution: 'D = {1, 2, 3, 4, 6, 12}; ka 6 elemente.' },
          { example: 'A është {2, 4} nënbashkësi e {1, 2, 3, 4}?', solution: 'Po: 2 dhe 4 janë të dy në bashkësinë e madhe, pra {2, 4} ⊂ {1, 2, 3, 4}.' },
        ],
        commonMistakes: [
          { mistake: '{1, 2, 2, 3} ka 4 elemente.', fix: 'Elementet e përsëritura numërohen një herë: {1, 2, 3} ka 3 elemente.' },
          { mistake: 'Shkruhet 2 ⊂ {1, 2}.', fix: 'Për element përdoret ∈: 2 ∈ {1, 2}; ⊂ është për bashkësi: {2} ⊂ {1, 2}.' },
        ],
        practice: [
          { problem: 'Shkruani bashkësinë e numrave çift ndërmjet 1 dhe 11. Sa elemente ka?', solution: '{2, 4, 6, 8, 10}; 5 elemente', steps: ['Numrat çift: 2, 4, 6, 8, 10.', 'Gjithsej 5 elemente.'] },
          { problem: 'Shkruani të gjitha nënbashkësitë e {a, b}. Sa janë?', solution: '∅, {a}, {b}, {a, b}: 4', steps: ['Me 0, 1 dhe 2 elemente.', '2² = 4 nënbashkësi.'] },
          { problem: 'Plotësoni me ∈ ose ∉: 7 … {1, 3, 5}.', solution: '7 ∉ {1, 3, 5}', steps: ['7 nuk është në listë.', 'Prandaj ∉.'] },
        ],
      },
      en: {
        title: 'Sets',
        objectives: ['Write a set by listing and by a describing property.', 'Use the symbols ∈, ∉, ⊂ and ∅.'],
        theory: 'A set is a collection of clearly defined objects, called elements. It is written in curly brackets: A = {1, 2, 3, 6}. The order does not matter and each element is written once.\n\nA set is given by listing (writing its elements) or by a property: A = {x | x is a factor of 6}. The symbol ∈ means "is an element of": 2 ∈ A; ∉ "is not an element of": 5 ∉ A.\n\nB is a subset of A (B ⊂ A) when every element of B is also in A. The set with no elements is the empty set, ∅. A set with n elements has 2ⁿ subsets.',
        keyPoints: ['A = {…}: each element once, order does not matter', 'x ∈ A: x is an element of A', 'B ⊂ A: every element of B is in A; ∅ is the empty set'],
        examples: [
          { example: 'List the set of factors of 12. How many elements does it have?', solution: 'D = {1, 2, 3, 4, 6, 12}; it has 6 elements.' },
          { example: 'Is {2, 4} a subset of {1, 2, 3, 4}?', solution: 'Yes: 2 and 4 are both in the larger set, so {2, 4} ⊂ {1, 2, 3, 4}.' },
        ],
        commonMistakes: [
          { mistake: '{1, 2, 2, 3} has 4 elements.', fix: 'Repeated elements count once: {1, 2, 3} has 3 elements.' },
          { mistake: 'Writing 2 ⊂ {1, 2}.', fix: 'Use ∈ for an element: 2 ∈ {1, 2}; ⊂ is for sets: {2} ⊂ {1, 2}.' },
        ],
        practice: [
          { problem: 'Write the set of even numbers between 1 and 11. How many elements does it have?', solution: '{2, 4, 6, 8, 10}; 5 elements', steps: ['Even numbers: 2, 4, 6, 8, 10.', '5 elements in total.'] },
          { problem: 'Write all subsets of {a, b}. How many are there?', solution: '∅, {a}, {b}, {a, b}: 4', steps: ['With 0, 1 and 2 elements.', '2² = 4 subsets.'] },
          { problem: 'Fill in ∈ or ∉: 7 … {1, 3, 5}.', solution: '7 ∉ {1, 3, 5}', steps: ['7 is not in the list.', 'So ∉.'] },
        ],
      },
      de: {
        title: 'Mengen',
        objectives: ['Eine Menge aufzählend und beschreibend angeben.', 'Die Zeichen ∈, ∉, ⊂ und ∅ verwenden.'],
        theory: 'Eine Menge ist eine Zusammenfassung klar bestimmter Objekte, der Elemente. Man schreibt sie in geschweiften Klammern: A = {1, 2, 3, 6}. Die Reihenfolge spielt keine Rolle, jedes Element wird einmal geschrieben.\n\nEine Menge gibt man aufzählend (Elemente auflisten) oder beschreibend an: A = {x | x ist Teiler von 6}. Das Zeichen ∈ bedeutet „ist Element von“: 2 ∈ A; ∉ „ist kein Element von“: 5 ∉ A.\n\nB ist Teilmenge von A (B ⊂ A), wenn jedes Element von B auch in A liegt. Die Menge ohne Elemente heißt leere Menge, ∅. Eine Menge mit n Elementen hat 2ⁿ Teilmengen.',
        keyPoints: ['A = {…}: jedes Element einmal, Reihenfolge egal', 'x ∈ A: x ist Element von A', 'B ⊂ A: jedes Element von B liegt in A; ∅ ist die leere Menge'],
        examples: [
          { example: 'Geben Sie die Teilermenge von 12 aufzählend an. Wie viele Elemente hat sie?', solution: 'T = {1, 2, 3, 4, 6, 12}; sie hat 6 Elemente.' },
          { example: 'Ist {2, 4} eine Teilmenge von {1, 2, 3, 4}?', solution: 'Ja: 2 und 4 liegen beide in der größeren Menge, also {2, 4} ⊂ {1, 2, 3, 4}.' },
        ],
        commonMistakes: [
          { mistake: '{1, 2, 2, 3} hat 4 Elemente.', fix: 'Doppelte Elemente zählen einmal: {1, 2, 3} hat 3 Elemente.' },
          { mistake: 'Man schreibt 2 ⊂ {1, 2}.', fix: 'Für ein Element steht ∈: 2 ∈ {1, 2}; ⊂ gilt für Mengen: {2} ⊂ {1, 2}.' },
        ],
        practice: [
          { problem: 'Geben Sie die Menge der geraden Zahlen zwischen 1 und 11 an. Wie viele Elemente hat sie?', solution: '{2, 4, 6, 8, 10}; 5 Elemente', steps: ['Gerade Zahlen: 2, 4, 6, 8, 10.', 'Insgesamt 5 Elemente.'] },
          { problem: 'Schreiben Sie alle Teilmengen von {a, b} auf. Wie viele sind es?', solution: '∅, {a}, {b}, {a, b}: 4', steps: ['Mit 0, 1 und 2 Elementen.', '2² = 4 Teilmengen.'] },
          { problem: 'Setzen Sie ∈ oder ∉ ein: 7 … {1, 3, 5}.', solution: '7 ∉ {1, 3, 5}', steps: ['7 steht nicht in der Liste.', 'Also ∉.'] },
        ],
      },
    },

    // ───────── 2. Intersection and union
    {
      slug: 'g8-number-sense-intersection-union',
      visuals: [{
        type: 'vennDiagram',
        a: { label: 'A', only: '1, 2' },
        b: { label: 'B', only: '5' },
        both: '3, 4',
        caption: alt('A = {1, 2, 3, 4}, B = {3, 4, 5}: A ∩ B = {3, 4} (në mes), A ∪ B = {1, 2, 3, 4, 5} (të gjitha).', 'A = {1, 2, 3, 4}, B = {3, 4, 5}: A ∩ B = {3, 4} (the middle), A ∪ B = {1, 2, 3, 4, 5} (everything).', 'A = {1, 2, 3, 4}, B = {3, 4, 5}: A ∩ B = {3, 4} (die Mitte), A ∪ B = {1, 2, 3, 4, 5} (alles).'),
        alt: alt('Diagram Veni: vetëm A: 1, 2; vetëm B: 5; te të dyja: 3, 4.', 'Venn diagram: only A: 1, 2; only B: 5; both: 3, 4.', 'Venn-Diagramm: nur A: 1, 2; nur B: 5; beide: 3, 4.'),
      }],
      answers: {
        examples: ['text', [['4 + 3 - 2', 5]]],
        practice: ['text', 'text', [['18 + 12 - 5', 25], ['30 - 25', 5]]],
      },
      al: {
        title: 'Prerja dhe bashkimi',
        objectives: ['Të gjeni prerjen, bashkimin dhe ndryshimin e dy bashkësive.', 'Të zgjidhni probleme numërimi me diagram Veni.'],
        theory: 'Prerja A ∩ B përmban elementet që janë njëkohësisht në A dhe në B. Bashkimi A ∪ B përmban elementet që janë të paktën në njërën prej tyre. Ndryshimi A \\ B përmban elementet e A që nuk janë në B.\n\nPër A = {1, 2, 3, 4} dhe B = {3, 4, 5}: A ∩ B = {3, 4}, A ∪ B = {1, 2, 3, 4, 5}, A \\ B = {1, 2}. Nëse A ∩ B = ∅, bashkësitë quhen të ndara (disjunkte).\n\nNumri i elementeve të bashkimit: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Prerjen e zbresim sepse përndryshe numërohet dy herë.',
        keyPoints: ['A ∩ B: në A dhe në B', 'A ∪ B: në A ose në B (ose në të dyja)', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)'],
        examples: [
          { example: 'A = {1, 2, 3, 4}, B = {3, 4, 5}. Gjeni A ∩ B, A ∪ B dhe A \\ B.', solution: 'A ∩ B = {3, 4}; A ∪ B = {1, 2, 3, 4, 5}; A \\ B = {1, 2}.' },
          { example: 'Sa elemente ka A ∪ B për bashkësitë e mësipërme, me formulë?', solution: 'n(A ∪ B) = 4 + 3 − 2 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'A ∪ B = {1, 2, 3, 4, 3, 4, 5}', fix: 'Elementet e përbashkëta shkruhen një herë: {1, 2, 3, 4, 5}.' },
          { mistake: 'n(A ∪ B) = n(A) + n(B)', fix: 'Duhet zbritur prerja, përndryshe numërohet dy herë.' },
        ],
        practice: [
          { problem: 'A = {2, 4, 6, 8}, B = {1, 2, 3, 4}. Gjeni A ∩ B.', solution: '{2, 4}', steps: ['Elementet në të dyja: 2 dhe 4.', 'A ∩ B = {2, 4}.'] },
          { problem: 'Për të njëjtat bashkësi gjeni A \\ B.', solution: '{6, 8}', steps: ['Nga A heqim 2 dhe 4.', 'A \\ B = {6, 8}.'] },
          { problem: 'Në një klasë me 30 nxënës, 18 luajnë futboll, 12 basketboll dhe 5 të dyja. Sa luajnë të paktën një? Sa asnjërën?', solution: '25; 5', steps: ['18 + 12 − 5 = 25.', '30 − 25 = 5 nuk luajnë asnjërën.'] },
        ],
      },
      en: {
        title: 'Intersection and union',
        objectives: ['Find the intersection, union and difference of two sets.', 'Solve counting problems with a Venn diagram.'],
        theory: 'The intersection A ∩ B contains the elements that are in both A and B. The union A ∪ B contains the elements that are in at least one of them. The difference A \\ B contains the elements of A that are not in B.\n\nFor A = {1, 2, 3, 4} and B = {3, 4, 5}: A ∩ B = {3, 4}, A ∪ B = {1, 2, 3, 4, 5}, A \\ B = {1, 2}. If A ∩ B = ∅, the sets are called disjoint.\n\nNumber of elements of the union: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). We subtract the intersection because otherwise it is counted twice.',
        keyPoints: ['A ∩ B: in A and in B', 'A ∪ B: in A or in B (or both)', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)'],
        examples: [
          { example: 'A = {1, 2, 3, 4}, B = {3, 4, 5}. Find A ∩ B, A ∪ B and A \\ B.', solution: 'A ∩ B = {3, 4}; A ∪ B = {1, 2, 3, 4, 5}; A \\ B = {1, 2}.' },
          { example: 'How many elements does A ∪ B have for these sets, using the formula?', solution: 'n(A ∪ B) = 4 + 3 − 2 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'A ∪ B = {1, 2, 3, 4, 3, 4, 5}', fix: 'Common elements are written once: {1, 2, 3, 4, 5}.' },
          { mistake: 'n(A ∪ B) = n(A) + n(B)', fix: 'Subtract the intersection, otherwise it is counted twice.' },
        ],
        practice: [
          { problem: 'A = {2, 4, 6, 8}, B = {1, 2, 3, 4}. Find A ∩ B.', solution: '{2, 4}', steps: ['Elements in both: 2 and 4.', 'A ∩ B = {2, 4}.'] },
          { problem: 'For the same sets find A \\ B.', solution: '{6, 8}', steps: ['Remove 2 and 4 from A.', 'A \\ B = {6, 8}.'] },
          { problem: 'In a class of 30 students, 18 play football, 12 play basketball and 5 play both. How many play at least one? How many play neither?', solution: '25; 5', steps: ['18 + 12 − 5 = 25.', '30 − 25 = 5 play neither.'] },
        ],
      },
      de: {
        title: 'Schnitt- und Vereinigungsmenge',
        objectives: ['Schnittmenge, Vereinigungsmenge und Differenzmenge zweier Mengen bestimmen.', 'Zählaufgaben mit einem Venn-Diagramm lösen.'],
        theory: 'Die Schnittmenge A ∩ B enthält die Elemente, die in A und in B liegen. Die Vereinigungsmenge A ∪ B enthält die Elemente, die in mindestens einer der beiden liegen. Die Differenzmenge A \\ B enthält die Elemente von A, die nicht in B liegen.\n\nFür A = {1, 2, 3, 4} und B = {3, 4, 5}: A ∩ B = {3, 4}, A ∪ B = {1, 2, 3, 4, 5}, A \\ B = {1, 2}. Ist A ∩ B = ∅, heißen die Mengen disjunkt.\n\nAnzahl der Elemente der Vereinigung: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Die Schnittmenge wird abgezogen, sonst zählt sie doppelt.',
        keyPoints: ['A ∩ B: in A und in B', 'A ∪ B: in A oder in B (oder beiden)', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)'],
        examples: [
          { example: 'A = {1, 2, 3, 4}, B = {3, 4, 5}. Bestimmen Sie A ∩ B, A ∪ B und A \\ B.', solution: 'A ∩ B = {3, 4}; A ∪ B = {1, 2, 3, 4, 5}; A \\ B = {1, 2}.' },
          { example: 'Wie viele Elemente hat A ∪ B für diese Mengen, mit der Formel?', solution: 'n(A ∪ B) = 4 + 3 − 2 = 5.' },
        ],
        commonMistakes: [
          { mistake: 'A ∪ B = {1, 2, 3, 4, 3, 4, 5}', fix: 'Gemeinsame Elemente schreibt man einmal: {1, 2, 3, 4, 5}.' },
          { mistake: 'n(A ∪ B) = n(A) + n(B)', fix: 'Die Schnittmenge abziehen, sonst zählt sie doppelt.' },
        ],
        practice: [
          { problem: 'A = {2, 4, 6, 8}, B = {1, 2, 3, 4}. Bestimmen Sie A ∩ B.', solution: '{2, 4}', steps: ['Elemente in beiden: 2 und 4.', 'A ∩ B = {2, 4}.'] },
          { problem: 'Bestimmen Sie für dieselben Mengen A \\ B.', solution: '{6, 8}', steps: ['Aus A 2 und 4 entfernen.', 'A \\ B = {6, 8}.'] },
          { problem: 'In einer Klasse mit 30 Schülern spielen 18 Fußball, 12 Basketball und 5 beides. Wie viele spielen mindestens eins? Wie viele keins?', solution: '25; 5', steps: ['18 + 12 − 5 = 25.', '30 − 25 = 5 spielen keins.'] },
        ],
      },
    },

    // ───────── 3. Number sets
    {
      slug: 'g8-number-sense-number-sets',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Bashkësia', 'Set', 'Menge'), cells: ['ℕ', 'ℤ', 'ℚ', 'ℝ \\ ℚ'] },
          { head: alt('Emri', 'Name', 'Name'), cells: [alt('natyrorë', 'natural', 'natürlich'), alt('të plotë', 'integers', 'ganz'), alt('racionalë', 'rational', 'rational'), alt('iracionalë', 'irrational', 'irrational')] },
          { head: alt('Shembuj', 'Examples', 'Beispiele'), cells: ['1, 2, 3', '−3, 0, 5', alt('3/4; −0,5', '3/4; −0.5', '3/4; −0,5'), '√2, π'] },
        ],
        caption: alt('ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; numrat realë janë racionalët së bashku me iracionalët.', 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; the real numbers are the rationals together with the irrationals.', 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; die reellen Zahlen sind die rationalen zusammen mit den irrationalen.'),
        alt: alt('Tabela e bashkësive numerike ℕ, ℤ, ℚ dhe iracionalëve me shembuj.', 'Table of the number sets ℕ, ℤ, ℚ and the irrationals with examples.', 'Tabelle der Zahlenmengen ℕ, ℤ, ℚ und der irrationalen Zahlen mit Beispielen.'),
      }],
      answers: {
        examples: ['text', [['3 / 4', 0.75]]],
        practice: [[['sqrt(16)', 4]], 'text', [['5 / 2', 2.5, 1e-9, '5/2']]],
      },
      al: {
        title: 'Bashkësitë numerike',
        objectives: ['Të dalloni numrat natyrorë, të plotë, racionalë dhe iracionalë.', 'Të vendosni një numër në bashkësinë më të vogël që e përmban.'],
        theory: 'Numrat natyrorë ℕ = {1, 2, 3, …} përdoren për numërim. Numrat e plotë ℤ = {…, −2, −1, 0, 1, 2, …} shtojnë zeron dhe numrat negativë.\n\nNumrat racionalë ℚ janë ata që shkruhen si thyesë a/b me a, b të plotë dhe b ≠ 0: 3/4, −5, 0,75 = 3/4. Çdo numër racional ka trajtë dhjetore të fundme ose periodike.\n\nNumrat iracionalë nuk mund të shkruhen si thyesë; trajta e tyre dhjetore është e pafundme dhe jo periodike: √2 = 1,4142…, π = 3,1415…. Racionalët dhe iracionalët së bashku formojnë numrat realë ℝ. Vlen: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.',
        keyPoints: ['ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ', 'Racional: a/b; dhjetor i fundëm ose periodik', 'Iracional: dhjetor i pafundëm jo periodik (√2, π)'],
        examples: [
          { example: 'Në cilat bashkësi bën pjesë −3?', solution: '−3 ∈ ℤ, −3 ∈ ℚ, −3 ∈ ℝ, por −3 ∉ ℕ.' },
          { example: 'Tregoni se 0,75 është numër racional.', solution: '0,75 = 75/100 = 3/4, pra mund të shkruhet si thyesë.' },
        ],
        commonMistakes: [
          { mistake: 'Çdo rrënjë është numër iracional.', fix: '√16 = 4 është numër natyror; iracionale janë rrënjët e numrave që nuk janë katrorë të plotë.' },
          { mistake: 'π = 3,14 saktësisht.', fix: '3,14 është vetëm afrim; π është iracional.' },
        ],
        practice: [
          { problem: 'A është √16 numër racional?', solution: 'Po, √16 = 4', steps: ['4 · 4 = 16.', '4 = 4/1 është racional.'] },
          { problem: 'Cila është bashkësia më e vogël që përmban −7?', solution: 'ℤ', steps: ['−7 nuk është natyror.', '−7 është i plotë, pra ℤ.'] },
          { problem: 'Shkruani 2,5 si thyesë të pathjeshtueshme.', solution: '5/2', steps: ['2,5 = 25/10.', '= 5/2.'] },
        ],
      },
      en: {
        title: 'Number sets',
        objectives: ['Tell natural numbers, integers, rational and irrational numbers apart.', 'Place a number in the smallest set that contains it.'],
        theory: 'The natural numbers ℕ = {1, 2, 3, …} are used for counting. The integers ℤ = {…, −2, −1, 0, 1, 2, …} add zero and the negative numbers.\n\nRational numbers ℚ are those that can be written as a fraction a/b with whole numbers a, b and b ≠ 0: 3/4, −5, 0.75 = 3/4. Every rational number has a terminating or a recurring decimal.\n\nIrrational numbers cannot be written as a fraction; their decimal goes on forever without repeating: √2 = 1.4142…, π = 3.1415…. Rationals and irrationals together form the real numbers ℝ. We have ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.',
        keyPoints: ['ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ', 'Rational: a/b; terminating or recurring decimal', 'Irrational: endless, non-repeating decimal (√2, π)'],
        examples: [
          { example: 'Which sets does −3 belong to?', solution: '−3 ∈ ℤ, −3 ∈ ℚ, −3 ∈ ℝ, but −3 ∉ ℕ.' },
          { example: 'Show that 0.75 is a rational number.', solution: '0.75 = 75/100 = 3/4, so it can be written as a fraction.' },
        ],
        commonMistakes: [
          { mistake: 'Every square root is irrational.', fix: '√16 = 4 is a natural number; only roots of numbers that are not perfect squares are irrational.' },
          { mistake: 'π = 3.14 exactly.', fix: '3.14 is only an approximation; π is irrational.' },
        ],
        practice: [
          { problem: 'Is √16 a rational number?', solution: 'Yes, √16 = 4', steps: ['4 · 4 = 16.', '4 = 4/1 is rational.'] },
          { problem: 'What is the smallest set that contains −7?', solution: 'ℤ', steps: ['−7 is not natural.', '−7 is an integer, so ℤ.'] },
          { problem: 'Write 2.5 as a fraction in its simplest form.', solution: '5/2', steps: ['2.5 = 25/10.', '= 5/2.'] },
        ],
      },
      de: {
        title: 'Zahlenmengen',
        objectives: ['Natürliche, ganze, rationale und irrationale Zahlen unterscheiden.', 'Eine Zahl der kleinsten Menge zuordnen, die sie enthält.'],
        theory: 'Die natürlichen Zahlen ℕ = {1, 2, 3, …} dienen zum Zählen. Die ganzen Zahlen ℤ = {…, −2, −1, 0, 1, 2, …} ergänzen die Null und die negativen Zahlen.\n\nRationale Zahlen ℚ lassen sich als Bruch a/b mit ganzen Zahlen a, b und b ≠ 0 schreiben: 3/4, −5, 0,75 = 3/4. Jede rationale Zahl hat eine abbrechende oder periodische Dezimaldarstellung.\n\nIrrationale Zahlen lassen sich nicht als Bruch schreiben; ihre Dezimaldarstellung ist unendlich und nicht periodisch: √2 = 1,4142…, π = 3,1415…. Rationale und irrationale Zahlen bilden zusammen die reellen Zahlen ℝ. Es gilt ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.',
        keyPoints: ['ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ', 'Rational: a/b; abbrechend oder periodisch', 'Irrational: unendlich, nicht periodisch (√2, π)'],
        examples: [
          { example: 'Zu welchen Mengen gehört −3?', solution: '−3 ∈ ℤ, −3 ∈ ℚ, −3 ∈ ℝ, aber −3 ∉ ℕ.' },
          { example: 'Zeigen Sie, dass 0,75 rational ist.', solution: '0,75 = 75/100 = 3/4, also als Bruch darstellbar.' },
        ],
        commonMistakes: [
          { mistake: 'Jede Wurzel ist irrational.', fix: '√16 = 4 ist natürlich; irrational sind nur Wurzeln aus Zahlen, die keine Quadratzahlen sind.' },
          { mistake: 'π = 3,14 genau.', fix: '3,14 ist nur ein Näherungswert; π ist irrational.' },
        ],
        practice: [
          { problem: 'Ist √16 eine rationale Zahl?', solution: 'Ja, √16 = 4', steps: ['4 · 4 = 16.', '4 = 4/1 ist rational.'] },
          { problem: 'Welches ist die kleinste Menge, die −7 enthält?', solution: 'ℤ', steps: ['−7 ist nicht natürlich.', '−7 ist ganz, also ℤ.'] },
          { problem: 'Schreiben Sie 2,5 als vollständig gekürzten Bruch.', solution: '5/2', steps: ['2,5 = 25/10.', '= 5/2.'] },
        ],
      },
    },

    // ───────── 4. Recurring decimals
    {
      slug: 'g8-number-sense-repeating-decimals',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Hapi', 'Step', 'Schritt'), cells: ['20 : 11', '90 : 11', '20 : 11', '90 : 11'] },
          { head: alt('Shifra', 'Digit', 'Ziffer'), cells: ['1', '8', '1', '8'] },
          { head: alt('Mbetja', 'Remainder', 'Rest'), cells: ['9', '2', '9', '2'] },
        ],
        highlight: [[2, 1]],
        caption: alt('2 : 11: mbetja 2 përsëritet, prandaj edhe shifrat 1, 8 përsëriten: 2/11 = 0,1818… = 0,(18).', '2 ÷ 11: the remainder 2 comes back, so the digits 1, 8 repeat: 2/11 = 0.1818… = 0.(18).', '2 : 11: Der Rest 2 kehrt wieder, also wiederholen sich die Ziffern 1, 8: 2/11 = 0,1818… = 0,(18).'),
        alt: alt('Tabela e pjesëtimit 2 : 11 me mbetjet 9, 2, 9, 2 dhe shifrat 1, 8, 1, 8.', 'Table of the division 2 ÷ 11 with remainders 9, 2, 9, 2 and digits 1, 8, 1, 8.', 'Tabelle der Division 2 : 11 mit den Resten 9, 2, 9, 2 und den Ziffern 1, 8, 1, 8.'),
      }],
      answers: {
        examples: [[['2 / 11', 0.1818, 0.0001, '0.(18)']], [['27 / 99', '3/11', 1e-9, '3/11']]],
        practice: [[['4 / 9', 0.4444, 0.0001, '0.(4)']], [['6 / 9', '2/3', 1e-9, '2/3']], [['45 / 99', '5/11', 1e-9, '5/11']]],
      },
      al: {
        title: 'Numrat dhjetorë periodikë',
        objectives: ['Të shndërroni një thyesë në numër dhjetor periodik.', 'Të shndërroni një numër dhjetor periodik të thjeshtë në thyesë.'],
        theory: 'Kur pjesëtojmë numëruesin me emëruesin, ose pjesëtimi mbaron (3/4 = 0,75), ose një mbetje përsëritet dhe atëherë përsëriten edhe shifrat. Pjesa që përsëritet quhet periodë dhe shkruhet në kllapa: 2/11 = 0,1818… = 0,(18); 1/3 = 0,(3).\n\nNjë thyesë e thjeshtuar jep dhjetor të fundëm vetëm kur emëruesi ka si faktorë të thjeshtë vetëm 2 dhe 5.\n\nShndërrimi i kundërt për periodë që fillon menjëherë pas presjes: perioda mbi aq nënta sa shifra ka perioda. 0,(6) = 6/9 = 2/3; 0,(27) = 27/99 = 3/11.',
        keyPoints: ['Mbetje e përsëritur → periodë: 0,(18) = 0,1818…', 'Emërues vetëm me 2 dhe 5 → dhjetor i fundëm', '0,(ab) = ab/99;  0,(a) = a/9'],
        examples: [
          { example: 'Shkruani 2/11 si numër dhjetor.', solution: '2 : 11 = 0,1818…; mbetjet 9 dhe 2 përsëriten, pra 2/11 = 0,(18).' },
          { example: 'Shkruani 0,(27) si thyesë.', solution: 'Perioda ka 2 shifra: 27/99 = 3/11.' },
        ],
        commonMistakes: [
          { mistake: '0,(27) = 27/100', fix: '27/100 = 0,27 (dhjetor i fundëm). Për periodën përdoren nënta: 27/99.' },
        ],
        practice: [
          { problem: 'Shkruani 4/9 si numër dhjetor.', solution: '0,(4)', steps: ['4 : 9 = 0,444…', '= 0,(4).'] },
          { problem: 'Shkruani 0,(6) si thyesë të thjeshtuar.', solution: '2/3', steps: ['0,(6) = 6/9.', '6/9 = 2/3.'] },
          { problem: 'Shkruani 0,(45) si thyesë të thjeshtuar.', solution: '5/11', steps: ['0,(45) = 45/99.', 'Thjeshtojmë me 9: 5/11.'] },
        ],
      },
      en: {
        title: 'Recurring decimals',
        objectives: ['Change a fraction into a recurring decimal.', 'Change a simple recurring decimal into a fraction.'],
        theory: 'When we divide the numerator by the denominator, either the division stops (3/4 = 0.75) or a remainder comes back, and then the digits repeat too. The repeating part is the period, written in brackets here: 2/11 = 0.1818… = 0.(18); 1/3 = 0.(3). (It is also written with a dot or bar over the repeating digits.)\n\nA fraction in its simplest form gives a terminating decimal only when the denominator has no prime factors other than 2 and 5.\n\nThe reverse, for a period starting right after the point: the period over as many nines as it has digits. 0.(6) = 6/9 = 2/3; 0.(27) = 27/99 = 3/11.',
        keyPoints: ['Repeating remainder → period: 0.(18) = 0.1818…', 'Denominator only with 2 and 5 → terminating decimal', '0.(ab) = ab/99;  0.(a) = a/9'],
        examples: [
          { example: 'Write 2/11 as a decimal.', solution: '2 ÷ 11 = 0.1818…; the remainders 9 and 2 repeat, so 2/11 = 0.(18).' },
          { example: 'Write 0.(27) as a fraction.', solution: 'The period has 2 digits: 27/99 = 3/11.' },
        ],
        commonMistakes: [
          { mistake: '0.(27) = 27/100', fix: '27/100 = 0.27 (terminating). For a period use nines: 27/99.' },
        ],
        practice: [
          { problem: 'Write 4/9 as a decimal.', solution: '0.(4)', steps: ['4 ÷ 9 = 0.444…', '= 0.(4).'] },
          { problem: 'Write 0.(6) as a fraction in its simplest form.', solution: '2/3', steps: ['0.(6) = 6/9.', '6/9 = 2/3.'] },
          { problem: 'Write 0.(45) as a fraction in its simplest form.', solution: '5/11', steps: ['0.(45) = 45/99.', 'Divide by 9: 5/11.'] },
        ],
      },
      de: {
        title: 'Periodische Dezimalzahlen',
        objectives: ['Einen Bruch in eine periodische Dezimalzahl umwandeln.', 'Eine reinperiodische Dezimalzahl in einen Bruch umwandeln.'],
        theory: 'Teilt man den Zähler durch den Nenner, so bricht die Division entweder ab (3/4 = 0,75), oder ein Rest kehrt wieder, und dann wiederholen sich auch die Ziffern. Der sich wiederholende Teil heißt Periode; hier wird er in Klammern geschrieben: 2/11 = 0,1818… = 0,(18); 1/3 = 0,(3). (Üblich ist auch ein Strich über der Periode.)\n\nEin vollständig gekürzter Bruch ergibt nur dann eine abbrechende Dezimalzahl, wenn der Nenner keine anderen Primfaktoren als 2 und 5 hat.\n\nUmgekehrt, wenn die Periode direkt nach dem Komma beginnt: Periode durch so viele Neunen, wie sie Ziffern hat. 0,(6) = 6/9 = 2/3; 0,(27) = 27/99 = 3/11.',
        keyPoints: ['Wiederkehrender Rest → Periode: 0,(18) = 0,1818…', 'Nenner nur mit 2 und 5 → abbrechende Dezimalzahl', '0,(ab) = ab/99;  0,(a) = a/9'],
        examples: [
          { example: 'Schreiben Sie 2/11 als Dezimalzahl.', solution: '2 : 11 = 0,1818…; die Reste 9 und 2 wiederholen sich, also 2/11 = 0,(18).' },
          { example: 'Schreiben Sie 0,(27) als Bruch.', solution: 'Die Periode hat 2 Ziffern: 27/99 = 3/11.' },
        ],
        commonMistakes: [
          { mistake: '0,(27) = 27/100', fix: '27/100 = 0,27 (abbrechend). Für eine Periode nimmt man Neunen: 27/99.' },
        ],
        practice: [
          { problem: 'Schreiben Sie 4/9 als Dezimalzahl.', solution: '0,(4)', steps: ['4 : 9 = 0,444…', '= 0,(4).'] },
          { problem: 'Schreiben Sie 0,(6) als gekürzten Bruch.', solution: '2/3', steps: ['0,(6) = 6/9.', '6/9 = 2/3.'] },
          { problem: 'Schreiben Sie 0,(45) als gekürzten Bruch.', solution: '5/11', steps: ['0,(45) = 45/99.', 'Durch 9 kürzen: 5/11.'] },
        ],
      },
    },

    // ───────── 5. Integer exponents
    {
      slug: 'g8-number-sense-integer-exponents',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Fuqia', 'Power', 'Potenz'), cells: ['2³', '2²', '2¹', '2⁰', '2⁻¹', '2⁻²', '2⁻³'] },
          { head: alt('Vlera', 'Value', 'Wert'), cells: ['8', '4', '2', '1', '1/2', '1/4', '1/8'] },
        ],
        highlight: [[1, 3]],
        caption: alt('Çdo hap djathtas pjesëton me 2; kështu del 2⁰ = 1 dhe 2⁻³ = 1/2³ = 1/8.', 'Each step to the right divides by 2; that is why 2⁰ = 1 and 2⁻³ = 1/2³ = 1/8.', 'Jeder Schritt nach rechts teilt durch 2; deshalb ist 2⁰ = 1 und 2⁻³ = 1/2³ = 1/8.'),
        alt: alt('Tabela e fuqive të 2 nga 2³ = 8 deri 2⁻³ = 1/8.', 'Table of powers of 2 from 2³ = 8 to 2⁻³ = 1/8.', 'Tabelle der Zweierpotenzen von 2³ = 8 bis 2⁻³ = 1/8.'),
      }],
      answers: {
        examples: [[['2^-3', '1/8', 1e-9, '1/8']], [['10^-2', 0.01]]],
        practice: [[['5^-2', '1/25', 1e-9, '1/25']], [['(1/2)^-2', 4]], [['3^4 * 3^-6', '1/9', 1e-9, '1/9']]],
      },
      al: {
        title: 'Fuqitë me eksponent të plotë',
        objectives: ['Të njehsoni fuqi me eksponent zero dhe negativ.', 'Të zbatoni vetitë e fuqive edhe për eksponentë negativë.'],
        theory: 'Për çdo a ≠ 0 përkufizojmë a⁰ = 1 dhe a⁻ⁿ = 1/aⁿ. Kjo ruan rregullat e fuqive: 2³ : 2⁵ = 2³⁻⁵ = 2⁻², dhe njëkohësisht 8 : 32 = 1/4 = 1/2².\n\nShembuj: 2⁻³ = 1/8; 10⁻² = 1/100 = 0,01. Për thyesë: (1/2)⁻² = 2² = 4, sepse eksponenti negativ "e kthen" thyesën.\n\nTë gjitha vetitë vlejnë edhe për eksponentë të plotë negativë: aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ : aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐ·ⁿ. Eksponenti negativ nuk e bën numrin negativ.',
        keyPoints: ['a⁰ = 1 (a ≠ 0)', 'a⁻ⁿ = 1/aⁿ', '(a/b)⁻ⁿ = (b/a)ⁿ'],
        examples: [
          { example: 'Llogaritni 2⁻³.', solution: '2⁻³ = 1/2³ = 1/8.' },
          { example: 'Shkruani 10⁻² si numër dhjetor.', solution: '10⁻² = 1/100 = 0,01.' },
        ],
        commonMistakes: [
          { mistake: '2⁻³ = −8 ose −6', fix: 'Eksponenti negativ jep të anasjelltin: 2⁻³ = 1/8 (pozitiv).' },
          { mistake: '5⁰ = 0', fix: 'Çdo numër jo zero në fuqinë 0 është 1.' },
        ],
        practice: [
          { problem: 'Llogaritni 5⁻².', solution: '1/25', steps: ['5⁻² = 1/5².', '= 1/25.'] },
          { problem: 'Llogaritni (1/2)⁻².', solution: '4', steps: ['(1/2)⁻² = 2².', '= 4.'] },
          { problem: 'Llogaritni 3⁴ · 3⁻⁶.', solution: '1/9', steps: ['3⁴ · 3⁻⁶ = 3⁻².', '= 1/9.'] },
        ],
      },
      en: {
        title: 'Integer exponents',
        objectives: ['Evaluate powers with zero and negative exponents.', 'Use the rules for powers with negative exponents too.'],
        theory: 'For every a ≠ 0 we define a⁰ = 1 and a⁻ⁿ = 1/aⁿ. This keeps the rules for powers working: 2³ ÷ 2⁵ = 2³⁻⁵ = 2⁻², and at the same time 8 ÷ 32 = 1/4 = 1/2².\n\nExamples: 2⁻³ = 1/8; 10⁻² = 1/100 = 0.01. For a fraction: (1/2)⁻² = 2² = 4, because a negative exponent "flips" the fraction.\n\nAll the rules hold for negative integer exponents too: aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐ·ⁿ. A negative exponent does not make the number negative.',
        keyPoints: ['a⁰ = 1 (a ≠ 0)', 'a⁻ⁿ = 1/aⁿ', '(a/b)⁻ⁿ = (b/a)ⁿ'],
        examples: [
          { example: 'Work out 2⁻³.', solution: '2⁻³ = 1/2³ = 1/8.' },
          { example: 'Write 10⁻² as a decimal.', solution: '10⁻² = 1/100 = 0.01.' },
        ],
        commonMistakes: [
          { mistake: '2⁻³ = −8 or −6', fix: 'A negative exponent gives the reciprocal: 2⁻³ = 1/8 (positive).' },
          { mistake: '5⁰ = 0', fix: 'Any non-zero number to the power 0 is 1.' },
        ],
        practice: [
          { problem: 'Work out 5⁻².', solution: '1/25', steps: ['5⁻² = 1/5².', '= 1/25.'] },
          { problem: 'Work out (1/2)⁻².', solution: '4', steps: ['(1/2)⁻² = 2².', '= 4.'] },
          { problem: 'Work out 3⁴ · 3⁻⁶.', solution: '1/9', steps: ['3⁴ · 3⁻⁶ = 3⁻².', '= 1/9.'] },
        ],
      },
      de: {
        title: 'Potenzen mit ganzzahligen Exponenten',
        objectives: ['Potenzen mit dem Exponenten null und negativen Exponenten berechnen.', 'Die Potenzgesetze auch für negative Exponenten anwenden.'],
        theory: 'Für jedes a ≠ 0 definiert man a⁰ = 1 und a⁻ⁿ = 1/aⁿ. So bleiben die Potenzgesetze gültig: 2³ : 2⁵ = 2³⁻⁵ = 2⁻², und zugleich 8 : 32 = 1/4 = 1/2².\n\nBeispiele: 2⁻³ = 1/8; 10⁻² = 1/100 = 0,01. Bei einem Bruch: (1/2)⁻² = 2² = 4, denn ein negativer Exponent „dreht“ den Bruch um.\n\nAlle Potenzgesetze gelten auch für negative ganze Exponenten: aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ : aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐ·ⁿ. Ein negativer Exponent macht die Zahl nicht negativ.',
        keyPoints: ['a⁰ = 1 (a ≠ 0)', 'a⁻ⁿ = 1/aⁿ', '(a/b)⁻ⁿ = (b/a)ⁿ'],
        examples: [
          { example: 'Berechnen Sie 2⁻³.', solution: '2⁻³ = 1/2³ = 1/8.' },
          { example: 'Schreiben Sie 10⁻² als Dezimalzahl.', solution: '10⁻² = 1/100 = 0,01.' },
        ],
        commonMistakes: [
          { mistake: '2⁻³ = −8 oder −6', fix: 'Ein negativer Exponent ergibt den Kehrwert: 2⁻³ = 1/8 (positiv).' },
          { mistake: '5⁰ = 0', fix: 'Jede Zahl ungleich null hoch 0 ist 1.' },
        ],
        practice: [
          { problem: 'Berechnen Sie 5⁻².', solution: '1/25', steps: ['5⁻² = 1/5².', '= 1/25.'] },
          { problem: 'Berechnen Sie (1/2)⁻².', solution: '4', steps: ['(1/2)⁻² = 2².', '= 4.'] },
          { problem: 'Berechnen Sie 3⁴ · 3⁻⁶.', solution: '1/9', steps: ['3⁴ · 3⁻⁶ = 3⁻².', '= 1/9.'] },
        ],
      },
    },

    // ───────── 6. Standard form
    {
      slug: 'g8-number-sense-scientific-notation',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Numri', 'Number', 'Zahl'), cells: [alt('0,00072', '0.00072', '0,00072'), alt('0,005', '0.005', '0,005'), alt('0,034', '0.034', '0,034')] },
          { head: alt('Trajta shkencore', 'Standard form', 'Wissenschaftlich'), cells: [alt('7,2 · 10⁻⁴', '7.2 · 10⁻⁴', '7,2 · 10⁻⁴'), '5 · 10⁻³', alt('3,4 · 10⁻²', '3.4 · 10⁻²', '3,4 · 10⁻²')] },
        ],
        caption: alt('Për numra të vegjël presja lëviz djathtas dhe eksponenti del negativ.', 'For small numbers the point moves right and the exponent is negative.', 'Bei kleinen Zahlen rückt das Komma nach rechts und der Exponent wird negativ.'),
        alt: alt('Tre numra të vegjël dhe trajta e tyre shkencore me eksponent negativ.', 'Three small numbers and their standard form with negative exponents.', 'Drei kleine Zahlen und ihre wissenschaftliche Schreibweise mit negativem Exponenten.'),
      }],
      answers: {
        examples: [[['7.2 * 10^-4', 0.00072, 1e-12, '7.2 · 10⁻⁴']], [['3 * 10^4 * 2 * 10^-7', 0.006, 1e-12, '6 · 10⁻³']]],
        practice: [[['5 * 10^-3', 0.005, 1e-12, '5 · 10⁻³']], [['3.4 * 10^-2', 0.034, 1e-12]], [['(8 * 10^6) / (2 * 10^2)', 40000, 1e-9, '4 · 10⁴']]],
      },
      al: {
        title: 'Shkrimi shkencor',
        objectives: ['Të shkruani numra shumë të vegjël në trajtën a · 10ⁿ me n negativ.', 'Të shumëzoni dhe pjesëtoni numra në trajtë shkencore.'],
        theory: 'Trajta shkencore është a · 10ⁿ me 1 ≤ a < 10 dhe n numër i plotë. Për numra të mëdhenj n është pozitiv; për numra më të vegjël se 1, n është negativ.\n\nPër 0,00072: lëvizim presjen djathtas derisa para saj të jetë shifra e parë jo zero (7,2). Presja lëvizi 4 vende djathtas, pra 0,00072 = 7,2 · 10⁻⁴.\n\nShumëzimi: shumëzojmë numrat a dhe mbledhim eksponentët: (3 · 10⁴) · (2 · 10⁻⁷) = 6 · 10⁻³. Pjesëtimi: pjesëtojmë a-të dhe zbresim eksponentët. Nëse a del jashtë [1, 10), e rregullojmë.',
        keyPoints: ['a · 10ⁿ, 1 ≤ a < 10, n ∈ ℤ', 'Numër < 1 → n negativ (sa vende djathtas)', '(a · 10ᵐ)(b · 10ⁿ) = ab · 10ᵐ⁺ⁿ'],
        examples: [
          { example: 'Shkruani 0,00072 në trajtë shkencore.', solution: 'Presja lëviz 4 vende djathtas: 7,2 · 10⁻⁴.' },
          { example: 'Llogaritni (3 · 10⁴) · (2 · 10⁻⁷).', solution: '3 · 2 = 6 dhe 10⁴⁻⁷ = 10⁻³: 6 · 10⁻³ (= 0,006).' },
        ],
        commonMistakes: [
          { mistake: '0,00072 = 7,2 · 10⁴', fix: 'Numri është më i vogël se 1, prandaj eksponenti është negativ: 7,2 · 10⁻⁴.' },
          { mistake: '0,00072 = 72 · 10⁻⁵', fix: 'Vlera është e saktë, por a duhet të jetë ndërmjet 1 dhe 10.' },
        ],
        practice: [
          { problem: 'Shkruani 0,005 në trajtë shkencore.', solution: '5 · 10⁻³', steps: ['Presja lëviz 3 vende djathtas.', '5 · 10⁻³.'] },
          { problem: 'Shkruani 3,4 · 10⁻² si numër dhjetor.', solution: '0,034', steps: ['Presja lëviz 2 vende majtas.', '0,034.'] },
          { problem: 'Llogaritni (8 · 10⁶) : (2 · 10²).', solution: '4 · 10⁴', steps: ['8 : 2 = 4; 10⁶⁻² = 10⁴.', '4 · 10⁴ (= 40 000).'] },
        ],
      },
      en: {
        title: 'Standard form',
        objectives: ['Write very small numbers in the form a · 10ⁿ with negative n.', 'Multiply and divide numbers in standard form.'],
        theory: 'Standard form is a · 10ⁿ with 1 ≤ a < 10 and n an integer. For large numbers n is positive; for numbers smaller than 1, n is negative.\n\nFor 0.00072: move the point right until the first non-zero digit is in front of it (7.2). The point moved 4 places right, so 0.00072 = 7.2 · 10⁻⁴.\n\nMultiplying: multiply the numbers a and add the exponents: (3 · 10⁴) · (2 · 10⁻⁷) = 6 · 10⁻³. Dividing: divide the a\'s and subtract the exponents. If a falls outside [1, 10), adjust it.',
        keyPoints: ['a · 10ⁿ, 1 ≤ a < 10, n ∈ ℤ', 'Number < 1 → n negative (places moved right)', '(a · 10ᵐ)(b · 10ⁿ) = ab · 10ᵐ⁺ⁿ'],
        examples: [
          { example: 'Write 0.00072 in standard form.', solution: 'The point moves 4 places right: 7.2 · 10⁻⁴.' },
          { example: 'Work out (3 · 10⁴) · (2 · 10⁻⁷).', solution: '3 · 2 = 6 and 10⁴⁻⁷ = 10⁻³: 6 · 10⁻³ (= 0.006).' },
        ],
        commonMistakes: [
          { mistake: '0.00072 = 7.2 · 10⁴', fix: 'The number is less than 1, so the exponent is negative: 7.2 · 10⁻⁴.' },
          { mistake: '0.00072 = 72 · 10⁻⁵', fix: 'The value is right, but a must be between 1 and 10.' },
        ],
        practice: [
          { problem: 'Write 0.005 in standard form.', solution: '5 · 10⁻³', steps: ['The point moves 3 places right.', '5 · 10⁻³.'] },
          { problem: 'Write 3.4 · 10⁻² as a decimal.', solution: '0.034', steps: ['The point moves 2 places left.', '0.034.'] },
          { problem: 'Work out (8 · 10⁶) ÷ (2 · 10²).', solution: '4 · 10⁴', steps: ['8 ÷ 2 = 4; 10⁶⁻² = 10⁴.', '4 · 10⁴ (= 40 000).'] },
        ],
      },
      de: {
        title: 'Wissenschaftliche Schreibweise',
        objectives: ['Sehr kleine Zahlen in der Form a · 10ⁿ mit negativem n schreiben.', 'Zahlen in wissenschaftlicher Schreibweise multiplizieren und dividieren.'],
        theory: 'Die wissenschaftliche Schreibweise ist a · 10ⁿ mit 1 ≤ a < 10 und einer ganzen Zahl n. Bei großen Zahlen ist n positiv, bei Zahlen kleiner als 1 negativ.\n\nFür 0,00072: Das Komma nach rechts verschieben, bis die erste Ziffer ungleich null davor steht (7,2). Das Komma rückte 4 Stellen nach rechts, also 0,00072 = 7,2 · 10⁻⁴.\n\nMultiplizieren: die Zahlen a multiplizieren und die Exponenten addieren: (3 · 10⁴) · (2 · 10⁻⁷) = 6 · 10⁻³. Dividieren: die a dividieren und die Exponenten subtrahieren. Liegt a außerhalb von [1, 10), passt man es an.',
        keyPoints: ['a · 10ⁿ, 1 ≤ a < 10, n ∈ ℤ', 'Zahl < 1 → n negativ (Stellen nach rechts)', '(a · 10ᵐ)(b · 10ⁿ) = ab · 10ᵐ⁺ⁿ'],
        examples: [
          { example: 'Schreiben Sie 0,00072 in wissenschaftlicher Schreibweise.', solution: 'Das Komma rückt 4 Stellen nach rechts: 7,2 · 10⁻⁴.' },
          { example: 'Berechnen Sie (3 · 10⁴) · (2 · 10⁻⁷).', solution: '3 · 2 = 6 und 10⁴⁻⁷ = 10⁻³: 6 · 10⁻³ (= 0,006).' },
        ],
        commonMistakes: [
          { mistake: '0,00072 = 7,2 · 10⁴', fix: 'Die Zahl ist kleiner als 1, der Exponent also negativ: 7,2 · 10⁻⁴.' },
          { mistake: '0,00072 = 72 · 10⁻⁵', fix: 'Der Wert stimmt, aber a muss zwischen 1 und 10 liegen.' },
        ],
        practice: [
          { problem: 'Schreiben Sie 0,005 in wissenschaftlicher Schreibweise.', solution: '5 · 10⁻³', steps: ['Das Komma rückt 3 Stellen nach rechts.', '5 · 10⁻³.'] },
          { problem: 'Schreiben Sie 3,4 · 10⁻² als Dezimalzahl.', solution: '0,034', steps: ['Das Komma rückt 2 Stellen nach links.', '0,034.'] },
          { problem: 'Berechnen Sie (8 · 10⁶) : (2 · 10²).', solution: '4 · 10⁴', steps: ['8 : 2 = 4; 10⁶⁻² = 10⁴.', '4 · 10⁴ (= 40 000).'] },
        ],
      },
    },
  ],
};
