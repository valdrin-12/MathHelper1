// Quiz set "geo-medium" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "geo-medium",
  "difficulty": "intermediate",
  "icon": "⬡",
  "color": "#26A69A",
  "i18n": {
    "al": {
      "title": "Sipërfaqe & Vëllime",
      "category": "Gjeometri",
      "duration": "12 min"
    },
    "en": {
      "title": "Areas & Volumes",
      "category": "Geometry",
      "duration": "12 min"
    },
    "de": {
      "title": "Flächen & Volumen",
      "category": "Geometrie",
      "duration": "12 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Llogaritni vëllimin e një cilindri me rreze të bazës r = 3 cm dhe lartësi h = 5 cm.",
        "options": [
          "30π cm³",
          "45π cm³",
          "15π cm³",
          "180π cm³"
        ],
        "explanation": "V = πr²h = π × 3² × 5 = π × 9 × 5 = 45π cm³ ≈ 141,37 cm³ (rrumbullakuar në dy shifra pas presjes).",
        "hint": "Vëllimi i cilindrit është sipërfaqja e bazës (rrethit) shumëzuar me lartësinë.",
        "whyWrong": [
          "Kjo është sipërfaqja anësore (2πrh), jo vëllimi.",
          null,
          "Keni llogaritur πrh pa e ngritur rrezen në katror.",
          "Keni përdorur diametrin 6 cm në vend të rrezes: π × 6² × 5."
        ]
      },
      "en": {
        "question": "Calculate the volume of a cylinder with base radius r = 3 cm and height h = 5 cm.",
        "options": [
          "30π cm³",
          "45π cm³",
          "15π cm³",
          "180π cm³"
        ],
        "explanation": "V = πr²h = π × 3² × 5 = π × 9 × 5 = 45π cm³ ≈ 141.37 cm³ (rounded to two decimal places).",
        "hint": "A cylinder's volume is the base (circle) area times the height.",
        "whyWrong": [
          "This is the lateral surface area (2πrh), not the volume.",
          null,
          "You computed πrh without squaring the radius.",
          "You used the diameter 6 cm instead of the radius: π × 6² × 5."
        ]
      },
      "de": {
        "question": "Berechnen Sie das Volumen eines Zylinders mit Grundkreisradius r = 3 cm und Höhe h = 5 cm.",
        "options": [
          "30π cm³",
          "45π cm³",
          "15π cm³",
          "180π cm³"
        ],
        "explanation": "V = πr²h = π × 3² × 5 = π × 9 × 5 = 45π cm³ ≈ 141,37 cm³ (auf zwei Dezimalstellen gerundet).",
        "hint": "Das Volumen eines Zylinders ist Grundfläche (Kreis) mal Höhe.",
        "whyWrong": [
          "Das ist der Mantelflächeninhalt (2πrh), nicht das Volumen.",
          null,
          "Sie haben πrh gerechnet, ohne den Radius zu quadrieren.",
          "Sie haben den Durchmesser 6 cm statt des Radius verwendet: π × 6² × 5."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Llogaritni sipërfaqen e sferës me rreze r = 6 cm.",
        "options": [
          "24π cm²",
          "36π cm²",
          "288π cm²",
          "144π cm²"
        ],
        "explanation": "S = 4πr² = 4 × π × 6² = 4 × 36π = 144π cm² ≈ 452,39 cm² (rrumbullakuar në dy shifra pas presjes).",
        "hint": "Sipërfaqja e sferës është sa katër sipërfaqe të rrethit të madh me të njëjtën rreze.",
        "whyWrong": [
          "Keni llogaritur 4πr pa e ngritur rrezen në katror.",
          "Kjo është sipërfaqja e një rrethi (πr²); keni harruar faktorin 4.",
          "Kjo është vlera e vëllimit (4/3)πr³ = 288π, jo e sipërfaqes.",
          null
        ]
      },
      "en": {
        "question": "Calculate the surface area of a sphere with radius r = 6 cm.",
        "options": [
          "24π cm²",
          "36π cm²",
          "288π cm²",
          "144π cm²"
        ],
        "explanation": "S = 4πr² = 4 × π × 6² = 4 × 36π = 144π cm² ≈ 452.39 cm² (rounded to two decimal places).",
        "hint": "A sphere's surface area equals four times the area of a great circle with the same radius.",
        "whyWrong": [
          "You computed 4πr without squaring the radius.",
          "This is the area of one circle (πr²); you forgot the factor 4.",
          "This is the volume value (4/3)πr³ = 288π, not the surface area.",
          null
        ]
      },
      "de": {
        "question": "Berechnen Sie den Oberflächeninhalt einer Kugel mit Radius r = 6 cm.",
        "options": [
          "24π cm²",
          "36π cm²",
          "288π cm²",
          "144π cm²"
        ],
        "explanation": "O = 4πr² = 4 × π × 6² = 4 × 36π = 144π cm² ≈ 452,39 cm² (auf zwei Dezimalstellen gerundet).",
        "hint": "Die Kugeloberfläche ist viermal so groß wie die Fläche eines Großkreises mit gleichem Radius.",
        "whyWrong": [
          "Sie haben 4πr gerechnet, ohne den Radius zu quadrieren.",
          "Das ist der Flächeninhalt eines Kreises (πr²); der Faktor 4 fehlt.",
          "Das ist der Wert des Volumens (4/3)πr³ = 288π, nicht der Oberfläche.",
          null
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Një drejtkëndësh ka brinjët 5 cm dhe 12 cm. Gjeni gjatësinë e diagonales së tij.",
        "options": [
          "13 cm",
          "17 cm",
          "169 cm",
          "√119 cm"
        ],
        "explanation": "Diagonalja ndan drejtkëndëshin në dy trekëndësha kënddrejtë me katete 5 cm dhe 12 cm. d² = 5² + 12² = 25 + 144 = 169, pra d = √169 = 13 cm.",
        "hint": "Diagonalja është hipotenuza e një trekëndëshi kënddrejtë, katetet e të cilit janë brinjët e drejtkëndëshit.",
        "whyWrong": [
          null,
          "Keni mbledhur brinjët (5 + 12) në vend të katrorëve të tyre.",
          "169 është d²; keni harruar të nxirrni rrënjën katrore.",
          "Keni zbritur katrorët (144 − 25); për diagonalen ata mblidhen."
        ]
      },
      "en": {
        "question": "A rectangle has sides 5 cm and 12 cm. Find the length of its diagonal.",
        "options": [
          "13 cm",
          "17 cm",
          "169 cm",
          "√119 cm"
        ],
        "explanation": "The diagonal splits the rectangle into two right triangles with legs 5 cm and 12 cm. d² = 5² + 12² = 25 + 144 = 169, so d = √169 = 13 cm.",
        "hint": "The diagonal is the hypotenuse of a right triangle whose legs are the rectangle's sides.",
        "whyWrong": [
          null,
          "You added the sides (5 + 12) instead of their squares.",
          "169 is d²; you forgot to take the square root.",
          "You subtracted the squares (144 − 25); for the diagonal they are added."
        ]
      },
      "de": {
        "question": "Ein Rechteck hat die Seitenlängen 5 cm und 12 cm. Bestimmen Sie die Länge seiner Diagonale.",
        "options": [
          "13 cm",
          "17 cm",
          "169 cm",
          "√119 cm"
        ],
        "explanation": "Die Diagonale teilt das Rechteck in zwei rechtwinklige Dreiecke mit den Katheten 5 cm und 12 cm. d² = 5² + 12² = 25 + 144 = 169, also d = √169 = 13 cm.",
        "hint": "Die Diagonale ist die Hypotenuse eines rechtwinkligen Dreiecks, dessen Katheten die Rechteckseiten sind.",
        "whyWrong": [
          null,
          "Sie haben die Seiten addiert (5 + 12) statt ihrer Quadrate.",
          "169 ist d²; Sie haben vergessen, die Wurzel zu ziehen.",
          "Sie haben die Quadrate subtrahiert (144 − 25); für die Diagonale werden sie addiert."
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Diagonalet e një rombi janë d₁ = 8 cm dhe d₂ = 6 cm. Llogaritni sipërfaqen e rombit.",
        "options": [
          "14 cm²",
          "48 cm²",
          "24 cm²",
          "20 cm²"
        ],
        "explanation": "S = (d₁ × d₂) / 2 = (8 × 6) / 2 = 48 / 2 = 24 cm².",
        "hint": "Sipërfaqja e rombit është gjysma e prodhimit të diagonaleve.",
        "whyWrong": [
          "Keni mbledhur diagonalet (8 + 6) në vend që t'i shumëzoni.",
          "Keni harruar të pjesëtoni me 2.",
          null,
          "20 cm është perimetri i rombit (brinja 5 cm × 4), jo sipërfaqja."
        ]
      },
      "en": {
        "question": "The diagonals of a rhombus are d₁ = 8 cm and d₂ = 6 cm. Calculate the area of the rhombus.",
        "options": [
          "14 cm²",
          "48 cm²",
          "24 cm²",
          "20 cm²"
        ],
        "explanation": "A = (d₁ × d₂) / 2 = (8 × 6) / 2 = 48 / 2 = 24 cm².",
        "hint": "The area of a rhombus is half the product of its diagonals.",
        "whyWrong": [
          "You added the diagonals (8 + 6) instead of multiplying them.",
          "You forgot to divide by 2.",
          null,
          "20 cm is the perimeter of the rhombus (side 5 cm × 4), not its area."
        ]
      },
      "de": {
        "question": "Die Diagonalen einer Raute sind d₁ = 8 cm und d₂ = 6 cm lang. Berechnen Sie den Flächeninhalt der Raute.",
        "options": [
          "14 cm²",
          "48 cm²",
          "24 cm²",
          "20 cm²"
        ],
        "explanation": "A = (d₁ × d₂) / 2 = (8 × 6) / 2 = 48 / 2 = 24 cm².",
        "hint": "Der Flächeninhalt einer Raute ist das halbe Produkt der Diagonalen.",
        "whyWrong": [
          "Sie haben die Diagonalen addiert (8 + 6), statt sie zu multiplizieren.",
          "Sie haben vergessen, durch 2 zu teilen.",
          null,
          "20 cm ist der Umfang der Raute (Seite 5 cm × 4), nicht der Flächeninhalt."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Llogaritni vëllimin e një koni me rreze të bazës r = 3 cm dhe lartësi h = 4 cm.",
        "options": [
          "36π cm³",
          "12π cm³",
          "4π cm³",
          "15π cm³"
        ],
        "explanation": "V = (1/3)πr²h = (1/3) × π × 3² × 4 = (1/3) × 36π = 12π cm³ ≈ 37,70 cm³ (rrumbullakuar në dy shifra pas presjes).",
        "hint": "Vëllimi i konit është një e treta e vëllimit të cilindrit me të njëjtën bazë dhe lartësi.",
        "whyWrong": [
          "Keni harruar faktorin 1/3; 36π cm³ është vëllimi i cilindrit.",
          null,
          "Keni llogaritur (1/3)πrh pa e ngritur rrezen në katror.",
          "15π është sipërfaqja anësore πrs (me përftuesen s = 5 cm), jo vëllimi."
        ]
      },
      "en": {
        "question": "Calculate the volume of a cone with base radius r = 3 cm and height h = 4 cm.",
        "options": [
          "36π cm³",
          "12π cm³",
          "4π cm³",
          "15π cm³"
        ],
        "explanation": "V = (1/3)πr²h = (1/3) × π × 3² × 4 = (1/3) × 36π = 12π cm³ ≈ 37.70 cm³ (rounded to two decimal places).",
        "hint": "A cone's volume is one third of the volume of the cylinder with the same base and height.",
        "whyWrong": [
          "You forgot the factor 1/3; 36π cm³ is the cylinder's volume.",
          null,
          "You computed (1/3)πrh without squaring the radius.",
          "15π is the lateral surface area πrl (slant height l = 5 cm), not the volume."
        ]
      },
      "de": {
        "question": "Berechnen Sie das Volumen eines Kegels mit Grundkreisradius r = 3 cm und Höhe h = 4 cm.",
        "options": [
          "36π cm³",
          "12π cm³",
          "4π cm³",
          "15π cm³"
        ],
        "explanation": "V = (1/3)πr²h = (1/3) × π × 3² × 4 = (1/3) × 36π = 12π cm³ ≈ 37,70 cm³ (auf zwei Dezimalstellen gerundet).",
        "hint": "Das Kegelvolumen ist ein Drittel des Volumens eines Zylinders mit gleicher Grundfläche und Höhe.",
        "whyWrong": [
          "Der Faktor 1/3 fehlt; 36π cm³ ist das Zylindervolumen.",
          null,
          "Sie haben (1/3)πrh gerechnet, ohne den Radius zu quadrieren.",
          "15π ist der Mantelflächeninhalt πrs (Mantellinie s = 5 cm), nicht das Volumen."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Një trapez ka bazat (brinjët paralele) 10 cm dhe 6 cm, kurse lartësinë 4 cm. Llogaritni sipërfaqen e tij.",
        "options": [
          "240 cm²",
          "64 cm²",
          "40 cm²",
          "32 cm²"
        ],
        "explanation": "S = ((a + b) / 2) × h = ((10 + 6) / 2) × 4 = 8 × 4 = 32 cm².",
        "hint": "Shumëzoni mesataren e dy bazave me lartësinë.",
        "whyWrong": [
          "Keni shumëzuar të tri madhësitë (10 × 6 × 4); kjo nuk është formulë sipërfaqeje.",
          "Keni harruar të pjesëtoni shumën e bazave me 2.",
          "Keni përdorur vetëm bazën më të madhe (10 × 4).",
          null
        ]
      },
      "en": {
        "question": "A trapezoid has parallel sides (bases) of 10 cm and 6 cm and a height of 4 cm. Calculate its area.",
        "options": [
          "240 cm²",
          "64 cm²",
          "40 cm²",
          "32 cm²"
        ],
        "explanation": "A = ((a + b) / 2) × h = ((10 + 6) / 2) × 4 = 8 × 4 = 32 cm².",
        "hint": "Multiply the average of the two parallel sides by the height.",
        "whyWrong": [
          "You multiplied all three values (10 × 6 × 4); that is not an area formula.",
          "You forgot to divide the sum of the bases by 2.",
          "You used only the longer base (10 × 4).",
          null
        ]
      },
      "de": {
        "question": "Ein Trapez hat die parallelen Seiten 10 cm und 6 cm und die Höhe 4 cm. Berechnen Sie seinen Flächeninhalt.",
        "options": [
          "240 cm²",
          "64 cm²",
          "40 cm²",
          "32 cm²"
        ],
        "explanation": "A = ((a + c) / 2) × h = ((10 + 6) / 2) × 4 = 8 × 4 = 32 cm².",
        "hint": "Multiplizieren Sie den Mittelwert der beiden parallelen Seiten mit der Höhe.",
        "whyWrong": [
          "Sie haben alle drei Werte multipliziert (10 × 6 × 4); das ist keine Flächenformel.",
          "Sie haben vergessen, die Summe der parallelen Seiten durch 2 zu teilen.",
          "Sie haben nur die längere Seite verwendet (10 × 4).",
          null
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Gjeni gjatësinë e harkut të një rrethi me rreze r = 10 cm, që i përgjigjet këndit qendror 90°.",
        "options": [
          "5π cm",
          "25π cm",
          "20π cm",
          "10π cm"
        ],
        "explanation": "Harku është 90°/360° = 1/4 e gjatësisë së rrethit: l = (90°/360°) × 2πr = (1/4) × 2π × 10 = (1/4) × 20π = 5π cm ≈ 15,71 cm (rrumbullakuar në dy shifra pas presjes).",
        "hint": "Gjeni çfarë pjese të rrethit të plotë zë këndi qendror dhe shumëzojeni me gjatësinë e rrethit 2πr.",
        "whyWrong": [
          null,
          "Kjo është sipërfaqja e sektorit (1/4 × πr²), jo gjatësia e harkut.",
          "Kjo është gjatësia e gjithë rrethit; keni harruar të merrni 1/4.",
          "Keni përdorur diametrin 20 cm si rreze."
        ]
      },
      "en": {
        "question": "Find the length of the arc of a circle with radius r = 10 cm that corresponds to a central angle of 90°.",
        "options": [
          "5π cm",
          "25π cm",
          "20π cm",
          "10π cm"
        ],
        "explanation": "The arc is 90°/360° = 1/4 of the circumference: L = (90°/360°) × 2πr = (1/4) × 2π × 10 = (1/4) × 20π = 5π cm ≈ 15.71 cm (rounded to two decimal places).",
        "hint": "Find what fraction of the full circle the central angle is and multiply it by the circumference 2πr.",
        "whyWrong": [
          null,
          "This is the sector area (1/4 × πr²), not the arc length.",
          "This is the whole circumference; you forgot to take 1/4 of it.",
          "You used the diameter 20 cm as the radius."
        ]
      },
      "de": {
        "question": "Bestimmen Sie die Länge des Kreisbogens eines Kreises mit Radius r = 10 cm, der zum Mittelpunktswinkel 90° gehört.",
        "options": [
          "5π cm",
          "25π cm",
          "20π cm",
          "10π cm"
        ],
        "explanation": "Der Bogen ist 90°/360° = 1/4 des Umfangs: b = (90°/360°) × 2πr = (1/4) × 2π × 10 = (1/4) × 20π = 5π cm ≈ 15,71 cm (auf zwei Dezimalstellen gerundet).",
        "hint": "Bestimmen Sie, welchen Anteil des Vollkreises der Mittelpunktswinkel ausmacht, und multiplizieren Sie ihn mit dem Umfang 2πr.",
        "whyWrong": [
          null,
          "Das ist der Flächeninhalt des Kreisausschnitts (1/4 × πr²), nicht die Bogenlänge.",
          "Das ist der ganze Kreisumfang; Sie haben vergessen, 1/4 davon zu nehmen.",
          "Sie haben den Durchmesser 20 cm als Radius verwendet."
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Llogaritni sipërfaqen e sektorit qarkor me rreze r = 8 cm dhe kënd qendror 45°.",
        "options": [
          "64π cm²",
          "2π cm²",
          "8π cm²",
          "32π cm²"
        ],
        "explanation": "Sektori është 45°/360° = 1/8 e rrethit: S = (45°/360°) × πr² = (1/8) × π × 8² = (1/8) × 64π = 8π cm² ≈ 25,13 cm² (rrumbullakuar në dy shifra pas presjes).",
        "hint": "Shumëzoni sipërfaqen e rrethit të plotë me pjesën që zë këndi qendror nga 360°.",
        "whyWrong": [
          "Kjo është sipërfaqja e gjithë rrethit; keni harruar të merrni 1/8.",
          "Kjo është gjatësia e harkut (1/8 × 2πr), jo sipërfaqja e sektorit.",
          null,
          "Keni përdorur diametrin 16 cm si rreze."
        ]
      },
      "en": {
        "question": "Calculate the area of a circular sector with radius r = 8 cm and central angle 45°.",
        "options": [
          "64π cm²",
          "2π cm²",
          "8π cm²",
          "32π cm²"
        ],
        "explanation": "The sector is 45°/360° = 1/8 of the circle: A = (45°/360°) × πr² = (1/8) × π × 8² = (1/8) × 64π = 8π cm² ≈ 25.13 cm² (rounded to two decimal places).",
        "hint": "Multiply the area of the full circle by the fraction of 360° taken up by the central angle.",
        "whyWrong": [
          "This is the area of the whole circle; you forgot to take 1/8 of it.",
          "This is the arc length (1/8 × 2πr), not the sector area.",
          null,
          "You used the diameter 16 cm as the radius."
        ]
      },
      "de": {
        "question": "Berechnen Sie den Flächeninhalt eines Kreisausschnitts mit Radius r = 8 cm und Mittelpunktswinkel 45°.",
        "options": [
          "64π cm²",
          "2π cm²",
          "8π cm²",
          "32π cm²"
        ],
        "explanation": "Der Ausschnitt ist 45°/360° = 1/8 des Kreises: A = (45°/360°) × πr² = (1/8) × π × 8² = (1/8) × 64π = 8π cm² ≈ 25,13 cm² (auf zwei Dezimalstellen gerundet).",
        "hint": "Multiplizieren Sie den Flächeninhalt des Vollkreises mit dem Anteil des Mittelpunktswinkels an 360°.",
        "whyWrong": [
          "Das ist der Flächeninhalt des ganzen Kreises; Sie haben vergessen, 1/8 davon zu nehmen.",
          "Das ist die Bogenlänge (1/8 × 2πr), nicht der Flächeninhalt des Ausschnitts.",
          null,
          "Sie haben den Durchmesser 16 cm als Radius verwendet."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Një piramidë ka bazë katror me brinjë 6 cm dhe lartësi 4 cm. Llogaritni vëllimin e saj.",
        "options": [
          "144 cm³",
          "48 cm³",
          "72 cm³",
          "8 cm³"
        ],
        "explanation": "Sipërfaqja e bazës: B = 6² = 36 cm². V = (1/3) × B × h = (1/3) × 36 × 4 = 48 cm³.",
        "hint": "Vëllimi i piramidës është një e treta e vëllimit të prizmit me të njëjtën bazë dhe lartësi.",
        "whyWrong": [
          "Keni harruar faktorin 1/3; 144 cm³ është vëllimi i prizmit.",
          null,
          "Keni pjesëtuar me 2 në vend të 3, si te sipërfaqja e trekëndëshit.",
          "Keni përdorur brinjën e bazës (6) në vend të sipërfaqes së bazës (36 cm²)."
        ]
      },
      "en": {
        "question": "A pyramid has a square base with side 6 cm and a height of 4 cm. Calculate its volume.",
        "options": [
          "144 cm³",
          "48 cm³",
          "72 cm³",
          "8 cm³"
        ],
        "explanation": "Base area: B = 6² = 36 cm². V = (1/3) × B × h = (1/3) × 36 × 4 = 48 cm³.",
        "hint": "A pyramid's volume is one third of the volume of the prism with the same base and height.",
        "whyWrong": [
          "You forgot the factor 1/3; 144 cm³ is the prism's volume.",
          null,
          "You divided by 2 instead of 3, as in the triangle area formula.",
          "You used the base side (6) instead of the base area (36 cm²)."
        ]
      },
      "de": {
        "question": "Eine Pyramide hat eine quadratische Grundfläche mit der Seitenlänge 6 cm und die Höhe 4 cm. Berechnen Sie ihr Volumen.",
        "options": [
          "144 cm³",
          "48 cm³",
          "72 cm³",
          "8 cm³"
        ],
        "explanation": "Grundfläche: G = 6² = 36 cm². V = (1/3) × G × h = (1/3) × 36 × 4 = 48 cm³.",
        "hint": "Das Pyramidenvolumen ist ein Drittel des Volumens eines Prismas mit gleicher Grundfläche und Höhe.",
        "whyWrong": [
          "Der Faktor 1/3 fehlt; 144 cm³ ist das Prismenvolumen.",
          null,
          "Sie haben durch 2 statt durch 3 geteilt, wie beim Dreiecksflächeninhalt.",
          "Sie haben die Grundseite (6) statt der Grundfläche (36 cm²) verwendet."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Një paralelogram ka brinjët 8 cm dhe 6 cm. Lartësia e hequr mbi brinjën 8 cm është 5 cm. Llogaritni sipërfaqen e paralelogramit.",
        "options": [
          "28 cm²",
          "48 cm²",
          "20 cm²",
          "40 cm²"
        ],
        "explanation": "Sipërfaqja e paralelogramit është brinja shumëzuar me lartësinë mbi atë brinjë: S = a × hₐ = 8 × 5 = 40 cm². Brinja e pjerrët 6 cm nuk përdoret.",
        "hint": "Përdorni bazën dhe lartësinë pingule mbi të, jo brinjën e pjerrët.",
        "whyWrong": [
          "28 cm është perimetri 2 × (8 + 6), jo sipërfaqja.",
          "Keni shumëzuar dy brinjët (8 × 6); kjo vlen vetëm për drejtkëndëshin.",
          "Keni pjesëtuar me 2 si te trekëndëshi; paralelogrami nuk ka faktorin 1/2.",
          null
        ]
      },
      "en": {
        "question": "A parallelogram has sides 8 cm and 6 cm. The height drawn to the 8 cm side is 5 cm. Calculate the area of the parallelogram.",
        "options": [
          "28 cm²",
          "48 cm²",
          "20 cm²",
          "40 cm²"
        ],
        "explanation": "The area of a parallelogram is a side times the height to that side: A = a × hₐ = 8 × 5 = 40 cm². The slanted side of 6 cm is not needed.",
        "hint": "Use a base and the perpendicular height to it, not the slanted side.",
        "whyWrong": [
          "28 cm is the perimeter 2 × (8 + 6), not the area.",
          "You multiplied the two sides (8 × 6); that only works for a rectangle.",
          "You divided by 2 as for a triangle; a parallelogram has no factor 1/2.",
          null
        ]
      },
      "de": {
        "question": "Ein Parallelogramm hat die Seitenlängen 8 cm und 6 cm. Die Höhe auf die 8 cm lange Seite beträgt 5 cm. Berechnen Sie den Flächeninhalt des Parallelogramms.",
        "options": [
          "28 cm²",
          "48 cm²",
          "20 cm²",
          "40 cm²"
        ],
        "explanation": "Flächeninhalt = Seite mal zugehörige Höhe: A = a × hₐ = 8 × 5 = 40 cm². Die schräge Seite von 6 cm wird nicht benötigt.",
        "hint": "Verwenden Sie eine Grundseite und die senkrechte Höhe darauf, nicht die schräge Seite.",
        "whyWrong": [
          "28 cm ist der Umfang 2 × (8 + 6), nicht der Flächeninhalt.",
          "Sie haben die beiden Seiten multipliziert (8 × 6); das gilt nur beim Rechteck.",
          "Sie haben wie beim Dreieck durch 2 geteilt; beim Parallelogramm gibt es keinen Faktor 1/2.",
          null
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 84
      },
      "al": {
        "question": "Një trekëndësh ka brinjët 13 cm, 14 cm dhe 15 cm. Llogaritni sipërfaqen e tij në cm².",
        "explanation": "Gjysmëperimetri: s = (13 + 14 + 15) : 2 = 21. Formula e Heronit: S = √(s(s − a)(s − b)(s − c)) = √(21 · 8 · 7 · 6) = √7056 = 84 cm². (Kontroll: lartësia mbi brinjën 14 është 12 cm, dhe 14 · 12 : 2 = 84.)",
        "hint": "Përdorni formulën e Heronit me gjysmëperimetrin s.",
        "unit": "cm²",
        "commonMistakes": [
          {
            "value": 7056,
            "why": "Keni harruar rrënjën katrore në formulën e Heronit: 21 · 8 · 7 · 6 = 7056."
          },
          {
            "value": 168,
            "why": "Keni shumëzuar bazën me lartësinë (14 · 12) pa pjesëtuar me 2."
          }
        ]
      },
      "en": {
        "question": "A triangle has sides 13 cm, 14 cm and 15 cm. Calculate its area in cm².",
        "explanation": "Semi-perimeter: s = (13 + 14 + 15) ÷ 2 = 21. Heron's formula: A = √(s(s − a)(s − b)(s − c)) = √(21 · 8 · 7 · 6) = √7056 = 84 cm². (Check: the height to side 14 is 12 cm, and 14 · 12 ÷ 2 = 84.)",
        "hint": "Use Heron's formula with the semi-perimeter s.",
        "unit": "cm²",
        "commonMistakes": [
          {
            "value": 7056,
            "why": "You forgot the square root in Heron's formula: 21 · 8 · 7 · 6 = 7056."
          },
          {
            "value": 168,
            "why": "You multiplied base by height (14 · 12) without dividing by 2."
          }
        ]
      },
      "de": {
        "question": "Ein Dreieck hat die Seiten 13 cm, 14 cm und 15 cm. Berechnen Sie seinen Flächeninhalt in cm².",
        "explanation": "Halber Umfang: s = (13 + 14 + 15) : 2 = 21. Heronsche Formel: A = √(s(s − a)(s − b)(s − c)) = √(21 · 8 · 7 · 6) = √7056 = 84 cm². (Probe: Die Höhe auf die Seite 14 ist 12 cm, und 14 · 12 : 2 = 84.)",
        "hint": "Verwenden Sie die Heronsche Formel mit dem halben Umfang s.",
        "unit": "cm²",
        "commonMistakes": [
          {
            "value": 7056,
            "why": "Sie haben die Wurzel in der Heronschen Formel vergessen: 21 · 8 · 7 · 6 = 7056."
          },
          {
            "value": 168,
            "why": "Sie haben Grundseite mal Höhe (14 · 12) gerechnet, ohne durch 2 zu teilen."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 268.1,
        "tolerance": 0.05
      },
      "al": {
        "question": "Llogaritni vëllimin e një sfere me rreze r = 4 cm. Merrni π ≈ 3,1416 dhe rrumbullakoni në një shifër pas presjes.",
        "explanation": "V = (4/3)πr³ = (4/3) · π · 4³ = (4/3) · π · 64 = 256π/3 ≈ 268,08 ≈ 268,1 cm³.",
        "hint": "Përdorni formulën e vëllimit të sferës, ku rrezja ngrihet në kub.",
        "unit": "cm³",
        "commonMistakes": [
          {
            "value": 201.1,
            "why": "Kjo është sipërfaqja e sferës: 4πr² = 64π ≈ 201,1 cm²."
          },
          {
            "value": 67,
            "why": "Keni ngritur rrezen në katror në vend të kubit: (4/3) · π · 16 ≈ 67,0."
          },
          {
            "value": 804.2,
            "why": "Keni harruar faktorin 1/3: 4 · π · 64 ≈ 804,2."
          }
        ]
      },
      "en": {
        "question": "Calculate the volume of a sphere with radius r = 4 cm. Use π ≈ 3.1416 and round to one decimal place.",
        "explanation": "V = (4/3)πr³ = (4/3) · π · 4³ = (4/3) · π · 64 = 256π/3 ≈ 268.08 ≈ 268.1 cm³.",
        "hint": "Use the volume formula of a sphere, in which the radius is cubed.",
        "unit": "cm³",
        "commonMistakes": [
          {
            "value": 201.1,
            "why": "That is the surface area of the sphere: 4πr² = 64π ≈ 201.1 cm²."
          },
          {
            "value": 67,
            "why": "You squared the radius instead of cubing it: (4/3) · π · 16 ≈ 67.0."
          },
          {
            "value": 804.2,
            "why": "You forgot the factor 1/3: 4 · π · 64 ≈ 804.2."
          }
        ]
      },
      "de": {
        "question": "Berechnen Sie das Volumen einer Kugel mit Radius r = 4 cm. Verwenden Sie π ≈ 3,1416 und runden Sie auf eine Nachkommastelle.",
        "explanation": "V = (4/3)πr³ = (4/3) · π · 4³ = (4/3) · π · 64 = 256π/3 ≈ 268,08 ≈ 268,1 cm³.",
        "hint": "Verwenden Sie die Volumenformel der Kugel, in der der Radius hoch 3 genommen wird.",
        "unit": "cm³",
        "commonMistakes": [
          {
            "value": 201.1,
            "why": "Das ist die Oberfläche der Kugel: 4πr² = 64π ≈ 201,1 cm²."
          },
          {
            "value": 67,
            "why": "Sie haben den Radius quadriert statt hoch 3 genommen: (4/3) · π · 16 ≈ 67,0."
          },
          {
            "value": 804.2,
            "why": "Sie haben den Faktor 1/3 vergessen: 4 · π · 64 ≈ 804,2."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": true,
      "al": {
        "question": "Një kon dhe një cilindër kanë të njëjtën bazë dhe të njëjtën lartësi. Vëllimi i konit është një e treta e vëllimit të cilindrit.",
        "explanation": "V(cilindri) = πr²h dhe V(koni) = (1/3)πr²h. Pra V(koni) = V(cilindri) : 3. Pohimi është i vërtetë.",
        "hint": "Krahasoni formulat e vëllimit të konit dhe të cilindrit.",
        "whyWrong": "Pohimi nuk është i gabuar: formula e konit (1/3)πr²h ndryshon nga ajo e cilindrit πr²h pikërisht me faktorin 1/3."
      },
      "en": {
        "question": "A cone and a cylinder have the same base and the same height. The volume of the cone is one third of the volume of the cylinder.",
        "explanation": "V(cylinder) = πr²h and V(cone) = (1/3)πr²h. So V(cone) = V(cylinder) ÷ 3. The statement is true.",
        "hint": "Compare the volume formulas of a cone and a cylinder.",
        "whyWrong": "The statement is not false: the cone formula (1/3)πr²h differs from the cylinder formula πr²h by exactly the factor 1/3."
      },
      "de": {
        "question": "Ein Kegel und ein Zylinder haben dieselbe Grundfläche und dieselbe Höhe. Das Volumen des Kegels ist ein Drittel des Zylindervolumens.",
        "explanation": "V(Zylinder) = πr²h und V(Kegel) = (1/3)πr²h. Also V(Kegel) = V(Zylinder) : 3. Die Aussage ist wahr.",
        "hint": "Vergleichen Sie die Volumenformeln von Kegel und Zylinder.",
        "whyWrong": "Die Aussage ist nicht falsch: Die Kegelformel (1/3)πr²h unterscheidet sich von der Zylinderformel πr²h genau um den Faktor 1/3."
      }
    }
  ]
};
