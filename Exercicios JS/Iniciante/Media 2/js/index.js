/* Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal. */

(function() {
const nota1 = document.querySelector('#a');
const nota2 = document.querySelector('#b');
const nota3 = document.querySelector('#c');
const botaoCalcular = document.querySelector('#btCalcular');
const resultado = document.querySelector('#resultado');

function criarMediaPonderada(){
    const resultadoX = (((parseFloat(nota1.value) * 2) + (parseFloat(nota2.value) * 3) + (parseFloat(nota3.value) * 5)) / 10).toFixed(1);

    if (resultadoX == 'NaN'){
        resultado.innerHTML = 'Valor inválido!';
    } else {
        resultado.innerHTML = resultadoX;
    }
}

botaoCalcular.addEventListener('click', criarMediaPonderada);

}) ();
