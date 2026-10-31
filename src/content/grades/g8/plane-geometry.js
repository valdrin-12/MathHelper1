// Grade 8 · Theme 4: Plane geometry (20 hours)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g8-plane-geometry',
  i18n: {
    al: { title: 'Gjeometria në plan', description: 'Aksiomat, pohimet "nëse … atëherë", këndet te drejtëzat paralele, rrethi, kongruenca, trekëndëshat kënddrejtë, Pitagora dhe trekëndëshat e veçantë.' },
    en: { title: 'Plane geometry', description: 'Axioms, "if … then" statements, angles with parallel lines, circles, congruence, right triangles, Pythagoras and special triangles.' },
    de: { title: 'Ebene Geometrie', description: 'Axiome, „Wenn … dann“-Aussagen, Winkel an Parallelen, Kreis, Kongruenz, rechtwinklige Dreiecke, Pythagoras und besondere Dreiecke.' },
  },
  lessons: [
    // ───────── 1. Axioms
    {
      slug: 'g8-plane-geometry-axioms',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 5.6, yMin: -0.6, yMax: 4.2 }, height: 200,
        shapes: [
          { kind: 'segment', from: [0, 0], to: [5, 0.5], color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [1, 3.6], color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [4.5, 3.5], color: 'primary' },
          { kind: 'segment', from: [5, 0.5], to: [1, 3.6], color: 'primary' },
          { kind: 'segment', from: [5, 0.5], to: [4.5, 3.5], color: 'primary' },
          { kind: 'segment', from: [1, 3.6], to: [4.5, 3.5], color: 'primary' },
          { kind: 'point', at: [0, 0], label: 'A', labelPos: 'sw' },
          { kind: 'point', at: [5, 0.5], label: 'B', labelPos: 'se' },
          { kind: 'point', at: [4.5, 3.5], label: 'C', labelPos: 'ne' },
          { kind: 'point', at: [1, 3.6], label: 'D', labelPos: 'nw' },
        ],
        caption: alt('Nëpër çdo dy pika kalon saktësisht një drejtëz: 4 pika (asnjë treshe në një drejtëz) japin 4 · 3 : 2 = 6 drejtëza.', 'Exactly one line passes through any two points: 4 points (no three in a line) give 4 · 3 ÷ 2 = 6 lines.', 'Durch je zwei Punkte geht genau eine Gerade: 4 Punkte (keine drei auf einer Geraden) ergeben 4 · 3 : 2 = 6 Geraden.'),
        alt: alt('Katër pika A, B, C, D të lidhura çift për çift me 6 segmente.', 'Four points A, B, C, D joined in pairs by 6 segments.', 'Vier Punkte A, B, C, D, paarweise durch 6 Strecken verbunden.'),
      }],
      answers: {
        examples: [[['4 * 3 / 2', 6]], 'text'],
        practice: [[['5 * 4 / 2', 10]], [['3 * 2 / 2', 3]], [['1', 1]]],
      },
      al: {
        title: 'Aksiomat',
        objectives: ['Të dalloni nocionet bazë, aksiomat, përkufizimet dhe teoremat.', 'Të zbatoni aksiomat e drejtëzës dhe të paralelizmit.'],
        theory: 'Gjeometria ndërtohet mbi disa nocione bazë që nuk përkufizohen: pika, drejtëza, rrafshi. Aksiomat janë pohime që pranohen pa vërtetim; përkufizimet u japin emra objekteve të reja; teoremat vërtetohen nga aksiomat dhe teoremat e mëparshme.\n\nDisa aksioma: (1) nëpër dy pika të ndryshme kalon një dhe vetëm një drejtëz; (2) dy drejtëza të ndryshme kanë më së shumti një pikë të përbashkët; (3) nëpër një pikë jashtë një drejtëze kalon vetëm një drejtëz paralele me të (aksioma e Euklidit).\n\nNga aksioma (1): n pika, nga të cilat asnjë treshe nuk shtrihet në një drejtëz, përcaktojnë n(n − 1)/2 drejtëza.',
        keyPoints: ['Dy pika → saktësisht një drejtëz', 'Dy drejtëza → 0 ose 1 pikë e përbashkët', 'Pikë jashtë drejtëzës → vetëm një paralele'],
        examples: [
          { example: 'Sa drejtëza përcaktojnë 4 pika, nga të cilat asnjë treshe nuk është në një drejtëz?', solution: 'Çdo çift jep një drejtëz: 4 · 3 / 2 = 6 drejtëza.' },
          { example: 'Sa pika të përbashkëta mund të kenë dy drejtëza të ndryshme?', solution: 'Asnjë (paralele) ose saktësisht një (priten). Dy pika të përbashkëta do të thoshin se janë e njëjta drejtëz.' },
        ],
        commonMistakes: [
          { mistake: 'Teorema është e vërtetë sepse duket në vizatim.', fix: 'Teorema vërtetohet me arsyetim nga aksiomat; vizatimi vetëm ndihmon.' },
          { mistake: '4 pika japin 4 · 3 = 12 drejtëza.', fix: 'Çdo drejtëz numërohet dy herë (AB dhe BA), prandaj pjesëtojmë me 2: 6.' },
        ],
        practice: [
          { problem: 'Sa drejtëza përcaktojnë 5 pika, nga të cilat asnjë treshe nuk është në një drejtëz?', solution: '10', steps: ['5 · 4 / 2.', '= 10.'] },
          { problem: 'Sa pika prerjeje kanë më së shumti 3 drejtëza?', solution: '3', steps: ['Çdo çift drejtëzash jep më së shumti një pikë.', '3 · 2 / 2 = 3.'] },
          { problem: 'Sa drejtëza paralele me drejtëzën a kalojnë nëpër një pikë P jashtë saj?', solution: '1', steps: ['Aksioma e Euklidit.', 'Saktësisht një.'] },
        ],
      },
      en: {
        title: 'Axioms',
        objectives: ['Tell basic notions, axioms, definitions and theorems apart.', 'Use the axioms about lines and parallels.'],
        theory: 'Geometry is built on a few basic notions that are not defined: point, line, plane. Axioms are statements accepted without proof; definitions give names to new objects; theorems are proved from the axioms and earlier theorems.\n\nSome axioms: (1) through two different points there is exactly one line; (2) two different lines have at most one point in common; (3) through a point not on a line there is exactly one line parallel to it (Euclid\'s axiom).\n\nFrom axiom (1): n points, no three of them on one line, determine n(n − 1)/2 lines.',
        keyPoints: ['Two points → exactly one line', 'Two lines → 0 or 1 common point', 'Point off a line → exactly one parallel'],
        examples: [
          { example: 'How many lines do 4 points determine if no three of them are on one line?', solution: 'Each pair gives one line: 4 · 3 / 2 = 6 lines.' },
          { example: 'How many common points can two different lines have?', solution: 'None (parallel) or exactly one (they cross). Two common points would mean they are the same line.' },
        ],
        commonMistakes: [
          { mistake: 'A theorem is true because it looks true in the drawing.', fix: 'A theorem is proved by reasoning from the axioms; a drawing only helps.' },
          { mistake: '4 points give 4 · 3 = 12 lines.', fix: 'Each line is counted twice (AB and BA), so divide by 2: 6.' },
        ],
        practice: [
          { problem: 'How many lines do 5 points determine if no three are on one line?', solution: '10', steps: ['5 · 4 / 2.', '= 10.'] },
          { problem: 'What is the greatest number of crossing points of 3 lines?', solution: '3', steps: ['Each pair of lines gives at most one point.', '3 · 2 / 2 = 3.'] },
          { problem: 'How many lines parallel to line a pass through a point P not on it?', solution: '1', steps: ['Euclid\'s axiom.', 'Exactly one.'] },
        ],
      },
      de: {
        title: 'Axiome',
        objectives: ['Grundbegriffe, Axiome, Definitionen und Sätze unterscheiden.', 'Die Axiome über Geraden und Parallelen anwenden.'],
        theory: 'Die Geometrie beruht auf wenigen Grundbegriffen, die nicht definiert werden: Punkt, Gerade, Ebene. Axiome sind Aussagen, die ohne Beweis angenommen werden; Definitionen geben neuen Objekten Namen; Sätze werden aus den Axiomen und früheren Sätzen bewiesen.\n\nEinige Axiome: (1) Durch zwei verschiedene Punkte geht genau eine Gerade; (2) zwei verschiedene Geraden haben höchstens einen gemeinsamen Punkt; (3) durch einen Punkt außerhalb einer Geraden gibt es genau eine Parallele zu ihr (Parallelenaxiom).\n\nAus Axiom (1): n Punkte, von denen keine drei auf einer Geraden liegen, bestimmen n(n − 1)/2 Geraden.',
        keyPoints: ['Zwei Punkte → genau eine Gerade', 'Zwei Geraden → 0 oder 1 gemeinsamer Punkt', 'Punkt außerhalb → genau eine Parallele'],
        examples: [
          { example: 'Wie viele Geraden bestimmen 4 Punkte, von denen keine drei auf einer Geraden liegen?', solution: 'Jedes Paar ergibt eine Gerade: 4 · 3 / 2 = 6 Geraden.' },
          { example: 'Wie viele gemeinsame Punkte können zwei verschiedene Geraden haben?', solution: 'Keinen (parallel) oder genau einen (sie schneiden sich). Zwei gemeinsame Punkte hieße: dieselbe Gerade.' },
        ],
        commonMistakes: [
          { mistake: 'Ein Satz stimmt, weil es in der Zeichnung so aussieht.', fix: 'Ein Satz wird durch Schlussfolgern aus den Axiomen bewiesen; die Zeichnung hilft nur.' },
          { mistake: '4 Punkte ergeben 4 · 3 = 12 Geraden.', fix: 'Jede Gerade wird doppelt gezählt (AB und BA), also durch 2 teilen: 6.' },
        ],
        practice: [
          { problem: 'Wie viele Geraden bestimmen 5 Punkte, von denen keine drei auf einer Geraden liegen?', solution: '10', steps: ['5 · 4 / 2.', '= 10.'] },
          { problem: 'Wie viele Schnittpunkte haben 3 Geraden höchstens?', solution: '3', steps: ['Jedes Geradenpaar ergibt höchstens einen Punkt.', '3 · 2 / 2 = 3.'] },
          { problem: 'Wie viele Parallelen zur Geraden a gehen durch einen Punkt P außerhalb von a?', solution: '1', steps: ['Parallelenaxiom.', 'Genau eine.'] },
        ],
      },
    },

    // ───────── 2. "If … then" statements
    {
      slug: 'g8-plane-geometry-if-then',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Pohimi', 'Statement', 'Aussage'), cells: [alt('Nëse numri mbaron me 0, atëherë plotpjesëtohet me 5.', 'If a number ends in 0, then it is divisible by 5.', 'Wenn eine Zahl auf 0 endet, dann ist sie durch 5 teilbar.'), alt('E vërtetë', 'True', 'Wahr')] },
          { head: alt('E anasjellta', 'Converse', 'Umkehrung'), cells: [alt('Nëse numri plotpjesëtohet me 5, atëherë mbaron me 0.', 'If a number is divisible by 5, then it ends in 0.', 'Wenn eine Zahl durch 5 teilbar ist, dann endet sie auf 0.'), alt('E gabuar: 15', 'False: 15', 'Falsch: 15')] },
        ],
        alt: alt('Tabela: një pohim i vërtetë dhe e anasjellta e tij e gabuar, me kundërshembullin 15.', 'Table: a true statement and its false converse, with the counterexample 15.', 'Tabelle: eine wahre Aussage und ihre falsche Umkehrung mit dem Gegenbeispiel 15.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: [[['(-3)^2', 9]], 'text', [['3^2 + 4^2', 25], ['5^2', 25]]],
      },
      al: {
        title: 'Pohimet "nëse … atëherë"',
        objectives: ['Të dalloni kushtin dhe përfundimin e një pohimi.', 'Të formuloni të anasjelltën dhe të gjeni kundërshembuj.'],
        theory: 'Shumë teorema kanë trajtën "Nëse P, atëherë Q". P është kushti (hipoteza), Q përfundimi. Shembull: "Nëse dy kënde janë të kundërta në kulm, atëherë janë të barabarta."\n\nE anasjellta ndërron kushtin me përfundimin: "Nëse Q, atëherë P". E anasjellta e një pohimi të vërtetë mund të jetë e gabuar: "Nëse dy kënde janë të barabarta, atëherë janë të kundërta në kulm" nuk vlen gjithmonë.\n\nPër të treguar se një pohim është i gabuar mjafton një kundërshembull: një rast ku kushti vlen, por përfundimi jo. Për ta vërtetuar si të vërtetë, nuk mjaftojnë shembujt; nevojitet arsyetim.',
        keyPoints: ['Nëse P (kusht), atëherë Q (përfundim)', 'E anasjellta: nëse Q, atëherë P', 'Një kundërshembull mjafton për ta rrëzuar pohimin'],
        examples: [
          { example: 'Formuloni të anasjelltën e "Nëse numri mbaron me 0, atëherë plotpjesëtohet me 5." A është e vërtetë?', solution: '"Nëse numri plotpjesëtohet me 5, atëherë mbaron me 0." E gabuar: 15 plotpjesëtohet me 5, por mbaron me 5.' },
          { example: 'Cili është kushti dhe cili përfundimi te "Nëse trekëndëshi është barabrinjës, atëherë të gjitha këndet janë 60°"?', solution: 'Kushti: trekëndëshi është barabrinjës. Përfundimi: këndet janë 60°.' },
        ],
        commonMistakes: [
          { mistake: 'Nëse pohimi është i vërtetë, edhe e anasjellta është e vërtetë.', fix: 'E anasjellta duhet kontrolluar veçmas; shpesh është e gabuar.' },
          { mistake: 'Tre shembuj që funksionojnë e vërtetojnë pohimin.', fix: 'Shembujt nuk mjaftojnë; duhet vërtetim i përgjithshëm.' },
        ],
        practice: [
          { problem: 'Gjeni kundërshembull për "Nëse x² = 9, atëherë x = 3".', solution: 'x = −3', steps: ['(−3)² = 9.', 'Kushti vlen, por x ≠ 3.'] },
          { problem: 'A është e vërtetë: "Nëse katërkëndëshi ka 4 brinjë të barabarta, atëherë është katror"?', solution: 'Jo; kundërshembull: rombi', steps: ['Rombi ka 4 brinjë të barabarta.', 'Këndet e tij nuk janë domosdoshmërisht 90°.'] },
          { problem: 'Formuloni të anasjelltën e teoremës së Pitagorës dhe provojeni për 3, 4, 5.', solution: 'Nëse a² + b² = c², trekëndëshi është kënddrejtë; 9 + 16 = 25 ✓', steps: ['E anasjellta: nga a² + b² = c² del këndi i drejtë.', '3² + 4² = 25 = 5².'] },
        ],
      },
      en: {
        title: '"If … then" statements',
        objectives: ['Identify the condition and the conclusion of a statement.', 'State the converse and find counterexamples.'],
        theory: 'Many theorems have the form "If P, then Q". P is the condition (hypothesis), Q the conclusion. Example: "If two angles are vertically opposite, then they are equal."\n\nThe converse swaps condition and conclusion: "If Q, then P". The converse of a true statement can be false: "If two angles are equal, then they are vertically opposite" is not always true.\n\nTo show a statement is false, one counterexample is enough: a case where the condition holds but the conclusion does not. To show it is true, examples are not enough; you need a proof.',
        keyPoints: ['If P (condition), then Q (conclusion)', 'Converse: if Q, then P', 'One counterexample is enough to disprove'],
        examples: [
          { example: 'State the converse of "If a number ends in 0, then it is divisible by 5." Is it true?', solution: '"If a number is divisible by 5, then it ends in 0." False: 15 is divisible by 5 but ends in 5.' },
          { example: 'What are the condition and the conclusion of "If a triangle is equilateral, then all its angles are 60°"?', solution: 'Condition: the triangle is equilateral. Conclusion: the angles are 60°.' },
        ],
        commonMistakes: [
          { mistake: 'If a statement is true, its converse is true too.', fix: 'The converse must be checked separately; it is often false.' },
          { mistake: 'Three examples that work prove the statement.', fix: 'Examples are not enough; a general proof is needed.' },
        ],
        practice: [
          { problem: 'Find a counterexample to "If x² = 9, then x = 3".', solution: 'x = −3', steps: ['(−3)² = 9.', 'The condition holds, but x ≠ 3.'] },
          { problem: 'Is this true: "If a quadrilateral has 4 equal sides, then it is a square"?', solution: 'No; counterexample: a rhombus', steps: ['A rhombus has 4 equal sides.', 'Its angles need not be 90°.'] },
          { problem: 'State the converse of Pythagoras\' theorem and test it on 3, 4, 5.', solution: 'If a² + b² = c², the triangle is right-angled; 9 + 16 = 25 ✓', steps: ['Converse: a² + b² = c² gives a right angle.', '3² + 4² = 25 = 5².'] },
        ],
      },
      de: {
        title: '„Wenn … dann“-Aussagen',
        objectives: ['Voraussetzung und Behauptung einer Aussage erkennen.', 'Die Umkehrung bilden und Gegenbeispiele finden.'],
        theory: 'Viele Sätze haben die Form „Wenn P, dann Q“. P ist die Voraussetzung, Q die Behauptung. Beispiel: „Wenn zwei Winkel Scheitelwinkel sind, dann sind sie gleich groß.“\n\nDie Umkehrung vertauscht Voraussetzung und Behauptung: „Wenn Q, dann P“. Die Umkehrung einer wahren Aussage kann falsch sein: „Wenn zwei Winkel gleich groß sind, dann sind sie Scheitelwinkel“ stimmt nicht immer.\n\nUm eine Aussage zu widerlegen, genügt ein Gegenbeispiel: ein Fall, in dem die Voraussetzung gilt, die Behauptung aber nicht. Um sie zu beweisen, reichen Beispiele nicht; man braucht einen Beweis.',
        keyPoints: ['Wenn P (Voraussetzung), dann Q (Behauptung)', 'Umkehrung: wenn Q, dann P', 'Ein Gegenbeispiel genügt zum Widerlegen'],
        examples: [
          { example: 'Bilden Sie die Umkehrung von „Wenn eine Zahl auf 0 endet, dann ist sie durch 5 teilbar.“ Ist sie wahr?', solution: '„Wenn eine Zahl durch 5 teilbar ist, dann endet sie auf 0.“ Falsch: 15 ist durch 5 teilbar, endet aber auf 5.' },
          { example: 'Was sind Voraussetzung und Behauptung in „Wenn ein Dreieck gleichseitig ist, dann sind alle Winkel 60°“?', solution: 'Voraussetzung: Das Dreieck ist gleichseitig. Behauptung: Die Winkel sind 60°.' },
        ],
        commonMistakes: [
          { mistake: 'Wenn eine Aussage wahr ist, ist auch ihre Umkehrung wahr.', fix: 'Die Umkehrung muss eigens geprüft werden; oft ist sie falsch.' },
          { mistake: 'Drei passende Beispiele beweisen die Aussage.', fix: 'Beispiele reichen nicht; man braucht einen allgemeinen Beweis.' },
        ],
        practice: [
          { problem: 'Finden Sie ein Gegenbeispiel zu „Wenn x² = 9, dann x = 3“.', solution: 'x = −3', steps: ['(−3)² = 9.', 'Die Voraussetzung gilt, aber x ≠ 3.'] },
          { problem: 'Ist wahr: „Wenn ein Viereck 4 gleich lange Seiten hat, dann ist es ein Quadrat“?', solution: 'Nein; Gegenbeispiel: Raute', steps: ['Eine Raute hat 4 gleich lange Seiten.', 'Ihre Winkel müssen nicht 90° sein.'] },
          { problem: 'Bilden Sie die Umkehrung des Satzes des Pythagoras und prüfen Sie sie an 3, 4, 5.', solution: 'Wenn a² + b² = c², ist das Dreieck rechtwinklig; 9 + 16 = 25 ✓', steps: ['Umkehrung: aus a² + b² = c² folgt ein rechter Winkel.', '3² + 4² = 25 = 5².'] },
        ],
      },
    },

    // ───────── 3. Angles with parallel lines
    {
      slug: 'g8-plane-geometry-parallel-angles',
      visuals: [{
        type: 'geoFigure', view: { xMin: -1, xMax: 5, yMin: -1, yMax: 3.6 }, height: 210,
        shapes: [
          { kind: 'line', through: [[-1, 0], [4, 0]], color: 'primary', label: 'a' },
          { kind: 'line', through: [[-1, 2.5], [4, 2.5]], color: 'primary', label: 'b' },
          { kind: 'line', through: [[1, 0], [2.443, 2.5]], color: 'secondary' },
          { kind: 'angle', vertex: [1, 0], from: [3, 0], to: [2.443, 2.5], label: '60°', color: 'success' },
          { kind: 'angle', vertex: [2.443, 2.5], from: [0, 2.5], to: [1, 0], label: '60°', color: 'success' },
          { kind: 'angle', vertex: [2.443, 2.5], from: [4.5, 2.5], to: [1, 0], label: '120°', color: 'purple' },
        ],
        caption: alt('a ∥ b: këndet alterne janë të barabarta (60° dhe 60°), këndet e njëanshme të brendshme kanë shumën 180° (60° + 120°).', 'a ∥ b: alternate angles are equal (60° and 60°), co-interior angles add up to 180° (60° + 120°).', 'a ∥ b: Wechselwinkel sind gleich groß (60° und 60°), Nachbarwinkel an Parallelen ergeben zusammen 180° (60° + 120°).'),
        alt: alt('Dy drejtëza paralele a dhe b të prera nga një prerëse; kënde 60°, 60° dhe 120°.', 'Two parallel lines a and b cut by a transversal; angles 60°, 60° and 120°.', 'Zwei parallele Geraden a und b, von einer Geraden geschnitten; Winkel 60°, 60° und 120°.'),
      }],
      answers: {
        examples: [[['65', 65], ['180 - 65', 115]], [['40 - 15', 25]]],
        practice: [[['180 / 5', 36]], [['180 - 48 - 67', 65]], [['180 - 3 * 36', 72]]],
      },
      al: {
        title: 'Këndet te drejtëzat paralele',
        objectives: ['Të dalloni këndet përkatëse, alterne dhe të njëanshme te drejtëzat paralele.', 'Të përdorni barazimet e këndeve për të gjetur kënde të panjohura.'],
        theory: 'Kur dy drejtëza paralele a ∥ b priten nga një prerëse, formohen tetë kënde. Këndet përkatëse (në të njëjtin pozicion te secila pikëprerje) janë të barabarta. Këndet alterne të brendshme (në anë të ndryshme të prerëses, ndërmjet paraleleve) janë të barabarta.\n\nKëndet e njëanshme të brendshme (në të njëjtën anë të prerëses, ndërmjet paraleleve) janë shtuese: shuma e tyre është 180°.\n\nKëto veti vërtetojnë teoremën për shumën e këndeve të trekëndëshit: nëpër një kulm heqim paralelen me brinjën përballë; këndet alterne tregojnë se α + β + γ = 180°.',
        keyPoints: ['Përkatëse: të barabarta', 'Alterne të brendshme: të barabarta', 'Të njëanshme të brendshme: shuma 180°'],
        examples: [
          { example: 'a ∥ b; një kënd ndërmjet tyre te prerësja është 65°. Sa janë këndi alterne dhe këndi i njëanshëm?', solution: 'Alterne: 65°; i njëanshëm: 180° − 65° = 115°.' },
          { example: 'Dy kënde alterne janë 3x + 15° dhe 2x + 40°. Gjeni x.', solution: 'Alternet janë të barabarta: 3x + 15 = 2x + 40, pra x = 25°.' },
        ],
        commonMistakes: [
          { mistake: 'Këndet e njëanshme të brendshme janë të barabarta.', fix: 'Ato janë shtuese (shuma 180°); të barabarta janë alternet dhe përkatëset.' },
          { mistake: 'Vetitë përdoren edhe kur drejtëzat nuk janë paralele.', fix: 'Barazimet vlejnë vetëm kur a ∥ b.' },
        ],
        practice: [
          { problem: 'Dy kënde të njëanshme të brendshme janë 2x dhe 3x. Gjeni x.', solution: '36°', steps: ['2x + 3x = 180°.', 'x = 36°.'] },
          { problem: 'Trekëndëshi ka dy kënde 48° dhe 67°. Sa është i treti?', solution: '65°', steps: ['Shuma e këndeve 180°.', '180 − 48 − 67 = 65°.'] },
          { problem: 'Me x = 36° nga detyra 1, sa është këndi 3x dhe sa këndi shtues i tij?', solution: '108° dhe 72°', steps: ['3 · 36 = 108°.', '180 − 108 = 72°.'] },
        ],
      },
      en: {
        title: 'Angles with parallel lines',
        objectives: ['Identify corresponding, alternate and co-interior angles at parallel lines.', 'Use angle facts to find unknown angles.'],
        theory: 'When two parallel lines a ∥ b are cut by a transversal, eight angles are formed. Corresponding angles (in the same position at each crossing) are equal. Alternate interior angles (on opposite sides of the transversal, between the parallels) are equal.\n\nCo-interior angles (on the same side of the transversal, between the parallels) are supplementary: they add up to 180°.\n\nThese facts prove the angle sum of a triangle: draw the parallel to the opposite side through one vertex; the alternate angles show that α + β + γ = 180°.',
        keyPoints: ['Corresponding: equal', 'Alternate interior: equal', 'Co-interior: add up to 180°'],
        examples: [
          { example: 'a ∥ b; one angle between them at the transversal is 65°. What are the alternate angle and the co-interior angle?', solution: 'Alternate: 65°; co-interior: 180° − 65° = 115°.' },
          { example: 'Two alternate angles are 3x + 15° and 2x + 40°. Find x.', solution: 'Alternate angles are equal: 3x + 15 = 2x + 40, so x = 25°.' },
        ],
        commonMistakes: [
          { mistake: 'Co-interior angles are equal.', fix: 'They are supplementary (add to 180°); alternate and corresponding angles are equal.' },
          { mistake: 'Using these facts when the lines are not parallel.', fix: 'The equalities only hold when a ∥ b.' },
        ],
        practice: [
          { problem: 'Two co-interior angles are 2x and 3x. Find x.', solution: '36°', steps: ['2x + 3x = 180°.', 'x = 36°.'] },
          { problem: 'A triangle has two angles of 48° and 67°. What is the third?', solution: '65°', steps: ['The angles add up to 180°.', '180 − 48 − 67 = 65°.'] },
          { problem: 'With x = 36° from question 1, what is the angle 3x and its supplement?', solution: '108° and 72°', steps: ['3 · 36 = 108°.', '180 − 108 = 72°.'] },
        ],
      },
      de: {
        title: 'Winkel an Parallelen',
        objectives: ['Stufenwinkel, Wechselwinkel und Nachbarwinkel an Parallelen erkennen.', 'Winkelbeziehungen nutzen, um unbekannte Winkel zu bestimmen.'],
        theory: 'Werden zwei parallele Geraden a ∥ b von einer dritten Geraden geschnitten, entstehen acht Winkel. Stufenwinkel (an beiden Schnittpunkten in gleicher Lage) sind gleich groß. Wechselwinkel (auf verschiedenen Seiten der schneidenden Geraden, zwischen den Parallelen) sind gleich groß.\n\nNachbarwinkel an Parallelen (auf derselben Seite der schneidenden Geraden, zwischen den Parallelen) ergänzen sich zu 180°.\n\nDamit beweist man den Winkelsummensatz im Dreieck: Durch eine Ecke zieht man die Parallele zur gegenüberliegenden Seite; die Wechselwinkel zeigen α + β + γ = 180°.',
        keyPoints: ['Stufenwinkel: gleich groß', 'Wechselwinkel: gleich groß', 'Nachbarwinkel an Parallelen: zusammen 180°'],
        examples: [
          { example: 'a ∥ b; ein Winkel zwischen ihnen an der schneidenden Geraden ist 65°. Wie groß sind Wechselwinkel und Nachbarwinkel?', solution: 'Wechselwinkel: 65°; Nachbarwinkel: 180° − 65° = 115°.' },
          { example: 'Zwei Wechselwinkel sind 3x + 15° und 2x + 40°. Bestimmen Sie x.', solution: 'Wechselwinkel sind gleich: 3x + 15 = 2x + 40, also x = 25°.' },
        ],
        commonMistakes: [
          { mistake: 'Nachbarwinkel an Parallelen sind gleich groß.', fix: 'Sie ergänzen sich zu 180°; gleich groß sind Wechsel- und Stufenwinkel.' },
          { mistake: 'Die Beziehungen auch ohne Parallelen verwenden.', fix: 'Die Gleichheiten gelten nur, wenn a ∥ b.' },
        ],
        practice: [
          { problem: 'Zwei Nachbarwinkel an Parallelen sind 2x und 3x. Bestimmen Sie x.', solution: '36°', steps: ['2x + 3x = 180°.', 'x = 36°.'] },
          { problem: 'Ein Dreieck hat zwei Winkel von 48° und 67°. Wie groß ist der dritte?', solution: '65°', steps: ['Winkelsumme 180°.', '180 − 48 − 67 = 65°.'] },
          { problem: 'Mit x = 36° aus Aufgabe 1: Wie groß ist der Winkel 3x und sein Ergänzungswinkel zu 180°?', solution: '108° und 72°', steps: ['3 · 36 = 108°.', '180 − 108 = 72°.'] },
        ],
      },
    },

    // ───────── 4. The circle
    {
      slug: 'g8-plane-geometry-circle',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3.6, xMax: 3.6, yMin: -3.4, yMax: 3.6 }, height: 230,
        shapes: [
          { kind: 'circle', center: [0, 0], r: 3, color: 'muted' },
          { kind: 'segment', from: [0, 0], to: [-2.819, -1.026], color: 'primary' },
          { kind: 'segment', from: [0, 0], to: [2.819, -1.026], color: 'primary' },
          { kind: 'segment', from: [0, 3], to: [-2.819, -1.026], color: 'secondary' },
          { kind: 'segment', from: [0, 3], to: [2.819, -1.026], color: 'secondary' },
          { kind: 'angle', vertex: [0, 0], from: [-2.819, -1.026], to: [2.819, -1.026], label: '140°', color: 'primary', reflex: false },
          { kind: 'angle', vertex: [0, 3], from: [-2.819, -1.026], to: [2.819, -1.026], label: '70°', color: 'secondary' },
          { kind: 'point', at: [0, 0], label: 'O', labelPos: 'n' },
          { kind: 'point', at: [-2.819, -1.026], label: 'A', labelPos: 'sw' },
          { kind: 'point', at: [2.819, -1.026], label: 'B', labelPos: 'se' },
          { kind: 'point', at: [0, 3], label: 'C', labelPos: 'n' },
        ],
        caption: alt('Këndi periferik ACB (70°) është gjysma e këndit qendror AOB (140°) mbi të njëjtin hark AB.', 'The inscribed angle ACB (70°) is half the central angle AOB (140°) on the same arc AB.', 'Der Umfangswinkel ACB (70°) ist halb so groß wie der Mittelpunktswinkel AOB (140°) über demselben Bogen AB.'),
        alt: alt('Rreth me qendër O; këndi qendror AOB 140° dhe këndi periferik ACB 70° mbi harkun AB.', 'A circle with centre O; central angle AOB of 140° and inscribed angle ACB of 70° on arc AB.', 'Ein Kreis mit Mittelpunkt O; Mittelpunktswinkel AOB 140° und Umfangswinkel ACB 70° über dem Bogen AB.'),
      }],
      answers: {
        examples: [[['110 / 2', 55]], [['90 - 35', 55]]],
        practice: [[['2 * 40', 80]], [['sqrt(13^2 - 5^2)', 12]], [['90 - 62', 28]]],
      },
      al: {
        title: 'Rrethi',
        objectives: ['Të lidhni këndin periferik me këndin qendror.', 'Të përdorni teoremën e Talesit dhe pingulësinë e tangjentes me rrezen.'],
        theory: 'Këndi qendror ka kulmin në qendër O; këndi periferik ka kulmin në rreth. Mbi të njëjtin hark, këndi periferik është gjysma e këndit qendror. Të gjithë këndet periferike mbi të njëjtin hark janë të barabartë.\n\nRast i veçantë (teorema e Talesit): nëse AB është diametër dhe C pikë në rreth, atëherë ∠ACB = 90°, sepse këndi qendror përkatës është 180°.\n\nTangjentja e prek rrethin në një pikë dhe është pingule me rrezen në atë pikë. Prandaj, nga një pikë P jashtë rrethit, gjatësia e tangjentes del nga Pitagora: t² = OP² − r².',
        keyPoints: ['Periferik = qendror : 2 (i njëjti hark)', 'Diametër → kënd periferik 90° (Talesi)', 'Tangjentja ⊥ rrezes;  t² = OP² − r²'],
        examples: [
          { example: 'Këndi qendror mbi harkun AB është 110°. Sa është këndi periferik mbi të njëjtin hark?', solution: '110° : 2 = 55°.' },
          { example: 'AB është diametër, C në rreth dhe ∠A = 35°. Gjeni ∠B.', solution: '∠C = 90° (Talesi); ∠B = 90° − 35° = 55°.' },
        ],
        commonMistakes: [
          { mistake: 'Këndi periferik është i barabartë me këndin qendror.', fix: 'Mbi të njëjtin hark, periferiku është gjysma e qendrorit.' },
        ],
        practice: [
          { problem: 'Këndi periferik është 40°. Sa është këndi qendror mbi të njëjtin hark?', solution: '80°', steps: ['Qendrori = 2 · periferiku.', '2 · 40 = 80°.'] },
          { problem: 'Rrezja është 5 cm, OP = 13 cm. Sa është gjatësia e tangjentes nga P?', solution: '12 cm', steps: ['t² = 13² − 5² = 144.', 't = 12 cm.'] },
          { problem: 'AB është diametër, C në rreth, ∠A = 62°. Gjeni ∠B.', solution: '28°', steps: ['∠C = 90°.', '∠B = 90 − 62 = 28°.'] },
        ],
      },
      en: {
        title: 'The circle',
        objectives: ['Relate the inscribed angle to the central angle.', 'Use Thales\' theorem and the fact that a tangent is perpendicular to the radius.'],
        theory: 'A central angle has its vertex at the centre O; an inscribed angle has its vertex on the circle. On the same arc, the inscribed angle is half the central angle. All inscribed angles on the same arc are equal.\n\nA special case (Thales\' theorem): if AB is a diameter and C a point on the circle, then ∠ACB = 90°, because the matching central angle is 180°.\n\nA tangent touches the circle at one point and is perpendicular to the radius there. So from a point P outside the circle the tangent length comes from Pythagoras: t² = OP² − r².',
        keyPoints: ['Inscribed = central ÷ 2 (same arc)', 'Diameter → inscribed angle 90° (Thales)', 'Tangent ⊥ radius;  t² = OP² − r²'],
        examples: [
          { example: 'The central angle on arc AB is 110°. What is the inscribed angle on the same arc?', solution: '110° ÷ 2 = 55°.' },
          { example: 'AB is a diameter, C is on the circle and ∠A = 35°. Find ∠B.', solution: '∠C = 90° (Thales); ∠B = 90° − 35° = 55°.' },
        ],
        commonMistakes: [
          { mistake: 'The inscribed angle equals the central angle.', fix: 'On the same arc the inscribed angle is half the central angle.' },
        ],
        practice: [
          { problem: 'An inscribed angle is 40°. What is the central angle on the same arc?', solution: '80°', steps: ['Central = 2 · inscribed.', '2 · 40 = 80°.'] },
          { problem: 'The radius is 5 cm and OP = 13 cm. How long is the tangent from P?', solution: '12 cm', steps: ['t² = 13² − 5² = 144.', 't = 12 cm.'] },
          { problem: 'AB is a diameter, C is on the circle, ∠A = 62°. Find ∠B.', solution: '28°', steps: ['∠C = 90°.', '∠B = 90 − 62 = 28°.'] },
        ],
      },
      de: {
        title: 'Der Kreis',
        objectives: ['Umfangswinkel und Mittelpunktswinkel in Beziehung setzen.', 'Den Satz des Thales und die Orthogonalität von Tangente und Radius nutzen.'],
        theory: 'Ein Mittelpunktswinkel hat seinen Scheitel im Mittelpunkt O, ein Umfangswinkel auf dem Kreis. Über demselben Bogen ist der Umfangswinkel halb so groß wie der Mittelpunktswinkel. Alle Umfangswinkel über demselben Bogen sind gleich groß.\n\nSonderfall (Satz des Thales): Ist AB ein Durchmesser und C ein Punkt auf dem Kreis, dann ist ∠ACB = 90°, weil der zugehörige Mittelpunktswinkel 180° beträgt.\n\nEine Tangente berührt den Kreis in einem Punkt und steht dort senkrecht auf dem Radius. Von einem Punkt P außerhalb ergibt sich die Tangentenlänge mit Pythagoras: t² = OP² − r².',
        keyPoints: ['Umfangswinkel = Mittelpunktswinkel : 2 (gleicher Bogen)', 'Durchmesser → Umfangswinkel 90° (Thales)', 'Tangente ⊥ Radius;  t² = OP² − r²'],
        examples: [
          { example: 'Der Mittelpunktswinkel über dem Bogen AB ist 110°. Wie groß ist der Umfangswinkel über demselben Bogen?', solution: '110° : 2 = 55°.' },
          { example: 'AB ist Durchmesser, C liegt auf dem Kreis und ∠A = 35°. Bestimmen Sie ∠B.', solution: '∠C = 90° (Thales); ∠B = 90° − 35° = 55°.' },
        ],
        commonMistakes: [
          { mistake: 'Der Umfangswinkel ist gleich dem Mittelpunktswinkel.', fix: 'Über demselben Bogen ist der Umfangswinkel halb so groß.' },
        ],
        practice: [
          { problem: 'Ein Umfangswinkel ist 40°. Wie groß ist der Mittelpunktswinkel über demselben Bogen?', solution: '80°', steps: ['Mittelpunktswinkel = 2 · Umfangswinkel.', '2 · 40 = 80°.'] },
          { problem: 'Der Radius ist 5 cm, OP = 13 cm. Wie lang ist die Tangentenstrecke von P?', solution: '12 cm', steps: ['t² = 13² − 5² = 144.', 't = 12 cm.'] },
          { problem: 'AB ist Durchmesser, C auf dem Kreis, ∠A = 62°. Bestimmen Sie ∠B.', solution: '28°', steps: ['∠C = 90°.', '∠B = 90 − 62 = 28°.'] },
        ],
      },
    },

    // ───────── 5. Congruent triangles
    {
      slug: 'g8-plane-geometry-congruence',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 10.5, yMin: -0.8, yMax: 3.6 }, height: 170,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [4, 0], [1, 3]], fill: true, color: 'primary' },
          { kind: 'polygon', points: [[6, 0], [10, 0], [7, 3]], fill: true, color: 'secondary' },
          { kind: 'segment', from: [0, 0], to: [4, 0], ticks: 1, color: 'ink' },
          { kind: 'segment', from: [4, 0], to: [1, 3], ticks: 2, color: 'ink' },
          { kind: 'segment', from: [1, 3], to: [0, 0], ticks: 3, color: 'ink' },
          { kind: 'segment', from: [6, 0], to: [10, 0], ticks: 1, color: 'ink' },
          { kind: 'segment', from: [10, 0], to: [7, 3], ticks: 2, color: 'ink' },
          { kind: 'segment', from: [7, 3], to: [6, 0], ticks: 3, color: 'ink' },
          { kind: 'label', at: [-0.3, -0.45], text: 'A' }, { kind: 'label', at: [4.3, -0.45], text: 'B' }, { kind: 'label', at: [1, 3.35], text: 'C' },
          { kind: 'label', at: [5.7, -0.45], text: 'D' }, { kind: 'label', at: [10.3, -0.45], text: 'E' }, { kind: 'label', at: [7, 3.35], text: 'F' },
        ],
        caption: alt('Brinjët me të njëjtin numër vijash janë të barabarta: △ABC ≅ △DEF sipas kriterit BBB.', 'Sides with the same number of marks are equal: △ABC ≅ △DEF by SSS.', 'Seiten mit gleich vielen Strichen sind gleich lang: △ABC ≅ △DEF nach SSS.'),
        alt: alt('Dy trekëndësha të njëjtë ABC dhe DEF; brinjët përkatëse të shënuara me 1, 2 dhe 3 vija.', 'Two identical triangles ABC and DEF; corresponding sides marked with 1, 2 and 3 ticks.', 'Zwei gleiche Dreiecke ABC und DEF; entsprechende Seiten mit 1, 2 und 3 Strichen markiert.'),
      }],
      answers: {
        examples: [[['(180 - 40) / 2', 70]], 'text'],
        practice: ['text', [['180 - 2 * 65', 50]], 'text'],
      },
      al: {
        title: 'Kongruenca e trekëndëshave',
        objectives: ['Të përdorni kriteret BBB, BKB dhe KBK për kongruencën.', 'Të nxirrni barazime brinjësh dhe këndesh nga kongruenca.'],
        theory: 'Dy trekëndësha janë kongruentë (≅) kur kanë të njëjtën formë dhe madhësi: brinjët dhe këndet përkatëse janë të barabarta. Për ta provuar mjaftojnë tri të dhëna, sipas njërit prej kritereve:\n\nBBB: tri brinjët përkatëse të barabarta. BKB: dy brinjë dhe këndi ndërmjet tyre. KBK: një brinjë dhe dy këndet anash saj. Tri kënde të barabarta (KKK) NUK mjaftojnë: trekëndëshat mund të kenë madhësi të ndryshme.\n\nZbatim: në trekëndëshin barakrahës (dybrinjënjishëm) lartësia nga kulmi e ndan atë në dy trekëndësha kongruentë, prandaj këndet e bazës janë të barabarta. Nëse këndi në kulm është 40°, secili kënd i bazës është (180° − 40°) : 2 = 70°.',
        keyPoints: ['BBB, BKB, KBK → kongruentë', 'KKK nuk mjafton', 'Barakrahës: këndet e bazës të barabarta'],
        examples: [
          { example: 'Në trekëndëshin barakrahës këndi në kulm është 40°. Sa janë këndet e bazës?', solution: '(180° − 40°) : 2 = 70° secili.' },
          { example: 'AB = DE, ∠B = ∠E dhe BC = EF. Sipas cilit kriter △ABC ≅ △DEF?', solution: 'Dy brinjë dhe këndi ndërmjet tyre: BKB.' },
        ],
        commonMistakes: [
          { mistake: 'Dy trekëndësha me të njëjtat kënde janë kongruentë.', fix: 'KKK jep vetëm të njëjtën formë (ngjashmëri), jo të njëjtën madhësi.' },
          { mistake: 'BKB me kënd që nuk është ndërmjet dy brinjëve.', fix: 'Te BKB këndi duhet të jetë ndërmjet dy brinjëve të dhëna.' },
        ],
        practice: [
          { problem: 'Trekëndëshat kanë brinjët 5, 7, 9 cm dhe 9, 5, 7 cm. A janë kongruentë?', solution: 'Po, sipas BBB', steps: ['Të njëjtat tri gjatësi.', 'BBB.'] },
          { problem: 'Në trekëndëshin barakrahës një kënd i bazës është 65°. Sa është këndi në kulm?', solution: '50°', steps: ['Dy këndet e bazës: 2 · 65 = 130°.', '180 − 130 = 50°.'] },
          { problem: 'Trekëndëshi me kënde 50°, 60°, 70° dhe një tjetër me të njëjtat kënde: a janë patjetër kongruentë?', solution: 'Jo', steps: ['KKK nuk është kriter kongruence.', 'Njëri mund të jetë zmadhim i tjetrit.'] },
        ],
      },
      en: {
        title: 'Congruent triangles',
        objectives: ['Use the SSS, SAS and ASA criteria for congruence.', 'Deduce equal sides and angles from congruence.'],
        theory: 'Two triangles are congruent (≅) when they have the same shape and size: corresponding sides and angles are equal. Three facts are enough to prove it, by one of the criteria:\n\nSSS: the three corresponding sides are equal. SAS: two sides and the angle between them. ASA: one side and the two angles next to it. Three equal angles (AAA) are NOT enough: the triangles can be different sizes.\n\nUse: in an isosceles triangle the height from the apex splits it into two congruent triangles, so the base angles are equal. If the apex angle is 40°, each base angle is (180° − 40°) ÷ 2 = 70°.',
        keyPoints: ['SSS, SAS, ASA → congruent', 'AAA is not enough', 'Isosceles: base angles are equal'],
        examples: [
          { example: 'In an isosceles triangle the apex angle is 40°. What are the base angles?', solution: '(180° − 40°) ÷ 2 = 70° each.' },
          { example: 'AB = DE, ∠B = ∠E and BC = EF. By which criterion is △ABC ≅ △DEF?', solution: 'Two sides and the angle between them: SAS.' },
        ],
        commonMistakes: [
          { mistake: 'Two triangles with the same angles are congruent.', fix: 'AAA only gives the same shape (similarity), not the same size.' },
          { mistake: 'SAS with an angle that is not between the two sides.', fix: 'For SAS the angle must be between the two given sides.' },
        ],
        practice: [
          { problem: 'Two triangles have sides 5, 7, 9 cm and 9, 5, 7 cm. Are they congruent?', solution: 'Yes, by SSS', steps: ['The same three lengths.', 'SSS.'] },
          { problem: 'In an isosceles triangle a base angle is 65°. What is the apex angle?', solution: '50°', steps: ['Two base angles: 2 · 65 = 130°.', '180 − 130 = 50°.'] },
          { problem: 'A triangle with angles 50°, 60°, 70° and another with the same angles: must they be congruent?', solution: 'No', steps: ['AAA is not a congruence criterion.', 'One may be an enlargement of the other.'] },
        ],
      },
      de: {
        title: 'Kongruente Dreiecke',
        objectives: ['Die Kongruenzsätze SSS, SWS und WSW anwenden.', 'Aus der Kongruenz gleiche Seiten und Winkel folgern.'],
        theory: 'Zwei Dreiecke sind kongruent (≅), wenn sie in Form und Größe übereinstimmen: Entsprechende Seiten und Winkel sind gleich. Zum Nachweis genügen drei Angaben nach einem der Kongruenzsätze:\n\nSSS: die drei entsprechenden Seiten sind gleich. SWS: zwei Seiten und der eingeschlossene Winkel. WSW: eine Seite und die beiden anliegenden Winkel. Drei gleiche Winkel (WWW) genügen NICHT: Die Dreiecke können verschieden groß sein.\n\nAnwendung: Im gleichschenkligen Dreieck teilt die Höhe von der Spitze aus das Dreieck in zwei kongruente Dreiecke, also sind die Basiswinkel gleich. Ist der Winkel an der Spitze 40°, so ist jeder Basiswinkel (180° − 40°) : 2 = 70°.',
        keyPoints: ['SSS, SWS, WSW → kongruent', 'WWW genügt nicht', 'Gleichschenklig: Basiswinkel gleich'],
        examples: [
          { example: 'In einem gleichschenkligen Dreieck ist der Winkel an der Spitze 40°. Wie groß sind die Basiswinkel?', solution: '(180° − 40°) : 2 = 70° jeweils.' },
          { example: 'AB = DE, ∠B = ∠E und BC = EF. Nach welchem Satz ist △ABC ≅ △DEF?', solution: 'Zwei Seiten und der eingeschlossene Winkel: SWS.' },
        ],
        commonMistakes: [
          { mistake: 'Zwei Dreiecke mit gleichen Winkeln sind kongruent.', fix: 'WWW ergibt nur gleiche Form (Ähnlichkeit), nicht gleiche Größe.' },
          { mistake: 'SWS mit einem Winkel, der nicht zwischen den Seiten liegt.', fix: 'Bei SWS muss der Winkel von den beiden Seiten eingeschlossen sein.' },
        ],
        practice: [
          { problem: 'Zwei Dreiecke haben die Seiten 5, 7, 9 cm und 9, 5, 7 cm. Sind sie kongruent?', solution: 'Ja, nach SSS', steps: ['Dieselben drei Längen.', 'SSS.'] },
          { problem: 'In einem gleichschenkligen Dreieck ist ein Basiswinkel 65°. Wie groß ist der Winkel an der Spitze?', solution: '50°', steps: ['Zwei Basiswinkel: 2 · 65 = 130°.', '180 − 130 = 50°.'] },
          { problem: 'Ein Dreieck mit den Winkeln 50°, 60°, 70° und ein anderes mit denselben Winkeln: Sind sie sicher kongruent?', solution: 'Nein', steps: ['WWW ist kein Kongruenzsatz.', 'Eines kann eine Vergrößerung des anderen sein.'] },
        ],
      },
    },

    // ───────── 6. Right triangles
    {
      slug: 'g8-plane-geometry-right-triangles',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.8, xMax: 8.8, yMin: -1, yMax: 6.8 }, height: 220,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [8, 0], [0, 6]], fill: true, color: 'primary' },
          { kind: 'angle', vertex: [0, 0], from: [8, 0], to: [0, 6], right: true },
          { kind: 'segment', from: [0, 0], to: [4, 3], color: 'secondary', dashed: true, label: '5' },
          { kind: 'point', at: [4, 3], label: 'M', labelPos: 'ne', color: 'secondary' },
          { kind: 'label', at: [4, -0.5], text: '8' },
          { kind: 'label', at: [-0.5, 3], text: '6' },
          { kind: 'label', at: [6.3, 2], text: 'c = 10' },
        ],
        caption: alt('Mesorja e hipotenuzës është gjysma e saj: CM = 10 : 2 = 5. M është qendra e rrethit të jashtëshkruar.', 'The median to the hypotenuse is half of it: CM = 10 ÷ 2 = 5. M is the centre of the circumscribed circle.', 'Die Seitenhalbierende zur Hypotenuse ist halb so lang wie sie: CM = 10 : 2 = 5. M ist der Umkreismittelpunkt.'),
        alt: alt('Trekëndësh kënddrejtë me katete 6 dhe 8, hipotenuzë 10 dhe mesoren 5 deri te mesi M i hipotenuzës.', 'A right triangle with legs 6 and 8, hypotenuse 10 and the median of length 5 to the midpoint M of the hypotenuse.', 'Rechtwinkliges Dreieck mit Katheten 6 und 8, Hypotenuse 10 und der Seitenhalbierenden der Länge 5 zum Mittelpunkt M der Hypotenuse.'),
      }],
      answers: {
        examples: [[['90 - 35', 55]], [['sqrt(6^2 + 8^2) / 2', 5], ['6 * 8 / 10', 4.8]]],
        practice: [[['5 * 12 / 2', 30]], [['5 * 12 / 13', 4.62, 0.005, '4.62']], [['26 / 2', 13]]],
      },
      al: {
        title: 'Trekëndëshat kënddrejtë',
        objectives: ['Të përdorni vetitë e këndeve dhe të mesores në trekëndëshin kënddrejtë.', 'Të njehsoni sipërfaqen dhe lartësinë ndaj hipotenuzës.'],
        theory: 'Në trekëndëshin kënddrejtë dy këndet e ngushta kanë shumën 90°. Hipotenuza c është brinja më e gjatë, përballë këndit të drejtë.\n\nMesorja e hipotenuzës (nga kulmi i këndit të drejtë te mesi M i hipotenuzës) është sa gjysma e hipotenuzës: CM = c/2. M është qendra e rrethit të jashtëshkruar (Talesi).\n\nSipërfaqja: S = a · b / 2 (katetet janë njëra-tjetrës lartësi). Duke e shkruar sipërfaqen edhe si c · h / 2, del lartësia ndaj hipotenuzës: h = a · b / c.',
        keyPoints: ['α + β = 90°', 'Mesorja e hipotenuzës = c/2', 'S = ab/2;  h_c = ab/c'],
        examples: [
          { example: 'Në trekëndëshin kënddrejtë një kënd i ngushtë është 35°. Sa është tjetri?', solution: '90° − 35° = 55°.' },
          { example: 'Katetet janë 6 dhe 8. Gjeni mesoren dhe lartësinë ndaj hipotenuzës.', solution: 'c = 10; mesorja 10 : 2 = 5; h = 6 · 8 : 10 = 4,8.' },
        ],
        commonMistakes: [
          { mistake: 'Sipërfaqja = a · b (pa pjesëtim).', fix: 'Trekëndëshi është gjysma e drejtkëndëshit: S = a · b / 2.' },
          { mistake: 'Lartësia ndaj hipotenuzës është njëra katetë.', fix: 'Katetet janë lartësi ndaj njëra-tjetrës; ndaj hipotenuzës h = ab/c.' },
        ],
        practice: [
          { problem: 'Katetet janë 5 cm dhe 12 cm. Gjeni sipërfaqen.', solution: '30 cm²', steps: ['S = 5 · 12 / 2.', '= 30 cm².'] },
          { problem: 'Për të njëjtin trekëndësh (c = 13 cm) gjeni lartësinë ndaj hipotenuzës.', solution: '≈ 4,62 cm', steps: ['h = 5 · 12 / 13.', '= 60/13 ≈ 4,62 cm.'] },
          { problem: 'Hipotenuza është 26 cm. Sa është mesorja e saj?', solution: '13 cm', steps: ['Mesorja = c/2.', '26 / 2 = 13 cm.'] },
        ],
      },
      en: {
        title: 'Right triangles',
        objectives: ['Use the angle and median properties of a right triangle.', 'Work out the area and the height to the hypotenuse.'],
        theory: 'In a right triangle the two acute angles add up to 90°. The hypotenuse c is the longest side, opposite the right angle.\n\nThe median to the hypotenuse (from the right-angle vertex to the midpoint M of the hypotenuse) is half the hypotenuse: CM = c/2. M is the centre of the circumscribed circle (Thales).\n\nArea: A = a · b / 2 (each leg is the height to the other). Writing the area also as c · h / 2 gives the height to the hypotenuse: h = a · b / c.',
        keyPoints: ['α + β = 90°', 'Median to the hypotenuse = c/2', 'A = ab/2;  h_c = ab/c'],
        examples: [
          { example: 'In a right triangle one acute angle is 35°. What is the other?', solution: '90° − 35° = 55°.' },
          { example: 'The legs are 6 and 8. Find the median and the height to the hypotenuse.', solution: 'c = 10; median 10 ÷ 2 = 5; h = 6 · 8 ÷ 10 = 4.8.' },
        ],
        commonMistakes: [
          { mistake: 'Area = a · b (without dividing).', fix: 'The triangle is half a rectangle: A = a · b / 2.' },
          { mistake: 'The height to the hypotenuse is one of the legs.', fix: 'The legs are heights to each other; to the hypotenuse h = ab/c.' },
        ],
        practice: [
          { problem: 'The legs are 5 cm and 12 cm. Find the area.', solution: '30 cm²', steps: ['A = 5 · 12 / 2.', '= 30 cm².'] },
          { problem: 'For the same triangle (c = 13 cm) find the height to the hypotenuse.', solution: '≈ 4.62 cm', steps: ['h = 5 · 12 / 13.', '= 60/13 ≈ 4.62 cm.'] },
          { problem: 'The hypotenuse is 26 cm. How long is the median to it?', solution: '13 cm', steps: ['Median = c/2.', '26 / 2 = 13 cm.'] },
        ],
      },
      de: {
        title: 'Rechtwinklige Dreiecke',
        objectives: ['Winkel- und Seitenhalbierendeneigenschaften im rechtwinkligen Dreieck nutzen.', 'Flächeninhalt und Höhe auf die Hypotenuse berechnen.'],
        theory: 'Im rechtwinkligen Dreieck ergeben die beiden spitzen Winkel zusammen 90°. Die Hypotenuse c ist die längste Seite, gegenüber dem rechten Winkel.\n\nDie Seitenhalbierende zur Hypotenuse (vom Scheitel des rechten Winkels zum Mittelpunkt M der Hypotenuse) ist halb so lang wie die Hypotenuse: CM = c/2. M ist der Umkreismittelpunkt (Thales).\n\nFlächeninhalt: A = a · b / 2 (jede Kathete ist Höhe zur anderen). Schreibt man die Fläche auch als c · h / 2, erhält man die Höhe auf die Hypotenuse: h = a · b / c.',
        keyPoints: ['α + β = 90°', 'Seitenhalbierende zur Hypotenuse = c/2', 'A = ab/2;  h_c = ab/c'],
        examples: [
          { example: 'In einem rechtwinkligen Dreieck ist ein spitzer Winkel 35°. Wie groß ist der andere?', solution: '90° − 35° = 55°.' },
          { example: 'Die Katheten sind 6 und 8. Bestimmen Sie Seitenhalbierende und Höhe zur Hypotenuse.', solution: 'c = 10; Seitenhalbierende 10 : 2 = 5; h = 6 · 8 : 10 = 4,8.' },
        ],
        commonMistakes: [
          { mistake: 'Flächeninhalt = a · b (ohne Teilen).', fix: 'Das Dreieck ist ein halbes Rechteck: A = a · b / 2.' },
          { mistake: 'Die Höhe auf die Hypotenuse ist eine Kathete.', fix: 'Die Katheten sind Höhen zueinander; auf die Hypotenuse gilt h = ab/c.' },
        ],
        practice: [
          { problem: 'Die Katheten sind 5 cm und 12 cm lang. Bestimmen Sie den Flächeninhalt.', solution: '30 cm²', steps: ['A = 5 · 12 / 2.', '= 30 cm².'] },
          { problem: 'Bestimmen Sie für dasselbe Dreieck (c = 13 cm) die Höhe auf die Hypotenuse.', solution: '≈ 4,62 cm', steps: ['h = 5 · 12 / 13.', '= 60/13 ≈ 4,62 cm.'] },
          { problem: 'Die Hypotenuse ist 26 cm lang. Wie lang ist die Seitenhalbierende zu ihr?', solution: '13 cm', steps: ['Seitenhalbierende = c/2.', '26 / 2 = 13 cm.'] },
        ],
      },
    },

    // ───────── 7. Pythagoras
    {
      slug: 'g8-plane-geometry-pythagoras',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 6, yMin: -0.5, yMax: 7 }, grid: true, axes: true, height: 230,
        shapes: [
          { kind: 'polygon', points: [[1, 2], [4, 2], [4, 6]], fill: true, color: 'primary' },
          { kind: 'angle', vertex: [4, 2], from: [1, 2], to: [4, 6], right: true },
          { kind: 'point', at: [1, 2], label: 'A(1, 2)', labelPos: 'w' },
          { kind: 'point', at: [4, 6], label: 'B(4, 6)', labelPos: 'n' },
          { kind: 'label', at: [2.5, 1.55], text: '3' },
          { kind: 'label', at: [4.45, 4], text: '4' },
        ],
        caption: alt('Largësia AB del nga Pitagora: √(3² + 4²) = √25 = 5.', 'The distance AB comes from Pythagoras: √(3² + 4²) = √25 = 5.', 'Der Abstand AB ergibt sich mit Pythagoras: √(3² + 4²) = √25 = 5.'),
        alt: alt('Rrjetë koordinative me pikat A(1, 2) dhe B(4, 6) dhe trekëndëshin kënddrejtë me katete 3 dhe 4.', 'Coordinate grid with the points A(1, 2) and B(4, 6) and the right triangle with legs 3 and 4.', 'Koordinatengitter mit den Punkten A(1 | 2) und B(4 | 6) und dem rechtwinkligen Dreieck mit den Katheten 3 und 4.'),
      }],
      answers: {
        examples: [[['sqrt(5^2 + 5^2)', 7.07, 0.005, '7.07']], [['sqrt((4-1)^2 + (6-2)^2)', 5]]],
        practice: [[['sqrt(9^2 + 12^2)', 15]], [['sqrt(10^2 - 6^2)', 8]], [['8^2 + 15^2', 289], ['17^2', 289]]],
      },
      al: {
        title: 'Teorema e Pitagorës',
        objectives: ['Të zbatoni teoremën e Pitagorës në figura dhe në sistemin koordinativ.', 'Të gjeni largësinë ndërmjet dy pikave.'],
        theory: 'Në trekëndëshin kënddrejtë a² + b² = c². Diagonalja e katrorit me brinjë a: d = √(a² + a²) = a√2. Diagonalja e drejtkëndëshit a × b: d = √(a² + b²).\n\nLargësia ndërmjet pikave A(x₁, y₁) dhe B(x₂, y₂): vizatojmë trekëndëshin kënddrejtë me katete |x₂ − x₁| dhe |y₂ − y₁|, pra AB = √((x₂ − x₁)² + (y₂ − y₁)²).\n\nE anasjellta: nëse a² + b² = c², trekëndëshi është kënddrejtë. Treshet 3, 4, 5; 5, 12, 13; 8, 15, 17 janë treshe pitagoriane.',
        keyPoints: ['a² + b² = c²', 'Katrori: d = a√2', 'AB = √((x₂ − x₁)² + (y₂ − y₁)²)'],
        examples: [
          { example: 'Gjeni diagonalen e katrorit me brinjë 5 cm.', solution: 'd = √(25 + 25) = √50 = 5√2 ≈ 7,07 cm.' },
          { example: 'Gjeni largësinë ndërmjet A(1, 2) dhe B(4, 6).', solution: 'Katetet 3 dhe 4: AB = √(9 + 16) = 5.' },
        ],
        commonMistakes: [
          { mistake: 'AB = (4 − 1) + (6 − 2) = 7', fix: 'Largësia është hipotenuzë: √(3² + 4²) = 5.' },
        ],
        practice: [
          { problem: 'Gjeni diagonalen e drejtkëndëshit 9 cm × 12 cm.', solution: '15 cm', steps: ['d² = 81 + 144 = 225.', 'd = 15 cm.'] },
          { problem: 'Trekëndëshi barakrahës ka krahët 10 cm dhe bazën 12 cm. Gjeni lartësinë ndaj bazës.', solution: '8 cm', steps: ['Gjysma e bazës: 6 cm.', 'h = √(100 − 36) = 8 cm.'] },
          { problem: 'A është kënddrejtë trekëndëshi me brinjë 8, 15, 17?', solution: 'Po', steps: ['8² + 15² = 64 + 225 = 289.', '17² = 289 ✓'] },
        ],
      },
      en: {
        title: 'Pythagoras\' theorem',
        objectives: ['Apply Pythagoras\' theorem in shapes and on the coordinate grid.', 'Find the distance between two points.'],
        theory: 'In a right triangle a² + b² = c². The diagonal of a square with side a: d = √(a² + a²) = a√2. The diagonal of an a × b rectangle: d = √(a² + b²).\n\nDistance between A(x₁, y₁) and B(x₂, y₂): draw the right triangle with legs |x₂ − x₁| and |y₂ − y₁|, so AB = √((x₂ − x₁)² + (y₂ − y₁)²).\n\nThe converse: if a² + b² = c², the triangle is right-angled. The triples 3, 4, 5; 5, 12, 13; 8, 15, 17 are Pythagorean triples.',
        keyPoints: ['a² + b² = c²', 'Square: d = a√2', 'AB = √((x₂ − x₁)² + (y₂ − y₁)²)'],
        examples: [
          { example: 'Find the diagonal of a square with side 5 cm.', solution: 'd = √(25 + 25) = √50 = 5√2 ≈ 7.07 cm.' },
          { example: 'Find the distance between A(1, 2) and B(4, 6).', solution: 'Legs 3 and 4: AB = √(9 + 16) = 5.' },
        ],
        commonMistakes: [
          { mistake: 'AB = (4 − 1) + (6 − 2) = 7', fix: 'The distance is a hypotenuse: √(3² + 4²) = 5.' },
        ],
        practice: [
          { problem: 'Find the diagonal of a 9 cm × 12 cm rectangle.', solution: '15 cm', steps: ['d² = 81 + 144 = 225.', 'd = 15 cm.'] },
          { problem: 'An isosceles triangle has equal sides 10 cm and base 12 cm. Find the height to the base.', solution: '8 cm', steps: ['Half the base: 6 cm.', 'h = √(100 − 36) = 8 cm.'] },
          { problem: 'Is the triangle with sides 8, 15, 17 right-angled?', solution: 'Yes', steps: ['8² + 15² = 64 + 225 = 289.', '17² = 289 ✓'] },
        ],
      },
      de: {
        title: 'Der Satz des Pythagoras',
        objectives: ['Den Satz des Pythagoras in Figuren und im Koordinatensystem anwenden.', 'Den Abstand zweier Punkte bestimmen.'],
        theory: 'Im rechtwinkligen Dreieck gilt a² + b² = c². Diagonale eines Quadrats mit Seite a: d = √(a² + a²) = a√2. Diagonale eines Rechtecks a × b: d = √(a² + b²).\n\nAbstand von A(x₁ | y₁) und B(x₂ | y₂): Man zeichnet das rechtwinklige Dreieck mit den Katheten |x₂ − x₁| und |y₂ − y₁|, also AB = √((x₂ − x₁)² + (y₂ − y₁)²).\n\nUmkehrung: Gilt a² + b² = c², so ist das Dreieck rechtwinklig. 3, 4, 5; 5, 12, 13; 8, 15, 17 sind pythagoreische Tripel.',
        keyPoints: ['a² + b² = c²', 'Quadrat: d = a√2', 'AB = √((x₂ − x₁)² + (y₂ − y₁)²)'],
        examples: [
          { example: 'Bestimmen Sie die Diagonale eines Quadrats mit 5 cm Seitenlänge.', solution: 'd = √(25 + 25) = √50 = 5√2 ≈ 7,07 cm.' },
          { example: 'Bestimmen Sie den Abstand von A(1 | 2) und B(4 | 6).', solution: 'Katheten 3 und 4: AB = √(9 + 16) = 5.' },
        ],
        commonMistakes: [
          { mistake: 'AB = (4 − 1) + (6 − 2) = 7', fix: 'Der Abstand ist eine Hypotenuse: √(3² + 4²) = 5.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Diagonale eines Rechtecks 9 cm × 12 cm.', solution: '15 cm', steps: ['d² = 81 + 144 = 225.', 'd = 15 cm.'] },
          { problem: 'Ein gleichschenkliges Dreieck hat Schenkel von 10 cm und die Basis 12 cm. Bestimmen Sie die Höhe auf die Basis.', solution: '8 cm', steps: ['Halbe Basis: 6 cm.', 'h = √(100 − 36) = 8 cm.'] },
          { problem: 'Ist das Dreieck mit den Seiten 8, 15, 17 rechtwinklig?', solution: 'Ja', steps: ['8² + 15² = 64 + 225 = 289.', '17² = 289 ✓'] },
        ],
      },
    },

    // ───────── 8. Special right triangles
    {
      slug: 'g8-plane-geometry-special-triangles',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.8, xMax: 6.2, yMin: -1, yMax: 4.2 }, height: 200,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [5.196, 0], [0, 3]], fill: true, color: 'primary' },
          { kind: 'angle', vertex: [0, 0], from: [5.196, 0], to: [0, 3], right: true },
          { kind: 'angle', vertex: [5.196, 0], from: [0, 0], to: [0, 3], label: '30°', color: 'secondary', r: 34 },
          { kind: 'angle', vertex: [0, 3], from: [0, 0], to: [5.196, 0], label: '60°', color: 'success' },
          { kind: 'label', at: [-0.55, 1.5], text: 'a' },
          { kind: 'label', at: [2.6, -0.5], text: 'a√3' },
          { kind: 'label', at: [2.9, 1.95], text: '2a' },
        ],
        caption: alt('Trekëndëshi 30°–60°–90°: kateta përballë 30° është gjysma e hipotenuzës; kateta tjetër është a√3.', 'The 30°–60°–90° triangle: the leg opposite 30° is half the hypotenuse; the other leg is a√3.', 'Das 30°–60°–90°-Dreieck: Die Kathete gegenüber 30° ist halb so lang wie die Hypotenuse; die andere Kathete ist a√3.'),
        alt: alt('Trekëndësh kënddrejtë me kënde 30° dhe 60°; brinjët a, a√3 dhe 2a.', 'A right triangle with angles 30° and 60°; sides a, a√3 and 2a.', 'Ein rechtwinkliges Dreieck mit den Winkeln 30° und 60°; Seiten a, a√3 und 2a.'),
      }],
      answers: {
        examples: [[['12 / 2', 6], ['6 * sqrt(3)', 10.39, 0.005, '10.39']], [['4 * sqrt(2)', 5.66, 0.005, '5.66']]],
        practice: [[['4 * sqrt(3)', 6.93, 0.005, '6.93']], [['2 * 5', 10]], [['10 / sqrt(2)', 7.07, 0.005, '7.07']]],
      },
      al: {
        title: 'Trekëndëshat 30°–60°–90° dhe 45°–45°–90°',
        objectives: ['Të njihni raportet e brinjëve te trekëndëshat kënddrejtë të veçantë.', 'Të llogaritni brinjë pa përdorur Pitagorën çdo herë.'],
        theory: 'Trekëndëshi 45°–45°–90° është gjysma e katrorit (i prerë sipas diagonales): katetet janë të barabarta, a, dhe hipotenuza është a√2.\n\nTrekëndëshi 30°–60°–90° është gjysma e trekëndëshit barabrinjës: nëse kateta përballë 30° është a, hipotenuza është 2a dhe kateta tjetër a√3 (nga Pitagora: √(4a² − a²) = a√3).\n\nLartësia e trekëndëshit barabrinjës me brinjë s: h = s√3/2. Për s = 8: h = 4√3 ≈ 6,93.',
        keyPoints: ['45°–45°–90°: a, a, a√2', '30°–60°–90°: a, a√3, 2a', 'Barabrinjës: h = s√3/2'],
        examples: [
          { example: 'Te trekëndëshi 30°–60°–90° hipotenuza është 12 cm. Gjeni katetet.', solution: 'Kateta e vogël 12 : 2 = 6 cm; tjetra 6√3 ≈ 10,39 cm.' },
          { example: 'Trekëndëshi kënddrejtë barakrahës ka katete 4 cm. Gjeni hipotenuzën.', solution: 'c = 4√2 ≈ 5,66 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Kateta përballë 60° është gjysma e hipotenuzës.', fix: 'Gjysma e hipotenuzës është kateta përballë 30° (më e vogla).' },
          { mistake: 'Te 45°–45°–90°: c = 2a.', fix: 'c = a√2 ≈ 1,41a.' },
        ],
        practice: [
          { problem: 'Gjeni lartësinë e trekëndëshit barabrinjës me brinjë 8 cm.', solution: '4√3 ≈ 6,93 cm', steps: ['h = 8√3/2.', '= 4√3 ≈ 6,93 cm.'] },
          { problem: 'Te trekëndëshi 30°–60°–90° kateta më e vogël është 5 cm. Sa është hipotenuza?', solution: '10 cm', steps: ['c = 2a.', '2 · 5 = 10 cm.'] },
          { problem: 'Te trekëndëshi 45°–45°–90° hipotenuza është 10 cm. Gjeni katetet.', solution: '5√2 ≈ 7,07 cm', steps: ['a = 10/√2.', '= 5√2 ≈ 7,07 cm.'] },
        ],
      },
      en: {
        title: '30°–60°–90° and 45°–45°–90° triangles',
        objectives: ['Know the side ratios of the special right triangles.', 'Work out sides without using Pythagoras every time.'],
        theory: 'The 45°–45°–90° triangle is half a square (cut along the diagonal): the legs are equal, a, and the hypotenuse is a√2.\n\nThe 30°–60°–90° triangle is half an equilateral triangle: if the leg opposite 30° is a, the hypotenuse is 2a and the other leg a√3 (by Pythagoras: √(4a² − a²) = a√3).\n\nThe height of an equilateral triangle with side s: h = s√3/2. For s = 8: h = 4√3 ≈ 6.93.',
        keyPoints: ['45°–45°–90°: a, a, a√2', '30°–60°–90°: a, a√3, 2a', 'Equilateral: h = s√3/2'],
        examples: [
          { example: 'In a 30°–60°–90° triangle the hypotenuse is 12 cm. Find the legs.', solution: 'Short leg 12 ÷ 2 = 6 cm; the other 6√3 ≈ 10.39 cm.' },
          { example: 'An isosceles right triangle has legs of 4 cm. Find the hypotenuse.', solution: 'c = 4√2 ≈ 5.66 cm.' },
        ],
        commonMistakes: [
          { mistake: 'The leg opposite 60° is half the hypotenuse.', fix: 'Half the hypotenuse is the leg opposite 30° (the shortest).' },
          { mistake: 'For 45°–45°–90°: c = 2a.', fix: 'c = a√2 ≈ 1.41a.' },
        ],
        practice: [
          { problem: 'Find the height of an equilateral triangle with side 8 cm.', solution: '4√3 ≈ 6.93 cm', steps: ['h = 8√3/2.', '= 4√3 ≈ 6.93 cm.'] },
          { problem: 'In a 30°–60°–90° triangle the short leg is 5 cm. What is the hypotenuse?', solution: '10 cm', steps: ['c = 2a.', '2 · 5 = 10 cm.'] },
          { problem: 'In a 45°–45°–90° triangle the hypotenuse is 10 cm. Find the legs.', solution: '5√2 ≈ 7.07 cm', steps: ['a = 10/√2.', '= 5√2 ≈ 7.07 cm.'] },
        ],
      },
      de: {
        title: 'Das 30°–60°–90°- und das 45°–45°–90°-Dreieck',
        objectives: ['Die Seitenverhältnisse der besonderen rechtwinkligen Dreiecke kennen.', 'Seiten berechnen, ohne jedes Mal Pythagoras anzuwenden.'],
        theory: 'Das 45°–45°–90°-Dreieck ist ein halbes Quadrat (entlang der Diagonale geteilt): Die Katheten sind gleich, a, und die Hypotenuse ist a√2.\n\nDas 30°–60°–90°-Dreieck ist ein halbes gleichseitiges Dreieck: Ist die Kathete gegenüber 30° gleich a, so ist die Hypotenuse 2a und die andere Kathete a√3 (mit Pythagoras: √(4a² − a²) = a√3).\n\nHöhe eines gleichseitigen Dreiecks mit Seite s: h = s√3/2. Für s = 8: h = 4√3 ≈ 6,93.',
        keyPoints: ['45°–45°–90°: a, a, a√2', '30°–60°–90°: a, a√3, 2a', 'Gleichseitig: h = s√3/2'],
        examples: [
          { example: 'Im 30°–60°–90°-Dreieck ist die Hypotenuse 12 cm. Bestimmen Sie die Katheten.', solution: 'Kurze Kathete 12 : 2 = 6 cm; die andere 6√3 ≈ 10,39 cm.' },
          { example: 'Ein gleichschenklig-rechtwinkliges Dreieck hat Katheten von 4 cm. Bestimmen Sie die Hypotenuse.', solution: 'c = 4√2 ≈ 5,66 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Die Kathete gegenüber 60° ist halb so lang wie die Hypotenuse.', fix: 'Halb so lang ist die Kathete gegenüber 30° (die kürzeste).' },
          { mistake: 'Beim 45°–45°–90°-Dreieck: c = 2a.', fix: 'c = a√2 ≈ 1,41a.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Höhe eines gleichseitigen Dreiecks mit 8 cm Seitenlänge.', solution: '4√3 ≈ 6,93 cm', steps: ['h = 8√3/2.', '= 4√3 ≈ 6,93 cm.'] },
          { problem: 'Im 30°–60°–90°-Dreieck ist die kurze Kathete 5 cm. Wie lang ist die Hypotenuse?', solution: '10 cm', steps: ['c = 2a.', '2 · 5 = 10 cm.'] },
          { problem: 'Im 45°–45°–90°-Dreieck ist die Hypotenuse 10 cm. Bestimmen Sie die Katheten.', solution: '5√2 ≈ 7,07 cm', steps: ['a = 10/√2.', '= 5√2 ≈ 7,07 cm.'] },
        ],
      },
    },
  ],
};
