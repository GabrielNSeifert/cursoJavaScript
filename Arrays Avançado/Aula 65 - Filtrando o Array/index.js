// Filter, map, reduce

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(callbackFilter);

function callbackFilter(valor, indice, array){
   return valor > 10;
}

//console.log(numerosFiltrados);
 

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 55 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Gabriel', idade: 21},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 70},
    {nome: 'Rosana', idade: 60},
    {nome: 'Wallace', idade: 47},
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

const pessoasIdade55 = pessoas.filter(obj => obj.idade >= 55 );

const ultimaLetraA = pessoas.filter( obj => obj.nome.slice(-1) == 'a' );


console.log(pessoasNomeGrande);
