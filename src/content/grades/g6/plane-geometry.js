// Grade 6 · Theme 2: Plane geometry (September–December)
const alt = (al, en, de) => ({ al, en, de });
const deg = (d) => [Math.cos((d * Math.PI) / 180), Math.sin((d * Math.PI) / 180)];
const arm = (v, d, r = 3) => [v[0] + r * deg(d)[0], v[1] + r * deg(d)[1]];

export default {
  id: 'g6-plane-geometry',
  i18n: {
    al: { title: 'Gjeometria në rrafsh', description: 'Pika, drejtëza, segmente dhe kënde: si maten, si emërtohen dhe si ndërtohen.' },
    en: { title: 'Plane geometry', description: 'Points, lines, segments and angles: how to measure, name and construct them.' },
    de: { title: 'Ebene Geometrie', description: 'Punkte, Geraden, Strecken und Winkel: messen, benennen und konstruieren.' },
  },
  lessons: [
    // ───────── 1. Point, line, plane
    {
      slug: 'g6-plane-geometry-point-line-plane',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 10.5, yMin: -0.8, yMax: 5 },
        shapes: [
          { kind: 'line', through: [[6.5, 3.8], [10, 3.8]], color: 'primary', label: 'a' },
          { kind: 'point', at: [1.5, 3.8], label: 'A', color: 'primary' },
          { kind: 'point', at: [4, 3.8], label: 'B', color: 'primary' },
          { kind: 'segment', from: [0.5, 1], to: [4.5, 1], color: 'secondary' },
          { kind: 'point', at: [0.5, 1], label: 'C', color: 'secondary', labelPos: 'sw' },
          { kind: 'point', at: [4.5, 1], label: 'D', color: 'secondary', labelPos: 'se' },
          { kind: 'ray', from: [6, 0.5], through: [9, 2.5], color: 'success' },
          { kind: 'point', at: [6, 0.5], label: 'O', color: 'success', labelPos: 'sw' },
          { kind: 'point', at: [7.5, 1.5], label: 'E', color: 'success', labelPos: 'nw' },
        ],
        caption: alt('Drejtëza a (pa fund), segmenti CD (dy skaje), gjysmëdrejtëza OE (një skaj).', 'Line a (no ends), segment CD (two endpoints), ray OE (one endpoint).', 'Gerade a (ohne Enden), Strecke CD (zwei Endpunkte), Strahl OE (ein Anfangspunkt).'),
        alt: alt('Një drejtëz a nëpër pikat A dhe B, një segment CD dhe një gjysmëdrejtëz me fillim në O që kalon nëpër E.', 'A line a through points A and B, a segment CD, and a ray starting at O through E.', 'Eine Gerade a durch A und B, eine Strecke CD und ein Strahl, der in O beginnt und durch E geht.'),
      }],
      answers: {
        examples: ['text', [['3 * 2 / 2', 3]]],
        practice: [[['4 * 3 / 2', 6]], 'text', [['3', 3]]],
      },
      al: {
        title: 'Pika, drejtëza dhe rrafshi',
        objectives: ['Të dalloni pikën, drejtëzën, segmentin dhe gjysmëdrejtëzën.', 'Të dini sa drejtëza kalojnë nëpër një ose dy pika.'],
        theory: 'Pika tregon një vend dhe nuk ka përmasa; e shënojmë me shkronjë të madhe: A, B, C. Drejtëza është e drejtë dhe e pafundme nga të dyja anët; e shënojmë me shkronjë të vogël (a) ose me dy pika të saj (AB). Rrafshi është një sipërfaqe e sheshtë dhe e pafundme, si një fletë që nuk mbaron.\n\nNëpër një pikë kalojnë pafundësisht shumë drejtëza, ndërsa nëpër dy pika të ndryshme kalon vetëm një drejtëz.\n\nPjesa e drejtëzës ndërmjet dy pikave quhet segment (ka dy skaje). Pjesa e drejtëzës që fillon në një pikë dhe vazhdon pa fund në një drejtim quhet gjysmëdrejtëz (ka një skaj, fillimin).',
        keyPoints: ['Nëpër dy pika kalon një e vetme drejtëz.', 'Segmenti ka dy skaje; gjysmëdrejtëza ka një; drejtëza asnjë.', 'Pikat shënohen me shkronja të mëdha, drejtëzat me të vogla.'],
        examples: [
          { example: 'Sa drejtëza kalojnë nëpër një pikë A?', solution: 'Pafundësisht shumë: drejtëza mund të rrotullohet rreth A në çdo drejtim.' },
          { example: 'Tre pika A, B, C nuk shtrihen në një drejtëz. Sa drejtëza kalojnë nëpër çiftet e tyre?', solution: 'Çiftet janë AB, AC, BC, pra 3 drejtëza (3 · 2 : 2 = 3).' },
        ],
        commonMistakes: [
          { mistake: 'Drejtëza vizatohet me dy pika fundore, si segment.', fix: 'Drejtëza nuk ka fund; vizatojeni të zgjatur përtej pikave.' },
          { mistake: 'Gjysmëdrejtëza OE dhe EO ngatërrohen.', fix: 'Shkronja e parë është gjithmonë fillimi: OE fillon në O.' },
        ],
        practice: [
          { problem: 'Katër pika, ku asnjë treshe nuk është në një drejtëz. Sa drejtëza kalojnë nëpër çiftet e tyre?', solution: '6', steps: ['Çdo pikë lidhet me 3 të tjera: 4 · 3 = 12.', 'Çdo drejtëz u numërua dy herë: 12 : 2 = 6.'] },
          { problem: 'Cili është ndryshimi ndërmjet segmentit AB dhe gjysmëdrejtëzës AB?', solution: 'Segmenti mbaron te B; gjysmëdrejtëza vazhdon pa fund përtej B.', steps: ['Të dyja fillojnë në A.', 'Segmenti ka skaj edhe te B, gjysmëdrejtëza jo.'] },
          { problem: 'Pikat A, B, C janë në një drejtëz, në këtë radhë. Sa segmente kanë skajet te këto pika?', solution: '3 segmente: AB, BC dhe AC.', steps: ['Zgjidhni çdo çift pikash: AB, AC, BC.', 'Gjithsej 3.'] },
        ],
      },
      en: {
        title: 'Point, line and plane',
        objectives: ['Tell apart a point, a line, a segment and a ray.', 'Know how many lines pass through one or two points.'],
        theory: 'A point marks a position and has no size; we name it with a capital letter: A, B, C. A line is straight and endless in both directions; we name it with a small letter (a) or with two of its points (AB). A plane is a flat, endless surface, like a sheet of paper that never ends.\n\nInfinitely many lines pass through one point, but through two different points there is exactly one line.\n\nThe part of a line between two points is a segment (it has two endpoints). The part of a line that starts at a point and goes on forever in one direction is a ray (it has one endpoint, its start).',
        keyPoints: ['Exactly one line passes through two points.', 'A segment has two endpoints; a ray has one; a line has none.', 'Points get capital letters, lines small letters.'],
        examples: [
          { example: 'How many lines pass through one point A?', solution: 'Infinitely many: a line can turn around A in every direction.' },
          { example: 'Three points A, B, C are not on one line. How many lines pass through pairs of them?', solution: 'The pairs are AB, AC, BC, so 3 lines (3 · 2 ÷ 2 = 3).' },
        ],
        commonMistakes: [
          { mistake: 'Drawing a line with two endpoints, like a segment.', fix: 'A line has no end; draw it extending past the points.' },
          { mistake: 'Mixing up ray OE and ray EO.', fix: 'The first letter is always the starting point: OE starts at O.' },
        ],
        practice: [
          { problem: 'Four points, no three of them on one line. How many lines pass through pairs of them?', solution: '6', steps: ['Each point joins 3 others: 4 · 3 = 12.', 'Each line was counted twice: 12 ÷ 2 = 6.'] },
          { problem: 'What is the difference between segment AB and ray AB?', solution: 'The segment stops at B; the ray goes on forever past B.', steps: ['Both start at A.', 'The segment has an endpoint at B too, the ray does not.'] },
          { problem: 'Points A, B, C lie on a line in this order. How many segments have their endpoints at these points?', solution: '3 segments: AB, BC and AC.', steps: ['Choose every pair of points: AB, AC, BC.', '3 in total.'] },
        ],
      },
      de: {
        title: 'Punkt, Gerade und Ebene',
        objectives: ['Punkt, Gerade, Strecke und Strahl unterscheiden.', 'Wissen, wie viele Geraden durch einen oder zwei Punkte gehen.'],
        theory: 'Ein Punkt markiert eine Stelle und hat keine Ausdehnung; wir benennen ihn mit einem Großbuchstaben: A, B, C. Eine Gerade ist gerade und nach beiden Seiten unendlich lang; wir benennen sie mit einem Kleinbuchstaben (a) oder mit zwei ihrer Punkte (AB). Eine Ebene ist eine flache, unendlich ausgedehnte Fläche, wie ein Blatt Papier ohne Rand.\n\nDurch einen Punkt gehen unendlich viele Geraden, durch zwei verschiedene Punkte aber genau eine Gerade.\n\nDer Teil einer Geraden zwischen zwei Punkten heißt Strecke (zwei Endpunkte). Der Teil einer Geraden, der in einem Punkt beginnt und in eine Richtung unendlich weitergeht, heißt Strahl (ein Anfangspunkt).',
        keyPoints: ['Durch zwei Punkte geht genau eine Gerade.', 'Eine Strecke hat zwei Endpunkte, ein Strahl einen, eine Gerade keinen.', 'Punkte bekommen Großbuchstaben, Geraden Kleinbuchstaben.'],
        examples: [
          { example: 'Wie viele Geraden gehen durch einen Punkt A?', solution: 'Unendlich viele: Eine Gerade kann sich in jede Richtung um A drehen.' },
          { example: 'Drei Punkte A, B, C liegen nicht auf einer Geraden. Wie viele Geraden gehen durch jeweils zwei von ihnen?', solution: 'Die Paare sind AB, AC, BC, also 3 Geraden (3 · 2 : 2 = 3).' },
        ],
        commonMistakes: [
          { mistake: 'Eine Gerade mit zwei Endpunkten zeichnen, wie eine Strecke.', fix: 'Eine Gerade hat kein Ende; zeichnen Sie sie über die Punkte hinaus.' },
          { mistake: 'Strahl OE und Strahl EO verwechseln.', fix: 'Der erste Buchstabe ist immer der Anfangspunkt: OE beginnt in O.' },
        ],
        practice: [
          { problem: 'Vier Punkte, von denen keine drei auf einer Geraden liegen. Wie viele Geraden gehen durch je zwei von ihnen?', solution: '6', steps: ['Jeder Punkt wird mit 3 anderen verbunden: 4 · 3 = 12.', 'Jede Gerade wurde doppelt gezählt: 12 : 2 = 6.'] },
          { problem: 'Was ist der Unterschied zwischen der Strecke AB und dem Strahl AB?', solution: 'Die Strecke endet bei B; der Strahl geht über B hinaus unendlich weiter.', steps: ['Beide beginnen in A.', 'Die Strecke hat auch in B einen Endpunkt, der Strahl nicht.'] },
          { problem: 'Die Punkte A, B, C liegen in dieser Reihenfolge auf einer Geraden. Wie viele Strecken haben ihre Endpunkte in diesen Punkten?', solution: '3 Strecken: AB, BC und AC.', steps: ['Jedes Punktepaar wählen: AB, AC, BC.', 'Insgesamt 3.'] },
        ],
      },
    },

    // ───────── 2. Segment
    {
      slug: 'g6-plane-geometry-segment',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 9.6, yMin: -1.2, yMax: 1.4 }, height: 90,
        shapes: [
          { kind: 'segment', from: [0, 0], to: [4.5, 0], color: 'primary', ticks: 1, label: { n: 4.5, unit: 'cm' } },
          { kind: 'segment', from: [4.5, 0], to: [9, 0], color: 'primary', ticks: 1, label: { n: 4.5, unit: 'cm' } },
          { kind: 'point', at: [0, 0], label: 'A', labelPos: 's', color: 'primary' },
          { kind: 'point', at: [4.5, 0], label: 'M', labelPos: 's', color: 'secondary' },
          { kind: 'point', at: [9, 0], label: 'B', labelPos: 's', color: 'primary' },
        ],
        caption: alt('AB = 9 cm; mesi M e ndan në dy pjesë të barabarta.', 'AB = 9 cm; the midpoint M splits it into two equal parts.', 'AB = 9 cm; der Mittelpunkt M teilt sie in zwei gleiche Teile.'),
        alt: alt('Segmenti AB me gjatësi 9 cm dhe mesi M; AM = MB = 4,5 cm.', 'Segment AB of length 9 cm with midpoint M; AM = MB = 4.5 cm.', 'Strecke AB der Länge 9 cm mit Mittelpunkt M; AM = MB = 4,5 cm.'),
      }],
      answers: {
        examples: [[['9 / 2', 4.5]], [['3 + 5', 8]]],
        practice: [[['12 - 7', 5]], [['2 * 3.5', 7]], [['2.4 + 3.8', 6.2]]],
      },
      al: {
        title: 'Segmenti',
        objectives: ['Të matni dhe të krahasoni segmente.', 'Të gjeni mesin e një segmenti dhe gjatësi që mungojnë.'],
        theory: 'Segmenti AB është pjesa e drejtëzës ndërmjet pikave A dhe B. Gjatësinë e tij e shënojmë AB dhe e matim me vizore, në cm ose mm. Dy segmente me gjatësi të njëjtë quhen të barabarta; në figurë i shënojmë me të njëjtën vijëz të vogël.\n\nMesi i segmentit është pika M që e ndan atë në dy pjesë të barabarta: AM = MB = AB : 2.\n\nNëse pika B shtrihet ndërmjet A dhe C në të njëjtën drejtëz, gjatësitë mblidhen: AC = AB + BC. Prej këtej mund të gjejmë edhe një gjatësi që mungon: BC = AC − AB.',
        keyPoints: ['AM = MB = AB : 2 (M është mesi).', 'Nëse B është ndërmjet A dhe C: AC = AB + BC.', 'Segmente të barabarta shënohen me të njëjtën vijëz.'],
        examples: [
          { example: 'AB = 9 cm dhe M është mesi i tij. Sa është AM?', solution: 'AM = 9 : 2 = 4,5 cm.' },
          { example: 'Pikat A, B, C janë në një drejtëz në këtë radhë. AB = 3 cm, BC = 5 cm. Sa është AC?', solution: 'AC = AB + BC = 3 + 5 = 8 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Matja fillohet nga skaji i vizores, jo nga shenja 0.', fix: 'Vendoseni shenjën 0 të vizores saktë te pika e parë.' },
          { mistake: 'Gjatësitë mblidhen edhe kur pika nuk është ndërmjet dy të tjerave.', fix: 'AC = AB + BC vlen vetëm kur B shtrihet ndërmjet A dhe C.' },
        ],
        practice: [
          { problem: 'B është ndërmjet A dhe C. AC = 12 cm, AB = 7 cm. Sa është BC?', solution: 'BC = 5 cm', steps: ['AC = AB + BC.', 'BC = 12 − 7 = 5 cm.'] },
          { problem: 'M është mesi i AB dhe AM = 3,5 cm. Sa është AB?', solution: 'AB = 7 cm', steps: ['AB = 2 · AM.', '2 · 3,5 = 7 cm.'] },
          { problem: 'Dy segmente kanë gjatësi 2,4 cm dhe 3,8 cm. Sa është gjatësia e tyre bashkë?', solution: '6,2 cm', steps: ['Mblidhni gjatësitë.', '2,4 + 3,8 = 6,2 cm.'] },
        ],
      },
      en: {
        title: 'The segment',
        objectives: ['Measure and compare segments.', 'Find the midpoint of a segment and missing lengths.'],
        theory: 'Segment AB is the part of a line between points A and B. Its length is written AB and measured with a ruler, in cm or mm. Two segments of the same length are called equal; in a drawing we mark them with the same small tick.\n\nThe midpoint of a segment is the point M that splits it into two equal parts: AM = MB = AB ÷ 2.\n\nIf point B lies between A and C on the same line, the lengths add up: AC = AB + BC. From this we can also find a missing length: BC = AC − AB.',
        keyPoints: ['AM = MB = AB ÷ 2 (M is the midpoint).', 'If B is between A and C: AC = AB + BC.', 'Equal segments are marked with the same tick.'],
        examples: [
          { example: 'AB = 9 cm and M is its midpoint. How long is AM?', solution: 'AM = 9 ÷ 2 = 4.5 cm.' },
          { example: 'Points A, B, C lie on a line in this order. AB = 3 cm, BC = 5 cm. How long is AC?', solution: 'AC = AB + BC = 3 + 5 = 8 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Measuring from the edge of the ruler instead of the 0 mark.', fix: 'Put the 0 mark of the ruler exactly on the first point.' },
          { mistake: 'Adding lengths even when the point is not between the other two.', fix: 'AC = AB + BC only works when B lies between A and C.' },
        ],
        practice: [
          { problem: 'B is between A and C. AC = 12 cm, AB = 7 cm. How long is BC?', solution: 'BC = 5 cm', steps: ['AC = AB + BC.', 'BC = 12 − 7 = 5 cm.'] },
          { problem: 'M is the midpoint of AB and AM = 3.5 cm. How long is AB?', solution: 'AB = 7 cm', steps: ['AB = 2 · AM.', '2 · 3.5 = 7 cm.'] },
          { problem: 'Two segments are 2.4 cm and 3.8 cm long. What is their total length?', solution: '6.2 cm', steps: ['Add the lengths.', '2.4 + 3.8 = 6.2 cm.'] },
        ],
      },
      de: {
        title: 'Die Strecke',
        objectives: ['Strecken messen und vergleichen.', 'Den Mittelpunkt einer Strecke und fehlende Längen bestimmen.'],
        theory: 'Die Strecke AB ist der Teil einer Geraden zwischen den Punkten A und B. Ihre Länge schreibt man AB und misst sie mit dem Lineal in cm oder mm. Zwei gleich lange Strecken heißen gleich; in einer Zeichnung markiert man sie mit demselben kleinen Strich.\n\nDer Mittelpunkt einer Strecke ist der Punkt M, der sie in zwei gleiche Teile teilt: AM = MB = AB : 2.\n\nLiegt B zwischen A und C auf derselben Geraden, addieren sich die Längen: AC = AB + BC. Daraus lässt sich auch eine fehlende Länge bestimmen: BC = AC − AB.',
        keyPoints: ['AM = MB = AB : 2 (M ist der Mittelpunkt).', 'Liegt B zwischen A und C: AC = AB + BC.', 'Gleich lange Strecken bekommen denselben Strich.'],
        examples: [
          { example: 'AB = 9 cm und M ist der Mittelpunkt. Wie lang ist AM?', solution: 'AM = 9 : 2 = 4,5 cm.' },
          { example: 'A, B, C liegen in dieser Reihenfolge auf einer Geraden. AB = 3 cm, BC = 5 cm. Wie lang ist AC?', solution: 'AC = AB + BC = 3 + 5 = 8 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Vom Rand des Lineals statt von der 0 aus messen.', fix: 'Die 0-Marke des Lineals genau an den ersten Punkt legen.' },
          { mistake: 'Längen addieren, obwohl der Punkt nicht zwischen den beiden anderen liegt.', fix: 'AC = AB + BC gilt nur, wenn B zwischen A und C liegt.' },
        ],
        practice: [
          { problem: 'B liegt zwischen A und C. AC = 12 cm, AB = 7 cm. Wie lang ist BC?', solution: 'BC = 5 cm', steps: ['AC = AB + BC.', 'BC = 12 − 7 = 5 cm.'] },
          { problem: 'M ist der Mittelpunkt von AB und AM = 3,5 cm. Wie lang ist AB?', solution: 'AB = 7 cm', steps: ['AB = 2 · AM.', '2 · 3,5 = 7 cm.'] },
          { problem: 'Zwei Strecken sind 2,4 cm und 3,8 cm lang. Wie lang sind sie zusammen?', solution: '6,2 cm', steps: ['Die Längen addieren.', '2,4 + 3,8 = 6,2 cm.'] },
        ],
      },
    },

    // ───────── 3. Angle and its measure
    {
      slug: 'g6-plane-geometry-angle-measure',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.8, xMax: 5, yMin: -0.8, yMax: 3.8 },
        shapes: [
          { kind: 'angle', vertex: [0, 0], from: [4, 0], to: arm([0, 0], 50, 4), label: '50°', color: 'secondary', r: 26 },
          { kind: 'ray', from: [0, 0], through: [4, 0], color: 'primary' },
          { kind: 'ray', from: [0, 0], through: arm([0, 0], 50, 4), color: 'primary' },
          { kind: 'point', at: [0, 0], label: 'O', labelPos: 'sw', color: 'primary' },
          { kind: 'point', at: [3.5, 0], label: 'A', labelPos: 's', color: 'primary' },
          { kind: 'point', at: arm([0, 0], 50, 3.5), label: 'B', labelPos: 'nw', color: 'primary' },
        ],
        caption: alt('Këndi AOB: kulmi O, krahët OA dhe OB, masa 50°.', 'Angle AOB: vertex O, arms OA and OB, size 50°.', 'Winkel AOB: Scheitel O, Schenkel OA und OB, Größe 50°.'),
        alt: alt('Këndi AOB me kulm në O dhe masë 50 gradë.', 'Angle AOB with vertex O measuring 50 degrees.', 'Winkel AOB mit Scheitel O, 50 Grad groß.'),
      }],
      answers: {
        examples: [[['360 / 4', 90]], [['5 * 30', 150]]],
        practice: [[['2 * 30', 60]], [['130 - 45', 85]], [['360 / 3', 120]]],
      },
      al: {
        title: 'Këndi dhe matja e tij',
        objectives: ['Të emërtoni një kënd me kulmin dhe krahët e tij.', 'Të matni dhe të vizatoni kënde me raportor, në gradë.'],
        theory: 'Këndi formohet nga dy gjysmëdrejtëza me fillim të përbashkët. Fillimi i përbashkët quhet kulm, ndërsa gjysmëdrejtëzat quhen krahë. Këndin me kulm O dhe krahë OA e OB e shënojmë ∠AOB; shkronja e kulmit është gjithmonë në mes.\n\nKëndet maten në gradë (°) me raportor. Një rrotullim i plotë ka 360°, gjysmë rrotullimi 180°, një çerek rrotullimi 90°.\n\nPër të matur: vendosni qendrën e raportorit në kulm dhe vijën 0 mbi njërin krah; lexoni numrin ku kalon krahu tjetër, në shkallën që fillon nga 0 te ai krah.',
        keyPoints: ['Rrotullim i plotë = 360°; gjysmë = 180°; çerek = 90°.', 'Në emrin ∠AOB kulmi (O) është në mes.', 'Qendra e raportorit në kulm, 0 mbi njërin krah.'],
        examples: [
          { example: 'Sa gradë ka çereku i një rrotullimi të plotë (si akrepat e orës në 3:00)?', solution: '360° : 4 = 90°.' },
          { example: 'Sa gradë është këndi ndërmjet akrepave të orës në 5:00?', solution: 'Ora ka 12 ndarje: 360° : 12 = 30° për orë. Në 5:00: 5 · 30° = 150°.' },
        ],
        commonMistakes: [
          { mistake: 'Lexohet shkalla e gabuar e raportorit (130° në vend të 50°).', fix: 'Lexoni shkallën që fillon me 0 te krahu ku vendosët raportorin.' },
        ],
        practice: [
          { problem: 'Sa gradë është këndi ndërmjet akrepave të orës në 2:00?', solution: '60°', steps: ['Një orë = 30°.', '2 · 30° = 60°.'] },
          { problem: '∠AOB = 130°. Gjysmëdrejtëza OC është brenda këndit dhe ∠AOC = 45°. Sa është ∠COB?', solution: '85°', steps: ['∠AOB = ∠AOC + ∠COB.', '∠COB = 130° − 45° = 85°.'] },
          { problem: 'Sa gradë ka një e treta e rrotullimit të plotë?', solution: '120°', steps: ['Rrotullimi i plotë = 360°.', '360° : 3 = 120°.'] },
        ],
      },
      en: {
        title: 'Angles and how to measure them',
        objectives: ['Name an angle by its vertex and arms.', 'Measure and draw angles in degrees with a protractor.'],
        theory: 'An angle is formed by two rays with a common starting point. The common point is the vertex and the rays are the arms. The angle with vertex O and arms OA and OB is written ∠AOB; the vertex letter is always in the middle.\n\nAngles are measured in degrees (°) with a protractor. A full turn is 360°, a half turn 180°, a quarter turn 90°.\n\nTo measure: put the centre of the protractor on the vertex and the 0 line along one arm; read the number where the other arm crosses, on the scale that starts at 0 on that arm.',
        keyPoints: ['Full turn = 360°; half = 180°; quarter = 90°.', 'In the name ∠AOB the vertex (O) is in the middle.', 'Protractor centre on the vertex, 0 along one arm.'],
        examples: [
          { example: 'How many degrees is a quarter of a full turn (like clock hands at 3:00)?', solution: '360° ÷ 4 = 90°.' },
          { example: 'What is the angle between the clock hands at 5:00?', solution: 'A clock has 12 parts: 360° ÷ 12 = 30° per hour. At 5:00: 5 · 30° = 150°.' },
        ],
        commonMistakes: [
          { mistake: 'Reading the wrong protractor scale (130° instead of 50°).', fix: 'Read the scale that starts at 0 on the arm where you placed the protractor.' },
        ],
        practice: [
          { problem: 'What is the angle between the clock hands at 2:00?', solution: '60°', steps: ['One hour = 30°.', '2 · 30° = 60°.'] },
          { problem: '∠AOB = 130°. Ray OC lies inside the angle and ∠AOC = 45°. How large is ∠COB?', solution: '85°', steps: ['∠AOB = ∠AOC + ∠COB.', '∠COB = 130° − 45° = 85°.'] },
          { problem: 'How many degrees is one third of a full turn?', solution: '120°', steps: ['A full turn = 360°.', '360° ÷ 3 = 120°.'] },
        ],
      },
      de: {
        title: 'Winkel und ihre Größe',
        objectives: ['Einen Winkel mit Scheitel und Schenkeln benennen.', 'Winkel mit dem Geodreieck in Grad messen und zeichnen.'],
        theory: 'Ein Winkel entsteht aus zwei Strahlen mit gemeinsamem Anfangspunkt. Der gemeinsame Punkt heißt Scheitel, die Strahlen heißen Schenkel. Den Winkel mit Scheitel O und den Schenkeln OA und OB schreibt man ∠AOB; der Scheitel steht immer in der Mitte.\n\nWinkel misst man in Grad (°) mit dem Geodreieck. Eine volle Drehung hat 360°, eine halbe 180°, eine Vierteldrehung 90°.\n\nZum Messen: Den Nullpunkt des Geodreiecks auf den Scheitel und die 0-Linie auf einen Schenkel legen; dann dort ablesen, wo der andere Schenkel die Skala schneidet, und zwar auf der Skala, die an diesem Schenkel mit 0 beginnt.',
        keyPoints: ['Volle Drehung = 360°; halbe = 180°; Viertel = 90°.', 'Im Namen ∠AOB steht der Scheitel (O) in der Mitte.', 'Nullpunkt auf den Scheitel, 0-Linie auf einen Schenkel.'],
        examples: [
          { example: 'Wie viel Grad hat eine Vierteldrehung (wie die Uhrzeiger um 3:00)?', solution: '360° : 4 = 90°.' },
          { example: 'Wie groß ist der Winkel zwischen den Uhrzeigern um 5:00?', solution: 'Die Uhr hat 12 Teile: 360° : 12 = 30° pro Stunde. Um 5:00: 5 · 30° = 150°.' },
        ],
        commonMistakes: [
          { mistake: 'Die falsche Skala ablesen (130° statt 50°).', fix: 'Die Skala ablesen, die an dem angelegten Schenkel mit 0 beginnt.' },
        ],
        practice: [
          { problem: 'Wie groß ist der Winkel zwischen den Uhrzeigern um 2:00?', solution: '60°', steps: ['Eine Stunde = 30°.', '2 · 30° = 60°.'] },
          { problem: '∠AOB = 130°. Der Strahl OC liegt im Winkel und ∠AOC = 45°. Wie groß ist ∠COB?', solution: '85°', steps: ['∠AOB = ∠AOC + ∠COB.', '∠COB = 130° − 45° = 85°.'] },
          { problem: 'Wie viel Grad hat ein Drittel einer vollen Drehung?', solution: '120°', steps: ['Volle Drehung = 360°.', '360° : 3 = 120°.'] },
        ],
      },
    },

    // ───────── 4. Parallel and perpendicular lines
    {
      slug: 'g6-plane-geometry-parallel-perpendicular',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 8.5, yMin: -0.5, yMax: 4.5 },
        shapes: [
          { kind: 'line', through: [[0, 1], [8, 1]], color: 'primary', label: 'a' },
          { kind: 'line', through: [[0, 3.2], [8, 3.2]], color: 'primary', label: 'b' },
          { kind: 'line', through: [[5, 0], [5, 4]], color: 'secondary', label: 'c', labelSide: 'right' },
          { kind: 'angle', vertex: [5, 1], from: [7, 1], to: [5, 3], right: true, color: 'secondary' },
          { kind: 'angle', vertex: [5, 3.2], from: [7, 3.2], to: [5, 4.5], right: true, color: 'secondary' },
          { kind: 'label', at: [2, 2.1], text: 'a || b', color: 'primary' },
          { kind: 'label', at: [6.6, 2.1], text: 'c ⊥ a', color: 'secondary' },
        ],
        caption: alt('a dhe b nuk takohen kurrë (paralele); c i pret ato nën kënd të drejtë (pingule).', 'a and b never meet (parallel); c crosses them at right angles (perpendicular).', 'a und b schneiden sich nie (parallel); c schneidet sie im rechten Winkel (senkrecht).'),
        alt: alt('Dy drejtëza paralele a dhe b dhe një drejtëz c pingule me të dyja.', 'Two parallel lines a and b and a line c perpendicular to both.', 'Zwei parallele Geraden a und b und eine Gerade c, die auf beiden senkrecht steht.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: [[['2', 2]], [['4', 4]], 'text'],
      },
      al: {
        title: 'Drejtëzat paralele dhe pingule',
        objectives: ['Të dalloni drejtëzat paralele dhe pingule.', 'T\'i vizatoni me vizore dhe trekëndësh vizatimi.'],
        theory: 'Dy drejtëza në një rrafsh ose priten (kanë një pikë të përbashkët) ose nuk priten kurrë. Drejtëzat që nuk priten kurrë quhen paralele; shënohen a ∥ b. Largësia ndërmjet tyre është kudo e njëjtë, si te shinat e trenit.\n\nNëse dy drejtëza priten dhe formojnë kënd të drejtë (90°), ato quhen pingule; shënohen c ⊥ a. Në vizatim këndin e drejtë e shënojmë me një katror të vogël.\n\nNëse dy drejtëza janë të dyja pingule me të njëjtën drejtëz c, atëherë ato janë paralele ndërmjet tyre. Kështu vizatojmë paralele me trekëndësh: rrëshqasim trekëndëshin përgjatë një vizoreje.',
        keyPoints: ['a ∥ b: nuk priten kurrë, largësia mbetet e njëjtë.', 'c ⊥ a: priten nën kënd 90°.', 'Nëse a ⊥ c dhe b ⊥ c, atëherë a ∥ b.'],
        examples: [
          { example: 'Në drejtkëndëshin ABCD, cilat brinjë janë paralele dhe cilat pingule?', solution: 'AB ∥ CD dhe BC ∥ AD; brinjët fqinje janë pingule, p.sh. AB ⊥ BC.' },
          { example: 'Drejtëzat a dhe b janë pingule me drejtëzën c. Çfarë mund të themi për a dhe b?', solution: 'a ∥ b, sepse të dyja janë pingule me të njëjtën drejtëz.' },
        ],
        commonMistakes: [
          { mistake: 'Dy drejtëza që nuk takohen në vizatim quhen paralele, edhe pse do të takoheshin po t\'i zgjatnim.', fix: 'Paralele janë vetëm ato që mbeten në largësi të njëjtë kudo.' },
        ],
        practice: [
          { problem: 'Sa çifte brinjësh paralele ka katrori?', solution: '2 çifte', steps: ['Brinja e sipërme ∥ brinjës së poshtme.', 'Brinja e majtë ∥ brinjës së djathtë.'] },
          { problem: 'Një drejtkëndësh ka përmasa 6 cm dhe 4 cm. Sa është largësia ndërmjet dy brinjëve të gjata (paralele)?', solution: '4 cm', steps: ['Brinjët e gjata janë paralele.', 'Largësia ndërmjet tyre është brinja e shkurtër: 4 cm.'] },
          { problem: 'Përshkruani si vizatohet me vizore dhe trekëndësh një drejtëz paralele me a nëpër pikën P.', solution: 'Vendosni njërën brinjë të trekëndëshit mbi a, vizoren ngjitur me brinjën tjetër dhe rrëshqitni trekëndëshin deri te P; vizatoni.', steps: ['Trekëndëshi mbi drejtëzën a.', 'Vizorja e fiksuar ngjitur me trekëndëshin.', 'Rrëshqitje deri te P dhe vizatim.'] },
        ],
      },
      en: {
        title: 'Parallel and perpendicular lines',
        objectives: ['Recognise parallel and perpendicular lines.', 'Draw them with a ruler and set square.'],
        theory: 'Two lines in a plane either cross (they have one common point) or never meet. Lines that never meet are called parallel; we write a ∥ b. The distance between them is the same everywhere, like railway tracks.\n\nIf two lines cross at a right angle (90°), they are perpendicular; we write c ⊥ a. In a drawing we mark the right angle with a small square.\n\nIf two lines are both perpendicular to the same line c, they are parallel to each other. That is how we draw parallels with a set square: we slide it along a ruler.',
        keyPoints: ['a ∥ b: they never meet and stay the same distance apart.', 'c ⊥ a: they cross at 90°.', 'If a ⊥ c and b ⊥ c, then a ∥ b.'],
        examples: [
          { example: 'In rectangle ABCD, which sides are parallel and which are perpendicular?', solution: 'AB ∥ CD and BC ∥ AD; neighbouring sides are perpendicular, e.g. AB ⊥ BC.' },
          { example: 'Lines a and b are both perpendicular to line c. What can we say about a and b?', solution: 'a ∥ b, because both are perpendicular to the same line.' },
        ],
        commonMistakes: [
          { mistake: 'Calling two lines parallel because they do not meet in the drawing, although they would if extended.', fix: 'Only lines that stay the same distance apart everywhere are parallel.' },
        ],
        practice: [
          { problem: 'How many pairs of parallel sides does a square have?', solution: '2 pairs', steps: ['Top side ∥ bottom side.', 'Left side ∥ right side.'] },
          { problem: 'A rectangle measures 6 cm by 4 cm. How far apart are the two long (parallel) sides?', solution: '4 cm', steps: ['The long sides are parallel.', 'The distance between them is the short side: 4 cm.'] },
          { problem: 'Describe how to draw a line parallel to a through point P using a ruler and set square.', solution: 'Put one edge of the set square on a, hold the ruler against another edge and slide the set square to P; draw the line.', steps: ['Set square on line a.', 'Ruler held firmly against it.', 'Slide to P and draw.'] },
        ],
      },
      de: {
        title: 'Parallele und senkrechte Geraden',
        objectives: ['Parallele und senkrechte Geraden erkennen.', 'Sie mit Lineal und Geodreieck zeichnen.'],
        theory: 'Zwei Geraden in einer Ebene schneiden sich entweder (sie haben einen gemeinsamen Punkt) oder sie treffen sich nie. Geraden, die sich nie treffen, heißen parallel; man schreibt a ∥ b. Ihr Abstand ist überall gleich, wie bei Bahngleisen.\n\nSchneiden sich zwei Geraden im rechten Winkel (90°), stehen sie senkrecht aufeinander; man schreibt c ⊥ a. In der Zeichnung markiert man den rechten Winkel mit einem kleinen Quadrat oder Punkt.\n\nStehen zwei Geraden beide senkrecht auf derselben Geraden c, sind sie zueinander parallel. So zeichnet man Parallelen mit dem Geodreieck: Man verschiebt es entlang eines Lineals.',
        keyPoints: ['a ∥ b: schneiden sich nie, Abstand bleibt gleich.', 'c ⊥ a: schneiden sich unter 90°.', 'Wenn a ⊥ c und b ⊥ c, dann a ∥ b.'],
        examples: [
          { example: 'Welche Seiten des Rechtecks ABCD sind parallel, welche senkrecht?', solution: 'AB ∥ CD und BC ∥ AD; benachbarte Seiten stehen senkrecht, z. B. AB ⊥ BC.' },
          { example: 'Die Geraden a und b stehen beide senkrecht auf c. Was gilt für a und b?', solution: 'a ∥ b, weil beide auf derselben Geraden senkrecht stehen.' },
        ],
        commonMistakes: [
          { mistake: 'Zwei Geraden parallel nennen, weil sie sich in der Zeichnung nicht treffen, obwohl sie es verlängert täten.', fix: 'Parallel sind nur Geraden, deren Abstand überall gleich bleibt.' },
        ],
        practice: [
          { problem: 'Wie viele Paare paralleler Seiten hat ein Quadrat?', solution: '2 Paare', steps: ['Obere Seite ∥ untere Seite.', 'Linke Seite ∥ rechte Seite.'] },
          { problem: 'Ein Rechteck ist 6 cm lang und 4 cm breit. Welchen Abstand haben die beiden langen (parallelen) Seiten?', solution: '4 cm', steps: ['Die langen Seiten sind parallel.', 'Ihr Abstand ist die kurze Seite: 4 cm.'] },
          { problem: 'Beschreiben Sie, wie man mit Lineal und Geodreieck eine Parallele zu a durch den Punkt P zeichnet.', solution: 'Geodreieck mit einer Kante an a legen, Lineal fest an eine andere Kante halten und das Geodreieck bis P verschieben; Linie zeichnen.', steps: ['Geodreieck an die Gerade a.', 'Lineal fest anlegen.', 'Bis P verschieben und zeichnen.'] },
        ],
      },
    },

    // ───────── 5. Perpendicular bisector
    {
      slug: 'g6-plane-geometry-perpendicular-bisector',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.8, xMax: 6.8, yMin: -2.2, yMax: 4.2 },
        shapes: [
          { kind: 'segment', from: [0, 0], to: [6, 0], color: 'primary' },
          { kind: 'line', through: [[3, -2], [3, 4]], color: 'secondary', dashed: true, label: 's', labelSide: 'right' },
          { kind: 'angle', vertex: [3, 0], from: [6, 0], to: [3, 3], right: true, color: 'secondary' },
          { kind: 'segment', from: [0, 0], to: [3, 3], color: 'success', dashed: true },
          { kind: 'segment', from: [6, 0], to: [3, 3], color: 'success', dashed: true },
          { kind: 'segment', from: [0, 0], to: [3, 0], ticks: 1, color: 'primary' },
          { kind: 'segment', from: [3, 0], to: [6, 0], ticks: 1, color: 'primary' },
          { kind: 'point', at: [0, 0], label: 'A', labelPos: 'sw', color: 'primary' },
          { kind: 'point', at: [6, 0], label: 'B', labelPos: 'se', color: 'primary' },
          { kind: 'point', at: [3, 0], label: 'M', labelPos: 'sw', color: 'secondary' },
          { kind: 'point', at: [3, 3], label: 'P', labelPos: 'ne', color: 'success' },
        ],
        caption: alt('Simetralja s kalon nëpër mesin M dhe është pingule me AB; PA = PB.', 'The perpendicular bisector s passes through M and is perpendicular to AB; PA = PB.', 'Die Mittelsenkrechte s geht durch M und steht senkrecht auf AB; PA = PB.'),
        alt: alt('Segmenti AB me mesin M, simetralja s pingule nëpër M dhe një pikë P në të, e barabartë larg nga A dhe B.', 'Segment AB with midpoint M, the perpendicular bisector s through M, and a point P on it equally far from A and B.', 'Strecke AB mit Mittelpunkt M, Mittelsenkrechte s durch M und ein Punkt P darauf, gleich weit von A und B entfernt.'),
      }],
      answers: {
        examples: [[['6 / 2', 3]], [['5', 5]]],
        practice: ['text', [['10 / 2', 5]], [['7.5', 7.5]]],
      },
      al: {
        title: 'Simetralja e segmentit',
        objectives: ['Të shpjegoni çfarë është simetralja e segmentit.', 'Ta ndërtoni me vizore dhe kompas dhe të përdorni vetinë e saj.'],
        theory: 'Simetralja e segmentit AB është drejtëza që kalon nëpër mesin M të segmentit dhe është pingule me të.\n\nVetia kryesore: çdo pikë P e simetrales është njësoj larg nga A dhe nga B (PA = PB). Edhe anasjelltas: çdo pikë që është njësoj larg nga A dhe B shtrihet në simetrale.\n\nNdërtimi me kompas: hapni kompasin më shumë se gjysma e AB; vizatoni harqe me qendër A, lart dhe poshtë segmentit; me të njëjtën hapje vizatoni harqe me qendër B. Dy pikat ku priten harqet i bashkoni me vizore: kjo është simetralja.',
        keyPoints: ['Simetralja kalon nëpër mesin dhe është pingule me segmentin.', 'Çdo pikë e saj: PA = PB.', 'Ndërtim: harqe të barabarta nga A dhe B, bashkoni pikat e prerjes.'],
        examples: [
          { example: 'AB = 6 cm. Në çfarë largësie nga A e pret simetralja segmentin?', solution: 'Në mes: 6 : 2 = 3 cm nga A.' },
          { example: 'Pika P është në simetralen e AB dhe PA = 5 cm. Sa është PB?', solution: 'Pikat e simetrales janë njësoj larg nga A dhe B: PB = 5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Kompasi hapet më pak se gjysma e AB dhe harqet nuk priten.', fix: 'Hapja duhet të jetë më e madhe se gjysma e segmentit.' },
          { mistake: 'Hapja e kompasit ndryshohet ndërmjet harqeve nga A dhe nga B.', fix: 'Përdorni të njëjtën hapje për të dyja skajet.' },
        ],
        practice: [
          { problem: 'Shkruani hapat për ndërtimin e simetrales së një segmenti 6 cm.', solution: 'Harqe me rreze më të madhe se 3 cm nga A dhe B, mbi dhe nën segment; bashkoni dy pikat e prerjes.', steps: ['Vizatoni AB = 6 cm.', 'Hapni kompasin p.sh. 4 cm; harqe nga A.', 'Me të njëjtën hapje harqe nga B.', 'Bashkoni pikat e prerjes.'] },
          { problem: 'AB = 10 cm. Sa larg nga A e pret simetralja segmentin AB?', solution: '5 cm', steps: ['Simetralja kalon nëpër mes.', '10 : 2 = 5 cm.'] },
          { problem: 'Pika P shtrihet në simetralen e AB dhe PA = 7,5 cm. Sa është PB?', solution: '7,5 cm', steps: ['Pikat e simetrales janë njësoj larg nga skajet.', 'PB = PA = 7,5 cm.'] },
        ],
      },
      en: {
        title: 'The perpendicular bisector',
        objectives: ['Explain what the perpendicular bisector of a segment is.', 'Construct it with ruler and compasses and use its property.'],
        theory: 'The perpendicular bisector of segment AB is the line that passes through the midpoint M of the segment and is perpendicular to it.\n\nKey property: every point P on the perpendicular bisector is equally far from A and from B (PA = PB). The other way round as well: every point equally far from A and B lies on the perpendicular bisector.\n\nConstruction with compasses: open the compasses wider than half of AB; draw arcs centred at A, above and below the segment; with the same opening draw arcs centred at B. Join the two points where the arcs cross with a ruler: that is the perpendicular bisector.',
        keyPoints: ['It passes through the midpoint and is perpendicular to the segment.', 'Every point on it: PA = PB.', 'Construction: equal arcs from A and B, join the crossing points.'],
        examples: [
          { example: 'AB = 6 cm. How far from A does the perpendicular bisector cross the segment?', solution: 'In the middle: 6 ÷ 2 = 3 cm from A.' },
          { example: 'Point P is on the perpendicular bisector of AB and PA = 5 cm. How long is PB?', solution: 'Points on the bisector are equally far from A and B: PB = 5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Opening the compasses less than half of AB, so the arcs do not cross.', fix: 'The opening must be more than half the segment.' },
          { mistake: 'Changing the compass opening between the arcs from A and from B.', fix: 'Use the same opening for both endpoints.' },
        ],
        practice: [
          { problem: 'Write the steps to construct the perpendicular bisector of a 6 cm segment.', solution: 'Arcs with radius more than 3 cm from A and from B, above and below the segment; join the two crossing points.', steps: ['Draw AB = 6 cm.', 'Open the compasses to e.g. 4 cm; arcs from A.', 'Same opening, arcs from B.', 'Join the crossing points.'] },
          { problem: 'AB = 10 cm. How far from A does the perpendicular bisector cross AB?', solution: '5 cm', steps: ['The bisector passes through the midpoint.', '10 ÷ 2 = 5 cm.'] },
          { problem: 'Point P lies on the perpendicular bisector of AB and PA = 7.5 cm. How long is PB?', solution: '7.5 cm', steps: ['Points on the bisector are equally far from the endpoints.', 'PB = PA = 7.5 cm.'] },
        ],
      },
      de: {
        title: 'Die Mittelsenkrechte',
        objectives: ['Erklären, was die Mittelsenkrechte einer Strecke ist.', 'Sie mit Zirkel und Lineal konstruieren und ihre Eigenschaft nutzen.'],
        theory: 'Die Mittelsenkrechte der Strecke AB ist die Gerade, die durch den Mittelpunkt M der Strecke geht und senkrecht auf ihr steht.\n\nWichtigste Eigenschaft: Jeder Punkt P der Mittelsenkrechten ist von A und B gleich weit entfernt (PA = PB). Auch umgekehrt: Jeder Punkt, der von A und B gleich weit entfernt ist, liegt auf der Mittelsenkrechten.\n\nKonstruktion mit dem Zirkel: Den Zirkel weiter als die halbe Strecke AB öffnen; um A Kreisbögen oberhalb und unterhalb der Strecke zeichnen; mit derselben Öffnung Bögen um B zeichnen. Die beiden Schnittpunkte der Bögen mit dem Lineal verbinden: Das ist die Mittelsenkrechte.',
        keyPoints: ['Sie geht durch den Mittelpunkt und steht senkrecht auf der Strecke.', 'Jeder Punkt auf ihr: PA = PB.', 'Konstruktion: gleiche Bögen um A und B, Schnittpunkte verbinden.'],
        examples: [
          { example: 'AB = 6 cm. In welchem Abstand von A schneidet die Mittelsenkrechte die Strecke?', solution: 'In der Mitte: 6 : 2 = 3 cm von A.' },
          { example: 'P liegt auf der Mittelsenkrechten von AB und PA = 5 cm. Wie lang ist PB?', solution: 'Punkte der Mittelsenkrechten sind von A und B gleich weit entfernt: PB = 5 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Den Zirkel weniger als die halbe Strecke öffnen, sodass sich die Bögen nicht schneiden.', fix: 'Die Öffnung muss größer als die halbe Strecke sein.' },
          { mistake: 'Die Zirkelöffnung zwischen den Bögen um A und um B ändern.', fix: 'Für beide Endpunkte dieselbe Öffnung verwenden.' },
        ],
        practice: [
          { problem: 'Schreiben Sie die Schritte zur Konstruktion der Mittelsenkrechten einer 6 cm langen Strecke auf.', solution: 'Bögen mit Radius größer als 3 cm um A und um B, ober- und unterhalb der Strecke; die beiden Schnittpunkte verbinden.', steps: ['AB = 6 cm zeichnen.', 'Zirkel z. B. auf 4 cm öffnen; Bögen um A.', 'Gleiche Öffnung, Bögen um B.', 'Schnittpunkte verbinden.'] },
          { problem: 'AB = 10 cm. In welchem Abstand von A schneidet die Mittelsenkrechte AB?', solution: '5 cm', steps: ['Die Mittelsenkrechte geht durch den Mittelpunkt.', '10 : 2 = 5 cm.'] },
          { problem: 'P liegt auf der Mittelsenkrechten von AB und PA = 7,5 cm. Wie lang ist PB?', solution: '7,5 cm', steps: ['Punkte der Mittelsenkrechten sind von den Endpunkten gleich weit entfernt.', 'PB = PA = 7,5 cm.'] },
        ],
      },
    },

    // ───────── 6. Types of angles
    {
      slug: 'g6-plane-geometry-angle-types',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 14.6, yMin: -1.6, yMax: 7.6 },
        shapes: [
          { kind: 'angle', vertex: [0, 4], from: [3, 4], to: arm([0, 4], 35), label: '35°', color: 'success' },
          { kind: 'segment', from: [0, 4], to: [3, 4], color: 'success' }, { kind: 'segment', from: [0, 4], to: arm([0, 4], 35), color: 'success' },
          { kind: 'label', at: [1.5, 3.2], text: alt('i ngushtë', 'acute', 'spitz'), size: 11 },
          { kind: 'angle', vertex: [7, 4], from: [10, 4], to: [7, 7], right: true, color: 'primary' },
          { kind: 'segment', from: [7, 4], to: [10, 4], color: 'primary' }, { kind: 'segment', from: [7, 4], to: [7, 7], color: 'primary' },
          { kind: 'label', at: [8.6, 3.2], text: alt('i drejtë 90°', 'right 90°', 'recht 90°'), size: 11 },
          { kind: 'angle', vertex: [3.5, 0], from: [6.5, 0], to: arm([3.5, 0], 140), label: '140°', color: 'secondary' },
          { kind: 'segment', from: [3.5, 0], to: [6.5, 0], color: 'secondary' }, { kind: 'segment', from: [3.5, 0], to: arm([3.5, 0], 140), color: 'secondary' },
          { kind: 'label', at: [4.6, -0.9], text: alt('i gjerë', 'obtuse', 'stumpf'), size: 11 },
          { kind: 'angle', vertex: [11, 0], from: [8, 0], to: [14, 0], label: '180°', color: 'purple' },
          { kind: 'segment', from: [8, 0], to: [14, 0], color: 'purple' },
          { kind: 'label', at: [11, -0.9], text: alt('i shtrirë', 'straight', 'gestreckt'), size: 11 },
        ],
        caption: alt('I ngushtë < 90° · i drejtë = 90° · i gjerë ndërmjet 90° dhe 180° · i shtrirë = 180°', 'Acute < 90° · right = 90° · obtuse between 90° and 180° · straight = 180°', 'Spitz < 90° · recht = 90° · stumpf zwischen 90° und 180° · gestreckt = 180°'),
        alt: alt('Katër kënde: i ngushtë 35°, i drejtë 90°, i gjerë 140°, i shtrirë 180°.', 'Four angles: acute 35°, right 90°, obtuse 140°, straight 180°.', 'Vier Winkel: spitz 35°, recht 90°, stumpf 140°, gestreckt 180°.'),
      }],
      answers: {
        examples: ['text', [['180 - 65', 115]]],
        practice: ['text', [['180 - 48', 132]], [['90 - 35', 55]]],
      },
      al: {
        title: 'Llojet e këndeve',
        objectives: ['Të klasifikoni këndet sipas masës së tyre.', 'Të gjeni një kënd që mungon pranë një këndi të drejtë ose të shtrirë.'],
        theory: 'Sipas masës, këndet ndahen kështu: këndi i ngushtë është më i vogël se 90°; këndi i drejtë është saktësisht 90°; këndi i gjerë është ndërmjet 90° dhe 180°; këndi i shtrirë është saktësisht 180° (krahët formojnë një drejtëz); këndi i plotë është 360°.\n\nKur dy kënde fqinje së bashku formojnë një kënd të shtrirë, shuma e tyre është 180°. Kur së bashku formojnë një kënd të drejtë, shuma e tyre është 90°.\n\nKështu, nëse njohim njërin kënd, tjetrin e gjejmë me zbritje nga 180° ose nga 90°.',
        keyPoints: ['I ngushtë < 90° · i drejtë = 90° · i gjerë 90°–180° · i shtrirë = 180° · i plotë = 360°.', 'Dy kënde që formojnë kënd të shtrirë: shuma 180°.', 'Dy kënde që formojnë kënd të drejtë: shuma 90°.'],
        examples: [
          { example: 'Klasifikoni këndet: 35°, 90°, 140°, 180°.', solution: '35° i ngushtë, 90° i drejtë, 140° i gjerë, 180° i shtrirë.' },
          { example: 'Dy kënde fqinje formojnë një kënd të shtrirë. Njëri është 65°. Sa është tjetri?', solution: '180° − 65° = 115° (kënd i gjerë).' },
        ],
        commonMistakes: [
          { mistake: 'Këndi 90° quhet "i ngushtë" ose 180° "i gjerë".', fix: '90° dhe 180° kanë emrat e tyre: i drejtë dhe i shtrirë.' },
        ],
        practice: [
          { problem: 'Çfarë lloji janë këndet 89° dhe 91°?', solution: '89° i ngushtë, 91° i gjerë.', steps: ['89° < 90° → i ngushtë.', '90° < 91° < 180° → i gjerë.'] },
          { problem: 'Dy kënde fqinje formojnë kënd të shtrirë; njëri është 48°. Sa është tjetri dhe çfarë lloji është?', solution: '132°, kënd i gjerë', steps: ['180° − 48° = 132°.', '132° është ndërmjet 90° dhe 180°.'] },
          { problem: 'Një kënd i drejtë ndahet në dy pjesë; njëra është 35°. Sa është tjetra?', solution: '55°', steps: ['Shuma është 90°.', '90° − 35° = 55°.'] },
        ],
      },
      en: {
        title: 'Types of angles',
        objectives: ['Classify angles by their size.', 'Find a missing angle next to a right or straight angle.'],
        theory: 'By size, angles are classified like this: an acute angle is less than 90°; a right angle is exactly 90°; an obtuse angle is between 90° and 180°; a straight angle is exactly 180° (its arms form a line); a full angle is 360°.\n\nWhen two neighbouring angles together form a straight angle, they add up to 180°. When together they form a right angle, they add up to 90°.\n\nSo if we know one of the angles, we find the other by subtracting from 180° or from 90°.',
        keyPoints: ['Acute < 90° · right = 90° · obtuse 90°–180° · straight = 180° · full = 360°.', 'Two angles forming a straight angle: sum 180°.', 'Two angles forming a right angle: sum 90°.'],
        examples: [
          { example: 'Classify the angles: 35°, 90°, 140°, 180°.', solution: '35° acute, 90° right, 140° obtuse, 180° straight.' },
          { example: 'Two neighbouring angles form a straight angle. One is 65°. What is the other?', solution: '180° − 65° = 115° (an obtuse angle).' },
        ],
        commonMistakes: [
          { mistake: 'Calling 90° "acute" or 180° "obtuse".', fix: '90° and 180° have their own names: right and straight.' },
        ],
        practice: [
          { problem: 'What type are the angles 89° and 91°?', solution: '89° acute, 91° obtuse.', steps: ['89° < 90° → acute.', '90° < 91° < 180° → obtuse.'] },
          { problem: 'Two neighbouring angles form a straight angle; one is 48°. What is the other and what type is it?', solution: '132°, an obtuse angle', steps: ['180° − 48° = 132°.', '132° is between 90° and 180°.'] },
          { problem: 'A right angle is split into two parts; one is 35°. What is the other?', solution: '55°', steps: ['They add up to 90°.', '90° − 35° = 55°.'] },
        ],
      },
      de: {
        title: 'Winkelarten',
        objectives: ['Winkel nach ihrer Größe einteilen.', 'Einen fehlenden Winkel neben einem rechten oder gestreckten Winkel bestimmen.'],
        theory: 'Nach ihrer Größe teilt man Winkel so ein: Ein spitzer Winkel ist kleiner als 90°; ein rechter Winkel ist genau 90°; ein stumpfer Winkel liegt zwischen 90° und 180°; ein gestreckter Winkel ist genau 180° (die Schenkel bilden eine Gerade); ein Vollwinkel hat 360°.\n\nBilden zwei benachbarte Winkel zusammen einen gestreckten Winkel, ist ihre Summe 180°. Bilden sie zusammen einen rechten Winkel, ist ihre Summe 90°.\n\nKennt man einen der Winkel, findet man den anderen also durch Subtraktion von 180° oder von 90°.',
        keyPoints: ['Spitz < 90° · recht = 90° · stumpf 90°–180° · gestreckt = 180° · voll = 360°.', 'Zwei Winkel, die einen gestreckten Winkel bilden: Summe 180°.', 'Zwei Winkel, die einen rechten Winkel bilden: Summe 90°.'],
        examples: [
          { example: 'Bestimmen Sie die Winkelart: 35°, 90°, 140°, 180°.', solution: '35° spitz, 90° recht, 140° stumpf, 180° gestreckt.' },
          { example: 'Zwei benachbarte Winkel bilden einen gestreckten Winkel. Einer ist 65°. Wie groß ist der andere?', solution: '180° − 65° = 115° (ein stumpfer Winkel).' },
        ],
        commonMistakes: [
          { mistake: '90° „spitz“ oder 180° „stumpf“ nennen.', fix: '90° und 180° haben eigene Namen: recht und gestreckt.' },
        ],
        practice: [
          { problem: 'Welche Art haben die Winkel 89° und 91°?', solution: '89° spitz, 91° stumpf.', steps: ['89° < 90° → spitz.', '90° < 91° < 180° → stumpf.'] },
          { problem: 'Zwei benachbarte Winkel bilden einen gestreckten Winkel; einer ist 48°. Wie groß ist der andere, und welche Art hat er?', solution: '132°, ein stumpfer Winkel', steps: ['180° − 48° = 132°.', '132° liegt zwischen 90° und 180°.'] },
          { problem: 'Ein rechter Winkel wird in zwei Teile geteilt; einer ist 35°. Wie groß ist der andere?', solution: '55°', steps: ['Die Summe ist 90°.', '90° − 35° = 55°.'] },
        ],
      },
    },
  ],
};
