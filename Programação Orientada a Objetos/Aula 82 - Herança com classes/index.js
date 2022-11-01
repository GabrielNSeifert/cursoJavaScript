class DispositivoEletronico{

    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + " já ligado");
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(this.nome + " jpa desligado");
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo ){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Você alterou o método ligar.');
    }
}

const s1 = new Smartphone("Redmi", "Azul", "LG");

const t1 = new Tablet('Fuck', false);

console.log(t1);
