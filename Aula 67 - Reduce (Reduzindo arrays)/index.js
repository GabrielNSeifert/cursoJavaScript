/*  Some todos os números (reduce)
    Retorne um array com os pares (filter)
    Retorne um array com o dobro dos valores (map) */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador = acumulador + valor;
    return acumulador;
}, 0); /* 0 é o valor inicial do argumento acumulador */

const total1 = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor%2 === 0) acumulador.push(valor);
    return acumulador;
}, []); /* Trazendo os valores pares para um array */

console.log(total1);

// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Gabriel', idade: 21},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 80},
    {nome: 'Letícia', idade: 70},
    {nome: 'Rosana', idade: 60},
    {nome: 'Wallace', idade: 47},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador,valor){
   if(acumulador.idade > valor.idade) return acumulador;
   return valor;
});

console.log(pessoaMaisVelha);
