/* Escreva uma função que recebe um número e retorne o seguinte:
 Numero é divisivel por 3 = Fizz
 Numero é divisivel por 5 = Buzz
 Numero é divisivel por 3 e 5 = FizzBuzz
 Numero não é divisivel por 3 e 5 = Retorna o proprio numero
 Checar se o numero é realmente um numero = Retorna o proprio numero
 Use a função com numeros de 0 a 100 */

function fizzBuzz(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(100);

