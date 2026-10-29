// Questions for the calculus courses (short notation, see index.js).
export default {
  'calc-001': [
    // The concept of a limit
    [
      { a: 0, t: 'n', v: 7,
        al: ['Sa është lim(x→2) (3x + 1)?', 'Funksioni është i vazhdueshëm, pra zëvendësojmë: 3 · 2 + 1 = 7.'],
        en: ['What is lim(x→2) (3x + 1)?', 'The function is continuous, so substitute: 3 · 2 + 1 = 7.'],
        de: ['Wie groß ist lim(x→2) (3x + 1)?', 'Die Funktion ist stetig, also einsetzen: 3 · 2 + 1 = 7.'] },
      { a: 0, t: 'tf', k: false,
        al: ['Që të ekzistojë lim(x→a) f(x), funksioni duhet të jetë i përkufizuar në x = a.', 'E gabuar: limiti varet nga vlerat pranë a, jo nga vlera f(a).'],
        en: ['For lim(x→a) f(x) to exist, f must be defined at x = a.', 'False: the limit depends on values near a, not on f(a).'],
        de: ['Damit lim(x→a) f(x) existiert, muss f an der Stelle x = a definiert sein.', 'Falsch: Der Grenzwert hängt von den Werten nahe a ab, nicht von f(a).'] },
    ],
    // Continuity
    [
      { a: 1, t: 'c', k: 0,
        al: ['f(x) = (x² − 1)/(x − 1) nuk është e përkufizuar te x = 1. Çfarë lloj këputjeje ka aty?', ['të mënjanueshme (vrimë)', 'kërcim', 'thelbësore', 'nuk ka këputje'], 'Për x ≠ 1, f(x) = x + 1 → 2; grafiku ka vetëm një vrimë te (1; 2).'],
        en: ['f(x) = (x² − 1)/(x − 1) is undefined at x = 1. What kind of discontinuity is it?', ['removable (hole)', 'jump', 'essential', 'no discontinuity'], 'For x ≠ 1, f(x) = x + 1 → 2; the graph has just a hole at (1, 2).'],
        de: ['f(x) = (x² − 1)/(x − 1) ist bei x = 1 nicht definiert. Welche Unstetigkeit liegt vor?', ['hebbar (Lücke)', 'Sprung', 'wesentlich', 'keine Unstetigkeit'], 'Für x ≠ 1 ist f(x) = x + 1 → 2; der Graph hat nur eine Lücke bei (1; 2).'] },
      { a: 2, t: 'tf', k: true,
        al: ['f është e vazhdueshme në [0; 1], f(0) = −2 dhe f(1) = 3. Atëherë f ka një zero në (0; 1).', 'E vërtetë: sipas teoremës së vlerës së ndërmjetme, shenjat e kundërta japin një zero.'],
        en: ['f is continuous on [0, 1], f(0) = −2 and f(1) = 3. Then f has a zero in (0, 1).', 'True: by the intermediate value theorem, opposite signs give a zero.'],
        de: ['f ist stetig auf [0; 1], f(0) = −2 und f(1) = 3. Dann hat f eine Nullstelle in (0; 1).', 'Richtig: Nach dem Zwischenwertsatz liefern entgegengesetzte Vorzeichen eine Nullstelle.'] },
    ],
    // Limits at infinity
    [
      { a: 1, t: 'n', v: 3,
        al: ['f(x) = 1/(x − 3) ka asimptotë vertikale x = ?', 'Kur x → 3, f(x) → ±∞.'],
        en: ['f(x) = 1/(x − 3) has a vertical asymptote x = ?', 'As x → 3, f(x) → ±∞.'],
        de: ['f(x) = 1/(x − 3) hat eine senkrechte Asymptote bei x = ?', 'Für x → 3 gilt f(x) → ±∞.'] },
      { a: 2, t: 'n', v: 2,
        al: ['Sa është lim(x→∞) (2x² + 5)/(x² − 3x)?', 'Mbizotërojnë termat e shkallës më të lartë: 2x²/x² = 2.'],
        en: ['What is lim(x→∞) (2x² + 5)/(x² − 3x)?', 'The highest-degree terms dominate: 2x²/x² = 2.'],
        de: ['Wie groß ist lim(x→∞) (2x² + 5)/(x² − 3x)?', 'Die Terme höchsten Grades dominieren: 2x²/x² = 2.'] },
    ],
  ],
  'calc-002': [
    // The derivative
    [
      { a: 0, t: 'c', k: 2,
        al: ['Çfarë mat derivati f\'(a)?', ['sipërfaqen nën grafik', 'vlerën f(a)', 'koeficientin këndor të tangjentes në a', 'zerot e f'], 'Derivati është shpejtësia e çastit e ndryshimit, pra pjerrësia e tangjentes.'],
        en: ['What does the derivative f\'(a) measure?', ['the area under the graph', 'the value f(a)', 'the slope of the tangent at a', 'the zeros of f'], 'The derivative is the instantaneous rate of change, i.e. the slope of the tangent.'],
        de: ['Was misst die Ableitung f\'(a)?', ['die Fläche unter dem Graphen', 'den Wert f(a)', 'die Steigung der Tangente in a', 'die Nullstellen von f'], 'Die Ableitung ist die momentane Änderungsrate, also die Tangentensteigung.'] },
      { a: 2, t: 'n', v: 6,
        al: ['Për f(x) = x², sa është f\'(3)?', 'f\'(x) = 2x, pra f\'(3) = 6.'],
        en: ['For f(x) = x², what is f\'(3)?', 'f\'(x) = 2x, so f\'(3) = 6.'],
        de: ['Für f(x) = x²: Wie groß ist f\'(3)?', 'f\'(x) = 2x, also f\'(3) = 6.'] },
    ],
    // Differentiation rules
    [
      { a: 0, t: 'c', k: 1,
        al: ['Sa është derivati i f(x) = 4x³?', ['4x²', '12x²', '12x³', 'x⁴'], 'Rregulli i fuqisë: 4 · 3x² = 12x².'],
        en: ['What is the derivative of f(x) = 4x³?', ['4x²', '12x²', '12x³', 'x⁴'], 'Power rule: 4 · 3x² = 12x².'],
        de: ['Wie lautet die Ableitung von f(x) = 4x³?', ['4x²', '12x²', '12x³', 'x⁴'], 'Potenzregel: 4 · 3x² = 12x².'] },
      { a: 0, t: 'c', k: 3,
        al: ['Sa është derivati i (2x + 1)⁵?', ['5(2x + 1)⁴', '(2x + 1)⁴', '2(2x + 1)⁵', '10(2x + 1)⁴'], 'Rregulli i zinxhirit: 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴.'],
        en: ['What is the derivative of (2x + 1)⁵?', ['5(2x + 1)⁴', '(2x + 1)⁴', '2(2x + 1)⁵', '10(2x + 1)⁴'], 'Chain rule: 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴.'],
        de: ['Wie lautet die Ableitung von (2x + 1)⁵?', ['5(2x + 1)⁴', '(2x + 1)⁴', '2(2x + 1)⁵', '10(2x + 1)⁴'], 'Kettenregel: 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴.'] },
    ],
    // Trigonometric and special derivatives
    [
      { a: 0, t: 'c', k: 1,
        al: ['Sa është (cos x)\'?', ['sin x', '−sin x', 'cos x', '−cos x'], '(cos x)\' = −sin x.'],
        en: ['What is (cos x)\'?', ['sin x', '−sin x', 'cos x', '−cos x'], '(cos x)\' = −sin x.'],
        de: ['Wie lautet (cos x)\'?', ['sin x', '−sin x', 'cos x', '−cos x'], '(cos x)\' = −sin x.'] },
      { a: 0, t: 'tf', k: true,
        al: ['Funksioni eˣ është i barabartë me derivatin e vet.', 'E vërtetë: (eˣ)\' = eˣ.'],
        en: ['The function eˣ equals its own derivative.', 'True: (eˣ)\' = eˣ.'],
        de: ['Die Funktion eˣ ist gleich ihrer eigenen Ableitung.', 'Richtig: (eˣ)\' = eˣ.'] },
    ],
  ],
  'calc-003': [
    // Extrema
    [
      { a: 0, t: 'n', v: 2,
        al: ['Te cila x ka pikë kritike f(x) = x² − 4x + 1?', 'f\'(x) = 2x − 4 = 0 → x = 2.'],
        en: ['At which x does f(x) = x² − 4x + 1 have a critical point?', 'f\'(x) = 2x − 4 = 0 → x = 2.'],
        de: ['Bei welchem x hat f(x) = x² − 4x + 1 eine kritische Stelle?', 'f\'(x) = 2x − 4 = 0 → x = 2.'] },
      { a: 1, t: 'c', k: 0,
        al: ['f\'(c) = 0 dhe f\'\'(c) = −3. Çfarë ka f te c?', ['maksimum lokal', 'minimum lokal', 'pikë përkuljeje', 'nuk dihet'], 'f\'\'(c) < 0 do të thotë grafik konkav poshtë, pra maksimum lokal.'],
        en: ['f\'(c) = 0 and f\'\'(c) = −3. What does f have at c?', ['local maximum', 'local minimum', 'inflection point', 'cannot tell'], 'f\'\'(c) < 0 means concave down, so a local maximum.'],
        de: ['f\'(c) = 0 und f\'\'(c) = −3. Was hat f bei c?', ['lokales Maximum', 'lokales Minimum', 'Wendepunkt', 'unbestimmt'], 'f\'\'(c) < 0 heißt rechtsgekrümmt, also lokales Maximum.'] },
    ],
    // Optimization
    [
      { a: 0, t: 'n', v: 25,
        al: ['Dy numra pozitivë kanë shumë 10. Sa është prodhimi i tyre më i madh?', 'P = x(10 − x), P\' = 10 − 2x = 0 → x = 5, P = 25.'],
        en: ['Two positive numbers add up to 10. What is their largest possible product?', 'P = x(10 − x), P\' = 10 − 2x = 0 → x = 5, P = 25.'],
        de: ['Zwei positive Zahlen haben die Summe 10. Wie groß ist ihr größtmögliches Produkt?', 'P = x(10 − x), P\' = 10 − 2x = 0 → x = 5, P = 25.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Ndër të gjithë drejtkëndëshat me perimetër të njëjtë, katrori ka sipërfaqen më të madhe.', 'E vërtetë: kjo është një nga detyrat klasike të optimizimit.'],
        en: ['Among all rectangles with the same perimeter, the square has the largest area.', 'True: this is a classic optimization result.'],
        de: ['Unter allen Rechtecken mit gleichem Umfang hat das Quadrat den größten Flächeninhalt.', 'Richtig: Das ist ein klassisches Optimierungsergebnis.'] },
    ],
  ],
  'calc-004': [
    // Antiderivative
    [
      { a: 0, t: 'tf', k: true,
        al: ['x² + 5 është një primitivë e 2x.', 'E vërtetë: (x² + 5)\' = 2x; konstantja mund të jetë çfarëdo.'],
        en: ['x² + 5 is an antiderivative of 2x.', 'True: (x² + 5)\' = 2x; the constant can be anything.'],
        de: ['x² + 5 ist eine Stammfunktion von 2x.', 'Richtig: (x² + 5)\' = 2x; die Konstante ist beliebig.'] },
      { a: 1, t: 'c', k: 2,
        al: ['Sa është ∫x³ dx?', ['3x² + C', 'x⁴ + C', 'x⁴/4 + C', 'x³/3 + C'], '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C = x⁴/4 + C.'],
        en: ['What is ∫x³ dx?', ['3x² + C', 'x⁴ + C', 'x⁴/4 + C', 'x³/3 + C'], '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C = x⁴/4 + C.'],
        de: ['Wie lautet ∫x³ dx?', ['3x² + C', 'x⁴ + C', 'x⁴/4 + C', 'x³/3 + C'], '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C = x⁴/4 + C.'] },
    ],
    // Definite integral
    [
      { a: 0, t: 'n', v: 9,
        al: ['Sa është ∫₀³ x² dx?', 'F(x) = x³/3: F(3) − F(0) = 9 − 0 = 9.'],
        en: ['What is ∫₀³ x² dx?', 'F(x) = x³/3: F(3) − F(0) = 9 − 0 = 9.'],
        de: ['Wie groß ist ∫₀³ x² dx?', 'F(x) = x³/3: F(3) − F(0) = 9 − 0 = 9.'] },
      { a: 1, t: 'n', v: 0,
        al: ['Sa është ∫₋₁¹ x dx?', 'Sipërfaqja nën bosht (−1/2) dhe mbi bosht (+1/2) anulohen: 0.'],
        en: ['What is ∫₋₁¹ x dx?', 'The area below the axis (−1/2) and above it (+1/2) cancel out: 0.'],
        de: ['Wie groß ist ∫₋₁¹ x dx?', 'Die Fläche unter der Achse (−1/2) und darüber (+1/2) heben sich auf: 0.'] },
    ],
  ],
  'calc-005': [
    // Volumes of revolution
    [
      { a: 0, t: 'c', k: 1,
        al: ['Çfarë trupi del kur drejtkëndëshi 0 ≤ x ≤ h, 0 ≤ y ≤ r rrotullohet rreth boshtit x?', ['kon', 'cilindër', 'sferë', 'kub'], 'Çdo prerje është rreth me rreze r, pra trupi është cilindër.'],
        en: ['What solid results when the rectangle 0 ≤ x ≤ h, 0 ≤ y ≤ r is revolved about the x-axis?', ['cone', 'cylinder', 'sphere', 'cube'], 'Every cross-section is a disk of radius r, so it is a cylinder.'],
        de: ['Welcher Körper entsteht, wenn das Rechteck 0 ≤ x ≤ h, 0 ≤ y ≤ r um die x-Achse rotiert?', ['Kegel', 'Zylinder', 'Kugel', 'Würfel'], 'Jeder Querschnitt ist eine Kreisscheibe mit Radius r, also ein Zylinder.'] },
      { a: 1, t: 'c', k: 3,
        al: ['Me metodën e diskut, sa është vëllimi kur y = x në [0; 3] rrotullohet rreth boshtit x?', ['3π', '27π', '6π', '9π'], 'V = π∫₀³ x² dx = π · 27/3 = 9π.'],
        en: ['Using the disk method, what is the volume when y = x on [0, 3] is revolved about the x-axis?', ['3π', '27π', '6π', '9π'], 'V = π∫₀³ x² dx = π · 27/3 = 9π.'],
        de: ['Mit der Scheibenmethode: Welches Volumen entsteht, wenn y = x auf [0; 3] um die x-Achse rotiert?', ['3π', '27π', '6π', '9π'], 'V = π∫₀³ x² dx = π · 27/3 = 9π.'] },
    ],
  ],
  'calc-006': [
    // Separable equations
    [
      { a: 0, t: 'c', k: 0,
        al: ['Cila është zgjidhja e përgjithshme e dy/dx = 3y?', ['y = Ce³ˣ', 'y = 3x + C', 'y = Ceˣ/3', 'y = 3eˣ'], 'dy/y = 3 dx → ln|y| = 3x + C → y = Ce³ˣ.'],
        en: ['What is the general solution of dy/dx = 3y?', ['y = Ce³ˣ', 'y = 3x + C', 'y = Ceˣ/3', 'y = 3eˣ'], 'dy/y = 3 dx → ln|y| = 3x + C → y = Ce³ˣ.'],
        de: ['Wie lautet die allgemeine Lösung von dy/dx = 3y?', ['y = Ce³ˣ', 'y = 3x + C', 'y = Ceˣ/3', 'y = 3eˣ'], 'dy/y = 3 dx → ln|y| = 3x + C → y = Ce³ˣ.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Shpërbërja radioaktive përshkruhet nga dy/dt = −ky me k > 0.', 'E vërtetë: sasia zvogëlohet në përpjesëtim me atë që ka mbetur, y = y₀e⁻ᵏᵗ.'],
        en: ['Radioactive decay is described by dy/dt = −ky with k > 0.', 'True: the amount shrinks in proportion to what remains, y = y₀e⁻ᵏᵗ.'],
        de: ['Radioaktiver Zerfall wird durch dy/dt = −ky mit k > 0 beschrieben.', 'Richtig: Die Menge nimmt proportional zum Rest ab, y = y₀e⁻ᵏᵗ.'] },
    ],
  ],
  'calc-007': [
    // Partial derivatives
    [
      { a: 0, t: 'c', k: 1,
        al: ['Për f(x, y) = x²y + 3y, sa është ∂f/∂x?', ['x² + 3', '2xy', '2x + 3', '2xy + 3y'], 'y trajtohet si konstante: ∂/∂x(x²y) = 2xy dhe ∂/∂x(3y) = 0.'],
        en: ['For f(x, y) = x²y + 3y, what is ∂f/∂x?', ['x² + 3', '2xy', '2x + 3', '2xy + 3y'], 'Treat y as a constant: ∂/∂x(x²y) = 2xy and ∂/∂x(3y) = 0.'],
        de: ['Für f(x, y) = x²y + 3y: Wie lautet ∂f/∂x?', ['x² + 3', '2xy', '2x + 3', '2xy + 3y'], 'y wird als Konstante behandelt: ∂/∂x(x²y) = 2xy und ∂/∂x(3y) = 0.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Gradienti ∇f tregon drejtimin në të cilin f rritet më shpejt.', 'E vërtetë: dhe |∇f| është shpejtësia e asaj rritjeje.'],
        en: ['The gradient ∇f points in the direction in which f increases fastest.', 'True: and |∇f| is the rate of that increase.'],
        de: ['Der Gradient ∇f zeigt in die Richtung des stärksten Anstiegs von f.', 'Richtig: Und |∇f| ist die Größe dieses Anstiegs.'] },
    ],
  ],
};
