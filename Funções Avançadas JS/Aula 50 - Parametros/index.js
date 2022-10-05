//arguments guarda todos os parametros enviados em uma array
//não funciona em arrow function

function nome(){
    console.log(arguments);
}

nome('Oshe',1,2,3,4,5);

function conta(operador,acumulador,...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador = acumulador + numero;
        if (operador === '-') acumulador = acumulador - numero;
        if (operador === '/') acumulador = acumulador / numero;
        if (operador === '*') acumulador = acumulador * numero;
        console.log(acumulador);
    }
}

conta('+',0,20,30,40,50);