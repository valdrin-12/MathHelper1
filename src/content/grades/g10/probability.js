// Grade 10 · Theme 8: Probability (March)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g10-probability',
  i18n: {
    al: { title: 'Probabiliteti', description: 'Probabiliteti eksperimental dhe teorik, denduria e pritshme, ngjarjet e papajtueshme dhe të pavarura.' },
    en: { title: 'Probability', description: 'Experimental and theoretical probability, expected frequency, mutually exclusive and independent events.' },
    de: { title: 'Wahrscheinlichkeit', description: 'Relative Häufigkeit und Wahrscheinlichkeit, erwartete Häufigkeit, unvereinbare und unabhängige Ereignisse.' },
  },
  lessons: [
    // ───────── 1. Experimental and theoretical
    {
      slug: 'g10-probability-experimental-theoretical',
      visuals: [{
        type: 'barChart', max: 120, step: 20, showValues: true,
        bars: [{ label: alt('stemë', 'heads', 'Kopf'), value: 108 }, { label: alt('numër', 'tails', 'Zahl'), value: 92 }],
        caption: alt('200 hedhje të monedhës: stema doli 108 herë; denduria relative 108/200 = 0,54 (teorikisht 0,5).', '200 coin tosses: heads came up 108 times; relative frequency 108/200 = 0.54 (in theory 0.5).', '200 Münzwürfe: 108-mal Kopf; relative Häufigkeit 108/200 = 0,54 (theoretisch 0,5).'),
        alt: alt('Dy shtylla: stemë 108, numër 92.', 'Two bars: heads 108, tails 92.', 'Zwei Säulen: Kopf 108, Zahl 92.'),
      }],
      answers: {
        examples: [[['108 / 200', 0.54]], [['500 * 0.5', 250]]],
        practice: [[['28 / 120', 0.233, 0.0005, '0.233'], ['120 / 6', 20]], [['200 * 0.3', 60]], [['1 - 0.35', 0.65]]],
      },
      al: {
        title: 'Probabiliteti eksperimental dhe teorik',
        objectives: ['Të llogaritni dendurinë relative dhe ta krahasoni me probabilitetin teorik.', 'Të llogaritni dendurinë e pritshme n · P.'],
        theory: 'Probabiliteti teorik del nga numërimi i rezultateve njësoj të mundshme: P(stemë) = 1/2. Probabiliteti eksperimental (denduria relative) del nga një eksperiment: 108 stema në 200 hedhje → 108/200 = 0,54.\n\nSa më i madh numri i provave, aq më shumë afrohet denduria relative te probabiliteti teorik. Një ndryshim i madh me shumë prova mund të tregojë se monedha ose zari nuk janë të drejtë.\n\nDenduria e pritshme = n · P: në 500 hedhje presim rreth 500 · 0,5 = 250 stema. Ngjarja e kundërt: P(jo A) = 1 − P(A); P(shi) = 0,35 → P(jo shi) = 0,65.',
        keyPoints: ['Denduria relative = herë : prova', 'E pritshme = n · P', 'P(jo A) = 1 − P(A)'],
        examples: [
          { example: 'Monedha hidhet 200 herë dhe del stemë 108 herë. Sa është denduria relative?', solution: '108/200 = 0,54.' },
          { example: 'Sa stema presim në 500 hedhje?', solution: '500 · 0,5 = 250.' },
        ],
        commonMistakes: [
          { mistake: 'Me 0,54 në 200 hedhje, monedha nuk është e drejtë.', fix: 'Ndryshime të vogla janë normale; vetëm me shumë prova dhe ndryshim të madh dyshojmë.' },
        ],
        practice: [
          { problem: 'Zari hidhet 120 herë dhe 6-shja del 28 herë. Sa është denduria relative dhe sa do të pritej?', solution: '≈ 0,233; pritej 20', steps: ['28/120 ≈ 0,233.', '120 · 1/6 = 20.'] },
          { problem: 'Një rrotë ka P(e kuqe) = 0,3. Sa herë pritet e kuqja në 200 rrotullime?', solution: '60', steps: ['200 · 0,3.', '= 60.'] },
          { problem: 'P(shi) = 0,35. Sa është P(jo shi)?', solution: '0,65', steps: ['1 − 0,35.', '= 0,65.'] },
        ],
      },
      en: {
        title: 'Experimental and theoretical probability',
        objectives: ['Work out relative frequency and compare it with theoretical probability.', 'Work out the expected frequency n · P.'],
        theory: 'Theoretical probability comes from counting equally likely outcomes: P(heads) = 1/2. Experimental probability (relative frequency) comes from an experiment: 108 heads in 200 tosses → 108/200 = 0.54.\n\nThe more trials, the closer the relative frequency usually gets to the theoretical probability. A big difference after many trials may show that the coin or die is biased.\n\nExpected frequency = n · P: in 500 tosses we expect about 500 · 0.5 = 250 heads. The complement: P(not A) = 1 − P(A); P(rain) = 0.35 → P(no rain) = 0.65.',
        keyPoints: ['Relative frequency = times ÷ trials', 'Expected = n · P', 'P(not A) = 1 − P(A)'],
        examples: [
          { example: 'A coin is tossed 200 times and lands heads 108 times. What is the relative frequency?', solution: '108/200 = 0.54.' },
          { example: 'How many heads do we expect in 500 tosses?', solution: '500 · 0.5 = 250.' },
        ],
        commonMistakes: [
          { mistake: 'With 0.54 in 200 tosses the coin is biased.', fix: 'Small differences are normal; only with many trials and a big difference do we suspect bias.' },
        ],
        practice: [
          { problem: 'A die is thrown 120 times and a 6 comes up 28 times. What is the relative frequency, and how many were expected?', solution: '≈ 0.233; 20 expected', steps: ['28/120 ≈ 0.233.', '120 · 1/6 = 20.'] },
          { problem: 'A spinner has P(red) = 0.3. How many reds are expected in 200 spins?', solution: '60', steps: ['200 · 0.3.', '= 60.'] },
          { problem: 'P(rain) = 0.35. What is P(no rain)?', solution: '0.65', steps: ['1 − 0.35.', '= 0.65.'] },
        ],
      },
      de: {
        title: 'Relative Häufigkeit und Wahrscheinlichkeit',
        objectives: ['Die relative Häufigkeit berechnen und mit der Wahrscheinlichkeit vergleichen.', 'Die erwartete Häufigkeit n · P berechnen.'],
        theory: 'Die (Laplace-)Wahrscheinlichkeit ergibt sich durch Abzählen gleich wahrscheinlicher Ergebnisse: P(Kopf) = 1/2. Die relative Häufigkeit ergibt sich aus einem Versuch: 108-mal Kopf bei 200 Würfen → 108/200 = 0,54.\n\nJe mehr Versuche, desto näher liegt die relative Häufigkeit meist an der Wahrscheinlichkeit. Eine große Abweichung nach vielen Versuchen kann auf eine gezinkte Münze oder einen gezinkten Würfel hinweisen.\n\nErwartete Häufigkeit = n · P: Bei 500 Würfen erwartet man etwa 500 · 0,5 = 250-mal Kopf. Gegenereignis: P(nicht A) = 1 − P(A); P(Regen) = 0,35 → P(kein Regen) = 0,65.',
        keyPoints: ['Relative Häufigkeit = Anzahl : Versuche', 'Erwartet = n · P', 'P(nicht A) = 1 − P(A)'],
        examples: [
          { example: 'Eine Münze wird 200-mal geworfen und zeigt 108-mal Kopf. Wie groß ist die relative Häufigkeit?', solution: '108/200 = 0,54.' },
          { example: 'Wie oft erwartet man Kopf bei 500 Würfen?', solution: '500 · 0,5 = 250.' },
        ],
        commonMistakes: [
          { mistake: 'Bei 0,54 nach 200 Würfen ist die Münze gezinkt.', fix: 'Kleine Abweichungen sind normal; erst bei vielen Versuchen und großer Abweichung besteht Verdacht.' },
        ],
        practice: [
          { problem: 'Ein Würfel wird 120-mal geworfen, die 6 fällt 28-mal. Wie groß ist die relative Häufigkeit, wie oft war die 6 zu erwarten?', solution: '≈ 0,233; erwartet 20', steps: ['28/120 ≈ 0,233.', '120 · 1/6 = 20.'] },
          { problem: 'Ein Glücksrad hat P(rot) = 0,3. Wie oft erwartet man Rot bei 200 Drehungen?', solution: '60', steps: ['200 · 0,3.', '= 60.'] },
          { problem: 'P(Regen) = 0,35. Wie groß ist P(kein Regen)?', solution: '0,65', steps: ['1 − 0,35.', '= 0,65.'] },
        ],
      },
    },

    // ───────── 2. Mutually exclusive and independent events
    {
      slug: 'g10-probability-mutually-exclusive',
      visuals: [{
        type: 'pieChart',
        slices: [{ label: alt('e kuqe 0,3', 'red 0.3', 'rot 0,3'), value: 30 }, { label: alt('blu 0,45', 'blue 0.45', 'blau 0,45'), value: 45 }, { label: alt('e gjelbër 0,25', 'green 0.25', 'grün 0,25'), value: 25 }],
        caption: alt('Probabilitetet e të gjitha rezultateve të papajtueshme mblidhen në 1: 0,3 + 0,45 + 0,25 = 1.', 'The probabilities of all mutually exclusive outcomes add up to 1: 0.3 + 0.45 + 0.25 = 1.', 'Die Wahrscheinlichkeiten aller unvereinbaren Ergebnisse ergeben 1: 0,3 + 0,45 + 0,25 = 1.'),
        alt: alt('Diagram rrethor: e kuqe 30%, blu 45%, e gjelbër 25%.', 'Pie chart: red 30%, blue 45%, green 25%.', 'Kreisdiagramm: rot 30 %, blau 45 %, grün 25 %.'),
      }],
      answers: {
        examples: [[['0.3 + 0.45', 0.75], ['1 - 0.75', 0.25]], [['0.5 * 0.5', 0.25]]],
        practice: [[['0.2 + 0.5', 0.7]], [['1 - (0.1 + 0.25 + 0.4)', 0.25]], [['1/6 * 1/2', '1/12', 1e-9, '1/12']]],
      },
      al: {
        title: 'Ngjarjet e papajtueshme dhe të pavarura',
        objectives: ['Të përdorni rregullën e mbledhjes për ngjarje të papajtueshme.', 'Të përdorni rregullën e shumëzimit për ngjarje të pavarura.'],
        theory: 'Ngjarjet janë të papajtueshme kur nuk mund të ndodhin njëkohësisht. Atëherë P(A ose B) = P(A) + P(B). Probabilitetet e të gjitha rezultateve të mundshme të papajtueshme mblidhen në 1.\n\nShembull: P(e kuqe) = 0,3, P(blu) = 0,45 → P(e kuqe ose blu) = 0,75; P(e gjelbër) = 1 − 0,75 = 0,25.\n\nNgjarjet janë të pavarura kur njëra nuk ndikon tjetrën (p.sh. dy hedhje). Atëherë P(A dhe B) = P(A) · P(B): P(dy stema) = 0,5 · 0,5 = 0,25; P(6 në zar dhe stemë) = 1/6 · 1/2 = 1/12.',
        keyPoints: ['Papajtueshme: P(A ose B) = P(A) + P(B)', 'Shuma e të gjithave = 1', 'Të pavarura: P(A dhe B) = P(A) · P(B)'],
        examples: [
          { example: 'P(e kuqe) = 0,3, P(blu) = 0,45, pjesa tjetër e gjelbër. Gjeni P(e kuqe ose blu) dhe P(e gjelbër).', solution: '0,3 + 0,45 = 0,75; 1 − 0,75 = 0,25.' },
          { example: 'Sa është probabiliteti i dy stemave në dy hedhje?', solution: 'Të pavarura: 0,5 · 0,5 = 0,25.' },
        ],
        commonMistakes: [
          { mistake: 'P(dy stema) = 0,5 + 0,5 = 1', fix: 'Për "dhe" te ngjarje të pavarura shumëzohet: 0,25.' },
          { mistake: 'Probabilitetet mblidhen edhe kur ngjarjet mbivendosen.', fix: 'Mbledhja e thjeshtë vlen vetëm për ngjarje të papajtueshme.' },
        ],
        practice: [
          { problem: 'A dhe B janë të papajtueshme, P(A) = 0,2, P(B) = 0,5. Gjeni P(A ose B).', solution: '0,7', steps: ['0,2 + 0,5.', '= 0,7.'] },
          { problem: 'Katër rezultate kanë probabilitete 0,1; 0,25; 0,4 dhe x. Gjeni x.', solution: '0,25', steps: ['Shuma duhet 1.', 'x = 1 − 0,75 = 0,25.'] },
          { problem: 'Hidhen një zar dhe një monedhë. Sa është P(6 dhe stemë)?', solution: '1/12', steps: ['Të pavarura: 1/6 · 1/2.', '= 1/12.'] },
        ],
      },
      en: {
        title: 'Mutually exclusive and independent events',
        objectives: ['Use the addition rule for mutually exclusive events.', 'Use the multiplication rule for independent events.'],
        theory: 'Events are mutually exclusive when they cannot happen at the same time. Then P(A or B) = P(A) + P(B). The probabilities of all possible mutually exclusive outcomes add up to 1.\n\nExample: P(red) = 0.3, P(blue) = 0.45 → P(red or blue) = 0.75; P(green) = 1 − 0.75 = 0.25.\n\nEvents are independent when one does not affect the other (e.g. two tosses). Then P(A and B) = P(A) · P(B): P(two heads) = 0.5 · 0.5 = 0.25; P(6 on a die and heads) = 1/6 · 1/2 = 1/12.',
        keyPoints: ['Mutually exclusive: P(A or B) = P(A) + P(B)', 'All together = 1', 'Independent: P(A and B) = P(A) · P(B)'],
        examples: [
          { example: 'P(red) = 0.3, P(blue) = 0.45, the rest green. Find P(red or blue) and P(green).', solution: '0.3 + 0.45 = 0.75; 1 − 0.75 = 0.25.' },
          { example: 'What is the probability of two heads in two tosses?', solution: 'Independent: 0.5 · 0.5 = 0.25.' },
        ],
        commonMistakes: [
          { mistake: 'P(two heads) = 0.5 + 0.5 = 1', fix: 'For "and" with independent events, multiply: 0.25.' },
          { mistake: 'Adding probabilities even when events overlap.', fix: 'Simple adding only works for mutually exclusive events.' },
        ],
        practice: [
          { problem: 'A and B are mutually exclusive, P(A) = 0.2, P(B) = 0.5. Find P(A or B).', solution: '0.7', steps: ['0.2 + 0.5.', '= 0.7.'] },
          { problem: 'Four outcomes have probabilities 0.1; 0.25; 0.4 and x. Find x.', solution: '0.25', steps: ['They must add to 1.', 'x = 1 − 0.75 = 0.25.'] },
          { problem: 'A die and a coin are thrown. What is P(6 and heads)?', solution: '1/12', steps: ['Independent: 1/6 · 1/2.', '= 1/12.'] },
        ],
      },
      de: {
        title: 'Unvereinbare und unabhängige Ereignisse',
        objectives: ['Die Summenregel für unvereinbare Ereignisse anwenden.', 'Die Produktregel für unabhängige Ereignisse anwenden.'],
        theory: 'Ereignisse sind unvereinbar, wenn sie nicht gleichzeitig eintreten können. Dann gilt P(A oder B) = P(A) + P(B). Die Wahrscheinlichkeiten aller möglichen unvereinbaren Ergebnisse ergeben zusammen 1.\n\nBeispiel: P(rot) = 0,3, P(blau) = 0,45 → P(rot oder blau) = 0,75; P(grün) = 1 − 0,75 = 0,25.\n\nEreignisse sind unabhängig, wenn das eine das andere nicht beeinflusst (z. B. zwei Würfe). Dann gilt P(A und B) = P(A) · P(B): P(zweimal Kopf) = 0,5 · 0,5 = 0,25; P(6 beim Würfel und Kopf) = 1/6 · 1/2 = 1/12.',
        keyPoints: ['Unvereinbar: P(A oder B) = P(A) + P(B)', 'Alle zusammen = 1', 'Unabhängig: P(A und B) = P(A) · P(B)'],
        examples: [
          { example: 'P(rot) = 0,3, P(blau) = 0,45, der Rest grün. Bestimmen Sie P(rot oder blau) und P(grün).', solution: '0,3 + 0,45 = 0,75; 1 − 0,75 = 0,25.' },
          { example: 'Wie groß ist die Wahrscheinlichkeit für zweimal Kopf bei zwei Würfen?', solution: 'Unabhängig: 0,5 · 0,5 = 0,25.' },
        ],
        commonMistakes: [
          { mistake: 'P(zweimal Kopf) = 0,5 + 0,5 = 1', fix: 'Bei „und“ mit unabhängigen Ereignissen multipliziert man: 0,25.' },
          { mistake: 'Wahrscheinlichkeiten addieren, auch wenn sich Ereignisse überschneiden.', fix: 'Einfaches Addieren gilt nur für unvereinbare Ereignisse.' },
        ],
        practice: [
          { problem: 'A und B sind unvereinbar, P(A) = 0,2, P(B) = 0,5. Bestimmen Sie P(A oder B).', solution: '0,7', steps: ['0,2 + 0,5.', '= 0,7.'] },
          { problem: 'Vier Ergebnisse haben die Wahrscheinlichkeiten 0,1; 0,25; 0,4 und x. Bestimmen Sie x.', solution: '0,25', steps: ['Summe muss 1 sein.', 'x = 1 − 0,75 = 0,25.'] },
          { problem: 'Ein Würfel und eine Münze werden geworfen. Wie groß ist P(6 und Kopf)?', solution: '1/12', steps: ['Unabhängig: 1/6 · 1/2.', '= 1/12.'] },
        ],
      },
    },
  ],
};
