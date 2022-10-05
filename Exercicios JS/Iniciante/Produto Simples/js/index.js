/* Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.    */

function produtoDoisNumeros() {
    const form = document.querySelector("form");
    const a = document.querySelector("#a");
    const b = document.querySelector("#b");
    const PROD = document.querySelector("#resultado");

    function soma(enviar) {
        enviar.preventDefault();
        const c = parseFloat(a.value)*parseFloat(b.value);
        PROD.innerHTML = c;
    }
    form.addEventListener('submit', soma);
}
produtoDoisNumeros();