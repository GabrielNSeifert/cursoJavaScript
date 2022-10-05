function criaFunção(){
    const nome = 'Neves';
    return function (){
        return nome;
    };
}

const funçao = criaFunção();

console.log(funçao);
