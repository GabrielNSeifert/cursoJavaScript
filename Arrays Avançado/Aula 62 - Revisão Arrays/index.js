
const nomes = ['Eduardo', 'Maria', 'Joana'];

nomes[2] = 'João'; /* Adiciona um valor a um indice (substitui valor anterior) */

delete nomes[1]; /* Deleta um valor de um indicie */

const nomes2 = [...nomes]; /* Copia uma array em outra sem deixar as duas linkadas */

nomes2.pop(); /* Remove o topo do array */

nomes2.shift(); /* Remove o começo do array */

nomes.push('Wallace'); /* Adiciona valor ao topo do array */

nomes.unshift('Coé'); /* Adiciona valores ao começo do array */

console.log(nomes.length); /* Pega o tamanho de um array */

const nomes3 = nomes.slice(1,3); /* Fatia parte do array (Do indice um a indice 3) */

console.log(nomes, nomes2, nomes3);





