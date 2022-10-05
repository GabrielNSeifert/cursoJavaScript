const pessoa = {
    nome: "Gabriel",
    sobrenome: 'Seifert',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: "386",
    }
};

console.log(pessoa.endereço.rua);

const numer = pessoa.endereço.numero;
console.log(numer);

/////////////////////////////////////////////////////////////////////////////

const {nome: nomeNovo, sobrenome,idade} = pessoa;
console.log(nomeNovo,sobrenome,idade);