// defineProperty - defineProperties

function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque,   // Valor
        writable: false,  // Pode Alterar
        configurable: true, // Configuravel
    })
}

const p1 = new Produto('Camiseta', 30, 3);
console.log(p1);