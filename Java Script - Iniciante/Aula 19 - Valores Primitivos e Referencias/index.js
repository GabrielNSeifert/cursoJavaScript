function meuEscopo(){
    const form = document.querySelector('#Formulario');
    const resultado = document.querySelector('#Resultado');
    const pessoas = [];
    
    function recebeEventoForm (evento) {
       evento.preventDefault();

       let Nome = form.querySelector('#Nome');
       let Sobrenome = form.querySelector('#Sobrenome');
       let Peso = form.querySelector('#Peso');
       let Altura = form.querySelector('#Altura');
       
       pessoas.push = [Nome.value,Sobrenome.value,Peso.value,Altura.value];
        resultado.innerHTML += `${Nome.value}`
        console.log(pessoas);

    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
