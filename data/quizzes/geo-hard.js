// Quiz set "geo-hard" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "geo-hard",
  "difficulty": "advanced",
  "icon": "⬢",
  "color": "#16A085",
  "i18n": {
    "al": {
      "title": "Gjeometri 3D & Teorema",
      "category": "Gjeometri",
      "duration": "15 min"
    },
    "en": {
      "title": "3D Geometry & Theorems",
      "category": "Geometry",
      "duration": "15 min"
    },
    "de": {
      "title": "3D-Geometrie & Sätze",
      "category": "Geometrie",
      "duration": "15 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Një sferë është brendashkruar në një kub me brinjë 6 cm (ajo prek të gjashtë faqet e kubit). Llogaritni vëllimin e sferës.",
        "options": [
          "216 cm³",
          "288π cm³",
          "36π cm³",
          "27π cm³"
        ],
        "explanation": "Diametri i sferës është i barabartë me brinjën e kubit, pra r = 6 : 2 = 3 cm. V = (4/3)πr³ = (4/3) × π × 27 = 36π cm³ ≈ 113,10 cm³ (rrumbullakuar në dy shifra pas presjes).",
        "hint": "Mendoni si lidhet diametri i sferës me brinjën e kubit, pastaj përdorni formulën e vëllimit të sferës.",
        "whyWrong": [
          "216 cm³ është vëllimi i kubit, jo i sferës.",
          "Keni marrë brinjën e kubit (6 cm) si rreze; ajo është diametri.",
          null,
          "Keni harruar faktorin 4/3 dhe keni llogaritur vetëm πr³."
        ]
      },
      "en": {
        "question": "A sphere is inscribed in a cube with edge 6 cm (it touches all six faces). Calculate the volume of the sphere.",
        "options": [
          "216 cm³",
          "288π cm³",
          "36π cm³",
          "27π cm³"
        ],
        "explanation": "The sphere's diameter equals the cube's edge, so r = 6 ÷ 2 = 3 cm. V = (4/3)πr³ = (4/3) × π × 27 = 36π cm³ ≈ 113.10 cm³ (rounded to two decimal places).",
        "hint": "Think about how the sphere's diameter relates to the cube's edge, then use the volume formula for a sphere.",
        "whyWrong": [
          "216 cm³ is the volume of the cube, not of the sphere.",
          "You took the cube's edge (6 cm) as the radius; it is the diameter.",
          null,
          "You forgot the factor 4/3 and computed only πr³."
        ]
      },
      "de": {
        "question": "Einem Würfel mit der Kantenlänge 6 cm ist eine Kugel einbeschrieben (sie berührt alle sechs Seitenflächen). Berechnen Sie das Volumen der Kugel.",
        "options": [
          "216 cm³",
          "288π cm³",
          "36π cm³",
          "27π cm³"
        ],
        "explanation": "Der Kugeldurchmesser ist gleich der Würfelkante, also r = 6 : 2 = 3 cm. V = (4/3)πr³ = (4/3) × π × 27 = 36π cm³ ≈ 113,10 cm³ (auf zwei Dezimalstellen gerundet).",
        "hint": "Überlegen Sie, wie der Kugeldurchmesser mit der Würfelkante zusammenhängt, und verwenden Sie dann die Formel für das Kugelvolumen.",
        "whyWrong": [
          "216 cm³ ist das Volumen des Würfels, nicht der Kugel.",
          "Sie haben die Würfelkante (6 cm) als Radius genommen; sie ist der Durchmesser.",
          null,
          "Der Faktor 4/3 fehlt; Sie haben nur πr³ berechnet."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Sipërfaqja e plotë e një kubi është 150 cm². Llogaritni vëllimin e kubit.",
        "options": [
          "25 cm³",
          "125 cm³",
          "15 625 cm³",
          "216 cm³"
        ],
        "explanation": "Kubi ka 6 faqe katrore të barabarta: 6a² = 150, pra a² = 25 dhe a = 5 cm. V = a³ = 5³ = 125 cm³.",
        "hint": "Fillimisht gjeni brinjën nga sipërfaqja e plotë 6a², pastaj llogaritni vëllimin.",
        "whyWrong": [
          "25 është a² (sipërfaqja e një faqeje); duhet të gjeni a dhe pastaj a³.",
          null,
          "Keni marrë 25 si brinjë dhe e keni ngritur në kub; 25 është a², jo a.",
          "Keni supozuar se brinja është 6 (numri i faqeve), në vend që të zgjidhni 6a² = 150."
        ]
      },
      "en": {
        "question": "The total surface area of a cube is 150 cm². Calculate the volume of the cube.",
        "options": [
          "25 cm³",
          "125 cm³",
          "15 625 cm³",
          "216 cm³"
        ],
        "explanation": "A cube has 6 equal square faces: 6a² = 150, so a² = 25 and a = 5 cm. V = a³ = 5³ = 125 cm³.",
        "hint": "First find the edge from the total surface area 6a², then compute the volume.",
        "whyWrong": [
          "25 is a² (the area of one face); you still need a and then a³.",
          null,
          "You took 25 as the edge and cubed it; 25 is a², not a.",
          "You assumed the edge is 6 (the number of faces) instead of solving 6a² = 150."
        ]
      },
      "de": {
        "question": "Der Oberflächeninhalt eines Würfels beträgt 150 cm². Berechnen Sie das Volumen des Würfels.",
        "options": [
          "25 cm³",
          "125 cm³",
          "15 625 cm³",
          "216 cm³"
        ],
        "explanation": "Ein Würfel hat 6 gleiche quadratische Seitenflächen: 6a² = 150, also a² = 25 und a = 5 cm. V = a³ = 5³ = 125 cm³.",
        "hint": "Bestimmen Sie zuerst die Kantenlänge aus dem Oberflächeninhalt 6a², dann das Volumen.",
        "whyWrong": [
          "25 ist a² (eine Seitenfläche); Sie brauchen noch a und dann a³.",
          null,
          "Sie haben 25 als Kantenlänge genommen und hoch 3 gerechnet; 25 ist a², nicht a.",
          "Sie haben die Kantenlänge 6 (Anzahl der Flächen) angenommen, statt 6a² = 150 zu lösen."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Një trekëndësh ka brinjët 6 cm, 7 cm dhe 10 cm. Çfarë trekëndëshi është ai sipas këndeve?",
        "options": [
          "Këndngushtë",
          "Kënddrejtë",
          "Këndgjerë",
          "Një trekëndësh i tillë nuk ekziston"
        ],
        "explanation": "Krahasoni katrorin e brinjës më të gjatë me shumën e katrorëve të dy brinjëve të tjera: 10² = 100 dhe 6² + 7² = 36 + 49 = 85. Meqë 100 > 85, këndi përballë brinjës 10 cm është më i madh se 90°, prandaj trekëndëshi është këndgjerë. (Trekëndëshi ekziston, sepse 6 + 7 = 13 > 10.)",
        "hint": "Krahasoni katrorin e brinjës më të gjatë me shumën e katrorëve të dy brinjëve të tjera.",
        "whyWrong": [
          "Për trekëndësh këndngushtë duhet 10² < 6² + 7², por 100 > 85.",
          "Do të ishte kënddrejtë vetëm nëse 6² + 7² = 10², por 85 ≠ 100.",
          null,
          "Trekëndëshi ekziston, sepse 6 + 7 = 13 > 10 (mosbarazimi i trekëndëshit plotësohet)."
        ]
      },
      "en": {
        "question": "A triangle has sides 6 cm, 7 cm and 10 cm. How is it classified by its angles?",
        "options": [
          "Acute",
          "Right",
          "Obtuse",
          "No such triangle exists"
        ],
        "explanation": "Compare the square of the longest side with the sum of the squares of the other two: 10² = 100 and 6² + 7² = 36 + 49 = 85. Since 100 > 85, the angle opposite the 10 cm side is greater than 90°, so the triangle is obtuse. (It exists, because 6 + 7 = 13 > 10.)",
        "hint": "Compare the square of the longest side with the sum of the squares of the other two sides.",
        "whyWrong": [
          "An acute triangle needs 10² < 6² + 7², but 100 > 85.",
          "It would be right-angled only if 6² + 7² = 10², but 85 ≠ 100.",
          null,
          "The triangle exists, because 6 + 7 = 13 > 10 (the triangle inequality holds)."
        ]
      },
      "de": {
        "question": "Ein Dreieck hat die Seitenlängen 6 cm, 7 cm und 10 cm. Um welche Dreiecksart handelt es sich nach den Winkeln?",
        "options": [
          "Spitzwinklig",
          "Rechtwinklig",
          "Stumpfwinklig",
          "Ein solches Dreieck existiert nicht"
        ],
        "explanation": "Vergleichen Sie das Quadrat der längsten Seite mit der Summe der Quadrate der beiden anderen: 10² = 100 und 6² + 7² = 36 + 49 = 85. Da 100 > 85, ist der Winkel gegenüber der 10-cm-Seite größer als 90°; das Dreieck ist stumpfwinklig. (Es existiert, denn 6 + 7 = 13 > 10.)",
        "hint": "Vergleichen Sie das Quadrat der längsten Seite mit der Summe der Quadrate der beiden anderen Seiten.",
        "whyWrong": [
          "Für ein spitzwinkliges Dreieck müsste 10² < 6² + 7² sein, aber 100 > 85.",
          "Rechtwinklig wäre es nur, wenn 6² + 7² = 10² gälte, aber 85 ≠ 100.",
          null,
          "Das Dreieck existiert, denn 6 + 7 = 13 > 10 (Dreiecksungleichung erfüllt)."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Një paralelepiped kënddrejtë ka përmasat 3 cm, 4 cm dhe 12 cm. Gjeni gjatësinë e diagonales hapësinore të tij.",
        "options": [
          "13 cm",
          "5 cm",
          "19 cm",
          "169 cm"
        ],
        "explanation": "Diagonalja hapësinore: d = √(a² + b² + c²) = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm. (Hap pas hapi: diagonalja e bazës është √(9 + 16) = 5 cm, pastaj √(5² + 12²) = 13 cm.)",
        "hint": "Zbatoni teoremën e Pitagorës dy herë: një herë për diagonalen e bazës dhe një herë në hapësirë.",
        "whyWrong": [
          null,
          "5 cm është vetëm diagonalja e bazës 3 × 4; mungon lartësia 12 cm.",
          "Keni mbledhur përmasat (3 + 4 + 12) në vend të katrorëve të tyre.",
          "169 është d²; keni harruar të nxirrni rrënjën katrore."
        ]
      },
      "en": {
        "question": "A cuboid measures 3 cm by 4 cm by 12 cm. Find the length of its space diagonal.",
        "options": [
          "13 cm",
          "5 cm",
          "19 cm",
          "169 cm"
        ],
        "explanation": "Space diagonal: d = √(a² + b² + c²) = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm. (Step by step: the base diagonal is √(9 + 16) = 5 cm, then √(5² + 12²) = 13 cm.)",
        "hint": "Apply the Pythagorean theorem twice: once for the base diagonal and once in space.",
        "whyWrong": [
          null,
          "5 cm is only the diagonal of the 3 × 4 base; the height 12 cm is missing.",
          "You added the dimensions (3 + 4 + 12) instead of their squares.",
          "169 is d²; you forgot to take the square root."
        ]
      },
      "de": {
        "question": "Ein Quader hat die Kantenlängen 3 cm, 4 cm und 12 cm. Bestimmen Sie die Länge seiner Raumdiagonale.",
        "options": [
          "13 cm",
          "5 cm",
          "19 cm",
          "169 cm"
        ],
        "explanation": "Raumdiagonale: d = √(a² + b² + c²) = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm. (Schrittweise: Die Diagonale der Grundfläche ist √(9 + 16) = 5 cm, dann √(5² + 12²) = 13 cm.)",
        "hint": "Wenden Sie den Satz des Pythagoras zweimal an: einmal für die Diagonale der Grundfläche und einmal räumlich.",
        "whyWrong": [
          null,
          "5 cm ist nur die Diagonale der Grundfläche 3 × 4; die Höhe 12 cm fehlt.",
          "Sie haben die Kantenlängen addiert (3 + 4 + 12) statt ihrer Quadrate.",
          "169 ist d²; Sie haben vergessen, die Wurzel zu ziehen."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Baza e një prizmi të drejtë është trekëndësh kënddrejtë me katete 6 cm dhe 8 cm. Lartësia e prizmit është 10 cm. Llogaritni vëllimin e prizmit.",
        "options": [
          "288 cm³",
          "480 cm³",
          "80 cm³",
          "240 cm³"
        ],
        "explanation": "Sipërfaqja e bazës: B = (6 × 8) / 2 = 24 cm². V = B × H = 24 × 10 = 240 cm³.",
        "hint": "Vëllimi i prizmit është sipërfaqja e bazës shumëzuar me lartësinë; baza këtu është trekëndësh.",
        "whyWrong": [
          "288 cm² është sipërfaqja e plotë e prizmit (2 × 24 + 24 × 10), jo vëllimi.",
          "Keni harruar 1/2 në sipërfaqen e bazës trekëndore.",
          "Keni shumëzuar me 1/3 si te piramida; prizmi nuk ka këtë faktor.",
          null
        ]
      },
      "en": {
        "question": "The base of a right prism is a right triangle with legs 6 cm and 8 cm. The prism's height is 10 cm. Calculate the volume of the prism.",
        "options": [
          "288 cm³",
          "480 cm³",
          "80 cm³",
          "240 cm³"
        ],
        "explanation": "Base area: B = (6 × 8) / 2 = 24 cm². V = B × H = 24 × 10 = 240 cm³.",
        "hint": "A prism's volume is base area times height; here the base is a triangle.",
        "whyWrong": [
          "288 cm² is the total surface area of the prism (2 × 24 + 24 × 10), not the volume.",
          "You forgot the 1/2 in the area of the triangular base.",
          "You multiplied by 1/3 as for a pyramid; a prism has no such factor.",
          null
        ]
      },
      "de": {
        "question": "Die Grundfläche eines geraden Prismas ist ein rechtwinkliges Dreieck mit den Katheten 6 cm und 8 cm. Die Höhe des Prismas beträgt 10 cm. Berechnen Sie das Volumen des Prismas.",
        "options": [
          "288 cm³",
          "480 cm³",
          "80 cm³",
          "240 cm³"
        ],
        "explanation": "Grundfläche: G = (6 × 8) / 2 = 24 cm². V = G × h = 24 × 10 = 240 cm³.",
        "hint": "Das Prismenvolumen ist Grundfläche mal Höhe; die Grundfläche ist hier ein Dreieck.",
        "whyWrong": [
          "288 cm² ist der Oberflächeninhalt des Prismas (2 × 24 + 24 × 10), nicht das Volumen.",
          "Sie haben beim dreieckigen Grundflächeninhalt den Faktor 1/2 vergessen.",
          "Sie haben wie bei einer Pyramide mit 1/3 multipliziert; beim Prisma gibt es diesen Faktor nicht.",
          null
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Një kon ka rreze të bazës r = 4 cm dhe lartësi h = 3 cm. Llogaritni sipërfaqen e plotë të konit.",
        "options": [
          "20π cm²",
          "36π cm²",
          "28π cm²",
          "16π cm²"
        ],
        "explanation": "Përftuesja: s = √(r² + h²) = √(16 + 9) = 5 cm. Sipërfaqja e plotë: S = πr² + πrs = π × 16 + π × 4 × 5 = 16π + 20π = 36π cm² ≈ 113,10 cm² (rrumbullakuar në dy shifra pas presjes).",
        "hint": "Gjeni përftuesen me teoremën e Pitagorës, pastaj mblidhni sipërfaqen e bazës dhe sipërfaqen anësore.",
        "whyWrong": [
          "20π cm² është vetëm sipërfaqja anësore; mungon baza πr².",
          null,
          "Keni përdorur lartësinë h = 3 cm në vend të përftueses s = 5 cm.",
          "16π është vetëm sipërfaqja e bazës (njëkohësisht edhe vlera e vëllimit (1/3)πr²h)."
        ]
      },
      "en": {
        "question": "A cone has base radius r = 4 cm and height h = 3 cm. Calculate the total surface area of the cone.",
        "options": [
          "20π cm²",
          "36π cm²",
          "28π cm²",
          "16π cm²"
        ],
        "explanation": "Slant height: l = √(r² + h²) = √(16 + 9) = 5 cm. Total surface area: S = πr² + πrl = π × 16 + π × 4 × 5 = 16π + 20π = 36π cm² ≈ 113.10 cm² (rounded to two decimal places).",
        "hint": "Find the slant height with the Pythagorean theorem, then add the base area and the lateral area.",
        "whyWrong": [
          "20π cm² is only the lateral surface; the base πr² is missing.",
          null,
          "You used the height h = 3 cm instead of the slant height l = 5 cm.",
          "16π is only the base area (and also the value of the volume (1/3)πr²h)."
        ]
      },
      "de": {
        "question": "Ein Kegel hat den Grundkreisradius r = 4 cm und die Höhe h = 3 cm. Berechnen Sie den Oberflächeninhalt des Kegels.",
        "options": [
          "20π cm²",
          "36π cm²",
          "28π cm²",
          "16π cm²"
        ],
        "explanation": "Mantellinie: s = √(r² + h²) = √(16 + 9) = 5 cm. Oberflächeninhalt: O = πr² + πrs = π × 16 + π × 4 × 5 = 16π + 20π = 36π cm² ≈ 113,10 cm² (auf zwei Dezimalstellen gerundet).",
        "hint": "Bestimmen Sie die Mantellinie mit dem Satz des Pythagoras und addieren Sie dann Grundfläche und Mantelfläche.",
        "whyWrong": [
          "20π cm² ist nur die Mantelfläche; die Grundfläche πr² fehlt.",
          null,
          "Sie haben die Höhe h = 3 cm statt der Mantellinie s = 5 cm verwendet.",
          "16π ist nur die Grundfläche (zugleich der Wert des Volumens (1/3)πr²h)."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Në trekëndëshin ABC, pika D ndodhet në brinjën AB dhe pika E në brinjën AC, ashtu që DE ∥ BC. Jepen AD = 4 cm, DB = 6 cm dhe AE = 6 cm. Gjeni gjatësinë e EC.",
        "options": [
          "8 cm",
          "4 cm",
          "9 cm",
          "15 cm"
        ],
        "explanation": "Sipas teoremës së Talesit, drejtëza paralele me BC i ndan brinjët në pjesë proporcionale: AD/DB = AE/EC. Pra 4/6 = 6/EC, prandaj EC = 6 × 6 : 4 = 9 cm.",
        "hint": "Shkruani proporcionin e segmenteve që formon drejtëza paralele DE në të dy brinjët.",
        "whyWrong": [
          "Keni shtuar të njëjtën diferencë (+2 cm) në vend që të përdorni proporcionin.",
          "Keni përmbysur raportin (AD/DB = EC/AE).",
          null,
          "15 cm është gjatësia e gjithë brinjës AC, jo e segmentit EC."
        ]
      },
      "en": {
        "question": "In triangle ABC, point D lies on side AB and point E on side AC so that DE ∥ BC. Given AD = 4 cm, DB = 6 cm and AE = 6 cm, find the length of EC.",
        "options": [
          "8 cm",
          "4 cm",
          "9 cm",
          "15 cm"
        ],
        "explanation": "By the intercept (Thales) theorem, a line parallel to BC divides the sides proportionally: AD/DB = AE/EC. So 4/6 = 6/EC, hence EC = 6 × 6 ÷ 4 = 9 cm.",
        "hint": "Write the proportion of the segments that the parallel line DE cuts off on the two sides.",
        "whyWrong": [
          "You added the same difference (+2 cm) instead of using a proportion.",
          "You inverted the ratio (AD/DB = EC/AE).",
          null,
          "15 cm is the length of the whole side AC, not of the segment EC."
        ]
      },
      "de": {
        "question": "Im Dreieck ABC liegt der Punkt D auf der Seite AB und der Punkt E auf der Seite AC, sodass DE ∥ BC gilt. Gegeben sind AD = 4 cm, DB = 6 cm und AE = 6 cm. Bestimmen Sie die Länge von EC.",
        "options": [
          "8 cm",
          "4 cm",
          "9 cm",
          "15 cm"
        ],
        "explanation": "Nach dem Strahlensatz teilt eine Parallele zu BC die Seiten im gleichen Verhältnis: AD/DB = AE/EC. Also 4/6 = 6/EC, somit EC = 6 × 6 : 4 = 9 cm.",
        "hint": "Stellen Sie die Verhältnisgleichung der Abschnitte auf, die die Parallele DE auf beiden Seiten bildet.",
        "whyWrong": [
          "Sie haben die gleiche Differenz (+2 cm) addiert, statt eine Verhältnisgleichung zu verwenden.",
          "Sie haben das Verhältnis umgedreht (AD/DB = EC/AE).",
          null,
          "15 cm ist die Länge der ganzen Seite AC, nicht des Abschnitts EC."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa diagonale ka një tetëkëndësh konveks?",
        "options": [
          "20",
          "40",
          "28",
          "5"
        ],
        "explanation": "Nga çdo kulm dalin n − 3 = 5 diagonale (jo te vetvetja dhe jo te dy kulmet fqinje). Për 8 kulme: 8 × 5 = 40, por çdo diagonale numërohet dy herë, pra d = n(n − 3)/2 = 8 × 5 : 2 = 20.",
        "hint": "Numëroni sa diagonale dalin nga një kulm dhe kini parasysh që çdo diagonale lidh dy kulme.",
        "whyWrong": [
          null,
          "Keni numëruar çdo diagonale dy herë; duhet pjesëtuar me 2.",
          "28 = 8 × 7 : 2 është numri i të gjitha segmenteve ndërmjet kulmeve, përfshirë 8 brinjët.",
          "5 është numri i diagonaleve nga një kulm i vetëm."
        ]
      },
      "en": {
        "question": "How many diagonals does a convex octagon have?",
        "options": [
          "20",
          "40",
          "28",
          "5"
        ],
        "explanation": "From each vertex, n − 3 = 5 diagonals start (not to itself and not to its two neighbours). For 8 vertices: 8 × 5 = 40, but each diagonal is counted twice, so d = n(n − 3)/2 = 8 × 5 ÷ 2 = 20.",
        "hint": "Count the diagonals from one vertex and remember that each diagonal joins two vertices.",
        "whyWrong": [
          null,
          "You counted every diagonal twice; divide by 2.",
          "28 = 8 × 7 ÷ 2 counts all segments between vertices, including the 8 sides.",
          "5 is the number of diagonals from a single vertex."
        ]
      },
      "de": {
        "question": "Wie viele Diagonalen hat ein konvexes Achteck?",
        "options": [
          "20",
          "40",
          "28",
          "5"
        ],
        "explanation": "Von jeder Ecke gehen n − 3 = 5 Diagonalen aus (nicht zu sich selbst und nicht zu den zwei Nachbarecken). Bei 8 Ecken: 8 × 5 = 40, aber jede Diagonale wird doppelt gezählt, also d = n(n − 3)/2 = 8 × 5 : 2 = 20.",
        "hint": "Zählen Sie die Diagonalen von einer Ecke aus und beachten Sie, dass jede Diagonale zwei Ecken verbindet.",
        "whyWrong": [
          null,
          "Sie haben jede Diagonale doppelt gezählt; teilen Sie durch 2.",
          "28 = 8 × 7 : 2 zählt alle Verbindungsstrecken der Ecken, einschließlich der 8 Seiten.",
          "5 ist die Anzahl der Diagonalen von einer einzigen Ecke aus."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Dy trupa të ngjashëm kanë vëllimet në raportin 8 : 27. Sa është raporti i sipërfaqeve të tyre?",
        "options": [
          "8 : 27",
          "4 : 9",
          "2 : 3",
          "64 : 729"
        ],
        "explanation": "Për trupa të ngjashëm me koeficient ngjashmërie k, vëllimet sillen si k³ dhe sipërfaqet si k². Nga k³ = 8/27 del k = 2/3, prandaj raporti i sipërfaqeve është k² = 4/9, d.m.th. 4 : 9.",
        "hint": "Gjeni së pari raportin e gjatësive (rrënjën kubike të raportit të vëllimeve), pastaj ngriteni në katror.",
        "whyWrong": [
          "Raporti i sipërfaqeve nuk është i njëjtë me raportin e vëllimeve.",
          null,
          "2 : 3 është raporti i gjatësive (k), jo i sipërfaqeve (k²).",
          "Keni ngritur në katror raportin e vëllimeve (k⁶) në vend të raportit të gjatësive."
        ]
      },
      "en": {
        "question": "Two similar solids have volumes in the ratio 8 : 27. What is the ratio of their surface areas?",
        "options": [
          "8 : 27",
          "4 : 9",
          "2 : 3",
          "64 : 729"
        ],
        "explanation": "For similar solids with scale factor k, volumes scale with k³ and surface areas with k². From k³ = 8/27 we get k = 2/3, so the surface area ratio is k² = 4/9, i.e. 4 : 9.",
        "hint": "First find the length ratio (the cube root of the volume ratio), then square it.",
        "whyWrong": [
          "The surface area ratio is not the same as the volume ratio.",
          null,
          "2 : 3 is the length ratio (k), not the area ratio (k²).",
          "You squared the volume ratio (k⁶) instead of the length ratio."
        ]
      },
      "de": {
        "question": "Zwei ähnliche Körper haben Volumina im Verhältnis 8 : 27. In welchem Verhältnis stehen ihre Oberflächeninhalte?",
        "options": [
          "8 : 27",
          "4 : 9",
          "2 : 3",
          "64 : 729"
        ],
        "explanation": "Bei ähnlichen Körpern mit Ähnlichkeitsfaktor k verhalten sich die Volumina wie k³ und die Oberflächen wie k². Aus k³ = 8/27 folgt k = 2/3, also ist das Verhältnis der Oberflächen k² = 4/9, d. h. 4 : 9.",
        "hint": "Bestimmen Sie zuerst das Längenverhältnis (dritte Wurzel des Volumenverhältnisses) und quadrieren Sie es dann.",
        "whyWrong": [
          "Das Verhältnis der Oberflächen ist nicht gleich dem Volumenverhältnis.",
          null,
          "2 : 3 ist das Längenverhältnis (k), nicht das Flächenverhältnis (k²).",
          "Sie haben das Volumenverhältnis quadriert (k⁶) statt des Längenverhältnisses."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Një piramidë e rregullt katërkëndore ka brinjën e bazës 10 cm dhe apotemën (lartësinë e faqes anësore) 13 cm. Llogaritni vëllimin e piramidës.",
        "options": [
          "360 cm³",
          "1200 cm³",
          "≈ 433,3 cm³",
          "400 cm³"
        ],
        "explanation": "Lartësia e piramidës, gjysma e brinjës së bazës dhe apotema formojnë trekëndësh kënddrejtë: H = √(13² − 5²) = √(169 − 25) = √144 = 12 cm. V = (1/3) × B × H = (1/3) × 10² × 12 = (1/3) × 1200 = 400 cm³.",
        "hint": "Gjeni lartësinë e piramidës me teoremën e Pitagorës, duke përdorur apotemën dhe gjysmën e brinjës së bazës.",
        "whyWrong": [
          "360 cm² është sipërfaqja e plotë (100 + 4 × ½ × 10 × 13), jo vëllimi.",
          "Keni harruar faktorin 1/3.",
          "Keni përdorur apotemën 13 cm si lartësi të piramidës: (1/3) × 100 × 13 ≈ 433,3 (rrumbullakuar në një shifër pas presjes).",
          null
        ]
      },
      "en": {
        "question": "A regular square pyramid has base edge 10 cm and slant height (height of a lateral face) 13 cm. Calculate the volume of the pyramid.",
        "options": [
          "360 cm³",
          "1200 cm³",
          "≈ 433.3 cm³",
          "400 cm³"
        ],
        "explanation": "The pyramid's height, half the base edge and the slant height form a right triangle: H = √(13² − 5²) = √(169 − 25) = √144 = 12 cm. V = (1/3) × B × H = (1/3) × 10² × 12 = (1/3) × 1200 = 400 cm³.",
        "hint": "Find the pyramid's height with the Pythagorean theorem, using the slant height and half the base edge.",
        "whyWrong": [
          "360 cm² is the total surface area (100 + 4 × ½ × 10 × 13), not the volume.",
          "You forgot the factor 1/3.",
          "You used the slant height 13 cm as the pyramid's height: (1/3) × 100 × 13 ≈ 433.3 (rounded to one decimal place).",
          null
        ]
      },
      "de": {
        "question": "Eine regelmäßige quadratische Pyramide hat die Grundkante 10 cm und die Höhe der Seitenflächen 13 cm. Berechnen Sie das Volumen der Pyramide.",
        "options": [
          "360 cm³",
          "1200 cm³",
          "≈ 433,3 cm³",
          "400 cm³"
        ],
        "explanation": "Pyramidenhöhe, halbe Grundkante und Seitenflächenhöhe bilden ein rechtwinkliges Dreieck: h = √(13² − 5²) = √(169 − 25) = √144 = 12 cm. V = (1/3) × G × h = (1/3) × 10² × 12 = (1/3) × 1200 = 400 cm³.",
        "hint": "Bestimmen Sie die Pyramidenhöhe mit dem Satz des Pythagoras aus der Seitenflächenhöhe und der halben Grundkante.",
        "whyWrong": [
          "360 cm² ist der Oberflächeninhalt (100 + 4 × ½ × 10 × 13), nicht das Volumen.",
          "Der Faktor 1/3 fehlt.",
          "Sie haben die Seitenflächenhöhe 13 cm als Pyramidenhöhe verwendet: (1/3) × 100 × 13 ≈ 433,3 (auf eine Dezimalstelle gerundet).",
          null
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 301.6,
        "tolerance": 0.05
      },
      "al": {
        "question": "Një kon ka rreze të bazës r = 6 cm dhe përftuesen s = 10 cm. Llogaritni vëllimin e tij në cm³. Merrni π ≈ 3,1416 dhe rrumbullakoni në një shifër pas presjes.",
        "explanation": "Lartësia nga teorema e Pitagorës: h = √(s² − r²) = √(100 − 36) = 8 cm. Vëllimi: V = (1/3)πr²h = (1/3) · π · 36 · 8 = 96π ≈ 301,59 ≈ 301,6 cm³.",
        "hint": "Gjeni fillimisht lartësinë e konit me teoremën e Pitagorës (r, h dhe s formojnë trekëndësh kënddrejtë).",
        "unit": "cm³",
        "commonMistakes": [
          {
            "value": 904.8,
            "why": "Keni harruar faktorin 1/3: π · 36 · 8 = 288π ≈ 904,8."
          },
          {
            "value": 377,
            "why": "Keni përdorur përftuesen 10 cm si lartësi: (1/3) · π · 36 · 10 = 120π ≈ 377,0."
          }
        ]
      },
      "en": {
        "question": "A cone has base radius r = 6 cm and slant height s = 10 cm. Calculate its volume in cm³. Use π ≈ 3.1416 and round to one decimal place.",
        "explanation": "Height by Pythagoras: h = √(s² − r²) = √(100 − 36) = 8 cm. Volume: V = (1/3)πr²h = (1/3) · π · 36 · 8 = 96π ≈ 301.59 ≈ 301.6 cm³.",
        "hint": "First find the height with Pythagoras (r, h and s form a right triangle).",
        "unit": "cm³",
        "commonMistakes": [
          {
            "value": 904.8,
            "why": "You forgot the factor 1/3: π · 36 · 8 = 288π ≈ 904.8."
          },
          {
            "value": 377,
            "why": "You used the slant height 10 cm as the height: (1/3) · π · 36 · 10 = 120π ≈ 377.0."
          }
        ]
      },
      "de": {
        "question": "Ein Kegel hat den Grundkreisradius r = 6 cm und die Mantellinie s = 10 cm. Berechnen Sie sein Volumen in cm³. Verwenden Sie π ≈ 3,1416 und runden Sie auf eine Nachkommastelle.",
        "explanation": "Höhe mit dem Satz des Pythagoras: h = √(s² − r²) = √(100 − 36) = 8 cm. Volumen: V = (1/3)πr²h = (1/3) · π · 36 · 8 = 96π ≈ 301,59 ≈ 301,6 cm³.",
        "hint": "Bestimmen Sie zuerst die Höhe mit dem Satz des Pythagoras (r, h und s bilden ein rechtwinkliges Dreieck).",
        "unit": "cm³",
        "commonMistakes": [
          {
            "value": 904.8,
            "why": "Sie haben den Faktor 1/3 vergessen: π · 36 · 8 = 288π ≈ 904,8."
          },
          {
            "value": 377,
            "why": "Sie haben die Mantellinie 10 cm als Höhe verwendet: (1/3) · π · 36 · 10 = 120π ≈ 377,0."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 7
      },
      "al": {
        "question": "Në trekëndëshin ABC: a = 5 cm, b = 8 cm dhe këndi ndërmjet tyre γ = 60°. Llogaritni gjatësinë e brinjës c në cm.",
        "explanation": "Teorema e kosinusit: c² = a² + b² − 2ab · cos γ = 25 + 64 − 2 · 5 · 8 · 0,5 = 89 − 40 = 49. Pra c = √49 = 7 cm.",
        "hint": "Përdorni teoremën e kosinusit për këndin ndërmjet dy brinjëve të njohura.",
        "unit": "cm",
        "commonMistakes": [
          {
            "value": 9.43,
            "why": "Keni përdorur teoremën e Pitagorës (c² = 89), por trekëndëshi nuk është kënddrejtë: c ≈ 9,43."
          },
          {
            "value": 11.36,
            "why": "Keni shkruar +2ab · cos γ në vend të −2ab · cos γ: c² = 129, c ≈ 11,36."
          }
        ]
      },
      "en": {
        "question": "In triangle ABC: a = 5 cm, b = 8 cm and the angle between them is γ = 60°. Calculate the length of side c in cm.",
        "explanation": "Law of cosines: c² = a² + b² − 2ab · cos γ = 25 + 64 − 2 · 5 · 8 · 0.5 = 89 − 40 = 49. So c = √49 = 7 cm.",
        "hint": "Use the law of cosines for the angle between the two known sides.",
        "unit": "cm",
        "commonMistakes": [
          {
            "value": 9.43,
            "why": "You used Pythagoras (c² = 89), but the triangle is not right-angled: c ≈ 9.43."
          },
          {
            "value": 11.36,
            "why": "You wrote +2ab · cos γ instead of −2ab · cos γ: c² = 129, c ≈ 11.36."
          }
        ]
      },
      "de": {
        "question": "Im Dreieck ABC gilt: a = 5 cm, b = 8 cm und der eingeschlossene Winkel ist γ = 60°. Berechnen Sie die Länge der Seite c in cm.",
        "explanation": "Kosinussatz: c² = a² + b² − 2ab · cos γ = 25 + 64 − 2 · 5 · 8 · 0,5 = 89 − 40 = 49. Also c = √49 = 7 cm.",
        "hint": "Verwenden Sie den Kosinussatz für den Winkel zwischen den beiden bekannten Seiten.",
        "unit": "cm",
        "commonMistakes": [
          {
            "value": 9.43,
            "why": "Sie haben den Satz des Pythagoras verwendet (c² = 89), das Dreieck ist aber nicht rechtwinklig: c ≈ 9,43."
          },
          {
            "value": 11.36,
            "why": "Sie haben +2ab · cos γ statt −2ab · cos γ geschrieben: c² = 129, c ≈ 11,36."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": false,
      "al": {
        "question": "Dy trekëndësha, këndet e të cilëve janë përkatësisht të barabarta, janë gjithmonë kongruentë.",
        "explanation": "Këndet e barabarta garantojnë vetëm ngjashmërinë, jo kongruencën. Për shembull, dy trekëndësha barabrinjës me brinjë 1 cm dhe 2 cm kanë të gjitha këndet 60°, por nuk janë kongruentë. Pohimi është i gabuar.",
        "hint": "Mendoni për dy trekëndësha barabrinjës me madhësi të ndryshme.",
        "whyWrong": "Pohimi nuk është i vërtetë: kënde të barabarta japin trekëndësha të ngjashëm, por madhësia (brinjët) mund të jetë e ndryshme."
      },
      "en": {
        "question": "Two triangles whose corresponding angles are all equal are always congruent.",
        "explanation": "Equal angles only guarantee similarity, not congruence. For example, two equilateral triangles with sides 1 cm and 2 cm both have all angles 60°, but they are not congruent. The statement is false.",
        "hint": "Think of two equilateral triangles of different sizes.",
        "whyWrong": "The statement is not true: equal angles give similar triangles, but their size (side lengths) can differ."
      },
      "de": {
        "question": "Zwei Dreiecke, deren entsprechende Winkel alle gleich sind, sind immer kongruent.",
        "explanation": "Gleiche Winkel garantieren nur Ähnlichkeit, keine Kongruenz. Beispiel: Zwei gleichseitige Dreiecke mit den Seiten 1 cm und 2 cm haben alle Winkel 60°, sind aber nicht kongruent. Die Aussage ist falsch.",
        "hint": "Denken Sie an zwei gleichseitige Dreiecke unterschiedlicher Größe.",
        "whyWrong": "Die Aussage stimmt nicht: Gleiche Winkel ergeben ähnliche Dreiecke, ihre Größe (Seitenlängen) kann aber verschieden sein."
      }
    }
  ]
};
