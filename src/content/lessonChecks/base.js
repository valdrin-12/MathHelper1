// Questions for the remaining basic courses (short notation, see index.js).
export default {
  'arith-003': [
    // Percent concept
    [
      { a: 0, t: 'n', v: 0.4,
        al: ['Shkruani 40% si numër dhjetor.', '40% = 40/100 = 0,4.'],
        en: ['Write 40% as a decimal.', '40% = 40/100 = 0.4.'],
        de: ['Schreiben Sie 40 % als Dezimalzahl.', '40 % = 40/100 = 0,4.'] },
      { a: 2, t: 'c', k: 1,
        al: ['Sa është 3/4 në përqindje?', ['34%', '75%', '43%', '7,5%'], '3/4 = 0,75 dhe 0,75 × 100 = 75%.'],
        en: ['What is 3/4 as a percentage?', ['34%', '75%', '43%', '7.5%'], '3/4 = 0.75 and 0.75 × 100 = 75%.'],
        de: ['Wie viel Prozent sind 3/4?', ['34 %', '75 %', '43 %', '7,5 %'], '3/4 = 0,75 und 0,75 × 100 = 75 %.'] },
    ],
    // Calculating percentages
    [
      { a: 0, t: 'n', v: 12,
        al: ['Sa është 20% e 60?', '20% e 60 = 0,2 × 60 = 12.'],
        en: ['What is 20% of 60?', '20% of 60 = 0.2 × 60 = 12.'],
        de: ['Wie viel sind 20 % von 60?', '20 % von 60 = 0,2 × 60 = 12.'] },
      { a: 2, t: 'n', v: 9,
        al: ['Sa është 10% e 90? (pjesëtoni me 10)', '10% e çdo numri = numri ÷ 10, pra 90 ÷ 10 = 9.'],
        en: ['What is 10% of 90? (divide by 10)', '10% of any number = the number ÷ 10, so 90 ÷ 10 = 9.'],
        de: ['Wie viel sind 10 % von 90? (durch 10 teilen)', '10 % einer Zahl = Zahl ÷ 10, also 90 ÷ 10 = 9.'] },
    ],
    // Ratios and proportions
    [
      { a: 1, t: 'n', v: 10,
        al: ['3 lapsa kushtojnë 6 €. Sa kushtojnë 5 lapsa (në €)?', 'Përpjesëtim i drejtë: 1 laps kushton 2 €, pra 5 lapsa = 10 €.'],
        en: ['3 pencils cost €6. How much do 5 pencils cost (in €)?', 'Direct proportion: 1 pencil costs €2, so 5 pencils = €10.'],
        de: ['3 Stifte kosten 6 €. Wie viel kosten 5 Stifte (in €)?', 'Direkte Proportionalität: 1 Stift kostet 2 €, also kosten 5 Stifte 10 €.'] },
      { a: 2, t: 'tf', k: false,
        al: ['Te përpjesëtimi i zhdrejtë, kur x dyfishohet, edhe y dyfishohet.', 'E gabuar: te përpjesëtimi i zhdrejtë x × y është konstant, prandaj kur x dyfishohet, y përgjysmohet.'],
        en: ['In an inverse proportion, when x doubles, y doubles too.', 'False: in an inverse proportion x × y is constant, so when x doubles, y halves.'],
        de: ['Bei umgekehrter Proportionalität verdoppelt sich y, wenn sich x verdoppelt.', 'Falsch: Bei umgekehrter Proportionalität ist x × y konstant, verdoppelt sich x, halbiert sich y.'] },
    ],
  ],
  'alg-001': [
    // Variables and constants
    [
      { a: 0, t: 'tf', k: true,
        al: ['Një variabël mund të përfaqësojë një numër që ende nuk e dimë.', 'E vërtetë: variablat (x, y, …) përdoren për numra të panjohur ose që ndryshojnë.'],
        en: ['A variable can stand for a number we do not know yet.', 'True: variables (x, y, …) stand for unknown or changing numbers.'],
        de: ['Eine Variable kann für eine noch unbekannte Zahl stehen.', 'Richtig: Variablen (x, y, …) stehen für unbekannte oder veränderliche Zahlen.'] },
      { a: 1, t: 'n', v: 7,
        al: ['Cili është koeficienti i x në shprehjen 7x − 4?', 'Koeficienti është numri që shumëzon variablin: 7.'],
        en: ['What is the coefficient of x in 7x − 4?', 'The coefficient is the number multiplying the variable: 7.'],
        de: ['Welchen Koeffizienten hat x im Term 7x − 4?', 'Der Koeffizient ist die Zahl, die die Variable multipliziert: 7.'] },
    ],
    // Algebraic expressions
    [
      { a: 1, t: 'c', k: 1,
        al: ['Cilat janë terma të ngjashëm?', ['3x dhe 3y', '4x dhe −x', '2x dhe 2x²', 'x dhe 5'], '4x dhe −x kanë të njëjtin variabël me të njëjtën fuqi.'],
        en: ['Which are like terms?', ['3x and 3y', '4x and −x', '2x and 2x²', 'x and 5'], '4x and −x have the same variable with the same power.'],
        de: ['Welche Terme sind gleichartig?', ['3x und 3y', '4x und −x', '2x und 2x²', 'x und 5'], '4x und −x haben dieselbe Variable mit derselben Potenz.'] },
      { a: 2, t: 'c', k: 2,
        al: ['Thjeshtoni: 5x + 2 − 3x + 4', ['8x + 6', '2x + 2', '2x + 6', '8x + 2'], '(5x − 3x) + (2 + 4) = 2x + 6.'],
        en: ['Simplify: 5x + 2 − 3x + 4', ['8x + 6', '2x + 2', '2x + 6', '8x + 2'], '(5x − 3x) + (2 + 4) = 2x + 6.'],
        de: ['Vereinfachen Sie: 5x + 2 − 3x + 4', ['8x + 6', '2x + 2', '2x + 6', '8x + 2'], '(5x − 3x) + (2 + 4) = 2x + 6.'] },
    ],
    // First-degree equations
    [
      { a: 1, t: 'tf', k: true,
        al: ['Nëse të dyja anëve të një ekuacioni u shtojmë 5, zgjidhja nuk ndryshon.', 'E vërtetë: i njëjti veprim në të dyja anët e ruan barazimin.'],
        en: ['Adding 5 to both sides of an equation does not change its solution.', 'True: doing the same to both sides keeps the equation balanced.'],
        de: ['Addiert man auf beiden Seiten einer Gleichung 5, ändert sich die Lösung nicht.', 'Richtig: Dieselbe Umformung auf beiden Seiten erhält die Gleichung.'] },
      { a: 2, t: 'n', v: 4,
        al: ['Zgjidhni: 3x − 5 = 7', '3x = 12, pra x = 4.'],
        en: ['Solve: 3x − 5 = 7', '3x = 12, so x = 4.'],
        de: ['Lösen Sie: 3x − 5 = 7', '3x = 12, also x = 4.'] },
    ],
    // Inequalities
    [
      { a: 1, t: 'c', k: 2,
        al: ['Cili numër e plotëson x > 3?', ['3', '0', '3,5', '−4'], 'Vetëm 3,5 është më i madh se 3 (vetë 3 nuk e plotëson x > 3).'],
        en: ['Which number satisfies x > 3?', ['3', '0', '3.5', '−4'], 'Only 3.5 is greater than 3 (3 itself does not satisfy x > 3).'],
        de: ['Welche Zahl erfüllt x > 3?', ['3', '0', '3,5', '−4'], 'Nur 3,5 ist größer als 3 (3 selbst erfüllt x > 3 nicht).'] },
      { a: 2, t: 'c', k: 0,
        al: ['Zgjidhni: −2x < 6', ['x > −3', 'x < −3', 'x > 3', 'x < 3'], 'Pjesëtojmë me −2 dhe kahu ndërrohet: x > −3.'],
        en: ['Solve: −2x < 6', ['x > −3', 'x < −3', 'x > 3', 'x < 3'], 'Divide by −2 and the sign flips: x > −3.'],
        de: ['Lösen Sie: −2x < 6', ['x > −3', 'x < −3', 'x > 3', 'x < 3'], 'Division durch −2 dreht das Zeichen um: x > −3.'] },
    ],
  ],
  'alg-002': [
    // Systems of equations
    [
      { a: 0, t: 'tf', k: true,
        al: ['Çifti (2, 1) është zgjidhje e sistemit x + y = 3 dhe x − y = 1.', 'E vërtetë: 2 + 1 = 3 dhe 2 − 1 = 1.'],
        en: ['The pair (2, 1) solves the system x + y = 3 and x − y = 1.', 'True: 2 + 1 = 3 and 2 − 1 = 1.'],
        de: ['Das Paar (2, 1) löst das System x + y = 3 und x − y = 1.', 'Richtig: 2 + 1 = 3 und 2 − 1 = 1.'] },
      { a: 2, t: 'c', k: 1,
        al: ['Sa zgjidhje ka një sistem kur drejtëzat e tij janë paralele (dhe të ndryshme)?', ['Një', 'Asnjë', 'Dy', 'Pafund'], 'Drejtëzat paralele nuk priten, prandaj sistemi nuk ka zgjidhje.'],
        en: ['How many solutions does a system have when its lines are parallel (and different)?', ['One', 'None', 'Two', 'Infinitely many'], 'Parallel lines never meet, so the system has no solution.'],
        de: ['Wie viele Lösungen hat ein System, dessen Geraden parallel (und verschieden) sind?', ['Eine', 'Keine', 'Zwei', 'Unendlich viele'], 'Parallele Geraden schneiden sich nie, also hat das System keine Lösung.'] },
    ],
    // Linear functions
    [
      { a: 0, t: 'n', v: -2,
        al: ['Sa është pjerrësia m e drejtëzës y = −2x + 5?', 'Në y = mx + b, pjerrësia është koeficienti i x: m = −2.'],
        en: ['What is the slope m of y = −2x + 5?', 'In y = mx + b the slope is the coefficient of x: m = −2.'],
        de: ['Welche Steigung m hat die Gerade y = −2x + 5?', 'In y = mx + b ist die Steigung der Koeffizient von x: m = −2.'] },
      { a: 2, t: 'c', k: 3,
        al: ['Ku e pret drejtëza y = 3x + 4 boshtin y?', ['(4; 0)', '(3; 0)', '(0; 3)', '(0; 4)'], 'Për x = 0 kemi y = 4, pra pika (0; 4).'],
        en: ['Where does y = 3x + 4 cross the y-axis?', ['(4, 0)', '(3, 0)', '(0, 3)', '(0, 4)'], 'For x = 0, y = 4, so the point is (0, 4).'],
        de: ['Wo schneidet y = 3x + 4 die y-Achse?', ['(4; 0)', '(3; 0)', '(0; 3)', '(0; 4)'], 'Für x = 0 ist y = 4, also im Punkt (0; 4).'] },
    ],
    // Quadratic equations
    [
      { a: 1, t: 'c', k: 0,
        al: ['Cilat janë zgjidhjet e (x − 1)(x + 5) = 0?', ['x = 1 ose x = −5', 'x = −1 ose x = 5', 'x = 1 ose x = 5', 'vetëm x = 1'], 'Prodhimi është zero kur një faktor është zero: x − 1 = 0 ose x + 5 = 0.'],
        en: ['What are the solutions of (x − 1)(x + 5) = 0?', ['x = 1 or x = −5', 'x = −1 or x = 5', 'x = 1 or x = 5', 'only x = 1'], 'A product is zero when a factor is zero: x − 1 = 0 or x + 5 = 0.'],
        de: ['Welche Lösungen hat (x − 1)(x + 5) = 0?', ['x = 1 oder x = −5', 'x = −1 oder x = 5', 'x = 1 oder x = 5', 'nur x = 1'], 'Ein Produkt ist null, wenn ein Faktor null ist: x − 1 = 0 oder x + 5 = 0.'] },
      { a: 2, t: 'n', v: 0,
        al: ['Sa është diskriminanti D i x² − 6x + 9 = 0?', 'D = (−6)² − 4·1·9 = 36 − 36 = 0, pra një rrënjë e dyfishtë (x = 3).'],
        en: ['What is the discriminant D of x² − 6x + 9 = 0?', 'D = (−6)² − 4·1·9 = 36 − 36 = 0, so there is one double root (x = 3).'],
        de: ['Wie groß ist die Diskriminante D von x² − 6x + 9 = 0?', 'D = (−6)² − 4·1·9 = 36 − 36 = 0, also eine doppelte Lösung (x = 3).'] },
    ],
  ],
  'geo-001': [
    // Point, line, plane
    [
      { a: 1, t: 'n', v: 1,
        al: ['Sa drejtëza kalojnë nëpër dy pika të ndryshme?', 'Dy pika përcaktojnë saktësisht një drejtëz.'],
        en: ['How many lines pass through two different points?', 'Two points determine exactly one line.'],
        de: ['Wie viele Geraden gehen durch zwei verschiedene Punkte?', 'Zwei Punkte bestimmen genau eine Gerade.'] },
      { a: 2, t: 'c', k: 2,
        al: ['Dy drejtëza që priten nën kënd 90° quhen:', ['paralele', 'prerëse të pjerrëta', 'pingule', 'përputhëse'], 'Drejtëzat që formojnë kënd të drejtë janë pingule.'],
        en: ['Two lines meeting at a 90° angle are called:', ['parallel', 'oblique', 'perpendicular', 'coincident'], 'Lines that form a right angle are perpendicular.'],
        de: ['Zwei Geraden, die sich im 90°-Winkel schneiden, heißen:', ['parallel', 'schief', 'senkrecht (orthogonal)', 'identisch'], 'Geraden, die einen rechten Winkel bilden, sind senkrecht zueinander.'] },
    ],
    // Angles
    [
      { a: 1, t: 'c', k: 2,
        al: ['Këndi 130° është:', ['i ngushtë', 'i drejtë', 'i gjerë', 'i shtrirë'], 'Ndërmjet 90° dhe 180° këndi është i gjerë.'],
        en: ['An angle of 130° is:', ['acute', 'right', 'obtuse', 'straight'], 'Between 90° and 180° an angle is obtuse.'],
        de: ['Ein Winkel von 130° ist:', ['spitz', 'recht', 'stumpf', 'gestreckt'], 'Zwischen 90° und 180° ist ein Winkel stumpf.'] },
      { a: 2, t: 'n', v: 40,
        al: ['Sa gradë ka këndi plotësues i 50°?', 'Këndet plotësuese kanë shumë 90°: 90° − 50° = 40°.'],
        en: ['How many degrees is the complement of 50°?', 'Complementary angles add up to 90°: 90° − 50° = 40°.'],
        de: ['Wie groß ist der Komplementwinkel von 50° (in Grad)?', 'Komplementwinkel ergeben zusammen 90°: 90° − 50° = 40°.'] },
    ],
    // Triangles
    [
      { a: 0, t: 'n', v: 70,
        al: ['Dy kënde të një trekëndëshi janë 50° dhe 60°. Sa gradë ka këndi i tretë?', '180° − 50° − 60° = 70°.'],
        en: ['Two angles of a triangle are 50° and 60°. How many degrees is the third?', '180° − 50° − 60° = 70°.'],
        de: ['Zwei Winkel eines Dreiecks sind 50° und 60°. Wie groß ist der dritte (in Grad)?', '180° − 50° − 60° = 70°.'] },
      { a: 2, t: 'n', v: 15,
        al: ['Sa është sipërfaqja e trekëndëshit me bazë 6 cm dhe lartësi 5 cm (në cm²)?', 'S = (6 × 5) / 2 = 15 cm².'],
        en: ['What is the area of a triangle with base 6 cm and height 5 cm (in cm²)?', 'A = (6 × 5) / 2 = 15 cm².'],
        de: ['Wie groß ist die Fläche eines Dreiecks mit Grundseite 6 cm und Höhe 5 cm (in cm²)?', 'A = (6 × 5) / 2 = 15 cm².'] },
    ],
    // Quadrilaterals
    [
      { a: 0, t: 'tf', k: true,
        al: ['Shuma e këndeve të brendshme të çdo katërkëndëshi është 360°.', 'E vërtetë: diagonalja e ndan katërkëndëshin në dy trekëndësha, 2 × 180° = 360°.'],
        en: ['The interior angles of any quadrilateral add up to 360°.', 'True: a diagonal splits it into two triangles, 2 × 180° = 360°.'],
        de: ['Die Innenwinkel jedes Vierecks ergeben zusammen 360°.', 'Richtig: Eine Diagonale teilt es in zwei Dreiecke, 2 × 180° = 360°.'] },
      { a: 2, t: 'n', v: 22,
        al: ['Sa është perimetri i drejtkëndëshit 7 cm × 4 cm (në cm)?', 'P = 2(7 + 4) = 22 cm.'],
        en: ['What is the perimeter of a 7 cm × 4 cm rectangle (in cm)?', 'P = 2(7 + 4) = 22 cm.'],
        de: ['Wie groß ist der Umfang eines Rechtecks 7 cm × 4 cm (in cm)?', 'U = 2(7 + 4) = 22 cm.'] },
    ],
  ],
  'stat-001': [
    // Basic concepts
    [
      { a: 1, t: 'c', k: 1,
        al: ['Pyetim 50 nxënës të një shkolle me 800 nxënës. Mostra është:', ['800 nxënësit', '50 nxënësit e pyetur', 'shkolla', 'përgjigjet'], 'Mostra është pjesa e popullatës që studiojmë: 50 nxënësit.'],
        en: ['We ask 50 students of a school with 800 students. The sample is:', ['the 800 students', 'the 50 students asked', 'the school', 'the answers'], 'The sample is the part of the population we study: the 50 students.'],
        de: ['Wir befragen 50 Schüler einer Schule mit 800 Schülern. Die Stichprobe ist:', ['die 800 Schüler', 'die 50 befragten Schüler', 'die Schule', 'die Antworten'], 'Die Stichprobe ist der untersuchte Teil der Grundgesamtheit: die 50 Schüler.'] },
      { a: 2, t: 'c', k: 2,
        al: ['Cila variabël është cilësore (kategorike)?', ['gjatësia në cm', 'mosha në vite', 'ngjyra e preferuar', 'pesha në kg'], 'Ngjyra është kategori, jo numër që matet.'],
        en: ['Which variable is qualitative (categorical)?', ['height in cm', 'age in years', 'favourite colour', 'weight in kg'], 'Colour is a category, not a measured number.'],
        de: ['Welches Merkmal ist qualitativ (kategorial)?', ['Größe in cm', 'Alter in Jahren', 'Lieblingsfarbe', 'Gewicht in kg'], 'Eine Farbe ist eine Kategorie, keine gemessene Zahl.'] },
    ],
    // Averages
    [
      { a: 1, t: 'n', v: 6,
        al: ['Sa është mesatarja e 4, 6, 8?', '(4 + 6 + 8) / 3 = 18 / 3 = 6.'],
        en: ['What is the mean of 4, 6, 8?', '(4 + 6 + 8) / 3 = 18 / 3 = 6.'],
        de: ['Wie groß ist der Mittelwert von 4, 6, 8?', '(4 + 6 + 8) / 3 = 18 / 3 = 6.'] },
      { a: 1, t: 'n', v: 5,
        al: ['Sa është mediana e 9, 1, 5, 3, 7?', 'Të renditura: 1, 3, 5, 7, 9; vlera e mesit është 5.'],
        en: ['What is the median of 9, 1, 5, 3, 7?', 'Sorted: 1, 3, 5, 7, 9; the middle value is 5.'],
        de: ['Wie lautet der Median von 9, 1, 5, 3, 7?', 'Sortiert: 1, 3, 5, 7, 9; der mittlere Wert ist 5.'] },
    ],
    // Spread and variance
    [
      { a: 1, t: 'n', v: 8,
        al: ['Sa është gjerësia e të dhënave 3, 8, 5, 11?', 'Gjerësia = maksimumi − minimumi = 11 − 3 = 8.'],
        en: ['What is the range of 3, 8, 5, 11?', 'Range = maximum − minimum = 11 − 3 = 8.'],
        de: ['Wie groß ist die Spannweite von 3, 8, 5, 11?', 'Spannweite = Maximum − Minimum = 11 − 3 = 8.'] },
      { a: 2, t: 'tf', k: true,
        al: ['Devijimi standard i vogël do të thotë se të dhënat janë afër mesatares.', 'E vërtetë: σ e vogël tregon që vlerat janë të grumbulluara rreth mesatares.'],
        en: ['A small standard deviation means the data are close to the mean.', 'True: a small σ shows the values cluster around the mean.'],
        de: ['Eine kleine Standardabweichung bedeutet, dass die Daten nahe am Mittelwert liegen.', 'Richtig: Ein kleines σ zeigt, dass die Werte um den Mittelwert gehäuft sind.'] },
    ],
  ],
};
