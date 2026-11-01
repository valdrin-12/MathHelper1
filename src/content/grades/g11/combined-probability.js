// Grade 11 · Theme 8: Combined probability (March–April)
const alt = (al, en, de) => ({ al, en, de });
const DICE = [1, 2, 3, 4, 5, 6];

export default {
  id: 'g11-combined-probability',
  i18n: {
    al: { title: 'Probabiliteti i ngjarjeve të kombinuara', description: 'Diagramet e Venit, hapësira e rezultateve për dy prova, diagrami pemë me dhe pa kthim, probabiliteti me kusht.' },
    en: { title: 'Combined probability', description: 'Venn diagrams, sample spaces for two trials, tree diagrams with and without replacement, conditional probability.' },
    de: { title: 'Zusammengesetzte Wahrscheinlichkeit', description: 'Venn-Diagramme, Ergebnisräume zweistufiger Versuche, Baumdiagramme mit und ohne Zurücklegen, bedingte Wahrscheinlichkeit.' },
  },
  lessons: [
    // ───────── 1. Venn diagrams
    {
      slug: 'g11-combined-probability-venn-diagrams',
      visuals: [{
        type: 'vennDiagram',
        a: { label: alt('F: futboll', 'F: football', 'F: Fußball'), only: '13' },
        b: { label: alt('B: basketboll', 'B: basketball', 'B: Basketball'), only: '7' },
        both: '5', outside: '5',
        caption: alt('30 nxënës: 18 futboll, 12 basketboll, 5 të dyja → 13 + 5 + 7 = 25 luajnë diçka, 5 asnjë.', '30 students: 18 football, 12 basketball, 5 both → 13 + 5 + 7 = 25 play something, 5 neither.', '30 Lernende: 18 Fußball, 12 Basketball, 5 beides → 13 + 5 + 7 = 25 spielen etwas, 5 keines.'),
        alt: alt('Diagram i Venit: vetëm futboll 13, të dyja 5, vetëm basketboll 7, jashtë 5.', 'Venn diagram: football only 13, both 5, basketball only 7, outside 5.', 'Venn-Diagramm: nur Fußball 13, beides 5, nur Basketball 7, außerhalb 5.'),
      }],
      answers: {
        examples: [[['30 - (18 + 12 - 5)', 5]], [['18 - 5', 13]]],
        practice: [[['20 + 15 - 8', 27]], [['0.5 + 0.4 - 0.2', 0.7]], [['5 / 30', '1/6', 1e-9, '1/6']]],
      },
      al: {
        title: 'Bashkësitë dhe diagramet e Venit',
        objectives: ['Të plotësoni një diagram të Venit nga të dhënat, duke filluar nga prerja.', 'Të përdorni n(A ∪ B) = n(A) + n(B) − n(A ∩ B) dhe të njëjtën rregull për probabilitetet.'],
        theory: 'Diagrami i Venit ka katër zona: vetëm A, A ∩ B (të dyja), vetëm B dhe jashtë të dyjave. Plotësimi fillon gjithmonë nga prerja: 5 luajnë të dyja, prandaj vetëm futboll 18 − 5 = 13 dhe vetëm basketboll 12 − 5 = 7.\n\nNë A ∪ B (të paktën njëra) prerja numërohet një herë: n(A ∪ B) = 18 + 12 − 5 = 25. Jashtë mbeten 30 − 25 = 5.\n\nE njëjta për probabilitetet: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
        keyPoints: ['Fillo nga prerja A ∩ B', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)'],
        examples: [
          { example: 'Në një klasë me 30 nxënës, 18 luajnë futboll, 12 basketboll dhe 5 të dyja. Sa nuk luajnë asnjë?', solution: '18 + 12 − 5 = 25 luajnë diçka; 30 − 25 = 5 asnjë.' },
          { example: 'Sa luajnë vetëm futboll dhe sa është probabiliteti që një nxënës i zgjedhur rastësisht të luajë vetëm futboll?', solution: '18 − 5 = 13; P = 13/30.' },
        ],
        commonMistakes: [
          { mistake: 'n(F ∪ B) = 18 + 12 = 30.', fix: '5 nxënësit e prerjes numërohen dy herë; zbritini një herë: 25.' },
          { mistake: 'Në zonën "vetëm F" shkruhet 18.', fix: '18 përfshin edhe prerjen: vetëm F = 18 − 5 = 13.' },
        ],
        practice: [
          { problem: 'n(A) = 20, n(B) = 15, n(A ∩ B) = 8. Sa është n(A ∪ B)?', solution: '27', steps: ['20 + 15 − 8.', '= 27.'] },
          { problem: 'P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,2. Sa është P(A ∪ B)?', solution: '0,7', steps: ['0,5 + 0,4 − 0,2.', '= 0,7.'] },
          { problem: 'Nga diagrami (30 nxënës), sa është probabiliteti që një nxënës të luajë të dyja?', solution: '1/6', steps: ['5 nga 30.', '5/30 = 1/6.'] },
        ],
      },
      en: {
        title: 'Sets and Venn diagrams',
        objectives: ['Fill in a Venn diagram from data, starting with the overlap.', 'Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B) and the same rule for probabilities.'],
        theory: 'A Venn diagram has four regions: A only, A ∩ B (both), B only and outside both. Always start with the overlap: 5 play both, so football only is 18 − 5 = 13 and basketball only is 12 − 5 = 7.\n\nIn A ∪ B (at least one) the overlap is counted once: n(A ∪ B) = 18 + 12 − 5 = 25. Outside there are 30 − 25 = 5.\n\nThe same for probabilities: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
        keyPoints: ['Start with the overlap A ∩ B', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)'],
        examples: [
          { example: 'In a class of 30 students, 18 play football, 12 basketball and 5 both. How many play neither?', solution: '18 + 12 − 5 = 25 play something; 30 − 25 = 5 neither.' },
          { example: 'How many play football only, and what is the probability that a student picked at random plays football only?', solution: '18 − 5 = 13; P = 13/30.' },
        ],
        commonMistakes: [
          { mistake: 'n(F ∪ B) = 18 + 12 = 30.', fix: 'The 5 in the overlap are counted twice; take them off once: 25.' },
          { mistake: '18 is written in the "F only" region.', fix: '18 includes the overlap: F only = 18 − 5 = 13.' },
        ],
        practice: [
          { problem: 'n(A) = 20, n(B) = 15, n(A ∩ B) = 8. What is n(A ∪ B)?', solution: '27', steps: ['20 + 15 − 8.', '= 27.'] },
          { problem: 'P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. What is P(A ∪ B)?', solution: '0.7', steps: ['0.5 + 0.4 − 0.2.', '= 0.7.'] },
          { problem: 'From the diagram (30 students), what is the probability that a student plays both?', solution: '1/6', steps: ['5 out of 30.', '5/30 = 1/6.'] },
        ],
      },
      de: {
        title: 'Mengen und Venn-Diagramme',
        objectives: ['Ein Venn-Diagramm aus Daten ausfüllen und dabei mit der Schnittmenge beginnen.', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B) und dieselbe Regel für Wahrscheinlichkeiten anwenden.'],
        theory: 'Ein Venn-Diagramm hat vier Bereiche: nur A, A ∩ B (beides), nur B und außerhalb von beiden. Man beginnt immer mit der Schnittmenge: 5 spielen beides, also nur Fußball 18 − 5 = 13 und nur Basketball 12 − 5 = 7.\n\nIn A ∪ B (mindestens eins) wird die Schnittmenge einmal gezählt: n(A ∪ B) = 18 + 12 − 5 = 25. Außerhalb bleiben 30 − 25 = 5.\n\nEbenso für Wahrscheinlichkeiten: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
        keyPoints: ['Mit der Schnittmenge A ∩ B beginnen', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)'],
        examples: [
          { example: 'In einer Klasse mit 30 Lernenden spielen 18 Fußball, 12 Basketball und 5 beides. Wie viele spielen keines?', solution: '18 + 12 − 5 = 25 spielen etwas; 30 − 25 = 5 keines.' },
          { example: 'Wie viele spielen nur Fußball, und wie groß ist die Wahrscheinlichkeit, dass eine zufällig gewählte Person nur Fußball spielt?', solution: '18 − 5 = 13; P = 13/30.' },
        ],
        commonMistakes: [
          { mistake: 'n(F ∪ B) = 18 + 12 = 30.', fix: 'Die 5 in der Schnittmenge sind doppelt gezählt; einmal abziehen: 25.' },
          { mistake: 'In den Bereich „nur F“ wird 18 eingetragen.', fix: '18 enthält die Schnittmenge: nur F = 18 − 5 = 13.' },
        ],
        practice: [
          { problem: 'n(A) = 20, n(B) = 15, n(A ∩ B) = 8. Wie groß ist n(A ∪ B)?', solution: '27', steps: ['20 + 15 − 8.', '= 27.'] },
          { problem: 'P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,2. Wie groß ist P(A ∪ B)?', solution: '0,7', steps: ['0,5 + 0,4 − 0,2.', '= 0,7.'] },
          { problem: 'Wie groß ist laut Diagramm (30 Lernende) die Wahrscheinlichkeit, dass jemand beides spielt?', solution: '1/6', steps: ['5 von 30.', '5/30 = 1/6.'] },
        ],
      },
    },
    // ───────── 2. Sample space
    {
      slug: 'g11-combined-probability-sample-space',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '+', cells: DICE.map(String) },
          ...DICE.map((i) => ({ head: String(i), cells: DICE.map((j) => String(i + j)) })),
        ],
        highlight: DICE.map((i) => [i, 6 - i]),
        caption: alt('36 rezultate njësoj të mundshme; shuma 7 del 6 herë → P = 6/36 = 1/6.', '36 equally likely outcomes; a total of 7 appears 6 times → P = 6/36 = 1/6.', '36 gleich wahrscheinliche Ergebnisse; die Augensumme 7 kommt 6-mal vor → P = 6/36 = 1/6.'),
        alt: alt('Tabela e shumave të dy zarave 6 × 6, me shumat 7 të theksuara në diagonale.', 'A 6 × 6 table of the totals of two dice, with the totals of 7 highlighted along a diagonal.', 'Eine 6 × 6-Tabelle der Augensummen zweier Würfel, die Summen 7 auf einer Diagonale hervorgehoben.'),
      }],
      answers: {
        examples: [[['6 / 36', '1/6', 1e-9, '1/6']], [['3 / 36', '1/12', 1e-9, '1/12']]],
        practice: [[['6 / 36', '1/6', 1e-9, '1/6']], [['2 * 6', 12]], [['1 / 36', '1/36', 1e-9, '1/36']]],
      },
      al: {
        title: 'Hapësira e rezultateve',
        objectives: ['Të listoni të gjitha rezultatet e dy provave në tabelë.', 'Të llogaritni probabilitete nga hapësira e rezultateve.'],
        theory: 'Hapësira e rezultateve është lista e të gjitha rezultateve të mundshme. Për dy prova përdorim tabelë: dy zare kanë 6 · 6 = 36 rezultate njësoj të mundshme.\n\nP(ngjarje) = numri i rezultateve të favorshme : numri i të gjitha rezultateve. Shuma 7 del te (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1): P = 6/36 = 1/6.\n\nKujdes: (3, 4) dhe (4, 3) janë dy rezultate të ndryshme. Shumat 2 deri 12 nuk janë njësoj të mundshme.',
        keyPoints: ['Dy prova → tabelë m · n', 'P = të favorshme : të gjitha', '(3, 4) ≠ (4, 3)'],
        examples: [
          { example: 'Hidhen dy zare. Sa është P(shuma 7)?', solution: '6 rezultate nga 36: 6/36 = 1/6.' },
          { example: 'Sa është P(shuma 10)?', solution: '(4, 6), (5, 5), (6, 4): 3/36 = 1/12.' },
        ],
        commonMistakes: [
          { mistake: 'Shumat 2–12 janë 11 dhe P(shuma 7) = 1/11.', fix: 'Shumat nuk janë njësoj të mundshme; numëroni në tabelën me 36 kuti.' },
          { mistake: '(3, 4) dhe (4, 3) numërohen si një rezultat.', fix: 'Zari i parë dhe i dyti dallohen: janë dy rezultate.' },
        ],
        practice: [
          { problem: 'Sa është probabiliteti për një dyshe (dy numra të njëjtë) me dy zare?', solution: '1/6', steps: ['(1, 1), (2, 2), …, (6, 6): 6 rezultate.', '6/36 = 1/6.'] },
          { problem: 'Hidhet një monedhë dhe një zar. Sa rezultate ka?', solution: '12', steps: ['2 · 6.', '= 12 rezultate.'] },
          { problem: 'Sa është P(shuma 2) me dy zare?', solution: '1/36', steps: ['Vetëm (1, 1).', 'P = 1/36.'] },
        ],
      },
      en: {
        title: 'Sample space',
        objectives: ['List all outcomes of two trials in a table.', 'Work out probabilities from the sample space.'],
        theory: 'The sample space is the list of all possible outcomes. For two trials use a table: two dice have 6 · 6 = 36 equally likely outcomes.\n\nP(event) = number of favourable outcomes ÷ total number of outcomes. A total of 7 comes from (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1): P = 6/36 = 1/6.\n\nCareful: (3, 4) and (4, 3) are two different outcomes. The totals 2 to 12 are not equally likely.',
        keyPoints: ['Two trials → m · n table', 'P = favourable ÷ all', '(3, 4) ≠ (4, 3)'],
        examples: [
          { example: 'Two dice are thrown. What is P(total 7)?', solution: '6 outcomes out of 36: 6/36 = 1/6.' },
          { example: 'What is P(total 10)?', solution: '(4, 6), (5, 5), (6, 4): 3/36 = 1/12.' },
        ],
        commonMistakes: [
          { mistake: 'There are 11 totals 2–12, so P(total 7) = 1/11.', fix: 'The totals are not equally likely; count in the 36-cell table.' },
          { mistake: '(3, 4) and (4, 3) are counted as one outcome.', fix: 'The first and second dice are different: two outcomes.' },
        ],
        practice: [
          { problem: 'What is the probability of a double (both dice the same) with two dice?', solution: '1/6', steps: ['(1, 1), (2, 2), …, (6, 6): 6 outcomes.', '6/36 = 1/6.'] },
          { problem: 'A coin and a die are thrown. How many outcomes are there?', solution: '12', steps: ['2 · 6.', '= 12 outcomes.'] },
          { problem: 'What is P(total 2) with two dice?', solution: '1/36', steps: ['Only (1, 1).', 'P = 1/36.'] },
        ],
      },
      de: {
        title: 'Ergebnisraum',
        objectives: ['Alle Ergebnisse eines zweistufigen Versuchs in einer Tabelle auflisten.', 'Wahrscheinlichkeiten aus dem Ergebnisraum berechnen.'],
        theory: 'Der Ergebnisraum ist die Liste aller möglichen Ergebnisse. Bei zwei Stufen hilft eine Tabelle: Zwei Würfel haben 6 · 6 = 36 gleich wahrscheinliche Ergebnisse.\n\nP(Ereignis) = Anzahl günstiger Ergebnisse : Anzahl aller Ergebnisse. Die Augensumme 7 entsteht bei (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1): P = 6/36 = 1/6.\n\nAchtung: (3, 4) und (4, 3) sind zwei verschiedene Ergebnisse. Die Summen 2 bis 12 sind nicht gleich wahrscheinlich.',
        keyPoints: ['Zwei Stufen → m · n-Tabelle', 'P = günstige : alle', '(3, 4) ≠ (4, 3)'],
        examples: [
          { example: 'Zwei Würfel werden geworfen. Wie groß ist P(Augensumme 7)?', solution: '6 von 36 Ergebnissen: 6/36 = 1/6.' },
          { example: 'Wie groß ist P(Augensumme 10)?', solution: '(4, 6), (5, 5), (6, 4): 3/36 = 1/12.' },
        ],
        commonMistakes: [
          { mistake: 'Es gibt 11 Summen 2–12, also P(Summe 7) = 1/11.', fix: 'Die Summen sind nicht gleich wahrscheinlich; in der 36-Felder-Tabelle zählen.' },
          { mistake: '(3, 4) und (4, 3) werden als ein Ergebnis gezählt.', fix: 'Erster und zweiter Würfel sind verschieden: zwei Ergebnisse.' },
        ],
        practice: [
          { problem: 'Wie groß ist die Wahrscheinlichkeit für einen Pasch (zwei gleiche Augenzahlen)?', solution: '1/6', steps: ['(1, 1), (2, 2), …, (6, 6): 6 Ergebnisse.', '6/36 = 1/6.'] },
          { problem: 'Eine Münze und ein Würfel werden geworfen. Wie viele Ergebnisse gibt es?', solution: '12', steps: ['2 · 6.', '= 12 Ergebnisse.'] },
          { problem: 'Wie groß ist P(Augensumme 2) bei zwei Würfeln?', solution: '1/36', steps: ['Nur (1, 1).', 'P = 1/36.'] },
        ],
      },
    },
    // ───────── 3. Tree diagrams
    {
      slug: 'g11-combined-probability-tree-diagrams',
      visuals: [{
        type: 'treeDiagram',
        branches: [
          { label: alt('K', 'R', 'R'), p: '4/10', children: [{ label: alt('K', 'R', 'R'), p: '3/9' }, { label: 'B', p: '6/9' }] },
          { label: 'B', p: '6/10', children: [{ label: alt('K', 'R', 'R'), p: '4/9' }, { label: 'B', p: '5/9' }] },
        ],
        caption: alt('Pa kthim nga 4 të kuq (K) dhe 6 blu (B): emëruesi bëhet 9 në nxjerrjen e dytë.', 'Without replacement from 4 red (R) and 6 blue (B): the denominator becomes 9 on the second draw.', 'Ohne Zurücklegen aus 4 roten (R) und 6 blauen (B): Beim zweiten Zug ist der Nenner 9.'),
        alt: alt('Diagram pemë me dy nxjerrje pa kthim: 4/10 dhe 6/10, pastaj 3/9, 6/9, 4/9, 5/9.', 'Tree diagram for two draws without replacement: 4/10 and 6/10, then 3/9, 6/9, 4/9, 5/9.', 'Baumdiagramm für zwei Züge ohne Zurücklegen: 4/10 und 6/10, dann 3/9, 6/9, 4/9, 5/9.'),
      }],
      answers: {
        examples: [[['4/10 * 3/9', '2/15', 1e-9, '2/15']], [['4/10 * 6/9 + 6/10 * 4/9', '8/15', 1e-9, '8/15']]],
        practice: [[['6/10 * 5/9', '1/3', 1e-9, '1/3']], [['0.4^2', 0.16]], [['1 - 1/3', '2/3', 1e-9, '2/3']]],
      },
      al: {
        title: 'Diagrami pemë',
        objectives: ['Të vizatoni diagram pemë për dy prova, me dhe pa kthim.', 'Të llogaritni probabilitete duke shumëzuar përgjatë degëve dhe duke mbledhur rrugët.'],
        theory: 'Te diagrami pemë çdo degë ka probabilitetin e vet. Përgjatë një rruge shumëzojmë; kur ngjarja ka disa rrugë, i mbledhim.\n\nPa kthim, nxjerrja e dytë ndryshon: nga 4 të kuq e 6 blu, P(K, K) = 4/10 · 3/9 = 12/90 = 2/15. Me kthim probabilitetet mbeten të njëjta: P(K, K) = 0,4 · 0,4 = 0,16.\n\n"Të paktën një" llogaritet shpesh më lehtë me ngjarjen e kundërt: P(të paktën një K) = 1 − P(B, B).',
        keyPoints: ['Përgjatë degës → shumëzo', 'Disa rrugë → mblidh', 'Pa kthim: ndryshon emëruesi'],
        examples: [
          { example: 'Nxjerrim dy topa pa kthim nga qesja me 4 të kuq dhe 6 blu. Sa është P(dy të kuq)?', solution: '4/10 · 3/9 = 12/90 = 2/15.' },
          { example: 'Sa është P(një të kuq dhe një blu)?', solution: 'K,B ose B,K: 4/10 · 6/9 + 6/10 · 4/9 = 48/90 = 8/15.' },
        ],
        commonMistakes: [
          { mistake: 'Pa kthim, nxjerrja e dytë merret përsëri nga 10.', fix: 'Në qese kanë mbetur 9 topa: emëruesi 9.' },
          { mistake: 'Probabilitetet përgjatë degës mblidhen.', fix: 'Përgjatë degës shumëzohen; mblidhen vetëm rrugët e ndryshme.' },
        ],
        practice: [
          { problem: 'Sa është P(dy blu) pa kthim?', solution: '1/3', steps: ['6/10 · 5/9 = 30/90.', '= 1/3.'] },
          { problem: 'Me kthim, sa është P(dy të kuq)?', solution: '0,16', steps: ['P(K) = 0,4 në të dyja nxjerrjet.', '0,4 · 0,4 = 0,16.'] },
          { problem: 'Pa kthim, sa është P(të paktën një të kuq)?', solution: '2/3', steps: ['E kundërta: dy blu, 1/3.', '1 − 1/3 = 2/3.'] },
        ],
      },
      en: {
        title: 'Tree diagrams',
        objectives: ['Draw a tree diagram for two trials, with and without replacement.', 'Work out probabilities by multiplying along branches and adding paths.'],
        theory: 'In a tree diagram every branch has its own probability. Along one path, multiply; when an event has several paths, add them.\n\nWithout replacement the second draw changes: from 4 red and 6 blue, P(R, R) = 4/10 · 3/9 = 12/90 = 2/15. With replacement the probabilities stay the same: P(R, R) = 0.4 · 0.4 = 0.16.\n\n"At least one" is often easier with the complement: P(at least one R) = 1 − P(B, B).',
        keyPoints: ['Along a branch → multiply', 'Several paths → add', 'Without replacement: the denominator changes'],
        examples: [
          { example: 'Two balls are drawn without replacement from a bag with 4 red and 6 blue. What is P(two red)?', solution: '4/10 · 3/9 = 12/90 = 2/15.' },
          { example: 'What is P(one red and one blue)?', solution: 'R,B or B,R: 4/10 · 6/9 + 6/10 · 4/9 = 48/90 = 8/15.' },
        ],
        commonMistakes: [
          { mistake: 'Without replacement, the second draw is still out of 10.', fix: '9 balls are left in the bag: denominator 9.' },
          { mistake: 'The probabilities along a branch are added.', fix: 'Along a branch multiply; only different paths are added.' },
        ],
        practice: [
          { problem: 'What is P(two blue) without replacement?', solution: '1/3', steps: ['6/10 · 5/9 = 30/90.', '= 1/3.'] },
          { problem: 'With replacement, what is P(two red)?', solution: '0.16', steps: ['P(R) = 0.4 on both draws.', '0.4 · 0.4 = 0.16.'] },
          { problem: 'Without replacement, what is P(at least one red)?', solution: '2/3', steps: ['Complement: two blue, 1/3.', '1 − 1/3 = 2/3.'] },
        ],
      },
      de: {
        title: 'Baumdiagramme',
        objectives: ['Ein Baumdiagramm für zwei Stufen mit und ohne Zurücklegen zeichnen.', 'Wahrscheinlichkeiten mit der Pfadmultiplikations- und Pfadadditionsregel berechnen.'],
        theory: 'Im Baumdiagramm hat jeder Ast seine eigene Wahrscheinlichkeit. Entlang eines Pfades wird multipliziert; gehören mehrere Pfade zu einem Ereignis, werden sie addiert.\n\nOhne Zurücklegen ändert sich der zweite Zug: Aus 4 roten und 6 blauen gilt P(R, R) = 4/10 · 3/9 = 12/90 = 2/15. Mit Zurücklegen bleiben die Wahrscheinlichkeiten gleich: P(R, R) = 0,4 · 0,4 = 0,16.\n\n„Mindestens eins“ berechnet man oft leichter über das Gegenereignis: P(mindestens eine R) = 1 − P(B, B).',
        keyPoints: ['Entlang des Pfades → multiplizieren', 'Mehrere Pfade → addieren', 'Ohne Zurücklegen: Nenner ändert sich'],
        examples: [
          { example: 'Aus einem Beutel mit 4 roten und 6 blauen Kugeln werden zwei ohne Zurücklegen gezogen. Wie groß ist P(zwei rote)?', solution: '4/10 · 3/9 = 12/90 = 2/15.' },
          { example: 'Wie groß ist P(eine rote und eine blaue)?', solution: 'R,B oder B,R: 4/10 · 6/9 + 6/10 · 4/9 = 48/90 = 8/15.' },
        ],
        commonMistakes: [
          { mistake: 'Ohne Zurücklegen wird beim zweiten Zug wieder durch 10 geteilt.', fix: 'Im Beutel sind nur noch 9 Kugeln: Nenner 9.' },
          { mistake: 'Die Wahrscheinlichkeiten entlang eines Pfades werden addiert.', fix: 'Entlang des Pfades multiplizieren; nur verschiedene Pfade addieren.' },
        ],
        practice: [
          { problem: 'Wie groß ist P(zwei blaue) ohne Zurücklegen?', solution: '1/3', steps: ['6/10 · 5/9 = 30/90.', '= 1/3.'] },
          { problem: 'Wie groß ist P(zwei rote) mit Zurücklegen?', solution: '0,16', steps: ['P(R) = 0,4 bei beiden Zügen.', '0,4 · 0,4 = 0,16.'] },
          { problem: 'Wie groß ist P(mindestens eine rote) ohne Zurücklegen?', solution: '2/3', steps: ['Gegenereignis: zwei blaue, 1/3.', '1 − 1/3 = 2/3.'] },
        ],
      },
    },
    // ───────── 4. Conditional probability
    {
      slug: 'g11-combined-probability-conditional',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '', cells: [alt('Me syze', 'Glasses', 'Brille'), alt('Pa syze', 'No glasses', 'Keine Brille'), alt('Gjithsej', 'Total', 'Summe')] },
          { head: alt('Djem', 'Boys', 'Jungen'), cells: ['6', '14', '20'] },
          { head: alt('Vajza', 'Girls', 'Mädchen'), cells: ['10', '10', '20'] },
          { head: alt('Gjithsej', 'Total', 'Summe'), cells: ['16', '24', '40'] },
        ],
        highlight: [[2, 0], [2, 2]],
        caption: alt('P(me syze | vajzë) = 10/20: pjesëtojmë vetëm me grupin e vajzave.', 'P(glasses | girl) = 10/20: divide only by the group of girls.', 'P(Brille | Mädchen) = 10/20: nur durch die Gruppe der Mädchen teilen.'),
        alt: alt('Tabelë me dy hyrje: djem 6 me syze, 14 pa; vajza 10 me syze, 10 pa; gjithsej 40.', 'Two-way table: boys 6 with glasses, 14 without; girls 10 with, 10 without; 40 in total.', 'Vierfeldertafel: Jungen 6 mit Brille, 14 ohne; Mädchen 10 mit, 10 ohne; insgesamt 40.'),
      }],
      answers: {
        examples: [[['10 / 20', '1/2', 1e-9, '1/2']], [['10 / 16', '5/8', 1e-9, '5/8']]],
        practice: [[['6 / 20', '3/10', 1e-9, '3/10']], [['0.2 / 0.5', 0.4]], [['16 / 40', 0.4]]],
      },
      al: {
        title: 'Probabiliteti me kusht',
        objectives: ['Të llogaritni P(B | A) nga një tabelë me dy hyrje ose me formulë.', 'Të kontrolloni nëse dy ngjarje janë të pavarura.'],
        theory: 'P(B | A) është probabiliteti i B kur dihet se ka ndodhur A. Hapësira e rezultateve ngushtohet te A:\nP(B | A) = P(A ∩ B) / P(A).\n\nNga tabela: P(me syze | vajzë) = 10/20 = 1/2 (pjesëtojmë me 20 vajzat), ndërsa P(vajzë | me syze) = 10/16 = 5/8 (pjesëtojmë me 16 nxënësit me syze). Këto janë të ndryshme.\n\nA dhe B janë të pavarura kur P(B | A) = P(B). Këtu P(me syze) = 16/40 = 0,4, por P(me syze | vajzë) = 0,5: nuk janë të pavarura.',
        keyPoints: ['P(B | A) = P(A ∩ B) / P(A)', 'P(B | A) ≠ P(A | B)', 'Të pavarura: P(B | A) = P(B)'],
        examples: [
          { example: 'Zgjidhet rastësisht një vajzë. Sa është probabiliteti që të mbajë syze?', solution: '10 nga 20 vajza: 10/20 = 1/2.' },
          { example: 'Zgjidhet rastësisht një nxënës me syze. Sa është probabiliteti që të jetë vajzë?', solution: '10 nga 16 me syze: 10/16 = 5/8.' },
        ],
        commonMistakes: [
          { mistake: 'P(me syze | vajzë) llogaritet 10/40.', fix: 'Kushti "vajzë" e ngushton grupin në 20: 10/20.' },
          { mistake: 'P(A | B) ngatërrohet me P(B | A).', fix: 'Pjesëtohet gjithmonë me grupin e kushtit (pas vijës |).' },
        ],
        practice: [
          { problem: 'Sa është P(me syze | djalë)?', solution: '3/10', steps: ['6 nga 20 djem.', '6/20 = 3/10.'] },
          { problem: 'P(A) = 0,5 dhe P(A ∩ B) = 0,2. Sa është P(B | A)?', solution: '0,4', steps: ['P(B | A) = 0,2 : 0,5.', '= 0,4.'] },
          { problem: 'A janë të pavarura "me syze" dhe "vajzë"?', solution: 'Jo', steps: ['P(me syze) = 16/40 = 0,4.', 'P(me syze | vajzë) = 0,5 ≠ 0,4 → jo të pavarura.'] },
        ],
      },
      en: {
        title: 'Conditional probability',
        objectives: ['Work out P(B | A) from a two-way table or with the formula.', 'Check whether two events are independent.'],
        theory: 'P(B | A) is the probability of B when we know A has happened. The sample space shrinks to A:\nP(B | A) = P(A ∩ B) / P(A).\n\nFrom the table: P(glasses | girl) = 10/20 = 1/2 (divide by the 20 girls), while P(girl | glasses) = 10/16 = 5/8 (divide by the 16 students with glasses). These are different.\n\nA and B are independent when P(B | A) = P(B). Here P(glasses) = 16/40 = 0.4, but P(glasses | girl) = 0.5: they are not independent.',
        keyPoints: ['P(B | A) = P(A ∩ B) / P(A)', 'P(B | A) ≠ P(A | B)', 'Independent: P(B | A) = P(B)'],
        examples: [
          { example: 'A girl is chosen at random. What is the probability that she wears glasses?', solution: '10 out of 20 girls: 10/20 = 1/2.' },
          { example: 'A student with glasses is chosen at random. What is the probability that it is a girl?', solution: '10 out of 16 with glasses: 10/16 = 5/8.' },
        ],
        commonMistakes: [
          { mistake: 'P(glasses | girl) is worked out as 10/40.', fix: 'The condition "girl" narrows the group to 20: 10/20.' },
          { mistake: 'P(A | B) is confused with P(B | A).', fix: 'Always divide by the group in the condition (after the bar |).' },
        ],
        practice: [
          { problem: 'What is P(glasses | boy)?', solution: '3/10', steps: ['6 out of 20 boys.', '6/20 = 3/10.'] },
          { problem: 'P(A) = 0.5 and P(A ∩ B) = 0.2. What is P(B | A)?', solution: '0.4', steps: ['P(B | A) = 0.2 ÷ 0.5.', '= 0.4.'] },
          { problem: 'Are "glasses" and "girl" independent?', solution: 'No', steps: ['P(glasses) = 16/40 = 0.4.', 'P(glasses | girl) = 0.5 ≠ 0.4 → not independent.'] },
        ],
      },
      de: {
        title: 'Bedingte Wahrscheinlichkeit',
        objectives: ['P(B | A) aus einer Vierfeldertafel oder mit der Formel berechnen.', 'Prüfen, ob zwei Ereignisse unabhängig sind.'],
        theory: 'P(B | A) ist die Wahrscheinlichkeit von B, wenn bekannt ist, dass A eingetreten ist. Der Ergebnisraum schrumpft auf A:\nP(B | A) = P(A ∩ B) / P(A).\n\nAus der Tafel: P(Brille | Mädchen) = 10/20 = 1/2 (durch die 20 Mädchen teilen), dagegen P(Mädchen | Brille) = 10/16 = 5/8 (durch die 16 mit Brille teilen). Das ist nicht dasselbe.\n\nA und B sind unabhängig, wenn P(B | A) = P(B). Hier ist P(Brille) = 16/40 = 0,4, aber P(Brille | Mädchen) = 0,5: nicht unabhängig.',
        keyPoints: ['P(B | A) = P(A ∩ B) / P(A)', 'P(B | A) ≠ P(A | B)', 'Unabhängig: P(B | A) = P(B)'],
        examples: [
          { example: 'Ein Mädchen wird zufällig ausgewählt. Wie groß ist die Wahrscheinlichkeit, dass es eine Brille trägt?', solution: '10 von 20 Mädchen: 10/20 = 1/2.' },
          { example: 'Eine Person mit Brille wird zufällig ausgewählt. Wie groß ist die Wahrscheinlichkeit, dass es ein Mädchen ist?', solution: '10 von 16 mit Brille: 10/16 = 5/8.' },
        ],
        commonMistakes: [
          { mistake: 'P(Brille | Mädchen) wird als 10/40 berechnet.', fix: 'Die Bedingung „Mädchen“ verkleinert die Gruppe auf 20: 10/20.' },
          { mistake: 'P(A | B) wird mit P(B | A) verwechselt.', fix: 'Immer durch die Gruppe der Bedingung (hinter dem Strich |) teilen.' },
        ],
        practice: [
          { problem: 'Wie groß ist P(Brille | Junge)?', solution: '3/10', steps: ['6 von 20 Jungen.', '6/20 = 3/10.'] },
          { problem: 'P(A) = 0,5 und P(A ∩ B) = 0,2. Wie groß ist P(B | A)?', solution: '0,4', steps: ['P(B | A) = 0,2 : 0,5.', '= 0,4.'] },
          { problem: 'Sind „Brille“ und „Mädchen“ unabhängig?', solution: 'Nein', steps: ['P(Brille) = 16/40 = 0,4.', 'P(Brille | Mädchen) = 0,5 ≠ 0,4 → nicht unabhängig.'] },
        ],
      },
    },
  ],
};
