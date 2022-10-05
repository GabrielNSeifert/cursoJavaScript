function relogio() {

    const form = document.querySelector("form");
    const iniciar = document.querySelector("#iniciar");
    const pausar = document.querySelector("#pausar");
    const zerar = document.querySelector("#zerar");
    const div = document.querySelector("#timer");
    let segundos = 0;
    let segundosDezena = 0;
    let minutos = 0;
    let minutosDezena = 0;
    let horas = 0;
    let horasDezena = 0;

    function prevenirPadrao(enviar) {
        enviar.preventDefault();
    }
    form.addEventListener('submit', prevenirPadrao);

    function começar() {
        const setComeçar = setInterval(function () {
            segundos = ++segundos;
            div.innerHTML = `${horasDezena}${horas}:${minutosDezena}${minutos}:${segundosDezena}${segundos}`;

            if (segundos > 8) {
                segundos = -1;
                segundosDezena = ++segundosDezena;
            }

            if (segundosDezena === 6) {
                segundosDezena = 0;
                minutos = ++minutos;
            }

            if (minutos >= 10) {
                minutos = 0;
                minutosDezena = ++minutosDezena;
            }

            if (minutosDezena === 6) {
                minutosDezena = 0;
                horas = ++horas;
            }

            if (horas >= 10) {
                horas = 0;
                horasDezena = ++horasDezena;
            }

            if (horasDezena === 2 && horas === 4) {
                segundos = 0;
                segundosDezena = 0;
                minutos = 0;
                minutosDezena = 0;
                horas = 0;
                horasDezena = 0;
            }
            
        }, 1000)

        function pause() {
            clearInterval(setComeçar);
            document.querySelector("#timer").style.color = "crimson";
        }

        pausar.addEventListener('click', pause);

        function zerarTimer() {
            segundos = 0;
            segundosDezena = 0;
            minutosDezena = 0;
            minutos = 0;
            horas = 0;
            horasDezena = 0;
            document.querySelector("#timer").style.color = "white";
            div.innerHTML = `${horasDezena}${horas}:${minutosDezena}${minutos}:${segundosDezena}${segundos}`;
            clearInterval(setComeçar);
        }

        zerar.addEventListener('click', zerarTimer);

        document.querySelector("#timer").style.color = "white";

    };

    iniciar.addEventListener('click', começar);
}
relogio();