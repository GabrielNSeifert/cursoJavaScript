function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        configurable: true, // Configuravel
        get: function() {
            return estoque;
        },
        set: function(){
            estoquePrivado = valor;
        }
    });
};

const p1 = new Produto('Camiseta', 30, 3);

console.log(p1);