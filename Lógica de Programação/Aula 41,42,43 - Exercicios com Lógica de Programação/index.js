/* Escreva uma função que recebe 2 números e retorna o maior deles. */
function maiorNumero (n1,n2) {
    if (n1 < n2){
        console.log(`O maior número é: ${n2}`);
    } else if (n1 > n2){
        console.log(`O maior número é: ${n1}`);
    } else {
        console.log("Os dois números são iguais.");
    }
}
maiorNumero (10,1);
/* Outra forma *****************************************************/                       
const MaiorNumero = function (n1,n2){
    return n1 > n2 ? n1 : n2;
}
console.log(MaiorNumero(10,20));
/* Outra forma *****************************************************/
const MaiorNumero2 = (n1,n2) => n1 > n2 ? n1 : n1;
console.log(MaiorNumero2(30,20))


/* Escreva uma função chamada ePaisagem que recebe dois argumentos,
largura e altura de uma imagem (number). Retorne true se a imagem estiver
no modo paisagem. */
const ePaisagem = (A,L) => A > L ? false : true;
console.log(ePaisagem(10,20));