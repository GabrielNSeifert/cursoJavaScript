/* Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error". */

function somarDoisNumeros() {
    const form = document.querySelector("form");
    const a = document.querySelector("#a");
    const b = document.querySelector("#b");
    const resultado = document.querySelector("#resultado");

    function soma(enviar) {
        enviar.preventDefault();
        const c = parseFloat(a.value) * 3.5 + parseFloat(b.value) * 7.5/11;
        resultado.innerHTML = c;
    }
    form.addEventListener('submit', soma);
}
somarDoisNumeros();