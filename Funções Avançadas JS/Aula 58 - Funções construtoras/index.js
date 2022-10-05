// Função contrutora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log('Sou um método');
    };
}

const p1 = new Pessoa('Gabriel', 'Neves');
const p2 = new Pessoa('Ayanokouji', 'Kyotaka')
console.log(p2.nome, p2.sobrenome);
p2.metodo();