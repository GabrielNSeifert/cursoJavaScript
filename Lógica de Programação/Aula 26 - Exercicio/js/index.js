function imcCaluladora() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', botaoEnviar);

    function botaoEnviar(enviar) {
        enviar.preventDefault();

        const peso = document.querySelector('#Input-1');
        const altura = document.querySelector('#Input-2');
        const imc = peso.value / altura.value ** 2;
        let resultado = document.querySelector('#resultado');

        if (imc < 18.5) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Abaixo do Peso).`;
        else if (imc >= 18.5 && imc <= 24.9) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Peso Normal).`;
        else if (imc >= 25 && imc <= 29.9) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Sobrepeso).`;
        else if (imc >= 30 && imc <= 34.9) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade Grau 1).`;
        else if (imc >= 35 && imc <= 39.9) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade Grau 2).`;
        else if (imc > 40) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade Grau 3).`;
        else resultado.innerHTML = `Peso ou Altura Invalidos.`;
    }
}

imcCaluladora();
