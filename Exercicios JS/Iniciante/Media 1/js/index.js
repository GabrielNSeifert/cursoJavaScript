/* Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal. */

function mediaPonderada() {
    const form = document.querySelector('#form');
    const input1 = document.querySelector('#a');
    const input2 = document.querySelector('#b');
    const resultado = document.querySelector('#resultado');

    function calcularMedia(e) {
        e.preventDefault();
        const media = (((parseFloat(input1.value) * 3.5) + (parseFloat(input2.value) * 7.5)) / 11).toFixed(1);
        if (media === 'NaN'){
            resultado.innerHTML = 'Valor inválido.';
        } else {
            resultado.innerHTML = media;
        }
    }
    form.addEventListener('submit', calcularMedia);
}

mediaPonderada();
