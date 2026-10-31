// Grade 7 · Theme 7: Ratios and proportions (January–February)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g7-ratios-proportions',
  i18n: {
    al: { title: 'Raporte dhe përpjesëtime', description: 'Raporti, përpjesëtimi, rregulla e treshit, varësia e drejtë dhe e zhdrejtë, shkalla e hartës.' },
    en: { title: 'Ratios and proportions', description: 'Ratio, proportion, the unitary method, direct and inverse proportion, map scale.' },
    de: { title: 'Verhältnisse und Proportionen', description: 'Verhältnis, Verhältnisgleichung, Dreisatz, proportionale und antiproportionale Zuordnung, Maßstab.' },
  },
  lessons: [
    // ───────── 1. Ratio
    {
      slug: 'g7-ratios-proportions-ratio',
      visuals: [{
        type: 'fractionBar', bars: [{ parts: 7, filled: 3, label: '3 : 4' }],
        caption: alt('Raporti 3 : 4 ndan të tërën në 3 + 4 = 7 pjesë të barabarta: 35 € → 15 € dhe 20 €.', 'The ratio 3 : 4 splits the whole into 3 + 4 = 7 equal parts: €35 → €15 and €20.', 'Das Verhältnis 3 : 4 teilt das Ganze in 3 + 4 = 7 gleiche Teile: 35 € → 15 € und 20 €.'),
        alt: alt('Shirit me 7 pjesë, 3 të ngjyrosura dhe 4 të bardha.', 'A bar of 7 parts, 3 shaded and 4 white.', 'Ein Streifen aus 7 Teilen, 3 gefärbt und 4 weiß.'),
      }],
      answers: {
        examples: [[['12 / 6', 2], ['18 / 6', 3]], [['35 / 7 * 3', 15], ['35 / 7 * 4', 20]]],
        practice: [[['20 / 10', 2], ['30 / 10', 3]], [['200 / 50', 4]], [['48 / 8 * 5', 30], ['48 / 8 * 3', 18]]],
      },
      al: {
        title: 'Raporti',
        objectives: ['Të shkruani dhe të thjeshtoni raportin e dy madhësive.', 'Të ndani një sasi në një raport të dhënë.'],
        theory: 'Raporti a : b krahason dy madhësi të të njëjtit lloj: sa herë është njëra më e madhe se tjetra, ose si ndahet një e tërë. Raporti 12 : 18 lexohet "12 me 18" dhe është i barabartë me herësin 12/18.\n\nRaporti thjeshtohet si thyesa: pjesëtojmë të dy anëtarët me të njëjtin numër. 12 : 18 = 2 : 3 (pjesëtuam me 6). Para se të shkruajmë raportin, madhësitë duhet të jenë në të njëjtën njësi: 50 cm : 2 m = 50 cm : 200 cm = 1 : 4.\n\nPër të ndarë një sasi në raportin 3 : 4, mbledhim pjesët (3 + 4 = 7), gjejmë sa vlen një pjesë dhe shumëzojmë.',
        keyPoints: ['a : b = a/b', 'Thjeshtimi: pjesëtoni të dy anëtarët me të njëjtin numër.', 'Ndarja në raport: shuma ÷ numri i pjesëve, pastaj × secilin anëtar.'],
        examples: [
          { example: 'Thjeshtoni raportin 12 : 18.', solution: 'SHMV(12, 18) = 6: 12 : 18 = 2 : 3.' },
          { example: 'Ana dhe Besa ndajnë 35 € në raportin 3 : 4. Sa merr secila?', solution: '3 + 4 = 7 pjesë; 35 : 7 = 5 € për pjesë. Ana 3 · 5 = 15 €, Besa 4 · 5 = 20 €.' },
        ],
        commonMistakes: [
          { mistake: '50 cm : 2 m = 50 : 2 = 25 : 1', fix: 'Njësitë duhet të jenë të njëjta: 50 cm : 200 cm = 1 : 4.' },
          { mistake: 'Ndarja 35 € në 3 : 4 si 35 : 3 dhe 35 : 4.', fix: 'Fillimisht numërohen pjesët: 3 + 4 = 7, pastaj 35 : 7 = 5 për pjesë.' },
        ],
        practice: [
          { problem: 'Thjeshtoni raportin 20 : 30.', solution: '2 : 3', steps: ['Pjesëtojmë me 10.', '20 : 30 = 2 : 3.'] },
          { problem: 'Shkruani raportin 50 cm : 2 m në trajtën më të thjeshtë.', solution: '1 : 4', steps: ['2 m = 200 cm.', '50 : 200 = 1 : 4.'] },
          { problem: 'Ndani 48 kokrra arra në raportin 5 : 3.', solution: '30 dhe 18', steps: ['5 + 3 = 8 pjesë; 48 : 8 = 6.', '5 · 6 = 30 dhe 3 · 6 = 18.'] },
        ],
      },
      en: {
        title: 'Ratio',
        objectives: ['Write and simplify the ratio of two quantities.', 'Share a quantity in a given ratio.'],
        theory: 'The ratio a : b compares two quantities of the same kind: how many times one is the other, or how a whole is shared. The ratio 12 : 18 is read "12 to 18" and equals the quotient 12/18.\n\nA ratio is simplified like a fraction: divide both terms by the same number. 12 : 18 = 2 : 3 (we divided by 6). Before writing a ratio, the quantities must be in the same unit: 50 cm : 2 m = 50 cm : 200 cm = 1 : 4.\n\nTo share an amount in the ratio 3 : 4, add the parts (3 + 4 = 7), find what one part is worth and multiply.',
        keyPoints: ['a : b = a/b', 'Simplifying: divide both terms by the same number.', 'Sharing in a ratio: total ÷ number of parts, then × each term.'],
        examples: [
          { example: 'Simplify the ratio 12 : 18.', solution: 'HCF(12, 18) = 6: 12 : 18 = 2 : 3.' },
          { example: 'Ana and Besa share €35 in the ratio 3 : 4. How much does each get?', solution: '3 + 4 = 7 parts; 35 ÷ 7 = €5 per part. Ana 3 · 5 = €15, Besa 4 · 5 = €20.' },
        ],
        commonMistakes: [
          { mistake: '50 cm : 2 m = 50 : 2 = 25 : 1', fix: 'The units must match: 50 cm : 200 cm = 1 : 4.' },
          { mistake: 'Sharing €35 in 3 : 4 as 35 ÷ 3 and 35 ÷ 4.', fix: 'First count the parts: 3 + 4 = 7, then 35 ÷ 7 = 5 per part.' },
        ],
        practice: [
          { problem: 'Simplify the ratio 20 : 30.', solution: '2 : 3', steps: ['Divide by 10.', '20 : 30 = 2 : 3.'] },
          { problem: 'Write the ratio 50 cm : 2 m in its simplest form.', solution: '1 : 4', steps: ['2 m = 200 cm.', '50 : 200 = 1 : 4.'] },
          { problem: 'Share 48 walnuts in the ratio 5 : 3.', solution: '30 and 18', steps: ['5 + 3 = 8 parts; 48 ÷ 8 = 6.', '5 · 6 = 30 and 3 · 6 = 18.'] },
        ],
      },
      de: {
        title: 'Das Verhältnis',
        objectives: ['Das Verhältnis zweier Größen aufschreiben und kürzen.', 'Eine Menge in einem gegebenen Verhältnis aufteilen.'],
        theory: 'Das Verhältnis a : b vergleicht zwei gleichartige Größen: wie oft die eine in der anderen steckt oder wie ein Ganzes aufgeteilt wird. Das Verhältnis 12 : 18 liest man „12 zu 18“; es ist gleich dem Quotienten 12/18.\n\nEin Verhältnis kürzt man wie einen Bruch: beide Glieder durch dieselbe Zahl teilen. 12 : 18 = 2 : 3 (durch 6 geteilt). Vorher müssen die Größen dieselbe Einheit haben: 50 cm : 2 m = 50 cm : 200 cm = 1 : 4.\n\nUm eine Menge im Verhältnis 3 : 4 aufzuteilen, addiert man die Teile (3 + 4 = 7), bestimmt den Wert eines Teils und multipliziert.',
        keyPoints: ['a : b = a/b', 'Kürzen: beide Glieder durch dieselbe Zahl teilen.', 'Aufteilen: Gesamtmenge ÷ Anzahl der Teile, dann × jedes Glied.'],
        examples: [
          { example: 'Kürzen Sie das Verhältnis 12 : 18.', solution: 'ggT(12, 18) = 6: 12 : 18 = 2 : 3.' },
          { example: 'Ana und Besa teilen 35 € im Verhältnis 3 : 4. Wie viel bekommt jede?', solution: '3 + 4 = 7 Teile; 35 : 7 = 5 € pro Teil. Ana 3 · 5 = 15 €, Besa 4 · 5 = 20 €.' },
        ],
        commonMistakes: [
          { mistake: '50 cm : 2 m = 50 : 2 = 25 : 1', fix: 'Die Einheiten müssen gleich sein: 50 cm : 200 cm = 1 : 4.' },
          { mistake: '35 € im Verhältnis 3 : 4 als 35 : 3 und 35 : 4 aufteilen.', fix: 'Zuerst die Teile zählen: 3 + 4 = 7, dann 35 : 7 = 5 pro Teil.' },
        ],
        practice: [
          { problem: 'Kürzen Sie das Verhältnis 20 : 30.', solution: '2 : 3', steps: ['Durch 10 teilen.', '20 : 30 = 2 : 3.'] },
          { problem: 'Schreiben Sie das Verhältnis 50 cm : 2 m vollständig gekürzt.', solution: '1 : 4', steps: ['2 m = 200 cm.', '50 : 200 = 1 : 4.'] },
          { problem: 'Teilen Sie 48 Walnüsse im Verhältnis 5 : 3 auf.', solution: '30 und 18', steps: ['5 + 3 = 8 Teile; 48 : 8 = 6.', '5 · 6 = 30 und 3 · 6 = 18.'] },
        ],
      },
    },

    // ───────── 2. Proportion
    {
      slug: 'g7-ratios-proportions-proportion',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Përpjesëtimi', 'Proportion', 'Verhältnisgleichung'), cells: ['3 : 4 = 9 : 12', 'x : 6 = 10 : 15'] },
          { head: alt('Prodhimi kryq', 'Cross product', 'Über Kreuz'), cells: ['3 · 12 = 4 · 9 = 36', '15x = 6 · 10 = 60'] },
          { head: alt('Përfundimi', 'Result', 'Ergebnis'), cells: [alt('i saktë', 'true', 'richtig'), 'x = 4'] },
        ],
        alt: alt('Tabela: si kontrollohet një përpjesëtim dhe si gjendet anëtari i panjohur me prodhimin kryq.', 'Table: checking a proportion and finding the unknown term with the cross product.', 'Tabelle: eine Verhältnisgleichung prüfen und das unbekannte Glied über Kreuz bestimmen.'),
      }],
      answers: {
        examples: [[['3 * 12', 36], ['4 * 9', 36]], [['6 * 10 / 15', 4]]],
        practice: [[['8 * 3 / 4', 6]], [['5 * 21 / 15', 7]], [['2 * 14', 28], ['5 * 6', 30]]],
      },
      al: {
        title: 'Përpjesëtimi dhe vetitë e tij',
        objectives: ['Të dalloni nëse dy raporte formojnë përpjesëtim.', 'Të gjeni anëtarin e panjohur të një përpjesëtimi.'],
        theory: 'Përpjesëtimi është barazimi i dy raporteve: a : b = c : d. Anëtarët a dhe d quhen anëtarë të skajshëm, b dhe c anëtarë të mesëm.\n\nVetia themelore: në çdo përpjesëtim prodhimi i anëtarëve të skajshëm është i barabartë me prodhimin e anëtarëve të mesëm: a · d = b · c. Kështu kontrollojmë nëse dy raporte janë të barabarta: 3 : 4 = 9 : 12, sepse 3 · 12 = 36 = 4 · 9.\n\nKur një anëtar është i panjohur, e gjejmë me këtë veti: x : 6 = 10 : 15 → 15 · x = 6 · 10 = 60 → x = 4.',
        keyPoints: ['a : b = c : d  ⟺  a · d = b · c', 'Anëtari i panjohur: prodhimi i dy të njohurve ÷ i treti.', 'Kontroll: zëvendësoni dhe krahasoni prodhimet.'],
        examples: [
          { example: 'A formojnë përpjesëtim 3 : 4 dhe 9 : 12?', solution: '3 · 12 = 36 dhe 4 · 9 = 36; prodhimet janë të barabarta, pra po.' },
          { example: 'Zgjidhni x : 6 = 10 : 15.', solution: '15 · x = 6 · 10 = 60, pra x = 60 : 15 = 4.' },
        ],
        commonMistakes: [
          { mistake: 'x : 6 = 10 : 15 → x = 6 · 15 : 10 = 9', fix: 'Shumëzohen anëtarët e kundërt: x · 15 = 6 · 10, pra x = 4.' },
        ],
        practice: [
          { problem: 'Zgjidhni x : 8 = 3 : 4.', solution: 'x = 6', steps: ['4x = 8 · 3 = 24.', 'x = 24 : 4 = 6.'] },
          { problem: 'Zgjidhni 5 : x = 15 : 21.', solution: 'x = 7', steps: ['15x = 5 · 21 = 105.', 'x = 105 : 15 = 7.'] },
          { problem: 'A formojnë përpjesëtim 2 : 5 dhe 6 : 14?', solution: 'Jo', steps: ['2 · 14 = 28 dhe 5 · 6 = 30.', '28 ≠ 30, pra jo.'] },
        ],
      },
      en: {
        title: 'Proportion and its property',
        objectives: ['Tell whether two ratios form a proportion.', 'Find the unknown term of a proportion.'],
        theory: 'A proportion is an equation of two ratios: a : b = c : d. The terms a and d are the outer terms (extremes), b and c the inner terms (means).\n\nThe key property: in every proportion the product of the outer terms equals the product of the inner terms: a · d = b · c (cross-multiplying). This is how we check whether two ratios are equal: 3 : 4 = 9 : 12, because 3 · 12 = 36 = 4 · 9.\n\nWhen one term is unknown, we find it with this property: x : 6 = 10 : 15 → 15 · x = 6 · 10 = 60 → x = 4.',
        keyPoints: ['a : b = c : d  ⟺  a · d = b · c', 'Unknown term: product of two known terms ÷ the third.', 'Check: substitute and compare the products.'],
        examples: [
          { example: 'Do 3 : 4 and 9 : 12 form a proportion?', solution: '3 · 12 = 36 and 4 · 9 = 36; the products are equal, so yes.' },
          { example: 'Solve x : 6 = 10 : 15.', solution: '15 · x = 6 · 10 = 60, so x = 60 ÷ 15 = 4.' },
        ],
        commonMistakes: [
          { mistake: 'x : 6 = 10 : 15 → x = 6 · 15 ÷ 10 = 9', fix: 'Multiply the opposite terms: x · 15 = 6 · 10, so x = 4.' },
        ],
        practice: [
          { problem: 'Solve x : 8 = 3 : 4.', solution: 'x = 6', steps: ['4x = 8 · 3 = 24.', 'x = 24 ÷ 4 = 6.'] },
          { problem: 'Solve 5 : x = 15 : 21.', solution: 'x = 7', steps: ['15x = 5 · 21 = 105.', 'x = 105 ÷ 15 = 7.'] },
          { problem: 'Do 2 : 5 and 6 : 14 form a proportion?', solution: 'No', steps: ['2 · 14 = 28 and 5 · 6 = 30.', '28 ≠ 30, so no.'] },
        ],
      },
      de: {
        title: 'Verhältnisgleichungen',
        objectives: ['Erkennen, ob zwei Verhältnisse eine Verhältnisgleichung bilden.', 'Das unbekannte Glied einer Verhältnisgleichung bestimmen.'],
        theory: 'Eine Verhältnisgleichung (Proportion) setzt zwei Verhältnisse gleich: a : b = c : d. a und d heißen Außenglieder, b und c Innenglieder.\n\nDie Grundeigenschaft: In jeder Verhältnisgleichung ist das Produkt der Außenglieder gleich dem Produkt der Innenglieder: a · d = b · c. So prüft man, ob zwei Verhältnisse gleich sind: 3 : 4 = 9 : 12, denn 3 · 12 = 36 = 4 · 9.\n\nIst ein Glied unbekannt, bestimmt man es mit dieser Eigenschaft: x : 6 = 10 : 15 → 15 · x = 6 · 10 = 60 → x = 4.',
        keyPoints: ['a : b = c : d  ⟺  a · d = b · c', 'Unbekanntes Glied: Produkt zweier bekannter Glieder ÷ das dritte.', 'Probe: einsetzen und die Produkte vergleichen.'],
        examples: [
          { example: 'Bilden 3 : 4 und 9 : 12 eine Verhältnisgleichung?', solution: '3 · 12 = 36 und 4 · 9 = 36; die Produkte sind gleich, also ja.' },
          { example: 'Lösen Sie x : 6 = 10 : 15.', solution: '15 · x = 6 · 10 = 60, also x = 60 : 15 = 4.' },
        ],
        commonMistakes: [
          { mistake: 'x : 6 = 10 : 15 → x = 6 · 15 : 10 = 9', fix: 'Die gegenüberliegenden Glieder multiplizieren: x · 15 = 6 · 10, also x = 4.' },
        ],
        practice: [
          { problem: 'Lösen Sie x : 8 = 3 : 4.', solution: 'x = 6', steps: ['4x = 8 · 3 = 24.', 'x = 24 : 4 = 6.'] },
          { problem: 'Lösen Sie 5 : x = 15 : 21.', solution: 'x = 7', steps: ['15x = 5 · 21 = 105.', 'x = 105 : 15 = 7.'] },
          { problem: 'Bilden 2 : 5 und 6 : 14 eine Verhältnisgleichung?', solution: 'Nein', steps: ['2 · 14 = 28 und 5 · 6 = 30.', '28 ≠ 30, also nein.'] },
        ],
      },
    },

    // ───────── 3. Rule of three
    {
      slug: 'g7-ratios-proportions-rule-of-three',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Fletore', 'Notebooks', 'Hefte'), cells: ['5', '1', '8'] },
          { head: alt('Çmimi (€)', 'Price (€)', 'Preis (€)'), cells: [{ n: 7.5, decimals: 2 }, { n: 1.5, decimals: 2 }, { n: 12, decimals: 2 }] },
        ],
        highlight: [[1, 2]],
        caption: alt('Rregulla e treshit: 5 → 1 (÷ 5), pastaj 1 → 8 (· 8).', 'Unitary method: 5 → 1 (÷ 5), then 1 → 8 (· 8).', 'Dreisatz: 5 → 1 (: 5), dann 1 → 8 (· 8).'),
        alt: alt('Tabela: 5 fletore 7,50 €, 1 fletore 1,50 €, 8 fletore 12,00 €.', 'Table: 5 notebooks €7.50, 1 notebook €1.50, 8 notebooks €12.00.', 'Tabelle: 5 Hefte 7,50 €, 1 Heft 1,50 €, 8 Hefte 12,00 €.'),
      }],
      answers: {
        examples: [[['7.5 / 5 * 8', 12]], [['4.2 / 3 * 5', 7]]],
        practice: [[['18 / 4 * 6', 27]], [['18 / 240 * 100', 7.5]], [['4.8 / 6 * 10', 8]]],
      },
      al: {
        title: 'Rregulla e treshit',
        objectives: ['Të zgjidhni problema me rregullën e treshit duke kaluar te njësia.', 'Të kontrolloni nëse përgjigjja ka kuptim.'],
        theory: 'Rregulla e treshit përdoret kur dimë tri vlera dhe kërkojmë të katërtën, dhe dy madhësitë rriten njëherësh (p.sh. sasia dhe çmimi).\n\nMetoda më e sigurt është kalimi te njësia: së pari gjejmë sa vlen 1 copë, pastaj sa vlejnë aq copë sa kërkohen. 5 fletore kushtojnë 7,50 € → 1 fletore 7,50 : 5 = 1,50 € → 8 fletore 8 · 1,50 = 12 €.\n\nE njëjta llogari mund të shkruhet si përpjesëtim: 5 : 8 = 7,50 : x. Kontroll: më shumë fletore duhet të kushtojnë më shumë.',
        keyPoints: ['Hapi 1: gjeni vlerën për 1 njësi (pjesëtim).', 'Hapi 2: shumëzoni me sasinë e kërkuar.', 'Kontrolloni: rritet apo zvogëlohet përgjigjja?'],
        examples: [
          { example: '5 fletore kushtojnë 7,50 €. Sa kushtojnë 8 fletore?', solution: '1 fletore: 7,50 : 5 = 1,50 €. 8 fletore: 8 · 1,50 = 12 €.' },
          { example: '3 kg mollë kushtojnë 4,20 €. Sa kushtojnë 5 kg?', solution: '1 kg: 4,20 : 3 = 1,40 €. 5 kg: 5 · 1,40 = 7 €.' },
        ],
        commonMistakes: [
          { mistake: '5 fletore 7,50 €, 8 fletore = 7,50 + 3 = 10,50 €', fix: 'Çmimi nuk rritet me sa rritet numri i fletoreve; kaloni te çmimi i 1 fletoreje.' },
        ],
        practice: [
          { problem: '4 m pëlhurë kushtojnë 18 €. Sa kushtojnë 6 m?', solution: '27 €', steps: ['1 m: 18 : 4 = 4,50 €.', '6 m: 6 · 4,50 = 27 €.'] },
          { problem: 'Një veturë harxhon 18 l karburant për 240 km. Sa harxhon për 100 km?', solution: '7,5 l', steps: ['1 km: 18 : 240 = 0,075 l.', '100 km: 100 · 0,075 = 7,5 l.'] },
          { problem: '6 lapsa kushtojnë 4,80 €. Sa kushtojnë 10 lapsa?', solution: '8 €', steps: ['1 laps: 4,80 : 6 = 0,80 €.', '10 lapsa: 10 · 0,80 = 8 €.'] },
        ],
      },
      en: {
        title: 'The unitary method (rule of three)',
        objectives: ['Solve problems with the unitary method by going through one unit.', 'Check that the answer makes sense.'],
        theory: 'The rule of three is used when we know three values and want the fourth, and the two quantities grow together (e.g. amount and price).\n\nThe safest way is the unitary method: first find what 1 item is worth, then what the required number of items is worth. 5 notebooks cost €7.50 → 1 notebook 7.50 ÷ 5 = €1.50 → 8 notebooks 8 · 1.50 = €12.\n\nThe same calculation can be written as a proportion: 5 : 8 = 7.50 : x. Check: more notebooks must cost more.',
        keyPoints: ['Step 1: find the value for 1 unit (divide).', 'Step 2: multiply by the required amount.', 'Check: should the answer get bigger or smaller?'],
        examples: [
          { example: '5 notebooks cost €7.50. How much do 8 notebooks cost?', solution: '1 notebook: 7.50 ÷ 5 = €1.50. 8 notebooks: 8 · 1.50 = €12.' },
          { example: '3 kg of apples cost €4.20. How much do 5 kg cost?', solution: '1 kg: 4.20 ÷ 3 = €1.40. 5 kg: 5 · 1.40 = €7.' },
        ],
        commonMistakes: [
          { mistake: '5 notebooks €7.50, so 8 notebooks = 7.50 + 3 = €10.50', fix: 'The price does not grow by the same number as the notebooks; go through the price of 1 notebook.' },
        ],
        practice: [
          { problem: '4 m of fabric cost €18. How much do 6 m cost?', solution: '€27', steps: ['1 m: 18 ÷ 4 = €4.50.', '6 m: 6 · 4.50 = €27.'] },
          { problem: 'A car uses 18 l of fuel for 240 km. How much does it use for 100 km?', solution: '7.5 l', steps: ['1 km: 18 ÷ 240 = 0.075 l.', '100 km: 100 · 0.075 = 7.5 l.'] },
          { problem: '6 pencils cost €4.80. How much do 10 pencils cost?', solution: '€8', steps: ['1 pencil: 4.80 ÷ 6 = €0.80.', '10 pencils: 10 · 0.80 = €8.'] },
        ],
      },
      de: {
        title: 'Der Dreisatz',
        objectives: ['Aufgaben mit dem Dreisatz über eine Einheit lösen.', 'Prüfen, ob das Ergebnis sinnvoll ist.'],
        theory: 'Der Dreisatz hilft, wenn drei Werte bekannt sind und der vierte gesucht ist und beide Größen gemeinsam wachsen (z. B. Menge und Preis).\n\nAm sichersten rechnet man über die Einheit: zuerst den Wert für 1 Stück, dann für die gesuchte Anzahl. 5 Hefte kosten 7,50 € → 1 Heft 7,50 : 5 = 1,50 € → 8 Hefte 8 · 1,50 = 12 €.\n\nDieselbe Rechnung lässt sich als Verhältnisgleichung schreiben: 5 : 8 = 7,50 : x. Probe: Mehr Hefte müssen mehr kosten.',
        keyPoints: ['Schritt 1: Wert für 1 Einheit bestimmen (teilen).', 'Schritt 2: mit der gesuchten Menge multiplizieren.', 'Probe: Muss das Ergebnis größer oder kleiner werden?'],
        examples: [
          { example: '5 Hefte kosten 7,50 €. Wie viel kosten 8 Hefte?', solution: '1 Heft: 7,50 : 5 = 1,50 €. 8 Hefte: 8 · 1,50 = 12 €.' },
          { example: '3 kg Äpfel kosten 4,20 €. Wie viel kosten 5 kg?', solution: '1 kg: 4,20 : 3 = 1,40 €. 5 kg: 5 · 1,40 = 7 €.' },
        ],
        commonMistakes: [
          { mistake: '5 Hefte 7,50 €, also 8 Hefte = 7,50 + 3 = 10,50 €', fix: 'Der Preis wächst nicht um dieselbe Zahl wie die Anzahl; über den Preis für 1 Heft rechnen.' },
        ],
        practice: [
          { problem: '4 m Stoff kosten 18 €. Wie viel kosten 6 m?', solution: '27 €', steps: ['1 m: 18 : 4 = 4,50 €.', '6 m: 6 · 4,50 = 27 €.'] },
          { problem: 'Ein Auto verbraucht 18 l Kraftstoff auf 240 km. Wie viel auf 100 km?', solution: '7,5 l', steps: ['1 km: 18 : 240 = 0,075 l.', '100 km: 100 · 0,075 = 7,5 l.'] },
          { problem: '6 Stifte kosten 4,80 €. Wie viel kosten 10 Stifte?', solution: '8 €', steps: ['1 Stift: 4,80 : 6 = 0,80 €.', '10 Stifte: 10 · 0,80 = 8 €.'] },
        ],
      },
    },

    // ───────── 4. Direct and inverse proportion
    {
      slug: 'g7-ratios-proportions-direct-inverse',
      visuals: [
        {
          type: 'valueTable',
          rows: [
            { head: alt('Koha (h)', 'Time (h)', 'Zeit (h)'), cells: ['1', '2', '3', '5'] },
            { head: alt('Rruga (km)', 'Distance (km)', 'Strecke (km)'), cells: ['75', '150', '225', '375'] },
          ],
          caption: alt('Varësi e drejtë: herësi rruga : koha = 75 mbetet i njëjtë.', 'Direct proportion: the quotient distance ÷ time = 75 stays the same.', 'Proportional: Der Quotient Strecke : Zeit = 75 bleibt gleich.'),
          alt: alt('Tabela e varësisë së drejtë: 1 h 75 km, 2 h 150 km, 3 h 225 km, 5 h 375 km.', 'Direct proportion table: 1 h 75 km, 2 h 150 km, 3 h 225 km, 5 h 375 km.', 'Tabelle proportional: 1 h 75 km, 2 h 150 km, 3 h 225 km, 5 h 375 km.'),
        },
        {
          type: 'valueTable',
          rows: [
            { head: alt('Punëtorë', 'Workers', 'Arbeiter'), cells: ['1', '2', '3', '4', '6'] },
            { head: alt('Ditë', 'Days', 'Tage'), cells: ['24', '12', '8', '6', '4'] },
          ],
          caption: alt('Varësi e zhdrejtë: prodhimi punëtorë · ditë = 24 mbetet i njëjtë.', 'Inverse proportion: the product workers · days = 24 stays the same.', 'Antiproportional: Das Produkt Arbeiter · Tage = 24 bleibt gleich.'),
          alt: alt('Tabela e varësisë së zhdrejtë: 1 punëtor 24 ditë, 2 – 12, 3 – 8, 4 – 6, 6 – 4.', 'Inverse proportion table: 1 worker 24 days, 2 – 12, 3 – 8, 4 – 6, 6 – 4.', 'Tabelle antiproportional: 1 Arbeiter 24 Tage, 2 – 12, 3 – 8, 4 – 6, 6 – 4.'),
        },
      ],
      answers: {
        examples: [[['150 / 2 * 5', 375]], [['4 * 6 / 3', 8]]],
        practice: [[['6 * 10 / 4', 15]], [['20 / 8 * 12', 30]], [['60 * 3 / 90', 2]]],
      },
      al: {
        title: 'Varësia e drejtë dhe e zhdrejtë',
        objectives: ['Të dalloni varësinë e drejtë nga ajo e zhdrejtë.', 'Të zgjidhni problema me secilën prej tyre.'],
        theory: 'Dy madhësi janë në varësi të drejtë kur, nëse njëra rritet disa herë, edhe tjetra rritet po aq herë. Herësi i tyre mbetet konstant. Shembull: me shpejtësi të njëjtë, në 2 h kalohen 150 km, në 5 h 375 km (150 : 2 = 375 : 5 = 75).\n\nDy madhësi janë në varësi të zhdrejtë kur, nëse njëra rritet disa herë, tjetra zvogëlohet po aq herë. Prodhimi i tyre mbetet konstant. Shembull: 4 punëtorë e kryejnë punën për 6 ditë; 3 punëtorë për 4 · 6 : 3 = 8 ditë.\n\nPara se të llogaritni, pyetni: "Nëse njëra rritet, a rritet apo zvogëlohet tjetra?"',
        keyPoints: ['E drejtë: y : x = konstante (sasia–çmimi, koha–rruga).', 'E zhdrejtë: x · y = konstante (punëtorë–ditë, shpejtësia–koha).', 'Pyetja kontrolluese: rritet apo zvogëlohet?'],
        examples: [
          { example: 'Një tren kalon 150 km për 2 h. Sa km kalon për 5 h me të njëjtën shpejtësi?', solution: 'Varësi e drejtë: 150 : 2 = 75 km në orë; 5 · 75 = 375 km.' },
          { example: '4 punëtorë e kryejnë një punë për 6 ditë. Për sa ditë e kryejnë 3 punëtorë?', solution: 'Varësi e zhdrejtë: 4 · 6 = 24 ditë-punëtor; 24 : 3 = 8 ditë.' },
        ],
        commonMistakes: [
          { mistake: '4 punëtorë 6 ditë → 3 punëtorë 6 · 3 : 4 = 4,5 ditë', fix: 'Më pak punëtorë kanë nevojë për më shumë ditë: varësi e zhdrejtë, 4 · 6 : 3 = 8.' },
          { mistake: 'Çdo dy madhësi që rriten bashkë janë në varësi të drejtë.', fix: 'Duhet që herësi të mbetet konstant; mosha dhe gjatësia rriten bashkë, por jo në përpjesëtim.' },
        ],
        practice: [
          { problem: '6 rubineta e mbushin pishinën për 10 orë. Për sa orë e mbushin 4 rubineta?', solution: '15 orë', steps: ['E zhdrejtë: 6 · 10 = 60.', '60 : 4 = 15 orë.'] },
          { problem: '8 kg patate kushtojnë 20 €. Sa kushtojnë 12 kg?', solution: '30 €', steps: ['E drejtë: 20 : 8 = 2,50 € për kg.', '12 · 2,50 = 30 €.'] },
          { problem: 'Me 60 km/h një rrugë kalohet për 3 h. Sa zgjat me 90 km/h?', solution: '2 h', steps: ['E zhdrejtë: rruga = 60 · 3 = 180 km.', '180 : 90 = 2 h.'] },
        ],
      },
      en: {
        title: 'Direct and inverse proportion',
        objectives: ['Tell direct proportion from inverse proportion.', 'Solve problems with each of them.'],
        theory: 'Two quantities are in direct proportion when, if one is multiplied by a number, the other is multiplied by the same number. Their quotient stays constant. Example: at the same speed, 150 km are covered in 2 h and 375 km in 5 h (150 ÷ 2 = 375 ÷ 5 = 75).\n\nTwo quantities are in inverse proportion when, if one is multiplied by a number, the other is divided by the same number. Their product stays constant. Example: 4 workers finish a job in 6 days; 3 workers need 4 · 6 ÷ 3 = 8 days.\n\nBefore calculating, ask: "If one grows, does the other grow or shrink?"',
        keyPoints: ['Direct: y ÷ x = constant (amount–price, time–distance).', 'Inverse: x · y = constant (workers–days, speed–time).', 'The check question: bigger or smaller?'],
        examples: [
          { example: 'A train covers 150 km in 2 h. How far does it go in 5 h at the same speed?', solution: 'Direct proportion: 150 ÷ 2 = 75 km per hour; 5 · 75 = 375 km.' },
          { example: '4 workers finish a job in 6 days. How many days do 3 workers need?', solution: 'Inverse proportion: 4 · 6 = 24 worker-days; 24 ÷ 3 = 8 days.' },
        ],
        commonMistakes: [
          { mistake: '4 workers 6 days → 3 workers 6 · 3 ÷ 4 = 4.5 days', fix: 'Fewer workers need more days: inverse proportion, 4 · 6 ÷ 3 = 8.' },
          { mistake: 'Any two quantities that grow together are in direct proportion.', fix: 'The quotient must stay constant; age and height grow together, but not in proportion.' },
        ],
        practice: [
          { problem: '6 taps fill a pool in 10 hours. How many hours do 4 taps need?', solution: '15 hours', steps: ['Inverse: 6 · 10 = 60.', '60 ÷ 4 = 15 hours.'] },
          { problem: '8 kg of potatoes cost €20. How much do 12 kg cost?', solution: '€30', steps: ['Direct: 20 ÷ 8 = €2.50 per kg.', '12 · 2.50 = €30.'] },
          { problem: 'At 60 km/h a trip takes 3 h. How long does it take at 90 km/h?', solution: '2 h', steps: ['Inverse: distance = 60 · 3 = 180 km.', '180 ÷ 90 = 2 h.'] },
        ],
      },
      de: {
        title: 'Proportionale und antiproportionale Zuordnungen',
        objectives: ['Proportionale von antiproportionalen Zuordnungen unterscheiden.', 'Aufgaben mit beiden Arten lösen.'],
        theory: 'Eine Zuordnung ist proportional, wenn zum Vielfachen der einen Größe dasselbe Vielfache der anderen gehört. Der Quotient bleibt konstant. Beispiel: Bei gleicher Geschwindigkeit fährt man in 2 h 150 km und in 5 h 375 km (150 : 2 = 375 : 5 = 75).\n\nEine Zuordnung ist antiproportional, wenn zum Vielfachen der einen Größe der entsprechende Teil der anderen gehört. Das Produkt bleibt konstant. Beispiel: 4 Arbeiter brauchen 6 Tage; 3 Arbeiter brauchen 4 · 6 : 3 = 8 Tage.\n\nVor dem Rechnen fragen: „Wenn die eine Größe wächst, wächst oder schrumpft die andere?“',
        keyPoints: ['Proportional: y : x = konstant (Menge–Preis, Zeit–Strecke).', 'Antiproportional: x · y = konstant (Arbeiter–Tage, Geschwindigkeit–Zeit).', 'Prüffrage: größer oder kleiner?'],
        examples: [
          { example: 'Ein Zug fährt in 2 h 150 km. Wie weit fährt er in 5 h bei gleicher Geschwindigkeit?', solution: 'Proportional: 150 : 2 = 75 km pro Stunde; 5 · 75 = 375 km.' },
          { example: '4 Arbeiter erledigen eine Arbeit in 6 Tagen. Wie viele Tage brauchen 3 Arbeiter?', solution: 'Antiproportional: 4 · 6 = 24 Arbeitstage; 24 : 3 = 8 Tage.' },
        ],
        commonMistakes: [
          { mistake: '4 Arbeiter 6 Tage → 3 Arbeiter 6 · 3 : 4 = 4,5 Tage', fix: 'Weniger Arbeiter brauchen mehr Tage: antiproportional, 4 · 6 : 3 = 8.' },
          { mistake: 'Zwei Größen, die gemeinsam wachsen, sind immer proportional.', fix: 'Der Quotient muss konstant sein; Alter und Körpergröße wachsen gemeinsam, aber nicht proportional.' },
        ],
        practice: [
          { problem: '6 Wasserhähne füllen ein Becken in 10 Stunden. Wie lange brauchen 4 Hähne?', solution: '15 Stunden', steps: ['Antiproportional: 6 · 10 = 60.', '60 : 4 = 15 Stunden.'] },
          { problem: '8 kg Kartoffeln kosten 20 €. Wie viel kosten 12 kg?', solution: '30 €', steps: ['Proportional: 20 : 8 = 2,50 € pro kg.', '12 · 2,50 = 30 €.'] },
          { problem: 'Mit 60 km/h dauert eine Fahrt 3 h. Wie lange dauert sie mit 90 km/h?', solution: '2 h', steps: ['Antiproportional: Strecke = 60 · 3 = 180 km.', '180 : 90 = 2 h.'] },
        ],
      },
    },

    // ───────── 5. Scale
    {
      slug: 'g7-ratios-proportions-scale',
      visuals: [{
        type: 'numberLine', min: 0, max: 6, step: 1,
        points: [{ x: 2, label: '1 km', below: true }, { x: 4, label: '2 km', below: true }, { x: 6, label: '3 km', below: true, color: 'secondary' }],
        intervals: [{ from: 0, to: 6 }],
        caption: alt('Shkalla 1 : 50 000: 1 cm në hartë = 50 000 cm = 500 m në terren, pra 6 cm = 3 km.', 'Scale 1 : 50 000: 1 cm on the map = 50 000 cm = 500 m in reality, so 6 cm = 3 km.', 'Maßstab 1 : 50 000: 1 cm auf der Karte = 50 000 cm = 500 m in der Wirklichkeit, also 6 cm = 3 km.'),
        alt: alt('Vijë shkalle nga 0 deri 6 cm në hartë; nën 2, 4 dhe 6 cm shkruhet 1, 2 dhe 3 km.', 'A scale bar from 0 to 6 cm; under 2, 4 and 6 cm it reads 1, 2 and 3 km.', 'Eine Maßstabsleiste von 0 bis 6 cm; unter 2, 4 und 6 cm steht 1, 2 und 3 km.'),
      }],
      answers: {
        examples: [[['6 * 50000 / 100000', 3]], [['12 * 100000 / 200000', 6]]],
        practice: [[['8 * 25000 / 100000', 2]], [['7 * 100 / 100', 7]], [['4.5 * 100000 / 50000', 9]]],
      },
      al: {
        title: 'Shkalla',
        objectives: ['Të kuptoni shkallën e një harte ose plani.', 'Të llogaritni largësi të vërteta dhe largësi në hartë.'],
        theory: 'Shkalla e hartës është raporti i largësisë në hartë me largësinë e vërtetë, në të njëjtën njësi. Shkalla 1 : 50 000 do të thotë se 1 cm në hartë është 50 000 cm = 500 m në terren.\n\nLargësia e vërtetë = largësia në hartë · emëruesi i shkallës. 6 cm në hartën 1 : 50 000 → 6 · 50 000 = 300 000 cm = 3 km.\n\nLargësia në hartë = largësia e vërtetë : emëruesi i shkallës. Kujdes me njësitë: 1 km = 1 000 m = 100 000 cm.',
        keyPoints: ['1 : n → 1 cm në hartë = n cm në terren.', 'E vërtetë = hartë · n;  hartë = e vërtetë : n', '1 km = 100 000 cm'],
        examples: [
          { example: 'Në hartën 1 : 50 000 dy fshatra janë 6 cm larg. Sa është largësia e vërtetë?', solution: '6 · 50 000 = 300 000 cm = 3 km.' },
          { example: 'Dy qytete janë 12 km larg. Sa cm larg janë në hartën 1 : 200 000?', solution: '12 km = 1 200 000 cm; 1 200 000 : 200 000 = 6 cm.' },
        ],
        commonMistakes: [
          { mistake: '6 cm · 50 000 = 300 000 km', fix: 'Rezultati është në cm: 300 000 cm = 3 km.' },
        ],
        practice: [
          { problem: 'Në hartën 1 : 25 000 një rrugë është 8 cm. Sa km është në të vërtetë?', solution: '2 km', steps: ['8 · 25 000 = 200 000 cm.', '200 000 cm = 2 km.'] },
          { problem: 'Në planin e shtëpisë 1 : 100 një dhomë është 7 cm e gjatë. Sa m është në të vërtetë?', solution: '7 m', steps: ['7 · 100 = 700 cm.', '700 cm = 7 m.'] },
          { problem: 'Largësia e vërtetë është 4,5 km. Sa cm është në hartën 1 : 50 000?', solution: '9 cm', steps: ['4,5 km = 450 000 cm.', '450 000 : 50 000 = 9 cm.'] },
        ],
      },
      en: {
        title: 'Scale',
        objectives: ['Understand the scale of a map or plan.', 'Work out real distances and map distances.'],
        theory: 'The scale of a map is the ratio of a distance on the map to the real distance, in the same unit. The scale 1 : 50 000 means that 1 cm on the map is 50 000 cm = 500 m in reality.\n\nReal distance = map distance · scale number. 6 cm on a 1 : 50 000 map → 6 · 50 000 = 300 000 cm = 3 km.\n\nMap distance = real distance ÷ scale number. Watch the units: 1 km = 1 000 m = 100 000 cm.',
        keyPoints: ['1 : n → 1 cm on the map = n cm in reality.', 'Real = map · n;  map = real ÷ n', '1 km = 100 000 cm'],
        examples: [
          { example: 'On a 1 : 50 000 map two villages are 6 cm apart. What is the real distance?', solution: '6 · 50 000 = 300 000 cm = 3 km.' },
          { example: 'Two towns are 12 km apart. How many cm apart are they on a 1 : 200 000 map?', solution: '12 km = 1 200 000 cm; 1 200 000 ÷ 200 000 = 6 cm.' },
        ],
        commonMistakes: [
          { mistake: '6 cm · 50 000 = 300 000 km', fix: 'The result is in cm: 300 000 cm = 3 km.' },
        ],
        practice: [
          { problem: 'On a 1 : 25 000 map a road is 8 cm long. How many km is it really?', solution: '2 km', steps: ['8 · 25 000 = 200 000 cm.', '200 000 cm = 2 km.'] },
          { problem: 'On a 1 : 100 house plan a room is 7 cm long. How many m is it really?', solution: '7 m', steps: ['7 · 100 = 700 cm.', '700 cm = 7 m.'] },
          { problem: 'The real distance is 4.5 km. How many cm is it on a 1 : 50 000 map?', solution: '9 cm', steps: ['4.5 km = 450 000 cm.', '450 000 ÷ 50 000 = 9 cm.'] },
        ],
      },
      de: {
        title: 'Der Maßstab',
        objectives: ['Den Maßstab einer Karte oder eines Plans verstehen.', 'Wirkliche Entfernungen und Kartenentfernungen berechnen.'],
        theory: 'Der Maßstab einer Karte ist das Verhältnis der Strecke auf der Karte zur wirklichen Strecke, in derselben Einheit. Der Maßstab 1 : 50 000 bedeutet: 1 cm auf der Karte sind 50 000 cm = 500 m in der Wirklichkeit.\n\nWirkliche Strecke = Kartenstrecke · Maßstabszahl. 6 cm auf einer Karte 1 : 50 000 → 6 · 50 000 = 300 000 cm = 3 km.\n\nKartenstrecke = wirkliche Strecke : Maßstabszahl. Auf die Einheiten achten: 1 km = 1 000 m = 100 000 cm.',
        keyPoints: ['1 : n → 1 cm auf der Karte = n cm in Wirklichkeit.', 'Wirklich = Karte · n;  Karte = wirklich : n', '1 km = 100 000 cm'],
        examples: [
          { example: 'Auf einer Karte 1 : 50 000 liegen zwei Dörfer 6 cm auseinander. Wie groß ist die wirkliche Entfernung?', solution: '6 · 50 000 = 300 000 cm = 3 km.' },
          { example: 'Zwei Städte sind 12 km voneinander entfernt. Wie viele cm sind es auf einer Karte 1 : 200 000?', solution: '12 km = 1 200 000 cm; 1 200 000 : 200 000 = 6 cm.' },
        ],
        commonMistakes: [
          { mistake: '6 cm · 50 000 = 300 000 km', fix: 'Das Ergebnis ist in cm: 300 000 cm = 3 km.' },
        ],
        practice: [
          { problem: 'Auf einer Karte 1 : 25 000 ist eine Straße 8 cm lang. Wie viele km sind das wirklich?', solution: '2 km', steps: ['8 · 25 000 = 200 000 cm.', '200 000 cm = 2 km.'] },
          { problem: 'Auf einem Hausplan 1 : 100 ist ein Zimmer 7 cm lang. Wie viele m sind das wirklich?', solution: '7 m', steps: ['7 · 100 = 700 cm.', '700 cm = 7 m.'] },
          { problem: 'Die wirkliche Entfernung beträgt 4,5 km. Wie viele cm sind das auf einer Karte 1 : 50 000?', solution: '9 cm', steps: ['4,5 km = 450 000 cm.', '450 000 : 50 000 = 9 cm.'] },
        ],
      },
    },
  ],
};
