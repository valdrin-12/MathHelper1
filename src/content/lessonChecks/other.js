// Questions for trigonometry, statistics, linear algebra and number theory (short notation, see index.js).
export default {
  'trig-001': [
    // Trigonometric ratios
    [
      { a: 1, t: 'c', k: 0,
        al: ['Në trekëndëshin kënddrejtë 3-4-5, sa është sin θ për këndin përballë katetit 3?', ['3/5', '4/5', '3/4', '5/3'], 'sin θ = kateti përballë / hipotenuza = 3/5.'],
        en: ['In the 3-4-5 right triangle, what is sin θ for the angle opposite the side 3?', ['3/5', '4/5', '3/4', '5/3'], 'sin θ = opposite / hypotenuse = 3/5.'],
        de: ['Im rechtwinkligen 3-4-5-Dreieck: Wie groß ist sin θ für den Winkel gegenüber der Seite 3?', ['3/5', '4/5', '3/4', '5/3'], 'sin θ = Gegenkathete / Hypotenuse = 3/5.'] },
      { a: 2, t: 'c', k: 2,
        al: ['Sipas SOH-CAH-TOA, tan θ është:', ['përballë / hipotenuzë', 'anësor / hipotenuzë', 'përballë / anësor', 'anësor / përballë'], 'TOA: tan = kateti përballë / kateti anësor.'],
        en: ['By SOH-CAH-TOA, tan θ is:', ['opposite / hypotenuse', 'adjacent / hypotenuse', 'opposite / adjacent', 'adjacent / opposite'], 'TOA: tan = opposite / adjacent.'],
        de: ['Nach SOH-CAH-TOA ist tan θ:', ['Gegenkathete / Hypotenuse', 'Ankathete / Hypotenuse', 'Gegenkathete / Ankathete', 'Ankathete / Gegenkathete'], 'TOA: tan = Gegenkathete / Ankathete.'] },
    ],
    // Special angles
    [
      { a: 0, t: 'n', v: 0.5,
        al: ['Sa është sin 30°? (shkruani si numër dhjetor)', 'sin 30° = 1/2 = 0,5.'],
        en: ['What is sin 30°? (as a decimal)', 'sin 30° = 1/2 = 0.5.'],
        de: ['Wie groß ist sin 30°? (als Dezimalzahl)', 'sin 30° = 1/2 = 0,5.'] },
      { a: 1, t: 'tf', k: true,
        al: ['cos 60° = sin 30°.', 'E vërtetë: të dyja janë 1/2, sepse 30° + 60° = 90°.'],
        en: ['cos 60° = sin 30°.', 'True: both are 1/2, because 30° + 60° = 90°.'],
        de: ['cos 60° = sin 30°.', 'Richtig: Beide sind 1/2, denn 30° + 60° = 90°.'] },
    ],
    // Solving triangles
    [
      { a: 1, t: 'c', k: 1,
        al: ['Njihen dy brinjë dhe këndi ndërmjet tyre (BKB). Cilin ligj përdorim për brinjën e tretë?', ['ligjin e sinusit', 'ligjin e kosinusit', 'teoremën e Pitagorës', 'asnjërin'], 'Për BKB dhe BBB përdoret ligji i kosinusit: c² = a² + b² − 2ab cos C.'],
        en: ['Two sides and the included angle are known (SAS). Which law gives the third side?', ['law of sines', 'law of cosines', 'Pythagorean theorem', 'neither'], 'For SAS and SSS use the law of cosines: c² = a² + b² − 2ab cos C.'],
        de: ['Zwei Seiten und der eingeschlossene Winkel sind bekannt (SWS). Welcher Satz liefert die dritte Seite?', ['Sinussatz', 'Kosinussatz', 'Satz des Pythagoras', 'keiner'], 'Bei SWS und SSS hilft der Kosinussatz: c² = a² + b² − 2ab cos C.'] },
      { a: 2, t: 'n', v: 75,
        al: ['Në një trekëndësh A = 45° dhe B = 60°. Sa gradë është C?', 'C = 180° − 45° − 60° = 75°.'],
        en: ['In a triangle A = 45° and B = 60°. How many degrees is C?', 'C = 180° − 45° − 60° = 75°.'],
        de: ['In einem Dreieck ist A = 45° und B = 60°. Wie groß ist C (in Grad)?', 'C = 180° − 45° − 60° = 75°.'] },
    ],
  ],
  'trig-002': [
    // The unit circle
    [
      { a: 0, t: 'c', k: 1,
        al: ['Cila pikë e rrethit njësi i përgjigjet θ = 90°?', ['(1; 0)', '(0; 1)', '(−1; 0)', '(0; −1)'], '(cos 90°; sin 90°) = (0; 1).'],
        en: ['Which point of the unit circle corresponds to θ = 90°?', ['(1, 0)', '(0, 1)', '(−1, 0)', '(0, −1)'], '(cos 90°, sin 90°) = (0, 1).'],
        de: ['Welcher Punkt des Einheitskreises gehört zu θ = 90°?', ['(1; 0)', '(0; 1)', '(−1; 0)', '(0; −1)'], '(cos 90°; sin 90°) = (0; 1).'] },
      { a: 2, t: 'tf', k: false,
        al: ['Në kuadrantin II kosinusi është pozitiv.', 'E gabuar: në kuadrantin II vetëm sinusi është pozitiv; cos < 0.'],
        en: ['In quadrant II the cosine is positive.', 'False: in quadrant II only the sine is positive; cos < 0.'],
        de: ['Im II. Quadranten ist der Kosinus positiv.', 'Falsch: Im II. Quadranten ist nur der Sinus positiv; cos < 0.'] },
    ],
    // Graphs of sine and cosine
    [
      { a: 0, t: 'n', v: 3,
        al: ['Sa është amplituda e y = 3 sin(2x)?', 'A = 3: grafiku lëkundet nga −3 deri në 3.'],
        en: ['What is the amplitude of y = 3 sin(2x)?', 'A = 3: the graph oscillates between −3 and 3.'],
        de: ['Wie groß ist die Amplitude von y = 3 sin(2x)?', 'A = 3: Der Graph schwingt zwischen −3 und 3.'] },
      { a: 0, t: 'c', k: 2,
        al: ['Sa është perioda e y = sin(2x)?', ['2π', '4π', 'π', 'π/2'], 'T = 2π/|B| = 2π/2 = π.'],
        en: ['What is the period of y = sin(2x)?', ['2π', '4π', 'π', 'π/2'], 'T = 2π/|B| = 2π/2 = π.'],
        de: ['Welche Periode hat y = sin(2x)?', ['2π', '4π', 'π', 'π/2'], 'T = 2π/|B| = 2π/2 = π.'] },
    ],
  ],
  'trig-003': [
    // Fundamental identities
    [
      { a: 1, t: 'n', v: 1,
        al: ['Sa është sin²(25°) + cos²(25°)?', 'Identiteti i Pitagorës: sin²θ + cos²θ = 1 për çdo kënd.'],
        en: ['What is sin²(25°) + cos²(25°)?', 'Pythagorean identity: sin²θ + cos²θ = 1 for every angle.'],
        de: ['Wie groß ist sin²(25°) + cos²(25°)?', 'Trigonometrischer Pythagoras: sin²θ + cos²θ = 1 für jeden Winkel.'] },
      { a: 2, t: 'c', k: 3,
        al: ['cos(A + B) është i barabartë me:', ['cos A cos B + sin A sin B', 'sin A cos B + cos A sin B', 'cos A + cos B', 'cos A cos B − sin A sin B'], 'cos(A ± B) = cos A cos B ∓ sin A sin B, pra te shuma shenja është minus.'],
        en: ['cos(A + B) equals:', ['cos A cos B + sin A sin B', 'sin A cos B + cos A sin B', 'cos A + cos B', 'cos A cos B − sin A sin B'], 'cos(A ± B) = cos A cos B ∓ sin A sin B, so the sum has a minus sign.'],
        de: ['cos(A + B) ist gleich:', ['cos A cos B + sin A sin B', 'sin A cos B + cos A sin B', 'cos A + cos B', 'cos A cos B − sin A sin B'], 'cos(A ± B) = cos A cos B ∓ sin A sin B, bei der Summe also ein Minus.'] },
    ],
  ],
  'trig-004': [
    // Advanced applications
    [
      { a: 0, t: 'n', v: 15,
        al: ['Trekëndëshi ka a = 6, b = 10 dhe C = 30°. Sa është sipërfaqja?', 'S = (1/2) · 6 · 10 · sin 30° = 30 · 1/2 = 15.'],
        en: ['A triangle has a = 6, b = 10 and C = 30°. What is its area?', 'A = (1/2) · 6 · 10 · sin 30° = 30 · 1/2 = 15.'],
        de: ['Ein Dreieck hat a = 6, b = 10 und C = 30°. Wie groß ist sein Flächeninhalt?', 'A = (1/2) · 6 · 10 · sin 30° = 30 · 1/2 = 15.'] },
      { a: 0, t: 'tf', k: true,
        al: ['Nëse njihen tri brinjët (BBB), trekëndëshi mund të zgjidhet plotësisht.', 'E vërtetë: ligji i kosinusit jep këndet, pastaj mund të gjendet edhe sipërfaqja.'],
        en: ['If all three sides are known (SSS), the triangle can be solved completely.', 'True: the law of cosines gives the angles, and then the area follows.'],
        de: ['Sind alle drei Seiten bekannt (SSS), lässt sich das Dreieck vollständig berechnen.', 'Richtig: Der Kosinussatz liefert die Winkel, danach auch den Flächeninhalt.'] },
    ],
  ],
  'stat-002': [
    // Probability basics
    [
      { a: 0, t: 'c', k: 1,
        al: ['Sa është probabiliteti që një zar të tregojë numër çift?', ['1/6', '1/2', '1/3', '2/3'], 'Rastet e favorshme: 2, 4, 6 → 3/6 = 1/2.'],
        en: ['What is the probability that a die shows an even number?', ['1/6', '1/2', '1/3', '2/3'], 'Favorable outcomes: 2, 4, 6 → 3/6 = 1/2.'],
        de: ['Wie groß ist die Wahrscheinlichkeit, mit einem Würfel eine gerade Zahl zu werfen?', ['1/6', '1/2', '1/3', '2/3'], 'Günstige Ergebnisse: 2, 4, 6 → 3/6 = 1/2.'] },
      { a: 2, t: 'tf', k: false,
        al: ['Probabiliteti i një ngjarjeje mund të jetë 1,2.', 'E gabuar: sipas aksiomave, 0 ≤ P(A) ≤ 1.'],
        en: ['The probability of an event can be 1.2.', 'False: by the axioms, 0 ≤ P(A) ≤ 1.'],
        de: ['Die Wahrscheinlichkeit eines Ereignisses kann 1,2 sein.', 'Falsch: Nach den Axiomen gilt 0 ≤ P(A) ≤ 1.'] },
    ],
    // Probability rules
    [
      { a: 0, t: 'n', v: 0.7,
        al: ['P(A) = 0,5, P(B) = 0,4 dhe P(A∩B) = 0,2. Sa është P(A∪B)?', 'P(A∪B) = 0,5 + 0,4 − 0,2 = 0,7.'],
        en: ['P(A) = 0.5, P(B) = 0.4 and P(A∩B) = 0.2. What is P(A∪B)?', 'P(A∪B) = 0.5 + 0.4 − 0.2 = 0.7.'],
        de: ['P(A) = 0,5, P(B) = 0,4 und P(A∩B) = 0,2. Wie groß ist P(A∪B)?', 'P(A∪B) = 0,5 + 0,4 − 0,2 = 0,7.'] },
      { a: 1, t: 'c', k: 2,
        al: ['Hidhen dy monedha. Sa është probabiliteti që të dyja të bien "kokë"?', ['1/2', '1/3', '1/4', '3/4'], 'Ngjarje të pavarura: (1/2) · (1/2) = 1/4.'],
        en: ['Two coins are tossed. What is the probability that both land heads?', ['1/2', '1/3', '1/4', '3/4'], 'Independent events: (1/2) · (1/2) = 1/4.'],
        de: ['Zwei Münzen werden geworfen. Wie groß ist die Wahrscheinlichkeit für zweimal Kopf?', ['1/2', '1/3', '1/4', '3/4'], 'Unabhängige Ereignisse: (1/2) · (1/2) = 1/4.'] },
    ],
  ],
  'stat-003': [
    // Sampling and distributions
    [
      { a: 0, t: 'n', v: 95,
        al: ['Te shpërndarja normale, rreth sa për qind e vlerave janë brenda 2σ nga mesatarja?', 'Sipas rregullit 68-95-99,7: rreth 95%.'],
        en: ['In a normal distribution, about what percent of values lie within 2σ of the mean?', 'By the 68-95-99.7 rule: about 95%.'],
        de: ['Wie viel Prozent der Werte liegen bei einer Normalverteilung etwa innerhalb von 2σ um den Mittelwert?', 'Nach der 68-95-99,7-Regel: etwa 95 %.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Sipas teoremës qendrore të limitit, mesataret e mostrave të mëdha shpërndahen afërsisht normalisht edhe kur popullata nuk është normale.', 'E vërtetë: kjo është arsyeja pse shumë teste statistikore funksionojnë.'],
        en: ['By the central limit theorem, means of large samples are approximately normal even when the population is not.', 'True: this is why many statistical tests work.'],
        de: ['Nach dem zentralen Grenzwertsatz sind Mittelwerte großer Stichproben annähernd normalverteilt, auch wenn die Grundgesamtheit es nicht ist.', 'Richtig: Deshalb funktionieren viele statistische Tests.'] },
    ],
  ],
  'stat-004': [
    // Linear regression
    [
      { a: 0, t: 'n', v: 13,
        al: ['Drejtëza e regresionit është ŷ = 3 + 2x. Sa është vlera e parashikuar për x = 5?', 'ŷ = 3 + 2 · 5 = 13.'],
        en: ['The regression line is ŷ = 3 + 2x. What is the predicted value for x = 5?', 'ŷ = 3 + 2 · 5 = 13.'],
        de: ['Die Regressionsgerade ist ŷ = 3 + 2x. Welcher Wert wird für x = 5 vorhergesagt?', 'ŷ = 3 + 2 · 5 = 13.'] },
      { a: 1, t: 'c', k: 3,
        al: ['Cili koeficient korrelacioni tregon lidhjen më të fortë?', ['r = 0,5', 'r = 0,1', 'r = 0', 'r = −0,9'], 'Forca varet nga |r|: |−0,9| = 0,9 është më afër 1 (lidhje e fortë negative).'],
        en: ['Which correlation coefficient shows the strongest relationship?', ['r = 0.5', 'r = 0.1', 'r = 0', 'r = −0.9'], 'Strength depends on |r|: |−0.9| = 0.9 is closest to 1 (a strong negative relationship).'],
        de: ['Welcher Korrelationskoeffizient zeigt den stärksten Zusammenhang?', ['r = 0,5', 'r = 0,1', 'r = 0', 'r = −0,9'], 'Die Stärke hängt von |r| ab: |−0,9| = 0,9 liegt am nächsten an 1 (starker negativer Zusammenhang).'] },
    ],
  ],
  'stat-005': [
    // Bayes' theorem
    [
      { a: 0, t: 'n', v: 0.6,
        al: ['P(B|A) = 0,8, P(A) = 0,3 dhe P(B) = 0,4. Sa është P(A|B)?', 'P(A|B) = 0,8 · 0,3 / 0,4 = 0,24 / 0,4 = 0,6.'],
        en: ['P(B|A) = 0.8, P(A) = 0.3 and P(B) = 0.4. What is P(A|B)?', 'P(A|B) = 0.8 · 0.3 / 0.4 = 0.24 / 0.4 = 0.6.'],
        de: ['P(B|A) = 0,8, P(A) = 0,3 und P(B) = 0,4. Wie groß ist P(A|B)?', 'P(A|B) = 0,8 · 0,3 / 0,4 = 0,24 / 0,4 = 0,6.'] },
      { a: 1, t: 'c', k: 1,
        al: ['Si quhet probabiliteti pasi kemi parë të dhënat?', ['probabiliteti paraprak', 'probabiliteti pasues (posterior)', 'gjasa (likelihood)', 'hapësira mostrore'], 'Nisemi nga paraprakja, e përditësojmë me të dhënat dhe marrim pasuesen.'],
        en: ['What is the probability after seeing the data called?', ['prior', 'posterior', 'likelihood', 'sample space'], 'We start with the prior, update it with data and get the posterior.'],
        de: ['Wie heißt die Wahrscheinlichkeit nach Betrachtung der Daten?', ['A-priori-Wahrscheinlichkeit', 'A-posteriori-Wahrscheinlichkeit', 'Likelihood', 'Ergebnismenge'], 'Man beginnt mit der A-priori-Wahrscheinlichkeit, aktualisiert sie mit Daten und erhält die A-posteriori-Wahrscheinlichkeit.'] },
    ],
  ],
  'stat-006': [
    // Time series
    [
      { a: 0, t: 'c', k: 2,
        al: ['Shitjet e akullores rriten çdo verë dhe bien çdo dimër. Cili përbërës është ky?', ['trendi', 'cikli', 'sezonaliteti', 'rastësia'], 'Luhatja e rregullt që përsëritet çdo vit është sezonalitet.'],
        en: ['Ice cream sales rise every summer and drop every winter. Which component is this?', ['trend', 'cycle', 'seasonality', 'randomness'], 'A regular variation that repeats every year is seasonality.'],
        de: ['Der Eisverkauf steigt jeden Sommer und sinkt jeden Winter. Welche Komponente ist das?', ['Trend', 'Zyklus', 'Saisonalität', 'Zufall'], 'Eine regelmäßige, jährlich wiederkehrende Schwankung ist Saisonalität.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Te modeli aditiv, përbërësit e serisë kohore mblidhen.', 'E vërtetë: Yₜ = Tₜ + Sₜ + Cₜ + Rₜ; te modeli multiplikativ ata shumëzohen.'],
        en: ['In the additive model, the components of a time series are added.', 'True: Yₜ = Tₜ + Sₜ + Cₜ + Rₜ; in the multiplicative model they are multiplied.'],
        de: ['Im additiven Modell werden die Komponenten einer Zeitreihe addiert.', 'Richtig: Yₜ = Tₜ + Sₜ + Cₜ + Rₜ; im multiplikativen Modell werden sie multipliziert.'] },
    ],
  ],
  'linalg-001': [
    // Vectors
    [
      { a: 0, t: 'n', v: 11,
        al: ['Sa është prodhimi skalar (1; 2) · (3; 4)?', '1 · 3 + 2 · 4 = 3 + 8 = 11.'],
        en: ['What is the dot product (1, 2) · (3, 4)?', '1 · 3 + 2 · 4 = 3 + 8 = 11.'],
        de: ['Wie groß ist das Skalarprodukt (1; 2) · (3; 4)?', '1 · 3 + 2 · 4 = 3 + 8 = 11.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Prodhimi vektorial u × v është pingul me të dy vektorët u dhe v.', 'E vërtetë: prandaj përdoret për të gjetur normalen e një rrafshi.'],
        en: ['The cross product u × v is perpendicular to both u and v.', 'True: that is why it is used to find the normal of a plane.'],
        de: ['Das Kreuzprodukt u × v steht senkrecht auf u und auf v.', 'Richtig: Deshalb bestimmt man damit den Normalenvektor einer Ebene.'] },
    ],
    // Matrices
    [
      { a: 0, t: 'c', k: 1,
        al: ['A është 2×3 dhe B është 3×4. Çfarë përmasash ka AB?', ['3×3', '2×4', '4×2', 'nuk mund të shumëzohen'], 'Numri i shtyllave të A (3) = numri i rreshtave të B (3); rezultati është 2×4.'],
        en: ['A is 2×3 and B is 3×4. What size is AB?', ['3×3', '2×4', '4×2', 'cannot be multiplied'], 'Columns of A (3) = rows of B (3); the result is 2×4.'],
        de: ['A ist 2×3 und B ist 3×4. Welches Format hat AB?', ['3×3', '2×4', '4×2', 'nicht multiplizierbar'], 'Spaltenzahl von A (3) = Zeilenzahl von B (3); das Ergebnis ist 2×4.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Për çdo matricë katrore A vlen A · I = A.', 'E vërtetë: matrica njësi I sillet si numri 1 te shumëzimi.'],
        en: ['For every square matrix A, A · I = A.', 'True: the identity matrix I behaves like the number 1 in multiplication.'],
        de: ['Für jede quadratische Matrix A gilt A · I = A.', 'Richtig: Die Einheitsmatrix I verhält sich bei der Multiplikation wie die Zahl 1.'] },
    ],
  ],
  'linalg-002': [
    // Gaussian elimination
    [
      { a: 0, t: 'c', k: 3,
        al: ['Cili NUK është veprim elementar me rreshta?', ['ndërrimi i dy rreshtave', 'shumëzimi i një rreshti me numër jozero', 'shtimi i një shumëfishi të një rreshti te një tjetër', 'ngritja e një rreshti në katror'], 'Veprimet elementare janë vetëm tri: ndërrimi, shumëzimi me skalar jozero dhe shtimi i një shumëfishi.'],
        en: ['Which is NOT an elementary row operation?', ['swapping two rows', 'multiplying a row by a nonzero number', 'adding a multiple of one row to another', 'squaring a row'], 'There are only three: swapping, scaling by a nonzero number, and adding a multiple of a row.'],
        de: ['Welche ist KEINE elementare Zeilenumformung?', ['zwei Zeilen vertauschen', 'eine Zeile mit einer Zahl ≠ 0 multiplizieren', 'ein Vielfaches einer Zeile zu einer anderen addieren', 'eine Zeile quadrieren'], 'Es gibt nur drei: Vertauschen, Multiplizieren mit einer Zahl ≠ 0 und Addieren eines Vielfachen.'] },
      { a: 1, t: 'n', v: 4,
        al: ['Forma e reduktuar është [1 0 | 4; 0 1 | −1]. Sa është x?', 'Rreshti i parë thotë x = 4 (dhe i dyti y = −1).'],
        en: ['The reduced form is [1 0 | 4; 0 1 | −1]. What is x?', 'The first row says x = 4 (and the second y = −1).'],
        de: ['Die reduzierte Form ist [1 0 | 4; 0 1 | −1]. Wie groß ist x?', 'Die erste Zeile besagt x = 4 (die zweite y = −1).'] },
    ],
  ],
  'linalg-003': [
    // Vector spaces
    [
      { a: 1, t: 'tf', k: false,
        al: ['Drejtëza y = x + 1 në ℝ² është nënhapësirë.', 'E gabuar: ajo nuk e përmban vektorin zero (0; 0).'],
        en: ['The line y = x + 1 in ℝ² is a subspace.', 'False: it does not contain the zero vector (0, 0).'],
        de: ['Die Gerade y = x + 1 in ℝ² ist ein Untervektorraum.', 'Falsch: Sie enthält den Nullvektor (0; 0) nicht.'] },
      { a: 2, t: 'c', k: 1,
        al: ['Cilët vektorë janë linearisht të varur?', ['(1; 0) dhe (0; 1)', '(1; 2) dhe (2; 4)', '(1; 1) dhe (1; −1)', '(2; 0) dhe (0; 3)'], '(2; 4) = 2 · (1; 2), pra njëri është shumëfish i tjetrit.'],
        en: ['Which vectors are linearly dependent?', ['(1, 0) and (0, 1)', '(1, 2) and (2, 4)', '(1, 1) and (1, −1)', '(2, 0) and (0, 3)'], '(2, 4) = 2 · (1, 2), so one is a multiple of the other.'],
        de: ['Welche Vektoren sind linear abhängig?', ['(1; 0) und (0; 1)', '(1; 2) und (2; 4)', '(1; 1) und (1; −1)', '(2; 0) und (0; 3)'], '(2; 4) = 2 · (1; 2), einer ist also ein Vielfaches des anderen.'] },
    ],
  ],
  'linalg-004': [
    // Eigenvalues
    [
      { a: 0, t: 'c', k: 2,
        al: ['Cilat janë vlerat vetjake të matricës diagonale [2 0; 0 5]?', ['0 dhe 7', '2 dhe 0', '2 dhe 5', '10'], 'Te matrica diagonale (ose trekëndore), vlerat vetjake janë elementet e diagonales.'],
        en: ['What are the eigenvalues of the diagonal matrix [2 0; 0 5]?', ['0 and 7', '2 and 0', '2 and 5', '10'], 'For a diagonal (or triangular) matrix, the eigenvalues are the diagonal entries.'],
        de: ['Welche Eigenwerte hat die Diagonalmatrix [2 0; 0 5]?', ['0 und 7', '2 und 0', '2 und 5', '10'], 'Bei einer Diagonal- (oder Dreiecks-)matrix sind die Eigenwerte die Diagonaleinträge.'] },
      { a: 1, t: 'n', v: 3,
        al: ['A = [3 1; 0 1] dhe v = (1; 0). Av = λv. Sa është λ?', 'Av = (3; 0) = 3 · (1; 0), pra λ = 3.'],
        en: ['A = [3 1; 0 1] and v = (1, 0). Av = λv. What is λ?', 'Av = (3, 0) = 3 · (1, 0), so λ = 3.'],
        de: ['A = [3 1; 0 1] und v = (1; 0). Av = λv. Wie groß ist λ?', 'Av = (3; 0) = 3 · (1; 0), also λ = 3.'] },
    ],
  ],
  'linalg-005': [
    // Newton-Raphson
    [
      { a: 0, t: 'n', v: 1.5,
        al: ['Për f(x) = x² − 2 dhe x₀ = 1, sa është x₁ me Newton-Raphson?', 'x₁ = 1 − (1 − 2)/(2 · 1) = 1 + 0,5 = 1,5.'],
        en: ['For f(x) = x² − 2 and x₀ = 1, what is x₁ by Newton-Raphson?', 'x₁ = 1 − (1 − 2)/(2 · 1) = 1 + 0.5 = 1.5.'],
        de: ['Für f(x) = x² − 2 und x₀ = 1: Wie groß ist x₁ nach Newton-Raphson?', 'x₁ = 1 − (1 − 2)/(2 · 1) = 1 + 0,5 = 1,5.'] },
      { a: 1, t: 'tf', k: false,
        al: ['Metoda e Newton-Raphson funksionon edhe kur f\'(xₙ) = 0.', 'E gabuar: atëherë formula pjesëton me zero dhe duhet zgjedhur një vlerë tjetër fillestare.'],
        en: ['Newton-Raphson still works when f\'(xₙ) = 0.', 'False: the formula would divide by zero, so another starting value is needed.'],
        de: ['Das Newton-Raphson-Verfahren funktioniert auch, wenn f\'(xₙ) = 0 ist.', 'Falsch: Dann teilt die Formel durch null; man braucht einen anderen Startwert.'] },
    ],
  ],
  'numth-001': [
    // Divisibility, GCD and LCM
    [
      { a: 0, t: 'n', v: 6,
        al: ['Sa është PMP(24; 18)?', 'Euklidi: PMP(24; 18) = PMP(18; 6) = PMP(6; 0) = 6.'],
        en: ['What is GCD(24, 18)?', 'Euclid: GCD(24, 18) = GCD(18, 6) = GCD(6, 0) = 6.'],
        de: ['Wie groß ist ggT(24; 18)?', 'Euklid: ggT(24; 18) = ggT(18; 6) = ggT(6; 0) = 6.'] },
      { a: 1, t: 'n', v: 72,
        al: ['Sa është SHVP(24; 18)?', 'SHVP = 24 · 18 / PMP = 432 / 6 = 72.'],
        en: ['What is LCM(24, 18)?', 'LCM = 24 · 18 / GCD = 432 / 6 = 72.'],
        de: ['Wie groß ist kgV(24; 18)?', 'kgV = 24 · 18 / ggT = 432 / 6 = 72.'] },
    ],
    // Congruences
    [
      { a: 0, t: 'n', v: 2,
        al: ['Sa është 17 mod 5?', '17 = 3 · 5 + 2, pra mbetja është 2.'],
        en: ['What is 17 mod 5?', '17 = 3 · 5 + 2, so the remainder is 2.'],
        de: ['Wie viel ist 17 mod 5?', '17 = 3 · 5 + 2, der Rest ist also 2.'] },
      { a: 2, t: 'n', v: 1,
        al: ['Sipas teoremës së vogël të Fermatit, sa është 3⁶ mod 7?', '7 është numër i thjeshtë dhe nuk e pjesëton 3, pra 3⁶ ≡ 1 (mod 7).'],
        en: ['By Fermat\'s little theorem, what is 3⁶ mod 7?', '7 is prime and does not divide 3, so 3⁶ ≡ 1 (mod 7).'],
        de: ['Nach dem kleinen Fermatschen Satz: Wie viel ist 3⁶ mod 7?', '7 ist eine Primzahl und teilt 3 nicht, also 3⁶ ≡ 1 (mod 7).'] },
    ],
  ],
  'numth-002': [
    // Diophantine equations
    [
      { a: 0, t: 'tf', k: false,
        al: ['Ekuacioni 4x + 6y = 7 ka zgjidhje me numra të plotë.', 'E gabuar: PMP(4; 6) = 2 nuk e pjesëton 7.'],
        en: ['The equation 4x + 6y = 7 has integer solutions.', 'False: GCD(4, 6) = 2 does not divide 7.'],
        de: ['Die Gleichung 4x + 6y = 7 hat ganzzahlige Lösungen.', 'Falsch: ggT(4; 6) = 2 teilt 7 nicht.'] },
      { a: 1, t: 'n', v: 2,
        al: ['3x + 5y = 1 ka zgjidhjen y = −1. Sa është x?', '3x − 5 = 1 → 3x = 6 → x = 2. Prova: 3 · 2 + 5 · (−1) = 1.'],
        en: ['3x + 5y = 1 has the solution y = −1. What is x?', '3x − 5 = 1 → 3x = 6 → x = 2. Check: 3 · 2 + 5 · (−1) = 1.'],
        de: ['3x + 5y = 1 hat die Lösung y = −1. Wie groß ist x?', '3x − 5 = 1 → 3x = 6 → x = 2. Probe: 3 · 2 + 5 · (−1) = 1.'] },
    ],
  ],
};
