function ran() {
    listaClasse = document.getElementById('classe');
    personagem = document.getElementById('personagem');
    info = document.getElementById('info');

// Classe Selecionada == Tank;
    if (listaClasse.value == "tk") {
        valorR = Math.floor(Math.random() * 12);
        switch (valorR) {
            case 0: // D.VA
                personagem.src = "./assets/heroes/D.VAIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/dva/";
            break;
            case 1: // DoomFist
                personagem.src = "./assets/heroes/DoomFistIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/doomfist/";
            break;
            case 2: // Mauga
                personagem.src = "./assets/heroes/MaugaIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/mauga/";
            break;
            case 3: // Orisa
                personagem.src = "./assets/heroes/OrisaIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/orisa/";
            break;
            case 4: // JunkerQueen
                personagem.src = "./assets/heroes/JunkerQueenIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/junker-queen/";
            break;
            case 5: // Ramattra
                personagem.src = "./assets/heroes/RamattraIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/ramattra/";
            break;
            case 6: // Reinhardt
                personagem.src = "./assets/heroes/ReinhardtIcon.png";
                info.href =  "https://overwatch.blizzard.com/pt-br/heroes/reinhardt/";
            break;
            case 7: // Roadhog
                personagem.src = "./assets/heroes/RoadhogIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/roadhog/";
            break;
            case 8: // Sigma
                personagem.src = "./assets/heroes/SigmaIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/sigma/";
            break;
            case 9: // Winston
                personagem.src = "./assets/heroes/WinstonIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/winston/";
            break;
            case 10: // Wrecking Ball
                personagem.src = "./assets/heroes/WreckingBallIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/wrecking-ball/";
            break;
            case 11: // Zarya
                personagem.src = "./assets/heroes/ZaryaIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/zarya/";
            break;
            default:
                alert("O personagem gerado não existe!");
        }
    }

// Classe Selecionada == Dano;
    else if(listaClasse.value == "dm") {
        valorR = Math.floor(Math.random() * 18);
        switch (valorR) {
            case 0: // Ashe
                personagem.src = "./assets/heroes/AsheIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/ashe/";
            break;
            case 1: // Bastion
                personagem.src = "./assets/heroes/BastionIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/bastion/";
            break;
            case 2: // Cassidy
                personagem.src = "./assets/heroes/CassidyIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/cassidy/";
            break;
            case 3: // Echo
                personagem.src = "./assets/heroes/EchoIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/echo";
            break;
            case 4: // Genji
                personagem.src = "./assets/heroes/GenjiIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/genji/";
            break;
            case 5: // Hanzo
                personagem.src = "./assets/heroes/HanzoIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/hanzo/";
            break;
            case 6: // Junkrat
                personagem.src = "./assets/heroes/JunkratIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/junkrat/";
            break;
            case 7: // Mei
                personagem.src = "./assets/heroes/MeiIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/mei/";
            break;
            case 8: // Pharah
                personagem.src = "./assets/heroes/PharahIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/pharah/";
            break;
            case 9: // Reaper
                personagem.src = "./assets/heroes/ReaperIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/reaper/";
            break;
            case 10: // Sojourn
                personagem.src = "./assets/heroes/SojournIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/sojourn/";
            break;
            case 11: // Soldier76
                personagem.src = "./assets/heroes/Soldier76Icon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/soldier-76/";
            break;
            case 12: // Sombra
                personagem.src = "./assets/heroes/SombraIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/sombra/";
            break;
            case 13: // Symmetra
                personagem.src = "./assets/heroes/SymmetraIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/symmetra/";
            break;
            case 14: // Torbjorn
                personagem.src = "./assets/heroes/TorbjornIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/torbjorn/";
            break;
            case 15: // Tracer
                personagem.src = "./assets/heroes/TracerIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/tracer/";
            break;
            case 16: // Venture
                personagem.src = "./assets/heroes/VentureIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/venture/";
            break;
            case 17: // Widowmaker
                personagem.src = "./assets/heroes/WidowmakerIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/widowmaker/";
            break;
            default:
                alert("O personagem gerado não existe!");
        }
    }

// Classe Selecionada == Suporte;
    else {
        valorR = Math.floor(Math.random() * 11);
        switch (valorR) {
            case 0: // Juno
                personagem.src = "./assets/heroes/JunoIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/juno/";
            break;
            case 1: // Ana
                personagem.src = "./assets/heroes/AnaIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/ana/";
            break;
            case 2: // Baptiste
                personagem.src = "./assets/heroes/BaptisteIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/baptiste/";
            break;
            case 3: // Brigitte
                personagem.src = "./assets/heroes/BrigitteIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/brigitte";
            break;
            case 4: // Illari
                personagem.src = "./assets/heroes/IllariIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/illari/";
            break;
            case 5: // Kiriko
                personagem.src = "./assets/heroes/KirikoIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/kiriko/";
            break;
            case 6: // Lifeweaver
                personagem.src = "./assets/heroes/LifeweaverIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/liveweaver/";
            break;
            case 7: // Lúcio
                personagem.src = "./assets/heroes/LucioIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/lucio/";
            break;
            case 8: // Mercy
                personagem.src = "./assets/heroes/MercyIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/mercy/";
            break;
            case 9: // Moira
                personagem.src = "./assets/heroes/MoiraIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/moira/";
            break;
            case 10: // Zenyatta
                personagem.src = "./assets/heroes/ZenyattaIcon.png";
                info.href = "https://overwatch.blizzard.com/pt-br/heroes/zenyatta/";
            break;
            default:
                alert("O personagem gerado não existe!");
        }
    }
}