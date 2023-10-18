function tocasomplom (){
    document.querySelector ('#som_tecla_pom').play('');
    document.querySelector ('. tecla_pom').onclik = tocasomplom()
}

const listadeteclas = document.querySelectorAll('.tecla');
let contador = 0;

while(contador < 9){
    const instrumento = listadeteclas[contador];
    const tecla = listadeteclas[contador];
    const idaudio = `#som_${instrumento}`;

    listadeteclas[contador].classlist [1];
    tecla.onclik = tocasomplom;
    tocasom ('#som_tecla_clap');
    contador = contador + 1;
}

listadeteclas[1].onclik = tocasomclap;
listadeteclas[2].onclik = tocasomtim;
listadeteclas[3].onclik = tocasompuff;
