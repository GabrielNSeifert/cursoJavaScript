
const produto = {nome: 'caneca', preço: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
})


console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));
console.log(Object.keys(produto));
