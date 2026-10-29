// The two free courses (written in the long form)
export default {
  'arith-001': [
    // 0 · Natural numbers
    [
      {
        after: 0, type: 'choice', correct: 2,
        al: { question: 'Cili nga këta është numër natyror?', options: ['−3', '1,5', '12', '0,5'], explanation: '12 përdoret për të numëruar. Numrat negativë dhe ata me pjesë dhjetore nuk janë natyrorë.' },
        en: { question: 'Which of these is a natural number?', options: ['−3', '1.5', '12', '0.5'], explanation: '12 is used for counting. Negative numbers and numbers with a decimal part are not natural numbers.' },
        de: { question: 'Welche dieser Zahlen ist eine natürliche Zahl?', options: ['−3', '1,5', '12', '0,5'], explanation: '12 dient zum Zählen. Negative Zahlen und Zahlen mit Nachkommastellen sind keine natürlichen Zahlen.' },
      },
      {
        after: 1, type: 'input', answer: { value: 100 },
        al: { question: 'Cili është pasardhësi i numrit 99?', explanation: 'Pasardhësi merret duke shtuar 1: 99 + 1 = 100.' },
        en: { question: 'What is the successor of 99?', explanation: 'The successor is found by adding 1: 99 + 1 = 100.' },
        de: { question: 'Was ist der Nachfolger von 99?', explanation: 'Den Nachfolger erhält man durch Addition von 1: 99 + 1 = 100.' },
      },
    ],
    // 1 · Addition and subtraction
    [
      {
        after: 0, type: 'input', answer: { value: 42 },
        al: { question: 'Sa është 27 + 15?', explanation: '20 + 10 = 30 dhe 7 + 5 = 12, pra 30 + 12 = 42.' },
        en: { question: 'What is 27 + 15?', explanation: '20 + 10 = 30 and 7 + 5 = 12, so 30 + 12 = 42.' },
        de: { question: 'Wie viel ist 27 + 15?', explanation: '20 + 10 = 30 und 7 + 5 = 12, also 30 + 12 = 42.' },
      },
      {
        after: 1, type: 'truefalse', correct: true,
        al: { question: 'Nëse 8 + 5 = 13, atëherë 13 − 5 = 8.', explanation: 'E vërtetë: zbritja është operacioni i kundërt i mbledhjes dhe e kthen atë mbrapsht.' },
        en: { question: 'If 8 + 5 = 13, then 13 − 5 = 8.', explanation: 'True: subtraction is the inverse of addition and undoes it.' },
        de: { question: 'Wenn 8 + 5 = 13, dann ist 13 − 5 = 8.', explanation: 'Richtig: Die Subtraktion ist die Umkehrung der Addition und macht sie rückgängig.' },
      },
    ],
    // 2 · Multiplication and division
    [
      {
        after: 0, type: 'choice', correct: 1,
        al: { question: 'Cila mbledhje është e barabartë me 4 × 3?', options: ['4 + 3', '4 + 4 + 4', '3 + 3', '4 + 3 + 4 + 3'], explanation: '4 × 3 do të thotë "4, tri herë": 4 + 4 + 4 = 12.' },
        en: { question: 'Which sum is equal to 4 × 3?', options: ['4 + 3', '4 + 4 + 4', '3 + 3', '4 + 3 + 4 + 3'], explanation: '4 × 3 means "4, three times": 4 + 4 + 4 = 12.' },
        de: { question: 'Welche Summe ist gleich 4 × 3?', options: ['4 + 3', '4 + 4 + 4', '3 + 3', '4 + 3 + 4 + 3'], explanation: '4 × 3 bedeutet „dreimal die 4“: 4 + 4 + 4 = 12.' },
      },
      {
        after: 2, type: 'truefalse', correct: false,
        al: { question: '12 ÷ 0 = 0', explanation: 'E gabuar: pjesëtimi me zero nuk është i përkufizuar, prandaj 12 ÷ 0 nuk ka vlerë.' },
        en: { question: '12 ÷ 0 = 0', explanation: 'False: division by zero is not defined, so 12 ÷ 0 has no value.' },
        de: { question: '12 ÷ 0 = 0', explanation: 'Falsch: Die Division durch null ist nicht definiert, 12 ÷ 0 hat also keinen Wert.' },
      },
    ],
    // 3 · Order of operations
    [
      {
        after: 1, type: 'input', answer: { value: 14 },
        al: { question: 'Sa është 2 + 3 × 4?', explanation: 'Së pari shumëzimi: 3 × 4 = 12, pastaj mbledhja: 2 + 12 = 14.' },
        en: { question: 'What is 2 + 3 × 4?', explanation: 'Multiplication first: 3 × 4 = 12, then addition: 2 + 12 = 14.' },
        de: { question: 'Wie viel ist 2 + 3 × 4?', explanation: 'Zuerst die Multiplikation: 3 × 4 = 12, dann die Addition: 2 + 12 = 14.' },
      },
      {
        after: 2, type: 'input', answer: { value: 20 },
        al: { question: 'Sa është (2 + 3) × 4?', explanation: 'Kllapat së pari: 2 + 3 = 5, pastaj 5 × 4 = 20.' },
        en: { question: 'What is (2 + 3) × 4?', explanation: 'Brackets first: 2 + 3 = 5, then 5 × 4 = 20.' },
        de: { question: 'Wie viel ist (2 + 3) × 4?', explanation: 'Zuerst die Klammer: 2 + 3 = 5, dann 5 × 4 = 20.' },
      },
    ],
    // 4 · Properties of numbers
    [
      {
        after: 0, type: 'truefalse', correct: true,
        al: { question: '7 + 5 = 5 + 7', explanation: 'E vërtetë: te mbledhja renditja e mbledhorëve nuk e ndryshon shumën (vetia e ndërrimit, komutativiteti).' },
        en: { question: '7 + 5 = 5 + 7', explanation: 'True: in addition the order of the numbers does not change the sum (the commutative property).' },
        de: { question: '7 + 5 = 5 + 7', explanation: 'Richtig: Bei der Addition ändert die Reihenfolge die Summe nicht (Kommutativgesetz).' },
      },
      {
        after: 1, type: 'choice', correct: 2,
        al: { question: 'Cili nga këta numra është i thjeshtë (prim)?', options: ['9', '15', '17', '21'], explanation: '17 pjesëtohet vetëm me 1 dhe me 17. Të tjerët kanë pjesëtues të tjerë: 9 = 3 · 3, 15 = 3 · 5, 21 = 3 · 7.' },
        en: { question: 'Which of these numbers is prime?', options: ['9', '15', '17', '21'], explanation: '17 is divisible only by 1 and 17. The others have more divisors: 9 = 3 · 3, 15 = 3 · 5, 21 = 3 · 7.' },
        de: { question: 'Welche dieser Zahlen ist eine Primzahl?', options: ['9', '15', '17', '21'], explanation: '17 ist nur durch 1 und 17 teilbar. Die anderen haben weitere Teiler: 9 = 3 · 3, 15 = 3 · 5, 21 = 3 · 7.' },
      },
    ],
  ],
  'arith-002': [
    // 0 · The concept of fractions
    [
      {
        after: 0, type: 'choice', correct: 2,
        al: { question: 'Pica u pre në 8 pjesë të barabarta dhe hëngrët 3. Sa pjesë të picës hëngrët?', options: ['3/5', '5/8', '3/8', '8/3'], explanation: 'E tëra është 8 pjesë (emëruesi) dhe morët 3 prej tyre (numëruesi): 3/8.' },
        en: { question: 'A pizza was cut into 8 equal slices and you ate 3. What part of the pizza did you eat?', options: ['3/5', '5/8', '3/8', '8/3'], explanation: 'The whole is 8 slices (the denominator) and you took 3 of them (the numerator): 3/8.' },
        de: { question: 'Eine Pizza wurde in 8 gleiche Stücke geschnitten und Sie haben 3 gegessen. Welchen Teil der Pizza haben Sie gegessen?', options: ['3/5', '5/8', '3/8', '8/3'], explanation: 'Das Ganze sind 8 Stücke (Nenner), Sie haben 3 davon genommen (Zähler): 3/8.' },
      },
      {
        after: 2, type: 'choice', correct: 2,
        al: { question: 'Cila nga këto thyesa është jo e duhur?', options: ['2/5', '3/4', '7/4', '1/2'], explanation: 'Te 7/4 numëruesi (7) është më i madh se emëruesi (4), pra thyesa është më e madhe se 1.' },
        en: { question: 'Which of these fractions is improper?', options: ['2/5', '3/4', '7/4', '1/2'], explanation: 'In 7/4 the numerator (7) is greater than the denominator (4), so the fraction is greater than 1.' },
        de: { question: 'Welcher dieser Brüche ist unecht?', options: ['2/5', '3/4', '7/4', '1/2'], explanation: 'Bei 7/4 ist der Zähler (7) größer als der Nenner (4), der Bruch ist also größer als 1.' },
      },
    ],
    // 1 · Simplifying fractions
    [
      {
        after: 0, type: 'choice', correct: 0,
        al: { question: 'Cila është forma e thjeshtuar e 6/8?', options: ['3/4', '2/3', '6/4', '12/16'], explanation: 'E pjesëtojmë numëruesin dhe emëruesin me 2: 6/8 = 3/4.' },
        en: { question: 'What is 6/8 in its simplest form?', options: ['3/4', '2/3', '6/4', '12/16'], explanation: 'Divide the numerator and the denominator by 2: 6/8 = 3/4.' },
        de: { question: 'Wie lautet 6/8 vollständig gekürzt?', options: ['3/4', '2/3', '6/4', '12/16'], explanation: 'Zähler und Nenner durch 2 teilen: 6/8 = 3/4.' },
      },
      {
        after: 1, type: 'input', answer: { value: 6 },
        al: { question: 'Sa është pjesëtuesi më i madh i përbashkët (PMP) i 12 dhe 18?', explanation: 'Pjesëtuesit e 12: 1, 2, 3, 4, 6, 12. Të 18: 1, 2, 3, 6, 9, 18. Më i madhi i përbashkët është 6.' },
        en: { question: 'What is the greatest common divisor (GCD) of 12 and 18?', explanation: 'Divisors of 12: 1, 2, 3, 4, 6, 12. Of 18: 1, 2, 3, 6, 9, 18. The greatest common one is 6.' },
        de: { question: 'Wie lautet der größte gemeinsame Teiler (ggT) von 12 und 18?', explanation: 'Teiler von 12: 1, 2, 3, 4, 6, 12. Von 18: 1, 2, 3, 6, 9, 18. Der größte gemeinsame ist 6.' },
      },
    ],
    // 2 · Adding and subtracting fractions
    [
      {
        after: 0, type: 'input', answer: { value: 0.6 },
        al: { question: 'Sa është 1/5 + 2/5? (p.sh. 3/5)', explanation: 'Emëruesi është i njëjtë, prandaj mbledhim vetëm numëruesit: 1/5 + 2/5 = 3/5.' },
        en: { question: 'What is 1/5 + 2/5? (e.g. 3/5)', explanation: 'The denominators are the same, so add only the numerators: 1/5 + 2/5 = 3/5.' },
        de: { question: 'Wie viel ist 1/5 + 2/5? (z. B. 3/5)', explanation: 'Die Nenner sind gleich, also nur die Zähler addieren: 1/5 + 2/5 = 3/5.' },
      },
      {
        after: 1, type: 'choice', correct: 1,
        al: { question: 'Cili është emëruesi i përbashkët më i vogël për 1/4 dhe 1/6?', options: ['10', '12', '24', '6'], explanation: 'Shumëfishi më i vogël i përbashkët i 4 dhe 6 është 12: 1/4 = 3/12 dhe 1/6 = 2/12.' },
        en: { question: 'What is the lowest common denominator of 1/4 and 1/6?', options: ['10', '12', '24', '6'], explanation: 'The least common multiple of 4 and 6 is 12: 1/4 = 3/12 and 1/6 = 2/12.' },
        de: { question: 'Was ist der kleinste gemeinsame Nenner von 1/4 und 1/6?', options: ['10', '12', '24', '6'], explanation: 'Das kleinste gemeinsame Vielfache von 4 und 6 ist 12: 1/4 = 3/12 und 1/6 = 2/12.' },
      },
    ],
    // 3 · Multiplying and dividing fractions
    [
      {
        after: 0, type: 'input', answer: { value: 0.5 },
        al: { question: 'Sa është 2/3 × 3/4?', explanation: 'Numëruesit me numëruesit dhe emëruesit me emëruesit: (2 · 3)/(3 · 4) = 6/12 = 1/2.' },
        en: { question: 'What is 2/3 × 3/4?', explanation: 'Numerators times numerators, denominators times denominators: (2 · 3)/(3 · 4) = 6/12 = 1/2.' },
        de: { question: 'Wie viel ist 2/3 × 3/4?', explanation: 'Zähler mal Zähler, Nenner mal Nenner: (2 · 3)/(3 · 4) = 6/12 = 1/2.' },
      },
      {
        after: 1, type: 'choice', correct: 1,
        al: { question: 'Kur pjesëtojmë me 2/5, me çfarë shumëzojmë?', options: ['2/5', '5/2', '−2/5', '1/5'], explanation: 'Pjesëtimi me një thyesë është shumëzim me të anasjelltën e saj: 2/5 → 5/2.' },
        en: { question: 'When we divide by 2/5, what do we multiply by?', options: ['2/5', '5/2', '−2/5', '1/5'], explanation: 'Dividing by a fraction means multiplying by its reciprocal: 2/5 → 5/2.' },
        de: { question: 'Womit multipliziert man, wenn man durch 2/5 teilt?', options: ['2/5', '5/2', '−2/5', '1/5'], explanation: 'Durch einen Bruch teilen heißt mit seinem Kehrwert multiplizieren: 2/5 → 5/2.' },
      },
    ],
    // 4 · Decimal numbers
    [
      {
        after: 1, type: 'input', answer: { value: 0.75 },
        al: { question: 'Shkruani 3/4 si numër dhjetor.', explanation: '3/4 = 75/100 = 0,75.' },
        en: { question: 'Write 3/4 as a decimal.', explanation: '3/4 = 75/100 = 0.75.' },
        de: { question: 'Schreiben Sie 3/4 als Dezimalzahl.', explanation: '3/4 = 75/100 = 0,75.' },
      },
      {
        after: 2, type: 'truefalse', correct: true,
        al: { question: '0,333… (3 që përsëritet pa fund) është e barabartë me 1/3.', explanation: 'E vërtetë: 1 ÷ 3 = 0,333…, prandaj numri dhjetor periodik 0,3̄ shkruhet si thyesa 1/3.' },
        en: { question: '0.333… (3 repeating forever) is equal to 1/3.', explanation: 'True: 1 ÷ 3 = 0.333…, so the repeating decimal 0.3̄ can be written as the fraction 1/3.' },
        de: { question: '0,333… (die 3 wiederholt sich endlos) ist gleich 1/3.', explanation: 'Richtig: 1 ÷ 3 = 0,333…, also lässt sich der periodische Dezimalbruch 0,3̄ als Bruch 1/3 schreiben.' },
      },
    ],
  ],
};
