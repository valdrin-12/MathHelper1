// Grade 8 · Theme 6: Solid geometry (10 hours)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g8-solid-geometry',
  i18n: {
    al: { title: 'Gjeometria në hapësirë', description: 'Pozitat e drejtëzave dhe planeve, kubi dhe kuboidi me diagonalet, sipërfaqet e prizmit dhe piramidës.' },
    en: { title: 'Solid geometry', description: 'Positions of lines and planes, the cube and cuboid with their diagonals, surface areas of prisms and pyramids.' },
    de: { title: 'Raumgeometrie', description: 'Lage von Geraden und Ebenen, Würfel und Quader mit Diagonalen, Oberflächen von Prisma und Pyramide.' },
  },
  lessons: [
    // ───────── 1. Lines and planes
    {
      slug: 'g8-solid-geometry-lines-planes',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 5.6, yMin: -0.7, yMax: 5 }, height: 220,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [3.5, 0], [3.5, 3.5], [0, 3.5]], color: 'ink' },
          { kind: 'segment', from: [3.5, 0], to: [5, 1.2], color: 'ink' },
          { kind: 'segment', from: [3.5, 3.5], to: [5, 4.7], color: 'ink' },
          { kind: 'segment', from: [0, 3.5], to: [1.5, 4.7], color: 'ink' },
          { kind: 'segment', from: [1.5, 4.7], to: [5, 4.7], color: 'ink' },
          { kind: 'segment', from: [5, 1.2], to: [5, 4.7], color: 'ink' },
          { kind: 'segment', from: [0, 0], to: [1.5, 1.2], color: 'muted', dashed: true },
          { kind: 'segment', from: [1.5, 1.2], to: [5, 1.2], color: 'muted', dashed: true },
          { kind: 'segment', from: [1.5, 1.2], to: [1.5, 4.7], color: 'muted', dashed: true },
          { kind: 'segment', from: [0, 0], to: [3.5, 0], color: 'primary' },
          { kind: 'segment', from: [5, 1.2], to: [5, 4.7], color: 'secondary' },
          { kind: 'label', at: [-0.3, -0.35], text: 'A' }, { kind: 'label', at: [3.6, -0.4], text: 'B' },
          { kind: 'label', at: [5.35, 1.1], text: 'C' }, { kind: 'label', at: [5.35, 4.8], text: 'G' },
        ],
        caption: alt('Në kub, brinjët AB (blu) dhe CG (portokalli) nuk priten dhe nuk janë paralele: janë drejtëza të kryqëzuara.', 'In the cube, the edges AB (blue) and CG (orange) do not meet and are not parallel: they are skew lines.', 'Im Würfel schneiden sich die Kanten AB (blau) und CG (orange) nicht und sind nicht parallel: Sie sind windschief.'),
        alt: alt('Kub me brinjët e fshehura me vija të ndërprera; brinja AB dhe brinja CG të theksuara.', 'A cube with hidden edges dashed; edge AB and edge CG highlighted.', 'Ein Würfel mit gestrichelten verdeckten Kanten; Kante AB und Kante CG hervorgehoben.'),
      }],
      answers: {
        examples: [[['3', 3], ['4', 4]], 'text'],
        practice: [[['1', 1]], 'text', [['4', 4]]],
      },
      al: {
        title: 'Pozitat e drejtëzave dhe planeve',
        objectives: ['Të dalloni drejtëzat që priten, paralele dhe të kryqëzuara në hapësirë.', 'Të përshkruani pozitat e drejtëzës ndaj planit dhe të dy planeve.'],
        theory: 'Në hapësirë dy drejtëza mund të priten (një pikë e përbashkët), të jenë paralele (në një plan, pa pikë të përbashkët) ose të kryqëzuara: nuk priten dhe nuk janë në të njëjtin plan.\n\nDrejtëza dhe plani: drejtëza shtrihet në plan, e pret planin në një pikë, ose është paralele me të. Drejtëza është pingule me planin kur është pingule me çdo drejtëz të planit që kalon nëpër pikën e prerjes (p.sh. brinja vertikale e kubit ndaj bazës).\n\nDy plane ose janë paralele, ose priten sipas një drejtëze. Një plan përcaktohet nga tri pika që nuk shtrihen në një drejtëz.',
        keyPoints: ['Dy drejtëza: priten, paralele ose të kryqëzuara', 'Drejtëz–plan: në plan, e pret, paralele', 'Dy plane: paralele ose priten sipas një drejtëze'],
        examples: [
          { example: 'Në kubin ABCDEFGH, sa brinjë janë paralele me AB dhe sa janë të kryqëzuara me të?', solution: 'Paralele: 3 (DC, EF, HG). Të kryqëzuara: 4 (CG, DH, EH, FG).' },
          { example: 'Si mund të jenë dy plane të ndryshme në hapësirë?', solution: 'Paralele (pa pikë të përbashkët) ose që priten sipas një drejtëze.' },
        ],
        commonMistakes: [
          { mistake: 'Dy drejtëza që nuk priten janë patjetër paralele.', fix: 'Në hapësirë mund të jenë të kryqëzuara: as priten, as nuk janë në një plan.' },
          { mistake: 'Dy plane mund të priten në një pikë.', fix: 'Dy plane që priten kanë një drejtëz të tërë të përbashkët.' },
        ],
        practice: [
          { problem: 'Sa plane kalojnë nëpër tri pika që nuk janë në një drejtëz?', solution: '1', steps: ['Tri pika jo në një drejtëz përcaktojnë një plan.', 'Saktësisht një.'] },
          { problem: 'Në kub, çfarë është prerja e planit të bazës me planin e një faqeje anësore?', solution: 'Një brinjë e bazës (drejtëz)', steps: ['Dy plane që priten kanë një drejtëz të përbashkët.', 'Këtu ajo është brinja e përbashkët.'] },
          { problem: 'Sa brinjë të kubit janë pingule me planin e bazës?', solution: '4', steps: ['Brinjët vertikale.', 'Janë 4.'] },
        ],
      },
      en: {
        title: 'Lines and planes in space',
        objectives: ['Tell intersecting, parallel and skew lines apart in space.', 'Describe how a line lies relative to a plane, and two planes to each other.'],
        theory: 'In space two lines can intersect (one common point), be parallel (in one plane, no common point) or be skew: they do not meet and do not lie in the same plane.\n\nA line and a plane: the line lies in the plane, meets it at one point, or is parallel to it. A line is perpendicular to a plane when it is perpendicular to every line of the plane through the meeting point (e.g. a vertical edge of a cube and the base).\n\nTwo planes are either parallel or meet in a line. A plane is fixed by three points that are not on one line.',
        keyPoints: ['Two lines: intersecting, parallel or skew', 'Line–plane: in it, meets it, parallel', 'Two planes: parallel or meet in a line'],
        examples: [
          { example: 'In the cube ABCDEFGH, how many edges are parallel to AB and how many are skew to it?', solution: 'Parallel: 3 (DC, EF, HG). Skew: 4 (CG, DH, EH, FG).' },
          { example: 'How can two different planes lie in space?', solution: 'Parallel (no common point) or meeting in a line.' },
        ],
        commonMistakes: [
          { mistake: 'Two lines that do not meet must be parallel.', fix: 'In space they can be skew: they neither meet nor lie in one plane.' },
          { mistake: 'Two planes can meet in a single point.', fix: 'Two planes that meet share a whole line.' },
        ],
        practice: [
          { problem: 'How many planes pass through three points that are not on one line?', solution: '1', steps: ['Three points not on one line fix a plane.', 'Exactly one.'] },
          { problem: 'In a cube, what is the intersection of the base plane and the plane of a side face?', solution: 'An edge of the base (a line)', steps: ['Two meeting planes share a line.', 'Here it is the common edge.'] },
          { problem: 'How many edges of a cube are perpendicular to the base plane?', solution: '4', steps: ['The vertical edges.', 'There are 4.'] },
        ],
      },
      de: {
        title: 'Lage von Geraden und Ebenen',
        objectives: ['Sich schneidende, parallele und windschiefe Geraden im Raum unterscheiden.', 'Die Lage einer Geraden zu einer Ebene und zweier Ebenen zueinander beschreiben.'],
        theory: 'Im Raum können sich zwei Geraden schneiden (ein gemeinsamer Punkt), parallel sein (in einer Ebene, kein gemeinsamer Punkt) oder windschief sein: Sie schneiden sich nicht und liegen nicht in einer Ebene.\n\nGerade und Ebene: Die Gerade liegt in der Ebene, schneidet sie in einem Punkt oder ist parallel zu ihr. Eine Gerade steht senkrecht auf einer Ebene, wenn sie auf jeder Geraden der Ebene durch den Schnittpunkt senkrecht steht (z. B. eine senkrechte Würfelkante zur Grundfläche).\n\nZwei Ebenen sind entweder parallel oder schneiden sich in einer Geraden. Eine Ebene ist durch drei Punkte festgelegt, die nicht auf einer Geraden liegen.',
        keyPoints: ['Zwei Geraden: schneidend, parallel oder windschief', 'Gerade–Ebene: liegt darin, schneidet, parallel', 'Zwei Ebenen: parallel oder Schnittgerade'],
        examples: [
          { example: 'Wie viele Kanten des Würfels ABCDEFGH sind parallel zu AB und wie viele windschief zu AB?', solution: 'Parallel: 3 (DC, EF, HG). Windschief: 4 (CG, DH, EH, FG).' },
          { example: 'Welche Lagen können zwei verschiedene Ebenen haben?', solution: 'Parallel (kein gemeinsamer Punkt) oder sie schneiden sich in einer Geraden.' },
        ],
        commonMistakes: [
          { mistake: 'Zwei Geraden, die sich nicht schneiden, sind parallel.', fix: 'Im Raum können sie windschief sein: kein Schnittpunkt und keine gemeinsame Ebene.' },
          { mistake: 'Zwei Ebenen können sich in einem Punkt schneiden.', fix: 'Zwei sich schneidende Ebenen haben eine ganze Gerade gemeinsam.' },
        ],
        practice: [
          { problem: 'Wie viele Ebenen gehen durch drei Punkte, die nicht auf einer Geraden liegen?', solution: '1', steps: ['Drei solche Punkte legen eine Ebene fest.', 'Genau eine.'] },
          { problem: 'Was ist im Würfel der Schnitt der Grundflächenebene mit der Ebene einer Seitenfläche?', solution: 'Eine Grundkante (eine Gerade)', steps: ['Zwei sich schneidende Ebenen haben eine Gerade gemeinsam.', 'Hier ist es die gemeinsame Kante.'] },
          { problem: 'Wie viele Kanten eines Würfels stehen senkrecht auf der Grundfläche?', solution: '4', steps: ['Die senkrechten Kanten.', 'Es sind 4.'] },
        ],
      },
    },

    // ───────── 2. Cube and cuboid
    {
      slug: 'g8-solid-geometry-cube-cuboid',
      visuals: [{
        type: 'solid', kind: 'cuboid', a: 5, b: 4, c: 3, labels: { a: '5 cm', b: '4 cm', c: '3 cm' },
        caption: alt('Kuboidi 5 × 4 × 3: S = 2(20 + 12 + 15) = 94 cm², V = 60 cm³, diagonalja d = √(25 + 16 + 9) = √50 ≈ 7,07 cm.', 'Cuboid 5 × 4 × 3: S = 2(20 + 12 + 15) = 94 cm², V = 60 cm³, diagonal d = √(25 + 16 + 9) = √50 ≈ 7.07 cm.', 'Quader 5 × 4 × 3: O = 2(20 + 12 + 15) = 94 cm², V = 60 cm³, Raumdiagonale d = √(25 + 16 + 9) = √50 ≈ 7,07 cm.'),
        alt: alt('Kuboid me përmasa 5 cm, 4 cm dhe 3 cm.', 'A cuboid measuring 5 cm, 4 cm and 3 cm.', 'Ein Quader mit 5 cm, 4 cm und 3 cm.'),
      }],
      answers: {
        examples: [[['2 * (5*4 + 4*3 + 5*3)', 94], ['5 * 4 * 3', 60]], [['2 * sqrt(3)', 3.46, 0.005, '3.46']]],
        practice: [[['sqrt(3^2 + 4^2 + 12^2)', 13]], [['sqrt(150 / 6)', 5]], [['60 / (5 * 4)', 3]]],
      },
      al: {
        title: 'Kubi dhe kuboidi',
        objectives: ['Të njehsoni sipërfaqen, vëllimin dhe diagonalet e kuboidit.', 'Të gjeni një përmasë të panjohur nga sipërfaqja ose vëllimi.'],
        theory: 'Kuboidi a × b × c ka 6 faqe drejtkëndëshe, 12 brinjë dhe 8 kulme. Sipërfaqja: S = 2(ab + bc + ac); vëllimi: V = abc. Kubi me brinjë a: S = 6a², V = a³.\n\nDiagonalja e faqes del nga Pitagora në rrafsh: √(a² + b²). Diagonalja e trupit (nga një kulm te kulmi përballë) del duke e zbatuar Pitagorën dy herë: d = √(a² + b² + c²). Për kubin: d = a√3.\n\nShembull: kubi me brinjë 2 cm ka diagonale trupi 2√3 ≈ 3,46 cm.',
        keyPoints: ['S = 2(ab + bc + ac);  V = abc', 'Diagonalja: d = √(a² + b² + c²)', 'Kubi: S = 6a², V = a³, d = a√3'],
        examples: [
          { example: 'Gjeni sipërfaqen dhe vëllimin e kuboidit 5 × 4 × 3 cm.', solution: 'S = 2(20 + 12 + 15) = 94 cm²; V = 60 cm³.' },
          { example: 'Gjeni diagonalen e kubit me brinjë 2 cm.', solution: 'd = 2√3 ≈ 3,46 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Diagonalja e kuboidit = √(a² + b²).', fix: 'Kjo është diagonalja e faqes; diagonalja e trupit përfshin edhe c².' },
          { mistake: 'Kubi me S = 150 ka brinjë 25.', fix: '150 : 6 = 25 është a²; brinja a = 5.' },
        ],
        practice: [
          { problem: 'Gjeni diagonalen e kuboidit 3 × 4 × 12 cm.', solution: '13 cm', steps: ['d² = 9 + 16 + 144 = 169.', 'd = 13 cm.'] },
          { problem: 'Kubi ka sipërfaqe 150 cm². Sa është brinja?', solution: '5 cm', steps: ['6a² = 150 → a² = 25.', 'a = 5 cm.'] },
          { problem: 'Kuboidi ka vëllim 60 cm³ dhe bazë 5 × 4 cm. Sa është lartësia?', solution: '3 cm', steps: ['c = V : (a · b).', '60 : 20 = 3 cm.'] },
        ],
      },
      en: {
        title: 'Cube and cuboid',
        objectives: ['Work out the surface area, volume and diagonals of a cuboid.', 'Find an unknown dimension from the surface area or the volume.'],
        theory: 'An a × b × c cuboid has 6 rectangular faces, 12 edges and 8 vertices. Surface area: S = 2(ab + bc + ac); volume: V = abc. A cube with edge a: S = 6a², V = a³.\n\nA face diagonal comes from Pythagoras in the plane: √(a² + b²). The space diagonal (from a vertex to the opposite vertex) comes from using Pythagoras twice: d = √(a² + b² + c²). For a cube: d = a√3.\n\nExample: a cube with edge 2 cm has a space diagonal of 2√3 ≈ 3.46 cm.',
        keyPoints: ['S = 2(ab + bc + ac);  V = abc', 'Space diagonal: d = √(a² + b² + c²)', 'Cube: S = 6a², V = a³, d = a√3'],
        examples: [
          { example: 'Find the surface area and volume of a 5 × 4 × 3 cm cuboid.', solution: 'S = 2(20 + 12 + 15) = 94 cm²; V = 60 cm³.' },
          { example: 'Find the space diagonal of a cube with edge 2 cm.', solution: 'd = 2√3 ≈ 3.46 cm.' },
        ],
        commonMistakes: [
          { mistake: 'The cuboid diagonal = √(a² + b²).', fix: 'That is a face diagonal; the space diagonal includes c² too.' },
          { mistake: 'A cube with S = 150 has edge 25.', fix: '150 ÷ 6 = 25 is a²; the edge a = 5.' },
        ],
        practice: [
          { problem: 'Find the space diagonal of a 3 × 4 × 12 cm cuboid.', solution: '13 cm', steps: ['d² = 9 + 16 + 144 = 169.', 'd = 13 cm.'] },
          { problem: 'A cube has a surface area of 150 cm². How long is an edge?', solution: '5 cm', steps: ['6a² = 150 → a² = 25.', 'a = 5 cm.'] },
          { problem: 'A cuboid has volume 60 cm³ and a 5 × 4 cm base. What is its height?', solution: '3 cm', steps: ['c = V ÷ (a · b).', '60 ÷ 20 = 3 cm.'] },
        ],
      },
      de: {
        title: 'Würfel und Quader',
        objectives: ['Oberfläche, Volumen und Diagonalen eines Quaders berechnen.', 'Eine unbekannte Kantenlänge aus Oberfläche oder Volumen bestimmen.'],
        theory: 'Ein Quader a × b × c hat 6 rechteckige Flächen, 12 Kanten und 8 Ecken. Oberfläche: O = 2(ab + bc + ac); Volumen: V = abc. Würfel mit Kante a: O = 6a², V = a³.\n\nEine Flächendiagonale ergibt sich mit Pythagoras in der Ebene: √(a² + b²). Die Raumdiagonale (von einer Ecke zur gegenüberliegenden) erhält man durch zweimaliges Anwenden: d = √(a² + b² + c²). Beim Würfel: d = a√3.\n\nBeispiel: Ein Würfel mit 2 cm Kantenlänge hat die Raumdiagonale 2√3 ≈ 3,46 cm.',
        keyPoints: ['O = 2(ab + bc + ac);  V = abc', 'Raumdiagonale: d = √(a² + b² + c²)', 'Würfel: O = 6a², V = a³, d = a√3'],
        examples: [
          { example: 'Bestimmen Sie Oberfläche und Volumen eines Quaders 5 × 4 × 3 cm.', solution: 'O = 2(20 + 12 + 15) = 94 cm²; V = 60 cm³.' },
          { example: 'Bestimmen Sie die Raumdiagonale eines Würfels mit 2 cm Kantenlänge.', solution: 'd = 2√3 ≈ 3,46 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Die Quaderdiagonale ist √(a² + b²).', fix: 'Das ist eine Flächendiagonale; die Raumdiagonale enthält auch c².' },
          { mistake: 'Ein Würfel mit O = 150 hat die Kante 25.', fix: '150 : 6 = 25 ist a²; die Kante ist a = 5.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Raumdiagonale eines Quaders 3 × 4 × 12 cm.', solution: '13 cm', steps: ['d² = 9 + 16 + 144 = 169.', 'd = 13 cm.'] },
          { problem: 'Ein Würfel hat 150 cm² Oberfläche. Wie lang ist eine Kante?', solution: '5 cm', steps: ['6a² = 150 → a² = 25.', 'a = 5 cm.'] },
          { problem: 'Ein Quader hat 60 cm³ Volumen und eine Grundfläche von 5 × 4 cm. Wie hoch ist er?', solution: '3 cm', steps: ['c = V : (a · b).', '60 : 20 = 3 cm.'] },
        ],
      },
    },

    // ───────── 3. Prism and pyramid surface areas
    {
      slug: 'g8-solid-geometry-prism-pyramid',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 7.4, yMin: -0.8, yMax: 4.4 }, height: 200,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [5, 0], [5, 1.5], [0, 1.5]], color: 'ink' },
          { kind: 'polygon', points: [[0, 1.5], [5, 1.5], [6.4, 3.9], [1.4, 3.9]], fill: true, color: 'primary' },
          { kind: 'segment', from: [5, 0], to: [6.4, 3.9], color: 'ink' },
          { kind: 'segment', from: [0, 0], to: [1.4, 3.9], color: 'muted', dashed: true },
          { kind: 'segment', from: [5, 0], to: [5, 1.5], color: 'ink' },
          { kind: 'label', at: [2.5, -0.45], text: 'h = 10' },
          { kind: 'label', at: [6.6, 1.6], text: '3, 4, 5' },
        ],
        caption: alt('Prizmi trekëndor me bazë trekëndësh kënddrejtë 3, 4, 5 dhe lartësi 10: S = 2 · 6 + (3 + 4 + 5) · 10 = 132.', 'A triangular prism with a 3, 4, 5 right-triangle base and height 10: S = 2 · 6 + (3 + 4 + 5) · 10 = 132.', 'Ein dreiseitiges Prisma mit rechtwinkligem Grunddreieck 3, 4, 5 und Höhe 10: O = 2 · 6 + (3 + 4 + 5) · 10 = 132.'),
        alt: alt('Prizëm trekëndor i shtrirë, me faqet anësore drejtkëndëshe.', 'A triangular prism lying on its side, with rectangular lateral faces.', 'Ein liegendes dreiseitiges Prisma mit rechteckigen Seitenflächen.'),
      }],
      answers: {
        examples: [[['2 * (3 * 4 / 2) + (3 + 4 + 5) * 10', 132]], [['sqrt(3^2 + 4^2)', 5], ['8^2 + 4 * (8 * 5 / 2)', 144]]],
        practice: [[['6 * 3^2', 54]], [['6^2 + 4 * (6 * 4 / 2)', 84]], [['2 * (6 * 8 / 2) + (6 + 8 + 10) * 5', 168]]],
      },
      al: {
        title: 'Prizmi, piramida dhe sipërfaqet e tyre',
        objectives: ['Të njehsoni sipërfaqen e plotë të prizmit nga sipërfaqja e bazës dhe ajo anësore.', 'Të njehsoni sipërfaqen e piramidës së rregullt, duke gjetur apotemën me Pitagorën.'],
        theory: 'Prizmi: S = 2B + M, ku B është sipërfaqja e bazës dhe M sipërfaqja anësore. Faqet anësore janë drejtkëndësha me lartësi h, prandaj M = P_bazës · h.\n\nPiramida e rregullt: S = B + M, ku M përbëhet nga n trekëndësha barakrahës me bazë a dhe lartësi h_a (apotema): M = n · a · h_a / 2.\n\nApotema gjendet nga lartësia e piramidës H dhe gjysma e brinjës së bazës: h_a = √(H² + (a/2)²). Piramida katërkëndore me a = 8 dhe H = 3: h_a = √(9 + 16) = 5, S = 64 + 4 · 20 = 144.',
        keyPoints: ['Prizmi: S = 2B + P · h', 'Piramida: S = B + n · a · h_a / 2', 'h_a = √(H² + (a/2)²)'],
        examples: [
          { example: 'Prizmi trekëndor ka bazë trekëndësh kënddrejtë 3, 4, 5 cm dhe lartësi 10 cm. Gjeni sipërfaqen.', solution: 'B = 3 · 4 / 2 = 6; M = 12 · 10 = 120; S = 2 · 6 + 120 = 132 cm².' },
          { example: 'Piramida katërkëndore e rregullt ka a = 8 cm dhe H = 3 cm. Gjeni apotemën dhe sipërfaqen.', solution: 'h_a = √(3² + 4²) = 5 cm; S = 64 + 4 · (8 · 5 / 2) = 144 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Te prizmi numërohet vetëm një bazë.', fix: 'Prizmi ka dy baza: S = 2B + M.' },
          { mistake: 'Te piramida përdoret H në vend të apotemës.', fix: 'Sipërfaqja e trekëndëshit anësor kërkon apotemën h_a.' },
        ],
        practice: [
          { problem: 'Gjeni sipërfaqen e kubit me brinjë 3 cm.', solution: '54 cm²', steps: ['6 · 3².', '= 54 cm².'] },
          { problem: 'Piramida katërkëndore e rregullt ka a = 6 cm dhe apotemë 4 cm. Gjeni sipërfaqen.', solution: '84 cm²', steps: ['B = 36; M = 4 · (6 · 4 / 2) = 48.', 'S = 84 cm².'] },
          { problem: 'Prizmi trekëndor ka bazë trekëndësh kënddrejtë 6, 8, 10 cm dhe lartësi 5 cm. Gjeni sipërfaqen.', solution: '168 cm²', steps: ['B = 24; M = 24 · 5 = 120.', 'S = 2 · 24 + 120 = 168 cm².'] },
        ],
      },
      en: {
        title: 'Prisms, pyramids and their surface areas',
        objectives: ['Work out the total surface area of a prism from the base and lateral areas.', 'Work out the surface area of a regular pyramid, finding the slant height with Pythagoras.'],
        theory: 'Prism: S = 2B + L, where B is the base area and L the lateral area. The lateral faces are rectangles of height h, so L = perimeter of the base · h.\n\nRegular pyramid: S = B + L, where L consists of n isosceles triangles with base a and height h_a (the slant height): L = n · a · h_a / 2.\n\nThe slant height comes from the pyramid height H and half the base edge: h_a = √(H² + (a/2)²). A square pyramid with a = 8 and H = 3: h_a = √(9 + 16) = 5, S = 64 + 4 · 20 = 144.',
        keyPoints: ['Prism: S = 2B + P · h', 'Pyramid: S = B + n · a · h_a / 2', 'h_a = √(H² + (a/2)²)'],
        examples: [
          { example: 'A triangular prism has a 3, 4, 5 cm right-triangle base and height 10 cm. Find its surface area.', solution: 'B = 3 · 4 / 2 = 6; L = 12 · 10 = 120; S = 2 · 6 + 120 = 132 cm².' },
          { example: 'A regular square pyramid has a = 8 cm and H = 3 cm. Find the slant height and the surface area.', solution: 'h_a = √(3² + 4²) = 5 cm; S = 64 + 4 · (8 · 5 / 2) = 144 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Counting only one base for a prism.', fix: 'A prism has two bases: S = 2B + L.' },
          { mistake: 'Using H instead of the slant height for a pyramid.', fix: 'The area of a lateral triangle needs the slant height h_a.' },
        ],
        practice: [
          { problem: 'Find the surface area of a cube with edge 3 cm.', solution: '54 cm²', steps: ['6 · 3².', '= 54 cm².'] },
          { problem: 'A regular square pyramid has a = 6 cm and slant height 4 cm. Find its surface area.', solution: '84 cm²', steps: ['B = 36; L = 4 · (6 · 4 / 2) = 48.', 'S = 84 cm².'] },
          { problem: 'A triangular prism has a 6, 8, 10 cm right-triangle base and height 5 cm. Find its surface area.', solution: '168 cm²', steps: ['B = 24; L = 24 · 5 = 120.', 'S = 2 · 24 + 120 = 168 cm².'] },
        ],
      },
      de: {
        title: 'Prisma, Pyramide und ihre Oberflächen',
        objectives: ['Die Oberfläche eines Prismas aus Grund- und Mantelfläche berechnen.', 'Die Oberfläche einer regelmäßigen Pyramide berechnen und die Seitenhöhe mit Pythagoras bestimmen.'],
        theory: 'Prisma: O = 2G + M, mit Grundfläche G und Mantelfläche M. Die Seitenflächen sind Rechtecke der Höhe h, also M = Umfang der Grundfläche · h.\n\nRegelmäßige Pyramide: O = G + M, wobei M aus n gleichschenkligen Dreiecken mit Basis a und Seitenhöhe h_a besteht: M = n · a · h_a / 2.\n\nDie Seitenhöhe ergibt sich aus der Körperhöhe H und der halben Grundkante: h_a = √(H² + (a/2)²). Quadratische Pyramide mit a = 8 und H = 3: h_a = √(9 + 16) = 5, O = 64 + 4 · 20 = 144.',
        keyPoints: ['Prisma: O = 2G + u · h', 'Pyramide: O = G + n · a · h_a / 2', 'h_a = √(H² + (a/2)²)'],
        examples: [
          { example: 'Ein dreiseitiges Prisma hat ein rechtwinkliges Grunddreieck 3, 4, 5 cm und die Höhe 10 cm. Bestimmen Sie die Oberfläche.', solution: 'G = 3 · 4 / 2 = 6; M = 12 · 10 = 120; O = 2 · 6 + 120 = 132 cm².' },
          { example: 'Eine regelmäßige quadratische Pyramide hat a = 8 cm und H = 3 cm. Bestimmen Sie Seitenhöhe und Oberfläche.', solution: 'h_a = √(3² + 4²) = 5 cm; O = 64 + 4 · (8 · 5 / 2) = 144 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Beim Prisma nur eine Grundfläche zählen.', fix: 'Ein Prisma hat zwei Grundflächen: O = 2G + M.' },
          { mistake: 'Bei der Pyramide H statt der Seitenhöhe verwenden.', fix: 'Für die Fläche eines Seitendreiecks braucht man die Seitenhöhe h_a.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Oberfläche eines Würfels mit 3 cm Kantenlänge.', solution: '54 cm²', steps: ['6 · 3².', '= 54 cm².'] },
          { problem: 'Eine regelmäßige quadratische Pyramide hat a = 6 cm und die Seitenhöhe 4 cm. Bestimmen Sie die Oberfläche.', solution: '84 cm²', steps: ['G = 36; M = 4 · (6 · 4 / 2) = 48.', 'O = 84 cm².'] },
          { problem: 'Ein dreiseitiges Prisma hat ein rechtwinkliges Grunddreieck 6, 8, 10 cm und die Höhe 5 cm. Bestimmen Sie die Oberfläche.', solution: '168 cm²', steps: ['G = 24; M = 24 · 5 = 120.', 'O = 2 · 24 + 120 = 168 cm².'] },
        ],
      },
    },
  ],
};
