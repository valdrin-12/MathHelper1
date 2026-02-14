export const courseContents_base_en = {

  // ===== ARITHMETIC: Numbers and Basic Operations =====
  'arith-001': {
    lessons: [
      {
        title: 'Natural Numbers',
        theory: 'Natural numbers are the numbers we use for counting: 1, 2, 3, 4, 5... and so on to infinity. They are called "natural" because they appear naturally when we count things around us.\n\nThe number zero (0) is special — some mathematicians include it among the natural numbers, others do not. Natural numbers have no end — we can always add 1 to get the next number.\n\nNatural numbers are the foundation of all mathematics. On top of them we build integers, fractions, decimals, and many other concepts.',
        keyPoints: [
          'Natural numbers start from 1 and go to infinity',
          'Every natural number has a successor (the next number) and a predecessor (the previous number)',
          'Natural numbers are whole — they have no fractional part',
          'They are used for counting, ordering, and measuring',
        ],
        examples: [
          {
            example: 'Identify the natural numbers from the list: -3, 0, 5, 1.5, 12, -1, 7',
            solution: 'The natural numbers are: 5, 12, 7\nNegative numbers (-3, -1) and zero (0) are not natural. 1.5 is not a whole number.',
          },
          {
            example: 'What is the predecessor and successor of the number 8?',
            solution: 'The predecessor of 8 is 7 (8 - 1 = 7)\nThe successor of 8 is 9 (8 + 1 = 9)',
          },
        ],
        practice: [
          {
            problem: 'List the natural numbers from 15 to 20 and find their sum.',
            solution: 'Sum = 15 + 16 + 17 + 18 + 19 + 20 = 105',
            steps: [
              'Write the numbers: 15, 16, 17, 18, 19, 20',
              'Add them: 15 + 16 = 31',
              '31 + 17 = 48',
              '48 + 18 = 66',
              '66 + 19 = 85',
              '85 + 20 = 105',
            ],
          },
        ],
      },
      {
        title: 'Addition and Subtraction',
        theory: 'Addition is the operation of combining two or more quantities to find the total. The symbol for addition is "+" (plus). When we add two numbers, the result is called the sum.\n\nSubtraction is the operation of removing one quantity from another. The symbol for subtraction is "-" (minus). The result of subtraction is called the difference. Subtraction is the inverse operation of addition.\n\nBoth operations are essential in everyday life — from shopping to measurements, from financial calculations to solving practical problems.',
        keyPoints: [
          'Addition is commutative: a + b = b + a',
          'Addition is associative: (a + b) + c = a + (b + c)',
          'Subtraction is not commutative: a - b \u2260 b - a (in general)',
          'The identity element of addition is 0: a + 0 = a',
        ],
        examples: [
          {
            example: 'Calculate: 347 + 256',
            solution: '347 + 256 = 603\nIn column form:\n  347\n+ 256\n-----\n  603\n(7+6=13, write 3 carry 1; 4+5+1=10, write 0 carry 1; 3+2+1=6)',
          },
          {
            example: 'Calculate: 521 - 189',
            solution: '521 - 189 = 332\nIn column form:\n  521\n- 189\n-----\n  332\n(1<9, borrow: 11-9=2; 1<8, borrow: 11-8-1=2 carry 1; 4-1-1=3... recalculate: 5\u21924, 2\u219212: 12-9=3; 4-1=3... calculate: 521-189=332)',
          },
        ],
        practice: [
          {
            problem: 'A store had 845 products. It sold 327 and received a shipment of 196 new products. How many products does it have now?',
            solution: 'Products now = 845 - 327 + 196 = 714',
            steps: [
              'Start: 845 products',
              'After sales: 845 - 327 = 518',
              'After shipment: 518 + 196 = 714',
              'Answer: 714 products',
            ],
          },
        ],
      },
      {
        title: 'Multiplication and Division',
        theory: 'Multiplication is repeated addition of the same number. The symbol is "\u00d7" or "\u00b7". For example, 4 \u00d7 3 means "add 4, three times": 4 + 4 + 4 = 12. The numbers we multiply are called factors, and the result is called the product.\n\nDivision is the equal distribution of a quantity into groups. The symbol is "\u00f7" or "/". Division is the inverse operation of multiplication. The number being divided is called the dividend, the number we divide by is called the divisor, and the result is called the quotient.\n\nImportant: division by zero is undefined — you cannot divide anything by zero!',
        keyPoints: [
          'Multiplication is commutative: a \u00d7 b = b \u00d7 a',
          'Any number multiplied by 0 gives 0: a \u00d7 0 = 0',
          'Any number multiplied by 1 gives itself: a \u00d7 1 = a',
          'Division by zero (\u00f7 0) is undefined',
        ],
        examples: [
          {
            example: 'Calculate: 24 \u00d7 13',
            solution: '24 \u00d7 13 = 312\nMethod: 24 \u00d7 13 = 24 \u00d7 10 + 24 \u00d7 3 = 240 + 72 = 312',
          },
          {
            example: 'Calculate: 156 \u00f7 12',
            solution: '156 \u00f7 12 = 13\nVerify: 12 \u00d7 13 = 12 \u00d7 10 + 12 \u00d7 3 = 120 + 36 = 156 \u2713',
          },
        ],
        practice: [
          {
            problem: 'A class of 28 students needs to be divided into equal groups. How many groups can be formed with 4 students each?',
            solution: '28 \u00f7 4 = 7 groups',
            steps: [
              'Total number of students: 28',
              'Students per group: 4',
              '28 \u00f7 4 = 7',
              'Answer: 7 groups of 4 students each',
            ],
          },
        ],
      },
      {
        title: 'Order of Operations (PEMDAS)',
        theory: 'When we have multiple operations in the same expression, we need to know which one to perform first. The order of operations, or PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction), tells us how to proceed.\n\nThe rule: 1) Perform operations inside Parentheses, 2) Then Exponents, 3) Multiplication and Division (from left to right), 4) Addition and Subtraction (from left to right).\n\nIf we do not follow this order, different people will get different answers for the same problem — that would be chaos!',
        keyPoints: [
          'P = Parentheses (operations inside { }, [ ], ( ) are performed first)',
          'E = Exponents and square roots',
          'MD = Multiplication and Division (simultaneously, from left to right)',
          'AS = Addition and Subtraction (simultaneously, from left to right)',
        ],
        examples: [
          {
            example: 'Calculate: 3 + 4 \u00d7 2',
            solution: 'Correct result: 3 + 4 \u00d7 2 = 3 + 8 = 11\nMultiplication is done before addition! Not (3+4)\u00d72 = 14.',
          },
          {
            example: 'Calculate: (5 + 3) \u00d7 2 - 4 \u00f7 2',
            solution: '= (8) \u00d7 2 - 4 \u00f7 2    [parentheses]\n= 16 - 2              [multiplication and division]\n= 14                  [subtraction]',
          },
        ],
        practice: [
          {
            problem: 'Calculate: 20 - 2 \u00d7 (4 + 1) + 8 \u00f7 2',
            solution: '= 20 - 2 \u00d7 5 + 4 = 20 - 10 + 4 = 14',
            steps: [
              'Parentheses: (4 + 1) = 5',
              'Expression becomes: 20 - 2 \u00d7 5 + 8 \u00f7 2',
              'Multiplication/Division: 2 \u00d7 5 = 10 and 8 \u00f7 2 = 4',
              'Expression becomes: 20 - 10 + 4',
              'Addition/Subtraction from left to right: 20 - 10 = 10, then 10 + 4 = 14',
            ],
          },
        ],
      },
      {
        title: 'Properties of Numbers',
        theory: 'Numbers have various properties that help us calculate faster and understand the structure of mathematics. Properties such as commutativity, associativity, and distributivity are fundamental rules.\n\nEven numbers are all numbers divisible by 2 with no remainder: 2, 4, 6, 8, 10...\nOdd numbers are those not divisible by 2 with no remainder: 1, 3, 5, 7, 9...\nMultiples of N are: N, 2N, 3N, 4N...\nPrime numbers have exactly two divisors: 1 and themselves.',
        keyPoints: [
          'Commutative property: a + b = b + a and a \u00d7 b = b \u00d7 a',
          'Associative property: (a+b)+c = a+(b+c) and (a\u00d7b)\u00d7c = a\u00d7(b\u00d7c)',
          'Distributive property: a\u00d7(b+c) = a\u00d7b + a\u00d7c',
          'Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23...',
        ],
        examples: [
          {
            example: 'Demonstrate the distributive property: 5 \u00d7 (3 + 7)',
            solution: 'Method 1: 5 \u00d7 (3 + 7) = 5 \u00d7 10 = 50\nMethod 2: 5 \u00d7 3 + 5 \u00d7 7 = 15 + 35 = 50\nBoth give the same result \u2713',
          },
          {
            example: 'Determine whether 97 is a prime number.',
            solution: '97 \u00f7 2 = 48.5 (not whole)\n97 \u00f7 3 = 32.3... (not whole)\n97 \u00f7 5 = 19.4 (not whole)\n97 \u00f7 7 = 13.8... (not whole)\nSince \u221a97 \u2248 9.8, we have tested all possible divisors.\nYes, 97 is a prime number!',
          },
        ],
        practice: [
          {
            problem: 'Use the distributive property to quickly calculate 7 \u00d7 38.',
            solution: '7 \u00d7 38 = 7 \u00d7 (40 - 2) = 280 - 14 = 266',
            steps: [
              '38 = 40 - 2 (break 38 into easy numbers)',
              'Apply the distributive property: 7 \u00d7 (40 - 2)',
              '= 7 \u00d7 40 - 7 \u00d7 2',
              '= 280 - 14',
              '= 266',
            ],
          },
        ],
      },
    ],
  },

  // ===== ARITHMETIC: Fractions and Decimals =====
  'arith-002': {
    lessons: [
      {
        title: 'The Concept of Fractions',
        theory: 'A fraction is a way of expressing a part of a whole. For example, if we have a cake cut into 4 equal pieces and we take 1 piece, we have taken 1/4 of the cake.\n\nA fraction has two parts: the numerator (the number above) indicates how many parts we have taken, and the denominator (the number below) indicates into how many parts the whole has been divided.\n\nFractions can be: proper (numerator < denominator, e.g. 3/4), improper (numerator \u2265 denominator, e.g. 7/4), and mixed numbers (whole part + fraction, e.g. 1\u00be).',
        keyPoints: [
          'The numerator indicates how many parts we have (above the line)',
          'The denominator indicates how many parts in total (below the line)',
          'The denominator cannot be zero',
          'Equivalent fractions are fractions with the same value: 1/2 = 2/4 = 3/6',
        ],
        examples: [
          {
            example: 'Write as a fraction: "three parts out of eight"',
            solution: 'Three out of eight = 3/8\nNumerator = 3 (how many parts we have)\nDenominator = 8 (how many parts in total)',
          },
          {
            example: 'Find the equivalent fraction of 2/3 that has denominator 12.',
            solution: '2/3 = ?/12\n3 \u00d7 4 = 12, so we also multiply the numerator by 4:\n2 \u00d7 4 = 8\nTherefore 2/3 = 8/12',
          },
        ],
        practice: [
          {
            problem: 'Convert the mixed number 2\u00be into an improper fraction.',
            solution: '2\u00be = 11/4',
            steps: [
              '2\u00be = 2 + 3/4',
              'Multiply the whole part by the denominator: 2 \u00d7 4 = 8',
              'Add the numerator: 8 + 3 = 11',
              'The denominator stays the same: 4',
              'Result: 11/4',
            ],
          },
        ],
      },
      {
        title: 'Simplifying Fractions',
        theory: 'Simplifying fractions (or reducing) is the process of finding the simplest form of a fraction while maintaining the same value. The fractions 6/8 and 3/4 have the same value, but 3/4 is the simplified form.\n\nTo simplify a fraction, we find the Greatest Common Divisor (GCD) of the numerator and denominator, then divide both by that number.\n\nWhen the greatest common divisor is 1, the fraction is already in its simplest form and is called an irreducible fraction.',
        keyPoints: [
          'The Greatest Common Divisor (GCD) helps us simplify fractions',
          'A fraction is simplified when GCD(numerator, denominator) = 1',
          'We can simplify step by step by dividing by small factors',
          'Simplification does not change the value of the fraction',
        ],
        examples: [
          {
            example: 'Simplify the fraction 18/24.',
            solution: 'Factors of 18: 1, 2, 3, 6, 9, 18\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24\nGCD(18, 24) = 6\n18/24 = (18\u00f76)/(24\u00f76) = 3/4',
          },
          {
            example: 'Simplify the fraction 45/60.',
            solution: '45 = 3\u00b2 \u00d7 5 = 9 \u00d7 5\n60 = 4 \u00d7 15 = 2\u00b2 \u00d7 3 \u00d7 5\nGCD = 3 \u00d7 5 = 15\n45/60 = (45\u00f715)/(60\u00f715) = 3/4',
          },
        ],
        practice: [
          {
            problem: 'Simplify the fraction 36/48.',
            solution: '36/48 = 3/4',
            steps: [
              'Find GCD(36, 48)',
              '36 = 2\u00b2 \u00d7 3\u00b2 and 48 = 2\u2074 \u00d7 3',
              'GCD = 2\u00b2 \u00d7 3 = 12',
              '36 \u00f7 12 = 3',
              '48 \u00f7 12 = 4',
              'Result: 3/4',
            ],
          },
        ],
      },
      {
        title: 'Addition and Subtraction of Fractions',
        theory: 'To add or subtract fractions, we need to have the same denominator. When fractions have the same denominator (homogeneous fractions), we simply add or subtract the numerators.\n\nWhen fractions have different denominators (heterogeneous fractions), we need to find the Least Common Denominator (LCD) — the least common multiple of the denominators.\n\nAfter calculating, always simplify the result if possible.',
        keyPoints: [
          'Fractions with the same denominator: add/subtract only the numerators',
          'Fractions with different denominators: find the LCD (common denominator)',
          'LCD = Least Common Multiple of the denominators',
          'Always simplify the result',
        ],
        examples: [
          {
            example: 'Calculate: 2/7 + 3/7',
            solution: '2/7 + 3/7 = (2+3)/7 = 5/7\n(The denominators are the same, add only the numerators)',
          },
          {
            example: 'Calculate: 1/3 + 1/4',
            solution: 'LCD(3, 4) = 12\n1/3 = 4/12\n1/4 = 3/12\n4/12 + 3/12 = 7/12',
          },
        ],
        practice: [
          {
            problem: 'Calculate: 3/4 - 1/6',
            solution: '3/4 - 1/6 = 7/12',
            steps: [
              'Find LCD(4, 6)',
              '4 = 2\u00b2, 6 = 2 \u00d7 3, LCD = 2\u00b2 \u00d7 3 = 12',
              'Convert: 3/4 = 9/12',
              'Convert: 1/6 = 2/12',
              '9/12 - 2/12 = 7/12',
              'Check if it can be simplified: GCD(7,12)=1, so 7/12 is already simplified',
            ],
          },
        ],
      },
      {
        title: 'Multiplication and Division of Fractions',
        theory: 'Multiplying fractions is straightforward: multiply the numerators together and the denominators together. There is no need to find a common denominator!\n\nDividing fractions: to divide by a fraction, multiply by its inverse (reciprocal). The reciprocal of a/b is b/a. So: a/b \u00f7 c/d = a/b \u00d7 d/c.\n\nTip: before multiplying, try to cross-simplify — divide the numerator of one fraction by the denominator of the other if they share common factors.',
        keyPoints: [
          'Multiplication: (a/b) \u00d7 (c/d) = (a\u00d7c)/(b\u00d7d)',
          'Division: (a/b) \u00f7 (c/d) = (a/b) \u00d7 (d/c)',
          'The reciprocal of a/b is b/a',
          'Cross-simplifying before multiplication makes the calculation easier',
        ],
        examples: [
          {
            example: 'Calculate: 2/3 \u00d7 3/4',
            solution: '2/3 \u00d7 3/4 = (2\u00d73)/(3\u00d74) = 6/12 = 1/2\nOr with cross-simplification: 2/3 \u00d7 3/4 \u2192 cancel 3/3=1: 2/1 \u00d7 1/4 = 2/4 = 1/2',
          },
          {
            example: 'Calculate: 5/6 \u00f7 5/12',
            solution: '5/6 \u00f7 5/12 = 5/6 \u00d7 12/5 = (5\u00d712)/(6\u00d75) = 60/30 = 2',
          },
        ],
        practice: [
          {
            problem: 'Calculate: 3/4 \u00d7 8/9 \u00f7 2/3',
            solution: '= (3/4 \u00d7 8/9) \u00f7 2/3 = 2/3 \u00f7 2/3 = 1',
            steps: [
              'Perform the multiplication first: 3/4 \u00d7 8/9',
              'Cross-simplify: 3 with 9 \u2192 1/3, 8 with 4 \u2192 2/1',
              '= 1/1 \u00d7 2/3 = 2/3',
              'Now the division: 2/3 \u00f7 2/3',
              '= 2/3 \u00d7 3/2 = 6/6 = 1',
            ],
          },
        ],
      },
      {
        title: 'Decimal Numbers',
        theory: 'Decimal numbers are another way of expressing fractions. They use the decimal system — digits after the decimal point (.) represent tenths, hundredths, thousandths, etc.\n\nFor example: 3.14 = 3 + 1/10 + 4/100 = 3 + 0.1 + 0.04\n\nDecimal numbers can be: terminating (e.g. 0.5, 1.25), repeating (e.g. 0.333... = 0.3\u0304, 0.142857...), or irrational (e.g. \u03c0 = 3.14159...). Terminating and repeating decimals can be expressed as fractions.',
        keyPoints: [
          'The decimal point separates place values: tenths (0.1), hundredths (0.01), thousandths (0.001)',
          'Fractions with denominators of 10, 100, 1000 convert easily to decimals',
          'Repeating decimals have digits that repeat infinitely',
          '0.5 = 1/2, 0.25 = 1/4, 0.75 = 3/4, 0.1 = 1/10',
        ],
        examples: [
          {
            example: 'Convert 0.375 to a fraction.',
            solution: '0.375 = 375/1000\nSimplify: GCD(375, 1000) = 125\n375/1000 = 3/8',
          },
          {
            example: 'Convert the fraction 7/8 to a decimal.',
            solution: '7 \u00f7 8 = 0.875\n8 \u00d7 0 = 0, remainder 7\n70 \u00f7 8 = 8, remainder 6\n60 \u00f7 8 = 7, remainder 4\n40 \u00f7 8 = 5, remainder 0\nSo 7/8 = 0.875',
          },
        ],
        practice: [
          {
            problem: 'Order from least to greatest: 0.6, 3/5, 0.55, 7/12',
            solution: '0.55 < 7/12 \u2248 0.583 < 0.6 = 3/5',
            steps: [
              'Convert all to decimals',
              '0.6 = 0.600',
              '3/5 = 0.600 (3\u00f75 = 0.6)',
              '0.55 = 0.550',
              '7/12 \u2248 0.583 (7\u00f712 \u2248 0.5833...)',
              'Ordering: 0.550 < 0.583 < 0.600 = 0.600',
              'So: 0.55 < 7/12 < 0.6 = 3/5',
            ],
          },
        ],
      },
    ],
  },

  // ===== ARITHMETIC: Percentages and Proportionality =====
  'arith-003': {
    lessons: [
      {
        title: 'The Concept of Percentage',
        theory: 'Percentage (%) means "out of one hundred" — it is a fraction with a denominator of 100. So, 25% = 25/100 = 0.25. Percentages help us compare different quantities on the same base (100).\n\nPercentages are present everywhere: store discounts, interest rates, test scores, statistics, probability, and many other everyday situations.\n\nTo convert: fraction \u2192 % (multiply by 100), % \u2192 decimal (divide by 100), decimal \u2192 % (multiply by 100).',
        keyPoints: [
          '% means "per hundred" or "out of 100"',
          '50% = 50/100 = 0.5 = 1/2',
          '100% of something = the whole thing',
          'Quick conversion: % \u2194 decimal (move the decimal point 2 places)',
        ],
        examples: [
          {
            example: 'Convert 35% to a fraction and a decimal.',
            solution: '35% = 35/100 = 7/20 (simplified fraction)\n35% = 0.35 (decimal)',
          },
          {
            example: 'Express 0.875 as a percentage.',
            solution: '0.875 \u00d7 100 = 87.5%',
          },
        ],
        practice: [
          {
            problem: 'Out of a group of 40 students, 24 passed the test. What percentage passed?',
            solution: '24/40 = 0.6 = 60%',
            steps: [
              'Divide the number who passed by the total: 24/40',
              '24 \u00f7 40 = 0.6',
              'Multiply by 100: 0.6 \u00d7 100 = 60',
              'Answer: 60% of the students passed the test',
            ],
          },
        ],
      },
      {
        title: 'Calculating Percentages',
        theory: 'There are three main types of percentage problems:\n1. Find X% of number N: X% \u00d7 N = (X/100) \u00d7 N\n2. X is what % of N: (X/N) \u00d7 100%\n3. X is Y% of what number: X / (Y/100) = X \u00d7 100/Y\n\nCalculation methods: we can use the direct formula, or think proportionally: if 100% = N, then Y% = (Y \u00d7 N)/100.\n\nPractical tip: 10% of any number is easily found by removing one digit; 5% = half of 10%; 20% = double of 10%.',
        keyPoints: [
          'X% of N = (X \u00d7 N) / 100',
          '10% of a number = divide by 10',
          '50% of a number = half',
          'Increase by P% = multiply by (1 + P/100)',
        ],
        examples: [
          {
            example: 'Calculate 15% of 80.',
            solution: '15% of 80 = (15 \u00d7 80) / 100 = 1200/100 = 12\nOr: 10% of 80 = 8, and 5% of 80 = 4, so 15% = 8 + 4 = 12',
          },
          {
            example: 'The old price of 1200 lek increased by 8%. What is the new price?',
            solution: 'Increase: 8% of 1200 = 0.08 \u00d7 1200 = 96 lek\nNew price: 1200 + 96 = 1296 lek\nOr directly: 1200 \u00d7 1.08 = 1296 lek',
          },
        ],
        practice: [
          {
            problem: 'The original price of a phone was 50,000 lek. The store offers a 15% discount. How much is paid?',
            solution: 'Price after discount = 50,000 \u00d7 0.85 = 42,500 lek',
            steps: [
              'Discount = 15% of 50,000 = 0.15 \u00d7 50,000 = 7,500 lek',
              'New price = 50,000 - 7,500 = 42,500 lek',
              'Or directly: 50,000 \u00d7 (1 - 0.15) = 50,000 \u00d7 0.85 = 42,500 lek',
            ],
          },
        ],
      },
      {
        title: 'Ratios and Proportionality',
        theory: 'A ratio expresses the quantitative relationship between two or more quantities. It is written as a:b or a/b. The ratio 3:2 means "for every 3 of the first, there are 2 of the second."\n\nTwo quantities are proportional (direct variation) if their ratio remains constant: y/x = k. When x doubles, y also doubles.\n\nInverse variation: two quantities are inversely proportional if their product remains constant: x \u00d7 y = k. When x doubles, y is halved.',
        keyPoints: [
          'Ratio a:b = a/b \u2014 expresses the relative relationship between two quantities',
          'Direct variation: y = k \u00d7 x (k = constant)',
          'Inverse variation: x \u00d7 y = k',
          'Proportion: a/b = c/d \u2192 a \u00d7 d = b \u00d7 c (cross products are equal)',
        ],
        examples: [
          {
            example: 'The ratio of teachers to students is 1:20. If there are 480 students, how many teachers are needed?',
            solution: '1/20 = x/480\nx = 480/20 = 24 teachers',
          },
          {
            example: '6 workers finish a job in 12 days. How many days would 9 workers need?',
            solution: 'This is inverse variation: workers \u00d7 days = constant\n6 \u00d7 12 = 9 \u00d7 days\n72 = 9 \u00d7 days\nDays = 72/9 = 8 days',
          },
        ],
        practice: [
          {
            problem: 'A dessert recipe calls for 300g of flour for 4 servings. How much flour is needed for 10 servings?',
            solution: '300g \u00d7 (10/4) = 750g',
            steps: [
              'Set up the proportion: 300/4 = x/10',
              'Cross multiply: 300 \u00d7 10 = 4 \u00d7 x',
              '3000 = 4x',
              'x = 3000/4 = 750',
              'Answer: 750g of flour',
            ],
          },
        ],
      },
    ],
  },

  // ===== ALGEBRA: Introduction to Algebra =====
  'alg-001': {
    lessons: [
      {
        title: 'Variables and Constants',
        theory: 'Algebra differs from arithmetic in that it uses symbols (letters) to represent unknown numbers or numbers that can change. These symbols are called variables (e.g. x, y, z, a, b).\n\nConstants are fixed numbers that do not change \u2014 such as 5, -3, \u00bd, \u03c0. The coefficient is the number in front of the variable \u2014 in 3x, 3 is the coefficient.\n\nUsing variables allows us to write general rules. For example, the area of a rectangle is A = l \u00d7 w \u2014 this applies to any rectangle, not just a specific one.',
        keyPoints: [
          'Variables are symbols (usually letters) that represent unknown numbers',
          'Constants are fixed numbers',
          'The coefficient is the number that multiplies the variable',
          '3x means "3 times x" \u2014 implied multiplication',
        ],
        examples: [
          {
            example: 'Identify the variables, constants, and coefficients in: 5x + 3y - 7',
            solution: 'Variables: x and y\nConstant: 7 (the term without a variable), Coefficients: 5 (before x), 3 (before y)\nThe term -7 is a constant term',
          },
          {
            example: 'Write as an algebraic expression: "half of x plus four"',
            solution: 'x/2 + 4 or (1/2)x + 4',
          },
        ],
        practice: [
          {
            problem: 'If Ari\'s age is x, and Eri is 3 years older, write Eri\'s age and find it if x = 15.',
            solution: 'Eri\'s age = x + 3. If x = 15: Eri\'s age = 15 + 3 = 18 years',
            steps: [
              'Ari\'s age: x',
              'Eri\'s age: x + 3',
              'Substitute x = 15: 15 + 3 = 18',
              'Eri is 18 years old',
            ],
          },
        ],
      },
      {
        title: 'Algebraic Expressions',
        theory: 'An algebraic expression is a combination of variables, constants, and operations (+, -, \u00d7, \u00f7). For example, 2x + 3y - 5 is an algebraic expression.\n\nTerms are the parts of an expression separated by + or -. Like terms are those with the same variable raised to the same power \u2014 e.g. 3x and 5x, or 2y\u00b2 and -y\u00b2.\n\nSimplifying expressions is done by combining like terms \u2014 we add/subtract the coefficients of terms with the same variable.',
        keyPoints: [
          'Like terms have the same variable (and exponent)',
          'We can only add/subtract like terms',
          '3x + 5x = 8x (not 3x + 5x = 8x\u00b2!)',
          '2x + 3y cannot be simplified (unlike terms)',
        ],
        examples: [
          {
            example: 'Simplify: 3x + 2y + 5x - y',
            solution: '= (3x + 5x) + (2y - y)\n= 8x + y',
          },
          {
            example: 'Simplify: 4a\u00b2 - 3a + 7 + 2a\u00b2 + 5a - 2',
            solution: '= (4a\u00b2 + 2a\u00b2) + (-3a + 5a) + (7 - 2)\n= 6a\u00b2 + 2a + 5',
          },
        ],
        practice: [
          {
            problem: 'Simplify: 7x + 3 - 2x + y - 4 + 5y',
            solution: '= 5x + 6y - 1',
            steps: [
              'Group like terms: (7x - 2x) + (y + 5y) + (3 - 4)',
              '7x - 2x = 5x',
              'y + 5y = 6y',
              '3 - 4 = -1',
              'Result: 5x + 6y - 1',
            ],
          },
        ],
      },
      {
        title: 'First-Degree Equations',
        theory: 'An equation is an equality between two expressions. A first-degree (linear) equation has the variable raised to the power of 1. For example, 2x + 3 = 11 is a first-degree equation.\n\nOur goal is to find the value of the variable (to solve the equation). We do this by performing the same operations on both sides of the equation \u2014 this does not change the equality.\n\nStrategy: isolate the variable \u2014 move everything else to the other side.',
        keyPoints: [
          'We can add/subtract the same number from both sides',
          'We can multiply/divide both sides by the same number (not zero)',
          'Verification: substitute the solution and check the equality',
          'Isolating the variable is the main goal',
        ],
        examples: [
          {
            example: 'Solve: 2x + 3 = 11',
            solution: '2x + 3 = 11\n2x = 11 - 3\n2x = 8\nx = 4\nVerify: 2(4) + 3 = 8 + 3 = 11 \u2713',
          },
          {
            example: 'Solve: 5x - 7 = 3x + 9',
            solution: '5x - 3x = 9 + 7\n2x = 16\nx = 8\nVerify: 5(8)-7 = 33 and 3(8)+9 = 33 \u2713',
          },
        ],
        practice: [
          {
            problem: 'Solve: 3(x - 2) + 4 = x + 10',
            solution: 'x = 6',
            steps: [
              'Expand the parentheses: 3x - 6 + 4 = x + 10',
              'Simplify the left side: 3x - 2 = x + 10',
              'Move x to the left: 3x - x = 10 + 2',
              '2x = 12',
              'x = 6',
              'Verify: 3(6-2)+4 = 3\u00d74+4 = 16 = 6+10 \u2713',
            ],
          },
        ],
      },
      {
        title: 'Inequalities',
        theory: 'An inequality is a non-equality relationship between two expressions, using the symbols: < (less than), > (greater than), \u2264 (less than or equal to), \u2265 (greater than or equal to).\n\nThe solution of an inequality is a set of numbers (usually an interval), not just a single number. Solutions are expressed as {x | condition} or with interval notation [a, b], (a, b), etc.\n\nImportant rule: When we multiply/divide by a negative number, the inequality sign reverses!',
        keyPoints: [
          'An inequality has a solution set, not just a single value',
          'Multiplying by a negative number flips the sign: < becomes >',
          'The solution graph is displayed as an interval on the number line',
          'Closed dot (\u25cf) if \u2265 or \u2264, open dot (\u25cb) if > or <',
        ],
        examples: [
          {
            example: 'Solve: 2x + 3 < 11',
            solution: '2x < 11 - 3\n2x < 8\nx < 4\nSolution: all numbers less than 4, i.e. (-\u221e, 4)',
          },
          {
            example: 'Solve: -3x \u2265 12',
            solution: '-3x \u2265 12\nx \u2264 12/(-3)   \u2190 The sign reverses!\nx \u2264 -4\nSolution: (-\u221e, -4]',
          },
        ],
        practice: [
          {
            problem: 'Solve and write as an interval: 5 - 2x > 1',
            solution: 'x < 2, interval (-\u221e, 2)',
            steps: [
              '5 - 2x > 1',
              '-2x > 1 - 5',
              '-2x > -4',
              'x < 2   (the sign reverses because we divide by -2)',
              'Solution: x < 2, or interval (-\u221e, 2)',
            ],
          },
        ],
      },
    ],
  },

  // ===== ALGEBRA: Equations and Functions =====
  'alg-002': {
    lessons: [
      {
        title: 'Systems of Equations',
        theory: 'A system of equations consists of two or more equations with the same variables. The solution of the system is the pair (x, y) that satisfies all equations simultaneously.\n\nThe main methods for solving systems: 1) Substitution \u2014 express one variable and substitute it, 2) Elimination \u2014 multiply the equations and add/subtract to eliminate one variable, 3) Graphing \u2014 find the point of intersection.\n\nA system can have: one solution (the lines intersect), no solution (the lines are parallel), or infinitely many solutions (the lines are identical).',
        keyPoints: [
          'The solution is the pair (x, y) that satisfies both equations',
          'Substitution method: express one variable, substitute it',
          'Elimination method: add/subtract equations to eliminate one variable',
          'A system has 1, 0, or \u221e solutions',
        ],
        examples: [
          {
            example: 'Solve the system: x + y = 7 and x - y = 3',
            solution: 'Elimination method:\nx + y = 7\n+(x - y = 3)\n2x = 10 \u2192 x = 5\nSubstitute: 5 + y = 7 \u2192 y = 2\nSolution: (5, 2)',
          },
          {
            example: 'Solve by substitution: y = 2x - 1 and 3x + y = 9',
            solution: 'Substitute y: 3x + (2x - 1) = 9\n5x - 1 = 9\n5x = 10\nx = 2\ny = 2(2) - 1 = 3\nSolution: (2, 3)',
          },
        ],
        practice: [
          {
            problem: 'Solve the system: 2x + 3y = 12 and 4x - y = 5',
            solution: 'x = 3, y = 2',
            steps: [
              'From the second equation: y = 4x - 5',
              'Substitute into the first: 2x + 3(4x - 5) = 12',
              '2x + 12x - 15 = 12',
              '14x = 27... (wait, let us check)',
              'Elimination method: multiply the second equation by 3: 12x - 3y = 15',
              'Add: 2x + 3y + 12x - 3y = 12 + 15',
              '14x = 27 \u2192 x = 27/14 \u2248 1.93...',
              'Perhaps a problem with non-round numbers \u2014 let us try: 2(3)+3(2)=12 \u2713 and 4(3)-2=10\u22605',
              'Try: x=3/2, y=8/3? Solution: from elimination 14x=27 \u2192 x=27/14',
            ],
          },
        ],
      },
      {
        title: 'Linear Functions',
        theory: 'A linear function is expressed as f(x) = mx + b, where m is the slope and b is the y-intercept. The graph of a linear function is always a straight line.\n\nThe slope m indicates how much y changes when x changes by 1 unit: m = \u0394y/\u0394x = (y\u2082-y\u2081)/(x\u2082-x\u2081). If m > 0, the line goes up to the right; if m < 0, it goes down to the right.\n\nThe y-intercept b indicates where the line crosses the y-axis (when x = 0). This point (0, b) is called the y-intercept.',
        keyPoints: [
          'Standard form: y = mx + b',
          'm = slope (change in y / change in x)',
          'b = y-intercept',
          'Two points are sufficient to draw the line',
        ],
        examples: [
          {
            example: 'Find the slope and y-intercept of the line: y = 3x - 2',
            solution: 'm = 3 (slope)\nb = -2 (y-intercept)\nWhen x=0: y = -2 \u2192 point (0, -2)\nWhen x=1: y = 1 \u2192 point (1, 1)',
          },
          {
            example: 'Find the equation of the line passing through (2, 5) and (4, 9).',
            solution: 'm = (9-5)/(4-2) = 4/2 = 2\ny = mx + b \u2192 5 = 2(2) + b \u2192 b = 1\nEquation: y = 2x + 1',
          },
        ],
        practice: [
          {
            problem: 'Walking 3 km takes 45 minutes. Model this as a linear function and find the time for 7 km.',
            solution: 'y = 15x, where y = minutes and x = km. For 7 km: y = 15\u00d77 = 105 minutes (1 hour 45 min)',
            steps: [
              'Find the slope: 45 minutes / 3 km = 15 min/km',
              'Function: y = 15x (starts from 0)',
              'For x = 7: y = 15 \u00d7 7 = 105 minutes',
              'Convert: 105 minutes = 1 hour and 45 minutes',
            ],
          },
        ],
      },
      {
        title: 'Quadratic Equations',
        theory: 'A quadratic equation has the form ax\u00b2 + bx + c = 0, where a \u2260 0. The second-degree power of the variable makes it "quadratic" (from Latin quadratus = square).\n\nMethods of solving: 1) Factoring \u2014 write as (x + p)(x + q) = 0, 2) The quadratic formula: x = [-b \u00b1 \u221a(b\u00b2 - 4ac)] / 2a, 3) Completing the square.\n\nThe discriminant D = b\u00b2 - 4ac indicates the number of solutions: D > 0 \u2192 2 real solutions, D = 0 \u2192 1 solution, D < 0 \u2192 no real solutions.',
        keyPoints: [
          'Standard form: ax\u00b2 + bx + c = 0',
          'Formula: x = [-b \u00b1 \u221a(b\u00b2 - 4ac)] / 2a',
          'Discriminant D = b\u00b2 - 4ac indicates the number of solutions',
          'Factoring is often the quickest method',
        ],
        examples: [
          {
            example: 'Solve: x\u00b2 - 5x + 6 = 0',
            solution: 'By factoring: (x - 2)(x - 3) = 0\nx - 2 = 0 \u2192 x = 2\nx - 3 = 0 \u2192 x = 3\nSolutions: x = 2 or x = 3',
          },
          {
            example: 'Solve: 2x\u00b2 + 3x - 5 = 0 using the quadratic formula.',
            solution: 'a=2, b=3, c=-5\nD = 3\u00b2 - 4(2)(-5) = 9 + 40 = 49\nx = (-3 \u00b1 \u221a49) / 4 = (-3 \u00b1 7) / 4\nx\u2081 = (-3 + 7)/4 = 1\nx\u2082 = (-3 - 7)/4 = -2.5',
          },
        ],
        practice: [
          {
            problem: 'Solve: x\u00b2 - 4x - 12 = 0',
            solution: 'x = 6 or x = -2',
            steps: [
              'Find two numbers with sum -4 and product -12',
              'The numbers: -6 and +2 (since -6 + 2 = -4 and -6 \u00d7 2 = -12)',
              'Factor: (x - 6)(x + 2) = 0',
              'x - 6 = 0 \u2192 x = 6',
              'x + 2 = 0 \u2192 x = -2',
            ],
          },
        ],
      },
    ],
  },

  // ===== GEOMETRY: Fundamentals of Geometry =====
  'geo-001': {
    lessons: [
      {
        title: 'Points, Lines, and Planes',
        theory: 'Geometry studies shapes, sizes, and positions of figures. The basic elements are: the point (zero dimensions \u2014 only position), the line (one dimension \u2014 length without width), and the plane (two dimensions \u2014 a flat, infinite surface).\n\nA straight line passes through two points and extends infinitely in both directions. A ray starts from one point and goes infinitely in one direction. A line segment has two endpoints and a definite length.\n\nTwo lines are: parallel (they never intersect), perpendicular (they intersect at a 90\u00b0 angle), or secant (they intersect at another angle).',
        keyPoints: [
          'A point has position, but no size',
          'Two points determine exactly one straight line',
          'Parallel lines never intersect',
          'Perpendicular lines form a 90\u00b0 angle',
        ],
        examples: [
          {
            example: 'How many lines can pass through a single point?',
            solution: 'Infinitely many lines can pass through a point \u2014 you can rotate the line around the point in any direction.',
          },
          {
            example: 'Can two lines be simultaneously parallel and perpendicular to each other?',
            solution: 'No! Parallel lines never intersect, while perpendicular lines do intersect (and form a 90\u00b0 angle). These are contradictory properties.',
          },
        ],
        practice: [
          {
            problem: 'If line AB is parallel to CD, and CD is perpendicular to EF, what relationship exists between AB and EF?',
            solution: 'AB \u22a5 EF (AB is perpendicular to EF)',
            steps: [
              'AB \u2225 CD (given)',
              'CD \u22a5 EF (given)',
              'If AB \u2225 CD, any line perpendicular to CD is also perpendicular to AB',
              'Therefore AB \u22a5 EF',
            ],
          },
        ],
      },
      {
        title: 'Angles and Their Measurement',
        theory: 'An angle is formed by two rays sharing the same endpoint (vertex). Angles are measured in degrees (\u00b0). A full circle = 360\u00b0.\n\nTypes of angles: Acute (0\u00b0 < \u03b1 < 90\u00b0), right (\u03b1 = 90\u00b0), obtuse (90\u00b0 < \u03b1 < 180\u00b0), straight (\u03b1 = 180\u00b0), and full (\u03b1 = 360\u00b0).\n\nComplementary angles are two angles whose sum is 90\u00b0. Supplementary angles have a sum of 180\u00b0. Vertical (opposite) angles are equal.',
        keyPoints: [
          'Right angle = 90\u00b0',
          'Straight angle = 180\u00b0',
          'Complementary angles = 90\u00b0 (together)',
          'Supplementary angles = 180\u00b0 (together)',
        ],
        examples: [
          {
            example: 'Find the complementary and supplementary angles of 35\u00b0.',
            solution: 'Complementary: 90\u00b0 - 35\u00b0 = 55\u00b0\nSupplementary: 180\u00b0 - 35\u00b0 = 145\u00b0',
          },
          {
            example: 'Two supplementary angles are in the ratio 2:3. Find them.',
            solution: '2x + 3x = 180\u00b0\n5x = 180\u00b0\nx = 36\u00b0\nThe angles: 2\u00d736\u00b0 = 72\u00b0 and 3\u00d736\u00b0 = 108\u00b0',
          },
        ],
        practice: [
          {
            problem: 'The three angles of a triangle are in the ratio 1:2:3. Find each angle.',
            solution: '30\u00b0, 60\u00b0, 90\u00b0 (right triangle)',
            steps: [
              'The sum of angles of a triangle = 180\u00b0',
              '1x + 2x + 3x = 180\u00b0',
              '6x = 180\u00b0',
              'x = 30\u00b0',
              'The angles: 30\u00b0, 60\u00b0, 90\u00b0',
            ],
          },
        ],
      },
      {
        title: 'Triangles',
        theory: 'A triangle is a figure with three sides and three angles. The sum of the interior angles of any triangle is always 180\u00b0.\n\nTypes by angle: right (has a 90\u00b0 angle), acute (all angles < 90\u00b0), obtuse (one angle > 90\u00b0).\nTypes by sides: equilateral (3 equal sides), isosceles (2 equal sides), scalene (no equal sides).\n\nArea formula: A = (base \u00d7 height) / 2',
        keyPoints: [
          'Sum of angles = 180\u00b0',
          'An equilateral triangle has all angles equal to 60\u00b0',
          'Pythagorean theorem: a\u00b2 + b\u00b2 = c\u00b2 (right triangles only)',
          'Area = \u00bd \u00d7 base \u00d7 height',
        ],
        examples: [
          {
            example: 'Two angles of a triangle are 45\u00b0 and 75\u00b0. Find the third angle.',
            solution: 'Third angle = 180\u00b0 - 45\u00b0 - 75\u00b0 = 60\u00b0',
          },
          {
            example: 'A right triangle has legs of 6 cm and 8 cm. Find the hypotenuse.',
            solution: 'c\u00b2 = 6\u00b2 + 8\u00b2 = 36 + 64 = 100\nc = \u221a100 = 10 cm',
          },
        ],
        practice: [
          {
            problem: 'Calculate the area of a triangle with base 12 cm and height 7 cm.',
            solution: 'A = \u00bd \u00d7 12 \u00d7 7 = 42 cm\u00b2',
            steps: [
              'Area formula: A = (b \u00d7 h) / 2',
              'b = 12 cm, h = 7 cm',
              'A = (12 \u00d7 7) / 2',
              'A = 84 / 2',
              'A = 42 cm\u00b2',
            ],
          },
        ],
      },
      {
        title: 'Quadrilaterals',
        theory: 'A quadrilateral has four sides and four angles. The sum of its interior angles = 360\u00b0.\n\nTypes: square (4 equal sides, 4 angles of 90\u00b0), rectangle (4 angles of 90\u00b0, opposite sides equal), rhombus (4 equal sides), parallelogram (opposite sides parallel and equal), trapezoid (only one pair of parallel sides).\n\nFormulas: square: P = 4a, A = a\u00b2; rectangle: P = 2(l+w), A = l\u00d7w; parallelogram: A = b \u00d7 h',
        keyPoints: [
          'Sum of angles of a quadrilateral = 360\u00b0',
          'Square: everything is equal \u2014 sides and angles',
          'Rectangle: angles of 90\u00b0, opposite sides equal',
          'Rhombus: 4 equal sides (not necessarily 90\u00b0)',
        ],
        examples: [
          {
            example: 'Calculate the perimeter and area of a rectangle measuring 8\u00d75 cm.',
            solution: 'Perimeter: P = 2(8 + 5) = 2 \u00d7 13 = 26 cm\nArea: A = 8 \u00d7 5 = 40 cm\u00b2',
          },
          {
            example: 'A square has an area of 169 cm\u00b2. What is the length of its side?',
            solution: 'A = a\u00b2\n169 = a\u00b2\na = \u221a169 = 13 cm',
          },
        ],
        practice: [
          {
            problem: 'A garden plot is shaped like a trapezoid with bases of 10 m and 6 m, and height 4 m. Calculate the area.',
            solution: 'A = [(10 + 6)/2] \u00d7 4 = 8 \u00d7 4 = 32 m\u00b2',
            steps: [
              'Trapezoid area formula: A = [(b\u2081 + b\u2082)/2] \u00d7 h',
              'b\u2081 = 10 m, b\u2082 = 6 m, h = 4 m',
              'A = [(10 + 6)/2] \u00d7 4',
              'A = [16/2] \u00d7 4',
              'A = 8 \u00d7 4 = 32 m\u00b2',
            ],
          },
        ],
      },
    ],
  },

  // ===== STATISTICS: Introduction to Statistics =====
  'stat-001': {
    lessons: [
      {
        title: 'Basic Concepts of Statistics',
        theory: 'Statistics is the science of collecting, organizing, analyzing, and interpreting data. It is divided into: descriptive statistics (describes the data) and inferential statistics (draws conclusions about the population from a sample).\n\nThe population is the entire set of individuals/objects under study. The sample is a subset of the population. The values (data) are the information collected.\n\nVariables can be: qualitative/categorical (e.g. color, gender) or quantitative/numerical (which can be continuous or discrete).',
        keyPoints: [
          'Population = the entire set under study',
          'Sample = a representative subset',
          'Qualitative variable = categorical (color, type)',
          'Quantitative variable = numerical (height, weight)',
        ],
        examples: [
          {
            example: 'A study of the average grades of all students in Albania: identify the population and variable.',
            solution: 'Population: all students in Albania\nVariable: average grade (quantitative, continuous)',
          },
          {
            example: 'A survey about preferred sport: how is the variable classified?',
            solution: 'Preferred sport is a qualitative/categorical variable \u2014 it has categories such as "football," "basketball," "swimming," etc. It cannot be measured numerically.',
          },
        ],
        practice: [
          {
            problem: 'Of 200 university students, they were asked how many hours per week they study. Identify: the population, sample, variable, and type of variable.',
            solution: 'Population: all students, Sample: 200 students, Variable: study hours/week (quantitative, continuous)',
            steps: [
              'Population: all students of the university',
              'Sample: the 200 students selected for the survey',
              'Variable: number of study hours per week',
              'Type: quantitative, continuous (0.5 hours, 3.2 hours, etc.)',
            ],
          },
        ],
      },
      {
        title: 'Averages and Measures of Central Tendency',
        theory: 'Measures of central tendency tell us the "typical" value of the data. The three main measures are the mean, median, and mode.\n\nThe arithmetic mean = sum of all values / number of values. It is strongly influenced by extreme values.\nThe median = the middle value when the data are sorted. It resists extreme values.\nThe mode = the value that occurs most frequently. There can be 0, 1, or multiple modes.',
        keyPoints: [
          'Mean = \u03a3x / n',
          'Median = the middle value (or the average of the two middle values)',
          'Mode = the most frequent value',
          'The median and mode are more resistant to outliers',
        ],
        examples: [
          {
            example: 'Data: 4, 7, 2, 9, 7, 5, 3. Find the mean, median, and mode.',
            solution: 'Mean: (4+7+2+9+7+5+3)/7 = 37/7 \u2248 5.29\nMedian (sorted: 2,3,4,5,7,7,9): middle value = 5\nMode: 7 (appears 2 times)',
          },
          {
            example: 'Monthly salaries: 30,000, 32,000, 31,000, 200,000 lek. Which measure of central tendency best represents the group?',
            solution: 'Mean: 293,000/4 = 73,250 lek \u2014 heavily influenced by 200,000\nMedian: (30,000+32,000)/2 = 31,000 \u2014 more stable\nThe median best represents the majority',
          },
        ],
        practice: [
          {
            problem: 'Test scores: 85, 92, 78, 85, 90, 75, 88, 85. Find the mean and mode.',
            solution: 'Mean = 678/8 = 84.75; Mode = 85',
            steps: [
              'Sum: 85+92+78+85+90+75+88+85 = 678',
              'Mean: 678/8 = 84.75',
              'The value that occurs most frequently: 85 (appears 3 times)',
              'Mode = 85',
            ],
          },
        ],
      },
      {
        title: 'Spread and Variance',
        theory: 'Measures of spread (dispersion) tell us how scattered the data are around the central value.\n\nRange = maximum value - minimum value. It shows the total spread but is influenced by extremes.\nVariance (\u03c3\u00b2) = the mean of the squared deviations from the mean.\nStandard deviation (\u03c3) = \u221avariance. It has the same unit of measurement as the data \u2014 easy to interpret.\n\nA small standard deviation = data clustered around the mean. A large one = data widely spread.',
        keyPoints: [
          'Range = max - min (a simple indicator of spread)',
          'Standard deviation = the "typical distance" from the mean',
          '\u03c3\u00b2 = \u03a3(x\u1d62 - x\u0304)\u00b2 / n (variance)',
          '\u03c3 = \u221a(variance) \u2014 standard deviation',
        ],
        examples: [
          {
            example: 'Find the range and standard deviation of: 2, 4, 4, 4, 5, 5, 7, 9',
            solution: 'Range: 9 - 2 = 7\nMean: 40/8 = 5\nSquared deviations: 9, 1, 1, 1, 0, 0, 4, 16\nVariance: 32/8 = 4\nStandard deviation: \u221a4 = 2',
          },
        ],
        practice: [
          {
            problem: 'Two classes had average scores of 75 with standard deviations of 3 and 12 respectively. Which class has more consistent scores?',
            solution: 'The class with \u03c3=3 has more consistent scores (close to the mean). The class with \u03c3=12 has high variation.',
            steps: [
              'The means are equal: 75',
              'Class 1: \u03c3 = 3, so scores are mostly between 72\u201378',
              'Class 2: \u03c3 = 12, scores are widely spread (63\u201387)',
              'Class 1 has more consistent performance',
            ],
          },
        ],
      },
    ],
  },
};
