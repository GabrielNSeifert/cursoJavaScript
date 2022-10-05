/*
Operadores Lógicos
&& -> AND -> E      Todas as expressões precisam ser verdadeiras para retornar 'True'.
|| -> OR  -> OU     Apenas uma expressão precisa ser verdadeira para retornar o valor 'True'.
!  -> NOT -> NÃO
*/


const expressãoAnd = true && false && true;
const expressãoOr = true || false || false;
const expressãoNot = !true;
console.log(expressãoAnd, expressãoOr, expressãoNot);
