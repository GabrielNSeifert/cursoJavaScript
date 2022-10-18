const pessoa = {
    nome: 'Gabs',
    sobrenome: 'Neves'
};

const pessoa1 = new Object();

pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 2;

pessoa1.falarNome = function() {
    return `${this.nome} está falando seu nome.`
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const p1 = new Pessoa('Gabriel', 'Neves');
console.log(p1);