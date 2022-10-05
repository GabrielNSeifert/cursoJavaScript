//Retorna um valor e termina a função

function criaMultiplicador(multiplicador) {
    return function (numero){
        return numero * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2),triplica(2),quadriplica(2));