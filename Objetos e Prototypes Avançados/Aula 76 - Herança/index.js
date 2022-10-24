// Produto
// Camiseta, caneca 

function Produto (nome,preço){
    this.nome = nome;
    this.preço = preço;
}

Produto.prototype.aumento = function (quantia){
    this.preço += quantia;
};

Produto.prototype.desconto = function (quantia){
    this.preço -= quantia;
};

function Camiseta(nome,preço,cor) {
    Produto.call(this, nome, preço);
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta');

Camiseta.prototype = Object.create(Produto.prototype);