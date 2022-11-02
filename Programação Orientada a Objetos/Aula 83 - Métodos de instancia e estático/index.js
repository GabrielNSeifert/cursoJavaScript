class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume () {
        this.volume -= 2;
    }

    static trocaPilha() {
        console.log('Trocado.'); 
    }

    static soma(x,y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');

ControleRemoto.trocaPilha();

console.log(controle1);

console.log(ControleRemoto.soma(2,4));
