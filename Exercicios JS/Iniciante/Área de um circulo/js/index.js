/* A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159: */

function calcularArea() {
    const form = document.querySelector("form");
    const raio = document.querySelector("#raio");
    const resultado = document.querySelector("#resultado");

    function areaCalculo(enviar) {
        enviar.preventDefault();
        const area = parseFloat(raio.value)**2*3.14159;
        resultado.innerHTML = area.toFixed(2);
    }
    form.addEventListener('submit', areaCalculo);
}
calcularArea();