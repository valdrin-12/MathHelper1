// Quiz set "geo-easy" in all languages (al = Albanian source, en, de).
// Each question: correct = index into options (same order in every language);
// hint = one nudge without the answer; whyWrong[i] = why option i is wrong (null for the correct one).
// type 'input': answer.value (+ optional tolerance), commonMistakes = typical wrong values; type 'truefalse': correct = true/false, whyWrong = why the opposite answer is wrong.

export default {
  "id": "geo-easy",
  "difficulty": "beginner",
  "icon": "△",
  "color": "#4ECDC4",
  "i18n": {
    "al": {
      "title": "Gjeometri Bazë",
      "category": "Gjeometri",
      "duration": "8 min"
    },
    "en": {
      "title": "Basic Geometry",
      "category": "Geometry",
      "duration": "8 min"
    },
    "de": {
      "title": "Grundlegende Geometrie",
      "category": "Geometrie",
      "duration": "8 min"
    }
  },
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Një katërkëndësh ka tri kënde me masë 85°, 95° dhe 110°. Gjeni masën e këndit të katërt.",
        "options": [
          "250°",
          "110°",
          "70°",
          "290°"
        ],
        "explanation": "Shuma e këndeve të brendshme të katërkëndëshit është (4 − 2) × 180° = 360°. Shuma e këndeve të dhëna: 85° + 95° + 110° = 290°. Këndi i katërt: 360° − 290° = 70°.",
        "hint": "Kujtoni sa është shuma e këndeve të brendshme të një katërkëndëshi.",
        "whyWrong": [
          "Keni përdorur 540° (shumën e këndeve të pesëkëndëshit) në vend të 360°.",
          "Keni supozuar se këndi i katërt është i barabartë me njërin nga këndet e dhëna, por katërkëndëshi nuk është paralelogram.",
          null,
          "Kjo është shuma e tri këndeve të dhëna; duhet ta zbritni nga 360°."
        ]
      },
      "en": {
        "question": "A quadrilateral has three angles measuring 85°, 95° and 110°. Find the fourth angle.",
        "options": [
          "250°",
          "110°",
          "70°",
          "290°"
        ],
        "explanation": "The interior angles of a quadrilateral add up to (4 − 2) × 180° = 360°. The given angles add up to 85° + 95° + 110° = 290°. Fourth angle: 360° − 290° = 70°.",
        "hint": "Recall the sum of the interior angles of a quadrilateral.",
        "whyWrong": [
          "You used 540° (the angle sum of a pentagon) instead of 360°.",
          "You assumed the fourth angle equals one of the given angles, but the quadrilateral is not a parallelogram.",
          null,
          "This is the sum of the three given angles; you still need to subtract it from 360°."
        ]
      },
      "de": {
        "question": "Ein Viereck hat drei Winkel mit 85°, 95° und 110°. Bestimmen Sie den vierten Winkel.",
        "options": [
          "250°",
          "110°",
          "70°",
          "290°"
        ],
        "explanation": "Die Innenwinkelsumme eines Vierecks beträgt (4 − 2) × 180° = 360°. Die gegebenen Winkel ergeben 85° + 95° + 110° = 290°. Vierter Winkel: 360° − 290° = 70°.",
        "hint": "Denken Sie an die Innenwinkelsumme eines Vierecks.",
        "whyWrong": [
          "Sie haben 540° (die Winkelsumme eines Fünfecks) statt 360° verwendet.",
          "Sie haben angenommen, dass der vierte Winkel einem gegebenen Winkel gleicht – das Viereck ist aber kein Parallelogramm.",
          null,
          "Das ist die Summe der drei gegebenen Winkel; sie muss noch von 360° abgezogen werden."
        ]
      }
    },
    {
      "id": 2,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Në një trekëndësh kënddrejtë hipotenuza është 13 cm dhe njëri katet është 5 cm. Gjeni gjatësinë e katetit tjetër.",
        "options": [
          "12 cm",
          "8 cm",
          "18 cm",
          "√194 cm"
        ],
        "explanation": "Sipas teoremës së Pitagorës a² + b² = c², pra b² = c² − a² = 13² − 5² = 169 − 25 = 144. Atëherë b = √144 = 12 cm.",
        "hint": "Përdorni teoremën e Pitagorës dhe zbritni katrorin e katetit të njohur nga katrori i hipotenuzës.",
        "whyWrong": [
          null,
          "Keni zbritur gjatësitë (13 − 5) në vend të katrorëve të tyre.",
          "Keni mbledhur gjatësitë; kateti duhet të jetë më i shkurtër se hipotenuza.",
          "Keni mbledhur katrorët (169 + 25); për katetin katrorët zbriten."
        ]
      },
      "en": {
        "question": "In a right triangle the hypotenuse is 13 cm and one leg is 5 cm. Find the length of the other leg.",
        "options": [
          "12 cm",
          "8 cm",
          "18 cm",
          "√194 cm"
        ],
        "explanation": "By the Pythagorean theorem a² + b² = c², so b² = c² − a² = 13² − 5² = 169 − 25 = 144. Hence b = √144 = 12 cm.",
        "hint": "Use the Pythagorean theorem and subtract the square of the known leg from the square of the hypotenuse.",
        "whyWrong": [
          null,
          "You subtracted the lengths (13 − 5) instead of their squares.",
          "You added the lengths; a leg must be shorter than the hypotenuse.",
          "You added the squares (169 + 25); to find a leg you subtract them."
        ]
      },
      "de": {
        "question": "In einem rechtwinkligen Dreieck ist die Hypotenuse 13 cm und eine Kathete 5 cm lang. Bestimmen Sie die Länge der anderen Kathete.",
        "options": [
          "12 cm",
          "8 cm",
          "18 cm",
          "√194 cm"
        ],
        "explanation": "Nach dem Satz des Pythagoras gilt a² + b² = c², also b² = c² − a² = 13² − 5² = 169 − 25 = 144. Damit ist b = √144 = 12 cm.",
        "hint": "Verwenden Sie den Satz des Pythagoras und ziehen Sie das Quadrat der bekannten Kathete vom Quadrat der Hypotenuse ab.",
        "whyWrong": [
          null,
          "Sie haben die Längen (13 − 5) statt ihrer Quadrate subtrahiert.",
          "Sie haben die Längen addiert; eine Kathete ist immer kürzer als die Hypotenuse.",
          "Sie haben die Quadrate addiert (169 + 25); für eine Kathete werden sie subtrahiert."
        ]
      }
    },
    {
      "id": 3,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Një rreth ka rreze r = 4 cm. Llogaritni sipërfaqen e tij.",
        "options": [
          "4π cm²",
          "8π cm²",
          "64π cm²",
          "16π cm²"
        ],
        "explanation": "Sipërfaqja e rrethit: S = πr² = π × 4² = 16π cm² ≈ 50,27 cm² (rrumbullakuar në dy shifra pas presjes).",
        "hint": "Përdorni formulën e sipërfaqes së rrethit, ku rrezja ngrihet në katror.",
        "whyWrong": [
          "Keni shumëzuar π me r pa e ngritur rrezen në katror.",
          "Kjo është gjatësia e rrethit (2πr), jo sipërfaqja.",
          "Keni përdorur diametrin 8 cm në vend të rrezes: π × 8² = 64π.",
          null
        ]
      },
      "en": {
        "question": "A circle has radius r = 4 cm. Calculate its area.",
        "options": [
          "4π cm²",
          "8π cm²",
          "64π cm²",
          "16π cm²"
        ],
        "explanation": "Area of a circle: A = πr² = π × 4² = 16π cm² ≈ 50.27 cm² (rounded to two decimal places).",
        "hint": "Use the area formula for a circle, in which the radius is squared.",
        "whyWrong": [
          "You multiplied π by r without squaring the radius.",
          "This is the circumference (2πr), not the area.",
          "You used the diameter 8 cm instead of the radius: π × 8² = 64π.",
          null
        ]
      },
      "de": {
        "question": "Ein Kreis hat den Radius r = 4 cm. Berechnen Sie seinen Flächeninhalt.",
        "options": [
          "4π cm²",
          "8π cm²",
          "64π cm²",
          "16π cm²"
        ],
        "explanation": "Flächeninhalt des Kreises: A = πr² = π × 4² = 16π cm² ≈ 50,27 cm² (auf zwei Dezimalstellen gerundet).",
        "hint": "Verwenden Sie die Formel für den Flächeninhalt des Kreises, in der der Radius quadriert wird.",
        "whyWrong": [
          "Sie haben π mit r multipliziert, ohne den Radius zu quadrieren.",
          "Das ist der Umfang (2πr), nicht der Flächeninhalt.",
          "Sie haben den Durchmesser 8 cm statt des Radius verwendet: π × 8² = 64π.",
          null
        ]
      }
    },
    {
      "id": 4,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Një drejtkëndësh ka gjatësi 7 cm dhe gjerësi 4 cm. Llogaritni perimetrin e tij.",
        "options": [
          "11 cm",
          "22 cm",
          "28 cm",
          "18 cm"
        ],
        "explanation": "Perimetri është shuma e të katër brinjëve: P = 2 × (a + b) = 2 × (7 + 4) = 2 × 11 = 22 cm.",
        "hint": "Perimetri është shuma e të gjitha brinjëve; drejtkëndëshi ka dy palë brinjë të barabarta.",
        "whyWrong": [
          "Keni mbledhur vetëm dy brinjë (7 + 4) dhe keni harruar të shumëzoni me 2.",
          null,
          "Keni llogaritur sipërfaqen (7 × 4 = 28 cm²), jo perimetrin.",
          "Keni mbledhur vetëm tri brinjë (7 + 7 + 4)."
        ]
      },
      "en": {
        "question": "A rectangle has length 7 cm and width 4 cm. Calculate its perimeter.",
        "options": [
          "11 cm",
          "22 cm",
          "28 cm",
          "18 cm"
        ],
        "explanation": "The perimeter is the sum of all four sides: P = 2 × (a + b) = 2 × (7 + 4) = 2 × 11 = 22 cm.",
        "hint": "The perimeter is the sum of all sides; a rectangle has two pairs of equal sides.",
        "whyWrong": [
          "You added only two sides (7 + 4) and forgot to multiply by 2.",
          null,
          "You calculated the area (7 × 4 = 28 cm²), not the perimeter.",
          "You added only three sides (7 + 7 + 4)."
        ]
      },
      "de": {
        "question": "Ein Rechteck ist 7 cm lang und 4 cm breit. Berechnen Sie seinen Umfang.",
        "options": [
          "11 cm",
          "22 cm",
          "28 cm",
          "18 cm"
        ],
        "explanation": "Der Umfang ist die Summe aller vier Seiten: U = 2 × (a + b) = 2 × (7 + 4) = 2 × 11 = 22 cm.",
        "hint": "Der Umfang ist die Summe aller Seiten; ein Rechteck hat zwei Paare gleich langer Seiten.",
        "whyWrong": [
          "Sie haben nur zwei Seiten addiert (7 + 4) und vergessen, mit 2 zu multiplizieren.",
          null,
          "Sie haben den Flächeninhalt berechnet (7 × 4 = 28 cm²), nicht den Umfang.",
          "Sie haben nur drei Seiten addiert (7 + 7 + 4)."
        ]
      }
    },
    {
      "id": 5,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Një trekëndësh ka bazë 10 cm dhe lartësi mbi këtë bazë 6 cm. Llogaritni sipërfaqen e tij.",
        "options": [
          "30 cm²",
          "60 cm²",
          "16 cm²",
          "8 cm²"
        ],
        "explanation": "S = (a × h) / 2 = (10 × 6) / 2 = 60 / 2 = 30 cm².",
        "hint": "Sipërfaqja e trekëndëshit është gjysma e sipërfaqes së drejtkëndëshit me të njëjtën bazë dhe lartësi.",
        "whyWrong": [
          null,
          "Keni harruar të pjesëtoni me 2; 60 cm² është sipërfaqja e drejtkëndëshit përkatës.",
          "Keni mbledhur bazën dhe lartësinë (10 + 6) në vend që t'i shumëzoni.",
          "Keni mbledhur bazën dhe lartësinë dhe pastaj keni pjesëtuar me 2."
        ]
      },
      "en": {
        "question": "A triangle has a base of 10 cm and a height of 6 cm to that base. Calculate its area.",
        "options": [
          "30 cm²",
          "60 cm²",
          "16 cm²",
          "8 cm²"
        ],
        "explanation": "A = (b × h) / 2 = (10 × 6) / 2 = 60 / 2 = 30 cm².",
        "hint": "A triangle's area is half the area of the rectangle with the same base and height.",
        "whyWrong": [
          null,
          "You forgot to divide by 2; 60 cm² is the area of the matching rectangle.",
          "You added base and height (10 + 6) instead of multiplying them.",
          "You added base and height and then divided by 2."
        ]
      },
      "de": {
        "question": "Ein Dreieck hat die Grundseite 10 cm und die zugehörige Höhe 6 cm. Berechnen Sie seinen Flächeninhalt.",
        "options": [
          "30 cm²",
          "60 cm²",
          "16 cm²",
          "8 cm²"
        ],
        "explanation": "A = (g × h) / 2 = (10 × 6) / 2 = 60 / 2 = 30 cm².",
        "hint": "Der Flächeninhalt eines Dreiecks ist halb so groß wie der eines Rechtecks mit gleicher Grundseite und Höhe.",
        "whyWrong": [
          null,
          "Sie haben vergessen, durch 2 zu teilen; 60 cm² ist der Flächeninhalt des passenden Rechtecks.",
          "Sie haben Grundseite und Höhe addiert (10 + 6), statt sie zu multiplizieren.",
          "Sie haben Grundseite und Höhe addiert und dann durch 2 geteilt."
        ]
      }
    },
    {
      "id": 6,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Në një trekëndësh barakrahës këndi në kulm (ndërmjet krahëve të barabartë) është 40°. Gjeni masën e secilit kënd të bazës.",
        "options": [
          "40°",
          "140°",
          "70°",
          "60°"
        ],
        "explanation": "Shuma e këndeve të trekëndëshit është 180°. Dy këndet e bazës janë të barabarta: 180° − 40° = 140°, pra secili kënd i bazës është 140° : 2 = 70°.",
        "hint": "Në trekëndëshin barakrahës këndet e bazës janë të barabarta, dhe shuma e të tri këndeve është 180°.",
        "whyWrong": [
          "Keni supozuar se të gjitha këndet janë të barabarta me këndin në kulm.",
          "140° është shuma e dy këndeve të bazës; duhet pjesëtuar me 2.",
          null,
          "60° vlen vetëm për trekëndëshin barabrinjës."
        ]
      },
      "en": {
        "question": "In an isosceles triangle the apex angle (between the two equal sides) is 40°. Find the size of each base angle.",
        "options": [
          "40°",
          "140°",
          "70°",
          "60°"
        ],
        "explanation": "The angles of a triangle add up to 180°. The two base angles are equal: 180° − 40° = 140°, so each base angle is 140° ÷ 2 = 70°.",
        "hint": "In an isosceles triangle the base angles are equal, and all three angles add up to 180°.",
        "whyWrong": [
          "You assumed all angles equal the apex angle.",
          "140° is the sum of both base angles; you still need to divide by 2.",
          null,
          "60° only applies to an equilateral triangle."
        ]
      },
      "de": {
        "question": "In einem gleichschenkligen Dreieck beträgt der Winkel an der Spitze (zwischen den gleich langen Schenkeln) 40°. Bestimmen Sie die Größe jedes Basiswinkels.",
        "options": [
          "40°",
          "140°",
          "70°",
          "60°"
        ],
        "explanation": "Die Winkelsumme im Dreieck beträgt 180°. Die beiden Basiswinkel sind gleich groß: 180° − 40° = 140°, also ist jeder Basiswinkel 140° : 2 = 70°.",
        "hint": "Im gleichschenkligen Dreieck sind die Basiswinkel gleich groß, und die Winkelsumme beträgt 180°.",
        "whyWrong": [
          "Sie haben angenommen, dass alle Winkel so groß sind wie der Winkel an der Spitze.",
          "140° ist die Summe beider Basiswinkel; Sie müssen noch durch 2 teilen.",
          null,
          "60° gilt nur im gleichseitigen Dreieck."
        ]
      }
    },
    {
      "id": 7,
      "type": "choice",
      "correct": 3,
      "al": {
        "question": "Katetet e një trekëndëshi kënddrejtë janë 6 cm dhe 8 cm. Gjeni gjatësinë e hipotenuzës.",
        "options": [
          "√28 cm",
          "14 cm",
          "100 cm",
          "10 cm"
        ],
        "explanation": "c² = a² + b² = 6² + 8² = 36 + 64 = 100, pra c = √100 = 10 cm.",
        "hint": "Përdorni teoremën e Pitagorës: mblidhni katrorët e kateteve.",
        "whyWrong": [
          "Keni zbritur katrorët (64 − 36); për hipotenuzën katrorët mblidhen.",
          "Keni mbledhur katetet (6 + 8); duhet të mblidhen katrorët e tyre.",
          "100 është c²; keni harruar të nxirrni rrënjën katrore.",
          null
        ]
      },
      "en": {
        "question": "The legs of a right triangle are 6 cm and 8 cm. Find the length of the hypotenuse.",
        "options": [
          "√28 cm",
          "14 cm",
          "100 cm",
          "10 cm"
        ],
        "explanation": "c² = a² + b² = 6² + 8² = 36 + 64 = 100, so c = √100 = 10 cm.",
        "hint": "Use the Pythagorean theorem: add the squares of the legs.",
        "whyWrong": [
          "You subtracted the squares (64 − 36); for the hypotenuse they are added.",
          "You added the legs (6 + 8); you must add their squares.",
          "100 is c²; you forgot to take the square root.",
          null
        ]
      },
      "de": {
        "question": "Die Katheten eines rechtwinkligen Dreiecks sind 6 cm und 8 cm lang. Bestimmen Sie die Länge der Hypotenuse.",
        "options": [
          "√28 cm",
          "14 cm",
          "100 cm",
          "10 cm"
        ],
        "explanation": "c² = a² + b² = 6² + 8² = 36 + 64 = 100, also c = √100 = 10 cm.",
        "hint": "Verwenden Sie den Satz des Pythagoras: Addieren Sie die Quadrate der Katheten.",
        "whyWrong": [
          "Sie haben die Quadrate subtrahiert (64 − 36); für die Hypotenuse werden sie addiert.",
          "Sie haben die Katheten addiert (6 + 8); addiert werden ihre Quadrate.",
          "100 ist c²; Sie haben vergessen, die Wurzel zu ziehen.",
          null
        ]
      }
    },
    {
      "id": 8,
      "type": "choice",
      "correct": 1,
      "al": {
        "question": "Një paralelepiped kënddrejtë ka përmasat 2 cm, 3 cm dhe 5 cm. Llogaritni vëllimin e tij.",
        "options": [
          "10 cm³",
          "30 cm³",
          "62 cm³",
          "15 cm³"
        ],
        "explanation": "V = a × b × c = 2 × 3 × 5 = 30 cm³.",
        "hint": "Vëllimi i paralelepipedit kënddrejtë është prodhimi i tri përmasave të tij.",
        "whyWrong": [
          "Keni mbledhur përmasat (2 + 3 + 5) në vend që t'i shumëzoni.",
          null,
          "Kjo është sipërfaqja e plotë: 2 × (6 + 10 + 15) = 62 cm².",
          "Keni shumëzuar vetëm dy përmasa (3 × 5) dhe keni harruar të tretën."
        ]
      },
      "en": {
        "question": "A cuboid (rectangular box) measures 2 cm by 3 cm by 5 cm. Calculate its volume.",
        "options": [
          "10 cm³",
          "30 cm³",
          "62 cm³",
          "15 cm³"
        ],
        "explanation": "V = a × b × c = 2 × 3 × 5 = 30 cm³.",
        "hint": "The volume of a cuboid is the product of its three dimensions.",
        "whyWrong": [
          "You added the dimensions (2 + 3 + 5) instead of multiplying them.",
          null,
          "This is the total surface area: 2 × (6 + 10 + 15) = 62 cm².",
          "You multiplied only two dimensions (3 × 5) and forgot the third."
        ]
      },
      "de": {
        "question": "Ein Quader hat die Kantenlängen 2 cm, 3 cm und 5 cm. Berechnen Sie sein Volumen.",
        "options": [
          "10 cm³",
          "30 cm³",
          "62 cm³",
          "15 cm³"
        ],
        "explanation": "V = a × b × c = 2 × 3 × 5 = 30 cm³.",
        "hint": "Das Volumen eines Quaders ist das Produkt seiner drei Kantenlängen.",
        "whyWrong": [
          "Sie haben die Kantenlängen addiert (2 + 3 + 5), statt sie zu multiplizieren.",
          null,
          "Das ist der Oberflächeninhalt: 2 × (6 + 10 + 15) = 62 cm².",
          "Sie haben nur zwei Kantenlängen multipliziert (3 × 5) und die dritte vergessen."
        ]
      }
    },
    {
      "id": 9,
      "type": "choice",
      "correct": 0,
      "al": {
        "question": "Sa është shuma e këndeve të brendshme të një gjashtëkëndëshi?",
        "options": [
          "720°",
          "360°",
          "540°",
          "1080°"
        ],
        "explanation": "Shuma e këndeve të brendshme të një shumëkëndëshi me n brinjë është (n − 2) × 180°. Për n = 6: (6 − 2) × 180° = 4 × 180° = 720°.",
        "hint": "Ndani gjashtëkëndëshin në trekëndësha nga një kulm dhe numëroni sa trekëndësha përftohen.",
        "whyWrong": [
          null,
          "360° është shuma për katërkëndëshin (ose shuma e këndeve të jashtme).",
          "540° është shuma për pesëkëndëshin; keni përdorur n − 3 në vend të n − 2.",
          "Keni shumëzuar 6 × 180° pa zbritur 2."
        ]
      },
      "en": {
        "question": "What is the sum of the interior angles of a hexagon?",
        "options": [
          "720°",
          "360°",
          "540°",
          "1080°"
        ],
        "explanation": "The interior angles of an n-sided polygon add up to (n − 2) × 180°. For n = 6: (6 − 2) × 180° = 4 × 180° = 720°.",
        "hint": "Split the hexagon into triangles from one vertex and count how many triangles you get.",
        "whyWrong": [
          null,
          "360° is the sum for a quadrilateral (or the sum of the exterior angles).",
          "540° is the sum for a pentagon; you used n − 3 instead of n − 2.",
          "You multiplied 6 × 180° without subtracting 2."
        ]
      },
      "de": {
        "question": "Wie groß ist die Innenwinkelsumme eines Sechsecks?",
        "options": [
          "720°",
          "360°",
          "540°",
          "1080°"
        ],
        "explanation": "Die Innenwinkelsumme eines n-Ecks beträgt (n − 2) × 180°. Für n = 6: (6 − 2) × 180° = 4 × 180° = 720°.",
        "hint": "Zerlegen Sie das Sechseck von einer Ecke aus in Dreiecke und zählen Sie diese.",
        "whyWrong": [
          null,
          "360° ist die Summe beim Viereck (bzw. die Außenwinkelsumme).",
          "540° ist die Summe beim Fünfeck; Sie haben n − 3 statt n − 2 verwendet.",
          "Sie haben 6 × 180° gerechnet, ohne 2 abzuziehen."
        ]
      }
    },
    {
      "id": 10,
      "type": "choice",
      "correct": 2,
      "al": {
        "question": "Dy drejtëza paralele priten nga një drejtëz e tretë (sekante). Njëri nga dy këndet e brendshme në të njëjtën anë të sekantes (ndërmjet paraleleve) është 65°. Sa është këndi tjetër i brendshëm në të njëjtën anë?",
        "options": [
          "25°",
          "65°",
          "115°",
          "295°"
        ],
        "explanation": "Këndet e brendshme në të njëjtën anë të sekantes te drejtëzat paralele janë suplementare, pra shuma e tyre është 180°. Këndi tjetër: 180° − 65° = 115°.",
        "hint": "Kujtoni çfarë lidhjeje kanë këndet e brendshme në të njëjtën anë të sekantes kur drejtëzat janë paralele.",
        "whyWrong": [
          "Keni zbritur nga 90°; këndet janë suplementare (180°), jo komplementare.",
          "Këndet e brendshme alterne (të kryqëzuara) janë të barabarta, por këndet në të njëjtën anë nuk janë.",
          null,
          "Keni zbritur nga 360°; shuma e këtyre dy këndeve është 180°."
        ]
      },
      "en": {
        "question": "Two parallel lines are cut by a transversal. One of the two co-interior angles (on the same side of the transversal, between the parallel lines) is 65°. What is the other co-interior angle?",
        "options": [
          "25°",
          "65°",
          "115°",
          "295°"
        ],
        "explanation": "Co-interior angles between parallel lines are supplementary, so they add up to 180°. Other angle: 180° − 65° = 115°.",
        "hint": "Recall how the interior angles on the same side of a transversal are related when the lines are parallel.",
        "whyWrong": [
          "You subtracted from 90°; these angles are supplementary (180°), not complementary.",
          "Alternate interior angles are equal, but co-interior angles are not.",
          null,
          "You subtracted from 360°; these two angles add up to 180°."
        ]
      },
      "de": {
        "question": "Zwei parallele Geraden werden von einer dritten Geraden geschnitten. Einer der beiden Innenwinkel auf derselben Seite der schneidenden Geraden (zwischen den Parallelen) beträgt 65°. Wie groß ist der andere?",
        "options": [
          "25°",
          "65°",
          "115°",
          "295°"
        ],
        "explanation": "An geschnittenen Parallelen ergänzen sich diese Winkel (E-Winkel bzw. Ergänzungswinkel) zu 180°. Anderer Winkel: 180° − 65° = 115°.",
        "hint": "Überlegen Sie, wie die Innenwinkel auf derselben Seite der schneidenden Geraden bei Parallelen zusammenhängen.",
        "whyWrong": [
          "Sie haben von 90° abgezogen; die Winkel ergänzen sich zu 180°, nicht zu 90°.",
          "Wechselwinkel sind gleich groß, Ergänzungswinkel aber nicht.",
          null,
          "Sie haben von 360° abgezogen; die beiden Winkel ergeben zusammen 180°."
        ]
      }
    },
    {
      "id": 11,
      "type": "input",
      "answer": {
        "value": 81
      },
      "al": {
        "question": "Perimetri i një katrori është 36 cm. Llogaritni sipërfaqen e tij në cm².",
        "explanation": "Katrori ka 4 brinjë të barabarta: a = 36 : 4 = 9 cm. Sipërfaqja: S = a² = 9² = 81 cm².",
        "hint": "Gjeni fillimisht gjatësinë e brinjës nga perimetri.",
        "unit": "cm²",
        "commonMistakes": [
          {
            "value": 324,
            "why": "Keni pjesëtuar perimetrin me 2 në vend të 4: brinja 18 cm dhe 18² = 324."
          },
          {
            "value": 9,
            "why": "Kjo është gjatësia e brinjës (9 cm), jo sipërfaqja."
          }
        ]
      },
      "en": {
        "question": "The perimeter of a square is 36 cm. Calculate its area in cm².",
        "explanation": "A square has 4 equal sides: a = 36 ÷ 4 = 9 cm. Area: A = a² = 9² = 81 cm².",
        "hint": "First find the side length from the perimeter.",
        "unit": "cm²",
        "commonMistakes": [
          {
            "value": 324,
            "why": "You divided the perimeter by 2 instead of 4: side 18 cm and 18² = 324."
          },
          {
            "value": 9,
            "why": "That is the side length (9 cm), not the area."
          }
        ]
      },
      "de": {
        "question": "Der Umfang eines Quadrats beträgt 36 cm. Berechnen Sie seinen Flächeninhalt in cm².",
        "explanation": "Ein Quadrat hat 4 gleich lange Seiten: a = 36 : 4 = 9 cm. Flächeninhalt: A = a² = 9² = 81 cm².",
        "hint": "Bestimmen Sie zuerst die Seitenlänge aus dem Umfang.",
        "unit": "cm²",
        "commonMistakes": [
          {
            "value": 324,
            "why": "Sie haben den Umfang durch 2 statt durch 4 geteilt: Seite 18 cm und 18² = 324."
          },
          {
            "value": 9,
            "why": "Das ist die Seitenlänge (9 cm), nicht der Flächeninhalt."
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "input",
      "answer": {
        "value": 65
      },
      "al": {
        "question": "Dy kënde të një trekëndëshi janë 47° dhe 68°. Sa gradë është këndi i tretë?",
        "explanation": "Shuma e këndeve në trekëndësh është 180°. Këndi i tretë: 180° − 47° − 68° = 180° − 115° = 65°.",
        "hint": "Kujtoni sa është shuma e këndeve të brendshme të një trekëndëshi.",
        "unit": "°",
        "commonMistakes": [
          {
            "value": 245,
            "why": "Keni përdorur 360° (shuma e këndeve të katërkëndëshit) në vend të 180°: 360° − 115° = 245°."
          }
        ]
      },
      "en": {
        "question": "Two angles of a triangle measure 47° and 68°. How many degrees is the third angle?",
        "explanation": "The angles of a triangle add up to 180°. Third angle: 180° − 47° − 68° = 180° − 115° = 65°.",
        "hint": "Recall the sum of the interior angles of a triangle.",
        "unit": "°",
        "commonMistakes": [
          {
            "value": 245,
            "why": "You used 360° (the angle sum of a quadrilateral) instead of 180°: 360° − 115° = 245°."
          }
        ]
      },
      "de": {
        "question": "Zwei Winkel eines Dreiecks betragen 47° und 68°. Wie viel Grad hat der dritte Winkel?",
        "explanation": "Die Winkelsumme im Dreieck beträgt 180°. Dritter Winkel: 180° − 47° − 68° = 180° − 115° = 65°.",
        "hint": "Denken Sie an die Innenwinkelsumme eines Dreiecks.",
        "unit": "°",
        "commonMistakes": [
          {
            "value": 245,
            "why": "Sie haben 360° (Winkelsumme im Viereck) statt 180° verwendet: 360° − 115° = 245°."
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "truefalse",
      "correct": true,
      "al": {
        "question": "Shuma e këndeve të jashtme të çdo shumëkëndëshi konveks (një kënd në secilin kulm) është 360°.",
        "explanation": "Në çdo kulm, këndi i jashtëm = 180° − këndi i brendshëm. Për n kulme: n · 180° − (n − 2) · 180° = 360°. Pra shuma nuk varet nga numri i brinjëve; pohimi është i vërtetë.",
        "hint": "Në çdo kulm, këndi i brendshëm dhe ai i jashtëm së bashku japin 180°.",
        "whyWrong": "Pohimi nuk është i gabuar: n · 180° minus shumën e këndeve të brendshme (n − 2) · 180° jep gjithmonë 360°, për çdo numër brinjësh."
      },
      "en": {
        "question": "The exterior angles of any convex polygon (one at each vertex) add up to 360°.",
        "explanation": "At each vertex, exterior angle = 180° − interior angle. For n vertices: n · 180° − (n − 2) · 180° = 360°. So the sum does not depend on the number of sides; the statement is true.",
        "hint": "At each vertex the interior and exterior angles together make 180°.",
        "whyWrong": "The statement is not false: n · 180° minus the interior angle sum (n − 2) · 180° always gives 360°, whatever the number of sides."
      },
      "de": {
        "question": "Die Außenwinkel jedes konvexen Vielecks (einer an jeder Ecke) ergeben zusammen 360°.",
        "explanation": "An jeder Ecke gilt: Außenwinkel = 180° − Innenwinkel. Bei n Ecken: n · 180° − (n − 2) · 180° = 360°. Die Summe hängt also nicht von der Eckenzahl ab; die Aussage ist wahr.",
        "hint": "An jeder Ecke ergeben Innen- und Außenwinkel zusammen 180°.",
        "whyWrong": "Die Aussage ist nicht falsch: n · 180° minus die Innenwinkelsumme (n − 2) · 180° ergibt immer 360°, unabhängig von der Eckenzahl."
      }
    }
  ]
};
