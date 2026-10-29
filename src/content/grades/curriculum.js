// School curriculum for grades 6–12 (Kosovo/Albania), transcribed from docs/curriculum-grades-6-12.md.
// The single source of truth for order and completeness: every theme becomes a course (one lesson per
// subtopic) and gets one quiz. Slugs are stable, English and language-independent; do not rename them
// (progress and quiz results are stored by id).
//
// theme:    [slugSuffix, category, period, albanianTitle, subtopics]
// subtopic: [slugSuffix, albanianName]
// period:   [fromMonth, toMonth] (1–12) or { hours } for grades whose plan counts hours

// Grades whose content ships. A grade is added here only when all its lessons and quizzes exist in al/en/de
// (scripts/validateGradeContent.js enforces it).
export const PUBLISHED_GRADES = [];

export const ALL_GRADES = [6, 7, 8, 9, 10, 11, 12];

const RAW = {
  6: [
    ['natural-numbers', 'arithmetic', [9, 10], 'Numrat natyrorë', [
      ['reading-writing', 'leximi dhe shkrimi i numrave'],
      ['comparing', 'krahasimi'],
      ['number-line', 'boshti numerik'],
      ['rounding', 'rrumbullakimi'],
      ['operations', 'katër veprimet dhe vetitë e tyre'],
      ['order-of-operations', 'radha e veprimeve'],
      ['multiples-factors', 'shumëfishat dhe faktorët'],
    ]],
    ['plane-geometry', 'geometry', [9, 12], 'Gjeometria në rrafsh', [
      ['point-line-plane', 'pika, drejtëza dhe rrafshi'],
      ['segment', 'segmenti'],
      ['angle-measure', 'këndi dhe matja e tij'],
      ['parallel-perpendicular', 'drejtëzat paralele dhe pingule'],
      ['perpendicular-bisector', 'simetralja e segmentit'],
      ['angle-types', 'llojet e këndeve'],
    ]],
    ['fractions', 'arithmetic', [11, 12], 'Numrat thyesorë', [
      ['fraction-meaning', 'kuptimi i thyesës'],
      ['equivalent-fractions', 'thyesat e barabarta'],
      ['comparing-fractions', 'krahasimi'],
      ['fraction-operations', 'katër veprimet'],
      ['mixed-numbers', 'thyesat e përziera'],
    ]],
    ['geometric-figures', 'geometry', [11, 12], 'Figurat gjeometrike', [
      ['triangles', 'trekëndëshi dhe llojet e tij'],
      ['quadrilaterals', 'katërkëndëshat'],
      ['circle', 'rrethi'],
      ['constructions', 'ndërtime me vizore dhe kompas'],
    ]],
    ['decimals', 'arithmetic', [1, 2], 'Numrat dhjetorë', [
      ['decimal-meaning', 'kuptimi i numrit dhjetor'],
      ['decimal-operations', 'veprimet'],
      ['decimal-to-fraction', 'shndërrimi në thyesë të zakonshme'],
    ]],
    ['measurement', 'geometry', [1, 2], 'Matja e madhësive gjeometrike', [
      ['length-units', 'njësitë e gjatësisë'],
      ['area-units', 'njësitë e sipërfaqes'],
      ['volume-units', 'njësitë e vëllimit'],
      ['conversions', 'shndërrimet'],
    ]],
    ['integers', 'arithmetic', [3, 4], 'Numrat e plotë', [
      ['negative-numbers', 'numrat negativë'],
      ['integers-number-line', 'paraqitja në boshtin numerik'],
      ['adding-subtracting', 'mbledhja dhe zbritja'],
    ]],
    ['expressions-equations', 'algebra', [3, 4], 'Shprehjet, ekuacionet, inekuacionet', [
      ['expressions', 'shprehjet me një ndryshore'],
      ['linear-equations', 'ekuacionet lineare'],
      ['word-problems', 'problemat me ekuacione'],
      ['inequalities', 'inekuacionet'],
    ]],
    ['other-measures', 'arithmetic', [3, 4], 'Matja e madhësive të tjera', [
      ['mass', 'masa'],
      ['time', 'koha'],
      ['money', 'paratë'],
    ]],
    ['transformations-solids', 'geometry', [5, 6], 'Shndërrimet gjeometrike dhe trupat', [
      ['coordinate-system', 'sistemi koordinativ'],
      ['symmetry', 'simetria boshtore dhe qendrore'],
      ['cube-cuboid', 'kubi dhe kuboidi'],
      ['nets', 'hapja e trupave'],
    ]],
    ['functions-sequences', 'algebra', [5, 6], 'Funksionet dhe vargjet numerike', [
      ['function-table-graph', 'funksioni me tabelë dhe grafik'],
      ['number-sequences', 'vargjet numerike'],
    ]],
    ['statistics-probability', 'statistics', [5, 6], 'Statistika dhe probabiliteti', [
      ['data-collection', 'mbledhja dhe organizimi i të dhënave'],
      ['charts', 'diagramet'],
      ['mean-mode-median', 'mesatarja, moda, mediana'],
      ['probability', 'kuptimi i probabilitetit'],
    ]],
  ],
  7: [
    ['fractions-decimals', 'arithmetic', [9, 10], 'Thyesat dhe numrat dhjetorë', [
      ['simplify-expand', 'thjeshtimi dhe zgjerimi'],
      ['common-denominator', 'emëruesi i përbashkët'],
      ['comparing', 'krahasimi'],
      ['adding-subtracting', 'mbledhja dhe zbritja'],
      ['repeating-decimals', 'numrat dhjetorë periodikë'],
      ['percent', 'përqindja'],
    ]],
    ['angles', 'geometry', [9, 10], 'Këndet', [
      ['special-angles', 'këndet e veçanta'],
      ['parallels-transversal', 'drejtëzat paralele dhe transversalja'],
      ['point-line-distance', 'largësia e pikës nga drejtëza'],
      ['projection', 'projeksioni'],
    ]],
    ['integers', 'arithmetic', [9, 10], 'Numrat e plotë', [
      ['integer-operations', 'katër veprimet me numra të plotë'],
      ['sign-rules', 'rregullat e shenjave'],
    ]],
    ['rational-numbers', 'arithmetic', [11, 12], 'Numrat racionalë', [
      ['absolute-value', 'vlera absolute'],
      ['comparing', 'krahasimi'],
      ['operations', 'katër veprimet'],
      ['expressions', 'shprehjet aritmetike'],
    ]],
    ['polygons', 'geometry', [11, 12], 'Shumëkëndëshat', [
      ['angle-sum', 'shuma e këndeve të brendshme'],
      ['regular-polygons', 'shumëkëndëshat e rregullt'],
      ['diagonals', 'diagonalet'],
      ['perimeter-area', 'perimetri dhe sipërfaqja'],
      ['circle', 'rrethi'],
    ]],
    ['powers-roots', 'arithmetic', [11, 12], 'Fuqitë dhe rrënja katrore', [
      ['power-meaning', 'kuptimi i fuqisë'],
      ['power-properties', 'vetitë'],
      ['scientific-notation', 'trajta shkencore'],
      ['square-root', 'rrënja katrore'],
    ]],
    ['ratios-proportions', 'arithmetic', [1, 2], 'Raporte dhe përpjesëtime', [
      ['ratio', 'raporti'],
      ['proportion', 'përpjesëtimi dhe vetitë'],
      ['rule-of-three', 'rregulla e treshit'],
      ['direct-inverse', 'varësia e drejtë dhe e zhdrejtë'],
      ['scale', 'shkalla'],
    ]],
    ['pythagoras', 'geometry', [1, 2], 'Teorema e Pitagorës', [
      ['perimeter', 'perimetri i shumëkëndëshit dhe i rrethit'],
      ['theorem-converse', 'teorema e Pitagorës dhe e anasjellta'],
      ['applications', 'zbatimet'],
    ]],
    ['expressions-equations', 'algebra', [3, 4], 'Shprehjet me ndryshore, ekuacionet, inekuacionet', [
      ['monomials', 'monomet dhe reduktimi'],
      ['equation-ax-b', 'ekuacioni ax = b'],
      ['word-problems', 'problemat me ekuacione'],
      ['inequalities', 'inekuacionet'],
    ]],
    ['transformations-solids', 'geometry', [3, 4], 'Shndërrimet dhe trupat gjeometrikë', [
      ['symmetry', 'simetria'],
      ['coordinate-system', 'sistemi koordinativ'],
      ['prism', 'prizmi'],
      ['pyramid', 'piramida'],
      ['volume', 'vëllimi i tyre'],
    ]],
    ['function', 'algebra', [5, 6], 'Funksioni', [
      ['table-formula-graph', 'funksioni me tabelë, formulë dhe grafik'],
      ['direct-variation', 'funksioni y = kx'],
    ]],
    ['statistics-probability', 'statistics', [5, 6], 'Statistika dhe probabiliteti', [
      ['frequency-tables', 'tabelat e frekuencave'],
      ['pie-chart', 'diagrami rrethor'],
      ['probability', 'probabiliteti statistikor dhe teorik'],
    ]],
  ],
  8: [
    ['number-sense', 'arithmetic', { hours: 8 }, 'Kuptimi i numrit', [
      ['sets', 'bashkësitë'],
      ['intersection-union', 'prerja dhe bashkimi'],
      ['number-sets', 'bashkësitë numerike'],
      ['repeating-decimals', 'numrat dhjetorë periodikë'],
      ['integer-exponents', 'fuqitë me eksponent të plotë'],
      ['scientific-notation', 'shkrimi shkencor'],
    ]],
    ['number-operations', 'arithmetic', { hours: 12 }, 'Veprimet me numra', [
      ['signed-numbers', 'numrat me shenjë'],
      ['power-properties', 'fuqitë dhe vetitë e tyre'],
      ['square-root', 'rrënja katrore'],
      ['rational-expressions', 'shprehjet me numra racionalë'],
    ]],
    ['measurement', 'geometry', { hours: 12 }, 'Matja', [
      ['perimeter', 'perimetri'],
      ['arc-length', 'gjatësia e harkut'],
      ['polygon-sector-area', 'sipërfaqja e shumëkëndëshave dhe e sektorit'],
      ['volumes', 'vëllimi i prizmit, piramidës dhe cilindrit'],
    ]],
    ['plane-geometry', 'geometry', { hours: 20 }, 'Gjeometria në plan', [
      ['axioms', 'aksiomat'],
      ['if-then', 'pohimet "nëse … atëherë"'],
      ['parallel-angles', 'këndet te drejtëzat paralele'],
      ['circle', 'rrethi'],
      ['congruence', 'kongruenca e trekëndëshave'],
      ['right-triangles', 'trekëndëshat kënddrejtë'],
      ['pythagoras', 'Pitagora'],
      ['special-triangles', 'trekëndëshat 30°–60°–90° dhe 45°–45°–90°'],
    ]],
    ['transformations', 'geometry', { hours: 10 }, 'Shndërrimet gjeometrike', [
      ['vectors', 'vektori në planin koordinativ'],
      ['translation', 'zhvendosja paralele'],
      ['symmetry', 'simetria qendrore dhe boshtore'],
      ['rotation', 'rrotullimi'],
      ['homothety', 'homotetia'],
    ]],
    ['solid-geometry', 'geometry', { hours: 10 }, 'Gjeometria në hapësirë', [
      ['lines-planes', 'pozitat e drejtëzave dhe planeve'],
      ['cube-cuboid', 'kubi, kuboidi'],
      ['prism-pyramid', 'prizmi, piramida dhe sipërfaqet e tyre'],
    ]],
    ['algebraic-expressions', 'algebra', { hours: 16 }, 'Shprehjet shkronjore', [
      ['monomials', 'monomet'],
      ['polynomials', 'polinomet'],
      ['binomial-square', 'katrori i binomit'],
      ['difference-of-squares', 'diferenca e katrorëve'],
      ['factoring', 'faktorizimi'],
      ['rearranging', 'veçimi i shkronjës'],
    ]],
    ['equations-systems', 'algebra', { hours: 12 }, 'Ekuacionet, inekuacionet dhe sistemet', [
      ['linear', 'ekuacionet dhe inekuacionet e fuqisë së parë'],
      ['quadratic', 'ekuacionet e fuqisë së dytë'],
      ['systems', 'sistemet me dy ndryshore'],
    ]],
    ['function', 'algebra', { hours: 10 }, 'Funksioni', [
      ['direct-inverse', 'përpjesëtimi i drejtë dhe i zhdrejtë'],
      ['reciprocal', 'y = k/x'],
      ['linear-equation', 'ax + by = c'],
      ['parabola', 'parabola y = ax²'],
      ['reading-graphs', 'leximi i grafikëve'],
    ]],
    ['statistics-probability', 'statistics', { hours: 10 }, 'Statistika dhe probabiliteti', [
      ['reading-charts', 'leximi i diagrameve'],
      ['grouped-data', 'të dhënat e grupuara në klasa'],
      ['bar-pie-charts', 'diagramet me shtylla dhe rrethore'],
      ['events', 'ngjarjet'],
      ['probability', 'probabiliteti'],
    ]],
  ],
  9: [
    ['number-sets', 'arithmetic', [9, 10], 'Bashkësitë numerike', [
      ['repeating-decimals', 'numrat dhjetorë periodikë'],
      ['irrational-numbers', 'numrat irracionalë'],
      ['real-numbers', 'bashkësia R'],
      ['absolute-value', 'vlera absolute'],
      ['intervals', 'intervalet, prerja dhe bashkimi i tyre'],
    ]],
    ['expressions', 'algebra', [9, 10], 'Shprehjet me ndryshore', [
      ['polynomial-operations', 'polinomet dhe veprimet me to'],
      ['binomial-square', 'katrori i binomit'],
      ['difference-of-squares', 'diferenca e katrorëve'],
      ['binomial-cube', 'kubi i binomit'],
      ['factoring', 'faktorizimi'],
      ['algebraic-fractions', 'thyesat algjebrike'],
    ]],
    ['equations-inequalities', 'algebra', [11, 12], 'Ekuacionet dhe inekuacionet me një ndryshore', [
      ['linear-equation', 'ekuacioni linear'],
      ['rearranging', 'veçimi i shkronjës në formulë'],
      ['product-zero', 'ekuacionet e trajtës (x − a)(x − b) = 0'],
      ['inequalities', 'inekuacionet'],
      ['double-absolute', 'inekuacionet e dyfishta dhe me vlerë absolute'],
    ]],
    ['plane-geometry', 'geometry', [11, 12], 'Gjeometria në rrafsh', [
      ['axioms-theorems', 'aksiomat dhe teoremat'],
      ['triangle-properties', 'vetitë e trekëndëshit'],
      ['triangle-segments', 'segmentet në trekëndësh'],
      ['congruence', 'tre rastet e kongruencës'],
      ['loci', 'vendet gjeometrike'],
    ]],
    ['proportionality', 'arithmetic', [1, 3], 'Proporcionaliteti', [
      ['proportions', 'përpjesëtimet'],
      ['dividing-mixing', 'ndarja dhe përzierja'],
      ['direct-inverse', 'varësia e drejtë dhe e zhdrejtë'],
      ['percent-permille', 'përqindja dhe promili'],
      ['interest', 'interesi bankar'],
    ]],
    ['linear-systems', 'algebra', [1, 3], 'Ekuacionet lineare me dy ndryshore dhe sistemet', [
      ['line-graph', 'grafiku i y = ax + b'],
      ['graphical-method', 'sistemet me metodën grafike'],
      ['substitution', 'metoda e zëvendësimit'],
      ['elimination', 'metoda e eliminimit'],
      ['applications', 'zbatimet'],
    ]],
    ['vectors', 'geometry', [1, 3], 'Vektorët', [
      ['equal-opposite', 'vektorët e barabartë dhe të kundërt'],
      ['adding-subtracting', 'mbledhja dhe zbritja'],
      ['scalar-multiple', 'shumëzimi me numër'],
      ['collinear', 'vektorët bashkëvizorë'],
    ]],
    ['similarity', 'geometry', [1, 3], 'Ngjashmëria dhe homotetia', [
      ['similarity-cases', 'tre rastet e ngjashmërisë'],
      ['similar-polygons', 'ngjashmëria e shumëkëndëshave'],
      ['thales', 'teorema e Talesit'],
      ['homothety', 'homotetia'],
    ]],
    ['right-triangle-trig', 'trigonometry', [4, 6], 'Trigonometria në trekëndëshin kënddrejtë', [
      ['ratios', 'sin, cos, tg dhe cotg i këndit të ngushtë'],
      ['relations', 'lidhjet ndërmjet tyre'],
      ['complementary', 'këndet komplementare'],
      ['special-values', 'vlerat për 30°, 45°, 60°'],
      ['solving', 'zgjidhja e trekëndëshit kënddrejtë'],
    ]],
    ['data-probability', 'statistics', [4, 6], 'Të dhënat dhe probabiliteti', [
      ['graphs', 'paraqitja grafike e të dhënave'],
      ['averages', 'mesataret'],
      ['sample-space', 'hapësira e rezultateve'],
      ['events', 'ngjarjet'],
      ['probability', 'probabiliteti teorik dhe statistikor'],
    ]],
  ],
  10: [
    ['number-operations', 'arithmetic', [9, 9], 'Veprimet me numra', [
      ['place-value-rounding', 'vendvlera dhe rrumbullakimi'],
      ['operations', 'katër veprimet'],
    ]],
    ['algebraic-expressions', 'algebra', [9, 10], 'Shprehjet algjebrike', [
      ['simplifying', 'reduktimi'],
      ['powers', 'fuqitë'],
      ['expanding-factoring', 'zbërthimi i kllapave dhe faktorizimi'],
      ['algebraic-fractions', 'thyesat algjebrike'],
    ]],
    ['angles-polygons', 'geometry', [10, 11], 'Këndet dhe shumëkëndëshat', [
      ['angles-lines', 'këndet dhe drejtëzat'],
      ['triangles-quadrilaterals', 'trekëndëshat dhe katërkëndëshat'],
      ['congruence-similarity', 'kongruenca dhe ngjashmëria'],
      ['polygon-angles', 'këndet e shumëkëndëshave'],
    ]],
    ['data-handling', 'statistics', [11, 11], 'Përpunimi i të dhënave', [
      ['presenting-data', 'paraqitja e të dhënave'],
      ['averages-spread', 'mesataret dhe shpërndarja'],
      ['frequency-diagrams', 'diagramet e dendurive'],
    ]],
    ['fractions-percentages', 'arithmetic', [12, 1], 'Thyesat, numrat dhjetorë dhe përqindjet', [
      ['fractions-percent', 'thyesat dhe përqindja'],
      ['fraction-operations', 'veprimet me thyesa'],
      ['conversions', 'shndërrimet ndërmjet tyre'],
    ]],
    ['formulas-functions', 'algebra', [1, 2], 'Formulat dhe funksionet', [
      ['formulas', 'formulat'],
      ['functions', 'funksionet'],
      ['identities', 'njëvlershmëritë algjebrike'],
      ['factoring', 'faktorizimi'],
    ]],
    ['plane-geometry', 'geometry', [2, 3], 'Gjeometria në plan', [
      ['measuring', 'matja e gjatësive dhe këndeve'],
      ['area', 'syprina e figurave plane'],
      ['transformations', 'shndërrimet gjeometrike'],
    ]],
    ['probability', 'statistics', [3, 3], 'Probabiliteti', [
      ['experimental-theoretical', 'probabiliteti eksperimental dhe teorik'],
      ['mutually-exclusive', 'ngjarjet e papajtueshme'],
    ]],
    ['measures-accuracy', 'arithmetic', [3, 4], 'Matjet dhe saktësia', [
      ['rounding-estimating', 'rrumbullakimi dhe përafrimi'],
      ['calculator', 'makina llogaritëse'],
      ['bounds', 'kufijtë e saktësisë'],
    ]],
    ['equations-inequalities', 'algebra', [4, 5], 'Ekuacionet dhe inekuacionet', [
      ['linear', 'ekuacionet lineare'],
      ['quadratic', 'ekuacionet e fuqisë së dytë'],
      ['systems', 'sistemet'],
      ['inequalities', 'inekuacionet'],
    ]],
    ['circle-loci', 'geometry', [5, 5], 'Rrethi dhe vendet gjeometrike', [
      ['circle-elements', 'elementet e rrethit'],
      ['circle-theorems', 'teoremat për rrethin'],
      ['constructions-loci', 'ndërtimet dhe vendet gjeometrike'],
    ]],
    ['ratio-proportion', 'arithmetic', [5, 6], 'Raporti dhe përpjesëtimi', [
      ['part-of-whole', 'pjesa e së tërës'],
      ['ratio-scale', 'raporti dhe shkalla'],
      ['percent-change', 'ndryshimi në përqindje'],
    ]],
  ],
  11: [
    ['factors-powers-roots', 'arithmetic', [9, 9], 'Faktorët, fuqitë dhe rrënjët', [
      ['factors-multiples', 'faktorët dhe shumëfishat'],
      ['powers-roots', 'fuqitë dhe rrënjët'],
      ['irrational-numbers', 'numrat irracionalë'],
    ]],
    ['graphs-1', 'algebra', [9, 10], 'Grafikët 1', [
      ['line-equation', 'ekuacioni i drejtëzës'],
      ['linear-quadratic', 'funksionet lineare dhe kuadratike'],
      ['parabola-properties', 'vetitë e parabolës'],
      ['motion-graphs', 'grafikët e lëvizjes'],
    ]],
    ['solid-geometry', 'geometry', [10, 11], 'Gjeometria në hapësirë', [
      ['solids', 'trupat gjeometrikë'],
      ['prism-volume', 'vëllimi i prizmit'],
      ['volume-surface', 'vëllimi dhe syprina e trupave'],
    ]],
    ['data-handling', 'statistics', [11, 12], 'Përpunimi i të dhënave', [
      ['averages-spread', 'mesataret dhe shpërndarja'],
      ['box-plots', 'grafikët me kuti'],
      ['cumulative-frequency', 'dendurive të grumbulluara'],
      ['scatter-correlation', 'grafikët me pika dhe korrelacioni'],
      ['time-series', 'seritë kohore'],
    ]],
    ['number-operations', 'arithmetic', [12, 12], 'Veprimet me numra', [
      ['surds-powers', 'veprimet me rrënjë dhe fuqi'],
      ['exact-calculations', 'llogaritjet e sakta'],
      ['rationalizing', 'racionalizimi'],
    ]],
    ['graphs-2', 'algebra', [1, 2], 'Grafikët 2', [
      ['cubic-reciprocal', 'funksionet kubike dhe y = k/x'],
      ['exponential-trig', 'funksionet eksponenciale dhe trigonometrike'],
      ['gradient', 'koeficienti këndor'],
      ['area-under-graph', 'syprina nën grafik'],
      ['circle-equation', 'ekuacioni i rrethit'],
    ]],
    ['pythagoras-trig-vectors', 'trigonometry', [2, 3], 'Pitagora, trigonometria dhe vektorët', [
      ['pythagoras-euclid', 'teorema e Pitagorës dhe e Euklidit'],
      ['triangle-trig', 'trigonometria në trekëndësh'],
      ['sine-cosine-rules', 'teorema e sinusit dhe e kosinusit'],
      ['vectors', 'vektorët'],
    ]],
    ['combined-probability', 'statistics', [3, 4], 'Probabiliteti i ngjarjeve të kombinuara', [
      ['venn-diagrams', 'bashkësitë dhe diagramet e Venit'],
      ['sample-space', 'hapësira e rezultateve'],
      ['tree-diagrams', 'diagrami pemë'],
      ['conditional', 'probabiliteti me kusht'],
    ]],
    ['sequences', 'algebra', [4, 5], 'Vargjet', [
      ['arithmetic', 'progresioni aritmetik'],
      ['quadratic-sequences', 'vargjet kuadratike'],
      ['special-sequences', 'vargje të veçanta'],
    ]],
    ['units-proportion', 'arithmetic', [5, 6], 'Njësitë dhe përpjesëtimet', [
      ['compound-units', 'njësitë e përbëra (shpejtësi, dendësi)'],
      ['converting-units', 'këmbimi i njësive'],
      ['direct-inverse', 'përpjesëtimi i drejtë dhe i zhdrejtë'],
      ['rates-of-change', 'normat e ndryshimit'],
      ['growth-decay', 'rritja dhe zvogëlimi'],
    ]],
  ],
  12: [
    ['numeric-function', 'calculus', null, 'Funksioni numerik', [
      ['graph', 'grafiku'],
      ['monotonicity', 'monotonia'],
      ['extrema', 'ekstremumet'],
      ['parity', 'çiftësia'],
      ['periodicity', 'periodiciteti'],
      ['composition', 'përbërja e funksioneve'],
      ['inverse', 'funksioni invers'],
    ]],
    ['sequences-progressions', 'algebra', null, 'Vargjet dhe progresionet', [
      ['recursive', 'vargjet rekurrente'],
      ['monotone-bounded', 'monotone dhe të kufizuara'],
      ['arithmetic-geometric', 'progresioni aritmetik dhe gjeometrik'],
      ['sums', 'shumat e tyre'],
    ]],
    ['limits-infinity', 'calculus', null, 'Limitet kur x → ±∞ dhe limitet e vargjeve', [
      ['polynomial-rational', 'limiti i polinomit dhe i funksionit racional'],
      ['horizontal-asymptote', 'asimptota horizontale'],
      ['sequence-limit', 'limiti i vargut'],
      ['number-e', 'numri e'],
    ]],
    ['coordinate-geometry', 'geometry', null, 'Pika dhe drejtëza në planin koordinativ', [
      ['dot-product', 'prodhimi skalar'],
      ['triangle-area', 'syprina e trekëndëshit me koordinata'],
      ['midpoint', 'mesi i segmentit'],
      ['line-equations', 'ekuacionet e drejtëzës'],
      ['parallel-perpendicular', 'paralelizmi dhe pingulësia'],
      ['point-line-distance', 'largësia e pikës nga drejtëza'],
    ]],
    ['limits-continuity', 'calculus', null, 'Limitet e funksioneve dhe vazhdueshmëria', [
      ['limit-at-a', 'limiti kur x → a'],
      ['vertical-asymptotes', 'asimptotat vertikale'],
      ['indeterminate-forms', 'format e pacaktuara'],
      ['special-limits', 'limitet e rëndësishme'],
      ['continuity', 'vazhdueshmëria'],
    ]],
    ['derivatives', 'calculus', null, 'Derivatet', [
      ['definition', 'përkufizimi'],
      ['rate-of-change', 'derivati si shpejtësi'],
      ['rules', 'rregullat e derivimit'],
      ['tangent', 'tangjentja'],
      ['exp-log-trig', 'derivatet e funksioneve eksponenciale, logaritmike dhe trigonometrike'],
      ['chain-rule', 'funksioni i përbërë'],
    ]],
    ['circle-ellipse', 'geometry', null, 'Vijat e gradës së dytë: rrethi dhe elipsa', [
      ['circle-equation', 'ekuacioni i rrethit'],
      ['tangent', 'tangjentja'],
      ['ellipse', 'elipsa'],
      ['eccentricity', 'jashtëqendërsia'],
      ['focal-radii', 'rrezet vatrore'],
    ]],
    ['derivative-applications', 'calculus', null, 'Zbatimet e derivateve', [
      ['fermat-lagrange', 'teoremat e Fermës dhe Lagranzhit'],
      ['monotonicity', 'monotonia'],
      ['extrema', 'ekstremumet'],
      ['max-min-values', 'vlerat më të mëdha dhe më të vogla'],
      ['optimization', 'problemat e optimizimit'],
      ['concavity-inflection', 'lakueshmëria dhe pikat e infleksionit'],
    ]],
    ['hyperbola-parabola', 'geometry', null, 'Vijat e gradës së dytë: hiperbola dhe parabola', [
      ['hyperbola', 'hiperbola dhe asimptotat'],
      ['parabola', 'parabola'],
      ['line-conic', 'pozita e drejtëzës ndaj konikëve'],
      ['tangent', 'tangjentja'],
    ]],
    ['integrals', 'calculus', null, 'Integralet', [
      ['indefinite', 'integrali i pacaktuar'],
      ['substitution-parts', 'metoda e zëvendësimit dhe me pjesë'],
      ['definite', 'integrali i caktuar'],
      ['areas', 'syprinat'],
      ['volumes-revolution', 'vëllimet e trupave të rrotullimit'],
    ]],
  ],
};

/** [{ grade, themes: [{ slug, grade, order, category, period, nameAl, subtopics: [{ slug, order, nameAl }] }] }] */
export const CURRICULUM = ALL_GRADES.map((grade) => ({
  grade,
  themes: RAW[grade].map(([suffix, category, period, nameAl, subs], i) => {
    const slug = `g${grade}-${suffix}`;
    return {
      slug,
      grade,
      order: i + 1,
      category,
      period,
      nameAl,
      subtopics: subs.map(([s, n], j) => ({ slug: `${slug}-${s}`, order: j + 1, nameAl: n })),
    };
  }),
}));

export const getGradeCurriculum = (grade) => CURRICULUM.find((g) => g.grade === grade);
