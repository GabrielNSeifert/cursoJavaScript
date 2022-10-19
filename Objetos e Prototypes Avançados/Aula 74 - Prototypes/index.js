function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() { 
    return  this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Gabriel', 'Neves');
const pessoa2 = new Pessoa('Ayanokouji', 'Elite');

console.log(pessoa1.nomeCompleto());