// Grade 10 · Theme 7: Plane geometry (February–March)
const alt = (al, en, de) => ({ al, en, de });
const SEMI = Array.from({ length: 19 }, (_, i) => {
  const t = (-90 + 10 * i) * (Math.PI / 180);
  return [Math.round((10 + 3 * Math.cos(t)) * 1000) / 1000, Math.round((3 + 3 * Math.sin(t)) * 1000) / 1000];
});

export default {
  id: 'g10-plane-geometry',
  i18n: {
    al: { title: 'Gjeometria në plan', description: 'Matjet dhe njësitë, azimutet, sipërfaqet e figurave të përbëra dhe shndërrimet në plan.' },
    en: { title: 'Plane geometry', description: 'Measures and units, bearings, areas of composite shapes and transformations.' },
    de: { title: 'Ebene Geometrie', description: 'Maße und Einheiten, Kurswinkel, Flächen zusammengesetzter Figuren und Abbildungen.' },
  },
  lessons: [
    // ───────── 1. Measuring
    {
      slug: 'g10-plane-geometry-measuring',
      visuals: [{
        type: 'geoFigure', view: { xMin: -3, xMax: 3.5, yMin: -2.8, yMax: 3.4 }, height: 220,
        shapes: [
          { kind: 'segment', from: [0, 0], to: [0, 3], color: 'muted', arrow: true },
          { kind: 'label', at: [0.3, 3.1], text: alt('V', 'N', 'N') },
          { kind: 'segment', from: [0, 0], to: [2.598, 1.5], color: 'primary', arrow: true },
          { kind: 'angle', vertex: [0, 0], from: [0, 3], to: [2.598, 1.5], label: '060°', color: 'secondary', r: 40 },
          { kind: 'segment', from: [0, 0], to: [-2.165, -1.25], color: 'success', dashed: true },
          { kind: 'point', at: [0, 0], label: 'A', labelPos: 'sw' },
          { kind: 'point', at: [2.598, 1.5], label: 'B', labelPos: 'e' },
        ],
        caption: alt('Azimuti matet nga veriu në drejtim të akrepave: B nga A është 060°; azimuti i kthimit 060° + 180° = 240°.', 'A bearing is measured clockwise from north: B from A is 060°; the back bearing is 060° + 180° = 240°.', 'Ein Kurswinkel wird von Norden im Uhrzeigersinn gemessen: B von A aus 060°; Gegenkurs 060° + 180° = 240°.'),
        alt: alt('Shigjeta e veriut dhe drejtimi nga A te B me kënd 060°.', 'The north arrow and the direction from A to B at 060°.', 'Nordpfeil und die Richtung von A nach B unter 060°.'),
      }],
      answers: {
        examples: [[['2.4 * 10000', 24000]], [['60 + 180', 240]]],
        practice: [[['5400 / 10000', 0.54]], [['0.75 * 1000', 750]], [['135 + 180', 315]]],
      },
      al: {
        title: 'Matjet, njësitë dhe azimutet',
        objectives: ['Të shndërroni njësitë e gjatësisë, sipërfaqes dhe vëllimit.', 'Të përdorni azimutet dhe azimutin e kthimit.'],
        theory: 'Njësitë e sipërfaqes dhe të vëllimit shndërrohen me katrorin dhe kubin e faktorit të gjatësisë: 1 m = 100 cm, pra 1 m² = 100² cm² = 10 000 cm² dhe 1 m³ = 1 000 000 cm³. 2,4 m² = 24 000 cm². 1 l = 1 dm³ = 1 000 cm³, pra 0,75 m³ = 750 l.\n\nAzimuti (drejtimi) matet nga veriu, në drejtim të akrepave të orës, dhe shkruhet me tri shifra: 060°.\n\nAzimuti i kthimit (nga B te A) ndryshon me 180°: 060° → 240°; 135° → 315°. Nëse shuma kalon 360°, zbritet 360°.',
        keyPoints: ['1 m² = 10 000 cm²;  1 m³ = 1 000 000 cm³', '1 m³ = 1 000 l', 'Azimuti i kthimit = azimuti ± 180°'],
        examples: [
          { example: 'Shndërroni 2,4 m² në cm².', solution: '2,4 · 10 000 = 24 000 cm².' },
          { example: 'Azimuti i B nga A është 060°. Sa është azimuti i A nga B?', solution: '060° + 180° = 240°.' },
        ],
        commonMistakes: [
          { mistake: '2,4 m² = 240 cm²', fix: 'Për sipërfaqe faktori është 100² = 10 000: 24 000 cm².' },
        ],
        practice: [
          { problem: 'Shndërroni 5 400 cm² në m².', solution: '0,54 m²', steps: ['Pjesëtojmë me 10 000.', '0,54 m².'] },
          { problem: 'Sa litra janë 0,75 m³?', solution: '750 l', steps: ['1 m³ = 1 000 l.', '0,75 · 1 000 = 750 l.'] },
          { problem: 'Azimuti është 135°. Sa është azimuti i kthimit?', solution: '315°', steps: ['135 + 180.', '= 315°.'] },
        ],
      },
      en: {
        title: 'Measures, units and bearings',
        objectives: ['Convert units of length, area and volume.', 'Use bearings and back bearings.'],
        theory: 'Units of area and volume convert with the square and cube of the length factor: 1 m = 100 cm, so 1 m² = 100² cm² = 10 000 cm² and 1 m³ = 1 000 000 cm³. 2.4 m² = 24 000 cm². 1 l = 1 dm³ = 1 000 cm³, so 0.75 m³ = 750 l.\n\nA bearing is measured from north, clockwise, and written with three digits: 060°.\n\nThe back bearing (from B to A) differs by 180°: 060° → 240°; 135° → 315°. If the sum goes past 360°, subtract 360°.',
        keyPoints: ['1 m² = 10 000 cm²;  1 m³ = 1 000 000 cm³', '1 m³ = 1 000 l', 'Back bearing = bearing ± 180°'],
        examples: [
          { example: 'Convert 2.4 m² to cm².', solution: '2.4 · 10 000 = 24 000 cm².' },
          { example: 'The bearing of B from A is 060°. What is the bearing of A from B?', solution: '060° + 180° = 240°.' },
        ],
        commonMistakes: [
          { mistake: '2.4 m² = 240 cm²', fix: 'For area the factor is 100² = 10 000: 24 000 cm².' },
        ],
        practice: [
          { problem: 'Convert 5 400 cm² to m².', solution: '0.54 m²', steps: ['Divide by 10 000.', '0.54 m².'] },
          { problem: 'How many litres are 0.75 m³?', solution: '750 l', steps: ['1 m³ = 1 000 l.', '0.75 · 1 000 = 750 l.'] },
          { problem: 'A bearing is 135°. What is the back bearing?', solution: '315°', steps: ['135 + 180.', '= 315°.'] },
        ],
      },
      de: {
        title: 'Maße, Einheiten und Kurswinkel',
        objectives: ['Längen-, Flächen- und Volumeneinheiten umrechnen.', 'Kurswinkel und Gegenkurs verwenden.'],
        theory: 'Flächen- und Volumeneinheiten rechnet man mit dem Quadrat bzw. Kubus des Längenfaktors um: 1 m = 100 cm, also 1 m² = 100² cm² = 10 000 cm² und 1 m³ = 1 000 000 cm³. 2,4 m² = 24 000 cm². 1 l = 1 dm³ = 1 000 cm³, also 0,75 m³ = 750 l.\n\nEin Kurswinkel wird von Norden im Uhrzeigersinn gemessen und dreistellig geschrieben: 060°.\n\nDer Gegenkurs (von B nach A) unterscheidet sich um 180°: 060° → 240°; 135° → 315°. Überschreitet die Summe 360°, zieht man 360° ab.',
        keyPoints: ['1 m² = 10 000 cm²;  1 m³ = 1 000 000 cm³', '1 m³ = 1 000 l', 'Gegenkurs = Kurs ± 180°'],
        examples: [
          { example: 'Rechnen Sie 2,4 m² in cm² um.', solution: '2,4 · 10 000 = 24 000 cm².' },
          { example: 'Der Kurs von A nach B ist 060°. Wie lautet der Kurs von B nach A?', solution: '060° + 180° = 240°.' },
        ],
        commonMistakes: [
          { mistake: '2,4 m² = 240 cm²', fix: 'Bei Flächen ist der Faktor 100² = 10 000: 24 000 cm².' },
        ],
        practice: [
          { problem: 'Rechnen Sie 5 400 cm² in m² um.', solution: '0,54 m²', steps: ['Durch 10 000 teilen.', '0,54 m².'] },
          { problem: 'Wie viele Liter sind 0,75 m³?', solution: '750 l', steps: ['1 m³ = 1 000 l.', '0,75 · 1 000 = 750 l.'] },
          { problem: 'Ein Kurs ist 135°. Wie lautet der Gegenkurs?', solution: '315°', steps: ['135 + 180.', '= 315°.'] },
        ],
      },
    },

    // ───────── 2. Area
    {
      slug: 'g10-plane-geometry-area',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 13.8, yMin: -0.9, yMax: 6.8 }, height: 190,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [10, 0], ...SEMI, [10, 6], [0, 6]], fill: true, color: 'primary' },
          { kind: 'segment', from: [10, 0], to: [10, 6], color: 'muted', dashed: true },
          { kind: 'label', at: [5, -0.5], text: '10 cm' }, { kind: 'label', at: [-0.4, 3], text: '6' },
        ],
        caption: alt('Drejtkëndëshi 10 × 6 me gjysmërreth me diametër 6: S = 60 + ½π · 3² ≈ 74,14 cm².', 'A 10 × 6 rectangle with a semicircle of diameter 6: A = 60 + ½π · 3² ≈ 74.14 cm².', 'Ein Rechteck 10 × 6 mit einem Halbkreis vom Durchmesser 6: A = 60 + ½π · 3² ≈ 74,14 cm².'),
        alt: alt('Figurë e përbërë: drejtkëndësh me gjysmërreth në anën e djathtë.', 'A composite shape: a rectangle with a semicircle on the right side.', 'Eine zusammengesetzte Figur: Rechteck mit einem Halbkreis rechts.'),
      }],
      answers: {
        examples: [[['pi * 7^2', 153.9, 0.05, '153.9']], [['10 * 6 + 0.5 * pi * 3^2', 74.14, 0.005, '74.14']]],
        practice: [[['pi * 5^2', 78.5, 0.05, '78.5']], [['(8 + 12) / 2 * 5', 50]], [['pi * (5^2 - 3^2)', 50.27, 0.005, '50.27']]],
      },
      al: {
        title: 'Sipërfaqet',
        objectives: ['Të njehsoni sipërfaqen e rrethit, trapezit dhe figurave të përbëra.', 'Të jepni përgjigje të sakta me π ose të përafërta.'],
        theory: 'Formulat kryesore: drejtkëndëshi ab; trekëndëshi ah/2; paralelogrami ah; trapezi (a + c)h/2; qarku πr²; sektori α/360° · πr².\n\nFigurat e përbëra ndahen në pjesë të njohura ose llogariten si "e madhja minus e vogla". Drejtkëndëshi 10 × 6 me gjysmërreth me diametër 6: 60 + ½ · π · 3² ≈ 74,14 cm². Unaza ndërmjet dy rrathëve: π(R² − r²).\n\nPërgjigja e saktë lihet me π (49π cm²); e përafërta jepet me numrin e kërkuar të dhjetoreve (≈ 153,9 cm²).',
        keyPoints: ['Qarku πr²;  trapezi (a + c)h/2', 'Figura të përbëra: mblidh ose zbrit pjesët', 'Unaza: π(R² − r²)'],
        examples: [
          { example: 'Gjeni sipërfaqen e qarkut me rreze 7 cm.', solution: '49π ≈ 153,9 cm².' },
          { example: 'Gjeni sipërfaqen e drejtkëndëshit 10 × 6 cm me gjysmërreth me diametër 6 cm në njërën anë.', solution: '60 + ½π · 9 ≈ 60 + 14,14 = 74,14 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Te gjysmërrethi me diametër 6 përdoret r = 6.', fix: 'Rrezja është gjysma e diametrit: r = 3.' },
        ],
        practice: [
          { problem: 'Gjeni sipërfaqen e qarkut me diametër 10 cm.', solution: '25π ≈ 78,5 cm²', steps: ['r = 5.', 'π · 25 ≈ 78,5 cm².'] },
          { problem: 'Trapezi ka bazat 8 dhe 12 cm dhe lartësinë 5 cm. Gjeni sipërfaqen.', solution: '50 cm²', steps: ['(8 + 12)/2 = 10.', '10 · 5 = 50 cm².'] },
          { problem: 'Gjeni sipërfaqen e unazës me R = 5 cm dhe r = 3 cm.', solution: '16π ≈ 50,27 cm²', steps: ['π(25 − 9) = 16π.', '≈ 50,27 cm².'] },
        ],
      },
      en: {
        title: 'Area',
        objectives: ['Work out the area of circles, trapeziums and composite shapes.', 'Give exact answers with π or rounded answers.'],
        theory: 'Main formulas: rectangle ab; triangle ah/2; parallelogram ah; trapezium (a + c)h/2; circle πr²; sector α/360° · πr².\n\nComposite shapes are split into known parts or worked out as "big minus small". A 10 × 6 rectangle with a semicircle of diameter 6: 60 + ½ · π · 3² ≈ 74.14 cm². A ring between two circles: π(R² − r²).\n\nThe exact answer is left with π (49π cm²); a rounded answer is given to the required decimal places (≈ 153.9 cm²).',
        keyPoints: ['Circle πr²;  trapezium (a + c)h/2', 'Composite shapes: add or subtract parts', 'Ring: π(R² − r²)'],
        examples: [
          { example: 'Find the area of a circle with radius 7 cm.', solution: '49π ≈ 153.9 cm².' },
          { example: 'Find the area of a 10 × 6 cm rectangle with a semicircle of diameter 6 cm on one side.', solution: '60 + ½π · 9 ≈ 60 + 14.14 = 74.14 cm².' },
        ],
        commonMistakes: [
          { mistake: 'For a semicircle of diameter 6, using r = 6.', fix: 'The radius is half the diameter: r = 3.' },
        ],
        practice: [
          { problem: 'Find the area of a circle with diameter 10 cm.', solution: '25π ≈ 78.5 cm²', steps: ['r = 5.', 'π · 25 ≈ 78.5 cm².'] },
          { problem: 'A trapezium has parallel sides 8 and 12 cm and height 5 cm. Find its area.', solution: '50 cm²', steps: ['(8 + 12)/2 = 10.', '10 · 5 = 50 cm².'] },
          { problem: 'Find the area of a ring with R = 5 cm and r = 3 cm.', solution: '16π ≈ 50.27 cm²', steps: ['π(25 − 9) = 16π.', '≈ 50.27 cm².'] },
        ],
      },
      de: {
        title: 'Flächeninhalte',
        objectives: ['Flächen von Kreis, Trapez und zusammengesetzten Figuren berechnen.', 'Exakte Ergebnisse mit π oder gerundete angeben.'],
        theory: 'Wichtige Formeln: Rechteck ab; Dreieck g·h/2; Parallelogramm g·h; Trapez (a + c)h/2; Kreis πr²; Kreisausschnitt α/360° · πr².\n\nZusammengesetzte Figuren zerlegt man in bekannte Teile oder rechnet „groß minus klein“. Rechteck 10 × 6 mit Halbkreis vom Durchmesser 6: 60 + ½ · π · 3² ≈ 74,14 cm². Kreisring: π(R² − r²).\n\nExakt bleibt π stehen (49π cm²); gerundet gibt man die verlangten Dezimalen an (≈ 153,9 cm²).',
        keyPoints: ['Kreis πr²;  Trapez (a + c)h/2', 'Zusammengesetzt: Teile addieren oder subtrahieren', 'Kreisring: π(R² − r²)'],
        examples: [
          { example: 'Bestimmen Sie die Fläche eines Kreises mit Radius 7 cm.', solution: '49π ≈ 153,9 cm².' },
          { example: 'Bestimmen Sie die Fläche eines Rechtecks 10 × 6 cm mit einem Halbkreis vom Durchmesser 6 cm an einer Seite.', solution: '60 + ½π · 9 ≈ 60 + 14,14 = 74,14 cm².' },
        ],
        commonMistakes: [
          { mistake: 'Beim Halbkreis mit Durchmesser 6 r = 6 einsetzen.', fix: 'Der Radius ist der halbe Durchmesser: r = 3.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Fläche eines Kreises mit 10 cm Durchmesser.', solution: '25π ≈ 78,5 cm²', steps: ['r = 5.', 'π · 25 ≈ 78,5 cm².'] },
          { problem: 'Ein Trapez hat die parallelen Seiten 8 und 12 cm und die Höhe 5 cm. Bestimmen Sie die Fläche.', solution: '50 cm²', steps: ['(8 + 12)/2 = 10.', '10 · 5 = 50 cm².'] },
          { problem: 'Bestimmen Sie die Fläche eines Kreisrings mit R = 5 cm und r = 3 cm.', solution: '16π ≈ 50,27 cm²', steps: ['π(25 − 9) = 16π.', '≈ 50,27 cm².'] },
        ],
      },
    },

    // ───────── 3. Transformations
    {
      slug: 'g10-plane-geometry-transformations',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.5, xMax: 6.5, yMin: -3, yMax: 5 }, grid: true, axes: true, height: 230,
        shapes: [
          { kind: 'polygon', points: [[1, 1], [3, 1], [2, 4]], fill: true, color: 'primary' },
          { kind: 'polygon', points: [[3, -2], [5, -2], [4, 1]], fill: true, color: 'secondary', dashed: true },
          { kind: 'segment', from: [2, 4], to: [4, 1], color: 'muted', arrow: true },
        ],
        caption: alt('Zhvendosja me vektorin (2, −3): (1, 1) → (3, −2), (3, 1) → (5, −2), (2, 4) → (4, 1).', 'Translation by the vector (2, −3): (1, 1) → (3, −2), (3, 1) → (5, −2), (2, 4) → (4, 1).', 'Verschiebung um den Vektor (2 | −3): (1 | 1) → (3 | −2), (3 | 1) → (5 | −2), (2 | 4) → (4 | 1).'),
        alt: alt('Trekëndësh dhe shëmbëllimi i tij pas zhvendosjes 2 djathtas dhe 3 poshtë.', 'A triangle and its image after moving 2 right and 3 down.', 'Ein Dreieck und sein Bild nach Verschiebung um 2 nach rechts und 3 nach unten.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', [['1 - 4', -3], ['5 - 1', 4]]],
      },
      al: {
        title: 'Shndërrimet në plan',
        objectives: ['Të kryeni zhvendosje, pasqyrime, rrotullime dhe homoteti me koordinata.', 'Të përshkruani plotësisht një shndërrim të dhënë.'],
        theory: 'Zhvendosja me vektorin (a, b): (x, y) → (x + a, y + b). Pasqyrimi në boshtin y: (x, y) → (−x, y); në boshtin x: (x, y) → (x, −y). Rrotullimi 90° kundër akrepave rreth O: (x, y) → (−y, x); 180°: (x, y) → (−x, −y). Homotetia me qendër O dhe koeficient k: (x, y) → (kx, ky).\n\nPër të përshkruar plotësisht një shndërrim jepni: llojin dhe të dhënat e tij (vektori; boshti; qendra, këndi dhe kahu; qendra dhe koeficienti).\n\nZhvendosja, pasqyrimi dhe rrotullimi ruajnë madhësinë (figurat janë kongruente); homotetia e ndryshon madhësinë (figurat janë të ngjashme).',
        keyPoints: ['Zhvendosje: + vektori', 'Rrotullim 180° rreth O: (−x, −y)', 'Homoteti: (kx, ky)'],
        examples: [
          { example: 'Zhvendosni trekëndëshin (1, 1), (3, 1), (2, 4) me vektorin (2, −3).', solution: '(3, −2), (5, −2), (4, 1).' },
          { example: 'Rrotulloni pikën (2, 5) me 180° rreth origjinës.', solution: '(−2, −5).' },
        ],
        commonMistakes: [
          { mistake: 'Përshkrimi "rrotullim" pa qendër, kënd dhe kah.', fix: 'Rrotullimi përshkruhet plotësisht vetëm me qendrën, këndin dhe kahun.' },
        ],
        practice: [
          { problem: 'Pasqyroni (3, −1) në boshtin y.', solution: '(−3, −1)', steps: ['Ndryshon shenja e x.', '(−3, −1).'] },
          { problem: 'Homotetia me qendër O dhe k = 3: ku shkon (1, −2)?', solution: '(3, −6)', steps: ['Shumëzojmë me 3.', '(3, −6).'] },
          { problem: 'Cili vektor e çon (4, 1) në (1, 5)?', solution: '(−3, 4)', steps: ['1 − 4 = −3; 5 − 1 = 4.', '(−3, 4).'] },
        ],
      },
      en: {
        title: 'Transformations',
        objectives: ['Carry out translations, reflections, rotations and enlargements with coordinates.', 'Fully describe a given transformation.'],
        theory: 'Translation by the vector (a, b): (x, y) → (x + a, y + b). Reflection in the y-axis: (x, y) → (−x, y); in the x-axis: (x, y) → (x, −y). Rotation 90° anticlockwise about O: (x, y) → (−y, x); 180°: (x, y) → (−x, −y). Enlargement with centre O and scale factor k: (x, y) → (kx, ky).\n\nTo describe a transformation fully, give its type and its details (vector; mirror line; centre, angle and direction; centre and scale factor).\n\nTranslations, reflections and rotations keep the size (the shapes are congruent); an enlargement changes the size (the shapes are similar).',
        keyPoints: ['Translation: + the vector', 'Rotation 180° about O: (−x, −y)', 'Enlargement: (kx, ky)'],
        examples: [
          { example: 'Translate the triangle (1, 1), (3, 1), (2, 4) by the vector (2, −3).', solution: '(3, −2), (5, −2), (4, 1).' },
          { example: 'Rotate the point (2, 5) by 180° about the origin.', solution: '(−2, −5).' },
        ],
        commonMistakes: [
          { mistake: 'Describing it just as "a rotation" without centre, angle and direction.', fix: 'A rotation is fully described only with its centre, angle and direction.' },
        ],
        practice: [
          { problem: 'Reflect (3, −1) in the y-axis.', solution: '(−3, −1)', steps: ['The sign of x changes.', '(−3, −1).'] },
          { problem: 'Enlargement with centre O and k = 3: where does (1, −2) go?', solution: '(3, −6)', steps: ['Multiply by 3.', '(3, −6).'] },
          { problem: 'Which vector takes (4, 1) to (1, 5)?', solution: '(−3, 4)', steps: ['1 − 4 = −3; 5 − 1 = 4.', '(−3, 4).'] },
        ],
      },
      de: {
        title: 'Abbildungen in der Ebene',
        objectives: ['Verschiebungen, Spiegelungen, Drehungen und Streckungen mit Koordinaten ausführen.', 'Eine gegebene Abbildung vollständig beschreiben.'],
        theory: 'Verschiebung um (a | b): (x | y) → (x + a | y + b). Spiegelung an der y-Achse: (x | y) → (−x | y); an der x-Achse: (x | y) → (x | −y). Drehung um 90° gegen den Uhrzeigersinn um O: (x | y) → (−y | x); 180°: (x | y) → (−x | −y). Zentrische Streckung mit Zentrum O und Faktor k: (x | y) → (kx | ky).\n\nVollständige Beschreibung: Art der Abbildung und ihre Daten (Vektor; Spiegelachse; Zentrum, Winkel und Drehsinn; Zentrum und Faktor).\n\nVerschiebung, Spiegelung und Drehung erhalten die Größe (kongruente Figuren); die Streckung ändert sie (ähnliche Figuren).',
        keyPoints: ['Verschiebung: + Vektor', 'Drehung um 180° um O: (−x | −y)', 'Streckung: (kx | ky)'],
        examples: [
          { example: 'Verschieben Sie das Dreieck (1 | 1), (3 | 1), (2 | 4) um den Vektor (2 | −3).', solution: '(3 | −2), (5 | −2), (4 | 1).' },
          { example: 'Drehen Sie den Punkt (2 | 5) um 180° um den Ursprung.', solution: '(−2 | −5).' },
        ],
        commonMistakes: [
          { mistake: 'Nur „Drehung“ ohne Zentrum, Winkel und Drehsinn angeben.', fix: 'Eine Drehung ist erst mit Zentrum, Winkel und Drehsinn vollständig beschrieben.' },
        ],
        practice: [
          { problem: 'Spiegeln Sie (3 | −1) an der y-Achse.', solution: '(−3 | −1)', steps: ['Das Vorzeichen von x ändert sich.', '(−3 | −1).'] },
          { problem: 'Streckung mit Zentrum O und k = 3: Wohin wird (1 | −2) abgebildet?', solution: '(3 | −6)', steps: ['Mit 3 multiplizieren.', '(3 | −6).'] },
          { problem: 'Welcher Vektor bildet (4 | 1) auf (1 | 5) ab?', solution: '(−3 | 4)', steps: ['1 − 4 = −3; 5 − 1 = 4.', '(−3 | 4).'] },
        ],
      },
    },
  ],
};
