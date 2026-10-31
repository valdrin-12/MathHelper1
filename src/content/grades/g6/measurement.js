// Grade 6 · Theme 6: Measuring geometric quantities (January–February)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g6-measurement',
  i18n: {
    al: { title: 'Matja e madhësive gjeometrike', description: 'Njësitë e gjatësisë, sipërfaqes dhe vëllimit dhe shndërrimet ndërmjet tyre.' },
    en: { title: 'Measuring length, area and volume', description: 'Units of length, area and volume and how to convert between them.' },
    de: { title: 'Längen, Flächen und Volumen messen', description: 'Einheiten für Länge, Flächeninhalt und Volumen und das Umrechnen zwischen ihnen.' },
  },
  lessons: [
    // ───────── 1. Units of length
    {
      slug: 'g6-measurement-length-units',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Njësia', 'Unit', 'Einheit'), cells: ['km', 'm', 'dm', 'cm', 'mm'] },
          { head: alt('në m', 'in m', 'in m'), cells: [1000, 1, 0.1, 0.01, 0.001] },
          { head: '→', cells: ['× 1 000', '× 10', '× 10', '× 10', ''] },
        ],
        caption: alt('Nga një njësi më e madhe te më e vogla shumëzojmë; anasjelltas pjesëtojmë.', 'From a larger unit to a smaller one we multiply; the other way we divide.', 'Von einer größeren zu einer kleineren Einheit multipliziert man, umgekehrt dividiert man.'),
        alt: alt('Tabela e njësive të gjatësisë: 1 km = 1 000 m, 1 m = 10 dm = 100 cm = 1 000 mm.', 'Table of length units: 1 km = 1 000 m, 1 m = 10 dm = 100 cm = 1 000 mm.', 'Tabelle der Längeneinheiten: 1 km = 1 000 m, 1 m = 10 dm = 100 cm = 1 000 mm.'),
      }],
      answers: {
        examples: [[['3.2 * 100', 320]], [['2500 / 1000', 2.5]]],
        practice: [[['4.5 * 1000', 4500]], [['75 / 10', 7.5]], [['4 * 1.2 * 100', 480]]],
      },
      al: {
        title: 'Njësitë e gjatësisë',
        objectives: ['Të njihni njësitë km, m, dm, cm dhe mm.', 'Të shndërroni gjatësi nga një njësi në tjetrën.'],
        theory: 'Njësia bazë e gjatësisë është metri (m). Për largësi të mëdha përdorim kilometrin: 1 km = 1 000 m. Për gjatësi të vogla: 1 m = 10 dm = 100 cm = 1 000 mm.\n\nNdërmjet dm, cm dhe mm faktori është 10: 1 dm = 10 cm, 1 cm = 10 mm.\n\nKur kalojmë në një njësi më të vogël, numri bëhet më i madh, prandaj shumëzojmë (3,2 m = 320 cm). Kur kalojmë në një njësi më të madhe, pjesëtojmë (2 500 m = 2,5 km).',
        keyPoints: ['1 km = 1 000 m', '1 m = 10 dm = 100 cm = 1 000 mm', 'Te njësia më e vogël: shumëzim; te më e madhja: pjesëtim.'],
        examples: [
          { example: 'Shndërroni 3,2 m në cm.', solution: '1 m = 100 cm, pra 3,2 · 100 = 320 cm.' },
          { example: 'Shndërroni 2 500 m në km.', solution: '1 km = 1 000 m, pra 2 500 : 1 000 = 2,5 km.' },
        ],
        commonMistakes: [
          { mistake: 'Pjesëtohet kur kalohet në njësi më të vogël (3,2 m = 0,032 cm).', fix: 'Njësi më e vogël → më shumë copa → numër më i madh.' },
        ],
        practice: [
          { problem: 'Shndërroni 4,5 km në m.', solution: '4 500 m', steps: ['1 km = 1 000 m.', '4,5 · 1 000 = 4 500 m.'] },
          { problem: 'Shndërroni 75 mm në cm.', solution: '7,5 cm', steps: ['1 cm = 10 mm.', '75 : 10 = 7,5 cm.'] },
          { problem: 'Katrori ka brinjë 1,2 m. Sa cm është perimetri?', solution: '480 cm', steps: ['1,2 m = 120 cm.', 'P = 4 · 120 = 480 cm.'] },
        ],
      },
      en: {
        title: 'Units of length',
        objectives: ['Know the units km, m, dm, cm and mm.', 'Convert lengths from one unit to another.'],
        theory: 'The basic unit of length is the metre (m). For long distances we use the kilometre: 1 km = 1 000 m. For short lengths: 1 m = 10 dm = 100 cm = 1 000 mm.\n\nBetween dm, cm and mm the factor is 10: 1 dm = 10 cm, 1 cm = 10 mm.\n\nGoing to a smaller unit makes the number bigger, so we multiply (3.2 m = 320 cm). Going to a larger unit, we divide (2 500 m = 2.5 km).',
        keyPoints: ['1 km = 1 000 m', '1 m = 10 dm = 100 cm = 1 000 mm', 'To a smaller unit: multiply; to a larger unit: divide.'],
        examples: [
          { example: 'Convert 3.2 m to cm.', solution: '1 m = 100 cm, so 3.2 · 100 = 320 cm.' },
          { example: 'Convert 2 500 m to km.', solution: '1 km = 1 000 m, so 2 500 ÷ 1 000 = 2.5 km.' },
        ],
        commonMistakes: [
          { mistake: 'Dividing when going to a smaller unit (3.2 m = 0.032 cm).', fix: 'Smaller unit → more pieces → bigger number.' },
        ],
        practice: [
          { problem: 'Convert 4.5 km to m.', solution: '4 500 m', steps: ['1 km = 1 000 m.', '4.5 · 1 000 = 4 500 m.'] },
          { problem: 'Convert 75 mm to cm.', solution: '7.5 cm', steps: ['1 cm = 10 mm.', '75 ÷ 10 = 7.5 cm.'] },
          { problem: 'A square has side 1.2 m. What is its perimeter in cm?', solution: '480 cm', steps: ['1.2 m = 120 cm.', 'P = 4 · 120 = 480 cm.'] },
        ],
      },
      de: {
        title: 'Längeneinheiten',
        objectives: ['Die Einheiten km, m, dm, cm und mm kennen.', 'Längen von einer Einheit in eine andere umrechnen.'],
        theory: 'Die Grundeinheit der Länge ist der Meter (m). Für große Entfernungen nimmt man den Kilometer: 1 km = 1 000 m. Für kleine Längen: 1 m = 10 dm = 100 cm = 1 000 mm.\n\nZwischen dm, cm und mm ist die Umrechnungszahl 10: 1 dm = 10 cm, 1 cm = 10 mm.\n\nBeim Umrechnen in eine kleinere Einheit wird die Zahl größer, man multipliziert also (3,2 m = 320 cm). In eine größere Einheit dividiert man (2 500 m = 2,5 km).',
        keyPoints: ['1 km = 1 000 m', '1 m = 10 dm = 100 cm = 1 000 mm', 'In die kleinere Einheit: multiplizieren; in die größere: dividieren.'],
        examples: [
          { example: 'Rechnen Sie 3,2 m in cm um.', solution: '1 m = 100 cm, also 3,2 · 100 = 320 cm.' },
          { example: 'Rechnen Sie 2 500 m in km um.', solution: '1 km = 1 000 m, also 2 500 : 1 000 = 2,5 km.' },
        ],
        commonMistakes: [
          { mistake: 'Beim Umrechnen in eine kleinere Einheit dividieren (3,2 m = 0,032 cm).', fix: 'Kleinere Einheit → mehr Teile → größere Zahl.' },
        ],
        practice: [
          { problem: 'Rechnen Sie 4,5 km in m um.', solution: '4 500 m', steps: ['1 km = 1 000 m.', '4,5 · 1 000 = 4 500 m.'] },
          { problem: 'Rechnen Sie 75 mm in cm um.', solution: '7,5 cm', steps: ['1 cm = 10 mm.', '75 : 10 = 7,5 cm.'] },
          { problem: 'Ein Quadrat hat die Seitenlänge 1,2 m. Wie viele cm beträgt der Umfang?', solution: '480 cm', steps: ['1,2 m = 120 cm.', 'u = 4 · 120 = 480 cm.'] },
        ],
      },
    },

    // ───────── 2. Units of area
    {
      slug: 'g6-measurement-area-units',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 10.5, yMin: -1.4, yMax: 10.5 }, grid: true, height: 210,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [10, 0], [10, 10], [0, 10]], color: 'primary' },
          { kind: 'polygon', points: [[0, 0], [1, 0], [1, 1], [0, 1]], fill: true, color: 'secondary' },
          { kind: 'label', at: [5, -0.8], text: '10 cm = 1 dm' },
          { kind: 'label', at: [5, 5], text: '1 dm² = 100 cm²', color: 'primary', size: 14 },
        ],
        caption: alt('Në një katror 1 dm × 1 dm hyjnë 10 · 10 = 100 katrorë 1 cm × 1 cm.', 'A 1 dm × 1 dm square holds 10 · 10 = 100 squares of 1 cm × 1 cm.', 'In ein Quadrat von 1 dm × 1 dm passen 10 · 10 = 100 Quadrate von 1 cm × 1 cm.'),
        alt: alt('Katror 10 me 10 i ndarë në 100 katrorë të vegjël; njëri prej tyre është 1 cm².', 'A 10 by 10 square divided into 100 small squares; one of them is 1 cm².', 'Ein 10-mal-10-Quadrat, unterteilt in 100 kleine Quadrate; eines davon ist 1 cm².'),
      }],
      answers: {
        examples: [[['12 * 8.5', 102]], [['3 * 100', 300]]],
        practice: [[['7 * 4', 28]], [['5 * 100', 500]], [['9 * 9', 81]]],
      },
      al: {
        title: 'Njësitë e sipërfaqes',
        objectives: ['Të njihni njësitë m², dm², cm² dhe shndërrimet ndërmjet tyre.', 'Të llogaritni sipërfaqen e drejtkëndëshit dhe katrorit.'],
        theory: 'Sipërfaqja tregon sa vend zë një figurë në rrafsh. E masim me katrorë: 1 cm² është sipërfaqja e katrorit me brinjë 1 cm. Njësitë: mm², cm², dm², m², km²; për toka përdorim edhe arin (1 a = 100 m²) dhe hektarin (1 ha = 10 000 m²).\n\nNdërmjet njësive fqinje faktori është 100, jo 10: 1 dm² = 10 cm · 10 cm = 100 cm²; 1 m² = 100 dm².\n\nSipërfaqja e drejtkëndëshit: S = a · b. Sipërfaqja e katrorit: S = a · a. Brinjët duhet të jenë në të njëjtën njësi.',
        keyPoints: ['1 m² = 100 dm²; 1 dm² = 100 cm²; 1 cm² = 100 mm²', 'Drejtkëndëshi: S = a · b; katrori: S = a · a', '1 a = 100 m²; 1 ha = 10 000 m²'],
        examples: [
          { example: 'Sa m² është një oborr 12 m × 8,5 m?', solution: 'S = 12 · 8,5 = 102 m².' },
          { example: 'Shndërroni 3 m² në dm².', solution: '1 m² = 100 dm², pra 3 · 100 = 300 dm².' },
        ],
        commonMistakes: [
          { mistake: '1 m² = 10 dm²', fix: 'Katrori 1 m × 1 m ka 10 · 10 = 100 katrorë 1 dm².' },
          { mistake: 'Shumëzohen brinjë në njësi të ndryshme (2 m · 50 cm = 100 m²).', fix: 'Shndërroni së pari: 2 m · 0,5 m = 1 m².' },
        ],
        practice: [
          { problem: 'Gjeni sipërfaqen e drejtkëndëshit 7 cm × 4 cm.', solution: '28 cm²', steps: ['S = a · b.', '7 · 4 = 28 cm².'] },
          { problem: 'Shndërroni 5 dm² në cm².', solution: '500 cm²', steps: ['1 dm² = 100 cm².', '5 · 100 = 500 cm².'] },
          { problem: 'Një dhomë katrore ka brinjë 9 m. Sa është sipërfaqja?', solution: '81 m²', steps: ['S = a · a.', '9 · 9 = 81 m².'] },
        ],
      },
      en: {
        title: 'Units of area',
        objectives: ['Know the units m², dm², cm² and how to convert between them.', 'Work out the area of rectangles and squares.'],
        theory: 'Area tells how much space a flat shape covers. We measure it with squares: 1 cm² is the area of a square with side 1 cm. Units: mm², cm², dm², m², km²; for land we also use the are (1 a = 100 m²) and the hectare (1 ha = 10 000 m²).\n\nBetween neighbouring units the factor is 100, not 10: 1 dm² = 10 cm · 10 cm = 100 cm²; 1 m² = 100 dm².\n\nArea of a rectangle: A = a · b. Area of a square: A = a · a. The sides must be in the same unit.',
        keyPoints: ['1 m² = 100 dm²; 1 dm² = 100 cm²; 1 cm² = 100 mm²', 'Rectangle: A = a · b; square: A = a · a', '1 a = 100 m²; 1 ha = 10 000 m²'],
        examples: [
          { example: 'How many m² is a 12 m × 8.5 m yard?', solution: 'A = 12 · 8.5 = 102 m².' },
          { example: 'Convert 3 m² to dm².', solution: '1 m² = 100 dm², so 3 · 100 = 300 dm².' },
        ],
        commonMistakes: [
          { mistake: '1 m² = 10 dm²', fix: 'A 1 m × 1 m square holds 10 · 10 = 100 squares of 1 dm².' },
          { mistake: 'Multiplying sides in different units (2 m · 50 cm = 100 m²).', fix: 'Convert first: 2 m · 0.5 m = 1 m².' },
        ],
        practice: [
          { problem: 'Find the area of a 7 cm × 4 cm rectangle.', solution: '28 cm²', steps: ['A = a · b.', '7 · 4 = 28 cm².'] },
          { problem: 'Convert 5 dm² to cm².', solution: '500 cm²', steps: ['1 dm² = 100 cm².', '5 · 100 = 500 cm².'] },
          { problem: 'A square room has side 9 m. What is its area?', solution: '81 m²', steps: ['A = a · a.', '9 · 9 = 81 m².'] },
        ],
      },
      de: {
        title: 'Flächeneinheiten',
        objectives: ['Die Einheiten m², dm², cm² und ihre Umrechnung kennen.', 'Den Flächeninhalt von Rechteck und Quadrat berechnen.'],
        theory: 'Der Flächeninhalt gibt an, wie viel Platz eine ebene Figur einnimmt. Man misst ihn mit Quadraten: 1 cm² ist der Flächeninhalt eines Quadrats mit 1 cm Seitenlänge. Einheiten: mm², cm², dm², m², km²; für Grundstücke auch Ar (1 a = 100 m²) und Hektar (1 ha = 10 000 m²).\n\nZwischen benachbarten Einheiten ist die Umrechnungszahl 100, nicht 10: 1 dm² = 10 cm · 10 cm = 100 cm²; 1 m² = 100 dm².\n\nFlächeninhalt des Rechtecks: A = a · b. Flächeninhalt des Quadrats: A = a · a. Die Seiten müssen in derselben Einheit angegeben sein.',
        keyPoints: ['1 m² = 100 dm²; 1 dm² = 100 cm²; 1 cm² = 100 mm²', 'Rechteck: A = a · b; Quadrat: A = a · a', '1 a = 100 m²; 1 ha = 10 000 m²'],
        examples: [
          { example: 'Wie viele m² hat ein Hof von 12 m × 8,5 m?', solution: 'A = 12 · 8,5 = 102 m².' },
          { example: 'Rechnen Sie 3 m² in dm² um.', solution: '1 m² = 100 dm², also 3 · 100 = 300 dm².' },
        ],
        commonMistakes: [
          { mistake: '1 m² = 10 dm²', fix: 'Ein Quadrat von 1 m × 1 m enthält 10 · 10 = 100 Quadrate von 1 dm².' },
          { mistake: 'Seiten in verschiedenen Einheiten multiplizieren (2 m · 50 cm = 100 m²).', fix: 'Zuerst umrechnen: 2 m · 0,5 m = 1 m².' },
        ],
        practice: [
          { problem: 'Berechnen Sie den Flächeninhalt eines Rechtecks von 7 cm × 4 cm.', solution: '28 cm²', steps: ['A = a · b.', '7 · 4 = 28 cm².'] },
          { problem: 'Rechnen Sie 5 dm² in cm² um.', solution: '500 cm²', steps: ['1 dm² = 100 cm².', '5 · 100 = 500 cm².'] },
          { problem: 'Ein quadratisches Zimmer hat die Seitenlänge 9 m. Wie groß ist sein Flächeninhalt?', solution: '81 m²', steps: ['A = a · a.', '9 · 9 = 81 m².'] },
        ],
      },
    },

    // ───────── 3. Units of volume
    {
      slug: 'g6-measurement-volume-units',
      visuals: [{
        type: 'solid', kind: 'cuboid', a: 4, b: 3, c: 2, labels: { a: '4 cm', b: '3 cm', c: '2 cm' },
        caption: alt('V = 4 · 3 · 2 = 24 cm³', 'V = 4 · 3 · 2 = 24 cm³', 'V = 4 · 3 · 2 = 24 cm³'),
        alt: alt('Kuboid me përmasa 4 cm, 3 cm dhe 2 cm.', 'A cuboid measuring 4 cm, 3 cm and 2 cm.', 'Ein Quader mit 4 cm, 3 cm und 2 cm.'),
      }],
      answers: {
        examples: [[['4 * 3 * 2', 24]], [['2.5 * 1000', 2500]]],
        practice: [[['50 * 30 * 40 / 1000', 60]], [['5 * 5 * 5', 125]], [['3 * 1000', 3000]]],
      },
      al: {
        title: 'Njësitë e vëllimit',
        objectives: ['Të njihni njësitë cm³, dm³, m³ dhe litrin.', 'Të llogaritni vëllimin e kuboidit dhe kubit.'],
        theory: 'Vëllimi tregon sa vend zë një trup në hapësirë. E masim me kube: 1 cm³ është vëllimi i kubit me brinjë 1 cm. Njësitë: mm³, cm³, dm³, m³.\n\nNdërmjet njësive fqinje faktori është 1 000: 1 dm³ = 10 · 10 · 10 cm³ = 1 000 cm³; 1 m³ = 1 000 dm³. Për lëngje përdorim litrin: 1 l = 1 dm³ = 1 000 cm³ (1 ml = 1 cm³).\n\nVëllimi i kuboidit: V = a · b · c (gjatësia · gjerësia · lartësia). Vëllimi i kubit: V = a · a · a.',
        keyPoints: ['1 m³ = 1 000 dm³; 1 dm³ = 1 000 cm³', '1 l = 1 dm³ = 1 000 cm³ = 1 000 ml', 'Kuboidi: V = a · b · c; kubi: V = a · a · a'],
        examples: [
          { example: 'Sa është vëllimi i kuboidit 4 cm × 3 cm × 2 cm?', solution: 'V = 4 · 3 · 2 = 24 cm³.' },
          { example: 'Sa cm³ janë 2,5 litra?', solution: '1 l = 1 000 cm³, pra 2,5 · 1 000 = 2 500 cm³.' },
        ],
        commonMistakes: [
          { mistake: '1 dm³ = 100 cm³', fix: 'Te vëllimi shumëzojmë tri herë me 10: 10 · 10 · 10 = 1 000.' },
        ],
        practice: [
          { problem: 'Një akuarium ka përmasa 50 cm × 30 cm × 40 cm. Sa litra ujë nxë?', solution: '60 litra', steps: ['V = 50 · 30 · 40 = 60 000 cm³.', '60 000 : 1 000 = 60 l.'] },
          { problem: 'Sa është vëllimi i kubit me brinjë 5 cm?', solution: '125 cm³', steps: ['V = a · a · a.', '5 · 5 · 5 = 125 cm³.'] },
          { problem: 'Shndërroni 3 m³ në dm³.', solution: '3 000 dm³', steps: ['1 m³ = 1 000 dm³.', '3 · 1 000 = 3 000 dm³.'] },
        ],
      },
      en: {
        title: 'Units of volume',
        objectives: ['Know the units cm³, dm³, m³ and the litre.', 'Work out the volume of cuboids and cubes.'],
        theory: 'Volume tells how much space a solid takes up. We measure it with cubes: 1 cm³ is the volume of a cube with edge 1 cm. Units: mm³, cm³, dm³, m³.\n\nBetween neighbouring units the factor is 1 000: 1 dm³ = 10 · 10 · 10 cm³ = 1 000 cm³; 1 m³ = 1 000 dm³. For liquids we use the litre: 1 l = 1 dm³ = 1 000 cm³ (1 ml = 1 cm³).\n\nVolume of a cuboid: V = a · b · c (length · width · height). Volume of a cube: V = a · a · a.',
        keyPoints: ['1 m³ = 1 000 dm³; 1 dm³ = 1 000 cm³', '1 l = 1 dm³ = 1 000 cm³ = 1 000 ml', 'Cuboid: V = a · b · c; cube: V = a · a · a'],
        examples: [
          { example: 'What is the volume of a 4 cm × 3 cm × 2 cm cuboid?', solution: 'V = 4 · 3 · 2 = 24 cm³.' },
          { example: 'How many cm³ are 2.5 litres?', solution: '1 l = 1 000 cm³, so 2.5 · 1 000 = 2 500 cm³.' },
        ],
        commonMistakes: [
          { mistake: '1 dm³ = 100 cm³', fix: 'For volume we multiply by 10 three times: 10 · 10 · 10 = 1 000.' },
        ],
        practice: [
          { problem: 'A fish tank measures 50 cm × 30 cm × 40 cm. How many litres of water does it hold?', solution: '60 litres', steps: ['V = 50 · 30 · 40 = 60 000 cm³.', '60 000 ÷ 1 000 = 60 l.'] },
          { problem: 'What is the volume of a cube with edge 5 cm?', solution: '125 cm³', steps: ['V = a · a · a.', '5 · 5 · 5 = 125 cm³.'] },
          { problem: 'Convert 3 m³ to dm³.', solution: '3 000 dm³', steps: ['1 m³ = 1 000 dm³.', '3 · 1 000 = 3 000 dm³.'] },
        ],
      },
      de: {
        title: 'Volumeneinheiten',
        objectives: ['Die Einheiten cm³, dm³, m³ und den Liter kennen.', 'Das Volumen von Quader und Würfel berechnen.'],
        theory: 'Das Volumen gibt an, wie viel Raum ein Körper einnimmt. Man misst es mit Würfeln: 1 cm³ ist das Volumen eines Würfels mit 1 cm Kantenlänge. Einheiten: mm³, cm³, dm³, m³.\n\nZwischen benachbarten Einheiten ist die Umrechnungszahl 1 000: 1 dm³ = 10 · 10 · 10 cm³ = 1 000 cm³; 1 m³ = 1 000 dm³. Für Flüssigkeiten nimmt man den Liter: 1 l = 1 dm³ = 1 000 cm³ (1 ml = 1 cm³).\n\nVolumen des Quaders: V = a · b · c (Länge · Breite · Höhe). Volumen des Würfels: V = a · a · a.',
        keyPoints: ['1 m³ = 1 000 dm³; 1 dm³ = 1 000 cm³', '1 l = 1 dm³ = 1 000 cm³ = 1 000 ml', 'Quader: V = a · b · c; Würfel: V = a · a · a'],
        examples: [
          { example: 'Wie groß ist das Volumen eines Quaders von 4 cm × 3 cm × 2 cm?', solution: 'V = 4 · 3 · 2 = 24 cm³.' },
          { example: 'Wie viele cm³ sind 2,5 Liter?', solution: '1 l = 1 000 cm³, also 2,5 · 1 000 = 2 500 cm³.' },
        ],
        commonMistakes: [
          { mistake: '1 dm³ = 100 cm³', fix: 'Beim Volumen multipliziert man dreimal mit 10: 10 · 10 · 10 = 1 000.' },
        ],
        practice: [
          { problem: 'Ein Aquarium ist 50 cm × 30 cm × 40 cm groß. Wie viele Liter Wasser passen hinein?', solution: '60 Liter', steps: ['V = 50 · 30 · 40 = 60 000 cm³.', '60 000 : 1 000 = 60 l.'] },
          { problem: 'Wie groß ist das Volumen eines Würfels mit 5 cm Kantenlänge?', solution: '125 cm³', steps: ['V = a · a · a.', '5 · 5 · 5 = 125 cm³.'] },
          { problem: 'Rechnen Sie 3 m³ in dm³ um.', solution: '3 000 dm³', steps: ['1 m³ = 1 000 dm³.', '3 · 1 000 = 3 000 dm³.'] },
        ],
      },
    },

    // ───────── 4. Conversions
    {
      slug: 'g6-measurement-conversions',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '', cells: [alt('gjatësi', 'length', 'Länge'), alt('sipërfaqe', 'area', 'Fläche'), alt('vëllim', 'volume', 'Volumen')] },
          { head: alt('faktori', 'factor', 'Faktor'), cells: ['10', '100', '1 000'] },
          { head: alt('shembull', 'example', 'Beispiel'), cells: ['1 m = 10 dm', '1 m² = 100 dm²', '1 m³ = 1 000 dm³'] },
        ],
        caption: alt('Fuqia e njësisë (1, ², ³) tregon sa zero ka faktori.', 'The power of the unit (1, ², ³) tells how many zeros the factor has.', 'Die Hochzahl der Einheit (1, ², ³) gibt an, wie viele Nullen die Umrechnungszahl hat.'),
        alt: alt('Faktorët ndërmjet njësive fqinje: gjatësi 10, sipërfaqe 100, vëllim 1 000.', 'Factors between neighbouring units: length 10, area 100, volume 1 000.', 'Umrechnungszahlen zwischen benachbarten Einheiten: Länge 10, Fläche 100, Volumen 1 000.'),
      }],
      answers: {
        examples: [[['3 * 100 + 25', 325]], [['4.6 * 100 > 450', true]]],
        practice: [[['2 + 30 / 100', 2.3]], [['0.75 * 1000 + 250', 1000]], [['1500 / 1000', 1.5]]],
      },
      al: {
        title: 'Shndërrimet',
        objectives: ['Të shndërroni madhësi të shkruara me dy njësi në një njësi.', 'Të krahasoni madhësi të dhëna në njësi të ndryshme.'],
        theory: 'Faktori ndërmjet njësive fqinje varet nga lloji i madhësisë: te gjatësia 10, te sipërfaqja 100, te vëllimi 1 000. Fuqia e njësisë (m, m², m³) tregon sa herë përsëritet faktori 10.\n\nMadhësitë si 3 m 25 cm i shkruajmë në një njësi: 3 m 25 cm = 300 cm + 25 cm = 325 cm = 3,25 m.\n\nPër të krahasuar ose për të mbledhur madhësi, i sjellim së pari në të njëjtën njësi: 4,6 m dhe 450 cm → 460 cm dhe 450 cm.',
        keyPoints: ['Gjatësi × 10, sipërfaqe × 100, vëllim × 1 000 (ndërmjet njësive fqinje).', 'Para krahasimit ose mbledhjes: e njëjta njësi.', '3 m 25 cm = 3,25 m'],
        examples: [
          { example: 'Shkruani 3 m 25 cm në cm dhe në m.', solution: '3 m = 300 cm, pra 325 cm = 3,25 m.' },
          { example: 'Cila është më e gjatë: 4,6 m apo 450 cm?', solution: '4,6 m = 460 cm > 450 cm, pra 4,6 m.' },
        ],
        commonMistakes: [
          { mistake: '3 m 5 cm = 3,5 m', fix: '5 cm janë 5 të qindta e metrit: 3 m 5 cm = 3,05 m.' },
          { mistake: 'Përdoret faktori 10 edhe për m² ose m³.', fix: 'Shikoni fuqinë e njësisë: ² → 100, ³ → 1 000.' },
        ],
        practice: [
          { problem: 'Shkruani 2 m² 30 dm² në m².', solution: '2,3 m²', steps: ['30 dm² = 30 : 100 = 0,3 m².', '2 + 0,3 = 2,3 m².'] },
          { problem: 'Llogaritni 0,75 km + 250 m në metra.', solution: '1 000 m (= 1 km)', steps: ['0,75 km = 750 m.', '750 + 250 = 1 000 m.'] },
          { problem: 'Sa litra janë 1 500 cm³?', solution: '1,5 l', steps: ['1 l = 1 000 cm³.', '1 500 : 1 000 = 1,5 l.'] },
        ],
      },
      en: {
        title: 'Conversions',
        objectives: ['Write amounts given in two units as one unit.', 'Compare amounts given in different units.'],
        theory: 'The factor between neighbouring units depends on the kind of quantity: 10 for length, 100 for area, 1 000 for volume. The power of the unit (m, m², m³) tells how many times the factor 10 repeats.\n\nAmounts like 3 m 25 cm are written in one unit: 3 m 25 cm = 300 cm + 25 cm = 325 cm = 3.25 m.\n\nTo compare or add amounts, first bring them to the same unit: 4.6 m and 450 cm → 460 cm and 450 cm.',
        keyPoints: ['Length × 10, area × 100, volume × 1 000 (between neighbouring units).', 'Before comparing or adding: same unit.', '3 m 25 cm = 3.25 m'],
        examples: [
          { example: 'Write 3 m 25 cm in cm and in m.', solution: '3 m = 300 cm, so 325 cm = 3.25 m.' },
          { example: 'Which is longer: 4.6 m or 450 cm?', solution: '4.6 m = 460 cm > 450 cm, so 4.6 m.' },
        ],
        commonMistakes: [
          { mistake: '3 m 5 cm = 3.5 m', fix: '5 cm is 5 hundredths of a metre: 3 m 5 cm = 3.05 m.' },
          { mistake: 'Using the factor 10 for m² or m³ as well.', fix: 'Look at the power of the unit: ² → 100, ³ → 1 000.' },
        ],
        practice: [
          { problem: 'Write 2 m² 30 dm² in m².', solution: '2.3 m²', steps: ['30 dm² = 30 ÷ 100 = 0.3 m².', '2 + 0.3 = 2.3 m².'] },
          { problem: 'Work out 0.75 km + 250 m in metres.', solution: '1 000 m (= 1 km)', steps: ['0.75 km = 750 m.', '750 + 250 = 1 000 m.'] },
          { problem: 'How many litres are 1 500 cm³?', solution: '1.5 l', steps: ['1 l = 1 000 cm³.', '1 500 ÷ 1 000 = 1.5 l.'] },
        ],
      },
      de: {
        title: 'Umrechnen',
        objectives: ['Größen mit zwei Einheiten in eine Einheit umschreiben.', 'Größen in verschiedenen Einheiten vergleichen.'],
        theory: 'Die Umrechnungszahl zwischen benachbarten Einheiten hängt von der Größenart ab: bei Längen 10, bei Flächen 100, bei Volumen 1 000. Die Hochzahl der Einheit (m, m², m³) gibt an, wie oft der Faktor 10 vorkommt.\n\nGrößen wie 3 m 25 cm schreibt man in einer Einheit: 3 m 25 cm = 300 cm + 25 cm = 325 cm = 3,25 m.\n\nZum Vergleichen oder Addieren bringt man die Größen zuerst auf dieselbe Einheit: 4,6 m und 450 cm → 460 cm und 450 cm.',
        keyPoints: ['Länge × 10, Fläche × 100, Volumen × 1 000 (zwischen benachbarten Einheiten).', 'Vor dem Vergleichen oder Addieren: gleiche Einheit.', '3 m 25 cm = 3,25 m'],
        examples: [
          { example: 'Schreiben Sie 3 m 25 cm in cm und in m.', solution: '3 m = 300 cm, also 325 cm = 3,25 m.' },
          { example: 'Was ist länger: 4,6 m oder 450 cm?', solution: '4,6 m = 460 cm > 450 cm, also 4,6 m.' },
        ],
        commonMistakes: [
          { mistake: '3 m 5 cm = 3,5 m', fix: '5 cm sind 5 Hundertstel Meter: 3 m 5 cm = 3,05 m.' },
          { mistake: 'Auch bei m² oder m³ mit 10 umrechnen.', fix: 'Auf die Hochzahl achten: ² → 100, ³ → 1 000.' },
        ],
        practice: [
          { problem: 'Schreiben Sie 2 m² 30 dm² in m².', solution: '2,3 m²', steps: ['30 dm² = 30 : 100 = 0,3 m².', '2 + 0,3 = 2,3 m².'] },
          { problem: 'Berechnen Sie 0,75 km + 250 m in Metern.', solution: '1 000 m (= 1 km)', steps: ['0,75 km = 750 m.', '750 + 250 = 1 000 m.'] },
          { problem: 'Wie viele Liter sind 1 500 cm³?', solution: '1,5 l', steps: ['1 l = 1 000 cm³.', '1 500 : 1 000 = 1,5 l.'] },
        ],
      },
    },
  ],
};
