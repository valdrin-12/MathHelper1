export const courseContents_base_al = {

  // ===== ARITMETIKË: Numrat dhe Operacionet Bazë =====
  'arith-001': {
    lessons: [
      {
        title: 'Numrat Natyrorë',
        theory: 'Numrat natyrorë janë numrat që përdorim për të numëruar: 1, 2, 3, 4, 5... dhe kështu me radhë deri në pafundësi. Ata janë "natyrorë" sepse shfaqen natyrshëm kur numërojmë gjërat rreth nesh.\n\nNumri zero (0) është i veçantë - disa matematikanë e përfshijnë në numrat natyrorë, disa jo. Numrat natyrorë nuk kanë fund - gjithmonë mund të shtojmë 1 për të marrë numrin tjetër.\n\nNumrat natyrorë janë baza e të gjithë matematikës. Mbi to ndërtojmë numrat e plotë, thyesat, numrat dhjetorë dhe shumë koncepte të tjera.',
        keyPoints: [
          'Numrat natyrorë fillojnë nga 1 dhe shkojnë deri në pafundësi',
          'Çdo numër natyror ka pasardhës (numrin vijues) dhe paraardhës (numrin e mëparshëm)',
          'Numrat natyrorë janë të plotë, pa pjesë thyesore',
          'Përdoren për numërim, renditje dhe matje',
        ],
        examples: [
          {
            example: 'Identifiko numrat natyrorë nga lista: -3; 0; 5; 1,5; 12; -1; 7',
            solution: 'Numrat natyrorë janë: 5, 12, 7\nNumrat negativë (-3, -1) dhe zero (0) nuk janë natyrorë. 1,5 nuk është i plotë.',
          },
          {
            example: 'Cili është paraardhësi dhe pasardhësi i numrit 8?',
            solution: 'Paraardhësi i 8 është 7 (8 - 1 = 7)\nPasardhësi i 8 është 9 (8 + 1 = 9)',
          },
        ],
        practice: [
          {
            problem: 'Rendit numrat natyrorë nga 15 deri 20 dhe gjej shumën e tyre.',
            solution: 'Shuma = 15 + 16 + 17 + 18 + 19 + 20 = 105',
            steps: [
              'Shkruaj numrat: 15, 16, 17, 18, 19, 20',
              'Mblidhi: 15 + 16 = 31',
              '31 + 17 = 48',
              '48 + 18 = 66',
              '66 + 19 = 85',
              '85 + 20 = 105',
            ],
          },
        ],
      },
      {
        title: 'Mbledhja dhe Zbritja',
        theory: 'Mbledhja është operacioni i bashkimit të dy ose më shumë sasive për të gjetur totalin. Simboli i mbledhjes është "+" (plus). Kur mbledhim dy numra, rezultatin e quajmë shumë.\n\nZbritja është operacioni i heqjes së një sasie nga një tjetër. Simboli i zbritjes është "-" (minus). Rezultatin e zbritjes e quajmë diferencë. Zbritja është operacioni i kundërt i mbledhjes.\n\nTë dyja operacionet janë thelbësore në jetën e përditshme - nga blerjet te matjet, nga llogaritjet financiare te zgjidhja e problemeve praktike.',
        keyPoints: [
          'Mbledhja është komutative: a + b = b + a',
          'Mbledhja është asociative: (a + b) + c = a + (b + c)',
          'Zbritja nuk është komutative: a - b ≠ b - a (në përgjithësi)',
          'Elementi neutral i mbledhjes është 0: a + 0 = a',
        ],
        examples: [
          {
            example: 'Llogarit: 347 + 256',
            solution: '347 + 256 = 603\nNë kolonë:\n  347\n+ 256\n-----\n  603\n(7+6=13, shkruaj 3 mbaj 1; 4+5+1=10, shkruaj 0 mbaj 1; 3+2+1=6)',
          },
          {
            example: 'Llogarit: 521 - 189',
            solution: '521 - 189 = 332\nNë kolonë:\n  521\n- 189\n-----\n  332\n(1 < 9: marrim hua një dhjetëshe: 11 - 9 = 2; te dhjetëshet mbeti 1 < 8: marrim hua një qindëshe: 11 - 8 = 3; te qindëshet mbeti 4: 4 - 1 = 3)',
          },
        ],
        practice: [
          {
            problem: 'Një dyqan kishte 845 produkte. Shiti 327 dhe mori furnizim me 196 produkte të reja. Sa produkte ka tani?',
            solution: 'Produktet tani = 845 - 327 + 196 = 714',
            steps: [
              'Fillim: 845 produkte',
              'Pas shitjes: 845 - 327 = 518',
              'Pas furnizimit: 518 + 196 = 714',
              'Përgjigja: 714 produkte',
            ],
          },
        ],
      },
      {
        title: 'Shumëzimi dhe Pjesëtimi',
        theory: 'Shumëzimi është mbledhja e përsëritur e të njëjtit numër. Simboli është "×" ose "·". Për shembull, 4 × 3 do të thotë "shto 4, tre herë": 4 + 4 + 4 = 12. Numrat që shumëzojmë quhen faktorë, rezultati quhet prodhim.\n\nPjesëtimi është shpërndarja e barabartë e një sasie në grupe. Simboli është "÷" ose "/". Pjesëtimi është operacioni i kundërt i shumëzimit. Numri që pjesëtohet quhet i pjesëtueshëm, numri me të cilin pjesëtojmë quhet pjesëtues, dhe rezultati quhet herës.\n\nKujdes: pjesëtimi me zero nuk është i përkufizuar, asgjë nuk mund të pjesëtohet me zero!',
        keyPoints: [
          'Shumëzimi është komutativ: a × b = b × a',
          'Çdo numër i shumëzuar me 0 jep 0: a × 0 = 0',
          'Çdo numër i shumëzuar me 1 jep vetveten: a × 1 = a',
          'Pjesëtimi me zero (÷ 0) është i papërcaktuar',
        ],
        examples: [
          {
            example: 'Llogarit: 24 × 13',
            solution: '24 × 13 = 312\nMënyrë: 24 × 13 = 24 × 10 + 24 × 3 = 240 + 72 = 312',
          },
          {
            example: 'Llogarit: 156 ÷ 12',
            solution: '156 ÷ 12 = 13\nVerifiko: 12 × 13 = 12 × 10 + 12 × 3 = 120 + 36 = 156 ✓',
          },
        ],
        practice: [
          {
            problem: 'Një klasë me 28 nxënës duhet të ndahet në grupe të barabarta. Sa grupe mund të formohen me 4 nxënës secili?',
            solution: '28 ÷ 4 = 7 grupe',
            steps: [
              'Numri total i nxënësve: 28',
              'Nxënës për grup: 4',
              '28 ÷ 4 = 7',
              'Përgjigja: 7 grupe me 4 nxënës secili',
            ],
          },
        ],
      },
      {
        title: 'Rendi i Veprimeve',
        theory: 'Kur kemi shumë operacione në të njëjtën shprehje, duhet të dimë cilën të kryejmë të parën. Rendi i veprimeve (në anglisht PEMDAS) na tregon si të vazhdojmë: kllapat, fuqitë, shumëzimi e pjesëtimi, dhe në fund mbledhja e zbritja.\n\nRregulli: 1) veprimet brenda kllapave, 2) pastaj fuqitë, 3) shumëzimi dhe pjesëtimi (nga e majta në të djathtë), 4) mbledhja dhe zbritja (nga e majta në të djathtë).\n\nPa këtë rend, njerëz të ndryshëm do të merrnin përgjigje të ndryshme për të njëjtin problem!',
        keyPoints: [
          'Së pari kllapat: veprimet brenda ( ), [ ], { }',
          'Pastaj fuqitë dhe rrënjët',
          'Pastaj shumëzimi dhe pjesëtimi, nga e majta në të djathtë',
          'Në fund mbledhja dhe zbritja, nga e majta në të djathtë',
        ],
        examples: [
          {
            example: 'Llogarit: 3 + 4 × 2',
            solution: 'Rezultati i saktë: 3 + 4 × 2 = 3 + 8 = 11\nShumëzimi bëhet para mbledhjes! Jo (3+4)×2 = 14.',
          },
          {
            example: 'Llogarit: (5 + 3) × 2 - 4 ÷ 2',
            solution: '= (8) × 2 - 4 ÷ 2    [kllapat]\n= 16 - 2              [shumëzimi dhe pjesëtimi]\n= 14                  [zbritja]',
          },
        ],
        practice: [
          {
            problem: 'Llogarit: 20 - 2 × (4 + 1) + 8 ÷ 2',
            solution: '= 20 - 2 × 5 + 4 = 20 - 10 + 4 = 14',
            steps: [
              'Kllapat: (4 + 1) = 5',
              'Shprehja bëhet: 20 - 2 × 5 + 8 ÷ 2',
              'Shumëzim/Pjesëtim: 2 × 5 = 10 dhe 8 ÷ 2 = 4',
              'Shprehja bëhet: 20 - 10 + 4',
              'Mbledhje/Zbritje nga e majta: 20 - 10 = 10, pastaj 10 + 4 = 14',
            ],
          },
        ],
      },
      {
        title: 'Vetitë e Numrave',
        theory: 'Numrat kanë veti të ndryshme që na ndihmojnë të llogarisim më shpejt dhe të kuptojmë strukturën e matematikës. Veti si komutativiteti, asociativiteti dhe distributiviteti janë rregulla themelore.\n\nNumrat çift janë të gjithë numrat që ndahen me 2 pa mbetje: 2, 4, 6, 8, 10...\nNumrat tek janë ata që nuk ndahen me 2 pa mbetje: 1, 3, 5, 7, 9...\nShumëfishat e N janë: N, 2N, 3N, 4N...\nNumrat e thjeshtë (primë) kanë saktësisht dy pjesëtues: 1 dhe vetveten.',
        keyPoints: [
          'Veti komutative: a + b = b + a dhe a × b = b × a',
          'Veti asociative: (a+b)+c = a+(b+c) dhe (a×b)×c = a×(b×c)',
          'Veti distributive: a×(b+c) = a×b + a×c',
          'Numrat e thjeshtë (primë): 2, 3, 5, 7, 11, 13, 17, 19, 23...',
        ],
        examples: [
          {
            example: 'Demonstro vetinë distributive: 5 × (3 + 7)',
            solution: 'Mënyra 1: 5 × (3 + 7) = 5 × 10 = 50\nMënyra 2: 5 × 3 + 5 × 7 = 15 + 35 = 50\nTë dyja japin të njëjtin rezultat ✓',
          },
          {
            example: 'Kontrollo nëse 97 është numër i thjeshtë (prim).',
            solution: '97 ÷ 2 = 48,5 (jo i plotë)\n97 ÷ 3 = 32,3... (jo i plotë)\n97 ÷ 5 = 19,4 (jo i plotë)\n97 ÷ 7 = 13,8... (jo i plotë)\nMeqë √97 ≈ 9,8, i kemi provuar të gjithë pjesëtuesit e mundshëm (2, 3, 5, 7).\nPo, 97 është numër i thjeshtë!',
          },
        ],
        practice: [
          {
            problem: 'Përdor vetinë distributive për të llogaritur shpejt 7 × 38.',
            solution: '7 × 38 = 7 × (40 - 2) = 280 - 14 = 266',
            steps: [
              '38 = 40 - 2 (e ndajmë 38 në numra të lehtë)',
              'Apliko distributivitetin: 7 × (40 - 2)',
              '= 7 × 40 - 7 × 2',
              '= 280 - 14',
              '= 266',
            ],
          },
        ],
      },
    ],
  },

  // ===== ARITMETIKË: Thyesat dhe Numrat Dhjetorë =====
  'arith-002': {
    lessons: [
      {
        title: 'Koncepti i Thyesave',
        theory: 'Thyesa është një mënyrë për të shprehur një pjesë të së tërës. Për shembull, nëse kemi një tortë të prerë në 4 pjesë të barabarta dhe marrim 1 pjesë, kemi marrë 1/4 të tortës.\n\nThyesa ka dy pjesë: numëruesi (numri sipër) tregon sa pjesë kemi marrë, dhe emëruesi (numri poshtë) tregon në sa pjesë është ndarë e tëra.\n\nThyesat mund të jenë: të duhura (numëruesi < emëruesi, p.sh. 3/4), jo të duhura (numëruesi ≥ emëruesi, p.sh. 7/4), dhe numra të përzier (pjesë e plotë + thyesë, p.sh. 1¾).',
        keyPoints: [
          'Numëruesi tregon sa pjesë kemi (sipër vijës)',
          'Emëruesi tregon sa pjesë gjithsej (poshtë vijës)',
          'Emëruesi nuk mund të jetë zero',
          'Thyesat ekuivalente janë thyesa me të njëjtën vlerë: 1/2 = 2/4 = 3/6',
        ],
        examples: [
          {
            example: 'Shkruaj si thyesë: "tre pjesë nga tetë"',
            solution: 'Tre nga tetë = 3/8\nNumëruesi = 3 (sa pjesë kemi)\nEmëruesi = 8 (sa pjesë gjithsej)',
          },
          {
            example: 'Gjej thyesën ekuivalente me 2/3 që ka emërues 12.',
            solution: '2/3 = ?/12\n3 × 4 = 12, pra shumëzojmë edhe numëruesin me 4:\n2 × 4 = 8\nPra 2/3 = 8/12',
          },
        ],
        practice: [
          {
            problem: 'Konverto numrin e përzier 2¾ në thyesë jo të duhur.',
            solution: '2¾ = 11/4',
            steps: [
              '2¾ = 2 + 3/4',
              'Shumëzo pjesën e plotë me emëruesin: 2 × 4 = 8',
              'Shto numëruesin: 8 + 3 = 11',
              'Emëruesi mbetet i njëjtë: 4',
              'Rezultati: 11/4',
            ],
          },
        ],
      },
      {
        title: 'Thjeshtimi i Thyesave',
        theory: 'Thjeshtimi i thyesave (ose reduktimi) është procesi i gjetjes së formës më të thjeshtë të thyesës, duke e mbajtur të njëjtën vlerë. Thyesa 6/8 dhe 3/4 kanë të njëjtën vlerë, por 3/4 është forma e thjeshtuar.\n\nPër të thjeshtuar një thyesë, gjejmë pjesëtuesin më të madh të përbashkët (PMP) të numëruesit dhe emëruesit, pastaj i pjesëtojmë të dy me atë numër.\n\nKur PMP është 1, thyesa është tashmë në formën e thjeshtuar dhe quhet thyesë e pakthyeshme.',
        keyPoints: [
          'Pjesëtuesi më i madh i përbashkët (PMP) ndihmon të thjeshtojmë thyesat',
          'Thyesa është e thjeshtuar kur PMP(numëruesi, emëruesi) = 1',
          'Mund të thjeshtojmë hap pas hapi duke pjesëtuar me faktorë të vegjël',
          'Thjeshtimi nuk ndryshon vlerën e thyesës',
        ],
        examples: [
          {
            example: 'Thjeshtoje thyesën 18/24.',
            solution: 'Faktorët e 18: 1, 2, 3, 6, 9, 18\nFaktorët e 24: 1, 2, 3, 4, 6, 8, 12, 24\nPMP(18, 24) = 6\n18/24 = (18÷6)/(24÷6) = 3/4',
          },
          {
            example: 'Thjeshtoje thyesën 45/60.',
            solution: '45 = 3² × 5 = 9 × 5\n60 = 4 × 15 = 2² × 3 × 5\nPMP = 3 × 5 = 15\n45/60 = (45÷15)/(60÷15) = 3/4',
          },
        ],
        practice: [
          {
            problem: 'Thjeshtoje thyesën 36/48.',
            solution: '36/48 = 3/4',
            steps: [
              'Gjej PMP(36, 48)',
              '36 = 2² × 3² dhe 48 = 2⁴ × 3',
              'PMP = 2² × 3 = 12',
              '36 ÷ 12 = 3',
              '48 ÷ 12 = 4',
              'Rezultati: 3/4',
            ],
          },
        ],
      },
      {
        title: 'Mbledhja dhe Zbritja e Thyesave',
        theory: 'Për të mbledhur ose zbritur thyesa, duhet të kemi emërues të njëjtë. Kur thyesat kanë të njëjtin emërues (thyesa homogjene), thjesht mbledhim ose zbresim numëruesit.\n\nKur thyesat kanë emërues të ndryshëm (thyesa heterogjene), duhet të gjejmë emëruesin e përbashkët më të vogël, që është shumëfishi më i vogël i përbashkët (SHVP) i emëruesve.\n\nPas llogaritjes, gjithmonë thjeshtojmë rezultatin nëse është e mundur.',
        keyPoints: [
          'Thyesat me emërues të njëjtë: mblidh/zbrit vetëm numëruesit',
          'Thyesat me emërues të ndryshëm: gjej SHVP (emëruesin e përbashkët)',
          'SHVP = shumëfishi më i vogël i përbashkët i emëruesve',
          'Gjithmonë thjeshtoje rezultatin',
        ],
        examples: [
          {
            example: 'Llogarit: 2/7 + 3/7',
            solution: '2/7 + 3/7 = (2+3)/7 = 5/7\n(Emëruesit janë të njëjtë, mblidh vetëm numëruesit)',
          },
          {
            example: 'Llogarit: 1/3 + 1/4',
            solution: 'SHVP(3, 4) = 12\n1/3 = 4/12\n1/4 = 3/12\n4/12 + 3/12 = 7/12',
          },
        ],
        practice: [
          {
            problem: 'Llogarit: 3/4 - 1/6',
            solution: '3/4 - 1/6 = 7/12',
            steps: [
              'Gjej SHVP(4, 6)',
              '4 = 2², 6 = 2 × 3, SHVP = 2² × 3 = 12',
              'Konverto: 3/4 = 9/12',
              'Konverto: 1/6 = 2/12',
              '9/12 - 2/12 = 7/12',
              'Verifiko nëse mund të thjeshtosh: PMP(7,12)=1, pra 7/12 është e thjeshtuar',
            ],
          },
        ],
      },
      {
        title: 'Shumëzimi dhe Pjesëtimi i Thyesave',
        theory: 'Shumëzimi i thyesave është i thjeshtë: shumëzo numëruesit me njëri-tjetrin dhe emëruesit me njëri-tjetrin. Nuk ka nevojë të gjesh emërues të përbashkët!\n\nPjesëtimi i thyesave: për të pjesëtuar me një thyesë, shumëzojmë me të anasjelltën e saj. E anasjellta e a/b është b/a. Pra: a/b ÷ c/d = a/b × d/c.\n\nKëshillë: para se të shumëzosh, provo të thjeshtosh kryq: pjesëto numëruesin e njërës dhe emëruesin e tjetrës me një faktor të përbashkët.',
        keyPoints: [
          'Shumëzim: (a/b) × (c/d) = (a×c)/(b×d)',
          'Pjesëtim: (a/b) ÷ (c/d) = (a/b) × (d/c)',
          'E anasjellta e a/b është b/a',
          'Thjeshtimi kryq para shumëzimit e bën llogaritjen më të lehtë',
        ],
        examples: [
          {
            example: 'Llogarit: 2/3 × 3/4',
            solution: '2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2\nOse me thjeshtim kryq: 2/3 × 3/4 → thjeshtojmë 3 me 3: 2/1 × 1/4 = 2/4 = 1/2',
          },
          {
            example: 'Llogarit: 5/6 ÷ 5/12',
            solution: '5/6 ÷ 5/12 = 5/6 × 12/5 = (5×12)/(6×5) = 60/30 = 2',
          },
        ],
        practice: [
          {
            problem: 'Llogarit: 3/4 × 8/9 ÷ 2/3',
            solution: '= (3/4 × 8/9) ÷ 2/3 = 2/3 ÷ 2/3 = 1',
            steps: [
              'Kryej shumëzimin fillimisht: 3/4 × 8/9',
              'Thjeshtim kryq: 3 me 9 → 1 dhe 3, 8 me 4 → 2 dhe 1',
              '= 1/1 × 2/3 = 2/3',
              'Tani pjesëtimi: 2/3 ÷ 2/3',
              '= 2/3 × 3/2 = 6/6 = 1',
            ],
          },
        ],
      },
      {
        title: 'Numrat Dhjetorë',
        theory: 'Numrat dhjetorë janë një mënyrë tjetër për të shprehur thyesat. Ata përdorin sistemin dhjetor - shifrat pas presjes dhjetore paraqesin të dhjetat, të qindtat, të mijtat, etj.\n\nPër shembull: 3,14 = 3 + 1/10 + 4/100 = 3 + 0,1 + 0,04\n\nNumrat dhjetorë mund të jenë: të fundshëm (p.sh. 0,5; 1,25), periodikë (p.sh. 0,333... = 0,3̄, 0,142857...), ose irracionalë (p.sh. π = 3,14159...). Numrat dhjetorë të fundshëm dhe periodikë mund të shprehen si thyesa.',
        keyPoints: [
          'Pas presjes dhjetore vijnë të dhjetat (0,1), të qindtat (0,01), të mijtat (0,001)',
          'Thyesat me emërues 10, 100, 1000 shndërrohen lehtë në numra dhjetorë',
          'Numrat periodikë kanë shifra që përsëriten pafundësisht',
          '0,5 = 1/2; 0,25 = 1/4; 0,75 = 3/4; 0,1 = 1/10',
        ],
        examples: [
          {
            example: 'Konverto 0,375 në thyesë.',
            solution: '0,375 = 375/1000\nThjeshtoje: PMP(375, 1000) = 125\n375/1000 = 3/8',
          },
          {
            example: 'Konverto thyesën 7/8 në dhjetor.',
            solution: '7 ÷ 8 = 0,875\n8 × 0 = 0, mbetje 7\n70 ÷ 8 = 8, mbetje 6\n60 ÷ 8 = 7, mbetje 4\n40 ÷ 8 = 5, mbetje 0\nPra 7/8 = 0,875',
          },
        ],
        practice: [
          {
            problem: 'Rendit nga më i vogli te më i madhi: 0,6; 3/5; 0,55; 7/12',
            solution: '0,55 < 7/12 ≈ 0,583 < 0,6 = 3/5',
            steps: [
              'Konverto të gjithë në dhjetorë',
              '0,6 = 0,600',
              '3/5 = 0,600 (3÷5 = 0,6)',
              '0,55 = 0,550',
              '7/12 ≈ 0,583 (7÷12 ≈ 0,5833...)',
              'Renditja: 0,550 < 0,583 < 0,600 = 0,600',
              'Pra: 0,55 < 7/12 < 0,6 = 3/5',
            ],
          },
        ],
      },
    ],
  },

  // ===== ARITMETIKË: Përqindjet dhe Proporcionaliteti =====
  'arith-003': {
    lessons: [
      {
        title: 'Koncepti i Përqindjes',
        theory: 'Përqindja (%) do të thotë "nga njëqind" - është thyesë me emërues 100. Pra, 25% = 25/100 = 0,25. Përqindjet na ndihmojnë të krahasojmë sasi të ndryshme mbi bazën e njëjtë (100).\n\nPërqindjet janë të pranishme kudo: zbritje në dyqane, norma të interesit, rezultate testesh, statistika, probabilitet dhe shumë situata tjera të jetës së përditshme.\n\nPër të shndërruar: thyesë → % (shumëzo me 100), % → dhjetor (ndaj me 100), dhjetor → % (shumëzo me 100).',
        keyPoints: [
          '% do të thotë "për qind" ose "nga 100"',
          '50% = 50/100 = 0,5 = 1/2',
          '100% e diçkaje = gjëja e tërë',
          'Konvertim i shpejtë: % ↔ dhjetor (shto/hiq 2 vende pas presjes)',
        ],
        examples: [
          {
            example: 'Konverto 35% në thyesë dhe dhjetor.',
            solution: '35% = 35/100 = 7/20 (thyesë e thjeshtuar)\n35% = 0,35 (dhjetor)',
          },
          {
            example: 'Shpreh 0,875 si përqindje.',
            solution: '0,875 × 100 = 87,5%',
          },
        ],
        practice: [
          {
            problem: 'Nga grupi i 40 nxënësve, 24 kaluan testin. Sa përqind kaluan?',
            solution: '24/40 = 0,6 = 60%',
            steps: [
              'Ndaj numrin që kaloi me totalin: 24/40',
              '24 ÷ 40 = 0,6',
              'Shumëzo me 100: 0,6 × 100 = 60',
              'Përgjigja: 60% e nxënësve kaluan testin',
            ],
          },
        ],
      },
      {
        title: 'Llogaritja e Përqindjeve',
        theory: 'Ka tre lloje problemesh kryesore me përqindje:\n1. Gjej X% të numrit N: X% × N = (X/100) × N\n2. X është çfarë % e N: (X/N) × 100%\n3. X është Y% e cilit numër: X / (Y/100) = X × 100/Y\n\nMund të përdorim formulën drejtpërdrejt, ose të arsyetojmë me përpjesëtim: nëse 100% = N, atëherë Y% = (Y × N)/100.\n\nKëshillë praktike: 10% e çdo numri gjendet lehtë duke e pjesëtuar me 10; 5% = gjysma e 10%; 20% = dyfishi i 10%.',
        keyPoints: [
          'X% e N = (X × N) / 100',
          '10% e numrit = ndaj me 10',
          '50% e numrit = gjysma',
          'Rritja me P%: shumëzo me (1 + P/100)',
        ],
        examples: [
          {
            example: 'Llogarit 15% të 80.',
            solution: '15% e 80 = (15 × 80) / 100 = 1200/100 = 12\nOse: 10% e 80 = 8, dhe 5% e 80 = 4, pra 15% = 8 + 4 = 12',
          },
          {
            example: 'Çmimi i vjetër 1200 lekë u rrit me 8%. Cili është çmimi i ri?',
            solution: 'Rritja: 8% e 1200 = 0,08 × 1200 = 96 lekë\nÇmimi i ri: 1200 + 96 = 1296 lekë\nOse drejtpërdrejt: 1200 × 1,08 = 1296 lekë',
          },
        ],
        practice: [
          {
            problem: 'Çmimi fillestar i telefonit ishte 50 000 lekë. Dyqani jep zbritje 15%. Sa lekë paguhen?',
            solution: 'Çmimi pas zbritjes = 50 000 × 0,85 = 42 500 lekë',
            steps: [
              'Zbritja = 15% e 50 000 = 0,15 × 50 000 = 7 500 lekë',
              'Çmimi i ri = 50 000 - 7 500 = 42 500 lekë',
              'Ose drejtpërdrejt: 50 000 × (1 - 0,15) = 50 000 × 0,85 = 42 500 lekë',
            ],
          },
        ],
      },
      {
        title: 'Raportet dhe Përpjesëtimet',
        theory: 'Raporti tregon marrëdhënien ndërmjet dy ose më shumë sasive. Shkruhet si a:b ose a/b. Raporti 3:2 thotë "për çdo 3 të para, ka 2 të dyta".\n\nDy sasi janë në përpjesëtim të drejtë nëse raporti i tyre mbetet konstant: y/x = k. Kur x dyfishohet, y dyfishohet gjithashtu.\n\nPërpjesëtimi i zhdrejtë: dy sasi janë në përpjesëtim të zhdrejtë nëse prodhimi i tyre mbetet konstant: x × y = k. Kur x dyfishohet, y gjysmëzohet.',
        keyPoints: [
          'Raporti a:b = a/b - tregon marrëdhënien relative ndërmjet dy sasive',
          'Përpjesëtim i drejtë: y = k × x (k konstant)',
          'Përpjesëtim i zhdrejtë: x × y = k',
          'Përpjesëtimi: a/b = c/d → a × d = b × c (prodhimet kryq janë të barabarta)',
        ],
        examples: [
          {
            example: 'Raporti i mësuesve me nxënës është 1:20. Nëse ka 480 nxënës, sa mësues duhen?',
            solution: '1/20 = x/480\nx = 480/20 = 24 mësues',
          },
          {
            example: '6 punëtorë mbarojnë një punë në 12 ditë. Sa ditë do të duhen 9 punëtorë?',
            solution: 'Ky është përpjesëtim i zhdrejtë: punëtorë × ditë = konstant\n6 × 12 = 9 × ditë\n72 = 9 × ditë\nDitë = 72/9 = 8 ditë',
          },
        ],
        practice: [
          {
            problem: 'Recepta e ëmbëlsirës kërkon 300g miell për 4 racione. Sa miell nevojitet për 10 racione?',
            solution: '300g × (10/4) = 750g',
            steps: [
              'Shkruaj përpjesëtimin: 300/4 = x/10',
              'Shumëzo kryq: 300 × 10 = 4 × x',
              '3000 = 4x',
              'x = 3000/4 = 750',
              'Përgjigja: 750g miell',
            ],
          },
        ],
      },
    ],
  },

  // ===== ALGJEBËR: Hyrje në Algjebër =====
  'alg-001': {
    lessons: [
      {
        title: 'Variablat dhe Konstantet',
        theory: 'Algjebra ndryshon nga aritmetika sepse përdor simbole (shkronja) për të përfaqësuar numra të panjohur ose numra që mund të ndryshojnë. Këto simbole quhen variabla (p.sh. x, y, z, a, b).\n\nKonstantet janë numra që nuk ndryshojnë, si 5, -3, ½, π. Koeficienti është numri para variablit - në 3x, 3 është koeficienti.\n\nPërdorimi i variablave na lejon të shkruajmë rregulla të përgjithshme. Për shembull, sipërfaqja e drejtkëndëshit është A = l × g - kjo vlen për çdo drejtkëndësh, jo vetëm për një të caktuar.',
        keyPoints: [
          'Variablat janë simbole (zakonisht shkronja) që përfaqësojnë numra të panjohur',
          'Konstantet janë numra që nuk ndryshojnë',
          'Koeficienti është numri që shumëzon variablin',
          '3x do të thotë "3 herë x" - shumëzim i nënkuptuar',
        ],
        examples: [
          {
            example: 'Identifiko variablat, konstantet dhe koeficientët në: 5x + 3y - 7',
            solution: 'Variablat: x dhe y\nKonstante: −7 (termi pa variabël), koeficientët: 5 (para x), 3 (para y)\nTermi −7 është term konstant',
          },
          {
            example: 'Shkruaj si shprehje algjebrike: "gjysma e x plus katër"',
            solution: 'x/2 + 4 ose (1/2)x + 4',
          },
        ],
        practice: [
          {
            problem: 'Nëse mosha e Arit është x, dhe Eri është 3 vjet më i vjetër, shkruaj moshën e Erit dhe gjej nëse x = 15.',
            solution: 'Mosha e Erit = x + 3. Nëse x = 15: mosha e Erit = 15 + 3 = 18 vjeç',
            steps: [
              'Mosha e Arit: x',
              'Mosha e Erit: x + 3',
              'Zëvendëso x = 15: 15 + 3 = 18',
              'Eri është 18 vjeç',
            ],
          },
        ],
      },
      {
        title: 'Shprehjet Algjebrike',
        theory: 'Shprehja algjebrike është kombinim i variablave, konstanteve dhe operacioneve (+, -, ×, ÷). P.sh. 2x + 3y - 5 është shprehje algjebrike.\n\nTermat janë pjesët e shprehjes të ndara nga + ose -. Termat e ngjashëm janë ata me të njëjtin variabël të ngritur në të njëjtën fuqi - p.sh. 3x dhe 5x, ose 2y² dhe -y².\n\nThjeshtimi i shprehjeve bëhet duke bashkuar termat e ngjashëm: mbledhim ose zbresim koeficientët e termave me të njëjtin variabël.',
        keyPoints: [
          'Termat e ngjashëm kanë të njëjtin variabël (dhe fuqi)',
          'Mund të mbledhim ose zbresim vetëm terma të ngjashëm',
          '3x + 5x = 8x (jo 3x + 5x = 8x²!)',
          '2x + 3y nuk mund të thjeshtohet (terma të ndryshëm)',
        ],
        examples: [
          {
            example: 'Thjeshtoje: 3x + 2y + 5x - y',
            solution: '= (3x + 5x) + (2y - y)\n= 8x + y',
          },
          {
            example: 'Thjeshtoje: 4a² - 3a + 7 + 2a² + 5a - 2',
            solution: '= (4a² + 2a²) + (-3a + 5a) + (7 - 2)\n= 6a² + 2a + 5',
          },
        ],
        practice: [
          {
            problem: 'Thjeshtoje: 7x + 3 - 2x + y - 4 + 5y',
            solution: '= 5x + 6y - 1',
            steps: [
              'Grupo termat e ngjashëm: (7x - 2x) + (y + 5y) + (3 - 4)',
              '7x - 2x = 5x',
              'y + 5y = 6y',
              '3 - 4 = -1',
              'Rezultati: 5x + 6y - 1',
            ],
          },
        ],
      },
      {
        title: 'Ekuacionet e Shkallës së Parë',
        theory: 'Ekuacioni është barazim mes dy shprehjeve. Ekuacioni i shkallës së parë (linear) ka variablin me fuqi 1. P.sh. 2x + 3 = 11 është ekuacion i shkallës së parë.\n\nQëllimi ynë është të gjejmë vlerën e variablit (të zgjidhim ekuacionin). Bëjmë këtë duke kryer operacione të njëjta në të dyja anët e barazimit - kjo nuk ndryshon barazinë.\n\nStrategjia: veçojmë variablin në njërën anë dhe gjithçka tjetër e kalojmë në anën tjetër.',
        keyPoints: [
          'Mund të mbledhim/zbresim të njëjtin numër nga të dyja anët',
          'Mund të shumëzojmë/pjesëtojmë me të njëjtin numër (jo zero) të dyja anët',
          'Verifikimi: zëvendëso zgjidhjen dhe kontrolloje barazinë',
          'Izolimi i variablit është qëllimi kryesor',
        ],
        examples: [
          {
            example: 'Zgjidh: 2x + 3 = 11',
            solution: '2x + 3 = 11\n2x = 11 - 3\n2x = 8\nx = 4\nVerifiko: 2(4) + 3 = 8 + 3 = 11 ✓',
          },
          {
            example: 'Zgjidh: 5x - 7 = 3x + 9',
            solution: '5x - 3x = 9 + 7\n2x = 16\nx = 8\nVerifiko: 5(8)-7 = 33 dhe 3(8)+9 = 33 ✓',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh: 3(x - 2) + 4 = x + 10',
            solution: 'x = 6',
            steps: [
              'Hap kllapat: 3x - 6 + 4 = x + 10',
              'Thjeshtoje anën e majtë: 3x - 2 = x + 10',
              'Kalo x djathtas: 3x - x = 10 + 2',
              '2x = 12',
              'x = 6',
              'Verifikoje: 3(6-2)+4 = 3×4+4 = 16 = 6+10 ✓',
            ],
          },
        ],
      },
      {
        title: 'Inekuacionet',
        theory: 'Inekuacioni është marrëdhënie jo-barazie ndërmjet dy shprehjeve, duke përdorur simbolet: < (më i vogël), > (më i madh), ≤ (më i vogël ose baraz), ≥ (më i madh ose baraz).\n\nZgjidhja e inekuacionit është një bashkësi numrash (zakonisht interval), jo vetëm një numër i vetëm. Zgjidhjet shprehen si {x | kushti} ose me shënimin e intervalit [a, b], (a, b), etj.\n\nRregulli i rëndësishëm: Kur shumëzojmë ose pjesëtojmë me numër negativ, kahu i shenjës së inekuacionit ndërrohet!',
        keyPoints: [
          'Inekuacioni ka bashkësi zgjidhjesh, jo vetëm një vlerë',
          'Shumëzimi me numër negativ e ndërron kahun e shenjës: < bëhet >',
          'Grafiku i zgjidhjes shfaqet si interval mbi boshtin e numrave',
          'Pikë e mbyllur (●) nëse >= ose <=, pikë e hapur (○) nëse > ose <',
        ],
        examples: [
          {
            example: 'Zgjidh: 2x + 3 < 11',
            solution: '2x < 11 - 3\n2x < 8\nx < 4\nZgjidhja: të gjithë numrat më të vegjël se 4, dmth (-∞, 4)',
          },
          {
            example: 'Zgjidh: -3x ≥ 12',
            solution: '-3x ≥ 12\nx ≤ 12/(-3)   ← Shenja ndryshon!\nx ≤ -4\nZgjidhja: (-∞, -4]',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh dhe shkruaj si interval: 5 - 2x > 1',
            solution: 'x < 2, interval (-∞, 2)',
            steps: [
              '5 - 2x > 1',
              '-2x > 1 - 5',
              '-2x > -4',
              'x < 2   (shenja ndryshon sepse ndajmë me -2)',
              'Zgjidhja: x < 2, ose interval (-∞, 2)',
            ],
          },
        ],
      },
    ],
  },

  // ===== ALGJEBËR: Ekuacionet dhe Funksionet =====
  'alg-002': {
    lessons: [
      {
        title: 'Sistemet e Ekuacioneve',
        theory: 'Sistemi i ekuacioneve është dy ose më shumë ekuacione me të njëjtat variabla. Zgjidhja e sistemit është çifti (x, y) që plotëson të gjitha ekuacionet njëkohësisht.\n\nMetodat kryesore për zgjidhjen e sistemeve: 1) Zëvendësimi - shpreh njërin variabël dhe zëvendëso, 2) Eliminimi - shumëzo ekuacionet dhe mblidhi/zbrit për të eliminuar njërin variabël, 3) Grafiku: gjej pikën ku priten drejtëzat.\n\nSistemi mund të ketë: një zgjidhje (drejtëzat priten), asnjë zgjidhje (drejtëzat janë paralele), ose pafund zgjidhje (drejtëzat përputhen).',
        keyPoints: [
          'Zgjidhja është çifti (x, y) që plotëson të dyja ekuacionet',
          'Metoda e zëvendësimit: shpreh njërin variabël dhe zëvendësoje',
          'Metoda e eliminimit: shto/zbrit ekuacionet për të fshirë njërin variabël',
          'Sistemi ka 1, 0 ose ∞ zgjidhje',
        ],
        examples: [
          {
            example: 'Zgjidh sistemin: x + y = 7 dhe x - y = 3',
            solution: 'Metoda e eliminimit:\nx + y = 7\n+(x - y = 3)\n2x = 10 → x = 5\nZëvendëso: 5 + y = 7 → y = 2\nZgjidhja: (5, 2)',
          },
          {
            example: 'Zgjidh me zëvendësim: y = 2x - 1 dhe 3x + y = 9',
            solution: 'Zëvendëso y: 3x + (2x - 1) = 9\n5x - 1 = 9\n5x = 10\nx = 2\ny = 2(2) - 1 = 3\nZgjidhja: (2, 3)',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh sistemin: 2x + 3y = 12 dhe 4x - y = 10',
            solution: 'x = 3, y = 2',
            steps: [
              'Nga ekuacioni i dytë: y = 4x - 10',
              'Zëvendëso te i pari: 2x + 3(4x - 10) = 12',
              '2x + 12x - 30 = 12',
              '14x = 42 → x = 3',
              'y = 4 · 3 - 10 = 2',
              'Prova: 2 · 3 + 3 · 2 = 12 ✓ dhe 4 · 3 - 2 = 10 ✓',
            ],
          },
        ],
      },
      {
        title: 'Funksionet Lineare',
        theory: 'Funksioni linear shprehet si f(x) = mx + b, ku m është pjerrësia (shpati) dhe b është prerja me boshtin y. Grafiku i funksionit linear është gjithmonë drejtëz.\n\nPjerrësia m tregon sa ndryshon y kur x ndryshon me 1 njësi: m = (y₂-y₁)/(x₂-x₁). Nëse m > 0, drejtëza ngjitet nga e majta në të djathtë; nëse m < 0, zbret.\n\nPrerja b tregon ku drejtëza pret boshtin y (kur x = 0). Kjo pikë (0, b) quhet prerja me boshtin y.',
        keyPoints: [
          'Forma standarde: y = mx + b',
          'm = pjerrësia (ndryshimi i y / ndryshimi i x)',
          'b = prerja me boshtin y',
          'Dy pika mjaftojnë për të vizatuar drejtëzën',
        ],
        examples: [
          {
            example: 'Gjej pjerrësinë dhe prerjen me boshtin y të drejtëzës: y = 3x - 2',
            solution: 'm = 3 (pjerrësia)\nb = -2 (prerja y)\nKur x=0: y = -2 → pika (0, -2)\nKur x=1: y = 1 → pika (1, 1)',
          },
          {
            example: 'Gjej ekuacionin e drejtëzës që kalon nëpër (2, 5) dhe (4, 9).',
            solution: 'm = (9-5)/(4-2) = 4/2 = 2\ny = mx + b → 5 = 2(2) + b → b = 1\nEkuacioni: y = 2x + 1',
          },
        ],
        practice: [
          {
            problem: 'Kur ecim 3 km, kalohen 45 minuta. Modeloni si funksion linear dhe gjeni kohën për 7 km.',
            solution: 'y = 15x, ku y = minuta dhe x = km. Për 7 km: y = 15×7 = 105 minuta (1 orë 45 min)',
            steps: [
              'Gjej pjerrësinë: 45 minuta / 3 km = 15 min/km',
              'Funksioni: y = 15x (fillon nga 0)',
              'Për x = 7: y = 15 × 7 = 105 minuta',
              'Konverto: 105 minuta = 1 orë e 45 minuta',
            ],
          },
        ],
      },
      {
        title: 'Ekuacionet Kuadratike',
        theory: 'Ekuacioni kuadratik ka formën ax² + bx + c = 0, ku a ≠ 0. Shkalla e dytë e variablit e bën atë "kuadratik" (nga lat. quadratus = katror).\n\nMënyrat e zgjidhjes: 1) Faktorizimi: shkruaj si (x + p)(x + q) = 0, 2) Formula kuadratike: x = [-b ± √(b² - 4ac)] / 2a, 3) Plotësimi i katrorit.\n\nDiskriminanti D = b² - 4ac tregon numrin e zgjidhjeve: D > 0 → 2 zgjidhje reale, D = 0 → 1 zgjidhje, D < 0 → asnjë zgjidhje reale.',
        keyPoints: [
          'Forma standarde: ax² + bx + c = 0',
          'Formula: x = [-b ± √(b² - 4ac)] / 2a',
          'Diskriminanti D = b² - 4ac tregon numrin e zgjidhjeve',
          'Faktorizimi shpesh është mënyra më e shpejtë',
        ],
        examples: [
          {
            example: 'Zgjidh: x² - 5x + 6 = 0',
            solution: 'Me faktorizim: (x - 2)(x - 3) = 0\nx - 2 = 0 → x = 2\nx - 3 = 0 → x = 3\nZgjidhjet: x = 2 ose x = 3',
          },
          {
            example: 'Zgjidh: 2x² + 3x - 5 = 0 me formulën kuadratike.',
            solution: 'a=2, b=3, c=-5\nD = 3² - 4(2)(-5) = 9 + 40 = 49\nx = (-3 ± √49) / 4 = (-3 ± 7) / 4\nx₁ = (-3 + 7)/4 = 1\nx₂ = (-3 - 7)/4 = -2,5',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh: x² - 4x - 12 = 0',
            solution: 'x = 6 ose x = -2',
            steps: [
              'Kërko dy numra me shumë -4 dhe prodhim -12',
              'Numrat: -6 dhe +2 (sepse -6 + 2 = -4 dhe -6 × 2 = -12)',
              'Faktorizimi: (x - 6)(x + 2) = 0',
              'x - 6 = 0 → x = 6',
              'x + 2 = 0 → x = -2',
            ],
          },
        ],
      },
    ],
  },

  // ===== GJEOMETRI: Bazat e Gjeometrisë =====
  'geo-001': {
    lessons: [
      {
        title: 'Pika, Drejtëza dhe Rrafshi',
        theory: 'Gjeometria studion format, madhësitë dhe pozicionet e figurave. Elementet bazë janë: pika (pa përmasa, vetëm pozicion), drejtëza (një përmasë: gjatësi pa gjerësi) dhe rrafshi (dy përmasa: sipërfaqe e sheshtë e pafundme).\n\nDrejtëza kalon nëpër dy pika dhe shtrihet pa fund në të dyja kahet. Gjysmëdrejtëza fillon nga një pikë dhe shkon pa fund në njërin kah. Segmenti ka dy skaje dhe gjatësi të caktuar.\n\nDy drejtëza në rrafsh janë: paralele (nuk priten), pingule (priten nën kënd 90°), ose prerëse (priten nën një kënd tjetër).',
        keyPoints: [
          'Pika ka pozicion, por pa madhësi',
          'Dy pika përcaktojnë saktësisht një drejtëz',
          'Drejtëzat paralele nuk priten kurrë',
          'Drejtëzat pingule formojnë kënd 90°',
        ],
        examples: [
          {
            example: 'Sa drejtëza mund të kalojnë nëpër një pikë të vetme?',
            solution: 'Pafund drejtëza mund të kalojnë nëpër një pikë: drejtëzën mund ta rrotullojmë rreth pikës në çdo drejtim.',
          },
          {
            example: 'A mund të jenë dy drejtëza njëkohësisht paralele dhe pingule me njëra-tjetrën?',
            solution: 'Jo! Drejtëzat paralele nuk priten kurrë, ndërsa drejtëzat pingule priten (dhe formojnë kënd 90°). Këto dy veti e përjashtojnë njëra-tjetrën.',
          },
        ],
        practice: [
          {
            problem: 'Nëse drejtëza AB është paralele me CD, dhe CD është pingule me EF, çfarë lidhjeje ka ndërmjet AB dhe EF?',
            solution: 'AB ⊥ EF (AB është pingule me EF)',
            steps: [
              'AB ∥ CD (dhënë)',
              'CD ⊥ EF (dhënë)',
              'Nëse AB ∥ CD, çdo drejtëz pingule me CD është pingule edhe me AB',
              'Pra AB ⊥ EF',
            ],
          },
        ],
      },
      {
        title: 'Këndet dhe Matja e tyre',
        theory: 'Këndi formohet nga dy gjysmëdrejtëza me fillim të përbashkët (kulmi). Matja e këndit shprehet në gradë (°). Rrethi i plotë = 360°.\n\nLlojet e këndeve: i ngushtë (0° < α < 90°), i drejtë (α = 90°), i gjerë (90° < α < 180°), i shtrirë (α = 180°) dhe i plotë (α = 360°).\n\nDy kënde janë plotësuese kur shuma e tyre është 90°, dhe shtuese kur shuma është 180°. Këndet e kundërta në kulm janë të barabarta.',
        keyPoints: [
          'Këndi i drejtë = 90°',
          'Këndi i shtrirë = 180°',
          'Këndet plotësuese = 90° (bashkë)',
          'Këndet shtuese = 180° (bashkë)',
        ],
        examples: [
          {
            example: 'Gjej këndin plotësues dhe këndin shtues të 35°.',
            solution: 'Plotësues: 90° - 35° = 55°\nShtues: 180° - 35° = 145°',
          },
          {
            example: 'Dy kënde shtuese janë në raportin 2:3. Gjeji ato.',
            solution: '2x + 3x = 180°\n5x = 180°\nx = 36°\nKëndet: 2×36° = 72° dhe 3×36° = 108°',
          },
        ],
        practice: [
          {
            problem: 'Tri këndet e trekëndëshit janë në raportin 1:2:3. Gjej secilin kënd.',
            solution: '30°, 60°, 90° (trekëndësh kënddrejtë)',
            steps: [
              'Shuma e këndeve të trekëndëshit = 180°',
              '1x + 2x + 3x = 180°',
              '6x = 180°',
              'x = 30°',
              'Këndet: 30°, 60°, 90°',
            ],
          },
        ],
      },
      {
        title: 'Trekëndëshat',
        theory: 'Trekëndëshi është figura me tri brinjë dhe tri kënde. Shuma e këndeve të brendshme të çdo trekëndëshi është gjithmonë 180°.\n\nSipas këndeve: kënddrejtë (ka një kënd 90°), këndngushtë (të gjitha këndet < 90°), këndgjerë (një kënd > 90°).\nSipas brinjëve: barabrinjës (3 brinjë të barabarta), barakrahës (2 brinjë të barabarta), brinjëndryshëm (asnjë brinjë e barabartë).\n\nFormula e sipërfaqes: S = (baza × lartësia) / 2',
        keyPoints: [
          'Shuma e këndeve = 180°',
          'Trekëndëshi barabrinjës ka të gjitha këndet 60°',
          'Teorema e Pitagorës: a² + b² = c² (vetëm te trekëndëshi kënddrejtë)',
          'Sipërfaqja = ½ × bazë × lartësi',
        ],
        examples: [
          {
            example: 'Dy këndet e trekëndëshit janë 45° dhe 75°. Gjej këndin e tretë.',
            solution: 'Këndi i tretë = 180° - 45° - 75° = 60°',
          },
          {
            example: 'Trekëndëshi kënddrejtë ka katetet 6 cm dhe 8 cm. Gjej hipotenuzën.',
            solution: 'c² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10 cm',
          },
        ],
        practice: [
          {
            problem: 'Llogarit sipërfaqen e trekëndëshit me bazë 12 cm dhe lartësi 7 cm.',
            solution: 'S = ½ × 12 × 7 = 42 cm²',
            steps: [
              'Formula e sipërfaqes: S = (b × h) / 2',
              'b = 12 cm, h = 7 cm',
              'S = (12 × 7) / 2',
              'S = 84 / 2',
              'S = 42 cm²',
            ],
          },
        ],
      },
      {
        title: 'Katërkëndëshat',
        theory: 'Katërkëndëshi ka katër brinjë dhe katër kënde. Shuma e këndeve të brendshme = 360°.\n\nLlojet: katrori (4 brinjë të barabarta, 4 kënde 90°), drejtkëndëshi (4 kënde 90°, brinjët e kundërta të barabarta), rombi (4 brinjë të barabarta), paralelogrami (brinjët e kundërta paralele dhe të barabarta), trapezi (vetëm një çift brinjësh paralele).\n\nFormulat: katrori: P = 4a, S = a²; drejtkëndëshi: P = 2(l+g), S = l×g; paralelogrami: S = b × h',
        keyPoints: [
          'Shuma e këndeve të katërkëndëshit = 360°',
          'Katrori: të gjitha brinjët dhe të gjitha këndet të barabarta',
          'Drejtkëndëshi: këndet 90°, brinjët e kundërta të barabarta',
          'Rombi: 4 brinjë të barabarta (këndet jo detyrimisht 90°)',
        ],
        examples: [
          {
            example: 'Llogarit perimetrin dhe sipërfaqen e drejtkëndëshit 8×5 cm.',
            solution: 'Perimetri: P = 2(8 + 5) = 2 × 13 = 26 cm\nSipërfaqja: S = 8 × 5 = 40 cm²',
          },
          {
            example: 'Katrori ka sipërfaqe 169 cm². Sa është brinja e tij?',
            solution: 'S = a²\n169 = a²\na = √169 = 13 cm',
          },
        ],
        practice: [
          {
            problem: 'Një lulishte ka formën e trapezit me bazat 10 m dhe 6 m dhe lartësinë 4 m. Llogarit sipërfaqen.',
            solution: 'S = [(10 + 6)/2] × 4 = 8 × 4 = 32 m²',
            steps: [
              'Formula e sipërfaqes së trapezit: S = [(b₁ + b₂)/2] × h',
              'b₁ = 10 m, b₂ = 6 m, h = 4 m',
              'S = [(10 + 6)/2] × 4',
              'S = [16/2] × 4',
              'S = 8 × 4 = 32 m²',
            ],
          },
        ],
      },
    ],
  },

  // ===== STATISTIKË: Hyrje në Statistikë =====
  'stat-001': {
    lessons: [
      {
        title: 'Konceptet Bazë të Statistikës',
        theory: 'Statistika është shkenca e mbledhjes, organizimit, analizës dhe interpretimit të të dhënave. Ndahet në: statistika deskriptive (përshkruan të dhënat) dhe statistika inferenciale (nxjerr përfundime për popullatën nga mostra).\n\nPopullata është bashkësia e gjithë individëve/objekteve të studimit. Mostra është një nënbashkësi e popullatës. Vlerat (të dhënat) janë informacioni i mbledhur.\n\nVariabla mund të jenë: cilësore/kategorike (p.sh. ngjyra, gjinia) ose sasiore/numerike (mund të jenë të vazhdueshme ose të diskrete).',
        keyPoints: [
          'Popullata = gjithë bashkësia e studimit',
          'Mostra = nënbashkësi përfaqësuese',
          'Variabla cilësor = kategorike (ngjyra, lloji)',
          'Variabla sasior = numerike (lartësia, pesha)',
        ],
        examples: [
          {
            example: 'Studimi i mesatares së notave të të gjithë nxënësve të Shqipërisë: identifiko popullatën dhe variablin.',
            solution: 'Popullata: të gjithë nxënësit e Shqipërisë\nVariabli: nota mesatare (sasior, i vazhdueshëm)',
          },
          {
            example: 'Anketë mbi sportin e preferuar: si klasifikohet variabli?',
            solution: 'Sporti i preferuar është variabël cilësor/kategorik - ka kategori si "futboll", "basketboll", "not", etj. Nuk mund të maten numerikisht.',
          },
        ],
        practice: [
          {
            problem: 'Nga 200 studentë universiteti, pyetet se sa orë studim bëjnë në javë. Identifiko: popullatën, mostrën, variablin dhe llojin e variablit.',
            solution: 'Popullata: të gjithë studentët, Mostra: 200 studentë, Variabli: orë studimi/javë (sasior, i vazhdueshëm)',
            steps: [
              'Popullata: të gjithë studentët e universitetit',
              'Mostra: 200 studentët e zgjedhur për anketë',
              'Variabli: numri i orëve të studimit në javë',
              'Lloji: sasior, i vazhdueshëm (0,5 orë, 3,2 orë, etj.)',
            ],
          },
        ],
      },
      {
        title: 'Mesataret dhe Matjet Qendrore',
        theory: 'Masat e tendencës qendrore na tregojnë vlerën "tipike" të të dhënave. Tre masat kryesore janë mesatarja, mediana dhe moda.\n\nMesatarja aritmetike (Mean) = shuma e të gjitha vlerave / numri i vlerave. Ndikohet shumë nga vlerat e skajshme.\nMediana = vlera e mesit kur të dhënat janë të renditura. Nuk ndikohet shumë nga vlerat e skajshme.\nModa = vlera që përsëritet më shumë. Mund të ketë 0, 1 ose shumë moda.',
        keyPoints: [
          'Mesatarja = Σx / n',
          'Mediana = vlera e mesit (ose mesatarja e dy të mesave)',
          'Moda = vlera më e shpeshtë',
          'Mediana dhe moda ndikohen më pak nga vlerat e skajshme',
        ],
        examples: [
          {
            example: 'Të dhënat: 4, 7, 2, 9, 7, 5, 3. Gjej mesataren, medianën dhe modën.',
            solution: 'Mesatarja: (4+7+2+9+7+5+3)/7 = 37/7 ≈ 5,29\nMediana (i renditur: 2,3,4,5,7,7,9): vlera e mesit = 5\nModa: 7 (përsëritet 2 herë)',
          },
          {
            example: 'Paga mujore: 30 000, 32 000, 31 000, 200 000 lekë. Cila masë e tendencës qendrore e përfaqëson më mirë grupin?',
            solution: 'Mesatarja: 293 000/4 = 73 250 lekë - shumë e ndikuar nga 200 000\nMediana: (30 000+32 000)/2 = 31 000 - më e qëndrueshme\nMediana e përfaqëson më mirë shumicën',
          },
        ],
        practice: [
          {
            problem: 'Notat e testit: 85, 92, 78, 85, 90, 75, 88, 85. Gjej mesataren dhe modën.',
            solution: 'Mesatarja = 678/8 = 84,75; Moda = 85',
            steps: [
              'Shuma: 85+92+78+85+90+75+88+85 = 678',
              'Mesatarja: 678/8 = 84,75',
              'Vlera që përsëritet më shumë: 85 (shfaqet 3 herë)',
              'Moda = 85',
            ],
          },
        ],
      },
      {
        title: 'Shpërndarja dhe Varianca',
        theory: 'Masat e shpërndarjes (dispersioni) na tregojnë sa të shpërndarë janë të dhënat rreth vlerës qendrore.\n\nGjerësia = vlera maksimale - vlera minimale. Tregon shtrirjen e plotë, por ndikohet nga vlerat e skajshme.\nVarianca (σ²) = mesatarja e katrorëve të devijimeve nga mesatarja.\nDevijimi standard (σ) = √varianca. Ka të njëjtën njësi matëse si të dhënat, prandaj interpretohet lehtë.\n\nDevijimi standard i vogël = të dhëna të grumbulluara rreth mesatares. I madh = të dhëna shumë të shpërndarë.',
        keyPoints: [
          'Gjerësia = max - min (tregues i thjeshtë i shpërndarjes)',
          'Devijimi standard = "distanca tipike" nga mesatarja',
          'σ² = Σ(xᵢ - x̄)² / n (varianca)',
          'σ = √(varianca) - devijimi standard',
        ],
        examples: [
          {
            example: 'Gjej gjerësinë dhe devijimin standard të: 2, 4, 4, 4, 5, 5, 7, 9',
            solution: 'Gjerësia: 9 - 2 = 7\nMesatarja: 40/8 = 5\nDevijimet²: 9, 1, 1, 1, 0, 0, 4, 16\nVarianca: 32/8 = 4\nDevijimi standard: √4 = 2',
          },
        ],
        practice: [
          {
            problem: 'Dy klasa morën notat mesatare 75 me devijime standarde 3 dhe 12 respektivisht. Cila klasë ka nota më të qëndrueshme?',
            solution: 'Klasa me σ=3 ka nota më të qëndrueshme (afër mesatares). Klasa me σ=12 ka shpërndarje të madhe.',
            steps: [
              'Mesataret janë të barabarta: 75',
              'Klasa 1: σ = 3, pra notat janë ndërmjet 72-78 kryesisht',
              'Klasa 2: σ = 12, notat shpërndahen gjerësisht (63-87)',
              'Klasa 1 ka performancë më të qëndrueshme',
            ],
          },
        ],
      },
    ],
  },
};
