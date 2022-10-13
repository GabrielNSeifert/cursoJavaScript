// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobroNumeros = numeros.map(valor => valor*2);

//console.log(dobroNumeros);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova Apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Gabriel', idade: 21},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 70},
    {nome: 'Rosana', idade: 60},
    {nome: 'Wallace', idade: 47},
];

const pessoasCopia = JSON.parse(JSON.stringify(pessoas)); /* Para não afetar o array "pessoas" */

let i = 0;

const nomePessoa = pessoasCopia.map(valor => valor.nome);

const idadePessoas = pessoasCopia.map(valor => ({idade: valor.idade}));

const idPessoas = pessoasCopia.map(valor => valor.id = i++); 

console.log();

