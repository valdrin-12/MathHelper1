// Grade 11 · Theme 3: Solid geometry (October–November)
const alt = (al, en, de) => ({ al, en, de });
const H = Number(Math.sqrt(84).toFixed(2)); // cone with r = 4, l = 10

export default {
  id: 'g11-solid-geometry',
  i18n: {
    al: { title: 'Gjeometria në hapësirë', description: 'Faqet, kulmet dhe brinjët e trupave, vëllimi i prizmit dhe cilindrit, vëllimi dhe syprina e piramidës, konit dhe sferës.' },
    en: { title: 'Solid geometry', description: 'Faces, vertices and edges of solids, volume of prisms and cylinders, volume and surface area of pyramids, cones and spheres.' },
    de: { title: 'Raumgeometrie', description: 'Flächen, Ecken und Kanten von Körpern, Volumen von Prisma und Zylinder, Volumen und Oberfläche von Pyramide, Kegel und Kugel.' },
  },
  lessons: [
    // ───────── 1. Solids
    {
      slug: 'g11-solid-geometry-solids',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Trupi', 'Solid', 'Körper'), cells: [alt('kubi', 'cube', 'Würfel'), alt('prizmi trekëndor', 'triangular prism', 'Dreiecksprisma'), alt('piramida katrore', 'square pyramid', 'quadratische Pyramide')] },
          { head: alt('Faqe F', 'Faces F', 'Flächen F'), cells: ['6', '5', '5'] },
          { head: alt('Kulme K', 'Vertices V', 'Ecken E'), cells: ['8', '6', '5'] },
          { head: alt('Brinjë B', 'Edges E', 'Kanten K'), cells: ['12', '9', '8'] },
        ],
        caption: alt('Për çdo shumëfaqësh: K − B + F = 2 (formula e Euler-it).', 'For every polyhedron: V − E + F = 2 (Euler\'s formula).', 'Für jedes Polyeder gilt: E − K + F = 2 (eulerscher Polyedersatz).'),
        alt: alt('Tabelë me numrin e faqeve, kulmeve dhe brinjëve të kubit, prizmit trekëndor dhe piramidës katrore.', 'Table of the faces, vertices and edges of a cube, a triangular prism and a square pyramid.', 'Tabelle der Flächen, Ecken und Kanten von Würfel, Dreiecksprisma und quadratischer Pyramide.'),
      }],
      answers: {
        examples: [[['6 - 9 + 5', 2]], [['5 + 5 - 2', 8]]],
        practice: [[['2 - 12 + 30', 20]], [['6 + 2', 8], ['2 * 6', 12], ['3 * 6', 18]], [['4 * sqrt(3)', 6.93, 0.005]]],
      },
      al: {
        title: 'Trupat gjeometrikë',
        objectives: ['Të njihni prizmin, piramidën, cilindrin, konin dhe sferën dhe elementet e tyre.', 'Të përdorni formulën e Euler-it K − B + F = 2.'],
        theory: 'Shumëfaqëshat kanë faqe të sheshta: prizmi ka dy baza të njëjta paralele, piramida ka një bazë dhe një kulm. Cilindri, koni dhe sfera kanë sipërfaqe të lakuara.\n\nPrizmi me bazë n-këndësh ka n + 2 faqe, 2n kulme dhe 3n brinjë. Piramida me bazë n-këndësh ka n + 1 faqe, n + 1 kulme dhe 2n brinjë.\n\nFormula e Euler-it vlen për çdo shumëfaqësh konveks: K − B + F = 2. Diagonalja e hapësirës së kubit me brinjë a është a√3.',
        keyPoints: ['Prizmi n-këndor: n + 2 faqe, 2n kulme, 3n brinjë', 'K − B + F = 2', 'Diagonalja e kubit: a√3'],
        examples: [
          { example: 'Numëroni faqet, kulmet dhe brinjët e prizmit trekëndor dhe kontrolloni formulën e Euler-it.', solution: 'F = 5, K = 6, B = 9: 6 − 9 + 5 = 2.' },
          { example: 'Sa brinjë ka piramida katrore?', solution: 'K + F − 2 = 5 + 5 − 2 = 8 (4 në bazë, 4 anësore).' },
        ],
        commonMistakes: [
          { mistake: 'Prizmi trekëndor numërohet me 6 brinjë.', fix: 'Janë 3 + 3 brinjë në baza dhe 3 anësore: 9.' },
          { mistake: 'Formula e Euler-it shkruhet K + B − F = 2.', fix: 'Brinjët zbriten: K − B + F = 2.' },
        ],
        practice: [
          { problem: 'Një shumëfaqësh ka 12 kulme dhe 30 brinjë. Sa faqe ka?', solution: '20', steps: ['F = 2 − K + B.', 'F = 2 − 12 + 30 = 20.'] },
          { problem: 'Sa faqe, kulme dhe brinjë ka prizmi gjashtëkëndor?', solution: '8 faqe, 12 kulme, 18 brinjë', steps: ['n = 6: faqe n + 2 = 8.', 'Kulme 2n = 12, brinjë 3n = 18.'] },
          { problem: 'Sa është diagonalja e hapësirës së kubit me brinjë 4 cm?', solution: '4√3 ≈ 6,93 cm', steps: ['d = a√3.', '4√3 ≈ 6,93 cm.'] },
        ],
      },
      en: {
        title: 'Solids',
        objectives: ['Know prisms, pyramids, cylinders, cones and spheres and their parts.', 'Use Euler\'s formula V − E + F = 2.'],
        theory: 'Polyhedra have flat faces: a prism has two equal parallel bases, a pyramid has one base and an apex. Cylinders, cones and spheres have curved surfaces.\n\nA prism on an n-sided base has n + 2 faces, 2n vertices and 3n edges. A pyramid on an n-sided base has n + 1 faces, n + 1 vertices and 2n edges.\n\nEuler\'s formula holds for every convex polyhedron: V − E + F = 2. The space diagonal of a cube with edge a is a√3.',
        keyPoints: ['n-sided prism: n + 2 faces, 2n vertices, 3n edges', 'V − E + F = 2', 'Cube diagonal: a√3'],
        examples: [
          { example: 'Count the faces, vertices and edges of a triangular prism and check Euler\'s formula.', solution: 'F = 5, V = 6, E = 9: 6 − 9 + 5 = 2.' },
          { example: 'How many edges does a square pyramid have?', solution: 'V + F − 2 = 5 + 5 − 2 = 8 (4 on the base, 4 slanting).' },
        ],
        commonMistakes: [
          { mistake: 'A triangular prism is counted with 6 edges.', fix: 'There are 3 + 3 edges on the bases and 3 sides: 9.' },
          { mistake: 'Euler\'s formula is written V + E − F = 2.', fix: 'The edges are subtracted: V − E + F = 2.' },
        ],
        practice: [
          { problem: 'A polyhedron has 12 vertices and 30 edges. How many faces does it have?', solution: '20', steps: ['F = 2 − V + E.', 'F = 2 − 12 + 30 = 20.'] },
          { problem: 'How many faces, vertices and edges does a hexagonal prism have?', solution: '8 faces, 12 vertices, 18 edges', steps: ['n = 6: faces n + 2 = 8.', 'Vertices 2n = 12, edges 3n = 18.'] },
          { problem: 'What is the space diagonal of a cube with edge 4 cm?', solution: '4√3 ≈ 6.93 cm', steps: ['d = a√3.', '4√3 ≈ 6.93 cm.'] },
        ],
      },
      de: {
        title: 'Geometrische Körper',
        objectives: ['Prisma, Pyramide, Zylinder, Kegel und Kugel und ihre Bestandteile kennen.', 'Den eulerschen Polyedersatz E − K + F = 2 anwenden.'],
        theory: 'Polyeder haben ebene Flächen: Ein Prisma hat zwei gleiche, parallele Grundflächen, eine Pyramide eine Grundfläche und eine Spitze. Zylinder, Kegel und Kugel haben gekrümmte Flächen.\n\nEin Prisma mit n-eckiger Grundfläche hat n + 2 Flächen, 2n Ecken und 3n Kanten. Eine Pyramide mit n-eckiger Grundfläche hat n + 1 Flächen, n + 1 Ecken und 2n Kanten.\n\nFür jedes konvexe Polyeder gilt der eulersche Polyedersatz: E − K + F = 2 (Ecken − Kanten + Flächen). Die Raumdiagonale eines Würfels mit Kante a ist a√3.',
        keyPoints: ['n-seitiges Prisma: n + 2 Flächen, 2n Ecken, 3n Kanten', 'E − K + F = 2', 'Raumdiagonale des Würfels: a√3'],
        examples: [
          { example: 'Zählen Sie Flächen, Ecken und Kanten eines Dreiecksprismas und prüfen Sie den Polyedersatz.', solution: 'F = 5, E = 6, K = 9: 6 − 9 + 5 = 2.' },
          { example: 'Wie viele Kanten hat eine quadratische Pyramide?', solution: 'E + F − 2 = 5 + 5 − 2 = 8 (4 an der Grundfläche, 4 Seitenkanten).' },
        ],
        commonMistakes: [
          { mistake: 'Ein Dreiecksprisma wird mit 6 Kanten gezählt.', fix: 'Es sind 3 + 3 Kanten an den Grundflächen und 3 Seitenkanten: 9.' },
          { mistake: 'Der Polyedersatz wird als E + K − F = 2 geschrieben.', fix: 'Die Kanten werden abgezogen: E − K + F = 2.' },
        ],
        practice: [
          { problem: 'Ein Polyeder hat 12 Ecken und 30 Kanten. Wie viele Flächen hat es?', solution: '20', steps: ['F = 2 − E + K.', 'F = 2 − 12 + 30 = 20.'] },
          { problem: 'Wie viele Flächen, Ecken und Kanten hat ein sechsseitiges Prisma?', solution: '8 Flächen, 12 Ecken, 18 Kanten', steps: ['n = 6: Flächen n + 2 = 8.', 'Ecken 2n = 12, Kanten 3n = 18.'] },
          { problem: 'Wie lang ist die Raumdiagonale eines Würfels mit Kante 4 cm?', solution: '4√3 ≈ 6,93 cm', steps: ['d = a√3.', '4√3 ≈ 6,93 cm.'] },
        ],
      },
    },
    // ───────── 2. Volume of a prism
    {
      slug: 'g11-solid-geometry-prism-volume',
      visuals: [{
        type: 'solid', kind: 'cuboid', a: 5, b: 4, c: 3, labels: { a: '5 cm', b: '4 cm', c: '3 cm' },
        caption: alt('V = syprina e bazës · lartësia = 5 · 4 · 3 = 60 cm³.', 'V = base area · height = 5 · 4 · 3 = 60 cm³.', 'V = Grundfläche · Höhe = 5 · 4 · 3 = 60 cm³.'),
        alt: alt('Kuboid me përmasa 5 cm, 4 cm dhe 3 cm.', 'A cuboid measuring 5 cm, 4 cm and 3 cm.', 'Ein Quader mit 5 cm, 4 cm und 3 cm.'),
      }],
      answers: {
        examples: [[['0.5 * 6 * 4 * 10', 120]], [['pi * 3^2 * 10', 282.74, 0.005]]],
        practice: [[['5 * 4 * 3', 60]], [['126 / 18', 7]], [['pi * 0.5^2 * 2', 1.571, 0.0005]]],
      },
      al: {
        title: 'Vëllimi i prizmit',
        objectives: ['Të llogaritni vëllimin e prizmit dhe të cilindrit si bazë · lartësi.', 'Të gjeni një përmasë të panjohur dhe të ktheni njësitë e vëllimit.'],
        theory: 'Për çdo prizëm (edhe për cilindrin) vëllimi është syprina e bazës herë lartësia: V = B · h.\n\nPrizmi trekëndor me trekëndësh bazë me brinjë 6 cm dhe lartësi 4 cm, i gjatë 10 cm: B = 1/2 · 6 · 4 = 12 cm², V = 12 · 10 = 120 cm³.\nCilindri: B = πr², pra V = πr²h.\n\nNjësitë: 1 cm³ = 1 ml, 1 dm³ = 1 l, 1 m³ = 1 000 l.',
        keyPoints: ['V = B · h', 'Cilindri: V = πr²h', '1 m³ = 1 000 l, 1 dm³ = 1 l'],
        examples: [
          { example: 'Prizmi trekëndor ka bazë trekëndësh me brinjë 6 cm dhe lartësi 4 cm; gjatësia e prizmit është 10 cm. Sa është vëllimi?', solution: 'B = 1/2 · 6 · 4 = 12 cm²; V = 12 · 10 = 120 cm³.' },
          { example: 'Sa është vëllimi i cilindrit me r = 3 cm dhe h = 10 cm?', solution: 'V = π · 9 · 10 = 90π ≈ 282,74 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Si bazë merret një faqe anësore në vend të prerjes tërthore.', fix: 'Baza është faqja që përsëritet njësoj gjatë gjithë prizmit.' },
          { mistake: 'Vëllimi shkruhet në cm².', fix: 'Vëllimi matet me njësi kubike: cm³, m³.' },
        ],
        practice: [
          { problem: 'Sa është vëllimi i kuboidit 5 cm × 4 cm × 3 cm?', solution: '60 cm³', steps: ['B = 5 · 4 = 20 cm².', 'V = 20 · 3 = 60 cm³.'] },
          { problem: 'Një prizëm ka bazë 18 cm² dhe vëllim 126 cm³. Sa është lartësia?', solution: '7 cm', steps: ['h = V : B.', '126 : 18 = 7 cm.'] },
          { problem: 'Një depozitë cilindrike ka r = 0,5 m dhe h = 2 m. Sa m³ dhe sa litra mban?', solution: '≈ 1,571 m³ ≈ 1 571 l', steps: ['V = π · 0,25 · 2 = 0,5π ≈ 1,571 m³.', '1 m³ = 1 000 l → ≈ 1 571 l.'] },
        ],
      },
      en: {
        title: 'Volume of a prism',
        objectives: ['Work out the volume of a prism and a cylinder as base · height.', 'Find a missing length and convert units of volume.'],
        theory: 'For every prism (and a cylinder) the volume is the base area times the height: V = B · h.\n\nA triangular prism whose triangular base has side 6 cm and height 4 cm, 10 cm long: B = 1/2 · 6 · 4 = 12 cm², V = 12 · 10 = 120 cm³.\nCylinder: B = πr², so V = πr²h.\n\nUnits: 1 cm³ = 1 ml, 1 dm³ = 1 l, 1 m³ = 1 000 l.',
        keyPoints: ['V = B · h', 'Cylinder: V = πr²h', '1 m³ = 1 000 l, 1 dm³ = 1 l'],
        examples: [
          { example: 'A triangular prism has a triangular base with side 6 cm and height 4 cm; the prism is 10 cm long. What is its volume?', solution: 'B = 1/2 · 6 · 4 = 12 cm²; V = 12 · 10 = 120 cm³.' },
          { example: 'What is the volume of a cylinder with r = 3 cm and h = 10 cm?', solution: 'V = π · 9 · 10 = 90π ≈ 282.74 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'A side face is taken as the base instead of the cross-section.', fix: 'The base is the face that stays the same all the way along the prism.' },
          { mistake: 'Volume is written in cm².', fix: 'Volume is measured in cubic units: cm³, m³.' },
        ],
        practice: [
          { problem: 'What is the volume of a 5 cm × 4 cm × 3 cm cuboid?', solution: '60 cm³', steps: ['B = 5 · 4 = 20 cm².', 'V = 20 · 3 = 60 cm³.'] },
          { problem: 'A prism has a base of 18 cm² and a volume of 126 cm³. What is its height?', solution: '7 cm', steps: ['h = V ÷ B.', '126 ÷ 18 = 7 cm.'] },
          { problem: 'A cylindrical tank has r = 0.5 m and h = 2 m. How many m³ and litres does it hold?', solution: '≈ 1.571 m³ ≈ 1 571 l', steps: ['V = π · 0.25 · 2 = 0.5π ≈ 1.571 m³.', '1 m³ = 1 000 l → ≈ 1 571 l.'] },
        ],
      },
      de: {
        title: 'Volumen des Prismas',
        objectives: ['Das Volumen von Prisma und Zylinder als Grundfläche · Höhe berechnen.', 'Eine fehlende Länge bestimmen und Volumeneinheiten umrechnen.'],
        theory: 'Für jedes Prisma (auch den Zylinder) gilt: Volumen = Grundfläche mal Höhe, V = G · h.\n\nEin Dreiecksprisma, dessen dreieckige Grundfläche die Seite 6 cm und die Höhe 4 cm hat, 10 cm lang: G = 1/2 · 6 · 4 = 12 cm², V = 12 · 10 = 120 cm³.\nZylinder: G = πr², also V = πr²h.\n\nEinheiten: 1 cm³ = 1 ml, 1 dm³ = 1 l, 1 m³ = 1 000 l.',
        keyPoints: ['V = G · h', 'Zylinder: V = πr²h', '1 m³ = 1 000 l, 1 dm³ = 1 l'],
        examples: [
          { example: 'Ein Dreiecksprisma hat eine dreieckige Grundfläche mit Seite 6 cm und Höhe 4 cm; das Prisma ist 10 cm lang. Wie groß ist das Volumen?', solution: 'G = 1/2 · 6 · 4 = 12 cm²; V = 12 · 10 = 120 cm³.' },
          { example: 'Wie groß ist das Volumen eines Zylinders mit r = 3 cm und h = 10 cm?', solution: 'V = π · 9 · 10 = 90π ≈ 282,74 cm³.' },
        ],
        commonMistakes: [
          { mistake: 'Eine Seitenfläche wird als Grundfläche genommen statt des Querschnitts.', fix: 'Die Grundfläche ist die Fläche, die entlang des ganzen Prismas gleich bleibt.' },
          { mistake: 'Das Volumen wird in cm² angegeben.', fix: 'Volumen misst man in Kubikeinheiten: cm³, m³.' },
        ],
        practice: [
          { problem: 'Wie groß ist das Volumen eines Quaders 5 cm × 4 cm × 3 cm?', solution: '60 cm³', steps: ['G = 5 · 4 = 20 cm².', 'V = 20 · 3 = 60 cm³.'] },
          { problem: 'Ein Prisma hat die Grundfläche 18 cm² und das Volumen 126 cm³. Wie hoch ist es?', solution: '7 cm', steps: ['h = V : G.', '126 : 18 = 7 cm.'] },
          { problem: 'Ein zylindrischer Tank hat r = 0,5 m und h = 2 m. Wie viele m³ und Liter fasst er?', solution: '≈ 1,571 m³ ≈ 1 571 l', steps: ['V = π · 0,25 · 2 = 0,5π ≈ 1,571 m³.', '1 m³ = 1 000 l → ≈ 1 571 l.'] },
        ],
      },
    },
    // ───────── 3. Volume and surface area
    {
      slug: 'g11-solid-geometry-volume-surface',
      visuals: [{
        type: 'geoFigure', view: { xMin: -6, xMax: 6, yMin: -1, yMax: 10.2 }, height: 230,
        shapes: [
          { kind: 'polygon', points: [[-4, 0], [4, 0], [0, H]], color: 'primary', fill: true },
          { kind: 'segment', from: [0, 0], to: [0, H], color: 'secondary', dashed: true, label: 'h' },
          { kind: 'segment', from: [0, 0], to: [4, 0], color: 'success', label: 'r = 4' },
          { kind: 'segment', from: [4, 0], to: [0, H], color: 'purple', label: 'l = 10' },
          { kind: 'angle', vertex: [0, 0], from: [4, 0], to: [0, 2], right: true, color: 'secondary' },
        ],
        caption: alt('Prerja e konit: r, h dhe përftuesja l formojnë trekëndësh kënddrejtë, l² = r² + h².', 'Cross-section of a cone: r, h and the slant height l form a right triangle, l² = r² + h².', 'Achsenschnitt des Kegels: r, h und die Mantellinie s bilden ein rechtwinkliges Dreieck, s² = r² + h².'),
        alt: alt('Trekëndësh dybrinjënjëshëm si prerje e konit me rreze 4, përftuese 10 dhe lartësi h.', 'An isosceles triangle as the cross-section of a cone with radius 4, slant height 10 and height h.', 'Ein gleichschenkliges Dreieck als Achsenschnitt eines Kegels mit Radius 4, Mantellinie 10 und Höhe h.'),
      }],
      answers: {
        examples: [[['4/3 * pi * 3^3', 113.1, 0.05]], [['pi * 4 * 10', 125.66, 0.005]]],
        practice: [[['4 * pi * 5^2', 314.16, 0.005]], [['1/3 * pi * 3^2 * 4', 37.7, 0.005, '37.70']], [['1/3 * 6^2 * 5', 60]]],
      },
      al: {
        title: 'Vëllimi dhe syprina e trupave',
        objectives: ['Të llogaritni vëllimin e piramidës, konit dhe sferës.', 'Të llogaritni syprinën anësore të konit dhe syprinën e sferës.'],
        theory: 'Piramida dhe koni kanë një të tretën e vëllimit të prizmit/cilindrit me të njëjtën bazë dhe lartësi:\nV = 1/3 · B · h; koni: V = 1/3 · πr²h.\n\nSyprina anësore e konit është πrl, ku l është përftuesja (l² = r² + h²). Syprina e plotë = πr² + πrl.\n\nSfera me rreze r: V = 4/3 · πr³ dhe S = 4πr². Për r = 3 cm: V = 36π ≈ 113,1 cm³.',
        keyPoints: ['Piramida/koni: V = 1/3 · B · h', 'Koni: S anësore = πrl', 'Sfera: V = 4/3 πr³, S = 4πr²'],
        examples: [
          { example: 'Sa është vëllimi i sferës me rreze 3 cm?', solution: 'V = 4/3 · π · 27 = 36π ≈ 113,1 cm³.' },
          { example: 'Sa është syprina anësore e konit me r = 4 cm dhe përftuese 10 cm?', solution: 'S = π · 4 · 10 = 40π ≈ 125,66 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Vëllimi i konit llogaritet πr²h, pa 1/3.', fix: 'Koni është një e treta e cilindrit: 1/3 · πr²h.' },
          { mistake: 'Te syprina anësore e konit përdoret lartësia h në vend të përftueses l.', fix: 'S anësore = πrl; nëse jepet h, gjeni l = √(r² + h²).' },
        ],
        practice: [
          { problem: 'Sa është syprina e sferës me r = 5 cm?', solution: '100π ≈ 314,16 cm²', steps: ['S = 4π · 25.', '= 100π ≈ 314,16 cm².'] },
          { problem: 'Sa është vëllimi i konit me r = 3 cm dhe h = 4 cm?', solution: '12π ≈ 37,70 cm³', steps: ['V = 1/3 · π · 9 · 4.', '= 12π ≈ 37,70 cm³.'] },
          { problem: 'Piramida katrore ka brinjë baze 6 cm dhe lartësi 5 cm. Sa është vëllimi?', solution: '60 cm³', steps: ['B = 36 cm².', 'V = 1/3 · 36 · 5 = 60 cm³.'] },
        ],
      },
      en: {
        title: 'Volume and surface area',
        objectives: ['Work out the volume of pyramids, cones and spheres.', 'Work out the curved surface area of a cone and the surface area of a sphere.'],
        theory: 'A pyramid and a cone have one third of the volume of the prism/cylinder with the same base and height:\nV = 1/3 · B · h; cone: V = 1/3 · πr²h.\n\nThe curved surface area of a cone is πrl, where l is the slant height (l² = r² + h²). Total surface area = πr² + πrl.\n\nA sphere with radius r: V = 4/3 · πr³ and A = 4πr². For r = 3 cm: V = 36π ≈ 113.1 cm³.',
        keyPoints: ['Pyramid/cone: V = 1/3 · B · h', 'Cone: curved area = πrl', 'Sphere: V = 4/3 πr³, A = 4πr²'],
        examples: [
          { example: 'What is the volume of a sphere with radius 3 cm?', solution: 'V = 4/3 · π · 27 = 36π ≈ 113.1 cm³.' },
          { example: 'What is the curved surface area of a cone with r = 4 cm and slant height 10 cm?', solution: 'A = π · 4 · 10 = 40π ≈ 125.66 cm².' },
        ],
        commonMistakes: [
          { mistake: 'The volume of a cone is worked out as πr²h, without the 1/3.', fix: 'A cone is one third of a cylinder: 1/3 · πr²h.' },
          { mistake: 'The height h is used for the curved area instead of the slant height l.', fix: 'Curved area = πrl; if h is given, find l = √(r² + h²).' },
        ],
        practice: [
          { problem: 'What is the surface area of a sphere with r = 5 cm?', solution: '100π ≈ 314.16 cm²', steps: ['A = 4π · 25.', '= 100π ≈ 314.16 cm².'] },
          { problem: 'What is the volume of a cone with r = 3 cm and h = 4 cm?', solution: '12π ≈ 37.70 cm³', steps: ['V = 1/3 · π · 9 · 4.', '= 12π ≈ 37.70 cm³.'] },
          { problem: 'A square pyramid has base edge 6 cm and height 5 cm. What is its volume?', solution: '60 cm³', steps: ['B = 36 cm².', 'V = 1/3 · 36 · 5 = 60 cm³.'] },
        ],
      },
      de: {
        title: 'Volumen und Oberfläche von Körpern',
        objectives: ['Das Volumen von Pyramide, Kegel und Kugel berechnen.', 'Die Mantelfläche des Kegels und die Oberfläche der Kugel berechnen.'],
        theory: 'Pyramide und Kegel haben ein Drittel des Volumens des Prismas/Zylinders mit gleicher Grundfläche und Höhe:\nV = 1/3 · G · h; Kegel: V = 1/3 · πr²h.\n\nDie Mantelfläche des Kegels ist πrs, wobei s die Mantellinie ist (s² = r² + h²). Oberfläche = πr² + πrs.\n\nKugel mit Radius r: V = 4/3 · πr³ und O = 4πr². Für r = 3 cm: V = 36π ≈ 113,1 cm³.',
        keyPoints: ['Pyramide/Kegel: V = 1/3 · G · h', 'Kegel: Mantel M = πrs', 'Kugel: V = 4/3 πr³, O = 4πr²'],
        examples: [
          { example: 'Wie groß ist das Volumen einer Kugel mit Radius 3 cm?', solution: 'V = 4/3 · π · 27 = 36π ≈ 113,1 cm³.' },
          { example: 'Wie groß ist die Mantelfläche eines Kegels mit r = 4 cm und Mantellinie 10 cm?', solution: 'M = π · 4 · 10 = 40π ≈ 125,66 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Das Kegelvolumen wird als πr²h ohne 1/3 berechnet.', fix: 'Ein Kegel ist ein Drittel des Zylinders: 1/3 · πr²h.' },
          { mistake: 'Für die Mantelfläche wird die Höhe h statt der Mantellinie s verwendet.', fix: 'M = πrs; ist h gegeben, zuerst s = √(r² + h²) berechnen.' },
        ],
        practice: [
          { problem: 'Wie groß ist die Oberfläche einer Kugel mit r = 5 cm?', solution: '100π ≈ 314,16 cm²', steps: ['O = 4π · 25.', '= 100π ≈ 314,16 cm².'] },
          { problem: 'Wie groß ist das Volumen eines Kegels mit r = 3 cm und h = 4 cm?', solution: '12π ≈ 37,70 cm³', steps: ['V = 1/3 · π · 9 · 4.', '= 12π ≈ 37,70 cm³.'] },
          { problem: 'Eine quadratische Pyramide hat die Grundkante 6 cm und die Höhe 5 cm. Wie groß ist ihr Volumen?', solution: '60 cm³', steps: ['G = 36 cm².', 'V = 1/3 · 36 · 5 = 60 cm³.'] },
        ],
      },
    },
  ],
};
