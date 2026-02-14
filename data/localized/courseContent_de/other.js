export const courseContents_other_de = {

  // ===== TRIGONOMETRIE =====

  // trig-001: Einfuehrung in die Trigonometrie
  'trig-001': {
    lessons: [
      {
        title: 'Trigonometrische Verhaeltnisse',
        theory: 'Die Trigonometrie untersucht die Beziehungen zwischen Winkeln und Seiten von Dreiecken. Die sechs trigonometrischen Verhaeltnisse werden anhand der Seiten des rechtwinkligen Dreiecks definiert: sin, cos, tan, cot, sec, csc.\n\nFuer den Winkel \u03b8: sin \u03b8 = Gegenkathete / Hypotenuse, cos \u03b8 = Ankathete / Hypotenuse, tan \u03b8 = Gegenkathete / Ankathete.\n\nMerkhilfe: SOH-CAH-TOA (Sin=Opposite/Hypotenuse, Cos=Adjacent/Hypotenuse, Tan=Opposite/Adjacent)',
        keyPoints: [
          'sin \u03b8 = o/h (Gegenkathete/Hypotenuse)',
          'cos \u03b8 = a/h (Ankathete/Hypotenuse)',
          'tan \u03b8 = o/a = sin/cos',
          'sin\u00b2\u03b8 + cos\u00b2\u03b8 = 1 (Grundidentitaet)',
        ],
        examples: [
          {
            example: 'Rechtwinkliges Dreieck: Katheten 3 und 4, Hypotenuse 5. Bestimme sin, cos, tan des Winkels \u03b8 (gegenueber der Kathete 3).',
            solution: 'sin \u03b8 = 3/5 = 0.6\ncos \u03b8 = 4/5 = 0.8\ntan \u03b8 = 3/4 = 0.75',
          },
        ],
        practice: [
          {
            problem: 'sin \u03b8 = 5/13. Bestimme cos \u03b8 und tan \u03b8 (\u03b8 ist ein spitzer Winkel).',
            solution: 'cos \u03b8 = 12/13, tan \u03b8 = 5/12',
            steps: [
              'sin\u00b2\u03b8 + cos\u00b2\u03b8 = 1',
              '(5/13)\u00b2 + cos\u00b2\u03b8 = 1',
              'cos\u00b2\u03b8 = 1 - 25/169 = 144/169',
              'cos \u03b8 = 12/13',
              'tan \u03b8 = sin/cos = (5/13)/(12/13) = 5/12',
            ],
          },
        ],
      },
      {
        title: 'Trigonometrische Werte besonderer Winkel',
        theory: 'Die Winkel 0\u00b0, 30\u00b0, 45\u00b0, 60\u00b0, 90\u00b0 haben exakte trigonometrische Werte, die auswendig gelernt werden sollten:\n- sin 30\u00b0 = cos 60\u00b0 = 1/2\n- sin 45\u00b0 = cos 45\u00b0 = \u221a2/2\n- sin 60\u00b0 = cos 30\u00b0 = \u221a3/2\n- tan 30\u00b0 = \u221a3/3, tan 45\u00b0 = 1, tan 60\u00b0 = \u221a3\n\nMerktrick: sin und cos sind um 45\u00b0 zueinander \"gespiegelt\".',
        keyPoints: [
          'sin 0\u00b0 = 0, cos 0\u00b0 = 1',
          'sin 30\u00b0 = 1/2, cos 30\u00b0 = \u221a3/2',
          'sin 45\u00b0 = \u221a2/2, cos 45\u00b0 = \u221a2/2',
          'sin 90\u00b0 = 1, cos 90\u00b0 = 0',
        ],
        examples: [
          {
            example: 'Berechne: sin\u00b230\u00b0 + cos\u00b230\u00b0',
            solution: '= (1/2)\u00b2 + (\u221a3/2)\u00b2 = 1/4 + 3/4 = 1 \u2713',
          },
        ],
        practice: [
          {
            problem: 'Berechne: 2sin 60\u00b0 + 3cos 30\u00b0 - tan 45\u00b0',
            solution: '= 2\u221a3',
            steps: [
              'sin 60\u00b0 = \u221a3/2, cos 30\u00b0 = \u221a3/2, tan 45\u00b0 = 1',
              '= 2(\u221a3/2) + 3(\u221a3/2) - 1',
              '= \u221a3 + 3\u221a3/2 - 1',
              '= 2\u221a3/2 + 3\u221a3/2 - 1 = 5\u221a3/2 - 1',
            ],
          },
        ],
      },
      {
        title: 'Loesen von Dreiecken',
        theory: 'Sinussatz: a/sin A = b/sin B = c/sin C. Wird angewendet bei: AAS, ASA oder SSA.\n\nKosinussatz: c\u00b2 = a\u00b2 + b\u00b2 - 2ab cos C. Wird angewendet bei: SAS oder SSS.\n\nLoesungsstrategie: 1) Bestimme die gegebene Konfiguration (AAS, SSS, usw.), 2) Loese das Dreieck, 3) Pruefe (Winkelsumme = 180\u00b0).',
        keyPoints: [
          'Sinussatz: a/sin A = b/sin B = c/sin C',
          'Kosinussatz: c\u00b2 = a\u00b2+b\u00b2-2ab cos C',
          'AAS/ASA: Sinussatz',
          'SAS/SSS: Kosinussatz',
        ],
        examples: [
          {
            example: 'A=30\u00b0, B=45\u00b0, a=8. Bestimme b.',
            solution: 'b/sin B = a/sin A\nb = 8 \u00d7 sin 45\u00b0/sin 30\u00b0 = 8 \u00d7 (\u221a2/2)/(1/2) = 8\u221a2',
          },
        ],
        practice: [
          {
            problem: 'Dreieck mit a=5, b=7, C=60\u00b0. Bestimme c.',
            solution: 'c = \u221a39 \u2248 6.24',
            steps: [
              'c\u00b2 = a\u00b2 + b\u00b2 - 2ab cos C',
              'c\u00b2 = 25 + 49 - 2(5)(7) cos 60\u00b0',
              'c\u00b2 = 74 - 70(1/2) = 74-35 = 39',
              'c = \u221a39',
            ],
          },
        ],
      },
    ],
  },

  // trig-002: Einheitskreis und Graphen
  'trig-002': {
    lessons: [
      {
        title: 'Der Einheitskreis',
        theory: 'Der Einheitskreis hat den Radius 1 und den Mittelpunkt im Ursprung. Jeder Punkt darauf hat die Koordinaten (cos \u03b8, sin \u03b8), wobei \u03b8 der Winkel von der positiven x-Achse ist.\n\nDies verallgemeinert die trigonometrischen Funktionen fuer jeden Winkel (nicht nur 0\u00b0-90\u00b0). Winkel: Quadrant I (0\u00b0-90\u00b0), II (90\u00b0-180\u00b0), III (180\u00b0-270\u00b0), IV (270\u00b0-360\u00b0).\n\nVorzeichen von sin/cos nach Quadrant: \"All Students Take Calculus\" (ASTC): I \u2013 alle positiv, II \u2013 nur sin positiv, III \u2013 nur tan positiv, IV \u2013 nur cos positiv.',
        keyPoints: [
          '(cos \u03b8, sin \u03b8) sind die Koordinaten auf dem Einheitskreis',
          'ASTC fuer die Vorzeichen nach Quadranten',
          'Supplementwinkel: sin(180\u00b0-\u03b8) = sin \u03b8',
          'Periode von sin und cos: 2\u03c0',
        ],
        examples: [
          {
            example: 'Bestimme sin 120\u00b0 und cos 120\u00b0.',
            solution: '120\u00b0 = 180\u00b0 - 60\u00b0 (Quadrant II)\nsin 120\u00b0 = sin 60\u00b0 = \u221a3/2\ncos 120\u00b0 = -cos 60\u00b0 = -1/2',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Werte von sin 225\u00b0 und tan 225\u00b0.',
            solution: 'sin 225\u00b0 = -\u221a2/2, tan 225\u00b0 = 1',
            steps: [
              '225\u00b0 = 180\u00b0 + 45\u00b0 \u2192 Quadrant III',
              'sin 225\u00b0 = -sin 45\u00b0 = -\u221a2/2',
              'cos 225\u00b0 = -cos 45\u00b0 = -\u221a2/2',
              'tan 225\u00b0 = sin/cos = (-\u221a2/2)/(-\u221a2/2) = 1',
            ],
          },
        ],
      },
      {
        title: 'Graphen von Sinus und Kosinus',
        theory: 'y = A sin(Bx + C) + D \u2013 allgemeine Form.\nA = Amplitude (maximale Auslenkung von der Mittellinie)\nB: Periode T = 2\u03c0/|B|\nC: Phasenverschiebung (horizontale Verschiebung)\nD: vertikale Verschiebung\n\nDer Kosinusgraph ist wie der Sinusgraph, aber um \u03c0/2 nach links verschoben (oder cos x = sin(x + \u03c0/2)).',
        keyPoints: [
          'Amplitude |A|',
          'Periode T = 2\u03c0/|B|',
          'Phasenverschiebung = -C/B',
          'Vertikale Verschiebung D',
        ],
        examples: [
          {
            example: 'Bestimme die Amplitude und Periode von y = 3 sin(2x - \u03c0)',
            solution: 'Amplitude = 3\nPeriode = 2\u03c0/2 = \u03c0',
          },
        ],
        practice: [
          {
            problem: 'Schreibe die Sinusgleichung mit A=2, T=\u03c0, vertikale Verschiebung +1',
            solution: 'y = 2 sin(2x) + 1',
            steps: [
              'A = 2',
              'T = \u03c0 \u2192 2\u03c0/B = \u03c0 \u2192 B = 2',
              'D = 1',
              'y = 2 sin(2x) + 1',
            ],
          },
        ],
      },
    ],
  },

  // trig-003: Trigonometrische Identitaeten
  'trig-003': {
    lessons: [
      {
        title: 'Grundlegende Identitaeten',
        theory: 'Trigonometrische Identitaeten sind Gleichungen, die fuer jeden Winkelwert gelten. Hauptgruppen: pythagoraeische Identitaeten, Kehrwertidentitaeten, Quotientenidentitaeten.\n\nPythagoraeische Identitaeten: sin\u00b2\u03b8 + cos\u00b2\u03b8 = 1, 1 + tan\u00b2\u03b8 = sec\u00b2\u03b8, 1 + cot\u00b2\u03b8 = csc\u00b2\u03b8.\n\nAdditionstheoreme: sin(A\u00b1B) = sin A cos B \u00b1 cos A sin B, cos(A\u00b1B) = cos A cos B \u2213 sin A sin B.',
        keyPoints: [
          'sin\u00b2\u03b8 + cos\u00b2\u03b8 = 1 (Grundidentitaet)',
          'sin(A+B) = sinA cosB + cosA sinB',
          'cos(A+B) = cosA cosB - sinA sinB',
          'tan(A+B) = (tanA + tanB)/(1 - tanA tanB)',
        ],
        examples: [
          {
            example: 'Beweise die Identitaet: sin 75\u00b0 = sin(45\u00b0 + 30\u00b0)',
            solution: '= sin45\u00b0 cos30\u00b0 + cos45\u00b0 sin30\u00b0\n= (\u221a2/2)(\u221a3/2) + (\u221a2/2)(1/2)\n= \u221a6/4 + \u221a2/4 = (\u221a6+\u221a2)/4',
          },
        ],
        practice: [
          {
            problem: 'Vereinfache: (1 - cos\u00b2\u03b8)/sin\u00b2\u03b8',
            solution: '= 1',
            steps: [
              '1 - cos\u00b2\u03b8 = sin\u00b2\u03b8 (pythagoraeische Identitaet)',
              'sin\u00b2\u03b8/sin\u00b2\u03b8 = 1',
            ],
          },
        ],
      },
    ],
  },

  // trig-004: Sinus- und Kosinussatz
  'trig-004': {
    lessons: [
      {
        title: 'Fortgeschrittene Anwendungen der Saetze',
        theory: 'Die Kombination von Sinussatz und Kosinussatz mit der Dreiecksflaechenformel S = (1/2)ab sinC ermoeglicht die Loesung jedes Dreiecks bei ausreichender Information.\n\nDiese Methoden finden breite Anwendung in: Vermessungskunde, Navigation, Physik (Kraftvektoren), Architektur und Ingenieurwesen.',
        keyPoints: [
          'S = (1/2)ab sin C (Flaecheninhalt)',
          'Sinussatz: Mehrdeutigkeit (SSA kann 0, 1 oder 2 Dreiecke ergeben)',
          'Kosinussatz: c\u00b2 = a\u00b2+b\u00b2-2ab cos C',
          'Kombination zur Loesung jedes Dreiecks',
        ],
        examples: [
          {
            example: 'Zwei Mauerarme bilden einen Winkel von 120\u00b0, Laengen 4m und 6m. Wie gross ist der Abstand zwischen den Endpunkten?',
            solution: 'c\u00b2 = 16+36-2(4)(6)cos120\u00b0 = 52+24 = 76\nc = 2\u221a19 \u2248 8.72 m',
          },
        ],
        practice: [
          {
            problem: 'Bestimme den Flaecheninhalt des Dreiecks mit b=8, c=11, A=30\u00b0.',
            solution: 'S = 22 cm\u00b2',
            steps: [
              'S = (1/2)bc sin A',
              'S = (1/2)(8)(11) sin 30\u00b0',
              '= 44 \u00d7 (1/2) = 22',
            ],
          },
        ],
      },
    ],
  },

  // ===== STATISTIK =====

  // stat-002: Wahrscheinlichkeitsrechnung
  'stat-002': {
    lessons: [
      {
        title: 'Grundlagen der Wahrscheinlichkeit',
        theory: 'Die Wahrscheinlichkeit misst die Chance, dass ein Ereignis eintritt. Sie variiert von 0 (unmoeglich) bis 1 (sicher). Klassische Wahrscheinlichkeit: P(A) = Anzahl der guenstigen Ergebnisse / Gesamtanzahl der Ergebnisse (Gleichwahrscheinlichkeit).\n\nNotation: S = Ergebnisraum, A = Ereignis, P(A) = Wahrscheinlichkeit\n\nAxiome von Kolmogorow: 0 \u2264 P(A) \u2264 1, P(S) = 1, P(A\u222aB) = P(A)+P(B) falls A, B disjunkt.',
        keyPoints: [
          'P(A) = guenstige Ergebnisse / Gesamtergebnisse',
          '0 \u2264 P(A) \u2264 1',
          'P(Gegenereignis) = 1 - P(A)',
          'P(S) = 1, P(\u2205) = 0',
        ],
        examples: [
          {
            example: 'Wir werfen einen Wuerfel mit 6 Seiten. Wie gross ist P(gerade Zahl)?',
            solution: 'Gerade: {2, 4, 6} \u2192 3 Ergebnisse\nP(gerade) = 3/6 = 1/2',
          },
        ],
        practice: [
          {
            problem: 'Urne mit 3 roten, 5 blauen, 2 gruenen Kugeln. P(keine rote Kugel gezogen)?',
            solution: 'P = 7/10',
            steps: [
              'P(rot) = 3/10',
              'P(nicht rot) = 1 - 3/10 = 7/10',
            ],
          },
        ],
      },
      {
        title: 'Rechenregeln der Wahrscheinlichkeit',
        theory: 'Additionsregel: P(A\u222aB) = P(A) + P(B) - P(A\u2229B)\nDisjunkte (sich ausschliessende) Ereignisse: P(A\u2229B) = 0, also P(A\u222aB) = P(A) + P(B)\n\nMultiplikationsregel (unabhaengige Ereignisse): P(A\u2229B) = P(A) \u00d7 P(B)\nBedingte Wahrscheinlichkeit: P(A|B) = P(A\u2229B)/P(B)',
        keyPoints: [
          'Additionsregel: P(A\u222aB) = P(A)+P(B)-P(A\u2229B)',
          'Unabhaengige Ereignisse: P(A\u2229B) = P(A)\u00b7P(B)',
          'P(A|B) = P(A\u2229B)/P(B)',
          'Satz von Bayes: P(A|B) = P(B|A)P(A)/P(B)',
        ],
        examples: [
          {
            example: 'P(A)=0.4, P(B)=0.3, P(A\u2229B)=0.1. Bestimme P(A\u222aB).',
            solution: 'P(A\u222aB) = 0.4 + 0.3 - 0.1 = 0.6',
          },
        ],
        practice: [
          {
            problem: 'Wir werfen zwei Muenzen. P(mindestens einmal Kopf)?',
            solution: 'P = 3/4',
            steps: [
              'Ergebnisraum: {KK, KZ, ZK, ZZ}',
              'Mindestens einmal Kopf: {KK, KZ, ZK} \u2192 3 Ergebnisse',
              'P = 3/4',
              'Oder: P = 1 - P(kein Kopf) = 1 - 1/4 = 3/4',
            ],
          },
        ],
      },
    ],
  },

  // stat-003: Schliessende Statistik
  'stat-003': {
    lessons: [
      {
        title: 'Stichproben und Verteilungen',
        theory: 'Die schliessende Statistik zieht Rueckschluesse ueber die Grundgesamtheit anhand einer Stichprobe. Die Normalverteilung (Gauss) ist besonders wichtig: symmetrisch um den Mittelwert, mit der 68-95-99,7-Regel (1\u03c3, 2\u03c3, 3\u03c3).\n\nZentraler Grenzwertsatz: Die Mittelwerte grosser Stichproben sind annaehernd normalverteilt, unabhaengig von der Verteilung der Grundgesamtheit. Dies ermoeglicht statistische Tests.',
        keyPoints: [
          'Normalverteilung: N(\u03bc, \u03c3\u00b2)',
          'Regel 68-95-99,7',
          'Zentraler Grenzwertsatz',
          'Z-Wert: z = (x - \u03bc)/\u03c3',
        ],
        examples: [
          {
            example: 'Schueler haben eine Durchschnittsnote \u03bc=70, \u03c3=10. Welcher Prozentsatz hat Noten zwischen 60 und 80?',
            solution: '60-80 ist \u03bc \u00b1 \u03c3 \u2192 etwa 68 % der Schueler',
          },
        ],
        practice: [
          {
            problem: 'Bestimme den Z-Wert fuer x=85, \u03bc=70, \u03c3=10.',
            solution: 'z = 1.5',
            steps: [
              'z = (x - \u03bc)/\u03c3 = (85 - 70)/10 = 15/10 = 1.5',
            ],
          },
        ],
      },
    ],
  },

  // stat-004: Regressionsanalyse
  'stat-004': {
    lessons: [
      {
        title: 'Lineare Regression',
        theory: 'Die lineare Regression modelliert die Beziehung zwischen zwei Variablen: y = \u03b2\u2080 + \u03b2\u2081x + \u03b5.\n\u03b2\u2080 = Achsenabschnitt (y-Wert bei x=0)\n\u03b2\u2081 = Steigungskoeffizient (Aenderung von y pro Einheitsaenderung von x)\n\nMethode der kleinsten Quadrate: minimiere die Summe \u03a3(y\u1d62 - \u0177\u1d62)\u00b2.\nDer Korrelationskoeffizient r (-1 \u2264 r \u2264 1) zeigt die Staerke der Beziehung an.',
        keyPoints: [
          '\u0177 = \u03b2\u2080 + \u03b2\u2081x (Regressionsgerade)',
          '\u03b2\u2081 = \u03a3(x-x\u0304)(y-\u0233) / \u03a3(x-x\u0304)\u00b2',
          'R\u00b2 = Bestimmtheitsmass',
          '|r| nahe 1: starker linearer Zusammenhang',
        ],
        examples: [
          {
            example: 'r = 0.85 zwischen Lernzeit und Noten. Was bedeutet das?',
            solution: 'Starke positive Korrelation: Je mehr gelernt wird, desto hoeher die Note.',
          },
        ],
        practice: [
          {
            problem: 'Wenn \u03b2\u2081 = 2.5 und \u03b2\u2080 = 10, prognostiziere y fuer x = 8.',
            solution: '\u0177 = 30',
            steps: [
              '\u0177 = \u03b2\u2080 + \u03b2\u2081x',
              '\u0177 = 10 + 2.5(8)',
              '\u0177 = 10 + 20 = 30',
            ],
          },
        ],
      },
    ],
  },

  // stat-005: Bayessche Statistik
  'stat-005': {
    lessons: [
      {
        title: 'Satz von Bayes',
        theory: 'Satz von Bayes: P(A|B) = P(B|A)\u00b7P(A) / P(B)\nP(A) = A-priori-Wahrscheinlichkeit (vor den Daten)\nP(A|B) = A-posteriori-Wahrscheinlichkeit (nach den Daten)\nP(B|A) = Likelihood (Plausibilitaet)\n\nBayesscher Ansatz: Beginne mit einer A-priori-Ueberzeugung, aktualisiere sie mit Daten, um die A-posteriori-Ueberzeugung zu erhalten.',
        keyPoints: [
          'P(A|B) = P(B|A)P(A)/P(B)',
          'A priori: Ueberzeugung vor den Daten',
          'A posteriori: Ueberzeugung nach den Daten',
          'Likelihood = P(Daten | Hypothese)',
        ],
        examples: [
          {
            example: 'Diagnostischer Test: Genauigkeit 95 %. Die Krankheit betrifft 1 %. Wenn der Test positiv ist, wie hoch ist die Wahrscheinlichkeit der Krankheit?',
            solution: 'P(Krankheit|+) = 0.95\u00d70.01/(0.95\u00d70.01 + 0.05\u00d70.99) \u2248 16%\nSelbst bei positivem Test nur 16 % Wahrscheinlichkeit!',
          },
        ],
        practice: [
          {
            problem: 'Zwei Urnen: A (3 rote, 2 blaue), B (1 rote, 4 blaue). Eine Urne wird zufaellig gewaehlt, eine rote Kugel gezogen. Wie gross ist P(aus Urne A)?',
            solution: 'P(A|rot) = 3/4',
            steps: [
              'P(A)=P(B)=0.5',
              'P(rot|A)=3/5, P(rot|B)=1/5',
              'P(rot) = 0.5(3/5)+0.5(1/5) = 2/5',
              'P(A|rot) = (3/5\u00d70.5)/(2/5) = 3/4',
            ],
          },
        ],
      },
    ],
  },

  // stat-006: Zeitreihenanalyse
  'stat-006': {
    lessons: [
      {
        title: 'Komponenten von Zeitreihen',
        theory: 'Eine Zeitreihe ist eine Folge von Beobachtungen ueber die Zeit. Komponenten: Trend (langfristige Richtung), Saisonalitaet (regelmaessige periodische Schwankung), Zyklus (mittelfristige Bewegung), Zufall (unregelmaessige Schwankung).\n\nY_t = T_t + S_t + C_t + R_t (additives Modell)\nY_t = T_t \u00d7 S_t \u00d7 C_t \u00d7 R_t (multiplikatives Modell)',
        keyPoints: [
          'Trend: langfristige Richtung',
          'Saisonalitaet: periodisch (jaehrlich, woechentlich)',
          'Zyklus: wirtschaftliche Schwankungen ueber 3\u201310 Jahre',
          'Gleitender Durchschnitt: eliminiert Zufallsschwankungen',
        ],
        examples: [
          {
            example: 'Verkaeufe sind: Jan=100, Feb=90, Mrz=120, Apr=110. Bestimme den gleitenden Durchschnitt mit Fensterbreite 3.',
            solution: 'M\u2082 = (100+90+120)/3 = 103.3\nM\u2083 = (90+120+110)/3 = 106.7',
          },
        ],
        practice: [
          {
            problem: 'Welche Komponente der Zeitreihe erklaert hohe Verkaeufe im Dezember jedes Jahres?',
            solution: 'Saisonalitaet \u2013 jaehrliche periodische Schwankung',
            steps: [
              'Tritt jeden Dezember auf = regelmaessig und periodisch',
              'Periode = 1 Jahr',
              'Dies ist die Saisonalitaet',
            ],
          },
        ],
      },
    ],
  },

  // ===== LINEARE ALGEBRA =====

  // linalg-001: Vektoren und Matrizen
  'linalg-001': {
    lessons: [
      {
        title: 'Vektoren und Operationen',
        theory: 'Ein Vektor hat Betrag (Laenge) und Richtung. Er wird als v = (v\u2081, v\u2082, ..., v\u2099) geschrieben.\nAddition: u + v = (u\u2081+v\u2081, u\u2082+v\u2082, ...)\nSkalarmultiplikation: kv = (kv\u2081, kv\u2082, ...)\nSkalarprodukt: u\u00b7v = \u03a3u\u1d62v\u1d62 = |u||v|cos \u03b8\n\nKreuzprodukt (3D): u \u00d7 v = Determinante der 3\u00d73-Matrix. Das Ergebnis steht senkrecht auf beiden Vektoren.',
        keyPoints: [
          'u + v = (u\u2081+v\u2081, u\u2082+v\u2082)',
          'u\u00b7v = \u03a3u\u1d62v\u1d62 (Skalarprodukt)',
          'u\u00b7v = 0 \u2192 orthogonale Vektoren',
          'u\u00d7v = Normalenvektor (3D)',
        ],
        examples: [
          {
            example: 'u=(3,4), v=(1,-2). Bestimme u\u00b7v und |u|.',
            solution: 'u\u00b7v = 3(1)+4(-2) = -5\n|u| = \u221a(9+16) = 5',
          },
        ],
        practice: [
          {
            problem: 'Sind u=(2,3) und v=(6,-4) orthogonal?',
            solution: 'Ja, u\u00b7v = 0',
            steps: [
              'u\u00b7v = 2(6) + 3(-4) = 12-12 = 0',
              'Skalarprodukt = 0 \u2192 orthogonal',
            ],
          },
        ],
      },
      {
        title: 'Matrizen und Operationen',
        theory: 'Eine Matrix m\u00d7n hat m Zeilen und n Spalten. Operationen:\nAddition/Subtraktion: A \u00b1 B (gleiche Dimensionen)\nSkalarmultiplikation: kA\nMatrizenmultiplikation: A(m\u00d7n) \u00d7 B(n\u00d7p) = C(m\u00d7p). Das Element c\u1d62\u2c7c = i-te Zeile von A \u00d7 j-te Spalte von B.\n\nEinheitsmatrix I: A\u00d7I = I\u00d7A = A. Inverse Matrix A\u207b\u00b9: A\u00d7A\u207b\u00b9 = I.',
        keyPoints: [
          'A\u00d7B: Spalten von B = Zeilen von A (muessen uebereinstimmen)',
          'AB \u2260 BA (nicht kommutativ)',
          '(AB)C = A(BC) (assoziativ)',
          'Inverse Matrix: A\u00d7A\u207b\u00b9 = I',
        ],
        examples: [
          {
            example: 'Multipliziere A=[[1,2],[3,4]] \u00d7 B=[[5,6],[7,8]]',
            solution: 'c\u2081\u2081 = 1\u00d75+2\u00d77=19, c\u2081\u2082 = 1\u00d76+2\u00d78=22\nc\u2082\u2081 = 3\u00d75+4\u00d77=43, c\u2082\u2082 = 3\u00d76+4\u00d78=50\nC = [[19,22],[43,50]]',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Determinante von A = [[3,2],[1,4]]',
            solution: 'det(A) = 10',
            steps: [
              'det(A) = ad - bc',
              '= 3\u00d74 - 2\u00d71',
              '= 12 - 2 = 10',
            ],
          },
        ],
      },
    ],
  },

  // linalg-002: Lineare Gleichungssysteme
  'linalg-002': {
    lessons: [
      {
        title: 'Loesen von Gleichungssystemen mit Gauss-Elimination',
        theory: 'Ein lineares Gleichungssystem kann mit der erweiterten Koeffizientenmatrix [A|b] geloest werden. Die Gauss-Elimination transformiert die Matrix in Zeilenstufenform durch elementare Zeilenoperationen: Vertauschen, Skalarmultiplikation, Addition eines Vielfachen.\n\nReduzierte Zeilenstufenform (RREF): Jede Pivotspalte hat eine 1 und sonst ueberall Nullen. Dies liefert die Loesung direkt.',
        keyPoints: [
          'Erweiterte Koeffizientenmatrix [A|b]',
          'Elementare Zeilenoperationen: R\u1d62 \u2194 R\u2c7c, kR\u1d62, R\u1d62+kR\u2c7c',
          'RREF: Pivot 1, sonst ueberall Nullen',
          'n Variablen \u2013 n Gleichungen = in der Regel 1 Loesung',
        ],
        examples: [
          {
            example: 'Loese: x+y=5 und 2x-y=4',
            solution: '[1 1|5]\n[2 -1|4]\nR\u2082 = R\u2082-2R\u2081:\n[1 1|5]\n[0 -3|-6]\nAlso y=2, x=3',
          },
        ],
        practice: [
          {
            problem: 'Loese mit Elimination: x+2y=8, 3x-y=3',
            solution: 'x=2, y=3',
            steps: [
              '[1 2|8], [3 -1|3]',
              'R\u2082 = R\u2082-3R\u2081: [0 -7|-21] \u2192 y=3',
              'Einsetzen: x+6=8 \u2192 x=2',
            ],
          },
        ],
      },
    ],
  },

  // linalg-003: Vektorraeume
  'linalg-003': {
    lessons: [
      {
        title: 'Vektorraeume und Unterraeume',
        theory: 'Ein Vektorraum V ueber dem Koerper F erfuellt 8 Axiome (Abgeschlossenheit unter Addition und Skalarmultiplikation usw.). Beispiele: \u211d\u207f, C[a,b] (stetige Funktionen), P\u2099 (Polynome).\n\nUnterraum: eine Teilmenge, die unter den Operationen abgeschlossen ist und den Nullvektor enthaelt. Span{v\u2081,...,v\u2096} ist der erzeugte Unterraum.\n\nLineare Unabhaengigkeit: v\u2081,...,v\u2096 sind linear unabhaengig, wenn c\u2081v\u2081+...+c\u2096v\u2096=0 nur fuer c\u1d62=0 gilt.',
        keyPoints: [
          '8 Axiome des Vektorraums',
          'Unterraum: Abgeschlossenheit + Nullvektor',
          'Span: alle Linearkombinationen',
          'Basis: linear unabhaengig + erzeugt den gesamten Raum',
        ],
        examples: [
          {
            example: 'Sind v\u2081=(1,0,1), v\u2082=(0,1,1), v\u2083=(1,1,0) linear unabhaengig?',
            solution: 'det[v\u2081 v\u2082 v\u2083] = 1(0-1)-0+1(0-1) = -2 \u2260 0\nJa, sie sind linear unabhaengig.',
          },
        ],
        practice: [
          {
            problem: 'Bestimme eine Basis des Unterraums Span{(1,2,3),(2,4,6)}.',
            solution: '{(1,2,3)} \u2013 nur ein Vektor (der andere ist proportional)',
            steps: [
              '(2,4,6) = 2(1,2,3) \u2192 proportional',
              'Sie sind linear abhaengig',
              'Basis: {(1,2,3)}',
            ],
          },
        ],
      },
    ],
  },

  // linalg-004: Eigenwerte und Eigenvektoren
  'linalg-004': {
    lessons: [
      {
        title: 'Eigenwerte und Eigenvektoren',
        theory: 'Der Eigenvektor v und der Eigenwert \u03bb erfuellen Av = \u03bbv. Das charakteristische Polynom: det(A - \u03bbI) = 0 liefert die Eigenwerte.\n\nVorgehensweise: 1) Loese det(A-\u03bbI)=0 nach \u03bb, 2) Fuer jeden Eigenwert \u03bb loese (A-\u03bbI)v=0 nach v.\n\nAnwendungen: PageRank (Google), PCA (maschinelles Lernen), natuerliche Schwingungen, Quantenmechanik.',
        keyPoints: [
          'Av = \u03bbv (Definition)',
          'det(A-\u03bbI)=0 (charakteristisches Polynom)',
          'Eigenraum = Kern(A-\u03bbI)',
          'Diagonalisierung: A = PDP\u207b\u00b9',
        ],
        examples: [
          {
            example: 'Bestimme die Eigenwerte von A = [[2,1],[0,3]]',
            solution: 'det(A-\u03bbI) = (2-\u03bb)(3-\u03bb) = 0\n\u03bb\u2081=2, \u03bb\u2082=3',
          },
        ],
        practice: [
          {
            problem: 'Bestimme die Eigenwerte von A = [[5,0],[0,2]]',
            solution: '\u03bb\u2081=5, \u03bb\u2082=2',
            steps: [
              'Diagonalmatrix: Eigenwerte = Diagonalelemente',
              '\u03bb\u2081=5, \u03bb\u2082=2',
            ],
          },
        ],
      },
    ],
  },

  // linalg-005: Numerische Analysis
  'linalg-005': {
    lessons: [
      {
        title: 'Newton-Raphson-Verfahren',
        theory: 'Das Newton-Raphson-Verfahren findet Nullstellen von f(x)=0: x\u2099\u208a\u2081 = x\u2099 - f(x\u2099)/f\'(x\u2099). Die Konvergenz ist quadratisch (die Anzahl der korrekten Stellen verdoppelt sich nahezu in jeder Iteration).\n\nVorgehensweise: 1) Beginne mit einem Startwert x\u2080, 2) Wende die Formel an bis zur Konvergenz, 3) Stoppe wenn |f(x\u2099)| < Toleranz.',
        keyPoints: [
          'x\u2099\u208a\u2081 = x\u2099 - f(x\u2099)/f\'(x\u2099)',
          'Quadratische Konvergenz',
          'Erfordert Differenzierbarkeit von f',
          'Startwert nahe der Nullstelle fuer Konvergenz waehlen',
        ],
        examples: [
          {
            example: 'Bestimme \u221a2 durch Loesen von x\u00b2-2=0 mit Newton (x\u2080=1)',
            solution: 'x\u2081 = 1 - (1-2)/(2) = 1.5\nx\u2082 = 1.5 - (2.25-2)/3 = 1.417\nx\u2083 \u2248 1.4142 (\u2248 \u221a2)',
          },
        ],
        practice: [
          {
            problem: 'Wende Newton-Raphson einmal an: f(x)=x\u00b3-2, x\u2080=1.',
            solution: 'x\u2081 = 1.667',
            steps: [
              'f(1) = 1-2 = -1',
              "f'(x) = 3x\u00b2, f'(1) = 3",
              'x\u2081 = 1 - (-1)/3 = 1 + 1/3 = 4/3 \u2248 1.333',
            ],
          },
        ],
      },
    ],
  },

  // ===== ZAHLENTHEORIE =====

  // numth-001: Elementare Zahlentheorie
  'numth-001': {
    lessons: [
      {
        title: 'Teiler und ggT/kgV',
        theory: 'a teilt b (a|b), wenn b = a\u00d7k fuer eine ganze Zahl k gilt. Der ggT (groesster gemeinsamer Teiler) wird mit dem euklidischen Algorithmus bestimmt: ggT(a, b) = ggT(b, a mod b).\n\nkgV (kleinstes gemeinsames Vielfaches): kgV(a, b) = a\u00d7b / ggT(a, b).\n\nPrimzahlen haben genau zwei Teiler: 1 und sich selbst. Fundamentalsatz der Arithmetik: Jede Zahl > 1 laesst sich eindeutig in Primfaktoren zerlegen.',
        keyPoints: [
          'ggT mit euklidischem Algorithmus: ggT(a,b)=ggT(b,a%b)',
          'kgV(a,b) = a\u00d7b/ggT(a,b)',
          'Primfaktorzerlegung: eindeutig',
          'Unendlich viele Primzahlen (Euklid)',
        ],
        examples: [
          {
            example: 'Bestimme ggT(48, 18)',
            solution: 'ggT(48,18)=ggT(18,12)=ggT(12,6)=ggT(6,0)=6',
          },
          {
            example: 'Bestimme kgV(12, 8)',
            solution: 'ggT(12,8)=4\nkgV = 12\u00d78/4 = 24',
          },
        ],
        practice: [
          {
            problem: 'Bestimme ggT und kgV von 60 und 45.',
            solution: 'ggT=15, kgV=180',
            steps: [
              'ggT(60,45)=ggT(45,15)=ggT(15,0)=15',
              'kgV = 60\u00d745/15 = 180',
            ],
          },
        ],
      },
      {
        title: 'Kongruenz und Modulararithmetik',
        theory: 'a \u2261 b (mod n) bedeutet, dass n die Differenz (a-b) teilt, oder dass a und b denselben Rest bei Division durch n haben.\n\nDie Rechenregeln bleiben erhalten: (a+b) mod n = ((a mod n)+(b mod n)) mod n, und ebenso fuer die Multiplikation.\n\nKleiner Satz von Fermat: Wenn p eine Primzahl ist und p\u2224a, dann gilt a\u1d56\u207b\u00b9 \u2261 1 (mod p). Dies hat Anwendungen in der Kryptographie.',
        keyPoints: [
          'a \u2261 b (mod n) \u2194 n|(a-b)',
          'Addition und Multiplikation bleiben erhalten mod n',
          'Kleiner Fermat: a\u1d56\u207b\u00b9 \u2261 1 (mod p)',
          'Anwendung: RSA-Kryptographie',
        ],
        examples: [
          {
            example: 'Bestimme 17 mod 5',
            solution: '17 = 3\u00d75 + 2\n17 mod 5 = 2\nOder: 17 \u2261 2 (mod 5)',
          },
        ],
        practice: [
          {
            problem: 'Welcher Wochentag ist 100 Tage nach einem Freitag? (1=Montag, 7=Sonntag)',
            solution: 'Freitag',
            steps: [
              'Freitag = Tag 5',
              '(5 + 100) mod 7 = 105 mod 7',
              '105 = 15\u00d77 + 0 \u2192 105 mod 7 = 0',
              '0 mod 7 = 0 = Sonntag',
              'Hinweis: 105/7=15 genau, also genau Sonntag',
            ],
          },
        ],
      },
    ],
  },

  // numth-002: Fortgeschrittene Zahlentheorie
  'numth-002': {
    lessons: [
      {
        title: 'Diophantische Gleichungen',
        theory: 'Diophantische Gleichungen suchen ganzzahlige Loesungen. Die lineare Gleichung ax + by = c hat genau dann eine Loesung, wenn ggT(a,b)|c.\n\nDer erweiterte euklidische Algorithmus findet die Koeffizienten x, y in ggT(a,b) = ax + by, was uns bei der Bestimmung der Loesung hilft.\n\nQuadratische diophantische Gleichungen sind wesentlich schwieriger und stehen im Zusammenhang mit dem Grossen Fermatschen Satz.',
        keyPoints: [
          'ax+by=c: Loesung \u2194 ggT(a,b)|c',
          'Erweiterter euklidischer Algorithmus',
          'Wenn (x\u2080,y\u2080) eine Loesung ist, dann: x=x\u2080+bt, y=y\u2080-at',
          'Pythagoraeische Tripel: a\u00b2+b\u00b2=c\u00b2 (diophantisch)',
        ],
        examples: [
          {
            example: 'Loese: 3x + 5y = 1',
            solution: 'ggT(3,5)=1|1 \u2713\nMit Euklid: 5=1\u00d73+2, 3=1\u00d72+1\n1=3-1\u00d72=3-(5-3)=2\u00d73-5\nx\u2080=2, y\u2080=-1',
          },
        ],
        practice: [
          {
            problem: 'Hat 6x + 4y = 3 eine Loesung?',
            solution: 'Nein, ggT(6,4)=2, aber 2\u22243',
            steps: [
              'ggT(6,4) = 2',
              'Teilt 2 die Zahl 3? 3/2 = 1.5 (nein)',
              'Die Bedingung 2|3 ist nicht erfuellt',
              'Keine ganzzahlige Loesung',
            ],
          },
        ],
      },
    ],
  },
};
