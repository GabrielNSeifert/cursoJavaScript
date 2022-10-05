// For in -> lê os índices ou chaves

const frutas = ['Pera', 'Laranja', 'Maça'];
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Neves',
    idade: 21,
}

for (let i in frutas) {
    console.log(frutas[i]);
}

for (let idade in pessoa) {
    console.log(idade, pessoa[idade]);
}