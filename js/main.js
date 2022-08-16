var player = 'X';
var jogadas = 0;
var jogando = true;

var x = 0;
var o = 0;

function checkjogo(id) {
    var pc =  document.getElementById('cpus').checked;
    var td = document.getElementById(id);

    if(td.style.backgroundImage == '' && jogando == true){
        td.style.backgroundImage = `url(images/${player}.png)`;

        jogadas++;

        if(ganhadores()){
            if(player == "X") {
                x++;
                document.getElementById("texto").innerHTML = `Mário aniquilou Goomba! `;

                const audio = document.querySelector('audio')
                audio.play();
            } else {
                o++
                document.getElementById("texto").innerHTML = `Goomba derrotou Mário!`;

                const audio = document.querySelector('audio')
                audio.play();
            }

            document.getElementById('point_x').innerHTML = x;
            document.getElementById('point_o').innerHTML = o;
        }

        player = (player == 'X' ? 'O' : 'X');
    }

    if(pc && player == "O"){
        setTimeout(() => {checkjogo(jogoDoPc())}, 120);
    } 

    function jogoDoPc() {
        if (td.style.backgroundImage == '') {
            return true;
        }
        return 'c' + Math.floor((Math.random() * 9) + 1);
    }
}

function ganhadores() {
    var tiposVitoria = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],

        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],

        [1, 5, 9],
        [3, 5, 7],
    ]

    for (let id of tiposVitoria) {
        let one = document.getElementById('c' + id[0]).style.backgroundImage;
        let two = document.getElementById('c' + id[1]).style.backgroundImage;
        let three = document.getElementById('c' + id[2]).style.backgroundImage; 

        if (one == two && one == three && one != '') {
            jogando = false;
            return true;
        }
    }

    if (jogadas == 9) {
        document.getElementById("texto").innerHTML = "Não ouve ganhadores :(";

        const audio = document.getElementById('cogumelo')
        audio.setVolume
        audio.play();
    }
}

function restart() {
    for(let restart_game = 1; restart_game <=9; restart_game++){
        document.getElementById(`c${restart_game}`).style.backgroundImage = '';
    }

    jogadas = 0;
    jogando = true;
    player = 'X';

    document.getElementById("texto").innerHTML = "Aguardando resultado...";
}

function newGame() {
    for(let new_game = 1; new_game <=9; new_game++){
        document.getElementById(`c${new_game}`).style.backgroundImage = '';
    }

    jogadas = 0;
    jogando = true;
    player = 'X';

    x = 0;
    o = 0;

    document.getElementById('point_x').innerHTML = x;
    document.getElementById('point_o').innerHTML = o;
    document.getElementById("texto").innerHTML = "Aguardando resultado...";
}