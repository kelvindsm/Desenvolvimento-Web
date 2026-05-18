const teamsData = [
    // ======================
    // Grupo A
    // ======================
    {
        id: 'mx', name: 'México', group: 'Grupo A', flag: 'mx.svg', subtitle: 'Sede / Concacaf', titles: 0, rank: '15º', afiliation: 'CONCACAF', rare: false, color: '#006847',
        players: [
            { name: 'L. Malagón', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Malagon&background=006847&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'J. Sánchez', pos: 'LAT', number: 19, photo: 'https://ui-avatars.com/api/?name=Sanchez&background=006847&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'C. Montes', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Montes&background=006847&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'J. Vásquez', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Vasquez&background=006847&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'G. Arteaga', pos: 'LAT', number: 6, photo: 'https://ui-avatars.com/api/?name=Arteaga&background=006847&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'E. Álvarez', pos: 'VOL', number: 4, photo: 'https://ui-avatars.com/api/?name=Alvarez&background=006847&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'L. Romo', pos: 'VOL', number: 7, photo: 'https://ui-avatars.com/api/?name=Romo&background=006847&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'L. Chávez', pos: 'MEI', number: 24, photo: 'https://ui-avatars.com/api/?name=Chavez&background=006847&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'S. Giménez', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Gimenez&background=006847&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'H. Lozano', pos: 'ATA', number: 22, photo: 'https://ui-avatars.com/api/?name=Lozano&background=006847&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'U. Antuna', pos: 'ATA', number: 15, photo: 'https://ui-avatars.com/api/?name=Antuna&background=006847&color=fff&size=128&font-size=0.33', rating: 76 }
        ]
    },
    {
        id: 'za', name: 'África do Sul', group: 'Grupo A', flag: 'za.svg', subtitle: 'África', titles: 0, rank: '57º', afiliation: 'CAF', rare: false, color: '#007749',
        players: [
            { name: 'Ronwen Williams', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Williams&background=007749&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Nyiko Mobbie', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Mobbie&background=007749&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Siyanda Xulu', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Xulu&background=007749&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Mothobi Mvala', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Mvala&background=007749&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Aubrey Modiba', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Modiba&background=007749&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Teboho Mokoena', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Mokoena&background=007749&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Sphephelo Sithole', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Sithole&background=007749&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Themba Zwane', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Zwane&background=007749&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Percy Tau', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Tau&background=007749&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Evidence Makgopa', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Makgopa&background=007749&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Lyle Foster', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Foster&background=007749&color=fff&size=128&font-size=0.33', rating: 75 }
        ]
    },
    {
        id: 'kr', name: 'Coreia do Sul', group: 'Grupo A', flag: 'kr.svg', subtitle: 'Ásia', titles: 0, rank: '23º', afiliation: 'AFC', rare: false, color: '#C60C30',
        players: [
            { name: 'Jo Hyeon-woo', pos: 'GOL', number: 21, photo: 'https://ui-avatars.com/api/?name=Jo&background=C60C30&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Seol Young-woo', pos: 'LAT', number: 22, photo: 'https://ui-avatars.com/api/?name=Seol&background=C60C30&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Kim Min-jae', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Kim&background=C60C30&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Kim Young-gwon', pos: 'ZAG', number: 19, photo: 'https://ui-avatars.com/api/?name=Kim+YG&background=C60C30&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Kim Jin-su', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Kim+JS&background=C60C30&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Hwang In-beom', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Hwang&background=C60C30&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Lee Jae-sung', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Lee&background=C60C30&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Lee Kang-in', pos: 'MEI', number: 18, photo: 'https://ui-avatars.com/api/?name=Lee+KI&background=C60C30&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Son Heung-min', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Son&background=C60C30&color=fff&size=128&font-size=0.33', rating: 87 },
            { name: 'Hwang Hee-chan', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Hwang+HC&background=C60C30&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Cho Gue-sung', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Cho&background=C60C30&color=fff&size=128&font-size=0.33', rating: 75 }
        ]
    },
    {
        id: 'cz', name: 'República Tcheca', group: 'Grupo A', flag: 'cz.svg', subtitle: 'Europa', titles: 0, rank: '30º', afiliation: 'UEFA', rare: false, color: '#11457E',
        players: [
            { name: 'Matěj Kovář', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Kovar&background=11457E&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Vladimír Coufal', pos: 'LAT', number: 5, photo: 'https://ui-avatars.com/api/?name=Coufal&background=11457E&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Jakub Brabec', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Brabec&background=11457E&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'David Zima', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Zima&background=11457E&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'David Jurásek', pos: 'LAT', number: 12, photo: 'https://ui-avatars.com/api/?name=Jurasek&background=11457E&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Tomáš Souček', pos: 'VOL', number: 22, photo: 'https://ui-avatars.com/api/?name=Soucek&background=11457E&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'Alex Král', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Kral&background=11457E&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Michal Sadílek', pos: 'MEI', number: 7, photo: 'https://ui-avatars.com/api/?name=Sadilek&background=11457E&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Václav Černý', pos: 'ATA', number: 18, photo: 'https://ui-avatars.com/api/?name=Cerny&background=11457E&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Adam Hložek', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Hlozek&background=11457E&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Patrik Schick', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Schick&background=11457E&color=fff&size=128&font-size=0.33', rating: 84 }
        ]
    },

    // ======================
    // Grupo B
    // ======================
    {
        id: 'ca', name: 'Canadá', group: 'Grupo B', flag: 'ca.svg', subtitle: 'Sede / Concacaf', titles: 0, rank: '40º', afiliation: 'CONCACAF', rare: false, color: '#FF0000',
        players: [
            { name: 'Max Crépeau', pos: 'GOL', number: 16, photo: 'https://ui-avatars.com/api/?name=Crepeau&background=FF0000&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Alistair Johnston', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Johnston&background=FF0000&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Moïse Bombito', pos: 'ZAG', number: 15, photo: 'https://ui-avatars.com/api/?name=Bombito&background=FF0000&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Derek Cornelius', pos: 'ZAG', number: 13, photo: 'https://ui-avatars.com/api/?name=Cornelius&background=FF0000&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Alphonso Davies', pos: 'LAT', number: 19, photo: 'https://ui-avatars.com/api/?name=Davies&background=FF0000&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'Ismaël Koné', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Kone&background=FF0000&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Stephen Eustáquio', pos: 'VOL', number: 7, photo: 'https://ui-avatars.com/api/?name=Eustaquio&background=FF0000&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Jacob Shaffelburg', pos: 'MEI', number: 14, photo: 'https://ui-avatars.com/api/?name=Shaffelburg&background=FF0000&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Liam Millar', pos: 'MEI', number: 23, photo: 'https://ui-avatars.com/api/?name=Millar&background=FF0000&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Jonathan David', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=David&background=FF0000&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Cyle Larin', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Larin&background=FF0000&color=fff&size=128&font-size=0.33', rating: 77 }
        ]
    },
    {
        id: 'ba', name: 'Bósnia e Herzegovina', group: 'Grupo B', flag: 'ba.svg', subtitle: 'Europa', titles: 0, rank: '58º', afiliation: 'UEFA', rare: false, color: '#001489',
        players: [
            { name: 'Ibrahim Šehić', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Sehic&background=001489&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Amar Dedić', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Dedic&background=001489&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Anel Ahmedhodžić', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Ahmedhodzic&background=001489&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Sead Kolašinac', pos: 'ZAG', number: 6, photo: 'https://ui-avatars.com/api/?name=Kolasinac&background=001489&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Jusuf Gazibegović', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Gazibegovic&background=001489&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Gojko Cimirot', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Cimirot&background=001489&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Miralem Pjanić', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Pjanic&background=001489&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Rade Krunić', pos: 'MEI', number: 13, photo: 'https://ui-avatars.com/api/?name=Krunic&background=001489&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Amar Rahmanović', pos: 'MEI', number: 7, photo: 'https://ui-avatars.com/api/?name=Rahmanovic&background=001489&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Edin Džeko', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Dzeko&background=001489&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Ermedin Demirović', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Demirovic&background=001489&color=fff&size=128&font-size=0.33', rating: 79 }
        ]
    },
    {
        id: 'qa', name: 'Catar', group: 'Grupo B', flag: 'qa.svg', subtitle: 'Ásia', titles: 0, rank: '35º', afiliation: 'AFC', rare: false, color: '#8D1B3D',
        players: [
            { name: 'Meshaal Barsham', pos: 'GOL', number: 22, photo: 'https://ui-avatars.com/api/?name=Barsham&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Pedro Miguel', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Pedro&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Al-Mahdi Ali', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Ali&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Lucas Mendes', pos: 'ZAG', number: 12, photo: 'https://ui-avatars.com/api/?name=Mendes&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Mohammed Waad', pos: 'LAT', number: 4, photo: 'https://ui-avatars.com/api/?name=Waad&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 67 },
            { name: 'Ahmed Fatehi', pos: 'VOL', number: 20, photo: 'https://ui-avatars.com/api/?name=Fatehi&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Jassem Gaber', pos: 'VOL', number: 24, photo: 'https://ui-avatars.com/api/?name=Gaber&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 66 },
            { name: 'Hassan Al-Haydos', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Haydos&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Akram Afif', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Afif&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Almoez Ali', pos: 'ATA', number: 19, photo: 'https://ui-avatars.com/api/?name=Almoez&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Yusuf Abdurisag', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Yusuf&background=8D1B3D&color=fff&size=128&font-size=0.33', rating: 66 }
        ]
    },
    {
        id: 'ch', name: 'Suíça', group: 'Grupo B', flag: 'ch.svg', subtitle: 'Europa', titles: 0, rank: '15º', afiliation: 'UEFA', rare: false, color: '#D52B1E',
        players: [
            { name: 'Yann Sommer', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Sommer&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Manuel Akanji', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Akanji&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Fabian Schär', pos: 'ZAG', number: 22, photo: 'https://ui-avatars.com/api/?name=Schar&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Ricardo Rodriguez', pos: 'ZAG', number: 13, photo: 'https://ui-avatars.com/api/?name=Rodriguez&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'S. Widmer', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Widmer&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Remo Freuler', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Freuler&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Granit Xhaka', pos: 'VOL', number: 10, photo: 'https://ui-avatars.com/api/?name=Xhaka&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Dan Ndoye', pos: 'MEI', number: 19, photo: 'https://ui-avatars.com/api/?name=Ndoye&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Ruben Vargas', pos: 'MEI', number: 17, photo: 'https://ui-avatars.com/api/?name=Vargas&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Breel Embolo', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Embolo&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Kwadwo Duah', pos: 'ATA', number: 18, photo: 'https://ui-avatars.com/api/?name=Duah&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 72 }
        ]
    },

    // ======================
    // Grupo C
    // ======================
    {
        id: 'br', name: 'Brasil', group: 'Grupo C', flag: 'br.svg', subtitle: 'Único Pentacampeão', titles: 5, rank: '5º', afiliation: 'CONMEBOL', rare: true, color: '#FDB913',
        players: [
            { name: 'Alisson', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Alisson&background=FDB913&color=fff&size=128&font-size=0.33', rating: 89 },
            { name: 'Danilo', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Danilo&background=FDB913&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Marquinhos', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Marquinhos&background=FDB913&color=fff&size=128&font-size=0.33', rating: 87 },
            { name: 'Gabriel Magalhães', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Gabriel&background=FDB913&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Guilherme Arana', pos: 'LAT', number: 6, photo: 'https://ui-avatars.com/api/?name=Arana&background=FDB913&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Bruno Guimarães', pos: 'VOL', number: 5, photo: 'https://ui-avatars.com/api/?name=Bruno+G&background=FDB913&color=fff&size=128&font-size=0.33', rating: 85 },
            { name: 'João Gomes', pos: 'VOL', number: 15, photo: 'https://ui-avatars.com/api/?name=Joao+Gomes&background=FDB913&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Lucas Paquetá', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Paqueta&background=FDB913&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Rodrygo', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Rodrygo&background=FDB913&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Vinícius Jr.', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Vinicius+Jr&background=FDB913&color=fff&size=128&font-size=0.33', rating: 91 },
            { name: 'Endrick', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Endrick&background=FDB913&color=fff&size=128&font-size=0.33', rating: 80 }
        ]
    },
    {
        id: 'ma', name: 'Marrocos', group: 'Grupo C', flag: 'ma.svg', subtitle: 'África', titles: 0, rank: '14º', afiliation: 'CAF', rare: false, color: '#C1272D',
        players: [
            { name: 'Yassine Bounou', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Bounou&background=C1272D&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Achraf Hakimi', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Hakimi&background=C1272D&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Nayef Aguerd', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Aguerd&background=C1272D&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Romain Saïss', pos: 'ZAG', number: 6, photo: 'https://ui-avatars.com/api/?name=Saiss&background=C1272D&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Yahia Attiyat Allah', pos: 'LAT', number: 25, photo: 'https://ui-avatars.com/api/?name=Attiyat&background=C1272D&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Sofyan Amrabat', pos: 'VOL', number: 4, photo: 'https://ui-avatars.com/api/?name=Amrabat&background=C1272D&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Azzedine Ounahi', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Ounahi&background=C1272D&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Brahim Díaz', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Brahim&background=C1272D&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Hakim Ziyech', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Ziyech&background=C1272D&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Y. En-Nesyri', pos: 'ATA', number: 19, photo: 'https://ui-avatars.com/api/?name=EnNesyri&background=C1272D&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Ayoub El Kaabi', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=ElKaabi&background=C1272D&color=fff&size=128&font-size=0.33', rating: 79 }
        ]
    },
    {
        id: 'ht', name: 'Haiti', group: 'Grupo C', flag: 'ht.svg', subtitle: 'Concacaf', titles: 0, rank: '86º', afiliation: 'CONCACAF', rare: false, color: '#00209F',
        players: [
            { name: 'Johny Placide', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Placide&background=00209F&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Carlens Arcus', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Arcus&background=00209F&color=fff&size=128&font-size=0.33', rating: 67 },
            { name: 'Ricardo Adé', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Ade&background=00209F&color=fff&size=128&font-size=0.33', rating: 69 },
            { name: 'Garven-Michée Metusala', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Metusala&background=00209F&color=fff&size=128&font-size=0.33', rating: 66 },
            { name: 'Alex Christian', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Christian&background=00209F&color=fff&size=128&font-size=0.33', rating: 65 },
            { name: 'Bryan Alceus', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Alceus&background=00209F&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Leverton Pierre', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Pierre&background=00209F&color=fff&size=128&font-size=0.33', rating: 67 },
            { name: 'Duckens Nazon', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Nazon&background=00209F&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Frantzdy Pierrot', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Pierrot&background=00209F&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Carnejy Antoine', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Antoine&background=00209F&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Mondy Prunier', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Prunier&background=00209F&color=fff&size=128&font-size=0.33', rating: 69 }
        ]
    },
    {
        id: 'sc', name: 'Escócia', group: 'Grupo C', flag: 'sc.svg', subtitle: 'Europa', titles: 0, rank: '34º', afiliation: 'UEFA', rare: false, color: '#004B87',
        players: [
            { name: 'Craig Gordon', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Gordon&background=004B87&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Andy Robertson', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Robertson&background=004B87&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Kieran Tierney', pos: 'ZAG', number: 6, photo: 'https://ui-avatars.com/api/?name=Tierney&background=004B87&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Scott McKenna', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=McKenna&background=004B87&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Callum McGregor', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=McGregor&background=004B87&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'John McGinn', pos: 'MEI', number: 7, photo: 'https://ui-avatars.com/api/?name=McGinn&background=004B87&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Scott McTominay', pos: 'MEI', number: 4, photo: 'https://ui-avatars.com/api/?name=McTominay&background=004B87&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Ryan Christie', pos: 'MEI', number: 11, photo: 'https://ui-avatars.com/api/?name=Christie&background=004B87&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Billy Gilmour', pos: 'VOL', number: 14, photo: 'https://ui-avatars.com/api/?name=Gilmour&background=004B87&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Ché Adams', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Adams&background=004B87&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Lyndon Dykes', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Dykes&background=004B87&color=fff&size=128&font-size=0.33', rating: 76 }
        ]
    },

    // ======================
    // Grupo D
    // ======================
    {
        id: 'us', name: 'EUA', group: 'Grupo D', flag: 'us.svg', subtitle: 'Sede / Concacaf', titles: 0, rank: '13º', afiliation: 'CONCACAF', rare: false, color: '#002868',
        players: [
            { name: 'Matt Turner', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Turner&background=002868&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Joe Scally', pos: 'LAT', number: 22, photo: 'https://ui-avatars.com/api/?name=Scally&background=002868&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Chris Richards', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Richards&background=002868&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Tim Ream', pos: 'ZAG', number: 13, photo: 'https://ui-avatars.com/api/?name=Ream&background=002868&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Antonee Robinson', pos: 'LAT', number: 5, photo: 'https://ui-avatars.com/api/?name=Robinson&background=002868&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Tyler Adams', pos: 'VOL', number: 4, photo: 'https://ui-avatars.com/api/?name=Adams&background=002868&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Weston McKennie', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=McKennie&background=002868&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Gio Reyna', pos: 'MEI', number: 7, photo: 'https://ui-avatars.com/api/?name=Reyna&background=002868&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Christian Pulisic', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Pulisic&background=002868&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'Tim Weah', pos: 'ATA', number: 21, photo: 'https://ui-avatars.com/api/?name=Weah&background=002868&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'F. Balogun', pos: 'ATA', number: 20, photo: 'https://ui-avatars.com/api/?name=Balogun&background=002868&color=fff&size=128&font-size=0.33', rating: 79 }
        ]
    },
    {
        id: 'py', name: 'Paraguai', group: 'Grupo D', flag: 'py.svg', subtitle: 'América do Sul', titles: 0, rank: '48º', afiliation: 'CONMEBOL', rare: false, color: '#D52B1E',
        players: [
            { name: 'Carlos Coronel', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Coronel&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Gustavo Gómez', pos: 'ZAG', number: 15, photo: 'https://ui-avatars.com/api/?name=Gomez&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Fabián Balbuena', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Balbuena&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Júnior Alonso', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Alonso&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Matías Espinoza', pos: 'LAT', number: 4, photo: 'https://ui-avatars.com/api/?name=Espinoza&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Mathías Villasanti', pos: 'VOL', number: 20, photo: 'https://ui-avatars.com/api/?name=Villasanti&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Andrés Cubas', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Cubas&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Miguel Almirón', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Almiron&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Julio Enciso', pos: 'MEI', number: 19, photo: 'https://ui-avatars.com/api/?name=Enciso&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Ramón Sosa', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Sosa&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Antonio Sanabria', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Sanabria&background=D52B1E&color=fff&size=128&font-size=0.33', rating: 77 }
        ]
    },
    {
        id: 'au', name: 'Austrália', group: 'Grupo D', flag: 'au.svg', subtitle: 'Oceania/Ásia', titles: 0, rank: '24º', afiliation: 'AFC', rare: false, color: '#FFCD00',
        players: [
            { name: 'Maty Ryan', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Ryan&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Gethin Jones', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Jones&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 69 },
            { name: 'Harry Souttar', pos: 'ZAG', number: 19, photo: 'https://ui-avatars.com/api/?name=Souttar&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Kye Rowles', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Rowles&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Aziz Behich', pos: 'LAT', number: 16, photo: 'https://ui-avatars.com/api/?name=Behich&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Keanu Baccus', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Baccus&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Jackson Irvine', pos: 'VOL', number: 22, photo: 'https://ui-avatars.com/api/?name=Irvine&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Connor Metcalfe', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Metcalfe&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Craig Goodwin', pos: 'ATA', number: 23, photo: 'https://ui-avatars.com/api/?name=Goodwin&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Martin Boyle', pos: 'ATA', number: 6, photo: 'https://ui-avatars.com/api/?name=Boyle&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Mitchell Duke', pos: 'ATA', number: 15, photo: 'https://ui-avatars.com/api/?name=Duke&background=FFCD00&color=fff&size=128&font-size=0.33', rating: 69 }
        ]
    },
    {
        id: 'tr', name: 'Turquia', group: 'Grupo D', flag: 'tr.svg', subtitle: 'Europa', titles: 0, rank: '26º', afiliation: 'UEFA', rare: false, color: '#E30A17',
        players: [
            { name: 'Mert Günok', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Gunok&background=E30A17&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Mert Müldür', pos: 'LAT', number: 18, photo: 'https://ui-avatars.com/api/?name=Muldur&background=E30A17&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Samet Akaydin', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Akaydin&background=E30A17&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Abdülkerim Bardakcı', pos: 'ZAG', number: 14, photo: 'https://ui-avatars.com/api/?name=Bardakci&background=E30A17&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Ferdi Kadıoğlu', pos: 'LAT', number: 20, photo: 'https://ui-avatars.com/api/?name=Kadioglu&background=E30A17&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Kaan Ayhan', pos: 'VOL', number: 22, photo: 'https://ui-avatars.com/api/?name=Ayhan&background=E30A17&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Hakan Çalhanoğlu', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Calhanoglu&background=E30A17&color=fff&size=128&font-size=0.33', rating: 85 },
            { name: 'Arda Güler', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Guler&background=E30A17&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Kenan Yıldız', pos: 'ATA', number: 19, photo: 'https://ui-avatars.com/api/?name=Yildiz&background=E30A17&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Barış Alper Yılmaz', pos: 'ATA', number: 21, photo: 'https://ui-avatars.com/api/?name=Yilmaz&background=E30A17&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Kerem Aktürkoğlu', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Akturkoglu&background=E30A17&color=fff&size=128&font-size=0.33', rating: 80 }
        ]
    },

    // ======================
    // Grupo E
    // ======================
    {
        id: 'de', name: 'Alemanha', group: 'Grupo E', flag: 'de.svg', subtitle: 'Europa', titles: 4, rank: '11º', afiliation: 'UEFA', rare: true, color: '#000000',
        players: [
            { name: 'Ter Stegen', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Ter+Stegen&background=000000&color=fff&size=128&font-size=0.33', rating: 89 },
            { name: 'Joshua Kimmich', pos: 'LAT', number: 6, photo: 'https://ui-avatars.com/api/?name=Kimmich&background=000000&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Antonio Rüdiger', pos: 'ZAG', number: 2, photo: 'https://ui-avatars.com/api/?name=Rudiger&background=000000&color=fff&size=128&font-size=0.33', rating: 88 },
            { name: 'Jonathan Tah', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Tah&background=000000&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'David Raum', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Raum&background=000000&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Robert Andrich', pos: 'VOL', number: 23, photo: 'https://ui-avatars.com/api/?name=Andrich&background=000000&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Pascal Groß', pos: 'VOL', number: 5, photo: 'https://ui-avatars.com/api/?name=Gross&background=000000&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Florian Wirtz', pos: 'MEI', number: 17, photo: 'https://ui-avatars.com/api/?name=Wirtz&background=000000&color=fff&size=128&font-size=0.33', rating: 87 },
            { name: 'Jamal Musiala', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Musiala&background=000000&color=fff&size=128&font-size=0.33', rating: 88 },
            { name: 'Leroy Sané', pos: 'ATA', number: 19, photo: 'https://ui-avatars.com/api/?name=Sane&background=000000&color=fff&size=128&font-size=0.33', rating: 85 },
            { name: 'Kai Havertz', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Havertz&background=000000&color=fff&size=128&font-size=0.33', rating: 84 }
        ]
    },
    {
        id: 'cw', name: 'Curaçao', group: 'Grupo E', flag: 'cw.svg', subtitle: 'Concacaf', titles: 0, rank: '78º', afiliation: 'CONCACAF', rare: false, color: '#002B7F',
        players: [
            { name: 'Eloy Room', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Room&background=002B7F&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Cuco Martina', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Martina&background=002B7F&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Juninho Bacuna', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Bacuna&background=002B7F&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Leandro Bacuna', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Leandro&background=002B7F&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Rangelo Janga', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Janga&background=002B7F&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Kenji Gorré', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Gorre&background=002B7F&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Brandley Kuwas', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Kuwas&background=002B7F&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Gevaro Nepomuceno', pos: 'MEI', number: 14, photo: 'https://ui-avatars.com/api/?name=Nepomuceno&background=002B7F&color=fff&size=128&font-size=0.33', rating: 69 },
            { name: 'Shanon Carmelia', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Carmelia&background=002B7F&color=fff&size=128&font-size=0.33', rating: 67 },
            { name: 'Juriën Gaari', pos: 'LAT', number: 12, photo: 'https://ui-avatars.com/api/?name=Gaari&background=002B7F&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Michael Maria', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Maria&background=002B7F&color=fff&size=128&font-size=0.33', rating: 66 }
        ]
    },
    {
        id: 'ci', name: 'Costa do Marfim', group: 'Grupo E', flag: 'ci.svg', subtitle: 'África', titles: 0, rank: '37º', afiliation: 'CAF', rare: false, color: '#FF8200',
        players: [
            { name: 'Yahia Fofana', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Fofana&background=FF8200&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Wilfried Singo', pos: 'LAT', number: 5, photo: 'https://ui-avatars.com/api/?name=Singo&background=FF8200&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Odilon Kossounou', pos: 'ZAG', number: 7, photo: 'https://ui-avatars.com/api/?name=Kossounou&background=FF8200&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Evan Ndicka', pos: 'ZAG', number: 21, photo: 'https://ui-avatars.com/api/?name=Ndicka&background=FF8200&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Ghislain Konan', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Konan&background=FF8200&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Franck Kessié', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Kessie&background=FF8200&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Seko Fofana', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=FofanaS&background=FF8200&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Ibrahim Sangaré', pos: 'VOL', number: 18, photo: 'https://ui-avatars.com/api/?name=Sangare&background=FF8200&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Simon Adingra', pos: 'ATA', number: 24, photo: 'https://ui-avatars.com/api/?name=Adingra&background=FF8200&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Oumar Diakité', pos: 'ATA', number: 14, photo: 'https://ui-avatars.com/api/?name=Diakite&background=FF8200&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Sebastien Haller', pos: 'ATA', number: 22, photo: 'https://ui-avatars.com/api/?name=Haller&background=FF8200&color=fff&size=128&font-size=0.33', rating: 79 }
        ]
    },
    {
        id: 'ec', name: 'Equador', group: 'Grupo E', flag: 'ec.svg', subtitle: 'América do Sul', titles: 0, rank: '27º', afiliation: 'CONMEBOL', rare: false, color: '#FFDD00',
        players: [
            { name: 'Hernán Galíndez', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Galindez&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Angelo Preciado', pos: 'LAT', number: 17, photo: 'https://ui-avatars.com/api/?name=Preciado&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Félix Torres', pos: 'ZAG', number: 2, photo: 'https://ui-avatars.com/api/?name=Torres&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Willian Pacho', pos: 'ZAG', number: 6, photo: 'https://ui-avatars.com/api/?name=Pacho&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Piero Hincapié', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Hincapie&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Moisés Caicedo', pos: 'VOL', number: 23, photo: 'https://ui-avatars.com/api/?name=Caicedo&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Alan Franco', pos: 'VOL', number: 21, photo: 'https://ui-avatars.com/api/?name=Franco&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Kendry Páez', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Paez&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Jeremy Sarmiento', pos: 'MEI', number: 16, photo: 'https://ui-avatars.com/api/?name=Sarmiento&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'John Yeboah', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Yeboah&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Enner Valencia', pos: 'ATA', number: 13, photo: 'https://ui-avatars.com/api/?name=Valencia&background=FFDD00&color=fff&size=128&font-size=0.33', rating: 78 }
        ]
    },

    // ======================
    // Grupo F
    // ======================
    {
        id: 'nl', name: 'Holanda', group: 'Grupo F', flag: 'nl.svg', subtitle: 'Europa', titles: 0, rank: '7º', afiliation: 'UEFA', rare: false, color: '#F36C21',
        players: [
            { name: 'B. Verbruggen', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Verbruggen&background=F36C21&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Denzel Dumfries', pos: 'LAT', number: 22, photo: 'https://ui-avatars.com/api/?name=Dumfries&background=F36C21&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Virgil van Dijk', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=VanDijk&background=F36C21&color=fff&size=128&font-size=0.33', rating: 89 },
            { name: 'Nathan Aké', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Ake&background=F36C21&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Micky van de Ven', pos: 'ZAG', number: 15, photo: 'https://ui-avatars.com/api/?name=VandeVen&background=F36C21&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Jerdy Schouten', pos: 'VOL', number: 24, photo: 'https://ui-avatars.com/api/?name=Schouten&background=F36C21&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'T. Reijnders', pos: 'MEI', number: 14, photo: 'https://ui-avatars.com/api/?name=Reijnders&background=F36C21&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Xavi Simons', pos: 'MEI', number: 7, photo: 'https://ui-avatars.com/api/?name=Simons&background=F36C21&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Cody Gakpo', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Gakpo&background=F36C21&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'Memphis Depay', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Memphis&background=F36C21&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Donyell Malen', pos: 'ATA', number: 18, photo: 'https://ui-avatars.com/api/?name=Malen&background=F36C21&color=fff&size=128&font-size=0.33', rating: 81 }
        ]
    },
    {
        id: 'jp', name: 'Japão', group: 'Grupo F', flag: 'jp.svg', subtitle: 'Ásia', titles: 0, rank: '18º', afiliation: 'AFC', rare: false, color: '#000555',
        players: [
            { name: 'Z. Suzuki', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Suzuki&background=000555&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'K. Itakura', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Itakura&background=000555&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'S. Taniguchi', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Taniguchi&background=000555&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Y. Machida', pos: 'ZAG', number: 16, photo: 'https://ui-avatars.com/api/?name=Machida&background=000555&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'W. Endo', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Endo&background=000555&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'H. Morita', pos: 'VOL', number: 5, photo: 'https://ui-avatars.com/api/?name=Morita&background=000555&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'T. Kubo', pos: 'MEI', number: 20, photo: 'https://ui-avatars.com/api/?name=Kubo&background=000555&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'R. Doan', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Doan&background=000555&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'K. Mitoma', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Mitoma&background=000555&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'T. Minamino', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Minamino&background=000555&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'A. Ueda', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Ueda&background=000555&color=fff&size=128&font-size=0.33', rating: 77 }
        ]
    },
    {
        id: 'se', name: 'Suécia', group: 'Grupo F', flag: 'se.svg', subtitle: 'Europa', titles: 0, rank: '28º', afiliation: 'UEFA', rare: false, color: '#006AA7',
        players: [
            { name: 'R. Olsen', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Olsen&background=006AA7&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Emil Krafth', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Krafth&background=006AA7&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Victor Lindelöf', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Lindelof&background=006AA7&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Isak Hien', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Hien&background=006AA7&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Ludwig Augustinsson', pos: 'LAT', number: 5, photo: 'https://ui-avatars.com/api/?name=Augustinsson&background=006AA7&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Jens Cajuste', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Cajuste&background=006AA7&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Hugo Larsson', pos: 'VOL', number: 16, photo: 'https://ui-avatars.com/api/?name=Larsson&background=006AA7&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Dejan Kulusevski', pos: 'MEI', number: 21, photo: 'https://ui-avatars.com/api/?name=Kulusevski&background=006AA7&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Emil Forsberg', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Forsberg&background=006AA7&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Alexander Isak', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Isak&background=006AA7&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'Viktor Gyökeres', pos: 'ATA', number: 17, photo: 'https://ui-avatars.com/api/?name=Gyokeres&background=006AA7&color=fff&size=128&font-size=0.33', rating: 82 }
        ]
    },
    {
        id: 'tn', name: 'Tunísia', group: 'Grupo F', flag: 'tn.svg', subtitle: 'África', titles: 0, rank: '41º', afiliation: 'CAF', rare: false, color: '#E70013',
        players: [
            { name: 'Aymen Dahmen', pos: 'GOL', number: 16, photo: 'https://ui-avatars.com/api/?name=Dahmen&background=E70013&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Wajdi Kechrida', pos: 'LAT', number: 21, photo: 'https://ui-avatars.com/api/?name=Kechrida&background=E70013&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Montassar Talbi', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Talbi&background=E70013&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Yassine Meriah', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Meriah&background=E70013&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Ali Abdi', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Abdi&background=E70013&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Ellyes Skhiri', pos: 'VOL', number: 17, photo: 'https://ui-avatars.com/api/?name=Skhiri&background=E70013&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Aïssa Laïdouni', pos: 'VOL', number: 14, photo: 'https://ui-avatars.com/api/?name=Laidouni&background=E70013&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Hamza Rafia', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Rafia&background=E70013&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Elias Achouri', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Achouri&background=E70013&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Youssef Msakni', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Msakni&background=E70013&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Haithem Jouini', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Jouini&background=E70013&color=fff&size=128&font-size=0.33', rating: 68 }
        ]
    },

    // ======================
    // Grupo G
    // ======================
    {
        id: 'be', name: 'Bélgica', group: 'Grupo G', flag: 'be.svg', subtitle: 'Europa', titles: 0, rank: '8º', afiliation: 'UEFA', rare: false, color: '#E31D1C',
        players: [
            { name: 'K. Casteels', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Casteels&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'T. Castagne', pos: 'LAT', number: 21, photo: 'https://ui-avatars.com/api/?name=Castagne&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'W. Faes', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Faes&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Z. Debast', pos: 'ZAG', number: 2, photo: 'https://ui-avatars.com/api/?name=Debast&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'A. Theate', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Theate&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'A. Onana', pos: 'VOL', number: 24, photo: 'https://ui-avatars.com/api/?name=Onana&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Y. Tielemans', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Tielemans&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'K. De Bruyne', pos: 'MEI', number: 7, photo: 'https://ui-avatars.com/api/?name=De+Bruyne&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 90 },
            { name: 'J. Doku', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Doku&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'L. Trossard', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Trossard&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'R. Lukaku', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Lukaku&background=E31D1C&color=fff&size=128&font-size=0.33', rating: 83 }
        ]
    },
    {
        id: 'eg', name: 'Egito', group: 'Grupo G', flag: 'eg.svg', subtitle: 'África', titles: 0, rank: '36º', afiliation: 'CAF', rare: false, color: '#C1272D',
        players: [
            { name: 'M. El Shenawy', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Shenawy&background=C1272D&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Mohamed Hany', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Hany&background=C1272D&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Ramy Rabia', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Rabia&background=C1272D&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Mohamed Abdelmonem', pos: 'ZAG', number: 24, photo: 'https://ui-avatars.com/api/?name=Abdelmonem&background=C1272D&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Mohamed Hamdy', pos: 'LAT', number: 12, photo: 'https://ui-avatars.com/api/?name=Hamdy&background=C1272D&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Marwan Attia', pos: 'VOL', number: 14, photo: 'https://ui-avatars.com/api/?name=Attia&background=C1272D&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Hamdi Fathi', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Fathi&background=C1272D&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Mohamed Salah', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Salah&background=C1272D&color=fff&size=128&font-size=0.33', rating: 89 },
            { name: 'Trézéguet', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Trezeguet&background=C1272D&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Mostafa Mohamed', pos: 'ATA', number: 19, photo: 'https://ui-avatars.com/api/?name=Mostafa&background=C1272D&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Omar Marmoush', pos: 'ATA', number: 22, photo: 'https://ui-avatars.com/api/?name=Marmoush&background=C1272D&color=fff&size=128&font-size=0.33', rating: 79 }
        ]
    },
    {
        id: 'ir', name: 'Irã', group: 'Grupo G', flag: 'ir.svg', subtitle: 'Ásia', titles: 0, rank: '20º', afiliation: 'AFC', rare: false, color: '#239F40',
        players: [
            { name: 'A. Beiranvand', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Beiranvand&background=239F40&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'R. Rezaeian', pos: 'LAT', number: 23, photo: 'https://ui-avatars.com/api/?name=Rezaeian&background=239F40&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'H. Kanaanizadegan', pos: 'ZAG', number: 13, photo: 'https://ui-avatars.com/api/?name=Kanaani&background=239F40&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Shoja Khalilzadeh', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Shoja&background=239F40&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Milad Mohammadi', pos: 'LAT', number: 5, photo: 'https://ui-avatars.com/api/?name=Mohammadi&background=239F40&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Saeid Ezatolahi', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Ezatolahi&background=239F40&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Saman Ghoddos', pos: 'MEI', number: 14, photo: 'https://ui-avatars.com/api/?name=Ghoddos&background=239F40&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Ali Gholizadeh', pos: 'MEI', number: 17, photo: 'https://ui-avatars.com/api/?name=Gholizadeh&background=239F40&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Alireza Jahanbakhsh', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Jahanbakhsh&background=239F40&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Mehdi Taremi', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Taremi&background=239F40&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Sardar Azmoun', pos: 'ATA', number: 20, photo: 'https://ui-avatars.com/api/?name=Azmoun&background=239F40&color=fff&size=128&font-size=0.33', rating: 78 }
        ]
    },
    {
        id: 'nz', name: 'Nova Zelândia', group: 'Grupo G', flag: 'nz.svg', subtitle: 'Oceania', titles: 0, rank: '107º', afiliation: 'OFC', rare: false, color: '#000000',
        players: [
            { name: 'Alex Paulsen', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Paulsen&background=000000&color=fff&size=128&font-size=0.33', rating: 67 },
            { name: 'Liberato Cacace', pos: 'LAT', number: 13, photo: 'https://ui-avatars.com/api/?name=Cacace&background=000000&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Michael Boxall', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Boxall&background=000000&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Tyler Bindon', pos: 'ZAG', number: 15, photo: 'https://ui-avatars.com/api/?name=Bindon&background=000000&color=fff&size=128&font-size=0.33', rating: 66 },
            { name: 'Tim Payne', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Payne&background=000000&color=fff&size=128&font-size=0.33', rating: 67 },
            { name: 'Marko Stamenic', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Stamenic&background=000000&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Matthew Garbett', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Garbett&background=000000&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Sarpreet Singh', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Singh&background=000000&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Ben Waine', pos: 'ATA', number: 19, photo: 'https://ui-avatars.com/api/?name=Waine&background=000000&color=fff&size=128&font-size=0.33', rating: 66 },
            { name: 'Chris Wood', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Wood&background=000000&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Kosta Barbarouses', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Kosta&background=000000&color=fff&size=128&font-size=0.33', rating: 68 }
        ]
    },

    // ======================
    // Grupo H
    // ======================
    {
        id: 'es', name: 'Espanha', group: 'Grupo H', flag: 'es.svg', subtitle: 'Europa', titles: 1, rank: '3º', afiliation: 'UEFA', rare: true, color: '#AA151B',
        players: [
            { name: 'Unai Simón', pos: 'GOL', number: 23, photo: 'https://ui-avatars.com/api/?name=Unai+Simon&background=AA151B&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Dani Carvajal', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Carvajal&background=AA151B&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Robin Le Normand', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Le+Normand&background=AA151B&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Aymeric Laporte', pos: 'ZAG', number: 14, photo: 'https://ui-avatars.com/api/?name=Laporte&background=AA151B&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'Marc Cucurella', pos: 'LAT', number: 24, photo: 'https://ui-avatars.com/api/?name=Cucurella&background=AA151B&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Rodri', pos: 'VOL', number: 16, photo: 'https://ui-avatars.com/api/?name=Rodri&background=AA151B&color=fff&size=128&font-size=0.33', rating: 91 },
            { name: 'Fabián Ruiz', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Fabian&background=AA151B&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Pedri', pos: 'MEI', number: 20, photo: 'https://ui-avatars.com/api/?name=Pedri&background=AA151B&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Lamine Yamal', pos: 'ATA', number: 19, photo: 'https://ui-avatars.com/api/?name=Yamal&background=AA151B&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Nico Williams', pos: 'ATA', number: 17, photo: 'https://ui-avatars.com/api/?name=Nico+W&background=AA151B&color=fff&size=128&font-size=0.33', rating: 85 },
            { name: 'Álvaro Morata', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Morata&background=AA151B&color=fff&size=128&font-size=0.33', rating: 83 }
        ]
    },
    {
        id: 'cv', name: 'Cabo Verde', group: 'Grupo H', flag: 'cv.svg', subtitle: 'África', titles: 0, rank: '65º', afiliation: 'CAF', rare: false, color: '#003893',
        players: [
            { name: 'Vozinha', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Vozinha&background=003893&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Stopira', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Stopira&background=003893&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Roberto Lopes', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Lopes&background=003893&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Carlos Ponck', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Ponck&background=003893&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Jamiro Monteiro', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Monteiro&background=003893&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Kenny Rocha', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Rocha&background=003893&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Ryan Mendes', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Mendes&background=003893&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Garry Rodrigues', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Rodrigues&background=003893&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Bebé', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Bebe&background=003893&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Djaniny', pos: 'ATA', number: 21, photo: 'https://ui-avatars.com/api/?name=Djaniny&background=003893&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Willy Semedo', pos: 'ATA', number: 19, photo: 'https://ui-avatars.com/api/?name=Semedo&background=003893&color=fff&size=128&font-size=0.33', rating: 70 }
        ]
    },
    {
        id: 'sa', name: 'Arábia Saudita', group: 'Grupo H', flag: 'sa.svg', subtitle: 'Ásia', titles: 0, rank: '56º', afiliation: 'AFC', rare: false, color: '#006C35',
        players: [
            { name: 'Mohammed Al-Owais', pos: 'GOL', number: 21, photo: 'https://ui-avatars.com/api/?name=Owais&background=006C35&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Saud Abdulhamid', pos: 'LAT', number: 12, photo: 'https://ui-avatars.com/api/?name=Saud&background=006C35&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Ali Lajami', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Lajami&background=006C35&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Ali Al-Bulaihi', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Bulaihi&background=006C35&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Yasir Al-Shahrani', pos: 'LAT', number: 13, photo: 'https://ui-avatars.com/api/?name=Shahrani&background=006C35&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Abdullah Al-Khaibari', pos: 'VOL', number: 15, photo: 'https://ui-avatars.com/api/?name=Khaibari&background=006C35&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Mohamed Kanno', pos: 'VOL', number: 23, photo: 'https://ui-avatars.com/api/?name=Kanno&background=006C35&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Firas Al-Buraikan', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Buraikan&background=006C35&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Salem Al-Dawsari', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Salem&background=006C35&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Abdulrahman Ghareeb', pos: 'ATA', number: 18, photo: 'https://ui-avatars.com/api/?name=Ghareeb&background=006C35&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Saleh Al-Shehri', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Shehri&background=006C35&color=fff&size=128&font-size=0.33', rating: 71 }
        ]
    },
    {
        id: 'uy', name: 'Uruguai', group: 'Grupo H', flag: 'uy.svg', subtitle: 'América do Sul', titles: 2, rank: '11º', afiliation: 'CONMEBOL', rare: true, color: '#00B1E1',
        players: [
            { name: 'Sergio Rochet', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Rochet&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'N. Nández', pos: 'LAT', number: 8, photo: 'https://ui-avatars.com/api/?name=Nandez&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Ronald Araújo', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Araujo&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Josema Giménez', pos: 'ZAG', number: 2, photo: 'https://ui-avatars.com/api/?name=Gimenez&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'M. Olivera', pos: 'LAT', number: 16, photo: 'https://ui-avatars.com/api/?name=Olivera&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'M. Ugarte', pos: 'VOL', number: 5, photo: 'https://ui-avatars.com/api/?name=Ugarte&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Fede Valverde', pos: 'MEI', number: 15, photo: 'https://ui-avatars.com/api/?name=Valverde&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 89 },
            { name: 'Nicolás de la Cruz', pos: 'MEI', number: 7, photo: 'https://ui-avatars.com/api/?name=DelaCruz&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Facundo Pellistri', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Pellistri&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Maximilian Araújo', pos: 'ATA', number: 20, photo: 'https://ui-avatars.com/api/?name=Araujo&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Darwin Núñez', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Nunez&background=00B1E1&color=fff&size=128&font-size=0.33', rating: 84 }
        ]
    },

    // ======================
    // Grupo I
    // ======================
    {
        id: 'fr', name: 'França', group: 'Grupo I', flag: 'fr.svg', subtitle: 'Europa', titles: 2, rank: '2º', afiliation: 'UEFA', rare: true, color: '#002395',
        players: [
            { name: 'Mike Maignan', pos: 'GOL', number: 16, photo: 'https://ui-avatars.com/api/?name=Maignan&background=002395&color=fff&size=128&font-size=0.33', rating: 87 },
            { name: 'Jules Koundé', pos: 'LAT', number: 5, photo: 'https://ui-avatars.com/api/?name=Kounde&background=002395&color=fff&size=128&font-size=0.33', rating: 85 },
            { name: 'Dayot Upamecano', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Upamecano&background=002395&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'William Saliba', pos: 'ZAG', number: 17, photo: 'https://ui-avatars.com/api/?name=Saliba&background=002395&color=fff&size=128&font-size=0.33', rating: 87 },
            { name: 'Theo Hernández', pos: 'LAT', number: 22, photo: 'https://ui-avatars.com/api/?name=Theo&background=002395&color=fff&size=128&font-size=0.33', rating: 87 },
            { name: 'Aurélien Tchouaméni', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Tchouameni&background=002395&color=fff&size=128&font-size=0.33', rating: 85 },
            { name: 'N’Golo Kanté', pos: 'VOL', number: 13, photo: 'https://ui-avatars.com/api/?name=Kante&background=002395&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Adrien Rabiot', pos: 'MEI', number: 14, photo: 'https://ui-avatars.com/api/?name=Rabiot&background=002395&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Antoine Griezmann', pos: 'MEI', number: 7, photo: 'https://ui-avatars.com/api/?name=Griezmann&background=002395&color=fff&size=128&font-size=0.33', rating: 88 },
            { name: 'Kylian Mbappé', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Mbappe&background=002395&color=fff&size=128&font-size=0.33', rating: 92 },
            { name: 'Ousmane Dembélé', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Dembele&background=002395&color=fff&size=128&font-size=0.33', rating: 86 }
        ]
    },
    {
        id: 'sn', name: 'Senegal', group: 'Grupo I', flag: 'sn.svg', subtitle: 'África', titles: 0, rank: '21º', afiliation: 'CAF', rare: false, color: '#00853F',
        players: [
            { name: 'E. Mendy', pos: 'GOL', number: 16, photo: 'https://ui-avatars.com/api/?name=Mendy&background=00853F&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'K. Koulibaly', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Koulibaly&background=00853F&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'M. Niakhaté', pos: 'ZAG', number: 19, photo: 'https://ui-avatars.com/api/?name=Niakhate&background=00853F&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'I. Jakobs', pos: 'LAT', number: 14, photo: 'https://ui-avatars.com/api/?name=Jakobs&background=00853F&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'A. Diallo', pos: 'LAT', number: 22, photo: 'https://ui-avatars.com/api/?name=Diallo&background=00853F&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'I. Gueye', pos: 'VOL', number: 5, photo: 'https://ui-avatars.com/api/?name=Gueye&background=00853F&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'P. Sarr', pos: 'VOL', number: 17, photo: 'https://ui-avatars.com/api/?name=Sarr&background=00853F&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'L. Camara', pos: 'MEI', number: 25, photo: 'https://ui-avatars.com/api/?name=Camara&background=00853F&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'S. Mané', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Mane&background=00853F&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'I. Sarr', pos: 'ATA', number: 18, photo: 'https://ui-avatars.com/api/?name=Sarr&background=00853F&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'N. Jackson', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Jackson&background=00853F&color=fff&size=128&font-size=0.33', rating: 81 }
        ]
    },
    {
        id: 'iq', name: 'Iraque', group: 'Grupo I', flag: 'iq.svg', subtitle: 'Ásia', titles: 0, rank: '68º', afiliation: 'AFC', rare: false, color: '#CE1126',
        players: [
            { name: 'Jalal Hassan', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Hassan&background=CE1126&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Ali Adnan', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Adnan&background=CE1126&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Ahmad Ibrahim', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Ibrahim&background=CE1126&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Mustafa Nadhim', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Nadhim&background=CE1126&color=fff&size=128&font-size=0.33', rating: 69 },
            { name: 'Hussein Ali', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Ali&background=CE1126&color=fff&size=128&font-size=0.33', rating: 67 },
            { name: 'Amjad Attwan', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Attwan&background=CE1126&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Bashar Resan', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Resan&background=CE1126&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Ibrahim Bayesh', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Bayesh&background=CE1126&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Ayman Hussein', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Hussein&background=CE1126&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Mohanad Ali', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Mohanad&background=CE1126&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Ali Al-Hamadi', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=AlHamadi&background=CE1126&color=fff&size=128&font-size=0.33', rating: 70 }
        ]
    },
    {
        id: 'no', name: 'Noruega', group: 'Grupo I', flag: 'no.svg', subtitle: 'Europa', titles: 0, rank: '47º', afiliation: 'UEFA', rare: false, color: '#BA0C2F',
        players: [
            { name: 'Orjan Nyland', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Nyland&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Julian Ryerson', pos: 'LAT', number: 14, photo: 'https://ui-avatars.com/api/?name=Ryerson&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Leo Östigard', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Ostigard&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Kristoffer Ajer', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Ajer&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Fredrik Björkan', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Bjorkan&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Patrick Berg', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Berg&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Sander Berge', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Berge&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Martin Ødegaard', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Odegaard&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 89 },
            { name: 'Oscar Bobb', pos: 'ATA', number: 21, photo: 'https://ui-avatars.com/api/?name=Bobb&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Erling Haaland', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Haaland&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 91 },
            { name: 'Alexander Sørloth', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Sorloth&background=BA0C2F&color=fff&size=128&font-size=0.33', rating: 81 }
        ]
    },

    // ======================
    // Grupo J
    // ======================
    {
        id: 'ar', name: 'Argentina', group: 'Grupo J', flag: 'ar.svg', subtitle: 'Atual Campeã', titles: 3, rank: '1º', afiliation: 'CONMEBOL', rare: true, color: '#74ACDF',
        players: [
            { name: 'E. Martínez', pos: 'GOL', number: 23, photo: 'https://ui-avatars.com/api/?name=Emi+Martinez&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 87 },
            { name: 'N. Molina', pos: 'LAT', number: 26, photo: 'https://ui-avatars.com/api/?name=Molina&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'C. Romero', pos: 'ZAG', number: 13, photo: 'https://ui-avatars.com/api/?name=Cuti+Romero&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'N. Otamendi', pos: 'ZAG', number: 19, photo: 'https://ui-avatars.com/api/?name=Otamendi&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'N. Tagliafico', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Tagliafico&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'R. De Paul', pos: 'VOL', number: 7, photo: 'https://ui-avatars.com/api/?name=De+Paul&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Enzo Fernández', pos: 'VOL', number: 24, photo: 'https://ui-avatars.com/api/?name=Enzo&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'A. Mac Allister', pos: 'MEI', number: 20, photo: 'https://ui-avatars.com/api/?name=Mac+Allister&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Lionel Messi', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Lionel+Messi&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 88 },
            { name: 'Lautaro Martínez', pos: 'ATA', number: 22, photo: 'https://ui-avatars.com/api/?name=Lautaro&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 87 },
            { name: 'Julián Álvarez', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Julian+Alvarez&background=74ACDF&color=fff&size=128&font-size=0.33', rating: 84 }
        ]
    },
    {
        id: 'dz', name: 'Argélia', group: 'Grupo J', flag: 'dz.svg', subtitle: 'África', titles: 0, rank: '44º', afiliation: 'CAF', rare: false, color: '#006233',
        players: [
            { name: 'Anthony Mandrea', pos: 'GOL', number: 16, photo: 'https://ui-avatars.com/api/?name=Mandrea&background=006233&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Youcef Atal', pos: 'LAT', number: 20, photo: 'https://ui-avatars.com/api/?name=Atal&background=006233&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Aïssa Mandi', pos: 'ZAG', number: 2, photo: 'https://ui-avatars.com/api/?name=Mandi&background=006233&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Ramy Bensebaini', pos: 'ZAG', number: 21, photo: 'https://ui-avatars.com/api/?name=Bensebaini&background=006233&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Rayan Aït-Nouri', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=AitNouri&background=006233&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Ismaël Bennacer', pos: 'VOL', number: 22, photo: 'https://ui-avatars.com/api/?name=Bennacer&background=006233&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'Ramiz Zerrouki', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Zerrouki&background=006233&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Riyad Mahrez', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Mahrez&background=006233&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Houssem Aouar', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Aouar&background=006233&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Said Benrahma', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Benrahma&background=006233&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Amine Gouiri', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Gouiri&background=006233&color=fff&size=128&font-size=0.33', rating: 79 }
        ]
    },
    {
        id: 'at', name: 'Áustria', group: 'Grupo J', flag: 'at.svg', subtitle: 'Europa', titles: 0, rank: '22º', afiliation: 'UEFA', rare: false, color: '#EF3340',
        players: [
            { name: 'Patrick Pentz', pos: 'GOL', number: 13, photo: 'https://ui-avatars.com/api/?name=Pentz&background=EF3340&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Stefan Posch', pos: 'LAT', number: 5, photo: 'https://ui-avatars.com/api/?name=Posch&background=EF3340&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Kevin Danso', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Danso&background=EF3340&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Philipp Lienhart', pos: 'ZAG', number: 15, photo: 'https://ui-avatars.com/api/?name=Lienhart&background=EF3340&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Nicolas Seiwald', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Seiwald&background=EF3340&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Konrad Laimer', pos: 'VOL', number: 20, photo: 'https://ui-avatars.com/api/?name=Laimer&background=EF3340&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Marcel Sabitzer', pos: 'MEI', number: 9, photo: 'https://ui-avatars.com/api/?name=Sabitzer&background=EF3340&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'C. Baumgartner', pos: 'MEI', number: 19, photo: 'https://ui-avatars.com/api/?name=Baumgartner&background=EF3340&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Romano Schmid', pos: 'MEI', number: 18, photo: 'https://ui-avatars.com/api/?name=Schmid&background=EF3340&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Patrick Wimmer', pos: 'ATA', number: 23, photo: 'https://ui-avatars.com/api/?name=Wimmer&background=EF3340&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Michael Gregoritsch', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Gregoritsch&background=EF3340&color=fff&size=128&font-size=0.33', rating: 78 }
        ]
    },
    {
        id: 'jo', name: 'Jordânia', group: 'Grupo J', flag: 'jo.svg', subtitle: 'Ásia', titles: 0, rank: '71º', afiliation: 'AFC', rare: false, color: '#CE1126',
        players: [
            { name: 'Yazid Abu Layla', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=AbuLayla&background=CE1126&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Ehsan Haddad', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Haddad&background=CE1126&color=fff&size=128&font-size=0.33', rating: 67 },
            { name: 'Yazan Al-Arab', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=AlArab&background=CE1126&color=fff&size=128&font-size=0.33', rating: 69 },
            { name: 'Abdallah Nasib', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Nasib&background=CE1126&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Salem Al-Ajalin', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=AlAjalin&background=CE1126&color=fff&size=128&font-size=0.33', rating: 66 },
            { name: 'Noor Al-Rawabdeh', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Rawabdeh&background=CE1126&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Musa Al-Taamari', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Taamari&background=CE1126&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Ali Olwan', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Olwan&background=CE1126&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Yazan Al-Naimat', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Naimat&background=CE1126&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Ibrahim Sadeh', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Sadeh&background=CE1126&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Hamza Al-Dardour', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Dardour&background=CE1126&color=fff&size=128&font-size=0.33', rating: 70 }
        ]
    },

    // ======================
    // Grupo K
    // ======================
    {
        id: 'pt', name: 'Portugal', group: 'Grupo K', flag: 'pt.svg', subtitle: 'Europa', titles: 0, rank: '6º', afiliation: 'UEFA', rare: false, color: '#046A38',
        players: [
            { name: 'Diogo Costa', pos: 'GOL', number: 22, photo: 'https://ui-avatars.com/api/?name=Diogo+Costa&background=046A38&color=fff&size=128&font-size=0.33', rating: 85 },
            { name: 'João Cancelo', pos: 'LAT', number: 20, photo: 'https://ui-avatars.com/api/?name=Cancelo&background=046A38&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Rúben Dias', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Dias&background=046A38&color=fff&size=128&font-size=0.33', rating: 89 },
            { name: 'Pepe', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Pepe&background=046A38&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Nuno Mendes', pos: 'LAT', number: 19, photo: 'https://ui-avatars.com/api/?name=Nuno+Mendes&background=046A38&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'João Palhinha', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Palhinha&background=046A38&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Vitinha', pos: 'VOL', number: 23, photo: 'https://ui-avatars.com/api/?name=Vitinha&background=046A38&color=fff&size=128&font-size=0.33', rating: 85 },
            { name: 'Bruno Fernandes', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Fernandes&background=046A38&color=fff&size=128&font-size=0.33', rating: 88 },
            { name: 'Bernardo Silva', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Bernardo&background=046A38&color=fff&size=128&font-size=0.33', rating: 88 },
            { name: 'Rafael Leão', pos: 'ATA', number: 17, photo: 'https://ui-avatars.com/api/?name=Leao&background=046A38&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Cristiano Ronaldo', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Ronaldo&background=046A38&color=fff&size=128&font-size=0.33', rating: 86 }
        ]
    },
    {
        id: 'cd', name: 'RD Congo', group: 'Grupo K', flag: 'cd.svg', subtitle: 'África', titles: 0, rank: '63º', afiliation: 'CAF', rare: false, color: '#007FFF',
        players: [
            { name: 'Lionel Mpasi', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Mpasi&background=007FFF&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Arthur Masuaku', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Masuaku&background=007FFF&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Chancel Mbemba', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Mbemba&background=007FFF&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Dylan Batubinsika', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Batubinsika&background=007FFF&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Gédéon Kalulu', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Kalulu&background=007FFF&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Samuel Moutoussamy', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Moutoussamy&background=007FFF&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Gaël Kakuta', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Kakuta&background=007FFF&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Théo Bongonda', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Bongonda&background=007FFF&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Cédric Bakambu', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Bakambu&background=007FFF&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Silas Katompa', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Silas&background=007FFF&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Fiston Mayele', pos: 'ATA', number: 12, photo: 'https://ui-avatars.com/api/?name=Mayele&background=007FFF&color=fff&size=128&font-size=0.33', rating: 74 }
        ]
    },
    {
        id: 'uz', name: 'Uzbequistão', group: 'Grupo K', flag: 'uz.svg', subtitle: 'Ásia', titles: 0, rank: '62º', afiliation: 'AFC', rare: false, color: '#0099B5',
        players: [
            { name: 'Utkir Yusupov', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Yusupov&background=0099B5&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Husniddin Aliqulov', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Aliqulov&background=0099B5&color=fff&size=128&font-size=0.33', rating: 69 },
            { name: 'Abdukodir Khusanov', pos: 'ZAG', number: 15, photo: 'https://ui-avatars.com/api/?name=Khusanov&background=0099B5&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Rustam Ashurmatov', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Ashurmatov&background=0099B5&color=fff&size=128&font-size=0.33', rating: 67 },
            { name: 'Sherzod Nasrullaev', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Nasrullaev&background=0099B5&color=fff&size=128&font-size=0.33', rating: 68 },
            { name: 'Otabek Shukurov', pos: 'VOL', number: 7, photo: 'https://ui-avatars.com/api/?name=Shukurov&background=0099B5&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Odiljon Hamrobekov', pos: 'VOL', number: 9, photo: 'https://ui-avatars.com/api/?name=Hamrobekov&background=0099B5&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Abbosbek Fayzullaev', pos: 'MEI', number: 14, photo: 'https://ui-avatars.com/api/?name=Fayzullaev&background=0099B5&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Jaloliddin Masharipov', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Masharipov&background=0099B5&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Eldor Shomurodov', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Shomurodov&background=0099B5&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Oston Urunov', pos: 'ATA', number: 20, photo: 'https://ui-avatars.com/api/?name=Urunov&background=0099B5&color=fff&size=128&font-size=0.33', rating: 71 }
        ]
    },
    {
        id: 'co', name: 'Colômbia', group: 'Grupo K', flag: 'co.svg', subtitle: 'América do Sul', titles: 0, rank: '9º', afiliation: 'CONMEBOL', rare: false, color: '#FCD116',
        players: [
            { name: 'Camilo Vargas', pos: 'GOL', number: 12, photo: 'https://ui-avatars.com/api/?name=Vargas&background=FCD116&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Daniel Muñoz', pos: 'LAT', number: 21, photo: 'https://ui-avatars.com/api/?name=Munoz&background=FCD116&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Davinson Sánchez', pos: 'ZAG', number: 23, photo: 'https://ui-avatars.com/api/?name=Sanchez&background=FCD116&color=fff&size=128&font-size=0.33', rating: 78 },
            { name: 'Carlos Cuesta', pos: 'ZAG', number: 2, photo: 'https://ui-avatars.com/api/?name=Cuesta&background=FCD116&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Johan Mojica', pos: 'LAT', number: 17, photo: 'https://ui-avatars.com/api/?name=Mojica&background=FCD116&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Richard Ríos', pos: 'VOL', number: 6, photo: 'https://ui-avatars.com/api/?name=Rios&background=FCD116&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Jefferson Lerma', pos: 'VOL', number: 16, photo: 'https://ui-avatars.com/api/?name=Lerma&background=FCD116&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'James Rodríguez', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=James&background=FCD116&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Jhon Arias', pos: 'MEI', number: 11, photo: 'https://ui-avatars.com/api/?name=Arias&background=FCD116&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Luis Díaz', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Diaz&background=FCD116&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Jhon Córdoba', pos: 'ATA', number: 24, photo: 'https://ui-avatars.com/api/?name=Cordoba&background=FCD116&color=fff&size=128&font-size=0.33', rating: 79 }
        ]
    },

    // ======================
    // Grupo L
    // ======================
    {
        id: 'en', name: 'Inglaterra', group: 'Grupo L', flag: 'gb.svg', subtitle: 'Europa', titles: 1, rank: '4º', afiliation: 'UEFA', rare: true, color: '#CE1124',
        players: [
            { name: 'Jordan Pickford', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Pickford&background=CE1124&color=fff&size=128&font-size=0.33', rating: 83 },
            { name: 'Kyle Walker', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Walker&background=CE1124&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'John Stones', pos: 'ZAG', number: 5, photo: 'https://ui-avatars.com/api/?name=Stones&background=CE1124&color=fff&size=128&font-size=0.33', rating: 85 },
            { name: 'Marc Guéhi', pos: 'ZAG', number: 6, photo: 'https://ui-avatars.com/api/?name=Guehi&background=CE1124&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Luke Shaw', pos: 'LAT', number: 3, photo: 'https://ui-avatars.com/api/?name=Shaw&background=CE1124&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Declan Rice', pos: 'VOL', number: 4, photo: 'https://ui-avatars.com/api/?name=Rice&background=CE1124&color=fff&size=128&font-size=0.33', rating: 87 },
            { name: 'Kobbie Mainoo', pos: 'VOL', number: 26, photo: 'https://ui-avatars.com/api/?name=Mainoo&background=CE1124&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Jude Bellingham', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Bellingham&background=CE1124&color=fff&size=128&font-size=0.33', rating: 90 },
            { name: 'Phil Foden', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Foden&background=CE1124&color=fff&size=128&font-size=0.33', rating: 88 },
            { name: 'Bukayo Saka', pos: 'ATA', number: 7, photo: 'https://ui-avatars.com/api/?name=Saka&background=CE1124&color=fff&size=128&font-size=0.33', rating: 87 },
            { name: 'Harry Kane', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Kane&background=CE1124&color=fff&size=128&font-size=0.33', rating: 90 }
        ]
    },
    {
        id: 'hr', name: 'Croácia', group: 'Grupo L', flag: 'hr.svg', subtitle: 'Europa', titles: 0, rank: '12º', afiliation: 'UEFA', rare: false, color: '#ED1C24',
        players: [
            { name: 'D. Livaković', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=Livakovic&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'Josip Stanišić', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Stanisic&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Josip Šutalo', pos: 'ZAG', number: 6, photo: 'https://ui-avatars.com/api/?name=Sutalo&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Joško Gvardiol', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Gvardiol&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 85 },
            { name: 'Luka Modrić', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Modric&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 86 },
            { name: 'Mateo Kovačić', pos: 'MEI', number: 8, photo: 'https://ui-avatars.com/api/?name=Kovacic&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 84 },
            { name: 'Marcelo Brozović', pos: 'VOL', number: 11, photo: 'https://ui-avatars.com/api/?name=Brozovic&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 80 },
            { name: 'Mario Pašalić', pos: 'MEI', number: 15, photo: 'https://ui-avatars.com/api/?name=Pasalic&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Lovro Majer', pos: 'MEI', number: 7, photo: 'https://ui-avatars.com/api/?name=Majer&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 79 },
            { name: 'Andrej Kramarić', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Kramaric&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 81 },
            { name: 'Ivan Perišić', pos: 'ATA', number: 14, photo: 'https://ui-avatars.com/api/?name=Perisic&background=ED1C24&color=fff&size=128&font-size=0.33', rating: 79 }
        ]
    },
    {
        id: 'gh', name: 'Gana', group: 'Grupo L', flag: 'gh.svg', subtitle: 'África', titles: 0, rank: '64º', afiliation: 'CAF', rare: false, color: '#000000',
        players: [
            { name: 'L. Ati-Zigi', pos: 'GOL', number: 1, photo: 'https://ui-avatars.com/api/?name=AtiZigi&background=000000&color=fff&size=128&font-size=0.33', rating: 73 },
            { name: 'Alidu Seidu', pos: 'LAT', number: 2, photo: 'https://ui-avatars.com/api/?name=Seidu&background=000000&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'M. Salisu', pos: 'ZAG', number: 4, photo: 'https://ui-avatars.com/api/?name=Salisu&background=000000&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Alexander Djiku', pos: 'ZAG', number: 23, photo: 'https://ui-avatars.com/api/?name=Djiku&background=000000&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Gideon Mensah', pos: 'LAT', number: 14, photo: 'https://ui-avatars.com/api/?name=Mensah&background=000000&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'Thomas Partey', pos: 'VOL', number: 5, photo: 'https://ui-avatars.com/api/?name=Partey&background=000000&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'M. Kudus', pos: 'MEI', number: 20, photo: 'https://ui-avatars.com/api/?name=Kudus&background=000000&color=fff&size=128&font-size=0.33', rating: 82 },
            { name: 'E. Nuamah', pos: 'ATA', number: 10, photo: 'https://ui-avatars.com/api/?name=Nuamah&background=000000&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'Jordan Ayew', pos: 'ATA', number: 9, photo: 'https://ui-avatars.com/api/?name=Ayew&background=000000&color=fff&size=128&font-size=0.33', rating: 76 },
            { name: 'Antoine Semenyo', pos: 'ATA', number: 25, photo: 'https://ui-avatars.com/api/?name=Semenyo&background=000000&color=fff&size=128&font-size=0.33', rating: 77 },
            { name: 'Iñaki Williams', pos: 'ATA', number: 19, photo: 'https://ui-avatars.com/api/?name=Inaki&background=000000&color=fff&size=128&font-size=0.33', rating: 82 }
        ]
    },
    {
        id: 'pa', name: 'Panamá', group: 'Grupo L', flag: 'pa.svg', subtitle: 'Concacaf', titles: 0, rank: '35º', afiliation: 'CONCACAF', rare: false, color: '#DA121A',
        players: [
            { name: 'Orlando Mosquera', pos: 'GOL', number: 22, photo: 'https://ui-avatars.com/api/?name=Mosquera&background=DA121A&color=fff&size=128&font-size=0.33', rating: 69 },
            { name: 'Michael Murillo', pos: 'LAT', number: 23, photo: 'https://ui-avatars.com/api/?name=Murillo&background=DA121A&color=fff&size=128&font-size=0.33', rating: 75 },
            { name: 'José Córdoba', pos: 'ZAG', number: 3, photo: 'https://ui-avatars.com/api/?name=Cordoba&background=DA121A&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'Edgardo Fariña', pos: 'ZAG', number: 24, photo: 'https://ui-avatars.com/api/?name=Farina&background=DA121A&color=fff&size=128&font-size=0.33', rating: 67 },
            { name: 'Eric Davis', pos: 'LAT', number: 15, photo: 'https://ui-avatars.com/api/?name=Davis&background=DA121A&color=fff&size=128&font-size=0.33', rating: 69 },
            { name: 'Aníbal Godoy', pos: 'VOL', number: 20, photo: 'https://ui-avatars.com/api/?name=Godoy&background=DA121A&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Adalberto Carrasquilla', pos: 'VOL', number: 8, photo: 'https://ui-avatars.com/api/?name=Carrasquilla&background=DA121A&color=fff&size=128&font-size=0.33', rating: 74 },
            { name: 'Édgar Bárcenas', pos: 'MEI', number: 10, photo: 'https://ui-avatars.com/api/?name=Barcenas&background=DA121A&color=fff&size=128&font-size=0.33', rating: 72 },
            { name: 'José Luis Rodríguez', pos: 'MEI', number: 7, photo: 'https://ui-avatars.com/api/?name=Rodriguez&background=DA121A&color=fff&size=128&font-size=0.33', rating: 70 },
            { name: 'Ismael Díaz', pos: 'ATA', number: 11, photo: 'https://ui-avatars.com/api/?name=Diaz&background=DA121A&color=fff&size=128&font-size=0.33', rating: 71 },
            { name: 'José Fajardo', pos: 'ATA', number: 17, photo: 'https://ui-avatars.com/api/?name=Fajardo&background=DA121A&color=fff&size=128&font-size=0.33', rating: 70 }
        ]
    }
];